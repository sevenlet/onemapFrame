<template>
  <div id="t-l-c-DwfxSkdwfx" class="t-l-c-DwfxSkdwfx" ><t-chart-design v-if="state.chartShow === true" id="t-chart-design-257d.c589f49de" class="DwfxSkdwfx-t-chart-design-0-0"  :empty-img="replaceCssVariables(filterData(state.noDataImg, componentPropBindingMap?.['t-chart-design-257d.c589f49de']['emptyImg'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tChartDesignx0x0ComputedData.cStyle" :options="replaceCssVariables(filterData(state.lineChartOption, componentPropBindingMap?.['t-chart-design-257d.c589f49de']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @get-chart-instance="ongetChartInstance1763191439325"></t-chart-design><t-row id="t-row-b207.16ac9ab01" class="DwfxSkdwfx-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align"><t-col id="t-col-8995.8b9ba6e24" class="DwfxSkdwfx-t-col-0-1-0"  :span="tColx0x1x0ComputedData.span" :offset="tColx0x1x0ComputedData.offset" :push="tColx0x1x0ComputedData.push" :pull="tColx0x1x0ComputedData.pull" :c-style="tColx0x1x0ComputedData.cStyle"><t-text id="t-text-740f.85d1d67c6" class="DwfxSkdwfx-t-text-0-1-0-0"  :label="tTextx0x1x0x0ComputedData.label" :editable="tTextx0x1x0x0ComputedData.editable" :c-style="tTextx0x1x0x0ComputedData.cStyle"></t-text><t-date-picker v-if="state.dialogType === '2'" id="t-date-picker-2b6d.038f4b93d" class="DwfxSkdwfx-t-date-picker-0-1-0-1"  :placeholder="tDatePickerx0x1x0x1ComputedData.placeholder" :start-placeholder="tDatePickerx0x1x0x1ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x1x0x1ComputedData.endPlaceholder" :type="tDatePickerx0x1x0x1ComputedData.type" :clearable="tDatePickerx0x1x0x1ComputedData.clearable" :range-separator="tDatePickerx0x1x0x1ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.params.time.range, componentPropBindingMap?.['t-date-picker-2b6d.038f4b93d']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x1x0x1ComputedData.separator" :readonly="tDatePickerx0x1x0x1ComputedData.readonly" :editable="tDatePickerx0x1x0x1ComputedData.editable" :c-style="tDatePickerx0x1x0x1ComputedData.cStyle" @date-change="ondateChange1735539087143_0_0"></t-date-picker><t-date-picker v-if="state.dialogType === '1'" id="t-date-picker-cad2.abd345996" class="DwfxSkdwfx-t-date-picker-0-1-0-2"  :placeholder="tDatePickerx0x1x0x2ComputedData.placeholder" :start-placeholder="tDatePickerx0x1x0x2ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x1x0x2ComputedData.endPlaceholder" :type="tDatePickerx0x1x0x2ComputedData.type" :clearable="tDatePickerx0x1x0x2ComputedData.clearable" :range-separator="tDatePickerx0x1x0x2ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.params.time.range, componentPropBindingMap?.['t-date-picker-cad2.abd345996']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x1x0x2ComputedData.separator" :readonly="tDatePickerx0x1x0x2ComputedData.readonly" :editable="tDatePickerx0x1x0x2ComputedData.editable" :c-style="tDatePickerx0x1x0x2ComputedData.cStyle" @date-change="ondateChange1734160159774"></t-date-picker><t-date-picker v-if="state.dialogType === '3'" id="t-date-picker-777f.73b3652a8" class="DwfxSkdwfx-t-date-picker-0-1-0-3"  :placeholder="tDatePickerx0x1x0x3ComputedData.placeholder" :start-placeholder="tDatePickerx0x1x0x3ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x1x0x3ComputedData.endPlaceholder" :type="tDatePickerx0x1x0x3ComputedData.type" :clearable="tDatePickerx0x1x0x3ComputedData.clearable" :range-separator="tDatePickerx0x1x0x3ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.params.time.range, componentPropBindingMap?.['t-date-picker-777f.73b3652a8']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x1x0x3ComputedData.separator" :readonly="tDatePickerx0x1x0x3ComputedData.readonly" :editable="tDatePickerx0x1x0x3ComputedData.editable" :c-style="tDatePickerx0x1x0x3ComputedData.cStyle" @date-change="ondateChange1735539103868_0_0"></t-date-picker></t-col><t-col id="t-col-8802.afe573357" class="DwfxSkdwfx-t-col-0-1-1"  :span="tColx0x1x1ComputedData.span" :offset="tColx0x1x1ComputedData.offset" :push="tColx0x1x1ComputedData.push" :pull="tColx0x1x1ComputedData.pull" :c-style="tColx0x1x1ComputedData.cStyle"><t-text id="t-text-eadd.0abab7f2d" class="DwfxSkdwfx-t-text-0-1-1-0"  :label="tTextx0x1x1x0ComputedData.label" :editable="tTextx0x1x1x0ComputedData.editable" :c-style="tTextx0x1x1x0ComputedData.cStyle"></t-text><t-select id="t-select-ee9f.bf9455a04" class="DwfxSkdwfx-t-select-0-1-1-1"  :active-value="replaceCssVariables(filterData(state.params.monitor, componentPropBindingMap?.['t-select-ee9f.bf9455a04']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.options.monitor, componentPropBindingMap?.['t-select-ee9f.bf9455a04']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x1x1x1ComputedData.alias" :multiple="tSelectx0x1x1x1ComputedData.multiple" :placeholder="tSelectx0x1x1x1ComputedData.placeholder" :clearable="tSelectx0x1x1x1ComputedData.clearable" :disabled="tSelectx0x1x1x1ComputedData.disabled" :name="tSelectx0x1x1x1ComputedData.name" :autocomplete="tSelectx0x1x1x1ComputedData.autocomplete" :filterable="tSelectx0x1x1x1ComputedData.filterable" :no-match-text="tSelectx0x1x1x1ComputedData.no-match-text" :no-data-text="tSelectx0x1x1x1ComputedData.no-data-text" :c-style="tSelectx0x1x1x1ComputedData.cStyle" @change="onchange1734159936716"></t-select></t-col></t-row><t-row id="t-row-9b4d.c1ea6feb4" class="DwfxSkdwfx-t-row-0-2"  :c-style="tRowx0x2ComputedData.cStyle" :gutter="tRowx0x2ComputedData.gutter" :justify="tRowx0x2ComputedData.justify" :align="tRowx0x2ComputedData.align"><t-col id="t-col-08f5.dbd69fc5" class="DwfxSkdwfx-t-col-0-2-0"  :span="tColx0x2x0ComputedData.span" :offset="tColx0x2x0ComputedData.offset" :push="tColx0x2x0ComputedData.push" :pull="tColx0x2x0ComputedData.pull" :c-style="tColx0x2x0ComputedData.cStyle"><t-text-common v-if="state.params.monitor !== 'W01001'" id="t-text-common-b0ad.6d9f3046" class="DwfxSkdwfx-t-text-common-0-2-0-0"  :label="tTextCommonx0x2x0x0ComputedData.label" :editable="tTextCommonx0x2x0x0ComputedData.editable" :c-style="tTextCommonx0x2x0x0ComputedData.cStyle"></t-text-common></t-col><t-col id="t-col-c214.e7bce7002" class="DwfxSkdwfx-t-col-0-2-1"  :span="tColx0x2x1ComputedData.span" :offset="tColx0x2x1ComputedData.offset" :push="tColx0x2x1ComputedData.push" :pull="tColx0x2x1ComputedData.pull" :c-style="tColx0x2x1ComputedData.cStyle"><t-text id="t-text-717d.29e000721" class="DwfxSkdwfx-t-text-0-2-1-0"  :label="tTextx0x2x1x0ComputedData.label" :editable="tTextx0x2x1x0ComputedData.editable" :c-style="tTextx0x2x1x0ComputedData.cStyle"></t-text><t-select id="t-select-8b99.2c9e49e2a" class="DwfxSkdwfx-t-select-0-2-1-1"  :active-value="replaceCssVariables(filterData(state.upstreamPointCode, componentPropBindingMap?.['t-select-8b99.2c9e49e2a']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.upstreamSelectOptions, componentPropBindingMap?.['t-select-8b99.2c9e49e2a']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x2x1x1ComputedData.alias" :multiple="tSelectx0x2x1x1ComputedData.multiple" :placeholder="tSelectx0x2x1x1ComputedData.placeholder" :clearable="tSelectx0x2x1x1ComputedData.clearable" :disabled="tSelectx0x2x1x1ComputedData.disabled" :collapse-tags="tSelectx0x2x1x1ComputedData.collapseTags" :name="tSelectx0x2x1x1ComputedData.name" :autocomplete="tSelectx0x2x1x1ComputedData.autocomplete" :filterable="tSelectx0x2x1x1ComputedData.filterable" :no-match-text="tSelectx0x2x1x1ComputedData.no-match-text" :no-data-text="tSelectx0x2x1x1ComputedData.no-data-text" :c-style="tSelectx0x2x1x1ComputedData.cStyle" :multiple-limit="tSelectx0x2x1x1ComputedData.multipleLimit" :data="tSelectx0x2x1x1ComputedData.data" @change="onchange1740100114069"></t-select></t-col><t-col id="t-col-94f9.acd7f5b65" class="DwfxSkdwfx-t-col-0-2-2"  :span="tColx0x2x2ComputedData.span" :offset="tColx0x2x2ComputedData.offset" :push="tColx0x2x2ComputedData.push" :pull="tColx0x2x2ComputedData.pull" :c-style="tColx0x2x2ComputedData.cStyle"><t-text id="t-text-7555.0fdd326c2" class="DwfxSkdwfx-t-text-0-2-2-0"  :label="tTextx0x2x2x0ComputedData.label" :editable="tTextx0x2x2x0ComputedData.editable" :c-style="tTextx0x2x2x0ComputedData.cStyle"></t-text><t-select id="t-select-e7c6.73c2166f5" class="DwfxSkdwfx-t-select-0-2-2-1"  :active-value="replaceCssVariables(filterData(state.downstreamPointCode, componentPropBindingMap?.['t-select-e7c6.73c2166f5']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.downstreamSelectOptions, componentPropBindingMap?.['t-select-e7c6.73c2166f5']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x2x2x1ComputedData.alias" :multiple="tSelectx0x2x2x1ComputedData.multiple" :placeholder="tSelectx0x2x2x1ComputedData.placeholder" :clearable="tSelectx0x2x2x1ComputedData.clearable" :disabled="tSelectx0x2x2x1ComputedData.disabled" :collapse-tags="tSelectx0x2x2x1ComputedData.collapseTags" :name="tSelectx0x2x2x1ComputedData.name" :autocomplete="tSelectx0x2x2x1ComputedData.autocomplete" :filterable="tSelectx0x2x2x1ComputedData.filterable" :no-match-text="tSelectx0x2x2x1ComputedData.no-match-text" :no-data-text="tSelectx0x2x2x1ComputedData.no-data-text" :c-style="tSelectx0x2x2x1ComputedData.cStyle" :multiple-limit="tSelectx0x2x2x1ComputedData.multipleLimit" :data="tSelectx0x2x2x1ComputedData.data" @change="onchange1762939705327_1_0"></t-select></t-col><t-col id="t-col-97f1.67ceeb6b3" class="DwfxSkdwfx-t-col-0-2-3"  :span="tColx0x2x3ComputedData.span" :offset="tColx0x2x3ComputedData.offset" :push="tColx0x2x3ComputedData.push" :pull="tColx0x2x3ComputedData.pull" :c-style="tColx0x2x3ComputedData.cStyle"><t-text id="t-text-8f2e.58316ed1d" class="DwfxSkdwfx-t-text-0-2-3-0"  :label="tTextx0x2x3x0ComputedData.label" :editable="tTextx0x2x3x0ComputedData.editable" :c-style="tTextx0x2x3x0ComputedData.cStyle"></t-text><t-switch id="t-switch-5d48.72ababdbd" class="DwfxSkdwfx-t-switch-0-2-3-1"  :value="tSwitchx0x2x3x1ComputedData.value" :c-style="tSwitchx0x2x3x1ComputedData.cStyle" @change="onchange1734160214280"></t-switch></t-col></t-row></div>
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
import { TChartDesign, TCol, TDatePicker, TRow, TSelect, TSwitch, TText, TTextCommon } from '@ths/design';

export default {
  components: {
    TChartDesign,
    TCol,
    TDatePicker,
    TRow,
    TSelect,
    TSwitch,
    TText,
    TTextCommon,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-chart-design-257d.c589f49de":{"attributeName":"tChartDesignx0x0","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-row-b207.16ac9ab01":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-8995.8b9ba6e24":{"attributeName":"tColx0x1x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-740f.85d1d67c6":{"attributeName":"tTextx0x1x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-2b6d.038f4b93d":{"attributeName":"tDatePickerx0x1x0x1","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-cad2.abd345996":{"attributeName":"tDatePickerx0x1x0x2","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-777f.73b3652a8":{"attributeName":"tDatePickerx0x1x0x3","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-8802.afe573357":{"attributeName":"tColx0x1x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-eadd.0abab7f2d":{"attributeName":"tTextx0x1x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-ee9f.bf9455a04":{"attributeName":"tSelectx0x1x1x1","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-row-9b4d.c1ea6feb4":{"attributeName":"tRowx0x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-08f5.dbd69fc5":{"attributeName":"tColx0x2x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-b0ad.6d9f3046":{"attributeName":"tTextCommonx0x2x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-c214.e7bce7002":{"attributeName":"tColx0x2x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-717d.29e000721":{"attributeName":"tTextx0x2x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-8b99.2c9e49e2a":{"attributeName":"tSelectx0x2x1x1","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"collapseTags":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]},"multipleLimit":{"filters":[]},"data":{"filters":[]}},"t-col-94f9.acd7f5b65":{"attributeName":"tColx0x2x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-7555.0fdd326c2":{"attributeName":"tTextx0x2x2x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-e7c6.73c2166f5":{"attributeName":"tSelectx0x2x2x1","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"collapseTags":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]},"multipleLimit":{"filters":[]},"data":{"filters":[]}},"t-col-97f1.67ceeb6b3":{"attributeName":"tColx0x2x3","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-8f2e.58316ed1d":{"attributeName":"tTextx0x2x3x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-switch-5d48.72ababdbd":{"attributeName":"tSwitchx0x2x3x1","value":{"filters":[]},"cStyle":{"filters":[]}}};
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
   downstreamPointCode: "",
   upstreamPointCode: "",
   downstreamSelectOptions: "",
   upstreamSelectOptions: "",
   dialogType: "",
   noDataImg: "",
   isBz: false,
   seriesData: [],
   standardSeriesData: [],
   yAxisUnit: "",
   lineChartOption: {},
   normalLineCommonSeriesOption: {"type":"line","symbolSize":1,"labelLine":{"smooth":true},"smooth":true},
   params: {"time":{"start":"","end":"","range":[]},"section":[],"monitor":"","interfaceId":"f5a13b25067b52a45d626d1f0284372d","pointcode":"3507001047","monitorType":"1"},
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
tChartDesignx0x0: {
defaultStyle: {
            default: {"height":"calc(100% - 65px)","width":"100%","position":"unset","left":"0px","top":"65px"},
            
            },
 default: { 
 
emptyImg:"",
cStyle:{"wrapper":{"default":{"height":"calc(100% - 65px)","width":"100%","position":"unset","left":"0px","top":"65px"}},"emptyText":{"default":{"fontSize":"14px","color":"var(--business-white)"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
tRowx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"9px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"9px"}}},
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
 
span:12,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"left","alignItems":"center"}}}, 
 },
},
tTextx0x1x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"16px","top":"18px","fontSize":"var(--text-size-14)","lineHeight":"14px","animationName":"","textAlign":"right","marginRight":"15px","whiteSpace":"nowrap"},
            
            },
 default: { 
 
label:"监测时间",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"16px","top":"18px","fontSize":"var(--text-size-14)","lineHeight":"14px","animationName":"","textAlign":"right","marginRight":"15px","whiteSpace":"nowrap"}}}, 
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
 
span:12,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tTextx0x1x1x0: {
defaultStyle: {
            default: {"width":"auto","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"641px","top":"18px","fontSize":"var(--text-size-14)","lineHeight":"14px","animationName":"","textAlign":"right","marginRight":"10px"},
            
            },
 default: { 
 
label:"监测指标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"641px","top":"18px","fontSize":"var(--text-size-14)","lineHeight":"14px","animationName":"","textAlign":"right","marginRight":"10px"}}}, 
 },
},
tSelectx0x1x1x1: {
defaultStyle: {
            default: {"width":"118px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},
            
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
cStyle:{"wrapper":{"default":{"width":"118px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tRowx0x2: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"60px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"60px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x2x0: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"left","alignItems":"end"},
            
            },
 default: { 
 
span:4,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"left","alignItems":"end"}}}, 
 },
},
tTextCommonx0x2x0x0: {
defaultStyle: {
            default: {"width":"113px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"15px","top":"66px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"监测值（mg/L）",
editable:false,
cStyle:{"wrapper":{"default":{"width":"113px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"15px","top":"66px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tColx0x2x1: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"left","alignItems":"center","gap":"auto","left":"0px","top":"41px"},
            
            },
 default: { 
 
span:8,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"left","alignItems":"center","gap":"auto","left":"0px","top":"41px"}}}, 
 },
},
tTextx0x2x1x0: {
defaultStyle: {
            default: {"width":"auto","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"127px","top":"69px","fontSize":"var(--text-size-14)","lineHeight":"14px","animationName":"","textAlign":"right","marginRight":"10px"},
            
            },
 default: { 
 
label:"上游断面",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"127px","top":"69px","fontSize":"var(--text-size-14)","lineHeight":"14px","animationName":"","textAlign":"right","marginRight":"10px"}}}, 
 },
},
tSelectx0x2x1x1: {
defaultStyle: {
            default: {"width":"200px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:"",
options:"",
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
cStyle:{"wrapper":{"default":{"width":"200px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"tag":{"default":{"fontSize":"var(--business-text-size-18)","lineHeight":"var(--business-text-size-18)","height":"auto"}}},
multipleLimit:4,
data:[], 
 },
},
tColx0x2x2: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"left","alignItems":"center","gap":"auto"},
            
            },
 default: { 
 
span:9,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"left","alignItems":"center","gap":"auto"}}}, 
 },
},
tTextx0x2x2x0: {
defaultStyle: {
            default: {"width":"auto","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"420px","top":"69px","fontSize":"var(--text-size-14)","lineHeight":"14px","animationName":"","textAlign":"right","marginRight":"10px"},
            
            },
 default: { 
 
label:"下游断面",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"420px","top":"69px","fontSize":"var(--text-size-14)","lineHeight":"14px","animationName":"","textAlign":"right","marginRight":"10px"}}}, 
 },
},
tSelectx0x2x2x1: {
defaultStyle: {
            default: {"width":"200px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:"",
options:"",
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
cStyle:{"wrapper":{"default":{"width":"200px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"tag":{"default":{"fontSize":"var(--business-text-size-18)","lineHeight":"var(--business-text-size-18)","height":"auto"}}},
multipleLimit:4,
data:[], 
 },
},
tColx0x2x3: {
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
tTextx0x2x3x0: {
defaultStyle: {
            default: {"width":"auto","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"726px","top":"65px","fontSize":"var(--text-size-14)","lineHeight":"22px","animationName":"","textAlign":"right","marginRight":"10px"},
            
            },
 default: { 
 
label:"标准值",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"726px","top":"65px","fontSize":"var(--text-size-14)","lineHeight":"22px","animationName":"","textAlign":"right","marginRight":"10px"}}}, 
 },
},
tSwitchx0x2x3x1: {
defaultStyle: {
            default: {"width":"32px","height":"22px","position":"unset","left":"791px","top":"65px","animationName":"","marginLeft":"10px"},
            
            },
 default: { 
 
value:false,
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

// apiRegistry.getLineData.request();
// const apiRequests = [
//   apiRegistry.getLineData.request(0, state.params.pointcode),
//   apiRegistry.getLineData.request(1, state.upstreamPointCode.join(',')),
//   apiRegistry.getLineData.request(2, state.downstreamPointCode.join(',')),
// ];

// Promise.all(apiRequests)
//   .then(() => {
//     changeStandard(state.isBz)

//   })
//   .catch(error => {
//     console.error('某个请求失败了:', error);
//   });

  const seq = ++state.fallbackSeq;
  const priority = ['W01009', 'W21011', 'W21003', 'W01019'];

  const run = async () => {
    try {
      // 如果用户当前选中的不是溶解氧，则只按当前指标请求一次，不自动跳走
      const needFallback = state.params.monitor === 'W01009';
      const codesToTry = needFallback ? priority : [state.params.monitor];

      for (const code of codesToTry) {
        if (seq !== state.fallbackSeq) return;

        // 设置监测指标（下拉里没有该指标则跳过）
        const opt = state.options?.monitor?.find((m) => m?.value === code);
        if (!opt) continue;
        state.params.monitor = opt.value;
        state.yAxisUnit = opt.unit || '';

        await apiRegistry.getLineData.request(0, state.params.pointcode);

        const upCodes = Array.isArray(state.upstreamPointCode) ? state.upstreamPointCode : [];
        const downCodes = Array.isArray(state.downstreamPointCode) ? state.downstreamPointCode : [];
        if (upCodes.length) await apiRegistry.getLineData.request(1, upCodes.join(','));
        if (downCodes.length) await apiRegistry.getLineData.request(2, downCodes.join(','));

        const hasValid = (arr) =>
          Array.isArray(arr) &&
          arr.some((s) =>
            Array.isArray(s?.data) &&
            s.data.some((v) => v !== null && v !== undefined && !Number.isNaN(typeof v === 'number' ? v : parseFloat(v)))
          );
        const hasData =
          hasValid(state.seriesData) || hasValid(state.upstreamseriesData) || hasValid(state.downstreamseriesData);

        if (hasData) break;
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

// apiRegistry.getLineData.request();
// const apiRequests = [
//   apiRegistry.getLineData.request(0, state.params.pointcode),
//   apiRegistry.getLineData.request(1, state.upstreamPointCode.join(',')),
//   apiRegistry.getLineData.request(2, state.downstreamPointCode.join(',')),
// ];

// Promise.all(apiRequests)
//   .then(() => {
//     changeStandard(state.isBz)

//   })
//   .catch(error => {
//     console.error('某个请求失败了:', error);
//   });


  const seq = ++state.fallbackSeq;
  const priority = ['W01009', 'W21011', 'W21003', 'W01019'];

  const run = async () => {
    try {
      const needFallback = state.params.monitor === 'W01009';
      const codesToTry = needFallback ? priority : [state.params.monitor];

      for (const code of codesToTry) {
        if (seq !== state.fallbackSeq) return;

        // 当需要兜底时，切换为下一个指标；否则保持用户当前选中
        if (needFallback) {
          const opt = state.options?.monitor?.find((m) => m?.value === code);
          if (!opt) continue;
          state.params.monitor = opt.value;
          state.yAxisUnit = opt.unit || '';
        }

        await apiRegistry.getLineData.request(0, state.params.pointcode);

        const upCodes = Array.isArray(state.upstreamPointCode) ? state.upstreamPointCode : [];
        const downCodes = Array.isArray(state.downstreamPointCode) ? state.downstreamPointCode : [];
        if (upCodes.length) await apiRegistry.getLineData.request(1, upCodes.join(','));
        if (downCodes.length) await apiRegistry.getLineData.request(2, downCodes.join(','));

        const hasValid = (arr) =>
          Array.isArray(arr) &&
          arr.some((s) =>
            Array.isArray(s?.data) &&
            s.data.some((v) => v !== null && v !== undefined && !Number.isNaN(typeof v === 'number' ? v : parseFloat(v)))
          );
        const hasData =
          hasValid(state.seriesData) || hasValid(state.upstreamseriesData) || hasValid(state.downstreamseriesData);

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
// const obj = checkTimeRange(state.dialogType, state.params.time.range, state.lineChartOption?.xAxis?.data?.length)

// // 处理x轴显示标签间隔、及重复值
// if (obj.flag) {
//   state.lineChartOption.xAxis.axisLabel.interval = 0;
//   state.lineChartOption.xAxis.axisLabel.formatter = (value, index) => {
//     let dayValue;
//     switch (state.dialogType) {
//       case '1':
//         // 自动天
//         dayValue = dateFormat(value.replace('日', ''), 'yyyy-MM');
//         break;
//       case '2':
//         // 自动小时
//         dayValue = dateFormat(`${value.replace('时', '')}:00`, 'MM-dd');
//         break;
//       case '3':
//         // 手工
//         dayValue = dateFormat(value, 'yyyy');
//         break;
//       default:
//         dayValue = value;
//         break;
//     }
//     return index % obj.num === 0 ? dayValue : '';
//   };
//   state.lineChartOption.xAxis.axisTick.interval = (index) => {
//     return index % obj.num === 0;
//   };
// } else {
//   state.lineChartOption.xAxis.axisLabel.interval = 'auto';
//   state.lineChartOption.xAxis.axisLabel.formatter = (value) => value;
//   state.lineChartOption.xAxis.axisTick.interval = 'auto';
// }
};
const changeStandard = (isShow) => {
if (state.lineChartOption.series.length) {
  console.log('44清空现有series数据...');
  state.lineChartOption.series.forEach((item, index) => {
    console.log(item.name);
    state.lineChartOption.series[index].data = [];
  })
}



/**
 * 修复标准值系列的通用函数（适用于您的具体场景）
 * 这个函数会直接修复传入的标准值系列数组，使其与对应的网格匹配
 * 
 * @param {Array} seriesData - 标准值系列数据
 * @param {string} type - 系列类型：'upstream'(上游), 'current'(本断面), 'downstream'(下游)
 * @returns {Array} 修复后的标准值系列
 */
function fixStandardSeriesData(seriesData, type = 'current') {
  if (!Array.isArray(seriesData)) {
    return [];
  }
  
  const gridIndexMap = {
    'upstream': 0,      // 上游断面 -> 网格0
    'current': 1,       // 本断面 -> 网格1
    'downstream': 2     // 下游断面 -> 网格2
  };
  
  const targetIndex = gridIndexMap[type] !== undefined ? gridIndexMap[type] : 1;
  
  return seriesData.map(series => {
    const fixedSeries = { ...series };
    
    // 修复坐标轴索引
    fixedSeries.xAxisIndex = targetIndex;
    fixedSeries.yAxisIndex = targetIndex;
    
    return fixedSeries;
  });
}

// 修复标准值系列
state.standardSeriesData = fixStandardSeriesData(state.standardSeriesData || [], 'current');
state.upstreamStandardSeriesData = fixStandardSeriesData(state.upstreamStandardSeriesData || [], 'upstream');
state.downstreamStandardSeriesData = fixStandardSeriesData(state.downstreamStandardSeriesData || [], 'downstream');









let series = [
// state.lineChartOption.series = [
  ...[
    {
      name: '上游断面背景',
      type: 'line',
      data: [],
      xAxisIndex: 0,
      yAxisIndex: 0,
      silent: true,
      showSymbol: false,
      lineStyle: {
        width: 0
      },
      areaStyle: {
        color: 'rgba(84, 112, 198, 0.1)'
      },
      markArea: {
        silent: true,
        data: [[{
          xAxis: 'min',
          yAxis: 'max'
        }, {
          xAxis: 'max',
          yAxis: 'min'
        }]],
        itemStyle: {
          color: 'rgba(84, 112, 198, 0.1)'
        }
      }
    },
    ...state.upstreamseriesData.map((d) => ({
      name: d.name,
      type: 'line',
      data: d.data,
      connectNulls: true,
      xAxisIndex: 0,
      yAxisIndex: 0,
      symbol: 'circle',
      smooth: true,
      lineStyle: {
        width: 2,
        // color: '#5470c6'
      },
      itemStyle: {
        // color: '#5470c6',
        borderwidth: 2,
        borderColor: '#fff'
      },
      emphasis: {
        scale: true
      }
    })),
    {
      name: '当前断面背景',
      type: 'line',
      data: [],
      xAxisIndex: 1,
      yAxisIndex: 1,
      silent: true,
      showSymbol: false,
      lineStyle: {
        width: 0
      },
      areaStyle: {
        color: 'rgba(145, 204, 117, 0.1)'
      },
      markArea: {
        silent: true,
        data: [[{
          xAxis: 'min',
          yAxis: 'max'
        }, {
          xAxis: 'max',
          yAxis: 'min'
        }]],
        itemStyle: {
          color: 'rgba(145, 204, 117, 0.1)'
        }
      }
    },
    ...state.seriesData.map((d) => ({
      name: d.name,
      type: 'line',
      data: d.data,
      connectNulls: true,
      xAxisIndex: 1,
      yAxisIndex: 1,
      symbol: 'circle',
      smooth: true,
      lineStyle: {
        width: 2,
        // color: '#91cc75'
      },
      itemStyle: {
        // color: '#91cc75',
        borderwidth: 2,
        borderColor: '#fff'
      },
      emphasis: {
        scale: true
      }
    })),
    {
      name: '下游断面背景',
      type: 'line',
      data: [],
      xAxisIndex: 2,
      yAxisIndex: 2,
      silent: true,
      showSymbol: false,
      lineStyle: {
        width: 0
      },
      areaStyle: {
        color: 'rgba(250, 200, 88, 0.1)',
      },
      markArea: {
        silent: true,
        data: [[{
          xAxis: 'min',
          yAxis: 'max'
        }, {
          xAxis: 'max',
          yAxis: 'min'
        }]],
        itemStyle: {
          color: 'rgba(250, 200, 88, 0.1)'
        }
      }
    },
    ...state.downstreamseriesData.map((d) => ({
      name: d.name,
      type: 'line',
      data: d.data,
      connectNulls: true,
      xAxisIndex: 2,
      yAxisIndex: 2,
      symbol: 'circle',
      smooth: true,
      lineStyle: {
        width: 2,
        // color: '#fac858'
      },
      itemStyle: {
        // color: '#fac858',
        borderwidth: 2,
        borderColor: '#fff'
      },
      emphasis: {
        scale: true
      }
    })),
  ],
  ...(isShow ? state.standardSeriesData : []),
  ...(isShow ? state.upstreamStandardSeriesData : []),
  ...(isShow ? state.downstreamStandardSeriesData : []),
];
state.lineChartOption.series = series;

console.log('【changeStandard】最终完整配置:', state.lineChartOption);

console.log(state.lineChartOption.series)

if (state.myChart) {
  state.myChart.clear();
   try {
    state.myChart.setOption(state.lineChartOption, true);
    console.log('【changeStandard】图表更新成功');
  } catch (error) {
    console.error('【changeStandard】setOption错误详情:', {
      message: error.message,
      stack: error.stack,
      option: state.lineChartOption
    });
  }
}
state.chartShow = false;
nextTick(()=>state.chartShow = true)





};
const initPage = () => {

// 处理参数
state.params.pointcode = global.businessDialog.dialogParmas.pointCode;
if (global.businessDialog.dialogParmas?.dialogType === 'autoDay') {
  state.params.interfaceId = "f5a13b25067b52a45d626d1f0284372d";
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
// 获取下拉选项后请求数据
// const getData = async () => {
//   await apiRegistry.getSectionData.request();
//   let dialogType = global.businessDialog.dialogParmas?.dialogType || ''
//   // 自动断面
//   if(dialogType === 'autoHour'){
//     await apiRegistry.getMonitorDataAuto.request();
//   }else{
//     await apiRegistry.getMonitorDataHandmade.request();
//   }
//   await apiRegistry.getLineData.request(0, state.params.pointcode);
  
//   if (state.upstreamPointCode) {
//     await apiRegistry.getLineData.request(1, state.upstreamPointCode.join(','));
//   }
//   if (state.downstreamPointCode) {
//     await apiRegistry.getLineData.request(2, state.downstreamPointCode.join(','));
//   }
  
//   changeStandard(state.isBz)
// }
  const getData = async () => {
    await apiRegistry.getSectionData.request();
    let dialogType = global.businessDialog.dialogParmas?.dialogType || ''
    // 自动断面
    if(dialogType === 'autoHour'){
      await apiRegistry.getMonitorDataAuto.request();
    }else{
      await apiRegistry.getMonitorDataHandmade.request();
    }

    const seq = ++state.fallbackSeq;
    const priority = ['W01009', 'W21011', 'W21003', 'W01019'];

    for (const code of priority) {
      if (seq !== state.fallbackSeq) return;

      const opt = state.options?.monitor?.find((m) => m?.value === code);
      if (!opt) continue;
      state.params.monitor = opt.value;
      state.yAxisUnit = opt.unit || '';

      await apiRegistry.getLineData.request(0, state.params.pointcode);

      const upCodes = Array.isArray(state.upstreamPointCode) ? state.upstreamPointCode : [];
      const downCodes = Array.isArray(state.downstreamPointCode) ? state.downstreamPointCode : [];
      if (upCodes.length) await apiRegistry.getLineData.request(1, upCodes.join(','));
      if (downCodes.length) await apiRegistry.getLineData.request(2, downCodes.join(','));

      const hasValid = (arr) =>
        Array.isArray(arr) &&
        arr.some((s) =>
          Array.isArray(s?.data) &&
          s.data.some((v) => v !== null && v !== undefined && !Number.isNaN(typeof v === 'number' ? v : parseFloat(v)))
        );
      const hasData =
        hasValid(state.seriesData) || hasValid(state.upstreamseriesData) || hasValid(state.downstreamseriesData);

      if (hasData) break;
    }

    if (seq !== state.fallbackSeq) return;
    changeStandard(state.isBz);
  }

// 获取数据
getData();

const styleEl = document.createElement('style')
styleEl.textContent = `
  #t-select-8b99\\.2c9e49e2a .el-select__tags {
    max-width: none !important;
  }
`
document.head.appendChild(styleEl)
};
const setNoData = () => {
// 设置暂无数据图标
state.noDataImg = getCssVariable('--business-no-data-img');
};
const setOptions = () => {

  
    const dataZoom = [
      {
        "type": "slider",
        // "backgroundColor": getCssVariable('--business-show-bg30'),
        // "borderColor": getCssVariable('--business-show-bg30'),
        // "borderRadius": 0,
        // "showDetail": false,
        // "showDataShadow": false,
        // "zoomLock": true,
        "height": 10,
        // "brushSelect": true,
        // "bottom": "0%",
        // "brushStyle": {
        //   "color": "#000"
        // },
        // "fillerColor": getCssVariable('--business-btn-default'),
        // // "handleIcon": "none",
        // "handleStyle": {
        //   "color": "#2D955A",
        //   "borderColor": "#D1D5D9",
        //   "borderCap": "round"
        // },
    
        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
        // realtime: true,      // 拖动时实时更新图表
        // start: 0,            // 数据窗口范围的起始百分比
        // end: 50,            // 数据窗口范围的结束百分比
        textStyle: {
          color: '#fff'
        }
      },
      {
        type: 'inside',      // 内置缩放，支持鼠标滚轮缩放
        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
        // realtime: true,      // 拖动时实时更新图表
        // start: 0,            // 数据窗口范围的起始百分比
        // end: 50             // 数据窗口范围的结束百分比
      }
    ];
    
    // 变化趋势图表配置
    state.lineChartOption = {
      "color": [
        "#2CE451",
        "#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272",
        "#fc8452", "#9a60b4", "#ea7ccc", "#2CCAFF", "#D56900", "#465FFF"
      ],
      "tooltip": {
        "trigger": "axis",
        axisPointer: {
          type: 'line',     // ⭐ 使用竖直线
          snap: true        // 光标自动对齐到点上
        },
        "backgroundColor": "rgba(0, 0, 0, 0.8)",
        "borderColor": "rgba(255, 255, 255, 0.5)",
        "textStyle": {
          "color": "var(--skin-font-color)"
        },
        "formatter": (value) => handleTooltipFormatter(value)
      },
      // ⭐ 关键：把三个 x 轴联动起来
      axisPointer: {
        link: [
          { xAxisIndex: [0, 1, 2] }   // 三个 xAxis 都一起动
        ]
        // 也可以加 type/triggerOn 等
        // type: 'line',
        // triggerOn: 'mousemove|click'
      },
      dataZoom,
    
      grid: [
        {
          // "left": "7%",
          "left": "10%",
          "right": "2%",
          top: '12%',
          bottom: '63%',
          containLabel: false,
          backgroundColor: 'rgba(84, 112, 198, 0.1)'  // 上游断面区域背景色
        },
        {
          // "left": "7%",
          "left": "10%",
          "right": "2%",
          top: '41%',
          bottom: '37%',
          containLabel: false,
          backgroundColor: 'rgba(145, 204, 117, 0.1)'  // 当前断面区域背景色
        },
        {
          // "left": "7%",
          "left": "10%",
          "right": "2%",
          top: '67%',
          bottom: 30,
          containLabel: false,
          backgroundColor: 'rgba(250, 200, 88, 0.1)'  // 下游断面区域背景色
        }
      ],
    
      "xAxis": [
        {
          "gridIndex": 0,
          "axisLabel": {
            "color": "var(--skin-font-color-80)",
            "fontSize": 'var(--business-text-size-12)'
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
            "fontSize": 'var(--business-text-size-12)'
          },
          "data": []
        },
        {
          "gridIndex": 1,
          "axisLabel": {
            "color": "var(--skin-font-color-80)",
            "fontSize": 'var(--business-text-size-12)'
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
            "fontSize": 'var(--business-text-size-12)'
          },
          "data": []
        },
        {
          "gridIndex": 2,
          "axisLabel": {
            "color": "var(--skin-font-color-80)",
            "fontSize": 'var(--business-text-size-12)'
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
            "fontSize": 'var(--business-text-size-12)'
          },
          "data": []
        }
      ],
    
      "legend": {
        "top": "7%",
        "show": true,
        "type": "scroll",
        "width": "50%",
        "pageButtonItemGap": 5, // 翻页按钮间距
        "pageButtonGap": 10, // 翻页按钮与图例的间距
        "pageButtonPosition": "end", // 翻页按钮位置
        "pageIconColor": "var(--skin-font-color-80)", // 翻页按钮颜色
        "pageIconInactiveColor": "var(--t-pop-time-border)", // 翻页按钮禁用颜色
        "pageIconSize": 12, // 翻页按钮大小
        "pageTextStyle": {
          "color": "var(--skin-font-color-80)"
        },
        "icon": "rect",
        "itemWidth": 12,
        "itemHeight": 4,
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
      "yAxis": [
        {
          show: true,
          type: 'value',
          name: '上游断面',
          nameLocation: 'middle',
          nameGap: 52,
          gridIndex: 0,
          axisLine: {
            show: false,  // 隐藏Y轴线
          },
          "axisLabel": {
            "show": true,
            "color": "var(--skin-font-color-80)",
            "fontSize": 'var(--business-text-size-12)',
            "formatter": function (value) {
              // 统一格式化，确保标签长度一致
              return value.toFixed(2);
            },
          },
          "nameTextStyle": {
            "color": "var(--skin-font-color-80)",
            "align": "center",
            "padding": [0, 0, 0, 0],
            "fontSize": 'var(--business-text-size-12)',
            show: true
          },
          "splitLine": {
            show: false  // 隐藏网格线
          },
           show: true
        },
        {
          "show": true,
          type: 'value',
          name: '本断面',
          nameLocation: 'middle',
          nameGap: 52,
          gridIndex: 1,
          axisLine: {
            show: false,  // 隐藏Y轴线
          },
          "axisLabel": {
            "show": true,
            "color": "var(--skin-font-color-80)",
            "fontSize": 'var(--business-text-size-12)',
            "formatter": function (value) {
              // 统一格式化，确保标签长度一致
              return value.toFixed(2);
            }
          },
          "nameTextStyle": {
            "color": "var(--skin-font-color-80)",
            "align": "center",
            "padding": [0, 0, 0, 0],
            "fontSize": 'var(--business-text-size-12)'
          },
          "splitLine": {
            show: false  // 隐藏网格线
          }
        },
        {
          "show": true,
          type: 'value',
          name: '下游断面',
          nameLocation: 'middle',
          nameGap: 52,
          gridIndex: 2,
          axisLine: {
            show: false,  // 隐藏Y轴线
          },
          "axisLabel": {
            "show": true,
            "color": "var(--skin-font-color-80)",
            "fontSize": 'var(--business-text-size-12)',
            "formatter": function (value) {
              // 统一格式化，确保标签长度一致
              return value.toFixed(2);
            }
          },
          "nameTextStyle": {
            "color": "var(--skin-font-color-80)",
            "align": "right",
            "align": "center",
            "padding": [0, 0, 0, 0],
            "fontSize": 'var(--business-text-size-12)'
          },
          "splitLine": {
            show: false  // 隐藏网格线
          }
        }
      ],
      "series": []
    };
    
  
};
const handleSectionSelect = (data) => {
// state.params.section = data ? data.split(',') : [];
// state.params.pointcode = data || "";

if (!state.upstreamPointCode.length) {
  state.upstreamPointCode = [state.upstreamSelectOptions[0].value];
}
if (!state.downstreamPointCode.length) {
  state.downstreamPointCode = [state.downstreamSelectOptions[0].value];
}

// const apiRequests = [
//   apiRegistry.getLineData.request(0, state.params.pointcode),
//   apiRegistry.getLineData.request(1, state.upstreamPointCode.join(',')),
//   apiRegistry.getLineData.request(2, state.downstreamPointCode.join(',')),
// ];

// Promise.all(apiRequests)
//   .then(() => {
//     changeStandard(state.isBz)

//   })
//   .catch(error => {
//     console.error('某个请求失败了:', error);
//   });


  const seq = ++state.fallbackSeq;
  const priority = ['W01009', 'W21011', 'W21003', 'W01019'];

  const run = async () => {
    try {
      // 如果用户当前选中的不是溶解氧，则只按当前指标请求一次，不自动跳走
      const needFallback = state.params.monitor === 'W01009';
      const codesToTry = needFallback ? priority : [state.params.monitor];

      for (const code of codesToTry) {
        if (seq !== state.fallbackSeq) return;

        if (needFallback) {
          const opt = state.options?.monitor?.find((m) => m?.value === code);
          if (!opt) continue;
          state.params.monitor = opt.value;
          state.yAxisUnit = opt.unit || '';
        }

        await apiRegistry.getLineData.request(0, state.params.pointcode);

        const upCodes = Array.isArray(state.upstreamPointCode) ? state.upstreamPointCode : [];
        const downCodes = Array.isArray(state.downstreamPointCode) ? state.downstreamPointCode : [];
        if (upCodes.length) await apiRegistry.getLineData.request(1, upCodes.join(','));
        if (downCodes.length) await apiRegistry.getLineData.request(2, downCodes.join(','));

        const hasValid = (arr) =>
          Array.isArray(arr) &&
          arr.some((s) =>
            Array.isArray(s?.data) &&
            s.data.some((v) => v !== null && v !== undefined && !Number.isNaN(typeof v === 'number' ? v : parseFloat(v)))
          );
        const hasData =
          hasValid(state.seriesData) || hasValid(state.upstreamseriesData) || hasValid(state.downstreamseriesData);

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

let myChart = state.myChart;
const option = state.lineChartOption;
console.log(myChart)

// 时间数据（12个小时，转换为数值便于计算）
let times = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00',
  '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
// 时间对应的小时数值，用于计算间隔
const timeValues = times.map(t => parseInt(t.split(':')[0]));

// 时间间隔设置（小时）
const upstreamToCurrentInterval = 4;  // 上游到当前断面的时间间隔
const currentToDownstreamInterval = 8; // 当前到下游断面的时间间隔

// 处理鼠标悬停事件，显示双向时间间隔竖线
myChart.on('mouseover', function (params) {
  // 清除之前的标记线
  option.series.forEach((series) => {
    series.markLine = { data: [] };
  });

  // 获取当前悬停的时间点和系列
  const currentIndex = params.dataIndex;
  const currentHour = timeValues[currentIndex];
  const seriesName = params.seriesName;

  // 根据不同系列计算并显示双向时间关联竖线
  if (seriesName === '上游断面') {
    // 上游断面：显示自身位置的竖线
    addVerticalLine(0, currentIndex, '#5470c6');

    // 正向推算：上游→当前(+4h)
    const currentTargetHour = (currentHour + upstreamToCurrentInterval) % 24;
    const currentTargetIndex = getTimeIndex(currentTargetHour);
    if (currentTargetIndex !== -1) {
      addVerticalLine(1, currentTargetIndex, '#91cc75', '正向');

      // 正向推算：当前→下游(+8h)
      const downstreamTargetHour = (currentTargetHour + currentToDownstreamInterval) % 24;
      const downstreamTargetIndex = getTimeIndex(downstreamTargetHour);
      if (downstreamTargetIndex !== -1) {
        addVerticalLine(2, downstreamTargetIndex, '#fac858', '正向');
      }
    }
  } else if (seriesName === '当前断面') {
    // 当前断面：显示自身位置的竖线
    addVerticalLine(1, currentIndex, '#91cc75');

    // 正向推算：当前→下游(+8h)
    const downstreamTargetHour = (currentHour + currentToDownstreamInterval) % 24;
    const downstreamTargetIndex = getTimeIndex(downstreamTargetHour);
    if (downstreamTargetIndex !== -1) {
      addVerticalLine(2, downstreamTargetIndex, '#fac858', '正向');
    }

    // 反向推算：当前→上游(-4h)
    const upstreamTargetHour = (currentHour - upstreamToCurrentInterval + 24) % 24;
    const upstreamTargetIndex = getTimeIndex(upstreamTargetHour);
    if (upstreamTargetIndex !== -1) {
      addVerticalLine(0, upstreamTargetIndex, '#5470c6', '反向');
    }
  } else if (seriesName === '下游断面') {
    // 下游断面：显示自身位置的竖线
    addVerticalLine(2, currentIndex, '#fac858');

    // 反向推算：下游→当前(-8h)
    const currentTargetHour = (currentHour - currentToDownstreamInterval + 24) % 24;
    const currentTargetIndex = getTimeIndex(currentTargetHour);
    if (currentTargetIndex !== -1) {
      addVerticalLine(1, currentTargetIndex, '#91cc75', '反向');

      // 反向推算：当前→上游(-4h)
      const upstreamTargetHour = (currentTargetHour - upstreamToCurrentInterval + 24) % 24;
      const upstreamTargetIndex = getTimeIndex(upstreamTargetHour);
      if (upstreamTargetIndex !== -1) {
        addVerticalLine(0, upstreamTargetIndex, '#5470c6', '反向');
      }
    }
  }

  // 重新设置配置以更新标记线
  myChart.setOption(option);
});

// 鼠标离开时清除所有标记线
myChart.on('mouseout', function () {
  option.series.forEach((series) => {
    series.markLine = { data: [] };
  });
  myChart.setOption(option);
});

// 添加垂直标记线的函数（支持正向/反向标识）
function addVerticalLine(seriesIndex, dataIndex, color, direction) {
  if (!option.series[seriesIndex].markLine) {
    option.series[seriesIndex].markLine = { data: [] };
  }

  let labelText = times[dataIndex];
  if (direction) {
    labelText += `(${direction})`;
  }

  option.series[seriesIndex].markLine.data.push({
    name: '时间标记',
    xAxis: dataIndex,
    lineStyle: {
      color: color,
      type: direction === '反向' ? 'dotted' : 'dashed', // 反向用点线，正向用虚线区分
      width: 2
    },
    label: {
      show: true,
      formatter: labelText,
      color: color
    }
  });
}
};
const changeChart = (chart) => {
state.myChart = chart
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
const onchange1734159936716 = (value,selectValueArr,selectValueItem) => {
// 执行自定义方法
handleMonitorSelect(selectValueItem);
};
const onchange1740100114069 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.upstreamPointCode = selectValueArr;
// 执行自定义方法
handleSectionSelect(value);
};
const onchange1762939705327_1_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.downstreamPointCode = selectValueArr;
// 执行自定义方法
handleSectionSelect(value);
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
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"number","dataValue":0,"defaultValue":"0","description":"1-上游，2-下游","dataKey":"type","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"wisAfvset5"},{"hasVariable":true,"isVariable":true,"dataType":"string","dataValue":"state.params.pointcode","defaultValue":"3507001047","description":"断面编码","dataKey":"pointCode","keySelected":false,"isWatch":false,"variableOptions":["state","params","pointcode"],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"zqYuf6FI9y","children":[]}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POLLUTE_CODE":"state.params.monitor","END_MONITORTIME":"state.params.time.end","START_MONITORTIME":"state.params.time.start","POINT_CODE":"this.pointCode","interfaceId":"state.params.interfaceId"}},
              request: function (type,pointCode, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POLLUTE_CODE":state.params.monitor,"END_MONITORTIME":state.params.time.end,"START_MONITORTIME":state.params.time.start,"POINT_CODE":pointCode,"interfaceId":state.params.interfaceId},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POLLUTE_CODE":state.params.monitor,"END_MONITORTIME":state.params.time.end,"START_MONITORTIME":state.params.time.start,"POINT_CODE":pointCode,"interfaceId":state.params.interfaceId});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLineData'] = res.data;
                
     const chartDataKeyMap = {
  1: {
    series: 'upstreamseriesData',
    standard: 'upstreamStandardSeriesData',
  },
  2: {
    series: 'downstreamseriesData',
    standard: 'downstreamStandardSeriesData',
  },
  0: {
    series: 'seriesData',
    standard: 'standardSeriesData',
  },
}

// 初始化数据
state[chartDataKeyMap[type].series] = [];
state[chartDataKeyMap[type].standard] = [];
state.lineChartOption.yAxis.name = '监测值';
state.lineChartOption.xAxis.data = [];
handleChartAxisLabel();
state.lineChartOption.legend.data = [];

if (res.status === 200 && res?.data?.data?.length) {
  let data = res?.data?.data;

  let dialogType = global.businessDialog.dialogParmas?.dialogType || ''
  if(dialogType === 'autoHour'){
     data = res?.data?.data?.map(item =>{
      return{
        ...item,
        MONITORTIME: item.MONITORTIME.substring(5)
      }
     })
  }

  // 1. 根据选择的日期范围生成完整的时间序列
  const generateTimeSeries = () => {
    let times = [];

    // 解析开始和结束时间
    const startTime = state.params.time.start;
    const endTime = state.params.time.end;

    if (!startTime || !endTime) {
      // 如果没有选择时间范围，则使用接口返回的时间
      const uniqueTimes = [...new Set(data.map(item => handleNoVal(item.MONITORTIME)))];
      return uniqueTimes.sort((a, b) => {
        if (state.dialogType === '3') {
          const aParts = a.split('-');
          const bParts = b.split('-');
          return new Date(aParts[0], aParts[1] - 1) - new Date(bParts[0], bParts[1] - 1);
        }
        return a.localeCompare(b);
      });
    }

    // 根据对话框类型生成时间序列
    let current = new Date(startTime);
    let end = new Date(endTime);
    if (state.dialogType === '3') {
      // 月份范围：2024-11 到 2025-10
      current.setDate(1); // 确保从月初开始
      end.setDate(1);

      while (current <= end) {
        const year = current.getFullYear();
        const month = String(current.getMonth() + 1).padStart(2, '0');
        times.push(`${year}-${month}`);
        current.setMonth(current.getMonth() + 1);
      }
    } else if (state.dialogType === '1') {
      // 日期范围
      while (current <= end) {
        const year = current.getFullYear();
        const month = String(current.getMonth() + 1).padStart(2, '0');
        const day = String(current.getDate()).padStart(2, '0');
        times.push(`${year}-${month}-${day}`);
        current.setDate(current.getDate() + 1);
      }
    } else if (state.dialogType === '2') {
      // 直接从接口数据中提取所有时间点
      const hourTimes = data.map(item => {
        const timeStr = item?.MONITORTIME || ''; // 使用可选链和默认值防止undefined

        // 检查时间字符串是否包含空格
        if (timeStr.includes(' ')) {
          // 分割日期和时间部分
          const [datePart, hourPart] = timeStr.split(' ');

          // 分割日期部分（现在只有月和日）
          const [month, day] = datePart.split('-');

          // 处理小时部分，确保两位数
          const formattedHour = hourPart.padStart(2, '0');

          // 处理月和日，确保两位数并组合成标准格式
          const formattedMonth = month.padStart(2, '0');
          const formattedDay = day.padStart(2, '0');

          // 返回包含当前年份的标准格式
          return `${formattedMonth}-${formattedDay} ${formattedHour}`;
        }

        // 如果不包含空格，直接返回原始字符串（或根据需要处理）
        return timeStr;
      });

      // 去重并排序
      const uniqueTimes = [...new Set(hourTimes)].sort((a, b) => a.localeCompare(b));
      return uniqueTimes;
    }

    return times;
  };

  // 生成完整的时间轴
  const fullTimeSeries = generateTimeSeries();

  // 格式化时间（取月-日-时）
  // fullTimeSeries.forEach((item, index) => {
  //   fullTimeSeries[index] = item.substring(5);
  // });

  state.times = fullTimeSeries;
  console.log('11111state.times', state.times);

  // 2. 按监测点分组，并建立时间-数据的映射
  const pointGroups = {};

  data.forEach((item) => {
    let time = handleNoVal(item.MONITORTIME);
    const pointCode = item.POINT_CODE;
    const value = item.POLLUTEVALUE;

    if (!pointGroups[pointCode]) {
      pointGroups[pointCode] = {
        POINT_CODE: pointCode,
        name: item.POINT_NAME,
        dataMap: {}
      };
    }

    // 存储这个时间点的数据
    pointGroups[pointCode].dataMap[time] = value;
  });

  // 3. 将数据映射到完整时间轴上
  let seriesData = Object.values(pointGroups).map(group => {
    // 为完整时间轴的每个时间点创建对应的数据
    const alignedData = fullTimeSeries.map(time => {
      // 如果该时间点有数据，则使用数据值；否则为 null
      return group.dataMap[time] !== undefined ? parseFloat(group.dataMap[time]) : null;
    });

    return {
      POINT_CODE: group.POINT_CODE,
      name: group.name,
      data: alignedData
    };
  });

  // 4. 处理标准值数据
  const standardLineMap = {
    STANDARD_1: {},
    STANDARD_2: {},
    STANDARD_3: {},
    STANDARD_4: {},
    STANDARD_5: {},
  }

  // 收集标准值数据
  data.forEach((item) => {
    let time = handleNoVal(item.MONITORTIME);
    standardLineMap.STANDARD_1[time] = {
      value: parseFloat(item.STANDARD_1),
      hiddenInTooltip: true,
      wholeTime: item.MONITORTIME,
    };
    standardLineMap.STANDARD_2[time] = {
      value: parseFloat(item.STANDARD_2),
      hiddenInTooltip: true,
      wholeTime: item.MONITORTIME,
    };
    standardLineMap.STANDARD_3[time] = {
      value: parseFloat(item.STANDARD_3),
      hiddenInTooltip: true,
      wholeTime: item.MONITORTIME,
    };
    standardLineMap.STANDARD_4[time] = {
      value: parseFloat(item.STANDARD_4),
      hiddenInTooltip: true,
      wholeTime: item.MONITORTIME,
    };
    standardLineMap.STANDARD_5[time] = {
      value: parseFloat(item.STANDARD_5),
      hiddenInTooltip: true,
      wholeTime: item.MONITORTIME,
    };
  });

  // 5. 更新对应断面的数据
  if (type === 1) {
    state.upstreamseriesData = seriesData;
    console.log('上游断面数据（已对齐）:', state.upstreamseriesData);

    // 上游标准值 - 使用 xAxisIndex: 2（因为是共用x轴，都使用最下面的x轴）
    if (state.params.monitor !== 'W01001') {
      state.upstreamStandardSeriesData = [
        {
          xAxisIndex: 2,
          yAxisIndex: 0,
          ...handleStandardSeries('Ⅰ类标准值', '#8FCDFF'),
          data: fullTimeSeries.map(time => {
            let item = standardLineMap.STANDARD_1[time];
            return item ? item.value : null;
          }),
        },
        {
          xAxisIndex: 2,
          yAxisIndex: 0,
          ...handleStandardSeries('Ⅱ类标准值', '#0280F6'),
          data: fullTimeSeries.map(time => {
            let item = standardLineMap.STANDARD_2[time];
            return item ? item.value : null;
          }),
        },
        {
          xAxisIndex: 2,
          yAxisIndex: 0,
          ...handleStandardSeries('Ⅲ类标准值', '#00DA2A'),
          data: fullTimeSeries.map(time => {
            let item = standardLineMap.STANDARD_3[time];
            return item ? item.value : null;
          }),
        },
        {
          xAxisIndex: 2,
          yAxisIndex: 0,
          ...handleStandardSeries('Ⅳ类标准值', '#F6C200'),
          data: fullTimeSeries.map(time => {
            let item = standardLineMap.STANDARD_4[time];
            return item ? item.value : null;
          }),
        },
        {
          xAxisIndex: 2,
          yAxisIndex: 0,
          ...handleStandardSeries('Ⅴ类标准值', '#FC926A'),
          data: fullTimeSeries.map(time => {
            let item = standardLineMap.STANDARD_5[time];
            return item ? item.value : null;
          }),
        },
      ];
    }
  } else if (type === 2) {
    state.downstreamseriesData = seriesData;
    console.log('下游断面数据（已对齐）:', state.downstreamseriesData);

    // 下游标准值 - 使用 xAxisIndex: 2
    if (state.params.monitor !== 'W01001') {
      state.downstreamStandardSeriesData = [
        {
          xAxisIndex: 2,
          yAxisIndex: 2,
          ...handleStandardSeries('Ⅰ类标准值', '#8FCDFF'),
          data: fullTimeSeries.map(time => {
            let item = standardLineMap.STANDARD_1[time];
            return item ? item.value : null;
          }),
        },
        {
          xAxisIndex: 2,
          yAxisIndex: 2,
          ...handleStandardSeries('Ⅱ类标准值', '#0280F6'),
          data: fullTimeSeries.map(time => {
            let item = standardLineMap.STANDARD_2[time];
            return item ? item.value : null;
          }),
        },
        {
          xAxisIndex: 2,
          yAxisIndex: 2,
          ...handleStandardSeries('Ⅲ类标准值', '#00DA2A'),
          data: fullTimeSeries.map(time => {
            let item = standardLineMap.STANDARD_3[time];
            return item ? item.value : null;
          }),
        },
        {
          xAxisIndex: 2,
          yAxisIndex: 2,
          ...handleStandardSeries('Ⅳ类标准值', '#F6C200'),
          data: fullTimeSeries.map(time => {
            let item = standardLineMap.STANDARD_4[time];
            return item ? item.value : null;
          }),
        },
        {
          xAxisIndex: 2,
          yAxisIndex: 2,
          ...handleStandardSeries('Ⅴ类标准值', '#FC926A'),
          data: fullTimeSeries.map(time => {
            let item = standardLineMap.STANDARD_5[time];
            return item ? item.value : null;
          }),
        },
      ];
    }
  } else {
    state.seriesData = seriesData;
    console.log('当前断面数据（已对齐）:', state.seriesData);
    console.log('时间轴:', fullTimeSeries);
    console.log('数据映射:', seriesData[0]?.data);

    // 当前断面标准值 - 使用 xAxisIndex: 2
    if (state.params.monitor !== 'W01001') {
      state.standardSeriesData = [
        {
          xAxisIndex: 2,
          yAxisIndex: 1,
          ...handleStandardSeries('Ⅰ类标准值', '#8FCDFF'),
          data: fullTimeSeries.map(time => {
            let item = standardLineMap.STANDARD_1[time];
            return item ? item.value : null;
          }),
        },
        {
          xAxisIndex: 2,
          yAxisIndex: 1,
          ...handleStandardSeries('Ⅱ类标准值', '#0280F6'),
          data: fullTimeSeries.map(time => {
            let item = standardLineMap.STANDARD_2[time];
            return item ? item.value : null;
          }),
        },
        {
          xAxisIndex: 2,
          yAxisIndex: 1,
          ...handleStandardSeries('Ⅲ类标准值', '#00DA2A'),
          data: fullTimeSeries.map(time => {
            let item = standardLineMap.STANDARD_3[time];
            return item ? item.value : null;
          }),
        },
        {
          xAxisIndex: 2,
          yAxisIndex: 1,
          ...handleStandardSeries('Ⅳ类标准值', '#F6C200'),
          data: fullTimeSeries.map(time => {
            let item = standardLineMap.STANDARD_4[time];
            return item ? item.value : null;
          }),
        },
        {
          xAxisIndex: 2,
          yAxisIndex: 1,
          ...handleStandardSeries('Ⅴ类标准值', '#FC926A'),
          data: fullTimeSeries.map(time => {
            let item = standardLineMap.STANDARD_5[time];
            return item ? item.value : null;
          }),
        },
      ];
    }
  }

  // 只更新第3个x轴（gridIndex: 2），前两个x轴不显示标签
  state.lineChartOption.xAxis = [
    {
      type: 'category',
      data: fullTimeSeries,
      gridIndex: 0, // 上游图表区域
      splitLine: { show: false },
      "axisLabel": {
        "show": false // 不显示标签
      },
      "axisLine": { show: false },
      "axisTick": { show: false },
      "nameTextStyle": {
        "color": "rgba(255, 255, 255, 0.7)",
        "fontSize": 13
      },
      boundaryGap: false,
    },
    {
      type: 'category',
      data: fullTimeSeries,
      gridIndex: 1, // 当前图表区域
      splitLine: { show: false },
      "axisLabel": {
        "show": false // 不显示标签
      },
      "axisLine": { show: false },
      "axisTick": { show: false },
      "nameTextStyle": {
        "color": "rgba(255, 255, 255, 0.7)",
        "fontSize": 13
      },
      boundaryGap: false,
    },
    {
      type: 'category',
      data: fullTimeSeries,
      gridIndex: 2,
      splitLine: { show: false },
      "axisLabel": {
        "color": "rgba(255, 255, 255, 0.8)",
        "fontSize": 13,
        rotate: 20
      },
      "axisLine": { show: false },
      "axisTick": { show: false },
      "nameTextStyle": {
        "color": "rgba(255, 255, 255, 0.7)",
        "fontSize": 13
      },
      boundaryGap: false,
    }
  ];

  // 7. 更新tooltip formatter
  state.lineChartOption.tooltip = {
    "trigger": "axis",
    "backgroundColor": "rgba(0, 0, 0, 0.8)",
    "borderColor": "rgba(255, 255, 255, 0.5)",
   "textStyle": {
        "color": "rgba(255, 255, 255, 1)",
        "fontSize": parseInt(getComputedStyle(document.body).getPropertyValue('--business-text-size-14')) || 14
      },
    formatter: function (params) {
      const timeIndex = params[0].dataIndex;
      let time = params[0].axisValue;

      let res = `<strong>时间: ${time}</strong><br/><br/>`;

      state.upstreamseriesData.forEach((d) => {
        const value = d.data[timeIndex];
        res += `上游断面-${d.name}: ${value !== null ? value : '--'}<br/>`;
      })

      state.seriesData.forEach((d) => {
        const value = d.data[timeIndex];
        res += `当前断面: ${value !== null ? value : '--'}<br/>`;
      })

      state.downstreamseriesData.forEach((d) => {
        const value = d.data[timeIndex];
        res += `下游断面-${d.name}: ${value !== null ? value : '--'}<br/>`;
      })

      return res;
    }
  };

  // 8. 更新图例数据
  const legendData = [];
  state.seriesData.forEach((item) => {
    legendData.push({
      name: item.name,
      icon: 'rect',
    });
  });
  state.upstreamseriesData.forEach((item) => {
    legendData.push({
      name: item.name,
      icon: 'rect',
    });
  });
  state.downstreamseriesData.forEach((item) => {
    legendData.push({
      name: item.name,
      icon: 'rect',
    });
  });

  state.lineChartOption.legend.data = filterRepeatData(legendData, 'name');
  console.log('state.lineChartOption', state.lineChartOption);
}
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
    const defaultCode = 'W01009';
    const defaultItem = state.options.monitor.find((m) => m?.value === defaultCode);
    const selected = defaultItem || state.options.monitor[0];
    state.params.monitor = selected?.value || "";
    state.showUnit = state.params.monitor === 'ph' ? false : true
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
                
     // state.options.section = [];
state.params.section = [];
if (res.data.head.statusCode === '200' && res.data?.data?.length) {
  state.options.section = res.data.data.map(i => ({
    "value": i.POINT_CODE,
    "label": i.POINT_NAME,
    "disabled": false,
    // 断面类型 上游-1  下游-2
    type: i.ALONG_POINT_LOCATION,
  }));

  // 上游断面下拉选项数据
  state.upstreamSelectOptions = state.options.section.filter((item) => item.type === '1');
  // 下游断面下拉选项数据
  state.downstreamSelectOptions = state.options.section.filter((item) => item.type === '2');

  if (!state.upstreamPointCode && state.upstreamSelectOptions?.length) {
    // 上游断面编码
    state.upstreamPointCode = [state.upstreamSelectOptions[0].value];
  }
  if (!state.downstreamPointCode && state.downstreamSelectOptions?.length) {
    // 下游断面编码
    state.downstreamPointCode = [state.downstreamSelectOptions[0].value];
  }


  state.params.section.push(state.params.pointcode);

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
                            setPageScale('t-l-c-DwfxSkdwfx', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-DwfxSkdwfx', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
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
 const tChartDesignx0x0ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x0.default, componentState.tChartDesignx0x0?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tColx0x1x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x0.default, componentState.tColx0x1x0?.[state.screenSize]));

 const tTextx0x1x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x0x0.default, componentState.tTextx0x1x0x0?.[state.screenSize]));

 const tDatePickerx0x1x0x1ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x1x0x1.default, componentState.tDatePickerx0x1x0x1?.[state.screenSize]));

 const tDatePickerx0x1x0x2ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x1x0x2.default, componentState.tDatePickerx0x1x0x2?.[state.screenSize]));

 const tDatePickerx0x1x0x3ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x1x0x3.default, componentState.tDatePickerx0x1x0x3?.[state.screenSize]));

 const tColx0x1x1ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1.default, componentState.tColx0x1x1?.[state.screenSize]));

 const tTextx0x1x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x1x0.default, componentState.tTextx0x1x1x0?.[state.screenSize]));

 const tSelectx0x1x1x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x1x1x1.default, componentState.tSelectx0x1x1x1?.[state.screenSize]));

 const tRowx0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x2.default, componentState.tRowx0x2?.[state.screenSize]));

 const tColx0x2x0ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0.default, componentState.tColx0x2x0?.[state.screenSize]));

 const tTextCommonx0x2x0x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x2x0x0.default, componentState.tTextCommonx0x2x0x0?.[state.screenSize]));

 const tColx0x2x1ComputedData = computed(() => _.merge({}, componentState.tColx0x2x1.default, componentState.tColx0x2x1?.[state.screenSize]));

 const tTextx0x2x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x2x1x0.default, componentState.tTextx0x2x1x0?.[state.screenSize]));

 const tSelectx0x2x1x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x2x1x1.default, componentState.tSelectx0x2x1x1?.[state.screenSize]));

 const tColx0x2x2ComputedData = computed(() => _.merge({}, componentState.tColx0x2x2.default, componentState.tColx0x2x2?.[state.screenSize]));

 const tTextx0x2x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x2x2x0.default, componentState.tTextx0x2x2x0?.[state.screenSize]));

 const tSelectx0x2x2x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x2x2x1.default, componentState.tSelectx0x2x2x1?.[state.screenSize]));

 const tColx0x2x3ComputedData = computed(() => _.merge({}, componentState.tColx0x2x3.default, componentState.tColx0x2x3?.[state.screenSize]));

 const tTextx0x2x3x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x2x3x0.default, componentState.tTextx0x2x3x0?.[state.screenSize]));

 const tSwitchx0x2x3x1ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x2x3x1.default, componentState.tSwitchx0x2x3x1?.[state.screenSize]));

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
tChartDesignx0x0ComputedData,
tRowx0x1ComputedData,
tColx0x1x0ComputedData,
tTextx0x1x0x0ComputedData,
tDatePickerx0x1x0x1ComputedData,
tDatePickerx0x1x0x2ComputedData,
tDatePickerx0x1x0x3ComputedData,
tColx0x1x1ComputedData,
tTextx0x1x1x0ComputedData,
tSelectx0x1x1x1ComputedData,
tRowx0x2ComputedData,
tColx0x2x0ComputedData,
tTextCommonx0x2x0x0ComputedData,
tColx0x2x1ComputedData,
tTextx0x2x1x0ComputedData,
tSelectx0x2x1x1ComputedData,
tColx0x2x2ComputedData,
tTextx0x2x2x0ComputedData,
tSelectx0x2x2x1ComputedData,
tColx0x2x3ComputedData,
tTextx0x2x3x0ComputedData,
tSwitchx0x2x3x1ComputedData,
ongetChartInstance1763191439325,
ondateChange1735539087143_0_0,
ondateChange1734160159774,
ondateChange1735539103868_0_0,
onchange1734159936716,
onchange1740100114069,
onchange1762939705327_1_0,
onchange1734160214280,
};
},
}
</script>

<style scoped>
.t-l-c-DwfxSkdwfx {
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
.t-l-c-DwfxSkdwfx .DwfxSkdwfx-t-chart-design-0-0 {
position: absolute !important;
top: 65px;
left: 0px;
width: 100%;
height: calc(100% - 65px);
pointer-events: auto;
}

.t-l-c-DwfxSkdwfx .DwfxSkdwfx-t-row-0-1 {
position: absolute !important;
top: 9px;
left: 0px;
width: 100%;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-DwfxSkdwfx .DwfxSkdwfx-t-col-0-1-0 {
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

.t-l-c-DwfxSkdwfx .DwfxSkdwfx-t-text-0-1-0-0 {
position: unset;
top: 18px;
left: 16px;
width: auto;
height: 14px;
pointer-events: auto;
}

.t-l-c-DwfxSkdwfx .DwfxSkdwfx-t-date-picker-0-1-0-1 {
position: unset;
top: 9px;
left: 80px;
width: auto;
height: 32px;
pointer-events: auto;
}

.t-l-c-DwfxSkdwfx .DwfxSkdwfx-t-date-picker-0-1-0-2 {
position: unset;
top: 9px;
left: 80px;
width: auto;
height: 32px;
pointer-events: auto;
}

.t-l-c-DwfxSkdwfx .DwfxSkdwfx-t-date-picker-0-1-0-3 {
position: unset;
top: 9px;
left: 80px;
width: auto;
height: 32px;
pointer-events: auto;
}

.t-l-c-DwfxSkdwfx .DwfxSkdwfx-t-col-0-1-1 {
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

.t-l-c-DwfxSkdwfx .DwfxSkdwfx-t-text-0-1-1-0 {
position: unset;
top: 18px;
left: 641px;
width: auto;
height: 14px;
pointer-events: auto;
}

.t-l-c-DwfxSkdwfx .DwfxSkdwfx-t-select-0-1-1-1 {
position: unset;
top: 9px;
left: 705px;
width: 118px;
height: 33px;
pointer-events: auto;
}

.t-l-c-DwfxSkdwfx .DwfxSkdwfx-t-row-0-2 {
position: absolute !important;
top: 60px;
left: 0px;
width: 100%;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-DwfxSkdwfx .DwfxSkdwfx-t-col-0-2-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: end;
}

.t-l-c-DwfxSkdwfx .DwfxSkdwfx-t-text-common-0-2-0-0 {
position: unset;
top: 66px;
left: 15px;
width: 113px;
height: 20px;
pointer-events: auto;
}

.t-l-c-DwfxSkdwfx .DwfxSkdwfx-t-col-0-2-1 {
position: relative;
top: null;
left: null;
width: 100px;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
gap: auto;
}

.t-l-c-DwfxSkdwfx .DwfxSkdwfx-t-text-0-2-1-0 {
position: unset;
top: 69px;
left: 127px;
width: auto;
height: 14px;
pointer-events: auto;
}

.t-l-c-DwfxSkdwfx .DwfxSkdwfx-t-select-0-2-1-1 {
position: unset;
top: 60px;
left: 202px;
width: 200px;
height: 33px;
pointer-events: auto;
}

.t-l-c-DwfxSkdwfx .DwfxSkdwfx-t-col-0-2-2 {
position: relative;
top: null;
left: null;
width: 100px;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
gap: auto;
}

.t-l-c-DwfxSkdwfx .DwfxSkdwfx-t-text-0-2-2-0 {
position: unset;
top: 69px;
left: 420px;
width: auto;
height: 14px;
pointer-events: auto;
}

.t-l-c-DwfxSkdwfx .DwfxSkdwfx-t-select-0-2-2-1 {
position: unset;
top: 60px;
left: 504px;
width: 200px;
height: 33px;
pointer-events: auto;
}

.t-l-c-DwfxSkdwfx .DwfxSkdwfx-t-col-0-2-3 {
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

.t-l-c-DwfxSkdwfx .DwfxSkdwfx-t-text-0-2-3-0 {
position: unset;
top: 65px;
left: 726px;
width: auto;
height: 22px;
pointer-events: auto;
}

.t-l-c-DwfxSkdwfx .DwfxSkdwfx-t-switch-0-2-3-1 {
position: unset;
top: 65px;
left: 791px;
width: 32px;
height: 22px;
pointer-events: auto;
}
</style>
