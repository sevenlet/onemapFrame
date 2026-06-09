<template>
  <div id="t-l-c-airPollutionPointIndexStatus" class="t-l-c-airPollutionPointIndexStatus" ><t-rect id="t-rect-3390.860ad3087" class="airPollutionPointIndexStatus-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-rect id="t-rect-70c2.11cb6785e" class="airPollutionPointIndexStatus-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-text id="t-text-9ba4.2fb1ed338" class="airPollutionPointIndexStatus-t-text-0-2"  :label="state.pageTitle" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle"></t-text><t-rect id="t-rect-960a.2efad8ca2" class="airPollutionPointIndexStatus-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1734436738834"></t-rect><t-table id="t-table-f0e6.f75b05c77" class="airPollutionPointIndexStatus-t-table-0-4"  :height="tTablex0x4ComputedData.height" :stripe="tTablex0x4ComputedData.stripe" :border="tTablex0x4ComputedData.border" :auto-scroll="tTablex0x4ComputedData.autoScroll" :speed="tTablex0x4ComputedData.speed" :show-animation="tTablex0x4ComputedData.showAnimation" :animation-delay="tTablex0x4ComputedData.animationDelay" :animation-type="tTablex0x4ComputedData.animationType" :columns="state.tableColumns" :data="state.tableData" :default-sort="tTablex0x4ComputedData.defaultSort" :c-style="tTablex0x4ComputedData.cStyle"></t-table><t-chart-bar-stacked id="t-chart-bar-stacked-2c01.bb892dd38" class="airPollutionPointIndexStatus-t-chart-bar-stacked-0-5"  :empty-img="tChartBarStackedx0x5ComputedData.emptyImg" :c-style="tChartBarStackedx0x5ComputedData.cStyle" :options="tChartBarStackedx0x5ComputedData.options" :data="state.chartData" :series-setting="tChartBarStackedx0x5ComputedData.seriesSetting" :bar="componentState.tChartBarStackedx0x5.bar" :line="componentState.tChartBarStackedx0x5.line"></t-chart-bar-stacked><t-radio id="t-radio-7e06.0dbfd0918" class="airPollutionPointIndexStatus-t-radio-0-6"  :options="tRadiox0x6ComputedData.options" :active="state.airPollutionContentState.timeType" :alias="tRadiox0x6ComputedData.alias" :disabled="tRadiox0x6ComputedData.disabled" :border="tRadiox0x6ComputedData.border" :size="tRadiox0x6ComputedData.size" :is-use-button="tRadiox0x6ComputedData.isUseButton" :c-style="tRadiox0x6ComputedData.cStyle" @change="onchange1734945170218"></t-radio><t-date-picker v-if="state.airPollutionContentState.timeType === 'hour'" id="t-date-picker-c74c.73f7d874a" class="airPollutionPointIndexStatus-t-date-picker-0-7"  :placeholder="tDatePickerx0x7ComputedData.placeholder" :start-placeholder="tDatePickerx0x7ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x7ComputedData.endPlaceholder" :type="tDatePickerx0x7ComputedData.type" :clearable="tDatePickerx0x7ComputedData.clearable" :range-separator="tDatePickerx0x7ComputedData.rangeSeparator" :default-date="state.selectTimeArr" :separator="tDatePickerx0x7ComputedData.separator" :readonly="tDatePickerx0x7ComputedData.readonly" :editable="tDatePickerx0x7ComputedData.editable" :c-style="tDatePickerx0x7ComputedData.cStyle" :is-disabled-front="tDatePickerx0x7ComputedData.isDisabledFront" :disabled-date="state.maxTimeValue" @date-change="ondateChange1734946387028"></t-date-picker><t-date-picker v-if="state.airPollutionContentState.timeType === 'day'" id="t-date-picker-42a6.5a5caba24" class="airPollutionPointIndexStatus-t-date-picker-0-8"  :placeholder="tDatePickerx0x8ComputedData.placeholder" :start-placeholder="tDatePickerx0x8ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x8ComputedData.endPlaceholder" :type="tDatePickerx0x8ComputedData.type" :clearable="tDatePickerx0x8ComputedData.clearable" :range-separator="tDatePickerx0x8ComputedData.rangeSeparator" :default-date="state.selectTimeArr" :separator="tDatePickerx0x8ComputedData.separator" :readonly="tDatePickerx0x8ComputedData.readonly" :editable="tDatePickerx0x8ComputedData.editable" :c-style="tDatePickerx0x8ComputedData.cStyle" :is-disabled-front="tDatePickerx0x8ComputedData.isDisabledFront" :disabled-date="state.maxTimeValue" @date-change="ondateChange1734946275945"></t-date-picker><t-tabs-base id="t-tabs-base-ae77.6053fedb6" class="airPollutionPointIndexStatus-t-tabs-base-0-9"  :data="tTabsBasex0x9ComputedData.data" :space="tTabsBasex0x9ComputedData.space" :selected-tab-val="state.pollutionType" :inner-shadow-color="tTabsBasex0x9ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x9ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x9ComputedData.alias" :c-style="tTabsBasex0x9ComputedData.cStyle" :data-raw="tTabsBasex0x9ComputedData.dataRaw" @tab-click="ontabClick1735197626592"></t-tabs-base></div>
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
import { TChartBarStacked, TDatePicker, TRadio, TRect, TTable, TTabsBase, TText } from '@ths/design';

export default {
  components: {
    TChartBarStacked,
    TDatePicker,
    TRadio,
    TRect,
    TTable,
    TTabsBase,
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
   maxTimeValue: "",
   tableData: [],
   chartData: [],
   pollutionType: "PM25",
   selectTimeArr: [],
   airPollutionContentState: {"startTime":"","endTime":"","timeType":""},
   pageTitle: "污染日各站点对全市贡献比情况",
   tableColumns: [],
   barSeries: [],
   stateColumnCommon: {"stateList":[{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"1","fontStyle":{"color":"var(--business-warn)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"minWidth":"100px","type":"state"},
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
tRectx0x0: {
defaultStyle: {
            default: {"width":"1000px","height":"712px","position":"unset","left":"460px","top":"184px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"712px","position":"unset","left":"460px","top":"184px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"1000px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"460px","top":"184px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"460px","top":"184px","animationName":""}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"284px","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"479px","top":"198px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":""},
            
            },
 default: { 
 
label:"污染日各站点对全市贡献比情况",
editable:false,
cStyle:{"wrapper":{"default":{"width":"284px","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"479px","top":"198px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":""}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1418px","top":"195px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1418px","top":"195px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tTablex0x4: {
defaultStyle: {
            default: {"width":"960px","height":"372px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","position":"unset","left":"480px","top":"510px"},
            
            },
 default: { 
 
height:"372",
stripe:true,
border:false,
autoScroll:false,
speed:6,
showAnimation:false,
animationDelay:0.1,
animationType:"animate__fadeInUp",
columns:[],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"960px","height":"372px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","position":"unset","left":"480px","top":"510px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-table-header-bg)   ","fontSize":"14px","fontWeight":"400","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px","paddingLeft":"10px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-table-odd-row-bg)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"var(--t-white)","height":"40px","paddingTop":"8px","paddingBottom":"8px","fontSize":"14px","fontFamily":"微软雅黑","marginLeft":"10px","paddingLeft":"10px"},"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"}},"stripeBodyCell":{"default":{"backgroundColor":"var(--business-table-even-row-bg)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"}},"emptyText":{"default":{"color":"var(--business-no-data-color)","fontSize":"16px"}}}, 
 },
},
tChartBarStackedx0x5: {
defaultStyle: {
            default: {"width":"960px","height":"192px","position":"unset","left":"480px","top":"305px"},
            
            },
bar: computed(() => activeChartTheme.value?.bar),
line: computed(() => activeChartTheme.value?.line),
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"width":"960px","height":"192px","position":"unset","left":"480px","top":"305px"}},"emptyText":{"default":{"color":"var(--business-no-data-color)","fontSize":"12px"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"grid":{"containLabel":true,"bottom":"0%","top":"16%","right":"4%"},"dataZoom":[{"type":"inside","disabled":false}],"legend":{"itemWidth":16,"itemHeight":16,"top":"top","itemGap":10,"padding":[0,5,0,5],"textStyle":{"height":8,"rich":{"a":{"verticalAlign":"center"}}}},"color":["#62FFC0","#2CCAFF","#746CFE","#FFD878","#ADA6FF","#FF8578","#0073FF","#34FFFF"],"yAxis":[{"name":"%"}]})),
data:[],
seriesSetting:{"xAxisLabel":"label","data":computed(() =>state.barSeries)}, 
 },
},
tRadiox0x6: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justify-content":"center","width":"150px","height":"22px","position":"unset","left":"923px","top":"250px","animationName":""},
            
            },
 default: { 
 
options:[{"label":"hour","value":"按小时","disabled":false},{"label":"day","value":"按日","disabled":false}],
active:"",
alias:{"label":"label","value":"value","disabled":"disabled"},
disabled:false,
border:false,
size:"small",
isUseButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justify-content":"center","width":"150px","height":"22px","position":"unset","left":"923px","top":"250px","animationName":""}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"8px"},"active":{"color":"rgba(255, 255, 255, 1)"}},"circle":{"default":{"--el-color-white":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"active":{"--t-radio-active-bg-color":"var(--business-btn-active)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
tDatePickerx0x7: {
defaultStyle: {
            default: {"width":"340px","height":"32px","position":"unset","left":"1080px","top":"246px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"340px","height":"32px","position":"unset","left":"1080px","top":"246px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tDatePickerx0x8: {
defaultStyle: {
            default: {"width":"340px","height":"32px","position":"unset","left":"1080px","top":"246px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"340px","height":"32px","position":"unset","left":"1080px","top":"246px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tTabsBasex0x9: {
defaultStyle: {
            default: {"width":"400px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","left":"480px","top":"246px","position":"unset"},
            
            },
 default: { 
 
data:[{"label":"PM₂.₅","value":"PM25"},{"label":"PM₁₀","value":"PM10"},{"label":"SO₂","value":"SO2"},{"label":"NO₂","value":"NO2"},{"label":"CO","value":"CO"},{"label":"O₃","value":"O3"},{"label":"O₃-8h","value":"O3_8"}],
space:1,
selectedTabVal:"PM25",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":false},
cStyle:{"wrapper":{"default":{"width":"400px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","left":"480px","top":"246px","position":"unset"}},"itemWrapper":{"default":{"width":"80px","height":"32px","fontSize":"14px","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px"}},"label":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}},
dataRaw:[{"label":"{{PM25}}","value":"PM25"},{"label":"{{PM10}}","value":"PM10"},{"label":"{{SO2}}","value":"SO2"},{"label":"{{NO2}}","value":"NO2"},{"label":"CO","value":"CO"},{"label":"{{O3}}","value":"O3"},{"label":"{{O3}}-8h","value":"O3_8"}], 
 },
},
});
const setTableColumns = (tableData) => {
function generateKeysWithDate(data) {
  // 提取所有的 MONITORTIME 日期并去重
  const monitorTimes = [...new Set(data.map(item => item.MONITORTIME_NAME || item.MONITORTIME))];

  // 生成结果数据
  const result = monitorTimes.map((date, index) => ({
    label: date,
    valueKey: `firstValue${index}`,
    stateKey: `firstValueStatus${index}`
  }));

  return result;
}

// 测试时间数据（包含label名、取值key、状态值key）
const dateValueArr = generateKeysWithDate(tableData);

state.tableColumns = [];
// 默认第一列配置
let tableColumns = [
  {
    "label": "站点",
    "key": "pointName",
    "align": "left",
    "fixed": true,
    "minWidth": "100PX",
    "headerAlign": "left"
  },
];

// 动态处理列配置
dateValueArr.forEach((item) => {
  tableColumns.push({
    label: handleNoVal(item.label),
    key: item.valueKey,
    stateKey: item.stateKey,
    ...state.stateColumnCommon,
  });
});
state.tableColumns = tableColumns;
console.log(state.tableColumns);

};
const getProvider = () => {
// const rootData = inject('airPollutionContentState');
// state.airPollutionContentState = rootData;
// state.selectTimeArr = [rootData.startTime, rootData.endTime];
state.maxTimeValue = global.businessDialog.dialogParmas.maxTimeValue;
state.airPollutionContentState.timeType = global.businessDialog.dialogParmas.timeType || 'day';
state.selectTimeArr = global.businessDialog.dialogParmas.analysisTimaRangeData || [];
handleTImeChange(state.selectTimeArr);
// watch(() => rootData, (newVal) => {
//   console.log('贡献弹窗', newVal);
//   state.airPollutionContentState = rootData;
//   getData();
// },
//   {
//     deep: true
//   }
// );
};
const handleTImeChange = (timeValue) => {
if (timeValue && timeValue.length) {
  state.airPollutionContentState.startTime = timeValue[0];
  state.airPollutionContentState.endTime = timeValue[1];
  getData();
}

};
const processData = (data) => {
function processData(data) {
  // 生成 data1
  const data1 = data.map(item => ({
    name: item.POINT_NAME,        // 使用 POINT_NAME
    dataKey: item.POINT_CODE,     // 使用 POINT_CODE
    type: "bar",                  // 固定为 bar 类型
    style: {
      barWidth: 'auto',
      barMaxWidth: 15,
      borderRadius: 0,            // 固定 borderRadius 为 0
      "itemStyle": {
        "shadowBlur": 0
      },
    },
  }));

  // 去重 data1
  const uniqueData1 = [
    ...new Map(data1.map(item => [item.dataKey, item])).values()
  ];

  // 生成 data2
  const data2 = Object.values(
    data.reduce((acc, item) => {
      // 获取 MONITORTIME 作为分组的 key
      const time = item.MONITORTIME_NAME || item.MONITORTIME;

      // 如果该 MONITORTIME 还没有组，则创建一个新组
      if (!acc[time]) {
        acc[time] = { label: time }; // 初始化时加入 label 字段
      }

      // 将 POINT_CODE 作为键，CONTRIBUTION_RATE 作为值添加到当前时间组中
      acc[time][item.POINT_CODE] = item.CONTRIBUTION_RATE;

      return acc;
    }, {})
  );

  return { data1: uniqueData1, data2 };
}

const result = processData(data);
state.barSeries = result.data1;
state.chartData = result.data2;

console.log(result.data1);  // 输出 data1
console.log(result.data2);  // 输出 data2

};
const processTableData = (data) => {
function mergeByPointNameWithDateKey(data) {
    // 找出所有的日期，以确保所有点都有这些日期的数据
    const allDates = Array.from(new Set(data.map(item => item.MONITORTIME))).sort();

    // 使用 reduce 进行分组并合并
    const groupedData = data.reduce((acc, item) => {
        let pointName = item.POINT_NAME; // 使用正确的字段名
        const date = item.MONITORTIME;
        const contributionRate = parseFloat(item.CONTRIBUTION_RATE); // 验证 contributionRate 是否为有效数字，如果不是，则使用 "--"
        const validContributionRate = isNaN(contributionRate) ? "--" : contributionRate + "%";

        if (!acc[pointName]) {
            acc[pointName] = {};
        }

        // 存储该日期的贡献率，确保无效值变为 "--"
        acc[pointName][date] = validContributionRate;
        return acc;
    }, {});

    // 构造最终的结果数据
    const result = Object.keys(groupedData).map(pointName => {
        const pointData = groupedData[pointName];
        const resultItem = { pointName: pointName };

        // 遍历所有日期，确保每个日期都生成对应的数据
        allDates.forEach((date, index) => {
            const firstValue = pointData[date] !== undefined && pointData[date] !== "--" ? pointData[date].toString() : "--";
            resultItem[`firstValue${index}`] = firstValue;
        });

        // 计算每个日期下所有点的前三名并设置 firstValueStatus
        allDates.forEach((date, index) => {
            const pointValues = Object.keys(groupedData).map(innerPointName => {
                return {
                    pointName: innerPointName,
                    contributionRate: groupedData[innerPointName][date] !== "--" ? parseFloat(groupedData[innerPointName][date]) : -Infinity
                };
            });

            // 按照贡献率降序排列，选出前三名
            pointValues.sort((a, b) => {
                if (isNaN(a.contributionRate) && !isNaN(b.contributionRate)) return 1;  // NaN 排在后面
                if (!isNaN(a.contributionRate) && isNaN(b.contributionRate)) return -1; // 非 NaN 排在前面
                return b.contributionRate - a.contributionRate;
            });

            console.log(pointValues);


            // 设置前三名的 firstValueStatus 为 1，其他为 0
            let firstValueStatus = "0"; // 默认是 0
            if (pointValues[0].pointName === pointName && pointValues[0].contributionRate) {
                firstValueStatus = "1";
            } else if (pointValues[1].pointName === pointName && pointValues[1].contributionRate) {
                firstValueStatus = "1";
            } else if (pointValues[2].pointName === pointName && pointValues[2].contributionRate) {
                firstValueStatus = "1";
            }

            // 如果数据缺失，firstValueStatus 为 0
            if (pointData[date] === "--" || pointData[date] === undefined) {
                firstValueStatus = "0";
            }

            resultItem[`firstValueStatus${index}`] = firstValueStatus;
        });

        return resultItem;
    });

    return result;
}
// 表头配置
setTableColumns(data);

const result = mergeByPointNameWithDateKey(data);
state.tableData = result;
console.log(result);
// 修改表格错位的问题
document.getElementById('t-table-f0e6.f75b05c77').style.display = 'none';
setTimeout(() => {
  document.getElementById('t-table-f0e6.f75b05c77').style.display = 'block';
})
};
const handleTimeTypeChange = () => {
state.airPollutionContentState.startTime = '';
state.airPollutionContentState.endTime = '';
};
const handlePollutionChange = () => {
if (state.airPollutionContentState.startTime && state.airPollutionContentState.endTime) {
  getData();
}
};
const onclick1734436738834 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogName',
                    value:'',
                    data: {
                      businessDialog:{dialogName: ''}
                    },
                  });
};
const onchange1734945170218 = (data,selectOption) => {
// 设置变量值
state.airPollutionContentState.timeType = selectOption.label;
// 执行自定义方法
handleTimeTypeChange();
};
const ondateChange1734946387028 = (data) => {
// 执行自定义方法
handleTImeChange(data);
};
const ondateChange1734946275945 = (data) => {
// 执行自定义方法
handleTImeChange(data);
};
const ontabClick1735197626592 = (data) => {
// 设置变量值
state.pollutionType = data.value;
// 执行自定义方法
handlePollutionChange();
};
// 接口函数
const getData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_CODE":global.regionaQuery.regionCode,"TIME_TYPE":state.airPollutionContentState.timeType,"REGION_TYPE":global.regionaQuery.paramsRegionType,"START_TIME":state.airPollutionContentState.startTime,"END_TIME":state.airPollutionContentState.endTime,"POLLUTE":state.pollutionType,"interfaceId":"745dc0edd524c43ad08aec701635817d"},}).then((res) => {
     // 成功的操作
     console.log('图', res);

if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  let data = res?.data?.data || [];
  if (data) {
    processData(data);
    processTableData(data);
  } else {
    state.chartData = [];
    state.tableData = [];
  }
} else {
  state.chartData = [];
  state.tableData = [];
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [global.regionaQuery.regionCode], () => {
getData();
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-airPollutionPointIndexStatus', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
onMounted(() => {
setPageScale('t-l-c-airPollutionPointIndexStatus', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tTablex0x4ComputedData = computed(() => _.merge({}, componentState.tTablex0x4.default, componentState.tTablex0x4?.[state.screenSize]));

 const tChartBarStackedx0x5ComputedData = computed(() => _.merge({}, componentState.tChartBarStackedx0x5.default, componentState.tChartBarStackedx0x5?.[state.screenSize]));

 const tRadiox0x6ComputedData = computed(() => _.merge({}, componentState.tRadiox0x6.default, componentState.tRadiox0x6?.[state.screenSize]));

 const tDatePickerx0x7ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x7.default, componentState.tDatePickerx0x7?.[state.screenSize]));

 const tDatePickerx0x8ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x8.default, componentState.tDatePickerx0x8?.[state.screenSize]));

 const tTabsBasex0x9ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x9.default, componentState.tTabsBasex0x9?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tTextx0x2ComputedData,
tRectx0x3ComputedData,
tTablex0x4ComputedData,
tChartBarStackedx0x5ComputedData,
tRadiox0x6ComputedData,
tDatePickerx0x7ComputedData,
tDatePickerx0x8ComputedData,
tTabsBasex0x9ComputedData,
onclick1734436738834,
onchange1734945170218,
ondateChange1734946387028,
ondateChange1734946275945,
ontabClick1735197626592,
};
},
}
</script>

<style scoped>
.t-l-c-airPollutionPointIndexStatus {
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
width: 1920px;
height: 1080px;
background-color: rgba(0,0,0,0);
}
.t-l-c-airPollutionPointIndexStatus .airPollutionPointIndexStatus-t-rect-0-0 {
position: absolute !important;
top: 184px;
left: 460px;
width: 1000px;
height: 712px;
pointer-events: auto;
}

.t-l-c-airPollutionPointIndexStatus .airPollutionPointIndexStatus-t-rect-0-1 {
position: absolute !important;
top: 184px;
left: 460px;
width: 1000px;
height: 47px;
pointer-events: auto;
}

.t-l-c-airPollutionPointIndexStatus .airPollutionPointIndexStatus-t-text-0-2 {
position: absolute !important;
top: 198px;
left: 479px;
width: 284px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airPollutionPointIndexStatus .airPollutionPointIndexStatus-t-rect-0-3 {
position: absolute !important;
top: 195px;
left: 1418px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-airPollutionPointIndexStatus .airPollutionPointIndexStatus-t-table-0-4 {
position: absolute !important;
top: 510px;
left: 480px;
width: 960px;
height: 372px;
pointer-events: auto;
}

.t-l-c-airPollutionPointIndexStatus .airPollutionPointIndexStatus-t-chart-bar-stacked-0-5 {
position: absolute !important;
top: 305px;
left: 480px;
width: 960px;
height: 192px;
pointer-events: auto;
}

.t-l-c-airPollutionPointIndexStatus .airPollutionPointIndexStatus-t-radio-0-6 {
position: absolute !important;
top: 250px;
left: 923px;
width: 150px;
height: 22px;
pointer-events: auto;
}

.t-l-c-airPollutionPointIndexStatus .airPollutionPointIndexStatus-t-date-picker-0-7 {
position: absolute !important;
top: 246px;
left: 1080px;
width: 340px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airPollutionPointIndexStatus .airPollutionPointIndexStatus-t-date-picker-0-8 {
position: absolute !important;
top: 246px;
left: 1080px;
width: 340px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airPollutionPointIndexStatus .airPollutionPointIndexStatus-t-tabs-base-0-9 {
position: absolute !important;
top: 246px;
left: 480px;
width: 400px;
height: 32px;
pointer-events: auto;
}
</style>
