<template>
  <div id="t-l-c-createPointDialog" class="t-l-c-createPointDialog" ><t-table v-if="state.searchType === '1'" id="t-table-d425.38d4adc0e" class="createPointDialog-t-table-0-0"  :height="tTablex0x0ComputedData.height" :stripe="tTablex0x0ComputedData.stripe" :border="tTablex0x0ComputedData.border" :auto-scroll="tTablex0x0ComputedData.autoScroll" :speed="tTablex0x0ComputedData.speed" :columns="tTablex0x0ComputedData.columns" :data="replaceCssVariables(filterData(state.pointList, componentPropBindingMap?.['t-table-d425.38d4adc0e']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x0ComputedData.defaultSort" :c-style="tTablex0x0ComputedData.cStyle" @operation-click="onoperationClick1765264583036" @cell-click="oncellClick1765336517530"></t-table><t-row id="t-row-4db1.067ee1c6c" class="createPointDialog-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align"><t-col id="t-col-2c78.77782b697" class="createPointDialog-t-col-0-1-0"  :span="tColx0x1x0ComputedData.span" :offset="tColx0x1x0ComputedData.offset" :push="tColx0x1x0ComputedData.push" :pull="tColx0x1x0ComputedData.pull" :c-style="tColx0x1x0ComputedData.cStyle"><t-select id="t-select-9f94.5f17331" class="createPointDialog-t-select-0-1-0-0"  :active-value="replaceCssVariables(filterData(state.searchType, componentPropBindingMap?.['t-select-9f94.5f17331']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x1x0x0ComputedData.options" :alias="tSelectx0x1x0x0ComputedData.alias" :multiple="tSelectx0x1x0x0ComputedData.multiple" :placeholder="tSelectx0x1x0x0ComputedData.placeholder" :clearable="tSelectx0x1x0x0ComputedData.clearable" :disabled="tSelectx0x1x0x0ComputedData.disabled" :name="tSelectx0x1x0x0ComputedData.name" :autocomplete="tSelectx0x1x0x0ComputedData.autocomplete" :filterable="tSelectx0x1x0x0ComputedData.filterable" :no-match-text="tSelectx0x1x0x0ComputedData.no-match-text" :no-data-text="tSelectx0x1x0x0ComputedData.no-data-text" :c-style="tSelectx0x1x0x0ComputedData.cStyle" :scrollbar-thumb-color="tSelectx0x1x0x0ComputedData.scrollbarThumbColor" :scrollbar-track-color="tSelectx0x1x0x0ComputedData.scrollbarTrackColor" :scrollbar-width="tSelectx0x1x0x0ComputedData.scrollbarWidth" @change="onchange1764919076467"></t-select></t-col><t-col v-if="state.searchType === '2'" id="t-col-155f.40a08e56e" class="createPointDialog-t-col-0-1-1"  :span="tColx0x1x1ComputedData.span" :offset="tColx0x1x1ComputedData.offset" :push="tColx0x1x1ComputedData.push" :pull="tColx0x1x1ComputedData.pull" :c-style="tColx0x1x1ComputedData.cStyle"><t-text-common id="t-text-common-a97f.428fa765b" class="createPointDialog-t-text-common-0-1-1-0"  :label="tTextCommonx0x1x1x0ComputedData.label" :editable="tTextCommonx0x1x1x0ComputedData.editable" :c-style="tTextCommonx0x1x1x0ComputedData.cStyle"></t-text-common><t-search id="t-search-b328.9544fdbfa" class="createPointDialog-t-search-0-1-1-1"  :type="tSearchx0x1x1x1ComputedData.type" :input-value="tSearchx0x1x1x1ComputedData.inputValue" :maxlength="tSearchx0x1x1x1ComputedData.maxlength" :minlength="tSearchx0x1x1x1ComputedData.minlength" :show-word-limit="tSearchx0x1x1x1ComputedData.showWordLimit" :placeholder="tSearchx0x1x1x1ComputedData.placeholder" :clearable="tSearchx0x1x1x1ComputedData.clearable" :show-password="tSearchx0x1x1x1ComputedData.showPassword" :disabled="tSearchx0x1x1x1ComputedData.disabled" :prefix-icon="tSearchx0x1x1x1ComputedData.prefix-icon" :suffix-icon="tSearchx0x1x1x1ComputedData.suffix-icon" :rows="tSearchx0x1x1x1ComputedData.rows" :autosize="tSearchx0x1x1x1ComputedData.autosize" :name="tSearchx0x1x1x1ComputedData.name" :readonly="tSearchx0x1x1x1ComputedData.readonly" :step="tSearchx0x1x1x1ComputedData.step" :autofocus="tSearchx0x1x1x1ComputedData.autofocus" :form="tSearchx0x1x1x1ComputedData.form" :label="tSearchx0x1x1x1ComputedData.label" :tabindex="tSearchx0x1x1x1ComputedData.tabindex" :validate-event="tSearchx0x1x1x1ComputedData.validateEvent" :c-style="tSearchx0x1x1x1ComputedData.cStyle" :has-search-btn="tSearchx0x1x1x1ComputedData.hasSearchBtn" @change="onchange1765343789835"></t-search><t-text-common id="t-text-common-f2d3.f1c2ed7ae" class="createPointDialog-t-text-common-0-1-1-2"  :label="tTextCommonx0x1x1x2ComputedData.label" :editable="tTextCommonx0x1x1x2ComputedData.editable" :c-style="tTextCommonx0x1x1x2ComputedData.cStyle"></t-text-common><t-search id="t-search-fdb5.40b818e3e" class="createPointDialog-t-search-0-1-1-3"  :type="tSearchx0x1x1x3ComputedData.type" :input-value="tSearchx0x1x1x3ComputedData.inputValue" :maxlength="tSearchx0x1x1x3ComputedData.maxlength" :minlength="tSearchx0x1x1x3ComputedData.minlength" :show-word-limit="tSearchx0x1x1x3ComputedData.showWordLimit" :placeholder="tSearchx0x1x1x3ComputedData.placeholder" :clearable="tSearchx0x1x1x3ComputedData.clearable" :show-password="tSearchx0x1x1x3ComputedData.showPassword" :disabled="tSearchx0x1x1x3ComputedData.disabled" :prefix-icon="tSearchx0x1x1x3ComputedData.prefix-icon" :suffix-icon="tSearchx0x1x1x3ComputedData.suffix-icon" :rows="tSearchx0x1x1x3ComputedData.rows" :autosize="tSearchx0x1x1x3ComputedData.autosize" :name="tSearchx0x1x1x3ComputedData.name" :readonly="tSearchx0x1x1x3ComputedData.readonly" :step="tSearchx0x1x1x3ComputedData.step" :autofocus="tSearchx0x1x1x3ComputedData.autofocus" :form="tSearchx0x1x1x3ComputedData.form" :label="tSearchx0x1x1x3ComputedData.label" :tabindex="tSearchx0x1x1x3ComputedData.tabindex" :validate-event="tSearchx0x1x1x3ComputedData.validateEvent" :c-style="tSearchx0x1x1x3ComputedData.cStyle" :has-search-btn="tSearchx0x1x1x3ComputedData.hasSearchBtn" @change="onchange1765343810297"></t-search><t-button id="t-button-9c4f.845fa93f2" class="createPointDialog-t-button-0-1-1-4"  :label="tButtonx0x1x1x4ComputedData.label" :round="tButtonx0x1x1x4ComputedData.round" :plain="tButtonx0x1x1x4ComputedData.plain" :disabled="tButtonx0x1x1x4ComputedData.disabled" :type="tButtonx0x1x1x4ComputedData.type" :size="tButtonx0x1x1x4ComputedData.size" :native-type="tButtonx0x1x1x4ComputedData.native-type" :c-style="tButtonx0x1x1x4ComputedData.cStyle" @click="onclick1765263876106"></t-button></t-col><t-col v-if="state.searchType === '1'" id="t-col-8f11.82c76f134" class="createPointDialog-t-col-0-1-2"  :span="tColx0x1x2ComputedData.span" :offset="tColx0x1x2ComputedData.offset" :push="tColx0x1x2ComputedData.push" :pull="tColx0x1x2ComputedData.pull" :c-style="tColx0x1x2ComputedData.cStyle"><t-search id="t-search-8f1f.c6366dd3" class="createPointDialog-t-search-0-1-2-0"  :type="tSearchx0x1x2x0ComputedData.type" :input-value="replaceCssVariables(filterData(state.keywords, componentPropBindingMap?.['t-search-8f1f.c6366dd3']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tSearchx0x1x2x0ComputedData.maxlength" :minlength="tSearchx0x1x2x0ComputedData.minlength" :show-word-limit="tSearchx0x1x2x0ComputedData.showWordLimit" :placeholder="tSearchx0x1x2x0ComputedData.placeholder" :clearable="tSearchx0x1x2x0ComputedData.clearable" :show-password="tSearchx0x1x2x0ComputedData.showPassword" :disabled="tSearchx0x1x2x0ComputedData.disabled" :prefix-icon="tSearchx0x1x2x0ComputedData.prefix-icon" :suffix-icon="tSearchx0x1x2x0ComputedData.suffix-icon" :rows="tSearchx0x1x2x0ComputedData.rows" :autosize="tSearchx0x1x2x0ComputedData.autosize" :name="tSearchx0x1x2x0ComputedData.name" :readonly="tSearchx0x1x2x0ComputedData.readonly" :step="tSearchx0x1x2x0ComputedData.step" :autofocus="tSearchx0x1x2x0ComputedData.autofocus" :form="tSearchx0x1x2x0ComputedData.form" :label="tSearchx0x1x2x0ComputedData.label" :tabindex="tSearchx0x1x2x0ComputedData.tabindex" :validate-event="tSearchx0x1x2x0ComputedData.validateEvent" :c-style="tSearchx0x1x2x0ComputedData.cStyle" :has-search-btn="tSearchx0x1x2x0ComputedData.hasSearchBtn" @change="onchange1765335125316"></t-search><t-button id="t-button-c5f1.5b8e4d04f" class="createPointDialog-t-button-0-1-2-1"  :label="tButtonx0x1x2x1ComputedData.label" :round="tButtonx0x1x2x1ComputedData.round" :plain="tButtonx0x1x2x1ComputedData.plain" :disabled="tButtonx0x1x2x1ComputedData.disabled" :type="tButtonx0x1x2x1ComputedData.type" :size="tButtonx0x1x2x1ComputedData.size" :native-type="tButtonx0x1x2x1ComputedData.native-type" :c-style="tButtonx0x1x2x1ComputedData.cStyle" @click="onclick1765263809919"></t-button></t-col></t-row><t-circle id="t-circle-5b81.a449abb12" class="createPointDialog-t-circle-0-2"  :tip="tCirclex0x2ComputedData.tip" :label="tCirclex0x2ComputedData.label" :active="tCirclex0x2ComputedData.active" :c-style="tCirclex0x2ComputedData.cStyle" @click="onclick1764916493801"></t-circle><t-circle id="t-circle-3789.f931b2c6a" class="createPointDialog-t-circle-0-3"  :tip="tCirclex0x3ComputedData.tip" :label="tCirclex0x3ComputedData.label" :active="tCirclex0x3ComputedData.active" :c-style="tCirclex0x3ComputedData.cStyle" @click="onclick1764916598821_0_0"></t-circle></div>
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
import { TButton, TCircle, TCol, TRow, TSearch, TSelect, TTable, TTextCommon } from '@ths/design';

export default {
  components: {
    TButton,
    TCircle,
    TCol,
    TRow,
    TSearch,
    TSelect,
    TTable,
    TTextCommon,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-table-d425.38d4adc0e":{"attributeName":"tTablex0x0","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-row-4db1.067ee1c6c":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-2c78.77782b697":{"attributeName":"tColx0x1x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-select-9f94.5f17331":{"attributeName":"tSelectx0x1x0x0","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]},"scrollbarThumbColor":{"filters":[]},"scrollbarTrackColor":{"filters":[]},"scrollbarWidth":{"filters":[]}},"t-col-155f.40a08e56e":{"attributeName":"tColx0x1x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-a97f.428fa765b":{"attributeName":"tTextCommonx0x1x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-search-b328.9544fdbfa":{"attributeName":"tSearchx0x1x1x1","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]},"hasSearchBtn":{"filters":[]}},"t-text-common-f2d3.f1c2ed7ae":{"attributeName":"tTextCommonx0x1x1x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-search-fdb5.40b818e3e":{"attributeName":"tSearchx0x1x1x3","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]},"hasSearchBtn":{"filters":[]}},"t-button-9c4f.845fa93f2":{"attributeName":"tButtonx0x1x1x4","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-col-8f11.82c76f134":{"attributeName":"tColx0x1x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-search-8f1f.c6366dd3":{"attributeName":"tSearchx0x1x2x0","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]},"hasSearchBtn":{"filters":[]}},"t-button-c5f1.5b8e4d04f":{"attributeName":"tButtonx0x1x2x1","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-circle-5b81.a449abb12":{"attributeName":"tCirclex0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-circle-3789.f931b2c6a":{"attributeName":"tCirclex0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   lat: "",
   lon: "",
   keywords: "",
   pointList: [{"operation":"获取坐标","address":"南庄路285","phone":"15105012611","poiType":"101","name":"啊彬小炒","source":"0","hotPointID":"05CCC9B21D2776F6","lonlat":"118.85764,27.35664"}],
   searchType: "1",
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
            default: {"width":"100%","height":"380px","backgroundColor":"rgba(24, 37, 64, 0)","position":"unset","left":"0px","top":"63px","borderBottom":"1px Solid var(--targer-btn-border)","fontWeight":"400","animationName":"","borderTopLeftRadius":"20px","borderTopRightRadius":"20px","borderBottomRightRadius":"20px","borderBottomLeftRadius":"20px","borderDirection":"all","borderLeft":"1px Solid var(--targer-btn-border)","borderTop":"1px Solid var(--targer-btn-border)","borderRight":"1px Solid var(--targer-btn-border)","border":"auto !important","background":"var(--intergrated-query-panel-bg)","fillType":"color","display":"none","paddingTop":"20px","paddingLeft":"10px","paddingRight":"10px","paddingBottom":"20px"},
            
            },
 default: { 
 
height:348,
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","type":"default","key":"icon","stateKey":"","width":"52PX","minWidth":"","align":"center","headerAlign":"left","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"assets/images/2023-01-05/95d04d0c780c4e8186c44fb450ba8fe5.png","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"}}},{"label":"行政区","type":"default","key":"address","stateKey":"","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoKey":"name","infoStyle":{"fontStyle":{"display":"block"}}},{"label":"达标率","type":"operation","key":"operation","stateKey":"achievementRateValue","width":"100px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"},"cellStyle":{"cursor":"pointer"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(183, 227, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(183, 227, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"operationList":[{"name":"获取坐标","id":"获取坐标","fontStyle":{"color":"rgba(255, 255, 255, 1)","background":"var(--targer-btn-shadow)","fillType":"color","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":"","borderTopLeftRadius":"5px","borderTopRightRadius":"5px","borderBottomRightRadius":"5px","borderBottomLeftRadius":"5px"}}]}],
data:[{"operation":"获取坐标","address":"南庄路285","phone":"15105012611","poiType":"101","name":"啊彬小炒","source":"0","hotPointID":"05CCC9B21D2776F6","lonlat":"118.85764,27.35664"}],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"380px","backgroundColor":"rgba(24, 37, 64, 0)","position":"unset","left":"0px","top":"63px","borderBottom":"1px Solid var(--targer-btn-border)","fontWeight":"400","animationName":"","borderTopLeftRadius":"20px","borderTopRightRadius":"20px","borderBottomRightRadius":"20px","borderBottomLeftRadius":"20px","borderDirection":"all","borderLeft":"1px Solid var(--targer-btn-border)","borderTop":"1px Solid var(--targer-btn-border)","borderRight":"1px Solid var(--targer-btn-border)","border":"auto !important","background":"var(--intergrated-query-panel-bg)","fillType":"color","display":"none","paddingTop":"20px","paddingLeft":"10px","paddingRight":"10px","paddingBottom":"20px"}},"headerCell":{"default":{"borderBottom":"0px none rgb(23,62,228)","borderLeft":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","color":"rgba(0, 255, 255, 1)","width":"418px","height":"34px","backgroundColor":"rgba(20, 112, 204, 0.3)","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"10px","paddingBottom":"10px","marginBottom":"0px","paddingLeft":"12px","paddingRight":"12px","lineHeight":"22px"}},"bodyCell":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.15)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"7px","paddingBottom":"7px","paddingLeft":"12px","paddingRight":"12px"},"hover":{"backgroundColor":"rgba(20, 112, 204, 0.15)"}},"stripeBodyCell":{"default":{"backgroundColor":"var(--t-transparent-color)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"},"hover":{"backgroundColor":""}},"headerRowWrapper":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.3)","height":"38px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","display":"none"}},"stripeBodyRow":{"default":{"backgroundColor":"var(--t-transparent-color)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit"},"hover":{"backgroundColor":""}},"rowWrapper":{"default":{"backgroundColor":""}}}, 
 },
},
tRowx0x1: {
defaultStyle: {
            default: {"width":"auto","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0","top":"0px","background":"var(--intergrated-query-panel-bg)","fillType":"color","borderTopLeftRadius":"40px","borderTopRightRadius":"40px","borderBottomRightRadius":"40px","borderBottomLeftRadius":"40px","paddingLeft":"10px","paddingRight":"80px","gap":"unset","paddingTop":"10px","paddingBottom":"10px","animationName":"","animationDuration":"","animationTimingFunction":"","animationDelay":"","animationIterationCount":"","animationFillMode":"forwards","animationDirection":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0","top":"0px","background":"var(--intergrated-query-panel-bg)","fillType":"color","borderTopLeftRadius":"40px","borderTopRightRadius":"40px","borderBottomRightRadius":"40px","borderBottomLeftRadius":"40px","paddingLeft":"10px","paddingRight":"80px","gap":"unset","paddingTop":"10px","paddingBottom":"10px","animationName":"","animationDuration":"","animationTimingFunction":"","animationDelay":"","animationIterationCount":"","animationFillMode":"forwards","animationDirection":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x1x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:6,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tSelectx0x1x0x0: {
defaultStyle: {
            default: {"width":"136px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px Solid rgba(0,0,0,1)","borderTop":"1px Solid rgba(0,0,0,1)","borderRight":"1px Solid rgba(0,0,0,1)","borderBottom":"1px Solid rgba(0,0,0,1)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","position":"unset","left":"76px","top":"-33px","borderDirection":"all","border":"unset !important","background":"rgba(255, 0, 0, 0)","fillType":"color"},
            
            },
 default: { 
 
activeValue:"1",
options:[{"value":"1","label":"按关键字搜索","disabled":false},{"value":"2","label":"按坐标搜索","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"136px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px Solid rgba(0,0,0,1)","borderTop":"1px Solid rgba(0,0,0,1)","borderRight":"1px Solid rgba(0,0,0,1)","borderBottom":"1px Solid rgba(0,0,0,1)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","position":"unset","left":"76px","top":"-33px","borderDirection":"all","border":"unset !important","background":"rgba(255, 0, 0, 0)","fillType":"color"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"}}},
scrollbarThumbColor:"rgb(193,193,193)",
scrollbarTrackColor:"rgb(241,241,241)",
scrollbarWidth:"6px", 
 },
},
tColx0x1x1: {
defaultStyle: {
            default: {"width":"auto","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"11px","top":"442px","background":"rgba(20, 112, 204, 0)","fillType":"color","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","paddingLeft":"0px","gap":"10px","animationName":""},
            
            },
 default: { 
 
span:18,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"11px","top":"442px","background":"rgba(20, 112, 204, 0)","fillType":"color","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","paddingLeft":"0px","gap":"10px","animationName":""}}}, 
 },
},
tTextCommonx0x1x1x0: {
defaultStyle: {
            default: {"width":"52px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-319px","top":"593px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"纬度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"52px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-319px","top":"593px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tSearchx0x1x1x1: {
defaultStyle: {
            default: {"width":"103px","height":"32px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":"","top":"461px","left":"-271px","paddingLeft":"10px","paddingRight":"10px","position":"unset"},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"",
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
cStyle:{"wrapper":{"default":{"width":"103px","height":"32px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":"","top":"461px","left":"-271px","paddingLeft":"10px","paddingRight":"10px","position":"unset"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"prefix":{"default":{"color":"var(--business-text-avianize)","display":"none"}}},
hasSearchBtn:false, 
 },
},
tTextCommonx0x1x1x2: {
defaultStyle: {
            default: {"width":"52px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-329px","top":"538px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"经度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"52px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"-329px","top":"538px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tSearchx0x1x1x3: {
defaultStyle: {
            default: {"width":"103px","height":"32px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":"","top":"452px","left":"-395px","paddingLeft":"10px","paddingRight":"10px"},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"",
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
cStyle:{"wrapper":{"default":{"width":"103px","height":"32px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":"","top":"452px","left":"-395px","paddingLeft":"10px","paddingRight":"10px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"prefix":{"default":{"color":"var(--business-text-avianize)","display":"none"}}},
hasSearchBtn:false, 
 },
},
tButtonx0x1x1x4: {
defaultStyle: {
            default: {"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","position":"unset","left":"575px","top":"-112px"},
            
            },
 default: { 
 
label:"确定",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","position":"unset","left":"575px","top":"-112px"},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tColx0x1x2: {
defaultStyle: {
            default: {"width":"auto","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"1px","top":"1px","background":"rgba(20, 112, 204, 0)","fillType":"color","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","paddingLeft":"0px","gap":"10px"},
            
            },
 default: { 
 
span:18,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"1px","top":"1px","background":"rgba(20, 112, 204, 0)","fillType":"color","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","paddingLeft":"0px","gap":"10px"}}}, 
 },
},
tSearchx0x1x2x0: {
defaultStyle: {
            default: {"width":"340px","height":"32px","backgroundColor":"rgba(23, 62, 228, 0)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":"","position":"unset","left":"217px","top":"-36px","paddingLeft":"10px","borderTopLeftRadius":"20px","borderTopRightRadius":"20px","borderBottomLeftRadius":"20px","borderBottomRightRadius":"20px"},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入关键字",
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
cStyle:{"wrapper":{"default":{"width":"340px","height":"32px","backgroundColor":"rgba(23, 62, 228, 0)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":"","position":"unset","left":"217px","top":"-36px","paddingLeft":"10px","borderTopLeftRadius":"20px","borderTopRightRadius":"20px","borderBottomLeftRadius":"20px","borderBottomRightRadius":"20px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"prefix":{"default":{"color":"var(--business-text-avianize)","display":"none"}}},
hasSearchBtn:false, 
 },
},
tButtonx0x1x2x1: {
defaultStyle: {
            default: {"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","position":"unset","left":"580px","top":"-41px"},
            
            },
 default: { 
 
label:"搜索",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","position":"unset","left":"580px","top":"-41px"},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"disabled":{"background":"var(--scrollbar-thumb-color)","fillType":"color"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tCirclex0x2: {
defaultStyle: {
            default: {"width":"45px","height":"45px","border":"unset !important","borderTop":"1px Solid var(--t-circle-border-color)","borderLeft":"1px Solid var(--t-circle-border-color)","borderBottom":"1px Solid var(--t-circle-border-color)","borderRight":"1px Solid var(--t-circle-border-color)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomRightRadius":"50%","borderBottomLeftRadius":"50%","position":"unset","left":"575px","top":"2.5px","cursor":"pointer","display":"none"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"45px","height":"45px","border":"unset !important","borderTop":"1px Solid var(--t-circle-border-color)","borderLeft":"1px Solid var(--t-circle-border-color)","borderBottom":"1px Solid var(--t-circle-border-color)","borderRight":"1px Solid var(--t-circle-border-color)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomRightRadius":"50%","borderBottomLeftRadius":"50%","position":"unset","left":"575px","top":"2.5px","cursor":"pointer","display":"none"},"active":{"background":"var(--t-brand8)","fillType":"color"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset"}}}, 
 },
},
tCirclex0x3: {
defaultStyle: {
            default: {"width":"45px","height":"45px","border":"unset !important","borderTop":"1px Solid var(--t-circle-border-color)","borderLeft":"1px Solid var(--t-circle-border-color)","borderBottom":"1px Solid var(--t-circle-border-color)","borderRight":"1px Solid var(--t-circle-border-color)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomRightRadius":"50%","borderBottomLeftRadius":"50%","position":"unset","left":"575px","top":"2.5px","animationName":"","display":"block","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"45px","height":"45px","border":"unset !important","borderTop":"1px Solid var(--t-circle-border-color)","borderLeft":"1px Solid var(--t-circle-border-color)","borderBottom":"1px Solid var(--t-circle-border-color)","borderRight":"1px Solid var(--t-circle-border-color)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomRightRadius":"50%","borderBottomLeftRadius":"50%","position":"unset","left":"575px","top":"2.5px","animationName":"","display":"block","cursor":"pointer"},"active":{"background":"var(--t-brand8)","fillType":"color"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset"}}}, 
 },
},
});
const searchPointByKeywords = () => {
if (!state.keywords) {
  state.pointList = [];
  return;
}
const url = 'https://api.tianditu.gov.cn/v2/search';
const params = {
  postStr: JSON.stringify({
    keyWord: state.keywords,
    queryType: 12,
    start: 0,
    count: 300,
    specify: "156350700"
  }),
  type: "query",
  tk: "50fe7fa0bb2ccc70315fd349526ce6ec"
};
axios.get(url, {
  params
}).then((res) => {
  state.pointList = res?.data?.pois || [];

  if (state.pointList?.length) {
    state.pointList = state.pointList.map((item) => {
      return {
        ...item,
        operation: "获取坐标"
      }
    })
  }
})
};
const searchPointByCoordinate = () => {


const url = 'http://api.tianditu.gov.cn/geocoder';
const params = {
  postStr: JSON.stringify({
    'lon': state.lon,
    'lat': state.lat,
    'ver': 1
  }),
  type: "geocode",
  tk: "50fe7fa0bb2ccc70315fd349526ce6ec"
};

axios.get(url, {
  params
}).then((res) => {
  if (res?.data?.result) {
    const { location, formatted_address } = res?.data?.result;

    setCurrentPointInfo(location.lon,location.lat,formatted_address);
  }
})
};
const setCurrentPointInfo = (longitude,latitude,formatted_address) => {
global.airGlobalVariables.currentPointInfo = {
  "burning_location": formatted_address,
  "burning_time": "",
  "approved_area": "",
  "approval_no": "",
  "fire_reason": "",
  "on_site_manager": "",
  "phone_number": "",
  "approved_fire_time": "",
  "burning_status": "",
  "compar_plot_code": "",
  "compar_image_longitude": "",
  "compar_image_latitude": "",
  "baseline_image_no": "",
  "baseline_image_url": "",
  "monitoring_image_no": "",
  "monitoring_image_url": "",
  "actual_burning_area": "",
  "problem_description": "",
  "problem_progress": "",
  "region_code": "350700000000",
  "region_name": "市辖区",
  longitude,
  latitude,
}


rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'createDialog',  // 消息类型名称
    data: {
      params: {                
        'title': '点位信息',
        'maxWidth': '1200px',
        'maxHeight': '480px',
        'minWidth': '1000px',
        'minHeight': '480px',
        'contentComName': 'lianshanPointAddComponent'
      }
    }
  }
);
};
const handleSelectPoint = (row,column) => {
const { lonlat, address } = row;
const coordinate = lonlat.split(',');

// 点击获取点位后 设置当前的点位信息
if (column.property === 'operation') {
  setCurrentPointInfo(coordinate[0], coordinate[1], address);
}

/* 发送定位的消息 */
if (column.label === '定位') {
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'gotoPoint',  // 消息类型名称
      data: {
        longitude: coordinate[0],
        latitude: coordinate[1]
      }
    }
  );
}
};
const onclick1764916598821_0_0 = () => {

// 设置元素X轴位移
document.getElementById('t-row-4db1.067ee1c6c').style.left = '0px';
// 添加位移动画
document.getElementById('t-row-4db1.067ee1c6c').style.transition = 'all 500ms ease';
setTimeout(() => { document.getElementById('t-row-4db1.067ee1c6c').style.transition = ''; }, 500);

// 显示元素并加动画
document.getElementById('t-circle-5b81.a449abb12').style.display = 'block';
runAnimation('t-circle-5b81.a449abb12', [""]);

// 隐藏元素并加动画
runAnimation('t-circle-3789.f931b2c6a', [""], 'none');
// 设置变量值
state.searchType = '1';
// 设置变量值
state.keywords = '';
};
const onchange1764919076467 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.searchType = value;
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "clearGotoPoint", // 消息名称
data: {}, // 发送的数据
});
};
const onclick1764916493801 = () => {

// 设置元素X轴位移
document.getElementById('t-row-4db1.067ee1c6c').style.left = '650px';
// 添加位移动画
document.getElementById('t-row-4db1.067ee1c6c').style.transition = 'all 500ms ease';
setTimeout(() => { document.getElementById('t-row-4db1.067ee1c6c').style.transition = ''; }, 500);

// 隐藏元素并加动画
runAnimation('t-circle-5b81.a449abb12', [""], 'none');

// 显示元素并加动画
document.getElementById('t-circle-3789.f931b2c6a').style.display = 'block';
runAnimation('t-circle-3789.f931b2c6a', [""]);

// 隐藏元素并加动画
runAnimation('t-table-d425.38d4adc0e', [""], 'none');
// 设置变量值
state.keywords = '';
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "clearGotoPoint", // 消息名称
data: {}, // 发送的数据
});
};
const onclick1765263809919 = () => {

// 显示元素并加动画
document.getElementById('t-table-d425.38d4adc0e').style.display = 'block';
runAnimation('t-table-d425.38d4adc0e', [""]);
// 执行自定义方法
searchPointByKeywords();
};
const onclick1765263876106 = () => {

// 隐藏元素并加动画
runAnimation('t-circle-5b81.a449abb12', [""], 'none');

// 显示元素并加动画
document.getElementById('t-circle-3789.f931b2c6a').style.display = 'block';
runAnimation('t-circle-3789.f931b2c6a', [""]);

// 设置元素X轴位移
document.getElementById('t-row-4db1.067ee1c6c').style.left = '650px';
// 添加位移动画
document.getElementById('t-row-4db1.067ee1c6c').style.transition = 'all 500ms ease';
setTimeout(() => { document.getElementById('t-row-4db1.067ee1c6c').style.transition = ''; }, 500);
// 执行自定义方法
searchPointByCoordinate();
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "clearGotoPoint", // 消息名称
data: {}, // 发送的数据
});
};
const onoperationClick1765264583036 = (row,operationId) => {

// 设置元素X轴位移
document.getElementById('t-row-4db1.067ee1c6c').style.left = '650px';
// 添加位移动画
document.getElementById('t-row-4db1.067ee1c6c').style.transition = 'all 500ms ease';
setTimeout(() => { document.getElementById('t-row-4db1.067ee1c6c').style.transition = ''; }, 500);

// 隐藏元素并加动画
runAnimation('t-circle-5b81.a449abb12', [""], 'none');

// 显示元素并加动画
document.getElementById('t-circle-3789.f931b2c6a').style.display = 'block';
runAnimation('t-circle-3789.f931b2c6a', [""]);

// 隐藏元素并加动画
runAnimation('t-table-d425.38d4adc0e', [""], 'none');
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "clearGotoPoint", // 消息名称
data: {}, // 发送的数据
});
};
const onchange1765335125316 = (value) => {
// 设置变量值
state.keywords = value;
};
const oncellClick1765336517530 = (row,column,cell,event) => {
// 执行自定义方法
handleSelectPoint(row,column);
};
const onchange1765343789835 = (value) => {
// 设置变量值
state.lat = value;
};
const onchange1765343810297 = (value) => {
// 设置变量值
state.lon = value;
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 searchListByPointName: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"/search","method":"post","baseURL":"http://api.tianditu.gov.cn/v2","data":"qs.stringify({\"tk\":\"50fe7fa0bb2ccc70315fd349526ce6ec\",\"type\":\"query\",\"postStr\":{\"keyWord\":\"state.keywords\",\"queryType\":\"12\",\"start\":\"0\",\"count\":\"300\",\"specify\":\"22156350700\"}})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":"/search","method":"post","baseURL":"http://api.tianditu.gov.cn/v2","data":qs.stringify({"tk":"50fe7fa0bb2ccc70315fd349526ce6ec","type":"query","postStr":{"keyWord":state.keywords,"queryType":"12","start":"0","count":"300","specify":"22156350700"}}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('http://api.tianditu.gov.cn/v2-/search',  "qs.stringify({\"tk\":\"50fe7fa0bb2ccc70315fd349526ce6ec\",\"type\":\"query\",\"postStr\":{\"keyWord\":\state.keywords\,\"queryType\":\"12\",\"start\":\"0\",\"count\":\"300\",\"specify\":\"22156350700\"}})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['searchListByPointName'] = res.data;
                
     state.pointList = res?.data?.pois || [];

if (state.pointList?.length) {
  state.pointList = state.pointList.map((item) => {
    return {
      ...item,
      operation: "获取坐标"
    }
  })
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
                            setPageScale('t-l-c-createPointDialog', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onBeforeMount(() => {
});
onMounted(() => {
setPageScale('t-l-c-createPointDialog', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
document.getElementById('t-circle-5b81.a449abb12')?.setAttribute('attr-visible', document.getElementById('t-circle-5b81.a449abb12')?.style.display);
document.getElementById('t-circle-5b81.a449abb12')?.setAttribute('attr-visible', document.getElementById('t-circle-5b81.a449abb12')?.style.display);
document.getElementById('t-table-d425.38d4adc0e')?.setAttribute('attr-visible', document.getElementById('t-table-d425.38d4adc0e')?.style.display);
document.getElementById('t-circle-5b81.a449abb12')?.setAttribute('attr-visible', document.getElementById('t-circle-5b81.a449abb12')?.style.display);
document.getElementById('t-circle-5b81.a449abb12')?.setAttribute('attr-visible', document.getElementById('t-circle-5b81.a449abb12')?.style.display);

// 设置元素X轴位移
document.getElementById('t-row-4db1.067ee1c6c').style.left = '650px';
// 添加位移动画
document.getElementById('t-row-4db1.067ee1c6c').style.transition = 'all 500ms ease';
setTimeout(() => { document.getElementById('t-row-4db1.067ee1c6c').style.transition = ''; }, 500);
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTablex0x0ComputedData = computed(() => _.merge({}, componentState.tTablex0x0.default, componentState.tTablex0x0?.[state.screenSize]));

 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tColx0x1x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x0.default, componentState.tColx0x1x0?.[state.screenSize]));

 const tSelectx0x1x0x0ComputedData = computed(() => _.merge({}, componentState.tSelectx0x1x0x0.default, componentState.tSelectx0x1x0x0?.[state.screenSize]));

 const tColx0x1x1ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1.default, componentState.tColx0x1x1?.[state.screenSize]));

 const tTextCommonx0x1x1x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x1x0.default, componentState.tTextCommonx0x1x1x0?.[state.screenSize]));

 const tSearchx0x1x1x1ComputedData = computed(() => _.merge({}, componentState.tSearchx0x1x1x1.default, componentState.tSearchx0x1x1x1?.[state.screenSize]));

 const tTextCommonx0x1x1x2ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1x1x2.default, componentState.tTextCommonx0x1x1x2?.[state.screenSize]));

 const tSearchx0x1x1x3ComputedData = computed(() => _.merge({}, componentState.tSearchx0x1x1x3.default, componentState.tSearchx0x1x1x3?.[state.screenSize]));

 const tButtonx0x1x1x4ComputedData = computed(() => _.merge({}, componentState.tButtonx0x1x1x4.default, componentState.tButtonx0x1x1x4?.[state.screenSize]));

 const tColx0x1x2ComputedData = computed(() => _.merge({}, componentState.tColx0x1x2.default, componentState.tColx0x1x2?.[state.screenSize]));

 const tSearchx0x1x2x0ComputedData = computed(() => _.merge({}, componentState.tSearchx0x1x2x0.default, componentState.tSearchx0x1x2x0?.[state.screenSize]));

 const tButtonx0x1x2x1ComputedData = computed(() => _.merge({}, componentState.tButtonx0x1x2x1.default, componentState.tButtonx0x1x2x1?.[state.screenSize]));

 const tCirclex0x2ComputedData = computed(() => _.merge({}, componentState.tCirclex0x2.default, componentState.tCirclex0x2?.[state.screenSize]));

 const tCirclex0x3ComputedData = computed(() => _.merge({}, componentState.tCirclex0x3.default, componentState.tCirclex0x3?.[state.screenSize]));

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
tRowx0x1ComputedData,
tColx0x1x0ComputedData,
tSelectx0x1x0x0ComputedData,
tColx0x1x1ComputedData,
tTextCommonx0x1x1x0ComputedData,
tSearchx0x1x1x1ComputedData,
tTextCommonx0x1x1x2ComputedData,
tSearchx0x1x1x3ComputedData,
tButtonx0x1x1x4ComputedData,
tColx0x1x2ComputedData,
tSearchx0x1x2x0ComputedData,
tButtonx0x1x2x1ComputedData,
tCirclex0x2ComputedData,
tCirclex0x3ComputedData,
onoperationClick1765264583036,
oncellClick1765336517530,
onchange1764919076467,
onchange1765343789835,
onchange1765343810297,
onclick1765263876106,
onchange1765335125316,
onclick1765263809919,
onclick1764916493801,
onclick1764916598821_0_0,
};
},
}
</script>

<style scoped>
.t-l-c-createPointDialog {
position: relative;
overflow: hidden;
--theme-color: var(--t-brand8);
--theme-color-opacity-10: rgba(var(--t-brand8), .1);
--theme-color-opacity-15: rgba(var(--t-brand8), .15);
--theme-color-opacity-40: rgba(var(--t-brand8), .4);
--theme-color-opacity-60: rgba(var(--t-brand8), .6);
--theme-color-opacity-80: rgba(var(--t-brand8), .8);
--theme-color-opacity-90: rgba(var(--t-brand8), .9);
pointer-events: none;
position: Static;
z-index: 1;
filter: ;
overflow: hidden;
width: 629px;
height: 827px;
background-color: rgba(0,0,0,0);
}
.t-l-c-createPointDialog .createPointDialog-t-table-0-0 {
position: absolute !important;
top: 63px;
left: 0px;
width: 100%;
height: 380px;
pointer-events: auto;
}

.t-l-c-createPointDialog .createPointDialog-t-row-0-1 {
position: absolute !important;
top: 0px;
left: 0;
width: auto;
height: auto;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
background: var(--intergrated-query-panel-bg);
fill-type: color;
border-top-left-radius: 40px;
border-top-right-radius: 40px;
border-bottom-right-radius: 40px;
border-bottom-left-radius: 40px;
padding-left: 10px;
padding-right: 80px;
gap: unset;
padding-top: 10px;
padding-bottom: 10px;
animation-name: ;
animation-duration: ;
animation-timing-function: ;
animation-delay: ;
animation-iteration-count: ;
animation-fill-mode: forwards;
animation-direction: ;
}

.t-l-c-createPointDialog .createPointDialog-t-col-0-1-0 {
position: relative;
top: null;
left: null;
width: auto;
height: auto;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-createPointDialog .createPointDialog-t-select-0-1-0-0 {
position: unset;
top: -110px;
left: 141px;
width: 136px;
height: 32px;
pointer-events: auto;
}

.t-l-c-createPointDialog .createPointDialog-t-col-0-1-1 {
position: relative;
top: null;
left: null;
width: auto;
height: auto;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
background: rgba(20, 112, 204, 0);
fill-type: color;
border-top-left-radius: 0px;
border-top-right-radius: 0px;
border-bottom-right-radius: 0px;
border-bottom-left-radius: 0px;
padding-left: 0px;
gap: 10px;
animation-name: ;
}

.t-l-c-createPointDialog .createPointDialog-t-text-common-0-1-1-0 {
position: unset;
top: 593px;
left: -319px;
width: 52px;
height: 20px;
pointer-events: auto;
}

.t-l-c-createPointDialog .createPointDialog-t-search-0-1-1-1 {
position: unset;
top: 461px;
left: -271px;
width: 103px;
height: 32px;
pointer-events: auto;
}

.t-l-c-createPointDialog .createPointDialog-t-text-common-0-1-1-2 {
position: unset;
top: 538px;
left: -329px;
width: 52px;
height: 20px;
pointer-events: auto;
}

.t-l-c-createPointDialog .createPointDialog-t-search-0-1-1-3 {
position: unset;
top: 452px;
left: -395px;
width: 103px;
height: 32px;
pointer-events: auto;
}

.t-l-c-createPointDialog .createPointDialog-t-button-0-1-1-4 {
position: unset;
top: -112px;
left: 575px;
width: 50px;
height: 32px;
pointer-events: auto;
}

.t-l-c-createPointDialog .createPointDialog-t-col-0-1-2 {
position: relative;
top: null;
left: null;
width: auto;
height: auto;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
background: rgba(20, 112, 204, 0);
fill-type: color;
border-top-left-radius: 0px;
border-top-right-radius: 0px;
border-bottom-right-radius: 0px;
border-bottom-left-radius: 0px;
padding-left: 0px;
gap: 10px;
}

.t-l-c-createPointDialog .createPointDialog-t-search-0-1-2-0 {
position: unset;
top: -36px;
left: 217px;
width: 340px;
height: 32px;
pointer-events: auto;
}

.t-l-c-createPointDialog .createPointDialog-t-button-0-1-2-1 {
position: unset;
top: -122px;
left: 565px;
width: 50px;
height: 32px;
pointer-events: auto;
}

.t-l-c-createPointDialog .createPointDialog-t-circle-0-2 {
position: absolute !important;
top: 2.5px;
left: 575px;
width: 45px;
height: 45px;
pointer-events: auto;
}

.t-l-c-createPointDialog .createPointDialog-t-circle-0-3 {
position: absolute !important;
top: 2.5px;
left: 575px;
width: 45px;
height: 45px;
pointer-events: auto;
}
</style>
