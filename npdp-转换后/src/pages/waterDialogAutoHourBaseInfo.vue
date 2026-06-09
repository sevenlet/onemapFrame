<template>
  <div id="t-l-c-waterDialogAutoHourBaseInfo" class="t-l-c-waterDialogAutoHourBaseInfo" ><t-circle id="t-circle-7dbd.196078e2c" class="waterDialogAutoHourBaseInfo-t-circle-0-0"  :tip="tCirclex0x0ComputedData.tip" :label="tCirclex0x0ComputedData.label" :active="tCirclex0x0ComputedData.active" :c-style="tCirclex0x0ComputedData.cStyle"></t-circle><t-text id="t-text-e92f.6243867ce" class="waterDialogAutoHourBaseInfo-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle"></t-text><t-chart-design v-if="state.isBz === true" id="t-chart-design-d371.eeed913ee" class="waterDialogAutoHourBaseInfo-t-chart-design-0-3"  :empty-img="replaceCssVariables(filterData(state.noDataImg, componentPropBindingMap?.['t-chart-design-d371.eeed913ee']['emptyImg'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tChartDesignx0x3ComputedData.cStyle" :options="replaceCssVariables(filterData(state.standardChartsOption, componentPropBindingMap?.['t-chart-design-d371.eeed913ee']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @get-chart-instance="ongetChartInstance1769677707665"></t-chart-design><t-chart-design v-if="state.isBz === false" id="t-chart-design-3774.63e82ca0e" class="waterDialogAutoHourBaseInfo-t-chart-design-0-4"  :empty-img="replaceCssVariables(filterData(state.noDataImg, componentPropBindingMap?.['t-chart-design-3774.63e82ca0e']['emptyImg'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tChartDesignx0x4ComputedData.cStyle" :options="replaceCssVariables(filterData(state.variationTrendData.chartOptions, componentPropBindingMap?.['t-chart-design-3774.63e82ca0e']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @get-chart-instance="ongetChartInstance1769677682687"></t-chart-design><t-list-card id="t-list-card-d9ab.2e21fb3b5" class="waterDialogAutoHourBaseInfo-t-list-card-0-7"  :data="replaceCssVariables(filterData(state.baseInfoData, componentPropBindingMap?.['t-list-card-d9ab.2e21fb3b5']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x7ComputedData.spacingX" :col="tListCardx0x7ComputedData.col" :direction="tListCardx0x7ComputedData.direction" :exchange-order="tListCardx0x7ComputedData.exchangeOrder" :unit-break="tListCardx0x7ComputedData.unitBreak" :key-field="tListCardx0x7ComputedData.keyField" :active-key-field="tListCardx0x7ComputedData.activeKeyField" :active="tListCardx0x7ComputedData.active" :c-style="tListCardx0x7ComputedData.cStyle"></t-list-card><t-component id="t-component-c019.99b6d840a" class="waterDialogAutoHourBaseInfo-t-component-0-8"  :name="tComponentx0x8ComputedData.name" :c-style="tComponentx0x8ComputedData.cStyle" :src="tComponentx0x8ComputedData.src" :component-name="tComponentx0x8ComputedData.componentName" :page-id="tComponentx0x8ComputedData.pageId" :page-code="tComponentx0x8ComputedData.pageCode"></t-component><t-text id="t-text-62b3.48b14905c" class="waterDialogAutoHourBaseInfo-t-text-0-9"  :label="tTextx0x9ComputedData.label" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle"></t-text><t-scrollable-cards id="t-scrollable-cards-455f.ff3a2c962" class="waterDialogAutoHourBaseInfo-t-scrollable-cards-0-10"  :c-style="tScrollableCardsx0x10ComputedData.cStyle" :show-icon="tScrollableCardsx0x10ComputedData.showIcon" :auto-scroll="tScrollableCardsx0x10ComputedData.autoScroll" :tab="tScrollableCardsx0x10ComputedData.tab" :key-word="tScrollableCardsx0x10ComputedData.keyWord" :default-checked="tScrollableCardsx0x10ComputedData.defaultChecked" :speed="tScrollableCardsx0x10ComputedData.speed" :interval="tScrollableCardsx0x10ComputedData.interval" :card-space="tScrollableCardsx0x10ComputedData.cardSpace" :direction="tScrollableCardsx0x10ComputedData.direction" :data-alias="tScrollableCardsx0x10ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.monitorData, componentPropBindingMap?.['t-scrollable-cards-455f.ff3a2c962']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-scrollable-cards><t-row id="t-row-9f42.0804cb2c7" class="waterDialogAutoHourBaseInfo-t-row-0-13"  :c-style="tRowx0x13ComputedData.cStyle" :gutter="tRowx0x13ComputedData.gutter" :justify="tRowx0x13ComputedData.justify" :align="tRowx0x13ComputedData.align"><t-col id="t-col-3138.158b32de" class="waterDialogAutoHourBaseInfo-t-col-0-13-0"  :span="tColx0x13x0ComputedData.span" :offset="tColx0x13x0ComputedData.offset" :push="tColx0x13x0ComputedData.push" :pull="tColx0x13x0ComputedData.pull" :c-style="tColx0x13x0ComputedData.cStyle"><t-text id="t-text-6063.4db73323" class="waterDialogAutoHourBaseInfo-t-text-0-13-0-0"  :label="replaceCssVariables(filterData(state.variationTrendData.title, componentPropBindingMap?.['t-text-6063.4db73323']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x13x0x0ComputedData.editable" :c-style="tTextx0x13x0x0ComputedData.cStyle"></t-text><t-tabs-base id="t-tabs-base-e444.5c193f9da" class="waterDialogAutoHourBaseInfo-t-tabs-base-0-13-0-1"  :data="replaceCssVariables(filterData(state.dateList, componentPropBindingMap?.['t-tabs-base-e444.5c193f9da']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :space="tTabsBasex0x13x0x1ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.tabSelect, componentPropBindingMap?.['t-tabs-base-e444.5c193f9da']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x13x0x1ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x13x0x1ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x13x0x1ComputedData.alias" :c-style="tTabsBasex0x13x0x1ComputedData.cStyle" @tab-click="ontabClick1767678371105_0_0"></t-tabs-base></t-col><t-col id="t-col-fa26.5c96f94" class="waterDialogAutoHourBaseInfo-t-col-0-13-1"  :span="tColx0x13x1ComputedData.span" :offset="tColx0x13x1ComputedData.offset" :push="tColx0x13x1ComputedData.push" :pull="tColx0x13x1ComputedData.pull" :c-style="tColx0x13x1ComputedData.cStyle"><t-date-picker id="t-date-picker-0026.43e1720a8" class="waterDialogAutoHourBaseInfo-t-date-picker-0-13-1-0"  :placeholder="tDatePickerx0x13x1x0ComputedData.placeholder" :start-placeholder="tDatePickerx0x13x1x0ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x13x1x0ComputedData.endPlaceholder" :type="tDatePickerx0x13x1x0ComputedData.type" :clearable="tDatePickerx0x13x1x0ComputedData.clearable" :range-separator="tDatePickerx0x13x1x0ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeRange, componentPropBindingMap?.['t-date-picker-0026.43e1720a8']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x13x1x0ComputedData.separator" :readonly="tDatePickerx0x13x1x0ComputedData.readonly" :editable="tDatePickerx0x13x1x0ComputedData.editable" :c-style="tDatePickerx0x13x1x0ComputedData.cStyle" @date-change="ondateChange1735549375380"></t-date-picker></t-col><t-col id="t-col-0364.90b21178" class="waterDialogAutoHourBaseInfo-t-col-0-13-2"  :span="tColx0x13x2ComputedData.span" :offset="tColx0x13x2ComputedData.offset" :push="tColx0x13x2ComputedData.push" :pull="tColx0x13x2ComputedData.pull" :c-style="tColx0x13x2ComputedData.cStyle"><t-select id="t-select-3fcb.c00f74209" class="waterDialogAutoHourBaseInfo-t-select-0-13-2-0"  :active-value="replaceCssVariables(filterData(state.variationTrendData.activeTarget, componentPropBindingMap?.['t-select-3fcb.c00f74209']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.polluteList, componentPropBindingMap?.['t-select-3fcb.c00f74209']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x13x2x0ComputedData.alias" :multiple="tSelectx0x13x2x0ComputedData.multiple" :placeholder="tSelectx0x13x2x0ComputedData.placeholder" :clearable="tSelectx0x13x2x0ComputedData.clearable" :disabled="tSelectx0x13x2x0ComputedData.disabled" :name="tSelectx0x13x2x0ComputedData.name" :autocomplete="tSelectx0x13x2x0ComputedData.autocomplete" :filterable="tSelectx0x13x2x0ComputedData.filterable" :no-match-text="tSelectx0x13x2x0ComputedData.no-match-text" :no-data-text="tSelectx0x13x2x0ComputedData.no-data-text" :c-style="tSelectx0x13x2x0ComputedData.cStyle" @change="onchange1733973555614"></t-select></t-col></t-row><t-row id="t-row-0517.645557eac" class="waterDialogAutoHourBaseInfo-t-row-0-14"  :c-style="tRowx0x14ComputedData.cStyle" :gutter="tRowx0x14ComputedData.gutter" :justify="tRowx0x14ComputedData.justify" :align="tRowx0x14ComputedData.align"><t-col id="t-col-5d1d.00607e483" class="waterDialogAutoHourBaseInfo-t-col-0-14-0"  :span="tColx0x14x0ComputedData.span" :offset="tColx0x14x0ComputedData.offset" :push="tColx0x14x0ComputedData.push" :pull="tColx0x14x0ComputedData.pull" :c-style="tColx0x14x0ComputedData.cStyle"><t-text id="t-text-497f.923cff741" class="waterDialogAutoHourBaseInfo-t-text-0-14-0-0"  :label="tTextx0x14x0x0ComputedData.label" :editable="tTextx0x14x0x0ComputedData.editable" :c-style="tTextx0x14x0x0ComputedData.cStyle"></t-text><t-switch id="t-switch-c29d.c67eab79b" class="waterDialogAutoHourBaseInfo-t-switch-0-14-0-1"  :value="replaceCssVariables(filterData(state.isBz, componentPropBindingMap?.['t-switch-c29d.c67eab79b']['value'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tSwitchx0x14x0x1ComputedData.cStyle" @change="onchange1735802189047"></t-switch></t-col></t-row><t-row id="t-row-b0f0.126d71bad" class="waterDialogAutoHourBaseInfo-t-row-0-15"  :c-style="tRowx0x15ComputedData.cStyle" :gutter="tRowx0x15ComputedData.gutter" :justify="tRowx0x15ComputedData.justify" :align="tRowx0x15ComputedData.align"><t-text id="t-text-b39c.b6c03321c" class="waterDialogAutoHourBaseInfo-t-text-0-15-0"  :label="replaceCssVariables(filterData(state.monitorTime, componentPropBindingMap?.['t-text-b39c.b6c03321c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x15x0ComputedData.editable" :c-style="tTextx0x15x0ComputedData.cStyle"></t-text></t-row></div>
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
import { TChartDesign, TCircle, TCol, TComponent, TDatePicker, TListCard, TRow, TScrollableCards, TSelect, TSwitch, TTabsBase, TText } from '@ths/design';

export default {
  components: {
    TChartDesign,
    TCircle,
    TCol,
    TComponent,
    TDatePicker,
    TListCard,
    TRow,
    TScrollableCards,
    TSelect,
    TSwitch,
    TTabsBase,
    TText,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-circle-7dbd.196078e2c":{"attributeName":"tCirclex0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-e92f.6243867ce":{"attributeName":"tTextx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-1db8.1552d9ecf":{"attributeName":"tTextx0x2"},"t-chart-design-d371.eeed913ee":{"attributeName":"tChartDesignx0x3","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-chart-design-3774.63e82ca0e":{"attributeName":"tChartDesignx0x4","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-text-6bd8.88c9af1c1":{"attributeName":"tTextx0x5"},"t-text-d1a7.dc552e51b":{"attributeName":"tTextx0x6"},"t-list-card-d9ab.2e21fb3b5":{"attributeName":"tListCardx0x7","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-c019.99b6d840a":{"attributeName":"tComponentx0x8","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-62b3.48b14905c":{"attributeName":"tTextx0x9","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-scrollable-cards-455f.ff3a2c962":{"attributeName":"tScrollableCardsx0x10","cStyle":{"filters":[]},"showIcon":{"filters":[]},"autoScroll":{"filters":[]},"tab":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"speed":{"filters":[]},"interval":{"filters":[]},"cardSpace":{"filters":[]},"direction":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]}},"t-switch-e262.17829daa":{"attributeName":"tSwitchx0x11"},"t-switch-a769.ea9ec61b3":{"attributeName":"tSwitchx0x12"},"t-row-9f42.0804cb2c7":{"attributeName":"tRowx0x13","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-3138.158b32de":{"attributeName":"tColx0x13x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-6063.4db73323":{"attributeName":"tTextx0x13x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-e444.5c193f9da":{"attributeName":"tTabsBasex0x13x0x1","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-col-fa26.5c96f94":{"attributeName":"tColx0x13x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-0026.43e1720a8":{"attributeName":"tDatePickerx0x13x1x0","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-0364.90b21178":{"attributeName":"tColx0x13x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-select-3fcb.c00f74209":{"attributeName":"tSelectx0x13x2x0","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-row-0517.645557eac":{"attributeName":"tRowx0x14","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-5d1d.00607e483":{"attributeName":"tColx0x14x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-497f.923cff741":{"attributeName":"tTextx0x14x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-switch-c29d.c67eab79b":{"attributeName":"tSwitchx0x14x0x1","value":{"filters":[]},"cStyle":{"filters":[]}},"t-row-b0f0.126d71bad":{"attributeName":"tRowx0x15","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-b39c.b6c03321c":{"attributeName":"tTextx0x15x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   myChart: "",
   currentChartType: "line",
   polluteList: [{"value":"waterLevelChange","label":"水质","disabled":false},{"value":"W01001","label":"pH","disabled":false},{"value":"W01009","label":"DO","disabled":false},{"value":"W01019","label":"IMn","disabled":false},{"value":"W21003","label":"NH₃-N","disabled":false},{"value":"W21011","label":"TP","disabled":false}],
   overPollute: "",
   standardChartsOption: "",
   standardSeriesData: [],
   seriesData: [],
   isBz: true,
   noDataImg: "assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
   variationTrendData: {"title":"水质变化趋势","activeTarget":"","chartOptions":{"series":[]},"chartShow":true},
   monitorData: [{"value":"-","label":"pH","code":"W01001"},{"value":"-","label":"DO","code":"W01009"},{"value":"-","label":"IMn","code":"W01019"},{"value":"-","label":"NH₃-N","code":"W21003"},{"value":"-","label":"TP","code":"W21011"}],
   baseInfoData: [{"title":"行政区","num":"-"},{"title":"所在水体","num":"-"},{"title":"控制级别","num":"-"},{"title":"断面属性","num":"-"},{"title":"水质目标","num":"-","color":""},{"title":"超标污染物","num":"-","color":"#FF2B2B"}],
   assessType: "",
   pointCode: "",
   monitorTime: "",
   timeRange: [],
   endTime: "",
   startTime: "",
   tabSelect: "hour",
   dateList: [{"label":"近24小时","value":"hour"},{"label":"近7天","value":"day"},{"label":"近一月","value":"oneMonth"},{"label":"近90天","value":"threeMonth"}],
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
tCirclex0x0: {
defaultStyle: {
            default: {"width":"9px","height":"9px","position":"unset","left":"0px","top":"168px","backgroundColor":"#FF2B2B","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"9px","height":"9px","position":"unset","left":"0px","top":"168px","backgroundColor":"#FF2B2B","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}}}, 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","top":"160px","left":"13px","position":"unset","lineHeight":"24px"},
            
            },
 default: { 
 
label:"表示该指标超标（mg/L，pH值除外）",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","top":"160px","left":"13px","position":"unset","lineHeight":"24px"}}}, 
 },
},
tChartDesignx0x3: {
defaultStyle: {
            default: {"height":"calc(100% - 326px)","width":"100%","position":"unset","left":"0px","top":"326px"},
            
            },
 default: { 
 
emptyImg:"assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
cStyle:{"wrapper":{"default":{"height":"calc(100% - 326px)","width":"100%","position":"unset","left":"0px","top":"326px"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"emptyImg":{"default":{"display":"none"}}},
options:"", 
 },
},
tChartDesignx0x4: {
defaultStyle: {
            default: {"height":"calc(100% - 326px)","width":"100%","position":"unset","left":"0px","top":"326px"},
            
            },
 default: { 
 
emptyImg:"assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
cStyle:{"wrapper":{"default":{"height":"calc(100% - 326px)","width":"100%","position":"unset","left":"0px","top":"326px"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"emptyImg":{"default":{"display":"none"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"series":[]})), 
 },
},
tListCardx0x7: {
defaultStyle: {
            default: {"width":"100%","height":"95px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"行政区","num":"-"},{"title":"所在水体","num":"-"},{"title":"控制级别","num":"-"},{"title":"断面属性","num":"-"},{"title":"水质目标","num":"-","color":""},{"title":"超标污染物","num":"-","color":"#FF2B2B"}],
spacingX:2,
col:2,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"100%","height":"95px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible","display":"block"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--base-label-bg-color)","width":"30%","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--base-label-title-color)","fontSize":"var(--business-text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","height":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"numBox":{"default":{"backgroundColor":"var(--info-background)","width":"69.5%","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px","height":""}},"num":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--base-label-text-color)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"var(--text-size-14)"}}}, 
 },
},
tComponentx0x8: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"120px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"120px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"40px","top":"124px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"水质监测信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"40px","top":"124px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"}}}, 
 },
},
tScrollableCardsx0x10: {
defaultStyle: {
            default: {"width":"100%","height":"64px","borderRadius":"8px","padding":"11px 9px 8px","background":"linear-gradient(180deg, #219DFF 0%, rgba(0,213,255,0.00) 190%)","top":"196px","left":"0px","position":"unset","paddingLeft":"0px","paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","backgroundColor":"","backgroundImage":"linear-gradient(0deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0) 99.54954954954955%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"18px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"64px","borderRadius":"8px","padding":"11px 9px 8px","background":"linear-gradient(180deg, #219DFF 0%, rgba(0,213,255,0.00) 190%)","top":"196px","left":"0px","position":"unset","paddingLeft":"0px","paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","backgroundColor":"","backgroundImage":"linear-gradient(0deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0) 99.54954954954955%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"18px","animationName":""}},"itemWrapper":{"default":{"width":"20%","height":"64px","marginLeft":"0px","marginRight":"8px !important","cursor":"auto","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","display":"flex","flexDirection":"column-reverse","justify-content":"center"},"active":{}},"container":{"default":{"width":"100%","height":"auto","paddingLeft":"0px","paddingTop":"0px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"12px","paddingRight":"0px","marginRight":"12px"}},"cardLabel":{"default":{"fontSize":"var(--text-size-14)","lineHeight":"24px","color":"var(--skin-font-color)","fontFamily":"微软雅黑","height":"24px","display":"flex","justify-content":"center"}},"cardLabelIcon":{"default":{"width":"18px","height":"18px","marginLeft":"4px"}},"cardValue":{"default":{"fontSize":"var(--text-size-14)","fontWeight":"500","fontFamily":"DIN-bold","color":"var(--skin-font-color)","lineHeight":"24px","height":"24px","display":"flex","justify-content":"center"}},"cardValueUnit":{"default":{"fontSize":"14px","fontWeight":"normal","fontFamily":"微软雅黑","marginLeft":"4px","color":"var(--business-text-avianize)"}},"leftArrowButton":{"default":{"color":"var(--skin-font-color) !important","backgroundColor":"var(--business-show-bg15)","width":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)"},"hover":{"color":"var(--business-theme) !important","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)"}},"leftArrow":{"default":{"color":"inherit !important"}},"rightArrow":{"default":{"color":"inherit !important"}},"rightArrowButton":{"default":{"color":"var(--skin-font-color) !important","backgroundColor":"var(--business-show-bg15)","width":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)"},"hover":{"color":"var(--business-theme) !important","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)"}}},
showIcon:true,
autoScroll:false,
tab:false,
keyWord:"",
defaultChecked:"",
speed:3,
interval:0.5,
cardSpace:0,
direction:"left",
dataAlias:{"value":"value","label":"label","checked":"checked"},
data:[{"value":"-","label":"pH","code":"W01001"},{"value":"-","label":"DO","code":"W01009"},{"value":"-","label":"IMn","code":"W01019"},{"value":"-","label":"NH₃-N","code":"W21003"},{"value":"-","label":"TP","code":"W21011"}], 
 },
},
tRowx0x13: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"280px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"280px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x13x0: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"space-between","alignItems":"center","gap":"auto"},
            
            },
 default: { 
 
span:12,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"space-between","alignItems":"center","gap":"auto"}}}, 
 },
},
tTextx0x13x0x0: {
defaultStyle: {
            default: {"width":"240px","height":"22px","color":"var(--business-white)","lineHeight":"22px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"289px","left":"0px","position":"unset"},
            
            },
 default: { 
 
label:"近12个月水质变化趋势",
editable:false,
cStyle:{"wrapper":{"default":{"width":"240px","height":"22px","color":"var(--business-white)","lineHeight":"22px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"289px","left":"0px","position":"unset"}},"cardValue":{"default":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tTabsBasex0x13x0x1: {
defaultStyle: {
            default: {"width":"auto","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"232px","top":"-130px"},
            
            },
 default: { 
 
data:[{"label":"近24小时","value":"hour"},{"label":"近7天","value":"day"},{"label":"近一月","value":"oneMonth"},{"label":"近90天","value":"threeMonth"}],
space:1,
selectedTabVal:"hour",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":false},
cStyle:{"wrapper":{"default":{"width":"auto","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"232px","top":"-130px"}},"itemWrapper":{"default":{"width":"auto","height":"auto","fontSize":"14px","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important","paddingLeft":"10px","paddingRight":"10px"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px"}},"label":{"default":{"fontSize":"var(--text-size-14)","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","whiteSpace":"nowrap"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","fontSize":"var(--text-size-14)","whiteSpace":"nowrap"},"hover":{"fontSize":"var(--text-size-14)","whiteSpace":"nowrap"}}}, 
 },
},
tColx0x13x1: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","paddingLeft":"20px"},
            
            },
 default: { 
 
span:8,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","paddingLeft":"20px"}}}, 
 },
},
tDatePickerx0x13x1x0: {
defaultStyle: {
            default: {"width":"auto","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerangehour",
clearable:true,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important","lineHeight":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-white) !important","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}}, 
 },
},
tColx0x13x2: {
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
tSelectx0x13x2x0: {
defaultStyle: {
            default: {"width":"132px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:"",
options:[{"value":"waterLevelChange","label":"水质","disabled":false},{"value":"W01001","label":"pH","disabled":false},{"value":"W01009","label":"DO","disabled":false},{"value":"W01019","label":"IMn","disabled":false},{"value":"W21003","label":"NH₃-N","disabled":false},{"value":"W21011","label":"TP","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"132px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tRowx0x14: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","left":"0px","top":"325px","pointerEvents":"none"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","left":"0px","top":"325px","pointerEvents":"none"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x14x0: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"undefinedpx","pointerEvents":"none"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"undefinedpx","pointerEvents":"none"}}}, 
 },
},
tTextx0x14x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"726px","top":"327px","fontSize":"var(--text-size-14)","lineHeight":"22px","animationName":"","textAlign":"right","marginRight":"15px"},
            
            },
 default: { 
 
label:"标准值",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"726px","top":"327px","fontSize":"var(--text-size-14)","lineHeight":"22px","animationName":"","textAlign":"right","marginRight":"15px"}}}, 
 },
},
tSwitchx0x14x0x1: {
defaultStyle: {
            default: {"width":"32px","height":"22px","position":"unset","left":"791px","top":"327px","animationName":"","marginLeft":"15px"},
            
            },
 default: { 
 
value:true,
cStyle:{"wrapper":{"default":{"width":"32px","height":"22px","position":"unset","left":"791px","top":"327px","animationName":"","marginLeft":"15px"}},"core":{"active":{"backgroundColor":"var(--business-theme)","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
tRowx0x15: {
defaultStyle: {
            default: {"width":"100%","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","top":"120px","left":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","top":"120px","left":"0px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextx0x15x0: {
defaultStyle: {
            default: {"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"124.5px","left":"645px","textAlign":"right","fontSize":"var(--text-size-14)","position":"unset","marginRight":"40px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"124.5px","left":"645px","textAlign":"right","fontSize":"var(--text-size-14)","position":"unset","marginRight":"40px"}}}, 
 },
},
});
const handleWaterTarget = () => {
// 水质目标发生变化执行---------------------

// 先隐藏图表
state.variationTrendData.chartShow = false;
// 图表为空
state.variationTrendData.chartOptions = {
  series: []
};

// 水质
if (state.variationTrendData.activeTarget === 'waterLevelChange') {
  state.variationTrendData.title = '水质变化趋势';

  // 水质接口
  apiRegistry.getWaterVariationTrend.request();
} else {
  // 其他污染物
  state.variationTrendData.title = '污染物浓度变化趋势';

  // 污染物接口
  apiRegistry.getPollutantVariationTrend.request();
}
// 显示图表，延迟为了处理数据不刷新的问题
// setTimeout(() => {
//   state.variationTrendData.chartShow = true;
// }, 100)
};
const getWaterChartLabel = (value) => {
// 设置x轴显示的文本
if (value === 1) {
  value = 'Ⅰ类';
} else if (value === 2) {
  value = 'Ⅱ类';
} else if (value === 3) {
  value = 'Ⅲ类';
} else if (value === 4) {
  value = 'Ⅳ类';
} else if (value === 5) {
  value = 'Ⅴ类';
} else if (value === 6) {
  value = '劣Ⅴ类';
} else {
  value = '-';
}
return value;

};
const getChartOptions = () => {

  // 图表配置项
  let chartOption = {};
  const toolbox = {
    show: true,
    top: 5,
    right: 130,
    iconStyle: {
      color: 'var(--skin-font-color)'
    },
    feature: {
      magicType: {
        type: ["line", "bar"],
        title: {
          line: '转为折线图',
          bar: '转为柱状图'
        },
         // 只切换业务系列（小时值），避免标准值系列跟随切换导致变成柱/消失
          seriesIndex: [0]
      },
    }
  };
  if (state.variationTrendData.activeTarget === 'waterLevelChange') {
    // 水质的图表配置
    chartOption = {
      // "dataZoom": [
      //   {
      //     type: 'slider',
      //     backgroundColor: getCssVariable('--business-show-bg30'),
      //     borderColor: getCssVariable('--business-show-bg30'),
      //     borderRadius: 0,
      //     showDetail: false,
      //     showDataShadow: false,
      //     zoomLock: false, // 🔑 必须设为 false 才能拖动！
      //     height: 12,      // 建议稍高一点（如 10~16），便于操作
      //     start: 0,
      //     end: 100,
      //     brushSelect: false,
      //     bottom: '0%',
      //     fillerColor: getCssVariable('--business-btn-default'),
      //     handleIcon: 'none',
      //     handleSize: '100%', // 👈 关键：确保手柄可拖区域足够大
      //     handleStyle: {
      //       color: '#2D955A',
      //       borderColor: '#D1D5D9',
      //       borderCap: 'round'
      //     }
      //   }
      // ],
      "dataZoom": [
        {
          "type": "slider",
          "height": 10,
  
          xAxisIndex: [0, 1, 2], // 控制所有三个x轴
          textStyle: {
            color: 'var(--skin-font-color)'
          }
        },
        {
          type: 'inside',      // 内置缩放，支持鼠标滚轮缩放
          xAxisIndex: [0, 1, 2], // 控制所有三个x轴
        }
      ],
      toolbox,
      grid: {
        top: "15%",
        left: '6%',
        right: '2%',
        bottom: '34%'
      },
      color: ['#00FFFF', '#FFF200', '#FF8400', '#43D156', '#EE70FF'],
      legend: {
        show: true,
        icon: 'rect',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: 'var(--skin-font-color)',
          fontSize: 'var(--business-text-size-14)'
        },
        data: ['小时值']
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderColor: 'rgba(255, 255, 255, 0.5)',
        textStyle: {
          color: '#fff',
          fontSize: 'var(--business-text-size-14)'
        },
        "formatter": (formatterParams) => {
          if (!formatterParams[0].data?.tooltipXAxisLabel) return;
          let str = '';
          const name = formatterParams[0].data?.tooltipXAxisLabel || '--';
          formatterParams.forEach((item) => {
            const unit = item.data?.unit || '';
            const valueName = handleNoVal(item.data?.valueName);
            // 如果值是数组，则取最后一项，参考官网值为数组；
            const curValue = Array.isArray(item.value) ? item.value[item.value.length - 1] : item.value;
            // hiddenInTooltip 是否在tooltip中隐藏
            if (item.data?.hiddenInTooltip) return;
            // ${handleNoVal(curValue) !== '--' ? unit : ''}
            // str += `<div style="margin: 10px 0 0;line-height: 1">${item.marker}<span>${item.seriesName}</span>
          str += `<div style="margin: 10px 0 0;line-height: 1;font-size: var(--business-text-size-14)">${item.marker}<span>${item.seriesName}</span>
      <span style="float: right;margin-left: 10px;">
      ${item.data?.showValueName ? valueName : getWaterChartLabel(Number(curValue) || 0)}${unit}</span><br/></div>`;
          });
          return `${name}<br/>${str}`;
        }
      },
      xAxis: {
        type: 'category',
        data: [],
        axisLabel: {
          color: 'var(--skin-font-color)',
          fontSize: 'var(--business-text-size-14)',
          rotate: 45
        },
        axisLine: {
          lineStyle: {
            type: 'solid',
            color: 'var(--skin-font-color)'
          }
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: 'var(--skin-font-color)'
          }
        },
        nameTextStyle: {
          color: 'var(--skin-font-color)',
          fontSize: 'var(--business-text-size-14)'
        }
      },
      yAxis: {
        type: 'value',
        max: 6,
        axisLabel: {
          formatter: function (value) {
            return getWaterChartLabel(value);
          },
          color: 'var(--skin-font-color)',
          fontSize: 'var(--business-text-size-14)'
        },
        axisLine: {
          show: true,
          lineStyle: {
            type: 'solid',
            color: 'var(--skin-font-color)'
          }
        },
        name: '',
        nameTextStyle: {
          color: 'var(--skin-font-color)',
          align: 'right',
          padding: [0, 0, 10, -24],
          fontSize: 'var(--business-text-size-14)'
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: 'var(--skin-font-color)'
          }
        },
        splitLine: { show: false }
      },
      series: []
    };
  } else if (state.variationTrendData.activeTarget === 'W01001') {
    // ph 的图表配置
    chartOption = {
      // "dataZoom": [
      //   {
      //     "type": "slider",
      //     "backgroundColor": getCssVariable('--business-show-bg30'),
      //     "borderColor": getCssVariable('--business-show-bg30'),
      //     "borderRadius": 0,
      //     "showDetail": false,
      //     "showDataShadow": false,
      //     "zoomLock": true,
      //     "height": 7,
      //     "end": 50,
      //     "brushSelect": false,
      //     "bottom": "0%",
      //     "brushStyle": {
      //       "color": "#000"
      //     },
      //     "fillerColor": getCssVariable('--business-btn-default'),
      //     "handleIcon": "none",
      //     "handleStyle": {
      //       "color": "#2D955A",
      //       "borderColor": "#D1D5D9",
      //       "borderCap": "round"
      //     }
      //   }
      // ],
      "dataZoom": [
        {
          "type": "slider",
          "height": 10,
  
          xAxisIndex: [0, 1, 2], // 控制所有三个x轴
          textStyle: {
            color: 'var(--skin-font-color)'
          }
        },
        {
          type: 'inside',      // 内置缩放，支持鼠标滚轮缩放
          xAxisIndex: [0, 1, 2], // 控制所有三个x轴
        }
      ],
      toolbox,
      grid: {
        top: '15%',
        left: '5%',
        right: '4%',
        bottom: '34%'
      },
      color: ['#00FFFF', '#FFF200', '#FF8400', '#43D156', '#EE70FF'],
      legend: {
        show: true,
        icon: 'rect',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: 'var(--skin-font-color)',
          fontSize: 'var(--business-text-size-14)'
        },
        data: ['小时值']
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderColor: 'rgba(255, 255, 255, 0.5)',
        textStyle: {
          color: '#fff',
          fontSize: 'var(--business-text-size-14)'
        },
        "formatter": (value) => handleTooltipFormatter(value)
      },
      xAxis: {
        type: 'category',
        data: [],
        axisLabel: {
          color: 'var(--skin-font-color)',
          fontSize: 'var(--business-text-size-14)',
          rotate: 45
        },
        axisLine: {
          lineStyle: {
            type: 'solid',
            color: 'var(--skin-font-color)'
          }
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: 'var(--skin-font-color)'
          }
        },
        nameTextStyle: {
          color: 'var(--skin-font-color)',
          fontSize: 'var(--business-text-size-14)'
        }
      },
      yAxis: {
        type: 'value',
        min: function (value) {
          let range = value.max - value.min;
          if (range === 0 || value.min < range * 0.2) {
            return 0
          }
          return Number((value.min - range * 0.2).toFixed(1));
        },
        axisLabel: {
          interval: 0.1,
          color: 'var(--skin-font-color)',
          fontSize: 'var(--business-text-size-14)'
        },
        axisLine: {
          show: true,
          lineStyle: {
            type: 'solid',
            color: 'var(--skin-font-color)'
          }
        },
        name: '',
        nameTextStyle: {
          color: 'var(--skin-font-color)',
          align: 'right',
          padding: [0, 0, 10, -24],
          fontSize: 'var(--business-text-size-14)'
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: 'var(--skin-font-color)'
          }
        },
        splitLine: { show: false }
      },
      series: []
    }
  } else {
    // 其他污染物
    chartOption = {
      // "dataZoom": [
      //   {
      //     "type": "slider",
      //     "backgroundColor": getCssVariable('--business-show-bg30'),
      //     "borderColor": getCssVariable('--business-show-bg30'),
      //     "borderRadius": 0,
      //     "showDetail": false,
      //     "showDataShadow": false,
      //     "zoomLock": true,
      //     "height": 7,
      //     "end": 50,
      //     "brushSelect": false,
      //     "bottom": "0%",
      //     "brushStyle": {
      //       "color": "#000"
      //     },
      //     "fillerColor": getCssVariable('--business-btn-default'),
      //     "handleIcon": "none",
      //     "handleStyle": {
      //       "color": "#2D955A",
      //       "borderColor": "#D1D5D9",
      //       "borderCap": "round"
      //     }
      //   }
      // ],
      "dataZoom": [
        {
          "type": "slider",
          "height": 10,
  
          xAxisIndex: [0, 1, 2], // 控制所有三个x轴
          textStyle: {
            color: 'var(--skin-font-color)'
          }
        },
        {
          type: 'inside',      // 内置缩放，支持鼠标滚轮缩放
          xAxisIndex: [0, 1, 2], // 控制所有三个x轴
        }
      ],
      toolbox,
      grid: {
        top: '15%',
        left: '5%',
        right: '4%',
        bottom: '34%'
      },
      color: ['#00FFFF', '#FFF200', '#FF8400', '#43D156', '#EE70FF'],
      legend: {
        show: true,
        icon: 'rect',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: 'var(--skin-font-color)',
          fontSize: 'var(--business-text-size-14)'
        },
        data: ['小时值']
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderColor: 'rgba(255, 255, 255, 0.5)',
        textStyle: {
          color: '#fff',
          fontSize: 'var(--business-text-size-14)'
        },
        "formatter": (value) => handleTooltipFormatter(value)
      },
      xAxis: {
        type: 'category',
        data: [],
        axisLabel: {
          color: 'var(--skin-font-color)',
          fontSize: 'var(--business-text-size-14)',
          rotate: 45
        },
        axisLine: {
          lineStyle: {
            type: 'solid',
            color: 'var(--skin-font-color)'
          }
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: 'var(--skin-font-color)'
          }
        },
        nameTextStyle: {
          color: 'var(--skin-font-color)',
          fontSize: 'var(--business-text-size-14)'
        }
      },
      yAxis: {
        type: 'value',
        min: function (value) {
          let range = value.max - value.min;
          if (range === 0 || value.min < range * 0.2) {
            return 0
          }
          return Number((value.min - range * 0.2).toFixed(1));
        },
        axisLabel: {
          interval: 0.1,
          color: 'var(--skin-font-color)',
          fontSize: 'var(--business-text-size-14)'
        },
        axisLine: {
          show: true,
          lineStyle: {
            type: 'solid',
            color: 'var(--skin-font-color)'
          }
        },
        name: 'mg/L',
        nameTextStyle: {
          color: 'var(--skin-font-color)',
          align: 'right',
          padding: [0, 0, 10, -24],
          fontSize: 'var(--business-text-size-14)'
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: 'var(--skin-font-color)'
          }
        },
        splitLine: { show: false }
      },
      series: []
    }
  }
  
  return chartOption;
  
};
const initPageData = () => {

// 处理参数
state.monitorTime = global.businessDialog.dialogParmas.monitorTime;
state.assessType = global.businessDialog.dialogParmas.assessType;
state.pointCode = global.businessDialog.dialogParmas.pointCode;

// 结束时间
let endTime = dateFormat(new Date(`${state.monitorTime}:00:00`), 'yyyy-MM-dd HH');
// 开始时间
let startTime = dateFormat(getPrevTime(new Date(`${state.monitorTime}:00:00`), 'hour'), 'yyyy-MM-dd HH');

// 赋值时间
changeTime([startTime || '', endTime || ''])
async function getData() {
  // 获取超标污染物
  await apiRegistry.getExcessivePollutants.request();
  // 获取基本信息接口
  await apiRegistry.getBaseInfo.request();
  // 获取水质监测信息接口
  await apiRegistry.getMonitorData.request();
  // 获取污染物变化趋势
  await apiRegistry.getPollutantVariationTrend.request();
  // 如果存在超标污染物，则获取该污染物列表，否则，获取水质的
  // if (state.overPollute) {
  //   state.variationTrendData.activeTarget = state.overPollute
  //   await apiRegistry.getPollutantVariationTrend.request();
  // } else {
  //   // 获取水质变化趋势接口
  //   state.variationTrendData.activeTarget = 'waterLevelChange'
  //   await apiRegistry.getWaterVariationTrend.request();
  // }
}
getData()
};
const setNoDataIcon = () => {
// 设置暂无数据图标
state.noDataImg= getCssVariable('--business-no-data-img');
};
const getWaterLevelSrc = (key) => {
// 图标路径
const waterLevelSrc = [
    "6678a04114a34021a947caa73ebcf17f",
    "7cd40b10184443b6bdff4282e363f9de",
    "3a76262a85f24b9b983339ab06117f78",
    "1f1734ed58db4ed991edd563a803baef",
    "411e6a8a398246b1a82e117669795e44",
    "7732a1ec888e44e2bd34cb304dd71a0a",
    "85937bae863347139a4039c3df87e4b2"
]
return `url(assets/images/2024-12-30/${waterLevelSrc[Number(key) || 0]}.svg)`
};
const changeTime = (time) => {
state.timeRange = time || [];
state.startTime = time[0] || '';
state.endTime = time[1] || '';
};
const changeStandard = () => {
// 没有标准值
state.standardChartsOption = _.cloneDeep(state.variationTrendData.chartOptions)
if (!state.isBz) {
  state.variationTrendData.chartOptions.series = [
    ...state.seriesData,
  ];
} else {
  // 有标准值
  state.standardChartsOption.series = [
    ...state.seriesData,
    ...state.standardSeriesData
  ];
}
console.log('有标准值',state.standardChartsOption)
console.log('没有标准值',state.variationTrendData.chartOptions)

};
const handleWaterLevelStandard = (seriesName,lineColor,labelPosition) => {
// 默认线条颜色
const defaultLineColor = '#465FFF';
return {
  name: seriesName,
  "type": "line",
  "symbol": "none",
  "lineStyle": {
    "type": "dashed",
    "width": 0
  },
  itemStyle: {
    color: lineColor || defaultLineColor,
  },
  markLine: {
    'symbol': 'none',
    "label": {
      position: labelPosition || 'insideEndTop',
      "color": lineColor || defaultLineColor,
      "fontSize": 99,
      // "fontSize": "var(--business-text-size-12)",
      formatter: (params) => {
        return `${handleNoVal(seriesName)}：${getWaterChartLabel(Number(params.value) || 0)}`
      }
    },
    "data": [
      {
        "0": {
          "valueIndex": 1,
          "type": "max"
        },
        "type": "average"
      }
    ],
    "silent": true
  },
}
};
const handleDateType = () => {
let startTime = dateFormat(getPrevTime(new Date(`${state.endTime}:00:00`), `${state.tabSelect}`), 'yyyy-MM-dd HH');
changeTime([startTime || '', state.endTime || ''])
};
const setCardStyle = () => {
const sheet = new CSSStyleSheet();
sheet.insertRule(`.t-scrollable-cards.waterDialogAutoHourBaseInfo-t-scrollable-cards-0-10 .scrollable-cards-container .scrollable-cards-body {
width: 100% !important;
}`);

document.adoptedStyleSheets = [sheet];

};
const handleCharts = (myChart) => {
  // 获取图表实例，并在切换柱/线时强制“标准值系列”保持 line（避免标准值变成柱）
  
  state.myChart = myChart;
  if (!myChart || myChart.__keepStandardLineBound) return;
  myChart.__keepStandardLineBound = true;
  
  const applyOption = () => {
    if (!state.myChart) return;
    const option = _.cloneDeep(state.variationTrendData?.chartOptions || {});
    const baseSeries = (_.cloneDeep(state.seriesData || [])).map((s) => ({
      ...s,
      type: state.currentChartType || 'line',
      barWidth: 12
    }));
    let standardSeries = state.isBz === true ? _.cloneDeep(state.standardSeriesData || []) : [];
    if (Array.isArray(standardSeries)) {
      standardSeries = standardSeries.map((s) => ({
        ...s,
        type: 'line',
        symbol: s?.symbol ?? 'none'
      }));
    }
    option.series = [...baseSeries, ...standardSeries];
    state.myChart.setOption(option, { notMerge: true, lazyUpdate: false });
  };
  
  // 初次拿到实例时也执行一次（比如当前已处于柱图）
  applyOption();
  
  myChart.on('magictypechanged', (e) => {
    state.currentChartType = e?.currentType || 'line';
    applyOption();
  });
};
const onchange1733973555614 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.variationTrendData.activeTarget = value;
// 执行自定义方法
handleWaterTarget();
};
const ondateChange1735549375380 = (data) => {
// 执行自定义方法
changeTime(data);
// 执行自定义方法
handleWaterTarget();
};
const onchange1735802189047 = (value) => {
// 设置变量值
state.isBz = value;
// 执行自定义方法
changeStandard();
};
const ontabClick1733996453368 = (data) => {
// 设置变量值
state.tabSelect = data.value;
// 执行自定义方法
handleDateType();
// 事件交互-请求调用接口
apiRegistry.getLastTime.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "changeParamsRealTimeMoniter", // 消息名称
data: {"data":data.value,"type":"tab"}, // 发送的数据
});
};
const ontabClick1767678371105_0_0 = (data) => {
// 设置变量值
state.tabSelect = data.value;
// 执行自定义方法
handleDateType();
// 执行自定义方法
handleWaterTarget();
};
const ongetChartInstance1769677682687 = (chart) => {
// 执行自定义方法
handleCharts(chart);
};
const ongetChartInstance1769677707665 = (chart) => {
// 执行自定义方法
handleCharts(chart);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getExcessivePollutants: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.pointCode","MONITORTIME":"state.monitorTime","interfaceId":"6f047bca750c849f77009a0d4a5c782a"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.pointCode,"MONITORTIME":state.monitorTime,"interfaceId":"6f047bca750c849f77009a0d4a5c782a"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.pointCode,"MONITORTIME":state.monitorTime,"interfaceId":"6f047bca750c849f77009a0d4a5c782a"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getExcessivePollutants'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.overPollute = data[0]?.polltue_code || ''
  // 如果存在超标污染物，则默认选中超标污染物，否则，选中水质
  if (state.overPollute) {
    state.variationTrendData.activeTarget = state.overPollute
  } else {
    state.variationTrendData.activeTarget = 'W21011';
  }
} else {
  state.overPollute = ''
  state.variationTrendData.activeTarget = 'W21011';
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getBaseInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"a":"","POINT_CODE":"state.pointCode","ASSESSTYPE":"state.assessType","MONITORTIME":"state.monitorTime","interfaceId":"6b55f61844ccd520f3f9a5a4f227f95e"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"a":"","POINT_CODE":state.pointCode,"ASSESSTYPE":state.assessType,"MONITORTIME":state.monitorTime,"interfaceId":"6b55f61844ccd520f3f9a5a4f227f95e"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"a":"","POINT_CODE":state.pointCode,"ASSESSTYPE":state.assessType,"MONITORTIME":state.monitorTime,"interfaceId":"6b55f61844ccd520f3f9a5a4f227f95e"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     console.log(res);
const { data } = res;
if(data.head.statusCode === '200' && data.data){
  // 行政区
  state.baseInfoData[0].num = data.data?.REGION_NAME || '-';
  // 所在水体
  state.baseInfoData[1].num = `${data.data?.WSYSTEM_NAME}/${data.data?.WATER_NAME}` || '-';
  // 控制级别
  state.baseInfoData[2].num = data.data?.CONTROLLEVEL || '-';
  // 断面属性
  state.baseInfoData[3].num = data.data?.CONNECT_PROPERTY || '-';
  // 水质目标
  state.baseInfoData[4].num = data.data?.WATERQUALITYLEVELTARGETNAME || '-';
  state.baseInfoData[4].color = getWaterLevelColor(data.data?.WATERQUALITYLEVELTARGETNAME);
  // 超标污染物
  state.baseInfoData[5].num = data.data?.OVERPOLLUTE || '-';
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      

      reject(error);
    });
  });
},
              },
// 接口函数
 getMonitorData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.pointCode","ASSESSTYPE":"state.assessType","MONITORTIME":"state.monitorTime","interfaceId":"a804ff1a0661bf320cbc5fcbf7d0ae8c"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.pointCode,"ASSESSTYPE":state.assessType,"MONITORTIME":state.monitorTime,"interfaceId":"a804ff1a0661bf320cbc5fcbf7d0ae8c"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.pointCode,"ASSESSTYPE":state.assessType,"MONITORTIME":state.monitorTime,"interfaceId":"a804ff1a0661bf320cbc5fcbf7d0ae8c"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMonitorData'] = res.data;
                
     console.log(res);
const { data } = res;
function sortWaterQualityDataByCode(data) {
    const coreCodeToOrder = {};

    const hasValueItems = [];
    const noValueItems = [];

    for (let item of data) {
      if (item.value !== '-') {
        hasValueItems.push(item);
      } else {
        noValueItems.push(item);
      }
    }

    const sortFn = (a, b) => {
      const aOrder = coreCodeToOrder[a.code] !== undefined ? coreCodeToOrder[a.code] : 999;
      const bOrder = coreCodeToOrder[b.code] !== undefined ? coreCodeToOrder[b.code] : 999;
      return aOrder - bOrder;
    };

    hasValueItems.sort(sortFn);
    noValueItems.sort(sortFn);

    return [...hasValueItems, ...noValueItems];
  }
if (data.head.statusCode === '200' && data.data) {
  // 超标的样式
  const exceedStandardStyle = {
    "cardIconStyle": {
      "background": "#FF2B2B"
    },
    "valueStyle": {
      "color": "#FF2B2B"
    },
    "labelIconStyle": {
    }
  };

  // 达标的样式
  const meetStandardStyle = {
    "cardIconStyle": {
      "background": "#00DA2A"
    },
    "labelIconStyle": {
    }
  };
  // pH---------------------------
  state.monitorData[0].value = data.data?.W01001_VALUE || '-';
  state.monitorData[0].style = {
    "labelIconStyle": {
      "background-image": getWaterLevelSrc(data.data?.W01001_CODE_WATERLEVEL)
    }
  };
  if (data.data?.W01001_ISSTANDARDS === '0') {
    // 超标
    state.monitorData[0].style = {
      ...exceedStandardStyle,
      ...state.monitorData[0].style
    };
  } else if (data.data?.W01001_ISSTANDARDS === '1') {
    // 达标
    state.monitorData[0].style = {
      ...meetStandardStyle,
      ...state.monitorData[0].style
    };
  }
  // DO----------------------------
  state.monitorData[1].value = data.data?.W01009_VALUE || '-';
  state.monitorData[1].style = {
    "labelIconStyle": {
      "background-image": getWaterLevelSrc(data.data?.W01009_CODE_WATERLEVEL)
    }
  };
  if (data.data?.W01009_ISSTANDARDS === '0') {
    state.monitorData[1].style = {
      ...exceedStandardStyle,
      ...state.monitorData[1].style
    };
  } else if (data.data?.W01009_ISSTANDARDS === '1') {
    state.monitorData[1].style = {
      ...meetStandardStyle,
      ...state.monitorData[1].style
    };
  }
  // IMn--------------------
  state.monitorData[2].value = data.data?.W01019_VALUE || '-';
  state.monitorData[2].style = {
    "labelIconStyle": {
      "background-image": getWaterLevelSrc(data.data?.W01019_CODE_WATERLEVEL)
    }
  };
  if (data.data?.W01019_ISSTANDARDS === '0') {
    state.monitorData[2].style = {
      ...exceedStandardStyle,
      ...state.monitorData[2].style
    };
  } else if (data.data?.W01019_ISSTANDARDS === '1') {
    state.monitorData[2].style = {
      ...meetStandardStyle,
      ...state.monitorData[2].style
    };
  }
  // NH3-N
  state.monitorData[3].value = data.data?.W21003_VALUE || '-';
  state.monitorData[3].style = {
    "labelIconStyle": {
      "background-image": getWaterLevelSrc(data.data?.W21003_CODE_WATERLEVEL)
    }
  };
  if (data.data?.W21003_ISSTANDARDS === '0') {
    state.monitorData[3].style = {
      ...exceedStandardStyle,
      ...state.monitorData[3].style
    };
  } else if (data.data?.W21003_ISSTANDARDS === '1') {
    state.monitorData[3].style = {
      ...meetStandardStyle,
      ...state.monitorData[3].style
    };
  }
  // TP
  state.monitorData[4].value = data.data?.W21011_VALUE || '-';
  state.monitorData[4].style = {
    "labelIconStyle": {
      "background-image": getWaterLevelSrc(data.data?.W21011_CODE_WATERLEVEL)
    }
  };
  if (data.data?.W21011_ISSTANDARDS === '0') {
    state.monitorData[4].style = {
      ...exceedStandardStyle,
      ...state.monitorData[4].style
    };
  } else if (data.data?.W21011_ISSTANDARDS === '1') {
    state.monitorData[4].style = {
      ...meetStandardStyle,
      ...state.monitorData[4].style
    };
  }

  function moveToFirst(list, targetLabel) {
    const index = list.findIndex(item => item.code === targetLabel);
    if (index === -1) {
      // 没找到，直接返回原数组的副本
      return [...list];
    }

    let item = list[index];
    const rest = list.filter((_, i) => i !== index);
    return [item, ...rest];
  }
  // 如果存在超标污染物，则放在首位
  if(state.overPollute){
    state.monitorData = moveToFirst(state.monitorData, state.overPollute)
  }
  state.monitorData = sortWaterQualityDataByCode(state.monitorData)
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      

      reject(error);
    });
  });
},
              },
// 接口函数
 getWaterVariationTrend: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.pointCode","END_MONITORTIME":"state.endTime","START_MONITORTIME":"state.startTime","interfaceId":"1bb9d99b1298181f94abd497cfd2b144"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.pointCode,"END_MONITORTIME":state.endTime,"START_MONITORTIME":state.startTime,"interfaceId":"1bb9d99b1298181f94abd497cfd2b144"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.pointCode,"END_MONITORTIME":state.endTime,"START_MONITORTIME":state.startTime,"interfaceId":"1bb9d99b1298181f94abd497cfd2b144"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getWaterVariationTrend'] = res.data;
                
     const { data } = res;
state.seriesData = []
state.standardSeriesData = []
if (data?.head?.statusCode === '200' && data?.data?.length) {
  let xAxisData = []; // x轴数据
  let yearTargetData = []; // 年度目标
  let seriesData = []; // 系列数据

  data.data.forEach(i => {
    i.MONITORTIME = i.MONITORTIME.substring(5)
  })

  data.data.forEach((item) => {
    // 检查 CODE_WATERQUALITYLEVEL 是否为空或未定义
    if (item.CODE_WATERQUALITYLEVEL !== null && item.CODE_WATERQUALITYLEVEL !== undefined && item.CODE_WATERQUALITYLEVEL !== '') {
      xAxisData.push(item.MONITORTIME);
      yearTargetData.push({
        value: Number(item.CODE_WATERQUALITYLEVELTARGET),
        hiddenInTooltip: true,
        wholeTime: item.MONITORTIME,
      });
      // 组合数据，筛选出同一类的数据
      if (!seriesData.find((x) => x.POINT_CODE === item.POINT_CODE)) {
        seriesData.push({
          POINT_CODE: item.POINT_CODE,
          name: '小时值',
          data: data.data.filter((x) => x.POINT_CODE === item.POINT_CODE && x.CODE_WATERQUALITYLEVEL !== null && x.CODE_WATERQUALITYLEVEL !== undefined && x.CODE_WATERQUALITYLEVEL !== '')
            .map((dataItem) => ({
              // 使用数组的格式，是为了跟x轴坐标的值对应上；x轴和数组的第一项使用的值需要是唯一的
              value: [dataItem.MONITORTIME, dataItem.CODE_WATERQUALITYLEVEL],
              // 完整时间、单位在tooltip中的formatter中使用
              unit: '',
              tooltipXAxisLabel: dataItem.MONITORTIME,
            })),
        });
      }
    }
  });

  // 公共配置
  seriesData = seriesData.map((seriesItem) => ({
    ...seriesItem,
    "type": "line",
    "barWidth": 12
  }));

  // 获取水质图表配置项
  state.variationTrendData.chartOptions = getChartOptions();
  // x轴
  state.variationTrendData.chartOptions.xAxis.data = xAxisData;
  // 系列数据
  state.seriesData = seriesData
  // 添加标准线线数据
  state.standardSeriesData.push({
    ...handleWaterLevelStandard('年度目标'),
    data: filterRepeatData(yearTargetData, 'wholeTime'),
  });
}
changeStandard();
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      

      reject(error);
    });
  });
},
              },
// 接口函数
 getPollutantVariationTrend: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POLLUTE_CODE":"state.variationTrendData.activeTarget","POINT_CODE":"state.pointCode","END_MONITORTIME":"state.endTime","START_MONITORTIME":"state.startTime","interfaceId":"8b3f2e8c7397518f4de2c5c51fb23565"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POLLUTE_CODE":state.variationTrendData.activeTarget,"POINT_CODE":state.pointCode,"END_MONITORTIME":state.endTime,"START_MONITORTIME":state.startTime,"interfaceId":"8b3f2e8c7397518f4de2c5c51fb23565"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POLLUTE_CODE":state.variationTrendData.activeTarget,"POINT_CODE":state.pointCode,"END_MONITORTIME":state.endTime,"START_MONITORTIME":state.startTime,"interfaceId":"8b3f2e8c7397518f4de2c5c51fb23565"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPollutantVariationTrend'] = res.data;
                
     console.log(res);
state.seriesData = [];
state.standardSeriesData = [];

const { data } = res;
if (data.head.statusCode === '200' && data.data.length) {
  let xAxisData = []; // x轴数据
  let seriesData = []; // 系列数据

  // 一到五类标准值
  const standardLineMap = {
    STANDARD_1: [],
    STANDARD_2: [],
    STANDARD_3: [],
    STANDARD_4: [],
    STANDARD_5: [],
  };

  // 预处理 MONITORTIME
  data.data.forEach(i => {
    i.MONITORTIME = i.MONITORTIME.substring(5);
  });

  // 先过滤出 POLLUTEVALUE 有效的数据
  const validData = data.data.filter(item => {
    const val = item.POLLUTEVALUE;
    return val !== null && val !== undefined && val !== '' && !isNaN(Number(val));
  });

  // 构建 xAxis 和 standardLineMap（仅基于有效数据）
  validData.forEach((item) => {
    xAxisData.push(item.MONITORTIME);

    // 同步记录标准值（即使标准值为 null，也保留结构，但通常后端会返回数值）
    Object.keys(standardLineMap).forEach(key => {
      standardLineMap[key].push({
        value: item[key] != null ? Number(item[key]) : null,
        hiddenInTooltip: true,
        wholeTime: item.MONITORTIME,
      });
    });
  });

  // 构建 seriesData（按 POINT_CODE 分组）
  const pointCodes = [...new Set(validData.map(item => item.POINT_CODE))];
  seriesData = pointCodes.map(pointCode => {
    const pointData = validData
      .filter(item => item.POINT_CODE === pointCode)
      .map(dataItem => ({
        value: [dataItem.MONITORTIME, Number(dataItem.POLLUTEVALUE)],
        unit: state.variationTrendData.activeTarget === 'W01001' ? "" : 'mg/L',
        tooltipXAxisLabel: dataItem.MONITORTIME,
      }));

    return {
      POINT_CODE: pointCode,
      name: '小时值',
      data: pointData,
      type: 'line',
      barWidth: 12,
    };
  });

  // 处理标准线或 pH 区间
  if (state.variationTrendData.activeTarget === 'W01001') {
    // pH 年度目标是区间
    const firstItem = validData[0] || data.data[0]; // 优先用有效数据，兜底原数据
    state.standardSeriesData.push({
      name: "年度目标",
      data: [],
      type: "line",
      markArea: {
        data: [
          [
            {
              yAxis: Number(firstItem.STANDARDVALUEMIN || 6),
              name: ""
            },
            {
              yAxis: Number(firstItem.STANDARDVALUEMAX || 9),
              name: ""
            }
          ]
        ],
        silent: true,
        itemStyle: {
          color: 'rgba(221, 194, 191, 0.2)'
        }
      }
    });
  } else {
    // 水质类别标准线
    // state.standardSeriesData.push(
    //   { ...handleStandardSeries('Ⅰ类标准值', '#CCFFFF'), data: filterRepeatData(standardLineMap.STANDARD_1, 'wholeTime') },
    //   { ...handleStandardSeries('Ⅱ类标准值', '#00CCFF'), data: filterRepeatData(standardLineMap.STANDARD_2, 'wholeTime') },
    //   { ...handleStandardSeries('Ⅲ类标准值', '#00FF00'), data: filterRepeatData(standardLineMap.STANDARD_3, 'wholeTime') },
    //   { ...handleStandardSeries('Ⅳ类标准值', '#FFFF00'), data: filterRepeatData(standardLineMap.STANDARD_4, 'wholeTime') },
    //   { ...handleStandardSeries('Ⅴ类标准值', '#FF9B00'), data: filterRepeatData(standardLineMap.STANDARD_5, 'wholeTime') },
    // );

      // 计算数据的最大值，用于筛选标准线
      // 数据范围 1-4.3，应该显示Ⅱ类和Ⅲ类（因为数据超过了Ⅱ类的上限4）
      const dataValues = [];
      seriesData.forEach(series => {
        series.data.forEach(item => {
          if (item.value && item.value[1] !== undefined && item.value[1] !== null) {
            // 过滤掉无效值（-1、""、负数）
            const val = Number(item.value[1]);
            if (!isNaN(val) && val >= 0) {
              dataValues.push(val);
            }
          }
        });
      });
      
      console.log('dataValues:', dataValues);
      console.log('standardLineMap:', standardLineMap);
      
      // 从接口返回的 standardLineMap 中获取各标准线的实际值
      // standardLineMap 结构：{ STANDARD_1: [{value: 7.5, ...}, ...], STANDARD_2: [...], ... }


      // 原本色值
      // const standardLines = [
      //   { key: 'STANDARD_1', name: 'Ⅰ类标准值', color: '#CCFFFF' },
      //   { key: 'STANDARD_2', name: 'Ⅱ类标准值', color: '#00CCFF' },
      //   { key: 'STANDARD_3', name: 'Ⅲ类标准值', color: '#00FF00' },
      //   { key: 'STANDARD_4', name: 'Ⅳ类标准值', color: '#FFFF00' },
      //   { key: 'STANDARD_5', name: 'Ⅴ类标准值', color: '#FF9B00' }
      // ];

      // 按地图图例取的色值
      const standardLines = [
        { key: 'STANDARD_1', name: 'Ⅰ类标准值', color: '#007BFF' },
        { key: 'STANDARD_2', name: 'Ⅱ类标准值', color: '#2238FF' },
        { key: 'STANDARD_3', name: 'Ⅲ类标准值', color: '#00B222' },
        { key: 'STANDARD_4', name: 'Ⅳ类标准值', color: '#EED708' },
        { key: 'STANDARD_5', name: 'Ⅴ类标准值', color: '#F9760B' }
      ];
      
      // 1. 计算各标准线的值
      const standardValueRanges = {};
      standardLines.forEach(item => {
        // 从 standardLineMap 中提取值并转换为数字
        const values = standardLineMap[item.key]
          .map(d => {
            let v = Number(d.value);
            return isNaN(v) ? null : v;
          })
          .filter(v => v !== null && v > 0);
        
        if (values.length > 0) {
          standardValueRanges[item.key] = Math.min(...values);
        }
      });
      
      // 2. 构建排序后的标准线列表（从小到大）
      const sortedStandards = standardLines
        .map(item => ({
          ...item,
          value: standardValueRanges[item.key]
        }))
        .filter(s => s.value !== undefined && s.value > 0)
        .sort((a, b) => a.value - b.value);
      
      // 3. 确定显示哪些标准线
      // 逻辑：根据数据的范围（最小值和最大值）确定显示哪些标准线
      // 只显示数据跨越的标准线区间
      
      let visibleStandards = [];
      
      // 统一规则（不区分“越大越好/越小越好”）：
      // - 有效数据：用 dataMin/dataMax 在标准线数值序列上“取边界”
      //   * 对 dataMin / dataMax 分别取：第一个 >= x 的标准线 + 它前一个（若存在）
      //   * 若 x 大于所有标准线：取最后一个 + 倒数第二个（若存在）
      //   * 最终显示这些索引的最小连续区间
      // - 无有效数据（例如接口返回 -1）：只显示最严格的一条（数值最小的一条）
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
          const start = indices[0];
          const end = indices[indices.length - 1];
          visibleStandards = sortedStandards.slice(start, end + 1);
        } else {
          visibleStandards = [sortedStandards[0]];
        }
      }
      
      // 4. 添加到标准线数据中
      visibleStandards.forEach(item => {
        state.standardSeriesData.push({
          ...handleStandardSeries(item.name, item.color),
          data: filterRepeatData(standardLineMap[item.key], 'wholeTime'),
        });
      });
       
  }

  // 应用配置
  state.variationTrendData.chartOptions = getChartOptions();
  state.variationTrendData.chartOptions.xAxis.data = xAxisData;
  state.seriesData = seriesData;
}
  changeStandard();
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
                            setPageScale('t-l-c-waterDialogAutoHourBaseInfo', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setNoDataIcon();
// 执行自定义方法
initPageData();
onMounted(() => {
setPageScale('t-l-c-waterDialogAutoHourBaseInfo', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setCardStyle();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tCirclex0x0ComputedData = computed(() => _.merge({}, componentState.tCirclex0x0.default, componentState.tCirclex0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tChartDesignx0x3ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x3.default, componentState.tChartDesignx0x3?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tChartDesignx0x4ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x4.default, componentState.tChartDesignx0x4?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tListCardx0x7ComputedData = computed(() => _.merge({}, componentState.tListCardx0x7.default, componentState.tListCardx0x7?.[state.screenSize]));

 const tComponentx0x8ComputedData = computed(() => _.merge({}, componentState.tComponentx0x8.default, componentState.tComponentx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tScrollableCardsx0x10ComputedData = computed(() => _.merge({}, componentState.tScrollableCardsx0x10.default, componentState.tScrollableCardsx0x10?.[state.screenSize]));

 const tRowx0x13ComputedData = computed(() => _.merge({}, componentState.tRowx0x13.default, componentState.tRowx0x13?.[state.screenSize]));

 const tColx0x13x0ComputedData = computed(() => _.merge({}, componentState.tColx0x13x0.default, componentState.tColx0x13x0?.[state.screenSize]));

 const tTextx0x13x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x13x0x0.default, componentState.tTextx0x13x0x0?.[state.screenSize]));

 const tTabsBasex0x13x0x1ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x13x0x1.default, componentState.tTabsBasex0x13x0x1?.[state.screenSize]));

 const tColx0x13x1ComputedData = computed(() => _.merge({}, componentState.tColx0x13x1.default, componentState.tColx0x13x1?.[state.screenSize]));

 const tDatePickerx0x13x1x0ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x13x1x0.default, componentState.tDatePickerx0x13x1x0?.[state.screenSize]));

 const tColx0x13x2ComputedData = computed(() => _.merge({}, componentState.tColx0x13x2.default, componentState.tColx0x13x2?.[state.screenSize]));

 const tSelectx0x13x2x0ComputedData = computed(() => _.merge({}, componentState.tSelectx0x13x2x0.default, componentState.tSelectx0x13x2x0?.[state.screenSize]));

 const tRowx0x14ComputedData = computed(() => _.merge({}, componentState.tRowx0x14.default, componentState.tRowx0x14?.[state.screenSize]));

 const tColx0x14x0ComputedData = computed(() => _.merge({}, componentState.tColx0x14x0.default, componentState.tColx0x14x0?.[state.screenSize]));

 const tTextx0x14x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x14x0x0.default, componentState.tTextx0x14x0x0?.[state.screenSize]));

 const tSwitchx0x14x0x1ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x14x0x1.default, componentState.tSwitchx0x14x0x1?.[state.screenSize]));

 const tRowx0x15ComputedData = computed(() => _.merge({}, componentState.tRowx0x15.default, componentState.tRowx0x15?.[state.screenSize]));

 const tTextx0x15x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x15x0.default, componentState.tTextx0x15x0?.[state.screenSize]));

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
tCirclex0x0ComputedData,
tTextx0x1ComputedData,
tChartDesignx0x3ComputedData,
tChartDesignx0x4ComputedData,
tListCardx0x7ComputedData,
tComponentx0x8ComputedData,
tTextx0x9ComputedData,
tScrollableCardsx0x10ComputedData,
tRowx0x13ComputedData,
tColx0x13x0ComputedData,
tTextx0x13x0x0ComputedData,
tTabsBasex0x13x0x1ComputedData,
tColx0x13x1ComputedData,
tDatePickerx0x13x1x0ComputedData,
tColx0x13x2ComputedData,
tSelectx0x13x2x0ComputedData,
tRowx0x14ComputedData,
tColx0x14x0ComputedData,
tTextx0x14x0x0ComputedData,
tSwitchx0x14x0x1ComputedData,
tRowx0x15ComputedData,
tTextx0x15x0ComputedData,
ongetChartInstance1769677707665,
ongetChartInstance1769677682687,
ontabClick1767678371105_0_0,
ondateChange1735549375380,
onchange1733973555614,
onchange1735802189047,
};
},
}
</script>

<style scoped>
.t-l-c-waterDialogAutoHourBaseInfo {
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
background-color: rgba(255, 12, 12, 0);
}
.t-l-c-waterDialogAutoHourBaseInfo .waterDialogAutoHourBaseInfo-t-circle-0-0 {
position: absolute !important;
top: 168px;
left: 0px;
width: 9px;
height: 9px;
pointer-events: auto;
}

.t-l-c-waterDialogAutoHourBaseInfo .waterDialogAutoHourBaseInfo-t-text-0-1 {
position: absolute !important;
top: 160px;
left: 13px;
width: auto;
height: auto;
pointer-events: auto;
}

.t-l-c-waterDialogAutoHourBaseInfo .waterDialogAutoHourBaseInfo-t-chart-design-0-3 {
position: absolute !important;
top: 329px;
left: 0px;
width: 100%;
height: calc(100% - 326px);
pointer-events: auto;
}

.t-l-c-waterDialogAutoHourBaseInfo .waterDialogAutoHourBaseInfo-t-chart-design-0-4 {
position: absolute !important;
top: 329px;
left: 0px;
width: 100%;
height: calc(100% - 326px);
pointer-events: auto;
}

.t-l-c-waterDialogAutoHourBaseInfo .waterDialogAutoHourBaseInfo-t-list-card-0-7 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 95px;
pointer-events: auto;
}

.t-l-c-waterDialogAutoHourBaseInfo .waterDialogAutoHourBaseInfo-t-component-0-8 {
position: absolute !important;
top: 120px;
left: 0px;
width: 100%;
height: 28px;
pointer-events: auto;
}

.t-l-c-waterDialogAutoHourBaseInfo .waterDialogAutoHourBaseInfo-t-text-0-9 {
position: absolute !important;
top: 124px;
left: 40px;
width: auto;
height: auto;
pointer-events: auto;
}

.t-l-c-waterDialogAutoHourBaseInfo .waterDialogAutoHourBaseInfo-t-scrollable-cards-0-10 {
position: absolute !important;
top: 196px;
left: 0px;
width: 100%;
height: 64px;
pointer-events: auto;
}

.t-l-c-waterDialogAutoHourBaseInfo .waterDialogAutoHourBaseInfo-t-row-0-13 {
position: absolute !important;
top: 280px;
left: 0px;
width: 100%;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-waterDialogAutoHourBaseInfo .waterDialogAutoHourBaseInfo-t-col-0-13-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: space-between;
align-items: center;
gap: auto;
}

.t-l-c-waterDialogAutoHourBaseInfo .waterDialogAutoHourBaseInfo-t-text-0-13-0-0 {
position: unset;
top: 289px;
left: 0px;
width: 240px;
height: 22px;
pointer-events: auto;
}

.t-l-c-waterDialogAutoHourBaseInfo .waterDialogAutoHourBaseInfo-t-tabs-base-0-13-0-1 {
position: unset;
top: -130px;
left: 232px;
width: auto;
height: 32px;
pointer-events: auto;
}

.t-l-c-waterDialogAutoHourBaseInfo .waterDialogAutoHourBaseInfo-t-col-0-13-1 {
position: relative;
top: null;
left: null;
width: 100px;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
padding-left: 20px;
}

.t-l-c-waterDialogAutoHourBaseInfo .waterDialogAutoHourBaseInfo-t-date-picker-0-13-1-0 {
position: unset;
top: 284px;
left: 394px;
width: auto;
height: 32px;
pointer-events: auto;
}

.t-l-c-waterDialogAutoHourBaseInfo .waterDialogAutoHourBaseInfo-t-col-0-13-2 {
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

.t-l-c-waterDialogAutoHourBaseInfo .waterDialogAutoHourBaseInfo-t-select-0-13-2-0 {
position: unset;
top: 284px;
left: 704px;
width: 132px;
height: 33px;
pointer-events: auto;
}

.t-l-c-waterDialogAutoHourBaseInfo .waterDialogAutoHourBaseInfo-t-row-0-14 {
position: absolute !important;
top: 325px;
left: 0px;
width: 100%;
height: 32px;
pointer-events: none;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-waterDialogAutoHourBaseInfo .waterDialogAutoHourBaseInfo-t-col-0-14-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 32px;
pointer-events: none;
display: flex;
justify-content: right;
align-items: center;
}

.t-l-c-waterDialogAutoHourBaseInfo .waterDialogAutoHourBaseInfo-t-text-0-14-0-0 {
position: unset;
top: 327px;
left: 726px;
width: auto;
height: 22px;
pointer-events: auto;
}

.t-l-c-waterDialogAutoHourBaseInfo .waterDialogAutoHourBaseInfo-t-switch-0-14-0-1 {
position: unset;
top: 327px;
left: 791px;
width: 32px;
height: 22px;
pointer-events: auto;
}

.t-l-c-waterDialogAutoHourBaseInfo .waterDialogAutoHourBaseInfo-t-row-0-15 {
position: absolute !important;
top: 120px;
left: 0px;
width: 100%;
height: 28px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
}

.t-l-c-waterDialogAutoHourBaseInfo .waterDialogAutoHourBaseInfo-t-text-0-15-0 {
position: unset;
top: 124.5px;
left: 645px;
width: 164px;
height: 19px;
pointer-events: auto;
}
</style>
