<template>
  <div id="t-l-c-testLegoView" class="t-l-c-testLegoView" ><t-iframe id="t-iframe-37f5.a5d9129c2" class="testLegoView-t-iframe-0-0"  :src="tIframex0x0ComputedData.src" :srcdoc="tIframex0x0ComputedData.srcdoc" :scrolling="tIframex0x0ComputedData.scrolling" :c-style="tIframex0x0ComputedData.cStyle"></t-iframe><t-gradient-text id="t-gradient-text-1cd8.c934eae59" class="testLegoView-t-gradient-text-0-1"  :label="state.title" :c-style="tGradientTextx0x1ComputedData.cStyle"></t-gradient-text><t-card-icon-base id="t-card-icon-base-6f23.ca68a579d" class="testLegoView-t-card-icon-base-0-2"  :c-style="tCardIconBasex0x2ComputedData.cStyle" :spacing-x="tCardIconBasex0x2ComputedData.spacingX" :col="tCardIconBasex0x2ComputedData.col" :data-alias="tCardIconBasex0x2ComputedData.dataAlias" :data="tCardIconBasex0x2ComputedData.data" @card-click="oncardClick1720165547172"></t-card-icon-base></div>
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
import { TCardIconBase, TGradientText, TIframe } from '@ths/design';

export default {
  components: {
    TCardIconBase,
    TGradientText,
    TIframe,
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
   item: {"title":""},
   title: "title",
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
tIframex0x0: {
defaultStyle: {
            default: {"width":"1092px","height":"549px","position":"unset","left":"-9px","top":"115px"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/view/view/show/index.vm?screenId=573d48856e8fb05f5ab002d16966ab94",
srcdoc:"",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"1092px","height":"549px","position":"unset","left":"-9px","top":"115px"}}}, 
 },
},
tGradientTextx0x1: {
defaultStyle: {
            default: {"width":"215px","height":"67px","top":"23px","left":"467px","position":"unset"},
            
            },
 default: { 
 
label:"title",
cStyle:{"wrapper":{"default":{"width":"215px","height":"67px","top":"23px","left":"467px","position":"unset"}}}, 
 },
},
tCardIconBasex0x2: {
defaultStyle: {
            default: {"width":"438px","height":"132px","padding":"14px 18px","position":"unset","left":"-6px","top":"-39px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"438px","height":"132px","padding":"14px 18px","position":"unset","left":"-6px","top":"-39px"}},"description":{"default":{"-webkit-text-fill-color":"transparent","-webkit-background-clip":"text","backgroundImage":"linear-gradient(0deg, rgba(182, 137, 80, 1) 0%, rgba(223, 218, 163, 1) 100%)"}}},
spacingX:8,
col:4,
dataAlias:{"iconKey":"icon","titleKey":"title","descKey":"description"},
data:[{"icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4/assets/images/level-second.png","title":"PM2.5浓度","description":"NO.2"},{"icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4/assets/images/level-first.png","title":"空气综合指数","description":"NO.1"},{"icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4/assets/images/level-second.png","title":"优良率","description":"NO.2"},{"icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4/assets/images/level-second.png","title":"臭氧","description":"NO.2"}], 
 },
},
});
const onWebSocketMessage = (data) => {
state.title = data?.[0]?.defaultValue;
};
const oncardClick1720165547172 = (item) => {
// 设置变量值
state.item = _.cloneDeep(item);
/* 发送webSocket消息 */
 if (rootData?.sendMessage) {
 rootData?.sendMessage({
id: "6ctbcapm3cw5l8v216f6", // 唯一索引
type: "runInteractive", // 消息名称
data: [{"code":"title","name":"","defaultValue":state.item.title,"shareCode":"title","runtimeValue":state.item.title},{"code":"data","name":"","defaultValue":state.title,"shareCode":"data","runtimeValue":state.title}], // 发送的数据
});
};
};
 function handleWindowResize() {
                            setPageScale('t-l-c-testLegoView', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
/* 接收socket.io消息 */
rootData.rootOn('rootSocket:change', (data)=>{
if(data.type === "runInteractiveChange"){
try{
// 执行自定义方法
onWebSocketMessage(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
});
onMounted(() => {
setPageScale('t-l-c-testLegoView', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tIframex0x0ComputedData = computed(() => _.merge({}, componentState.tIframex0x0.default, componentState.tIframex0x0?.[state.screenSize]));

 const tGradientTextx0x1ComputedData = computed(() => _.merge({}, componentState.tGradientTextx0x1.default, componentState.tGradientTextx0x1?.[state.screenSize]));

 const tCardIconBasex0x2ComputedData = computed(() => _.merge({}, componentState.tCardIconBasex0x2.default, componentState.tCardIconBasex0x2?.[state.screenSize]));

return {
global,
state,
componentState,
tIframex0x0ComputedData,
tGradientTextx0x1ComputedData,
tCardIconBasex0x2ComputedData,
oncardClick1720165547172,
};
},
}
</script>

<style scoped>
.t-l-c-testLegoView {
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
width: 300px;
height: 43px;
background-color: rgba(0,0,0,0);
}
.t-l-c-testLegoView .testLegoView-t-iframe-0-0 {
position: absolute !important;
top: 115px;
left: -9px;
width: 1092px;
height: 549px;
pointer-events: auto;
}

.t-l-c-testLegoView .testLegoView-t-gradient-text-0-1 {
position: absolute !important;
top: 23px;
left: 467px;
width: 215px;
height: 67px;
pointer-events: auto;
}

.t-l-c-testLegoView .testLegoView-t-card-icon-base-0-2 {
position: absolute !important;
top: -39px;
left: -6px;
width: 438px;
height: 132px;
pointer-events: auto;
}
</style>
