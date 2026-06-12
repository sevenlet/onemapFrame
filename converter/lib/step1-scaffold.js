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
  writeFile(path.join(projectDir, 'vite.config.js'), readTemplate('vite.config.js'));

  // 组件库已自带兼容 .vue 扁平结构的 loader（自 1.1.27 起），
  // 不再需要 postinstall patch 脚本

  // index.html（模板：templates/index.html，占位符 {{title}}）
  // 从源 index.html 的 <title> 抽取标题，没有就用 'Dashboard'
  const originalIndexHtmlPath = path.join(projectDir, 'index.html');
  const originalIndexHtml = fs.existsSync(originalIndexHtmlPath)
    ? readFile(originalIndexHtmlPath)
    : '';
  const titleMatch = originalIndexHtml.match(/<title>([^<]+)<\/title>/);
  const title = titleMatch ? titleMatch[1] : 'Dashboard';

  writeFile(path.join(projectDir, 'index.html'), readTemplate('index.html', { title }));
}

module.exports = { generateScaffold };
