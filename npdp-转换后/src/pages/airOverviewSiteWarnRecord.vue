<template>
  <div id="t-l-c-airOverviewSiteWarnRecord" class="t-l-c-airOverviewSiteWarnRecord" ><t-table id="t-table-2310.e9fb6bede" class="airOverviewSiteWarnRecord-t-table-0-1"  :height="tTablex0x1ComputedData.height" :stripe="tTablex0x1ComputedData.stripe" :border="tTablex0x1ComputedData.border" :auto-scroll="tTablex0x1ComputedData.autoScroll" :speed="tTablex0x1ComputedData.speed" :columns="tTablex0x1ComputedData.columns" :data="replaceCssVariables(getApiData('t-table-2310.e9fb6bede', 'data').value, global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x1ComputedData.defaultSort" :c-style="tTablex0x1ComputedData.cStyle" @cell-click="oncellClick1763369501006_0_0"></t-table><t-row id="t-row-113e.ca8a0aabe" class="airOverviewSiteWarnRecord-t-row-0-2"  :c-style="tRowx0x2ComputedData.cStyle" :gutter="tRowx0x2ComputedData.gutter" :justify="tRowx0x2ComputedData.justify" :align="tRowx0x2ComputedData.align"><t-col id="t-col-d9a8.bfeb30d45" class="airOverviewSiteWarnRecord-t-col-0-2-0"  :span="tColx0x2x0ComputedData.span" :offset="tColx0x2x0ComputedData.offset" :push="tColx0x2x0ComputedData.push" :pull="tColx0x2x0ComputedData.pull" :c-style="tColx0x2x0ComputedData.cStyle"><t-date-picker id="t-date-picker-bd98.3d76d7f4" class="airOverviewSiteWarnRecord-t-date-picker-0-2-0-0"  :placeholder="tDatePickerx0x2x0x0ComputedData.placeholder" :start-placeholder="tDatePickerx0x2x0x0ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x2x0x0ComputedData.endPlaceholder" :type="tDatePickerx0x2x0x0ComputedData.type" :clearable="tDatePickerx0x2x0x0ComputedData.clearable" :range-separator="tDatePickerx0x2x0x0ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeValue, componentPropBindingMap?.['t-date-picker-bd98.3d76d7f4']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x2x0x0ComputedData.separator" :readonly="tDatePickerx0x2x0x0ComputedData.readonly" :editable="tDatePickerx0x2x0x0ComputedData.editable" :c-style="tDatePickerx0x2x0x0ComputedData.cStyle" :disabled-date="replaceCssVariables(filterData(state.maxTimeValue, componentPropBindingMap?.['t-date-picker-bd98.3d76d7f4']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :is-disabled-front="tDatePickerx0x2x0x0ComputedData.isDisabledFront" @date-change="ondateChange1735005830352"></t-date-picker></t-col></t-row></div>
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
import { TCol, TDatePicker, TRow, TTable } from '@ths/design';

export default {
  components: {
    TCol,
    TDatePicker,
    TRow,
    TTable,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-tabs-base-73a6.430c2dbe7":{"attributeName":"tTabsBasex0x0"},"t-table-2310.e9fb6bede":{"attributeName":"tTablex0x1","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[{"name":"filterWarningData"}],"name":"getListData","id":"f6b9c6e3e6c04d328e0eb0d8e60a1e20","returnDataPath":"data","requestUrl":"global.foshanServiceBaseUrl-global.serviceBasePath","requestParams":{"POINT_TYPE":"","POINT_CODE":"state.pointCode","START_TIME":"state.START_TIME","END_TIME":"state.END_TIME","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"30f6f88064d789e356c09c4d4d8218c6"}},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-row-113e.ca8a0aabe":{"attributeName":"tRowx0x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-d9a8.bfeb30d45":{"attributeName":"tColx0x2x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-bd98.3d76d7f4":{"attributeName":"tDatePickerx0x2x0x0","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"disabledDate":{"filters":[]},"isDisabledFront":{"filters":[]}}};
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
   pointType: "",
   warningTimeType: "1hour",
   maxTimeValue: "",
   pointCode: "",
   END_TIME: "",
   START_TIME: "",
   timeValue: [],
   listData: [],
   QYKEResultLYList: [{"station":"建阳区环保","type":"省控","time":"2025-10-19 15:00","type1":"PM10爆发增长","opt":"trace"},{"station":"建阳区环保","type":"省控","time":"2025-10-19 15:00","type1":"PM10爆发增长","opt":"trace"},{"station":"建阳区环保","type":"省控","time":"2025-10-19 15:00","type1":"PM10爆发增长","opt":"trace"},{"station":"建阳区环保","type":"省控","time":"2025-10-19 15:00","type1":"PM10爆发增长","opt":"trace"}],
   timeStart: "",
   timeEnd: "",
   airPollutionContentState: {"timeType":"","monitorTimeValue":"","analysisTimaRangeData":[]},
   controlType: "all",
   inputValue: "",
   warningTextArr: [{"text":"当前共","styleName":"style1"},{"text":"0","styleName":"style2"},{"text":"个站点发生","styleName":"style1"},{"text":"0","styleName":"style2"},{"text":"条报警。","styleName":"style1"}],
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
tTablex0x1: {
defaultStyle: {
            default: {"width":"100%","height":"90%","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"580",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"站点","key":"point_name","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"var(--text-size-14)","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"var(--text-size-14)","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":"","fontSize":"var(--text-size-14)"}},"width":"210px","type":"default","stateKey":"iconStatus"},{"label":"站点类型","type":"default","key":"pointType","stateKey":"","width":"100px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--text-size-14)"}}},{"label":"报警时间","type":"default","key":"shortTime","stateKey":"","width":"220px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--text-size-14)","color":"var(--business-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"var(--business-unit-icon)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"类型","type":"default","key":"event_type","stateKey":"","minWidth":"260px","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--text-size-14)","color":"var(--business-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]}],
data:[{"region_code":"350700000000","region_name":"南平市","point_code":"350725102","point_name":"政和二中","longitude":"118.8642","latitude":"27.3664","point_type":"1","count_id":"CDCF28D7DF51558558500A8C05073_2","data_type":"0","model_id":"dc5aaf1412392428e0538500a8c0e6e8","event_type":"PM2.5同比显著上升","start_time":"2025-11-07 00:00:00","end_time":"2025-11-08 00:00:00","level_code":"","level_name":"","duration":"","update_time":"2025-11-08","pollutants":"PM10,PM2_5","pollution_type":"沙尘型","alarm_info":"","pointType":"省控","shortTime":"2025-11-07 00:00:00","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350700","point_name":"南平市","longitude":"118.144","latitude":"27.3391","point_type":"12","count_id":"CDCF28D7DF51558558500A8C05073","data_type":"0","model_id":"dc5aaf1412392428e0538500a8c0e6e8","event_type":"PM2.5同比显著上升","start_time":"2025-11-07 00:00:00","end_time":"2025-11-08 00:00:00","level_code":"","level_name":"","duration":"","update_time":"2025-11-08","pollutants":"PM10,PM2_5","pollution_type":"沙尘型","alarm_info":"","shortTime":"2025-11-07 00:00:00","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350723101","point_name":"光泽县委","longitude":"117.332","latitude":"27.5431","point_type":"1","count_id":"CDCF极8D7DF51558558500A8C05073_5","data_type":"0","model_id":"dc5aaf1412392428e0538500a8c0e6e8","event_type":"PM2.5同比显著上升","start_time":"2025-11-07 00:00:00","end_time":"2025-11-08 00:00:00","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"PM10,PM2_5","pollution_type":"沙尘型","alarm_info":"","pointType":"省控","shortTime":"2025-11-07 00:00:00","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350700053","point_name":"南平七中","longitude":"118.1756","latitude":"26.6272","point_type":"0","count_id":"CDCF28D7DF51558558500A8C05073_11","data_type":"0","model_id":"dc5aaf1412392428e0538500a8c0e6e8","event_type":"PM2.5同比显著上升","start_time":"2025-11-07 00:00:00","end_time":"2025-11-08 00:00:00","level_code":"","level_name":"","duration":"","update_time":"2025-11-08","pollutants":"PM10,PM2_5","pollution_type":"沙尘型","alarm_info":"","pointType":"国控","shortTime":"2025-11-07 00:00:00","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350782100","point_name":"天游","longitude":"117.9431","latitude":"27.6486","point_type":"1","count_id":"CDCF28D7DF51558558500A8C05073_3","data_type":"0","model_id":"dc5aaf1412392428e0538500a8c0e6e8","event_type":"PM2.5同比显著上升","start_time":"2025-11-07 00:00:00","end_time":"2025-11-08 00:00:00","level_code":"","level_name":"","duration":"","update_time":"2025-11-08","pollutants":"PM10,PM2_5","pollution_type":"沙尘型","alarm_info":"","pointType":"省控","shortTime":"2025-11-07 00:00:00","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350723","point_name":"光泽县","longitude":"117.344","latitude":"27.6537","point_type":"13","count_id":"CDCF28D7DF51558558500A8C05073_8","data_type":"0","model_id":"dc5aaf1412392428e0538500极8c0e6e8","event_type":"PM2.5同比显著上升","start_time":"2025-11-07 00:00:00","end_time":"2025-11-08 00:00:00","level_code":"","level_name":"","duration":"","update_time":"2025-11-08","pollutants":"PM10,PM2_5","pollution_type":"沙尘型","alarm_info":"","shortTime":"2025-11-07 00:00:00","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350782102","point_name":"武夷学院","longitude":"117.9975","latitude":"27.7339","point_type":"1","count_id":"CDCF28D7DF51558558500A8C05073_6","data_type":"0","model_id":"dc5aaf1412392428e0538500a8c0e6e8","event_type":"PM2.5同比显著上升","start_time":"2025-11-07 00:00:00","end_time":"2025-11-08 00:00:00","level_code":"","level_name":"","duration":"","update_time":"2025-11-08","pollutants":"PM10,PM2_5","pollution_type":"沙尘极","alarm_info":"","pointType":"省控","shortTime":"2025-11-07 00:00:00","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350721101","point_name":"顺昌实验小学","longitude":"117.8051","latitude":"26.7975","point_type":"1","count_id":"CDCF28D7DF51558558500A8C05073_16","data_type":"0","model_id":"dc5aaf1412392428e0538500a8c0e6e8","event_type":"PM2.5同比显著上升","start_time":"2025-11-07 00:00:00","end_time":"2025-11-08 00:00:00","level_code":"","level_name":"","duration":"","update_time":"2025-11-08","pollutants":"PM10,PM2_5","pollution_type":"沙尘型","alarm_info":"","pointType":"省控","shortTime":"2025-11-07 00:00:00","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350784103","point_name":"胜德山庄","longitude":"118.101667","latitude":"27.352222","point_type":"1","count_id":"CDCF28D7DF51558558500A8C05073_4","data_type":"0","model_id":"dc5aaf1412392428e0538500a8c0e极e8","event_type":"PM2.5同比显著上升","start_time":"2025-11-07 00:00:00","end_time":"2025-11-08 00:00:00","level_code":"","level_name":"","duration":"","update_time":"2025-11-08","pollutants":"PM10,PM2_5","pollution_type":"沙尘型","alarm_info":"","pointType":"省控","shortTime":"2025-11-07 00:00:00","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350700101","point_name":"茫荡山","longitude":"118.0966","latitude":"26.6761","point_type":"1","count_id":"CDCF28D7DF51558558500A8C05073_12","data_type":"0","model_id":"dc5aaf1412392428e0538500a8c0e6e8","event_type":"PM2.5同比显著上升","start_time":"2025-11-07 00:00:00","end_time":"2025-11-08 00:00:00","level_code":"","level_name":"","duration":"","update_time":"2025-11-08","pollutants":"PM10,PM2_5","pollution_type":"沙尘型","alarm_info":"","pointType":"省控","shortTime":"2025-11-07 00:00:00","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350781","point_name":"邵武市","longitude":"117.47","latitude":"27.2338","point_type":"13","count_id":"CDCF28D7DF51558558500A8C05073_9","data_type":"0","model_id":"dc5aaf1412392428e0538500a8c0e6e8","event_type":"PM2.5同比显著上升","start_time":"2025-11-07 00:00:00","end_time":"2025-11-08 00:00:00","level_code":"","level_name":"","duration":"","update_time":"2025-11-08","pollutants":"PM10,PM2_5","pollution_type":"沙尘型","alarm_info":"","shortTime":"2025-11-07 00:00:00","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350782601","point_name":"武夷山背景站","longitude":"117.993456","latitude":"27.6371","point_type":"0","count_id":"CDCF28D7DF51558558500A8C05073_17","data_type":"0","model_id":"dc5aaf1412392428e0538500a8c0e6e8","event_type":"PM2.5同比显著上升","start_time":"2025-11-07 00:00:00","end_time":"2025-11-08 00:00:00","level_code":"","level_name":"","duration":"","update_time":"2025-11-08","pollutants":"PM10,PM2_5","pollution_type":"沙尘型","alarm_info":"","pointType":"国控","shortTime":"2025-11-07 00:00:00","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350725101","point_name":"新环保大楼","longitude":"118.8503","latitude":"27.3614","point_type":"1","count_id":"CDCF28D7DF51558558500A8C05073_13","data_type":"0","model_id":"dc5aaf1412392428e0538500a8c0e6e8","event_type":"PM2.5同比显著上升","start_time":"2025-11-07 00:00:00","end_time":"2025-11-08 00:00:00","level_code":"","level_name":"","duration":"","update_time":"2025-11-08","pollutants":"PM10,PM2_5","pollution_type":"沙尘型","alarm_info":"","pointType":"省控","shortTime":"2025-11-07 00:00:00","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350782","point_name":"武夷山市","longitude":"118.002","latitude":"27.7451","point_type":"13","count_id":"CDCF28D7DF51558558500A8C05073_10","data_type":"0","model_id":"dc5aaf1412392428e0538500a8c0e6e8","event_type":"PM2.5同比显著上升","start_time":"2025-11-07 00:00:00","end_time":"2025-11-08 00:00:00","level_code":"","level_name":"","duration":"","update_time":"2025-11-08","pollutants":"PM10,PM2_5","pollution_type":"沙尘型","alarm_info":"","shortTime":"2025-11-07 00:00:00","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350782101","point_name":"武夷山一中","longitude":"118.0267","latitude":"27.7589","point_type":"1","count_id":"CDCF28D7DF51558558500A8C05073_14","data_type":"0","model_id":"dc5aaf1412392428e0538500a8c0e6e8","event_type":"PM2.5同比显著上升","start_time":"2025-11-07 00:00:00","end_time":"2025-11-08 00:00:00","level_code":"","level_name":"","duration":"","update_time":"2025-11-08","pollutants":"PM10,PM2_5","pollution_type":"沙尘型","alarm_info":"","pointType":"省控","shortTime":"2025-11-07 00:00:00","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350783100","point_name":"林业推广中心","longitude":"118.3217","latitude":"27.0509","point_type":"1","count_id":"CDCF28D7DF51558558500A8C05073_7","data_type":"0","model_id":"dc5aaf1412392428e0538500a8c0e6e8","event_type":"PM2.5同比显著上升","start_time":"2025-11-07 00:00:00","end_time":"2025-11-08 00:00:00","level_code":"","level_name":"","duration":"","update_time":"2025-11-08","pollutants":"PM10,PM2_5","pollution_type":"沙尘型","alarm_info":"","pointType":"省控","shortTime":"2025-11-07 00:00:00","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350721","point_name":"顺昌县","longitude":"117.864","latitude":"26.9063","point_type":"13","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","tarce":"trace"},{"region_code":"350702000000","region_name":"延平区","point_code":"350702ypst0003","point_name":"南平纸业","longitude":"118.160073","latitude":"26.66639","point_type":"4","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"微站","tarce":"trace"},{"region_code":"350702000000","region_name":"延平区","point_code":"350702ypst0001","point_name":"南平铝业","longitude":"118.185723","latitude":"26.64979","point_type":"4","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"微站","tarce":"trace"},{"region_code":"350702000000","region_name":"延平区","point_code":"350702ypst0002","point_name":"一春生态","longitude":"118.129264","latitude":"26.597095","point_type":"4","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"微站","tarce":"trace"},{"region_code":"350702000000","region_name":"延平区","point_code":"350702ypst0019","point_name":"象屿 （江南一中对面）","longitude":"0","latitude":"0","point_type":"4","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"微站","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350784101","point_name":"建阳农工校","longitude":"118.1283","latitude":"27.3264","point_type":"1","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"省控","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350700052","point_name":"南平铝业有限公司","longitude":"118.1819","latitude":"26.6514","point_type":"0","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"国控","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350700051","point_name":"南平市监测站","longitude":"118.1694","latitude":"26.6383","point_type":"0","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"国控","tarce":"trace"},{"region_code":"350702000000","region_name":"延平区","point_code":"350702ypst0016","point_name":"党校","longitude":"118.163179","latitude":"26.638249","point_type":"4","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"微站","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350722101","point_name":"浦城一中","longitude":"118.535619","latitude":"27.921989","point_type":"1","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"省控","tarce":"trace"},{"region_code":"350702000000","region_name":"延平区","point_code":"350702ypst0015","point_name":"少年宫","longitude":"118.169404","latitude":"26.641068","point_type":"4","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"微站","tarce":"trace"},{"region_code":"350702000000","region_name":"延平区","point_code":"350702ypst0017","point_name":"西门综合接入机房","longitude":"118.164033","latitude":"26.633172","point_type":"4","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"微站","tarce":"trace"},{"region_code":"350702000000","region_name":"延平区","point_code":"350702ypst0009","point_name":"芒砀山","longitude":"0","latitude":"0","point_type":"4","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"微站","tarce":"trace"},{"region_code":"350702000000","region_name":"延平区","point_code":"350702ypst0024","point_name":"建行","longitude":"118.174301","latitude":"26.646353","point_type":"4","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"微站","tarce":"trace"},{"region_code":"350702000000","region_name":"延平区","point_code":"350702ypst0022","point_name":"新城宜家旁护坡基站","longitude":"118.17006","latitude":"26.613808","point_type":"4","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"微站","tarce":"trace"},{"region_code":"350702000000","region_name":"延平区","point_code":"350702ypst0013","point_name":"葫芦丘小学","longitude":"0","latitude":"0","point_type":"4","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"微站","tarce":"trace"},{"region_code":"350702000000","region_name":"延平区","point_code":"350702ypst0004","point_name":"石榴山庄","longitude":"118","latitude":"25","point_type":"4","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"微站","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350783","point_name":"建瓯市","longitude":"118.472","latitude":"27.0439","point_type":"13","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350724100","point_name":"松溪二中","longitude":"118.7788","latitude":"27.538","point_type":"1","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"省控","tarce":"trace"},{"region_code":"350702000000","region_name":"延平区","point_code":"350702ypst0020","point_name":"八仙佳苑 （江南实小对面）","longitude":"118.200697","latitude":"26.62627","point_type":"4","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"微站","tarce":"trace"},{"region_code":"350702000000","region_name":"延平区","point_code":"350702ypst0014","point_name":"鼓楼","longitude":"0","latitude":"0","point_type":"4","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"微站","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350724","point_name":"松溪县","longitude":"118.755","latitude":"27.6088","point_type":"13","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350723102","point_name":"光泽县林业局","longitude":"117.3408","latitude":"27.5525","point_type":"1","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"省控","tarce":"trace"},{"region_code":"350702000000","region_name":"延平区","point_code":"350702ypst0010","point_name":"戒毒所","longitude":"0","latitude":"0","point_type":"4","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"微站","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350724101","point_name":"松溪县环保局","longitude":"118.7803","latitude":"27.5306","point_type":"1","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"省控","tarce":"trace"},{"region_code":"350702000000","region_name":"延平区","point_code":"350702ypst0012","point_name":"金沙湖山庄","longitude":"0","latitude":"0","point_type":"4","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"微站","tarce":"trace"},{"region_code":"350702000000","region_name":"延平区","point_code":"350702ypst0021","point_name":"市立医院门诊楼","longitude":"118.171595","latitude":"26.634413","point_type":"4","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"微站","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350703","point_name":"建阳区","longitude":"118.057","latitude":"27.4071","point_type":"13","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350781102","point_name":"邵武一中","longitude":"117.480833","latitude":"27.343889","point_type":"1","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"省控","tarce":"trace"},{"region_code":"350702000000","region_name":"延平区","point_code":"350702ypst0011","point_name":"碳计量中心","longitude":"0","latitude":"0","point_type":"4","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"微站","tarce":"trace"},{"region_code":"350702000000","region_name":"延平区","point_code":"350702ypst0023","point_name":"南平技校","longitude":"0","latitude":"0","point_type":"4","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"微站","tarce":"trace"},{"region_code":"350702000000","region_name":"延平区","point_code":"350702ypst0018","point_name":"邮政大楼","longitude":"0","latitude":"0","point_type":"4","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"微站","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350784102","point_name":"建阳区环保局","longitude":"118.1139","latitude":"27.3315","point_type":"1","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"省控","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350722","point_name":"浦城县","longitude":"118.514","latitude":"27.941","point_type":"13","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350721102","point_name":"林业技术推广中心","longitude":"117.815953","latitude":"26.788992","point_type":"1","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"省控","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350725","point_name":"政和县","longitude":"118.965","latitude":"27.3216","point_type":"13","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350783102","point_name":"水西林场","longitude":"118.3021","latitude":"27.0267","point_type":"1","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"省控","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350722100","point_name":"东风水库","longitude":"118.467969","latitude":"27.943139","point_type":"1","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"省控","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350781100","point_name":"邵武市委党校","longitude":"117.4778","latitude":"27.3389","point_type":"1","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"省控","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350722102","point_name":"浦城县特殊学校","longitude":"118.535014","latitude":"27.913744","point_type":"1","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"省控","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350781101","point_name":"邵武七中","longitude":"117.4783","latitude":"27.3576","point_type":"1","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"省控","tarce":"trace"},{"region_code":"350700000000","region_name":"南平市","point_code":"350783101","point_name":"建瓯市环保局","longitude":"118.3183","latitude":"27.0386","point_type":"1","count_id":"","data_type":"","model_id":"","event_type":"","start_time":"","end_time":"","level_code":"","level_name":"","duration":"","update_time":"","pollutants":"","pollution_type":"","alarm_info":"","shortTime":"-","pointType":"省控","tarce":"trace"}],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"90%","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"color":"var(--business-white)","background":"unset","backgroundClip":"unset","fontSize":"var(--business-text-size-14)"}}}, 
 },
},
tRowx0x2: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"0px"}}},
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
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tDatePickerx0x2x0x0: {
defaultStyle: {
            default: {"width":"390px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerangeminute",
clearable:false,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"390px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important","lineHeight":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-white) !important","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}},
disabledDate:"",
isDisabledFront:false, 
 },
},
});
const changeTime = (data) => {
if (data.length) {
  state.START_TIME = data[0];
  state.END_TIME = data[1];
}
};
const initParams = () => {
state.pointCode = global.businessDialog.dialogParmas.POINT_CODE;
state.pointType = global.businessDialog.dialogParmas.POINT_TYPE;
// const rangeDate = getForwardTimeList(global.air.timeType === 'hour' ? global.air.timeValue : global.air.timeValue + ' 23' , 'hour', 47);
// state.START_TIME = rangeDate[0];
// state.END_TIME = rangeDate[rangeDate.length - 1];
// state.timeValue = [state.START_TIME, state.END_TIME]

};
const handleClickTrace = (row,operationId) => {
if (operationId === 'origin') {
  // 发送消息给地图
  rootData.rootSocket.emit('message', {
    type: 'showAirSourceTrace',
    room: global.socketRoom,
    data: [ // 消息内容
      {
        shareCode: "showAirSourceTrace",
        runtimeValue: global.businessDialog.dialogParmas.POINT_CODE,
        pointType: global.businessDialog.dialogParmas.POINT_TYPE || '',
        isEnters: true,
        traceTime: row.START_TIME,
        layerName: global.businessDialog.dialogParmas.layerName,
      }]
  });

  /* 发送webSocket消息 */
  // if (rootData?.sendMessage) {
  //   rootData?.sendMessage({
  //     id: guid(true, 'lego'), // 唯一索引
  //     type: "runInteractive", // 消息名称
  //     data: [
  //       {
  //         shareCode: "showTraceDetail",
  //         runtimeValue: global.businessDialog.dialogParmas.POINT_CODE,
  //         // 显示lego的溯源
  //         componentName: "airSyxqPanelComponent",
  //         componentParmas: {
  //           pointType: global.businessDialog.dialogParmas.POINT_TYPE || '',
  //           isShowAlarmFlag: true,
  //           alarmTime: row.START_TIME || '',
  //           exceedingTheStandardState: '',
  //           primPollute: row.POLLUTE || '',
  //           polluteLevel: '',
  //           POINT_CODE: global.businessDialog.dialogParmas.POINT_CODE,
  //           endTime: (row.END_TIME && row.END_TIME !== '-' && row.END_TIME !== '--') ? row.END_TIME : '',
  //         }
  //       }]
  //   });
  // }

  rootData.rootSocket.emit('message', {
    type: 'showAirTraceDetail',
    room: global.socketRoom,
    data: [
      {
        shareCode: "showTraceDetail",
        runtimeValue: global.businessDialog.dialogParmas.POINT_CODE,
        // 显示lego的溯源
        componentName: "airSyxqPanelComponent",
        componentParmas: {
          pointType: global.businessDialog.dialogParmas.POINT_TYPE || '',
          isShowAlarmFlag: true,
          alarmTime: row.START_TIME || '',
          exceedingTheStandardState: '',
          primPollute: row.POLLUTE || '',
          polluteLevel: '',
          POINT_CODE: global.businessDialog.dialogParmas.POINT_CODE,
          endTime: (row.END_TIME && row.END_TIME !== '-' && row.END_TIME !== '--') ? row.END_TIME : '',
        }
      }
    ]
  });

  global.businessDialog.dialogName = '';
}
};
const gotoMapLocationLY = (row,column) => {
// 点击定位给地图发消息
if (["定位", '流域', '优良率', '劣Ⅴ类占比', '达标率'].includes(column.label)) {
  // 注意 这时候 还修改了 左上角选中区域值(估计是 发消息时 区域选择也接收了)
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractive", // 消息名称
    // 消息内容
    "data": [
      {
        "code": "wsystem_name",
        "shareCode": "WSYSTEM_NAME",
        "defaultValue": "",
        "runtimeValue": row.WSYSTEM_NAME
      },
      {
        "code": "wsystem_code",
        "name": "",
        "defaultValue": "",
        "shareCode": "WSYSTEM_CODE",
        "runtimeValue": row.WSYSTEM_CODE
      }
    ]
  });
}


};
const sendMsgToMap = (time,type) => {

rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'updateWaterOverviewWholeEvaluateResultStatus',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      type: type,
      assessType: global.waterGlobalVariables.waterOverview.assessType,
      monitorTime: time
    }
  }
);
};
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
// 关闭弹窗
global.businessDialog.dialogName = '';
};
const ontabClick1736494847158 = (data) => {
// 设置变量值
state.warningTimeType = data.value;
};
const ondateChange1735005830352 = (data) => {
// 设置变量值
state.timeValue = data;
// 执行自定义方法
changeTime(data);
};
const oncellClick1763369501006_0_0 = (row,column,cell,event) => {
// 执行自定义方法
gotoMapLocationLY(row,column);
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
 getLatestTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TIME_TYPE":"5minute","POINT_TYPE":"state.pointType","interfaceId":"66ad2ebe9d660295568b05187f34e133"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":"5minute","POINT_TYPE":state.pointType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TIME_TYPE":"5minute","POINT_TYPE":state.pointType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  const endTime = data.MONITORTIME
  const startTime = getTwoDaysBefore(`${endTime}:00`)
  state.START_TIME = startTime.slice(0,16)
  state.END_TIME = endTime
  state.timeValue = [state.START_TIME, state.END_TIME]
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
 getListData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [{"componentId":"t-table-2310.e9fb6bede","componentName":"区域考核目标流域-AQI表格-t-table","dataRefId":"6b86517ac7a347e8b37f4d98c920cffb","datasourceId":"f6b9c6e3e6c04d328e0eb0d8e60a1e20","datasourceName":"getListData","pageId":"febe12f177614ccd85a8cdbc3567beb1_6"}], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_TYPE":"","POINT_CODE":"state.pointCode","START_TIME":"state.START_TIME","END_TIME":"state.END_TIME","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"30f6f88064d789e356c09c4d4d8218c6"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_TYPE":"","POINT_CODE":state.pointCode,"START_TIME":state.START_TIME,"END_TIME":state.END_TIME,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"30f6f88064d789e356c09c4d4d8218c6"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_TYPE":"","POINT_CODE":state.pointCode,"START_TIME":state.START_TIME,"END_TIME":state.END_TIME,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"30f6f88064d789e356c09c4d4d8218c6"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     // console.log('站点报警', res);
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  state.listData = [];
  let data = JSON.parse(JSON.stringify(res.data.data))
  state.listData = data.slice(0, 100).map(item => {
    return {
      ...item,
      operation: '溯源',
      shortTime: handleNoVal((item.TIME || '').slice(5)),
      POLLUTE: replacePollutionCharacter(item.POLLUTE),
      RATE: handleNoVal(item.RATE),
      STATUS_NAME: handleNoVal(item?.STATUS_NAME),
      RESULT: handleNoVal(item?.RESULT),
    };
  });
  // 去重，获取报警站点数量
  const uniqueArr = [...data.reduce((map, obj) => {
    if (!map.has(obj.POINT_NAME)) {
      map.set(obj.POINT_NAME, obj);  // 如果map中没有该POINT_CODE，添加它
    }
    return map;
  }, new Map()).values()];
  state.warningTextArr[1].text = uniqueArr?.length || 0;
  state.warningTextArr[3].text = data?.length || 0;

} else {
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
// 接口函数
 getListData1: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TIME_TYPE":"hour","END_TIME":"state.END_TIME","START_TIME":"state.START_TIME","POINT_CODE":"state.pointCode","interfaceId":"72dd839d03f97572b57ad94ddbd23987"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":"hour","END_TIME":state.END_TIME,"START_TIME":state.START_TIME,"POINT_CODE":state.pointCode,"interfaceId":"72dd839d03f97572b57ad94ddbd23987"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TIME_TYPE":"hour","END_TIME":state.END_TIME,"START_TIME":state.START_TIME,"POINT_CODE":state.pointCode,"interfaceId":"72dd839d03f97572b57ad94ddbd23987"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData1'] = res.data;
                
     // console.log(res, '报警记录-echarts图数据')
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  state.listData = res?.data?.data;
  if (state.listData.length) {
    state.listData = state.listData.map((item, index) => ({
      ...item,
      number: index + 1,
      POLLUTE: handleNoVal(replacePollutionCharacter(item?.POLLUTE)),
      START_TIME: handleNoVal(item?.START_TIME),
      END_TIME: handleNoVal(item?.END_TIME),
      STATUS_NAME: handleNoVal(item?.STATUS_NAME),
      RESULT: handleNoVal(item?.RESULT),
      operation: 'origin',
    }))
  }
} else {
  state.listData = [];
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.listData = [];

      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [state.pointCode,state.START_TIME,state.END_TIME,global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getListData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewSiteWarnRecord', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initParams();
onMounted(() => {
setPageScale('t-l-c-airOverviewSiteWarnRecord', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTablex0x1ComputedData = computed(() => _.merge({}, componentState.tTablex0x1.default, componentState.tTablex0x1?.[state.screenSize]));

 const tRowx0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x2.default, componentState.tRowx0x2?.[state.screenSize]));

 const tColx0x2x0ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0.default, componentState.tColx0x2x0?.[state.screenSize]));

 const tDatePickerx0x2x0x0ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x2x0x0.default, componentState.tDatePickerx0x2x0x0?.[state.screenSize]));

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
tTablex0x1ComputedData,
tRowx0x2ComputedData,
tColx0x2x0ComputedData,
tDatePickerx0x2x0x0ComputedData,
oncellClick1763369501006_0_0,
ondateChange1735005830352,
};
},
}
</script>

<style scoped>
.t-l-c-airOverviewSiteWarnRecord {
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
height: 468px;
width: 788px;
background-color: rgba(5, 1, 49, 0);
}
.t-l-c-airOverviewSiteWarnRecord .airOverviewSiteWarnRecord-t-table-0-1 {
position: absolute !important;
top: 56px;
left: 0px;
width: 100%;
height: 90%;
pointer-events: auto;
}

.t-l-c-airOverviewSiteWarnRecord .airOverviewSiteWarnRecord-t-row-0-2 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-airOverviewSiteWarnRecord .airOverviewSiteWarnRecord-t-col-0-2-0 {
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

.t-l-c-airOverviewSiteWarnRecord .airOverviewSiteWarnRecord-t-date-picker-0-2-0-0 {
position: unset;
top: 0px;
left: 3px;
width: 390px;
height: 32px;
pointer-events: auto;
}
</style>
