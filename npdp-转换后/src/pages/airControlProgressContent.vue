<template>
  <div id="t-l-c-airControlProgressContent" class="t-l-c-airControlProgressContent" ><t-gradient-shadow-text id="t-gradient-shadow-text-167e.a24aaf26" class="airControlProgressContent-t-gradient-shadow-text-0-0"  :label="tGradientShadowTextx0x0ComputedData.label" :c-style="tGradientShadowTextx0x0ComputedData.cStyle"></t-gradient-shadow-text></div>
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
import { TGradientShadowText } from '@ths/design';

export default {
  components: {
    TGradientShadowText,
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
tGradientShadowTextx0x0: {
defaultStyle: {
            default: {"width":"170px","height":"22px","top":"439px","left":"140px"},
            
            },
 default: { 
 
label:"功能持续建设中...",
cStyle:{"wrapper":{"default":{"width":"170px","height":"22px","top":"439px","left":"140px"}},"textStyle":{"default":{"-webkit-text-fill-color":"transparent","-webkit-background-clip":"text","backgroundImage":"linear-gradient(0deg, rgba(255,126,0,1) 0%, rgba(255,255,255,1) 100%)","fontWeight":"bold"}},"textShadowStyle":{"default":{"fontWeight":"bold"}}}, 
 },
},
});
 function handleWindowResize() {
                            setPageScale('t-l-c-airControlProgressContent', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-airControlProgressContent', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tGradientShadowTextx0x0ComputedData = computed(() => _.merge({}, componentState.tGradientShadowTextx0x0.default, componentState.tGradientShadowTextx0x0?.[state.screenSize]));

return {
global,
state,
componentState,
tGradientShadowTextx0x0ComputedData,
};
},
}
</script>

<style scoped>
.t-l-c-airControlProgressContent {
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
width: 450px;
height: 900px;
background-color: rgba(0,0,0,0);
}
.t-l-c-airControlProgressContent .airControlProgressContent-t-gradient-shadow-text-0-0 {
position: absolute !important;
top: 439px;
left: 140px;
width: 170px;
height: 22px;
pointer-events: auto;
}
</style>
