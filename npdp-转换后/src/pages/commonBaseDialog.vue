<template>
  <div id="t-l-c-commonBaseDialog" class="t-l-c-commonBaseDialog" ><t-row id="t-row-66f1.68d208cd9" class="commonBaseDialog-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align"><t-table v-if="state.isShowList === true" id="t-table-2068.c70beb388" class="commonBaseDialog-t-table-0-1-0"  :stripe="tTablex0x1x0ComputedData.stripe" :border="tTablex0x1x0ComputedData.border" :auto-scroll="tTablex0x1x0ComputedData.autoScroll" :speed="tTablex0x1x0ComputedData.speed" :show-animation="tTablex0x1x0ComputedData.showAnimation" :animation-delay="tTablex0x1x0ComputedData.animationDelay" :animation-type="tTablex0x1x0ComputedData.animationType" :columns="tTablex0x1x0ComputedData.columns" :data="replaceCssVariables(filterData(state.list, componentPropBindingMap?.['t-table-2068.c70beb388']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x1x0ComputedData.defaultSort" :c-style="tTablex0x1x0ComputedData.cStyle" :show-summary="tTablex0x1x0ComputedData.showSummary" :highlight-current-row="tTablex0x1x0ComputedData.highlightCurrentRow"></t-table></t-row><t-row id="t-row-8c81.d120c493e" class="commonBaseDialog-t-row-0-2"  :c-style="tRowx0x2ComputedData.cStyle" :gutter="tRowx0x2ComputedData.gutter" :justify="tRowx0x2ComputedData.justify" :align="tRowx0x2ComputedData.align"><t-col id="t-col-65dd.c73c36e9c" class="commonBaseDialog-t-col-0-2-0"  :span="tColx0x2x0ComputedData.span" :offset="tColx0x2x0ComputedData.offset" :push="tColx0x2x0ComputedData.push" :pull="tColx0x2x0ComputedData.pull" :c-style="tColx0x2x0ComputedData.cStyle"><t-text id="t-text-5ff8.c1102f282" class="commonBaseDialog-t-text-0-2-0-0"  :label="replaceCssVariables(filterData(state.baseInfo.title, componentPropBindingMap?.['t-text-5ff8.c1102f282']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x2x0x0ComputedData.editable" :c-style="tTextx0x2x0x0ComputedData.cStyle"></t-text></t-col><t-col id="t-col-0834.d42778411" class="commonBaseDialog-t-col-0-2-1"  :span="tColx0x2x1ComputedData.span" :offset="tColx0x2x1ComputedData.offset" :push="tColx0x2x1ComputedData.push" :pull="tColx0x2x1ComputedData.pull" :c-style="tColx0x2x1ComputedData.cStyle"><t-rect id="t-rect-5b6e.efeba3c04" class="commonBaseDialog-t-rect-0-2-1-0"  :tip="tRectx0x2x1x0ComputedData.tip" :label="tRectx0x2x1x0ComputedData.label" :active="tRectx0x2x1x0ComputedData.active" :c-style="tRectx0x2x1x0ComputedData.cStyle" @click="onclick1777520148050"></t-rect></t-col><t-col id="t-col-705a.e244904ce" class="commonBaseDialog-t-col-0-2-2"  :span="tColx0x2x2ComputedData.span" :offset="tColx0x2x2ComputedData.offset" :push="tColx0x2x2ComputedData.push" :pull="tColx0x2x2ComputedData.pull" :c-style="tColx0x2x2ComputedData.cStyle"><t-rect id="t-rect-d149.ff1b6aeeb" class="commonBaseDialog-t-rect-0-2-2-0"  :tip="tRectx0x2x2x0ComputedData.tip" :label="tRectx0x2x2x0ComputedData.label" :active="tRectx0x2x2x0ComputedData.active" :c-style="tRectx0x2x2x0ComputedData.cStyle" @click="onclick1765703372140_4_0"></t-rect></t-col></t-row></div>
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
import { TCol, TRect, TRow, TTable, TText } from '@ths/design';

export default {
  components: {
    TCol,
    TRect,
    TRow,
    TTable,
    TText,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-6a04.b701e4938":{"attributeName":"tRowx0x0"},"t-row-66f1.68d208cd9":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-table-2068.c70beb388":{"attributeName":"tTablex0x1x0","stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"showAnimation":{"filters":[]},"animationDelay":{"filters":[]},"animationType":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]},"showSummary":{"filters":[]},"highlightCurrentRow":{"filters":[]}},"t-row-8c81.d120c493e":{"attributeName":"tRowx0x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-65dd.c73c36e9c":{"attributeName":"tColx0x2x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-5ff8.c1102f282":{"attributeName":"tTextx0x2x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-0834.d42778411":{"attributeName":"tColx0x2x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-5b6e.efeba3c04":{"attributeName":"tRectx0x2x1x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-col-705a.e244904ce":{"attributeName":"tColx0x2x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-d149.ff1b6aeeb":{"attributeName":"tRectx0x2x2x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   pageSizeCode: "min",
   isShowVideo: true,
   isShowList: true,
   list: [],
   interfaceParams: {"pointCode":""},
   interfaceId: "",
   baseInfo: {"title":"--","pointType":"","pointCode":"","PKID":""},
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
tRowx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"600px","display":"flex","justifyContent":"center","alignItems":"start","position":"unset","left":"0px","top":"40px","paddingTop":"10px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"600px","display":"flex","justifyContent":"center","alignItems":"start","position":"unset","left":"0px","top":"40px","paddingTop":"10px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTablex0x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"100%","position":"unset","left":"1360px","top":"118px","background":"rgba(0, 0, 0, 0)","fillType":"color","borderDirection":"all","borderLeft":"0px Solid rgba(0,0,0,1)","borderTop":"0px Solid rgba(0,0,0,1)","borderRight":"0px Solid rgba(0,0,0,1)","borderBottom":"0px Solid rgba(0,0,0,1)","border":"auto !important","animationName":"","max-width":"none","min-height":0,"max-height":"500px"},
            
            },
 default: { 
 
stripe:false,
border:false,
autoScroll:"null",
speed:6,
showAnimation:false,
animationDelay:0.1,
animationType:"animate__fadeInUp",
columns:[{"label":"","key":"key","align":"right","operationList":[],"stateList":[],"style":{"fontStyle":{"fontFamily":"思源","fontSize":"12px","lineHeight":"38px !important","letterSpacing":"0px","color":"var(--business-text-avianize)","borderColor":"red"},"cellStyle":{"background":"var(--business-show-bg15)"}},"infoStyle":{"fontStyle":{"fontFamily":"思源","fontSize":"12px","lineHeight":"38px !important","letterSpacing":"0px","color":"rgba(0, 0, 0, 0.9)","background":"rgba(0, 0, 0, 0)"}},"width":"auto","minWidth":"100px"},{"label":"","key":"value","align":"left","operationList":[],"stateList":[],"style":{"fontStyle":{"fontFamily":"思源","fontSize":"12px","lineHeight":"38px !important","letterSpacing":"0px","color":"var(--business-text-avianize)","borderColor":"red","background":"rgba(0, 0, 0, 0)"},"cellStyle":{"background":"var(--business-show-bg30)"}},"infoStyle":{"fontStyle":{"fontFamily":"思源","fontSize":"12px","lineHeight":"38px !important","letterSpacing":"0px","color":"rgba(0, 0, 0, 0.9)"}},"width":"auto","minWidth":"350px"}],
data:[{"key":"kekey2key2key2key2key2key2kkekey2key2key2key2key2key2key2key2y2kekey2key2key2key2key2key2key2key2y2ey2key2y2","value":"value1"},{"key":"key2","value":"value2"}],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","position":"unset","left":"1360px","top":"118px","background":"rgba(0, 0, 0, 0)","fillType":"color","borderDirection":"all","borderLeft":"0px Solid rgba(0,0,0,1)","borderTop":"0px Solid rgba(0,0,0,1)","borderRight":"0px Solid rgba(0,0,0,1)","borderBottom":"0px Solid rgba(0,0,0,1)","border":"auto !important","animationName":"","max-width":"none","min-height":0,"max-height":"500px"}},"headerCell":{"default":{"height":"34px","fontFamily":"思源","fontWeight":"700","fontSize":"12px","color":"rgba(0, 0, 0, 0.4)","textAlign":"center","border":"auto !important","borderDirection":"borderBottom","borderLeft":"unset","borderTop":"unset","borderRight":"unset","borderBottom":"1px Solid rgb(128, 128, 128)"}},"bodyCell":{"default":{"paddingLeft":"10px","paddingTop":"0px","paddingRight":"10px","paddingBottom":"0px","fontFamily":"思源","color":"var(--business-text-avianize)","textAlign":"center","fontSize":"12px","lineHeight":"38px !important","letterSpacing":"0px","border":"auto !important","borderDirection":"borderBottom","borderLeft":"unset","borderTop":"unset","borderRight":"unset","borderBottom":"1px Solid rgba(128, 128, 128, 0.5)","background":"rgba(255, 255, 255, 0)","fillType":"color"},"hover":{"background":"rgba(255, 255, 255, 0)","fillType":"color","borderRight":"unset","borderLeft":"unset","borderTop":"unset","borderBottom":"1px Solid rgba(128, 128, 128, 0.5)","borderDirection":"borderBottom"}},"stripeBodyCell":{"default":{"background":"rgba(255, 255, 255, 1)","fillType":"color","color":"var(--business-text-avianize)"}},"emptyText":{"default":{"color":"rgb(144, 147, 153)","background":"unset","backgroundClip":"unset","fontFamily":"思源","fontSize":"12px","lineHeight":"12px","letterSpacing":"0px"}},"emptyWrapper":{"default":{"display":"flex","justifyContent":"center","alignItems":"center"}},"headerSortBottom":{"default":{"borderTopColor":"rgba(224,234,255, 1)"},"active":{"borderTopColor":"rgba( 0,255,247, 1)"}},"headerSortTop":{"default":{"borderBottomColor":"rgba(224,234,255, 1)"},"active":{"borderBottomColor":"rgba( 0,255,247, 1)"}},"highlightRow":{"default":{"background":"rgba(229,251,255, 1)","fillType":"color"}},"footerCell":{"default":{"fontFamily":"思源","fontSize":"12px","lineHeight":"38px","letterSpacing":"0px","color":"var(--business-text-avianize)","background":"rgb(243, 243, 243)","fillType":"color"}},"totalWrapper":{"default":{"fontFamily":"思源","fontSize":"12px","lineHeight":"12px","letterSpacing":"0px","color":"rgba(0, 0, 0, 0.9)"}},"footerRowWrapper":{"default":{"height":"40px"}},"rowWrapper":{"default":{"background":"transparent","fillType":"color","borderLeft":"0px Solid rgba(0,0,0,1)","borderTop":"0px Solid rgba(0,0,0,1)","borderRight":"0px Solid rgba(0,0,0,1)","borderBottom":"0px Solid rgba(0,0,0,1)","borderDirection":"all","border":"auto !important","max-height":"517px"},"hover":{"background":"rgb(243,243,243)","fillType":"color","backgroundColor":"rgba(255, 255, 255, 0)"}},"headerRowWrapper":{"default":{"display":"none"}}},
showSummary:false,
highlightCurrentRow:false, 
 },
},
tRowx0x2: {
defaultStyle: {
            default: {"width":"100%","height":"40px","position":"unset","left":"0px","top":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":"","justifyContent":"center","alignItems":"center","backgroundColor":"var(--business-show-bg30)"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"40px","position":"unset","left":"0px","top":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":"","justifyContent":"center","alignItems":"center","backgroundColor":"var(--business-show-bg30)"}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tColx0x2x0: {
defaultStyle: {
            default: {"width":"100px","height":"40px","display":"flex","justifyContent":"left","alignItems":"center","paddingLeft":"20px"},
            
            },
 default: { 
 
span:20,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"40px","display":"flex","justifyContent":"left","alignItems":"center","paddingLeft":"20px"}}}, 
 },
},
tTextx0x2x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"537px","top":"-149px","backgroundImage":"url(assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":"","whiteSpace":"nowrap","overflow":"hidden","marginRight":"16px","textOverflow":"ellipsis","max-width":"620px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"537px","top":"-149px","backgroundImage":"url(assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":"","whiteSpace":"nowrap","overflow":"hidden","marginRight":"16px","textOverflow":"ellipsis","max-width":"620px"}}}, 
 },
},
tColx0x2x1: {
defaultStyle: {
            default: {"width":"100px","height":"40px","display":"flex","justifyContent":"right","alignItems":"center"},
            
            },
 default: { 
 
span:2,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"40px","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tRectx0x2x1x0: {
defaultStyle: {
            default: {"width":"24px","height":"24px","position":"unset","left":"919px","top":"9px","backgroundImage":"url(assets/images/2024-12-20/dc5f42d3abf748d58856ad3d324f0bba.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","position":"unset","left":"919px","top":"9px","backgroundImage":"url(assets/images/2024-12-20/dc5f42d3abf748d58856ad3d324f0bba.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer","animationName":""},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
tColx0x2x2: {
defaultStyle: {
            default: {"width":"100px","height":"40px","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:2,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"40px","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tRectx0x2x2x0: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"951px","top":"9px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"951px","top":"9px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
});
const initPage = () => {
// console.log(global.businessDialog.dialogParmas, 'test');
state.baseInfo.title = global.businessDialog.dialogParmas?.pointName || '-';
state.baseInfo.pointType = global.businessDialog.dialogParmas?.stationType || '';
state.baseInfo.PKID = global.businessDialog.dialogParmas?.pkid || '';
state.interfaceId = global.businessDialog.dialogParmas.interfaceId;
state.interfaceParams = global.businessDialog.dialogParmas.interfaceParams;
// 是否展示视频监控按钮
state.isShowVideo = global.businessDialog.dialogParmas.hasVideo;
if (state.interfaceId) {
  getDetailData();
} else {
  state.isShowList = true;
}


};
const handleClickQuery = () => {
// const pointInfo = global.businessDialog.dialogParmas;
// // 周边查询
// const pointLocation = [];
// pointLocation.push(parseFloat(pointInfo.LONGITUDE));
// pointLocation.push(parseFloat(pointInfo.LATITUDE));

// /* 发送webSocket消息 */
// /*if (rootData?.sendMessage) {
//   rootData?.sendMessage({
//     id: guid(true, 'lego'), // 唯一索引
//     type: "runInteractive", // 消息名称
//     data: [ // 消息内容
//       { shareCode: "POINT_LOACTION", runtimeValue: JSON.stringify(pointLocation) },
//       { shareCode: "POINT_LOACTION_NAME", runtimeValue: pointInfo.POINT_NAME }
//     ]
//   });
// }*/

// rootData.rootSocket.emit('message', {
//   type: 'showAirTraceDetail',
//   room: global.socketRoom,
//   data: [ // 消息内容
//     { shareCode: "POINT_LOACTION", runtimeValue: JSON.stringify(pointLocation) },
//     { shareCode: "POINT_LOACTION_NAME", runtimeValue: pointInfo.POINT_NAME }
//   ]
// });
// global.businessDialog.dialogName = '';
};
const handleClickTrace = () => {
// // 发送消息给地图
// rootData.rootSocket.emit('message', {
//   type: 'showAirSourceTrace',
//   room: global.socketRoom,
//   data: [ // 消息内容
//     {
//       shareCode: "showAirSourceTrace",
//       runtimeValue: state.POINT_CODE,
//       pointType: global.businessDialog.dialogParmas.POINT_TYPE || '',
//       isEnters: true,
//       // 小时或天时间，天的时候拼接上 00
//       traceTime: global.air.timeType === 'hour' ? global.air.timeValue : global.air.timeValue + ' 00',
//       layerName: global.businessDialog.dialogParmas.layerName,
//     }]
// });

// // POINT_CODE: '51018201001',
// //   alarmTime: '2021-03-23 17',
// //   aqiLevel: '2', // aqi级别 0：未获取数据 1： 优良 2：超标
// //   primPollute: 'PM10', // 首要污染物
// //   polluteLevel: '中度污染', // 污染级别
// // isShowAlarmFlag: false
// // endTime: '2021-03-23 17'
// // pointType: '4'

// /* 发送webSocket消息 */
// // 超标状态-默认0，AQILEVELINDEX = 1,2 等于1， 优良 AQI > 100 超标，等于2
// let exceedingTheStandardState = '0';
// // 点位aqi等级level值
// const pointAQILevelIndex = global.businessDialog.dialogParmas.AQI_LEVELINDEX || '';
// if (pointAQILevelIndex) {
//   if (pointAQILevelIndex === '1' || pointAQILevelIndex === '2') {
//     exceedingTheStandardState = '1';
//   } else if (global.businessDialog.dialogParmas.AQI > 100) {
//     exceedingTheStandardState = '2';
//   }
// }
// rootData.rootSocket.emit('message', {
//   // id: guid(true, 'lego'), // 唯一索引
//   type: 'showAirTraceDetail',
//   room: global.socketRoom,
//   data: [
//     {
//       shareCode: "showTraceDetail",
//       runtimeValue: state.POINT_CODE,
//       // 显示lego的溯源
//       componentName: "waringForecastSyxqPanelComponent",
//       componentParmas: {
//         pointType: global.businessDialog.dialogParmas.POINT_TYPE || '',
//         isShowAlarmFlag: global.businessDialog.dialogParmas.IS_BJ === '1',
//         alarmTime: global.businessDialog.dialogParmas.AIRMONITORTIME || '',
//         exceedingTheStandardState,
//         primPollute: global.businessDialog.dialogParmas.PRIMPOLLUTE || '',
//         polluteLevel: global.businessDialog.dialogParmas.POLLUTE_LAVEL || '',
//         POINT_CODE: state.POINT_CODE,
//         endTime: '',
//       }
//     }]
// });

// global.businessDialog.dialogName = '';
// global.warningRightPointCode = state.POINT_CODE;
// console.log(global.warningRightPointCode, 666789)
};
const getDetailData = () => {
const params = new URLSearchParams();
if (Object.prototype.toString.call(state.interfaceParams) === '[object Object]') {
  Object.entries(state.interfaceParams).forEach(([key, value]) => {
    params.append(key, value);
  });
};
// state.interfaceId = '7cbe5f98c2b0483e81cae0b4b7c4d2aa'
// 清空企业列表
state.list = [];
axios({
  method: 'post',
  url: `${global.foshanServiceBaseUrl}${global.serviceBasePath}&interfaceId=${state.interfaceId}`,
  data: params,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  // 注意：axios 默认不支持 crossDomain 配置项（那是 jQuery 的）
  // 跨域由浏览器和服务器 CORS 控制，只要服务器允许即可
})
  .then(response => {
    const data = response.data;
    console.log(data, '----9999---')
    if (response.status === 200 && Array.isArray(data?.data)) {
      state.list = data?.data.filter((val) => val.key).map((val) => ({
        key: val.key,
        value: handleNoVal(val.value)
      }));
    }
  })
  .catch(error => {
    console.log(error);
  }).finally(() => {
    setTimeout(() => {
      // 结束列表加载状态
      state.isShowList = true;
    })
  });

};
const openVedioDialog = () => {
global.videoMonitorDialogGlobalVariables.pointName = state.baseInfo.title;
global.videoMonitorDialogGlobalVariables.pointType = state.baseInfo?.pointType;
global.videoMonitorDialogGlobalVariables.PKID = state.baseInfo?.PKID;

rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'createDialog',  // 消息类型名称
    data: {
      params: {
        'title': global.videoMonitorDialogGlobalVariables.pointName,
        'maxWidth': '1200px',
        'maxHeight': '480px',
        'minWidth': '1000px',
        'minHeight': '480px',
        'contentName': 'videoMonitoringComponent'
      }
    }
  }
);
};
const changePageSize = () => {
// 定义尺寸配置变量
const dialogSizeConfig = {
  max: {
    width: 1000,
    height: 680,
    tableHeight: 600,
  },
  min: {
    width: 600,
    height: 480,
    tableHeight: 400,
  }
};

// 弹窗id
const dialogSelector = '.t-l-c-commonBaseDialog';

// 表格id
const dialogTableSelector = '.t-row-66f1\\.68d208cd9';

// 获取对话框元素
const dialog = document.querySelector(dialogSelector);

// 获取表格元素
const dialogTable = document.querySelector(dialogTableSelector);

// 弹窗必须存在
if (!dialog) {
  console.error(`未找到对话框元素: ${dialogSelector}`);
  return;
}

// 确保页面尺寸代码存在
if (!state.pageSizeCode) {
  console.warn('state.pageSizeCode 未定义，使用默认尺寸');
  state.pageSizeCode = 'max'; // 默认值
}

// 获取当前尺寸配置
const currentSize = dialogSizeConfig[state.pageSizeCode];

if (!currentSize) {
  console.error(`无效的页面尺寸代码: ${state.pageSizeCode}，可用值: ${Object.keys(dialogSizeConfig).join(', ')}`);
  return;
}

// 计算居中位置
const centerLeft = `calc(50% - ${currentSize.width / 2}px)`;
const centerTop = `calc(50% - ${currentSize.height / 2}px)`;

// 设置对话框样式
dialog.style.width = `${currentSize.width}px`;
dialog.style.height = `${currentSize.height}px`;
// dialogTable.style.height = `${currentSize.tableHeight}px`;
dialog.style.minWidth = `${currentSize.width}px`;
dialog.style.minHeight = `${currentSize.height}px`;

// 添加居中定位样式
dialog.style.position = 'fixed'; // 确保使用fixed定位
dialog.style.left = centerLeft;
dialog.style.top = centerTop;
dialog.style.transform = 'translate(0, 0)'; // 重置transform，确保使用left/top定位

// 切换页面尺寸代码
if (state.pageSizeCode === 'max') {
  state.pageSizeCode = 'min';
} else if (state.pageSizeCode === 'min') {
  state.pageSizeCode = 'max';
}

console.log(`对话框 ${dialogSelector} 尺寸已设置为: ${currentSize.width}px x ${currentSize.height}px`);
console.log(`定位: left=${centerLeft}, top=${centerTop}`);
console.log(`下次尺寸将切换为: ${state.pageSizeCode}`);
};
const onclick1765703372140_4_0 = () => {
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
const onclick1765703372141_8_0 = () => {
// 执行自定义方法
openVedioDialog();
};
const onclick1777520148050 = () => {
// 执行自定义方法
changePageSize();
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-commonBaseDialog', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPage();
onMounted(() => {
setPageScale('t-l-c-commonBaseDialog', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tTablex0x1x0ComputedData = computed(() => _.merge({}, componentState.tTablex0x1x0.default, componentState.tTablex0x1x0?.[state.screenSize]));

 const tRowx0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x2.default, componentState.tRowx0x2?.[state.screenSize]));

 const tColx0x2x0ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0.default, componentState.tColx0x2x0?.[state.screenSize]));

 const tTextx0x2x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x2x0x0.default, componentState.tTextx0x2x0x0?.[state.screenSize]));

 const tColx0x2x1ComputedData = computed(() => _.merge({}, componentState.tColx0x2x1.default, componentState.tColx0x2x1?.[state.screenSize]));

 const tRectx0x2x1x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x2x1x0.default, componentState.tRectx0x2x1x0?.[state.screenSize]));

 const tColx0x2x2ComputedData = computed(() => _.merge({}, componentState.tColx0x2x2.default, componentState.tColx0x2x2?.[state.screenSize]));

 const tRectx0x2x2x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x2x2x0.default, componentState.tRectx0x2x2x0?.[state.screenSize]));

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
tRowx0x1ComputedData,
tTablex0x1x0ComputedData,
tRowx0x2ComputedData,
tColx0x2x0ComputedData,
tTextx0x2x0x0ComputedData,
tColx0x2x1ComputedData,
tRectx0x2x1x0ComputedData,
tColx0x2x2ComputedData,
tRectx0x2x2x0ComputedData,
onclick1777520148050,
onclick1765703372140_4_0,
};
},
}
</script>

<style scoped>
.t-l-c-commonBaseDialog {
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
position: Relative;
z-index: 1;
filter: ;
width: 1000px;
height: 680px;
left: calc(50% - 532px);
top: calc(50% - 356px);
border-radius: 12px 12px 0 0;
background-color: var(--business-dialog-bg);
}
.t-l-c-commonBaseDialog .commonBaseDialog-t-row-0-1 {
position: absolute !important;
top: 40px;
left: 0px;
width: 100%;
height: 600px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: start;
padding-top: 10px;
}

.t-l-c-commonBaseDialog .commonBaseDialog-t-table-0-1-0 {
position: unset;
top: 118px;
left: 1360px;
width: 100%;
height: 100%;
pointer-events: auto;
}

.t-l-c-commonBaseDialog .commonBaseDialog-t-row-0-2 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 40px;
pointer-events: auto;
white-space: nowrap;
text-overflow: ellipsis;
animation-name: ;
justify-content: center;
align-items: center;
background-color: var(--business-show-bg30);
}

.t-l-c-commonBaseDialog .commonBaseDialog-t-col-0-2-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 40px;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
padding-left: 20px;
}

.t-l-c-commonBaseDialog .commonBaseDialog-t-text-0-2-0-0 {
position: unset;
top: -149px;
left: 537px;
width: auto;
height: 19px;
pointer-events: auto;
}

.t-l-c-commonBaseDialog .commonBaseDialog-t-col-0-2-1 {
position: relative;
top: null;
left: null;
width: 100px;
height: 40px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
}

.t-l-c-commonBaseDialog .commonBaseDialog-t-rect-0-2-1-0 {
position: unset;
top: 9px;
left: 919px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-commonBaseDialog .commonBaseDialog-t-col-0-2-2 {
position: relative;
top: null;
left: null;
width: 100px;
height: 40px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-commonBaseDialog .commonBaseDialog-t-rect-0-2-2-0 {
position: unset;
top: 9px;
left: 951px;
width: 24px;
height: 24px;
pointer-events: auto;
}
</style>
