<template>
  <div id="t-l-c-ssqyDialog" class="t-l-c-ssqyDialog" ><t-rect id="t-rect-8252.1a4ade4f4" class="ssqyDialog-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-col id="t-col-a961.3e5dddc31" class="ssqyDialog-t-col-0-1"  :span="tColx0x1ComputedData.span" :offset="tColx0x1ComputedData.offset" :push="tColx0x1ComputedData.push" :pull="tColx0x1ComputedData.pull" :c-style="tColx0x1ComputedData.cStyle"><t-row id="t-row-df15.098263665" class="ssqyDialog-t-row-0-1-0"  :c-style="tRowx0x1x0ComputedData.cStyle" :gutter="tRowx0x1x0ComputedData.gutter" :justify="tRowx0x1x0ComputedData.justify" :align="tRowx0x1x0ComputedData.align"><t-col id="t-col-ce7c.9ac30596b" class="ssqyDialog-t-col-0-1-0-0"  :span="tColx0x1x0x0ComputedData.span" :offset="tColx0x1x0x0ComputedData.offset" :push="tColx0x1x0x0ComputedData.push" :pull="tColx0x1x0x0ComputedData.pull" :c-style="tColx0x1x0x0ComputedData.cStyle"><t-rect id="t-rect-5577.0975bb8d2" class="ssqyDialog-t-rect-0-1-0-0-0"  :tip="tRectx0x1x0x0x0ComputedData.tip" :label="tRectx0x1x0x0x0ComputedData.label" :active="tRectx0x1x0x0x0ComputedData.active" :c-style="tRectx0x1x0x0x0ComputedData.cStyle"></t-rect><t-tabs id="t-tabs-5b34.03728285a" class="ssqyDialog-t-tabs-0-1-0-0-1"  :data="replaceCssVariables(filterData(state.tabList, componentPropBindingMap?.['t-tabs-5b34.03728285a']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active-tab="replaceCssVariables(filterData(state.activeTab, componentPropBindingMap?.['t-tabs-5b34.03728285a']['activeTab'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :tab-position-extend="tTabsx0x1x0x0x1ComputedData.tabPositionExtend" :stretch="tTabsx0x1x0x0x1ComputedData.stretch" :c-style="tTabsx0x1x0x0x1ComputedData.cStyle" @tab-click="ontabClick1733991846829"></t-tabs></t-col><t-col id="t-col-7d7c.d036a9af4" class="ssqyDialog-t-col-0-1-0-1"  :span="tColx0x1x0x1ComputedData.span" :offset="tColx0x1x0x1ComputedData.offset" :push="tColx0x1x0x1ComputedData.push" :pull="tColx0x1x0x1ComputedData.pull" :c-style="tColx0x1x0x1ComputedData.cStyle"><t-component id="t-component-75a5.51539ef39" class="ssqyDialog-t-component-0-1-0-1-0"  :name="replaceCssVariables(filterData(state.activeTab, componentPropBindingMap?.['t-component-75a5.51539ef39']['name'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tComponentx0x1x0x1x0ComputedData.cStyle" :src="tComponentx0x1x0x1x0ComputedData.src" :component-name="replaceCssVariables(filterData(state.activeTab, componentPropBindingMap?.['t-component-75a5.51539ef39']['componentName'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-component></t-col></t-row><t-row id="t-row-6365.97c68ed82" class="ssqyDialog-t-row-0-1-1"  :c-style="tRowx0x1x1ComputedData.cStyle" :gutter="tRowx0x1x1ComputedData.gutter" :justify="tRowx0x1x1ComputedData.justify" :align="tRowx0x1x1ComputedData.align"><t-col id="t-col-a39e.8be399907" class="ssqyDialog-t-col-0-1-1-0"  :span="tColx0x1x1x0ComputedData.span" :offset="tColx0x1x1x0ComputedData.offset" :push="tColx0x1x1x0ComputedData.push" :pull="tColx0x1x1x0ComputedData.pull" :c-style="tColx0x1x1x0ComputedData.cStyle"><t-text id="t-text-fce3.11f1f7508" class="ssqyDialog-t-text-0-1-1-0-0"  :label="tTextx0x1x1x0x0ComputedData.label" :editable="tTextx0x1x1x0x0ComputedData.editable" :c-style="tTextx0x1x1x0x0ComputedData.cStyle" @click="onclick1769508556350_0_0"></t-text><t-text v-if="state.showSource === true" id="t-text-4e6d.a19cece3e" class="ssqyDialog-t-text-0-1-1-0-2"  :label="tTextx0x1x1x0x2ComputedData.label" :editable="tTextx0x1x1x0x2ComputedData.editable" :c-style="tTextx0x1x1x0x2ComputedData.cStyle" @click="onclick1734071402189"></t-text><t-text id="t-text-19bd.a994fa29f" class="ssqyDialog-t-text-0-1-1-0-4"  :label="tTextx0x1x1x0x4ComputedData.label" :editable="tTextx0x1x1x0x4ComputedData.editable" :c-style="tTextx0x1x1x0x4ComputedData.cStyle" @click="onclick1734067550409"></t-text></t-col></t-row></t-col></div>
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
import { TCol, TComponent, TRect, TRow, TTabs, TText } from '@ths/design';

export default {
  components: {
    TCol,
    TComponent,
    TRect,
    TRow,
    TTabs,
    TText,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-8252.1a4ade4f4":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-col-a961.3e5dddc31":{"attributeName":"tColx0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-row-df15.098263665":{"attributeName":"tRowx0x1x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-ce7c.9ac30596b":{"attributeName":"tColx0x1x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-5577.0975bb8d2":{"attributeName":"tRectx0x1x0x0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-5b34.03728285a":{"attributeName":"tTabsx0x1x0x0x1","data":{"filters":[]},"activeTab":{"filters":[]},"tabPositionExtend":{"filters":[]},"stretch":{"filters":[]},"cStyle":{"filters":[]}},"t-col-7d7c.d036a9af4":{"attributeName":"tColx0x1x0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-75a5.51539ef39":{"attributeName":"tComponentx0x1x0x1x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-row-6365.97c68ed82":{"attributeName":"tRowx0x1x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-a39e.8be399907":{"attributeName":"tColx0x1x1x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-fce3.11f1f7508":{"attributeName":"tTextx0x1x1x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-630e.1af9131a3":{"attributeName":"tTextx0x1x1x0x1"},"t-text-4e6d.a19cece3e":{"attributeName":"tTextx0x1x1x0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-9589.b205f39e4":{"attributeName":"tTextx0x1x1x0x3"},"t-text-19bd.a994fa29f":{"attributeName":"tTextx0x1x1x0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
// 页面内注入全局变量和事件
const rootData = inject('root');
const global = reactive({
...toRefs(rootData)
});
// 路由
const route = useRoute();
// 创建 DOM 引用

// 当前页面使用的变量
let state = reactive({
   screenSize: "",
   pointName: "",
   isShowYSImg: false,
   showSource: false,
   tabList: [{"label":"基本信息","name":"ssqyBaseInfoComponent"},{"label":"监测信息","name":"ssqyMonitoringInformationComponent"},{"label":"视频监控","name":"ssqyVideoSurveillanceComponent"},{"label":"历史任务清单","name":"historyTaskComponent"},{"label":"信访投诉","name":"testQuestionComponent"}],
   point: {"lon":"","lat":""},
   activeTab: "ssqyBaseInfoComponent",
   baseInfo: {"title":"-","controlLevel":"-","waterQuality":[{"state":"-","stateColor":"#000","stateBgColor":""}],"standard":[{"state":"-","stateColor":"#fff","stateBgColor":""}],"alarmText":"","alarmShow":false,"type":"-"},
   pointCode: "",
   assessType: "",
   monitorTime: "",
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
            default: {"width":"100%","height":"100%","position":"unset","left":"0px","top":"-1px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px Solid rgba(0,0,0,1)","borderTop":"1px Solid rgba(0,0,0,1)","borderRight":"1px Solid rgba(0,0,0,1)","borderBottom":"1px Solid rgba(0,0,0,1)","animationName":"","borderDirection":"all","border":"unset !important"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","position":"unset","left":"0px","top":"-1px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px Solid rgba(0,0,0,1)","borderTop":"1px Solid rgba(0,0,0,1)","borderRight":"1px Solid rgba(0,0,0,1)","borderBottom":"1px Solid rgba(0,0,0,1)","animationName":"","borderDirection":"all","border":"unset !important"}}}, 
 },
},
tColx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"100%","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"0px","flexWrap":"wrap","flexDirection":"column","gap":"auto","paddingTop":"20px","paddingRight":"unset"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"0px","flexWrap":"wrap","flexDirection":"column","gap":"auto","paddingTop":"20px","paddingRight":"unset"}}}, 
 },
},
tRowx0x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"calc(100% - 72px)","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"calc(100% - 72px)","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"0px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x1x0x0: {
defaultStyle: {
            default: {"width":"100px","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"15px","paddingRight":"15px"},
            
            },
 default: { 
 
span:4,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","paddingLeft":"15px","paddingRight":"15px"}}}, 
 },
},
tRectx0x1x0x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"100%","minWidth":"140px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","left":"21px","top":"2px","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","minWidth":"140px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","left":"21px","top":"2px","position":"unset"}}}, 
 },
},
tTabsx0x1x0x0x1: {
defaultStyle: {
            default: {"width":"166px","height":"auto","position":"absolute !important","left":"50% !important","transform":"translateX(-50%)","top":"10px !important","backgroundColor":"","display":"flex","paddingLeft":"0px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","flexDirection":"row","alignItems":"center","justifyContent":"center"},
            
            },
 default: { 
 
data:[{"label":"基本信息","name":"ssqyBaseInfoComponent"},{"label":"监测信息","name":"ssqyMonitoringInformationComponent"},{"label":"视频监控","name":"ssqyVideoSurveillanceComponent"},{"label":"历史任务清单","name":"historyTaskComponent"},{"label":"信访投诉","name":"testQuestionComponent"}],
activeTab:"ssqyBaseInfoComponent",
tabPositionExtend:"right",
stretch:false,
cStyle:{"wrapper":{"default":{"width":"166px","height":"auto","position":"absolute !important","left":"50% !important","transform":"translateX(-50%)","top":"10px !important","backgroundColor":"","display":"flex","paddingLeft":"0px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","flexDirection":"row","alignItems":"center","justifyContent":"center"}},"itemActiveBorder":{"default":{"width":"0px","height":"0%","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","display":"none"}},"itemWrapper":{"default":{"lineHeight":"34px","color":"var(--business-text-avianize)","backgroundColor":"rgba(44, 129, 187, 0)","borderTopLeftRadius":"8px","borderTopRightRadius":"8px","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px","width":"101%","min-width":"100%","max-width":"100%","textAlign":"center !important","marginBottom":"17px","paddingBottom":"0px","borderBottom":"1px solid rgba(23,62,228,0)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","left":"6px","height":"","fontSize":"var(--business-text-size-16)","paddingLeft":"4px !important","paddingRight":"4px !important"},"hover":{"color":"var(--business-tab-third-active-border)"},"active":{"box-shadow":"var(--business-tab-third-active-shadow) 0px 0px 18px 0px inset","background":"var(--business-tab-third-active-fill)","color":"var(--business-tab-third-active-text)","borderLeft":"1px solid var(--business-tab-third-active-border)","borderTop":"1px solid var(--business-tab-third-active-border)","borderRight":"1px solid var(--business-tab-third-active-border)","borderBottom":"1px solid var(--business-tab-third-active-border)","borderTopLeftRadius":"8px","borderTopRightRadius":"8px","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px","fontSize":"var(--business-text-size-16) !important"},"disabled":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","textAlign":"center"}},"itemLabel":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","textAlign":"center","display":"block","fontSize":"16"},"hover":{"textAlign":"center","fontSize":"16"},"active":{"textAlign":"center","fontSize":"var(--business-text-size-16)"}},"prevIcon":{"default":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","display":"none"}},"nextIcon":{"default":{"display":"none"}},"itemIcon":{"default":{"display":"none"}}}, 
 },
},
tColx0x1x0x1: {
defaultStyle: {
            default: {"width":"100px","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","paddingRight":"0px"},
            
            },
 default: { 
 
span:20,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","paddingRight":"0px"}}}, 
 },
},
tComponentx0x1x0x1x0: {
defaultStyle: {
            default: {"width":"calc(100% - 15px)","height":"100%","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"absolute !important","left":"0px","top":"0px","overflow-x":"hidden","overflow-y":"auto"},
            
            },
 default: { 
 
name:"ssqyBaseInfoComponent",
cStyle:{"wrapper":{"default":{"width":"calc(100% - 15px)","height":"100%","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"absolute !important","left":"0px","top":"0px","overflow-x":"hidden","overflow-y":"auto"}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/waterDialogFSBaseInfo",
componentName:"ssqyBaseInfoComponent", 
 },
},
tRowx0x1x1: {
defaultStyle: {
            default: {"width":"100%","height":"52px","position":"unset","left":"-1px","top":"599px","backgroundColor":"var(--business-show-bg15)","borderDirection":"borderTop","borderLeft":"unset","borderTop":"1px Solid var(--business-show-bg60)","borderRight":"unset","borderBottom":"unset","border":"auto !important","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomRightRadius":"16px","borderBottomLeftRadius":"16px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"52px","position":"unset","left":"-1px","top":"599px","backgroundColor":"var(--business-show-bg15)","borderDirection":"borderTop","borderLeft":"unset","borderTop":"1px Solid var(--business-show-bg60)","borderRight":"unset","borderBottom":"unset","border":"auto !important","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomRightRadius":"16px","borderBottomLeftRadius":"16px"}}},
gutter:0,
justify:"end",
align:"middle", 
 },
},
tColx0x1x1x0: {
defaultStyle: {
            default: {"width":"100%","height":"52px","display":"flex","justifyContent":"right","alignItems":"center","paddingRight":"20px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"52px","display":"flex","justifyContent":"right","alignItems":"center","paddingRight":"20px"}}}, 
 },
},
tTextx0x1x1x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--pop-footer-btn-text)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--pop-footer-btn-bg)","textAlign":"left","lineHeight":"normal","cursor":"pointer","animationName":"","backgroundImage":"var(--business-dialog-icon-around)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"8px 50%","-webkit-mask-position":"","paddingLeft":"24px","marginLeft":"20px","paddingRight":"10px","paddingTop":"4px","paddingBottom":"4px"},
            
            },
 default: { 
 
label:"周边查询",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--pop-footer-btn-text)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--pop-footer-btn-bg)","textAlign":"left","lineHeight":"normal","cursor":"pointer","animationName":"","backgroundImage":"var(--business-dialog-icon-around)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"8px 50%","-webkit-mask-position":"","paddingLeft":"24px","marginLeft":"20px","paddingRight":"10px","paddingTop":"4px","paddingBottom":"4px"},"hover":{"backgroundColor":"var(--pop-footer-btn-bg-hover)"}}}, 
 },
},
tTextx0x1x1x0x2: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--pop-footer-btn-text)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--pop-footer-btn-bg)","textAlign":"left","lineHeight":"normal","cursor":"pointer","backgroundImage":"var(--business-dialog-icon-sy)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"8px 50%","-webkit-mask-position":"","paddingLeft":"24px","marginLeft":"20px","paddingRight":"10px","paddingTop":"4px","paddingBottom":"4px"},
            
            },
 default: { 
 
label:"溯源",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--pop-footer-btn-text)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--pop-footer-btn-bg)","textAlign":"left","lineHeight":"normal","cursor":"pointer","backgroundImage":"var(--business-dialog-icon-sy)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"8px 50%","-webkit-mask-position":"","paddingLeft":"24px","marginLeft":"20px","paddingRight":"10px","paddingTop":"4px","paddingBottom":"4px"},"hover":{"backgroundColor":"var(--pop-footer-btn-bg-hover)"}}}, 
 },
},
tTextx0x1x1x0x4: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--pop-footer-btn-text)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--pop-footer-btn-bg)","textAlign":"left","lineHeight":"normal","position":"unset","left":"870px","top":"670px","cursor":"pointer","animationName":"","backgroundImage":"var(--business-dialog-icon-dd)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"8px 50%","-webkit-mask-position":"","paddingLeft":"24px","marginLeft":"20px","paddingRight":"10px","paddingTop":"4px","paddingBottom":"4px"},
            
            },
 default: { 
 
label:"调度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--pop-footer-btn-text)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--pop-footer-btn-bg)","textAlign":"left","lineHeight":"normal","position":"unset","left":"870px","top":"670px","cursor":"pointer","animationName":"","backgroundImage":"var(--business-dialog-icon-dd)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"8px 50%","-webkit-mask-position":"","paddingLeft":"24px","marginLeft":"20px","paddingRight":"10px","paddingTop":"4px","paddingBottom":"4px"},"hover":{"backgroundColor":"var(--pop-footer-btn-bg-hover)"}}}, 
 },
},
});
const initPageData = () => {

// // 判断全局变量里有没有传参，没的话先用模拟数据
// if (!global.businessDialog.dialogParmas) {
//   // 手工
//   global.businessDialog.dialogParmas = {
//     "pointCode": "Z15",
//     "assessType": "monthly",
//     "monitorTime": "2022-03"
//   }
//   // 自动-天
//   // global.businessDialog.dialogParmas = {
//   //   dialogType: 'autoDay',
//   //   "pointCode": "999104",
//   //   "assessType": "monthly",
//   //   "monitorTime": "2022-03-01"
//   // }
//   // 自动-小时
//   // global.businessDialog.dialogParmas = {
//   //   dialogType: 'autoHour',
//   //   "pointCode": "999104",
//   //   "assessType": "monthly",
//   //   "monitorTime": "2022-03-28 12"
//   // }
// }
// console.log(global.businessDialog.dialogParmas, '饮用水接收的参数');
// const selectCode = localStorage.getItem('isShowSubjectSelect');
// if (selectCode === "a30fa057-e0bd-472f-a86b-a8f25e6b33cc") {
//   state.tabList = [
//     {
//       "label": "基本信息",
//       "name": "waterDialogHandBaseInfoComponent"
//     },
//     {
//       "label": "多维分析",
//       "name": "waterDialogFSAnalysisComponent"
//     },
//     {
//       "label": "视频监控",
//       "name": "tapWaterVideoComponent"
//     },
//   ];
//   // 溶解氧调控
//   if (global.businessDialog.dialogParmas.pointCode === 'A350700_0002' || global.businessDialog.dialogParmas.pointCode === '3507000002') {
//     state.tabList = [
//       {
//         "label": "基本信息",
//         "name": "waterDialogHandBaseInfoComponent"
//       },
//       {
//         "label": "多维分析",
//         "name": "waterDialogFSAnalysisComponent"
//       },
//       {
//         "label": "视频监控",
//         "name": "tapWaterVideoComponent"
//       },
//       {
//         "label": "溶解氧调控",
//         "name": "oxygenControlComponent"
//       }
//     ];
//   }
// } else {
//   state.tabList = [
//     {
//       "label": "基本信息",
//       "name": "waterDialogHandBaseInfoComponent"
//     },
//     {
//       "label": "时空多维分析",
//       "name": "DwfxSkdwfxComponent"
//     },
//     {
//       "label": "多指标时空分析",
//       "name": "DwfxZbdwglfxComponent"
//     }
//   ];
//   // 溶解氧调控
//   if (global.businessDialog.dialogParmas.pointCode === 'A350700_0002' || global.businessDialog.dialogParmas.pointCode === '3507000002') {
//     state.tabList = [
//       {
//         "label": "基本信息",
//         "name": "waterDialogHandBaseInfoComponent"
//       },
//       {
//         "label": "时空多维分析",
//         "name": "DwfxSkdwfxComponent"
//       },
//       {
//         "label": "多指标时空分析",
//         "name": "DwfxZbdwglfxComponent"
//       },
//       {
//         "label": "溶解氧调控",
//         "name": "oxygenControlComponent"
//       }
//     ];
//   }
// }

// if (global.businessDialog.dialogParmas.subjectName === 'cwqi') {
//   state.tabList = [
//     {
//       "label": "基本信息",
//       "name": "waterDialogHandBaseInfoComponent"
//     },
//     {
//       "label": "综合污染指数",
//       "name": "cwqiComprehensivePollutionComponent"
//     },
//     {
//       "label": "指标尺度分析",
//       "name": "cwqiIndicatorScaleAnalysisComponent"
//     },
//     {
//       "label": "时空多维分析",
//       "name": "DwfxSkdwfxComponent"
//     },
//     {
//       "label": "多指标时空分析",
//       "name": "DwfxZbdwglfxComponent"
//     }
//   ];
// }
// state.tabList.push({
//   "label": "信访投诉",
//   "name": "testQuestionComponent"
// });
// // 处理参数
// state.monitorTime = global.businessDialog.dialogParmas.monitorTime;
// state.assessType = global.businessDialog.dialogParmas.assessType || 'monthly';
// state.pointCode = global.businessDialog.dialogParmas.pointCode;
// // 溯源是否显示
// state.showSource = global.businessDialog.dialogParmas.showSource || false;

// if (global.businessDialog.dialogParmas?.dialogType === 'autoDay') {
//   // 自动断面-天
//   state.tabList[0].name = 'waterDialogAutoDayBaseInfoComponent';
//   // 获取基本信息接口
//   apiRegistry.getBaseInfo.request('7e646485d5e40eb0cb831d4a5520f81a');
//   // 获取报警数据
//   apiRegistry.getAlarmData.request(2, 0);
// } else if (global.businessDialog.dialogParmas?.dialogType === 'autoHour') {
//   // 自动断面-小时
//   state.tabList[0].name = 'waterDialogAutoHourBaseInfoComponent';
//   // 获取基本信息接口
//   apiRegistry.getBaseInfo.request('6b55f61844ccd520f3f9a5a4f227f95e');
//   // 获取报警数据
//   apiRegistry.getAlarmData.request(1, 0);
// } else {
//   // 手工断面
//   state.tabList[0].name = 'waterDialogHandBaseInfoComponent';
//   // 获取基本信息接口
//   apiRegistry.getBaseInfo.request('c88965d570ad1d00197e1fee3a00c649');
//   // 获取报警数据
//   apiRegistry.getAlarmData.request(4, 1);
// }

// // 默认选择第一个tab
// state.activeTab = state.tabList[0].name;
// console.log('断面弹窗激活的组件 20251015', state.tabList, state.activeTab);



console.log(global.businessDialog.dialogParmas, '参数');
state.pointCode = global.businessDialog.dialogParmas.POINT_CODE || '';
state.pointName = global.businessDialog.dialogParmas.POINT_NAME || '';
// const randomTimestampStr = Math.random().toString(36).slice(2) + Date.now();
// state.random = randomTimestampStr;

state.point.lat = global.businessDialog.dialogParmas.LATITUDE || '';
state.point.lon = global.businessDialog.dialogParmas.LONGITUDE || '';

};
const handleClickClose = () => {
// 消息内容
let code = 'surfaceWater_details';
if (global.businessDialog.dialogParmas?.dialogType === 'autoDay') {
  code = 'auto_day';
} else if (global.businessDialog.dialogParmas?.dialogType === 'autoHour') {
  code = 'auto_hour';
}
/* 发送消息 */
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [ // 消息内容
    { shareCode: "close_map_window", runtimeValue: true },
    { shareCode: "close_window_code", runtimeValue: code }
  ]
});

};
const handleClickTrend = () => {
// 任务调度佛山现场
// window.open("http://19.130.161.126:8888/vue3-fs-task-micro/#/dispatchinglayout/special-task-assign?visible=true&paramValue=fszxrw&taskParamType=2&hiddenBackBtn=1");

//任务调度，公司演示
// window.open("http://192.168.0.202:7777/ddxt-micro-fs-app/#/dispatchinglayout/special-task-assign?paramValue=fszxrw&paramType=2&visible=true&defaultParamValue=cszprw&hiddenBackBtn=2");
localStorage.removeItem('pointIds');
localStorage.setItem('pointIds', global.businessDialog.dialogParmas.STANDENTERID);
console.log(global.businessDialog.dialogParmas.STANDENTERID,'global.businessDialog.dialogParmas.STANDENTERID');
const url = 'https://stfs.sthj.fs.gdgov.cn/vue3-fs-task-micro/#/dispatchinglayout/special-task-assign?visible=true&paramValue=fszxrw&taskParamType=2&hiddenBackBtn=1'
window.open(url, '_blank')
};
const handleClickTraceability = (type) => {
// 溯源
let DATA_FREQUENCY = '';
if (global.businessDialog.dialogParmas?.dialogType === 'autoDay') {
  // 自动断面-天
  DATA_FREQUENCY = '2'
} else if (global.businessDialog.dialogParmas?.dialogType === 'autoHour') {
  // 自动断面-小时
  DATA_FREQUENCY = '1'
} else {
  // 手工断面
  DATA_FREQUENCY = '4'
}

// 记录当前选择点位的信息
global.waterGlobalVariables.selectedPointInfo = {
  POINT_CODE: state.pointCode,
  ASSESSTYPE: state.assessType,
  DATA_FREQUENCY,
  MULTI_POLLUTANTS: '',
  MONITORTIME: state.monitorTime
}

/* 发送消息 */
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractiveChange", // 消息名称
  data: [ // 消息内容
    // 查看汇水区时传true
    // { shareCode: "isWatershedTraceSource", runtimeValue: type === "2" },
    // { shareCode: "trace_source", runtimeValue: true },
    // { shareCode: "MULTI_POLLUTANTS", runtimeValue: "None" },
    {
      shareCode: "showWaterTraceDetail",
      componentName: "waterTraceabilityContentComponent",
      componentParmas: {
        POINT_CODE: state.pointCode,
        ASSESSTYPE: state.assessType,
        DATA_FREQUENCY,
        MULTI_POLLUTANTS: '',
        MONITORTIME: state.monitorTime
      },
      traceDetailUrl: ''
      // traceDetailUrl: `/view/view/show/index.vm?screenId=adfe253d6f5c434c1f6388aae1c18bbe&REGION_CODE=${global.regionaQuery.regionCode}&POINT_CODE=${state.pointCode}&MONITORTIME=${state.monitorTime}&DATA_FREQUENCY=4&ASSESSTYPE=${state.assessType}&MULTI_POLLUTANTS=` + selectedStrInitialize
    }
  ]
});
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [ // 消息内容
    // { shareCode: "isWatershedTraceSource", runtimeValue: type === "2" },
    // { shareCode: "trace_source", runtimeValue: true },
    // { shareCode: "MULTI_POLLUTANTS", runtimeValue: "None" },
    {
      shareCode: "showWaterTraceDetail",
      componentName: "waterTraceabilityContentComponent",
      componentParmas: {
        POINT_CODE: state.pointCode,
        ASSESSTYPE: state.assessType,
        DATA_FREQUENCY,
        MULTI_POLLUTANTS: '',
        MONITORTIME: state.monitorTime
      },
      traceDetailUrl: ''
      // traceDetailUrl: `/view/view/show/index.vm?screenId=adfe253d6f5c434c1f6388aae1c18bbe&REGION_CODE=${global.regionaQuery.regionCode}&POINT_CODE=${state.pointCode}&MONITORTIME=${state.monitorTime}&DATA_FREQUENCY=4&ASSESSTYPE=${state.assessType}&MULTI_POLLUTANTS=` + selectedStrInitialize
    }
  ]
});
};
const handleClickQuery = () => {
if (state.point.lon && state.point.lat) {
  // 周边查询
  const pointLocation = [];
  pointLocation.push(parseFloat(state.point.lon));
  pointLocation.push(parseFloat(state.point.lat));

  /* 发送消息 */
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractiveChange", // 消息名称
    data: [ // 消息内容
      { shareCode: "POINT_LOACTION", runtimeValue: JSON.stringify(pointLocation) },
      { shareCode: "POINT_LOACTION_NAME", runtimeValue: state.pointName }
    ]
  });
  global.businessDialog.dialogName = '';  

}
};
const handleClickTraceabilityNew = () => {
console.log('展示演示用的图片');
global.isShowYSImg = true;
// global.businessDialog.dialogName = '';
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
const openPop = () => {
global.businessDialog.dialogParmas.enterName = state.baseInfo.title;
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'createDialog',  // 消息类型名称
    data: {
      "params": {               // 消息内容，对象格式
        'title': '信访投诉',
        maxWidth: "1800px",
        maxHeight: "970px",
        minWidth: "1000px",
        minHeight: "500px",
        'contentComName': 'testQuestionComponent',
        'hiddenScaleButton': true,
      }
    }
  }
);
};
const setDomStyle = () => {



// 创建一个style元素
const styleElement = document.createElement("style");

// 获取当前组件的名称
let componentName = 'ssqyDialog';
// 定义style元素的id
let id = `custom-${componentName}-styles`;
// 给style元素添加id以便之后可以方便地找到并修改它
styleElement.id = id;

// 使用条件判断以确保不会重复添加相同的样式规则
if (!document.getElementById(id)) {
  // 向style元素中添加自定义的CSS规则
  styleElement.innerHTML = `
     
      /* tab切换*/
      #t-l-c-${componentName} .ssqyDialog-t-tabs-0-1-0-0-1 .t-tabs__right .el-tabs__nav-scroll {
        justify-content: center;
      }
    `;
  // 将style元素添加到文档头部
  document.head.appendChild(styleElement);
}
};
const onclick1734068220296 = () => {
// 执行自定义方法
openPop();
};
const onclick1734071402189 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'waterGlobalVariables.waterOverview.sourceTracingType',
                    value:'2',
                    data: {
                      waterGlobalVariables:{waterOverview:{sourceTracingType: '2'}}
                    },
                  });
// 执行自定义方法
handleClickTraceability("2");
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closeDialog", // 消息名称
data: {}, // 发送的数据
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "updateSourceTrace", // 消息名称
data: {}, // 发送的数据
});
};
const onclick1734067550409 = () => {
// 执行自定义方法
openWX();
};
const ontabClick1733991846829 = (data) => {
// 设置变量值
state.activeTab = data.name;
};
const onclick1766817673446_0_0 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'waterGlobalVariables.waterOverview.sourceTracingType',
                    value:'2',
                    data: {
                      waterGlobalVariables:{waterOverview:{sourceTracingType: '2'}}
                    },
                  });
// 执行自定义方法
handleClickTraceability("2");
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closeDialog", // 消息名称
data: {}, // 发送的数据
});
};
const onclick1769508556350_0_0 = () => {
// 执行自定义方法
handleClickQuery();
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
 getAlarmData: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"DATA_FREQUENCY","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"Jlnbg3UWe7"},{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"MONITORTYPE","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"ci2HzbE2XQ"}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"REGION_CODE":"global.regionaQuery.regionCode","MONITORTYPE":"this.MONITORTYPE","DATA_FREQUENCY":"this.DATA_FREQUENCY","POINT_CODE":"state.pointCode","MONITORTIME":"state.monitorTime","interfaceId":"798ce52d5d72109c6f09562f7e5a665c"}},
              request: function (DATA_FREQUENCY,MONITORTYPE, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_CODE":global.regionaQuery.regionCode,"MONITORTYPE":MONITORTYPE,"DATA_FREQUENCY":DATA_FREQUENCY,"POINT_CODE":state.pointCode,"MONITORTIME":state.monitorTime,"interfaceId":"798ce52d5d72109c6f09562f7e5a665c"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"REGION_CODE":global.regionaQuery.regionCode,"MONITORTYPE":MONITORTYPE,"DATA_FREQUENCY":DATA_FREQUENCY,"POINT_CODE":state.pointCode,"MONITORTIME":state.monitorTime,"interfaceId":"798ce52d5d72109c6f09562f7e5a665c"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getAlarmData'] = res.data;
                
     console.log(res);
const { data } = res;
if (data.head.statusCode === '200' && data.data.length) {
  let textArr = [];
  data.data.forEach((item) => {
    textArr.push(item.ALARM_TYPE_NAME);
  })

  // 报警文本
  state.baseInfo.alarmText = textArr.join();
} else {
  // 报警文本
  state.baseInfo.alarmText = '';
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
 getBaseInfo: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"interfaceId","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"CbVCRsHVHd"}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.pointCode","ASSESSTYPE":"state.assessType","MONITORTIME":"state.monitorTime","interfaceId":"this.interfaceId"}},
              request: function (interfaceId, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.pointCode,"ASSESSTYPE":state.assessType,"MONITORTIME":state.monitorTime,"interfaceId":interfaceId},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.pointCode,"ASSESSTYPE":state.assessType,"MONITORTIME":state.monitorTime,"interfaceId":interfaceId});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     console.log(res);
const { data } = res;
if (data.head.statusCode === '200' && data.data) {
  // 名称
  state.baseInfo.title = data.data?.POINT_NAME || '-';
  // 控制级别
  state.baseInfo.controlLevel = data.data?.CONTROLLEVEL || '-';
  // 水质级别
  state.baseInfo.waterQuality[0].state = data.data?.WATERQUALITYLEVELNAME || '-';
  state.baseInfo.waterQuality[0].stateBgColor = getWaterLevelColor(data.data?.WATERQUALITYLEVELNAME);
  // 达标
  state.baseInfo.standard[0].state = data.data?.ISSTANDARDSSTR || '-';
  state.baseInfo.standard[0].stateBgColor = getWaterLevelColor(data.data?.ISSTANDARDSSTR);

  // 经纬度--周边查询使用
  state.point.lat = data.data?.LATITUDE || '';
  state.point.lon = data.data?.LONGITUDE || '';

  // 断面类型
  if (interfaceId === 'c88965d570ad1d00197e1fee3a00c649') {
    // 手工
    if (data.data?.AUTO_POINTCODE) {
      state.baseInfo.type = '手&自';
    } else {
      state.baseInfo.type = '手工';
    }
  } else {
    // 自动站
    state.baseInfo.type = '自动';
  }
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
                            setPageScale('t-l-c-ssqyDialog', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setDomStyle();
// 执行自定义方法
initPageData();
onMounted(() => {
setPageScale('t-l-c-ssqyDialog', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tColx0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x1.default, componentState.tColx0x1?.[state.screenSize]));

 const tRowx0x1x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x1x0.default, componentState.tRowx0x1x0?.[state.screenSize]));

 const tColx0x1x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x0x0.default, componentState.tColx0x1x0x0?.[state.screenSize]));

 const tRectx0x1x0x0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x1x0x0x0.default, componentState.tRectx0x1x0x0x0?.[state.screenSize]));

 const tTabsx0x1x0x0x1ComputedData = computed(() => _.merge({}, componentState.tTabsx0x1x0x0x1.default, componentState.tTabsx0x1x0x0x1?.[state.screenSize]));

 const tColx0x1x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x1x0x1.default, componentState.tColx0x1x0x1?.[state.screenSize]));

 const tComponentx0x1x0x1x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1x0x1x0.default, componentState.tComponentx0x1x0x1x0?.[state.screenSize]));

 const tRowx0x1x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1x1.default, componentState.tRowx0x1x1?.[state.screenSize]));

 const tColx0x1x1x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1x0.default, componentState.tColx0x1x1x0?.[state.screenSize]));

 const tTextx0x1x1x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x1x0x0.default, componentState.tTextx0x1x1x0x0?.[state.screenSize]));

 const tTextx0x1x1x0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x1x0x2.default, componentState.tTextx0x1x1x0x2?.[state.screenSize]));

 const tTextx0x1x1x0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x1x0x4.default, componentState.tTextx0x1x1x0x4?.[state.screenSize]));

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
tColx0x1ComputedData,
tRowx0x1x0ComputedData,
tColx0x1x0x0ComputedData,
tRectx0x1x0x0x0ComputedData,
tTabsx0x1x0x0x1ComputedData,
tColx0x1x0x1ComputedData,
tComponentx0x1x0x1x0ComputedData,
tRowx0x1x1ComputedData,
tColx0x1x1x0ComputedData,
tTextx0x1x1x0x0ComputedData,
tTextx0x1x1x0x2ComputedData,
tTextx0x1x1x0x4ComputedData,
ontabClick1733991846829,
onclick1769508556350_0_0,
onclick1734071402189,
onclick1734067550409,
};
},
}
</script>

<style scoped>
.t-l-c-ssqyDialog {
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
.t-l-c-ssqyDialog .ssqyDialog-t-rect-0-0 {
position: absolute !important;
top: -1px;
left: 0px;
width: 100%;
height: 100%;
pointer-events: auto;
}

.t-l-c-ssqyDialog .ssqyDialog-t-col-0-1 {
position: absolute !important;
top: 0px;
left: 0px;
width: 100%;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
flex-direction: column;
gap: auto;
padding-top: 20px;
padding-right: unset;
}

.t-l-c-ssqyDialog .ssqyDialog-t-row-0-1-0 {
position: unset;
top: 0px;
left: 0px;
width: 100%;
height: calc(100% - 72px);
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
}

.t-l-c-ssqyDialog .ssqyDialog-t-col-0-1-0-0 {
position: relative;
top: null;
left: null;
width: 100px;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
padding-left: 15px;
padding-right: 15px;
}

.t-l-c-ssqyDialog .ssqyDialog-t-rect-0-1-0-0-0 {
position: unset;
top: 2px;
left: 21px;
width: 100%;
height: 100%;
pointer-events: auto;
}

.t-l-c-ssqyDialog .ssqyDialog-t-tabs-0-1-0-0-1 {
position: unset;
top: 94px;
left: 137px;
width: 166px;
height: auto;
pointer-events: auto;
}

.t-l-c-ssqyDialog .ssqyDialog-t-col-0-1-0-1 {
position: relative;
top: null;
left: null;
width: 100px;
height: 100%;
pointer-events: auto;
display: flex;
justify-content: center;
align-items: center;
padding-right: 0px;
}

.t-l-c-ssqyDialog .ssqyDialog-t-component-0-1-0-1-0 {
position: unset;
top: 2px;
left: 177px;
width: calc(100% - 15px);
height: 100%;
pointer-events: auto;
}

.t-l-c-ssqyDialog .ssqyDialog-t-row-0-1-1 {
position: unset;
top: 599px;
left: -1px;
width: 100%;
height: 52px;
pointer-events: auto;
background-color: var(--business-show-bg15);
border-direction: borderTop;
border-left: unset;
border-top: 1px Solid var(--business-show-bg60);
border-right: unset;
border-bottom: unset;
border: auto !important;
border-top-left-radius: 0px;
border-top-right-radius: 0px;
border-bottom-right-radius: 16px;
border-bottom-left-radius: 16px;
}

.t-l-c-ssqyDialog .ssqyDialog-t-col-0-1-1-0 {
position: relative;
top: null;
left: null;
width: 100%;
height: 52px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
padding-right: 20px;
}

.t-l-c-ssqyDialog .ssqyDialog-t-text-0-1-1-0-0 {
position: unset;
top: 680px;
left: 679px;
width: auto;
height: auto;
pointer-events: auto;
}

.t-l-c-ssqyDialog .ssqyDialog-t-text-0-1-1-0-2 {
position: unset;
top: 670px;
left: 780px;
width: auto;
height: auto;
pointer-events: auto;
}

.t-l-c-ssqyDialog .ssqyDialog-t-text-0-1-1-0-4 {
position: unset;
top: 670px;
left: 870px;
width: auto;
height: auto;
pointer-events: auto;
}
</style>
