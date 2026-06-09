<template>
  <div id="t-l-c-samplePlotOverview" class="t-l-c-samplePlotOverview" ><t-table id="t-table-f932.82cbb0837" class="samplePlotOverview-t-table-0-0"  :height="tTablex0x0ComputedData.height" :stripe="tTablex0x0ComputedData.stripe" :border="tTablex0x0ComputedData.border" :auto-scroll="tTablex0x0ComputedData.autoScroll" :speed="tTablex0x0ComputedData.speed" :columns="replaceCssVariables(filterData(state.tableColumns, componentPropBindingMap?.['t-table-f932.82cbb0837']['columns'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data="replaceCssVariables(filterData(state.list, componentPropBindingMap?.['t-table-f932.82cbb0837']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x0ComputedData.defaultSort" :c-style="tTablex0x0ComputedData.cStyle" @cell-click="oncellClick1776655522867_0_0"></t-table><t-rect id="t-rect-f121.7459dd036" class="samplePlotOverview-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-text-unit id="t-text-unit-bad3.9a77bb793" class="samplePlotOverview-t-text-unit-0-2"  :c-style="tTextUnitx0x2ComputedData.cStyle" :content="replaceCssVariables(filterData(state.currentNum, componentPropBindingMap?.['t-text-unit-bad3.9a77bb793']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x2ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x2ComputedData.showOverflowTooltip"></t-text-unit><t-text-common id="t-text-common-1266.ab7545edd" class="samplePlotOverview-t-text-common-0-3"  :label="replaceCssVariables(filterData(state.selectedLabel, componentPropBindingMap?.['t-text-common-1266.ab7545edd']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x3ComputedData.editable" :c-style="tTextCommonx0x3ComputedData.cStyle"></t-text-common><t-component id="t-component-85c6.f0ef71289" class="samplePlotOverview-t-component-0-4"  :name="tComponentx0x4ComputedData.name" :c-style="tComponentx0x4ComputedData.cStyle" :src="tComponentx0x4ComputedData.src" :component-name="tComponentx0x4ComputedData.componentName"></t-component><t-list-card-multiple-choice id="t-list-card-multiple-choice-aafc.fe6b3cd0e" class="samplePlotOverview-t-list-card-multiple-choice-0-5"  :c-style="tListCardMultipleChoicex0x5ComputedData.cStyle" :key-word="tListCardMultipleChoicex0x5ComputedData.keyWord" :default-checked="replaceCssVariables(filterData(state.selectedCard, componentPropBindingMap?.['t-list-card-multiple-choice-aafc.fe6b3cd0e']['defaultChecked'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data-alias="tListCardMultipleChoicex0x5ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.cardList, componentPropBindingMap?.['t-list-card-multiple-choice-aafc.fe6b3cd0e']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tListCardMultipleChoicex0x5ComputedData.unit" @card-click="oncardClick1776655796352_0_0"></t-list-card-multiple-choice><t-text-unit id="t-text-unit-6c8f.3ea4adfb2" class="samplePlotOverview-t-text-unit-0-6"  :c-style="tTextUnitx0x6ComputedData.cStyle" :justify="tTextUnitx0x6ComputedData.justify" :align="tTextUnitx0x6ComputedData.align" :content="tTextUnitx0x6ComputedData.content" :unit="tTextUnitx0x6ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x6ComputedData.showOverflowTooltip"></t-text-unit><t-pagination-base id="t-pagination-base-d2d4.6b152d36b" class="samplePlotOverview-t-pagination-base-0-7"  :total="replaceCssVariables(filterData(state.pageInfo.total, componentPropBindingMap?.['t-pagination-base-d2d4.6b152d36b']['total'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x7ComputedData.small" :page-size="replaceCssVariables(filterData(state.pageInfo.pageSize, componentPropBindingMap?.['t-pagination-base-d2d4.6b152d36b']['pageSize'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :pager-count="tPaginationBasex0x7ComputedData.pagerCount" :current-page="replaceCssVariables(filterData(state.pageInfo.pageNum, componentPropBindingMap?.['t-pagination-base-d2d4.6b152d36b']['currentPage'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x7ComputedData.layout" :page-sizes="tPaginationBasex0x7ComputedData.pageSizes" :disabled="tPaginationBasex0x7ComputedData.disabled" :c-style="tPaginationBasex0x7ComputedData.cStyle" @current-change="oncurrentChange1776848019156_0_1"></t-pagination-base><t-search id="t-search-5240.945c4419" class="samplePlotOverview-t-search-0-8"  :type="tSearchx0x8ComputedData.type" :input-value="replaceCssVariables(filterData(state.pointCode, componentPropBindingMap?.['t-search-5240.945c4419']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tSearchx0x8ComputedData.maxlength" :minlength="tSearchx0x8ComputedData.minlength" :show-word-limit="tSearchx0x8ComputedData.showWordLimit" :placeholder="tSearchx0x8ComputedData.placeholder" :clearable="tSearchx0x8ComputedData.clearable" :show-password="tSearchx0x8ComputedData.showPassword" :disabled="tSearchx0x8ComputedData.disabled" :prefix-icon="tSearchx0x8ComputedData.prefix-icon" :suffix-icon="tSearchx0x8ComputedData.suffix-icon" :rows="tSearchx0x8ComputedData.rows" :autosize="tSearchx0x8ComputedData.autosize" :name="tSearchx0x8ComputedData.name" :readonly="tSearchx0x8ComputedData.readonly" :step="tSearchx0x8ComputedData.step" :autofocus="tSearchx0x8ComputedData.autofocus" :form="tSearchx0x8ComputedData.form" :label="tSearchx0x8ComputedData.label" :tabindex="tSearchx0x8ComputedData.tabindex" :validate-event="tSearchx0x8ComputedData.validateEvent" :c-style="tSearchx0x8ComputedData.cStyle" :has-search-btn="tSearchx0x8ComputedData.hasSearchBtn" @input="oninput1776655471591_0_0"></t-search><t-button id="t-button-c903.8043e1fe9" class="samplePlotOverview-t-button-0-9"  :label="tButtonx0x9ComputedData.label" :round="tButtonx0x9ComputedData.round" :plain="tButtonx0x9ComputedData.plain" :disabled="tButtonx0x9ComputedData.disabled" :type="tButtonx0x9ComputedData.type" :size="tButtonx0x9ComputedData.size" :native-type="tButtonx0x9ComputedData.native-type" :c-style="tButtonx0x9ComputedData.cStyle" @click="onclick1765623128634"></t-button><t-select id="t-select-9c75.ca8dc4e75" class="samplePlotOverview-t-select-0-10"  :active-value="replaceCssVariables(filterData(state.selectTwoValue, componentPropBindingMap?.['t-select-9c75.ca8dc4e75']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.options, componentPropBindingMap?.['t-select-9c75.ca8dc4e75']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x10ComputedData.alias" :multiple="tSelectx0x10ComputedData.multiple" :placeholder="tSelectx0x10ComputedData.placeholder" :clearable="tSelectx0x10ComputedData.clearable" :disabled="tSelectx0x10ComputedData.disabled" :name="tSelectx0x10ComputedData.name" :autocomplete="tSelectx0x10ComputedData.autocomplete" :filterable="tSelectx0x10ComputedData.filterable" :no-match-text="tSelectx0x10ComputedData.no-match-text" :no-data-text="tSelectx0x10ComputedData.no-data-text" :c-style="tSelectx0x10ComputedData.cStyle" @change="onchange1776654727629_0_0"></t-select><t-date-picker id="t-date-picker-45d8.3af263ace" class="samplePlotOverview-t-date-picker-0-11"  :placeholder="tDatePickerx0x11ComputedData.placeholder" :start-placeholder="tDatePickerx0x11ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x11ComputedData.endPlaceholder" :type="tDatePickerx0x11ComputedData.type" :clearable="tDatePickerx0x11ComputedData.clearable" :range-separator="tDatePickerx0x11ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeValue, componentPropBindingMap?.['t-date-picker-45d8.3af263ace']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x11ComputedData.separator" :readonly="tDatePickerx0x11ComputedData.readonly" :editable="tDatePickerx0x11ComputedData.editable" :c-style="tDatePickerx0x11ComputedData.cStyle" @date-change="ondateChange1776654733493_0_0"></t-date-picker><t-image-base id="t-image-base-1b0e.d368d2bd4" class="samplePlotOverview-t-image-base-0-12"  :src="tImageBasex0x12ComputedData.src" :fit="tImageBasex0x12ComputedData.fit" :c-style="tImageBasex0x12ComputedData.cStyle"></t-image-base></div>
</template>

<script>
import io from 'socket.io-client';
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
import { TButton, TComponent, TDatePicker, TImageBase, TListCardMultipleChoice, TPaginationBase, TRect, TSearch, TSelect, TTable, TTextCommon, TTextUnit } from '@ths/design';

export default {
  components: {
    TButton,
    TComponent,
    TDatePicker,
    TImageBase,
    TListCardMultipleChoice,
    TPaginationBase,
    TRect,
    TSearch,
    TSelect,
    TTable,
    TTextCommon,
    TTextUnit,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-table-f932.82cbb0837":{"attributeName":"tTablex0x0","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-f121.7459dd036":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-bad3.9a77bb793":{"attributeName":"tTextUnitx0x2","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-common-1266.ab7545edd":{"attributeName":"tTextCommonx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-component-85c6.f0ef71289":{"attributeName":"tComponentx0x4","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-list-card-multiple-choice-aafc.fe6b3cd0e":{"attributeName":"tListCardMultipleChoicex0x5","cStyle":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]},"unit":{"filters":[]}},"t-text-unit-6c8f.3ea4adfb2":{"attributeName":"tTextUnitx0x6","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-pagination-base-d2d4.6b152d36b":{"attributeName":"tPaginationBasex0x7","total":{"filters":[]},"small":{"filters":[]},"pageSize":{"filters":[]},"pagerCount":{"filters":[]},"currentPage":{"filters":[]},"layout":{"filters":[]},"pageSizes":{"filters":[]},"disabled":{"filters":[]},"cStyle":{"filters":[]}},"t-search-5240.945c4419":{"attributeName":"tSearchx0x8","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]},"hasSearchBtn":{"filters":[]}},"t-button-c903.8043e1fe9":{"attributeName":"tButtonx0x9","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-select-9c75.ca8dc4e75":{"attributeName":"tSelectx0x10","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-45d8.3af263ace":{"attributeName":"tDatePickerx0x11","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-1b0e.d368d2bd4":{"attributeName":"tImageBasex0x12","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}}};
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
   tableColumns: [],
   currentSelectYf: "",
   currentSelectYd: "",
   pointCode: "",
   options: [],
   currentNum: "200",
   selectedLabel: "全部样地",
   keyWord: "",
   selectTitle: "",
   selectedCode: "",
   listData: [],
   cardList: [],
   taskTypeData: [],
   taskCode: "",
   dateType: "",
   dateRange: {"start":"","end":"","value":[]},
   maxTimeValue: "",
   selectTwoValue: "",
   timeValue: "",
   pointName: "",
   list: [],
   selectedCard: [],
   pageInfo: {"pageNum":1,"pageSize":10,"total":0,"pages":0},
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
tTablex0x0: {
defaultStyle: {
            default: {"width":"410px","height":"435px","position":"unset","left":"20px","top":"287px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"100%",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"435px","position":"unset","left":"20px","top":"287px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"0px solid rgba(26,27,31,1)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--business-show-bg30)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px","textAlign":"center"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"highlightRow":{"default":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"410px","height":"47px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","position":"unset","left":"20px","top":"108px","background":"var(--business-show-bg30)","fillType":"color"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"47px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","position":"unset","left":"20px","top":"108px","background":"var(--business-show-bg30)","fillType":"color"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tTextUnitx0x2: {
defaultStyle: {
            default: {"width":"100px","height":"20px","flexDirection":"row","justifyContent":"center","alignItems":"center","top":"121px","left":"240px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100px","height":"20px","flexDirection":"row","justifyContent":"center","alignItems":"center","top":"121px","left":"240px","position":"unset"}},"text":{"default":{"fontFamily":"思源","fontWeight":"400","fontSize":"20px","textAlign":"left","lineHeight":"16px","letterSpacing":"0px","color":"#FEDF71","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"width":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"12px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","color":"#FEDF71","background":"unset","backgroundClip":"unset","marginBottom":"-5px"}}},
content:"200",
unit:"个",
showOverflowTooltip:true, 
 },
},
tTextCommonx0x3: {
defaultStyle: {
            default: {"width":"74px","height":"20px","color":"var(--business-white)","fontFamily":"思源","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"50px","top":"121px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"全部样地",
editable:false,
cStyle:{"wrapper":{"default":{"width":"74px","height":"20px","color":"var(--business-white)","fontFamily":"思源","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"50px","top":"121px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tComponentx0x4: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"20px","top":"20px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"20px","top":"20px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/71ed927f19ff41e78116c906842de342_19/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tListCardMultipleChoicex0x5: {
defaultStyle: {
            default: {"width":"417px","height":"58px","overflowY":"auto","position":"unset","left":"19px","top":"169px","display":"grid","grid-template-columns":"repeat(auto-fill,97px)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"0px","paddingRight":"0px","marginLeft":"0px","marginRight":"0px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"417px","height":"58px","overflowY":"auto","position":"unset","left":"19px","top":"169px","display":"grid","grid-template-columns":"repeat(auto-fill,97px)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"0px","paddingRight":"0px","marginLeft":"0px","marginRight":"0px","animationName":""}},"cardItem":{"default":{"boxSizing":"border-box","padding":"4px","background":"rgba(20, 112, 204, 0.3)","width":"97px","height":"54px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px solid rgba(255,255,255,0)","borderTop":"1px solid rgba(255,255,255,0)","borderRight":"1px solid rgba(255,255,255,0)","borderBottom":"1px solid rgba(255,255,255,0)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","display":"block","position":"relative","cursor":"pointer"},"active":{"background":"var(--business-tab-content-active-bg)","width":"97px","height":"54px","overflow":"hidden","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(138,210,255,0.8)","borderTop":"1px solid rgba(138,210,255,0.8)","borderRight":"1px solid rgba(138,210,255,0.8)","borderBottom":"1px solid rgba(138,210,255,0.8)","color":""},"hover":{"width":"97px","height":"54px","overflow":"hidden","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(138,210,255,0.8)","borderTop":"1px solid rgba(138,210,255,0.8)","borderRight":"1px solid rgba(138,210,255,0.8)","borderBottom":"1px solid rgba(138,210,255,0.8)","color":"var(--business-text-avianize)"}},"cardUnchecked":{"hover":{"background":"var(--business-tab-content-active-bg)","width":"97px","height":"54px","overflow":"hidden"},"default":{"backgroundColor":"rgba(20, 112, 204, 0.3)","width":"97px","height":"54px","overflow":"hidden"}},"cardItemLabel":{"default":{"height":"14px","lineHeight":"14px","fontSize":"14px","color":"var(--business-text-avianize)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","top":"-21px","position":"relative"},"hover":{"color":"var(--business-text-avianize)"},"active":{"color":"var(--business-text-avianize)"}},"listBody":{"default":{"width":"410px","overflow":"visible","display":"grid","alignItems":"stretch","justifyItems":"stretch","alignContent":"space-around","justifyContent":"space-around","paddingLeft":"0px","paddingRight":"0px","marginLeft":"0px","marginRight":"0px","height":"auto","grid-template-columns":"repeat(auto-fill,97px)"}},"cardItemValueContent":{"default":{"height":"24px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"24px","fontFamily":"DIN-bold","fontWeight":"700","color":"#F9D000"}},"cardItemValueUnit":{"default":{"height":"12px","fontSize":"12px","color":"var(--business-text-avianize)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginLeft":"6px","lineHeight":"21px"}},"cardItemValue":{"default":{"display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","top":"17px","height":"24px","position":"relative"}},"cardItemLabelContent":{"active":{"color":"var(--business-text-avianize)"},"hover":{"color":"var(--business-text-avianize)"}},"cardItemIcon":{"default":{"position":"absolute","right":"4px","width":"14px","height":"14px","backgroundImage":"var(--multiple-card-unchecked)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","bottom":"4px"},"hover":{"backgroundImage":"var(--multiple-card-checked)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""},"active":{"backgroundSize":"contain,contain","-webkit-mask-size":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundPosition":"50% 50%,50% 50%","-webkit-mask-position":"","backgroundImage":"var(--multiple-card-checked)","-webkit-mask-image":""}}},
keyWord:"title",
defaultChecked:[],
dataAlias:{"value":"num","label":"title","icon":"","unit":""},
data:[],
unit:"个", 
 },
},
tTextUnitx0x6: {
defaultStyle: {
            default: {"width":"261px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","position":"unset","left":"54px","top":"26px","lineHeight":"20px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"261px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","position":"unset","left":"54px","top":"26px","lineHeight":"20px","animationName":""}},"unit":{"default":{"fontSize":"17px","fontFamily":"方正综艺","lineHeight":"20px"}},"text":{"default":{"lineHeight":"20px","fontSize":"17px"}}},
justify:"flex-start",
align:"flex-end",
content:"样地概览",
unit:"",
showOverflowTooltip:true, 
 },
},
tPaginationBasex0x7: {
defaultStyle: {
            default: {"width":"403px","height":"32px","position":"unset","left":"23.5px","top":"776px","color":"","animationName":"","display":"flex","justifyContent":"right","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingTop":"unset","paddingBottom":"unset","marginTop":"10px","alignItems":"center"},
            
            },
 default: { 
 
total:0,
small:false,
pageSize:5,
pagerCount:5,
currentPage:1,
layout:" prev, pager, next,sizes,total",
pageSizes:[5,10,15,20,30,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"403px","height":"32px","position":"unset","left":"23.5px","top":"776px","color":"","animationName":"","display":"flex","justifyContent":"right","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingTop":"unset","paddingBottom":"unset","marginTop":"10px","alignItems":"center"}},"pagerItem":{"default":{"color":"var(--skin-font-color)","fontSize":"14px","lineHeight":"32px","borderLeft":"1px none #366B92","borderTop":"1px none #366B92","borderRight":"1px none #366B92","borderBottom":"1px none #366B92","marginLeft":"0px","marginRight":"5px","backgroundColor":"var(--business-select-item-bg)"},"active":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundColor":"#6FAED9","color":"#FFFFFF","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""},"hover":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","color":"#FFFFFF","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"#6FAED9"}},"pager":{"default":{"borderLeft":"1px none var(--theme-btn-default)","borderTop":"1px none var(--theme-btn-default)","borderRight":"1px none var(--theme-btn-default)","borderBottom":"1px none var(--theme-btn-default)","color":"var(--t-color-text-green)","marginLeft":"0px","marginRight":"0px","backgroundColor":"#0D4895"},"hover":{"color":"#FFFFFF","borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--t-button-bg)"}},"more":{"default":{"color":"var(--t-color-text-green)"},"hover":{"color":"#366B92","backgroundColor":""}},"total":{"default":{"color":"var(--skin-font-color)","paddingRight":"0px","paddingLeft":"0px","fontSize":"14px","marginRight":"0px","marginLeft":"20px","display":"flex"}},"sizesWrapper":{"default":{"color":"var(--t-color-text-green)","fontSize":"14px","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","marginRight":"10px","marginLeft":"10px","display":"none"}},"sizesInput":{"default":{"color":"var(--common-white08)","borderLeft":"1px solid var(--common-white08)","borderTop":"1px solid var(--common-white08)","borderRight":"1px solid var(--common-white08)","borderBottom":"1px solid var(--common-white08)","backgroundColor":"","display":"none"},"hover":{"borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"jumpWrapper":{"default":{"color":"var(--t-color-text-green)","backgroundColor":""}},"jumpInput":{"default":{"color":"var(--t-color-text-green)","backgroundColor":"var(--business-select-item-bg)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"hover":{"color":"var(--common-white1)","borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"sizesDropdownWrapper":{"default":{"backgroundColor":"","color":"rgba(255, 255, 255, 0.9)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","background":"var(--t-body-background)","fillType":"color"}},"sizesDropdownItem":{"default":{"color":"rgba(255, 255, 255, 0.9)","backgroundColor":"","borderLeft":"1px none #00828A","borderTop":"1px none #00828A","borderRight":"1px none #00828A","borderBottom":"1px none #00828A"},"active":{"backgroundColor":"var(--business-select-item-bg)","color":"var(--business-text-hover)"},"hover":{"color":"var(--business-text-hover)","backgroundColor":"var(--business-select-item-bg)"}}}, 
 },
},
tSearchx0x8: {
defaultStyle: {
            default: {"width":"348px","height":"32px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","left":"20px","top":"238px","position":"unset"},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入编码",
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
cStyle:{"wrapper":{"default":{"width":"348px","height":"32px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","left":"20px","top":"238px","position":"unset"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"prefix":{"default":{"color":"var(--business-text-avianize)"}}},
hasSearchBtn:false, 
 },
},
tButtonx0x9: {
defaultStyle: {
            default: {"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","position":"unset","left":"381px","top":"238px"},
            
            },
 default: { 
 
label:"搜索",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","position":"unset","left":"381px","top":"238px"},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tSelectx0x10: {
defaultStyle: {
            default: {"width":"199px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","top":"61px","left":"231px"},
            
            },
 default: { 
 
activeValue:"all",
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
cStyle:{"wrapper":{"default":{"width":"199px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","top":"61px","left":"231px"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tDatePickerx0x11: {
defaultStyle: {
            default: {"width":"200px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px","left":"20px","top":"61px","position":"unset"},
            
            },
 default: { 
 
placeholder:"请选择",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"year",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"200px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px","left":"20px","top":"61px","position":"unset"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","lineHeight":"20px"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","lineHeight":"20px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"30px"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--skin-font-color)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--skin-font-color)"}},"operatorArrow":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--skin-font-color)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--skin-font-color)","borderLeft":"1px solid var(--skin-font-color)","borderTop":"1px solid var(--skin-font-color)","borderRight":"1px solid var(--skin-font-color)","borderBottom":"1px solid var(--skin-font-color)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--skin-font-color)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tImageBasex0x12: {
defaultStyle: {
            default: {"width":"16px","height":"16px","position":"unset","left":"34px","top":"123px"},
            
            },
 default: { 
 
src:"assets/images/2026-04-20/4f2b7bd29310486c999ab5788e7a8e58.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"16px","height":"16px","position":"unset","left":"34px","top":"123px"}}}, 
 },
},
});
const handleClickCard = (item) => {

state.selectTitle = item?.burning_status_name
state.selectedCode = item?.PROBLEM_TYPE_CODE
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'changeProblemStatus',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      'PROBLEM_TYPE_NAME': state.selectTitle,
      'PROBLEM_TYPE_CODE': state.selectedCode,
      'PROBLEM_NAME': state.keyWord
    }
  }
);
};
const sendMsgToMap = () => {
// 清除地图涟漪效果
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'clearGotoPoint',  // 消息类型名称
  }
);
let currentType = ''
if (state.selectTwoValue === 'all') {
  if (state.selectedCard.length) {
    currentType = ''
  } else {
    currentType = 'asdf'
  }
} else {
  currentType = state.selectTwoValue
}
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'updateSamplePlotStatus',  // 消息类型名称
    data: {
      showType: state.selectTwoValue === 'all' ? 'samplePlot' : 'quadrat', // 显示类型, samplePlot(样地)，quadrat(样方)
      regionCode: global.regionaQuery.regionCode, // 区域编码
      type: currentType, // 类型
      typeDetail: state.selectTwoValue === 'all' ? '' : (state.currentSelectYf || 'aaa'), // 样方类型（样地时传空）
      year: state.timeValue, // 年份
    }
  }
);
};
const goToLocation = (column,row) => {

if (["定位"].includes(column.label)) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: "gotoPoint",
    data: {
      "longitude": row.longitude,
      "latitude": row.latitude,
    }
  });
}


};
const setTimeValue = (data) => {
state.dateRange.value = data || [];
state.dateRange.start = data[0] || "";
state.dateRange.end = data[1] || "";
};
const changeTwoSelect = () => {
// 调接口-重新获取所有数据
getData();

// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  // 消息内容
  data: [
    {
      "code": "value",
      "shareCode": "IS_CONNECT_SECTION",
      "defaultValue": "",
      "runtimeValue": state.selectTwo
    },
    {
      "code": "content",
      "shareCode": "",
      "defaultValue": "",
      "runtimeValue": state.selectTwo ? '跨界断面' : '所有断面'
    },
    {
      "code": "defaultTab",
      "name": "",
      "defaultValue": "pointWq",
      "shareCode": "defaultTab",
      "runtimeValue": "pointWq"
    }
  ]
});
};
const changeTime = () => {
async function getData() {
  if (state.selectTwoValue === 'all') {
    // 获取样地数据
    await apiRegistry.getYdNum.request();
    await apiRegistry.getYdList.request();
  } else {
    // 获取样方数据
    await apiRegistry.getYfTotalNum.request();
    await apiRegistry.getYfNum.request();
    await apiRegistry.getYfList.request();
  }
  sendMsgToMap();
}
getData()
};
const clickCard = (checkedList,item) => {
console.log(checkedList, item, 6667)
if (!checkedList.length) {
  state.selectedCard = []
  state.currentSelectYd = ''
  state.currentSelectYf = ''
  state.list = []
} else {
  state.selectedCard = checkedList.map(item => item.title)
  const selectType = checkedList.map(item => item.type).join(',')
  if (state.selectTwoValue === 'all') {
    state.currentSelectYd = selectType
    apiRegistry.getYdList.request();
  } else {
    state.currentSelectYf = selectType
    apiRegistry.getYfList.request();
  }
}
sendMsgToMap();
};
const handleType = (item,value) => {
async function getData() {
  if (value === 'all') {
    state.selectedLabel = '全部样地'
    // 获取样地数据
    await apiRegistry.getYdNum.request();
    await apiRegistry.getYdList.request();
  } else {
    state.selectedLabel = item.label
    // 获取样方数据
    await apiRegistry.getYfTotalNum.request();
    await apiRegistry.getYfNum.request();
    await apiRegistry.getYfList.request();
  }
  sendMsgToMap();
}
getData()
};
const initPage = () => {
handleTableColumns();
async function getData(){
  await apiRegistry.getLatestTime.request();
  await apiRegistry.getYdNum.request();
  await apiRegistry.getYdList.request();
  sendMsgToMap();
}
getData()
};
const handleSearch = () => {
if (state.selectTwoValue === 'all') {
  // 获取样地数据
  apiRegistry.getYdList.request();
} else {
  // 获取样方数据
  apiRegistry.getYfList.request();
}
};
const appLoaded = (resName,resCode) => {
if(resCode === 'onemap_manual_overviewsample'){
  debugger
  sendMsgToMap(); 
}
};
const handleTableColumns = () => {
const twoColumnLabel = state.selectTwoValue !== 'all' ? '样方编码' : '样地编码'
state.tableColumns = [
  {
    "label": "定位",
    "key": "icon",
    "align": "center",
    "operationList": [],
    "stateList": [
      {
        "name": "true",
        "fontStyle": {
          "color": "",
          "fontSize": "",
          "fontWeight": "normal",
          "padding": "",
          "margin": "",
          "width": "",
          "height": "",
          "lineHeight": "",
          "borderRadius": "",
          "borderWidth": "0PX",
          "borderStyle": "solid",
          "background": "",
          "backgroundImage": "",
          "backgroundSize": "100%"
        },
        "imageStyle": {
          "backgroundImage": "var(--business-position)",
          "marginRight": "",
          "borderRadius": "",
          "width": "14PX",
          "height": "16PX"
        },
        "cellStyle": {
          "background": ""
        }
      },
      {
        "name": "false",
        "fontStyle": {
          "color": "",
          "fontSize": "",
          "fontWeight": "normal",
          "padding": "",
          "margin": "",
          "width": "",
          "height": "",
          "lineHeight": "",
          "borderRadius": "",
          "borderWidth": "0PX",
          "borderStyle": "solid",
          "background": "",
          "backgroundImage": "",
          "backgroundSize": "100%"
        },
        "imageStyle": {
          "backgroundImage": "assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg",
          "marginRight": "",
          "borderRadius": "",
          "width": "14PX",
          "height": "16PX"
        },
        "cellStyle": {
          "background": ""
        }
      }
    ],
    "style": {
      "imageStyle": {
        "backgroundImage": "var(--business-position)",
        "width": "14PX",
        "height": "16PX",
        "margin": "0",
        "vertical-align": "-3px"
      },
      "fontStyle": {
        "padding": "",
        "background": ""
      }
    },
    "width": "44PX",
    "type": "default",
    "stateKey": "iconStatus"
  },
  {
    "label": `${twoColumnLabel}`,
    "key": "point_code",
    "align": "center",
    "operationList": [],
    "stateList": [
      {
        "name": "1",
        "fontStyle": {
          "color": "",
          "fontSize": "",
          "fontWeight": "normal",
          "padding": "",
          "margin": "",
          "width": "",
          "height": "",
          "lineHeight": "",
          "borderRadius": "",
          "borderWidth": "0PX",
          "borderStyle": "solid",
          "background": "",
          "backgroundImage": "",
          "backgroundSize": "100%"
        },
        "imageStyle": {
          "borderRadius": "",
          "width": "21px",
          "height": "17px",
          "margin-right": "-1px",
          "margin-left": "-18px",
          "transform": "translateX(70px)",
          "backgroundImage": "var(--business-section-auto)"
        },
        "cellStyle": {
          "background": ""
        }
      },
      {
        "name": "0",
        "fontStyle": {
          "color": "",
          "fontSize": "",
          "fontWeight": "normal",
          "padding": "",
          "margin": "",
          "width": "",
          "height": "",
          "lineHeight": "",
          "borderRadius": "",
          "borderWidth": "0PX",
          "borderStyle": "solid",
          "background": "",
          "backgroundImage": "",
          "backgroundSize": "100%"
        },
        "imageStyle": {
          "marginRight": "",
          "borderRadius": "",
          "width": "",
          "height": ""
        },
        "cellStyle": {
          "background": ""
        }
      }
    ],
    "showOverflowTooltip": true,
    "headerAlign": "left",
    "style": {
      "fontStyle": {
        "fontSize": "var(--business-text-size-14)"
      },
      "imageStyle": {
        "backgroundImage": ""
      }
    },
    "type": "default",
    "stateKey": "isShowIcon",
    "infoKey": ""
  },
  {
    "label": "日期",
    "key": "create_time",
    "align": "center",
    "operationList": [],
    "stateList": [],
    "showOverflowTooltip": true,
    "style": {
      "fontStyle": {
        "fontSize": "var(--business-text-size-14)"
      }
    }
  }
]
};
const watchRegionCode = () => {
watch(() => global.regionaQuery.regionCode, (newValue) => {
  if (newValue) {
    getData()
  }
})
async function getData() {
  if (state.selectTwoValue === 'all') {
    // 获取样地数据
    await apiRegistry.getYdNum.request();
    await apiRegistry.getYdList.request();
  } else {
    // 获取样方数据
      await apiRegistry.getYfTotalNum.request();
    await apiRegistry.getYfNum.request();
    await apiRegistry.getYfList.request();
  }
  sendMsgToMap();
}
};
const oncellClick1776655522867_0_0 = (row,column,cell,event) => {
// 执行自定义方法
goToLocation(column,row);
};
const oncardClick1776655796352_0_0 = (clickItem,checkedList) => {
// 执行自定义方法
clickCard(checkedList,clickItem);
};
const oncurrentChange1776848019156_0_1 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
// 执行自定义方法
handleSearch();
};
const oninput1776655471591_0_0 = (value) => {
// 设置变量值
state.pointCode = value;
};
const onclick1765623128634 = () => {
// 执行自定义方法
handleSearch();
};
const onchange1776654727629_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.selectTwoValue = value;
// 执行自定义方法
handleType(selectValueItem,value);
// 执行自定义方法
handleTableColumns();
};
const ondateChange1776654733493_0_0 = (data) => {
// 设置变量值
state.timeValue = data;
// 执行自定义方法
changeTime();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getYdNum: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"REGION_PATH":"global.regionaQuery.regionCode","YEAR":"state.timeValue","interfaceId":"d01a478a7bd37e4385129012d0564af0"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_PATH":global.regionaQuery.regionCode,"YEAR":state.timeValue,"interfaceId":"d01a478a7bd37e4385129012d0564af0"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"REGION_PATH":global.regionaQuery.regionCode,"YEAR":state.timeValue,"interfaceId":"d01a478a7bd37e4385129012d0564af0"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getYdNum'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.cardList = data.map(item => {
    return {
      ...item,
      title: item.typeName,
      num: item.number
    }
  })
  // 默认选中第一个样地
  state.selectedCard = [state.cardList[0].title]
  state.currentSelectYd = state.cardList[0].type
  // 计算总数
  state.currentNum = state.cardList.reduce((sum, item) => {
    const num = Number(item.num);
    return sum + (isNaN(num) ? 0 : num);
  }, 0);
} else {
  state.cardList = []
  state.selectedCard = []
  state.currentSelectYd = ''
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
 getYfNum: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TYPE":"state.selectTwoValue","REGION_PATH":"global.regionaQuery.regionCode","YEAR":"state.timeValue","interfaceId":"4ac95dfdf02046724309ba4676f44f25"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TYPE":state.selectTwoValue,"REGION_PATH":global.regionaQuery.regionCode,"YEAR":state.timeValue,"interfaceId":"4ac95dfdf02046724309ba4676f44f25"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TYPE":state.selectTwoValue,"REGION_PATH":global.regionaQuery.regionCode,"YEAR":state.timeValue,"interfaceId":"4ac95dfdf02046724309ba4676f44f25"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getYfNum'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.cardList = data.map(item => {
    return {
      ...item,
      title: item.typeName,
      num: item.number
    }
  })
  // 默认选中第一个样方
  state.selectedCard = [state.cardList[0].title]
  state.currentSelectYf = state.cardList[0].type
} else {
  state.cardList = []
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
 getYdList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"pageSize":"state.pageInfo.pageSize","pageNum":"state.pageInfo.pageNum","POINT_CODE":"state.pointCode","TYPE":"state.currentSelectYd","REGION_PATH":"global.regionaQuery.regionCode","YEAR":"state.timeValue","interfaceId":"ccd245e35ae01e145fcb47b408040800"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"POINT_CODE":state.pointCode,"TYPE":state.currentSelectYd,"REGION_PATH":global.regionaQuery.regionCode,"YEAR":state.timeValue,"interfaceId":"ccd245e35ae01e145fcb47b408040800"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"POINT_CODE":state.pointCode,"TYPE":state.currentSelectYd,"REGION_PATH":global.regionaQuery.regionCode,"YEAR":state.timeValue,"interfaceId":"ccd245e35ae01e145fcb47b408040800"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getYdList'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.pageInfo.total = head.pageInfo.total
  state.list = data
} else {
  state.list = []
  state.pageInfo.total = 0
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
 getOption: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"PAGE_SHOW":"1","TREE_CODE":"PLOT_OVERVIEM","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"PAGE_SHOW":"1","TREE_CODE":"PLOT_OVERVIEM","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"PAGE_SHOW":"1","TREE_CODE":"PLOT_OVERVIEM","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getOption'] = res.data;
                
     const { data, head } = res.data;
state.options = []
state.selectTwoValue = ''
if (head.statusCode === '200' && data.length) {
  state.options = data.map(item => {
    return {
      "label": item.DICTIONARYNAME,
      "value": item.DICTIONARYCODE || 'all',
      "disabled":false
    }
  })
  state.selectTwoValue = 'all'
  handleTableColumns();
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
 getYfTotalNum: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TYPE":"state.selectTwoValue","REGION_PATH":"global.regionaQuery.regionCode","YEAR":"state.timeValue","interfaceId":"d01a478a7bd37e4385129012d0564af0"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TYPE":state.selectTwoValue,"REGION_PATH":global.regionaQuery.regionCode,"YEAR":state.timeValue,"interfaceId":"d01a478a7bd37e4385129012d0564af0"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TYPE":state.selectTwoValue,"REGION_PATH":global.regionaQuery.regionCode,"YEAR":state.timeValue,"interfaceId":"d01a478a7bd37e4385129012d0564af0"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getYfTotalNum'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.currentNum = data[0].number || '0'
} else {
 state.currentNum = '0'
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TYPE":"","interfaceId":"4af43a19938fea79c1b5013b4b62a501"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TYPE":"","interfaceId":"4af43a19938fea79c1b5013b4b62a501"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TYPE":"","interfaceId":"4af43a19938fea79c1b5013b4b62a501"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
state.timeValue = ''
if (head.statusCode === '200' && data) {
  state.timeValue = data.year.toString()
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
 getYfList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TYPE":"state.selectTwoValue","pageSize":"state.pageInfo.pageSize","pageNum":"state.pageInfo.pageNum","POINT_CODE":"state.pointCode","TYPE_DETAIL":"state.currentSelectYf","REGION_PATH":"global.regionaQuery.regionCode","YEAR":"state.timeValue","interfaceId":"8cbf6da916ad1e26c7467af9bccd29b2"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TYPE":state.selectTwoValue,"pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"POINT_CODE":state.pointCode,"TYPE_DETAIL":state.currentSelectYf,"REGION_PATH":global.regionaQuery.regionCode,"YEAR":state.timeValue,"interfaceId":"8cbf6da916ad1e26c7467af9bccd29b2"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TYPE":state.selectTwoValue,"pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"POINT_CODE":state.pointCode,"TYPE_DETAIL":state.currentSelectYf,"REGION_PATH":global.regionaQuery.regionCode,"YEAR":state.timeValue,"interfaceId":"8cbf6da916ad1e26c7467af9bccd29b2"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getYfList'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.pageInfo.total = head.pageInfo.total
  state.list = data.map(item =>{
    return{
      ...item,
      point_code: item.pointCode
    }
  })
}else{
  state.list = []
  state.pageInfo.total = 0
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
                            setPageScale('t-l-c-samplePlotOverview', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPage();
/* 接收socket.io消息 */
const onSocketChange2a4b086057264adca313 = function (data) {
if(data.type === "appLoaded"){
try{
// 执行自定义方法
appLoaded(data.data.resName,data.data.resCode);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange2a4b086057264adca313);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange2a4b086057264adca313);
});
// 执行自定义方法
watchRegionCode();
onMounted(() => {
setPageScale('t-l-c-samplePlotOverview', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTablex0x0ComputedData = computed(() => _.merge({}, componentState.tTablex0x0.default, componentState.tTablex0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tTextUnitx0x2ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x2.default, componentState.tTextUnitx0x2?.[state.screenSize]));

 const tTextCommonx0x3ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x3.default, componentState.tTextCommonx0x3?.[state.screenSize]));

 const tComponentx0x4ComputedData = computed(() => _.merge({}, componentState.tComponentx0x4.default, componentState.tComponentx0x4?.[state.screenSize]));

 const tListCardMultipleChoicex0x5ComputedData = computed(() => _.merge({}, componentState.tListCardMultipleChoicex0x5.default, componentState.tListCardMultipleChoicex0x5?.[state.screenSize]));

 const tTextUnitx0x6ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x6.default, componentState.tTextUnitx0x6?.[state.screenSize]));

 const tPaginationBasex0x7ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x7.default, componentState.tPaginationBasex0x7?.[state.screenSize]));

 const tSearchx0x8ComputedData = computed(() => _.merge({}, componentState.tSearchx0x8.default, componentState.tSearchx0x8?.[state.screenSize]));

 const tButtonx0x9ComputedData = computed(() => _.merge({}, componentState.tButtonx0x9.default, componentState.tButtonx0x9?.[state.screenSize]));

 const tSelectx0x10ComputedData = computed(() => _.merge({}, componentState.tSelectx0x10.default, componentState.tSelectx0x10?.[state.screenSize]));

 const tDatePickerx0x11ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x11.default, componentState.tDatePickerx0x11?.[state.screenSize]));

 const tImageBasex0x12ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x12.default, componentState.tImageBasex0x12?.[state.screenSize]));

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
tTablex0x0ComputedData,
tRectx0x1ComputedData,
tTextUnitx0x2ComputedData,
tTextCommonx0x3ComputedData,
tComponentx0x4ComputedData,
tListCardMultipleChoicex0x5ComputedData,
tTextUnitx0x6ComputedData,
tPaginationBasex0x7ComputedData,
tSearchx0x8ComputedData,
tButtonx0x9ComputedData,
tSelectx0x10ComputedData,
tDatePickerx0x11ComputedData,
tImageBasex0x12ComputedData,
oncellClick1776655522867_0_0,
oncardClick1776655796352_0_0,
oncurrentChange1776848019156_0_1,
oninput1776655471591_0_0,
onclick1765623128634,
onchange1776654727629_0_0,
ondateChange1776654733493_0_0,
};
},
}
</script>

<style scoped>
.t-l-c-samplePlotOverview {
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
height: 891px;
width: 450px;
background-color: rgba(0,0,0,0);
}
.t-l-c-samplePlotOverview .samplePlotOverview-t-table-0-0 {
position: absolute !important;
top: 287px;
left: 20px;
width: 410px;
height: 435px;
pointer-events: auto;
}

.t-l-c-samplePlotOverview .samplePlotOverview-t-rect-0-1 {
position: absolute !important;
top: 108px;
left: 20px;
width: 410px;
height: 47px;
pointer-events: auto;
}

.t-l-c-samplePlotOverview .samplePlotOverview-t-text-unit-0-2 {
position: absolute !important;
top: 121px;
left: 240px;
width: 100px;
height: 20px;
pointer-events: auto;
}

.t-l-c-samplePlotOverview .samplePlotOverview-t-text-common-0-3 {
position: absolute !important;
top: 121px;
left: 50px;
width: 74px;
height: 20px;
pointer-events: auto;
}

.t-l-c-samplePlotOverview .samplePlotOverview-t-component-0-4 {
position: absolute !important;
top: 20px;
left: 20px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-samplePlotOverview .samplePlotOverview-t-list-card-multiple-choice-0-5 {
position: absolute !important;
top: 169px;
left: 19px;
width: 417px;
height: 58px;
pointer-events: auto;
}

.t-l-c-samplePlotOverview .samplePlotOverview-t-text-unit-0-6 {
position: absolute !important;
top: 26px;
left: 54px;
width: 261px;
height: 20px;
pointer-events: auto;
}

.t-l-c-samplePlotOverview .samplePlotOverview-t-pagination-base-0-7 {
position: absolute !important;
top: 776px;
left: 23.5px;
width: 403px;
height: 32px;
pointer-events: auto;
}

.t-l-c-samplePlotOverview .samplePlotOverview-t-search-0-8 {
position: absolute !important;
top: 238px;
left: 20px;
width: 348px;
height: 32px;
pointer-events: auto;
}

.t-l-c-samplePlotOverview .samplePlotOverview-t-button-0-9 {
position: absolute !important;
top: 238px;
left: 381px;
width: 50px;
height: 32px;
pointer-events: auto;
}

.t-l-c-samplePlotOverview .samplePlotOverview-t-select-0-10 {
position: absolute !important;
top: 61px;
left: 231px;
width: 199px;
height: 33px;
pointer-events: auto;
}

.t-l-c-samplePlotOverview .samplePlotOverview-t-date-picker-0-11 {
position: absolute !important;
top: 61px;
left: 20px;
width: 200px;
height: 32px;
pointer-events: auto;
}

.t-l-c-samplePlotOverview .samplePlotOverview-t-image-base-0-12 {
position: absolute !important;
top: 123px;
left: 34px;
width: 16px;
height: 16px;
pointer-events: auto;
}
</style>
