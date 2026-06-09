<template>
  <div id="t-l-c-titleFirstBg" class="t-l-c-titleFirstBg" ><t-rect id="t-rect-0d2f.b3b3d2e0a" class="titleFirstBg-t-rect-0-8"  :tip="tRectx0x8ComputedData.tip" :label="tRectx0x8ComputedData.label" :active="tRectx0x8ComputedData.active" :c-style="tRectx0x8ComputedData.cStyle"></t-rect><t-rect id="t-rect-4c89.2b0341ed7" class="titleFirstBg-t-rect-0-9"  :tip="tRectx0x9ComputedData.tip" :label="tRectx0x9ComputedData.label" :active="tRectx0x9ComputedData.active" :c-style="tRectx0x9ComputedData.cStyle"></t-rect><t-rect id="t-rect-91fa.aad983361" class="titleFirstBg-t-rect-0-10"  :tip="tRectx0x10ComputedData.tip" :label="tRectx0x10ComputedData.label" :active="tRectx0x10ComputedData.active" :c-style="tRectx0x10ComputedData.cStyle"></t-rect></div>
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
import { TRect } from '@ths/design';

export default {
  components: {
    TRect,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-fa67.77c47e843":{"attributeName":"tRectx0x0"},"t-rect-a446.60188e0de":{"attributeName":"tRectx0x1"},"t-rect-5272.1c1ba8a4a":{"attributeName":"tRectx0x2"},"t-rect-9275.9648e3d4b":{"attributeName":"tRectx0x3"},"t-rect-1a7d.0c87aa674":{"attributeName":"tRectx0x4"},"t-rect-3061.75c774c23":{"attributeName":"tRectx0x5"},"t-rect-9fe7.661bbab62":{"attributeName":"tRectx0x6"},"t-rect-dd69.2f3da0b9":{"attributeName":"tRectx0x7"},"t-rect-0d2f.b3b3d2e0a":{"attributeName":"tRectx0x8","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-4c89.2b0341ed7":{"attributeName":"tRectx0x9","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-91fa.aad983361":{"attributeName":"tRectx0x10","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
tRectx0x8: {
defaultStyle: {
            default: {"width":"376px","height":"31px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","position":"unset","left":"24px","top":"0px","animationName":"","background":"var(--business-title-second-bg)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"376px","height":"31px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","position":"unset","left":"24px","top":"0px","animationName":"","background":"var(--business-title-second-bg)"}}}, 
 },
},
tRectx0x9: {
defaultStyle: {
            default: {"width":"50px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(assets/images/2024-12-04/3b0d6f226d5f40619c1675b604ec5b04.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"-2px","left":"-21px","position":"unset","animationName":"custom457e0c4d7ae9a,custom22a312988078d","animationDuration":"1.5s,1.3s","animationTimingFunction":"ease-in,ease-in-out","animationDelay":"0s,0s","animationIterationCount":"infinite,infinite","animationDirection":"alternate,alternate-reverse"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"50px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(assets/images/2024-12-04/3b0d6f226d5f40619c1675b604ec5b04.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"-2px","left":"-21px","position":"unset","animationName":"custom457e0c4d7ae9a,custom22a312988078d","animationDuration":"1.5s,1.3s","animationTimingFunction":"ease-in,ease-in-out","animationDelay":"0s,0s","animationIterationCount":"infinite,infinite","animationDirection":"alternate,alternate-reverse"}}}, 
 },
},
tRectx0x10: {
defaultStyle: {
            default: {"width":"169px","height":"48px","backgroundImage":"url(assets/images/2025-06-27/bfb8f766d7f247a18b392ce6fca17c2d.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"-10px","left":"234px","position":"unset","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"169px","height":"48px","backgroundImage":"url(assets/images/2025-06-27/bfb8f766d7f247a18b392ce6fca17c2d.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"-10px","left":"234px","position":"unset","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}}, 
 },
},
});let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-titleFirstBg', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-titleFirstBg', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x8ComputedData = computed(() => _.merge({}, componentState.tRectx0x8.default, componentState.tRectx0x8?.[state.screenSize]));

 const tRectx0x9ComputedData = computed(() => _.merge({}, componentState.tRectx0x9.default, componentState.tRectx0x9?.[state.screenSize]));

 const tRectx0x10ComputedData = computed(() => _.merge({}, componentState.tRectx0x10.default, componentState.tRectx0x10?.[state.screenSize]));

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
tRectx0x8ComputedData,
tRectx0x9ComputedData,
tRectx0x10ComputedData,
};
},
}
</script>

<style scoped>
.t-l-c-titleFirstBg {
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
background-color: rgba(255, 0, 0, 0);
height: 31px;
width: 410px;
}
.t-l-c-titleFirstBg .titleFirstBg-t-rect-0-8 {
position: absolute !important;
top: 0px;
left: 24px;
width: 376px;
height: 31px;
pointer-events: auto;
}

.t-l-c-titleFirstBg .titleFirstBg-t-rect-0-9 {
position: absolute !important;
top: -2px;
left: -21px;
width: 50px;
height: 36px;
pointer-events: auto;
}

.t-l-c-titleFirstBg .titleFirstBg-t-rect-0-10 {
position: absolute !important;
top: -10px;
left: 234px;
width: 169px;
height: 48px;
pointer-events: auto;
}

@keyframes custome263d94835a89 {

0% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
50% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
10%;
}
100% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
}
@keyframes custombc1e59c456704 {

0% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
50% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
10%;
}
100% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
}
@keyframes customfa732ecba515e {

0% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
50% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
10%;
}
100% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
}
@keyframes customcdd3f7e7beaa6 {

0% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
50% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
10%;
}
100% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
}
@keyframes customac792bbf9af19 {

0% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
50% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
10%;
}
100% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
}
@keyframes custom69c9662b286de {

0% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
50% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
10%;
}
100% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
}
@keyframes custom4c3c1b39109cc {

0% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
50% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
10%;
}
100% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
}
@keyframes custom4f535b3e2b5f4 {

0% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
50% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
10%;
}
100% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
}
@keyframes custom457e0c4d7ae9a {

0% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
100% {
transform: perspective(900px) translateX(10px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
}
@keyframes custom22a312988078d {

0% {
transform: perspective(900px) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
100% {
transform: perspective(900px) translateX(6px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(100%) scaleY(100%) skewX(0deg) skewY(0deg);
opacity: 
100%;
}
}
</style>
