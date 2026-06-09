<template>
  <div id="t-l-c-mainRoadOverviewSite" class="t-l-c-mainRoadOverviewSite" ><t-rect id="t-rect-4367.90eb8e485" class="mainRoadOverviewSite-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-text id="t-text-76c9.204328df1" class="mainRoadOverviewSite-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle"></t-text><t-text id="t-text-1a48.32758ea27" class="mainRoadOverviewSite-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle"></t-text><t-rect id="t-rect-2b91.483820738" class="mainRoadOverviewSite-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle"></t-rect><t-text id="t-text-091a.f0c3d838c" class="mainRoadOverviewSite-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle"></t-text><t-rect id="t-rect-ad7d.bd1fec294" class="mainRoadOverviewSite-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle" @click="onclick1747891159980"></t-rect><t-text id="t-text-860b.3d2e575fc" class="mainRoadOverviewSite-t-text-0-6"  :label="replaceCssVariables(state.total, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle"></t-text><t-text id="t-text-3b2e.48261c674" class="mainRoadOverviewSite-t-text-0-7"  :label="replaceCssVariables(state.kcTotal, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle"></t-text><t-text id="t-text-ab5f.a6282b089" class="mainRoadOverviewSite-t-text-0-8"  :label="tTextx0x8ComputedData.label" :editable="tTextx0x8ComputedData.editable" :c-style="tTextx0x8ComputedData.cStyle"></t-text><t-text id="t-text-5486.3aebc0a" class="mainRoadOverviewSite-t-text-0-9"  :label="tTextx0x9ComputedData.label" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle"></t-text><t-text id="t-text-d45e.d49726fc9" class="mainRoadOverviewSite-t-text-0-10"  :label="replaceCssVariables(state.ROAD_NAME, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x10ComputedData.editable" :c-style="tTextx0x10ComputedData.cStyle"></t-text><t-text id="t-text-131a.df06390fb" class="mainRoadOverviewSite-t-text-0-11"  :label="replaceCssVariables(state.hcTotal, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x11ComputedData.editable" :c-style="tTextx0x11ComputedData.cStyle"></t-text><t-checkbox id="t-checkbox-a30f.90bffdf93" class="mainRoadOverviewSite-t-checkbox-0-12"  :data="replaceCssVariables(state.filterTypeList, global?.theme || global?.activeTheme || '默认主题')" :active="replaceCssVariables(state.filterCarType, global?.theme || global?.activeTheme || '默认主题')" :data-alias="tCheckboxx0x12ComputedData.dataAlias" :border="tCheckboxx0x12ComputedData.border" :use-button="tCheckboxx0x12ComputedData.useButton" :c-style="tCheckboxx0x12ComputedData.cStyle" @change="onchange1747877382357"></t-checkbox><t-checkbox id="t-checkbox-ae01.36e75ea5" class="mainRoadOverviewSite-t-checkbox-0-13"  :data="replaceCssVariables(state.emissionStandardList, global?.theme || global?.activeTheme || '默认主题')" :active="replaceCssVariables(state.emissionCarType, global?.theme || global?.activeTheme || '默认主题')" :data-alias="tCheckboxx0x13ComputedData.dataAlias" :border="tCheckboxx0x13ComputedData.border" :use-button="tCheckboxx0x13ComputedData.useButton" :c-style="tCheckboxx0x13ComputedData.cStyle" @change="onchange1747877413692"></t-checkbox><t-checkbox id="t-checkbox-5eae.314975d45" class="mainRoadOverviewSite-t-checkbox-0-14"  :data="replaceCssVariables(state.localList, global?.theme || global?.activeTheme || '默认主题')" :active="replaceCssVariables(state.localCarType, global?.theme || global?.activeTheme || '默认主题')" :data-alias="tCheckboxx0x14ComputedData.dataAlias" :border="tCheckboxx0x14ComputedData.border" :use-button="tCheckboxx0x14ComputedData.useButton" :c-style="tCheckboxx0x14ComputedData.cStyle" @change="onchange1747877440925"></t-checkbox><t-checkbox id="t-checkbox-a462.a3c6db9ef" class="mainRoadOverviewSite-t-checkbox-0-15"  :data="replaceCssVariables(state.totalList, global?.theme || global?.activeTheme || '默认主题')" :active="replaceCssVariables(state.totalType, global?.theme || global?.activeTheme || '默认主题')" :data-alias="tCheckboxx0x15ComputedData.dataAlias" :border="tCheckboxx0x15ComputedData.border" :use-button="tCheckboxx0x15ComputedData.useButton" :c-style="tCheckboxx0x15ComputedData.cStyle" @change="onchange1751607939803_0_0"></t-checkbox><t-tabs-base id="t-tabs-base-e086.575c0b576" class="mainRoadOverviewSite-t-tabs-base-0-16"  :data="tTabsBasex0x16ComputedData.data" :space="tTabsBasex0x16ComputedData.space" :selected-tab-val="replaceCssVariables(state.timeType, global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x16ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x16ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x16ComputedData.alias" :c-style="tTabsBasex0x16ComputedData.cStyle" @tab-click="ontabClick1747887738768"></t-tabs-base><t-chart-design v-if="state.isShow === true" id="t-chart-design-dc03.7baf51c1c" class="mainRoadOverviewSite-t-chart-design-0-17"  :empty-img="tChartDesignx0x17ComputedData.emptyImg" :c-style="tChartDesignx0x17ComputedData.cStyle" :options="replaceCssVariables(state.options, global?.theme || global?.activeTheme || '默认主题')"></t-chart-design><t-text id="t-text-7544.242474672" class="mainRoadOverviewSite-t-text-0-18"  :label="tTextx0x18ComputedData.label" :editable="tTextx0x18ComputedData.editable" :c-style="tTextx0x18ComputedData.cStyle"></t-text><t-text id="t-text-cf51.75e64e917" class="mainRoadOverviewSite-t-text-0-19"  :label="tTextx0x19ComputedData.label" :editable="tTextx0x19ComputedData.editable" :c-style="tTextx0x19ComputedData.cStyle"></t-text><t-text id="t-text-ee4e.7133337e3" class="mainRoadOverviewSite-t-text-0-20"  :label="tTextx0x20ComputedData.label" :editable="tTextx0x20ComputedData.editable" :c-style="tTextx0x20ComputedData.cStyle"></t-text><t-text id="t-text-6f20.d9d49176d" class="mainRoadOverviewSite-t-text-0-21"  :label="tTextx0x21ComputedData.label" :editable="tTextx0x21ComputedData.editable" :c-style="tTextx0x21ComputedData.cStyle"></t-text></div>
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
import { TChartDesign, TCheckbox, TRect, TTabsBase, TText } from '@ths/design';

export default {
  components: {
    TChartDesign,
    TCheckbox,
    TRect,
    TTabsBase,
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
   isShow: true,
   cardType4: "",
   totalList: [],
   totalType: [],
   kcTotal: "",
   hcTotal: "",
   monthTime: "",
   total: "",
   lastCarType: [],
   options: {},
   ROAD_NAME: "",
   MONITORTIME: "",
   ROAD_ID: "440604511404849",
   cardType3: "",
   cardType2: "",
   cardType1: "",
   emissionCarType: [],
   filterCarType: [],
   localCarType: [],
   localList: [],
   emissionStandardList: [],
   filterTypeList: [],
   timeType: "hour",
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
            default: {"width":"1000px","height":"712px","position":"unset","left":"468px","top":"197px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"712px","position":"unset","left":"468px","top":"197px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"492px","top":"263px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"道路名称",
editable:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"492px","top":"263px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"492px","top":"300px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"货车总量",
editable:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"492px","top":"300px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"1000px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"468px","top":"197px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"468px","top":"197px","animationName":""}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"194px","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"487px","top":"211px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":""},
            
            },
 default: { 
 
label:"道路车流量",
editable:false,
cStyle:{"wrapper":{"default":{"width":"194px","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"487px","top":"211px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":""}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1420px","top":"208px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1420px","top":"208px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"1093px","top":"263px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"1093px","top":"263px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px"}}}, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"1093px","top":"300px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"1093px","top":"300px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px"}}}, 
 },
},
tTextx0x8: {
defaultStyle: {
            default: {"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"971px","top":"263px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"总量",
editable:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"971px","top":"263px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"971px","top":"300px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"客车总量",
editable:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"971px","top":"300px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x10: {
defaultStyle: {
            default: {"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"614px","top":"263px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"614px","top":"263px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px","animationName":""}}}, 
 },
},
tTextx0x11: {
defaultStyle: {
            default: {"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"614px","top":"300px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"614px","top":"300px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px","animationName":""}}}, 
 },
},
tCheckboxx0x12: {
defaultStyle: {
            default: {"display":"flex","alignItems":"flex-start","justifyContent":"flex-start","width":"886px","height":"44px","position":"unset","left":"562px","top":"350px","animationName":""},
            
            },
 default: { 
 
data:[],
active:[],
dataAlias:{"label":"label","value":"value","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"flex-start","justifyContent":"flex-start","width":"886px","height":"44px","position":"unset","left":"562px","top":"350px","animationName":""}},"rectangle":{"active":{"background":"var(--business-btn-active)","borderLeft":"1px none var(--business-theme)","borderTop":"1px none var(--business-theme)","borderRight":"1px none var(--business-theme)","borderBottom":"1px none var(--business-theme)"},"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"icon":{"default":{"left":"5px","top":"2px"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"8px"}}}, 
 },
},
tCheckboxx0x13: {
defaultStyle: {
            default: {"display":"flex","alignItems":"flex-start","justifyContent":"flex-start","width":"955px","height":"51px","position":"unset","left":"562px","top":"382px","animationName":""},
            
            },
 default: { 
 
data:[],
active:[],
dataAlias:{"label":"label","value":"value","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"flex-start","justifyContent":"flex-start","width":"955px","height":"51px","position":"unset","left":"562px","top":"382px","animationName":""}},"rectangle":{"active":{"background":"var(--business-btn-active)","borderLeft":"1px none var(--business-theme)","borderTop":"1px none var(--business-theme)","borderRight":"1px none var(--business-theme)","borderBottom":"1px none var(--business-theme)"},"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"icon":{"default":{"left":"5px","top":"2px"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"8px"}}}, 
 },
},
tCheckboxx0x14: {
defaultStyle: {
            default: {"display":"flex","alignItems":"flex-start","justifyContent":"flex-start","width":"954px","height":"52px","position":"unset","left":"562px","top":"416px","animationName":""},
            
            },
 default: { 
 
data:[],
active:[],
dataAlias:{"label":"label","value":"value","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"flex-start","justifyContent":"flex-start","width":"954px","height":"52px","position":"unset","left":"562px","top":"416px","animationName":""}},"rectangle":{"active":{"background":"var(--business-btn-active)","borderLeft":"1px none var(--business-theme)","borderTop":"1px none var(--business-theme)","borderRight":"1px none var(--business-theme)","borderBottom":"1px none var(--business-theme)"},"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"icon":{"default":{"left":"5px","top":"2px"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"8px"}}}, 
 },
},
tCheckboxx0x15: {
defaultStyle: {
            default: {"display":"flex","alignItems":"flex-start","justifyContent":"flex-start","width":"904px","height":"52px","position":"unset","left":"562px","top":"447px","animationName":""},
            
            },
 default: { 
 
data:[],
active:[],
dataAlias:{"label":"label","value":"value","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"flex-start","justifyContent":"flex-start","width":"904px","height":"52px","position":"unset","left":"562px","top":"447px","animationName":""}},"rectangle":{"active":{"background":"var(--business-btn-active)","borderLeft":"1px none var(--business-theme)","borderTop":"1px none var(--business-theme)","borderRight":"1px none var(--business-theme)","borderBottom":"1px none var(--business-theme)"},"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"icon":{"default":{"left":"5px","top":"2px"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"8px"}}}, 
 },
},
tTabsBasex0x16: {
defaultStyle: {
            default: {"width":"183px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","position":"unset","left":"492px","top":"479px","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset"},
            
            },
 default: { 
 
data:[{"label":"小时","value":"hour"},{"label":"日","value":"day"},{"label":"月","value":"month"}],
space:0,
selectedTabVal:"hour",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":"disabled"},
cStyle:{"wrapper":{"default":{"width":"183px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","position":"unset","left":"492px","top":"479px","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset"}},"itemWrapper":{"default":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","backgroundColor":"rgba(0, 61, 155, 0)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","width":"120px","height":"32px","fontSize":"14px","lineHeight":"32px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","borderLeft":"1px solid rgba(0,61,155,0)","borderTop":"1px solid rgba(0,61,155,0)","borderRight":"1px solid rgba(0,61,155,0)","borderBottom":"1px solid rgba(0,61,155,0)","color":"var(--business-text-avianize)"},"active":{"background":"var(--business-tab-third-active-fill)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","backgroundColor":"rgba(3, 12, 52, 0)","borderLeft":"1px solid var(--business-tab-third-active-border)","borderTop":"1px solid var(--business-tab-third-active-border)","borderRight":"1px solid var(--business-tab-third-active-border)","borderBottom":"1px solid var(--business-tab-third-active-border)","box-shadow":"var(--business-tab-third-active-shadow) 0px 0px 18px 0px inset","color":"var(--business-tab-third-active-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","height":"32px"},"hover":{"backgroundColor":"rgba(0, 61, 155, 0)","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","borderLeft":"1px solid rgba(255,255,255,0)","borderTop":"1px solid rgba(255,255,255,0)","borderRight":"1px solid rgba(255,255,255,0)","borderBottom":"1px solid rgba(255,255,255,0)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","color":"var(--business-tab-third-active-border)"}}}, 
 },
},
tChartDesignx0x17: {
defaultStyle: {
            default: {"height":"333px","width":"954px","position":"unset","left":"494px","top":"536px"},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"333px","width":"954px","position":"unset","left":"494px","top":"536px"}},"emptyText":{"default":{"color":"#fff"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
tTextx0x18: {
defaultStyle: {
            default: {"width":"62px","height":"19px","color":"var(--t-font-color-gy1)","position":"unset","left":"517px","top":"350px"},
            
            },
 default: { 
 
label:"车型：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"62px","height":"19px","color":"var(--t-font-color-gy1)","position":"unset","left":"517px","top":"350px"}}}, 
 },
},
tTextx0x19: {
defaultStyle: {
            default: {"width":"96px","height":"19px","color":"var(--t-font-color-gy1)","position":"unset","left":"485px","top":"382px","animationName":""},
            
            },
 default: { 
 
label:"排放标准：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"19px","color":"var(--t-font-color-gy1)","position":"unset","left":"485px","top":"382px","animationName":""}}}, 
 },
},
tTextx0x20: {
defaultStyle: {
            default: {"width":"96px","height":"19px","color":"var(--t-font-color-gy1)","position":"unset","left":"501px","top":"416px","animationName":""},
            
            },
 default: { 
 
label:"注册地：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"19px","color":"var(--t-font-color-gy1)","position":"unset","left":"501px","top":"416px","animationName":""}}}, 
 },
},
tTextx0x21: {
defaultStyle: {
            default: {"width":"53px","height":"19px","color":"var(--t-font-color-gy1)","position":"unset","left":"516px","top":"447px","animationName":""},
            
            },
 default: { 
 
label:"总量：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"53px","height":"19px","color":"var(--t-font-color-gy1)","position":"unset","left":"516px","top":"447px","animationName":""}}}, 
 },
},
});
const handleFilterTypeChange = () => {
state.cardType1 = state.filterCarType.filter(item => item !== '1').join(',')
const allCarTypeList = [
  ...state.filterTypeList,
  ...state.localList,
  ...state.emissionStandardList,
  ...state.totalList,
].map(item => item.value)

// 获取所有勾选的车辆类型
const carTypeList = [...state.filterCarType, ...state.emissionCarType, ...state.localCarType, ...state.totalType].map(type => {
    return  type === 'False' ? '外地车' : type === 'True' ? '本地车' : type
});

const removedTypes = allCarTypeList.filter(type => !carTypeList.includes(type));

// 从series中移除取消勾选的类型
if (removedTypes.length && state.options.series) {
    state.options.series = state.options.series.filter(series => 
        !removedTypes.includes(series.name)
    );
    state.isShow = false;
    setTimeout(() => {
        state.isShow = true;
    })
}
if(!state.filterCarType.length) {
  state.isShow = false;
  setTimeout(() => {
      state.isShow = true;
  })
  return;
};
if(state.timeType === 'hour') {
  getFilterTypeDataByHour();
} else if (state.timeType === 'day') {
  getFilterTypeDataByDay();
} else {
  getFilterTypeDataByMonth();
}
};
const handleEmissionTypeChange = () => {
state.cardType2 = state.emissionCarType.filter(item => item !== '1').join(',')
const allCarTypeList = [
  ...state.filterTypeList,
  ...state.localList,
  ...state.emissionStandardList,
  ...state.totalList,
].map(item => item.value)

// 获取所有勾选的车辆类型
const carTypeList = [...state.filterCarType, ...state.emissionCarType, ...state.localCarType, ...state.totalType].map(type => {
    return  type === 'False' ? '外地车' : type === 'True' ? '本地车' : type
});

const removedTypes = allCarTypeList.filter(type => !carTypeList.includes(type));
// 从series中移除取消勾选的类型
if (removedTypes.length && state.options.series) {
    state.options.series = state.options.series.filter(series => 
        !removedTypes.includes(series.name)
    );
    state.isShow = false;
    setTimeout(() => {
        state.isShow = true;
    })
}
if(!state.emissionCarType.length){
  state.isShow = false;
  setTimeout(() => {
      state.isShow = true;
  })
  return;
};
if(state.timeType === 'hour') {
  getEmissionStandardDataByHour();
} else if (state.timeType === 'day') {
  getEmissionStandardDataByDay();
} else {
  getEmissionStandardDataByMonth();
}
};
const handleLocalTypeChange = () => {
state.cardType3 = state.localCarType.filter(item => item !== '1').join(',')
const allCarTypeList = [
  ...state.filterTypeList,
  ...state.localList,
  ...state.emissionStandardList,
  ...state.totalList,
].map(item => item.value)

// 获取所有勾选的车辆类型
const carTypeList = [...state.filterCarType, ...state.emissionCarType, ...state.localCarType, ...state.totalType].map(type => {
    return  type === 'False' ? '外地车' : type === 'True' ? '本地车' : type
});

const removedTypes = allCarTypeList.filter(type => !carTypeList.includes(type));
// 从series中移除取消勾选的类型
if (removedTypes.length && state.options.series) {
    state.options.series = state.options.series.filter(series => 
        !removedTypes.includes(series.name)
    );
    state.isShow = false;
    setTimeout(() => {
        state.isShow = true;
    })
}
if(!state.localCarType.length) {
  state.isShow = false;
  setTimeout(() => {
      state.isShow = true;
  })
  return;
};
if(state.timeType === 'hour') {
  getLocalDataByHour();
} else if (state.timeType === 'day') {
  getLocalDataByDay();
} else {
  getLocalDataByMonth();
}
};
const handleTimeTypeChange = () => {
if(state.timeType === 'hour') {
   getFilterTypeDataByHour();
   getEmissionStandardDataByHour();
   getLocalDataByHour();
   getTotalTypeDataByHour();
} else if(state.timeType === 'day') {
   getFilterTypeDataByDay();
   getEmissionStandardDataByDay();
   getLocalDataByDay();
   getTotalTypeDataByDay();
} else {
   getFilterTypeDataByMonth();
   getEmissionStandardDataByMonth();
   getLocalDataByMonth();
   getTotalTypeDataByMonth();
}
};
const setOptions = (data) => {
// 获取所有勾选的车辆类型
const carTypeList = [...state.filterCarType, ...state.emissionCarType, ...state.localCarType, ...state.totalType].map(type => {
    return  type === 'False' ? '外地车' : type === 'True' ? '本地车' : type
});
// 获取所有时间点（包括空数据的时间点）
const timeList = [...new Set(data.map(item => item.SHOW_TIME))];
// 过滤有效数据
const validData = data.filter(item => item.FILTER_TYPE);

// 获取有效的车辆类型
const filterTypes = [...new Set(validData.map(item => item.FILTER_TYPE))];

// 处理车辆类型名称
const getTypeName = (type) => type === 'False' ? '外地车' : type === 'True' ? '本地车' : type;

const seriesData = filterTypes.length ? filterTypes.map(type => {
    const typeName = getTypeName(type);
    
    // 检查是否已存在相同name的系列
    const existingSeries = state.options.series?.find(item => item.name === typeName);
    if (existingSeries) {
        return null; // 如果已存在则返回null
    }
    
    const typeData = timeList.map(time => {
        const found = validData.find(item => 
            item.SHOW_TIME === time && item.FILTER_TYPE === type
        );
        return found ? Number(found.FLOW) : '-';
    });
    
    return {
        name: typeName,
        type: 'line',
        data: typeData
    };
}).filter(Boolean) : [{ // 过滤掉null值
    name: '无数据',
    type: 'line',
    data: []
}];

let options = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: carTypeList,
        textStyle: {
            color: '#fff'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: timeList,
        axisLabel: {
            color: '#fff'
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#fff'
        }
    },
    series: []
};

if (!state.options.series?.length) {
    state.options = options;
    state.options.series = seriesData;
    state.options.legend.data = carTypeList;
} else {
    // 只添加不存在的系列
    state.options.series = state.options.series.concat(seriesData);
    state.options.legend.data = carTypeList;
}
};
const initData = () => {
state.ROAD_NAME = global.businessDialog.dialogParmas.name;
state.ROAD_ID = global.businessDialog.dialogParmas.roadId;
state.timeType = global.air.timeType;
state.MONITORTIME = global.air.timeValue;
if(state.timeType === 'month') {
   state.MONITORTIME = global.air.timeValue + '-01'
} else {
   state.MONITORTIME = global.air.timeValue;
}
state.monthTime = state.MONITORTIME.slice(0, 7)
if(state.timeType === 'hour') {
   getTotalByHour();
} else if(state.timeType === 'day') {
   getTotalByDay();
} else {
   getTotalByMonth();
}
};
const handleTotalTypeChange = () => {
state.cardType4 = state.totalType.filter(item => item !== '1').join(',')
const allCarTypeList = [
  ...state.filterTypeList,
  ...state.localList,
  ...state.emissionStandardList,
  ...state.totalList,
].map(item => item.value)

// 获取所有勾选的车辆类型
const carTypeList = [...state.filterCarType, ...state.emissionCarType, ...state.localCarType, ...state.totalType].map(type => {
    return  type === 'False' ? '外地车' : type === 'True' ? '本地车' : type
});

const removedTypes = allCarTypeList.filter(type => !carTypeList.includes(type));
// 从series中移除取消勾选的类型
if (removedTypes.length && state.options.series) {
    state.options.series = state.options.series.filter(series => 
        !removedTypes.includes(series.name)
    );
   state.isShow = false;
   setTimeout(() => {
       state.isShow = true;
   })
}
if(!state.totalType.length) {
  state.isShow = false;
  setTimeout(() => {
      state.isShow = true;
  })
  return;
};
if(state.timeType === 'hour') {
  getTotalTypeDataByHour();
} else if (state.timeType === 'day') {
  getTotalTypeDataByDay();
} else {
  getTotalTypeDataByMonth();
}
};
const onclick1747891159980 = () => {
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
const onchange1747877382357 = (data) => {
// 设置变量值
state.filterCarType = data;
// 执行自定义方法
handleFilterTypeChange();
};
const onchange1747877413692 = (data) => {
// 设置变量值
state.emissionCarType = data;
// 执行自定义方法
handleEmissionTypeChange();
};
const onchange1747877440925 = (data) => {
// 设置变量值
state.localCarType = data;
// 执行自定义方法
handleLocalTypeChange();
};
const onchange1751607939803_0_0 = (data) => {
// 设置变量值
state.totalType = data;
// 执行自定义方法
handleTotalTypeChange();
};
const ontabClick1747887738768 = (data) => {
// 设置变量值
state.timeType = data.value;
// 设置变量值
state.options = _.cloneDeep({});
// 执行自定义方法
handleTimeTypeChange();
};
// 接口函数
const getEmissionStandardDataByMonth = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.timeType,"FILTER_TYPE":state.cardType2,"MONITORTIME":state.monthTime,"ROAD_ID":state.ROAD_ID,"interfaceId":"2ac50c6b62ff25924c5e852236ccbbd4"},}).then((res) => {
     // 成功的操作
     if(res.data.head.statusCode === '200') {
  if(!state.emissionCarType.length) return;
 setOptions(res.data.data);
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.emissionStandardList = []
      reject(error);
    });
  });
};
// 接口函数
const getFilterTypeDataByMonth = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.timeType,"ROAD_ID":state.ROAD_ID,"MONITORTIME":state.monthTime,"FILTER_TYPE":state.cardType1,"interfaceId":"4921723bad8a06a326c343a6f6d25936"},}).then((res) => {
     // 成功的操作
     console.log(res)
if(res.data.head.statusCode === '200') {
  if(!state.filterCarType.length) return;
 setOptions(res.data.data);
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.filterTypeList = []
      reject(error);
    });
  });
};
// 接口函数
const getFilterTypeDataByDay = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.timeType,"ROAD_ID":state.ROAD_ID,"MONITORTIME":state.MONITORTIME,"FILTER_TYPE":state.cardType1,"interfaceId":"7c59cf1cd1982133856e173c2666ad52"},}).then((res) => {
     // 成功的操作
     console.log(res)
if(res.data.head.statusCode === '200') {
  if(!state.filterCarType.length) return;
 setOptions(res.data.data);
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.filterTypeList = []
      reject(error);
    });
  });
};
// 接口函数
const getEmissionStandardDataByDay = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.timeType,"FILTER_TYPE":state.cardType2,"ROAD_ID":state.ROAD_ID,"MONITORTIME":state.MONITORTIME,"interfaceId":"5192b87beb2e481a4571ac912bc0e279"},}).then((res) => {
     // 成功的操作
     if(res.data.head.statusCode === '200') {
  if(!state.emissionCarType.length) return;
  setOptions(res.data.data);
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.emissionStandardList = []
      reject(error);
    });
  });
};
// 接口函数
const getFilterType = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"CODE":"FILTER_TYPE","interfaceId":"05fccb3350adaf781e59a7ae9f0876f0"},}).then((res) => {
     // 成功的操作
     console.log(res)
if(res.data.head.statusCode === '200') {
  state.filterTypeList = res.data.data.map((item) => ({
    label: item.DIC_NAME,
    value: item.DIC_CODE
  }))
  state.filterCarType = [state.filterTypeList[0].value];
  handleFilterTypeChange();
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.filterTypeList = []
      reject(error);
    });
  });
};
// 接口函数
const getEmissionStandard = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"CODE":"EMISSION_STANDARD","interfaceId":"05fccb3350adaf781e59a7ae9f0876f0"},}).then((res) => {
     // 成功的操作
     if(res.data.head.statusCode === '200') {
  state.emissionStandardList = res.data.data.map((item) => ({
    label: item.DIC_NAME,
    value: item.DIC_CODE
  }))
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.emissionStandardList = []
      reject(error);
    });
  });
};
// 接口函数
const getLocalDataByMonth = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.timeType,"MONITORTIME":state.monthTime,"ROAD_ID":state.ROAD_ID,"FILTER_TYPE":state.cardType3,"interfaceId":"2d2d01e98ef56e766243dce43d0e9546"},}).then((res) => {
     // 成功的操作
     if(res.data.head.statusCode === '200') {
  if(!state.localCarType.length) return;
  setOptions(res.data.data);
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.localList = [];
      reject(error);
    });
  });
};
// 接口函数
const getTypeByLocal = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"CODE":"IS_LOCAL","interfaceId":"05fccb3350adaf781e59a7ae9f0876f0"},}).then((res) => {
     // 成功的操作
     if(res.data.head.statusCode === '200') {
  state.localList = res.data.data.map((item) => ({
    label: item.DIC_NAME,
    value: item.DIC_CODE
  }))
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.localList = [];
      reject(error);
    });
  });
};
// 接口函数
const getFilterTypeDataByHour = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.timeType,"ROAD_ID":state.ROAD_ID,"MONITORTIME":state.MONITORTIME,"FILTER_TYPE":state.cardType1,"interfaceId":"6571873ad2bd99c2d30eeb846823919d"},}).then((res) => {
     // 成功的操作
     console.log(res)
if(res.data.head.statusCode === '200') {
  if(!state.filterCarType.length) return;
 setOptions(res.data.data);
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.filterTypeList = []
      reject(error);
    });
  });
};
// 接口函数
const getEmissionStandardDataByHour = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.timeType,"FILTER_TYPE":state.cardType2,"MONITORTIME":state.MONITORTIME,"ROAD_ID":state.ROAD_ID,"interfaceId":"1a8da0a37989c4311a97114c259caed5"},}).then((res) => {
     // 成功的操作
     if(res.data.head.statusCode === '200') {
  if(!state.emissionCarType.length) return;
 setOptions(res.data.data);
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.emissionStandardList = []
      reject(error);
    });
  });
};
// 接口函数
const getTotalByHour = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.timeType,"MONITORTIME":state.MONITORTIME,"ROAD_NAME":state.ROAD_NAME,"interfaceId":"72782653cbc946b4ecefd39ca5806676"},}).then((res) => {
     // 成功的操作
     if(res.data.head.statusCode === '200') {
 state.total = res.data.data?.FLOW || 0;
 state.hcTotal = res.data.data?.HC_FLOW || 0;
 state.kcTotal = res.data.data?.KC_FLOW || 0;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.emissionStandardList = []
      reject(error);
    });
  });
};
// 接口函数
const getTotalByDay = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.timeType,"MONITORTIME":state.MONITORTIME,"ROAD_NAME":state.ROAD_NAME,"interfaceId":"bd9c7dacdf0c7fc117d1817e758f63fc"},}).then((res) => {
     // 成功的操作
     if(res.data.head.statusCode === '200') {
  state.total = res.data.data?.FLOW || 0;
  state.hcTotal = res.data.data?.HC_FLOW || 0;
 state.kcTotal = res.data.data?.KC_FLOW || 0;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.emissionStandardList = []
      reject(error);
    });
  });
};
// 接口函数
const getTotalByMonth = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.timeType,"MONITORTIME":state.MONITORTIME,"ROAD_NAME":state.ROAD_NAME,"interfaceId":"82a2a6164bd44090096818afa24a98f5"},}).then((res) => {
     // 成功的操作
     if(res.data.head.statusCode === '200') {
  state.total = res.data.data?.FLOW || 0;
  state.hcTotal = res.data.data?.HC_FLOW || 0;
 state.kcTotal = res.data.data?.KC_FLOW || 0;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.emissionStandardList = []
      reject(error);
    });
  });
};
// 接口函数
const getLocalDataByHour = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.timeType,"MONITORTIME":state.MONITORTIME,"ROAD_ID":state.ROAD_ID,"FILTER_TYPE":state.cardType3,"interfaceId":"45237dd2265f569c7a22677a9befb6b7"},}).then((res) => {
     // 成功的操作
     if(res.data.head.statusCode === '200') {
  if(!state.localCarType.length) return;
  setOptions(res.data.data);
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.localList = [];
      reject(error);
    });
  });
};
// 接口函数
const getLocalDataByDay = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.timeType,"FILTER_TYPE":state.cardType3,"MONITORTIME":state.MONITORTIME,"ROAD_ID":state.ROAD_ID,"interfaceId":"49213c659966270b2fb032cf306169a8"},}).then((res) => {
     // 成功的操作
     if(res.data.head.statusCode === '200') {
  if(!state.localCarType.length) return;
  setOptions(res.data.data);
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.localList = [];
      reject(error);
    });
  });
};
// 接口函数
const getTotalTypeDataByHour = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.timeType,"FILTER_TYPE":state.cardType4,"MONITORTIME":state.MONITORTIME,"ROAD_ID":state.ROAD_ID,"interfaceId":"4bb9a643dfc7894f029ce24d3a80d00d"},}).then((res) => {
     // 成功的操作
     if(res.data.head.statusCode === '200') {
  if(!state.totalType.length) return;
  const arr = [];
  state.totalType.forEach(type => {
    res.data.data.forEach(item => {
      arr.push({
        ...item,
        FILTER_TYPE: type,
        FLOW: type === '总量' ? item.FLOW : type === '货车总量' ? item.HC_FLOW :  type === '客车总量' ? item.KC_FLOW : 0
      })
    })
  })
 setOptions(arr);
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.emissionStandardList = []
      reject(error);
    });
  });
};
// 接口函数
const getTotalType = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"CODE":"TOTAL_TYPE","interfaceId":"05fccb3350adaf781e59a7ae9f0876f0"},}).then((res) => {
     // 成功的操作
     console.log(res)
if(res.data.head.statusCode === '200') {
  state.totalList = res.data.data.map((item) => ({
    label: item.DIC_NAME,
    value: item.DIC_CODE
  }))
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.filterTypeList = []
      reject(error);
    });
  });
};
// 接口函数
const getTotalTypeDataByDay = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.timeType,"FILTER_TYPE":state.cardType4,"MONITORTIME":state.MONITORTIME,"ROAD_ID":state.ROAD_ID,"interfaceId":"c9e226229fef437c7553ab7a6f9bf1c3"},}).then((res) => {
     // 成功的操作
     if(res.data.head.statusCode === '200') {
  if(!state.totalType.length) return;
 const arr = [];
  state.totalType.forEach(type => {
    res.data.data.forEach(item => {
      arr.push({
        ...item,
        FILTER_TYPE: type,
        FLOW: type === '总量' ? item.FLOW : type === '货车总量' ? item.HC_FLOW :  type === '客车总量' ? item.KC_FLOW : 0
      })
    })
  })
 setOptions(arr);
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.emissionStandardList = []
      reject(error);
    });
  });
};
// 接口函数
const getTotalTypeDataByMonth = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.timeType,"FILTER_TYPE":state.cardType4,"MONITORTIME":state.MONITORTIME,"ROAD_ID":state.ROAD_ID,"interfaceId":"33f2ef0b35af4f4e7da767d276b6fdf8"},}).then((res) => {
     // 成功的操作
     if(res.data.head.statusCode === '200') {
  if(!state.totalType.length) return;
const arr = [];
  state.totalType.forEach(type => {
    res.data.data.forEach(item => {
      arr.push({
        ...item,
        FILTER_TYPE: type,
        FLOW: type === '总量' ? item.FLOW : type === '货车总量' ? item.HC_FLOW :  type === '客车总量' ? item.KC_FLOW : 0
      })
    })
  })
 setOptions(arr);
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.emissionStandardList = []
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-mainRoadOverviewSite', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initData();
// 事件交互-请求调用接口
getFilterType().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
// 事件交互-请求调用接口
getEmissionStandard().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
// 事件交互-请求调用接口
getTypeByLocal().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
// 事件交互-请求调用接口
getTotalType().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
onMounted(() => {
setPageScale('t-l-c-mainRoadOverviewSite', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tTextx0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x8.default, componentState.tTextx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tTextx0x10ComputedData = computed(() => _.merge({}, componentState.tTextx0x10.default, componentState.tTextx0x10?.[state.screenSize]));

 const tTextx0x11ComputedData = computed(() => _.merge({}, componentState.tTextx0x11.default, componentState.tTextx0x11?.[state.screenSize]));

 const tCheckboxx0x12ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x12.default, componentState.tCheckboxx0x12?.[state.screenSize]));

 const tCheckboxx0x13ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x13.default, componentState.tCheckboxx0x13?.[state.screenSize]));

 const tCheckboxx0x14ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x14.default, componentState.tCheckboxx0x14?.[state.screenSize]));

 const tCheckboxx0x15ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x15.default, componentState.tCheckboxx0x15?.[state.screenSize]));

 const tTabsBasex0x16ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x16.default, componentState.tTabsBasex0x16?.[state.screenSize]));

 const tChartDesignx0x17ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x17.default, componentState.tChartDesignx0x17?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tTextx0x18ComputedData = computed(() => _.merge({}, componentState.tTextx0x18.default, componentState.tTextx0x18?.[state.screenSize]));

 const tTextx0x19ComputedData = computed(() => _.merge({}, componentState.tTextx0x19.default, componentState.tTextx0x19?.[state.screenSize]));

 const tTextx0x20ComputedData = computed(() => _.merge({}, componentState.tTextx0x20.default, componentState.tTextx0x20?.[state.screenSize]));

 const tTextx0x21ComputedData = computed(() => _.merge({}, componentState.tTextx0x21.default, componentState.tTextx0x21?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tRectx0x0ComputedData,
tTextx0x1ComputedData,
tTextx0x2ComputedData,
tRectx0x3ComputedData,
tTextx0x4ComputedData,
tRectx0x5ComputedData,
tTextx0x6ComputedData,
tTextx0x7ComputedData,
tTextx0x8ComputedData,
tTextx0x9ComputedData,
tTextx0x10ComputedData,
tTextx0x11ComputedData,
tCheckboxx0x12ComputedData,
tCheckboxx0x13ComputedData,
tCheckboxx0x14ComputedData,
tCheckboxx0x15ComputedData,
tTabsBasex0x16ComputedData,
tChartDesignx0x17ComputedData,
tTextx0x18ComputedData,
tTextx0x19ComputedData,
tTextx0x20ComputedData,
tTextx0x21ComputedData,
onclick1747891159980,
onchange1747877382357,
onchange1747877413692,
onchange1747877440925,
onchange1751607939803_0_0,
ontabClick1747887738768,
};
},
}
</script>

<style scoped>
.t-l-c-mainRoadOverviewSite {
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
.t-l-c-mainRoadOverviewSite .mainRoadOverviewSite-t-rect-0-0 {
position: absolute !important;
top: 197px;
left: 468px;
width: 1000px;
height: 712px;
pointer-events: auto;
}

.t-l-c-mainRoadOverviewSite .mainRoadOverviewSite-t-text-0-1 {
position: absolute !important;
top: 263px;
left: 492px;
width: 120px;
height: 32px;
pointer-events: auto;
}

.t-l-c-mainRoadOverviewSite .mainRoadOverviewSite-t-text-0-2 {
position: absolute !important;
top: 300px;
left: 492px;
width: 120px;
height: 32px;
pointer-events: auto;
}

.t-l-c-mainRoadOverviewSite .mainRoadOverviewSite-t-rect-0-3 {
position: absolute !important;
top: 197px;
left: 468px;
width: 1000px;
height: 47px;
pointer-events: auto;
}

.t-l-c-mainRoadOverviewSite .mainRoadOverviewSite-t-text-0-4 {
position: absolute !important;
top: 211px;
left: 487px;
width: 194px;
height: 19px;
pointer-events: auto;
}

.t-l-c-mainRoadOverviewSite .mainRoadOverviewSite-t-rect-0-5 {
position: absolute !important;
top: 208px;
left: 1420px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-mainRoadOverviewSite .mainRoadOverviewSite-t-text-0-6 {
position: absolute !important;
top: 263px;
left: 1093px;
width: 355px;
height: 32px;
pointer-events: auto;
}

.t-l-c-mainRoadOverviewSite .mainRoadOverviewSite-t-text-0-7 {
position: absolute !important;
top: 300px;
left: 1093px;
width: 355px;
height: 32px;
pointer-events: auto;
}

.t-l-c-mainRoadOverviewSite .mainRoadOverviewSite-t-text-0-8 {
position: absolute !important;
top: 263px;
left: 971px;
width: 120px;
height: 32px;
pointer-events: auto;
}

.t-l-c-mainRoadOverviewSite .mainRoadOverviewSite-t-text-0-9 {
position: absolute !important;
top: 300px;
left: 971px;
width: 120px;
height: 32px;
pointer-events: auto;
}

.t-l-c-mainRoadOverviewSite .mainRoadOverviewSite-t-text-0-10 {
position: absolute !important;
top: 263px;
left: 614px;
width: 355px;
height: 32px;
pointer-events: auto;
}

.t-l-c-mainRoadOverviewSite .mainRoadOverviewSite-t-text-0-11 {
position: absolute !important;
top: 300px;
left: 614px;
width: 355px;
height: 32px;
pointer-events: auto;
}

.t-l-c-mainRoadOverviewSite .mainRoadOverviewSite-t-checkbox-0-12 {
position: absolute !important;
top: 350px;
left: 562px;
width: 886px;
height: 44px;
pointer-events: auto;
}

.t-l-c-mainRoadOverviewSite .mainRoadOverviewSite-t-checkbox-0-13 {
position: absolute !important;
top: 382px;
left: 562px;
width: 955px;
height: 51px;
pointer-events: auto;
}

.t-l-c-mainRoadOverviewSite .mainRoadOverviewSite-t-checkbox-0-14 {
position: absolute !important;
top: 416px;
left: 562px;
width: 954px;
height: 52px;
pointer-events: auto;
}

.t-l-c-mainRoadOverviewSite .mainRoadOverviewSite-t-checkbox-0-15 {
position: absolute !important;
top: 447px;
left: 562px;
width: 904px;
height: 52px;
pointer-events: auto;
}

.t-l-c-mainRoadOverviewSite .mainRoadOverviewSite-t-tabs-base-0-16 {
position: absolute !important;
top: 479px;
left: 492px;
width: 183px;
height: 32px;
pointer-events: auto;
}

.t-l-c-mainRoadOverviewSite .mainRoadOverviewSite-t-chart-design-0-17 {
position: absolute !important;
top: 536px;
left: 494px;
width: 954px;
height: 333px;
pointer-events: auto;
}

.t-l-c-mainRoadOverviewSite .mainRoadOverviewSite-t-text-0-18 {
position: absolute !important;
top: 350px;
left: 517px;
width: 62px;
height: 19px;
pointer-events: auto;
}

.t-l-c-mainRoadOverviewSite .mainRoadOverviewSite-t-text-0-19 {
position: absolute !important;
top: 382px;
left: 485px;
width: 96px;
height: 19px;
pointer-events: auto;
}

.t-l-c-mainRoadOverviewSite .mainRoadOverviewSite-t-text-0-20 {
position: absolute !important;
top: 416px;
left: 501px;
width: 96px;
height: 19px;
pointer-events: auto;
}

.t-l-c-mainRoadOverviewSite .mainRoadOverviewSite-t-text-0-21 {
position: absolute !important;
top: 447px;
left: 516px;
width: 53px;
height: 19px;
pointer-events: auto;
}
</style>
