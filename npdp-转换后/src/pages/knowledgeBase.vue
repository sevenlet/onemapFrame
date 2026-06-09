<template>
  <div id="t-l-c-knowledgeBase" class="t-l-c-knowledgeBase" ><t-rect id="t-rect-8252.1a4ade4f4" class="knowledgeBase-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-row id="t-row-d64c.6831c919e" class="knowledgeBase-t-row-0-3"  :c-style="tRowx0x3ComputedData.cStyle" :gutter="tRowx0x3ComputedData.gutter" :justify="tRowx0x3ComputedData.justify" :align="tRowx0x3ComputedData.align"><t-col id="t-col-3735.33fbf05e" class="knowledgeBase-t-col-0-3-0"  :span="tColx0x3x0ComputedData.span" :offset="tColx0x3x0ComputedData.offset" :push="tColx0x3x0ComputedData.push" :pull="tColx0x3x0ComputedData.pull" :c-style="tColx0x3x0ComputedData.cStyle"><t-row id="t-row-cd67.a9d30cec5" class="knowledgeBase-t-row-0-3-0-0"  :c-style="tRowx0x3x0x0ComputedData.cStyle" :gutter="tRowx0x3x0x0ComputedData.gutter" :justify="tRowx0x3x0x0ComputedData.justify" :align="tRowx0x3x0x0ComputedData.align"><t-col id="t-col-e810.ab81ec25e" class="knowledgeBase-t-col-0-3-0-0-0"  :span="tColx0x3x0x0x0ComputedData.span" :offset="tColx0x3x0x0x0ComputedData.offset" :push="tColx0x3x0x0x0ComputedData.push" :pull="tColx0x3x0x0x0ComputedData.pull" :c-style="tColx0x3x0x0x0ComputedData.cStyle"><t-search id="t-search-8c5a.842880c" class="knowledgeBase-t-search-0-3-0-0-0-0"  :type="tSearchx0x3x0x0x0x0ComputedData.type" :input-value="tSearchx0x3x0x0x0x0ComputedData.inputValue" :maxlength="tSearchx0x3x0x0x0x0ComputedData.maxlength" :minlength="tSearchx0x3x0x0x0x0ComputedData.minlength" :show-word-limit="tSearchx0x3x0x0x0x0ComputedData.showWordLimit" :placeholder="tSearchx0x3x0x0x0x0ComputedData.placeholder" :clearable="tSearchx0x3x0x0x0x0ComputedData.clearable" :show-password="tSearchx0x3x0x0x0x0ComputedData.showPassword" :disabled="tSearchx0x3x0x0x0x0ComputedData.disabled" :prefix-icon="tSearchx0x3x0x0x0x0ComputedData.prefix-icon" :suffix-icon="tSearchx0x3x0x0x0x0ComputedData.suffix-icon" :rows="tSearchx0x3x0x0x0x0ComputedData.rows" :autosize="tSearchx0x3x0x0x0x0ComputedData.autosize" :name="tSearchx0x3x0x0x0x0ComputedData.name" :readonly="tSearchx0x3x0x0x0x0ComputedData.readonly" :step="tSearchx0x3x0x0x0x0ComputedData.step" :autofocus="tSearchx0x3x0x0x0x0ComputedData.autofocus" :form="tSearchx0x3x0x0x0x0ComputedData.form" :label="tSearchx0x3x0x0x0x0ComputedData.label" :tabindex="tSearchx0x3x0x0x0x0ComputedData.tabindex" :validate-event="tSearchx0x3x0x0x0x0ComputedData.validateEvent" :c-style="tSearchx0x3x0x0x0x0ComputedData.cStyle" :has-search-btn="tSearchx0x3x0x0x0x0ComputedData.hasSearchBtn" @change="onchange1770025930008"></t-search><t-button id="t-button-a332.41bfcfcb6" class="knowledgeBase-t-button-0-3-0-0-0-1"  :label="tButtonx0x3x0x0x0x1ComputedData.label" :round="tButtonx0x3x0x0x0x1ComputedData.round" :plain="tButtonx0x3x0x0x0x1ComputedData.plain" :disabled="tButtonx0x3x0x0x0x1ComputedData.disabled" :type="tButtonx0x3x0x0x0x1ComputedData.type" :size="tButtonx0x3x0x0x0x1ComputedData.size" :native-type="tButtonx0x3x0x0x0x1ComputedData.native-type" :c-style="tButtonx0x3x0x0x0x1ComputedData.cStyle" @click="onclick1770025946584"></t-button></t-col><t-col id="t-col-d39b.70332d8b4" class="knowledgeBase-t-col-0-3-0-0-1"  :span="tColx0x3x0x0x1ComputedData.span" :offset="tColx0x3x0x0x1ComputedData.offset" :push="tColx0x3x0x0x1ComputedData.push" :pull="tColx0x3x0x0x1ComputedData.pull" :c-style="tColx0x3x0x0x1ComputedData.cStyle"><t-upload-button id="t-upload-button-e586.7dc9584c6" class="knowledgeBase-t-upload-button-0-3-0-0-1-0"  :label="tUploadButtonx0x3x0x0x1x0ComputedData.label" :is-multiple="tUploadButtonx0x3x0x0x1x0ComputedData.isMultiple" :is-limit="tUploadButtonx0x3x0x0x1x0ComputedData.isLimit" :file-type="tUploadButtonx0x3x0x0x1x0ComputedData.fileType" :c-style="tUploadButtonx0x3x0x0x1x0ComputedData.cStyle" :upload-url="tUploadButtonx0x3x0x0x1x0ComputedData.uploadUrl" :params="replaceCssVariables(filterData(state.uploadFileParams, componentPropBindingMap?.['t-upload-button-e586.7dc9584c6']['params'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @success="onsuccess1770021190243" @error="onerror1770083836778"></t-upload-button><t-button id="t-button-131c.0baf3003c" class="knowledgeBase-t-button-0-3-0-0-1-1"  :label="tButtonx0x3x0x0x1x1ComputedData.label" :round="tButtonx0x3x0x0x1x1ComputedData.round" :plain="tButtonx0x3x0x0x1x1ComputedData.plain" :disabled="tButtonx0x3x0x0x1x1ComputedData.disabled" :type="tButtonx0x3x0x0x1x1ComputedData.type" :size="tButtonx0x3x0x0x1x1ComputedData.size" :native-type="tButtonx0x3x0x0x1x1ComputedData.native-type" :c-style="tButtonx0x3x0x0x1x1ComputedData.cStyle" @click="onclick1770030381616"></t-button></t-col></t-row></t-col><t-col id="t-col-64f9.f4ee82444" class="knowledgeBase-t-col-0-3-1"  :span="tColx0x3x1ComputedData.span" :offset="tColx0x3x1ComputedData.offset" :push="tColx0x3x1ComputedData.push" :pull="tColx0x3x1ComputedData.pull" :c-style="tColx0x3x1ComputedData.cStyle"><t-component id="t-component-583a.7de5da7f1" class="knowledgeBase-t-component-0-3-1-0"  :name="tComponentx0x3x1x0ComputedData.name" :loading="tComponentx0x3x1x0ComputedData.loading" :c-style="tComponentx0x3x1x0ComputedData.cStyle" :src="tComponentx0x3x1x0ComputedData.src" :component-name="tComponentx0x3x1x0ComputedData.componentName" :page-id="tComponentx0x3x1x0ComputedData.pageId" :page-code="tComponentx0x3x1x0ComputedData.pageCode"></t-component></t-col><t-col id="t-col-c431.ce7840f0a" class="knowledgeBase-t-col-0-3-2"  :span="tColx0x3x2ComputedData.span" :offset="tColx0x3x2ComputedData.offset" :push="tColx0x3x2ComputedData.push" :pull="tColx0x3x2ComputedData.pull" :c-style="tColx0x3x2ComputedData.cStyle"><t-pagination-base id="t-pagination-base-812b.c5dd4f5e1" class="knowledgeBase-t-pagination-base-0-3-2-0"  :total="replaceCssVariables(filterData(state.total, componentPropBindingMap?.['t-pagination-base-812b.c5dd4f5e1']['total'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x3x2x0ComputedData.small" :page-size="replaceCssVariables(filterData(state.pageSize, componentPropBindingMap?.['t-pagination-base-812b.c5dd4f5e1']['pageSize'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :pager-count="tPaginationBasex0x3x2x0ComputedData.pagerCount" :current-page="replaceCssVariables(filterData(state.pageNum, componentPropBindingMap?.['t-pagination-base-812b.c5dd4f5e1']['currentPage'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x3x2x0ComputedData.layout" :page-sizes="tPaginationBasex0x3x2x0ComputedData.pageSizes" :disabled="tPaginationBasex0x3x2x0ComputedData.disabled" :c-style="tPaginationBasex0x3x2x0ComputedData.cStyle" @current-change="oncurrentChange1770026518407" @size-change="onsizeChange1770026541208"></t-pagination-base></t-col></t-row></div>
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
import { TButton, TCol, TComponent, TPaginationBase, TRect, TRow, TSearch, TUploadButton } from '@ths/design';

export default {
  components: {
    TButton,
    TCol,
    TComponent,
    TPaginationBase,
    TRect,
    TRow,
    TSearch,
    TUploadButton,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-8252.1a4ade4f4":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-80a1.6ba14e8ee":{"attributeName":"tImageBasex0x1"},"t-image-base-e6e9.7376c3e5e":{"attributeName":"tImageBasex0x2"},"t-row-d64c.6831c919e":{"attributeName":"tRowx0x3","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-3735.33fbf05e":{"attributeName":"tColx0x3x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-row-cd67.a9d30cec5":{"attributeName":"tRowx0x3x0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-e810.ab81ec25e":{"attributeName":"tColx0x3x0x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-search-8c5a.842880c":{"attributeName":"tSearchx0x3x0x0x0x0","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]},"hasSearchBtn":{"filters":[]}},"t-button-a332.41bfcfcb6":{"attributeName":"tButtonx0x3x0x0x0x1","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-col-d39b.70332d8b4":{"attributeName":"tColx0x3x0x0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-upload-button-e586.7dc9584c6":{"attributeName":"tUploadButtonx0x3x0x0x1x0","label":{"filters":[]},"isMultiple":{"filters":[]},"isLimit":{"filters":[]},"fileType":{"filters":[]},"cStyle":{"filters":[]},"uploadUrl":{"filters":[]},"params":{"filters":[]}},"t-button-131c.0baf3003c":{"attributeName":"tButtonx0x3x0x0x1x1","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-col-64f9.f4ee82444":{"attributeName":"tColx0x3x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-583a.7de5da7f1":{"attributeName":"tComponentx0x3x1x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-col-c431.ce7840f0a":{"attributeName":"tColx0x3x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-pagination-base-812b.c5dd4f5e1":{"attributeName":"tPaginationBasex0x3x2x0","total":{"filters":[]},"small":{"filters":[]},"pageSize":{"filters":[]},"pagerCount":{"filters":[]},"currentPage":{"filters":[]},"layout":{"filters":[]},"pageSizes":{"filters":[]},"disabled":{"filters":[]},"cStyle":{"filters":[]}}};
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
   pointCode: "",
   time: "",
   selectId: "",
   file_name: "",
   uploadFileParams: {"businessKey":"knowledgeBase","subBusinessKey":"test20260202","createUser":""},
   fileName: "",
   total: 0,
   pageNum: 1,
   pageSize: 15,
   tableData: [],
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
            default: {"width":"100%","height":"100%","position":"unset","left":"0px","top":"0px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px Solid rgba(0,0,0,1)","borderTop":"1px Solid rgba(0,0,0,1)","borderRight":"1px Solid rgba(0,0,0,1)","borderBottom":"1px Solid rgba(0,0,0,1)","animationName":"","borderDirection":"all","border":"unset !important"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","position":"unset","left":"0px","top":"0px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px Solid rgba(0,0,0,1)","borderTop":"1px Solid rgba(0,0,0,1)","borderRight":"1px Solid rgba(0,0,0,1)","borderBottom":"1px Solid rgba(0,0,0,1)","animationName":"","borderDirection":"all","border":"unset !important"}}}, 
 },
},
tRowx0x3: {
defaultStyle: {
            default: {"width":"100%","height":"100%","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","display":"flex","justifyContent":"left","alignItems":"start","position":"unset","left":"0px","top":"0px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x3x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"left","alignItems":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"left","alignItems":"center"}}}, 
 },
},
tRowx0x3x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"-64px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"-64px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x3x0x0x0: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:20,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tSearchx0x3x0x0x0x0: {
defaultStyle: {
            default: {"width":"797px","height":"auto","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","min-height":"32px","fontSize":"var(--business-text-size-14)"},
            
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
cStyle:{"wrapper":{"default":{"width":"797px","height":"auto","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","min-height":"32px","fontSize":"var(--business-text-size-14)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)"}},"prefix":{"default":{"color":"var(--business-text-avianize)"}}},
hasSearchBtn:false, 
 },
},
tButtonx0x3x0x0x0x1: {
defaultStyle: {
            default: {"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","color":"var(--t-white)","marginLeft":"14px"},
            
            },
 default: { 
 
label:"搜索",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","color":"var(--t-white)","marginLeft":"14px"},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tColx0x3x0x0x1: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"},
            
            },
 default: { 
 
span:4,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tUploadButtonx0x3x0x0x1x0: {
defaultStyle: {
            default: {"width":"80px","height":"32px","position":"unset","left":"868px","top":"0px","marginLeft":"14px"},
            
            },
 default: { 
 
label:"附件上传",
isMultiple:false,
isLimit:false,
fileType:"",
cStyle:{"wrapper":{"default":{"width":"80px","height":"32px","position":"unset","left":"868px","top":"0px","marginLeft":"14px"}},"buttonWrapper":{"default":{"fontFamily":"思源","fontSize":"var(--business-text-size-12)","letterSpacing":"0px","textAlign":"center","color":"var(--business-white)","background":"var(--t-upload-button-bg-color)","fillType":"color","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","justifyContent":"center","alignItems":"center","flexDirection":"column","display":"flex","backgroundColor":"rgba(50, 85, 232, 0)","paddingLeft":"16px","borderLeft":"1px solid var(--targer-btn-border)","borderTop":"1px solid var(--targer-btn-border)","borderRight":"1px solid var(--targer-btn-border)","borderBottom":"1px solid var(--targer-btn-border)"},"hover":{"background":"var(--t-upload-button-hover-bg-color)","fillType":"color","backgroundColor":"rgba(16, 49, 188, 0)","borderLeft":"1px solid var(--targer-btn-border)","borderTop":"1px solid var(--targer-btn-border)","borderRight":"1px solid var(--targer-btn-border)","borderBottom":"1px solid var(--targer-btn-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"backgroundColor":"rgba(38, 61, 160, 0)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--targer-btn-border)","borderTop":"1px solid var(--targer-btn-border)","borderRight":"1px solid var(--targer-btn-border)","borderBottom":"1px solid var(--targer-btn-border)"},"active":{"backgroundColor":"rgba(4, 26, 120, 0)","borderLeft":"1px solid var(--targer-btn-border)","borderTop":"1px solid var(--targer-btn-border)","borderRight":"1px solid var(--targer-btn-border)","borderBottom":"1px solid var(--targer-btn-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}}},
uploadUrl:"http://192.168.24.106:10157/waterevaluate/api/components/file/upload",
params:{"businessKey":"knowledgeBase","subBusinessKey":"test20260202","createUser":""}, 
 },
},
tButtonx0x3x0x0x1x1: {
defaultStyle: {
            default: {"width":"60px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"rgba(22, 58, 210, 0)","fontSize":"var(--business-text-size-12)","position":"unset","left":"959px","top":"0px","borderLeft":"1px solid var(--targer-btn-border)","borderTop":"1px solid var(--targer-btn-border)","borderRight":"1px solid var(--targer-btn-border)","borderBottom":"1px solid var(--targer-btn-border)","animationName":"","paddingLeft":"0px","marginLeft":"14px","color":"#FFF"},
            
            },
 default: { 
 
label:"删除",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"60px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"rgba(22, 58, 210, 0)","fontSize":"var(--business-text-size-12)","position":"unset","left":"959px","top":"0px","borderLeft":"1px solid var(--targer-btn-border)","borderTop":"1px solid var(--targer-btn-border)","borderRight":"1px solid var(--targer-btn-border)","borderBottom":"1px solid var(--targer-btn-border)","animationName":"","paddingLeft":"0px","marginLeft":"14px","color":"#FFF"},"hover":{"background":"var(--business-btn-default)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","color":"#FFF","textAlign":"center","backgroundColor":"rgba(22, 58, 210, 0)","borderLeft":"1px solid var(--targer-btn-border)","borderTop":"1px solid var(--targer-btn-border)","borderRight":"1px solid var(--targer-btn-border)","borderBottom":"1px solid var(--targer-btn-border)"},"active":{"background":"var(--business-btn-default)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","color":"#FFF","backgroundColor":"rgba(20, 59, 220, 0)","borderLeft":"1px solid var(--targer-btn-border)","borderTop":"1px solid var(--targer-btn-border)","borderRight":"1px solid var(--targer-btn-border)","borderBottom":"1px solid var(--targer-btn-border)"},"focus":{"background":"var(--business-btn-default)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","color":"#FFF","backgroundColor":"rgba(20, 59, 222, 0)","borderLeft":"1px solid var(--targer-btn-border)","borderTop":"1px solid var(--targer-btn-border)","borderRight":"1px solid var(--targer-btn-border)","borderBottom":"1px solid var(--targer-btn-border)"}},"text":{"default":{"textAlign":"center","color":"var(--business-warn)","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tColx0x3x1: {
defaultStyle: {
            default: {"width":"100%","height":"calc(100% - 106px)","display":"flex","justifyContent":"center","alignItems":"center","marginTop":"10px","marginBottom":"10px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"calc(100% - 106px)","display":"flex","justifyContent":"center","alignItems":"center","marginTop":"10px","marginBottom":"10px"}}}, 
 },
},
tComponentx0x3x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"100%","margin":"0 auto","position":"unset","left":"0px","top":"34px"},
            
            },
 default: { 
 
name:"knowledgeListComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","margin":"0 auto","position":"unset","left":"0px","top":"34px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/knowledgeList",
componentName:"knowledgeListComponent",
pageId:"ac33b70e8e6948818372f16b985be4c4",
pageCode:"knowledgeList", 
 },
},
tColx0x3x2: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","marginBottom":"10px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","marginBottom":"10px"}}}, 
 },
},
tPaginationBasex0x3x2x0: {
defaultStyle: {
            default: {"width":"100%","height":"40px","borderLeft":"0px none var(--business-show-bg60)","borderTop":"0px none var(--business-show-bg60)","borderRight":"0px none var(--business-show-bg60)","borderBottom":"0px none var(--business-show-bg60)","display":"flex","justifyContent":"flex-end","animationName":"","fontSize":"var(--business-text-size-14)"},
            
            },
 default: { 
 
total:0,
small:false,
pageSize:15,
pagerCount:5,
currentPage:1,
layout:" prev, pager, next,total",
pageSizes:[5,10,15,20,30,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"40px","borderLeft":"0px none var(--business-show-bg60)","borderTop":"0px none var(--business-show-bg60)","borderRight":"0px none var(--business-show-bg60)","borderBottom":"0px none var(--business-show-bg60)","display":"flex","justifyContent":"flex-end","animationName":"","fontSize":"var(--business-text-size-14)"}},"total":{"default":{"color":"var(--business-text-avianize)","position":"unset","right":"0px","left":"0px","width":"auto","fontSize":"var(--business-text-size-14)"}},"pagerItem":{"default":{"color":"var(--business-white)","backgroundColor":"var(--business-show-bg15)","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","cursor":"pointer","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-white)","background":"var(--business-btn-active)","borderLeft":"1px none rgba(255,13,0,1)","borderTop":"1px none rgba(255,13,0,1)","borderRight":"1px none rgba(255,13,0,1)","borderBottom":"1px none rgba(255,13,0,1)","pointerEvents":"auto","overflow":"visible","cursor":"pointer","fontSize":"var(--business-text-size-14)"},"active":{"color":"var(--business-white)","background":"var(--business-btn-active)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","fontSize":"var(--business-text-size-14)"}},"pager":{"default":{"color":"var(--business-white)","backgroundColor":"var(--business-show-bg15)","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-white)","background":"var(--business-btn-active)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","fontSize":"var(--business-text-size-12)"}},"more":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"fontSize":"var(--business-text-size-12)"}},"sizesWrapper":{"default":{"fontSize":"var(--business-text-size-14)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}},"sizesInput":{"default":{"fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"sizesDropdownWrapper":{"default":{"fontSize":"var(--business-text-size-14)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-dialog-bg)"}},"sizesDropdownItem":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)","backgroundColor":"rgba(26, 27, 31, 0)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"}},"jumpWrapper":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"jumpInput":{"default":{"fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
});
const initPageData = () => {
state.pointCode = global.businessDialog.dialogParmas?.pointCode || global.businessDialog.dialogParmas?.POINT_CODE
provide("state", state);
global.airGlobalVariables.currentPointInfo.pkid = 'test20260203';
state.uploadFileParams = {
  "businessKey": "knowledgeBase",
  "subBusinessKey": state.pointCode,
  "createUser": localStorage.getItem('lastUserName'),
}
state.time = Math.random();
apiRegistry.getListData.request();
};
const uploadFile = () => {
};
const uploadFileSuccess = (data) => {
state.fileName = data?.name;
  ElementPlus.ElMessage({
    message: '附件上传成功',
    type: 'success',
  });
state.time = Math.random();
apiRegistry.getListData.request();
};
const tabClick = () => {
};
const removeFile = () => {
const initData = async () => {
   if (state.selectId) {
      await apiRegistry.deleteData.request();
      state.time = Math.random();
      await apiRegistry.getListData.request();
      ElementPlus.ElMessage({
         message: '附件删除成功',
         type: 'success',
      });
   }
   state.selectId = '';
}

console.log(state.selectId,'test01')
if (!state.selectId) {
   ElementPlus.ElMessage({
      message: '请选择要删除的文件！',
      type: 'warning',
   });
   return;
}
initData();
};
const selectTab = (data) => {
  state.selectId = data[0]?.fileId || '';
  console.log(state.selectId,'test');
};
const getList = () => {
state.time = Math.random(); 
apiRegistry.getListData.request();
};
const uploadFileError = () => {
ElementPlus.ElMessage({
  message: '附件上传失败，请重试！',
  type: 'error',
});
};
const onchange1770025930008 = (value) => {
// 设置变量值
state.file_name = value;
};
const onclick1770025946584 = () => {
// 执行自定义方法
getList();
};
const onclick1770030381616 = () => {
// 执行自定义方法
removeFile();
};
const onsuccess1770021190243 = (response,file) => {
// 执行自定义方法
uploadFileSuccess(file);
};
const onerror1770083836778 = (error,file) => {
// 执行自定义方法
uploadFileError();
};
const oncurrentChange1770026518407 = (currentPage) => {
// 设置变量值
state.pageNum = currentPage;
// 执行自定义方法
getList();
};
const onsizeChange1770026541208 = (pageSize) => {
// 设置变量值
state.pageSize = pageSize;
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
 deleteData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"/waterevaluate/api/components/file/deleteOne","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"fileId\":\"state.selectId\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":"/waterevaluate/api/components/file/deleteOne","method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"fileId":state.selectId}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-/waterevaluate/api/components/file/deleteOne',  "qs.stringify({\"fileId\":\state.selectId\})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['deleteData'] = res.data;
                
     
console.log(res?.data.data, '表格数据');

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
              config: {"url":"/waterevaluate/api/components/file/pageList","method":"post","baseURL":"global.foshanServiceBaseUrl","data":{"time":"state.time","fileName":"state.file_name","pageNum":"state.pageNum","pageSize":"state.pageSize","subBusinessKey":"state.pointCode","businessKey":"state.uploadFileParams.businessKey"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":"/waterevaluate/api/components/file/pageList","method":"post","baseURL":global.foshanServiceBaseUrl,"data":{"time":state.time,"fileName":state.file_name,"pageNum":state.pageNum,"pageSize":state.pageSize,"subBusinessKey":state.pointCode,"businessKey":state.uploadFileParams.businessKey},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-/waterevaluate/api/components/file/pageList',  {"time":state.time,"fileName":state.file_name,"pageNum":state.pageNum,"pageSize":state.pageSize,"subBusinessKey":state.pointCode,"businessKey":state.uploadFileParams.businessKey});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     state.tableData = [];
state.tableData = res?.data.data.list || [];
state.total = res?.data.data.total;
console.log(state.tableData, '表格数据');

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableData = [];
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-knowledgeBase', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPageData();
/* 接收socket.io消息 */
const onSocketChange160da3bcc18c4bff80aa = function (data) {
if(data.type === "historyTaskTableSelectionChange"){
try{
// 执行自定义方法
selectTab(data.data.selected);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange160da3bcc18c4bff80aa);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange160da3bcc18c4bff80aa);
});
onMounted(() => {
setPageScale('t-l-c-knowledgeBase', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRowx0x3ComputedData = computed(() => _.merge({}, componentState.tRowx0x3.default, componentState.tRowx0x3?.[state.screenSize]));

 const tColx0x3x0ComputedData = computed(() => _.merge({}, componentState.tColx0x3x0.default, componentState.tColx0x3x0?.[state.screenSize]));

 const tRowx0x3x0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x3x0x0.default, componentState.tRowx0x3x0x0?.[state.screenSize]));

 const tColx0x3x0x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x3x0x0x0.default, componentState.tColx0x3x0x0x0?.[state.screenSize]));

 const tSearchx0x3x0x0x0x0ComputedData = computed(() => _.merge({}, componentState.tSearchx0x3x0x0x0x0.default, componentState.tSearchx0x3x0x0x0x0?.[state.screenSize]));

 const tButtonx0x3x0x0x0x1ComputedData = computed(() => _.merge({}, componentState.tButtonx0x3x0x0x0x1.default, componentState.tButtonx0x3x0x0x0x1?.[state.screenSize]));

 const tColx0x3x0x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x3x0x0x1.default, componentState.tColx0x3x0x0x1?.[state.screenSize]));

 const tUploadButtonx0x3x0x0x1x0ComputedData = computed(() => _.merge({}, componentState.tUploadButtonx0x3x0x0x1x0.default, componentState.tUploadButtonx0x3x0x0x1x0?.[state.screenSize]));

 const tButtonx0x3x0x0x1x1ComputedData = computed(() => _.merge({}, componentState.tButtonx0x3x0x0x1x1.default, componentState.tButtonx0x3x0x0x1x1?.[state.screenSize]));

 const tColx0x3x1ComputedData = computed(() => _.merge({}, componentState.tColx0x3x1.default, componentState.tColx0x3x1?.[state.screenSize]));

 const tComponentx0x3x1x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3x1x0.default, componentState.tComponentx0x3x1x0?.[state.screenSize]));

 const tColx0x3x2ComputedData = computed(() => _.merge({}, componentState.tColx0x3x2.default, componentState.tColx0x3x2?.[state.screenSize]));

 const tPaginationBasex0x3x2x0ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x3x2x0.default, componentState.tPaginationBasex0x3x2x0?.[state.screenSize]));

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
tRowx0x3ComputedData,
tColx0x3x0ComputedData,
tRowx0x3x0x0ComputedData,
tColx0x3x0x0x0ComputedData,
tSearchx0x3x0x0x0x0ComputedData,
tButtonx0x3x0x0x0x1ComputedData,
tColx0x3x0x0x1ComputedData,
tUploadButtonx0x3x0x0x1x0ComputedData,
tButtonx0x3x0x0x1x1ComputedData,
tColx0x3x1ComputedData,
tComponentx0x3x1x0ComputedData,
tColx0x3x2ComputedData,
tPaginationBasex0x3x2x0ComputedData,
onchange1770025930008,
onclick1770025946584,
onsuccess1770021190243,
onerror1770083836778,
onclick1770030381616,
oncurrentChange1770026518407,
onsizeChange1770026541208,
};
},
}
</script>

<style scoped>
.t-l-c-knowledgeBase {
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
position: Relative;
z-index: 1;
filter: ;
width: 100%;
height: 100%;
background-color: rgba(255, 255, 255, 0);
}
.t-l-c-knowledgeBase .knowledgeBase-t-rect-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 100%;
pointer-events: auto;
}

.t-l-c-knowledgeBase .knowledgeBase-t-row-0-3 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: start;
}

.t-l-c-knowledgeBase .knowledgeBase-t-col-0-3-0 {
position: relative;
top: null;
left: null;
width: 100%;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
}

.t-l-c-knowledgeBase .knowledgeBase-t-row-0-3-0-0 {
position: unset;
top: -64px;
left: 0px;
width: 100%;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-knowledgeBase .knowledgeBase-t-col-0-3-0-0-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: auto;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-knowledgeBase .knowledgeBase-t-search-0-3-0-0-0-0 {
position: unset;
top: -1px;
left: 0px;
width: 797px;
height: auto;
pointer-events: auto;
}

.t-l-c-knowledgeBase .knowledgeBase-t-button-0-3-0-0-0-1 {
position: unset;
top: 0px;
left: 808px;
width: 50px;
height: 32px;
pointer-events: auto;
}

.t-l-c-knowledgeBase .knowledgeBase-t-col-0-3-0-0-1 {
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

.t-l-c-knowledgeBase .knowledgeBase-t-upload-button-0-3-0-0-1-0 {
position: unset;
top: 0px;
left: 868px;
width: 80px;
height: 32px;
pointer-events: auto;
}

.t-l-c-knowledgeBase .knowledgeBase-t-button-0-3-0-0-1-1 {
position: unset;
top: 0px;
left: 959px;
width: 60px;
height: 32px;
pointer-events: auto;
}

.t-l-c-knowledgeBase .knowledgeBase-t-col-0-3-1 {
position: relative;
top: null;
left: null;
width: 100%;
height: calc(100% - 106px);
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
margin-bottom: 10px;
}

.t-l-c-knowledgeBase .knowledgeBase-t-component-0-3-1-0 {
position: unset;
top: 34px;
left: 0px;
width: 100%;
height: 100%;
pointer-events: auto;
}

.t-l-c-knowledgeBase .knowledgeBase-t-col-0-3-2 {
position: relative;
top: null;
left: null;
width: 100%;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 10px;
}

.t-l-c-knowledgeBase .knowledgeBase-t-pagination-base-0-3-2-0 {
position: unset;
top: 616px;
left: -2px;
width: 100%;
height: 40px;
pointer-events: auto;
}
</style>
