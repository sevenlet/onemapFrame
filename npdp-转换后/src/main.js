/**
 * 应用入口
 */
import {
  createApp, reactive, ref, watch, watchEffect, provide, inject,
  toRefs, nextTick, onMounted,
} from 'vue';
import { useRoute, createWebHashHistory, createRouter } from 'vue-router';
import ElementPlus from 'element-plus';
import ElementPlusLocaleZhCn from 'element-plus/es/locale/lang/zh-cn';
import { createI18n } from 'vue-i18n';
import mitt from 'mitt';
import { routes } from './route.js';
import http from './http.js';
import { replaceCssVariables, guid, getUrlParam, getQueryParam } from './utils.js';
import { initSocket } from './websocket.js';
import { loadGlobalVariables, loadGlobalFunctions } from './globals/index.js';
import { themes } from './theme.js';
import RootComponent from './pages/root.vue';

import microApp from '@micro-zoe/micro-app'
microApp.start() 

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

// 防止 t-component 动态加载组件时重复添加同 path 路由
// ths-design 的 ComponentLoader.loadComponent 会调用 router.addRoute，
// 若不拦截，同一 path 会被添加多次，导致 router-view 反复渲染（"阴影叠加"症状）。
const originalAddRoute = router.addRoute;
router.addRoute = function(route) {
  // 同 name 路由 Vue Router 4 会自动替换，但同 path 不同 name 会导致重复
  // 检查 path 是否已存在，存在则跳过
  const exists = router.getRoutes().some(r => r.path === route.path);
  if (!exists) {
    return originalAddRoute.call(router, route);
  }
  console.log('路由已存在，跳过重复添加:', route.path);
};

window.router = router;

const MainComponent = {
  template: '<router-view></router-view>',
  components: { rootComponent: RootComponent },
  setup() {
    const internalKey = ref(0);
    window.internalKeyRef = internalKey;

    const rootEmitter = mitt();

    let global = reactive({});

    function initGlobal() {
      const mergedVars = {
        ...(window.publicGlobalVariables || {}),
        ...(window.legoGlobalVariables || {}),
      };
      Object.assign(global, mergedVars);
      global = reactive(global);
      console.log('全局变量初始化完成', global);
    }

    if (window.globalFilesLoaded) {
      initGlobal();
    } else {
      document.addEventListener('globalFilesLoaded', initGlobal, { once: true });
    }

    loadGlobalVariables();
    loadGlobalFunctions();

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
    async function initSocketIO() {
      const { io } = await import('socket.io-client');
      return io;
    }

    if (global.socketIp) {
      initSocketIO().then(io => {
        const options = {};
        if (global?.socketPath) options.path = global.socketPath;
        socket.value = io(global.socketIp, options);
      });
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

    rootEmitter.on('rootData:change', async (obj) => {
      const _ = await import('lodash').then(m => m.default || m);
      global = _.set(global, obj.key, obj.value);
      if (global.socketIp && global.socketRoom && socket.value) {
        socket.value.emit('message', {
          room: global.socketRoom,
          type: 'internalType:ChangeGlobalValue',
          data: obj,
        });
      }
    });

    watch(() => global.socketIp, async (val) => {
      const io = await initSocketIO();
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

    watchEffect(async (onCleanup) => {
      if (socket.value) {
        const _ = await import('lodash').then(m => m.default || m);
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
      get rootSocket() { return socket.value; },
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
