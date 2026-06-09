<template>
  <div id="t-l-c-speciesSituation" class="t-l-c-speciesSituation" ><t-row id="t-row-4e59.43d7f042f" class="speciesSituation-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align"><t-col id="t-col-421a.5ba969a6e" class="speciesSituation-t-col-0-0-0"  :span="tColx0x0x0ComputedData.span" :offset="tColx0x0x0ComputedData.offset" :push="tColx0x0x0ComputedData.push" :pull="tColx0x0x0ComputedData.pull" :c-style="tColx0x0x0ComputedData.cStyle"><t-col id="t-col-15e7.bbf94a1d" class="speciesSituation-t-col-0-0-0-0"  :span="tColx0x0x0x0ComputedData.span" :offset="tColx0x0x0x0ComputedData.offset" :push="tColx0x0x0x0ComputedData.push" :pull="tColx0x0x0x0ComputedData.pull" :c-style="tColx0x0x0x0ComputedData.cStyle"><t-text-common id="t-text-common-3d57.e9f14e45c" class="speciesSituation-t-text-common-0-0-0-0-0"  :label="tTextCommonx0x0x0x0x0ComputedData.label" :editable="tTextCommonx0x0x0x0x0ComputedData.editable" :c-style="tTextCommonx0x0x0x0x0ComputedData.cStyle"></t-text-common><t-search id="t-search-f526.b28be0966" class="speciesSituation-t-search-0-0-0-0-1"  :type="tSearchx0x0x0x0x1ComputedData.type" :input-value="tSearchx0x0x0x0x1ComputedData.inputValue" :maxlength="tSearchx0x0x0x0x1ComputedData.maxlength" :minlength="tSearchx0x0x0x0x1ComputedData.minlength" :show-word-limit="tSearchx0x0x0x0x1ComputedData.showWordLimit" :placeholder="tSearchx0x0x0x0x1ComputedData.placeholder" :clearable="tSearchx0x0x0x0x1ComputedData.clearable" :show-password="tSearchx0x0x0x0x1ComputedData.showPassword" :disabled="tSearchx0x0x0x0x1ComputedData.disabled" :prefix-icon="tSearchx0x0x0x0x1ComputedData.prefix-icon" :suffix-icon="tSearchx0x0x0x0x1ComputedData.suffix-icon" :rows="tSearchx0x0x0x0x1ComputedData.rows" :autosize="tSearchx0x0x0x0x1ComputedData.autosize" :name="tSearchx0x0x0x0x1ComputedData.name" :readonly="tSearchx0x0x0x0x1ComputedData.readonly" :step="tSearchx0x0x0x0x1ComputedData.step" :autofocus="tSearchx0x0x0x0x1ComputedData.autofocus" :form="tSearchx0x0x0x0x1ComputedData.form" :label="tSearchx0x0x0x0x1ComputedData.label" :tabindex="tSearchx0x0x0x0x1ComputedData.tabindex" :validate-event="tSearchx0x0x0x0x1ComputedData.validateEvent" :c-style="tSearchx0x0x0x0x1ComputedData.cStyle" :has-search-btn="tSearchx0x0x0x0x1ComputedData.hasSearchBtn" @change="onchange1778292879569"></t-search></t-col><t-col id="t-col-73c8.9ed7524a4" class="speciesSituation-t-col-0-0-0-1"  :span="tColx0x0x0x1ComputedData.span" :offset="tColx0x0x0x1ComputedData.offset" :push="tColx0x0x0x1ComputedData.push" :pull="tColx0x0x0x1ComputedData.pull" :c-style="tColx0x0x0x1ComputedData.cStyle"><t-button id="t-button-3bfe.b2134f0dd" class="speciesSituation-t-button-0-0-0-1-0"  :label="tButtonx0x0x0x1x0ComputedData.label" :round="tButtonx0x0x0x1x0ComputedData.round" :plain="tButtonx0x0x0x1x0ComputedData.plain" :disabled="tButtonx0x0x0x1x0ComputedData.disabled" :type="tButtonx0x0x0x1x0ComputedData.type" :size="tButtonx0x0x0x1x0ComputedData.size" :native-type="tButtonx0x0x0x1x0ComputedData.native-type" :c-style="tButtonx0x0x0x1x0ComputedData.cStyle" @click="onclick1778292898960"></t-button></t-col></t-col><t-col id="t-col-b8dd.171ccbaae" class="speciesSituation-t-col-0-0-1"  :span="tColx0x0x1ComputedData.span" :offset="tColx0x0x1ComputedData.offset" :push="tColx0x0x1ComputedData.push" :pull="tColx0x0x1ComputedData.pull" :c-style="tColx0x0x1ComputedData.cStyle"><t-table id="t-table-1f8d.6bc90fe6b" class="speciesSituation-t-table-0-0-1-0"  :height="tTablex0x0x1x0ComputedData.height" :stripe="tTablex0x0x1x0ComputedData.stripe" :border="tTablex0x0x1x0ComputedData.border" :auto-scroll="tTablex0x0x1x0ComputedData.autoScroll" :speed="tTablex0x0x1x0ComputedData.speed" :columns="tTablex0x0x1x0ComputedData.columns" :data="replaceCssVariables(filterData(state.tableData, componentPropBindingMap?.['t-table-1f8d.6bc90fe6b']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x0x1x0ComputedData.defaultSort" :c-style="tTablex0x0x1x0ComputedData.cStyle" @cell-click="oncellClick1776921748752"></t-table><t-pagination-base id="t-pagination-base-4f20.bd8c5faca" class="speciesSituation-t-pagination-base-0-0-1-1"  :total="replaceCssVariables(filterData(state.pageInfo.total, componentPropBindingMap?.['t-pagination-base-4f20.bd8c5faca']['total'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x0x1x1ComputedData.small" :page-size="replaceCssVariables(filterData(state.pageInfo.pageSize, componentPropBindingMap?.['t-pagination-base-4f20.bd8c5faca']['pageSize'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :pager-count="tPaginationBasex0x0x1x1ComputedData.pagerCount" :current-page="replaceCssVariables(filterData(state.pageInfo.pageNum, componentPropBindingMap?.['t-pagination-base-4f20.bd8c5faca']['currentPage'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x0x1x1ComputedData.layout" :page-sizes="tPaginationBasex0x0x1x1ComputedData.pageSizes" :disabled="tPaginationBasex0x0x1x1ComputedData.disabled" :c-style="tPaginationBasex0x0x1x1ComputedData.cStyle" @current-change="oncurrentChange1776912448071"></t-pagination-base></t-col></t-row><t-list-card id="t-list-card-9c39.eab21b9b6" class="speciesSituation-t-list-card-0-1"  :data="replaceCssVariables(filterData(state.baseInfo, componentPropBindingMap?.['t-list-card-9c39.eab21b9b6']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x1ComputedData.spacingX" :col="tListCardx0x1ComputedData.col" :direction="tListCardx0x1ComputedData.direction" :exchange-order="tListCardx0x1ComputedData.exchangeOrder" :unit-break="tListCardx0x1ComputedData.unitBreak" :key-field="tListCardx0x1ComputedData.keyField" :active-key-field="tListCardx0x1ComputedData.activeKeyField" :active="tListCardx0x1ComputedData.active" :c-style="tListCardx0x1ComputedData.cStyle"></t-list-card><t-component id="t-component-7efc.551d1889b" class="speciesSituation-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName" :page-id="tComponentx0x2ComputedData.pageId" :page-code="tComponentx0x2ComputedData.pageCode"></t-component><t-text id="t-text-cade.6bfa7d2ce" class="speciesSituation-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle"></t-text><t-text id="t-text-5501.17d242ca4" class="speciesSituation-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle"></t-text></div>
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
import { TButton, TCol, TComponent, TListCard, TPaginationBase, TRow, TSearch, TTable, TText, TTextCommon } from '@ths/design';

export default {
  components: {
    TButton,
    TCol,
    TComponent,
    TListCard,
    TPaginationBase,
    TRow,
    TSearch,
    TTable,
    TText,
    TTextCommon,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-4e59.43d7f042f":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-421a.5ba969a6e":{"attributeName":"tColx0x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-col-15e7.bbf94a1d":{"attributeName":"tColx0x0x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-3d57.e9f14e45c":{"attributeName":"tTextCommonx0x0x0x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-search-f526.b28be0966":{"attributeName":"tSearchx0x0x0x0x1","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]},"hasSearchBtn":{"filters":[]}},"t-col-73c8.9ed7524a4":{"attributeName":"tColx0x0x0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-button-3bfe.b2134f0dd":{"attributeName":"tButtonx0x0x0x1x0","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-col-b8dd.171ccbaae":{"attributeName":"tColx0x0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-table-1f8d.6bc90fe6b":{"attributeName":"tTablex0x0x1x0","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-pagination-base-4f20.bd8c5faca":{"attributeName":"tPaginationBasex0x0x1x1","total":{"filters":[]},"small":{"filters":[]},"pageSize":{"filters":[]},"pagerCount":{"filters":[]},"currentPage":{"filters":[]},"layout":{"filters":[]},"pageSizes":{"filters":[]},"disabled":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-9c39.eab21b9b6":{"attributeName":"tListCardx0x1","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-7efc.551d1889b":{"attributeName":"tComponentx0x2","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-cade.6bfa7d2ce":{"attributeName":"tTextx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-5501.17d242ca4":{"attributeName":"tTextx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   searchValue: "",
   baseInfo: [{"title":"样方编码","num":"35078107000107"},{"title":"样地编号","num":"35078107000107"}],
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
            default: {"width":"100%","height":"541px","display":"flex","justifyContent":"left","alignItems":"center","left":"2px","top":"100px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"541px","display":"flex","justifyContent":"left","alignItems":"center","left":"2px","top":"100px","position":"unset"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"56px","display":"flex","justifyContent":"space-between","alignItems":"center","gap":"auto","background":"var(--business-show-bg30)","fillType":"color"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"56px","display":"flex","justifyContent":"space-between","alignItems":"center","gap":"auto","background":"var(--business-show-bg30)","fillType":"color"}}}, 
 },
},
tColx0x0x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"56px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"-32px","top":"-382px","backgroundColor":"var(--business-show-bg30)","paddingTop":"30px","paddingBottom":"30px","paddingLeft":"30px","background":"rgba(0, 0, 0, 0)","fillType":"color","gap":"10px"},
            
            },
 default: { 
 
span:12,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"auto","height":"56px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"-32px","top":"-382px","backgroundColor":"var(--business-show-bg30)","paddingTop":"30px","paddingBottom":"30px","paddingLeft":"30px","background":"rgba(0, 0, 0, 0)","fillType":"color","gap":"10px"}}}, 
 },
},
tTextCommonx0x0x0x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"nowrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"41px","top":"132px","background":"unset","backgroundClip":"unset","marginRight":"0px"},
            
            },
 default: { 
 
label:"物种中文名",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"nowrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"41px","top":"132px","background":"unset","backgroundClip":"unset","marginRight":"0px"}}}, 
 },
},
tSearchx0x0x0x0x1: {
defaultStyle: {
            default: {"width":"348px","height":"32px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","fontSize":"var(--business-text-size-14)"},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入",
clearable:true,
showPassword:false,
disabled:false,
'prefix-icon':"",
'suffix-icon':"",
rows:2,
autosize:false,
name:"",
readonly:false,
step:"",
autofocus:false,
form:"",
label:"",
tabindex:"",
validateEvent:true,
cStyle:{"wrapper":{"default":{"width":"348px","height":"32px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","fontSize":"var(--business-text-size-14)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"prefix":{"default":{"color":"var(--business-text-avianize)"}}},
hasSearchBtn:false, 
 },
},
tColx0x0x0x1: {
defaultStyle: {
            default: {"width":"100px","height":"56px","display":"flex","justifyContent":"right","alignItems":"center","paddingRight":"20px"},
            
            },
 default: { 
 
span:12,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"56px","display":"flex","justifyContent":"right","alignItems":"center","paddingRight":"20px"}}}, 
 },
},
tButtonx0x0x0x1x0: {
defaultStyle: {
            default: {"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","position":"unset","left":"370px","top":"182px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","justifyContent":"center","alignItems":"center","alignSelf":"end"},
            
            },
 default: { 
 
label:"搜索",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","position":"unset","left":"370px","top":"182px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","justifyContent":"center","alignItems":"center","alignSelf":"end"},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
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
            default: {"width":"100%","height":"500px","position":"unset","left":"30px","top":"297px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"100%",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"物种编号","key":"taxa_code","stateKey":"","infoKey":"","tooltipKey":"","align":"left","showOverflowTooltip":true},{"label":"物种中文名","key":"taxa_name_c","stateKey":"","infoKey":"","tooltipKey":""},{"label":"拉丁名","key":"taxa_name_en","stateKey":"","infoKey":"","tooltipKey":"","showOverflowTooltip":true,"align":"left"},{"label":"多度","key":"dd","stateKey":"","infoKey":"","tooltipKey":"","align":"right"},{"label":"高度（m）","key":"height","stateKey":"","infoKey":"","tooltipKey":"","align":"right"},{"label":"胸径（cm）","key":"xj","stateKey":"","infoKey":"","tooltipKey":"","align":"right"},{"label":"冠幅长（m）","key":"gfc","stateKey":"","infoKey":"","tooltipKey":"","align":"right"},{"label":"冠幅宽（m）","key":"gfk","stateKey":"","infoKey":"","tooltipKey":"","align":"right"},{"label":"优势种","key":"ysz","stateKey":"","infoKey":"","tooltipKey":""},{"label":"外来入侵物种","key":"wlrqwz","stateKey":"","infoKey":"","tooltipKey":""}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"500px","position":"unset","left":"30px","top":"297px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"0px solid rgba(26,27,31,1)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--business-show-bg30)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px","textAlign":"center"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"highlightRow":{"default":{"backgroundColor":"var(--business-show-bg10)"}},"emptyText":{"default":{"color":"var(--business-white)","background":"unset","backgroundClip":"unset","fontSize":"var(--business-text-size-14)"}}}, 
 },
},
tPaginationBasex0x0x1x1: {
defaultStyle: {
            default: {"width":"100%","height":"36px","borderLeft":"0px none var(--business-show-bg60)","borderTop":"0px none var(--business-show-bg60)","borderRight":"0px none var(--business-show-bg60)","borderBottom":"0px none var(--business-show-bg60)","display":"flex","justifyContent":"flex-end","animationName":"","fontSize":"var(--business-text-size-14)"},
            
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
cStyle:{"wrapper":{"default":{"width":"100%","height":"36px","borderLeft":"0px none var(--business-show-bg60)","borderTop":"0px none var(--business-show-bg60)","borderRight":"0px none var(--business-show-bg60)","borderBottom":"0px none var(--business-show-bg60)","display":"flex","justifyContent":"flex-end","animationName":"","fontSize":"var(--business-text-size-14)"}},"total":{"default":{"color":"var(--business-text-avianize)","position":"unset","right":"0px","left":"0px","width":"auto","fontSize":"var(--business-text-size-14)","marginLeft":"15px","marginRight":"0px"}},"pagerItem":{"default":{"color":"var(--business-white)","backgroundColor":"var(--business-show-bg15)","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","cursor":"pointer","fontSize":"var(--business-text-size-14)","marginLeft":"0px"},"hover":{"color":"var(--business-white)","background":"var(--business-btn-active)","borderLeft":"1px none rgba(255,13,0,1)","borderTop":"1px none rgba(255,13,0,1)","borderRight":"1px none rgba(255,13,0,1)","borderBottom":"1px none rgba(255,13,0,1)","pointerEvents":"auto","overflow":"visible","cursor":"pointer","fontSize":"var(--business-text-size-14)","marginLeft":"0px"},"active":{"color":"var(--business-white)","background":"var(--business-btn-active)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","fontSize":"var(--business-text-size-14)","marginLeft":"0px"}},"pager":{"default":{"color":"var(--business-white)","backgroundColor":"var(--business-show-bg15)","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","fontSize":"var(--business-text-size-12)","marginLeft":"0px"},"hover":{"color":"var(--business-white)","background":"var(--business-btn-active)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","fontSize":"var(--business-text-size-12)","marginLeft":"0px"}},"more":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"fontSize":"var(--business-text-size-12)"}},"sizesWrapper":{"default":{"fontSize":"var(--business-text-size-14)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","display":"none"}},"sizesInput":{"default":{"fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"sizesDropdownWrapper":{"default":{"fontSize":"var(--business-text-size-14)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-dialog-bg)"}},"sizesDropdownItem":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)","backgroundColor":"rgba(26, 27, 31, 0)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"}},"jumpWrapper":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"jumpInput":{"default":{"fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
tListCardx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"63px","overflow":"visible","animationName":"","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
data:[{"title":"样方编码","num":"35078107000107"},{"title":"样地编号","num":"35078107000107"}],
spacingX:2,
col:2,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"100%","height":"63px","overflow":"visible","animationName":"","position":"unset","left":"0px","top":"0px"}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--base-label-bg-color)","width":"30%","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--base-label-title-color)","fontSize":"var(--business-text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","height":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"numBox":{"default":{"backgroundColor":"var(--info-background)","width":"69.5%","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px","height":""}},"num":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--skin-font-color)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"var(--text-size-14)"}}}, 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"1920px","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"55px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"width":"1920px","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"55px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"40px","top":"60px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-16)","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"物种情况",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"40px","top":"60px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-16)","animationName":"","lineHeight":"20px"}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"63px","left":"645px","textAlign":"right","fontSize":"14px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"63px","left":"645px","textAlign":"right","fontSize":"14px","position":"unset","animationName":""}}}, 
 },
},
});
const initPageData = () => {
// 基本信息赋值
state.baseInfo[0].num = global.samplePlotGlobalVariables.baseinfoCode.yfCode
state.baseInfo[1].num =  global.samplePlotGlobalVariables.baseinfoCode.ydCode

// 提供给内部表格
provide('state', state)
console.log('打开样方弹窗 20260128-1654', global.businessDialog.dialogParmas, state);

// state.pointname = global.businessDialog.dialogParmas.title || global.businessDialog.dialogParmas.OUTPUTNAME || global.businessDialog.dialogParmas.POINT_NAME || '';
// state.pointcode = global.businessDialog.dialogParmas.pointCode || global.businessDialog.dialogParmas.point_code;
// state.type = global.businessDialog.dialogParmas.TYPE || global.businessDialog.dialogParmas.type;
// state.year = global.businessDialog.dialogParmas.year;

const init = async () => {
  // state.time = Math.random();
  // 获取检查对象信息
  // await apiRegistry.getCheckObjInfo.request();
  // state.time = Math.random();
  // 获取检查列表
  // apiRegistry.getCheckList.request();

  // 获取类型下拉
  // apiRegistry.getSelectData.request();
  // 获取时间
  // apiRegistry.getDateTime.request();
  // 表格数据
  apiRegistry.getTableList.request();
  
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
const oncellClick1776921748752 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(row);
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
const onchange1778292879569 = (value) => {
// 设置变量值
state.searchValue = value;
};
const onclick1778292898960 = () => {
// 事件交互-请求调用接口
apiRegistry.getTableList.request().then((res) => {
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
 getTableList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TAXA_NAME":"state.searchValue","YF_CODE":"global.samplePlotGlobalVariables.baseinfoCode.yfCode","pageSize":"state.pageInfo.pageSize","pageNum":"state.pageInfo.pageNum","interfaceId":"1ab274012f5d0b70a5faa46ac936fc83"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TAXA_NAME":state.searchValue,"YF_CODE":global.samplePlotGlobalVariables.baseinfoCode.yfCode,"pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"interfaceId":"1ab274012f5d0b70a5faa46ac936fc83"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TAXA_NAME":state.searchValue,"YF_CODE":global.samplePlotGlobalVariables.baseinfoCode.yfCode,"pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"interfaceId":"1ab274012f5d0b70a5faa46ac936fc83"});
                   
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
    dd: item.dd || '-',
    ysz: item.isedge == 1? "是": "否",
    wlrqwz:item.isoutside == 1? "是": "否",
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
                            setPageScale('t-l-c-speciesSituation', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPageData();
onMounted(() => {
setPageScale('t-l-c-speciesSituation', global.appScaleMode, 'normal');
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

 const tColx0x0x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0x0x0.default, componentState.tColx0x0x0x0?.[state.screenSize]));

 const tTextCommonx0x0x0x0x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x0x0x0x0.default, componentState.tTextCommonx0x0x0x0x0?.[state.screenSize]));

 const tSearchx0x0x0x0x1ComputedData = computed(() => _.merge({}, componentState.tSearchx0x0x0x0x1.default, componentState.tSearchx0x0x0x0x1?.[state.screenSize]));

 const tColx0x0x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x0x0x1.default, componentState.tColx0x0x0x1?.[state.screenSize]));

 const tButtonx0x0x0x1x0ComputedData = computed(() => _.merge({}, componentState.tButtonx0x0x0x1x0.default, componentState.tButtonx0x0x0x1x0?.[state.screenSize]));

 const tColx0x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x0x1.default, componentState.tColx0x0x1?.[state.screenSize]));

 const tTablex0x0x1x0ComputedData = computed(() => _.merge({}, componentState.tTablex0x0x1x0.default, componentState.tTablex0x0x1x0?.[state.screenSize]));

 const tPaginationBasex0x0x1x1ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x0x1x1.default, componentState.tPaginationBasex0x0x1x1?.[state.screenSize]));

 const tListCardx0x1ComputedData = computed(() => _.merge({}, componentState.tListCardx0x1.default, componentState.tListCardx0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

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
tColx0x0x0x0ComputedData,
tTextCommonx0x0x0x0x0ComputedData,
tSearchx0x0x0x0x1ComputedData,
tColx0x0x0x1ComputedData,
tButtonx0x0x0x1x0ComputedData,
tColx0x0x1ComputedData,
tTablex0x0x1x0ComputedData,
tPaginationBasex0x0x1x1ComputedData,
tListCardx0x1ComputedData,
tComponentx0x2ComputedData,
tTextx0x3ComputedData,
tTextx0x4ComputedData,
onchange1778292879569,
onclick1778292898960,
oncellClick1776921748752,
oncurrentChange1776912448071,
};
},
}
</script>

<style scoped>
.t-l-c-speciesSituation {
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
.t-l-c-speciesSituation .speciesSituation-t-row-0-0 {
position: absolute !important;
top: 100px;
left: 2px;
width: 100%;
height: 541px;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
}

.t-l-c-speciesSituation .speciesSituation-t-col-0-0-0 {
position: relative;
top: null;
left: null;
width: 100%;
height: 56px;
pointer-events: auto;
display: flex;
justify-content: space-between;
align-items: center;
gap: auto;
background: var(--business-show-bg30);
fill-type: color;
}

.t-l-c-speciesSituation .speciesSituation-t-col-0-0-0-0 {
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
background: rgba(0, 0, 0, 0);
fill-type: color;
gap: 10px;
}

.t-l-c-speciesSituation .speciesSituation-t-text-common-0-0-0-0-0 {
position: unset;
top: 132px;
left: 41px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-speciesSituation .speciesSituation-t-search-0-0-0-0-1 {
position: unset;
top: 182px;
left: 42px;
width: 348px;
height: 32px;
pointer-events: auto;
}

.t-l-c-speciesSituation .speciesSituation-t-col-0-0-0-1 {
position: relative;
top: null;
left: null;
width: 100px;
height: 56px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
padding-right: 20px;
}

.t-l-c-speciesSituation .speciesSituation-t-button-0-0-0-1-0 {
position: unset;
top: 182px;
left: 370px;
width: 50px;
height: 32px;
pointer-events: auto;
}

.t-l-c-speciesSituation .speciesSituation-t-col-0-0-1 {
position: relative;
top: null;
left: null;
width: 100px;
height: auto;
pointer-events: auto;
display: block;
}

.t-l-c-speciesSituation .speciesSituation-t-table-0-0-1-0 {
position: unset;
top: 297px;
left: 30px;
width: 100%;
height: 500px;
pointer-events: auto;
}

.t-l-c-speciesSituation .speciesSituation-t-pagination-base-0-0-1-1 {
position: unset;
top: 786px;
left: 33.5px;
width: 100%;
height: 36px;
pointer-events: auto;
}

.t-l-c-speciesSituation .speciesSituation-t-list-card-0-1 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 63px;
pointer-events: auto;
}

.t-l-c-speciesSituation .speciesSituation-t-component-0-2 {
position: absolute !important;
top: 55px;
left: 0px;
width: 1920px;
height: 28px;
pointer-events: auto;
}

.t-l-c-speciesSituation .speciesSituation-t-text-0-3 {
position: absolute !important;
top: 60px;
left: 40px;
width: 130px;
height: 20px;
pointer-events: auto;
}

.t-l-c-speciesSituation .speciesSituation-t-text-0-4 {
position: absolute !important;
top: 63px;
left: 645px;
width: 164px;
height: 19px;
pointer-events: auto;
}
</style>
