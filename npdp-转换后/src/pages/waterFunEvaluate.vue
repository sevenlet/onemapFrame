<template>
  <div id="t-l-c-waterFunEvaluate" class="t-l-c-waterFunEvaluate" ><t-rect id="t-rect-7c02.8fd5deb0a" class="waterFunEvaluate-t-rect-0-0"  :tip="componentState.tRectx0x0.tip" label="" :active="componentState.tRectx0x0.active" :c-style="componentState.tRectx0x0.cStyle"></t-rect><t-table id="t-table-7702.e927e9a4d" class="waterFunEvaluate-t-table-0-1"  height="508" :stripe="componentState.tTablex0x1.stripe" :border="componentState.tTablex0x1.border" :auto-scroll="componentState.tTablex0x1.autoScroll" :speed="6" :columns="componentState.tTablex0x1.columns" :data="state.list" :default-sort="componentState.tTablex0x1.defaultSort" :c-style="componentState.tTablex0x1.cStyle" @cell-click="oncellClick1734079187219"></t-table><t-search id="t-search-4200.403bc28e4" class="waterFunEvaluate-t-search-0-2"  type="text" :input-value="state.params.name" maxlength="" :minlength="0" :show-word-limit="componentState.tSearchx0x2.showWordLimit" placeholder="请输入关键字" :clearable="componentState.tSearchx0x2.clearable" :show-password="componentState.tSearchx0x2.showPassword" :disabled="componentState.tSearchx0x2.disabled" prefix-icon="" suffix-icon="" :rows="2" :autosize="componentState.tSearchx0x2.autosize" name="" :readonly="componentState.tSearchx0x2.readonly" step="" :autofocus="componentState.tSearchx0x2.autofocus" form="" label="" tabindex="" :validate-event="componentState.tSearchx0x2.validateEvent" :c-style="componentState.tSearchx0x2.cStyle" :has-search-btn="componentState.tSearchx0x2.hasSearchBtn" @input="oninput1734341937891"></t-search><t-list-card id="t-list-card-cde2.e72088c42" class="waterFunEvaluate-t-list-card-0-3"  :data="state.statisticalCard" :spacing-x="8" :col="3" direction="vertical" :exchange-order="componentState.tListCardx0x3.exchangeOrder" :unit-break="componentState.tListCardx0x3.unitBreak" :key-field="componentState.tListCardx0x3.keyField" active-key-field="title" active="" :c-style="componentState.tListCardx0x3.cStyle"></t-list-card><t-component id="t-component-6b34.5ec886b6a" class="waterFunEvaluate-t-component-0-4"  name="titleFirstBgComponent" :c-style="componentState.tComponentx0x4.cStyle" src="/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg" component-name="titleFirstBgComponent"></t-component><t-text id="t-text-aef2.cf14959ee" class="waterFunEvaluate-t-text-0-5"  label="水功能区达标情势" :editable="componentState.tTextx0x5.editable" :c-style="componentState.tTextx0x5.cStyle"></t-text><t-component id="t-component-7ac8.eb382f029" class="waterFunEvaluate-t-component-0-6"  name="titleFirstBgComponent" :c-style="componentState.tComponentx0x6.cStyle" src="/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg" component-name="titleFirstBgComponent"></t-component><t-text id="t-text-631e.7334d647c" class="waterFunEvaluate-t-text-0-7"  label="水功能区评价结果" :editable="componentState.tTextx0x7.editable" :c-style="componentState.tTextx0x7.cStyle"></t-text><t-select id="t-select-edde.7b8816b3a" class="waterFunEvaluate-t-select-0-8"  :active-value="state.params.level" :options="state.levelOptions" :alias="componentState.tSelectx0x8.alias" :multiple="componentState.tSelectx0x8.multiple" placeholder="请选择" :clearable="componentState.tSelectx0x8.clearable" :disabled="componentState.tSelectx0x8.disabled" name="" autocomplete="off" :filterable="componentState.tSelectx0x8.filterable" no-match-text="无匹配数据" no-data-text="无数据" :c-style="componentState.tSelectx0x8.cStyle" @change="onchange1734059900827"></t-select><t-date-picker id="t-date-picker-b078.d04348d99" class="waterFunEvaluate-t-date-picker-0-9"  placeholder="请选择" start-placeholder="开始日期" end-placeholder="结束日期" type="month" :clearable="componentState.tDatePickerx0x9.clearable" range-separator="-" :default-date="state.params.time" separator="-" :readonly="componentState.tDatePickerx0x9.readonly" :editable="componentState.tDatePickerx0x9.editable" :c-style="componentState.tDatePickerx0x9.cStyle" @date-change="ondateChange1734059925424"></t-date-picker><t-button id="t-button-fd14.ab2abed9d" class="waterFunEvaluate-t-button-0-10"  label="搜索" :round="componentState.tButtonx0x10.round" :plain="componentState.tButtonx0x10.plain" :disabled="componentState.tButtonx0x10.disabled" type="primary" size="medium" native-type="button" :c-style="componentState.tButtonx0x10.cStyle" @click="onclick1734419738763"></t-button></div>
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
import { TButton, TComponent, TDatePicker, TListCard, TRect, TSearch, TSelect, TTable, TText } from '@ths/design';

export default {
  components: {
    TButton,
    TComponent,
    TDatePicker,
    TListCard,
    TRect,
    TSearch,
    TSelect,
    TTable,
    TText,
  },
  setup() {
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
levelOptions: [],
list: [],
params: {"name":"","level":"","time":""},
statisticalCard: [{"title":"总数","num":0,"unit":"个","color":"#fff","icon":"assets/images/2024-12-05/9318cb0685104a01ba0f6d8c0ad8dc9d.svg"},{"title":"达标数量","num":0,"unit":"/0","color":"#00FF22","icon":"assets/images/2024-12-05/afe9d3e0b36249acaeab422809287a6c.svg"},{"title":"达标率","num":0,"unit":"%","color":"#00FF22","icon":"assets/images/2024-12-05/6afe9e3395864daca876a23dd746587f.svg"}],
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
defaultStyle: {"width":"450px","height":"64px","position":"unset","left":"0px","top":"0px","background":"var(--business-query-bg)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","animationName":""},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"64px","position":"unset","left":"0px","top":"0px","background":"var(--business-query-bg)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","animationName":""}}},
},
tTablex0x1: {
defaultStyle: {"width":"410px","height":"508px","position":"unset","left":"19px","top":"318px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
stripe:true,
border:false,
autoScroll:false,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"52PX","type":"state","stateKey":"iconStatus"},{"label":"水功能区名称","key":"WATERFUNC_NAME","align":"left","operationList":[],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"borderRadius":"","width":"21px","height":"17px","margin-right":"-1px","margin-left":"-18px","transform":"translateX(70px)","backgroundImage":"var(--business-section-auto)"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"197PX","showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"14PX"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"isShowIcon","infoKey":""},{"label":"水质目标","key":"WATERQUALITYLEVELTARGETNAME","stateKey":"WATERQUALITYLEVELTARGETNAME","align":"center","type":"state","operationList":[],"stateList":[{"name":"I类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅰ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"II类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"III类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"IV类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"V类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"劣V类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"-","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"","borderWidth":"0PX"}}],"width":"80PX","style":{"fontStyle":{"width":"40PX","height":"PX"}}},{"label":"评价结果","key":"WATERQUALITYLEVELNAME","stateKey":"WATERQUALITYLEVELNAME","align":"center","type":"state","operationList":[],"stateList":[{"name":"I类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅰ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"II类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"III类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"IV类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"V类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"劣V类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"-","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"","borderWidth":"0PX"}}],"width":"80PX","style":{"fontStyle":{"fontSize":"12PX","width":"PX","height":"PX","borderRadius":"PX","background":""}}}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"508px","position":"unset","left":"19px","top":"318px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","marginRight":"0px","backgroundColor":"","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"rgba(255, 255, 255, 1)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","color":"var(--t-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"highlightRow":{"default":{"backgroundColor":"var(--business-show-bg10)"}}},
},
tSearchx0x2: {
defaultStyle: {"width":"348px","height":"32px","position":"unset","left":"20px","top":"272px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":""},
showWordLimit:false,
clearable:true,
showPassword:false,
disabled:false,
autosize:false,
readonly:false,
autofocus:false,
validateEvent:true,
cStyle:{"wrapper":{"default":{"width":"348px","height":"32px","position":"unset","left":"20px","top":"272px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"prefix":{"default":{"color":"var(--business-text-avianize)"}}},
hasSearchBtn:false,
},
tListCardx0x3: {
defaultStyle: {"width":"418px","height":"68px","position":"unset","left":"16px","top":"131px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"},
data:[{"title":"总数","num":0,"unit":"个","color":"#fff","icon":"assets/images/2024-12-05/9318cb0685104a01ba0f6d8c0ad8dc9d.svg"},{"title":"达标数量","num":0,"unit":"/0","color":"#00FF22","icon":"assets/images/2024-12-05/afe9d3e0b36249acaeab422809287a6c.svg"},{"title":"达标率","num":0,"unit":"%","color":"#00FF22","icon":"assets/images/2024-12-05/6afe9e3395864daca876a23dd746587f.svg"}],
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","trend":"trend","color":"color","selectIcon":"icon"},
cStyle:{"wrapper":{"default":{"width":"418px","height":"68px","position":"unset","left":"16px","top":"131px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"}},"itemWrapper":{"default":{"height":"66px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"var(--business-show-bg30)","lineHeight":"18px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"0px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"num":{"default":{"fontSize":"24px","fontWeight":"700","marginRight":"2px","lineHeight":"20px","textAlign":"left","fontFamily":"DIN-bold","color":"var(--t-aqi-green)"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-unit-icon)"}},"title":{"default":{"fontSize":"14px","color":"var(--t-white)","marginTop":"0px"}},"icon":{"default":{"width":"32px","height":"32px","left":"16px","marginLeft":"20px"}},"numBox":{"default":{"marginTop":"6px"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"rightContent":{"default":{"alignItems":"flex-start","marginLeft":"8px"}}},
},
tComponentx0x4: {
defaultStyle: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"88px","animationName":""},
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"88px","animationName":""}}},
},
tTextx0x5: {
defaultStyle: {"width":"200px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"93px","fontFamily":"方正综艺","fontSize":"20px","animationName":""},
editable:false,
cStyle:{"wrapper":{"default":{"width":"200px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"93px","fontFamily":"方正综艺","fontSize":"20px","animationName":""}}},
},
tComponentx0x6: {
defaultStyle: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"229px","animationName":""},
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"229px","animationName":""}}},
},
tTextx0x7: {
defaultStyle: {"width":"200px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"234px","fontFamily":"方正综艺","fontSize":"20px","animationName":""},
editable:false,
cStyle:{"wrapper":{"default":{"width":"200px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"234px","fontFamily":"方正综艺","fontSize":"20px","animationName":""}}},
},
tSelectx0x8: {
defaultStyle: {"width":"132px","height":"32px","position":"unset","left":"16px","top":"16px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)"},
options:[],
alias:{"label":"CONTENT","value":"VALUE","disabled":"disabled"},
multiple:false,
clearable:false,
disabled:false,
filterable:false,
cStyle:{"wrapper":{"default":{"width":"132px","height":"32px","position":"unset","left":"16px","top":"16px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"}}},
},
tDatePickerx0x9: {
defaultStyle: {"width":"132px","height":"32px","position":"unset","left":"160px","top":"16px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},
clearable:false,
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"132px","height":"32px","position":"unset","left":"160px","top":"16px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","lineHeight":"20px"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","lineHeight":"20px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"30px"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
},
tButtonx0x10: {
defaultStyle: {"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","position":"unset","left":"380px","top":"272px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
round:false,
plain:false,
disabled:false,
cStyle:{"wrapper":{"default":{"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","position":"unset","left":"380px","top":"272px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}},
},
});
const getProvider = () => {
const rootData = inject('waterFunState');
console.log(rootData,'waterFunState'); // 接收到的值

state.waterFunState = rootData;
};
const initData = () => {
// 初始化页面数据
const getData = async () => {
  if (!state.waterFunState.time) {
    // 获取最新时间
    await getLastTime();
  }
  if (!state.waterFunState.levelOptions.length) {
    // 获取水功能区级别选项
    await getLevel();
  }
  if (!state.waterFunState.level) {
    // 设置默认
    state.waterFunState.level = state.waterFunState.levelOptions[0].VALUE || "";
  }
  // 给页面变量赋值
  state.params.time = state.waterFunState.time || "";
  state.levelOptions = [...(state.waterFunState.levelOptions || [])];
  state.params.level = state.waterFunState.level || "";
  state.params.name = state.waterFunState.name || "";
  // 统计
  getTotal();
  getComplianceStatus();
  // 列表
  getList();
}
getData();

watch(
  () => [
    state.params.level,
    global.regionaQuery.regionCode,
    global.regionaQuery.areaCode
  ],
  ([level, regionCode]) => {
    if (level && regionCode) {
      // 统计 - 总数
      getTotal()
    }
  }
);
watch(
  () => [
    state.params.level,
    state.params.time,
    global.regionaQuery.regionCode,
    global.regionaQuery.areaCode
  ],
  ([level, time, regionCode]) => {
    if (level && time && regionCode) {
      // 统计 - 达标情况
      getComplianceStatus()
      // 列表
      getList();
    }
  }
);

};
const changeTime = (val) => {
state.waterFunState.time = val
state.params.time = val
// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "value",
      "shareCode": "MONITORTIME",
      "defaultValue": "",
      "runtimeValue": val
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
const changeLevel = (val) => {
state.params.level = val
state.waterFunState.level = val
// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "value",
      "shareCode": "WATERFUNC_LEVEL",
      "defaultValue": "1",
      "runtimeValue": val
    },
    {
      "code": "defaultTab",
      "shareCode": "defaultTab",
      "defaultValue": "pointWq",
      "name": "",
      "runtimeValue": "pointWq"
    }
  ]
});

};
const changeName = () => {
getList()

// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "shareCode": "WATERFUNC_NAME",
      "code": "value",
      "defaultValue": "",
      "runtimeValue": state.params.name
    }
  ]
});

};
const getInputValue = (data) => {
state.params.name = data;
state.waterFunState.name = data;
};
const goToDetail = (row,col) => {
if (["水功能区名称", "定位", '水质目标', '评价结果'].includes(col.label)) {
    // 发送socket
    rootData.rootSocket.emit('message', {
        room: global.socketRoom,// 房间号
        type: "runInteractive", // 消息名称
        data: [
            {
                "code": "detailsOrGeneral",
                "shareCode": "detailsOrGeneral",
                "defaultValue": "details",
                "name": "",
                "runtimeValue": "details"
            },
            {
                "shareCode": "WATERFUNC_ID",
                "code": "waterfunc_id",
                "defaultValue": "",
                "name": "",
                "runtimeValue": row.WATERFUNC_ID
            },
            {
                "shareCode": "WATERFUNC_CODE",
                "code": "waterfunc_code",
                "defaultValue": "",
                "name": "",
                "runtimeValue": row.WATERFUNC_CODE
            },
            {
                "shareCode": "WATERFUNC_CATEGORY_NAME",
                "code": "waterfunc_category_name",
                "defaultValue": "",
                "name": "",
                "runtimeValue": row.WATERFUNC_CATEGORY_NAME
            }
        ]
    });


    // 跳转到  水功能区 - 详情页面
    state.waterFunState.componentName = 'waterFunctionalDetailsComponent';

    // 设置弹框使用的参数
    global.businessDialog = {
        dialogParmas: {
            rowInfo: row
        },
        dialogName: '',
    }
}
};
const oncellClick1734079187219 = (row,column,cell,event) => {
// 执行自定义方法
goToDetail(row,column);
};
const onchange1734059900827 = (value,selectValueArr,selectValueItem) => {
// 执行自定义方法
changeLevel(value);
};
const ondateChange1734059925424 = (data) => {
// 执行自定义方法
changeTime(data);
};
const oninput1734341937891 = (value) => {
// 执行自定义方法
getInputValue(value);
};
const onclick1734419738763 = () => {
// 执行自定义方法
changeName();
};
// 接口函数
const getTotal = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"WSYSTEM_CODE":global.regionaQuery.areaCode,"WATERFUNC_LEVEL":state.params.level,"AREA_CODE":"","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"d9a0e61aceddfa3ba7b90dea8973d096"},}).then((res) => {
     // 成功的操作
     state.statisticalCard[0].num = 0 
if (res?.data?.head?.statusCode === '200') {
  state.statisticalCard[0].num = res?.data?.data?.WATERFUNCCOUNT || 0;
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.statisticalCard[0].num = 0 
      reject(error);
    });
  });
};
// 接口函数
const getComplianceStatus = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"WATERFUNC_LEVEL":state.params.level,"AREA_CODE":"","WSYSTEM_CODE":global.regionaQuery.areaCode,"REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":state.params.time,"interfaceId":"6abbfb9359d80003c0defb90b68044fb"},}).then((res) => {
     // 成功的操作
     state.statisticalCard[1].num = 0;
state.statisticalCard[1].unit = '/0';
state.statisticalCard[2].num = 0;
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  const { ACTUALWATERFUNCCOUNT, STANDARDCOUNT, STANDARDRATE } = res.data.data;
  state.statisticalCard[1].num = STANDARDCOUNT; // 达标数量
  state.statisticalCard[1].unit = `/${ACTUALWATERFUNCCOUNT}`; // 总数
  state.statisticalCard[2].num = STANDARDRATE; // 达标率
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.statisticalCard[1].num = 0;
state.statisticalCard[1].unit = '/0';
state.statisticalCard[2].num = 0;
      reject(error);
    });
  });
};
// 接口函数
const getList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"AREA_CODE":"","WATERFUNC_NAME":state.params.name,"WATERFUNC_PID":"","WSYSTEM_CODE":global.regionaQuery.areaCode,"WATERFUNC_LEVEL":state.params.level,"MONITORTIME":state.params.time,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"bb0ee1d8568946798d31dd07c0f58ee8"},}).then((res) => {
     // 成功的操作
     state.list = [];

if (res?.data?.head?.statusCode === '200' && res?.data?.data.length) {
  state.list = res.data.data.map((item) => ({
    ...item,
    // 水功能区名称
    WATERFUNC_NAME: item?.WATERFUNC_NAME || '-',
    // 评价结果
    WATERQUALITYLEVELNAME: item?.WATERQUALITYLEVELNAME || '-',
    // 水质目标
    WATERQUALITYLEVELTARGETNAME: item?.WATERQUALITYLEVELTARGETNAME || '-',
    // 定位
    iconStatus: "true"
  }))
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.list = [];
      reject(error);
    });
  });
};
// 接口函数
const getLevel = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"034fb804c08288207bf1fdfed6e1ee53"},}).then((res) => {
     // 成功的操作
     state.waterFunState.levelOptions = []
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data?.length) {
  state.waterFunState.levelOptions = data?.data || [];
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.params.level = '';
state.levelOptions = []
      reject(error);
    });
  });
};
// 接口函数
const getLastTime = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":"","AREA_CODE":"","CODE_WQDATASOURCETYPE":"waterFunc","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"a81e7ff7a8c32be0622babb2b869b274"},}).then((res) => {
     // 成功的操作
     state.waterFunState.time = ""
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  // 当前选中最新时间
  state.waterFunState.time = data.data.MONITORTIME || '';
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.params.time = '';
      reject(error);
    });
  });
};
// 执行自定义方法
getProvider();
// 执行自定义方法
initData();
onMounted(() => {
setPageScale('t-l-c-waterFunEvaluate', global.appScaleMode, 'normal');
window.onresize = () => {
setPageScale('t-l-c-waterFunEvaluate', global.appScaleMode, 'normal');
};
});
// 页面离开时的操作
onUnmounted(() => {
});
return {
global,
state,
componentState,
oncellClick1734079187219,
oninput1734341937891,
onchange1734059900827,
ondateChange1734059925424,
onclick1734419738763,
};
},
}
</script>

<style scoped>
.t-l-c-waterFunEvaluate {
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
height: 850px;
width: 450px;
background-color: rgba(0,0,0,0);
}
.t-l-c-waterFunEvaluate .waterFunEvaluate-t-rect-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 450px;
height: 64px;
pointer-events: auto;
}

.t-l-c-waterFunEvaluate .waterFunEvaluate-t-table-0-1 {
position: absolute !important;
top: 318px;
left: 19px;
width: 410px;
height: 508px;
pointer-events: auto;
}

.t-l-c-waterFunEvaluate .waterFunEvaluate-t-search-0-2 {
position: absolute !important;
top: 272px;
left: 20px;
width: 348px;
height: 32px;
pointer-events: auto;
}

.t-l-c-waterFunEvaluate .waterFunEvaluate-t-list-card-0-3 {
position: absolute !important;
top: 131px;
left: 16px;
width: 418px;
height: 68px;
pointer-events: auto;
}

.t-l-c-waterFunEvaluate .waterFunEvaluate-t-component-0-4 {
position: absolute !important;
top: 88px;
left: 20px;
width: 410px;
height: 31px;
pointer-events: auto;
}

.t-l-c-waterFunEvaluate .waterFunEvaluate-t-text-0-5 {
position: absolute !important;
top: 93px;
left: 60px;
width: 200px;
height: 19px;
pointer-events: auto;
}

.t-l-c-waterFunEvaluate .waterFunEvaluate-t-component-0-6 {
position: absolute !important;
top: 229px;
left: 20px;
width: 410px;
height: 31px;
pointer-events: auto;
}

.t-l-c-waterFunEvaluate .waterFunEvaluate-t-text-0-7 {
position: absolute !important;
top: 234px;
left: 60px;
width: 200px;
height: 19px;
pointer-events: auto;
}

.t-l-c-waterFunEvaluate .waterFunEvaluate-t-select-0-8 {
position: absolute !important;
top: 16px;
left: 16px;
width: 132px;
height: 32px;
pointer-events: auto;
}

.t-l-c-waterFunEvaluate .waterFunEvaluate-t-date-picker-0-9 {
position: absolute !important;
top: 16px;
left: 160px;
width: 132px;
height: 32px;
pointer-events: auto;
}

.t-l-c-waterFunEvaluate .waterFunEvaluate-t-button-0-10 {
position: absolute !important;
top: 272px;
left: 380px;
width: 50px;
height: 32px;
pointer-events: auto;
}
</style>
