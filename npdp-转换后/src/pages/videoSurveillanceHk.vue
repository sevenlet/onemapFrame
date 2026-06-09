<template>
  <div id="t-l-c-videoSurveillanceHk" class="t-l-c-videoSurveillanceHk" ><t-row id="t-row-e19c.bcd191d76" class="videoSurveillanceHk-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align"><t-video-monitor id="t-video-monitor-99b7.c1651e918" class="videoSurveillanceHk-t-video-monitor-0-1-0"  :c-style="tVideoMonitorx0x1x0ComputedData.cStyle" :real-play-url="replaceCssVariables(filterData(state.videoUrl, componentPropBindingMap?.['t-video-monitor-99b7.c1651e918']['realPlayUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :base-path="tVideoMonitorx0x1x0ComputedData.basePath" :icon-path="tVideoMonitorx0x1x0ComputedData.iconPath" :player-type="tVideoMonitorx0x1x0ComputedData.playerType" :camera-code="tVideoMonitorx0x1x0ComputedData.cameraCode"></t-video-monitor></t-row></div>
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
import { TRow, TVideoMonior } from '@ths/design';

export default {
  components: {
    TRow,
    TVideoMonior,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-9ce7.95df6e418":{"attributeName":"tRowx0x0"},"t-row-e19c.bcd191d76":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-video-monitor-99b7.c1651e918":{"attributeName":"tVideoMonitorx0x1x0","cStyle":{"filters":[]},"realPlayUrl":{"filters":[]},"basePath":{"filters":[]},"iconPath":{"filters":[]},"playerType":{"filters":[]},"cameraCode":{"filters":[]}}};
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
   videoUrl: "",
   pointCode: "",
   monitorData: [{"value":"","label":"视频监控点1","style":{"cardIconStyle":{"background":"#00DA2A"},"labelIconStyle":{"background-image":"url(assets/images/2024-12-30/6678a04114a34021a947caa73ebcf17f.svg)"}}},{"value":"","label":"视频监控点2","style":{"cardIconStyle":{"background":"#00DA2A"},"labelIconStyle":{"background-image":"url(assets/images/2024-12-30/6678a04114a34021a947caa73ebcf17f.svg)"}}},{"value":"","label":"视频监控点3","style":{"cardIconStyle":{"background":"#00DA2A"},"labelIconStyle":{"background-image":"url(assets/images/2024-12-30/6678a04114a34021a947caa73ebcf17f.svg)"}}},{"value":"","label":"视频监控点4","style":{"cardIconStyle":{"background":"#00DA2A"},"labelIconStyle":{"background-image":"url(assets/images/2024-12-30/6678a04114a34021a947caa73ebcf17f.svg)"}}},{"value":"","label":"视频监控点5","style":{"cardIconStyle":{"background":"#00DA2A"},"labelIconStyle":{"background-image":"url(assets/images/2024-12-30/6678a04114a34021a947caa73ebcf17f.svg)"}}}],
   tabList: [],
   deviceId: "",
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
tRowx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"0px","paddingTop":"15px","paddingBottom":"15px","paddingLeft":"15px","paddingRight":"15px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"0px","paddingTop":"15px","paddingBottom":"15px","paddingLeft":"15px","paddingRight":"15px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tVideoMonitorx0x1x0: {
defaultStyle: {
            default: {"width":"100%","position":"unset","height":"100%","left":"0px","top":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","position":"unset","height":"100%","left":"0px","top":"0px"}},"video":{"default":{"width":"100%","height":"100%","display":"block"}},"videoContainer":{"default":{"display":"block","width":"100%","height":"100%"}},"miniMap":{"default":{"display":"none"}},"locationIcon":{"default":{"display":"none"}},"steeringWheel":{"default":{"display":"none"}},"directionArrowIcon":{"default":{"display":"none"}},"statusTip":{"default":{"display":"none"}},"toolbarContainer":{"default":{"display":"none"}},"toolbarLeft":{"default":{"display":"none"}},"volumeContainer":{"default":{"display":"none"}},"actionContainer":{"default":{"display":"none","width":"100%","height":"100%"}}},
realPlayUrl:"",
basePath:"./resources/video-monitor",
iconPath:{"arrow":"assets/images/video-monitor/arrow-up.svg","circle":"assets/images/video-monitor/circle.png","location":"assets/images/video-monitor/location.png","photo":"assets/images/video-monitor/photo.png","play":"assets/images/video-monitor/play.png","stopPlay":"assets/images/video-monitor/stop.png","talk":"assets/images/video-monitor/s.png","stopTalk":"assets/images/video-monitor/s1.png","record":"assets/images/video-monitor/video.png","stopRecord":"assets/images/video-monitor/video-stop.png","sound":"assets/images/video-monitor/sound.png","soundNone":"assets/images/video-monitor/sound-0.png","fullScreen":"assets/images/video-monitor/full-screen.png"},
playerType:"RealTime",
cameraCode:"", 
 },
},
});
const init = () => {
state.deviceId = global?.businessDialog?.dialogParmas?.pkid || global?.businessDialog?.dialogParmas?.ID || global?.businessDialog?.dialogParmas?.id || ''
if(state.deviceId){
  apiRegistry.getVedioUrl.request();
}
};
const handleTabChange = (data) => {

state.activeVideo = data
apiRegistry.getVedioUrl.request();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getVedioUrl: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"protocol":"global.protocol","deviceId":"state.deviceId","interfaceId":"0cdd0a472d10b55a5e41bb7b265cdf2c"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"protocol":global.protocol,"deviceId":state.deviceId,"interfaceId":"0cdd0a472d10b55a5e41bb7b265cdf2c"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"protocol":global.protocol,"deviceId":state.deviceId,"interfaceId":"0cdd0a472d10b55a5e41bb7b265cdf2c"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getVedioUrl'] = res.data;
                
     
const { data } = res.data;
if (data) {
  state.videoUrl = data.url
}else{
  state.videoUrl = ''
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
                            setPageScale('t-l-c-videoSurveillanceHk', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
init();
onMounted(() => {
setPageScale('t-l-c-videoSurveillanceHk', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tVideoMonitorx0x1x0ComputedData = computed(() => _.merge({}, componentState.tVideoMonitorx0x1x0.default, componentState.tVideoMonitorx0x1x0?.[state.screenSize]));

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
tRowx0x1ComputedData,
tVideoMonitorx0x1x0ComputedData,
};
},
}
</script>

<style scoped>
.t-l-c-videoSurveillanceHk {
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
width: 100%;
height: 100%;
background-color: rgba(255, 12, 12, 0);
}
.t-l-c-videoSurveillanceHk .videoSurveillanceHk-t-row-0-1 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
padding-top: 15px;
padding-bottom: 15px;
padding-left: 15px;
padding-right: 15px;
}

.t-l-c-videoSurveillanceHk .videoSurveillanceHk-t-video-monitor-0-1-0 {
position: unset;
top: 0px;
left: 0px;
width: 100%;
height: 100%;
pointer-events: auto;
}
</style>
