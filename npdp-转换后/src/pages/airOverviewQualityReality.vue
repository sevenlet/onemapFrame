<template>
  <div id="t-l-c-airOverviewQualityReality" class="t-l-c-airOverviewQualityReality" ><t-text v-if="state.aqiData.length === 0" id="t-text-1c9f.cb6439f2" class="airOverviewQualityReality-t-text-0-0"  :label="tTextx0x0ComputedData.label" :editable="tTextx0x0ComputedData.editable" :c-style="tTextx0x0ComputedData.cStyle"></t-text><t-rect id="t-rect-f5ec.5fff9ddd2" class="airOverviewQualityReality-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-text v-if="state.pollutorData.length === 0" id="t-text-5cf6.5a7aeb3de" class="airOverviewQualityReality-t-text-0-2"  :label="replaceCssVariables(filterData(state.noDataText, componentPropBindingMap?.['t-text-5cf6.5a7aeb3de']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle"></t-text><t-text-unit id="t-text-unit-4dc3.8792ffa4b" class="airOverviewQualityReality-t-text-unit-0-3"  :c-style="tTextUnitx0x3ComputedData.cStyle" :justify="tTextUnitx0x3ComputedData.justify" :align="tTextUnitx0x3ComputedData.align" :content="replaceCssVariables(filterData(state.airQualityData.RELATIVE_HUMIDITY, componentPropBindingMap?.['t-text-unit-4dc3.8792ffa4b']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x3ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x3ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-7cf3.24dbc08bf" class="airOverviewQualityReality-t-text-unit-0-4"  :c-style="tTextUnitx0x4ComputedData.cStyle" :justify="tTextUnitx0x4ComputedData.justify" :align="tTextUnitx0x4ComputedData.align" :content="replaceCssVariables(filterData(state.airQualityData.WEATHER_DESC, componentPropBindingMap?.['t-text-unit-7cf3.24dbc08bf']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x4ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x4ComputedData.showOverflowTooltip"></t-text-unit><t-text id="t-text-3bc5.19684269a" class="airOverviewQualityReality-t-text-0-5"  :label="replaceCssVariables(filterData(state.airQualityData.WINDSPEED_DESC, componentPropBindingMap?.['t-text-3bc5.19684269a']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle"></t-text><t-text id="t-text-7a44.e68c1e6de" class="airOverviewQualityReality-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle"></t-text><t-text id="t-text-dbad.c943fd2e5" class="airOverviewQualityReality-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle"></t-text><t-progress-base v-if="state.airQualityData.AQILEVEL === '优'" id="t-progress-base-9ef2.751a32e9a" class="airOverviewQualityReality-t-progress-base-0-8"  :data="replaceCssVariables(filterData(state.processData, componentPropBindingMap?.['t-progress-base-9ef2.751a32e9a']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tProgressBasex0x8ComputedData.cStyle"></t-progress-base><t-text-unit v-if="state.airQualityData.newDateTip !== false" id="t-text-unit-4f02.a310e288d" class="airOverviewQualityReality-t-text-unit-0-9"  :c-style="tTextUnitx0x9ComputedData.cStyle" :justify="tTextUnitx0x9ComputedData.justify" :align="tTextUnitx0x9ComputedData.align" :content="replaceCssVariables(filterData(state.airQualityData.newDateTip, componentPropBindingMap?.['t-text-unit-4f02.a310e288d']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x9ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x9ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit v-if="state.airOverviewContentState.isNewDate === true" id="t-text-unit-a684.a9610d1e1" class="airOverviewQualityReality-t-text-unit-0-10"  :c-style="tTextUnitx0x10ComputedData.cStyle" :justify="tTextUnitx0x10ComputedData.justify" :align="tTextUnitx0x10ComputedData.align" :content="replaceCssVariables(filterData(state.airQualityData.NAME, componentPropBindingMap?.['t-text-unit-a684.a9610d1e1']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x10ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x10ComputedData.showOverflowTooltip"></t-text-unit><t-list-card id="t-list-card-651d.8e103bc3" class="airOverviewQualityReality-t-list-card-0-11"  :data="replaceCssVariables(filterData(state.pollutorData, componentPropBindingMap?.['t-list-card-651d.8e103bc3']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x11ComputedData.spacingX" :col="tListCardx0x11ComputedData.col" :direction="tListCardx0x11ComputedData.direction" :exchange-order="tListCardx0x11ComputedData.exchangeOrder" :unit-break="tListCardx0x11ComputedData.unitBreak" :key-field="tListCardx0x11ComputedData.keyField" :active-key-field="tListCardx0x11ComputedData.activeKeyField" :active="replaceCssVariables(filterData(state.pollutor, componentPropBindingMap?.['t-list-card-651d.8e103bc3']['active'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tListCardx0x11ComputedData.cStyle" @card-click="oncardClick1734503169539"></t-list-card><t-rect id="t-rect-4684.7f0990b27" class="airOverviewQualityReality-t-rect-0-12"  :tip="tRectx0x12ComputedData.tip" :label="tRectx0x12ComputedData.label" :active="tRectx0x12ComputedData.active" :c-style="tRectx0x12ComputedData.cStyle"></t-rect><t-list-card id="t-list-card-1ec5.9b575daa" class="airOverviewQualityReality-t-list-card-0-13"  :data="replaceCssVariables(filterData(state.aqiData, componentPropBindingMap?.['t-list-card-1ec5.9b575daa']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x13ComputedData.spacingX" :col="tListCardx0x13ComputedData.col" :direction="tListCardx0x13ComputedData.direction" :exchange-order="tListCardx0x13ComputedData.exchangeOrder" :unit-break="tListCardx0x13ComputedData.unitBreak" :key-field="tListCardx0x13ComputedData.keyField" :active-key-field="tListCardx0x13ComputedData.activeKeyField" :active="tListCardx0x13ComputedData.active" :c-style="tListCardx0x13ComputedData.cStyle"></t-list-card><t-progress-base v-if="state.airQualityData.AQILEVEL === '良'" id="t-progress-base-0bfb.d6896cd3a" class="airOverviewQualityReality-t-progress-base-0-14"  :data="tProgressBasex0x14ComputedData.data" :c-style="tProgressBasex0x14ComputedData.cStyle"></t-progress-base><t-progress-base v-if="state.airQualityData.AQILEVEL === '轻度污染'" id="t-progress-base-2dd9.9af340988" class="airOverviewQualityReality-t-progress-base-0-15"  :data="tProgressBasex0x15ComputedData.data" :c-style="tProgressBasex0x15ComputedData.cStyle"></t-progress-base><t-progress-base v-if="state.airQualityData.AQILEVEL === '重度污染'" id="t-progress-base-8df1.f9353c6b1" class="airOverviewQualityReality-t-progress-base-0-16"  :data="tProgressBasex0x16ComputedData.data" :c-style="tProgressBasex0x16ComputedData.cStyle"></t-progress-base><t-progress-base v-if="state.airQualityData.AQILEVEL === '中度污染'" id="t-progress-base-f962.56f310453" class="airOverviewQualityReality-t-progress-base-0-17"  :data="tProgressBasex0x17ComputedData.data" :c-style="tProgressBasex0x17ComputedData.cStyle"></t-progress-base><t-progress-base v-if="state.airQualityData.AQILEVEL === '严重污染'" id="t-progress-base-2f90.277a5c58c" class="airOverviewQualityReality-t-progress-base-0-18"  :data="tProgressBasex0x18ComputedData.data" :c-style="tProgressBasex0x18ComputedData.cStyle"></t-progress-base><t-text id="t-text-2a64.b79e268de" class="airOverviewQualityReality-t-text-0-19"  :label="tTextx0x19ComputedData.label" :editable="tTextx0x19ComputedData.editable" :c-style="tTextx0x19ComputedData.cStyle"></t-text><t-text id="t-text-e0a9.742f0222b" class="airOverviewQualityReality-t-text-0-20"  :label="tTextx0x20ComputedData.label" :editable="tTextx0x20ComputedData.editable" :c-style="tTextx0x20ComputedData.cStyle"></t-text><t-text id="t-text-b0fb.6da9ff88" class="airOverviewQualityReality-t-text-0-21"  :label="replaceCssVariables(filterData(state.airQualityData.PRIMPOLLUTE, componentPropBindingMap?.['t-text-b0fb.6da9ff88']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x21ComputedData.editable" :c-style="tTextx0x21ComputedData.cStyle"></t-text><t-rect v-if="state.isShowO3RectForDay === true" id="t-rect-ae73.68dc6af8c" class="airOverviewQualityReality-t-rect-0-23"  :tip="tRectx0x23ComputedData.tip" :label="tRectx0x23ComputedData.label" :active="tRectx0x23ComputedData.active" :c-style="tRectx0x23ComputedData.cStyle"></t-rect></div>
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
import { TListCard, TProgressBase, TRect, TText, TTextUnit } from '@ths/design';

export default {
  components: {
    TListCard,
    TProgressBase,
    TRect,
    TText,
    TTextUnit,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-text-1c9f.cb6439f2":{"attributeName":"tTextx0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-f5ec.5fff9ddd2":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-5cf6.5a7aeb3de":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-4dc3.8792ffa4b":{"attributeName":"tTextUnitx0x3","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-7cf3.24dbc08bf":{"attributeName":"tTextUnitx0x4","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-3bc5.19684269a":{"attributeName":"tTextx0x5","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-7a44.e68c1e6de":{"attributeName":"tTextx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-dbad.c943fd2e5":{"attributeName":"tTextx0x7","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-progress-base-9ef2.751a32e9a":{"attributeName":"tProgressBasex0x8","data":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-4f02.a310e288d":{"attributeName":"tTextUnitx0x9","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-a684.a9610d1e1":{"attributeName":"tTextUnitx0x10","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-list-card-651d.8e103bc3":{"attributeName":"tListCardx0x11","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-4684.7f0990b27":{"attributeName":"tRectx0x12","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-1ec5.9b575daa":{"attributeName":"tListCardx0x13","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-progress-base-0bfb.d6896cd3a":{"attributeName":"tProgressBasex0x14","data":{"filters":[]},"cStyle":{"filters":[]}},"t-progress-base-2dd9.9af340988":{"attributeName":"tProgressBasex0x15","data":{"filters":[]},"cStyle":{"filters":[]}},"t-progress-base-8df1.f9353c6b1":{"attributeName":"tProgressBasex0x16","data":{"filters":[]},"cStyle":{"filters":[]}},"t-progress-base-f962.56f310453":{"attributeName":"tProgressBasex0x17","data":{"filters":[]},"cStyle":{"filters":[]}},"t-progress-base-2f90.277a5c58c":{"attributeName":"tProgressBasex0x18","data":{"filters":[]},"cStyle":{"filters":[]}},"t-text-2a64.b79e268de":{"attributeName":"tTextx0x19","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-e0a9.742f0222b":{"attributeName":"tTextx0x20","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-b0fb.6da9ff88":{"attributeName":"tTextx0x21","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-da2e.811ebd27a":{"attributeName":"tRectx0x22"},"t-rect-ae73.68dc6af8c":{"attributeName":"tRectx0x23","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   pointCode: "",
   pointType: "",
   isShowO3RectForDay: false,
   isShowO3RectForHour: false,
   noDataText: "暂无数据",
   dialogParams: {},
   aqiData: [],
   processData: {"barValue":""},
   currentTime: "",
   pollutorData: [],
   airQualityData: {"AQI":"--","AQIColor":"--","WINDSPEED_DESC":"--","WEATHER_DESC":"--","RELATIVE_HUMIDITY":"--","PRIMPOLLUTE":"--","AQILEVEL":"--","O3Hour":"","NAME":"--","newDateTip":false},
   airOverviewContentState: {"timeValue":"","isNewDate":true,"timeType":""},
   pollutor: "--",
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
tTextx0x0: {
defaultStyle: {
            default: {"width":"96px","height":"19px","color":"var(--business-white)","position":"unset","left":"49px","top":"16px","fontSize":"var(--business-text-size-16)"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"19px","color":"var(--business-white)","position":"unset","left":"49px","top":"16px","fontSize":"var(--business-text-size-16)"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"410px","height":"38px","position":"unset","left":"0px","top":"224px","backgroundColor":"var(--business-show-bg10)","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"38px","position":"unset","left":"0px","top":"224px","backgroundColor":"var(--business-show-bg10)","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none "}},"unit":{"default":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"96px","height":"19px","color":"var(--business-white)","position":"unset","left":"175px","top":"127px","fontSize":"var(--business-text-size-14)"},
            
            },
 default: { 
 
label:"暂无数据",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"19px","color":"var(--business-white)","position":"unset","left":"175px","top":"127px","fontSize":"var(--business-text-size-14)"}}}, 
 },
},
tTextUnitx0x3: {
defaultStyle: {
            default: {"width":"65px","height":"38px","position":"unset","left":"221px","top":"224px","fontSize":"var(--business-text-size-14)","color":"var(--business-white)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"65px","height":"38px","position":"unset","left":"221px","top":"224px","fontSize":"var(--business-text-size-14)","color":"var(--business-white)","animationName":""}},"unit":{"default":{"fontSize":"14px","color":"var(--t-white)"}}},
justify:"flex-start",
align:"center",
content:"--",
unit:"",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x4: {
defaultStyle: {
            default: {"width":"65px","height":"38px","position":"unset","left":"93px","top":"224px","fontSize":"var(--business-text-size-14)","color":"var(--business-white)","display":"flex","flexDirection":"row","alignItems":"flex-end","justifyContent":"flex-end"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"65px","height":"38px","position":"unset","left":"93px","top":"224px","fontSize":"var(--business-text-size-14)","color":"var(--business-white)","display":"flex","flexDirection":"row","alignItems":"flex-end","justifyContent":"flex-end"}},"unit":{"default":{"fontSize":"14px","color":"var(--t-white)"}}},
justify:"flex-start",
align:"center",
content:"--",
unit:"",
showOverflowTooltip:true, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"91px","height":"38px","color":"var(--business-white)","position":"unset","left":"305px","top":"224px","fontSize":"var(--business-text-size-14)","animationName":"","display":"flex","flexDirection":"row","alignItems":"center"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"91px","height":"38px","color":"var(--business-white)","position":"unset","left":"305px","top":"224px","fontSize":"var(--business-text-size-14)","animationName":"","display":"flex","flexDirection":"row","alignItems":"center"}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"45px","height":"38px","color":"var(--business-text-avianize)","position":"unset","left":"172px","top":"224px","fontSize":"var(--business-text-size-14)","animationName":"","display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"flex-end"},
            
            },
 default: { 
 
label:"湿度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"45px","height":"38px","color":"var(--business-text-avianize)","position":"unset","left":"172px","top":"224px","fontSize":"var(--business-text-size-14)","animationName":"","display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"flex-end"}}}, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"45px","height":"38px","color":"var(--business-text-avianize)","position":"unset","left":"42px","top":"224px","fontSize":"var(--business-text-size-14)","display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"flex-end"},
            
            },
 default: { 
 
label:"温度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"45px","height":"38px","color":"var(--business-text-avianize)","position":"unset","left":"42px","top":"224px","fontSize":"var(--business-text-size-14)","display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"flex-end"}}}, 
 },
},
tProgressBasex0x8: {
defaultStyle: {
            default: {"width":"397px","height":"21px","position":"unset","left":"5px","top":"45px","backgroundColor":"rgba(63, 78, 144, 0)","borderLeft":"1px none rgba(23,62,228,0)","borderTop":"1px none rgba(23,62,228,0)","borderRight":"1px none rgba(23,62,228,0)","borderBottom":"1px none rgba(23,62,228,0)","fontWeight":"400","animationName":""},
            
            },
 default: { 
 
data:{"barValue":""},
cStyle:{"wrapper":{"default":{"width":"397px","height":"21px","position":"unset","left":"5px","top":"45px","backgroundColor":"rgba(63, 78, 144, 0)","borderLeft":"1px none rgba(23,62,228,0)","borderTop":"1px none rgba(23,62,228,0)","borderRight":"1px none rgba(23,62,228,0)","borderBottom":"1px none rgba(23,62,228,0)","fontWeight":"400","animationName":""}},"item":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"transparent","borderColor":"transparent"}},"modify1":{"default":{"maskImage":"assets/images/2022-12-09/7a1b5ad3faba491b82454a610f40523c.svg","backgroundColor":"","display":"none"}},"modify2":{"default":{"maskImage":"assets/images/2022-12-09/8cf71fa058d74d96be3ed3e7ca44eadf.svg","backgroundColor":"#4F9EFE","display":"none"}},"currentValue":{"default":{"backgroundColor":"rgba(61, 90, 215, 1)","fontSize":"18px"}},"barInner":{"default":{"backgroundColor":"rgba(255, 0, 0, 0)","backgroundImage":"url(assets/images/2024-12-06/0fd65ce3d97f4815ad30fb62257ccf2d.png)","-webkit-mask-image":"","backgroundRepeat":"repeat-x","-webkit-mask-repeat":"","backgroundSize":"auto 100%","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"label":{"default":{"color":"#B7E3FF","fontSize":"14px","lineHeight":"14px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","fontWeight":"400"}},"targetValue":{"default":{"fontSize":"14px","lineHeight":"18px","color":"#00E800","fontWeight":"400","top":"0px","marginTop":"0px","paddingTop":"5px"}},"barOuter":{"default":{"height":"9px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundImage":"url(assets/images/2024-12-06/8b65407dabec4ca4951aaae9126a24e3.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"378px 9px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","backgroundColor":"rgba(191, 115, 115, 0)","marginLeft":"0px"}}}, 
 },
},
tTextUnitx0x9: {
defaultStyle: {
            default: {"width":"190px","height":"18px","position":"unset","left":"220px","top":"198px","display":"flex","justifyContent":"flex-start","color":"var(--business-text-avianize)","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"190px","height":"18px","position":"unset","left":"220px","top":"198px","display":"flex","justifyContent":"flex-start","color":"var(--business-text-avianize)","animationName":""}},"text":{"default":{"fontSize":"var(--business-text-size-12)","color":"var(--t-text-weak)"}},"unit":{"default":{"fontSize":"var(--business-text-size-12)","color":"var(--t-text-weak)"}}},
justify:"flex-end",
align:"flex-end",
content:false,
unit:"",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x10: {
defaultStyle: {
            default: {"width":"210px","height":"18px","position":"unset","left":"0px","top":"198px","display":"flex","justifyContent":"flex-start","color":"var(--business-text-avianize)"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"210px","height":"18px","position":"unset","left":"0px","top":"198px","display":"flex","justifyContent":"flex-start","color":"var(--business-text-avianize)"}},"text":{"default":{"fontSize":"var(--business-text-size-12)","color":"var(--t-text-weak)"}},"unit":{"default":{"fontSize":"var(--business-text-size-12)","color":"var(--t-text-weak)"}}},
justify:"flex-start",
align:"flex-end",
content:"--",
unit:"",
showOverflowTooltip:true, 
 },
},
tListCardx0x11: {
defaultStyle: {
            default: {"width":"415px","height":"116px","position":"unset","left":"-2px","top":"81px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
data:[],
spacingX:6,
col:4,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"label","num":"num","unit":"unit","color":"color","special":"value","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"--",
cStyle:{"wrapper":{"default":{"width":"415px","height":"116px","position":"unset","left":"-2px","top":"81px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"itemWrapper":{"default":{"height":"54px","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center","backgroundColor":"var(--business-show-bg30)","cursor":"pointer","fontSize":"16px"},"active":{"-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","backgroundImage":"var(--air-card-item-active-bg)"}},"num":{"default":{"fontFamily":"DIN-bold","fontSize":"var(--business-num-size-18)"}},"unit":{"default":{"color":"var(--business-text-avianize)","left":"10px","display":"block","marginLeft":"5px","fontSize":"var(--business-text-size-14)"}},"title":{"default":{"color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)","lineHeight":"24px"}},"outerWrapper":{"default":{"width":"137px","height":"54px"}},"numBox":{"default":{"top":"0px","lineHeight":"24px","display":"flex"}}}, 
 },
},
tRectx0x12: {
defaultStyle: {
            default: {"width":"410px","height":"77px","top":"0px","left":"0px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","position":"unset","backgroundColor":"","box-shadow":"","animationName":"","backgroundImage":"var(--business-air-real-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderTopLeftRadius":"10px","borderTopRightRadius":"10px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"77px","top":"0px","left":"0px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","position":"unset","backgroundColor":"","box-shadow":"","animationName":"","backgroundImage":"var(--business-air-real-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderTopLeftRadius":"10px","borderTopRightRadius":"10px"}}}, 
 },
},
tListCardx0x13: {
defaultStyle: {
            default: {"width":"52px","height":"36px","position":"unset","left":"45px","top":"7px","animationName":""},
            
            },
 default: { 
 
data:[],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","selectIcon":"icon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"52px","height":"36px","position":"unset","left":"45px","top":"7px","animationName":""}},"itemWrapper":{"default":{"height":"100%","padding":"0 20px","textAlign":"right","paddingRight":"0px","paddingLeft":"0px","cursor":"auto","backgroundColor":"rgba(112, 41, 221, 0)","fontSize":"16px"},"active":{}},"numBox":{"default":{"justifyContent":"center","alignItems":"center","fontSize":"18px"}},"icon":{"default":{"width":"0px","height":"0px","position":"absolute","top":"0px","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(180deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      "}},"outerWrapper":{"default":{"width":"100%","height":"100%"}},"title":{"default":{"fontSize":"14px","color":"var(--business-white)"}},"num":{"default":{"fontFamily":"DIN-medium","fontSize":"var(--business-num-size-18)","fontWeight":"700","letterSpacing":"2px"},"active":{"fontSize":"16px"}},"unit":{"default":{"color":"var(--business-white)","fontSize":"0px","fontFamily":"微软雅黑","fontWeight":"500"}},"rightContent":{"default":{"paddingLeft":"0px","align-items":"center","backgroundColor":"rgba(228, 106, 85, 0)","paddingRight":"0px","fontSize":"18px"}},"cardIcon":{"default":{"backgroundColor":""}},"specialItemWrapper":{"default":{"fontSize":"16px"}}}, 
 },
},
tProgressBasex0x14: {
defaultStyle: {
            default: {"width":"397px","height":"21px","position":"unset","left":"5px","top":"45px","backgroundColor":"rgba(63, 78, 144, 0)","borderLeft":"1px none rgba(23,62,228,0)","borderTop":"1px none rgba(23,62,228,0)","borderRight":"1px none rgba(23,62,228,0)","borderBottom":"1px none rgba(23,62,228,0)","fontWeight":"400","animationName":""},
            
            },
 default: { 
 
data:{"label":"","value":"","targetLabel":"","targetValue":"","barValue":"10","modifyValue1":"30","modifyValue2":"40","desc":""},
cStyle:{"wrapper":{"default":{"width":"397px","height":"21px","position":"unset","left":"5px","top":"45px","backgroundColor":"rgba(63, 78, 144, 0)","borderLeft":"1px none rgba(23,62,228,0)","borderTop":"1px none rgba(23,62,228,0)","borderRight":"1px none rgba(23,62,228,0)","borderBottom":"1px none rgba(23,62,228,0)","fontWeight":"400","animationName":""}},"item":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"transparent","borderColor":"transparent"}},"modify1":{"default":{"maskImage":"assets/images/2022-12-09/7a1b5ad3faba491b82454a610f40523c.svg","backgroundColor":"","display":"none"}},"modify2":{"default":{"maskImage":"assets/images/2022-12-09/8cf71fa058d74d96be3ed3e7ca44eadf.svg","backgroundColor":"#4F9EFE","display":"none"}},"currentValue":{"default":{"backgroundColor":"rgba(61, 90, 215, 1)","fontSize":"18px"}},"barInner":{"default":{"backgroundColor":"rgba(255, 0, 0, 0)","backgroundImage":"url(assets/images/2024-12-06/cf3a460abe10460a89befcd395a7a729.png)","-webkit-mask-image":"","backgroundRepeat":"repeat-x","-webkit-mask-repeat":"","backgroundSize":"auto 100%","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"label":{"default":{"color":"#B7E3FF","fontSize":"14px","lineHeight":"14px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","fontWeight":"400"}},"targetValue":{"default":{"fontSize":"14px","lineHeight":"18px","color":"#00E800","fontWeight":"400","top":"0px","marginTop":"0px","paddingTop":"5px"}},"barOuter":{"default":{"height":"9px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundImage":"url(assets/images/2024-12-06/8b65407dabec4ca4951aaae9126a24e3.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"378px 9px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","backgroundColor":"rgba(191, 115, 115, 0)","marginLeft":"0px"}}}, 
 },
},
tProgressBasex0x15: {
defaultStyle: {
            default: {"width":"397px","height":"21px","position":"unset","left":"5px","top":"45px","backgroundColor":"rgba(63, 78, 144, 0)","borderLeft":"1px none rgba(23,62,228,0)","borderTop":"1px none rgba(23,62,228,0)","borderRight":"1px none rgba(23,62,228,0)","borderBottom":"1px none rgba(23,62,228,0)","fontWeight":"400","animationName":""},
            
            },
 default: { 
 
data:{"label":"","value":"","targetLabel":"","targetValue":"","barValue":"10","modifyValue1":"30","modifyValue2":"40","desc":""},
cStyle:{"wrapper":{"default":{"width":"397px","height":"21px","position":"unset","left":"5px","top":"45px","backgroundColor":"rgba(63, 78, 144, 0)","borderLeft":"1px none rgba(23,62,228,0)","borderTop":"1px none rgba(23,62,228,0)","borderRight":"1px none rgba(23,62,228,0)","borderBottom":"1px none rgba(23,62,228,0)","fontWeight":"400","animationName":""}},"item":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"transparent","borderColor":"transparent"}},"modify1":{"default":{"maskImage":"assets/images/2022-12-09/7a1b5ad3faba491b82454a610f40523c.svg","backgroundColor":"","display":"none"}},"modify2":{"default":{"maskImage":"assets/images/2022-12-09/8cf71fa058d74d96be3ed3e7ca44eadf.svg","backgroundColor":"#4F9EFE","display":"none"}},"currentValue":{"default":{"backgroundColor":"rgba(61, 90, 215, 1)","fontSize":"18px"}},"barInner":{"default":{"backgroundColor":"rgba(255, 0, 0, 0)","backgroundImage":"url(assets/images/2024-12-06/47d1831f46d142c99457ba445ba4182e.png)","-webkit-mask-image":"","backgroundRepeat":"repeat-x","-webkit-mask-repeat":"","backgroundSize":"auto 100%","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"label":{"default":{"color":"#B7E3FF","fontSize":"14px","lineHeight":"14px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","fontWeight":"400"}},"targetValue":{"default":{"fontSize":"14px","lineHeight":"18px","color":"#00E800","fontWeight":"400","top":"0px","marginTop":"0px","paddingTop":"5px"}},"barOuter":{"default":{"height":"9px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundImage":"url(assets/images/2024-12-06/8b65407dabec4ca4951aaae9126a24e3.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"378px 9px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","backgroundColor":"rgba(191, 115, 115, 0)","marginLeft":"0px"}}}, 
 },
},
tProgressBasex0x16: {
defaultStyle: {
            default: {"width":"397px","height":"21px","position":"unset","left":"5px","top":"45px","backgroundColor":"rgba(63, 78, 144, 0)","borderLeft":"1px none rgba(23,62,228,0)","borderTop":"1px none rgba(23,62,228,0)","borderRight":"1px none rgba(23,62,228,0)","borderBottom":"1px none rgba(23,62,228,0)","fontWeight":"400","animationName":""},
            
            },
 default: { 
 
data:{"label":"","value":"","targetLabel":"","targetValue":"","barValue":"10","modifyValue1":"30","modifyValue2":"40","desc":""},
cStyle:{"wrapper":{"default":{"width":"397px","height":"21px","position":"unset","left":"5px","top":"45px","backgroundColor":"rgba(63, 78, 144, 0)","borderLeft":"1px none rgba(23,62,228,0)","borderTop":"1px none rgba(23,62,228,0)","borderRight":"1px none rgba(23,62,228,0)","borderBottom":"1px none rgba(23,62,228,0)","fontWeight":"400","animationName":""}},"item":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"transparent","borderColor":"transparent"}},"modify1":{"default":{"maskImage":"assets/images/2022-12-09/7a1b5ad3faba491b82454a610f40523c.svg","backgroundColor":"","display":"none"}},"modify2":{"default":{"maskImage":"assets/images/2022-12-09/8cf71fa058d74d96be3ed3e7ca44eadf.svg","backgroundColor":"#4F9EFE","display":"none"}},"currentValue":{"default":{"backgroundColor":"rgba(61, 90, 215, 1)","fontSize":"18px"}},"barInner":{"default":{"backgroundColor":"rgba(255, 0, 0, 0)","backgroundImage":"url(assets/images/2024-12-06/e14f4ea9bfb84a4da2a72381bf4bda4a.png)","-webkit-mask-image":"","backgroundRepeat":"repeat-x","-webkit-mask-repeat":"","backgroundSize":"auto 100%","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"label":{"default":{"color":"#B7E3FF","fontSize":"14px","lineHeight":"14px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","fontWeight":"400"}},"targetValue":{"default":{"fontSize":"14px","lineHeight":"18px","color":"#00E800","fontWeight":"400","top":"0px","marginTop":"0px","paddingTop":"5px"}},"barOuter":{"default":{"height":"9px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundImage":"url(assets/images/2024-12-06/8b65407dabec4ca4951aaae9126a24e3.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"378px 9px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","backgroundColor":"rgba(191, 115, 115, 0)","marginLeft":"0px"}}}, 
 },
},
tProgressBasex0x17: {
defaultStyle: {
            default: {"width":"397px","height":"21px","position":"unset","left":"5px","top":"45px","backgroundColor":"rgba(63, 78, 144, 0)","borderLeft":"1px none rgba(23,62,228,0)","borderTop":"1px none rgba(23,62,228,0)","borderRight":"1px none rgba(23,62,228,0)","borderBottom":"1px none rgba(23,62,228,0)","fontWeight":"400","animationName":""},
            
            },
 default: { 
 
data:{"label":"","value":"","targetLabel":"","targetValue":"","barValue":"10","modifyValue1":"30","modifyValue2":"40","desc":""},
cStyle:{"wrapper":{"default":{"width":"397px","height":"21px","position":"unset","left":"5px","top":"45px","backgroundColor":"rgba(63, 78, 144, 0)","borderLeft":"1px none rgba(23,62,228,0)","borderTop":"1px none rgba(23,62,228,0)","borderRight":"1px none rgba(23,62,228,0)","borderBottom":"1px none rgba(23,62,228,0)","fontWeight":"400","animationName":""}},"item":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"transparent","borderColor":"transparent"}},"modify1":{"default":{"maskImage":"assets/images/2022-12-09/7a1b5ad3faba491b82454a610f40523c.svg","backgroundColor":"","display":"none"}},"modify2":{"default":{"maskImage":"assets/images/2022-12-09/8cf71fa058d74d96be3ed3e7ca44eadf.svg","backgroundColor":"#4F9EFE","display":"none"}},"currentValue":{"default":{"backgroundColor":"rgba(61, 90, 215, 1)","fontSize":"18px"}},"barInner":{"default":{"backgroundColor":"rgba(255, 0, 0, 0)","backgroundImage":"url(assets/images/2024-12-06/6ede09ad453642d7a4e4e33d4336f65c.png)","-webkit-mask-image":"","backgroundRepeat":"repeat-x","-webkit-mask-repeat":"","backgroundSize":"auto 100%","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"label":{"default":{"color":"#B7E3FF","fontSize":"14px","lineHeight":"14px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","fontWeight":"400"}},"targetValue":{"default":{"fontSize":"14px","lineHeight":"18px","color":"#00E800","fontWeight":"400","top":"0px","marginTop":"0px","paddingTop":"5px"}},"barOuter":{"default":{"height":"9px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundImage":"url(assets/images/2024-12-06/8b65407dabec4ca4951aaae9126a24e3.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"378px 9px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","backgroundColor":"rgba(191, 115, 115, 0)","marginLeft":"0px"}}}, 
 },
},
tProgressBasex0x18: {
defaultStyle: {
            default: {"width":"397px","height":"21px","position":"unset","left":"5px","top":"45px","backgroundColor":"rgba(63, 78, 144, 0)","borderLeft":"1px none rgba(23,62,228,0)","borderTop":"1px none rgba(23,62,228,0)","borderRight":"1px none rgba(23,62,228,0)","borderBottom":"1px none rgba(23,62,228,0)","fontWeight":"400","animationName":""},
            
            },
 default: { 
 
data:{"label":"","value":"","targetLabel":"","targetValue":"","barValue":"10","modifyValue1":"30","modifyValue2":"40","desc":""},
cStyle:{"wrapper":{"default":{"width":"397px","height":"21px","position":"unset","left":"5px","top":"45px","backgroundColor":"rgba(63, 78, 144, 0)","borderLeft":"1px none rgba(23,62,228,0)","borderTop":"1px none rgba(23,62,228,0)","borderRight":"1px none rgba(23,62,228,0)","borderBottom":"1px none rgba(23,62,228,0)","fontWeight":"400","animationName":""}},"item":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"transparent","borderColor":"transparent"}},"modify1":{"default":{"maskImage":"assets/images/2022-12-09/7a1b5ad3faba491b82454a610f40523c.svg","backgroundColor":"","display":"none"}},"modify2":{"default":{"maskImage":"assets/images/2022-12-09/8cf71fa058d74d96be3ed3e7ca44eadf.svg","backgroundColor":"#4F9EFE","display":"none"}},"currentValue":{"default":{"backgroundColor":"rgba(61, 90, 215, 1)","fontSize":"18px"}},"barInner":{"default":{"backgroundColor":"rgba(255, 0, 0, 0)","backgroundImage":"url(assets/images/2024-12-06/61d95ff4481545dfadfb3d1e4b0bb4f6.png)","-webkit-mask-image":"","backgroundRepeat":"repeat-x","-webkit-mask-repeat":"","backgroundSize":"auto 100%","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"label":{"default":{"color":"#B7E3FF","fontSize":"14px","lineHeight":"14px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","fontWeight":"400"}},"targetValue":{"default":{"fontSize":"14px","lineHeight":"18px","color":"#00E800","fontWeight":"400","top":"0px","marginTop":"0px","paddingTop":"5px"}},"barOuter":{"default":{"height":"9px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundImage":"url(assets/images/2024-12-06/8b65407dabec4ca4951aaae9126a24e3.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"378px 9px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","backgroundColor":"rgba(191, 115, 115, 0)","marginLeft":"0px"}}}, 
 },
},
tTextx0x19: {
defaultStyle: {
            default: {"width":"33px","height":"19px","color":"var(--business-white)","position":"unset","left":"18px","top":"19px","fontSize":"var(--business-text-size-14)"},
            
            },
 default: { 
 
label:"AQI",
editable:false,
cStyle:{"wrapper":{"default":{"width":"33px","height":"19px","color":"var(--business-white)","position":"unset","left":"18px","top":"19px","fontSize":"var(--business-text-size-14)"}}}, 
 },
},
tTextx0x20: {
defaultStyle: {
            default: {"width":"132px","height":"19px","color":"var(--business-text-avianize)","position":"unset","left":"186px","top":"17px","fontSize":"var(--business-text-size-14)","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
label:"首要污染物：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"132px","height":"19px","color":"var(--business-text-avianize)","position":"unset","left":"186px","top":"17px","fontSize":"var(--business-text-size-14)","animationName":"","textAlign":"right"}}}, 
 },
},
tTextx0x21: {
defaultStyle: {
            default: {"width":"92px","height":"19px","color":"var(--business-white)","position":"unset","left":"315px","top":"17px","fontSize":"var(--business-text-size-16)"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"92px","height":"19px","color":"var(--business-white)","position":"unset","left":"315px","top":"17px","fontSize":"var(--business-text-size-16)"}}}, 
 },
},
tRectx0x23: {
defaultStyle: {
            default: {"width":"98px","height":"54px","position":"unset","left":"1px","top":"140px","pointerEvents":"none","backgroundColor":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer","borderLeft":"2px solid var(--t-aqi-green)","borderTop":"2px solid var(--t-aqi-green)","borderRight":"2px solid var(--t-aqi-green)","borderBottom":"2px solid var(--t-aqi-green)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"98px","height":"54px","position":"unset","left":"1px","top":"140px","pointerEvents":"none","backgroundColor":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer","borderLeft":"2px solid var(--t-aqi-green)","borderTop":"2px solid var(--t-aqi-green)","borderRight":"2px solid var(--t-aqi-green)","borderBottom":"2px solid var(--t-aqi-green)","animationName":""}}}, 
 },
},
});
const openDialog = () => {
// 如果点击臭氧八小时并且是最新时间显示预测对比图
// if(state.pollutor === 'O3_8' && state.airOverviewContentState.isNewDate) {
//   global.businessDialog.dialogName = 'airOverviewO3CompareComponent'
// } else {
//   global.businessDialog.dialogName = 'airOverviewMajorChangeTrentComponent'
// }
global.businessDialog.dialogName = 'airOverviewMajorChangeTrentComponent'
};
const getProvider = () => {
const rootData = inject('airOverviewContentState');
// watch(() => rootData, () => {
//   state.airOverviewContentState = rootData;
//   if (state.airOverviewContentState.timeValue) {

    
//     // apiRegistry.getQualityRealityData.request();
//     apiRegistry.getO3Hour.request();
//     if (checkTimeCondition() && state.airOverviewContentState.isNewDate) {

//       apiRegistry.getTips.request();
//     } else {
//       state.airQualityData.newDateTip = false;
//     }
//   }
// }, {
//   deep: true,
//   immediate: true,
// })
// 监听行政区变化
watch([() => global.regionaQuery.regionCode, () => rootData], () => {
  state.airOverviewContentState = rootData;
  if (global.regionaQuery.regionCode && state.airOverviewContentState.timeValue) {
    const regionLevelCode = getRegionLevel(global.regionaQuery.regionCode);
switch (regionLevelCode) {
  case 'province':
  case 'city':
    state.pointType = '12';
    break;
  case 'county':
   state.pointType = '13';
    break;
  default:
    break;
}
    state.pointCode = global.regionaQuery.regionCode.slice(0,6)
    apiRegistry.getQualityRealityData.request();
    apiRegistry.getO3Hour.request();
  }
}, {
  deep: true,
  immediate: true,
})

};
const getPollutorColor = (level) => {
let color = ''
switch(level){
  case '1':
    color = '#00E400';
    break;
  case '2':
    color = '#F9D000';
    break;
  case '3':
    color = '#FF7E00';
    break;
  case '4':
    color = '#FF0000';
    break;
  case '5':
    color = '#C500F4';
    break;
  case '6':
    color = '#8C0024';
    break;
  default: 
    color = '#00E400';
    break;
}
return color;
};
const getAQIColor = (level) => {
let color = ''
switch(level){
  case '优':
    color = '#00E400';
    break;
  case '良':
    color = '#F9D000';
    break;
  case '轻度污染':
    color = '#FF7E00';
    break;
  case '中度污染':
    color = '#FF0000';
    break;
  case '重度污染':
    color = '#C500F4';
    break;
  case '严重污染':
    color = '#8C0024';
    break;
  default:
    color = '#00E400';
    break;
}
return color;
};
const setDialogParams = () => {
state.dialogParams = {
  timeValue: state.airOverviewContentState.timeValue,
  timeType: state.airOverviewContentState.timeType,
  pollutor: state.pollutor,
  maxTimeValue: state.airOverviewContentState.maxTimeValue
}
};
const checkTimeCondition = () => {
const timeType = state.airOverviewContentState.timeType;
const timeValue = state.airOverviewContentState.timeValue;

const currentDate = new Date(); // 获取当前时间
const currentHour = currentDate.getHours();

if (timeType === "day") {
  // 获取当前日期的下午1点
  const afternoon1pm = new Date(new Date().setHours(13, 0, 0, 0)).getTime(); // 当前日期的下午1点
  console.log(afternoon1pm);
  // 比较当前时间是否大于等于下午1点
  return currentDate.getTime() >= afternoon1pm;
} else if (timeType === "hour" && timeValue) {
  // timeValue格式为"yyyy-mm-dd HH"
  const [datePart, hourPart] = timeValue.split(" ");
  const [year, month, day] = datePart.split("-");
  // const [hour] = hourPart ? hourPart.split(":") : [];
  console.log(hourPart)

  // 构建 timeValue 的 Date 对象
  const targetDate = new Date(timeValue + ':00').getTime();

  // 判断 timeValue 是否大于等于下午1点
  const afternoon1pm = new Date(year, month - 1, day, 13).getTime(); // 目标日期的下午1点
  console.log(targetDate);
  console.log(afternoon1pm);
  return targetDate >= afternoon1pm;
}

return false;
};
const oncardClick1734503169539 = (item) => {
// 设置变量值
state.pollutor = item.title;
// 执行自定义方法
setDialogParams();
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogParmas',
                    value:state.dialogParams,
                    data: {
                      businessDialog:{dialogParmas: state.dialogParams}
                    },
                  });
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "createDialog", // 消息名称
data: {"params":{"title":"主要污染物变化趋势","maxHeight":"997px","maxWidth":"1600px","minHeight":"716px","minWidth":"1002px","contentComName":"airOverviewMajorChangeTrentComponent"}}, // 发送的数据
});
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getTips: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"f65b1c528aa6771c1fe101095d4c020e"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"f65b1c528aa6771c1fe101095d4c020e"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"f65b1c528aa6771c1fe101095d4c020e"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTips'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200') {
  if(checkTimeCondition() && state.airOverviewContentState.isNewDate) {
    state.airQualityData.newDateTip = `1278-前七小时${replacePollutionCharacter('O3')}=${handleNoVal(data.O3_ONE)}μg/${convertCharacter('m3')}`;
  } else {
    state.airQualityData.newDateTip = false;
  }
} else {
  state.airQualityData.newDateTip = false;
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
 getO3Hour: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"be6166ed6f6f59d7601b16574468fbb5"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"be6166ed6f6f59d7601b16574468fbb5"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"be6166ed6f6f59d7601b16574468fbb5"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getO3Hour'] = res.data;
                
     state.tableData = [];
const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.airQualityData.NAME = handleNoVal(data.NAME) + handleNoVal(data.O3);
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
 getQualityRealityData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_TYPE":"state.pointType","TIME_TYPE":"state.airOverviewContentState.timeType","POINT_CODE":"state.pointCode","MONITORTIME":"state.airOverviewContentState.timeValue","interfaceId":"7a9a70e3709f87f325a2e15a073b4e84"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_TYPE":state.pointType,"TIME_TYPE":state.airOverviewContentState.timeType,"POINT_CODE":state.pointCode,"MONITORTIME":state.airOverviewContentState.timeValue,"interfaceId":"7a9a70e3709f87f325a2e15a073b4e84"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_TYPE":state.pointType,"TIME_TYPE":state.airOverviewContentState.timeType,"POINT_CODE":state.pointCode,"MONITORTIME":state.airOverviewContentState.timeValue,"interfaceId":"7a9a70e3709f87f325a2e15a073b4e84"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getQualityRealityData'] = res.data;
                
     const { head } = res.data;
if (head.statusCode === '200') {
  const data = res.data.data === "" ? [] : res.data.data;
  state.airQualityData.RELATIVE_HUMIDITY = handleNoVal(data.RELATIVE_HUMIDITY);
  state.airQualityData.WEATHER_DESC = handleNoVal(data.WEATHER_DESC);
  state.airQualityData.WINDSPEED_DESC = handleNoVal(data.WINDSPEED_DESC);
  state.airQualityData.PRIMPOLLUTE = handleNoVal(replacePollutionCharacter(data.PRIMPOLLUTE));
  state.airQualityData.AQI = handleNoVal(data.AQI);
  state.airQualityData.AQIColor = getAQIColor(data.AQILEVELSTATE);
  state.airQualityData.AQILEVEL = handleNoVal(data.AQILEVELSTATE);
  state.processData.barValue = Number(data.AQI) / 3;
  state.aqiData = [
    {
      "num": handleNoVal(data.AQI),
      "color": state.airQualityData.AQIColor
    }
  ];

  const subList = convertCharacter('上标')[0].split(' ');
  if(global.airOverview.rightView.timeType === 'hour') {
    state.pollutorData = [
    {
      "label": replacePollutionCharacter('PM2.5'),
      "title": "PM25",
      "num": handleNoVal(data.PM25),
      "unit": "μg/m" + subList[3],
      "color": getPollutorColor(data.PM25_IAQI_INDEX)
    },
    {
      "label": replacePollutionCharacter('PM10'),
      "title": "PM10",
      "num": handleNoVal(data.PM10),
      "unit": "μg/m" + subList[3],
      "color": getPollutorColor(data.PM10_IAQI_INDEX)
    },
    {
      "label": replacePollutionCharacter('SO2'),
      "title": "SO2",
      "num": handleNoVal(data.SO2),
      "unit": "μg/m" + subList[3],
      "color": getPollutorColor(data.SO2_IAQI_INDEX)
    },
    {
      "label": replacePollutionCharacter('NO2'),
      "title": "NO2",
      "num": handleNoVal(data.NO2),
      "unit": "μg/m" + subList[3],
      "color": getPollutorColor(data.NO2_IAQI_INDEX)
    },
    {
      "label": "CO",
      "title": "CO",
      "num": handleNoVal(data.CO),
      "unit": "mg/m" + subList[3],
      "color": getPollutorColor(data.CO_IAQI_INDEX)
    },
    {
      "label": replacePollutionCharacter('O3'),
      "title": "O3",
      "num": handleNoVal(data.O3),
      "unit": "μg/m" + subList[3],
      "color": getPollutorColor(data.O3_IAQI_INDEX)
    }
  ]
  } else if(global.airOverview.rightView.timeType === 'day') {
     state.pollutorData = [
    {
      "label": replacePollutionCharacter('PM2.5'),
      "title": "PM25",
      "num": handleNoVal(data.PM25),
      "unit": "μg/m" + subList[3],
      "color": getPollutorColor(data.PM25_IAQI_INDEX)
    },
    {
      "label": replacePollutionCharacter('PM10'),
      "title": "PM10",
      "num": handleNoVal(data.PM10),
      "unit": "μg/m" + subList[3],
      "color": getPollutorColor(data.PM10_IAQI_INDEX)
    },
    {
      "label": replacePollutionCharacter('SO2'),
      "title": "SO2",
      "num": handleNoVal(data.SO2),
      "unit": "μg/m" + subList[3],
      "color": getPollutorColor(data.SO2_IAQI_INDEX)
    },
    {
      "label": replacePollutionCharacter('NO2'),
      "title": "NO2",
      "num": handleNoVal(data.NO2),
      "unit": "μg/m" + subList[3],
      "color": getPollutorColor(data.NO2_IAQI_INDEX)
    },
    {
      "label": "CO",
      "title": "CO",
      "num": handleNoVal(data.CO),
      "unit": "mg/m" + subList[3],
      "color": getPollutorColor(data.CO_IAQI_INDEX)
    },
    {
      "label": replacePollutionCharacter('O3-8h'),
      "title": "O3_8",
      "num": handleNoVal(data.O3_8),
      "unit": "μg/m" + subList[3],
      "color": getPollutorColor(data.O3_8_IAQI_INDEX)
    }
  ]
  }
  state.isShowO3RectForHour = state.airOverviewContentState.isNewDate && state.pollutorData.length !== 0 && state.airOverviewContentState.timeType === 'hour';
  state.isShowO3RectForDay = state.airOverviewContentState.isNewDate && state.pollutorData.length !== 0 && state.airOverviewContentState.timeType === 'day';
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
                            setPageScale('t-l-c-airOverviewQualityReality', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-airOverviewQualityReality', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
getProvider();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTextx0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0.default, componentState.tTextx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tTextUnitx0x3ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x3.default, componentState.tTextUnitx0x3?.[state.screenSize]));

 const tTextUnitx0x4ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x4.default, componentState.tTextUnitx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tProgressBasex0x8ComputedData = computed(() => _.merge({}, componentState.tProgressBasex0x8.default, componentState.tProgressBasex0x8?.[state.screenSize]));

 const tTextUnitx0x9ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x9.default, componentState.tTextUnitx0x9?.[state.screenSize]));

 const tTextUnitx0x10ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x10.default, componentState.tTextUnitx0x10?.[state.screenSize]));

 const tListCardx0x11ComputedData = computed(() => _.merge({}, componentState.tListCardx0x11.default, componentState.tListCardx0x11?.[state.screenSize]));

 const tRectx0x12ComputedData = computed(() => _.merge({}, componentState.tRectx0x12.default, componentState.tRectx0x12?.[state.screenSize]));

 const tListCardx0x13ComputedData = computed(() => _.merge({}, componentState.tListCardx0x13.default, componentState.tListCardx0x13?.[state.screenSize]));

 const tProgressBasex0x14ComputedData = computed(() => _.merge({}, componentState.tProgressBasex0x14.default, componentState.tProgressBasex0x14?.[state.screenSize]));

 const tProgressBasex0x15ComputedData = computed(() => _.merge({}, componentState.tProgressBasex0x15.default, componentState.tProgressBasex0x15?.[state.screenSize]));

 const tProgressBasex0x16ComputedData = computed(() => _.merge({}, componentState.tProgressBasex0x16.default, componentState.tProgressBasex0x16?.[state.screenSize]));

 const tProgressBasex0x17ComputedData = computed(() => _.merge({}, componentState.tProgressBasex0x17.default, componentState.tProgressBasex0x17?.[state.screenSize]));

 const tProgressBasex0x18ComputedData = computed(() => _.merge({}, componentState.tProgressBasex0x18.default, componentState.tProgressBasex0x18?.[state.screenSize]));

 const tTextx0x19ComputedData = computed(() => _.merge({}, componentState.tTextx0x19.default, componentState.tTextx0x19?.[state.screenSize]));

 const tTextx0x20ComputedData = computed(() => _.merge({}, componentState.tTextx0x20.default, componentState.tTextx0x20?.[state.screenSize]));

 const tTextx0x21ComputedData = computed(() => _.merge({}, componentState.tTextx0x21.default, componentState.tTextx0x21?.[state.screenSize]));

 const tRectx0x23ComputedData = computed(() => _.merge({}, componentState.tRectx0x23.default, componentState.tRectx0x23?.[state.screenSize]));

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
tTextx0x0ComputedData,
tRectx0x1ComputedData,
tTextx0x2ComputedData,
tTextUnitx0x3ComputedData,
tTextUnitx0x4ComputedData,
tTextx0x5ComputedData,
tTextx0x6ComputedData,
tTextx0x7ComputedData,
tProgressBasex0x8ComputedData,
tTextUnitx0x9ComputedData,
tTextUnitx0x10ComputedData,
tListCardx0x11ComputedData,
tRectx0x12ComputedData,
tListCardx0x13ComputedData,
tProgressBasex0x14ComputedData,
tProgressBasex0x15ComputedData,
tProgressBasex0x16ComputedData,
tProgressBasex0x17ComputedData,
tProgressBasex0x18ComputedData,
tTextx0x19ComputedData,
tTextx0x20ComputedData,
tTextx0x21ComputedData,
tRectx0x23ComputedData,
oncardClick1734503169539,
};
},
}
</script>

<style scoped>
.t-l-c-airOverviewQualityReality {
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
height: 285px;
width: 410px;
background-color: rgba(0,0,0,0);
}
.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-text-0-0 {
position: absolute !important;
top: 16px;
left: 49px;
width: 96px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-rect-0-1 {
position: absolute !important;
top: 224px;
left: 0px;
width: 410px;
height: 38px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-text-0-2 {
position: absolute !important;
top: 127px;
left: 175px;
width: 96px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-text-unit-0-3 {
position: absolute !important;
top: 224px;
left: 221px;
width: 65px;
height: 38px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-text-unit-0-4 {
position: absolute !important;
top: 224px;
left: 93px;
width: 65px;
height: 38px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-text-0-5 {
position: absolute !important;
top: 224px;
left: 305px;
width: 91px;
height: 38px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-text-0-6 {
position: absolute !important;
top: 224px;
left: 172px;
width: 45px;
height: 38px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-text-0-7 {
position: absolute !important;
top: 224px;
left: 42px;
width: 45px;
height: 38px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-progress-base-0-8 {
position: absolute !important;
top: 45px;
left: 5px;
width: 397px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-text-unit-0-9 {
position: absolute !important;
top: 198px;
left: 220px;
width: 190px;
height: 18px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-text-unit-0-10 {
position: absolute !important;
top: 198px;
left: 0px;
width: 210px;
height: 18px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-list-card-0-11 {
position: absolute !important;
top: 81px;
left: -2px;
width: 415px;
height: 116px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-rect-0-12 {
position: absolute !important;
top: 0px;
left: 0px;
width: 410px;
height: 77px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-list-card-0-13 {
position: absolute !important;
top: 7px;
left: 45px;
width: 52px;
height: 36px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-progress-base-0-14 {
position: absolute !important;
top: 45px;
left: 5px;
width: 397px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-progress-base-0-15 {
position: absolute !important;
top: 45px;
left: 5px;
width: 397px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-progress-base-0-16 {
position: absolute !important;
top: 45px;
left: 5px;
width: 397px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-progress-base-0-17 {
position: absolute !important;
top: 45px;
left: 5px;
width: 397px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-progress-base-0-18 {
position: absolute !important;
top: 45px;
left: 5px;
width: 397px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-text-0-19 {
position: absolute !important;
top: 19px;
left: 18px;
width: 33px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-text-0-20 {
position: absolute !important;
top: 17px;
left: 186px;
width: 132px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-text-0-21 {
position: absolute !important;
top: 17px;
left: 315px;
width: 92px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityReality .airOverviewQualityReality-t-rect-0-23 {
position: absolute !important;
top: 140px;
left: 1px;
width: 98px;
height: 54px;
pointer-events: none;
}
</style>
