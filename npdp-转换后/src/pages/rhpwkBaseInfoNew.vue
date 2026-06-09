<template>
  <div id="t-l-c-rhpwkBaseInfoNew" class="t-l-c-rhpwkBaseInfoNew" ><t-component id="t-component-c019.99b6d840a" class="rhpwkBaseInfoNew-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName" :page-id="tComponentx0x0ComputedData.pageId" :page-code="tComponentx0x0ComputedData.pageCode"></t-component><t-text id="t-text-62b3.48b14905c" class="rhpwkBaseInfoNew-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle"></t-text><t-row id="t-row-bed0.5ca83a488" class="rhpwkBaseInfoNew-t-row-0-2"  :c-style="tRowx0x2ComputedData.cStyle" :gutter="tRowx0x2ComputedData.gutter" :justify="tRowx0x2ComputedData.justify" :align="tRowx0x2ComputedData.align"><t-text id="t-text-5ebb.3d96a9ff9" class="rhpwkBaseInfoNew-t-text-0-2-0"  :label="replaceCssVariables(filterData(state.lastTime, componentPropBindingMap?.['t-text-5ebb.3d96a9ff9']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x2x0ComputedData.editable" :c-style="tTextx0x2x0ComputedData.cStyle"></t-text></t-row><t-chart-design v-if="state.isBz === true" id="t-chart-design-550b.1cee2e251" class="rhpwkBaseInfoNew-t-chart-design-0-3"  :empty-img="tChartDesignx0x3ComputedData.emptyImg" :c-style="tChartDesignx0x3ComputedData.cStyle" :options="replaceCssVariables(filterData(state.options, componentPropBindingMap?.['t-chart-design-550b.1cee2e251']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @get-chart-instance="ongetChartInstance1773213293415"></t-chart-design><t-chart-design v-if="state.isBz === false" id="t-chart-design-e893.f97449395" class="rhpwkBaseInfoNew-t-chart-design-0-4"  :empty-img="tChartDesignx0x4ComputedData.emptyImg" :c-style="tChartDesignx0x4ComputedData.cStyle" :options="replaceCssVariables(filterData(state.variationTrendData.chartOptions, componentPropBindingMap?.['t-chart-design-e893.f97449395']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-chart-design><t-list-card id="t-list-card-d9ab.2e21fb3b5" class="rhpwkBaseInfoNew-t-list-card-0-5"  :data="replaceCssVariables(filterData(state.baseInfoData, componentPropBindingMap?.['t-list-card-d9ab.2e21fb3b5']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x5ComputedData.spacingX" :col="tListCardx0x5ComputedData.col" :direction="tListCardx0x5ComputedData.direction" :exchange-order="tListCardx0x5ComputedData.exchangeOrder" :unit-break="tListCardx0x5ComputedData.unitBreak" :key-field="tListCardx0x5ComputedData.keyField" :active-key-field="tListCardx0x5ComputedData.activeKeyField" :active="tListCardx0x5ComputedData.active" :c-style="tListCardx0x5ComputedData.cStyle"></t-list-card><t-component id="t-component-f16c.f5ce6f3e4" class="rhpwkBaseInfoNew-t-component-0-6"  :name="tComponentx0x6ComputedData.name" :c-style="tComponentx0x6ComputedData.cStyle" :src="tComponentx0x6ComputedData.src" :component-name="tComponentx0x6ComputedData.componentName" :page-id="tComponentx0x6ComputedData.pageId" :page-code="tComponentx0x6ComputedData.pageCode"></t-component><t-text id="t-text-5462.3c52d0b74" class="rhpwkBaseInfoNew-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle"></t-text><t-row id="t-row-5a45.4881a1b1d" class="rhpwkBaseInfoNew-t-row-0-8"  :c-style="tRowx0x8ComputedData.cStyle" :gutter="tRowx0x8ComputedData.gutter" :justify="tRowx0x8ComputedData.justify" :align="tRowx0x8ComputedData.align"><t-text id="t-text-4f1d.746164d9" class="rhpwkBaseInfoNew-t-text-0-8-0"  :label="tTextx0x8x0ComputedData.label" :editable="tTextx0x8x0ComputedData.editable" :c-style="tTextx0x8x0ComputedData.cStyle"></t-text><t-switch id="t-switch-0bb1.da694cc2c" class="rhpwkBaseInfoNew-t-switch-0-8-1"  :value="tSwitchx0x8x1ComputedData.value" :c-style="tSwitchx0x8x1ComputedData.cStyle" @change="onchange1773038099030"></t-switch></t-row><t-row id="t-row-b875.aab51406a" class="rhpwkBaseInfoNew-t-row-0-9"  :c-style="tRowx0x9ComputedData.cStyle" :gutter="tRowx0x9ComputedData.gutter" :justify="tRowx0x9ComputedData.justify" :align="tRowx0x9ComputedData.align"><t-date-picker id="t-date-picker-063c.a710ecfa2" class="rhpwkBaseInfoNew-t-date-picker-0-9-0"  :placeholder="tDatePickerx0x9x0ComputedData.placeholder" :start-placeholder="tDatePickerx0x9x0ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x9x0ComputedData.endPlaceholder" :type="tDatePickerx0x9x0ComputedData.type" :clearable="tDatePickerx0x9x0ComputedData.clearable" :range-separator="tDatePickerx0x9x0ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeRange, componentPropBindingMap?.['t-date-picker-063c.a710ecfa2']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x9x0ComputedData.separator" :readonly="tDatePickerx0x9x0ComputedData.readonly" :editable="tDatePickerx0x9x0ComputedData.editable" :c-style="tDatePickerx0x9x0ComputedData.cStyle" @date-change="ondateChange1773037457377"></t-date-picker><t-select id="t-select-dad2.c08d5e7c" class="rhpwkBaseInfoNew-t-select-0-9-1"  :active-value="replaceCssVariables(filterData(state.variationTrendData.activeTarget, componentPropBindingMap?.['t-select-dad2.c08d5e7c']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.categoryList, componentPropBindingMap?.['t-select-dad2.c08d5e7c']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x9x1ComputedData.alias" :multiple="tSelectx0x9x1ComputedData.multiple" :placeholder="tSelectx0x9x1ComputedData.placeholder" :clearable="tSelectx0x9x1ComputedData.clearable" :disabled="tSelectx0x9x1ComputedData.disabled" :name="tSelectx0x9x1ComputedData.name" :autocomplete="tSelectx0x9x1ComputedData.autocomplete" :filterable="tSelectx0x9x1ComputedData.filterable" :no-match-text="tSelectx0x9x1ComputedData.no-match-text" :no-data-text="tSelectx0x9x1ComputedData.no-data-text" :c-style="tSelectx0x9x1ComputedData.cStyle" @change="onchange1773037657710"></t-select></t-row><t-row id="t-row-22e1.718027e73" class="rhpwkBaseInfoNew-t-row-0-10"  :c-style="tRowx0x10ComputedData.cStyle" :gutter="tRowx0x10ComputedData.gutter" :justify="tRowx0x10ComputedData.justify" :align="tRowx0x10ComputedData.align"></t-row><t-text id="t-text-a053.4425f8b8a" class="rhpwkBaseInfoNew-t-text-0-11"  :label="tTextx0x11ComputedData.label" :editable="tTextx0x11ComputedData.editable" :c-style="tTextx0x11ComputedData.cStyle"></t-text></div>
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
import { TChartDesign, TComponent, TDatePicker, TListCard, TRow, TSelect, TSwitch, TText } from '@ths/design';

export default {
  components: {
    TChartDesign,
    TComponent,
    TDatePicker,
    TListCard,
    TRow,
    TSelect,
    TSwitch,
    TText,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-c019.99b6d840a":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-62b3.48b14905c":{"attributeName":"tTextx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-bed0.5ca83a488":{"attributeName":"tRowx0x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-5ebb.3d96a9ff9":{"attributeName":"tTextx0x2x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-design-550b.1cee2e251":{"attributeName":"tChartDesignx0x3","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-chart-design-e893.f97449395":{"attributeName":"tChartDesignx0x4","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-list-card-d9ab.2e21fb3b5":{"attributeName":"tListCardx0x5","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-f16c.f5ce6f3e4":{"attributeName":"tComponentx0x6","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-5462.3c52d0b74":{"attributeName":"tTextx0x7","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-5a45.4881a1b1d":{"attributeName":"tRowx0x8","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-4f1d.746164d9":{"attributeName":"tTextx0x8x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-switch-0bb1.da694cc2c":{"attributeName":"tSwitchx0x8x1","value":{"filters":[]},"cStyle":{"filters":[]}},"t-row-b875.aab51406a":{"attributeName":"tRowx0x9","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-date-picker-063c.a710ecfa2":{"attributeName":"tDatePickerx0x9x0","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-dad2.c08d5e7c":{"attributeName":"tSelectx0x9x1","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-row-22e1.718027e73":{"attributeName":"tRowx0x10","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-6892.136b66dd2":{"attributeName":"tTextx0x10x0"},"t-text-a053.4425f8b8a":{"attributeName":"tTextx0x11","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   currentChartType: "line",
   overPollute: "",
   categoryList: [{"value":"w01018","label":"化学需氧量"},{"value":"W21003","label":"氨氮","unit":"mg/L"},{"value":"w21011","label":"总磷","unit":"mg/L"}],
   options: "",
   myChart: "",
   isBz: true,
   seriesData: [],
   standardSeriesData: [],
   noDataImg: "assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
   dataSourcetype: "",
   variationTrendData: {"chartShow":true,"chartOptions":{"series":[]},"title":"近12个月水质变化趋势","activeTarget":"w21011","activeTargetName":"总磷"},
   monitorData: [{"value":"-","label":"pH"},{"value":"-","label":"DO","unit":"mg/L"},{"value":"-","label":"IMn","unit":"mg/L"},{"value":"-","label":"NH₃-H","unit":"mg/L"},{"value":"-","label":"TP","unit":"mg/L"}],
   assessType: "",
   pointCode: "",
   monitorTime: "",
   timeRange: [],
   endTime: "",
   startTime: "",
   outletId: "",
   lastTime: "2025-09-09",
   baseInfoData: [{"title":"入河排污口名称","num":"-"},{"title":"地市名称","num":"-"},{"title":"区县名称","num":"-"},{"title":"乡镇名称","num":"-"},{"title":"经度","num":"-"},{"title":"经度","num":"-"},{"title":"排污口类型","num":"-"},{"title":"所属水系","num":"-"}],
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
            default: {"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"34px","top":"4px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"基本信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"34px","top":"4px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"}}}, 
 },
},
tRowx0x2: {
defaultStyle: {
            default: {"width":"100%","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"0px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"0px","position":"unset"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextx0x2x0: {
defaultStyle: {
            default: {"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"44px","top":"14px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"2025-09-09",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"44px","top":"14px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"}}}, 
 },
},
tChartDesignx0x3: {
defaultStyle: {
            default: {"height":"calc(100% - 270px)","width":"100%","position":"unset","left":"0px","top":"270px","animationName":""},
            
            },
 default: { 
 
emptyImg:"assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
cStyle:{"wrapper":{"default":{"height":"calc(100% - 270px)","width":"100%","position":"unset","left":"0px","top":"270px","animationName":""}},"emptyText":{"default":{"fontSize":"var(--text-size-14)","color":"var(--business-white)"}},"emptyImg":{"default":{"display":"none"}}},
options:"", 
 },
},
tChartDesignx0x4: {
defaultStyle: {
            default: {"height":"calc(100% - 270px)","width":"100%","position":"unset","left":"0px","top":"270px","animationName":""},
            
            },
 default: { 
 
emptyImg:"assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
cStyle:{"wrapper":{"default":{"height":"calc(100% - 270px)","width":"100%","position":"unset","left":"0px","top":"270px","animationName":""}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"emptyImg":{"default":{"overflow":"hidden","display":"none"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"series":[]})), 
 },
},
tListCardx0x5: {
defaultStyle: {
            default: {"width":"100%","height":"95px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"入河排污口名称","num":"-"},{"title":"地市名称","num":"-"},{"title":"区县名称","num":"-"},{"title":"乡镇名称","num":"-"},{"title":"经度","num":"-"},{"title":"经度","num":"-"},{"title":"排污口类型","num":"-"},{"title":"所属水系","num":"-"}],
spacingX:2,
col:2,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"100%","height":"95px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible","display":"block"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--base-label-bg-color)","width":"30%","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--base-label-title-color)","fontSize":"var(--business-text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","height":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"numBox":{"default":{"backgroundColor":"var(--info-background)","width":"69.5%","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px","height":""}},"num":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--base-label-text-color)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"var(--text-size-14)"}}}, 
 },
},
tComponentx0x6: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"183px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"183px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"34px","top":"187px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"水质监测信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"34px","top":"187px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"}}}, 
 },
},
tRowx0x8: {
defaultStyle: {
            default: {"width":"100%","height":"30px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"1px","top":"266px","pointerEvents":"none","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"30px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"1px","top":"266px","pointerEvents":"none","animationName":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextx0x8x0: {
defaultStyle: {
            default: {"width":"auto","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"736px","top":"337px","fontSize":"var(--text-size-14)","lineHeight":"22px","animationName":"","textAlign":"right","marginRight":"8px"},
            
            },
 default: { 
 
label:"标准值",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"736px","top":"337px","fontSize":"var(--text-size-14)","lineHeight":"22px","animationName":"","textAlign":"right","marginRight":"8px"}}}, 
 },
},
tSwitchx0x8x1: {
defaultStyle: {
            default: {"width":"32px","height":"22px","position":"unset","left":"957px","top":"295px","animationName":"","marginRight":"8px !important"},
            
            },
 default: { 
 
value:true,
cStyle:{"wrapper":{"default":{"width":"32px","height":"22px","position":"unset","left":"957px","top":"295px","animationName":"","marginRight":"8px !important"}},"core":{"active":{"backgroundColor":"var(--business-theme)","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
tRowx0x9: {
defaultStyle: {
            default: {"width":"100%","height":"30px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"223px","pointerEvents":"none","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"30px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"223px","pointerEvents":"none","animationName":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tDatePickerx0x9x0: {
defaultStyle: {
            default: {"width":"304px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"304px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tSelectx0x9x1: {
defaultStyle: {
            default: {"width":"120px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:"w21011",
options:[{"value":"w01018","label":"化学需氧量"},{"value":"W21003","label":"氨氮","unit":"mg/L"},{"value":"w21011","label":"总磷","unit":"mg/L"}],
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
tRowx0x10: {
defaultStyle: {
            default: {"width":"824px","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"183px","animationName":"","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"824px","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"183px","animationName":"","position":"unset"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextx0x11: {
defaultStyle: {
            default: {"width":"240px","height":"32px","color":"var(--business-white)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"222px","left":"0px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"污染物浓度变化趋势",
editable:false,
cStyle:{"wrapper":{"default":{"width":"240px","height":"32px","color":"var(--business-white)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"222px","left":"0px","position":"unset","animationName":""}},"cardValue":{"default":{"fontSize":"var(--text-size-14)"}}}, 
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
async function getData(){
// 水质
if (state.variationTrendData.activeTarget === 'waterLevelChange') {
  state.variationTrendData.title = '水质变化趋势';
} else {
  // 其他污染物
  state.variationTrendData.title = '污染物浓度变化趋势';
  // 污染物接口
  await apiRegistry.getLatestTime.request();
  await apiRegistry.getPollutantVariationTrend.request();
}
}
getData()
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

  
    let chartOption = {};
    const toolbox = {
      show: true,
      top: 5,
      right: 130,
      iconStyle: { color: 'var(--skin-font-color)' },
      feature: {
        magicType: {
          type: ["line", "bar"],
          title: { line: "转为折线图", bar: "转为柱状图" },
        }
      }
    };
    if (state.variationTrendData.activeTarget === 'w01001') {
      // ph 的图表配置
      chartOption = {
        "dataZoom": [
          {
            "type": "slider",
            "height": 10,
            xAxisIndex: [0, 1, 2], // 控制所有三个x轴
            textStyle: {
              color: 'var(--skin-font-color)'
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
          bottom: '100px'
        },
        color: ['#00FFFF', '#FFF200', '#FF8400', '#43D156', '#EE70FF'],
        legend: {
          show: false,
          icon: 'rect',
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: 'var(--skin-font-color)',
            fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14
          },
          data: ['污染物浓度']
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
            color: 'var(--skin-font-color-80)',
            fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14,
            rotate: 45
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: 'var(--skin-font-color-40)'
            }
          },
          axisTick: {
            show: true,
            lineStyle: {
              color: 'var(--skin-font-color-40)'
            }
          },
          nameTextStyle: {
            color: 'var(--skin-font-color-60)',
            fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: 'var(--skin-font-color-80)',
            fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14
          },
          axisLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: 'var(--skin-font-color-40)'
            }
          },
          name: '',
          nameTextStyle: {
            color: 'var(--skin-font-color-60)',
            align: 'right',
            padding: [0, 0, 10, -24],
            fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: 'var(--skin-font-color-20)'
            }
          }
        },
        series: []
      }
    } else {
      // 其他污染物
      chartOption = {
        "dataZoom": [
          {
            "type": "slider",
            "height": 10,
            xAxisIndex: [0, 1, 2], // 控制所有三个x轴
            textStyle: {
              color: 'var(--skin-font-color)'
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
          bottom: '100px'
        },
        color: ['#00FFFF', '#FFF200', '#FF8400', '#43D156', '#EE70FF'],
        legend: {
          show: false,
          icon: 'rect',
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: 'var(--skin-font-color)',
            fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14
          },
          data: ['污染物浓度']
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
            color: 'var(--skin-font-color-80)',
            fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14,
            rotate: 45
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: 'var(--skin-font-color-40)'
            }
          },
          axisTick: {
            show: true,
            lineStyle: {
              color: 'var(--skin-font-color-40)'
            }
          },
          nameTextStyle: {
            color: 'var(--skin-font-color-60)',
            fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: 'var(--skin-font-color-80)',
            fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14
          },
          axisLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: 'var(--skin-font-color-40)'
            }
          },
          name: 'mg/L',
          nameTextStyle: {
            color: 'var(--skin-font-color-60)',
            align: 'right',
            padding: [0, 0, 10, -24],
            fontSize: parseInt(getCssVariable('--business-text-size-14')) || 14
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: 'var(--skin-font-color-20)'
            }
          }
        },
        series: []
      }
    }
    
    return chartOption;
    
  
};
const initPageData = () => {

// 处理参数
state.pointCode = global.businessDialog.dialogParmas.OUTPUTID || '0b203394d22940ae96cdd297c762b0b6';

// const getFormattedYearMonth = () => {
//   const now = new Date();
//   const year = now.getFullYear();
//   // 月份补零，确保是2位数（如1→01，12→12）
//   const month = String(now.getMonth() + 1).padStart(2, '0');
//   return `${year}-${month}`;
// };
// 处理参数
// state.monitorTime = getFormattedYearMonth();
// // 结束时间
// let endTime = dateFormat(new Date(state.monitorTime), 'yyyy-MM');
// // 开始时间
// let startTime = dateFormat(getPrevTime(new Date(state.monitorTime), 'month'), 'yyyy-MM');

// 赋值时间
// changeTime([startTime || '', endTime || ''])

console.log('基本信息弹窗初始化')
async function getData() {
  apiRegistry.getCategoryList.request();
  // 获取基本信息接口
  await apiRegistry.getBaseInfo.request();
  // 获取变化趋势
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
state.myChart = myChart;
myChart.on('magictypechanged', (params) => {
  console.log('切换事件触发了！', params); // 现在能打印了
  const { currentType } = params;
  console.log('type', currentType, state.options);
  if (currentType === 'bar') {
    console.log('用户点击了转为柱状图');
    state.options.series[1] = {};
    setTimeout(() => {
      state.options.series = [
        ...state.seriesData,
        ...state.standardSeriesData
      ];
      state.options.series[0].type = 'bar';
      state.options.series[1].type = 'line';
    }, 0)
    console.log('有标准值的', state.options);
  } else if (currentType === 'line') {
    console.log('用户点击了转为折线图');
    console.log('有标准值的', state.options);
    // 你的折线图切换逻辑
  }
});
};
const setCardStyle = () => {
debugger;
const sheet = new CSSStyleSheet();
sheet.insertRule(`body #t-scrollable-cards-455f.ff3a2c962 .scrollable-cards-body {
width: 100% !important;
}`);

document.adoptedStyleSheets = [sheet];

};
const ondateChange1773037457377 = (data) => {
// 执行自定义方法
changeTime(data);
// 执行自定义方法
handleWaterTarget();
};
const onchange1773037657710 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.variationTrendData.activeTarget = value;
// 执行自定义方法
handleWaterTarget();
};
const onchange1773038099030 = (value) => {
// 设置变量值
state.isBz = value;
// 执行自定义方法
changeStandard();
};
const ongetChartInstance1773213293415 = (chart) => {
// 执行自定义方法
handleCharts(chart);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getPollutantVariationTrend: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"OUTLET_CODE":"","pageNum":"1","pageSize":"1000","MONITORTIME":"","POLLUTE_CODE":"state.variationTrendData.activeTarget","OUTLET_ID":"state.pointCode","END_TIME":"state.endTime","START_TIME":"state.startTime","interfaceId":"62c9ed9ce0d561b1a17d9c13dd5835e3"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"OUTLET_CODE":"","pageNum":"1","pageSize":"1000","MONITORTIME":"","POLLUTE_CODE":state.variationTrendData.activeTarget,"OUTLET_ID":state.pointCode,"END_TIME":state.endTime,"START_TIME":state.startTime,"interfaceId":"62c9ed9ce0d561b1a17d9c13dd5835e3"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"OUTLET_CODE":"","pageNum":"1","pageSize":"1000","MONITORTIME":"","POLLUTE_CODE":state.variationTrendData.activeTarget,"OUTLET_ID":state.pointCode,"END_TIME":state.endTime,"START_TIME":state.startTime,"interfaceId":"62c9ed9ce0d561b1a17d9c13dd5835e3"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPollutantVariationTrend'] = res.data;
                
     console.log(res);
state.seriesData = []
state.standardSeriesData = []
const { data } = res;
if (data.head?.statusCode === '200' && data.data.length) {
  let xAxisData = []; // x轴数据
  let seriesData = []; // 系列数据
  const limitLineData = [];

  // 1. 定义污染物配置（区分pH区间/其他单一限值，统一小写）
  const pollutantConfig = {
    // 其他污染物（单一限值）
    'w01018': { type: 'single', value: 20 },
    'w21003': { type: 'single', value: 1 },
    'w21011': { type: 'single', value: 0.2 }, // 溶解氧限值
    // 兜底配置
    'default': { type: 'single', value: 0 }
  };

  // 2. 统一转小写，避免大小写判断错误（核心修复）
  let activeTarget = (state.variationTrendData.activeTarget || '').toLowerCase();
  const config = pollutantConfig[activeTarget] || pollutantConfig['default'];

  // 3. 处理接口返回数据
  data.data.forEach((item) => {
    const xAxisValue = item.yearmonth;
    // 去重添加x轴数据
    if (!xAxisData.includes(xAxisValue)) {
      xAxisData.push(xAxisValue);
    }

    // 收集限值数据（区分类型）
    if (config.type === 'single') {
      limitLineData.push({
        value: config.value,
        hiddenInTooltip: true,
        wholeTime: xAxisValue,
      });
    }

    // 组合监测点数据（使用outlet_code作为监测点编码）
    const stationCode = item.outlet_code;
    if (!seriesData.find((x) => x.POINT_CODE === stationCode)) {
      seriesData.push({
        POINT_CODE: stationCode,
        name: item.pollute_name || '污染物浓度', // 使用实际污染物名称
        data: data.data
          .filter((x) => x.outlet_code === stationCode)
          .map((dataItem) => {
            // 直接使用pollute_value作为数值
            const polluteValue = dataItem.pollute_value || '';
            return {
              value: [dataItem.yearmonth, polluteValue], // x轴用yearmonth
              // 使用数据中的实际单位，无则用mg/L兜底
              unit: dataItem.pollute_unit || 'mg/L',
              tooltipXAxisLabel: dataItem.yearmonth,
              // 补充更多有用信息
              outletName: dataItem.outlet_name,
              monitorTime: dataItem.monitor_time
            };
          }),
      });
    }
  });

  // 4. 公共样式
  seriesData = seriesData.map((seriesItem) => ({
    ...seriesItem,
    type: 'line',
    barWidth: 12
  }));

  // 5. 处理标准线/限值逻辑（精准匹配类型）
  // 关键修复：先清空所有标准线相关配置，避免残留
  state.standardSeriesData = [];
  state.standardSeriesData.push({
    ...handleStandardSeries('限值', '#FF9B00'),
    data: filterRepeatData(limitLineData, 'wholeTime'),
  });

  // 6. 更新图表配置
  state.variationTrendData.chartOptions = getChartOptions();
  // 关键修复：重置chartOptions的series和markArea相关配置，避免残留
  state.variationTrendData.chartOptions.xAxis.data = xAxisData;
  // 先清空原有series，再重新赋值（核心修复）
  state.variationTrendData.chartOptions.series = [];
  state.variationTrendData.chartOptions.series = [...seriesData, ...state.standardSeriesData];
  state.seriesData = seriesData;

}
changeStandard();
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
 getCategoryList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TREE_CODE":"SEWAGE_OUTFALL_POLLUTE","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TREE_CODE":"SEWAGE_OUTFALL_POLLUTE","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TREE_CODE":"SEWAGE_OUTFALL_POLLUTE","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCategoryList'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.categoryList = data.map(item => ({
    ...item,
    "value": item.DICTIONARYCODE,
    "label": item.DICTIONARYNAME,
    "disabled": false
  }));
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"OUTLET_ID":"state.pointCode","interfaceId":"f2157b2626794f6be9b1826d0b04806a"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"OUTLET_ID":state.pointCode,"interfaceId":"f2157b2626794f6be9b1826d0b04806a"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"OUTLET_ID":state.pointCode,"interfaceId":"f2157b2626794f6be9b1826d0b04806a"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.baseInfoData = [
    {
      "title": "入河排污口名称",
      "num": data.OUTLET_NAME || "-"
    },
    {
      "title": "地市名称",
      "num": data.CITY_NAME || "-"
    },
    {
      "title": "区县名称",
      "num": data.COUNTY_NAME || "-"
    },
    {
      "title": "乡镇名称",
      "num": data.TOWN_NAME || "-"
    },
    {
      "title": "经度",
      "num": data.LONGITUDE || "-"
    },
    {
      "title": "经度",
      "num": data.LATITUDE || "-"
    },
    {
      "title": "排污口类型",
      "num": data.OUTLET_TYPENAME || "-"
    },
    {
      "title": "所属水系",
      "num": data.INTO_WATER || "-"
    }
  ]
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
 getLatestTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POLLUTE_CODE":"state.variationTrendData.activeTarget","OUTLET_ID":"state.pointCode","interfaceId":"f6cd7f849ef79c09452317b232cf732a"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POLLUTE_CODE":state.variationTrendData.activeTarget,"OUTLET_ID":state.pointCode,"interfaceId":"f6cd7f849ef79c09452317b232cf732a"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POLLUTE_CODE":state.variationTrendData.activeTarget,"OUTLET_ID":state.pointCode,"interfaceId":"f6cd7f849ef79c09452317b232cf732a"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.lastTime = data.max_time
  let endTime = dateFormat(new Date(state.lastTime), 'yyyy-MM');
  // 开始时间
  let startTime = dateFormat(getPrevTime(state.lastTime, 'month'), 'yyyy-MM');

  // 赋值时间
  changeTime([startTime || '', endTime || ''])
} else {
  state.lastTime = ''
   changeTime(['',''])
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
watch(() => ["SEWAGE_OUTFALL_POLLUTE"], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getCategoryList', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-rhpwkBaseInfoNew', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPageData();
onMounted(() => {
setPageScale('t-l-c-rhpwkBaseInfoNew', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tRowx0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x2.default, componentState.tRowx0x2?.[state.screenSize]));

 const tTextx0x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x2x0.default, componentState.tTextx0x2x0?.[state.screenSize]));

 const tChartDesignx0x3ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x3.default, componentState.tChartDesignx0x3?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tChartDesignx0x4ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x4.default, componentState.tChartDesignx0x4?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tListCardx0x5ComputedData = computed(() => _.merge({}, componentState.tListCardx0x5.default, componentState.tListCardx0x5?.[state.screenSize]));

 const tComponentx0x6ComputedData = computed(() => _.merge({}, componentState.tComponentx0x6.default, componentState.tComponentx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tRowx0x8ComputedData = computed(() => _.merge({}, componentState.tRowx0x8.default, componentState.tRowx0x8?.[state.screenSize]));

 const tTextx0x8x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x8x0.default, componentState.tTextx0x8x0?.[state.screenSize]));

 const tSwitchx0x8x1ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x8x1.default, componentState.tSwitchx0x8x1?.[state.screenSize]));

 const tRowx0x9ComputedData = computed(() => _.merge({}, componentState.tRowx0x9.default, componentState.tRowx0x9?.[state.screenSize]));

 const tDatePickerx0x9x0ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x9x0.default, componentState.tDatePickerx0x9x0?.[state.screenSize]));

 const tSelectx0x9x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x9x1.default, componentState.tSelectx0x9x1?.[state.screenSize]));

 const tRowx0x10ComputedData = computed(() => _.merge({}, componentState.tRowx0x10.default, componentState.tRowx0x10?.[state.screenSize]));

 const tTextx0x11ComputedData = computed(() => _.merge({}, componentState.tTextx0x11.default, componentState.tTextx0x11?.[state.screenSize]));

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
tTextx0x1ComputedData,
tRowx0x2ComputedData,
tTextx0x2x0ComputedData,
tChartDesignx0x3ComputedData,
tChartDesignx0x4ComputedData,
tListCardx0x5ComputedData,
tComponentx0x6ComputedData,
tTextx0x7ComputedData,
tRowx0x8ComputedData,
tTextx0x8x0ComputedData,
tSwitchx0x8x1ComputedData,
tRowx0x9ComputedData,
tDatePickerx0x9x0ComputedData,
tSelectx0x9x1ComputedData,
tRowx0x10ComputedData,
tTextx0x11ComputedData,
ongetChartInstance1773213293415,
onchange1773038099030,
ondateChange1773037457377,
onchange1773037657710,
};
},
}
</script>

<style scoped>
.t-l-c-rhpwkBaseInfoNew {
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
.t-l-c-rhpwkBaseInfoNew .rhpwkBaseInfoNew-t-component-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 28px;
pointer-events: auto;
}

.t-l-c-rhpwkBaseInfoNew .rhpwkBaseInfoNew-t-text-0-1 {
position: absolute !important;
top: 4px;
left: 34px;
width: 130px;
height: 20px;
pointer-events: auto;
}

.t-l-c-rhpwkBaseInfoNew .rhpwkBaseInfoNew-t-row-0-2 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 28px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
}

.t-l-c-rhpwkBaseInfoNew .rhpwkBaseInfoNew-t-text-0-2-0 {
position: unset;
top: 14px;
left: 44px;
width: 130px;
height: 20px;
pointer-events: auto;
}

.t-l-c-rhpwkBaseInfoNew .rhpwkBaseInfoNew-t-chart-design-0-3 {
position: absolute !important;
top: 270px;
left: 0px;
width: 100%;
height: calc(100% - 270px);
pointer-events: auto;
}

.t-l-c-rhpwkBaseInfoNew .rhpwkBaseInfoNew-t-chart-design-0-4 {
position: absolute !important;
top: 270px;
left: 0px;
width: 100%;
height: calc(100% - 270px);
pointer-events: auto;
}

.t-l-c-rhpwkBaseInfoNew .rhpwkBaseInfoNew-t-list-card-0-5 {
position: absolute !important;
top: 37px;
left: 0px;
width: 100%;
height: 95px;
pointer-events: auto;
}

.t-l-c-rhpwkBaseInfoNew .rhpwkBaseInfoNew-t-component-0-6 {
position: absolute !important;
top: 183px;
left: 0px;
width: 100%;
height: 28px;
pointer-events: auto;
}

.t-l-c-rhpwkBaseInfoNew .rhpwkBaseInfoNew-t-text-0-7 {
position: absolute !important;
top: 187px;
left: 34px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-rhpwkBaseInfoNew .rhpwkBaseInfoNew-t-row-0-8 {
position: absolute !important;
top: 266px;
left: 1px;
width: 100%;
height: 30px;
pointer-events: none;
display: flex;
justify-content: right;
align-items: center;
animation-name: ;
}

.t-l-c-rhpwkBaseInfoNew .rhpwkBaseInfoNew-t-text-0-8-0 {
position: unset;
top: 337px;
left: 736px;
width: auto;
height: 22px;
pointer-events: auto;
}

.t-l-c-rhpwkBaseInfoNew .rhpwkBaseInfoNew-t-switch-0-8-1 {
position: unset;
top: 295px;
left: 957px;
width: 32px;
height: 22px;
pointer-events: auto;
}

.t-l-c-rhpwkBaseInfoNew .rhpwkBaseInfoNew-t-row-0-9 {
position: absolute !important;
top: 223px;
left: 0px;
width: 100%;
height: 30px;
pointer-events: none;
display: flex;
justify-content: right;
align-items: center;
animation-name: ;
}

.t-l-c-rhpwkBaseInfoNew .rhpwkBaseInfoNew-t-date-picker-0-9-0 {
position: unset;
top: 214px;
left: 491px;
width: 304px;
height: 32px;
pointer-events: auto;
}

.t-l-c-rhpwkBaseInfoNew .rhpwkBaseInfoNew-t-select-0-9-1 {
position: unset;
top: 304px;
left: 724px;
width: 120px;
height: 33px;
pointer-events: auto;
}

.t-l-c-rhpwkBaseInfoNew .rhpwkBaseInfoNew-t-row-0-10 {
position: absolute !important;
top: 183px;
left: 0px;
width: 824px;
height: 28px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
animation-name: ;
}

.t-l-c-rhpwkBaseInfoNew .rhpwkBaseInfoNew-t-text-0-11 {
position: absolute !important;
top: 222px;
left: 0px;
width: 240px;
height: 32px;
pointer-events: auto;
}
</style>
