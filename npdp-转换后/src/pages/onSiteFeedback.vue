<template>
  <div id="t-l-c-onSiteFeedback" class="t-l-c-onSiteFeedback" ><t-component id="t-component-03ea.669cdf296" class="onSiteFeedback-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :loading="tComponentx0x0ComputedData.loading" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName" :page-id="tComponentx0x0ComputedData.pageId" :page-code="tComponentx0x0ComputedData.pageCode"></t-component><t-component id="t-component-4666.cb9a914ee" class="onSiteFeedback-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :loading="tComponentx0x1ComputedData.loading" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode"></t-component><t-text-unit id="t-text-unit-d5c0.d98c4fced" class="onSiteFeedback-t-text-unit-0-2"  :c-style="tTextUnitx0x2ComputedData.cStyle" :content="tTextUnitx0x2ComputedData.content" :unit="tTextUnitx0x2ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x2ComputedData.showOverflowTooltip"></t-text-unit><t-list-card id="t-list-card-2a90.8eaad1d66" class="onSiteFeedback-t-list-card-0-3"  :data="replaceCssVariables(filterData(state.baseInfoData, componentPropBindingMap?.['t-list-card-2a90.8eaad1d66']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x3ComputedData.spacingX" :col="tListCardx0x3ComputedData.col" :direction="tListCardx0x3ComputedData.direction" :exchange-order="tListCardx0x3ComputedData.exchangeOrder" :unit-break="tListCardx0x3ComputedData.unitBreak" :key-field="tListCardx0x3ComputedData.keyField" :active-key-field="tListCardx0x3ComputedData.activeKeyField" :active="tListCardx0x3ComputedData.active" :c-style="tListCardx0x3ComputedData.cStyle"></t-list-card><t-image-base id="t-image-base-0abc.7a759688c" class="onSiteFeedback-t-image-base-0-4"  :src="tImageBasex0x4ComputedData.src" :fit="tImageBasex0x4ComputedData.fit" :c-style="tImageBasex0x4ComputedData.cStyle" @click="onclick1766301367015"></t-image-base><t-image-base id="t-image-base-7254.e0b2c08bc" class="onSiteFeedback-t-image-base-0-5"  :src="tImageBasex0x5ComputedData.src" :fit="tImageBasex0x5ComputedData.fit" :c-style="tImageBasex0x5ComputedData.cStyle" @click="onclick1766301326154"></t-image-base><t-circle v-if="state.isHaveFile === true" id="t-circle-b041.0f546e3ed" class="onSiteFeedback-t-circle-0-6"  :tip="tCirclex0x6ComputedData.tip" :label="tCirclex0x6ComputedData.label" :active="tCirclex0x6ComputedData.active" :c-style="tCirclex0x6ComputedData.cStyle" @click="onclick1766303884021"></t-circle><t-circle v-if="state.isHaveFile === true" id="t-circle-408a.259922892" class="onSiteFeedback-t-circle-0-7"  :tip="tCirclex0x7ComputedData.tip" :label="tCirclex0x7ComputedData.label" :active="tCirclex0x7ComputedData.active" :c-style="tCirclex0x7ComputedData.cStyle" @click="onclick1766303905556"></t-circle><t-col id="t-col-9450.45ce9588b" class="onSiteFeedback-t-col-0-8"  :span="tColx0x8ComputedData.span" :offset="tColx0x8ComputedData.offset" :push="tColx0x8ComputedData.push" :pull="tColx0x8ComputedData.pull" :c-style="tColx0x8ComputedData.cStyle"><t-image-base v-if="state.pageDateil.pageTitle !== '-'" id="t-image-base-e0d2.592555c1e" class="onSiteFeedback-t-image-base-0-8-0"  :src="tImageBasex0x8x0ComputedData.src" :fit="tImageBasex0x8x0ComputedData.fit" :c-style="tImageBasex0x8x0ComputedData.cStyle" @click="onclick1766557340863"></t-image-base><t-text-unit id="t-text-unit-11bc.29f598ceb" class="onSiteFeedback-t-text-unit-0-8-1"  :c-style="tTextUnitx0x8x1ComputedData.cStyle" :content="replaceCssVariables(filterData(state.pageDateil.pageTitle, componentPropBindingMap?.['t-text-unit-11bc.29f598ceb']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x8x1ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x8x1ComputedData.showOverflowTooltip"></t-text-unit></t-col><t-image-base v-if="state.isHaveFile === true" id="t-image-base-a0cf.1d09163b5" class="onSiteFeedback-t-image-base-0-9"  :src="tImageBasex0x9ComputedData.src" :fit="tImageBasex0x9ComputedData.fit" :c-style="tImageBasex0x9ComputedData.cStyle" @click="onclick1766302290382_0_0"></t-image-base><t-image-base v-if="state.isHaveFile === true" id="t-image-base-54ca.15877131b" class="onSiteFeedback-t-image-base-0-10"  :src="tImageBasex0x10ComputedData.src" :fit="tImageBasex0x10ComputedData.fit" :c-style="tImageBasex0x10ComputedData.cStyle" @click="onclick1766302398534_0_0"></t-image-base></div>
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
import { TCircle, TCol, TComponent, TImageBase, TListCard, TTextUnit } from '@ths/design';

export default {
  components: {
    TCircle,
    TCol,
    TComponent,
    TImageBase,
    TListCard,
    TTextUnit,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-03ea.669cdf296":{"attributeName":"tComponentx0x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-4666.cb9a914ee":{"attributeName":"tComponentx0x1","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-unit-d5c0.d98c4fced":{"attributeName":"tTextUnitx0x2","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-list-card-2a90.8eaad1d66":{"attributeName":"tListCardx0x3","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-0abc.7a759688c":{"attributeName":"tImageBasex0x4","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-7254.e0b2c08bc":{"attributeName":"tImageBasex0x5","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-circle-b041.0f546e3ed":{"attributeName":"tCirclex0x6","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-circle-408a.259922892":{"attributeName":"tCirclex0x7","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-col-9450.45ce9588b":{"attributeName":"tColx0x8","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-e0d2.592555c1e":{"attributeName":"tImageBasex0x8x0","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-11bc.29f598ceb":{"attributeName":"tTextUnitx0x8x1","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-image-base-a0cf.1d09163b5":{"attributeName":"tImageBasex0x9","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-54ca.15877131b":{"attributeName":"tImageBasex0x10","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}}};
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
   communityAddr: "",
   timeEndTest: "",
   timeStart: "",
   timeEnd: "",
   pageDateil: {"pageTitle":"--","lon":"","lat":""},
   endTime: "",
   startTime: "",
   isHaveFile: false,
   detailDataIndex: 0,
   currentPkid: "",
   pageTitle: "",
   listData: [],
   currentIndex: 0,
   activeFile: {},
   fileDataList: [],
   baseInfoData: [{"title":"检查地点","num":"-"},{"title":"经度","num":"-"},{"title":"纬度","num":"-"},{"title":"关联火点","num":"-"},{"title":"现场情况说明","num":"-"},{"title":"采取手段","num":"-"},{"title":"检查人","num":"-"},{"title":"检查时间","num":"-"}],
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
            default: {"width":"400px","height":"350px","margin":"0 auto","position":"unset","left":"25px","top":"355px"},
            
            },
 default: { 
 
name:"previewFileComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"400px","height":"350px","margin":"0 auto","position":"unset","left":"25px","top":"355px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/previewFile",
componentName:"previewFileComponent",
pageId:"911ad784ecda4fdb9d70b48cd90c259e",
pageCode:"previewFile", 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"400px","height":"32px","margin":"0 auto","top":"38px","left":"25px","position":"unset"},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"400px","height":"32px","margin":"0 auto","top":"38px","left":"25px","position":"unset"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent",
pageId:"11294a0cd1654489a15355ed663e73ad_6",
pageCode:"titleFirstBg", 
 },
},
tTextUnitx0x2: {
defaultStyle: {
            default: {"width":"282px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","position":"unset","left":"56px","top":"39px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"282px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","position":"unset","left":"56px","top":"39px"}},"unit":{"default":{"fontSize":"var(--business-text-size-20)","fontFamily":"方正综艺","lineHeight":"32px"}},"text":{"default":{"lineHeight":"32px","fontSize":"var(--business-text-size-20)"}}},
content:"现场检查信息",
unit:"",
showOverflowTooltip:true, 
 },
},
tListCardx0x3: {
defaultStyle: {
            default: {"width":"400px","height":"275px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"检查地点","num":"-"},{"title":"经度","num":"-"},{"title":"纬度","num":"-"},{"title":"关联火点","num":"-"},{"title":"现场情况说明","num":"-"},{"title":"采取手段","num":"-"},{"title":"检查人","num":"-"},{"title":"检查时间","num":"-"}],
spacingX:2,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"400px","height":"275px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--base-label-bg-color)","width":"120px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--base-label-title-color)","fontSize":"var(--business-text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"numBox":{"default":{"backgroundColor":"var(--info-background)","width":"288px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--base-label-text-color)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
tImageBasex0x4: {
defaultStyle: {
            default: {"width":"16px","height":"16px","position":"unset","left":"21px","top":"0px","cursor":"pointer","-webkit-mask-image":"url(assets/images/2022-11-01/f24af02be87642d7b403b4876d7829d8.svg)","-webkit-mask-position":"0% 0%","-webkit-mask-repeat":"repeat","-webkit-mask-size":"auto","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","backgroundColor":"var(--business-white)"},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"16px","height":"16px","position":"unset","left":"21px","top":"0px","cursor":"pointer","-webkit-mask-image":"url(assets/images/2022-11-01/f24af02be87642d7b403b4876d7829d8.svg)","-webkit-mask-position":"0% 0%","-webkit-mask-repeat":"repeat","-webkit-mask-size":"auto","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","backgroundColor":"var(--business-white)"}},"rightContent":{"default":{"cursor":"pointer"}}}, 
 },
},
tImageBasex0x5: {
defaultStyle: {
            default: {"width":"16px","height":"16px","top":"0px","position":"unset","left":"412px","cursor":"pointer","-webkit-mask-image":"url(assets/images/2022-11-01/e6300ac4e8304941b76850a471c10f4b.svg)","-webkit-mask-position":"0% 0%","-webkit-mask-repeat":"repeat","-webkit-mask-size":"auto","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","backgroundColor":"var(--business-white)"},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"16px","height":"16px","top":"0px","position":"unset","left":"412px","cursor":"pointer","-webkit-mask-image":"url(assets/images/2022-11-01/e6300ac4e8304941b76850a471c10f4b.svg)","-webkit-mask-position":"0% 0%","-webkit-mask-repeat":"repeat","-webkit-mask-size":"auto","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","backgroundColor":"var(--business-white)"}},"rightContent":{"default":{"cursor":"pointer"}}}, 
 },
},
tCirclex0x6: {
defaultStyle: {
            default: {"width":"36px","height":"36px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"none !important","borderTop":"1px Solid var(--t-circle-border-color)","borderLeft":"1px Solid var(--t-circle-border-color)","borderBottom":"1px Solid var(--t-circle-border-color)","borderRight":"1px Solid var(--t-circle-border-color)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomRightRadius":"50%","borderBottomLeftRadius":"50%","top":"512px","left":"374px","background":"rgba(0, 0, 0, 0.5)","fillType":"color","position":"unset","zIndex":"99","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"36px","height":"36px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"none !important","borderTop":"1px Solid var(--t-circle-border-color)","borderLeft":"1px Solid var(--t-circle-border-color)","borderBottom":"1px Solid var(--t-circle-border-color)","borderRight":"1px Solid var(--t-circle-border-color)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomRightRadius":"50%","borderBottomLeftRadius":"50%","top":"512px","left":"374px","background":"rgba(0, 0, 0, 0.5)","fillType":"color","position":"unset","zIndex":"99","cursor":"pointer"},"active":{"background":"var(--t-brand8)","fillType":"color"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tCirclex0x7: {
defaultStyle: {
            default: {"width":"36px","height":"36px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"none !important","borderTop":"1px Solid var(--t-circle-border-color)","borderLeft":"1px Solid var(--t-circle-border-color)","borderBottom":"1px Solid var(--t-circle-border-color)","borderRight":"1px Solid var(--t-circle-border-color)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomRightRadius":"50%","borderBottomLeftRadius":"50%","top":"511px","left":"38px","background":"rgba(0, 0, 0, 0.5)","fillType":"color","position":"unset","zIndex":"99","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"36px","height":"36px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"none !important","borderTop":"1px Solid var(--t-circle-border-color)","borderLeft":"1px Solid var(--t-circle-border-color)","borderBottom":"1px Solid var(--t-circle-border-color)","borderRight":"1px Solid var(--t-circle-border-color)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomRightRadius":"50%","borderBottomLeftRadius":"50%","top":"511px","left":"38px","background":"rgba(0, 0, 0, 0.5)","fillType":"color","position":"unset","zIndex":"99","animationName":"","cursor":"pointer"},"active":{"background":"var(--t-brand8)","fillType":"color"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tColx0x8: {
defaultStyle: {
            default: {"width":"340px","height":"22px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"56px","top":"1px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"340px","height":"22px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"56px","top":"1px"}}}, 
 },
},
tImageBasex0x8x0: {
defaultStyle: {
            default: {"width":"18px","height":"18px","position":"unset","left":"125px","top":"-43px","animationName":"","display":"block !important","marginBottom":"5px","margin-right":"4px","cursor":"pointer","-webkit-mask-image":"url(assets/images/2022-11-01/e076b56414ec40ad96e42b9312185820.svg)","-webkit-mask-position":"50% 50%","-webkit-mask-repeat":"no-repeat","-webkit-mask-size":"100% 100%","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","backgroundColor":"var(--business-white)"},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"18px","height":"18px","position":"unset","left":"125px","top":"-43px","animationName":"","display":"block !important","marginBottom":"5px","margin-right":"4px","cursor":"pointer","-webkit-mask-image":"url(assets/images/2022-11-01/e076b56414ec40ad96e42b9312185820.svg)","-webkit-mask-position":"50% 50%","-webkit-mask-repeat":"no-repeat","-webkit-mask-size":"100% 100%","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","backgroundColor":"var(--business-white)"}}}, 
 },
},
tTextUnitx0x8x1: {
defaultStyle: {
            default: {"width":"auto","height":"20px","flexDirection":"row","justifyContent":"center","alignItems":"center","top":"162px","left":"629px","position":"unset","display":"block","maxWidth":"300px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","flexDirection":"row","justifyContent":"center","alignItems":"center","top":"162px","left":"629px","position":"unset","display":"block","maxWidth":"300px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"text":{"default":{"fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-16)","textAlign":"center","lineHeight":"14px","letterSpacing":"0px","color":"var(--business-white)","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"width":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-12)","lineHeight":"12px","letterSpacing":"0px","textAlign":"center","color":"var(--business-white)","background":"unset","backgroundClip":"unset"}}},
content:"",
unit:"",
showOverflowTooltip:true, 
 },
},
tImageBasex0x9: {
defaultStyle: {
            default: {"width":"16px","height":"16px","top":"521px","position":"unset","left":"385px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
src:"assets/images/2022-11-01/e6300ac4e8304941b76850a471c10f4b.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"16px","height":"16px","top":"521px","position":"unset","left":"385px","cursor":"pointer","animationName":""}},"rightContent":{"default":{"cursor":"pointer"}}}, 
 },
},
tImageBasex0x10: {
defaultStyle: {
            default: {"width":"16px","height":"16px","top":"521px","position":"unset","left":"48px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
src:"assets/images/2022-11-01/f24af02be87642d7b403b4876d7829d8.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"16px","height":"16px","top":"521px","position":"unset","left":"48px","cursor":"pointer","animationName":""}},"rightContent":{"default":{"cursor":"pointer"}}}, 
 },
},
});
const handleSwitchData = (type) => {
const total = state.listData.length
  
// 如果没有文件或只有一个文件，不需要切换
if (total <= 1) return

let newIndex

if (type === 'next') {
  // 下一个：如果当前是最后一个，回到第一个
  newIndex = state.detailDataIndex === total - 1 ? 0 : state.detailDataIndex + 1
} else if (type === 'prev') {
  // 上一个：如果当前是第一个，跳到最后
  newIndex = state.detailDataIndex === 0 ? total - 1 : state.detailDataIndex - 1
} else {
  return
}

// 更新当前索引
state.detailDataIndex = newIndex

console.log('111state.detailDataIndex', state.detailDataIndex)

apiRegistry.getBaseInfo.request(state.listData[state.detailDataIndex].pkid);
apiRegistry.getFileList.request(state.listData[state.detailDataIndex].pkid);
};
const handleSwitchImg = (direction) => {
const total = state.fileDataList.length
  
// 如果没有文件或只有一个文件，不需要切换
if (total <= 1) return

let newIndex

if (direction === 'next') {
  // 下一个：如果当前是最后一个，回到第一个
  newIndex = state.currentIndex === total - 1 ? 0 : state.currentIndex + 1
} else if (direction === 'prev') {
  // 上一个：如果当前是第一个，跳到最后
  newIndex = state.currentIndex === 0 ? total - 1 : state.currentIndex - 1
} else {
  return
}

// 更新当前索引
state.currentIndex = newIndex
state.activeFile = state.fileDataList[state.currentIndex];
console.log('state.activeFile', state.activeFile);
};
const provideState = () => {
provide('onSiteFeedback',state)

// apiRegistry.getBaseInfo.request();
};
const handleLocation = () => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'gotoPoint',  // 消息类型名称
    data: {
      longitude: state.pageDateil.lon,
      latitude: state.pageDateil.lat,
    }
  }
);
};
const initParams = () => {
// 获取当前年份
const currentYear = new Date().getFullYear();

// 设置默认值
state.timeStart = `${currentYear}-01-01 00`;

state.timeEnd = `${currentYear}-12-31 23`;

state.currentPkid = global.airGlobalVariables.fireworks.surroundingAnalysis.activePointInfo.pkid || '';
state.communityAddr = global.airGlobalVariables.fireworks.surroundingAnalysis.activePointInfo.community_addr || '' 


rootData.rootSocket.emit(
  'message',
  {
    room: global.socketRoom,
    type: 'updatePatrolReportStatus',
    data: {
      visible: true,
      startTime: state.timeStart,
      endTime: state.timeEnd,
      relatedFirePoint: state.currentPkid,
      community_addr: state.communityAddr 
    }
  }
);
apiRegistry.getListData.request();
};
const unmounted = () => {
// 图层消息
rootData.rootSocket.emit(
  'message',
  {
    room: global.socketRoom,
    type: 'updatePatrolReportStatus',
    data: {
      visible: false,
      startTime: '',
      endTime: '',
    }
  }
);
};
const onclick1766301367015 = () => {
// 执行自定义方法
handleSwitchData("prev");
};
const onclick1766301326154 = () => {
// 执行自定义方法
handleSwitchData("next");
};
const onclick1766302290382_0_0 = () => {
};
const onclick1766303884021 = () => {
// 执行自定义方法
handleSwitchImg("next");
};
const onclick1766302398534_0_0 = () => {
};
const onclick1766303905556 = () => {
// 执行自定义方法
handleSwitchImg("prev");
};
const onclick1766557340863 = () => {
// 执行自定义方法
handleLocation();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getBaseInfo: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"pkid","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"d4lbHIbXcj"}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"community_addr":"state.communityAddr","pkid":"this.pkid","pageNum":1,"pageSize":"10","interfaceId":"9b1acb5d4314306cf6e8db8f751771e3"}},
              request: function (pkid, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"community_addr":state.communityAddr,"pkid":pkid,"pageNum":1,"pageSize":"10","interfaceId":"9b1acb5d4314306cf6e8db8f751771e3"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"community_addr":state.communityAddr,"pkid":pkid,"pageNum":1,"pageSize":"10","interfaceId":"9b1acb5d4314306cf6e8db8f751771e3"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     const { data } = res;

if(data.head.statusCode === '200' && data.data){
  state.pageDateil.pageTitle = data?.data[0]?.inspectionLocation || '-';
  state.pageDateil.lon = data?.data[0]?.longitude || '-';
  state.pageDateil.lat = data?.data[0]?.latitude || '-';
  state.baseInfoData[0].num = data?.data[0]?.inspectionLocation || '-';
  state.baseInfoData[1].num = data?.data[0]?.longitude || '-';
  state.baseInfoData[2].num = data?.data[0]?.latitude || '-';
  state.baseInfoData[3].num = data?.data[0]?.relatedFirePoint || '-';
  state.baseInfoData[4].num = data?.data[0]?.onSiteDescription || '-';
  state.baseInfoData[5].num = data?.data[0]?.measuresTakenName || '-';
  state.baseInfoData[6].num = data?.data[0]?.inspector || '-';
  state.baseInfoData[7].num = data?.data[0]?.inspectionTime || '-';
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
 getListData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"community_addr":"state.communityAddr","relatedFirePoint":"state.currentPkid","pageNum":1,"pageSize":"100000","inspectionTimeStart":"state.timeStart","inspectionTimeEnd":"state.timeEnd","interfaceId":"4a679fccf67a8c4bf111c4b39593b167"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"community_addr":state.communityAddr,"relatedFirePoint":state.currentPkid,"pageNum":1,"pageSize":"100000","inspectionTimeStart":state.timeStart,"inspectionTimeEnd":state.timeEnd,"interfaceId":"4a679fccf67a8c4bf111c4b39593b167"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"community_addr":state.communityAddr,"relatedFirePoint":state.currentPkid,"pageNum":1,"pageSize":"100000","inspectionTimeStart":state.timeStart,"inspectionTimeEnd":state.timeEnd,"interfaceId":"4a679fccf67a8c4bf111c4b39593b167"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  
  // 初始化listData
  state.listData = res?.data.data || [];

  if (res?.data.data.length > 0) {
    // 获取详情
    apiRegistry.getBaseInfo.request(state.listData[state.detailDataIndex].pkid);
    
    // 获取附件信息
    apiRegistry.getFileList.request(state.listData[state.detailDataIndex].pkid);
  }
  
} else {
  state.listData = [];
  state.pageDateil.pageTitle = '--';
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.listData = [];
      reject(error);
    });
  });
},
              },
// 接口函数
 getFileList: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"businessKey","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"yerbn6M2zT"}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"/waterevaluate/api/components/file/list","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"subBusinessKey":"","businessKey":"this.businessKey","pageNum":"1","pageSize":"10"}},
              request: function (businessKey, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":"/waterevaluate/api/components/file/list","method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"subBusinessKey":"","businessKey":businessKey,"pageNum":"1","pageSize":"10"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-/waterevaluate/api/components/file/list',  {"subBusinessKey":"","businessKey":businessKey,"pageNum":"1","pageSize":"10"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getFileList'] = res.data;
                
     if (res?.data?.code === 200) {
  const baseUrl = 'http://192.168.24.106:10157/waterevaluate/api/components/file/download/';
  
  if (res.data.data.length > 0) {
    state.isHaveFile = true;
    state.fileDataList = res.data.data.map(fileItem => ({
      url: baseUrl + fileItem.fileId,  // 拼接的完整地址
      ...fileItem
    }));
    
    state.activeFile = state.fileDataList[0];
  } else {
    state.fileDataList = [];
    state.activeFile = {};
    state.isHaveFile = false;
  }

  
} else {
  state.fileDataList = [];
  state.activeFile = {};
  state.isHaveFile = false;
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
// 监听变量，调取接口
watch(() => [1,"100000"], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getListData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-onSiteFeedback', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
provideState();
// 执行自定义方法
initParams();
onMounted(() => {
setPageScale('t-l-c-onSiteFeedback', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
onUnmounted(() => {
// 页面离开时的操作
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
// 执行自定义方法
unmounted();
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tTextUnitx0x2ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x2.default, componentState.tTextUnitx0x2?.[state.screenSize]));

 const tListCardx0x3ComputedData = computed(() => _.merge({}, componentState.tListCardx0x3.default, componentState.tListCardx0x3?.[state.screenSize]));

 const tImageBasex0x4ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x4.default, componentState.tImageBasex0x4?.[state.screenSize]));

 const tImageBasex0x5ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x5.default, componentState.tImageBasex0x5?.[state.screenSize]));

 const tCirclex0x6ComputedData = computed(() => _.merge({}, componentState.tCirclex0x6.default, componentState.tCirclex0x6?.[state.screenSize]));

 const tCirclex0x7ComputedData = computed(() => _.merge({}, componentState.tCirclex0x7.default, componentState.tCirclex0x7?.[state.screenSize]));

 const tColx0x8ComputedData = computed(() => _.merge({}, componentState.tColx0x8.default, componentState.tColx0x8?.[state.screenSize]));

 const tImageBasex0x8x0ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x8x0.default, componentState.tImageBasex0x8x0?.[state.screenSize]));

 const tTextUnitx0x8x1ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x8x1.default, componentState.tTextUnitx0x8x1?.[state.screenSize]));

 const tImageBasex0x9ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x9.default, componentState.tImageBasex0x9?.[state.screenSize]));

 const tImageBasex0x10ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x10.default, componentState.tImageBasex0x10?.[state.screenSize]));

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
tComponentx0x1ComputedData,
tTextUnitx0x2ComputedData,
tListCardx0x3ComputedData,
tImageBasex0x4ComputedData,
tImageBasex0x5ComputedData,
tCirclex0x6ComputedData,
tCirclex0x7ComputedData,
tColx0x8ComputedData,
tImageBasex0x8x0ComputedData,
tTextUnitx0x8x1ComputedData,
tImageBasex0x9ComputedData,
tImageBasex0x10ComputedData,
onclick1766301367015,
onclick1766301326154,
onclick1766303884021,
onclick1766303905556,
onclick1766557340863,
onclick1766302290382_0_0,
onclick1766302398534_0_0,
};
},
}
</script>

<style scoped>
.t-l-c-onSiteFeedback {
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
height: 912px;
background-color: rgba(0, 0, 0, 0);
}
.t-l-c-onSiteFeedback .onSiteFeedback-t-component-0-0 {
position: absolute !important;
top: 355px;
left: 25px;
width: 400px;
height: 350px;
pointer-events: auto;
}

.t-l-c-onSiteFeedback .onSiteFeedback-t-component-0-1 {
position: absolute !important;
top: 38px;
left: 25px;
width: 400px;
height: 32px;
pointer-events: auto;
}

.t-l-c-onSiteFeedback .onSiteFeedback-t-text-unit-0-2 {
position: absolute !important;
top: 39px;
left: 56px;
width: 282px;
height: 32px;
pointer-events: auto;
}

.t-l-c-onSiteFeedback .onSiteFeedback-t-list-card-0-3 {
position: absolute !important;
top: 76px;
left: 25px;
width: 400px;
height: 275px;
pointer-events: auto;
}

.t-l-c-onSiteFeedback .onSiteFeedback-t-image-base-0-4 {
position: absolute !important;
top: 0px;
left: 21px;
width: 16px;
height: 16px;
pointer-events: auto;
}

.t-l-c-onSiteFeedback .onSiteFeedback-t-image-base-0-5 {
position: absolute !important;
top: 0px;
left: 412px;
width: 16px;
height: 16px;
pointer-events: auto;
}

.t-l-c-onSiteFeedback .onSiteFeedback-t-circle-0-6 {
position: absolute !important;
top: 512px;
left: 374px;
width: 36px;
height: 36px;
pointer-events: auto;
}

.t-l-c-onSiteFeedback .onSiteFeedback-t-circle-0-7 {
position: absolute !important;
top: 511px;
left: 38px;
width: 36px;
height: 36px;
pointer-events: auto;
}

.t-l-c-onSiteFeedback .onSiteFeedback-t-col-0-8 {
position: absolute !important;
top: 1px;
left: 56px;
width: 340px;
height: 22px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-onSiteFeedback .onSiteFeedback-t-image-base-0-8-0 {
position: unset;
top: -43px;
left: 125px;
width: 18px;
height: 18px;
pointer-events: auto;
}

.t-l-c-onSiteFeedback .onSiteFeedback-t-text-unit-0-8-1 {
position: unset;
top: 162px;
left: 629px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-onSiteFeedback .onSiteFeedback-t-image-base-0-9 {
position: absolute !important;
top: 521px;
left: 385px;
width: 16px;
height: 16px;
pointer-events: auto;
}

.t-l-c-onSiteFeedback .onSiteFeedback-t-image-base-0-10 {
position: absolute !important;
top: 521px;
left: 48px;
width: 16px;
height: 16px;
pointer-events: auto;
}
</style>
