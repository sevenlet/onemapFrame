/**
 * 全局变量和函数统一导出（自动生成）
 */

if (!window.moduleGlobalVariables) {
  window.moduleGlobalVariables = {};
}

// 加载全局变量文件
import './variables/airGlobalVariables.js';
import './variables/publicGlobalVariables.js';
import './variables/samplePlotGlobalVariables.js';
import './variables/supervisoryPetitionGlobalVariables.js';
import './variables/videoMonitorDialogGlobalVariables.js';
import './variables/waterGlobalVariables.js';
import './variables/waterStationDialogGlobalVariables.js';

// 加载全局函数文件
import './functions/publicGlobalFunctions.js';

// 加载过滤器
import './filters/builtin.js';
import './filters/custom.js';
import './filters/index.js';

import { publicGlobalVariables } from './variables/publicGlobalVariables.js';
window.publicGlobalVariables = publicGlobalVariables;

window.legoGlobalVariables = window.legoGlobalVariables || {};

if (window.moduleGlobalVariables.airGlobalVariables) {
  window.legoGlobalVariables.airGlobalVariables = window.moduleGlobalVariables.airGlobalVariables;
}
if (window.moduleGlobalVariables.samplePlotGlobalVariables) {
  window.legoGlobalVariables.samplePlotGlobalVariables = window.moduleGlobalVariables.samplePlotGlobalVariables;
}
if (window.moduleGlobalVariables.supervisoryPetitionGlobalVariables) {
  window.legoGlobalVariables.supervisoryPetitionGlobalVariables = window.moduleGlobalVariables.supervisoryPetitionGlobalVariables;
}
if (window.moduleGlobalVariables.videoMonitorDialogGlobalVariables) {
  window.legoGlobalVariables.videoMonitorDialogGlobalVariables = window.moduleGlobalVariables.videoMonitorDialogGlobalVariables;
}
if (window.moduleGlobalVariables.waterGlobalVariables) {
  window.legoGlobalVariables.waterGlobalVariables = window.moduleGlobalVariables.waterGlobalVariables;
}
if (window.moduleGlobalVariables.waterStationDialogGlobalVariables) {
  window.legoGlobalVariables.waterStationDialogGlobalVariables = window.moduleGlobalVariables.waterStationDialogGlobalVariables;
}


export function loadGlobalVariables() {
  window.globalFilesLoaded = true;
  document.dispatchEvent(new Event('globalFilesLoaded'));
}

export function loadGlobalFunctions() {
  // 全局函数已通过 import 自动加载
}
