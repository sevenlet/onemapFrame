/**
 * 跨 step 共用的常量与查找表。
 *
 * - CONFIG: 行为开关
 * - COMPONENT_NAME_MAP: ths-design 组件名 kebab → Pascal 映射（外置 JSON）
 * - UTILS_EXPORTED_NAMES: utils.js 对外导出的函数名清单，被
 *   step2（utils.js）和 step3（fixCustomVue）/ step4（publicGlobalFunctions）共用
 */
'use strict';

const path = require('path');

const CONFIG = {
  EMPTY_COMPONENTS: ['gztLeftCommonAppListEdit'],
  KEEP_ZNXL: 'znxl-inset.js',
};

// 数据源：config/component-name-map.json（约 180 项，新增组件只改 JSON 即可）
const COMPONENT_NAME_MAP = require(path.join(__dirname, '..', 'config', 'component-name-map.json'));

/**
 * utils.js 中导出的、可能被 publicGlobalFunctions.js 引用的函数名。
 * 来源：step2 末尾追加的 export 列表。
 */
const UTILS_EXPORTED_NAMES = [
  'runAnimation', 'setPageScale', 'AQI', 'convertCharacter',
  'getUrlParam', 'getQueryParam', 'guid', 'mountDynamicComponent',
  'loadAndRegisterComponentAndRoute', 'ResourceLoader', 'ComponentLoader',
  'replaceCssVariables', 'loadInitialApis', 'fetchApiData',
  'applyFilter', 'getDataValue', 'filterData',
  'watchComponentVisible', 'requestApi', 'generateCacheKey',
];

module.exports = { CONFIG, COMPONENT_NAME_MAP, UTILS_EXPORTED_NAMES };
