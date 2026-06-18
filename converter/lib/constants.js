/**
 * 跨 step 共用的常量与查找表。
 *
 * - CONFIG: 行为开关
 * - COMPONENT_NAME_MAP: ths-design 组件名 kebab → Pascal 映射（外置 JSON）
 * - UTILS_EXPORTED_NAMES: utils.js 对外导出的函数名清单，被
 *   step2（utils.js）和 step3（fixCustomVue）/ step4（publicGlobalFunctions）共用
 * - VUE_SETUP_APIS / VUE_RENDER_APIS / VUE_PREFIX_APIS:
 *   Vue 3 在不同上下文（setup / 编译输出的 render / `Vue.xxx` 前缀）中可能用到的 API。
 *   集中在这里维护，避免每个 step 各持一份长列表，新增 API 改一处即可。
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

// setup() / 普通业务代码里可能用到的 Vue 组合式 API
const VUE_SETUP_APIS = [
  'reactive', 'ref', 'computed', 'watch', 'watchEffect',
  'onMounted', 'onUnmounted', 'onBeforeMount', 'onBeforeUnmount',
  'provide', 'inject', 'toRefs', 'toRef', 'nextTick', 'isRef',
  'shallowRef', 'shallowReactive', 'triggerRef',
  'h', 'resolveComponent', 'defineAsyncComponent',
  'markRaw', 'toRaw',
];

// 编译后 render 函数里可能出现的 Vue 内部 API（@vue/compiler-sfc 输出）
const VUE_RENDER_APIS = [
  'openBlock', 'createElementBlock', 'createElementVNode', 'createVNode',
  'createTextVNode', 'createCommentVNode', 'Fragment',
  'renderList', 'withCtx', 'withDirectives', 'withModifiers',
  'normalizeClass', 'normalizeStyle', 'toDisplayString',
  'resolveComponent', 'resolveDirective',
  'vShow', 'vModelText',
  'createBlock', 'withKeys', 'mergeProps', 'guardReactiveProps',
];

// 标准格式 .vue 默认 import 的 Vue API 全集
// 排序后用于 `import { ... } from 'vue'` 与 stripVuePrefix 正则
const VUE_DEFAULT_IMPORT_APIS = [
  ...VUE_SETUP_APIS,
  'createVNode', 'createElementBlock', 'openBlock',
  'withCtx', 'withDirectives', 'withModifiers',
  'createElementVNode', 'toDisplayString',
];

// stripVuePrefix 中需要剥掉 `Vue.` 前缀的 API 全集（包含一些组件类标识）
const VUE_PREFIX_APIS = [
  'reactive', 'ref', 'computed', 'watch', 'watchEffect', 'nextTick',
  'onMounted', 'onUnmounted', 'markRaw', 'toRaw',
  'shallowRef', 'shallowReactive', 'triggerRef',
  'isRef', 'toRefs', 'toRef', 'unref', 'isReactive',
  'provide', 'inject',
  'createVNode', 'h', 'resolveComponent', 'defineAsyncComponent', 'defineComponent',
  'createElementBlock', 'openBlock', 'createBlock',
  'withCtx', 'withDirectives', 'withModifiers',
  'normalizeClass', 'normalizeStyle', 'mergeProps',
  'renderList', 'toDisplayString', 'createTextVNode', 'createCommentVNode',
  'vShow', 'KeepAlive', 'Transition', 'Suspense', 'Fragment',
];

module.exports = {
  CONFIG,
  COMPONENT_NAME_MAP,
  UTILS_EXPORTED_NAMES,
  VUE_SETUP_APIS,
  VUE_RENDER_APIS,
  VUE_DEFAULT_IMPORT_APIS,
  VUE_PREFIX_APIS,
};
