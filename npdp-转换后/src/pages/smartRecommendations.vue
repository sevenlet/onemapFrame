<template>
  <div id="t-l-c-smartRecommendations" class="t-l-c-smartRecommendations" ><t-image-base id="t-image-base-c1af.4286da1ef" class="smartRecommendations-t-image-base-0-0"  :src="tImageBasex0x0ComputedData.src" :fit="tImageBasex0x0ComputedData.fit" :c-style="tImageBasex0x0ComputedData.cStyle"></t-image-base><t-component id="t-component-b949.874ade55b" class="smartRecommendations-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName"></t-component><t-text-unit id="t-text-unit-5d8d.a22fe33c8" class="smartRecommendations-t-text-unit-0-2"  :c-style="tTextUnitx0x2ComputedData.cStyle" :justify="tTextUnitx0x2ComputedData.justify" :align="tTextUnitx0x2ComputedData.align" :content="tTextUnitx0x2ComputedData.content" :unit="tTextUnitx0x2ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x2ComputedData.showOverflowTooltip"></t-text-unit><t-tabs-base id="t-tabs-base-06be.24b382fea" class="smartRecommendations-t-tabs-base-0-3"  :data="replaceCssVariables(filterData(state.pollutionTabs, componentPropBindingMap?.['t-tabs-base-06be.24b382fea']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :space="tTabsBasex0x3ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.activeTab, componentPropBindingMap?.['t-tabs-base-06be.24b382fea']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x3ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x3ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x3ComputedData.alias" :c-style="tTabsBasex0x3ComputedData.cStyle" @tab-click="ontabClick1764157386995"></t-tabs-base><t-row id="t-row-24e5.a235170f6" class="smartRecommendations-t-row-0-4"  :c-style="tRowx0x4ComputedData.cStyle" :gutter="tRowx0x4ComputedData.gutter" :justify="tRowx0x4ComputedData.justify" :align="tRowx0x4ComputedData.align"><t-col v-if="state.cardList.length !== 0" id="t-col-3f02.2a1cd2b94" class="smartRecommendations-t-col-0-4-0"  :span="tColx0x4x0ComputedData.span" :offset="tColx0x4x0ComputedData.offset" :push="tColx0x4x0ComputedData.push" :pull="tColx0x4x0ComputedData.pull" :c-style="tColx0x4x0ComputedData.cStyle"><t-list-card id="t-list-card-069c.6f2ec715c" class="smartRecommendations-t-list-card-0-4-0-0"  :data="replaceCssVariables(filterData(state.cardList, componentPropBindingMap?.['t-list-card-069c.6f2ec715c']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x4x0x0ComputedData.spacingX" :col="tListCardx0x4x0x0ComputedData.col" :direction="tListCardx0x4x0x0ComputedData.direction" :exchange-order="tListCardx0x4x0x0ComputedData.exchangeOrder" :unit-break="tListCardx0x4x0x0ComputedData.unitBreak" :key-field="tListCardx0x4x0x0ComputedData.keyField" :active-key-field="tListCardx0x4x0x0ComputedData.activeKeyField" :active="replaceCssVariables(filterData(state.activeCard, componentPropBindingMap?.['t-list-card-069c.6f2ec715c']['active'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tListCardx0x4x0x0ComputedData.cStyle" @card-click="oncardClick1764655497966"></t-list-card></t-col><t-col id="t-col-0bad.67da82dd7" class="smartRecommendations-t-col-0-4-1"  :span="tColx0x4x1ComputedData.span" :offset="tColx0x4x1ComputedData.offset" :push="tColx0x4x1ComputedData.push" :pull="tColx0x4x1ComputedData.pull" :c-style="tColx0x4x1ComputedData.cStyle"><t-col id="t-col-450f.14e0084e6" class="smartRecommendations-t-col-0-4-1-0"  :span="tColx0x4x1x0ComputedData.span" :offset="tColx0x4x1x0ComputedData.offset" :push="tColx0x4x1x0ComputedData.push" :pull="tColx0x4x1x0ComputedData.pull" :c-style="tColx0x4x1x0ComputedData.cStyle"><t-text-common id="t-text-common-8235.3b91a8036" class="smartRecommendations-t-text-common-0-4-1-0-0"  :label="tTextCommonx0x4x1x0x0ComputedData.label" :editable="tTextCommonx0x4x1x0x0ComputedData.editable" :c-style="tTextCommonx0x4x1x0x0ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-1719.1625728dc" class="smartRecommendations-t-text-common-0-4-1-0-1"  :label="replaceCssVariables(filterData(state.reasons.five, componentPropBindingMap?.['t-text-common-1719.1625728dc']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x4x1x0x1ComputedData.editable" :c-style="tTextCommonx0x4x1x0x1ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-09a7.10755a069" class="smartRecommendations-t-text-common-0-4-1-0-2"  :label="replaceCssVariables(filterData(state.reasons.four, componentPropBindingMap?.['t-text-common-09a7.10755a069']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x4x1x0x2ComputedData.editable" :c-style="tTextCommonx0x4x1x0x2ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-73dc.8855c5ea" class="smartRecommendations-t-text-common-0-4-1-0-3"  :label="replaceCssVariables(filterData(state.reasons.three, componentPropBindingMap?.['t-text-common-73dc.8855c5ea']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x4x1x0x3ComputedData.editable" :c-style="tTextCommonx0x4x1x0x3ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-2bd2.c15d14c6" class="smartRecommendations-t-text-common-0-4-1-0-4"  :label="replaceCssVariables(filterData(state.reasons.two, componentPropBindingMap?.['t-text-common-2bd2.c15d14c6']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x4x1x0x4ComputedData.editable" :c-style="tTextCommonx0x4x1x0x4ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-282c.d0c9b2e74" class="smartRecommendations-t-text-common-0-4-1-0-5"  :label="replaceCssVariables(filterData(state.reasons.one, componentPropBindingMap?.['t-text-common-282c.d0c9b2e74']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x4x1x0x5ComputedData.editable" :c-style="tTextCommonx0x4x1x0x5ComputedData.cStyle"></t-text-common><t-rolling-number id="t-rolling-number-8364.6e4c11ce6" class="smartRecommendations-t-rolling-number-0-4-1-0-6"  :number="replaceCssVariables(filterData(state.total, componentPropBindingMap?.['t-rolling-number-8364.6e4c11ce6']['number'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :min-length="tRollingNumberx0x4x1x0x6ComputedData.minLength" :prefix="tRollingNumberx0x4x1x0x6ComputedData.prefix" :suffix="tRollingNumberx0x4x1x0x6ComputedData.suffix" :animation-duration="tRollingNumberx0x4x1x0x6ComputedData.animationDuration" :c-style="tRollingNumberx0x4x1x0x6ComputedData.cStyle"></t-rolling-number></t-col><t-table id="t-table-c1dd.c7a44599" class="smartRecommendations-t-table-0-4-1-1"  :height="tTablex0x4x1x1ComputedData.height" :stripe="tTablex0x4x1x1ComputedData.stripe" :border="tTablex0x4x1x1ComputedData.border" :auto-scroll="tTablex0x4x1x1ComputedData.autoScroll" :speed="tTablex0x4x1x1ComputedData.speed" :columns="tTablex0x4x1x1ComputedData.columns" :data="replaceCssVariables(filterData(state.tableList, componentPropBindingMap?.['t-table-c1dd.c7a44599']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x4x1x1ComputedData.defaultSort" :c-style="tTablex0x4x1x1ComputedData.cStyle" @cell-click="oncellClick1762416757174_0_0"></t-table></t-col><t-col id="t-col-5be4.939011ab8" class="smartRecommendations-t-col-0-4-2"  :span="tColx0x4x2ComputedData.span" :offset="tColx0x4x2ComputedData.offset" :push="tColx0x4x2ComputedData.push" :pull="tColx0x4x2ComputedData.pull" :c-style="tColx0x4x2ComputedData.cStyle"><t-pagination-base v-if="state.pageInfo.total !== 0" id="t-pagination-base-3f55.f73f2473e" class="smartRecommendations-t-pagination-base-0-4-2-0"  :total="replaceCssVariables(filterData(state.pageInfo.total, componentPropBindingMap?.['t-pagination-base-3f55.f73f2473e']['total'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x4x2x0ComputedData.small" :page-size="replaceCssVariables(filterData(state.pageInfo.pageSize, componentPropBindingMap?.['t-pagination-base-3f55.f73f2473e']['pageSize'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :pager-count="replaceCssVariables(filterData(state.pageInfo.pages, componentPropBindingMap?.['t-pagination-base-3f55.f73f2473e']['pagerCount'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :current-page="replaceCssVariables(filterData(state.pageInfo.pageNum, componentPropBindingMap?.['t-pagination-base-3f55.f73f2473e']['currentPage'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x4x2x0ComputedData.layout" :page-sizes="tPaginationBasex0x4x2x0ComputedData.pageSizes" :disabled="tPaginationBasex0x4x2x0ComputedData.disabled" :c-style="tPaginationBasex0x4x2x0ComputedData.cStyle" @current-change="oncurrentChange1763024869224_0_0" @prev-click="onprevClick1764666119508" @next-click="onnextClick1764666422000"></t-pagination-base><t-text-common id="t-text-common-9727.e1099c924" class="smartRecommendations-t-text-common-0-4-2-1"  :label="tTextCommonx0x4x2x1ComputedData.label" :editable="tTextCommonx0x4x2x1ComputedData.editable" :c-style="tTextCommonx0x4x2x1ComputedData.cStyle"></t-text-common></t-col></t-row></div>
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
import { TCol, TComponent, TImageBase, TListCard, TPaginationBase, TRollingNumber, TRow, TTable, TTabsBase, TTextCommon, TTextUnit } from '@ths/design';

export default {
  components: {
    TCol,
    TComponent,
    TImageBase,
    TListCard,
    TPaginationBase,
    TRollingNumber,
    TRow,
    TTable,
    TTabsBase,
    TTextCommon,
    TTextUnit,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-image-base-c1af.4286da1ef":{"attributeName":"tImageBasex0x0","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-component-b949.874ade55b":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-unit-5d8d.a22fe33c8":{"attributeName":"tTextUnitx0x2","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-tabs-base-06be.24b382fea":{"attributeName":"tTabsBasex0x3","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-row-24e5.a235170f6":{"attributeName":"tRowx0x4","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-3f02.2a1cd2b94":{"attributeName":"tColx0x4x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-069c.6f2ec715c":{"attributeName":"tListCardx0x4x0x0","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-col-0bad.67da82dd7":{"attributeName":"tColx0x4x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-col-450f.14e0084e6":{"attributeName":"tColx0x4x1x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-8235.3b91a8036":{"attributeName":"tTextCommonx0x4x1x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-1719.1625728dc":{"attributeName":"tTextCommonx0x4x1x0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-09a7.10755a069":{"attributeName":"tTextCommonx0x4x1x0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-73dc.8855c5ea":{"attributeName":"tTextCommonx0x4x1x0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-2bd2.c15d14c6":{"attributeName":"tTextCommonx0x4x1x0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-282c.d0c9b2e74":{"attributeName":"tTextCommonx0x4x1x0x5","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rolling-number-8364.6e4c11ce6":{"attributeName":"tRollingNumberx0x4x1x0x6","number":{"filters":[]},"minLength":{"filters":[]},"prefix":{"filters":[]},"suffix":{"filters":[]},"animationDuration":{"filters":[]},"cStyle":{"filters":[]}},"t-table-c1dd.c7a44599":{"attributeName":"tTablex0x4x1x1","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-col-5be4.939011ab8":{"attributeName":"tColx0x4x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-pagination-base-3f55.f73f2473e":{"attributeName":"tPaginationBasex0x4x2x0","total":{"filters":[]},"small":{"filters":[]},"pageSize":{"filters":[]},"pagerCount":{"filters":[]},"currentPage":{"filters":[]},"layout":{"filters":[]},"pageSizes":{"filters":[]},"disabled":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-9727.e1099c924":{"attributeName":"tTextCommonx0x4x2x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   fistLoad: true,
   selectedParams: {"radius":5,"direction":"back","altitude":[],"buffer":"union"},
   reasons: {"one":"周边5 km范围内存在氮氧化物排放超标的企业。","two":"周边5 km范围内存在涉VOCs企业。","three":"","four":"","five":""},
   tableList: [],
   topicCode: "",
   ENTITY_CODE: "",
   total: 0,
   activeCard: "",
   pollutionTabs: [],
   listData: [],
   inputValue: "",
   cardList: [],
   pageInfo: {"pageNum":1,"pageSize":10,"total":0,"pages":0},
   timePitch: "hour",
   bottomTabsValue: "region",
   activeTab: "",
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
tImageBasex0x0: {
defaultStyle: {
            default: {"width":"773px","height":"870px","left":"-856px","top":"-19px","position":"unset","opacity":"100% !important"},
            
            },
 default: { 
 
src:"assets/images/2025-11-17/c3ba56cd7e6e4c0a8bb4ce43c61767e5.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"773px","height":"870px","left":"-856px","top":"-19px","position":"unset","opacity":"100% !important"}}}, 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"0px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/71ed927f19ff41e78116c906842de342_19/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextUnitx0x2: {
defaultStyle: {
            default: {"width":"261px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","position":"unset","left":"33px","top":"6px","lineHeight":"20px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"261px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","position":"unset","left":"33px","top":"6px","lineHeight":"20px","animationName":""}},"unit":{"default":{"fontSize":"17px","fontFamily":"方正综艺","lineHeight":"20px"}},"text":{"default":{"lineHeight":"20px","fontSize":"17px"}}},
justify:"flex-start",
align:"flex-end",
content:"智慧推荐",
unit:"",
showOverflowTooltip:true, 
 },
},
tTabsBasex0x3: {
defaultStyle: {
            default: {"width":"399px","height":"28px","position":"unset","animationName":"","left":"4px","top":"43px"},
            
            },
 default: { 
 
data:[],
space:5,
selectedTabVal:"",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"name","value":"value","disabled":false},
cStyle:{"wrapper":{"default":{"width":"399px","height":"28px","position":"unset","animationName":"","left":"4px","top":"43px"}},"itemWrapper":{"default":{"background":"rgba(20, 112, 204, 0.15)","width":"80px","height":"28px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"14px"},"active":{"background":"var(--intergrated-query-button-background-color)","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","height":"28px","width":"80px","-webkit-mask-size":"","-webkit-mask-image":"","fillType":"color"},"hover":{"background":"rgba(20, 112, 204, 0.15)"}}}, 
 },
},
tRowx0x4: {
defaultStyle: {
            default: {"width":"400px","height":"auto","display":"flex","justifyContent":"center","alignItems":"start","position":"unset","left":"4px","top":"83px","background":"rgba(0, 0, 0, 0)","fillType":"color","flexDirection":"row","borderDirection":"all","borderLeft":"1px Solid var(--scrollbar-thumb-color)","borderTop":"1px Solid var(--scrollbar-thumb-color)","borderRight":"1px Solid var(--scrollbar-thumb-color)","borderBottom":"1px Solid var(--scrollbar-thumb-color)","border":"auto !important","paddingTop":"0px","paddingBottom":"10px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"400px","height":"auto","display":"flex","justifyContent":"center","alignItems":"start","position":"unset","left":"4px","top":"83px","background":"rgba(0, 0, 0, 0)","fillType":"color","flexDirection":"row","borderDirection":"all","borderLeft":"1px Solid var(--scrollbar-thumb-color)","borderTop":"1px Solid var(--scrollbar-thumb-color)","borderRight":"1px Solid var(--scrollbar-thumb-color)","borderBottom":"1px Solid var(--scrollbar-thumb-color)","border":"auto !important","paddingTop":"0px","paddingBottom":"10px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x4x0: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"start","paddingBottom":"10px","paddingTop":"10px","paddingLeft":"10px","paddingRight":"10px","background":"var(--scrollbar-track-color)","fillType":"color","marginBottom":"10px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"start","paddingBottom":"10px","paddingTop":"10px","paddingLeft":"10px","paddingRight":"10px","background":"var(--scrollbar-track-color)","fillType":"color","marginBottom":"10px"}}}, 
 },
},
tListCardx0x4x0x0: {
defaultStyle: {
            default: {"width":"388px","height":"auto","position":"unset","left":"9px","top":"74px"},
            
            },
 default: { 
 
data:[],
spacingX:8,
col:4,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"388px","height":"auto","position":"unset","left":"9px","top":"74px"}},"innerWrapper":{"default":{"display":"flex","flexWrap":"wrap","boxSizing":"border-box","width":"100%","height":"100%","justifyContent":"left","alignItems":"start","gap":"4px","flexDirection":"row"}},"outerWrapper":{"default":{"width":"91px","height":"auto","padding":"0px"}},"itemWrapper":{"default":{"background":"var(--business-show-bg50)","display":"flex","justifyContent":"end","gap":"0px","alignItems":"center","flexDirection":"column","height":"58px","fillType":"color","borderDirection":"all","borderLeft":"1px Solid var(--business-show-bg50)","borderTop":"1px Solid var(--business-show-bg50)","borderRight":"1px Solid var(--business-show-bg50)","borderBottom":"1px Solid var(--business-show-bg50)","border":"auto !important","cursor":"pointer"},"active":{"borderDirection":"all","borderLeft":"1px Solid var(--business-unit-icon)","borderTop":"1px Solid var(--business-unit-icon)","borderRight":"1px Solid var(--business-unit-icon)","borderBottom":"1px Solid var(--business-unit-icon)","border":"auto !important"}},"rightContent":{"default":{"height":"auto","justifyContent":"flex-start","alignItems":"center","flexDirection":"column","display":"flex","gap":"auto"}},"specialItemWrapper":{"default":{}},"icon":{"default":{"width":"45px","height":"45px"},"active":{}},"cardIcon":{"default":{}},"specialCardIcon":{"default":{}},"num":{"default":{"verticalAlign":"-1px","overflow":"hidden","color":"var(--business-white)","fontWeight":"500","fontSize":"24px","fontFamily":"微软雅黑","textOverflow":"ellipsis","whiteSpace":"nowrap","background":"unset","backgroundClip":"unset","textAlign":"right","lineHeight":"24px","width":"","height":"auto"}},"numBox":{"default":{"justifyContent":"space-between","alignItems":"end","flexDirection":"row","display":"flex"}},"title":{"default":{"color":"var(--intergrated-query-font-color)","fontSize":"14px","background":"unset","backgroundClip":"unset","width":"","height":"28px","lineHeight":"28px"}},"unit":{"default":{"color":"var(--business-text-avianize)","fontSize":"12px","background":"unset","backgroundClip":"unset","lineHeight":"16px"}}}, 
 },
},
tColx0x4x1: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"start","alignItems":"center","paddingTop":"10px","flexDirection":"column","paddingLeft":"8px","paddingRight":"8px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"start","alignItems":"center","paddingTop":"10px","flexDirection":"column","paddingLeft":"8px","paddingRight":"8px"}}}, 
 },
},
tColx0x4x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"start","alignItems":"start","background":"rgba(229, 217, 112, 0.14)","fillType":"color","paddingTop":"10px","paddingLeft":"20px","paddingRight":"20px","paddingBottom":"10px","flexDirection":"column"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"start","alignItems":"start","background":"rgba(229, 217, 112, 0.14)","fillType":"color","paddingTop":"10px","paddingLeft":"20px","paddingRight":"20px","paddingBottom":"10px","flexDirection":"column"}}}, 
 },
},
tTextCommonx0x4x1x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"20px","color":"rgba(229, 229, 64, 0.55)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"467px","top":"308px","background":"unset","backgroundClip":"unset","marginBottom":"5px"},
            
            },
 default: { 
 
label:"原因说明：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"20px","color":"rgba(229, 229, 64, 0.55)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"467px","top":"308px","background":"unset","backgroundClip":"unset","marginBottom":"5px"}}}, 
 },
},
tTextCommonx0x4x1x0x1: {
defaultStyle: {
            default: {"width":"100%","height":"auto","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-285px","top":"146px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-285px","top":"146px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tTextCommonx0x4x1x0x2: {
defaultStyle: {
            default: {"width":"100%","height":"auto","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-285px","top":"146px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-285px","top":"146px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tTextCommonx0x4x1x0x3: {
defaultStyle: {
            default: {"width":"100%","height":"auto","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-295px","top":"136px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-295px","top":"136px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tTextCommonx0x4x1x0x4: {
defaultStyle: {
            default: {"width":"100%","height":"auto","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-285px","top":"146px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"周边5 km范围内存在涉VOCs企业。",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-285px","top":"146px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tTextCommonx0x4x1x0x5: {
defaultStyle: {
            default: {"width":"100%","height":"auto","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-285px","top":"146px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"周边5 km范围内存在氮氧化物排放超标的企业。",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-285px","top":"146px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tRollingNumberx0x4x1x0x6: {
defaultStyle: {
            default: {"overflow":"hidden","width":"344px","height":"39px","background":"rgba(229, 217, 112, 0.1)","fillType":"color","position":"unset","display":"flex","justifyContent":"center","left":"19px","top":"239px","marginTop":"10px","backgroundImage":"url(assets/images/2025-11-25/f4172af29e914213947b6d4f39ef833e.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"344px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},
            
            },
 default: { 
 
number:0,
minLength:1,
prefix:"推荐管控污染源：",
suffix:"个",
animationDuration:1,
cStyle:{"wrapper":{"default":{"overflow":"hidden","width":"344px","height":"39px","background":"rgba(229, 217, 112, 0.1)","fillType":"color","position":"unset","display":"flex","justifyContent":"center","left":"19px","top":"239px","marginTop":"10px","backgroundImage":"url(assets/images/2025-11-25/f4172af29e914213947b6d4f39ef833e.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"344px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}},"separator":{"default":{"height":"64px","width":"auto","color":"#B1DCF9","fontSize":"1px"}},"number":{"default":{"width":"0px","height":"64px","margin":"0 6px","borderRadius":"6px","background":"rgba(0, 0, 0, 0)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomRightRadius":"6px","borderBottomLeftRadius":"6px","fontSize":"16px","color":"#fff","fontFamily":"微软雅黑","letterSpacing":"0px","fontWeight":"700"}},"prefix":{"default":{"color":"#B1DCF9","fontSize":"16px","lineHeight":"var(--t-rolling-number-prefix-fontsize)","fontWeight":"700","fontFamily":"思源"}},"suffix":{"default":{"fontSize":"16px","lineHeight":"var(--t-rolling-number-suffix-fontsize)","color":"#B1DCF9"}}}, 
 },
},
tTablex0x4x1x1: {
defaultStyle: {
            default: {"width":"383px","height":"250px","position":"unset","left":"86px","top":"811px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"250",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"50px","type":"default","stateKey":"iconStatus"},{"label":"名称","type":"default","key":"mc","stateKey":"","width":"153px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}}},{"label":"评分","type":"default","key":"pf","stateKey":"excellentValue","width":"90px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"rgba(255, 255, 255, 1)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"操作","type":"operation","key":"action","stateKey":"","width":"90px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"rgba(255, 255, 255, 1)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"var(--business-unit-icon)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"operationList":[{"name":"派发","id":"distribute","fontStyle":{"color":"rgba(5,245,251,1)","fontWeight":"700","background":"rgba(0, 0, 0, 0)","fillType":"color"}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"383px","height":"250px","position":"unset","left":"86px","top":"811px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
tColx0x4x2: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingTop":"0px","gap":"auto","flexDirection":"column"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingTop":"0px","gap":"auto","flexDirection":"column"}}}, 
 },
},
tPaginationBasex0x4x2x0: {
defaultStyle: {
            default: {"width":"410px","height":"38px","position":"unset","left":"-1px","top":"700px","color":"","animationName":"","display":"flex","justifyContent":"space-between"},
            
            },
 default: { 
 
total:0,
small:false,
pageSize:10,
pagerCount:0,
currentPage:1,
layout:" total,prev, pager, next",
pageSizes:[20,30,40,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"38px","position":"unset","left":"-1px","top":"700px","color":"","animationName":"","display":"flex","justifyContent":"space-between"}},"pagerItem":{"default":{"color":"#fff","fontSize":"14px","lineHeight":"32px","borderLeft":"1px solid #366B92","borderTop":"1px solid #366B92","borderRight":"1px solid #366B92","borderBottom":"1px solid #366B92","marginLeft":"0px","marginRight":"5px","backgroundColor":""},"active":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundColor":"rgba(255, 255, 255, 0)","color":"var(--common-white1)","backgroundImage":"linear-gradient(180deg,rgba(50, 169, 255, 0.8) 0%,rgba(61, 126, 255, 0.8) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","color":"var(--common-white1)","backgroundImage":"linear-gradient(180deg,rgba(50, 169, 255, 0.8) 0.6246480855855856%,rgba(61, 126, 255, 0.8) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}},"pager":{"default":{"borderLeft":"1px none var(--theme-btn-default)","borderTop":"1px none var(--theme-btn-default)","borderRight":"1px none var(--theme-btn-default)","borderBottom":"1px none var(--theme-btn-default)","color":"#fff","marginLeft":"0px","marginRight":"0px","backgroundColor":"#1B4293"},"hover":{"color":"var(--common-white1)","borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundImage":"linear-gradient(180deg,rgba(50, 169, 255, 0.8) 0%,rgba(61, 126, 255, 0.8) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}},"more":{"default":{"color":"#C9E7F5"},"hover":{"color":"#366B92","backgroundColor":""}},"total":{"default":{"color":"#C9E7F5","paddingRight":"30px","paddingLeft":"10px"}},"sizesWrapper":{"default":{"color":"","backgroundColor":""}},"sizesInput":{"default":{"color":"var(--common-white08)","borderLeft":"1px solid var(--common-white08)","borderTop":"1px solid var(--common-white08)","borderRight":"1px solid var(--common-white08)","borderBottom":"1px solid var(--common-white08)"},"hover":{"borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"jumpWrapper":{"default":{"color":"var(--common-white08)"}},"jumpInput":{"default":{"color":"var(--common-white08)"},"hover":{"color":"var(--common-white1)","borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"sizesDropdownWrapper":{"default":{"backgroundColor":"var(--theme-dialog-bg)","color":"","borderLeft":"1px solid var(--theme-input-border)","borderTop":"1px solid var(--theme-input-border)","borderRight":"1px solid var(--theme-input-border)","borderBottom":"1px solid var(--theme-input-border)"}},"sizesDropdownItem":{"default":{"color":"var(--common-white08)"},"active":{"backgroundColor":"var(--theme-btn-default)","color":"var(--common-white1)"},"hover":{"color":"var(--common-white1)","backgroundColor":"var(--theme-table-zebra-crossing)"}}}, 
 },
},
tTextCommonx0x4x2x1: {
defaultStyle: {
            default: {"width":"96%","height":"88px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"14px","top":"775px","background":"unset","backgroundClip":"unset","marginTop":"12px","textIndent":"26px"},
            
            },
 default: { 
 
label:"基础评分与污染类型有关；\n模型通过对污染物指标间的相关性分析，结合污染源空间位置、污染源排放量，超标报警记录统计等多维度指标进行综合评估，筛选出对站点污染贡献率较高的疑似污染原。",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96%","height":"88px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"14px","top":"775px","background":"unset","backgroundClip":"unset","marginTop":"12px","textIndent":"26px"}}}, 
 },
},
});
const sendMsgToMap = (value) => {
const valueBool = value === 'true'?true:false;
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'showAirSourceMonitor',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      enable: valueBool,
    }
  }
);
};
const handleClickCard = (item,checkedList) => {
console.log('item', item)
console.log('checkedList', checkedList)
const checkedListName = checkedList.map(item => item.M_TYPE)
// 点击全部
if (item.M_TYPE === '全部') {
  // 选中“全部”，则其他项全部选中
  if (checkedListName.includes('全部')) {
    state.selectedCard = state.cardList.map(item => item.M_TYPE)
  } else {
     // 取消，则全部取消
    state.selectedCard = []
  }
}else{
  // 点击其他
  state.selectedCard = checkedListName
  // 其他项都选中，全部也选中
  if(checkedList.length === state.cardList.length - 1){
   state.selectedCard.push('全部')
  }
  // 取消选中则都取消
  if(checkedList.length === 0 || (checkedList.length === 1 && checkedListName.includes('全部'))){
    state.selectedCard = []
  }
}

// 给地图发送消息
const selectValue = state.selectedCard.filter(item => item !== '全部')
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'changePointTyeByAirSourceMonitor',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      showTypes: selectValue,
    }
  }
);


};
const pollutionTbasClick = (item) => {
console.log(item, 'pollutionTbasClick item')
state.activeTab = item.value
};
const handleNewClickCard = (item) => {
console.log('item handleNewClickCard ', item)
state.topicCode = item.TAG_TOPIC_CODE
state.ENTITY_CODE = item.TAG_ENTITY_CODE
};
const handlePageChange = (type) => {
if(type === 'next') state.pageInfo.pageNum += 1;
else state.pageInfo.pageNum -= 1;
};
const sendSocketMessage = (data,visible) => {
// 发送消息
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'updateAirSourceSmartRecommendationLayerStatus',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      'visible': visible,
      data
    }
  }
);
};
const init = () => {
// 溯源消息
handleAnalysis();


};
const handleAnalysis = () => {
// 切换到每个
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'getCurrentAirSourceResultGeometry ',  // 消息类型名称
    data: {                   // 消息内容，对象格式
    }
  }
);

rootData.rootSocket.emit('message', {
  type: 'showAirSourceTrace',
  room: global.socketRoom,
  data: [
    {
      shareCode: "showAirSourceTrace",
      pointBufferLen: 5,
      runtimeValue: global.warningRightPointCode || "",
      pointType: global.businessDialog.dialogParmas.POINT_TYPE || '',
      isEnters: true,
      traceTime: global.air.timeType === 'hour' ? global.air.timeValue : global.air.timeValue + ' 00',
      layerName: global.businessDialog.dialogParmas.layerName,
      forward: false,
      height: state.selectedParams.altitude.join(','),
      bufferType: state.selectedParams.buffer
    }]
});
};
const watchTableList = () => {
watch(() => state.tableList, () => {
  // 有标题
  // 发送智慧推荐socket消息
  sendSocketMessage(state.tableList,true); // 参数注意修改
}, {
  // deep: true,
  // immediate: true,
})
};
const tableClick = (col,row) => {
if(col.label === '定位') {
  // console.log(row, 'row')
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'gotoPoint',  // 消息类型名称
      data: {                   // 消息内容，对象格式
        "longitude":row?.LONGITUDE,
        "latitude":row.LATITUDE,
        // "row":row
      }
    }
  );
}
};
const clearPointMessage = () => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'clearGotoPoint',  // 消息类型名称
    data: {                   // 消息内容，对象格式
     
    }
  }
);
};
const oncellClick1762416757174_0_0 = (row,column,cell,event) => {
// 执行自定义方法
tableClick(column,row);
};
const oncurrentChange1763024869224_0_0 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
};
const ontabClick1764157386995 = (data) => {
// 执行自定义方法
pollutionTbasClick(data);
};
const oncardClick1764655497966 = (item) => {
// 执行自定义方法
handleNewClickCard(item);
};
const onprevClick1764666119508 = (currentPage) => {
// 执行自定义方法
handlePageChange("pre");
};
const onnextClick1764666422000 = (currentPage) => {
// 执行自定义方法
handlePageChange("next");
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getCardListNew: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"keyword":"state.activeTab","groupSize":"100","groupFields":"TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE","ENTITY_CODE":"tag_gather_dqzhtj_1764647202868","queryField":"POLLUTE_TYPE","tagJson":"{}","hasGather":"true","locationField":"locationField","interfaceId":"32fbf72522e1a004b67b5d906410ec8d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"keyword":state.activeTab,"groupSize":"100","groupFields":"TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE","ENTITY_CODE":"tag_gather_dqzhtj_1764647202868","queryField":"POLLUTE_TYPE","tagJson":"{}","hasGather":"true","locationField":"locationField","interfaceId":"32fbf72522e1a004b67b5d906410ec8d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"keyword":state.activeTab,"groupSize":"100","groupFields":"TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE","ENTITY_CODE":"tag_gather_dqzhtj_1764647202868","queryField":"POLLUTE_TYPE","tagJson":"{}","hasGather":"true","locationField":"locationField","interfaceId":"32fbf72522e1a004b67b5d906410ec8d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCardListNew'] = res.data;
                
     
if(res.data.groupResult && res.data.groupResult.length >0){
  const result = res.data.groupResult
  state.total = 0
  state.cardList = result.map(item => {

    state.total += item.doc_count
    return ({
    ...item,
    title:item.DATA_TYPE,
    num: item.doc_count,
    unit: "个"
  })
  })
  console.log('卡片接口新', result)

  // 默认激活第一个选项卡
  state.activeCard = state.cardList[0].title
  state.topicCode = state.cardList[0].TAG_TOPIC_CODE
state.ENTITY_CODE = state.cardList[0].TAG_ENTITY_CODE
// apiRegistry.getCardListNew.request(state.topicCode, state.ENTITY_CODE);

}else{
    state.topicCode = ""
state.ENTITY_CODE = ''
  state.cardList = []
  state.total = "0"
  state.tableList = []
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
 getTableListNew: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"pageSize":"state.pageInfo.pageSize","pageNum":"state.pageInfo.pageNum","useSegment":"false","HasAllTag":"false","ENTITY_CODE":"state.ENTITY_CODE","tagJson":"{}","sourcefields":"ENTER_NAME,LONGITUDE,LATITUDE,SCORE_ALL,DATA_TYPE,DATA_NAME","useGisShape":"false","topicCode":"state.topicCode","locationField":"location","interfaceId":"8b5ca6a3009f750b5b1f19a415589682"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"useSegment":"false","HasAllTag":"false","ENTITY_CODE":state.ENTITY_CODE,"tagJson":"{}","sourcefields":"ENTER_NAME,LONGITUDE,LATITUDE,SCORE_ALL,DATA_TYPE,DATA_NAME","useGisShape":"false","topicCode":state.topicCode,"locationField":"location","interfaceId":"8b5ca6a3009f750b5b1f19a415589682"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"useSegment":"false","HasAllTag":"false","ENTITY_CODE":state.ENTITY_CODE,"tagJson":"{}","sourcefields":"ENTER_NAME,LONGITUDE,LATITUDE,SCORE_ALL,DATA_TYPE,DATA_NAME","useGisShape":"false","topicCode":state.topicCode,"locationField":"location","interfaceId":"8b5ca6a3009f750b5b1f19a415589682"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTableListNew'] = res.data;
                
     
if(res.data?.page?.list && res.data?.page?.list?.length >0){
  const result = res.data.page.list
  const page = res.data.page
  // state.cardList = result.map(item => {

  //   state.total += item.doc_count
  //   return ({
  //   ...item,
  //   title:item.DATA_TYPE,
  //   num: item.doc_count,
  //   unit: "个"
  // })
  // })

  state.tableList = result.map(item => ({
    mc: item.ENTER_NAME || '-',
    pf: item.SCORE_ALL || '-',
    action: "distribute",
    ...item
  }))

  // state.tableList.push(...state.tableList)
  // state.tableList.push(...state.tableList)
  // state.tableList.push(...state.tableList)
  console.log('列表接口新', result)
  // 设置分页数据
  state.pageInfo.total = page.total
  state.pageInfo.pageSize = page.pageSize
  state.pageInfo.pageNum = page.pageNum
  state.pageInfo.pages = page.pages

  
  if(state.fistLoad) {
// 初始化socket消息
  init();
  }
  state.fistLoad = false

}else{
state.tableList = []
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"REGION_CODE":"global.regionaQuery.regionCode","useGisShape":"false","topicCode":"DEFAULT_GIS_SHAP","hasGather":"false","queryField":"M_ TYPE","locationField":"location","tagJson":"{}","HasAllTag":"false","sourcefields":"D,M_TYPE,DEVICE_NAME,STATUS","pageSize":"state.pageInfo.pageSize","pageNum":"state.pageInfo.pageNum","keyword":"state.inputValue","interfaceId":"8b5ca6a3009f750b5b1f19a415589682","ENTITY_CODE":"tag_jksb_1762945137278"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_CODE":global.regionaQuery.regionCode,"useGisShape":"false","topicCode":"DEFAULT_GIS_SHAP","hasGather":"false","queryField":"M_ TYPE","locationField":"location","tagJson":"{}","HasAllTag":"false","sourcefields":"D,M_TYPE,DEVICE_NAME,STATUS","pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"keyword":state.inputValue,"interfaceId":"8b5ca6a3009f750b5b1f19a415589682","ENTITY_CODE":"tag_jksb_1762945137278"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"REGION_CODE":global.regionaQuery.regionCode,"useGisShape":"false","topicCode":"DEFAULT_GIS_SHAP","hasGather":"false","queryField":"M_ TYPE","locationField":"location","tagJson":"{}","HasAllTag":"false","sourcefields":"D,M_TYPE,DEVICE_NAME,STATUS","pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"keyword":state.inputValue,"interfaceId":"8b5ca6a3009f750b5b1f19a415589682","ENTITY_CODE":"tag_jksb_1762945137278"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     state.pageInfo.total = res?.data?.page?.total || 0
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getWrwTabs: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"interfaceId":"d22375a4eb9486a83081f3d78e0335cc"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"d22375a4eb9486a83081f3d78e0335cc"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"interfaceId":"d22375a4eb9486a83081f3d78e0335cc"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getWrwTabs'] = res.data;
                
     
if(res.data.data && res.data.data.length >0){
  state.pollutionTabs = res.data.data.map(item => ({
    name:item.POLLUTANT,
    value: item.POLLUTANT,
    total: item.TOTAL
  }))
  // 设置默认选中tab
  state.activeTab = state.pollutionTabs[0].value
  console.log('污染物列表', res.data)
}else{
  state.pollutionTabs = []
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
 getWrwReason: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"global.warningRightPointCode","interfaceId":"f831e39ba890c81aab5fa649968ec023"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":global.warningRightPointCode,"interfaceId":"f831e39ba890c81aab5fa649968ec023"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":global.warningRightPointCode,"interfaceId":"f831e39ba890c81aab5fa649968ec023"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getWrwReason'] = res.data;
                
     
if(res?.data?.data?.length){
  const result = res?.data?.data[0]
  if(result) {
    state.reasons.one = result.CAUSE_CRITERIAN1 || ''
    state.reasons.two = result.CAUSE_CRITERIAN2 || ''
    state.reasons.three = result.CAUSE_CRITERIAN3 || ''
    state.reasons.four = result.CAUSE_CRITERIAN4 || ''
    state.reasons.five = result.CAUSE_CRITERIAN5 || ''
  }

  console.log('污染物列表-原因', res.data)
}else{
  state.reasons.one = '-'
  state.reasons.two = ''
  state.reasons.three = ''
  state.reasons.four = ''
  state.reasons.five = ''
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
watch(() => [state.activeTab], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getCardListNew', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [state.pageInfo.pageSize,state.pageInfo.pageNum,state.ENTITY_CODE,state.topicCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getTableListNew', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [global.regionaQuery.regionCode,state.pageInfo.pageNum], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getListData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [global.warningRightPointCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getWrwReason', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-smartRecommendations', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
sendMsgToMap("true");
onBeforeUnmount(() => {
// 执行自定义方法
sendMsgToMap("false");
});
onUnmounted(() => {
// 页面离开时的操作
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
// 执行自定义方法
sendSocketMessage([],false);
// 执行自定义方法
clearPointMessage();
});
onMounted(() => {
setPageScale('t-l-c-smartRecommendations', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
watchTableList();
});
 const tImageBasex0x0ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x0.default, componentState.tImageBasex0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tTextUnitx0x2ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x2.default, componentState.tTextUnitx0x2?.[state.screenSize]));

 const tTabsBasex0x3ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x3.default, componentState.tTabsBasex0x3?.[state.screenSize]));

 const tRowx0x4ComputedData = computed(() => _.merge({}, componentState.tRowx0x4.default, componentState.tRowx0x4?.[state.screenSize]));

 const tColx0x4x0ComputedData = computed(() => _.merge({}, componentState.tColx0x4x0.default, componentState.tColx0x4x0?.[state.screenSize]));

 const tListCardx0x4x0x0ComputedData = computed(() => _.merge({}, componentState.tListCardx0x4x0x0.default, componentState.tListCardx0x4x0x0?.[state.screenSize]));

 const tColx0x4x1ComputedData = computed(() => _.merge({}, componentState.tColx0x4x1.default, componentState.tColx0x4x1?.[state.screenSize]));

 const tColx0x4x1x0ComputedData = computed(() => _.merge({}, componentState.tColx0x4x1x0.default, componentState.tColx0x4x1x0?.[state.screenSize]));

 const tTextCommonx0x4x1x0x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x4x1x0x0.default, componentState.tTextCommonx0x4x1x0x0?.[state.screenSize]));

 const tTextCommonx0x4x1x0x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x4x1x0x1.default, componentState.tTextCommonx0x4x1x0x1?.[state.screenSize]));

 const tTextCommonx0x4x1x0x2ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x4x1x0x2.default, componentState.tTextCommonx0x4x1x0x2?.[state.screenSize]));

 const tTextCommonx0x4x1x0x3ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x4x1x0x3.default, componentState.tTextCommonx0x4x1x0x3?.[state.screenSize]));

 const tTextCommonx0x4x1x0x4ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x4x1x0x4.default, componentState.tTextCommonx0x4x1x0x4?.[state.screenSize]));

 const tTextCommonx0x4x1x0x5ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x4x1x0x5.default, componentState.tTextCommonx0x4x1x0x5?.[state.screenSize]));

 const tRollingNumberx0x4x1x0x6ComputedData = computed(() => _.merge({}, componentState.tRollingNumberx0x4x1x0x6.default, componentState.tRollingNumberx0x4x1x0x6?.[state.screenSize]));

 const tTablex0x4x1x1ComputedData = computed(() => _.merge({}, componentState.tTablex0x4x1x1.default, componentState.tTablex0x4x1x1?.[state.screenSize]));

 const tColx0x4x2ComputedData = computed(() => _.merge({}, componentState.tColx0x4x2.default, componentState.tColx0x4x2?.[state.screenSize]));

 const tPaginationBasex0x4x2x0ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x4x2x0.default, componentState.tPaginationBasex0x4x2x0?.[state.screenSize]));

 const tTextCommonx0x4x2x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x4x2x1.default, componentState.tTextCommonx0x4x2x1?.[state.screenSize]));

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
tImageBasex0x0ComputedData,
tComponentx0x1ComputedData,
tTextUnitx0x2ComputedData,
tTabsBasex0x3ComputedData,
tRowx0x4ComputedData,
tColx0x4x0ComputedData,
tListCardx0x4x0x0ComputedData,
tColx0x4x1ComputedData,
tColx0x4x1x0ComputedData,
tTextCommonx0x4x1x0x0ComputedData,
tTextCommonx0x4x1x0x1ComputedData,
tTextCommonx0x4x1x0x2ComputedData,
tTextCommonx0x4x1x0x3ComputedData,
tTextCommonx0x4x1x0x4ComputedData,
tTextCommonx0x4x1x0x5ComputedData,
tRollingNumberx0x4x1x0x6ComputedData,
tTablex0x4x1x1ComputedData,
tColx0x4x2ComputedData,
tPaginationBasex0x4x2x0ComputedData,
tTextCommonx0x4x2x1ComputedData,
ontabClick1764157386995,
oncardClick1764655497966,
oncellClick1762416757174_0_0,
oncurrentChange1763024869224_0_0,
onprevClick1764666119508,
onnextClick1764666422000,
};
},
}
</script>

<style scoped>
.t-l-c-smartRecommendations {
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
height: 728px;
overflow: hidden;
width: 410px;
background-color: rgba(0,0,0,0);
}
.t-l-c-smartRecommendations .smartRecommendations-t-image-base-0-0 {
position: absolute !important;
top: -19px;
left: -856px;
width: 773px;
height: 870px;
pointer-events: auto;
}

.t-l-c-smartRecommendations .smartRecommendations-t-component-0-1 {
position: absolute !important;
top: 0px;
left: 0px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-smartRecommendations .smartRecommendations-t-text-unit-0-2 {
position: absolute !important;
top: 6px;
left: 33px;
width: 261px;
height: 20px;
pointer-events: auto;
}

.t-l-c-smartRecommendations .smartRecommendations-t-tabs-base-0-3 {
position: absolute !important;
top: 43px;
left: 4px;
width: 399px;
height: 28px;
pointer-events: auto;
}

.t-l-c-smartRecommendations .smartRecommendations-t-row-0-4 {
position: absolute !important;
top: 83px;
left: 4px;
width: 400px;
height: auto;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: start;
background: rgba(0, 0, 0, 0);
fill-type: color;
flex-direction: row;
border-direction: all;
border-left: 1px Solid var(--scrollbar-thumb-color);
border-top: 1px Solid var(--scrollbar-thumb-color);
border-right: 1px Solid var(--scrollbar-thumb-color);
border-bottom: 1px Solid var(--scrollbar-thumb-color);
border: auto !important;
padding-top: 0px;
padding-bottom: 10px;
}

.t-l-c-smartRecommendations .smartRecommendations-t-col-0-4-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: auto;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: start;
padding-bottom: 10px;
padding-top: 10px;
padding-left: 10px;
padding-right: 10px;
background: var(--scrollbar-track-color);
fill-type: color;
margin-bottom: 10px;
}

.t-l-c-smartRecommendations .smartRecommendations-t-list-card-0-4-0-0 {
position: unset;
top: 74px;
left: 9px;
width: 388px;
height: auto;
pointer-events: auto;
}

.t-l-c-smartRecommendations .smartRecommendations-t-col-0-4-1 {
position: relative;
top: null;
left: null;
width: 100px;
height: auto;
pointer-events: auto;
display: flex;
justify-content: start;
align-items: center;
padding-top: 10px;
flex-direction: column;
padding-left: 8px;
padding-right: 8px;
}

.t-l-c-smartRecommendations .smartRecommendations-t-col-0-4-1-0 {
position: relative;
top: null;
left: null;
width: 100%;
height: auto;
pointer-events: auto;
display: flex;
justify-content: start;
align-items: start;
background: rgba(229, 217, 112, 0.14);
fill-type: color;
padding-top: 10px;
padding-left: 20px;
padding-right: 20px;
padding-bottom: 10px;
flex-direction: column;
}

.t-l-c-smartRecommendations .smartRecommendations-t-text-common-0-4-1-0-0 {
position: unset;
top: 85px;
left: -342px;
width: 100%;
height: 20px;
pointer-events: auto;
}

.t-l-c-smartRecommendations .smartRecommendations-t-text-common-0-4-1-0-1 {
position: unset;
top: 146px;
left: -285px;
width: 100%;
height: auto;
pointer-events: auto;
}

.t-l-c-smartRecommendations .smartRecommendations-t-text-common-0-4-1-0-2 {
position: unset;
top: 146px;
left: -285px;
width: 100%;
height: auto;
pointer-events: auto;
}

.t-l-c-smartRecommendations .smartRecommendations-t-text-common-0-4-1-0-3 {
position: unset;
top: 136px;
left: -295px;
width: 100%;
height: auto;
pointer-events: auto;
}

.t-l-c-smartRecommendations .smartRecommendations-t-text-common-0-4-1-0-4 {
position: unset;
top: 146px;
left: -285px;
width: 100%;
height: auto;
pointer-events: auto;
}

.t-l-c-smartRecommendations .smartRecommendations-t-text-common-0-4-1-0-5 {
position: unset;
top: 146px;
left: -285px;
width: 100%;
height: auto;
pointer-events: auto;
}

.t-l-c-smartRecommendations .smartRecommendations-t-rolling-number-0-4-1-0-6 {
position: unset;
top: 261px;
left: 93px;
width: 344px;
height: 39px;
pointer-events: auto;
}

.t-l-c-smartRecommendations .smartRecommendations-t-table-0-4-1-1 {
position: unset;
top: 811px;
left: 86px;
width: 383px;
height: 250px;
pointer-events: auto;
}

.t-l-c-smartRecommendations .smartRecommendations-t-col-0-4-2 {
position: relative;
top: null;
left: null;
width: 100px;
height: auto;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
padding-top: 0px;
gap: auto;
flex-direction: column;
}

.t-l-c-smartRecommendations .smartRecommendations-t-pagination-base-0-4-2-0 {
position: unset;
top: 700px;
left: -1px;
width: 410px;
height: 38px;
pointer-events: auto;
}

.t-l-c-smartRecommendations .smartRecommendations-t-text-common-0-4-2-1 {
position: unset;
top: 775px;
left: 14px;
width: 96%;
height: 88px;
pointer-events: auto;
}
</style>
