<template>
  <div id="t-l-c-waterDialogFSAnalysis" class="t-l-c-waterDialogFSAnalysis" ><t-rect id="t-rect-e270.77257e97e" class="waterDialogFSAnalysis-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-tabs-base id="t-tabs-base-9473.ab390fa97" class="waterDialogFSAnalysis-t-tabs-base-0-1"  :data="tTabsBasex0x1ComputedData.data" :space="tTabsBasex0x1ComputedData.space" :selected-tab-val="state.tabSelect" :inner-shadow-color="tTabsBasex0x1ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x1ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x1ComputedData.alias" :c-style="tTabsBasex0x1ComputedData.cStyle" @tab-click="ontabClick1728634997464_0_0"></t-tabs-base><t-component id="t-component-376d.d6155f957" class="waterDialogFSAnalysis-t-component-0-2"  :name="state.tabSelect" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="state.tabSelect"></t-component></div>
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
import { TComponent, TRect, TTabsBase } from '@ths/design';

export default {
  components: {
    TComponent,
    TRect,
    TTabsBase,
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
   isShow: true,
   showFullPage: false,
   tabSelect: "DwfxSkdwfxComponent",
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
            default: {"width":"824px","height":"100px","position":"unset","left":"0px","top":"0px","background":"var(--business-query-bg)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"824px","height":"100px","position":"unset","left":"0px","top":"0px","background":"var(--business-query-bg)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","animationName":""}}}, 
 },
},
tTabsBasex0x1: {
defaultStyle: {
            default: {"width":"792px","height":"33px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","position":"unset","animationName":"","left":"16px","top":"11px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},
            
            },
 default: { 
 
data:[{"label":"时空多维分析","value":"DwfxSkdwfxComponent"},{"label":"指标多维关联分析","value":"DwfxZbdwglfxComponent"}],
space:0,
selectedTabVal:"stationRelationAnalysisComponent",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":false},
cStyle:{"wrapper":{"default":{"width":"792px","height":"33px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","position":"unset","animationName":"","left":"16px","top":"11px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"itemWrapper":{"default":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","backgroundColor":"rgba(20, 112, 204, 0)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","width":"auto","height":"32px","fontSize":"var(--min-font)","lineHeight":"30px","marginRight":"0px","color":"var(--t-white)"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","lineHeight":"30px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","marginRight":"0px","fontSize":"var(--min-font)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"var(--business-tab-third-active-shadow) 0px 0px 18px 0px inset","background":"var(--business-tab-third-active-fill)","color":"var(--business-tab-third-active-border)","borderLeft":"1px solid var(--business-tab-third-active-border)","borderTop":"1px solid var(--business-tab-third-active-border)","borderRight":"1px solid var(--business-tab-third-active-border)","borderBottom":"1px solid var(--business-tab-third-active-border)"},"hover":{"backgroundColor":"rgba(8, 71, 133, 0)","backgroundImage":"var(--tab-item-select-background-445)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","marginRight":"0px","fontSize":"var(--min-font)","color":"var(--light-blue-color)","lineHeight":"30px"},"disabled":{"lineHeight":"30px"}},"label":{"active":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit","fontSize":"var(--min-font)","color":"var(--business-tab-second-active)"},"default":{"fontSize":"var(--min-font)","color":"var(--business-text-avianize)"}}}, 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"824px","height":"533px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","left":"0px","top":"47px"},
            
            },
 default: { 
 
name:"DwfxSkdwfxComponent",
cStyle:{"wrapper":{"default":{"width":"824px","height":"533px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","left":"0px","top":"47px"}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/DwfxSkdwfx",
componentName:"DwfxSkdwfxComponent", 
 },
},
});
const ontabClick1728634997464_0_0 = (data) => {
// 设置变量值
state.tabSelect = data.value;
// 执行自定义方法
setWh();
};
 function handleWindowResize() {
                            setPageScale('t-l-c-waterDialogFSAnalysis', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-waterDialogFSAnalysis', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tTabsBasex0x1ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x1.default, componentState.tTabsBasex0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tTabsBasex0x1ComputedData,
tComponentx0x2ComputedData,
ontabClick1728634997464_0_0,
};
},
}
</script>

<style scoped>
.t-l-c-waterDialogFSAnalysis {
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
z-index: 0;
filter: ;
width: 824px;
height: 580px;
background-color: rgba(0,0,0,0);
}
.t-l-c-waterDialogFSAnalysis .waterDialogFSAnalysis-t-rect-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 824px;
height: 100px;
pointer-events: auto;
}

.t-l-c-waterDialogFSAnalysis .waterDialogFSAnalysis-t-tabs-base-0-1 {
position: absolute !important;
top: 11px;
left: 16px;
width: 792px;
height: 33px;
pointer-events: auto;
}

.t-l-c-waterDialogFSAnalysis .waterDialogFSAnalysis-t-component-0-2 {
position: absolute !important;
top: 47px;
left: 0px;
width: 824px;
height: 533px;
pointer-events: auto;
}
</style>
