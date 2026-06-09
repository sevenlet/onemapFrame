<template>
  <div id="t-l-c-ggpVideoSurveillance" class="t-l-c-ggpVideoSurveillance" ><t-tabs-scroll id="t-tabs-scroll-55de.3b0a86ea7" class="ggpVideoSurveillance-t-tabs-scroll-0-0"  :data="replaceCssVariables(filterData(state.tabList, componentPropBindingMap?.['t-tabs-scroll-55de.3b0a86ea7']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active-path="replaceCssVariables(filterData(state.activeVideo, componentPropBindingMap?.['t-tabs-scroll-55de.3b0a86ea7']['activePath'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :show-icon="tTabsScrollx0x0ComputedData.showIcon" :custom-icon="tTabsScrollx0x0ComputedData.customIcon" :key-field="tTabsScrollx0x0ComputedData.keyField" :c-style="tTabsScrollx0x0ComputedData.cStyle" @tab-click="ontabClick1767865678924_0_0"></t-tabs-scroll><t-video-monitor v-if="state.tabList.length !== 0" id="t-video-monitor-99b7.c1651e918" class="ggpVideoSurveillance-t-video-monitor-0-1"  :c-style="tVideoMonitorx0x1ComputedData.cStyle" :real-play-url="replaceCssVariables(filterData(state.videoUrl, componentPropBindingMap?.['t-video-monitor-99b7.c1651e918']['realPlayUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :base-path="tVideoMonitorx0x1ComputedData.basePath" :icon-path="tVideoMonitorx0x1ComputedData.iconPath" :player-type="tVideoMonitorx0x1ComputedData.playerType" :camera-code="tVideoMonitorx0x1ComputedData.cameraCode"></t-video-monitor><t-row v-if="state.tabList.length === 0" id="t-row-9ce7.95df6e418" class="ggpVideoSurveillance-t-row-0-2"  :c-style="tRowx0x2ComputedData.cStyle" :gutter="tRowx0x2ComputedData.gutter" :justify="tRowx0x2ComputedData.justify" :align="tRowx0x2ComputedData.align"><t-col id="t-col-16b1.84808986e" class="ggpVideoSurveillance-t-col-0-2-0"  :span="tColx0x2x0ComputedData.span" :offset="tColx0x2x0ComputedData.offset" :push="tColx0x2x0ComputedData.push" :pull="tColx0x2x0ComputedData.pull" :c-style="tColx0x2x0ComputedData.cStyle"><t-text-common id="t-text-common-0e3a.9b08d99ef" class="ggpVideoSurveillance-t-text-common-0-2-0-0"  :label="tTextCommonx0x2x0x0ComputedData.label" :editable="tTextCommonx0x2x0x0ComputedData.editable" :c-style="tTextCommonx0x2x0x0ComputedData.cStyle"></t-text-common></t-col></t-row></div>
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
import { TCol, TRow, TTabsScroll, TTextCommon, TVideoMonior } from '@ths/design';

export default {
  components: {
    TCol,
    TRow,
    TTabsScroll,
    TTextCommon,
    TVideoMonior,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-tabs-scroll-55de.3b0a86ea7":{"attributeName":"tTabsScrollx0x0","data":{"filters":[]},"activePath":{"filters":[]},"showIcon":{"filters":[]},"customIcon":{"filters":[]},"keyField":{"filters":[]},"cStyle":{"filters":[]}},"t-video-monitor-99b7.c1651e918":{"attributeName":"tVideoMonitorx0x1","cStyle":{"filters":[]},"realPlayUrl":{"filters":[]},"basePath":{"filters":[]},"iconPath":{"filters":[]},"playerType":{"filters":[]},"cameraCode":{"filters":[]}},"t-row-9ce7.95df6e418":{"attributeName":"tRowx0x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-16b1.84808986e":{"attributeName":"tColx0x2x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-0e3a.9b08d99ef":{"attributeName":"tTextCommonx0x2x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   activeVideo: "",
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
tTabsScrollx0x0: {
defaultStyle: {
            default: {"width":"100%","height":"44px","backgroundColor":"transparent","animationName":""},
            
            },
 default: { 
 
data:[],
activePath:"",
showIcon:false,
customIcon:true,
keyField:{"label":"resourcename","icon":"icon","path":"cameraid"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"44px","backgroundColor":"transparent","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"var(--business-scroll-tag-bg)","color":"var(--business-scroll-tag-text)","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px"},"hover":{"backgroundColor":"var(--business-scroll-tag-bg)","color":"var(--business-scroll-tag-text)","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px"},"active":{"backgroundColor":"var(--business-scroll-tag-bg-selected)","borderLeft":"1px solid var(--business-scroll-tag-border-selected)","borderTop":"1px solid var(--business-scroll-tag-border-selected)","borderRight":"1px solid var(--business-scroll-tag-border-selected)","borderBottom":"1px solid var(--business-scroll-tag-border-selected)","color":"var(--business-scroll-tag-text-selected)","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px"}},"moreButton":{"default":{"display":"none","width":"auto","height":"auto"}},"tabsButton":{"default":{"backgroundColor":"var(--business-scroll-tag-bg)","color":"var(--business-scroll-tag-text)"},"hover":{"backgroundColor":"var(--business-scroll-tag-bg)","color":"var(--business-scroll-tag-text)"},"active":{"backgroundColor":"var(--business-scroll-tag-bg-selected)","color":"var(--business-scroll-tag-text-selected)"}}}, 
 },
},
tVideoMonitorx0x1: {
defaultStyle: {
            default: {"width":"100%","position":"unset","height":"calc(100% - 60px)","left":"0px","top":"60px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","position":"unset","height":"calc(100% - 60px)","left":"0px","top":"60px"}},"video":{"default":{"width":"100%","height":"100%","display":"block"}},"videoContainer":{"default":{"display":"block","width":"100%","height":"100%"}},"miniMap":{"default":{"display":"none"}},"locationIcon":{"default":{"display":"none"}},"steeringWheel":{"default":{"display":"none"}},"directionArrowIcon":{"default":{"display":"none"}},"statusTip":{"default":{"display":"none"}},"toolbarContainer":{"default":{"display":"none"}},"toolbarLeft":{"default":{"display":"none"}},"volumeContainer":{"default":{"display":"none"}},"actionContainer":{"default":{"display":"none","width":"100%","height":"100%"}}},
realPlayUrl:"",
basePath:"./resources/video-monitor",
iconPath:{"arrow":"assets/images/video-monitor/arrow-up.svg","circle":"assets/images/video-monitor/circle.png","location":"assets/images/video-monitor/location.png","photo":"assets/images/video-monitor/photo.png","play":"assets/images/video-monitor/play.png","stopPlay":"assets/images/video-monitor/stop.png","talk":"assets/images/video-monitor/s.png","stopTalk":"assets/images/video-monitor/s1.png","record":"assets/images/video-monitor/video.png","stopRecord":"assets/images/video-monitor/video-stop.png","sound":"assets/images/video-monitor/sound.png","soundNone":"assets/images/video-monitor/sound-0.png","fullScreen":"assets/images/video-monitor/full-screen.png"},
playerType:"RealTime",
cameraCode:"", 
 },
},
tRowx0x2: {
defaultStyle: {
            default: {"width":"100%","height":"50px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"265px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"50px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"265px","animationName":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x2x0: {
defaultStyle: {
            default: {"width":"100px","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"10px","top":"10px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","animationName":"","left":"10px","top":"10px"}}}, 
 },
},
tTextCommonx0x2x0x0: {
defaultStyle: {
            default: {"width":"96px","height":"20px","color":"#2c81e2","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"378px","top":"295px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"暂无视频数据",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"20px","color":"#2c81e2","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"378px","top":"295px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
});
const init = () => {
state.pointCode = global.businessDialog.dialogParmas.stationid || '66f3b4b2900887c45f16b190'
async function getData() {
  await apiRegistry.getList.request();
  await apiRegistry.getVedioUrl.request();
}
getData()
};
const handleTabChange = (data) => {

state.activeVideo = data
apiRegistry.getVedioUrl.request();
};
const ontabClick1767865678924_0_0 = (item) => {
// 执行自定义方法
handleTabChange(item.path);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"stationid":"state.pointCode","interfaceId":"4f8b8f6232cbece80a77989d22759cbb"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"stationid":state.pointCode,"interfaceId":"4f8b8f6232cbece80a77989d22759cbb"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"stationid":state.pointCode,"interfaceId":"4f8b8f6232cbece80a77989d22759cbb"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getList'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.tabList = data
  state.activeVideo = data[0].cameraid
}else{
  state.tabList = []
  state.activeVideo = ''
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
 getVedioUrl: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"protocol":"global.protocol","deviceId":"state.activeVideo","interfaceId":"0028d872d15ae4467d280d3ad1801193"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"protocol":global.protocol,"deviceId":state.activeVideo,"interfaceId":"0028d872d15ae4467d280d3ad1801193"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"protocol":global.protocol,"deviceId":state.activeVideo,"interfaceId":"0028d872d15ae4467d280d3ad1801193"});
                   
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
                            setPageScale('t-l-c-ggpVideoSurveillance', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
init();
onMounted(() => {
setPageScale('t-l-c-ggpVideoSurveillance', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTabsScrollx0x0ComputedData = computed(() => _.merge({}, componentState.tTabsScrollx0x0.default, componentState.tTabsScrollx0x0?.[state.screenSize]));

 const tVideoMonitorx0x1ComputedData = computed(() => _.merge({}, componentState.tVideoMonitorx0x1.default, componentState.tVideoMonitorx0x1?.[state.screenSize]));

 const tRowx0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x2.default, componentState.tRowx0x2?.[state.screenSize]));

 const tColx0x2x0ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0.default, componentState.tColx0x2x0?.[state.screenSize]));

 const tTextCommonx0x2x0x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x2x0x0.default, componentState.tTextCommonx0x2x0x0?.[state.screenSize]));

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
tTabsScrollx0x0ComputedData,
tVideoMonitorx0x1ComputedData,
tRowx0x2ComputedData,
tColx0x2x0ComputedData,
tTextCommonx0x2x0x0ComputedData,
ontabClick1767865678924_0_0,
};
},
}
</script>

<style scoped>
.t-l-c-ggpVideoSurveillance {
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
width: 824px;
height: 580px;
background-color: rgba(255, 12, 12, 0);
}
.t-l-c-ggpVideoSurveillance .ggpVideoSurveillance-t-tabs-scroll-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 44px;
pointer-events: auto;
}

.t-l-c-ggpVideoSurveillance .ggpVideoSurveillance-t-video-monitor-0-1 {
position: absolute !important;
top: 60px;
left: 0px;
width: 100%;
height: calc(100% - 60px);
pointer-events: auto;
}

.t-l-c-ggpVideoSurveillance .ggpVideoSurveillance-t-row-0-2 {
position: absolute !important;
top: 265px;
left: 0px;
width: 100%;
height: 50px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
animation-name: ;
}

.t-l-c-ggpVideoSurveillance .ggpVideoSurveillance-t-col-0-2-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
animation-name: ;
}

.t-l-c-ggpVideoSurveillance .ggpVideoSurveillance-t-text-common-0-2-0-0 {
position: unset;
top: 295px;
left: 378px;
width: 96px;
height: 20px;
pointer-events: auto;
}
</style>
