<template>
  <div id="t-l-c-waterQualityCalendar" class="t-l-c-waterQualityCalendar" ><t-row id="t-row-0296.98adc4d61" class="waterQualityCalendar-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align"><t-chart-pie-doughnut-data id="t-chart-pie-doughnut-data-75df.633d60a64" class="waterQualityCalendar-t-chart-pie-doughnut-data-0-0-0"  :data="replaceCssVariables(filterData(state.chartData, componentPropBindingMap?.['t-chart-pie-doughnut-data-75df.633d60a64']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tChartPieDoughnutDatax0x0x0ComputedData.alias" :unit="tChartPieDoughnutDatax0x0x0ComputedData.unit" :inner-text="tChartPieDoughnutDatax0x0x0ComputedData.innerText" :radius="tChartPieDoughnutDatax0x0x0ComputedData.radius" :separation="tChartPieDoughnutDatax0x0x0ComputedData.separation" :shadow-radius="tChartPieDoughnutDatax0x0x0ComputedData.shadowRadius" :shadow-style="tChartPieDoughnutDatax0x0x0ComputedData.shadowStyle" :show-inner="tChartPieDoughnutDatax0x0x0ComputedData.showInner" :show-list="tChartPieDoughnutDatax0x0x0ComputedData.showList" :list-style="tChartPieDoughnutDatax0x0x0ComputedData.listStyle" :options="tChartPieDoughnutDatax0x0x0ComputedData.options" :c-style="tChartPieDoughnutDatax0x0x0ComputedData.cStyle" :inner-style="tChartPieDoughnutDatax0x0x0ComputedData.innerStyle" :show-center-time="tChartPieDoughnutDatax0x0x0ComputedData.showCenterTime"></t-chart-pie-doughnut-data><t-col id="t-col-0946.ca84b6134" class="waterQualityCalendar-t-col-0-0-1"  :span="tColx0x0x1ComputedData.span" :offset="tColx0x0x1ComputedData.offset" :push="tColx0x0x1ComputedData.push" :pull="tColx0x0x1ComputedData.pull" :c-style="tColx0x0x1ComputedData.cStyle"><t-text-common id="t-text-common-9f0c.d7f74152a" class="waterQualityCalendar-t-text-common-0-0-1-0"  :label="tTextCommonx0x0x1x0ComputedData.label" :editable="tTextCommonx0x0x1x0ComputedData.editable" :c-style="tTextCommonx0x0x1x0ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-90b5.919d77bac" class="waterQualityCalendar-t-text-common-0-0-1-1"  :label="replaceCssVariables(filterData(state.currentDate, componentPropBindingMap?.['t-text-common-90b5.919d77bac']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x0x1x1ComputedData.editable" :c-style="tTextCommonx0x0x1x1ComputedData.cStyle"></t-text-common></t-col><t-chart-design id="t-chart-design-257d.c589f49de" class="waterQualityCalendar-t-chart-design-0-0-2"  :empty-img="tChartDesignx0x0x2ComputedData.emptyImg" :c-style="tChartDesignx0x0x2ComputedData.cStyle" :options="replaceCssVariables(filterData(state.options, componentPropBindingMap?.['t-chart-design-257d.c589f49de']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-chart-design></t-row><t-row id="t-row-9b4d.c1ea6feb4" class="waterQualityCalendar-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align"><t-text id="t-text-717d.29e000721" class="waterQualityCalendar-t-text-0-1-0"  :label="tTextx0x1x0ComputedData.label" :editable="tTextx0x1x0ComputedData.editable" :c-style="tTextx0x1x0ComputedData.cStyle"></t-text><t-date-picker id="t-date-picker-e4df.b8404c4b2" class="waterQualityCalendar-t-date-picker-0-1-1"  :placeholder="tDatePickerx0x1x1ComputedData.placeholder" :start-placeholder="tDatePickerx0x1x1ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x1x1ComputedData.endPlaceholder" :type="tDatePickerx0x1x1ComputedData.type" :clearable="tDatePickerx0x1x1ComputedData.clearable" :range-separator="tDatePickerx0x1x1ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.dateValue, componentPropBindingMap?.['t-date-picker-e4df.b8404c4b2']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x1x1ComputedData.separator" :readonly="tDatePickerx0x1x1ComputedData.readonly" :editable="tDatePickerx0x1x1ComputedData.editable" :c-style="tDatePickerx0x1x1ComputedData.cStyle" :is-disabled-front="tDatePickerx0x1x1ComputedData.isDisabledFront" :disabled-date="tDatePickerx0x1x1ComputedData.disabledDate" @date-change="ondateChange1768368289199_0_0"></t-date-picker><t-select id="t-select-1ee2.e18c086bd" class="waterQualityCalendar-t-select-0-1-2"  :active-value="replaceCssVariables(filterData(state.currentPolluteCode, componentPropBindingMap?.['t-select-1ee2.e18c086bd']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.typeData, componentPropBindingMap?.['t-select-1ee2.e18c086bd']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x1x2ComputedData.alias" :multiple="tSelectx0x1x2ComputedData.multiple" :placeholder="tSelectx0x1x2ComputedData.placeholder" :clearable="tSelectx0x1x2ComputedData.clearable" :disabled="tSelectx0x1x2ComputedData.disabled" :name="tSelectx0x1x2ComputedData.name" :autocomplete="tSelectx0x1x2ComputedData.autocomplete" :filterable="tSelectx0x1x2ComputedData.filterable" :no-match-text="tSelectx0x1x2ComputedData.no-match-text" :no-data-text="tSelectx0x1x2ComputedData.no-data-text" :c-style="tSelectx0x1x2ComputedData.cStyle" @change="onchange1768368283699_0_0"></t-select></t-row><t-component id="t-component-cce9.384338162" class="waterQualityCalendar-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName" :page-id="tComponentx0x2ComputedData.pageId" :page-code="tComponentx0x2ComputedData.pageCode"></t-component><t-text id="t-text-6c7c.461593a68" class="waterQualityCalendar-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle"></t-text></div>
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
import { TChartDesign, TChartPieDoughnutData, TCol, TComponent, TDatePicker, TRow, TSelect, TText, TTextCommon } from '@ths/design';

export default {
  components: {
    TChartDesign,
    TChartPieDoughnutData,
    TCol,
    TComponent,
    TDatePicker,
    TRow,
    TSelect,
    TText,
    TTextCommon,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-0296.98adc4d61":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-chart-pie-doughnut-data-75df.633d60a64":{"attributeName":"tChartPieDoughnutDatax0x0x0","data":{"filters":[]},"alias":{"filters":[]},"unit":{"filters":[]},"innerText":{"filters":[]},"radius":{"filters":[]},"separation":{"filters":[]},"shadowRadius":{"filters":[]},"shadowStyle":{"filters":[]},"showInner":{"filters":[]},"showList":{"filters":[]},"listStyle":{"filters":[]},"options":{"filters":[]},"cStyle":{"filters":[]},"innerStyle":{"filters":[]},"showCenterTime":{"filters":[]}},"t-col-0946.ca84b6134":{"attributeName":"tColx0x0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-9f0c.d7f74152a":{"attributeName":"tTextCommonx0x0x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-90b5.919d77bac":{"attributeName":"tTextCommonx0x0x1x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-design-257d.c589f49de":{"attributeName":"tChartDesignx0x0x2","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-row-9b4d.c1ea6feb4":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-717d.29e000721":{"attributeName":"tTextx0x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-e4df.b8404c4b2":{"attributeName":"tDatePickerx0x1x1","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-select-1ee2.e18c086bd":{"attributeName":"tSelectx0x1x2","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-component-cce9.384338162":{"attributeName":"tComponentx0x2","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-6c7c.461593a68":{"attributeName":"tTextx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-pie-doughnut-data-fb59.b263e97b6":{"attributeName":"tChartPieDoughnutDatax0x4"}};
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
   currentDate: "",
   pointCode: "",
   chartData: [],
   calendarData: [{"date":"2025-01-01","waterClass":"II类","pollutants":["氨氮"],"value":2},{"date":"2025-01-02","waterClass":"I类","pollutants":[],"value":1},{"date":"2025-01-03","waterClass":"III类","pollutants":["总磷","化学需氧量"],"value":3},{"date":"2025-01-04","waterClass":"II类","pollutants":["溶解氧","pH值"],"value":2},{"date":"2025-01-05","waterClass":"I类","pollutants":["氨氮","总磷"],"value":1},{"date":"2025-01-06","waterClass":"II类","pollutants":["溶解氧"],"value":2},{"date":"2025-01-07","waterClass":"III类","pollutants":["化学需氧量","氨氮","总磷","高锰酸盐指数"],"value":3},{"date":"2025-01-08","waterClass":"IV类","pollutants":["总氮","氟化物"],"value":4},{"date":"2025-01-09","waterClass":"V类","pollutants":["六价铬","铅"],"value":5},{"date":"2025-01-10","waterClass":"劣V类","pollutants":["镉","汞","砷"],"value":6},{"date":"2025-01-11","waterClass":"III类","pollutants":["氨氮","总磷"],"value":3},{"date":"2025-01-12","waterClass":"II类","pollutants":[],"value":2},{"date":"2025-01-13","waterClass":"IV类","pollutants":["总氮","硫化物"],"value":4},{"date":"2025-01-14","waterClass":"I类","pollutants":[],"value":1},{"date":"2025-01-15","waterClass":"I类","pollutants":[],"value":1},{"date":"2025-01-16","waterClass":"III类","pollutants":["高锰酸盐指数","化学需氧量"],"value":3},{"date":"2025-01-17","waterClass":"II类","pollutants":["pH值"],"value":2},{"date":"2025-01-18","waterClass":"IV类","pollutants":["氟化物"],"value":4},{"date":"2025-01-19","waterClass":"III类","pollutants":["氨氮"],"value":3},{"date":"2025-01-20","waterClass":"II类","pollutants":["pH值"],"value":2},{"date":"2025-01-21","waterClass":"I类","pollutants":[],"value":1},{"date":"2025-01-22","waterClass":"V类","pollutants":["铅"],"value":5},{"date":"2025-01-23","waterClass":"III类","pollutants":["总磷","氨氮"],"value":3},{"date":"2025-01-24","waterClass":"II类","pollutants":["溶解氧"],"value":2},{"date":"2025-01-25","waterClass":"III类","pollutants":["氨氮","总磷","化学需氧量"],"value":3},{"date":"2025-01-26","waterClass":"IV类","pollutants":["总氮"],"value":4},{"date":"2025-01-27","waterClass":"劣V类","pollutants":["汞","砷"],"value":6},{"date":"2025-01-28","waterClass":"IV类","pollutants":["总氮","氟化物","硫化物"],"value":4},{"date":"2025-01-29","waterClass":"II类","pollutants":[],"value":2},{"date":"2025-01-30","waterClass":"III类","pollutants":["化学需氧量"],"value":3}],
   options: {},
   dateValue: "",
   typeData: [{"value":"waterLevelChange","label":"水质","disabled":false},{"value":"W01001","label":"pH","disabled":false},{"value":"W01009","label":"DO","disabled":false},{"value":"W01019","label":"IMn","disabled":false},{"value":"W21003","label":"NH₃-N","disabled":false},{"value":"W21011","label":"TP","disabled":false}],
   currentPolluteCode: "waterLevelChange",
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
tRowx0x0: {
defaultStyle: {
            default: {"width":"100%","height":"calc(100% - 90px)","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"90px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"calc(100% - 90px)","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"90px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tChartPieDoughnutDatax0x0x0: {
defaultStyle: {
            default: {"width":"800px","height":"45%","position":"unset","left":"22px","top":"90px","color":"","animationName":""},
            
            },
 default: { 
 
data:[],
alias:{"value":"value","name":"name"},
unit:"%",
innerText:"",
radius:["60%","81%"],
separation:{"width":2},
shadowRadius:["50%","94%"],
shadowStyle:{"color":"rgba(83, 189, 255, 0.1)","opacity":1},
showInner:true,
showList:true,
listStyle:{"align":"right","value":true,"fontSize":14,"iconSize":12,"col":2},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"legend":{"show":false},"color":["#CCFFFF","#00CCFF","#00FF00","#FFFF00","#FF9B00","#FF0000","#ABABAB","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],"innerSeries":{"itemStyle":{"color":" rgba(1, 14, 21, 0.5)"}}})),
cStyle:{"wrapper":{"default":{"width":"800px","height":"45%","position":"unset","left":"22px","top":"90px","color":"","animationName":""}},"innerText":{"default":{"color":"#fff"}},"legendItem":{"default":{"width":"180PX","height":"51PX"}},"legendName":{"default":{"color":"#B7E3FF","fontSize":"var(--business-text-size-14)"}},"legendValue":{"default":{"color":"#fff","fontSize":"var(--business-text-size-14)"}},"legendUnit":{"default":{"fontSize":14,"color":"#fff"}},"emptyText":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)"}}},
innerStyle:{"numberFontsize":20,"numberColor":"#fff","numberFontWeight":"normal","align":"top","textColor":"#fff","textFontSize":20,"unitFontSize":14,"unitColor":"#fff"},
showCenterTime:2000, 
 },
},
tColx0x0x1: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"0px","top":"-326px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"0px","top":"-326px"}}}, 
 },
},
tTextCommonx0x0x1x0: {
defaultStyle: {
            default: {"width":"73px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"1px","top":"301px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"当前日期：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"73px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"1px","top":"301px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tTextCommonx0x0x1x1: {
defaultStyle: {
            default: {"width":"148px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"69px","top":"301px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"148px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"69px","top":"301px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tChartDesignx0x0x2: {
defaultStyle: {
            default: {"height":"240px","width":"100%","position":"unset","left":"0px","top":"328px"},
            
            },
 default: { 
 
emptyImg:"",
cStyle:{"wrapper":{"default":{"height":"240px","width":"100%","position":"unset","left":"0px","top":"328px"}},"emptyText":{"default":{"fontSize":"14px","color":"var(--business-show-bg60)"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
tRowx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"0px","top":"44px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"0px","top":"44px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextx0x1x0: {
defaultStyle: {
            default: {"width":"auto","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"127px","top":"69px","fontSize":"var(--text-size-14)","lineHeight":"14px","animationName":"","textAlign":"left","marginRight":"10px"},
            
            },
 default: { 
 
label:"时间",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"127px","top":"69px","fontSize":"var(--text-size-14)","lineHeight":"14px","animationName":"","textAlign":"left","marginRight":"10px"}}}, 
 },
},
tDatePickerx0x1x1: {
defaultStyle: {
            default: {"width":"220px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"month",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"220px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","lineHeight":"20px"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","lineHeight":"20px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"30px"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--skin-font-color)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--skin-font-color)"}},"operatorArrow":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--skin-font-color)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--skin-font-color)","borderLeft":"1px solid var(--skin-font-color)","borderTop":"1px solid var(--skin-font-color)","borderRight":"1px solid var(--skin-font-color)","borderBottom":"1px solid var(--skin-font-color)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--skin-font-color)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tSelectx0x1x2: {
defaultStyle: {
            default: {"width":"270px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:"waterLevelChange",
options:[{"value":"waterLevelChange","label":"水质","disabled":false},{"value":"W01001","label":"pH","disabled":false},{"value":"W01009","label":"DO","disabled":false},{"value":"W01019","label":"IMn","disabled":false},{"value":"W21003","label":"NH₃-N","disabled":false},{"value":"W21011","label":"TP","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"270px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tComponentx0x2: {
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
tTextx0x3: {
defaultStyle: {
            default: {"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"40px","top":"4px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"水质日历",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"40px","top":"4px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"}}}, 
 },
},
});
const initPage = () => {

// 处理参数
// state.pointCode = 'A350700_0002'
state.pointCode = global.businessDialog?.dialogParmas?.pointCode || '';

// 设置暂无数据图片
setNoData();
// 今日日期
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();
state.currentDate = `${year}年${month}月${day}日`;
async function getData() {
  // 获取最新时间
  await apiRegistry.getLatestTime.request();
  // 获取水质类别数据
  await apiRegistry.getWaterTypeData.request();
  // 获取水质日历数据
  await apiRegistry.getCalendarData.request();
}
getData()
};
const setNoData = () => {
// 设置暂无数据图标
state.noDataImg = getCssVariable('--business-no-data-img');
};
const setOptions = () => {

  function generateWaterQualityCalendarOption(calendarData) {
    const firstDate = calendarData[0][0];
    const lastDate = calendarData[calendarData.length - 1][0];
    const fontSize14 = parseInt(getComputedStyle(document.body).getPropertyValue('--business-text-size-14')) || 14;
    const fontSize16 = parseInt(getComputedStyle(document.body).getPropertyValue('--business-text-size-16')) || 16;
    const calendarCellHeight = 40;
    const calendarLabelLineHeight = Math.round(fontSize16 * 1.1);
    const calendarLabelBaselineOffset = Math.round(fontSize16 * 0.42);
    const calendarOtherMonthLabelBaselineOffset = Math.round(fontSize16 * 0.12);

    const getCalendarLabel = (data) => {
      if (!data) {
        return '';
      }

      const dateStr = data[0];
      const dateNum = parseInt(dateStr.split('-')[2]);
      const isCurrentMonth = data[4];
      const pollutants = data[3] || [];

      let result = dateNum.toString();

      if (isCurrentMonth && data[1] !== 0 && pollutants.length > 0) {
        let pollutantLabel = pollutants[0];
        if (pollutants.length > 1) {
          pollutantLabel += '...';
        }
        result += '\n' + pollutantLabel;
      }

      return result;
    };
  
    return {
      backgroundColor: '#0E47AA',
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          if (!params || !params.data) {
            return '';
          }
  
          const data = params.data;
          const isCurrentMonth = data[4];
          if (!isCurrentMonth) {
            return '';
          }
  
          if (data[1] === 0) {
            return `<div style="padding: 5px;">${data[0]}<br/>${data[2]}</div>`;
          }
  
          const dateStr = data[0];
          const waterClass = data[2];
          const pollutants = data[3] || [];
  
          let pollutantStr = pollutants.join('、');
          if (pollutants.length > 3) {
            pollutantStr = pollutants.slice(0, 3).join('、') + '...';
          }
  
          return `
            <div style="padding: 5px;">
              <div style="margin-bottom: 5px; font-weight: bold;">${dateStr}</div>
              <div>水质类别: ${waterClass}</div>
              <div>污染物: ${pollutantStr || '无'}</div>
            </div>
          `;
        },
        backgroundColor: '#003d9b',
        borderColor: '#0a56b3',
        borderWidth: 1,
        textStyle: {
          color: '#fff',
          fontSize: fontSize14
        }
      },
  
      visualMap: {
        type: 'piecewise',
        dimension: 1,
        pieces: [
          { value: -1, label: '非本月', color: '#7A7272' },
          { value: 0, label: '无数据', color: '#ABABAB' },
          { value: 1, label: 'I类', color: '#CCFFFF' },
          { value: 2, label: 'II类', color: '#00CCFF' },
          { value: 3, label: 'III类', color: '#00FF00' },
          { value: 4, label: 'IV类', color: '#FFFF00' },
          { value: 5, label: 'V类', color: '#FF9B00' },
          { value: 6, label: '劣V类', color: '#FF0000' }
        ],
        show: false,
        orient: 'horizontal',
        left: 'center',
        bottom: 10,
        itemWidth: 30,
        itemHeight: 10,
        textStyle: {
          color: '#C6FFF9',
          fontSize: fontSize14
        }
      },
  
      calendar: {
        orient: 'vertical',
        top: 40,
        left: 'center',
        cellSize: ['auto', calendarCellHeight],
        range: [firstDate, lastDate],
        splitLine: {
          show: true,
          lineStyle: {
            color: '#0E47AA',
            width: 1
          }
        },
        itemStyle: {
          borderWidth: 1,
          borderColor: '#0E47AA',
          color: '#0E47AA'
        },
        yearLabel: {
          show: false
        },
        monthLabel: {
          show: true,
          nameMap: 'cn',
          fontSize: fontSize16,
          fontWeight: 'bold',
          color: 'rgba(255, 255, 255, 0.8)',
          margin: 10
        },
        dayLabel: {
          firstDay: 0,
          nameMap: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
          fontSize: fontSize16,
          color: 'rgba(255, 255, 255, 0.8)',
          margin: 10
        }
      },
      series: [{
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: calendarData,
        label: {
          show: false,
          formatter: function (params) {
            return getCalendarLabel(params.data);
          },
          fontSize: fontSize16,
           color: '#333',
          lineHeight: calendarLabelLineHeight,
          position: 'inside',
          align: 'center',
          verticalAlign: 'middle',
        }
      }, {
        type: 'custom',
        coordinateSystem: 'calendar',
        data: calendarData,
        silent: true,
        z: 10,
        renderItem: function (params, api) {
          const data = calendarData[params.dataIndex];
          if (!data) {
            return null;
          }

          const point = api.coord([data[0]]);
          if (!point) {
            return null;
          }

          return {
            type: 'text',
            style: {
              text: getCalendarLabel(data),
              x: point[0],
              y: point[1] + (data[4] ? calendarLabelBaselineOffset : calendarOtherMonthLabelBaselineOffset),
              fill: '#333',
              fontSize: fontSize16,
              lineHeight: calendarLabelLineHeight,
              align: 'center',
              verticalAlign: 'middle',
              textAlign: 'center',
              textVerticalAlign: 'middle'
            }
          };
        }
      }]
    };
  }
  
  function generateCalendarData(year, month, waterQualityData) {
    const result = [];
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const lastDayOfMonth = new Date(year, month, 0);
  
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const lastDayOfWeek = lastDayOfMonth.getDay();
  
    const daysInMonth = lastDayOfMonth.getDate();
  
    const prevMonthLastDay = new Date(year, month - 1, 0);
    const prevMonthDaysInMonth = prevMonthLastDay.getDate();
  
    // 填充上个月的日期
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const day = prevMonthDaysInMonth - i;
      let currentDate = new Date(year, month - 2, day);
      const currentYear = currentDate.getFullYear();
      const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
      const dayNum = String(currentDate.getDate()).padStart(2, '0');
      const dateStr = `${currentYear}-${currentMonth}-${dayNum}`;
      result.push([dateStr, -1, '非本月', [], false]);
    }
  
    // 填充本月日期
    for (let day = 1; day <= daysInMonth; day++) {
      let currentDate = new Date(year, month - 1, day);
      const currentYear = currentDate.getFullYear();
      const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
      const dayNum = String(currentDate.getDate()).padStart(2, '0');
      const dateStr = `${currentYear}-${currentMonth}-${dayNum}`;
      const dayData = waterQualityData.find(item => item.date === dateStr);
  
      if (dayData) {
        result.push([
          dateStr,
          dayData.value,
          dayData.waterClass,
          dayData.pollutants,
          true
        ]);
      } else {
        result.push([dateStr, 0, '无数据', [], true]);
      }
    }
  
    // 填充下个月的日期
    const remainingDays = 6 - lastDayOfWeek;
    for (let day = 1; day <= remainingDays; day++) {
      let currentDate = new Date(year, month, day);
      const currentYear = currentDate.getFullYear();
      const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
      const dayNum = String(currentDate.getDate()).padStart(2, '0');
      const dateStr = `${currentYear}-${currentMonth}-${dayNum}`;
      result.push([dateStr, -1, '非本月', [], false]);
    }
  
    return result;
  }
  
  const currentYear = Number(state.dateValue.slice(0, 4));
  const currentMonth = Number(state.dateValue.slice(5, 7));
  calendarData = generateCalendarData(currentYear, currentMonth, state.calendarData);
  state.options = generateWaterQualityCalendarOption(calendarData);
  
};
const getData = () => {
async function getData() {
  if (state.currentPolluteCode === 'waterLevelChange') {
    await apiRegistry.getWaterTypeData.request();
    await apiRegistry.getCalendarData.request();
  } else {
    await apiRegistry.getPolluteTypeDataCopy.request();
    await apiRegistry.getPolluteCalendarData.request();
  }
}
getData()
};
const bindDialogResizeToWindowResize = () => {
    let ro = null;
    let mo = null;
    let rafId = null;
    let timeoutId = null;
    let observeTarget = null;

    const dispatchResize = () => {
      // 通过派发 window resize，让图表组件走已有的自适应逻辑
      try {
        window.dispatchEvent(new Event('resize'));
      } catch (e) {
        // // 兼容老环境
        // const evt = document.createEvent('Event');
        // evt.initEvent('resize', true, true);
        // window.dispatchEvent(evt);
      }
    };

    const scheduleResize = () => {
      try {
        if (rafId) cancelAnimationFrame(rafId);
      } catch (e) {}
      if (timeoutId) clearTimeout(timeoutId);
      rafId = requestAnimationFrame(() => {
        dispatchResize();
        // 若弹窗有动画/过渡，补一次延迟触发，保证最终尺寸稳定后重算
        timeoutId = setTimeout(() => {
          dispatchResize();
        }, 120);
      });
    };

    const setupObserve = () => {
      const pageRoot = document.getElementById('t-l-c-waterQualityCalendar');
      observeTarget = (pageRoot && pageRoot.closest) ? (pageRoot.closest('.dialog.draggable') || pageRoot) : pageRoot;
      if (!observeTarget) return;
      if (typeof ResizeObserver !== 'undefined') {
        ro = new ResizeObserver(() => {
          handleWindowResize();
          scheduleResize();
        });
        ro.observe(observeTarget);
      } else if (typeof MutationObserver !== 'undefined') {
        mo = new MutationObserver(() => {
          handleWindowResize();
          scheduleResize();
        });
        mo.observe(observeTarget, { attributes: true, attributeFilter: ['style'] });
      }
      // 初次进入也触发一次图表重算
      scheduleResize();
    };

    const cleanup = () => {
      if (ro) ro.disconnect();
      if (mo) mo.disconnect();
      ro = null;
      mo = null;
      observeTarget = null;
      try {
        if (rafId) cancelAnimationFrame(rafId);
      } catch (e) {}
      rafId = null;
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    };

    // 在 setup 同步注册生命周期，避免在 setup 顶部额外声明清理变量
    onMounted(() => {
      setupObserve();
    });
    onUnmounted(() => {
      cleanup();
    });
};
const ondateChange1768368289199_0_0 = (data) => {
// 设置变量值
state.dateValue = data;
// 执行自定义方法
getData();
};
const onchange1768368283699_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.currentPolluteCode = value;
// 执行自定义方法
getData();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getCalendarData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"MONITORTIME":"state.dateValue","POINT_CODE":"state.pointCode","interfaceId":"06022ca202cc44ea0613a85bf011da8d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":state.dateValue,"POINT_CODE":state.pointCode,"interfaceId":"06022ca202cc44ea0613a85bf011da8d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"MONITORTIME":state.dateValue,"POINT_CODE":state.pointCode,"interfaceId":"06022ca202cc44ea0613a85bf011da8d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCalendarData'] = res.data;
                
     state.calendarData = []
const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.calendarData = data.map(item => {
    return {
      "date": item?.MONITORTIME,
      "waterClass": item?.WATERQUALITYLEVELNAME || "无数据",
      "pollutants": item?.OVERPOLLUTE.split(','),
      "value": item?.CODE_WATERQUALITYLEVEL || '0'
    }
  })
}
setOptions();
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.pointCode","interfaceId":"eff335e32a389b469f2a5687588fcad1"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.pointCode,"interfaceId":"eff335e32a389b469f2a5687588fcad1"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.pointCode,"interfaceId":"eff335e32a389b469f2a5687588fcad1"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.dateValue = data.MONITORTIME
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
 getPolluteCalendarData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POLLUTE_CODE":"state.currentPolluteCode","MONITORTIME":"state.dateValue","POINT_CODE":"state.pointCode","interfaceId":"c2af4f240fa69a4b4f9288394e3a664a"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POLLUTE_CODE":state.currentPolluteCode,"MONITORTIME":state.dateValue,"POINT_CODE":state.pointCode,"interfaceId":"c2af4f240fa69a4b4f9288394e3a664a"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POLLUTE_CODE":state.currentPolluteCode,"MONITORTIME":state.dateValue,"POINT_CODE":state.pointCode,"interfaceId":"c2af4f240fa69a4b4f9288394e3a664a"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPolluteCalendarData'] = res.data;
                
     state.calendarData = []
const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.calendarData = data.map(item => {
    return {
      "date": item?.MONITORTIME,
      "waterClass": item?.POLLUTE_WATERLEVEL ? filters.handleWaterQuality(item?.POLLUTE_WATERLEVEL) : '无数据',
      "pollutants": [`${(parseFloat(item?.POLLUTE_VALUE) || 0).toFixed(2)}`],
      "value": item?.POLLUTE_WATERLEVEL || '0'
    }
  })
}
setOptions();

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getWaterTypeData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"MONITORTIME":"state.dateValue","POINT_CODE":"state.pointCode","interfaceId":"96ca2a33e32d2640451f2cf44a7d8147"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":state.dateValue,"POINT_CODE":state.pointCode,"interfaceId":"96ca2a33e32d2640451f2cf44a7d8147"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"MONITORTIME":state.dateValue,"POINT_CODE":state.pointCode,"interfaceId":"96ca2a33e32d2640451f2cf44a7d8147"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getWaterTypeData'] = res.data;
                
     state.chartData = []
const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.chartData = [
    {
      "value": data['1_RATE'],
      "name": "I类"
    },
    {
      "value": data['2_RATE'],
      "name": "II类"
    },
    {
      "value": data['3_RATE'],
      "name": "III类"
    },
    {
      "value": data['4_RATE'],
      "name": "IV类"
    },
    {
      "value": data['5_RATE'],
      "name": "V类"
    },
     {
      "value": data['6_RATE'],
      "name": "劣V类"
    },
    {
      "value": data['0_RATE'],
      "name": "无数据"
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
 getPolluteTypeDataCopy: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POLLUTE_CODE":"state.currentPolluteCode","MONITORTIME":"state.dateValue","POINT_CODE":"state.pointCode","interfaceId":"9e7ca05e1fd90c1160c8c463f27cffc9"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POLLUTE_CODE":state.currentPolluteCode,"MONITORTIME":state.dateValue,"POINT_CODE":state.pointCode,"interfaceId":"9e7ca05e1fd90c1160c8c463f27cffc9"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POLLUTE_CODE":state.currentPolluteCode,"MONITORTIME":state.dateValue,"POINT_CODE":state.pointCode,"interfaceId":"9e7ca05e1fd90c1160c8c463f27cffc9"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPolluteTypeDataCopy'] = res.data;
                
     state.chartData = []
const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.chartData = [
    {
      "value": data['1_RATE'],
      "name": "I类"
    },
    {
      "value": data['2_RATE'],
      "name": "II类"
    },
    {
      "value": data['3_RATE'],
      "name": "III类"
    },
    {
      "value": data['4_RATE'],
      "name": "IV类"
    },
    {
      "value": data['5_RATE'],
      "name": "劣V类"
    },
    {
      "value": data['6_RATE'],
      "name": "V类"
    },
    {
      "value": data['0_RATE'],
      "name": "无数据"
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
};
 function handleWindowResize() {
                            setPageScale('t-l-c-waterQualityCalendar', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPage();
// 执行自定义方法
bindDialogResizeToWindowResize();
onMounted(() => {
setPageScale('t-l-c-waterQualityCalendar', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tChartPieDoughnutDatax0x0x0ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartPieDoughnutDatax0x0x0.default, componentState.tChartPieDoughnutDatax0x0x0?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tColx0x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x0x1.default, componentState.tColx0x0x1?.[state.screenSize]));

 const tTextCommonx0x0x1x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x0x1x0.default, componentState.tTextCommonx0x0x1x0?.[state.screenSize]));

 const tTextCommonx0x0x1x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x0x1x1.default, componentState.tTextCommonx0x0x1x1?.[state.screenSize]));

 const tChartDesignx0x0x2ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x0x2.default, componentState.tChartDesignx0x0x2?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tTextx0x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x0.default, componentState.tTextx0x1x0?.[state.screenSize]));

 const tDatePickerx0x1x1ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x1x1.default, componentState.tDatePickerx0x1x1?.[state.screenSize]));

 const tSelectx0x1x2ComputedData = computed(() => _.merge({}, componentState.tSelectx0x1x2.default, componentState.tSelectx0x1x2?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

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
tRowx0x0ComputedData,
tChartPieDoughnutDatax0x0x0ComputedData,
tColx0x0x1ComputedData,
tTextCommonx0x0x1x0ComputedData,
tTextCommonx0x0x1x1ComputedData,
tChartDesignx0x0x2ComputedData,
tRowx0x1ComputedData,
tTextx0x1x0ComputedData,
tDatePickerx0x1x1ComputedData,
tSelectx0x1x2ComputedData,
tComponentx0x2ComputedData,
tTextx0x3ComputedData,
ondateChange1768368289199_0_0,
onchange1768368283699_0_0,
};
},
}
</script>

<style scoped>
.t-l-c-waterQualityCalendar {
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
background-color: rgba(26, 27, 31, 0);
width: 100%;
height: 100%;
}
.t-l-c-waterQualityCalendar .waterQualityCalendar-t-row-0-0 {
position: absolute !important;
top: 90px;
left: 0px;
width: 100%;
height: calc(100% - 90px);
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-waterQualityCalendar .waterQualityCalendar-t-chart-pie-doughnut-data-0-0-0 {
position: unset;
top: 90px;
left: 22px;
width: 800px;
height: 45%;
pointer-events: auto;
}

.t-l-c-waterQualityCalendar .waterQualityCalendar-t-col-0-0-1 {
position: relative;
top: null;
left: null;
width: 100%;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
}

.t-l-c-waterQualityCalendar .waterQualityCalendar-t-text-common-0-0-1-0 {
position: unset;
top: 301px;
left: 1px;
width: 73px;
height: 20px;
pointer-events: auto;
}

.t-l-c-waterQualityCalendar .waterQualityCalendar-t-text-common-0-0-1-1 {
position: unset;
top: 301px;
left: 69px;
width: 148px;
height: 20px;
pointer-events: auto;
}

.t-l-c-waterQualityCalendar .waterQualityCalendar-t-chart-design-0-0-2 {
position: unset;
top: 328px;
left: 0px;
width: 100%;
height: 240px;
pointer-events: auto;
}

.t-l-c-waterQualityCalendar .waterQualityCalendar-t-row-0-1 {
position: absolute !important;
top: 44px;
left: 0px;
width: 100%;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
}

.t-l-c-waterQualityCalendar .waterQualityCalendar-t-text-0-1-0 {
position: unset;
top: 69px;
left: 127px;
width: auto;
height: 14px;
pointer-events: auto;
}

.t-l-c-waterQualityCalendar .waterQualityCalendar-t-date-picker-0-1-1 {
position: unset;
top: -86px;
left: -273px;
width: 220px;
height: 32px;
pointer-events: auto;
}

.t-l-c-waterQualityCalendar .waterQualityCalendar-t-select-0-1-2 {
position: unset;
top: -91px;
left: 209px;
width: 270px;
height: 33px;
pointer-events: auto;
}

.t-l-c-waterQualityCalendar .waterQualityCalendar-t-component-0-2 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 28px;
pointer-events: auto;
}

.t-l-c-waterQualityCalendar .waterQualityCalendar-t-text-0-3 {
position: absolute !important;
top: 4px;
left: 40px;
width: 130px;
height: 20px;
pointer-events: auto;
}
</style>
