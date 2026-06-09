<template>
  <div id="t-l-c-samplePlotBeseInfo" class="t-l-c-samplePlotBeseInfo" ><t-list-card id="t-list-card-8de3.e3bd8e7b4" class="samplePlotBeseInfo-t-list-card-0-0"  :data="replaceCssVariables(filterData(state.featureInformation, componentPropBindingMap?.['t-list-card-8de3.e3bd8e7b4']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x0ComputedData.spacingX" :col="tListCardx0x0ComputedData.col" :direction="tListCardx0x0ComputedData.direction" :exchange-order="tListCardx0x0ComputedData.exchangeOrder" :unit-break="tListCardx0x0ComputedData.unitBreak" :key-field="tListCardx0x0ComputedData.keyField" :active-key-field="tListCardx0x0ComputedData.activeKeyField" :active="tListCardx0x0ComputedData.active" :c-style="tListCardx0x0ComputedData.cStyle"></t-list-card><t-list-card id="t-list-card-dd26.ccf66dde6" class="samplePlotBeseInfo-t-list-card-0-1"  :data="replaceCssVariables(filterData(state.baseInfoData, componentPropBindingMap?.['t-list-card-dd26.ccf66dde6']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x1ComputedData.spacingX" :col="tListCardx0x1ComputedData.col" :direction="tListCardx0x1ComputedData.direction" :exchange-order="tListCardx0x1ComputedData.exchangeOrder" :unit-break="tListCardx0x1ComputedData.unitBreak" :key-field="tListCardx0x1ComputedData.keyField" :active-key-field="tListCardx0x1ComputedData.activeKeyField" :active="tListCardx0x1ComputedData.active" :c-style="tListCardx0x1ComputedData.cStyle"></t-list-card><t-component id="t-component-b8d0.1425a1628" class="samplePlotBeseInfo-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName" :page-id="tComponentx0x2ComputedData.pageId" :page-code="tComponentx0x2ComputedData.pageCode"></t-component><t-text id="t-text-5bf4.176053b78" class="samplePlotBeseInfo-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle"></t-text><t-component id="t-component-570e.6a3d4a6a6" class="samplePlotBeseInfo-t-component-0-4"  :name="tComponentx0x4ComputedData.name" :c-style="tComponentx0x4ComputedData.cStyle" :src="tComponentx0x4ComputedData.src" :component-name="tComponentx0x4ComputedData.componentName" :page-id="tComponentx0x4ComputedData.pageId" :page-code="tComponentx0x4ComputedData.pageCode"></t-component><t-text id="t-text-681f.d6d360e5e" class="samplePlotBeseInfo-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle"></t-text></div>
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
import { TComponent, TListCard, TText } from '@ths/design';

export default {
  components: {
    TComponent,
    TListCard,
    TText,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-list-card-8de3.e3bd8e7b4":{"attributeName":"tListCardx0x0","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-dd26.ccf66dde6":{"attributeName":"tListCardx0x1","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-b8d0.1425a1628":{"attributeName":"tComponentx0x2","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-5bf4.176053b78":{"attributeName":"tTextx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-component-570e.6a3d4a6a6":{"attributeName":"tComponentx0x4","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-681f.d6d360e5e":{"attributeName":"tTextx0x5","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   featureInformation: [{"title":"植被类型","num":"-"},{"title":"植被群落名称","num":"-"},{"title":"地表特征立枯","num":"-"},{"title":"地表特征砾石","num":"-"},{"title":"地表特征覆沙","num":"-"},{"title":"地表风蚀（坑）","num":"-"},{"title":"地表水蚀(沟)","num":"-"},{"title":"地表特征盐碱斑","num":"-"},{"title":"城乡利用方式","num":"-"},{"title":"森林利用方式","num":"-"},{"title":"利用强度","num":"-"},{"title":"演替阶段天然林","num":"-"},{"title":"林龄人工林","num":"-"}],
   baseInfoData: [{"title":"年份","num":"-"},{"title":"所属区县","num":"-"},{"title":"样地编码","num":"-"},{"title":"检测人","num":"-"},{"title":"记录人","num":"-"},{"title":"样方组数","num":"-"},{"title":"样方总数","num":"-"},{"title":"样方中心点经度","num":"-"},{"title":"样方中心点纬度","num":"-"},{"title":"海拔（m）","num":"-"},{"title":"地形地貌","num":"-"},{"title":"样地面积（长）（㎡）","num":"-"},{"title":"样地面积（宽）（㎡）","num":"-"}],
   type: "",
   pointCode: "",
   year: "",
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
            default: {"width":"100%","height":"262px","position":"unset","left":"0px","top":"341px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"植被类型","num":"-"},{"title":"植被群落名称","num":"-"},{"title":"地表特征立枯","num":"-"},{"title":"地表特征砾石","num":"-"},{"title":"地表特征覆沙","num":"-"},{"title":"地表风蚀（坑）","num":"-"},{"title":"地表水蚀(沟)","num":"-"},{"title":"地表特征盐碱斑","num":"-"},{"title":"城乡利用方式","num":"-"},{"title":"森林利用方式","num":"-"},{"title":"利用强度","num":"-"},{"title":"演替阶段天然林","num":"-"},{"title":"林龄人工林","num":"-"}],
spacingX:2,
col:2,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"100%","height":"262px","position":"unset","left":"0px","top":"341px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"46%","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","height":""}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"69.5%","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px","height":"","alignItems":"center"}},"num":{"default":{"fontSize":"var(--text-size-14)","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"var(--text-size-14)"}}}, 
 },
},
tListCardx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"262px","position":"unset","left":"-1px","top":"32px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"年份","num":"-"},{"title":"所属区县","num":"-"},{"title":"样地编码","num":"-"},{"title":"检测人","num":"-"},{"title":"记录人","num":"-"},{"title":"样方组数","num":"-"},{"title":"样方总数","num":"-"},{"title":"样方中心点经度","num":"-"},{"title":"样方中心点纬度","num":"-"},{"title":"海拔（m）","num":"-"},{"title":"地形地貌","num":"-"},{"title":"样地面积（长）（㎡）","num":"-"},{"title":"样地面积（宽）（㎡）","num":"-"}],
spacingX:2,
col:2,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"100%","height":"262px","position":"unset","left":"-1px","top":"32px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible","height":"auto"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"46%","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","height":""}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"69.5%","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px","height":"","alignItems":"center"}},"num":{"default":{"fontSize":"var(--text-size-14)","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"var(--text-size-14)"}}}, 
 },
},
tComponentx0x2: {
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
tTextx0x3: {
defaultStyle: {
            default: {"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"45px","top":"4px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"基本信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"45px","top":"4px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"}}}, 
 },
},
tComponentx0x4: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"-1px","top":"304px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"-1px","top":"304px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"44px","top":"308px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"特征信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"44px","top":"308px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"}}}, 
 },
},
});
const initPageData = () => {
// 处理参数
// state.monitorTime = global.businessDialog.dialogParmas.monitorTime;
state.year = global.businessDialog.dialogParmas.year;
state.pointCode = global.businessDialog.dialogParmas.point_code || global.businessDialog.dialogParmas.pointCode;
state.type = global.businessDialog.dialogParmas.TYPE || global.businessDialog.dialogParmas.type;


// 获取基本信息接口
apiRegistry.getBaseInfo.request();

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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TYPE":"state.type","POINT_CODE":"state.pointCode","REGION_CODE":"","PARENT_REGION_CODE":"","YEAR":"state.year","REGION_PATH":"","interfaceId":"0b4a642a5f67a994179a71b3ad054a6e"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TYPE":state.type,"POINT_CODE":state.pointCode,"REGION_CODE":"","PARENT_REGION_CODE":"","YEAR":state.year,"REGION_PATH":"","interfaceId":"0b4a642a5f67a994179a71b3ad054a6e"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TYPE":state.type,"POINT_CODE":state.pointCode,"REGION_CODE":"","PARENT_REGION_CODE":"","YEAR":state.year,"REGION_PATH":"","interfaceId":"0b4a642a5f67a994179a71b3ad054a6e"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     // console.log(res);
const { data } = res;
if(data.head.statusCode === '200' && data.data){
  // 基本信息
  // 年份
  state.baseInfoData[0].num = data.data?.year || '-';
  // 所属区县
  state.baseInfoData[1].num = data.data?.region_name || '-';
  // 样地编码
  state.baseInfoData[2].num = data.data?.point_code || '-';
  // 检测人
  state.baseInfoData[3].num = data.data?.record_person || '-';
  // 记录人
  state.baseInfoData[4].num = data.data?.create_user || '-';
  // 样方组数
  state.baseInfoData[5].num = data.data?.sample_group_num || '-';
  // 样方总数
  state.baseInfoData[6].num = data.data?.sample_quadrat_num || '-';
  // 样方中心点经度
  state.baseInfoData[7].num = data.data?.longitude || '-';
  // 样方中心点纬度
  state.baseInfoData[8].num = data.data?.latitude || '-';
  // 海拔（m）
  state.baseInfoData[9].num = data.data?.altitude || '-';
  // 地形地貌
  state.baseInfoData[10].num = data.data?.land_form || '-';
  // 样地面积（长）（㎡）
  state.baseInfoData[11].num = data.data?.legth || '-';
  // 样地面积（宽）（㎡）
  state.baseInfoData[12].num = data.data?.widht || '-';

  // 特征信息
  // 植被类型
  state.featureInformation[0].num = data.data?.zblx || '-';
  // 植被群落名称
  state.featureInformation[1].num = data.data?.zwqlmc || '-';
  // 地表特征立枯
  state.featureInformation[2].num = data.data?.surface_tzlk || '-';
  // 地表特征砾石
  state.featureInformation[3].num = data.data?.surface_tzls || '-';
  // 地表特征覆沙
  state.featureInformation[4].num = data.data?.surface_tzfs || '-';
  // 地表风蚀（坑）
  state.featureInformation[5].num = data.data?.surface_tzssk || '-';
  // 地表水蚀（沟）
  state.featureInformation[6].num = data.data?.surface_tzssg || '-';
  // 地表特征盐碱斑
  state.featureInformation[7].num = data.data?.surface_tzzyjb || '-';
  // 城乡利用方式
  state.featureInformation[8].num = data.data?.city_lyfs || '-';
  // 森林利用方式
  state.featureInformation[9].num = data.data?.forest_lyfs || '-';
  // 利用强度
  state.featureInformation[10].num = data.data?.lyqd || '-';
  // 演替阶段天然林
  state.featureInformation[11].num = data.data?.ytjdtrl || '-';
  // 林龄人工林
  state.featureInformation[12].num = data.data?.rgl || '-';
  
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
                            setPageScale('t-l-c-samplePlotBeseInfo', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-samplePlotBeseInfo', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
initPageData();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tListCardx0x0ComputedData = computed(() => _.merge({}, componentState.tListCardx0x0.default, componentState.tListCardx0x0?.[state.screenSize]));

 const tListCardx0x1ComputedData = computed(() => _.merge({}, componentState.tListCardx0x1.default, componentState.tListCardx0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tComponentx0x4ComputedData = computed(() => _.merge({}, componentState.tComponentx0x4.default, componentState.tComponentx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

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
tListCardx0x1ComputedData,
tComponentx0x2ComputedData,
tTextx0x3ComputedData,
tComponentx0x4ComputedData,
tTextx0x5ComputedData,
};
},
}
</script>

<style scoped>
.t-l-c-samplePlotBeseInfo {
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
background-color: rgba(0,0,0,0);
}
.t-l-c-samplePlotBeseInfo .samplePlotBeseInfo-t-list-card-0-0 {
position: absolute !important;
top: 341px;
left: 0px;
width: 100%;
height: 262px;
pointer-events: auto;
}

.t-l-c-samplePlotBeseInfo .samplePlotBeseInfo-t-list-card-0-1 {
position: absolute !important;
top: 32px;
left: -1px;
width: 100%;
height: 262px;
pointer-events: auto;
}

.t-l-c-samplePlotBeseInfo .samplePlotBeseInfo-t-component-0-2 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 28px;
pointer-events: auto;
}

.t-l-c-samplePlotBeseInfo .samplePlotBeseInfo-t-text-0-3 {
position: absolute !important;
top: 4px;
left: 45px;
width: 130px;
height: 20px;
pointer-events: auto;
}

.t-l-c-samplePlotBeseInfo .samplePlotBeseInfo-t-component-0-4 {
position: absolute !important;
top: 304px;
left: -1px;
width: 100%;
height: 28px;
pointer-events: auto;
}

.t-l-c-samplePlotBeseInfo .samplePlotBeseInfo-t-text-0-5 {
position: absolute !important;
top: 308px;
left: 44px;
width: 130px;
height: 20px;
pointer-events: auto;
}
</style>
