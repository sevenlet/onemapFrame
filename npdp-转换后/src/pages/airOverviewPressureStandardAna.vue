<template>
  <div id="t-l-c-airOverviewPressureStandardAna" class="t-l-c-airOverviewPressureStandardAna" ><t-text v-if="state.timeType === 'month'" id="t-text-c46a.863dfc4bb" class="airOverviewPressureStandardAna-t-text-0-0"  :label="tTextx0x0ComputedData.label" :editable="tTextx0x0ComputedData.editable" :c-style="tTextx0x0ComputedData.cStyle"></t-text><t-rect id="t-rect-76a2.c0bb89a58" class="airOverviewPressureStandardAna-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-list-card id="t-list-card-863a.ed37a208c" class="airOverviewPressureStandardAna-t-list-card-0-2"  :data="state.summary" :spacing-x="tListCardx0x2ComputedData.spacingX" :col="tListCardx0x2ComputedData.col" :direction="tListCardx0x2ComputedData.direction" :exchange-order="tListCardx0x2ComputedData.exchangeOrder" :unit-break="tListCardx0x2ComputedData.unitBreak" :key-field="tListCardx0x2ComputedData.keyField" :active-key-field="tListCardx0x2ComputedData.activeKeyField" :active="tListCardx0x2ComputedData.active" :c-style="tListCardx0x2ComputedData.cStyle"></t-list-card><t-text id="t-text-b046.2681bce6c" class="airOverviewPressureStandardAna-t-text-0-3"  :label="state.text" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle" :show-title="tTextx0x3ComputedData.showTitle"></t-text><t-select v-if="state.timeType === 'month'" id="t-select-eb84.d5dc7d182" class="airOverviewPressureStandardAna-t-select-0-4"  :active-value="state.monthTypeTimeObj.monthEndValue" :options="tSelectx0x4ComputedData.options" :alias="tSelectx0x4ComputedData.alias" :multiple="tSelectx0x4ComputedData.multiple" :placeholder="tSelectx0x4ComputedData.placeholder" :clearable="tSelectx0x4ComputedData.clearable" :disabled="tSelectx0x4ComputedData.disabled" :name="tSelectx0x4ComputedData.name" :autocomplete="tSelectx0x4ComputedData.autocomplete" :filterable="tSelectx0x4ComputedData.filterable" :no-match-text="tSelectx0x4ComputedData.no-match-text" :no-data-text="tSelectx0x4ComputedData.no-data-text" :c-style="tSelectx0x4ComputedData.cStyle" @change="onchange1736926426761_0_0"></t-select><t-select v-if="state.timeType === 'month'" id="t-select-6191.f56c5067a" class="airOverviewPressureStandardAna-t-select-0-5"  :active-value="state.monthTypeTimeObj.monthStartValue" :options="tSelectx0x5ComputedData.options" :alias="tSelectx0x5ComputedData.alias" :multiple="tSelectx0x5ComputedData.multiple" :placeholder="tSelectx0x5ComputedData.placeholder" :clearable="tSelectx0x5ComputedData.clearable" :disabled="tSelectx0x5ComputedData.disabled" :name="tSelectx0x5ComputedData.name" :autocomplete="tSelectx0x5ComputedData.autocomplete" :filterable="tSelectx0x5ComputedData.filterable" :no-match-text="tSelectx0x5ComputedData.no-match-text" :no-data-text="tSelectx0x5ComputedData.no-data-text" :c-style="tSelectx0x5ComputedData.cStyle" @change="onchange1736922453814"></t-select><t-radio id="t-radio-7f0b.3b07e2968" class="airOverviewPressureStandardAna-t-radio-0-6"  :options="tRadiox0x6ComputedData.options" :active="state.radioSelect" :alias="tRadiox0x6ComputedData.alias" :disabled="tRadiox0x6ComputedData.disabled" :border="tRadiox0x6ComputedData.border" :size="tRadiox0x6ComputedData.size" :is-use-button="tRadiox0x6ComputedData.isUseButton" :c-style="tRadiox0x6ComputedData.cStyle" @change="onchange1733910066067"></t-radio><t-table v-if="state.monthTableVisible === true" id="t-table-173b.28e81f885" class="airOverviewPressureStandardAna-t-table-0-7"  :height="tTablex0x7ComputedData.height" :stripe="tTablex0x7ComputedData.stripe" :border="tTablex0x7ComputedData.border" :auto-scroll="tTablex0x7ComputedData.autoScroll" :speed="tTablex0x7ComputedData.speed" :show-animation="tTablex0x7ComputedData.showAnimation" :animation-delay="tTablex0x7ComputedData.animationDelay" :animation-type="tTablex0x7ComputedData.animationType" :columns="tTablex0x7ComputedData.columns" :data="state.list" :default-sort="tTablex0x7ComputedData.defaultSort" :c-style="tTablex0x7ComputedData.cStyle"></t-table><t-table v-if="state.yearTableVisible === true" id="t-table-86eb.c25920855" class="airOverviewPressureStandardAna-t-table-0-8"  :height="tTablex0x8ComputedData.height" :stripe="tTablex0x8ComputedData.stripe" :border="tTablex0x8ComputedData.border" :auto-scroll="tTablex0x8ComputedData.autoScroll" :speed="tTablex0x8ComputedData.speed" :show-animation="tTablex0x8ComputedData.showAnimation" :animation-delay="tTablex0x8ComputedData.animationDelay" :animation-type="tTablex0x8ComputedData.animationType" :columns="tTablex0x8ComputedData.columns" :data="state.list" :default-sort="tTablex0x8ComputedData.defaultSort" :c-style="tTablex0x8ComputedData.cStyle" :columns-raw="tTablex0x8ComputedData.columnsRaw"></t-table><t-chart-design v-if="state.radioSelect === 'city'" id="t-chart-design-9d89.a7aec8897" class="airOverviewPressureStandardAna-t-chart-design-0-10"  :empty-img="tChartDesignx0x10ComputedData.emptyImg" :c-style="tChartDesignx0x10ComputedData.cStyle" :options="state.options"></t-chart-design><t-radio id="t-radio-41ba.26df29cbb" class="airOverviewPressureStandardAna-t-radio-0-11"  :options="tRadiox0x11ComputedData.options" :active="state.timeType" :alias="tRadiox0x11ComputedData.alias" :disabled="tRadiox0x11ComputedData.disabled" :border="tRadiox0x11ComputedData.border" :size="tRadiox0x11ComputedData.size" :is-use-button="tRadiox0x11ComputedData.isUseButton" :c-style="tRadiox0x11ComputedData.cStyle" @change="onchange1736836251865_0_0"></t-radio><t-date-picker v-if="state.timeType === 'month'" id="t-date-picker-d206.4938ca689" class="airOverviewPressureStandardAna-t-date-picker-0-13"  :placeholder="tDatePickerx0x13ComputedData.placeholder" :start-placeholder="tDatePickerx0x13ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x13ComputedData.endPlaceholder" :type="tDatePickerx0x13ComputedData.type" :clearable="tDatePickerx0x13ComputedData.clearable" :range-separator="tDatePickerx0x13ComputedData.rangeSeparator" :default-date="state.yearTimeValue" :separator="tDatePickerx0x13ComputedData.separator" :readonly="tDatePickerx0x13ComputedData.readonly" :editable="tDatePickerx0x13ComputedData.editable" :c-style="tDatePickerx0x13ComputedData.cStyle" :is-disabled-front="tDatePickerx0x13ComputedData.isDisabledFront" :disabled-date="state.maxTimeValue" @date-change="ondateChange1736918539837_0_0"></t-date-picker><t-date-picker v-if="state.timeType === 'year'" id="t-date-picker-01fb.c3280cf0a" class="airOverviewPressureStandardAna-t-date-picker-0-14"  :placeholder="tDatePickerx0x14ComputedData.placeholder" :start-placeholder="tDatePickerx0x14ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x14ComputedData.endPlaceholder" :type="tDatePickerx0x14ComputedData.type" :clearable="tDatePickerx0x14ComputedData.clearable" :range-separator="tDatePickerx0x14ComputedData.rangeSeparator" :default-date="state.yearTimeValue" :separator="tDatePickerx0x14ComputedData.separator" :readonly="tDatePickerx0x14ComputedData.readonly" :editable="tDatePickerx0x14ComputedData.editable" :c-style="tDatePickerx0x14ComputedData.cStyle" :is-disabled-front="tDatePickerx0x14ComputedData.isDisabledFront" :disabled-date="state.maxTimeValue" @date-change="ondateChange1736835850279"></t-date-picker></div>
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
import { TChartDesign, TDatePicker, TListCard, TRadio, TRect, TSelect, TTable, TText } from '@ths/design';

export default {
  components: {
    TChartDesign,
    TDatePicker,
    TListCard,
    TRadio,
    TRect,
    TSelect,
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
   screenSize: "",
   monthTableVisible: false,
   yearTableVisible: true,
   monthTypeTimeObj: {"monthStartValue":"","monthEndValue":"","startTime":"","endTime":""},
   timeType: "year",
   maxTimeValue: "",
   yearTimeValue: "",
   options: {},
   text: "--",
   summary: [],
   list: [],
   timeValueText: "时间：--",
   radioSelect: "gkPoint",
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
tTextx0x0: {
defaultStyle: {
            default: {"width":"14px","height":"16px","color":"var(--business-text-avianize)","fontSize":"14px","top":"-37px","left":"862px","position":"unset"},
            
            },
 default: { 
 
label:"至",
editable:false,
cStyle:{"wrapper":{"default":{"width":"14px","height":"16px","color":"var(--business-text-avianize)","fontSize":"14px","top":"-37px","left":"862px","position":"unset"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"960px","height":"120px","position":"unset","left":"0px","top":"0px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"var(--t-border-radius-base)","borderTopRightRadius":"var(--t-border-radius-base)","borderBottomLeftRadius":"var(--t-border-radius-base)","borderBottomRightRadius":"var(--t-border-radius-base)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"960px","height":"120px","position":"unset","left":"0px","top":"0px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"var(--t-border-radius-base)","borderTopRightRadius":"var(--t-border-radius-base)","borderBottomLeftRadius":"var(--t-border-radius-base)","borderBottomRightRadius":"var(--t-border-radius-base)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","animationName":""}}}, 
 },
},
tListCardx0x2: {
defaultStyle: {
            default: {"width":"936px","height":"82px","position":"unset","left":"12px","top":"38px","overflow":"hidden scroll","animationName":""},
            
            },
 default: { 
 
data:[],
spacingX:0,
col:1,
direction:"horizontal",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"",
active:"",
cStyle:{"wrapper":{"default":{"width":"936px","height":"82px","position":"unset","left":"12px","top":"38px","overflow":"hidden scroll","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"flex-start","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"","width":"auto","textAlign":"right","paddingRight":"8px","lineHeight":"24px","color":"var(--business-text-avianize)","fontSize":"14px","cursor":"auto","whiteSpace":"nowrap"}},"numBox":{"default":{"backgroundColor":"","width":"auto","textAlign":"left","display":"inline-block","justifyContent":"flex-start","paddingLeft":"0px","lineHeight":"24px","paddingRight":"0px","paddingTop":"0px","paddingBottom":"0px"}},"num":{"default":{"fontSize":"14px","color":"var(--t-white)","whiteSpace":"normal","fontWeight":"700","cursor":"auto"}},"unit":{"default":{"color":"var(--t-white)","fontSize":"14px","cursor":"default"}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"936px","height":"24px","color":"var(--business-white)","position":"unset","left":"12px","top":"8px","fontSize":"14px","lineHeight":"24px","animationName":"","textOverflow":"ellipsis","whiteSpace":"nowrap","max-width":"936px","overflow":"hidden"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"936px","height":"24px","color":"var(--business-white)","position":"unset","left":"12px","top":"8px","fontSize":"14px","lineHeight":"24px","animationName":"","textOverflow":"ellipsis","whiteSpace":"nowrap","max-width":"936px","overflow":"hidden"}},"num":{"default":{"lineHeight":"24px","fontSize":"14px"}}},
showTitle:true, 
 },
},
tSelectx0x4: {
defaultStyle: {
            default: {"width":"82px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","left":"878px","top":"-45px","position":"unset"},
            
            },
 default: { 
 
activeValue:"",
options:[{"value":"01","label":"1月","disabled":false},{"value":"02","label":"2月","disabled":false},{"value":"03","label":"3月","disabled":false},{"value":"04","label":"4月","disabled":false},{"value":"05","label":"5月","disabled":false},{"value":"06","label":"6月","disabled":false},{"value":"07","label":"7月","disabled":false},{"value":"08","label":"8月","disabled":false},{"value":"09","label":"9月","disabled":false},{"value":"10","label":"10月","disabled":false},{"value":"11","label":"11月","disabled":false},{"value":"12","label":"12月","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"82px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","left":"878px","top":"-45px","position":"unset"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"color":"var(--t-white)"}}}, 
 },
},
tSelectx0x5: {
defaultStyle: {
            default: {"width":"82px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","left":"778px","top":"-45px","position":"unset"},
            
            },
 default: { 
 
activeValue:"",
options:[{"value":"01","label":"1月","disabled":false},{"value":"02","label":"2月","disabled":false},{"value":"03","label":"3月","disabled":false},{"value":"04","label":"4月","disabled":false},{"value":"05","label":"5月","disabled":false},{"value":"06","label":"6月","disabled":false},{"value":"07","label":"7月","disabled":false},{"value":"08","label":"8月","disabled":false},{"value":"09","label":"9月","disabled":false},{"value":"10","label":"10月","disabled":false},{"value":"11","label":"11月","disabled":false},{"value":"12","label":"12月","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"82px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","left":"778px","top":"-45px","position":"unset"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"color":"var(--t-white)"}}}, 
 },
},
tRadiox0x6: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justify-content":"center","width":"159px","height":"20px","position":"unset","left":"0px","top":"132px","animationName":""},
            
            },
 default: { 
 
options:[{"label":"gkPoint","value":"国控站点","disabled":false},{"label":"city","value":"城市","disabled":false}],
active:"gkPoint",
alias:{"label":"label","value":"value","disabled":"disabled"},
disabled:false,
border:false,
size:"small",
isUseButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justify-content":"center","width":"159px","height":"20px","position":"unset","left":"0px","top":"132px","animationName":""}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"8px"},"active":{"color":"rgba(255, 255, 255, 1)"}},"circle":{"default":{"--el-color-white":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"active":{"--t-radio-active-bg-color":"var(--business-btn-active)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"itemWrapper":{"default":{"marginRight":"15px"}}}, 
 },
},
tTablex0x7: {
defaultStyle: {
            default: {"width":"960px","height":"385px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","position":"unset","left":"0px","top":"168px"},
            
            },
 default: { 
 
height:"385",
stripe:true,
border:false,
autoScroll:false,
speed:6,
showAnimation:false,
animationDelay:0.1,
animationType:"animate__fadeInUp",
columns:[{"label":"站点名称","key":"POINT_NAME","align":"left","operationList":[],"stateList":[],"width":"140PX","headerAlign":"left","showOverflowTooltip":true},{"label":"月份","key":"SHOW_MONTH","align":"center","operationList":[],"stateList":[],"width":"130PX"},{"label":"轻度污染以上天数近五年均值(天)","key":"a","align":"center","width":"140PX","stateList":[{"name":"0","fontStyle":{"color":"var(--business-white)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"1","fontStyle":{"color":"var(--business-warn)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"type":"state","stateKey":"aStatus"},{"label":"O₃-8h近五年均值(μg/m³)","key":"b","align":"center","labelRaw":"O₃-8h近五年均值(μg/m³)","width":"140PX","stateList":[{"name":"0","fontStyle":{"color":"var(--business-white)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"1","fontStyle":{"color":"var(--business-warn)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"type":"state","stateKey":"bStatus"},{"label":"NO₂近五年均值(μg/m³)","key":"c","align":"center","labelRaw":"NO₂近五年均值(μg/m³)","width":"130PX","stateList":[{"name":"0","fontStyle":{"color":"var(--business-white)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"1","fontStyle":{"color":"var(--business-warn)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"type":"state","stateKey":"cStatus"},{"label":"PM₁₀近五年均值(μg/m³)","key":"d","align":"center","labelRaw":"PM₁₀近五年均值(μg/m³)","width":"140PX","stateList":[{"name":"0","fontStyle":{"color":"var(--business-white)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"1","fontStyle":{"color":"var(--business-warn)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"type":"state","stateKey":"eStatus"},{"label":"PM₂.₅近五年均值(μg/m³)","key":"e","align":"center","labelRaw":"PM₂.₅近五年均值(μg/m³)","width":"140PX","stateList":[{"name":"0","fontStyle":{"color":"var(--business-white)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"1","fontStyle":{"color":"var(--business-warn)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"type":"state","stateKey":"dStatus"}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"960px","height":"385px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","position":"unset","left":"0px","top":"168px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"50px","backgroundColor":"var(--business-table-header-bg)   ","fontSize":"14px","fontWeight":"400","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px","paddingLeft":"12px","paddingRight":"12px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-table-odd-row-bg)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"var(--t-white)","height":"38px","paddingTop":"8px","paddingBottom":"8px","fontSize":"14px","fontFamily":"微软雅黑","paddingLeft":"10px"},"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"}},"stripeBodyCell":{"default":{"backgroundColor":"var(--business-table-even-row-bg)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"}}}, 
 },
},
tTablex0x8: {
defaultStyle: {
            default: {"width":"960px","height":"385px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","position":"unset","left":"0px","top":"168px"},
            
            },
 default: { 
 
height:"385",
stripe:true,
border:false,
autoScroll:false,
speed:6,
showAnimation:false,
animationDelay:0.1,
animationType:"animate__fadeInUp",
columns:[{"label":"站点名称","key":"POINT_NAME","align":"left","operationList":[],"stateList":[],"width":"260PX","headerAlign":"left","showOverflowTooltip":true},{"label":"轻度污染以上天数近五年均值(天)","key":"a","align":"center","width":"140PX","stateList":[{"name":"0","fontStyle":{"color":"var(--business-white)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"1","fontStyle":{"color":"var(--business-warn)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"type":"state","stateKey":"aStatus"},{"label":"O₃-8h 近五年均值(μg/m³)","key":"b","align":"center","labelRaw":"O₃-8h 近五年均值(μg/m³)","width":"150PX","stateList":[{"name":"0","fontStyle":{"color":"var(--business-white)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"1","fontStyle":{"color":"var(--business-warn)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"type":"state","stateKey":"bStatus"},{"label":"NO₂ 近五年均值(μg/m³)","key":"c","align":"center","labelRaw":"O₃-8h 近五年均值(μg/m³)","width":"130PX","stateList":[{"name":"0","fontStyle":{"color":"var(--business-white)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"1","fontStyle":{"color":"var(--business-warn)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"type":"state","stateKey":"cStatus"},{"label":"PM₁₀ 近五年均值(μg/m³)","key":"d","align":"center","labelRaw":"PM₁₀ 近五年均值(μg/m³)","width":"140PX","stateList":[{"name":"0","fontStyle":{"color":"var(--business-white)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"1","fontStyle":{"color":"var(--business-warn)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"type":"state","stateKey":"dStatus"},{"label":"PM₂.₅近五年均值(μg/m³)","key":"e","align":"center","labelRaw":"PM₁₀ 近五年均值(μg/m³)","width":"140PX","stateList":[{"name":"0","fontStyle":{"color":"var(--business-white)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"1","fontStyle":{"color":"var(--business-warn)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"type":"state","stateKey":"eStatus"}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"960px","height":"385px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","position":"unset","left":"0px","top":"168px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"50px","backgroundColor":"var(--business-table-header-bg)   ","fontSize":"14px","fontWeight":"400","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px","paddingLeft":"12px","paddingRight":"12px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-table-odd-row-bg)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"var(--t-white)","height":"38px","paddingTop":"8px","paddingBottom":"8px","fontSize":"14px","fontFamily":"微软雅黑","paddingLeft":"10px"},"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"}},"stripeBodyCell":{"default":{"backgroundColor":"var(--business-table-even-row-bg)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"}}},
columnsRaw:[{"label":"站点名称","key":"POINTNAME","align":"left","width":"130PX","headerAlign":"left","showOverflowTooltip":true},{"label":"轻度污染以上天数近五年均值(天)","key":"qdwsValue","align":"center","stateList":[{"name":"0","fontStyle":{"color":"var(--business-white)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"1","fontStyle":{"color":"var(--business-warn)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"125PX","type":"state","stateKey":"qdwsStatus"},{"label":"{{O3}}-8h 近五年均值(μg/{{M3}})","key":"qdwsValue","align":"center","labelRaw":"{{O3}}-8h 近五年均值(μg/{{M3}})","width":"150PX","stateList":[{"name":"0","fontStyle":{"color":"var(--business-white)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"1","fontStyle":{"color":"var(--business-warn)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"type":"state","stateKey":"qdwsStatus"},{"label":"{{NO2}} 近五年均值(μg/{{M3}})","key":"qdwsValue","align":"center","labelRaw":"{{O3}}-8h 近五年均值(μg/{{M3}})","width":"130PX","stateList":[{"name":"0","fontStyle":{"color":"var(--business-white)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"1","fontStyle":{"color":"var(--business-warn)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"type":"state","stateKey":"qdwsStatus"},{"label":"{{PM10}} 近五年均值(μg/{{M3}})","key":"qdwsValue","align":"center","labelRaw":"{{PM10}} 近五年均值(μg/{{M3}})","width":"140PX","stateList":[{"name":"0","fontStyle":{"color":"var(--business-white)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"1","fontStyle":{"color":"var(--business-warn)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"type":"state","stateKey":"qdwsStatus"},{"label":"{{PM10}} 近五年均值(μg/{{M3}})","key":"qdwsValue","align":"center","labelRaw":"{{PM10}} 近五年均值(μg/{{M3}})","width":"140PX","stateList":[{"name":"0","fontStyle":{"color":"var(--business-white)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"1","fontStyle":{"color":"var(--business-warn)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"type":"state","stateKey":"qdwsStatus"}], 
 },
},
tChartDesignx0x10: {
defaultStyle: {
            default: {"height":"412px","width":"960px","position":"unset","left":"0px","top":"173px"},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"412px","width":"960px","position":"unset","left":"0px","top":"173px"}},"emptyText":{"default":{"fontSize":"14px","color":"var(--business-no-data-color)"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
tRadiox0x11: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justify-content":"center","width":"158px","height":"20px","position":"unset","left":"500px","top":"-39px","animationName":""},
            
            },
 default: { 
 
options:[{"label":"month","value":"月累计","disabled":false},{"label":"year","value":"年累计","disabled":false}],
active:"year",
alias:{"label":"label","value":"value","disabled":"disabled"},
disabled:false,
border:false,
size:"small",
isUseButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justify-content":"center","width":"158px","height":"20px","position":"unset","left":"500px","top":"-39px","animationName":""}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"8px"},"active":{"color":"rgba(255, 255, 255, 1)"}},"circle":{"default":{"--el-color-white":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"active":{"--t-radio-active-bg-color":"var(--business-btn-active)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"itemWrapper":{"default":{"marginRight":"15px"}}}, 
 },
},
tDatePickerx0x13: {
defaultStyle: {
            default: {"width":"115px","height":"33px","position":"unset","left":"661px","top":"-45px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择年",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"year",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"115px","height":"33px","position":"unset","left":"661px","top":"-45px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tDatePickerx0x14: {
defaultStyle: {
            default: {"width":"300px","height":"33px","position":"unset","left":"661px","top":"-45px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择年",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"year",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"300px","height":"33px","position":"unset","left":"661px","top":"-45px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
});
const watchTab = () => {
watch(
  () => state.radioSelect,
  (val) => {
    if (val === 'gkPoint') {
      state.list = [];
      getGKZDList();
    } else if (val === 'city') {
      // state.timeType = '';
      state.name = getSeriesData();
      setOptions([
        {
          "name": state.name,
          "itemStyle": {
            "borderType": "dotted"
          }
        },
        {
          name: "严重污染"
        },
        {
          name: "重度污染"
        },
        {
          name: "中度污染"
        },
        {
          name: "轻度污染"
        }
      ])
      getCSBarData();
    }
  },
  {
    immediate: true
  }
)


};
const setOptions = (data) => {
state.options = {
    "series": [],
    "xAxis": {
        "data": [],
        "show": true,
        "name": "",
        "type": "category",
        "nameTextStyle": {
            "align": "left",
            "color": "#B7E3FF",
            "fontSize": 14,
            "fontFamily": "PF"
        },
        "nameGap": 5,
        "boundaryGap": true,
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "rgba(173, 197, 255, 0.5)",
                "width": 1,
                "type": "solid"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "rgba(173, 197, 255, 0.3)"
            }
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "color": [
                    "rgba(202,202,202,0.3)"
                ],
                "width": 1,
                "type": "solid"
            }
        },
        "axisLabel": {
            "show": true,
            "rotate": 0,
            "color": "#B7E3FF",
            "fontSize": 14,
            "fontFamily": "PF",
            "margin": 10
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        }
    },
    "color": [
        "#FF7E00",
        "#FF0000",
        "#99004C",
        "#7E0023",
        "#FFFFFF",
        "#8d98b3",
        "#e5cf0d",
        "#97b552",
        "#95706d",
        "#dc69aa",
        "#07a2a4",
        "#9a7fd1",
        "#588dd5",
        "#f5994e",
        "#c05050",
        "#59678c",
        "#c9ab00",
        "#7eb00a",
        "#6f5553",
        "#c14089"
    ],
    "backgroundColor": "rgba(0,0,0,0)",
    "textStyle": {},
    "title": {
        "show": false,
        "text": "标题",
        "padding": [
            5,
            5,
            5,
            5
        ],
        "left": "left",
        "top": "top",
        "textStyle": {
            "color": "#008acd"
        },
        "subtextStyle": {
            "color": "#aaaaaa"
        }
    },
    "toolbox": {
        "iconStyle": {
            "borderColor": "#2ec7c9"
        },
        "emphasis": {
            "iconStyle": {
                "borderColor": "#18a4a6"
            }
        }
    },
    "legend": {
        "show": true,
        "padding": [
            10,
            5,
            5,
            5
        ],
        "textStyle": {
            "color": "rgba(255, 255, 255, 1)",
            "fontSize": 12,
            "height": 8,
            "rich": {
                "a": {
                    "verticalAlign": "center"
                }
            }
        },
        "top": "bottom",
        "itemWidth": 16,
        "itemHeight": 16,
        "data": data
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "lineStyle": {
                "color": "#008acd",
                "width": "1"
            },
            "crossStyle": {
                "color": "#008acd",
                "width": "1"
            }
        },
        "backgroundColor": "rgba(0, 0, 0, 0.8)",
        "borderColor": "rgba(255, 255, 255, 0.5)",
        "textStyle": {
            "color": "rgba(255, 255, 255, 1)"
        },
        "confine": true
    },
    "markPoint": {
        "label": {
            "color": "#eeeeee"
        },
        "emphasis": {
            "label": {
                "color": "#eeeeee"
            }
        }
    },
    "valueAxis": {
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": true
        },
        "splitLine": {
            "show": false
        },
        "splitArea": {
            "show": false
        }
    },
    "dataZoom": [
        {
            "disabled": true,
            "type": "inside",
            "start": 0,
            "end": 100,
            "preventDefaultMouseMove": true
        },
        {
            "show": false,
            "type": "slider",
            "start": 0,
            "end": 100,
            "height": 12,
            "borderColor": "transparent",
            "backgroundColor": "#f8f8f8",
            "dataBackground": {
                "lineStyle": {
                    "width": 0
                },
                "areaStyle": {
                    "color": "transparent"
                }
            },
            "fillerColor": "#e1e1e1",
            "handleIcon": "path://path://M100, 100m -75, 0a75,75 0 1,0 150,0a75,75 0 1,0 -150,0",
            "handleStyle": {
                "color": "#fff",
                "shadowColor": "rgba(0, 0, 0, 0.2)",
                "shadowBlur": 4
            },
            "handleSize": "100%",
            "textStyle": {
                "color": "#888"
            },
            "bottom": "10px"
        }
    ],
    "yAxis": [
        {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "type": "solid",
                    "color": "rgba(173, 197, 255, 0.3)"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "rgba(173, 197, 255, 0.3)"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#B7E3FF",
                "fontSize": 14
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "type": "dashed",
                    "color": "rgba(173, 197, 255, 0.3)"
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.2)",
                        "rgba(210,219,238,0.2)"
                    ]
                }
            },
            "nameTextStyle": {
                "color": "#B7E3FF",
                "fontSize": 14
            },
            "name": "天"
        },
        {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "type": "solid",
                    "color": "rgba(173, 197, 255, 0.3)"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "rgba(173, 197, 255, 0.3)"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#B7E3FF",
                "fontSize": 14
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "type": "dashed",
                    "color": "rgba(173, 197, 255, 0.3)"
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.2)",
                        "rgba(210,219,238,0.2)"
                    ]
                }
            },
            "nameTextStyle": {
                "color": "#B7E3FF",
                "fontSize": 14
            }
        }
    ],
    "grid": {
        "top": "8%",
        "bottom": "9%",
        "left": "1%",
        "right": "2%",
        "containLabel": true
    }
}


};
const getSeriesData = () => {
// 获取剩余月份的图例，现在是4月就显示4-12月图例
const currentMonth = new Date().getMonth() + 1;
let remainingMonths = '';

if (currentMonth < 12) {
  const startMonth = currentMonth + 1;
  const endMonth = 12;
  remainingMonths = `${startMonth}-${endMonth}月`;
} else {
  remainingMonths = '12月';
}

return remainingMonths;
};
const setSelectTimeValue = () => {
if (Number(state.monthTypeTimeObj.monthStartValue) > Number(state.monthTypeTimeObj.monthEndValue)) {
  window.ElementPlus.ElMessage.error('开始月份不能大于结束月份，请重新选择');
  return;
}
// 请求数据
getSummary();
getGKZDList();
};
const handleTableVisible = () => {
state.list = [];
if (state.radioSelect === 'gkPoint') {
  state.monthTableVisible = state.timeType === 'month';
  state.yearTableVisible = state.timeType === 'year';
} else {
  state.monthTableVisible = false;
  state.yearTableVisible = false;
}

};
const setDomStyle = () => {
// t-list-card-863a.ed37a208c
// 多项卡片添加滚动条样式
const styleDom = document.createElement('style');
styleDom.innerHTML = `
   [id$="t-list-card-863a.ed37a208c"]::-webkit-scrollbar {
     width: 4px; 
   }
  `;
document.head.appendChild(styleDom);

};
const onchange1736922453814 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.monthTypeTimeObj.monthStartValue = value;
// 执行自定义方法
setSelectTimeValue();
};
const onchange1736926426761_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.monthTypeTimeObj.monthEndValue = value;
// 执行自定义方法
setSelectTimeValue();
};
const onchange1733910066067 = (data,selectOption) => {
// 设置变量值
state.radioSelect = data;
// 执行自定义方法
handleTableVisible();
};
const onchange1736836251865_0_0 = (data,selectOption) => {
// 设置变量值
state.timeType = data;
// 执行自定义方法
handleTableVisible();
};
const ondateChange1736835850279 = (data) => {
// 设置变量值
state.yearTimeValue = data;
// 事件交互-请求调用接口
getGKZDList().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
// 事件交互-请求调用接口
getSummary().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const ondateChange1736918539837_0_0 = (data) => {
// 设置变量值
state.yearTimeValue = data;
// 执行自定义方法
setSelectTimeValue();
};
// 接口函数
const getGKZDList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"END_MONTH":state.monthTypeTimeObj.monthEndValue,"START_MONTH":state.monthTypeTimeObj.monthStartValue,"YEAR_DATE":state.yearTimeValue,"DATA_TYPE":state.timeType,"interfaceId":"2f5c987ebabc177341ca56e521b3be1a"},}).then((res) => {
     // 成功的操作
     state.list = [];
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data.length) {
  state.list = data?.data.map(i=>({
    ...i,
    POINTNAME: i.POINT_NAME,
    a: i.POLLUTE_DAY,
    b: i.O3_8,
    c: i.NO2,
    d: i.PM10,
    e: i.PM25,
  }));

  // 比较每一个指标，将最大的那一行的这个指标标红（1为红，0为正常）

  // 字段列表，需要加status的字段
  const fields = ["a", "b", "c", "d", "e"];

  // 遍历数据数组
  state.list.forEach(item => {
    // 对每个字段进行遍历
    fields.forEach(field => {
      // 初始化最大值和最大值的索引
      let maxValue = -Infinity;
      let maxIndex = -1;

      // 遍历数组找到当前字段的最大值及其索引
      state.list.forEach((obj, index) => {
        let value = parseFloat(obj[field]);
        if (value > maxValue) {
          maxValue = value;
          maxIndex = index;
        }
      });

      // 根据最大值索引设置status
      if (state.list[maxIndex] === item) {
        item[`${field}Status`] = "1";
      } else {
        item[`${field}Status`] = "0";
      }
    });
  });
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.list = [];
      reject(error);
    });
  });
};
// 接口函数
const getCSBarData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"f09e2b09d34679dc139dac7476d55b21"},}).then((res) => {
     // 成功的操作
     const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
    state.options.xAxis.data = data.data.map(i => i.MONITORTIME)
    state.options.series = [
        {
            "name": "轻度污染",
            "type": "bar",
            "barWidth": 19,
            "barGap": "80%",
            "label": {
                "show": true,
                "position": "inside",
                "color": "#FFF"
            },
            "itemStyle": {
                "color": {
                    "type": "linear",
                    "x": 0,
                    "y": 1,
                    "x2": 0,
                    "y2": 0,
                    "colorStops": [
                        {
                            "offset": 1,
                            "color": "#FF7E00"
                        },
                        {
                            "offset": 0,
                            "color": "#FF7E00"
                        }
                    ]
                },
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            },
            "data": data.data.map(i => i.THREE_LEVEL === "0" ? "" : i.THREE_LEVEL) || [],
            "stack": "stack",
            "dataKey": "THREE_LEVEL",
            "style": {
                "stack": "stack",
                "label": {
                    "position": "inside",
                    "color": "#FFF",
                    "show": true
                },
                "barWidth": 19
            }
        },
        {
            "name": "中度污染",
            "type": "bar",
            "barWidth": 19,
            "barGap": "80%",
            "label": {
                "show": true,
                "position": "inside",
                "color": "#FFF"
            },
            "itemStyle": {
                "color": {
                    "type": "linear",
                    "x": 0,
                    "y": 1,
                    "x2": 0,
                    "y2": 0,
                    "colorStops": [
                        {
                            "offset": 1,
                            "color": "#FF0000"
                        },
                        {
                            "offset": 0,
                            "color": "#FF0000"
                        }
                    ]
                },
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            },
            "data": data.data.map(i => i.FOUR_LEVEL === "0" ? "" : i.FOUR_LEVEL) || [],
            "stack": "stack",
            "dataKey": "FOUR_LEVEL",
            "style": {
                "stack": "stack",
                "label": {
                    "position": "inside",
                    "color": "#FFF",
                    "show": true
                },
                "barWidth": 19
            }
        },
        {
            "name": "重度污染",
            "type": "bar",
            "barWidth": 19,
            "barGap": "80%",
            "label": {
                "show": true,
                "position": "inside",
                "color": "#FFF"
            },
            "itemStyle": {
                "color": {
                    "type": "linear",
                    "x": 0,
                    "y": 1,
                    "x2": 0,
                    "y2": 0,
                    "colorStops": [
                        {
                            "offset": 1,
                            "color": "#99004C"
                        },
                        {
                            "offset": 0,
                            "color": "#99004C"
                        }
                    ]
                },
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            },
            "data": data.data.map(i => i.FIVE_LEVEL === "0" ? "" : i.FIVE_LEVEL) || [],
            "stack": "stack",
            "dataKey": "FIVE_LEVEL",
            "style": {
                "stack": "stack",
                "label": {
                    "position": "inside",
                    "color": "#FFF",
                    "show": true
                },
                "barWidth": 19
            }
        },
        {
            "name": "严重污染",
            "type": "bar",
            "barWidth": 19,
            "barGap": "80%",
            "label": {
                "show": true,
                "position": "inside",
                "color": "#FFF"
            },
            "itemStyle": {
                "color": {
                    "type": "linear",
                    "x": 0,
                    "y": 1,
                    "x2": 0,
                    "y2": 0,
                    "colorStops": [
                        {
                            "offset": 1,
                            "color": "#7E0023"
                        },
                        {
                            "offset": 0,
                            "color": "#7E0023"
                        }
                    ]
                },
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            },
            "data": data.data.map(i => i.SIX_LEVEL === "0" ? "" : i.SIX_LEVEL) || [],
            "stack": "stack",
            "dataKey": "SIX_LEVEL",
            "style": {
                "stack": "stack",
                "label": {
                    "position": "inside",
                    "color": "#FFF",
                    "show": true
                },
                "barWidth": 19
            }
        },
        {
            "name": state.name,
            "type": "bar",
            "barWidth": 19,
            "barGap": "80%",
            "label": {
                "show": true,
                "position": "inside",
                "color": "#fff"
            },
            "itemStyle": {
                "color": "rgba(153, 69, 69, 0)",
                "barBorderWidth": 1,
                "barBorderColor": "#fff",
                "borderType": "dashed"
            },
            "data": data.data.map(i => i.FUTRUE_DAYS === "0" ? "" : i.FUTRUE_DAYS) || [],
            "stack": "stack",
            "dataKey": "FUTRUE_DAYS",
            "style": {
                "stack": "stack",
                "label": {
                    "position": "inside",
                    "color": "#fff",
                    "show": true
                },
                "itemStyle": {
                    "barBorderColor": "#fff",
                    "barBorderWidth": 1,
                    "borderType": "dashed",
                    "color": "rgba(153, 69, 69, 0)"
                }
            }
        }
    ]
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getSummary = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"END_MONTH":state.monthTypeTimeObj.monthEndValue,"START_MONTH":state.monthTypeTimeObj.monthStartValue,"YEAR_DATE":state.yearTimeValue,"DATA_TYPE":state.timeType,"interfaceId":"3520193a9262898df8ac81a3c231a673"},}).then((res) => {
     // 成功的操作
     state.summary = [];
state.text = "--";
// 无数据文本
const noValueText = '-';
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  const { IMPORT_TITLE, IMPORT_OUT_DAYS_NAME, OUT_DAYS_NAME, OUT_DAYS, IMPORT_O3_OUT_NAME, O3_NAME, O3_OUT, IMPORT_NO2_OUT_NAME, NO2_NAME, NO2_OUT } = data.data;
  const curSummary = [
    {
      "title": handleNoVal(replacePollutionCharacter(OUT_DAYS_NAME)),
      "num": handleNoVal(replacePollutionCharacter(IMPORT_OUT_DAYS_NAME)),
      "unit": handleNoVal(replacePollutionCharacter(OUT_DAYS)),
    },
    {
      "title": handleNoVal(replacePollutionCharacter(O3_NAME)),
      "num": handleNoVal(replacePollutionCharacter(IMPORT_O3_OUT_NAME)),
      "unit": handleNoVal(replacePollutionCharacter(O3_OUT)),
    },
    {
      "title": handleNoVal(replacePollutionCharacter(NO2_NAME)),
      "num": handleNoVal(replacePollutionCharacter(IMPORT_NO2_OUT_NAME)),
      "unit": handleNoVal(replacePollutionCharacter(NO2_OUT)),
    }
  ];
  // 过滤掉每项字段都没值的数据
  state.summary = curSummary.filter(obj => {
    // 获取对象的所有值
    const values = Object.values(obj);
    // 检查是否有任何值不是-的
    return values.some(value => value !== noValueText);
  });
  state.text = replacePollutionCharacter(IMPORT_TITLE) || "--"
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.summary = []
state.text = "--"
      reject(error);
    });
  });
};
// 初始请求，调取接口
getSummary();
// 接口函数
const getLastTime = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.timeType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
     // 成功的操作
     state.timeValueText = '时间：--';
state.maxTimeValue = '';
state.selectTime = '';
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  // 当前最新时间
  state.timeValueText = `时间：${data.data.MONITORTIME || '--'}`;
  state.maxTimeValue = data.data.MONITORTIME || '';

  if (state.timeType === 'month') {
    // 当前月时间
    const curMonth = dateFormat(new Date(), 'MM');
    state.yearTimeValue = handleStringSplit(data.data.MONITORTIME || '', '-')[0] || '';
    state.monthTypeTimeObj = {
      monthStartValue: handleStringSplit(data.data.MONITORTIME || '', '-')[1] || '',
      monthEndValue: curMonth,
      startTime: data.data.MONITORTIME || '',
      endTime: [handleStringSplit(data.data.MONITORTIME || '', '-')[0] || '', curMonth].join('-'),
    };
  } else if (state.timeType === 'year') {
    state.yearTimeValue = data.data.MONITORTIME || '';
  }

  getSummary();
  getGKZDList();
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.timeValue = '时间：--';
state.maxTimeValue = '';
state.selectTime = '';
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [state.timeType], () => {
getLastTime();
},{
deep: true, // 深度监听
});
// 初始请求，调取接口
getLastTime();
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewPressureStandardAna', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-airOverviewPressureStandardAna', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
watchTab();
// 执行自定义方法
setDomStyle();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTextx0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0.default, componentState.tTextx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tListCardx0x2ComputedData = computed(() => _.merge({}, componentState.tListCardx0x2.default, componentState.tListCardx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tSelectx0x4ComputedData = computed(() => _.merge({}, componentState.tSelectx0x4.default, componentState.tSelectx0x4?.[state.screenSize]));

 const tSelectx0x5ComputedData = computed(() => _.merge({}, componentState.tSelectx0x5.default, componentState.tSelectx0x5?.[state.screenSize]));

 const tRadiox0x6ComputedData = computed(() => _.merge({}, componentState.tRadiox0x6.default, componentState.tRadiox0x6?.[state.screenSize]));

 const tTablex0x7ComputedData = computed(() => _.merge({}, componentState.tTablex0x7.default, componentState.tTablex0x7?.[state.screenSize]));

 const tTablex0x8ComputedData = computed(() => _.merge({}, componentState.tTablex0x8.default, componentState.tTablex0x8?.[state.screenSize]));

 const tChartDesignx0x10ComputedData = computed(() => _.merge({}, componentState.tChartDesignx0x10.default, componentState.tChartDesignx0x10?.[state.screenSize]));

 const tRadiox0x11ComputedData = computed(() => _.merge({}, componentState.tRadiox0x11.default, componentState.tRadiox0x11?.[state.screenSize]));

 const tDatePickerx0x13ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x13.default, componentState.tDatePickerx0x13?.[state.screenSize]));

 const tDatePickerx0x14ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x14.default, componentState.tDatePickerx0x14?.[state.screenSize]));

return {
global,
state,
componentState,
tTextx0x0ComputedData,
tRectx0x1ComputedData,
tListCardx0x2ComputedData,
tTextx0x3ComputedData,
tSelectx0x4ComputedData,
tSelectx0x5ComputedData,
tRadiox0x6ComputedData,
tTablex0x7ComputedData,
tTablex0x8ComputedData,
tChartDesignx0x10ComputedData,
tRadiox0x11ComputedData,
tDatePickerx0x13ComputedData,
tDatePickerx0x14ComputedData,
onchange1736926426761_0_0,
onchange1736922453814,
onchange1733910066067,
onchange1736836251865_0_0,
ondateChange1736918539837_0_0,
ondateChange1736835850279,
};
},
}
</script>

<style scoped>
.t-l-c-airOverviewPressureStandardAna {
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
width: 960px;
height: 585px;
background-color: rgba(0,0,0,0);
}
.t-l-c-airOverviewPressureStandardAna .airOverviewPressureStandardAna-t-text-0-0 {
position: absolute !important;
top: -37px;
left: 862px;
width: 14px;
height: 16px;
pointer-events: auto;
}

.t-l-c-airOverviewPressureStandardAna .airOverviewPressureStandardAna-t-rect-0-1 {
position: absolute !important;
top: 0px;
left: 0px;
width: 960px;
height: 120px;
pointer-events: auto;
}

.t-l-c-airOverviewPressureStandardAna .airOverviewPressureStandardAna-t-list-card-0-2 {
position: absolute !important;
top: 38px;
left: 12px;
width: 936px;
height: 82px;
pointer-events: auto;
}

.t-l-c-airOverviewPressureStandardAna .airOverviewPressureStandardAna-t-text-0-3 {
position: absolute !important;
top: 8px;
left: 12px;
width: 936px;
height: 24px;
pointer-events: auto;
}

.t-l-c-airOverviewPressureStandardAna .airOverviewPressureStandardAna-t-select-0-4 {
position: absolute !important;
top: -45px;
left: 878px;
width: 82px;
height: 33px;
pointer-events: auto;
}

.t-l-c-airOverviewPressureStandardAna .airOverviewPressureStandardAna-t-select-0-5 {
position: absolute !important;
top: -45px;
left: 778px;
width: 82px;
height: 33px;
pointer-events: auto;
}

.t-l-c-airOverviewPressureStandardAna .airOverviewPressureStandardAna-t-radio-0-6 {
position: absolute !important;
top: 132px;
left: 0px;
width: 159px;
height: 20px;
pointer-events: auto;
}

.t-l-c-airOverviewPressureStandardAna .airOverviewPressureStandardAna-t-table-0-7 {
position: absolute !important;
top: 168px;
left: 0px;
width: 960px;
height: 385px;
pointer-events: auto;
}

.t-l-c-airOverviewPressureStandardAna .airOverviewPressureStandardAna-t-table-0-8 {
position: absolute !important;
top: 168px;
left: 0px;
width: 960px;
height: 385px;
pointer-events: auto;
}

.t-l-c-airOverviewPressureStandardAna .airOverviewPressureStandardAna-t-chart-design-0-10 {
position: absolute !important;
top: 173px;
left: 0px;
width: 960px;
height: 412px;
pointer-events: auto;
}

.t-l-c-airOverviewPressureStandardAna .airOverviewPressureStandardAna-t-radio-0-11 {
position: absolute !important;
top: -39px;
left: 500px;
width: 158px;
height: 20px;
pointer-events: auto;
}

.t-l-c-airOverviewPressureStandardAna .airOverviewPressureStandardAna-t-date-picker-0-13 {
position: absolute !important;
top: -45px;
left: 661px;
width: 115px;
height: 33px;
pointer-events: auto;
}

.t-l-c-airOverviewPressureStandardAna .airOverviewPressureStandardAna-t-date-picker-0-14 {
position: absolute !important;
top: -45px;
left: 661px;
width: 300px;
height: 33px;
pointer-events: auto;
}
</style>
