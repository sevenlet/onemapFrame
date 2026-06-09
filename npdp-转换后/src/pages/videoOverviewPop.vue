<template>
  <div id="t-l-c-videoOverviewPop" class="t-l-c-videoOverviewPop" ><t-row id="t-row-1ba6.2380a3aca" class="videoOverviewPop-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align"><t-col id="t-col-0ab7.2bf73c98b" class="videoOverviewPop-t-col-0-0-0"  :span="tColx0x0x0ComputedData.span" :offset="tColx0x0x0ComputedData.offset" :push="tColx0x0x0ComputedData.push" :pull="tColx0x0x0ComputedData.pull" :c-style="tColx0x0x0ComputedData.cStyle"><t-component id="t-component-d924.39c833168" class="videoOverviewPop-t-component-0-0-0-0"  :name="tComponentx0x0x0x0ComputedData.name" :loading="tComponentx0x0x0x0ComputedData.loading" :c-style="tComponentx0x0x0x0ComputedData.cStyle" :src="tComponentx0x0x0x0ComputedData.src" :component-name="tComponentx0x0x0x0ComputedData.componentName" :page-id="tComponentx0x0x0x0ComputedData.pageId" :page-code="tComponentx0x0x0x0ComputedData.pageCode"></t-component><t-component id="t-component-283c.a2bf5caf4" class="videoOverviewPop-t-component-0-0-0-1"  :name="tComponentx0x0x0x1ComputedData.name" :loading="tComponentx0x0x0x1ComputedData.loading" :point-code="tComponentx0x0x0x1ComputedData.pointCode" :c-style="tComponentx0x0x0x1ComputedData.cStyle" :dynamic-variable="tComponentx0x0x0x1ComputedData.dynamicVariable" :data-type="tComponentx0x0x0x1ComputedData.dataType" :original-data="tComponentx0x0x0x1ComputedData.originalData" :src="tComponentx0x0x0x1ComputedData.src" :component-name="tComponentx0x0x0x1ComputedData.componentName" :page-id="tComponentx0x0x0x1ComputedData.pageId" :page-code="tComponentx0x0x0x1ComputedData.pageCode"></t-component></t-col></t-row></div>
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
import { TCol, TComponent, TRow } from '@ths/design';

export default {
  components: {
    TCol,
    TComponent,
    TRow,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-1ba6.2380a3aca":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-0ab7.2bf73c98b":{"attributeName":"tColx0x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-d924.39c833168":{"attributeName":"tComponentx0x0x0x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-283c.a2bf5caf4":{"attributeName":"tComponentx0x0x0x1","name":{"filters":[]},"loading":{"filters":[]},"pointCode":{"filters":[]},"cStyle":{"filters":[]},"dynamicVariable":{"filters":[]},"dataType":{"filters":[]},"originalData":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}}};
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
   pointCode: "1212",
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
            default: {"width":"98%","height":"94%","display":"flex","justifyContent":"left","alignItems":"center","left":"1%","top":"3%","gap":"20px","flexDirection":"row"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"98%","height":"94%","display":"flex","justifyContent":"left","alignItems":"center","left":"1%","top":"3%","gap":"20px","flexDirection":"row"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"100%","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tComponentx0x0x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"100%","margin":"0 auto","position":"unset","left":"22px","top":"32px"},
            
            },
 default: { 
 
name:"videoListTreeComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"auto","height":"100%","margin":"0 auto","position":"unset","left":"22px","top":"32px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/videoListTree",
componentName:"videoListTreeComponent",
pageId:"13e52a3b2c5d4a3598dbbb072ef8b750",
pageCode:"videoListTree", 
 },
},
tComponentx0x0x0x1: {
defaultStyle: {
            default: {"width":"100%","height":"100%","margin":"0 auto","position":"unset","left":"300px","top":"34px"},
            
            },
 default: { 
 
name:"monitorVideoListComponent",
loading:true,
pointCode:"1111111",
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","margin":"0 auto","position":"unset","left":"300px","top":"34px"}}},
dynamicVariable:{"pointCode":state.pointCode},
dataType:{"pointCode":"dynamic"},
originalData:{"pointCode":"ws"},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/monitorVideoList",
componentName:"monitorVideoListComponent",
pageId:"eeba259c918d4432886df6696a141ff5",
pageCode:"monitorVideoList", 
 },
},
});
const test = () => {
provide('channelCode', 1111)
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-videoOverviewPop', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-videoOverviewPop', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
test();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tColx0x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0x0.default, componentState.tColx0x0x0?.[state.screenSize]));

 const tComponentx0x0x0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0x0x0.default, componentState.tComponentx0x0x0x0?.[state.screenSize]));

 const tComponentx0x0x0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0x0x1.default, componentState.tComponentx0x0x0x1?.[state.screenSize]));

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
tColx0x0x0ComputedData,
tComponentx0x0x0x0ComputedData,
tComponentx0x0x0x1ComputedData,
};
},
}
</script>

<style scoped>
.t-l-c-videoOverviewPop {
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
height: 100%;
width: 100%;
background-color: rgba(0,0,0,0);
}
.t-l-c-videoOverviewPop .videoOverviewPop-t-row-0-0 {
position: absolute !important;
top: 3%;
left: 1%;
width: 98%;
height: 94%;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
gap: 20px;
flex-direction: row;
}

.t-l-c-videoOverviewPop .videoOverviewPop-t-col-0-0-0 {
position: relative;
top: null;
left: null;
width: 100%;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-videoOverviewPop .videoOverviewPop-t-component-0-0-0-0 {
position: unset;
top: 32px;
left: 22px;
width: auto;
height: 100%;
pointer-events: auto;
}

.t-l-c-videoOverviewPop .videoOverviewPop-t-component-0-0-0-1 {
position: unset;
top: 34px;
left: 300px;
width: 100%;
height: 100%;
pointer-events: auto;
}
</style>
