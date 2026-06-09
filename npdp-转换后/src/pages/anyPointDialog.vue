<template>
  <div id="t-l-c-anyPointDialog" class="t-l-c-anyPointDialog" ><t-rect id="t-rect-09e8.3b71afa9a" class="anyPointDialog-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-text id="t-text-4258.da420a316" class="anyPointDialog-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle" @click="onclick1740968312372"></t-text><t-rect id="t-rect-afae.576bf09ee" class="anyPointDialog-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle"></t-rect><t-rect id="t-rect-26fc.42aa488dd" class="anyPointDialog-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1734493226123"></t-rect><t-text id="t-text-1101.946bfcb11" class="anyPointDialog-t-text-0-5"  :label="state.address" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle" :show-title="tTextx0x5ComputedData.showTitle"></t-text><t-text id="t-text-85e6.8e2ae94e5" class="anyPointDialog-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle"></t-text><t-text id="t-text-5c90.1906820e5" class="anyPointDialog-t-text-0-7"  :label="state.longitude" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle" :show-title="tTextx0x7ComputedData.showTitle"></t-text><t-text id="t-text-b2de.98769e346" class="anyPointDialog-t-text-0-8"  :label="tTextx0x8ComputedData.label" :editable="tTextx0x8ComputedData.editable" :c-style="tTextx0x8ComputedData.cStyle"></t-text><t-text id="t-text-5b18.b811a1a6b" class="anyPointDialog-t-text-0-9"  :label="state.latitude" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle" :show-title="tTextx0x9ComputedData.showTitle"></t-text><t-text id="t-text-a3dd.58079667c" class="anyPointDialog-t-text-0-10"  :label="tTextx0x10ComputedData.label" :editable="tTextx0x10ComputedData.editable" :c-style="tTextx0x10ComputedData.cStyle"></t-text></div>
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
import { TRect, TText } from '@ths/design';

export default {
  components: {
    TRect,
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
let state = reactive({
   screenSize: "",
   longitude: "--",
   latitude: "--",
   address: "--",
   POINT_CODE: "",
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
            default: {"width":"400px","height":"236px","position":"unset","left":"725px","top":"337px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"400px","height":"236px","position":"unset","left":"725px","top":"337px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"90px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1020px","top":"534px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-20/4b0f0f4a90cb400398be94b58b52cf90.svg)","backgroundPosition":"22px 50%","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"溯源",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1020px","top":"534px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-20/4b0f0f4a90cb400398be94b58b52cf90.svg)","backgroundPosition":"22px 50%","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"400px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"725px","top":"337px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"400px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"725px","top":"337px","animationName":""}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1087px","top":"348px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1087px","top":"348px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"369px","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"404px","left":"741px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"369px","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"404px","left":"741px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis"}}},
showTitle:true, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"59px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"444px","left":"741px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""},
            
            },
 default: { 
 
label:"经度：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"59px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"444px","left":"741px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""}}}, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"310px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"444px","left":"800px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"310px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"444px","left":"800px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""}}},
showTitle:true, 
 },
},
tTextx0x8: {
defaultStyle: {
            default: {"width":"59px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"484px","left":"741px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""},
            
            },
 default: { 
 
label:"纬度：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"59px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"484px","left":"741px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""}}}, 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"width":"310px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"484px","left":"800px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"310px","height":"18px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","lineHeight":"18px","top":"484px","left":"800px","position":"unset","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""}}},
showTitle:true, 
 },
},
tTextx0x10: {
defaultStyle: {
            default: {"width":"125px","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"735px","top":"351px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"38px","fontWeight":"700","animationName":"","whiteSpace":"nowrap","overflow":"hidden","marginRight":"16px","textOverflow":"ellipsis","max-width":"620px"},
            
            },
 default: { 
 
label:"点位标记",
editable:false,
cStyle:{"wrapper":{"default":{"width":"125px","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"735px","top":"351px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"38px","fontWeight":"700","animationName":"","whiteSpace":"nowrap","overflow":"hidden","marginRight":"16px","textOverflow":"ellipsis","max-width":"620px"}}}, 
 },
},
});
const handleTrace = () => {
// 发送消息给地图
rootData.rootSocket.emit('message', {
  type: 'showAirSourceTrace',
  room: global.socketRoom,
  data: [{
    shareCode: "showAirSourceTrace",
    runtimeValue: global.businessDialog.dialogParmas?.pointCode || "",
    pointType: '',
    isEnters: true,
    traceTime: global.air.timeType === 'hour' ? global.air.timeValue : global.air.timeValue + ' 00',
    layerName: global.businessDialog.dialogParmas?.layerName || "",
  }]
});

/* 发送webSocket消息 */
rootData.rootSocket.emit('message', {
  type: 'showAirTraceDetail',
  room: global.socketRoom,
  data: [
    {
      shareCode: "showTraceDetail",
      runtimeValue: global.businessDialog.dialogParmas?.pointCode || "",
      componentName: "airTraceAnyPointComponent",
      componentParmas: {
        pointType: '',
        isShowAlarmFlag: "0",
        alarmTime: global.air.timeType === 'hour' ? global.air.timeValue : global.air.timeValue + ' 00',
        POINT_CODE: global.businessDialog.dialogParmas?.pointCode || "",
        endTime: '',
      }
    }]
});

global.businessDialog.dialogName = '';
};
const init = () => {
state.longitude = global.businessDialog.dialogParmas?.pointValue[0] || "";
state.latitude = global.businessDialog.dialogParmas?.pointValue[1] || "";
state.address = global.businessDialog.dialogParmas?.regionName || "";
};
const onclick1734493226123 = () => {
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
const onclick1740968312372 = () => {
// 执行自定义方法
handleTrace();
};
// 接口函数
const getHeaderInfo = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":state.timeValue,"TIME_TYPE":state.timeType,"POINT_CODE":state.POINT_CODE,"interfaceId":"5f8e9ef373ff8dc7328c8d9b3585947a"},}).then((res) => {
     // 成功的操作
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
};
// 接口函数
const getMenu = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.POINT_CODE,"interfaceId":"365bdf06e6206428a083f238d4de166e"},}).then((res) => {
     // 成功的操作
     
console.log(res);
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  state.menuData = data.data.map(item => {
    return {
      name: item.NAME,
      label: item.LABEL,
      ...item
    }
  });
  state.menuSelect = state.menuData[0] && state.menuData[0].NAME || '';
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
};
// 接口函数
const getBaseInfo = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.POINT_CODE,"interfaceId":"695a6bc133482fdb411d79f293380132"},}).then((res) => {
     // 成功的操作
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
};
 function handleWindowResize() {
                            setPageScale('t-l-c-anyPointDialog', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-anyPointDialog', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
init();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tTextx0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x8.default, componentState.tTextx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tTextx0x10ComputedData = computed(() => _.merge({}, componentState.tTextx0x10.default, componentState.tTextx0x10?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tTextx0x1ComputedData,
tRectx0x2ComputedData,
tRectx0x3ComputedData,
tTextx0x5ComputedData,
tTextx0x6ComputedData,
tTextx0x7ComputedData,
tTextx0x8ComputedData,
tTextx0x9ComputedData,
tTextx0x10ComputedData,
onclick1740968312372,
onclick1734493226123,
};
},
}
</script>

<style scoped>
.t-l-c-anyPointDialog {
position: relative;
overflow: hidden;
--theme-color: var(--t-brand8);
--theme-color-opacity-10: rgba(var(--t-brand8), .1);
--theme-color-opacity-15: rgba(var(--t-brand8), .15);
--theme-color-opacity-40: rgba(var(--t-brand8), .4);
--theme-color-opacity-60: rgba(var(--t-brand8), .6);
--theme-color-opacity-80: rgba(var(--t-brand8), .8);
--theme-color-opacity-90: rgba(var(--t-brand8), .9);
pointer-events: none;
position: Static;
z-index: 1;
filter: ;
width: 1920px;
height: 1080px;
background-color: rgba(0,0,0,0);
}
.t-l-c-anyPointDialog .anyPointDialog-t-rect-0-0 {
position: absolute !important;
top: 337px;
left: 725px;
width: 400px;
height: 236px;
pointer-events: auto;
}

.t-l-c-anyPointDialog .anyPointDialog-t-text-0-1 {
position: absolute !important;
top: 534px;
left: 1020px;
width: 90px;
height: 28px;
pointer-events: auto;
}

.t-l-c-anyPointDialog .anyPointDialog-t-rect-0-2 {
position: absolute !important;
top: 337px;
left: 725px;
width: 400px;
height: 47px;
pointer-events: auto;
}

.t-l-c-anyPointDialog .anyPointDialog-t-rect-0-3 {
position: absolute !important;
top: 348px;
left: 1087px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-anyPointDialog .anyPointDialog-t-text-0-5 {
position: absolute !important;
top: 404px;
left: 741px;
width: 369px;
height: 19px;
pointer-events: auto;
}

.t-l-c-anyPointDialog .anyPointDialog-t-text-0-6 {
position: absolute !important;
top: 444px;
left: 741px;
width: 59px;
height: 18px;
pointer-events: auto;
}

.t-l-c-anyPointDialog .anyPointDialog-t-text-0-7 {
position: absolute !important;
top: 444px;
left: 800px;
width: 310px;
height: 18px;
pointer-events: auto;
}

.t-l-c-anyPointDialog .anyPointDialog-t-text-0-8 {
position: absolute !important;
top: 484px;
left: 741px;
width: 59px;
height: 18px;
pointer-events: auto;
}

.t-l-c-anyPointDialog .anyPointDialog-t-text-0-9 {
position: absolute !important;
top: 484px;
left: 800px;
width: 310px;
height: 18px;
pointer-events: auto;
}

.t-l-c-anyPointDialog .anyPointDialog-t-text-0-10 {
position: absolute !important;
top: 351px;
left: 735px;
width: 125px;
height: 19px;
pointer-events: auto;
}
</style>
