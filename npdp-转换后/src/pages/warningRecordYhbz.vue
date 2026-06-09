<template>
  <div id="t-l-c-warningRecordYhbz" class="t-l-c-warningRecordYhbz" ><t-row id="t-row-2e4b.db01e5fae" class="warningRecordYhbz-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align"><t-col id="t-col-d0c3.9d299146f" class="warningRecordYhbz-t-col-0-1-0"  :span="tColx0x1x0ComputedData.span" :offset="tColx0x1x0ComputedData.offset" :push="tColx0x1x0ComputedData.push" :pull="tColx0x1x0ComputedData.pull" :c-style="tColx0x1x0ComputedData.cStyle"><t-date-picker id="t-date-picker-bd98.3d76d7f4" class="warningRecordYhbz-t-date-picker-0-1-0-0"  :placeholder="tDatePickerx0x1x0x0ComputedData.placeholder" :start-placeholder="tDatePickerx0x1x0x0ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x1x0x0ComputedData.endPlaceholder" :type="tDatePickerx0x1x0x0ComputedData.type" :clearable="tDatePickerx0x1x0x0ComputedData.clearable" :range-separator="tDatePickerx0x1x0x0ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeValue, componentPropBindingMap?.['t-date-picker-bd98.3d76d7f4']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x1x0x0ComputedData.separator" :readonly="tDatePickerx0x1x0x0ComputedData.readonly" :editable="tDatePickerx0x1x0x0ComputedData.editable" :c-style="tDatePickerx0x1x0x0ComputedData.cStyle" :disabled-date="replaceCssVariables(filterData(state.maxTimeValue, componentPropBindingMap?.['t-date-picker-bd98.3d76d7f4']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :is-disabled-front="tDatePickerx0x1x0x0ComputedData.isDisabledFront" @date-change="ondateChange1735005830352"></t-date-picker></t-col></t-row><t-row id="t-row-3e79.a40a5284" class="warningRecordYhbz-t-row-0-2"  :c-style="tRowx0x2ComputedData.cStyle" :gutter="tRowx0x2ComputedData.gutter" :justify="tRowx0x2ComputedData.justify" :align="tRowx0x2ComputedData.align"><t-col id="t-col-6308.ffbbe2889" class="warningRecordYhbz-t-col-0-2-0"  :span="tColx0x2x0ComputedData.span" :offset="tColx0x2x0ComputedData.offset" :push="tColx0x2x0ComputedData.push" :pull="tColx0x2x0ComputedData.pull" :c-style="tColx0x2x0ComputedData.cStyle"><t-table id="t-table-2310.e9fb6bede" class="warningRecordYhbz-t-table-0-2-0-0"  :height="tTablex0x2x0x0ComputedData.height" :stripe="tTablex0x2x0x0ComputedData.stripe" :border="tTablex0x2x0x0ComputedData.border" :auto-scroll="tTablex0x2x0x0ComputedData.autoScroll" :speed="tTablex0x2x0x0ComputedData.speed" :columns="tTablex0x2x0x0ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-2310.e9fb6bede']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x2x0x0ComputedData.defaultSort" :c-style="tTablex0x2x0x0ComputedData.cStyle" @cell-click="oncellClick1763369501006_0_0"></t-table></t-col></t-row></div>
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
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-tabs-base-73a6.430c2dbe7":{"attributeName":"tTabsBasex0x0"},"t-row-2e4b.db01e5fae":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-d0c3.9d299146f":{"attributeName":"tColx0x1x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-bd98.3d76d7f4":{"attributeName":"tDatePickerx0x1x0x0","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"disabledDate":{"filters":[]},"isDisabledFront":{"filters":[]}},"t-row-3e79.a40a5284":{"attributeName":"tRowx0x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-6308.ffbbe2889":{"attributeName":"tColx0x2x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-table-2310.e9fb6bede":{"attributeName":"tTablex0x2x0x0","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[{"name":"filterWarningData"}]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}}};
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
tRowx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"20px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"20px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x1x0: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","paddingRight":"32px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","paddingRight":"32px"}}}, 
 },
},
tDatePickerx0x1x0x0: {
defaultStyle: {
            default: {"width":"330px","height":"32px","position":"unset","left":"686px","top":"20px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"330px","height":"32px","position":"unset","left":"686px","top":"20px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
disabledDate:"",
isDisabledFront:false, 
 },
},
tRowx0x2: {
defaultStyle: {
            default: {"width":"100%","height":"calc(100% - 80px)","display":"flex","justifyContent":"center","alignItems":"start","position":"unset","left":"0px","top":"80px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"calc(100% - 80px)","display":"flex","justifyContent":"center","alignItems":"start","position":"unset","left":"0px","top":"80px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x2x0: {
defaultStyle: {
            default: {"width":"100px","height":"100%","display":"flex","justifyContent":"center","alignItems":"start","paddingLeft":"20px","paddingRight":"20px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"100%","display":"flex","justifyContent":"center","alignItems":"start","paddingLeft":"20px","paddingRight":"20px"}}}, 
 },
},
tTablex0x2x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"100%","position":"unset","left":"-21px","top":"109px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"90%",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"站点","key":"point_name","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":"","fontSize":"var(--text-size-14)"}},"width":"210px","type":"default","stateKey":"iconStatus"},{"label":"站点类型","type":"default","key":"pointType","stateKey":"","width":"150px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--text-size-14)"}}},{"label":"报警时间","type":"default","key":"shortTime","stateKey":"","width":"250px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--text-size-14)","color":"rgba(255, 255, 255, 1)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"var(--business-unit-icon)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"类型","type":"default","key":"event_type","stateKey":"","minWidth":"160px","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--text-size-14)","color":"var(--t-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"操作","type":"operation","key":"tarce","stateKey":"","width":"180px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--text-size-14)","color":"var(--t-white)"},"cellStyle":{"cursor":"pointer"}},"stateList":[{"name":"trace","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"var(--text-size-14)","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"operationList":[{"name":"溯源","id":"trace","fontStyle":{"color":"rgb(5, 245, 251)","fontSize":"var(--text-size-14)"}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","position":"unset","left":"-21px","top":"109px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"var(--text-size-14)","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"emptyWrapper":{"default":{"paddingBottom":"unset"}},"emptyText":{"default":{"fontSize":"var(--text-size-14)"}}}, 
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
async function getData(){
  await apiRegistry.getLatestTime.request();
  await apiRegistry.getListData.request();
}
getData()
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
// 事件交互-请求调用接口
apiRegistry.getListData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const oncellClick1763369501006_0_0 = (row,column,cell,event) => {
// 执行自定义方法
gotoMapLocationLY(row,column);
// 执行自定义方法
handleTabClick(row,column);
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closeDialog", // 消息名称
data: {}, // 发送的数据
});
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
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.pointCode","interfaceId":"ba5175c6cda29ea16889a79d7ad6c464"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.pointCode,"interfaceId":"ba5175c6cda29ea16889a79d7ad6c464"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.pointCode,"interfaceId":"ba5175c6cda29ea16889a79d7ad6c464"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  const endTime = data.max_start_time_str
  const startTime = getTwoDaysBefore(endTime)
  state.START_TIME = startTime.slice(0,13)
  state.END_TIME = endTime.slice(0,13)
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
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_TYPE":"","POINT_CODE":"state.pointCode","START_TIME":"state.START_TIME","END_TIME":"state.END_TIME","REGION_CODE":"","interfaceId":"30f6f88064d789e356c09c4d4d8218c6"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_TYPE":"","POINT_CODE":state.pointCode,"START_TIME":state.START_TIME,"END_TIME":state.END_TIME,"REGION_CODE":"","interfaceId":"30f6f88064d789e356c09c4d4d8218c6"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_TYPE":"","POINT_CODE":state.pointCode,"START_TIME":state.START_TIME,"END_TIME":state.END_TIME,"REGION_CODE":"","interfaceId":"30f6f88064d789e356c09c4d4d8218c6"});
                   
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
};
// 监听变量，调取接口
watch(() => [""], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getListData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-warningRecordYhbz', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initParams();
onMounted(() => {
setPageScale('t-l-c-warningRecordYhbz', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tColx0x1x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x0.default, componentState.tColx0x1x0?.[state.screenSize]));

 const tDatePickerx0x1x0x0ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x1x0x0.default, componentState.tDatePickerx0x1x0x0?.[state.screenSize]));

 const tRowx0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x2.default, componentState.tRowx0x2?.[state.screenSize]));

 const tColx0x2x0ComputedData = computed(() => _.merge({}, componentState.tColx0x2x0.default, componentState.tColx0x2x0?.[state.screenSize]));

 const tTablex0x2x0x0ComputedData = computed(() => _.merge({}, componentState.tTablex0x2x0x0.default, componentState.tTablex0x2x0x0?.[state.screenSize]));

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
tRowx0x1ComputedData,
tColx0x1x0ComputedData,
tDatePickerx0x1x0x0ComputedData,
tRowx0x2ComputedData,
tColx0x2x0ComputedData,
tTablex0x2x0x0ComputedData,
ondateChange1735005830352,
oncellClick1763369501006_0_0,
};
},
}
</script>

<style scoped>
.t-l-c-warningRecordYhbz {
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
height: 628px;
width: 1000px;
background-color: rgba(5, 1, 49, 0);
}
.t-l-c-warningRecordYhbz .warningRecordYhbz-t-row-0-1 {
position: absolute !important;
top: 20px;
left: 0px;
width: 100%;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-warningRecordYhbz .warningRecordYhbz-t-col-0-1-0 {
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

.t-l-c-warningRecordYhbz .warningRecordYhbz-t-date-picker-0-1-0-0 {
position: unset;
top: 20px;
left: 686px;
width: 330px;
height: 32px;
pointer-events: auto;
}

.t-l-c-warningRecordYhbz .warningRecordYhbz-t-row-0-2 {
position: absolute !important;
top: 80px;
left: 0px;
width: 100%;
height: calc(100% - 80px);
pointer-events: auto;
display: flex;
justify-content: center;
align-items: start;
}

.t-l-c-warningRecordYhbz .warningRecordYhbz-t-col-0-2-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: start;
padding-left: 20px;
padding-right: 20px;
}

.t-l-c-warningRecordYhbz .warningRecordYhbz-t-table-0-2-0-0 {
position: unset;
top: 109px;
left: -21px;
width: 100%;
height: 100%;
pointer-events: auto;
}
</style>
