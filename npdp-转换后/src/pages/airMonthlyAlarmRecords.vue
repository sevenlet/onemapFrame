<template>
  <div id="t-l-c-airMonthlyAlarmRecords" class="t-l-c-airMonthlyAlarmRecords" ><t-rect id="t-rect-ed9f.2e88644b9" class="airMonthlyAlarmRecords-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-checkbox id="t-checkbox-ad25.67aba2591" class="airMonthlyAlarmRecords-t-checkbox-0-1"  :data="state.alarmPollutionOpts" :active="state.alarmPollutionArr" :data-alias="tCheckboxx0x1ComputedData.dataAlias" :border="tCheckboxx0x1ComputedData.border" :use-button="tCheckboxx0x1ComputedData.useButton" :c-style="tCheckboxx0x1ComputedData.cStyle" @change="onchange1734341177983"></t-checkbox><t-rect id="t-rect-e263.484262cfe" class="airMonthlyAlarmRecords-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle"></t-rect><t-date-picker id="t-date-picker-433c.424186236" class="airMonthlyAlarmRecords-t-date-picker-0-3"  :placeholder="tDatePickerx0x3ComputedData.placeholder" :start-placeholder="tDatePickerx0x3ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x3ComputedData.endPlaceholder" :type="tDatePickerx0x3ComputedData.type" :clearable="tDatePickerx0x3ComputedData.clearable" :range-separator="tDatePickerx0x3ComputedData.rangeSeparator" :default-date="state.compTime" :separator="tDatePickerx0x3ComputedData.separator" :readonly="tDatePickerx0x3ComputedData.readonly" :editable="tDatePickerx0x3ComputedData.editable" :c-style="tDatePickerx0x3ComputedData.cStyle" @date-change="ondateChange1734341720135"></t-date-picker><t-rect id="t-rect-6e61.16882ddb8" class="airMonthlyAlarmRecords-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle"></t-rect><t-high-light-text id="t-high-light-text-9bad.51528e0d" class="airMonthlyAlarmRecords-t-high-light-text-0-5"  :fragment-list="state.fragments" :styles="tHighLightTextx0x5ComputedData.styles" :c-style="tHighLightTextx0x5ComputedData.cStyle"></t-high-light-text><t-row id="t-row-3979.73e8ee1be" class="airMonthlyAlarmRecords-t-row-0-6"  :c-style="tRowx0x6ComputedData.cStyle" :gutter="tRowx0x6ComputedData.gutter" :justify="tRowx0x6ComputedData.justify" :align="tRowx0x6ComputedData.align"><t-text id="t-text-cdd6.982d999c" class="airMonthlyAlarmRecords-t-text-0-6-0"  :label="tTextx0x6x0ComputedData.label" :editable="tTextx0x6x0ComputedData.editable" :c-style="tTextx0x6x0ComputedData.cStyle" @click="onclick1734681535424"></t-text><t-text id="t-text-652a.a9230a71" class="airMonthlyAlarmRecords-t-text-0-6-1"  :label="state.headerInfo.POINT_NAME" :editable="tTextx0x6x1ComputedData.editable" :c-style="tTextx0x6x1ComputedData.cStyle"></t-text><t-text id="t-text-f017.1cb1d6f3b" class="airMonthlyAlarmRecords-t-text-0-6-2"  :label="tTextx0x6x2ComputedData.label" :editable="tTextx0x6x2ComputedData.editable" :c-style="tTextx0x6x2ComputedData.cStyle"></t-text><t-text id="t-text-6f96.91f556dd8" class="airMonthlyAlarmRecords-t-text-0-6-3"  :label="state.headerInfo.POINT_TYPE_NAME" :editable="tTextx0x6x3ComputedData.editable" :c-style="tTextx0x6x3ComputedData.cStyle"></t-text></t-row><t-table id="t-table-cacf.a652efb42" class="airMonthlyAlarmRecords-t-table-0-7"  :height="tTablex0x7ComputedData.height" :stripe="tTablex0x7ComputedData.stripe" :border="tTablex0x7ComputedData.border" :auto-scroll="tTablex0x7ComputedData.autoScroll" :speed="tTablex0x7ComputedData.speed" :columns="state.columns" :data="state.alarmList" :default-sort="tTablex0x7ComputedData.defaultSort" :c-style="tTablex0x7ComputedData.cStyle" @cell-click="oncellClick1734401879304"></t-table></div>
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
import { TCheckbox, TDatePicker, THighLightText, TRect, TRow, TTable, TText } from '@ths/design';

export default {
  components: {
    TCheckbox,
    TDatePicker,
    THighLightText,
    TRect,
    TRow,
    TTable,
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
   headerInfo: {"POINT_NAME":"","POINT_TYPE":"","POINT_TYPE_NAME":""},
   columns: [],
   fragments: [],
   alarmListTotal: "0",
   alarmList: [],
   MONITOR_TIME: "",
   POINT_TYPE: "",
   POINT_NAME: "",
   POINT_CODE: "",
   ALARM_END_TIME: "",
   ALARM_START_TIME: "",
   compTime: [],
   alarmPollutionArr: [],
   POLLUTES: "",
   alarmPollutionOpts: [{"label":"PM₁₀","value":"PM10"},{"label":"PM₂.₅","value":"PM2_5"},{"label":"NO₂","value":"NO2"},{"label":"SO₂","value":"SO2"},{"label":"O₃","value":"O3"}],
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
            default: {"width":"450px","height":"106px","left":"-1px","top":"54px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","backgroundImage":"linear-gradient(180deg,rgba(20, 112, 204, 0) 0.09006809543918919%,rgba(20, 112, 204, 0.2) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"106px","left":"-1px","top":"54px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","backgroundImage":"linear-gradient(180deg,rgba(20, 112, 204, 0) 0.09006809543918919%,rgba(20, 112, 204, 0.2) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset"}}}, 
 },
},
tCheckboxx0x1: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justifyContent":"flex-start","width":"418px","height":"34px","position":"unset","left":"15px","top":"112px","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","flexWrap":"nowrap","paddingLeft":"14px"},
            
            },
 default: { 
 
data:[{"label":"PM？？","value":"PM10"},{"label":"PM？.？","value":"PM2_5"},{"label":"NO？","value":"NO2"},{"label":"SO？","value":"SO2"},{"label":"O？","value":"O3"}],
active:[],
dataAlias:{"label":"label","value":"value","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justifyContent":"flex-start","width":"418px","height":"34px","position":"unset","left":"15px","top":"112px","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","flexWrap":"nowrap","paddingLeft":"14px"}},"rectangle":{"active":{"background":"var(--business-btn-active)","borderLeft":"1px none var(--business-theme)","borderTop":"1px none var(--business-theme)","borderRight":"1px none var(--business-theme)","borderBottom":"1px none var(--business-theme)"},"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"icon":{"default":{"left":"5px","top":"2px"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"8px"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"55px","left":"0px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"55px","left":"0px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tDatePickerx0x3: {
defaultStyle: {
            default: {"width":"418px","height":"33px","position":"unset","left":"15px","top":"71px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerange",
clearable:false,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"418px","height":"33px","position":"unset","left":"15px","top":"71px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"410px","height":"42px","left":"19px","top":"185px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-16/8b093f564c3642fa93af92df33db0aef.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"16px 50%","-webkit-mask-position":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"42px","left":"19px","top":"185px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-16/8b093f564c3642fa93af92df33db0aef.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"16px 50%","-webkit-mask-position":""}}}, 
 },
},
tHighLightTextx0x5: {
defaultStyle: {
            default: {"width":"373px","height":"20px","position":"unset","left":"38px","top":"197px","overflow":"hidden","paddingLeft":"20px"},
            
            },
 default: { 
 
fragmentList:[],
styles:[{"name":"style1","style":{"fontFamily":"微软雅黑","fontSize":"14px","fontWeight":400,"color":"var(--business-text-avianize)"}},{"name":"style2","style":{"fontFamily":"微软雅黑","fontSize":"14px","fontWeight":400,"color":"var(--t-aqi-red)"}}],
cStyle:{"wrapper":{"default":{"width":"373px","height":"20px","position":"unset","left":"38px","top":"197px","overflow":"hidden","paddingLeft":"20px"}}}, 
 },
},
tRowx0x6: {
defaultStyle: {
            default: {"width":"413px","height":"54px","top":"0px","left":"18.5px","position":"unset","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"413px","height":"54px","top":"0px","left":"18.5px","position":"unset","animationName":""}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x6x0: {
defaultStyle: {
            default: {"width":"43px","height":"18px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"-49.5px","left":"690px","backgroundColor":"rgba(255, 255, 255, 1)","position":"unset","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"43px","height":"18px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"-49.5px","left":"690px","backgroundColor":"rgba(255, 255, 255, 1)","position":"unset","cursor":"pointer","animationName":""},"hover":{"backgroundColor":"var(--business-theme)"}}}, 
 },
},
tTextx0x6x1: {
defaultStyle: {
            default: {"width":"auto","height":"23px","color":"rgba(255, 255, 255, 0.9)","fontSize":"18px","borderLeft":"1px solid rgba(255,255,255,1)","lineHeight":"24px","paddingLeft":"20px","top":"-50.5px","left":"749px","position":"unset","animationName":"","marginLeft":"20px"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"23px","color":"rgba(255, 255, 255, 0.9)","fontSize":"18px","borderLeft":"1px solid rgba(255,255,255,1)","lineHeight":"24px","paddingLeft":"20px","top":"-50.5px","left":"749px","position":"unset","animationName":"","marginLeft":"20px"}}}, 
 },
},
tTextx0x6x2: {
defaultStyle: {
            default: {"width":"80px","height":"23px","color":"rgba(255, 255, 255, 0.9)","fontSize":"18px","borderLeft":"1px none rgba(255,255,255,1)","lineHeight":"24px","paddingLeft":"0px","top":"-14.919248255287734px","left":"984.8575498999619px","position":"unset","animationName":"","marginLeft":"0px"},
            
            },
 default: { 
 
label:"报警记录",
editable:false,
cStyle:{"wrapper":{"default":{"width":"80px","height":"23px","color":"rgba(255, 255, 255, 0.9)","fontSize":"18px","borderLeft":"1px none rgba(255,255,255,1)","lineHeight":"24px","paddingLeft":"0px","top":"-14.919248255287734px","left":"984.8575498999619px","position":"unset","animationName":"","marginLeft":"0px"}}}, 
 },
},
tTextx0x6x3: {
defaultStyle: {
            default: {"width":"40px","height":"20px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"828px","top":"-49.5px","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)","borderTopLeftRadius":"4px","borderBottomRightRadius":"4px","textAlign":"center","lineHeight":"20px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"rgba(255, 255, 255, 0.2)","fontSize":"12px","marginLeft":"10px","animationName":"","marginTop":"4px"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"40px","height":"20px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"828px","top":"-49.5px","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)","borderTopLeftRadius":"4px","borderBottomRightRadius":"4px","textAlign":"center","lineHeight":"20px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"rgba(255, 255, 255, 0.2)","fontSize":"12px","marginLeft":"10px","animationName":"","marginTop":"4px"}}}, 
 },
},
tTablex0x7: {
defaultStyle: {
            default: {"width":"409px","height":"650px","position":"unset","left":"20px","top":"234px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","backgroundColor":""},
            
            },
 default: { 
 
height:"650",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"409px","height":"650px","position":"unset","left":"20px","top":"234px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","backgroundColor":""}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
});
const getAlarmPollutionOpts = () => {
state.alarmPollutionOpts = [
  {
    label: convertCharacter('pm10'),
    value: 'PM10',
  },
  {
    label: convertCharacter('pm25'),
    value: 'PM2_5',
  },
  {
    label: convertCharacter('no2'),
    value: 'NO2',
  },
  {
    label: convertCharacter('so2'),
    value: 'SO2',
  },
  {
    label: convertCharacter('o3'),
    value: 'O3',
  },
];

state.alarmPollutionArr = state.alarmPollutionOpts.map((item) => item.value) || [];
state.POLLUTES = state.alarmPollutionArr.join(',');

console.log('填充报警污染物复选', state.alarmPollutionOpts, state.alarmPollutionArr, state.POLLUTES);
};
const handleAlarmPollutionChange = () => {
// state.alarmPollutionArr = state.alarmPollutionOpts.map((item) => item.value) || [];
state.POLLUTES = state.alarmPollutionArr.join(',');

console.log('处理 报警污染物复选 change', state.alarmPollutionArr, state.POLLUTES);
};
const getProvider = () => {
const rootData = inject('sourceParmasState');
// console.log(rootData,'sourceParmasState-当月报警记录'); // 接收到的值

state.sourceParmasState = rootData;

};
const initPage = () => {
// 填充页面参数
// ...state.sourceParmasState.sourceRecordParmas,

state.POINT_CODE = state.sourceParmasState.sourceRecordParmas.pointCode || '440306023000002';
// state.POINT_NAME = state.sourceParmasState.sourceRecordParmas.pointName || '新桥街道县控站点';
state.POINT_TYPE = state.sourceParmasState.sourceRecordParmas.pointType || '4';
state.MONITOR_TIME = state.sourceParmasState.sourceRecordParmas.alarmTime || '2021-03-20 23';
console.log('sourceParmasState-当月报警记录', state.sourceParmasState);

// 根据监测时间，填充开始结束时间
function getMonthStartAndEnd(dateString) {
    // 解析输入的日期字符串
    const [datePart] = dateString.split(' ');
    const [year, month] = datePart.split('-').map(Number);

    // 创建一个新的Date对象，设置为指定的年份和月份的第一天
    const startDate = new Date(year, month - 1, 1);
    startDate.setHours(0, 0, 0, 0); // 设置时间为00:00:00.000

    // 创建一个新的Date对象，设置为指定的年份和月份的最后一天
    const endDate = new Date(year, month, 0);
    endDate.setHours(23, 59, 59, 999); // 设置时间为23:59:59.999

    // 格式化日期为指定格式
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        // return `${year}-${month}-${day} ${hours}:${minutes}`;
    };

    return {
        start: formatDate(startDate),
        end: formatDate(endDate)
    };
}

const startTime = getMonthStartAndEnd(state.MONITOR_TIME).start || '';
const endTime = getMonthStartAndEnd(state.MONITOR_TIME).end || '';
state.ALARM_START_TIME = startTime.slice(0, 16);
state.ALARM_END_TIME = endTime.slice(0, 16);
state.compTime = [startTime, endTime];
console.log('初始化时间', state.ALARM_START_TIME, state.ALARM_END_TIME, state.compTime)

const init = async () => {
  // 获取头部信息
  await getHeaderInfo();
  // 获取报警污染物下拉
  await getAlarmPollutionOpts();
  // 获取报警列表
  getAlarmList();
};

init();
};
const handleTimeChange = () => {
// console.log(state.compTime)
// [
//     "2024-12-04 00:00:00",
//     "2025-01-15 00:00:00"
// ]

// 调整接口时间参数
state.ALARM_START_TIME = state.compTime[0].slice(0, 16) || '';
state.ALARM_END_TIME = state.compTime[1].slice(0, 16) || '';
console.log('处理时间改变', state.compTime, state.ALARM_START_TIME, state.ALARM_END_TIME);
};
const handleTableClick = (column,row) => {
console.log('表格点击', column, row);

// 点击站点名称，定位到指定位置
if (column.label === '站点名称') {
  const param = {
    "longitude": row.LONGITUDE || '',
    "latitude": row.LATITUDE || '',
  };
  // 给地图发消息
  /* 发送webSocket消息 */
  if (rootData?.sendMessage) {
    rootData?.sendMessage({
      id: guid(true, 'lego'), // 唯一索引
      type: "runInteractive", // 消息名称
      data: [
        {
          code: "shareCode",
          shareCode: "gotoPoint",
          runtimeValue: JSON.stringify(param),
          defaultValue: JSON.stringify(param)
        }
      ]
    });
  }
}

// 点击溯源，打开溯源面板
if (column.label === '操作') {
  // 给地图发消息
  /* 发送webSocket消息 */
  if (rootData?.sendMessage) {
    rootData?.sendMessage({
      id: guid(true, 'lego'), // 唯一索引
      type: "runInteractive", // 消息名称
      data: [
        {
          shareCode: "sourcetrace",
          runtimeValue: row.POINT_CODE || '',
          pointType: row.EVENT_TYPE || '',
          traceTime: row.START_TIME || '',
          traceEndTime: row.END_TIME || '',
        }, {
          shareCode: "showTraceDetail",
          runtimeValue: row.POINT_CODE || '',
          pointType: row.EVENT_TYPE || '',
          isShowAlarmFlag: true,
          alarmTime: row.START_TIME || '',
          endTime: row.END_TIME || '',
          count_id: row.COUNT_ID || '',
          componentName: 'airSyxqPanelComponent',
          POINT_CODE: row.POINT_CODE || '',
          componentParmas: {
            "pointCode": row.POINT_CODE || '',
            "pointType": row.EVENT_TYPE || '',
            "isShowAlarmFlag": true,
            "alarmTime": row.START_TIME || '',
            "traceTime": row.END_TIME || '',
            "count_id": row.COUNT_ID || '',
            "aqiLevel": state.sourceParmasState.sourceRecordParmas.aqiLevel || '1',
            "primPollute": row.POLLUTANTS || '',
            "polluteLevel": state.sourceParmasState.sourceRecordParmas.polluteLevel || '良',
            "dateType": state.sourceParmasState.sourceRecordParmas.dateType || "HOUR",
            "POINT_CODE": row.POINT_CODE || '',
            "lon": row.LONGITUDE || '',
            "lat": row.LATITUDE || '',
            "REGION_CODE": row.POINT_CODE || '',
            "endTime": row.END_TIME || '',
            "COUNT_ID": row.COUNT_ID || '',
          },
        }, {
          shareCode: "remove_ripple",
          runtimeValue: 'true',
        }
      ]
    });
  }
}

// {
//     "COUNT_ID": "D091F8755AFE5264E0538500A8C0C5E3",
//     "POINT_CODE": "440306023000002",
//     "POINT_NAME": "新桥街道县控站点",
//     "POINT_TYPE": "4",
//     "EVENT_TYPE": "爆发增长",
//     "POLLUTANTS": "PM10",
//     "START_TIME": "2021-03-20 20:00",
//     "END_TIME": "2021-03-20 20:00",
//     "LONGITUDE": "113.847061",
//     "LATITUDE": "22.718378",
//     "MODEL_DESC": "5小时以内PM2.5浓度增长超过100微克/立方米",
//     "POINT_TYPE_NAME": "微站",
//     "action": "溯源"
// }
};
const handleBack = () => {

/* 发送webSocket消息 */
if (rootData?.sendMessage) {
  rootData?.sendMessage({
    id: guid(true, 'lego'), // 唯一索引
    type: "runInteractive", // 消息名称
    data: [{
      shareCode: "hiddenRecordDetail",
      runtimeValue: 'true'
    }, {
      shareCode: "remove_ripple",
      runtimeValue: 'true'
    }]
  });
}
};
const onchange1734341177983 = (data) => {
// 设置变量值
state.alarmPollutionArr = data;
// 执行自定义方法
handleAlarmPollutionChange();
};
const ondateChange1734341720135 = (data) => {
// 设置变量值
state.compTime = data;
// 执行自定义方法
handleTimeChange();
};
const oncellClick1734401879304 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(column,row);
};
const onclick1734681535424 = () => {
// 执行自定义方法
handleBack();
};
// 接口函数
const getHeaderInfo = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"POINT_CODE":state.POINT_CODE,"interfaceId":"a72ff52d8a2db82b4d36c46b63011669"},}).then((res) => {
     // 成功的操作
     // console.log('获取 溯源 头部信息', res);

function formatPointTypeCn(str) {
  if (str === "0") {
    return "国控";
  } else if (str === "1") {
    return "省控";
  } else if (str === "2") {
    return "市控";
  } else if (str === "4") {
    return "微站";
  }
  return '-';
}

// 清空原始数据
state.headerInfo = {
  // 点位名称
  POINT_NAME: '-',
  // 点位类型 / 控制级别
  POINT_TYPE: '',
  // 点位类型 / 控制级别 - 文字
  POINT_TYPE_NAME: '-',
};

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data) {
  state.headerInfo.POINT_NAME = data.data.POINT_NAME || '-';
  state.headerInfo.POINT_TYPE = data.data.POINT_TYPE || '-';
  state.headerInfo.POINT_TYPE_NAME = formatPointTypeCn(data.data.POINT_TYPE) || '-';
}

console.log('获取 溯源 头部信息', state.headerInfo);

// {
//     "POINT_CODE": "440306023000002",
//     "POINT_NAME": "新桥街道县控站点",
//     "POINT_TYPE": "4",
//     "LONGITUDE": 113.847061,
//     "LATITUDE": 22.718378
// }
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 清空原始数据
state.headerInfo = {
  // 点位名称
  POINT_NAME: '-',
  // 点位类型 / 控制级别
  POINT_TYPE: '',
  // 点位类型 / 控制级别 - 文字
  POINT_TYPE_NAME: '-',
};

      reject(error);
    });
  });
};
// 接口函数
const getAlarmList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"ALARM_POINT_TYPE":state.POINT_TYPE,"ALARM_END_TIME":state.ALARM_END_TIME,"ALARM_START_TIME":state.ALARM_START_TIME,"POLLUTES":state.POLLUTES,"POINT_NAME":state.headerInfo.POINT_NAME,"POINT_CODE":state.POINT_CODE,"interfaceId":"944cc7939b82d3a230394f3e31caf252"},}).then((res) => {
     // 成功的操作
     console.log('获取 报警信息列表', res);

// 清空原始数据
state.alarmList = [];
state.alarmListTotal = 0;
state.fragments = [{
  isVariable: false,
  text: '当前共',
  alias: '',
  styleName: 'style1',
},
{
  isVariable: false,
  text: '1',
  alias: '',
  styleName: 'style2',
},
{
  isVariable: false,
  text: '个站点发生',
  alias: 'recent',
  styleName: 'style1',
},
{
  isVariable: false,
  text: '-',
  alias: '',
  styleName: 'style2',
},
{
  isVariable: false,
  text: '条报警。',
  alias: '',
  styleName: 'style1',
}];

// 100 50 70 70 70 48
state.columns = [{
  label: '站点名称',
  key: 'POINT_NAME_SHOW',
  align: 'left',
  headerAlign: 'left',
  width: '100',
  tooltipContentKey: 'POINT_NAME', // 绑定显示tooltip内容的字段
  showTooltip: true, // 在展示默认列的状态下显示tooltip
  showOverflowTooltip: true, // 设置省略号
  style: {
    fontStyle: {
      display: 'inline-block',
      width: '100%',
      color: 'var(--business-theme)',
      cursor: 'pointer',
    },
  },
}, {
  label: '类型',
  key: 'POINT_TYPE_NAME',
  align: 'center',
  width: '50',
}, {
  label: '报警类型',
  key: 'EVENT_TYPE_SHOW',
  align: 'center',
  // width: '70',
  width: '118',
  tooltipContentKey: 'MODEL_DESC', // 绑定显示tooltip内容的字段
  showTooltip: true, // 在展示默认列的状态下显示tooltip
  showOverflowTooltip: true, // 设置省略号
  style: {
    fontStyle: {
      display: 'inline-block',
      width: '100%',
    },
  },
}, {
  label: '开始时间',
  key: 'START_TIME',
  align: 'center',
  width: '70',
}, {
  label: '结束时间',
  key: 'END_TIME',
  align: 'center',
  width: '70',
},
// {
//   label: '操作',
//   key: 'action',
//   align: 'center',
//   width: '48',
//   style: {
//     fontStyle: {
//       color: 'var(--business-theme)',
//       cursor: 'pointer',
//     },
//   },
// }
]

const { data } = res;

function formatPointTypeCn(str) {
  if (str === "0") {
    return "国控";
  } else if (str === "1") {
    return "省控";
  } else if (str === "2") {
    return "市控";
  } else if (str === "4") {
    return "微站";
  }
  return '-';
}

if (data?.head?.statusCode === '200' && data?.data?.length) {
  state.alarmList = data.data.map((item) => ({
    ...item,
    POINT_NAME: item.POINT_NAME || '-',
    POINT_NAME_SHOW: item.POINT_NAME.length > 7 ? `${item.POINT_NAME.substr(0,7)}...` : item.POINT_NAME,
    POINT_TYPE: item.POINT_TYPE || '-',
    POINT_TYPE_NAME: formatPointTypeCn(item.POINT_TYPE),
    START_TIME: item.START_TIME || '-',
    END_TIME: item.END_TIME || '-',
    EVENT_TYPE: item.EVENT_TYPE || '-',
    EVENT_TYPE_SHOW: item.EVENT_TYPE.length > 6 ? `${item.EVENT_TYPE.substr(0,6)}...` : item.EVENT_TYPE,
    MODEL_DESC: item.MODEL_DESC || '-',
    action: '溯源',
  }));
  state.alarmListTotal = state.alarmList.length;
  state.fragments[3].text = state.alarmListTotal;
}

console.log('填充后的 报警信息列表', state.alarmList, state.alarmListTotal);

// {
//     "COUNT_ID": "D091F8755AFE5264E0538500A8C0C5E3",
//     "POINT_CODE": "440306023000002",
//     "POINT_NAME": "新桥街道县控站点",
//     "POINT_TYPE": "4",
//     "EVENT_TYPE": "爆发增长",
//     "POLLUTANTS": "PM10",
//     "START_TIME": "2021-03-20 20:00",
//     "END_TIME": "2021-03-20 20:00",
//     "LONGITUDE": "113.847061",
//     "LATITUDE": "22.718378",
//     "MODEL_DESC": "5小时以内PM2.5浓度增长超过100微克/立方米"
// }
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.alarmList = [];
state.alarmListTotal = 0;
state.fragments = [{
  isVariable: false,
  text: '当前共',
  alias: '',
  styleName: 'style1',
},
{
  isVariable: false,
  text: '1',
  alias: '',
  styleName: 'style2',
},
{
  isVariable: false,
  text: '个站点发生',
  alias: 'recent',
  styleName: 'style1',
},
{
  isVariable: false,
  text: '-',
  alias: '',
  styleName: 'style2',
},
{
  isVariable: false,
  text: '条报警。',
  alias: '',
  styleName: 'style1',
}];
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-airMonthlyAlarmRecords', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
// 执行自定义方法
initPage();
onMounted(() => {
setPageScale('t-l-c-airMonthlyAlarmRecords', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tCheckboxx0x1ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x1.default, componentState.tCheckboxx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tDatePickerx0x3ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x3.default, componentState.tDatePickerx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tHighLightTextx0x5ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x5.default, componentState.tHighLightTextx0x5?.[state.screenSize]));

 const tRowx0x6ComputedData = computed(() => _.merge({}, componentState.tRowx0x6.default, componentState.tRowx0x6?.[state.screenSize]));

 const tTextx0x6x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x6x0.default, componentState.tTextx0x6x0?.[state.screenSize]));

 const tTextx0x6x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x6x1.default, componentState.tTextx0x6x1?.[state.screenSize]));

 const tTextx0x6x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x6x2.default, componentState.tTextx0x6x2?.[state.screenSize]));

 const tTextx0x6x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x6x3.default, componentState.tTextx0x6x3?.[state.screenSize]));

 const tTablex0x7ComputedData = computed(() => _.merge({}, componentState.tTablex0x7.default, componentState.tTablex0x7?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tCheckboxx0x1ComputedData,
tRectx0x2ComputedData,
tDatePickerx0x3ComputedData,
tRectx0x4ComputedData,
tHighLightTextx0x5ComputedData,
tRowx0x6ComputedData,
tTextx0x6x0ComputedData,
tTextx0x6x1ComputedData,
tTextx0x6x2ComputedData,
tTextx0x6x3ComputedData,
tTablex0x7ComputedData,
onchange1734341177983,
ondateChange1734341720135,
onclick1734681535424,
oncellClick1734401879304,
};
},
}
</script>

<style scoped>
.t-l-c-airMonthlyAlarmRecords {
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
background-color: rgba(0, 0, 0, 0);
width: 450px;
height: 900px;
}
.t-l-c-airMonthlyAlarmRecords .airMonthlyAlarmRecords-t-rect-0-0 {
position: absolute !important;
top: 54px;
left: -1px;
width: 450px;
height: 106px;
pointer-events: auto;
}

.t-l-c-airMonthlyAlarmRecords .airMonthlyAlarmRecords-t-checkbox-0-1 {
position: absolute !important;
top: 112px;
left: 15px;
width: 418px;
height: 34px;
pointer-events: auto;
}

.t-l-c-airMonthlyAlarmRecords .airMonthlyAlarmRecords-t-rect-0-2 {
position: absolute !important;
top: 55px;
left: 0px;
width: 450px;
height: 1px;
pointer-events: auto;
}

.t-l-c-airMonthlyAlarmRecords .airMonthlyAlarmRecords-t-date-picker-0-3 {
position: absolute !important;
top: 71px;
left: 15px;
width: 418px;
height: 33px;
pointer-events: auto;
}

.t-l-c-airMonthlyAlarmRecords .airMonthlyAlarmRecords-t-rect-0-4 {
position: absolute !important;
top: 185px;
left: 19px;
width: 410px;
height: 42px;
pointer-events: auto;
}

.t-l-c-airMonthlyAlarmRecords .airMonthlyAlarmRecords-t-high-light-text-0-5 {
position: absolute !important;
top: 197px;
left: 38px;
width: 373px;
height: 20px;
pointer-events: auto;
}

.t-l-c-airMonthlyAlarmRecords .airMonthlyAlarmRecords-t-row-0-6 {
position: absolute !important;
top: 0px;
left: 18.5px;
width: 413px;
height: 54px;
pointer-events: auto;
animation-name: ;
}

.t-l-c-airMonthlyAlarmRecords .airMonthlyAlarmRecords-t-text-0-6-0 {
position: unset;
top: -49.5px;
left: 690px;
width: 43px;
height: 18px;
pointer-events: auto;
}

.t-l-c-airMonthlyAlarmRecords .airMonthlyAlarmRecords-t-text-0-6-1 {
position: unset;
top: -50.5px;
left: 749px;
width: auto;
height: 23px;
pointer-events: auto;
}

.t-l-c-airMonthlyAlarmRecords .airMonthlyAlarmRecords-t-text-0-6-2 {
position: unset;
top: -14.919248255287734px;
left: 984.8575498999619px;
width: 80px;
height: 23px;
pointer-events: auto;
}

.t-l-c-airMonthlyAlarmRecords .airMonthlyAlarmRecords-t-text-0-6-3 {
position: unset;
top: -49.5px;
left: 828px;
width: 40px;
height: 20px;
pointer-events: auto;
}

.t-l-c-airMonthlyAlarmRecords .airMonthlyAlarmRecords-t-table-0-7 {
position: absolute !important;
top: 234px;
left: 20px;
width: 409px;
height: 650px;
pointer-events: auto;
}
</style>
