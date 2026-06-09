<template>
  <div id="t-l-c-airOverviewContent" class="t-l-c-airOverviewContent" ><t-rect id="t-rect-0b63.389b82165" class="airOverviewContent-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-component id="t-component-2685.21276fc9e" class="airOverviewContent-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode"></t-component><t-component v-if="state.isMonthOrYear === true" id="t-component-bf44.5d9742b56" class="airOverviewContent-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName"></t-component><t-component id="t-component-4b3f.2cfafc59" class="airOverviewContent-t-component-0-3"  :name="tComponentx0x3ComputedData.name" :c-style="tComponentx0x3ComputedData.cStyle" :src="tComponentx0x3ComputedData.src" :component-name="tComponentx0x3ComputedData.componentName"></t-component><t-component id="t-component-8bb9.af6688f5a" class="airOverviewContent-t-component-0-4"  :name="tComponentx0x4ComputedData.name" :c-style="tComponentx0x4ComputedData.cStyle" :src="tComponentx0x4ComputedData.src" :component-name="tComponentx0x4ComputedData.componentName"></t-component><t-component id="t-component-5aa4.688be3ff9" class="airOverviewContent-t-component-0-5"  :name="tComponentx0x5ComputedData.name" :c-style="tComponentx0x5ComputedData.cStyle" :src="tComponentx0x5ComputedData.src" :component-name="tComponentx0x5ComputedData.componentName"></t-component><t-component v-if="state.isDayOrHour === true" id="t-component-1dfb.633d7107b" class="airOverviewContent-t-component-0-6"  :name="tComponentx0x6ComputedData.name" :c-style="tComponentx0x6ComputedData.cStyle" :src="tComponentx0x6ComputedData.src" :component-name="tComponentx0x6ComputedData.componentName"></t-component><t-component v-if="state.isMonthOrYear === true" id="t-component-8c1a.9aac54a8f" class="airOverviewContent-t-component-0-7"  :name="tComponentx0x7ComputedData.name" :c-style="tComponentx0x7ComputedData.cStyle" :src="tComponentx0x7ComputedData.src" :component-name="tComponentx0x7ComputedData.componentName"></t-component><t-component id="t-component-e08a.c918ca32d" class="airOverviewContent-t-component-0-8"  :name="tComponentx0x8ComputedData.name" :c-style="tComponentx0x8ComputedData.cStyle" :src="tComponentx0x8ComputedData.src" :component-name="tComponentx0x8ComputedData.componentName"></t-component><t-component v-if="state.isMonthOrYear === true" id="t-component-a3e0.879f7de0b" class="airOverviewContent-t-component-0-9"  :name="tComponentx0x9ComputedData.name" :c-style="tComponentx0x9ComputedData.cStyle" :src="tComponentx0x9ComputedData.src" :component-name="tComponentx0x9ComputedData.componentName"></t-component><t-component v-if="state.isMonthOrYear === true" id="t-component-100a.4cd92e9c" class="airOverviewContent-t-component-0-10"  :name="tComponentx0x10ComputedData.name" :c-style="tComponentx0x10ComputedData.cStyle" :src="tComponentx0x10ComputedData.src" :component-name="tComponentx0x10ComputedData.componentName"></t-component><t-component v-if="state.isDayOrHour === true" id="t-component-c394.f306fe9ac" class="airOverviewContent-t-component-0-11"  :name="tComponentx0x11ComputedData.name" :c-style="tComponentx0x11ComputedData.cStyle" :src="tComponentx0x11ComputedData.src" :component-name="tComponentx0x11ComputedData.componentName"></t-component><t-component v-if="state.isDayOrHour === true" id="t-component-3f9e.6d1636f5c" class="airOverviewContent-t-component-0-12"  :name="tComponentx0x12ComputedData.name" :c-style="tComponentx0x12ComputedData.cStyle" :src="tComponentx0x12ComputedData.src" :component-name="tComponentx0x12ComputedData.componentName"></t-component><t-component v-if="state.isMonthOrYear === true" id="t-component-4e68.34592e226" class="airOverviewContent-t-component-0-13"  :name="tComponentx0x13ComputedData.name" :c-style="tComponentx0x13ComputedData.cStyle" :src="tComponentx0x13ComputedData.src" :component-name="tComponentx0x13ComputedData.componentName"></t-component><t-component v-if="state.isMonthOrYear === true" id="t-component-c981.de31e780a" class="airOverviewContent-t-component-0-14"  :name="tComponentx0x14ComputedData.name" :c-style="tComponentx0x14ComputedData.cStyle" :src="tComponentx0x14ComputedData.src" :component-name="tComponentx0x14ComputedData.componentName"></t-component><t-component v-if="state.isMonthOrYear === true" id="t-component-2f3b.fb6eb374f" class="airOverviewContent-t-component-0-15"  :name="tComponentx0x15ComputedData.name" :c-style="tComponentx0x15ComputedData.cStyle" :src="tComponentx0x15ComputedData.src" :component-name="tComponentx0x15ComputedData.componentName"></t-component><t-component v-if="state.isMonthOrYear === true" id="t-component-88c3.017d385c6" class="airOverviewContent-t-component-0-16"  :name="tComponentx0x16ComputedData.name" :c-style="tComponentx0x16ComputedData.cStyle" :src="tComponentx0x16ComputedData.src" :component-name="tComponentx0x16ComputedData.componentName"></t-component><t-select v-if="state.timeType === 'quarter'" id="t-select-d2bc.2cbbd1ee7" class="airOverviewContent-t-select-0-17"  :active-value="replaceCssVariables(filterData(state.quarterValue, componentPropBindingMap?.['t-select-d2bc.2cbbd1ee7']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x17ComputedData.options" :alias="tSelectx0x17ComputedData.alias" :multiple="tSelectx0x17ComputedData.multiple" :placeholder="tSelectx0x17ComputedData.placeholder" :clearable="tSelectx0x17ComputedData.clearable" :disabled="tSelectx0x17ComputedData.disabled" :name="tSelectx0x17ComputedData.name" :autocomplete="tSelectx0x17ComputedData.autocomplete" :filterable="tSelectx0x17ComputedData.filterable" :no-match-text="tSelectx0x17ComputedData.no-match-text" :no-data-text="tSelectx0x17ComputedData.no-data-text" :c-style="tSelectx0x17ComputedData.cStyle" @change="onchange1734923044075_0_0"></t-select><t-component v-if="state.isDayOrHour === true" id="t-component-9c0b.c1f74dcf8" class="airOverviewContent-t-component-0-18"  :name="tComponentx0x18ComputedData.name" :c-style="tComponentx0x18ComputedData.cStyle" :src="tComponentx0x18ComputedData.src" :component-name="tComponentx0x18ComputedData.componentName"></t-component><t-tabs-base id="t-tabs-base-d5fc.7f4c7fba5" class="airOverviewContent-t-tabs-base-0-20"  :data="tTabsBasex0x20ComputedData.data" :space="tTabsBasex0x20ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.timeType, componentPropBindingMap?.['t-tabs-base-d5fc.7f4c7fba5']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x20ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x20ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x20ComputedData.alias" :c-style="tTabsBasex0x20ComputedData.cStyle" @tab-click="ontabClick1734923044075_0_0"></t-tabs-base><t-rect id="t-rect-e1db.376b96d46" class="airOverviewContent-t-rect-0-21"  :tip="tRectx0x21ComputedData.tip" :label="tRectx0x21ComputedData.label" :active="tRectx0x21ComputedData.active" :c-style="tRectx0x21ComputedData.cStyle" @click="onclick1734348074456"></t-rect><t-rect id="t-rect-9f3a.24d71e31c" class="airOverviewContent-t-rect-0-22"  :tip="tRectx0x22ComputedData.tip" :label="tRectx0x22ComputedData.label" :active="tRectx0x22ComputedData.active" :c-style="tRectx0x22ComputedData.cStyle" @click="onclick1734348428072"></t-rect><t-component v-if="state.isProvince === true" id="t-component-8738.5165f30a4" class="airOverviewContent-t-component-0-23"  :name="tComponentx0x23ComputedData.name" :c-style="tComponentx0x23ComputedData.cStyle" :src="tComponentx0x23ComputedData.src" :component-name="tComponentx0x23ComputedData.componentName"></t-component><t-component v-if="state.isProvince === true" id="t-component-936c.551a0b827" class="airOverviewContent-t-component-0-24"  :name="tComponentx0x24ComputedData.name" :c-style="tComponentx0x24ComputedData.cStyle" :src="tComponentx0x24ComputedData.src" :component-name="tComponentx0x24ComputedData.componentName"></t-component><t-date-picker v-if="state.timeType === 'quarter'" id="t-date-picker-1d4c.0c1a02b6" class="airOverviewContent-t-date-picker-0-25"  :placeholder="tDatePickerx0x25ComputedData.placeholder" :start-placeholder="tDatePickerx0x25ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x25ComputedData.endPlaceholder" :type="tDatePickerx0x25ComputedData.type" :clearable="tDatePickerx0x25ComputedData.clearable" :range-separator="tDatePickerx0x25ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.quarterYear, componentPropBindingMap?.['t-date-picker-1d4c.0c1a02b6']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x25ComputedData.separator" :readonly="tDatePickerx0x25ComputedData.readonly" :editable="tDatePickerx0x25ComputedData.editable" :c-style="tDatePickerx0x25ComputedData.cStyle" :is-disabled-front="tDatePickerx0x25ComputedData.isDisabledFront" :disabled-date="replaceCssVariables(filterData(state.maxQuarterYear, componentPropBindingMap?.['t-date-picker-1d4c.0c1a02b6']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @date-change="ondateChange1734935797960"></t-date-picker><t-date-picker v-if="state.timeType !== 'quarter'" id="t-date-picker-9697.cc182a559" class="airOverviewContent-t-date-picker-0-26"  :placeholder="tDatePickerx0x26ComputedData.placeholder" :start-placeholder="tDatePickerx0x26ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x26ComputedData.endPlaceholder" :type="replaceCssVariables(filterData(state.dateType, componentPropBindingMap?.['t-date-picker-9697.cc182a559']['type'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :clearable="tDatePickerx0x26ComputedData.clearable" :range-separator="tDatePickerx0x26ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeValue, componentPropBindingMap?.['t-date-picker-9697.cc182a559']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x26ComputedData.separator" :readonly="tDatePickerx0x26ComputedData.readonly" :editable="tDatePickerx0x26ComputedData.editable" :c-style="tDatePickerx0x26ComputedData.cStyle" :is-disabled-front="tDatePickerx0x26ComputedData.isDisabledFront" :disabled-date="replaceCssVariables(filterData(state.maxTimeValue, componentPropBindingMap?.['t-date-picker-9697.cc182a559']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @date-change="ondateChange1734936115799"></t-date-picker><t-iframe id="t-iframe-ca51.9b9877f5a" class="airOverviewContent-t-iframe-0-27"  :src="tIframex0x27ComputedData.src" :srcdoc="tIframex0x27ComputedData.srcdoc" :scrolling="tIframex0x27ComputedData.scrolling" :c-style="tIframex0x27ComputedData.cStyle" :socket-url="replaceCssVariables(filterData(global.socketIp, componentPropBindingMap?.['t-iframe-ca51.9b9877f5a']['socketUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :room-id="replaceCssVariables(filterData(global.socketRoom, componentPropBindingMap?.['t-iframe-ca51.9b9877f5a']['roomId'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-iframe><t-component id="t-component-f0c0.1b8778952" class="airOverviewContent-t-component-0-28"  :name="tComponentx0x28ComputedData.name" :c-style="tComponentx0x28ComputedData.cStyle" :src="tComponentx0x28ComputedData.src" :component-name="tComponentx0x28ComputedData.componentName"></t-component></div>
</template>

<script>
import io from 'socket.io-client';
import mitt from 'mitt';
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
import { TComponent, TDatePicker, TIframe, TRect, TSelect, TTabsBase } from '@ths/design';

export default {
  components: {
    TComponent,
    TDatePicker,
    TIframe,
    TRect,
    TSelect,
    TTabsBase,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-0b63.389b82165":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-2685.21276fc9e":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-bf44.5d9742b56":{"attributeName":"tComponentx0x2","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-4b3f.2cfafc59":{"attributeName":"tComponentx0x3","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-8bb9.af6688f5a":{"attributeName":"tComponentx0x4","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-5aa4.688be3ff9":{"attributeName":"tComponentx0x5","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-1dfb.633d7107b":{"attributeName":"tComponentx0x6","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-8c1a.9aac54a8f":{"attributeName":"tComponentx0x7","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-e08a.c918ca32d":{"attributeName":"tComponentx0x8","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-a3e0.879f7de0b":{"attributeName":"tComponentx0x9","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-100a.4cd92e9c":{"attributeName":"tComponentx0x10","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-c394.f306fe9ac":{"attributeName":"tComponentx0x11","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-3f9e.6d1636f5c":{"attributeName":"tComponentx0x12","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-4e68.34592e226":{"attributeName":"tComponentx0x13","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-c981.de31e780a":{"attributeName":"tComponentx0x14","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-2f3b.fb6eb374f":{"attributeName":"tComponentx0x15","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-88c3.017d385c6":{"attributeName":"tComponentx0x16","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-select-d2bc.2cbbd1ee7":{"attributeName":"tSelectx0x17","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-component-9c0b.c1f74dcf8":{"attributeName":"tComponentx0x18","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-4f0c.743c6163e":{"attributeName":"tComponentx0x19"},"t-tabs-base-d5fc.7f4c7fba5":{"attributeName":"tTabsBasex0x20","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-e1db.376b96d46":{"attributeName":"tRectx0x21","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-9f3a.24d71e31c":{"attributeName":"tRectx0x22","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-8738.5165f30a4":{"attributeName":"tComponentx0x23","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-936c.551a0b827":{"attributeName":"tComponentx0x24","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-date-picker-1d4c.0c1a02b6":{"attributeName":"tDatePickerx0x25","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-date-picker-9697.cc182a559":{"attributeName":"tDatePickerx0x26","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-iframe-ca51.9b9877f5a":{"attributeName":"tIframex0x27","src":{"filters":[]},"srcdoc":{"filters":[]},"scrolling":{"filters":[]},"cStyle":{"filters":[]},"socketUrl":{"filters":[]},"roomId":{"filters":[]}},"t-component-f0c0.1b8778952":{"attributeName":"tComponentx0x28","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}}};
// 页面内注入全局变量和事件
const rootData = inject('root');
let global = reactive({
...toRefs(rootData)
});
// 路由
const route = useRoute();
// 创建 DOM 引用

// 当前页面使用的变量
const state = reactive({
   screenSize: "",
   pointType: "",
   pointCode: "",
   isNewDate: true,
   maxQuarterYear: "",
   maxTimeValue: "",
   standardContentFold: true,
   isProvince: false,
   isMonthOrYear: false,
   isDayOrHour: true,
   dateType: "datetimehour",
   timeType: "hour",
   timeValue: "",
   quarterValue: "",
   quarterYear: "",
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
            default: {"width":"450px","height":"44px","position":"unset","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","background":"var(--business-query-bg)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"44px","position":"unset","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","background":"var(--business-query-bg)","animationName":""}}}, 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"24px","top":"870px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewExceededTitleComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"24px","top":"870px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/airOverviewExceededTitle",
componentName:"airOverviewExceededTitleComponent",
pageId:"e0000f6dade44bf08a9eba5375dd3351",
pageCode:"airOverviewExceededTitle", 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"410px","height":"220px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"22px","top":"409px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewPollutantCompareComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"220px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"22px","top":"409px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewPollutantCompare",
componentName:"airOverviewPollutantCompareComponent", 
 },
},
tComponentx0x3: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"21px","top":"403px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewReachStandardsTitleComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"21px","top":"403px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewReachStandardsTitle",
componentName:"airOverviewReachStandardsTitleComponent", 
 },
},
tComponentx0x4: {
defaultStyle: {
            default: {"width":"410px","height":"88px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"21px","top":"447px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewReachStandardsGoodComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"88px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"21px","top":"447px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewReachStandardsGood",
componentName:"airOverviewReachStandardsGoodComponent", 
 },
},
tComponentx0x5: {
defaultStyle: {
            default: {"width":"410px","height":"200px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"21px","top":"543px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewReachStandardsOtherComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"200px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"21px","top":"543px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewReachStandardsOther",
componentName:"airOverviewReachStandardsOtherComponent", 
 },
},
tComponentx0x6: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"21px","top":"605px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewForecastDataTitleComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"21px","top":"605px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewForecastDataTitle",
componentName:"airOverviewForecastDataTitleComponent", 
 },
},
tComponentx0x7: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"636px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewPollutantCompareTitComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"636px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewPollutantCompareTit",
componentName:"airOverviewPollutantCompareTitComponent", 
 },
},
tComponentx0x8: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"1117px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewQualityRankingTitleComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"1117px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewQualityRankingTitle",
componentName:"airOverviewQualityRankingTitleComponent", 
 },
},
tComponentx0x9: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"1155px","animationName":""},
            
            },
 default: { 
 
name:"airOiverviewContributeTitleComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"1155px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOiverviewContributeTitle",
componentName:"airOiverviewContributeTitleComponent", 
 },
},
tComponentx0x10: {
defaultStyle: {
            default: {"width":"410px","height":"170px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"1200px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewContributePollutionComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"170px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"1200px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewContributePollution",
componentName:"airOverviewContributePollutionComponent", 
 },
},
tComponentx0x11: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"70px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewQualityRealityTitleComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"70px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewQualityRealityTitle",
componentName:"airOverviewQualityRealityTitleComponent", 
 },
},
tComponentx0x12: {
defaultStyle: {
            default: {"width":"410px","height":"263px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"114px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewQualityRealityComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"263px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"114px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewQualityReality",
componentName:"airOverviewQualityRealityComponent", 
 },
},
tComponentx0x13: {
defaultStyle: {
            default: {"width":"410px","height":"248px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"113px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewExcellentDaysComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"248px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"113px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewExcellentDays",
componentName:"airOverviewExcellentDaysComponent", 
 },
},
tComponentx0x14: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"68px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewExcellentDaysTitleComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"68px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewExcellentDaysTitle",
componentName:"airOverviewExcellentDaysTitleComponent", 
 },
},
tComponentx0x15: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"21px","top":"385px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewExceedStandardTitleComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"21px","top":"385px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewExceedStandardTitle",
componentName:"airOverviewExceedStandardTitleComponent", 
 },
},
tComponentx0x16: {
defaultStyle: {
            default: {"width":"410px","height":"164px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"21px","top":"430px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewExceedingStandardComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"164px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"21px","top":"430px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewExceedingStandard",
componentName:"airOverviewExceedingStandardComponent", 
 },
},
tSelectx0x17: {
defaultStyle: {
            default: {"width":"102px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","left":"334px","top":"0px","position":"unset"},
            
            },
 default: { 
 
activeValue:"",
options:[{"value":"1","label":"第一季度","disabled":false},{"value":"2","label":"第二季度","disabled":false},{"value":"3","label":"第三季度","disabled":false},{"value":"4","label":"第四季度","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"102px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","left":"334px","top":"0px","position":"unset"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"color":"var(--t-white)"}}}, 
 },
},
tComponentx0x18: {
defaultStyle: {
            default: {"width":"410px","height":"212px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"21px","top":"648px"},
            
            },
 default: { 
 
name:"airOverviewForecastDataComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"212px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"21px","top":"648px"}}},
src:"/lego-generated-apps/lego_file/app/src/71ed927f19ff41e78116c906842de342_19/index.html#/airOverviewForecastData",
componentName:"airOverviewForecastDataComponent", 
 },
},
tTabsBasex0x20: {
defaultStyle: {
            default: {"width":"200px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset"},
            
            },
 default: { 
 
data:[{"label":"小时","value":"hour"},{"label":"日","value":"day"}],
space:0,
selectedTabVal:"hour",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":"disabled"},
cStyle:{"wrapper":{"default":{"width":"200px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset"}},"itemWrapper":{"default":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","backgroundColor":"rgba(0, 61, 155, 0)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","width":"120px","height":"32px","fontSize":"var(--business-text-size-14)","lineHeight":"30px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","borderLeft":"1px solid rgba(0,61,155,0)","borderTop":"1px solid rgba(0,61,155,0)","borderRight":"1px solid rgba(0,61,155,0)","borderBottom":"1px solid rgba(0,61,155,0)","color":"var(--business-text-avianize)"},"active":{"background":"var(--business-tab-third-active-fill)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","lineHeight":"30px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","backgroundColor":"rgba(3, 12, 52, 0)","borderLeft":"1px solid var(--business-tab-third-active-border)","borderTop":"1px solid var(--business-tab-third-active-border)","borderRight":"1px solid var(--business-tab-third-active-border)","borderBottom":"1px solid var(--business-tab-third-active-border)","box-shadow":"var(--business-tab-third-active-shadow) 0px 0px 18px 0px inset","color":"var(--business-tab-third-active-text)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","height":"32px"},"hover":{"backgroundColor":"rgba(0, 61, 155, 0)","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","borderLeft":"1px solid rgba(255,255,255,0)","borderTop":"1px solid rgba(255,255,255,0)","borderRight":"1px solid rgba(255,255,255,0)","borderBottom":"1px solid rgba(255,255,255,0)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","color":"var(--business-tab-third-active-border)"}}}, 
 },
},
tRectx0x21: {
defaultStyle: {
            default: {"width":"30px","height":"24px","position":"unset","left":"211px","top":"547px","backgroundImage":"var(--business-content-unfold-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"30px","height":"24px","position":"unset","left":"211px","top":"547px","backgroundImage":"var(--business-content-unfold-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","cursor":"pointer"}}}, 
 },
},
tRectx0x22: {
defaultStyle: {
            default: {"width":"30px","height":"24px","position":"unset","left":"210px","top":"1272px","backgroundImage":"var(--business-content-fold-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"30px","height":"24px","position":"unset","left":"210px","top":"1272px","backgroundImage":"var(--business-content-fold-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","cursor":"pointer","animationName":""}}}, 
 },
},
tComponentx0x23: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"68px"},
            
            },
 default: { 
 
name:"airOverviewChangeTrentTitleComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"68px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewChangeTrentTitle",
componentName:"airOverviewChangeTrentTitleComponent", 
 },
},
tComponentx0x24: {
defaultStyle: {
            default: {"width":"410px","height":"377px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"111px"},
            
            },
 default: { 
 
name:"airOverviewChangeTrentComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"377px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"111px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewChangeTrent",
componentName:"airOverviewChangeTrentComponent", 
 },
},
tDatePickerx0x25: {
defaultStyle: {
            default: {"width":"106px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","top":"0px","left":"228px","position":"unset"},
            
            },
 default: { 
 
placeholder:"请选择",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"year",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"106px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","top":"0px","left":"228px","position":"unset"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tDatePickerx0x26: {
defaultStyle: {
            default: {"width":"207px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择时间",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimehour",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"207px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16)","lineHeight":"var(--business-text-size-16)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}},"disableDateWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tIframex0x27: {
defaultStyle: {
            default: {"width":"405px","height":"202px","position":"unset","left":"24px","top":"908px"},
            
            },
 default: { 
 
src:"",
srcdoc:"<!doctype html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>右侧面板</title>\n    <style>\n        [v-cloak] {\n            display: none;\n        }\n\n        /**\n        * 清除默认样式\n        */\n\n        * {\n            box-sizing: border-box;\n            -moz-box-sizing: border-box;\n            -webkit-box-sizing: border-box;\n        }\n\n        html,\n        body {\n            padding: 0;\n            margin: 0;\n            font-family: \"Microsoft yahei\";\n        }\n\n        ul,\n        ol,\n        li,\n        span,\n        p,\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6,\n        a,\n        dl,\n        dt,\n        dd,\n        input {\n            padding: 0;\n            margin: 0;\n            list-style: none;\n            text-decoration: none;\n            font-weight: normal;\n            font-style: normal;\n            font-family: \"Microsoft yahei\";\n            font-size: var(--business-text-size-14);\n        }\n\n        a {\n            cursor: pointer;\n        }\n\n        img {\n            vertical-align: middle;\n            border: 0;\n        }\n\n        .airQualityRanking {\n            margin-top: 12px;\n            width: 405px;\n            font-family: Microsoft YaHei;\n        }\n\n        .airQualityRanking .header {\n            height: 55px;\n            border-bottom: 1px solid #0bb3e5;\n            display: flex;\n            align-items: center;\n        }\n\n        .airQualityRanking .header .header-label {\n            position: relative;\n            top: 2px;\n            width: 13px;\n            height: 23px;\n            box-sizing: border-box;\n        }\n\n        .airQualityRanking .header .header-tri {\n            position: relative;\n            top: 6.2px;\n            left: 1px;\n            width: 0;\n            height: 0;\n            border-width: 5px 0 5px 5px;\n            border-style: solid;\n            border-color: transparent transparent transparent #0bb3e5;\n            z-index: 1;\n        }\n\n        .airQualityRanking .header .header-label::before,\n        .airQualityRanking .header .header-label::after {\n            position: absolute;\n            content: \"\";\n            border: 10px solid;\n        }\n\n        .airQualityRanking .header .header-label::after {\n            right: -7px;\n            top: 2px;\n            border-color: transparent transparent transparent #192558;\n        }\n\n        .airQualityRanking .header .header-label::before {\n            border-color: transparent transparent transparent #fff;\n            right: -9px;\n            top: 2px;\n        }\n\n        .airQualityRanking .header p {\n            margin-left: 9px;\n            width: 96px;\n            height: 16px;\n            font-size: var(--business-text-size-16);\n            font-weight: bold;\n            color: #0bb3e5;\n            line-height: 19px;\n        }\n\n        .rankingList-table {\n            margin: 0 auto;\n            width: 99%;\n            border-spacing: inherit;\n        }\n\n        .rankingList-table tr {\n            height: 38px;\n            line-height: 38px;\n        }\n\n        .rankingList-table tr:first-child {\n            height: 45px;\n        }\n\n        .rankingList-table tr:first-child th {\n            text-align: center;\n            font-size: var(--business-text-size-14);\n            font-weight: normal;\n            color: #00ffff;\n        }\n\n        .rankingList-table tr:first-child th span {\n            float: right;\n            margin-top: 10px;\n            width: 1px;\n            height: 18px;\n            background: #293773;\n        }\n\n        .rankingList-table tr:first-child th:last-child span {\n            background: none;\n        }\n\n        .rankingList-table tr:not(.rankingList-table-th) {\n            background: var(--business-show-bg15);\n            margin-bottom: 5px;\n        }\n\n        .rankingList-table tr.rankingList-table-line {\n            height: 14px;\n        }\n\n        .rankingList-table tr td {\n            text-align: center;\n                font-size: var(--business-text-size-14);\n    color: var(--business-white);\n        }\n\n        .title {\n            font-family: Microsoft YaHei;\n            font-size: var(--business-text-size-14);\n            font-weight: bold;\n        }\n\n        .title_a {\n            font-family: Microsoft YaHei;\n            font-size: var(--business-text-size-14);\n            font-weight: bold;\n            color: #0bb3e5;\n        }\n\n        .title-icon {\n            width: 26px;\n            height: 26px;\n            margin: auto;\n        }\n\n        .title_b {\n            font-family: Microsoft YaHei;\n            font-size: var(--business-text-size-14);\n            font-weight: bold;\n            color: #bcbc1d;\n            margin-left: 10px;\n        }\n\n        html,\n        body,\n        #app {\n            width: 100%;\n            height: 100%;\n        }\n\n        .empty-data {\n            width: 100%;\n            height: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: var(--business-text-size-14);\n            color: var(--business-white);\n        }\n    </style>\n    <!-- vue -->\n    <script\n        src=\"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/resources/vue.min.js\"><\/script>\n    <!-- lodash插件 -->\n    <script src=\"./resources/lodash.min.js\"><\/script>\n    <!-- socket插件 -->\n    <script\n        src=\"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/resources/socket.io.js\"><\/script>\n    <!-- 通信插件mitt https://www.npmjs.com/package/mitt -->\n    <script\n        src=\"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/resources/mitt.min.js\"><\/script>\n\n    <!-- HTTP库 -->\n    <script\n        src=\"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/resources/axios.min.js\"><\/script>\n\n    <!-- 主题样式 -->\n    <link rel=\"stylesheet\"\n        href=\"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/style/themes.css\" />\n</head>\n\n<body>\n    <div id=\"app\" v-cloak>\n        <div class=\"airQualityRanking\" v-if=\"stationList.length\">\n            <table class=\"rankingList-table\">\n                <tr v-for=\"(item, index) in stationList\" :key=\"index\">\n                    <td>\n                        <div class=\"title-icon\" :style=\"{background:getPointTypeIcon(item.point_type)}\" />\n                    </td>\n                    <td>{{getPointTypeName(item.point_type)}}</td>\n                    <td></td>\n                    <td>\n                        <span class=\"title_a\">{{item.aqi_over_100_count}}</span><span\n                            class=\"title\">/{{item.total_aqi_records}}</span>\n                    </td>\n                    <td style=\"text-align: right;\">\n                        超标比例\n                    </td>\n                    <td style=\"text-align: left;\">\n                        <!-- 超标比例 -->\n                        <span class=\"title_b\">{{item.aqi_over_100_ratio_percent}}%</span>\n                    </td>\n                </tr>\n            </table>\n        </div>\n        <div v-if=\"stationList.length\">\n            <p style=\"width: 405px; text-align: right; color: var(--business-white)\">\n                <span style=\"color: #bcbc1d\">站点名称后数字表示：</span><span style=\"color: #0bb3e5\">当前超标数量</span>/总数量\n            </p>\n        </div>\n        <div v-if=\"!stationList.length\" class=\"empty-data\">\n            暂无数据\n        </div>\n    </div>\n    <script>\n        // 房间号\n        const roomId = localStorage.getItem(\"lxtSocketRoom\");\n\n        // 主题\n        const themeName = localStorage.getItem(\"lxtTheme\");\n\n        const bodyDom = document.querySelector(\"body\");\n        if (bodyDom && themeName) {\n            bodyDom.classList.add(themeName);\n        }\n\n\n        const { createApp, ref, onMounted, reactive, provide, watch, onBeforeUnmount, toRefs } = Vue;\n        const app = createApp({\n            setup() {\n                // 获取缓存里的鹿小图全局变量数据\n                const lxtGlobal = localStorage.getItem(\"lxtGlobal\")\n                    ? JSON.parse(localStorage.getItem(\"lxtGlobal\"))\n                    : {};\n\n                const rootEmitter = mitt();\n\n                let global = reactive(\n                    /* 插入应用级别的全局变量 相当于store中的rootData */\n                    {\n                        socketIp:\n                            lxtGlobal.socketIp || \"http://192.168.0.202:7777/socketPath\",\n                        socketPath: lxtGlobal.socketPath || \"/socketPath\",\n                        socketRoom: lxtGlobal.socketRoom || roomId || \"admin\",\n                    },\n                );\n\n                let state = reactive({\n                    isSocketConnect: false, // socket 是否连接\n                });\n\n                // 创建 socket 连接\n                let socket = null;\n                if (global.socketIp) {\n                    const options = {};\n                    if (global?.socketPath) {\n                        options.path = global.socketPath;\n                    }\n                    socket = io(global.socketIp, options);\n                }\n\n                const rootData = reactive({\n                    ...toRefs(global),\n                    rootEmit: rootEmitter.emit, // mitt 发送\n                    rootOn: rootEmitter.on, // mitt 接收\n                    rootOff: rootEmitter.off, // mitt 移除\n                    rootSocket: socket, // socket 实例\n                });\n\n                /**\n                 * 监听修改全局变量事件\n                 * @param obj 修改后的变量\n                 */\n                rootEmitter.on(\"rootData:change\", (obj) => {\n                    global = _.set(global, obj.key, obj.value);\n\n                    if (global.socketIp && global.socketRoom) {\n                        // 全局变量发生变化时，需要通知其他屏，这里直接发送socket消息\n                        socket.emit(\"message\", {\n                            room: global.socketRoom, // 房间号\n                            type: \"internalType:ChangeGlobalValue\", // 需要保证此类型唯一性\n                            data: obj,\n                        });\n                    }\n                });\n\n                /**\n                 * 连接成功时进入对应的房间\n                 */\n                if (socket) {\n                    socket.on(\"connect\", function () {\n                        if (global.socketIp && global.socketRoom) {\n                            // 进入房间\n                            socket.emit(\"join-room\", global.socketRoom);\n                            state.isSocketConnect = true;\n                        }\n                    });\n                }\n\n                /**\n                 * 接收到 socket 消息时触发\n                 * @param data 消息内容 {type:'消息类型',data:实际的数据,任何类型}\n                 */\n                if (socket) {\n                    socket.on(\"message\", function (data) {\n                        // socket 监听全局变量的变化，然后合并值\n                        if (data.type === \"internalType:ChangeGlobalValue\") {\n                            // 合并 globa 的值\n                            global = _.set(global, data.data.key, data.data.value);\n                        } else {\n                            // 发送消息，通知其他页面\n                            rootEmitter.emit(\"rootSocket:change\", data);\n                        }\n                    });\n                }\n\n                // 监听 socket 房间的变化\n                watch(\n                    () => global.socketRoom,\n                    (val, oldVal) => {\n                        if (socket) {\n                            // 离开房间\n                            socket.emit(\"leave-room\", oldVal);\n                            // 进入房间\n                            socket.emit(\"join-room\", val);\n                        }\n                    },\n                );\n\n                onBeforeUnmount(() => {\n                    // 离开房间\n                    socket.emit(\"leave-room\", global.socketRoom);\n                    // 断开连接\n                    socket.disconnect();\n                });\n\n                // 业务逻辑\n                var SERVICE_URL = \"http://192.168.24.106:10157/service\";\n                var INTERFACE_URL =\n                    \"/serviceinterface/search/run.action?token=dcp&interfaceId=\";\n                var I_HOUR_ID = \"63d62dc9fddd06e0375c684fbef2a770\";\n                var I_DAY_ID = \"9082e59c108119dfcbc7e74c43f330ba\";\n\n                // 站点列表\n                const stationList = ref([]);\n                let signal = null; // 用于取消请求的信号\n                //查询数据\n                function queryData(query) {\n                    if (signal) {\n                        signal.abort(); // 取消上一个请求\n                    }\n                    signal = new AbortController(); // 创建新的取消信号\n                    const url = SERVICE_URL + INTERFACE_URL + I_HOUR_ID;\n                    const params = {\n                        MONITORTIME: query.MONITORTIME || \"\",\n                        REGION_PATH: query.REGION_PATH || \"\",\n                        POINT_TYPE: \"0,1,2,4\",\n                        DATE_TYPE: query.DATE_TYPE || \"\",\n                    }\n                    axios\n                        .post(url, params, {\n                            signal,\n                        })\n                        .then(function (response) {\n                            const { head: { statusCode }, data } = response.data;\n                            if (statusCode === \"200\") {\n                                stationList.value = data || [];\n                            } else {\n                                stationList.value = [];\n                            }\n                        })\n                        .catch(function (error) {\n                            console.error(error);\n                            stationList.value = [];\n                        });\n                }\n                //  获取站点类型名称\n                const getPointTypeName = (type) => {\n                    switch (type) {\n                        case \"0\":\n                            return \"国控\";\n                        case \"1\":\n                            return \"省控\";\n                        case \"2\":\n                            return \"市控\";\n                        case \"3\":\n                            return \"县控\";\n                        case \"4\":\n                            return \"微站\";\n                        default:\n                            return \"\";\n                    }\n                };\n                // 获取站点图标\n                const getPointTypeIcon = (type) => {\n                    switch (type) {\n                        case \"0\":\n                            return \"var(--station-0)\";\n                        case \"1\":\n                            return \"var(--station-1)\";\n                        case \"2\":\n                            return \"var(--station-2)\";\n                        case \"3\":\n                        case \"4\":\n                        case \"5\":\n                            return \"var(--station-3)\";\n                        default:\n                            return \"\";\n                    }\n                };\n                onMounted(() => {\n                    // 通知大屏当前页面已加载完成\n                    rootData.rootSocket.emit(\"message\", {\n                        room: global.socketRoom, // 房间号\n                        type: \"exceedSitesInit\", // 消息名称\n                        data: {}, // 发送的数据\n                    });\n                    // 接收socket消息\n                    rootData.rootOn(\"rootSocket:change\", (data) => {\n                        switch (data.type) {\n                            case \"getDxceedSitesData\":\n                                queryData(data.data);\n                                break;\n                            // 切换主题\n                            case \"changeTheme\":\n                              if (data?.data?.themeName) {\n                                const bodyDom = document.querySelector(\"body\");\n                                if (bodyDom && data?.data?.themeName) {\n                                  bodyDom.className = data?.data?.themeName;\n                                }\n                              }\n                              break;\n                            default:\n                                break;\n                        }\n                    });\n                });\n\n                return {\n                    stationList,\n                    getPointTypeName,\n                    getPointTypeIcon,\n                };\n            },\n        });\n\n        app.mount(\"#app\");\n    <\/script>\n</body>\n\n</html>",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"405px","height":"202px","position":"unset","left":"24px","top":"908px"}}},
socketUrl:"http://192.168.0.202:7777/socketPath",
roomId:"admin", 
 },
},
tComponentx0x28: {
defaultStyle: {
            default: {"width":"410px","height":"75px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","left":"19px","top":"1162px","position":"unset"},
            
            },
 default: { 
 
name:"airOverviewQualityRankRegionComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"75px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","left":"19px","top":"1162px","position":"unset"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airOverviewQualityRankRegion",
componentName:"airOverviewQualityRankRegionComponent", 
 },
},
});
const handleTimeTypeChange = (timeType) => {
/**
 * 处理时间类型tab变化
 * timeType：时间类型-hour、day、month、quarter、year
 */
switch (timeType) {
  case 'hour':
    state.dateType = 'datetimehour';
    break;
  case 'day':
    state.dateType = 'date';
    break;
  case 'month':
  case 'year':
    state.dateType = timeType;
    break;
  default:
    break;
}
// 1、设置内容显示变量值
setContentVisibleValue();
// 2、设置公共内容的位置
setCommonContentPosition();
// // 当前指标数据
// const curIndexList = getCenterIndexList('air', timeType);
// rootData.rootEmit(
//   // 固定的消息名称，不能修改
//   'rootData:change',
//   {
//     // 全局变量的键名
//     key: 'air.centerIndexList',
//     // 将要修改的全局变量的键值
//     value: curIndexList,
//   },
// );
// rootData.rootEmit(
//   // 固定的消息名称，不能修改
//   'rootData:change',
//   {
//     // 全局变量的键名
//     key: 'air.centerIndexSelect',
//     // 将要修改的全局变量的键值
//     value: curIndexList[0].name,
//   },
// );
};
const setProvider = () => {

provide('airOverviewContentState', state);
};
const setStandardBelowContentPosition = () => {
/**
 * 设置“达标考核情况”下方内容的位置
 */
const isFold = state.standardContentFold;

// 展开与不展开的位置差300px
/* 当前整个页面高度：
 *   展示空气质量排名-表格（动态组件高度340px）
 *   与展示行政区-空气质量排名-卡片（动态组件高度75px），相差265px
 */
if (state.isDayOrHour) { // 日、小时
  // 当前整个页面内容-高度
  setDomHeightValue('t-l-c-airOverviewContent', isFold ? '1029px' : '1230px');
  // 空气质量预报-标题
  setDomTopValue('t-component-1dfb.633d7107b', isFold ? '633px' : '800px')
  // 空气质量预报-卡片
  setDomTopValue('t-component-9c0b.c1f74dcf8', isFold ? '676px' : '843px')
  // 超标站点统计-标题
  setDomTopValue('t-component-2685.21276fc9e', isFold ? '900px' : '1070px');
  // 超标站点统计-卡片
  setDomTopValue('t-iframe-ca51.9b9877f5a', isFold ? '938px' : '1108px');
  
  // 空气质量排名-标题
  setDomTopValue('t-component-e08a.c918ca32d', isFold ? '1147px' : '1317px');
  // 空气质量排名-表格
  // setDomTopValue('t-component-4f0c.743c6163e', isFold ? '940px' : '1240px');
  // 行政区-空气质量排名-卡片
  setDomTopValue('t-component-f0c0.1b8778952', isFold ? '1192px' : '1366px');
} 
// else if (state.isMonthOrYear) { // 月、季度、年
//   // 当前整个页面内容-高度
//   setDomHeightValue('t-l-c-airOverviewContent', isFold ? '1509px' : '1809px');
//   // 空气质量排名-标题
//   setDomTopValue('t-component-e08a.c918ca32d', isFold ? '1381px' : '1681px');
//   // 空气质量排名-表格
//   // setDomTopValue('t-component-4f0c.743c6163e', isFold ? '1426px' : '1726px');
//   // 行政区-空气质量排名-卡片
//   setDomTopValue('t-component-f0c0.1b8778952', isFold ? '1426px' : '1726px');
// }  
// else if (state.isProvince) { // 省
//   // 当前整个页面内容-高度
//   setDomHeightValue('t-l-c-airOverviewContent', isFold ? '857px' : '1157px');
//   // 空气质量排名-标题
//   setDomTopValue('t-component-e08a.c918ca32d', isFold ? '723px' : '1023px');
//   // 空气质量排名-表格
//   // setDomTopValue('t-component-4f0c.743c6163e', isFold ? '768px' : '1068px');
//   // 行政区-空气质量排名-卡片
//   setDomTopValue('t-component-f0c0.1b8778952', isFold ? '768px' : '1068px');
// }
};
const setCommonContentPosition = () => {
/**
 * 设置公共内容的默认位置（达标考核情况、空气质量排名）
 */

// 选择日、小时
if (state.isDayOrHour) {
  // 达标考核标题
  setDomTopValue('t-component-4b3f.2cfafc59', '414px');
  // 达标考核第一项内容
  setDomTopValue('t-component-8bb9.af6688f5a', '458px');
  // 达标考核后三项内容
  setDomTopValue('t-component-5aa4.688be3ff9', '558px');
  // 展开按钮
  setDomTopValue('t-rect-e1db.376b96d46', '558px');
  // 收起按钮
  setDomTopValue('t-rect-9f3a.24d71e31c', '760px');
} else if (state.isMonthOrYear) { // 选择月、季度、年
  // 达标考核标题
  setDomTopValue('t-component-4b3f.2cfafc59', '1180px');
  // 达标考核第一项内容
  setDomTopValue('t-component-8bb9.af6688f5a', '1224px');
  // 展开按钮
  setDomTopValue('t-rect-e1db.376b96d46', '1324px');
  // 达标考核后三项内容
  setDomTopValue('t-component-5aa4.688be3ff9', '1324px');
  // 收起按钮
  setDomTopValue('t-rect-9f3a.24d71e31c', '1624px');
} else if (state.isProvince) { // 全省
  // 达标考核标题
  setDomTopValue('t-component-4b3f.2cfafc59', '522px');
  // 达标考核第一项内容
  setDomTopValue('t-component-8bb9.af6688f5a', '566px');
  // 展开按钮
  setDomTopValue('t-rect-e1db.376b96d46', '666px');
  // 达标考核后三项内容
  setDomTopValue('t-component-5aa4.688be3ff9', '666px');
  // 收起按钮
  setDomTopValue('t-rect-9f3a.24d71e31c', '966px');
}
// 当前页面-设置高度、空气质量排名标题、空气质量排名内容top值
setStandardBelowContentPosition();



};
const initPageData = () => {
function setPageContent() {
  let regionLevelCode = getRegionLevel(global.regionaQuery.regionCode);
  if (regionLevelCode === 'province') {
    state.isProvince = true;
    state.isMonthOrYear = false;
    state.isDayOrHour = false;
  } else {
    // 1、isProvince 行政区是否选中全省
    state.isProvince = false;
    // 2、设置内容显示变量值
    setContentVisibleValue();
  }
  // 设置公共内容的位置
  setCommonContentPosition();
}

setTimeout(() => {
  setPageContent();
},800);

// 监听行政区变化
watch(
  () => global.regionaQuery.regionCode,
  (regionCode) => {
    if (regionCode) {
      setPageContent();
    }
  }
);
};
const setContentVisibleValue = () => {
/**
 * 根据时间类型、行政区类型-设置内容显示条件的变量值
 */
/**
 * timeType：时间类型-hour、day、month、quarter、year
 */
// 先置为false
state.isDayOrHour = false;
state.isMonthOrYear = false;
switch (state.timeType) {
  case 'hour':
  case 'day':
    // 如果不是全省
    if (!state.isProvince) {
      state.isDayOrHour = true;
    }
    break;
  case 'month':
  case 'quarter':
  case 'year':
    // 如果不是全省
    if (!state.isProvince) {
      state.isMonthOrYear = true;
    }
    break;
  default:
    break;
}
};
const handleQuarterTimeValue = () => {
/**
 * 处理季度时间的时间值
 * quarterYear: 季度年份值
 * quarterValue : 季度数值1、2、3、4
 */
if (!state.quarterYear || !state.quarterValue) return;
state.timeValue = `${state.quarterYear}-${state.quarterValue}`;
sendTimeMes(false);
};
const sendTimeMes = (changeTimeType) => {
/**
 * changeTimeType: 是否改变了时间类型
 */
// 改变时间轴数据消息
rootData.rootSocket.emit(
  // 固定的消息名称，不能修改
  'message',
  {
    // 键名不能改 房间号，这里为默认值，一般无需修改，如果变量名称自己定义的则需要修改
    room: global.socketRoom,
    // 键名不能改 消息名称
    type: 'changeTimeAxisData',
    // 键名不能改 消息内容 对象格式
    data: {
      sourceType: 'airOverview',
      timeType: state.timeType,
      timeValue: state.timeValue,
    },
  }
);
// 改变时间类型发送消息-changeTimeType
if (changeTimeType) {
  // 给地图发消息-changeTimeType
  rootData.rootSocket.emit(
    // 固定的消息名称，不能修改
    'message',
    {
      room: global.socketRoom,
      type: 'changeTimeType',
      data: {
        TIME_TYPE: state.timeType,
        POLLUTE: global.air.centerIndexSelect,
        MONITORTIME: state.timeValue,
      },
    }
  );
} else {
  // 给地图发消息-changeTime
  rootData.rootSocket.emit(
    // 固定的消息名称，不能修改
    'message',
    {
      room: global.socketRoom,
      type: 'changeTime',
      data: {
        MONITORTIME: state.timeValue,
      },
    }
  );
}

// 判断是否是最新时间
if(state.timeType === 'hour') {
  state.isNewDate = state.timeValue === dateFormat(new Date(state.maxTimeValue), 'YYYY-MM-DD HH');
} else if (state.timeType === 'day') {
  state.isNewDate = state.timeValue === dateFormat(new Date(), 'YYYY-MM-DD');
}
console.log(state.isNewDate, '@@@')

};
const setTimeNormalValue = (timeValue) => {
state.timeValue = timeValue || '';
global.airOverview.rightView.timeValue = timeValue || ''
if (state.timeType === 'quarter') {
  state.quarterYear = handleStringSplit(timeValue || '', '-')[0] || '';
  state.quarterValue = handleStringSplit(timeValue || '', '-')[1] || '';
}
};
const judgeIsNewDate = () => {
// 判断是否是最新时间
state.isNewDate = state.maxTimeValue.includes(state.timeValue);
};
const watchPointCode = () => {

watch(() => global.regionaQuery.regionCode, (newValue) => {
  if (newValue) {
    const regionLevelCode = getRegionLevel(global.regionaQuery.regionCode);
    switch (regionLevelCode) {
      case 'province':
      case 'city':
        state.pointType = '12';
        break;
      case 'county':
        state.pointType = '13';
        break;
      default:
        break;
    }
    state.pointCode = newValue.slice(0, 6)
  }
}, { immediate: true })
};
const onSocket = () => {
rootData.rootOn('rootSocket:change', (data) =>{
    // 超标站点统计iframe加载完成
    if (data.type === 'exceedSitesInit') {
      setTimeout(()=>{
        rootData.rootSocket.emit(
        'message',  // 固定的消息名称，不能修改
        {
          room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
          type: 'getDxceedSitesData',  // 消息类型名称
          data: {                   // 消息内容，对象格式
            DATE_TYPE:state.timeType?.toUpperCase() || '',
            MONITORTIME:state.timeValue,
            REGION_PATH:global.regionaQuery.regionCode
          }
        }
      );
      },300)
    }
});

watch(()=>[state.timeType,state.timeValue,global.regionaQuery.regionCode],()=>{
        rootData.rootSocket.emit(
        'message',  // 固定的消息名称，不能修改
        {
          room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
          type: 'getDxceedSitesData',  // 消息类型名称
          data: {                   // 消息内容，对象格式
            DATE_TYPE:state.timeType?.toUpperCase() || '',
            MONITORTIME:state.timeValue,
            REGION_PATH:global.regionaQuery.regionCode
          }
        }
      );
})
};
const onchange1734923044075_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.quarterValue = value;
// 执行自定义方法
handleQuarterTimeValue();
};
const ontabClick1734923044075_0_0 = (data) => {
// 设置变量值
state.timeType = data.value;
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'air.timeType',
                    value:data.value,
                    data: {
                      air:{timeType: data.value}
                    },
                  });
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'airOverview.rightView.timeType',
                    value:data.value,
                    data: {
                      airOverview:{rightView:{timeType: data.value}}
                    },
                  });
// 执行自定义方法
handleTimeTypeChange(data.value);
};
const onclick1734348074456 = () => {

// 隐藏元素并加动画
runAnimation('t-rect-e1db.376b96d46', [""], 'none');

// 显示元素并加动画
document.getElementById('t-component-5aa4.688be3ff9').style.display = 'block';
runAnimation('t-component-5aa4.688be3ff9', [""]);

// 显示元素并加动画
document.getElementById('t-rect-9f3a.24d71e31c').style.display = 'block';
runAnimation('t-rect-9f3a.24d71e31c', [""]);
// 设置变量值
state.standardContentFold = false;
// 执行自定义方法
setStandardBelowContentPosition(false);
};
const ondateChange1734935797960 = (data) => {
// 设置变量值
state.quarterYear = data;
// 执行自定义方法
handleQuarterTimeValue();
};
const ondateChange1734936115799 = (data) => {
// 设置变量值
state.timeValue = data;
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'airOverview.rightView.timeValue',
                    value:data,
                    data: {
                      airOverview:{rightView:{timeValue: data}}
                    },
                  });
// 执行自定义方法
sendTimeMes(false);
};
const onclick1734348428072 = () => {

// 显示元素并加动画
document.getElementById('t-rect-e1db.376b96d46').style.display = 'block';
runAnimation('t-rect-e1db.376b96d46', [""]);

// 隐藏元素并加动画
runAnimation('t-component-5aa4.688be3ff9', [""], 'none');

// 隐藏元素并加动画
runAnimation('t-rect-9f3a.24d71e31c', [""], 'none');
// 设置变量值
state.standardContentFold = true;
// 执行自定义方法
setStandardBelowContentPosition(true);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getLatestTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_TYPE":"state.pointType","POINT_CODE":"state.pointCode","TIME_TYPE":"state.timeType","interfaceId":"66ad2ebe9d660295568b05187f34e133"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_TYPE":state.pointType,"POINT_CODE":state.pointCode,"TIME_TYPE":state.timeType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_TYPE":state.pointType,"POINT_CODE":state.pointCode,"TIME_TYPE":state.timeType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.maxTimeValue = data?.MONITORTIME ? (state.timeType === 'hour' ? data?.MONITORTIME + ':00' : data?.MONITORTIME) : '';
  if (state.timeType === 'quarter') {
    state.maxQuarterYear = handleStringSplit(data?.MONITORTIME || '', '-')[0] || '';
  }
  setTimeNormalValue(data?.MONITORTIME);
  sendTimeMes(true);
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
watch(() => [state.pointCode,state.timeType], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getLatestTime', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewContent', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setProvider();
/* 接收socket.io消息 */
const onSocketChangec61e19070e3a4bd99e4f = function (data) {
if(data.type === "changeTime"){
try{
// 执行自定义方法
setTimeNormalValue(data.data.MONITORTIME);
// 执行自定义方法
judgeIsNewDate();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangec61e19070e3a4bd99e4f);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangec61e19070e3a4bd99e4f);
});
// 执行自定义方法
watchPointCode();
// 执行自定义方法
onSocket();
onMounted(() => {
setPageScale('t-l-c-airOverviewContent', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
document.getElementById('t-rect-e1db.376b96d46')?.setAttribute('attr-visible', document.getElementById('t-rect-e1db.376b96d46')?.style.display);
document.getElementById('t-rect-e1db.376b96d46')?.setAttribute('attr-visible', document.getElementById('t-rect-e1db.376b96d46')?.style.display);
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'air.timeType',
                    value:'hour',
                    data: {
                      air:{timeType: 'hour'}
                    },
                  });

// 隐藏元素并加动画
runAnimation('t-component-5aa4.688be3ff9', [""], 'none');

// 隐藏元素并加动画
runAnimation('t-rect-9f3a.24d71e31c', [""], 'none');
// 执行自定义方法
initPageData();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tComponentx0x3ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3.default, componentState.tComponentx0x3?.[state.screenSize]));

 const tComponentx0x4ComputedData = computed(() => _.merge({}, componentState.tComponentx0x4.default, componentState.tComponentx0x4?.[state.screenSize]));

 const tComponentx0x5ComputedData = computed(() => _.merge({}, componentState.tComponentx0x5.default, componentState.tComponentx0x5?.[state.screenSize]));

 const tComponentx0x6ComputedData = computed(() => _.merge({}, componentState.tComponentx0x6.default, componentState.tComponentx0x6?.[state.screenSize]));

 const tComponentx0x7ComputedData = computed(() => _.merge({}, componentState.tComponentx0x7.default, componentState.tComponentx0x7?.[state.screenSize]));

 const tComponentx0x8ComputedData = computed(() => _.merge({}, componentState.tComponentx0x8.default, componentState.tComponentx0x8?.[state.screenSize]));

 const tComponentx0x9ComputedData = computed(() => _.merge({}, componentState.tComponentx0x9.default, componentState.tComponentx0x9?.[state.screenSize]));

 const tComponentx0x10ComputedData = computed(() => _.merge({}, componentState.tComponentx0x10.default, componentState.tComponentx0x10?.[state.screenSize]));

 const tComponentx0x11ComputedData = computed(() => _.merge({}, componentState.tComponentx0x11.default, componentState.tComponentx0x11?.[state.screenSize]));

 const tComponentx0x12ComputedData = computed(() => _.merge({}, componentState.tComponentx0x12.default, componentState.tComponentx0x12?.[state.screenSize]));

 const tComponentx0x13ComputedData = computed(() => _.merge({}, componentState.tComponentx0x13.default, componentState.tComponentx0x13?.[state.screenSize]));

 const tComponentx0x14ComputedData = computed(() => _.merge({}, componentState.tComponentx0x14.default, componentState.tComponentx0x14?.[state.screenSize]));

 const tComponentx0x15ComputedData = computed(() => _.merge({}, componentState.tComponentx0x15.default, componentState.tComponentx0x15?.[state.screenSize]));

 const tComponentx0x16ComputedData = computed(() => _.merge({}, componentState.tComponentx0x16.default, componentState.tComponentx0x16?.[state.screenSize]));

 const tSelectx0x17ComputedData = computed(() => _.merge({}, componentState.tSelectx0x17.default, componentState.tSelectx0x17?.[state.screenSize]));

 const tComponentx0x18ComputedData = computed(() => _.merge({}, componentState.tComponentx0x18.default, componentState.tComponentx0x18?.[state.screenSize]));

 const tTabsBasex0x20ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x20.default, componentState.tTabsBasex0x20?.[state.screenSize]));

 const tRectx0x21ComputedData = computed(() => _.merge({}, componentState.tRectx0x21.default, componentState.tRectx0x21?.[state.screenSize]));

 const tRectx0x22ComputedData = computed(() => _.merge({}, componentState.tRectx0x22.default, componentState.tRectx0x22?.[state.screenSize]));

 const tComponentx0x23ComputedData = computed(() => _.merge({}, componentState.tComponentx0x23.default, componentState.tComponentx0x23?.[state.screenSize]));

 const tComponentx0x24ComputedData = computed(() => _.merge({}, componentState.tComponentx0x24.default, componentState.tComponentx0x24?.[state.screenSize]));

 const tDatePickerx0x25ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x25.default, componentState.tDatePickerx0x25?.[state.screenSize]));

 const tDatePickerx0x26ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x26.default, componentState.tDatePickerx0x26?.[state.screenSize]));

 const tIframex0x27ComputedData = computed(() => _.merge({}, componentState.tIframex0x27.default, componentState.tIframex0x27?.[state.screenSize]));

 const tComponentx0x28ComputedData = computed(() => _.merge({}, componentState.tComponentx0x28.default, componentState.tComponentx0x28?.[state.screenSize]));

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
tComponentx0x1ComputedData,
tComponentx0x2ComputedData,
tComponentx0x3ComputedData,
tComponentx0x4ComputedData,
tComponentx0x5ComputedData,
tComponentx0x6ComputedData,
tComponentx0x7ComputedData,
tComponentx0x8ComputedData,
tComponentx0x9ComputedData,
tComponentx0x10ComputedData,
tComponentx0x11ComputedData,
tComponentx0x12ComputedData,
tComponentx0x13ComputedData,
tComponentx0x14ComputedData,
tComponentx0x15ComputedData,
tComponentx0x16ComputedData,
tSelectx0x17ComputedData,
tComponentx0x18ComputedData,
tTabsBasex0x20ComputedData,
tRectx0x21ComputedData,
tRectx0x22ComputedData,
tComponentx0x23ComputedData,
tComponentx0x24ComputedData,
tDatePickerx0x25ComputedData,
tDatePickerx0x26ComputedData,
tIframex0x27ComputedData,
tComponentx0x28ComputedData,
onchange1734923044075_0_0,
ontabClick1734923044075_0_0,
onclick1734348074456,
onclick1734348428072,
ondateChange1734935797960,
ondateChange1734936115799,
};
},
}
</script>

<style scoped>
.t-l-c-airOverviewContent {
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
height: 1297px;
width: 450px;
background-color: rgba(0,0,0,0);
}
.t-l-c-airOverviewContent .airOverviewContent-t-rect-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 450px;
height: 44px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-component-0-1 {
position: absolute !important;
top: 870px;
left: 24px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-component-0-2 {
position: absolute !important;
top: 409px;
left: 22px;
width: 410px;
height: 220px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-component-0-3 {
position: absolute !important;
top: 403px;
left: 21px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-component-0-4 {
position: absolute !important;
top: 447px;
left: 21px;
width: 410px;
height: 88px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-component-0-5 {
position: absolute !important;
top: 543px;
left: 21px;
width: 410px;
height: 200px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-component-0-6 {
position: absolute !important;
top: 605px;
left: 21px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-component-0-7 {
position: absolute !important;
top: 636px;
left: 20px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-component-0-8 {
position: absolute !important;
top: 1117px;
left: 20px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-component-0-9 {
position: absolute !important;
top: 1155px;
left: 20px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-component-0-10 {
position: absolute !important;
top: 1200px;
left: 20px;
width: 410px;
height: 170px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-component-0-11 {
position: absolute !important;
top: 70px;
left: 20px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-component-0-12 {
position: absolute !important;
top: 114px;
left: 20px;
width: 410px;
height: 263px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-component-0-13 {
position: absolute !important;
top: 113px;
left: 20px;
width: 410px;
height: 248px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-component-0-14 {
position: absolute !important;
top: 68px;
left: 20px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-component-0-15 {
position: absolute !important;
top: 385px;
left: 21px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-component-0-16 {
position: absolute !important;
top: 430px;
left: 21px;
width: 410px;
height: 164px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-select-0-17 {
position: absolute !important;
top: 0px;
left: 334px;
width: 102px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-component-0-18 {
position: absolute !important;
top: 648px;
left: 21px;
width: 410px;
height: 212px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-tabs-base-0-20 {
position: absolute !important;
top: 0px;
left: 16px;
width: 200px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-rect-0-21 {
position: absolute !important;
top: 547px;
left: 211px;
width: 30px;
height: 24px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-rect-0-22 {
position: absolute !important;
top: 1272px;
left: 210px;
width: 30px;
height: 24px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-component-0-23 {
position: absolute !important;
top: 68px;
left: 20px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-component-0-24 {
position: absolute !important;
top: 111px;
left: 20px;
width: 410px;
height: 377px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-date-picker-0-25 {
position: absolute !important;
top: 0px;
left: 228px;
width: 106px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-date-picker-0-26 {
position: absolute !important;
top: 0px;
left: 230px;
width: 207px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-iframe-0-27 {
position: absolute !important;
top: 908px;
left: 24px;
width: 405px;
height: 202px;
pointer-events: auto;
}

.t-l-c-airOverviewContent .airOverviewContent-t-component-0-28 {
position: absolute !important;
top: 1162px;
left: 19px;
width: 410px;
height: 75px;
pointer-events: auto;
}
</style>
