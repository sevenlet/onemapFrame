/**
 * Step 7.5: 注入微前端框架（基座侧 bridge.js）
 *
 * 模板源：templates/bridge.js（同步自 micro-app-template/packages/base/src/bridge.js）
 * 写入：<输出>/src/bridge.js。
 * main.js 中的 micro-app 启动与 bindReactiveToGlobal 调用由 step2 一并从
 * templates/main.js 渲染生成。
 */
'use strict';

const path = require('path');

const { log, writeFile } = require('./util.js');
const { readTemplate } = require('./templates.js');

function injectMicroAppFramework(projectDir) {
  const bridgePath = path.join(projectDir, 'src', 'bridge.js');
  writeFile(bridgePath, readTemplate('bridge.js'));
  log(`  写入 src/bridge.js（基座侧通信桥，三通道）`);
}

module.exports = { injectMicroAppFramework };
