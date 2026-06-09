<template>
  <div id="t-l-c-waterDialogLivestockBaseInfo" class="t-l-c-waterDialogLivestockBaseInfo" ><t-list-card id="t-list-card-0032.f5836da41" class="waterDialogLivestockBaseInfo-t-list-card-0-0"  :data="replaceCssVariables(filterData(state.baseInfoData, componentPropBindingMap?.['t-list-card-0032.f5836da41']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x0ComputedData.spacingX" :col="tListCardx0x0ComputedData.col" :direction="tListCardx0x0ComputedData.direction" :exchange-order="tListCardx0x0ComputedData.exchangeOrder" :unit-break="tListCardx0x0ComputedData.unitBreak" :key-field="tListCardx0x0ComputedData.keyField" :active-key-field="tListCardx0x0ComputedData.activeKeyField" :active="tListCardx0x0ComputedData.active" :c-style="tListCardx0x0ComputedData.cStyle"></t-list-card><t-text id="t-text-6063.4db73323" class="waterDialogLivestockBaseInfo-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle"></t-text><t-row id="t-row-3ae9.949fc1c3b" class="waterDialogLivestockBaseInfo-t-row-0-2"  :c-style="tRowx0x2ComputedData.cStyle" :gutter="tRowx0x2ComputedData.gutter" :justify="tRowx0x2ComputedData.justify" :align="tRowx0x2ComputedData.align"><t-col id="t-col-facf.ef4316657" class="waterDialogLivestockBaseInfo-t-col-0-2-0"  :span="tColx0x2x0ComputedData.span" :offset="tColx0x2x0ComputedData.offset" :push="tColx0x2x0ComputedData.push" :pull="tColx0x2x0ComputedData.pull" :c-style="tColx0x2x0ComputedData.cStyle"><t-text-common id="t-text-common-cc26.c055ed8a" class="waterDialogLivestockBaseInfo-t-text-common-0-2-0-0"  :label="tTextCommonx0x2x0x0ComputedData.label" :editable="tTextCommonx0x2x0x0ComputedData.editable" :c-style="tTextCommonx0x2x0x0ComputedData.cStyle"></t-text-common><t-tabs-base id="t-tabs-base-bb7d.4596104d4" class="waterDialogLivestockBaseInfo-t-tabs-base-0-2-0-1"  :data="replaceCssVariables(filterData(state.dateList, componentPropBindingMap?.['t-tabs-base-bb7d.4596104d4']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :space="tTabsBasex0x2x0x1ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.tabSelect, componentPropBindingMap?.['t-tabs-base-bb7d.4596104d4']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x2x0x1ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x2x0x1ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x2x0x1ComputedData.alias" :c-style="tTabsBasex0x2x0x1ComputedData.cStyle" @tab-click="ontabClick1767581775067_0_0"></t-tabs-base><t-date-picker v-if="state.tabSelect === 'hour'" id="t-date-picker-61ed.bd81974e" class="waterDialogLivestockBaseInfo-t-date-picker-0-2-0-2"  :placeholder="tDatePickerx0x2x0x2ComputedData.placeholder" :start-placeholder="tDatePickerx0x2x0x2ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x2x0x2ComputedData.endPlaceholder" :type="replaceCssVariables(filterData(state.dateType, componentPropBindingMap?.['t-date-picker-61ed.bd81974e']['type'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :clearable="tDatePickerx0x2x0x2ComputedData.clearable" :range-separator="tDatePickerx0x2x0x2ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeRange, componentPropBindingMap?.['t-date-picker-61ed.bd81974e']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x2x0x2ComputedData.separator" :readonly="tDatePickerx0x2x0x2ComputedData.readonly" :editable="tDatePickerx0x2x0x2ComputedData.editable" :c-style="tDatePickerx0x2x0x2ComputedData.cStyle" @date-change="ondateChange1769151528091_0_0"></t-date-picker><t-date-picker v-if="state.tabSelect === 'minutes'" id="t-date-picker-fa39.f1f4b1652" class="waterDialogLivestockBaseInfo-t-date-picker-0-2-0-3"  :placeholder="tDatePickerx0x2x0x3ComputedData.placeholder" :start-placeholder="tDatePickerx0x2x0x3ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x2x0x3ComputedData.endPlaceholder" :type="tDatePickerx0x2x0x3ComputedData.type" :clearable="tDatePickerx0x2x0x3ComputedData.clearable" :range-separator="tDatePickerx0x2x0x3ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeRange, componentPropBindingMap?.['t-date-picker-fa39.f1f4b1652']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x2x0x3ComputedData.separator" :readonly="tDatePickerx0x2x0x3ComputedData.readonly" :editable="tDatePickerx0x2x0x3ComputedData.editable" :c-style="tDatePickerx0x2x0x3ComputedData.cStyle" @date-change="ondateChange1767948867605_0_0"></t-date-picker></t-col><t-col id="t-col-5c12.21387b6cc" class="waterDialogLivestockBaseInfo-t-col-0-2-1"  :span="tColx0x2x1ComputedData.span" :offset="tColx0x2x1ComputedData.offset" :push="tColx0x2x1ComputedData.push" :pull="tColx0x2x1ComputedData.pull" :c-style="tColx0x2x1ComputedData.cStyle"><t-select id="t-select-3fcb.c00f74209" class="waterDialogLivestockBaseInfo-t-select-0-2-1-0"  :active-value="replaceCssVariables(filterData(state.currentPolluteCode, componentPropBindingMap?.['t-select-3fcb.c00f74209']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.polluteList, componentPropBindingMap?.['t-select-3fcb.c00f74209']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x2x1x0ComputedData.alias" :multiple="tSelectx0x2x1x0ComputedData.multiple" :placeholder="tSelectx0x2x1x0ComputedData.placeholder" :clearable="tSelectx0x2x1x0ComputedData.clearable" :disabled="tSelectx0x2x1x0ComputedData.disabled" :name="tSelectx0x2x1x0ComputedData.name" :autocomplete="tSelectx0x2x1x0ComputedData.autocomplete" :filterable="tSelectx0x2x1x0ComputedData.filterable" :no-match-text="tSelectx0x2x1x0ComputedData.no-match-text" :no-data-text="tSelectx0x2x1x0ComputedData.no-data-text" :c-style="tSelectx0x2x1x0ComputedData.cStyle" @change="onchange1733973555614"></t-select></t-col></t-row><t-row id="t-row-bed0.5ca83a488" class="waterDialogLivestockBaseInfo-t-row-0-3"  :c-style="tRowx0x3ComputedData.cStyle" :gutter="tRowx0x3ComputedData.gutter" :justify="tRowx0x3ComputedData.justify" :align="tRowx0x3ComputedData.align"><t-text id="t-text-b39c.b6c03321c" class="waterDialogLivestockBaseInfo-t-text-0-3-0"  :label="replaceCssVariables(filterData(state.lastTime, componentPropBindingMap?.['t-text-b39c.b6c03321c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x3x0ComputedData.editable" :c-style="tTextx0x3x0ComputedData.cStyle"></t-text></t-row><t-chart-line-single v-if="state.showType === 'line'" id="t-chart-line-single-66ab.046d9e183" class="waterDialogLivestockBaseInfo-t-chart-line-single-0-4"  :empty-img="replaceCssVariables(filterData(state.noDataImg, componentPropBindingMap?.['t-chart-line-single-66ab.046d9e183']['emptyImg'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tChartLineSinglex0x4ComputedData.cStyle" :show-item-bg="tChartLineSinglex0x4ComputedData.showItemBg" :options="tChartLineSinglex0x4ComputedData.options" :data="replaceCssVariables(filterData(state.chartList, componentPropBindingMap?.['t-chart-line-single-66ab.046d9e183']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :series-setting="tChartLineSinglex0x4ComputedData.seriesSetting" :line="componentState.tChartLineSinglex0x4.line"></t-chart-line-single><t-text v-if="state.chartList.length !== 0" id="t-text-f8f0.bc97393c" class="waterDialogLivestockBaseInfo-t-text-0-5"  :label="replaceCssVariables(filterData(state.chartUint, componentPropBindingMap?.['t-text-f8f0.bc97393c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle"></t-text><t-component id="t-component-c019.99b6d840a" class="waterDialogLivestockBaseInfo-t-component-0-6"  :name="tComponentx0x6ComputedData.name" :c-style="tComponentx0x6ComputedData.cStyle" :src="tComponentx0x6ComputedData.src" :component-name="tComponentx0x6ComputedData.componentName" :page-id="tComponentx0x6ComputedData.pageId" :page-code="tComponentx0x6ComputedData.pageCode"></t-component><t-text id="t-text-62b3.48b14905c" class="waterDialogLivestockBaseInfo-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle"></t-text></div>
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
import { TChartLineSingle, TCol, TComponent, TDatePicker, TListCard, TRow, TSelect, TTabsBase, TText, TTextCommon } from '@ths/design';

export default {
  components: {
    TChartLineSingle,
    TCol,
    TComponent,
    TDatePicker,
    TListCard,
    TRow,
    TSelect,
    TTabsBase,
    TText,
    TTextCommon,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-list-card-0032.f5836da41":{"attributeName":"tListCardx0x0","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-6063.4db73323":{"attributeName":"tTextx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-3ae9.949fc1c3b":{"attributeName":"tRowx0x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-facf.ef4316657":{"attributeName":"tColx0x2x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-cc26.c055ed8a":{"attributeName":"tTextCommonx0x2x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-bb7d.4596104d4":{"attributeName":"tTabsBasex0x2x0x1","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-61ed.bd81974e":{"attributeName":"tDatePickerx0x2x0x2","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-fa39.f1f4b1652":{"attributeName":"tDatePickerx0x2x0x3","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-5c12.21387b6cc":{"attributeName":"tColx0x2x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-select-3fcb.c00f74209":{"attributeName":"tSelectx0x2x1x0","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-row-bed0.5ca83a488":{"attributeName":"tRowx0x3","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-b39c.b6c03321c":{"attributeName":"tTextx0x3x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-line-single-66ab.046d9e183":{"attributeName":"tChartLineSinglex0x4","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"showItemBg":{"filters":[]},"options":{"filters":[]},"data":{"filters":[]},"seriesSetting":{"filters":[]}},"t-text-f8f0.bc97393c":{"attributeName":"tTextx0x5","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-component-c019.99b6d840a":{"attributeName":"tComponentx0x6","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-62b3.48b14905c":{"attributeName":"tTextx0x7","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   id: "",
   companyName: "",
   intercept: "",
   chartUint: "浓度（mg/L）",
   lastTime: "",
   currentPolluteCode: "",
   isShowchartUnit: true,
   chartList: [],
   standEnterId: "",
   tableColumns: [{"label":"序号","key":"index","align":"center","operationList":[],"stateList":[],"width":"66PX","showOverflowTooltip":true,"style":{"fontStyle":{"fontSize":"14PX"}}},{"label":"监测时间","key":"moniterTime","stateKey":"waterQualityTargetValue","align":"center","type":"default","operationList":[],"style":{"fontStyle":{"width":"40PX","height":"PX"}}},{"label":"COD（mg/L）","key":"pollute","stateKey":"","align":"center","type":"default","operationList":[],"width":"355px","style":{"fontStyle":{"fontSize":"12PX","width":"PX","height":"PX","borderRadius":"PX","background":""}}}],
   showType: "line",
   currentPointCode: "",
   dateType: "datetimerangehour",
   pointList: [],
   polluteList: [{"label":"总磷","value":"W21011","disabled":false},{"label":"流量","value":"W00000","disabled":false}],
   options: "",
   myChart: "",
   isBz: false,
   seriesData: [],
   standardSeriesData: [],
   noDataImg: "assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
   dataSourcetype: "",
   variationTrendData: {"title":"近12个月水质变化趋势","activeTarget":"","chartOptions":{"series":[]},"chartShow":true},
   monitorData: [{"value":"-","label":"总磷","unit":"mg/L","code":"W21011","style":{"cardIconStyle":{"background":"#00DA2A"},"labelIconStyle":{}}},{"value":"-","label":"氨氮","unit":"mg/L","code":"W21003","style":{"cardIconStyle":{"background":"#00DA2A"},"labelIconStyle":{}}},{"value":"-","label":"化学需氧量","unit":"mg/L","code":"W01018","style":{"cardIconStyle":{"background":"#00DA2A"},"labelIconStyle":{}}},{"value":"-","label":"pH值","code":"W01001","style":{"cardIconStyle":{"background":"#00DA2A"},"labelIconStyle":{}}},{"value":"-","label":"流量","unit":"m³/s","code":"W00000","style":{"cardIconStyle":{"background":"#00DA2A"},"labelIconStyle":{}}}],
   baseInfoData: [{"title":"所属区县","num":"-"},{"title":"所属乡镇","num":"-"},{"title":"所属流域","num":"-"},{"title":"公司地址","num":"-"},{"title":"法人代表","num":"-"},{"title":"法人电话","num":"-"},{"title":"经度","num":"-"},{"title":"纬度","num":"-"},{"title":"养殖类型","num":"-"},{"title":"养殖量","num":"-"}],
   assessType: "",
   pointCode: "",
   monitorTime: "",
   timeRange: [],
   endTime: "",
   startTime: "",
   tabsActiveValue: "monthly",
   tabSelect: "hour",
   dateList: [{"label":"分钟","value":"minutes"},{"label":"小时","value":"hour"}],
   listData: [],
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
            default: {"width":"100%","height":"174px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"所属区县","num":"-"},{"title":"所属乡镇","num":"-"},{"title":"所属流域","num":"-"},{"title":"公司地址","num":"-"},{"title":"法人代表","num":"-"},{"title":"法人电话","num":"-"},{"title":"经度","num":"-"},{"title":"纬度","num":"-"},{"title":"养殖类型","num":"-"},{"title":"养殖量","num":"-"}],
spacingX:2,
col:2,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"100%","height":"174px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--base-label-bg-color)","width":"120px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--base-label-title-color)","fontSize":"var(--business-text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"numBox":{"default":{"backgroundColor":"var(--info-background)","width":"289px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--base-label-text-color)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"240px","height":"32px","color":"rgba(255, 255, 255, 1)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"284px","left":"990px","position":"unset","textAlign":"left","marginLeft":"15px"},
            
            },
 default: { 
 
label:"污染物变化趋势",
editable:false,
cStyle:{"wrapper":{"default":{"width":"240px","height":"32px","color":"rgba(255, 255, 255, 1)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"284px","left":"990px","position":"unset","textAlign":"left","marginLeft":"15px"}},"cardValue":{"default":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tRowx0x2: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"0px","top":"230px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"0px","top":"230px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x2x0: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"space-between","alignItems":"center","gap":"auto"},
            
            },
 default: { 
 
span:20,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"space-between","alignItems":"center","gap":"auto"}},"emptyText":{"default":{"position":"absolute"}}}, 
 },
},
tTextCommonx0x2x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-124px","top":"159px","background":"unset","backgroundClip":"unset","marginLeft":"0px","marginRight":"10px"},
            
            },
 default: { 
 
label:"污染物浓度变化趋势",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-124px","top":"159px","background":"unset","backgroundClip":"unset","marginLeft":"0px","marginRight":"10px"}}}, 
 },
},
tTabsBasex0x2x0x1: {
defaultStyle: {
            default: {"width":"155px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"234px","top":"-142px","marginRight":"15px"},
            
            },
 default: { 
 
data:[{"label":"分钟","value":"minutes"},{"label":"小时","value":"hour"}],
space:1,
selectedTabVal:"hour",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":false},
cStyle:{"wrapper":{"default":{"width":"155px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"234px","top":"-142px","marginRight":"15px"}},"itemWrapper":{"default":{"width":"80px","height":"32px","fontSize":"14px","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px"}},"label":{"default":{"fontSize":"var(--text-size-14)","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","fontSize":"var(--text-size-14)"},"hover":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tDatePickerx0x2x0x2: {
defaultStyle: {
            default: {"width":"380px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerangehour",
clearable:true,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"380px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important","lineHeight":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-white) !important","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}}, 
 },
},
tDatePickerx0x2x0x3: {
defaultStyle: {
            default: {"width":"380px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerangeminute",
clearable:true,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"380px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important","lineHeight":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-white) !important","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}}, 
 },
},
tColx0x2x1: {
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
tSelectx0x2x1x0: {
defaultStyle: {
            default: {"width":"120px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},
            
            },
 default: { 
 
activeValue:"",
options:[{"label":"总磷","value":"W21011","disabled":false},{"label":"流量","value":"W00000","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tRowx0x3: {
defaultStyle: {
            default: {"width":"100%","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"185px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"185px","position":"unset"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextx0x3x0: {
defaultStyle: {
            default: {"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"124.5px","left":"645px","textAlign":"right","fontSize":"var(--text-size-14)","position":"unset","marginRight":"50px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"124.5px","left":"645px","textAlign":"right","fontSize":"var(--text-size-14)","position":"unset","marginRight":"50px"}}}, 
 },
},
tChartLineSinglex0x4: {
defaultStyle: {
            default: {"width":"824px","height":"266px","position":"unset","left":"0px","top":"316px"},
            
            },
line: computed(() => activeChartTheme.value?.line),
 default: { 
 
emptyImg:"assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
cStyle:{"wrapper":{"default":{"width":"824px","height":"266px","position":"unset","left":"0px","top":"316px"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","width":"auto","color":"var(--business-white)"}},"emptyImg":{"default":{"display":"none"}}},
showItemBg:false,
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"grid":{"containLabel":true,"left":"1%","bottom":"2%","top":"5%","right":"1%"},"legend":{"show":false},"xAxis":{"axisLine":{"lineStyle":{"type":"solid","color":"var(--skin-font-color-40)"}},"axisLabel":{"color":"var(--skin-font-color-80)"}},"yAxis":{"axisLabel":{"color":"var(--skin-font-color-80)"},"splitLine":{"lineStyle":{"color":"var(--skin-font-color-40)","type":"dashed"}},"axisLine":{"lineStyle":{"width":0}}}})),
data:[],
seriesSetting:{"xAxisLabel":"MONITORTIME","data":[{"name":"浓度","dataKey":"AVGSTRENGTH","style":{"label":{"show":false},"symbolSize":[4,4],"symbol":"none"}}]}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"auto","height":"32px","color":"var(--business-text-avianize)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"279px","left":"-17px","position":"unset","textAlign":"left","marginLeft":"20px","animationName":""},
            
            },
 default: { 
 
label:"浓度（mg/L）",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"32px","color":"var(--business-text-avianize)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"279px","left":"-17px","position":"unset","textAlign":"left","marginLeft":"20px","animationName":""}},"cardValue":{"default":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tComponentx0x6: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"184px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"184px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"auto","height":"28px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"48px","top":"184px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"28px"},
            
            },
 default: { 
 
label:"水质监测信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"28px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"48px","top":"184px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"28px"}}}, 
 },
},
});
const initPageData = () => {
// 处理参数
state.id = global.businessDialog.dialogParmas.id;
state.companyName = global.businessDialog.dialogParmas.companyName;

console.log('基本信息弹窗初始化')

// 获取基本信息接口
apiRegistry.getBaseInfo.request();
};
const setNoDataIcon = () => {
// 设置暂无数据图标
state.noDataImg= getCssVariable('--business-no-data-img');
};
const changeTime = (time) => {
state.timeRange = time || [];
state.startTime = time[0] || '';
state.endTime = time[1] || '';

};
const ontabClick1767581775067_0_0 = (data) => {
// 设置变量值
state.tabSelect = data.value;
// 执行自定义方法
changePointCode();
};
const ondateChange1769151528091_0_0 = (data) => {
// 执行自定义方法
changeTime(data);
};
const ondateChange1767948867605_0_0 = (data) => {
// 执行自定义方法
changeTime(data);
};
const onchange1733973555614 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.currentPolluteCode = value;
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
 getBaseInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"intercept":"state.intercept","companyName":"state.companyName","interfaceId":"151777f6ad728221b84c31b3a0f65633"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"intercept":state.intercept,"companyName":state.companyName,"interfaceId":"151777f6ad728221b84c31b3a0f65633"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"intercept":state.intercept,"companyName":state.companyName,"interfaceId":"151777f6ad728221b84c31b3a0f65633"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     const { data } = res;

// 养殖类型映射
  const typeMap = {
    '1': '猪',
    '2': '牛'
  };

if(data.head.statusCode === '200' && data.data){
  // 所属区县
  state.baseInfoData[0].num = data.data?.county_name || '-';
  // 所属乡镇
  state.baseInfoData[1].num = data.data?.town_name || '-';
  // 所属流域
  state.baseInfoData[2].num = data.data?.water_system_name || '-';
  // 公司地址
  state.baseInfoData[3].num = data.data?.address || '-';
  // 法人代表
  state.baseInfoData[4].num = data.data?.legal_name || '-';
  // 法人电话
  state.baseInfoData[5].num = data.data?.legal_tel || '-';
  // 经度
  state.baseInfoData[6].num = data.data?.longitude || '-';
  // 纬度
  state.baseInfoData[7].num = data.data?.latitude || '-';
  // 养殖类型 1猪2牛
  state.baseInfoData[8].num = typeMap[data.data?.type] || '-';
  // 养殖量
  state.baseInfoData[9].num = data.data?.cunlan ? `${data.data?.cunlan}头` : '-';
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
                            setPageScale('t-l-c-waterDialogLivestockBaseInfo', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setNoDataIcon();
// 执行自定义方法
initPageData();
onMounted(() => {
setPageScale('t-l-c-waterDialogLivestockBaseInfo', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tListCardx0x0ComputedData = computed(() => _.merge({}, componentState.tListCardx0x0.default, componentState.tListCardx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tRowx0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x2.default, componentState.tRowx0x2?.[state.screenSize]));

 const tColx0x2x0ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0.default, componentState.tColx0x2x0?.[state.screenSize]));

 const tTextCommonx0x2x0x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x2x0x0.default, componentState.tTextCommonx0x2x0x0?.[state.screenSize]));

 const tTabsBasex0x2x0x1ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x2x0x1.default, componentState.tTabsBasex0x2x0x1?.[state.screenSize]));

 const tDatePickerx0x2x0x2ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x2x0x2.default, componentState.tDatePickerx0x2x0x2?.[state.screenSize]));

 const tDatePickerx0x2x0x3ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x2x0x3.default, componentState.tDatePickerx0x2x0x3?.[state.screenSize]));

 const tColx0x2x1ComputedData = computed(() => _.merge({}, componentState.tColx0x2x1.default, componentState.tColx0x2x1?.[state.screenSize]));

 const tSelectx0x2x1x0ComputedData = computed(() => _.merge({}, componentState.tSelectx0x2x1x0.default, componentState.tSelectx0x2x1x0?.[state.screenSize]));

 const tRowx0x3ComputedData = computed(() => _.merge({}, componentState.tRowx0x3.default, componentState.tRowx0x3?.[state.screenSize]));

 const tTextx0x3x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x3x0.default, componentState.tTextx0x3x0?.[state.screenSize]));

 const tChartLineSinglex0x4ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartLineSinglex0x4.default, componentState.tChartLineSinglex0x4?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tComponentx0x6ComputedData = computed(() => _.merge({}, componentState.tComponentx0x6.default, componentState.tComponentx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

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
tTextx0x1ComputedData,
tRowx0x2ComputedData,
tColx0x2x0ComputedData,
tTextCommonx0x2x0x0ComputedData,
tTabsBasex0x2x0x1ComputedData,
tDatePickerx0x2x0x2ComputedData,
tDatePickerx0x2x0x3ComputedData,
tColx0x2x1ComputedData,
tSelectx0x2x1x0ComputedData,
tRowx0x3ComputedData,
tTextx0x3x0ComputedData,
tChartLineSinglex0x4ComputedData,
tTextx0x5ComputedData,
tComponentx0x6ComputedData,
tTextx0x7ComputedData,
ontabClick1767581775067_0_0,
ondateChange1769151528091_0_0,
ondateChange1767948867605_0_0,
onchange1733973555614,
};
},
}
</script>

<style scoped>
.t-l-c-waterDialogLivestockBaseInfo {
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
.t-l-c-waterDialogLivestockBaseInfo .waterDialogLivestockBaseInfo-t-list-card-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 174px;
pointer-events: auto;
}

.t-l-c-waterDialogLivestockBaseInfo .waterDialogLivestockBaseInfo-t-text-0-1 {
position: absolute !important;
top: 284px;
left: 990px;
width: 240px;
height: 32px;
pointer-events: auto;
}

.t-l-c-waterDialogLivestockBaseInfo .waterDialogLivestockBaseInfo-t-row-0-2 {
position: absolute !important;
top: 230px;
left: 0px;
width: 100%;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
}

.t-l-c-waterDialogLivestockBaseInfo .waterDialogLivestockBaseInfo-t-col-0-2-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: space-between;
align-items: center;
gap: auto;
}

.t-l-c-waterDialogLivestockBaseInfo .waterDialogLivestockBaseInfo-t-text-common-0-2-0-0 {
position: unset;
top: 159px;
left: -124px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-waterDialogLivestockBaseInfo .waterDialogLivestockBaseInfo-t-tabs-base-0-2-0-1 {
position: unset;
top: -142px;
left: 234px;
width: 155px;
height: 32px;
pointer-events: auto;
}

.t-l-c-waterDialogLivestockBaseInfo .waterDialogLivestockBaseInfo-t-date-picker-0-2-0-2 {
position: unset;
top: 140px;
left: 359px;
width: 380px;
height: 32px;
pointer-events: auto;
}

.t-l-c-waterDialogLivestockBaseInfo .waterDialogLivestockBaseInfo-t-date-picker-0-2-0-3 {
position: unset;
top: 304px;
left: 414px;
width: 380px;
height: 32px;
pointer-events: auto;
}

.t-l-c-waterDialogLivestockBaseInfo .waterDialogLivestockBaseInfo-t-col-0-2-1 {
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

.t-l-c-waterDialogLivestockBaseInfo .waterDialogLivestockBaseInfo-t-select-0-2-1-0 {
position: unset;
top: 208px;
left: 704px;
width: 120px;
height: 32px;
pointer-events: auto;
}

.t-l-c-waterDialogLivestockBaseInfo .waterDialogLivestockBaseInfo-t-row-0-3 {
position: absolute !important;
top: 185px;
left: 0px;
width: 100%;
height: 28px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
}

.t-l-c-waterDialogLivestockBaseInfo .waterDialogLivestockBaseInfo-t-text-0-3-0 {
position: unset;
top: 124.5px;
left: 645px;
width: 164px;
height: 19px;
pointer-events: auto;
}

.t-l-c-waterDialogLivestockBaseInfo .waterDialogLivestockBaseInfo-t-chart-line-single-0-4 {
position: absolute !important;
top: 316px;
left: 0px;
width: 824px;
height: 266px;
pointer-events: auto;
}

.t-l-c-waterDialogLivestockBaseInfo .waterDialogLivestockBaseInfo-t-text-0-5 {
position: absolute !important;
top: 279px;
left: -17px;
width: auto;
height: 32px;
pointer-events: auto;
}

.t-l-c-waterDialogLivestockBaseInfo .waterDialogLivestockBaseInfo-t-component-0-6 {
position: absolute !important;
top: 184px;
left: 0px;
width: 100%;
height: 28px;
pointer-events: auto;
}

.t-l-c-waterDialogLivestockBaseInfo .waterDialogLivestockBaseInfo-t-text-0-7 {
position: absolute !important;
top: 184px;
left: 48px;
width: auto;
height: 28px;
pointer-events: auto;
}
</style>
