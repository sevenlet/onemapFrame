<template>
  <div id="t-l-c-lianshanPointPopup" class="t-l-c-lianshanPointPopup" ><t-rect id="t-rect-09e8.3b71afa9a" class="lianshanPointPopup-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-row id="t-row-2d0d.f560c1859" class="lianshanPointPopup-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align"><t-col id="t-col-bdbf.fbd94bcb2" class="lianshanPointPopup-t-col-0-1-0"  :span="tColx0x1x0ComputedData.span" :offset="tColx0x1x0ComputedData.offset" :push="tColx0x1x0ComputedData.push" :pull="tColx0x1x0ComputedData.pull" :c-style="tColx0x1x0ComputedData.cStyle"><t-rect id="t-rect-2428.3eff3911" class="lianshanPointPopup-t-rect-0-1-0-0"  :tip="tRectx0x1x0x0ComputedData.tip" :label="tRectx0x1x0x0ComputedData.label" :active="tRectx0x1x0x0ComputedData.active" :c-style="tRectx0x1x0x0ComputedData.cStyle"></t-rect><t-tabs id="t-tabs-3f14.634f07a5d" class="lianshanPointPopup-t-tabs-0-1-0-1"  :data="replaceCssVariables(filterData(state.menuData, componentPropBindingMap?.['t-tabs-3f14.634f07a5d']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active-tab="replaceCssVariables(filterData(state.menuSelect, componentPropBindingMap?.['t-tabs-3f14.634f07a5d']['activeTab'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :tab-position-extend="tTabsx0x1x0x1ComputedData.tabPositionExtend" :stretch="tTabsx0x1x0x1ComputedData.stretch" :c-style="tTabsx0x1x0x1ComputedData.cStyle" @tab-click="ontabClick1734060040385"></t-tabs></t-col><t-col id="t-col-446a.c532d22fd" class="lianshanPointPopup-t-col-0-1-1"  :span="tColx0x1x1ComputedData.span" :offset="tColx0x1x1ComputedData.offset" :push="tColx0x1x1ComputedData.push" :pull="tColx0x1x1ComputedData.pull" :c-style="tColx0x1x1ComputedData.cStyle"><t-component id="t-component-ec5e.4e5a1a53b" class="lianshanPointPopup-t-component-0-1-1-0"  :name="replaceCssVariables(filterData(state.contentComponentName, componentPropBindingMap?.['t-component-ec5e.4e5a1a53b']['name'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tComponentx0x1x1x0ComputedData.cStyle" :src="tComponentx0x1x1x0ComputedData.src" :component-name="replaceCssVariables(filterData(state.contentComponentName, componentPropBindingMap?.['t-component-ec5e.4e5a1a53b']['componentName'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :page-id="tComponentx0x1x1x0ComputedData.pageId" :page-code="tComponentx0x1x1x0ComputedData.pageCode"></t-component><t-rect id="t-rect-b7ea.d5c651efa" class="lianshanPointPopup-t-rect-0-1-1-1"  :tip="tRectx0x1x1x1ComputedData.tip" :label="tRectx0x1x1x1ComputedData.label" :active="tRectx0x1x1x1ComputedData.active" :c-style="tRectx0x1x1x1ComputedData.cStyle"></t-rect></t-col></t-row></div>
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
import { TCol, TComponent, TRect, TRow, TTabs } from '@ths/design';

export default {
  components: {
    TCol,
    TComponent,
    TRect,
    TRow,
    TTabs,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-09e8.3b71afa9a":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-row-2d0d.f560c1859":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-bdbf.fbd94bcb2":{"attributeName":"tColx0x1x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-2428.3eff3911":{"attributeName":"tRectx0x1x0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-3f14.634f07a5d":{"attributeName":"tTabsx0x1x0x1","data":{"filters":[]},"activeTab":{"filters":[]},"tabPositionExtend":{"filters":[]},"stretch":{"filters":[]},"cStyle":{"filters":[]}},"t-col-446a.c532d22fd":{"attributeName":"tColx0x1x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-ec5e.4e5a1a53b":{"attributeName":"tComponentx0x1x1x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-rect-b7ea.d5c651efa":{"attributeName":"tRectx0x1x1x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
// 页面内注入全局变量和事件
const rootData = inject('root');
const global = reactive({
...toRefs(rootData)
});
// 路由
const route = useRoute();
// 创建 DOM 引用

// 当前页面使用的变量
let state = reactive({
   screenSize: "",
   timeType: "",
   timeValue: "",
   dividerShow: {"divider2Show":false,"divider3Show":false,"divider4Show":false,"divider1Show":false},
   firstPollution: "首要污染物：--",
   AQI_LEVEL: [{"state":"--","stateColor":"rgba(0, 0, 0, 0.9)","stateBgColor":"#AAA"}],
   headerInfo: {"PRIMPOLLUTE":"--","POINT_TYPE_NAME":"--","AQILEVELINDEX":"--","AQI":"--"},
   baseInfo: {"POINT_NAME":"--","POINT_TYPE_NAME":"--","POINT_STREET":"--","POINT_ADDRESS":"--"},
   POINT_CODE: "",
   pageTitle: "--",
   contentComponentName: "lianshanPopupBaseInfoComponent",
   menuData: [{"label":"基本信息","name":"lianshanPopupBaseInfoComponent"},{"label":"炼山对比","name":"lianshanCompareComponent"}],
   menuSelect: "lianshanPopupBaseInfoComponent",
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
            default: {"width":"100%","height":"100%","position":"unset","left":"0px","top":"-3px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderLeft":"1px Solid rgba(0,0,0,1)","borderTop":"1px Solid rgba(0,0,0,1)","borderRight":"1px Solid rgba(0,0,0,1)","borderBottom":"1px Solid rgba(0,0,0,1)","animationName":"","borderDirection":"all","border":"unset !important"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","position":"unset","left":"0px","top":"-3px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderLeft":"1px Solid rgba(0,0,0,1)","borderTop":"1px Solid rgba(0,0,0,1)","borderRight":"1px Solid rgba(0,0,0,1)","borderBottom":"1px Solid rgba(0,0,0,1)","animationName":"","borderDirection":"all","border":"unset !important"}}}, 
 },
},
tRowx0x1: {
defaultStyle: {
            default: {"width":"calc(100% - 40px)","height":"calc(100% - 30px)","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"20px","top":"15px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"calc(100% - 40px)","height":"calc(100% - 30px)","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"20px","top":"15px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x1x0: {
defaultStyle: {
            default: {"width":"100px","height":"100%","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"100%","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tRectx0x1x0x0: {
defaultStyle: {
            default: {"width":"100%","minWidth":"120px","height":"100%","backgroundColor":"var(--business-show-bg15)","position":"absolute","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"100%","minWidth":"120px","height":"100%","backgroundColor":"var(--business-show-bg15)","position":"absolute","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""}}}, 
 },
},
tTabsx0x1x0x1: {
defaultStyle: {
            default: {"width":"121px","height":"120px","position":"absolute !important","left":"50% !important","transform":"translateX(-50%)","top":"10px","backgroundColor":"rgba(23, 62, 228, 0)","paddingLeft":"8px","paddingRight":"0px","marginLeft":"0px","paddingBottom":"0","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
data:[{"label":"基本信息","name":"lianshanPopupBaseInfoComponent"},{"label":"炼山对比","name":"lianshanCompareComponent"}],
activeTab:"lianshanPopupBaseInfoComponent",
tabPositionExtend:"right",
stretch:true,
cStyle:{"wrapper":{"default":{"width":"121px","height":"120px","position":"absolute !important","left":"50% !important","transform":"translateX(-50%)","top":"10px","backgroundColor":"rgba(23, 62, 228, 0)","paddingLeft":"8px","paddingRight":"0px","marginLeft":"0px","paddingBottom":"0","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"itemActiveBorder":{"default":{"width":"4px"}},"itemWrapper":{"default":{"marginRight":"0px","color":"var(--t-white)","textAlign":"center!important","width":"103px","height":"32px","marginLeft":"1px","fontSize":"14px","lineHeight":"32px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginBottom":"20px","borderLeft":"0px solid rgba(255,255,255,0.2)","borderTop":"0px solid rgba(255,255,255,0.2)","borderRight":"0px solid rgba(255,255,255,0.2)","borderBottom":"1px none rgba(255,255,255,0.2)"},"hover":{"background":"var(--business-site-menu-active)","boxShadow":"inset 0px 0px 18px 0px rgba(255, 206, 109, 0.49)","borderLeft":"1px solid #FFEFC9","borderTop":"1px solid #FFEFC9","borderRight":"1px solid #FFEFC9","borderBottom":"1px solid #FFEFC9","fontSize":"14px","borderTopLeftRadius":"32px","borderTopRightRadius":"32px","borderBottomLeftRadius":"32px","borderBottomRightRadius":"32px","textAlign":"center"},"active":{"background":"var(--business-site-menu-active)","color":"var(--t-white)","borderLeft":"1px solid #FFEFC9","borderTop":"1px solid #FFEFC9","borderRight":"1px solid #FFEFC9","borderBottom":"1px solid #FFEFC9","boxShadow":"inset 0px 0px 18px 0px rgba(255, 206, 109, 0.49)","fontSize":"14px","lineHeight":"32px","borderTopLeftRadius":"32px","borderTopRightRadius":"32px","borderBottomLeftRadius":"32px","borderBottomRightRadius":"32px","marginBottom":"20px","textAlign":"center"}},"nextIcon":{"default":{"display":"block"}},"itemLabel":{"default":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tColx0x1x1: {
defaultStyle: {
            default: {"width":"100px","height":"100%","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:21,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"100%","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tComponentx0x1x1x0: {
defaultStyle: {
            default: {"width":"94%","height":"94%","margin":"0 auto","backgroundColor":"rgba(23, 62, 228, 0)","position":"absolute","left":"50%","top":"50%","transform":"translate(-50%, -50%)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingTop":"0px","paddingLeft":"0px","paddingRight":"0px","paddingBottom":"0px","animationName":""},
            
            },
 default: { 
 
name:"lianshanPopupBaseInfoComponent",
cStyle:{"wrapper":{"default":{"width":"94%","height":"94%","margin":"0 auto","backgroundColor":"rgba(23, 62, 228, 0)","position":"absolute","left":"50%","top":"50%","transform":"translate(-50%, -50%)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingTop":"0px","paddingLeft":"0px","paddingRight":"0px","paddingBottom":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/lianshanPopupBaseInfo",
componentName:"lianshanPopupBaseInfoComponent",
pageId:"",
pageCode:"", 
 },
},
tRectx0x1x1x1: {
defaultStyle: {
            default: {"width":"99%","height":"100%","position":"absolute","left":"10px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg15)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"99%","height":"100%","position":"absolute","left":"10px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg15)","animationName":""}}}, 
 },
},
});
const setContentComponentName = (menuValue) => {
if (!menuValue) return;
switch (menuValue) {
  // 实时监测
  case 'realTimeMonitor':
    state.contentComponentName = 'airOverviewSiteRealtimeMonitorComponent';
    break;
  // 变化趋势
  case 'changeTrend':
    state.contentComponentName = 'airOverviewSiteChangeTrentComponent';
    break;
  // 气象分析
  case 'meteorologyAna':
    state.contentComponentName = 'airOverviewSiteMeteorologyAnalComponent';
    break;
  // 报警记录
  case 'warnRecord':
    state.contentComponentName = 'airOverviewSiteWarnRecordComponent';
    break;
  // 关联站点
  case 'airOverviewSiteRelatedSite':
    state.contentComponentName = 'airOverviewSiteRelatedSiteComponent';
    break;
  default:
    break;
}
};
const initPage = () => {
console.log(global.businessDialog.dialogParmas, 'test');
if (global.businessDialog.dialogParmas.layerName === '航拍点位') {
  global.businessDialog.dialogName = '';
  // return;
}
state.POINT_CODE = global.businessDialog.dialogParmas.POINT_CODE;
state.timeType = global.air.timeType;
state.timeValue = global.air.timeValue;
if (state.POINT_CODE) {
  apiRegistry.getBaseInfo.request();
  // apiRegistry.getHeaderInfo.request();
  apiRegistry.getMenu.request();
}
};
const setProvider = () => {
provide('airPointState', state);
};
const getAQIColor = (level) => {
/**
 * 获取等级数据
 * level：aqi等级值，1-6，无数据为7
 */
switch (level) {
  case '1':
  case 1:
    return '#00E400';
  case '2':
  case 2:
    return '#FFFF00';
  case '3':
  case 3:
    return '#FF7E00';
  case '4':
  case 4:
    return '#FF0000';
  case '5':
  case 5:
    return '#99004C';
  case '6':
  case 6:
    return '#7E0023';
  case '7':
  case 7:
    return '#AAAAAA';
  default:
    return '#AAAAAA';
}
};
const handleClickQuery = () => {
const pointInfo = global.businessDialog.dialogParmas;
// 周边查询
const pointLocation = [];
pointLocation.push(parseFloat(pointInfo.LONGITUDE));
pointLocation.push(parseFloat(pointInfo.LATITUDE));

/* 发送webSocket消息 */
/*if (rootData?.sendMessage) {
  rootData?.sendMessage({
    id: guid(true, 'lego'), // 唯一索引
    type: "runInteractive", // 消息名称
    data: [ // 消息内容
      { shareCode: "POINT_LOACTION", runtimeValue: JSON.stringify(pointLocation) },
      { shareCode: "POINT_LOACTION_NAME", runtimeValue: pointInfo.POINT_NAME }
    ]
  });
}*/

rootData.rootSocket.emit('message', {
  type: 'showAirTraceDetail',
  room: global.socketRoom,
  data: [ // 消息内容
    { shareCode: "POINT_LOACTION", runtimeValue: JSON.stringify(pointLocation) },
    { shareCode: "POINT_LOACTION_NAME", runtimeValue: pointInfo.POINT_NAME }
  ]
});
global.businessDialog.dialogName = '';
};
const handleClickTrace = () => {
// 发送消息给地图
rootData.rootSocket.emit('message', {
  type: 'showAirSourceTrace',
  room: global.socketRoom,
  data: [ // 消息内容
    {
      shareCode: "showAirSourceTrace",
      runtimeValue: state.POINT_CODE,
      pointType: global.businessDialog.dialogParmas.POINT_TYPE || '',
      isEnters: true,
      // 小时或天时间，天的时候拼接上 00
      traceTime: global.air.timeType === 'hour' ? global.air.timeValue : global.air.timeValue + ' 00',
      layerName: global.businessDialog.dialogParmas.layerName,
    }]
});

// POINT_CODE: '51018201001',
//   alarmTime: '2021-03-23 17',
//   aqiLevel: '2', // aqi级别 0：未获取数据 1： 优良 2：超标
//   primPollute: 'PM10', // 首要污染物
//   polluteLevel: '中度污染', // 污染级别
// isShowAlarmFlag: false
// endTime: '2021-03-23 17'
// pointType: '4'

/* 发送webSocket消息 */
// 超标状态-默认0，AQILEVELINDEX = 1,2 等于1， 优良 AQI > 100 超标，等于2
let exceedingTheStandardState = '0';
// 点位aqi等级level值
const pointAQILevelIndex = global.businessDialog.dialogParmas.AQI_LEVELINDEX || '';
if (pointAQILevelIndex) {
  if (pointAQILevelIndex === '1' || pointAQILevelIndex === '2') {
    exceedingTheStandardState = '1';
  } else if (global.businessDialog.dialogParmas.AQI > 100) {
    exceedingTheStandardState = '2';
  }
}
rootData.rootSocket.emit('message', {
  // id: guid(true, 'lego'), // 唯一索引
  type: 'showAirTraceDetail',
  room: global.socketRoom,
  data: [
    {
      shareCode: "showTraceDetail",
      runtimeValue: state.POINT_CODE,
      // 显示lego的溯源
      componentName: "waringForecastSyxqPanelComponent",
      componentParmas: {
        pointType: global.businessDialog.dialogParmas.POINT_TYPE || '',
        isShowAlarmFlag: global.businessDialog.dialogParmas.IS_BJ === '1',
        alarmTime: global.businessDialog.dialogParmas.AIRMONITORTIME || '',
        exceedingTheStandardState,
        primPollute: global.businessDialog.dialogParmas.PRIMPOLLUTE || '',
        polluteLevel: global.businessDialog.dialogParmas.POLLUTE_LAVEL || '',
        POINT_CODE: state.POINT_CODE,
        endTime: '',
      }
    }]
});

global.businessDialog.dialogName = '';
global.warningRightPointCode = state.POINT_CODE;
console.log(global.warningRightPointCode, 666789)
};
const ontabClick1734060040385 = (data) => {
// 设置变量值
state.menuSelect = data.name;
// 设置变量值
state.contentComponentName = data.name;
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getMenu: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.POINT_CODE","interfaceId":"365bdf06e6206428a083f238d4de166e"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.POINT_CODE,"interfaceId":"365bdf06e6206428a083f238d4de166e"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.POINT_CODE,"interfaceId":"365bdf06e6206428a083f238d4de166e"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMenu'] = res.data;
                
     
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  state.menuData = data.data.map(item => {
    return {
      name: item.NAME,
      label: item.LABEL,
      ...item
    }
  });
  state.menuSelect = state.menuData[0] && state.menuData[0].name || '';
  setContentComponentName(state.menuSelect);
  // 分割线显示
  state.dividerShow.divider1Show = state.menuData.length > 1;
  state.dividerShow.divider2Show = state.menuData.length > 2;
  state.dividerShow.divider3Show = state.menuData.length > 3;
  state.dividerShow.divider4Show = state.menuData.length > 4;
  let navTab = document.getElementById('t-tabs-3f14.634f07a5d');
  if (navTab && navTab.style) {
    navTab.style.height = state.menuData.length * 54 + 32 + 'px';
  }
} else {
  state.menuData = [];
  state.menuSelect = '';
  state.dividerShow.divider1Show = false;
  state.dividerShow.divider2Show = false;
  state.dividerShow.divider3Show = false;
  state.dividerShow.divider4Show = false;
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
 getBaseInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_TYPE":"","POINT_CODE":"state.POINT_CODE","interfaceId":"695a6bc133482fdb411d79f293380132"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_TYPE":"","POINT_CODE":state.POINT_CODE,"interfaceId":"695a6bc133482fdb411d79f293380132"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_TYPE":"","POINT_CODE":state.POINT_CODE,"interfaceId":"695a6bc133482fdb411d79f293380132"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     state.baseInfo = {
  "POINT_NAME": "--",
  "POINT_TYPE_NAME": "--",
  "POINT_STREET": "--",
  "POINT_ADDRESS": "--"
}
state.pageTitle = "--"
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  state.baseInfo = { ...data.data }
state.pageTitle = data.data.POINT_NAME || "--"
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.baseInfo = {
  "POINT_NAME": "--",
  "POINT_TYPE_NAME": "--",
  "POINT_STREET": "--",
  "POINT_ADDRESS": "--"
}
state.pageTitle = "--"
      reject(error);
    });
  });
},
              },
// 接口函数
 getHeaderInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"MONITORTIME":"state.timeValue","TIME_TYPE":"state.timeType","POINT_CODE":"state.POINT_CODE","interfaceId":"5f8e9ef373ff8dc7328c8d9b3585947a"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":state.timeValue,"TIME_TYPE":state.timeType,"POINT_CODE":state.POINT_CODE,"interfaceId":"5f8e9ef373ff8dc7328c8d9b3585947a"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"MONITORTIME":state.timeValue,"TIME_TYPE":state.timeType,"POINT_CODE":state.POINT_CODE,"interfaceId":"5f8e9ef373ff8dc7328c8d9b3585947a"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getHeaderInfo'] = res.data;
                
     state.headerInfo = {
  "PRIMPOLLUTE": "--",
  "POINT_TYPE_NAME": "--",
  "AQILEVELINDEX": "--",
  "AQI": "--"
};
state.firstPollution = "首要污染物：--"
state.AQI_LEVEL[0].state = "--";
state.AQI_LEVEL[0].stateBgColor = getAQIColor("");
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  state.headerInfo = data.data
  state.AQI_LEVEL[0].state = data.data.AQI || "--";
  state.AQI_LEVEL[0].stateBgColor = getAQIColor(data.data.AQILEVELINDEX || "");
  state.firstPollution = `首要污染物：${replacePollutionCharacter(state.headerInfo.PRIMPOLLUTE || "--")}`
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.headerInfo = {
  "PRIMPOLLUTE": "--",
  "POINT_TYPE_NAME": "--",
  "AQILEVELINDEX": "--",
  "AQI": "--"
};
state.AQI_LEVEL[0].state = "--";
state.AQI_LEVEL[0].stateBgColor = getAQIColor("");
state.firstPollution = "首要污染物：--"
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-lianshanPointPopup', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
/* 接收socket.io消息 */
const onSocketChange029f99a80a50471ab2fa = function (data) {
if(data.type === "updatePointSuccess"){
try{
// 设置变量值
state.contentComponentName = 'lianshanPopupBaseInfoComponent';
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange029f99a80a50471ab2fa);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange029f99a80a50471ab2fa);
});
/* 接收socket.io消息 */
const onSocketChangea6827413eaaa4424bde7 = function (data) {
if(data.type === "editPointInfo"){
try{
// 设置变量值
state.contentComponentName = 'lianshanPointEditComponent';
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangea6827413eaaa4424bde7);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangea6827413eaaa4424bde7);
});
onMounted(() => {
setPageScale('t-l-c-lianshanPointPopup', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tColx0x1x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x0.default, componentState.tColx0x1x0?.[state.screenSize]));

 const tRectx0x1x0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x1x0x0.default, componentState.tRectx0x1x0x0?.[state.screenSize]));

 const tTabsx0x1x0x1ComputedData = computed(() => _.merge({}, componentState.tTabsx0x1x0x1.default, componentState.tTabsx0x1x0x1?.[state.screenSize]));

 const tColx0x1x1ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1.default, componentState.tColx0x1x1?.[state.screenSize]));

 const tComponentx0x1x1x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1x1x0.default, componentState.tComponentx0x1x1x0?.[state.screenSize]));

 const tRectx0x1x1x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1x1x1.default, componentState.tRectx0x1x1x1?.[state.screenSize]));

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
tRectx0x0ComputedData,
tRowx0x1ComputedData,
tColx0x1x0ComputedData,
tRectx0x1x0x0ComputedData,
tTabsx0x1x0x1ComputedData,
tColx0x1x1ComputedData,
tComponentx0x1x1x0ComputedData,
tRectx0x1x1x1ComputedData,
ontabClick1734060040385,
};
},
}
</script>

<style scoped>
.t-l-c-lianshanPointPopup {
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
width: 1004px;
height: 678px;
background-color: rgba(0,0,0,0);
}
.t-l-c-lianshanPointPopup .lianshanPointPopup-t-rect-0-0 {
position: absolute !important;
top: -3px;
left: 0px;
width: 100%;
height: 100%;
pointer-events: auto;
}

.t-l-c-lianshanPointPopup .lianshanPointPopup-t-row-0-1 {
position: absolute !important;
top: 15px;
left: 20px;
width: calc(100% - 40px);
height: calc(100% - 30px);
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-lianshanPointPopup .lianshanPointPopup-t-col-0-1-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-lianshanPointPopup .lianshanPointPopup-t-rect-0-1-0-0 {
position: unset;
top: 0px;
left: 20px;
width: 100%;
height: 100%;
pointer-events: auto;
}

.t-l-c-lianshanPointPopup .lianshanPointPopup-t-tabs-0-1-0-1 {
position: unset;
top: 10px;
left: 20px;
width: 121px;
height: 120px;
pointer-events: auto;
}

.t-l-c-lianshanPointPopup .lianshanPointPopup-t-col-0-1-1 {
position: relative;
top: null;
left: null;
width: 100px;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-lianshanPointPopup .lianshanPointPopup-t-component-0-1-1-0 {
position: unset;
top: 116px;
left: 177px;
width: 94%;
height: 94%;
pointer-events: auto;
}

.t-l-c-lianshanPointPopup .lianshanPointPopup-t-rect-0-1-1-1 {
position: unset;
top: 101px;
left: 161px;
width: 99%;
height: 100%;
pointer-events: auto;
}
</style>
