<template>
  <div id="t-l-c-DwfxZbdwglfx" class="t-l-c-DwfxZbdwglfx" ><t-chart-design v-if="state.chartShow === true" id="t-chart-design-23a5.31f214274" class="DwfxZbdwglfx-t-chart-design-0-0"  :empty-img="replaceCssVariables(filterData(state.noDataImg, componentPropBindingMap?.['t-chart-design-23a5.31f214274']['emptyImg'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tChartDesignx0x0ComputedData.cStyle" :options="replaceCssVariables(filterData(state.chartOption, componentPropBindingMap?.['t-chart-design-23a5.31f214274']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @get-chart-instance="ongetChartInstance1776306889788"></t-chart-design><t-text id="t-text-2464.16854dcf3" class="DwfxZbdwglfx-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle"></t-text><t-text v-if="state.dialogType !== '3'" id="t-text-b435.b7f4779d" class="DwfxZbdwglfx-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle"></t-text><t-text v-if="state.dialogType !== '3'" id="t-text-037d.9efd43a75" class="DwfxZbdwglfx-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle"></t-text><t-date-picker v-if="state.dialogType === '2'" id="t-date-picker-2500.d3f6be87d" class="DwfxZbdwglfx-t-date-picker-0-4"  :placeholder="tDatePickerx0x4ComputedData.placeholder" :start-placeholder="tDatePickerx0x4ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x4ComputedData.endPlaceholder" :type="tDatePickerx0x4ComputedData.type" :clearable="tDatePickerx0x4ComputedData.clearable" :range-separator="tDatePickerx0x4ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.params.time.range, componentPropBindingMap?.['t-date-picker-2500.d3f6be87d']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x4ComputedData.separator" :readonly="tDatePickerx0x4ComputedData.readonly" :editable="tDatePickerx0x4ComputedData.editable" :c-style="tDatePickerx0x4ComputedData.cStyle" @date-change="ondateChange1734256418144"></t-date-picker><t-date-picker v-if="state.dialogType === '3'" id="t-date-picker-f695.ed3e029f5" class="DwfxZbdwglfx-t-date-picker-0-5"  :placeholder="tDatePickerx0x5ComputedData.placeholder" :start-placeholder="tDatePickerx0x5ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x5ComputedData.endPlaceholder" :type="tDatePickerx0x5ComputedData.type" :clearable="tDatePickerx0x5ComputedData.clearable" :range-separator="tDatePickerx0x5ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.params.time.range, componentPropBindingMap?.['t-date-picker-f695.ed3e029f5']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x5ComputedData.separator" :readonly="tDatePickerx0x5ComputedData.readonly" :editable="tDatePickerx0x5ComputedData.editable" :c-style="tDatePickerx0x5ComputedData.cStyle" @date-change="ondateChange1735351876336_0_0"></t-date-picker><t-date-picker v-if="state.dialogType === '1'" id="t-date-picker-0382.37c8bd71f" class="DwfxZbdwglfx-t-date-picker-0-6"  :placeholder="tDatePickerx0x6ComputedData.placeholder" :start-placeholder="tDatePickerx0x6ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x6ComputedData.endPlaceholder" :type="tDatePickerx0x6ComputedData.type" :clearable="tDatePickerx0x6ComputedData.clearable" :range-separator="tDatePickerx0x6ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.params.time.range, componentPropBindingMap?.['t-date-picker-0382.37c8bd71f']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x6ComputedData.separator" :readonly="tDatePickerx0x6ComputedData.readonly" :editable="tDatePickerx0x6ComputedData.editable" :c-style="tDatePickerx0x6ComputedData.cStyle" @date-change="ondateChange1735351877507_0_0"></t-date-picker><t-select v-if="state.dialogType !== '3'" id="t-select-273e.e0ea8cd5a" class="DwfxZbdwglfx-t-select-0-7"  :active-value="replaceCssVariables(filterData(state.params.compare, componentPropBindingMap?.['t-select-273e.e0ea8cd5a']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.options.compare, componentPropBindingMap?.['t-select-273e.e0ea8cd5a']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x7ComputedData.alias" :multiple="tSelectx0x7ComputedData.multiple" :placeholder="tSelectx0x7ComputedData.placeholder" :clearable="tSelectx0x7ComputedData.clearable" :disabled="tSelectx0x7ComputedData.disabled" :collapse-tags="tSelectx0x7ComputedData.collapseTags" :name="tSelectx0x7ComputedData.name" :autocomplete="tSelectx0x7ComputedData.autocomplete" :filterable="tSelectx0x7ComputedData.filterable" :no-match-text="tSelectx0x7ComputedData.no-match-text" :no-data-text="tSelectx0x7ComputedData.no-data-text" :c-style="tSelectx0x7ComputedData.cStyle" :multiple-limit="tSelectx0x7ComputedData.multipleLimit" @change="onchange1740099820123_0_0"></t-select><t-select id="t-select-4a2d.853a7c2fe" class="DwfxZbdwglfx-t-select-0-8"  :active-value="replaceCssVariables(filterData(state.params.leftMonitor, componentPropBindingMap?.['t-select-4a2d.853a7c2fe']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.options.leftMonitor, componentPropBindingMap?.['t-select-4a2d.853a7c2fe']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x8ComputedData.alias" :multiple="tSelectx0x8ComputedData.multiple" :placeholder="tSelectx0x8ComputedData.placeholder" :clearable="tSelectx0x8ComputedData.clearable" :disabled="tSelectx0x8ComputedData.disabled" :collapse-tags="tSelectx0x8ComputedData.collapseTags" :name="tSelectx0x8ComputedData.name" :autocomplete="tSelectx0x8ComputedData.autocomplete" :filterable="tSelectx0x8ComputedData.filterable" :no-match-text="tSelectx0x8ComputedData.no-match-text" :no-data-text="tSelectx0x8ComputedData.no-data-text" :c-style="tSelectx0x8ComputedData.cStyle" :multiple-limit="tSelectx0x8ComputedData.multipleLimit" @change="onchange1740045317584"></t-select><t-select v-if="state.dialogType !== '3'" id="t-select-bb74.0169a82ca" class="DwfxZbdwglfx-t-select-0-9"  :active-value="replaceCssVariables(filterData(state.params.rightMonitor, componentPropBindingMap?.['t-select-bb74.0169a82ca']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.options.rightMonitor, componentPropBindingMap?.['t-select-bb74.0169a82ca']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x9ComputedData.alias" :multiple="tSelectx0x9ComputedData.multiple" :placeholder="tSelectx0x9ComputedData.placeholder" :clearable="tSelectx0x9ComputedData.clearable" :disabled="tSelectx0x9ComputedData.disabled" :collapse-tags="tSelectx0x9ComputedData.collapseTags" :name="tSelectx0x9ComputedData.name" :autocomplete="tSelectx0x9ComputedData.autocomplete" :filterable="tSelectx0x9ComputedData.filterable" :no-match-text="tSelectx0x9ComputedData.no-match-text" :no-data-text="tSelectx0x9ComputedData.no-data-text" :c-style="tSelectx0x9ComputedData.cStyle" :multiple-limit="tSelectx0x9ComputedData.multipleLimit" @change="onchange1776235485240_0_0"></t-select></div>
</template>

<script>
import _ from 'lodash';
import {
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
import { TChartDesign, TDatePicker, TSelect, TText } from '@ths/design';

export default {
  components: {
    TChartDesign,
    TDatePicker,
    TSelect,
    TText,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-chart-design-23a5.31f214274":{"attributeName":"tChartDesignx0x0","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-text-2464.16854dcf3":{"attributeName":"tTextx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-b435.b7f4779d":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-037d.9efd43a75":{"attributeName":"tTextx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-2500.d3f6be87d":{"attributeName":"tDatePickerx0x4","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-f695.ed3e029f5":{"attributeName":"tDatePickerx0x5","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-0382.37c8bd71f":{"attributeName":"tDatePickerx0x6","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-273e.e0ea8cd5a":{"attributeName":"tSelectx0x7","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"collapseTags":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]},"multipleLimit":{"filters":[]}},"t-select-4a2d.853a7c2fe":{"attributeName":"tSelectx0x8","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"collapseTags":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]},"multipleLimit":{"filters":[]}},"t-select-bb74.0169a82ca":{"attributeName":"tSelectx0x9","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"collapseTags":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]},"multipleLimit":{"filters":[]}}};
// 页面内注入全局变量和事件
const rootData = inject('root');
const global = reactive({
...toRefs(rootData)
});
// 路由
const route = useRoute();
// 创建 DOM 引用

// 当前页面使用的变量
const state = reactive({
   screenSize: "",
   myChart: {},
   chartShow: true,
   color: {"monitor":["rgba(46,199,201,1)","rgba(182,162,222,1)","rgba(90,177,239,1)","rgba(255,185,128,1)","rgba(216,122,128,1)","rgba(141,152,179,1)","rgba(229,207,13,1)","rgba(151,181,82,1)","rgba(149,112,109,1)","rgba(220,105,170,1)"],"compare":["rgba(7,162,164,1)","rgba(154,127,209,1)","rgba(88,141,213,1)","rgba(245,153,78,1)","rgba(192,80,80,1)","rgba(89,103,140,1)","rgba(201,171,0,1)","rgba(126,176,10,1)","rgba(111,85,83,1)","rgba(193,64,137,1)"]},
   dialogType: "",
   noDataImg: "",
   params: {"time":{"start":"","end":"","range":[]},"compare":[],"monitor":[],"interfaceId":"","pointcode":"","leftMonitor":[],"rightMonitor":[]},
   options: {"monitor":[],"compare":[],"leftMonitor":[],"rightMonitor":[]},
   chartResData: [],
   chartOption: {},
   weatherIndexSelectArr: [],
   weatherIndexList: [{"label":"风场","name":"风场"},{"label":"温度","name":"温度"},{"label":"风速","name":"风速"},{"label":"气压","name":"气压"}],
});
// 选中的图表主题
const activeChartTheme = computed(() => {
const activeTheme = _.cloneDeep(themes.find((item) => item.name === global.activeTheme));
return activeTheme.chartVariables;
});
// 选中的图表主题的options
const activeChartThemeOptions = computed(() => {
if (activeChartTheme.value) {
// 公用的主题配置
const themeConfig = {
backgroundColor: activeChartTheme.value.backgroundColor, // 背景色
color: activeChartTheme.value.color, // 系列颜色
title: activeChartTheme.value.title, // 标题
legend: activeChartTheme.value.legend, // 图例
tooltip: activeChartTheme.value.tooltip, // 提示框
xAxis: activeChartTheme.value.categoryAxis, // x轴
yAxis: activeChartTheme.value.valueAxis, // y轴
};
return themeConfig;
} else {
return {};
}
});
// 当前页面中组件的属性
const componentState = reactive({
tChartDesignx0x0: {
defaultStyle: {
            default: {"height":"calc(100% - 80px)","width":"100%","position":"unset","left":"0px","top":"65px"},
            
            },
 default: { 
 
emptyImg:"",
cStyle:{"wrapper":{"default":{"height":"calc(100% - 80px)","width":"100%","position":"unset","left":"0px","top":"65px"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"auto","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"0px","top":"17px","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
label:"监测时间",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"0px","top":"17px","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","animationName":"","textAlign":"right"}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"25px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"579px","top":"8px","fontSize":"var(--t-text-size-normal)","lineHeight":"32px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"VS",
editable:false,
cStyle:{"wrapper":{"default":{"width":"25px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"579px","top":"8px","fontSize":"var(--t-text-size-normal)","lineHeight":"32px","animationName":"","textAlign":"center"}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"24px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"756px","top":"8px","fontSize":"var(--t-text-size-normal)","lineHeight":"32px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"VS",
editable:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"756px","top":"8px","fontSize":"var(--t-text-size-normal)","lineHeight":"32px","animationName":"","textAlign":"center"}}}, 
 },
},
tDatePickerx0x4: {
defaultStyle: {
            default: {"width":"330px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerangehour",
clearable:false,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"330px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","lineHeight":"20px"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","lineHeight":"20px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"30px"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--skin-font-color)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--skin-font-color)"}},"operatorArrow":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--skin-font-color)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--skin-font-color)","borderLeft":"1px solid var(--skin-font-color)","borderTop":"1px solid var(--skin-font-color)","borderRight":"1px solid var(--skin-font-color)","borderBottom":"1px solid var(--skin-font-color)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--skin-font-color)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tDatePickerx0x5: {
defaultStyle: {
            default: {"width":"330px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"monthrange",
clearable:false,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"330px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","lineHeight":"20px"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","lineHeight":"20px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"30px"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--skin-font-color)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--skin-font-color)"}},"operatorArrow":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--skin-font-color)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--skin-font-color)","borderLeft":"1px solid var(--skin-font-color)","borderTop":"1px solid var(--skin-font-color)","borderRight":"1px solid var(--skin-font-color)","borderBottom":"1px solid var(--skin-font-color)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--skin-font-color)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tDatePickerx0x6: {
defaultStyle: {
            default: {"width":"330px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"daterange",
clearable:false,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"330px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","lineHeight":"20px"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","lineHeight":"20px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"30px"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--skin-font-color)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--skin-font-color)"}},"operatorArrow":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--skin-font-color)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--skin-font-color)","borderLeft":"1px solid var(--skin-font-color)","borderTop":"1px solid var(--skin-font-color)","borderRight":"1px solid var(--skin-font-color)","borderBottom":"1px solid var(--skin-font-color)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--skin-font-color)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tSelectx0x7: {
defaultStyle: {
            default: {"width":"136px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:[],
options:[],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:true,
placeholder:"请选择",
clearable:true,
disabled:false,
collapseTags:true,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"136px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"tag":{"default":{"fontSize":"var(--business-text-size-18)","lineHeight":"var(--business-text-size-18)","height":"var(--business-text-size-18)"}}},
multipleLimit:4, 
 },
},
tSelectx0x8: {
defaultStyle: {
            default: {"width":"199px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","position":"unset","left":"420px","top":"5px"},
            
            },
 default: { 
 
activeValue:[],
options:[],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:true,
placeholder:"请选择",
clearable:true,
disabled:false,
collapseTags:true,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"199px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","position":"unset","left":"420px","top":"5px"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","width":"90%"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"tag":{"default":{"fontSize":"var(--business-text-size-18)","lineHeight":"var(--business-text-size-18)","height":"var(--business-text-size-18)"}}},
multipleLimit:4, 
 },
},
tSelectx0x9: {
defaultStyle: {
            default: {"width":"136px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:[],
options:[],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:true,
placeholder:"请选择",
clearable:true,
disabled:false,
collapseTags:true,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"136px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"tag":{"default":{"fontSize":"var(--business-text-size-18)","lineHeight":"var(--business-text-size-18)","height":"var(--business-text-size-18)"}}},
multipleLimit:4, 
 },
},
});
const handleChartSeries = () => {

  
    /* ===========================初始化数据开始=========================== */
    // 对比指标数据
    const compareData = state.options.compare.reduce((acc, item) => {
      acc[item.value] = [];
      return acc;
    }, {});
    // 对比指标数据-单位映射
    const unitMap = {};
    state.options.compare.forEach((item) => {
      unitMap[item.value] = item.unit;
    });
    // 边距数组，有几个y轴，边距设置多少，最多4个
    const padding = ["3%", "6%", "16%", "26%", "34%"];
    // x轴数据
    const xAxisData = [];
    // y轴基础配置
    const yAxisBaseOptions = {
      type: "value",
      axisLabel: {
        color: "var(--skin-font-color-80)",
        fontSize: 'var(--business-text-size-12)',
      },
      axisLine: {
        lineStyle: {
          type: "solid",
          color: "var(--skin-font-color-40)",
        },
      },
      nameTextStyle: {
        color: "var(--skin-font-color-60)",
        align: "right",
        fontSize: 'var(--business-text-size-12)',
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "var(--business--chart-split-line)",
        },
      },
    };
    // 清空系列、图例、y轴数据
    state.chartOption.series = [];
    state.chartOption.legend.data = [];
    state.chartOption.yAxis = [];
    
    if (!state.chartResData.length) {
      return;
    }
    /* ===========================初始化数据结束=========================== */
    /* ===========================处理数据开始=========================== */
    // 左右边距
    state.chartOption.grid.right = padding[state.params.compare.length];
    state.chartOption.grid.left = padding[state.params.monitor.length ? 1 : 0];
    // 处理x轴、对比指标数据
    state.chartResData.forEach((resItem) => {
      // 对比指标数据
      Object.keys(compareData).forEach((key) => {
        compareData[key].push({
          value: resItem[key],
          unit: unitMap[key],
          tooltipXAxisLabel: resItem.MONITOR_TIME,
        });
      });
    
      // x轴-时间
      xAxisData.push(handleNoVal(resItem.MONITOR_TIME));
    });
    
    // x轴数据赋值
    state.chartOption.xAxis.data = xAxisData;
    
    // 处理监测指标系列、图例数据
    if (state.params.leftMonitor?.length || state.params.rightMonitor?.length) {
      debugger
      state.chartOption.yAxis.push({
        ...yAxisBaseOptions,
        position: "left",
        name: state.params.leftMonitor[0] === 'W01001' ? '监测值' :"监测值\n（mg/L）",
        offset: 0,
        nameTextStyle: {
          padding: [0, -20, 0, 0],
          ...yAxisBaseOptions.nameTextStyle,
        },
      });
    }
    
    if (state.params.leftMonitor?.length) {
      state.options.monitor
        .filter((item) =>
          state.params.leftMonitor.some((value) => item.value === value),
        )
        .forEach((selectItem) => {
          state.chartOption.series.push({
            type: "line",
            yAxisIndex: 0,
            smooth: true,
            symbolSize: 1,
            symbol: "circle",
            name: selectItem.label,
            color: selectItem.color,
            data: state.chartResData.map((resItem) => ({
              value: resItem[selectItem.value],
              unit: selectItem.unit,
              tooltipXAxisLabel: resItem.MONITOR_TIME,
            })),
            _isLeftAxis: true,
          });
    
          state.chartOption.legend.data.push({
            name: selectItem.label,
          });
        });
    }
    
    if (state.params.rightMonitor?.length) {
      state.options.monitor
        .filter((item) =>
          state.params.rightMonitor.some((value) => item.value === value),
        )
        .forEach((selectItem) => {
          state.chartOption.series.push({
            type: "bar",
            yAxisIndex: 0,
            name: selectItem.label,
            color: selectItem.color,
            data: state.chartResData.map((resItem) => ({
              value: resItem[selectItem.value],
              unit: selectItem.unit,
              tooltipXAxisLabel: resItem.MONITOR_TIME,
            })),
            _isLeftAxis: true,
          });
    
          state.chartOption.legend.data.push({
            name: selectItem.label,
          });
        });
    }
    // 瞬时总流量、水库水位、降雨量、气温
    if (state.params.compare.length) {
      // 找到compare里键对应的所有对象
      state.options.compare
        .filter((item) =>
          state.params.compare.some((value) => item.value === value),
        )
        .forEach((item, index) => {
          // 对比指标
          state.chartOption.series.push({
            type: "line",
            barWidth: "20px",
            yAxisIndex: state.chartOption.yAxis.length,
            symbol: "none",
            itemStyle: {
              color: `rgba(${item.color},
                    1)`,
            },
            lineStyle: {
              width: 0,
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: `rgba(${item.color},
                                1)`,
                  },
                  {
                    offset: 1,
                    color: `rgba(${item.color},
                                0)`,
                  },
                ],
                global: false,
              },
            },
            name: item.label,
            data: compareData[item.value] || [],
          });
    
          // y轴
          state.chartOption.yAxis.push({
            ...yAxisBaseOptions,
            name: `${item.label}\n（${item.unit}）`,
            position: "right",
            offset: index * 80,
            nameTextStyle: {
              padding: [0, 0, 0, -20],
              ...yAxisBaseOptions.nameTextStyle,
            },
          });
    
          // 图例
          state.chartOption.legend.data.push({
            icon: "roundRect",
            name: item.label,
          });
        });
    }
    
    const obj = checkTimeRange(
      state.dialogType,
      state.params.time.range,
      xAxisData.length,
    );
    
    // 处理x轴显示标签间隔、及重复值
    if (obj.flag) {
      state.chartOption.xAxis.axisLabel.interval = 0;
      state.chartOption.xAxis.axisLabel.formatter = (value, index) => {
        let dayValue;
        switch (state.dialogType) {
          case "1":
            // 自动天
            dayValue = dateFormat(value.replace("日", ""), "yyyy-MM");
            break;
          case "2":
            // 自动小时
            dayValue = dateFormat(`${value.replace("时", "")}: 00`, "MM-dd");
            break;
          case "3":
            // 手工
            dayValue = dateFormat(value, "yyyy");
            break;
          default:
            dayValue = value;
            break;
        }
        return index % obj.num === 0 ? dayValue : "";
      };
      state.chartOption.xAxis.axisTick.interval = (index) => {
        return index % obj.num === 0;
      };
    } else {
      state.chartOption.xAxis.axisLabel.interval = "auto";
      state.chartOption.xAxis.axisLabel.formatter = (value) => value;
      state.chartOption.xAxis.axisTick.interval = "auto";
    }
    /* ===========================处理数据结束=========================== */
    state.chartShow = false;
    nextTick(() => (state.chartShow = true));
    console.log("option", state.chartOption);
    
    
  
};
const handleTimeSelect = (times) => {
if (times.length) {
  state.params.time.range = times
  state.params.time.start = times[0] || '';
  state.params.time.end = times[1] || '';
} else {
  state.params.time.range = []
  state.params.time.start = '';
  state.params.time.end  = '';
}

// getData();
apiRegistry.getData.request();
};
const initPage = () => {
// 处理参数
state.params.pointcode = global.businessDialog.dialogParmas.pointCode;

if (global.businessDialog.dialogParmas?.dialogType === 'autoDay') {
  state.params.interfaceId = "88c6185c72e605d9dc2d1b9cbbe4f0fa";
  state.dialogType = '1'
} else if (global.businessDialog.dialogParmas?.dialogType === 'autoHour') {
  state.params.interfaceId = "90a8e906b6f3d8c5218fd73cb91a5504";
  state.dialogType = '2'
} else {
  state.params.interfaceId = "f210282aba7a8bc199e0a022c63af6d5";
  state.dialogType = '3'
}

// echarts图配置
setOptions();

// 设置暂无数据图片
setNoData();

// 获取时间下拉数据（用结束时间向前推指定格式的时间）
getTimeValue(global.businessDialog.dialogParmas.monitorTime, state.dialogType);

const initData = async () => {
  if(state.dialogType === '3'){
    await apiRegistry.getMonitorOptionsHandmade.request();
  }else{
    await apiRegistry.getMonitorOptionsAuto.request();
  }
  // 手工不需要气象数据
  if (state.dialogType !== '3') {
    await apiRegistry.getCompareOptions.request();
  }
  apiRegistry.getData.request();
}

// 获取数据
initData();
};
const setOptions = () => {

  
    // 初始化配置
    state["chartOption"] = {
      toolbox: {
        show: false,
        top: 5,
        right: 35,
        iconStyle: {
          color: "var(--business-white)",
        },
        // feature: {
        //   magicType: {
        //     type: ["line", "bar"],
        //     title: {
        //       line: '转为折线图',
        //       bar: '转为柱状图'
        //     }
        //   },
        // }
        feature: {
          magicType: {
            type: ["line", "bar"],
            title: { line: '转为折线图', bar: '转为柱状图' },
            // 新增：禁用默认切换行为
            iconStyle: {
              borderColor: 'var(--business-white)'
            }
          }
        }
      },
      tooltip: {
        trigger: "axis",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderColor: "var(--skin-font-color-60)",
        formatter: (value) => handleTooltipFormatter(value),
        textStyle: {
          color: "var(--business--chart-tooltip-font)",
        },
      },
      grid: {
        top: "14%",
        left: "3%",
        right: "3%",
        bottom: "14%",
      },
      // "dataZoom": [
      //   {
      //     "type": "slider",
      //     "backgroundColor": getCssVariable('--business-show-bg30'),
      //     "borderColor": getCssVariable('--business-show-bg30'),
      //     "borderRadius": 0,
      //     "showDetail": false,
      //     "showDataShadow": false,
      //     "zoomLock": true,
      //     "height": 7,
      //     "end": 50,
      //     "brushSelect": false,
      //     "bottom": "0%",
      //     "brushStyle": {
      //       "color": "#000"
      //     },
      //     "fillerColor": getCssVariable('--business-btn-default'),
      //     "handleIcon": "none",
      //     "handleStyle": {
      //       "color": "#2D955A",
      //       "borderColor": "#D1D5D9",
      //       "borderCap": "round"
      //     }
      //   }
      // ],
      dataZoom: [
        {
          show: true,
          realtime: true,
          start: 50,
          end: 100,
          xAxisIndex: [0],
          bottom: 10,
        },
        {
          type: "inside",
          realtime: true,
          start: 50,
          end: 100,
          xAxisIndex: [0],
        },
      ],
      legend: {
        show: true,
        itemWidth: 16,
        itemHeight: 16,
        textStyle: {
          color: "var(--skin-font-color-80)",
          fontSize: 'var(--business-text-size-14)',
          height: 10,
          rich: {
            a: {
              verticalAlign: "center",
            },
          },
        },
        data: [],
        type: "scroll",
        pageTextStyle: {
          color: "var(--business-white)",
        },
      },
      xAxis: {
        axisLabel: {
          color: "var(--skin-font-color-80)",
          fontSize: 'var(--business-text-size-12)',
        },
        axisLine: {
          lineStyle: {
            type: "solid",
            color: "var(--skin-font-color-40)",
          },
        },
        axisLine: {
          lineStyle: {
            type: "solid",
            color: "var(--skin-font-color-40)",
          },
        },
        axisTick: {
          show: true,
          lineStyle: {
            // color: "var(--skin-font-color-40)",
            color: "#a4262c",
          },
        },
        nameTextStyle: {
          color: "var(--skin-font-color-60)",
          fontSize: 'var(--business-text-size-12)',
        },
        data: [],
      },
      yAxis: [],
      color: ["red", "green", "yellow", "purple", "blue"],
      series: [],
    };
    
    
  
};
const getTimeValue = (date,type) => {
if (type === '2') {
  // 小时数据格式不全，格式化错误，需要补上分秒
  date = `${date}:00:00`
}

// 时间格式
const typeObj = [
  {
    timeType: 'day',
    formatType: 'yyyy-MM-dd'
  },
  {
    timeType: 'hour',
    formatType: 'yyyy-MM-dd HH'
  },
  {
    timeType: 'month',
    formatType: 'yyyy-MM'
  }
]

// 结束时间
const endTime = dateFormat(date, typeObj[Number(type) - 1].formatType);
// 开始时间
const startTime = dateFormat(getPrevTime(date, typeObj[Number(type) - 1].timeType), typeObj[Number(type) - 1].formatType);

// 赋值参数
state.params.time.range = [startTime || '', endTime || ''];
state.params.time.start = startTime || '';
state.params.time.end = endTime || '';

};
const handleMonitorSelect = (type,data) => {
if (type === 'left') {
  state.params.leftMonitor = data ? data.split(',') : []
} else if (type === 'right') {
  state.params.rightMonitor = data ? data.split(',') : []
}
if (state.dialogType !== '3') {
  // 自动
  handleChartSeries();
} else {
  // 手工
  handleChartSeriesHandmade();
}

};
const handleCompareSelect = (data) => {
state.params.compare = data ? data.split(',') : []

handleChartSeries()
};
const setNoData = () => {
// 设置暂无数据图标
state.noDataImg = getCssVariable('--business-no-data-img');
};
const handleCharFormat = (optionString) => {
/**
  * @description: 替换一段字符串中所有污染物为正确格式
  * @param optionString 要替换的字符串
  * @return 替换完的字符串
  */
if (!optionString) return '';
// 从公共方法里拿到下标特殊字符（后续需要的再补充）
const zreoSub = convertCharacter('下标')[0].split(' ')[0] || '0';
const oneSub = convertCharacter('下标')[0].split(' ')[1] || '1';
const twoSub = convertCharacter('下标')[0].split(' ')[2] || '2';
const threeSub = convertCharacter('下标')[0].split(' ')[3] || '3';
const fiveSub = convertCharacter('下标')[0].split(' ')[5] || '5';
// 污染物对应关系（缺少的继续补充）
const POLLUTION_CHARTS_ALL = [
  {
    name: ['O3', 'o3'],
    html: 'O' + threeSub,
  },
  {
    name: ['PM10', 'pm10'],
    html: 'PM' + oneSub + zreoSub,
  },
  {
    name: ['PM25', 'PM2_5', 'PM2.5', 'pm25', 'pm2_5', 'pm25'],
    html: 'PM' + twoSub + '.' + fiveSub,
  },
  {
    name: ['SO2', 'so2'],
    html: 'SO' + twoSub,
  },
  {
    name: ['CO2', 'co2'],
    html: 'CO' + twoSub,
  },
  {
    name: ['CODMN', 'codmn'],
    html: 'CODmn',
  },
  {
    name: ['VOCS', 'vocs'],
    html: 'VOCs',
  },
  {
    name: ['NO', 'no'],
    html: 'NO',
  },
  {
    name: ['NO2', 'no2'],
    html: 'NO' + twoSub,
  },
  {
    name: ['NH3', 'nh3'],
    html: 'NH' + threeSub,
  },
  {
    name: ['NOX', 'nox'],
    html: 'NOx',
  },
  {
    name: ['PH', 'ph'],
    html: 'pH',
  },
];
let curString = optionString;
POLLUTION_CHARTS_ALL.forEach((item) => {
  item.name.forEach((name) => {
    curString = curString.replace(name, item.html);
  });
});
return curString;
};
const checkTimeRange = (dateType,timeRange,dataLength) => {
const parseDate = (dateStr) => {
  let date = new Date(dateStr);
  if (isNaN(date)) {
    throw new Error(`Invalid date format: ${dateStr}`);
  }
  return date;
}

const diffInHours = (d1, d2) => {
  return Math.abs((d2 - d1) / (1000 * 60 * 60));
}

const diffInDays = (d1, d2) => {
  return Math.abs((d2 - d1) / (1000 * 60 * 60 * 24));
}

const diffInMonths = (d1, d2) => {
  const y1 = d1.getFullYear();
  const m1 = d1.getMonth();
  const y2 = d2.getFullYear();
  const m2 = d2.getMonth();
  return Math.abs((y2 * 12 + m2) - (y1 * 12 + m1));
}

const [startDateStr, endDateStr] = timeRange;
let startDate, endDate;

switch (dateType) {
  case '1':
    // 自动天，时间差大于两周，数据大于14条
    startDate = parseDate(startDateStr);
    endDate = parseDate(endDateStr);
    return {
      flag: diffInDays(startDate, endDate) > 14 && dataLength > 14,
      num: 14
    };
  case '2':
    // 自动小时，时间差大于两天，数据大于48条
    startDate = parseDate(`${startDateStr}:00:00`);
    endDate = parseDate(`${endDateStr}:00:00`);
    return {
      flag: diffInHours(startDate, endDate) > 48 && dataLength > 48,
      num: 48
    };
  case '3':
    // 手工，时间差大于两年，数据大于24条
    startDate = parseDate(startDateStr);
    endDate = new Date(endDateStr.slice(0, 4), endDateStr.slice(5, 7) - 1 + (endDateStr.slice(7) ? 1 : 0), 0);
    endDate.setDate(endDate.getDate() - endDate.getDate() % endDate.getDate());
    return {
      flag: diffInMonths(startDate, endDate) > 23 && dataLength > 24,
      num: 24
    };
  default:
    return {
      flag: false,
      num: 0
    };
}
};
const filterMonitorData = () => {
// state?.params?.monitor?.forEach(item =>{
//   state.chartResData = state.chartResData.filter( i => i[item])
//   console.log('sstate?.params?.monitor?.',state?.params?.monitor,state.chartResData)
// })
};
const handleCheck = (data) => {

// 获取两个数组的差集
function diffArray(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let diff = [...arr1.filter(x => !set2.has(x)), ...arr2.filter(x => !set1.has(x))];
  return diff;
}

// 叠加或取消的气象指标
const indexValue = diffArray(state.weatherIndexSelectArr, data)[0];
// 发送socket消息: 地图删除专题
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'showWeather', // 消息名称
  data: {
    type: indexValue,
    // 当前值大于上次选中值：显示选中的指标，反之隐藏
    visible: state.weatherIndexSelectArr.length < data.length,
  },
});

// 更新选中值数据
state.weatherIndexSelectArr = data;



};
const handleChartInstance = (chartInstance) => {
chartInstance.on('magictypechanged', function(params) {
  debugger  
  const newType = params.newType;
  
  state.chartOption.series.forEach(series => {
    if (series._isLeftAxis) {
      series.type = newType;
      
      if (newType === 'line') {
        series.smooth = true;
        series.symbolSize = 1;
        series.symbol = 'circle';
        delete series.barWidth;
      } else if (newType === 'bar') {
        delete series.smooth;
        delete series.symbolSize;
        delete series.symbol;
        series.barWidth = '20px';
      }
    }
  });
  
  chartInstance.setOption(state.chartOption, { notMerge: true });
});
};
const handleChartSeriesHandmade = () => {

  
  /* ===========================初始化数据开始=========================== */
  // 对比指标数据
  const compareData = state.options.compare.reduce((acc, item) => {
    acc[item.value
    ] = [];
    return acc;
  },
    {});
  // 对比指标数据-单位映射
  const unitMap = {};
  state.options.compare.forEach(item => {
    unitMap[item.value
    ] = item.unit;
  });
  // 边距数组，有几个y轴，边距设置多少，最多4个
  const padding = ['3%', '6%', '16%', '26%', '34%'
  ]
  // x轴数据
  const xAxisData = [];
  // y轴基础配置
  const yAxisBaseOptions = {
    "type": "value",
    "axisLabel": {
      "color": "var(--skin-font-color-80)",
      "fontSize": 'var(--business-text-size-12)'
    },
    "axisLine": {
      "lineStyle": {
        "type": "solid",
        "color": "var(--skin-font-color-40)"
      }
    },
    "nameTextStyle": {
      "color": "var(--skin-font-color-60)",
      "align": "right",
      "fontSize": 'var(--business-text-size-12)'
    },
    "splitLine": {
      "lineStyle": {
        "type": "dashed",
        "color": "var(--business--chart-split-line)"
      }
    }
  }
  // 清空系列、图例、y轴数据
  state.chartOption.series = [];
  state.chartOption.legend.data = [];
  state.chartOption.yAxis = []
  
  if (!state.chartResData.length) {
    return;
  }
  /* ===========================初始化数据结束=========================== */
  /* ===========================处理数据开始=========================== */
  // 左右边距
  state.chartOption.grid.right = padding[state.params.compare.length
  ]
  state.chartOption.grid.left = padding[state.params.leftMonitor.length ? 1 : 0
  ]
  // 处理x轴、对比指标数据
  state.chartResData.forEach((resItem) => {
    // 对比指标数据
    Object.keys(compareData).forEach(key => {
      compareData[key
      ].push({
        value: resItem[key
        ],
        unit: unitMap[key
        ],
        tooltipXAxisLabel: resItem.MONITOR_TIME,
      })
    })
  
    // x轴-时间
    xAxisData.push(handleNoVal(resItem.MONITOR_TIME));
  });
  
  // x轴数据赋值
  state.chartOption.xAxis.data = xAxisData;
  
  // 处理监测指标系列、图例数据
  if (state.params.leftMonitor.length) {
  
    // 创建统一的监测值Y轴（左侧）
    state.chartOption.yAxis.push({
      ...yAxisBaseOptions,
      "position": 'left',
      name: state.params.leftMonitor[0] === 'W01001' ? '监测值' : "监测值\n（mg/L）",
      "offset": 0,
      "nameTextStyle": {
        padding: [0, -20, 0, 0],
        ...yAxisBaseOptions.nameTextStyle
      }
    })
    // 找到monitor里键对应的所有对象
    state.options.monitor
      .filter(item => state.params.leftMonitor
        .some(value => item.value === value))
      .forEach((selectItem) => {
        // y轴
        // state.chartOption.yAxis.push({
        //   ...yAxisBaseOptions,
        //       "position": 'left',
        //       "name": `${selectItem.label
        //       } ${selectItem.unit ? `\n（${selectItem.unit
        //           }）` : ''
        //       }`,
        //       "offset": index * 80,
        //       "nameTextStyle": {
        //     padding: [
        //               0,
        //               -20,
        //               0,
        //               0
        //           ],
        //     ...yAxisBaseOptions.nameTextStyle
        //       }
        //   })
  
        // 监测指标
        // state.chartOption.series.push({
        //       "type": "line",
        //       "barWidth": '20px',
        //       "yAxisIndex": 0,
        //       "smooth": true,
        //       "symbolSize": 1,
        //       "symbol": "circle",
        //       "name": selectItem.label,
        //       "yAxisIndex": index,
        //       "color": selectItem.color,
        //       "data": state.chartResData.map((resItem) => ({
        //     value: resItem[selectItem.value
        //           ],
        //     unit: selectItem.unit,
        //     tooltipXAxisLabel: resItem.MONITOR_TIME,
        //       })),
        //   });
        state.chartOption.series.push({
          "type": "line",
          "yAxisIndex": 0,
          "smooth": true,
          "symbolSize": 1,
          "symbol": "circle",
          "name": selectItem.label,
          "color": selectItem.color,
          "data": state.chartResData.map((resItem) => ({
            value: resItem[selectItem.value],
            unit: selectItem.unit,
            tooltipXAxisLabel: resItem.MONITOR_TIME,
          })),
        });
  
        // 图例
        state.chartOption.legend.data.push({
          name: selectItem.label,
        });
      });
  }
  // 瞬时总流量、水库水位、降雨量、气温
  if (state.params.compare.length) {
    // 找到compare里键对应的所有对象
    state.options.compare
      .filter(item => state.params.compare
        .some(value => item.value === value))
      .forEach((item, index) => {
        // 对比指标
        state.chartOption.series.push({
          "type": "line",
          "barWidth": '20px',
          "yAxisIndex": state.chartOption.yAxis.length,
          "symbol": "none",
          "itemStyle": {
            "color": `rgba(${item.color
              },
                    1)`
          },
          "lineStyle": {
            "width": 0
          },
          "areaStyle": {
            "color": {
              "type": "linear",
              "x": 0,
              "y": 0,
              "x2": 0,
              "y2": 1,
              "colorStops": [
                {
                  "offset": 0,
                  "color": `rgba(${item.color
                    },
                                1)`
                },
                {
                  "offset": 1,
                  "color": `rgba(${item.color
                    },
                                0)`
                }
              ],
              "global": false
            }
          },
          "name": item.label,
          "data": compareData[item.value
          ] || [],
        })
  
        // y轴
        state.chartOption.yAxis.push({
          ...yAxisBaseOptions,
          "name": `${item.label
            }\n（${item.unit
            }）`,
          "position": 'right',
          "offset": index * 80,
          "nameTextStyle": {
            padding: [
              0,
              0,
              0,
              -20
            ],
            ...yAxisBaseOptions.nameTextStyle
          }
        })
  
        // 图例
        state.chartOption.legend.data.push({
          icon: 'roundRect',
          name: item.label,
        })
      })
  }
  
  const obj = checkTimeRange(state.dialogType, state.params.time.range, xAxisData.length)
  
  // 处理x轴显示标签间隔、及重复值
  if (obj.flag) {
    state.chartOption.xAxis.axisLabel.interval = 0;
    state.chartOption.xAxis.axisLabel.formatter = (value, index) => {
      let dayValue;
      switch (state.dialogType) {
        case '1':
          // 自动天
          dayValue = dateFormat(value.replace('日', ''), 'yyyy-MM');
          break;
        case '2':
          // 自动小时
          dayValue = dateFormat(`${value.replace('时', '')
            }: 00`, 'MM-dd');
          break;
        case '3':
          // 手工
          dayValue = dateFormat(value, 'yyyy');
          break;
        default:
          dayValue = value;
          break;
      }
      return index % obj.num === 0 ? dayValue : '';
    };
    state.chartOption.xAxis.axisTick.interval = (index) => {
      return index % obj.num === 0;
    };
  } else {
    state.chartOption.xAxis.axisLabel.interval = 'auto';
    state.chartOption.xAxis.axisLabel.formatter = (value) => value;
    state.chartOption.xAxis.axisTick.interval = 'auto';
  }
  /* ===========================处理数据结束=========================== */
  state.chartShow = false;
  nextTick(() => state.chartShow = true)
  console.log('option', state.chartOption)
  
  
};
const ondateChange1734256418144 = (data) => {
// 执行自定义方法
handleTimeSelect(data);
};
const ondateChange1735351876336_0_0 = (data) => {
// 执行自定义方法
handleTimeSelect(data);
};
const ondateChange1735351877507_0_0 = (data) => {
// 执行自定义方法
handleTimeSelect(data);
};
const onchange1740045317584 = (value,selectValueArr,selectValueItem) => {
// 执行自定义方法
handleMonitorSelect("left",value);
};
const onchange1740099820123_0_0 = (value,selectValueArr,selectValueItem) => {
// 执行自定义方法
handleCompareSelect(value);
};
const onchange1776235485240_0_0 = (value,selectValueArr,selectValueItem) => {
// 执行自定义方法
handleMonitorSelect("right",value);
};
const ongetChartInstance1776306889788 = (chart) => {
// 设置变量值
state.myChart = _.cloneDeep(chart);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getCompareOptions: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"interfaceId":"511d0bb23d5fc939a85c2a1f9b83a17e"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"511d0bb23d5fc939a85c2a1f9b83a17e"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"interfaceId":"511d0bb23d5fc939a85c2a1f9b83a17e"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCompareOptions'] = res.data;
                
     state.options.compare = [];
state.params.compare = [];
if (res.data.head.statusCode === '200' && res.data?.data?.length) {
  state.options.compare = res.data.data.map((i, index) => ({
    "value": i.PCODE,
    "label": handleCharFormat(i.PNAME),
    "unit": i.PUNIT,
    "color": state.color.compare[index % state.color.compare.length].replace(/rgba\((\d+),(\d+),(\d+),1\)/, "$1,$2,$3"), // 这里将rgba(7,162,164,1)的值7,162,164提出来，图表需要渐变
    "disabled": false
  }));
  const index = state.options.compare.findIndex(item => item.value === 'TEMPERATURE')
  if (index > -1) {
    state.params.compare.push('TEMPERATURE');
  } else {
    state.params.compare.push(state.options.compare[0].value);
  }

}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.options.compare = [];
state.params.compare = [];
      reject(error);
    });
  });
},
              },
// 接口函数
 getData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"END_MONITORTIME":"state.params.time.end","START_MONITORTIME":"state.params.time.start","POINT_CODE":"state.params.pointcode","interfaceId":"state.params.interfaceId"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"END_MONITORTIME":state.params.time.end,"START_MONITORTIME":state.params.time.start,"POINT_CODE":state.params.pointcode,"interfaceId":state.params.interfaceId},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"END_MONITORTIME":state.params.time.end,"START_MONITORTIME":state.params.time.start,"POINT_CODE":state.params.pointcode,"interfaceId":state.params.interfaceId});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getData'] = res.data;
                
     state.chartResData = [];
if (res.data.head.statusCode === '200' && res.data?.data?.length) {
  state.chartResData = res.data.data;
  // 过滤空数据
  filterMonitorData();
}
handleChartSeries();
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.chartResData = [];
      reject(error);
    });
  });
},
              },
// 接口函数
 getMonitorOptionsHandmade: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TREE_CODE":"WATER_POLLUTE","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TREE_CODE":"WATER_POLLUTE","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TREE_CODE":"WATER_POLLUTE","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMonitorOptionsHandmade'] = res.data;
                
     state.options.monitor = [];
state.params.monitor = [];
state.options.leftMonitor = []
state.params.leftMonitor = []
if (res.data.head.statusCode === '200' && res.data?.data?.length) {
  state.options.monitor = res.data.data.map((i, index) => ({
    "value": i?.DICTIONARYCODE,
    "label": i?.DICTIONARYNAME,
    "unit": i?.DICTIONARYNAME === 'PH' ? '' : (i?.EXT1 || 'mg/L'),
    "color": state.color.monitor[index % state.color.monitor.length], // 超过预设数组长度就循环使用
    "disabled": false
  }));
  // state.params.monitor.push(state.options.monitor[0].value);
  // 默认选中中总磷、氨氮、化学需氧量
  ['W21011', 'W21003', 'W01018'].forEach(i => {
    state.params.monitor.push(i);
  })

  state.options.leftMonitor = state.options.monitor
  state.params.leftMonitor = state.params.monitor
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.options.monitor = [];
state.params.monitor = [];
      reject(error);
    });
  });
},
              },
// 接口函数
 getMonitorOptionsAuto: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"interfaceId":"acc8f8c17118848d1f644cef1c725851"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"acc8f8c17118848d1f644cef1c725851"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"interfaceId":"acc8f8c17118848d1f644cef1c725851"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMonitorOptionsAuto'] = res.data;
                
     state.options.monitor = [];
state.params.monitor = [];
state.params.leftMonitor = []
state.params.rightMonitor = []
if (res.data.head.statusCode === '200' && res.data?.data?.length) {
  state.options.monitor = res.data.data.map((i, index) => ({
    "value": i.PCODE,
    "label": handleCharFormat(i.PNAME),
    "unit": i.PUNIT,
    "color": state.color.monitor[index % state.color.monitor.length], // 超过预设数组长度就循环使用
    "disabled": false
  }));
  // 确保目标数组存在
  state.params.leftMonitor = Array.isArray(state.params.leftMonitor) ? state.params.leftMonitor : [];
  state.params.rightMonitor = Array.isArray(state.params.rightMonitor) ? state.params.rightMonitor : [];

  // 左侧：DO, pH
  state.options.leftMonitor = state.options.monitor.filter(
    item => item.value === 'W01001' || item.value === 'W01009'
  );

  // 右侧：排除左侧的其他项
  const leftValues = state.options.leftMonitor.map(i => i.value);
  state.options.rightMonitor = state.options.monitor.filter(
    item => !leftValues.includes(item.value)
  );

  // 安全地取第一个值（避免 undefined）
  if (state.options.leftMonitor.length > 0) {
    // 默认选中 DO
    const index = state.options.leftMonitor.findIndex(item => item.value === 'W01009')
    if (index > -1) {
      state.params.leftMonitor.push('W01009');
    } else {
      state.params.leftMonitor.push(state.options.leftMonitor[0].value);
    }

  }
  if (state.options.rightMonitor.length > 0) {
    // 默认选中 TP
    const index = state.options.rightMonitor.findIndex(item => item.value === 'W21011')
    if (index > -1) {
      state.params.rightMonitor.push('W21011');
    } else {
      state.params.rightMonitor.push(state.options.rightMonitor[0].value);
    }
  }
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.options.monitor = [];
state.params.monitor = [];
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-DwfxZbdwglfx', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-DwfxZbdwglfx', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
initPage();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tChartDesignx0x0ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x0.default, componentState.tChartDesignx0x0?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tDatePickerx0x4ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x4.default, componentState.tDatePickerx0x4?.[state.screenSize]));

 const tDatePickerx0x5ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x5.default, componentState.tDatePickerx0x5?.[state.screenSize]));

 const tDatePickerx0x6ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x6.default, componentState.tDatePickerx0x6?.[state.screenSize]));

 const tSelectx0x7ComputedData = computed(() => _.merge({}, componentState.tSelectx0x7.default, componentState.tSelectx0x7?.[state.screenSize]));

 const tSelectx0x8ComputedData = computed(() => _.merge({}, componentState.tSelectx0x8.default, componentState.tSelectx0x8?.[state.screenSize]));

 const tSelectx0x9ComputedData = computed(() => _.merge({}, componentState.tSelectx0x9.default, componentState.tSelectx0x9?.[state.screenSize]));

      if (apiRegistry && Object.keys(apiRegistry).length) {
        // 加载初始接口
        loadInitialApis(apiRegistry, apiDataCache, componentState, componentPropBindingMap, function(cacheKey, data, apiName) {
            // 更新缓存
            apiDataCache[cacheKey] = data;
            apiDataMap[apiName] = data;
        });

        /* 监听组件可视变化，获取组件绑定的接口数据 */
        watchComponentVisible(apiRegistry, apiDataCache, componentState, componentPropBindingMap, function(cacheKey, data, apiName) {
            // 更新缓存
            apiDataCache[cacheKey] = data;
            apiDataMap[apiName] = data;
        });
      }
       
       /* 获取接口数据 */
       const getApiData = (id, key) => {
          return computed(() => getDataValue(apiDataMap, componentPropBindingMap[id][key]));
       };
      
return {
replaceCssVariables,
getApiData,
filterData,
componentPropBindingMap,
global,
state,
componentState,
tChartDesignx0x0ComputedData,
tTextx0x1ComputedData,
tTextx0x2ComputedData,
tTextx0x3ComputedData,
tDatePickerx0x4ComputedData,
tDatePickerx0x5ComputedData,
tDatePickerx0x6ComputedData,
tSelectx0x7ComputedData,
tSelectx0x8ComputedData,
tSelectx0x9ComputedData,
ongetChartInstance1776306889788,
ondateChange1734256418144,
ondateChange1735351876336_0_0,
ondateChange1735351877507_0_0,
onchange1740099820123_0_0,
onchange1740045317584,
onchange1776235485240_0_0,
};
},
}
</script>

<style scoped>
.t-l-c-DwfxZbdwglfx {
position: relative;
overflow: hidden;
--theme-color: var(--t-brand8);
--theme-color-opacity-10: rgba(var(--t-brand8), .1);
--theme-color-opacity-15: rgba(var(--t-brand8), .15);
--theme-color-opacity-40: rgba(var(--t-brand8), .4);
--theme-color-opacity-60: rgba(var(--t-brand8), .6);
--theme-color-opacity-80: rgba(var(--t-brand8), .8);
--theme-color-opacity-90: rgba(var(--t-brand8), .9);
pointer-events: auto;
position: Static;
z-index: 1;
filter: ;
width: 824px;
height: 533px;
background-color: rgba(0,0,0,0);
}
.t-l-c-DwfxZbdwglfx .DwfxZbdwglfx-t-chart-design-0-0 {
position: absolute !important;
top: 65px;
left: 0px;
width: 100%;
height: calc(100% - 80px);
pointer-events: auto;
}

.t-l-c-DwfxZbdwglfx .DwfxZbdwglfx-t-text-0-1 {
position: absolute !important;
top: 17px;
left: 0px;
width: auto;
height: 14px;
pointer-events: auto;
}

.t-l-c-DwfxZbdwglfx .DwfxZbdwglfx-t-text-0-2 {
position: absolute !important;
top: 8px;
left: 579px;
width: 25px;
height: 32px;
pointer-events: auto;
}

.t-l-c-DwfxZbdwglfx .DwfxZbdwglfx-t-text-0-3 {
position: absolute !important;
top: 8px;
left: 756px;
width: 24px;
height: 32px;
pointer-events: auto;
}

.t-l-c-DwfxZbdwglfx .DwfxZbdwglfx-t-date-picker-0-4 {
position: absolute !important;
top: 8px;
left: 80px;
width: 330px;
height: 32px;
pointer-events: auto;
}

.t-l-c-DwfxZbdwglfx .DwfxZbdwglfx-t-date-picker-0-5 {
position: absolute !important;
top: 8px;
left: 80px;
width: 330px;
height: 32px;
pointer-events: auto;
}

.t-l-c-DwfxZbdwglfx .DwfxZbdwglfx-t-date-picker-0-6 {
position: absolute !important;
top: 8px;
left: 80px;
width: 330px;
height: 32px;
pointer-events: auto;
}

.t-l-c-DwfxZbdwglfx .DwfxZbdwglfx-t-select-0-7 {
position: absolute !important;
top: 8px;
left: 611px;
width: 136px;
height: 33px;
pointer-events: auto;
}

.t-l-c-DwfxZbdwglfx .DwfxZbdwglfx-t-select-0-8 {
position: absolute !important;
top: 5px;
left: 420px;
width: 199px;
height: 33px;
pointer-events: auto;
}

.t-l-c-DwfxZbdwglfx .DwfxZbdwglfx-t-select-0-9 {
position: absolute !important;
top: 8px;
left: 787px;
width: 136px;
height: 33px;
pointer-events: auto;
}
</style>
