<template>
  <div id="t-l-c-lsAirQualityAnalysis" class="t-l-c-lsAirQualityAnalysis" ><t-component v-if="state.isDayOrHour === true" id="t-component-c394.f306fe9ac" class="lsAirQualityAnalysis-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName"></t-component><t-component v-if="state.isDayOrHour === true" id="t-component-3f9e.6d1636f5c" class="lsAirQualityAnalysis-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName"></t-component><t-chart-curve id="t-chart-curve-92e5.0eef415f6" class="lsAirQualityAnalysis-t-chart-curve-0-2"  :series-setting="tChartCurvex0x2ComputedData.seriesSetting" :data="replaceCssVariables(filterData(state.chartData, componentPropBindingMap?.['t-chart-curve-92e5.0eef415f6']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tChartCurvex0x2ComputedData.options" :c-style="tChartCurvex0x2ComputedData.cStyle" :y-axis-left-options="tChartCurvex0x2ComputedData.yAxisLeftOptions" :y-axis-right-options="tChartCurvex0x2ComputedData.yAxisRightOptions" :line="componentState.tChartCurvex0x2.line"></t-chart-curve><t-component v-if="state.isMonthOrYear === true" id="t-component-4e68.34592e226" class="lsAirQualityAnalysis-t-component-0-3"  :name="tComponentx0x3ComputedData.name" :c-style="tComponentx0x3ComputedData.cStyle" :src="tComponentx0x3ComputedData.src" :component-name="tComponentx0x3ComputedData.componentName"></t-component><t-component v-if="state.isMonthOrYear === true" id="t-component-c981.de31e780a" class="lsAirQualityAnalysis-t-component-0-4"  :name="tComponentx0x4ComputedData.name" :c-style="tComponentx0x4ComputedData.cStyle" :src="tComponentx0x4ComputedData.src" :component-name="tComponentx0x4ComputedData.componentName"></t-component><t-component id="t-component-2f14.0195fd13c" class="lsAirQualityAnalysis-t-component-0-5"  :name="tComponentx0x5ComputedData.name" :loading="tComponentx0x5ComputedData.loading" :c-style="tComponentx0x5ComputedData.cStyle" :src="tComponentx0x5ComputedData.src" :component-name="tComponentx0x5ComputedData.componentName" :page-id="tComponentx0x5ComputedData.pageId" :page-code="tComponentx0x5ComputedData.pageCode"></t-component><t-rect id="t-rect-0b63.389b82165" class="lsAirQualityAnalysis-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle"></t-rect><t-component v-if="state.isDayOrHour === true" id="t-component-1dfb.633d7107b" class="lsAirQualityAnalysis-t-component-0-7"  :name="tComponentx0x7ComputedData.name" :c-style="tComponentx0x7ComputedData.cStyle" :src="tComponentx0x7ComputedData.src" :component-name="tComponentx0x7ComputedData.componentName"></t-component><t-component v-if="state.isMonthOrYear === true" id="t-component-8c1a.9aac54a8f" class="lsAirQualityAnalysis-t-component-0-8"  :name="tComponentx0x8ComputedData.name" :c-style="tComponentx0x8ComputedData.cStyle" :src="tComponentx0x8ComputedData.src" :component-name="tComponentx0x8ComputedData.componentName"></t-component><t-component v-if="state.isDayOrHour === true" id="t-component-9c0b.c1f74dcf8" class="lsAirQualityAnalysis-t-component-0-9"  :name="tComponentx0x9ComputedData.name" :c-style="tComponentx0x9ComputedData.cStyle" :src="tComponentx0x9ComputedData.src" :component-name="tComponentx0x9ComputedData.componentName"></t-component><t-date-picker v-if="state.timeType !== 'quarter'" id="t-date-picker-9697.cc182a559" class="lsAirQualityAnalysis-t-date-picker-0-10"  :placeholder="tDatePickerx0x10ComputedData.placeholder" :start-placeholder="tDatePickerx0x10ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x10ComputedData.endPlaceholder" :type="replaceCssVariables(filterData(state.dateType, componentPropBindingMap?.['t-date-picker-9697.cc182a559']['type'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :clearable="tDatePickerx0x10ComputedData.clearable" :range-separator="tDatePickerx0x10ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeValue, componentPropBindingMap?.['t-date-picker-9697.cc182a559']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x10ComputedData.separator" :readonly="tDatePickerx0x10ComputedData.readonly" :editable="tDatePickerx0x10ComputedData.editable" :c-style="tDatePickerx0x10ComputedData.cStyle" :is-disabled-front="tDatePickerx0x10ComputedData.isDisabledFront" :disabled-date="replaceCssVariables(filterData(state.maxTimeValue, componentPropBindingMap?.['t-date-picker-9697.cc182a559']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @date-change="ondateChange1734936115799"></t-date-picker><t-text-unit id="t-text-unit-5651.19d0f53fe" class="lsAirQualityAnalysis-t-text-unit-0-11"  :c-style="tTextUnitx0x11ComputedData.cStyle" :content="tTextUnitx0x11ComputedData.content" :unit="tTextUnitx0x11ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x11ComputedData.showOverflowTooltip"></t-text-unit></div>
</template>

<script>
import io from 'socket.io-client';
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
import { TChartCurve, TComponent, TDatePicker, TRect, TTextUnit } from '@ths/design';

export default {
  components: {
    TChartCurve,
    TComponent,
    TDatePicker,
    TRect,
    TTextUnit,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-c394.f306fe9ac":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-3f9e.6d1636f5c":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-chart-curve-92e5.0eef415f6":{"attributeName":"tChartCurvex0x2","seriesSetting":{"filters":[]},"data":{"filters":[]},"options":{"filters":[]},"cStyle":{"filters":[]},"yAxisLeftOptions":{"filters":[]},"yAxisRightOptions":{"filters":[]}},"t-component-4e68.34592e226":{"attributeName":"tComponentx0x3","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-c981.de31e780a":{"attributeName":"tComponentx0x4","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-2f14.0195fd13c":{"attributeName":"tComponentx0x5","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-rect-0b63.389b82165":{"attributeName":"tRectx0x6","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-1dfb.633d7107b":{"attributeName":"tComponentx0x7","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-8c1a.9aac54a8f":{"attributeName":"tComponentx0x8","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-9c0b.c1f74dcf8":{"attributeName":"tComponentx0x9","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-date-picker-9697.cc182a559":{"attributeName":"tDatePickerx0x10","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-text-unit-5651.19d0f53fe":{"attributeName":"tTextUnitx0x11","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}}};
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
   chartData: [{"resulttime":"2025-11-07 09","resulttime_str":"9时","model":"CMAQ","modeltime":"Fri Nov 07 00:00:00 CST 2025","region_code":"350700000000","point_code":"350700","region_name":"南平市","point_name":"南平市","point_type":"3","backtype":"0","pm25":"28","pm25_iaqi":"40","pm10":"39","pm10_iaqi":"39","co":"0.6","co_iaqi":"6","o3":"24","o3_iaqi":"8","o3_8":"21","o3_8_iaqi":"11","so2":"5","so2_iaqi":"2","no2":"23","no2_iaqi":"12","aqi":"40","primpollute":"--","aqilevel":"一级","aqilevelindex":"1","aqilevelstate":"优","step":"1","sys_create_time":"","sys_update_time":""}],
   pointCode: "350700",
   isNewDate: true,
   maxQuarterYear: "",
   maxTimeValue: "2025-11-07 09",
   standardContentFold: true,
   isProvince: false,
   isMonthOrYear: false,
   isDayOrHour: true,
   dateType: "datetimehour",
   timeType: "hour",
   timeValue: "",
   quarterValue: "",
   quarterYear: "",
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
tComponentx0x0: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"70px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewQualityRealityTitleComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"70px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewQualityRealityTitle",
componentName:"airOverviewQualityRealityTitleComponent", 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"410px","height":"263px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"114px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewQualityRealityComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"263px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"114px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewQualityReality",
componentName:"airOverviewQualityRealityComponent", 
 },
},
tChartCurvex0x2: {
defaultStyle: {
            default: {"width":"416px","height":"235px","top":"742px","left":"16px","position":"unset","animationName":""},
            
            },
line: computed(() => activeChartTheme.value?.line),
 default: { 
 
seriesSetting:{"xAxisLabel":"resulttime_str","data":[{"name":"PM₂.₅","dataKey":"pm25","style":{"yAxisIndex":0,"lineStyle":{"color":"#3A9CFF","shadowBlur":0},"symbol":"none","areaStyle":{"color":{"colorStops":[{"offset":0,"color":"rgba(255,255,255,0)"},{"offset":0.9976454726210585,"color":"rgba(0,0,0,0)"}]}},"smooth":true,"itemStyle":{"borderWidth":2,"color":"rgba(58, 156, 255, 1)"}}},{"name":"PM₁₀","dataKey":"pm10","style":{"yAxisIndex":0,"lineStyle":{"color":"#13EB9C"},"smooth":true,"areaStyle":{"color":{"colorStops":[{"offset":0,"color":"rgba(255,255,255,0)"},{"offset":1,"color":"rgba(0,0,0,0)"}]}},"symbol":"none","itemStyle":{"color":"#13EB9C"}}},{"name":"SO₂","dataKey":"so2","style":{"yAxisIndex":0,"lineStyle":{"color":"#F4DC00"},"areaStyle":{"color":{"colorStops":[{"offset":0,"color":"rgba(255,255,255,0)"},{"offset":0.9976454726210585,"color":"rgba(0,0,0,0)"}]}},"symbol":"none","smooth":true,"itemStyle":{"color":"#F4DC00"}}},{"name":"CO","dataKey":"co","style":{"yAxisIndex":1,"lineStyle":{"color":"#EE70FF"},"smooth":true,"symbol":"none","areaStyle":{"color":{"colorStops":[{"offset":0,"color":"rgba(255,255,255,0)"},{"offset":1,"color":"rgba(0,0,0,0)"}]}},"itemStyle":{"color":"#EE70FF"}}},{"name":"O₃","dataKey":"o3","style":{"yAxisIndex":0,"lineStyle":{"color":"#FF8400"},"areaStyle":{"color":{"colorStops":[{"offset":0,"color":"rgba(255,255,255,0)"},{"offset":0.9976454726210585,"color":"rgba(0,0,0,0)"}]}},"symbol":"none","smooth":true,"itemStyle":{"color":"#FF8400"}}},{"name":"NO₂","dataKey":"no2","style":{"yAxisIndex":0,"lineStyle":{"color":"#754FFF"},"smooth":true,"symbol":"none","areaStyle":{"color":{"colorStops":[{"offset":0,"color":"rgba(255,255,255,0)"},{"offset":0.9976454726210585,"color":"rgba(0,0,0,0)"}]}},"itemStyle":{"color":"#754FFF"}}}]},
data:[{"resulttime":"2025-11-07 09","resulttime_str":"9时","model":"CMAQ","modeltime":"Fri Nov 07 00:00:00 CST 2025","region_code":"350700000000","point_code":"350700","region_name":"南平市","point_name":"南平市","point_type":"3","backtype":"0","pm25":"28","pm25_iaqi":"40","pm10":"39","pm10_iaqi":"39","co":"0.6","co_iaqi":"6","o3":"24","o3_iaqi":"8","o3_8":"21","o3_8_iaqi":"11","so2":"5","so2_iaqi":"2","no2":"23","no2_iaqi":"12","aqi":"40","primpollute":"--","aqilevel":"一级","aqilevelindex":"1","aqilevelstate":"优","step":"1","sys_create_time":"","sys_update_time":""}],
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"grid":{"containLabel":true,"top":"24%","bottom":"0%","right":"0%","left":"0%"},"legend":{"textStyle":{"color":"rgba(183, 227, 255, 1)","fontSize":"var(--business-text-size-12)"},"icon":"circle","itemWidth":8,"itemHeight":8,"padding":[0,5,5,5],"itemGap":16,"left":"center"},"xAxis":{"axisTick":{"show":true,"lineStyle":{"color":"rgba(186, 231, 255, 1)"}},"nameTextStyle":{"color":"rgba(51, 51, 51, 1)","fontSize":"var(--business-text-size-14)"},"axisLabel":{"fontSize":"var(--business-text-size-14)","color":"rgba(138, 210, 255, 0.8)","rotate":30},"axisLine":{"lineStyle":{"color":"var(--skin-font-color-40)","type":"solid"},"show":true},"splitLine":{"show":false},"boundaryGap":true},"backgroundColor":"rgba(0, 0, 0, 0)","title":{"show":false},"color":["#3A9CFF","#13EB9C","#F4DC00","#EE70FF","#FF8400","#754FFF"]})),
cStyle:{"wrapper":{"default":{"width":"416px","height":"235px","top":"742px","left":"16px","position":"unset","animationName":""}}},
yAxisLeftOptions:{"axisLabel":{"fontSize":"var(--business-text-size-14)","color":"rgba(138, 210, 255, 0.8)","margin":2},"nameTextStyle":{"color":"rgba(138, 210, 255, 0.8)","align":"center","padding":[0,0,0,30],"fontSize":"var(--business-text-size-12)"},"name":"μg/m³","nameLocation":"end","axisLine":{"show":true,"lineStyle":{"color":"var(--skin-font-color-40)","type":"solid","width":0}},"splitLine":{"lineStyle":{"type":"dashed","color":"var(--skin-font-color-40)","width":1},"show":true}},
yAxisRightOptions:{"name":"CO:mg/m³","nameTextStyle":{"color":"rgba(138, 210, 255, 0.8)","align":"center","padding":[0,24,0,0],"fontSize":"var(--business-text-size-12)"},"nameLocation":"end","axisLabel":{"color":"rgba(138, 210, 255, 0.8)","fontSize":"var(--business-text-size-14)","margin":5,"align":"left"},"axisLine":{"show":true,"lineStyle":{"color":"var(--skin-font-color-40)","type":"solid","width":0}},"splitLine":{"lineStyle":{"type":"dashed","color":"var(--skin-font-color-40)","width":1},"show":true},"boundaryGap":true}, 
 },
},
tComponentx0x3: {
defaultStyle: {
            default: {"width":"410px","height":"248px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"113px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewExcellentDaysComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"248px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"113px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewExcellentDays",
componentName:"airOverviewExcellentDaysComponent", 
 },
},
tComponentx0x4: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"68px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewExcellentDaysTitleComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"68px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewExcellentDaysTitle",
componentName:"airOverviewExcellentDaysTitleComponent", 
 },
},
tComponentx0x5: {
defaultStyle: {
            default: {"width":"411px","height":"37px","margin":"0 auto","position":"unset","left":"19px","top":"685px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"411px","height":"37px","margin":"0 auto","position":"unset","left":"19px","top":"685px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent",
pageId:"11294a0cd1654489a15355ed663e73ad_6",
pageCode:"titleFirstBg", 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"450px","height":"44px","position":"unset","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","background":"var(--business-query-bg)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"44px","position":"unset","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","background":"var(--business-query-bg)","animationName":""}}}, 
 },
},
tComponentx0x7: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"22px","top":"405px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewForecastDataTitleComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"22px","top":"405px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewForecastDataTitle",
componentName:"airOverviewForecastDataTitleComponent", 
 },
},
tComponentx0x8: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"436px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewPollutantCompareTitComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"436px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewPollutantCompareTit",
componentName:"airOverviewPollutantCompareTitComponent", 
 },
},
tComponentx0x9: {
defaultStyle: {
            default: {"width":"410px","height":"212px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"22px","top":"448px"},
            
            },
 default: { 
 
name:"airOverviewForecastDataComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"212px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"22px","top":"448px"}}},
src:"/lego-generated-apps/lego_file/app/src/71ed927f19ff41e78116c906842de342_19/index.html#/airOverviewForecastData",
componentName:"airOverviewForecastDataComponent", 
 },
},
tDatePickerx0x10: {
defaultStyle: {
            default: {"width":"412px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择时间",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimehour",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"412px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","fontSize":"var(--business-text-size-12)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-12)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"2025-11-07 09", 
 },
},
tTextUnitx0x11: {
defaultStyle: {
            default: {"width":"282px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","animationName":"","top":"686px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"282px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","animationName":"","top":"686px"}},"unit":{"default":{"fontSize":"var(--business-text-size-20)","fontFamily":"方正综艺","lineHeight":"32px"}},"text":{"default":{"lineHeight":"32px","fontSize":"var(--business-text-size-20)"}}},
content:"未来24小时污染变化",
unit:"",
showOverflowTooltip:true, 
 },
},
});
const setProvider = () => {

provide('airOverviewContentState', state);

watch(
  // 监听 regionCode 的变化
  () => global.regionaQuery.regionCode,
  (newRegionCode) => {
    // 处理行政区划代码变化：当 regionCode 有值时更新 pointCode
    if (newRegionCode) {
      state.pointCode = newRegionCode.slice(0, 6);  // 取前6位作为 pointCode
    }
  },
  {
    immediate: true
  }
);
};
const initPageData = () => {
function setPageContent() {
  let regionLevelCode = getRegionLevel(global.regionaQuery.regionCode);
  if (regionLevelCode === 'province') {
    state.isProvince = true;
    state.isMonthOrYear = false;
    state.isDayOrHour = false;
  } else {
    // 1、isProvince 行政区是否选中全省
    state.isProvince = false;
    // 2、设置内容显示变量值
    // setContentVisibleValue();
  }
  // 设置公共内容的位置
  // setCommonContentPosition();
}

setTimeout(() => {
  setPageContent();
});

// 监听行政区变化
watch(
  () => global.regionaQuery.regionCode,
  (regionCode) => {
    if (regionCode) {
      setPageContent();
    }
  }
);
};
const handleQuarterTimeValue = () => {
/**
 * 处理季度时间的时间值
 * quarterYear: 季度年份值
 * quarterValue : 季度数值1、2、3、4
 */
if (!state.quarterYear || !state.quarterValue) return;
state.timeValue = `${state.quarterYear}-${state.quarterValue}`;
sendTimeMes(false);
};
const sendTimeMes = (changeTimeType) => {
/**
 * changeTimeType: 是否改变了时间类型
 */
// 改变时间轴数据消息
rootData.rootSocket.emit(
  // 固定的消息名称，不能修改
  'message',
  {
    // 键名不能改 房间号，这里为默认值，一般无需修改，如果变量名称自己定义的则需要修改
    room: global.socketRoom,
    // 键名不能改 消息名称
    type: 'changeTimeAxisData',
    // 键名不能改 消息内容 对象格式
    data: {
      sourceType: 'airOverview',
      timeType: state.timeType,
      timeValue: state.timeValue,
    },
  }
);
// 改变时间类型发送消息-changeTimeType
if (changeTimeType) {
  // 给地图发消息-changeTimeType
  rootData.rootSocket.emit(
    // 固定的消息名称，不能修改
    'message',
    {
      room: global.socketRoom,
      type: 'changeTimeType',
      data: {
        TIME_TYPE: state.timeType,
        POLLUTE: global.air.centerIndexSelect,
        MONITORTIME: state.timeValue,
      },
    }
  );
} else {
  // 给地图发消息-changeTime
  rootData.rootSocket.emit(
    // 固定的消息名称，不能修改
    'message',
    {
      room: global.socketRoom,
      type: 'changeTime',
      data: {
        MONITORTIME: state.timeValue,
      },
    }
  );
}

// 判断是否是最新时间
if(state.timeType === 'hour') {
  state.isNewDate = state.timeValue === dateFormat(new Date(state.maxTimeValue), 'YYYY-MM-DD HH');
} else if (state.timeType === 'day') {
  state.isNewDate = state.timeValue === dateFormat(new Date(), 'YYYY-MM-DD');
}

};
const setTimeNormalValue = (timeValue) => {
state.timeValue = timeValue || '';
global.airOverview.rightView.timeValue = timeValue || ''
// if (state.timeType === 'quarter') {
//   state.quarterYear = handleStringSplit(timeValue || '', '-')[0] || '';
//   state.quarterValue = handleStringSplit(timeValue || '', '-')[1] || '';
// }
};
const judgeIsNewDate = () => {
// 判断是否是最新时间
state.isNewDate = state.maxTimeValue.includes(state.timeValue);
};
const reRenderChart = () => {
// 用于修改全局字号大小时，重新渲染图表
componentState.tChartCurvex0x2.default.yAxisLeftOptions.splitLine.show = false;

componentState.tChartCurvex0x2.default.yAxisLeftOptions.splitLine.show = true;

};
const ondateChange1734936115799 = (data) => {
// 设置变量值
state.timeValue = data;
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'airOverview.rightView.timeValue',
                    value:data,
                    data: {
                      airOverview:{rightView:{timeValue: data}}
                    },
                  });
// 执行自定义方法
sendTimeMes(false);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getChartData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"model":"CMAQ","pointCode":"state.pointCode","baseTime":"state.maxTimeValue","interfaceId":"4ce748e11cfae0c1260461ae87846abf"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"model":"CMAQ","pointCode":state.pointCode,"baseTime":state.maxTimeValue,"interfaceId":"4ce748e11cfae0c1260461ae87846abf"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"model":"CMAQ","pointCode":state.pointCode,"baseTime":state.maxTimeValue,"interfaceId":"4ce748e11cfae0c1260461ae87846abf"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getChartData'] = res.data;
                
     if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  let data = res?.data?.data || [];

  state.chartData = data;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TIME_TYPE":"state.timeType","interfaceId":"66ad2ebe9d660295568b05187f34e133"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.timeType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TIME_TYPE":state.timeType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.maxTimeValue = data?.MONITORTIME ? (state.timeType === 'hour' ? data?.MONITORTIME + ':00' : data?.MONITORTIME) : '';
  if (state.timeType === 'quarter') {
    state.maxQuarterYear = handleStringSplit(data?.MONITORTIME || '', '-')[0] || '';
  }
  setTimeNormalValue(data?.MONITORTIME);
  sendTimeMes(true);

  apiRegistry.getChartData.request();
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
// 监听变量，调取接口
watch(() => [state.pointCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getChartData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [state.timeType], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getLatestTime', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-lsAirQualityAnalysis', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setProvider();
/* 接收socket.io消息 */
const onSocketChange61b903fb28c14915bb38 = function (data) {
if(data.type === "changeTime"){
try{
// 执行自定义方法
setTimeNormalValue(data.data.MONITORTIME);
// 执行自定义方法
judgeIsNewDate();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange61b903fb28c14915bb38);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange61b903fb28c14915bb38);
});
/* 接收socket.io消息 */
const onSocketChange3fa5159d459a4e8aa609 = function (data) {
if(data.type === "changeFontSize"){
try{
// 执行自定义方法
reRenderChart();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange3fa5159d459a4e8aa609);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange3fa5159d459a4e8aa609);
});
/* 接收socket.io消息 */
const onSocketChange6ea771db87ba4cb8997c = function (data) {
if(data.type === "changeTheme"){
try{
// 执行自定义方法
reRenderChart();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange6ea771db87ba4cb8997c);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange6ea771db87ba4cb8997c);
});
onMounted(() => {
setPageScale('t-l-c-lsAirQualityAnalysis', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'air.timeType',
                    value:'hour',
                    data: {
                      air:{timeType: 'hour'}
                    },
                  });

// 隐藏元素并加动画
runAnimation('t-component-5aa4.688be3ff9', [""], 'none');

// 隐藏元素并加动画
runAnimation('t-rect-9f3a.24d71e31c', [""], 'none');
// 执行自定义方法
initPageData();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tChartCurvex0x2ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartCurvex0x2.default, componentState.tChartCurvex0x2?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tComponentx0x3ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3.default, componentState.tComponentx0x3?.[state.screenSize]));

 const tComponentx0x4ComputedData = computed(() => _.merge({}, componentState.tComponentx0x4.default, componentState.tComponentx0x4?.[state.screenSize]));

 const tComponentx0x5ComputedData = computed(() => _.merge({}, componentState.tComponentx0x5.default, componentState.tComponentx0x5?.[state.screenSize]));

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

 const tComponentx0x7ComputedData = computed(() => _.merge({}, componentState.tComponentx0x7.default, componentState.tComponentx0x7?.[state.screenSize]));

 const tComponentx0x8ComputedData = computed(() => _.merge({}, componentState.tComponentx0x8.default, componentState.tComponentx0x8?.[state.screenSize]));

 const tComponentx0x9ComputedData = computed(() => _.merge({}, componentState.tComponentx0x9.default, componentState.tComponentx0x9?.[state.screenSize]));

 const tDatePickerx0x10ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x10.default, componentState.tDatePickerx0x10?.[state.screenSize]));

 const tTextUnitx0x11ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x11.default, componentState.tTextUnitx0x11?.[state.screenSize]));

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
tComponentx0x0ComputedData,
tComponentx0x1ComputedData,
tChartCurvex0x2ComputedData,
tComponentx0x3ComputedData,
tComponentx0x4ComputedData,
tComponentx0x5ComputedData,
tRectx0x6ComputedData,
tComponentx0x7ComputedData,
tComponentx0x8ComputedData,
tComponentx0x9ComputedData,
tDatePickerx0x10ComputedData,
tTextUnitx0x11ComputedData,
ondateChange1734936115799,
};
},
}
</script>

<style scoped>
.t-l-c-lsAirQualityAnalysis {
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
height: 1015px;
width: 450px;
background-color: rgba(0,0,0,0);
}
.t-l-c-lsAirQualityAnalysis .lsAirQualityAnalysis-t-component-0-0 {
position: absolute !important;
top: 70px;
left: 20px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-lsAirQualityAnalysis .lsAirQualityAnalysis-t-component-0-1 {
position: absolute !important;
top: 114px;
left: 20px;
width: 410px;
height: 263px;
pointer-events: auto;
}

.t-l-c-lsAirQualityAnalysis .lsAirQualityAnalysis-t-chart-curve-0-2 {
position: absolute !important;
top: 742px;
left: 16px;
width: 416px;
height: 235px;
pointer-events: auto;
}

.t-l-c-lsAirQualityAnalysis .lsAirQualityAnalysis-t-component-0-3 {
position: absolute !important;
top: 113px;
left: 20px;
width: 410px;
height: 248px;
pointer-events: auto;
}

.t-l-c-lsAirQualityAnalysis .lsAirQualityAnalysis-t-component-0-4 {
position: absolute !important;
top: 68px;
left: 20px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-lsAirQualityAnalysis .lsAirQualityAnalysis-t-component-0-5 {
position: absolute !important;
top: 685px;
left: 19px;
width: 411px;
height: 37px;
pointer-events: auto;
}

.t-l-c-lsAirQualityAnalysis .lsAirQualityAnalysis-t-rect-0-6 {
position: absolute !important;
top: 0px;
left: 0px;
width: 450px;
height: 44px;
pointer-events: auto;
}

.t-l-c-lsAirQualityAnalysis .lsAirQualityAnalysis-t-component-0-7 {
position: absolute !important;
top: 405px;
left: 22px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-lsAirQualityAnalysis .lsAirQualityAnalysis-t-component-0-8 {
position: absolute !important;
top: 436px;
left: 20px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-lsAirQualityAnalysis .lsAirQualityAnalysis-t-component-0-9 {
position: absolute !important;
top: 448px;
left: 22px;
width: 410px;
height: 212px;
pointer-events: auto;
}

.t-l-c-lsAirQualityAnalysis .lsAirQualityAnalysis-t-date-picker-0-10 {
position: absolute !important;
top: 0px;
left: 23px;
width: 412px;
height: 32px;
pointer-events: auto;
}

.t-l-c-lsAirQualityAnalysis .lsAirQualityAnalysis-t-text-unit-0-11 {
position: absolute !important;
top: 686px;
left: 48px;
width: 282px;
height: 32px;
pointer-events: auto;
}
</style>
