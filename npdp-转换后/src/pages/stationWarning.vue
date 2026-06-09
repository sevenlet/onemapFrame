<template>
  <div id="t-l-c-stationWarning" class="t-l-c-stationWarning" ><t-component id="t-component-e556.d092b42c2" class="stationWarning-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName"></t-component><t-text-unit id="t-text-unit-df7d.0c301e461" class="stationWarning-t-text-unit-0-1"  :c-style="tTextUnitx0x1ComputedData.cStyle" :justify="tTextUnitx0x1ComputedData.justify" :align="tTextUnitx0x1ComputedData.align" :content="tTextUnitx0x1ComputedData.content" :unit="tTextUnitx0x1ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x1ComputedData.showOverflowTooltip"></t-text-unit><t-select id="t-select-aa06.70e5fbb7f" class="stationWarning-t-select-0-2"  :active-value="replaceCssVariables(filterData(state.pointType, componentPropBindingMap?.['t-select-aa06.70e5fbb7f']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x2ComputedData.options" :alias="tSelectx0x2ComputedData.alias" :multiple="tSelectx0x2ComputedData.multiple" :placeholder="tSelectx0x2ComputedData.placeholder" :clearable="tSelectx0x2ComputedData.clearable" :disabled="tSelectx0x2ComputedData.disabled" :name="tSelectx0x2ComputedData.name" :autocomplete="tSelectx0x2ComputedData.autocomplete" :filterable="tSelectx0x2ComputedData.filterable" :no-match-text="tSelectx0x2ComputedData.no-match-text" :no-data-text="tSelectx0x2ComputedData.no-data-text" :c-style="tSelectx0x2ComputedData.cStyle" @change="onchange1763015987474"></t-select><t-rect id="t-rect-4ed7.664206f84" class="stationWarning-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle"></t-rect><t-rect id="t-rect-a1cf.fdeeb7749" class="stationWarning-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle"></t-rect><t-high-light-text id="t-high-light-text-b1c9.d9b6fabf" class="stationWarning-t-high-light-text-0-5"  :fragment-list="replaceCssVariables(filterData(state.warningTextArr, componentPropBindingMap?.['t-high-light-text-b1c9.d9b6fabf']['fragmentList'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :styles="tHighLightTextx0x5ComputedData.styles" :c-style="tHighLightTextx0x5ComputedData.cStyle"></t-high-light-text><t-text-common id="t-text-common-54c0.2ab16d38f" class="stationWarning-t-text-common-0-6"  :label="tTextCommonx0x6ComputedData.label" :editable="tTextCommonx0x6ComputedData.editable" :c-style="tTextCommonx0x6ComputedData.cStyle"></t-text-common><t-table id="t-table-f4d9.66b63002d" class="stationWarning-t-table-0-7"  :height="tTablex0x7ComputedData.height" :stripe="tTablex0x7ComputedData.stripe" :border="tTablex0x7ComputedData.border" :auto-scroll="tTablex0x7ComputedData.autoScroll" :speed="tTablex0x7ComputedData.speed" :columns="tTablex0x7ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-f4d9.66b63002d']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x7ComputedData.defaultSort" :c-style="tTablex0x7ComputedData.cStyle" :empty-text="tTablex0x7ComputedData.emptyText" @cell-click="oncellClick1762410432035_0_0"></t-table></div>
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
import { TComponent, THighLightText, TRect, TSelect, TTable, TTextCommon, TTextUnit } from '@ths/design';

export default {
  components: {
    TComponent,
    THighLightText,
    TRect,
    TSelect,
    TTable,
    TTextCommon,
    TTextUnit,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-e556.d092b42c2":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-unit-df7d.0c301e461":{"attributeName":"tTextUnitx0x1","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-select-aa06.70e5fbb7f":{"attributeName":"tSelectx0x2","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-4ed7.664206f84":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-a1cf.fdeeb7749":{"attributeName":"tRectx0x4","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-high-light-text-b1c9.d9b6fabf":{"attributeName":"tHighLightTextx0x5","fragmentList":{"filters":[]},"styles":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-54c0.2ab16d38f":{"attributeName":"tTextCommonx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-table-f4d9.66b63002d":{"attributeName":"tTablex0x7","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]},"emptyText":{"filters":[]}}};
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
   warningTextArr: [{"text":"当前共","styleName":"style1"},{"text":"0","styleName":"style2"},{"text":"个站点发生","styleName":"style1"},{"text":"0","styleName":"style2"},{"text":"条报警。","styleName":"style1"}],
   pointType: "0",
   listData: [],
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
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"0px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/71ed927f19ff41e78116c906842de342_19/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextUnitx0x1: {
defaultStyle: {
            default: {"width":"230px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","animationName":"","top":"1px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"230px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","animationName":"","top":"1px"}},"unit":{"default":{"fontSize":"var(--business-text-size-20)","fontFamily":"方正综艺","lineHeight":"32px"}},"text":{"default":{"lineHeight":"32px","fontSize":"var(--business-text-size-20)"}}},
justify:"flex-start",
align:"flex-end",
content:"站点预警预报",
unit:"",
showOverflowTooltip:true, 
 },
},
tSelectx0x2: {
defaultStyle: {
            default: {"width":"295px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},
            
            },
 default: { 
 
activeValue:"0",
options:[{"value":"0","label":"国控","disabled":false},{"value":"1","label":"省控","disabled":false},{"value":"2","label":"市控","disabled":false},{"value":"3","label":"县控","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"295px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"410px","height":"42px","position":"unset","left":"-1px","top":"100px","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"42px","position":"unset","left":"-1px","top":"100px","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"18px","height":"19px","position":"unset","left":"15px","top":"112px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(assets/images/2024-12-09/8037d0060896423fb4250d034230a26a.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"18px","height":"19px","position":"unset","left":"15px","top":"112px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(assets/images/2024-12-09/8037d0060896423fb4250d034230a26a.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}}}, 
 },
},
tHighLightTextx0x5: {
defaultStyle: {
            default: {"width":"364px","height":"42px","position":"unset","left":"45px","top":"100px","lineHeight":"42px"},
            
            },
 default: { 
 
fragmentList:[{"text":"当前共","styleName":"style1"},{"text":"0","styleName":"style2"},{"text":"个站点发生","styleName":"style1"},{"text":"0","styleName":"style2"},{"text":"条报警。","styleName":"style1"}],
styles:[{"name":"style1","style":{"fontFamily":"微软雅黑","fontSize":"var(--business-text-size-14)","fontWeight":400,"color":"var(--business-text-avianize)"}},{"name":"style2","style":{"fontFamily":"微软雅黑","fontSize":"var(--business-text-size-14)","fontWeight":400,"color":"var(--business-warn)"}}],
cStyle:{"wrapper":{"default":{"width":"364px","height":"42px","position":"unset","left":"45px","top":"100px","lineHeight":"42px"}}}, 
 },
},
tTextCommonx0x6: {
defaultStyle: {
            default: {"width":"89px","height":"32px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"32px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"6px","top":"46px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"站点类型",
editable:false,
cStyle:{"wrapper":{"default":{"width":"89px","height":"32px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"32px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"6px","top":"46px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tTablex0x7: {
defaultStyle: {
            default: {"width":"410px","height":"300px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"300px",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"30px","type":"default","stateKey":"iconStatus"},{"label":"站点","type":"default","key":"point_name","stateKey":"","width":"100px","minWidth":"","align":"left","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)"}}},{"label":"站点类型","type":"default","key":"point_type","stateKey":"excellentValue","width":"60px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"报警时间","type":"default","key":"time","stateKey":"","width":"100px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"var(--business-unit-icon)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"infoKey":"start_time"},{"label":"类型","type":"default","key":"event_type","stateKey":"","width":"80px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"操作","type":"operation","key":"opt","stateKey":"","width":"40px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"fixed":false,"operationList":[{"name":"溯源","id":"trace","fontStyle":{"color":"rgba(5,245,251,1)"}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"300px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}},
emptyText:"暂无数据", 
 },
},
});
const handleTabClick = (row,column) => {

// 发送消息切换右屏
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'showWarningTraceDetail',  // 消息类型名称
    data: {}
  }
);
// 发送消息给地图
rootData.rootSocket.emit('message', {
  type: 'showAirSourceTrace',
  room: global.socketRoom,
  data: [ // 消息内容
    {
      shareCode: "showAirSourceTrace",
      runtimeValue: row.point_code,
      pointType: row.point_type || '',
      isEnters: true,
      // 小时或天时间，天的时候拼接上 00
      traceTime: global.air.timeType === 'hour' ? global.air.timeValue : global.air.timeValue + ' 00',
      layerName: row.point_type,
    }]
});
// 记录当前点位编码
global.warningRightPointCode = row?.point_code || ''
};
const getData = () => {
watch([() => global.warningRightDataRange.startTime, () => global.warningRightDataRange.endTime], (startTime,endTime) =>{

  if(startTime && endTime){
    apiRegistry.getListData.request();
  }
},{immediate: true, deep: true})
};
const onchange1763015987474 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.pointType = value;
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "changeAlarmStationType", // 消息名称
data: {"pointType":value}, // 发送的数据
});
};
const oncellClick1762410432035_0_0 = (row,column,cell,event) => {
// 执行自定义方法
handleTabClick(row,column);
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanWaterServiceBaseUrl","params":{"DISTRICT_CODE":"350702000000","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"30f6f88064d789e356c09c4d4d8218c6","END_TIME":"global.warningRightDataRange.endTime","START_TIME":"global.warningRightDataRange.startTime","POINT_CODE":"","POINT_TYPE":"state.pointType"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanWaterServiceBaseUrl,"params":{"DISTRICT_CODE":"350702000000","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"30f6f88064d789e356c09c4d4d8218c6","END_TIME":global.warningRightDataRange.endTime,"START_TIME":global.warningRightDataRange.startTime,"POINT_CODE":"","POINT_TYPE":state.pointType},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanWaterServiceBaseUrl-global.serviceBasePath',  {"DISTRICT_CODE":"350702000000","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"30f6f88064d789e356c09c4d4d8218c6","END_TIME":global.warningRightDataRange.endTime,"START_TIME":global.warningRightDataRange.startTime,"POINT_CODE":"","POINT_TYPE":state.pointType});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     
if(res?.data?.data?.length){
  const { data } = res?.data
  state.listData = data.map(item =>{
    return{
      ...item,
      point_type: filters.pointType(item.point_type),
      opt: 'trace'
    }
  })
  // 去重，获取报警站点数量
  const uniqueArr = [...data.reduce((map, obj) => {
    if (!map.has(obj.point_name)) {
      map.set(obj.point_name, obj);  // 如果map中没有该POINT_CODE，添加它
    }
    return map;
  }, new Map()).values()];
  state.warningTextArr[1].text = uniqueArr?.length || 0;
  state.warningTextArr[3].text = data?.length || 0;
}else{
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
watch(() => [global.regionaQuery.regionCode,state.pointType], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getListData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-stationWarning', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getData();
onMounted(() => {
setPageScale('t-l-c-stationWarning', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextUnitx0x1ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x1.default, componentState.tTextUnitx0x1?.[state.screenSize]));

 const tSelectx0x2ComputedData = computed(() => _.merge({}, componentState.tSelectx0x2.default, componentState.tSelectx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tHighLightTextx0x5ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x5.default, componentState.tHighLightTextx0x5?.[state.screenSize]));

 const tTextCommonx0x6ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x6.default, componentState.tTextCommonx0x6?.[state.screenSize]));

 const tTablex0x7ComputedData = computed(() => _.merge({}, componentState.tTablex0x7.default, componentState.tTablex0x7?.[state.screenSize]));

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
tTextUnitx0x1ComputedData,
tSelectx0x2ComputedData,
tRectx0x3ComputedData,
tRectx0x4ComputedData,
tHighLightTextx0x5ComputedData,
tTextCommonx0x6ComputedData,
tTablex0x7ComputedData,
onchange1763015987474,
oncellClick1762410432035_0_0,
};
},
}
</script>

<style scoped>
.t-l-c-stationWarning {
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
height: 461px;
width: 410px;
background-color: rgba(0,0,0,0);
}
.t-l-c-stationWarning .stationWarning-t-component-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-stationWarning .stationWarning-t-text-unit-0-1 {
position: absolute !important;
top: 1px;
left: 37px;
width: 230px;
height: 32px;
pointer-events: auto;
}

.t-l-c-stationWarning .stationWarning-t-select-0-2 {
position: absolute !important;
top: 46px;
left: 113px;
width: 295px;
height: 32px;
pointer-events: auto;
}

.t-l-c-stationWarning .stationWarning-t-rect-0-3 {
position: absolute !important;
top: 100px;
left: -1px;
width: 410px;
height: 42px;
pointer-events: auto;
}

.t-l-c-stationWarning .stationWarning-t-rect-0-4 {
position: absolute !important;
top: 112px;
left: 15px;
width: 18px;
height: 19px;
pointer-events: auto;
}

.t-l-c-stationWarning .stationWarning-t-high-light-text-0-5 {
position: absolute !important;
top: 100px;
left: 45px;
width: 364px;
height: 42px;
pointer-events: auto;
}

.t-l-c-stationWarning .stationWarning-t-text-common-0-6 {
position: absolute !important;
top: 46px;
left: 6px;
width: 89px;
height: 32px;
pointer-events: auto;
}

.t-l-c-stationWarning .stationWarning-t-table-0-7 {
position: absolute !important;
top: 157px;
left: 2px;
width: 410px;
height: 300px;
pointer-events: auto;
}
</style>
