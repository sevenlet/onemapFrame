/**
 * Step 6: 静态资源迁移
 *
 * - assets/ → public/assets/
 * - resources/ → public/resources/（iframe srcdoc 仍按 /resources/xxx 加载，必须保留）
 * - resources/lang.js → src/resources/lang.js（去 "use strict" + `(var|let|const) X = ...` → `export default ...`）
 * - resources/i18n.js → src/resources/i18n.js（直接拷贝）
 * - config/ → public/config/（微应用注册表等运行时配置需在 public 下才能被 fetch；
 *   并补 micro-app-registry.json 占位，后端部署时覆盖为真实数据）
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

  // config/ → public/config/：微应用注册表（micro-app-registry.json）等运行时配置
  // 文件必须落在 public 下，运行时才能被 fetch('config/...') 取到。
  const configDir = path.join(projectDir, 'config');
  if (fs.existsSync(configDir)) {
    const target = path.join(publicDir, 'config');
    if (!fs.existsSync(target)) copyDirSync(configDir, target);
  }
  // 确保微应用注册表占位文件存在。源项目里通常没有这个 json（由平台后端在
  // 增删改微应用时生成），这里先放一个空对象占位，避免 dev 下 fetch 404 噪音；
  // 后端部署时会覆盖为真实数据，缺失时 t-micro-app 回退到组件自身 url/defaultPage。
  const registryFile = path.join(publicDir, 'config', 'micro-app-registry.json');
  if (!fs.existsSync(registryFile)) {
    ensureDir(path.join(publicDir, 'config'));
    writeFile(registryFile, '{}\n');
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
