<template>
  <div id="t-l-c-lsApproval" class="t-l-c-lsApproval" ><t-rect id="t-rect-bf2d.13552042c" class="lsApproval-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-select id="t-select-a736.65c5a6788" class="lsApproval-t-select-0-1"  :active-value="tSelectx0x1ComputedData.activeValue" :options="tSelectx0x1ComputedData.options" :alias="tSelectx0x1ComputedData.alias" :multiple="tSelectx0x1ComputedData.multiple" :placeholder="tSelectx0x1ComputedData.placeholder" :clearable="tSelectx0x1ComputedData.clearable" :disabled="tSelectx0x1ComputedData.disabled" :name="tSelectx0x1ComputedData.name" :autocomplete="tSelectx0x1ComputedData.autocomplete" :filterable="tSelectx0x1ComputedData.filterable" :no-match-text="tSelectx0x1ComputedData.no-match-text" :no-data-text="tSelectx0x1ComputedData.no-data-text" :c-style="tSelectx0x1ComputedData.cStyle" :scrollbar-thumb-color="tSelectx0x1ComputedData.scrollbarThumbColor" :scrollbar-track-color="tSelectx0x1ComputedData.scrollbarTrackColor" :scrollbar-width="tSelectx0x1ComputedData.scrollbarWidth" @change="onchange1765245577849"></t-select><t-date-picker id="t-date-picker-2aa1.ac3d9e522" class="lsApproval-t-date-picker-0-2"  :placeholder="tDatePickerx0x2ComputedData.placeholder" :start-placeholder="tDatePickerx0x2ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x2ComputedData.endPlaceholder" :type="tDatePickerx0x2ComputedData.type" :clearable="tDatePickerx0x2ComputedData.clearable" :range-separator="tDatePickerx0x2ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.dateValue, componentPropBindingMap?.['t-date-picker-2aa1.ac3d9e522']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x2ComputedData.separator" :readonly="tDatePickerx0x2ComputedData.readonly" :editable="tDatePickerx0x2ComputedData.editable" :c-style="tDatePickerx0x2ComputedData.cStyle" @date-change="ondateChange1765245639455"></t-date-picker><t-list-card id="t-list-card-f941.2321d9d25" class="lsApproval-t-list-card-0-3"  :data="replaceCssVariables(filterData(state.cardList, componentPropBindingMap?.['t-list-card-f941.2321d9d25']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x3ComputedData.spacingX" :col="tListCardx0x3ComputedData.col" :direction="tListCardx0x3ComputedData.direction" :exchange-order="tListCardx0x3ComputedData.exchangeOrder" :unit-break="tListCardx0x3ComputedData.unitBreak" :key-field="tListCardx0x3ComputedData.keyField" :active-key-field="tListCardx0x3ComputedData.activeKeyField" :active="replaceCssVariables(filterData(state.status, componentPropBindingMap?.['t-list-card-f941.2321d9d25']['active'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tListCardx0x3ComputedData.cStyle" @card-click="oncardClick1765165457507"></t-list-card><t-search id="t-search-7854.e8070e988" class="lsApproval-t-search-0-4"  :type="tSearchx0x4ComputedData.type" :input-value="tSearchx0x4ComputedData.inputValue" :maxlength="tSearchx0x4ComputedData.maxlength" :minlength="tSearchx0x4ComputedData.minlength" :show-word-limit="tSearchx0x4ComputedData.showWordLimit" :placeholder="tSearchx0x4ComputedData.placeholder" :clearable="tSearchx0x4ComputedData.clearable" :show-password="tSearchx0x4ComputedData.showPassword" :disabled="tSearchx0x4ComputedData.disabled" :prefix-icon="tSearchx0x4ComputedData.prefix-icon" :suffix-icon="tSearchx0x4ComputedData.suffix-icon" :rows="tSearchx0x4ComputedData.rows" :autosize="tSearchx0x4ComputedData.autosize" :name="tSearchx0x4ComputedData.name" :readonly="tSearchx0x4ComputedData.readonly" :step="tSearchx0x4ComputedData.step" :autofocus="tSearchx0x4ComputedData.autofocus" :form="tSearchx0x4ComputedData.form" :label="tSearchx0x4ComputedData.label" :tabindex="tSearchx0x4ComputedData.tabindex" :validate-event="tSearchx0x4ComputedData.validateEvent" :c-style="tSearchx0x4ComputedData.cStyle" :has-search-btn="tSearchx0x4ComputedData.hasSearchBtn" @change="onchange1765245516404"></t-search><t-button id="t-button-eada.5aef949d8" class="lsApproval-t-button-0-5"  :label="tButtonx0x5ComputedData.label" :round="tButtonx0x5ComputedData.round" :plain="tButtonx0x5ComputedData.plain" :disabled="tButtonx0x5ComputedData.disabled" :type="tButtonx0x5ComputedData.type" :size="tButtonx0x5ComputedData.size" :native-type="tButtonx0x5ComputedData.native-type" :c-style="tButtonx0x5ComputedData.cStyle" @click="onclick1765268492678"></t-button><t-component id="t-component-7e09.76808b632" class="lsApproval-t-component-0-6"  :name="tComponentx0x6ComputedData.name" :loading="tComponentx0x6ComputedData.loading" :c-style="tComponentx0x6ComputedData.cStyle" :src="tComponentx0x6ComputedData.src" :component-name="tComponentx0x6ComputedData.componentName" :page-id="tComponentx0x6ComputedData.pageId" :page-code="tComponentx0x6ComputedData.pageCode"></t-component><t-component id="t-component-b285.ed80b7bd6" class="lsApproval-t-component-0-7"  :name="tComponentx0x7ComputedData.name" :loading="tComponentx0x7ComputedData.loading" :c-style="tComponentx0x7ComputedData.cStyle" :src="tComponentx0x7ComputedData.src" :component-name="tComponentx0x7ComputedData.componentName" :page-id="tComponentx0x7ComputedData.pageId" :page-code="tComponentx0x7ComputedData.pageCode"></t-component><t-text-unit id="t-text-unit-8bf5.69b31b731" class="lsApproval-t-text-unit-0-8"  :c-style="tTextUnitx0x8ComputedData.cStyle" :content="tTextUnitx0x8ComputedData.content" :unit="tTextUnitx0x8ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x8ComputedData.showOverflowTooltip"></t-text-unit><t-text-unit id="t-text-unit-03c8.b263c0fa2" class="lsApproval-t-text-unit-0-9"  :c-style="tTextUnitx0x9ComputedData.cStyle" :content="tTextUnitx0x9ComputedData.content" :unit="tTextUnitx0x9ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x9ComputedData.showOverflowTooltip"></t-text-unit><t-table id="t-table-c799.5f717c05a" class="lsApproval-t-table-0-10"  :height="tTablex0x10ComputedData.height" :stripe="tTablex0x10ComputedData.stripe" :border="tTablex0x10ComputedData.border" :auto-scroll="tTablex0x10ComputedData.autoScroll" :speed="tTablex0x10ComputedData.speed" :columns="tTablex0x10ComputedData.columns" :data="replaceCssVariables(filterData(state.tableDataList, componentPropBindingMap?.['t-table-c799.5f717c05a']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x10ComputedData.defaultSort" :c-style="tTablex0x10ComputedData.cStyle" @cell-click="oncellClick1764838608814_0_0" @operation-click="onoperationClick1765359323317"></t-table><t-text-common id="t-text-common-6e9b.240a26943" class="lsApproval-t-text-common-0-11"  :label="tTextCommonx0x11ComputedData.label" :editable="tTextCommonx0x11ComputedData.editable" :c-style="tTextCommonx0x11ComputedData.cStyle" :show-title="tTextCommonx0x11ComputedData.showTitle"></t-text-common></div>
</template>

<script>
import io from 'socket.io-client';
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
import { TButton, TComponent, TDatePicker, TListCard, TRect, TSearch, TSelect, TTable, TTextCommon, TTextUnit } from '@ths/design';

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
    TTextCommon,
    TTextUnit,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-bf2d.13552042c":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-select-a736.65c5a6788":{"attributeName":"tSelectx0x1","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]},"scrollbarThumbColor":{"filters":[]},"scrollbarTrackColor":{"filters":[]},"scrollbarWidth":{"filters":[]}},"t-date-picker-2aa1.ac3d9e522":{"attributeName":"tDatePickerx0x2","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-f941.2321d9d25":{"attributeName":"tListCardx0x3","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-search-7854.e8070e988":{"attributeName":"tSearchx0x4","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]},"hasSearchBtn":{"filters":[]}},"t-button-eada.5aef949d8":{"attributeName":"tButtonx0x5","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-component-7e09.76808b632":{"attributeName":"tComponentx0x6","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-b285.ed80b7bd6":{"attributeName":"tComponentx0x7","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-unit-8bf5.69b31b731":{"attributeName":"tTextUnitx0x8","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-03c8.b263c0fa2":{"attributeName":"tTextUnitx0x9","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-table-c799.5f717c05a":{"attributeName":"tTablex0x10","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-6e9b.240a26943":{"attributeName":"tTextCommonx0x11","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"showTitle":{"filters":[]}}};
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
   keywords: "",
   status: "2",
   monitorTime: "",
   issure: "",
   endTime: "",
   startTime: "",
   dateValue: ["",""],
   cardList: [{"burning_status":"0","burning_status_name":"待审批","total":"1","color":"var(--t-water-1)","unit":"个"},{"burning_status":"0","burning_status_name":"今日炼山","total":"1","color":"var(--t-water-1)","unit":"个"},{"burning_status":"0","burning_status_name":"待炼山","total":"1","color":"var(--t-water-4)","unit":"个"},{"burning_status":"0","burning_status_name":"已炼山","total":"1","color":"var(--t-water-3)","unit":"个"}],
   activeItem: "已炼山",
   tableDataList: [{"pkid":"4","burning_location":"福建省南平市","burning_time":"2025-12-01 12","approved_area":"203","approval_no":"1","fire_reason":"朱棣谋权篡位","on_site_manager":"朱棣","phone_number":"1008611","approved_fire_time":"2025-12-01","burning_status":"2","burning_status_name":"已炼山","compar_plot_code":"","compar_image_longitude":"","compar_image_latitude":"","baseline_image_no":"","baseline_image_url":"","monitoring_image_no":"","monitoring_image_url":"","actual_burning_area":"","problem_description":"大明风华","problem_progress":"","region_code":"350700000000","region_name":"南平市","longitude":"23.3","latitude":"25.3","operation":"view,delete"}],
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
            default: {"width":"448px","height":"44px","position":"unset","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","background":"var(--business-query-bg)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"448px","height":"44px","position":"unset","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","background":"var(--business-query-bg)","animationName":""}}}, 
 },
},
tSelectx0x1: {
defaultStyle: {
            default: {"width":"299px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"33px","line-height":"normal"},
            
            },
 default: { 
 
activeValue:"1",
options:[{"value":"1","label":"全部","disabled":false},{"value":"2","label":"是","disabled":false},{"value":"3","label":"否","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"299px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"33px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}},
scrollbarThumbColor:"rgb(193,193,193)",
scrollbarTrackColor:"rgb(241,241,241)",
scrollbarWidth:"6px", 
 },
},
tDatePickerx0x2: {
defaultStyle: {
            default: {"width":"412px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"daterange",
clearable:false,
rangeSeparator:"-",
'default-date':["",""],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"412px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tListCardx0x3: {
defaultStyle: {
            default: {"width":"421px","height":"68px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px","position":"unset","left":"19px","top":"111px"},
            
            },
 default: { 
 
data:[{"burning_status":"0","burning_status_name":"待审批","total":"1","color":"var(--t-water-1)","unit":"个"},{"burning_status":"0","burning_status_name":"今日炼山","total":"1","color":"var(--t-water-1)","unit":"个"},{"burning_status":"0","burning_status_name":"待炼山","total":"1","color":"var(--t-water-4)","unit":"个"},{"burning_status":"0","burning_status_name":"已炼山","total":"1","color":"var(--t-water-3)","unit":"个"}],
spacingX:8,
col:4,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"burning_status_name","num":"total","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"2",
cStyle:{"wrapper":{"default":{"width":"421px","height":"68px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px","position":"unset","left":"19px","top":"111px"}},"itemWrapper":{"default":{"height":"66px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"var(--business-show-bg30)","lineHeight":"18px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"0px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","gap":"11px","marginLeft":"0px"},"active":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"num":{"default":{"fontSize":"var(--business-num-size-24)","fontWeight":"700","marginRight":"2px","lineHeight":"20px","textAlign":"left","fontFamily":"DIN-bold","color":"var(--t-aqi-green)"}},"unit":{"default":{"fontSize":"var(--business-text-size-12)","color":"var(--business-unit-icon)"}},"title":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)","marginTop":"0"}},"icon":{"default":{"width":"32px","height":"32px","left":"16px","marginLeft":"17px"}},"numBox":{"default":{"marginTop":"8px"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","width":"105px"}},"rightContent":{"default":{"alignItems":"center","marginLeft":"0px","justifyContent":"center"}},"innerWrapper":{"default":{"justifyContent":"left","alignItems":"center","display":"flex","gap":"0px"}}}, 
 },
},
tSearchx0x4: {
defaultStyle: {
            default: {"width":"351px","height":"32px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","min-height":"32px","fontSize":"var(--business-text-size-14)"},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"搜索点位名称",
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
cStyle:{"wrapper":{"default":{"width":"351px","height":"32px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","min-height":"32px","fontSize":"var(--business-text-size-14)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)"}},"prefix":{"default":{"color":"var(--business-text-avianize)"}}},
hasSearchBtn:false, 
 },
},
tButtonx0x5: {
defaultStyle: {
            default: {"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","color":"var(--t-white)"},
            
            },
 default: { 
 
label:"搜索",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","color":"var(--t-white)"},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tComponentx0x6: {
defaultStyle: {
            default: {"width":"411px","height":"37px","margin":"0 auto","position":"unset","left":"20px","top":"66px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"411px","height":"37px","margin":"0 auto","position":"unset","left":"20px","top":"66px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent",
pageId:"11294a0cd1654489a15355ed663e73ad_6",
pageCode:"titleFirstBg", 
 },
},
tComponentx0x7: {
defaultStyle: {
            default: {"width":"414px","height":"37px","margin":"0 auto","position":"unset","left":"19px","top":"202px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"414px","height":"37px","margin":"0 auto","position":"unset","left":"19px","top":"202px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent",
pageId:"11294a0cd1654489a15355ed663e73ad_6",
pageCode:"titleFirstBg", 
 },
},
tTextUnitx0x8: {
defaultStyle: {
            default: {"width":"282px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","animationName":"","top":"67px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"282px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","animationName":"","top":"67px"}},"unit":{"default":{"fontSize":"var(--business-text-size-20)","fontFamily":"方正综艺","lineHeight":"32px"}},"text":{"default":{"lineHeight":"32px","fontSize":"var(--business-text-size-20)"}}},
content:"审批统计",
unit:"",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x9: {
defaultStyle: {
            default: {"width":"282px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","animationName":"","top":"203px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"282px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","animationName":"","top":"203px"}},"unit":{"default":{"fontSize":"var(--business-text-size-20)","fontFamily":"方正综艺","lineHeight":"32px"}},"text":{"default":{"lineHeight":"32px","fontSize":"var(--business-text-size-20)"}}},
content:"审批清单",
unit:"",
showOverflowTooltip:true, 
 },
},
tTablex0x10: {
defaultStyle: {
            default: {"width":"410px","height":"464px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"460px",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""},"cellStyle":{"cursor":"pointer"}},"width":"44PX","type":"default","stateKey":"iconStatus"},{"label":"炼山地点","key":"burning_location","align":"left","operationList":[],"stateList":[],"width":"100PX","showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"display":"block","fontSize":"var(--business-text-size-14)"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"nameTextStatus","infoPosition":"right"},{"label":"炼山状态","key":"burning_status_name","align":"center","operationList":[],"stateList":[],"width":"80px","showOverflowTooltip":true,"style":{"fontStyle":{"fontSize":"var(--business-text-size-14)"},"cellStyle":{"cursor":"pointer"}}},{"label":"时间","key":"burning_time","stateKey":"time","align":"center","type":"default","operationList":[],"stateList":[{"name":"Ⅰ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅱ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅲ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅳ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"劣Ⅴ类","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"#000000"}},{"name":"-","fontStyle":{"fontSize":"12PX","width":"40PX","height":"PX","background":"","borderRadius":"2PX","borderWidth":"0PX"}}],"width":"102px","style":{"fontStyle":{"width":"40PX","height":"PX"},"cellStyle":{"cursor":"pointer"}}},{"label":"操作","key":"operation","stateKey":"WATERQUALITYLEVELNAME","align":"center","type":"operation","operationList":[{"name":"查看","id":"view","fontStyle":{"color":"var(--business-theme)","lineHeight":"14px","fontSize":"var(--business-text-size-14)","textAlign":"center","paddingLeft":"","paddingTop":"unset","paddingRight":"","paddingBottom":"","width":"","height":"unset"}},{"name":"删除","id":"delete","fontStyle":{"color":"var(--t-aqi-red)","paddingLeft":"3px","paddingTop":"unset","paddingRight":"","paddingBottom":"","fontSize":"var(--business-text-size-14)","lineHeight":"14px"}}],"stateList":[{"name":"Ⅰ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","color":"#000000"}},{"name":"Ⅱ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","color":"#000000"}},{"name":"Ⅲ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%)","color":"#000000"}},{"name":"Ⅳ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%)","color":"#000000"}},{"name":"Ⅴ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(0, 0, 0, 1) 100%)","color":"#000000"}},{"name":"劣Ⅴ类","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(0, 0, 0, 1) 100%)","color":"#000000"}},{"name":"-","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"","borderWidth":"0PX"}}],"width":"83PX","style":{"fontStyle":{"fontSize":"12PX","width":"PX","height":"PX","borderRadius":"PX","background":""},"cellStyle":{"cursor":"pointer"}}}],
data:[{"pkid":"4","burning_location":"福建省南平市","burning_time":"2025-12-01 12","approved_area":"203","approval_no":"1","fire_reason":"朱棣谋权篡位","on_site_manager":"朱棣","phone_number":"1008611","approved_fire_time":"2025-12-01","burning_status":"2","burning_status_name":"已炼山","compar_plot_code":"","compar_image_longitude":"","compar_image_latitude":"","baseline_image_no":"","baseline_image_url":"","monitoring_image_no":"","monitoring_image_url":"","actual_burning_area":"","problem_description":"大明风华","problem_progress":"","region_code":"350700000000","region_name":"南平市","longitude":"23.3","latitude":"25.3","operation":"view,delete"}],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"464px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tTextCommonx0x11: {
defaultStyle: {
            default: {"width":"100px","height":"33px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"33px","letterSpacing":"0px","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"22px","top":"298px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"是否存在问题",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100px","height":"33px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"33px","letterSpacing":"0px","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"22px","top":"298px","background":"unset","backgroundClip":"unset","animationName":""}}},
showTitle:true, 
 },
},
});
const gotoMapLocation = (row,column) => {
console.log(row)
// 断面评价结果-点击定位给地图发消息
if (["断面名称", "定位", '水体名称', '水质目标', '水质现状'].includes(column.label)) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractive", // 消息名称
    data: [ // 消息内容
      {
        "code": "point_code",
        "shareCode": "POINT_CODE",
        "defaultValue": "",
        "runtimeValue": row.POINT_CODE
      }
    ]
  });
}


/* 发送定位的消息 */
if (column.label === '定位') {
  const { longitude, latitude } = row;
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'gotoPoint',  // 消息类型名称
      data: {
        longitude,
        latitude
      }
    }
  );
}




};
const changeTime = (date) => {
state.startTime = date[0]
state.endTime = date[1]

};
const sendMsgToMap = (type) => {
if (type === 'ls_air') {
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'updateLSStatus',  // 消息类型名称
      data: {
        "START_TIME": state.startTime,
        "STATUS": state.status,
        "LOCATION": state.keywords,
        "END_TIME": state.endTime,
      }
    }
  );
}
};
const handleClickOperation = (row,type) => {
/* 发送定位的消息 */
if (type === 'delete') {
  const { pkid } = row;

  const url = `/waterevaluate/burn/delete?pkid=${pkid}`;
  const token = localStorage.getItem('token');

  axios.delete(
    url,
    {
      baseURL: global.businessServiceBaseUrl,
      headers: {
        'token': token,
        'Content-Type': 'application/json'
      }
    }
  ).then((res) => {
    if (res?.data?.code === 200) {
      // 创建点位成功后通知地图和炼山审批面板 重新加载数据
      rootData.rootSocket.emit(
        'message',  // 固定的消息名称，不能修改
        {
          room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
          type: 'createPointSuccess',  // 消息类型名称
          data: {}
        }
      );
    }
  }).catch(error => {
    console.error('删除点位失败:', error);
  });

} else if (type === 'view') {
  // 处理查看按钮 参照地图点击点位出现弹窗
   const { longitude,latitude } = row;
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,
      type: 'featureClicked',
      data: {
        "layerId": "炼山管控点",
        "feature": {
          "type": "Feature",
          "properties": row,
          "geometry": {
            "type": "Point",
            "coordinates": [
              longitude,
              latitude
            ]
          }
        }
      }
    }
  );
}
};
const onchange1765245577849 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.issure = value;
};
const ondateChange1765245639455 = (data) => {
// 设置变量值
state.dateValue = data;
// 执行自定义方法
changeTime(data);
};
const oncardClick1765165457507 = (item) => {
// 设置变量值
state.status = item.title;
};
const onchange1765245516404 = (value) => {
// 设置变量值
state.keywords = value;
};
const onclick1765268492678 = () => {
// 事件交互-请求调用接口
apiRegistry.getListData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const oncellClick1764838608814_0_0 = (row,column,cell,event) => {
// 执行自定义方法
gotoMapLocation(row,column);
};
const onoperationClick1765359323317 = (row,operationId) => {
// 执行自定义方法
handleClickOperation(row,operationId);
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"START_TIME":"state.startTime","STATUS":"state.status","LOCATION":"state.keywords","END_TIME":"state.endTime","REGION_PATH":"global.regionaQuery.regionCode","interfaceId":"322fcb38ed499f65a05c5778327ea656"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"START_TIME":state.startTime,"STATUS":state.status,"LOCATION":state.keywords,"END_TIME":state.endTime,"REGION_PATH":global.regionaQuery.regionCode,"interfaceId":"322fcb38ed499f65a05c5778327ea656"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"START_TIME":state.startTime,"STATUS":state.status,"LOCATION":state.keywords,"END_TIME":state.endTime,"REGION_PATH":global.regionaQuery.regionCode,"interfaceId":"322fcb38ed499f65a05c5778327ea656"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     if (res?.data?.data?.length) {
  state.tableDataList = res.data.data;
  const operation = ['view']
  if (state.status === '0') {
    operation.push('delete')
  }
  state.tableDataList = state.tableDataList.map(item => {
    return {
      ...item,
      "operation": operation.join(',')
    }
  })
} else {
  state.tableDataList = [];
}

// 只要是重新请求了列表数据 就要给地图发消息 更新图层
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'updateLSStatus',  // 消息类型名称
    data: {
      "START_TIME": state.startTime,
      "STATUS": state.status,
      "LOCATION": state.keywords,
      "END_TIME": state.endTime,
    }
  }
);
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getStatusData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"START_TIME":"state.startTime","END_TIME":"state.endTime","REGION_PATH":"global.regionaQuery.regionCode","interfaceId":"f3c9b92ffe115eaa5edbfb391dfee1d9"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"START_TIME":state.startTime,"END_TIME":state.endTime,"REGION_PATH":global.regionaQuery.regionCode,"interfaceId":"f3c9b92ffe115eaa5edbfb391dfee1d9"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"START_TIME":state.startTime,"END_TIME":state.endTime,"REGION_PATH":global.regionaQuery.regionCode,"interfaceId":"f3c9b92ffe115eaa5edbfb391dfee1d9"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getStatusData'] = res.data;
                
     if(res?.data?.data?.length){
  state.cardList = res.data.data;

  state.cardList = state.cardList.map(item => {
    return {
      ...item,
      color: item.color === 'var(--t-white)' ? 'var(--business-white)' : item.color,
      title: item.burning_status
    };
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
// 接口函数
 getTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"REGION_PATH":"global.regionaQuery.regionCode","interfaceId":"dc8fa898e6a4456899697de481c705bc"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_PATH":global.regionaQuery.regionCode,"interfaceId":"dc8fa898e6a4456899697de481c705bc"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"REGION_PATH":global.regionaQuery.regionCode,"interfaceId":"dc8fa898e6a4456899697de481c705bc"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTime'] = res.data;
                
     if(res?.data?.data?.length){
  state.endTime = res.data.data[0].monitortime || '--';
  state.dateValue = [state.endTime, state.endTime];
  apiRegistry.getStatusData.request();
  apiRegistry.getListData.request();
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
watch(() => [state.startTime,state.status,state.endTime], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getListData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [state.startTime,state.endTime], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getStatusData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getTime', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-lsApproval', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
/* 接收socket.io消息 */
const onSocketChangebd77dea043d94f6c8fd8 = function (data) {
if(data.type === "createPointSuccess"){
try{
// 设置变量值
state.status = '0';
// 事件交互-请求调用接口
apiRegistry.getTime.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangebd77dea043d94f6c8fd8);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangebd77dea043d94f6c8fd8);
});
/* 接收socket.io消息 */
const onSocketChange207ce5a8fd124f6790cc = function (data) {
if(data.type === "appLoaded"){
try{
// 执行自定义方法
sendMsgToMap(data.data.resCode);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange207ce5a8fd124f6790cc);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange207ce5a8fd124f6790cc);
});
onBeforeUnmount(() => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "clearGotoPoint", // 消息名称
data: {}, // 发送的数据
});
});
onMounted(() => {
setPageScale('t-l-c-lsApproval', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tSelectx0x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x1.default, componentState.tSelectx0x1?.[state.screenSize]));

 const tDatePickerx0x2ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x2.default, componentState.tDatePickerx0x2?.[state.screenSize]));

 const tListCardx0x3ComputedData = computed(() => _.merge({}, componentState.tListCardx0x3.default, componentState.tListCardx0x3?.[state.screenSize]));

 const tSearchx0x4ComputedData = computed(() => _.merge({}, componentState.tSearchx0x4.default, componentState.tSearchx0x4?.[state.screenSize]));

 const tButtonx0x5ComputedData = computed(() => _.merge({}, componentState.tButtonx0x5.default, componentState.tButtonx0x5?.[state.screenSize]));

 const tComponentx0x6ComputedData = computed(() => _.merge({}, componentState.tComponentx0x6.default, componentState.tComponentx0x6?.[state.screenSize]));

 const tComponentx0x7ComputedData = computed(() => _.merge({}, componentState.tComponentx0x7.default, componentState.tComponentx0x7?.[state.screenSize]));

 const tTextUnitx0x8ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x8.default, componentState.tTextUnitx0x8?.[state.screenSize]));

 const tTextUnitx0x9ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x9.default, componentState.tTextUnitx0x9?.[state.screenSize]));

 const tTablex0x10ComputedData = computed(() => _.merge({}, componentState.tTablex0x10.default, componentState.tTablex0x10?.[state.screenSize]));

 const tTextCommonx0x11ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x11.default, componentState.tTextCommonx0x11?.[state.screenSize]));

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
tSelectx0x1ComputedData,
tDatePickerx0x2ComputedData,
tListCardx0x3ComputedData,
tSearchx0x4ComputedData,
tButtonx0x5ComputedData,
tComponentx0x6ComputedData,
tComponentx0x7ComputedData,
tTextUnitx0x8ComputedData,
tTextUnitx0x9ComputedData,
tTablex0x10ComputedData,
tTextCommonx0x11ComputedData,
onchange1765245577849,
ondateChange1765245639455,
oncardClick1765165457507,
onchange1765245516404,
onclick1765268492678,
oncellClick1764838608814_0_0,
onoperationClick1765359323317,
};
},
}
</script>

<style scoped>
.t-l-c-lsApproval {
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
width: 451px;
height: 810px;
background-color: rgba(0,0,0,0);
}
.t-l-c-lsApproval .lsApproval-t-rect-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 448px;
height: 44px;
pointer-events: auto;
}

.t-l-c-lsApproval .lsApproval-t-select-0-1 {
position: absolute !important;
top: 298px;
left: 136px;
width: 299px;
height: 33px;
pointer-events: auto;
}

.t-l-c-lsApproval .lsApproval-t-date-picker-0-2 {
position: absolute !important;
top: 1px;
left: 20px;
width: 412px;
height: 32px;
pointer-events: auto;
}

.t-l-c-lsApproval .lsApproval-t-list-card-0-3 {
position: absolute !important;
top: 111px;
left: 19px;
width: 421px;
height: 68px;
pointer-events: auto;
}

.t-l-c-lsApproval .lsApproval-t-search-0-4 {
position: absolute !important;
top: 249px;
left: 20px;
width: 351px;
height: 32px;
pointer-events: auto;
}

.t-l-c-lsApproval .lsApproval-t-button-0-5 {
position: absolute !important;
top: 249px;
left: 383px;
width: 50px;
height: 32px;
pointer-events: auto;
}

.t-l-c-lsApproval .lsApproval-t-component-0-6 {
position: absolute !important;
top: 66px;
left: 20px;
width: 411px;
height: 37px;
pointer-events: auto;
}

.t-l-c-lsApproval .lsApproval-t-component-0-7 {
position: absolute !important;
top: 202px;
left: 19px;
width: 414px;
height: 37px;
pointer-events: auto;
}

.t-l-c-lsApproval .lsApproval-t-text-unit-0-8 {
position: absolute !important;
top: 67px;
left: 48px;
width: 282px;
height: 32px;
pointer-events: auto;
}

.t-l-c-lsApproval .lsApproval-t-text-unit-0-9 {
position: absolute !important;
top: 203px;
left: 48px;
width: 282px;
height: 32px;
pointer-events: auto;
}

.t-l-c-lsApproval .lsApproval-t-table-0-10 {
position: absolute !important;
top: 349px;
left: 21px;
width: 410px;
height: 464px;
pointer-events: auto;
}

.t-l-c-lsApproval .lsApproval-t-text-common-0-11 {
position: absolute !important;
top: 298px;
left: 22px;
width: 100px;
height: 33px;
pointer-events: auto;
}
</style>
