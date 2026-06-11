/**
 * 这里定义路由
 */
const routes = [
    //  每添加一个页面都在这里插入路由配置
    /* insertRoutePathStart */
    /* insertRoutePathEnd */
    ,{ path: '/', redirect: 'root' },
  ];

  // 创建 router 实例
  window.router = createRouter({
    // 获取路由方式
    history: createWebHashHistory('/'),
    routes
  });
