<template>
  <div id="t-l-c-airOverviewMajorChangeTrent" class="t-l-c-airOverviewMajorChangeTrent" ><t-rect id="t-rect-1ed3.40a5529d7" class="airOverviewMajorChangeTrent-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-radio id="t-radio-142a.965ced54e" class="airOverviewMajorChangeTrent-t-radio-0-1"  :options="replaceCssVariables(filterData(state.pullutionList, componentPropBindingMap?.['t-radio-142a.965ced54e']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active="replaceCssVariables(filterData(state.pollutorType, componentPropBindingMap?.['t-radio-142a.965ced54e']['active'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tRadiox0x1ComputedData.alias" :disabled="tRadiox0x1ComputedData.disabled" :border="tRadiox0x1ComputedData.border" :size="tRadiox0x1ComputedData.size" :is-use-button="tRadiox0x1ComputedData.isUseButton" :c-style="tRadiox0x1ComputedData.cStyle" @change="onchange1736339431871_0_0"></t-radio><t-chart-design id="t-chart-design-29e6.e0c4eea55" class="airOverviewMajorChangeTrent-t-chart-design-0-2"  :empty-img="tChartDesignx0x2ComputedData.emptyImg" :c-style="tChartDesignx0x2ComputedData.cStyle" :options="replaceCssVariables(filterData(state.options, componentPropBindingMap?.['t-chart-design-29e6.e0c4eea55']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-chart-design><t-row id="t-row-1b66.972977f4d" class="airOverviewMajorChangeTrent-t-row-0-3"  :c-style="tRowx0x3ComputedData.cStyle" :gutter="tRowx0x3ComputedData.gutter" :justify="tRowx0x3ComputedData.justify" :align="tRowx0x3ComputedData.align"><t-col id="t-col-0f51.0f72f3c6b" class="airOverviewMajorChangeTrent-t-col-0-3-0"  :span="tColx0x3x0ComputedData.span" :offset="tColx0x3x0ComputedData.offset" :push="tColx0x3x0ComputedData.push" :pull="tColx0x3x0ComputedData.pull" :c-style="tColx0x3x0ComputedData.cStyle"><t-select id="t-select-f6b7.8acf0dad9" class="airOverviewMajorChangeTrent-t-select-0-3-0-0"  :active-value="replaceCssVariables(filterData(state.type, componentPropBindingMap?.['t-select-f6b7.8acf0dad9']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x3x0x0ComputedData.options" :alias="tSelectx0x3x0x0ComputedData.alias" :multiple="tSelectx0x3x0x0ComputedData.multiple" :placeholder="tSelectx0x3x0x0ComputedData.placeholder" :clearable="tSelectx0x3x0x0ComputedData.clearable" :disabled="tSelectx0x3x0x0ComputedData.disabled" :name="tSelectx0x3x0x0ComputedData.name" :autocomplete="tSelectx0x3x0x0ComputedData.autocomplete" :filterable="tSelectx0x3x0x0ComputedData.filterable" :no-match-text="tSelectx0x3x0x0ComputedData.no-match-text" :no-data-text="tSelectx0x3x0x0ComputedData.no-data-text" :c-style="tSelectx0x3x0x0ComputedData.cStyle" @change="onchange1736338965960"></t-select><t-tree v-if="state.type === 'point'" id="t-tree-afc7.53f1ca3aa" class="airOverviewMajorChangeTrent-t-tree-0-3-0-1"  :data="replaceCssVariables(filterData(state.pointTreeList, componentPropBindingMap?.['t-tree-afc7.53f1ca3aa']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :show-all-nodes="tTreex0x3x0x1ComputedData.showAllNodes" :checked-nodes="replaceCssVariables(filterData(state.pointSelectList, componentPropBindingMap?.['t-tree-afc7.53f1ca3aa']['checkedNodes'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :border-color="tTreex0x3x0x1ComputedData.borderColor" :is-checkbox="tTreex0x3x0x1ComputedData.isCheckbox" :empty-text="tTreex0x3x0x1ComputedData.emptyText" :node-key="tTreex0x3x0x1ComputedData.nodeKey" :props="tTreex0x3x0x1ComputedData.props" :effect="tTreex0x3x0x1ComputedData.effect" :placement="tTreex0x3x0x1ComputedData.placement" :show-after="tTreex0x3x0x1ComputedData.showAfter" :c-style="tTreex0x3x0x1ComputedData.cStyle" @data-change="ondataChange1773825225238_0_0" @check="oncheck1773886246384"></t-tree></t-col><t-col id="t-col-bb2d.d7ece6959" class="airOverviewMajorChangeTrent-t-col-0-3-1"  :span="tColx0x3x1ComputedData.span" :offset="tColx0x3x1ComputedData.offset" :push="tColx0x3x1ComputedData.push" :pull="tColx0x3x1ComputedData.pull" :c-style="tColx0x3x1ComputedData.cStyle"><t-tabs id="t-tabs-ddf5.6e7fa10e6" class="airOverviewMajorChangeTrent-t-tabs-0-3-1-0"  :alias="tTabsx0x3x1x0ComputedData.alias" :data="tTabsx0x3x1x0ComputedData.data" :active-tab="replaceCssVariables(filterData(state.timeType, componentPropBindingMap?.['t-tabs-ddf5.6e7fa10e6']['activeTab'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :tab-position-extend="tTabsx0x3x1x0ComputedData.tabPositionExtend" :stretch="tTabsx0x3x1x0ComputedData.stretch" :c-style="tTabsx0x3x1x0ComputedData.cStyle" @tab-click="ontabClick1734922371592"></t-tabs></t-col><t-col id="t-col-c485.072d27785" class="airOverviewMajorChangeTrent-t-col-0-3-2"  :span="tColx0x3x2ComputedData.span" :offset="tColx0x3x2ComputedData.offset" :push="tColx0x3x2ComputedData.push" :pull="tColx0x3x2ComputedData.pull" :c-style="tColx0x3x2ComputedData.cStyle"><t-date-picker v-if="state.timeType === 'hour'" id="t-date-picker-1f8d.a408db453" class="airOverviewMajorChangeTrent-t-date-picker-0-3-2-0"  :placeholder="tDatePickerx0x3x2x0ComputedData.placeholder" :start-placeholder="tDatePickerx0x3x2x0ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x3x2x0ComputedData.endPlaceholder" :type="tDatePickerx0x3x2x0ComputedData.type" :clearable="tDatePickerx0x3x2x0ComputedData.clearable" :range-separator="tDatePickerx0x3x2x0ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeValue, componentPropBindingMap?.['t-date-picker-1f8d.a408db453']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x3x2x0ComputedData.separator" :c-style="tDatePickerx0x3x2x0ComputedData.cStyle" :is-disabled-front="tDatePickerx0x3x2x0ComputedData.isDisabledFront" :disabled-date="replaceCssVariables(filterData(state.maxTimeValue, componentPropBindingMap?.['t-date-picker-1f8d.a408db453']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @date-change="ondateChange1736852714116_0_0"></t-date-picker><t-date-picker v-if="state.timeType === 'day'" id="t-date-picker-a466.02859cc6c" class="airOverviewMajorChangeTrent-t-date-picker-0-3-2-1"  :placeholder="tDatePickerx0x3x2x1ComputedData.placeholder" :start-placeholder="tDatePickerx0x3x2x1ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x3x2x1ComputedData.endPlaceholder" :type="tDatePickerx0x3x2x1ComputedData.type" :clearable="tDatePickerx0x3x2x1ComputedData.clearable" :range-separator="tDatePickerx0x3x2x1ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeValue, componentPropBindingMap?.['t-date-picker-a466.02859cc6c']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x3x2x1ComputedData.separator" :c-style="tDatePickerx0x3x2x1ComputedData.cStyle" :is-disabled-front="tDatePickerx0x3x2x1ComputedData.isDisabledFront" :disabled-date="replaceCssVariables(filterData(state.maxTimeValue, componentPropBindingMap?.['t-date-picker-a466.02859cc6c']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @date-change="ondateChange1763605800578_0_0"></t-date-picker></t-col></t-row></div>
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
import { TChartDesign, TCol, TDatePicker, TRadio, TRect, TRow, TSelect, TTabs, TTree } from '@ths/design';

export default {
  components: {
    TChartDesign,
    TCol,
    TDatePicker,
    TRadio,
    TRect,
    TRow,
    TSelect,
    TTabs,
    TTree,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-1ed3.40a5529d7":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-radio-142a.965ced54e":{"attributeName":"tRadiox0x1","options":{"filters":[]},"active":{"filters":[]},"alias":{"filters":[]},"disabled":{"filters":[]},"border":{"filters":[]},"size":{"filters":[]},"isUseButton":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-design-29e6.e0c4eea55":{"attributeName":"tChartDesignx0x2","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-row-1b66.972977f4d":{"attributeName":"tRowx0x3","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-0f51.0f72f3c6b":{"attributeName":"tColx0x3x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-select-f6b7.8acf0dad9":{"attributeName":"tSelectx0x3x0x0","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-tree-afc7.53f1ca3aa":{"attributeName":"tTreex0x3x0x1","data":{"filters":[]},"showAllNodes":{"filters":[]},"checkedNodes":{"filters":[]},"borderColor":{"filters":[]},"isCheckbox":{"filters":[]},"emptyText":{"filters":[]},"nodeKey":{"filters":[]},"props":{"filters":[]},"effect":{"filters":[]},"placement":{"filters":[]},"showAfter":{"filters":[]},"cStyle":{"filters":[]}},"t-col-bb2d.d7ece6959":{"attributeName":"tColx0x3x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-ddf5.6e7fa10e6":{"attributeName":"tTabsx0x3x1x0","alias":{"filters":[]},"data":{"filters":[]},"activeTab":{"filters":[]},"tabPositionExtend":{"filters":[]},"stretch":{"filters":[]},"cStyle":{"filters":[]}},"t-col-c485.072d27785":{"attributeName":"tColx0x3x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-1f8d.a408db453":{"attributeName":"tDatePickerx0x3x2x0","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-date-picker-a466.02859cc6c":{"attributeName":"tDatePickerx0x3x2x1","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}}};
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
   tempPointSelectList: [],
   selectPoints: "",
   pointSourceList: [],
   pullutionList: [{"label":"AQI","value":"AQI"},{"label":"PM₂.₅","value":"PM25"},{"label":"PM₁₀","value":"PM10"},{"label":"SO₂","value":"SO2"},{"label":"NO₂","value":"NO2"},{"label":"CO","value":"CO"},{"label":"O₃","value":"O3"},{"label":"O₃-8h","value":"O3_8"}],
   echartsData: "",
   regionCode: "",
   parentRegionCode: "",
   pointType: "",
   pollutionRadioList: [{"label":"AQI","value":"AQI"},{"label":"PM₂.₅","value":"PM25","disabled":false},{"label":"PM₁₀","value":"PM10","disabled":false},{"label":"SO₂","value":"SO2","disabled":false},{"label":"NO₂","value":"NO2"},{"label":"NO","value":"NO"},{"label":"CO","value":"CO"},{"label":"O₃","value":"O3"},{"label":"O₃-8h","value":"O3_8"},{"label":"PM₂.₅/PM₁₀","value":"PM25/PM10"},{"label":"PM₂.₅/CO","value":"PM25/CO"},{"label":"(PM₁₀-PM₂.₅)/PM₁₀","value":"(PM10-PM25)/PM10"}],
   isGkzdDay: false,
   isFsDay: false,
   isGkzdHour: false,
   isFsHour: false,
   startTime: "",
   endTime: "",
   isSiteMinutes: false,
   zsjOptions: {},
   zsjTimeType: "",
   timeOutSide: "",
   maxTimeValue: "",
   areaType: "",
   gkzdTimeType: "datetimehour",
   timeFSValue: [],
   timeValueHourGK: [],
   timeValueDay: "",
   timeType: "hour",
   timeValue: "",
   gkzdTimeValue: "48h",
   foshanTimeValue: "48h",
   gkzdTabs: "PM25",
   baseOptions: {},
   gkzdHourslist: [],
   fsHoursList: [{"name":"PM25","time":[],"data":[]},{"name":"PM10","time":[],"data":[]},{"name":"SO2","time":[],"data":[]},{"name":"NO2","time":[],"data":[]},{"name":"NO","time":[],"data":[]},{"name":"CO","time":[],"data":[]},{"name":"O3","time":[],"data":[]},{"name":"NO3","time":[],"data":[]},{"name":"O3-8h","time":[],"data":[]}],
   pageTitle: "主要污染物变化趋势",
   unit: "ug/m³",
   type: "province",
   options: [],
   countryControlSite: [{"name":"湾梁","dataKey":"site1","style":{"lineStyle":{"width":2},"symbol":"none"}},{"name":"华材职中","dataKey":"site2","style":{"lineStyle":{"width":2},"symbol":"none"}},{"name":"南海气象局","dataKey":"site3","style":{"lineStyle":{"width":2},"symbol":"none"}},{"name":"顺德苏岗","dataKey":"site4","style":{"lineStyle":{"width":2},"symbol":"none"}},{"name":"容桂街道办","dataKey":"site5","style":{"lineStyle":{"width":2},"symbol":"none"}},{"name":"高明孔堂","dataKey":"site6","style":{"lineStyle":{"width":2},"symbol":"none"}},{"name":"三水监测站","dataKey":"site7","style":{"lineStyle":{"width":2},"symbol":"none"}},{"name":"三水云东海","dataKey":"site8","style":{"lineStyle":{"width":2},"symbol":"none"}}],
   changeTrentData: [{"monitorTime":"07-01","site1":23,"site2":93,"site3":23,"site4":23,"site5":23,"site6":23,"site7":23,"site8":23},{"monitorTime":"07-02","site1":23,"site2":43,"site3":23,"site4":23,"site5":23,"site6":23,"site7":23,"site8":23},{"monitorTime":"07-03","site1":63,"site2":29,"site3":53,"site4":23,"site5":23,"site6":23,"site7":23,"site8":23}],
   pollutorType: "PM25",
   gkzdTabList: [{"label":"AQI","value":"AQI"},{"label":"PM₂.₅","value":"PM25","disabled":false},{"label":"PM₁₀","value":"PM10","disabled":false},{"label":"SO₂","value":"SO2","disabled":false},{"label":"NO₂","value":"NO2"},{"label":"NO","value":"NO"},{"label":"CO","value":"CO"},{"label":"O₃","value":"O3"},{"label":"O₃-8h","value":"O3_8"}],
   zsjHoursList: [{"name":"PM25","time":[],"data":[]},{"name":"PM10","time":[],"data":[]},{"name":"SO2","time":[],"data":[]},{"name":"NO2","time":[],"data":[]},{"name":"NO","time":[],"data":[]},{"name":"CO","time":[],"data":[]},{"name":"O3","time":[],"data":[]},{"name":"NO3","time":[],"data":[]},{"name":"O3-8h","time":[],"data":[]}],
   pointTreeList: [],
   pointSelectList: [],
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
            default: {"width":"100%","height":"100%","position":"unset","left":"0px","top":"0px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px Solid rgba(0,0,0,1)","borderTop":"1px Solid rgba(0,0,0,1)","borderRight":"1px Solid rgba(0,0,0,1)","borderBottom":"1px Solid rgba(0,0,0,1)","animationName":"","borderDirection":"all","border":"unset !important"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","position":"unset","left":"0px","top":"0px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px Solid rgba(0,0,0,1)","borderTop":"1px Solid rgba(0,0,0,1)","borderRight":"1px Solid rgba(0,0,0,1)","borderBottom":"1px Solid rgba(0,0,0,1)","animationName":"","borderDirection":"all","border":"unset !important"}}}, 
 },
},
tRadiox0x1: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justify-content":"center","width":"954px","height":"30px","justifyContent":"flex-start","flexDirection":"row","gap":"auto"},
            
            },
 default: { 
 
options:[{"label":"AQI","value":"AQI"},{"label":"PM₂.₅","value":"PM25"},{"label":"PM₁₀","value":"PM10"},{"label":"SO₂","value":"SO2"},{"label":"NO₂","value":"NO2"},{"label":"CO","value":"CO"},{"label":"O₃","value":"O3"},{"label":"O₃-8h","value":"O3_8"}],
active:"PM25",
alias:{"label":"value","value":"label","disabled":"disabled"},
disabled:false,
border:false,
size:"small",
isUseButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justify-content":"center","width":"954px","height":"30px","justifyContent":"flex-start","flexDirection":"row","gap":"auto"}},"itemWrapper":{"default":{"padding":0,"margin":0,"justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","gap":"10px","marginRight":"10px"}},"label":{"default":{"--t-radio-disabled-text-color":"#fff","padding":0,"color":"var(--t-font-color-gy1) !important","background":"unset","backgroundClip":"unset","fontSize":"var(--text-size-14)","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","width":"auto","height":"","lineHeight":"var(--text-size-14)"},"hover":{"--t-radio-disabled-text-color":"#fff","color":"var(--t-font-color-gy1)","background":"unset","backgroundClip":"unset","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)"},"active":{"--t-radio-disabled-text-color":"#fff","color":"var(--t-font-color-gy1)","background":"unset","backgroundClip":"unset","backgroundColor":"","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)"},"disabled":{"--t-radio-disabled-text-color":"#fff","color":"#fff"}},"radioBorder":{"default":{"background":"rgba(255, 255, 255, 1)","width":"12px","height":"12px","border":"auto !important","borderTop":"1px Solid var(--business-radio-border-color)","borderLeft":"1px Solid var(--business-radio-border-color)","borderBottom":"1px Solid var(--business-radio-border-color)","borderRight":"1px Solid var(--business-radio-border-color)"},"hover":{"borderLeft":"1px solid var(--t-radio-hover-border-color)","borderTop":"1px solid var(--t-radio-hover-border-color)","borderRight":"1px solid var(--t-radio-hover-border-color)","borderBottom":"1px solid var(--t-radio-hover-border-color)"},"active":{"border":"auto !important","borderTop":"1px Solid var(--t-radio-active-border-color)","borderLeft":"1px Solid var(--t-radio-active-border-color)","borderBottom":"1px Solid var(--t-radio-active-border-color)","borderRight":"1px Solid var(--t-radio-active-border-color)"}},"circle":{"default":{"background":"var(--t-radio-bg-color)","width":"4px","height":"4px","fillType":"color","backgroundColor":"","color":"","borderLeft":"0px solid var(--targer-btn-bg)","borderTop":"0px solid var(--targer-btn-bg)","borderRight":"0px solid var(--targer-btn-bg)","borderBottom":"0px solid var(--targer-btn-bg)"},"active":{"background":"var(--t-radio-active-bg-color)","fillType":"color","backgroundColor":"var(--area-font-active-color)","color":"var(--area-font-active-color)"}},"radioButton":{"default":{"width":"px","height":"px","background":"rgba(255, 255, 255, 1)","border":"auto !important","borderTop":"1px Solid var(--t-radio-button-border-color)","borderLeft":"0px Solid var(--t-radio-button-border-color)","borderBottom":"1px Solid var(--t-radio-button-border-color)","borderRight":"1px Solid var(--t-radio-button-border-color)"},"active":{"background":"var(--t-radio-button-active-bg-color)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","fillType":"color"}},"radioButtonText":{"default":{"textAlign":"center","border":"unset","color":"var(--t-radio-button-color)","background":"unset","backgroundClip":"unset"},"active":{"color":"var(--t-radio-button-active-color)","border":"unset"},"hover":{"color":"var(--t-radio-button-hover-color)"}},"itemFirstWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"0px","borderBottomRightRadius":"0px","borderBottomLeftRadius":"4px","border":"auto !important","borderTop":"1px Solid var(--t-radio-button-border-color)","borderLeft":"1px Solid var(--t-radio-button-border-color)","borderBottom":"1px Solid var(--t-radio-button-border-color)","borderRight":"1px Solid var(--t-radio-button-border-color)"}},"itemLastWrapper":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"0px"}}}, 
 },
},
tChartDesignx0x2: {
defaultStyle: {
            default: {"height":"calc(100% - 100px)","width":"calc(100% - 40px)","left":"18px","top":"90px","position":"unset","animationName":""},
            
            },
 default: { 
 
emptyImg:"assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"calc(100% - 100px)","width":"calc(100% - 40px)","left":"18px","top":"90px","position":"unset","animationName":""}},"emptyText":{"default":{"color":"var(--business-no-data-color)","fontSize":"14px"}},"label":{"active":{"width":"100%","height":"100%"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, [])), 
 },
},
tRowx0x3: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"10px","gap":"auto"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"10px","gap":"auto"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x3x0: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"space-between","alignItems":"center","paddingLeft":"32px","gap":"auto"},
            
            },
 default: { 
 
span:10,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"space-between","alignItems":"center","paddingLeft":"32px","gap":"auto"}}}, 
 },
},
tSelectx0x3x0x0: {
defaultStyle: {
            default: {"width":"150px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},
            
            },
 default: { 
 
activeValue:"province",
options:[{"label":"省内对比","value":"province"},{"label":"市内对比","value":"city"},{"label":"站点对比","value":"point"}],
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
cStyle:{"wrapper":{"default":{"width":"150px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tTreex0x3x0x1: {
defaultStyle: {
            default: {"width":"200px","height":"34px","backgroundColor":"var(--business-show-bg30)","color":"var(--business-white)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","max-height":"none","overflow":"visible","animationName":"","position":"unset","left":"622px","top":"65px","fontSize":"var(--business-text-size-14)","min-height":"34px"},
            
            },
 default: { 
 
data:[],
showAllNodes:false,
checkedNodes:[],
borderColor:"",
isCheckbox:true,
emptyText:"暂无数据",
nodeKey:"id",
props:{"label":"label","children":"children","disabled":"disabled"},
effect:"dark",
placement:"right",
showAfter:800,
cStyle:{"wrapper":{"default":{"width":"200px","height":"34px","backgroundColor":"var(--business-show-bg30)","color":"var(--business-white)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","max-height":"none","overflow":"visible","animationName":"","position":"unset","left":"622px","top":"65px","fontSize":"var(--business-text-size-14)","min-height":"34px"}},"searchWrapper":{"default":{"width":"362px","height":"auto","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","top":"0","position":"static","fontSize":"var(--business-text-size-14)"}},"contentWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","color":"var(--business-white)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","height":"auto","width":"377px","overflow":"auto","max-height":"600px"}},"nodeText":{"default":{"color":"var(--business-white)","backgroundColor":"","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-theme)"}},"treeNodeWrapper":{"hover":{"backgroundColor":"var(--business-show-bg15) !important","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","color":"var(--business-theme)"},"active":{"backgroundColor":"var(--business-show-bg30) !important"},"default":{"backgroundColor":"var(--business-dialog-bg) !important"}},"checkBoxWrapper":{"default":{"backgroundColor":"var(--left-menu-checkbox-border)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderLeft":"1px solid rgba(1,120,128,1)","borderTop":"1px solid rgba(1,120,128,1)","borderRight":"1px solid rgba(1,120,128,1)","borderBottom":"1px solid rgba(1,120,128,1)"},"active":{"backgroundColor":"var(--left-menu-checkbox-bg)"}},"dataEchoWrapper":{"default":{"borderLeft":"0px solid rgb(23,62,228)","borderTop":"0px solid rgb(23,62,228)","borderRight":"0px solid rgb(23,62,228)","borderBottom":"0px solid rgb(23,62,228)","backgroundColor":"","paddingLeft":"8px"}},"placeholder":{"default":{"color":"var(--business-white)","backgroundColor":"","fontSize":"var(--business-text-size-14)"}},"treeConWrapper":{"default":{"maxHeight":"500px","minHeight":"200px","backgroundColor":"var(--business-dialog-bg)"}},"controlButton":{"default":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"nodeIconWrapper":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundColor":""}}}, 
 },
},
tColx0x3x1: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"},
            
            },
 default: { 
 
span:4,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tTabsx0x3x1x0: {
defaultStyle: {
            default: {"width":"125px","height":"32px","top":"19px","left":"496px","position":"unset","animationName":""},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[{"label":"小时","name":"hour"},{"label":"日","name":"day"}],
activeTab:"hour",
tabPositionExtend:"top-start",
stretch:true,
cStyle:{"wrapper":{"default":{"width":"125px","height":"32px","top":"19px","left":"496px","position":"unset","animationName":""}},"itemWrapper":{"default":{"color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)","borderLeft":"1px solid var(--business-text-avianize)","marginLeft":"-1px","width":"auto","paddingLeft":"0px","paddingRight":"0px"},"active":{"backgroundColor":"rgba(23, 62, 228, 0)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)"}},"itemActiveBorder":{"default":{"display":"none"}},"itemLabel":{"default":{"fontSize":"var(--text-size-14)"},"hover":{"fontSize":"var(--text-size-14)"},"active":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tColx0x3x2: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","paddingRight":"32px"},
            
            },
 default: { 
 
span:9,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","paddingRight":"32px"}}}, 
 },
},
tDatePickerx0x3x2x0: {
defaultStyle: {
            default: {"width":"390px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerangehour",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
cStyle:{"wrapper":{"default":{"width":"390px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","fontSize":"var(--business-text-size-12)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-12)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tDatePickerx0x3x2x1: {
defaultStyle: {
            default: {"width":"330px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"daterange",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
cStyle:{"wrapper":{"default":{"width":"330px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"disableDateWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
});
const setOptions = () => {
const subList = convertCharacter('下标')[0].split(' ')
const subListTop = convertCharacter('上标')[0].split(' ')
const legendMap = new Map([
  ['AQI', 'AQI'],
  ['PM25', `PM${subList[2]}.${subList[5]}`],
  ['PM10', `PM${subList[1]}${subList[0]}`],
  ['SO2', `SO${subList[2]}`],
  ['NO2', `NO${subList[2]}`],
  ['CO', 'CO'],
  ['NO', 'NO'],
  ['O3', `O${subList[3]}`],
  ['NO3', `NO${subList[3]}`],
  ['O3_8', `O${subList[3]}-8h`],
])
let series = [];
let xAxisData = []
if (state.echartsData?.length) {
  const pointNameList = Array.from(new Set(state.echartsData[0].data.map(item => item.pointName)));

  pointNameList.forEach(pointName => {
    series.push({
      name: pointName,
      type: 'line',
      smooth: true,
      symbol: 'none',
      pointName: pointName,
      data: []
    })
  })

  // 处理x轴数据（取第一个系列的时间数据）
  xAxisData = state.echartsData[0].data.filter((item) => item.pointName === pointNameList[0]).map((pointItem) => pointItem.time);
  // 过滤掉name为undefined的数据
  series = series.filter(item => item.name);
  // 勾选哪几个污染物就给哪几个污染物赋值
  state.echartsData.forEach(item => {
    series.forEach(el => {
      if (item.name === state.pollutorType) {
        // el.data = item.data.filter(dataObj => dataObj.pointName === el.pointName).map(dataItem => ([dataItem.time, dataItem.value]));
        el.data = item.data.filter(dataObj => dataObj.pointName === el.pointName).map(dataItem => dataItem.value);
      }
    });
  })
}

// 第一个Y轴的名称(如果多选框选中AQI或者AQI、CO)名称为空，其他选中显示单位）
// const firstYAxisName =
//   state.pollutorType === 'AQI' ? '' : state.pollutorType === 'CO' ? 'mg/m' + subListTop[3] : 'μg/m' + subListTop[3];
//echarts图配置项
let options = {
   "dataZoom": [
    {
      "type": "slider",
      "height": 10,

      xAxisIndex: [
        0,
        1,
        2
      ], // 控制所有三个x轴
      textStyle: {
        color: '#fff'
      }
    },
    {
      type: 'inside', // 内置缩放，支持鼠标滚轮缩放
      xAxisIndex: [
        0,
        1,
        2
      ], // 控制所有三个x轴
    }
  ],
  grid: {
    left: '6%',
    right: '2%',
    bottom: '10%',
  },
  tooltip: {
    trigger: 'axis',
    confine: true,
    axisPointer: {
      lineStyle: {
        color: "#008acd",
        width: "1"
      },
      crossStyle: {
        color: "#008acd",
        width: "1"
      }
    },
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderColor: "rgba(255, 255, 255, 0.5)",
    textStyle: {
      color: "rgba(255, 255, 255, 1)"
    },
  },
  xAxis: {
    type: 'category',
    data: xAxisData, // 日期
    // 自定义主题-开始
    axisLine: {
      show: true,
      lineStyle: {
        type: "solid",
        color: "rgba(173, 197, 255, 0.5)"
      }
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "rgba(173, 197, 255, 0.3)"
      }
    },
    axisLabel: {
      show: true,
      color: "#B7E3FF",
      fontSize: "var(--business-text-size-14)",
      // interval: state.fsTimeValue === 'hour' ? 1 : 0,
      // rotate: 45, // 将标签倾斜 45 度
      margin: 8,
      interval: 'auto'
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: [
          "rgba(202,202,202,0.3)"
        ]
      }
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: [
          "rgba(250,250,250,0.3)",
          "rgba(200,200,200,0.3)"
        ]
      }
    },
    nameTextStyle: {
      color: "#B7E3FF",
      fontSize: "var(--business-text-size-14)"
    }
    // 自定义主题-结束
  },
  yAxis: [
    {
      type: 'value',
      name: getChartUnit(state.pollutorType),
      // 自定义主题-开始
      axisLine: {
        show: false,
        lineStyle: {
          type: "solid",
          color: "rgba(173, 197, 255, 0.3)"
        }
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: "rgba(173, 197, 255, 0.3)"
        }
      },
      axisLabel: {
        show: true,
        color: "#B7E3FF",
        fontSize: "var(--business-text-size-14)"
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "rgba(173, 197, 255, 0.3)"
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: [
            "rgba(250,250,250,0.2)",
            "rgba(210,219,238,0.2)"
          ]
        }
      },
      nameTextStyle: {
        color: "#B7E3FF",
        fontSize: "var(--business-text-size-14)"
      },
      // 自定义主题-结束
    },
  ],
  legend: {
    show: true,
    icon: 'roundRect',
    itemWidth: 16,
    itemHeight: 16,
    type: 'scroll',
    "pageIconColor": "var(--business-white)", // 翻页按钮颜色
    "pageIconInactiveColor": "rgba(255, 255, 255, 0.5)", 
    textStyle: {
      color: "var(--business-white)",
      fontSize: "var(--business-text-size-12)",
      height: 8,
      rich: {
        a: {
          verticalAlign: "center"
        }
      }
    },
    pageTextStyle: {
      color: "#fff"
    }
  },
  // 自定义主题-结束
  series: series,
};

state.options = options;
console.log(state.options, 'state.options----')
// x轴数据赋值
// state.options.xAxis.data = Array.from(new Set(state.echartsData[0].time));
};
const handleSelectChange = () => {
state.regionCode = global.regionaQuery.regionCode
 if (state.type === 'province') {
    // 省
    state.pointType = '12'
    state.parentRegionCode = '350000000000'
    state.pointCode = ''
    state.regionCode = ''
    state.selectPoints = ''
  } else if (state.type === 'city') {
    // 市
    state.pointType = '13'
    state.parentRegionCode = ''
    state.pointCode = ''
    state.regionCode = '350700000000'
    state.selectPoints = ''
  } else if (state.type === 'point') {
    // 站点
    state.pointType = '0,1,2,3,4'
    state.parentRegionCode = ''
    state.pointCode = ''
    state.selectPoints = state.pointSelectList.map(item => item.id).join(',') || '-1'
  }
};
const getData = () => {
async function getData(){
 await apiRegistry.getDefaultTime.request();
 await apiRegistry.getPointList.request();
 if(state.timeType === 'hour'){
  await apiRegistry.getHourData.request();
 }else if(state.timeType === 'day'){
  await apiRegistry.getDayData.request();
 }
}
getData()
};
const initParams = () => {

// 设置默认选中区域
const regionLevelCode = getRegionLevel(global.regionaQuery.regionCode);
// 设置下拉选中
switch (regionLevelCode) {
  case 'province':
  case 'city':
    state.type = 'province';
    break;
  case 'county':
    state.type = 'city';
    break;
  default:
    state.type = 'province';
    break;
}
handleSelectChange();
// 初始化日期类型（小时、日）
state.timeType = global.airOverview.rightView.timeType || 'hour'
// 初始化污染物列表
changePollutionList();
// 设置默认选中污染物
state.pollutorType = global.businessDialog.dialogParmas.pollutor || 'PM25';
getData();
};
const changePollutionList = () => {
// 小时显示O3 日显示O3-8

if (state.timeType === 'hour') {
  state.pullutionList = [
    {
      "label": "AQI",
      "value": "AQI"
    },
    {
      "label": "PM₂.₅",
      "value": "PM25"
    },
    {
      "label": "PM₁₀",
      "value": "PM10"
    },
    {
      "label": "SO₂",
      "value": "SO2"
    },
    {
      "label": "NO₂",
      "value": "NO2"
    },
    {
      "label": "CO",
      "value": "CO"
    },
    {
      "label": "O₃",
      "value": "O3"
    }
  ]
  state.pollutorType = state.pollutorType === 'O3_8' ? 'O3' : state.pollutorType
} else if (state.timeType === 'day') {
  state.pullutionList = [
    {
      "label": "AQI",
      "value": "AQI"
    },
    {
      "label": "PM₂.₅",
      "value": "PM25"
    },
    {
      "label": "PM₁₀",
      "value": "PM10"
    },
    {
      "label": "SO₂",
      "value": "SO2"
    },
    {
      "label": "NO₂",
      "value": "NO2"
    },
    {
      "label": "CO",
      "value": "CO"
    },
    {
      "label": "O₃-8h",
      "value": "O3_8"
    }
  ]
  state.pollutorType = state.pollutorType === 'O3' ? 'O3_8' : state.pollutorType
}
};
const getChartUnit = (pollutionName) => {
const subListTop = convertCharacter('上标')[0].split(' ');
const coUnit = 'mg/m' + subListTop[3];
const normalPollutionUnit = 'μg/m' + subListTop[3];

// "PM25/PM10",
// "PM25/CO",
// "(PM10-PM25)/PM10",
switch (pollutionName) {
  case 'AQI':
  case 'PM25/CO':
    return '';
  case 'CO': 
    return coUnit;
  case 'PM25/PM10':
  case '(PM10-PM25)/PM10':
    return '%';
  default: 
    return normalPollutionUnit;
};

};
const getChartData = () => {
if (state.timeType === 'hour') {
  apiRegistry.getHourData.request();
} else if (state.timeType === 'day') {
  apiRegistry.getDayData.request();
}
};
const handleTimeChange = (data) => {
if(data.length){
  state.startTime = data[0]
  state.endTime = data[1]
  getChartData();
}
};
const handlePointTreeChange = (nodes) => {
if (!Array.isArray(nodes)) {
  return;
};
// 判断下拉选择节点和nodes是否一致,(不一致使用tempPointSelectList)
if (!areArraysEqualById(state.tempPointSelectList, nodes) && nodes.length) {
  state.pointSelectList = state.tempPointSelectList.filter(item1 => state.pointSourceList.some(item2 => item2.id === item1.id));
} else {
  state.pointSelectList = nodes.filter(item1 => state.pointSourceList.some(item2 => item2.id === item1.id));
}
state.selectPoints = state.pointSelectList.map(item => item.id).join(',') || '-1'
// 获取下方图表数据
if (state.timeType === 'hour') {
  apiRegistry.getHourData.request();
} else if (state.timeType === 'day') {
  apiRegistry.getDayData.request();
}

function areArraysEqualById(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
    return false;
  }

  const set1 = new Set(arr1.map(item => item.id));
  const set2 = new Set(arr2.map(item => item.id));

  if (set1.size !== set2.size) return false;

  for (const id of set1) {
    if (!set2.has(id)) return false;
  }

  return true;
}
};
const hanclePointTreeClickCheck = (selectedNodes) => {
// 如果选中的站点达到10个，禁用其他选项
state.tempPointSelectList = selectedNodes.filter(item1 => state.pointSourceList.some(item2 => item2.id === item1.id));
if (state.tempPointSelectList.length > 10) {
  window.ElementPlus.ElMessage.warning('选择站点不能超过10个！');
  return;
}
};
const handleTreeCancel = () => {
// 如果选中数据为空，调用一下清除事件
if (!state.pointSelectListParams.length) {
  triggerTreeCleanClick();
}
};
const onchange1736339431871_0_0 = (data,selectOption) => {
// 设置变量值
state.pollutorType = selectOption.label;
// 执行自定义方法
getChartData();
};
const onchange1736338965960 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.type = value;
// 执行自定义方法
handleSelectChange();
// 执行自定义方法
getChartData();
};
const ontabClick1734922371592 = (data) => {
// 设置变量值
state.timeType = data.name;
// 执行自定义方法
changePollutionList();
// 执行自定义方法
getData();
};
const ondateChange1736852714116_0_0 = (data) => {
// 设置变量值
state.timeValue = data;
// 执行自定义方法
handleTimeChange(data);
};
const ondateChange1763605800578_0_0 = (data) => {
// 设置变量值
state.timeValue = data;
// 执行自定义方法
handleTimeChange(data);
};
const ondataChange1747814757311 = (data) => {
// 执行自定义方法
handlePointTreeChange(data);
};
const oncheck1748323136417 = (currentNode,isSelected,selectedNodes) => {
// 执行自定义方法
hanclePointTreeClickCheck(selectedNodes);
};
const oncancel1750127663181 = () => {
// 执行自定义方法
handleTreeCancel();
};
const ondataChange1773825225238_0_0 = (data) => {
// 执行自定义方法
handlePointTreeChange(data);
};
const oncheck1773886246384 = (currentNode,isSelected,selectedNodes) => {
// 执行自定义方法
hanclePointTreeClickCheck(selectedNodes);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getDefaultTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.pointCode","POINT_TYPE":"state.pointType","TIME_TYPE":"state.timeType","interfaceId":"66ad2ebe9d660295568b05187f34e133"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.pointCode,"POINT_TYPE":state.pointType,"TIME_TYPE":state.timeType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.pointCode,"POINT_TYPE":state.pointType,"TIME_TYPE":state.timeType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getDefaultTime'] = res.data;
                
     
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  state.maxTimeValue = res?.data?.data?.MONITORTIME
  state.endTime = res?.data?.data?.MONITORTIME
  if(state.timeType === 'hour'){
    state.startTime = getPrevTime(state.endTime + ':00:00', state.timeType).slice(0,13)
  }else if(state.timeType === 'day'){
    state.startTime = getPrevTime(state.endTime + ' 00:00:00', state.timeType).slice(0,10)
  }
  state.timeValue = [state.startTime,state.endTime]
} else {
  state.timeValue = [];
  state.startTime = '';
  state.endTime = '';
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
        state.timeValue = [];
  state.START_TIME = '';
  state.END_TIME = '';

      reject(error);
    });
  });
},
              },
// 接口函数
 getDayData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.selectPoints","PARENT_REGION_CODE":"state.parentRegionCode","REGION_CODE":"state.regionCode","POLLUTE":"state.pollutorType","END_TIME":"state.endTime","START_TIME":"state.startTime","POINT_TYPE":"state.pointType","interfaceId":"daaa5c5bae26295626e948aa6702e2e9"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.selectPoints,"PARENT_REGION_CODE":state.parentRegionCode,"REGION_CODE":state.regionCode,"POLLUTE":state.pollutorType,"END_TIME":state.endTime,"START_TIME":state.startTime,"POINT_TYPE":state.pointType,"interfaceId":"daaa5c5bae26295626e948aa6702e2e9"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.selectPoints,"PARENT_REGION_CODE":state.parentRegionCode,"REGION_CODE":state.regionCode,"POLLUTE":state.pollutorType,"END_TIME":state.endTime,"START_TIME":state.startTime,"POINT_TYPE":state.pointType,"interfaceId":"daaa5c5bae26295626e948aa6702e2e9"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getDayData'] = res.data;
                
     
state.echartsData = state.pullutionList.map((item) => ({
  name: item.value,
  time: [],
  data: [],
}));
if (res?.data?.head?.statusCode === '200' && res?.data?.data?.length) {
  let arr = res.data.data;
    if (arr?.length) {
      arr.forEach(item => {
        Object.keys(item).forEach((e) => {
          state.echartsData.forEach(el => {
            if (el.name === e) {
              el.data.push({
                pointName: item.POINT_NAME,
                time: item.MONITORTIME_NAME,
                value: handleNoVal(item.POLLUTE_VALUE)
              });
              el.time.push(item.MONITORTIME_NAME);
            }
          })
        });
      });
    }
} else {
  state.echartsData = []
}
setOptions();
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.echartsData = []

      reject(error);
    });
  });
},
              },
// 接口函数
 getHourData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.selectPoints","REGION_CODE":"state.regionCode","PARENT_REGION_CODE":"state.parentRegionCode","POLLUTE":"state.pollutorType","END_TIME":"state.endTime","START_TIME":"state.startTime","POINT_TYPE":"state.pointType","interfaceId":"ec575d2b76ddaa4882f2271f88e2d397"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.selectPoints,"REGION_CODE":state.regionCode,"PARENT_REGION_CODE":state.parentRegionCode,"POLLUTE":state.pollutorType,"END_TIME":state.endTime,"START_TIME":state.startTime,"POINT_TYPE":state.pointType,"interfaceId":"ec575d2b76ddaa4882f2271f88e2d397"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.selectPoints,"REGION_CODE":state.regionCode,"PARENT_REGION_CODE":state.parentRegionCode,"POLLUTE":state.pollutorType,"END_TIME":state.endTime,"START_TIME":state.startTime,"POINT_TYPE":state.pointType,"interfaceId":"ec575d2b76ddaa4882f2271f88e2d397"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getHourData'] = res.data;
                
     // console.log(res, '关联站点-echarts图数据')
state.echartsData = state.pullutionList.map((item) => ({
  name: item.value,
  time: [],
  data: [],
}));
if (res?.data?.head?.statusCode === '200' && res?.data?.data?.length) {
  let arr = res.data.data;
    if (arr?.length) {
      arr.forEach(item => {
        Object.keys(item).forEach((e) => {
          state.echartsData.forEach(el => {
            if (el.name === e) {
              el.data.push({
                pointName: item.POINT_NAME,
                time: item.MONITORTIME_NAME,
                value: handleNoVal(item.POLLUTE_VALUE)
              });
              el.time.push(item.MONITORTIME_NAME);
            }
          })
        });
      });
    }
} else {
  state.echartsData = []
}
setOptions();
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.echartsData = []

      reject(error);
    });
  });
},
              },
// 接口函数
 getPointList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_TYPE":"0,1,2,3,4","REGION_PATH":"global.regionaQuery.regionCode","interfaceId":"48f27a45ab6772cad3e379bff43bc69d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_TYPE":"0,1,2,3,4","REGION_PATH":global.regionaQuery.regionCode,"interfaceId":"48f27a45ab6772cad3e379bff43bc69d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_TYPE":"0,1,2,3,4","REGION_PATH":global.regionaQuery.regionCode,"interfaceId":"48f27a45ab6772cad3e379bff43bc69d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPointList'] = res.data;
                
     const { data } = res;

state.pointTreeList = [];

if (data?.head?.statusCode === '200' && data?.data.length) {
  const originalData = data.data;
  state.pointSourceList = originalData.map(item => ({
    id: item.POINT_CODE,
    label: item.POINT_NAME_TREE
  }));
  const result = formPointTree(originalData)[0]?.children || [];
  state.pointTreeList = result;
  console.log('来源站点方法执行', state.pointTreeList);
  // 默认选中国控
  state.pointSelectList = originalData.filter(item => item.POINT_TYPE === '0').map(item => {
    return {
      id: item.POINT_CODE || '',
      label: item.POINT_NAME_TREE || ''
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
// 监听变量，调取接口
watch(() => [global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getPointList', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewMajorChangeTrent', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initParams();
onMounted(() => {
setPageScale('t-l-c-airOverviewMajorChangeTrent', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRadiox0x1ComputedData = computed(() => _.merge({}, componentState.tRadiox0x1.default, componentState.tRadiox0x1?.[state.screenSize]));

 const tChartDesignx0x2ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x2.default, componentState.tChartDesignx0x2?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tRowx0x3ComputedData = computed(() => _.merge({}, componentState.tRowx0x3.default, componentState.tRowx0x3?.[state.screenSize]));

 const tColx0x3x0ComputedData = computed(() => _.merge({}, componentState.tColx0x3x0.default, componentState.tColx0x3x0?.[state.screenSize]));

 const tSelectx0x3x0x0ComputedData = computed(() => _.merge({}, componentState.tSelectx0x3x0x0.default, componentState.tSelectx0x3x0x0?.[state.screenSize]));

 const tTreex0x3x0x1ComputedData = computed(() => _.merge({}, componentState.tTreex0x3x0x1.default, componentState.tTreex0x3x0x1?.[state.screenSize]));

 const tColx0x3x1ComputedData = computed(() => _.merge({}, componentState.tColx0x3x1.default, componentState.tColx0x3x1?.[state.screenSize]));

 const tTabsx0x3x1x0ComputedData = computed(() => _.merge({}, componentState.tTabsx0x3x1x0.default, componentState.tTabsx0x3x1x0?.[state.screenSize]));

 const tColx0x3x2ComputedData = computed(() => _.merge({}, componentState.tColx0x3x2.default, componentState.tColx0x3x2?.[state.screenSize]));

 const tDatePickerx0x3x2x0ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x3x2x0.default, componentState.tDatePickerx0x3x2x0?.[state.screenSize]));

 const tDatePickerx0x3x2x1ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x3x2x1.default, componentState.tDatePickerx0x3x2x1?.[state.screenSize]));

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
tRadiox0x1ComputedData,
tChartDesignx0x2ComputedData,
tRowx0x3ComputedData,
tColx0x3x0ComputedData,
tSelectx0x3x0x0ComputedData,
tTreex0x3x0x1ComputedData,
tColx0x3x1ComputedData,
tTabsx0x3x1x0ComputedData,
tColx0x3x2ComputedData,
tDatePickerx0x3x2x0ComputedData,
tDatePickerx0x3x2x1ComputedData,
onchange1736339431871_0_0,
onchange1736338965960,
ondataChange1773825225238_0_0,
oncheck1773886246384,
ontabClick1734922371592,
ondateChange1736852714116_0_0,
ondateChange1763605800578_0_0,
};
},
}
</script>

<style scoped>
.t-l-c-airOverviewMajorChangeTrent {
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
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0);
}
.t-l-c-airOverviewMajorChangeTrent .airOverviewMajorChangeTrent-t-rect-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 100%;
pointer-events: auto;
}

.t-l-c-airOverviewMajorChangeTrent .airOverviewMajorChangeTrent-t-radio-0-1 {
position: absolute !important;
top: 59px;
left: 32px;
width: 954px;
height: 30px;
pointer-events: auto;
}

.t-l-c-airOverviewMajorChangeTrent .airOverviewMajorChangeTrent-t-chart-design-0-2 {
position: absolute !important;
top: 88px;
left: 18px;
width: calc(100% - 40px);
height: calc(100% - 100px);
pointer-events: auto;
}

.t-l-c-airOverviewMajorChangeTrent .airOverviewMajorChangeTrent-t-row-0-3 {
position: absolute !important;
top: 10px;
left: 0px;
width: 100%;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: space-between;
align-items: center;
gap: auto;
}

.t-l-c-airOverviewMajorChangeTrent .airOverviewMajorChangeTrent-t-col-0-3-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 32px;
gap: auto;
}

.t-l-c-airOverviewMajorChangeTrent .airOverviewMajorChangeTrent-t-select-0-3-0-0 {
position: unset;
top: 12.5px;
left: 32px;
width: 150px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewMajorChangeTrent .airOverviewMajorChangeTrent-t-tree-0-3-0-1 {
position: unset;
top: 65px;
left: 622px;
width: 200px;
height: 34px;
pointer-events: auto;
}

.t-l-c-airOverviewMajorChangeTrent .airOverviewMajorChangeTrent-t-col-0-3-1 {
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

.t-l-c-airOverviewMajorChangeTrent .airOverviewMajorChangeTrent-t-tabs-0-3-1-0 {
position: unset;
top: 19px;
left: 496px;
width: 125px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewMajorChangeTrent .airOverviewMajorChangeTrent-t-col-0-3-2 {
position: relative;
top: null;
left: null;
width: 100px;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
padding-right: 32px;
}

.t-l-c-airOverviewMajorChangeTrent .airOverviewMajorChangeTrent-t-date-picker-0-3-2-0 {
position: unset;
top: 12.5px;
left: 648px;
width: 390px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewMajorChangeTrent .airOverviewMajorChangeTrent-t-date-picker-0-3-2-1 {
position: unset;
top: 12.5px;
left: 648px;
width: 330px;
height: 32px;
pointer-events: auto;
}
</style>
