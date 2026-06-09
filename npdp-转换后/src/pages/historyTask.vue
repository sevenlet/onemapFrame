<template>
  <div id="t-l-c-historyTask" class="t-l-c-historyTask" ><t-row id="t-row-4e59.43d7f042f" class="historyTask-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align"><t-col id="t-col-15e7.bbf94a1d" class="historyTask-t-col-0-0-0"  :span="tColx0x0x0ComputedData.span" :offset="tColx0x0x0ComputedData.offset" :push="tColx0x0x0ComputedData.push" :pull="tColx0x0x0ComputedData.pull" :c-style="tColx0x0x0ComputedData.cStyle"><t-text-common id="t-text-common-3d57.e9f14e45c" class="historyTask-t-text-common-0-0-0-0"  :label="tTextCommonx0x0x0x0ComputedData.label" :editable="tTextCommonx0x0x0x0ComputedData.editable" :c-style="tTextCommonx0x0x0x0ComputedData.cStyle"></t-text-common><t-select id="t-select-3fcb.c00f74209" class="historyTask-t-select-0-0-0-1"  :active-value="replaceCssVariables(filterData(state.hasProblemSelected, componentPropBindingMap?.['t-select-3fcb.c00f74209']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x0x0x1ComputedData.options" :alias="tSelectx0x0x0x1ComputedData.alias" :multiple="tSelectx0x0x0x1ComputedData.multiple" :placeholder="tSelectx0x0x0x1ComputedData.placeholder" :clearable="tSelectx0x0x0x1ComputedData.clearable" :disabled="tSelectx0x0x0x1ComputedData.disabled" :name="tSelectx0x0x0x1ComputedData.name" :autocomplete="tSelectx0x0x0x1ComputedData.autocomplete" :filterable="tSelectx0x0x0x1ComputedData.filterable" :no-match-text="tSelectx0x0x0x1ComputedData.no-match-text" :no-data-text="tSelectx0x0x0x1ComputedData.no-data-text" :c-style="tSelectx0x0x0x1ComputedData.cStyle" @change="onchange1733973555614"></t-select><t-text-common id="t-text-common-2977.74741ca52" class="historyTask-t-text-common-0-0-0-2"  :label="tTextCommonx0x0x0x2ComputedData.label" :editable="tTextCommonx0x0x0x2ComputedData.editable" :c-style="tTextCommonx0x0x0x2ComputedData.cStyle"></t-text-common><t-select id="t-select-1974.3ebc72796" class="historyTask-t-select-0-0-0-3"  :active-value="replaceCssVariables(filterData(state.curStatusSelected, componentPropBindingMap?.['t-select-1974.3ebc72796']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x0x0x3ComputedData.options" :alias="tSelectx0x0x0x3ComputedData.alias" :multiple="tSelectx0x0x0x3ComputedData.multiple" :placeholder="tSelectx0x0x0x3ComputedData.placeholder" :clearable="tSelectx0x0x0x3ComputedData.clearable" :disabled="tSelectx0x0x0x3ComputedData.disabled" :name="tSelectx0x0x0x3ComputedData.name" :autocomplete="tSelectx0x0x0x3ComputedData.autocomplete" :filterable="tSelectx0x0x0x3ComputedData.filterable" :no-match-text="tSelectx0x0x0x3ComputedData.no-match-text" :no-data-text="tSelectx0x0x0x3ComputedData.no-data-text" :c-style="tSelectx0x0x0x3ComputedData.cStyle" @change="onchange1769578372049_0_0"></t-select></t-col><t-col id="t-col-9c50.ab505f40d" class="historyTask-t-col-0-0-1"  :span="tColx0x0x1ComputedData.span" :offset="tColx0x0x1ComputedData.offset" :push="tColx0x0x1ComputedData.push" :pull="tColx0x0x1ComputedData.pull" :c-style="tColx0x0x1ComputedData.cStyle"><t-rect id="t-rect-9621.671cf28b6" class="historyTask-t-rect-0-0-1-0"  :tip="tRectx0x0x1x0ComputedData.tip" :label="tRectx0x0x1x0ComputedData.label" :active="tRectx0x0x1x0ComputedData.active" :c-style="tRectx0x0x1x0ComputedData.cStyle" @click="onclick1769593483018"></t-rect><t-rect id="t-rect-67ef.3d9da8d3b" class="historyTask-t-rect-0-0-1-1"  :tip="tRectx0x0x1x1ComputedData.tip" :label="tRectx0x0x1x1ComputedData.label" :active="tRectx0x0x1x1ComputedData.active" :c-style="tRectx0x0x1x1ComputedData.cStyle" @click="onclick1769591457604"></t-rect></t-col><t-col id="t-col-b8dd.171ccbaae" class="historyTask-t-col-0-0-2"  :span="tColx0x0x2ComputedData.span" :offset="tColx0x0x2ComputedData.offset" :push="tColx0x0x2ComputedData.push" :pull="tColx0x0x2ComputedData.pull" :c-style="tColx0x0x2ComputedData.cStyle"><t-component id="t-component-b6ea.696c3620e" class="historyTask-t-component-0-0-2-0"  :name="tComponentx0x0x2x0ComputedData.name" :loading="tComponentx0x0x2x0ComputedData.loading" :c-style="tComponentx0x0x2x0ComputedData.cStyle" :src="tComponentx0x0x2x0ComputedData.src" :component-name="tComponentx0x0x2x0ComputedData.componentName" :page-id="tComponentx0x0x2x0ComputedData.pageId" :page-code="tComponentx0x0x2x0ComputedData.pageCode"></t-component></t-col></t-row></div>
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
import { TCol, TComponent, TRect, TRow, TSelect, TTextCommon } from '@ths/design';

export default {
  components: {
    TCol,
    TComponent,
    TRect,
    TRow,
    TSelect,
    TTextCommon,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-4e59.43d7f042f":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-15e7.bbf94a1d":{"attributeName":"tColx0x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-3d57.e9f14e45c":{"attributeName":"tTextCommonx0x0x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-3fcb.c00f74209":{"attributeName":"tSelectx0x0x0x1","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-2977.74741ca52":{"attributeName":"tTextCommonx0x0x0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-1974.3ebc72796":{"attributeName":"tSelectx0x0x0x3","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-col-9c50.ab505f40d":{"attributeName":"tColx0x0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-9621.671cf28b6":{"attributeName":"tRectx0x0x1x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-67ef.3d9da8d3b":{"attributeName":"tRectx0x0x1x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-col-b8dd.171ccbaae":{"attributeName":"tColx0x0x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-b6ea.696c3620e":{"attributeName":"tComponentx0x0x2x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}}};
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
   time: "",
   inspectObjectType: "",
   pointname: "",
   pointcode: "",
   curOperation: "",
   historyTaskTableSelection: [],
   tableData: [],
   curStatusSelected: "",
   curStatusOpts: [],
   hasProblemOpts: [],
   hasProblemSelected: "",
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
tRowx0x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"left","alignItems":"center","left":"0px","top":"0px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"left","alignItems":"center","left":"0px","top":"0px","position":"unset"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"100%","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"-32px","top":"-382px","backgroundColor":"var(--business-show-bg30)","paddingTop":"30px","paddingBottom":"30px","paddingLeft":"30px"},
            
            },
 default: { 
 
span:16,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"auto","height":"100%","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"-32px","top":"-382px","backgroundColor":"var(--business-show-bg30)","paddingTop":"30px","paddingBottom":"30px","paddingLeft":"30px"}}}, 
 },
},
tTextCommonx0x0x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"nowrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"41px","top":"132px","background":"unset","backgroundClip":"unset","marginRight":"0px"},
            
            },
 default: { 
 
label:"是否存在问题",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"nowrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"41px","top":"132px","background":"unset","backgroundClip":"unset","marginRight":"0px"}}}, 
 },
},
tSelectx0x0x0x1: {
defaultStyle: {
            default: {"width":"120px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","marginLeft":"20px","marginRight":"20px"},
            
            },
 default: { 
 
activeValue:"",
options:[{"value":"1","label":"是","disabled":false},{"value":"0","label":"否","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","marginLeft":"20px","marginRight":"20px"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tTextCommonx0x0x0x2: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"nowrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"209px","top":"137px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"0px"},
            
            },
 default: { 
 
label:"当前状态",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"nowrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"209px","top":"137px","background":"unset","backgroundClip":"unset","animationName":"","marginRight":"0px"}}}, 
 },
},
tSelectx0x0x0x3: {
defaultStyle: {
            default: {"width":"120px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","marginLeft":"20px","marginRight":"20px"},
            
            },
 default: { 
 
activeValue:"",
options:[{"value":"0","label":"待整改","disabled":false},{"value":"1","label":"整改中","disabled":false},{"value":"2","label":"已办结","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","marginLeft":"20px","marginRight":"20px"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tColx0x0x1: {
defaultStyle: {
            default: {"width":"100px","height":"100%","display":"flex","justifyContent":"right","alignItems":"center","backgroundColor":"var(--business-show-bg30)","paddingTop":"30px","paddingBottom":"30px","paddingRight":"30px"},
            
            },
 default: { 
 
span:8,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"100%","display":"flex","justifyContent":"right","alignItems":"center","backgroundColor":"var(--business-show-bg30)","paddingTop":"30px","paddingBottom":"30px","paddingRight":"30px"}}}, 
 },
},
tRectx0x0x1x0: {
defaultStyle: {
            default: {"width":"100px","height":"32px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px solid var(--targer-btn-border)","borderLeft":"1px solid var(--targer-btn-border)","borderBottom":"1px solid var(--targer-btn-border)","borderRight":"1px solid var(--targer-btn-border)","color":"var(--business-white)","fontSize":"var(--text-size-14)","whiteSpace":"nowrap","backgroundColor":"","position":"unset","left":"327px","top":"-84px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","cursor":"pointer","marginRight":"10px","borderDirection":"all"},
            
            },
 default: { 
 
tip:false,
label:"新建记录",
active:false,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px solid var(--targer-btn-border)","borderLeft":"1px solid var(--targer-btn-border)","borderBottom":"1px solid var(--targer-btn-border)","borderRight":"1px solid var(--targer-btn-border)","color":"var(--business-white)","fontSize":"var(--text-size-14)","whiteSpace":"nowrap","backgroundColor":"","position":"unset","left":"327px","top":"-84px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","cursor":"pointer","marginRight":"10px","borderDirection":"all"},"active":{"background":"var(--t-brand8)"},"hover":{"color":"var(--business-strong)","borderLeft":"1px solid var(--business-strong)","borderTop":"1px solid var(--business-strong)","borderRight":"1px solid var(--business-strong)","borderBottom":"1px solid var(--business-strong)","fontSize":"var(--text-size-14)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"var(--business-text-size-14)","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x0x1x1: {
defaultStyle: {
            default: {"width":"67px","height":"32px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px solid var(--targer-btn-border)","borderLeft":"1px solid var(--targer-btn-border)","borderBottom":"1px solid var(--targer-btn-border)","borderRight":"1px solid var(--targer-btn-border)","color":"var(--business-white)","fontSize":"var(--text-size-14)","whiteSpace":"nowrap","backgroundColor":"","position":"unset","left":"460px","top":"-83px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","cursor":"pointer","animationName":"","marginRight":"0px","borderDirection":"all"},
            
            },
 default: { 
 
tip:false,
label:"删除",
active:false,
cStyle:{"wrapper":{"default":{"width":"67px","height":"32px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px solid var(--targer-btn-border)","borderLeft":"1px solid var(--targer-btn-border)","borderBottom":"1px solid var(--targer-btn-border)","borderRight":"1px solid var(--targer-btn-border)","color":"var(--business-white)","fontSize":"var(--text-size-14)","whiteSpace":"nowrap","backgroundColor":"","position":"unset","left":"460px","top":"-83px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","cursor":"pointer","animationName":"","marginRight":"0px","borderDirection":"all"},"active":{"background":"var(--t-brand8)"},"hover":{"color":"var(--business-strong)","borderLeft":"1px solid var(--business-strong)","borderTop":"1px solid var(--business-strong)","borderRight":"1px solid var(--business-strong)","borderBottom":"1px solid var(--business-strong)","fontSize":"var(--text-size-14)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"var(--business-text-size-14)","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tColx0x0x2: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tComponentx0x0x2x0: {
defaultStyle: {
            default: {"width":"100%","height":"152px","margin":"0 auto","position":"unset","left":"39px","top":"-311px","backgroundColor":"rgba(23, 62, 228, 0)"},
            
            },
 default: { 
 
name:"historyTaskListComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"100%","height":"152px","margin":"0 auto","position":"unset","left":"39px","top":"-311px","backgroundColor":"rgba(23, 62, 228, 0)"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/historyTaskList",
componentName:"historyTaskListComponent",
pageId:"17cea2a0df114461a99e5b16738ab69a",
pageCode:"historyTaskList", 
 },
},
});
const initPageData = () => {
// 提供给内部表格
provide('state', state)
console.log('打开历史任务清单弹窗 20260128-1654', global.businessDialog.dialogParmas, state);

// {
//     "monitorTime": "2025-10",
//     "assessType": "monthly",
//     "pointCode": "3507000025",
//     "showSource": true,
//     "dataSourcetype": "surfaceWater",
//     "title": "锦城村"
// }
state.pointname = global.businessDialog.dialogParmas.title || global.businessDialog.dialogParmas.OUTPUTNAME || global.businessDialog.dialogParmas.POINT_NAME || '';
state.pointcode = global.businessDialog.dialogParmas.pointCode || '';

const init = async () => {
  state.time = Math.random();
  // 获取检查对象信息
  await apiRegistry.getCheckObjInfo.request();
  state.time = Math.random();
  // 获取检查列表
  apiRegistry.getCheckList.request();
};

init();



};
const handleHistoryTaskTableSelectChange = (resu) => {
// console.log('处理历史任务表格选中变化', resu);

state.historyTaskTableSelection = resu?.selected;

console.log('处理历史任务表格选中变化', resu, state.historyTaskTableSelection);
};
const handleDelete = () => {
// 如果没选中，则提示，不进行删除
if (!state.historyTaskTableSelection.length) {
  ElementPlus.ElMessage.warning('请选择要删除的数据');
  return;
}

// 删除检查记录的id数组
const delArr = state.historyTaskTableSelection.map((item) => item.inspect_id).join(',');

const url = `${global.businessServiceBaseUrl}/waterevaluate/inspect/batchDelete`;
const token = localStorage.getItem('token');

axios.delete(
  url,
  {
    params: {
      "inspectIds": delArr,
      time: Math.random(),
    },
    headers: {
      'usertoken': token,
      'token': token,
      // 'Content-Type': 'application/json'
    }
  }
  // {
  //   time: Math.random(),
  //   "inspectIds": delArr,
  // },
  // {
  //   baseURL: global.businessServiceBaseUrl,
  //   headers: {
  //     'usertoken': token,
  //     'token': token,
  //     'Content-Type': 'application/json'
  //   }
  // }
).then((res) => {
  console.log('删除检查记录', res);
  if (res.data.code === 200) {
    ElementPlus.ElMessage.success('删除成功');
    rootData.rootSocket.emit(
      'message',
      {
        room: global.socketRoom,
        type: "updateCheckList",
        data: {},
      }
    );

  }
}).catch(error => {
  console.log('删除失败', error)
  ElementPlus.ElMessage.error('删除失败，请重试');
});

};
const openCheckRecordDialog = (action,row) => {
// 填充操作状态
state.curOperation = action;
global.waterGlobalVariables.historyTask.action = action;
console.log(action,row,'test');
if (action === '新增' || action === '编辑' || action === '查看') {
  // 填充当前行
  global.waterGlobalVariables.historyTask.checkQuesRow = row || {};
  global.waterGlobalVariables.historyTask.returnQuesRow = row || {};

  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: "createDialog", // 消息名称
    data: {
      params: {
        // 新建、编辑、查看
        title: `${state.curOperation}检查记录`,
        // maxHeight: "997px",
        // maxWidth: "1600px",
        // minHeight: "716px",
        // minWidth: "1002px",
        maxHeight: "550px",
        maxWidth: "1100px",
        minHeight: "416px",
        minWidth: "850px",
        contentComName: "checkRecordComponent",
        dialogParams: {
          row: row,
          action: action,
        },
      }
    }, // 发送的数据
  });
} else if (action === '反馈') {
  // 填充当前行
  global.waterGlobalVariables.historyTask.returnQuesRow = row || {};
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: "createDialog", // 消息名称
    data: {
      params: {
        // 新建、编辑、查看
        title: `${state.curOperation}记录`,
        // maxHeight: "997px",
        // maxWidth: "1600px",
        // minHeight: "716px",
        // minWidth: "1002px",
        maxHeight: "670px",
        maxWidth: "1100px",
        minHeight: "416px",
        minWidth: "850px",
        contentComName: "feedbackRecordComponent",
        dialogParams: {
          row: row,
          action: action,
        },
      }
    }, // 发送的数据
  });
}


};
const updateCheckList = () => {
state.time = Math.random();
apiRegistry.getCheckList.request();
};
const onchange1733973555614 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.hasProblemSelected = value;
// 事件交互-请求调用接口
apiRegistry.getCheckList.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const onchange1769578372049_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.curStatusSelected = value;
// 事件交互-请求调用接口
apiRegistry.getCheckList.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const onclick1769593483018 = () => {
// 执行自定义方法
openCheckRecordDialog("新增",{});
};
const onclick1769591457604 = () => {
// 执行自定义方法
handleDelete();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getCheckObjInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"inspect_object_code":"state.pointcode","time":"state.time","inspect_object_name":"state.pointname","interfaceId":"af1d77e13aa0fda33d70c889995102ba"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"inspect_object_code":state.pointcode,"time":state.time,"inspect_object_name":state.pointname,"interfaceId":"af1d77e13aa0fda33d70c889995102ba"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"inspect_object_code":state.pointcode,"time":state.time,"inspect_object_name":state.pointname,"interfaceId":"af1d77e13aa0fda33d70c889995102ba"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCheckObjInfo'] = res.data;
                
     console.log("获取检查对象信息", res);
if (res.data.data.length) {
  const current = res.data.data.filter((item) => item.inspect_object_code === global.businessDialog.dialogParmas.pointCode)?.[0];
  global.waterGlobalVariables.historyTask.checkObjInfo = current || res.data.data[0];
  state.inspectObjectType = current?.inspect_object_type || res.data.data[0]?.inspect_object_type;
}

// {
//     "inspect_object_code": "3507001062",
//     "inspect_object_name": "新铺溪口",
//     "region_code": "350700000000",
//     "region_name": "南平市",
//     "inspect_object_type": 1,
//     "inspect_object_type_name": "断面"
// }
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      

      reject(error);
    });
  });
},
              },
// 接口函数
 getCheckList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"time":"state.time","INSPECT_OBJECT_TYPE":"state.inspectObjectType","STATUS":"state.curStatusSelected","IBSPECT_FLAG":"state.hasProblemSelected","INSPECT_OBJECT_CODE":"state.pointcode","interfaceId":"712bb45a3c3a3f9c768e2680cab396f3"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"time":state.time,"INSPECT_OBJECT_TYPE":state.inspectObjectType,"STATUS":state.curStatusSelected,"IBSPECT_FLAG":state.hasProblemSelected,"INSPECT_OBJECT_CODE":state.pointcode,"interfaceId":"712bb45a3c3a3f9c768e2680cab396f3"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"time":state.time,"INSPECT_OBJECT_TYPE":state.inspectObjectType,"STATUS":state.curStatusSelected,"IBSPECT_FLAG":state.hasProblemSelected,"INSPECT_OBJECT_CODE":state.pointcode,"interfaceId":"712bb45a3c3a3f9c768e2680cab396f3"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCheckList'] = res.data;
                
     state.tableData = [];
const { data } = res;
if (data.head.statusCode === '200' && data.data) {
  const resu = data.data?.map((elem) => ({
    ...elem,
    inspect_time: elem.inspect_time ? elem.inspect_time.substr(0, 10) : '-',
  }));
  state.tableData = resu;
}
console.log('历史检查问题清单 --- ', res, state.tableData);
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
                            setPageScale('t-l-c-historyTask', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPageData();
/* 接收socket.io消息 */
const onSocketChangeb6a7e34a1cd344018dd8 = function (data) {
if(data.type === "historyTaskTableSelectionChange"){
try{
// 执行自定义方法
handleHistoryTaskTableSelectChange(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangeb6a7e34a1cd344018dd8);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangeb6a7e34a1cd344018dd8);
});
/* 接收socket.io消息 */
const onSocketChange95d0c9fd61ea4704a1f7 = function (data) {
if(data.type === "openHistoryTaskRelativeDialog"){
try{
// 执行自定义方法
openCheckRecordDialog(data.data.action,data.data.row);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange95d0c9fd61ea4704a1f7);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange95d0c9fd61ea4704a1f7);
});
/* 接收socket.io消息 */
const onSocketChange3af9cbcf0b8c4823b030 = function (data) {
if(data.type === "updateCheckList"){
try{
// 执行自定义方法
updateCheckList();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange3af9cbcf0b8c4823b030);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange3af9cbcf0b8c4823b030);
});
onMounted(() => {
setPageScale('t-l-c-historyTask', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tColx0x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0x0.default, componentState.tColx0x0x0?.[state.screenSize]));

 const tTextCommonx0x0x0x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x0x0x0.default, componentState.tTextCommonx0x0x0x0?.[state.screenSize]));

 const tSelectx0x0x0x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x0x0x1.default, componentState.tSelectx0x0x0x1?.[state.screenSize]));

 const tTextCommonx0x0x0x2ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x0x0x2.default, componentState.tTextCommonx0x0x0x2?.[state.screenSize]));

 const tSelectx0x0x0x3ComputedData = computed(() => _.merge({}, componentState.tSelectx0x0x0x3.default, componentState.tSelectx0x0x0x3?.[state.screenSize]));

 const tColx0x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x0x1.default, componentState.tColx0x0x1?.[state.screenSize]));

 const tRectx0x0x1x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0x1x0.default, componentState.tRectx0x0x1x0?.[state.screenSize]));

 const tRectx0x0x1x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x0x1x1.default, componentState.tRectx0x0x1x1?.[state.screenSize]));

 const tColx0x0x2ComputedData = computed(() => _.merge({}, componentState.tColx0x0x2.default, componentState.tColx0x0x2?.[state.screenSize]));

 const tComponentx0x0x2x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0x2x0.default, componentState.tComponentx0x0x2x0?.[state.screenSize]));

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
tRowx0x0ComputedData,
tColx0x0x0ComputedData,
tTextCommonx0x0x0x0ComputedData,
tSelectx0x0x0x1ComputedData,
tTextCommonx0x0x0x2ComputedData,
tSelectx0x0x0x3ComputedData,
tColx0x0x1ComputedData,
tRectx0x0x1x0ComputedData,
tRectx0x0x1x1ComputedData,
tColx0x0x2ComputedData,
tComponentx0x0x2x0ComputedData,
onchange1733973555614,
onchange1769578372049_0_0,
onclick1769593483018,
onclick1769591457604,
};
},
}
</script>

<style scoped>
.t-l-c-historyTask {
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
width: 1000px;
height: 700px;
background-color: rgba(0,0,0,0);
}
.t-l-c-historyTask .historyTask-t-row-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 32px;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
}

.t-l-c-historyTask .historyTask-t-col-0-0-0 {
position: relative;
top: null;
left: null;
width: auto;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: left;
align-items: center;
background-color: var(--business-show-bg30);
padding-top: 30px;
padding-bottom: 30px;
padding-left: 30px;
}

.t-l-c-historyTask .historyTask-t-text-common-0-0-0-0 {
position: unset;
top: 132px;
left: 41px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-historyTask .historyTask-t-select-0-0-0-1 {
position: unset;
top: -39px;
left: 278px;
width: 120px;
height: 32px;
pointer-events: auto;
}

.t-l-c-historyTask .historyTask-t-text-common-0-0-0-2 {
position: unset;
top: 137px;
left: 209px;
width: auto;
height: 20px;
pointer-events: auto;
}

.t-l-c-historyTask .historyTask-t-select-0-0-0-3 {
position: unset;
top: -63px;
left: 617px;
width: 120px;
height: 32px;
pointer-events: auto;
}

.t-l-c-historyTask .historyTask-t-col-0-0-1 {
position: relative;
top: null;
left: null;
width: 100px;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
background-color: var(--business-show-bg30);
padding-top: 30px;
padding-bottom: 30px;
padding-right: 30px;
}

.t-l-c-historyTask .historyTask-t-rect-0-0-1-0 {
position: unset;
top: -84px;
left: 327px;
width: 100px;
height: 32px;
pointer-events: auto;
}

.t-l-c-historyTask .historyTask-t-rect-0-0-1-1 {
position: unset;
top: -83px;
left: 460px;
width: 67px;
height: 32px;
pointer-events: auto;
}

.t-l-c-historyTask .historyTask-t-col-0-0-2 {
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

.t-l-c-historyTask .historyTask-t-component-0-0-2-0 {
position: unset;
top: -311px;
left: 39px;
width: 100%;
height: 152px;
pointer-events: auto;
}
</style>
