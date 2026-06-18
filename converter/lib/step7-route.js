/**
 * Step 7: 路由生成（扁平 .vue 结构）
 *
 * 使用 Vite 的 import.meta.glob 自动收集 pages 目录下的所有 .vue 文件生成路由表，
 * 避免手动列出 100+ 行路由定义。构建时 import.meta.glob 展开为等价的懒加载
 * () => import() 调用，功能和包体积与手写完全一致。
 *
 * 每条路由 name = `${pageCode}Component`，与 ths-design 的 ComponentLoader.loadComponent
 * 一致 —— 当 t-component 动态触发 router.addRoute({ path, name }) 时，Vue Router 4 会按 name
 * 替换而不是追加，避免同 path 路由被重复注册导致组件反复挂载（"阴影叠加"症状）。
 *
 * 默认页（redirect）的确定逻辑：
 *   1. 从源项目 src/route.js 的 insertRoutePathStart...End 标记之间提取 redirect 目标
 *      例：{path: '/', redirect: 'airPollution'} → redirect 到 /airPollution
 *   2. 没找到则默认 redirect 到 /root
 */
'use strict';

const fs = require('fs');
const path = require('path');

const { log, writeFile } = require('./util.js');

/**
 * 从源平台的 route.js 中提取默认首页。
 *
 * 平台导出格式（位于 insertRoutePathStart 和 insertRoutePathEnd 标记之间）：
 *   {path: '/', redirect: 'airPollution'}
 *
 * 注意：redirect 值不带前导 /（与 Vue Router 4 格式不同）。
 *
 * 没有标记或标记间没有 redirect 则返回 null（将由调用方回退到 /root）。
 */
function extractRedirectFromSourceRoute(routeJsPath) {
  try {
    const content = fs.readFileSync(routeJsPath, 'utf-8');
    // 提取 insertRoutePathStart ... insertRoutePathEnd 之间的内容
    const blockMatch = content.match(/\/\*\s*insertRoutePathStart\s*\*\/([\s\S]*?)\/\*\s*insertRoutePathEnd\s*\*\//);
    if (!blockMatch) return null;
    const block = blockMatch[1];
    // 匹配 {path: '/', redirect: 'xxx'}  —— redirect 值不带 /
    const redirectMatch = block.match(/{\s*path\s*:\s*['"]\/['"]\s*,\s*redirect\s*:\s*['"](\w+)['"]\s*}/);
    return redirectMatch ? redirectMatch[1] : null;
  } catch (e) {
    return null;
  }
}

function generateRoutes(projectDir, pageList) {
  // 确定默认首页：
  //   1. 优先从源 route.js 的 insertRoutePathStart/End 标记中提取
  //   2. 否则默认 redirect 到 /root
  const existingRoutePath = path.join(projectDir, 'src', 'route.js');
  let defaultPage = null;

  if (fs.existsSync(existingRoutePath)) {
    defaultPage = extractRedirectFromSourceRoute(existingRoutePath);
    if (defaultPage) {
      log(`  从源 route.js 读取到默认首页: ${defaultPage}`);
    }
  }

  if (!defaultPage) {
    defaultPage = 'root';
    log(`  未找到默认首页配置，使用默认值: root`);
  }

  const routeContent = `/**
 * 路由配置（自动生成）
 *
 * 使用 Vite import.meta.glob 自动收集 pages 目录下所有 .vue 文件，
 * 构建时展开为等价的 () => import() 懒加载调用。
 * 新增/删除页面文件后路由表自动同步，无需手动维护。
 *
 * 注意：root.vue 被排除在外 —— 它由 main.js 的 <root-component /> 常驻渲染，
 * 不走 router-view，避免出现两个 t-l-c-root。
 */
const pageModules = import.meta.glob('./pages/*.vue')

export const routes = [
  ...Object.entries(pageModules)
    .filter(([filePath]) => !filePath.endsWith('/root.vue') && !filePath.endsWith('/404.vue'))
    .map(([filePath, loader]) => {
      const name = filePath.replace('./pages/', '').replace('.vue', '')
      return { path: \`/\${name}\`, name: \`\${name}Component\`, component: loader }
    }),
  { path: '/', redirect: '/${defaultPage}' },
  // 404 兜底：远程子应用（t-component iframe）内部路由变化时可能产生主应用不认识的 hash，
  // 这些 hash 不是主应用的页面，也不应重定向到任何页面触发重渲染链。用静默空页面兜底。
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('./pages/404.vue') },
];
`;
  writeFile(path.join(projectDir, 'src', 'route.js'), routeContent);

  // 创建 catch-all 兜底页：完全空白，不显示任何内容。
  //
  // 设计原因：在 hash 模式 + 懒加载 chunk + 微前端 t-component 的组合下，
  // 路由器在初始解析期 / chunk 加载过渡期 / 子应用 hash 泄漏时都可能短暂命中
  // catch-all 路由。如果它带任何可见 UI（"404 / 页面不存在"等大字），
  // 用户会在每次加载页面时看到一闪而过的 404 —— 体验非常差。
  // 这页只渲染空 div：用户访问不存在的路径时也不报错，符合大屏 / 微前端场景的
  // "静默兜底"约定。如确需 404 提示，业务方可自行修改此页。
  const notFoundContent = [
    '<template>',
    '  <div></div>',
    '</template>',
    '',
    '<script>',
    'export default { name: "NotFoundSilent" };',
    '</script>',
    '',
  ].join('\n');
  writeFile(path.join(projectDir, 'src', 'pages', '404.vue'), notFoundContent);

  log(`  生成了路由配置（import.meta.glob 自动收集，默认首页: ${defaultPage}）`);
}

module.exports = { generateRoutes };
