/**
 * 基座应用入口（模板版）
 *
 * 忠实复刻原项目 main.js 的运行环境，保证：
 *   - window.publicGlobalVariables / window.legoGlobalVariables 存在
 *   - window.filters / window.builtinFilters / window.customFilters 存在
 *   - 全部全局函数（window.dateFormat / window.getRegionLevel / ...）已注册
 *   - provide('root', rootValue) 注入 rootEmit/rootOn/rootSocket/sendMessage 等
 *   - window.__lego_root / window.router / window.app 全局引用存在
 *   - microApp.setGlobalData({...global}) 初次同步并双向监听
 *
 * 子应用在本地基座中开发，使用的 API 与生产基座完全一致。
 */
import {
  createApp, reactive, ref, watch, watchEffect, provide,
  toRefs, computed, onMounted, onUnmounted, h,
} from 'vue';
import { createWebHashHistory, createRouter } from 'vue-router';
import ElementPlus from 'element-plus';
import ElementPlusLocaleZhCn from 'element-plus/es/locale/lang/zh-cn';
import { createI18n } from 'vue-i18n';
import mitt from 'mitt';
import microApp from '@micro-zoe/micro-app';

import http from './http.js';
import { guid, getUrlParam, getQueryParam } from './utils.js';
import { loadGlobalVariables, loadGlobalFunctions } from './globals/index.js';
import i18nMessages from './resources/lang.js';
import App from './App.vue';

// ===== 1. 启动 micro-app =====
microApp.start();

// ===== 2. i18n =====
const i18n = createI18n({
  legacy: false,
  locale: 'zh-cn',
  fallbackLocale: 'zh-cn',
  messages: i18nMessages,
});

// ===== 3. 路由（hash 模式） =====
// 基座只有一个调试容器（App.vue），不需要多路由切换，但保留 router 实例：
//   1. 让 utils.js 中 useRoute() 等调用不报错
//   2. 与生产基座一致（原项目用 router）
const router = createRouter({
  history: createWebHashHistory('/'),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'home', component: { render: () => null } },
  ],
});
window.router = router;

// ===== 4. MainComponent：复刻原项目 setup 流程 =====
const MainComponent = {
  name: 'MainComponent',
  setup() {
    const internalKey = ref(0);
    window.internalKeyRef = internalKey;

    const rootEmitter = mitt();
    let global = reactive({});

    // ---- 全局变量初始化（合并 window.publicGlobalVariables + window.legoGlobalVariables）----
    function initGlobal() {
      const mergedVars = {
        ...(window.publicGlobalVariables || {}),
        ...(window.legoGlobalVariables || {}),
      };
      Object.assign(global, mergedVars);
      global = reactive(global);
      console.log('[base] 全局变量初始化完成', global);

      // 初次同步到 microApp.globalData（子应用通过这个通道读取所有全局变量）
      microApp.setGlobalData({ ...global });
    }

    if (window.globalFilesLoaded) {
      initGlobal();
    } else {
      document.addEventListener('globalFilesLoaded', initGlobal, { once: true });
    }
    loadGlobalVariables();
    loadGlobalFunctions();

    // ---- 监听子应用通过 setGlobalData 修改全局数据 ----
    const handleGlobalData = (data) => {
      if (!data) return;
      // 把子应用的修改合并回基座的 global reactive 对象，保证基座侧读到最新值
      Object.assign(global, data);
    };
    onMounted(() => {
      const init = microApp.getGlobalData();
      if (init) handleGlobalData(init);
      microApp.addGlobalDataListener(handleGlobalData);
    });
    onUnmounted(() => {
      microApp.removeGlobalDataListener(handleGlobalData);
    });

    // ---- Socket 房间号 ----
    const setSocketRoomId = () => {
      let roomId = getUrlParam('roomId');
      if (!roomId) {
        roomId = guid(true, 'lego');
      }
      global.socketRoom = roomId;
      return roomId;
    };
    setSocketRoomId();

    // ---- socket.io 客户端（按需懒加载，与原项目一致）----
    const socket = ref(null);
    async function initSocketIO() {
      const { io } = await import('socket.io-client');
      return io;
    }

    if (global.socketIp) {
      initSocketIO().then((io) => {
        const options = {};
        if (global?.socketPath) options.path = global.socketPath;
        socket.value = io(global.socketIp, options);
      });
    }

    function sendMessage(obj) {
      if (!global.webSocketUrl) return;
      const message = new FormData();
      message.append('message', JSON.stringify(obj));
      http.post(`${global.webSocketUrl}/interact/${global.socketRoom}_/message`, message);
    }

    // ---- 原生 WebSocket（通过 window.ths.initSocket）----
    let webSocket = null;
    const createWebSocket = () => {
      if (global.webSocketUrl && window?.ths) {
        webSocket = window.ths.initSocket(global.webSocketUrl, global.socketRoom, (messageStr) => {
          const message = JSON.parse(messageStr);
          if (message.type.toLowerCase() === 'runinteractive' && message.data) {
            const data = message.data;
            rootEmitter.emit('rootSocket:change', {
              type: 'runInteractiveChange',
              data: data?.data || data,
            });
          }
        });
      }
    };

    watch(() => global.socketRoom, () => {
      if (global.socketRoom) {
        sessionStorage.setItem('customClientCode', global.socketRoom);
        createWebSocket();
      }
    }, { immediate: true });

    // ---- rootData:change 事件：同时更新 global + globalData + socket ----
    rootEmitter.on('rootData:change', async (obj) => {
      const _ = await import('lodash').then((m) => m.default || m);
      global = _.set(global, obj.key, obj.value);
      // 同步到 micro-app globalData，所有子应用都能感知
      microApp.setGlobalData({
        ...microApp.getGlobalData(),
        [obj.key]: obj.value,
      });
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
        const _ = await import('lodash').then((m) => m.default || m);
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
      if (val) document.body.className = val;
    }, { immediate: true });

    // ---- provide('root', rootValue) —— 与原项目完全一致 ----
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

    // 渲染：直接渲染 App 组件（基座 UI 主体）
    return () => h(App);
  },
};

// ===== 5. 创建应用 =====
const app = createApp(MainComponent);
app.use(i18n).use(router).use(ElementPlus, {
  size: 'small',
  locale: ElementPlusLocaleZhCn,
  i18n: (key, value) => i18n.global.t(key, value),
});

app.mount('#app');
window.app = app;