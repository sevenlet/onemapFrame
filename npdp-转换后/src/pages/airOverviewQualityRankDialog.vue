<template>
  <div id="t-l-c-airOverviewQualityRankDialog" class="t-l-c-airOverviewQualityRankDialog" ><t-text-common id="t-text-common-2d3b.adc73dccc" class="airOverviewQualityRankDialog-t-text-common-0-0"  :label="replaceCssVariables(filterData(state.timeObj.timeValue, componentPropBindingMap?.['t-text-common-2d3b.adc73dccc']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x0ComputedData.editable" :c-style="tTextCommonx0x0ComputedData.cStyle"></t-text-common><t-rect id="t-rect-d819.856c749a9" class="airOverviewQualityRankDialog-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-rect id="t-rect-96e6.9d882bb2c" class="airOverviewQualityRankDialog-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle"></t-rect><t-tabs-base id="t-tabs-base-2fe6.7c313ecba" class="airOverviewQualityRankDialog-t-tabs-base-0-3"  :data="replaceCssVariables(filterData(state.tabData, componentPropBindingMap?.['t-tabs-base-2fe6.7c313ecba']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :space="tTabsBasex0x3ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.tabSelect, componentPropBindingMap?.['t-tabs-base-2fe6.7c313ecba']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x3ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x3ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x3ComputedData.alias" :c-style="tTabsBasex0x3ComputedData.cStyle" @tab-click="ontabClick1735442100184"></t-tabs-base><t-text id="t-text-9322.d7bbbbd" class="airOverviewQualityRankDialog-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle"></t-text><t-rect id="t-rect-1996.1e38a4ad9" class="airOverviewQualityRankDialog-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle" @click="onclick1736839335764"></t-rect><t-rect id="t-rect-64db.c281c415b" class="airOverviewQualityRankDialog-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle" @click="onclick1734611648529"></t-rect><t-select id="t-select-e2cd.d0ea511bd" class="airOverviewQualityRankDialog-t-select-0-8"  :active-value="replaceCssVariables(filterData(state.timeTypeSelect, componentPropBindingMap?.['t-select-e2cd.d0ea511bd']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x8ComputedData.options" :alias="tSelectx0x8ComputedData.alias" :multiple="tSelectx0x8ComputedData.multiple" :placeholder="tSelectx0x8ComputedData.placeholder" :clearable="tSelectx0x8ComputedData.clearable" :disabled="tSelectx0x8ComputedData.disabled" :name="tSelectx0x8ComputedData.name" :autocomplete="tSelectx0x8ComputedData.autocomplete" :filterable="tSelectx0x8ComputedData.filterable" :no-match-text="tSelectx0x8ComputedData.no-match-text" :no-data-text="tSelectx0x8ComputedData.no-data-text" :c-style="tSelectx0x8ComputedData.cStyle" @change="onchange1736845849516"></t-select><t-search id="t-search-1064.f40b56d25" class="airOverviewQualityRankDialog-t-search-0-9"  :type="tSearchx0x9ComputedData.type" :input-value="replaceCssVariables(filterData(state.inputValue, componentPropBindingMap?.['t-search-1064.f40b56d25']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tSearchx0x9ComputedData.maxlength" :minlength="tSearchx0x9ComputedData.minlength" :show-word-limit="tSearchx0x9ComputedData.showWordLimit" :placeholder="tSearchx0x9ComputedData.placeholder" :clearable="tSearchx0x9ComputedData.clearable" :show-password="tSearchx0x9ComputedData.showPassword" :disabled="tSearchx0x9ComputedData.disabled" :prefix-icon="tSearchx0x9ComputedData.prefix-icon" :suffix-icon="tSearchx0x9ComputedData.suffix-icon" :rows="tSearchx0x9ComputedData.rows" :autosize="tSearchx0x9ComputedData.autosize" :name="tSearchx0x9ComputedData.name" :readonly="tSearchx0x9ComputedData.readonly" :step="tSearchx0x9ComputedData.step" :autofocus="tSearchx0x9ComputedData.autofocus" :form="tSearchx0x9ComputedData.form" :label="tSearchx0x9ComputedData.label" :tabindex="tSearchx0x9ComputedData.tabindex" :validate-event="tSearchx0x9ComputedData.validateEvent" :c-style="tSearchx0x9ComputedData.cStyle" :has-search-btn="tSearchx0x9ComputedData.hasSearchBtn" @change="onchange1733894511375"></t-search><t-rect v-if="global.regionaQuery.defaultRegionType === 'street'" id="t-rect-08a8.3ae099316" class="airOverviewQualityRankDialog-t-rect-0-10"  :tip="tRectx0x10ComputedData.tip" :label="tRectx0x10ComputedData.label" :active="tRectx0x10ComputedData.active" :c-style="tRectx0x10ComputedData.cStyle"></t-rect><t-rect v-if="global.regionaQuery.defaultRegionType === 'county'" id="t-rect-94d8.4241474bf" class="airOverviewQualityRankDialog-t-rect-0-11"  :tip="tRectx0x11ComputedData.tip" :label="tRectx0x11ComputedData.label" :active="tRectx0x11ComputedData.active" :c-style="tRectx0x11ComputedData.cStyle"></t-rect><t-date-picker v-if="state.timeTypeSelect !== 'quarter'" id="t-date-picker-0355.e3faeea43" class="airOverviewQualityRankDialog-t-date-picker-0-12"  :placeholder="tDatePickerx0x12ComputedData.placeholder" :start-placeholder="tDatePickerx0x12ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x12ComputedData.endPlaceholder" :type="replaceCssVariables(filterData(state.timeObj.dateType, componentPropBindingMap?.['t-date-picker-0355.e3faeea43']['type'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :clearable="tDatePickerx0x12ComputedData.clearable" :range-separator="tDatePickerx0x12ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeObj.timeValue, componentPropBindingMap?.['t-date-picker-0355.e3faeea43']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x12ComputedData.separator" :readonly="tDatePickerx0x12ComputedData.readonly" :editable="tDatePickerx0x12ComputedData.editable" :c-style="tDatePickerx0x12ComputedData.cStyle" :is-disabled-front="tDatePickerx0x12ComputedData.isDisabledFront" :disabled-date="replaceCssVariables(filterData(state.timeObj.maxTimeValue, componentPropBindingMap?.['t-date-picker-0355.e3faeea43']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @date-change="ondateChange1736848233419"></t-date-picker><t-text id="t-text-e2d1.d61b27e2d" class="airOverviewQualityRankDialog-t-text-0-13"  :label="tTextx0x13ComputedData.label" :editable="tTextx0x13ComputedData.editable" :c-style="tTextx0x13ComputedData.cStyle" :label-raw="tTextx0x13ComputedData.labelRaw"></t-text><t-table id="t-table-e4e7.dc1d43abc" class="airOverviewQualityRankDialog-t-table-0-14"  :height="tTablex0x14ComputedData.height" :stripe="tTablex0x14ComputedData.stripe" :border="tTablex0x14ComputedData.border" :auto-scroll="tTablex0x14ComputedData.autoScroll" :speed="tTablex0x14ComputedData.speed" :show-animation="tTablex0x14ComputedData.showAnimation" :animation-delay="tTablex0x14ComputedData.animationDelay" :animation-type="tTablex0x14ComputedData.animationType" :columns="replaceCssVariables(filterData(state.tableSettingColumns, componentPropBindingMap?.['t-table-e4e7.dc1d43abc']['columns'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data="replaceCssVariables(filterData(state.tableData, componentPropBindingMap?.['t-table-e4e7.dc1d43abc']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x14ComputedData.defaultSort" :c-style="tTablex0x14ComputedData.cStyle" @sort-change="onsortChange1734613141963" @row-click="onrowClick1735268616635"></t-table></div>
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
import { TDatePicker, TRect, TSearch, TSelect, TTable, TTabsBase, TText, TTextCommon } from '@ths/design';

export default {
  components: {
    TDatePicker,
    TRect,
    TSearch,
    TSelect,
    TTable,
    TTabsBase,
    TText,
    TTextCommon,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-text-common-2d3b.adc73dccc":{"attributeName":"tTextCommonx0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-d819.856c749a9":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-96e6.9d882bb2c":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-2fe6.7c313ecba":{"attributeName":"tTabsBasex0x3","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-text-9322.d7bbbbd":{"attributeName":"tTextx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-1996.1e38a4ad9":{"attributeName":"tRectx0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-64db.c281c415b":{"attributeName":"tRectx0x6","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-table-c6bf.852c2bddf":{"attributeName":"tTablex0x7"},"t-select-e2cd.d0ea511bd":{"attributeName":"tSelectx0x8","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-search-1064.f40b56d25":{"attributeName":"tSearchx0x9","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]},"hasSearchBtn":{"filters":[]}},"t-rect-08a8.3ae099316":{"attributeName":"tRectx0x10","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-94d8.4241474bf":{"attributeName":"tRectx0x11","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-0355.e3faeea43":{"attributeName":"tDatePickerx0x12","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-text-e2d1.d61b27e2d":{"attributeName":"tTextx0x13","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"labelRaw":{"filters":[]}},"t-table-e4e7.dc1d43abc":{"attributeName":"tTablex0x14","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"showAnimation":{"filters":[]},"animationDelay":{"filters":[]},"animationType":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}}};
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
   distictCode: "",
   regionCode: "",
   yearTime: "",
   pointCode: "",
   parentRrgionCode: "350000000000",
   pointType: "12",
   countyFiveDistrictsData: [],
   countyFsData: [],
   datePickerDisabled: false,
   timeObj: {"timeType":"","timeValue":"2025-09-06","dateType":"date","maxTimeValue":"","maxQuarterYear":"","quarterValue":"","quarterYear":""},
   timeTypeSelect: "hour",
   orderType: "ASC",
   orderColumnName: "AQI",
   isProvince: false,
   defaultTimeObj: {"timeType":"","timeValue":"","dateType":"day","maxTimeValue":"","maxQuarterYear":"","quarterValue":"","quarterYear":""},
   tableClickable: false,
   tabSelect: "province",
   tableSettingColumns: [],
   inputValue: "",
   hourTableColumns: [{"label":"排名","key":"RANK_NUMBER","align":"center","operationList":[],"stateList":[],"width":"129PX"},{"label":"行政区","key":"POINT_NAME","align":"center","operationList":[],"stateList":[],"width":"152PX","showOverflowTooltip":true},{"label":"AQI","key":"AQI","stateKey":"AQI_NAME","align":"center","type":"state","operationList":[],"stateList":[{"name":"优","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #00E400 0%, #00E400 100%)"}},{"name":"良","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #F9D000 0%, #F9D000 100%)"}},{"name":"轻度污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #FF7E00 0%, #FF7E00 100%)"}},{"name":"中度污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #FF0000 0%, #FF0000 100%)"}},{"name":"重度污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #C500F4 0%, #C500F4 100%)"}},{"name":"严重污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #8C0024 0%, #8C0024 100%)"}},{"name":"-","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #AAAAAA 0%, #AAAAAA 100%)"}}],"width":"159PX","sortable":"custom"},{"label":"PM₂.₅","key":"PM25","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"width":"172PX","sortable":"custom","labelRaw":"PM₂.₅"},{"label":"PM₁₀","key":"PM10","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"width":"149PX","sortable":"custom","labelRaw":"PM₁₀"},{"label":"O₃","key":"O3","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"width":"149PX","sortable":"custom","labelRaw":"O₃"},{"label":"NO₂","key":"NO2","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"width":"149PX","sortable":"custom","labelRaw":"NO₂"},{"label":"CO","key":"CO","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"width":"149PX","sortable":"custom","labelRaw":"{{CO}}"},{"label":"SO₂","key":"SO2","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"width":"159PX","sortable":"custom","labelRaw":"SO₂"},{"label":"首要污染物","key":"PRIMPOLLUTE","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"width":"193PX","sortable":"custom","labelRaw":"{{首要污染物}}"}],
   monthTableColumns: [{"label":"排名","key":"RANK_NUMBER","align":"center","operationList":[],"stateList":[],"minWidth":"0PX","width":"61PX"},{"label":"行政区","key":"POINT_NAME","align":"center","operationList":[],"stateList":[],"width":"61PX","showOverflowTooltip":true},{"label":"综合指数","key":"ZHZS","align":"center","operationList":[],"stateList":[{"name":"good","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(2, 204, 43, 1) 0%,rgba(2, 204, 43, 1) 97.74774774774775%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"bad","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(253, 0, 0, 1) 0%,rgba(253, 0, 0, 1) 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"-","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,#aaaaaa 0%,#aaaaaa 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"80PX","sortable":"custom","type":"state","stateKey":"ZHZS_COLOR_STATUS","infoKey":""},{"label":"同比/变化率","key":"ZHZS_PER","align":"center","width":"90PX","sortable":false,"type":"default","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}}},{"label":"PM₂.₅","key":"PM25","align":"center","operationList":[],"stateList":[{"name":"good","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(2, 204, 43, 1) 0%,rgba(2, 204, 43, 1) 97.74774774774775%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"bad","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(253, 0, 0, 1) 0%,rgba(253, 0, 0, 1) 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"--","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,#aaaaaa 0%,#aaaaaa 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"65PX","sortable":"custom","type":"state","stateKey":"PM25_COLOR_STATUS","infoKey":"","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}},"labelRaw":"PM₂.₅"},{"label":"同比/变化率","key":"PM25_PER","align":"center","width":"90PX","sortable":false,"type":"default","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}}},{"label":"PM₁₀","key":"PM10","align":"center","operationList":[],"stateList":[{"name":"good","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(2, 204, 43, 1) 0%,rgba(2, 204, 43, 1) 97.74774774774775%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"bad","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(253, 0, 0, 1) 0%,rgba(253, 0, 0, 1) 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"--","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,#aaaaaa 0%,#aaaaaa 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"90PX","sortable":"custom","type":"state","stateKey":"PM10_COLOR_STATUS","infoKey":"","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}},"labelRaw":"PM₂.₅"},{"label":"同比/变化率","key":"PM10_PER","align":"center","width":"90PX","sortable":false,"type":"default","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}}},{"label":"O₃-8h","key":"O3_8","align":"center","operationList":[],"stateList":[{"name":"good","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(2, 204, 43, 1) 0%,rgba(2, 204, 43, 1) 97.74774774774775%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"bad","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(253, 0, 0, 1) 0%,rgba(253, 0, 0, 1) 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"--","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,#aaaaaa 0%,#aaaaaa 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"80PX","sortable":"custom","type":"state","stateKey":"O3_8_COLOR_STATUS","infoKey":"","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}},"labelRaw":"O₃-8h"},{"label":"同比/变化率","key":"O3_8_PER","align":"center","width":"90PX","sortable":false,"type":"default","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}}},{"label":"NO₂","key":"NO2","align":"center","operationList":[],"stateList":[{"name":"good","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(2, 204, 43, 1) 0%,rgba(2, 204, 43, 1) 97.74774774774775%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"bad","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(253, 0, 0, 1) 0%,rgba(253, 0, 0, 1) 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"--","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,#aaaaaa 0%,#aaaaaa 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"65PX","sortable":true,"type":"state","stateKey":"NO2_COLOR_STATUS","infoKey":"","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}},"labelRaw":"NO₂"},{"label":"同比/变化率","key":"NO2_PER","align":"center","width":"90PX","sortable":false,"type":"default","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}}},{"label":"CO","key":"CO","align":"center","operationList":[],"stateList":[{"name":"good","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(2, 204, 43, 1) 0%,rgba(2, 204, 43, 1) 97.74774774774775%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"bad","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(253, 0, 0, 1) 0%,rgba(253, 0, 0, 1) 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"--","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,#aaaaaa 0%,#aaaaaa 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"65PX","sortable":"custom","type":"state","stateKey":"CO_COLOR_STATUS","infoKey":"","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}},"labelRaw":"NO₂"},{"label":"同比/变化率","key":"CO_PER","align":"center","width":"90PX","sortable":false,"type":"default","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}}},{"label":"SO₂","key":"SO2","align":"center","operationList":[],"stateList":[{"name":"good","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(2, 204, 43, 1) 0%,rgba(2, 204, 43, 1) 97.74774774774775%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"bad","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(253, 0, 0, 1) 0%,rgba(253, 0, 0, 1) 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"--","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,#aaaaaa 0%,#aaaaaa 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"65PX","sortable":"custom","type":"state","stateKey":"SO2_COLOR_STATUS","infoKey":"","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}},"labelRaw":"SO₂"},{"label":"同比/变化率","key":"SO2_PER","align":"center","width":"90PX","sortable":false,"type":"default","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}}},{"label":"优良天数","key":"GOOD_DAY","align":"center","operationList":[],"stateList":[{"name":"good","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(2, 204, 43, 1) 0%,rgba(2, 204, 43, 1) 97.74774774774775%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"bad","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(253, 0, 0, 1) 0%,rgba(253, 0, 0, 1) 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"--","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,#aaaaaa 0%,#aaaaaa 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"80PX","sortable":"custom","type":"state","stateKey":"GOOD_DAY_COLOR_STATUS","infoKey":"","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}},"labelRaw":"SO₂"},{"label":"同比（天）","key":"GOOD_DAY_CUT","align":"center","operationList":[],"stateList":[{"name":"good","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(2, 204, 43, 1) 0%,rgba(2, 204, 43, 1) 97.74774774774775%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"bad","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(253, 0, 0, 1) 0%,rgba(253, 0, 0, 1) 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"--","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,#aaaaaa 0%,#aaaaaa 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"65PX","sortable":false,"type":"default","stateKey":"compresiveIndexStatus","infoKey":"","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}},"labelRaw":"SO₂"},{"label":"重污染天数","key":"BAD_DAY","align":"center","operationList":[],"stateList":[{"name":"good","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(2, 204, 43, 1) 0%,rgba(2, 204, 43, 1) 97.74774774774775%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"bad","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(253, 0, 0, 1) 0%,rgba(253, 0, 0, 1) 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"--","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,#aaaaaa 0%,#aaaaaa 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"95PX","sortable":"custom","type":"state","stateKey":"BAD_DAY_COLOR_STATUS","infoKey":"","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}},"labelRaw":"SO₂"},{"label":"同比（天）","key":"BAD_DAY_CUT","align":"center","operationList":[],"stateList":[{"name":"good","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(2, 204, 43, 1) 0%,rgba(2, 204, 43, 1) 97.74774774774775%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"bad","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(253, 0, 0, 1) 0%,rgba(253, 0, 0, 1) 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"--","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"61PX","height":"20PX","lineHeight":"20PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,#aaaaaa 0%,#aaaaaa 100%)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"65PX","sortable":false,"type":"default","stateKey":"compresiveIndexStatus","infoKey":"","infoPosition":"right","infoStyle":{"fontStyle":{"padding":"0","margin":"0"}},"labelRaw":"SO₂"}],
   dayAccTableColumns: [{"label":"排名","key":"RANK_NUMBER","align":"center","operationList":[],"stateList":[],"width":"144PX"},{"label":"行政区","key":"POINT_NAME","align":"center","operationList":[],"stateList":[],"width":"144PX","showOverflowTooltip":true},{"label":"AQI","key":"AQI","stateKey":"AQI_NAME","align":"center","type":"state","operationList":[],"stateList":[{"name":"优","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #00E400 0%, #00E400 100%)"}},{"name":"良","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #F9D000 0%, #F9D000 100%)"}},{"name":"轻度污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #FF7E00 0%, #FF7E00 100%)"}},{"name":"中度污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #FF0000 0%, #FF0000 100%)"}},{"name":"重度污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #C500F4 0%, #C500F4 100%)"}},{"name":"严重污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #8C0024 0%, #8C0024 100%)"}},{"name":"-","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #AAAAAA 0%, #AAAAAA 100%)"}}],"width":"154PX","sortable":"custom"},{"label":"PM₂.₅","key":"PM25","align":"center","operationList":[],"stateList":[],"labelRaw":"PM₂.₅","width":"157PX","sortable":"custom"},{"label":"PM₁₀","key":"PM10","align":"center","operationList":[],"stateList":[],"labelRaw":"PM₁₀","width":"157PX","sortable":"custom"},{"label":"O₃-8h","key":"O3_8","align":"center","operationList":[],"stateList":[],"labelRaw":"O₃-8h","width":"163PX","sortable":"custom"},{"label":"NO₂","key":"NO2","align":"center","operationList":[],"stateList":[],"labelRaw":"NO₂","width":"148PX","sortable":"custom"},{"label":"CO","key":"CO","align":"center","operationList":[],"stateList":[],"labelRaw":"NO₂","width":"148PX","sortable":"custom"},{"label":"SO₂","key":"SO2","align":"center","operationList":[],"stateList":[],"labelRaw":"SO₂","width":"148PX","sortable":"custom"},{"label":"首要污染物","key":"PRIMPOLLUTE","align":"center","operationList":[],"stateList":[],"labelRaw":"首要污染物","width":"198PX","sortable":"custom"}],
   dayTableColumns: [{"label":"排名","key":"RANK_NUMBER","align":"center","operationList":[],"stateList":[],"width":"144PX"},{"label":"行政区","key":"POINT_NAME","align":"center","operationList":[],"stateList":[],"width":"144PX","showOverflowTooltip":true},{"label":"AQI","key":"AQI","stateKey":"AQI_NAME","align":"center","type":"state","operationList":[],"stateList":[{"name":"优","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #00E400 0%, #00E400 100%)"}},{"name":"良","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #F9D000 0%, #F9D000 100%)"}},{"name":"轻度污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #FF7E00 0%, #FF7E00 100%)"}},{"name":"中度污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #FF0000 0%, #FF0000 100%)"}},{"name":"重度污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #C500F4 0%, #C500F4 100%)"}},{"name":"严重污染","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #8C0024 0%, #8C0024 100%)"}},{"name":"-","fontStyle":{"width":"40PX","height":"20PX","border-radius":"4px","lineHeight":"20px","background":"linear-gradient(0deg, #AAAAAA 0%, #AAAAAA 100%)"}}],"width":"154PX","sortable":"custom"},{"label":"PM₂.₅","key":"PM25","align":"center","operationList":[],"stateList":[],"labelRaw":"PM₂.₅","width":"157PX","sortable":"custom"},{"label":"PM₁₀","key":"PM10","align":"center","operationList":[],"stateList":[],"labelRaw":"PM₁₀","width":"157PX","sortable":"custom"},{"label":"O₃-8h","key":"O3_8","align":"center","operationList":[],"stateList":[],"labelRaw":"O₃-8h","width":"163PX","sortable":"custom"},{"label":"NO₂","key":"NO2","align":"center","operationList":[],"stateList":[],"labelRaw":"NO₂","width":"148PX","sortable":"custom"},{"label":"CO","key":"CO","align":"center","operationList":[],"stateList":[],"labelRaw":"NO₂","width":"148PX","sortable":"custom"},{"label":"SO₂","key":"SO2","align":"center","operationList":[],"stateList":[],"labelRaw":"SO₂","width":"148PX","sortable":"custom"},{"label":"首要污染物","key":"PRIMPOLLUTE","align":"center","operationList":[],"stateList":[],"labelRaw":"首要污染物","width":"198PX","sortable":"custom"}],
   tableData: [],
   tabData: [{"label":"省内","value":"province","disabled":false},{"label":"市内","value":"city","disabled":false},{"label":"站点","value":"point_all","disabled":false}],
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
tTextCommonx0x0: {
defaultStyle: {
            default: {"width":"96px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"467px","top":"308px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"2025-09-06",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"467px","top":"308px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"1608px","height":"712px","position":"unset","left":"158px","top":"184px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1608px","height":"712px","position":"unset","left":"158px","top":"184px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"1608px","height":"47px","backgroundColor":"var(--business-dialog-title-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1608px","height":"47px","backgroundColor":"var(--business-dialog-title-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tTabsBasex0x3: {
defaultStyle: {
            default: {"width":"524px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""},
            
            },
 default: { 
 
data:[{"label":"省内","value":"province","disabled":false},{"label":"市内","value":"city","disabled":false},{"label":"站点","value":"point_all","disabled":false}],
space:1,
selectedTabVal:"province",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":"disabled"},
cStyle:{"wrapper":{"default":{"width":"524px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""}},"itemWrapper":{"default":{"width":"80px","height":"32px","fontSize":"14px","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px"}},"label":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","lineHeight":"32px","whiteSpace":"nowrap","textOverflow":"ellipsis","width":"100%","height":"100%","overflow":"hidden","display":"inline-block"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","fontSize":"var(--business-text-size-14)","lineHeight":"32px","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"inline-block","width":"100%","height":"100%","overflow":"hidden"}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"300px","height":"47px","color":"rgba(255, 255, 255, 1)","fontSize":"var(--business-num-size-18)","backgroundImage":"url(assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":"","lineHeight":"47px","top":"184px"},
            
            },
 default: { 
 
label:"空气质量排名",
editable:false,
cStyle:{"wrapper":{"default":{"width":"300px","height":"47px","color":"rgba(255, 255, 255, 1)","fontSize":"var(--business-num-size-18)","backgroundImage":"url(assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":"","lineHeight":"47px","top":"184px"}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","backgroundColor":"var(--common-btn-default)","backgroundImage":"url(assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","backgroundColor":"var(--common-btn-default)","backgroundImage":"url(assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"54px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"1083px","top":"294px","cursor":"pointer","fontSize":"var(--business-text-size-14)"},
            
            },
 default: { 
 
tip:false,
label:"搜索",
active:false,
cStyle:{"wrapper":{"default":{"width":"54px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"1083px","top":"294px","cursor":"pointer","fontSize":"var(--business-text-size-14)"}}}, 
 },
},
tSelectx0x8: {
defaultStyle: {
            default: {"width":"242px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},
            
            },
 default: { 
 
activeValue:"hour",
options:[{"value":"hour","label":"实时排名","disabled":false},{"value":"cumday","label":"当日累计","disabled":false},{"value":"day","label":"日排名","disabled":false},{"value":"year","label":"年排名","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"242px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tSearchx0x9: {
defaultStyle: {
            default: {"width":"352px","height":"32px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","min-height":"32px","fontSize":"var(--business-text-size-14)"},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入",
clearable:false,
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
cStyle:{"wrapper":{"default":{"width":"352px","height":"32px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","min-height":"32px","fontSize":"var(--business-text-size-14)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)"}},"prefix":{"default":{"color":"var(--business-text-avianize)"}}},
hasSearchBtn:false, 
 },
},
tRectx0x10: {
defaultStyle: {
            default: {"width":"229px","height":"32px","cursor":"not-allowed","position":"unset","left":"176px","top":"248px","animationName":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"229px","height":"32px","cursor":"not-allowed","position":"unset","left":"176px","top":"248px","animationName":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"itemWrapper":{"disabled":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}}, 
 },
},
tRectx0x11: {
defaultStyle: {
            default: {"width":"153px","height":"32px","cursor":"not-allowed","position":"unset","left":"176px","top":"247px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"153px","height":"32px","cursor":"not-allowed","position":"unset","left":"176px","top":"247px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"itemWrapper":{"disabled":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}}, 
 },
},
tDatePickerx0x12: {
defaultStyle: {
            default: {"width":"280px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择时间",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"date",
clearable:false,
rangeSeparator:"-",
'default-date':"2025-09-06",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"280px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","fontSize":"var(--business-text-size-12)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-12)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"disableDateWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tTextx0x13: {
defaultStyle: {
            default: {"width":"330px","height":"20px","color":"var(--business-text-avianize)","top":"300px","left":"1422px","fontSize":"var(--business-text-size-14)","lineHeight":"20px","textAlign":"right"},
            
            },
 default: { 
 
label:"单位：μg/m³（CO：mg/m³）",
editable:false,
cStyle:{"wrapper":{"default":{"width":"330px","height":"20px","color":"var(--business-text-avianize)","top":"300px","left":"1422px","fontSize":"var(--business-text-size-14)","lineHeight":"20px","textAlign":"right"}}},
labelRaw:"单位：μg/{{M3}}（CO：mg/{{M3}}）", 
 },
},
tTablex0x14: {
defaultStyle: {
            default: {"width":"1568px","height":"540px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"540",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
showAnimation:false,
animationDelay:0.1,
animationType:"animate__fadeInUp",
columns:[],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"1568px","height":"540px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"headerSortTop":{"active":{"border-bottom-color":"var(--business-theme)"}},"headerSortBottom":{"active":{"border-top-color":"var(--business-theme)"}}}, 
 },
},
});
const setTableColumns = () => {
// 通过显示隐藏刷新一下表格（排序选中一个时，改变表格配置后，上一个排序的选中效果还在）
const curTableClickable = state.tableClickable;
state.tableClickable = !(state.tableClickable);


setTimeout(() => {
  state.tableClickable = curTableClickable;
});

// 表格第二列-显示行政区
const regionName = ['province', 'city', 'point_shik', 'street'];
// 表格第二列-显示站点
const pointName = ['point_all', 'point_gk', 'point_sk'];
let curTableColumns = [];
// 根据时间类型展示不同的表格配置
switch (state.timeTypeSelect) {
  case 'month':
  case 'quarter':
  case 'year':
    curTableColumns = JSON.parse(JSON.stringify(state.monthTableColumns));
    break;
  case 'day':
    curTableColumns = JSON.parse(JSON.stringify(state.dayTableColumns));
    break;
  case 'cumday':
    curTableColumns = JSON.parse(JSON.stringify(state.dayAccTableColumns));
    break;
  case 'hour':
  case 'realTimeHour':
    curTableColumns = JSON.parse(JSON.stringify(state.hourTableColumns));
    break;
  default:
    break;
}
state.tableSettingColumns = curTableColumns;
// 修改表格第二列配置
state.tableSettingColumns[1] = regionName.includes(state.tabSelect) ? {
  ...state.tableSettingColumns[1],
  label: '行政区',
} : {
  ...state.tableSettingColumns[1],
  label: '站点',
  "align": "left","headerAlign": "left",
}
console.log('state.tableSettingColumns', state.tableSettingColumns)
};
const changeInputName = (data) => {
if (typeof (data) === 'string') {
  state.inputValue = data;
}
};
const changeTableClickable = () => {
// 可点击定位tab类型选中
// const clickableTabs = ['point_all', 'point_gk', 'point_sk'];
// 选中省级，表格不可点击；未选中省级时，站点、国控、省控 可点击
// state.tableClickable = state.isProvince ? false : clickableTabs.includes(state.tabSelect);
};
const handleTableOrder = (value) => {
// 设置升序、降序字段值
if (value.prop && value.order) {
  state.orderColumnName = value.prop;
  state.orderType = value.order === 'descending' ? 'DESC' : 'ASC';
} else {
  setDefaultOrderParams();
}
getTableData();

};
const setDefaultOrderParams = () => {
// 设置默认值
state.orderColumnName = 'AQI';
state.orderType = 'ASC';
// 根据时间类型展示不同的表格配置
switch (state.timeTypeSelect) {
  case 'month':
  case 'quarter':
  case 'year':
    // 设置默认值
    state.orderColumnName = 'PM25';
    break;
  default:
    break;
}
};
const setDefaultTabSelect = () => {
/**
 * 设置tab默认选中值
 */
const regionLevelCode = getRegionLevel(global.regionaQuery.regionCode);
// 设置tab选中
switch (regionLevelCode) {
  case 'province':
  case 'city':
  case 'street':
    state.tabSelect = 'province';
    break;
  case 'county':
    state.tabSelect = 'city';
    break;
  default:
    break;
}
if (state.tabSelect === 'province') {
    // 省
    state.pointType = '12'
    state.parentRrgionCode = '350000000000'
    state.pointCode = ''
    state.regionCode = ''
  } else if (state.tabSelect === 'city') {
    // 市
    state.pointType = '13'
    state.parentRrgionCode = ''
    state.pointCode = ''
    state.regionCode = '350700000000'
  } else if (state.tabSelect === 'point_all') {
    // 站点
    state.pointType = '0,1,2,3,4'
    state.parentRrgionCode = '350000000000'
    state.pointCode = ''
  }
  state.tableData = [];
  state.pointCode = global.regionaQuery.regionCode.slice(0, 6)
// 是否为省级
state.isProvince = regionLevelCode === 'province';
changeTableClickable();
};
const handleTableRowClick = (row,column) => {
if (row.LATITUDE && row.LONGITUDE) {
  global.businessDialog.dialogName = '';
  // 给地图发消息
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
}

};
const handleTabChange = (tabValue) => {
if (tabValue !== state.tabSelect) {
  state.tabSelect = tabValue;
  state.regionCode = global.regionaQuery.regionCode
  if (tabValue === 'province') {
    // 省内的城市
    state.pointType = '12'
    state.parentRrgionCode = '350000000000'
    state.pointCode = ''
    state.regionCode = ''
    state.distictCode = ''
  } else if (tabValue === 'city') {
    // 市内的区县
    state.pointType = '13'
    state.parentRrgionCode = ''
    state.pointCode = ''
    state.distictCode = ''
    state.regionCode = '350700000000'
  } else if (tabValue === 'point_all') {
    // 站点
    state.pointType = '0,1,2,3,4'
    state.parentRrgionCode = ''
    state.pointCode = ''
    if(global.regionaQuery.regionCode === '350700000000'){
      state.distictCode = ''
      state.regionCode = global.regionaQuery.regionCode
    }else{
      state.distictCode = global.regionaQuery.regionCode
      state.regionCode = ''
    }
  }
  state.tableData = [];
  state.pointCode = global.regionaQuery.regionCode.slice(0, 6)
  setTableColumns();
  setDefaultOrderParams();
}
};
const initData = () => {
// 设置省内、市内tab默认选中值
state.timeObj.timeType = global.airOverview.rightView.timeType
state.regionCode = global.regionaQuery.regionCode
setDefaultTabSelect();
if (global.airOverview.rightView.timeType === 'day') {
  let timeValue = global.airOverview.rightView.timeValue;
  // 如果日选择了当日，展示当日累计数据
  if (timeValue && dateFormat(timeValue, 'yyyy-MM-dd') === dateFormat(new Date(), 'yyyy-MM-dd')) {
    state.timeTypeSelect = 'cunday';
    state.timeObj.dateType = 'day';
    state.datePickerDisabled = true;
  }
} else if (global.airOverview.rightView.timeType === 'hour') {
  state.timeTypeSelect = 'hour';
  state.timeObj.dateType = 'datetimehour';
  state.datePickerDisabled = true;
}

// 下面的受上面的影响
// 设置表格列配置、设置默认排序字段
setTableColumns();
setDefaultOrderParams();

// 获取列表数据
handleDataRequest();
};
const handleQuarterTimeValue = () => {
/**
 * 处理季度时间的时间值
 * quarterYear: 季度年份值
 * quarterValue : 季度数值1、2、3、4
 */
if (!state.timeObj.quarterYear || !state.timeObj.quarterValue) return;
state.timeObj.timeValue = `${state.timeObj.quarterYear}-${state.timeObj.quarterValue}`;
};
const handleTimeTypeSelectChange = (value) => {
/**
 * 处理时间类型tab变化
 * timeType：时间类型-hour、day、month、quarter、year
 *           realTimeHour: 实时排名，cumday：当日累计
 */
  switch (value) {
  case 'hour':
    state.timeObj.dateType = 'datetimehour';
    state.timeObj.timeType = 'hour'
    break;
  case 'day':
  case 'cumday':
    state.timeObj.dateType = 'date';
    state.timeObj.timeType = 'day';
    break;
  case 'year':
    state.timeObj.dateType = 'year';
    state.timeObj.timeType = 'year_month';
    break;
  default:
    break;
}

// 选择当日累计
if (value === 'cumday') {
  state.timeObj.timeValue = dateFormat(new Date(), 'yyyy-MM-dd HH');
  state.timeObj.maxTimeValue = dateFormat(new Date(), 'yyyy-MM-dd')
}


};
const handleNormalTimeValueChange = (timeValue) => {
if (state.timeTypeSelect === 'day') {
  // 如果日选择了当日，选中当日累计
  if (timeValue && dateFormat(timeValue, 'yyyy-MM-dd') === dateFormat(new Date(), 'yyyy-MM-dd')) {
    state.timeTypeSelect = 'cumday';
    state.datePickerDisabled = true;
  }
}
};
const handleDataRequest = () => {

async function getData() {
  // 获取最新时间(除了当日累计，都需要获取时间)
  if(state.timeTypeSelect !== 'cumday'){
     await apiRegistry.getLatestTime.request();
  }
  // 设置年份日期（年累计，当前年获取最新月份的1号）
  if (state.timeTypeSelect === 'year') {
    state.yearTime = `${state.timeObj.timeValue}-01`
  }
  // 获取列表数据
  if (state.timeTypeSelect === 'year') {
    await apiRegistry.getYearRankData.request();
  } else {
    await apiRegistry.getRankData.request();
  }
}
getData()
};
const getTableData = () => {

 if (state.timeTypeSelect === 'year') {
    // 如果不是本年，补充到12-01
    if (Number(state.timeObj.timeValue) < Number(state.timeObj.maxTimeValue.slice(0,4))) {
      state.yearTime = `${state.timeObj.timeValue}-12-01`;
    } else if(Number(state.timeObj.timeValue) === Number(state.timeObj.maxTimeValue.slice(0,4))) {
      // 如果是本年，以获取最新时间为准
      state.yearTime = `${state.timeObj.maxTimeValue}-01`
    }else{
      state.yearTime = state.timeObj.timeValue
    }
  }
  // 获取列表数据
  if (state.timeTypeSelect === 'year') {
    apiRegistry.getYearRankData.request();
  } else {
    apiRegistry.getRankData.request();
  }
};
const setTableInlineBlock = () => {
// 直接标签的形式插入样式，给表格的列增加inlineblock让超出省略号能显示
const componentDom = document.querySelector('#t-l-c-airOverviewQualityRankDialog')
const styles = document.createElement('style')
styles.innerHTML = `
.t-table .el-table__body-wrapper .cell .overflow-ellipsis{
  display: inline-block !important
}
`
componentDom.append(styles)
};
const handleTimeChange = (time) => {
// 如果选择当日累计则拼接上小时
if(state.timeTypeSelect === 'cumday'){
  const today = dateFormat(new Date(), 'yyyy-MM-dd')
  // 如果选择的是当天以前
  if(new Date(today) > new Date(time)) {
    state.timeObj.timeValue = `${time} 23`
  }else{
    state.timeObj.timeValue = dateFormat(new Date(), 'yyyy-MM-dd HH')
  }
}else{
  state.timeObj.timeValue = time
}
// state.timeObj.timeValue = dateFormat(new Date(), 'yyyy-MM-dd HH');
};
const ontabClick1735442100184 = (data) => {
// 执行自定义方法
handleTabChange(data.value);
// 执行自定义方法
getTableData();
};
const onclick1736839335764 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogName',
                    value:'',
                    data: {
                      businessDialog:{dialogName: ''}
                    },
                  });
};
const onclick1734611648529 = () => {
// 执行自定义方法
getTableData();
};
const onsortChange1734599995055 = (row) => {
// 执行自定义方法
handleTableOrder(row);
};
const onchange1736845849516 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.timeTypeSelect = value;
// 执行自定义方法
setTableColumns("");
// 执行自定义方法
setDefaultOrderParams();
// 执行自定义方法
handleTimeTypeSelectChange(value);
// 执行自定义方法
handleDataRequest();
};
const onchange1733894511375 = (value) => {
// 执行自定义方法
changeInputName(value);
};
const ondateChange1736848233419 = (data) => {
// 执行自定义方法
handleTimeChange(data);
// 执行自定义方法
getTableData();
};
const onsortChange1734613141963 = (row) => {
// 执行自定义方法
handleTableOrder(row);
};
const onrowClick1735268616635 = (row,column,event) => {
// 执行自定义方法
handleTableRowClick(row,column);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getYearRankData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"DISTRICT_CODE":"state.distictCode","POLLUTE":"state.orderColumnName","PARENT_REGION_CODE":"state.parentRrgionCode","POINT_CODE":"","ORDER":"state.orderType","REGION_CODE":"state.regionCode","POINT_NAME":"state.inputValue","POINT_TYPE":"state.pointType","MONITORTIME":"state.yearTime","interfaceId":"361197a59f4fe917cb49b552e9c9f986"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DISTRICT_CODE":state.distictCode,"POLLUTE":state.orderColumnName,"PARENT_REGION_CODE":state.parentRrgionCode,"POINT_CODE":"","ORDER":state.orderType,"REGION_CODE":state.regionCode,"POINT_NAME":state.inputValue,"POINT_TYPE":state.pointType,"MONITORTIME":state.yearTime,"interfaceId":"361197a59f4fe917cb49b552e9c9f986"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"DISTRICT_CODE":state.distictCode,"POLLUTE":state.orderColumnName,"PARENT_REGION_CODE":state.parentRrgionCode,"POINT_CODE":"","ORDER":state.orderType,"REGION_CODE":state.regionCode,"POINT_NAME":state.inputValue,"POINT_TYPE":state.pointType,"MONITORTIME":state.yearTime,"interfaceId":"361197a59f4fe917cb49b552e9c9f986"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getYearRankData'] = res.data;
                
     
state.tableData = [];
const { data, head } = res.data;

const reOrder = () => {
  let rank = 1;
  state.tableData.forEach((item, index) => {
    if (index > 0 && parseFloat((state.tableData)[index][state.orderColumnName]) === parseFloat((state.tableData)[index - 1][state.orderColumnName])) {
      item.RANK_NUMBER = state.tableData[index - 1].RANK_NUMBER;
    } else {
      item.RANK_NUMBER = rank;
    }
    rank++;
  });
}


if (head.statusCode === '200' && data) {
  state.tableData = (data || []).map((item) => {
    const newItem = { ...item };
    // 对所有字段进行空值处理
    Object.keys(newItem).forEach(key => {
      newItem[key] = handleNoVal(newItem[key]);
    });
    // 特别处理 PRIMPOLLUTE：先替换污染字符，再处理空值
    newItem.PRIMPOLLUTE = handleNoVal(replacePollutionCharacter(item.PRIMPOLLUTE));
    return newItem;
  });
  // 把佛山市的数据过滤出来放在第一条
  const foshanCityRow = state.tableData.find((item) => item.POINT_CODE === '440700000000');
  const foshanCityIndex = state.tableData.findIndex((item) => item.POINT_CODE === '440700000000');
  if (foshanCityIndex !== -1) {
    state.tableData.splice(foshanCityIndex, 1);
    reOrder();
    state.tableData.unshift({
      ...foshanCityRow,
      // 省内排名时，佛山市参与排名，其他类型不参与排名
      RANK_NUMBER: state.tabSelect === 'province' ? foshanCityRow.RANK_NUMBER : '',
    });
  }
}
console.log('table', state.tableData)
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableData = [];
      reject(error);
    });
  });
},
              },
// 接口函数
 getRankData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"DISTRICT_CODE":"state.distictCode","POLLUTE":"state.orderColumnName","PARENT_REGION_CODE":"state.parentRrgionCode","POINT_CODE":"","ORDER":"state.orderType","REGION_CODE":"state.regionCode","POINT_NAME":"state.inputValue","POINT_TYPE":"state.pointType","MONITORTIME":"state.timeObj.timeValue","TIME_TYPE":"state.timeTypeSelect","interfaceId":"a82499e8f9b12e4a7c08f540acca069a"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DISTRICT_CODE":state.distictCode,"POLLUTE":state.orderColumnName,"PARENT_REGION_CODE":state.parentRrgionCode,"POINT_CODE":"","ORDER":state.orderType,"REGION_CODE":state.regionCode,"POINT_NAME":state.inputValue,"POINT_TYPE":state.pointType,"MONITORTIME":state.timeObj.timeValue,"TIME_TYPE":state.timeTypeSelect,"interfaceId":"a82499e8f9b12e4a7c08f540acca069a"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"DISTRICT_CODE":state.distictCode,"POLLUTE":state.orderColumnName,"PARENT_REGION_CODE":state.parentRrgionCode,"POINT_CODE":"","ORDER":state.orderType,"REGION_CODE":state.regionCode,"POINT_NAME":state.inputValue,"POINT_TYPE":state.pointType,"MONITORTIME":state.timeObj.timeValue,"TIME_TYPE":state.timeTypeSelect,"interfaceId":"a82499e8f9b12e4a7c08f540acca069a"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getRankData'] = res.data;
                
     
state.tableData = [];
const { data, head } = res.data;

const reOrder = () => {
  let rank = 1;
  state.tableData.forEach((item, index) => {
    if (index > 0 && parseFloat((state.tableData)[index][state.orderColumnName]) === parseFloat((state.tableData)[index - 1][state.orderColumnName])) {
      item.RANK_NUMBER = state.tableData[index - 1].RANK_NUMBER;
    } else {
      item.RANK_NUMBER = rank;
    }
    rank++;
  });
}

// 处理空值或-1的函数
function handleEmpty(value) {
  if (value === '' || value === null || value === undefined || value === '-1' || value === -1) {
    return '-';
  }
  return value;
}

if (head.statusCode === '200' && data) {
  state.tableData = (data || []).map((item) => ({
    ...item,
    PRIMPOLLUTE: handleNoVal(replacePollutionCharacter(item.PRIMPOLLUTE)),
    PM25: handleEmpty(item.PM25),
    PM25_IAQI: handleEmpty(item.PM25_IAQI),
    PM10: handleEmpty(item.PM10),
    PM10_IAQI: handleEmpty(item.PM10_IAQI),
    SO2: handleEmpty(item.SO2),
    SO2_IAQI: handleEmpty(item.SO2_IAQI),
    NO2: handleEmpty(item.NO2),
    NO2_IAQI: handleEmpty(item.NO2_IAQI),
    CO: handleEmpty(item.CO),
    CO_IAQI: handleEmpty(item.CO_IAQI),
    O3: handleEmpty(item.O3),
    O3_IAQI: handleEmpty(item.O3_IAQI),
    O3_8: handleEmpty(item.O3_8),
    O3_8_IAQI: handleEmpty(item.O3_8_IAQI),
    AQI: handleEmpty(item.AQI),
    AQILEVELINDEX: handleEmpty(item.AQILEVELINDEX),
    AQI_NAME: handleEmpty(item.AQI_NAME),
    RANK_NUMBER: handleEmpty(item.RANK_NUMBER)
  }));
  // 把佛山市的数据过滤出来放在第一条
  const foshanCityRow = state.tableData.find((item) => item.POINT_CODE === '440700000000');
  const foshanCityIndex = state.tableData.findIndex((item) => item.POINT_CODE === '440700000000');
  if (foshanCityIndex !== -1) {
    state.tableData.splice(foshanCityIndex, 1);
    reOrder();
    state.tableData.unshift({
      ...foshanCityRow,
      // 省内排名时，佛山市参与排名，其他类型不参与排名
      RANK_NUMBER: state.tabSelect === 'province' ? foshanCityRow.RANK_NUMBER : '',
    });
  }
}
console.log('table',state.tableData)
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableData = [];
      reject(error);
    });
  });
},
              },
// 接口函数
 getLatestTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_TYPE":"state.pointType","TIME_TYPE":"state.timeObj.timeType","interfaceId":"66ad2ebe9d660295568b05187f34e133"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_TYPE":state.pointType,"TIME_TYPE":state.timeObj.timeType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_TYPE":state.pointType,"TIME_TYPE":state.timeObj.timeType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.timeObj.maxTimeValue = data?.MONITORTIME ? (state.timeObj.timeType === 'hour' ? data?.MONITORTIME + ':00' : data?.MONITORTIME) : '';
  state.timeObj.timeValue = data?.MONITORTIME || '';
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
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewQualityRankDialog', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initData();
onMounted(() => {
setPageScale('t-l-c-airOverviewQualityRankDialog', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setTableInlineBlock();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTextCommonx0x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x0.default, componentState.tTextCommonx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tTabsBasex0x3ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x3.default, componentState.tTabsBasex0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

 const tSelectx0x8ComputedData = computed(() => _.merge({}, componentState.tSelectx0x8.default, componentState.tSelectx0x8?.[state.screenSize]));

 const tSearchx0x9ComputedData = computed(() => _.merge({}, componentState.tSearchx0x9.default, componentState.tSearchx0x9?.[state.screenSize]));

 const tRectx0x10ComputedData = computed(() => _.merge({}, componentState.tRectx0x10.default, componentState.tRectx0x10?.[state.screenSize]));

 const tRectx0x11ComputedData = computed(() => _.merge({}, componentState.tRectx0x11.default, componentState.tRectx0x11?.[state.screenSize]));

 const tDatePickerx0x12ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x12.default, componentState.tDatePickerx0x12?.[state.screenSize]));

 const tTextx0x13ComputedData = computed(() => _.merge({}, componentState.tTextx0x13.default, componentState.tTextx0x13?.[state.screenSize]));

 const tTablex0x14ComputedData = computed(() => _.merge({}, componentState.tTablex0x14.default, componentState.tTablex0x14?.[state.screenSize]));

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
tTextCommonx0x0ComputedData,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tTabsBasex0x3ComputedData,
tTextx0x4ComputedData,
tRectx0x5ComputedData,
tRectx0x6ComputedData,
tSelectx0x8ComputedData,
tSearchx0x9ComputedData,
tRectx0x10ComputedData,
tRectx0x11ComputedData,
tDatePickerx0x12ComputedData,
tTextx0x13ComputedData,
tTablex0x14ComputedData,
ontabClick1735442100184,
onclick1736839335764,
onclick1734611648529,
onchange1736845849516,
onchange1733894511375,
ondateChange1736848233419,
onsortChange1734613141963,
onrowClick1735268616635,
};
},
}
</script>

<style scoped>
.t-l-c-airOverviewQualityRankDialog {
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
height: 1080px;
width: 1920px;
background-color: rgba(0,0,0,0);
}
.t-l-c-airOverviewQualityRankDialog .airOverviewQualityRankDialog-t-text-common-0-0 {
position: absolute !important;
top: 259px;
left: 1295px;
width: 96px;
height: 20px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityRankDialog .airOverviewQualityRankDialog-t-rect-0-1 {
position: absolute !important;
top: 184px;
left: 158px;
width: 1608px;
height: 712px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityRankDialog .airOverviewQualityRankDialog-t-rect-0-2 {
position: absolute !important;
top: 184px;
left: 158px;
width: 1608px;
height: 47px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityRankDialog .airOverviewQualityRankDialog-t-tabs-base-0-3 {
position: absolute !important;
top: 247px;
left: 176px;
width: 524px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityRankDialog .airOverviewQualityRankDialog-t-text-0-4 {
position: absolute !important;
top: 184px;
left: 177px;
width: 300px;
height: 47px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityRankDialog .airOverviewQualityRankDialog-t-rect-0-5 {
position: absolute !important;
top: 195px;
left: 1714px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityRankDialog .airOverviewQualityRankDialog-t-rect-0-6 {
position: absolute !important;
top: 294px;
left: 1083px;
width: 54px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityRankDialog .airOverviewQualityRankDialog-t-select-0-8 {
position: absolute !important;
top: 294px;
left: 175px;
width: 242px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityRankDialog .airOverviewQualityRankDialog-t-search-0-9 {
position: absolute !important;
top: 294px;
left: 727px;
width: 352px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityRankDialog .airOverviewQualityRankDialog-t-rect-0-10 {
position: absolute !important;
top: 248px;
left: 176px;
width: 229px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityRankDialog .airOverviewQualityRankDialog-t-rect-0-11 {
position: absolute !important;
top: 247px;
left: 176px;
width: 153px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityRankDialog .airOverviewQualityRankDialog-t-date-picker-0-12 {
position: absolute !important;
top: 294px;
left: 431px;
width: 280px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityRankDialog .airOverviewQualityRankDialog-t-text-0-13 {
position: absolute !important;
top: 300px;
left: 1422px;
width: 330px;
height: 20px;
pointer-events: auto;
}

.t-l-c-airOverviewQualityRankDialog .airOverviewQualityRankDialog-t-table-0-14 {
position: absolute !important;
top: 338px;
left: 176px;
width: 1568px;
height: 540px;
pointer-events: auto;
}
</style>
