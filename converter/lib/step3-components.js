/**
 * Step 3: 批量转换组件目录 → src/pages/*.vue
 *
 * 三类组件，按优先级处理：
 *   1) CONFIG.EMPTY_COMPONENTS 中的：直接生成空骨架 .vue
 *   2) 自定义编码组件（含 index.vue）：fixCustomVue —— 补 import、改 axios→http
 *   3) 普通平台组件（含 index.js）：jsToVue —— AST 改写
 */
'use strict';

const fs = require('fs');
const path = require('path');

const { log, writeFile, readFile, ensureDir, fixEsmStrictModeIssues } = require('./util.js');
const { CONFIG, UTILS_EXPORTED_NAMES } = require('./constants.js');
const { extractThsComponentsFromTemplate, buildThsImportInfo } = require('./ths-design.js');
const { jsToVue } = require('./js-to-vue.js');

function convertComponentsToVue(projectDir) {
  const srcDir = path.join(projectDir, 'src');
  const pagesDir = path.join(srcDir, 'pages');
  ensureDir(pagesDir);

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  const componentDirs = entries
    .filter(e => e.isDirectory() && !['globals', 'pages', 'resources', 'znxl-lib'].includes(e.name))
    .map(e => e.name);

  const pageList = [];
  let convertedCount = 0;
  let emptiedCount = 0;
  let skippedCount = 0;

  for (const dirName of componentDirs) {
    const compDir = path.join(srcDir, dirName);
    const indexJs = path.join(compDir, 'index.js');
    const indexVue = path.join(compDir, 'index.vue');

    // 至少要有 index.js 或 index.vue 之一
    if (!fs.existsSync(indexJs) && !fs.existsSync(indexVue)) continue;

    const indexCss = path.join(compDir, 'index.css');
    const cssContent = fs.existsSync(indexCss) ? readFile(indexCss) : '';

    const vuePath = path.join(pagesDir, `${dirName}.vue`);

    if (CONFIG.EMPTY_COMPONENTS.includes(dirName)) {
      writeFile(vuePath, buildEmptyVue(dirName, cssContent));
      pageList.push(dirName);
      emptiedCount++;
      log(`  置空组件: ${dirName}.vue`, 'warn');
      continue;
    }

    // 优先使用 index.vue（自定义编码的原始组件，从平台数据库导出）
    if (fs.existsSync(indexVue)) {
      try {
        const vueSource = readFile(indexVue);
        const vueContent = fixCustomVue(vueSource, dirName);
        writeFile(vuePath, vueContent);
        pageList.push(dirName);
        convertedCount++;
        log(`  自定义组件: ${dirName}.vue`, 'success');
      } catch (err) {
        log(`  ⚠️  自定义组件转换失败 ${dirName}: ${err.message}`, 'error');
        skippedCount++;
      }
      continue;
    }

    const jsContent = readFile(indexJs);

    try {
      const vueContent = jsToVue(jsContent, dirName, cssContent);
      writeFile(vuePath, vueContent);
      pageList.push(dirName);
      convertedCount++;
    } catch (err) {
      log(`  ⚠️  转换失败 ${dirName}: ${err.message}`, 'error');
      skippedCount++;
    }
  }

  log(`  转换 ${convertedCount} 个，置空 ${emptiedCount} 个，跳过 ${skippedCount} 个`);
  return pageList;
}

// ============================================================
// 自定义编码组件（index.vue）修复
// ============================================================

/**
 * 修复自定义编码的 index.vue 文件。
 *
 * 这些文件是从平台数据库导出的原始 .vue 源码，结构已经是 <template>/<script>/<style>，
 * 但因为原项目所有 JS 通过 <script> 标签共享 window 作用域，所以缺少大量 import：
 * - Vue API（reactive, ref, watch 等）
 * - http（原代码用 axios 全局变量）
 * - utils.js 导出的工具函数
 * - echarts、element-plus 组件等
 * - ths-design 组件
 *
 * 同时还需要：
 * - axios → http 替换
 * - <style scoped> 去掉 scoped（与平台其他页面一致）
 * - fixEsmStrictModeIssues（arguments 重命名、const 重赋值）
 */
function fixCustomVue(vueSource, dirName) {
  // ---- 1) 分离 SFC 三大块 ----
  const templateMatch = vueSource.match(/<template>([\s\S]*?)<\/template>/);
  const scriptMatch = vueSource.match(/<script[^>]*>([\s\S]*?)<\/script>/);
  const styleMatch = vueSource.match(/<style[^>]*>([\s\S]*?)<\/style>/);

  if (!scriptMatch) {
    throw new Error('未找到 <script> 块');
  }

  const scriptAttrs = scriptMatch[0].match(/^<script([^>]*)>/)?.[1] || '';
  // 如果有 setup 或 lang="ts" 等特殊属性，暂不支持
  if (/\bsetup\b/.test(scriptAttrs)) {
    throw new Error('暂不支持 <script setup> 格式');
  }

  let scriptContent = scriptMatch[1];

  // ---- 2) 构建需要补的 import ----
  const existingImports = scriptContent.match(/^import\s+.+?;?\s*$/gm) || [];
  const existingImportText = existingImports.join('\n');

  const missingImports = [];

  // Vue API — 检测代码中使用了哪些 Vue API
  const vueApis = [
    'reactive', 'ref', 'computed', 'watch', 'watchEffect',
    'onMounted', 'onUnmounted', 'onBeforeMount', 'onBeforeUnmount',
    'provide', 'inject', 'toRefs', 'toRef', 'nextTick', 'isRef',
    'shallowRef', 'shallowReactive', 'triggerRef',
    'h', 'createVNode', 'createElementBlock', 'openBlock',
    'withCtx', 'withDirectives', 'withModifiers',
    'resolveComponent', 'defineAsyncComponent',
    'markRaw', 'toRaw', 'toDisplayString', 'createElementVNode',
  ];
  const usedVueApis = vueApis.filter(api => new RegExp(`\\b${api}\\b`).test(scriptContent) && !new RegExp(`import\\s+[^;]*\\b${api}\\b`).test(existingImportText));
  if (usedVueApis.length) {
    missingImports.push(`import { ${usedVueApis.join(', ')} } from 'vue';`);
  }

  // vue-router
  if (/\buseRoute\b/.test(scriptContent) && !/\bimport.*useRoute\b/.test(existingImportText)) {
    missingImports.push(`import { useRoute } from 'vue-router';`);
  }

  // http（替换 axios）
  if (/\baxios\b/.test(scriptContent)) {
    if (!/\bimport.*http\b/.test(existingImportText)) {
      missingImports.push(`import http from '@/http.js';`);
    }
    // axios.get/post/put/delete → http.get/post/put/delete
    scriptContent = scriptContent.replace(/\baxios\.(get|post|put|delete|patch|head|options)\b/g, 'http.$1');
    // axios({ method: ... }) → http({ method: ... })
    scriptContent = scriptContent.replace(/\baxios\(/g, 'http(');
  } else if (/\bhttp\b/.test(scriptContent) && !/\bimport.*http\b/.test(existingImportText)) {
    missingImports.push(`import http from '@/http.js';`);
  }

  // utils.js — 检测使用了哪些工具函数
  const usedUtils = UTILS_EXPORTED_NAMES.filter(
    name => new RegExp(`\\b${name}\\b`).test(scriptContent) && !new RegExp(`import\\s+[^;]*\\b${name}\\b`).test(existingImportText)
  );
  if (usedUtils.length) {
    missingImports.push(`import { ${usedUtils.join(', ')} } from '@/utils.js';`);
  }

  // theme
  if (/\bthemes\b/.test(scriptContent) && !/\bimport.*themes\b/.test(existingImportText)) {
    missingImports.push(`import { themes } from '@/theme.js';`);
  }

  // echarts
  if (/\becharts\b/.test(scriptContent) && !/\bimport.*echarts\b/.test(existingImportText)) {
    missingImports.push(`import * as echarts from 'echarts';`);
  }

  // 第三方库按需引入
  if (/\bmoment\s*\(/.test(scriptContent) || /\bmoment\./.test(scriptContent)) {
    if (!/\bimport.*moment\b/.test(existingImportText)) {
      missingImports.push(`import moment from 'moment';`);
    }
  }
  if (/\b_\./.test(scriptContent)) {
    if (!/\bimport.*lodash\b/.test(existingImportText) && !/\bimport.*_\b/.test(existingImportText)) {
      missingImports.push(`import _ from 'lodash';`);
    }
  }
  if (/\bmitt\s*\(/.test(scriptContent)) {
    if (!/\bimport.*mitt\b/.test(existingImportText)) {
      missingImports.push(`import mitt from 'mitt';`);
    }
  }
  if (/\bfetchEventSource\s*\(/.test(scriptContent)) {
    if (!/\bimport.*fetchEventSource\b/.test(existingImportText)) {
      missingImports.push(`import { fetchEventSource } from '@microsoft/fetch-event-source';`);
    }
  }
  if (/\bio\s*\(/.test(scriptContent) || /\bsocket\.io\b/.test(scriptContent)) {
    if (!/\bimport.*socket\.io-client\b/.test(existingImportText)) {
      missingImports.push(`import io from 'socket.io-client';`);
    }
  }

  // ths-design 组件 — 从 template 中扫描 <t-xxx> 标签
  if (templateMatch) {
    const usedThsComponents = extractThsComponentsFromTemplate(templateMatch[1]);
    const thsImports = buildThsImportInfo(usedThsComponents);
    if (thsImports.statement && !/\bimport.*@ths\/design\b/.test(existingImportText)) {
      missingImports.push(thsImports.statement);
    }
  }

  // 把缺失的 import 插入 <script> 块顶部
  if (missingImports.length) {
    scriptContent = missingImports.join('\n') + '\n' + scriptContent;
  }

  // ---- 3) ESM 严格模式修复 ----
  scriptContent = fixEsmStrictModeIssues(scriptContent);

  // ---- 4) 处理相对路径的子组件 import ----
  // 自定义组件里可能有 import childComponent from './childComponent.vue'
  // 转成 Vite 项目后这些子组件不存在于 src/pages/ 下，需要改为 t-component 动态加载
  // 但如果是用户自己写的子组件（也在数据库里导出了 index.vue），路径要改为 @/pages/xxx.vue
  scriptContent = scriptContent.replace(
    /from\s+['"]\.\/([\w-]+Component)\.vue['"]/g,
    (match, compName) => {
      // 去掉 Component 后缀就是 pageCode
      const pageCode = compName.replace(/Component$/, '');
      return `from '@/pages/${pageCode}.vue'`;
    }
  );

  // ---- 5) 重新拼装 SFC ----
  let result = '';

  if (templateMatch) {
    result += `<template>${templateMatch[1]}</template>\n\n`;
  }

  result += `<script>\n${scriptContent}\n</script>\n`;

  if (styleMatch) {
    // 保留原始 style 属性（scoped、lang 等）
    const styleAttrs = styleMatch[0].match(/^<style([^>]*)>/)?.[1] || '';
    const styleContent = styleMatch[1];
    result += `\n<style${styleAttrs}>\n${styleContent.trim()}\n</style>\n`;
  }

  return result;
}

/**
 * 生成置空的 .vue 文件
 *
 * 用于 CONFIG.EMPTY_COMPONENTS 中列出的组件（例如带复杂自定义逻辑、暂不支持转换的）：
 * 渲染一个空 div + 最小 setup，避免页面渲染时找不到组件。
 */
function buildEmptyVue(dirName, cssContent) {
  const styleBlock = cssContent.trim()
    ? `<style scoped>\n${cssContent.trim()}\n</style>\n`
    : '';

  return `<template>
  <div class="t-l-c-${dirName}"><!----></div>
</template>

<script>
import { ref, reactive, computed, watch, onMounted, onUnmounted, inject, toRefs, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import http from '@/http.js';

export default {
  name: '${dirName}',
  setup() {
    const rootData = inject('root');
    const global = reactive({ ...toRefs(rootData) });
    const route = useRoute();
    const state = reactive({});

    return { state, global, route };
  },
};
</script>

${styleBlock}`;
}

module.exports = { convertComponentsToVue };
