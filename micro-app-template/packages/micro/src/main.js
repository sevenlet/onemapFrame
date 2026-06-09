/**
 * 微应用入口
 *
 * 兼容三种运行模式：
 *   1. 独立运行（直接访问 http://localhost:5175）
 *   2. 被基座以 iframe 模式嵌入（micro-app 的 iframe 沙箱）
 *      ⚠️ iframe 模式下，micro-app 不会调用 mount/unmount —— 子应用必须自己挂载
 *   3. 被基座以 default 沙箱嵌入
 *      此时 micro-app 会主动调用 window['micro-app-${name}'].mount/unmount
 *
 * 本入口对三种模式都做了适配。
 */
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import ElementPlus from 'element-plus';
import ElementPlusLocaleZhCn from 'element-plus/es/locale/lang/zh-cn';

import App from './App.vue';
import { routes } from './router.js';

let instance = null;

function mount() {
  const router = createRouter({
    history: createWebHashHistory('/'),
    routes,
  });

  const app = createApp(App);
  app.use(router);
  app.use(ElementPlus, {
    size: 'default',
    locale: ElementPlusLocaleZhCn,
  });
  app.mount('#app');
  instance = { app, router };
  console.log('[micro-app] 微应用已挂载', {
    isMicroApp: !!window.__MICRO_APP_ENVIRONMENT__,
    name: window.__MICRO_APP_NAME__,
  });
}

function unmount() {
  if (instance) {
    instance.app.unmount();
    instance = null;
    console.log('[micro-app] 微应用已卸载');
  }
}

// ===== 立即挂载 =====
// iframe 模式下，micro-app 不主动调用 mount —— 所以无论何种环境都先挂上
mount();

// ===== 同时暴露生命周期 =====
// 兼容 default 沙箱模式 / 未来切换沙箱方式时无需改代码
if (window.__MICRO_APP_ENVIRONMENT__) {
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount };
}