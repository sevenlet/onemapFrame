<template>
  <div id="t-l-c-zhcxLayerDetailOnMenu" class="t-l-c-zhcxLayerDetailOnMenu" ><t-rect id="t-rect-7f6d.f68c6ee65" class="zhcxLayerDetailOnMenu-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-rect id="t-rect-e5ee.fb1b5f0aa" class="zhcxLayerDetailOnMenu-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle"></t-rect><t-image-base id="t-image-base-391f.0550b0bf5" class="zhcxLayerDetailOnMenu-t-image-base-0-3"  :src="tImageBasex0x3ComputedData.src" :fit="tImageBasex0x3ComputedData.fit" :c-style="tImageBasex0x3ComputedData.cStyle"></t-image-base><t-rect id="t-rect-0090.dfbcd0634" class="zhcxLayerDetailOnMenu-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @click="onclick1721979040344"></t-rect><t-list-card id="t-list-card-433e.f8a2f77f7" class="zhcxLayerDetailOnMenu-t-list-card-0-5"  :data="state.layerCardData" :spacing-x="tListCardx0x5ComputedData.spacingX" :col="tListCardx0x5ComputedData.col" :direction="tListCardx0x5ComputedData.direction" :exchange-order="tListCardx0x5ComputedData.exchangeOrder" :unit-break="tListCardx0x5ComputedData.unitBreak" :key-field="tListCardx0x5ComputedData.keyField" :active-key-field="tListCardx0x5ComputedData.activeKeyField" :active="tListCardx0x5ComputedData.active" :c-style="tListCardx0x5ComputedData.cStyle"></t-list-card><t-text id="t-text-1228.a8b4ee26b" class="zhcxLayerDetailOnMenu-t-text-0-6"  :label="state.LAYER_NAME" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle"></t-text><t-text id="t-text-eea9.e4e2dde29" class="zhcxLayerDetailOnMenu-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle"></t-text><t-list-card id="t-list-card-a721.071850416" class="zhcxLayerDetailOnMenu-t-list-card-0-8"  :data="state.regionCardData" :spacing-x="tListCardx0x8ComputedData.spacingX" :col="tListCardx0x8ComputedData.col" :direction="tListCardx0x8ComputedData.direction" :exchange-order="tListCardx0x8ComputedData.exchangeOrder" :unit-break="tListCardx0x8ComputedData.unitBreak" :key-field="tListCardx0x8ComputedData.keyField" :active-key-field="tListCardx0x8ComputedData.activeKeyField" :active="tListCardx0x8ComputedData.active" :c-style="tListCardx0x8ComputedData.cStyle"></t-list-card></div>
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
import { TImageBase, TListCard, TRect, TText } from '@ths/design';

export default {
  components: {
    TImageBase,
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
   regionCardData: [],
   layerCardData: [],
   LAYER_NAME: "",
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
tRectx0x1: {
defaultStyle: {
            default: {"width":"450px","height":"400px","position":"unset","left":"741px","top":"267px","border-radius":"16px","background":"rgba(7, 29, 11, 0.95)","border-width":0,"color":"var(--intergrated-query-selector-border-color)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","backgroundColor":"var(--intergrated-query-dialog-background-color)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"400px","position":"unset","left":"741px","top":"267px","border-radius":"16px","background":"rgba(7, 29, 11, 0.95)","border-width":0,"color":"var(--intergrated-query-selector-border-color)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","backgroundColor":"var(--intergrated-query-dialog-background-color)"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"450px","height":"45px","position":"unset","left":"741px","top":"268px","border-radius":"16px 16px 0px 0px","border-width":0,"background":"var(--intergrated-query-dialog-title-bg)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"45px","position":"unset","left":"741px","top":"268px","border-radius":"16px 16px 0px 0px","border-width":0,"background":"var(--intergrated-query-dialog-title-bg)"}}}, 
 },
},
tImageBasex0x3: {
defaultStyle: {
            default: {"width":"24px","height":"24px","position":"unset","left":"752px","top":"278px"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-07-26/aa0899554a6c437db802092b14b0a80b.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","position":"unset","left":"752px","top":"278px"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"24px","height":"24px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-07-26/6057b761635e4e5facfbba3ec1d4d068.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"10px 10px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"1153px","top":"279px","border-radius":"2px","border":"1px solid rgba(121, 255, 175, 0.6)","cursor":"pointer","borderLeft":"1px solid var(--intergrated-query-sub-button-border-color)","borderTop":"1px solid var(--intergrated-query-sub-button-border-color)","borderRight":"1px solid var(--intergrated-query-sub-button-border-color)","borderBottom":"1px solid var(--intergrated-query-sub-button-border-color)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-07-26/6057b761635e4e5facfbba3ec1d4d068.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"10px 10px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"1153px","top":"279px","border-radius":"2px","border":"1px solid rgba(121, 255, 175, 0.6)","cursor":"pointer","borderLeft":"1px solid var(--intergrated-query-sub-button-border-color)","borderTop":"1px solid var(--intergrated-query-sub-button-border-color)","borderRight":"1px solid var(--intergrated-query-sub-button-border-color)","borderBottom":"1px solid var(--intergrated-query-sub-button-border-color)"},"hover":{"opacity":"80% !important"}}}, 
 },
},
tListCardx0x5: {
defaultStyle: {
            default: {"width":"410px","height":"70px","position":"unset","left":"761px","top":"336px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"410px","height":"70px","position":"unset","left":"761px","top":"336px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"144px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"264px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"361px","height":"19px","color":"var(--intergrated-query-font-color)","position":"unset","left":"784px","top":"279px","font-size":"18px","text-shadow":"0px 0px 6px rgba(17, 214, 104, 0.62)","font-weight":"bold"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"361px","height":"19px","color":"var(--intergrated-query-font-color)","position":"unset","left":"784px","top":"279px","font-size":"18px","text-shadow":"0px 0px 6px rgba(17, 214, 104, 0.62)","font-weight":"bold"}}}, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"88px","height":"17px","color":"rgba(255, 255, 255, 0.9)","top":"423px","left":"761px","fontSize":"16px","position":"unset"},
            
            },
 default: { 
 
label:"行政区统计",
editable:false,
cStyle:{"wrapper":{"default":{"width":"88px","height":"17px","color":"rgba(255, 255, 255, 0.9)","top":"423px","left":"761px","fontSize":"16px","position":"unset"}}}, 
 },
},
tListCardx0x8: {
defaultStyle: {
            default: {"width":"410px","height":"auto","position":"unset","left":"761px","top":"454px","overflow":"auto","animationName":"","display":"flex","flexDirection":"column","alignItems":"flex-start","justifyContent":"flex-start","flexWrap":"nowrap","max-height":"180px","min-height":"20px"},
            
            },
 default: { 
 
data:[],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"410px","height":"auto","position":"unset","left":"761px","top":"454px","overflow":"auto","animationName":"","display":"flex","flexDirection":"column","alignItems":"flex-start","justifyContent":"flex-start","flexWrap":"nowrap","max-height":"180px","min-height":"20px"}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"144px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"264px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
});
const getDialogParams = () => {
console.log(636, 'zhcxLayerDetailOnMenu 图层信息', global.businessDialog);

state.LAYER_NAME = global.businessDialog.dialogParmas.name || '图层信息';
console.log(636, state.LAYER_NAME);

getLayerInfo();
getLayerRegion();

// {
//     "layerId": "1类区",
//     "visible": "1",
//     "libraryId": "dbae7b86e6244edb987fa85a378aa679",
//     "name": "1类区",
//     "parentId": "5224902617054e439405c2ea4abb6845",
//     "hasDialog": true
// }
};
const onclick1721979040344 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogName',
                    value:'',
                    data: {
                      businessDialog:{dialogName: ''}
                    },
                  });
};
// 接口函数
const getLayerInfo = () => {
return new Promise((resolve, reject) => {
  http({"url":global.integratedQuery.layerServiceContext,"method":"get","baseURL":global.integratedQuery.layerServiceIP,"params":{"LAYER_NAME":state.LAYER_NAME,"token":"dcp","interfaceId":"e0b9e2e41a82ac22f8d2a7b9669e544a"},}).then((res) => {
     // 成功的操作
     console.log(917, '图层信息', res);

state.layerCardData = [
  {
    "title": "图层总数",
    "num": "--"
  },
  {
    "title": "图层总面积",
    "num": "--"
  }
];

if (res.status === 200) {
  state.layerCardData[0].num = res.data.data.LAYER_NUMS ? `${res.data.data.LAYER_NUMS}个` : '--';
  state.layerCardData[1].num = res.data.data.LAYER_AREAS ? `${res.data.data.LAYER_AREAS}㎡` : '--';
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.layerCardData = [
  {
    "title": "图层总数",
    "num": "--"
  },
  {
    "title": "图层总面积",
    "num": "--"
  }
];
      reject(error);
    });
  });
};
// 接口函数
const getLayerRegion = () => {
return new Promise((resolve, reject) => {
  http({"url":global.integratedQuery.layerServiceContext,"method":"get","baseURL":global.integratedQuery.layerServiceIP,"params":{"LAYER_NAME":state.LAYER_NAME,"token":"dcp","interfaceId":"9fe441375e8c161836361f4f958ae132"},}).then((res) => {
     // 成功的操作
     console.log(917, '行政区信息', res);

state.regionCardData = [];

if (res.status === 200 && res.data.data.length) {
  state.regionCardData = res.data.data.map((item) => ({
    title: item.REGION_NAME || '--',
    num: item.NUM || '--',
  }));
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.regionCardData = [];
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-zhcxLayerDetailOnMenu', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getDialogParams();
onMounted(() => {
setPageScale('t-l-c-zhcxLayerDetailOnMenu', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tImageBasex0x3ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x3.default, componentState.tImageBasex0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tListCardx0x5ComputedData = computed(() => _.merge({}, componentState.tListCardx0x5.default, componentState.tListCardx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tListCardx0x8ComputedData = computed(() => _.merge({}, componentState.tListCardx0x8.default, componentState.tListCardx0x8?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tImageBasex0x3ComputedData,
tRectx0x4ComputedData,
tListCardx0x5ComputedData,
tTextx0x6ComputedData,
tTextx0x7ComputedData,
tListCardx0x8ComputedData,
onclick1721979040344,
};
},
}
</script>

<style scoped>
.t-l-c-zhcxLayerDetailOnMenu {
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
width: 1920px;
height: 1080px;
background-color: rgba(0,0,0,0);
}
.t-l-c-zhcxLayerDetailOnMenu .zhcxLayerDetailOnMenu-t-rect-0-1 {
position: absolute !important;
top: 267px;
left: 741px;
width: 450px;
height: 400px;
pointer-events: auto;
}

.t-l-c-zhcxLayerDetailOnMenu .zhcxLayerDetailOnMenu-t-rect-0-2 {
position: absolute !important;
top: 268px;
left: 741px;
width: 450px;
height: 45px;
pointer-events: auto;
}

.t-l-c-zhcxLayerDetailOnMenu .zhcxLayerDetailOnMenu-t-image-base-0-3 {
position: absolute !important;
top: 278px;
left: 752px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-zhcxLayerDetailOnMenu .zhcxLayerDetailOnMenu-t-rect-0-4 {
position: absolute !important;
top: 279px;
left: 1153px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-zhcxLayerDetailOnMenu .zhcxLayerDetailOnMenu-t-list-card-0-5 {
position: absolute !important;
top: 336px;
left: 761px;
width: 410px;
height: 70px;
pointer-events: auto;
}

.t-l-c-zhcxLayerDetailOnMenu .zhcxLayerDetailOnMenu-t-text-0-6 {
position: absolute !important;
top: 279px;
left: 784px;
width: 361px;
height: 19px;
pointer-events: auto;
}

.t-l-c-zhcxLayerDetailOnMenu .zhcxLayerDetailOnMenu-t-text-0-7 {
position: absolute !important;
top: 423px;
left: 761px;
width: 88px;
height: 17px;
pointer-events: auto;
}

.t-l-c-zhcxLayerDetailOnMenu .zhcxLayerDetailOnMenu-t-list-card-0-8 {
position: absolute !important;
top: 454px;
left: 761px;
width: 410px;
height: auto;
pointer-events: auto;
}
</style>
