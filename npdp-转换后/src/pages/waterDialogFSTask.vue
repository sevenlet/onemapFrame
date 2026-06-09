<template>
  <div id="t-l-c-waterDialogFSTask" class="t-l-c-waterDialogFSTask" ><t-rect id="t-rect-f4df.c4d856917" class="waterDialogFSTask-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-select id="t-select-d3b1.6ad43f639" class="waterDialogFSTask-t-select-0-1"  :active-value="tSelectx0x1ComputedData.activeValue" :options="tSelectx0x1ComputedData.options" :alias="tSelectx0x1ComputedData.alias" :multiple="tSelectx0x1ComputedData.multiple" :placeholder="tSelectx0x1ComputedData.placeholder" :clearable="tSelectx0x1ComputedData.clearable" :disabled="tSelectx0x1ComputedData.disabled" :name="tSelectx0x1ComputedData.name" :autocomplete="tSelectx0x1ComputedData.autocomplete" :filterable="tSelectx0x1ComputedData.filterable" :no-match-text="tSelectx0x1ComputedData.no-match-text" :no-data-text="tSelectx0x1ComputedData.no-data-text" :c-style="tSelectx0x1ComputedData.cStyle"></t-select><t-table id="t-table-b8ca.221434c7a" class="waterDialogFSTask-t-table-0-2"  :height="tTablex0x2ComputedData.height" :stripe="tTablex0x2ComputedData.stripe" :border="tTablex0x2ComputedData.border" :auto-scroll="tTablex0x2ComputedData.autoScroll" :speed="tTablex0x2ComputedData.speed" :columns="tTablex0x2ComputedData.columns" :data="tTablex0x2ComputedData.data" :default-sort="tTablex0x2ComputedData.defaultSort" :c-style="tTablex0x2ComputedData.cStyle"></t-table><t-text id="t-text-dc2e.9e60a74ce" class="waterDialogFSTask-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle"></t-text><t-text id="t-text-094a.1a5bf98c9" class="waterDialogFSTask-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle"></t-text><t-date-picker id="t-date-picker-7127.e61aac767" class="waterDialogFSTask-t-date-picker-0-5"  :placeholder="tDatePickerx0x5ComputedData.placeholder" :start-placeholder="tDatePickerx0x5ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x5ComputedData.endPlaceholder" :type="tDatePickerx0x5ComputedData.type" :clearable="tDatePickerx0x5ComputedData.clearable" :range-separator="tDatePickerx0x5ComputedData.rangeSeparator" :default-date="tDatePickerx0x5ComputedData.default-date" :separator="tDatePickerx0x5ComputedData.separator" :readonly="tDatePickerx0x5ComputedData.readonly" :editable="tDatePickerx0x5ComputedData.editable" :c-style="tDatePickerx0x5ComputedData.cStyle"></t-date-picker><t-pagination-base id="t-pagination-base-7b71.d7c576577" class="waterDialogFSTask-t-pagination-base-0-6"  :total="tPaginationBasex0x6ComputedData.total" :small="tPaginationBasex0x6ComputedData.small" :page-size="tPaginationBasex0x6ComputedData.pageSize" :pager-count="tPaginationBasex0x6ComputedData.pagerCount" :current-page="state.pageNum" :layout="tPaginationBasex0x6ComputedData.layout" :page-sizes="tPaginationBasex0x6ComputedData.pageSizes" :disabled="tPaginationBasex0x6ComputedData.disabled" :c-style="tPaginationBasex0x6ComputedData.cStyle" @current-change="oncurrentChange1735207131835"></t-pagination-base></div>
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
import { TDatePicker, TPaginationBase, TRect, TSelect, TTable, TText } from '@ths/design';

export default {
  components: {
    TDatePicker,
    TPaginationBase,
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
   pageNum: "1",
   pageSize: "10",
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
            default: {"width":"825px","height":"56px","left":"0px","position":"unset","top":"0px","background":"var(--business-query-bg)","borderBottom":"1px solid var(--business-show-bg60)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","animationName":"","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"825px","height":"56px","left":"0px","position":"unset","top":"0px","background":"var(--business-query-bg)","borderBottom":"1px solid var(--business-show-bg60)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","animationName":"","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tSelectx0x1: {
defaultStyle: {
            default: {"width":"320px","height":"33px","position":"unset","left":"487px","top":"11px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:"",
options:[{"value":"选项1","label":"黄金糕","disabled":false},{"value":"选项2","label":"双皮奶","disabled":false},{"value":"选项3","label":"蚵仔煎","disabled":false},{"value":"选项4","label":"龙须面","disabled":false},{"value":"选项5","label":"北京烤鸭","disabled":false}],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:true,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"320px","height":"33px","position":"unset","left":"487px","top":"11px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tTablex0x2: {
defaultStyle: {
            default: {"width":"824px","height":"408px","position":"unset","left":"-1px","top":"64px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"408",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"任务名称","type":"default","key":"region","stateKey":"iconStatus","width":"350PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal","color":"var(--business-theme)"},"cellStyle":{"cursor":"pointer"}},"infoKey":"","stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}]},{"label":"任务派发时间","type":"default","key":"dispatchTime","stateKey":"","width":"140PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--business-white)"}}},{"label":"任务等级","type":"state","key":"level","stateKey":"level","width":"111PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","background":""}},"stateList":[{"name":"黄色","fontStyle":{"color":"var(--business-white)","fontSize":"12PX","fontWeight":"normal","width":"35PX","height":"20PX","borderRadius":"2PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(255, 192, 0, 1) 100%,rgba(0, 0, 0, 1) 100%)","lineHeight":"20PX"}},{"name":"红色","fontStyle":{"color":"var(--business-white)","fontSize":"12PX","fontWeight":"normal","width":"35PX","height":"20PX","borderRadius":"2PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(255, 43, 43, 1) 100%,rgba(0, 0, 0, 1) 100%)","lineHeight":"20PX"}},{"name":"白色","fontStyle":{"color":"rgba(0, 0, 0, 0.9)","fontSize":"12PX","fontWeight":"normal","width":"35PX","height":"20PX","borderRadius":"2PX","borderWidth":"0PX","borderStyle":"solid","background":"linear-gradient(0deg,rgba(255, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","lineHeight":"20PX"}},{"name":"-","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"12PX","fontWeight":"normal","width":"0PX","height":"0PX","borderRadius":"0PX","borderWidth":"0PX","borderStyle":"solid","background":"","lineHeight":"0PX"}}]},{"label":"任务状态","type":"state","key":"status","stateKey":"status","width":"111PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--business-white)"}},"stateList":[{"name":"已完成","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"4PX","borderRadius":"4PX","width":"8PX","height":"8PX","border":"1.5px solid #29C129","backgroundImage":"linear-gradient(0deg,rgba(255, 255, 255, 0) 100%,rgba(0, 0, 0, 1) 100%)"},"cellStyle":{"background":""}},{"name":"处理中","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"4PX","borderRadius":"4PX","width":"8PX","height":"8PX","border":"1.5px solid #FFB405","backgroundImage":"linear-gradient(0deg,rgba(255, 255, 255, 0) 100%,rgba(0, 0, 0, 1) 100%)"},"cellStyle":{"background":""}},{"name":"已逾期","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"4PX","borderRadius":"4PX","width":"8PX","height":"8PX","border":"1.5px solid #EB3636","backgroundImage":"linear-gradient(0deg,rgba(255, 255, 255, 0) 100%,rgba(0, 0, 0, 1) 100%)"},"cellStyle":{"background":""}},{"name":"已派发","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"4PX","borderRadius":"4PX","width":"8PX","height":"8PX","border":"1.5px solid #007BFF","backgroundImage":"linear-gradient(0deg,rgba(255, 255, 255, 0) 100%,rgba(0, 0, 0, 1) 100%)"},"cellStyle":{"background":""}},{"name":"-","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{},"cellStyle":{"background":""}}]},{"label":"填报人","type":"default","key":"user","stateKey":"achievementRateValue","width":"111PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]}],
data:[{"region":"成都市湘宁氯酸盐有限责任公司","status":"已完成","level":"黄色","dispatchTime":"2024-11-06 10:22","user":"四个字名"},{"region":"成都市湘宁氯酸盐有限责任公司","status":"处理中","level":"红色","dispatchTime":"2024-11-06 10:22","user":"何宜豪"},{"region":"成都市湘宁氯酸盐有限责任公司","status":"已逾期","level":"白色","dispatchTime":"2024-11-06 10:22","user":"酆凌晶"},{"region":"成都市湘宁氯酸盐有限责任公司","status":"已派发","level":"红色","dispatchTime":"2024-11-06 10:22","user":"齐文杰"},{"region":"成都市湘宁氯酸盐有限责任公司","status":"已派发","level":"红色","dispatchTime":"2024-11-06 10:22","user":"史汝鑫"},{"region":"北京市XXX任务名称","status":"已派发","level":"红色","dispatchTime":"2024-11-06 10:22","user":"史汝鑫"},{"region":"-","status":"-","level":"-","dispatchTime":"-","user":"-"}],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"824px","height":"408px","position":"unset","left":"-1px","top":"64px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px","paddingLeft":"10px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px","paddingLeft":"10px","fontSize":"14px"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"65px","height":"19px","color":"var(--business-text-avianize)","position":"unset","left":"424px","top":"20px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"任务等级",
editable:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"19px","color":"var(--business-text-avianize)","position":"unset","left":"424px","top":"20px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"96px","height":"19px","color":"var(--business-text-avianize)","position":"unset","left":"15px","top":"21px","fontSize":"14px"},
            
            },
 default: { 
 
label:"任务派发时间",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"19px","color":"var(--business-text-avianize)","position":"unset","left":"15px","top":"21px","fontSize":"14px"}}}, 
 },
},
tDatePickerx0x5: {
defaultStyle: {
            default: {"width":"292px","height":"32px","position":"unset","left":"106px","top":"12px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"daterange",
clearable:true,
rangeSeparator:"至",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"292px","height":"32px","position":"unset","left":"106px","top":"12px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tPaginationBasex0x6: {
defaultStyle: {
            default: {"width":"825px","height":"38px","position":"unset","left":"0px","top":"496px","borderLeft":"0px none var(--business-show-bg60)","borderTop":"0px none var(--business-show-bg60)","borderRight":"0px none var(--business-show-bg60)","borderBottom":"0px none var(--business-show-bg60)","display":"flex","justifyContent":"flex-end"},
            
            },
 default: { 
 
total:800,
small:false,
pageSize:10,
pagerCount:7,
currentPage:"1",
layout:"total, prev, pager, next",
pageSizes:[10,20,30,40,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"825px","height":"38px","position":"unset","left":"0px","top":"496px","borderLeft":"0px none var(--business-show-bg60)","borderTop":"0px none var(--business-show-bg60)","borderRight":"0px none var(--business-show-bg60)","borderBottom":"0px none var(--business-show-bg60)","display":"flex","justifyContent":"flex-end"}},"total":{"default":{"color":"var(--business-text-avianize)","marginRight":"0px","position":"absolute","right":"0px","left":"0px"}},"pagerItem":{"default":{"color":"var(--business-white)","backgroundColor":"var(--business-show-bg15)","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)"},"hover":{"backgroundColor":"var(--business-show-bg15)"}},"pager":{"default":{"color":"var(--business-white)","backgroundColor":"var(--business-show-bg15)","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)"},"hover":{"backgroundColor":"var(--business-show-bg15)"}},"more":{"default":{"color":"var(--business-white)"}}}, 
 },
},
});
const oncurrentChange1735207131835 = (currentPage) => {
// 设置变量值
state.pageNum = currentPage;
};
 function handleWindowResize() {
                            setPageScale('t-l-c-waterDialogFSTask', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-waterDialogFSTask', global.appScaleMode, 'normal');
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

 const tTablex0x2ComputedData = computed(() => _.merge({}, componentState.tTablex0x2.default, componentState.tTablex0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tDatePickerx0x5ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x5.default, componentState.tDatePickerx0x5?.[state.screenSize]));

 const tPaginationBasex0x6ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x6.default, componentState.tPaginationBasex0x6?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tSelectx0x1ComputedData,
tTablex0x2ComputedData,
tTextx0x3ComputedData,
tTextx0x4ComputedData,
tDatePickerx0x5ComputedData,
tPaginationBasex0x6ComputedData,
oncurrentChange1735207131835,
};
},
}
</script>

<style scoped>
.t-l-c-waterDialogFSTask {
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
height: 580px;
width: 823px;
background-color: rgba(0,0,0,0);
}
.t-l-c-waterDialogFSTask .waterDialogFSTask-t-rect-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 825px;
height: 56px;
pointer-events: auto;
}

.t-l-c-waterDialogFSTask .waterDialogFSTask-t-select-0-1 {
position: absolute !important;
top: 11px;
left: 487px;
width: 320px;
height: 33px;
pointer-events: auto;
}

.t-l-c-waterDialogFSTask .waterDialogFSTask-t-table-0-2 {
position: absolute !important;
top: 64px;
left: -1px;
width: 824px;
height: 408px;
pointer-events: auto;
}

.t-l-c-waterDialogFSTask .waterDialogFSTask-t-text-0-3 {
position: absolute !important;
top: 20px;
left: 424px;
width: 65px;
height: 19px;
pointer-events: auto;
}

.t-l-c-waterDialogFSTask .waterDialogFSTask-t-text-0-4 {
position: absolute !important;
top: 21px;
left: 15px;
width: 96px;
height: 19px;
pointer-events: auto;
}

.t-l-c-waterDialogFSTask .waterDialogFSTask-t-date-picker-0-5 {
position: absolute !important;
top: 12px;
left: 106px;
width: 292px;
height: 32px;
pointer-events: auto;
}

.t-l-c-waterDialogFSTask .waterDialogFSTask-t-pagination-base-0-6 {
position: absolute !important;
top: 496px;
left: 0px;
width: 825px;
height: 38px;
pointer-events: auto;
}
</style>
