<template>
  <div id="t-l-c-fogCannonVehicleDialog" class="t-l-c-fogCannonVehicleDialog" ><t-rect id="t-rect-09e8.3b71afa9a" class="fogCannonVehicleDialog-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-list-card id="t-list-card-b17c.d932d9cd7" class="fogCannonVehicleDialog-t-list-card-0-1"  :data="replaceCssVariables(filterData(state.baseInfo, componentPropBindingMap?.['t-list-card-b17c.d932d9cd7']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x1ComputedData.spacingX" :col="tListCardx0x1ComputedData.col" :direction="tListCardx0x1ComputedData.direction" :exchange-order="tListCardx0x1ComputedData.exchangeOrder" :unit-break="tListCardx0x1ComputedData.unitBreak" :key-field="tListCardx0x1ComputedData.keyField" :active-key-field="tListCardx0x1ComputedData.activeKeyField" :active="tListCardx0x1ComputedData.active" :c-style="tListCardx0x1ComputedData.cStyle"></t-list-card><t-pagination-base id="t-pagination-base-4d8e.aa388864b" class="fogCannonVehicleDialog-t-pagination-base-0-2"  :total="replaceCssVariables(filterData(state.pageInfo.total, componentPropBindingMap?.['t-pagination-base-4d8e.aa388864b']['total'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x2ComputedData.small" :page-size="replaceCssVariables(filterData(state.pageInfo.pageSize, componentPropBindingMap?.['t-pagination-base-4d8e.aa388864b']['pageSize'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :pager-count="replaceCssVariables(filterData(state.pageInfo.pages, componentPropBindingMap?.['t-pagination-base-4d8e.aa388864b']['pagerCount'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :current-page="replaceCssVariables(filterData(state.pageInfo.pageNum, componentPropBindingMap?.['t-pagination-base-4d8e.aa388864b']['currentPage'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x2ComputedData.layout" :page-sizes="tPaginationBasex0x2ComputedData.pageSizes" :disabled="tPaginationBasex0x2ComputedData.disabled" :c-style="tPaginationBasex0x2ComputedData.cStyle" @current-change="oncurrentChange1765346765928"></t-pagination-base><t-rect id="t-rect-1555.727b60852" class="fogCannonVehicleDialog-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle"></t-rect><t-rect id="t-rect-afae.576bf09ee" class="fogCannonVehicleDialog-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle"></t-rect><t-rect id="t-rect-26fc.42aa488dd" class="fogCannonVehicleDialog-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle" @click="onclick1734493226123"></t-rect><t-text id="t-text-440f.0fb335f25" class="fogCannonVehicleDialog-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle"></t-text><t-date-picker id="t-date-picker-d724.dcd917e15" class="fogCannonVehicleDialog-t-date-picker-0-7"  :placeholder="tDatePickerx0x7ComputedData.placeholder" :start-placeholder="tDatePickerx0x7ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x7ComputedData.endPlaceholder" :type="tDatePickerx0x7ComputedData.type" :clearable="tDatePickerx0x7ComputedData.clearable" :range-separator="tDatePickerx0x7ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.dateValue, componentPropBindingMap?.['t-date-picker-d724.dcd917e15']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x7ComputedData.separator" :readonly="tDatePickerx0x7ComputedData.readonly" :editable="tDatePickerx0x7ComputedData.editable" :c-style="tDatePickerx0x7ComputedData.cStyle" :is-disabled-front="tDatePickerx0x7ComputedData.isDisabledFront" :disabled-date="tDatePickerx0x7ComputedData.disabledDate" @date-change="ondateChange1765089390224_0_0"></t-date-picker><t-table id="t-table-0633.58a2ac6b5" class="fogCannonVehicleDialog-t-table-0-8"  :height="tTablex0x8ComputedData.height" :stripe="tTablex0x8ComputedData.stripe" :border="tTablex0x8ComputedData.border" :auto-scroll="tTablex0x8ComputedData.autoScroll" :speed="tTablex0x8ComputedData.speed" :columns="tTablex0x8ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-0633.58a2ac6b5']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x8ComputedData.defaultSort" :c-style="tTablex0x8ComputedData.cStyle" @cell-click="oncellClick1765089615221_0_0"></t-table><t-text-common id="t-text-common-bd87.e023a8583" class="fogCannonVehicleDialog-t-text-common-0-9"  :label="tTextCommonx0x9ComputedData.label" :editable="tTextCommonx0x9ComputedData.editable" :c-style="tTextCommonx0x9ComputedData.cStyle"></t-text-common><t-component id="t-component-025a.b13cac218" class="fogCannonVehicleDialog-t-component-0-10"  :name="tComponentx0x10ComputedData.name" :loading="tComponentx0x10ComputedData.loading" :c-style="tComponentx0x10ComputedData.cStyle" :src="tComponentx0x10ComputedData.src" :component-name="tComponentx0x10ComputedData.componentName" :page-id="tComponentx0x10ComputedData.pageId" :page-code="tComponentx0x10ComputedData.pageCode"></t-component><t-text-common id="t-text-common-5573.37d14e5d4" class="fogCannonVehicleDialog-t-text-common-0-11"  :label="tTextCommonx0x11ComputedData.label" :editable="tTextCommonx0x11ComputedData.editable" :c-style="tTextCommonx0x11ComputedData.cStyle"></t-text-common><t-row id="t-row-a9c1.ffb0f3adb" class="fogCannonVehicleDialog-t-row-0-12"  :c-style="tRowx0x12ComputedData.cStyle" :gutter="tRowx0x12ComputedData.gutter" :justify="tRowx0x12ComputedData.justify" :align="tRowx0x12ComputedData.align"><t-text-common id="t-text-common-ebb5.079f4d7f8" class="fogCannonVehicleDialog-t-text-common-0-12-0"  :label="replaceCssVariables(filterData(state.CPH, componentPropBindingMap?.['t-text-common-ebb5.079f4d7f8']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x12x0ComputedData.editable" :c-style="tTextCommonx0x12x0ComputedData.cStyle"></t-text-common><t-rect id="t-rect-5ddd.c09e8a3a4" class="fogCannonVehicleDialog-t-rect-0-12-1"  :tip="tRectx0x12x1ComputedData.tip" :label="tRectx0x12x1ComputedData.label" :active="tRectx0x12x1ComputedData.active" :c-style="tRectx0x12x1ComputedData.cStyle"></t-rect></t-row></div>
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
import { TComponent, TDatePicker, TListCard, TPaginationBase, TRect, TRow, TTable, TText, TTextCommon } from '@ths/design';

export default {
  components: {
    TComponent,
    TDatePicker,
    TListCard,
    TPaginationBase,
    TRect,
    TRow,
    TTable,
    TText,
    TTextCommon,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-09e8.3b71afa9a":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-b17c.d932d9cd7":{"attributeName":"tListCardx0x1","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-pagination-base-4d8e.aa388864b":{"attributeName":"tPaginationBasex0x2","total":{"filters":[]},"small":{"filters":[]},"pageSize":{"filters":[]},"pagerCount":{"filters":[]},"currentPage":{"filters":[]},"layout":{"filters":[]},"pageSizes":{"filters":[]},"disabled":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-1555.727b60852":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-afae.576bf09ee":{"attributeName":"tRectx0x4","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-26fc.42aa488dd":{"attributeName":"tRectx0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-440f.0fb335f25":{"attributeName":"tTextx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-d724.dcd917e15":{"attributeName":"tDatePickerx0x7","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-table-0633.58a2ac6b5":{"attributeName":"tTablex0x8","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-bd87.e023a8583":{"attributeName":"tTextCommonx0x9","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-component-025a.b13cac218":{"attributeName":"tComponentx0x10","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-common-5573.37d14e5d4":{"attributeName":"tTextCommonx0x11","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-a9c1.ffb0f3adb":{"attributeName":"tRowx0x12","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-common-ebb5.079f4d7f8":{"attributeName":"tTextCommonx0x12x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-5ddd.c09e8a3a4":{"attributeName":"tRectx0x12x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   baseInfo: [{"title":"车牌号","num":"-"},{"title":"类型","num":"-"},{"title":"负责人","num":"-"},{"title":"联系方式","num":"-"}],
   CPH: "-",
   listData: [],
   endTime: "",
   startTime: "",
   dateValue: "",
   pageInfo: {"pageNum":1,"pageSize":8,"total":0,"pages":0},
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
            default: {"width":"1000px","height":"712px","position":"unset","left":"351px","top":"194px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"712px","position":"unset","left":"351px","top":"194px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tListCardx0x1: {
defaultStyle: {
            default: {"width":"961px","height":"71px","position":"unset","left":"373px","top":"256px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"车牌号","num":"-"},{"title":"类型","num":"-"},{"title":"负责人","num":"-"},{"title":"联系方式","num":"-"}],
spacingX:2,
col:2,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"961px","height":"71px","position":"unset","left":"373px","top":"256px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"30%","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","height":""}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"69.5%","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px","height":""}},"num":{"default":{"fontSize":"var(--text-size-14)","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"var(--text-size-14)"}}}, 
 },
},
tPaginationBasex0x2: {
defaultStyle: {
            default: {"width":"957px","height":"39px","position":"unset","left":"377px","top":"816px","color":"","animationName":"","display":"flex","justifyContent":"space-between"},
            
            },
 default: { 
 
total:0,
small:false,
pageSize:15,
pagerCount:0,
currentPage:1,
layout:" total,prev, pager, next",
pageSizes:[20,30,40,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"957px","height":"39px","position":"unset","left":"377px","top":"816px","color":"","animationName":"","display":"flex","justifyContent":"space-between"}},"pagerItem":{"default":{"color":"#fff","fontSize":"14px","lineHeight":"32px","borderLeft":"1px solid #366B92","borderTop":"1px solid #366B92","borderRight":"1px solid #366B92","borderBottom":"1px solid #366B92","marginLeft":"0px","marginRight":"5px","backgroundColor":""},"active":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundColor":"rgba(255, 255, 255, 0)","color":"var(--common-white1)","backgroundImage":"linear-gradient(180deg,rgba(50, 169, 255, 0.8) 0%,rgba(61, 126, 255, 0.8) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","color":"var(--common-white1)","backgroundImage":"linear-gradient(180deg,rgba(50, 169, 255, 0.8) 0.6246480855855856%,rgba(61, 126, 255, 0.8) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}},"pager":{"default":{"borderLeft":"1px none var(--theme-btn-default)","borderTop":"1px none var(--theme-btn-default)","borderRight":"1px none var(--theme-btn-default)","borderBottom":"1px none var(--theme-btn-default)","color":"#fff","marginLeft":"0px","marginRight":"0px","backgroundColor":"#1B4293"},"hover":{"color":"var(--common-white1)","borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundImage":"linear-gradient(180deg,rgba(50, 169, 255, 0.8) 0%,rgba(61, 126, 255, 0.8) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}},"more":{"default":{"color":"#C9E7F5"},"hover":{"color":"#366B92","backgroundColor":""}},"total":{"default":{"color":"#C9E7F5","paddingRight":"30px","paddingLeft":"10px"}},"sizesWrapper":{"default":{"color":"","backgroundColor":""}},"sizesInput":{"default":{"color":"var(--common-white08)","borderLeft":"1px solid var(--common-white08)","borderTop":"1px solid var(--common-white08)","borderRight":"1px solid var(--common-white08)","borderBottom":"1px solid var(--common-white08)"},"hover":{"borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"jumpWrapper":{"default":{"color":"var(--common-white08)"}},"jumpInput":{"default":{"color":"var(--common-white08)"},"hover":{"color":"var(--common-white1)","borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"sizesDropdownWrapper":{"default":{"backgroundColor":"var(--theme-dialog-bg)","color":"","borderLeft":"1px solid var(--theme-input-border)","borderTop":"1px solid var(--theme-input-border)","borderRight":"1px solid var(--theme-input-border)","borderBottom":"1px solid var(--theme-input-border)"}},"sizesDropdownItem":{"default":{"color":"var(--common-white08)"},"active":{"backgroundColor":"var(--theme-btn-default)","color":"var(--common-white1)"},"hover":{"color":"var(--common-white1)","backgroundColor":"var(--theme-table-zebra-crossing)"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"1000px","height":"52px","position":"unset","left":"351px","top":"865px","borderLeft":"0px solid ","borderTop":"1px solid var(--business-show-bg60)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg15)","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"52px","position":"unset","left":"351px","top":"865px","borderLeft":"0px solid ","borderTop":"1px solid var(--business-show-bg60)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg15)","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"1000px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"351px","top":"194px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"351px","top":"194px","animationName":""}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1303px","top":"205px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1303px","top":"205px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"90px","height":"28px","color":"#00FFFF","fontSize":"14px","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--business-show-bg30)","textAlign":"left","lineHeight":"28px","position":"unset","left":"1221px","top":"871px","cursor":"pointer","animationName":"","backgroundImage":"url(assets/images/2024-12-16/8b5a25d0ae5647d4ac7e737d98fb0b04.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"22px 50%","-webkit-mask-position":"","paddingLeft":"38px","marginLeft":"20px"},
            
            },
 default: { 
 
label:"调度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"28px","color":"#00FFFF","fontSize":"14px","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--business-show-bg30)","textAlign":"left","lineHeight":"28px","position":"unset","left":"1221px","top":"871px","cursor":"pointer","animationName":"","backgroundImage":"url(assets/images/2024-12-16/8b5a25d0ae5647d4ac7e737d98fb0b04.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"22px 50%","-webkit-mask-position":"","paddingLeft":"38px","marginLeft":"20px"},"hover":{"backgroundColor":"var(--business-show-bg50)"}}}, 
 },
},
tDatePickerx0x7: {
defaultStyle: {
            default: {"width":"283px","height":"32px","position":"unset","left":"418px","top":"386px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerangehour",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"283px","height":"32px","position":"unset","left":"418px","top":"386px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tTablex0x8: {
defaultStyle: {
            default: {"width":"960px","height":"367px","position":"unset","left":"375px","top":"433px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"367px",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
columns:[{"label":"时间","type":"default","key":"time","stateKey":"","width":"300px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}}},{"label":"起点","type":"default","key":"start","stateKey":"excellentValue","width":"330px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"rgba(255, 255, 255, 1)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"终点","type":"default","key":"end","stateKey":"","width":"330px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"rgba(255, 255, 255, 1)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"var(--business-unit-icon)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"960px","height":"367px","position":"unset","left":"375px","top":"433px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
tTextCommonx0x9: {
defaultStyle: {
            default: {"width":"47px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"366px","top":"391px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"时间",
editable:false,
cStyle:{"wrapper":{"default":{"width":"47px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"366px","top":"391px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tComponentx0x10: {
defaultStyle: {
            default: {"width":"960px","height":"27px","margin":"0 auto","position":"unset","left":"375px","top":"345px"},
            
            },
 default: { 
 
name:"dialogTitleFirstBgComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"960px","height":"27px","margin":"0 auto","position":"unset","left":"375px","top":"345px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBg",
componentName:"dialogTitleFirstBgComponent",
pageId:"4660d2c8be05487e8bf5aa0b29f2376f_6",
pageCode:"dialogTitleFirstBg", 
 },
},
tTextCommonx0x11: {
defaultStyle: {
            default: {"width":"96px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"389px","top":"348px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"洒水记录\n",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"389px","top":"348px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tRowx0x12: {
defaultStyle: {
            default: {"width":"916px","height":"47px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"381px","top":"193px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"916px","height":"47px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"381px","top":"193px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextCommonx0x12x0: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"18px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"375px","top":"207px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"18px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"375px","top":"207px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tRectx0x12x1: {
defaultStyle: {
            default: {"width":"60px","height":"24px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","top":"205px","left":"505px","position":"unset","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","paddingLeft":"unset","marginLeft":"15px"},
            
            },
 default: { 
 
tip:false,
label:"雾炮车",
active:false,
cStyle:{"wrapper":{"default":{"width":"60px","height":"24px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","top":"205px","left":"505px","position":"unset","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","paddingLeft":"unset","marginLeft":"15px"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
});
const setTimeValue = (data) => {
state.startTime = data[0]
state.endTime = data[1]
};
const initParams = () => {

state.CPH = global.businessDialog.dialogParmas?.cph || global.businessDialog.dialogParmas?.DATA_NAME
async function getData(){
// 获取最新时间
await apiRegistry.getLatestTime.request();
// 获取基本信息
await apiRegistry.getBaseInfo.request();
// 获取列表
await apiRegistry.getListData.request();
}
getData()
};
const oncurrentChange1765346765928 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
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
const ondateChange1765089390224_0_0 = (data) => {
// 设置变量值
state.dateValue = data;
// 执行自定义方法
setTimeValue(data);
// 事件交互-请求调用接口
apiRegistry.getListData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const oncellClick1765089615221_0_0 = (row,column,cell,event) => {
// 执行自定义方法
gotoMapLocationLY(row,column);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getLatestTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"ZYC_TYPE":"雾炮车","REGION_PATH":"global.regionaQuery.regionCode","interfaceId":"5b79fdac5c11b6865fe23b47e5adc3c2"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"ZYC_TYPE":"雾炮车","REGION_PATH":global.regionaQuery.regionCode,"interfaceId":"5b79fdac5c11b6865fe23b47e5adc3c2"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"ZYC_TYPE":"雾炮车","REGION_PATH":global.regionaQuery.regionCode,"interfaceId":"5b79fdac5c11b6865fe23b47e5adc3c2"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  let endTime = data.job_time + ':00:00'
  let startTime = getPrevTime(endTime, 'day')
  state.startTime = startTime.slice(0,13)
  state.endTime = data.job_time
  state.dateValue = [state.startTime,state.endTime]
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"CPH":"state.CPH","pageNum":"state.pageInfo.pageNum","pageSize":"state.pageInfo.pageSize","ZYC_TYPE":"雾炮车","END_TIME":"state.endTime","START_TIME":"state.startTime","REGION_PATH":"global.regionaQuery.regionCode","interfaceId":"3b23351433ae74d94dc29259d2b8c06e"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"CPH":state.CPH,"pageNum":state.pageInfo.pageNum,"pageSize":state.pageInfo.pageSize,"ZYC_TYPE":"雾炮车","END_TIME":state.endTime,"START_TIME":state.startTime,"REGION_PATH":global.regionaQuery.regionCode,"interfaceId":"3b23351433ae74d94dc29259d2b8c06e"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"CPH":state.CPH,"pageNum":state.pageInfo.pageNum,"pageSize":state.pageInfo.pageSize,"ZYC_TYPE":"雾炮车","END_TIME":state.endTime,"START_TIME":state.startTime,"REGION_PATH":global.regionaQuery.regionCode,"interfaceId":"3b23351433ae74d94dc29259d2b8c06e"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
 state.pageInfo.total = head.pageInfo.total
 state.listData = data.map(item =>{
  return{
    ...item,
    "time": item?.job_time,
    "start": item?.start_addr || '-',
    "end": item?.end_addr || '-'
  }
 })
}else{
  state.listData = []
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"CPH":"state.CPH","ZYC_TYPE":"雾炮车","REGION_PATH":"global.regionaQuery.regionCode","interfaceId":"cba412a8965299fd2fb2d88d19163b3e"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"CPH":state.CPH,"ZYC_TYPE":"雾炮车","REGION_PATH":global.regionaQuery.regionCode,"interfaceId":"cba412a8965299fd2fb2d88d19163b3e"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"CPH":state.CPH,"ZYC_TYPE":"雾炮车","REGION_PATH":global.regionaQuery.regionCode,"interfaceId":"cba412a8965299fd2fb2d88d19163b3e"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  const info = data[0]
  state.baseInfo = [
      {
        "title": "车牌号",
        "num": info?.cph || '-'
      },
      {
        "title": "类型",
        "num": info?.zyc_type || '-'
      },
      {
        "title": "负责人",
        "num": info?.responsible_person || '-'
      },
      {
        "title": "联系方式",
        "num": info?.contact_phone || '-'
      }
    ]

} else {
  state.baseInfo = [
      {
        "title": "车牌号",
        "num": "-"
      },
      {
        "title": "类型",
        "num": "-"
      },
      {
        "title": "负责人",
        "num": "-"
      },
      {
        "title": "联系方式",
        "num": "-"
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
};
// 监听变量，调取接口
watch(() => [global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getLatestTime', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [state.pageInfo.pageNum,state.pageInfo.pageSize,state.startTime,global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getListData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getBaseInfo', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-fogCannonVehicleDialog', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initParams();
onMounted(() => {
setPageScale('t-l-c-fogCannonVehicleDialog', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tListCardx0x1ComputedData = computed(() => _.merge({}, componentState.tListCardx0x1.default, componentState.tListCardx0x1?.[state.screenSize]));

 const tPaginationBasex0x2ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x2.default, componentState.tPaginationBasex0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tDatePickerx0x7ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x7.default, componentState.tDatePickerx0x7?.[state.screenSize]));

 const tTablex0x8ComputedData = computed(() => _.merge({}, componentState.tTablex0x8.default, componentState.tTablex0x8?.[state.screenSize]));

 const tTextCommonx0x9ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x9.default, componentState.tTextCommonx0x9?.[state.screenSize]));

 const tComponentx0x10ComputedData = computed(() => _.merge({}, componentState.tComponentx0x10.default, componentState.tComponentx0x10?.[state.screenSize]));

 const tTextCommonx0x11ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x11.default, componentState.tTextCommonx0x11?.[state.screenSize]));

 const tRowx0x12ComputedData = computed(() => _.merge({}, componentState.tRowx0x12.default, componentState.tRowx0x12?.[state.screenSize]));

 const tTextCommonx0x12x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x12x0.default, componentState.tTextCommonx0x12x0?.[state.screenSize]));

 const tRectx0x12x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x12x1.default, componentState.tRectx0x12x1?.[state.screenSize]));

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
tListCardx0x1ComputedData,
tPaginationBasex0x2ComputedData,
tRectx0x3ComputedData,
tRectx0x4ComputedData,
tRectx0x5ComputedData,
tTextx0x6ComputedData,
tDatePickerx0x7ComputedData,
tTablex0x8ComputedData,
tTextCommonx0x9ComputedData,
tComponentx0x10ComputedData,
tTextCommonx0x11ComputedData,
tRowx0x12ComputedData,
tTextCommonx0x12x0ComputedData,
tRectx0x12x1ComputedData,
oncurrentChange1765346765928,
onclick1734493226123,
ondateChange1765089390224_0_0,
oncellClick1765089615221_0_0,
};
},
}
</script>

<style scoped>
.t-l-c-fogCannonVehicleDialog {
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
.t-l-c-fogCannonVehicleDialog .fogCannonVehicleDialog-t-rect-0-0 {
position: absolute !important;
top: 194px;
left: 351px;
width: 1000px;
height: 712px;
pointer-events: auto;
}

.t-l-c-fogCannonVehicleDialog .fogCannonVehicleDialog-t-list-card-0-1 {
position: absolute !important;
top: 256px;
left: 373px;
width: 961px;
height: 71px;
pointer-events: auto;
}

.t-l-c-fogCannonVehicleDialog .fogCannonVehicleDialog-t-pagination-base-0-2 {
position: absolute !important;
top: 816px;
left: 377px;
width: 957px;
height: 39px;
pointer-events: auto;
}

.t-l-c-fogCannonVehicleDialog .fogCannonVehicleDialog-t-rect-0-3 {
position: absolute !important;
top: 865px;
left: 351px;
width: 1000px;
height: 52px;
pointer-events: auto;
}

.t-l-c-fogCannonVehicleDialog .fogCannonVehicleDialog-t-rect-0-4 {
position: absolute !important;
top: 194px;
left: 351px;
width: 1000px;
height: 47px;
pointer-events: auto;
}

.t-l-c-fogCannonVehicleDialog .fogCannonVehicleDialog-t-rect-0-5 {
position: absolute !important;
top: 205px;
left: 1303px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-fogCannonVehicleDialog .fogCannonVehicleDialog-t-text-0-6 {
position: absolute !important;
top: 871px;
left: 1221px;
width: 90px;
height: 28px;
pointer-events: auto;
}

.t-l-c-fogCannonVehicleDialog .fogCannonVehicleDialog-t-date-picker-0-7 {
position: absolute !important;
top: 386px;
left: 418px;
width: 283px;
height: 32px;
pointer-events: auto;
}

.t-l-c-fogCannonVehicleDialog .fogCannonVehicleDialog-t-table-0-8 {
position: absolute !important;
top: 433px;
left: 375px;
width: 960px;
height: 367px;
pointer-events: auto;
}

.t-l-c-fogCannonVehicleDialog .fogCannonVehicleDialog-t-text-common-0-9 {
position: absolute !important;
top: 391px;
left: 366px;
width: 47px;
height: 20px;
pointer-events: auto;
}

.t-l-c-fogCannonVehicleDialog .fogCannonVehicleDialog-t-component-0-10 {
position: absolute !important;
top: 345px;
left: 375px;
width: 960px;
height: 27px;
pointer-events: auto;
}

.t-l-c-fogCannonVehicleDialog .fogCannonVehicleDialog-t-text-common-0-11 {
position: absolute !important;
top: 348px;
left: 389px;
width: 96px;
height: 20px;
pointer-events: auto;
}

.t-l-c-fogCannonVehicleDialog .fogCannonVehicleDialog-t-row-0-12 {
position: absolute !important;
top: 193px;
left: 381px;
width: 916px;
height: 47px;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
}

.t-l-c-fogCannonVehicleDialog .fogCannonVehicleDialog-t-text-common-0-12-0 {
position: unset;
top: 207px;
left: 375px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-fogCannonVehicleDialog .fogCannonVehicleDialog-t-rect-0-12-1 {
position: unset;
top: 205px;
left: 505px;
width: 60px;
height: 24px;
pointer-events: auto;
}
</style>
