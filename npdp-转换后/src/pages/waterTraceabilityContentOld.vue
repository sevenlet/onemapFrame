<template>
  <div id="t-l-c-waterTraceabilityContentOld" class="t-l-c-waterTraceabilityContentOld" ><t-row id="t-row-500b.8a4282c55" class="waterTraceabilityContent-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align"><t-text id="t-text-1bbc.292a467e2" class="waterTraceabilityContent-t-text-0-0-0"  :label="tTextx0x0x0ComputedData.label" :editable="tTextx0x0x0ComputedData.editable" :c-style="tTextx0x0x0ComputedData.cStyle" @click="onclick1733723979280"></t-text><t-text id="t-text-5001.13952ab12" class="waterTraceabilityContent-t-text-0-0-1"  :label="replaceCssVariables(filterData(state.headerInfo.POINT_NAME, componentPropBindingMap?.['t-text-5001.13952ab12']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x0x1ComputedData.editable" :c-style="tTextx0x0x1ComputedData.cStyle" :show-title="tTextx0x0x1ComputedData.showTitle"></t-text><t-text id="t-text-8f83.4cdb67f43" class="waterTraceabilityContent-t-text-0-0-2"  :label="replaceCssVariables(filterData(state.headerInfo.type, componentPropBindingMap?.['t-text-8f83.4cdb67f43']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x0x2ComputedData.editable" :c-style="tTextx0x0x2ComputedData.cStyle"></t-text><t-list-card-common id="t-list-card-common-b400.91fe9d2ff" class="waterTraceabilityContent-t-list-card-common-0-0-3"  :c-style="tListCardCommonx0x0x3ComputedData.cStyle" :key-word="tListCardCommonx0x0x3ComputedData.keyWord" :default-checked="tListCardCommonx0x0x3ComputedData.defaultChecked" :tab="tListCardCommonx0x0x3ComputedData.tab" :collapse="tListCardCommonx0x0x3ComputedData.collapse" :collapse-text="tListCardCommonx0x0x3ComputedData.collapseText" :display-count="tListCardCommonx0x0x3ComputedData.displayCount" :data-alias="tListCardCommonx0x0x3ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.headerInfo.WATERQUALITYLEVELNAME, componentPropBindingMap?.['t-list-card-common-b400.91fe9d2ff']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-list-card-common><t-list-card-common id="t-list-card-common-ca3e.4acae3791" class="waterTraceabilityContent-t-list-card-common-0-0-4"  :c-style="tListCardCommonx0x0x4ComputedData.cStyle" :key-word="tListCardCommonx0x0x4ComputedData.keyWord" :default-checked="tListCardCommonx0x0x4ComputedData.defaultChecked" :tab="tListCardCommonx0x0x4ComputedData.tab" :collapse="tListCardCommonx0x0x4ComputedData.collapse" :collapse-text="tListCardCommonx0x0x4ComputedData.collapseText" :display-count="tListCardCommonx0x0x4ComputedData.displayCount" :data-alias="tListCardCommonx0x0x4ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.headerInfo.ISSTANDARDSSTR, componentPropBindingMap?.['t-list-card-common-ca3e.4acae3791']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-list-card-common><t-rect v-if="state.headerInfo.isShowAlarm === true" id="t-rect-5459.0054cfc89" class="waterTraceabilityContent-t-rect-0-0-5"  :tip="tRectx0x0x5ComputedData.tip" :label="tRectx0x0x5ComputedData.label" :active="tRectx0x0x5ComputedData.active" :c-style="tRectx0x0x5ComputedData.cStyle"></t-rect></t-row><t-component id="t-component-31d3.24b651f58" class="waterTraceabilityContent-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName"></t-component><t-text id="t-text-1389.f99ff2c66" class="waterTraceabilityContent-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle"></t-text><t-rect id="t-rect-5e3b.5e9377bde" class="waterTraceabilityContent-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle"></t-rect><t-row id="t-row-5cb6.6e0b481ac" class="waterTraceabilityContent-t-row-0-4"  :c-style="tRowx0x4ComputedData.cStyle" :gutter="tRowx0x4ComputedData.gutter" :justify="tRowx0x4ComputedData.justify" :align="tRowx0x4ComputedData.align"><t-col id="t-col-af70.186e3480e" class="waterTraceabilityContent-t-col-0-4-0"  :span="tColx0x4x0ComputedData.span" :offset="tColx0x4x0ComputedData.offset" :push="tColx0x4x0ComputedData.push" :pull="tColx0x4x0ComputedData.pull" :c-style="tColx0x4x0ComputedData.cStyle"><t-text id="t-text-3ff6.322a2bcd3" class="waterTraceabilityContent-t-text-0-4-0-0"  :label="tTextx0x4x0x0ComputedData.label" :editable="tTextx0x4x0x0ComputedData.editable" :c-style="tTextx0x4x0x0ComputedData.cStyle"></t-text><t-select id="t-select-19f7.ef514e3cb" class="waterTraceabilityContent-t-select-0-4-0-1"  :active-value="replaceCssVariables(filterData(state.ENTERPRISE_TYPE, componentPropBindingMap?.['t-select-19f7.ef514e3cb']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.wryOpts, componentPropBindingMap?.['t-select-19f7.ef514e3cb']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x4x0x1ComputedData.alias" :multiple="tSelectx0x4x0x1ComputedData.multiple" :placeholder="tSelectx0x4x0x1ComputedData.placeholder" :clearable="tSelectx0x4x0x1ComputedData.clearable" :disabled="tSelectx0x4x0x1ComputedData.disabled" :name="tSelectx0x4x0x1ComputedData.name" :autocomplete="tSelectx0x4x0x1ComputedData.autocomplete" :filterable="tSelectx0x4x0x1ComputedData.filterable" :no-match-text="tSelectx0x4x0x1ComputedData.no-match-text" :no-data-text="tSelectx0x4x0x1ComputedData.no-data-text" :c-style="tSelectx0x4x0x1ComputedData.cStyle" @change="onchange1733895446402_0_0"></t-select><t-text id="t-text-235f.2bb390b1f" class="waterTraceabilityContent-t-text-0-4-0-2"  :label="tTextx0x4x0x2ComputedData.label" :editable="tTextx0x4x0x2ComputedData.editable" :c-style="tTextx0x4x0x2ComputedData.cStyle"></t-text><t-cascader id="t-cascader-8f0d.31e7e4925" class="waterTraceabilityContent-t-cascader-0-4-0-3"  :active-value="replaceCssVariables(filterData(state.treeActive, componentPropBindingMap?.['t-cascader-8f0d.31e7e4925']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data="replaceCssVariables(filterData(state.treeData, componentPropBindingMap?.['t-cascader-8f0d.31e7e4925']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tCascaderx0x4x0x3ComputedData.alias" :placeholder="tCascaderx0x4x0x3ComputedData.placeholder" :clearable="tCascaderx0x4x0x3ComputedData.clearable" :disabled="tCascaderx0x4x0x3ComputedData.disabled" :no-match-text="tCascaderx0x4x0x3ComputedData.noMatchText" :no-data-text="tCascaderx0x4x0x3ComputedData.noDataText" :c-style="tCascaderx0x4x0x3ComputedData.cStyle" :show-all-levels="tCascaderx0x4x0x3ComputedData.showAllLevels" :check-strictly="tCascaderx0x4x0x3ComputedData.checkStrictly" @change="onchange1734070589108_0_0" @clear="onclear1734590114522"></t-cascader><t-rect id="t-rect-4c01.2a8aec7e3" class="waterTraceabilityContent-t-rect-0-4-0-4"  :tip="tRectx0x4x0x4ComputedData.tip" :label="tRectx0x4x0x4ComputedData.label" :active="tRectx0x4x0x4ComputedData.active" :c-style="tRectx0x4x0x4ComputedData.cStyle" @click="onclick1739514291790"></t-rect></t-col><t-iframe id="t-iframe-3596.2a3695bbe" class="waterTraceabilityContent-t-iframe-0-4-2"  :src="tIframex0x4x2ComputedData.src" :srcdoc="tIframex0x4x2ComputedData.srcdoc" :scrolling="tIframex0x4x2ComputedData.scrolling" :c-style="tIframex0x4x2ComputedData.cStyle"></t-iframe></t-row></div>
</template>

<script>
import io from 'socket.io-client';
import mitt from 'mitt';
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
import { TCascader, TCol, TComponent, TIframe, TListCardCommon, TRect, TRow, TSelect, TText } from '@ths/design';

export default {
  components: {
    TCascader,
    TCol,
    TComponent,
    TIframe,
    TListCardCommon,
    TRect,
    TRow,
    TSelect,
    TText,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-500b.8a4282c55":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-1bbc.292a467e2":{"attributeName":"tTextx0x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-5001.13952ab12":{"attributeName":"tTextx0x0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"showTitle":{"filters":[]}},"t-text-8f83.4cdb67f43":{"attributeName":"tTextx0x0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-common-b400.91fe9d2ff":{"attributeName":"tListCardCommonx0x0x3","cStyle":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"tab":{"filters":[]},"collapse":{"filters":[]},"collapseText":{"filters":[]},"displayCount":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]}},"t-list-card-common-ca3e.4acae3791":{"attributeName":"tListCardCommonx0x0x4","cStyle":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"tab":{"filters":[]},"collapse":{"filters":[]},"collapseText":{"filters":[]},"displayCount":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]}},"t-rect-5459.0054cfc89":{"attributeName":"tRectx0x0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-31d3.24b651f58":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-1389.f99ff2c66":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-5e3b.5e9377bde":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-row-5cb6.6e0b481ac":{"attributeName":"tRowx0x4","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-af70.186e3480e":{"attributeName":"tColx0x4x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-3ff6.322a2bcd3":{"attributeName":"tTextx0x4x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-19f7.ef514e3cb":{"attributeName":"tSelectx0x4x0x1","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-text-235f.2bb390b1f":{"attributeName":"tTextx0x4x0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-cascader-8f0d.31e7e4925":{"attributeName":"tCascaderx0x4x0x3","activeValue":{"filters":[]},"data":{"filters":[]},"alias":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"noMatchText":{"filters":[]},"noDataText":{"filters":[]},"cStyle":{"filters":[]},"showAllLevels":{"filters":[]},"checkStrictly":{"filters":[]}},"t-rect-4c01.2a8aec7e3":{"attributeName":"tRectx0x4x0x4","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-table-0dc3.b83e1e06b":{"attributeName":"tTablex0x4x1"},"t-iframe-3596.2a3695bbe":{"attributeName":"tIframex0x4x2","src":{"filters":[]},"srcdoc":{"filters":[]},"scrolling":{"filters":[]},"cStyle":{"filters":[]}}};
// 页面内注入全局变量和事件
const rootData = inject('root');
let global = reactive({
...toRefs(rootData)
});
// 路由
const route = useRoute();
// 创建 DOM 引用

// 当前页面使用的变量
const state = reactive({
   screenSize: "",
   selectData: [],
   dispatchUrl: "http://19.130.161.126:8888/vue3-fs-task-micro/#/dispatchinglayout/special-task-assign?visible=true&paramValue=fszxrw&taskParamType=2&hiddenBackBtn=1",
   interfaceId: {"header":"","sy":""},
   sourceParmasState: {},
   syList: [],
   pageSize: "10000",
   ENTERPRISE_TYPE: "",
   wryOpts: [],
   isShowWrwCheckbox: false,
   wrwCheckboxArr: [],
   wrwCheckboxOpts: [],
   alarmList: [],
   headerInfo: {"POINT_NAME":"-","WATERQUALITYLEVELNAME":[],"ISSTANDARDSSTR":[],"isShowAlarm":false,"type":"-"},
   wryActive: "",
   monitortime: "",
   parentParams: {"ASSESSTYPE":"monthly","POINT_CODE":"","DATA_FREQUENCY":"","MULTI_POLLUTANTS":"None"},
   treeData: [],
   treeActive: "",
   baseInfo: {"title":"-","controlLevel":"-","waterQuality":[{"state":"-","stateColor":"#000","stateBgColor":""}],"standard":[{"state":"-","stateColor":"#fff","stateBgColor":""}],"alarmText":"","alarmShow":false,"type":"-"},
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
            default: {"width":"419px","height":"47px","position":"unset","left":"20px","top":"9px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"419px","height":"47px","position":"unset","left":"20px","top":"9px","animationName":""}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x0x0: {
defaultStyle: {
            default: {"width":"43px","height":"18px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"18px","left":"12px","backgroundColor":"rgba(255, 255, 255, 1)","position":"unset","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"43px","height":"18px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"18px","left":"12px","backgroundColor":"rgba(255, 255, 255, 1)","position":"unset","cursor":"pointer","animationName":""},"hover":{"backgroundColor":"var(--business-theme)"}}}, 
 },
},
tTextx0x0x1: {
defaultStyle: {
            default: {"width":"auto","height":"21px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"469.8092289677372px","top":"205.12660047743043px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"10px","fontWeight":"600","animationName":"","textAlign":"left","max-width":"200px","marginRight":"6px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","borderLeft":"1px solid rgba(255,255,255,1)","marginLeft":"10px","lineHeight":"20px"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"21px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"469.8092289677372px","top":"205.12660047743043px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"10px","fontWeight":"600","animationName":"","textAlign":"left","max-width":"200px","marginRight":"6px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","borderLeft":"1px solid rgba(255,255,255,1)","marginLeft":"10px","lineHeight":"20px"}}},
showTitle:true, 
 },
},
tTextx0x0x2: {
defaultStyle: {
            default: {"width":"40px","height":"20px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"260px","top":"-106px","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)","borderTopLeftRadius":"4px","borderBottomRightRadius":"4px","textAlign":"center","lineHeight":"18px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"rgba(255, 255, 255, 0.2)","fontSize":"12px","marginLeft":"10px","animationName":""},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"40px","height":"20px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"260px","top":"-106px","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)","borderTopLeftRadius":"4px","borderBottomRightRadius":"4px","textAlign":"center","lineHeight":"18px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"rgba(255, 255, 255, 0.2)","fontSize":"12px","marginLeft":"10px","animationName":""}}}, 
 },
},
tListCardCommonx0x0x3: {
defaultStyle: {
            default: {"position":"unset","width":"50px","height":"20px","left":"672.8092289677372px","top":"207.12660047743043px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"position":"unset","width":"50px","height":"20px","left":"672.8092289677372px","top":"207.12660047743043px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px"}},"listBody":{"default":{"backgroundColor":"rgba(223, 12, 12, 0)"}},"card":{"default":{"backgroundColor":"rgba(6, 240, 13, 0)","paddingTop":"0px","paddingBottom":"0px","paddingRight":"0px","paddingLeft":"0px"}},"cardItemInfo":{"default":{"display":"none"}},"checkedCardIcon":{"default":{"display":"none"}},"cardStatus":{"default":{"position":"static","width":"50px","height":"20px","fontSize":"12px","lineHeight":"20px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px"}},"cardIcon":{"default":{"display":"none"}}},
keyWord:"",
defaultChecked:"",
tab:false,
collapse:false,
collapseText:"数据",
displayCount:"0",
dataAlias:{"header":"header","icon":"icon","label":"label","value":"value","state":"state","stateColor":"stateColor","stateBgColor":"stateBgColor","list":"list","labelColor":"labelColor","labelBgColor":"labelBgColor","type":"type","src":"src"},
data:[], 
 },
},
tListCardCommonx0x0x4: {
defaultStyle: {
            default: {"position":"unset","width":"50px","height":"20px","left":"763.8092289677372px","top":"206.12660047743043px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"position":"unset","width":"50px","height":"20px","left":"763.8092289677372px","top":"206.12660047743043px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"listBody":{"default":{"backgroundColor":"rgba(223, 12, 12, 0)"}},"card":{"default":{"backgroundColor":"rgba(6, 240, 13, 0)","paddingTop":"0px","paddingBottom":"0px","paddingRight":"0px","paddingLeft":"0px"}},"cardItemInfo":{"default":{"display":"none"}},"checkedCardIcon":{"default":{"display":"none"}},"cardStatus":{"default":{"position":"static","width":"50px","height":"20px","fontSize":"12px","lineHeight":"20px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px"}},"cardIcon":{"default":{"display":"none"}}},
keyWord:"",
defaultChecked:"",
tab:false,
collapse:false,
collapseText:"数据",
displayCount:"0",
dataAlias:{"header":"header","icon":"icon","label":"label","value":"value","state":"state","stateColor":"stateColor","stateBgColor":"stateBgColor","list":"list","labelColor":"labelColor","labelBgColor":"labelBgColor","type":"type","src":"src"},
data:[], 
 },
},
tRectx0x0x5: {
defaultStyle: {
            default: {"width":"20px","height":"20px","position":"unset","left":"852.8092289677372px","top":"206.12660047743043px","backgroundImage":"url(assets/images/2024-12-11/c042c6b49c404c56a0dafaa835ad05b2.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","marginLeft":"10px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"20px","height":"20px","position":"unset","left":"852.8092289677372px","top":"206.12660047743043px","backgroundImage":"url(assets/images/2024-12-11/c042c6b49c404c56a0dafaa835ad05b2.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","marginLeft":"10px","animationName":""}}}, 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"68px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"68px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"73px","fontFamily":"方正综艺","fontSize":"20px","animationName":""},
            
            },
 default: { 
 
label:"溯源结果",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"73px","fontFamily":"方正综艺","fontSize":"20px","animationName":""}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"60px","left":"2px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"60px","left":"2px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tRowx0x4: {
defaultStyle: {
            default: {"width":"412px","height":"771px","position":"unset","left":"19px","top":"111px","overflow":"visible","display":"block"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"412px","height":"771px","position":"unset","left":"19px","top":"111px","overflow":"visible","display":"block"}}},
gutter:0,
justify:"start",
align:"top", 
 },
},
tColx0x4x0: {
defaultStyle: {
            default: {"width":"100%","height":"50px","display":"flex","flexDirection":"row","justifyContent":"flex-start","alignItems":"center","marginTop":"0px","paddingLeft":"0px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"50px","display":"flex","flexDirection":"row","justifyContent":"flex-start","alignItems":"center","marginTop":"0px","paddingLeft":"0px"}}}, 
 },
},
tTextx0x4x0x0: {
defaultStyle: {
            default: {"width":"100px","height":"19px","color":"rgba(255, 255, 255, 0.9)","fontSize":"14px","top":"319px","left":"19px","position":"unset","marginRight":"0px","marginLeft":"0px","textAlign":"center"},
            
            },
 default: { 
 
label:"类型",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100px","height":"19px","color":"rgba(255, 255, 255, 0.9)","fontSize":"14px","top":"319px","left":"19px","position":"unset","marginRight":"0px","marginLeft":"0px","textAlign":"center"}}}, 
 },
},
tSelectx0x4x0x1: {
defaultStyle: {
            default: {"width":"105px","height":"32px","position":"unset","left":"101px","top":"311px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","marginLeft":"0px"},
            
            },
 default: { 
 
activeValue:"",
options:[],
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
cStyle:{"wrapper":{"default":{"width":"105px","height":"32px","position":"unset","left":"101px","top":"311px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","marginLeft":"0px"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tTextx0x4x0x2: {
defaultStyle: {
            default: {"width":"100px","height":"16px","color":"rgba(255, 255, 255, 0.9)","fontSize":"14px","top":"319px","left":"237px","position":"unset","animationName":"","marginRight":"0px","marginLeft":"10px","overflow":"visible","textAlign":"center"},
            
            },
 default: { 
 
label:"行业",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100px","height":"16px","color":"rgba(255, 255, 255, 0.9)","fontSize":"14px","top":"319px","left":"237px","position":"unset","animationName":"","marginRight":"0px","marginLeft":"10px","overflow":"visible","textAlign":"center"}}}, 
 },
},
tCascaderx0x4x0x3: {
defaultStyle: {
            default: {"width":"116px","height":"32px","position":"unset","left":"276px","top":"311px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","paddingLeft":"10px","animationName":"","marginLeft":"0px"},
            
            },
 default: { 
 
activeValue:"",
data:[],
alias:{"label":"label","value":"id","disabled":"disabled"},
placeholder:"请选择行业",
clearable:true,
disabled:false,
noMatchText:"无匹配数据",
noDataText:"无数据",
cStyle:{"wrapper":{"default":{"width":"116px","height":"32px","position":"unset","left":"276px","top":"311px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","paddingLeft":"10px","animationName":"","marginLeft":"0px"},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","min-height":"450px","min-width":"auto","max-width":"360px","overflow":"auto","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"16px","--scrollbar-track-color":"var(--business-show-bg30)","--scrollbar-thumb-color":"var(--business-theme)"}},"dropdownMenu":{"default":{"backgroundColor":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderLeft":"0px solid ","borderTop":"0px solid ","borderRight":"0px solid ","borderBottom":"0px solid ","color":"rgba(255, 255, 255, 1)","overflow":"auto"}},"arrow":{"default":{"color":"var(--business-unit-icon)","backgroundColor":"","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      ","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","width":"12px"}},"dropdownItem":{"default":{"color":"rgba(255, 255, 255, 1)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","max-width":"200px","overflow":"visible"},"active":{"color":" var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","paddingLeft":"0px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"14px"}},"dropdownArrow":{"default":{"backgroundColor":"#8AD2FF"}},"dropdownRadio":{"default":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"50px","borderTopRightRadius":"50px","borderBottomLeftRadius":"50px","borderBottomRightRadius":"50px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"active":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"50px","borderTopRightRadius":"50px","borderBottomLeftRadius":"50px","borderBottomRightRadius":"50px"},"hover":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"50px","borderTopRightRadius":"50px","borderBottomLeftRadius":"50px","borderBottomRightRadius":"50px"}},"dropdownRadioCenter":{"active":{"borderTopLeftRadius":"50px","borderTopRightRadius":"50px","borderBottomLeftRadius":"50px","borderBottomRightRadius":"50px","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","backgroundColor":"var(--business-theme)"}}},
showAllLevels:false,
checkStrictly:true, 
 },
},
tRectx0x4x0x4: {
defaultStyle: {
            default: {"width":"100px","height":"33px","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"14px","color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid var(--business-text-avianize)","borderTop":"1px solid var(--business-text-avianize)","borderRight":"1px solid var(--business-text-avianize)","borderBottom":"1px solid var(--business-text-avianize)","marginLeft":"10px","min-width":"80px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"批量派发",
active:false,
cStyle:{"wrapper":{"default":{"width":"100px","height":"33px","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"14px","color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid var(--business-text-avianize)","borderTop":"1px solid var(--business-text-avianize)","borderRight":"1px solid var(--business-text-avianize)","borderBottom":"1px solid var(--business-text-avianize)","marginLeft":"10px","min-width":"80px","cursor":"pointer"}}}, 
 },
},
tIframex0x4x2: {
defaultStyle: {
            default: {"width":"409px","height":"710px","position":"unset","left":"489px","top":"65px"},
            
            },
 default: { 
 
src:"",
srcdoc:"<!--\n * @Author: lichun\n * @Date: 2025-09-25 13:33:18\n * @LastEditTime: 2025-10-14 09:53:31\n * @LastEditors: guoyx\n * @Description: File Info\n-->\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>污染过程分析</title>\n    <link rel=\"shortcut icon\" href=\"assets/images/favicon.ico\" />\n    <!-- vue 这里最终应该下载一个稳定版本 -->\n    <script src=\"./resources/vue.min.js\"><\/script>\n\n    <!-- socket插件 -->\n    <script src=\"./resources/socket.io.js\"><\/script>\n    <!-- lodash插件 -->\n    <script src=\"./resources/lodash.min.js\"><\/script>\n\n    <!-- 引入样式 -->\n    <link\n      rel=\"stylesheet\"\n      href=\"./resources/element-plus/element-plus.min.css\"\n    />\n    <!-- 引入组件库 -->\n    <script src=\"./resources/element-plus/element-plus.min.js\"><\/script>\n    <script src=\"./resources/element-plus/zhCn.js\"><\/script>\n    <!-- 通信插件mitt https://www.npmjs.com/package/mitt -->\n    <script src=\"./resources/mitt.min.js\"><\/script>\n\n    <!-- HTTP库 -->\n    <script src=\"./resources/axios.min.js\"><\/script>\n\n    <!-- 主题样式 -->\n    <link rel=\"stylesheet\" href=\"./assets/style/themes.css\" />\n\n    <style>\n      body {\n        width: 425px;\n        margin: 0;\n      }\n\n      .classsify-container {\n        width: 410px;\n      }\n\n      .title-bg-rect-1 {\n        position: absolute;\n        right: 152px;\n        top: 2px;\n        animation-delay: 0s;\n        animation-name: custom4f535b3e2b5f4;\n      }\n\n      .title-bg-rect-2 {\n        position: absolute;\n        right: 130px;\n        top: 2px;\n        animation-delay: 0.5s;\n        animation-name: custom4c3c1b39109cc;\n      }\n\n      .title-bg-rect-3 {\n        position: absolute;\n        right: 108px;\n        top: 2px;\n        animation-delay: 1s;\n        animation-name: custom69c9662b286de;\n      }\n\n      .title-bg-rect-4 {\n        position: absolute;\n        right: 86px;\n        top: 2px;\n        animation-delay: 1.5s;\n        animation-name: customac792bbf9af19;\n      }\n\n      .title-bg-rect-5 {\n        position: absolute;\n        right: 64px;\n        top: 2px;\n        animation-delay: 2s;\n        animation-name: customcdd3f7e7beaa6;\n      }\n\n      .title-bg-rect-6 {\n        position: absolute;\n        right: 42px;\n        top: 2px;\n        animation-delay: 2.5s;\n        animation-name: customfa732ecba515e;\n      }\n\n      .title-bg-rect-7 {\n        position: absolute;\n        right: 20px;\n        top: 2px;\n        animation-delay: 3s;\n        animation-name: custombc1e59c456704;\n      }\n\n      .title-bg-rect-8 {\n        position: absolute;\n        right: -2px;\n        top: 2px;\n        animation-delay: 3.5s;\n        animation-name: custome263d94835a89;\n      }\n\n      .title-bg-rect img {\n        width: 29px;\n        height: 36px;\n      }\n\n      .content {\n        display: flex;\n        justify-content: space-between;\n        gap: 8px;\n        flex-wrap: wrap;\n        width: 410px;\n      }\n\n      .menu-item {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        width: 49%;\n        height: 60px;\n        padding: 8px;\n        border-radius: 2px;\n        background-color: var(--business-show-bg30);\n        border: 1px solid transparent;\n        font-size: 14px;\n        color: #fff;\n        cursor: pointer;\n        box-sizing: border-box;\n      }\n\n      .menu-text {\n        display: -webkit-box;\n        -webkit-box-orient: vertical;\n        -webkit-line-clamp: 2;\n        text-overflow: ellipsis;\n        overflow: hidden;\n      }\n\n      .menu-item img {\n        width: 30px;\n        height: 30px;\n        flex-shrink: 0;\n      }\n\n      .menu-item:hover {\n        /* 蓝色主题/内容TAB选中背景 */\n        background: var(--business-tab-content-active-bg);\n        box-sizing: border-box;\n        /* 蓝色主题/单位\\图标 */\n        border: 1px solid var(--business-unit-icon);\n        cursor: pointer;\n      }\n\n      .active {\n        /* 蓝色主题/内容TAB选中背景 */\n        background: var(--business-tab-content-active-bg);\n        /* 蓝色主题/单位\\图标 var(--business-unit-icon)*/\n        border: 1px solid var(--business-unit-icon);\n      }\n\n      .el-scrollbar__view {\n        height: 100%;\n      }\n\n      .layer {\n        width: 410px;\n        height: 860px;\n      }\n\n      .layer .el-scrollbar {\n        width: 410px;\n        --el-scrollbar-opacity: 0;\n        --el-scrollbar-background-color: transparent;\n        --el-scrollbar-hover-opacity: 0;\n        --el-scrollbar-hover-background-color: transparent;\n      }\n      .tab-box .el-table--small .el-table__cell {\n        padding: 0 0;\n      }\n\n      .tab-box .el-table .el-table__header th {\n        border-bottom: 1px solid rgba(26, 27, 31, 0);\n        border-left: 0px solid;\n        border-right: 0px solid;\n        border-top: 0px solid;\n        color: var(--t-white);\n        background-color: var(--business-table-header-bg);\n        font-size: 14px;\n        font-weight: 400;\n        margin-right: 0px;\n      }\n      .tab-box .el-table tr {\n        background-color: var(--business-table-even-row-bg);\n        color: #fff;\n      }\n      .tab-box .el-table__empty-block {\n        min-height: 680px;\n        background-color: var(--business-table-even-row-bg);\n      }\n\n      /* 表头禁用多选框：置灰 + 鼠标禁用 */\n      .tab-box .has-gutter .el-checkbox__inner {\n        display: none !important;\n      }\n      .el-table td.el-table__cell,\n      .el-table th.el-table__cell.is-leaf {\n        border-bottom: 1px solid transparent;\n      }\n      /* ===== 强制去除所有表格边框（表、行、单元格，含高亮/悬浮）并做样式微调 ===== */\n      .tab-box .el-table,\n      .tab-box .el-table__header,\n      .tab-box .el-table__body {\n        border: none !important;\n      }\n\n      /* 移除 Element Plus 表格伪元素边框 */\n      .tab-box .el-table::before,\n      .tab-box .el-table::after,\n      .tab-box .el-table .el-table__inner-wrapper::before {\n        display: none !important;\n      }\n\n      /* 去除表头与单元格边框 */\n      .tab-box .el-table th.el-table__cell,\n      .tab-box .el-table td.el-table__cell {\n        border: none !important;\n      }\n\n      /* 悬浮/高亮时也不显示边框 */\n      .tab-box\n        .el-table--enable-row-hover\n        .el-table__body\n        tr:hover\n        > td.el-table__cell {\n        border: none !important;\n      }\n      .tab-box .el-table--striped .el-table__body tr.el-table__row--striped td {\n        border: none !important;\n      }\n      .el-table--enable-row-transition .el-table__body td.el-table__cell {\n        border: none !important;\n      }\n\n      /* 终极兜底：任何单元格/表头单元格的边框强制移除或透明 */\n      .tab-box .el-table th.el-table__cell,\n      .tab-box .el-table td.el-table__cell,\n      .tab-box .el-table .el-table__cell {\n        border-width: 0 !important;\n        border-style: none !important;\n        border-color: transparent !important;\n        box-shadow: none !important;\n        outline: none !important;\n        background-clip: padding-box;\n      }\n\n      /* 行高 +4px（在 small 模式下为上下各 +2px）*/\n      .tab-box .el-table--small .el-table__cell {\n        padding: 2px 0 !important;\n      }\n\n      /* 单元格字号 +1px（仅正文单元格，不改变表头字号）*/\n      .tab-box .el-table__body td.el-table__cell {\n        font-size: 12px;\n      }\n      /* 边框兜底：若仍有样式注入边框，则强制透明化 */\n      .tab-box .el-table,\n      .tab-box .el-table * {\n        border-color: transparent !important;\n        outline: none !important;\n        box-shadow: none !important;\n      }\n      .tab-box .el-table--border,\n      .tab-box .el-table--border .el-table__inner-wrapper,\n      .tab-box .el-table__header-wrapper,\n      .tab-box .el-table__body-wrapper {\n        border: none !important;\n        border-color: transparent !important;\n      }\n      .tab-box .el-table--border::before,\n      .tab-box .el-table--border::after,\n      .tab-box .el-table .el-table__inner-wrapper::before,\n      .tab-box .el-table .el-table__inner-wrapper::after,\n      .tab-box .el-table__border-left-patch {\n        display: none !important;\n      }\n\n      /* ===== 斑马纹（开启 stripe 后的奇偶行底色）===== */\n      /* 默认（非 striped 标记）偶数行底色 */\n      .tab-box .el-table__body tr td {\n        background-color: var(--business-table-even-row-bg) !important;\n      }\n      /* striped 奇数行底色（Element Plus 给奇数行加 el-table__row--striped）*/\n      .tab-box .el-table--striped .el-table__body tr.el-table__row--striped td {\n        background-color: var(--business-table-odd-row-bg) !important;\n      }\n\n      /* 详情链接样式：显著可点击 */\n      .tab-box .detail-link {\n        color: #00ffff;\n        cursor: pointer;\n      }\n      .tab-box .detail-link:hover {\n        text-decoration: none;\n        cursor: pointer;\n      }\n\n      /* 去除表头右侧“gutter”与右补丁的白色留白（保持透明以不破坏对齐） */\n      .tab-box .el-table .gutter,\n      .tab-box .el-table th.gutter,\n      .tab-box .el-table td.gutter,\n      .tab-box .el-table__fixed-right-patch {\n        background-color: transparent !important;\n      }\n\n      /* 进一步收窄 gutter 和右补丁宽度，避免出现明显留白 */\n      .tab-box .el-table .gutter,\n      .tab-box .el-table th.gutter,\n      .tab-box .el-table td.gutter {\n        width: 0px !important;\n        padding: 0 !important;\n      }\n      .tab-box .el-table colgroup col[name='gutter'] {\n        width: 0px !important;\n      }\n      .tab-box .el-table__fixed-right-patch {\n        width: 0px !important;\n      }\n\n      /* 包裹容器背景也设为透明，防止对比形成“白条”错觉 */\n      .tab-box .el-table__header-wrapper,\n      .tab-box .el-table__body-wrapper {\n        background-color: transparent !important;\n      }\n\n      /* 表格身体滚动条：恢复为细且透明 */\n      .tab-box .el-table__body-wrapper {\n        scrollbar-width: none; /* Firefox */\n        scrollbar-color: transparent transparent; /* Firefox */\n      }\n      .tab-box .el-table__body-wrapper::-webkit-scrollbar {\n        width: 4px;\n        height: 4px;\n        background: transparent;\n      }\n      .tab-box .el-table__body-wrapper::-webkit-scrollbar-thumb {\n        background-color: transparent;\n        border-radius: 2px;\n      }\n      .tab-box .el-table__body-wrapper::-webkit-scrollbar-track {\n        background: transparent;\n      }\n\n      /* 表格内部 wrap（某些版本使用 wrap 承载滚动）*/\n      .tab-box .el-scrollbar__wrap {\n        scrollbar-width: thin; /* Firefox */\n        scrollbar-color: transparent transparent; /* Firefox */\n      }\n      .tab-box .el-scrollbar__wrap::-webkit-scrollbar {\n        width: 4px;\n        height: 4px;\n        background: transparent;\n      }\n      .tab-box .el-scrollbar__wrap::-webkit-scrollbar-thumb {\n        background-color: transparent;\n        border-radius: 2px;\n      }\n      .tab-box .el-scrollbar__wrap::-webkit-scrollbar-track {\n        background: transparent;\n      }\n\n      /* Element Plus 自定义滚动条轨与拇指完全透明且更细 */\n      .tab-box .el-scrollbar__bar.is-vertical {\n        width: 4px !important;\n      }\n      .tab-box .el-scrollbar__bar.is-horizontal {\n        height: 4px !important;\n      }\n      .tab-box .el-scrollbar__thumb {\n        background-color: transparent !important;\n        opacity: 0 !important;\n      }\n\n      /* ===== 修复 Element Plus 表格在 max-height 下右侧滚动条留白 ===== */\n      /* 1) 让表体滚动条覆盖内容而不是占位，从而不触发 header 补偿 */\n      .tab-box .el-table__body-wrapper {\n        overflow: overlay !important; /* Chrome/Edge 支持，避免产生占位宽度 */\n      }\n      /* 2) 关闭 Element Plus 的滚动条补偿逻辑 */\n      .tab-box .el-table {\n        --el-table-scrollbar-size: 0px !important;\n      }\n      .tab-box .el-table__header-wrapper {\n        margin-right: 0 !important;\n      }\n      /* 3) 收起并透明化 gutter/右补丁，彻底消除白条 */\n      .tab-box .el-table .gutter,\n      .tab-box .el-table th.gutter,\n      .tab-box .el-table td.gutter {\n        width: 0 !important;\n        padding: 0 !important;\n        background: transparent !important;\n      }\n      .tab-box .el-table colgroup col[name='gutter'] {\n        width: 0 !important;\n      }\n      .tab-box .el-table__fixed-right-patch {\n        width: 0 !important;\n        background: transparent !important;\n      }\n\n      /* 删除固定高度补偿策略（恢复默认） */\n      .tab-box .el-table {\n        /* no override */\n      }\n      .tab-box .el-table__header-wrapper {\n        /* no override */\n      }\n      .el-table__body-wrapper::-webkit-scrollbar {\n        display: none; /* Chrome, Safari, Opera*/\n      }\n      .el-table__body-wrapper::-webkit-scrollbar-track {\n        display: none; /* Chrome, Safari, Opera*/\n      }\n      .el-table__body-wrapper::-webkit-scrollbar-thumb {\n        display: none; /* Chrome, Safari, Opera*/\n      }\n\n      .el-table__body-wrapper::-webkit-scrollbar-thumb {\n        display: none; /* Chrome, Safari, Opera*/\n      }\n      .el-table__body-wrapper::-webkit-scrollbar-thumb {\n        display: none; /* Chrome, Safari, Opera*/\n      }\n    </style>\n  </head>\n\n  <body class=\"蓝色版\">\n    <div id=\"app\"></div>\n\n    <script>\n      /**\n       * 这里定义全局使用的变量、方法\n       */\n      const {\n        createApp,\n        ref,\n        reactive,\n        toRefs,\n        onMounted,\n        onBeforeUnmount,\n        watch,\n        provide,\n      } = Vue;\n\n      const serviceBaseUrl =\n        'http://192.168.24.106:10157/service/serviceinterface/search/run.action';\n\n      // 房间号\n      const roomId = localStorage.getItem('lxtSocketRoom');\n\n      // 主题\n      const themeName = localStorage.getItem('lxtTheme');\n\n      const bodyDom = document.querySelector('body');\n      if (bodyDom && themeName) {\n        bodyDom.classList.add(themeName);\n      }\n\n      /**\n       * 这里入口组件内容\n       */\n      const MainComponent = {\n        template:\n          // 默认页面 ———— 一直显示 页面中的组件根据显示条件显示\n          `\n               <div class=\"layer\">\n                <el-scrollbar max-height=\"100%\">\n                 <div class=\"classsify-container\">\n                  <div class=\"classsify-item\">\n                    <div class=\"content tab-box\">\n                      <el-table\n                        ref=\"multipleTableRef\"\n                        :data=\"state.tableData\"\n                        row-key=\"OUTLET_ID\"\n                        style=\"width: 100%\"\n                        stripe\n                        empty-text=\"暂无数据\"\n                        @selection-change=\"handleSelectionChange\"\n                      >\n                         <el-table-column type=\"selection\" width=\"35\" align=\"center\" reserve-selection />\n                         <el-table-column label=\"定位\" width=\"50\" align=\"center\">\n                          <template #default=\"scope\">\n                             <img\n                               :src=\"state.locateIcon\"\n                               alt=\"定位\"\n                               style=\"width:16px;height:16px;cursor:pointer;\"\n                               @click=\"onLocate(scope.row)\"\n                             />\n                          </template>\n                        </el-table-column>\n                         <el-table-column label=\"污染源名称\" min-width=\"100\" show-overflow-tooltip>\n                          <template #default=\"scope\">\n                            {{ scope.row.ENTER_NAME || '-' }}\n                          </template>\n                        </el-table-column>\n                         <el-table-column label=\"行业类别\" min-width=\"100\" show-overflow-tooltip>\n                          <template #default=\"scope\">\n                            {{ scope.row.TRADENAME || '-' }}\n                          </template>\n                        </el-table-column>\n                        <el-table-column v-if=\"false\" label=\"主要原因\" min-width=\"100\" show-overflow-tooltip>\n                          <template #default=\"scope\">\n                            <div :style=\"{ color: scope.row.PRIMREASON ? '#F00' : '#fff', cursor: 'pointer' }\" @click=\"openPop(scope.row)\">{{ scope.row.PRIMREASON || '-' }}</div>\n                          </template>\n                        </el-table-column>\n                      </el-table>\n                    </div>\n                    </div>\n                  </div>\n                </el-scrollbar>\n               </div>\n              `,\n        setup() {\n          // 获取缓存里的鹿小图全局变量数据\n          const lxtGlobal = localStorage.getItem('lxtGlobal')\n            ? JSON.parse(localStorage.getItem('lxtGlobal'))\n            : {};\n          // 页面内注入全局变量和事件\n          const rootEmitter = mitt();\n\n          let global = reactive(\n            /* 插入应用级别的全局变量 相当于store中的rootData */\n            /* globalVariableStart */\n            {\n              socketIp:\n                lxtGlobal.socketIp || 'http://192.168.0.202:7777/socketPath',\n              socketPath: lxtGlobal.socketPath || '/socketPath',\n              socketRoom: lxtGlobal.socketRoom || roomId || 'admin',\n            }\n            /* globalVariableEnd */\n          );\n\n          let state = reactive({\n            isSocketConnect: false, // socket 是否连接\n            tableData: [],\n            locateIcon:\n              'data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBmaWxsPSJub25lIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMy45OTk4NjY0ODU1OTU3MDMiIGhlaWdodD0iMTYuNDI4MzQ4NTQxMjU5NzY2IiB2aWV3Qm94PSIwIDAgMTMuOTk5ODY2NDg1NTk1NzAzIDE2LjQyODM0ODU0MTI1OTc2NiI+PGRlZnM+PGNsaXBQYXRoIGlkPSJtYXN0ZXJfc3ZnMF80MjVfMjQyMjkvNV81ODc1Ij48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTMuOTk5ODY2NDg1NTk1NzAzIiBoZWlnaHQ9IjE2LjQyODM0ODU0MTI1OTc2NiIgcng9IjAiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBjbGlwLXBhdGg9InVybCgjbWFzdGVyX3N2ZzBfNDI1XzI0MjI5LzVfNTg3NSkiPjxnPjxwYXRoIGQ9Ik02Ljc2MTkxODkwNjI1LDE2LjExMzc3NDI2NzU3ODEyM0M2Ljc5MzQ5ODkwNjI1LDE2LjE0NTM3NDI2NzU3ODEyNyw2LjgzMDk4ODkwNjI1LDE2LjE3MDQ3NDI2NzU3ODEyNSw2Ljg3MjI0ODkwNjI1LDE2LjE4NzU3NDI2NzU3ODEyNUM2LjkxMzUxODkwNjI1LDE2LjIwNDY3NDI2NzU3ODEyNyw2Ljk1Nzc0ODkwNjI1LDE2LjIxMzQ3NDI2NzU3ODEyNSw3LjAwMjQxODkwNjI1LDE2LjIxMzQ3NDI2NzU3ODEyNUM3LjA0NzA4ODkwNjI1LDE2LjIxMzQ3NDI2NzU3ODEyNSw3LjA5MTMxODkwNjI1LDE2LjIwNDY3NDI2NzU3ODEyNyw3LjEzMjU3ODkwNjI1LDE2LjE4NzU3NDI2NzU3ODEyNUM3LjE3Mzg0ODkwNjI1LDE2LjE3MDQ3NDI2NzU3ODEyNSw3LjIxMTMzODkwNjI1LDE2LjE0NTM3NDI2NzU3ODEyNyw3LjI0MjkxODkwNjI1LDE2LjExMzc3NDI2NzU3ODEyM0M3LjI0MjkxODkwNjI1LDE2LjExMzc3NDI2NzU3ODEyMywxMi4wNzE4Mjg5MDYyNSwxMS4yNzg4NzQyNjc1NzgxMjUsMTIuMDg0ODI4OTA2MjUsMTEuMjU5ODc0MjY3NTc4MTI1QzEyLjkxNzAyODkwNjI1LDEwLjI4NzU3NDI2NzU3ODEyNCwxMy40NTI5Mjg5MDYyNSw5LjA5NzE5NDI2NzU3ODEyNSwxMy42MjkyMjg5MDYyNSw3LjgyOTY4NDI2NzU3ODEyNUMxMy44MDU0Mjg5MDYyNSw2LjU2MjE3NDI2NzU3ODEyNSwxMy42MTQ2Mjg5MDYyNSw1LjI3MDcwNDI2NzU3ODEyNSwxMy4wNzk0Mjg5MDYyNSw0LjEwODMxNDI2NzU3ODEyNUMxMi41NDQxMjg5MDYyNSwyLjk0NTkzNDI2NzU3ODEyNSwxMS42ODY4Mjg5MDYyNSwxLjk2MTM3NDI2NzU3ODEyNSwxMC42MDkxMjg5MDYyNSwxLjI3MTMxNDI2NzU3ODEyNUM5LjUzMTQwODkwNjI1LDAuNTgxMjUyMjY3NTc4MTI1LDguMjc4NDQ4OTA2MjUsMC4yMTQ2MjI2ODU1NzgxMjUsNi45OTg3NDg5MDYyNSwwLjIxNDg3NDM5NzEwMTEyNUM1LjcxOTAzODkwNjI1LDAuMjE1MTI2MTA4NTc4MTI1LDQuNDY2MjI4OTA2MjUsMC41ODIyNDgyNjc1NzgxMjUsMy4zODg3ODg5MDYyNSwxLjI3MjczNDI2NzU3ODEyNUMyLjMxMTM0ODkwNjI1LDEuOTYzMjE0MjY3NTc4MTI1LDEuNDU0NDQ4OTA2MjUsMi45NDgxMTQyNjc1NzgxMjUsMC45MTk2MzY5MDYyNSw0LjExMDcxNDI2NzU3ODEyNUMwLjM4NDgyNTMwNjI1LDUuMjczMzA0MjY3NTc4MTI1LDAuMTk0NTI0OTA2MjUwMDAwMDIsNi41NjQ4NTQyNjc1NzgxMjUsMC4zNzEyODk3MDYyNSw3LjgzMjI5NDI2NzU3ODEyNUMwLjU0ODA1MzkwNjI1MDAwMDEsOS4wOTk3MzQyNjc1NzgxMjUsMS4wODQ0NzE5MDYyNTAwMDAxLDEwLjI4OTk3NDI2NzU3ODEyNiwxLjkxNjk2ODkwNjI1LDExLjI2MTg3NDI2NzU3ODEyNkMxLjkzMTk2ODkwNjI1LDExLjI4MDg3NDI2NzU3ODEyNiw2Ljc2MTkxODkwNjI1LDE2LjExMzc3NDI2NzU3ODEyMyw2Ljc2MTkxODkwNjI1LDE2LjExMzc3NDI2NzU3ODEyM0M2Ljc2MTkxODkwNjI1LDE2LjExMzc3NDI2NzU3ODEyMyw2Ljc2MTkxODkwNjI1LDE2LjExMzc3NDI2NzU3ODEyMyw2Ljc2MTkxODkwNjI1LDE2LjExMzc3NDI2NzU3ODEyM0M2Ljc2MTkxODkwNjI1LDE2LjExMzc3NDI2NzU3ODEyMyw2Ljc2MTkxODkwNjI1LDE2LjExMzc3NDI2NzU3ODEyMyw2Ljc2MTkxODkwNjI1LDE2LjExMzc3NDI2NzU3ODEyM1pNNy4wMDA5MTg5MDYyNSwzLjg1MjkwNDI2NzU3ODEyNUM3LjM3ODU5ODkwNjI1LDMuODUyOTA0MjY3NTc4MTI1LDcuNzUyNTc4OTA2MjUsMy45MjcyOTQyNjc1NzgxMjUsOC4xMDE0OTg5MDYyNSw0LjA3MTgyNDI2NzU3ODEyNEM4LjQ1MDQyODkwNjI1LDQuMjE2MzU0MjY3NTc4MTI1LDguNzY3NDc4OTA2MjUsNC40MjgxOTQyNjc1NzgxMjUsOS4wMzQ1Mzg5MDYyNSw0LjY5NTI1NDI2NzU3ODEyNUM5LjMwMTU5ODkwNjI1LDQuOTYyMzE0MjY3NTc4MTI1LDkuNTEzNDM4OTA2MjUsNS4yNzkzNTQyNjc1NzgxMjUsOS42NTc5Njg5MDYyNSw1LjYyODI4NDI2NzU3ODEyNUM5LjgwMjQ5ODkwNjI1LDUuOTc3MjE0MjY3NTc4MTI1LDkuODc2ODg4OTA2MjUsNi4zNTExOTQyNjc1NzgxMjUsOS44NzY4ODg5MDYyNSw2LjcyODg3NDI2NzU3ODEyNUM5Ljg3Njg4ODkwNjI1LDcuMTA2NTU0MjY3NTc4MTI1LDkuODAyNDk4OTA2MjUsNy40ODA1MzQyNjc1NzgxMjUsOS42NTc5Njg5MDYyNSw3LjgyOTQ1NDI2NzU3ODEyNUM5LjUxMzQzODkwNjI1LDguMTc4Mzg0MjY3NTc4MTI0LDkuMzAxNTk4OTA2MjUsOC40OTU0MzQyNjc1NzgxMjQsOS4wMzQ1Mzg5MDYyNSw4Ljc2MjQ5NDI2NzU3ODEyNUM4Ljc2NzQ3ODkwNjI1LDkuMDI5NTU0MjY3NTc4MTI0LDguNDUwNDI4OTA2MjUsOS4yNDEzOTQyNjc1NzgxMjUsOC4xMDE0OTg5MDYyNSw5LjM4NTkyNDI2NzU3ODEyNEM3Ljc1MjU3ODkwNjI1LDkuNTMwNDU0MjY3NTc4MTI2LDcuMzc4NTk4OTA2MjUsOS42MDQ4NDQyNjc1NzgxMjUsNy4wMDA5MTg5MDYyNSw5LjYwNDg0NDI2NzU3ODEyNUM2LjYyMzIzODkwNjI1LDkuNjA0ODQ0MjY3NTc4MTI1LDYuMjQ5MjU4OTA2MjUsOS41MzA0NTQyNjc1NzgxMjYsNS45MDAzMjg5MDYyNSw5LjM4NTkyNDI2NzU3ODEyNEM1LjU1MTM5ODkwNjI1LDkuMjQxMzk0MjY3NTc4MTI1LDUuMjM0MzU4OTA2MjUsOS4wMjk1NTQyNjc1NzgxMjQsNC45NjcyOTg5MDYyNSw4Ljc2MjQ5NDI2NzU3ODEyNUM0LjcwMDIzODkwNjI1LDguNDk1NDM0MjY3NTc4MTI0LDQuNDg4Mzk4OTA2MjUsOC4xNzgzODQyNjc1NzgxMjQsNC4zNDM4Njg5MDYyNSw3LjgyOTQ1NDI2NzU3ODEyNUM0LjE5OTMzODkwNjI1LDcuNDgwNTM0MjY3NTc4MTI1LDQuMTI0OTQ4OTA2MjUsNy4xMDY1NTQyNjc1NzgxMjUsNC4xMjQ5NDg5MDYyNSw2LjcyODg3NDI2NzU3ODEyNUM0LjEyNDk0ODkwNjI1LDYuMzUxMTk0MjY3NTc4MTI1LDQuMTk5MzM4OTA2MjUsNS45NzcyMTQyNjc1NzgxMjUsNC4zNDM4Njg5MDYyNSw1LjYyODI4NDI2NzU3ODEyNUM0LjQ4ODM5ODkwNjI1LDUuMjc5MzU0MjY3NTc4MTI1LDQuNzAwMjM4OTA2MjUsNC45NjIzMTQyNjc1NzgxMjUsNC45NjcyOTg5MDYyNSw0LjY5NTI1NDI2NzU3ODEyNUM1LjIzNDM1ODkwNjI1LDQuNDI4MTk0MjY3NTc4MTI1LDUuNTUxMzk4OTA2MjUsNC4yMTYzNTQyNjc1NzgxMjUsNS45MDAzMjg5MDYyNSw0LjA3MTgyNDI2NzU3ODEyNEM2LjI0OTI1ODkwNjI1LDMuOTI3Mjk0MjY3NTc4MTI1LDYuNjIzMjM4OTA2MjUsMy44NTI5MDQyNjc1NzgxMjUsNy4wMDA5MTg5MDYyNSwzLjg1MjkwNDI2NzU3ODEyNUM3LjAwMDkxODkwNjI1LDMuODUyOTA0MjY3NTc4MTI1LDcuMDAwOTE4OTA2MjUsMy44NTI5MDQyNjc1NzgxMjUsNy4wMDA5MTg5MDYyNSwzLjg1MjkwNDI2NzU3ODEyNVoiIGZpbGw9IiMwMEZGRkYiIGZpbGwtb3BhY2l0eT0iMSIvPjwvZz48L2c+PC9zdmc+',\n          });\n\n          const multipleTableRef = ref(null); // 表格实例\n          const multipleSelection = ref([]);\n          // 保存上一次的选中状态\n          const previousSelection = ref([]);\n\n          // 创建 socket 连接\n          let socket = null;\n          if (global.socketIp) {\n            const options = {};\n            if (global?.socketPath) {\n              options.path = global.socketPath;\n            }\n            socket = io(global.socketIp, options);\n          }\n\n          provide('root', {\n            ...toRefs(global),\n            rootEmit: rootEmitter.emit, // mitt 发送\n            rootOn: rootEmitter.on, // mitt 接收\n            rootOff: rootEmitter.off, // mitt 移除\n            rootSocket: socket, // socket 实例\n          });\n\n          /**\n           * 监听修改全局变量事件\n           * @param obj 修改后的变量\n           */\n          rootEmitter.on('rootData:change', (obj) => {\n            global = _.set(global, obj.key, obj.value);\n\n            if (global.socketIp && global.socketRoom) {\n              // 全局变量发生变化时，需要通知其他屏，这里直接发送socket消息\n              socket.emit('message', {\n                room: global.socketRoom, // 房间号\n                type: 'internalType:ChangeGlobalValue', // 需要保证此类型唯一性\n                data: obj,\n              });\n            }\n          });\n\n          /**\n           * 连接成功时进入对应的房间\n           */\n          if (socket) {\n            socket.on('connect', function () {\n              if (global.socketIp && global.socketRoom) {\n                // 进入房间\n                socket.emit('join-room', global.socketRoom);\n                state.isSocketConnect = true;\n              }\n            });\n          }\n\n          /**\n           * 表格选中\n           */\n\n          const handleSelectionChange = (val) => {\n            // 找出新增的项（当前有而上一次没有的）\n            const addedItems = val.filter(\n              (current) =>\n                !previousSelection.value.some(\n                  (prev) =>\n                    // 假设用id作为唯一标识，可根据实际情况修改\n                    prev.OUTLET_ID === current.OUTLET_ID\n                )\n            );\n\n            // 找出移除的项（上一次有而当前没有的）\n            const removedItems = previousSelection.value.filter(\n              (prev) =>\n                !val.some((current) => prev.OUTLET_ID === current.OUTLET_ID)\n            );\n\n            // // 打印新增和移除的项\n            // if (addedItems.length > 0) {\n            //   console.log('新增的行:', addedItems);\n            // }\n            // if (removedItems.length > 0) {\n            //   console.log('移除的行:', removedItems);\n            // }\n\n            // 更新当前选中状态\n            multipleSelection.value = val;\n            // console.log('当前选中的所有行:', val);\n\n            // 发送socket消息\n            socket.emit('message', {\n              room: global.socketRoom, // 房间号\n              type: 'sySelectRow', // 需要保证此类型唯一性\n              data: {\n                selectData: multipleSelection.value,\n                added: addedItems, // 新增的项\n                removed: removedItems, // 移除的项\n              },\n            });\n\n            // 保存当前状态作为下一次的对比基准\n            // 深拷贝避免引用问题\n            previousSelection.value = JSON.parse(JSON.stringify(val));\n          };\n\n          const openPop = (row) => {\n            console.log(row, '点击了主原因');\n            if (scope.row.PRIMREASON) {\n              socket.emit('message', {\n                room: global.socketRoom, // 房间号\n                type: 'syPop', // 需要保证此类型唯一性\n                data: row,\n              });\n            }\n          };\n          // 监听 socket 房间的变化\n          watch(\n            () => global.socketRoom,\n            (val, oldVal) => {\n              if (socket) {\n                // 离开房间\n                socket.emit('leave-room', oldVal);\n                // 进入房间\n                socket.emit('join-room', val);\n              }\n            }\n          );\n\n          onMounted(async () => {\n            // socket.emit('message', {\n            //   room: global.socketRoom, // 房间号\n            //   type: 'onInit', // 需要保证此类型唯一性\n            //   data: {},\n            // });\n            setTimeout(() => {\n              // 初始化\n            socket.emit('message', {\n              room: global.socketRoom, // 房间号\n              type: 'onInit', // 需要保证此类型唯一性\n              data: {},\n            });\n            }, 1000);\n            if (socket) {\n              socket.on('message', function (data) {\n                // socket 监听全局变量的变化，然后合并值\n                if (data.type === 'internalType:ChangeGlobalValue') {\n                  // 合并 globa 的值\n                  global = _.set(global, data.data.key, data.data.value);\n                } else if (data.type === 'syPage') {\n                  console.log('syPage00000000000000000000000001', data);\n                  try {\n                    let id = data?.data?.interfaceId;\n                    const params = Object.assign({\n                      pageSize: data?.data?.pageSize,\n                      MONITORTYPE: data?.data?.MONITORTYPE,\n                      MONITORTIME: data?.data?.MONITORTIME,\n                      MULTI_POLLUTANTS: data?.data?.MULTI_POLLUTANTS,\n                      ENTERPRISE_TYPE: data?.data?.ENTERPRISE_TYPE,\n                      TRADE_CODE: data?.data?.TRADE_CODE,\n                    });\n\n                    // 创建 FormData 对象\n                    const formData = new FormData();\n                    Object.keys(params).forEach((key) => {\n                      formData.append(key, params[key]);\n                    });\n                    console.log(\n                      'shjysSsqy.........................',\n                      id,\n                      formData\n                    );\n                    if (multipleTableRef.value) {\n                      multipleTableRef.value.clearSelection();\n                    }\n                    previousSelection.value = [];\n                    multipleSelection.value = [];\n                    state.tableData = [];\n                    axios\n                      .post(\n                        `${serviceBaseUrl}?token=dcp&interfaceId=${id}&POINT_CODE=${data?.data?.POINT_CODE}`,\n                        formData\n                      )\n                      .then((res) => {\n                        const list = res?.data?.data || [];\n                        state.tableData = list; \n                        console.log('表格数据state.tableData ', state.tableData);\n                      })\n                      .catch((err) => {\n                        console.error('接口调用失败: shjysSsqy', err);\n                        state.tableData = [];\n                      });\n                  } catch (e) {\n                    console.error('处理 shjysSsqy 消息失败', e);\n                  }\n                } else {\n                  // 发送消息，通知其他页面\n                  rootEmitter.emit('rootSocket:change', data);\n                  // console.log(data, multipleTableRef.value, '接收到信息01');\n                  if (data.type === 'roadMsg') {\n                    previousSelection.value = [];\n                    multipleSelection.value = [];\n                    if (multipleTableRef.value) {\n                      multipleTableRef.value.clearSelection();\n                    }\n                    state.tableData = data.data.listData;\n                  }\n                }\n              });\n            }\n          });\n\n          onBeforeUnmount(() => {\n            // 离开房间\n            socket.emit('leave-room', global.socketRoom);\n            // 断开连接\n            socket.disconnect();\n          });\n\n          return {\n            state,\n            multipleTableRef,\n            handleSelectionChange,\n            selectable: () => true,\n            openPop,\n            onLocate: (row) => {\n              console.log('定位 row:', row);\n              // socket.emit('message', {\n              //   room: global.socketRoom,\n              //   type: 'goto',\n              //   data: {\n              //     LONGITUDE: row.LONGITUDE,\n              //     LATITUDE: row.LATITUDE,\n              //     level: '12',\n              //   },\n              // });\n              // 给地图发消息\n              socket.emit('message', {\n                room: global.socketRoom, // 房间号\n                type: 'runInteractive', // 消息名称\n                data: [\n                  {\n                    code: 'score_id',\n                    shareCode: 'SCORE_ID',\n                    defaultValue: '',\n                    runtimeValue: row.SCORE_ID || '',\n                  },\n                  {\n                    code: 'standenterid',\n                    name: '',\n                    defaultValue: '',\n                    shareCode: 'STANDENTERID',\n                    runtimeValue: row.STANDENTERID || '',\n                  },\n                ],\n              });\n            },\n            onDetail: (row) => {\n              // console.log('详情 row:', row);\n              socket.emit('message', {\n                room: global.socketRoom,\n                type: 'showLegoDialog',\n                data: {\n                  dialogName: 'waterEnterpriseDialogComponent',\n                  dialogParams: {\n                    STANDENTERID: row.id || '',\n                    LATITUDE: row.LATITUDE || '',\n                    LONGITUDE: row.LONGITUDE || '',\n                  },\n                },\n              });\n            },\n          };\n        },\n      };\n\n      const app = createApp(MainComponent);\n      /* 下面的操作是去掉控制台Vue输出的警告信息  如果想开启警告信息可以把这个空函数注释掉 */\n      app.config.warnHandler = function (msg, vm, trace) {\n        // 空函数，不做任何处理\n      };\n      app\n        .use(ElementPlus, {\n          size: 'small',\n        })\n        .mount('#app');\n    <\/script>\n  </body>\n</html>\n",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"409px","height":"710px","position":"unset","left":"489px","top":"65px"}}}, 
 },
},
});
const getProvider = () => {
const rootData = inject('sourceParmasState');
console.log(rootData,'sourceParmasState'); // 接收到的值

state.sourceParmasState = rootData;

// {
//     "screenSize": "",
//     "componentSourceParmas": {
//         "POINT_CODE": "C14",
//         "ASSESSTYPE": "monthly",
//         "DATA_FREQUENCY": "4",
//         "MULTI_POLLUTANTS": "W21003,W21011",
//         "MONITORTIME": "2022-03"
//     },
//     "componentSourceName": "waterTraceabilityContentOldComponent",
//     "iframeRecordDetailUrl": "",
//     "componentName": "waterSurfaceEntryComponent",
//     "activeMenuData": {
//         "data": [
//             {
//                 "RES_ID": "d3b34ac6-34bd-431e-b898-7a8aeaabb80f",
//                 "RES_NAME": "地表水",
//                 "RES_TYPE": 10,
//                 "PARENT": "5fa268bb-17b6-4de3-ada8-bc1465e1b0b0",
//                 "IS_MENU": 1,
//                 "MENU_URL": "waterSurfaceEntry",
//                 "TARGET": "2",
//                 "MENU_ICON": null,
//                 "PERMISSION_CODE": "/waterSurfaceEntry",
//                 "SORT": 10,
//                 "FUNC_URL": null,
//                 "AUTH_VISIT": 1,
//                 "IS_SHOW_DROPDOWNMENU": null,
//                 "IS_SHOW_FIRSTMENU": null,
//                 "EXT1": "{\"resCode\":\"onemap_manual_surfacewater\",\"appURL\":\"http://192.168.0.202:7777/mapgo5.0/preview.html?appID=z1zb8xmkmeo6yqu&appType=2D&appName=地表水\"}",
//                 "EXT2": null,
//                 "EXT3": null,
//                 "EXT4": null,
//                 "APP_ID": "DCP.LXT.DEV",
//                 "CUSTOM_SETTING": {
//                     "showBreadcrumbs": "1",
//                     "showTitle": "1"
//                 },
//                 "RES_PATH": [
//                     {
//                         "MENU_URL": null,
//                         "RES_NAME": "水环境",
//                         "RES_ID": "b5b45013-49d8-43e8-98a6-6179431c99de",
//                         "MENU_ICON": null
//                     },
//                     {
//                         "MENU_URL": null,
//                         "RES_NAME": "环境现状",
//                         "RES_ID": "5fa268bb-17b6-4de3-ada8-bc1465e1b0b0",
//                         "MENU_ICON": null
//                     },
//                     {
//                         "MENU_URL": "waterSurfaceEntry",
//                         "RES_NAME": "地表水",
//                         "RES_ID": "d3b34ac6-34bd-431e-b898-7a8aeaabb80f",
//                         "MENU_ICON": null
//                     }
//                 ],
//                 "CHILDREN": []
//             }
//         ],
//         "operation": "highlight",
//         "type": "subject"
//     },
//     "iframeSourceUrl": "",
//     "activeTabLast": "d3b34ac6-34bd-431e-b898-7a8aeaabb80f",
//     "iframePointDetailUrl": "",
//     "activeTab": "source",
//     "tabList": [
//         {
//             "id": "d3b34ac6-34bd-431e-b898-7a8aeaabb80f",
//             "label": "地表水",
//             "url": "waterSurfaceEntry",
//             "rawData": {
//                 "RES_ID": "d3b34ac6-34bd-431e-b898-7a8aeaabb80f",
//                 "RES_NAME": "地表水",
//                 "RES_TYPE": 10,
//                 "PARENT": "5fa268bb-17b6-4de3-ada8-bc1465e1b0b0",
//                 "IS_MENU": 1,
//                 "MENU_URL": "waterSurfaceEntry",
//                 "TARGET": "2",
//                 "MENU_ICON": null,
//                 "PERMISSION_CODE": "/waterSurfaceEntry",
//                 "SORT": 10,
//                 "FUNC_URL": null,
//                 "AUTH_VISIT": 1,
//                 "IS_SHOW_DROPDOWNMENU": null,
//                 "IS_SHOW_FIRSTMENU": null,
//                 "EXT1": "{\"resCode\":\"onemap_manual_surfacewater\",\"appURL\":\"http://192.168.0.202:7777/mapgo5.0/preview.html?appID=z1zb8xmkmeo6yqu&appType=2D&appName=地表水\"}",
//                 "EXT2": null,
//                 "EXT3": null,
//                 "EXT4": null,
//                 "APP_ID": "DCP.LXT.DEV",
//                 "CUSTOM_SETTING": {
//                     "showBreadcrumbs": "1",
//                     "showTitle": "1"
//                 },
//                 "RES_PATH": [
//                     {
//                         "MENU_URL": null,
//                         "RES_NAME": "水环境",
//                         "RES_ID": "b5b45013-49d8-43e8-98a6-6179431c99de",
//                         "MENU_ICON": null
//                     },
//                     {
//                         "MENU_URL": null,
//                         "RES_NAME": "环境现状",
//                         "RES_ID": "5fa268bb-17b6-4de3-ada8-bc1465e1b0b0",
//                         "MENU_ICON": null
//                     },
//                     {
//                         "MENU_URL": "waterSurfaceEntry",
//                         "RES_NAME": "地表水",
//                         "RES_ID": "d3b34ac6-34bd-431e-b898-7a8aeaabb80f",
//                         "MENU_ICON": null
//                     }
//                 ],
//                 "CHILDREN": []
//             }
//         }
//     ],
//     "iframeUrl": "",
//     "showRightMain": true,
//     "iframeVisible": false
// }
};
const handleClickBack = (column,row) => {
console.log('行列数据', row, column);

// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "score_id",
      "shareCode": "SCORE_ID",
      "defaultValue": "",
      "runtimeValue": row.SCORE_ID || '',
    }, {
      "code": "standenterid",
      "name": "",
      "defaultValue": "",
      "shareCode": "STANDENTERID",
      "runtimeValue": row.STANDENTERID || '',
    }
  ]
});


// 

if (column.label === '主要原因') {
  // 设置弹框使用的参数
  global.businessDialog.dialogParmas = {
    SCORE_ID: row.SCORE_ID || "",
    STANDENTERID: row.STANDENTERID || "",
  };
  // 显示溯源弹窗
  global.businessDialog.dialogName = 'waterSourceReportComponent';
}

if (column.label === '操作') {
  // 派发操作列
  // dispatchTask(id);
}
};
const initPage = () => {
// console.log('获取全局弹窗信息', global.businessDialog);

// &REGION_CODE=440306000000&POINT_CODE=C15&MONITORTIME=2022-03&DATA_FREQUENCY=4&ASSESSTYPE=monthly&MULTI_POLLUTANTS=W21003,W21011
state.parentParams = {
  POINT_CODE: state.sourceParmasState?.componentSourceParmas.POINT_CODE || '',
  ASSESSTYPE: state.sourceParmasState?.componentSourceParmas.ASSESSTYPE || '',
  DATA_FREQUENCY: state.sourceParmasState?.componentSourceParmas.DATA_FREQUENCY || '',
  MULTI_POLLUTANTS: state.sourceParmasState?.componentSourceParmas.MULTI_POLLUTANTS || 'None',
};
console.log('获取传递过来的参数',state.sourceParmasState, state.parentParams)
// 时间
state.monitortime = state.sourceParmasState?.componentSourceParmas.MONITORTIME || '';
// 自动（小时/天）、手工三个不同头部接口id
switch (state.parentParams.DATA_FREQUENCY) {
  case '1':
    // 自动-小时
    state.interfaceId.header = '6b55f61844ccd520f3f9a5a4f227f95e';
    break;
  case '2':
    // 自动-天
    state.interfaceId.header = '7e646485d5e40eb0cb831d4a5520f81a';
    break;
  case '4':
    // 手工
    state.interfaceId.header = 'c88965d570ad1d00197e1fee3a00c649';
    break;
  default:
    state.interfaceId.header = 'c88965d570ad1d00197e1fee3a00c649';
    break;
}

const init = async () => {
  // 获取监测时间
  // await getMonitortime();

  // 获取头部基本信息
  // await getHeaderInfo();
  apiRegistry.getHeaderInfo.request();
  // 获取行业列表
  // await getHyData();
  apiRegistry.getHyData.request();
  // 获取报警信息列表
  // await getAlarmList();
  apiRegistry.getAlarmList.request();
  // 接口id：报警8818a477f0a9f5587924ca85f106eb66；未报警607287764d212de49335ec24b47e006a          
  state.interfaceId.sy = state.headerInfo.isShowAlarm ? '607287764d212de49335ec24b47e006a' : '607287764d212de49335ec24b47e006a';
  // 获取污染物复选列表
  // await getWrwCheckboxOpts();
  apiRegistry.getWrwCheckboxOpts.request();
  // 获取污染源类型下拉
  // await getWryOpts();
  apiRegistry.getWryOpts.request();
  // 获取溯源列表
  // getSyListData();
  console.log(state.interfaceId.sy, '溯源接口');
};

init();

// {
//     "dialogParmas": {
//         "rowInfo": {
//             "UNIT_ID": "1_BAOAN",
//             "UNIT_CODE": "1",
//             "UNIT_NAME": "沙井河管控单元",
//             "UNIT_LEVEL": "1",
//             "LATITUDE": "",
//             "LONGITUDE": "",
//             "IS_LEAF": "1",
//             "WSYSTEM_CODE": "MZHLY00000",
//             "WSYSTEM_NAME": "茅洲河流域",
//             "canPosition": "false"
//         }
//     },
//     "dialogName": "waterQualityExceedingAlarmComponent"
// }
};
const handleBack = () => {
// // 返回 水-控制单元-内容页面
// state.waterControlUnitState.componentName = 'waterControlUnitContentComponent';

// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "closePointTrace",
      "shareCode": "closePointTrace",
      "defaultValue": "true",
      "runtimeValue": "true"
    }, {
      "code": "hiddenTraceDetail",
      "shareCode": "hiddenTraceDetail",
      "defaultValue": "true",
      "name": "",
      "runtimeValue": "true"
    }
  ]
});
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractiveChange", // 消息名称
  data: [
    {
      "code": "closePointTrace",
      "shareCode": "closePointTrace",
      "defaultValue": "true",
      "runtimeValue": "true"
    }, {
      "code": "hiddenTraceDetail",
      "shareCode": "hiddenTraceDetail",
      "defaultValue": "true",
      "name": "",
      "runtimeValue": "true"
    }
  ]
});

};
const changeWrwCheckbox = () => {
console.log(state.wrwCheckboxArr);

// 调整污染物复选框选中的值
if (state.wrwCheckboxArr.length) {
  state.parentParams.MULTI_POLLUTANTS = state.wrwCheckboxArr.join(',');
} else {
  state.parentParams.MULTI_POLLUTANTS = 'None';
}

// 获取溯源列表
// getSyListData();

// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "MULTI_POLLUTANTS",
      "shareCode": "MULTI_POLLUTANTS",
      "defaultValue": "",
      "runtimeValue": state.parentParams.MULTI_POLLUTANTS || '999',
    }
  ]
});

};
const changeHy = (data) => {
console.log('溯源行业改变 ---', data);

state.treeActive = data?.[data.length - 1] || '';

// 获取溯源列表
// getSyListData();
sendMsg();

// 给地图发消息
rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractive", // 消息名称
    data: [
        {
            "code": "value",
            "shareCode": "TRADE_CODE",
            "defaultValue": "",
            "runtimeValue": state.treeActive || '',
        }
    ]
});

};
const handleTrendAnalysis = () => {
console.log('趋势分析', state.parentParams.POINT_CODE, state.monitortime, global.regionaQuery.regionCode)
if (state.parentParams.POINT_CODE && state.monitortime && global.regionaQuery.regionCode) {
  const url = `${global.syTrendAnalysisUrl}?form[POINTCODE]=${state.parentParams.POINT_CODE}&form[monitorTime]=${state.monitortime}&regionCode=${global.regionaQuery.regionCode}`;
  console.log(url);
  window.open(url, '_blank');
}


};
const handleWryTypeSelectChange = () => {

// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "code",
      "shareCode": "ENTERPRISE_TYPE",
      "defaultValue": "",
      "runtimeValue": state.ENTERPRISE_TYPE || '',
    }
  ]
});
setTimeout(()=>{
  sendMsg();
},0)
};
const handlePageSizeSocket = () => {

// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "pageSize",
      "shareCode": "pageSize",
      "defaultValue": "10000",
      "runtimeValue": state.pageSize || '10000'
    }
  ]
});

};
const dispatchTask = (id) => {
/**
 * 派发任务
 */

if (id) {
  // 记录行ID
  localStorage.setItem('pointIds', id);
  window.open(state.dispatchUrl);
}

};
const moreDispatchTask = () => {

if (!state.selectData?.length) {
  ElementPlus.ElMessage({
    message: '请先选择一条数据，再进行任务派发！',
    type: 'warning',
  });
  return;
}
const idString = state.selectData.map(item => item.STANDENTERID).join(',');
localStorage.removeItem('pointIds');
localStorage.setItem('pointIds', idString);
const url = 'https://stfs.sthj.fs.gdgov.cn/vue3-fs-task-micro/#/dispatchinglayout/special-task-assign?visible=true&paramValue=fszxrw&taskParamType=2&hiddenBackBtn=1'
window.open(url, '_blank')
console.log('要对以下列表数据进行派发', idString, state.selectData);
};
const onSocket = () => {
// 页面中监听列表选中的列表项
rootData.rootOn('rootSocket:change', (socket) => {
  if (socket.type === "onInit") {
    console.log('初始化');
    setTimeout(() => {
      sendMsg();
    },0)
  }
  // 水环境要素-涉水企业列表页，进行了复选
  if (socket.type === "sySelectRow") {
    const { data } = socket;
    console.log('shjysSsqyNew - 水环境要素-溯源列表页，进行了复选', data);
    // 填充选中的列表
    state.selectData = data?.selectData || [];
  };
  if (socket.type === "syPop") {
    const { data } = socket;
    console.log('syPop - 点击主要原因', data);
    // 设置弹框使用的参数
    global.businessDialog.dialogParmas = {
      SCORE_ID: data.SCORE_ID || "",
      STANDENTERID: data.STANDENTERID || "",
    };
    // 显示溯源弹窗
    global.businessDialog.dialogName = 'waterSourceReportComponent';
  }
});
};
const sendMsg = () => {

// setTimeout(() => {

// }, 800);
  console.log('shjysSsqyNew 组件 - 执行 sendHtmlSocket')
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: "syPage",
    data: {
      interfaceId: state.interfaceId.sy,
      pageSize: state.pageSize,
      MONITORTYPE: '',
      MONITORTIME: state.monitortime,
      POINT_CODE: state.parentParams.POINT_CODE,
      MULTI_POLLUTANTS: state.parentParams.MULTI_POLLUTANTS,
      ENTERPRISE_TYPE: state.ENTERPRISE_TYPE,
      TRADE_CODE: state.treeActive,

    }
  });
};
const setData = () => {
state.parentParams = {
  POINT_CODE: '',
  ASSESSTYPE: '',
  DATA_FREQUENCY: '',
  MULTI_POLLUTANTS: 'None',
};

};
const onclick1733723979280 = () => {
// 执行自定义方法
handleBack();
};
const onchange1733895446402_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.ENTERPRISE_TYPE = value;
// 执行自定义方法
handleWryTypeSelectChange();
};
const onchange1734070589108_0_0 = (value,selectValueArr,selectValueItem) => {
// 执行自定义方法
changeHy(value);
};
const onclear1734590114522 = () => {
// 执行自定义方法
changeHy("");
};
const onclick1739514291790 = () => {
// 执行自定义方法
moreDispatchTask();
};
const oncellClick1733886529707_0_0 = (row,column,cell,event) => {
// 执行自定义方法
handleClickBack(column,row);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getWrwCheckboxOpts: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"DATA_FREQUENCY":"state.parentParams.DATA_FREQUENCY","MONITORTIME":"state.monitortime","POINT_CODE":"state.parentParams.POINT_CODE","interfaceId":"6d793644aea17e1abd93b0986532b446"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DATA_FREQUENCY":state.parentParams.DATA_FREQUENCY,"MONITORTIME":state.monitortime,"POINT_CODE":state.parentParams.POINT_CODE,"interfaceId":"6d793644aea17e1abd93b0986532b446"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"DATA_FREQUENCY":state.parentParams.DATA_FREQUENCY,"MONITORTIME":state.monitortime,"POINT_CODE":state.parentParams.POINT_CODE,"interfaceId":"6d793644aea17e1abd93b0986532b446"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getWrwCheckboxOpts'] = res.data;
                
     // console.log('获取 污染物复选', res);

state.wrwCheckboxOpts = [];
state.wrwCheckboxArr = [];

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data?.length) {
  // 填充下拉
  for (let i = 0; i < data.data.length; i++) {
    const elem = data.data[i];
    if (elem.POLLUTENAME) {
      state.wrwCheckboxOpts.push({
        ...elem,
        label: elem.POLLUTENAME || '-',
        value: elem.POLLUTECODE || '',
      });
    }
  }
  state.wrwCheckboxArr = state.wrwCheckboxOpts.map((item) => item.value) || [];
  state.parentParams.MULTI_POLLUTANTS = state.wrwCheckboxArr.join(',');
}
console.log('填充后的 污染物复选', state.wrwCheckboxOpts, state.wrwCheckboxArr, state.parentParams.MULTI_POLLUTANTS);

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.wrwCheckboxOpts = [];
state.wrwCheckboxArr = [];
      reject(error);
    });
  });
},
              },
// 接口函数
 getHeaderInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"ASSESSTYPE":"state.parentParams.ASSESSTYPE","POINT_CODE":"state.parentParams.POINT_CODE","MONITORTIME":"state.monitortime","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"state.interfaceId.header"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"ASSESSTYPE":state.parentParams.ASSESSTYPE,"POINT_CODE":state.parentParams.POINT_CODE,"MONITORTIME":state.monitortime,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":state.interfaceId.header},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"ASSESSTYPE":state.parentParams.ASSESSTYPE,"POINT_CODE":state.parentParams.POINT_CODE,"MONITORTIME":state.monitortime,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":state.interfaceId.header});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getHeaderInfo'] = res.data;
                
     // console.log('获取 溯源 头部信息', res);

// 清空原始数据
state.headerInfo = {
  // 点位名称
  POINT_NAME: '-',
  // 水质类别
  WATERQUALITYLEVELNAME: [
    {
      "state": "-",
      "stateColor": "#000",
      "stateBgColor": "#AAAAAA"
    }
  ],
  // 是否达标
  ISSTANDARDSSTR: [
    {
      "state": "-",
      "stateColor": "#fff",
      "stateBgColor": "#AAAAAA"
    }
  ],
  // 是否展示报警图标
  isShowAlarm: false,
  // 断面类型
  type: "-",
};

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data) {
  state.headerInfo.POINT_NAME = data.data.POINT_NAME || '-';
  state.headerInfo.WATERQUALITYLEVELNAME = [
    {
      "state": data.data.WATERQUALITYLEVELNAME || '-',
      "stateColor": "#000",
      "stateBgColor": getWaterLevelColor(data.data.WATERQUALITYLEVELNAME) || "#AAAAAA",
    }
  ];
  state.headerInfo.ISSTANDARDSSTR = [
    {
      "state": data.data.ISSTANDARDSSTR || '-',
      "stateColor": "#fff",
      "stateBgColor": getWaterLevelColor(data.data.ISSTANDARDSSTR) || "#AAAAAA",
    }
  ];

  // 断面类型
  if (state.interfaceId.header === 'c88965d570ad1d00197e1fee3a00c649') {
    // 手工
    if (data.data?.AUTO_POINTCODE) {
      state.headerInfo.type = '手&自';
    } else {
      state.headerInfo.type = '手工';
    }
  } else {
    // 自动站
    state.headerInfo.type = '自动';
  }
}

console.log('获取 溯源 头部信息', state.headerInfo);

// {
//     "POINT_CODE": "C17",
//     "POINT_NAME": "新桥河新桥公园",
//     "WATERQUALITYLEVELTARGETNAME": "Ⅴ类",
//     "WATER_CODE": "HD17260100",
//     "WATER_NAME": "新桥河",
//     "REGION_NAME": "新桥街道",
//     "WSYSTEM_NAME": "茅洲河流域",
//     "AUTO_POINTCODE": "",
//     "AUTO_POINTNAME": "",
//     "AUTO_LONGITUDE": "",
//     "AUTO_LATITUDE": "",
//     "CONNECT_PROPERTY": "",
//     "CODE_CONTROLLEVEL": "4",
//     "CONTROLLEVEL": "其他",
//     "LONGITUDE": "113.819677",
//     "LATITUDE": "22.748021",
//     "CODE_WATERQUALITYLEVEL": "4",
//     "WATERQUALITYLEVELNAME": "Ⅳ类",
//     "ISSTANDARDS": "1",
//     "ISSTANDARDSSTR": "达标",
//     "PRIMPOLLUTE": "总磷(0.10)",
//     "OVERPOLLUTE": ""
// }
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 清空原始数据
state.headerInfo = {
  // 点位名称
  POINT_NAME: '-',
  // 水质类别
  WATERQUALITYLEVELNAME: [
    {
      "state": "-",
      "stateColor": "#000",
      "stateBgColor": "#AAAAAA"
    }
  ],
  // 是否达标
  ISSTANDARDSSTR: [
    {
      "state": "-",
      "stateColor": "#fff",
      "stateBgColor": "#AAAAAA"
    }
  ],
  // 是否展示报警图标
  isShowAlarm: false,
  // 断面类型
  type: "-",
};
      reject(error);
    });
  });
},
              },
// 接口函数
 getWryOpts: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"interfaceId":"2afc2577cedb322ade4bfaee49a84262"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"2afc2577cedb322ade4bfaee49a84262"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"interfaceId":"2afc2577cedb322ade4bfaee49a84262"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getWryOpts'] = res.data;
                
     // console.log('获取 污染源下拉', res);

state.wryOpts = [];
state.ENTERPRISE_TYPE = '';

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data?.length) {
  // 填充下拉
  for (let i = 0; i < data.data.length; i++) {
    const elem = data.data[i];
    if (elem.NAME) {
      state.wryOpts.push({
        ...elem,
        label: elem.NAME || '-',
        value: elem.CODE || '',
      });
    }
  }
}
// console.log('填充后的 污染源下拉', state.wryOpts);

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.wryOpts = [];
state.ENTERPRISE_TYPE = '';
      reject(error);
    });
  });
},
              },
// 接口函数
 getHyData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"interfaceId":"63b40b7c245e715738bef205a8f7a487"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"63b40b7c245e715738bef205a8f7a487"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"interfaceId":"63b40b7c245e715738bef205a8f7a487"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getHyData'] = res.data;
                
             // console.log('获取树 ---', res.data);
        state.treeData = [];
        if (res.data?.head?.statusCode === '200' && res.data?.data?.length) {
          // 格式化树
          const listToTree = (data, idKey, parentKey) => {
            var tree = [];
            var mappedArr = {};
            var arrElem;
            var mappedElem;

            // 创建映射表
            for (var i = 0, len = data.length; i < len; i++) {
              arrElem = {
                ...data[i],
                label: data[i].NAME,
                id: data[i].ID,
              };
              mappedArr[arrElem[idKey]] = { ...arrElem, children: [] };
            }

            // 构建树结构
            for (var id in mappedArr) {
              if (mappedArr.hasOwnProperty(id)) {
                mappedElem = mappedArr[id];
                if (mappedElem[parentKey] && mappedArr[mappedElem[parentKey]]) {
                  mappedArr[mappedElem[parentKey]].children.push(mappedElem);
                } else {
                  tree.push(mappedElem);
                }
              }
            }
            return tree;
          };
          // 填充树
          state.treeData = listToTree(res.data.data, 'ID', 'PID');
          console.log('拼接好的树', state.treeData);
        }
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.treeData = [];
      reject(error);
    });
  });
},
              },
// 接口函数
 getAlarmList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"DATA_FREQUENCY":"state.parentParams.DATA_FREQUENCY","ASSESSTYPE":"state.parentParams.ASSESSTYPE","POINT_CODE":"state.parentParams.POINT_CODE","MONITORTIME":"state.monitortime","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"798ce52d5d72109c6f09562f7e5a665c"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DATA_FREQUENCY":state.parentParams.DATA_FREQUENCY,"ASSESSTYPE":state.parentParams.ASSESSTYPE,"POINT_CODE":state.parentParams.POINT_CODE,"MONITORTIME":state.monitortime,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"798ce52d5d72109c6f09562f7e5a665c"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"DATA_FREQUENCY":state.parentParams.DATA_FREQUENCY,"ASSESSTYPE":state.parentParams.ASSESSTYPE,"POINT_CODE":state.parentParams.POINT_CODE,"MONITORTIME":state.monitortime,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"798ce52d5d72109c6f09562f7e5a665c"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getAlarmList'] = res.data;
                
     // console.log('获取 报警信息列表', res);

// 清空原始数据
state.alarmList = [];
state.headerInfo.isShowAlarm = false; // 是否展示报警列表
state.isShowWrwCheckbox = false; // 是否展示污染物复选列表

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data?.length) {
  state.alarmList = data.data.map((item) => ({
    ...item,
    MONITORTIME: item.MONITORTIME || '-', // 报警时间
    ALARM_TYPE_NAME: item.ALARM_TYPE_NAME || '-', // 报警类型
    ALARM_DESC: item.ALARM_DESC || '-', // 报警原因
  }))
  // 是否显示报警图标，如果有列表数据，就显示
  state.headerInfo.isShowAlarm = true;
  // 是否展示污染物复选列表，如果有列表数据，就显示
  state.isShowWrwCheckbox = true;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.alarmList = [];
state.headerInfo.isShowAlarm = false; // 是否展示报警列表
state.isShowWrwCheckbox = false; // 是否展示污染物复选列表
      reject(error);
    });
  });
},
              },
// 接口函数
 getMonitortime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"CODE_WQDATASOURCETYPE":"surfaceWater","AREA_CODE":"","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"CODE_WQDATASOURCETYPE":"surfaceWater","AREA_CODE":"","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"CODE_WQDATASOURCETYPE":"surfaceWater","AREA_CODE":"","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMonitortime'] = res.data;
                
     // console.log('获取 控制详情-监测时间', res);

state.monitortime = '';

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data) {
  state.monitortime = data.data.MONITORTIME || '';
}
// console.log('填充后的 控制详情-监测时间', state.monitortime);

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.monitortime = '';
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getHeaderInfo', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getAlarmList', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-waterTraceabilityContentOld', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
// 执行自定义方法
initPage();
onMounted(() => {
setPageScale('t-l-c-waterTraceabilityContentOld', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
onSocket();
});
onUnmounted(() => {
// 页面离开时的操作
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
// 执行自定义方法
setData();
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tTextx0x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x0.default, componentState.tTextx0x0x0?.[state.screenSize]));

 const tTextx0x0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x1.default, componentState.tTextx0x0x1?.[state.screenSize]));

 const tTextx0x0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x0x2.default, componentState.tTextx0x0x2?.[state.screenSize]));

 const tListCardCommonx0x0x3ComputedData = computed(() => _.merge({}, componentState.tListCardCommonx0x0x3.default, componentState.tListCardCommonx0x0x3?.[state.screenSize]));

 const tListCardCommonx0x0x4ComputedData = computed(() => _.merge({}, componentState.tListCardCommonx0x0x4.default, componentState.tListCardCommonx0x0x4?.[state.screenSize]));

 const tRectx0x0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x0x5.default, componentState.tRectx0x0x5?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tRowx0x4ComputedData = computed(() => _.merge({}, componentState.tRowx0x4.default, componentState.tRowx0x4?.[state.screenSize]));

 const tColx0x4x0ComputedData = computed(() => _.merge({}, componentState.tColx0x4x0.default, componentState.tColx0x4x0?.[state.screenSize]));

 const tTextx0x4x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x4x0x0.default, componentState.tTextx0x4x0x0?.[state.screenSize]));

 const tSelectx0x4x0x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x4x0x1.default, componentState.tSelectx0x4x0x1?.[state.screenSize]));

 const tTextx0x4x0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x4x0x2.default, componentState.tTextx0x4x0x2?.[state.screenSize]));

 const tCascaderx0x4x0x3ComputedData = computed(() => _.merge({}, componentState.tCascaderx0x4x0x3.default, componentState.tCascaderx0x4x0x3?.[state.screenSize]));

 const tRectx0x4x0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4x0x4.default, componentState.tRectx0x4x0x4?.[state.screenSize]));

 const tIframex0x4x2ComputedData = computed(() => _.merge({}, componentState.tIframex0x4x2.default, componentState.tIframex0x4x2?.[state.screenSize]));

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
tTextx0x0x0ComputedData,
tTextx0x0x1ComputedData,
tTextx0x0x2ComputedData,
tListCardCommonx0x0x3ComputedData,
tListCardCommonx0x0x4ComputedData,
tRectx0x0x5ComputedData,
tComponentx0x1ComputedData,
tTextx0x2ComputedData,
tRectx0x3ComputedData,
tRowx0x4ComputedData,
tColx0x4x0ComputedData,
tTextx0x4x0x0ComputedData,
tSelectx0x4x0x1ComputedData,
tTextx0x4x0x2ComputedData,
tCascaderx0x4x0x3ComputedData,
tRectx0x4x0x4ComputedData,
tIframex0x4x2ComputedData,
onclick1733723979280,
onchange1733895446402_0_0,
onchange1734070589108_0_0,
onclear1734590114522,
onclick1739514291790,
};
},
}
</script>

<style scoped>
.t-l-c-waterTraceabilityContentOld {
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
background-color: rgba(255, 255, 255, 0);
}
.t-l-c-waterTraceabilityContentOld .waterTraceabilityContent-t-row-0-0 {
position: absolute !important;
top: 9px;
left: 20px;
width: 419px;
height: 47px;
pointer-events: auto;
animation-name: ;
}

.t-l-c-waterTraceabilityContentOld .waterTraceabilityContent-t-text-0-0-0 {
position: unset;
top: 18px;
left: 12px;
width: 43px;
height: 18px;
pointer-events: auto;
}

.t-l-c-waterTraceabilityContentOld .waterTraceabilityContent-t-text-0-0-1 {
position: unset;
top: 205.12660047743043px;
left: 469.8092289677372px;
width: auto;
height: 21px;
pointer-events: auto;
}

.t-l-c-waterTraceabilityContentOld .waterTraceabilityContent-t-text-0-0-2 {
position: unset;
top: -106px;
left: 260px;
width: 40px;
height: 20px;
pointer-events: auto;
}

.t-l-c-waterTraceabilityContentOld .waterTraceabilityContent-t-list-card-common-0-0-3 {
position: unset;
top: 207.12660047743043px;
left: 672.8092289677372px;
width: 50px;
height: 20px;
pointer-events: auto;
}

.t-l-c-waterTraceabilityContentOld .waterTraceabilityContent-t-list-card-common-0-0-4 {
position: unset;
top: 241px;
left: 634px;
width: 50px;
height: 20px;
pointer-events: auto;
}

.t-l-c-waterTraceabilityContentOld .waterTraceabilityContent-t-rect-0-0-5 {
position: unset;
top: 206.12660047743043px;
left: 852.8092289677372px;
width: 20px;
height: 20px;
pointer-events: auto;
}

.t-l-c-waterTraceabilityContentOld .waterTraceabilityContent-t-component-0-1 {
position: absolute !important;
top: 68px;
left: 20px;
width: 410px;
height: 31px;
pointer-events: auto;
}

.t-l-c-waterTraceabilityContentOld .waterTraceabilityContent-t-text-0-2 {
position: absolute !important;
top: 73px;
left: 60px;
width: 130px;
height: 19px;
pointer-events: auto;
}

.t-l-c-waterTraceabilityContentOld .waterTraceabilityContent-t-rect-0-3 {
position: absolute !important;
top: 60px;
left: 2px;
width: 450px;
height: 1px;
pointer-events: auto;
}

.t-l-c-waterTraceabilityContentOld .waterTraceabilityContent-t-row-0-4 {
position: absolute !important;
top: 111px;
left: 19px;
width: 412px;
height: 771px;
pointer-events: auto;
overflow: visible;
display: block;
}

.t-l-c-waterTraceabilityContentOld .waterTraceabilityContent-t-col-0-4-0 {
position: relative;
top: null;
left: null;
width: 100%;
height: 50px;
pointer-events: auto;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
margin-top: 0px;
padding-left: 0px;
}

.t-l-c-waterTraceabilityContentOld .waterTraceabilityContent-t-text-0-4-0-0 {
position: unset;
top: 319px;
left: 19px;
width: 100px;
height: 19px;
pointer-events: auto;
}

.t-l-c-waterTraceabilityContentOld .waterTraceabilityContent-t-select-0-4-0-1 {
position: unset;
top: 311px;
left: 101px;
width: 105px;
height: 32px;
pointer-events: auto;
}

.t-l-c-waterTraceabilityContentOld .waterTraceabilityContent-t-text-0-4-0-2 {
position: unset;
top: 319px;
left: 237px;
width: 100px;
height: 16px;
pointer-events: auto;
}

.t-l-c-waterTraceabilityContentOld .waterTraceabilityContent-t-cascader-0-4-0-3 {
position: unset;
top: 153px;
left: 237px;
width: 116px;
height: 32px;
pointer-events: auto;
}

.t-l-c-waterTraceabilityContentOld .waterTraceabilityContent-t-rect-0-4-0-4 {
position: unset;
top: 312px;
left: 609px;
width: 100px;
height: 33px;
pointer-events: auto;
}

.t-l-c-waterTraceabilityContentOld .waterTraceabilityContent-t-iframe-0-4-2 {
position: unset;
top: 65px;
left: 489px;
width: 409px;
height: 710px;
pointer-events: auto;
}
</style>
