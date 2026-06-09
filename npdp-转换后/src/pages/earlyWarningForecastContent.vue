<template>
  <div id="t-l-c-earlyWarningForecastContent" class="t-l-c-earlyWarningForecastContent" ><t-component id="t-component-3f9e.6d1636f5c" class="earlyWarningForecastContent-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName" :page-id="tComponentx0x0ComputedData.pageId" :page-code="tComponentx0x0ComputedData.pageCode"></t-component><t-component id="t-component-f74e.41be3ed14" class="earlyWarningForecastContent-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode"></t-component><t-component id="t-component-9c0b.c1f74dcf8" class="earlyWarningForecastContent-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName" :page-id="tComponentx0x2ComputedData.pageId" :page-code="tComponentx0x2ComputedData.pageCode"></t-component><t-text-common id="t-text-common-24e8.92215f66e" class="earlyWarningForecastContent-t-text-common-0-4"  :label="tTextCommonx0x4ComputedData.label" :editable="tTextCommonx0x4ComputedData.editable" :c-style="tTextCommonx0x4ComputedData.cStyle"></t-text-common><t-date-picker id="t-date-picker-f414.3a989b7ec" class="earlyWarningForecastContent-t-date-picker-0-5"  :placeholder="tDatePickerx0x5ComputedData.placeholder" :start-placeholder="tDatePickerx0x5ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x5ComputedData.endPlaceholder" :type="tDatePickerx0x5ComputedData.type" :clearable="tDatePickerx0x5ComputedData.clearable" :range-separator="tDatePickerx0x5ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(global.warningRightDataRange.value, componentPropBindingMap?.['t-date-picker-f414.3a989b7ec']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x5ComputedData.separator" :readonly="tDatePickerx0x5ComputedData.readonly" :editable="tDatePickerx0x5ComputedData.editable" :c-style="tDatePickerx0x5ComputedData.cStyle" @date-change="ondateChange1764294836112"></t-date-picker></div>
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
import { TComponent, TDatePicker, TTextCommon } from '@ths/design';

export default {
  components: {
    TComponent,
    TDatePicker,
    TTextCommon,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-3f9e.6d1636f5c":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-f74e.41be3ed14":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-9c0b.c1f74dcf8":{"attributeName":"tComponentx0x2","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-date-picker-4b2a.657f95511":{"attributeName":"tDatePickerx0x3"},"t-text-common-24e8.92215f66e":{"attributeName":"tTextCommonx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-f414.3a989b7ec":{"attributeName":"tDatePickerx0x5","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   isNewDate: true,
   maxQuarterYear: "",
   maxTimeValue: "",
   standardContentFold: true,
   isProvince: false,
   isMonthOrYear: false,
   isDayOrHour: true,
   dateType: "datetimehour",
   timeType: "hour",
   timeValue: "",
   quarterValue: "",
   quarterYear: "",
   dateRange: {"start":"","end":"","value":["2025-11-06 00","2025-11-08 00"]},
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
            default: {"width":"410px","height":"280px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"62px","animationName":""},
            
            },
 default: { 
 
name:"radarWariningRealComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"280px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"62px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/radarWariningReal",
componentName:"radarWariningRealComponent",
pageId:"092862f2c96f4799bbc7bc34ef867e4f",
pageCode:"radarWariningReal", 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"410px","height":"462px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"758px","animationName":""},
            
            },
 default: { 
 
name:"stationWarningComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"462px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"758px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/stationWarning",
componentName:"stationWarningComponent",
pageId:"44ba15f245e14e9c93bf7476740c8e28",
pageCode:"stationWarning", 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"410px","height":"370px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"359px"},
            
            },
 default: { 
 
name:"recentlyVideoWarningRealComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"370px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"359px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/recentlyVideoWarningReal",
componentName:"recentlyVideoWarningRealComponent",
pageId:"19a792bc0771444a8d0a6a70e86744ce",
pageCode:"recentlyVideoWarningReal", 
 },
},
tTextCommonx0x4: {
defaultStyle: {
            default: {"width":"89px","height":"32px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"32px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"21px","top":"9px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"报警时间",
editable:false,
cStyle:{"wrapper":{"default":{"width":"89px","height":"32px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"32px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"21px","top":"9px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tDatePickerx0x5: {
defaultStyle: {
            default: {"width":"308px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"308px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important","lineHeight":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-white) !important","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}}, 
 },
},
});
const handleTimeTypeChange = (timeType) => {
/**
 * 处理时间类型tab变化
 * timeType：时间类型-hour、day、month、quarter、year
 */
switch (timeType) {
  case 'hour':
    state.dateType = 'datetimehour';
    break;
  case 'day':
    state.dateType = 'date';
    break;
  case 'month':
  case 'year':
    state.dateType = timeType;
    break;
  default:
    break;
}
// 1、设置内容显示变量值
setContentVisibleValue();
// 2、设置公共内容的位置
setCommonContentPosition();
// // 当前指标数据
// const curIndexList = getCenterIndexList('air', timeType);
// rootData.rootEmit(
//   // 固定的消息名称，不能修改
//   'rootData:change',
//   {
//     // 全局变量的键名
//     key: 'air.centerIndexList',
//     // 将要修改的全局变量的键值
//     value: curIndexList,
//   },
// );
// rootData.rootEmit(
//   // 固定的消息名称，不能修改
//   'rootData:change',
//   {
//     // 全局变量的键名
//     key: 'air.centerIndexSelect',
//     // 将要修改的全局变量的键值
//     value: curIndexList[0].name,
//   },
// );
};
const setProvider = () => {
provide('airOverviewContentState', state);
};
const setStandardBelowContentPosition = () => {
/**
 * 设置“达标考核情况”下方内容的位置
 */
const isFold = state.standardContentFold;

// 展开与不展开的位置差300px
/* 当前整个页面高度：
 *   展示空气质量排名-表格（动态组件高度340px）
 *   与展示行政区-空气质量排名-卡片（动态组件高度75px），相差265px
 */
if (state.isDayOrHour) { // 日、小时
  // 当前整个页面内容-高度
  setDomHeightValue('t-l-c-airOverviewContent', isFold ? '1029px' : '1329px');
  // 空气质量排名-标题
  setDomTopValue('t-component-e08a.c918ca32d', isFold ? '895px' : '1195px');
  // 空气质量排名-表格
  // setDomTopValue('t-component-4f0c.743c6163e', isFold ? '940px' : '1240px');
  // 行政区-空气质量排名-卡片
  setDomTopValue('t-component-f0c0.1b8778952', isFold ? '940px' : '1240px');
} else if (state.isMonthOrYear) { // 月、季度、年
  // 当前整个页面内容-高度
  setDomHeightValue('t-l-c-airOverviewContent', isFold ? '1509px' : '1809px');
  // 空气质量排名-标题
  setDomTopValue('t-component-e08a.c918ca32d', isFold ? '1381px' : '1681px');
  // 空气质量排名-表格
  // setDomTopValue('t-component-4f0c.743c6163e', isFold ? '1426px' : '1726px');
  // 行政区-空气质量排名-卡片
  setDomTopValue('t-component-f0c0.1b8778952', isFold ? '1426px' : '1726px');
}  else if (state.isProvince) { // 省
  // 当前整个页面内容-高度
  setDomHeightValue('t-l-c-airOverviewContent', isFold ? '857px' : '1157px');
  // 空气质量排名-标题
  setDomTopValue('t-component-e08a.c918ca32d', isFold ? '723px' : '1023px');
  // 空气质量排名-表格
  // setDomTopValue('t-component-4f0c.743c6163e', isFold ? '768px' : '1068px');
  // 行政区-空气质量排名-卡片
  setDomTopValue('t-component-f0c0.1b8778952', isFold ? '768px' : '1068px');
}
};
const setCommonContentPosition = () => {
/**
 * 设置公共内容的默认位置（达标考核情况、空气质量排名）
 */

// 选择日、小时
if (state.isDayOrHour) {
  // 达标考核标题
  setDomTopValue('t-component-4b3f.2cfafc59', '694px');
  // 达标考核第一项内容
  setDomTopValue('t-component-8bb9.af6688f5a', '738px');
  // 达标考核后三项内容
  setDomTopValue('t-component-5aa4.688be3ff9', '838px');
  // 展开按钮
  setDomTopValue('t-rect-e1db.376b96d46', '838px');
  // 收起按钮
  setDomTopValue('t-rect-9f3a.24d71e31c', '1138px');
} else if (state.isMonthOrYear) { // 选择月、季度、年
  // 达标考核标题
  setDomTopValue('t-component-4b3f.2cfafc59', '1180px');
  // 达标考核第一项内容
  setDomTopValue('t-component-8bb9.af6688f5a', '1224px');
  // 展开按钮
  setDomTopValue('t-rect-e1db.376b96d46', '1324px');
  // 达标考核后三项内容
  setDomTopValue('t-component-5aa4.688be3ff9', '1324px');
  // 收起按钮
  setDomTopValue('t-rect-9f3a.24d71e31c', '1624px');
} else if (state.isProvince) { // 全省
  // 达标考核标题
  setDomTopValue('t-component-4b3f.2cfafc59', '522px');
  // 达标考核第一项内容
  setDomTopValue('t-component-8bb9.af6688f5a', '566px');
  // 展开按钮
  setDomTopValue('t-rect-e1db.376b96d46', '666px');
  // 达标考核后三项内容
  setDomTopValue('t-component-5aa4.688be3ff9', '666px');
  // 收起按钮
  setDomTopValue('t-rect-9f3a.24d71e31c', '966px');
}
// 当前页面-设置高度、空气质量排名标题、空气质量排名内容top值
setStandardBelowContentPosition();



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
    setContentVisibleValue();
  }
  // 设置公共内容的位置
  setCommonContentPosition();
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
const setContentVisibleValue = () => {
/**
 * 根据时间类型、行政区类型-设置内容显示条件的变量值
 */
/**
 * timeType：时间类型-hour、day、month、quarter、year
 */
// 先置为false
state.isDayOrHour = false;
state.isMonthOrYear = false;
switch (state.timeType) {
  case 'hour':
  case 'day':
    // 如果不是全省
    if (!state.isProvince) {
      state.isDayOrHour = true;
    }
    break;
  case 'month':
  case 'quarter':
  case 'year':
    // 如果不是全省
    if (!state.isProvince) {
      state.isMonthOrYear = true;
    }
    break;
  default:
    break;
}
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
console.log(state.isNewDate, '@@@')

};
const setTimeNormalValue = (timeValue) => {
state.timeValue = timeValue || '';
if (state.timeType === 'quarter') {
  state.quarterYear = handleStringSplit(timeValue || '', '-')[0] || '';
  state.quarterValue = handleStringSplit(timeValue || '', '-')[1] || '';
}
};
const judgeIsNewDate = () => {
// 判断是否是最新时间
state.isNewDate = state.maxTimeValue.includes(state.timeValue);
};
const setTimeValue = (data) => {
debugger
global.warningRightDataRange.value = data || [];
global.warningRightDataRange.startTime = data[0] || "";
global.warningRightDataRange.endTime = data[1] || "";
// 发送消息给地图
sendMsgToMapChangeTime(global.warningRightDataRange.startTime,global.warningRightDataRange.endTime); // 参数注意修改
};
const sendMsgToMapChangeTime = (startTime,endTime) => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'updateAlarmTimePeriod',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      START_TIME: startTime,
      END_TIME: endTime
    }
  }
);
};
const initParams = () => {
watch(() => global.regionaQuery.regionCode, () => {
  if (global.regionaQuery.regionCode) {
    const regionLevelCode = getRegionLevel(global.regionaQuery.regionCode);
    switch (regionLevelCode) {
      case 'province':
      case 'city':
        state.pointType = '12';
        break;
      case 'county':
        state.pointType = '13';
        break;
      default:
        break;
    }
  }
}, {
  deep: true,
  immediate: true,
})
};
const ondateChange1762504901269_0_0 = (data) => {
// 执行自定义方法
setTimeValue(data);
};
const ondateChange1764294836112 = (data) => {
// 执行自定义方法
setTimeValue(data);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getLatestTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TIME_TYPE":"5minute","POINT_TYPE":"state.pointType","interfaceId":"66ad2ebe9d660295568b05187f34e133"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":"5minute","POINT_TYPE":state.pointType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TIME_TYPE":"5minute","POINT_TYPE":state.pointType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  let endTime = data.MONITORTIME
  let startTime = getPrevTime(`${endTime}:00`, 'minute').slice(0, 16)
  global.warningRightDataRange.startTime = startTime.slice(0,16)
  global.warningRightDataRange.endTime = endTime
  global.warningRightDataRange.value = [global.warningRightDataRange.startTime, global.warningRightDataRange.endTime]
  // 发送消息给地图
  sendMsgToMapChangeTime(global.warningRightDataRange.startTime,global.warningRightDataRange.endTime);
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
                            setPageScale('t-l-c-earlyWarningForecastContent', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initParams();
onMounted(() => {
setPageScale('t-l-c-earlyWarningForecastContent', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tTextCommonx0x4ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x4.default, componentState.tTextCommonx0x4?.[state.screenSize]));

 const tDatePickerx0x5ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x5.default, componentState.tDatePickerx0x5?.[state.screenSize]));

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
tComponentx0x2ComputedData,
tTextCommonx0x4ComputedData,
tDatePickerx0x5ComputedData,
ondateChange1764294836112,
};
},
}
</script>

<style scoped>
.t-l-c-earlyWarningForecastContent {
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
height: 1247px;
width: 450px;
background-color: rgba(0,0,0,0);
}
.t-l-c-earlyWarningForecastContent .earlyWarningForecastContent-t-component-0-0 {
position: absolute !important;
top: 62px;
left: 20px;
width: 410px;
height: 280px;
pointer-events: auto;
}

.t-l-c-earlyWarningForecastContent .earlyWarningForecastContent-t-component-0-1 {
position: absolute !important;
top: 758px;
left: 20px;
width: 410px;
height: 462px;
pointer-events: auto;
}

.t-l-c-earlyWarningForecastContent .earlyWarningForecastContent-t-component-0-2 {
position: absolute !important;
top: 359px;
left: 20px;
width: 410px;
height: 370px;
pointer-events: auto;
}

.t-l-c-earlyWarningForecastContent .earlyWarningForecastContent-t-text-common-0-4 {
position: absolute !important;
top: 9px;
left: 21px;
width: 89px;
height: 32px;
pointer-events: auto;
}

.t-l-c-earlyWarningForecastContent .earlyWarningForecastContent-t-date-picker-0-5 {
position: absolute !important;
top: 9px;
left: 121px;
width: 308px;
height: 32px;
pointer-events: auto;
}
</style>
