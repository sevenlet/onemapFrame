/**
 * Step 2: 核心文件转换
 *
 * 全部覆盖为 templates/ 下的模板（跨项目相同的平台运行时文件）：
 * - http.js       : axios 实例（无自定义配置；如需拦截器/baseURL，改模板）
 * - utils.js      : 平台工具函数（动画/缩放/资源加载/接口缓存/动态组件等）
 *                   平台运行时文件，与业务无关，所以从源项目读取改写已无意义
 * - websocket.js  : ths.initSocket 桥接 + window.ths 挂载
 * - main.js       : 集成 micro-app + bindReactiveToGlobal，引用 root.vue
 *
 * 唯一仍需"读源 + 改写"的是 theme.js —— 各项目主题变量不同，只在头部加 export。
 */
'use strict';

const fs = require('fs');
const path = require('path');

const { writeFile, readFile } = require('./util.js');
const { readTemplate } = require('./templates.js');

function convertCoreFiles(projectDir) {
  const srcDir = path.join(projectDir, 'src');

  // http.js / utils.js / websocket.js / main.js —— 跨项目相同，直接覆盖为模板
  writeFile(path.join(srcDir, 'http.js'), readTemplate('http.js'));
  writeFile(path.join(srcDir, 'utils.js'), readTemplate('utils.js'));

  // theme.js —— 各项目主题变量不同，仅在头部把 const themes 加 export
  const themeJsPath = path.join(srcDir, 'theme.js');
  if (fs.existsSync(themeJsPath)) {
    let convertedTheme = readFile(themeJsPath).replace(/^﻿/, '').trimStart();
    if (convertedTheme.startsWith('const themes') || convertedTheme.startsWith(' const themes')) {
      convertedTheme = convertedTheme.replace(/^(\s*)const themes/, '$1export const themes');
    }
    writeFile(themeJsPath, convertedTheme);
  }

  // websocket.js —— 各项目源码相同，直接覆盖为模板版本
  // 模板里已经做好两件事：
  //   1) const ths = (window.ths = window.ths || {}) —— 真正挂到 window
  //   2) export const initSocket + ths.initSocket = initSocket —— 两种调用方式都能走通
  const websocketJsPath = path.join(srcDir, 'websocket.js');
  if (fs.existsSync(websocketJsPath)) {
    writeFile(websocketJsPath, readTemplate('websocket.js'));
  }

  // main.js —— 引用 root.vue，集成 micro-app + bindReactiveToGlobal，跨项目完全相同
  writeFile(path.join(srcDir, 'main.js'), readTemplate('main.js'));
}

module.exports = { convertCoreFiles };
