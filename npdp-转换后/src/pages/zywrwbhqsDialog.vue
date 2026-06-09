<template>
  <div id="t-l-c-zywrwbhqsDialog" class="t-l-c-zywrwbhqsDialog" ><t-row id="t-row-eb1d.3a5a2744d" class="zywrwbhqsDialog-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align"><t-col id="t-col-373b.7113ed191" class="zywrwbhqsDialog-t-col-0-0-0"  :span="tColx0x0x0ComputedData.span" :offset="tColx0x0x0ComputedData.offset" :push="tColx0x0x0ComputedData.push" :pull="tColx0x0x0ComputedData.pull" :c-style="tColx0x0x0ComputedData.cStyle"><t-tabs-base id="t-tabs-base-3c0e.5a8cc13d1" class="zywrwbhqsDialog-t-tabs-base-0-0-0-0"  :data="replaceCssVariables(filterData(state.pullutionList, componentPropBindingMap?.['t-tabs-base-3c0e.5a8cc13d1']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :space="tTabsBasex0x0x0x0ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.polluteType, componentPropBindingMap?.['t-tabs-base-3c0e.5a8cc13d1']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x0x0x0ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x0x0x0ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x0x0x0ComputedData.alias" :c-style="tTabsBasex0x0x0x0ComputedData.cStyle" @tab-click="ontabClick1734003608182"></t-tabs-base></t-col><t-col id="t-col-d451.75c589966" class="zywrwbhqsDialog-t-col-0-0-1"  :span="tColx0x0x1ComputedData.span" :offset="tColx0x0x1ComputedData.offset" :push="tColx0x0x1ComputedData.push" :pull="tColx0x0x1ComputedData.pull" :c-style="tColx0x0x1ComputedData.cStyle"><t-tabs id="t-tabs-7c4b.36c0540f1" class="zywrwbhqsDialog-t-tabs-0-0-1-0"  :alias="tTabsx0x0x1x0ComputedData.alias" :data="tTabsx0x0x1x0ComputedData.data" :active-tab="replaceCssVariables(filterData(state.timeType, componentPropBindingMap?.['t-tabs-7c4b.36c0540f1']['activeTab'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :tab-position-extend="tTabsx0x0x1x0ComputedData.tabPositionExtend" :stretch="tTabsx0x0x1x0ComputedData.stretch" :c-style="tTabsx0x0x1x0ComputedData.cStyle" @tab-click="ontabClick1736492237255"></t-tabs></t-col><t-col id="t-col-3c41.e99c36a4f" class="zywrwbhqsDialog-t-col-0-0-2"  :span="tColx0x0x2ComputedData.span" :offset="tColx0x0x2ComputedData.offset" :push="tColx0x0x2ComputedData.push" :pull="tColx0x0x2ComputedData.pull" :c-style="tColx0x0x2ComputedData.cStyle"><t-date-picker v-if="state.timeType === '5minute'" id="t-date-picker-d12b.d132ce67b" class="zywrwbhqsDialog-t-date-picker-0-0-2-0"  :placeholder="tDatePickerx0x0x2x0ComputedData.placeholder" :start-placeholder="tDatePickerx0x0x2x0ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x0x2x0ComputedData.endPlaceholder" :type="tDatePickerx0x0x2x0ComputedData.type" :clearable="tDatePickerx0x0x2x0ComputedData.clearable" :range-separator="tDatePickerx0x0x2x0ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeValue, componentPropBindingMap?.['t-date-picker-d12b.d132ce67b']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x0x2x0ComputedData.separator" :readonly="tDatePickerx0x0x2x0ComputedData.readonly" :editable="tDatePickerx0x0x2x0ComputedData.editable" :c-style="tDatePickerx0x0x2x0ComputedData.cStyle" :is-disabled-front="tDatePickerx0x0x2x0ComputedData.isDisabledFront" :disabled-date="replaceCssVariables(filterData(state.maxTimeValue, componentPropBindingMap?.['t-date-picker-d12b.d132ce67b']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @date-change="ondateChange1736501207070_0_0"></t-date-picker><t-date-picker v-if="state.timeType === 'hour'" id="t-date-picker-c174.45d4e20dc" class="zywrwbhqsDialog-t-date-picker-0-0-2-1"  :placeholder="tDatePickerx0x0x2x1ComputedData.placeholder" :start-placeholder="tDatePickerx0x0x2x1ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x0x2x1ComputedData.endPlaceholder" :type="tDatePickerx0x0x2x1ComputedData.type" :clearable="tDatePickerx0x0x2x1ComputedData.clearable" :range-separator="tDatePickerx0x0x2x1ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeValue, componentPropBindingMap?.['t-date-picker-c174.45d4e20dc']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x0x2x1ComputedData.separator" :readonly="tDatePickerx0x0x2x1ComputedData.readonly" :editable="tDatePickerx0x0x2x1ComputedData.editable" :c-style="tDatePickerx0x0x2x1ComputedData.cStyle" :is-disabled-front="tDatePickerx0x0x2x1ComputedData.isDisabledFront" :disabled-date="replaceCssVariables(filterData(state.maxTimeValue, componentPropBindingMap?.['t-date-picker-c174.45d4e20dc']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @date-change="ondateChange1735011612852"></t-date-picker></t-col></t-row><t-row id="t-row-7125.7f7131258" class="zywrwbhqsDialog-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align"><t-chart-design id="t-chart-design-5ebe.1534fff6b" class="zywrwbhqsDialog-t-chart-design-0-1-0"  :empty-img="tChartDesignx0x1x0ComputedData.emptyImg" :c-style="tChartDesignx0x1x0ComputedData.cStyle" :options="replaceCssVariables(filterData(state.options, componentPropBindingMap?.['t-chart-design-5ebe.1534fff6b']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-chart-design></t-row></div>
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
import { TChartDesign, TCol, TDatePicker, TRow, TTabs, TTabsBase } from '@ths/design';

export default {
  components: {
    TChartDesign,
    TCol,
    TDatePicker,
    TRow,
    TTabs,
    TTabsBase,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-eb1d.3a5a2744d":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-373b.7113ed191":{"attributeName":"tColx0x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-3c0e.5a8cc13d1":{"attributeName":"tTabsBasex0x0x0x0","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-col-d451.75c589966":{"attributeName":"tColx0x0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-7c4b.36c0540f1":{"attributeName":"tTabsx0x0x1x0","alias":{"filters":[]},"data":{"filters":[]},"activeTab":{"filters":[]},"tabPositionExtend":{"filters":[]},"stretch":{"filters":[]},"cStyle":{"filters":[]}},"t-col-3c41.e99c36a4f":{"attributeName":"tColx0x0x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-d12b.d132ce67b":{"attributeName":"tDatePickerx0x0x2x0","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-date-picker-c174.45d4e20dc":{"attributeName":"tDatePickerx0x0x2x1","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-row-7125.7f7131258":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-chart-design-5ebe.1534fff6b":{"attributeName":"tChartDesignx0x1x0","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}}};
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
   pullutionList: [{"label":"AQI","value":"AQI"},{"label":"PM₂.₅","value":"PM25"},{"label":"PM₁₀","value":"PM10"},{"label":"SO₂","value":"SO2"},{"label":"NO₂","value":"NO2"},{"label":"CO","value":"CO"},{"label":"O₃","value":"O3"}],
   DISTRICT_CODE: "",
   pointType: "1",
   timeType: "5minute",
   dateType: "",
   maxTimeValue: "",
   pointCode: "",
   yMaxValue: "",
   maxValue: "100",
   END_TIME: "",
   START_TIME: "",
   timeValue: [],
   echartsData: [],
   polluteType: "AQI",
   unit: "",
   relateData: [{"monitortime":"16日16时","city1":"26","city2":"31","city3":"32","city4":"5","city5":"49","city6":"60","city7":"42","city8":"129","city9":"60"},{"monitortime":"16日17时","city1":"29","city2":"30","city3":"12","city4":"5","city5":"5","city6":"47","city7":"60","city8":"65","city9":"60"},{"monitortime":"16日18时","city1":"29","city2":"31","city3":"32","city4":"5","city5":"5","city6":"53","city7":"60","city8":"45","city9":"60"},{"monitortime":"16日19时","city1":"40","city2":"47","city3":"34","city4":"5","city5":"6","city6":"81","city7":"60","city8":"23","city9":"60"},{"monitortime":"16日20时","city1":"16","city2":"75","city3":"54","city4":"5","city5":"6","city6":"82","city7":"60","city8":"21","city9":"60"}],
   options: {},
   yAxisData: [{"name":"广州市","dataKey":"city1","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"深圳市","dataKey":"city2","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"珠海市","dataKey":"city3","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"佛山市","dataKey":"city4","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"江门市","dataKey":"city5","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"肇庆市","dataKey":"city6","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"惠州市","dataKey":"city7","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"东菀市","dataKey":"city8","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"中山市","dataKey":"city9","style":{"lineStyle":{"width":1},"symbol":"none"}}],
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
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"20px","gap":"auto","paddingLeft":"20px","paddingRight":"20px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"20px","gap":"auto","paddingLeft":"20px","paddingRight":"20px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x0x0: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"left","alignItems":"center"},
            
            },
 default: { 
 
span:11,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"left","alignItems":"center"}}}, 
 },
},
tTabsBasex0x0x0x0: {
defaultStyle: {
            default: {"width":"340px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
data:[{"label":"AQI","value":"AQI"},{"label":"PM₂.₅","value":"PM25"},{"label":"PM₁₀","value":"PM10"},{"label":"SO₂","value":"SO2"},{"label":"NO₂","value":"NO2"},{"label":"CO","value":"CO"},{"label":"O₃","value":"O3"}],
space:1,
selectedTabVal:"AQI",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":false},
cStyle:{"wrapper":{"default":{"width":"340px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"0px","top":"0px"}},"itemWrapper":{"default":{"width":"80px","height":"32px","fontSize":"14px","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px"}},"label":{"default":{"fontSize":"var(--text-size-14)","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","fontSize":"var(--text-size-14)"},"hover":{"fontSize":"var(--text-size-14)"},"disabled":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tColx0x0x1: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:2,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tTabsx0x0x1x0: {
defaultStyle: {
            default: {"width":"115px","height":"20px","top":"10px","left":"385px","position":"unset","animationName":""},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[{"label":"分钟","name":"5minute"},{"label":"小时","name":"hour"}],
activeTab:"5minute",
tabPositionExtend:"top-start",
stretch:true,
cStyle:{"wrapper":{"default":{"width":"115px","height":"20px","top":"10px","left":"385px","position":"unset","animationName":""}},"itemWrapper":{"default":{"color":"var(--business-text-avianize)","fontSize":"14px","borderLeft":"1px solid var(--business-text-avianize)","marginLeft":"-1px","width":"auto","paddingLeft":"0px","paddingRight":"0px"},"active":{"backgroundColor":"rgba(23, 62, 228, 0)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)"}},"itemActiveBorder":{"default":{"display":"none"}},"itemLabel":{"default":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tColx0x0x2: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"},
            
            },
 default: { 
 
span:10,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tDatePickerx0x0x2x0: {
defaultStyle: {
            default: {"width":"385px","height":"32px","position":"unset","left":"494px","top":"0px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"385px","height":"32px","position":"unset","left":"494px","top":"0px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"var(--text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tDatePickerx0x0x2x1: {
defaultStyle: {
            default: {"width":"385px","height":"32px","position":"unset","left":"494px","top":"0px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"385px","height":"32px","position":"unset","left":"494px","top":"0px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"var(--text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tRowx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"calc(100% - 80px)","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"75px","paddingLeft":"20px","paddingRight":"20px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"calc(100% - 80px)","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"75px","paddingLeft":"20px","paddingRight":"20px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tChartDesignx0x1x0: {
defaultStyle: {
            default: {"height":"100%","width":"100%","position":"unset","left":"0px","top":"80px"},
            
            },
 default: { 
 
emptyImg:"assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"100%","width":"100%","position":"unset","left":"0px","top":"80px"}},"emptyText":{"default":{"fontSize":"14px","color":"var(--business-no-data-color)"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
});
const setOptions = () => {

const colorList = [
  {
    bgColor: "rgb(6, 255, 97)",
    borderColor: "rgba(6, 255, 97,.2)",
  },
  {
    bgColor: "rgb(0, 213, 255)",
    borderColor: "rgba(0, 213, 255,.2)",
  },
  {
    bgColor: "rgb(116, 108, 254)",
    borderColor: "rgba(116, 108, 254,.2)",
  },
  {
    bgColor: "rgb(255, 216, 120)",
    borderColor: "rgba(255, 216, 120,.2)",
  },
  {
    bgColor: "rgb(173, 166, 255)",
    borderColor: "rgba(173, 166, 255, .2)",
  },
  {
    bgColor: "rgb(255, 133, 120)",
    borderColor: "rgba(255, 133, 120, 1)",
  },
  {
    bgColor: "rgb(9, 153, 255)",
    borderColor: "rgba(9, 153, 255, .2)",
  },
  {
    bgColor: "rgb(255, 81, 232)",
    borderColor: "rgba(255, 81, 232, .2)",
  },
  {
    bgColor: "rgb(63, 255, 242)",
    borderColor: "rgba(63, 255, 242, .2)",
  },
  {
    bgColor: "rgb(220,105,170)",
    borderColor: "rgba(220,105,170,.2)",
  },
];

// 折线数据（name、data）
const data = [];

// 图例数据
let lengData = [];
// x轴数据
let xData = [];
// 如果接口返回的折线图有数据
if (state.echartsData?.length) {
  Object.keys(state.echartsData[0]).forEach((e) => {
    if ((e !== 'MONITORTIME') && (e !== 'STANDART') && (e !== 'MONITORTIME_NAME')) {
      lengData.push(e);
    }
  });

  lengData.forEach((item) => {
    data.push({
      name: item,
      data: [],
    })
  })

  state.echartsData.forEach(item => {
    Object.keys(item).forEach((e) => {
      data.forEach(el => {
        if (el.name === e) {
          el.data.push(item[e]);
        }
      })
    });
  })

  // x轴数据
  xData = state.echartsData.map((item) => item.MONITORTIME);
}


let series = [];
if (data.length) {

  data.forEach((item) => {
    series.push({
      name: item.name,
      type: 'line',
      data: item.data,
      smooth: true,
      symbol: 'none',
      // yAxisIndex: item.name === '均值' ? 1 : 0,
    })
  })

  data.forEach((item) => {
    item.maxValue = Math.max(Number(...item.data))
  })
}

const arrMax = data.map((item) => item.maxValue);

// console.log(data, 'data')
// 存储最大值
let maxValueNew = 0;
if (arrMax.length) {
  maxValueNew = Math.max(Number(...arrMax))
}

console.log(maxValueNew, 'maxValueNew')


// 标记线
if (series.length) {
  series[0].markLine = {
    data: [
      {
        yAxis: state.maxValue, // 限值
        label: {
          position: 'end',
          // position: 'start',
          color: 'rgba(255, 43, 43, 1)',
          // show: state.polluteType === 'AQI',
        },
        lineStyle: {
          color: 'rgba(255, 43, 43, 1)',
          type: 'dashed',
          cap: 'round',
          // width: state.polluteType === 'AQI' ? 1 : 0,
        }
      }
    ],
    label: {
      distance: [20, 8]
    },
    symbol: ['none', 'none'], // 第一个是起点图标，第二个是终点图标
  }
}

state.options = {
  dataZoom: [
    {
      type: "inside",
      start: 0,
      end: 50,
    }
  ],
  // legend: {
  //   show: true,
  //   icon: 'roundRect',
  //   itemWidth: 16,
  //   itemHeight: 16,
  //   textStyle: {
  //     color: "rgba(255, 255, 255, 1)",
  //     fontSize: 12,
  //     height: 8,
  //     rich: {
  //       a: {
  //         verticalAlign: "center"
  //       }
  //     }
  //   }
  // },
  legend: {
    top: 10,
    show: true,
    type: 'scroll',
    width: '50%',
    icon: 'roundRect',
    pageButtonItemGap: 5, // 翻页按钮间距
    pageButtonGap: 10, // 翻页按钮与图例的间距
    pageButtonPosition: 'end', // 翻页按钮位置
    pageIconColor: 'rgba(255, 255, 255, 1)', // 翻页按钮颜色
    pageIconInactiveColor: 'rgba(255, 255, 255, 0.5)', // 翻页按钮禁用颜色
    pageIconSize: 12, // 翻页按钮大小
    pageTextStyle: {
        color: 'rgba(255, 255, 255, 1)'
    },
    itemWidth: 16,
    itemHeight: 16,
    textStyle: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 14,
        height: 10,
        rich: {
            a: {
                verticalAlign: 'center'
            }
        }
    }
    },
  grid: {
    bottom: "12%",
    left: "3%",
    right: "2% "
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: "#008acd",
        width: "1"
      },
      crossStyle: {
        color: "#008acd",
        width: "1"
      }
    },
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderColor: "rgba(255, 255, 255, 0.5)",
    textStyle: {
      color: "rgba(255, 255, 255, 1)"
    },
    confine: true,
    // appendToBody: true
    // extraCssText: 'max-height: 300px; overflow-y: auto; white-space: normal;'
  },
  yAxis: [
    {
      type: 'value',
      name: state.unit,
      // max: maxValueNew > state.maxValue ? maxValueNew : state.maxValue,

      // 自定义主题-开始
      axisLine: {
        show: false,
        lineStyle: {
          type: "solid",
          color: "rgba(173, 197, 255, 0.3)"
        }
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: "rgba(173, 197, 255, 0.3)"
        }
      },
      axisLabel: {
        show: true,
        color: "#B7E3FF",
        fontSize: 14
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "rgba(173, 197, 255, 0.3)"
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: [
            "rgba(250,250,250,0.2)",
            "rgba(210,219,238,0.2)"
          ]
        }
      },
      nameTextStyle: {
        color: "#B7E3FF",
        fontSize: 14
      },
    },
  ],
  xAxis: {
    type: 'category',
    data: xData, // 日期
    // 自定义主题-开始
    axisLine: {
      show: true,
      lineStyle: {
        type: "solid",
        color: "rgba(173, 197, 255, 0.5)"
      }
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "rgba(173, 197, 255, 0.3)"
      }
    },
    axisLabel: {
      show: true,
      color: "#B7E3FF",
      fontSize: 14,
      interval: 0,
      rotate: 30, // 将标签倾斜 45 度
      margin: 10,
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: [
          "rgba(202,202,202,0.3)"
        ]
      }
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: [
          "rgba(250,250,250,0.3)",
          "rgba(200,200,200,0.3)"
        ]
      }
    },
    nameTextStyle: {
      color: "#B7E3FF",
      fontSize: 14
    }
    // 自定义主题-结束
  },
  color: colorList.map((item) => item.bgColor),
  series: series
}

};
const setUnit = () => {
// 上标
const threeSup = convertCharacter('上标')[0].split(' ')[3] || '3';

state.unit = state.polluteType === 'AQI' ? '' : state.polluteType === 'CO' ? 'mg/m' + threeSup : 'μg/m' + threeSup;
};
const initParams = () => {
// 处理参数
// state.pointCode = global.businessDialog.dialogParmas.POINT_CODE;
// state.pointType = global.businessDialog.dialogParmas.POINT_TYPE; 
// state.DISTRICT_CODE = global.businessDialog.dialogParmas.DISTRICT_CODE; 
// const rangeDate = getForwardTimeList(global.air.timeValue, global.air.timeType, global.air.timeType === 'hour' ? 47 : 29);
// state.START_TIME = rangeDate[0];
// state.END_TIME = rangeDate[rangeDate.length - 1];
// state.timeValue = [state.START_TIME, state.END_TIME];
// state.dateType = global.air.timeType === 'hour' ? 'datetimerangehour' : 'daterange'
// state.timeType = global.air.timeType
// changePollutionList();
// 获取数据
getData()
};
const getData = () => {
async function getData(){
 await apiRegistry.getLatestTime.request();
 await apiRegistry.getPollutantsListCopy.request();
}
getData()
};
const changePollutionList = () => {
if(state.timeType === 'hour'){
  state.pullutionList = [
  {
    "label": "AQI",
    "value": "AQI"
  },
  {
    "label": "PM₂.₅",
    "value": "PM25"
  },
  {
    "label": "PM₁₀",
    "value": "PM10"
  },
  {
    "label": "SO₂",
    "value": "SO2"
  },
  {
    "label": "NO₂",
    "value": "NO2"
  },
  {
    "label": "CO",
    "value": "CO"
  },
  {
    "label": "O₃",
    "value": "O3"
  }
]
  state.polluteType = state.polluteType === 'O3_8' ? 'O3' : state.polluteType
}else if(state.timeType === 'day'){
  state.pullutionList = [
  {
    "label": "AQI",
    "value": "AQI"
  },
  {
    "label": "PM₂.₅",
    "value": "PM25"
  },
  {
    "label": "PM₁₀",
    "value": "PM10"
  },
  {
    "label": "SO₂",
    "value": "SO2"
  },
  {
    "label": "NO₂",
    "value": "NO2"
  },
  {
    "label": "CO",
    "value": "CO"
  },
  {
    "label": "O₃-8h",
    "value": "O3_8"
  }
]
state.polluteType = state.polluteType === 'O3' ? 'O3_8' : state.polluteType
}
};
const handleData = (jsonData) => {
function transformData(jsonData) {
  try {
    // 确保输入是有效的数组
    if (!Array.isArray(jsonData)) {
      console.error('无效的数据格式，需要数组类型');
      return [];
    }

    // 按时间分组存储数据
    const timeGroupedData = {};
    
    // 遍历原始数据，按时间分组
    jsonData.forEach(item => {
      if (item.MONITORTIME_NAME && item.POINT_NAME && item.POLLUTE_VALUE !== undefined) {
        // 如果该时间点还没有初始化，创建新对象
        if (!timeGroupedData[item.MONITORTIME_NAME]) {
          timeGroupedData[item.MONITORTIME_NAME] = {
            MONITORTIME_NAME: item.MONITORTIME_NAME
          };
        }
        
        // 添加监测点数据（POINT_NAME对应POLLUTE_VALUE）
        timeGroupedData[item.MONITORTIME_NAME][item.POINT_NAME] = Number(item.POLLUTE_VALUE) || null;
      }
    });
    
    // 将对象转换为数组，并按时间排序
    const result = Object.values(timeGroupedData).sort((a, b) => {
      return new Date(a.MONITORTIME_NAME) - new Date(b.MONITORTIME_NAME);
    });
    
    return result;
  } catch (error) {
    console.error('数据转换过程中发生错误：', error);
    return [];
  }
}
return transformData(jsonData) 
};
const handleTimeChange = (data) => {
if (data?.length) {
  state.START_TIME = data[0]
  state.END_TIME = data[1]
  // 获取图表数据
  apiRegistry.getPollutantsListCopy.request();
}
};
const ontabClick1734003608182 = (data) => {
// 设置变量值
state.polluteType = data.value;
// 执行自定义方法
setUnit();
// 事件交互-请求调用接口
apiRegistry.getPollutantsListCopy.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const ontabClick1736492237255 = (data) => {
// 设置变量值
state.timeType = data.name;
// 执行自定义方法
getData();
};
const ondateChange1735011612852 = (data) => {
// 设置变量值
state.timeValue = data;
// 执行自定义方法
handleTimeChange(data);
};
const ondateChange1736501207070_0_0 = (data) => {
// 设置变量值
state.timeValue = data;
// 执行自定义方法
handleTimeChange(data);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getHourData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POLLUTE":"state.polluteType","DISTRICT_CODE":"state.DISTRICT_CODE","END_TIME":"state.END_TIME","START_TIME":"state.START_TIME","POINT_TYPE":"state.pointType","interfaceId":"ec575d2b76ddaa4882f2271f88e2d397"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POLLUTE":state.polluteType,"DISTRICT_CODE":state.DISTRICT_CODE,"END_TIME":state.END_TIME,"START_TIME":state.START_TIME,"POINT_TYPE":state.pointType,"interfaceId":"ec575d2b76ddaa4882f2271f88e2d397"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POLLUTE":state.polluteType,"DISTRICT_CODE":state.DISTRICT_CODE,"END_TIME":state.END_TIME,"START_TIME":state.START_TIME,"POINT_TYPE":state.pointType,"interfaceId":"ec575d2b76ddaa4882f2271f88e2d397"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getHourData'] = res.data;
                
     // console.log(res, '关联站点-echarts图数据')
if (res?.data?.head?.statusCode === '200' && res?.data?.data?.length) {
  const data = handleData(res?.data?.data);
  state.echartsData = data.map(item => {
    return{
      ...item,
      MONITORTIME: item.MONITORTIME_NAME.slice(3)
    }
  })

  // 限值
  state.maxValue = '-';
} else {
  state.echartsData = []
}

// 折线图配置项修改
setOptions();

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.echartsData = []

      reject(error);
    });
  });
},
              },
// 接口函数
 getDayData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POLLUTE":"state.polluteType","DISTRICT_CODE":"state.DISTRICT_CODE","END_TIME":"state.END_TIME","START_TIME":"state.START_TIME","POINT_TYPE":"state.pointType","interfaceId":"daaa5c5bae26295626e948aa6702e2e9"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POLLUTE":state.polluteType,"DISTRICT_CODE":state.DISTRICT_CODE,"END_TIME":state.END_TIME,"START_TIME":state.START_TIME,"POINT_TYPE":state.pointType,"interfaceId":"daaa5c5bae26295626e948aa6702e2e9"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POLLUTE":state.polluteType,"DISTRICT_CODE":state.DISTRICT_CODE,"END_TIME":state.END_TIME,"START_TIME":state.START_TIME,"POINT_TYPE":state.pointType,"interfaceId":"daaa5c5bae26295626e948aa6702e2e9"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getDayData'] = res.data;
                
     // console.log(res, '关联站点-echarts图数据')
if (res?.data?.head?.statusCode === '200' && res?.data?.data?.length) {
  const data = handleData(res?.data?.data); // 参数注意修改
  state.echartsData = data.map(item =>{
    return{
      ...item,
      MONITORTIME: item.MONITORTIME_NAME
    }
  })

  // 限值
  state.maxValue = '-';
} else {
  state.echartsData = []
}

// 折线图配置项修改
setOptions();

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.echartsData = []

      reject(error);
    });
  });
},
              },
// 接口函数
 getPollutantsListCopy: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POLLUTE":"state.polluteType","END_TIME":"state.END_TIME","START_TIME":"state.START_TIME","POINT_TYPE":"global.airGlobalVariables.effectEvaluation.pointType","TIME_TYPE":"state.timeType","REGION_PATH":"global.regionaQuery.regionCode","interfaceId":"d9a5fba06e3f6deb5e0a71defc09eeea"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POLLUTE":state.polluteType,"END_TIME":state.END_TIME,"START_TIME":state.START_TIME,"POINT_TYPE":global.airGlobalVariables.effectEvaluation.pointType,"TIME_TYPE":state.timeType,"REGION_PATH":global.regionaQuery.regionCode,"interfaceId":"d9a5fba06e3f6deb5e0a71defc09eeea"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POLLUTE":state.polluteType,"END_TIME":state.END_TIME,"START_TIME":state.START_TIME,"POINT_TYPE":global.airGlobalVariables.effectEvaluation.pointType,"TIME_TYPE":state.timeType,"REGION_PATH":global.regionaQuery.regionCode,"interfaceId":"d9a5fba06e3f6deb5e0a71defc09eeea"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPollutantsListCopy'] = res.data;
                
     // console.log(res, '关联站点-echarts图数据')
if (res?.data?.head?.statusCode === '200' && res?.data?.data?.length) {
  const data = handleData(res?.data?.data); // 参数注意修改
  state.echartsData = data.map(item => {
    return {
      ...item,
      MONITORTIME: item.MONITORTIME_NAME,
    }
  })

  // 限值
  state.maxValue = '-';
} else {
  state.echartsData = []
}

// 折线图配置项修改
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_TYPE":"global.airGlobalVariables.effectEvaluation.pointType","TIME_TYPE":"state.timeType","interfaceId":"66ad2ebe9d660295568b05187f34e133"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_TYPE":global.airGlobalVariables.effectEvaluation.pointType,"TIME_TYPE":state.timeType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_TYPE":global.airGlobalVariables.effectEvaluation.pointType,"TIME_TYPE":state.timeType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     
const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  const dateValue = data.MONITORTIME
  let startTime = ''
  let endTime = ''
  if (state.timeType === '5minute') {
    endTime = dateValue + ':00'
    startTime = getPrevTime(endTime, 'minute')
    state.START_TIME = startTime.slice(0,16)
    state.END_TIME = endTime.slice(0,16)
  } else if(state.timeType === 'hour'){
     endTime = dateValue + ':00:00'
    startTime = getPrevTime(endTime, 'hour')
    state.START_TIME = startTime.slice(0,13)
    state.END_TIME = endTime.slice(0,13)
  }
  state.timeValue = [state.START_TIME,state.END_TIME]
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
watch(() => [global.airGlobalVariables.effectEvaluation.pointType], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getLatestTime', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-zywrwbhqsDialog', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getData();
onMounted(() => {
setPageScale('t-l-c-zywrwbhqsDialog', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tColx0x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0x0.default, componentState.tColx0x0x0?.[state.screenSize]));

 const tTabsBasex0x0x0x0ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x0x0x0.default, componentState.tTabsBasex0x0x0x0?.[state.screenSize]));

 const tColx0x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x0x1.default, componentState.tColx0x0x1?.[state.screenSize]));

 const tTabsx0x0x1x0ComputedData = computed(() => _.merge({}, componentState.tTabsx0x0x1x0.default, componentState.tTabsx0x0x1x0?.[state.screenSize]));

 const tColx0x0x2ComputedData = computed(() => _.merge({}, componentState.tColx0x0x2.default, componentState.tColx0x0x2?.[state.screenSize]));

 const tDatePickerx0x0x2x0ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x0x2x0.default, componentState.tDatePickerx0x0x2x0?.[state.screenSize]));

 const tDatePickerx0x0x2x1ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x0x2x1.default, componentState.tDatePickerx0x0x2x1?.[state.screenSize]));

 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tChartDesignx0x1x0ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x1x0.default, componentState.tChartDesignx0x1x0?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

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
tColx0x0x0ComputedData,
tTabsBasex0x0x0x0ComputedData,
tColx0x0x1ComputedData,
tTabsx0x0x1x0ComputedData,
tColx0x0x2ComputedData,
tDatePickerx0x0x2x0ComputedData,
tDatePickerx0x0x2x1ComputedData,
tRowx0x1ComputedData,
tChartDesignx0x1x0ComputedData,
ontabClick1734003608182,
ontabClick1736492237255,
ondateChange1736501207070_0_0,
ondateChange1735011612852,
};
},
}
</script>

<style scoped>
.t-l-c-zywrwbhqsDialog {
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
background-color: rgba(2, 24, 43, 0);
}
.t-l-c-zywrwbhqsDialog .zywrwbhqsDialog-t-row-0-0 {
position: absolute !important;
top: 20px;
left: 0px;
width: 100%;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: space-between;
align-items: center;
gap: auto;
padding-left: 20px;
padding-right: 20px;
}

.t-l-c-zywrwbhqsDialog .zywrwbhqsDialog-t-col-0-0-0 {
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

.t-l-c-zywrwbhqsDialog .zywrwbhqsDialog-t-tabs-base-0-0-0-0 {
position: unset;
top: 0px;
left: 0px;
width: 340px;
height: 32px;
pointer-events: auto;
}

.t-l-c-zywrwbhqsDialog .zywrwbhqsDialog-t-col-0-0-1 {
position: relative;
top: null;
left: null;
width: 100px;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-zywrwbhqsDialog .zywrwbhqsDialog-t-tabs-0-0-1-0 {
position: unset;
top: 10px;
left: 385px;
width: 115px;
height: 20px;
pointer-events: auto;
}

.t-l-c-zywrwbhqsDialog .zywrwbhqsDialog-t-col-0-0-2 {
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

.t-l-c-zywrwbhqsDialog .zywrwbhqsDialog-t-date-picker-0-0-2-0 {
position: unset;
top: 0px;
left: 494px;
width: 385px;
height: 32px;
pointer-events: auto;
}

.t-l-c-zywrwbhqsDialog .zywrwbhqsDialog-t-date-picker-0-0-2-1 {
position: unset;
top: 0px;
left: 494px;
width: 385px;
height: 32px;
pointer-events: auto;
}

.t-l-c-zywrwbhqsDialog .zywrwbhqsDialog-t-row-0-1 {
position: absolute !important;
top: 75px;
left: 0px;
width: 100%;
height: calc(100% - 80px);
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
padding-left: 20px;
padding-right: 20px;
}

.t-l-c-zywrwbhqsDialog .zywrwbhqsDialog-t-chart-design-0-1-0 {
position: unset;
top: 80px;
left: 0px;
width: 100%;
height: 100%;
pointer-events: auto;
}
</style>
