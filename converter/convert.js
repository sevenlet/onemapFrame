#!/usr/bin/env node
/**
 * convert-to-vite-new.js
 *
 * 将低代码平台生成的纯静态 Vue 3 项目（拖拽页面输出的 JS 组件）
 * 转换为 Vite + Vue 3 工程化项目，并把每个页面合并为单文件 .vue。
 *
 * 架构：本文件仅编排各 Step，领域逻辑全部位于 lib/ 中各模块。
 *
 * 与旧版 convert-to-vite.js 的区别：
 *   1. 页面输出格式：扁平 src/pages/<pageCode>.vue（替代 src/pages/<dirName>/index.js + index.css）
 *   2. 内置 add-ths-design-imports.js 的逻辑：扫描 template 中的 t-xxx 自动生成 import 和 components 注册
 *   3. 使用 AST（@babel/parser）解析 component 选项对象 + prettier 格式化 template
 *   4. 生成的 utils.js 改用 import.meta.glob('./pages/*.vue')，去掉 cssModules 与 CSS 动态注入逻辑
 *   5. 生成的 vite.config.js 不再使用 isCustomElement（所有 t-xxx 都按真实 Vue 组件处理）
 *   6. 生成的 route.js 适配扁平 .vue 结构
 *
 * 用法:
 *   node convert-to-vite-new.js <源目录> <输出目录>
 *
 *   <源目录>：平台导出的原始静态项目（含 src/<dirName>/index.js 等）
 *   <输出目录>：转换后的 Vite 工程目录（不存在会自动创建）
 *
 * 注意：本脚本依赖 @babel/parser 与 prettier，请先安装：
 *   npm i -D @babel/parser prettier
 */
'use strict';

const fs = require('fs');
const path = require('path');

const { log, copyDirSync } = require('./lib/util.js');
const { setDeps: setJsToVueDeps } = require('./lib/js-to-vue.js');
const { setDeps: setGlobalsDeps } = require('./lib/step4-globals.js');
const { generateScaffold } = require('./lib/step1-scaffold.js');
const { convertCoreFiles } = require('./lib/step2-core.js');
const { convertComponentsToVue } = require('./lib/step3-components.js');
const { convertGlobals } = require('./lib/step4-globals.js');
const { convertZnxlFiles } = require('./lib/step5-znxl.js');
const { moveStaticAssets } = require('./lib/step6-assets.js');
const { generateRoutes } = require('./lib/step7-route.js');
const { injectMicroAppFramework } = require('./lib/step7-microapp.js');
const { cleanUp } = require('./lib/step8-cleanup.js');

// ---- 依赖注入（可选依赖，运行时才 require） ----
let babelParser = null;
let prettier = null;
try { babelParser = require('@babel/parser'); } catch (e) { /* 留到 main() 检查 */ }
try { prettier = require('prettier'); } catch (e) { /* 同上 */ }

// ============================================================
// 主流程
// ============================================================
function main() {
  const sourceDir = process.argv[2];
  const outputDir = process.argv[3];

  if (!sourceDir || !outputDir) {
    log('用法: node convert-to-vite-new.js <源目录> <输出目录>', 'error');
    process.exit(1);
  }
  if (!babelParser || !prettier) {
    log('缺少依赖。请先安装 @babel/parser 与 prettier：', 'error');
    log('  npm i -D @babel/parser prettier', 'error');
    process.exit(1);
  }

  // 把外部依赖注入到需要它们的 lib 子模块
  setJsToVueDeps({ babelParser, prettier });
  setGlobalsDeps({ babelParser });

  const absSourceDir = path.resolve(sourceDir);
  const absOutputDir = path.resolve(outputDir);

  if (!fs.existsSync(absSourceDir)) {
    log(`源目录不存在: ${absSourceDir}`, 'error');
    process.exit(1);
  }

  if (absSourceDir === absOutputDir) {
    log('源目录与输出目录不能相同', 'error');
    process.exit(1);
  }

  log(`源目录: ${absSourceDir}`);
  log(`输出目录: ${absOutputDir}`);
  log('='.repeat(60));

  // 拷贝源目录到输出目录（避免污染源）
  if (!fs.existsSync(absOutputDir)) {
    copyDirSync(absSourceDir, absOutputDir);
    log('已拷贝源目录到输出目录', 'success');
  } else {
    log('输出目录已存在，将在原地继续处理', 'warn');
  }

  if (fs.existsSync(path.join(absOutputDir, 'package.json'))) {
    log('输出目录已存在 package.json，跳过转换', 'warn');
    process.exit(0);
  }

  // Step 1: 脚手架
  generateScaffold(absOutputDir);
  log('脚手架生成完成', 'success');

  // Step 2: 核心文件
  convertCoreFiles(absOutputDir);
  log('核心文件转换完成', 'success');

  // Step 3: 组件 → .vue
  const pageList = convertComponentsToVue(absOutputDir);
  log('组件转换完成', 'success');

  // Step 4: 全局变量/函数
  convertGlobals(absOutputDir);
  log('全局变量/函数转换完成', 'success');

  // Step 5: znxl
  convertZnxlFiles(absOutputDir);
  log('znxl 文件处理完成', 'success');

  // Step 6: 静态资源
  moveStaticAssets(absOutputDir);
  log('静态资源移动完成', 'success');

  // Step 7: 路由
  generateRoutes(absOutputDir, pageList);
  log('路由生成完成', 'success');

  // Step 7.5: 注入微前端框架（基座侧 bridge.js）
  injectMicroAppFramework(absOutputDir);
  log('微前端框架注入完成', 'success');

  // Step 8: 清理
  cleanUp(absOutputDir);
  log('清理完成', 'success');

  log('='.repeat(60));
  log(`完成！共生成 ${pageList.length} 个 .vue 页面`);
  log(`下一步:`);
  log(`  cd ${absOutputDir}`);
  log(`  npm install`);
  log(`  npm run dev`);
}

// ============================================================
// 运行
// ============================================================
main();