<template>
  <div id="t-l-c-airPollutionPointWarning" class="t-l-c-airPollutionPointWarning" ><t-rect id="t-rect-4ed7.664206f84" class="airPollutionPointWarning-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-rect id="t-rect-a1cf.fdeeb7749" class="airPollutionPointWarning-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle"></t-rect><t-high-light-text id="t-high-light-text-b1c9.d9b6fabf" class="airPollutionPointWarning-t-high-light-text-0-3"  :fragment-list="replaceCssVariables(filterData(state.warningTextArr, componentPropBindingMap?.['t-high-light-text-b1c9.d9b6fabf']['fragmentList'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :styles="tHighLightTextx0x3ComputedData.styles" :c-style="tHighLightTextx0x3ComputedData.cStyle"></t-high-light-text><t-tabs-base id="t-tabs-base-4fe6.66a235c13" class="airPollutionPointWarning-t-tabs-base-0-4"  :data="tTabsBasex0x4ComputedData.data" :space="tTabsBasex0x4ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.warningTimeType, componentPropBindingMap?.['t-tabs-base-4fe6.66a235c13']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x4ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x4ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x4ComputedData.alias" :c-style="tTabsBasex0x4ComputedData.cStyle" @tab-click="ontabClick1736492888862"></t-tabs-base><t-rect id="t-rect-e7a6.2aec1624b" class="airPollutionPointWarning-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle" @click="onclick1734919878965"></t-rect><t-table v-if="state.warningTimeType !== '1hour'" id="t-table-b8ac.c27fb29ea" class="airPollutionPointWarning-t-table-0-6"  :height="tTablex0x6ComputedData.height" :stripe="tTablex0x6ComputedData.stripe" :border="tTablex0x6ComputedData.border" :auto-scroll="tTablex0x6ComputedData.autoScroll" :speed="tTablex0x6ComputedData.speed" :show-animation="tTablex0x6ComputedData.showAnimation" :animation-delay="tTablex0x6ComputedData.animationDelay" :animation-type="tTablex0x6ComputedData.animationType" :columns="tTablex0x6ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-b8ac.c27fb29ea']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x6ComputedData.defaultSort" :c-style="tTablex0x6ComputedData.cStyle" @row-click="onrowClick1737524929343_0_0"></t-table><t-table v-if="state.warningTimeType === '1hour'" id="t-table-6935.ff4d7f7e1" class="airPollutionPointWarning-t-table-0-7"  :height="tTablex0x7ComputedData.height" :stripe="tTablex0x7ComputedData.stripe" :border="tTablex0x7ComputedData.border" :auto-scroll="tTablex0x7ComputedData.autoScroll" :speed="tTablex0x7ComputedData.speed" :show-animation="tTablex0x7ComputedData.showAnimation" :animation-delay="tTablex0x7ComputedData.animationDelay" :animation-type="tTablex0x7ComputedData.animationType" :columns="tTablex0x7ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-6935.ff4d7f7e1']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x7ComputedData.defaultSort" :c-style="tTablex0x7ComputedData.cStyle" @row-click="onrowClick1735106182656"></t-table><t-search id="t-search-6e2a.5686a9e15" class="airPollutionPointWarning-t-search-0-8"  :type="tSearchx0x8ComputedData.type" :input-value="replaceCssVariables(filterData(state.inputValue, componentPropBindingMap?.['t-search-6e2a.5686a9e15']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tSearchx0x8ComputedData.maxlength" :minlength="tSearchx0x8ComputedData.minlength" :show-word-limit="tSearchx0x8ComputedData.showWordLimit" :placeholder="tSearchx0x8ComputedData.placeholder" :clearable="tSearchx0x8ComputedData.clearable" :show-password="tSearchx0x8ComputedData.showPassword" :disabled="tSearchx0x8ComputedData.disabled" :prefix-icon="tSearchx0x8ComputedData.prefix-icon" :suffix-icon="tSearchx0x8ComputedData.suffix-icon" :rows="tSearchx0x8ComputedData.rows" :autosize="tSearchx0x8ComputedData.autosize" :name="tSearchx0x8ComputedData.name" :readonly="tSearchx0x8ComputedData.readonly" :step="tSearchx0x8ComputedData.step" :autofocus="tSearchx0x8ComputedData.autofocus" :form="tSearchx0x8ComputedData.form" :label="tSearchx0x8ComputedData.label" :tabindex="tSearchx0x8ComputedData.tabindex" :validate-event="tSearchx0x8ComputedData.validateEvent" :c-style="tSearchx0x8ComputedData.cStyle" :has-search-btn="tSearchx0x8ComputedData.hasSearchBtn" @change="onchange1733895967771"></t-search></div>
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
import { THighLightText, TRect, TSearch, TTable, TTabsBase } from '@ths/design';

export default {
  components: {
    THighLightText,
    TRect,
    TSearch,
    TTable,
    TTabsBase,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-tabs-base-8fca.1edd4d4cd":{"attributeName":"tTabsBasex0x0"},"t-rect-4ed7.664206f84":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-a1cf.fdeeb7749":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-high-light-text-b1c9.d9b6fabf":{"attributeName":"tHighLightTextx0x3","fragmentList":{"filters":[]},"styles":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-4fe6.66a235c13":{"attributeName":"tTabsBasex0x4","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-e7a6.2aec1624b":{"attributeName":"tRectx0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-table-b8ac.c27fb29ea":{"attributeName":"tTablex0x6","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"showAnimation":{"filters":[]},"animationDelay":{"filters":[]},"animationType":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-table-6935.ff4d7f7e1":{"attributeName":"tTablex0x7","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"showAnimation":{"filters":[]},"animationDelay":{"filters":[]},"animationType":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-search-6e2a.5686a9e15":{"attributeName":"tSearchx0x8","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]},"hasSearchBtn":{"filters":[]}}};
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
   warningTimeType: "1hour",
   timeStart: "",
   timeEnd: "",
   listData: [],
   airPollutionContentState: {"timeType":"","monitorTimeValue":"","analysisTimaRangeData":[]},
   warningTextArr: [{"text":"当前共","styleName":"style1"},{"text":"0","styleName":"style2"},{"text":"个站点发生","styleName":"style1"},{"text":"0","styleName":"style2"},{"text":"条报警。","styleName":"style1"}],
   inputValue: "",
   controlType: "all",
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
tRectx0x1: {
defaultStyle: {
            default: {"width":"410px","height":"42px","position":"unset","left":"0px","top":"40px","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"42px","position":"unset","left":"0px","top":"40px","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"18px","height":"19px","position":"unset","left":"16px","top":"52px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(assets/images/2024-12-09/8037d0060896423fb4250d034230a26a.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"18px","height":"19px","position":"unset","left":"16px","top":"52px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(assets/images/2024-12-09/8037d0060896423fb4250d034230a26a.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}}}, 
 },
},
tHighLightTextx0x3: {
defaultStyle: {
            default: {"width":"364px","height":"42px","position":"unset","left":"46px","top":"40px","lineHeight":"42px"},
            
            },
 default: { 
 
fragmentList:[{"text":"当前共","styleName":"style1"},{"text":"0","styleName":"style2"},{"text":"个站点发生","styleName":"style1"},{"text":"0","styleName":"style2"},{"text":"条报警。","styleName":"style1"}],
styles:[{"name":"style1","style":{"fontFamily":"微软雅黑","fontSize":"14px","fontWeight":400,"color":"var(--business-text-avianize)"}},{"name":"style2","style":{"fontFamily":"微软雅黑","fontSize":"14PX","fontWeight":400,"color":"var(--business-warn)"}}],
cStyle:{"wrapper":{"default":{"width":"364px","height":"42px","position":"unset","left":"46px","top":"40px","lineHeight":"42px"}}}, 
 },
},
tTabsBasex0x4: {
defaultStyle: {
            default: {"width":"134px","height":"32px","position":"unset","left":"0px","top":"0px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""},
            
            },
 default: { 
 
data:[{"label":"5分钟报警","value":"5min","disabled":false},{"label":"1小时报警","value":"1hour","disabled":false}],
space:1,
selectedTabVal:"1hour",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":"disabled"},
cStyle:{"wrapper":{"default":{"width":"134px","height":"32px","position":"unset","left":"0px","top":"0px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""}},"itemWrapper":{"default":{"width":"80px","height":"32px","fontSize":"14px","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px","cursor":"not-allowed"}},"label":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"54px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"356px","top":"0px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"搜索",
active:false,
cStyle:{"wrapper":{"default":{"width":"54px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"356px","top":"0px","cursor":"pointer","animationName":""}}}, 
 },
},
tTablex0x6: {
defaultStyle: {
            default: {"width":"410px","height":"252px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","position":"unset","left":"0px","top":"88px"},
            
            },
 default: { 
 
height:"252",
stripe:true,
border:false,
autoScroll:false,
speed:6,
showAnimation:false,
animationDelay:0.1,
animationType:"animate__fadeInUp",
columns:[{"label":"报警时间","key":"shortTime","align":"center","operationList":[],"stateList":[],"width":"100PX"},{"label":"站点名称","key":"POINT_NAME","align":"center","operationList":[],"stateList":[],"showOverflowTooltip":true},{"label":"超标项","key":"POLLUTE","align":"center","operationList":[],"stateList":[],"showOverflowTooltip":true,"width":"60PX"},{"label":"实时/标准","key":"VALUE","stateKey":"state","align":"center","type":"default","style":{"fontStyle":{"color":"#fff","padding":"8px 4px","borderRadius":"4px"}},"operationList":[],"width":"70PX","showOverflowTooltip":true},{"label":"超标率","key":"RATE","align":"center","operationList":[],"stateList":[],"width":"45PX"},{"label":"处理状态","key":"STATUS_NAME","align":"center","operationList":[],"stateList":[],"width":"100PX","showOverflowTooltip":true},{"label":"处理结果","key":"RESULT","align":"center","operationList":[],"stateList":[],"width":"100PX","showOverflowTooltip":true}],
data:[{"warningTime":"2024-12-09 09:00","pointName":"华材职中","exceedIndex":"NO₂超标","VALUE":"48/36","RATE":"33%","warningStatus":"报警中","operation":"trace"},{"warningTime":"2024-12-09 09:00","pointName":"华材职中","exceedIndex":"NO₂超标","VALUE":"48/36","RATE":"33%","warningStatus":"报警中","operation":"trace"},{"warningTime":"2024-12-09 09:00","pointName":"华材职中","exceedIndex":"NO₂超标","VALUE":"48/36","RATE":"33%","warningStatus":"报警中","operation":"trace"},{"warningTime":"2024-12-09 09:00","pointName":"华材职中","exceedIndex":"NO₂超标","VALUE":"48/36","RATE":"33%","warningStatus":"报警中","operation":"trace"},{"warningTime":"2024-12-09 09:00","pointName":"华材职中","exceedIndex":"NO₂超标","VALUE":"48/36","RATE":"33%","warningStatus":"报警中","operation":"trace"},{"warningTime":"2024-12-09 09:00","pointName":"华材职中","exceedIndex":"NO₂超标","VALUE":"48/36","RATE":"33%","warningStatus":"报警中","operation":"trace"},{"warningTime":"2024-12-09 09:00","pointName":"华材职中","exceedIndex":"NO₂超标","VALUE":"48/36","RATE":"33%","warningStatus":"报警中","operation":"trace"}],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"252px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","position":"unset","left":"0px","top":"88px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-table-header-bg)   ","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-table-odd-row-bg) !important","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"var(--t-white)","height":"40px","paddingTop":"8px","paddingBottom":"8px","fontSize":"14px"}},"stripeBodyCell":{"default":{"backgroundColor":"var(--business-table-even-row-bg)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"},"default":{"cursor":"pointer"}}}, 
 },
},
tTablex0x7: {
defaultStyle: {
            default: {"width":"410px","height":"252px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","position":"unset","left":"0px","top":"88px"},
            
            },
 default: { 
 
height:"252",
stripe:true,
border:false,
autoScroll:false,
speed:6,
showAnimation:false,
animationDelay:0.1,
animationType:"animate__fadeInUp",
columns:[{"label":"报警时间","key":"shortTime","align":"center","operationList":[],"stateList":[],"width":"100PX"},{"label":"站点名称","key":"POINT_NAME","align":"center","operationList":[],"stateList":[],"showOverflowTooltip":true},{"label":"超标项","key":"POLLUTE","align":"center","operationList":[],"stateList":[],"showOverflowTooltip":true,"width":"60PX"},{"label":"实时/标准","key":"VALUE","stateKey":"state","align":"center","type":"default","style":{"fontStyle":{"color":"#fff","padding":"8px 4px","borderRadius":"4px"}},"operationList":[],"width":"70PX","showOverflowTooltip":true},{"label":"超标率","key":"RATE","align":"center","operationList":[],"stateList":[],"width":"45PX"},{"label":"处理状态","key":"STATUS_NAME","align":"center","operationList":[],"stateList":[],"width":"100PX","showOverflowTooltip":true},{"label":"处理结果","key":"RESULT","align":"center","operationList":[],"stateList":[],"width":"100PX","showOverflowTooltip":true},{"label":"操作","key":"operation","align":"center","fixed":"right","operationList":[],"stateList":[],"style":{"fontStyle":{"color":"rgba(0, 183, 255, 1)","fontSize":"14PX"},"cellStyle":{"cursor":"pointer"}},"width":"55PX"}],
data:[{"warningTime":"2024-12-09 09:00","pointName":"华材职中","exceedIndex":"NO₂超标","VALUE":"48/36","RATE":"33%","warningStatus":"报警中","operation":"trace"},{"warningTime":"2024-12-09 09:00","pointName":"华材职中","exceedIndex":"NO₂超标","VALUE":"48/36","RATE":"33%","warningStatus":"报警中","operation":"trace"},{"warningTime":"2024-12-09 09:00","pointName":"华材职中","exceedIndex":"NO₂超标","VALUE":"48/36","RATE":"33%","warningStatus":"报警中","operation":"trace"},{"warningTime":"2024-12-09 09:00","pointName":"华材职中","exceedIndex":"NO₂超标","VALUE":"48/36","RATE":"33%","warningStatus":"报警中","operation":"trace"},{"warningTime":"2024-12-09 09:00","pointName":"华材职中","exceedIndex":"NO₂超标","VALUE":"48/36","RATE":"33%","warningStatus":"报警中","operation":"trace"},{"warningTime":"2024-12-09 09:00","pointName":"华材职中","exceedIndex":"NO₂超标","VALUE":"48/36","RATE":"33%","warningStatus":"报警中","operation":"trace"},{"warningTime":"2024-12-09 09:00","pointName":"华材职中","exceedIndex":"NO₂超标","VALUE":"48/36","RATE":"33%","warningStatus":"报警中","operation":"trace"}],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"252px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","position":"unset","left":"0px","top":"88px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-table-header-bg)   ","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-table-odd-row-bg) !important","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"var(--t-white)","height":"40px","paddingTop":"8px","paddingBottom":"8px","fontSize":"14px"}},"stripeBodyCell":{"default":{"backgroundColor":"var(--business-table-even-row-bg)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"},"default":{"cursor":"pointer"}}}, 
 },
},
tSearchx0x8: {
defaultStyle: {
            default: {"width":"204px","height":"32px","position":"unset","left":"144px","top":"0px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"204px","height":"32px","position":"unset","left":"144px","top":"0px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"prefix":{"default":{"color":"var(--business-text-avianize)"}}},
hasSearchBtn:false, 
 },
},
});
const getProvider = () => {
const rootData = inject('airPollutionContentState');
state.airPollutionContentState = rootData;

watch(() => rootData, () => {
  state.airPollutionContentState = rootData;
  if (rootData) {
    state.timeStart = state.airPollutionContentState.analysisTimaRangeData[0];
    state.timeEnd = state.airPollutionContentState.analysisTimaRangeData[1];
    getListData();
  }
},
  {
    deep: true
  }
);
};
const handleInputChange = (data) => {
// console.log(data);
if (typeof (data) === 'string') {
  state.inputValue = data;
}
};
const handleTableClick = (row,column) => {
console.log(row, column)
// 勾选图层
rootData.rootSocket.emit('message', {
  type: 'setLayerChecked',
  room: global.socketRoom,
  data: {
    // 省控、国控等
    type: row.POINT_TYPE_CODE,
  },
});
if (column.property !== 'operation') {
  // 给地图发消息-定位
  rootData.rootSocket.emit('message', {
    type: 'airQualityRankingClicked',
    room: global.socketRoom,
    data: {
      // 省控、国控等
      type: row.POINT_TYPE_CODE,
      // 携带的其他属性数据
      attrs: {
        ...row,
      }
    },
  });
} else {
  // 发送消息给地图
  rootData.rootSocket.emit('message', {
    type: 'showAirSourceTrace',
    room: global.socketRoom,
    data: [ // 消息内容
      {
        shareCode: "showAirSourceTrace",
        runtimeValue: row.POINT_CODE,
        pointType: row.POINT_TYPE || '',
        isEnters: true,
        traceTime: row.TIME,
        layerName: row.POINT_TYPE_NAME,
      }]
  });

  /* 发送webSocket消息 */
  // if (rootData?.sendMessage) {
  //   rootData?.sendMessage({
  //     id: guid(true, 'lego'), // 唯一索引
  //     type: "runInteractive", // 消息名称
  //     data: [
  //       {
  //         shareCode: "showTraceDetail",
  //         runtimeValue: row.POINT_CODE,
  //         // 显示lego的溯源
  //         componentName: "airSyxqPanelComponent",
  //         componentParmas: {
  //           pointType: row.POINT_TYPE || '',
  //           isShowAlarmFlag: true,
  //           alarmTime: row.TIME || '',
  //           exceedingTheStandardState: '',
  //           primPollute: row.POLLUTE || '',
  //           polluteLevel: '',
  //           POINT_CODE: row.POINT_CODE,
  //           endTime: (row.END_TIME && row.END_TIME !== '-' && row.END_TIME !== '--') ? row.END_TIME : '',
  //         }
  //       }]
  //   });
  // }

  // 打开右屏面板
  rootData.rootSocket.emit('message', {
    type: 'showAirTraceDetail',
    room: global.socketRoom,
    data: [
      {
        shareCode: "showTraceDetail",
        runtimeValue: row.POINT_CODE,
        // 显示lego的溯源
        componentName: "airSyxqPanelComponent",
        componentParmas: {
          pointType: row.POINT_TYPE || '',
          isShowAlarmFlag: true,
          alarmTime: row.TIME || '',
          exceedingTheStandardState: '',
          primPollute: row.POLLUTE || '',
          polluteLevel: '',
          POINT_CODE: row.POINT_CODE,
          endTime: (row.END_TIME && row.END_TIME !== '-' && row.END_TIME !== '--') ? row.END_TIME : '',
        }
      }
    ]
  });
}
};
const ontabClick1736492888862 = (data) => {
// 设置变量值
state.warningTimeType = data.value;
};
const ontabClick1733723724054 = (data) => {
// 设置变量值
state.controlType = data.value;
};
const onclick1734919878965 = () => {
// 事件交互-请求调用接口
apiRegistry.getListData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const onrowClick1735106182656 = (row,column,event) => {
// 执行自定义方法
handleTableClick(row,column);
};
const onchange1733895967771 = (value) => {
// 执行自定义方法
handleInputChange(value);
};
const onrowClick1737524929343_0_0 = (row,column,event) => {
// 执行自定义方法
handleTableClick(row,column);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getListData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"BJ_TYPE":"state.warningTimeType","TIME_START":"global.warningRightDataRange.startTime","TIME_END":"global.warningRightDataRange.endTime","TIME_TYPE":"state.airPollutionContentState.timeType","REGION_CODE":"global.regionaQuery.regionCode","DATA_TYPE":"state.controlType","POINT_NAME":"state.inputValue","interfaceId":"30f6f88064d789e356c09c4d4d8218c6"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"BJ_TYPE":state.warningTimeType,"TIME_START":global.warningRightDataRange.startTime,"TIME_END":global.warningRightDataRange.endTime,"TIME_TYPE":state.airPollutionContentState.timeType,"REGION_CODE":global.regionaQuery.regionCode,"DATA_TYPE":state.controlType,"POINT_NAME":state.inputValue,"interfaceId":"30f6f88064d789e356c09c4d4d8218c6"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"BJ_TYPE":state.warningTimeType,"TIME_START":global.warningRightDataRange.startTime,"TIME_END":global.warningRightDataRange.endTime,"TIME_TYPE":state.airPollutionContentState.timeType,"REGION_CODE":global.regionaQuery.regionCode,"DATA_TYPE":state.controlType,"POINT_NAME":state.inputValue,"interfaceId":"30f6f88064d789e356c09c4d4d8218c6"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     // console.log('站点报警', res);
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  state.listData = [];
  let data = JSON.parse(JSON.stringify(res.data.data))
  state.listData = data.slice(0, 100).map(item => {
    return {
      ...item,
      operation: '溯源',
      shortTime: handleNoVal((item.TIME || '').slice(5)),
      POLLUTE: replacePollutionCharacter(item.POLLUTE),
      RATE: handleNoVal(item.RATE),
      STATUS_NAME: handleNoVal(item?.STATUS_NAME),
      RESULT: handleNoVal(item?.RESULT),
    };
  });
  // 去重，获取报警站点数量
  const uniqueArr = [...data.reduce((map, obj) => {
    if (!map.has(obj.POINT_NAME)) {
      map.set(obj.POINT_NAME, obj);  // 如果map中没有该POINT_CODE，添加它
    }
    return map;
  }, new Map()).values()];
  state.warningTextArr[1].text = uniqueArr?.length || 0;
  state.warningTextArr[3].text = data?.length || 0;

} else {
  state.listData = [];
  state.warningTextArr[1].text = 0;
  state.warningTextArr[3].text = 0;
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
watch(() => [state.warningTimeType,global.warningRightDataRange.startTime,global.warningRightDataRange.endTime,global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getListData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-airPollutionPointWarning', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
onMounted(() => {
setPageScale('t-l-c-airPollutionPointWarning', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tHighLightTextx0x3ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x3.default, componentState.tHighLightTextx0x3?.[state.screenSize]));

 const tTabsBasex0x4ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x4.default, componentState.tTabsBasex0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tTablex0x6ComputedData = computed(() => _.merge({}, componentState.tTablex0x6.default, componentState.tTablex0x6?.[state.screenSize]));

 const tTablex0x7ComputedData = computed(() => _.merge({}, componentState.tTablex0x7.default, componentState.tTablex0x7?.[state.screenSize]));

 const tSearchx0x8ComputedData = computed(() => _.merge({}, componentState.tSearchx0x8.default, componentState.tSearchx0x8?.[state.screenSize]));

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
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tHighLightTextx0x3ComputedData,
tTabsBasex0x4ComputedData,
tRectx0x5ComputedData,
tTablex0x6ComputedData,
tTablex0x7ComputedData,
tSearchx0x8ComputedData,
ontabClick1736492888862,
onclick1734919878965,
onrowClick1737524929343_0_0,
onrowClick1735106182656,
onchange1733895967771,
};
},
}
</script>

<style scoped>
.t-l-c-airPollutionPointWarning {
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
height: 340px;
width: 410px;
background-color: rgba(0,0,0,0);
}
.t-l-c-airPollutionPointWarning .airPollutionPointWarning-t-rect-0-1 {
position: absolute !important;
top: 40px;
left: 0px;
width: 410px;
height: 42px;
pointer-events: auto;
}

.t-l-c-airPollutionPointWarning .airPollutionPointWarning-t-rect-0-2 {
position: absolute !important;
top: 52px;
left: 16px;
width: 18px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airPollutionPointWarning .airPollutionPointWarning-t-high-light-text-0-3 {
position: absolute !important;
top: 40px;
left: 46px;
width: 364px;
height: 42px;
pointer-events: auto;
}

.t-l-c-airPollutionPointWarning .airPollutionPointWarning-t-tabs-base-0-4 {
position: absolute !important;
top: 0px;
left: 0px;
width: 134px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airPollutionPointWarning .airPollutionPointWarning-t-rect-0-5 {
position: absolute !important;
top: 0px;
left: 356px;
width: 54px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airPollutionPointWarning .airPollutionPointWarning-t-table-0-6 {
position: absolute !important;
top: 88px;
left: 0px;
width: 410px;
height: 252px;
pointer-events: auto;
}

.t-l-c-airPollutionPointWarning .airPollutionPointWarning-t-table-0-7 {
position: absolute !important;
top: 88px;
left: 0px;
width: 410px;
height: 252px;
pointer-events: auto;
}

.t-l-c-airPollutionPointWarning .airPollutionPointWarning-t-search-0-8 {
position: absolute !important;
top: 0px;
left: 144px;
width: 204px;
height: 32px;
pointer-events: auto;
}
</style>
