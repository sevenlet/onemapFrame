<template>
  <div id="t-l-c-waterDialogSmallWatershedBase" class="t-l-c-waterDialogSmallWatershedBase" ><t-list-card id="t-list-card-d9ab.2e21fb3b5" class="waterDialogSmallWatershedBase-t-list-card-0-0"  :data="replaceCssVariables(filterData(state.baseInfoData, componentPropBindingMap?.['t-list-card-d9ab.2e21fb3b5']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x0ComputedData.spacingX" :col="tListCardx0x0ComputedData.col" :direction="tListCardx0x0ComputedData.direction" :exchange-order="tListCardx0x0ComputedData.exchangeOrder" :unit-break="tListCardx0x0ComputedData.unitBreak" :key-field="tListCardx0x0ComputedData.keyField" :active-key-field="tListCardx0x0ComputedData.activeKeyField" :active="tListCardx0x0ComputedData.active" :c-style="tListCardx0x0ComputedData.cStyle"></t-list-card><t-component id="t-component-c019.99b6d840a" class="waterDialogSmallWatershedBase-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode"></t-component><t-text id="t-text-62b3.48b14905c" class="waterDialogSmallWatershedBase-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle"></t-text><t-row id="t-row-7cbb.f37a8a217" class="waterDialogSmallWatershedBase-t-row-0-3"  :c-style="tRowx0x3ComputedData.cStyle" :gutter="tRowx0x3ComputedData.gutter" :justify="tRowx0x3ComputedData.justify" :align="tRowx0x3ComputedData.align"><t-text id="t-text-b39c.b6c03321c" class="waterDialogSmallWatershedBase-t-text-0-3-0"  :label="replaceCssVariables(filterData(state.monitorTime, componentPropBindingMap?.['t-text-b39c.b6c03321c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x3x0ComputedData.editable" :c-style="tTextx0x3x0ComputedData.cStyle"></t-text></t-row></div>
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
import { TComponent, TListCard, TRow, TText } from '@ths/design';

export default {
  components: {
    TComponent,
    TListCard,
    TRow,
    TText,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-list-card-d9ab.2e21fb3b5":{"attributeName":"tListCardx0x0","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-c019.99b6d840a":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-62b3.48b14905c":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-7cbb.f37a8a217":{"attributeName":"tRowx0x3","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-b39c.b6c03321c":{"attributeName":"tTextx0x3x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   myChart: {},
   lineChartOption: {},
   showChart: true,
   isBz: false,
   seriesData: [],
   standardSeriesData: [],
   noDataImg: "assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
   dataSourcetype: "",
   monitorData: [{"value":"-","label":"pH"},{"value":"-","label":"DO","unit":"mg/L"},{"value":"-","label":"IMn","unit":"mg/L"},{"value":"-","label":"NH₃-H","unit":"mg/L"},{"value":"-","label":"TP","unit":"mg/L"}],
   baseInfoData: [{"title":"站点名称","num":"-"},{"title":"所属行政区","num":"-"},{"title":"所属流域","num":"-"},{"title":"监测类型","num":"-"},{"title":"控制级别","num":"-"},{"title":"水质目标","num":"-","color":"#FF2B2B"},{"title":"水质现状","num":"-","color":"#FF2B2B"},{"title":"超标污染物","num":"-","color":"#FF2B2B"}],
   assessType: "",
   pointCode: "",
   monitorTime: "",
   timeRange: [],
   endTime: "",
   startTime: "",
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
tListCardx0x0: {
defaultStyle: {
            default: {"width":"824px","height":"136px","position":"unset","left":"0px","top":"0px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"站点名称","num":"-"},{"title":"所属行政区","num":"-"},{"title":"所属流域","num":"-"},{"title":"监测类型","num":"-"},{"title":"控制级别","num":"-"},{"title":"水质目标","num":"-","color":"#FF2B2B"},{"title":"水质现状","num":"-","color":"#FF2B2B"},{"title":"超标污染物","num":"-","color":"#FF2B2B"}],
spacingX:2,
col:2,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"824px","height":"136px","position":"unset","left":"0px","top":"0px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--base-label-bg-color)","width":"120px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--base-label-title-color)","fontSize":"var(--business-text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"numBox":{"default":{"backgroundColor":"var(--info-background)","width":"289px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--base-label-text-color)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"153px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"153px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"auto","height":"28px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"40px","top":"153px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-16)","animationName":"","lineHeight":"28px"},
            
            },
 default: { 
 
label:"水质监测信息（实时数据）",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"28px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"40px","top":"153px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-16)","animationName":"","lineHeight":"28px"}}}, 
 },
},
tRowx0x3: {
defaultStyle: {
            default: {"width":"100%","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"153px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"153px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextx0x3x0: {
defaultStyle: {
            default: {"width":"164px","height":"28px","color":"rgba(255, 255, 255, 0.9)","top":"153px","left":"645px","textAlign":"right","fontSize":"var(--business-text-size-14)","position":"unset","marginRight":"40px","lineHeight":"28px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"28px","color":"rgba(255, 255, 255, 0.9)","top":"153px","left":"645px","textAlign":"right","fontSize":"var(--business-text-size-14)","position":"unset","marginRight":"40px","lineHeight":"28px"}}}, 
 },
},
});
const initPageData = () => {


// const time = dateFormat(new Date(), 'yyyy-MM-dd HH');
// 处理参数
if (global.businessDialog.dialogParmas) {
  // state.monitorTime = global.businessDialog.dialogParmas.monitorTime || time;
  state.pointCode = global.businessDialog.dialogParmas.pointCode;
} else {
  // state.monitorTime = time;
  state.pointCode = 'smallWater00001';
}

async function getData() {
  await apiRegistry.getLastTime.request();
  // 获取基本信息接口
  await apiRegistry.getBaseInfo.request();
}
// 获取数据
getData();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getBaseInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.pointCode","MONITORTIME":"state.monitorTime","interfaceId":"6b55f61844ccd520f3f9a5a4f227f95e"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.pointCode,"MONITORTIME":state.monitorTime,"interfaceId":"6b55f61844ccd520f3f9a5a4f227f95e"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.pointCode,"MONITORTIME":state.monitorTime,"interfaceId":"6b55f61844ccd520f3f9a5a4f227f95e"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     const { data } = res;
if(data.head.statusCode === '200' && data.data){
  // 站点名称
  state.baseInfoData[0].num = data.data?.POINT_NAME || '-';
  // 所属行政区
  state.baseInfoData[1].num = data.data?.REGION_NAME || '-';
  // 所属流域
  state.baseInfoData[2].num = data.data?.WSYSTEM_NAME || '-';
  // 监测类型
  state.baseInfoData[3].num = data.data?.WQDATASOURCETYPENAME || '-';
  // 控制级别
  state.baseInfoData[4].num = data.data?.CONTROLLEVEL || '-';
  // 水质目标
  state.baseInfoData[5].num = data.data?.WATERQUALITYLEVELTARGETNAME || '-';
  state.baseInfoData[5].color = getWaterLevelColor(data.data?.WATERQUALITYLEVELTARGETNAME);
  // 水质现状
  state.baseInfoData[6].num = data.data?.WATERQUALITYLEVELNAME || '-';
  state.baseInfoData[6].color = getWaterLevelColor(data.data?.WATERQUALITYLEVELNAME);
  // 超标污染物
  state.baseInfoData[7].num = data.data?.OVERPOLLUTE || '-';
  state.baseInfoData[7].color = getWaterLevelColor(data.data?.OVERPOLLUTE);
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
 getLastTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.pointCode","b":"","CODE_WQDATASOURCETYPE":"smallWater","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"f6d8b19a9c1adf2d493f18b21a232c5d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.pointCode,"b":"","CODE_WQDATASOURCETYPE":"smallWater","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"f6d8b19a9c1adf2d493f18b21a232c5d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.pointCode,"b":"","CODE_WQDATASOURCETYPE":"smallWater","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"f6d8b19a9c1adf2d493f18b21a232c5d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLastTime'] = res.data;
                
     const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  // 当前选中最新时间
  state.monitorTime = data.data.MONITORTIME || ''
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.monitorTime = ''
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [state.monitorTime], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getBaseInfo', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-waterDialogSmallWatershedBase', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPageData();
onMounted(() => {
setPageScale('t-l-c-waterDialogSmallWatershedBase', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tListCardx0x0ComputedData = computed(() => _.merge({}, componentState.tListCardx0x0.default, componentState.tListCardx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tRowx0x3ComputedData = computed(() => _.merge({}, componentState.tRowx0x3.default, componentState.tRowx0x3?.[state.screenSize]));

 const tTextx0x3x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x3x0.default, componentState.tTextx0x3x0?.[state.screenSize]));

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
tListCardx0x0ComputedData,
tComponentx0x1ComputedData,
tTextx0x2ComputedData,
tRowx0x3ComputedData,
tTextx0x3x0ComputedData,
};
},
}
</script>

<style scoped>
.t-l-c-waterDialogSmallWatershedBase {
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
width: 825px;
height: 195px;
background-color: rgba(255, 12, 12, 0);
}
.t-l-c-waterDialogSmallWatershedBase .waterDialogSmallWatershedBase-t-list-card-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 824px;
height: 136px;
pointer-events: auto;
}

.t-l-c-waterDialogSmallWatershedBase .waterDialogSmallWatershedBase-t-component-0-1 {
position: absolute !important;
top: 153px;
left: 0px;
width: 100%;
height: 28px;
pointer-events: auto;
}

.t-l-c-waterDialogSmallWatershedBase .waterDialogSmallWatershedBase-t-text-0-2 {
position: absolute !important;
top: 153px;
left: 40px;
width: auto;
height: 28px;
pointer-events: auto;
}

.t-l-c-waterDialogSmallWatershedBase .waterDialogSmallWatershedBase-t-row-0-3 {
position: absolute !important;
top: 153px;
left: 0px;
width: 100%;
height: 28px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
}

.t-l-c-waterDialogSmallWatershedBase .waterDialogSmallWatershedBase-t-text-0-3-0 {
position: unset;
top: 153px;
left: 645px;
width: 164px;
height: 28px;
pointer-events: auto;
}
</style>
