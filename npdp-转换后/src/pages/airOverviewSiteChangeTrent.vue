<template>
  <div id="t-l-c-airOverviewSiteChangeTrent" class="t-l-c-airOverviewSiteChangeTrent" ><t-row id="t-row-22f0.8527050f5" class="airOverviewSiteChangeTrent-t-row-0-3"  :c-style="tRowx0x3ComputedData.cStyle" :gutter="tRowx0x3ComputedData.gutter" :justify="tRowx0x3ComputedData.justify" :align="tRowx0x3ComputedData.align"><t-col id="t-col-033c.3a3c4525b" class="airOverviewSiteChangeTrent-t-col-0-3-0"  :span="tColx0x3x0ComputedData.span" :offset="tColx0x3x0ComputedData.offset" :push="tColx0x3x0ComputedData.push" :pull="tColx0x3x0ComputedData.pull" :c-style="tColx0x3x0ComputedData.cStyle"><t-tabs-base id="t-tabs-base-12f1.39fec0438" class="airOverviewSiteChangeTrent-t-tabs-base-0-3-0-0"  :data="replaceCssVariables(filterData(state.dateTypeList, componentPropBindingMap?.['t-tabs-base-12f1.39fec0438']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :space="tTabsBasex0x3x0x0ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.dateType, componentPropBindingMap?.['t-tabs-base-12f1.39fec0438']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x3x0x0ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x3x0x0ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x3x0x0ComputedData.alias" :c-style="tTabsBasex0x3x0x0ComputedData.cStyle" @tab-click="ontabClick1763962432285"></t-tabs-base></t-col><t-col id="t-col-1749.74798c533" class="airOverviewSiteChangeTrent-t-col-0-3-1"  :span="tColx0x3x1ComputedData.span" :offset="tColx0x3x1ComputedData.offset" :push="tColx0x3x1ComputedData.push" :pull="tColx0x3x1ComputedData.pull" :c-style="tColx0x3x1ComputedData.cStyle"><t-date-picker v-if="state.dateType === 'hour'" id="t-date-picker-f0c6.7069e8942" class="airOverviewSiteChangeTrent-t-date-picker-0-3-1-0"  :placeholder="tDatePickerx0x3x1x0ComputedData.placeholder" :start-placeholder="tDatePickerx0x3x1x0ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x3x1x0ComputedData.endPlaceholder" :type="tDatePickerx0x3x1x0ComputedData.type" :clearable="tDatePickerx0x3x1x0ComputedData.clearable" :range-separator="tDatePickerx0x3x1x0ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.dateRange.value, componentPropBindingMap?.['t-date-picker-f0c6.7069e8942']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x3x1x0ComputedData.separator" :readonly="tDatePickerx0x3x1x0ComputedData.readonly" :editable="tDatePickerx0x3x1x0ComputedData.editable" :c-style="tDatePickerx0x3x1x0ComputedData.cStyle" :is-disabled-front="tDatePickerx0x3x1x0ComputedData.isDisabledFront" :disabled-date="replaceCssVariables(filterData(state.maxTimeValue, componentPropBindingMap?.['t-date-picker-f0c6.7069e8942']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @date-change="ondateChange1735010317720"></t-date-picker><t-date-picker v-if="state.dateType === 'day'" id="t-date-picker-1268.0de6cf8f8" class="airOverviewSiteChangeTrent-t-date-picker-0-3-1-1"  :placeholder="tDatePickerx0x3x1x1ComputedData.placeholder" :start-placeholder="tDatePickerx0x3x1x1ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x3x1x1ComputedData.endPlaceholder" :type="tDatePickerx0x3x1x1ComputedData.type" :clearable="tDatePickerx0x3x1x1ComputedData.clearable" :range-separator="tDatePickerx0x3x1x1ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.dateRange.value, componentPropBindingMap?.['t-date-picker-1268.0de6cf8f8']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x3x1x1ComputedData.separator" :readonly="tDatePickerx0x3x1x1ComputedData.readonly" :editable="tDatePickerx0x3x1x1ComputedData.editable" :c-style="tDatePickerx0x3x1x1ComputedData.cStyle" :is-disabled-front="tDatePickerx0x3x1x1ComputedData.isDisabledFront" :disabled-date="replaceCssVariables(filterData(state.maxTimeValue, componentPropBindingMap?.['t-date-picker-1268.0de6cf8f8']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @date-change="ondateChange1735017000687_0_0"></t-date-picker><t-date-picker v-if="state.dateType === '5minute'" id="t-date-picker-1fa0.f97df9fe1" class="airOverviewSiteChangeTrent-t-date-picker-0-3-1-2"  :placeholder="tDatePickerx0x3x1x2ComputedData.placeholder" :start-placeholder="tDatePickerx0x3x1x2ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x3x1x2ComputedData.endPlaceholder" :type="tDatePickerx0x3x1x2ComputedData.type" :clearable="tDatePickerx0x3x1x2ComputedData.clearable" :range-separator="tDatePickerx0x3x1x2ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.dateRange.value, componentPropBindingMap?.['t-date-picker-1fa0.f97df9fe1']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x3x1x2ComputedData.separator" :readonly="tDatePickerx0x3x1x2ComputedData.readonly" :editable="tDatePickerx0x3x1x2ComputedData.editable" :c-style="tDatePickerx0x3x1x2ComputedData.cStyle" :is-disabled-front="tDatePickerx0x3x1x2ComputedData.isDisabledFront" :disabled-date="replaceCssVariables(filterData(state.maxTimeValue, componentPropBindingMap?.['t-date-picker-1fa0.f97df9fe1']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @date-change="ondateChange1766726497621_0_0"></t-date-picker></t-col></t-row><t-chart-design id="t-chart-design-8986.431641097" class="airOverviewSiteChangeTrent-t-chart-design-0-4"  :register-map-name="tChartDesignx0x4ComputedData.registerMapName" :geo-json="tChartDesignx0x4ComputedData.geoJson" :empty-img="replaceCssVariables(filterData(state.noDataImg, componentPropBindingMap?.['t-chart-design-8986.431641097']['emptyImg'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tChartDesignx0x4ComputedData.cStyle" :options="replaceCssVariables(filterData(state.options, componentPropBindingMap?.['t-chart-design-8986.431641097']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @get-chart-instance="ongetChartInstance1769417580868"></t-chart-design></div>
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
import { TChartDesign, TCol, TDatePicker, TRow, TTabsBase } from '@ths/design';

export default {
  components: {
    TChartDesign,
    TCol,
    TDatePicker,
    TRow,
    TTabsBase,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-chart-curve-9994.6df73427":{"attributeName":"tChartCurvex0x0"},"t-chart-curve-845e.1d712e54f":{"attributeName":"tChartCurvex0x1"},"t-chart-curve-9643.29acfc1d4":{"attributeName":"tChartCurvex0x2"},"t-row-22f0.8527050f5":{"attributeName":"tRowx0x3","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-033c.3a3c4525b":{"attributeName":"tColx0x3x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-12f1.39fec0438":{"attributeName":"tTabsBasex0x3x0x0","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-col-1749.74798c533":{"attributeName":"tColx0x3x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-f0c6.7069e8942":{"attributeName":"tDatePickerx0x3x1x0","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-date-picker-1268.0de6cf8f8":{"attributeName":"tDatePickerx0x3x1x1","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-date-picker-1fa0.f97df9fe1":{"attributeName":"tDatePickerx0x3x1x2","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-chart-design-8986.431641097":{"attributeName":"tChartDesignx0x4","registerMapName":{"filters":[]},"geoJson":{"filters":[]},"emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}}};
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
   noDataImg: "",
   seriesData: [{"dataKey":"AQI","name":"AQI","nameRaw":"{{AQI}}","style":{"yAxisIndex":0}},{"dataKey":"PM25","name":"PM₂.₅","style":{"yAxisIndex":0}},{"dataKey":"PM10","name":"PM₁₀","style":{"yAxisIndex":0}},{"dataKey":"SO2","name":"SO₂","style":{"yAxisIndex":0}},{"dataKey":"NO2","name":"NO₂","style":{"yAxisIndex":0}},{"dataKey":"CO","name":"CO","nameRaw":"NO₂","style":{"yAxisIndex":1}},{"dataKey":"O3_8","name":"O₃-8h","style":{"yAxisIndex":0}}],
   pointType: "",
   maxTimeValue: "",
   interfaceId: "",
   lineData: [],
   POINT_CODE: "",
   dateRange: {"start":"","end":"","value":[]},
   dateTypeList: [{"label":"小时变化趋势","value":"hour"},{"label":"日变化趋势","value":"day"}],
   isControlSite: false,
   dateType: "hour",
   options: [],
   tabsActiveValue: "monthly",
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
tRowx0x3: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"0px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x3x0: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"left","alignItems":"center"},
            
            },
 default: { 
 
span:12,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"left","alignItems":"center"}}}, 
 },
},
tTabsBasex0x3x0x0: {
defaultStyle: {
            default: {"width":"385px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
data:[{"label":"小时变化趋势","value":"hour"},{"label":"日变化趋势","value":"day"}],
space:1,
selectedTabVal:"hour",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":false},
cStyle:{"wrapper":{"default":{"width":"385px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"0px","top":"0px"}},"itemWrapper":{"default":{"width":"80px","height":"32px","fontSize":"14px","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px"}},"label":{"default":{"fontSize":"var(--text-size-14)","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","fontSize":"var(--text-size-14)"},"hover":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tColx0x3x1: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"},
            
            },
 default: { 
 
span:12,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tDatePickerx0x3x1x0: {
defaultStyle: {
            default: {"width":"330px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"330px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important","lineHeight":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-white) !important","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tDatePickerx0x3x1x1: {
defaultStyle: {
            default: {"width":"330px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"330px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important","lineHeight":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-white) !important","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tDatePickerx0x3x1x2: {
defaultStyle: {
            default: {"width":"385px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerangeminute",
clearable:false,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"385px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important","lineHeight":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-white) !important","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tChartDesignx0x4: {
defaultStyle: {
            default: {"height":"calc(100% - 60px)","width":"100%","position":"unset","left":"0px","top":"60px"},
            
            },
 default: { 
 
registerMapName:"",
geoJson:{},
emptyImg:"assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"calc(100% - 60px)","width":"100%","position":"unset","left":"0px","top":"60px"}},"emptyContainer":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)"}},"emptyText":{"default":{"fontSize":"14px"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, [])), 
 },
},
});
const setOptions = () => {

  state.options = {
    "dataZoom": [
      {
        "type": "slider",
        "height": 10,
        bottom: 10,      // dataZoom 距离容器底部 10px
  
        xAxisIndex: [
          0,
          1,
          2
        ], // 控制所有三个x轴
        textStyle: {
          color: 'var(--skin-font-color)'
        }
      },
      {
        type: 'inside', // 内置缩放，支持鼠标滚轮缩放
        xAxisIndex: [
          0,
          1,
          2
        ], // 控制所有三个x轴
      }
    ],
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,0,0,0.8)',
      borderColor: 'rgba(255,255,255,0.5) ',
      textStyle: {
        color: 'rgba(255,255, 255,1) '
      }
    },
    legend: {
      icon: "roundRect",
      itemWidth: 16,
      itemHeight: 16,
      textStyle: {
        color: 'var(--business-text-avianize)',
        fontSize: global.publicFontSizeConfig.fontSize14,
      },
      top: 10,
    },
    toolbox: {
      show: true,
      top: 5,
      right: 80,
      iconStyle: {
        color: 'var(--skin-font-color)'
      },
      feature: {
        magicType: {
          type: [
            "line",
            "bar"
          ],
          title: {
            line: '转为折线图',
            bar: '转为柱状图'
          }
        },
      }
    },
    grid: {
      left: "6%",
      right: "6%",
      bottom: "14%",
      top: "10%",
      // containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: state.lineData.map(item => item.MONITORTIME_NAME),
      nameTextStyle: {
        color: 'var(--skin-font-color-60)',
        padding: [0, 0, 0, -10],
      },
      axisLabel: {
        color: 'var(--skin-font-color-80)',
        fontSize: global.publicFontSizeConfig.fontSize12,
        // rotate: 45,
      },
      axisLine: {
        lineStyle: {
          color: 'var(--skin-font-color-40)',
        },
      },
      interval: 'auto'
    },
    yAxis: [
      {
        type: "value",
        name: "μg/m³",
        nameTextStyle: {
          color: 'var(--skin-font-color-60)',
          align: "center",
          padding: [0, 0, 0, -14],
        },
        nameLocation: "end",
        position: "left",
        axisLabel: {
          fontSize: global.publicFontSizeConfig.fontSize14,
          color: 'var(--skin-font-color-80)',
          margin: 2,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'var(--skin-font-color-40)',
            type: "solid",
          },
        },
        splitLine: {
          lineStyle: {
            type: "dashed",
            color: 'var(--skin-font-color-20)',
          },
          show: true,
        },
      },
      {
        type: "value",
        name: "mg/m³",
        nameTextStyle: {
          color: 'var(--skin-font-color-60)',
          align: "center",
          padding: [0, 0, 0, 0],
          fontSize: global.publicFontSizeConfig.fontSize12,
        },
        nameLocation: "end",
        position: "right",
        axisLabel: {
          color: 'var(--skin-font-color-80)',
          fontSize: global.publicFontSizeConfig.fontSize14,
          margin: 5,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'var(--skin-font-color-40)',
            type: "solid",
          },
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "AQI",
        type: "line",
        yAxisIndex: 0,
        smooth: true,
        data: state.lineData.map(item => item.AQI),
        itemStyle: {
          color: "#2ec7c9",
        },
        lineStyle: {
          width: 2,
        },
  
      },
      {
        name: "PM₂.₅",
        type: "line",
        yAxisIndex: 0,
        smooth: true,
        data: state.lineData.map(item => item.PM25),
        itemStyle: {
          color: "#b6a2de",
        },
        lineStyle: {
          width: 2,
        },
  
      },
      {
        name: "PM₁₀",
        type: "line",
        yAxisIndex: 0,
        smooth: true,
        data: state.lineData.map(item => item.PM10),
        itemStyle: {
          color: "#5ab1ef",
        },
        lineStyle: {
          width: 2,
        },
  
      },
      {
        name: "SO₂",
        type: "line",
        yAxisIndex: 0,
        smooth: true,
        data: state.lineData.map(item => item.SO2),
        itemStyle: {
          color: "#ffb980",
        },
        lineStyle: {
          width: 2,
        },
  
      },
      {
        name: "NO₂",
        type: "line",
        yAxisIndex: 0,
        smooth: true,
        data: state.lineData.map(item => item.NO2),
        itemStyle: {
          color: "#d87a80",
        },
        lineStyle: {
          width: 2,
        },
  
      },
      {
        name: "CO",
        type: "line",
        yAxisIndex: 1,
        smooth: true,
        data: state.lineData.map(item => item.CO),
        itemStyle: {
          color: "#8d98b3",
        },
        lineStyle: {
          width: 2,
        },
  
      },
    ],
  };
  if (state.dateType === 'hour' || state.dateType === '5minute') {
    state.options.series.push({
      name: "O₃",
      type: "line",
      yAxisIndex: 0,
      smooth: true,
      data: state.lineData.map(item => item.O3),
      itemStyle: {
        color: "#e5cf0d",
      },
      lineStyle: {
        width: 2,
      },
  
    })
  } else {
    const index = state.options.series.findIndex(item => item.name === 'O₃');
    if (index > -1) {
      state.options.series.splice(index, 1);
    }
  };
  if (state.dateType === 'day') {
    state.options.series.push(
      {
        name: "O₃-8h",
        type: "line",
        yAxisIndex: 0,
        smooth: true,
        data: state.lineData.map(item => item.O3_8),
        itemStyle: {
          color: "#e5cf0d",
        },
        lineStyle: {
          width: 2,
        },
  
      }
    )
  } else {
    const index = state.options.series.findIndex(item => item.name === 'O₃-8h');
    if (index > -1) {
      state.options.series.splice(index, 1);
    }
  };
  
};
const setDefaultParams = () => {
const POINT_TYPE_NAME = state.airPointState?.headerInfo?.POINT_TYPE_NAME || ""
state.isControlSite = POINT_TYPE_NAME === "国控站"
state.POINT_CODE = state.airPointState?.POINT_CODE || ""
state.pointType = state.airPointState.pointType || "";
//  是否存在分钟数据
const isMinute = state.airPointState?.isMinute ?? false
if (isMinute) {
  state.dateTypeList = [
    {
      "label": "五分钟变化趋势",
      "value": "5minute"
    },
    {
      "label": "小时变化趋势",
      "value": "hour"
    },
    {
      "label": "日变化趋势",
      "value": "day"
    }
  ]
  state.dateType = '5minute'
  state.dateRange.end = global.airGlobalVariables.realTimeAlarm.dateValue
  const endTime = state.dateRange.end + ':00'
  state.dateRange.start = getPrevTime(endTime, 'minute').slice(0, 16)
  state.dateRange.value = [state.dateRange.start, state.dateRange.end]
} else {
  state.dateTypeList = [
    {
      "label": "小时变化趋势",
      "value": "hour"
    },
    {
      "label": "日变化趋势",
      "value": "day"
    }
  ]
  state.dateType = global.air.timeType || 'hour';
  const rangeDate = getForwardTimeList(global.air.timeType === 'hour' ? global.air.timeValue : global.air.timeValue + ' 00', 'hour', 47);
  state.dateRange.start = rangeDate[0];
  state.dateRange.end = rangeDate[rangeDate.length - 1];
  state.dateRange.value = [state.dateRange.start, state.dateRange.end]
}
// 从实时监测跳转过来
if(global.airGlobalVariables.realTimeMoniterDialog.dateType){
  state.dateType = global.airGlobalVariables.realTimeMoniterDialog.dateType
}
// 请求数据
const initData = async () => {
  switch (state.dateType) {
    case '5minute':
      state.interfaceId = "ec575d2b76ddaa4882f2271f88e2d397"
      apiRegistry.getLineData.request();
      break;
    case 'hour':
      state.interfaceId = "ec575d2b76ddaa4882f2271f88e2d397"
      apiRegistry.getLineData.request();
      break;
    case 'day':
      state.interfaceId = "daaa5c5bae26295626e948aa6702e2e9"
      apiRegistry.getLineData.request();
      break;
    default:
      break;
  }
}
initData();
};
const getProvider = () => {
const rootData = inject('airPointState');

state.airPointState = rootData;
};
const setTimeValue = (data) => {
state.dateRange.value = data || [];
state.dateRange.start = data[0] || "";
state.dateRange.end = data[1] || "";
};
const changeTopTabs = (data) => {
// 如果第二个下拉框选中all 那就把入参 selectTwo置为空
state.selectTwo = state.selectTwoValue === 'all' ? '' : state.selectTwoValue;
state.surfaceWaterParamsState.ASSESSTYPE = state.tabsActiveValue
// 整体评价结果-卡片
getPJResultCard();
// 断面评价结果-列表
getSZPLList();

rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  // 给地图发消息
  data: [
    {
      "code": "id",
      "shareCode": "ASSESSTYPE",
      "defaultValue": "",
      "runtimeValue": data.value,
    },
    {
      "code": "text",
      "shareCode": "",
      "defaultValue": "",
      "runtimeValue": data.label
    },
    {
      "code": "defaultTab",
      "name": "",
      "defaultValue": "pointWq",
      "shareCode": "defaultTab",
      "runtimeValue": "pointWq"
    }
  ]
});
};
const changeDateType = () => {
const initData = async () => {
  await apiRegistry.getLastTime.request();
  switch (state.dateType) {
    case '5minute':
      state.interfaceId = "ec575d2b76ddaa4882f2271f88e2d397"
      break;
    case 'hour':
      state.interfaceId = "ec575d2b76ddaa4882f2271f88e2d397"
      break;
    case 'day':
      state.interfaceId = "daaa5c5bae26295626e948aa6702e2e9"
      break;
    default:
      break;
  }
  await apiRegistry.getLineData.request();
}
initData();
};
const handleDate = (date) => {
state.dateRange.end = date
if (state.dateType === '5minute') {
  const endTime = date + ':00'
  state.dateRange.start = getPrevTime(endTime, 'minute').slice(0, 16)
} else if (state.dateType === 'hour') {
  const endTime = date + ':00:00'
  state.dateRange.start = getPrevTime(endTime, '48hour').slice(0, 13)
} else if (state.dateType === 'day') {
  const endTime = date + ' 00:00:00'
  state.dateRange.start = getPrevTime(endTime, '30day').slice(0, 10)
}
state.dateRange.value = [state.dateRange.start, state.dateRange.end]
};
const hiddenSerise = () => {
state.seriesData = [
              {
                "dataKey": "AQI",
                "name": "AQI",
                "nameRaw": "{{AQI}}",
                "style": {
                  "yAxisIndex": 0,
                  "visible": false
                }
              },
              {
                "dataKey": "PM25",
                "name": "PM₂.₅",
                "style": {
                  "yAxisIndex": 0,
                  "visible": false
                }
              },
              {
                "dataKey": "PM10",
                "name": "PM₁₀",
                "style": {
                  "yAxisIndex": 0
                }
              },
              {
                "dataKey": "SO2",
                "name": "SO₂",
                "style": {
                  "yAxisIndex": 0
                }
              },
              {
                "dataKey": "NO2",
                "name": "NO₂",
                "style": {
                  "yAxisIndex": 0
                }
              },
              {
                "dataKey": "CO",
                "name": "CO",
                "nameRaw": "NO₂",
                "style": {
                  "yAxisIndex": 1
                }
              },
              {
                "dataKey": "O3_8",
                "name": "O₃-8h",
                "style": {
                  "yAxisIndex": 0
                }
              }
            ]
};
const setNoData = () => {
// 设置暂无数据图标
state.noDataImg= getCssVariable('--business-no-data-img');
};
const getChartInstance = (myChart) => {
state.myChart = myChart


};
const hiddenSeries = () => {
if (global.airGlobalVariables.realTimeMoniterDialog.pollutants) {
  const pollutants = global.airGlobalVariables.realTimeMoniterDialog.pollutants
  setTimeout(() => {
    let pollutantsList = []
    if (state.dateType === 'hour' || state.dateType === '5minute') {
      pollutantsList = ['AQI', 'PM₂.₅', 'PM₁₀', 'SO₂', 'NO₂', 'CO', 'O₃']
    } else if (state.dateType === 'day') {
      pollutantsList = ['AQI', 'PM₂.₅', 'PM₁₀', 'SO₂', 'NO₂', 'CO', 'O₃-8h']
    }
    // 只显示当前污染物
    pollutantsList.forEach(item => {
      state.myChart.dispatchAction({
        type: 'legendUnSelect',
        name: item
      });
    })
    state.myChart.dispatchAction({
      type: 'legendSelect',
      name: pollutants
    });
  },200)
}

};
const ontabClick1763962432285 = (data) => {
// 设置变量值
state.dateType = data.value;
// 执行自定义方法
changeDateType();
};
const ondateChange1735010317720 = (data) => {
// 执行自定义方法
setTimeValue(data);
// 事件交互-请求调用接口
apiRegistry.getLineData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const ondateChange1735017000687_0_0 = (data) => {
// 执行自定义方法
setTimeValue(data);
// 事件交互-请求调用接口
apiRegistry.getLineData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const ondateChange1766726497621_0_0 = (data) => {
// 执行自定义方法
setTimeValue(data);
// 事件交互-请求调用接口
apiRegistry.getLineData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const ongetChartInstance1769417580868 = (chart) => {
// 执行自定义方法
getChartInstance(chart);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getLineData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TIME_TYPE":"state.dateType","START_TIME":"state.dateRange.start","END_TIME":"state.dateRange.end","POINT_CODE":"state.POINT_CODE","interfaceId":"state.interfaceId"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.dateType,"START_TIME":state.dateRange.start,"END_TIME":state.dateRange.end,"POINT_CODE":state.POINT_CODE,"interfaceId":state.interfaceId},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TIME_TYPE":state.dateType,"START_TIME":state.dateRange.start,"END_TIME":state.dateRange.end,"POINT_CODE":state.POINT_CODE,"interfaceId":state.interfaceId});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLineData'] = res.data;
                
     // state.lineData = []
// const { data } = res;
// if (data?.head?.statusCode === '200' && data?.data) {
//     state.lineData = data.data || []
// }

state.lineData = []
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
    state.lineData = data.data.map(item => {
        // 创建新对象，避免修改原对象
        const processedItem = { ...item };
        const fields = ['AQI', 'PM25', 'PM10', 'SO2', 'NO2', 'CO', 'O3', 'O3_8','POLLUTE_VALUE'];      
        fields.forEach(field => {
            let value = processedItem[field];
            
            // 检查是否为空值
            const isEmpty = value === '' || value === null || value === undefined;
            // 检查是否为空白字符串
            const isBlankString = typeof value === 'string' && value.trim() === '';
            // 转换为数字后检查是否小于0
            const isNegative = !isNaN(Number(value)) && Number(value) < 0;
            
            if (isEmpty || isBlankString || isNegative) {
                processedItem[field] = '-';
            }
        });
        
        return processedItem;
    }) || [];
}
setOptions();
hiddenSeries();

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.lineData = []
      reject(error);
    });
  });
},
              },
// 接口函数
 getLastTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.POINT_CODE","POINT_TYPE":"state.pointType","TIME_TYPE":"state.dateType","interfaceId":"66ad2ebe9d660295568b05187f34e133"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.POINT_CODE,"POINT_TYPE":state.pointType,"TIME_TYPE":state.dateType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.POINT_CODE,"POINT_TYPE":state.pointType,"TIME_TYPE":state.dateType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLastTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  const date = data?.MONITORTIME || ''
  // 处理日期
  handleDate(date)
}else{
  state.dateRange.start = ''
  state.dateRange.end = ''
  state.dateRange.value = []
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
        state.dateRange.start = ''
  state.dateRange.end = ''
  state.dateRange.value = []
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewSiteChangeTrent', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
// 执行自定义方法
setDefaultParams();
onMounted(() => {
setPageScale('t-l-c-airOverviewSiteChangeTrent', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x3ComputedData = computed(() => _.merge({}, componentState.tRowx0x3.default, componentState.tRowx0x3?.[state.screenSize]));

 const tColx0x3x0ComputedData = computed(() => _.merge({}, componentState.tColx0x3x0.default, componentState.tColx0x3x0?.[state.screenSize]));

 const tTabsBasex0x3x0x0ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x3x0x0.default, componentState.tTabsBasex0x3x0x0?.[state.screenSize]));

 const tColx0x3x1ComputedData = computed(() => _.merge({}, componentState.tColx0x3x1.default, componentState.tColx0x3x1?.[state.screenSize]));

 const tDatePickerx0x3x1x0ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x3x1x0.default, componentState.tDatePickerx0x3x1x0?.[state.screenSize]));

 const tDatePickerx0x3x1x1ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x3x1x1.default, componentState.tDatePickerx0x3x1x1?.[state.screenSize]));

 const tDatePickerx0x3x1x2ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x3x1x2.default, componentState.tDatePickerx0x3x1x2?.[state.screenSize]));

 const tChartDesignx0x4ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x4.default, componentState.tChartDesignx0x4?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

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
tRowx0x3ComputedData,
tColx0x3x0ComputedData,
tTabsBasex0x3x0x0ComputedData,
tColx0x3x1ComputedData,
tDatePickerx0x3x1x0ComputedData,
tDatePickerx0x3x1x1ComputedData,
tDatePickerx0x3x1x2ComputedData,
tChartDesignx0x4ComputedData,
ontabClick1763962432285,
ondateChange1735010317720,
ondateChange1735017000687_0_0,
ondateChange1766726497621_0_0,
ongetChartInstance1769417580868,
};
},
}
</script>

<style scoped>
.t-l-c-airOverviewSiteChangeTrent {
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
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0);
}
.t-l-c-airOverviewSiteChangeTrent .airOverviewSiteChangeTrent-t-row-0-3 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-airOverviewSiteChangeTrent .airOverviewSiteChangeTrent-t-col-0-3-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
}

.t-l-c-airOverviewSiteChangeTrent .airOverviewSiteChangeTrent-t-tabs-base-0-3-0-0 {
position: unset;
top: 0px;
left: 0px;
width: 385px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteChangeTrent .airOverviewSiteChangeTrent-t-col-0-3-1 {
position: relative;
top: null;
left: null;
width: 100px;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
}

.t-l-c-airOverviewSiteChangeTrent .airOverviewSiteChangeTrent-t-date-picker-0-3-1-0 {
position: unset;
top: 0px;
left: 400px;
width: 330px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteChangeTrent .airOverviewSiteChangeTrent-t-date-picker-0-3-1-1 {
position: unset;
top: 0px;
left: 400px;
width: 330px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteChangeTrent .airOverviewSiteChangeTrent-t-date-picker-0-3-1-2 {
position: unset;
top: 10px;
left: 410px;
width: 385px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteChangeTrent .airOverviewSiteChangeTrent-t-chart-design-0-4 {
position: absolute !important;
top: 60px;
left: 0px;
width: 100%;
height: calc(100% - 60px);
pointer-events: auto;
}
</style>
