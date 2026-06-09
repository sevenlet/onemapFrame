<template>
  <div id="t-l-c-fisheryMessage" class="t-l-c-fisheryMessage" ><t-chart-design v-if="state.isBz === true" id="t-chart-design-550b.1cee2e251" class="fisheryMessage-t-chart-design-0-0"  :empty-img="tChartDesignx0x0ComputedData.emptyImg" :c-style="tChartDesignx0x0ComputedData.cStyle" :options="replaceCssVariables(filterData(state.options, componentPropBindingMap?.['t-chart-design-550b.1cee2e251']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @get-chart-instance="ongetChartInstance1773206362405"></t-chart-design><t-chart-design v-if="state.isBz === false" id="t-chart-design-e893.f97449395" class="fisheryMessage-t-chart-design-0-1"  :empty-img="tChartDesignx0x1ComputedData.emptyImg" :c-style="tChartDesignx0x1ComputedData.cStyle" :options="replaceCssVariables(filterData(state.variationTrendData.chartOptions, componentPropBindingMap?.['t-chart-design-e893.f97449395']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-chart-design><t-row id="t-row-b875.aab51406a" class="fisheryMessage-t-row-0-2"  :c-style="tRowx0x2ComputedData.cStyle" :gutter="tRowx0x2ComputedData.gutter" :justify="tRowx0x2ComputedData.justify" :align="tRowx0x2ComputedData.align"><t-date-picker id="t-date-picker-063c.a710ecfa2" class="fisheryMessage-t-date-picker-0-2-0"  :placeholder="tDatePickerx0x2x0ComputedData.placeholder" :start-placeholder="tDatePickerx0x2x0ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x2x0ComputedData.endPlaceholder" :type="tDatePickerx0x2x0ComputedData.type" :clearable="tDatePickerx0x2x0ComputedData.clearable" :range-separator="tDatePickerx0x2x0ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeRange, componentPropBindingMap?.['t-date-picker-063c.a710ecfa2']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x2x0ComputedData.separator" :readonly="tDatePickerx0x2x0ComputedData.readonly" :editable="tDatePickerx0x2x0ComputedData.editable" :c-style="tDatePickerx0x2x0ComputedData.cStyle" @date-change="ondateChange1773037457377"></t-date-picker><t-select id="t-select-dad2.c08d5e7c" class="fisheryMessage-t-select-0-2-1"  :active-value="replaceCssVariables(filterData(state.variationTrendData.activeTarget, componentPropBindingMap?.['t-select-dad2.c08d5e7c']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.categoryList, componentPropBindingMap?.['t-select-dad2.c08d5e7c']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x2x1ComputedData.alias" :multiple="tSelectx0x2x1ComputedData.multiple" :placeholder="tSelectx0x2x1ComputedData.placeholder" :clearable="tSelectx0x2x1ComputedData.clearable" :disabled="tSelectx0x2x1ComputedData.disabled" :name="tSelectx0x2x1ComputedData.name" :autocomplete="tSelectx0x2x1ComputedData.autocomplete" :filterable="tSelectx0x2x1ComputedData.filterable" :no-match-text="tSelectx0x2x1ComputedData.no-match-text" :no-data-text="tSelectx0x2x1ComputedData.no-data-text" :c-style="tSelectx0x2x1ComputedData.cStyle" @change="onchange1773037657710"></t-select></t-row><t-text id="t-text-a053.4425f8b8a" class="fisheryMessage-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle"></t-text><t-row id="t-row-5a45.4881a1b1d" class="fisheryMessage-t-row-0-4"  :c-style="tRowx0x4ComputedData.cStyle" :gutter="tRowx0x4ComputedData.gutter" :justify="tRowx0x4ComputedData.justify" :align="tRowx0x4ComputedData.align"><t-text id="t-text-4f1d.746164d9" class="fisheryMessage-t-text-0-4-0"  :label="tTextx0x4x0ComputedData.label" :editable="tTextx0x4x0ComputedData.editable" :c-style="tTextx0x4x0ComputedData.cStyle"></t-text><t-switch id="t-switch-0bb1.da694cc2c" class="fisheryMessage-t-switch-0-4-1"  :value="tSwitchx0x4x1ComputedData.value" :c-style="tSwitchx0x4x1ComputedData.cStyle" @change="onchange1773038099030"></t-switch></t-row><t-component id="t-component-f16c.f5ce6f3e4" class="fisheryMessage-t-component-0-5"  :name="tComponentx0x5ComputedData.name" :c-style="tComponentx0x5ComputedData.cStyle" :src="tComponentx0x5ComputedData.src" :component-name="tComponentx0x5ComputedData.componentName" :page-id="tComponentx0x5ComputedData.pageId" :page-code="tComponentx0x5ComputedData.pageCode"></t-component><t-text id="t-text-5462.3c52d0b74" class="fisheryMessage-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle"></t-text><t-row id="t-row-22e1.718027e73" class="fisheryMessage-t-row-0-7"  :c-style="tRowx0x7ComputedData.cStyle" :gutter="tRowx0x7ComputedData.gutter" :justify="tRowx0x7ComputedData.justify" :align="tRowx0x7ComputedData.align"></t-row></div>
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
import { TChartDesign, TComponent, TDatePicker, TRow, TSelect, TSwitch, TText } from '@ths/design';

export default {
  components: {
    TChartDesign,
    TComponent,
    TDatePicker,
    TRow,
    TSelect,
    TSwitch,
    TText,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-chart-design-550b.1cee2e251":{"attributeName":"tChartDesignx0x0","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-chart-design-e893.f97449395":{"attributeName":"tChartDesignx0x1","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-row-b875.aab51406a":{"attributeName":"tRowx0x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-date-picker-063c.a710ecfa2":{"attributeName":"tDatePickerx0x2x0","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-dad2.c08d5e7c":{"attributeName":"tSelectx0x2x1","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-text-a053.4425f8b8a":{"attributeName":"tTextx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-5a45.4881a1b1d":{"attributeName":"tRowx0x4","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-4f1d.746164d9":{"attributeName":"tTextx0x4x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-switch-0bb1.da694cc2c":{"attributeName":"tSwitchx0x4x1","value":{"filters":[]},"cStyle":{"filters":[]}},"t-component-f16c.f5ce6f3e4":{"attributeName":"tComponentx0x5","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-5462.3c52d0b74":{"attributeName":"tTextx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-22e1.718027e73":{"attributeName":"tRowx0x7","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-6892.136b66dd2":{"attributeName":"tTextx0x7x0"}};
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
   currentChartType: "line",
   overPollute: "",
   categoryList: [{"value":"w01012","label":"悬浮物","unit":"mg/L"},{"value":"w01001","label":"PH","unit":""},{"value":"w01018","label":"化学需氧量","unit":"mg/L"},{"value":"w21001","label":"总氮","unit":"mg/L"},{"value":"w21011","label":"总磷","unit":"mg/L"}],
   options: "",
   myChart: "",
   isBz: true,
   seriesData: [],
   standardSeriesData: [],
   noDataImg: "assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
   dataSourcetype: "",
   variationTrendData: {"chartShow":true,"chartOptions":{"series":[]},"title":"近12个月水质变化趋势","activeTarget":"w21011","chartInstance":""},
   monitorData: [{"value":"w01012","label":"悬浮物","unit":"mg/L"},{"value":"w01001","label":"PH","unit":""},{"value":"w01018","label":"化学需氧量","unit":"mg/L"},{"value":"w21001","label":"总氮","unit":"mg/L"},{"value":"w21011","label":"总磷","unit":"mg/L"}],
   assessType: "",
   pointCode: "",
   monitorTime: "",
   timeRange: [],
   endTime: "",
   startTime: "",
   outletId: "",
   lastTime: "2025-09-09",
   baseInfoData: [{"title":"入河排污口名称","num":"-"},{"title":"地市名称","num":"-"},{"title":"区县名称","num":"-"},{"title":"乡镇名称","num":"-"},{"title":"经度","num":"-"},{"title":"经度","num":"-"},{"title":"排污口类型","num":"-"},{"title":"所属水系","num":"-"}],
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
            default: {"height":"calc(100% - 85px)","width":"100%","position":"unset","left":"0px","top":"85px","animationName":""},
            
            },
 default: { 
 
emptyImg:"assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
cStyle:{"wrapper":{"default":{"height":"calc(100% - 85px)","width":"100%","position":"unset","left":"0px","top":"85px","animationName":""}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"emptyImg":{"default":{"display":"none"}}},
options:"", 
 },
},
tChartDesignx0x1: {
defaultStyle: {
            default: {"height":"calc(100% - 85px)","width":"100%","position":"unset","left":"0px","top":"85px","animationName":""},
            
            },
 default: { 
 
emptyImg:"assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
cStyle:{"wrapper":{"default":{"height":"calc(100% - 85px)","width":"100%","position":"unset","left":"0px","top":"85px","animationName":""}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"emptyImg":{"default":{"display":"none"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"series":[]})), 
 },
},
tRowx0x2: {
defaultStyle: {
            default: {"width":"100%","height":"30px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"39px","pointerEvents":"none","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"30px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"39px","pointerEvents":"none","animationName":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tDatePickerx0x2x0: {
defaultStyle: {
            default: {"width":"304px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","marginRight":"15px"},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"monthrange",
clearable:true,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"304px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","marginRight":"15px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tSelectx0x2x1: {
defaultStyle: {
            default: {"width":"120px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},
            
            },
 default: { 
 
activeValue:"w21011",
options:[{"value":"w01012","label":"悬浮物","unit":"mg/L"},{"value":"w01001","label":"PH","unit":""},{"value":"w01018","label":"化学需氧量","unit":"mg/L"},{"value":"w21001","label":"总氮","unit":"mg/L"},{"value":"w21011","label":"总磷","unit":"mg/L"}],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"120px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"240px","height":"32px","color":"var(--business-white)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"38px","left":"0px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"污染物浓度变化趋势",
editable:false,
cStyle:{"wrapper":{"default":{"width":"240px","height":"32px","color":"var(--business-white)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"38px","left":"0px","position":"unset","animationName":""}},"cardValue":{"default":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tRowx0x4: {
defaultStyle: {
            default: {"width":"100%","height":"30px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"85px","pointerEvents":"none","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"30px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"85px","pointerEvents":"none","animationName":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextx0x4x0: {
defaultStyle: {
            default: {"width":"auto","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"736px","top":"337px","fontSize":"var(--text-size-14)","lineHeight":"22px","animationName":"","textAlign":"right","marginRight":"8px"},
            
            },
 default: { 
 
label:"标准值",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"736px","top":"337px","fontSize":"var(--text-size-14)","lineHeight":"22px","animationName":"","textAlign":"right","marginRight":"8px"}}}, 
 },
},
tSwitchx0x4x1: {
defaultStyle: {
            default: {"width":"32px","height":"22px","position":"unset","left":"957px","top":"295px","animationName":"","marginRight":"8px !important"},
            
            },
 default: { 
 
value:true,
cStyle:{"wrapper":{"default":{"width":"32px","height":"22px","position":"unset","left":"957px","top":"295px","animationName":"","marginRight":"8px !important"}},"core":{"active":{"backgroundColor":"var(--business-theme)","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
tComponentx0x5: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"130px","height":"28px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"34px","top":"0px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"28px"},
            
            },
 default: { 
 
label:"监测信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"28px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"34px","top":"0px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"28px"}}}, 
 },
},
tRowx0x7: {
defaultStyle: {
            default: {"width":"100%","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"0px","animationName":"","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"0px","animationName":"","position":"unset"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
});
const handleWaterTarget = () => {
// 水质目标发生变化执行---------------------

// 先隐藏图表
state.variationTrendData.chartShow = false;
// state.isBz = false;
// 图表为空
state.variationTrendData.chartOptions = {
  series: []
};
async function getData() {
  // 水质
  if (state.variationTrendData.activeTarget === 'waterLevelChange') {
    state.variationTrendData.title = '水质变化趋势';
  } else {
    // 其他污染物
    state.variationTrendData.title = '污染物浓度变化趋势';
    // await apiRegistry.getLatestTime.request();
    // 污染物接口
    await apiRegistry.getPollutantVariationTrend.request();


  }
}
getData()
// 显示图表，延迟为了处理数据不刷新的问题
setTimeout(() => {
  state.variationTrendData.chartShow = true;
}, 100)
};
const getWaterChartLabel = (value) => {
// 设置x轴显示的文本
if (value === 1) {
  value = 'Ⅰ类';
} else if (value === 2) {
  value = 'Ⅱ类';
} else if (value === 3) {
  value = 'Ⅲ类';
} else if (value === 4) {
  value = 'Ⅳ类';
} else if (value === 5) {
  value = 'Ⅴ类';
} else if (value === 6) {
  value = '劣Ⅴ类';
} else {
  value = '-';
}
return value;

};
const getChartOptions = () => {
let chartOption = {};
const toolbox = {
  show: true,
  top: 5,
  right: 130,
  iconStyle: { color: '#fff' },
  feature: {
    magicType: {
      type: ["line", "bar"],
      title: { line: "转为折线图", bar: "转为柱状图" },
    }
  }
};
if (state.variationTrendData.activeTarget === 'w01001') {
  // ph 的图表配置
  chartOption = {
    "dataZoom": [
      {
        "type": "slider",
        "height": 10,
        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
        textStyle: {
          color: '#fff'
        }
      },
      {
        type: 'inside',      // 内置缩放，支持鼠标滚轮缩放
        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
      }
    ],
    grid: {
      top: '15%',
      left: '5%',
      right: '4%',
      bottom: '100px'
    },
    color: ['#00FFFF', '#FFF200', '#FF8400', '#43D156', '#EE70FF'],
    legend: {
      show: false,
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255, 255, 255, 1)',
        // fontSize: 13
        fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14
      },
      data: ['污染物浓度']
    },
    toolbox,
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      textStyle: {
        color: 'rgba(255, 255, 255, 1)'
      },
      "formatter": (value) => handleTooltipFormatter(value)
    },
    xAxis: {
      type: 'category',
      data: [],
      axisLabel: {
        color: 'var(--skin-font-color-80)',
        // fontSize: 13,
        fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14,
        rotate: 45
      },
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: 'var(--skin-font-color-40)'
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'var(--skin-font-color-40)'
        }
      },
      nameTextStyle: {
        color: 'var(--skin-font-color-60)',
        // fontSize: 13
        fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14,
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: 'var(--skin-font-color-80)',
        // fontSize: 13
        fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14,
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: 'var(--skin-font-color-40)'
        }
      },
      name: '',
      nameTextStyle: {
        color: 'var(--skin-font-color-60)',
        align: 'right',
        padding: [0, 0, 10, -24],
        // fontSize: 13
        fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14,
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'var(--skin-font-color-40)'
        }
      }
    },
    series: []
  }
} else {
  // 其他污染物
  chartOption = {
    "dataZoom": [
      {
        "type": "slider",
        "height": 10,
        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
        textStyle: {
          color: '#fff'
        }
      },
      {
        type: 'inside',      // 内置缩放，支持鼠标滚轮缩放
        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
      }
    ],
    grid: {
      top: '15%',
      left: '5%',
      right: '4%',
      bottom: '100px'
    },
    color: ['#00FFFF', '#FFF200', '#FF8400', '#43D156', '#EE70FF'],
    legend: {
      show: false,
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255, 255, 255, 1)',
        // fontSize: 13
        fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14
      },
      data: ['污染物浓度']
    },
    toolbox,
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      textStyle: {
        color: 'rgba(255, 255, 255, 1)'
      },
      "formatter": (value) => handleTooltipFormatter(value)
    },
    xAxis: {
      type: 'category',
      data: [],
      axisLabel: {
        color: 'var(--skin-font-color-80)',
        // fontSize: 13,
        fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14,
        rotate: 45
      },
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: 'var(--skin-font-color-40)'
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'var(--skin-font-color-40)'
        }
      },
      nameTextStyle: {
        color: 'var(--skin-font-color-60)',
        // fontSize: 13
        fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14,
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: 'var(--skin-font-color-80)',
        // fontSize: 13
        fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14,
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: 'var(--skin-font-color-40)'
        }
      },
      name: 'mg/L',
      nameTextStyle: {
        color: 'var(--skin-font-color-60)',
        align: 'right',
        padding: [0, 0, 10, -24],
        // fontSize: 13
        fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14,
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'var(--skin-font-color-40)'
        }
      }
    },
    series: []
  }
}

return chartOption;
};
const initPageData = () => {
// const getFormattedYearMonth = () => {
//   const now = new Date();
//   const year = now.getFullYear();
//   // 月份补零，确保是2位数（如1→01，12→12）
//   const month = String(now.getMonth() + 1).padStart(2, '0');
//   return `${year}-${month}`;
// };
// // 处理参数
// state.monitorTime = getFormattedYearMonth();
// state.pointCode = global.businessDialog.dialogParmas?.pointCode || '';

// // 结束时间
// let endTime = dateFormat(new Date(state.monitorTime), 'yyyy-MM');
// // 开始时间
// let startTime = dateFormat(getPrevTime(new Date(state.monitorTime), 'month'), 'yyyy-MM');

// // 赋值时间
// changeTime([startTime || '', endTime || ''])

state.pointCode = global.businessDialog.dialogParmas?.pointCode || '';

async function getData() {
  await apiRegistry.getLatestTime.request();
  // 获取变化趋势
  await apiRegistry.getPollutantVariationTrend.request();
}
getData()

};
const setNoDataIcon = () => {
// 设置暂无数据图标
state.noDataImg= getCssVariable('--business-no-data-img');
};
const getWaterLevelSrc = (key) => {
// 图标路径
const waterLevelSrc = [
    "6678a04114a34021a947caa73ebcf17f",
    "7cd40b10184443b6bdff4282e363f9de",
    "3a76262a85f24b9b983339ab06117f78",
    "1f1734ed58db4ed991edd563a803baef",
    "411e6a8a398246b1a82e117669795e44",
    "7732a1ec888e44e2bd34cb304dd71a0a",
    "85937bae863347139a4039c3df87e4b2"
]
return `url(assets/images/2024-12-30/${waterLevelSrc[Number(key) || 0]}.svg)`
};
const changeTime = (time) => {
state.timeRange = time || [];
state.startTime = time[0] || '';
state.endTime = time[1] || '';
};
const changeStandard = () => {
if (
  Array.isArray(state.seriesData)
  && Array.isArray(state.standardSeriesData)
) {
  // 没有标准值的
  state.variationTrendData.chartOptions.series = [
    ...state.seriesData,
  ];
  // 有标准值的
  state.options = _.cloneDeep(state.variationTrendData.chartOptions)
  state.options.series = [
    ...state.seriesData,
    ...state.standardSeriesData
  ];
}
console.log('没有标准值的',state.variationTrendData.chartOptions)
console.log('有标准值的', state.options)
};
const handleWaterLevelStandard = (seriesName,lineColor,labelPosition) => {
// 默认线条颜色
const defaultLineColor = '#465FFF';
return {
  name: seriesName,
  "type": "line",
  "symbol": "none",
  "lineStyle": {
    "type": "dashed",
    "width": 0
  },
  itemStyle: {
    color: lineColor || defaultLineColor,
  },
  markLine: {
    'symbol': 'none',
    "label": {
      position: labelPosition || 'insideEndTop',
      "color": lineColor || defaultLineColor,
      "fontSize": 12,
      formatter: (params) => {
        return `${handleNoVal(seriesName)}：${getWaterChartLabel(Number(params.value) || 0)}`
      }
    },
    "data": [
      {
        "0": {
          "valueIndex": 1,
          "type": "max"
        },
        "type": "average"
      }
    ],
    "silent": true
  },
}
};
const handleCharts = (myChart) => {
console.log('myChart', myChart)
state.myChart = myChart;
myChart.on('magictypechanged', (params) => {
  console.log('切换事件触发了！', params); // 现在能打印了
  const { currentType } = params;
  console.log('type', currentType, state.options);
  if (currentType === 'bar') {
    console.log('用户点击了转为柱状图');
    state.options.series[1] = {};
    setTimeout(() => {
      state.options.series = [
        ...state.seriesData,
        ...state.standardSeriesData
      ];
      state.options.series[0].type = 'bar';
      state.options.series[1].type = 'line';
    }, 0)
    console.log('有标准值的', state.options);
  } else if (currentType === 'line') {
    console.log('用户点击了转为折线图');
    console.log('有标准值的', state.options);
    // 你的折线图切换逻辑
  }
});
};
const setCardStyle = () => {
debugger;
const sheet = new CSSStyleSheet();
sheet.insertRule(`body #t-scrollable-cards-455f.ff3a2c962 .scrollable-cards-body {
width: 100% !important;
}`);

document.adoptedStyleSheets = [sheet];

};
const onchange1773038099030 = (value) => {
// 设置变量值
state.isBz = value;
// 执行自定义方法
changeStandard();
};
const ondateChange1773037457377 = (data) => {
// 执行自定义方法
changeTime(data);
// 执行自定义方法
handleWaterTarget();
};
const onchange1773037657710 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.variationTrendData.activeTarget = value;
// 执行自定义方法
handleWaterTarget();
};
const ongetChartInstance1773206362405 = (chart) => {
// 执行自定义方法
handleCharts(chart);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getPollutantVariationTrend: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POLLUTE_CODE":"state.variationTrendData.activeTarget","POINT_CODE":"state.pointCode","END_MONITORTIME":"state.endTime","START_MONITORTIME":"state.startTime","interfaceId":"b5fe951834e45983173b3714aa1a853e"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POLLUTE_CODE":state.variationTrendData.activeTarget,"POINT_CODE":state.pointCode,"END_MONITORTIME":state.endTime,"START_MONITORTIME":state.startTime,"interfaceId":"b5fe951834e45983173b3714aa1a853e"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POLLUTE_CODE":state.variationTrendData.activeTarget,"POINT_CODE":state.pointCode,"END_MONITORTIME":state.endTime,"START_MONITORTIME":state.startTime,"interfaceId":"b5fe951834e45983173b3714aa1a853e"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPollutantVariationTrend'] = res.data;
                
     console.log(res);
state.seriesData = []
state.standardSeriesData = []
const { data } = res;
if (data.head.statusCode === '200' && data.data.length) {
  let xAxisData = []; // x轴数据
  let seriesData = []; // 系列数据
  const limitLineData = [];

  // 1. 定义污染物配置（区分pH区间/其他单一限值，统一小写）
  const pollutantConfig = {
    // pH专属配置（区间）
    'w01001': { type: 'range', min: 6, max: 9 },
    // 其他污染物（单一限值）
    'w01012': { type: 'single', value: 45 },
    'w01018': { type: 'single', value: 10 },
    'w21001': { type: 'single', value: 5 },
    'w21011': { type: 'single', value: 0.5 },
    // 兜底配置
    'default': { type: 'single', value: 0 }
  };

  // 2. 统一转小写，避免大小写判断错误（核心修复）
  let activeTarget = (state.variationTrendData.activeTarget || '').toLowerCase();
  const config = pollutantConfig[activeTarget] || pollutantConfig['default'];
  const valueField = `${activeTarget}_value`; // 已转小写，无需重复转换

  // 3. 处理接口返回数据
  data.data.forEach((item) => {
    xAxisData.push(item.monitortime);

    // 收集限值数据（区分类型）
    if (config.type === 'single') {
      limitLineData.push({
        value: config.value,
        hiddenInTooltip: true,
        wholeTime: item.monitortime,
      });
    }

    // 组合监测点数据
    if (!seriesData.find((x) => x.POINT_CODE === item.station_mn)) {
      seriesData.push({
        POINT_CODE: item.station_mn,
        name: '污染物浓度',
        data: data.data.filter((x) => x.station_mn === item.station_mn).map((dataItem) => {
          const polluteValue = dataItem[valueField] || '';
          return {
            value: [dataItem.monitortime, polluteValue],
            // 统一判断，避免大小写问题
            unit: activeTarget === 'w01001' ? "" : 'mg/L',
            tooltipXAxisLabel: dataItem.monitortime,
          };
        }),
      });

      // 可选：去年同期/前年同期（如需启用，取消注释）
      // seriesData.push({
      //   POINT_CODE: item.station_mn,
      //   name: '去年同期',
      //   data: data.data.filter((x) => x.station_mn === item.station_mn).map((dataItem) => {
      //     const yoyField = `${activeTarget}_value_yoy`;
      //     const lastYearValue = dataItem[yoyField] || '';
      //     return {
      //       value: [dataItem.monitortime, lastYearValue],
      //       unit: activeTarget === 'w01001' ? "" : 'mg/L',
      //       tooltipXAxisLabel: dataItem.monitortime,
      //     };
      //   }),
      // });
    }
  });

  // 4. 公共样式
  seriesData = seriesData.map((seriesItem) => ({
    ...seriesItem,
    type: 'bar',
    barWidth: 12
  }));

  // 5. 处理标准线/限值逻辑（精准匹配类型）
  // 关键修复：先清空所有标准线相关配置，避免残留
  state.standardSeriesData = [];
  if (config.type === 'range') {
    // pH区间（仅w01001会走这里）
    state.standardSeriesData.push({
      "name": "年度目标",
      "data": [],
      "type": "bar",
      "markArea": {
        "data": [[{ "name": "", "yAxis": config.min }, { "name": "", "yAxis": config.max }]],
        "silent": true,
        "itemStyle": { "color": 'rgba(221, 194, 191, 0.2)' }
      },
    });
  } else {
    // 其他污染物（w01018等，单一限值线）
    state.standardSeriesData.push({
      ...handleStandardSeries('限值', '#FF9B00'),
      data: filterRepeatData(limitLineData, 'wholeTime'),
    });
  }

  // 6. 更新图表配置
  state.variationTrendData.chartOptions = getChartOptions();
  // 关键修复：重置chartOptions的series和markArea相关配置，避免残留
  state.variationTrendData.chartOptions.xAxis.data = xAxisData;
  // 先清空原有series，再重新赋值（核心修复）
  state.variationTrendData.chartOptions.series = [];
  state.variationTrendData.chartOptions.series = [...seriesData, ...state.standardSeriesData];
  state.seriesData = seriesData;

}
changeStandard();
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      

state.seriesData = []
state.standardSeriesData = []
      reject(error);
    });
  });
},
              },
// 接口函数
 getLatestTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.pointCode","interfaceId":"7c56b4c8d93f0bb0db1293fa6b31af0c"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.pointCode,"interfaceId":"7c56b4c8d93f0bb0db1293fa6b31af0c"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.pointCode,"interfaceId":"7c56b4c8d93f0bb0db1293fa6b31af0c"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.lastTime = data.max_time
  let endTime = dateFormat(new Date(state.lastTime), 'yyyy-MM');
  // 开始时间
  let startTime = dateFormat(getPrevTime(state.lastTime, 'month'), 'yyyy-MM');

  // 赋值时间
  changeTime([startTime || '', endTime || ''])
} else {
  state.lastTime = ''
   changeTime(['',''])
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-fisheryMessage', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPageData();
onMounted(() => {
setPageScale('t-l-c-fisheryMessage', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tChartDesignx0x0ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x0.default, componentState.tChartDesignx0x0?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tChartDesignx0x1ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x1.default, componentState.tChartDesignx0x1?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tRowx0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x2.default, componentState.tRowx0x2?.[state.screenSize]));

 const tDatePickerx0x2x0ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x2x0.default, componentState.tDatePickerx0x2x0?.[state.screenSize]));

 const tSelectx0x2x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x2x1.default, componentState.tSelectx0x2x1?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tRowx0x4ComputedData = computed(() => _.merge({}, componentState.tRowx0x4.default, componentState.tRowx0x4?.[state.screenSize]));

 const tTextx0x4x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x4x0.default, componentState.tTextx0x4x0?.[state.screenSize]));

 const tSwitchx0x4x1ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x4x1.default, componentState.tSwitchx0x4x1?.[state.screenSize]));

 const tComponentx0x5ComputedData = computed(() => _.merge({}, componentState.tComponentx0x5.default, componentState.tComponentx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tRowx0x7ComputedData = computed(() => _.merge({}, componentState.tRowx0x7.default, componentState.tRowx0x7?.[state.screenSize]));

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
tChartDesignx0x1ComputedData,
tRowx0x2ComputedData,
tDatePickerx0x2x0ComputedData,
tSelectx0x2x1ComputedData,
tTextx0x3ComputedData,
tRowx0x4ComputedData,
tTextx0x4x0ComputedData,
tSwitchx0x4x1ComputedData,
tComponentx0x5ComputedData,
tTextx0x6ComputedData,
tRowx0x7ComputedData,
ongetChartInstance1773206362405,
ondateChange1773037457377,
onchange1773037657710,
onchange1773038099030,
};
},
}
</script>

<style scoped>
.t-l-c-fisheryMessage {
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
height: 580px;
background-color: rgba(255, 12, 12, 0);
}
.t-l-c-fisheryMessage .fisheryMessage-t-chart-design-0-0 {
position: absolute !important;
top: 85px;
left: 0px;
width: 100%;
height: calc(100% - 85px);
pointer-events: auto;
}

.t-l-c-fisheryMessage .fisheryMessage-t-chart-design-0-1 {
position: absolute !important;
top: 85px;
left: 0px;
width: 100%;
height: calc(100% - 85px);
pointer-events: auto;
}

.t-l-c-fisheryMessage .fisheryMessage-t-row-0-2 {
position: absolute !important;
top: 39px;
left: 0px;
width: 100%;
height: 30px;
pointer-events: none;
display: flex;
justify-content: right;
align-items: center;
animation-name: ;
}

.t-l-c-fisheryMessage .fisheryMessage-t-date-picker-0-2-0 {
position: unset;
top: 214px;
left: 491px;
width: 304px;
height: 32px;
pointer-events: auto;
}

.t-l-c-fisheryMessage .fisheryMessage-t-select-0-2-1 {
position: unset;
top: 304px;
left: 724px;
width: 120px;
height: auto;
pointer-events: auto;
}

.t-l-c-fisheryMessage .fisheryMessage-t-text-0-3 {
position: absolute !important;
top: 38px;
left: 0px;
width: 240px;
height: 32px;
pointer-events: auto;
}

.t-l-c-fisheryMessage .fisheryMessage-t-row-0-4 {
position: absolute !important;
top: 85px;
left: 0px;
width: 100%;
height: 30px;
pointer-events: none;
display: flex;
justify-content: right;
align-items: center;
animation-name: ;
}

.t-l-c-fisheryMessage .fisheryMessage-t-text-0-4-0 {
position: unset;
top: 337px;
left: 736px;
width: auto;
height: 22px;
pointer-events: auto;
}

.t-l-c-fisheryMessage .fisheryMessage-t-switch-0-4-1 {
position: unset;
top: 295px;
left: 957px;
width: 32px;
height: 22px;
pointer-events: auto;
}

.t-l-c-fisheryMessage .fisheryMessage-t-component-0-5 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 28px;
pointer-events: auto;
}

.t-l-c-fisheryMessage .fisheryMessage-t-text-0-6 {
position: absolute !important;
top: 0px;
left: 34px;
width: 130px;
height: 28px;
pointer-events: auto;
}

.t-l-c-fisheryMessage .fisheryMessage-t-row-0-7 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 28px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
animation-name: ;
}
</style>
