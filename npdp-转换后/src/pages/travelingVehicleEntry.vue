<template>
  <div id="t-l-c-travelingVehicleEntry" class="t-l-c-travelingVehicleEntry" ><t-component id="t-component-f129.876fe19dd" class="travelingVehicleEntry-t-component-0-0"  :name="replaceCssVariables(filterData(state.componentName, componentPropBindingMap?.['t-component-f129.876fe19dd']['name'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :loading="tComponentx0x0ComputedData.loading" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="replaceCssVariables(filterData(state.componentName, componentPropBindingMap?.['t-component-f129.876fe19dd']['componentName'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-component></div>
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
import { TComponent } from '@ths/design';

export default {
  components: {
    TComponent,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-f129.876fe19dd":{"attributeName":"tComponentx0x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}}};
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
   componentName: "travelingVehicleContentComponent",
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
tComponentx0x0: {
defaultStyle: {
            default: {"width":"450px","height":"904px","margin":"0 auto","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
name:"travelingVehicleContentComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"450px","height":"904px","margin":"0 auto","position":"unset","left":"0px","top":"0px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/earlyWarningForecastContent",
componentName:"travelingVehicleContentComponent", 
 },
},
});
const setStyle = () => {
let style = document.createElement('style');
// 动态添加纵向选项卡样式
style.textContent = `
  [id$="t-tabs-vertical-icon-26b3.2f7eb7a84"] .tabs {
    flex-direction: row;
  }
  [id$="t-tabs-vertical-icon-26b3.2f7eb7a84"] .tabs__item {
    border-right: 1px solid var(--t-bg-50);
    border-left: 1px solid var(--t-bg-50);
  }
  [id$="t-tabs-vertical-icon-26b3.2f7eb7a84"] .tabs__item:first-child {
    border-radius: 16px 0 0 0;
    border: 0;
  }

  [id$="t-tabs-vertical-icon-26b3.2f7eb7a84"] .tabs__item:last-child {
    border-radius: 0 16px 0 0;
    border: 0;
  }
  
  [id$="t-tabs-vertical-icon-26b3.2f7eb7a84"] .tabs__item__icon {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;
document.head.appendChild(style);
};
const setTabIcon = () => {
// 设置tab图标（设置为变量）
state.tabData[0].icon = getCssVariable('--business-tab-water');
state.tabData[1].icon = getCssVariable('--business-tab-target');
state.tabData[2].icon = getCssVariable('--business-tab-target');
};
const handleTabChange = (tabValue) => {
if (tabValue !== state.tabSelect) {
  // 重置时间轴数据
  rootData.rootSocket.emit('message', {
    type: 'changeTimeAxisData',
    room: global.socketRoom,
    data: {
      sourceType: 'resetData',
      timeType: '',
      timeValue: '',
      timeRangeData: [],
    },
  });
  state.componentName = tabValue;
}
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-travelingVehicleEntry', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-travelingVehicleEntry', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
/* 接收socket.io消息 */
const onSocketChanged4b2ef23f067423f9747 = function (data) {
if(data.type === "showWarningTraceDetail"){
try{
// 设置变量值
state.componentName = 'waringForecastSyxqPanelComponent';
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChanged4b2ef23f067423f9747);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChanged4b2ef23f067423f9747);
});
/* 接收socket.io消息 */
const onSocketChangea79423894e7a450fa0c1 = function (data) {
if(data.type === "closeWarningTraceDetail"){
try{
// 设置变量值
state.componentName = 'earlyWarningForecastContentComponent';
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangea79423894e7a450fa0c1);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangea79423894e7a450fa0c1);
});
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

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
tComponentx0x0ComputedData,
};
},
}
</script>

<style scoped>
.t-l-c-travelingVehicleEntry {
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
background-color: rgba(26, 27, 31, 0);
width: 450px;
height: 900px;
}
.t-l-c-travelingVehicleEntry .travelingVehicleEntry-t-component-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 450px;
height: 904px;
pointer-events: auto;
}
</style>
