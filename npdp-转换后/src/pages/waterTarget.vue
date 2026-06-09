<template>
  <div id="t-l-c-waterTarget" class="t-l-c-waterTarget" ><t-row id="t-row-3469.ce84b849d" class="waterTarget-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align"><t-row id="t-row-5fd8.0b9225732" class="waterTarget-t-row-0-0-0"  :c-style="tRowx0x0x0ComputedData.cStyle" :gutter="tRowx0x0x0ComputedData.gutter" :justify="tRowx0x0x0ComputedData.justify" :align="tRowx0x0x0ComputedData.align"><t-tabs id="t-tabs-fe86.33f9a1fb7" class="waterTarget-t-tabs-0-0-0-0"  :alias="tTabsx0x0x0x0ComputedData.alias" :data="replaceCssVariables(filterData(state.list, componentPropBindingMap?.['t-tabs-fe86.33f9a1fb7']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :model-value="tTabsx0x0x0x0ComputedData.model-value" :tab-position-extend="tTabsx0x0x0x0ComputedData.tabPositionExtend" :stretch="tTabsx0x0x0x0ComputedData.stretch" :c-style="tTabsx0x0x0x0ComputedData.cStyle" :active-tab="replaceCssVariables(filterData(state.selected, componentPropBindingMap?.['t-tabs-fe86.33f9a1fb7']['activeTab'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @tab-click="ontabClick1739499520580"></t-tabs></t-row></t-row><t-rect v-if="state.showContent === false" id="t-rect-43f8.f6a54b801" class="waterTarget-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle" @click="onclick1739432635046_0_0"></t-rect><t-rect v-if="state.showContent === true" id="t-rect-a122.67a8288a4" class="waterTarget-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle" @click="onclick1734686591589"></t-rect></div>
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
import { TRect, TRow, TTabs } from '@ths/design';

export default {
  components: {
    TRect,
    TRow,
    TTabs,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-3469.ce84b849d":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-row-5fd8.0b9225732":{"attributeName":"tRowx0x0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-tabs-fe86.33f9a1fb7":{"attributeName":"tTabsx0x0x0x0","alias":{"filters":[]},"data":{"filters":[]},"model-value":{"filters":[]},"tabPositionExtend":{"filters":[]},"stretch":{"filters":[]},"cStyle":{"filters":[]},"activeTab":{"filters":[]}},"t-rect-43f8.f6a54b801":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-a122.67a8288a4":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   selected: "",
   list: [],
   showContent: false,
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
            default: {"width":"794px","height":"55px","position":"absolute","left":"0","top":"0px","pointerEvents":"none","right":"0px","paddingLeft":"0px","paddingRight":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"794px","height":"55px","position":"absolute","left":"0","top":"0px","pointerEvents":"none","right":"0px","paddingLeft":"0px","paddingRight":"0px"}}},
gutter:0,
justify:"end",
align:"middle", 
 },
},
tRowx0x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"54px","position":"unset","left":"99px","top":"-1px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","backgroundColor":"var(--area-slope-bg)","paddingTop":"10px","paddingBottom":"10px","paddingLeft":"10px","paddingRight":"61px","opacity":"0","visibility":"hidden","transition":"all 0.3s"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"54px","position":"unset","left":"99px","top":"-1px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","backgroundColor":"var(--area-slope-bg)","paddingTop":"10px","paddingBottom":"10px","paddingLeft":"10px","paddingRight":"61px","opacity":"0","visibility":"hidden","transition":"all 0.3s"}}},
gutter:0,
justify:"end",
align:"middle", 
 },
},
tTabsx0x0x0x0: {
defaultStyle: {
            default: {"position":"unset","width":"auto","height":"34px","backgroundColor":"","fontSize":"14px","lineHeight":"26px","animationName":"","paddingRight":"0px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","top":"10px","left":"13px","opacity":"0","visibility":"hidden","right":"65px","textAlign":"right","transition":"all 0.3s"},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[],
'model-value':"work",
tabPositionExtend:"top-start",
stretch:true,
cStyle:{"wrapper":{"default":{"position":"unset","width":"auto","height":"34px","backgroundColor":"","fontSize":"14px","lineHeight":"26px","animationName":"","paddingRight":"0px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","top":"10px","left":"13px","opacity":"0","visibility":"hidden","right":"65px","textAlign":"right","transition":"all 0.3s"}},"itemWrapper":{"default":{"height":"34px","width":"auto","lineHeight":"32px","fontSize":"14px","color":"var(--t-switch-text)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","backgroundColor":"","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","fontWeight":"500","paddingRight":"0px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingTop":"0px","paddingLeft":"0px","marginRight":"4px"},"active":{"fontSize":"14px","color":"var(--targer-font-active)","backgroundColor":"rgba(37, 156, 224, 0)","borderLeft":"1px solid var(--t-white)","borderTop":"1px solid var(--t-white)","borderRight":"1px solid var(--t-white)","borderBottom":"1px solid var(--t-white)","background":"var(--targer-btn-active-bg)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","box-shadow":"var(--targer-btn-active-shadow) 0px 0px 11px 0px inset","backdropFilter":"blur(0px)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","height":"34px","lineHeight":"32px","paddingTop":"0px","width":"auto","paddingLeft":"0px","paddingRight":"0px","marginRight":"4px"},"hover":{"fontSize":"14px","color":"var(--targer-font-active)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","height":"34px","borderLeft":"1px solid var(--t-white)","borderTop":"1px solid var(--t-white)","borderRight":"1px solid var(--t-white)","borderBottom":"1px solid var(--t-white)","background":"var(--targer-btn-active-bg)","box-shadow":"var(--targer-btn-active-shadow) 0px 0px 11px 0px inset","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","lineHeight":"32px","paddingTop":"0px","paddingLeft":"0px","paddingRight":"0px","marginRight":"4px"}},"itemActiveBorder":{"active":{"backgroundColor":"rgba(255, 0, 0, 0)"},"default":{"borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"rgba(222, 233, 14, 0)"}},"itemLabel":{"default":{"marginRight":"0px","paddingRight":"4px","fontSize":"var(--business-text-size-14)","paddingLeft":"4px"},"hover":{"paddingLeft":"4px","paddingRight":"4px"},"active":{"paddingLeft":"4px","paddingRight":"4px"}}},
activeTab:"", 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"39px","height":"34px","top":"10px","backgroundImage":"var(--business-target-unfold-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","cursor":"pointer","animationName":"","right":"20px","position":"unset !important","left":"unset !important","transition":"all 0.3s"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"39px","height":"34px","top":"10px","backgroundImage":"var(--business-target-unfold-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","cursor":"pointer","animationName":"","right":"20px","position":"unset !important","left":"unset !important","transition":"all 0.3s"},"hover":{"backgroundImage":"var(--business-target-fold-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"39px","height":"34px","top":"10px","backgroundImage":"var(--business-target-fold-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","cursor":"pointer","animationName":"","right":"20px","position":"relative !important","left":"unset !important","transition":"all 0.3s"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"39px","height":"34px","top":"10px","backgroundImage":"var(--business-target-fold-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","cursor":"pointer","animationName":"","right":"20px","position":"relative !important","left":"unset !important","transition":"all 0.3s"},"hover":{"backgroundImage":"var(--business-target-fold-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}}}, 
 },
},
});
const setContentVisible = () => {
state.showContent = !state.showContent;
changeVisible(state.list.length, state.showContent)
};
const onSocket = (data) => {
/**
 * 监听地图消息
 */
if (Array.isArray(data) && data.length) {
  const msg = data[0];
  // 若地图加载完成
  if (msg.shareCode === "indicatorToggle") {
    const threeSub = convertCharacter('下标')[0].split(' ')[3] || '3';
    const options = {
      "水功能区": [
        { "name": "category", "label": "类别", "onclickUrl": "{'waterLevelType':'category'}" },
        { "name": "isstandards", "label": "达/超", "onclickUrl": "{'waterLevelType':'standard'}" }
      ], 
      "实时监控-日数据": [
        { "name": "waterlevel", "label": "类别", "onclickUrl": "{'waterLevelType':'waterLevel'}" },
        { "name": "isstandards", "label": "达/超", "onclickUrl": "{'waterLevelType':'standard'}" },
        { "name": "change", "label": "环比", "onclickUrl": "{'waterLevelType':'change'}" },
        {
          "name": "pollute_W01001",
          "label": "pH",
          "onclickUrl": "{'waterLevelType':'pollute','polluteCode':'W01001'}"
        },
        {
          "name": "pollute_W01009",
          "label": "DO",
          "onclickUrl": "{'waterLevelType':'pollute','polluteCode':'W01009'}"
        },
        {
          "name": "pollute_W01019",
          "label": "IMn",
          "onclickUrl": "{'waterLevelType':'pollute','polluteCode':'W01019'}"
        },
        {
          "name": "pollute_W21003",
          "label": `NH${threeSub}-N`,
          "onclickUrl": "{'waterLevelType':'pollute','polluteCode':'W21003'}"
        },
        {
          "name": "pollute_W21011",
          "label": "TP",
          "onclickUrl": "{'waterLevelType':'pollute','polluteCode':'W21011'}"
        }
      ],
      "实时监控-小时数据": [
        { "name": "waterlevel", "label": "类别", "onclickUrl": "{'waterLevelType':'waterLevel'}" },
        { "name": "isstandards", "label": "达/超", "onclickUrl": "{'waterLevelType':'standard'}" },
        {
          "name": "pollute_W01001",
          "label": "pH",
          "onclickUrl": "{'waterLevelType':'pollute','polluteCode':'W01001'}"
        },
        {
          "name": "pollute_W01009",
          "label": "DO",
          "onclickUrl": "{'waterLevelType':'pollute','polluteCode':'W01009'}"
        },
        {
          "name": "pollute_W01019",
          "label": "IMn",
          "onclickUrl": "{'waterLevelType':'pollute','polluteCode':'W01019'}"
        },
        {
          "name": "pollute_W21003",
          "label": `NH${threeSub}-N`,
          "onclickUrl": "{'waterLevelType':'pollute','polluteCode':'W21003'}"
        },
        {
          "name": "pollute_W21011",
          "label": "TP",
          "onclickUrl": "{'waterLevelType':'pollute','polluteCode':'W21011'}"
        }
      ],
      "地表水": [
        { "name": "waterlevel", "label": "类别", "onclickUrl": "{'waterLevelType':'waterLevel'}" },
        { "name": "isstandards", "label": "达/超", "onclickUrl": "{'waterLevelType':'standard'}" },
        { "name": "change", "label": "环比", "onclickUrl": "{'waterLevelType':'change'}" },
        {
          "name": "pollute_W01001",
          "label": "pH",
          "onclickUrl": "{'waterLevelType':'pollute','polluteCode':'W01001'}"
        },
        {
          "name": "pollute_W01009",
          "label": "DO",
          "onclickUrl": "{'waterLevelType':'pollute','polluteCode':'W01009'}"
        },
        {
          "name": "pollute_W01019",
          "label": "IMn",
          "onclickUrl": "{'waterLevelType':'pollute','polluteCode':'W01019'}"
        },
        {
          "name": "pollute_W21003",
          "label": `NH${threeSub}-N`,
          "onclickUrl": "{'waterLevelType':'pollute','polluteCode':'W21003'}"
        },
        {
          "name": "pollute_W21011",
          "label": "TP",
          "onclickUrl": "{'waterLevelType':'pollute','polluteCode':'W21011'}"
        }
      ],
    }
    state.list = options[msg.runtimeValue] || [];
    setTimeout(() => {
      const len = state.list.length
      changeVisible(len, state.showContent)
      if (len) {
        handleClickItem(state.list[0])
      }
    }, 0)
  }
}
};
const changeVisible = (length,val) => {
if (!length) {
  // 设置背景图显示隐藏
  setDomVisible('t-row-5fd8.0b9225732', false);
  // 设置指标组件显示隐藏
  setDomVisible('t-tabs-fe86.33f9a1fb7', false);
  // 设置按钮显示隐藏
  setDomVisible('t-rect-43f8.f6a54b801', false);
  // 设置按钮显示隐藏
  setDomVisible('t-rect-a122.67a8288a4', false);
  return;
} else {
  // 设置背景图显示隐藏
  setDomVisible('t-row-5fd8.0b9225732', val);
  // 设置指标组件显示隐藏
  setDomVisible('t-tabs-fe86.33f9a1fb7', val);
  // 设置按钮显示隐藏
  setDomVisible('t-rect-43f8.f6a54b801', true);
  // 设置按钮显示隐藏
  setDomVisible('t-rect-a122.67a8288a4', true);
}

};
const handleClickItem = (item) => {
state.selected = item.name
setTimeout(() => {
  changeVisible(state.list.length, state.showContent)
}, 0)
if (item.onclickUrl) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: "runInteractive",
    data: [{
      shareCode: "gis_indicator",
      runtimeValue: item.onclickUrl
    }]
  });
}
};
const ontabClick1739499520580 = (data) => {
// 执行自定义方法
handleClickItem(data);
};
const onclick1739432635046_0_0 = () => {
// 执行自定义方法
setContentVisible();
};
const onclick1734686591589 = () => {
// 执行自定义方法
setContentVisible();
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-waterTarget', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
/* 接收socket.io消息 */
const onSocketChangef64676ad773c4b7a9329 = function (data) {
if(data.type === "indicatorToggleMsg"){
try{
// 执行自定义方法
onSocket(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangef64676ad773c4b7a9329);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangef64676ad773c4b7a9329);
});
// 执行自定义方法
changeVisible(0,false);
onMounted(() => {
setPageScale('t-l-c-waterTarget', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tRowx0x0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0x0.default, componentState.tRowx0x0x0?.[state.screenSize]));

 const tTabsx0x0x0x0ComputedData = computed(() => _.merge({}, componentState.tTabsx0x0x0x0.default, componentState.tTabsx0x0x0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

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
tRowx0x0x0ComputedData,
tTabsx0x0x0x0ComputedData,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
ontabClick1739499520580,
onclick1739432635046_0_0,
onclick1734686591589,
};
},
}
</script>

<style scoped>
.t-l-c-waterTarget {
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
width: 555px;
height: 54px;
background-color: rgba(0,0,0,0);
}
.t-l-c-waterTarget .waterTarget-t-row-0-0 {
position: absolute !important;
top: 0px;
left: 0;
width: 794px;
height: 55px;
pointer-events: none;
right: 0px;
padding-left: 0px;
padding-right: 0px;
}

.t-l-c-waterTarget .waterTarget-t-row-0-0-0 {
position: unset;
top: -1px;
left: 99px;
width: auto;
height: 54px;
pointer-events: auto;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
background-color: var(--area-slope-bg);
padding-top: 10px;
padding-bottom: 10px;
padding-left: 10px;
padding-right: 61px;
opacity: 0;
visibility: hidden;
transition: all 0.3s;
}

.t-l-c-waterTarget .waterTarget-t-tabs-0-0-0-0 {
position: unset;
top: 10px;
left: 13px;
width: auto;
height: 34px;
pointer-events: auto;
}

.t-l-c-waterTarget .waterTarget-t-rect-0-1 {
position: absolute !important;
top: 10px;
left: 504px;
width: 39px;
height: 34px;
pointer-events: auto;
}

.t-l-c-waterTarget .waterTarget-t-rect-0-2 {
position: absolute !important;
top: 10px;
width: 39px;
height: 34px;
pointer-events: auto;
}
</style>
