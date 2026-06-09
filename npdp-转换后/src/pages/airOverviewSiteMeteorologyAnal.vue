<template>
  <div id="t-l-c-airOverviewSiteMeteorologyAnal" class="t-l-c-airOverviewSiteMeteorologyAnal" ><t-date-picker id="t-date-picker-d0ca.e43469a0b" class="airOverviewSiteMeteorologyAnal-t-date-picker-0-0"  :placeholder="tDatePickerx0x0ComputedData.placeholder" :start-placeholder="tDatePickerx0x0ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x0ComputedData.endPlaceholder" :type="tDatePickerx0x0ComputedData.type" :clearable="tDatePickerx0x0ComputedData.clearable" :range-separator="tDatePickerx0x0ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.defaultTimeArr, componentPropBindingMap?.['t-date-picker-d0ca.e43469a0b']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x0ComputedData.separator" :readonly="tDatePickerx0x0ComputedData.readonly" :editable="tDatePickerx0x0ComputedData.editable" :c-style="tDatePickerx0x0ComputedData.cStyle" :disabled-date="replaceCssVariables(filterData(state.maxTimeValue, componentPropBindingMap?.['t-date-picker-d0ca.e43469a0b']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :is-disabled-front="tDatePickerx0x0ComputedData.isDisabledFront" @date-change="ondateChange1735029969566"></t-date-picker><t-chart-design id="t-chart-design-9616.50d480aaa" class="airOverviewSiteMeteorologyAnal-t-chart-design-0-1"  :empty-img="tChartDesignx0x1ComputedData.emptyImg" :c-style="tChartDesignx0x1ComputedData.cStyle" :options="replaceCssVariables(filterData(state.options, componentPropBindingMap?.['t-chart-design-9616.50d480aaa']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-chart-design><t-row id="t-row-81c0.d0f879cc9" class="airOverviewSiteMeteorologyAnal-t-row-0-2"  :c-style="tRowx0x2ComputedData.cStyle" :gutter="tRowx0x2ComputedData.gutter" :justify="tRowx0x2ComputedData.justify" :align="tRowx0x2ComputedData.align"><t-col id="t-col-e5a2.d421ee0c3" class="airOverviewSiteMeteorologyAnal-t-col-0-2-0"  :span="tColx0x2x0ComputedData.span" :offset="tColx0x2x0ComputedData.offset" :push="tColx0x2x0ComputedData.push" :pull="tColx0x2x0ComputedData.pull" :c-style="tColx0x2x0ComputedData.cStyle"><t-radio id="t-radio-e228.f175646a" class="airOverviewSiteMeteorologyAnal-t-radio-0-2-0-0"  :options="tRadiox0x2x0x0ComputedData.options" :active="tRadiox0x2x0x0ComputedData.active" :alias="tRadiox0x2x0x0ComputedData.alias" :disabled="tRadiox0x2x0x0ComputedData.disabled" :border="tRadiox0x2x0x0ComputedData.border" :size="tRadiox0x2x0x0ComputedData.size" :is-use-button="tRadiox0x2x0x0ComputedData.isUseButton" :c-style="tRadiox0x2x0x0ComputedData.cStyle" @change="onchange1733992319961"></t-radio></t-col><t-col id="t-col-9821.35c4f744f" class="airOverviewSiteMeteorologyAnal-t-col-0-2-1"  :span="tColx0x2x1ComputedData.span" :offset="tColx0x2x1ComputedData.offset" :push="tColx0x2x1ComputedData.push" :pull="tColx0x2x1ComputedData.pull" :c-style="tColx0x2x1ComputedData.cStyle"><t-radio id="t-radio-347f.cd55e7929" class="airOverviewSiteMeteorologyAnal-t-radio-0-2-1-0"  :options="tRadiox0x2x1x0ComputedData.options" :active="replaceCssVariables(filterData(state.weatherType, componentPropBindingMap?.['t-radio-347f.cd55e7929']['active'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tRadiox0x2x1x0ComputedData.alias" :disabled="tRadiox0x2x1x0ComputedData.disabled" :border="tRadiox0x2x1x0ComputedData.border" :size="tRadiox0x2x1x0ComputedData.size" :is-use-button="tRadiox0x2x1x0ComputedData.isUseButton" :c-style="tRadiox0x2x1x0ComputedData.cStyle" @change="onchange1733992348497"></t-radio></t-col></t-row></div>
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
import { TChartDesign, TCol, TDatePicker, TRadio, TRow } from '@ths/design';

export default {
  components: {
    TChartDesign,
    TCol,
    TDatePicker,
    TRadio,
    TRow,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-date-picker-d0ca.e43469a0b":{"attributeName":"tDatePickerx0x0","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"disabledDate":{"filters":[]},"isDisabledFront":{"filters":[]}},"t-chart-design-9616.50d480aaa":{"attributeName":"tChartDesignx0x1","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-row-81c0.d0f879cc9":{"attributeName":"tRowx0x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-e5a2.d421ee0c3":{"attributeName":"tColx0x2x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-radio-e228.f175646a":{"attributeName":"tRadiox0x2x0x0","options":{"filters":[]},"active":{"filters":[]},"alias":{"filters":[]},"disabled":{"filters":[]},"border":{"filters":[]},"size":{"filters":[]},"isUseButton":{"filters":[]},"cStyle":{"filters":[]}},"t-col-9821.35c4f744f":{"attributeName":"tColx0x2x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-radio-347f.cd55e7929":{"attributeName":"tRadiox0x2x1x0","options":{"filters":[]},"active":{"filters":[]},"alias":{"filters":[]},"disabled":{"filters":[]},"border":{"filters":[]},"size":{"filters":[]},"isUseButton":{"filters":[]},"cStyle":{"filters":[]}}};
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
   pointType: "",
   maxTimeValue: "",
   pointCode: "",
   defaultTimeArr: [],
   endTime: "",
   startTime: "",
   yAxisData: "",
   weatherUnit: "℃",
   polluteUnit: "",
   options: [],
   weatherType: "temperature",
   polluteType: "AQI",
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
tDatePickerx0x0: {
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
disabledDate:"",
isDisabledFront:false, 
 },
},
tChartDesignx0x1: {
defaultStyle: {
            default: {"height":"calc(100% - 100px)","width":"100%","left":"0px","top":"101px","position":"absolute !important"},
            
            },
 default: { 
 
emptyImg:"assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"calc(100% - 100px)","width":"100%","left":"0px","top":"101px","position":"absolute !important"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, [])), 
 },
},
tRowx0x2: {
defaultStyle: {
            default: {"width":"100%","height":"20px","display":"flex","justifyContent":"space-between","alignItems":"center","left":"0px","top":"55px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"20px","display":"flex","justifyContent":"space-between","alignItems":"center","left":"0px","top":"55px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x2x0: {
defaultStyle: {
            default: {"width":"100px","height":"20px","display":"flex","justifyContent":"left","alignItems":"center"},
            
            },
 default: { 
 
span:15,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"20px","display":"flex","justifyContent":"left","alignItems":"center"}}}, 
 },
},
tRadiox0x2x0x0: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justify-content":"center","width":"500px","height":"20px","justifyContent":"flex-start","flexDirection":"row","gap":"auto"},
            
            },
 default: { 
 
options:[{"label":"AQI","value":"AQI"},{"label":"PM25","value":"PM₂.₅"},{"label":"PM10","value":"PM₁₀"},{"label":"SO2","value":"SO₂"},{"label":"NO2","value":"NO₂"},{"label":"CO","value":"CO"},{"label":"O3","value":"O₃"}],
active:"AQI",
alias:{"label":"label","value":"value","disabled":"disabled"},
disabled:false,
border:false,
size:"small",
isUseButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justify-content":"center","width":"500px","height":"20px","justifyContent":"flex-start","flexDirection":"row","gap":"auto"}},"itemWrapper":{"default":{"padding":0,"margin":0,"justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","gap":"10px","marginRight":"10px","lineHeight":"unset"}},"label":{"default":{"padding":0,"color":"var(--t-radio-text-color)","background":"unset","backgroundClip":"unset","fontSize":"var(--business-text-size-14)","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","width":"auto","height":"auto","lineHeight":"unset"},"hover":{"color":"var(--t-radio-hover-text-color)","background":"unset","backgroundClip":"unset"},"active":{"color":"var(--t-radio-text-color)","background":"unset","backgroundClip":"unset","backgroundColor":""}},"radioBorder":{"default":{"background":"rgba(255, 255, 255, 1)","width":"var(--business-text-size-12)","height":"var(--business-text-size-12)","border":"auto !important","borderTop":"1px Solid var(--t-radio-border-color)","borderLeft":"1px Solid var(--t-radio-border-color)","borderBottom":"1px Solid var(--t-radio-border-color)","borderRight":"1px Solid var(--t-radio-border-color)"},"hover":{"borderLeft":"1px solid var(--t-radio-hover-border-color)","borderTop":"1px solid var(--t-radio-hover-border-color)","borderRight":"1px solid var(--t-radio-hover-border-color)","borderBottom":"1px solid var(--t-radio-hover-border-color)"},"active":{"border":"auto !important","borderTop":"1px Solid var(--t-radio-active-border-color)","borderLeft":"1px Solid var(--t-radio-active-border-color)","borderBottom":"1px Solid var(--t-radio-active-border-color)","borderRight":"1px Solid var(--t-radio-active-border-color)"}},"circle":{"default":{"background":"var(--t-radio-bg-color)","width":"calc(var(--business-text-size-14) / 2 - 3px)","height":"calc(var(--business-text-size-14) / 2 - 3px)","fillType":"color","backgroundColor":"rgba(20, 112, 204, 0)","fontSize":"var(--business-text-size-18)","border":"1px solid #BDD2ED","borderRadius":"50%"},"active":{"background":"var(--t-radio-active-bg-color)","fillType":"color","color":"var(--area-font-active-color)"}},"radioButton":{"default":{"width":"px","height":"px","background":"rgba(255, 255, 255, 1)","border":"auto !important","borderTop":"1px Solid var(--t-radio-button-border-color)","borderLeft":"0px Solid var(--t-radio-button-border-color)","borderBottom":"1px Solid var(--t-radio-button-border-color)","borderRight":"1px Solid var(--t-radio-button-border-color)"},"active":{"background":"var(--t-radio-button-active-bg-color)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","fillType":"color"}},"radioButtonText":{"default":{"textAlign":"center","border":"unset","color":"var(--t-radio-button-color)","background":"unset","backgroundClip":"unset"},"active":{"color":"var(--t-radio-button-active-color)","border":"unset"},"hover":{"color":"var(--t-radio-button-hover-color)"}},"itemFirstWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"0px","borderBottomRightRadius":"0px","borderBottomLeftRadius":"4px","border":"auto !important","borderTop":"1px Solid var(--t-radio-button-border-color)","borderLeft":"1px Solid var(--t-radio-button-border-color)","borderBottom":"1px Solid var(--t-radio-button-border-color)","borderRight":"1px Solid var(--t-radio-button-border-color)"}},"itemLastWrapper":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"0px"}}}, 
 },
},
tColx0x2x1: {
defaultStyle: {
            default: {"width":"100px","height":"20px","display":"flex","justifyContent":"right","alignItems":"center"},
            
            },
 default: { 
 
span:9,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"20px","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tRadiox0x2x1x0: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justify-content":"center","width":"500px","height":"20px","justifyContent":"flex-start","flexDirection":"row","gap":"auto"},
            
            },
 default: { 
 
options:[{"label":"温度","value":"temperature"},{"label":"湿度","value":"relative_humidity"},{"label":"风速","value":"windspeed"}],
active:"temperature",
alias:{"label":"value","value":"label","disabled":"disabled"},
disabled:false,
border:false,
size:"small",
isUseButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justify-content":"center","width":"500px","height":"20px","justifyContent":"flex-start","flexDirection":"row","gap":"auto"}},"itemWrapper":{"default":{"padding":0,"margin":0,"justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","gap":"10px","marginRight":"10px","lineHeight":"unset"}},"label":{"default":{"padding":0,"color":"var(--t-radio-text-color)","background":"unset","backgroundClip":"unset","fontSize":"var(--business-text-size-14)","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","width":"auto","height":"auto","lineHeight":"unset"},"hover":{"color":"var(--t-radio-hover-text-color)","background":"unset","backgroundClip":"unset"},"active":{"color":"var(--t-radio-text-color)","background":"unset","backgroundClip":"unset","backgroundColor":""}},"radioBorder":{"default":{"background":"rgba(255, 255, 255, 1)","width":"var(--business-text-size-12)","height":"var(--business-text-size-12)","border":"auto !important","borderTop":"1px Solid var(--t-radio-border-color)","borderLeft":"1px Solid var(--t-radio-border-color)","borderBottom":"1px Solid var(--t-radio-border-color)","borderRight":"1px Solid var(--t-radio-border-color)"},"hover":{"borderLeft":"1px solid var(--t-radio-hover-border-color)","borderTop":"1px solid var(--t-radio-hover-border-color)","borderRight":"1px solid var(--t-radio-hover-border-color)","borderBottom":"1px solid var(--t-radio-hover-border-color)"},"active":{"border":"auto !important","borderTop":"1px Solid var(--t-radio-active-border-color)","borderLeft":"1px Solid var(--t-radio-active-border-color)","borderBottom":"1px Solid var(--t-radio-active-border-color)","borderRight":"1px Solid var(--t-radio-active-border-color)"}},"circle":{"default":{"background":"var(--t-radio-bg-color)","width":"calc(var(--business-text-size-14) / 2 - 3px)","height":"calc(var(--business-text-size-14) / 2 - 3px)","fillType":"color","backgroundColor":"rgba(20, 112, 204, 0)","fontSize":"var(--business-text-size-18)","border":"1px solid #BDD2ED","borderRadius":"50%"},"active":{"background":"var(--t-radio-active-bg-color)","fillType":"color","color":"var(--area-font-active-color)"}},"radioButton":{"default":{"width":"px","height":"px","background":"rgba(255, 255, 255, 1)","border":"auto !important","borderTop":"1px Solid var(--t-radio-button-border-color)","borderLeft":"0px Solid var(--t-radio-button-border-color)","borderBottom":"1px Solid var(--t-radio-button-border-color)","borderRight":"1px Solid var(--t-radio-button-border-color)"},"active":{"background":"var(--t-radio-button-active-bg-color)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","fillType":"color"}},"radioButtonText":{"default":{"textAlign":"center","border":"unset","color":"var(--t-radio-button-color)","background":"unset","backgroundClip":"unset"},"active":{"color":"var(--t-radio-button-active-color)","border":"unset"},"hover":{"color":"var(--t-radio-button-hover-color)"}},"itemFirstWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"0px","borderBottomRightRadius":"0px","borderBottomLeftRadius":"4px","border":"auto !important","borderTop":"1px Solid var(--t-radio-button-border-color)","borderLeft":"1px Solid var(--t-radio-button-border-color)","borderBottom":"1px Solid var(--t-radio-button-border-color)","borderRight":"1px Solid var(--t-radio-button-border-color)"}},"itemLastWrapper":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"0px"}}}, 
 },
},
});
const setUnit = () => {
// 上标
const threeSup = convertCharacter('上标')[0].split(' ')[3] || '3';

// 显示污染物单位
state.polluteUnit = state.polluteType === 'AQI' ? '' : state.polluteType === 'CO' ? 'mg/m' + threeSup : 'ug/m' + threeSup
// 显示气象单位
state.weatherUnit = state.weatherType === 'WD' ? '℃' : state.weatherType === 'SD' ? '%' : 'm/s'
};
const setYAxisData = (data) => {
// 计算相邻点的方向，取整并将 direction 存储在当前点对象中
const result = [];

for (let i = 0; i < data.length - 1; i++) {
  const currentPoint = { ...data[i] };  // 复制当前点

  const y1 = data[i].y;
  const y2 = data[i + 1].y;

  // 计算斜率
  const slope = y2 - y1;  // 这里假设横坐标差值为 1

  // 计算方向角度 (反正切并转换为度)，取整
  let angle = Math.atan(slope) * (180 / Math.PI);  // 计算角度

  // 如果是上升趋势，角度应该为负值
  if (slope > 0) {
    angle = -Math.abs(angle);  // 上升的线段，返回 0 到 -90 度之间的负角度
  } else if (slope < 0) {
    // 如果是下降趋势，确保角度范围是 -90 到 -180
    angle = -(90 + (90 - Math.abs(angle)));  // 下降的线段，返回 -90 到 -180 度之间的负角度
  }

  currentPoint.direction = Math.round(angle);  // 取整

  result.push(currentPoint);  // 将当前点（包括方向）加入结果数组
}


const legendMap = new Map([
  ['AQI', 'AQI'],
  ['PM25', 'PM？.？'],
  ['PM10', 'PM？？'],
  ['SO2', 'SO？'],
  ['NO2', 'NO？'],
  ['CO', 'CO'],
  ['O3', 'O？'],
  ['WD', '温度'],
  ['SD', '湿度'],
  ['FS', '风速'],
])
state.yAxisData = [
  {
    name: legendMap.get(state.polluteType),
    dataKey: 'polluteData',
    style: {
      yAxisIndex: 0,
      itemStyle: {
        borderWidth: 0,
        color: "#2ec7c9"
      },
      areaStyle: {
        color: {
          colorStops: [
            {
              offset: 0,
              color: "rgba(255,255,255,0)"
            },
            {
              offset: 0.9954954954954955,
              color: "rgba(0,0,0,0)"
            }
          ]
        }
      }
    }
  },
  {
    name: legendMap.get(state.weatherType),
    dataKey: 'weatherData',
    style: {
      yAxisIndex: 1,
      itemStyle: {
        borderWidth: 0,
        color: "#b6a2de"
      },
      areaStyle: {
        color: {
          colorStops: [
            {
              offset: 0,
              color: "rgba(255,255,255,0)"
            },
            {
              offset: 0.9954954954954955,
              color: "rgba(0,0,0,0)"
            }
          ]
        }
      },
      markPoint: state.weatherType === 'FS' ? {
        symbol: 'arrow', // 设置符号为箭头
        symbolSize: [11, 8], // 设置箭头的大小
        data: directions.map(function (item) {
          return {
            coord: [item.x, item.y], // 设置箭头位置
            symbolRotate: item.direction, // 设置箭头旋转角度
            itemStyle: {
              color: '#ffd878'  // 设置箭头的颜色
            }
          };
        })
      } : {}
    }
  },
]

console.log(state.yAxisData)
};
const setOptions = (data) => {

  const xAxisData = [];
  
  // 计算相邻点的方向，取整并将 direction 存储在当前点对象中
  const result = [];
  
  const maxNumber = Math.max(...data.map(item => Number(item.y)));
  
  // let xSub = 5 / maxNumber / data.length;
  let xSub = maxNumber / 5;
  
  console.log(xSub, '横坐标系数');
  
  
  for (let i = 0; i < data.length - 1; i++) {
    xAxisData.push(data[i].monitortime_name);
  
    const currentPoint = { ...data[i] };  // 复制当前点
  
    const y1 = data[i].y;
    const y2 = data[i + 1].y || y1;
  
    // 计算斜率
    const slope = (y2 - y1) / (1);  // 横坐标差值
  
    // 计算方向角度 (反正切并转换为度)，取整
    let angle = Math.atan(slope) * (180 / Math.PI);  // 计算角度
    // 如果是上升趋势，角度应该为负值
    if (slope > 0) {
      angle = -Math.abs(angle);  // 上升的线段，返回 0 到 -90 度之间的负角度
    } else if (slope < 0) {
      // 如果是下降趋势，确保角度范围是 -90 到 -180
      angle = -(90 + (90 - Math.abs(angle)));  // 下降的线段，返回 -90 到 -180 度之间的负角度
    } else {
      angle = -90;  // 为0时，持平，取-90度
    }
  
    currentPoint.direction = Math.round(angle);  // 取整
    console.log(slope, angle, currentPoint.direction);
  
    result.push(currentPoint);  // 将当前点（包括方向）加入结果数组
  }
  
  // 将最后一个点加入结果，并给它 direction 设为 null
  result.push({ ...data[data.length - 1], direction: null });
  
  console.log(result);
  
  const subList = convertCharacter('下标')[0].split(' ')
  const legendMap = new Map([
    ['AQI', 'AQI'],
    ['PM25', `PM${subList[2]}.${subList[5]}`],
    ['PM10', `PM${subList[1]}${subList[0]}`],
    ['SO2', `SO${subList[2]}`],
    ['NO2', `NO${subList[2]}`],
    ['CO', 'CO'],
    ['O3', `O${subList[3]}`],
    ['temperature', '温度'],
    ['relative_humidity', '湿度'],
    ['windspeed', '风速'],
  ])
  const colorList = ['#62ffc0', '#ffd878'];
  state.options = {
    color: colorList,
    grid: {
      left: '5%',
      right: '5%',
      bottom: '10%',
    },
    // dataZoom: [
    //   {
    //     type: "inside",
    //     start: 0,
    //     end: 30
    //   }
    // ],
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
      }
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
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
        color: 'var(--business-text-avianize)',
        fontSize: global.publicFontSizeConfig.fontSize14
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
        color: 'var(--business-text-avianize)',
        fontSize: global.publicFontSizeConfig.fontSize14
      }
      // 自定义主题-结束
    },
    yAxis: [
      {
        type: 'value',
        name: state.polluteUnit,
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
          color: 'var(--business-text-avianize)',
          fontSize: global.publicFontSizeConfig.fontSize14
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
          color: 'var(--business-text-avianize)',
          fontSize: global.publicFontSizeConfig.fontSize14
        },
        // 自定义主题-结束
      },
      {
        type: 'value',
        name: state.weatherUnit,
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
          color: 'var(--business-text-avianize)',
          fontSize: global.publicFontSizeConfig.fontSize14
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
          color: 'var(--business-text-avianize)',
          fontSize: global.publicFontSizeConfig.fontSize14
        },
      }
    ],
    legend: {
      show: true,
      icon: 'roundRect',
      itemWidth: 16,
      itemHeight: 16,
      textStyle: {
        color: 'var(--skin-font-color)',
        fontSize: global.publicFontSizeConfig.fontSize12,
        height: 8,
        rich: {
          a: {
            verticalAlign: "center"
          }
        }
      }
    },
    // 自定义主题-结束
    series: [
      {
        name: legendMap.get(state.polluteType),
        type: 'line',
        yAxisIndex: 0,
        smooth: true,
        data: result.map(function (item) {
          return handleNoVal(item.POLLUTE_VALUE);
        }),
        symbol: 'none'
      },
      {
        name: legendMap.get(state.weatherType),
        type: 'line',
        smooth: true,
        symbol: 'none',
        data: result.map(function (item) {
          return handleNoVal(item.y);
        }),
        yAxisIndex: 1,
        markPoint: state.weatherType === 'FS' ? {
          symbol: 'arrow', // 设置符号为箭头
          symbolSize: [6, 18], // 设置箭头的大小
          data: result.map(function (item) {
            if (item.direction) {
              let offset = [0, 0];
              if (90 < Math.abs(item.direction) && Math.abs(item.direction) < 180) {
                offset = [2, 10]
              } else if (Math.abs(item.direction) === 90) {
                offset = [10, 0]
              } else if (0 < Math.abs(item.direction) && Math.abs(item.direction) < 90) {
                offset = [0, -10]
              }
  
              return {
                coord: [item.x, item.y], // 设置箭头位置
                symbolRotate: item.direction, // 设置箭头旋转角度
                symbolOffset: offset,
                itemStyle: {
                  color: colorList[1]  // 设置箭头的颜色
                }
              };
            } else {
              return {}
            }
          })
        } : {}
      },
      // {
      //   name: 'jiantou',
      //   type: 'lines',
      //   yAxisIndex: 1,
      //   coordinateSystem: 'cartesian2d',
      //   polyline: true,
      //   z: 10,
      //   lineStyle: {
      //     color: '#fff',
      //     opacity: 0,
      //   },
      //   effect: {
      //     period: 10,
      //     show: true,
      //     symbolSize: 24,
      //     symbol: 'arrow',
      //     color: 'yellow'
      //   },
      //   data: [
      //     {
      //       coords: result.map(function (item) {
      //         return [item.x, handleNoVal(item.y)];
      //       }),
      //     },
      //   ],
      // }
    ]
  };
  console.log(state.options);
  
};
const handleTimeChange = (data) => {

if (data) {
  state.startTime = data[0];
  state.endTime = data[1];
  state.defaultTimeArr = data
  apiRegistry.getData.request();
}
};
const initParams = () => {
// state.pointCode = global.businessDialog.dialogParmas.POINT_CODE || 440600402;
state.pointCode = global.businessDialog.dialogParmas.POINT_CODE;
state.pointType = global.businessDialog.dialogParmas.POINT_TYPE;
const rangeDate = getForwardTimeList(global.air.timeType === 'hour' ? global.air.timeValue : global.air.timeValue + ' 00', 'hour', 47);
state.startTime = rangeDate[0];
state.endTime = rangeDate[rangeDate.length - 1];

// state.startTime = "2024-12-01 00";
// state.endTime = "2024-12-04 00";
state.defaultTimeArr = [state.startTime, state.endTime]
getData();

};
const getData = () => {
async function getData(){
  await apiRegistry.getLastTime.request();
  await apiRegistry.getData.request();
}
getData()
};
const ondateChange1735029969566 = (data) => {
// 执行自定义方法
handleTimeChange(data);
};
const onchange1733992319961 = (data,selectOption) => {
// 设置变量值
state.polluteType = data;
// 执行自定义方法
setUnit();
// 事件交互-请求调用接口
apiRegistry.getData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const onchange1733992348497 = (data,selectOption) => {
// 设置变量值
state.weatherType = data;
// 执行自定义方法
setUnit();
// 事件交互-请求调用接口
apiRegistry.getData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getLastTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.pointCode","POINT_TYPE":"state.pointType","TIME_TYPE":"hour","interfaceId":"66ad2ebe9d660295568b05187f34e133"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.pointCode,"POINT_TYPE":state.pointType,"TIME_TYPE":"hour","interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.pointCode,"POINT_TYPE":state.pointType,"TIME_TYPE":"hour","interfaceId":"66ad2ebe9d660295568b05187f34e133"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLastTime'] = res.data;
                
     
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  state.maxTimeValue = res?.data?.data?.MONITORTIME
  state.endTime = res?.data?.data?.MONITORTIME
  state.startTime = getPrevTime(state.endTime + ':00:00', '48hour').slice(0,13)
  state.defaultTimeArr = [state.startTime,state.endTime]
} else {
  state.defaultTimeArr = [];
  state.startTime = '';
  state.endTime = '';
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.dateValue = '';
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"END_TIME":"state.endTime","START_TIME":"state.startTime","POINT_CODE":"state.pointCode","POLLUTE":"state.polluteType","WEATHER":"state.weatherType","interfaceId":"f81f2e3fb0d2b454c6714e53a7663127"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"END_TIME":state.endTime,"START_TIME":state.startTime,"POINT_CODE":state.pointCode,"POLLUTE":state.polluteType,"WEATHER":state.weatherType,"interfaceId":"f81f2e3fb0d2b454c6714e53a7663127"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"END_TIME":state.endTime,"START_TIME":state.startTime,"POINT_CODE":state.pointCode,"POLLUTE":state.polluteType,"WEATHER":state.weatherType,"interfaceId":"f81f2e3fb0d2b454c6714e53a7663127"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getData'] = res.data;
                
     
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  let { data } = res.data;
  let chartData = data.map(item => {
    return {
      x: item.monitortime_name,
      y: item.WEATHER_VALUE,
      ...item
    }
  })
  setOptions(chartData);
  // setYAxisData(data);
} else {
  state.options = [];
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
                            setPageScale('t-l-c-airOverviewSiteMeteorologyAnal', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initParams();
onMounted(() => {
setPageScale('t-l-c-airOverviewSiteMeteorologyAnal', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tDatePickerx0x0ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x0.default, componentState.tDatePickerx0x0?.[state.screenSize]));

 const tChartDesignx0x1ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x1.default, componentState.tChartDesignx0x1?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tRowx0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x2.default, componentState.tRowx0x2?.[state.screenSize]));

 const tColx0x2x0ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0.default, componentState.tColx0x2x0?.[state.screenSize]));

 const tRadiox0x2x0x0ComputedData = computed(() => _.merge({}, componentState.tRadiox0x2x0x0.default, componentState.tRadiox0x2x0x0?.[state.screenSize]));

 const tColx0x2x1ComputedData = computed(() => _.merge({}, componentState.tColx0x2x1.default, componentState.tColx0x2x1?.[state.screenSize]));

 const tRadiox0x2x1x0ComputedData = computed(() => _.merge({}, componentState.tRadiox0x2x1x0.default, componentState.tRadiox0x2x1x0?.[state.screenSize]));

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
tDatePickerx0x0ComputedData,
tChartDesignx0x1ComputedData,
tRowx0x2ComputedData,
tColx0x2x0ComputedData,
tRadiox0x2x0x0ComputedData,
tColx0x2x1ComputedData,
tRadiox0x2x1x0ComputedData,
ondateChange1735029969566,
onchange1733992319961,
onchange1733992348497,
};
},
}
</script>

<style scoped>
.t-l-c-airOverviewSiteMeteorologyAnal {
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
.t-l-c-airOverviewSiteMeteorologyAnal .airOverviewSiteMeteorologyAnal-t-date-picker-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 330px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteMeteorologyAnal .airOverviewSiteMeteorologyAnal-t-chart-design-0-1 {
position: absolute !important;
top: 101px;
left: 0px;
width: 100%;
height: calc(100% - 100px);
pointer-events: auto;
}

.t-l-c-airOverviewSiteMeteorologyAnal .airOverviewSiteMeteorologyAnal-t-row-0-2 {
position: absolute !important;
top: 55px;
left: 0px;
width: 100%;
height: 20px;
pointer-events: auto;
display: flex;
justify-content: space-between;
align-items: center;
}

.t-l-c-airOverviewSiteMeteorologyAnal .airOverviewSiteMeteorologyAnal-t-col-0-2-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 20px;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
}

.t-l-c-airOverviewSiteMeteorologyAnal .airOverviewSiteMeteorologyAnal-t-radio-0-2-0-0 {
position: unset;
top: 55px;
left: 0px;
width: 500px;
height: 20px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteMeteorologyAnal .airOverviewSiteMeteorologyAnal-t-col-0-2-1 {
position: relative;
top: null;
left: null;
width: 100px;
height: 20px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
}

.t-l-c-airOverviewSiteMeteorologyAnal .airOverviewSiteMeteorologyAnal-t-radio-0-2-1-0 {
position: unset;
top: 55px;
width: 500px;
height: 20px;
pointer-events: auto;
}
</style>
