/**
 * Step 2: 核心文件转换
 *
 * - http.js  : 直接覆盖为模板（跨项目相同）
 * - utils.js : 改写 —— 头部加 import.meta.glob、loadComponent 用 .vue 动态 import、
 *              末尾追加导出列表 + window.ComponentLoaderInternal
 * - theme.js : 在源文件头部加 export
 * - websocket.js : 覆盖为模板（正则改写易出 ths 不挂 window 的坑，详见 templates/websocket.js）
 * - main.js  : 覆盖为模板
 */
'use strict';

const fs = require('fs');
const path = require('path');

const { writeFile, readFile } = require('./util.js');
const { readTemplate } = require('./templates.js');
const { UTILS_EXPORTED_NAMES } = require('./constants.js');

function convertCoreFiles(projectDir) {
  const srcDir = path.join(projectDir, 'src');

  // http.js（模板：templates/http.js）
  // 跨项目完全相同，axios 实例无任何自定义配置；如需添加拦截器/baseURL，改模板即可。
  writeFile(path.join(srcDir, 'http.js'), readTemplate('http.js'));

  // utils.js
  convertUtilsFile(projectDir);

  // theme.js
  const themeJsPath = path.join(srcDir, 'theme.js');
  if (fs.existsSync(themeJsPath)) {
    let convertedTheme = readFile(themeJsPath).replace(/^﻿/, '').trimStart();
    if (convertedTheme.startsWith('const themes') || convertedTheme.startsWith(' const themes')) {
      convertedTheme = convertedTheme.replace(/^(\s*)const themes/, '$1export const themes');
    }
    writeFile(themeJsPath, convertedTheme);
  }

  // websocket.js（模板：templates/websocket.js）
  // 各项目的 websocket.js 源码完全相同，正则改写易出错（早期 if(false){} 死代码导致
  // ths 是模块局部对象，window.ths 永远 undefined，main.js 里 createWebSocket 进不去）。
  // 直接覆盖为模板版本，模板里已经做好两件事：
  //   1) const ths = (window.ths = window.ths || {}) —— 真正挂到 window
  //   2) export const initSocket + ths.initSocket = initSocket —— 两种调用方式都能走通
  const websocketJsPath = path.join(srcDir, 'websocket.js');
  if (fs.existsSync(websocketJsPath)) {
    writeFile(websocketJsPath, readTemplate('websocket.js'));
  }

  // main.js（模板：templates/main.js）
  // 引用 root.vue，集成 micro-app + bindReactiveToGlobal，跨项目完全相同
  writeFile(path.join(srcDir, 'main.js'), readTemplate('main.js'));
}

// ============================================================
// 转换 utils.js —— 改用 import.meta.glob('./pages/*.vue')
// ============================================================
function convertUtilsFile(projectDir) {
  const srcDir = path.join(projectDir, 'src');
  const utilsPath = path.join(srcDir, 'utils.js');
  if (!fs.existsSync(utilsPath)) return;

  let utilsContent = readFile(utilsPath);

  // 如果 utils.js 已经被旧版脚本（convert-to-vite.js）处理过，
  // 文件头部会带有 ES Module import + componentModules 声明，
  // 文件末尾会带有 export { ... } 块 和 window.ComponentLoaderInternal = {...} 块。
  // 这里把两端的"已转换痕迹"都剥掉，回到原始工具主体后再重新拼。
  utilsContent = stripLegacyUtilsHeader(utilsContent);
  utilsContent = stripLegacyUtilsFooter(utilsContent);

  const importHeader = `/**
 * 工具函数模块
 */
import { reactive, ref, computed, watch, onMounted, onUnmounted, nextTick, h, createApp, toRefs, provide, inject, createVNode, render, resolveComponent, defineAsyncComponent, markRaw } from 'vue';
import { useRoute } from 'vue-router';
import http from './http.js';
import { initSocket } from './websocket.js';
import { themes } from './theme.js';
import mitt from 'mitt';

// Vite 动态导入映射表 —— 自动收集所有页面 .vue 文件
const componentModules = import.meta.glob('./pages/*.vue');

`;

  utilsContent = importHeader + utilsContent;

  // 替换 ComponentLoader.loadComponent —— 去掉 CSS 动态注入（.vue 内部已包含 <style>）
  const oldLoadComponentPattern = /async loadComponent\s*\(\s*pageCode\s*,\s*afterReadyCallback\s*\)\s*\{[\s\S]*?^\s{2}\}/m;
  const newLoadComponent = `async loadComponent(pageCode, afterReadyCallback) {
    if (!pageCode || typeof pageCode !== 'string') {
      if (afterReadyCallback) afterReadyCallback();
      return;
    }

    const componentName = \`\${pageCode}Component\`;

    if (window[componentName]) {
      if (afterReadyCallback) afterReadyCallback();
      return;
    }

    try {
      // 在 import.meta.glob 映射中查找 ./pages/<pageCode>.vue
      const moduleKey = Object.keys(componentModules).find(
        key => key.endsWith(\`/\${pageCode}.vue\`)
      );

      if (!moduleKey) {
        console.warn(\`ComponentLoader: 未找到组件 [\${pageCode}] 对应的 .vue\`);
        if (afterReadyCallback) afterReadyCallback();
        return;
      }

      const componentModule = await componentModules[moduleKey]();
      const componentDef = componentModule.default || componentModule;

      window[componentName] = componentDef;

      if (window.app) {
        window.app.component(componentName, componentDef);
      }

      if (window.registerComponent) {
        window.registerComponent(pageCode, componentModules[moduleKey]);
      }

      if (window.router) {
        window.router.addRoute({
          path: \`/\${pageCode}\`,
          name: componentName,
          component: componentDef,
        });
      }

      // .vue 文件的 <style> 由 Vite 自动注入，无需手动加载 CSS

      if (window.internalKeyRef) {
        window.internalKeyRef.value++;
      }
    } catch (err) {
      console.error(\`动态加载组件失败 [\${pageCode}]:\`, err);
    }

    if (afterReadyCallback) afterReadyCallback();
  }`;

  if (oldLoadComponentPattern.test(utilsContent)) {
    utilsContent = utilsContent.replace(oldLoadComponentPattern, newLoadComponent);
  }

  // 清除所有 cssModules 残留引用（声明已在 stripLegacyUtilsHeader 中剥掉，
  // 但函数体内可能还有 cssModules[xxx] 或 cssModules 的引用，
  // 如果 loadComponent 正则没命中，旧的 CSS 加载代码就会残留）。
  // 删除整行含 cssModules 的语句，以及 ComponentLoaderInternal 中的 cssModules 字段
  utilsContent = utilsContent.replace(/.*\bcssModules\b.*\n?/g, '');

  const exportNames = UTILS_EXPORTED_NAMES;

  const exportStatement = '\n// 导出所有工具函数\nexport {\n' +
    exportNames.map(n => `  ${n},`).join('\n') +
    '\n};\n' +
    '\n// 暴露 ComponentLoaderInternal 供 ths-design 的 ComponentLoader 使用\n' +
    'window.ComponentLoaderInternal = {\n' +
    '  componentModules,\n' +
    '};\n';

  utilsContent += exportStatement;
  writeFile(utilsPath, utilsContent);
}

/**
 * 剥掉源 utils.js 头部的"已被旧版脚本处理过的痕迹"：
 *   - 文档注释 /** ... *\/
 *   - 任何 import ... 语句
 *   - `const componentModules = import.meta.glob(...)` 声明
 *   - `const cssModules = import.meta.glob(...)` 声明
 *   - 这些之间的空行和单行注释
 * 返回剩余的"原始工具函数主体"。
 *
 * 如果 utils.js 还是平台原始形态（没有 import），则原样返回。
 */
function stripLegacyUtilsHeader(content) {
  const lines = content.split('\n');
  let i = 0;
  let inBlockComment = false;
  let strippedAnything = false;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (inBlockComment) {
      strippedAnything = true;
      if (/\*\//.test(trimmed)) inBlockComment = false;
      i++;
      continue;
    }

    if (trimmed === '') { i++; continue; }
    if (trimmed.startsWith('//')) { strippedAnything = true; i++; continue; }
    if (trimmed.startsWith('/*')) {
      strippedAnything = true;
      if (!/\*\//.test(trimmed)) inBlockComment = true;
      i++;
      continue;
    }
    if (trimmed.startsWith('import ')) { strippedAnything = true; i++; continue; }
    if (/^const\s+componentModules\s*=\s*import\.meta\.glob\b/.test(trimmed)) {
      strippedAnything = true; i++; continue;
    }
    if (/^const\s+cssModules\s*=\s*import\.meta\.glob\b/.test(trimmed)) {
      strippedAnything = true; i++; continue;
    }

    break;
  }

  if (!strippedAnything) return content;
  return lines.slice(i).join('\n');
}

/**
 * 剥掉源 utils.js 末尾的"已被旧版脚本追加的痕迹"：
 *   - `// 导出所有工具函数` 注释起，到 `export { ... };` 块结束
 *   - `// 暴露 ComponentLoaderInternal ...` 注释起，到 `window.ComponentLoaderInternal = {...};` 结束
 *
 * 旧脚本一定是把这两段"追加"到 utils.js 末尾的，所以我们只在文件末尾
 * 找这两个起始锚点，找到最早的那个就从那里截断。
 *
 * 注意：必须确保只匹配末尾附加段，不能匹配文件中间正常的 export/window 用法 ——
 * 用"该锚点之后到文件末尾不再出现普通函数声明"作为校验过强且易错；
 * 这里改成只匹配"导出所有工具函数"和"暴露 ComponentLoaderInternal"两段中文注释，
 * 它们是旧脚本的固定标记，不会出现在原始 utils.js 中。
 */
function stripLegacyUtilsFooter(content) {
  const markers = [
    '// 导出所有工具函数',
    '// 暴露 ComponentLoaderInternal',
  ];

  let cutAt = content.length;
  for (const marker of markers) {
    const idx = content.indexOf(marker);
    if (idx !== -1 && idx < cutAt) cutAt = idx;
  }

  if (cutAt === content.length) return content;
  return content.slice(0, cutAt).trimEnd() + '\n';
}

module.exports = { convertCoreFiles };
