<template>
  <div id="t-l-c-aerialData" class="t-l-c-aerialData" ><t-component id="t-component-897a.84af8c526" class="aerialData-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName"></t-component><t-text id="t-text-a8e3.9ed495eb2" class="aerialData-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle"></t-text><t-date-picker id="t-date-picker-d14b.a5b56825b" class="aerialData-t-date-picker-0-4"  :placeholder="tDatePickerx0x4ComputedData.placeholder" :start-placeholder="tDatePickerx0x4ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x4ComputedData.endPlaceholder" :type="tDatePickerx0x4ComputedData.type" :clearable="tDatePickerx0x4ComputedData.clearable" :range-separator="tDatePickerx0x4ComputedData.rangeSeparator" :default-date="replaceCssVariables(state.timeData, global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x4ComputedData.separator" :readonly="tDatePickerx0x4ComputedData.readonly" :editable="tDatePickerx0x4ComputedData.editable" :c-style="tDatePickerx0x4ComputedData.cStyle" :disabled-date="tDatePickerx0x4ComputedData.disabledDate" :is-disabled-front="tDatePickerx0x4ComputedData.isDisabledFront" @date-change="ondateChange1758013923841"></t-date-picker><t-pagination-base v-if="state.pageInfo.pages !== '0'" id="t-pagination-base-7202.481b5006d" class="aerialData-t-pagination-base-0-5"  :total="replaceCssVariables(state.pageInfo.total, global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x5ComputedData.small" :page-size="replaceCssVariables(state.pageInfo.pageSize, global?.theme || global?.activeTheme || '默认主题')" :pager-count="replaceCssVariables(state.pageInfo.pages, global?.theme || global?.activeTheme || '默认主题')" :current-page="replaceCssVariables(state.pageInfo.pageNum, global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x5ComputedData.layout" :page-sizes="tPaginationBasex0x5ComputedData.pageSizes" :disabled="tPaginationBasex0x5ComputedData.disabled" :c-style="tPaginationBasex0x5ComputedData.cStyle" @current-change="oncurrentChange1758181820293_0_0"></t-pagination-base><t-table id="t-table-bb38.fd1788b03" class="aerialData-t-table-0-6"  :height="tTablex0x6ComputedData.height" :stripe="tTablex0x6ComputedData.stripe" :border="tTablex0x6ComputedData.border" :auto-scroll="tTablex0x6ComputedData.autoScroll" :speed="tTablex0x6ComputedData.speed" :columns="tTablex0x6ComputedData.columns" :data="replaceCssVariables(state.listData, global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x6ComputedData.defaultSort" :c-style="tTablex0x6ComputedData.cStyle" @cell-click="oncellClick1758623930485"></t-table></div>
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
import { TComponent, TDatePicker, TPaginationBase, TTable, TText } from '@ths/design';

export default {
  components: {
    TComponent,
    TDatePicker,
    TPaginationBase,
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
   timeData: [],
   END_TIME: "",
   START_TIME: "",
   UAV_TASK_NAME: "",
   listData: [],
   pageInfo: {"pageNum":1,"pageSize":20,"total":0,"pages":0},
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
tComponentx0x0: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"20px","top":"20px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"20px","top":"20px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/71ed927f19ff41e78116c906842de342_19/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"200px","height":"20px","color":"var(--t-white)","fontFamily":"方正综艺","fontSize":"17px","position":"unset","left":"54px","top":"26px","lineHeight":"20px","animationName":""},
            
            },
 default: { 
 
label:"航拍数据列表",
editable:false,
cStyle:{"wrapper":{"default":{"width":"200px","height":"20px","color":"var(--t-white)","fontFamily":"方正综艺","fontSize":"17px","position":"unset","left":"54px","top":"26px","lineHeight":"20px","animationName":""},"hover":{"fontSize":"17px"},"focus":{"fontSize":"17px"}}}, 
 },
},
tDatePickerx0x4: {
defaultStyle: {
            default: {"width":"410px","height":"32px","position":"unset","left":"20px","top":"65px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"daterange",
clearable:true,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","position":"unset","left":"20px","top":"65px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
disabledDate:"",
isDisabledFront:false, 
 },
},
tPaginationBasex0x5: {
defaultStyle: {
            default: {"width":"410px","height":"38px","position":"unset","left":"25px","top":"860px","color":"","animationName":"","display":"flex","justifyContent":"space-between"},
            
            },
 default: { 
 
total:0,
small:false,
pageSize:15,
pagerCount:0,
currentPage:1,
layout:" total,prev, pager, next",
pageSizes:[20,30,40,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"38px","position":"unset","left":"25px","top":"860px","color":"","animationName":"","display":"flex","justifyContent":"space-between"}},"pagerItem":{"default":{"color":"#fff","fontSize":"14px","lineHeight":"32px","borderLeft":"1px solid #366B92","borderTop":"1px solid #366B92","borderRight":"1px solid #366B92","borderBottom":"1px solid #366B92","marginLeft":"0px","marginRight":"5px","backgroundColor":""},"active":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundColor":"rgba(255, 255, 255, 0)","color":"var(--common-white1)","backgroundImage":"linear-gradient(180deg,rgba(50, 169, 255, 0.8) 0%,rgba(61, 126, 255, 0.8) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","color":"var(--common-white1)","backgroundImage":"linear-gradient(180deg,rgba(50, 169, 255, 0.8) 0.6246480855855856%,rgba(61, 126, 255, 0.8) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}},"pager":{"default":{"borderLeft":"1px none var(--theme-btn-default)","borderTop":"1px none var(--theme-btn-default)","borderRight":"1px none var(--theme-btn-default)","borderBottom":"1px none var(--theme-btn-default)","color":"#fff","marginLeft":"0px","marginRight":"0px","backgroundColor":"#1B4293"},"hover":{"color":"var(--common-white1)","borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundImage":"linear-gradient(180deg,rgba(50, 169, 255, 0.8) 0%,rgba(61, 126, 255, 0.8) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}},"more":{"default":{"color":"#C9E7F5"},"hover":{"color":"#366B92","backgroundColor":""}},"total":{"default":{"color":"#C9E7F5","paddingRight":"30px","paddingLeft":"10px"}},"sizesWrapper":{"default":{"color":"","backgroundColor":""}},"sizesInput":{"default":{"color":"var(--common-white08)","borderLeft":"1px solid var(--common-white08)","borderTop":"1px solid var(--common-white08)","borderRight":"1px solid var(--common-white08)","borderBottom":"1px solid var(--common-white08)"},"hover":{"borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"jumpWrapper":{"default":{"color":"var(--common-white08)"}},"jumpInput":{"default":{"color":"var(--common-white08)"},"hover":{"color":"var(--common-white1)","borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"sizesDropdownWrapper":{"default":{"backgroundColor":"var(--theme-dialog-bg)","color":"","borderLeft":"1px solid var(--theme-input-border)","borderTop":"1px solid var(--theme-input-border)","borderRight":"1px solid var(--theme-input-border)","borderBottom":"1px solid var(--theme-input-border)"}},"sizesDropdownItem":{"default":{"color":"var(--common-white08)"},"active":{"backgroundColor":"var(--theme-btn-default)","color":"var(--common-white1)"},"hover":{"color":"var(--common-white1)","backgroundColor":"var(--theme-table-zebra-crossing)"}}}, 
 },
},
tTablex0x6: {
defaultStyle: {
            default: {"width":"410px","height":"736px","backgroundColor":"rgba(24, 37, 64, 0)","position":"unset","left":"20px","top":"109px","marginTop":"0px","marginBottom":"2px","fontWeight":"400","animationName":""},
            
            },
 default: { 
 
height:338,
stripe:false,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","type":"default","key":"icon","stateKey":"","width":"40PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2023-01-05/95d04d0c780c4e8186c44fb450ba8fe5.png","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal"}}},{"label":"街道","type":"default","key":"TOWN","stateKey":"","width":"0PX","minWidth":"80PX","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"fontStyle":{"margin":"0 2px","fontSize":"14PX","padding":""}}},{"label":"类型","type":"default","key":"CASETYPE","stateKey":"phaseValue","width":"0PX","minWidth":"80PX","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"fontStyle":{"margin":"0 2px","fontSize":"14PX","color":"#fff"}}},{"label":"拍照时间","type":"default","key":"FILETIME","stateKey":"phaseValue","width":"150PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"fontStyle":{"margin":"0 2px","fontSize":"14PX","color":"#fff"}}}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"736px","backgroundColor":"rgba(24, 37, 64, 0)","position":"unset","left":"20px","top":"109px","marginTop":"0px","marginBottom":"2px","fontWeight":"400","animationName":""}},"headerCell":{"default":{"borderLeft":"1px solid rgba(20, 112, 204, 0)","borderRight":"0px solid ","borderTop":"0px solid ","borderBottom":"0px solid","color":"#fff","width":"418px","height":"34px","backgroundColor":"rgba(20, 112, 204, 0.3)","fontSize":"14px","fontWeight":"400","paddingTop":"4px","paddingBottom":"4px","marginBottom":"0px"}},"bodyCell":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.1)","borderBottom":"2px solid rgba(112,41,221,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"rgba(255, 255, 255, 1)","paddingTop":"0px","paddingBottom":"0px","height":"33.6px"},"hover":{"backgroundColor":"var(--business-table-header-bg)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(0, 59, 132, 0)","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"},"hover":{"backgroundColor":"var(--business-table-even-row-bg)"}},"stripeBodyRow":{"hover":{"backgroundColor":"var(--business-table-even-row-bg)"},"default":{"backgroundColor":"var(--business-table-even-row-bg)"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-table-even-row-bg)","color":"#fff","borderLeft":"1px solid #133387","borderTop":"1px solid #133387","borderRight":"1px solid #133387","borderBottom":"1px solid #133387","height":"auto"}},"highlightRow":{"default":{"backgroundColor":"var(--business-table-even-row-bg)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-table-header-bg)"},"default":{"height":"33.6px"}}}, 
 },
},
});
const setTime = (data) => {
state.timeData = data;
state.START_TIME = data[0];
state.END_TIME = data[1];
getListData();
};
const init = () => {
const initData = async () => {
  await getTime();
  await getListData();
  sendMsg(true);
}
initData();
};
const addTab = (clm,row) => {
console.log(row, clm, '单元格点击');
if (clm.label === '定位') {
  const data = [row.LON, row.LAT];
  goPosition(data);
}
};
const goPosition = (data) => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: "goPosition", // 消息名称
  data: {
    data: data,
  }, // 发送的数据
});
};
const sendMsg = (show) => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: "aerialMsg", // 消息名称
  data: {
    show,
    START_TIME: state.START_TIME,
    END_TIME: state.END_TIME,
  }, // 发送的数据
});
};
const ondateChange1758013923841 = (data) => {
// 执行自定义方法
setTime(data);
};
const onclick1758016983366 = () => {
// 执行自定义方法
removePoint();
// 设置变量值
state.checkShow = false;
// 设置变量值
state.heightShow = false;
// 设置变量值
state.selectIds = [];
// 设置变量值
state.selectId = '';
// 设置变量值
state.selectData = [];
// 事件交互-请求调用接口
getListData().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const oninput1758017409133 = (value) => {
// 设置变量值
state.UAV_TASK_NAME = value;
};
const oncurrentChange1758181820293_0_0 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
// 执行自定义方法
removePoint();
};
const oncellClick1758623930485 = (row,column,cell,event) => {
// 执行自定义方法
addTab(column,row);
};
// 接口函数
const getTime = (time) => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"4432b10905d0a66cac2fbd7961d704ce"},}).then((res) => {
     // 成功的操作
     const { data } = res;
state.timeData = [];
state.START_TIME = '';
state.END_TIME = '';
if (data?.head?.statusCode === '200' && data?.data) {
  console.log(data);
  state.timeData = [data.data.START_TIME, data.data.END_TIME];
  state.START_TIME = data.data.START_TIME;
  state.END_TIME = data.data.END_TIME;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getListData = (time) => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"time":time,"pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"START_TIME":state.START_TIME,"END_TIME":state.END_TIME,"interfaceId":"bbdb2641db536dc28b240c247f4c3c10"},}).then((res) => {
     // 成功的操作
     // 清空数据
state.listData = [];

const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  state.pageInfo.total = data.head.pageInfo.total;
  state.pageInfo.pages = data.head.pageInfo.pages;
  state.listData = data.data;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [state.pageInfo.pageSize,state.pageInfo.pageNum], () => {
getListData("");
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-aerialData', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
init();
onUnmounted(() => {
// 页面离开时的操作
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
// 执行自定义方法
sendMsg(false);
});
onMounted(() => {
setPageScale('t-l-c-aerialData', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tDatePickerx0x4ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x4.default, componentState.tDatePickerx0x4?.[state.screenSize]));

 const tPaginationBasex0x5ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x5.default, componentState.tPaginationBasex0x5?.[state.screenSize]));

 const tTablex0x6ComputedData = computed(() => _.merge({}, componentState.tTablex0x6.default, componentState.tTablex0x6?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tComponentx0x0ComputedData,
tTextx0x1ComputedData,
tDatePickerx0x4ComputedData,
tPaginationBasex0x5ComputedData,
tTablex0x6ComputedData,
ondateChange1758013923841,
oncurrentChange1758181820293_0_0,
oncellClick1758623930485,
};
},
}
</script>

<style scoped>
.t-l-c-aerialData {
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
width: 450px;
height: 900px;
background-color: rgba(0,0,0,0);
}
.t-l-c-aerialData .aerialData-t-component-0-0 {
position: absolute !important;
top: 20px;
left: 20px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-aerialData .aerialData-t-text-0-1 {
position: absolute !important;
top: 26px;
left: 54px;
width: 200px;
height: 20px;
pointer-events: auto;
}

.t-l-c-aerialData .aerialData-t-date-picker-0-4 {
position: absolute !important;
top: 65px;
left: 20px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-aerialData .aerialData-t-pagination-base-0-5 {
position: absolute !important;
top: 860px;
left: 25px;
width: 410px;
height: 38px;
pointer-events: auto;
}

.t-l-c-aerialData .aerialData-t-table-0-6 {
position: absolute !important;
top: 109px;
left: 20px;
width: 410px;
height: 736px;
pointer-events: auto;
}
</style>
