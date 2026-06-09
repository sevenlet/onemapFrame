<template>
  <div id="t-l-c-wtfkContent" class="t-l-c-wtfkContent" ><t-table id="t-table-c799.5f717c05a" class="wtfkContent-t-table-0-0"  :height="tTablex0x0ComputedData.height" :stripe="tTablex0x0ComputedData.stripe" :border="tTablex0x0ComputedData.border" :auto-scroll="tTablex0x0ComputedData.autoScroll" :speed="tTablex0x0ComputedData.speed" :columns="tTablex0x0ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-c799.5f717c05a']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x0ComputedData.defaultSort" :c-style="tTablex0x0ComputedData.cStyle" @cell-click="oncellClick1764838608814_0_0" @operation-click="onoperationClick1766888156850"></t-table><t-pagination-base id="t-pagination-base-58ac.a6bedd5c" class="wtfkContent-t-pagination-base-0-1"  :total="replaceCssVariables(filterData(state.pageInfo.total, componentPropBindingMap?.['t-pagination-base-58ac.a6bedd5c']['total'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x1ComputedData.small" :page-size="replaceCssVariables(filterData(state.pageInfo.pageSize, componentPropBindingMap?.['t-pagination-base-58ac.a6bedd5c']['pageSize'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :pager-count="tPaginationBasex0x1ComputedData.pagerCount" :current-page="replaceCssVariables(filterData(state.pageInfo.pageNum, componentPropBindingMap?.['t-pagination-base-58ac.a6bedd5c']['currentPage'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x1ComputedData.layout" :page-sizes="tPaginationBasex0x1ComputedData.pageSizes" :disabled="tPaginationBasex0x1ComputedData.disabled" :c-style="tPaginationBasex0x1ComputedData.cStyle" @current-change="oncurrentChange1768185728179_0_1"></t-pagination-base><t-date-picker id="t-date-picker-2280.02d30d52b" class="wtfkContent-t-date-picker-0-2"  :placeholder="tDatePickerx0x2ComputedData.placeholder" :start-placeholder="tDatePickerx0x2ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x2ComputedData.endPlaceholder" :type="tDatePickerx0x2ComputedData.type" :clearable="tDatePickerx0x2ComputedData.clearable" :range-separator="tDatePickerx0x2ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.dateRange.value, componentPropBindingMap?.['t-date-picker-2280.02d30d52b']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x2ComputedData.separator" :readonly="tDatePickerx0x2ComputedData.readonly" :editable="tDatePickerx0x2ComputedData.editable" :c-style="tDatePickerx0x2ComputedData.cStyle" :is-disabled-front="tDatePickerx0x2ComputedData.isDisabledFront" :disabled-date="tDatePickerx0x2ComputedData.disabledDate" @date-change="ondateChange1769759415224_0_0"></t-date-picker><t-rect id="t-rect-0145.9c320d24c" class="wtfkContent-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1770016270627"></t-rect></div>
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
import { TDatePicker, TPaginationBase, TRect, TTable } from '@ths/design';

export default {
  components: {
    TDatePicker,
    TPaginationBase,
    TRect,
    TTable,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-table-c799.5f717c05a":{"attributeName":"tTablex0x0","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-pagination-base-58ac.a6bedd5c":{"attributeName":"tPaginationBasex0x1","total":{"filters":[]},"small":{"filters":[]},"pageSize":{"filters":[]},"pagerCount":{"filters":[]},"currentPage":{"filters":[]},"layout":{"filters":[]},"pageSizes":{"filters":[]},"disabled":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-2280.02d30d52b":{"attributeName":"tDatePickerx0x2","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-rect-0145.9c320d24c":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   debouncedGetData: {},
   pointType: "",
   keyWord: "",
   listData: [],
   pageInfo: {"pageNum":1,"pageSize":10,"total":0,"pages":0},
   dateType: "",
   dateRange: {"start":"","end":"","value":[]},
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
tTablex0x0: {
defaultStyle: {
            default: {"width":"403px","height":"675px","position":"unset","left":"0px","top":"55px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"500px",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""},"cellStyle":{"cursor":"pointer"}},"width":"44PX","type":"default","stateKey":"iconStatus"},{"label":"现场情况说明","key":"onSiteDescription","align":"left","operationList":[],"stateList":[],"showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"14PX"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"nameTextStatus","infoPosition":"right"},{"label":"填报人","key":"inspector","align":"center","operationList":[],"stateList":[],"width":"auto","showOverflowTooltip":true,"style":{"fontStyle":{"fontSize":"14PX"},"cellStyle":{"cursor":"pointer"}}},{"label":"操作","key":"operation","align":"center","operationList":[{"name":"调度","id":"调度","fontStyle":{"display":"block","color":"var(--business-theme)"}}],"stateList":[],"width":"100PX","showOverflowTooltip":true,"style":{"fontStyle":{"fontSize":"14PX"},"cellStyle":{"cursor":"pointer"}},"type":"operation"}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"403px","height":"675px","position":"unset","left":"0px","top":"55px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"0px solid rgba(26,27,31,1)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","marginRight":"0px","backgroundColor":"","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"rgba(255, 255, 255, 1)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","color":"var(--t-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"highlightRow":{"default":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
tPaginationBasex0x1: {
defaultStyle: {
            default: {"width":"403px","height":"32px","position":"unset","left":"0px","top":"730px","color":"","animationName":"","display":"flex","justifyContent":"right","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingTop":"unset","paddingBottom":"unset","marginTop":"10px","alignItems":"center"},
            
            },
 default: { 
 
total:0,
small:false,
pageSize:5,
pagerCount:5,
currentPage:1,
layout:" prev, pager, next,sizes,total",
pageSizes:[5,10,15,20,30,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"403px","height":"32px","position":"unset","left":"0px","top":"730px","color":"","animationName":"","display":"flex","justifyContent":"right","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingTop":"unset","paddingBottom":"unset","marginTop":"10px","alignItems":"center"}},"pagerItem":{"default":{"color":"var(--t-color-text-green)","fontSize":"14px","lineHeight":"32px","borderLeft":"1px none #366B92","borderTop":"1px none #366B92","borderRight":"1px none #366B92","borderBottom":"1px none #366B92","marginLeft":"0px","marginRight":"5px","backgroundColor":"var(--business-select-item-bg)"},"active":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundColor":"#6FAED9","color":"#FFFFFF","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""},"hover":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","color":"#FFFFFF","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"#6FAED9"}},"pager":{"default":{"borderLeft":"1px none var(--theme-btn-default)","borderTop":"1px none var(--theme-btn-default)","borderRight":"1px none var(--theme-btn-default)","borderBottom":"1px none var(--theme-btn-default)","color":"var(--t-color-text-green)","marginLeft":"0px","marginRight":"0px","backgroundColor":"#0D4895"},"hover":{"color":"#FFFFFF","borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--t-button-bg)"}},"more":{"default":{"color":"var(--t-color-text-green)"},"hover":{"color":"#366B92","backgroundColor":""}},"total":{"default":{"color":"var(--t-color-text-green)","paddingRight":"0px","paddingLeft":"0px","fontSize":"14px","marginRight":"0px","marginLeft":"20px","display":"flex"}},"sizesWrapper":{"default":{"color":"var(--t-color-text-green)","fontSize":"14px","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","marginRight":"10px","marginLeft":"10px","display":"none"}},"sizesInput":{"default":{"color":"var(--common-white08)","borderLeft":"1px solid var(--common-white08)","borderTop":"1px solid var(--common-white08)","borderRight":"1px solid var(--common-white08)","borderBottom":"1px solid var(--common-white08)","backgroundColor":""},"hover":{"borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"jumpWrapper":{"default":{"color":"var(--t-color-text-green)","backgroundColor":""}},"jumpInput":{"default":{"color":"var(--t-color-text-green)","backgroundColor":"var(--business-select-item-bg)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"hover":{"color":"var(--common-white1)","borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"sizesDropdownWrapper":{"default":{"backgroundColor":"","color":"rgba(255, 255, 255, 0.9)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","background":"var(--t-body-background)","fillType":"color"}},"sizesDropdownItem":{"default":{"color":"rgba(255, 255, 255, 0.9)","backgroundColor":"","borderLeft":"1px none #00828A","borderTop":"1px none #00828A","borderRight":"1px none #00828A","borderBottom":"1px none #00828A"},"active":{"backgroundColor":"var(--business-select-item-bg)","color":"var(--business-text-hover)"},"hover":{"color":"var(--business-text-hover)","backgroundColor":"var(--business-select-item-bg)"}}}, 
 },
},
tDatePickerx0x2: {
defaultStyle: {
            default: {"width":"367px","height":"32px","position":"unset","left":"0px","top":"10px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"367px","height":"32px","position":"unset","left":"0px","top":"10px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"21px","height":"26px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","backgroundImage":"url(assets/images/2022-11-01/325115b23ccc4714ae4cc3711d4269f4.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"13px","left":"373px","position":"unset","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"21px","height":"26px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","backgroundImage":"url(assets/images/2022-11-01/325115b23ccc4714ae4cc3711d4269f4.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"13px","left":"373px","position":"unset","cursor":"pointer"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
});
const gotoMapLocation = (row,column) => {
if (["定位"].includes(column.label)) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: "gotoPoint",
    data: {
      "longitude": row.longitude,
      "latitude": row.latitude,
    }
  });
}


};
const setCss = () => {
/**
 * 添加表格无数据样式
 */

// 创建 <style> 元素
const style = document.createElement('style');

// 定义样式规则（带 !important 确保覆盖第三方库默认样式）
style.innerHTML = `
  .t-l-c-lawEnforcerEntryList .lawEnforcerEntryList-t-table-0-0 {
    position: unset !important;
  }
`;

// 插入到 <head> 末尾
document.head.appendChild(style);
};
const setTimeValue = (data) => {
state.dateRange.value = data || [];
state.dateRange.start = data[0] || "";
state.dateRange.end = data[1] || "";
// 给地图发送消息
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'updateQuestionFeedbackTime',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      'startTime': state.dateRange.start,
      'endTime': state.dateRange.end
    }
  }
)
};
const init = () => {
watch(() => global.regionaQuery.regionCode, () => {
  if (global.regionaQuery.regionCode) {
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
  }
  apiRegistry.getLatestTime.request();
}, {
  deep: true,
  immediate: true,
})
};
const debounceData = () => {
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 2. 定义原始业务函数
function getData() {
  apiRegistry.getLatestTime.request().then(() => {
    ElementPlus.ElMessage({ message: '刷新成功', type: 'success' });
  }).catch(() => {
    ElementPlus.ElMessage.error('刷新失败');
  });
}

// 3. 创建防抖函数（只创建一次！）
state.debouncedGetData = debounce(getData, 500);
};
const handleRefresh = () => {
// 防抖
state.debouncedGetData()
};
const oncellClick1764838608814_0_0 = (row,column,cell,event) => {
// 执行自定义方法
gotoMapLocation(row,column);
};
const onoperationClick1766888156850 = (row,operationId) => {

window.open('wxwork://', '_self');
};
const oncurrentChange1768185728179_0_1 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
// 事件交互-请求调用接口
apiRegistry.getListData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const ondateChange1735010317720 = (data) => {
// 执行自定义方法
setTimeValue(data);
// 事件交互-请求调用接口
apiRegistry.getLineData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const ondateChange1769759415224_0_0 = (data) => {
// 执行自定义方法
setTimeValue(data);
// 事件交互-请求调用接口
apiRegistry.getListData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const onclick1770016270627 = () => {
// 执行自定义方法
handleRefresh();
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"inspectionTimeEnd":"state.dateRange.end","inspectionTimeStart":"state.dateRange.start","pageNum":"state.pageInfo.pageNum","pageSize":"state.pageInfo.pageSize","interfaceId":"4a679fccf67a8c4bf111c4b39593b167"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"inspectionTimeEnd":state.dateRange.end,"inspectionTimeStart":state.dateRange.start,"pageNum":state.pageInfo.pageNum,"pageSize":state.pageInfo.pageSize,"interfaceId":"4a679fccf67a8c4bf111c4b39593b167"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"inspectionTimeEnd":state.dateRange.end,"inspectionTimeStart":state.dateRange.start,"pageNum":state.pageInfo.pageNum,"pageSize":state.pageInfo.pageSize,"interfaceId":"4a679fccf67a8c4bf111c4b39593b167"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.pageInfo.total = head.pageInfo.total;
  state.listData = data.map(item => {
    return {
      ...item,
      operation: '调度'
    }
  })
} else {
  state.listData = [];
  state.pageInfo.total = 0
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
 getLatestTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_TYPE":"state.pointType","TIME_TYPE":"5minute","interfaceId":"66ad2ebe9d660295568b05187f34e133"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_TYPE":state.pointType,"TIME_TYPE":"5minute","interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_TYPE":state.pointType,"TIME_TYPE":"5minute","interfaceId":"66ad2ebe9d660295568b05187f34e133"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;

if (head.statusCode === '200' && data) {
  state.dateRange.end = data.MONITORTIME
  state.dateRange.start = getPrevTime(data.MONITORTIME + ':00', '2hour').slice(0, 16)
  state.dateRange.value = [state.dateRange.start, state.dateRange.end]
  apiRegistry.getListData.request();
} else {
  state.dateRange.start = ''
  state.dateRange.end = ''
  state.dateRange.value = []
}
// 给地图发送消息
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'updateQuestionFeedbackTime',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      'startTime': state.dateRange.start,
      'endTime': state.dateRange.end
    }
  }
)
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
                            setPageScale('t-l-c-wtfkContent', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-wtfkContent', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setCss();
});
// 执行自定义方法
init();
// 执行自定义方法
debounceData();
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTablex0x0ComputedData = computed(() => _.merge({}, componentState.tTablex0x0.default, componentState.tTablex0x0?.[state.screenSize]));

 const tPaginationBasex0x1ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x1.default, componentState.tPaginationBasex0x1?.[state.screenSize]));

 const tDatePickerx0x2ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x2.default, componentState.tDatePickerx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

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
tTablex0x0ComputedData,
tPaginationBasex0x1ComputedData,
tDatePickerx0x2ComputedData,
tRectx0x3ComputedData,
oncellClick1764838608814_0_0,
onoperationClick1766888156850,
oncurrentChange1768185728179_0_1,
ondateChange1769759415224_0_0,
onclick1770016270627,
};
},
}
</script>

<style scoped>
.t-l-c-wtfkContent {
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
width: 403px;
height: 775px;
background-color: rgba(0, 0, 0, 0);
}
.t-l-c-wtfkContent .wtfkContent-t-table-0-0 {
position: absolute !important;
top: 55px;
left: 0px;
width: 403px;
height: 675px;
pointer-events: auto;
}

.t-l-c-wtfkContent .wtfkContent-t-pagination-base-0-1 {
position: absolute !important;
top: 730px;
left: 0px;
width: 403px;
height: 32px;
pointer-events: auto;
}

.t-l-c-wtfkContent .wtfkContent-t-date-picker-0-2 {
position: absolute !important;
top: 10px;
left: 0px;
width: 367px;
height: 32px;
pointer-events: auto;
}

.t-l-c-wtfkContent .wtfkContent-t-rect-0-3 {
position: absolute !important;
top: 13px;
left: 373px;
width: 21px;
height: 26px;
pointer-events: auto;
}
</style>
