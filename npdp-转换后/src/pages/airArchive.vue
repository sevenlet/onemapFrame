<template>
  <div id="t-l-c-airArchive" class="t-l-c-airArchive" ><t-iframe id="t-iframe-6596.ea3ea01fb" class="airArchive-t-iframe-0-0"  :src="replaceCssVariables(state.iframeUrl, global?.theme || global?.activeTheme || '默认主题')" :srcdoc="tIframex0x0ComputedData.srcdoc" :scrolling="tIframex0x0ComputedData.scrolling" :c-style="tIframex0x0ComputedData.cStyle"></t-iframe></div>
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
import { TIframe } from '@ths/design';

export default {
  components: {
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
   iframeUrl: "http://192.168.34.198:8084/#/layout/tag-archive-detail?wisdowfileCode=SQQY&wisdowfileName=%E6%B6%89%E6%B0%94%E6%A1%A3%E6%A1%88&treeKeywords=&pWisdowfileCode=root&pWisdowfileName=%E6%99%BA%E6%85%A7%E6%A1%A3%E6%A1%88&dataId=SQQY_10CE5604F08A454F972701762B12C50E",
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
            default: {"width":"788px","height":"463px","position":"unset","left":"0px","top":"2px","backgroundColor":"rgba(188, 94, 94, 0)"},
            
            },
 default: { 
 
src:"http://192.168.34.198:8084/#/layout/tag-archive-detail?wisdowfileCode=SQQY&wisdowfileName=%E6%B6%89%E6%B0%94%E6%A1%A3%E6%A1%88&treeKeywords=&pWisdowfileCode=root&pWisdowfileName=%E6%99%BA%E6%85%A7%E6%A1%A3%E6%A1%88&dataId=SQQY_10CE5604F08A454F972701762B12C50E",
srcdoc:"",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"788px","height":"463px","position":"unset","left":"0px","top":"2px","backgroundColor":"rgba(188, 94, 94, 0)"}}}, 
 },
},
});
const setIframeUrl = () => {
state.iframeUrl = `https://stfs.sthj.fs.gdgov.cn/polluter-file-micro/#/layout/tag-archive-detail?wisdowfileCode=SQQY&wisdowfileName=%E6%B6%89%E6%B0%94%E6%A1%A3%E6%A1%88&treeKeywords=&pWisdowfileCode=root&pWisdowfileName=%E6%99%BA%E6%85%A7%E6%A1%A3%E6%A1%88&standenterId=${global.businessDialog.dialogParmas.STANDENTERID}`
// https://stfs.sthj.fs.gdgov.cn/polluter-file-micro
};
 function handleWindowResize() {
                            setPageScale('t-l-c-airArchive', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setIframeUrl();
onMounted(() => {
setPageScale('t-l-c-airArchive', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tIframex0x0ComputedData = computed(() => _.merge({}, componentState.tIframex0x0.default, componentState.tIframex0x0?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tIframex0x0ComputedData,
};
},
}
</script>

<style scoped>
.t-l-c-airArchive {
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
width: 788px;
height: 468px;
background-color: rgba(0,0,0,0);
}
.t-l-c-airArchive .airArchive-t-iframe-0-0 {
position: absolute !important;
top: 2px;
left: 0px;
width: 788px;
height: 463px;
pointer-events: auto;
}
</style>
