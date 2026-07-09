/**
 * Step 1: 生成 Vite 脚手架（package.json + vite.config.js + index.html）
 *
 * 三个文件都来自 templates/，仅 package.json 用 {{name}} 占位（取自目录名 + sanitize）。
 * index.html 的 {{title}} 从源 index.html 抽取，没有就用 'Dashboard'。
 */
'use strict';

const fs = require('fs');
const path = require('path');

const { writeFile, readFile, sanitizePackageName } = require('./util.js');
const { readTemplate } = require('./templates.js');

function generateScaffold(projectDir) {
  // package.json（模板：templates/package.json，占位符 {{name}}）
  // 各项目依赖版本完全一致，只有 name 不同。
  // 升级某个依赖只需改模板，不必动转换脚本。
  writeFile(
    path.join(projectDir, 'package.json'),
    readTemplate('package.json', { name: sanitizePackageName(path.basename(projectDir)) })
  );

  // vite.config.js（模板：templates/vite.config.js）
  // 注：自 ths-design 1.1.27 起组件库自带 .vue 扁平结构 loader，无需 postinstall 补丁
  writeFile(path.join(projectDir, 'vite.config.js'), readTemplate('vite.config.js'));

  // .npmrc（模板：templates/npmrc）
  // npm publish 会忽略包内 .npmrc，因此模板使用非点文件名，生成时写成 .npmrc。
  writeFile(path.join(projectDir, '.npmrc'), readTemplate('npmrc'));

  // index.html（模板：templates/index.html，占位符 {{title}} / {{customScripts}}）
  // 从源 index.html 的 <title> 抽取标题，没有就用 'Dashboard'
  // 同时把源 html 中 resources/customjs/* 的脚本引入抽出来回填，
  // 这些是用户在平台上自行上传的 js（dayjs/echarts/moment/Sortable/vuedraggable/marked/index.umd 等），
  // 文件已随 resources/ 一起拷到 public/，但 index.html 模板没有这些 <script>，全局变量会丢失。
  const originalIndexHtmlPath = path.join(projectDir, 'index.html');
  const originalIndexHtml = fs.existsSync(originalIndexHtmlPath)
    ? readFile(originalIndexHtmlPath)
    : '';
  const titleMatch = originalIndexHtml.match(/<title>([^<]+)<\/title>/);
  const title = titleMatch ? titleMatch[1] : 'Dashboard';

  const customScripts = extractCustomJsScripts(originalIndexHtml);

  writeFile(
    path.join(projectDir, 'index.html'),
    readTemplate('index.html', { title, customScripts })
  );
}

/**
 * 从原始 index.html 中抽取 `resources/customjs/` 下的 <script> 引入。
 *
 * 兼容点：
 *   - 路径前缀可能是 `resources/...`、`./resources/...`、`/resources/...`、`resources\customjs\...`（Windows 反斜杠）
 *   - 属性可能用单/双引号
 *   - 可能带 defer / type="text/javascript" 等其他属性
 *
 * 输出：统一规范化为绝对路径 `/resources/customjs/<file>` 的 <script src="..."></script>，
 *      多个之间用换行 + 4 空格缩进，匹配模板的缩进风格。返回值末尾不带换行，由模板控制位置。
 *
 * 这些是经典脚本（暴露 window.xxx），必须在 `/src/main.js` 之前同步加载，
 * 因此回填到 </head> 之前、ths-design 等基础库之后。
 */
function extractCustomJsScripts(html) {
  if (!html) return '';

  // 抓所有 <script ... src="..."> 标签，再过滤路径含 customjs/ 的
  const scriptRe = /<script\b[^>]*\bsrc\s*=\s*(['"])([^'"]+)\1[^>]*>\s*<\/script>/gi;
  const seen = new Set();
  const tags = [];
  let m;
  while ((m = scriptRe.exec(html)) !== null) {
    const rawSrc = m[2];
    // 兼容 Windows 反斜杠
    const normalized = rawSrc.replace(/\\/g, '/');
    if (!/(^|\/)resources\/customjs\//i.test(normalized)) continue;
    // 去掉前导 ./ 或 / 后再加单一前导 /，保证 vite 下 public/ 根访问
    const stripped = normalized.replace(/^\.\//, '').replace(/^\/+/, '');
    const finalSrc = '/' + stripped;
    if (seen.has(finalSrc)) continue;
    seen.add(finalSrc);
    tags.push(`<script src="${finalSrc}"></script>`);
  }

  if (tags.length === 0) return '';
  // 4 空格缩进 + 换行连接，使其落在 <head> 内的同一缩进层级
  return tags.join('\n    ');
}

module.exports = { generateScaffold };
