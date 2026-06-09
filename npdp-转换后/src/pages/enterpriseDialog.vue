<template>
  <div id="t-l-c-enterpriseDialog" class="t-l-c-enterpriseDialog" ><t-rect id="t-rect-c4b4.ef465b16" class="enterpriseDialog-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-text id="t-text-80be.cbe49ec59" class="enterpriseDialog-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle"></t-text><t-text id="t-text-a173.17caf2229" class="enterpriseDialog-t-text-0-2"  :label="replaceCssVariables(filterData(state.industry, componentPropBindingMap?.['t-text-a173.17caf2229']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle"></t-text><t-text id="t-text-f695.e5aeb0529" class="enterpriseDialog-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle"></t-text><t-text id="t-text-888d.37bed7dc2" class="enterpriseDialog-t-text-0-4"  :label="replaceCssVariables(filterData(state.regionName, componentPropBindingMap?.['t-text-888d.37bed7dc2']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle"></t-text><t-text id="t-text-f1ba.031f45dc4" class="enterpriseDialog-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle"></t-text><t-text id="t-text-9e7a.89ce9b039" class="enterpriseDialog-t-text-0-6"  :label="replaceCssVariables(filterData(state.address, componentPropBindingMap?.['t-text-9e7a.89ce9b039']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle"></t-text><t-text id="t-text-4f32.8641e476a" class="enterpriseDialog-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle"></t-text><t-text id="t-text-7693.834fb7c8e" class="enterpriseDialog-t-text-0-8"  :label="replaceCssVariables(filterData(state.enterName, componentPropBindingMap?.['t-text-7693.834fb7c8e']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x8ComputedData.editable" :c-style="tTextx0x8ComputedData.cStyle"></t-text><t-rect id="t-rect-13f6.c654afbf2" class="enterpriseDialog-t-rect-0-9"  :tip="tRectx0x9ComputedData.tip" :label="tRectx0x9ComputedData.label" :active="tRectx0x9ComputedData.active" :c-style="tRectx0x9ComputedData.cStyle"></t-rect><t-component id="t-component-8d33.7fd0ac10f" class="enterpriseDialog-t-component-0-10"  :name="replaceCssVariables(filterData(state.menuValue, componentPropBindingMap?.['t-component-8d33.7fd0ac10f']['name'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tComponentx0x10ComputedData.cStyle" :src="tComponentx0x10ComputedData.src" :component-name="replaceCssVariables(filterData(state.menuValue, componentPropBindingMap?.['t-component-8d33.7fd0ac10f']['componentName'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-component><t-rect v-if="state.isZhcx === false" id="t-rect-2616.62a6985f9" class="enterpriseDialog-t-rect-0-11"  :tip="tRectx0x11ComputedData.tip" :label="tRectx0x11ComputedData.label" :active="tRectx0x11ComputedData.active" :c-style="tRectx0x11ComputedData.cStyle"></t-rect><t-rect v-if="state.isZhcx === true" id="t-rect-ec87.be2ccaf9d" class="enterpriseDialog-t-rect-0-12"  :tip="tRectx0x12ComputedData.tip" :label="tRectx0x12ComputedData.label" :active="tRectx0x12ComputedData.active" :c-style="tRectx0x12ComputedData.cStyle"></t-rect><t-text v-if="state.isZhcx === false" id="t-text-bf80.b89741327" class="enterpriseDialog-t-text-0-13"  :label="tTextx0x13ComputedData.label" :editable="tTextx0x13ComputedData.editable" :c-style="tTextx0x13ComputedData.cStyle" @click="onclick1752131166818"></t-text><t-text v-if="state.isZhcx === false" id="t-text-083e.43ca9c611" class="enterpriseDialog-t-text-0-14"  :label="tTextx0x14ComputedData.label" :editable="tTextx0x14ComputedData.editable" :c-style="tTextx0x14ComputedData.cStyle" @click="onclick1756795648925_0_0"></t-text><t-text v-if="state.isZhcx === true" id="t-text-d909.078780e1a" class="enterpriseDialog-t-text-0-15"  :label="tTextx0x15ComputedData.label" :editable="tTextx0x15ComputedData.editable" :c-style="tTextx0x15ComputedData.cStyle" @click="onclick1752747601010_0_0"></t-text><t-text v-if="state.isZhcx === true" id="t-text-10a7.e6861ff25" class="enterpriseDialog-t-text-0-16"  :label="tTextx0x16ComputedData.label" :editable="tTextx0x16ComputedData.editable" :c-style="tTextx0x16ComputedData.cStyle" @click="onclick1756713977569_0_0"></t-text><t-text v-if="state.isZhcx === true" id="t-text-8ea4.22718e747" class="enterpriseDialog-t-text-0-17"  :label="tTextx0x17ComputedData.label" :editable="tTextx0x17ComputedData.editable" :c-style="tTextx0x17ComputedData.cStyle" @click="onclick1756716169541_0_0"></t-text><t-rect id="t-rect-4284.7fb88312f" class="enterpriseDialog-t-rect-0-18"  :tip="tRectx0x18ComputedData.tip" :label="tRectx0x18ComputedData.label" :active="tRectx0x18ComputedData.active" :c-style="tRectx0x18ComputedData.cStyle"></t-rect><t-rect id="t-rect-027a.819b9bcc7" class="enterpriseDialog-t-rect-0-19"  :tip="tRectx0x19ComputedData.tip" :label="tRectx0x19ComputedData.label" :active="tRectx0x19ComputedData.active" :c-style="tRectx0x19ComputedData.cStyle" @click="onclick1752456642298"></t-rect><t-rect id="t-rect-f49e.017c6ba76" class="enterpriseDialog-t-rect-0-21"  :tip="tRectx0x21ComputedData.tip" :label="tRectx0x21ComputedData.label" :active="tRectx0x21ComputedData.active" :c-style="tRectx0x21ComputedData.cStyle"></t-rect><t-row id="t-row-3e51.cf043dcce" class="enterpriseDialog-t-row-0-22"  :c-style="tRowx0x22ComputedData.cStyle" :gutter="tRowx0x22ComputedData.gutter" :justify="tRowx0x22ComputedData.justify" :align="tRowx0x22ComputedData.align"><t-text id="t-text-5111.a337bc104" class="enterpriseDialog-t-text-0-22-0"  :label="replaceCssVariables(filterData(state.enterName, componentPropBindingMap?.['t-text-5111.a337bc104']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x22x0ComputedData.editable" :c-style="tTextx0x22x0ComputedData.cStyle"></t-text></t-row><t-tabs id="t-tabs-7d30.cda2947a3" class="enterpriseDialog-t-tabs-0-27"  :data="tTabsx0x27ComputedData.data" :active-tab="replaceCssVariables(filterData(state.menuValue, componentPropBindingMap?.['t-tabs-7d30.cda2947a3']['activeTab'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :tab-position-extend="tTabsx0x27ComputedData.tabPositionExtend" :stretch="tTabsx0x27ComputedData.stretch" :c-style="tTabsx0x27ComputedData.cStyle" @tab-click="ontabClick1752053388207"></t-tabs></div>
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
import { TComponent, TRect, TRow, TTabs, TText } from '@ths/design';

export default {
  components: {
    TComponent,
    TRect,
    TRow,
    TTabs,
    TText,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-c4b4.ef465b16":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-80be.cbe49ec59":{"attributeName":"tTextx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-a173.17caf2229":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-f695.e5aeb0529":{"attributeName":"tTextx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-888d.37bed7dc2":{"attributeName":"tTextx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-f1ba.031f45dc4":{"attributeName":"tTextx0x5","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-9e7a.89ce9b039":{"attributeName":"tTextx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-4f32.8641e476a":{"attributeName":"tTextx0x7","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-7693.834fb7c8e":{"attributeName":"tTextx0x8","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-13f6.c654afbf2":{"attributeName":"tRectx0x9","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-8d33.7fd0ac10f":{"attributeName":"tComponentx0x10","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-rect-2616.62a6985f9":{"attributeName":"tRectx0x11","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-ec87.be2ccaf9d":{"attributeName":"tRectx0x12","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-bf80.b89741327":{"attributeName":"tTextx0x13","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-083e.43ca9c611":{"attributeName":"tTextx0x14","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-d909.078780e1a":{"attributeName":"tTextx0x15","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-10a7.e6861ff25":{"attributeName":"tTextx0x16","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-8ea4.22718e747":{"attributeName":"tTextx0x17","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-4284.7fb88312f":{"attributeName":"tRectx0x18","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-027a.819b9bcc7":{"attributeName":"tRectx0x19","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-48d1.76105f509":{"attributeName":"tRectx0x20"},"t-rect-f49e.017c6ba76":{"attributeName":"tRectx0x21","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-row-3e51.cf043dcce":{"attributeName":"tRowx0x22","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-5111.a337bc104":{"attributeName":"tTextx0x22x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-4849.a04e13f79":{"attributeName":"tTextx0x22x1"},"t-rect-5197.539d85809":{"attributeName":"tRectx0x23"},"t-rect-f744.e1bdd7484":{"attributeName":"tRectx0x24"},"t-rect-bd10.043787ca8":{"attributeName":"tRectx0x25"},"t-rect-116a.a2b67cc47":{"attributeName":"tRectx0x26"},"t-tabs-7d30.cda2947a3":{"attributeName":"tTabsx0x27","data":{"filters":[]},"activeTab":{"filters":[]},"tabPositionExtend":{"filters":[]},"stretch":{"filters":[]},"cStyle":{"filters":[]}}};
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
   showZhcxPageParams: "",
   setLayersARparams: "",
   latitude: "",
   longitude: "",
   isZhcx: false,
   standenterId: "",
   industry: "",
   address: "",
   regionName: "",
   enterName: "",
   menuValue: "baseInfoComponent",
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
            default: {"width":"1000px","height":"712px","position":"unset","left":"470px","top":"194px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"712px","position":"unset","left":"470px","top":"194px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"490px","top":"255px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"企业名称",
editable:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"490px","top":"255px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"1091px","top":"289px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"1091px","top":"289px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","paddingRight":"10px"}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"969px","top":"289px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"所属行业",
editable:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"969px","top":"289px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"1091px","top":"255px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"1091px","top":"255px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px"}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"969px","top":"255px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"所属行政区",
editable:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"969px","top":"255px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"612px","top":"289px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"612px","top":"289px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","animationName":"","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","paddingRight":"10px"}}}, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"490px","top":"289px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""},
            
            },
 default: { 
 
label:"所在地址",
editable:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","color":"var(--business-text-avianize)","position":"unset","left":"490px","top":"289px","backgroundColor":"var(--business-show-bg15)","textAlign":"right","paddingRight":"10px","lineHeight":"32px","fontSize":"14px","animationName":""}}}, 
 },
},
tTextx0x8: {
defaultStyle: {
            default: {"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"612px","top":"255px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"355px","height":"32px","color":"var(--t-white)","position":"unset","left":"612px","top":"255px","backgroundColor":"var(--business-show-bg30)","lineHeight":"32px","fontSize":"14px","paddingLeft":"10px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","paddingRight":"10px","animationName":""}}}, 
 },
},
tRectx0x9: {
defaultStyle: {
            default: {"width":"820px","height":"495px","position":"unset","left":"630px","top":"343px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg15)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"820px","height":"495px","position":"unset","left":"630px","top":"343px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg15)","animationName":""}}}, 
 },
},
tComponentx0x10: {
defaultStyle: {
            default: {"width":"788px","height":"468px","margin":"0 auto","backgroundColor":"rgba(23, 62, 228, 0)","position":"unset","left":"646px","top":"358px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingTop":"0px","paddingLeft":"0px","paddingRight":"0px","paddingBottom":"0px","animationName":""},
            
            },
 default: { 
 
name:"baseInfoComponent",
cStyle:{"wrapper":{"default":{"width":"788px","height":"468px","margin":"0 auto","backgroundColor":"rgba(23, 62, 228, 0)","position":"unset","left":"646px","top":"358px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingTop":"0px","paddingLeft":"0px","paddingRight":"0px","paddingBottom":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/",
componentName:"baseInfoComponent", 
 },
},
tRectx0x11: {
defaultStyle: {
            default: {"width":"1000px","height":"52px","position":"unset","left":"470px","top":"854px","borderLeft":"0px solid ","borderTop":"1px solid var(--business-show-bg60)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg15)","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"52px","position":"unset","left":"470px","top":"854px","borderLeft":"0px solid ","borderTop":"1px solid var(--business-show-bg60)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg15)","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","animationName":""}}}, 
 },
},
tRectx0x12: {
defaultStyle: {
            default: {"width":"1000px","height":"52px","position":"unset","left":"470px","top":"851px","borderLeft":"0px solid ","borderTop":"1px solid var(--business-show-bg60)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg15)","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"52px","position":"unset","left":"470px","top":"851px","borderLeft":"0px solid ","borderTop":"1px solid var(--business-show-bg60)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg15)","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","animationName":""}}}, 
 },
},
tTextx0x13: {
defaultStyle: {
            default: {"width":"100px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1350px","top":"866px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"url(assets/images/2025-07-11/71e952cb09374f8eaf2874155031d3b8.svg)","backgroundPosition":"5% 50%","backgroundRepeat":"no-repeat","backgroundSize":"22px auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"发布任务",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1350px","top":"866px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"url(assets/images/2025-07-11/71e952cb09374f8eaf2874155031d3b8.svg)","backgroundPosition":"5% 50%","backgroundRepeat":"no-repeat","backgroundSize":"22px auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""}}}, 
 },
},
tTextx0x14: {
defaultStyle: {
            default: {"width":"100px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1244px","top":"867px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"url(assets/images/2025-07-17/742efaac2efa4bc2809db54ecebbc6e7.svg)","backgroundPosition":"5% 50%","backgroundRepeat":"no-repeat","backgroundSize":"22px auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"档案详情",
editable:false,
cStyle:{"wrapper":{"default":{"width":"100px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1244px","top":"867px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"url(assets/images/2025-07-17/742efaac2efa4bc2809db54ecebbc6e7.svg)","backgroundPosition":"5% 50%","backgroundRepeat":"no-repeat","backgroundSize":"22px auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""}}}, 
 },
},
tTextx0x15: {
defaultStyle: {
            default: {"width":"75px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1277px","top":"863px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"url(assets/images/2025-07-17/742efaac2efa4bc2809db54ecebbc6e7.svg)","backgroundPosition":"13% 50%","backgroundRepeat":"no-repeat","backgroundSize":"17px auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"详情",
editable:false,
cStyle:{"wrapper":{"default":{"width":"75px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1277px","top":"863px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"url(assets/images/2025-07-17/742efaac2efa4bc2809db54ecebbc6e7.svg)","backgroundPosition":"13% 50%","backgroundRepeat":"no-repeat","backgroundSize":"17px auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""}}}, 
 },
},
tTextx0x16: {
defaultStyle: {
            default: {"width":"89px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1174px","top":"863px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"var(--business-dialog-icon-around)","backgroundPosition":"10% 50%","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"周边查询",
editable:false,
cStyle:{"wrapper":{"default":{"width":"89px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1174px","top":"863px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"var(--business-dialog-icon-around)","backgroundPosition":"10% 50%","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""}}}, 
 },
},
tTextx0x17: {
defaultStyle: {
            default: {"width":"89px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1364px","top":"863px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"var(--business-dialog-icon-scale)","backgroundPosition":"13% 50%","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"缩放至",
editable:false,
cStyle:{"wrapper":{"default":{"width":"89px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1364px","top":"863px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"var(--business-dialog-icon-scale)","backgroundPosition":"13% 50%","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""}}}, 
 },
},
tRectx0x18: {
defaultStyle: {
            default: {"width":"1000px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"470px","top":"194px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1000px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"470px","top":"194px","animationName":""}}}, 
 },
},
tRectx0x19: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1422px","top":"205px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1422px","top":"205px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tRectx0x21: {
defaultStyle: {
            default: {"width":"121px","height":"495px","backgroundColor":"var(--business-show-bg15)","position":"unset","left":"490px","top":"343px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"121px","height":"495px","backgroundColor":"var(--business-show-bg15)","position":"unset","left":"490px","top":"343px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""}}}, 
 },
},
tRowx0x22: {
defaultStyle: {
            default: {"width":"885px","height":"41px","position":"unset","left":"489px","top":"197px","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"885px","height":"41px","position":"unset","left":"489px","top":"197px","whiteSpace":"nowrap","textOverflow":"ellipsis","animationName":""}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x22x0: {
defaultStyle: {
            default: {"width":"auto","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"517px","top":"-169px","backgroundImage":"url(assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":"","whiteSpace":"nowrap","overflow":"hidden","marginRight":"16px","textOverflow":"ellipsis","max-width":"620px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"517px","top":"-169px","backgroundImage":"url(assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":"","whiteSpace":"nowrap","overflow":"hidden","marginRight":"16px","textOverflow":"ellipsis","max-width":"620px"}}}, 
 },
},
tTabsx0x27: {
defaultStyle: {
            default: {"width":"121px","height":"404px","position":"unset","left":"491px","top":"335px","backgroundColor":"rgba(23, 62, 228, 0)","paddingLeft":"8px","paddingRight":"0px","marginLeft":"0px","paddingBottom":"0","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":""},
            
            },
 default: { 
 
data:[{"label":"基本信息","name":"baseInfoComponent"},{"label":"涉气档案","name":"airArchiveComponent"},{"label":"固废档案","name":"wasteArchiveComponent"},{"label":"原产治排","name":"processComponent"},{"label":"监控数据","name":"monitorDataComponent"},{"label":"监控视频","name":"monitorVideoComponent"},{"label":"燃气数据","name":"gasDataComponent"}],
activeTab:"baseInfoComponent",
tabPositionExtend:"right",
stretch:true,
cStyle:{"wrapper":{"default":{"width":"121px","height":"404px","position":"unset","left":"491px","top":"335px","backgroundColor":"rgba(23, 62, 228, 0)","paddingLeft":"8px","paddingRight":"0px","marginLeft":"0px","paddingBottom":"0","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":""}},"itemActiveBorder":{"default":{"width":"4px"}},"itemWrapper":{"default":{"marginRight":"0px","color":"var(--t-white)","textAlign":"center!important","width":"103px","height":"32px","marginLeft":"1px","fontSize":"14px","lineHeight":"32px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginBottom":"20px","borderLeft":"0px solid rgba(255,255,255,0.2)","borderTop":"0px solid rgba(255,255,255,0.2)","borderRight":"0px solid rgba(255,255,255,0.2)","borderBottom":"1px none rgba(255,255,255,0.2)"},"hover":{"background":"var(--business-site-menu-active)","boxShadow":"inset 0px 0px 18px 0px rgba(255, 206, 109, 0.49)","borderLeft":"1px solid #FFEFC9","borderTop":"1px solid #FFEFC9","borderRight":"1px solid #FFEFC9","borderBottom":"1px solid #FFEFC9","fontSize":"14px","borderTopLeftRadius":"32px","borderTopRightRadius":"32px","borderBottomLeftRadius":"32px","borderBottomRightRadius":"32px","textAlign":"center"},"active":{"background":"var(--business-site-menu-active)","color":"var(--t-white)","borderLeft":"1px solid #FFEFC9","borderTop":"1px solid #FFEFC9","borderRight":"1px solid #FFEFC9","borderBottom":"1px solid #FFEFC9","boxShadow":"inset 0px 0px 18px 0px rgba(255, 206, 109, 0.49)","fontSize":"14px","lineHeight":"32px","borderTopLeftRadius":"32px","borderTopRightRadius":"32px","borderBottomLeftRadius":"32px","borderBottomRightRadius":"32px","marginBottom":"20px","textAlign":"center"}},"nextIcon":{"default":{"display":"block"}}}, 
 },
},
});
const taskRelease = () => {
localStorage.removeItem('pointIds');
localStorage.setItem('pointIds', global.businessDialog.dialogParmas.STANDENTERID);
const url = 'https://stfs.sthj.fs.gdgov.cn/vue3-fs-task-micro/#/dispatchinglayout/special-task-assign?visible=true&paramValue=fszxrw&taskParamType=2&hiddenBackBtn=1'
window.open(url, '_blank')
};
const initData = () => {
state.standenterId = global.businessDialog.dialogParmas.STANDENTERID;
state.isZhcx = global.businessDialog.dialogParmas.type === 'ZHCX';
state.latitude = global.businessDialog.dialogParmas.LAT || global.businessDialog.dialogParmas.LATITUDE;
state.longitude = global.businessDialog.dialogParmas.LON || global.businessDialog.dialogParmas.LONGITUDE;
state.showZhcxPageParams = {
  showQuery: true,
  params: {
    pointName: global.businessDialog.dialogParmas.ENTER_NAME,
    queryInfo: JSON.stringify({
    gisType: "geo_distance",
    pointValue: [state.longitude, state.latitude],
  }),
  },
}

state.setLayersARparams = [
    {
      libraryId: '42f50c1c217b4a3b9cd04902a152644d',
      layerId: '区县',
      opType: 'remove',
      showPageId: ''
    }
  ]
};
const goArchiveDetail = () => {
const url = 'https://stfs.sthj.fs.gdgov.cn/polluter-file-micro/#/layout/archive-information?standenterid=' + state.standenterId;
window.open(url, '_blank')
};
const onclick1752131166818 = () => {
// 执行自定义方法
taskRelease();
};
const onclick1756795648925_0_0 = () => {
// 执行自定义方法
goArchiveDetail();
};
const onclick1752456642298 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogName',
                    value:'',
                    data: {
                      businessDialog:{dialogName: ''}
                    },
                  });
};
const ontabClick1752053388207 = (data) => {
// 设置变量值
state.menuValue = data.name;
};
const onclick1752747601010_0_0 = () => {
// 执行自定义方法
goArchiveDetail();
};
const onclick1756713977569_0_0 = () => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "showZhcxPage", // 消息名称
data: state.showZhcxPageParams, // 发送的数据
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "setLayersAR", // 消息名称
data: state.setLayersARparams, // 发送的数据
});
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogName',
                    value:'',
                    data: {
                      businessDialog:{dialogName: ''}
                    },
                  });
};
const onclick1756716169541_0_0 = () => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "goto", // 消息名称
data: {"level":"12","LONGITUDE":state.longitude,"LATITUDE":state.latitude}, // 发送的数据
});
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogName',
                    value:'',
                    data: {
                      businessDialog:{dialogName: ''}
                    },
                  });
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getBaseInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"standenterid":"state.standenterId","interfaceId":"43a55db4e5c24e3066362ab0011df033"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"standenterid":state.standenterId,"interfaceId":"43a55db4e5c24e3066362ab0011df033"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"standenterid":state.standenterId,"interfaceId":"43a55db4e5c24e3066362ab0011df033"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  let { data } = res.data;
  state.enterName = data.ENTERNAME || '--';
  state.address = data.ENTERADDRESS || '--';
  state.regionName = data.ALLREGINNAME || '--';
  state.industry = data.TRADENAME || '--';
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
                            setPageScale('t-l-c-enterpriseDialog', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initData();
// 事件交互-请求调用接口
apiRegistry.getBaseInfo.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
onMounted(() => {
setPageScale('t-l-c-enterpriseDialog', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tTextx0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x8.default, componentState.tTextx0x8?.[state.screenSize]));

 const tRectx0x9ComputedData = computed(() => _.merge({}, componentState.tRectx0x9.default, componentState.tRectx0x9?.[state.screenSize]));

 const tComponentx0x10ComputedData = computed(() => _.merge({}, componentState.tComponentx0x10.default, componentState.tComponentx0x10?.[state.screenSize]));

 const tRectx0x11ComputedData = computed(() => _.merge({}, componentState.tRectx0x11.default, componentState.tRectx0x11?.[state.screenSize]));

 const tRectx0x12ComputedData = computed(() => _.merge({}, componentState.tRectx0x12.default, componentState.tRectx0x12?.[state.screenSize]));

 const tTextx0x13ComputedData = computed(() => _.merge({}, componentState.tTextx0x13.default, componentState.tTextx0x13?.[state.screenSize]));

 const tTextx0x14ComputedData = computed(() => _.merge({}, componentState.tTextx0x14.default, componentState.tTextx0x14?.[state.screenSize]));

 const tTextx0x15ComputedData = computed(() => _.merge({}, componentState.tTextx0x15.default, componentState.tTextx0x15?.[state.screenSize]));

 const tTextx0x16ComputedData = computed(() => _.merge({}, componentState.tTextx0x16.default, componentState.tTextx0x16?.[state.screenSize]));

 const tTextx0x17ComputedData = computed(() => _.merge({}, componentState.tTextx0x17.default, componentState.tTextx0x17?.[state.screenSize]));

 const tRectx0x18ComputedData = computed(() => _.merge({}, componentState.tRectx0x18.default, componentState.tRectx0x18?.[state.screenSize]));

 const tRectx0x19ComputedData = computed(() => _.merge({}, componentState.tRectx0x19.default, componentState.tRectx0x19?.[state.screenSize]));

 const tRectx0x21ComputedData = computed(() => _.merge({}, componentState.tRectx0x21.default, componentState.tRectx0x21?.[state.screenSize]));

 const tRowx0x22ComputedData = computed(() => _.merge({}, componentState.tRowx0x22.default, componentState.tRowx0x22?.[state.screenSize]));

 const tTextx0x22x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x22x0.default, componentState.tTextx0x22x0?.[state.screenSize]));

 const tTabsx0x27ComputedData = computed(() => _.merge({}, componentState.tTabsx0x27.default, componentState.tTabsx0x27?.[state.screenSize]));

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
tTextx0x1ComputedData,
tTextx0x2ComputedData,
tTextx0x3ComputedData,
tTextx0x4ComputedData,
tTextx0x5ComputedData,
tTextx0x6ComputedData,
tTextx0x7ComputedData,
tTextx0x8ComputedData,
tRectx0x9ComputedData,
tComponentx0x10ComputedData,
tRectx0x11ComputedData,
tRectx0x12ComputedData,
tTextx0x13ComputedData,
tTextx0x14ComputedData,
tTextx0x15ComputedData,
tTextx0x16ComputedData,
tTextx0x17ComputedData,
tRectx0x18ComputedData,
tRectx0x19ComputedData,
tRectx0x21ComputedData,
tRowx0x22ComputedData,
tTextx0x22x0ComputedData,
tTabsx0x27ComputedData,
onclick1752131166818,
onclick1756795648925_0_0,
onclick1752747601010_0_0,
onclick1756713977569_0_0,
onclick1756716169541_0_0,
onclick1752456642298,
ontabClick1752053388207,
};
},
}
</script>

<style scoped>
.t-l-c-enterpriseDialog {
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
width: 1920px;
height: 1080px;
background-color: rgba(0,0,0,0);
}
.t-l-c-enterpriseDialog .enterpriseDialog-t-rect-0-0 {
position: absolute !important;
top: 194px;
left: 470px;
width: 1000px;
height: 712px;
pointer-events: auto;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-text-0-1 {
position: absolute !important;
top: 255px;
left: 490px;
width: 120px;
height: 32px;
pointer-events: auto;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-text-0-2 {
position: absolute !important;
top: 289px;
left: 1091px;
width: 355px;
height: 32px;
pointer-events: auto;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-text-0-3 {
position: absolute !important;
top: 289px;
left: 969px;
width: 120px;
height: 32px;
pointer-events: auto;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-text-0-4 {
position: absolute !important;
top: 255px;
left: 1091px;
width: 355px;
height: 32px;
pointer-events: auto;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-text-0-5 {
position: absolute !important;
top: 255px;
left: 969px;
width: 120px;
height: 32px;
pointer-events: auto;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-text-0-6 {
position: absolute !important;
top: 289px;
left: 612px;
width: 355px;
height: 32px;
pointer-events: auto;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-text-0-7 {
position: absolute !important;
top: 289px;
left: 490px;
width: 120px;
height: 32px;
pointer-events: auto;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-text-0-8 {
position: absolute !important;
top: 255px;
left: 612px;
width: 355px;
height: 32px;
pointer-events: auto;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-rect-0-9 {
position: absolute !important;
top: 343px;
left: 630px;
width: 820px;
height: 495px;
pointer-events: auto;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-component-0-10 {
position: absolute !important;
top: 358px;
left: 646px;
width: 788px;
height: 468px;
pointer-events: auto;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-rect-0-11 {
position: absolute !important;
top: 854px;
left: 470px;
width: 1000px;
height: 52px;
pointer-events: auto;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-rect-0-12 {
position: absolute !important;
top: 851px;
left: 470px;
width: 1000px;
height: 52px;
pointer-events: auto;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-text-0-13 {
position: absolute !important;
top: 866px;
left: 1350px;
width: 100px;
height: 28px;
pointer-events: auto;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-text-0-14 {
position: absolute !important;
top: 867px;
left: 1244px;
width: 100px;
height: 28px;
pointer-events: auto;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-text-0-15 {
position: absolute !important;
top: 863px;
left: 1277px;
width: 75px;
height: 28px;
pointer-events: auto;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-text-0-16 {
position: absolute !important;
top: 863px;
left: 1174px;
width: 89px;
height: 28px;
pointer-events: auto;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-text-0-17 {
position: absolute !important;
top: 863px;
left: 1364px;
width: 89px;
height: 28px;
pointer-events: auto;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-rect-0-18 {
position: absolute !important;
top: 194px;
left: 470px;
width: 1000px;
height: 47px;
pointer-events: auto;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-rect-0-19 {
position: absolute !important;
top: 205px;
left: 1422px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-rect-0-21 {
position: absolute !important;
top: 343px;
left: 490px;
width: 121px;
height: 495px;
pointer-events: auto;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-row-0-22 {
position: absolute !important;
top: 197px;
left: 489px;
width: 885px;
height: 41px;
pointer-events: auto;
white-space: nowrap;
text-overflow: ellipsis;
animation-name: ;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-text-0-22-0 {
position: unset;
top: -169px;
left: 517px;
width: auto;
height: 19px;
pointer-events: auto;
}

.t-l-c-enterpriseDialog .enterpriseDialog-t-tabs-0-27 {
position: absolute !important;
top: 335px;
left: 491px;
width: 121px;
height: 404px;
pointer-events: auto;
}
</style>
