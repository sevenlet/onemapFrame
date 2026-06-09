<template>
  <div id="t-l-c-sampleList" class="t-l-c-sampleList" ><t-row id="t-row-4e59.43d7f042f" class="sampleList-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align"><t-col id="t-col-15e7.bbf94a1d" class="sampleList-t-col-0-0-0"  :span="tColx0x0x0ComputedData.span" :offset="tColx0x0x0ComputedData.offset" :push="tColx0x0x0ComputedData.push" :pull="tColx0x0x0ComputedData.pull" :c-style="tColx0x0x0ComputedData.cStyle"><t-text-common id="t-text-common-3d57.e9f14e45c" class="sampleList-t-text-common-0-0-0-0"  :label="tTextCommonx0x0x0x0ComputedData.label" :editable="tTextCommonx0x0x0x0ComputedData.editable" :c-style="tTextCommonx0x0x0x0ComputedData.cStyle"></t-text-common><t-select id="t-select-3fcb.c00f74209" class="sampleList-t-select-0-0-0-1"  :active-value="replaceCssVariables(filterData(state.selectedValue, componentPropBindingMap?.['t-select-3fcb.c00f74209']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.selectList, componentPropBindingMap?.['t-select-3fcb.c00f74209']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x0x0x1ComputedData.alias" :multiple="tSelectx0x0x0x1ComputedData.multiple" :placeholder="tSelectx0x0x0x1ComputedData.placeholder" :clearable="tSelectx0x0x0x1ComputedData.clearable" :disabled="tSelectx0x0x0x1ComputedData.disabled" :name="tSelectx0x0x0x1ComputedData.name" :autocomplete="tSelectx0x0x0x1ComputedData.autocomplete" :filterable="tSelectx0x0x0x1ComputedData.filterable" :no-match-text="tSelectx0x0x0x1ComputedData.no-match-text" :no-data-text="tSelectx0x0x0x1ComputedData.no-data-text" :c-style="tSelectx0x0x0x1ComputedData.cStyle" @change="onchange1733973555614"></t-select><t-date-picker id="t-date-picker-3025.506b26ac8" class="sampleList-t-date-picker-0-0-0-2"  :placeholder="tDatePickerx0x0x0x2ComputedData.placeholder" :start-placeholder="tDatePickerx0x0x0x2ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x0x0x2ComputedData.endPlaceholder" :type="tDatePickerx0x0x0x2ComputedData.type" :clearable="tDatePickerx0x0x0x2ComputedData.clearable" :range-separator="tDatePickerx0x0x0x2ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeRange, componentPropBindingMap?.['t-date-picker-3025.506b26ac8']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x0x0x2ComputedData.separator" :readonly="tDatePickerx0x0x0x2ComputedData.readonly" :editable="tDatePickerx0x0x0x2ComputedData.editable" :c-style="tDatePickerx0x0x0x2ComputedData.cStyle" @date-change="ondateChange1776849667816"></t-date-picker></t-col><t-col id="t-col-b8dd.171ccbaae" class="sampleList-t-col-0-0-1"  :span="tColx0x0x1ComputedData.span" :offset="tColx0x0x1ComputedData.offset" :push="tColx0x0x1ComputedData.push" :pull="tColx0x0x1ComputedData.pull" :c-style="tColx0x0x1ComputedData.cStyle"><t-table id="t-table-1f8d.6bc90fe6b" class="sampleList-t-table-0-0-1-0"  :height="tTablex0x0x1x0ComputedData.height" :stripe="tTablex0x0x1x0ComputedData.stripe" :border="tTablex0x0x1x0ComputedData.border" :auto-scroll="tTablex0x0x1x0ComputedData.autoScroll" :speed="tTablex0x0x1x0ComputedData.speed" :columns="tTablex0x0x1x0ComputedData.columns" :data="replaceCssVariables(filterData(state.tableData, componentPropBindingMap?.['t-table-1f8d.6bc90fe6b']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x0x1x0ComputedData.defaultSort" :c-style="tTablex0x0x1x0ComputedData.cStyle" @cell-click="oncellClick1776921748752"></t-table><t-pagination-base id="t-pagination-base-4f20.bd8c5faca" class="sampleList-t-pagination-base-0-0-1-1"  :total="replaceCssVariables(filterData(state.pageInfo.total, componentPropBindingMap?.['t-pagination-base-4f20.bd8c5faca']['total'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x0x1x1ComputedData.small" :page-size="replaceCssVariables(filterData(state.pageInfo.pageSize, componentPropBindingMap?.['t-pagination-base-4f20.bd8c5faca']['pageSize'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :pager-count="tPaginationBasex0x0x1x1ComputedData.pagerCount" :current-page="replaceCssVariables(filterData(state.pageInfo.pageNum, componentPropBindingMap?.['t-pagination-base-4f20.bd8c5faca']['currentPage'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x0x1x1ComputedData.layout" :page-sizes="tPaginationBasex0x0x1x1ComputedData.pageSizes" :disabled="tPaginationBasex0x0x1x1ComputedData.disabled" :c-style="tPaginationBasex0x0x1x1ComputedData.cStyle" @current-change="oncurrentChange1776912448071"></t-pagination-base></t-col></t-row><t-component id="t-component-7efc.551d1889b" class="sampleList-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode"></t-component><t-text id="t-text-cade.6bfa7d2ce" class="sampleList-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle"></t-text><t-text id="t-text-5501.17d242ca4" class="sampleList-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle"></t-text></div>
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
import { TCol, TComponent, TDatePicker, TPaginationBase, TRow, TSelect, TTable, TText, TTextCommon } from '@ths/design';

export default {
  components: {
    TCol,
    TComponent,
    TDatePicker,
    TPaginationBase,
    TRow,
    TSelect,
    TTable,
    TText,
    TTextCommon,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-4e59.43d7f042f":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-15e7.bbf94a1d":{"attributeName":"tColx0x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-3d57.e9f14e45c":{"attributeName":"tTextCommonx0x0x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-3fcb.c00f74209":{"attributeName":"tSelectx0x0x0x1","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-3025.506b26ac8":{"attributeName":"tDatePickerx0x0x0x2","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-b8dd.171ccbaae":{"attributeName":"tColx0x0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-table-1f8d.6bc90fe6b":{"attributeName":"tTablex0x0x1x0","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-pagination-base-4f20.bd8c5faca":{"attributeName":"tPaginationBasex0x0x1x1","total":{"filters":[]},"small":{"filters":[]},"pageSize":{"filters":[]},"pagerCount":{"filters":[]},"currentPage":{"filters":[]},"layout":{"filters":[]},"pageSizes":{"filters":[]},"disabled":{"filters":[]},"cStyle":{"filters":[]}},"t-component-7efc.551d1889b":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-cade.6bfa7d2ce":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-5501.17d242ca4":{"attributeName":"tTextx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   year: "",
   pageInfo: {"pageNum":1,"pageSize":10,"total":0,"pages":0},
   endTime: "",
   startTime: "",
   timeRange: [],
   selectedValue: "",
   selectList: [],
   type: "",
   time: "",
   inspectObjectType: "",
   pointname: "",
   pointcode: "",
   curOperation: "",
   historyTaskTableSelection: [],
   tableData: [],
   curStatusSelected: "",
   curStatusOpts: [],
   hasProblemOpts: [],
   hasProblemSelected: "",
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
tRowx0x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","left":"0px","top":"35px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","left":"0px","top":"35px","position":"unset"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"56px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"-32px","top":"-382px","backgroundColor":"var(--business-show-bg30)","paddingTop":"30px","paddingBottom":"30px","paddingLeft":"30px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"auto","height":"56px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"-32px","top":"-382px","backgroundColor":"var(--business-show-bg30)","paddingTop":"30px","paddingBottom":"30px","paddingLeft":"30px"}}}, 
 },
},
tTextCommonx0x0x0x0: {
defaultStyle: {
            default: {"width":"96px","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"nowrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"41px","top":"132px","background":"unset","backgroundClip":"unset","marginRight":"0px"},
            
            },
 default: { 
 
label:"类型",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"nowrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"41px","top":"132px","background":"unset","backgroundClip":"unset","marginRight":"0px"}}}, 
 },
},
tSelectx0x0x0x1: {
defaultStyle: {
            default: {"width":"250px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","marginLeft":"20px","marginRight":"20px"},
            
            },
 default: { 
 
activeValue:"",
options:[],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:true,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"250px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","marginLeft":"20px","marginRight":"20px"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tDatePickerx0x0x0x2: {
defaultStyle: {
            default: {"width":"270px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px","left":"928px","top":"154px"},
            
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
cStyle:{"wrapper":{"default":{"width":"270px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px","left":"928px","top":"154px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","lineHeight":"20px"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","lineHeight":"20px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"30px"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--skin-font-color)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--skin-font-color)"}},"operatorArrow":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--skin-font-color)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--skin-font-color)","borderLeft":"1px solid var(--skin-font-color)","borderTop":"1px solid var(--skin-font-color)","borderRight":"1px solid var(--skin-font-color)","borderBottom":"1px solid var(--skin-font-color)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--skin-font-color)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tColx0x0x1: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"block"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"block"}}}, 
 },
},
tTablex0x0x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"435px","position":"unset","left":"30px","top":"297px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"100%",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"样方编码/样线编码","key":"pointCode","stateKey":"","infoKey":"","tooltipKey":""},{"label":"日期","key":"create_time","stateKey":"","infoKey":"","tooltipKey":""},{"label":"样方类型","key":"typeDetailName","stateKey":"","infoKey":"","tooltipKey":""},{"label":"操作","key":"action","stateKey":"","infoKey":"","tooltipKey":"","type":"operation","operationList":[{"name":"查看","id":"view","fontStyle":{"color":"#00B7FF"}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"435px","position":"unset","left":"30px","top":"297px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"0px solid rgba(26,27,31,1)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--business-show-bg30)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px","textAlign":"center"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"highlightRow":{"default":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
tPaginationBasex0x0x1x1: {
defaultStyle: {
            default: {"width":"100%","height":"32px","position":"unset","left":"33.5px","top":"786px","color":"","animationName":"","display":"flex","justifyContent":"right","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingTop":"unset","paddingBottom":"unset","marginTop":"10px","alignItems":"center"},
            
            },
 default: { 
 
total:0,
small:false,
pageSize:10,
pagerCount:5,
currentPage:1,
layout:" prev, pager, next,sizes,total",
pageSizes:[5,10,15,20,30,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","position":"unset","left":"33.5px","top":"786px","color":"","animationName":"","display":"flex","justifyContent":"right","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingTop":"unset","paddingBottom":"unset","marginTop":"10px","alignItems":"center"}},"pagerItem":{"default":{"color":"var(--skin-font-color)","fontSize":"14px","lineHeight":"32px","borderLeft":"1px none #366B92","borderTop":"1px none #366B92","borderRight":"1px none #366B92","borderBottom":"1px none #366B92","marginLeft":"0px","marginRight":"5px","backgroundColor":"var(--business-select-item-bg)"},"active":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundColor":"#6FAED9","color":"#FFFFFF","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""},"hover":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","color":"#FFFFFF","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"#6FAED9"}},"pager":{"default":{"borderLeft":"1px none var(--theme-btn-default)","borderTop":"1px none var(--theme-btn-default)","borderRight":"1px none var(--theme-btn-default)","borderBottom":"1px none var(--theme-btn-default)","color":"var(--t-color-text-green)","marginLeft":"0px","marginRight":"0px","backgroundColor":"#0D4895"},"hover":{"color":"#FFFFFF","borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--t-button-bg)"}},"more":{"default":{"color":"var(--t-color-text-green)"},"hover":{"color":"#366B92","backgroundColor":""}},"total":{"default":{"color":"var(--skin-font-color)","paddingRight":"0px","paddingLeft":"0px","fontSize":"14px","marginRight":"0px","marginLeft":"20px","display":"flex"}},"sizesWrapper":{"default":{"color":"var(--t-color-text-green)","fontSize":"14px","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","marginRight":"10px","marginLeft":"10px","display":"none"}},"sizesInput":{"default":{"color":"var(--common-white08)","borderLeft":"1px solid var(--common-white08)","borderTop":"1px solid var(--common-white08)","borderRight":"1px solid var(--common-white08)","borderBottom":"1px solid var(--common-white08)","backgroundColor":"","display":"none"},"hover":{"borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"jumpWrapper":{"default":{"color":"var(--t-color-text-green)","backgroundColor":""}},"jumpInput":{"default":{"color":"var(--t-color-text-green)","backgroundColor":"var(--business-select-item-bg)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"hover":{"color":"var(--common-white1)","borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"sizesDropdownWrapper":{"default":{"backgroundColor":"","color":"rgba(255, 255, 255, 0.9)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","background":"var(--t-body-background)","fillType":"color"}},"sizesDropdownItem":{"default":{"color":"rgba(255, 255, 255, 0.9)","backgroundColor":"","borderLeft":"1px none #00828A","borderTop":"1px none #00828A","borderRight":"1px none #00828A","borderBottom":"1px none #00828A"},"active":{"backgroundColor":"var(--business-select-item-bg)","color":"var(--business-text-hover)"},"hover":{"color":"var(--business-text-hover)","backgroundColor":"var(--business-select-item-bg)"}}}, 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"1px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"1px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"41px","top":"5px","fontFamily":"方正综艺","fontSize":"16px","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"样方/样线清单",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"41px","top":"5px","fontFamily":"方正综艺","fontSize":"16px","animationName":"","lineHeight":"20px"}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"8px","left":"646px","textAlign":"right","fontSize":"14px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"8px","left":"646px","textAlign":"right","fontSize":"14px","position":"unset","animationName":""}}}, 
 },
},
});
const initPageData = () => {
// 提供给内部表格
provide('state', state)
console.log('打开样方弹窗 20260128-1654', global.businessDialog.dialogParmas, state);

state.pointname = global.businessDialog.dialogParmas.title || global.businessDialog.dialogParmas.OUTPUTNAME || global.businessDialog.dialogParmas.POINT_NAME || '';
state.pointcode = global.businessDialog.dialogParmas.pointCode || global.businessDialog.dialogParmas.point_code;
state.type = global.businessDialog.dialogParmas.TYPE || global.businessDialog.dialogParmas.type;
state.year = global.businessDialog.dialogParmas.year;

const init = async () => {
  // state.time = Math.random();
  // 获取检查对象信息
  // await apiRegistry.getCheckObjInfo.request();
  // state.time = Math.random();
  // 获取检查列表
  // apiRegistry.getCheckList.request();

  // 获取类型下拉
  apiRegistry.getSelectData.request();
  // 获取时间
  apiRegistry.getDateTime.request();
  // 表格数据
  // apiRegistry.getTableList.request();
  
};

init();


// 接收消息
rootData.rootOn('rootSocket:change', (data) =>{
    if (data.type === "closeCenterScreenDialog") {
      // 处理逻辑
      global.samplePlotGlobalVariables.isDialog = false
    }
});
};
const handleHistoryTaskTableSelectChange = (resu) => {
// console.log('处理历史任务表格选中变化', resu);

state.historyTaskTableSelection = resu?.selected;

console.log('处理历史任务表格选中变化', resu, state.historyTaskTableSelection);
};
const handleDelete = () => {
// 如果没选中，则提示，不进行删除
if (!state.historyTaskTableSelection.length) {
  ElementPlus.ElMessage.warning('请选择要删除的数据');
  return;
}

// 删除检查记录的id数组
const delArr = state.historyTaskTableSelection.map((item) => item.inspect_id).join(',');

const url = `${global.businessServiceBaseUrl}/waterevaluate/inspect/batchDelete`;
const token = localStorage.getItem('token');

axios.delete(
  url,
  {
    params: {
      "inspectIds": delArr,
      time: Math.random(),
    },
    headers: {
      'usertoken': token,
      'token': token,
      // 'Content-Type': 'application/json'
    }
  }
  // {
  //   time: Math.random(),
  //   "inspectIds": delArr,
  // },
  // {
  //   baseURL: global.businessServiceBaseUrl,
  //   headers: {
  //     'usertoken': token,
  //     'token': token,
  //     'Content-Type': 'application/json'
  //   }
  // }
).then((res) => {
  console.log('删除检查记录', res);
  if (res.data.code === 200) {
    ElementPlus.ElMessage.success('删除成功');
    rootData.rootSocket.emit(
      'message',
      {
        room: global.socketRoom,
        type: "updateCheckList",
        data: {},
      }
    );

  }
}).catch(error => {
  console.log('删除失败', error)
  ElementPlus.ElMessage.error('删除失败，请重试');
});

};
const openCheckRecordDialog = (action,row) => {
// 填充操作状态
state.curOperation = action;
global.waterGlobalVariables.historyTask.action = action;
console.log(action,row,'test');
if (action === '新增' || action === '编辑' || action === '查看') {
  // 填充当前行
  global.waterGlobalVariables.historyTask.checkQuesRow = row || {};
  global.waterGlobalVariables.historyTask.returnQuesRow = row || {};

  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: "createDialog", // 消息名称
    data: {
      params: {
        // 新建、编辑、查看
        title: `${state.curOperation}检查记录`,
        // maxHeight: "997px",
        // maxWidth: "1600px",
        // minHeight: "716px",
        // minWidth: "1002px",
        maxHeight: "550px",
        maxWidth: "1100px",
        minHeight: "416px",
        minWidth: "850px",
        contentComName: "checkRecordComponent",
        dialogParams: {
          row: row,
          action: action,
        },
      }
    }, // 发送的数据
  });
} else if (action === '反馈') {
  // 填充当前行
  global.waterGlobalVariables.historyTask.returnQuesRow = row || {};
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: "createDialog", // 消息名称
    data: {
      params: {
        // 新建、编辑、查看
        title: `${state.curOperation}记录`,
        // maxHeight: "997px",
        // maxWidth: "1600px",
        // minHeight: "716px",
        // minWidth: "1002px",
        maxHeight: "670px",
        maxWidth: "1100px",
        minHeight: "416px",
        minWidth: "850px",
        contentComName: "feedbackRecordComponent",
        dialogParams: {
          row: row,
          action: action,
        },
      }
    }, // 发送的数据
  });
}


};
const updateCheckList = () => {
state.time = Math.random();
apiRegistry.getCheckList.request();
};
const changeTime = (time) => {
state.timeRange = time || [];
state.startTime = time[0] || '';
state.endTime = time[1] || '';

apiRegistry.getTableList.request();
};
const handleTableClick = (row) => {
// 显示样方弹窗
if (row.action === 'view') {

  // let dialogParmas = 
  //   global.businessDialog.dialogParmas = {
  //     ... global.businessDialog.dialogParmas,
  //     year: state.year,
  //     point_code: state.pointcode
  //   }

global.samplePlotGlobalVariables.isDialog = true
global.samplePlotGlobalVariables.sampleSquare = {
    "monitorTime": "",
    "assessType": "",
    "sourceType": "samplePlot",
    "point_code": row.pointCode,
    "year": state.year,
    "longitude": row.longitude,
    "latitude": row.latitude,
    "create_time": row.create_time,
    "TYPE": state.type,
    "typeDetail": state.selectedValue || '_',
  }


  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'showLegoDialog',  // 消息类型名称
      data: {
        dialogName: 'waterDialogFractureSurfaceComponent',
           "headerComName": "waterDialogFractureSurfaceHComponent", 
        "dialogParams": {
          ...global.businessDialog.dialogParmas,
            // "monitorTime": "",
            // "assessType": "",
            // "sourceType": "samplePlot",
            // "point_code": row.pointCode,
            // "year": state.year,
            // "longitude": row.longitude,
            // "latitude": row.latitude,
            // "create_time": row.create_time,
            // "TYPE": state.type,
            "typeDetail": state.selectedValue || '_',
          },
        }
      }
  );

  // rootData.rootSocket.emit(
  //   'message',  // 固定的消息名称，不能修改
  //   {
  //     room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
  //     type: 'runInteractive',  // 消息类型名称
  //     data: [
  //       {
  //         "shareCode": "showLegoDialog",
  //         "runtimeValue": "true"
  //       },
  //       {
  //         "code": "dialogName",
  //         "shareCode": "dialogName",
  //         "runtimeValue": "waterDialogFractureSurfaceComponent"
  //       },
  //       {

  //         "code": "dialogParmas",
  //         "shareCode": "dialogParmas",
  //         "runtimeValue": {
  //           "monitorTime": "",
  //           "assessType": "",
  //           "sourceType": "samplePlot",
  //           "point_code": state.pointcode,
  //           "year": state.year,
  //           "longitude": row.longitude,
  //           "latitude": row.latitude,
  //           "create_time": row.create_time,
  //           "TYPE": state.type,
  //           "typeDetail": state.selectedValue
  //         }
  //       }
  //     ]
  //   }
  // );
}
};
const onchange1733973555614 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.selectedValue = value;
// 事件交互-请求调用接口
apiRegistry.getDateTime.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const ondateChange1776849667816 = (data) => {
// 执行自定义方法
changeTime(data);
};
const oncurrentChange1776912448071 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
// 事件交互-请求调用接口
apiRegistry.getTableList.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const oncellClick1776921748752 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(row);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getDateTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TYPE_DETAIL":"state.selectedValue","TYPE":"state.type","YEAR":"state.year","interfaceId":"8d6b121550c8acba05f17c70ff5d6c96"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TYPE_DETAIL":state.selectedValue,"TYPE":state.type,"YEAR":state.year,"interfaceId":"8d6b121550c8acba05f17c70ff5d6c96"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TYPE_DETAIL":state.selectedValue,"TYPE":state.type,"YEAR":state.year,"interfaceId":"8d6b121550c8acba05f17c70ff5d6c96"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getDateTime'] = res.data;
                
     // console.log(res);
const { data } = res;
if(data.head.statusCode === '200' && data.data){
  console.log(data.data, '时间')
  
  // 获取接口返回的 max_time（作为结束时间）
  let endTime = data.data.max_time;
  
  if (endTime) {
    // 计算开始时间（向前推一个月）
    const startDate = new Date(endTime);
    startDate.setMonth(startDate.getMonth() - 1);
    
    // 格式化开始时间
    const startYear = startDate.getFullYear();
    const startMonth = String(startDate.getMonth() + 1).padStart(2, '0');
    const startDay = String(startDate.getDate()).padStart(2, '0');
    let startTime = `${startYear}-${startMonth}-${startDay}`;
    
    // 赋值给 state.timeRange 作为时间区间
    state.timeRange = [startTime, endTime];

    state.startTime = startTime
    state.endTime = endTime
  } 
  

  // 请求列表
  apiRegistry.getTableList.request();
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
 getSelectData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TYPE":"state.type","interfaceId":"d8e4a0846f8cbb54a19709765e09b874"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TYPE":state.type,"interfaceId":"d8e4a0846f8cbb54a19709765e09b874"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TYPE":state.type,"interfaceId":"d8e4a0846f8cbb54a19709765e09b874"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getSelectData'] = res.data;
                
     console.log("获取检查对象信息", res);
if (res.data.data.length) {
  state.selectList = res.data.data.map((item) => ({
    label: item.typeDetailName,
    value: item.typeDetail
  }))
  
}

// {
//     "inspect_object_code": "3507001062",
//     "inspect_object_name": "新铺溪口",
//     "region_code": "350700000000",
//     "region_name": "南平市",
//     "inspect_object_type": 1,
//     "inspect_object_type_name": "断面"
// }
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      

      reject(error);
    });
  });
},
              },
// 接口函数
 getTableList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"pageSize":"state.pageInfo.pageSize","pageNum":"state.pageInfo.pageNum","TYPE":"state.type","REGION_PATH":"global.regionaQuery.regionCode","TYPE_DETAIL":"state.selectedValue","END_TIME":"state.endTime","START_TIME":"state.startTime","interfaceId":"8cbf6da916ad1e26c7467af9bccd29b2"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"TYPE":state.type,"REGION_PATH":global.regionaQuery.regionCode,"TYPE_DETAIL":state.selectedValue,"END_TIME":state.endTime,"START_TIME":state.startTime,"interfaceId":"8cbf6da916ad1e26c7467af9bccd29b2"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"TYPE":state.type,"REGION_PATH":global.regionaQuery.regionCode,"TYPE_DETAIL":state.selectedValue,"END_TIME":state.endTime,"START_TIME":state.startTime,"interfaceId":"8cbf6da916ad1e26c7467af9bccd29b2"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTableList'] = res.data;
                
     state.tableData = [];
const { data } = res;
const {head } = data
console.log(data, 'table-data')
if (data.head.statusCode === '200' && data.data) {
  state.pageInfo.total = head.pageInfo?.total

  state.tableData = data.data.map(item => ({
    ...item,
    action: "view"
  })) || []

}else {
  state.tableData = []
  state.pageInfo.total = 0
}


// {
//     "pointCode": "35078307000107",
//     "create_time": "2025-06-08",
//     "longitude": "118.32577",
//     "latitude": "27.04854",
//     "type": "CITY",
//     "typeName": "城乡样地",
//     "typeDetail": "qm",
//     "typeDetailName": "城乡乔木层"
// }
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableData = [];

      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-sampleList', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPageData();
onMounted(() => {
setPageScale('t-l-c-sampleList', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tColx0x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0x0.default, componentState.tColx0x0x0?.[state.screenSize]));

 const tTextCommonx0x0x0x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x0x0x0.default, componentState.tTextCommonx0x0x0x0?.[state.screenSize]));

 const tSelectx0x0x0x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x0x0x1.default, componentState.tSelectx0x0x0x1?.[state.screenSize]));

 const tDatePickerx0x0x0x2ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x0x0x2.default, componentState.tDatePickerx0x0x0x2?.[state.screenSize]));

 const tColx0x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x0x1.default, componentState.tColx0x0x1?.[state.screenSize]));

 const tTablex0x0x1x0ComputedData = computed(() => _.merge({}, componentState.tTablex0x0x1x0.default, componentState.tTablex0x0x1x0?.[state.screenSize]));

 const tPaginationBasex0x0x1x1ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x0x1x1.default, componentState.tPaginationBasex0x0x1x1?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

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
tRowx0x0ComputedData,
tColx0x0x0ComputedData,
tTextCommonx0x0x0x0ComputedData,
tSelectx0x0x0x1ComputedData,
tDatePickerx0x0x0x2ComputedData,
tColx0x0x1ComputedData,
tTablex0x0x1x0ComputedData,
tPaginationBasex0x0x1x1ComputedData,
tComponentx0x1ComputedData,
tTextx0x2ComputedData,
tTextx0x3ComputedData,
onchange1733973555614,
ondateChange1776849667816,
oncellClick1776921748752,
oncurrentChange1776912448071,
};
},
}
</script>

<style scoped>
.t-l-c-sampleList {
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
width: 1000px;
height: 700px;
background-color: rgba(0,0,0,0);
}
.t-l-c-sampleList .sampleList-t-row-0-0 {
position: absolute !important;
top: 35px;
left: 0px;
width: 100%;
height: auto;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
}

.t-l-c-sampleList .sampleList-t-col-0-0-0 {
position: relative;
top: null;
left: null;
width: auto;
height: 56px;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
background-color: var(--business-show-bg30);
padding-top: 30px;
padding-bottom: 30px;
padding-left: 30px;
}

.t-l-c-sampleList .sampleList-t-text-common-0-0-0-0 {
position: unset;
top: 132px;
left: 41px;
width: 96px;
height: 20px;
pointer-events: auto;
}

.t-l-c-sampleList .sampleList-t-select-0-0-0-1 {
position: unset;
top: -39px;
left: 278px;
width: 250px;
height: 32px;
pointer-events: auto;
}

.t-l-c-sampleList .sampleList-t-date-picker-0-0-0-2 {
position: unset;
top: 154px;
left: 928px;
width: 270px;
height: 32px;
pointer-events: auto;
}

.t-l-c-sampleList .sampleList-t-col-0-0-1 {
position: relative;
top: null;
left: null;
width: 100px;
height: auto;
pointer-events: auto;
display: block;
}

.t-l-c-sampleList .sampleList-t-table-0-0-1-0 {
position: unset;
top: 297px;
left: 30px;
width: 100%;
height: 435px;
pointer-events: auto;
}

.t-l-c-sampleList .sampleList-t-pagination-base-0-0-1-1 {
position: unset;
top: 786px;
left: 33.5px;
width: 100%;
height: 32px;
pointer-events: auto;
}

.t-l-c-sampleList .sampleList-t-component-0-1 {
position: absolute !important;
top: 0px;
left: 1px;
width: 100%;
height: 28px;
pointer-events: auto;
}

.t-l-c-sampleList .sampleList-t-text-0-2 {
position: absolute !important;
top: 5px;
left: 41px;
width: 130px;
height: 20px;
pointer-events: auto;
}

.t-l-c-sampleList .sampleList-t-text-0-3 {
position: absolute !important;
top: 8px;
left: 646px;
width: 164px;
height: 19px;
pointer-events: auto;
}
</style>
