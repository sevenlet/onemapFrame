<template>
  <div id="t-l-c-rhpwkBaseInfo" class="t-l-c-rhpwkBaseInfo" ><t-component id="t-component-c019.99b6d840a" class="rhpwkBaseInfo-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName" :page-id="tComponentx0x0ComputedData.pageId" :page-code="tComponentx0x0ComputedData.pageCode"></t-component><t-list-card id="t-list-card-d9ab.2e21fb3b5" class="rhpwkBaseInfo-t-list-card-0-1"  :data="replaceCssVariables(filterData(state.baseInfoData, componentPropBindingMap?.['t-list-card-d9ab.2e21fb3b5']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x1ComputedData.spacingX" :col="tListCardx0x1ComputedData.col" :direction="tListCardx0x1ComputedData.direction" :exchange-order="tListCardx0x1ComputedData.exchangeOrder" :unit-break="tListCardx0x1ComputedData.unitBreak" :key-field="tListCardx0x1ComputedData.keyField" :active-key-field="tListCardx0x1ComputedData.activeKeyField" :active="tListCardx0x1ComputedData.active" :c-style="tListCardx0x1ComputedData.cStyle"></t-list-card><t-text id="t-text-62b3.48b14905c" class="rhpwkBaseInfo-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle"></t-text><t-row id="t-row-bed0.5ca83a488" class="rhpwkBaseInfo-t-row-0-3"  :c-style="tRowx0x3ComputedData.cStyle" :gutter="tRowx0x3ComputedData.gutter" :justify="tRowx0x3ComputedData.justify" :align="tRowx0x3ComputedData.align"><t-text id="t-text-b39c.b6c03321c" class="rhpwkBaseInfo-t-text-0-3-0"  :label="tTextx0x3x0ComputedData.label" :editable="tTextx0x3x0ComputedData.editable" :c-style="tTextx0x3x0ComputedData.cStyle"></t-text></t-row></div>
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
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-c019.99b6d840a":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-list-card-d9ab.2e21fb3b5":{"attributeName":"tListCardx0x1","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-62b3.48b14905c":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-bed0.5ca83a488":{"attributeName":"tRowx0x3","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-b39c.b6c03321c":{"attributeName":"tTextx0x3x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   options: "",
   myChart: "",
   isBz: false,
   seriesData: [],
   standardSeriesData: [],
   noDataImg: "assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
   dataSourcetype: "",
   variationTrendData: {"title":"近12个月水质变化趋势","activeTarget":"waterLevelChange","chartOptions":{"series":[]},"chartShow":true},
   monitorData: [{"value":"-","label":"pH"},{"value":"-","label":"DO","unit":"mg/L"},{"value":"-","label":"IMn","unit":"mg/L"},{"value":"-","label":"NH₃-H","unit":"mg/L"},{"value":"-","label":"TP","unit":"mg/L"}],
   baseInfoData: [{"title":"入河排污口名称","num":"-"},{"title":"入河排污口编码","num":"-"},{"title":"地市名称","num":"-"},{"title":"区县名称","num":"-"},{"title":"乡镇名称","num":"-"},{"title":"经度","num":"-"},{"title":"纬度","num":"-"},{"title":"排污口类型","num":"-"},{"title":"规模类型","num":"-"},{"title":"设置时间","num":"-"},{"title":"入河方式","num":"-"},{"title":"排放方式","num":"-"},{"title":"所在水体","num":"-"},{"title":"设备状态","num":"-"}],
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
tComponentx0x0: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tListCardx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"254px","position":"unset","left":"1px","top":"42px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"入河排污口名称","num":"-"},{"title":"入河排污口编码","num":"-"},{"title":"地市名称","num":"-"},{"title":"区县名称","num":"-"},{"title":"乡镇名称","num":"-"},{"title":"经度","num":"-"},{"title":"纬度","num":"-"},{"title":"排污口类型","num":"-"},{"title":"规模类型","num":"-"},{"title":"设置时间","num":"-"},{"title":"入河方式","num":"-"},{"title":"排放方式","num":"-"},{"title":"所在水体","num":"-"},{"title":"设备状态","num":"-"}],
spacingX:2,
col:2,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"100%","height":"254px","position":"unset","left":"1px","top":"42px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"35%","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","height":""}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"69.5%","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px","height":""}},"num":{"default":{"fontSize":"var(--text-size-14)","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"var(--text-size-14)"}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"40px","top":"4px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"基本信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"40px","top":"4px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"}}}, 
 },
},
tRowx0x3: {
defaultStyle: {
            default: {"width":"100%","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"0px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextx0x3x0: {
defaultStyle: {
            default: {"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"124.5px","left":"645px","textAlign":"right","fontSize":"var(--text-size-14)","position":"unset","marginRight":"50px"},
            
            },
 default: { 
 
label:"2021-11-11",
editable:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"124.5px","left":"645px","textAlign":"right","fontSize":"var(--text-size-14)","position":"unset","marginRight":"50px"}}}, 
 },
},
});
const initPageData = () => {
console.log('1')
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"a":"","POINT_CODE":"state.pointCode","ASSESSTYPE":"state.assessType","MONITORTIME":"state.monitorTime","interfaceId":"c88965d570ad1d00197e1fee3a00c649"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"a":"","POINT_CODE":state.pointCode,"ASSESSTYPE":state.assessType,"MONITORTIME":state.monitorTime,"interfaceId":"c88965d570ad1d00197e1fee3a00c649"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"a":"","POINT_CODE":state.pointCode,"ASSESSTYPE":state.assessType,"MONITORTIME":state.monitorTime,"interfaceId":"c88965d570ad1d00197e1fee3a00c649"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     console.log(res);
const { data } = res;
if(data.head.statusCode === '200' && data.data){
  // 行政区
  state.baseInfoData[0].num = data.data?.REGION_NAME || '-';
  // 所在水体
  state.baseInfoData[1].num = `${data.data?.WSYSTEM_NAME}/${data.data?.WATER_NAME}` || '-';
  // 控制级别
  state.baseInfoData[2].num = data.data?.CONTROLLEVEL || '-';
  // 断面属性
  state.baseInfoData[3].num = data.data?.CONNECT_PROPERTY || '-';
  // 水质目标
  state.baseInfoData[4].num = data.data?.WATERQUALITYLEVELTARGETNAME || '-';
  // 超标污染物
  state.baseInfoData[5].num = data.data?.OVERPOLLUTE || '-';
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
                            setPageScale('t-l-c-rhpwkBaseInfo', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPageData();
onMounted(() => {
setPageScale('t-l-c-rhpwkBaseInfo', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tListCardx0x1ComputedData = computed(() => _.merge({}, componentState.tListCardx0x1.default, componentState.tListCardx0x1?.[state.screenSize]));

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
tComponentx0x0ComputedData,
tListCardx0x1ComputedData,
tTextx0x2ComputedData,
tRowx0x3ComputedData,
tTextx0x3x0ComputedData,
};
},
}
</script>

<style scoped>
.t-l-c-rhpwkBaseInfo {
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
.t-l-c-rhpwkBaseInfo .rhpwkBaseInfo-t-component-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 28px;
pointer-events: auto;
}

.t-l-c-rhpwkBaseInfo .rhpwkBaseInfo-t-list-card-0-1 {
position: absolute !important;
top: 42px;
left: 1px;
width: 100%;
height: 254px;
pointer-events: auto;
}

.t-l-c-rhpwkBaseInfo .rhpwkBaseInfo-t-text-0-2 {
position: absolute !important;
top: 4px;
left: 40px;
width: 130px;
height: 20px;
pointer-events: auto;
}

.t-l-c-rhpwkBaseInfo .rhpwkBaseInfo-t-row-0-3 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 28px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
}

.t-l-c-rhpwkBaseInfo .rhpwkBaseInfo-t-text-0-3-0 {
position: unset;
top: 124.5px;
left: 645px;
width: 164px;
height: 19px;
pointer-events: auto;
}
</style>
