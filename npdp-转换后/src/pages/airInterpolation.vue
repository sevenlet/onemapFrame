<template>
  <div id="t-l-c-airInterpolation" class="t-l-c-airInterpolation" ><t-switch id="t-switch-b833.f53228a38" class="airInterpolation-t-switch-0-0"  :value="replaceCssVariables(filterData(state.switchStatus, componentPropBindingMap?.['t-switch-b833.f53228a38']['value'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tSwitchx0x0ComputedData.cStyle" @change="onchange1735011122739"></t-switch><t-text id="t-text-a88d.9161a0638" class="airInterpolation-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle"></t-text></div>
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
import { TSwitch, TText } from '@ths/design';

export default {
  components: {
    TSwitch,
    TText,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-switch-b833.f53228a38":{"attributeName":"tSwitchx0x0","value":{"filters":[]},"cStyle":{"filters":[]}},"t-text-a88d.9161a0638":{"attributeName":"tTextx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   switchStatus: false,
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
tSwitchx0x0: {
defaultStyle: {
            default: {"width":"28px","height":"20px !important","position":"unset","left":"117px","top":"11px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
value:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"20px !important","position":"unset","left":"117px","top":"11px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"action":{"default":{"width":"12px","height":"12px"},"active":{"backgroundColor":"var(--t-white)","left":"30px"}},"core":{"default":{"borderTopLeftRadius":"20px","borderTopRightRadius":"20px","borderBottomLeftRadius":"20px","borderBottomRightRadius":"20px","height":"16px"},"active":{"backgroundColor":"var(--business-theme)","borderTopLeftRadius":"20px","borderTopRightRadius":"20px","borderBottomLeftRadius":"20px","borderBottomRightRadius":"20px","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"68px","height":"20px","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","top":"12px","left":"39px","position":"unset","lineHeight":"20px","textAlign":"right"},
            
            },
 default: { 
 
label:"插值图",
editable:false,
cStyle:{"wrapper":{"default":{"width":"68px","height":"20px","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","top":"12px","left":"39px","position":"unset","lineHeight":"20px","textAlign":"right"}}}, 
 },
},
});
const setDefaultValue = () => {
watch(() => global.air.tabSelect, (newVal) => {
  // 如果选中污染分析，默认打开插值图
  if (newVal === 'airPollutionContentComponent' && !state.switchStatus) {
    state.switchStatus = false;
    rootData.rootSocket.emit('message', {
      type: 'changeInterpolateStatus',
      room: global.socketRoom,
      data: {
        SHOW: false,
      },
    });
  }
}); 
};
const onSocketAppLoaded = () => {
rootData.rootOn('rootSocket:change', (data) => {
  if (data.type === 'appLoaded') {
    // 大气态势概览
    if (data?.data?.resCode === "foshan_air") {
      // 打开插值图
      state.switchStatus = false;
      rootData.rootSocket.emit('message', {
        type: 'changeInterpolateStatus',
        room: global.socketRoom,
        data: {
          SHOW: false,
        },
      });
    }
  }
});
};
const watchLeftActiveMenu = () => {
watch(() => global.leftSubjectActiveMenu,(newValue) =>{
  if(newValue === '炼山'){
    state.switchStatus = true
  }else if(newValue === '烟花爆竹' || newValue === '态势概览'){
     state.switchStatus = false;
  }
   rootData.rootSocket.emit('message', {
      type: 'changeInterpolateStatus',
      room: global.socketRoom,
      data: {
        SHOW: state.switchStatus,
      },
    });
},{immediate:true})
};
const onchange1735011122739 = (value) => {
// 设置变量值
state.switchStatus = value;
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "changeInterpolateStatus", // 消息名称
data: {"SHOW":value}, // 发送的数据
});
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-airInterpolation', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-airInterpolation', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setDefaultValue();
// 执行自定义方法
watchLeftActiveMenu();
});
// 执行自定义方法
onSocketAppLoaded();
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tSwitchx0x0ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x0.default, componentState.tSwitchx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

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
tSwitchx0x0ComputedData,
tTextx0x1ComputedData,
onchange1735011122739,
};
},
}
</script>

<style scoped>
.t-l-c-airInterpolation {
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
width: 154px;
height: 42px;
background-color: rgba(0,0,0,0);
}
.t-l-c-airInterpolation .airInterpolation-t-switch-0-0 {
position: absolute !important;
top: 11px;
left: 117px;
width: 28px;
height: 20px !important;
pointer-events: auto;
}

.t-l-c-airInterpolation .airInterpolation-t-text-0-1 {
position: absolute !important;
top: 12px;
left: 39px;
width: 68px;
height: 20px;
pointer-events: auto;
}
</style>
