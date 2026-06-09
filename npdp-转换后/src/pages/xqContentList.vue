<template>
  <div id="t-l-c-xqContentList" class="t-l-c-xqContentList" ><t-search id="t-search-c865.89b8b1ef6" class="xqContentList-t-search-0-0"  :type="tSearchx0x0ComputedData.type" :input-value="replaceCssVariables(filterData(state.keyWord, componentPropBindingMap?.['t-search-c865.89b8b1ef6']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tSearchx0x0ComputedData.maxlength" :minlength="tSearchx0x0ComputedData.minlength" :show-word-limit="tSearchx0x0ComputedData.showWordLimit" :placeholder="tSearchx0x0ComputedData.placeholder" :clearable="tSearchx0x0ComputedData.clearable" :show-password="tSearchx0x0ComputedData.showPassword" :disabled="tSearchx0x0ComputedData.disabled" :prefix-icon="tSearchx0x0ComputedData.prefix-icon" :suffix-icon="tSearchx0x0ComputedData.suffix-icon" :rows="tSearchx0x0ComputedData.rows" :autosize="tSearchx0x0ComputedData.autosize" :name="tSearchx0x0ComputedData.name" :readonly="tSearchx0x0ComputedData.readonly" :step="tSearchx0x0ComputedData.step" :autofocus="tSearchx0x0ComputedData.autofocus" :form="tSearchx0x0ComputedData.form" :label="tSearchx0x0ComputedData.label" :tabindex="tSearchx0x0ComputedData.tabindex" :validate-event="tSearchx0x0ComputedData.validateEvent" :c-style="tSearchx0x0ComputedData.cStyle" :has-search-btn="tSearchx0x0ComputedData.hasSearchBtn" @change="onchange1767749197586" @clear="onclear1767749223766"></t-search><t-pagination-base v-if="state.pageInfo.pages !== '0'" id="t-pagination-base-cba2.7821ebb8f" class="xqContentList-t-pagination-base-0-1"  :total="replaceCssVariables(filterData(state.pageInfo.total, componentPropBindingMap?.['t-pagination-base-cba2.7821ebb8f']['total'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x1ComputedData.small" :page-size="replaceCssVariables(filterData(state.pageInfo.pageSize, componentPropBindingMap?.['t-pagination-base-cba2.7821ebb8f']['pageSize'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :pager-count="replaceCssVariables(filterData(state.pageInfo.pages, componentPropBindingMap?.['t-pagination-base-cba2.7821ebb8f']['pagerCount'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :current-page="replaceCssVariables(filterData(state.pageInfo.pageNum, componentPropBindingMap?.['t-pagination-base-cba2.7821ebb8f']['currentPage'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x1ComputedData.layout" :page-sizes="tPaginationBasex0x1ComputedData.pageSizes" :disabled="tPaginationBasex0x1ComputedData.disabled" :c-style="tPaginationBasex0x1ComputedData.cStyle" @current-change="oncurrentChange1768215500194_0_0"></t-pagination-base><t-button id="t-button-be39.18d7f76b" class="xqContentList-t-button-0-2"  :label="tButtonx0x2ComputedData.label" :round="tButtonx0x2ComputedData.round" :plain="tButtonx0x2ComputedData.plain" :disabled="tButtonx0x2ComputedData.disabled" :type="tButtonx0x2ComputedData.type" :size="tButtonx0x2ComputedData.size" :native-type="tButtonx0x2ComputedData.native-type" :c-style="tButtonx0x2ComputedData.cStyle" @click="onclick1767749484738"></t-button><t-table id="t-table-80e0.6d181a57a" class="xqContentList-t-table-0-3"  :height="tTablex0x3ComputedData.height" :stripe="tTablex0x3ComputedData.stripe" :border="tTablex0x3ComputedData.border" :auto-scroll="tTablex0x3ComputedData.autoScroll" :speed="tTablex0x3ComputedData.speed" :columns="tTablex0x3ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-80e0.6d181a57a']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x3ComputedData.defaultSort" :c-style="tTablex0x3ComputedData.cStyle" @cell-click="oncellClick1765355235045"></t-table></div>
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
import { TButton, TPaginationBase, TSearch, TTable } from '@ths/design';

export default {
  components: {
    TButton,
    TPaginationBase,
    TSearch,
    TTable,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-search-c865.89b8b1ef6":{"attributeName":"tSearchx0x0","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]},"hasSearchBtn":{"filters":[]}},"t-pagination-base-cba2.7821ebb8f":{"attributeName":"tPaginationBasex0x1","total":{"filters":[]},"small":{"filters":[]},"pageSize":{"filters":[]},"pagerCount":{"filters":[]},"currentPage":{"filters":[]},"layout":{"filters":[]},"pageSizes":{"filters":[]},"disabled":{"filters":[]},"cStyle":{"filters":[]}},"t-button-be39.18d7f76b":{"attributeName":"tButtonx0x2","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-table-80e0.6d181a57a":{"attributeName":"tTablex0x3","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}}};
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
   keyWord: "",
   listData: [],
   pageInfo: {"pageNum":1,"pageSize":15,"total":0,"pages":0},
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
tSearchx0x0: {
defaultStyle: {
            default: {"width":"350px","height":"33px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--t-white)","animationName":"","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
type:"text",
inputValue:"",
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入关键字",
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
cStyle:{"wrapper":{"default":{"width":"350px","height":"33px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--t-white)","animationName":"","position":"unset","left":"0px","top":"0px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--t-white)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"prefix":{"default":{"color":"var(--t-gray5)"}}},
hasSearchBtn:false, 
 },
},
tPaginationBasex0x1: {
defaultStyle: {
            default: {"width":"410px","height":"38px","position":"unset","left":"0px","top":"787px","color":"","animationName":"","display":"flex","justifyContent":"space-between"},
            
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
cStyle:{"wrapper":{"default":{"width":"410px","height":"38px","position":"unset","left":"0px","top":"787px","color":"","animationName":"","display":"flex","justifyContent":"space-between"}},"pagerItem":{"default":{"color":"#fff","fontSize":"14px","lineHeight":"32px","borderLeft":"1px solid #366B92","borderTop":"1px solid #366B92","borderRight":"1px solid #366B92","borderBottom":"1px solid #366B92","marginLeft":"0px","marginRight":"5px","backgroundColor":""},"active":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundColor":"rgba(255, 255, 255, 0)","color":"var(--common-white1)","backgroundImage":"linear-gradient(180deg,rgba(50, 169, 255, 0.8) 0%,rgba(61, 126, 255, 0.8) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"hover":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","color":"var(--common-white1)","backgroundImage":"linear-gradient(180deg,rgba(50, 169, 255, 0.8) 0.6246480855855856%,rgba(61, 126, 255, 0.8) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}},"pager":{"default":{"borderLeft":"1px none var(--theme-btn-default)","borderTop":"1px none var(--theme-btn-default)","borderRight":"1px none var(--theme-btn-default)","borderBottom":"1px none var(--theme-btn-default)","color":"#fff","marginLeft":"0px","marginRight":"0px","backgroundColor":"#1B4293"},"hover":{"color":"var(--common-white1)","borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundImage":"linear-gradient(180deg,rgba(50, 169, 255, 0.8) 0%,rgba(61, 126, 255, 0.8) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}},"more":{"default":{"color":"#C9E7F5"},"hover":{"color":"#366B92","backgroundColor":""}},"total":{"default":{"color":"#C9E7F5","paddingRight":"30px","paddingLeft":"10px"}},"sizesWrapper":{"default":{"color":"","backgroundColor":""}},"sizesInput":{"default":{"color":"var(--common-white08)","borderLeft":"1px solid var(--common-white08)","borderTop":"1px solid var(--common-white08)","borderRight":"1px solid var(--common-white08)","borderBottom":"1px solid var(--common-white08)"},"hover":{"borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"jumpWrapper":{"default":{"color":"var(--common-white08)"}},"jumpInput":{"default":{"color":"var(--common-white08)"},"hover":{"color":"var(--common-white1)","borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"sizesDropdownWrapper":{"default":{"backgroundColor":"var(--theme-dialog-bg)","color":"","borderLeft":"1px solid var(--theme-input-border)","borderTop":"1px solid var(--theme-input-border)","borderRight":"1px solid var(--theme-input-border)","borderBottom":"1px solid var(--theme-input-border)"}},"sizesDropdownItem":{"default":{"color":"var(--common-white08)"},"active":{"backgroundColor":"var(--theme-btn-default)","color":"var(--common-white1)"},"hover":{"color":"var(--common-white1)","backgroundColor":"var(--theme-table-zebra-crossing)"}}}, 
 },
},
tButtonx0x2: {
defaultStyle: {
            default: {"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","position":"unset","left":"360px","top":"0px"},
            
            },
 default: { 
 
label:"搜索",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","position":"unset","left":"360px","top":"0px"},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tTablex0x3: {
defaultStyle: {
            default: {"width":"410px","height":"712px","position":"unset","left":"-1px","top":"49px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"780px",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"50px","type":"default","stateKey":"iconStatus"},{"label":"名称","type":"default","key":"POINT_NAME","stateKey":"","width":"auto","minWidth":"","align":"left","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}}},{"label":"操作","type":"operation","key":"opt","stateKey":"","width":"80px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"rgba(255, 255, 255, 1)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"var(--business-unit-icon)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"fixed":"right","operationList":[{"name":"调度","id":"opt","fontStyle":{"color":"var(--business-theme)"}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"712px","position":"unset","left":"-1px","top":"49px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
});
const goToLocation = (column,row) => {
if (["定位"].includes(column.label)) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: "gotoPoint",
    data: {
      "longitude": row.LONGITUDE,
      "latitude": row.LATITUDE,
    }
  });
} else if (column.label === '操作') {
  // 之前的查看按钮的点击逻辑，现在变成静态调度按钮

  // rootData.rootSocket.emit('message', {
  //   room: global.socketRoom, // 房间号
  //   type: "gotoPoint", // 消息名称
  //   data: {
  //     longitude: row.LONGITUDE,
  //     latitude: row.LATITUDE,
  //   }
  // });

  // rootData.rootSocket.emit('message', {
  //   room: global.socketRoom, // 房间号
  //   type: "featureClicked", // 消息名称
  //   data: {
  //     "layerId": "小区",
  //     "feature": {
  //       "type": "Feature",
  //       "properties": row,
  //       "geometry": {
  //         "type": "Point",
  //         "coordinates": [
  //           row.LONGITUDE,
  //           row.LATITUDE
  //         ]
  //       }
  //     }
  //   }
  // });
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
  .t-l-c-xqContentList .xqContentList-t-table-0-0 {
    position: unset !important;
  }
`;

// 插入到 <head> 末尾
document.head.appendChild(style);
};
const sendUpdateParamsMsgMap = (type,visible) => {
// rootData.rootSocket.emit(
//   'message',  // 固定的消息名称，不能修改
//   {
//     room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
//     type: 'updateHireStatus',  // 消息类型名称
//     data: {
//       type: type || '',
//       queryParams: {
//         distance: state.distanceUnit,
//         queryField: state.keywordFieldName,
//         keyword: state.keywords,
//         topicCode: state.topicCode,
//         locationField: 'location',
//         useGisShape: false,
//         pointValue: state.pointValue,
//         gisType: 'geo_distance',
//         REGION_CODE: '',
//         tagJson: state.tagJson,
//         hasGather: false,
//         HasAllTag: true,
//         ENTITY_CODE: state.entityCode,
//         pageSize: 2000,
//         pageNum: 1
//       },
//       visible,
//     }
//   }
// );
// console.log('发送了updateHireStatus消息')
};
const removePoint = () => {

rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: "removePoint", // 消息名称
  data: {
    show: false,
    pointData: state.selectIds.length > 0 ? state.selectIds : state.removeData,
  },
});
console.log(state.selectIds,state.removeData,'移出的点位数据');
state.checkShow = false;
state.heightShow = false;
state.checkData = [];
state.heightData = [];
state.selectIds = [];
state.show = true;
state.pointData = [];
state.selectId = "";
state.selectData = [];
state.removeData = [];
};
const oncellClick1765355235045 = (row,column,cell,event) => {
// 执行自定义方法
goToLocation(column,row);
};
const onchange1767749197586 = (value) => {
// 设置变量值
state.keyWord = value;
};
const onclear1767749223766 = () => {
// 事件交互-请求调用接口
apiRegistry.getListData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "clearGotoPoint", // 消息名称
data: {}, // 发送的数据
});
};
const onclick1767749484738 = () => {
// 事件交互-请求调用接口
apiRegistry.getListData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "clearGotoPoint", // 消息名称
data: {}, // 发送的数据
});
};
const oncurrentChange1758181820293_0_0 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
// 执行自定义方法
removePoint();
};
const oncurrentChange1768215500194_0_0 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
// 事件交互-请求调用接口
apiRegistry.getListData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
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
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"pageNum":"state.pageInfo.pageNum","pageSize":"state.pageInfo.pageSize","POINT_NAME":"state.keyWord","POINT_TYPE":"小区","REGION_PATH":"global.regionaQuery.regionCode","interfaceId":"de42e53732ad6e7ead2b521c79868b47"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"pageNum":state.pageInfo.pageNum,"pageSize":state.pageInfo.pageSize,"POINT_NAME":state.keyWord,"POINT_TYPE":"小区","REGION_PATH":global.regionaQuery.regionCode,"interfaceId":"de42e53732ad6e7ead2b521c79868b47"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"pageNum":state.pageInfo.pageNum,"pageSize":state.pageInfo.pageSize,"POINT_NAME":state.keyWord,"POINT_TYPE":"小区","REGION_PATH":global.regionaQuery.regionCode,"interfaceId":"de42e53732ad6e7ead2b521c79868b47"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.pageInfo.total = head.pageInfo.total
  state.listData = data.map(item =>{
    return{
      ...item,
      "opt": "opt"
    }
  })
}else{
  state.listData = []
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
};
 function handleWindowResize() {
                            setPageScale('t-l-c-xqContentList', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-xqContentList', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setCss();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tSearchx0x0ComputedData = computed(() => _.merge({}, componentState.tSearchx0x0.default, componentState.tSearchx0x0?.[state.screenSize]));

 const tPaginationBasex0x1ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x1.default, componentState.tPaginationBasex0x1?.[state.screenSize]));

 const tButtonx0x2ComputedData = computed(() => _.merge({}, componentState.tButtonx0x2.default, componentState.tButtonx0x2?.[state.screenSize]));

 const tTablex0x3ComputedData = computed(() => _.merge({}, componentState.tTablex0x3.default, componentState.tTablex0x3?.[state.screenSize]));

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
tSearchx0x0ComputedData,
tPaginationBasex0x1ComputedData,
tButtonx0x2ComputedData,
tTablex0x3ComputedData,
onchange1767749197586,
onclear1767749223766,
oncurrentChange1768215500194_0_0,
onclick1767749484738,
oncellClick1765355235045,
};
},
}
</script>

<style scoped>
.t-l-c-xqContentList {
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
height: auto;
width: 410px;
background-color: rgba(0,0,0,0);
}
.t-l-c-xqContentList .xqContentList-t-search-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 350px;
height: 33px;
pointer-events: auto;
}

.t-l-c-xqContentList .xqContentList-t-pagination-base-0-1 {
position: absolute !important;
top: 787px;
left: 0px;
width: 410px;
height: 38px;
pointer-events: auto;
}

.t-l-c-xqContentList .xqContentList-t-button-0-2 {
position: absolute !important;
top: 0px;
left: 360px;
width: 50px;
height: 32px;
pointer-events: auto;
}

.t-l-c-xqContentList .xqContentList-t-table-0-3 {
position: absolute !important;
top: 49px;
left: -1px;
width: 410px;
height: 712px;
pointer-events: auto;
}
</style>
