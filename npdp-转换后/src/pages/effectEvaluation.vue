<template>
  <div id="t-l-c-effectEvaluation" class="t-l-c-effectEvaluation" ><t-select id="t-select-a8fc.f5af44934" class="effectEvaluation-t-select-0-0"  :active-value="replaceCssVariables(filterData(state.dateType, componentPropBindingMap?.['t-select-a8fc.f5af44934']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x0ComputedData.options" :alias="tSelectx0x0ComputedData.alias" :multiple="tSelectx0x0ComputedData.multiple" :placeholder="tSelectx0x0ComputedData.placeholder" :clearable="tSelectx0x0ComputedData.clearable" :disabled="tSelectx0x0ComputedData.disabled" :name="tSelectx0x0ComputedData.name" :autocomplete="tSelectx0x0ComputedData.autocomplete" :filterable="tSelectx0x0ComputedData.filterable" :no-match-text="tSelectx0x0ComputedData.no-match-text" :no-data-text="tSelectx0x0ComputedData.no-data-text" :c-style="tSelectx0x0ComputedData.cStyle" @change="onchange1766285358242_0_0"></t-select><t-select id="t-select-0daf.33ff8a141" class="effectEvaluation-t-select-0-1"  :active-value="replaceCssVariables(filterData(state.stationCode, componentPropBindingMap?.['t-select-0daf.33ff8a141']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.stationList, componentPropBindingMap?.['t-select-0daf.33ff8a141']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x1ComputedData.alias" :multiple="tSelectx0x1ComputedData.multiple" :placeholder="tSelectx0x1ComputedData.placeholder" :clearable="tSelectx0x1ComputedData.clearable" :disabled="tSelectx0x1ComputedData.disabled" :name="tSelectx0x1ComputedData.name" :autocomplete="tSelectx0x1ComputedData.autocomplete" :filterable="tSelectx0x1ComputedData.filterable" :no-match-text="tSelectx0x1ComputedData.no-match-text" :no-data-text="tSelectx0x1ComputedData.no-data-text" :c-style="tSelectx0x1ComputedData.cStyle" @change="onchange1766285568975_0_0"></t-select><t-component id="t-component-4666.cb9a914ee" class="effectEvaluation-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :loading="tComponentx0x2ComputedData.loading" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName" :page-id="tComponentx0x2ComputedData.pageId" :page-code="tComponentx0x2ComputedData.pageCode"></t-component><t-component id="t-component-3fc8.40c9a9fd1" class="effectEvaluation-t-component-0-3"  :name="tComponentx0x3ComputedData.name" :loading="tComponentx0x3ComputedData.loading" :c-style="tComponentx0x3ComputedData.cStyle" :src="tComponentx0x3ComputedData.src" :component-name="tComponentx0x3ComputedData.componentName" :page-id="tComponentx0x3ComputedData.pageId" :page-code="tComponentx0x3ComputedData.pageCode"></t-component><t-text-unit id="t-text-unit-d5c0.d98c4fced" class="effectEvaluation-t-text-unit-0-4"  :c-style="tTextUnitx0x4ComputedData.cStyle" :content="tTextUnitx0x4ComputedData.content" :unit="tTextUnitx0x4ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x4ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-8b0e.4ade1c818" class="effectEvaluation-t-text-unit-0-5"  :c-style="tTextUnitx0x5ComputedData.cStyle" :content="replaceCssVariables(filterData(state.title, componentPropBindingMap?.['t-text-unit-8b0e.4ade1c818']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x5ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x5ComputedData.showOverflowTooltip"></t-text-unit><t-chart-curve v-if="state.showChart === true" id="t-chart-curve-a33d.bbf7afc9d" class="effectEvaluation-t-chart-curve-0-6"  :series-setting="tChartCurvex0x6ComputedData.seriesSetting" :data="replaceCssVariables(filterData(state.chartList, componentPropBindingMap?.['t-chart-curve-a33d.bbf7afc9d']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tChartCurvex0x6ComputedData.options" :c-style="tChartCurvex0x6ComputedData.cStyle" :y-axis-left-options="tChartCurvex0x6ComputedData.yAxisLeftOptions" :y-axis-right-options="tChartCurvex0x6ComputedData.yAxisRightOptions" :line="componentState.tChartCurvex0x6.line"></t-chart-curve><t-date-picker v-if="state.dateType === 'hour'" id="t-date-picker-3233.c24b9318" class="effectEvaluation-t-date-picker-0-7"  :placeholder="tDatePickerx0x7ComputedData.placeholder" :start-placeholder="tDatePickerx0x7ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x7ComputedData.endPlaceholder" :type="tDatePickerx0x7ComputedData.type" :clearable="tDatePickerx0x7ComputedData.clearable" :range-separator="tDatePickerx0x7ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.dateValue, componentPropBindingMap?.['t-date-picker-3233.c24b9318']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x7ComputedData.separator" :readonly="tDatePickerx0x7ComputedData.readonly" :editable="tDatePickerx0x7ComputedData.editable" :c-style="tDatePickerx0x7ComputedData.cStyle" :is-disabled-front="tDatePickerx0x7ComputedData.isDisabledFront" :disabled-date="tDatePickerx0x7ComputedData.disabledDate" @date-change="ondateChange1766461275261_0_0"></t-date-picker><t-date-picker v-if="state.dateType === '5minute'" id="t-date-picker-80d7.916f1e9ac" class="effectEvaluation-t-date-picker-0-8"  :placeholder="tDatePickerx0x8ComputedData.placeholder" :start-placeholder="tDatePickerx0x8ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x8ComputedData.endPlaceholder" :type="tDatePickerx0x8ComputedData.type" :clearable="tDatePickerx0x8ComputedData.clearable" :range-separator="tDatePickerx0x8ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.dateValue, componentPropBindingMap?.['t-date-picker-80d7.916f1e9ac']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x8ComputedData.separator" :readonly="tDatePickerx0x8ComputedData.readonly" :editable="tDatePickerx0x8ComputedData.editable" :c-style="tDatePickerx0x8ComputedData.cStyle" :is-disabled-front="tDatePickerx0x8ComputedData.isDisabledFront" :disabled-date="tDatePickerx0x8ComputedData.disabledDate" @date-change="ondateChange1766285668573_0_0"></t-date-picker><t-text id="t-text-eea3.925b992b9" class="effectEvaluation-t-text-0-9"  :label="tTextx0x9ComputedData.label" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle" @click="onclick1766368148348"></t-text><t-list-card-rate id="t-list-card-rate-22cf.23be340b2" class="effectEvaluation-t-list-card-rate-0-10"  :data="replaceCssVariables(filterData(state.pollutantsList, componentPropBindingMap?.['t-list-card-rate-22cf.23be340b2']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :status-list="tListCardRatex0x10ComputedData.statusList" :data-alias="tListCardRatex0x10ComputedData.dataAlias" :c-style="tListCardRatex0x10ComputedData.cStyle"></t-list-card-rate></div>
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
import { TChartCurve, TComponent, TDatePicker, TListCardRate, TSelect, TText, TTextUnit } from '@ths/design';

export default {
  components: {
    TChartCurve,
    TComponent,
    TDatePicker,
    TListCardRate,
    TSelect,
    TText,
    TTextUnit,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-select-a8fc.f5af44934":{"attributeName":"tSelectx0x0","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-select-0daf.33ff8a141":{"attributeName":"tSelectx0x1","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-component-4666.cb9a914ee":{"attributeName":"tComponentx0x2","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-3fc8.40c9a9fd1":{"attributeName":"tComponentx0x3","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-unit-d5c0.d98c4fced":{"attributeName":"tTextUnitx0x4","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-8b0e.4ade1c818":{"attributeName":"tTextUnitx0x5","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-chart-curve-a33d.bbf7afc9d":{"attributeName":"tChartCurvex0x6","seriesSetting":{"filters":[]},"data":{"filters":[]},"options":{"filters":[]},"cStyle":{"filters":[]},"yAxisLeftOptions":{"filters":[]},"yAxisRightOptions":{"filters":[]}},"t-date-picker-3233.c24b9318":{"attributeName":"tDatePickerx0x7","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-date-picker-80d7.916f1e9ac":{"attributeName":"tDatePickerx0x8","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-text-eea3.925b992b9":{"attributeName":"tTextx0x9","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-rate-22cf.23be340b2":{"attributeName":"tListCardRatex0x10","data":{"filters":[]},"statusList":{"filters":[]},"dataAlias":{"filters":[]},"cStyle":{"filters":[]}}};
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
   showChart: true,
   endTime: "",
   startTime: "",
   dialogTitle: "国控站空气质量变化趋势",
   title: "近2小时变化趋势",
   stationType: "",
   pointType: "",
   stationList: [],
   chartList: [],
   pollutantsList: [{"name":"PM₂.₅","value":"-","unit":"μg/m³","rateName":"环比","rate":"-","status":"-"},{"name":"PM₁₀","value":"-","unit":"μg/m³","rateName":"环比","rate":"-","status":"-"},{"name":"SO₂","value":"-","unit":"μg/m³","rateName":"环比","rate":"-","status":"-"},{"name":"NO₂","value":"-","unit":"μg/m³","rateName":"环比","rate":"-","status":"-"},{"name":"O₃","value":"-","unit":"μg/m³","rateName":"环比","rate":"-","status":"-"},{"name":"CO","value":"-","unit":"mg/m³","rateName":"环比","rate":"-","status":"-"}],
   stationCode: "",
   dateValue: "",
   dateType: "5minute",
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
tSelectx0x0: {
defaultStyle: {
            default: {"width":"118px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},
            
            },
 default: { 
 
activeValue:"5minute",
options:[{"label":"五分钟数据","value":"5minute","disabled":false},{"label":"小时数据","value":"hour","disabled":false}],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:false,
placeholder:"",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"118px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tSelectx0x1: {
defaultStyle: {
            default: {"width":"107px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},
            
            },
 default: { 
 
activeValue:"",
options:[],
alias:{"label":"POINT_NAME","value":"POINT_CODE","disabled":"disabled"},
multiple:false,
placeholder:"",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"107px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"400px","height":"32px","margin":"0 auto","top":"48px","left":"25px","position":"unset"},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"400px","height":"32px","margin":"0 auto","top":"48px","left":"25px","position":"unset"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent",
pageId:"11294a0cd1654489a15355ed663e73ad_6",
pageCode:"titleFirstBg", 
 },
},
tComponentx0x3: {
defaultStyle: {
            default: {"width":"400px","height":"32px","margin":"0 auto","top":"340px","left":"26px","position":"unset","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"400px","height":"32px","margin":"0 auto","top":"340px","left":"26px","position":"unset","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent",
pageId:"11294a0cd1654489a15355ed663e73ad_6",
pageCode:"titleFirstBg", 
 },
},
tTextUnitx0x4: {
defaultStyle: {
            default: {"width":"244px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","animationName":"","top":"49px","left":"56px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"244px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","animationName":"","top":"49px","left":"56px"}},"unit":{"default":{"fontSize":"var(--business-text-size-20)","fontFamily":"方正综艺","lineHeight":"32px"}},"text":{"default":{"lineHeight":"32px","fontSize":"var(--business-text-size-20)"}}},
content:"主要污染物变化",
unit:"",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x5: {
defaultStyle: {
            default: {"width":"333px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","animationName":"","top":"341px","left":"57px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"333px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","animationName":"","top":"341px","left":"57px"}},"unit":{"default":{"fontSize":"var(--business-text-size-20)","fontFamily":"方正综艺","lineHeight":"32px"}},"text":{"default":{"lineHeight":"32px","fontSize":"var(--business-text-size-20)"}}},
content:"近2小时变化趋势",
unit:"",
showOverflowTooltip:true, 
 },
},
tChartCurvex0x6: {
defaultStyle: {
            default: {"width":"416px","height":"285px","top":"390px","left":"17px","position":"unset","animationName":""},
            
            },
line: computed(() => activeChartTheme.value?.line),
 default: { 
 
seriesSetting:{"xAxisLabel":"MONITORTIME_NAME","data":[{"name":"PM₂.₅","dataKey":"PM25","style":{"yAxisIndex":0,"lineStyle":{"color":"#3A9CFF","shadowBlur":0},"symbol":"none","areaStyle":{"color":{"colorStops":[{"offset":0,"color":"rgba(255,255,255,0)"},{"offset":0.9976454726210585,"color":"rgba(0,0,0,0)"}]}},"smooth":true,"itemStyle":{"borderWidth":2,"color":"rgba(58, 156, 255, 1)"}}},{"name":"PM₁₀","dataKey":"PM10","style":{"yAxisIndex":0,"lineStyle":{"color":"#13EB9C"},"smooth":true,"areaStyle":{"color":{"colorStops":[{"offset":0,"color":"rgba(255,255,255,0)"},{"offset":1,"color":"rgba(0,0,0,0)"}]}},"symbol":"none","itemStyle":{"color":"#13EB9C"}}},{"name":"SO₂","dataKey":"SO2","style":{"yAxisIndex":0,"lineStyle":{"color":"#F4DC00"},"areaStyle":{"color":{"colorStops":[{"offset":0,"color":"rgba(255,255,255,0)"},{"offset":0.9976454726210585,"color":"rgba(0,0,0,0)"}]}},"symbol":"none","smooth":true,"itemStyle":{"color":"#F4DC00"}}},{"name":"CO","dataKey":"CO","style":{"yAxisIndex":1,"lineStyle":{"color":"#EE70FF"},"smooth":true,"symbol":"none","areaStyle":{"color":{"colorStops":[{"offset":0,"color":"rgba(255,255,255,0)"},{"offset":1,"color":"rgba(0,0,0,0)"}]}},"itemStyle":{"color":"#EE70FF"}}},{"name":"O₃","dataKey":"O3","style":{"yAxisIndex":0,"lineStyle":{"color":"#FF8400"},"areaStyle":{"color":{"colorStops":[{"offset":0,"color":"rgba(255,255,255,0)"},{"offset":0.9976454726210585,"color":"rgba(0,0,0,0)"}]}},"symbol":"none","smooth":true,"itemStyle":{"color":"#FF8400"}}},{"name":"NO₂","dataKey":"NO2","style":{"yAxisIndex":0,"lineStyle":{"color":"#754FFF"},"smooth":true,"symbol":"none","areaStyle":{"color":{"colorStops":[{"offset":0,"color":"rgba(255,255,255,0)"},{"offset":0.9976454726210585,"color":"rgba(0,0,0,0)"}]}},"itemStyle":{"color":"#754FFF"}}}]},
data:[],
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"grid":{"containLabel":true,"top":"24%","bottom":"0%","right":"6%","left":"4%"},"legend":{"textStyle":{"color":"rgba(183, 227, 255, 1)","fontSize":"var(--business-text-size-12)"},"icon":"circle","itemWidth":8,"itemHeight":8,"padding":[0,5,5,5],"itemGap":16,"left":"center"},"xAxis":{"axisTick":{"show":true,"lineStyle":{"color":"rgba(186, 231, 255, 1)"}},"nameTextStyle":{"color":"rgba(51, 51, 51, 1)","fontSize":"var(--business-text-size-14)"},"axisLabel":{"fontSize":"var(--business-text-size-14)","color":"rgba(138, 210, 255, 0.8)","rotate":45},"axisLine":{"lineStyle":{"color":"var(--skin-font-color-40)","type":"solid"},"show":true},"splitLine":{"show":false},"boundaryGap":true},"backgroundColor":"rgba(0, 0, 0, 0)","title":{"show":false},"color":["#3A9CFF","#13EB9C","#F4DC00","#EE70FF","#FF8400","#754FFF"]})),
cStyle:{"wrapper":{"default":{"width":"416px","height":"285px","top":"390px","left":"17px","position":"unset","animationName":""}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}},
yAxisLeftOptions:{"axisLabel":{"fontSize":"var(--business-text-size-14)","color":"rgba(138, 210, 255, 0.8)","margin":2},"nameTextStyle":{"fontSize":"var(--business-text-size-12)","color":"rgba(138, 210, 255, 0.8)","align":"center","padding":[0,0,0,30]},"name":"μg/m³","nameLocation":"end","axisLine":{"show":true,"lineStyle":{"color":"rgba(255, 255, 255, 0.4)","type":"solid"}},"splitLine":{"lineStyle":{"type":"dashed","color":"var(--skin-font-color-40)"},"show":true}},
yAxisRightOptions:{"name":"CO:mg/m³","nameTextStyle":{"color":"rgba(138, 210, 255, 0.8)","align":"center","padding":[0,24,0,0],"fontSize":"var(--business-text-size-12)"},"nameLocation":"end","axisLabel":{"color":"rgba(138, 210, 255, 0.8)","fontSize":"var(--business-text-size-14)","margin":5,"align":"left"},"axisLine":{"show":true,"lineStyle":{"color":"rgba(255, 255, 255, 0.4)","type":"solid"}},"boundaryGap":true}, 
 },
},
tDatePickerx0x7: {
defaultStyle: {
            default: {"width":"157px","height":"32px","position":"unset","left":"151px","top":"0px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimehour",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"157px","height":"32px","position":"unset","left":"151px","top":"0px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tDatePickerx0x8: {
defaultStyle: {
            default: {"width":"157px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimeminute",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"157px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","fontSize":"var(--business-text-size-12)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-12)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"width":"113px","height":"32px","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","lineHeight":"32px","textAlign":"right","position":"unset","left":"308px","top":"47px","animationName":""},
            
            },
 default: { 
 
label:"查看更多>>",
editable:false,
cStyle:{"wrapper":{"default":{"width":"113px","height":"32px","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","lineHeight":"32px","textAlign":"right","position":"unset","left":"308px","top":"47px","animationName":""}}}, 
 },
},
tListCardRatex0x10: {
defaultStyle: {
            default: {"width":"429px","height":"242px","padding":"8px 8px 0 0"},
            
            },
 default: { 
 
data:[{"name":"PM₂.₅","value":"-","unit":"μg/m³","rateName":"环比","rate":"-","status":"-"},{"name":"PM₁₀","value":"-","unit":"μg/m³","rateName":"环比","rate":"-","status":"-"},{"name":"SO₂","value":"-","unit":"μg/m³","rateName":"环比","rate":"-","status":"-"},{"name":"NO₂","value":"-","unit":"μg/m³","rateName":"环比","rate":"-","status":"-"},{"name":"O₃","value":"-","unit":"μg/m³","rateName":"环比","rate":"-","status":"-"},{"name":"CO","value":"-","unit":"mg/m³","rateName":"环比","rate":"-","status":"-"}],
statusList:[{"name":"上升","url":"assets/images/2023-01-10/8945b3267f564f9da9779cad921a1013.png"},{"name":"下降","url":"assets/images/2023-01-10/f9fc0c7289e24c7f90193ea2aeaf8524.png"},{"name":"持平","url":"assets/images/2025-05-08/8fd07b7c614e49ba92cbcd6e324ebff5.svg"}],
dataAlias:{"name":"name","currentValue":"value","unit":"unit","rateName":"rateName","rateValue":"rate","rateUnit":"rateUnit","rateStatus":"status"},
cStyle:{"wrapper":{"default":{"width":"429px","height":"242px","padding":"8px 8px 0 0"}},"itemWrapper":{"default":{"width":"200px","height":"70px","background":"url(assets/images/2023-01-28/65a379ea5abc442f8dd18fc27d03c61d.png)","backgroundPosition":"center center","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","paddingLeft":"8px","paddingRight":"8px"}},"rateValue":{"default":{"maxWidth":"50px","fontSize":"var(--business-num-size-18)","color":"var(--business-white)","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"40px","overflow":"hidden","lineHeight":"var(--business-num-size-18)"}},"value":{"default":{"maxWidth":"50px","fontSize":"var(--business-num-size-18)","color":"var(--business-white)","min-width":"auto","max-width":"50px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","lineHeight":"var(--business-num-size-18)"}},"name":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-text-avianize)"}},"rateName":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-text-avianize)"}},"unit":{"default":{"fontSize":"var(--business-text-size-12)","color":"var(--business-text-avianize)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","max-width":"45px","lineHeight":"normal"}}}, 
 },
},
});
const handleDateType = () => {
if(state.dateType === '5minute'){
  state.title = '近2小时变化趋势'
}else if(state.dateType === 'hour'){
  state.title = '近24小时变化趋势'
}
async function getData(){
  await apiRegistry.getLatestTime.request();
  await apiRegistry.getPollutantsList.request();
  await apiRegistry.getChartData.request();
}
getData()

};
const handleStation = (item) => {
state.stationCode = item.POINT_CODE
state.stationType = item.POINT_TYPE
global.airGlobalVariables.effectEvaluation.pointType = item.POINT_TYPE
state.dialogTitle = `${filters.pointType(item.POINT_TYPE)}站空气质量变化趋势`;
async function getData() {
  await apiRegistry.getLatestTime.request();
  await apiRegistry.getPollutantsList.request();
  await apiRegistry.getChartData.request();
}
getData()
};
const initData = () => {
async function getData(){
  await apiRegistry.getStationList.request();
  await apiRegistry.getLatestTime.request();
  await apiRegistry.getPollutantsList.request();
  await apiRegistry.getChartData.request();
}
getData()
};
const changeTime = () => {

state.endTime = state.dateValue
if (state.dateType === '5minute') {
  let endTime = state.endTime + ':00'
  state.startTime = getPrevTime(endTime, 'minute').slice(0, 16)
} else if (state.dateType === 'hour') {
  let endTime = state.endTime + ':00:00'
  state.startTime = getPrevTime(endTime, 'minute').slice(0, 13)
}

};
const test = () => {
console.log(componentState.tChartCurvex0x6, '双轴图')
};
const reRenderChart = () => {
// state.showChart = false;
// setTimeout(() => {
//   state.showChart = true;
// }, 1000);

// 用于修改全局字号大小时，重新渲染图表
componentState.tChartCurvex0x6.default.yAxisLeftOptions.splitLine.show = false;

componentState.tChartCurvex0x6.default.yAxisLeftOptions.splitLine.show = true;
};
const onchange1766285358242_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.dateType = value;
// 执行自定义方法
handleDateType();
};
const onchange1766285568975_0_0 = (value,selectValueArr,selectValueItem) => {
// 执行自定义方法
handleStation(selectValueItem);
};
const ondateChange1766461275261_0_0 = (data) => {
// 设置变量值
state.dateValue = data;
// 事件交互-请求调用接口
apiRegistry.getPollutantsList.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
// 事件交互-请求调用接口
apiRegistry.getChartData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const ondateChange1766285668573_0_0 = (data) => {
// 设置变量值
state.dateValue = data;
// 执行自定义方法
changeTime();
// 事件交互-请求调用接口
apiRegistry.getPollutantsList.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
// 事件交互-请求调用接口
apiRegistry.getChartData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const onclick1766368148348 = () => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "createDialog", // 消息名称
data: {"params":{"contentComName":"zywrwbhqsDialogComponent","maxWidth":"1600px","maxHeight":"997px","minWidth":"1000px","minHeight":"700px","title":state.dialogTitle}}, // 发送的数据
});
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getPollutantsList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.stationCode","POINT_TYPE":"state.stationType","TIME_TYPE":"state.dateType","MONITORTIME":"state.dateValue","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"d9a5fba06e3f6deb5e0a71defc09eeea"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.stationCode,"POINT_TYPE":state.stationType,"TIME_TYPE":state.dateType,"MONITORTIME":state.dateValue,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"d9a5fba06e3f6deb5e0a71defc09eeea"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.stationCode,"POINT_TYPE":state.stationType,"TIME_TYPE":state.dateType,"MONITORTIME":state.dateValue,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"d9a5fba06e3f6deb5e0a71defc09eeea"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPollutantsList'] = res.data;
                
     function handleStatus(value) {
  let status = '-'
  if (value > 0) {
    status = '上升'
  } else if (value < 0){
    status = '下降'
  } else if(value == 0){
    status = '持平'
  }
  return status
}
const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  const { PM25, PM10, SO2, NO2, CO, O3, PREV_PM25, PM25_CHAIN_RATIO,  PREV_PM10, PM10_CHAIN_RATIO, PREV_SO2, SO2_CHAIN_RATIO,  PREV_NO2, NO2_CHAIN_RATIO,  PREV_CO, CO_CHAIN_RATIO, PREV_O3, O3_CHAIN_RATIO} = data[0]
  state.pollutantsList = [
    {
      "name": "PM₂.₅",
      "value": PM25 || '-',
      "unit": "μg/m³",
      "rateName": "环比",
      "rate": PREV_PM25 || '-',
      "status": handleStatus(PM25_CHAIN_RATIO)
    },
    {
      "name": "PM₁₀",
      "value": PM10 || '-',
      "unit": "μg/m³",
      "rateName": "环比",
      "rate": PREV_PM10 || '-',
      "status": handleStatus(PM10_CHAIN_RATIO)
    },
    {
      "name": "SO₂",
      "value": SO2 || '-',
      "unit": "μg/m³",
      "rateName": "环比",
      "rate": PREV_SO2 || '-',
      "status": handleStatus(SO2_CHAIN_RATIO)
    },
    {
      "name": "NO₂",
      "value": NO2 || '-',
      "unit": "μg/m³",
      "rateName": "环比",
      "rate": PREV_NO2 || '-',
      "status": handleStatus(NO2_CHAIN_RATIO)
    },
    {
      "name": "O₃",
      "value": O3 || '-',
      "unit": "μg/m³",
      "rateName": "环比",
      "rate": PREV_O3 || '-',
      "status": handleStatus(O3_CHAIN_RATIO)
    },
    {
      "name": "CO",
      "value": CO || '-',
      "unit": "mg/m³",
      "rateName": "环比",
      "rate": PREV_CO || '-',
      "status": handleStatus(CO_CHAIN_RATIO)
    }
  ]
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
 getChartData1: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"model":"CMAQ","pointCode":"state.stationCode","baseTime":"state.dateValue","interfaceId":"4ce748e11cfae0c1260461ae87846abf"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"model":"CMAQ","pointCode":state.stationCode,"baseTime":state.dateValue,"interfaceId":"4ce748e11cfae0c1260461ae87846abf"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"model":"CMAQ","pointCode":state.stationCode,"baseTime":state.dateValue,"interfaceId":"4ce748e11cfae0c1260461ae87846abf"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getChartData1'] = res.data;
                
     if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  let data = res?.data?.data || [];
  state.chartList = data;
}else{
   state.chartList = []
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
 getStationList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_TYPE":"0","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"48f27a45ab6772cad3e379bff43bc69d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_TYPE":"0","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"48f27a45ab6772cad3e379bff43bc69d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_TYPE":"0","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"48f27a45ab6772cad3e379bff43bc69d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getStationList'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.stationList = data
  state.stationCode = data[0].POINT_CODE
  state.stationType = data[0].POINT_TYPE
  global.airGlobalVariables.effectEvaluation.pointType = data[0].POINT_TYPE
  state.dialogTitle = `${filters.pointType(data[0].POINT_TYPE)}站空气质量变化趋势`;
}else{
  state.stationList = []
   state.stationCode = ''
   state.stationType = ''
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
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_TYPE":"state.stationType","TIME_TYPE":"state.dateType","interfaceId":"66ad2ebe9d660295568b05187f34e133"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_TYPE":state.stationType,"TIME_TYPE":state.dateType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_TYPE":state.stationType,"TIME_TYPE":state.dateType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
 state.dateValue = data.MONITORTIME
 state.endTime = data.MONITORTIME
 if(state.dateType === '5minute'){
   let endTime = state.endTime + ':00'
   state.startTime = getPrevTime(endTime, 'minute').slice(0,16)
 }else if(state.dateType === 'hour'){
   let endTime = state.endTime + ':00:00'
   state.startTime = getPrevTime(endTime, 'minute').slice(0,13)
 }
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
 getChartData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"START_TIME":"state.startTime","END_TIME":"state.endTime","POINT_CODE":"state.stationCode","POINT_TYPE":"state.stationType","TIME_TYPE":"state.dateType","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"d9a5fba06e3f6deb5e0a71defc09eeea"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"START_TIME":state.startTime,"END_TIME":state.endTime,"POINT_CODE":state.stationCode,"POINT_TYPE":state.stationType,"TIME_TYPE":state.dateType,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"d9a5fba06e3f6deb5e0a71defc09eeea"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"START_TIME":state.startTime,"END_TIME":state.endTime,"POINT_CODE":state.stationCode,"POINT_TYPE":state.stationType,"TIME_TYPE":state.dateType,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"d9a5fba06e3f6deb5e0a71defc09eeea"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getChartData'] = res.data;
                
     if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  let data = res?.data?.data || [];
  state.chartList = data;
}else{
   state.chartList = []
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
watch(() => [global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getStationList', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-effectEvaluation', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initData();
/* 接收socket.io消息 */
const onSocketChange20f90092be0249afa0c9 = function (data) {
if(data.type === "changeTheme"){
try{
// 执行自定义方法
reRenderChart();
// 执行自定义方法
test();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange20f90092be0249afa0c9);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange20f90092be0249afa0c9);
});
/* 接收socket.io消息 */
const onSocketChange21372695029c44a8beae = function (data) {
if(data.type === "changeFontSize"){
try{
// 执行自定义方法
reRenderChart();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange21372695029c44a8beae);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange21372695029c44a8beae);
});
onMounted(() => {
setPageScale('t-l-c-effectEvaluation', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tSelectx0x0ComputedData = computed(() => _.merge({}, componentState.tSelectx0x0.default, componentState.tSelectx0x0?.[state.screenSize]));

 const tSelectx0x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x1.default, componentState.tSelectx0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tComponentx0x3ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3.default, componentState.tComponentx0x3?.[state.screenSize]));

 const tTextUnitx0x4ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x4.default, componentState.tTextUnitx0x4?.[state.screenSize]));

 const tTextUnitx0x5ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x5.default, componentState.tTextUnitx0x5?.[state.screenSize]));

 const tChartCurvex0x6ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartCurvex0x6.default, componentState.tChartCurvex0x6?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tDatePickerx0x7ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x7.default, componentState.tDatePickerx0x7?.[state.screenSize]));

 const tDatePickerx0x8ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x8.default, componentState.tDatePickerx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tListCardRatex0x10ComputedData = computed(() => _.merge({}, componentState.tListCardRatex0x10.default, componentState.tListCardRatex0x10?.[state.screenSize]));

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
tSelectx0x0ComputedData,
tSelectx0x1ComputedData,
tComponentx0x2ComputedData,
tComponentx0x3ComputedData,
tTextUnitx0x4ComputedData,
tTextUnitx0x5ComputedData,
tChartCurvex0x6ComputedData,
tDatePickerx0x7ComputedData,
tDatePickerx0x8ComputedData,
tTextx0x9ComputedData,
tListCardRatex0x10ComputedData,
onchange1766285358242_0_0,
onchange1766285568975_0_0,
ondateChange1766461275261_0_0,
ondateChange1766285668573_0_0,
onclick1766368148348,
};
},
}
</script>

<style scoped>
.t-l-c-effectEvaluation {
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
width: 450px;
height: 770px;
background-color: rgba(0, 0, 0, 0);
}
.t-l-c-effectEvaluation .effectEvaluation-t-select-0-0 {
position: absolute !important;
top: 0px;
left: 25px;
width: 118px;
height: 32px;
pointer-events: auto;
}

.t-l-c-effectEvaluation .effectEvaluation-t-select-0-1 {
position: absolute !important;
top: 0px;
left: 317px;
width: 107px;
height: 32px;
pointer-events: auto;
}

.t-l-c-effectEvaluation .effectEvaluation-t-component-0-2 {
position: absolute !important;
top: 48px;
left: 25px;
width: 400px;
height: 32px;
pointer-events: auto;
}

.t-l-c-effectEvaluation .effectEvaluation-t-component-0-3 {
position: absolute !important;
top: 340px;
left: 26px;
width: 400px;
height: 32px;
pointer-events: auto;
}

.t-l-c-effectEvaluation .effectEvaluation-t-text-unit-0-4 {
position: absolute !important;
top: 49px;
left: 56px;
width: 244px;
height: 32px;
pointer-events: auto;
}

.t-l-c-effectEvaluation .effectEvaluation-t-text-unit-0-5 {
position: absolute !important;
top: 341px;
left: 57px;
width: 333px;
height: 32px;
pointer-events: auto;
}

.t-l-c-effectEvaluation .effectEvaluation-t-chart-curve-0-6 {
position: absolute !important;
top: 390px;
left: 17px;
width: 416px;
height: 285px;
pointer-events: auto;
}

.t-l-c-effectEvaluation .effectEvaluation-t-date-picker-0-7 {
position: absolute !important;
top: 0px;
left: 151px;
width: 157px;
height: 32px;
pointer-events: auto;
}

.t-l-c-effectEvaluation .effectEvaluation-t-date-picker-0-8 {
position: absolute !important;
top: 0px;
left: 151px;
width: 157px;
height: 32px;
pointer-events: auto;
}

.t-l-c-effectEvaluation .effectEvaluation-t-text-0-9 {
position: absolute !important;
top: 47px;
left: 308px;
width: 113px;
height: 32px;
pointer-events: auto;
}

.t-l-c-effectEvaluation .effectEvaluation-t-list-card-rate-0-10 {
position: absolute !important;
top: 86px;
left: 13px;
width: 429px;
height: 242px;
pointer-events: auto;
}
</style>
