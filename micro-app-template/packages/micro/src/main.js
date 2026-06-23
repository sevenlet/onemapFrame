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

// ===== 挂载策略 =====
// - 独立运行（__MICRO_APP_ENVIRONMENT__ 不存在）：模块一加载就立即 mount
// - 被基座嵌入：把 mount 控制权交给 micro-app 框架，不要自己提前挂载，
//   避免出现 "There is already an app instance mounted on the host container" 告警
if (!window.__MICRO_APP_ENVIRONMENT__) {
  mount();
}

// ===== 暴露生命周期给 micro-app 框架 =====
// micro-app 会通过 window['micro-app-${name}'].mount/unmount 控制生命周期
// iframe 模式下虽不调用，但暴露了也无副作用；default 模式下必须暴露
window[`micro-app-${window.__MICRO_APP_NAME__ || 'default'}`] = { mount, unmount };
