<template>
  <div id="t-l-c-airOverviewSiteForHourDayCopy" class="t-l-c-airOverviewSiteForHourDayCopy" ><t-rect id="t-rect-09e8.3b71afa9a" class="airOverviewSiteForHourDay-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-text id="t-text-a1bb.dfcf8b5c8" class="airOverviewSiteForHourDay-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle"></t-text><t-text id="t-text-3cee.4354210c7" class="airOverviewSiteForHourDay-t-text-0-2"  :label="replaceCssVariables(filterData(state.baseInfo.POINT_ADDRESS, componentPropBindingMap?.['t-text-3cee.4354210c7']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle"></t-text><t-text id="t-text-70a5.c8a261cab" class="airOverviewSiteForHourDay-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle"></t-text><t-text id="t-text-fb01.6004095de" class="airOverviewSiteForHourDay-t-text-0-4"  :label="replaceCssVariables(filterData(state.baseInfo.POINT_TYPE_NAME, componentPropBindingMap?.['t-text-fb01.6004095de']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle"></t-text><t-text id="t-text-82fa.d65c07c73" class="airOverviewSiteForHourDay-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle"></t-text><t-text id="t-text-a6a0.97f9fae7b" class="airOverviewSiteForHourDay-t-text-0-6"  :label="replaceCssVariables(filterData(state.baseInfo.POINT_STREET, componentPropBindingMap?.['t-text-a6a0.97f9fae7b']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle"></t-text><t-text id="t-text-4814.5352a3d92" class="airOverviewSiteForHourDay-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle"></t-text><t-text id="t-text-5684.74cfc6ae8" class="airOverviewSiteForHourDay-t-text-0-8"  :label="replaceCssVariables(filterData(state.baseInfo.POINT_NAME, componentPropBindingMap?.['t-text-5684.74cfc6ae8']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x8ComputedData.editable" :c-style="tTextx0x8ComputedData.cStyle"></t-text><t-rect id="t-rect-6168.eab21c16c" class="airOverviewSiteForHourDay-t-rect-0-9"  :tip="tRectx0x9ComputedData.tip" :label="tRectx0x9ComputedData.label" :active="tRectx0x9ComputedData.active" :c-style="tRectx0x9ComputedData.cStyle"></t-rect><t-component id="t-component-de34.fd40a7697" class="airOverviewSiteForHourDay-t-component-0-10"  :name="replaceCssVariables(filterData(state.contentComponentName, componentPropBindingMap?.['t-component-de34.fd40a7697']['name'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tComponentx0x10ComputedData.cStyle" :src="tComponentx0x10ComputedData.src" :component-name="replaceCssVariables(filterData(state.contentComponentName, componentPropBindingMap?.['t-component-de34.fd40a7697']['componentName'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-component><t-rect id="t-rect-1555.727b60852" class="airOverviewSiteForHourDay-t-rect-0-11"  :tip="tRectx0x11ComputedData.tip" :label="tRectx0x11ComputedData.label" :active="tRectx0x11ComputedData.active" :c-style="tRectx0x11ComputedData.cStyle"></t-rect><t-text id="t-text-47cb.e45295999" class="airOverviewSiteForHourDay-t-text-0-12"  :label="tTextx0x12ComputedData.label" :editable="tTextx0x12ComputedData.editable" :c-style="tTextx0x12ComputedData.cStyle" @click="onclick1735194487642"></t-text><t-text id="t-text-4258.da420a316" class="airOverviewSiteForHourDay-t-text-0-13"  :label="tTextx0x13ComputedData.label" :editable="tTextx0x13ComputedData.editable" :c-style="tTextx0x13ComputedData.cStyle" @click="onclick1735193347621"></t-text><t-rect id="t-rect-afae.576bf09ee" class="airOverviewSiteForHourDay-t-rect-0-14"  :tip="tRectx0x14ComputedData.tip" :label="tRectx0x14ComputedData.label" :active="tRectx0x14ComputedData.active" :c-style="tRectx0x14ComputedData.cStyle"></t-rect><t-rect id="t-rect-26fc.42aa488dd" class="airOverviewSiteForHourDay-t-rect-0-15"  :tip="tRectx0x15ComputedData.tip" :label="tRectx0x15ComputedData.label" :active="tRectx0x15ComputedData.active" :c-style="tRectx0x15ComputedData.cStyle" @click="onclick1734493226123"></t-rect><t-rect id="t-rect-34a5.af51f2589" class="airOverviewSiteForHourDay-t-rect-0-17"  :tip="tRectx0x17ComputedData.tip" :label="tRectx0x17ComputedData.label" :active="tRectx0x17ComputedData.active" :c-style="tRectx0x17ComputedData.cStyle"></t-rect><t-row id="t-row-b022.4d036d6d7" class="airOverviewSiteForHourDay-t-row-0-18"  :c-style="tRowx0x18ComputedData.cStyle" :gutter="tRowx0x18ComputedData.gutter" :justify="tRowx0x18ComputedData.justify" :align="tRowx0x18ComputedData.align"><t-text id="t-text-a3dd.58079667c" class="airOverviewSiteForHourDay-t-text-0-18-0"  :label="replaceCssVariables(filterData(state.pageTitle, componentPropBindingMap?.['t-text-a3dd.58079667c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x18x0ComputedData.editable" :c-style="tTextx0x18x0ComputedData.cStyle"></t-text><t-list-card-common id="t-list-card-common-2ac1.1accf4268" class="airOverviewSiteForHourDay-t-list-card-common-0-18-2"  :c-style="tListCardCommonx0x18x2ComputedData.cStyle" :key-word="tListCardCommonx0x18x2ComputedData.keyWord" :default-checked="tListCardCommonx0x18x2ComputedData.defaultChecked" :tab="tListCardCommonx0x18x2ComputedData.tab" :collapse="tListCardCommonx0x18x2ComputedData.collapse" :collapse-text="tListCardCommonx0x18x2ComputedData.collapseText" :display-count="tListCardCommonx0x18x2ComputedData.displayCount" :data-alias="tListCardCommonx0x18x2ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.AQI_LEVEL, componentPropBindingMap?.['t-list-card-common-2ac1.1accf4268']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-list-card-common><t-text id="t-text-b518.db587dc79" class="airOverviewSiteForHourDay-t-text-0-18-3"  :label="replaceCssVariables(filterData(state.headerInfo.POINT_TYPE_NAME, componentPropBindingMap?.['t-text-b518.db587dc79']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x18x3ComputedData.editable" :c-style="tTextx0x18x3ComputedData.cStyle"></t-text><t-text id="t-text-1707.1c3affeec" class="airOverviewSiteForHourDay-t-text-0-18-4"  :label="replaceCssVariables(filterData(state.firstPollution, componentPropBindingMap?.['t-text-1707.1c3affeec']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x18x4ComputedData.editable" :c-style="tTextx0x18x4ComputedData.cStyle" :show-title="tTextx0x18x4ComputedData.showTitle"></t-text></t-row><t-rect v-if="state.dividerShow.divider4Show === true" id="t-rect-dbe9.2faf12399" class="airOverviewSiteForHourDay-t-rect-0-19"  :tip="tRectx0x19ComputedData.tip" :label="tRectx0x19ComputedData.label" :active="tRectx0x19ComputedData.active" :c-style="tRectx0x19ComputedData.cStyle"></t-rect><t-rect v-if="state.dividerShow.divider3Show === true" id="t-rect-040f.cf89ce338" class="airOverviewSiteForHourDay-t-rect-0-20"  :tip="tRectx0x20ComputedData.tip" :label="tRectx0x20ComputedData.label" :active="tRectx0x20ComputedData.active" :c-style="tRectx0x20ComputedData.cStyle"></t-rect><t-rect v-if="state.dividerShow.divider2Show === true" id="t-rect-e410.010ead23b" class="airOverviewSiteForHourDay-t-rect-0-21"  :tip="tRectx0x21ComputedData.tip" :label="tRectx0x21ComputedData.label" :active="tRectx0x21ComputedData.active" :c-style="tRectx0x21ComputedData.cStyle"></t-rect><t-rect v-if="state.dividerShow.divider1Show === true" id="t-rect-71bb.c78993887" class="airOverviewSiteForHourDay-t-rect-0-22"  :tip="tRectx0x22ComputedData.tip" :label="tRectx0x22ComputedData.label" :active="tRectx0x22ComputedData.active" :c-style="tRectx0x22ComputedData.cStyle"></t-rect><t-tabs id="t-tabs-3f14.634f07a5d" class="airOverviewSiteForHourDay-t-tabs-0-23"  :data="replaceCssVariables(filterData(state.menuData, componentPropBindingMap?.['t-tabs-3f14.634f07a5d']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active-tab="replaceCssVariables(filterData(state.menuSelect, componentPropBindingMap?.['t-tabs-3f14.634f07a5d']['activeTab'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :tab-position-extend="tTabsx0x23ComputedData.tabPositionExtend" :stretch="tTabsx0x23ComputedData.stretch" :c-style="tTabsx0x23ComputedData.cStyle" @tab-click="ontabClick1734060040385"></t-tabs></div>
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
import { TComponent, TListCardCommon, TRect, TRow, TTabs, TText } from '@ths/design';

export default {
  components: {
    TComponent,
    TListCardCommon,
    TRect,
    TRow,
    TTabs,
    TText,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-09e8.3b71afa9a":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-a1bb.dfcf8b5c8":{"attributeName":"tTextx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-3cee.4354210c7":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-70a5.c8a261cab":{"attributeName":"tTextx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-fb01.6004095de":{"attributeName":"tTextx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-82fa.d65c07c73":{"attributeName":"tTextx0x5","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-a6a0.97f9fae7b":{"attributeName":"tTextx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-4814.5352a3d92":{"attributeName":"tTextx0x7","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-5684.74cfc6ae8":{"attributeName":"tTextx0x8","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-6168.eab21c16c":{"attributeName":"tRectx0x9","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-de34.fd40a7697":{"attributeName":"tComponentx0x10","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-rect-1555.727b60852":{"attributeName":"tRectx0x11","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-47cb.e45295999":{"attributeName":"tTextx0x12","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-4258.da420a316":{"attributeName":"tTextx0x13","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-afae.576bf09ee":{"attributeName":"tRectx0x14","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-26fc.42aa488dd":{"attributeName":"tRectx0x15","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-ef99.94df0e493":{"attributeName":"tRectx0x16"},"t-rect-34a5.af51f2589":{"attributeName":"tRectx0x17","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-row-b022.4d036d6d7":{"attributeName":"tRowx0x18","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-a3dd.58079667c":{"attributeName":"tTextx0x18x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-8624.21113972e":{"attributeName":"tTextx0x18x1"},"t-list-card-common-2ac1.1accf4268":{"attributeName":"tListCardCommonx0x18x2","cStyle":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"tab":{"filters":[]},"collapse":{"filters":[]},"collapseText":{"filters":[]},"displayCount":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]}},"t-text-b518.db587dc79":{"attributeName":"tTextx0x18x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-1707.1c3affeec":{"attributeName":"tTextx0x18x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"showTitle":{"filters":[]}},"t-rect-dbe9.2faf12399":{"attributeName":"tRectx0x19","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-040f.cf89ce338":{"attributeName":"tRectx0x20","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-e410.010ead23b":{"attributeName":"tRectx0x21","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-71bb.c78993887":{"attributeName":"tRectx0x22","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-3f14.634f07a5d":{"attributeName":"tTabsx0x23","data":{"filters":[]},"activeTab":{"filters":[]},"tabPositionExtend":{"filters":[]},"stretch":{"filters":[]},"cStyle":{"filters":[]}}};
// 页面内注入全局变量和事件
const rootData = inject('root');
const global = reactive({
...toRefs(rootData)
});
// 路由
const route = useRoute();
// 创建 DOM 引用

// 当前页面使用的变量
let state = reactive({
   screenSize: "",
   timeType: "",
   timeValue: "",
   dividerShow: {"divider2Show":false,"divider3Show":false,"divider4Show":false,"divider1Show":false},
   firstPollution: "首要污染物：--",
   AQI_LEVEL: [{"state":"--","stateColor":"rgba(0, 0, 0, 0.9)","stateBgColor":"#AAA"}],
   headerInfo: {"PRIMPOLLUTE":"--","POINT_TYPE_NAME":"--","AQILEVELINDEX":"--","AQI":"--"},
   baseInfo: {"POINT_NAME":"--","POINT_TYPE_NAME":"--","POINT_STREET":"--","POINT_ADDRESS":"--"},
   POINT_CODE: "",
   pageTitle: "--",
   contentComponentName: "",
   menuData: [],
   menuSelect: "",
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
            default: {"width":"1000px","height":"712px","position":"unset","left":"352px","top":"193px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"712px","position":"unset","left":"352px","top":"193px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"372px","top":"255px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px"},
            
            },
 default: { 
 
label:"站点名称",
editable:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"372px","top":"255px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px"}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"973px","top":"289px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"973px","top":"289px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px"}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"851px","top":"289px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"点位地址",
editable:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"851px","top":"289px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"973px","top":"255px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"973px","top":"255px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px"}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"851px","top":"255px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"点位类型",
editable:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"851px","top":"255px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"494px","top":"289px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"494px","top":"289px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px"}}}, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"372px","top":"289px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"所属区域",
editable:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"372px","top":"289px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x8: {
defaultStyle: {
            default: {"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"494px","top":"255px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"494px","top":"255px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px"}}}, 
 },
},
tRectx0x9: {
defaultStyle: {
            default: {"width":"820px","height":"495px","position":"unset","left":"512px","top":"343px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg15)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"820px","height":"495px","position":"unset","left":"512px","top":"343px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tComponentx0x10: {
defaultStyle: {
            default: {"width":"788px","height":"468px","margin":"0 auto","backgroundColor":"rgba(23, 62, 228, 0)","position":"unset","left":"528px","top":"358px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingTop":"0px","paddingLeft":"0px","paddingRight":"0px","paddingBottom":"0px"},
            
            },
 default: { 
 
name:"",
cStyle:{"wrapper":{"default":{"width":"788px","height":"468px","margin":"0 auto","backgroundColor":"rgba(23, 62, 228, 0)","position":"unset","left":"528px","top":"358px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingTop":"0px","paddingLeft":"0px","paddingRight":"0px","paddingBottom":"0px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/",
componentName:"", 
 },
},
tRectx0x11: {
defaultStyle: {
            default: {"width":"1000px","height":"52px","position":"unset","left":"353px","top":"854px","borderLeft":"0px solid ","borderTop":"1px solid var(--business-show-bg60)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg15)","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"52px","position":"unset","left":"353px","top":"854px","borderLeft":"0px solid ","borderTop":"1px solid var(--business-show-bg60)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg15)","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px"}}}, 
 },
},
tTextx0x12: {
defaultStyle: {
            default: {"width":"90px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1123px","top":"866px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"url(assets/images/2024-12-20/3c714aa9ef1f4a52b486174bf3251114.svg)","backgroundPosition":"8px 50%","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer"},
            
            },
 default: { 
 
label:"周边查询",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1123px","top":"866px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"url(assets/images/2024-12-20/3c714aa9ef1f4a52b486174bf3251114.svg)","backgroundPosition":"8px 50%","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer"}}}, 
 },
},
tTextx0x13: {
defaultStyle: {
            default: {"width":"90px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1243px","top":"866px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"url(assets/images/2024-12-20/4b0f0f4a90cb400398be94b58b52cf90.svg)","backgroundPosition":"22px 50%","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"溯源",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1243px","top":"866px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"url(assets/images/2024-12-20/4b0f0f4a90cb400398be94b58b52cf90.svg)","backgroundPosition":"22px 50%","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""}}}, 
 },
},
tRectx0x14: {
defaultStyle: {
            default: {"width":"1000px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"352px","top":"194px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"352px","top":"194px","animationName":""}}}, 
 },
},
tRectx0x15: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1304px","top":"205px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1304px","top":"205px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tRectx0x17: {
defaultStyle: {
            default: {"width":"121px","height":"495px","backgroundColor":"var(--business-show-bg15)","position":"unset","left":"372px","top":"343px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"121px","height":"495px","backgroundColor":"var(--business-show-bg15)","position":"unset","left":"372px","top":"343px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}}}, 
 },
},
tRowx0x18: {
defaultStyle: {
            default: {"width":"885px","height":"41px","position":"unset","left":"371px","top":"197px","whiteSpace":"nowrap","textOverflow":"ellipsis"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"885px","height":"41px","position":"unset","left":"371px","top":"197px","whiteSpace":"nowrap","textOverflow":"ellipsis"}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x18x0: {
defaultStyle: {
            default: {"width":"auto","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"507px","top":"-179px","backgroundImage":"url(assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":"","whiteSpace":"nowrap","overflow":"hidden","marginRight":"16px","textOverflow":"ellipsis","max-width":"620px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"507px","top":"-179px","backgroundImage":"url(assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":"","whiteSpace":"nowrap","overflow":"hidden","marginRight":"16px","textOverflow":"ellipsis","max-width":"620px"}}}, 
 },
},
tListCardCommonx0x18x2: {
defaultStyle: {
            default: {"position":"unset","width":"44px","height":"22px","left":"560px","top":"155px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"0px","marginRight":"10px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"position":"unset","width":"44px","height":"22px","left":"560px","top":"155px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"0px","marginRight":"10px"}},"listBody":{"default":{"backgroundColor":"rgba(223, 12, 12, 0)","width":"auto"}},"card":{"default":{"backgroundColor":"rgba(6, 240, 13, 0)","paddingTop":"0px","paddingBottom":"0px","paddingRight":"0px","paddingLeft":"0px"}},"cardItemInfo":{"default":{"display":"none"}},"checkedCardIcon":{"default":{"display":"none"}},"cardStatus":{"default":{"position":"static","width":"44px","height":"22px","fontSize":"14px","lineHeight":"22px","borderTopLeftRadius":"10px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"10px","textAlign":"center"}},"cardIcon":{"default":{"display":"none"}}},
keyWord:"",
defaultChecked:"",
tab:false,
collapse:false,
collapseText:"数据",
displayCount:"0",
dataAlias:{"header":"header","icon":"icon","label":"label","value":"value","state":"state","stateColor":"stateColor","stateBgColor":"stateBgColor","list":"list","labelColor":"labelColor","labelBgColor":"labelBgColor","type":"type","src":"src"},
data:[{"state":"--","stateColor":"rgba(0, 0, 0, 0.9)","stateBgColor":"#AAA"}], 
 },
},
tTextx0x18x3: {
defaultStyle: {
            default: {"width":"auto","height":"22px","color":"rgba(0, 255, 200, 1)","position":"unset","left":"256px","top":"-229px","padding":"0 4px","backgroundColor":"","fontSize":"14px","lineHeight":"22px","textAlign":"center","borderTopLeftRadius":"10px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"10px","animationName":"","borderLeft":"1px solid rgba(0,255,200,1)","borderTop":"1px solid rgba(0,255,200,1)","borderRight":"1px solid rgba(0,255,200,1)","borderBottom":"1px solid rgba(0,255,200,1)","marginRight":"10px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"22px","color":"rgba(0, 255, 200, 1)","position":"unset","left":"256px","top":"-229px","padding":"0 4px","backgroundColor":"","fontSize":"14px","lineHeight":"22px","textAlign":"center","borderTopLeftRadius":"10px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"10px","animationName":"","borderLeft":"1px solid rgba(0,255,200,1)","borderTop":"1px solid rgba(0,255,200,1)","borderRight":"1px solid rgba(0,255,200,1)","borderBottom":"1px solid rgba(0,255,200,1)","marginRight":"10px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tTextx0x18x4: {
defaultStyle: {
            default: {"width":"300px","height":"20px","color":"#fff","position":"unset","left":"248px","top":"-198px","fontSize":"14px","lineHeight":"20px","animationName":"","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},
            
            },
 default: { 
 
label:"首要污染物：--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"300px","height":"20px","color":"#fff","position":"unset","left":"248px","top":"-198px","fontSize":"14px","lineHeight":"20px","animationName":"","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}},
showTitle:true, 
 },
},
tRectx0x19: {
defaultStyle: {
            default: {"width":"80px","height":"1px","position":"unset","left":"392px","top":"550px","backgroundColor":"rgba(255, 255, 255, 0.1)","animationName":"","borderLeft":"1px none rgba(255,255,255,0.1)","borderTop":"1px solid rgba(255,255,255,0.1)","borderRight":"1px none rgba(255,255,255,0.1)","borderBottom":"1px none rgba(255,255,255,0.1)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"80px","height":"1px","position":"unset","left":"392px","top":"550px","backgroundColor":"rgba(255, 255, 255, 0.1)","animationName":"","borderLeft":"1px none rgba(255,255,255,0.1)","borderTop":"1px solid rgba(255,255,255,0.1)","borderRight":"1px none rgba(255,255,255,0.1)","borderBottom":"1px none rgba(255,255,255,0.1)"}}}, 
 },
},
tRectx0x20: {
defaultStyle: {
            default: {"width":"80px","height":"1px","position":"unset","left":"392px","top":"499px","backgroundColor":"rgba(255, 255, 255, 0.1)","animationName":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderLeft":"1px none rgba(255,255,255,0.1)","borderTop":"1px solid rgba(255,255,255,0.1)","borderRight":"1px none rgba(255,255,255,0.1)","borderBottom":"1px none rgba(255,255,255,0.1)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"80px","height":"1px","position":"unset","left":"392px","top":"499px","backgroundColor":"rgba(255, 255, 255, 0.1)","animationName":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderLeft":"1px none rgba(255,255,255,0.1)","borderTop":"1px solid rgba(255,255,255,0.1)","borderRight":"1px none rgba(255,255,255,0.1)","borderBottom":"1px none rgba(255,255,255,0.1)"}}}, 
 },
},
tRectx0x21: {
defaultStyle: {
            default: {"width":"80px","height":"1px","position":"unset","left":"392px","top":"447px","backgroundColor":"rgba(255, 255, 255, 0.1)","animationName":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"1px solid rgba(255,255,255,0.1)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"80px","height":"1px","position":"unset","left":"392px","top":"447px","backgroundColor":"rgba(255, 255, 255, 0.1)","animationName":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"1px solid rgba(255,255,255,0.1)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}}, 
 },
},
tRectx0x22: {
defaultStyle: {
            default: {"width":"80px","height":"1px","position":"unset","left":"392px","top":"395px","backgroundColor":"rgba(255, 255, 255, 0.1)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderLeft":"1px none rgba(255,255,255,0.1)","borderTop":"1px solid rgba(255,255,255,0.1)","borderRight":"1px none rgba(255,255,255,0.1)","borderBottom":"1px none rgba(255,255,255,0.1)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"80px","height":"1px","position":"unset","left":"392px","top":"395px","backgroundColor":"rgba(255, 255, 255, 0.1)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderLeft":"1px none rgba(255,255,255,0.1)","borderTop":"1px solid rgba(255,255,255,0.1)","borderRight":"1px none rgba(255,255,255,0.1)","borderBottom":"1px none rgba(255,255,255,0.1)"}}}, 
 },
},
tTabsx0x23: {
defaultStyle: {
            default: {"width":"121px","height":"120px","position":"unset","left":"364px","top":"335px","backgroundColor":"rgba(23, 62, 228, 0)","paddingLeft":"8px","paddingRight":"0px","marginLeft":"0px","paddingBottom":"0","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
data:[],
activeTab:"",
tabPositionExtend:"right",
stretch:true,
cStyle:{"wrapper":{"default":{"width":"121px","height":"120px","position":"unset","left":"364px","top":"335px","backgroundColor":"rgba(23, 62, 228, 0)","paddingLeft":"8px","paddingRight":"0px","marginLeft":"0px","paddingBottom":"0","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"itemActiveBorder":{"default":{"width":"4px"}},"itemWrapper":{"default":{"marginRight":"0px","color":"var(--t-white)","textAlign":"center!important","width":"103px","height":"32px","marginLeft":"1px","fontSize":"14px","lineHeight":"32px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginBottom":"20px","borderLeft":"0px solid rgba(255,255,255,0.2)","borderTop":"0px solid rgba(255,255,255,0.2)","borderRight":"0px solid rgba(255,255,255,0.2)","borderBottom":"1px none rgba(255,255,255,0.2)"},"hover":{"background":"var(--business-site-menu-active)","boxShadow":"inset 0px 0px 18px 0px rgba(255, 206, 109, 0.49)","borderLeft":"1px solid #FFEFC9","borderTop":"1px solid #FFEFC9","borderRight":"1px solid #FFEFC9","borderBottom":"1px solid #FFEFC9","fontSize":"14px","borderTopLeftRadius":"32px","borderTopRightRadius":"32px","borderBottomLeftRadius":"32px","borderBottomRightRadius":"32px","textAlign":"center"},"active":{"background":"var(--business-site-menu-active)","color":"var(--t-white)","borderLeft":"1px solid #FFEFC9","borderTop":"1px solid #FFEFC9","borderRight":"1px solid #FFEFC9","borderBottom":"1px solid #FFEFC9","boxShadow":"inset 0px 0px 18px 0px rgba(255, 206, 109, 0.49)","fontSize":"14px","lineHeight":"32px","borderTopLeftRadius":"32px","borderTopRightRadius":"32px","borderBottomLeftRadius":"32px","borderBottomRightRadius":"32px","marginBottom":"20px","textAlign":"center"}},"nextIcon":{"default":{"display":"block"}}}, 
 },
},
});
const setContentComponentName = (menuValue) => {
if (!menuValue) return;
switch (menuValue) {
  // 实时监测
  case 'realTimeMonitor':
    state.contentComponentName = 'airOverviewSiteRealtimeMonitorComponent';
    break;
  // 变化趋势
  case 'changeTrend':
    state.contentComponentName = 'airOverviewSiteChangeTrentComponent';
    break;
  // 气象分析
  case 'meteorologyAna':
    state.contentComponentName = 'airOverviewSiteMeteorologyAnalComponent';
    break;
  // 报警记录
  case 'warnRecord':
    state.contentComponentName = 'airOverviewSiteWarnRecordComponent';
    break;
  // 关联站点
  case 'airOverviewSiteRelatedSite':
    state.contentComponentName = 'airOverviewSiteRelatedSiteComponent';
    break;
  default:
    break;
}
};
const initPage = () => {
console.log(global.businessDialog.dialogParmas, 'test');
if (global.businessDialog.dialogParmas.layerName === '航拍点位') {
  global.businessDialog.dialogName = '';
  // return;
}
state.POINT_CODE = global.businessDialog.dialogParmas.POINT_CODE;
state.timeType = global.air.timeType;
state.timeValue = global.air.timeValue;
if (state.POINT_CODE) {
  apiRegistry.getBaseInfo.request();
  apiRegistry.getHeaderInfo.request();
  apiRegistry.getMenu.request();
}
};
const setProvider = () => {
provide('airPointState', state);
};
const getAQIColor = (level) => {
/**
 * 获取等级数据
 * level：aqi等级值，1-6，无数据为7
 */
switch (level) {
  case '1':
  case 1:
    return '#00E400';
  case '2':
  case 2:
    return '#FFFF00';
  case '3':
  case 3:
    return '#FF7E00';
  case '4':
  case 4:
    return '#FF0000';
  case '5':
  case 5:
    return '#99004C';
  case '6':
  case 6:
    return '#7E0023';
  case '7':
  case 7:
    return '#AAAAAA';
  default:
    return '#AAAAAA';
}
};
const handleClickQuery = () => {
const pointInfo = global.businessDialog.dialogParmas;
// 周边查询
const pointLocation = [];
pointLocation.push(parseFloat(pointInfo.LONGITUDE));
pointLocation.push(parseFloat(pointInfo.LATITUDE));

/* 发送webSocket消息 */
/*if (rootData?.sendMessage) {
  rootData?.sendMessage({
    id: guid(true, 'lego'), // 唯一索引
    type: "runInteractive", // 消息名称
    data: [ // 消息内容
      { shareCode: "POINT_LOACTION", runtimeValue: JSON.stringify(pointLocation) },
      { shareCode: "POINT_LOACTION_NAME", runtimeValue: pointInfo.POINT_NAME }
    ]
  });
}*/

rootData.rootSocket.emit('message', {
  type: 'showAirTraceDetail',
  room: global.socketRoom,
  data: [ // 消息内容
    { shareCode: "POINT_LOACTION", runtimeValue: JSON.stringify(pointLocation) },
    { shareCode: "POINT_LOACTION_NAME", runtimeValue: pointInfo.POINT_NAME }
  ]
});
global.businessDialog.dialogName = '';
};
const handleClickTrace = () => {
// 发送消息给地图
rootData.rootSocket.emit('message', {
  type: 'showAirSourceTrace',
  room: global.socketRoom,
  data: [ // 消息内容
    {
      shareCode: "showAirSourceTrace",
      runtimeValue: state.POINT_CODE,
      pointType: global.businessDialog.dialogParmas.POINT_TYPE || '',
      isEnters: true,
      // 小时或天时间，天的时候拼接上 00
      traceTime: global.air.timeType === 'hour' ? global.air.timeValue : global.air.timeValue + ' 00',
      layerName: global.businessDialog.dialogParmas.layerName,
    }]
});

// POINT_CODE: '51018201001',
//   alarmTime: '2021-03-23 17',
//   aqiLevel: '2', // aqi级别 0：未获取数据 1： 优良 2：超标
//   primPollute: 'PM10', // 首要污染物
//   polluteLevel: '中度污染', // 污染级别
// isShowAlarmFlag: false
// endTime: '2021-03-23 17'
// pointType: '4'

/* 发送webSocket消息 */
// 超标状态-默认0，AQILEVELINDEX = 1,2 等于1， 优良 AQI > 100 超标，等于2
let exceedingTheStandardState = '0';
// 点位aqi等级level值
const pointAQILevelIndex = global.businessDialog.dialogParmas.AQI_LEVELINDEX || '';
if (pointAQILevelIndex) {
  if (pointAQILevelIndex === '1' || pointAQILevelIndex === '2') {
    exceedingTheStandardState = '1';
  } else if (global.businessDialog.dialogParmas.AQI > 100) {
    exceedingTheStandardState = '2';
  }
}
rootData.rootSocket.emit('message', {
  // id: guid(true, 'lego'), // 唯一索引
  type: 'showAirTraceDetail',
  room: global.socketRoom,
  data: [
    {
      shareCode: "showTraceDetail",
      runtimeValue: state.POINT_CODE,
      // 显示lego的溯源
      componentName: "waringForecastSyxqPanelComponent",
      componentParmas: {
        pointType: global.businessDialog.dialogParmas.POINT_TYPE || '',
        isShowAlarmFlag: global.businessDialog.dialogParmas.IS_BJ === '1',
        alarmTime: global.businessDialog.dialogParmas.AIRMONITORTIME || '',
        exceedingTheStandardState,
        primPollute: global.businessDialog.dialogParmas.PRIMPOLLUTE || '',
        polluteLevel: global.businessDialog.dialogParmas.POLLUTE_LAVEL || '',
        POINT_CODE: state.POINT_CODE,
        endTime: '',
      }
    }]
});

global.businessDialog.dialogName = '';
global.warningRightPointCode = state.POINT_CODE;
};
const onclick1735194487642 = () => {
// 执行自定义方法
handleClickQuery();
};
const onclick1735193347621 = () => {
// 执行自定义方法
handleClickTrace();
};
const onclick1734493226123 = () => {
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
const ontabClick1734060040385 = (data) => {
// 设置变量值
state.menuSelect = data.name;
// 执行自定义方法
setContentComponentName(data.name);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getMenu: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.POINT_CODE","interfaceId":"365bdf06e6206428a083f238d4de166e"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.POINT_CODE,"interfaceId":"365bdf06e6206428a083f238d4de166e"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.POINT_CODE,"interfaceId":"365bdf06e6206428a083f238d4de166e"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMenu'] = res.data;
                
     
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  state.menuData = data.data.map(item => {
    return {
      name: item.NAME,
      label: item.LABEL,
      ...item
    }
  });
  state.menuSelect = state.menuData[0] && state.menuData[0].name || '';
  setContentComponentName(state.menuSelect);
  // 分割线显示
  state.dividerShow.divider1Show = state.menuData.length > 1;
  state.dividerShow.divider2Show = state.menuData.length > 2;
  state.dividerShow.divider3Show = state.menuData.length > 3;
  state.dividerShow.divider4Show = state.menuData.length > 4;
  let navTab = document.getElementById('t-tabs-3f14.634f07a5d');
  if (navTab && navTab.style) {
    navTab.style.height = state.menuData.length * 54 + 32 + 'px';
  }
} else {
  state.menuData = [];
  state.menuSelect = '';
  state.dividerShow.divider1Show = false;
  state.dividerShow.divider2Show = false;
  state.dividerShow.divider3Show = false;
  state.dividerShow.divider4Show = false;
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
 getBaseInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.POINT_CODE","interfaceId":"695a6bc133482fdb411d79f293380132"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.POINT_CODE,"interfaceId":"695a6bc133482fdb411d79f293380132"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.POINT_CODE,"interfaceId":"695a6bc133482fdb411d79f293380132"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     state.baseInfo = {
  "POINT_NAME": "--",
  "POINT_TYPE_NAME": "--",
  "POINT_STREET": "--",
  "POINT_ADDRESS": "--"
}
state.pageTitle = "--"
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  state.baseInfo = { ...data.data }
state.pageTitle = data.data.POINT_NAME || "--"
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.baseInfo = {
  "POINT_NAME": "--",
  "POINT_TYPE_NAME": "--",
  "POINT_STREET": "--",
  "POINT_ADDRESS": "--"
}
state.pageTitle = "--"
      reject(error);
    });
  });
},
              },
// 接口函数
 getHeaderInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"MONITORTIME":"state.timeValue","TIME_TYPE":"state.timeType","POINT_CODE":"state.POINT_CODE","interfaceId":"5f8e9ef373ff8dc7328c8d9b3585947a"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":state.timeValue,"TIME_TYPE":state.timeType,"POINT_CODE":state.POINT_CODE,"interfaceId":"5f8e9ef373ff8dc7328c8d9b3585947a"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"MONITORTIME":state.timeValue,"TIME_TYPE":state.timeType,"POINT_CODE":state.POINT_CODE,"interfaceId":"5f8e9ef373ff8dc7328c8d9b3585947a"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getHeaderInfo'] = res.data;
                
     state.headerInfo = {
  "PRIMPOLLUTE": "--",
  "POINT_TYPE_NAME": "--",
  "AQILEVELINDEX": "--",
  "AQI": "--"
};
state.firstPollution = "首要污染物：--"
state.AQI_LEVEL[0].state = "--";
state.AQI_LEVEL[0].stateBgColor = getAQIColor("");
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  state.headerInfo = data.data
  state.AQI_LEVEL[0].state = data.data.AQI || "--";
  state.AQI_LEVEL[0].stateBgColor = getAQIColor(data.data.AQILEVELINDEX || "");
  state.firstPollution = `首要污染物：${replacePollutionCharacter(state.headerInfo.PRIMPOLLUTE || "--")}`
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.headerInfo = {
  "PRIMPOLLUTE": "--",
  "POINT_TYPE_NAME": "--",
  "AQILEVELINDEX": "--",
  "AQI": "--"
};
state.AQI_LEVEL[0].state = "--";
state.AQI_LEVEL[0].stateBgColor = getAQIColor("");
state.firstPollution = "首要污染物：--"
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewSiteForHourDayCopy', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPage();
// 执行自定义方法
setProvider();
onMounted(() => {
setPageScale('t-l-c-airOverviewSiteForHourDayCopy', global.appScaleMode, 'normal');
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

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tTextx0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x8.default, componentState.tTextx0x8?.[state.screenSize]));

 const tRectx0x9ComputedData = computed(() => _.merge({}, componentState.tRectx0x9.default, componentState.tRectx0x9?.[state.screenSize]));

 const tComponentx0x10ComputedData = computed(() => _.merge({}, componentState.tComponentx0x10.default, componentState.tComponentx0x10?.[state.screenSize]));

 const tRectx0x11ComputedData = computed(() => _.merge({}, componentState.tRectx0x11.default, componentState.tRectx0x11?.[state.screenSize]));

 const tTextx0x12ComputedData = computed(() => _.merge({}, componentState.tTextx0x12.default, componentState.tTextx0x12?.[state.screenSize]));

 const tTextx0x13ComputedData = computed(() => _.merge({}, componentState.tTextx0x13.default, componentState.tTextx0x13?.[state.screenSize]));

 const tRectx0x14ComputedData = computed(() => _.merge({}, componentState.tRectx0x14.default, componentState.tRectx0x14?.[state.screenSize]));

 const tRectx0x15ComputedData = computed(() => _.merge({}, componentState.tRectx0x15.default, componentState.tRectx0x15?.[state.screenSize]));

 const tRectx0x17ComputedData = computed(() => _.merge({}, componentState.tRectx0x17.default, componentState.tRectx0x17?.[state.screenSize]));

 const tRowx0x18ComputedData = computed(() => _.merge({}, componentState.tRowx0x18.default, componentState.tRowx0x18?.[state.screenSize]));

 const tTextx0x18x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x18x0.default, componentState.tTextx0x18x0?.[state.screenSize]));

 const tListCardCommonx0x18x2ComputedData = computed(() => _.merge({}, componentState.tListCardCommonx0x18x2.default, componentState.tListCardCommonx0x18x2?.[state.screenSize]));

 const tTextx0x18x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x18x3.default, componentState.tTextx0x18x3?.[state.screenSize]));

 const tTextx0x18x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x18x4.default, componentState.tTextx0x18x4?.[state.screenSize]));

 const tRectx0x19ComputedData = computed(() => _.merge({}, componentState.tRectx0x19.default, componentState.tRectx0x19?.[state.screenSize]));

 const tRectx0x20ComputedData = computed(() => _.merge({}, componentState.tRectx0x20.default, componentState.tRectx0x20?.[state.screenSize]));

 const tRectx0x21ComputedData = computed(() => _.merge({}, componentState.tRectx0x21.default, componentState.tRectx0x21?.[state.screenSize]));

 const tRectx0x22ComputedData = computed(() => _.merge({}, componentState.tRectx0x22.default, componentState.tRectx0x22?.[state.screenSize]));

 const tTabsx0x23ComputedData = computed(() => _.merge({}, componentState.tTabsx0x23.default, componentState.tTabsx0x23?.[state.screenSize]));

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
tRectx0x0ComputedData,
tTextx0x1ComputedData,
tTextx0x2ComputedData,
tTextx0x3ComputedData,
tTextx0x4ComputedData,
tTextx0x5ComputedData,
tTextx0x6ComputedData,
tTextx0x7ComputedData,
tTextx0x8ComputedData,
tRectx0x9ComputedData,
tComponentx0x10ComputedData,
tRectx0x11ComputedData,
tTextx0x12ComputedData,
tTextx0x13ComputedData,
tRectx0x14ComputedData,
tRectx0x15ComputedData,
tRectx0x17ComputedData,
tRowx0x18ComputedData,
tTextx0x18x0ComputedData,
tListCardCommonx0x18x2ComputedData,
tTextx0x18x3ComputedData,
tTextx0x18x4ComputedData,
tRectx0x19ComputedData,
tRectx0x20ComputedData,
tRectx0x21ComputedData,
tRectx0x22ComputedData,
tTabsx0x23ComputedData,
onclick1735194487642,
onclick1735193347621,
onclick1734493226123,
ontabClick1734060040385,
};
},
}
</script>

<style scoped>
.t-l-c-airOverviewSiteForHourDayCopy {
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
.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-rect-0-0 {
position: absolute !important;
top: 193px;
left: 352px;
width: 1000px;
height: 712px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-text-0-1 {
position: absolute !important;
top: 255px;
left: 372px;
width: 120px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-text-0-2 {
position: absolute !important;
top: 289px;
left: 973px;
width: 355px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-text-0-3 {
position: absolute !important;
top: 289px;
left: 851px;
width: 120px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-text-0-4 {
position: absolute !important;
top: 255px;
left: 973px;
width: 355px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-text-0-5 {
position: absolute !important;
top: 255px;
left: 851px;
width: 120px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-text-0-6 {
position: absolute !important;
top: 289px;
left: 494px;
width: 355px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-text-0-7 {
position: absolute !important;
top: 289px;
left: 372px;
width: 120px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-text-0-8 {
position: absolute !important;
top: 255px;
left: 494px;
width: 355px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-rect-0-9 {
position: absolute !important;
top: 343px;
left: 512px;
width: 820px;
height: 495px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-component-0-10 {
position: absolute !important;
top: 358px;
left: 528px;
width: 788px;
height: 468px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-rect-0-11 {
position: absolute !important;
top: 854px;
left: 353px;
width: 1000px;
height: 52px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-text-0-12 {
position: absolute !important;
top: 866px;
left: 1123px;
width: 90px;
height: 28px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-text-0-13 {
position: absolute !important;
top: 866px;
left: 1243px;
width: 90px;
height: 28px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-rect-0-14 {
position: absolute !important;
top: 194px;
left: 352px;
width: 1000px;
height: 47px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-rect-0-15 {
position: absolute !important;
top: 205px;
left: 1304px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-rect-0-17 {
position: absolute !important;
top: 343px;
left: 372px;
width: 121px;
height: 495px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-row-0-18 {
position: absolute !important;
top: 197px;
left: 371px;
width: 885px;
height: 41px;
pointer-events: auto;
white-space: nowrap;
text-overflow: ellipsis;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-text-0-18-0 {
position: unset;
top: -179px;
left: 507px;
width: auto;
height: 19px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-list-card-common-0-18-2 {
position: unset;
top: 155px;
left: 560px;
width: 44px;
height: 22px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-text-0-18-3 {
position: unset;
top: -229px;
left: 256px;
width: auto;
height: 22px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-text-0-18-4 {
position: unset;
top: -198px;
left: 248px;
width: 300px;
height: 20px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-rect-0-19 {
position: absolute !important;
top: 550px;
left: 392px;
width: 80px;
height: 1px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-rect-0-20 {
position: absolute !important;
top: 499px;
left: 392px;
width: 80px;
height: 1px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-rect-0-21 {
position: absolute !important;
top: 447px;
left: 392px;
width: 80px;
height: 1px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-rect-0-22 {
position: absolute !important;
top: 395px;
left: 392px;
width: 80px;
height: 1px;
pointer-events: auto;
}

.t-l-c-airOverviewSiteForHourDayCopy .airOverviewSiteForHourDay-t-tabs-0-23 {
position: absolute !important;
top: 335px;
left: 364px;
width: 121px;
height: 120px;
pointer-events: auto;
}
</style>
