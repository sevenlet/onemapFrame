<template>
  <div id="t-l-c-waterOverviewContent" class="t-l-c-waterOverviewContent" ><t-component id="t-component-acf1.cd221410d" class="waterOverviewContent-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName" :page-id="tComponentx0x0ComputedData.pageId" :page-code="tComponentx0x0ComputedData.pageCode"></t-component></div>
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
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-acf1.cd221410d":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-096e.a67f367d7":{"attributeName":"tComponentx0x1"}};
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
   searchTwo: {"timeValue":"","selectValue":"all","tabsValue":"monthly"},
   searchOne: {"timeValue":"","selectOne":"all","selectTwo":"all","tabsActiveValue":"monthly"},
   tabs: [{"label":"水质评价","name":"waterSurfaceEvaluateComponent","iconSrc":"assets/images/2024-12-04/d052f7e964ea40d9bb2b355304c75152.svg","activeIconSrc":"assets/images/2024-12-04/e37bc846a3fe44229b07f0b761c3a1e9.svg"},{"label":"目标考核","name":"waterSurfaceTargetComponent","iconSrc":"assets/images/2024-12-04/f40ea51273ed4ad2a2644d1e5f2683bd.svg","activeIconSrc":"assets/images/2024-12-04/490ed07e9da94ef391daeb22bf5d7dff.svg"},{"label":"区域分析","name":"surfaceWaterQyfxComponent","iconSrc":"assets/images/2024-12-04/f40ea51273ed4ad2a2644d1e5f2683bd.svg","activeIconSrc":"assets/images/2024-12-04/490ed07e9da94ef391daeb22bf5d7dff.svg"}],
   tabsActiveValue: "waterSurfaceEvaluateComponent",
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
            default: {"width":"450px","height":"869px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"1px","top":"1px","overflowY":"auto","overflowX":"hidden","--scrollbar-thumb-color":"var(--business-show-bg50)","--scrollbar-track-color":"var(--business-show-bg10)","--scrollbar-width":"2px"},
            
            },
 default: { 
 
name:"overallEvaluationResultComponent",
cStyle:{"wrapper":{"default":{"width":"450px","height":"869px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"1px","top":"1px","overflowY":"auto","overflowX":"hidden","--scrollbar-thumb-color":"var(--business-show-bg50)","--scrollbar-track-color":"var(--business-show-bg10)","--scrollbar-width":"2px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/overallEvaluationResult",
componentName:"overallEvaluationResultComponent",
pageId:"e72d8074a17e499a8de93cb39a0a3edb",
pageCode:"overallEvaluationResult", 
 },
},
});
const setTabIcon = () => {
// 设置tabs图标
state.tabs[0].iconSrc = getCssVariable('--business-tab-water');
state.tabs[1].iconSrc = getCssVariable('--business-tab-target');
};
const changeTabsToMap = () => {
// 切换tabs标签 给地图发消息
/* 发送webSocket消息 */

// 如果选中目标考核发的消息
if (state.tabsActiveValue === 'waterSurfaceTargetComponent') {
  // if (rootData?.sendMessage) {
  // rootData?.sendMessage({
  // id: guid(true, 'lego'), // 唯一索引
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractive", // 消息名称
    // 消息内容
    data: [
      {
        "code": "assessOrPointWq",
        "shareCode": "assessOrPointWq",
        "defaultValue": "assess",
        "name": "",
        "runtimeValue": "assess"
      },
      {
        "code": "surfaceIframeUrl",
        "shareCode": "surfaceIframeUrl",
        "defaultValue": "/view/show/index.vm?screenId=593f0f381499dac7885aef837a6529bb&CODE_CONTROLLEVEL=#CODE_CONTROLLEVEL#&MONITORTIME=#MONITORTIME#&ASSESSTYPE=#ASSESSTYPE#&DEFAULT_ASSESSTYPE=#ASSESSTYPE#",
        "name": "",
        "runtimeValue": "/view/show/index.vm?screenId=593f0f381499dac7885aef837a6529bb&CODE_CONTROLLEVEL=&MONITORTIME=&ASSESSTYPE=&DEFAULT_ASSESSTYPE="
      },
      {
        "code": "indicatorKey",
        "name": "",
        "defaultValue": "3.1.1.2",
        "shareCode": "indicatorKey",
        "runtimeValue": "3.1.1.2"
      },
      {
        "code": "paramStr",
        "name": "",
        "defaultValue": "CODE_CONTROLLEVEL=#CODE_CONTROLLEVEL#&ASSESSTYPE=#ASSESSTYPE#&MONITORTIME=#MONITORTIME#",
        "shareCode": "paramStr",
        "runtimeValue": "CODE_CONTROLLEVEL=&ASSESSTYPE=&MONITORTIME="
      }
    ]
  });
  // }
} else {
  // 如果选中水质评价发的消息
  // if (rootData?.sendMessage) {
  // rootData?.sendMessage({
  // id: guid(true, 'lego'), // 唯一索引
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractive", // 消息名称
    data: [
      {
        "code": "assessOrPointWq",
        "shareCode": "assessOrPointWq",
        "defaultValue": "pointWq",
        "name": "",
        "runtimeValue": "pointWq"
      },
      {
        "code": "surfaceIframeUrl",
        "shareCode": "surfaceIframeUrl",
        "defaultValue": "/view/show/index.vm?screenId=2ffce62339db23d7f242b40a1743d186&CODE_CONTROLLEVEL=#CODE_CONTROLLEVEL#&MONITORTIME=#MONITORTIME#&ASSESSTYPE=#ASSESSTYPE#&DEFAULT_ASSESSTYPE=#ASSESSTYPE#",
        "name": "",
        "runtimeValue": "/view/show/index.vm?screenId=2ffce62339db23d7f242b40a1743d186&CODE_CONTROLLEVEL=&MONITORTIME=&ASSESSTYPE=&DEFAULT_ASSESSTYPE="
      },
      {
        "code": "indicatorKey",
        "name": "",
        "defaultValue": "3.1.1",
        "shareCode": "indicatorKey",
        "runtimeValue": "3.1.1"
      },
      {
        "code": "paramStr",
        "name": "",
        "defaultValue": "CODE_CONTROLLEVEL=#CODE_CONTROLLEVEL#&ASSESSTYPE=#ASSESSTYPE#&MONITORTIME=#MONITORTIME#",
        "shareCode": "paramStr",
        "runtimeValue": "CODE_CONTROLLEVEL=&ASSESSTYPE=&MONITORTIME="
      }
    ]
  });
  // }
}

};
const sendMessaage = () => {
// 给水指标页面发送消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,
  type: "indicatorToggleMsg",
  data: [{
    shareCode: "indicatorToggle",
    runtimeValue: state.tabsActiveValue === 'waterSurfaceEvaluateComponent' ? "地表水" : ""
  }]
});
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getLastTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"MONITORTIME":"","AREA_CODE":"","CODE_WQDATASOURCETYPE":"surfaceWater","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":"","AREA_CODE":"","CODE_WQDATASOURCETYPE":"surfaceWater","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"MONITORTIME":"","AREA_CODE":"","CODE_WQDATASOURCETYPE":"surfaceWater","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLastTime'] = res.data;
                
     state.searchOne.timeValue = '';
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  // 当前选中最新时间
  state.searchOne.timeValue = data.data.MONITORTIME || '';
} else {
  state.searchOne.timeValue = '';
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      

      reject(error);
    });
  });
},
              },
// 接口函数
 getLastTimeMBKH: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"MONITORTIME":"","AREA_CODE":"","CODE_WQDATASOURCETYPE":"surfaceWater","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":"","AREA_CODE":"","CODE_WQDATASOURCETYPE":"surfaceWater","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"MONITORTIME":"","AREA_CODE":"","CODE_WQDATASOURCETYPE":"surfaceWater","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLastTimeMBKH'] = res.data;
                
     state.searchTwo.timeValue = '';
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  // 当前选中最新时间
  state.searchTwo.timeValue = data.data.MONITORTIME || '';
} else {
  state.searchTwo.timeValue = '';
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      

      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-waterOverviewContent', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setTabIcon();
onMounted(() => {
setPageScale('t-l-c-waterOverviewContent', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
sendMessaage();
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
.t-l-c-waterOverviewContent {
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
background-color: rgba(20, 22, 31, 0);
height: 830px;
}
.t-l-c-waterOverviewContent .waterOverviewContent-t-component-0-0 {
position: absolute !important;
top: 1px;
left: 1px;
width: 450px;
height: 869px;
pointer-events: auto;
}
</style>
