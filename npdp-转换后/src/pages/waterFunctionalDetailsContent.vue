<template>
  <div id="t-l-c-waterFunctionalDetailsContent" class="t-l-c-waterFunctionalDetailsContent" ><t-table v-if="state.isSecond === true" id="t-table-8581.b76704629" class="waterFunctionalDetailsContent-t-table-0-0"  height="342" :stripe="componentState.tTablex0x0.stripe" :border="componentState.tTablex0x0.border" :auto-scroll="componentState.tTablex0x0.autoScroll" :speed="6" :columns="componentState.tTablex0x0.columns" :data="state.dmList" :default-sort="componentState.tTablex0x0.defaultSort" :c-style="componentState.tTablex0x0.cStyle"></t-table><t-table v-if="state.isSecond === true" id="t-table-7977.bddc7d173" class="waterFunctionalDetailsContent-t-table-0-1"  height="342" :stripe="componentState.tTablex0x1.stripe" :border="componentState.tTablex0x1.border" :auto-scroll="componentState.tTablex0x1.autoScroll" :speed="6" :columns="componentState.tTablex0x1.columns" :data="state.secondList" :default-sort="componentState.tTablex0x1.defaultSort" :c-style="componentState.tTablex0x1.cStyle"></t-table><t-component v-if="state.isSecond === true" id="t-component-bd68.8e3ca30c3" class="waterFunctionalDetailsContent-t-component-0-2"  name="titleFirstBgComponent" :c-style="componentState.tComponentx0x2.cStyle" src="/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg" component-name="titleFirstBgComponent"></t-component><t-text v-if="state.isSecond === true" id="t-text-9cf9.120e527e4" class="waterFunctionalDetailsContent-t-text-0-3"  label="断面列表" :editable="componentState.tTextx0x3.editable" :c-style="componentState.tTextx0x3.cStyle"></t-text><t-component v-if="state.isSecond === true" id="t-component-d941.682c2cc0a" class="waterFunctionalDetailsContent-t-component-0-4"  name="titleFirstBgComponent" :c-style="componentState.tComponentx0x4.cStyle" src="/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg" component-name="titleFirstBgComponent"></t-component><t-text v-if="state.isSecond === true" id="t-text-df77.4d602d81d" class="waterFunctionalDetailsContent-t-text-0-5"  label="二级水功能区列表" :editable="componentState.tTextx0x5.editable" :c-style="componentState.tTextx0x5.cStyle"></t-text><t-rect id="t-rect-fe7c.430858437" class="waterFunctionalDetailsContent-t-rect-0-6"  :tip="componentState.tRectx0x6.tip" label="" :active="componentState.tRectx0x6.active" :c-style="componentState.tRectx0x6.cStyle"></t-rect><t-date-picker id="t-date-picker-3e8f.dfa3870a1" class="waterFunctionalDetailsContent-t-date-picker-0-7"  placeholder="请选择时间" start-placeholder="开始日期" end-placeholder="结束日期" type="month" :clearable="componentState.tDatePickerx0x7.clearable" range-separator="-" :default-date="state.monitorTime" separator="-" :readonly="componentState.tDatePickerx0x7.readonly" :editable="componentState.tDatePickerx0x7.editable" :c-style="componentState.tDatePickerx0x7.cStyle" @date-change="ondateChange1734078196206"></t-date-picker><t-table v-if="state.isSecond === false" id="t-table-65bb.f785c22df" class="waterFunctionalDetailsContent-t-table-0-8"  height="342" :stripe="componentState.tTablex0x8.stripe" :border="componentState.tTablex0x8.border" :auto-scroll="componentState.tTablex0x8.autoScroll" :speed="6" :columns="componentState.tTablex0x8.columns" :data="state.dmList" :default-sort="componentState.tTablex0x8.defaultSort" :c-style="componentState.tTablex0x8.cStyle" @cell-click="oncellClick1734089691519"></t-table><t-component v-if="state.isSecond === false" id="t-component-31d3.24b651f58" class="waterFunctionalDetailsContent-t-component-0-9"  name="titleFirstBgComponent" :c-style="componentState.tComponentx0x9.cStyle" src="/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg" component-name="titleFirstBgComponent"></t-component><t-text v-if="state.isSecond === false" id="t-text-1389.f99ff2c66" class="waterFunctionalDetailsContent-t-text-0-10"  label="断面列表" :editable="componentState.tTextx0x10.editable" :c-style="componentState.tTextx0x10.cStyle"></t-text><t-component id="t-component-d7a5.0f0c30eaf" class="waterFunctionalDetailsContent-t-component-0-11"  name="titleFirstBgComponent" :c-style="componentState.tComponentx0x11.cStyle" src="/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg" component-name="titleFirstBgComponent"></t-component><t-text id="t-text-dde9.205bbc868" class="waterFunctionalDetailsContent-t-text-0-12"  label="基础信息" :editable="componentState.tTextx0x12.editable" :c-style="componentState.tTextx0x12.cStyle"></t-text><t-list-card id="t-list-card-9491.e64bae56e" class="waterFunctionalDetailsContent-t-list-card-0-13"  :data="state.baseInfoData" :spacing-x="0" :col="1" direction="vertical" :exchange-order="componentState.tListCardx0x13.exchangeOrder" :unit-break="componentState.tListCardx0x13.unitBreak" :key-field="componentState.tListCardx0x13.keyField" active-key-field="title" active="" :c-style="componentState.tListCardx0x13.cStyle"></t-list-card></div>
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
import { TComponent, TDatePicker, TListCard, TRect, TTable, TText } from '@ths/design';

export default {
  components: {
    TComponent,
    TDatePicker,
    TListCard,
    TRect,
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
isSecond: false,
level: "",
categoryName: "",
secondList: [],
title: "-",
waterFunState: {},
dmList: [],
id: "",
monitorTime: "",
baseInfoData: [{"title":"级别","num":"-"},{"title":"类型","num":"-"},{"title":"所属流域","num":"-"},{"title":"水体名称","num":"-"},{"title":"责任市州","num":"-"},{"title":"是否达标","num":"-"},{"title":"是否国家重要水功能区","num":"-"},{"title":"水质目标","num":"-"}],
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
defaultStyle: {"width":"410px","height":"342px","position":"unset","left":"20px","top":"889px","paddingTop":"0px","borderBottom":"0px solid ","animationName":""},
stripe:true,
border:false,
autoScroll:false,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"52PX","type":"state","stateKey":"iconStatus"},{"label":"断面名称","key":"POINT_NAME","align":"left","operationList":[],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"borderRadius":"","width":"21px","height":"17px","margin-right":"-1px","margin-left":"-18px","transform":"translateX(70px)","backgroundImage":"var(--business-section-auto)"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"218PX","showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"14PX"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"isShowIcon","infoKey":""},{"label":"评价结果","key":"WATERQUALITYLEVELNAME","stateKey":"WATERQUALITYLEVELNAME","align":"center","type":"state","operationList":[],"stateList":[{"name":"Ⅰ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"-","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"","borderWidth":"0PX"}}],"width":"140PX","style":{"fontStyle":{"width":"40PX","height":"PX"}}}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"342px","position":"unset","left":"20px","top":"889px","paddingTop":"0px","borderBottom":"0px solid ","animationName":""}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","marginRight":"0px","backgroundColor":"","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"rgba(255, 255, 255, 1)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","color":"var(--t-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"highlightRow":{"default":{"backgroundColor":"var(--business-show-bg10)"}}},
},
tTablex0x1: {
defaultStyle: {"width":"410px","height":"342px","position":"unset","left":"20px","top":"472px","paddingTop":"0px","borderBottom":"0px solid ","animationName":""},
stripe:true,
border:false,
autoScroll:false,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"52PX","type":"state","stateKey":"iconStatus"},{"label":"二级水功能区名称","key":"WATERFUNC_NAME","align":"left","operationList":[],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"borderRadius":"","width":"21px","height":"17px","margin-right":"-1px","margin-left":"-18px","transform":"translateX(70px)","backgroundImage":"var(--business-section-auto)"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"218PX","showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"14PX"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"isShowIcon","infoKey":""},{"label":"水功能区类型","key":"WATERFUNC_CATEGORY_NAME","stateKey":"WATERFUNC_CATEGORY_NAME","align":"center","type":"state","operationList":[],"stateList":[{"name":"Ⅰ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}}],"width":"140PX","style":{"fontStyle":{"width":"40PX","height":"PX"}}}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"342px","position":"unset","left":"20px","top":"472px","paddingTop":"0px","borderBottom":"0px solid ","animationName":""}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","marginRight":"0px","backgroundColor":"","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"rgba(255, 255, 255, 1)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","color":"var(--t-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"highlightRow":{"default":{"backgroundColor":"var(--business-show-bg10)"}}},
},
tComponentx0x2: {
defaultStyle: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"846px","animationName":""},
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"846px","animationName":""}}},
},
tTextx0x3: {
defaultStyle: {"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"851px","fontFamily":"方正综艺","fontSize":"20px","animationName":""},
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"851px","fontFamily":"方正综艺","fontSize":"20px","animationName":""}}},
},
tComponentx0x4: {
defaultStyle: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"429px","animationName":""},
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"429px","animationName":""}}},
},
tTextx0x5: {
defaultStyle: {"width":"278px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"434px","fontFamily":"方正综艺","fontSize":"20px","animationName":""},
editable:false,
cStyle:{"wrapper":{"default":{"width":"278px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"434px","fontFamily":"方正综艺","fontSize":"20px","animationName":""}}},
},
tRectx0x6: {
defaultStyle: {"width":"450px","height":"60px","position":"unset","left":"0px","top":"0px","background":"var(--business-query-bg)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","animationName":""},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"60px","position":"unset","left":"0px","top":"0px","background":"var(--business-query-bg)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","animationName":""}}},
},
tDatePickerx0x7: {
defaultStyle: {"width":"418px","height":"28px","position":"unset","left":"16px","top":"16px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},
clearable:false,
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"418px","height":"28px","position":"unset","left":"16px","top":"16px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","lineHeight":"20px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","lineHeight":"20px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"27px"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
},
tTablex0x8: {
defaultStyle: {"width":"410px","height":"342px","position":"unset","left":"20px","top":"472px","paddingTop":"0px","borderBottom":"0px solid ","animationName":""},
stripe:true,
border:false,
autoScroll:false,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"52PX","type":"state","stateKey":"iconStatus"},{"label":"断面名称","key":"POINT_NAME","align":"left","operationList":[],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"borderRadius":"","width":"21px","height":"17px","margin-right":"-1px","margin-left":"-18px","transform":"translateX(70px)","backgroundImage":"var(--business-section-auto)"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"218PX","showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"14PX"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"isShowIcon","infoKey":""},{"label":"评价结果","key":"WATERQUALITYLEVELNAME","stateKey":"WATERQUALITYLEVELNAME","align":"center","type":"state","operationList":[],"stateList":[{"name":"Ⅰ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"-","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"","borderWidth":"0PX"}}],"width":"140PX","style":{"fontStyle":{"width":"40PX","height":"PX"}}}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"342px","position":"unset","left":"20px","top":"472px","paddingTop":"0px","borderBottom":"0px solid ","animationName":""}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","marginRight":"0px","backgroundColor":"","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"rgba(255, 255, 255, 1)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","color":"var(--t-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"highlightRow":{"default":{"backgroundColor":"var(--business-show-bg10)"}}},
},
tComponentx0x9: {
defaultStyle: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"429px","animationName":""},
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"429px","animationName":""}}},
},
tTextx0x10: {
defaultStyle: {"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"434px","fontFamily":"方正综艺","fontSize":"20px","animationName":""},
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"434px","fontFamily":"方正综艺","fontSize":"20px","animationName":""}}},
},
tComponentx0x11: {
defaultStyle: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"83px","animationName":""},
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"83px","animationName":""}}},
},
tTextx0x12: {
defaultStyle: {"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"88px","fontFamily":"方正综艺","fontSize":"20px","animationName":""},
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"88px","fontFamily":"方正综艺","fontSize":"20px","animationName":""}}},
},
tListCardx0x13: {
defaultStyle: {"width":"410px","height":"65px","position":"unset","left":"20px","top":"127px","overflow":"visible","animationName":""},
data:[{"title":"级别","num":"-"},{"title":"类型","num":"-"},{"title":"所属流域","num":"-"},{"title":"水体名称","num":"-"},{"title":"责任市州","num":"-"},{"title":"是否达标","num":"-"},{"title":"是否国家重要水功能区","num":"-"},{"title":"水质目标","num":"-"}],
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"65px","position":"unset","left":"20px","top":"127px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"144px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"264px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}},
},
});
const getProvider = () => {
const rootData = inject('waterFunState');

state.waterFunState = rootData;
};
const handleClickBack = () => {
// 返回 水-水功能区-内容页面
state.waterFunState.componentName = 'waterFunctionalContentComponent';
};
const initPage = () => {
state.id = global.businessDialog?.dialogParmas?.rowInfo?.WATERFUNC_ID || "";
state.categoryName = global.businessDialog?.dialogParmas?.rowInfo?.WATERFUNC_CATEGORY_NAME || "";
state.level = global.businessDialog?.dialogParmas?.rowInfo?.WATERFUNC_LEVEL || "1";
state.monitorTime = state.waterFunState.time || "";
getBaseInfo();

// 断面列表、二级水功能区列表
watch(
  () => [
    state.monitorTime,
    global.regionaQuery.regionCode,
    state.isSecond,
    global.regionaQuery.areaCode
  ],
  ([time, regionCode, isSecond]) => {
    if (time && regionCode) {
      getDMList();
    }
    if (isSecond) {
      getSecondList();
    }
  },
  {
    immediate: true
  }
);

// 判断是否是二级断面页面
watch(
  () => [
    state.categoryName,
    state.level
  ],
  ([categoryName, level]) => {
    state.isSecond = false;
    if (level === "1" && categoryName == "开发利用区") {
      state.isSecond = true;
    } else if (level == "2" || categoryName != "开发利用区") {
      state.isSecond = false;
    }
  },
  {
    immediate: true
  }
)



};
const goToDetail = (row,col) => {
if (["断面名称", "定位", '评价结果'].includes(col.label)) {
  // 给地图发消息
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractive", // 消息名称
    data: [
      {
        "code": "point_code",
        "shareCode": "POINT_CODE",
        "defaultValue": "",
        "runtimeValue": row.POINT_CODE
      }
    ]
  });
}

};
const changeTime = (val) => {
state.waterFunState.time = val;
state.monitorTime = val;
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
    }
  ]
});

};
const ondateChange1734078196206 = (data) => {
// 执行自定义方法
changeTime(data);
};
const oncellClick1734089691519 = (row,column,cell,event) => {
// 执行自定义方法
goToDetail(row,column);
};
// 接口函数
const getBaseInfo = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":state.monitorTime,"WATERFUNC_ID":state.id,"interfaceId":"cd4a4fd2a56a96faf2b3dfa4479286b3"},}).then((res) => {
     // 成功的操作
     // 基础信息
state.baseInfoData.forEach(item => item.num = "-");
// 颜色列表（两套都写上防止格式不对）
const colors = [
  {
    code: "I类",
    value: "#CCFFFF"
  },
  {
    code: "Ⅰ类",
    value: "#CCFFFF"
  },
  {
    code: "II类",
    value: "#00CCFF"
  },
  {
    code: "Ⅱ类",
    value: "#00CCFF"
  },
  {
    code: "III类",
    value: "#00FF00"
  },
  {
    code: "Ⅲ类",
    value: "#00FF00"
  },
  {
    code: "IV类",
    value: "#FFFF00"
  },
  {
    code: "Ⅳ类",
    value: "#FFFF00"
  },
  {
    code: "V类",
    value: "#FF9B00"
  },
  {
    code: "Ⅴ类",
    value: "#FF9B00"
  },
  {
    code: "劣V类",
    value: "#FF0000"
  },
  {
    code: "劣Ⅴ类",
    value: "#FF0000"
  },
  {
    code: "",
    value: "#FFF"
  }
]
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  const {
    WATERFUNC_LEVEL_NAME,
    WATERFUNC_CATEGORY_NAME,
    WSYSTEM_NAME,
    WATER_NAME,
    REGION_NAME,
    ISSTANDARDS,
    WATERFUNC_IMPORTANT_NAME,
    WATERQUALITYLEVELTARGETNAME
  } = res.data.data;
  // 基础信息
  state.baseInfoData[0].num = WATERFUNC_LEVEL_NAME || "-"; // 级别
  state.baseInfoData[1].num = WATERFUNC_CATEGORY_NAME || "-"; // 类型
  state.baseInfoData[2].num = WSYSTEM_NAME || "-"; // 所属流域
  state.baseInfoData[3].num = WATER_NAME || "-"; // 水体名称
  state.baseInfoData[4].num = REGION_NAME || "-"; // 责任市州
  state.baseInfoData[5].num = ISSTANDARDS || "-"; // 是否达标
  state.baseInfoData[6].num = WATERFUNC_IMPORTANT_NAME || "-"; // 是否国家重要水功能区
  state.baseInfoData[7].num = WATERQUALITYLEVELTARGETNAME || "-"; // 水质目标
  state.baseInfoData[7].color = colors.find(i => i.code === WATERQUALITYLEVELTARGETNAME).value // 水质目标颜色
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 基础信息
state.baseInfoData.forEach(item => item.num = "-");
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [state.monitorTime], () => {
getBaseInfo();
},{
deep: true, // 深度监听
});
// 接口函数
const getSecondList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"AREA_CODE":"","WATERFUNC_NAME":"","WATERFUNC_PID":state.id,"WSYSTEM_CODE":global.regionaQuery.areaCode,"WATERFUNC_LEVEL":state.level,"MONITORTIME":state.monitorTime,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"bb0ee1d8568946798d31dd07c0f58ee8"},}).then((res) => {
     // 成功的操作
     state.secondList = [];

if (res?.data?.head?.statusCode === '200' && res?.data?.data.length) {
  state.secondList = res.data.data.map((item) => ({
    ...item,
    // 水功能区名称
    WATERFUNC_NAME: item?.WATERFUNC_NAME || '-',
    // 水功能区类型
    WATERFUNC_CATEGORY_NAME: item?.WATERFUNC_CATEGORY_NAME || '-',
    // 定位
    iconStatus: `${!!(item.LONGITUDE && item.LATITUDE)}`
  }))
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.secondList = [];
      reject(error);
    });
  });
};
// 接口函数
const getDMList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"AREA_CODE":"","WATERFUNC_NAME":"","IS_CONNECT_SECTION":"","WATERFUNC_LEVEL":"","WATERFUNC_ID":state.id,"WSYSTEM_CODE":global.regionaQuery.areaCode,"MONITORTIME":state.monitorTime,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"7ca8472ad1bebc93b038d4aae2cc597e"},}).then((res) => {
     // 成功的操作
     // 断面列表
state.dmList = [];

if (res?.data?.head?.statusCode === '200' && res?.data?.data.length) {
  // 断面列表
  state.dmList = res.data.data.map((item) => ({
    ...item,
    // 断面名称
    POINT_NAME: item?.POINT_NAME || '-',
    // 水质类别
    WATERQUALITYLEVELNAME: item?.WATERQUALITYLEVELNAME || '-',
    // 定位
    iconStatus: `${!!(item.LONGITUDE && item.LATITUDE)}`
  }))
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 断面列表
state.dmList = [];
      reject(error);
    });
  });
};
// 执行自定义方法
getProvider();
// 执行自定义方法
initPage();
onMounted(() => {
setPageScale('t-l-c-waterFunctionalDetailsContent', global.appScaleMode, 'normal');
window.onresize = () => {
setPageScale('t-l-c-waterFunctionalDetailsContent', global.appScaleMode, 'normal');
};
});
// 页面离开时的操作
onUnmounted(() => {
});
return {
global,
state,
componentState,
ondateChange1734078196206,
oncellClick1734089691519,
};
},
}
</script>

<style scoped>
.t-l-c-waterFunctionalDetailsContent {
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
width: 450px;
height: 425px;
background-color: rgba(0,0,0,0);
}
.t-l-c-waterFunctionalDetailsContent .waterFunctionalDetailsContent-t-table-0-0 {
position: absolute !important;
top: 889px;
left: 20px;
width: 410px;
height: 342px;
pointer-events: auto;
}

.t-l-c-waterFunctionalDetailsContent .waterFunctionalDetailsContent-t-table-0-1 {
position: absolute !important;
top: 472px;
left: 20px;
width: 410px;
height: 342px;
pointer-events: auto;
}

.t-l-c-waterFunctionalDetailsContent .waterFunctionalDetailsContent-t-component-0-2 {
position: absolute !important;
top: 846px;
left: 20px;
width: 410px;
height: 31px;
pointer-events: auto;
}

.t-l-c-waterFunctionalDetailsContent .waterFunctionalDetailsContent-t-text-0-3 {
position: absolute !important;
top: 851px;
left: 60px;
width: 130px;
height: 19px;
pointer-events: auto;
}

.t-l-c-waterFunctionalDetailsContent .waterFunctionalDetailsContent-t-component-0-4 {
position: absolute !important;
top: 429px;
left: 20px;
width: 410px;
height: 31px;
pointer-events: auto;
}

.t-l-c-waterFunctionalDetailsContent .waterFunctionalDetailsContent-t-text-0-5 {
position: absolute !important;
top: 434px;
left: 60px;
width: 278px;
height: 19px;
pointer-events: auto;
}

.t-l-c-waterFunctionalDetailsContent .waterFunctionalDetailsContent-t-rect-0-6 {
position: absolute !important;
top: 0px;
left: 0px;
width: 450px;
height: 60px;
pointer-events: auto;
}

.t-l-c-waterFunctionalDetailsContent .waterFunctionalDetailsContent-t-date-picker-0-7 {
position: absolute !important;
top: 16px;
left: 16px;
width: 418px;
height: 28px;
pointer-events: auto;
}

.t-l-c-waterFunctionalDetailsContent .waterFunctionalDetailsContent-t-table-0-8 {
position: absolute !important;
top: 472px;
left: 20px;
width: 410px;
height: 342px;
pointer-events: auto;
}

.t-l-c-waterFunctionalDetailsContent .waterFunctionalDetailsContent-t-component-0-9 {
position: absolute !important;
top: 429px;
left: 20px;
width: 410px;
height: 31px;
pointer-events: auto;
}

.t-l-c-waterFunctionalDetailsContent .waterFunctionalDetailsContent-t-text-0-10 {
position: absolute !important;
top: 434px;
left: 60px;
width: 130px;
height: 19px;
pointer-events: auto;
}

.t-l-c-waterFunctionalDetailsContent .waterFunctionalDetailsContent-t-component-0-11 {
position: absolute !important;
top: 83px;
left: 20px;
width: 410px;
height: 31px;
pointer-events: auto;
}

.t-l-c-waterFunctionalDetailsContent .waterFunctionalDetailsContent-t-text-0-12 {
position: absolute !important;
top: 88px;
left: 60px;
width: 130px;
height: 19px;
pointer-events: auto;
}

.t-l-c-waterFunctionalDetailsContent .waterFunctionalDetailsContent-t-list-card-0-13 {
position: absolute !important;
top: 127px;
left: 20px;
width: 410px;
height: 65px;
pointer-events: auto;
}
</style>
