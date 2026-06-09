<template>
  <div id="t-l-c-airOverviewReachStandardsOther" class="t-l-c-airOverviewReachStandardsOther" ><t-rect id="t-rect-eb61.e10ae7b4f" class="airOverviewReachStandardsOther-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-rect id="t-rect-d402.7658ee068" class="airOverviewReachStandardsOther-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle"></t-rect><t-text-unit id="t-text-unit-db18.008b940ca" class="airOverviewReachStandardsOther-t-text-unit-0-3"  :c-style="tTextUnitx0x3ComputedData.cStyle" :justify="tTextUnitx0x3ComputedData.justify" :align="tTextUnitx0x3ComputedData.align" :content="replaceCssVariables(filterData(state.reachStandardsData.PM10_LASTYEAR, componentPropBindingMap?.['t-text-unit-db18.008b940ca']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x3ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x3ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-12e6.b01ed4e5c" class="airOverviewReachStandardsOther-t-text-unit-0-4"  :c-style="tTextUnitx0x4ComputedData.cStyle" :justify="tTextUnitx0x4ComputedData.justify" :align="tTextUnitx0x4ComputedData.align" :content="replaceCssVariables(filterData(state.reachStandardsData.PM25_LASTYEAR, componentPropBindingMap?.['t-text-unit-12e6.b01ed4e5c']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x4ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x4ComputedData.showOverflowTooltip"></t-text-unit><t-rank-single v-if="state.isOverPM25 === true" id="t-rank-single-629c.1968a5097" class="airOverviewReachStandardsOther-t-rank-single-0-6"  :icon-src="tRankSinglex0x6ComputedData.iconSrc" :data="replaceCssVariables(filterData(state.processDataPM25, componentPropBindingMap?.['t-rank-single-629c.1968a5097']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tRankSinglex0x6ComputedData.cStyle" :tab="tRankSinglex0x6ComputedData.tab" :key-word="tRankSinglex0x6ComputedData.keyWord" :default-checked="tRankSinglex0x6ComputedData.defaultChecked" :auto-scroll="tRankSinglex0x6ComputedData.autoScroll" :speed="tRankSinglex0x6ComputedData.speed" :data-style="tRankSinglex0x6ComputedData.dataStyle" :alias="tRankSinglex0x6ComputedData.alias"></t-rank-single><t-rank-single v-if="state.isOverPM10 === true" id="t-rank-single-c8f3.2b83f8a6" class="airOverviewReachStandardsOther-t-rank-single-0-7"  :icon-src="tRankSinglex0x7ComputedData.iconSrc" :data="replaceCssVariables(filterData(state.processDataPM10, componentPropBindingMap?.['t-rank-single-c8f3.2b83f8a6']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tRankSinglex0x7ComputedData.cStyle" :tab="tRankSinglex0x7ComputedData.tab" :key-word="tRankSinglex0x7ComputedData.keyWord" :default-checked="tRankSinglex0x7ComputedData.defaultChecked" :auto-scroll="tRankSinglex0x7ComputedData.autoScroll" :speed="tRankSinglex0x7ComputedData.speed" :data-style="tRankSinglex0x7ComputedData.dataStyle" :alias="tRankSinglex0x7ComputedData.alias"></t-rank-single><t-rect id="t-rect-1aa2.4c1672a0f" class="airOverviewReachStandardsOther-t-rect-0-8"  :tip="tRectx0x8ComputedData.tip" :label="tRectx0x8ComputedData.label" :active="tRectx0x8ComputedData.active" :c-style="tRectx0x8ComputedData.cStyle"></t-rect><t-rank-single v-if="state.isOverPM10 === false" id="t-rank-single-236d.09a651c79" class="airOverviewReachStandardsOther-t-rank-single-0-9"  :icon-src="tRankSinglex0x9ComputedData.iconSrc" :data="replaceCssVariables(filterData(state.processDataPM10, componentPropBindingMap?.['t-rank-single-236d.09a651c79']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tRankSinglex0x9ComputedData.cStyle" :tab="tRankSinglex0x9ComputedData.tab" :key-word="tRankSinglex0x9ComputedData.keyWord" :default-checked="tRankSinglex0x9ComputedData.defaultChecked" :auto-scroll="tRankSinglex0x9ComputedData.autoScroll" :speed="tRankSinglex0x9ComputedData.speed" :data-style="tRankSinglex0x9ComputedData.dataStyle" :alias="tRankSinglex0x9ComputedData.alias"></t-rank-single><t-rect id="t-rect-4f32.75d3c6bab" class="airOverviewReachStandardsOther-t-rect-0-19"  :tip="tRectx0x19ComputedData.tip" :label="tRectx0x19ComputedData.label" :active="tRectx0x19ComputedData.active" :c-style="tRectx0x19ComputedData.cStyle"></t-rect><t-rank-single v-if="state.isOverPM25 === false" id="t-rank-single-7cf4.bc7be447a" class="airOverviewReachStandardsOther-t-rank-single-0-20"  :icon-src="tRankSinglex0x20ComputedData.iconSrc" :data="replaceCssVariables(filterData(state.processDataPM25, componentPropBindingMap?.['t-rank-single-7cf4.bc7be447a']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tRankSinglex0x20ComputedData.cStyle" :tab="tRankSinglex0x20ComputedData.tab" :key-word="tRankSinglex0x20ComputedData.keyWord" :default-checked="tRankSinglex0x20ComputedData.defaultChecked" :auto-scroll="tRankSinglex0x20ComputedData.autoScroll" :speed="tRankSinglex0x20ComputedData.speed" :data-style="tRankSinglex0x20ComputedData.dataStyle" :alias="tRankSinglex0x20ComputedData.alias"></t-rank-single><t-high-light-text id="t-high-light-text-d888.c15ecbe3" class="airOverviewReachStandardsOther-t-high-light-text-0-22"  :fragment-list="replaceCssVariables(filterData(state.fragmentListPM25, componentPropBindingMap?.['t-high-light-text-d888.c15ecbe3']['fragmentList'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :styles="tHighLightTextx0x22ComputedData.styles" :c-style="tHighLightTextx0x22ComputedData.cStyle"></t-high-light-text><t-text-unit id="t-text-unit-9d53.489b61e56" class="airOverviewReachStandardsOther-t-text-unit-0-23"  :c-style="tTextUnitx0x23ComputedData.cStyle" :justify="tTextUnitx0x23ComputedData.justify" :align="tTextUnitx0x23ComputedData.align" :content="replaceCssVariables(filterData(state.reachStandardsData.PM25_TARGET, componentPropBindingMap?.['t-text-unit-9d53.489b61e56']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x23ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x23ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-366d.2fc818f74" class="airOverviewReachStandardsOther-t-text-unit-0-24"  :c-style="tTextUnitx0x24ComputedData.cStyle" :justify="tTextUnitx0x24ComputedData.justify" :align="tTextUnitx0x24ComputedData.align" :content="replaceCssVariables(filterData(state.PM25, componentPropBindingMap?.['t-text-unit-366d.2fc818f74']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x24ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x24ComputedData.showOverflowTooltip" :unit-raw="tTextUnitx0x24ComputedData.unitRaw"></t-text-unit><t-text v-if="state.targetTypePM25 === 'PM25'" id="t-text-542a.c4227da1c" class="airOverviewReachStandardsOther-t-text-0-25"  :label="tTextx0x25ComputedData.label" :editable="tTextx0x25ComputedData.editable" :c-style="tTextx0x25ComputedData.cStyle" @click="onclick1733807586905"></t-text><t-text v-if="state.targetTypePM25 !== 'PM25'" id="t-text-99a6.cbc1f35af" class="airOverviewReachStandardsOther-t-text-0-26"  :label="tTextx0x26ComputedData.label" :editable="tTextx0x26ComputedData.editable" :c-style="tTextx0x26ComputedData.cStyle" @click="onclick1733801376161"></t-text><t-high-light-text id="t-high-light-text-e215.dc36f6d43" class="airOverviewReachStandardsOther-t-high-light-text-0-28"  :fragment-list="replaceCssVariables(filterData(state.fragmentListPM10, componentPropBindingMap?.['t-high-light-text-e215.dc36f6d43']['fragmentList'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :styles="tHighLightTextx0x28ComputedData.styles" :c-style="tHighLightTextx0x28ComputedData.cStyle"></t-high-light-text><t-text-unit id="t-text-unit-7e20.218b327e4" class="airOverviewReachStandardsOther-t-text-unit-0-29"  :c-style="tTextUnitx0x29ComputedData.cStyle" :justify="tTextUnitx0x29ComputedData.justify" :align="tTextUnitx0x29ComputedData.align" :content="replaceCssVariables(filterData(state.reachStandardsData.PM10_TARGET, componentPropBindingMap?.['t-text-unit-7e20.218b327e4']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x29ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x29ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-bd8f.0fb21aa0d" class="airOverviewReachStandardsOther-t-text-unit-0-30"  :c-style="tTextUnitx0x30ComputedData.cStyle" :justify="tTextUnitx0x30ComputedData.justify" :align="tTextUnitx0x30ComputedData.align" :content="replaceCssVariables(filterData(state.PM10, componentPropBindingMap?.['t-text-unit-bd8f.0fb21aa0d']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x30ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x30ComputedData.showOverflowTooltip" :unit-raw="tTextUnitx0x30ComputedData.unitRaw"></t-text-unit><t-text v-if="state.targetTypePM10 === 'PM10'" id="t-text-19fd.0b0e09c18" class="airOverviewReachStandardsOther-t-text-0-31"  :label="tTextx0x31ComputedData.label" :editable="tTextx0x31ComputedData.editable" :c-style="tTextx0x31ComputedData.cStyle" @click="onclick1733807865545_0_0"></t-text><t-high-light-text v-if="state.targetTypePM25 === 'PM25'" id="t-high-light-text-cdf7.c40d4d6da" class="airOverviewReachStandardsOther-t-high-light-text-0-32"  :fragment-list="replaceCssVariables(filterData(state.targetTextPM25, componentPropBindingMap?.['t-high-light-text-cdf7.c40d4d6da']['fragmentList'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :styles="tHighLightTextx0x32ComputedData.styles" :c-style="tHighLightTextx0x32ComputedData.cStyle"></t-high-light-text><t-text v-if="state.targetTypePM10 !== 'PM10'" id="t-text-e9ad.369d004d" class="airOverviewReachStandardsOther-t-text-0-33"  :label="tTextx0x33ComputedData.label" :editable="tTextx0x33ComputedData.editable" :c-style="tTextx0x33ComputedData.cStyle" @click="onclick1733802221289"></t-text><t-high-light-text v-if="state.targetTypePM10 === 'PM10'" id="t-high-light-text-25c0.b995f224b" class="airOverviewReachStandardsOther-t-high-light-text-0-34"  :fragment-list="replaceCssVariables(filterData(state.targetTextPM10, componentPropBindingMap?.['t-high-light-text-25c0.b995f224b']['fragmentList'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :styles="tHighLightTextx0x34ComputedData.styles" :c-style="tHighLightTextx0x34ComputedData.cStyle"></t-high-light-text></div>
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
import { THighLightText, TRankSingle, TRect, TText, TTextUnit } from '@ths/design';

export default {
  components: {
    THighLightText,
    TRankSingle,
    TRect,
    TText,
    TTextUnit,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-text-unit-a8cf.a9e16aba":{"attributeName":"tTextUnitx0x0"},"t-rect-eb61.e10ae7b4f":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-d402.7658ee068":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-db18.008b940ca":{"attributeName":"tTextUnitx0x3","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-12e6.b01ed4e5c":{"attributeName":"tTextUnitx0x4","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-rank-single-5cca.3d92157e6":{"attributeName":"tRankSinglex0x5"},"t-rank-single-629c.1968a5097":{"attributeName":"tRankSinglex0x6","iconSrc":{"filters":[]},"data":{"filters":[]},"cStyle":{"filters":[]},"tab":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"dataStyle":{"filters":[]},"alias":{"filters":[]}},"t-rank-single-c8f3.2b83f8a6":{"attributeName":"tRankSinglex0x7","iconSrc":{"filters":[]},"data":{"filters":[]},"cStyle":{"filters":[]},"tab":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"dataStyle":{"filters":[]},"alias":{"filters":[]}},"t-rect-1aa2.4c1672a0f":{"attributeName":"tRectx0x8","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rank-single-236d.09a651c79":{"attributeName":"tRankSinglex0x9","iconSrc":{"filters":[]},"data":{"filters":[]},"cStyle":{"filters":[]},"tab":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"dataStyle":{"filters":[]},"alias":{"filters":[]}},"t-rect-be0f.37f22f963":{"attributeName":"tRectx0x10"},"t-rank-single-79ea.92326874e":{"attributeName":"tRankSinglex0x11"},"t-rect-1c35.319a20c58":{"attributeName":"tRectx0x12"},"t-text-94c7.7fe231dd4":{"attributeName":"tTextx0x13"},"t-high-light-text-7c23.645241cc":{"attributeName":"tHighLightTextx0x14"},"t-text-unit-d3df.a0b65b552":{"attributeName":"tTextUnitx0x15"},"t-text-unit-6181.4618a3cf3":{"attributeName":"tTextUnitx0x16"},"t-text-0221.4e2f904ed":{"attributeName":"tTextx0x17"},"t-text-5a73.970bfb127":{"attributeName":"tTextx0x18"},"t-rect-4f32.75d3c6bab":{"attributeName":"tRectx0x19","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rank-single-7cf4.bc7be447a":{"attributeName":"tRankSinglex0x20","iconSrc":{"filters":[]},"data":{"filters":[]},"cStyle":{"filters":[]},"tab":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"dataStyle":{"filters":[]},"alias":{"filters":[]}},"t-text-3b82.33582e4bb":{"attributeName":"tTextx0x21"},"t-high-light-text-d888.c15ecbe3":{"attributeName":"tHighLightTextx0x22","fragmentList":{"filters":[]},"styles":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-9d53.489b61e56":{"attributeName":"tTextUnitx0x23","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-366d.2fc818f74":{"attributeName":"tTextUnitx0x24","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]},"unitRaw":{"filters":[]}},"t-text-542a.c4227da1c":{"attributeName":"tTextx0x25","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-99a6.cbc1f35af":{"attributeName":"tTextx0x26","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-6fbb.3531a8629":{"attributeName":"tTextx0x27"},"t-high-light-text-e215.dc36f6d43":{"attributeName":"tHighLightTextx0x28","fragmentList":{"filters":[]},"styles":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-7e20.218b327e4":{"attributeName":"tTextUnitx0x29","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-bd8f.0fb21aa0d":{"attributeName":"tTextUnitx0x30","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]},"unitRaw":{"filters":[]}},"t-text-19fd.0b0e09c18":{"attributeName":"tTextx0x31","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-high-light-text-cdf7.c40d4d6da":{"attributeName":"tHighLightTextx0x32","fragmentList":{"filters":[]},"styles":{"filters":[]},"cStyle":{"filters":[]}},"t-text-e9ad.369d004d":{"attributeName":"tTextx0x33","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-high-light-text-25c0.b995f224b":{"attributeName":"tHighLightTextx0x34","fragmentList":{"filters":[]},"styles":{"filters":[]},"cStyle":{"filters":[]}},"t-high-light-text-0755.5a5cb4ecf":{"attributeName":"tHighLightTextx0x35"}};
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
   random: "",
   time: "",
   pointType: "",
   pointCode: "",
   isOverO3: false,
   isOverPM25: false,
   isOverPM10: false,
   fragmentListO3: [],
   fragmentListPM25: [],
   targetTypeO3: "",
   targetTypePM10: "",
   targetTypePM25: "",
   processDataO3: [{"currentValue":0}],
   processDataPM10: [{"currentValue":0}],
   processDataPM25: [{"currentValue":0}],
   targetTextO3: [],
   targetTextPM10: [],
   targetTextPM25: [],
   reachStandardsData: {"PM25":"0","PM10":"0","O3":"0","PM25_TARGET":"0","PM10_TARGET":"0","O3_TARGET":"0","PM25_LASTYEAR":"0","PM10_LASTYEAR":"0","O3_LASTYEAR":"0"},
   airOverviewContentState: {"timeValue":"","timeType":""},
   targetText: [],
   O3: "O₃-8h",
   PM10: "PM₁₀",
   PM25: "PM₂.₅",
   fragmentListPM10: [],
   processData: [{"currentValue":85}],
   isOver: false,
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
            default: {"width":"409.0395864948666px","height":"87.99003601074219px","position":"unset","left":"-0.000030517578125px","top":"0.99432373046875px","backgroundColor":"var(--business-show-bg10)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"409.0395864948666px","height":"87.99003601074219px","position":"unset","left":"-0.000030517578125px","top":"0.99432373046875px","backgroundColor":"var(--business-show-bg10)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""}},"unit":{"default":{"backgroundColor":"rgba(57, 102, 147, 0.1)"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"410px","height":"88px","position":"unset","left":"1px","top":"103px","backgroundColor":"var(--business-show-bg10)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"88px","position":"unset","left":"1px","top":"103px","backgroundColor":"var(--business-show-bg10)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""}},"unit":{"default":{"backgroundColor":"rgba(57, 102, 147, 0.1)"}}}, 
 },
},
tTextUnitx0x3: {
defaultStyle: {
            default: {"width":"128px","height":"20px","flex-direction":"row-reverse","animationName":"","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","left":"126px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"128px","height":"20px","flex-direction":"row-reverse","animationName":"","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","left":"126px"}},"unit":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"text":{"default":{"fontFamily":"DIN-bold","marginLeft":"6px","marginRight":"auto"}}},
justify:"flex-end",
align:"flex-end",
content:"0",
unit:"去年同期",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x4: {
defaultStyle: {
            default: {"width":"128px","height":"20px","flex-direction":"row-reverse","animationName":"","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","left":"126px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"128px","height":"20px","flex-direction":"row-reverse","animationName":"","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","left":"126px"}},"unit":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"text":{"default":{"fontFamily":"DIN-bold","marginLeft":"6px","marginRight":"auto"}}},
justify:"flex-end",
align:"flex-end",
content:"0",
unit:"去年同期",
showOverflowTooltip:true, 
 },
},
tRankSinglex0x6: {
defaultStyle: {
            default: {"width":"373px","height":"63px","color":"rgba(227, 55, 39, 1)","textAlign":"left","position":"unset","left":"20px","top":"26px","animationName":""},
            
            },
 default: { 
 
iconSrc:"assets/images/2024-12-25/ec449e439f3a479ba5c51c4f55f17663.png",
data:[{"currentValue":0}],
cStyle:{"wrapper":{"default":{"width":"373px","height":"63px","color":"rgba(227, 55, 39, 1)","textAlign":"left","position":"unset","left":"20px","top":"26px","animationName":""}},"index":{"default":{"backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","color":"rgba(255, 255, 255, 1)","fontSize":"16px","height":"19px","width":"27px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","backgroundColor":"","opacity":"0% !important"}},"name":{"default":{"color":"rgba(145, 70, 45, 1)","fontSize":"300px","backgroundColor":"rgba(138, 65, 65, 0)","fontWeight":"400","lineHeight":"20px","width":"auto","height":"auto","position":"static","left":"0px","bottom":"8px","fontFamily":"DIN-bold","borderLeft":"1px none rgba(1,13,66,1)","borderTop":"1px none rgba(1,13,66,1)","borderRight":"1px none rgba(1,13,66,1)","borderBottom":"1px none rgba(1,13,66,1)","opacity":"0% !important"}},"proportionBarBg":{"default":{"transform":"none","height":"8px","borderRadius":0,"backgroundColor":"rgba(20, 112, 204, 0.15)","border":"1px solid rgba(255,213,0,0.3)","box-shadow":"","borderLeft":"1px solid rgba(108,199,255,0.1)","borderTop":"1px solid rgba(108,199,255,0.1)","borderRight":"1px solid rgba(108,199,255,0.1)","borderBottom":"1px solid rgba(108,199,255,0.1)"}},"proportionBarInner":{"default":{"transform":"none","height":"6px","borderRadius":0,"backgroundImage":"linear-gradient(270deg, #FF8400 7%, rgba(255, 132, 0, 0) 100%);","-webkit-mask-image":""}},"value":{"default":{"color":"#fff","fontWeight":500,"fontSize":"18px","opacity":"0% !important"}},"unit":{"default":{"color":"#B7E3FF","fontWeight":400,"fontSize":"12px","opacity":"0% !important"}},"innerContainer":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"proportionBar":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.2)","borderLeft":"1px none rgba(24,40,107,1)","borderTop":"1px none rgba(24,40,107,1)","borderRight":"1px none rgba(24,40,107,1)","borderBottom":"1px none rgba(24,40,107,1)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"separator":{"default":{"fontSize":"0px","width":"0px"}},"itemWrapper":{"default":{"paddingTop":"0px","paddingBottom":"0px"}},"icon":{"default":{"marginLeft":"94%"}}},
tab:false,
keyWord:"",
defaultChecked:"",
autoScroll:false,
speed:3,
dataStyle:[],
alias:{"percentage":"percentage"}, 
 },
},
tRankSinglex0x7: {
defaultStyle: {
            default: {"width":"373px","height":"63px","color":"rgba(227, 55, 39, 1)","textAlign":"left","position":"unset","left":"21px","top":"126px","animationName":""},
            
            },
 default: { 
 
iconSrc:"assets/images/2024-12-25/ec449e439f3a479ba5c51c4f55f17663.png",
data:[{"currentValue":0}],
cStyle:{"wrapper":{"default":{"width":"373px","height":"63px","color":"rgba(227, 55, 39, 1)","textAlign":"left","position":"unset","left":"21px","top":"126px","animationName":""}},"index":{"default":{"backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","color":"rgba(255, 255, 255, 1)","fontSize":"16px","height":"19px","width":"27px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","backgroundColor":"","opacity":"0% !important"}},"name":{"default":{"color":"rgba(145, 70, 45, 1)","fontSize":"300px","backgroundColor":"rgba(138, 65, 65, 0)","fontWeight":"400","lineHeight":"20px","width":"auto","height":"auto","position":"static","left":"0px","bottom":"8px","fontFamily":"DIN-bold","borderLeft":"1px none rgba(1,13,66,1)","borderTop":"1px none rgba(1,13,66,1)","borderRight":"1px none rgba(1,13,66,1)","borderBottom":"1px none rgba(1,13,66,1)","opacity":"0% !important"}},"proportionBarBg":{"default":{"transform":"none","height":"8px","borderRadius":0,"backgroundColor":"rgba(20, 112, 204, 0.15)","border":"1px solid rgba(255,213,0,0.3)","box-shadow":"","borderLeft":"1px solid rgba(108,199,255,0.1)","borderTop":"1px solid rgba(108,199,255,0.1)","borderRight":"1px solid rgba(108,199,255,0.1)","borderBottom":"1px solid rgba(108,199,255,0.1)"}},"proportionBarInner":{"default":{"transform":"none","height":"6px","borderRadius":0,"backgroundImage":"linear-gradient(270deg, #FF8400 7%, rgba(255, 132, 0, 0) 100%);","-webkit-mask-image":""}},"value":{"default":{"color":"#fff","fontWeight":500,"fontSize":"18px","opacity":"0% !important"}},"unit":{"default":{"color":"#B7E3FF","fontWeight":400,"fontSize":"12px","opacity":"0% !important"}},"innerContainer":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"proportionBar":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.2)","borderLeft":"1px none rgba(24,40,107,1)","borderTop":"1px none rgba(24,40,107,1)","borderRight":"1px none rgba(24,40,107,1)","borderBottom":"1px none rgba(24,40,107,1)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"separator":{"default":{"fontSize":"0px","width":"0px"}},"itemWrapper":{"default":{"paddingTop":"0px","paddingBottom":"0px"}},"icon":{"default":{"marginLeft":"94.1%"}}},
tab:false,
keyWord:"",
defaultChecked:"",
autoScroll:false,
speed:3,
dataStyle:[],
alias:{"percentage":"percentage"}, 
 },
},
tRectx0x8: {
defaultStyle: {
            default: {"width":"1px","height":"15px","position":"unset","left":"256px","top":"146px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"15px","position":"unset","left":"256px","top":"146px","animationName":""}}}, 
 },
},
tRankSinglex0x9: {
defaultStyle: {
            default: {"width":"373px","height":"63px","color":"rgba(227, 55, 39, 1)","textAlign":"left","position":"unset","left":"21px","top":"126px","animationName":""},
            
            },
 default: { 
 
iconSrc:"assets/images/2024-12-04/7b2e5b121f954e84913bbef46dcf4a83.png",
data:[{"currentValue":0}],
cStyle:{"wrapper":{"default":{"width":"373px","height":"63px","color":"rgba(227, 55, 39, 1)","textAlign":"left","position":"unset","left":"21px","top":"126px","animationName":""}},"index":{"default":{"backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","color":"rgba(255, 255, 255, 1)","fontSize":"16px","height":"19px","width":"27px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","backgroundColor":"","opacity":"0% !important"}},"name":{"default":{"color":"rgba(145, 70, 45, 1)","fontSize":"300px","backgroundColor":"rgba(138, 65, 65, 0)","fontWeight":"400","lineHeight":"20px","width":"auto","height":"auto","position":"static","left":"0px","bottom":"8px","fontFamily":"DIN-bold","borderLeft":"1px none rgba(1,13,66,1)","borderTop":"1px none rgba(1,13,66,1)","borderRight":"1px none rgba(1,13,66,1)","borderBottom":"1px none rgba(1,13,66,1)","opacity":"0% !important"}},"proportionBarBg":{"default":{"transform":"none","height":"8px","borderRadius":0,"backgroundColor":"rgba(20, 112, 204, 0.15)","border":"1px solid rgba(255,213,0,0.3)","box-shadow":"","borderLeft":"1px solid rgba(108,199,255,0.1)","borderTop":"1px solid rgba(108,199,255,0.1)","borderRight":"1px solid rgba(108,199,255,0.1)","borderBottom":"1px solid rgba(108,199,255,0.1)"}},"proportionBarInner":{"default":{"transform":"none","height":"6px","borderRadius":0,"backgroundImage":"linear-gradient(270deg,rgba(4, 247, 251, 1) 0%,rgba(255, 213, 0, 0) 100%)","-webkit-mask-image":""}},"value":{"default":{"color":"#fff","fontWeight":500,"fontSize":"18px","opacity":"0% !important"}},"unit":{"default":{"color":"#B7E3FF","fontWeight":400,"fontSize":"12px","opacity":"0% !important"}},"innerContainer":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"proportionBar":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.2)","borderLeft":"1px none rgba(24,40,107,1)","borderTop":"1px none rgba(24,40,107,1)","borderRight":"1px none rgba(24,40,107,1)","borderBottom":"1px none rgba(24,40,107,1)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"separator":{"default":{"fontSize":"0px","width":"0px"}},"itemWrapper":{"default":{"paddingTop":"0px","paddingBottom":"0px"}},"icon":{"default":{"marginLeft":"94%"}}},
tab:false,
keyWord:"",
defaultChecked:"",
autoScroll:false,
speed:3,
dataStyle:[],
alias:{"percentage":"percentage"}, 
 },
},
tRectx0x19: {
defaultStyle: {
            default: {"width":"1px","height":"14.999999046325684px","position":"unset","left":"256.39519634292566px","top":"42.99003601074219px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"14.999999046325684px","position":"unset","left":"256.39519634292566px","top":"42.99003601074219px","animationName":""}}}, 
 },
},
tRankSinglex0x20: {
defaultStyle: {
            default: {"width":"373px","height":"63px","color":"rgba(227, 55, 39, 1)","textAlign":"left","animationName":"","top":"26px","left":"20px","fontSize":"0px"},
            
            },
 default: { 
 
iconSrc:"assets/images/2024-12-04/162b6d0793604e93a928e237685698e1.png",
data:[{"currentValue":0}],
cStyle:{"wrapper":{"default":{"width":"373px","height":"63px","color":"rgba(227, 55, 39, 1)","textAlign":"left","animationName":"","top":"26px","left":"20px","fontSize":"0px"}},"index":{"default":{"backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","color":"rgba(255, 255, 255, 1)","fontSize":"16px","height":"19px","width":"27px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","backgroundColor":"","opacity":"0% !important"}},"name":{"default":{"color":"rgba(145, 70, 45, 1)","fontSize":"300px","backgroundColor":"rgba(138, 65, 65, 0)","fontWeight":"400","lineHeight":"20px","width":"auto","height":"auto","position":"static","left":"0px","bottom":"8px","fontFamily":"DIN-bold","borderLeft":"1px none rgba(1,13,66,1)","borderTop":"1px none rgba(1,13,66,1)","borderRight":"1px none rgba(1,13,66,1)","borderBottom":"1px none rgba(1,13,66,1)","opacity":"0% !important"}},"proportionBarBg":{"default":{"transform":"none","height":"8px","borderRadius":0,"backgroundColor":"rgba(20, 112, 204, 0.15)","border":"1px solid rgba(255,213,0,0.3)","box-shadow":"","borderLeft":"1px solid rgba(108,199,255,0.1)","borderTop":"1px solid rgba(108,199,255,0.1)","borderRight":"1px solid rgba(108,199,255,0.1)","borderBottom":"1px solid rgba(108,199,255,0.1)"}},"proportionBarInner":{"default":{"transform":"none","height":"6px","borderRadius":0,"backgroundImage":"linear-gradient(270deg,rgba(4, 247, 251, 1) 0%,rgba(255, 213, 0, 0) 100%)","-webkit-mask-image":""}},"value":{"default":{"color":"#fff","fontWeight":500,"fontSize":"18px","opacity":"0% !important"}},"unit":{"default":{"color":"#B7E3FF","fontWeight":400,"fontSize":"12px","opacity":"0% !important"}},"innerContainer":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"proportionBar":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.2)","borderLeft":"1px none rgba(24,40,107,1)","borderTop":"1px none rgba(24,40,107,1)","borderRight":"1px none rgba(24,40,107,1)","borderBottom":"1px none rgba(24,40,107,1)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"separator":{"default":{"fontSize":"0px","width":"0px"}},"itemWrapper":{"default":{"paddingBottom":"0px","paddingTop":"0px"}},"icon":{"default":{"marginLeft":"94%"}}},
tab:false,
keyWord:"",
defaultChecked:"",
autoScroll:false,
speed:3,
dataStyle:[],
alias:{"percentage":"percentage"}, 
 },
},
tHighLightTextx0x22: {
defaultStyle: {
            default: {"width":"47px","height":"19px","position":"unset","left":"28px","top":"40px","animationName":""},
            
            },
 default: { 
 
fragmentList:[],
styles:[{"name":"style1","style":{"fontFamily":"DIN-bold","fontSize":"var(--business-num-size-18)","fontWeight":400,"color":"#00FFFF"}},{"name":"style2","style":{"fontFamily":"DIN-bold","fontSize":"var(--business-num-size-18)","fontWeight":400,"color":"#FF8400"}}],
cStyle:{"wrapper":{"default":{"width":"47px","height":"19px","position":"unset","left":"28px","top":"40px","animationName":""}}}, 
 },
},
tTextUnitx0x23: {
defaultStyle: {
            default: {"width":"128px","height":"19px","flex-direction":"row-reverse"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"128px","height":"19px","flex-direction":"row-reverse"}},"unit":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"text":{"default":{"fontFamily":"DIN-bold","marginLeft":"6px","marginRight":"auto","color":"var(--business-white)","fontSize":"var(--business-text-size-14)"}}},
justify:"flex-end",
align:"flex-end",
content:"0",
unit:"全市考核目标",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x24: {
defaultStyle: {
            default: {"width":"auto","height":"18px","fontSize":"12px","fontWeight":"700","color":"var(--t-white)"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"18px","fontSize":"12px","fontWeight":"700","color":"var(--t-white)"}},"unit":{"default":{"fontSize":"var(--business-text-size-12)","color":"var(--business-white)"}},"text":{"default":{"fontSize":"var(--business-text-size-16)","color":"var(--business-white)"}}},
justify:"flex-end",
align:"flex-end",
content:"PM？.？",
unit:"（μg/m³）",
showOverflowTooltip:true,
unitRaw:"（μg/{{M3}}）", 
 },
},
tTextx0x25: {
defaultStyle: {
            default: {"width":"110px","height":"auto","color":"var(--business-strong)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":"","cursor":"pointer","paddingLeft":"20px","backgroundImage":"url(assets/images/2024-12-10/b88a9534077441e29df4a189a4c94997.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":""},
            
            },
 default: { 
 
label:"考核目标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"110px","height":"auto","color":"var(--business-strong)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":"","cursor":"pointer","paddingLeft":"20px","backgroundImage":"url(assets/images/2024-12-10/b88a9534077441e29df4a189a4c94997.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":""}},"text":{"default":{"fontSize":"14px","color":"var(--t-white)"}}}, 
 },
},
tTextx0x26: {
defaultStyle: {
            default: {"width":"110px","height":"auto","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","cursor":"pointer","paddingLeft":"20px","backgroundImage":"var(--assessment-target-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":""},
            
            },
 default: { 
 
label:"考核目标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"110px","height":"auto","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","cursor":"pointer","paddingLeft":"20px","backgroundImage":"var(--assessment-target-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":""}},"text":{"default":{"fontSize":"14px","color":"var(--t-white)"}}}, 
 },
},
tHighLightTextx0x28: {
defaultStyle: {
            default: {"width":"47px","height":"19px","position":"unset","left":"27px","top":"143px","animationName":""},
            
            },
 default: { 
 
fragmentList:[],
styles:[{"name":"style1","style":{"fontFamily":"DIN-bold","fontSize":"var(--business-num-size-18)","fontWeight":400,"color":"#00FFFF"}},{"name":"style2","style":{"fontFamily":"DIN-bold","fontSize":"var(--business-num-size-18)","fontWeight":400,"color":"#FF8400","background":"unset","backgroundClip":"unset"}}],
cStyle:{"wrapper":{"default":{"width":"47px","height":"19px","position":"unset","left":"27px","top":"143px","animationName":""}}}, 
 },
},
tTextUnitx0x29: {
defaultStyle: {
            default: {"width":"128px","height":"19px","flex-direction":"row-reverse"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"128px","height":"19px","flex-direction":"row-reverse"}},"unit":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"text":{"default":{"fontFamily":"DIN-bold","marginLeft":"6px","marginRight":"auto","color":"var(--business-white)","fontSize":"var(--business-text-size-14)"}}},
justify:"flex-end",
align:"flex-end",
content:"0",
unit:"全市考核目标",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x30: {
defaultStyle: {
            default: {"width":"auto","height":"18px","fontSize":"12px","fontWeight":"700","color":"var(--t-white)"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"18px","fontSize":"12px","fontWeight":"700","color":"var(--t-white)"}},"unit":{"default":{"fontSize":"var(--business-text-size-12)","color":"var(--business-white)"}},"text":{"default":{"fontSize":"var(--business-text-size-16)","color":"var(--business-white)"}}},
justify:"flex-end",
align:"flex-end",
content:"PM？？",
unit:"（μg/m³）",
showOverflowTooltip:true,
unitRaw:"（μg/{{M3}}）", 
 },
},
tTextx0x31: {
defaultStyle: {
            default: {"width":"110px","height":"auto","color":"var(--business-strong)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":"","cursor":"pointer","paddingLeft":"20px","backgroundImage":"url(assets/images/2024-12-10/b88a9534077441e29df4a189a4c94997.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":""},
            
            },
 default: { 
 
label:"考核目标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"110px","height":"auto","color":"var(--business-strong)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":"","cursor":"pointer","paddingLeft":"20px","backgroundImage":"url(assets/images/2024-12-10/b88a9534077441e29df4a189a4c94997.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":""}},"text":{"default":{"fontSize":"14px","color":"var(--t-white)"}}}, 
 },
},
tHighLightTextx0x32: {
defaultStyle: {
            default: {"width":"378.1965393505508px","height":"57.99715805053711px","top":"32.99003601074219px","left":"15.912420625023417px","backgroundColor":"var(--business-dialog-bg)","position":"unset","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","display":"block","textAlign":"left","fontSize":"14px","lineHeight":"22px","paddingTop":"5px","marginLeft":"0px","paddingLeft":"10px","animationName":"","paddingRight":"10px"},
            
            },
 default: { 
 
fragmentList:[],
styles:[{"name":"style1","style":{"fontFamily":"微软雅黑","fontSize":"var(--business-text-size-14)","fontWeight":400,"color":"var(--business-white)","background":"unset","backgroundClip":"unset"}},{"name":"style2","style":{"fontFamily":"微软雅黑","fontSize":"var(--business-text-size-14)","fontWeight":400,"color":"var(--business-strong)"}}],
cStyle:{"wrapper":{"default":{"width":"378.1965393505508px","height":"57.99715805053711px","top":"32.99003601074219px","left":"15.912420625023417px","backgroundColor":"var(--business-dialog-bg)","position":"unset","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","display":"block","textAlign":"left","fontSize":"14px","lineHeight":"22px","paddingTop":"5px","marginLeft":"0px","paddingLeft":"10px","animationName":"","paddingRight":"10px"}}}, 
 },
},
tTextx0x33: {
defaultStyle: {
            default: {"width":"110px","height":"auto","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","cursor":"pointer","paddingLeft":"20px","backgroundImage":"var(--assessment-target-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":""},
            
            },
 default: { 
 
label:"考核目标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"110px","height":"auto","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","cursor":"pointer","paddingLeft":"20px","backgroundImage":"var(--assessment-target-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":""}},"text":{"default":{"fontSize":"14px","color":"var(--t-white)"}}}, 
 },
},
tHighLightTextx0x34: {
defaultStyle: {
            default: {"width":"380px","height":"58px","top":"137px","left":"17px","backgroundColor":"var(--business-dialog-bg)","position":"unset","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","display":"block","textAlign":"left","fontSize":"14px","lineHeight":"22px","paddingTop":"5px","marginLeft":"0px","paddingLeft":"10px","animationName":"","paddingRight":"10px"},
            
            },
 default: { 
 
fragmentList:[],
styles:[{"name":"style1","style":{"fontFamily":"微软雅黑","fontSize":"var(--business-text-size-14)","fontWeight":400,"color":"var(--business-white)","background":"unset","backgroundClip":"unset"}},{"name":"style2","style":{"fontFamily":"微软雅黑","fontSize":"var(--business-text-size-14)","fontWeight":400,"color":"var(--business-strong)"}}],
cStyle:{"wrapper":{"default":{"width":"380px","height":"58px","top":"137px","left":"17px","backgroundColor":"var(--business-dialog-bg)","position":"unset","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","display":"block","textAlign":"left","fontSize":"14px","lineHeight":"22px","paddingTop":"5px","marginLeft":"0px","paddingLeft":"10px","animationName":"","paddingRight":"10px"}}}, 
 },
},
});
const convertName = () => {
const subList = convertCharacter('下标')[0].split(' ')
state.PM10 = `PM${subList[1]}${subList[0]}`
state.O3 = `O${subList[3]}-8h`
state.PM25 = `PM${subList[2]}.${subList[5]}`
};
const openTartget = (type) => {
switch (type) {
  case 'PM25':
      state.targetTypePM25 = state.targetTypePM25 ? '' : type;
      break;
  case 'PM10':
      state.targetTypePM10 = state.targetTypePM10 ? '' : type;
      break;
  case 'O3-8h': 
      state.targetTypeO3 = state.targetTypeO3 ? '' : type;
      break;
}
     
};
const getProvider = () => {
const rootData = inject('airOverviewContentState');
watch([() => rootData, () => global.regionaQuery.regionCode], async() => {
  state.airOverviewContentState = rootData;
  if (state.airOverviewContentState.timeValue) {
    const regionLevelCode = getRegionLevel(global.regionaQuery.regionCode);
    switch (regionLevelCode) {
      case 'province':
        state.pointType = '11';
        break;
      case 'city':
        state.pointType = '12';
        break;
      case 'county':
        state.pointType = '13';
        break;
      default:
        break;
    }
    state.random = 'asd' + Date.now()
    // state.time = state.airOverviewContentState.timeValue.slice(0, 7)
    state.pointCode = global.regionaQuery.regionCode.slice(0,6)
    await apiRegistry.getLatestTime.request();
    await apiRegistry.getReachStandardsData.request();
  }
}, {
  deep: true,
  immediate: true
})
};
const onclick1733807871812_1_0 = () => {
// 执行自定义方法
openTartget("O3-8h");
};
const onclick1733802260385 = () => {
// 执行自定义方法
openTartget("O3-8h");
};
const onclick1733807586905 = () => {
// 执行自定义方法
openTartget("PM25");
};
const onclick1733801376161 = () => {
// 执行自定义方法
openTartget("PM25");
};
const onclick1733807865545_0_0 = () => {
// 执行自定义方法
openTartget("PM10");
};
const onclick1733802221289 = () => {
// 执行自定义方法
openTartget("PM10");
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getReachStandardsData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"RANDOM":"state.random","DATE_TYPE":"ACC_MONTH","POINT_CODE":"state.pointCode","POINT_TYPE":"state.pointType","MONITORTIME":"state.time","interfaceId":"f8f9d9ff275ebab91736710addd19eb3"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"RANDOM":state.random,"DATE_TYPE":"ACC_MONTH","POINT_CODE":state.pointCode,"POINT_TYPE":state.pointType,"MONITORTIME":state.time,"interfaceId":"f8f9d9ff275ebab91736710addd19eb3"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"RANDOM":state.random,"DATE_TYPE":"ACC_MONTH","POINT_CODE":state.pointCode,"POINT_TYPE":state.pointType,"MONITORTIME":state.time,"interfaceId":"f8f9d9ff275ebab91736710addd19eb3"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getReachStandardsData'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.reachStandardsData.PM25 = data.PM25 || 0;
  state.reachStandardsData.PM10 = data.PM10 || 0;
  state.reachStandardsData.O3 = data.O3_8 || 0;
  state.reachStandardsData.PM25_TARGET = data.PM25_TARGET || 0;
  state.reachStandardsData.PM10_TARGET = data.PM10_TARGET || 0;
  state.reachStandardsData.O3_TARGET = data.O3_8_TARGET || 0;
  state.reachStandardsData.PM25_LASTYEAR = data.PM25_LASTYEAR || 0;
  state.reachStandardsData.PM10_LASTYEAR = data.PM10_LASTYEAR || 0;
  state.reachStandardsData.O3_LASTYEAR = data.O3_LASTYEAR || 0;
  const subList = convertCharacter('上标')[0].split(' ')

  // 浓度 > 目标
  state.isOverO3 = Number(state.reachStandardsData.O3) > Number(state.reachStandardsData.O3_TARGET);
  state.isOverPM25 = Number(state.reachStandardsData.PM25) > Number(state.reachStandardsData.PM25_TARGET);
  state.isOverPM10 = Number(state.reachStandardsData.PM10) > Number(state.reachStandardsData.PM10_TARGET);

  // state.isOverO3 =  false;
  // state.isOverPM25 =  false;
  // state.isOverPM10 =  false;

  state.fragmentListO3 = [
    {
      "text": state.reachStandardsData.O3,
      "styleName": state.isOverO3 ? "style2" : "style1"
    }
  ];
  state.fragmentListPM25 = [
    {
      "text": state.reachStandardsData.PM25,
      "styleName": state.isOverPM25 ? "style2" : "style1"
    }
  ];
  state.fragmentListPM10 = [
    {
      "text": state.reachStandardsData.PM10,
      "styleName": state.isOverPM10 ? "style2" : "style1"
    }
  ];
  state.targetTextPM25 = [
    {
      "text": "在余下的",
      "styleName": "style1"
    },
    {
      "text": `${handleNoVal(data.DAYS_REMAINS)}天`,
      "styleName": "style2"
    },
    {
      "text": `内，如每天${replacePollutionCharacter('PM25')}浓度控制在`,
      "styleName": "style1"
    },
    {
      "text": `${handleNoVal(data.PM25_DAYSREMAINS)}μg/m${subList[3]}`,
      "styleName": "style2"
    },
    {
      "text": "内，则可达标",
      "styleName": "style1"
    }
  ]
  state.targetTextPM10 = [
    {
      "text": "在余下的",
      "styleName": "style1"
    },
    {
      "text": `${handleNoVal(data.DAYS_REMAINS)}天`,
      "styleName": "style2"
    },
    {
      "text": `内，如每天${replacePollutionCharacter('PM10')}浓度控制在`,
      "styleName": "style1"
    },
    {
      "text": `${handleNoVal(data.PM10_DAYSREMAINS)}μg/m${subList[3]}`,
      "styleName": "style2"
    },
    {
      "text": "内，则可达标",
      "styleName": "style1"
    }
  ]
  state.targetTextO3 = [
    {
      "text": "每年可消耗污染天数为",
      "styleName": "style1"
    },
    {
      "text": `${handleNoVal(data.O3_8_TARGET_DAY)}天`,
      "styleName": "style2"
    },
    {
      "text": "，已消耗",
      "styleName": "style1"
    },
    {
      "text": `${handleNoVal(data.O3_8_DAY)}天`,
      "styleName": "style2"
    },
    {
      "text": "，在余下的",
      "styleName": "style1"
    },
    {
      "text": `${handleNoVal(data.DAYS_REMAINS)}天`,
      "styleName": "style2"
    },
    {
      "text": "内，污染天数应控制在",
      "styleName": "style1"
    },
    {
      "text": `${handleNoVal(data.O3_8_TARGET_DAY - data.O3_8_DAY)}天`,
      "styleName": "style2"
    },
    {
      "text": "内，则可达标",
      "styleName": "style1"
    }
  ]
  // 计算百分比- 当前值 / （当前值，去年同期， 全市考核目标最大值）
  const maxPM25 = Math.max(Number(data.PM25), Number(data.PM25_TARGET), Number(data.PM25_LASTYEAR));
  const maxPM10 = Math.max(Number(data.PM10), Number(data.PM10_TARGET), Number(data.PM10_LASTYEAR));
  const maxO3 = Math.max(Number(data.O3_8), Number(data.O3_8_TARGET), Number(data.O3_LASTYEAR));

  state.processDataPM25 = [
    {
      currentValue: (Number(data.PM25) / maxPM25) * 100
    }
  ]
  state.processDataPM10 = [
    {
      currentValue: (Number(data.PM10) / maxPM10) * 100
    }
  ]
  state.processDataO3 = [
    {
      currentValue: (Number(data.O3_8) / maxO3) * 100
    }
  ]

  setTimeout(() => {
    // 月份请求时，进度条偏移，原因未知
    let dom = document.getElementById('t-l-c-airOverviewReachStandardsOther');
    if (dom) {
      let rankInfo = document.getElementById('t-l-c-airOverviewReachStandardsOther').querySelectorAll('.rank-info');
      if (rankInfo) {
        rankInfo.forEach(item => {
          console.log(item);
          item.clientHeight = 40;
          if (item.offsetTop === 0) {
            item.style.height = '40px';
          } else {
            item.style.height = '';
          }
          console.log(item.style);
        })
      }
    }
  }, 1000)

} else {
  state.processDataPM25 = [
    {
      currentValue: 0
    }
  ]
  state.processDataPM10 = [
    {
      currentValue: 0
    }
  ]
  state.processDataO3 = [
    {
      currentValue: 0
    }
  ]


  state.isOverO3 = false;
  state.isOverPM25 = false;
  state.isOverPM10 = false;

  state.fragmentListO3 = [
    {
      "text": 0,
      "styleName": "style1"
    }
  ];
  state.fragmentListPM25 = [
    {
      "text": 0,
      "styleName": "style1"
    }
  ];
  state.fragmentListPM10 = [
    {
      "text": 0,
      "styleName": "style1"
    }
  ];
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableData = [];
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"RANDOM":"state.random","TIME_TYPE":"day","POINT_CODE":"state.pointCode","POINT_TYPE":"state.pointType","interfaceId":"66ad2ebe9d660295568b05187f34e133"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"RANDOM":state.random,"TIME_TYPE":"day","POINT_CODE":state.pointCode,"POINT_TYPE":state.pointType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"RANDOM":state.random,"TIME_TYPE":"day","POINT_CODE":state.pointCode,"POINT_TYPE":state.pointType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
state.time = ''
if (head.statusCode === '200' && data) {
  state.time = data.MONITORTIME
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
                            setPageScale('t-l-c-airOverviewReachStandardsOther', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
convertName();
// 执行自定义方法
getProvider();
onMounted(() => {
setPageScale('t-l-c-airOverviewReachStandardsOther', global.appScaleMode, 'normal');
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

 const tTextUnitx0x3ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x3.default, componentState.tTextUnitx0x3?.[state.screenSize]));

 const tTextUnitx0x4ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x4.default, componentState.tTextUnitx0x4?.[state.screenSize]));

 const tRankSinglex0x6ComputedData = computed(() => _.merge({}, componentState.tRankSinglex0x6.default, componentState.tRankSinglex0x6?.[state.screenSize]));

 const tRankSinglex0x7ComputedData = computed(() => _.merge({}, componentState.tRankSinglex0x7.default, componentState.tRankSinglex0x7?.[state.screenSize]));

 const tRectx0x8ComputedData = computed(() => _.merge({}, componentState.tRectx0x8.default, componentState.tRectx0x8?.[state.screenSize]));

 const tRankSinglex0x9ComputedData = computed(() => _.merge({}, componentState.tRankSinglex0x9.default, componentState.tRankSinglex0x9?.[state.screenSize]));

 const tRectx0x19ComputedData = computed(() => _.merge({}, componentState.tRectx0x19.default, componentState.tRectx0x19?.[state.screenSize]));

 const tRankSinglex0x20ComputedData = computed(() => _.merge({}, componentState.tRankSinglex0x20.default, componentState.tRankSinglex0x20?.[state.screenSize]));

 const tHighLightTextx0x22ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x22.default, componentState.tHighLightTextx0x22?.[state.screenSize]));

 const tTextUnitx0x23ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x23.default, componentState.tTextUnitx0x23?.[state.screenSize]));

 const tTextUnitx0x24ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x24.default, componentState.tTextUnitx0x24?.[state.screenSize]));

 const tTextx0x25ComputedData = computed(() => _.merge({}, componentState.tTextx0x25.default, componentState.tTextx0x25?.[state.screenSize]));

 const tTextx0x26ComputedData = computed(() => _.merge({}, componentState.tTextx0x26.default, componentState.tTextx0x26?.[state.screenSize]));

 const tHighLightTextx0x28ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x28.default, componentState.tHighLightTextx0x28?.[state.screenSize]));

 const tTextUnitx0x29ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x29.default, componentState.tTextUnitx0x29?.[state.screenSize]));

 const tTextUnitx0x30ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x30.default, componentState.tTextUnitx0x30?.[state.screenSize]));

 const tTextx0x31ComputedData = computed(() => _.merge({}, componentState.tTextx0x31.default, componentState.tTextx0x31?.[state.screenSize]));

 const tHighLightTextx0x32ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x32.default, componentState.tHighLightTextx0x32?.[state.screenSize]));

 const tTextx0x33ComputedData = computed(() => _.merge({}, componentState.tTextx0x33.default, componentState.tTextx0x33?.[state.screenSize]));

 const tHighLightTextx0x34ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x34.default, componentState.tHighLightTextx0x34?.[state.screenSize]));

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
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tTextUnitx0x3ComputedData,
tTextUnitx0x4ComputedData,
tRankSinglex0x6ComputedData,
tRankSinglex0x7ComputedData,
tRectx0x8ComputedData,
tRankSinglex0x9ComputedData,
tRectx0x19ComputedData,
tRankSinglex0x20ComputedData,
tHighLightTextx0x22ComputedData,
tTextUnitx0x23ComputedData,
tTextUnitx0x24ComputedData,
tTextx0x25ComputedData,
tTextx0x26ComputedData,
tHighLightTextx0x28ComputedData,
tTextUnitx0x29ComputedData,
tTextUnitx0x30ComputedData,
tTextx0x31ComputedData,
tHighLightTextx0x32ComputedData,
tTextx0x33ComputedData,
tHighLightTextx0x34ComputedData,
onclick1733807586905,
onclick1733801376161,
onclick1733807865545_0_0,
onclick1733802221289,
};
},
}
</script>

<style scoped>
.t-l-c-airOverviewReachStandardsOther {
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
height: 204px;
width: 410px;
background-color: rgba(0,0,0,0);
}
.t-l-c-airOverviewReachStandardsOther .airOverviewReachStandardsOther-t-rect-0-1 {
position: absolute !important;
top: 0.99432373046875px;
left: -0.000030517578125px;
width: 409.0395864948666px;
height: 87.99003601074219px;
pointer-events: auto;
}

.t-l-c-airOverviewReachStandardsOther .airOverviewReachStandardsOther-t-rect-0-2 {
position: absolute !important;
top: 103px;
left: 1px;
width: 410px;
height: 88px;
pointer-events: auto;
}

.t-l-c-airOverviewReachStandardsOther .airOverviewReachStandardsOther-t-text-unit-0-3 {
position: absolute !important;
top: 143px;
left: 126px;
width: 128px;
height: 20px;
pointer-events: auto;
}

.t-l-c-airOverviewReachStandardsOther .airOverviewReachStandardsOther-t-text-unit-0-4 {
position: absolute !important;
top: 40px;
left: 126px;
width: 128px;
height: 20px;
pointer-events: auto;
}

.t-l-c-airOverviewReachStandardsOther .airOverviewReachStandardsOther-t-rank-single-0-6 {
position: absolute !important;
top: 26px;
left: 20px;
width: 373px;
height: 63px;
pointer-events: auto;
}

.t-l-c-airOverviewReachStandardsOther .airOverviewReachStandardsOther-t-rank-single-0-7 {
position: absolute !important;
top: 126px;
left: 21px;
width: 373px;
height: 63px;
pointer-events: auto;
}

.t-l-c-airOverviewReachStandardsOther .airOverviewReachStandardsOther-t-rect-0-8 {
position: absolute !important;
top: 146px;
left: 256px;
width: 1px;
height: 15px;
pointer-events: auto;
}

.t-l-c-airOverviewReachStandardsOther .airOverviewReachStandardsOther-t-rank-single-0-9 {
position: absolute !important;
top: 126px;
left: 21px;
width: 373px;
height: 63px;
pointer-events: auto;
}

.t-l-c-airOverviewReachStandardsOther .airOverviewReachStandardsOther-t-rect-0-19 {
position: absolute !important;
top: 42.99003601074219px;
left: 256.39519634292566px;
width: 1px;
height: 14.999999046325684px;
pointer-events: auto;
}

.t-l-c-airOverviewReachStandardsOther .airOverviewReachStandardsOther-t-rank-single-0-20 {
position: absolute !important;
top: 26px;
left: 20px;
width: 373px;
height: 63px;
pointer-events: auto;
}

.t-l-c-airOverviewReachStandardsOther .airOverviewReachStandardsOther-t-high-light-text-0-22 {
position: absolute !important;
top: 40px;
left: 28px;
width: 47px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airOverviewReachStandardsOther .airOverviewReachStandardsOther-t-text-unit-0-23 {
position: absolute !important;
top: 38.99287414550781px;
left: 266.365884538463px;
width: 128px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airOverviewReachStandardsOther .airOverviewReachStandardsOther-t-text-unit-0-24 {
position: absolute !important;
top: 10.987213134765625px;
left: 15.95604480770852px;
width: auto;
height: 18px;
pointer-events: auto;
}

.t-l-c-airOverviewReachStandardsOther .airOverviewReachStandardsOther-t-text-0-25 {
position: absolute !important;
top: 10.987213134765623px;
left: 308.4228719075521px;
width: 110px;
height: auto;
pointer-events: auto;
}

.t-l-c-airOverviewReachStandardsOther .airOverviewReachStandardsOther-t-text-0-26 {
position: absolute !important;
top: 10.987213134765625px;
left: 308.2156070553713px;
width: 110px;
height: auto;
pointer-events: auto;
}

.t-l-c-airOverviewReachStandardsOther .airOverviewReachStandardsOther-t-high-light-text-0-28 {
position: absolute !important;
top: 143px;
left: 27px;
width: 47px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airOverviewReachStandardsOther .airOverviewReachStandardsOther-t-text-unit-0-29 {
position: absolute !important;
top: 142px;
left: 266px;
width: 128px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airOverviewReachStandardsOther .airOverviewReachStandardsOther-t-text-unit-0-30 {
position: absolute !important;
top: 114px;
left: 14px;
width: auto;
height: 18px;
pointer-events: auto;
}

.t-l-c-airOverviewReachStandardsOther .airOverviewReachStandardsOther-t-text-0-31 {
position: absolute !important;
top: 114px;
left: 309px;
width: 110px;
height: auto;
pointer-events: auto;
}

.t-l-c-airOverviewReachStandardsOther .airOverviewReachStandardsOther-t-high-light-text-0-32 {
position: absolute !important;
top: 32.99003601074219px;
left: 15.912420625023417px;
width: 378.1965393505508px;
height: 57.99715805053711px;
pointer-events: auto;
}

.t-l-c-airOverviewReachStandardsOther .airOverviewReachStandardsOther-t-text-0-33 {
position: absolute !important;
top: 114px;
left: 309px;
width: 110px;
height: auto;
pointer-events: auto;
}

.t-l-c-airOverviewReachStandardsOther .airOverviewReachStandardsOther-t-high-light-text-0-34 {
position: absolute !important;
top: 137px;
left: 17px;
width: 380px;
height: 58px;
pointer-events: auto;
}
</style>
