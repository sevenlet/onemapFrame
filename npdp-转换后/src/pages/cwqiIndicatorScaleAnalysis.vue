<template>
  <div id="t-l-c-cwqiIndicatorScaleAnalysis" class="t-l-c-cwqiIndicatorScaleAnalysis" ><t-component id="t-component-a4b4.7625ba7a4" class="cwqiIndicatorScaleAnalysis-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName" :page-id="tComponentx0x0ComputedData.pageId" :page-code="tComponentx0x0ComputedData.pageCode"></t-component><t-text id="t-text-6583.da38b228" class="cwqiIndicatorScaleAnalysis-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle"></t-text><t-text-common id="t-text-common-0a70.30b951446" class="cwqiIndicatorScaleAnalysis-t-text-common-0-3"  :label="tTextCommonx0x3ComputedData.label" :editable="tTextCommonx0x3ComputedData.editable" :c-style="tTextCommonx0x3ComputedData.cStyle"></t-text-common><t-row id="t-row-9f48.a2e9870f6" class="cwqiIndicatorScaleAnalysis-t-row-0-4"  :c-style="tRowx0x4ComputedData.cStyle" :gutter="tRowx0x4ComputedData.gutter" :justify="tRowx0x4ComputedData.justify" :align="tRowx0x4ComputedData.align"><t-col id="t-col-dd00.f27181a86" class="cwqiIndicatorScaleAnalysis-t-col-0-4-0"  :span="tColx0x4x0ComputedData.span" :offset="tColx0x4x0ComputedData.offset" :push="tColx0x4x0ComputedData.push" :pull="tColx0x4x0ComputedData.pull" :c-style="tColx0x4x0ComputedData.cStyle"><t-chart-bar-simple id="t-chart-bar-simple-171e.9bc629894" class="cwqiIndicatorScaleAnalysis-t-chart-bar-simple-0-4-0-0"  :empty-img="tChartBarSimplex0x4x0x0ComputedData.emptyImg" :c-style="tChartBarSimplex0x4x0x0ComputedData.cStyle" :options="tChartBarSimplex0x4x0x0ComputedData.options" :data="replaceCssVariables(filterData(state.list, componentPropBindingMap?.['t-chart-bar-simple-171e.9bc629894']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :series-setting="tChartBarSimplex0x4x0x0ComputedData.seriesSetting" :main-axis="tChartBarSimplex0x4x0x0ComputedData.mainAxis" :bar="componentState.tChartBarSimplex0x4x0x0.bar"></t-chart-bar-simple></t-col><t-col id="t-col-059a.cd0fa80fa" class="cwqiIndicatorScaleAnalysis-t-col-0-4-1"  :span="tColx0x4x1ComputedData.span" :offset="tColx0x4x1ComputedData.offset" :push="tColx0x4x1ComputedData.push" :pull="tColx0x4x1ComputedData.pull" :c-style="tColx0x4x1ComputedData.cStyle"><t-table v-if="state.isShowList === true" id="t-table-896d.f0d26022e" class="cwqiIndicatorScaleAnalysis-t-table-0-4-1-0"  :height="tTablex0x4x1x0ComputedData.height" :stripe="tTablex0x4x1x0ComputedData.stripe" :border="tTablex0x4x1x0ComputedData.border" :auto-scroll="tTablex0x4x1x0ComputedData.autoScroll" :speed="tTablex0x4x1x0ComputedData.speed" :columns="tTablex0x4x1x0ComputedData.columns" :data="replaceCssVariables(filterData(state.list, componentPropBindingMap?.['t-table-896d.f0d26022e']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x4x1x0ComputedData.defaultSort" :c-style="tTablex0x4x1x0ComputedData.cStyle"></t-table></t-col></t-row><t-text id="t-text-4e12.f91e4a6b" class="cwqiIndicatorScaleAnalysis-t-text-0-5"  :label="replaceCssVariables(filterData(state.monitorTime, componentPropBindingMap?.['t-text-4e12.f91e4a6b']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle"></t-text><t-high-light-text id="t-high-light-text-50c4.c2ac9e907" class="cwqiIndicatorScaleAnalysis-t-high-light-text-0-6"  :fragment-list="replaceCssVariables(filterData(state.cwqiConfig, componentPropBindingMap?.['t-high-light-text-50c4.c2ac9e907']['fragmentList'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :styles="tHighLightTextx0x6ComputedData.styles" :c-style="tHighLightTextx0x6ComputedData.cStyle"></t-high-light-text></div>
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
import { TChartBarSimple, TCol, TComponent, THighLightText, TRow, TTable, TText, TTextCommon } from '@ths/design';

export default {
  components: {
    TChartBarSimple,
    TCol,
    TComponent,
    THighLightText,
    TRow,
    TTable,
    TText,
    TTextCommon,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-a4b4.7625ba7a4":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-6583.da38b228":{"attributeName":"tTextx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-1fe7.351fd04d8":{"attributeName":"tRectx0x2"},"t-text-common-0a70.30b951446":{"attributeName":"tTextCommonx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-9f48.a2e9870f6":{"attributeName":"tRowx0x4","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-dd00.f27181a86":{"attributeName":"tColx0x4x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-bar-simple-171e.9bc629894":{"attributeName":"tChartBarSimplex0x4x0x0","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]},"data":{"filters":[]},"seriesSetting":{"filters":[]},"mainAxis":{"filters":[]}},"t-col-059a.cd0fa80fa":{"attributeName":"tColx0x4x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-table-896d.f0d26022e":{"attributeName":"tTablex0x4x1x0","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-text-4e12.f91e4a6b":{"attributeName":"tTextx0x5","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-high-light-text-50c4.c2ac9e907":{"attributeName":"tHighLightTextx0x6","fragmentList":{"filters":[]},"styles":{"filters":[]},"cStyle":{"filters":[]}}};
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
   treemapLabelFontSize: 14,
   isShowList: false,
   updateKey: 0,
   cwqiConfig: [{"text":"CWQI：","styleName":"style1"},{"text":"-","styleName":"style2"}],
   list: [],
   pointCode: "",
   assessType: "",
   monitorTime: "",
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
tComponentx0x0: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"-17px","top":"2px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgFitContentComponent",
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"-17px","top":"2px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgFitContent",
componentName:"dialogTitleFirstBgFitContentComponent",
pageId:"4a771aa2e57b4c9c9941c4c366f732b1",
pageCode:"dialogTitleFirstBgFitContent", 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"auto","height":"28px","color":"rgba(255, 255, 255, 0.9)","position":"absolute","left":"40px","top":"2px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"28px","z-index":2,"min-width":"130px"},
            
            },
 default: { 
 
label:"水质监测信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"28px","color":"rgba(255, 255, 255, 0.9)","position":"absolute","left":"40px","top":"2px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"28px","z-index":2,"min-width":"130px"}}}, 
 },
},
tTextCommonx0x3: {
defaultStyle: {
            default: {"width":"52px","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-12)","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"20px","top":"117px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"CWQI",
editable:false,
cStyle:{"wrapper":{"default":{"width":"52px","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-12)","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"20px","top":"117px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tRowx0x4: {
defaultStyle: {
            default: {"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"13px","top":"107px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"13px","top":"107px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x4x0: {
defaultStyle: {
            default: {"width":"100px","height":"300px","display":"flex","justifyContent":"center","alignItems":"center","top":"554px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"300px","display":"flex","justifyContent":"center","alignItems":"center","top":"554px"}}}, 
 },
},
tChartBarSimplex0x4x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"300px","position":"unset","left":"11px","top":"103px","animationName":"","color":"var(--t-white)"},
            
            },
bar: computed(() => activeChartTheme.value?.bar),
 default: { 
 
emptyImg:"assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"width":"100%","height":"300px","position":"unset","left":"11px","top":"103px","animationName":"","color":"var(--t-white)"}},"emptyImg":{"default":{"display":"none"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"grid":{"containLabel":true,"top":"15%"},"legend":{"textStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":13},"itemWidth":10,"itemHeight":10,"icon":"rect","padding":[3,5,5,5],"top":"top","orient":"horizontal","show":false},"tooltip":{"backgroundColor":"rgba(0, 0, 0, 0.8)","borderColor":"rgba(255, 255, 255, 0.5)","textStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":state.treemapLabelFontSize}},"xAxis":{"axisLabel":{"color":"var(--skin-font-color-80)","fontSize":state.treemapLabelFontSize,"rotate":45},"axisLine":{"lineStyle":{"type":"solid","color":"var(--skin-font-color-40)"}},"axisTick":{"show":true,"lineStyle":{"color":"var(--skin-font-color-40)"}},"nameTextStyle":{"color":"var(--skin-font-color-60)","fontSize":13}},"yAxis":{"axisLabel":{"color":"var(--skin-font-color-80)","fontSize":state.treemapLabelFontSize},"axisLine":{"lineStyle":{"type":"solid","color":"rgba(255, 255, 255, 0.4)"}},"name":"","nameTextStyle":{"color":"var(--skin-font-color-60)","align":"right","padding":[0,0,0,0],"fontSize":0},"splitLine":{"lineStyle":{"type":"dashed","color":"var(--skin-font-color-20)"}}},"color":["rgb(88,158,247)","#00FF22","#FFC000","#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"]})),
data:[],
seriesSetting:{"xAxisLabel":"pointName","data":[{"name":"CWQI","dataKey":"lcwqi","style":{"barWidth":12}}]},
mainAxis:"x", 
 },
},
tColx0x4x1: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"flex-start"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"flex-start"}}}, 
 },
},
tTablex0x4x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"fit-content",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
columns:[{"label":" 监测指标","type":"default","key":"pointName","stateKey":"isCheck","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"24PX","height":"24PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"},"cellStyle":{"cursor":"default"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"14PX","height":"14PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"url(assets/images/2023-03-07/454b453f41b84c6097492361373088bd.png)","backgroundImage":"var(--business-checkbox-checked)","backgroundSize":"100% 100%","cursor":"pointer","transform":"translate(11px, 3px)","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":"","cursor":"pointer"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"14PX","height":"14PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"var(--business-checkbox)","backgroundSize":"100%","cursor":"pointer","transform":"translate(11px, 3px)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"监测值","type":"default","key":"density","stateKey":"canPosition","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"},"cellStyle":{"cursor":"default"}},"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"var(--business-position)","backgroundImage":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"var(--business-position)"},"cellStyle":{"background":"rgba(0, 0, 0, 0)"}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"var(--business-position)","backgroundImage":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"assets/images/2022-11-01/740fa325bf0b471d8e40134e70fda341.svg"},"cellStyle":{"background":""}}]},{"label":"CWQI","type":"default","key":"lcwqi","stateKey":"","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","display":"block","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"infoPosition":"left"},{"label":"ΔCWQI(%)","type":"state","key":"lcwqi_mom_rate","stateKey":"lcwqi_mom_rateStatus","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"},"cellStyle":{"cursor":"default"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}],"stateList":[{"name":"default","fontStyle":{"color":"var(--business-white)"}},{"name":"red","fontStyle":{"color":"var(--t-error7)"}},{"name":"green","fontStyle":{"color":"var(--t-success6)"}}]},{"label":"上期值","type":"default","key":"lcwqi_mom_base","stateKey":"","minWidth":"unset","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)","display":"block"},"cellStyle":{"cursor":"pointer"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}]},{"label":"去年同期值","type":"default","key":"lcwqi_yoy_base","stateKey":"","minWidth":"unset","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)","display":"block"},"cellStyle":{"cursor":"default"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"164px","height":"28px","color":"rgba(255, 255, 255, 0.9)","top":"2px","left":"unset","right":"30px","textAlign":"right","fontSize":"var(--business-text-size-14)","position":"absolute","animationName":"","lineHeight":"28px","z-index":1},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"28px","color":"rgba(255, 255, 255, 0.9)","top":"2px","left":"unset","right":"30px","textAlign":"right","fontSize":"var(--business-text-size-14)","position":"absolute","animationName":"","lineHeight":"28px","z-index":1}}}, 
 },
},
tHighLightTextx0x6: {
defaultStyle: {
            default: {"width":"auto","height":"auto","top":"42px","left":"18px","position":"unset","textAlign":"center","fontStyle":"normal","fontWeight":"400","paddingTop":"12px","paddingBottom":"12px","paddingRight":"20px","paddingLeft":"20px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"8px","borderTopRightRadius":"8px","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px"},
            
            },
 default: { 
 
fragmentList:[{"text":"CWQI：","styleName":"style1"},{"text":"-","styleName":"style2"}],
styles:[{"name":"style1","style":{"fontFamily":"思源","fontSize":"var(--business-text-size-16)","fontWeight":"500","color":"var(--skin-font-color-80)","lineHeight":"25px","letterSpacing":"0px","background":"unset","backgroundClip":"unset"}},{"name":"style2","style":{"fontFamily":"DIN-bold","fontSize":"var(--business-num-size-24)","fontWeight":"500","color":"var(--business-white)","lineHeight":"25px","letterSpacing":"0px","background":"unset","backgroundClip":"unset"}}],
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","top":"42px","left":"18px","position":"unset","textAlign":"center","fontStyle":"normal","fontWeight":"400","paddingTop":"12px","paddingBottom":"12px","paddingRight":"20px","paddingLeft":"20px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"8px","borderTopRightRadius":"8px","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px"}}}, 
 },
},
});
const initPage = () => {
// 获取主题字号
state.treemapLabelFontSize = parseInt(getCssVariable('--business-text-size-14')) || 14


// 处理参数
state.monitorTime = global.businessDialog.dialogParmas.monitorTime;
state.assessType = global.businessDialog.dialogParmas.assessType || 'monthly';
state.pointCode = global.businessDialog.dialogParmas.pointCode;
console.log(global.businessDialog.dialogParmas, 88888)

apiRegistry.getList.request();
apiRegistry.getCWQI.request();

// 接收消息
rootData.rootOn('rootSocket:change', (data) =>{
    if (data.type === 'changeFontSize') {
      state.treemapLabelFontSize = parseInt(getCssVariable('--business-text-size-14')) || 14;
    }
});



};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"START_TIME\":\"2025-01\",\"END_TIME\":\"state.monitorTime\",\"POINT_CODE\":\"state.pointCode\",\"POLLUTE_CODE\":\"\",\"WSYSTEMTYPE\":\"\",\"MONITORTIME\":\"\",\"REGION_PATH\":\"\",\"interfaceId\":\"92891ae33ddaaeba5f2b9a6f3ba706ce\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"START_TIME":"2025-01","END_TIME":state.monitorTime,"POINT_CODE":state.pointCode,"POLLUTE_CODE":"","WSYSTEMTYPE":"","MONITORTIME":"","REGION_PATH":"","interfaceId":"92891ae33ddaaeba5f2b9a6f3ba706ce"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"START_TIME\":\"2025-01\",\"END_TIME\":\state.monitorTime\,\"POINT_CODE\":\state.pointCode\,\"POLLUTE_CODE\":\"\",\"WSYSTEMTYPE\":\"\",\"MONITORTIME\":\"\",\"REGION_PATH\":\"\",\"interfaceId\":\"92891ae33ddaaeba5f2b9a6f3ba706ce\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getList'] = res.data;
                
     state.list = [];
const { data, head } = res.data;

if (head.statusCode === '200' && Array.isArray(data)) {
  state.list = data.map((val) => {
    let lcwqi_mom_rateStatus = 'red'; // 状态

    if (val.lcwqi_mom_rate.indexOf('-') > -1) {
      lcwqi_mom_rateStatus = 'green';
    } else if (val.lcwqi_mom_rate === '0') {
      lcwqi_mom_rateStatus = 'default';
    } else {
      val.lcwqi_mom_rate = handleNoVal(val.lcwqi_mom_rate) === '-' ? '-' : `+${val.lcwqi_mom_rate}`;
    }
    return {
      lcwqi: handleNoVal(val.lcwqi),
      lcwqi_yoy_base: handleNoVal(val.lcwqi_yoy_base),
      lcwqi_mom_rate: handleNoVal(val.lcwqi_yoy_rate),
      lcwqi_mom_rateStatus,
      lcwqi_mom_base: handleNoVal(val.lcwqi_mom_base),
      density: handleNoVal(val.lpollutevalue), // 浓度
      pointName: handleNoVal(val.pollute_name),
    }
  });
  console.log(state.list, 'state.list')
}

state.isShowList = true;
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.zbList = [];
state.isShowList = true;


      reject(error);
    });
  });
},
              },
// 接口函数
 getCWQI: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"START_TIME\":\"2025-01\",\"END_TIME\":\"state.monitorTime\",\"POINT_CODE\":\"state.pointCode\",\"WSYSTEMTYPE\":\"\",\"REGION_PATH\":\"global.regionaQuery.regionCode\",\"interfaceId\":\"ae91c78058d05e8d9bac4e5bb92c04c4\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"START_TIME":"2025-01","END_TIME":state.monitorTime,"POINT_CODE":state.pointCode,"WSYSTEMTYPE":"","REGION_PATH":global.regionaQuery.regionCode,"interfaceId":"ae91c78058d05e8d9bac4e5bb92c04c4"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"START_TIME\":\"2025-01\",\"END_TIME\":\state.monitorTime\,\"POINT_CODE\":\state.pointCode\,\"WSYSTEMTYPE\":\"\",\"REGION_PATH\":\global.regionaQuery.regionCode\,\"interfaceId\":\"ae91c78058d05e8d9bac4e5bb92c04c4\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCWQI'] = res.data;
                
     const { data, head } = res.data;

state.cwqiConfig[1].text = '-';
if (head.statusCode === '200' && Array.isArray(data) && data.length) {
  state.cwqiConfig[1].text = data[0].LCWQI;
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.cwqiConfig[1].text = '-';
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-cwqiIndicatorScaleAnalysis', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPage();
onMounted(() => {
setPageScale('t-l-c-cwqiIndicatorScaleAnalysis', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tTextCommonx0x3ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x3.default, componentState.tTextCommonx0x3?.[state.screenSize]));

 const tRowx0x4ComputedData = computed(() => _.merge({}, componentState.tRowx0x4.default, componentState.tRowx0x4?.[state.screenSize]));

 const tColx0x4x0ComputedData = computed(() => _.merge({}, componentState.tColx0x4x0.default, componentState.tColx0x4x0?.[state.screenSize]));

 const tChartBarSimplex0x4x0x0ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartBarSimplex0x4x0x0.default, componentState.tChartBarSimplex0x4x0x0?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tColx0x4x1ComputedData = computed(() => _.merge({}, componentState.tColx0x4x1.default, componentState.tColx0x4x1?.[state.screenSize]));

 const tTablex0x4x1x0ComputedData = computed(() => _.merge({}, componentState.tTablex0x4x1x0.default, componentState.tTablex0x4x1x0?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tHighLightTextx0x6ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x6.default, componentState.tHighLightTextx0x6?.[state.screenSize]));

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
tComponentx0x0ComputedData,
tTextx0x1ComputedData,
tTextCommonx0x3ComputedData,
tRowx0x4ComputedData,
tColx0x4x0ComputedData,
tChartBarSimplex0x4x0x0ComputedData,
tColx0x4x1ComputedData,
tTablex0x4x1x0ComputedData,
tTextx0x5ComputedData,
tHighLightTextx0x6ComputedData,
};
},
}
</script>

<style scoped>
.t-l-c-cwqiIndicatorScaleAnalysis {
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
position: Relative;
z-index: 1;
filter: ;
width: 100%;
height: 100%;
overflow-y: auto;
background-color: rgba(0,0,0,0);
}
.t-l-c-cwqiIndicatorScaleAnalysis .cwqiIndicatorScaleAnalysis-t-component-0-0 {
position: absolute !important;
top: 2px;
left: -17px;
width: 100%;
height: 28px;
pointer-events: auto;
}

.t-l-c-cwqiIndicatorScaleAnalysis .cwqiIndicatorScaleAnalysis-t-text-0-1 {
position: absolute !important;
top: 2px;
left: 40px;
width: auto;
height: 28px;
pointer-events: auto;
}

.t-l-c-cwqiIndicatorScaleAnalysis .cwqiIndicatorScaleAnalysis-t-text-common-0-3 {
position: absolute !important;
top: 117px;
left: 20px;
width: 52px;
height: 20px;
pointer-events: auto;
}

.t-l-c-cwqiIndicatorScaleAnalysis .cwqiIndicatorScaleAnalysis-t-row-0-4 {
position: absolute !important;
top: 107px;
left: 13px;
width: 100%;
height: auto;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-cwqiIndicatorScaleAnalysis .cwqiIndicatorScaleAnalysis-t-col-0-4-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 300px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-cwqiIndicatorScaleAnalysis .cwqiIndicatorScaleAnalysis-t-chart-bar-simple-0-4-0-0 {
position: unset;
top: 103px;
left: 11px;
width: 100%;
height: 300px;
pointer-events: auto;
}

.t-l-c-cwqiIndicatorScaleAnalysis .cwqiIndicatorScaleAnalysis-t-col-0-4-1 {
position: relative;
top: null;
left: null;
width: 100px;
height: auto;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: flex-start;
}

.t-l-c-cwqiIndicatorScaleAnalysis .cwqiIndicatorScaleAnalysis-t-table-0-4-1-0 {
position: unset;
top: 297px;
left: 12px;
width: 100%;
height: auto;
pointer-events: auto;
}

.t-l-c-cwqiIndicatorScaleAnalysis .cwqiIndicatorScaleAnalysis-t-text-0-5 {
position: absolute !important;
top: 2px;
left: 645px;
width: 164px;
height: 28px;
pointer-events: auto;
}

.t-l-c-cwqiIndicatorScaleAnalysis .cwqiIndicatorScaleAnalysis-t-high-light-text-0-6 {
position: absolute !important;
top: 42px;
left: 18px;
width: auto;
height: auto;
pointer-events: auto;
}
</style>
