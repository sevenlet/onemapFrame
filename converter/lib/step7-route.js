/**
 * Step 7: 路由生成（扁平 .vue 结构）
 *
 * 每条路由都加上 name = `${pageCode}Component`，与 ths-design 的 ComponentLoader.loadComponent
 * 一致 —— 当 t-component 动态触发 router.addRoute({ path, name }) 时，Vue Router 4 会按 name
 * 替换而不是追加，避免同 path 路由被重复注册导致组件反复挂载（"阴影叠加"症状）。
 */
'use strict';

const path = require('path');

const { log, writeFile } = require('./util.js');

function generateRoutes(projectDir, pageList) {
  const sorted = [...pageList].sort();

  const entries = sorted.map(name =>
    `  { path: '/${name}', name: '${name}Component', component: () => import('@/pages/${name}.vue') },`
  );
  entries.push(`  { path: '/', redirect: '/root' },`);

  const routeContent = `/**
 * 路由配置（自动生成）
 */
export const routes = [
${entries.join('\n')}
];
`;
  writeFile(path.join(projectDir, 'src', 'route.js'), routeContent);

  log(`  生成了 ${entries.length} 条路由`);
}

module.exports = { generateRoutes };
