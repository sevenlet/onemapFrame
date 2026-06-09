<template>
  <div id="t-l-c-xqyzygjcBaseInfo" class="t-l-c-xqyzygjcBaseInfo" ><t-list-card id="t-list-card-0032.f5836da41" class="xqyzygjcBaseInfo-t-list-card-0-0"  :data="replaceCssVariables(filterData(state.baseInfoData, componentPropBindingMap?.['t-list-card-0032.f5836da41']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x0ComputedData.spacingX" :col="tListCardx0x0ComputedData.col" :direction="tListCardx0x0ComputedData.direction" :exchange-order="tListCardx0x0ComputedData.exchangeOrder" :unit-break="tListCardx0x0ComputedData.unitBreak" :key-field="tListCardx0x0ComputedData.keyField" :active-key-field="tListCardx0x0ComputedData.activeKeyField" :active="tListCardx0x0ComputedData.active" :c-style="tListCardx0x0ComputedData.cStyle"></t-list-card><t-row id="t-row-3a08.d0237ecaa" class="xqyzygjcBaseInfo-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align"><t-rect id="t-rect-5bb5.8a9aa9456" class="xqyzygjcBaseInfo-t-rect-0-1-0"  :tip="tRectx0x1x0ComputedData.tip" :label="tRectx0x1x0ComputedData.label" :active="tRectx0x1x0ComputedData.active" :c-style="tRectx0x1x0ComputedData.cStyle"></t-rect><t-rect id="t-rect-dcd2.7e3d1322e" class="xqyzygjcBaseInfo-t-rect-0-1-1"  :tip="tRectx0x1x1ComputedData.tip" :label="replaceCssVariables(filterData(state.baseInfo.env_procedure, componentPropBindingMap?.['t-rect-dcd2.7e3d1322e']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active="tRectx0x1x1ComputedData.active" :c-style="tRectx0x1x1ComputedData.cStyle"></t-rect></t-row></div>
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
import { TListCard, TRect, TRow } from '@ths/design';

export default {
  components: {
    TListCard,
    TRect,
    TRow,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-list-card-0032.f5836da41":{"attributeName":"tListCardx0x0","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-row-3a08.d0237ecaa":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-rect-5bb5.8a9aa9456":{"attributeName":"tRectx0x1x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-dcd2.7e3d1322e":{"attributeName":"tRectx0x1x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   baseInfo: {"env_procedure":"-"},
   SPOT_CODE: "",
   baseInfoData: [{"title":"养殖场名称","num":"-"},{"title":"图斑编号","num":"-"},{"title":"负责人","num":"-"},{"title":"养殖类型","num":"-"},{"title":"养殖状态","num":"-"},{"title":"环评审批存栏量","num":"-"},{"title":"摸排情况","num":"-"},{"title":"粪污处理设施","num":"-"},{"title":"前时相","num":"-"},{"title":"后时相","num":"-"},{"title":"所属乡镇","num":"-"},{"title":"所属乡村","num":"-"},{"title":"所属区县","num":"-"},{"title":"纬度","num":"-"},{"title":"经度","num":"-"},{"title":"面积(m³)","num":"-"}],
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
            default: {"width":"100%","height":"271px","position":"unset","left":"0px","top":"0px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"养殖场名称","num":"-"},{"title":"图斑编号","num":"-"},{"title":"负责人","num":"-"},{"title":"养殖类型","num":"-"},{"title":"养殖状态","num":"-"},{"title":"环评审批存栏量","num":"-"},{"title":"摸排情况","num":"-"},{"title":"粪污处理设施","num":"-"},{"title":"前时相","num":"-"},{"title":"后时相","num":"-"},{"title":"所属乡镇","num":"-"},{"title":"所属乡村","num":"-"},{"title":"所属区县","num":"-"},{"title":"纬度","num":"-"},{"title":"经度","num":"-"},{"title":"面积(m³)","num":"-"}],
spacingX:2,
col:2,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"100%","height":"271px","position":"unset","left":"0px","top":"0px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"30%","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","height":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"69.5%","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px","height":""}},"num":{"default":{"fontSize":"var(--text-size-14)","color":"rgba(255, 255, 255, 1)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"var(--text-size-14)"}}}, 
 },
},
tRowx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"272px","gap":"auto","paddingLeft":"1px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"272px","gap":"auto","paddingLeft":"1px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tRectx0x1x0: {
defaultStyle: {
            default: {"width":"14.95%","height":"32px","justifyContent":"right","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","position":"unset","left":"80px","top":"302px","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","background":"var(--business-show-bg10)","fillType":"color","textAlign":"right","paddingRight":"10px","lineHeight":"32px"},
            
            },
 default: { 
 
tip:false,
label:"环保手续履行情况",
active:false,
cStyle:{"wrapper":{"default":{"width":"14.95%","height":"32px","justifyContent":"right","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","position":"unset","left":"80px","top":"302px","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","background":"var(--business-show-bg10)","fillType":"color","textAlign":"right","paddingRight":"10px","lineHeight":"32px"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"var(--business-text-avianize)","background":"unset","backgroundClip":"unset","textAlign":"right","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x1x1: {
defaultStyle: {
            default: {"width":"84.8%","height":"32px","justifyContent":"left","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","position":"unset","left":"90px","top":"312px","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","animationName":"","background":"var(--business-show-bg15)","fillType":"color","paddingLeft":"16px","lineHeight":"32px"},
            
            },
 default: { 
 
tip:false,
label:"-",
active:false,
cStyle:{"wrapper":{"default":{"width":"84.8%","height":"32px","justifyContent":"left","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","position":"unset","left":"90px","top":"312px","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","animationName":"","background":"var(--business-show-bg15)","fillType":"color","paddingLeft":"16px","lineHeight":"32px"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"left","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset"}}}, 
 },
},
});
const initPageData = () => {
// 处理参数
state.SPOT_CODE = global.businessDialog.dialogParmas?.TBBH;

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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"SPOT_CODE":"state.SPOT_CODE","interfaceId":"53960efddd028ca128fdf6b96b235ad6"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"SPOT_CODE":state.SPOT_CODE,"interfaceId":"53960efddd028ca128fdf6b96b235ad6"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"SPOT_CODE":state.SPOT_CODE,"interfaceId":"53960efddd028ca128fdf6b96b235ad6"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     const { data } = res.data;
if (data.length) {
  // 养殖场名称
  state.baseInfoData[0].num = data[0]?.farm_name || '-';
  // 图斑编号
  state.baseInfoData[1].num = data[0]?.spot_code || '-';
  // 负责人
  state.baseInfoData[2].num = data[0]?.responsible_person || '-';
  // 养殖类型
  state.baseInfoData[3].num = data[0]?.farm_type || '-';
  // 养殖状态
  state.baseInfoData[4].num = data[0]?.farm_status || '-';
  // 环评审批存栏量
  state.baseInfoData[5].num = data[0]?.eia_approval_stock || '-';
  // 摸排情况
  state.baseInfoData[6].num = data[0]?.Investigate_status || '-';
  // 粪污处理设施
  state.baseInfoData[7].num = data[0]?.manure_treatment || '-';
  // 前时相
  state.baseInfoData[8].num = data[0]?.pre_phase || '-';
  // 后时相
  state.baseInfoData[9].num = data[0]?.post_phase || '-';
  // 所属乡镇
  state.baseInfoData[10].num = data[0]?.town_name || '-';
  // 所属乡村
  state.baseInfoData[11].num = data[0]?.village_name || '-';
  // 所属区县
  state.baseInfoData[12].num = data[0]?.district_name || '-';
  // 纬度
  state.baseInfoData[13].num = data[0]?.latitude || '-';
  // 经度
  state.baseInfoData[14].num = data[0]?.longitude || '-';
  // 面积
  state.baseInfoData[15].num = data[0]?.area || '-';
  state.baseInfo = data[0]
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
                            setPageScale('t-l-c-xqyzygjcBaseInfo', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPageData();
onMounted(() => {
setPageScale('t-l-c-xqyzygjcBaseInfo', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tListCardx0x0ComputedData = computed(() => _.merge({}, componentState.tListCardx0x0.default, componentState.tListCardx0x0?.[state.screenSize]));

 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tRectx0x1x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x1x0.default, componentState.tRectx0x1x0?.[state.screenSize]));

 const tRectx0x1x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1x1.default, componentState.tRectx0x1x1?.[state.screenSize]));

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
tRowx0x1ComputedData,
tRectx0x1x0ComputedData,
tRectx0x1x1ComputedData,
};
},
}
</script>

<style scoped>
.t-l-c-xqyzygjcBaseInfo {
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
.t-l-c-xqyzygjcBaseInfo .xqyzygjcBaseInfo-t-list-card-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 271px;
pointer-events: auto;
}

.t-l-c-xqyzygjcBaseInfo .xqyzygjcBaseInfo-t-row-0-1 {
position: absolute !important;
top: 272px;
left: 0px;
width: 100%;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: space-between;
align-items: center;
gap: auto;
padding-left: 1px;
}

.t-l-c-xqyzygjcBaseInfo .xqyzygjcBaseInfo-t-rect-0-1-0 {
position: unset;
top: 302px;
left: 80px;
width: 14.95%;
height: 32px;
pointer-events: auto;
}

.t-l-c-xqyzygjcBaseInfo .xqyzygjcBaseInfo-t-rect-0-1-1 {
position: unset;
top: 312px;
left: 90px;
width: 84.8%;
height: 32px;
pointer-events: auto;
}
</style>
