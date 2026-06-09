<template>
  <div id="t-l-c-airPollutionAnalysisArea" class="t-l-c-airPollutionAnalysisArea" ><t-text id="t-text-eea4.cc36d0152" class="airPollutionAnalysisArea-t-text-0-0"  :label="state.desc" :editable="tTextx0x0ComputedData.editable" :c-style="tTextx0x0ComputedData.cStyle"></t-text><t-chart-design id="t-chart-design-2164.b33e060e6" class="airPollutionAnalysisArea-t-chart-design-0-1"  :empty-img="tChartDesignx0x1ComputedData.emptyImg" :c-style="tChartDesignx0x1ComputedData.cStyle" :options="state.options"></t-chart-design><t-component id="t-component-9b78.0b5de968f" class="airPollutionAnalysisArea-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName"></t-component><t-text id="t-text-f2f2.5e8b21149" class="airPollutionAnalysisArea-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle"></t-text><t-date-picker v-if="state.airPollutionContentState.timeType === 'hour'" id="t-date-picker-93a9.4ae6d3fa" class="airPollutionAnalysisArea-t-date-picker-0-4"  :placeholder="tDatePickerx0x4ComputedData.placeholder" :start-placeholder="tDatePickerx0x4ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x4ComputedData.endPlaceholder" :type="tDatePickerx0x4ComputedData.type" :clearable="tDatePickerx0x4ComputedData.clearable" :range-separator="tDatePickerx0x4ComputedData.rangeSeparator" :default-date="state.selectTimeArr" :separator="tDatePickerx0x4ComputedData.separator" :readonly="tDatePickerx0x4ComputedData.readonly" :editable="tDatePickerx0x4ComputedData.editable" :c-style="tDatePickerx0x4ComputedData.cStyle" :is-disabled-front="tDatePickerx0x4ComputedData.isDisabledFront" :disabled-date="state.airPollutionContentState.maxTimeValue" @date-change="ondateChange1734955995964_0_0"></t-date-picker><t-date-picker v-if="state.airPollutionContentState.timeType === 'day'" id="t-date-picker-2356.5b84cc43f" class="airPollutionAnalysisArea-t-date-picker-0-5"  :placeholder="tDatePickerx0x5ComputedData.placeholder" :start-placeholder="tDatePickerx0x5ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x5ComputedData.endPlaceholder" :type="tDatePickerx0x5ComputedData.type" :clearable="tDatePickerx0x5ComputedData.clearable" :range-separator="tDatePickerx0x5ComputedData.rangeSeparator" :default-date="state.selectTimeArr" :separator="tDatePickerx0x5ComputedData.separator" :readonly="tDatePickerx0x5ComputedData.readonly" :editable="tDatePickerx0x5ComputedData.editable" :c-style="tDatePickerx0x5ComputedData.cStyle" :is-disabled-front="tDatePickerx0x5ComputedData.isDisabledFront" :disabled-date="state.airPollutionContentState.maxTimeValue" @date-change="ondateChange1734938093688"></t-date-picker><t-text id="t-text-bed5.a6511a765" class="airPollutionAnalysisArea-t-text-0-6"  :label="state.descLastYear" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle"></t-text><t-chart-design id="t-chart-design-3c1c.213a97d03" class="airPollutionAnalysisArea-t-chart-design-0-7"  :empty-img="tChartDesignx0x7ComputedData.emptyImg" :c-style="tChartDesignx0x7ComputedData.cStyle" :options="state.optionsLastYear"></t-chart-design><t-component id="t-component-04c9.110c01ae1" class="airPollutionAnalysisArea-t-component-0-8"  :name="tComponentx0x8ComputedData.name" :c-style="tComponentx0x8ComputedData.cStyle" :src="tComponentx0x8ComputedData.src" :component-name="tComponentx0x8ComputedData.componentName"></t-component><t-text id="t-text-2b95.a6268114f" class="airPollutionAnalysisArea-t-text-0-9"  :label="tTextx0x9ComputedData.label" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle"></t-text><t-date-picker v-if="state.airPollutionContentState.timeType === 'hour'" id="t-date-picker-7771.6ab05b947" class="airPollutionAnalysisArea-t-date-picker-0-10"  :placeholder="tDatePickerx0x10ComputedData.placeholder" :start-placeholder="tDatePickerx0x10ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x10ComputedData.endPlaceholder" :type="tDatePickerx0x10ComputedData.type" :clearable="tDatePickerx0x10ComputedData.clearable" :range-separator="tDatePickerx0x10ComputedData.rangeSeparator" :default-date="state.selectTimeArrLastYear" :separator="tDatePickerx0x10ComputedData.separator" :readonly="tDatePickerx0x10ComputedData.readonly" :editable="tDatePickerx0x10ComputedData.editable" :c-style="tDatePickerx0x10ComputedData.cStyle" :is-disabled-front="tDatePickerx0x10ComputedData.isDisabledFront" :disabled-date="state.airPollutionContentState.maxTimeValue" @date-change="ondateChange1737014291568_0_0"></t-date-picker><t-date-picker v-if="state.airPollutionContentState.timeType === 'day'" id="t-date-picker-8740.f1b748269" class="airPollutionAnalysisArea-t-date-picker-0-11"  :placeholder="tDatePickerx0x11ComputedData.placeholder" :start-placeholder="tDatePickerx0x11ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x11ComputedData.endPlaceholder" :type="tDatePickerx0x11ComputedData.type" :clearable="tDatePickerx0x11ComputedData.clearable" :range-separator="tDatePickerx0x11ComputedData.rangeSeparator" :default-date="state.selectTimeArrLastYear" :separator="tDatePickerx0x11ComputedData.separator" :readonly="tDatePickerx0x11ComputedData.readonly" :editable="tDatePickerx0x11ComputedData.editable" :c-style="tDatePickerx0x11ComputedData.cStyle" :is-disabled-front="tDatePickerx0x11ComputedData.isDisabledFront" :disabled-date="state.airPollutionContentState.maxTimeValue" @date-change="ondateChange1737014291568_0_0"></t-date-picker></div>
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
import { TChartDesign, TComponent, TDatePicker, TText } from '@ths/design';

export default {
  components: {
    TChartDesign,
    TComponent,
    TDatePicker,
    TText,
  },
  setup() {
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
   selectTimeArrLastYear: [],
   optionsLastYear: "",
   descLastYear: "全市共发生--天污染天，均为臭氧污染其中--日发生中度污染，其余--天为轻度污染。",
   dataLengthLastYear: "",
   endTimeLastYear: "",
   startTimeLastYear: "",
   dataLength: "",
   selectTimeArr: [],
   endTime: "",
   startTime: "",
   desc: "全市共发生--天污染天，均为臭氧污染其中--日发生中度污染，其余--天为轻度污染。",
   lastYearAnalysisList: [],
   airPollutionContentState: {"startTime":"","timeType":"","endTime":"","selectTimeArr":[],"maxTimeValue":""},
   pageTitle: "污染区间分析",
   analysisData: "",
   options: {},
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
tTextx0x0: {
defaultStyle: {
            default: {"width":"960px","height":"31px","color":"var(--business-text-avianize)","left":"-1px","top":"46px","backgroundColor":"var(--business-show-bg15)","fontSize":"14px","lineHeight":"32px","paddingLeft":"20px","position":"unset"},
            
            },
 default: { 
 
label:"全市共发生--天污染天，均为臭氧污染其中--日发生中度污染，其余--天为轻度污染。",
editable:false,
cStyle:{"wrapper":{"default":{"width":"960px","height":"31px","color":"var(--business-text-avianize)","left":"-1px","top":"46px","backgroundColor":"var(--business-show-bg15)","fontSize":"14px","lineHeight":"32px","paddingLeft":"20px","position":"unset"}}}, 
 },
},
tChartDesignx0x1: {
defaultStyle: {
            default: {"height":"223px","width":"960px","position":"unset","left":"0px","top":"90px"},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"223px","width":"960px","position":"unset","left":"0px","top":"90px"}},"emptyText":{"default":{"color":"var(--business-no-data-color)"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"910px","height":"27px","margin":"0 auto","backgroundColor":"","position":"unset","left":"0px","top":"3px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"910px","height":"27px","margin":"0 auto","backgroundColor":"","position":"unset","left":"0px","top":"3px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/dialogTitleFirstBg",
componentName:"dialogTitleFirstBgComponent", 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"346px","height":"19px","color":"var(--t-white)","fontFamily":"方正综艺","fontSize":"20px","position":"unset","left":"39px","top":"7px","animationName":""},
            
            },
 default: { 
 
label:"污染区间分析",
editable:false,
cStyle:{"wrapper":{"default":{"width":"346px","height":"19px","color":"var(--t-white)","fontFamily":"方正综艺","fontSize":"20px","position":"unset","left":"39px","top":"7px","animationName":""}}}, 
 },
},
tDatePickerx0x4: {
defaultStyle: {
            default: {"width":"296px","height":"26px","position":"unset","left":"656px","top":"3px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"296px","height":"26px","position":"unset","left":"656px","top":"3px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tDatePickerx0x5: {
defaultStyle: {
            default: {"width":"296px","height":"26px","position":"unset","left":"656px","top":"3px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"296px","height":"26px","position":"unset","left":"656px","top":"3px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"960px","height":"31px","color":"var(--business-text-avianize)","left":"-2px","top":"372px","backgroundColor":"var(--business-show-bg15)","fontSize":"14px","lineHeight":"32px","paddingLeft":"20px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"全市共发生--天污染天，均为臭氧污染其中--日发生中度污染，其余--天为轻度污染。",
editable:false,
cStyle:{"wrapper":{"default":{"width":"960px","height":"31px","color":"var(--business-text-avianize)","left":"-2px","top":"372px","backgroundColor":"var(--business-show-bg15)","fontSize":"14px","lineHeight":"32px","paddingLeft":"20px","position":"unset","animationName":""}}}, 
 },
},
tChartDesignx0x7: {
defaultStyle: {
            default: {"height":"223px","width":"960px","position":"unset","left":"-1px","top":"416px","animationName":""},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"223px","width":"960px","position":"unset","left":"-1px","top":"416px","animationName":""}},"emptyText":{"default":{"color":"var(--business-no-data-color)"}}},
options:"", 
 },
},
tComponentx0x8: {
defaultStyle: {
            default: {"width":"910px","height":"27px","margin":"0 auto","backgroundColor":"","position":"unset","left":"-1px","top":"329px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"910px","height":"27px","margin":"0 auto","backgroundColor":"","position":"unset","left":"-1px","top":"329px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/dialogTitleFirstBg",
componentName:"dialogTitleFirstBgComponent", 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"width":"346px","height":"19px","color":"var(--t-white)","fontFamily":"方正综艺","fontSize":"20px","position":"unset","left":"38px","top":"333px","animationName":""},
            
            },
 default: { 
 
label:"历史污染区间分析",
editable:false,
cStyle:{"wrapper":{"default":{"width":"346px","height":"19px","color":"var(--t-white)","fontFamily":"方正综艺","fontSize":"20px","position":"unset","left":"38px","top":"333px","animationName":""}}}, 
 },
},
tDatePickerx0x10: {
defaultStyle: {
            default: {"width":"296px","height":"26px","position":"unset","left":"655px","top":"329px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"296px","height":"26px","position":"unset","left":"655px","top":"329px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tDatePickerx0x11: {
defaultStyle: {
            default: {"width":"296px","height":"26px","position":"unset","left":"655px","top":"329px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"296px","height":"26px","position":"unset","left":"655px","top":"329px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
});
const getAqiColor = (aqi) => {
 const aqiNum = Number(aqi)
  let aqiColor = '';
  switch (true) {
    case aqiNum <= 50:
      aqiColor = '#00e400'
      break;
    case aqiNum <= 100:
      aqiColor = '#ffcd35'
      break;
    case aqiNum <= 150:
      aqiColor = '#ff7e00'
      break;
    case aqiNum <= 200:
      aqiColor = '#dd4209'
      break;
    case aqiNum <= 300:
      aqiColor = '#99004c'
      break;
    case aqiNum > 300:
      aqiColor = '#46072d'
      break;
    default:
      aqiColor = '#000000'
  }
  return aqiColor
};
const getAnalysis = (type) => {
const getDataNow = async () => {
   getAnalysisData();
   await getPolluteArea();
   getDesc();
}

const getDataByLastYear = async () => {
   getAnalysisDataLastYear ();
   await getPolluteAreaLastYear();
   getDescLastYear ();
}

if(type !== 'lastYear') {
  state.startTime = state.selectTimeArr[0];
  state.endTime = state.selectTimeArr[1];
  console.log(state.selectTimeArr)
  getDataNow();
} else {
  state.startTimeLastYear = state.selectTimeArrLastYear[0];
  state.endTimeLastYear  = state.selectTimeArrLastYear[1];
  getDataByLastYear();
}
};
const initData = () => {
// 转换日期为去年
const getTimeByLastYear = (date) => {
   const timeArr = date.split('-')
   return `${(Number(timeArr[0]) - 1)}-${timeArr[1]}-${timeArr[2]}`
}

state.airPollutionContentState = global.businessDialog.dialogParmas;
const { startTime, endTime, selectTimeArr, timeType } = state.airPollutionContentState;
// 处理当前时间
state.startTime = startTime;
state.endTime = endTime;
state.selectTimeArr = timeType === 'hour' ? [startTime + ' 00', endTime + ' 00'] : selectTimeArr;

// 处理去年的时间
state.startTimeLastYear = getTimeByLastYear(startTime);
state.endTimeLastYear  = getTimeByLastYear(endTime);
state.selectTimeArrLastYear = [state.startTimeLastYear, state.endTimeLastYear];

const getDataNow = async () => {
   getAnalysisData();
   await getPolluteArea();
   getDesc();
}

const getDataByLastYear = async () => {
   getAnalysisDataLastYear ();
   await getPolluteAreaLastYear();
   getDescLastYear ();
}

const getData = async () => {
   await getDataNow();
   getDataByLastYear();
}


if(startTime && timeType && endTime) {
   getData();
 }
};
const ondateChange1734955995964_0_0 = (data) => {
// 设置变量值
state.selectTimeArr = data;
// 执行自定义方法
getAnalysis("");
};
const ondateChange1734938093688 = (data) => {
// 设置变量值
state.selectTimeArr = data;
// 执行自定义方法
getAnalysis("");
};
const ondateChange1737014291568_0_0 = (data) => {
// 设置变量值
state.selectTimeArrLastYear = data;
// 执行自定义方法
getAnalysis("lastYear");
};
// 接口函数
const getAnalysisDataLastYear = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_TYPE":global.regionaQuery.paramsRegionType,"END_TIME":state.endTimeLastYear,"START_TIME":state.startTimeLastYear,"TIME_TYPE":state.airPollutionContentState.timeType,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"2a753648b0b59fed2f21709dffea8ff1"},}).then((res) => {
     // 成功的操作
     const { data, head } = res.data;
if (head.statusCode === '200') {
  state.analysisData = data.map(item => [item.MONITORTIME, item.AQI]);
  const dates = data.map(item => item.MONITORTIME);
  //  计算需要有阴影背景的部分
  const markAreaData = [];
  for (let i = 0; i < state.analysisData.length; i++) {
    if (state.analysisData[i][1] > 100) {
      if (markAreaData.length === 0 || markAreaData[markAreaData.length - 1][1].xAxis !== state.analysisData[i - 1][0]) {
        markAreaData.push([
          { xAxis: state.analysisData[i][0]},
          { xAxis: state.analysisData[i][0]}
        ]);
      } else {
        markAreaData[markAreaData.length - 1][1].xAxis = state.analysisData[i][0];
      }
    }
  }

  state.optionsLastYear = {
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
     formatter: function (formatterParams) {
      let str = '';
      const name = state.airPollutionContentState.timeType === 'hour' ? dateFormat(new Date(formatterParams[0].axisValueLabel), 'DD日HH时') : dateFormat(new Date(formatterParams[0].axisValueLabel), 'MM月DD日');
      const nameStr = `<div style="font-weight: bold;width: 180px;marin-bottom: 10px">${name}</div>`;
      formatterParams.forEach((item) => {
        str += `<div style="height: 20px; display: flex;align-items: center;justify-content: space-between;padding: 12px 0;;line-height: 10px;"><span>${item.marker}${item.seriesName}</span><span style="font-weight: bold;">${item.value[1]}</span></div>`;
      });
      return `${nameStr}${str}`;
     }
   },
    dataZoom: [
      {
       type: "inside",
       start: 0,
       end: 100,
      }
    ],
    grid: {
      left: "8%",
      top: "15%",
      bottom: "15%",
      right: "2%"
    },
    xAxis: {
      type: 'category',
      data: dates,
      // 自定义主题-开始
      axisLabel: {
        rotate: 25,
        color: "#B7E3FF",
        formatter: function (value) {
            return state.airPollutionContentState.timeType === 'hour' ? dateFormat(new Date(value), 'DD日HH时') : dateFormat(new Date(value), 'MM月DD日')
        }
      },
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
    yAxis: {
      type: 'value',
      name: "AQI",
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
      // 自定义主题-结束
    },
    series: [
      {
        name: 'AQI',
        type: 'bar',
        data: state.analysisData,
        // barWidth: 15,
        barMaxWidth: 100,
        itemStyle: {
          normal: {
            color: function(params) {
              return getAqiColor(params.value[1]);
            }
          }
        },
        markArea: {
          silent: true,
          data: markAreaData,
          itemStyle: {
            color: 'rgba(68, 255, 171, 0.1)'
          }
        }
      }
    ]
  };

  console.log(state.options)
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [global.regionaQuery.paramsRegionType], () => {
getAnalysisDataLastYear();
},{
deep: true, // 深度监听
});
// 接口函数
const getDescLastYear = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.airPollutionContentState.timeType,"START_TIME":state.startTimeLastYear,"REGION_TYPE":global.regionaQuery.paramsRegionType,"END_TIME":state.endTimeLastYear,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"b657ed4d4c1919b64206a49d31842b81"},}).then((res) => {
     // 成功的操作
     const { data, head } = res.data;
if (head.statusCode === '200' && data[0]) {
 const { CO_NUM, NO2_NUM, O3_NUM, PM10_NUM, PM25_NUM, Q_NUM, SO2_NUM, WR_NUM, YZ_NUM, ZH_NUM, Z_NUM } = data[0];
 // 污染物污染天数
 const pollutorDay = [
  {
    label: replacePollutionCharacter('PM25'),
    value: PM25_NUM || '0',
  },
  {
    label: replacePollutionCharacter('PM10'),
    value: PM10_NUM || '0',
  },
  {
    label: replacePollutionCharacter('SO2'),
    value: SO2_NUM || '0',
  },
  {
    label: replacePollutionCharacter('NO2'),
    value: NO2_NUM || '0',
  },
  {
    label: replacePollutionCharacter('CO'),
    value: CO_NUM || '0',
  },
  {
    label: '臭氧',
    value: O3_NUM || '0',
  },
 ]
 // 污染情况天数
 const polluteTypeDay = [
  {
    label: '轻度污染',
    value: Q_NUM || '0',
  },
  {
    label: '中度污染',
    value: Z_NUM || '0',
  },
  {
    label: '重度污染',
    value: ZH_NUM || '0',
  },
  {
    label: '严重污染',
    value: YZ_NUM || '0',
  }
 ];
 // 污染总天数
 const totalDay = WR_NUM || '0';

 // 是否有多种污染物天数 
 const isMorePollutorDay = pollutorDay.filter(item => item.value !== '0').length > 1;
 //  是否有多种类型污染情况天数
 const isMorePolluteType = polluteTypeDay.filter(item => item.value !== '0').length > 1;
 // 时间类型
 const timeType = state.airPollutionContentState.timeType === 'hour' ? '小时' : '天';  

 // 污染物天数描述文字 
 let pollutorText = '';
 if(isMorePollutorDay) {
   pollutorText = '其中'
   pollutorDay.filter(item => item.value !== '0').forEach((item1, index) =>  {
    pollutorText += `${item1.label}污染${item1.value}${timeType}${index === pollutorDay.filter(item => item.value !== '0').length - 1 ? '。' : '，'}`
   })
  } else {
    const onePollutor = pollutorDay.find(item => item.value !== '0')
    pollutorText = `均为${onePollutor?.label}污染。`
  }

  // 污染情况天数描述文字
  let polluteTypeText = '';
  if(isMorePolluteType) {
    polluteTypeText = '其中'
    polluteTypeDay.filter(item => item.value !== '0').forEach((item1, index)=>  {
    polluteTypeText += `${item1.value}${timeType}为${item1.label}${index === polluteTypeDay.filter(item => item.value !== '0').length - 1 ? '。' : '，'}`
   })
  } else {
    const onePolluteType = polluteTypeDay.find(item => item.value !== '0')
    polluteTypeText = `${totalDay}${timeType}均为${onePolluteType?.label}。`
  }

  const regionType = global.regionaQuery.paramsRegionType === 'province' || global.regionaQuery.paramsRegionType === 'city' ? '全市' : global.regionaQuery.regionName;
  state.descLastYear = `${regionType}共有${state.dataLengthLastYear}个污染区间，共计${totalDay}个污染${timeType}`;
  if(totalDay !== '0') {
    state.descLastYear += `，${pollutorText}${polluteTypeText}`;
  }
} else {
  state.descLastYear = '--'
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [global.regionaQuery.paramsRegionType], () => {
getDescLastYear();
},{
deep: true, // 深度监听
});
// 接口函数
const getPolluteAreaLastYear = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"START_TIME":state.startTimeLastYear,"END_TIME":state.endTimeLastYear,"REGION_TYPE":global.regionaQuery.paramsRegionType,"REGION_CODE":global.regionaQuery.regionCode,"TIME_TYPE":state.airPollutionContentState.timeType,"interfaceId":"1322c63c6628f0d4be4c8595012cf05d"},}).then((res) => {
     // 成功的操作
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.dataLengthLastYear = data.length;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableData = [];
      reject(error);
    });
  });
};
// 接口函数
const getDesc = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.airPollutionContentState.timeType,"START_TIME":state.startTime,"REGION_TYPE":global.regionaQuery.paramsRegionType,"END_TIME":state.endTime,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"b657ed4d4c1919b64206a49d31842b81"},}).then((res) => {
     // 成功的操作
     const { data, head } = res.data;
if (head.statusCode === '200' && data[0]) {
 const { CO_NUM, NO2_NUM, O3_NUM, PM10_NUM, PM25_NUM, Q_NUM, SO2_NUM, WR_NUM, YZ_NUM, ZH_NUM, Z_NUM } = data[0];
 // 污染物污染天数
 const pollutorDay = [
  {
    label: replacePollutionCharacter('PM25'),
    value: PM25_NUM || '0',
  },
  {
    label: replacePollutionCharacter('PM10'),
    value: PM10_NUM || '0',
  },
  {
    label: replacePollutionCharacter('SO2'),
    value: SO2_NUM || '0',
  },
  {
    label: replacePollutionCharacter('NO2'),
    value: NO2_NUM || '0',
  },
  {
    label: replacePollutionCharacter('CO'),
    value: CO_NUM || '0',
  },
  {
    label: '臭氧',
    value: O3_NUM || '0',
  },
 ]
 // 污染情况天数
 const polluteTypeDay = [
  {
    label: '轻度污染',
    value: Q_NUM || '0',
  },
  {
    label: '中度污染',
    value: Z_NUM || '0',
  },
  {
    label: '重度污染',
    value: ZH_NUM || '0',
  },
  {
    label: '严重污染',
    value: YZ_NUM || '0',
  }
 ];
 // 污染总天数
 const totalDay = WR_NUM || '0';

 // 是否有多种污染物天数 
 const isMorePollutorDay = pollutorDay.filter(item => item.value !== '0').length > 1;
 //  是否有多种类型污染情况天数
 const isMorePolluteType = polluteTypeDay.filter(item => item.value !== '0').length > 1;
 // 时间类型
 const timeType = state.airPollutionContentState.timeType === 'hour' ? '小时' : '天';  

 // 污染物天数描述文字 
 let pollutorText = '';
 if(isMorePollutorDay) {
   pollutorText = '其中'
   pollutorDay.filter(item => item.value !== '0').forEach((item1, index) =>  {
    pollutorText += `${item1.label}污染${item1.value}${timeType}${index === pollutorDay.filter(item => item.value !== '0').length - 1 ? '。' : '，'}`
   })
  } else {
    const onePollutor = pollutorDay.find(item => item.value !== '0')
    pollutorText = `均为${onePollutor?.label}污染。`
  }

  // 污染情况天数描述文字
  let polluteTypeText = '';
  if(isMorePolluteType) {
    polluteTypeText = '其中'
    polluteTypeDay.filter(item => item.value !== '0').forEach((item1, index)=>  {
    polluteTypeText += `${item1.value}${timeType}为${item1.label}${index === polluteTypeDay.filter(item => item.value !== '0').length - 1 ? '。' : '，'}`
   })
  } else {
    const onePolluteType = polluteTypeDay.find(item => item.value !== '0')
    polluteTypeText = `${totalDay}${timeType}均为${onePolluteType?.label}。`
  }

  const regionType = global.regionaQuery.paramsRegionType === 'province' || global.regionaQuery.paramsRegionType === 'city' ? '全市' : global.regionaQuery.regionName;
  state.desc = `${regionType}共有${state.dataLength}个污染区间，共计${totalDay}个污染${timeType}`;
  if(totalDay !== '0') {
    state.desc += `，${pollutorText}${polluteTypeText}`;
  }
} else {
  state.desc = '--'
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [global.regionaQuery.paramsRegionType], () => {
getDesc();
},{
deep: true, // 深度监听
});
// 接口函数
const getAnalysisData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_TYPE":global.regionaQuery.paramsRegionType,"END_TIME":state.endTime,"START_TIME":state.startTime,"TIME_TYPE":state.airPollutionContentState.timeType,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"2a753648b0b59fed2f21709dffea8ff1"},}).then((res) => {
     // 成功的操作
     const { data, head } = res.data;
if (head.statusCode === '200') {
  state.analysisData = data.map(item => [item.MONITORTIME, item.AQI]);
  const dates = data.map(item => item.MONITORTIME);
  //  计算需要有阴影背景的部分
  const markAreaData = [];
  for (let i = 0; i < state.analysisData.length; i++) {
    if (state.analysisData[i][1] > 100) {
      if (markAreaData.length === 0 || markAreaData[markAreaData.length - 1][1].xAxis !== state.analysisData[i - 1][0]) {
        markAreaData.push([
          { xAxis: state.analysisData[i][0]},
          { xAxis: state.analysisData[i][0]}
        ]);
      } else {
        markAreaData[markAreaData.length - 1][1].xAxis = state.analysisData[i][0];
      }
    }
  }

  state.options = {
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
     formatter: function (formatterParams) {
      let str = '';
      const name = state.airPollutionContentState.timeType === 'hour' ? dateFormat(new Date(formatterParams[0].axisValueLabel), 'DD日HH时') : dateFormat(new Date(formatterParams[0].axisValueLabel), 'MM月DD日');
      const nameStr = `<div style="font-weight: bold;width: 180px;marin-bottom: 10px">${name}</div>`;
      formatterParams.forEach((item) => {
        str += `<div style="height: 20px; display: flex;align-items: center;justify-content: space-between;padding: 12px 0;;line-height: 10px;"><span>${item.marker}${item.seriesName}</span><span style="font-weight: bold;">${item.value[1]}</span></div>`;
      });
      return `${nameStr}${str}`;
     }
   },
    dataZoom: [
      {
       type: "inside",
       start: 0,
       end: 100,
      }
    ],
    grid: {
      left: "8%",
      top: "15%",
      bottom: "15%",
      right: "2%"
    },
    xAxis: {
      type: 'category',
      data: dates,
      // 自定义主题-开始
      axisLabel: {
        rotate: 25,
        color: "#B7E3FF",
        formatter: function (value) {
            return state.airPollutionContentState.timeType === 'hour' ? dateFormat(new Date(value), 'DD日HH时') : dateFormat(new Date(value), 'MM月DD日')
        }
      },
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
    yAxis: {
      type: 'value',
      name: "AQI",
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
      // 自定义主题-结束
    },
    series: [
      {
        name: 'AQI',
        type: 'bar',
        data: state.analysisData,
        // barWidth: 15,
        barMaxWidth: 100,
        itemStyle: {
          normal: {
            color: function(params) {
              return getAqiColor(params.value[1]);
            }
          }
        },
        markArea: {
          silent: true,
          data: markAreaData,
          itemStyle: {
            color: 'rgba(68, 255, 171, 0.1)'
          }
        }
      }
    ]
  };

  console.log(state.options)
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [global.regionaQuery.paramsRegionType], () => {
getAnalysisData();
},{
deep: true, // 深度监听
});
// 接口函数
const getPolluteArea = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"START_TIME":state.startTime,"END_TIME":state.endTime,"REGION_TYPE":global.regionaQuery.paramsRegionType,"REGION_CODE":global.regionaQuery.regionCode,"TIME_TYPE":state.airPollutionContentState.timeType,"interfaceId":"1322c63c6628f0d4be4c8595012cf05d"},}).then((res) => {
     // 成功的操作
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.dataLength = data.length;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableData = [];
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-airPollutionAnalysisArea', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initData();
onMounted(() => {
setPageScale('t-l-c-airPollutionAnalysisArea', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTextx0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0.default, componentState.tTextx0x0?.[state.screenSize]));

 const tChartDesignx0x1ComputedData = computed(() => _.merge({}, componentState.tChartDesignx0x1.default, componentState.tChartDesignx0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tDatePickerx0x4ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x4.default, componentState.tDatePickerx0x4?.[state.screenSize]));

 const tDatePickerx0x5ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x5.default, componentState.tDatePickerx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tChartDesignx0x7ComputedData = computed(() => _.merge({}, componentState.tChartDesignx0x7.default, componentState.tChartDesignx0x7?.[state.screenSize]));

 const tComponentx0x8ComputedData = computed(() => _.merge({}, componentState.tComponentx0x8.default, componentState.tComponentx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tDatePickerx0x10ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x10.default, componentState.tDatePickerx0x10?.[state.screenSize]));

 const tDatePickerx0x11ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x11.default, componentState.tDatePickerx0x11?.[state.screenSize]));

return {
global,
state,
componentState,
tTextx0x0ComputedData,
tChartDesignx0x1ComputedData,
tComponentx0x2ComputedData,
tTextx0x3ComputedData,
tDatePickerx0x4ComputedData,
tDatePickerx0x5ComputedData,
tTextx0x6ComputedData,
tChartDesignx0x7ComputedData,
tComponentx0x8ComputedData,
tTextx0x9ComputedData,
tDatePickerx0x10ComputedData,
tDatePickerx0x11ComputedData,
ondateChange1734955995964_0_0,
ondateChange1734938093688,
ondateChange1737014291568_0_0,
ondateChange1737014291568_0_0,
};
},
}
</script>

<style scoped>
.t-l-c-airPollutionAnalysisArea {
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
width: 960px;
height: 651px;
background-color: rgba(0,0,0,0);
}
.t-l-c-airPollutionAnalysisArea .airPollutionAnalysisArea-t-text-0-0 {
position: absolute !important;
top: 46px;
left: -1px;
width: 960px;
height: 31px;
pointer-events: auto;
}

.t-l-c-airPollutionAnalysisArea .airPollutionAnalysisArea-t-chart-design-0-1 {
position: absolute !important;
top: 90px;
left: 0px;
width: 960px;
height: 223px;
pointer-events: auto;
}

.t-l-c-airPollutionAnalysisArea .airPollutionAnalysisArea-t-component-0-2 {
position: absolute !important;
top: 3px;
left: 0px;
width: 910px;
height: 27px;
pointer-events: auto;
}

.t-l-c-airPollutionAnalysisArea .airPollutionAnalysisArea-t-text-0-3 {
position: absolute !important;
top: 7px;
left: 39px;
width: 346px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airPollutionAnalysisArea .airPollutionAnalysisArea-t-date-picker-0-4 {
position: absolute !important;
top: 3px;
left: 656px;
width: 296px;
height: 26px;
pointer-events: auto;
}

.t-l-c-airPollutionAnalysisArea .airPollutionAnalysisArea-t-date-picker-0-5 {
position: absolute !important;
top: 3px;
left: 656px;
width: 296px;
height: 26px;
pointer-events: auto;
}

.t-l-c-airPollutionAnalysisArea .airPollutionAnalysisArea-t-text-0-6 {
position: absolute !important;
top: 372px;
left: -2px;
width: 960px;
height: 31px;
pointer-events: auto;
}

.t-l-c-airPollutionAnalysisArea .airPollutionAnalysisArea-t-chart-design-0-7 {
position: absolute !important;
top: 416px;
left: -1px;
width: 960px;
height: 223px;
pointer-events: auto;
}

.t-l-c-airPollutionAnalysisArea .airPollutionAnalysisArea-t-component-0-8 {
position: absolute !important;
top: 329px;
left: -1px;
width: 910px;
height: 27px;
pointer-events: auto;
}

.t-l-c-airPollutionAnalysisArea .airPollutionAnalysisArea-t-text-0-9 {
position: absolute !important;
top: 333px;
left: 38px;
width: 346px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airPollutionAnalysisArea .airPollutionAnalysisArea-t-date-picker-0-10 {
position: absolute !important;
top: 329px;
left: 655px;
width: 296px;
height: 26px;
pointer-events: auto;
}

.t-l-c-airPollutionAnalysisArea .airPollutionAnalysisArea-t-date-picker-0-11 {
position: absolute !important;
top: 329px;
left: 655px;
width: 296px;
height: 26px;
pointer-events: auto;
}
</style>
