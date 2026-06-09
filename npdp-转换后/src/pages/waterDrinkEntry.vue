<template>
  <div id="t-l-c-waterDrinkEntry" class="t-l-c-waterDrinkEntry" ><t-component id="t-component-58a9.9e22e3533" class="waterDrinkEntry-t-component-0-0"  :name="replaceCssVariables(filterData(state.componentName, componentPropBindingMap?.['t-component-58a9.9e22e3533']['name'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="replaceCssVariables(filterData(state.componentName, componentPropBindingMap?.['t-component-58a9.9e22e3533']['componentName'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-component></div>
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
import { TComponent } from '@ths/design';

export default {
  components: {
    TComponent,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-58a9.9e22e3533":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}}};
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
   name: "",
   level: "",
   time: "",
   componentName: "waterDrinkContentComponent",
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
            default: {"width":"450px","height":"900px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"1px","top":"0px"},
            
            },
 default: { 
 
name:"waterDrinkContentComponent",
cStyle:{"wrapper":{"default":{"width":"450px","height":"900px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"1px","top":"0px"}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/waterDrinkContent",
componentName:"waterDrinkContentComponent", 
 },
},
});
const setProvider = () => {
provide('drinkWaterState', state);
};
const initSocketMessage = () => {
// // 1. 注册监听器 (只注册一次)
// rootData.rootOn('rootSocket:change', (data) => {
//     const params = new URLSearchParams(window.location.search);
//     const region = params.get('region');
//   // if (data.type === 'appLoaded' && data.data.resCode === 'onemap_manual_drinkingwater' && data.data.resName === '饮用水') {
//     console.log('data.type', data)
//   if (data.type === 'appLoaded') {
//     // 这里应该调用 changeCity(state.selectedCity) 吗？
//     // 注意：changeCity 需要参数，而且 changeCity 本身就是发消息的
//     // 如果收到 'appLoaded' 消息意味着地图加载好了，我们需要把当前的状态同步给地图
//     // 那么应该复用刚才在 getData 里写的发消息逻辑，或者调用 changeCity(state.selectedCity)
//     console.log('state.selectedCity选中的', region)
//     // 假设意图是：地图加载完毕通知我们，我们把当前选中的城市告诉它
//     // changeCity(state.selectedCity);

// // 给地图发消息
// rootData.rootSocket.emit('message', {
//   room: global.socketRoom,// 房间号
//   type: "runInteractive", // 消息名称
//   data: [
//     {
//       "code": "value",
//       "shareCode": "MANAGER_TYPE_CODE",
//       "defaultValue": "",
//       "runtimeValue": region
//     },
//     {
//       "code": "defaultTab",
//       "shareCode": "defaultTab",
//       "defaultValue": "pointWq",
//       "name": "",
//       "runtimeValue": "pointWq"
//     }
//   ]
// });

//   }
// });
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-waterDrinkEntry', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initSocketMessage();
// 执行自定义方法
setProvider();
onMounted(() => {
setPageScale('t-l-c-waterDrinkEntry', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
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
.t-l-c-waterDrinkEntry {
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
.t-l-c-waterDrinkEntry .waterDrinkEntry-t-component-0-0 {
position: absolute !important;
top: 0px;
left: 1px;
width: 450px;
height: 900px;
pointer-events: auto;
}
</style>
