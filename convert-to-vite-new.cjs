#!/usr/bin/env node
/**
 * convert-to-vite-new.js
 *
 * 将低代码平台生成的纯静态 Vue 3 项目（拖拽页面输出的 JS 组件）
 * 转换为 Vite + Vue 3 工程化项目，并把每个页面合并为单文件 .vue。
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
 * 注意：本脚本依赖 @babel/parser 与 prettier，请在平台后端运行环境中预先安装。
 */

'use strict';

const fs = require('fs');
const path = require('path');

let babelParser = null;
let prettier = null;
try {
  babelParser = require('@babel/parser');
} catch (e) {
  // 延迟报错，main() 启动时统一检查
}
try {
  prettier = require('prettier');
} catch (e) {
  // 同上
}

// ============================================================
// 配置
// ============================================================
const CONFIG = {
  EMPTY_COMPONENTS: ['gztLeftCommonAppListEdit'],
  KEEP_ZNXL: 'znxl-inset.js',
};

// ============================================================
// ths-design 组件名映射（kebab-case → PascalCase）
// 来源：add-ths-design-imports.js
// ============================================================
const COMPONENT_NAME_MAP = {
  't-radio': 'TRadio',
  't-button': 'TButton',
  't-cascader': 'TCascader',
  't-chart-design': 'TChartDesign',
  't-chart-pie-percent': 'TChartPiePercent',
  't-chart-sankey': 'TChartSankey',
  't-checkbox': 'TCheckbox',
  't-circle': 'TCircle',
  't-col': 'TCol',
  't-component': 'TComponent',
  't-date-picker': 'TDatePicker',
  't-gradient-shadow-text': 'TGradientShadowText',
  't-high-light-text': 'THighLightText',
  't-iframe': 'TIframe',
  't-image-base': 'TImageBase',
  't-input': 'TInput',
  't-line': 'TLine',
  't-list-card': 'TListCard',
  't-list-card-common': 'TListCardCommon',
  't-list-card-preview': 'TListCardPreview',
  't-loop-video': 'TLoopVideo',
  't-pagination-base': 'TPaginationBase',
  't-rect': 'TRect',
  't-rolling-number': 'TRollingNumber',
  't-row': 'TRow',
  't-scrollable-cards': 'TScrollableCards',
  't-search': 'TSearch',
  't-select': 'TSelect',
  't-switch': 'TSwitch',
  't-table': 'TTable',
  't-tabs': 'TTabs',
  't-tabs-base': 'TTabsBase',
  't-text': 'TText',
  't-text-common': 'TTextCommon',
  't-text-unit': 'TTextUnit',
  't-trace-path': 'TTracePath',
  't-chart-pie-doughnut-data': 'TChartPieDoughnutData',
  't-chart-pie-doughnut': 'TChartPieDoughnut',
  't-chart-bar-base': 'TChartBarBase',
  't-chart-liquidfill-base': 'TChartLiquidfillBase',
  't-chart-line-base': 'TChartLineBase',
  't-chart-line-simple': 'TChartLineSimple',
  't-chart-line-discolor': 'TChartLineDiscolor',
  't-chart-stacked-column': 'TChartStackedColumn',
  't-chart-pie-base': 'TChartPieBase',
  't-chart-pie-ring': 'TChartPieRing',
  't-chart-pie': 'TChartPie',
  't-chart-word-cloud': 'TChartWordCloud',
  't-chart-line-area': 'TChartLineArea',
  't-chart-bar-horizontal': 'TChartBarHorizontal',
  't-chart-bar-horizontal-stacked': 'TChartBarHorizontalStacked',
  't-chart-radar': 'TChartRadar',
  't-chart-tower-diagram': 'TChartTowerDiagram',
  't-chart-transverse': 'TChartTransverse',
  't-chart-curve': 'TChartCurve',
  't-chart-curve-card': 'TChartCurveCard',
  't-chart-dashboard': 'TChartDashboard',
  't-chart-bar-stacked': 'TChartBarStacked',
  't-chart-scatter-base': 'TChartScatterBase',
  't-chart-bar-3d': 'TChartBar3d',
  't-chart-bar-3d-cylindrical': 'TChartBar3dCylindrical',
  't-chart-bar-capsule': 'TChartBarCapsule',
  't-chart-pie-3d': 'TChartPie3d',
  't-chart-type-treemap': 'TChartTypeTreeMap',
  't-chart-heatmap-base': 'TChartHeatmapBase',
  't-chart-rose': 'TChartRose',
  't-chart-excellent-rate': 'TChartExcellentRate',
  't-chart-bar-simple': 'TChartBarSimple',
  't-chart-liquidfill': 'TChartLiquidfill',
  't-chart-line-single': 'TChartLineSingle',
  't-chart-yaxis-inverse': 'TChartYaxisInverse',
  't-chart-dashboard-aqi': 'TChartDashboardAqi',
  't-chart-dashboard-aqi-label': 'TChartDashboardAqiLabel',
  't-chart-double-xaxis': 'TChartDoubleXaxis',
  't-chart-angle-axis': 'TChartAngleAxis',
  't-chart-bar-compare': 'TChartBarCompare',
  't-chart-border-rose': 'TChartBorderRose',
  't-chart-bar-3d-gradual': 'TChartBar3dGradual',
  't-chart-pie-border': 'TChartPieBorder',
  't-chart-bar-across': 'TChartBarAcross',
  't-chart-wind-direction': 'TChartWindDirection',
  't-chart-custom-stacked': 'TChartCustomStacked',
  't-chart-muti-ring-pie': 'TChartMutiRingPie',
  't-chart-funnel': 'TChartFunnel',
  't-chart-liquidfill-rect': 'TChartLiquidfillRect',
  't-chart-stacked-curve': 'TChartStackedCurve',
  't-chart-area-3d': 'TChartArea3d',
  't-chart-tag-cloud-3d': 'TChartTagClud3d',
  't-carousel-text': 'TCarouselText',
  't-swiper-base': 'TSwiperBase',
  't-tree': 'TTree',
  't-tree-panel': 'TTreePanel',
  't-timeline': 'TTimeline',
  't-timeline-base': 'TTimelineBase',
  't-proportion-bar': 'TProportionBar',
  't-calendar-base': 'TCalendarBase',
  't-three-circle-chart': 'TThreeCircleChart',
  't-time-axis-complex': 'TTimeAxisComplex',
  't-composite-timeline': 'TCompositeTimeline',
  't-header-base': 'THeaderBase',
  't-header-tabs': 'THeaderTabs',
  't-title': 'TTitle',
  't-menu': 'TMenu',
  't-menu-item': 'TMenuItem',
  't-submenu': 'TSubmenu',
  't-submenu-item': 'TSubmenuItem',
  't-tabs-scroll': 'TTabsScroll',
  't-breadcrumb-base': 'TBreadcrumbBase',
  't-tabs-vertical-icon': 'TTabsVerticalIcon',
  't-steps': 'TSteps',
  't-steps-base': 'TStepsBase',
  't-header-menu': 'THeaderMenu',
  't-secondary-menu': 'TSecondaryMenu',
  't-year-contrast': 'TYearContrast',
  't-trigger-menu': 'TTriggerMenu',
  't-checkbox-menu': 'TRadioMenu',
  't-header-menu-scroll': 'THeaderMenuScroll',
  't-upload-button': 'TUploadButton',
  't-button-back': 'TButtonBack',
  't-button-full-screen': 'TButtonFullScreen',
  't-list': 'TList',
  't-list-status': 'TListStatus',
  't-grid': 'TGrid',
  't-quality-statistics': 'TQualityStatistics',
  't-aqi': 'TAqi',
  't-compare': 'TCompare',
  't-list-card-item': 'TListCardItem',
  't-card-icon-base': 'TCardIconBase',
  't-card-pollution-base': 'TCardPollutionBase',
  't-list-card-rate': 'TListCardRate',
  't-list-card-weather-forecast': 'TListCardWeatherForecast',
  't-list-card-air-quality-forecast': 'TListCardAirQualityForecast',
  't-collapse': 'TCollapse',
  't-weather-day': 'TWeatherDay',
  't-self-adaption-card': 'TSelfAdaptionCard',
  't-module-tabs': 'TModuleTabs',
  't-list-card-multiple-choice': 'TListCardMultipleChoice',
  't-quality-monitor': 'TQualityMonitor',
  't-back-top': 'TBackTop',
  't-chart-map-base': 'TChartMapBase',
  't-layer-toolbox': 'TLayerToolbox',
  't-chart-map-scatter': 'TChartMapScatter',
  't-pollution-forecast': 'TPollutionForecast',
  't-two-dimension-container': 'TTwoDimensionContainer',
  't-two-dimension-pie': 'TTwoDimensionPie',
  't-two-dimension-text': 'TTwoDimensionText',
  't-rank-contrast': 'TRankContrast',
  't-rank-single': 'TRankSingle',
  't-two-dimension-image': 'TTwoDimensionImage',
  't-four-dimension': 'TFourDimension',
  't-six-dimension': 'TSixDimension',
  't-calendar-pollution': 'TCalendarPollution',
  't-target-assessment': 'TTargetAssessment',
  't-chart-dashboard-aqi-base': 'TChartDashboardAqiBase',
  't-chart-dashboard-aqi-segment': 'TChartDashboardAqiSegment',
  't-magnifier': 'TMagnifier',
  't-dialog': 'TDialog',
  't-regulatory-target-selector': 'TRegulatoryTargetSelector',
  't-dialog-single-tree': 'TDialogSingleTree',
  't-dialog-single-tree-input': 'TDialogSingleTreeInput',
  't-svg-icon': 'TSvgIcon',
  't-user-multiple-dialog': 'TUserMultipleDialog',
  't-user-multiple-dialog-input': 'TUserMultipleDialogInput',
  't-dialog-multiple-tree': 'TDialogMultipleTree',
  't-dialog-multiple-tree-input': 'TDialogMultipleTreeInput',
  't-select-law-person': 'TSelectLawPerson',
  't-slider': 'TSlider',
  't-dynamically-module-container': 'TDynamicallyModuleContainer',
  't-video-base': 'TVideoBase',
  't-video-monitor': 'TVideoMonior',
  't-gradient-text': 'TGradientText',
  't-background-box': 'TBackgroundBox',
  't-background-animation': 'TBackgroundAnimation',
  't-pagination': 'TPagination',
  't-progress-base': 'TProgressBase',
  't-area-selector': 'TAreaSelector',
  't-area-selector-simple': 'TAreaSelectorSimple',
  't-area-selector-data': 'TAreaSelectorData',
  't-regional-multiple-selector': 'TRegionalMultipleSelector',
  't-area-selector-custom-data': 'TAreaSelectorCustomData',
};

// ============================================================
// 工具函数
// ============================================================
function log(msg, type = 'info') {
  const colors = { info: '\x1b[36m', success: '\x1b[32m', warn: '\x1b[33m', error: '\x1b[31m' };
  const reset = '\x1b[0m';
  console.log(`${colors[type] || ''}[convert-new] ${msg}${reset}`);
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, 'utf-8');
}

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

// ============================================================
// 模板读取（templates/ 目录与脚本同级）
// ------------------------------------------------------------
// 用法：
//   readTemplate('bridge.js')                       // 原样返回内容
//   readTemplate('index.html', { title: '我的应用' }) // 替换 {{title}} 占位符
//
// 占位符规则：{{key}} → vars[key]；未提供 vars 时不做替换。
// ============================================================
const TEMPLATES_DIR = path.join(__dirname, 'templates');

function readTemplate(name, vars) {
  const tplPath = path.join(TEMPLATES_DIR, name);
  if (!fs.existsSync(tplPath)) {
    throw new Error(`模板文件不存在: ${tplPath}`);
  }
  let content = fs.readFileSync(tplPath, 'utf-8');
  if (vars && typeof vars === 'object') {
    content = content.replace(/\{\{(\w+)\}\}/g, (m, key) => {
      return Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : m;
    });
  }
  return content;
}

function copyDirSync(src, dest) {
  ensureDir(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      ensureDir(path.dirname(destPath));
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * 将任意字符串转换为符合 npm 规范的包名：
 *   - 全小写
 *   - 仅允许 ASCII 字母数字与 - _ .
 *   - 不允许以 . 或 _ 开头
 *   - 非法字符（含中文）替换为 -
 *   - 全部非法时退化为 'lego-app'
 */
function sanitizePackageName(name) {
  let n = String(name).toLowerCase();
  n = n.replace(/[^a-z0-9\-_.]/g, '-');
  n = n.replace(/-+/g, '-').replace(/^[._-]+|[._-]+$/g, '');
  if (!n) n = 'lego-app';
  return n;
}

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
// Step 1: 生成 Vite 脚手架
// ============================================================
function generateScaffold(projectDir) {
  const packageJson = {
    name: sanitizePackageName(path.basename(projectDir)),
    version: '1.0.0',
    private: true,
    type: 'module',
    scripts: {
      dev: 'vite',
      build: 'vite build',
      preview: 'vite preview',
    },
    dependencies: {
      'echarts': '^5.4.0',
      'echarts-liquidfill': '^3.0.0',
      'echarts-wordcloud': '^2.0.0',
      '@ths/design': '^1.1.28',
      'vue': '^3.4.0',
      'vue-router': '^4.3.0',
      'axios': '^1.6.0',
      'mitt': '^3.0.1',
      'lodash': '^4.17.21',
      'qs': '^6.11.0',
      'element-plus': '^1.0.2-beta.71',
      'vue-i18n': '^9.13.0',
      'socket.io-client': '^4.7.0',
      'vuedraggable': '^4.1.0',
      'moment': '^2.29.4',
      'pinyin-pro': '^3.16.0',
      'highcharts': '^9.3.3',
      '@ths/c-common-base-button': '^2.0.10',
      '@ths/c-common-base-paging': '^2.0.5',
      '@ths/c-common-base-table': '2.0.6',
      'three': '^0.168.0',
      'video.js': '^7.12.3',
      '@microsoft/fetch-event-source': '^2.0.1',
      "@micro-zoe/micro-app": "1.0.0-rc.30",
      "terser": "^5.48.0"
    },
    devDependencies: {
      'vite': '^5.4.0',
      '@vitejs/plugin-vue': '^5.0.0',
    },
  };
  writeFile(path.join(projectDir, 'package.json'), JSON.stringify(packageJson, null, 2));

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

// ============================================================
// Step 2: 核心文件
// ============================================================
function convertCoreFiles(projectDir) {
  const srcDir = path.join(projectDir, 'src');

  // http.js
  writeFile(path.join(srcDir, 'http.js'), `/**
 * HTTP 请求封装
 */
import axios from 'axios';

const http = axios.create({});

export default http;
`);

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

  // websocket.js
  const websocketJsPath = path.join(srcDir, 'websocket.js');
  if (fs.existsSync(websocketJsPath)) {
    let convertedWs = readFile(websocketJsPath);
    convertedWs = convertedWs.replace(/^if \(typeof ths == "undefined"\)/m, 'let ths = window.ths || {}; if (false)');
    convertedWs = convertedWs.replace('ths.initSocket = function', 'export const initSocket = function');
    writeFile(websocketJsPath, convertedWs);
  }

  convertMainFile(projectDir);
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

// ============================================================
// 转换 main.js —— 引用 root.vue 而不是 pages/root/index.js
// ============================================================
function convertMainFile(projectDir) {
  const srcDir = path.join(projectDir, 'src');

  writeFile(path.join(srcDir, 'main.js'), readTemplate('main.js'));
}

// ============================================================
// Step 3: 批量转换组件 → 扁平 .vue
// ============================================================
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

// ============================================================
// JS → .vue 转换核心
// ============================================================

/**
 * 把一个 index.js（含 IIFE / window 赋值 / 裸对象）转为单文件 .vue。
 *
 * 流程：
 *   1) 清理：去注释、去 IIFE 外壳、去 window.xxxComponent 赋值、剥离 Vue. 前缀
 *   2) 用 AST 解析剩余的对象表达式 → 提取 template 字符串和"组件对象其余部分"代码
 *   3) 扫描 template 中的 <t-xxx> 标签 → 生成 ths-design 的 import 与 components 注册
 *   4) 用 prettier 格式化 template 为可读的 HTML
 *   5) 拼装 <template>、<script>、<style> 三块
 */
function jsToVue(rawContent, dirName, cssContent) {
  const componentName = dirName + 'Component';

  // ---- 1) 预清理 ----
  let content = rawContent.replace(/^\/\*\*[\s\S]*?\*\/\s*/, '').trimStart();

  // 去 IIFE 外壳
  const isIIFE = /^\s*\(\s*function\s*\(/.test(content);
  if (isIIFE) {
    content = content.replace(/^\s*\(\s*function\s*\([^)]*\)\s*\{/, '');
    content = content.replace(/\}\s*\)\s*\(\s*\)\s*;?\s*$/, '');
  }

  // 去 window.xxxComponent =
  const windowAssignRegex = new RegExp(`window\\.${escapeRegExp(componentName)}\\s*=\\s*`, 'g');
  content = content.replace(windowAssignRegex, '');

  // 去 Vue. 前缀
  content = stripVuePrefix(content);
  // 去 window.ComponentLoader → ComponentLoader
  content = content.replace(/\bwindow\.ComponentLoader\b/g, 'ComponentLoader');

  content = content.trim();
  if (content.endsWith(';')) content = content.slice(0, -1);

  // ---- 2) AST 解析 ----
  // 把内容包成一个表达式语句，便于 babel 解析（content 此时应该是一个 { ... } 对象字面量）
  const wrapped = `(${content})`;
  let ast;
  try {
    ast = babelParser.parse(wrapped, {
      sourceType: 'module',
      plugins: ['objectRestSpread'],
      errorRecovery: true,
    });
  } catch (e) {
    throw new Error(`AST 解析失败: ${e.message}`);
  }

  const exprStmt = ast.program.body[0];
  if (!exprStmt || exprStmt.type !== 'ExpressionStatement' ||
      exprStmt.expression.type !== 'ObjectExpression') {
    throw new Error('期望组件是一个对象字面量');
  }
  const objExpr = exprStmt.expression;

  // 提取 template 节点与其余节点
  let templateStr = '';
  const otherProps = [];
  for (const prop of objExpr.properties) {
    if (
      prop.type === 'ObjectProperty' &&
      prop.key &&
      ((prop.key.type === 'Identifier' && prop.key.name === 'template') ||
       (prop.key.type === 'StringLiteral' && prop.key.value === 'template'))
    ) {
      templateStr = extractTemplateString(prop.value, wrapped);
    } else {
      otherProps.push(prop);
    }
  }

  if (!templateStr) {
    throw new Error('未找到 template 字段');
  }

  // ---- 3) 扫描 template 中的 ths-design 组件 ----
  const usedThsComponents = extractThsComponentsFromTemplate(templateStr);
  const thsImports = buildThsImportInfo(usedThsComponents);

  // ---- 4) 格式化 template 为 HTML ----
  const formattedTemplate = formatTemplateHtml(templateStr);

  // ---- 5) 重建 script 内部对象（去掉 template，加上 components） ----
  let scriptObjectCode = reassembleObject(otherProps, wrapped, thsImports.componentEntries);

  // 修复 ESM 严格模式下的非法写法（源代码中按非严格模式编写）
  scriptObjectCode = fixEsmStrictModeIssues(scriptObjectCode);

  // ---- 6) 拼装最终 .vue ----
  const importBlock = buildImportBlockForVue(rawContent, dirName, thsImports.statement);

  // 关键：Vue SFC 编译器按文本扫描 <script>/</script> 边界。
  // scriptObjectCode 里可能包含 srcdoc 之类的字符串字面量，里面有 "</script>" 子串，
  // 会让编译器提前认为脚本块结束。把所有 </script> 转义为 <\/script>（JS 字符串里完全合法）。
  // 同样处理 importBlock（兜底，一般不会含）。
  const safeImportBlock = escapeScriptCloseTags(importBlock);
  const safeScriptObjectCode = escapeScriptCloseTags(scriptObjectCode);

  const scriptBlock =
`<script>
${safeImportBlock}
export default ${safeScriptObjectCode}
</script>`;

  const templateBlock =
`<template>
${indent(formattedTemplate, '  ')}
</template>`;

  const styleBlock = cssContent.trim()
    ? `<style scoped>\n${cssContent.trim()}\n</style>\n`
    : '';

  return `${templateBlock}\n\n${scriptBlock}\n\n${styleBlock}`;
}

/**
 * 从 AST 节点中提取 template 的完整字符串值
 * 支持：StringLiteral、TemplateLiteral（无表达式）、字符串/模板字面量的相加
 */
function extractTemplateString(node, sourceCode) {
  if (!node) return '';

  if (node.type === 'StringLiteral') {
    return node.value;
  }
  if (node.type === 'TemplateLiteral') {
    // 平台输出的 template 一般不含 ${...} 插值
    if (node.expressions && node.expressions.length === 0) {
      return node.quasis.map(q => q.value.cooked).join('');
    }
    // 含插值，简单拼接 cooked + raw 占位
    let result = '';
    node.quasis.forEach((q, i) => {
      result += q.value.cooked;
      if (i < node.expressions.length) {
        const exprStart = node.expressions[i].start;
        const exprEnd = node.expressions[i].end;
        result += '${' + sourceCode.substring(exprStart, exprEnd) + '}';
      }
    });
    return result;
  }
  if (node.type === 'BinaryExpression' && node.operator === '+') {
    return extractTemplateString(node.left, sourceCode) +
           extractTemplateString(node.right, sourceCode);
  }
  // 兜底：直接取源码段并去除两侧引号/反引号
  const raw = sourceCode.substring(node.start, node.end);
  return raw.replace(/^[`'"]/, '').replace(/[`'"]$/, '');
}

/**
 * 重建对象字面量代码：把非 template 的属性按原始源码区间拼回，
 * 末尾追加 components: { ... }（如果有 ths 组件被引用）
 */
function reassembleObject(otherProps, sourceCode, componentEntries) {
  const parts = [];

  for (const prop of otherProps) {
    // 直接截取节点原始源码片段，保留作者写法（注释除外）
    const segment = sourceCode.substring(prop.start, prop.end);
    parts.push(segment);
  }

  if (componentEntries && componentEntries.length > 0) {
    // 检查是否已存在 components 属性 —— 已存在则合并
    const existingComponentsIdx = otherProps.findIndex(p =>
      p.type === 'ObjectProperty' && p.key &&
      ((p.key.type === 'Identifier' && p.key.name === 'components') ||
       (p.key.type === 'StringLiteral' && p.key.value === 'components'))
    );
    if (existingComponentsIdx >= 0) {
      // 已存在：把 ths 组件追加到现有 components 对象的开头
      const existing = parts[existingComponentsIdx];
      const merged = mergeComponentsBlock(existing, componentEntries);
      parts[existingComponentsIdx] = merged;
    } else {
      const block =
        'components: {\n' +
        componentEntries.map(n => `    ${n},`).join('\n') +
        '\n  }';
      parts.unshift(block);
    }
  }

  if (parts.length === 0) return '{}';
  return '{\n  ' + parts.join(',\n  ') + ',\n}';
}

/**
 * 合并 ths 组件到已有的 components 块字符串中
 */
function mergeComponentsBlock(existingSegment, newEntries) {
  // existingSegment 形如：components: { X, Y, ... }
  const openBraceIdx = existingSegment.indexOf('{');
  const closeBraceIdx = existingSegment.lastIndexOf('}');
  if (openBraceIdx === -1 || closeBraceIdx === -1) return existingSegment;

  const inner = existingSegment.substring(openBraceIdx + 1, closeBraceIdx).trim();
  const existingNames = new Set(
    inner
      .split(/[,\n]/)
      .map(s => s.trim().replace(/:.*$/, '').trim())
      .filter(Boolean)
  );

  const additions = newEntries.filter(n => !existingNames.has(n));
  if (additions.length === 0) return existingSegment;

  const additionLines = additions.map(n => `    ${n},`).join('\n');
  const newInner = inner
    ? `\n${additionLines}\n    ${inner}${inner.endsWith(',') ? '' : ','}\n  `
    : `\n${additionLines}\n  `;

  return 'components: {' + newInner + '}';
}

/**
 * 修复 ESM 严格模式下的非法写法
 *
 * 源代码按非严格模式 <script> 编写，转成 .vue（ES Module）后有两类问题：
 *
 * 1. arguments 是 ES Module 保留标识符，不能声明为变量名
 *    如 `let arguments = document.querySelectorAll(...)` → 重命名为 `_arguments`
 *
 * 2. const 变量被重新赋值（非严格模式 var 允许，ESM 报错）
 *    如 `const xData = [...]; ... xData = [...]` → `let xData = [...]`
 *    检测方法：扫描所有 const 声明，若变量名在同一脚本块内出现
 *    不带前置 const/let/var 的赋值 `xxx =`（排除 ===/==），则改为 let
 */
function fixEsmStrictModeIssues(code) {
  // ---- 1) 重命名 arguments 变量 ----
  if (/\b(const|let|var)\s+arguments\b/.test(code)) {
    // 所有声明和后续引用一起替换为 _arguments
    // 注意要用 /g 才能处理多个声明（同一函数被多次复制的低代码场景）
    code = code.replace(/\b(const|let|var)\s+arguments\b/g, '$1 _arguments');
    code = code.replace(/\barguments\b(?!\s*=[^=])/g, '_arguments');
  }

  // ---- 2) const → let（被重新赋值的） ----
  // 收集所有 const 声明的变量名（同名变量在不同作用域可能多次声明）
  const constDeclRegex = /\bconst\s+(\w+)\s*=/g;
  const constVars = new Set();
  let m;
  while ((m = constDeclRegex.exec(code)) !== null) {
    constVars.add(m[1]);
  }

  for (const varName of constVars) {
    if (varName === 'undefined' || varName === 'NaN' || varName === 'Infinity') continue;

    // 检测是否有重赋值（独立的 varName 后跟 =，且不是 ==/===，前面不是 const/let/var）
    const reassignRegex = new RegExp(
      `(?<!(?:const|let|var)\\s+)\\b${varName}\\s*=[^=]`
    );
    if (reassignRegex.test(code)) {
      // 把所有 const 声明改为 let（同名变量可能多处声明，需要全局替换）
      const declRegex = new RegExp(`\\bconst\\s+${varName}\\b`, 'g');
      code = code.replace(declRegex, `let ${varName}`);
    }
  }

  return code;
}

/**
 * 扫描 template 中所有 <t-xxx> 标签
 */
function extractThsComponentsFromTemplate(template) {
  const set = new Set();
  const regex = /<t-([a-z0-9-]+)/g;
  let m;
  while ((m = regex.exec(template)) !== null) {
    set.add('t-' + m[1]);
  }
  return Array.from(set);
}

/**
 * 根据使用的 ths 组件构建 import 语句和 components 条目
 */
function buildThsImportInfo(usedComponents) {
  const valid = usedComponents.filter(c => COMPONENT_NAME_MAP[c]);
  if (valid.length === 0) {
    return { statement: '', componentEntries: [] };
  }
  const names = [...new Set(valid.map(c => COMPONENT_NAME_MAP[c]))].sort();
  return {
    statement: `import { ${names.join(', ')} } from '@ths/design';`,
    componentEntries: names,
  };
}

/**
 * 用 prettier 格式化 HTML 模板
 */
function formatTemplateHtml(template) {
  try {
    const formatted = prettier.format(template, {
      parser: 'html',
      printWidth: 120,
      htmlWhitespaceSensitivity: 'ignore',
      tabWidth: 2,
    });
    return formatted.trimEnd();
  } catch (e) {
    // prettier 解析失败时退化为原样输出
    return template.trim();
  }
}

/**
 * 缩进每一行
 */
function indent(text, prefix) {
  return text.split('\n').map(l => (l.length ? prefix + l : l)).join('\n');
}

/**
 * 构建 .vue 中 <script> 的 import 块（含 Vue API + 工具 + ths-design）
 */
function buildImportBlockForVue(originalContent, dirName, thsImportStatement) {
  let importBlock = `import {
  reactive, ref, computed, watch, watchEffect,
  onMounted, onUnmounted, onBeforeMount, onBeforeUnmount,
  provide, inject, toRefs, toRef, nextTick, isRef,
  shallowRef, shallowReactive, triggerRef,
  h, createVNode, createElementBlock, openBlock,
  withCtx, withDirectives, withModifiers,
  resolveComponent, defineAsyncComponent,
  markRaw, toRaw, toDisplayString, createElementVNode,
} from 'vue';
import { useRoute } from 'vue-router';
import http from '@/http.js';
import { ComponentLoader, watchComponentVisible, generateCacheKey, requestApi, ResourceLoader, replaceCssVariables, getUrlParam, getQueryParam, guid, runAnimation, setPageScale, mountDynamicComponent, loadInitialApis, fetchApiData, getDataValue, applyFilter, filterData, convertCharacter } from '@/utils.js';
import { themes } from '@/theme.js';
import * as echarts from 'echarts';
`;

  // 按需引入第三方库 - 检测页面内容中实际使用了哪些
  const extraImports = [];

  if (/\bfetchEventSource\s*\(/.test(originalContent)) {
    extraImports.push(`import { fetchEventSource } from '@microsoft/fetch-event-source';`);
  }

  if (/\bio\s*\(/.test(originalContent) || /\bsocket\.io\b/.test(originalContent)) {
    extraImports.push(`import io from 'socket.io-client';`);
  }

  if (/\bmoment\s*\(/.test(originalContent) || /\bmoment\./.test(originalContent)) {
    extraImports.push(`import moment from 'moment';`);
  }

  if (/\bmitt\s*\(/.test(originalContent)) {
    extraImports.push(`import mitt from 'mitt';`);
  }

  if (/\b_\./.test(originalContent)) {
    extraImports.push(`import _ from 'lodash';`);
  }

  if (extraImports.length) {
    importBlock = extraImports.join('\n') + '\n' + importBlock;
  }

  if (thsImportStatement) {
    importBlock += thsImportStatement + '\n';
  }

  return importBlock;
}

/**
 * 生成置空的 .vue 文件
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

/**
 * 剥离 Vue. 前缀
 */
function stripVuePrefix(content) {
  return content.replace(
    /Vue\.(reactive|ref|computed|watch|watchEffect|nextTick|onMounted|onUnmounted|markRaw|toRaw|shallowRef|shallowReactive|triggerRef|isRef|toRefs|toRef|unref|isReactive|provide|inject|createVNode|h|resolveComponent|defineAsyncComponent|defineComponent|createElementBlock|openBlock|createBlock|withCtx|withDirectives|withModifiers|normalizeClass|normalizeStyle|mergeProps|renderList|toDisplayString|createTextVNode|createCommentVNode|vShow|KeepAlive|Transition|Suspense|Fragment)\b/g,
    '$1'
  );
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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

/**
 * 将 JS 代码中所有的 "</script>" 转义为 "<\/script>"。
 * 用于 Vue SFC 的 <script> 块内容：Vue 编译器按文本扫描边界，
 * 字符串/注释里出现 </script> 会让它误判块结束。
 * 在 JS 里 <\/script> 与 </script> 完全等价（\/ === /），转义后行为不变。
 */
function escapeScriptCloseTags(code) {
  return code.replace(/<\/script\s*>/gi, m => m.replace('</', '<\\/'));
}

/**
 * utils.js 中导出的、可能被 publicGlobalFunctions.js 引用的函数名。
 * 来源：convertUtilsFile 末尾追加的 export 列表。
 */
const UTILS_EXPORTED_NAMES = [
  'runAnimation', 'setPageScale', 'AQI', 'convertCharacter',
  'getUrlParam', 'getQueryParam', 'guid', 'mountDynamicComponent',
  'loadAndRegisterComponentAndRoute', 'ResourceLoader', 'ComponentLoader',
  'replaceCssVariables', 'loadInitialApis', 'fetchApiData',
  'applyFilter', 'getDataValue', 'filterData',
  'watchComponentVisible', 'requestApi', 'generateCacheKey',
];

/**
 * 给 publicGlobalFunctions.js 自动补上从 @/utils.js 引入的依赖。
 *
 * 平台原始项目里所有 JS 是用 <script> 顺序加载的，publicGlobalFunctions.js
 * 可以直接调用 utils.js 里的 convertCharacter / guid 等（都挂在 window）。
 * 转成 ES Module 后这些标识符在文件作用域内不存在，必须显式 import。
 *
 * 实现：扫描文件文本，找出引用了哪些 UTILS_EXPORTED_NAMES 中的名字（按单词边界匹配），
 * 在文件顶部加一行 `import { ... } from '@/utils.js';`。
 */
function addUtilsImportsToPublicFns(code) {
  const used = UTILS_EXPORTED_NAMES.filter(
    name => new RegExp(`\\b${name}\\b`).test(code)
  );
  if (used.length === 0) return code;
  const importLine = `import { ${used.join(', ')} } from '@/utils.js';\n`;
  return importLine + code;
}

/**
 * 把一段 JS 里所有顶层声明（const/let/var/function/class）改写为 `window.xxx = ...`，
 * 用于 publicGlobalFunctions.js：
 *   - 平台导出时写的是裸 `const setDomHeightValue = (...) => {}` 之类
 *   - 在 ES Module 下，这些声明只在文件作用域可见，不会自动挂到 window 上
 *   - 而页面里直接调用 `setDomHeightValue(...)`（实际依赖全局），所以必须显式挂载
 *
 * 用 AST 仅处理 Program.body 的顶层节点，跳过函数内部的局部 const。
 * 解构声明 `const { a, b } = x` 转为 `({a, b} = window, window.a = a; window.b = b)` —— 这里没遇到，简单地保留原文。
 */
function hoistTopLevelDeclsToWindow(code) {
  if (!babelParser) return code;
  let ast;
  try {
    ast = babelParser.parse(code, {
      sourceType: 'module',
      plugins: ['objectRestSpread'],
      errorRecovery: true,
    });
  } catch (e) {
    log(`  publicGlobalFunctions.js AST 解析失败，保留原文：${e.message}`, 'warn');
    return code;
  }

  // 收集需要替换的区间：从节点 start 到 end，新文本
  const edits = [];
  for (const node of ast.program.body) {
    if (node.type === 'VariableDeclaration') {
      // 仅处理 `const NAME = EXPR;` 形式的单变量声明
      const parts = [];
      let ok = true;
      for (const d of node.declarations) {
        if (!d.id || d.id.type !== 'Identifier' || !d.init) { ok = false; break; }
        const initText = code.substring(d.init.start, d.init.end);
        parts.push(`window.${d.id.name} = ${initText};`);
      }
      if (ok) edits.push({ start: node.start, end: node.end, text: parts.join('\n') });
    } else if (node.type === 'FunctionDeclaration' && node.id) {
      // function foo(...) {...}  →  window.foo = function foo(...) {...};
      const fnText = code.substring(node.start, node.end);
      edits.push({ start: node.start, end: node.end, text: `window.${node.id.name} = ${fnText};` });
    } else if (node.type === 'ClassDeclaration' && node.id) {
      const clsText = code.substring(node.start, node.end);
      edits.push({ start: node.start, end: node.end, text: `window.${node.id.name} = ${clsText};` });
    }
    // ExpressionStatement / 已经是 window.xxx = ... 的直接保留
  }

  if (edits.length === 0) return code;

  // 从后往前替换，避免偏移失效
  let out = code;
  edits.sort((a, b) => b.start - a.start);
  for (const e of edits) {
    out = out.slice(0, e.start) + e.text + out.slice(e.end);
  }
  return out;
}

// ============================================================
// Step 4: 全局变量/函数（与旧脚本一致）
// ============================================================
function convertGlobals(projectDir) {
  const globalsDir = path.join(projectDir, 'src', 'globals');

  const varsDir = path.join(globalsDir, 'variables');
  if (fs.existsSync(varsDir)) {
    for (const file of fs.readdirSync(varsDir)) {
      if (!file.endsWith('.js')) continue;
      const filePath = path.join(varsDir, file);
      let content = readFile(filePath);

      const initPattern = /window\.(\w+)\s*=\s*window\.\1\s*\|\|\s*\{\}/;
      if (initPattern.test(content)) {
        const varMatch = content.match(initPattern);
        const varName = varMatch[1];
        content = content.trimEnd() + `\n\nexport const ${varName} = window.${varName};\n`;
        writeFile(filePath, content);
        log(`  保留 window 赋值模式: ${file}`, 'warn');
      } else {
        content = content.replace(/window\.(\w+)\s*=\s*/, 'export const $1 = ');
        writeFile(filePath, content);
      }
    }
  }

  const funcsDir = path.join(globalsDir, 'functions');
  if (fs.existsSync(funcsDir)) {
    for (const file of fs.readdirSync(funcsDir)) {
      if (!file.endsWith('.js')) continue;
      const filePath = path.join(funcsDir, file);
      let content = readFile(filePath);
      if (!content.trim()) continue;
      // publicGlobalFunctions.js 内的函数被很多页面直接以 window.xxx() 形式调用，
      // 但平台导出的源文件里写的是顶层 `const xxx = ...` / `function xxx() {}`，
      // 在 ES Module 里 const/function 不会自动挂到 window 上 —— 必须显式赋值。
      // 用 AST 找出所有顶层声明，把 `const x = ...` / `function x(...) {}` 改写为 `window.x = ...`。
      //
      // 另外：源文件依赖原来的"全部 script 一起跑"语义，会直接调用 convertCharacter 等
      // utils.js 导出的函数（原本作为 window 全局可用）。转成 ES Module 后必须显式 import，
      // 否则在 publicGlobalFunctions.js 加载时这些标识符未定义。
      if (file === 'publicGlobalFunctions.js') {
        content = hoistTopLevelDeclsToWindow(content);
        content = addUtilsImportsToPublicFns(content);
        content = fixEsmStrictModeIssues(content);
        writeFile(filePath, content);
        continue;
      }
      content = content.replace(/window\.(\w+)\s*=\s*/, 'export const $1 = ');
      content = fixEsmStrictModeIssues(content);
      writeFile(filePath, content);
    }
  }

  const indexContent = generateGlobalsIndex(globalsDir);
  writeFile(path.join(globalsDir, 'index.js'), indexContent);
}

function generateGlobalsIndex(globalsDir) {
  const varsDir = path.join(globalsDir, 'variables');
  const funcsDir = path.join(globalsDir, 'functions');
  const filtersDir = path.join(globalsDir, 'filters');

  const lines = [
    '/**',
    ' * 全局变量和函数统一导出（自动生成）',
    ' */',
    '',
  ];

  const varFiles = [];
  if (fs.existsSync(varsDir)) {
    for (const file of fs.readdirSync(varsDir).filter(f => f.endsWith('.js')).sort()) {
      const content = readFile(path.join(varsDir, file));
      const isPublic = /export\s+const\s+publicGlobalVariables\s*=/.test(content);
      const isModule = /window\.moduleGlobalVariables\s*=\s*window\.moduleGlobalVariables\s*\|\|\s*\{\}/.test(content);
      const varName = file.replace(/\.js$/, '');
      varFiles.push({ fileName: file, varName, isPublic, isModule });
    }
  }

  const funcFiles = [];
  if (fs.existsSync(funcsDir)) {
    for (const file of fs.readdirSync(funcsDir).filter(f => f.endsWith('.js')).sort()) {
      const content = readFile(path.join(funcsDir, file));
      if (!content.trim()) continue;
      // publicGlobalFunctions.js 内部使用 window.xxx = ... 形式赋值，
      // 没有 ES export，靠 side-effect import 自动挂到 window。
      const isPublic = file === 'publicGlobalFunctions.js';
      const exportMatch = content.match(/export\s+const\s+(\w+)/);
      const varName = exportMatch ? exportMatch[1] : file.replace(/\.js$/, '');
      funcFiles.push({ fileName: file, varName, isPublic });
    }
  }

  lines.push('if (!window.moduleGlobalVariables) {');
  lines.push('  window.moduleGlobalVariables = {};');
  lines.push('}');
  lines.push('');

  lines.push('// 加载全局变量文件');
  for (const vf of varFiles) {
    lines.push(`import './variables/${vf.fileName}';`);
  }
  lines.push('');

  if (funcFiles.length > 0) {
    lines.push('// 加载全局函数文件');
    for (const ff of funcFiles) {
      lines.push(`import './functions/${ff.fileName}';`);
    }
    lines.push('');
  }

  if (fs.existsSync(filtersDir)) {
    lines.push('// 加载过滤器');
    for (const f of ['builtin.js', 'custom.js', 'index.js']) {
      if (fs.existsSync(path.join(filtersDir, f))) {
        lines.push(`import './filters/${f}';`);
      }
    }
    lines.push('');
  }

  const publicFile = varFiles.find(vf => vf.isPublic);
  if (publicFile) {
    lines.push(`import { ${publicFile.varName} } from './variables/${publicFile.fileName}';`);
    lines.push(`window.${publicFile.varName} = ${publicFile.varName};`);
    lines.push('');
  }

  const moduleFiles = varFiles.filter(vf => vf.isModule);
  if (moduleFiles.length > 0) {
    lines.push('window.legoGlobalVariables = window.legoGlobalVariables || {};');
    lines.push('');
    for (const mf of moduleFiles) {
      lines.push(`if (window.moduleGlobalVariables.${mf.varName}) {`);
      lines.push(`  window.legoGlobalVariables.${mf.varName} = window.moduleGlobalVariables.${mf.varName};`);
      lines.push(`}`);
    }
    lines.push('');
  }

  for (const ff of funcFiles) {
    // publicGlobalFunctions.js 没有 export，且文件内部已经 `window.xxx = ...`，
    // 不能用命名导入，也不需要再做 window 赋值；前面那条 `import './functions/...'`
    // 已经把它作为 side-effect 加载了。
    if (ff.isPublic) continue;
    lines.push(`import { ${ff.varName} } from './functions/${ff.fileName}';`);
    lines.push(`window.${ff.varName} = ${ff.varName};`);
  }
  if (funcFiles.length > 0) lines.push('');

  lines.push('export function loadGlobalVariables() {');
  lines.push('  window.globalFilesLoaded = true;');
  lines.push("  document.dispatchEvent(new Event('globalFilesLoaded'));");
  lines.push('}');
  lines.push('');
  lines.push('export function loadGlobalFunctions() {');
  lines.push('  // 全局函数已通过 import 自动加载');
  lines.push('}');

  return lines.join('\n') + '\n';
}

// ============================================================
// Step 5: znxl
// ============================================================
function convertZnxlFiles(projectDir) {
  const srcDir = path.join(projectDir, 'src');

  const znxlFiles = fs.readdirSync(srcDir)
    .filter(f => f.startsWith('znxl-inset') && f.endsWith('.js'))
    .sort();

  if (znxlFiles.length === 0) return;

  const znxlDir = path.join(srcDir, 'znxl-lib');
  ensureDir(znxlDir);

  for (const file of znxlFiles) {
    if (file === CONFIG.KEEP_ZNXL) {
      const content = readFile(path.join(srcDir, file));
      let converted = content.replace(
        /const\s*\{([^}]+)\}\s*=\s*Vue\s*;/,
        (m, imports) => `import { ${imports} } from 'vue';`
      );
      writeFile(path.join(znxlDir, 'index.js'), converted);
    } else {
      fs.copyFileSync(path.join(srcDir, file), path.join(znxlDir, file));
    }
  }

  for (const file of znxlFiles) {
    fs.unlinkSync(path.join(srcDir, file));
  }
}

// ============================================================
// Step 6: 静态资源
// ============================================================
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
    langContent = langContent.replace(/var\s+(\w+)\s*=\s*/, 'export default ');
    writeFile(path.join(destDir, 'lang.js'), langContent);
  }

  const i18nFile = path.join(resourcesDir, 'i18n.js');
  if (fs.existsSync(i18nFile)) {
    const destDir = path.join(srcDir, 'resources');
    ensureDir(destDir);
    fs.copyFileSync(i18nFile, path.join(destDir, 'i18n.js'));
  }
}

// ============================================================
// Step 7: 路由 —— 扁平 .vue
// ============================================================
function generateRoutes(projectDir, pageList) {
  const sorted = [...pageList].sort();

  // 给每条路由加上 name（与 ths-design 的 ComponentLoader.loadComponent 一致：`${pageCode}Component`）
  // 这样当 t-component 动态触发 router.addRoute({ path, name }) 时，Vue Router 会检测到同 name
  // 自动替换而不是追加，避免同 path 路由被重复注册导致组件反复挂载（"阴影叠加"症状）。
  const entries = sorted.map(name =>
    `  { path: '/${name}', name: '${name}Component', component: () => import('@/pages/${name}.vue') },`
  );
  entries.push(`  { path: '/', redirect: '/root' },`);

  const routeContent = `/**
 * 路由配置（自动生成）
 */
export const routes = [
${entries.join('\n')}
];
`;
  writeFile(path.join(projectDir, 'src', 'route.js'), routeContent);

  log(`  生成了 ${entries.length} 条路由`);
}

// ============================================================
// Step 7.5: 注入微前端框架（基座侧 bridge.js）
// ------------------------------------------------------------
// 模板源：templates/bridge.js（同步自 micro-app-template/packages/base/src/bridge.js）
// 写入：<输出>/src/bridge.js。
// main.js 中的 micro-app 启动与 bindReactiveToGlobal 调用由
// convertMainFile() 一并从 templates/main.js 渲染生成。
// ============================================================
function injectMicroAppFramework(projectDir) {
  const bridgePath = path.join(projectDir, 'src', 'bridge.js');
  writeFile(bridgePath, readTemplate('bridge.js'));
  log(`  写入 src/bridge.js（基座侧通信桥，三通道）`);
}

// ============================================================
// Step 8: 清理
// ============================================================
function cleanUp(projectDir) {
  const srcDir = path.join(projectDir, 'src');
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  const keep = new Set(['globals', 'pages', 'znxl-lib', 'resources']);

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (keep.has(entry.name)) continue;

    // 有 index.js 或 index.vue 的组件目录，如果已成功转为 pages/<name>.vue 则可删除
    const indexJs = path.join(srcDir, entry.name, 'index.js');
    const indexVue = path.join(srcDir, entry.name, 'index.vue');
    if (fs.existsSync(indexJs) || fs.existsSync(indexVue)) {
      const vueFile = path.join(srcDir, 'pages', `${entry.name}.vue`);
      if (fs.existsSync(vueFile)) {
        fs.rmSync(path.join(srcDir, entry.name), { recursive: true, force: true });
      }
    }
  }

  const oldUtils = path.join(srcDir, 'utils20250327.js');
  if (fs.existsSync(oldUtils)) fs.unlinkSync(oldUtils);
}

// ============================================================
// 运行
// ============================================================
main();
