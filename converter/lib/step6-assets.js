/**
 * Step 6: 静态资源迁移
 *
 * - assets/ → public/assets/
 * - resources/ → public/resources/（iframe srcdoc 仍按 /resources/xxx 加载，必须保留）
 * - resources/lang.js → src/resources/lang.js（去 "use strict" + `(var|let|const) X = ...` → `export default ...`）
 * - resources/i18n.js → src/resources/i18n.js（直接拷贝）
 */
'use strict';

const fs = require('fs');
const path = require('path');

const { ensureDir, writeFile, readFile, copyDirSync } = require('./util.js');

function moveStaticAssets(projectDir) {
  const srcDir = path.join(projectDir, 'src');
  const publicDir = path.join(projectDir, 'public');
  ensureDir(publicDir);

  const assetsDir = path.join(projectDir, 'assets');
  if (fs.existsSync(assetsDir)) {
    const target = path.join(publicDir, 'assets');
    if (!fs.existsSync(target)) copyDirSync(assetsDir, target);
  }

  const resourcesDir = path.join(projectDir, 'resources');
  if (fs.existsSync(resourcesDir)) {
    const target = path.join(publicDir, 'resources');
    if (!fs.existsSync(target)) copyDirSync(resourcesDir, target);
  }

  const langFile = path.join(resourcesDir, 'lang.js');
  if (fs.existsSync(langFile)) {
    const destDir = path.join(srcDir, 'resources');
    ensureDir(destDir);
    let langContent = readFile(langFile);
    langContent = langContent.replace(/"use strict";?\s*/, '').trimStart();
    // 平台编译输出不固定，可能是 var / let / const（南平用 var、减污降碳用 const）。
    // 三种全部命中，转成 `export default ...` 以便 main.js 默认导入。
    langContent = langContent.replace(/(?:var|let|const)\s+\w+\s*=\s*/, 'export default ');
    writeFile(path.join(destDir, 'lang.js'), langContent);
  }

  const i18nFile = path.join(resourcesDir, 'i18n.js');
  if (fs.existsSync(i18nFile)) {
    const destDir = path.join(srcDir, 'resources');
    ensureDir(destDir);
    fs.copyFileSync(i18nFile, path.join(destDir, 'i18n.js'));
  }
}

module.exports = { moveStaticAssets };
