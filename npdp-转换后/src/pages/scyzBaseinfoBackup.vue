<template>
  <div id="t-l-c-scyzBaseinfoBackup" class="t-l-c-scyzBaseinfoBackup" ><t-list-card id="t-list-card-0032.f5836da41" class="scyzBaseInformation-t-list-card-0-0"  :data="replaceCssVariables(filterData(state.baseInfoData, componentPropBindingMap?.['t-list-card-0032.f5836da41']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x0ComputedData.spacingX" :col="tListCardx0x0ComputedData.col" :direction="tListCardx0x0ComputedData.direction" :exchange-order="tListCardx0x0ComputedData.exchangeOrder" :unit-break="tListCardx0x0ComputedData.unitBreak" :key-field="tListCardx0x0ComputedData.keyField" :active-key-field="tListCardx0x0ComputedData.activeKeyField" :active="tListCardx0x0ComputedData.active" :c-style="tListCardx0x0ComputedData.cStyle"></t-list-card><t-row id="t-row-3ae9.949fc1c3b" class="scyzBaseInformation-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align"><t-col id="t-col-facf.ef4316657" class="scyzBaseInformation-t-col-0-1-0"  :span="tColx0x1x0ComputedData.span" :offset="tColx0x1x0ComputedData.offset" :push="tColx0x1x0ComputedData.push" :pull="tColx0x1x0ComputedData.pull" :c-style="tColx0x1x0ComputedData.cStyle"><t-text id="t-text-6063.4db73323" class="scyzBaseInformation-t-text-0-1-0-0"  :label="tTextx0x1x0x0ComputedData.label" :editable="tTextx0x1x0x0ComputedData.editable" :c-style="tTextx0x1x0x0ComputedData.cStyle"></t-text><t-tabs-base id="t-tabs-base-bb7d.4596104d4" class="scyzBaseInformation-t-tabs-base-0-1-0-1"  :data="replaceCssVariables(filterData(state.dateList, componentPropBindingMap?.['t-tabs-base-bb7d.4596104d4']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :space="tTabsBasex0x1x0x1ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.tabSelect, componentPropBindingMap?.['t-tabs-base-bb7d.4596104d4']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x1x0x1ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x1x0x1ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x1x0x1ComputedData.alias" :c-style="tTabsBasex0x1x0x1ComputedData.cStyle" @tab-click="ontabClick1767581775067_0_0"></t-tabs-base><t-date-picker v-if="state.tabSelect === 'hour'" id="t-date-picker-61ed.bd81974e" class="scyzBaseInformation-t-date-picker-0-1-0-2"  :placeholder="tDatePickerx0x1x0x2ComputedData.placeholder" :start-placeholder="tDatePickerx0x1x0x2ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x1x0x2ComputedData.endPlaceholder" :type="replaceCssVariables(filterData(state.dateType, componentPropBindingMap?.['t-date-picker-61ed.bd81974e']['type'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :clearable="tDatePickerx0x1x0x2ComputedData.clearable" :range-separator="tDatePickerx0x1x0x2ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeRange, componentPropBindingMap?.['t-date-picker-61ed.bd81974e']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x1x0x2ComputedData.separator" :readonly="tDatePickerx0x1x0x2ComputedData.readonly" :editable="tDatePickerx0x1x0x2ComputedData.editable" :c-style="tDatePickerx0x1x0x2ComputedData.cStyle" @date-change="ondateChange1769151528091_0_0"></t-date-picker><t-date-picker v-if="state.tabSelect === 'minute'" id="t-date-picker-fa39.f1f4b1652" class="scyzBaseInformation-t-date-picker-0-1-0-3"  :placeholder="tDatePickerx0x1x0x3ComputedData.placeholder" :start-placeholder="tDatePickerx0x1x0x3ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x1x0x3ComputedData.endPlaceholder" :type="tDatePickerx0x1x0x3ComputedData.type" :clearable="tDatePickerx0x1x0x3ComputedData.clearable" :range-separator="tDatePickerx0x1x0x3ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeRange, componentPropBindingMap?.['t-date-picker-fa39.f1f4b1652']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x1x0x3ComputedData.separator" :readonly="tDatePickerx0x1x0x3ComputedData.readonly" :editable="tDatePickerx0x1x0x3ComputedData.editable" :c-style="tDatePickerx0x1x0x3ComputedData.cStyle" @date-change="ondateChange1767948867605_0_0"></t-date-picker><t-date-picker v-if="state.tabSelect === 'day'" id="t-date-picker-d90a.f32e32cda" class="scyzBaseInformation-t-date-picker-0-1-0-4"  :placeholder="tDatePickerx0x1x0x4ComputedData.placeholder" :start-placeholder="tDatePickerx0x1x0x4ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x1x0x4ComputedData.endPlaceholder" :type="tDatePickerx0x1x0x4ComputedData.type" :clearable="tDatePickerx0x1x0x4ComputedData.clearable" :range-separator="tDatePickerx0x1x0x4ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeRange, componentPropBindingMap?.['t-date-picker-d90a.f32e32cda']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x1x0x4ComputedData.separator" :readonly="tDatePickerx0x1x0x4ComputedData.readonly" :editable="tDatePickerx0x1x0x4ComputedData.editable" :c-style="tDatePickerx0x1x0x4ComputedData.cStyle" @date-change="ondateChange1767779170144_0_0"></t-date-picker></t-col><t-col id="t-col-5c12.21387b6cc" class="scyzBaseInformation-t-col-0-1-1"  :span="tColx0x1x1ComputedData.span" :offset="tColx0x1x1ComputedData.offset" :push="tColx0x1x1ComputedData.push" :pull="tColx0x1x1ComputedData.pull" :c-style="tColx0x1x1ComputedData.cStyle"><t-select id="t-select-3fcb.c00f74209" class="scyzBaseInformation-t-select-0-1-1-0"  :active-value="replaceCssVariables(filterData(state.currentPolluter, componentPropBindingMap?.['t-select-3fcb.c00f74209']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.polluteList, componentPropBindingMap?.['t-select-3fcb.c00f74209']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x1x1x0ComputedData.alias" :multiple="tSelectx0x1x1x0ComputedData.multiple" :placeholder="tSelectx0x1x1x0ComputedData.placeholder" :clearable="tSelectx0x1x1x0ComputedData.clearable" :disabled="tSelectx0x1x1x0ComputedData.disabled" :name="tSelectx0x1x1x0ComputedData.name" :autocomplete="tSelectx0x1x1x0ComputedData.autocomplete" :filterable="tSelectx0x1x1x0ComputedData.filterable" :no-match-text="tSelectx0x1x1x0ComputedData.no-match-text" :no-data-text="tSelectx0x1x1x0ComputedData.no-data-text" :c-style="tSelectx0x1x1x0ComputedData.cStyle" @change="onchange1733973555614"></t-select></t-col></t-row><t-row id="t-row-bed0.5ca83a488" class="scyzBaseInformation-t-row-0-2"  :c-style="tRowx0x2ComputedData.cStyle" :gutter="tRowx0x2ComputedData.gutter" :justify="tRowx0x2ComputedData.justify" :align="tRowx0x2ComputedData.align"><t-text id="t-text-b39c.b6c03321c" class="scyzBaseInformation-t-text-0-2-0"  :label="tTextx0x2x0ComputedData.label" :editable="tTextx0x2x0ComputedData.editable" :c-style="tTextx0x2x0ComputedData.cStyle"></t-text></t-row><t-chart-line-single id="t-chart-line-single-66ab.046d9e183" class="scyzBaseInformation-t-chart-line-single-0-3"  :empty-img="replaceCssVariables(filterData(state.noDataImg, componentPropBindingMap?.['t-chart-line-single-66ab.046d9e183']['emptyImg'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tChartLineSinglex0x3ComputedData.cStyle" :show-item-bg="tChartLineSinglex0x3ComputedData.showItemBg" :options="tChartLineSinglex0x3ComputedData.options" :data="replaceCssVariables(filterData(state.chartList, componentPropBindingMap?.['t-chart-line-single-66ab.046d9e183']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :series-setting="tChartLineSinglex0x3ComputedData.seriesSetting" :line="componentState.tChartLineSinglex0x3.line"></t-chart-line-single><t-text v-if="state.chartList.length !== 0" id="t-text-f8f0.bc97393c" class="scyzBaseInformation-t-text-0-4"  :label="replaceCssVariables(filterData(state.chartUint, componentPropBindingMap?.['t-text-f8f0.bc97393c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle"></t-text><t-component id="t-component-c019.99b6d840a" class="scyzBaseInformation-t-component-0-5"  :name="tComponentx0x5ComputedData.name" :c-style="tComponentx0x5ComputedData.cStyle" :src="tComponentx0x5ComputedData.src" :component-name="tComponentx0x5ComputedData.componentName" :page-id="tComponentx0x5ComputedData.pageId" :page-code="tComponentx0x5ComputedData.pageCode"></t-component><t-text id="t-text-62b3.48b14905c" class="scyzBaseInformation-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle"></t-text></div>
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
import { TChartLineSingle, TCol, TComponent, TDatePicker, TListCard, TRow, TSelect, TTabsBase, TText } from '@ths/design';

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
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-list-card-0032.f5836da41":{"attributeName":"tListCardx0x0","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-row-3ae9.949fc1c3b":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-facf.ef4316657":{"attributeName":"tColx0x1x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-6063.4db73323":{"attributeName":"tTextx0x1x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-bb7d.4596104d4":{"attributeName":"tTabsBasex0x1x0x1","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-61ed.bd81974e":{"attributeName":"tDatePickerx0x1x0x2","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-fa39.f1f4b1652":{"attributeName":"tDatePickerx0x1x0x3","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-d90a.f32e32cda":{"attributeName":"tDatePickerx0x1x0x4","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-5c12.21387b6cc":{"attributeName":"tColx0x1x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-select-3fcb.c00f74209":{"attributeName":"tSelectx0x1x1x0","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-row-bed0.5ca83a488":{"attributeName":"tRowx0x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-b39c.b6c03321c":{"attributeName":"tTextx0x2x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-line-single-66ab.046d9e183":{"attributeName":"tChartLineSinglex0x3","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"showItemBg":{"filters":[]},"options":{"filters":[]},"data":{"filters":[]},"seriesSetting":{"filters":[]}},"t-text-f8f0.bc97393c":{"attributeName":"tTextx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-component-c019.99b6d840a":{"attributeName":"tComponentx0x5","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-62b3.48b14905c":{"attributeName":"tTextx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   currentPolluter: "",
   interfaceIdMap: {"minute":"3d169bcc5b5689b8f1af6a8921d112ad","hour":"5b5bc7ea00286f5ce06d67bda39ba161","day":"7f3f1c7281fe7c6cda733c3de4dfba76"},
   chartUint: "浓度（mg/L）",
   isShowchartUnit: true,
   chartList: [],
   dateType: "datetimerangehour",
   polluteList: [{"label":"总磷","value":"W21011","disabled":false},{"label":"流量","value":"E01203","disabled":false}],
   options: "",
   noDataImg: "assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
   baseInfoData: [{"title":"所属区县","num":"-"},{"title":"养殖类型","num":"-"},{"title":"经度","num":"-"},{"title":"维度","num":"-"}],
   pointCode: "",
   monitorTime: "",
   timeRange: [],
   endTime: "",
   startTime: "",
   tabSelect: "hour",
   dateList: [{"label":"分钟","value":"minute"},{"label":"小时","value":"hour"},{"label":"日","value":"day"}],
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
            default: {"width":"100%","height":"73px","position":"unset","left":"0px","top":"0px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"所属区县","num":"-"},{"title":"养殖类型","num":"-"},{"title":"经度","num":"-"},{"title":"维度","num":"-"}],
spacingX:2,
col:2,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"100%","height":"73px","position":"unset","left":"0px","top":"0px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"30%","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","height":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"69.5%","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px","height":""}},"num":{"default":{"fontSize":"var(--text-size-14)","color":"rgba(255, 255, 255, 1)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"var(--text-size-14)"}}}, 
 },
},
tRowx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"130px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"130px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x1x0: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"space-between","alignItems":"center","gap":"auto"},
            
            },
 default: { 
 
span:18,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"space-between","alignItems":"center","gap":"auto"}},"emptyText":{"default":{"position":"absolute"}}}, 
 },
},
tTextx0x1x0x0: {
defaultStyle: {
            default: {"width":"240px","height":"32px","color":"rgba(255, 255, 255, 1)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"174px","left":"0px","position":"unset","textAlign":"left","marginLeft":"15px","marginRight":"10px"},
            
            },
 default: { 
 
label:"污染物变化趋势",
editable:false,
cStyle:{"wrapper":{"default":{"width":"240px","height":"32px","color":"rgba(255, 255, 255, 1)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"174px","left":"0px","position":"unset","textAlign":"left","marginLeft":"15px","marginRight":"10px"}},"cardValue":{"default":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tTabsBasex0x1x0x1: {
defaultStyle: {
            default: {"width":"180px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"234px","top":"-142px","marginRight":"15px"},
            
            },
 default: { 
 
data:[{"label":"分钟","value":"minute"},{"label":"小时","value":"hour"},{"label":"日","value":"day"}],
space:1,
selectedTabVal:"hour",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":false},
cStyle:{"wrapper":{"default":{"width":"180px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"234px","top":"-142px","marginRight":"15px"}},"itemWrapper":{"default":{"width":"80px","height":"32px","fontSize":"14px","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px"}},"label":{"default":{"fontSize":"var(--text-size-14)","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","fontSize":"var(--text-size-14)"},"hover":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tDatePickerx0x1x0x2: {
defaultStyle: {
            default: {"width":"380px","height":"32px","position":"unset","left":"424px","top":"314px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"380px","height":"32px","position":"unset","left":"424px","top":"314px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tDatePickerx0x1x0x3: {
defaultStyle: {
            default: {"width":"380px","height":"32px","position":"unset","left":"414px","top":"304px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"380px","height":"32px","position":"unset","left":"414px","top":"304px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tDatePickerx0x1x0x4: {
defaultStyle: {
            default: {"width":"380px","height":"32px","position":"unset","left":"404px","top":"294px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"380px","height":"32px","position":"unset","left":"404px","top":"294px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tColx0x1x1: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"},
            
            },
 default: { 
 
span:6,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tSelectx0x1x1x0: {
defaultStyle: {
            default: {"width":"180px","height":"32px","position":"unset","left":"704px","top":"208px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","marginRight":"15px"},
            
            },
 default: { 
 
activeValue:"",
options:[{"label":"总磷","value":"W21011","disabled":false},{"label":"流量","value":"E01203","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"180px","height":"32px","position":"unset","left":"704px","top":"208px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","marginRight":"15px"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","fontSize":"var(--text-size-14)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"}},"dropdownItemText":{"default":{"fontSize":"var(--text-size-14)"},"active":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tRowx0x2: {
defaultStyle: {
            default: {"width":"100%","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"82px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"82px","position":"unset"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextx0x2x0: {
defaultStyle: {
            default: {"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"124.5px","left":"645px","textAlign":"right","fontSize":"var(--text-size-14)","position":"unset","marginRight":"50px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"124.5px","left":"645px","textAlign":"right","fontSize":"var(--text-size-14)","position":"unset","marginRight":"50px"}}}, 
 },
},
tChartLineSinglex0x3: {
defaultStyle: {
            default: {"width":"100%","height":"calc(100% - 243px)","position":"unset","left":"0px","top":"243px"},
            
            },
line: computed(() => activeChartTheme.value?.line),
 default: { 
 
emptyImg:"assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
cStyle:{"wrapper":{"default":{"width":"100%","height":"calc(100% - 243px)","position":"unset","left":"0px","top":"243px"}},"emptyText":{"default":{"fontSize":"14px","width":"auto","color":"rgba(255, 255, 255, 1)"}}},
showItemBg:false,
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"grid":{"containLabel":true,"left":"1%","bottom":"2%","top":"5%","right":"1%"},"legend":{"show":false},"xAxis":{"axisLine":{"lineStyle":{"type":"dashed"}}}})),
data:[],
seriesSetting:{"xAxisLabel":"MONITORING_TIME","data":[{"name":"浓度","dataKey":"value","style":{"label":{"show":false},"symbolSize":[4,4],"symbol":"none"}}]}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"144px","height":"32px","color":"var(--business-text-avianize)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"209px","left":"-18px","position":"unset","textAlign":"left","marginLeft":"20px","animationName":""},
            
            },
 default: { 
 
label:"浓度（mg/L）",
editable:false,
cStyle:{"wrapper":{"default":{"width":"144px","height":"32px","color":"var(--business-text-avianize)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"209px","left":"-18px","position":"unset","textAlign":"left","marginLeft":"20px","animationName":""}},"cardValue":{"default":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tComponentx0x5: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"82px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"82px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"38px","top":"86px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"水质监测信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"38px","top":"86px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"}}}, 
 },
},
});
const initPageData = () => {
// 处理参数
state.tabSelect = 'minute'
state.currentPolluter = 'W21011'
state.pointCode = global.businessDialog.dialogParmas?.pointCode || '';
// state.pointCode = '350782A0000585'
async function getData (){
  // 获取基本信息
  apiRegistry.getBaseInfo.request();
  await apiRegistry.getLatestTime.request();
  await apiRegistry.getLineData.request(state.interfaceIdMap[state.tabSelect]);
}
getData()
};
const setNoDataIcon = () => {
// 设置暂无数据图标
state.noDataImg= getCssVariable('--business-no-data-img');
};
const changeTime = (time) => {
state.timeRange = time || [];
state.startTime = time[0] || '';
state.endTime = time[1] || '';
apiRegistry.getLineData.request(state.interfaceIdMap[state.tabSelect]);
};
const handleDate = (date) => {
state.endTime = date
if (state.tabSelect === 'minute') {
  let endTime = date + ':00'
  state.startTime = getPrevTime(endTime, 'minute').slice(0, 16)
} else if (state.tabSelect === 'hour') {
  let endTime = date + ':00:00'
  state.startTime = getPrevTime(endTime, 'hour').slice(0, 13)
} else if (state.tabSelect === 'day') {
  let endTime = date + ' 00:00:00'
  state.startTime = getPrevTime(endTime, 'day').slice(0, 10)
}
state.timeRange = [state.startTime, state.endTime]

};
const getChartData = () => {

async function getData(){
  await apiRegistry.getLatestTime.request();
  await apiRegistry.getLineData.request(state.interfaceIdMap[state.tabSelect]);
}
getData()
};
const changePolluter = () => {
if(state.currentPolluter === 'E01203'){
  state.chartUint = '浓度（m³/s）'
}else if(state.currentPolluter === 'W21011'){
  state.chartUint = '浓度（mg/L）'
}
apiRegistry.getLineData.request(state.interfaceIdMap[state.tabSelect]);
};
const ontabClick1767581775067_0_0 = (data) => {
// 设置变量值
state.tabSelect = data.value;
// 执行自定义方法
getChartData();
};
const ondateChange1769151528091_0_0 = (data) => {
// 执行自定义方法
changeTime(data);
};
const ondateChange1767948867605_0_0 = (data) => {
// 执行自定义方法
changeTime(data);
};
const ondateChange1767779170144_0_0 = (data) => {
// 执行自定义方法
changeTime(data);
};
const onchange1733973555614 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.currentPolluter = value;
// 执行自定义方法
changePolluter();
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"STATION_MN":"state.pointCode","interfaceId":"59bee8b16de5a9e1845b05178de9215c"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"STATION_MN":state.pointCode,"interfaceId":"59bee8b16de5a9e1845b05178de9215c"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"STATION_MN":state.pointCode,"interfaceId":"59bee8b16de5a9e1845b05178de9215c"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.baseInfoData = [
    {
      "title": "所属区县",
      "num": data?.REGION_NAME || "-"
    },
    {
      "title": "养殖类型",
      "num": data?.CATEGORY || "-"
    },
    {
      "title": "经度",
      "num": data?.LONGITUDE || "-"
    },
    {
      "title": "纬度",
      "num": data?.LATITUDE || "-"
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
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"DATE_TYPE":"state.tabSelect","STATION_MN":"state.pointCode","interfaceId":"a2925b5ae6e658af5741abc9adb63a02"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DATE_TYPE":state.tabSelect,"STATION_MN":state.pointCode,"interfaceId":"a2925b5ae6e658af5741abc9adb63a02"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"DATE_TYPE":state.tabSelect,"STATION_MN":state.pointCode,"interfaceId":"a2925b5ae6e658af5741abc9adb63a02"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  handleDate(data.MONITORING_TIME);
} else {
  state.startTime = '';
  state.endTime = '';
  state.timeRange = [];
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
 getLineData: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"interfaceId","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"mnLMc9opx9"}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"STATION_MN":"state.pointCode","START_TIME":"state.startTime","END_TIME":"state.endTime","interfaceId":"this.interfaceId"}},
              request: function (interfaceId, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"STATION_MN":state.pointCode,"START_TIME":state.startTime,"END_TIME":state.endTime,"interfaceId":interfaceId},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"STATION_MN":state.pointCode,"START_TIME":state.startTime,"END_TIME":state.endTime,"interfaceId":interfaceId});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLineData'] = res.data;
                
     
const { data, head } = res.data;

if (head?.statusCode === '200' && data.length) {
  state.chartList = data.map(item => {
    return {
      ...item,
      value: item[state.currentPolluter] || ''
    }
  })
} else {
  state.chartList = []
}
console.log(state.chartList)
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
                            setPageScale('t-l-c-scyzBaseinfoBackup', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setNoDataIcon();
// 执行自定义方法
initPageData();
onMounted(() => {
setPageScale('t-l-c-scyzBaseinfoBackup', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tListCardx0x0ComputedData = computed(() => _.merge({}, componentState.tListCardx0x0.default, componentState.tListCardx0x0?.[state.screenSize]));

 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tColx0x1x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x0.default, componentState.tColx0x1x0?.[state.screenSize]));

 const tTextx0x1x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x0x0.default, componentState.tTextx0x1x0x0?.[state.screenSize]));

 const tTabsBasex0x1x0x1ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x1x0x1.default, componentState.tTabsBasex0x1x0x1?.[state.screenSize]));

 const tDatePickerx0x1x0x2ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x1x0x2.default, componentState.tDatePickerx0x1x0x2?.[state.screenSize]));

 const tDatePickerx0x1x0x3ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x1x0x3.default, componentState.tDatePickerx0x1x0x3?.[state.screenSize]));

 const tDatePickerx0x1x0x4ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x1x0x4.default, componentState.tDatePickerx0x1x0x4?.[state.screenSize]));

 const tColx0x1x1ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1.default, componentState.tColx0x1x1?.[state.screenSize]));

 const tSelectx0x1x1x0ComputedData = computed(() => _.merge({}, componentState.tSelectx0x1x1x0.default, componentState.tSelectx0x1x1x0?.[state.screenSize]));

 const tRowx0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x2.default, componentState.tRowx0x2?.[state.screenSize]));

 const tTextx0x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x2x0.default, componentState.tTextx0x2x0?.[state.screenSize]));

 const tChartLineSinglex0x3ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartLineSinglex0x3.default, componentState.tChartLineSinglex0x3?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tComponentx0x5ComputedData = computed(() => _.merge({}, componentState.tComponentx0x5.default, componentState.tComponentx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

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
tRowx0x1ComputedData,
tColx0x1x0ComputedData,
tTextx0x1x0x0ComputedData,
tTabsBasex0x1x0x1ComputedData,
tDatePickerx0x1x0x2ComputedData,
tDatePickerx0x1x0x3ComputedData,
tDatePickerx0x1x0x4ComputedData,
tColx0x1x1ComputedData,
tSelectx0x1x1x0ComputedData,
tRowx0x2ComputedData,
tTextx0x2x0ComputedData,
tChartLineSinglex0x3ComputedData,
tTextx0x4ComputedData,
tComponentx0x5ComputedData,
tTextx0x6ComputedData,
ontabClick1767581775067_0_0,
ondateChange1769151528091_0_0,
ondateChange1767948867605_0_0,
ondateChange1767779170144_0_0,
onchange1733973555614,
};
},
}
</script>

<style scoped>
.t-l-c-scyzBaseinfoBackup {
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
.t-l-c-scyzBaseinfoBackup .scyzBaseInformation-t-list-card-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 73px;
pointer-events: auto;
}

.t-l-c-scyzBaseinfoBackup .scyzBaseInformation-t-row-0-1 {
position: absolute !important;
top: 130px;
left: 0px;
width: 100%;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-scyzBaseinfoBackup .scyzBaseInformation-t-col-0-1-0 {
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

.t-l-c-scyzBaseinfoBackup .scyzBaseInformation-t-text-0-1-0-0 {
position: unset;
top: 174px;
left: 0px;
width: 240px;
height: 32px;
pointer-events: auto;
}

.t-l-c-scyzBaseinfoBackup .scyzBaseInformation-t-tabs-base-0-1-0-1 {
position: unset;
top: -142px;
left: 234px;
width: 180px;
height: 32px;
pointer-events: auto;
}

.t-l-c-scyzBaseinfoBackup .scyzBaseInformation-t-date-picker-0-1-0-2 {
position: unset;
top: 314px;
left: 424px;
width: 380px;
height: 32px;
pointer-events: auto;
}

.t-l-c-scyzBaseinfoBackup .scyzBaseInformation-t-date-picker-0-1-0-3 {
position: unset;
top: 304px;
left: 414px;
width: 380px;
height: 32px;
pointer-events: auto;
}

.t-l-c-scyzBaseinfoBackup .scyzBaseInformation-t-date-picker-0-1-0-4 {
position: unset;
top: 294px;
left: 404px;
width: 380px;
height: 32px;
pointer-events: auto;
}

.t-l-c-scyzBaseinfoBackup .scyzBaseInformation-t-col-0-1-1 {
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

.t-l-c-scyzBaseinfoBackup .scyzBaseInformation-t-select-0-1-1-0 {
position: unset;
top: 208px;
left: 704px;
width: 180px;
height: 32px;
pointer-events: auto;
}

.t-l-c-scyzBaseinfoBackup .scyzBaseInformation-t-row-0-2 {
position: absolute !important;
top: 82px;
left: 0px;
width: 100%;
height: 28px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
}

.t-l-c-scyzBaseinfoBackup .scyzBaseInformation-t-text-0-2-0 {
position: unset;
top: 124.5px;
left: 645px;
width: 164px;
height: 19px;
pointer-events: auto;
}

.t-l-c-scyzBaseinfoBackup .scyzBaseInformation-t-chart-line-single-0-3 {
position: absolute !important;
top: 243px;
left: 0px;
width: 100%;
height: calc(100% - 243px);
pointer-events: auto;
}

.t-l-c-scyzBaseinfoBackup .scyzBaseInformation-t-text-0-4 {
position: absolute !important;
top: 209px;
left: -18px;
width: 144px;
height: 32px;
pointer-events: auto;
}

.t-l-c-scyzBaseinfoBackup .scyzBaseInformation-t-component-0-5 {
position: absolute !important;
top: 82px;
left: 0px;
width: 100%;
height: 28px;
pointer-events: auto;
}

.t-l-c-scyzBaseinfoBackup .scyzBaseInformation-t-text-0-6 {
position: absolute !important;
top: 86px;
left: 38px;
width: 130px;
height: 20px;
pointer-events: auto;
}
</style>
