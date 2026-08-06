/**
 * 子应用路由（hash 模式）
 *
 * /home              → 模板总览，6 张能力卡片导航
 * /demos/base-data   → 通道① 基座 → 子应用 定向数据
 * /demos/send-rpc    → 通道② 子应用 → 基座（sendToBase / callBase）
 * /demos/global-data → 通道③ globalData 全局共享数据
 * /demos/base-dialog → 让基座弹窗（穿透 iframe 沙箱）
 * /demos/host-theme  → 跟随宿主主题名换肤（微应用自维护样式）
 * /demos/tmap-local  → 微应用自带地图（内嵌真实 <TGisMap> 组件）
 * /demos/tmap-base   → 操作基座地图（baseData.value.mapRef 直调）
 * /dialog/content-demo → 宿主弹窗中的微应用 Vue 正文示例
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
    path: '/demos/host-theme',
    name: 'HostTheme',
    component: () => import('./views/demos/HostTheme.vue'),
  },
  {
    path: '/demos/base-dialog',
    name: 'BaseDialog',
    component: () => import('./views/demos/BaseDialog.vue'),
  },
  {
    path: '/demos/tmap-local',
    name: 'TMapLocal',
    component: () => import('./views/demos/TMapLocal.vue'),
  },
  {
    path: '/demos/tmap-base',
    name: 'TMapBase',
    component: () => import('./views/demos/TMapBase.vue'),
  },
  {
    path: '/dialog/content-demo',
    name: 'DialogContentDemo',
    component: () => import('./views/dialogs/DialogContentDemo.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./views/About.vue'),
  },
];
