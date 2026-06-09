<template>
  <div id="t-l-c-dbxsypldck" class="t-l-c-dbxsypldck" ><t-rect id="t-rect-09e8.3b71afa9a" class="dbxsypldck-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-rect id="t-rect-6168.eab21c16c" class="dbxsypldck-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-table id="t-table-feb4.49e006bff" class="dbxsypldck-t-table-0-2"  :height="tTablex0x2ComputedData.height" :stripe="tTablex0x2ComputedData.stripe" :border="tTablex0x2ComputedData.border" :auto-scroll="tTablex0x2ComputedData.autoScroll" :speed="tTablex0x2ComputedData.speed" :show-animation="tTablex0x2ComputedData.showAnimation" :animation-delay="tTablex0x2ComputedData.animationDelay" :animation-type="tTablex0x2ComputedData.animationType" :columns="replaceCssVariables(filterData(state.columns, componentPropBindingMap?.['t-table-feb4.49e006bff']['columns'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data="replaceCssVariables(filterData(state.data, componentPropBindingMap?.['t-table-feb4.49e006bff']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x2ComputedData.defaultSort" :c-style="tTablex0x2ComputedData.cStyle"></t-table><t-text id="t-text-af65.3e7a6c284" class="dbxsypldck-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle"></t-text><t-date-picker id="t-date-picker-b416.ed0d4755" class="dbxsypldck-t-date-picker-0-4"  :placeholder="tDatePickerx0x4ComputedData.placeholder" :start-placeholder="tDatePickerx0x4ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x4ComputedData.endPlaceholder" :type="tDatePickerx0x4ComputedData.type" :clearable="tDatePickerx0x4ComputedData.clearable" :range-separator="tDatePickerx0x4ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.time, componentPropBindingMap?.['t-date-picker-b416.ed0d4755']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x4ComputedData.separator" :readonly="tDatePickerx0x4ComputedData.readonly" :editable="tDatePickerx0x4ComputedData.editable" :c-style="tDatePickerx0x4ComputedData.cStyle" @date-change="ondateChange1739264678068"></t-date-picker><t-text id="t-text-66b3.1850eab27" class="dbxsypldck-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle"></t-text><t-text id="t-text-209c.e1caeb10d" class="dbxsypldck-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle"></t-text><t-text id="t-text-7dd3.2baf60d31" class="dbxsypldck-t-text-0-8"  :label="tTextx0x8ComputedData.label" :editable="tTextx0x8ComputedData.editable" :c-style="tTextx0x8ComputedData.cStyle"></t-text><t-text id="t-text-6289.1bc03226" class="dbxsypldck-t-text-0-9"  :label="tTextx0x9ComputedData.label" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle"></t-text><t-select id="t-select-ff4e.830f52432" class="dbxsypldck-t-select-0-10"  :active-value="replaceCssVariables(filterData(state.POLLUTE_CODE, componentPropBindingMap?.['t-select-ff4e.830f52432']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.polluteList, componentPropBindingMap?.['t-select-ff4e.830f52432']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x10ComputedData.alias" :multiple="tSelectx0x10ComputedData.multiple" :placeholder="tSelectx0x10ComputedData.placeholder" :clearable="tSelectx0x10ComputedData.clearable" :disabled="tSelectx0x10ComputedData.disabled" :name="tSelectx0x10ComputedData.name" :autocomplete="tSelectx0x10ComputedData.autocomplete" :filterable="tSelectx0x10ComputedData.filterable" :no-match-text="tSelectx0x10ComputedData.no-match-text" :no-data-text="tSelectx0x10ComputedData.no-data-text" :c-style="tSelectx0x10ComputedData.cStyle" @change="onchange1739268928088"></t-select><t-select id="t-select-ba22.f2dc6bbb7" class="dbxsypldck-t-select-0-11"  :active-value="replaceCssVariables(filterData(state.WATER_CODE, componentPropBindingMap?.['t-select-ba22.f2dc6bbb7']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.waterList, componentPropBindingMap?.['t-select-ba22.f2dc6bbb7']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x11ComputedData.alias" :multiple="tSelectx0x11ComputedData.multiple" :placeholder="tSelectx0x11ComputedData.placeholder" :clearable="tSelectx0x11ComputedData.clearable" :disabled="tSelectx0x11ComputedData.disabled" :name="tSelectx0x11ComputedData.name" :autocomplete="tSelectx0x11ComputedData.autocomplete" :filterable="tSelectx0x11ComputedData.filterable" :no-match-text="tSelectx0x11ComputedData.no-match-text" :no-data-text="tSelectx0x11ComputedData.no-data-text" :c-style="tSelectx0x11ComputedData.cStyle" @change="onchange1739268279128"></t-select><t-select id="t-select-5656.8a7e3a49d" class="dbxsypldck-t-select-0-12"  :active-value="replaceCssVariables(filterData(state.WSYSTEM_CODE, componentPropBindingMap?.['t-select-5656.8a7e3a49d']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.wsystemList, componentPropBindingMap?.['t-select-5656.8a7e3a49d']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x12ComputedData.alias" :multiple="tSelectx0x12ComputedData.multiple" :placeholder="tSelectx0x12ComputedData.placeholder" :clearable="tSelectx0x12ComputedData.clearable" :disabled="tSelectx0x12ComputedData.disabled" :name="tSelectx0x12ComputedData.name" :autocomplete="tSelectx0x12ComputedData.autocomplete" :filterable="tSelectx0x12ComputedData.filterable" :no-match-text="tSelectx0x12ComputedData.no-match-text" :no-data-text="tSelectx0x12ComputedData.no-data-text" :c-style="tSelectx0x12ComputedData.cStyle" @change="onchange1739266128162"></t-select><t-select id="t-select-d52a.591640118" class="dbxsypldck-t-select-0-14"  :active-value="replaceCssVariables(filterData(state.POINT_CODE, componentPropBindingMap?.['t-select-d52a.591640118']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.pointList, componentPropBindingMap?.['t-select-d52a.591640118']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x14ComputedData.alias" :multiple="tSelectx0x14ComputedData.multiple" :placeholder="tSelectx0x14ComputedData.placeholder" :clearable="tSelectx0x14ComputedData.clearable" :disabled="tSelectx0x14ComputedData.disabled" :name="tSelectx0x14ComputedData.name" :autocomplete="tSelectx0x14ComputedData.autocomplete" :filterable="tSelectx0x14ComputedData.filterable" :no-match-text="tSelectx0x14ComputedData.no-match-text" :no-data-text="tSelectx0x14ComputedData.no-data-text" :c-style="tSelectx0x14ComputedData.cStyle" @change="onchange1739268412720"></t-select><t-rect id="t-rect-afae.576bf09ee" class="dbxsypldck-t-rect-0-15"  :tip="tRectx0x15ComputedData.tip" :label="tRectx0x15ComputedData.label" :active="tRectx0x15ComputedData.active" :c-style="tRectx0x15ComputedData.cStyle"></t-rect><t-rect id="t-rect-26fc.42aa488dd" class="dbxsypldck-t-rect-0-16"  :tip="tRectx0x16ComputedData.tip" :label="tRectx0x16ComputedData.label" :active="tRectx0x16ComputedData.active" :c-style="tRectx0x16ComputedData.cStyle" @click="onclick1734493226123"></t-rect><t-pagination-base id="t-pagination-base-f747.16dad5e08" class="dbxsypldck-t-pagination-base-0-18"  :total="replaceCssVariables(filterData(state.page.total, componentPropBindingMap?.['t-pagination-base-f747.16dad5e08']['total'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x18ComputedData.small" :page-size="replaceCssVariables(filterData(state.page.pageSize, componentPropBindingMap?.['t-pagination-base-f747.16dad5e08']['pageSize'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :pager-count="tPaginationBasex0x18ComputedData.pagerCount" :current-page="replaceCssVariables(filterData(state.page.pageNum, componentPropBindingMap?.['t-pagination-base-f747.16dad5e08']['currentPage'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x18ComputedData.layout" :page-sizes="tPaginationBasex0x18ComputedData.pageSizes" :disabled="tPaginationBasex0x18ComputedData.disabled" :c-style="tPaginationBasex0x18ComputedData.cStyle" @current-change="oncurrentChange1738832437927"></t-pagination-base><t-rect id="t-rect-4ca2.ad7ff0a9e" class="dbxsypldck-t-rect-0-19"  :tip="tRectx0x19ComputedData.tip" :label="tRectx0x19ComputedData.label" :active="tRectx0x19ComputedData.active" :c-style="tRectx0x19ComputedData.cStyle" @click="onclick1739270985118"></t-rect><t-text id="t-text-5f02.58c484753" class="dbxsypldck-t-text-0-21"  :label="tTextx0x21ComputedData.label" :editable="tTextx0x21ComputedData.editable" :c-style="tTextx0x21ComputedData.cStyle"></t-text></div>
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
import { TDatePicker, TPaginationBase, TRect, TSelect, TTable, TText } from '@ths/design';

export default {
  components: {
    TDatePicker,
    TPaginationBase,
    TRect,
    TSelect,
    TTable,
    TText,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-09e8.3b71afa9a":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-6168.eab21c16c":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-table-feb4.49e006bff":{"attributeName":"tTablex0x2","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"showAnimation":{"filters":[]},"animationDelay":{"filters":[]},"animationType":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-text-af65.3e7a6c284":{"attributeName":"tTextx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-b416.ed0d4755":{"attributeName":"tDatePickerx0x4","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-66b3.1850eab27":{"attributeName":"tTextx0x5","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-209c.e1caeb10d":{"attributeName":"tTextx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-87e0.7c4ed868":{"attributeName":"tTextx0x7"},"t-text-7dd3.2baf60d31":{"attributeName":"tTextx0x8","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-6289.1bc03226":{"attributeName":"tTextx0x9","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-ff4e.830f52432":{"attributeName":"tSelectx0x10","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-select-ba22.f2dc6bbb7":{"attributeName":"tSelectx0x11","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-select-5656.8a7e3a49d":{"attributeName":"tSelectx0x12","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-select-3bb7.564254ace":{"attributeName":"tSelectx0x13"},"t-select-d52a.591640118":{"attributeName":"tSelectx0x14","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-afae.576bf09ee":{"attributeName":"tRectx0x15","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-26fc.42aa488dd":{"attributeName":"tRectx0x16","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-ef99.94df0e493":{"attributeName":"tRectx0x17"},"t-pagination-base-f747.16dad5e08":{"attributeName":"tPaginationBasex0x18","total":{"filters":[]},"small":{"filters":[]},"pageSize":{"filters":[]},"pagerCount":{"filters":[]},"currentPage":{"filters":[]},"layout":{"filters":[]},"pageSizes":{"filters":[]},"disabled":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-4ca2.ad7ff0a9e":{"attributeName":"tRectx0x19","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-825f.e97aa3183":{"attributeName":"tRectx0x20"},"t-text-5f02.58c484753":{"attributeName":"tTextx0x21","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   page: {"pageNum":1,"pageSize":10,"total":0},
   data: [],
   columns: [{"label":"断面名称","key":"POINT_NAME","align":"center"},{"label":"水体名称","key":"WATER_NAME","align":"center"},{"label":"所属行政区","key":"REGION_NAME","align":"center"},{"label":"所属流域","key":"WSYSTEMNAME","align":"center","type":"default"},{"label":"监测指标","key":"POLLUTENAME","align":"center"},{"label":"--累计均值（mg/L）","key":"AVG_VALUE","align":"center"},{"label":"目标值","key":"TARGET_VALUE","align":"center","type":"default"},{"label":"达标情况","key":"ISSTANDARDS","align":"center","type":"state","stateList":[{"name":"超标","fontStyle":{"background":"linear-gradient(0deg,#FF2B2B 0%,#FF2B2B 100%)","padding":"","width":"40PX","height":"20PX","borderRadius":"2PX","lineHeight":"20PX","fontSize":"var(--business-text-size-12)","color":"#fff"}},{"name":"达标","fontStyle":{"background":"linear-gradient(0deg,#009914 0%,#009914 100%)","padding":"","width":"40PX","height":"20PX","borderRadius":"2PX","lineHeight":"20PX","fontSize":"var(--business-text-size-12)","color":"#fff"}}],"stateKey":"ISSTANDARDS"},{"label":"--累计均值（mg/L）","key":"AVG_VALUE_LAST","align":"center","type":"default"},{"label":"--达标累计均值（mg/L）","key":"STANDARDS_AVG_VALUE","align":"center","type":"default"},{"label":"--累计均值（mg/L）","key":"STANDARDS_AVG_VALUE_LAST","align":"center","type":"default"}],
   polluteList: [],
   POLLUTE_CODE: "",
   pointList: [],
   POINT_CODE: "",
   waterList: [],
   WATER_CODE: "",
   wsystemList: [],
   WSYSTEM_CODE: "",
   xzqList: [],
   REGION_CODE: "",
   regionCode: "",
   time: "",
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
            default: {"width":"984px","height":"726px","position":"unset","left":"407px","top":"194px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"984px","height":"726px","position":"unset","left":"407px","top":"194px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"948px","height":"107px","position":"unset","left":"425px","top":"261px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg15)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"948px","height":"107px","position":"unset","left":"425px","top":"261px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tTablex0x2: {
defaultStyle: {
            default: {"width":"947px","height":"465px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"465",
stripe:false,
border:false,
autoScroll:false,
speed:6,
showAnimation:false,
animationDelay:0.1,
animationType:"animate__fadeInUp",
columns:[{"label":"断面名称","key":"POINT_NAME","align":"center"},{"label":"水体名称","key":"WATER_NAME","align":"center"},{"label":"所属行政区","key":"REGION_NAME","align":"center"},{"label":"所属流域","key":"WSYSTEMNAME","align":"center","type":"default"},{"label":"监测指标","key":"POLLUTENAME","align":"center"},{"label":"--累计均值（mg/L）","key":"AVG_VALUE","align":"center"},{"label":"目标值","key":"TARGET_VALUE","align":"center","type":"default"},{"label":"达标情况","key":"ISSTANDARDS","align":"center","type":"state","stateList":[{"name":"超标","fontStyle":{"background":"linear-gradient(0deg,#FF2B2B 0%,#FF2B2B 100%)","padding":"","width":"40PX","height":"20PX","borderRadius":"2PX","lineHeight":"20PX","fontSize":"var(--business-text-size-12)","color":"#fff"}},{"name":"达标","fontStyle":{"background":"linear-gradient(0deg,#009914 0%,#009914 100%)","padding":"","width":"40PX","height":"20PX","borderRadius":"2PX","lineHeight":"20PX","fontSize":"var(--business-text-size-12)","color":"#fff"}}],"stateKey":"ISSTANDARDS"},{"label":"--累计均值（mg/L）","key":"AVG_VALUE_LAST","align":"center","type":"default"},{"label":"--达标累计均值（mg/L）","key":"STANDARDS_AVG_VALUE","align":"center","type":"default"},{"label":"--累计均值（mg/L）","key":"STANDARDS_AVG_VALUE_LAST","align":"center","type":"default"}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"947px","height":"465px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"88px","height":"32px","color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)","top":"320px","left":"426px","position":"unset","animationName":"","lineHeight":"32px","textAlign":"right"},
            
            },
 default: { 
 
label:"监测指标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"88px","height":"32px","color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)","top":"320px","left":"426px","position":"unset","animationName":"","lineHeight":"32px","textAlign":"right"}}}, 
 },
},
tDatePickerx0x4: {
defaultStyle: {
            default: {"width":"150px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","min-height":"32px","line-height":"normal","min-width":"150px","max-width":"none","left":"518px"},
            
            },
 default: { 
 
placeholder:"请选择时间",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"month",
clearable:true,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"150px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","min-height":"32px","line-height":"normal","min-width":"150px","max-width":"none","left":"518px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","min-height":"32px","line-height":"normal"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"30px","fontSize":"var(--business-text-size-14)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","fontSize":"var(--business-text-size-12)","height":"auto"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--skin-font-color)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--skin-font-color)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--skin-font-color)","borderLeft":"1px solid var(--skin-font-color)","borderTop":"1px solid var(--skin-font-color)","borderRight":"1px solid var(--skin-font-color)","borderBottom":"1px solid var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--skin-font-color)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"inputCloseIcons":{"default":{"fontSize":"var(--business-text-size-14)"}},"dateHeaderYearBtnWrapper":{"default":{"fontSize":"var(--business-text-size-14)"}},"dateHeaderYearBtn":{"default":{"fontSize":"var(--business-text-size-14)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-14)"}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"88px","height":"32px","color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)","top":"274px","left":"872px","position":"unset","animationName":"","lineHeight":"32px","textAlign":"right"},
            
            },
 default: { 
 
label:"水体名称",
editable:false,
cStyle:{"wrapper":{"default":{"width":"88px","height":"32px","color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)","top":"274px","left":"872px","position":"unset","animationName":"","lineHeight":"32px","textAlign":"right"}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"45px","height":"32px","color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)","top":"274px","left":"675px","position":"unset","animationName":"","lineHeight":"32px","textAlign":"right"},
            
            },
 default: { 
 
label:"流域",
editable:false,
cStyle:{"wrapper":{"default":{"width":"45px","height":"32px","color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)","top":"274px","left":"675px","position":"unset","animationName":"","lineHeight":"32px","textAlign":"right"}}}, 
 },
},
tTextx0x8: {
defaultStyle: {
            default: {"width":"88px","height":"32px","color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)","top":"274px","left":"1113px","position":"unset","animationName":"","textAlign":"right","lineHeight":"32px"},
            
            },
 default: { 
 
label:"断面名称",
editable:false,
cStyle:{"wrapper":{"default":{"width":"88px","height":"32px","color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)","top":"274px","left":"1113px","position":"unset","animationName":"","textAlign":"right","lineHeight":"32px"}}}, 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"width":"88px","height":"32px","color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)","top":"274px","left":"426px","position":"unset","lineHeight":"32px","textAlign":"right"},
            
            },
 default: { 
 
label:"监测时间",
editable:false,
cStyle:{"wrapper":{"default":{"width":"88px","height":"32px","color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)","top":"274px","left":"426px","position":"unset","lineHeight":"32px","textAlign":"right"}}}, 
 },
},
tSelectx0x10: {
defaultStyle: {
            default: {"width":"150px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal","left":"518px"},
            
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
cStyle:{"wrapper":{"default":{"width":"150px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal","left":"518px"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tSelectx0x11: {
defaultStyle: {
            default: {"width":"150px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},
            
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
cStyle:{"wrapper":{"default":{"width":"150px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tSelectx0x12: {
defaultStyle: {
            default: {"width":"150px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},
            
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
cStyle:{"wrapper":{"default":{"width":"150px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tSelectx0x14: {
defaultStyle: {
            default: {"width":"150px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},
            
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
cStyle:{"wrapper":{"default":{"width":"150px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tRectx0x15: {
defaultStyle: {
            default: {"width":"984px","height":"47px","backgroundColor":"var(--business-dialog-title-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"407px","top":"195px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"984px","height":"47px","backgroundColor":"var(--business-dialog-title-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"407px","top":"195px","animationName":""}}}, 
 },
},
tRectx0x16: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1349px","top":"207px","backgroundColor":"var(--common-btn-default)","backgroundImage":"url(assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1349px","top":"207px","backgroundColor":"var(--common-btn-default)","backgroundImage":"url(assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tPaginationBasex0x18: {
defaultStyle: {
            default: {"width":"947px","height":"38px","position":"unset","left":"425px","top":"860px","borderLeft":"0px none var(--business-show-bg60)","borderTop":"0px none var(--business-show-bg60)","borderRight":"0px none var(--business-show-bg60)","borderBottom":"0px none var(--business-show-bg60)","display":"flex","justifyContent":"flex-end","animationName":"","fontSize":"var(--business-text-size-14)"},
            
            },
 default: { 
 
total:0,
small:false,
pageSize:10,
pagerCount:7,
currentPage:1,
layout:"total, prev, pager, next",
pageSizes:[10,20,30,40,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"947px","height":"38px","position":"unset","left":"425px","top":"860px","borderLeft":"0px none var(--business-show-bg60)","borderTop":"0px none var(--business-show-bg60)","borderRight":"0px none var(--business-show-bg60)","borderBottom":"0px none var(--business-show-bg60)","display":"flex","justifyContent":"flex-end","animationName":"","fontSize":"var(--business-text-size-14)"}},"total":{"default":{"color":"var(--business-text-avianize)","position":"absolute","right":"0px","left":"0px","width":"490px","fontSize":"var(--business-text-size-14)"}},"pagerItem":{"default":{"color":"var(--business-white)","backgroundColor":"var(--business-show-bg15)","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","cursor":"pointer","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-white)","background":"var(--business-btn-active)","borderLeft":"1px none rgba(255,13,0,1)","borderTop":"1px none rgba(255,13,0,1)","borderRight":"1px none rgba(255,13,0,1)","borderBottom":"1px none rgba(255,13,0,1)","pointerEvents":"auto","overflow":"visible","cursor":"pointer","fontSize":"var(--business-text-size-14)"},"active":{"color":"var(--business-white)","background":"var(--business-btn-active)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","fontSize":"var(--business-text-size-14)"}},"pager":{"default":{"color":"var(--business-white)","backgroundColor":"var(--business-show-bg15)","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-white)","background":"var(--business-btn-active)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","fontSize":"var(--business-text-size-12)"}},"more":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"fontSize":"var(--business-text-size-12)"}},"sizesWrapper":{"default":{"fontSize":"var(--business-text-size-14)"}},"sizesInput":{"default":{"fontSize":"var(--business-text-size-14)"}},"sizesDropdownWrapper":{"default":{"fontSize":"var(--business-text-size-14)"}},"sizesDropdownItem":{"default":{"fontSize":"var(--business-text-size-14)"}},"jumpWrapper":{"default":{"fontSize":"var(--business-text-size-14)"}},"jumpInput":{"default":{"fontSize":"var(--business-text-size-14)"}}}, 
 },
},
tRectx0x19: {
defaultStyle: {
            default: {"width":"54px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"1301px","top":"319px","cursor":"pointer","animationName":"","fontSize":"var(--business-text-size-16)"},
            
            },
 default: { 
 
tip:false,
label:"重置",
active:false,
cStyle:{"wrapper":{"default":{"width":"54px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"1301px","top":"319px","cursor":"pointer","animationName":"","fontSize":"var(--business-text-size-16)"}}}, 
 },
},
tTextx0x21: {
defaultStyle: {
            default: {"width":"686px","height":"47px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"427px","top":"195px","fontWeight":"700","letterSpacing":"1.5px","fontSize":"var(--business-text-size-18)","lineHeight":"47px"},
            
            },
 default: { 
 
label:"达标形式预判灵动窗口",
editable:false,
cStyle:{"wrapper":{"default":{"width":"686px","height":"47px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"427px","top":"195px","fontWeight":"700","letterSpacing":"1.5px","fontSize":"var(--business-text-size-18)","lineHeight":"47px"}}}, 
 },
},
});
const initPage = () => {
console.log(326, global.businessDialog.dialogParmas);

// {
//     "regionCode": "440600000000",
//     "regionName": "佛山市",
//     "time": "2025-02"
// }

// 重置
resetData();
};
const setProvider = () => {
// provide('airPointState', state);
};
const handleTimeChange = () => {
setColumnsData()
const getData = async () => {
  // 获取 断面列表
  // await getWaterDmList();
  // 获取 下方整体列表 数据
  apiRegistry.getTableList.request();
};

getData();

};
const handleRegionChange = () => {
const getData = async () => {
  // 获取 流域列表
  await apiRegistry.getWsystemList.request();
  // 获取 水体列表
  await apiRegistry.getWaterBodyList.request();
  // 获取 断面列表
  await apiRegistry.getWaterDmList.request();

  // 获取 下方整体列表 数据
  apiRegistry.getTableList.request();
};

getData();

};
const handleWsystemChange = () => {
const getData = async () => {
  // 获取 水体列表
  await apiRegistry.getWaterBodyList.request();
  // 获取 断面列表
   await apiRegistry.getWaterDmList.request();

  // 获取 下方整体列表 数据
  apiRegistry.getTableList.request();
};

getData();

};
const resetData = () => {
// 填充路由参数
state.regionCode = global.businessDialog.dialogParmas.regionCode || '440600000000';
state.time = global.businessDialog.dialogParmas.time || '2025-12';

setColumnsData()

const getData = async () => {
  // 获取 行政区列表
  // await getRegionList();
  // 获取 流域列表
  await apiRegistry.getWsystemList.request();
  // 获取 水体列表
  await apiRegistry.getWaterBodyList.request();
  // 获取 断面列表
  await apiRegistry.getWaterDmList.request();
  // 获取 监测指标列表
  await apiRegistry.getJczbList.request();

  // 获取 下方整体列表 数据
  apiRegistry.getTableList.request();
};

getData();
};
const setColumnsData = () => {
const generateDateStrings = (inputDate) => {
  // 解析输入的年月
  const [year, month] = inputDate.split('-').map(Number);

  // 生成当前年的字符串
  const currentYearFirstPart = month === 1 ? `${year}年1月` : `${year}年1-${month}月`;
  const currentYearSecondPart = month < 12 ? `${year}年${month + 1}-12月` : '';

  // 生成前一年的字符串
  const prevYear = year - 1;
  const prevYearFirstPart = month === 1 ? `${prevYear}年1月` : `${prevYear}年1-${month}月`;
  const prevYearSecondPart = month < 12 ? `${prevYear}年${month + 1}-12月` : '';

  return {
    currentYear: [currentYearFirstPart, currentYearSecondPart],
    previousYear: [prevYearFirstPart, prevYearSecondPart]
  };
}

if (state.time) {
  const { currentYear, previousYear } = generateDateStrings(state.time)
  state.columns[5].label = `${currentYear[0]}累计均值（mg/L）`
  state.columns[8].label = `${previousYear[0]}累计均值（mg/L）`
  state.columns[9].label = currentYear[1] ? `${currentYear[1]}均值需达（mg/L）` : "\\";
  state.columns[10].label = previousYear[1] ? `${previousYear[1]}均值（mg/L）` : "\\";
} else {
  state.columns[5].label = `--累计均值（mg/L）`
  state.columns[8].label = `--累计均值（mg/L）`
  state.columns[9].label = `--均值需达（mg/L）`
  state.columns[10].label = `--均值（mg/L）`
}



};
const ondateChange1739264678068 = (data) => {
// 设置变量值
state.time = data;
// 执行自定义方法
handleTimeChange();
};
const onchange1739268928088 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.POLLUTE_CODE = value;
// 事件交互-请求调用接口
apiRegistry.getTableList.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const onchange1739268279128 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.WATER_CODE = value;
// 事件交互-请求调用接口
apiRegistry.getTableList.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const onchange1739266128162 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.WSYSTEM_CODE = value;
// 执行自定义方法
handleWsystemChange();
};
const onchange1739264850555 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.REGION_CODE = value;
// 执行自定义方法
handleRegionChange();
};
const onchange1739268412720 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.POINT_CODE = value;
// 事件交互-请求调用接口
apiRegistry.getTableList.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
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
const oncurrentChange1738832437927 = (currentPage) => {
// 设置变量值
state.page.pageNum = currentPage;
// 事件交互-请求调用接口
apiRegistry.getTableList.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const onclick1739270985118 = () => {
// 执行自定义方法
resetData();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getWaterBodyList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"WSYSTEM_CODE":"state.WSYSTEM_CODE","interfaceId":"ffce1d1c60eeb25462d40c4d64c9ae5e"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"WSYSTEM_CODE":state.WSYSTEM_CODE,"interfaceId":"ffce1d1c60eeb25462d40c4d64c9ae5e"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"WSYSTEM_CODE":state.WSYSTEM_CODE,"interfaceId":"ffce1d1c60eeb25462d40c4d64c9ae5e"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getWaterBodyList'] = res.data;
                
     // console.log('获取 流域下的 水体列表', res);

state.waterList = [];
state.WATER_CODE = '';

if (res.status === 200 && res.data.head.statusCode === '200') {
  // 填充列表
  state.waterList = res.data.data.map((item) => ({
    ...item,
    label: item.WATER_NAME || '-',
    value: item.WATER_CODE || '-',
  })) || [];
  // state.WATER_CODE = res.data?.data?.[0]?.WATER_CODE || '';
  state.WATER_CODE = '';
}

console.log('填充后的水体', state.waterList, state.WATER_CODE)
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.waterList = [];
state.WATER_CODE = '';
      reject(error);
    });
  });
},
              },
// 接口函数
 getWsystemList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"8bdb487456849c97a8e74152ca1a8439"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"8bdb487456849c97a8e74152ca1a8439"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"8bdb487456849c97a8e74152ca1a8439"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getWsystemList'] = res.data;
                
     // console.log('获取 行政区下 流域列表', res);

state.wsystemList = [];
state.WSYSTEM_CODE = '';

if (res.status === 200 && res.data.head.statusCode === '200') {
  // 填充行政区列表
  state.wsystemList = res.data.data.map((item) => ({
    ...item,
    label: item.WSYSTEM_NAME || '-',
    value: item.WSYSTEM_CODE || '-',
  })) || [];
  state.WSYSTEM_CODE = res.data?.data?.[0]?.WSYSTEM_CODE || '';
  // // 获取 水体列表
  // getWaterBodyList();
  // // 获取 断面列表
  // getWaterDmList();
}

console.log('填充后的流域', state.wsystemList, state.WSYSTEM_CODE)
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.wsystemList = [];
state.WSYSTEM_CODE = '';
      reject(error);
    });
  });
},
              },
// 接口函数
 getJczbList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"interfaceId":"f2d70c0cb794dae6dc21a5b62c99418f"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"f2d70c0cb794dae6dc21a5b62c99418f"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"interfaceId":"f2d70c0cb794dae6dc21a5b62c99418f"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getJczbList'] = res.data;
                
     // console.log('获取 监测指标列表', res);

state.polluteList = [];
state.POLLUTE_CODE = '';

if (res.status === 200 && res.data.head.statusCode === '200') {
  // 填充列表
  state.polluteList = res.data.data.map((item) => ({
    ...item,
    label: item.POLLUTE_NAME || '-',
    value: item.POLLUTE_CODE || '-',
  })) || [];
  // state.POLLUTE_CODE = res.data?.data?.[0]?.POLLUTE_CODE || '';
  state.POLLUTE_CODE = '';
}

console.log('填充后的监测指标', state.polluteList, state.POLLUTE_CODE)
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.polluteList = [];
state.POLLUTE_CODE = '';

      reject(error);
    });
  });
},
              },
// 接口函数
 getWaterDmList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"MONITORTIME":"state.time","WSYSTEM_CODE":"state.WSYSTEM_CODE","interfaceId":"b91f6067f01e59ac4aa8224c54b02495"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":state.time,"WSYSTEM_CODE":state.WSYSTEM_CODE,"interfaceId":"b91f6067f01e59ac4aa8224c54b02495"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"MONITORTIME":state.time,"WSYSTEM_CODE":state.WSYSTEM_CODE,"interfaceId":"b91f6067f01e59ac4aa8224c54b02495"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getWaterDmList'] = res.data;
                
     // console.log('获取 流域下的 断面列表', res);

state.pointList = [];
state.POINT_CODE = '';

if (res.status === 200 && res.data.head.statusCode === '200') {
  // 填充列表
  state.pointList = res.data.data.map((item) => ({
    ...item,
    label: item.POINT_NAME || '-',
    value: item.POINT_CODE || '-',
  })) || [];
  // state.POINT_CODE = res.data?.data?.[0]?.POINT_CODE || '';
  state.POINT_CODE = '';
}

console.log('填充后的断面', state.pointList, state.POINT_CODE)
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.pointList = [];
state.POINT_CODE = '';
      reject(error);
    });
  });
},
              },
// 接口函数
 getRegionList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"PARENT_REGION_CODE":"state.regionCode","interfaceId":"a8bb2c86d48737b8b42c0eb028e0fcc4"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"PARENT_REGION_CODE":state.regionCode,"interfaceId":"a8bb2c86d48737b8b42c0eb028e0fcc4"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"PARENT_REGION_CODE":state.regionCode,"interfaceId":"a8bb2c86d48737b8b42c0eb028e0fcc4"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getRegionList'] = res.data;
                
     // console.log('获取父编码下级行政区列表', res);

state.xzqList = [];
state.REGION_CODE = '';

if (res.status === 200 && res.data.head.statusCode === '200') {
  // 填充行政区列表
  state.xzqList = res.data.data.map((item) => ({
    ...item,
    label: item.REGION_NAME || '-',
    value: item.REGION_CODE || '-',
  })) || [];
  state.REGION_CODE = res.data?.data?.[1]?.REGION_CODE || '';
  // 获取 流域列表
  // getWsystemList();
}

console.log('填充后的行政区', state.xzqList, state.REGION_CODE)
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.xzqList = [];
state.REGION_CODE = '';
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"pageSize":"state.page.pageSize","pageNum":"state.page.pageNum","WSYSTEM_CODE":"state.WSYSTEM_CODE","WATER_CODE":"state.WATER_CODE","MONITORTIME":"state.time","POINT_CODE":"state.POINT_CODE","POLLUTE_CODE":"state.POLLUTE_CODE","REGION_CODE":"state.REGION_CODE","interfaceId":"cdbbb666cd319c0f069336c979d9c741"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"pageSize":state.page.pageSize,"pageNum":state.page.pageNum,"WSYSTEM_CODE":state.WSYSTEM_CODE,"WATER_CODE":state.WATER_CODE,"MONITORTIME":state.time,"POINT_CODE":state.POINT_CODE,"POLLUTE_CODE":state.POLLUTE_CODE,"REGION_CODE":state.REGION_CODE,"interfaceId":"cdbbb666cd319c0f069336c979d9c741"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"pageSize":state.page.pageSize,"pageNum":state.page.pageNum,"WSYSTEM_CODE":state.WSYSTEM_CODE,"WATER_CODE":state.WATER_CODE,"MONITORTIME":state.time,"POINT_CODE":state.POINT_CODE,"POLLUTE_CODE":state.POLLUTE_CODE,"REGION_CODE":state.REGION_CODE,"interfaceId":"cdbbb666cd319c0f069336c979d9c741"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTableList'] = res.data;
                
     state.data = [];
state.page.total = 0
if (res.status === 200 && res.data.head.statusCode === '200') {
  // 分页
  state.page.total = res.data.head.pageInfo.total || 0

  // 数据
  state.data = res.data?.data?.map((item) => ({
    ...item,
    ISSTANDARDS: item?.ISSTANDARDS === '0' ? '达标' : '超标',
  })) || []
}


      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.data = [];
state.page = {
  total: 0,
  pageNum: 1
}
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getWsystemList', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-dbxsypldck', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPage();
// 执行自定义方法
setProvider();
onMounted(() => {
setPageScale('t-l-c-dbxsypldck', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tTablex0x2ComputedData = computed(() => _.merge({}, componentState.tTablex0x2.default, componentState.tTablex0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tDatePickerx0x4ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x4.default, componentState.tDatePickerx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tTextx0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x8.default, componentState.tTextx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tSelectx0x10ComputedData = computed(() => _.merge({}, componentState.tSelectx0x10.default, componentState.tSelectx0x10?.[state.screenSize]));

 const tSelectx0x11ComputedData = computed(() => _.merge({}, componentState.tSelectx0x11.default, componentState.tSelectx0x11?.[state.screenSize]));

 const tSelectx0x12ComputedData = computed(() => _.merge({}, componentState.tSelectx0x12.default, componentState.tSelectx0x12?.[state.screenSize]));

 const tSelectx0x14ComputedData = computed(() => _.merge({}, componentState.tSelectx0x14.default, componentState.tSelectx0x14?.[state.screenSize]));

 const tRectx0x15ComputedData = computed(() => _.merge({}, componentState.tRectx0x15.default, componentState.tRectx0x15?.[state.screenSize]));

 const tRectx0x16ComputedData = computed(() => _.merge({}, componentState.tRectx0x16.default, componentState.tRectx0x16?.[state.screenSize]));

 const tPaginationBasex0x18ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x18.default, componentState.tPaginationBasex0x18?.[state.screenSize]));

 const tRectx0x19ComputedData = computed(() => _.merge({}, componentState.tRectx0x19.default, componentState.tRectx0x19?.[state.screenSize]));

 const tTextx0x21ComputedData = computed(() => _.merge({}, componentState.tTextx0x21.default, componentState.tTextx0x21?.[state.screenSize]));

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
tRectx0x1ComputedData,
tTablex0x2ComputedData,
tTextx0x3ComputedData,
tDatePickerx0x4ComputedData,
tTextx0x5ComputedData,
tTextx0x6ComputedData,
tTextx0x8ComputedData,
tTextx0x9ComputedData,
tSelectx0x10ComputedData,
tSelectx0x11ComputedData,
tSelectx0x12ComputedData,
tSelectx0x14ComputedData,
tRectx0x15ComputedData,
tRectx0x16ComputedData,
tPaginationBasex0x18ComputedData,
tRectx0x19ComputedData,
tTextx0x21ComputedData,
ondateChange1739264678068,
onchange1739268928088,
onchange1739268279128,
onchange1739266128162,
onchange1739268412720,
onclick1734493226123,
oncurrentChange1738832437927,
onclick1739270985118,
};
},
}
</script>

<style scoped>
.t-l-c-dbxsypldck {
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
.t-l-c-dbxsypldck .dbxsypldck-t-rect-0-0 {
position: absolute !important;
top: 194px;
left: 407px;
width: 984px;
height: 726px;
pointer-events: auto;
}

.t-l-c-dbxsypldck .dbxsypldck-t-rect-0-1 {
position: absolute !important;
top: 261px;
left: 425px;
width: 948px;
height: 107px;
pointer-events: auto;
}

.t-l-c-dbxsypldck .dbxsypldck-t-table-0-2 {
position: absolute !important;
top: 387px;
left: 425px;
width: 947px;
height: 465px;
pointer-events: auto;
}

.t-l-c-dbxsypldck .dbxsypldck-t-text-0-3 {
position: absolute !important;
top: 320px;
left: 426px;
width: 88px;
height: 32px;
pointer-events: auto;
}

.t-l-c-dbxsypldck .dbxsypldck-t-date-picker-0-4 {
position: absolute !important;
top: 273px;
left: 518px;
width: 150px;
height: 32px;
pointer-events: auto;
}

.t-l-c-dbxsypldck .dbxsypldck-t-text-0-5 {
position: absolute !important;
top: 274px;
left: 872px;
width: 88px;
height: 32px;
pointer-events: auto;
}

.t-l-c-dbxsypldck .dbxsypldck-t-text-0-6 {
position: absolute !important;
top: 274px;
left: 675px;
width: 45px;
height: 32px;
pointer-events: auto;
}

.t-l-c-dbxsypldck .dbxsypldck-t-text-0-8 {
position: absolute !important;
top: 274px;
left: 1113px;
width: 88px;
height: 32px;
pointer-events: auto;
}

.t-l-c-dbxsypldck .dbxsypldck-t-text-0-9 {
position: absolute !important;
top: 274px;
left: 426px;
width: 88px;
height: 32px;
pointer-events: auto;
}

.t-l-c-dbxsypldck .dbxsypldck-t-select-0-10 {
position: absolute !important;
top: 320px;
left: 518px;
width: 150px;
height: auto;
pointer-events: auto;
}

.t-l-c-dbxsypldck .dbxsypldck-t-select-0-11 {
position: absolute !important;
top: 274px;
left: 962px;
width: 150px;
height: auto;
pointer-events: auto;
}

.t-l-c-dbxsypldck .dbxsypldck-t-select-0-12 {
position: absolute !important;
top: 273px;
left: 723px;
width: 150px;
height: auto;
pointer-events: auto;
}

.t-l-c-dbxsypldck .dbxsypldck-t-select-0-14 {
position: absolute !important;
top: 273px;
left: 1204px;
width: 150px;
height: auto;
pointer-events: auto;
}

.t-l-c-dbxsypldck .dbxsypldck-t-rect-0-15 {
position: absolute !important;
top: 195px;
left: 407px;
width: 984px;
height: 47px;
pointer-events: auto;
}

.t-l-c-dbxsypldck .dbxsypldck-t-rect-0-16 {
position: absolute !important;
top: 207px;
left: 1349px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-dbxsypldck .dbxsypldck-t-pagination-base-0-18 {
position: absolute !important;
top: 860px;
left: 425px;
width: 947px;
height: 38px;
pointer-events: auto;
}

.t-l-c-dbxsypldck .dbxsypldck-t-rect-0-19 {
position: absolute !important;
top: 319px;
left: 1301px;
width: 54px;
height: 32px;
pointer-events: auto;
}

.t-l-c-dbxsypldck .dbxsypldck-t-text-0-21 {
position: absolute !important;
top: 195px;
left: 427px;
width: 686px;
height: 47px;
pointer-events: auto;
}
</style>
