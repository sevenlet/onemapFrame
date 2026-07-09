/**
 * 应用入口
 */
import '@ths/design/lib/style.css';
import 'element-plus/lib/theme-chalk/index.css';
import 'video.js/dist/video-js.css';
import 'ol/ol.css';
import '@ths-map-sdk/widgets/style.css';

import {
  createApp, reactive, ref, watch, watchEffect, provide, inject,
  toRefs, nextTick, onMounted, computed, onUnmounted,
} from 'vue';
import { useRoute, createWebHashHistory, createRouter } from 'vue-router';
import ElementPlus from 'element-plus';
import ElementPlusLocaleZhCn from 'element-plus/es/locale/lang/zh-cn';
import { createI18n } from 'vue-i18n';
import mitt from 'mitt';
import _ from 'lodash';
import { io } from 'socket.io-client';
import { routes } from './route.js';
import http from './http.js';
import { replaceCssVariables, guid, getUrlParam, getQueryParam, loadMicroAppRegistry } from './utils.js';
import { initSocket } from './websocket.js';
import { loadGlobalVariables, loadGlobalFunctions } from './globals/index.js';
import { themes } from './theme.js';
import RootComponent from './pages/root.vue';

import microApp from '@micro-zoe/micro-app'
microApp.start()

import { bindReactiveToGlobal } from './bridge.js';

// 必须全局注册的 ths-design 组件（mountDynamicComponent 等工具函数通过 appContext.components 查找）
import { TDialog } from '@ths/design';

import i18nMessages from './resources/lang.js';
const i18n = createI18n({
  legacy: false,
  locale: 'zh-cn',
  fallbackLocale: 'zh-cn',
  messages: i18nMessages,
});

const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
});

// 所有路由已通过 route.js 的 import.meta.glob 静态注册。
// 完全接管 router.addRoute 为 no-op —— 防止 ths-design 的 ComponentLoader
// 在 Vue watcher 上下文中调用 addRoute → getRoutes() 触发内部响应式追踪，
// 导致 watch(route) 被连带触发形成无限循环。
const originalAddRoute = router.addRoute;
router.addRoute = function() {
  // 静默跳过
  return;
};

window.router = router;

const MainComponent = {
  // root-component 全局常驻渲染（页面级框架）
  // router-view 渲染当前路由匹配的子页面
  template: '<root-component /><router-view></router-view>',
  components: { rootComponent: RootComponent },
  setup() {
    // rootComponent 由 <root-component /> 渲染，不走 router-view。
    // 提前挂到 window，让它满足 ths-design ComponentLoader 的 window[componentName] 检查，
    // 避免 ths-design 尝试动态加载 root/index.js。
    window.rootComponent = RootComponent;

    const rootEmitter = mitt();

    // global 必须在 setup 同步阶段就用 publicGlobalVariables 初始化，
    // 否则 router-view 里的页面（如 airPollution.vue）首屏渲染时
    // global.currentSmallSection 等关键字段还是 undefined，导致 t-component
    // 拿不到 componentName，子组件不渲染。
    //
    // 顺序保证：本 main.js 顶部 `import './globals/index.js'` 是同步的，
    // 它内部先 `import './variables/publicGlobalVariables.js'` 把 publicGlobalVariables
    // 挂到 window 上，再触发 globalFilesLoaded 事件 —— 因此在 setup 执行时
    // window.publicGlobalVariables 必然已就位。
    let global = reactive({
      ...(window.publicGlobalVariables || {}),
      ...(window.legoGlobalVariables || {}),
    });

    function initGlobal() {
      // 兼容场景：globalFilesLoaded 在 setup 之后才触发（如异步动态加载分支）
      // 直接 Object.assign 到既有 reactive 对象上，保留 provide 拿到的引用
      Object.assign(global, {
        ...(window.publicGlobalVariables || {}),
        ...(window.legoGlobalVariables || {}),
      });
    }

    if (window.globalFilesLoaded) {
      initGlobal();
    } else {
      document.addEventListener('globalFilesLoaded', initGlobal, { once: true });
    }

    loadGlobalVariables();
    loadGlobalFunctions();

    // ===== micro-app 全局数据双向同步 =====
    // bridge.js 封装好的：把基座 global 与所有子应用的 globalData 双向绑定
    // 包含：防回环、防空对象覆盖、初始值拉取、卸载自动清理
    const unbindGlobal = bindReactiveToGlobal(global);
    onUnmounted(unbindGlobal);

    const setSocketRoomId = () => {
      let roomId = getUrlParam('roomId');
      if (!roomId) {
        roomId = guid(true, 'lego');
      }
      global.socketRoom = roomId;
      return roomId;
    };
    setSocketRoomId();

    let socket = ref(null);

    if (global.socketIp) {
      const options = {};
      if (global?.socketPath) options.path = global.socketPath;
      socket.value = io(global.socketIp, options);
    }

    function sendMessage(obj) {
      if (!global.webSocketUrl) return;
      let message = new FormData();
      message.append('message', JSON.stringify(obj));
      http.post(global.webSocketUrl + "/interact/" + global.socketRoom + "_/message", message);
    }

    let webSocket = null;
    const createWebSocket = (newValue) => {
      if (global.webSocketUrl && window?.ths) {
        webSocket = window.ths.initSocket(global.webSocketUrl, global.socketRoom, function (messageStr) {
          const message = JSON.parse(messageStr);
          if (message.type.toLowerCase() === "runinteractive" && message.data) {
            const data = message.data;
            rootEmitter.emit('rootSocket:change', {
              type: 'runInteractiveChange',
              data: data?.data || data,
            });
          }
        });
      }
    };

    watch(() => global.socketRoom, (newValue) => {
      if (global.socketRoom) {
        sessionStorage.setItem('customClientCode', global.socketRoom);
        createWebSocket(global.socketRoom);
      }
    }, { immediate: true });

    rootEmitter.on('rootData:change', (obj) => {
      // 用直接赋值代替 _.set —— _.set 对 Proxy(reactive) 顶层 key 赋值在某些 lodash
      // 版本下不会经过 Proxy.set trap，导致 watch(() => global.xxx) 监听不到，
      // 进而 watch socketIp 重连 socket 这条链断掉。
      // obj.key 可能是 'a.b.c' 形式的路径，需要分情况处理。
      if (typeof obj.key === 'string' && obj.key.includes('.')) {
        _.set(global, obj.key, obj.value);
      } else {
        global[obj.key] = obj.value;
      }
      if (global.socketIp && global.socketRoom && socket.value) {
        socket.value.emit('message', {
          room: global.socketRoom,
          type: 'internalType:ChangeGlobalValue',
          data: obj,
        });
      }
    });

    watch(() => global.socketIp, (val) => {
      if (socket.value) socket.value.close();
      if (val) {
        const options = {};
        if (global?.socketPath) options.path = global.socketPath;
        socket.value = io(val, options);
      } else {
        socket.value = null;
      }
    });

    watch(() => global.socketRoom, (val, oldVal) => {
      if (socket.value) {
        socket.value.emit('leave-room', oldVal);
        socket.value.emit('join-room', val);
      }
    });

    watchEffect((onCleanup) => {
      if (socket.value) {
        const messageHandler = (data) => {
          if (data.type === 'internalType:ChangeGlobalValue') {
            global = _.set(global, data.data.key, data.data.value);
          } else {
            rootEmitter.emit('rootSocket:change', data);
          }
        };
        const connectHandler = () => {
          if (global.socketRoom) socket.value.emit('join-room', global.socketRoom);
        };
        const disconnectHandler = () => console.log('Socket disconnected');
        socket.value.on('message', messageHandler);
        socket.value.on('connect', connectHandler);
        socket.value.on('disconnect', disconnectHandler);
        // connect 事件可能在注册 handler 之前已触发，socket 已处于连接状态
        if (socket.value.connected) {
          connectHandler();
        }
        onCleanup(() => {
          socket.value?.off('message', messageHandler);
          socket.value?.off('connect', connectHandler);
          socket.value?.off('disconnect', disconnectHandler);
        });
      }
    });

    watch(() => global.activeTheme, (val) => {
      if (val) document.getElementsByTagName('body')[0].className = val;
    }, { immediate: true });

    const getUserToken = (casut, casLoginUrl) => {
      try {
        const getUserTokenUrl = global.loginByCasConfig?.getUserTokenUrl;
        http.get(getUserTokenUrl, { params: { casut } }).then((res) => {
          if (res.status === 200 && res.data.status === '1') {
            const { user, userToken } = res.data;
            localStorage.setItem('token', userToken);
            localStorage.setItem('lastUserName', user.userName);
            localStorage.setItem('lastLoginName', user.loginName);
            localStorage.setItem('lastUserId', user.userId);
            sessionStorage.setItem('userToken', userToken);
            global.userId = user.userId;
          } else {
            localStorage.removeItem('token');
            sessionStorage.removeItem('userToken');
            window.location.href = casLoginUrl;
          }
        });
      } catch (error) {
        console.error('单点登录失败', error);
        localStorage.removeItem('token');
        sessionStorage.removeItem('userToken');
        window.location.href = casLoginUrl;
      }
    };

    if (global.loginByCasConfig?.open) {
      const token = localStorage.getItem('token');
      const userToken = sessionStorage.getItem('userToken');
      const casUrl = global.loginByCasConfig?.casUrl;
      const serviceUrl = global.loginByCasConfig?.serviceUrl;
      const goToUrl = window.location.href;
      if (casUrl && serviceUrl && goToUrl) {
        const casLoginUrl = casUrl + '?service=' + serviceUrl + '?gotourl=' + goToUrl;
        const casUt = getQueryParam('casut');
        if (token && userToken) {
          console.log('已经登录了');
        } else if (casUt) {
          getUserToken(casUt, casLoginUrl);
        } else {
          window.location.href = casLoginUrl;
        }
      } else {
        console.error('单点登录配置错误');
      }
    }

    const rootValue = {
      ...toRefs(global),
      rootEmit: rootEmitter.emit,
      rootOn: rootEmitter.on,
      rootOff: rootEmitter.off,
      get rootSocket() {
        const sock = socket.value;
        // socket 不可用时，通过 rootEmitter 本地回环，确保组件间通信不受影响
        if (!sock || !sock.connected) {
          return {
            emit: (event, data) => {
              if (event === 'message') rootEmitter.emit('rootSocket:change', data);
            },
            on: () => {},
            off: () => {},
          };
        }
        return sock;
      },
      setSocketRoomId,
      sendMessage,
    };
    provide('root', rootValue);
    window.__lego_root = rootValue;
  },
};

const app = createApp(MainComponent);
app.use(i18n).use(router)
  .use(ElementPlus, {
    size: 'small',
    locale: ElementPlusLocaleZhCn,
    i18n: (key, value) => i18n.global.t(key, value),
  });

// 全局注册必须用到的 ths-design 组件
app.component('TDialog', TDialog);

app.mount('#app');
window.app = app;

// 预加载微应用注册表（t-micro-app 组件按 id 查询 url/defaultPage；幂等，组件挂载时也会调用）
loadMicroAppRegistry();
