<template>
  <div id="t-l-c-leftBottomLayerHelpPanel" class="t-l-c-leftBottomLayerHelpPanel" ><t-rect id="t-rect-0eb8.e51a48efa" class="leftBottomLayerHelpPanel-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-rect id="t-rect-8334.5080edfdf" class="leftBottomLayerHelpPanel-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-rect id="t-rect-9492.abeb70be2" class="leftBottomLayerHelpPanel-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle" @click="onclick1746537496972"></t-rect><t-list-card id="t-list-card-016c.5c3afc446" class="leftBottomLayerHelpPanel-t-list-card-0-3"  :data="state.layerOverviewData" :spacing-x="tListCardx0x3ComputedData.spacingX" :col="tListCardx0x3ComputedData.col" :direction="tListCardx0x3ComputedData.direction" :exchange-order="tListCardx0x3ComputedData.exchangeOrder" :unit-break="tListCardx0x3ComputedData.unitBreak" :key-field="tListCardx0x3ComputedData.keyField" :active-key-field="tListCardx0x3ComputedData.activeKeyField" :active="tListCardx0x3ComputedData.active" :c-style="tListCardx0x3ComputedData.cStyle"></t-list-card><t-text id="t-text-2eb8.3c6d1dbec" class="leftBottomLayerHelpPanel-t-text-0-4"  :label="state.layerName" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle" :show-title="tTextx0x4ComputedData.showTitle"></t-text><t-list-card id="t-list-card-c4e3.71bc4e1a4" class="leftBottomLayerHelpPanel-t-list-card-0-5"  :data="state.layerRegionData" :spacing-x="tListCardx0x5ComputedData.spacingX" :col="tListCardx0x5ComputedData.col" :direction="tListCardx0x5ComputedData.direction" :exchange-order="tListCardx0x5ComputedData.exchangeOrder" :unit-break="tListCardx0x5ComputedData.unitBreak" :key-field="tListCardx0x5ComputedData.keyField" :active-key-field="tListCardx0x5ComputedData.activeKeyField" :active="tListCardx0x5ComputedData.active" :c-style="tListCardx0x5ComputedData.cStyle"></t-list-card><t-line id="t-line-5c0d.8979b38e2" class="leftBottomLayerHelpPanel-t-line-0-6"  :c-style="tLinex0x6ComputedData.cStyle"></t-line></div>
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
import { TLine, TListCard, TRect, TText } from '@ths/design';

export default {
  components: {
    TLine,
    TListCard,
    TRect,
    TText,
  },
  setup() {
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
   layerInfo: {},
   layerRegionData: [],
   layerOverviewData: [],
   layerName: "图层信息",
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
tRectx0x0: {
defaultStyle: {
            default: {"width":"260px","height":"216px","left":"0px","top":"0px","border-radius":"16px","border":"1px var(--area-font-active-color) solid","background":"rgba(7, 29, 11, 0.95)","border-width":0,"color":"var(--intergrated-query-selector-border-color)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","backgroundColor":"var(--intergrated-query-dialog-background-color)","borderLeft":"1px solid var(--business-strong)","borderTop":"1px solid var(--business-strong)","borderRight":"1px solid var(--business-strong)","borderBottom":"1px solid var(--business-strong)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"260px","height":"216px","left":"0px","top":"0px","border-radius":"16px","border":"1px var(--area-font-active-color) solid","background":"rgba(7, 29, 11, 0.95)","border-width":0,"color":"var(--intergrated-query-selector-border-color)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","backgroundColor":"var(--intergrated-query-dialog-background-color)","borderLeft":"1px solid var(--business-strong)","borderTop":"1px solid var(--business-strong)","borderRight":"1px solid var(--business-strong)","borderBottom":"1px solid var(--business-strong)"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"260px","height":"43px","left":"0px","top":"0px","position":"unset","border-radius":"16px 16px 0px 0px","border-width":0,"background":"rgba(71, 133, 242, 0.28)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"260px","height":"43px","left":"0px","top":"0px","position":"unset","border-radius":"16px 16px 0px 0px","border-width":0,"background":"rgba(71, 133, 242, 0.28)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"24px","height":"24px","left":"228px","top":"10px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-07-26/6057b761635e4e5facfbba3ec1d4d068.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"10px 10px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","border-radius":"2px","border":"1px solid rgba(121, 255, 175, 0.6)","cursor":"pointer","borderLeft":"1px solid var(--intergrated-query-sub-button-border-color)","borderTop":"1px solid var(--intergrated-query-sub-button-border-color)","borderRight":"1px solid var(--intergrated-query-sub-button-border-color)","borderBottom":"1px solid var(--intergrated-query-sub-button-border-color)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","left":"228px","top":"10px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-07-26/6057b761635e4e5facfbba3ec1d4d068.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"10px 10px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","border-radius":"2px","border":"1px solid rgba(121, 255, 175, 0.6)","cursor":"pointer","borderLeft":"1px solid var(--intergrated-query-sub-button-border-color)","borderTop":"1px solid var(--intergrated-query-sub-button-border-color)","borderRight":"1px solid var(--intergrated-query-sub-button-border-color)","borderBottom":"1px solid var(--intergrated-query-sub-button-border-color)"}}}, 
 },
},
tListCardx0x3: {
defaultStyle: {
            default: {"width":"246px","height":"26px","position":"unset","left":"8px","top":"56px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[],
spacingX:4,
col:2,
direction:"horizontal",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"246px","height":"26px","position":"unset","left":"8px","top":"56px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"50px","textAlign":"right","paddingRight":"2px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"2px","paddingBottom":"2px","paddingLeft":"2px"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"84px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"2px","lineHeight":"20px","paddingRight":"2px","paddingTop":"2px","paddingBottom":"2px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"200px","height":"20px","color":"var(--t-font-color-gy1)","position":"unset","left":"16px","top":"12px","fontWeight":"700","overflow":"hidden","textOverflow":"ellipsis","display":"-webkit-box","-webkit-line-clamp":1,"-webkit-box-orient":"vertical","whiteSpace":"normal"},
            
            },
 default: { 
 
label:"图层信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"200px","height":"20px","color":"var(--t-font-color-gy1)","position":"unset","left":"16px","top":"12px","fontWeight":"700","overflow":"hidden","textOverflow":"ellipsis","display":"-webkit-box","-webkit-line-clamp":1,"-webkit-box-orient":"vertical","whiteSpace":"normal"}},"title":{"default":{"fontWeight":"bold","textOverflow":"ellipsis","whiteSpace":"normal"}}},
showTitle:true, 
 },
},
tListCardx0x5: {
defaultStyle: {
            default: {"width":"246px","height":"93px","position":"unset","left":"8px","top":"109px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[],
spacingX:4,
col:2,
direction:"horizontal",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"246px","height":"93px","position":"unset","left":"8px","top":"109px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"52px","textAlign":"right","paddingRight":"2px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"2px","paddingBottom":"2px","paddingLeft":"2px"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"84px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"2px","lineHeight":"20px","paddingRight":"2px","paddingTop":"2px","paddingBottom":"2px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
tLinex0x6: {
defaultStyle: {
            default: {"width":"246px","height":"var(--t-line-border-width)","left":"8px","color":"var(--t-brand9)","position":"unset","top":"95px","borderBottom":"var(--t-line-border-width) var(--t-line-border-style) var(--t-brand7)"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"246px","height":"var(--t-line-border-width)","left":"8px","color":"var(--t-brand9)","position":"unset","top":"95px","borderBottom":"var(--t-line-border-width) var(--t-line-border-style) var(--t-brand7)"}}}, 
 },
},
});
const initLeftBottomLayerHelpData = () => {
const init = () => {
  // 修改图层标题
  state.layerName = global.leftBottomLayerHelpData.leftBottomLayerHelpParam.name || '图层信息';
  state.layerInfo = global.leftBottomLayerHelpData.leftBottomLayerHelpParam || {};

  const {wisdowfileCode, wisdowfileCondition} = state.layerInfo;
  if (!wisdowfileCode) {
    // 调用接口获取数据
    getLayerInfo();
    getLayerRegion();
  } else {
    http({
      'url': `/gdyTag/data/getEnterInfoToMapCount?WISDOWFILE_CODE=${wisdowfileCode}&${wisdowfileCondition}`,
      'method': 'get',
      'baseURL': global.integratedQuery.layerServiceIP,
      'params': {}
    }).then(function (res) {
      // 成功的操作
      state.layerOverviewData = [
        {
          "title": "图层",
          "num": res.data?.data?.total || '--',
          "unit": "个"
        }
      ];
    })['catch'](function (error) {
      // 失败的操作
      console.log(error);
      state.layerOverviewData = [
        {
          "title": "图层",
          "num": "--",
          "unit": "个"
        }
      ];
    });
  }
}

init();

// 监听全局变量改变
watch(() => global.leftBottomLayerHelpData.leftBottomLayerHelpParam, () => {
  init();
});
};
const onclick1746537496972 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'leftBottomLayerHelpData.showLeftBottomLayerHelpPanel',
                    value:false,
                    data: {
                      leftBottomLayerHelpData:{showLeftBottomLayerHelpPanel: false}
                    },
                  });
};
// 接口函数
const getLayerInfo = () => {
return new Promise((resolve, reject) => {
  http({"url":global.integratedQuery.layerServiceContext,"method":"get","baseURL":global.integratedQuery.layerServiceIP,"params":{"LAYER_NAME":state.layerName,"token":"dcp","interfaceId":"e0b9e2e41a82ac22f8d2a7b9669e544a"},}).then((res) => {
     // 成功的操作
     state.layerOverviewData = [
  {
    "title": "数量",
    "num": "--",
    "unit": "个"
  },
  {
    "title": "面积",
    "num": "--",
    "unit": "k㎡"
  }
];

if (res.status === 200) {
  state.layerOverviewData[0].num = res.data.data.LAYER_NUMS ? `${res.data.data.LAYER_NUMS}` : '--';
  state.layerOverviewData[1].num = res.data.data.LAYER_AREAS ? `${res.data.data.LAYER_AREAS}` : '--';
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.layerOverviewData = [
  {
    "title": "数量",
    "num": "--",
    "unit": ""
  },
  {
    "title": "面积",
    "num": "--",
    "unit": ""
  }
];
      reject(error);
    });
  });
};
// 接口函数
const getLayerRegion = () => {
return new Promise((resolve, reject) => {
  http({"url":global.integratedQuery.layerServiceContext,"method":"get","baseURL":global.integratedQuery.layerServiceIP,"params":{"LAYER_NAME":state.layerName,"token":"dcp","interfaceId":"9fe441375e8c161836361f4f958ae132"},}).then((res) => {
     // 成功的操作
     state.layerRegionData = [];

if (res.status === 200 && res.data.data.length) {
  state.layerRegionData = res.data.data.map((item) => ({
    title: item.REGION_NAME || '--',
    num: item.NUM || '--',
    unit: item.REGION_NAME ? '个' : ''
  }));
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.layerRegionData = [];
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-leftBottomLayerHelpPanel', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initLeftBottomLayerHelpData();
onMounted(() => {
setPageScale('t-l-c-leftBottomLayerHelpPanel', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tListCardx0x3ComputedData = computed(() => _.merge({}, componentState.tListCardx0x3.default, componentState.tListCardx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tListCardx0x5ComputedData = computed(() => _.merge({}, componentState.tListCardx0x5.default, componentState.tListCardx0x5?.[state.screenSize]));

 const tLinex0x6ComputedData = computed(() => _.merge({}, componentState.tLinex0x6.default, componentState.tLinex0x6?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tListCardx0x3ComputedData,
tTextx0x4ComputedData,
tListCardx0x5ComputedData,
tLinex0x6ComputedData,
onclick1746537496972,
};
},
}
</script>

<style scoped>
.t-l-c-leftBottomLayerHelpPanel {
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
background-color: rgba(0,0,0,0);
width: 260px;
height: 216px;
}
.t-l-c-leftBottomLayerHelpPanel .leftBottomLayerHelpPanel-t-rect-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 260px;
height: 216px;
pointer-events: auto;
}

.t-l-c-leftBottomLayerHelpPanel .leftBottomLayerHelpPanel-t-rect-0-1 {
position: absolute !important;
top: 0px;
left: 0px;
width: 260px;
height: 43px;
pointer-events: auto;
}

.t-l-c-leftBottomLayerHelpPanel .leftBottomLayerHelpPanel-t-rect-0-2 {
position: absolute !important;
top: 10px;
left: 228px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-leftBottomLayerHelpPanel .leftBottomLayerHelpPanel-t-list-card-0-3 {
position: absolute !important;
top: 56px;
left: 8px;
width: 246px;
height: 26px;
pointer-events: auto;
}

.t-l-c-leftBottomLayerHelpPanel .leftBottomLayerHelpPanel-t-text-0-4 {
position: absolute !important;
top: 12px;
left: 16px;
width: 200px;
height: 20px;
pointer-events: auto;
}

.t-l-c-leftBottomLayerHelpPanel .leftBottomLayerHelpPanel-t-list-card-0-5 {
position: absolute !important;
top: 109px;
left: 8px;
width: 246px;
height: 93px;
pointer-events: auto;
}

.t-l-c-leftBottomLayerHelpPanel .leftBottomLayerHelpPanel-t-line-0-6 {
position: absolute !important;
top: 95px;
left: 8px;
width: 246px;
height: var(--t-line-border-width);
pointer-events: auto;
}
</style>
