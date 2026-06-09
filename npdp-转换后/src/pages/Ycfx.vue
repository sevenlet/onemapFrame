<template>
  <div id="t-l-c-Ycfx" class="t-l-c-Ycfx" ><t-row id="t-row-3e7b.b01c83e2" class="Ycfx-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align"><t-col id="t-col-feda.f0263853a" class="Ycfx-t-col-0-0-0"  :span="tColx0x0x0ComputedData.span" :offset="tColx0x0x0ComputedData.offset" :push="tColx0x0x0ComputedData.push" :pull="tColx0x0x0ComputedData.pull" :c-style="tColx0x0x0ComputedData.cStyle"><t-chart-design v-if="state.chartShow === true" id="t-chart-design-257d.c589f49de" class="Ycfx-t-chart-design-0-0-0-0"  :empty-img="replaceCssVariables(filterData(state.noDataImg, componentPropBindingMap?.['t-chart-design-257d.c589f49de']['emptyImg'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tChartDesignx0x0x0x0ComputedData.cStyle" :options="replaceCssVariables(filterData(state.lineChartOption, componentPropBindingMap?.['t-chart-design-257d.c589f49de']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @get-chart-instance="ongetChartInstance1763191439325"></t-chart-design></t-col></t-row><t-row id="t-row-b207.16ac9ab01" class="Ycfx-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align"><t-col id="t-col-8995.8b9ba6e24" class="Ycfx-t-col-0-1-0"  :span="tColx0x1x0ComputedData.span" :offset="tColx0x1x0ComputedData.offset" :push="tColx0x1x0ComputedData.push" :pull="tColx0x1x0ComputedData.pull" :c-style="tColx0x1x0ComputedData.cStyle"><t-text id="t-text-740f.85d1d67c6" class="Ycfx-t-text-0-1-0-0"  :label="tTextx0x1x0x0ComputedData.label" :editable="tTextx0x1x0x0ComputedData.editable" :c-style="tTextx0x1x0x0ComputedData.cStyle"></t-text><t-date-picker v-if="state.dialogType === '2'" id="t-date-picker-2b6d.038f4b93d" class="Ycfx-t-date-picker-0-1-0-1"  :placeholder="tDatePickerx0x1x0x1ComputedData.placeholder" :start-placeholder="tDatePickerx0x1x0x1ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x1x0x1ComputedData.endPlaceholder" :type="tDatePickerx0x1x0x1ComputedData.type" :clearable="tDatePickerx0x1x0x1ComputedData.clearable" :range-separator="tDatePickerx0x1x0x1ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.params.time.range, componentPropBindingMap?.['t-date-picker-2b6d.038f4b93d']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x1x0x1ComputedData.separator" :readonly="tDatePickerx0x1x0x1ComputedData.readonly" :editable="tDatePickerx0x1x0x1ComputedData.editable" :c-style="tDatePickerx0x1x0x1ComputedData.cStyle" @date-change="ondateChange1735539087143_0_0"></t-date-picker><t-date-picker v-if="state.dialogType === '1'" id="t-date-picker-cad2.abd345996" class="Ycfx-t-date-picker-0-1-0-2"  :placeholder="tDatePickerx0x1x0x2ComputedData.placeholder" :start-placeholder="tDatePickerx0x1x0x2ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x1x0x2ComputedData.endPlaceholder" :type="tDatePickerx0x1x0x2ComputedData.type" :clearable="tDatePickerx0x1x0x2ComputedData.clearable" :range-separator="tDatePickerx0x1x0x2ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.params.time.range, componentPropBindingMap?.['t-date-picker-cad2.abd345996']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x1x0x2ComputedData.separator" :readonly="tDatePickerx0x1x0x2ComputedData.readonly" :editable="tDatePickerx0x1x0x2ComputedData.editable" :c-style="tDatePickerx0x1x0x2ComputedData.cStyle" @date-change="ondateChange1734160159774"></t-date-picker><t-date-picker v-if="state.dialogType === '3'" id="t-date-picker-777f.73b3652a8" class="Ycfx-t-date-picker-0-1-0-3"  :placeholder="tDatePickerx0x1x0x3ComputedData.placeholder" :start-placeholder="tDatePickerx0x1x0x3ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x1x0x3ComputedData.endPlaceholder" :type="tDatePickerx0x1x0x3ComputedData.type" :clearable="tDatePickerx0x1x0x3ComputedData.clearable" :range-separator="tDatePickerx0x1x0x3ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.params.time.range, componentPropBindingMap?.['t-date-picker-777f.73b3652a8']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x1x0x3ComputedData.separator" :readonly="tDatePickerx0x1x0x3ComputedData.readonly" :editable="tDatePickerx0x1x0x3ComputedData.editable" :c-style="tDatePickerx0x1x0x3ComputedData.cStyle" @date-change="ondateChange1735539103868_0_0"></t-date-picker></t-col><t-col id="t-col-8802.afe573357" class="Ycfx-t-col-0-1-1"  :span="tColx0x1x1ComputedData.span" :offset="tColx0x1x1ComputedData.offset" :push="tColx0x1x1ComputedData.push" :pull="tColx0x1x1ComputedData.pull" :c-style="tColx0x1x1ComputedData.cStyle"><t-text id="t-text-717d.29e000721" class="Ycfx-t-text-0-1-1-0"  :label="tTextx0x1x1x0ComputedData.label" :editable="tTextx0x1x1x0ComputedData.editable" :c-style="tTextx0x1x1x0ComputedData.cStyle"></t-text><t-select id="t-select-85d8.0de00912a" class="Ycfx-t-select-0-1-1-1"  :active-value="replaceCssVariables(filterData(state.upstreamPointCode, componentPropBindingMap?.['t-select-85d8.0de00912a']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.options.section, componentPropBindingMap?.['t-select-85d8.0de00912a']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x1x1x1ComputedData.alias" :multiple="tSelectx0x1x1x1ComputedData.multiple" :placeholder="tSelectx0x1x1x1ComputedData.placeholder" :clearable="tSelectx0x1x1x1ComputedData.clearable" :disabled="tSelectx0x1x1x1ComputedData.disabled" :collapse-tags="tSelectx0x1x1x1ComputedData.collapseTags" :name="tSelectx0x1x1x1ComputedData.name" :autocomplete="tSelectx0x1x1x1ComputedData.autocomplete" :filterable="tSelectx0x1x1x1ComputedData.filterable" :no-match-text="tSelectx0x1x1x1ComputedData.no-match-text" :no-data-text="tSelectx0x1x1x1ComputedData.no-data-text" :c-style="tSelectx0x1x1x1ComputedData.cStyle" :multiple-limit="tSelectx0x1x1x1ComputedData.multipleLimit" :data="tSelectx0x1x1x1ComputedData.data" @change="onchange1767840981113_0_0"></t-select></t-col><t-col id="t-col-c214.e7bce7002" class="Ycfx-t-col-0-1-2"  :span="tColx0x1x2ComputedData.span" :offset="tColx0x1x2ComputedData.offset" :push="tColx0x1x2ComputedData.push" :pull="tColx0x1x2ComputedData.pull" :c-style="tColx0x1x2ComputedData.cStyle"><t-text id="t-text-eadd.0abab7f2d" class="Ycfx-t-text-0-1-2-0"  :label="tTextx0x1x2x0ComputedData.label" :editable="tTextx0x1x2x0ComputedData.editable" :c-style="tTextx0x1x2x0ComputedData.cStyle"></t-text><t-select id="t-select-ee9f.bf9455a04" class="Ycfx-t-select-0-1-2-1"  :active-value="replaceCssVariables(filterData(state.params.monitor, componentPropBindingMap?.['t-select-ee9f.bf9455a04']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.options.monitor, componentPropBindingMap?.['t-select-ee9f.bf9455a04']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x1x2x1ComputedData.alias" :multiple="tSelectx0x1x2x1ComputedData.multiple" :placeholder="tSelectx0x1x2x1ComputedData.placeholder" :clearable="tSelectx0x1x2x1ComputedData.clearable" :disabled="tSelectx0x1x2x1ComputedData.disabled" :name="tSelectx0x1x2x1ComputedData.name" :autocomplete="tSelectx0x1x2x1ComputedData.autocomplete" :filterable="tSelectx0x1x2x1ComputedData.filterable" :no-match-text="tSelectx0x1x2x1ComputedData.no-match-text" :no-data-text="tSelectx0x1x2x1ComputedData.no-data-text" :c-style="tSelectx0x1x2x1ComputedData.cStyle" @change="onchange1734159936716"></t-select></t-col></t-row><t-row id="t-row-9b4d.c1ea6feb4" class="Ycfx-t-row-0-2"  :c-style="tRowx0x2ComputedData.cStyle" :gutter="tRowx0x2ComputedData.gutter" :justify="tRowx0x2ComputedData.justify" :align="tRowx0x2ComputedData.align"><t-col id="t-col-97f1.67ceeb6b3" class="Ycfx-t-col-0-2-0"  :span="tColx0x2x0ComputedData.span" :offset="tColx0x2x0ComputedData.offset" :push="tColx0x2x0ComputedData.push" :pull="tColx0x2x0ComputedData.pull" :c-style="tColx0x2x0ComputedData.cStyle"><t-text id="t-text-8f2e.58316ed1d" class="Ycfx-t-text-0-2-0-0"  :label="tTextx0x2x0x0ComputedData.label" :editable="tTextx0x2x0x0ComputedData.editable" :c-style="tTextx0x2x0x0ComputedData.cStyle"></t-text><t-switch id="t-switch-5d48.72ababdbd" class="Ycfx-t-switch-0-2-0-1"  :value="replaceCssVariables(filterData(state.isBz, componentPropBindingMap?.['t-switch-5d48.72ababdbd']['value'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tSwitchx0x2x0x1ComputedData.cStyle" @change="onchange1734160214280"></t-switch></t-col></t-row></div>
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
import { TChartDesign, TCol, TDatePicker, TRow, TSelect, TSwitch, TText } from '@ths/design';

export default {
  components: {
    TChartDesign,
    TCol,
    TDatePicker,
    TRow,
    TSelect,
    TSwitch,
    TText,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-3e7b.b01c83e2":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-feda.f0263853a":{"attributeName":"tColx0x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-design-257d.c589f49de":{"attributeName":"tChartDesignx0x0x0x0","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-row-b207.16ac9ab01":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-8995.8b9ba6e24":{"attributeName":"tColx0x1x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-740f.85d1d67c6":{"attributeName":"tTextx0x1x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-2b6d.038f4b93d":{"attributeName":"tDatePickerx0x1x0x1","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-cad2.abd345996":{"attributeName":"tDatePickerx0x1x0x2","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-777f.73b3652a8":{"attributeName":"tDatePickerx0x1x0x3","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-8802.afe573357":{"attributeName":"tColx0x1x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-717d.29e000721":{"attributeName":"tTextx0x1x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-85d8.0de00912a":{"attributeName":"tSelectx0x1x1x1","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"collapseTags":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]},"multipleLimit":{"filters":[]},"data":{"filters":[]}},"t-col-c214.e7bce7002":{"attributeName":"tColx0x1x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-eadd.0abab7f2d":{"attributeName":"tTextx0x1x2x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-ee9f.bf9455a04":{"attributeName":"tSelectx0x1x2x1","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-row-9b4d.c1ea6feb4":{"attributeName":"tRowx0x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-97f1.67ceeb6b3":{"attributeName":"tColx0x2x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-8f2e.58316ed1d":{"attributeName":"tTextx0x2x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-switch-5d48.72ababdbd":{"attributeName":"tSwitchx0x2x0x1","value":{"filters":[]},"cStyle":{"filters":[]}}};
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
   fallbackSeq: 0,
   times: [],
   chartShow: true,
   myChart: {},
   downstreamStandardSeriesData: [],
   upstreamStandardSeriesData: [],
   upstreamseriesData: [],
   downstreamseriesData: [],
   downstreamPointCode: [],
   upstreamPointCode: [],
   downstreamSelectOptions: [],
   upstreamSelectOptions: [],
   dialogType: "",
   noDataImg: "",
   isBz: true,
   seriesData: [],
   standardSeriesData: [],
   yAxisUnit: "",
   lineChartOption: {},
   normalLineCommonSeriesOption: {"type":"line","symbolSize":1,"labelLine":{"smooth":true},"smooth":true},
   params: {"time":{"start":"","end":"","range":[]},"section":[],"monitor":"","interfaceId":"f5a13b25067b52a45d626d1f0284372d","pointcode":"3507001047","monitorType":"0"},
   options: {"monitor":[],"section":[]},
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
            default: {"width":"100%","height":"80%","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"4px","top":"104px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"80%","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"4px","top":"104px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x0x0: {
defaultStyle: {
            default: {"width":"100px","height":"100%","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"100%","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tChartDesignx0x0x0x0: {
defaultStyle: {
            default: {"height":"100%","width":"100%","position":"unset","left":"0px","top":"108px"},
            
            },
 default: { 
 
emptyImg:"",
cStyle:{"wrapper":{"default":{"height":"100%","width":"100%","position":"unset","left":"0px","top":"108px"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
tRowx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"9px","gap":"auto"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"9px","gap":"auto"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x1x0: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"left","alignItems":"center"},
            
            },
 default: { 
 
span:8,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"left","alignItems":"center"}}}, 
 },
},
tTextx0x1x0x0: {
defaultStyle: {
            default: {"width":"80px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"16px","top":"18px","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","animationName":"","textAlign":"right","marginRight":"15px"},
            
            },
 default: { 
 
label:"监测时间",
editable:false,
cStyle:{"wrapper":{"default":{"width":"80px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"16px","top":"18px","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","animationName":"","textAlign":"right","marginRight":"15px"}}}, 
 },
},
tDatePickerx0x1x0x1: {
defaultStyle: {
            default: {"width":"auto","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerangehour",
clearable:false,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","lineHeight":"20px"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","lineHeight":"20px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"30px"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--skin-font-color)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--skin-font-color)"}},"operatorArrow":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--skin-font-color)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--skin-font-color)","borderLeft":"1px solid var(--skin-font-color)","borderTop":"1px solid var(--skin-font-color)","borderRight":"1px solid var(--skin-font-color)","borderBottom":"1px solid var(--skin-font-color)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--skin-font-color)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tDatePickerx0x1x0x2: {
defaultStyle: {
            default: {"width":"auto","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"daterange",
clearable:false,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","lineHeight":"20px"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","lineHeight":"20px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"30px"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--skin-font-color)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--skin-font-color)"}},"operatorArrow":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--skin-font-color)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--skin-font-color)","borderLeft":"1px solid var(--skin-font-color)","borderTop":"1px solid var(--skin-font-color)","borderRight":"1px solid var(--skin-font-color)","borderBottom":"1px solid var(--skin-font-color)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--skin-font-color)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tDatePickerx0x1x0x3: {
defaultStyle: {
            default: {"width":"auto","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"monthrange",
clearable:false,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","lineHeight":"20px"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","lineHeight":"20px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"30px"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--skin-font-color)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--skin-font-color)"}},"operatorArrow":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--skin-font-color)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--skin-font-color)","borderLeft":"1px solid var(--skin-font-color)","borderTop":"1px solid var(--skin-font-color)","borderRight":"1px solid var(--skin-font-color)","borderBottom":"1px solid var(--skin-font-color)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--skin-font-color)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tColx0x1x1: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"},
            
            },
 default: { 
 
span:8,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tTextx0x1x1x0: {
defaultStyle: {
            default: {"width":"80px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"127px","top":"69px","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","animationName":"","textAlign":"right","marginRight":"10px"},
            
            },
 default: { 
 
label:"断面",
editable:false,
cStyle:{"wrapper":{"default":{"width":"80px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"127px","top":"69px","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","animationName":"","textAlign":"right","marginRight":"10px"}}}, 
 },
},
tSelectx0x1x1x1: {
defaultStyle: {
            default: {"width":"auto","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:[],
options:[],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:true,
placeholder:"请选择",
clearable:false,
disabled:false,
collapseTags:true,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"auto","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"tag":{"default":{"fontSize":"var(--business-text-size-18)","lineHeight":"var(--business-text-size-18)","height":"var(--business-text-size-18)"}}},
multipleLimit:4,
data:[], 
 },
},
tColx0x1x2: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","gap":"auto","left":"0px","top":"41px"},
            
            },
 default: { 
 
span:8,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","gap":"auto","left":"0px","top":"41px"}}}, 
 },
},
tTextx0x1x2x0: {
defaultStyle: {
            default: {"width":"85px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"641px","top":"18px","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"监测指标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"85px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"641px","top":"18px","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","animationName":"","textAlign":"center"}}}, 
 },
},
tSelectx0x1x2x1: {
defaultStyle: {
            default: {"width":"auto","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:"",
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
cStyle:{"wrapper":{"default":{"width":"auto","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tRowx0x2: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"60px","gap":"auto"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"60px","gap":"auto"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x2x0: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tTextx0x2x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"726px","top":"65px","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","animationName":"","textAlign":"right","marginRight":"10px"},
            
            },
 default: { 
 
label:"标准值",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"726px","top":"65px","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)","animationName":"","textAlign":"right","marginRight":"10px"}}}, 
 },
},
tSwitchx0x2x0x1: {
defaultStyle: {
            default: {"width":"32px","height":"22px","position":"unset","left":"791px","top":"65px","animationName":"","marginLeft":"10px"},
            
            },
 default: { 
 
value:true,
cStyle:{"wrapper":{"default":{"width":"32px","height":"22px","position":"unset","left":"791px","top":"65px","animationName":"","marginLeft":"10px"}},"core":{"active":{"backgroundColor":"var(--business-theme)","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
});
const handleTimeSelect = (times) => {
if (times.length) {
  state.params.time.start = times[0] || '';
  state.params.time.end = times[1] || '';
  state.params.time.range = times;
} else {
  state.params.time.range = [];
  state.params.time.start = '';
  state.params.time.end = '';
}
// getLineData();
// apiRegistry.getLineData.request();

  const seq = ++state.fallbackSeq;
  const priority = ['W21011', 'W21003', 'W01019', 'W01009'];

  const run = async () => {
    try {
      // 如果用户当前选中的不是总磷（以P计），则只按当前指标请求一次，不自动跳走
      const needFallback = state.params.monitor === 'W21011';
      const codesToTry = needFallback ? priority : [state.params.monitor];

      for (const code of codesToTry) {
        if (seq !== state.fallbackSeq) return;

        if (needFallback) {
          const opt = state.options?.monitor?.find((m) => m?.value === code);
          if (!opt) continue;
          state.params.monitor = opt.value;
          state.yAxisUnit = opt.unit || '';
        }

        await apiRegistry.getLineData.request();

        const hasData =
          Array.isArray(state.seriesData) &&
          state.seriesData.some((s) =>
            Array.isArray(s?.data) &&
            s.data.some((pt) => {
              const raw = pt?.value?.[1];
              const v = Number(raw);
              return raw !== null && raw !== undefined && !Number.isNaN(v) && v >= 0;
            })
          );

        if (hasData || !needFallback) break;
      }

      if (seq !== state.fallbackSeq) return;
      changeStandard(state.isBz);
    } catch (error) {
      console.error('某个请求失败了:', error);
    }
  };

  run();

};
const handleMonitorSelect = (item) => {
state.params.monitor = item.value;
state.yAxisUnit = item.unit || '';
// getLineData();

// apiRegistry.getLineData.request();


  const seq = ++state.fallbackSeq;
  const priority =['W21011', 'W21003', 'W01019', 'W01009'];

  const run = async () => {
    try {
      // 仅当用户选总磷（以P计）启用兜底，避免抢走用户的其他选择
      const needFallback = state.params.monitor === 'W21011';
      const codesToTry = needFallback ? priority : [state.params.monitor];

      for (const code of codesToTry) {
        if (seq !== state.fallbackSeq) return;

        if (needFallback) {
          const opt = state.options?.monitor?.find((m) => m?.value === code);
          if (!opt) continue;
          state.params.monitor = opt.value;
          state.yAxisUnit = opt.unit || '';
        }

        await apiRegistry.getLineData.request();

        const hasData =
          Array.isArray(state.seriesData) &&
          state.seriesData.some((s) =>
            Array.isArray(s?.data) &&
            s.data.some((pt) => {
              const raw = pt?.value?.[1];
              const v = Number(raw);
              return raw !== null && raw !== undefined && !Number.isNaN(v) && v >= 0;
            })
          );

        if (hasData || !needFallback) break;
      }

      if (seq !== state.fallbackSeq) return;
      changeStandard(state.isBz);
    } catch (error) {
      console.error('某个请求失败了:', error);
    }
  };

  run();
};
const handleChartAxisLabel = () => {
const obj = checkTimeRange(state.dialogType, state.params.time.range, state.lineChartOption.xAxis.data.length)

// 处理x轴显示标签间隔、及重复值
if (obj.flag) {
  state.lineChartOption.xAxis.axisLabel.interval = 0;
  state.lineChartOption.xAxis.axisLabel.formatter = (value, index) => {
    let dayValue;
    switch (state.dialogType) {
      case '1':
        // 自动天
        dayValue = dateFormat(value.replace('日', ''), 'yyyy-MM');
        break;
      case '2':
        // 自动小时
        dayValue = dateFormat(`${value.replace('时', '')}:00`, 'MM-dd');
        break;
      case '3':
        // 手工
        dayValue = dateFormat(value, 'yyyy');
        break;
      default:
        dayValue = value;
        break;
    }
    return index % obj.num === 0 ? dayValue : '';
  };
  state.lineChartOption.xAxis.axisTick.interval = (index) => {
    return index % obj.num === 0;
  };
} else {
  state.lineChartOption.xAxis.axisLabel.interval = 'auto';
  state.lineChartOption.xAxis.axisLabel.formatter = (value) => value;
  state.lineChartOption.xAxis.axisTick.interval = 'auto';
}
};
const changeStandard = (isShow) => {
state.lineChartOption.series = [
  ...state.seriesData,
  ...(isShow ? state.standardSeriesData : [])
];
state.showChart = false;
nextTick(()=>state.showChart = true)
console.log('state.options',state.lineChartOption)
};
const initPage = () => {
// 处理参数
state.params.pointcode = global.businessDialog.dialogParmas.pointCode;
if (global.businessDialog.dialogParmas?.dialogType === 'autoDay') {
  state.params.interfaceId = "f5a13b25067b52a45d626d1f0284372d";
  state.dialogType = '1'
    state.dialogType = '1'
  state.params.monitorType = '0'
} else if (global.businessDialog.dialogParmas?.dialogType === 'autoHour') {
  state.params.interfaceId = "8b3f2e8c7397518f4de2c5c51fb23565";
  state.dialogType = '2'
    state.params.monitorType = '0'
} else {
  state.params.interfaceId = "59cd810cc7c080845a33b43d62de460d";
  state.dialogType = '3'
    state.params.monitorType = '1'
}

// echarts图配置
setOptions();

// 设置暂无数据图片
setNoData();

// 获取时间下拉值（用结束时间向前推指定格式的时间）
getTimeValue(global.businessDialog.dialogParmas.monitorTime, state.dialogType);

// // 获取下拉选项后请求数据
// const getData = async () => {
//   // await getSectionData();
//   // await getMonitorData();
//   // getLineData();

//  await apiRegistry.getSectionData.request();

//   // await apiRegistry.getMonitorDataAuto.request();
//   await apiRegistry.getMonitorDataHandmade.request();

//   apiRegistry.getLineData.request();
// }

  const getData = async () => {
    // await getSectionData();
    // await getMonitorData();
    // getLineData();
  
   await apiRegistry.getSectionData.request();

    let dialogType = global.businessDialog.dialogParmas?.dialogType || ''
    // 自动断面
    if(dialogType === 'autoHour'){
      await apiRegistry.getMonitorDataAuto.request();
    }else{
      await apiRegistry.getMonitorDataHandmade.request();
    }

    const seq = ++state.fallbackSeq;
    const priority = ['W21011', 'W21003', 'W01019', 'W01009'];

    for (const code of priority) {
      if (seq !== state.fallbackSeq) return;

      const opt = state.options?.monitor?.find((m) => m?.value === code);
      if (!opt) continue;
      state.params.monitor = opt.value;
      state.yAxisUnit = opt.unit || '';

      await apiRegistry.getLineData.request();

      const hasData =
        Array.isArray(state.seriesData) &&
        state.seriesData.some((s) =>
          Array.isArray(s?.data) &&
          s.data.some((pt) => {
            const raw = pt?.value?.[1];
            const v = Number(raw);
            return raw !== null && raw !== undefined && !Number.isNaN(v) && v >= 0;
          })
        );

      if (hasData) break;
    }

    if (seq !== state.fallbackSeq) return;
    changeStandard(state.isBz);
  }

// 获取数据
getData();
};
const setNoData = () => {
// 设置暂无数据图标
state.noDataImg = getCssVariable('--business-no-data-img');
};
const setOptions = () => {

  
    // 变化趋势图表配置
    state.lineChartOption = {
      "color": [
        "#2CCAFF",
        "#D56900",
        "#465FFF",
        "#2CE451"
      ],
      "tooltip": {
        "trigger": "axis",
        "backgroundColor": "rgba(0, 0, 0, 0.8)",
        "borderColor": "rgba(255, 255, 255, 0.5)",
        "textStyle": {
          "color": "rgba(255, 255, 255, 1)"
        },
        "formatter": (value) => handleTooltipFormatter(value)
      },
       "dataZoom": [
          // 支持鼠标滚轮/触控缩放、拖拽平移
          {
            "type": "inside",
            "xAxisIndex": 0,
            "filterMode": "none",
            "zoomOnMouseWheel": true,
            "moveOnMouseMove": true,
            "moveOnMouseWheel": true,
            "preventDefaultMouseMove": true
          },
          // 底部滑块：两端可拖拽伸缩
          {
            "type": "slider",
            "xAxisIndex": 0,
            "filterMode": "none",
            "backgroundColor": getCssVariable('--business-show-bg30'),
            "borderColor": getCssVariable('--business-show-bg30'),
            "borderRadius": 0,
            "showDetail": false,
            "showDataShadow": false,
            "zoomLock": false,
            "realtime": true,
            "height": 20,
            "start": 20,
            "end": 100,
            "brushSelect": false,
            "bottom": "0%",
            "brushStyle": {
              "color": "#000"
            },
            "fillerColor": getCssVariable('--business-btn-default'),
            "handleSize": 12,
            "handleStyle": {
              "color": "#2D955A",
              "borderColor": "#D1D5D9",
              "borderCap": "round"
            }
          }
        ],
      "grid": {
        "containLabel": true,
        "top": "12%",
        "left": "3%",
        "right": "3%",
        "bottom": "4%"
      },
      "xAxis": {
        "axisLabel": {
          "color": "var(--skin-font-color-80)",
          "fontSize": 'var(--business-text-size-14)'
        },
        "axisLine": {
          "lineStyle": {
            "type": "solid",
            "color": "var(--skin-font-color-40)"
          }
        },
        "axisLine": {
          "lineStyle": {
            "type": "solid",
            "color": "var(--skin-font-color-40)"
          }
        },
        "axisTick": {
          "show": true,
          "lineStyle": {
            "color": "var(--skin-font-color-40)"
          }
        },
        "nameTextStyle": {
          "color": "var(--skin-font-color-60)",
          "fontSize": 'var(--business-text-size-14)'
        },
        "data": []
      },
      "legend": {
        "show": true,
        "icon": "roundRect",
        "itemWidth": 12,
        "itemHeight": 12,
        "textStyle": {
          "color": "var(--skin-font-color-80)",
          "fontSize": 'var(--business-text-size-14)',
          "height": 10,
          "rich": {
            "a": {
              "verticalAlign": "center"
            }
          }
        },
        "data": []
      },
      "yAxis": {
        "name": "监测值",
        "axisLabel": {
          "color": "var(--skin-font-color-80)",
          "fontSize": 'var(--business-text-size-14)'
        },
        min: function (value) {
            let range = value.max - value.min;
            if (range === 0 || value.min < range * 0.2) {
              return 0
            }
            return Number((value.min - range * 0.2).toFixed(1));
          },
        "axisLine": {
          "lineStyle": {
            "type": "solid",
            "color": "var(--skin-font-color-40)"
          }
        },
        "nameTextStyle": {
          "color": "var(--skin-font-color-60)",
          "align": "right",
          "padding": [0, -30, 0, 0],
          "fontSize": 'var(--business-text-size-14)'
        },
        "splitLine": {
          "lineStyle": {
            "type": "dashed",
            "color": "var(--skin-font-color-20)"
          }
        }
      },
      "series": []
    };
    
  
};
const handleSectionSelect = (data) => {
state.params.section = data ? data.split(',') : [];
state.params.pointcode = data || "";
// getLineData();

// apiRegistry.getLineData.request();
  const seq = ++state.fallbackSeq;
  const priority =['W21011', 'W21003', 'W01019', 'W01009'];

  const run = async () => {
    try {
      const needFallback = state.params.monitor === 'W21011';
      const codesToTry = needFallback ? priority : [state.params.monitor];

      for (const code of codesToTry) {
        if (seq !== state.fallbackSeq) return;

        if (needFallback) {
          const opt = state.options?.monitor?.find((m) => m?.value === code);
          if (!opt) continue;
          state.params.monitor = opt.value;
          state.yAxisUnit = opt.unit || '';
        }

        await apiRegistry.getLineData.request();

        const hasData =
          Array.isArray(state.seriesData) &&
          state.seriesData.some((s) =>
            Array.isArray(s?.data) &&
            s.data.some((pt) => {
              const raw = pt?.value?.[1];
              const v = Number(raw);
              return raw !== null && raw !== undefined && !Number.isNaN(v) && v >= 0;
            })
          );

        if (hasData || !needFallback) break;
      }

      if (seq !== state.fallbackSeq) return;
      changeStandard(state.isBz);
    } catch (error) {
      console.error('某个请求失败了:', error);
    }
  };

  run();
};
const getTimeValue = (date,type) => {
if (type === '2') {
  // 小时数据格式不全，格式化错误，需要补上分秒
  date = `${date}:00:00`
}

// 时间格式
const typeObj = [
  {
    timeType: 'day',
    formatType: 'yyyy-MM-dd'
  },
  {
    timeType: 'hour',
    formatType: 'yyyy-MM-dd HH'
  },
  {
    timeType: 'month',
    formatType: 'yyyy-MM'
  }
]

// 结束时间
const endTime = dateFormat(date, typeObj[Number(type) - 1].formatType);
// 开始时间
const startTime = dateFormat(getPrevTime(date, typeObj[Number(type) - 1].timeType), typeObj[Number(type) - 1].formatType);

// 赋值参数
state.params.time.range = [startTime || '', endTime || ''];
state.params.time.start = startTime || '';
state.params.time.end = endTime || '';

};
const handleCharFormat = (optionString) => {
/**
  * @description: 替换一段字符串中所有污染物为正确格式
  * @param optionString 要替换的字符串
  * @return 替换完的字符串
  */
if (!optionString) return '';
// 从公共方法里拿到下标特殊字符（后续需要的再补充）
const zreoSub = convertCharacter('下标')[0].split(' ')[0] || '0';
const oneSub = convertCharacter('下标')[0].split(' ')[1] || '1';
const twoSub = convertCharacter('下标')[0].split(' ')[2] || '2';
const threeSub = convertCharacter('下标')[0].split(' ')[3] || '3';
const fiveSub = convertCharacter('下标')[0].split(' ')[5] || '5';
// 污染物对应关系（缺少的继续补充）
const POLLUTION_CHARTS_ALL = [
  {
    name: ['O3', 'o3'],
    html: 'O' + threeSub,
  },
  {
    name: ['PM10', 'pm10'],
    html: 'PM' + oneSub + zreoSub,
  },
  {
    name: ['PM25', 'PM2_5', 'PM2.5', 'pm25', 'pm2_5', 'pm25'],
    html: 'PM' + twoSub + '.' + fiveSub,
  },
  {
    name: ['SO2', 'so2'],
    html: 'SO' + twoSub,
  },
  {
    name: ['CO2', 'co2'],
    html: 'CO' + twoSub,
  },
  {
    name: ['CODMN', 'codmn'],
    html: 'CODmn',
  },
  {
    name: ['VOCS', 'vocs'],
    html: 'VOCs',
  },
  {
    name: ['NO', 'no'],
    html: 'NO',
  },
  {
    name: ['NO2', 'no2'],
    html: 'NO' + twoSub,
  },
  {
    name: ['NH3', 'nh3'],
    html: 'NH' + threeSub,
  },
  {
    name: ['NOX', 'nox'],
    html: 'NOx',
  },
  {
    name: ['PH', 'ph'],
    html: 'pH',
  },
];
let curString = optionString;
POLLUTION_CHARTS_ALL.forEach((item) => {
  item.name.forEach((name) => {
    curString = curString.replace(name, item.html);
  });
});
return curString;
};
const checkTimeRange = (dateType,timeRange,dataLength) => {
const parseDate = (dateStr) => {
  let date = new Date(dateStr);
  if (isNaN(date)) {
    throw new Error(`Invalid date format: ${dateStr}`);
  }
  return date;
}

const diffInHours = (d1, d2) => {
  return Math.abs((d2 - d1) / (1000 * 60 * 60));
}

const diffInDays = (d1, d2) => {
  return Math.abs((d2 - d1) / (1000 * 60 * 60 * 24));
}

const diffInMonths = (d1, d2) => {
  const y1 = d1.getFullYear();
  const m1 = d1.getMonth();
  const y2 = d2.getFullYear();
  const m2 = d2.getMonth();
  return Math.abs((y2 * 12 + m2) - (y1 * 12 + m1));
}

const [startDateStr, endDateStr] = timeRange;
let startDate, endDate;

switch (dateType) {
  case '1':
    // 自动天，时间差大于两周，数据大于14条
    startDate = parseDate(startDateStr);
    endDate = parseDate(endDateStr);
    return {
      flag: diffInDays(startDate, endDate) > 14 && dataLength > 14,
      num: 7
    };
  case '2':
    // 自动小时，时间差大于两天，数据大于48条
    startDate = parseDate(`${startDateStr}:00:00`);
    endDate = parseDate(`${endDateStr}:00:00`);
    return {
      flag: diffInHours(startDate, endDate) > 48 && dataLength > 48,
      num: 24
    };
  case '3':
    // 手工，时间差大于两年，数据大于24条
    startDate = parseDate(startDateStr);
    endDate = new Date(endDateStr.slice(0, 4), endDateStr.slice(5, 7) - 1 + (endDateStr.slice(7) ? 1 : 0), 0);
    endDate.setDate(endDate.getDate() - endDate.getDate() % endDate.getDate());
    return {
      flag: diffInMonths(startDate, endDate) > 23 && dataLength > 24,
      num: 12
    };
  default:
    return {
      flag: false,
      num: 0
    };
}
};
const handleChartMouseMove = () => {

// let myChart = state.myChart;
// const option = state.lineChartOption;
// console.log(myChart)

// // 时间数据（12个小时，转换为数值便于计算）
// const times = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00',
//   '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
// // 时间对应的小时数值，用于计算间隔
// const timeValues = times.map(t => parseInt(t.split(':')[0]));

// // 时间间隔设置（小时）
// const upstreamToCurrentInterval = 4;  // 上游到当前断面的时间间隔
// const currentToDownstreamInterval = 8; // 当前到下游断面的时间间隔

// // 处理鼠标悬停事件，显示双向时间间隔竖线
// myChart.on('mouseover', function (params) {
//   // 清除之前的标记线
//   option.series.forEach((series) => {
//     series.markLine = { data: [] };
//   });

//   // 获取当前悬停的时间点和系列
//   const currentIndex = params.dataIndex;
//   const currentHour = timeValues[currentIndex];
//   const seriesName = params.seriesName;

//   // 根据不同系列计算并显示双向时间关联竖线
//   if (seriesName === '上游断面') {
//     // 上游断面：显示自身位置的竖线
//     addVerticalLine(0, currentIndex, '#5470c6');

//     // 正向推算：上游→当前(+4h)
//     const currentTargetHour = (currentHour + upstreamToCurrentInterval) % 24;
//     const currentTargetIndex = getTimeIndex(currentTargetHour);
//     if (currentTargetIndex !== -1) {
//       addVerticalLine(1, currentTargetIndex, '#91cc75', '正向');

//       // 正向推算：当前→下游(+8h)
//       const downstreamTargetHour = (currentTargetHour + currentToDownstreamInterval) % 24;
//       const downstreamTargetIndex = getTimeIndex(downstreamTargetHour);
//       if (downstreamTargetIndex !== -1) {
//         addVerticalLine(2, downstreamTargetIndex, '#fac858', '正向');
//       }
//     }
//   } else if (seriesName === '当前断面') {
//     // 当前断面：显示自身位置的竖线
//     addVerticalLine(1, currentIndex, '#91cc75');

//     // 正向推算：当前→下游(+8h)
//     const downstreamTargetHour = (currentHour + currentToDownstreamInterval) % 24;
//     const downstreamTargetIndex = getTimeIndex(downstreamTargetHour);
//     if (downstreamTargetIndex !== -1) {
//       addVerticalLine(2, downstreamTargetIndex, '#fac858', '正向');
//     }

//     // 反向推算：当前→上游(-4h)
//     const upstreamTargetHour = (currentHour - upstreamToCurrentInterval + 24) % 24;
//     const upstreamTargetIndex = getTimeIndex(upstreamTargetHour);
//     if (upstreamTargetIndex !== -1) {
//       addVerticalLine(0, upstreamTargetIndex, '#5470c6', '反向');
//     }
//   } else if (seriesName === '下游断面') {
//     // 下游断面：显示自身位置的竖线
//     addVerticalLine(2, currentIndex, '#fac858');

//     // 反向推算：下游→当前(-8h)
//     const currentTargetHour = (currentHour - currentToDownstreamInterval + 24) % 24;
//     const currentTargetIndex = getTimeIndex(currentTargetHour);
//     if (currentTargetIndex !== -1) {
//       addVerticalLine(1, currentTargetIndex, '#91cc75', '反向');

//       // 反向推算：当前→上游(-4h)
//       const upstreamTargetHour = (currentTargetHour - upstreamToCurrentInterval + 24) % 24;
//       const upstreamTargetIndex = getTimeIndex(upstreamTargetHour);
//       if (upstreamTargetIndex !== -1) {
//         addVerticalLine(0, upstreamTargetIndex, '#5470c6', '反向');
//       }
//     }
//   }

//   // 重新设置配置以更新标记线
//   myChart.setOption(option);
// });

// // 鼠标离开时清除所有标记线
// myChart.on('mouseout', function () {
//   option.series.forEach((series) => {
//     series.markLine = { data: [] };
//   });
//   myChart.setOption(option);
// });

// // 添加垂直标记线的函数（支持正向/反向标识）
// function addVerticalLine(seriesIndex, dataIndex, color, direction) {
//   if (!option.series[seriesIndex].markLine) {
//     option.series[seriesIndex].markLine = { data: [] };
//   }

//   let labelText = times[dataIndex];
//   if (direction) {
//     labelText += `(${direction})`;
//   }

//   option.series[seriesIndex].markLine.data.push({
//     name: '时间标记',
//     xAxis: dataIndex,
//     lineStyle: {
//       color: color,
//       type: direction === '反向' ? 'dotted' : 'dashed', // 反向用点线，正向用虚线区分
//       width: 2
//     },
//     label: {
//       show: true,
//       formatter: labelText,
//       color: color
//     }
//   });
// }



const handleChartMouseMove = () => {
  let myChart = state.myChart;
  // 1. 移除对 state.lineChartOption 的直接引用
  
  const times = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00',
    '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
  const timeValues = times.map(t => parseInt(t.split(':')[0]));

  // 2. 补充缺失函数
  const getTimeIndex = (hour) => timeValues.indexOf(hour);

  const upstreamToCurrentInterval = 4;
  const currentToDownstreamInterval = 8;

  myChart.on('mouseover', function (params) {
    // 3. 创建临时 series 配置，不修改原 state
    // 这里偷懒写死3个series，如果动态可改为 new Array(state.lineChartOption.series.length)...
    const seriesUpdate = [{}, {}, {}].map(() => ({ markLine: { data: [] } }));

    const currentIndex = params.dataIndex;
    const currentHour = timeValues[currentIndex];
    const seriesName = params.seriesName;

    // 内部帮助函数，操作 seriesUpdate
    const addLine = (idx, dataIdx, color, dir) => {
      if (!seriesUpdate[idx]) return;
      seriesUpdate[idx].markLine.data.push({
        xAxis: dataIdx,
        lineStyle: { color, type: dir === '反向' ? 'dotted' : 'dashed', width: 2 },
        label: { show: true, formatter: times[dataIdx] + (dir ? `(${dir})` : ''), color }
      });
    };

    if (seriesName === '上游断面') {
      addLine(0, currentIndex, '#5470c6');
      const nextH = (currentHour + upstreamToCurrentInterval) % 24;
      const nextIdx = getTimeIndex(nextH);
      if (nextIdx !== -1) {
        addLine(1, nextIdx, '#91cc75', '正向');
        const nextNextH = (nextH + currentToDownstreamInterval) % 24;
        const nextNextIdx = getTimeIndex(nextNextH);
        if (nextNextIdx !== -1) addLine(2, nextNextIdx, '#fac858', '正向');
      }
    } else if (seriesName === '当前断面') {
      addLine(1, currentIndex, '#91cc75');
      const nextH = (currentHour + currentToDownstreamInterval) % 24;
      const nextIdx = getTimeIndex(nextH);
      if (nextIdx !== -1) addLine(2, nextIdx, '#fac858', '正向');
      
      const prevH = (currentHour - upstreamToCurrentInterval + 24) % 24;
      const prevIdx = getTimeIndex(prevH);
      if (prevIdx !== -1) addLine(0, prevIdx, '#5470c6', '反向');
    } else if (seriesName === '下游断面') {
      addLine(2, currentIndex, '#fac858');
      const prevH = (currentHour - currentToDownstreamInterval + 24) % 24;
      const prevIdx = getTimeIndex(prevH);
      if (prevIdx !== -1) {
        addLine(1, prevIdx, '#91cc75', '反向');
        const prevPrevH = (prevH - upstreamToCurrentInterval + 24) % 24;
        const prevPrevIdx = getTimeIndex(prevPrevH);
        if (prevPrevIdx !== -1) addLine(0, prevPrevIdx, '#5470c6', '反向');
      }
    }

    // 4. 增量更新
    myChart.setOption({ series: seriesUpdate });
  });

  myChart.on('mouseout', function () {
    // 5. 清除样式
    myChart.setOption({
      series: [{}, {}, {}].map(() => ({ markLine: { data: [] } }))
    });
  });
};
};
const changeChart = (chart) => {
state.myChart = chart
};
const setStyle = () => {
// const timer = setInterval(() => {
//   // 执行你的操作..
//   const selectTags = document.querySelector("#t-select-8b99\\.2c9e49e2a > div.el-select.el-select--small > div.select-trigger > div.el-select__tags")
//   // 判断是否存在
//   if (selectTags) {
//     selectTags.style.maxWidth = 'auto !important'
//     // 清除定时器
//     clearInterval(timer)
//     console.log('设置selectTags完成')
//   }
// }, 100) // 每100ms检查一次


// const timer2 = setInterval(() => {
//   // 执行你的操作..
//   const selectWrapper = document.querySelector("#t-select-8b99\\.2c9e49e2a > div.el-select.el-select--small")

//   const selectInput = document.querySelector("#t-select-8b99\\.2c9e49e2a > div.el-select.el-select--small > div.select-trigger > div.el-input.el-input--small.el-input--suffix > input")
//   // 判断是否存在
//   if (selectInput && selectWrapper) {
//     selectWrapper.style.width = '100% !important'
//     selectInput.style.width = '100% !important'
//     // 清除定时器
//     clearInterval(timer2)
//     console.log('设置selectWrapper和selectInput完成')
//   }
// }, 100) // 每100ms检查一次



};
const ongetChartInstance1763191439325 = (chart) => {
// 设置变量值
state.myChart = _.cloneDeep(chart);
// 执行自定义方法
changeChart(chart);
// 执行自定义方法
handleChartMouseMove();
};
const ondateChange1735539087143_0_0 = (data) => {
// 执行自定义方法
handleTimeSelect(data);
};
const ondateChange1734160159774 = (data) => {
// 执行自定义方法
handleTimeSelect(data);
};
const ondateChange1735539103868_0_0 = (data) => {
// 执行自定义方法
handleTimeSelect(data);
};
const onchange1767840981113_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.upstreamPointCode = selectValueArr;
// 执行自定义方法
handleSectionSelect(value);
};
const onchange1734159936716 = (value,selectValueArr,selectValueItem) => {
// 执行自定义方法
handleMonitorSelect(selectValueItem);
};
const onchange1734160214280 = (value) => {
// 设置变量值
state.isBz = value;
// 执行自定义方法
changeStandard(value);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getLineData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POLLUTE_CODE":"state.params.monitor","END_MONITORTIME":"state.params.time.end","START_MONITORTIME":"state.params.time.start","POINT_CODE":"state.params.pointcode","interfaceId":"state.params.interfaceId"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POLLUTE_CODE":state.params.monitor,"END_MONITORTIME":state.params.time.end,"START_MONITORTIME":state.params.time.start,"POINT_CODE":state.params.pointcode,"interfaceId":state.params.interfaceId},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POLLUTE_CODE":state.params.monitor,"END_MONITORTIME":state.params.time.end,"START_MONITORTIME":state.params.time.start,"POINT_CODE":state.params.pointcode,"interfaceId":state.params.interfaceId});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLineData'] = res.data;
                
     state.seriesData = [];
state.standardSeriesData = [];
state.lineChartOption.yAxis.name = '监测值';
state.lineChartOption.xAxis.data = [];
handleChartAxisLabel();
state.lineChartOption.legend.data = [];
if (res.status === 200 && res?.data?.data?.length) {
  const { data } = res.data;
  // x轴数据
  const xAxisData = [];
  // 图例数据
  const legendData = [];
  // 一到五类标准值
  const standardLineMap = {
    STANDARD_1: [],
    STANDARD_2: [],
    STANDARD_3: [],
    STANDARD_4: [],
    STANDARD_5: [],
  }
  // 系列数据（系列数据动态处理主要是以防后期断面下拉变多又再处理一次，现在是固定的两个）；
  let seriesData = [];
  data.forEach((item) => {
    Object.keys(standardLineMap).forEach(i => {
      standardLineMap[i].push({
        value: item[i],
        hiddenInTooltip: true,
        wholeTime: item.MONITORTIME,
      })
    })
    xAxisData.push({ label: handleNoVal(item.MONITORTIME) });
    legendData.push({
      name: item.POINT_NAME,
      icon: 'roundRect',
    });

    // 组合数据，筛选出同一类的数据
    if (!seriesData.find((x) => x.POINT_CODE === item.POINT_CODE)) {
      seriesData.push({
        POINT_CODE: item.POINT_CODE,
        name: item.POINT_NAME,
        data: data.filter((x) => x.POINT_CODE === item.POINT_CODE).map((dataItem) => ({
          // 使用数组的格式，是为了跟x轴坐标的值对应上；x轴和数组的第一项使用的值需要是唯一的
          value: [dataItem.MONITORTIME, dataItem.POLLUTEVALUE],
          // 完整时间、单位在tooltip中的formatter中使用
          unit: state.yAxisUnit,
          tooltipXAxisLabel: dataItem.MONITORTIME,
        })),
      });
    }
  });
  // 处理系列样式（主要处理颜色）
  seriesData = seriesData.map((seriesItem) => ({
    ...seriesItem,
    ...state.normalLineCommonSeriesOption,
    itemStyle: {
      // color: colors[index],
    },
  }));

  // 污染物
  if (state.params.monitor !== 'W01001') {
    // 添加标准线线数据
    // state.standardSeriesData.push(
    //   {
    //     ...handleStandardSeries('Ⅰ类标准值', '#8FCDFF'),
    //     data: filterRepeatData(standardLineMap.STANDARD_1, 'wholeTime'),
    //   },
    //   {
    //     ...handleStandardSeries('Ⅱ类标准值', '#0280F6'),
    //     data: filterRepeatData(standardLineMap.STANDARD_2, 'wholeTime'),
    //   },
    //   {
    //     ...handleStandardSeries('Ⅲ类标准值', '#00DA2A'),
    //     data: filterRepeatData(standardLineMap.STANDARD_3, 'wholeTime'),
    //   },
    //   {
    //     ...handleStandardSeries('Ⅳ类标准值', '#F6C200'),
    //     data: filterRepeatData(standardLineMap.STANDARD_4, 'wholeTime'),
    //   },
    //   {
    //     ...handleStandardSeries('Ⅴ类标准值', '#FC926A'),
    //     data: filterRepeatData(standardLineMap.STANDARD_5, 'wholeTime'),
    //   },
    // );
// 标准线（与“基本信息弹窗”保持同一套筛选规则：按数据区间只显示相关标准线）
      const standardLinesMeta = [
        { key: 'STANDARD_1', name: 'Ⅰ类标准值', color: '#8FCDFF' },
        { key: 'STANDARD_2', name: 'Ⅱ类标准值', color: '#0280F6' },
        { key: 'STANDARD_3', name: 'Ⅲ类标准值', color: '#00DA2A' },
        { key: 'STANDARD_4', name: 'Ⅳ类标准值', color: '#F6C200' },
        { key: 'STANDARD_5', name: 'Ⅴ类标准值', color: '#FC926A' },
      ];

      // 1) 采集有效监测值（过滤 -1、空、负数）
      const dataValues = [];
      seriesData.forEach((s) => {
        (s.data || []).forEach((pt) => {
          const raw = pt?.value?.[1];
          const v = Number(raw);
          if (!isNaN(v) && v >= 0) dataValues.push(v);
        });
      });

      // 2) 计算标准线的数值（从接口 STANDARD_1~5 中取最小的有效正值）
      const standardValueRanges = {};
      standardLinesMeta.forEach((item) => {
        const values = (standardLineMap[item.key] || [])
          .map((d) => {
            const v = Number(d.value);
            return isNaN(v) ? null : v;
          })
          .filter((v) => v !== null && v > 0);

        if (values.length > 0) {
          standardValueRanges[item.key] = Math.min(...values);
        }
      });

      // 3) 标准线按数值从小到大排序（用于区间取边界）
      const sortedStandards = standardLinesMeta
        .map((item) => ({ ...item, value: standardValueRanges[item.key] }))
        .filter((s) => s.value !== undefined && s.value > 0)
        .sort((a, b) => a.value - b.value);

      // 4) 区间取边界：用 dataMin/dataMax 在标准线数值序列上取边界，并显示最小连续区间
      let visibleStandards = [];
      if (sortedStandards.length > 0) {
        if (dataValues.length > 0) {
          const dataMin = Math.min(...dataValues);
          const dataMax = Math.max(...dataValues);

          const idxSet = new Set();
          const points = [dataMin, dataMax];

          for (const x of points) {
            let i = 0;
            while (i < sortedStandards.length && sortedStandards[i].value < x) i++;

            if (i >= sortedStandards.length) {
              idxSet.add(sortedStandards.length - 1);
              if (sortedStandards.length - 2 >= 0) idxSet.add(sortedStandards.length - 2);
            } else {
              idxSet.add(i);
              if (i - 1 >= 0) idxSet.add(i - 1);
            }
          }

          const indices = Array.from(idxSet).sort((a, b) => a - b);
          let start = indices[0];
          let end = indices[indices.length - 1];
          visibleStandards = sortedStandards.slice(start, end + 1);
        } else {
          // 无有效监测值：只显示最严格的一条
          visibleStandards = [sortedStandards[0]];
        }
      }

      // 5) 生成标准线 series（保持Ⅰ→Ⅴ的展示顺序）
      const visibleKeySet = new Set(visibleStandards.map((x) => x.key));
      standardLinesMeta.forEach((item) => {
        if (!visibleKeySet.has(item.key)) return;
        state.standardSeriesData.push({
          ...handleStandardSeries(item.name, item.color),
          data: filterRepeatData(standardLineMap[item.key], 'wholeTime'),
        });
      });

  }

  // ph
  if (state.params.monitor === 'W01001') {
    state.standardSeriesData.push({
      "name": "小时值",
      "data": [],
      "type": "line",
      "markArea": {
        "data": [
          [
            {
              "name": "",
              "yAxis": Number(data[0].STANDARDVALUEMIN || '6')
            },
            {
              "name": "",
              "yAxis": Number(data[0].STANDARDVALUEMAX || '9')
            }
          ]
        ],
        "silent": true,
        "itemStyle": {
          "color": 'rgba(221, 194, 191, 0.2)'
        }
      }
    });
  }

  state.seriesData = seriesData
  state.lineChartOption.yAxis.name = `监测值${state.yAxisUnit || ''}`;
  state.lineChartOption.xAxis.data = filterRepeatData(xAxisData, 'label').map((item) => item.label);
  handleChartAxisLabel();
  state.lineChartOption.legend.data = filterRepeatData(legendData, 'name');
}
changeStandard(state.isBz)

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.seriesData = [];
state.standardSeriesData = [];
      reject(error);
    });
  });
},
              },
// 接口函数
 getMonitorDataHandmade: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TREE_CODE":"WATER_POLLUTE","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TREE_CODE":"WATER_POLLUTE","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TREE_CODE":"WATER_POLLUTE","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMonitorDataHandmade'] = res.data;
                
     state.options.monitor = [];
state.params.monitor = '';
state.yAxisUnit = '';
const color = {
  "W01009": "#0094FF",
  "W01010": "#2CCAFF",
  "W01001": "#D56900",
  "W01014": "#00E400",
}
if (res.data.head.statusCode === '200' && res.data?.data?.length) {
  state.options.monitor = res.data.data.map(i => ({
    "value": i?.DICTIONARYCODE,
    "paramsValue": i?.DICTIONARYCODE,
    "label": i?.DICTIONARYNAME,
    "unit": i?.DICTIONARYNAME === 'PH' ? '' : (i?.EXT1 || 'mg/L'),
    "color": color[i?.DICTIONARYCODE] || color['W01009']
  }));
  // state.params.monitor = state.options.monitor[0].value || "";
  // state.yAxisUnit = state.options.monitor[0].unit || "";

      const defaultCode = 'W01009';
    const defaultItem = state.options.monitor.find((m) => m?.value === defaultCode);
    const selected = defaultItem || state.options.monitor[0];
    state.params.monitor = selected?.value || "";
    state.yAxisUnit = selected?.unit || "";
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.options.monitor = [];
state.params.monitor = '';
state.yAxisUnit = '';

      reject(error);
    });
  });
},
              },
// 接口函数
 getSectionData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"MONITORTYPE":"state.params.monitorType","POINT_CODE":"state.params.pointcode","interfaceId":"65a6cb41700af887195425fcde6469aa"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTYPE":state.params.monitorType,"POINT_CODE":state.params.pointcode,"interfaceId":"65a6cb41700af887195425fcde6469aa"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"MONITORTYPE":state.params.monitorType,"POINT_CODE":state.params.pointcode,"interfaceId":"65a6cb41700af887195425fcde6469aa"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getSectionData'] = res.data;
                
     state.params.section = [];
if (res.data.head.statusCode === '200' && res.data?.data?.length) {
  // 处理下拉选项列表
  state.options.section = res.data.data.map(i => ({
    "value": i.POINT_CODE,
    "label": i.POINT_NAME,
    "disabled": false
  }));

  state.params.section.push(state.params.pointcode);

  // 获取指定断面代码，设置默认值
  const defaultName = ["古田黄田", "十里庵", "水东大桥", "浪石", "邵武晒口桥"];
  const defaultArr = res.data.data.filter((item) => defaultName.includes(item.POINT_NAME));
  state.upstreamPointCode = defaultArr.map(i => i.POINT_CODE);

  // 核心修改：添加第一个选项到选中数组中（去重）
  if (state.options.section.length > 0) {
    const firstSectionValue = state.options.section[0].value;
    // 先判断是否已存在，避免重复添加
    if (!state.upstreamPointCode.includes(firstSectionValue)) {
      state.upstreamPointCode.push(firstSectionValue);
    }
  }

  // 更新参数值
  state.params.pointcode = state.upstreamPointCode.join(',');
  state.params.section = state.upstreamPointCode;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // state.options.section = [];
state.params.section = [];

      reject(error);
    });
  });
},
              },
// 接口函数
 getMonitorDataAuto: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"interfaceId":"acc8f8c17118848d1f644cef1c725851"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"acc8f8c17118848d1f644cef1c725851"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"interfaceId":"acc8f8c17118848d1f644cef1c725851"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMonitorDataAuto'] = res.data;
                
     state.options.monitor = [];
state.params.monitor = '';
state.yAxisUnit = '';
const color = {
  "W01009": "#0094FF",
  "W01010": "#2CCAFF",
  "W01001": "#D56900",
  "W01014": "#00E400",
}
if (res.data.head.statusCode === '200' && res.data?.data?.length) {
  state.options.monitor = res.data.data.map(i => ({
    "value": i.PCODE,
    "paramsValue": i.PCODE,
    "label": handleCharFormat(i.PNAME),
    "unit": i.PUNIT,
    "color": color[i.PCODE]
  }));
  // state.params.monitor = state.options.monitor[0].value || "";
  // state.yAxisUnit = state.options.monitor[0].unit || "";

      const defaultCode = 'W01009';
    const defaultItem = state.options.monitor.find((m) => m?.value === defaultCode);
    const selected = defaultItem || state.options.monitor[0];
    state.params.monitor = selected?.value || "";
    state.yAxisUnit = selected?.unit || "";
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.options.monitor = [];
state.params.monitor = '';
state.yAxisUnit = '';

      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-Ycfx', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-Ycfx', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setStyle();
// 执行自定义方法
initPage();
});
// 执行自定义方法
setOptions();
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tColx0x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0x0.default, componentState.tColx0x0x0?.[state.screenSize]));

 const tChartDesignx0x0x0x0ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x0x0x0.default, componentState.tChartDesignx0x0x0x0?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tColx0x1x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x0.default, componentState.tColx0x1x0?.[state.screenSize]));

 const tTextx0x1x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x0x0.default, componentState.tTextx0x1x0x0?.[state.screenSize]));

 const tDatePickerx0x1x0x1ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x1x0x1.default, componentState.tDatePickerx0x1x0x1?.[state.screenSize]));

 const tDatePickerx0x1x0x2ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x1x0x2.default, componentState.tDatePickerx0x1x0x2?.[state.screenSize]));

 const tDatePickerx0x1x0x3ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x1x0x3.default, componentState.tDatePickerx0x1x0x3?.[state.screenSize]));

 const tColx0x1x1ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1.default, componentState.tColx0x1x1?.[state.screenSize]));

 const tTextx0x1x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x1x0.default, componentState.tTextx0x1x1x0?.[state.screenSize]));

 const tSelectx0x1x1x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x1x1x1.default, componentState.tSelectx0x1x1x1?.[state.screenSize]));

 const tColx0x1x2ComputedData = computed(() => _.merge({}, componentState.tColx0x1x2.default, componentState.tColx0x1x2?.[state.screenSize]));

 const tTextx0x1x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x2x0.default, componentState.tTextx0x1x2x0?.[state.screenSize]));

 const tSelectx0x1x2x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x1x2x1.default, componentState.tSelectx0x1x2x1?.[state.screenSize]));

 const tRowx0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x2.default, componentState.tRowx0x2?.[state.screenSize]));

 const tColx0x2x0ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0.default, componentState.tColx0x2x0?.[state.screenSize]));

 const tTextx0x2x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x2x0x0.default, componentState.tTextx0x2x0x0?.[state.screenSize]));

 const tSwitchx0x2x0x1ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x2x0x1.default, componentState.tSwitchx0x2x0x1?.[state.screenSize]));

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
tChartDesignx0x0x0x0ComputedData,
tRowx0x1ComputedData,
tColx0x1x0ComputedData,
tTextx0x1x0x0ComputedData,
tDatePickerx0x1x0x1ComputedData,
tDatePickerx0x1x0x2ComputedData,
tDatePickerx0x1x0x3ComputedData,
tColx0x1x1ComputedData,
tTextx0x1x1x0ComputedData,
tSelectx0x1x1x1ComputedData,
tColx0x1x2ComputedData,
tTextx0x1x2x0ComputedData,
tSelectx0x1x2x1ComputedData,
tRowx0x2ComputedData,
tColx0x2x0ComputedData,
tTextx0x2x0x0ComputedData,
tSwitchx0x2x0x1ComputedData,
ongetChartInstance1763191439325,
ondateChange1735539087143_0_0,
ondateChange1734160159774,
ondateChange1735539103868_0_0,
onchange1767840981113_0_0,
onchange1734159936716,
onchange1734160214280,
};
},
}
</script>

<style scoped>
.t-l-c-Ycfx {
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
background-color: rgba(26, 27, 31, 0);
width: 844px;
height: 580px;
}
.t-l-c-Ycfx .Ycfx-t-row-0-0 {
position: absolute !important;
top: 104px;
left: 4px;
width: 100%;
height: 80%;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-Ycfx .Ycfx-t-col-0-0-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-Ycfx .Ycfx-t-chart-design-0-0-0-0 {
position: unset;
top: 108px;
left: 0px;
width: 100%;
height: 100%;
pointer-events: auto;
}

.t-l-c-Ycfx .Ycfx-t-row-0-1 {
position: absolute !important;
top: 9px;
left: 0px;
width: 100%;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: space-between;
align-items: center;
gap: auto;
}

.t-l-c-Ycfx .Ycfx-t-col-0-1-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
}

.t-l-c-Ycfx .Ycfx-t-text-0-1-0-0 {
position: unset;
top: 18px;
left: 16px;
width: 80px;
height: 14px;
pointer-events: auto;
}

.t-l-c-Ycfx .Ycfx-t-date-picker-0-1-0-1 {
position: unset;
top: 9px;
left: 80px;
width: auto;
height: 32px;
pointer-events: auto;
}

.t-l-c-Ycfx .Ycfx-t-date-picker-0-1-0-2 {
position: unset;
top: 9px;
left: 80px;
width: auto;
height: 32px;
pointer-events: auto;
}

.t-l-c-Ycfx .Ycfx-t-date-picker-0-1-0-3 {
position: unset;
top: 9px;
left: 80px;
width: auto;
height: 32px;
pointer-events: auto;
}

.t-l-c-Ycfx .Ycfx-t-col-0-1-1 {
position: relative;
top: null;
left: null;
width: 100px;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
}

.t-l-c-Ycfx .Ycfx-t-text-0-1-1-0 {
position: unset;
top: 69px;
left: 127px;
width: 80px;
height: 14px;
pointer-events: auto;
}

.t-l-c-Ycfx .Ycfx-t-select-0-1-1-1 {
position: unset;
top: 70px;
left: 212px;
width: auto;
height: 33px;
pointer-events: auto;
}

.t-l-c-Ycfx .Ycfx-t-col-0-1-2 {
position: relative;
top: null;
left: null;
width: 100px;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
gap: auto;
}

.t-l-c-Ycfx .Ycfx-t-text-0-1-2-0 {
position: unset;
top: 18px;
left: 641px;
width: 85px;
height: 14px;
pointer-events: auto;
}

.t-l-c-Ycfx .Ycfx-t-select-0-1-2-1 {
position: unset;
top: 9px;
left: 705px;
width: auto;
height: 33px;
pointer-events: auto;
}

.t-l-c-Ycfx .Ycfx-t-row-0-2 {
position: absolute !important;
top: 60px;
left: 0px;
width: 100%;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
gap: auto;
}

.t-l-c-Ycfx .Ycfx-t-col-0-2-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
}

.t-l-c-Ycfx .Ycfx-t-text-0-2-0-0 {
position: unset;
top: 65px;
left: 726px;
width: auto;
height: 22px;
pointer-events: auto;
}

.t-l-c-Ycfx .Ycfx-t-switch-0-2-0-1 {
position: unset;
top: 65px;
left: 791px;
width: 32px;
height: 22px;
pointer-events: auto;
}
</style>
