/**
 * 子应用路由（hash 模式）
 *
 * /home              → 模板总览，5 张能力卡片导航
 * /demos/base-data   → 通道① 基座 → 子应用 定向数据
 * /demos/send-rpc    → 通道② 子应用 → 基座（sendToBase / callBase）
 * /demos/global-data → 通道③ globalData 全局共享数据
 * /demos/base-dialog → 让基座弹窗（穿透 iframe 沙箱）
 * /demos/tmap        → 调用基座地图 TMap API
 * /about             → 路由切换示例
 */
export const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('./views/Home.vue'),
  },
  {
    path: '/demos/base-data',
    name: 'BaseData',
    component: () => import('./views/demos/BaseData.vue'),
  },
  {
    path: '/demos/send-rpc',
    name: 'SendAndRpc',
    component: () => import('./views/demos/SendAndRpc.vue'),
  },
  {
    path: '/demos/global-data',
    name: 'GlobalData',
    component: () => import('./views/demos/GlobalData.vue'),
  },
  {
    path: '/demos/base-dialog',
    name: 'BaseDialog',
    component: () => import('./views/demos/BaseDialog.vue'),
  },
  {
    path: '/demos/tmap',
    name: 'TMapDemo',
    component: () => import('./views/demos/TMapDemo.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./views/About.vue'),
  },
];
