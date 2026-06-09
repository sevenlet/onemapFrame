<template>
  <div id="t-l-c-ggpBaseInfo" class="t-l-c-ggpBaseInfo" ><t-list-card id="t-list-card-d9ab.2e21fb3b5" class="ggpBaseInfo-t-list-card-0-0"  :data="replaceCssVariables(filterData(state.baseInfoData, componentPropBindingMap?.['t-list-card-d9ab.2e21fb3b5']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x0ComputedData.spacingX" :col="tListCardx0x0ComputedData.col" :direction="tListCardx0x0ComputedData.direction" :exchange-order="tListCardx0x0ComputedData.exchangeOrder" :unit-break="tListCardx0x0ComputedData.unitBreak" :key-field="tListCardx0x0ComputedData.keyField" :active-key-field="tListCardx0x0ComputedData.activeKeyField" :active="tListCardx0x0ComputedData.active" :c-style="tListCardx0x0ComputedData.cStyle"></t-list-card><t-component id="t-component-c019.99b6d840a" class="ggpBaseInfo-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode"></t-component><t-text id="t-text-62b3.48b14905c" class="ggpBaseInfo-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle"></t-text><t-circle id="t-circle-7dbd.196078e2c" class="ggpBaseInfo-t-circle-0-3"  :tip="tCirclex0x3ComputedData.tip" :label="tCirclex0x3ComputedData.label" :active="tCirclex0x3ComputedData.active" :c-style="tCirclex0x3ComputedData.cStyle"></t-circle><t-text id="t-text-e92f.6243867ce" class="ggpBaseInfo-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle"></t-text><t-scrollable-cards id="t-scrollable-cards-455f.ff3a2c962" class="ggpBaseInfo-t-scrollable-cards-0-5"  :c-style="tScrollableCardsx0x5ComputedData.cStyle" :show-icon="tScrollableCardsx0x5ComputedData.showIcon" :auto-scroll="tScrollableCardsx0x5ComputedData.autoScroll" :tab="tScrollableCardsx0x5ComputedData.tab" :key-word="tScrollableCardsx0x5ComputedData.keyWord" :default-checked="tScrollableCardsx0x5ComputedData.defaultChecked" :speed="tScrollableCardsx0x5ComputedData.speed" :interval="tScrollableCardsx0x5ComputedData.interval" :card-space="tScrollableCardsx0x5ComputedData.cardSpace" :direction="tScrollableCardsx0x5ComputedData.direction" :data-alias="tScrollableCardsx0x5ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.monitorData, componentPropBindingMap?.['t-scrollable-cards-455f.ff3a2c962']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-scrollable-cards><t-row id="t-row-3ae9.949fc1c3b" class="ggpBaseInfo-t-row-0-6"  :c-style="tRowx0x6ComputedData.cStyle" :gutter="tRowx0x6ComputedData.gutter" :justify="tRowx0x6ComputedData.justify" :align="tRowx0x6ComputedData.align"><t-col id="t-col-5c12.21387b6cc" class="ggpBaseInfo-t-col-0-6-0"  :span="tColx0x6x0ComputedData.span" :offset="tColx0x6x0ComputedData.offset" :push="tColx0x6x0ComputedData.push" :pull="tColx0x6x0ComputedData.pull" :c-style="tColx0x6x0ComputedData.cStyle"><t-text id="t-text-9e76.f1f25f665" class="ggpBaseInfo-t-text-0-6-0-0"  :label="tTextx0x6x0x0ComputedData.label" :editable="tTextx0x6x0x0ComputedData.editable" :c-style="tTextx0x6x0x0ComputedData.cStyle"></t-text><t-tabs-base id="t-tabs-base-b026.64aa601ed" class="ggpBaseInfo-t-tabs-base-0-6-0-1"  :data="replaceCssVariables(filterData(state.dateList, componentPropBindingMap?.['t-tabs-base-b026.64aa601ed']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :space="tTabsBasex0x6x0x1ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.tabSelect, componentPropBindingMap?.['t-tabs-base-b026.64aa601ed']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x6x0x1ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x6x0x1ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x6x0x1ComputedData.alias" :c-style="tTabsBasex0x6x0x1ComputedData.cStyle" @tab-click="ontabClick1767858920713_0_0"></t-tabs-base></t-col><t-col id="t-col-7c2b.58b3496e4" class="ggpBaseInfo-t-col-0-6-1"  :span="tColx0x6x1ComputedData.span" :offset="tColx0x6x1ComputedData.offset" :push="tColx0x6x1ComputedData.push" :pull="tColx0x6x1ComputedData.pull" :c-style="tColx0x6x1ComputedData.cStyle"><t-date-picker v-if="state.tabSelect === 'month'" id="t-date-picker-b356.86cbc2728" class="ggpBaseInfo-t-date-picker-0-6-1-0"  :placeholder="tDatePickerx0x6x1x0ComputedData.placeholder" :start-placeholder="tDatePickerx0x6x1x0ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x6x1x0ComputedData.endPlaceholder" :type="tDatePickerx0x6x1x0ComputedData.type" :clearable="tDatePickerx0x6x1x0ComputedData.clearable" :range-separator="tDatePickerx0x6x1x0ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeRange, componentPropBindingMap?.['t-date-picker-b356.86cbc2728']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x6x1x0ComputedData.separator" :readonly="tDatePickerx0x6x1x0ComputedData.readonly" :editable="tDatePickerx0x6x1x0ComputedData.editable" :c-style="tDatePickerx0x6x1x0ComputedData.cStyle" @date-change="ondateChange1735549171926"></t-date-picker><t-date-picker v-if="state.tabSelect === 'day'" id="t-date-picker-5fcc.35ea326ca" class="ggpBaseInfo-t-date-picker-0-6-1-1"  :placeholder="tDatePickerx0x6x1x1ComputedData.placeholder" :start-placeholder="tDatePickerx0x6x1x1ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x6x1x1ComputedData.endPlaceholder" :type="tDatePickerx0x6x1x1ComputedData.type" :clearable="tDatePickerx0x6x1x1ComputedData.clearable" :range-separator="tDatePickerx0x6x1x1ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeRange, componentPropBindingMap?.['t-date-picker-5fcc.35ea326ca']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x6x1x1ComputedData.separator" :readonly="tDatePickerx0x6x1x1ComputedData.readonly" :editable="tDatePickerx0x6x1x1ComputedData.editable" :c-style="tDatePickerx0x6x1x1ComputedData.cStyle" @date-change="ondateChange1767949741551_0_0"></t-date-picker></t-col><t-col id="t-col-facf.ef4316657" class="ggpBaseInfo-t-col-0-6-2"  :span="tColx0x6x2ComputedData.span" :offset="tColx0x6x2ComputedData.offset" :push="tColx0x6x2ComputedData.push" :pull="tColx0x6x2ComputedData.pull" :c-style="tColx0x6x2ComputedData.cStyle"><t-select id="t-select-3fcb.c00f74209" class="ggpBaseInfo-t-select-0-6-2-0"  :active-value="replaceCssVariables(filterData(state.variationTrendData.activeTarget, componentPropBindingMap?.['t-select-3fcb.c00f74209']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.categoryList, componentPropBindingMap?.['t-select-3fcb.c00f74209']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x6x2x0ComputedData.alias" :multiple="tSelectx0x6x2x0ComputedData.multiple" :placeholder="tSelectx0x6x2x0ComputedData.placeholder" :clearable="tSelectx0x6x2x0ComputedData.clearable" :disabled="tSelectx0x6x2x0ComputedData.disabled" :name="tSelectx0x6x2x0ComputedData.name" :autocomplete="tSelectx0x6x2x0ComputedData.autocomplete" :filterable="tSelectx0x6x2x0ComputedData.filterable" :no-match-text="tSelectx0x6x2x0ComputedData.no-match-text" :no-data-text="tSelectx0x6x2x0ComputedData.no-data-text" :c-style="tSelectx0x6x2x0ComputedData.cStyle" @change="onchange1733973555614"></t-select></t-col></t-row><t-row id="t-row-bed0.5ca83a488" class="ggpBaseInfo-t-row-0-7"  :c-style="tRowx0x7ComputedData.cStyle" :gutter="tRowx0x7ComputedData.gutter" :justify="tRowx0x7ComputedData.justify" :align="tRowx0x7ComputedData.align"><t-text id="t-text-b39c.b6c03321c" class="ggpBaseInfo-t-text-0-7-0"  :label="replaceCssVariables(filterData(state.monitorTime, componentPropBindingMap?.['t-text-b39c.b6c03321c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x7x0ComputedData.editable" :c-style="tTextx0x7x0ComputedData.cStyle"></t-text></t-row><t-chart-line-single id="t-chart-line-single-a712.0a826c2e3" class="ggpBaseInfo-t-chart-line-single-0-8"  :empty-img="replaceCssVariables(filterData(state.noDataImg, componentPropBindingMap?.['t-chart-line-single-a712.0a826c2e3']['emptyImg'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tChartLineSinglex0x8ComputedData.cStyle" :show-item-bg="tChartLineSinglex0x8ComputedData.showItemBg" :options="tChartLineSinglex0x8ComputedData.options" :data="replaceCssVariables(filterData(state.chartList, componentPropBindingMap?.['t-chart-line-single-a712.0a826c2e3']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :series-setting="tChartLineSinglex0x8ComputedData.seriesSetting" :line="componentState.tChartLineSinglex0x8.line"></t-chart-line-single><t-text v-if="state.isShowChartUnit === true" id="t-text-6063.4db73323" class="ggpBaseInfo-t-text-0-9"  :label="replaceCssVariables(filterData(state.chartUnit, componentPropBindingMap?.['t-text-6063.4db73323']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle"></t-text></div>
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
import { TChartLineSingle, TCircle, TCol, TComponent, TDatePicker, TListCard, TRow, TScrollableCards, TSelect, TTabsBase, TText } from '@ths/design';

export default {
  components: {
    TChartLineSingle,
    TCircle,
    TCol,
    TComponent,
    TDatePicker,
    TListCard,
    TRow,
    TScrollableCards,
    TSelect,
    TTabsBase,
    TText,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-list-card-d9ab.2e21fb3b5":{"attributeName":"tListCardx0x0","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-c019.99b6d840a":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-62b3.48b14905c":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-circle-7dbd.196078e2c":{"attributeName":"tCirclex0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-e92f.6243867ce":{"attributeName":"tTextx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-scrollable-cards-455f.ff3a2c962":{"attributeName":"tScrollableCardsx0x5","cStyle":{"filters":[]},"showIcon":{"filters":[]},"autoScroll":{"filters":[]},"tab":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"speed":{"filters":[]},"interval":{"filters":[]},"cardSpace":{"filters":[]},"direction":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]}},"t-row-3ae9.949fc1c3b":{"attributeName":"tRowx0x6","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-5c12.21387b6cc":{"attributeName":"tColx0x6x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-9e76.f1f25f665":{"attributeName":"tTextx0x6x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-b026.64aa601ed":{"attributeName":"tTabsBasex0x6x0x1","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-col-7c2b.58b3496e4":{"attributeName":"tColx0x6x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-b356.86cbc2728":{"attributeName":"tDatePickerx0x6x1x0","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-5fcc.35ea326ca":{"attributeName":"tDatePickerx0x6x1x1","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-facf.ef4316657":{"attributeName":"tColx0x6x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-select-3fcb.c00f74209":{"attributeName":"tSelectx0x6x2x0","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-row-bed0.5ca83a488":{"attributeName":"tRowx0x7","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-b39c.b6c03321c":{"attributeName":"tTextx0x7x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-line-single-a712.0a826c2e3":{"attributeName":"tChartLineSinglex0x8","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"showItemBg":{"filters":[]},"options":{"filters":[]},"data":{"filters":[]},"seriesSetting":{"filters":[]}},"t-text-6063.4db73323":{"attributeName":"tTextx0x9","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   treemapLabelFontSize: 14,
   isShowChartUnit: false,
   chartUnit: "",
   chartList: [],
   dateType: "",
   categoryList: [],
   options: "",
   myChart: "",
   isBz: true,
   seriesData: [],
   standardSeriesData: [],
   noDataImg: "assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
   dataSourcetype: "",
   variationTrendData: {"title":"近12个月水质变化趋势","activeTarget":"","chartOptions":{"series":[]},"chartShow":true},
   monitorData: [{"value":"-","label":"pH"},{"value":"-","label":"DO","unit":"mg/L"},{"value":"-","label":"IMn","unit":"mg/L"},{"value":"-","label":"NH₃-H","unit":"mg/L"},{"value":"-","label":"TP","unit":"mg/L"}],
   baseInfoData: [{"title":"站点名称","num":"-"},{"title":"类型","num":"-"},{"title":"经度","num":"-"},{"title":"纬度","num":"-"},{"title":"所属行政区","num":"-"},{"title":"水质","num":"-"}],
   assessType: "",
   pointCode: "",
   monitorTime: "",
   timeRange: [],
   endTime: "",
   startTime: "",
   tabSelect: "day",
   dateList: [{"label":"日","value":"day"},{"label":"月","value":"month"}],
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
            default: {"width":"100%","height":"95px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"站点名称","num":"-"},{"title":"类型","num":"-"},{"title":"经度","num":"-"},{"title":"纬度","num":"-"},{"title":"所属行政区","num":"-"},{"title":"水质","num":"-"}],
spacingX:2,
col:2,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"100%","height":"95px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--base-label-bg-color)","width":"30%","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--base-label-title-color)","fontSize":"var(--business-text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","height":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"numBox":{"default":{"backgroundColor":"var(--info-background)","width":"69.5%","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px","height":""}},"num":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--skin-font-color)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"var(--text-size-14)"}}}, 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"120px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"120px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"40px","top":"124px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"水质监测信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"40px","top":"124px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"}}}, 
 },
},
tCirclex0x3: {
defaultStyle: {
            default: {"width":"9px","height":"9px","position":"unset","left":"0px","top":"168px","backgroundColor":"#FF2B2B","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"9px","height":"9px","position":"unset","left":"0px","top":"168px","backgroundColor":"#FF2B2B","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"334px","height":"24px","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","top":"160px","left":"13px","position":"unset","lineHeight":"24px"},
            
            },
 default: { 
 
label:"表示该指标超标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"334px","height":"24px","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","top":"160px","left":"13px","position":"unset","lineHeight":"24px"}}}, 
 },
},
tScrollableCardsx0x5: {
defaultStyle: {
            default: {"width":"100%","height":"64px","borderRadius":"8px","padding":"11px 9px 8px","background":"linear-gradient(180deg, #219DFF 0%, rgba(0,213,255,0.00) 190%)","paddingLeft":"0px","paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","backgroundColor":"","backgroundImage":"linear-gradient(0deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0) 99.54954954954955%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"18px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"64px","borderRadius":"8px","padding":"11px 9px 8px","background":"linear-gradient(180deg, #219DFF 0%, rgba(0,213,255,0.00) 190%)","paddingLeft":"0px","paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","backgroundColor":"","backgroundImage":"linear-gradient(0deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0) 99.54954954954955%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"18px","animationName":""}},"itemWrapper":{"default":{"width":"150px","height":"64px","marginLeft":"0px","marginRight":"8px !important","cursor":"auto","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","display":"flex","flexDirection":"column-reverse","justify-content":"center"},"active":{}},"container":{"default":{"width":"100%","height":"auto","paddingLeft":"0px","paddingTop":"0px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"12px","paddingRight":"0px","marginRight":"12px"}},"cardLabel":{"default":{"fontSize":"var(--text-size-14)","lineHeight":"24px","color":"var(--skin-font-color)","fontFamily":"微软雅黑","height":"24px","display":"flex","justify-content":"center"}},"cardLabelIcon":{"default":{"width":"18px","height":"18px","marginLeft":"4px"}},"cardValue":{"default":{"fontSize":"var(--text-size-14)","fontWeight":"500","fontFamily":"DIN-bold","color":"var(--skin-font-color)","lineHeight":"24px","height":"24px","display":"flex","justify-content":"center"}},"cardValueUnit":{"default":{"fontSize":"14px","fontWeight":"normal","fontFamily":"微软雅黑","marginLeft":"4px","color":"var(--business-text-avianize)"}},"leftArrowButton":{"default":{"color":"var(--skin-font-color) !important","backgroundColor":"var(--business-show-bg15)","width":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)"},"hover":{"color":"var(--business-theme) !important","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)"}},"leftArrow":{"default":{"color":"inherit !important"}},"rightArrow":{"default":{"color":"inherit !important"}},"rightArrowButton":{"default":{"color":"var(--skin-font-color) !important","backgroundColor":"var(--business-show-bg15)","width":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)"},"hover":{"color":"var(--business-theme) !important","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)"}}},
showIcon:true,
autoScroll:false,
tab:false,
keyWord:"",
defaultChecked:"",
speed:3,
interval:0.5,
cardSpace:0,
direction:"left",
dataAlias:{"value":"value","label":"label","checked":"checked"},
data:[{"value":"-","label":"pH"},{"value":"-","label":"DO","unit":"mg/L"},{"value":"-","label":"IMn","unit":"mg/L"},{"value":"-","label":"NH？-H","unit":"mg/L"},{"value":"-","label":"TP","unit":"mg/L"}], 
 },
},
tRowx0x6: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"275px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"275px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x6x0: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"left","alignItems":"center"},
            
            },
 default: { 
 
span:10,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"left","alignItems":"center"}}}, 
 },
},
tTextx0x6x0x0: {
defaultStyle: {
            default: {"width":"240px","height":"32px","color":"rgba(255, 255, 255, 1)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"299px","left":"10px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"污染物浓度变化趋势",
editable:false,
cStyle:{"wrapper":{"default":{"width":"240px","height":"32px","color":"rgba(255, 255, 255, 1)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"299px","left":"10px","position":"unset","animationName":""}},"cardValue":{"default":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tTabsBasex0x6x0x1: {
defaultStyle: {
            default: {"width":"141px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"62px","top":"-155px"},
            
            },
 default: { 
 
data:[{"label":"日","value":"day"},{"label":"月","value":"month"}],
space:1,
selectedTabVal:"hour",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":false},
cStyle:{"wrapper":{"default":{"width":"141px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"62px","top":"-155px"}},"itemWrapper":{"default":{"width":"80px","height":"32px","fontSize":"14px","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px"}},"label":{"default":{"fontSize":"var(--text-size-14)","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","fontSize":"var(--text-size-14)"},"hover":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tColx0x6x1: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"},
            
            },
 default: { 
 
span:10,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tDatePickerx0x6x1x0: {
defaultStyle: {
            default: {"width":"330px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"monthrange",
clearable:true,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"330px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","lineHeight":"20px"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","lineHeight":"20px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"30px"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--skin-font-color)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--skin-font-color)"}},"operatorArrow":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--skin-font-color)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--skin-font-color)","borderLeft":"1px solid var(--skin-font-color)","borderTop":"1px solid var(--skin-font-color)","borderRight":"1px solid var(--skin-font-color)","borderBottom":"1px solid var(--skin-font-color)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--skin-font-color)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tDatePickerx0x6x1x1: {
defaultStyle: {
            default: {"width":"330px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"daterange",
clearable:true,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"330px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","lineHeight":"20px"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","lineHeight":"20px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"30px"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--skin-font-color)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--skin-font-color)"}},"operatorArrow":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--skin-font-color)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--skin-font-color)","borderLeft":"1px solid var(--skin-font-color)","borderTop":"1px solid var(--skin-font-color)","borderRight":"1px solid var(--skin-font-color)","borderBottom":"1px solid var(--skin-font-color)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--skin-font-color)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tColx0x6x2: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"},
            
            },
 default: { 
 
span:4,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tSelectx0x6x2x0: {
defaultStyle: {
            default: {"width":"120px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:"",
options:[],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"120px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tRowx0x7: {
defaultStyle: {
            default: {"width":"824px","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"120px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"824px","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"120px","position":"unset"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextx0x7x0: {
defaultStyle: {
            default: {"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"124.5px","left":"645px","textAlign":"right","fontSize":"var(--text-size-14)","position":"unset","marginRight":"50px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"124.5px","left":"645px","textAlign":"right","fontSize":"var(--text-size-14)","position":"unset","marginRight":"50px"}}}, 
 },
},
tChartLineSinglex0x8: {
defaultStyle: {
            default: {"width":"100%","height":"calc(100% - 320px)","position":"unset","left":"0px","top":"320px"},
            
            },
line: computed(() => activeChartTheme.value?.line),
 default: { 
 
emptyImg:"assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
cStyle:{"wrapper":{"default":{"width":"100%","height":"calc(100% - 320px)","position":"unset","left":"0px","top":"320px"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}},
showItemBg:false,
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"grid":{"containLabel":true,"left":"1%","bottom":"2%"},"legend":{"show":false},"xAxis":{"axisLabel":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"axisLine":{"lineStyle":{"color":"var(--business-chart-line-x-axis)"}},"nameTextStyle":{"color":"var(--business-chart-line-x-name)"}},"yAxis":{"axisLabel":{"color":"var(--business-chart-line-y-name)","fontSize":"var(--business-text-size-12)"},"axisLine":{"lineStyle":{"color":"var(--business-chart-line-y-axis)"}},"nameTextStyle":{"color":"var(--business-chart-line-y-name)"},"splitLine":{"lineStyle":{"color":"var(--business-chart-line-split)"}}},"tooltip":{"textStyle":{"fontSize":state.treemapLabelFontSize}}})),
data:[],
seriesSetting:{"xAxisLabel":"recordtime","data":[{"name":"浓度","dataKey":"indexvalue","style":{"label":{"show":false},"symbolSize":[4,4],"symbol":"none"}}]}, 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"width":"62px","height":"0px","color":"var(--business-text-avianize)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"312px","left":"3px","position":"unset","textAlign":"center"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"62px","height":"0px","color":"var(--business-text-avianize)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"312px","left":"3px","position":"unset","textAlign":"center"}},"cardValue":{"default":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
});
const handleWaterTarget = () => {
// 水质目标发生变化执行---------------------

// 先隐藏图表
state.variationTrendData.chartShow = false;
// 图表为空
state.variationTrendData.chartOptions = {
  series: []
};

// 水质
if (state.variationTrendData.activeTarget === 'waterLevelChange') {
  state.variationTrendData.title = '近12个月水质变化趋势';

  // 水质接口
  apiRegistry.getWaterVariationTrend.request();
} else {
  // 其他污染物
  state.variationTrendData.title = '近12个月污染物浓度变化趋势';

  // 污染物接口
  apiRegistry.getPollutantVariationTrend.request();
}
// 显示图表，延迟为了处理数据不刷新的问题
setTimeout(() => {
  state.variationTrendData.chartShow = true;
}, 100)
};
const getWaterChartLabel = (value) => {
// 设置x轴显示的文本
if (value === 1) {
  value = 'Ⅰ类';
} else if (value === 2) {
  value = 'Ⅱ类';
} else if (value === 3) {
  value = 'Ⅲ类';
} else if (value === 4) {
  value = 'Ⅳ类';
} else if (value === 5) {
  value = 'Ⅴ类';
} else if (value === 6) {
  value = '劣Ⅴ类';
} else {
  value = '-';
}
return value;

};
const getChartOptions = () => {
// 图表配置项
let chartOption = {};
const toolbox = {
  show: true,
  top: 5,
  right: 130,
  iconStyle: {
    color: '#fff'
  },
  feature: {
    magicType: {
      type: ["line", "bar"],
      title: {
        line: '转为折线图',
        bar: '转为柱状图'
      }
    },
  }
};
if (state.variationTrendData.activeTarget === 'waterLevelChange') {
  // 水质的图表配置
  chartOption = {
    "dataZoom": [
      {
        "type": "slider",
        "height": 10,

        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
        textStyle: {
          color: '#fff'
        }
      },
      {
        type: 'inside',      // 内置缩放，支持鼠标滚轮缩放
        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
      }
    ],
    toolbox,
    grid: {
      top: "15%",
      left: '6%',
      right: '2%',
      bottom: '100px'
    },
    color: ['#00FFFF', '#FFF200', '#FF8400', '#43D156', '#EE70FF'],
    legend: {
      show: true,
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 13
      },
      // data: ['当月值', '累计均值', '去年同期', '去年累计均值指标']
      data: ['当月值',  '去年同期']

    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      textStyle: {
        color: 'rgba(255, 255, 255, 1)'
      },
      "formatter": (formatterParams) => {
        if (!formatterParams[0].data?.tooltipXAxisLabel) return;
        let str = '';
        const name = formatterParams[0].data?.tooltipXAxisLabel || '--';
        formatterParams.forEach((item) => {
          const unit = item.data?.unit || '';
          const valueName = handleNoVal(item.data?.valueName);
          // 如果值是数组，则取最后一项，参考官网值为数组；
          const curValue = Array.isArray(item.value) ? item.value[item.value.length - 1] : item.value;
          // hiddenInTooltip 是否在tooltip中隐藏
          if (item.data?.hiddenInTooltip) return;
          // ${handleNoVal(curValue) !== '--' ? unit : ''}
          str += `<div style="margin: 10px 0 0;line-height: 1">${item.marker}<span>${item.seriesName}</span>
    <span style="float: right;margin-left: 10px;">
    ${item.data?.showValueName ? valueName : getWaterChartLabel(Number(curValue) || 0)}${unit}</span><br/></div>`;
        });
        return `${name}<br/>${str}`;
      }
    },
    xAxis: {
      type: 'category',
      data: [],
      axisLabel: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13,
        rotate: 45
      },
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      nameTextStyle: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 13
      }
    },
    yAxis: {
      type: 'value',
      max: 6,
      axisLabel: {
        formatter: function (value) {
          return getWaterChartLabel(value);
        },
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      name: '',
      nameTextStyle: {
        color: 'rgba(255, 255, 255, 0.7)',
        align: 'right',
        padding: [0, 0, 10, -24],
        fontSize: 13
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'rgba(255, 255, 255, 0.2)'
        }
      },
      splitLine: { show: false }
    },
    series: []
  };
} else if (state.variationTrendData.activeTarget === 'W01001') {
  // ph 的图表配置
  chartOption = {
    "dataZoom": [
      {
        "type": "slider",
        "height": 10,

        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
        textStyle: {
          color: '#fff'
        }
      },
      {
        type: 'inside',      // 内置缩放，支持鼠标滚轮缩放
        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
      }
      // {
      //   "type": "slider",
      //   "backgroundColor": getCssVariable('--business-show-bg30'),
      //   "borderColor": getCssVariable('--business-show-bg30'),
      //   "borderRadius": 0,
      //   "showDetail": false,
      //   "showDataShadow": false,
      //   "zoomLock": true,
      //   "height": 7,
      //   "end": 50,
      //   "brushSelect": false,
      //   "bottom": "0%",
      //   "brushStyle": {
      //     "color": "#000"
      //   },
      //   "fillerColor": getCssVariable('--business-btn-default'),
      //   "handleIcon": "none",
      //   "handleStyle": {
      //     "color": "#2D955A",
      //     "borderColor": "#D1D5D9",
      //     "borderCap": "round"
      //   }
      // }
    ],
    grid: {
      top: '15%',
      left: '5%',
      right: '4%',
      // bottom: '12%'
      bottom: '100px'
    },
    color: ['#00FFFF', '#FFF200', '#FF8400', '#43D156', '#EE70FF'],
    legend: {
      show: true,
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 13
      },
      data: ['当月值', '去年同期']
    },
    toolbox,
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      textStyle: {
        color: 'rgba(255, 255, 255, 1)'
      },
      "formatter": (value) => handleTooltipFormatter(value)
    },
    xAxis: {
      type: 'category',
      data: [],
      axisLabel: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13,
        rotate: 45
      },
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      nameTextStyle: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 13
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      name: '',
      nameTextStyle: {
        color: 'rgba(255, 255, 255, 0.7)',
        align: 'right',
        padding: [0, 0, 10, -24],
        fontSize: 13
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'rgba(255, 255, 255, 0.2)'
        }
      },
      splitLine: { show: false }
    },
    series: []
  }
} else {
  // 其他污染物
  chartOption = {
    "dataZoom": [
      // {
      //   "type": "slider",
      //   "backgroundColor": getCssVariable('--business-show-bg30'),
      //   "borderColor": getCssVariable('--business-show-bg30'),
      //   "borderRadius": 0,
      //   "showDetail": false,
      //   "showDataShadow": false,
      //   "zoomLock": true,
      //   "height": 7,
      //   "end": 50,
      //   "brushSelect": false,
      //   "bottom": "0%",
      //   "brushStyle": {
      //     "color": "#000"
      //   },
      //   "fillerColor": getCssVariable('--business-btn-default'),
      //   "handleIcon": "none",
      //   "handleStyle": {
      //     "color": "#2D955A",
      //     "borderColor": "#D1D5D9",
      //     "borderCap": "round"
      //   }
      // }
      {
        "type": "slider",
        "height": 10,

        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
        textStyle: {
          color: '#fff'
        }
      },
      {
        type: 'inside',      // 内置缩放，支持鼠标滚轮缩放
        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
      }
    ],
    grid: {
      top: '15%',
      left: '5%',
      right: '4%',
      // bottom: '12%'
      bottom: '100px'
    },
    color: ['#00FFFF', '#FFF200', '#FF8400', '#43D156', '#EE70FF'],
    legend: {
      show: true,
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 13
      },
       data: ['当月值',  '去年同期']
    },
    toolbox,
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      textStyle: {
        color: 'rgba(255, 255, 255, 1)'
      },
      "formatter": (value) => handleTooltipFormatter(value)
    },
    xAxis: {
      type: 'category',
      data: [],
      axisLabel: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13,
        rotate: 45
      },
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      nameTextStyle: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 13
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      name: 'mg/L',
      nameTextStyle: {
        color: 'rgba(255, 255, 255, 0.7)',
        align: 'right',
        padding: [0, 0, 10, -24],
        fontSize: 13
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'rgba(255, 255, 255, 0.2)'
        }
      },
      splitLine: { show: false }
    },
    series: []
  }
}

return chartOption;
};
const initPageData = () => {
	// 获取主题字号
	const initChartFontSize = () => {
	  state.treemapLabelFontSize = parseInt(getCssVariable('--business-text-size-16')) || 16
	}
	initChartFontSize()

state.pointCode = global.businessDialog.dialogParmas.stationid || '';
state.tabSelect = 'day'
async function getData (){
  // 获取污染物列表
  await apiRegistry.getCategoryList.request();
  // 获取最新时间
  await apiRegistry.getLatestTime.request();
  // 获取基本信息接口
  await apiRegistry.getBaseInfo.request();
  //获取监测信息接口
  await apiRegistry.getMonitorData.request();
  // 获取范围时间
  await apiRegistry.getRangeTime.request();
  // 获取污染物变化趋势
  await apiRegistry.getPollutantVariationTrend.request();
}
getData()
};
const setNoDataIcon = () => {
// 设置暂无数据图标
state.noDataImg= getCssVariable('--business-no-data-img');
};
const getWaterLevelSrc = (key) => {
// 图标路径
const waterLevelSrc = [
    "6678a04114a34021a947caa73ebcf17f",
    "7cd40b10184443b6bdff4282e363f9de",
    "3a76262a85f24b9b983339ab06117f78",
    "1f1734ed58db4ed991edd563a803baef",
    "411e6a8a398246b1a82e117669795e44",
    "7732a1ec888e44e2bd34cb304dd71a0a",
    "85937bae863347139a4039c3df87e4b2"
]
return `url(assets/images/2024-12-30/${waterLevelSrc[Number(key) || 0]}.svg)`
};
const changeTime = (time) => {
state.timeRange = time || [];
state.startTime = time[0] || '';
state.endTime = time[1] || '';
};
const changeStandard = () => {
if (
  Array.isArray(state.seriesData)
  && Array.isArray(state.standardSeriesData)
) {
  // 没有标准值的
  state.variationTrendData.chartOptions.series = [
    ...state.seriesData,
  ];
  // 有标准值的
  state.options = _.cloneDeep(state.variationTrendData.chartOptions)
  state.options.series = [
    ...state.seriesData,
    ...state.standardSeriesData
  ];
}
console.log('没有标准值的',state.variationTrendData.chartOptions)
console.log('有标准值的', state.options)
};
const handleWaterLevelStandard = (seriesName,lineColor,labelPosition) => {
// 默认线条颜色
const defaultLineColor = '#465FFF';
return {
  name: seriesName,
  "type": "line",
  "symbol": "none",
  "lineStyle": {
    "type": "dashed",
    "width": 0
  },
  itemStyle: {
    color: lineColor || defaultLineColor,
  },
  markLine: {
    'symbol': 'none',
    "label": {
      position: labelPosition || 'insideEndTop',
      "color": lineColor || defaultLineColor,
      "fontSize": 12,
      formatter: (params) => {
        return `${handleNoVal(seriesName)}：${getWaterChartLabel(Number(params.value) || 0)}`
      }
    },
    "data": [
      {
        "0": {
          "valueIndex": 1,
          "type": "max"
        },
        "type": "average"
      }
    ],
    "silent": true
  },
}
};
const handleCharts = (myChart) => {
console.log('myChart', myChart)
state.myChart = myChart
};
const setCardStyle = () => {
const sheet = new CSSStyleSheet();
sheet.insertRule(`body #t-scrollable-cards-455f.ff3a2c962 .scrollable-cards-body {
width: 100% !important;
}`);

document.adoptedStyleSheets = [sheet];

};
const handleDateType = () => {
async function getData(){
  // 获取最新时间
  await apiRegistry.getLatestTime.request();
  //获取监测信息接口
  await apiRegistry.getMonitorData.request();
  // 获取范围时间
  await apiRegistry.getRangeTime.request();
  // 获取污染物变化趋势
  await apiRegistry.getPollutantVariationTrend.request();
}
getData()
};
const ontabClick1767858920713_0_0 = (data) => {
// 设置变量值
state.tabSelect = data.value;
// 执行自定义方法
handleDateType();
};
const ondateChange1735549171926 = (data) => {
// 执行自定义方法
changeTime(data);
// 事件交互-请求调用接口
apiRegistry.getPollutantVariationTrend.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const onchange1733973555614 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.variationTrendData.activeTarget = value;
// 事件交互-请求调用接口
apiRegistry.getPollutantVariationTrend.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const ondateChange1767949741551_0_0 = (data) => {
// 执行自定义方法
changeTime(data);
// 事件交互-请求调用接口
apiRegistry.getPollutantVariationTrend.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getCategoryList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"interfaceId":"1dc59d15681bd35789a89da72564042c"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"1dc59d15681bd35789a89da72564042c"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"interfaceId":"1dc59d15681bd35789a89da72564042c"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCategoryList'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.categoryList = data.map(item => ({
    ...item,
    "value": item.indexcode,
    "label": item.indexname,
    "disabled": false
  }));
  state.variationTrendData.activeTarget = state.categoryList[0].value
  state.monitorData = state.categoryList.map(item => {
    return {
      "value": "-",
      "label": item.label,
      "code": item.value,
      "style": {
        "cardIconStyle": {
          "background": "#00DA2A"
        },
        "labelIconStyle": {}
      }
    }
  })
} else {
  state.categoryList = []
  state.variationTrendData.activeTarget = ''
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"stationid":"state.pointCode","interfaceId":"f2c87c4a20b13e722b3299d4dbd4807e"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"stationid":state.pointCode,"interfaceId":"f2c87c4a20b13e722b3299d4dbd4807e"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"stationid":state.pointCode,"interfaceId":"f2c87c4a20b13e722b3299d4dbd4807e"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     console.log(res);
const { data } = res;
if(data.head.statusCode === '200' && data.data){
  // 站点名称
  state.baseInfoData[0].num = data.data?.stationname || '-';
  // 类型
  state.baseInfoData[1].num = data.data?.stationtypename  || '-';
  // 经度
  state.baseInfoData[2].num = data.data?.longitude || '-';
  // 纬度
  state.baseInfoData[3].num = data.data?.latitude || '-';
  // 所属行政区
  state.baseInfoData[4].num = data.data?.region_name || '-';
  // 水质
  state.baseInfoData[5].num = data.data?.standardname || '-';
  state.baseInfoData[5].color = getWaterLevelColor(data.data?.standardname);
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
 getMonitorData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"stationid":"state.pointCode","dateType":"state.tabSelect","recordtime":"state.monitorTime","interfaceId":"01799d52a612110b3e3a682406512a15"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"stationid":state.pointCode,"dateType":state.tabSelect,"recordtime":state.monitorTime,"interfaceId":"01799d52a612110b3e3a682406512a15"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"stationid":state.pointCode,"dateType":state.tabSelect,"recordtime":state.monitorTime,"interfaceId":"01799d52a612110b3e3a682406512a15"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMonitorData'] = res.data;
                
     console.log(res);
const { data, head } = res.data;

if (head?.statusCode === '200' && data.length) {
  // 超标和达标的样式
  const exceedStandardStyle = {
    cardIconStyle: { background: "#FF2B2B" },
    valueStyle: { color: "#FF2B2B" },
    labelIconStyle: {}
  };

  const meetStandardStyle = {
    cardIconStyle: { background: "#00DA2A" },
    labelIconStyle: {}
  };
  data.forEach(item => {
    const index = state.monitorData.findIndex(i => i.code === item.indexcode)
    let style = {}
    if (item.indexover === '1') {
      style = { ...exceedStandardStyle };
    } else if (item.indexover === '0' || item.indexover === '') {
      style = { ...meetStandardStyle };
    }
    if (index > -1) {
      state.monitorData[index] = {
        ...state.monitorData[index],
        label: item.indexname,
        value: item.indexvalue,
        style: style,
        unit: item.indexunit
      }
    }
  })
  console.log('state.monitorData', state.monitorData)
} else {
  state.monitorData = state.categoryList.map(item => {
    return {
      "value": "-",
      "label": item.label,
      "code": item.value,
      "style": {
        "cardIconStyle": {
          "background": "#00DA2A"
        },
        "labelIconStyle": {}
      }
    }
  })
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
 getPollutantVariationTrend: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"dateType":"state.tabSelect","indexcode":"state.variationTrendData.activeTarget","stationid":"state.pointCode","maxtime":"state.endTime","mintime":"state.startTime","interfaceId":"b95cd496740a83f5fe05d663cecc5189"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"dateType":state.tabSelect,"indexcode":state.variationTrendData.activeTarget,"stationid":state.pointCode,"maxtime":state.endTime,"mintime":state.startTime,"interfaceId":"b95cd496740a83f5fe05d663cecc5189"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"dateType":state.tabSelect,"indexcode":state.variationTrendData.activeTarget,"stationid":state.pointCode,"maxtime":state.endTime,"mintime":state.startTime,"interfaceId":"b95cd496740a83f5fe05d663cecc5189"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPollutantVariationTrend'] = res.data;
                
     console.log(res);
const { data } = res;
if (data.head.statusCode === '200' && data.data.length) {
  state.chartList = data.data
  state.chartUnit = data.data[0].indexunit || ''
  state.isShowChartUnit = true
} else {
  state.chartList = []
  state.chartUnit = ''
  state.isShowChartUnit = false
}

state.isShowChartUnit = true
  state.chartUnit = "mg/L"

  state.chartList = [
    { recordtime: '2025-05', indexvalue: 2.3, indexunit: 'mg/L', unit: 'mg/L', valueName: '2.3', tooltipXAxisLabel: '2025年05月' },
    { recordtime: '2025-06', indexvalue: 3.1, indexunit: 'mg/L', unit: 'mg/L', valueName: '3.1', tooltipXAxisLabel: '2025年06月' },
    { recordtime: '2025-07', indexvalue: 2.8, indexunit: 'mg/L', unit: 'mg/L', valueName: '2.8', tooltipXAxisLabel: '2025年07月' },
    { recordtime: '2025-08', indexvalue: 4.2, indexunit: 'mg/L', unit: 'mg/L', valueName: '4.2', tooltipXAxisLabel: '2025年08月' },
    { recordtime: '2025-09', indexvalue: 3.6, indexunit: 'mg/L', unit: 'mg/L', valueName: '3.6', tooltipXAxisLabel: '2025年09月' },
    { recordtime: '2025-10', indexvalue: 5.0, indexunit: 'mg/L', unit: 'mg/L', valueName: '5.0', tooltipXAxisLabel: '2025年10月' },
    { recordtime: '2025-11', indexvalue: 3.9, indexunit: 'mg/L', unit: 'mg/L', valueName: '3.9', tooltipXAxisLabel: '2025年11月' },
    { recordtime: '2025-12', indexvalue: 4.5, indexunit: 'mg/L', unit: 'mg/L', valueName: '4.5', tooltipXAxisLabel: '2025年12月' },
    { recordtime: '2026-01', indexvalue: 2.1, indexunit: 'mg/L', unit: 'mg/L', valueName: '2.1', tooltipXAxisLabel: '2026年01月' },
    { recordtime: '2026-02', indexvalue: 3.4, indexunit: 'mg/L', unit: 'mg/L', valueName: '3.4', tooltipXAxisLabel: '2026年02月' },
    { recordtime: '2026-03', indexvalue: 4.8, indexunit: 'mg/L', unit: 'mg/L', valueName: '4.8', tooltipXAxisLabel: '2026年03月' },
    { recordtime: '2026-04', indexvalue: 3.2, indexunit: 'mg/L', unit: 'mg/L', valueName: '3.2', tooltipXAxisLabel: '2026年04月' },
  ]

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      

state.seriesData = []
state.standardSeriesData = []
      reject(error);
    });
  });
},
              },
// 接口函数
 getLatestTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"stationid":"state.pointCode","dateType":"state.tabSelect","interfaceId":"9ad35fae9427572c75464b6ad0993f85"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"stationid":state.pointCode,"dateType":state.tabSelect,"interfaceId":"9ad35fae9427572c75464b6ad0993f85"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"stationid":state.pointCode,"dateType":state.tabSelect,"interfaceId":"9ad35fae9427572c75464b6ad0993f85"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.monitorTime = data?.maxtime || ''
}else{
  state.monitorTime = ''
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
 getRangeTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"dateType":"state.tabSelect","stationid":"state.pointCode","interfaceId":"7ddb1734061b8cb761a0211dda32cb93"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"dateType":state.tabSelect,"stationid":state.pointCode,"interfaceId":"7ddb1734061b8cb761a0211dda32cb93"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"dateType":state.tabSelect,"stationid":state.pointCode,"interfaceId":"7ddb1734061b8cb761a0211dda32cb93"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getRangeTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.startTime = data?.mintime || ''
  state.endTime = data?.maxtime || ''
  state.timeRange = [state.startTime,state.endTime]
}else{
  state.startTime =  ''
  state.endTime = ''
  state.timeRange = []
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
                            setPageScale('t-l-c-ggpBaseInfo', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setNoDataIcon();
// 执行自定义方法
initPageData();
onMounted(() => {
setPageScale('t-l-c-ggpBaseInfo', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setCardStyle();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tListCardx0x0ComputedData = computed(() => _.merge({}, componentState.tListCardx0x0.default, componentState.tListCardx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tCirclex0x3ComputedData = computed(() => _.merge({}, componentState.tCirclex0x3.default, componentState.tCirclex0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tScrollableCardsx0x5ComputedData = computed(() => _.merge({}, componentState.tScrollableCardsx0x5.default, componentState.tScrollableCardsx0x5?.[state.screenSize]));

 const tRowx0x6ComputedData = computed(() => _.merge({}, componentState.tRowx0x6.default, componentState.tRowx0x6?.[state.screenSize]));

 const tColx0x6x0ComputedData = computed(() => _.merge({}, componentState.tColx0x6x0.default, componentState.tColx0x6x0?.[state.screenSize]));

 const tTextx0x6x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x6x0x0.default, componentState.tTextx0x6x0x0?.[state.screenSize]));

 const tTabsBasex0x6x0x1ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x6x0x1.default, componentState.tTabsBasex0x6x0x1?.[state.screenSize]));

 const tColx0x6x1ComputedData = computed(() => _.merge({}, componentState.tColx0x6x1.default, componentState.tColx0x6x1?.[state.screenSize]));

 const tDatePickerx0x6x1x0ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x6x1x0.default, componentState.tDatePickerx0x6x1x0?.[state.screenSize]));

 const tDatePickerx0x6x1x1ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x6x1x1.default, componentState.tDatePickerx0x6x1x1?.[state.screenSize]));

 const tColx0x6x2ComputedData = computed(() => _.merge({}, componentState.tColx0x6x2.default, componentState.tColx0x6x2?.[state.screenSize]));

 const tSelectx0x6x2x0ComputedData = computed(() => _.merge({}, componentState.tSelectx0x6x2x0.default, componentState.tSelectx0x6x2x0?.[state.screenSize]));

 const tRowx0x7ComputedData = computed(() => _.merge({}, componentState.tRowx0x7.default, componentState.tRowx0x7?.[state.screenSize]));

 const tTextx0x7x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x7x0.default, componentState.tTextx0x7x0?.[state.screenSize]));

 const tChartLineSinglex0x8ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartLineSinglex0x8.default, componentState.tChartLineSinglex0x8?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

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
tCirclex0x3ComputedData,
tTextx0x4ComputedData,
tScrollableCardsx0x5ComputedData,
tRowx0x6ComputedData,
tColx0x6x0ComputedData,
tTextx0x6x0x0ComputedData,
tTabsBasex0x6x0x1ComputedData,
tColx0x6x1ComputedData,
tDatePickerx0x6x1x0ComputedData,
tDatePickerx0x6x1x1ComputedData,
tColx0x6x2ComputedData,
tSelectx0x6x2x0ComputedData,
tRowx0x7ComputedData,
tTextx0x7x0ComputedData,
tChartLineSinglex0x8ComputedData,
tTextx0x9ComputedData,
ontabClick1767858920713_0_0,
ondateChange1735549171926,
ondateChange1767949741551_0_0,
onchange1733973555614,
};
},
}
</script>

<style scoped>
.t-l-c-ggpBaseInfo {
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
.t-l-c-ggpBaseInfo .ggpBaseInfo-t-list-card-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 95px;
pointer-events: auto;
}

.t-l-c-ggpBaseInfo .ggpBaseInfo-t-component-0-1 {
position: absolute !important;
top: 120px;
left: 0px;
width: 100%;
height: 28px;
pointer-events: auto;
}

.t-l-c-ggpBaseInfo .ggpBaseInfo-t-text-0-2 {
position: absolute !important;
top: 124px;
left: 40px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-ggpBaseInfo .ggpBaseInfo-t-circle-0-3 {
position: absolute !important;
top: 168px;
left: 0px;
width: 9px;
height: 9px;
pointer-events: auto;
}

.t-l-c-ggpBaseInfo .ggpBaseInfo-t-text-0-4 {
position: absolute !important;
top: 160px;
left: 13px;
width: 334px;
height: 24px;
pointer-events: auto;
}

.t-l-c-ggpBaseInfo .ggpBaseInfo-t-scrollable-cards-0-5 {
position: absolute !important;
top: 196px;
left: 0px;
width: 100%;
height: 64px;
pointer-events: auto;
}

.t-l-c-ggpBaseInfo .ggpBaseInfo-t-row-0-6 {
position: absolute !important;
top: 275px;
left: 0px;
width: 100%;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-ggpBaseInfo .ggpBaseInfo-t-col-0-6-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
}

.t-l-c-ggpBaseInfo .ggpBaseInfo-t-text-0-6-0-0 {
position: unset;
top: 299px;
left: 10px;
width: 240px;
height: 32px;
pointer-events: auto;
}

.t-l-c-ggpBaseInfo .ggpBaseInfo-t-tabs-base-0-6-0-1 {
position: unset;
top: -155px;
left: 62px;
width: 141px;
height: 32px;
pointer-events: auto;
}

.t-l-c-ggpBaseInfo .ggpBaseInfo-t-col-0-6-1 {
position: relative;
top: null;
left: null;
width: 100px;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
}

.t-l-c-ggpBaseInfo .ggpBaseInfo-t-date-picker-0-6-1-0 {
position: unset;
top: 284px;
left: 394px;
width: 330px;
height: 32px;
pointer-events: auto;
}

.t-l-c-ggpBaseInfo .ggpBaseInfo-t-date-picker-0-6-1-1 {
position: unset;
top: 294px;
left: 404px;
width: 330px;
height: 32px;
pointer-events: auto;
}

.t-l-c-ggpBaseInfo .ggpBaseInfo-t-col-0-6-2 {
position: relative;
top: null;
left: null;
width: 100px;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
}

.t-l-c-ggpBaseInfo .ggpBaseInfo-t-select-0-6-2-0 {
position: unset;
top: 284px;
left: 704px;
width: 120px;
height: 33px;
pointer-events: auto;
}

.t-l-c-ggpBaseInfo .ggpBaseInfo-t-row-0-7 {
position: absolute !important;
top: 120px;
left: 0px;
width: 824px;
height: 28px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
}

.t-l-c-ggpBaseInfo .ggpBaseInfo-t-text-0-7-0 {
position: unset;
top: 124.5px;
left: 645px;
width: 164px;
height: 19px;
pointer-events: auto;
}

.t-l-c-ggpBaseInfo .ggpBaseInfo-t-chart-line-single-0-8 {
position: absolute !important;
top: 320px;
left: 0px;
width: 100%;
height: calc(100% - 320px);
pointer-events: auto;
}

.t-l-c-ggpBaseInfo .ggpBaseInfo-t-text-0-9 {
position: absolute !important;
top: 312px;
left: 3px;
width: 62px;
height: 0px;
pointer-events: auto;
}
</style>
