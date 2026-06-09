<template>
  <div id="t-l-c-waterSourceReport" class="t-l-c-waterSourceReport" ><t-rect id="t-rect-8252.1a4ade4f4" class="waterSourceReport-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-rect id="t-rect-e3a7.d7772ec8d" class="waterSourceReport-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-text id="t-text-8cba.b16affff7" class="waterSourceReport-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle"></t-text><t-rect id="t-rect-da62.857f90ab" class="waterSourceReport-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1733817210174"></t-rect><t-text id="t-text-738d.67fdf6baf" class="waterSourceReport-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle"></t-text><t-list-card id="t-list-card-1afd.46c2cc26d" class="waterSourceReport-t-list-card-0-5"  :data="replaceCssVariables(filterData(state.cardList, componentPropBindingMap?.['t-list-card-1afd.46c2cc26d']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x5ComputedData.spacingX" :col="tListCardx0x5ComputedData.col" :direction="tListCardx0x5ComputedData.direction" :exchange-order="tListCardx0x5ComputedData.exchangeOrder" :unit-break="tListCardx0x5ComputedData.unitBreak" :key-field="tListCardx0x5ComputedData.keyField" :active-key-field="tListCardx0x5ComputedData.activeKeyField" :active="tListCardx0x5ComputedData.active" :c-style="tListCardx0x5ComputedData.cStyle"></t-list-card><t-row id="t-row-7477.212d89662" class="waterSourceReport-t-row-0-6"  :c-style="tRowx0x6ComputedData.cStyle" :gutter="tRowx0x6ComputedData.gutter" :justify="tRowx0x6ComputedData.justify" :align="tRowx0x6ComputedData.align"></t-row><t-component id="t-component-175c.430b7123d" class="waterSourceReport-t-component-0-7"  :name="tComponentx0x7ComputedData.name" :c-style="tComponentx0x7ComputedData.cStyle" :src="tComponentx0x7ComputedData.src" :component-name="tComponentx0x7ComputedData.componentName"></t-component><t-component id="t-component-0e22.c815076cd" class="waterSourceReport-t-component-0-8"  :name="tComponentx0x8ComputedData.name" :c-style="tComponentx0x8ComputedData.cStyle" :src="tComponentx0x8ComputedData.src" :component-name="tComponentx0x8ComputedData.componentName"></t-component><t-text id="t-text-b641.2ed2c8dd" class="waterSourceReport-t-text-0-9"  :label="tTextx0x9ComputedData.label" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle"></t-text><t-text id="t-text-123e.84a996db5" class="waterSourceReport-t-text-0-10"  :label="tTextx0x10ComputedData.label" :editable="tTextx0x10ComputedData.editable" :c-style="tTextx0x10ComputedData.cStyle"></t-text><t-circle id="t-circle-036f.a88742e92" class="waterSourceReport-t-circle-0-11"  :tip="tCirclex0x11ComputedData.tip" :label="tCirclex0x11ComputedData.label" :active="tCirclex0x11ComputedData.active" :c-style="tCirclex0x11ComputedData.cStyle" @mouseover="onmouseover1735113750075" @mouseout="onmouseout1735113764905"></t-circle><t-rect id="t-rect-b3f5.e759e4e94" class="waterSourceReport-t-rect-0-12"  :tip="tRectx0x12ComputedData.tip" :label="tRectx0x12ComputedData.label" :active="tRectx0x12ComputedData.active" :c-style="tRectx0x12ComputedData.cStyle"></t-rect><t-component v-if="state.isShowRight === true" id="t-component-b41f.942f49f86" class="waterSourceReport-t-component-0-13"  :name="tComponentx0x13ComputedData.name" :c-style="tComponentx0x13ComputedData.cStyle" :src="tComponentx0x13ComputedData.src" :component-name="tComponentx0x13ComputedData.componentName"></t-component><t-rect id="t-rect-0142.c0deb38a3" class="waterSourceReport-t-rect-0-14"  :tip="tRectx0x14ComputedData.tip" :label="tRectx0x14ComputedData.label" :active="tRectx0x14ComputedData.active" :c-style="tRectx0x14ComputedData.cStyle"></t-rect><t-row id="t-row-5481.d1eaedfc7" class="waterSourceReport-t-row-0-15"  :c-style="tRowx0x15ComputedData.cStyle" :gutter="tRowx0x15ComputedData.gutter" :justify="tRowx0x15ComputedData.justify" :align="tRowx0x15ComputedData.align"><t-text id="t-text-1f25.914fbd74e" class="waterSourceReport-t-text-0-15-0"  :label="replaceCssVariables(filterData(state.score, componentPropBindingMap?.['t-text-1f25.914fbd74e']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x15x0ComputedData.editable" :c-style="tTextx0x15x0ComputedData.cStyle"></t-text><t-text id="t-text-f456.ada07f646" class="waterSourceReport-t-text-0-15-1"  :label="tTextx0x15x1ComputedData.label" :editable="tTextx0x15x1ComputedData.editable" :c-style="tTextx0x15x1ComputedData.cStyle"></t-text></t-row><t-chart-design id="t-chart-design-c555.54210629a" class="waterSourceReport-t-chart-design-0-16"  :empty-img="tChartDesignx0x16ComputedData.emptyImg" :c-style="tChartDesignx0x16ComputedData.cStyle" :options="replaceCssVariables(filterData(state.options, componentPropBindingMap?.['t-chart-design-c555.54210629a']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-chart-design><t-text v-if="state.isShowTip === true" id="t-text-6c77.803022396" class="waterSourceReport-t-text-0-17"  :label="tTextx0x17ComputedData.label" :editable="tTextx0x17ComputedData.editable" :c-style="tTextx0x17ComputedData.cStyle"></t-text><t-rect id="t-rect-9e0d.96deb30b" class="waterSourceReport-t-rect-0-18"  :tip="tRectx0x18ComputedData.tip" :label="tRectx0x18ComputedData.label" :active="tRectx0x18ComputedData.active" :c-style="tRectx0x18ComputedData.cStyle"></t-rect><t-rect id="t-rect-7aa8.45ac424db" class="waterSourceReport-t-rect-0-19"  :tip="tRectx0x19ComputedData.tip" :label="tRectx0x19ComputedData.label" :active="tRectx0x19ComputedData.active" :c-style="tRectx0x19ComputedData.cStyle"></t-rect></div>
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
import { TChartDesign, TCircle, TComponent, TListCard, TRect, TRow, TText } from '@ths/design';

export default {
  components: {
    TChartDesign,
    TCircle,
    TComponent,
    TListCard,
    TRect,
    TRow,
    TText,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-8252.1a4ade4f4":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-e3a7.d7772ec8d":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-8cba.b16affff7":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-da62.857f90ab":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-738d.67fdf6baf":{"attributeName":"tTextx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-1afd.46c2cc26d":{"attributeName":"tListCardx0x5","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-row-7477.212d89662":{"attributeName":"tRowx0x6","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-2069.03f2d6c5a":{"attributeName":"tTextx0x6x0"},"t-component-175c.430b7123d":{"attributeName":"tComponentx0x7","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-0e22.c815076cd":{"attributeName":"tComponentx0x8","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-b641.2ed2c8dd":{"attributeName":"tTextx0x9","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-123e.84a996db5":{"attributeName":"tTextx0x10","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-circle-036f.a88742e92":{"attributeName":"tCirclex0x11","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-b3f5.e759e4e94":{"attributeName":"tRectx0x12","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-b41f.942f49f86":{"attributeName":"tComponentx0x13","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-rect-0142.c0deb38a3":{"attributeName":"tRectx0x14","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-row-5481.d1eaedfc7":{"attributeName":"tRowx0x15","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-1f25.914fbd74e":{"attributeName":"tTextx0x15x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-f456.ada07f646":{"attributeName":"tTextx0x15x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-design-c555.54210629a":{"attributeName":"tChartDesignx0x16","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-text-6c77.803022396":{"attributeName":"tTextx0x17","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-9e0d.96deb30b":{"attributeName":"tRectx0x18","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-7aa8.45ac424db":{"attributeName":"tRectx0x19","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   isShowRight: false,
   xfts: {"num":"","list":[]},
   isShowCard: {"punish":false,"over":false,"trend":false,"emission":false,"pollute":false},
   punish: {"num":"0","list":[]},
   over: {"num":"0","list":[]},
   trend: "",
   emission: {"year":"","list":[]},
   pollute: [],
   scoreTypeTitle: [],
   isShowTip: false,
   options: {},
   SCORE_ID: "",
   STANDENTERID: "",
   score: "0",
   cardList: [{"title":"污染源名称","num":"-"},{"title":"行业类别","num":"-"},{"title":"所属行政区","num":"-"},{"title":"地址","num":"-"}],
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
            default: {"width":"1001px","height":"712px","position":"unset","left":"0px","top":"2px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1001px","height":"712px","position":"unset","left":"0px","top":"2px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"1001px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"0px","top":"1px","animationName":"","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1001px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"0px","top":"1px","animationName":"","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"907px","height":"24px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"24px","top":"12px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"0px","fontWeight":"700","animationName":"","lineHeight":"24px","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},
            
            },
 default: { 
 
label:"溯源分析报告",
editable:false,
cStyle:{"wrapper":{"default":{"width":"907px","height":"24px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"24px","top":"12px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"0px","fontWeight":"700","animationName":"","lineHeight":"24px","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"944px","top":"12px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"944px","top":"12px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"1001px","height":"52px","color":"var(--t-font-color-gy1)","position":"unset","left":"-1px","top":"660px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","backgroundColor":"var(--business-show-bg15)"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"1001px","height":"52px","color":"var(--t-font-color-gy1)","position":"unset","left":"-1px","top":"660px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tListCardx0x5: {
defaultStyle: {
            default: {"width":"960px","height":"63px","position":"unset","left":"20px","top":"103px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"污染源名称","num":"-"},{"title":"行业类别","num":"-"},{"title":"所属行政区","num":"-"},{"title":"地址","num":"-"}],
spacingX:2,
col:2,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"960px","height":"63px","position":"unset","left":"20px","top":"103px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"120px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"6px","paddingLeft":"16px","paddingBottom":"6px"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"357px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"nowrap","width":"357px","height":"auto","textOverflow":"ellipsis","overflow":"hidden"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}},"specialCardIcon":{"default":{"width":"auto"}}}, 
 },
},
tRowx0x6: {
defaultStyle: {
            default: {"width":"220px","height":"28px","position":"unset","left":"748px","top":"674px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"220px","height":"28px","position":"unset","left":"748px","top":"674px","animationName":""}}},
gutter:0,
justify:"end",
align:"middle", 
 },
},
tComponentx0x7: {
defaultStyle: {
            default: {"width":"956px","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"64px","animationName":""},
            
            },
 default: { 
 
name:"SyDialogTitleBackgroudComponent",
cStyle:{"wrapper":{"default":{"width":"956px","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"64px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/SyDialogTitleBackgroud",
componentName:"SyDialogTitleBackgroudComponent", 
 },
},
tComponentx0x8: {
defaultStyle: {
            default: {"width":"956px","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"193px","animationName":""},
            
            },
 default: { 
 
name:"SyDialogTitleBackgroudComponent",
cStyle:{"wrapper":{"default":{"width":"956px","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"193px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/SyDialogTitleBackgroud",
componentName:"SyDialogTitleBackgroudComponent", 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"width":"90px","height":"16px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"56px","top":"71px","fontFamily":"方正综艺","fontSize":"16px","animationName":"","lineHeight":"16px","letterSpacing":"2px"},
            
            },
 default: { 
 
label:"基本信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"16px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"56px","top":"71px","fontFamily":"方正综艺","fontSize":"16px","animationName":"","lineHeight":"16px","letterSpacing":"2px"}}}, 
 },
},
tTextx0x10: {
defaultStyle: {
            default: {"width":"76px","height":"16px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"56px","top":"200px","fontFamily":"方正综艺","fontSize":"16px","animationName":"","lineHeight":"16px","letterSpacing":"2px"},
            
            },
 default: { 
 
label:"综合评分",
editable:false,
cStyle:{"wrapper":{"default":{"width":"76px","height":"16px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"56px","top":"200px","fontFamily":"方正综艺","fontSize":"16px","animationName":"","lineHeight":"16px","letterSpacing":"2px"}}}, 
 },
},
tCirclex0x11: {
defaultStyle: {
            default: {"width":"14px","height":"14px","top":"200px","left":"135px","backgroundColor":"var(--business-theme)","color":"rgba(255, 255, 255, 1)","fontSize":"12px","textAlign":"center","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"?",
active:false,
cStyle:{"wrapper":{"default":{"width":"14px","height":"14px","top":"200px","left":"135px","backgroundColor":"var(--business-theme)","color":"rgba(255, 255, 255, 1)","fontSize":"12px","textAlign":"center","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","position":"unset"}}}, 
 },
},
tRectx0x12: {
defaultStyle: {
            default: {"width":"960px","height":"410px","position":"unset","left":"20px","top":"233px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg10)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"960px","height":"410px","position":"unset","left":"20px","top":"233px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg10)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)"}}}, 
 },
},
tComponentx0x13: {
defaultStyle: {
            default: {"width":"478px","height":"387px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"494px","top":"245px","overflow":"auto"},
            
            },
 default: { 
 
name:"waterSourceReportRightComponent",
cStyle:{"wrapper":{"default":{"width":"478px","height":"387px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"494px","top":"245px","overflow":"auto"}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/waterSourceReportRight",
componentName:"waterSourceReportRightComponent", 
 },
},
tRectx0x14: {
defaultStyle: {
            default: {"width":"207px","height":"52px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"150px","top":"255px","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"100px","borderTopRightRadius":"100px","borderBottomLeftRadius":"100px","borderBottomRightRadius":"100px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"207px","height":"52px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"150px","top":"255px","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"100px","borderTopRightRadius":"100px","borderBottomLeftRadius":"100px","borderBottomRightRadius":"100px"}}}, 
 },
},
tRowx0x15: {
defaultStyle: {
            default: {"width":"160px","height":"40px","position":"unset","left":"173px","top":"261px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"160px","height":"40px","position":"unset","left":"173px","top":"261px"}}},
gutter:0,
justify:"center",
align:"bottom", 
 },
},
tTextx0x15x0: {
defaultStyle: {
            default: {"width":"auto","height":"40px","color":"var(--business-white)","position":"unset","left":"174px","top":"266px","fontSize":"40px","fontWeight":"700","lineHeight":"40px","fontFamily":"DIN-medium","textAlign":"right","whiteSpace":"nowrap"},
            
            },
 default: { 
 
label:"0",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"40px","color":"var(--business-white)","position":"unset","left":"174px","top":"266px","fontSize":"40px","fontWeight":"700","lineHeight":"40px","fontFamily":"DIN-medium","textAlign":"right","whiteSpace":"nowrap"}}}, 
 },
},
tTextx0x15x1: {
defaultStyle: {
            default: {"width":"14px","height":"21px","color":"var(--business-unit-icon)","position":"unset","left":"291px","top":"284px","fontSize":"14px","fontWeight":"400","lineHeight":"21px","animationName":"","overflow":"visible","marginLeft":"4px"},
            
            },
 default: { 
 
label:"分",
editable:false,
cStyle:{"wrapper":{"default":{"width":"14px","height":"21px","color":"var(--business-unit-icon)","position":"unset","left":"291px","top":"284px","fontSize":"14px","fontWeight":"400","lineHeight":"21px","animationName":"","overflow":"visible","marginLeft":"4px"}}}, 
 },
},
tChartDesignx0x16: {
defaultStyle: {
            default: {"height":"296px","width":"443px","position":"unset","left":"31px","top":"325px"},
            
            },
 default: { 
 
emptyImg:"assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"296px","width":"443px","position":"unset","left":"31px","top":"325px"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
tTextx0x17: {
defaultStyle: {
            default: {"width":"auto","height":"28px","color":"var(--t-white)","position":"unset","left":"20px","top":"168px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","fontSize":"12px","paddingTop":"0px","paddingLeft":"10px","backgroundColor":"var(--business-btn-default)","animationName":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","lineHeight":"12px","paddingRight":"10px","display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center"},
            
            },
 default: { 
 
label:"综合评分 = 污染物排放贡献率评分 + 行政处罚次数评分 + 超标报警次数评分 + 污染物相关指标评分",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"28px","color":"var(--t-white)","position":"unset","left":"20px","top":"168px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","fontSize":"12px","paddingTop":"0px","paddingLeft":"10px","backgroundColor":"var(--business-btn-default)","animationName":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","lineHeight":"12px","paddingRight":"10px","display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center"}}}, 
 },
},
tRectx0x18: {
defaultStyle: {
            default: {"width":"40px","height":"52px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(assets/images/2024-12-26/0a97ddfa92d2499196ffa143ed9f5596.svg)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"113px","top":"255px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"40px","height":"52px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(assets/images/2024-12-26/0a97ddfa92d2499196ffa143ed9f5596.svg)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"113px","top":"255px"}}}, 
 },
},
tRectx0x19: {
defaultStyle: {
            default: {"width":"40px","height":"52px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(assets/images/2024-12-26/c745d89e205540678f8220b3fa08432f.svg)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"353px","top":"255px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"40px","height":"52px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(assets/images/2024-12-26/c745d89e205540678f8220b3fa08432f.svg)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"353px","top":"255px","animationName":""}}}, 
 },
},
});
const handleCloseMsg = () => {
/* 发送消息 */
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [ // 消息内容
    { shareCode: "close_map_window", runtimeValue: true },
    { shareCode: "close_window_code", runtimeValue: "surfaceWater_details" }
  ]
});

};
const initPage = () => {
const getData = async () => {
  state.SCORE_ID = global.businessDialog.dialogParmas.SCORE_ID || "37bb0f07591a4783869322d2522ef173"
  state.STANDENTERID = global.businessDialog.dialogParmas.STANDENTERID || "PWXKZ_6ccd0df0-c9b1-4206-ad4d-fe84e82e60c0"
  setProvider();
  apiRegistry.getBaseInfo.request();
  apiRegistry.getEcharts.request();
}

getData();
};
const setOptions = () => {
state.options = {
  tooltip: {
    show: true,
    backgroundColor: 'rgba(50, 50, 50, 0.7)',
    borderWidth: 0,
    confine: true,
    textStyle: {
      color: '#fff'
    },
    formatter: function (params) {
      const { marker, name, value } = params;
      // 总分
      let sum = value.reduce((val1, val2) => Number(val1) + Number(val2));
      sum = sum.toFixed(2);
      var html = `<div style="display: flex; justify-content: space-between"><span>${name}</span>${sum}</div>`;
      value.forEach((val, index) => {
        html += `<div style="display: flex; justify-content: space-between; line-height: 22px">
                <span style="margin-right: 20px"><span style="transform: scale(0.5); display: inline-block">${marker}</span> ${state.scoreTypeTitle[index]}</span>${val}
              </div>`;
      });
      return html;
    }
  },
  radar: {
    indicator: [],
    radius: 100,
    nameGap: 10,
    axisLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.35)'
      }
    },
    axisName: {
      color: '#fff',
      fontSize: 12,
      lineHeight: 20,
    },
    splitArea: {
      areaStyle: {
        color: ['transparent', 'rgba(255, 255, 255, 0.05)', 'transparent', 'rgba(255, 255, 255, 0.05)', 'transparent'],
      }
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.35)'
      }
    }
  },
  series: [
    {
      type: 'radar',
      symbolSize: 0,
      itemStyle: {
        color: '#00FFFF'
      },
      data: [
        {
          value: [],
          name: '综合评分',
          lineStyle: {
            color: '#00FFFF',
          },
          areaStyle: {
            color: 'rgba(137,185,242,0.9)'
          }
        }
      ]
    }
  ]
}
};
const setProvider = () => {
provide('syDialogState', state);
};
const setMark = (equation,style,markDirection) => {
if (!equation) return '';
// 标记
let mark = '';
// 若为下标
if (markDirection === 'down') mark = 'sub';
// 若为上标
else if (markDirection === 'up') mark = 'sup';
// 否则直接返回原表达式
else return equation;
const re = /([A-Z|a-z]+)(\d+\.?\d?)/g;
return equation.replace(re, ($1, $2, $3) => {
  return `${$2}<${mark} style="${style}">${$3}</${mark}>`;
});
};
const onclick1733817210174 = () => {
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
// 执行自定义方法
handleCloseMsg();
};
const onmouseover1735113750075 = () => {
// 设置变量值
state.isShowTip = true;
};
const onmouseout1735113764905 = () => {
// 设置变量值
state.isShowTip = false;
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"STANDENTERID":"state.STANDENTERID","interfaceId":"9da90647b71d412c1d37f18ae047f245"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"STANDENTERID":state.STANDENTERID,"interfaceId":"9da90647b71d412c1d37f18ae047f245"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"STANDENTERID":state.STANDENTERID,"interfaceId":"9da90647b71d412c1d37f18ae047f245"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     state.cardList.forEach(i => i.num = "-");
if (res.data?.head?.statusCode === '200' && res.data?.data?.length) {
  const { ENTER_NAME, TRADE_NAME, REGION_NAME, ENTER_ADDR } = res.data.data[0]
  state.cardList[0].num = ENTER_NAME || "-";
  state.cardList[1].num = TRADE_NAME || "-";
  state.cardList[2].num = REGION_NAME || "-";
  state.cardList[3].num = ENTER_ADDR || "-";
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
 getEcharts: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"SCORE_ID":"state.SCORE_ID","interfaceId":"c4ecfb459f5c15109103f69365f5dd5b"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"SCORE_ID":state.SCORE_ID,"interfaceId":"c4ecfb459f5c15109103f69365f5dd5b"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"SCORE_ID":state.SCORE_ID,"interfaceId":"c4ecfb459f5c15109103f69365f5dd5b"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getEcharts'] = res.data;
                
     state.score = "0";
state.isShowCard = {
  "punish": false,
  "over": false,
  "trend": false,
  "emission": false,
  "pollute": false
};
state.punish = {
  "num": "0",
  "list": []
};
state.over = {
  "num": "0",
  "list": []
};
state.trend = "";
state.emission = {
  "year": "",
  "list": []
};
state.xfts = {
  "year": "",
  "list": []
};
state.pollute = [];

console.log('雷达图响应', res);
if (res.data?.head?.statusCode === '200' && res.data?.data?.length) {
  const { data } = res.data
  // 总分
  state.score = `${data.reduce((accumulator, currentValue) => {
    return accumulator + Number(currentValue.DETAIL_SCORE || "0");
  }, 0)}`;

  // 标题数组
  state.scoreTypeTitle = data.map(i => i.RULE_DESC)

  // 雷达数据
  state.options.radar.indicator = data.map(i => ({
    name: i.RULE_DESC || "",
    max: 35,
  }))
  state.options.series[0].data[0].value = data.map(i => i.DETAIL_SCORE || "0")

  // 是否显示卡片
  const ruleTypeList = data.map(i => i.RULE_TYPE)
  ruleTypeList.forEach(key => {
    if (state.isShowCard.hasOwnProperty(key)) {
      state.isShowCard[key] = true;
    }
  });

  // 卡片数据
  // 创建一个新的对象 result，键来自 state.isShowCard，值初始化为空字符串
  const result = {};
  for (const key in state.isShowCard) {
    if (state.isShowCard.hasOwnProperty(key)) {
      result[key] = "";
    }
  }
  // 遍历 data 数组，找到匹配的 RULE_TYPE 并设置 result 中对应键的值
  data.forEach(item => {
    if (result.hasOwnProperty(item.RULE_TYPE)) {
      result[item.RULE_TYPE] = item.DETIAL_RESULTS;
    }
  });

  // 信访投诉
  const xftsData = data.filter((item) => item.RULE_TYPE === 'petitionLetter')?.[0] || {};
  const xftsCountObj = xftsData?.DETIAL_RESULTS || '{}';
  const xftsCount = JSON.parse(xftsCountObj)?.petitionLetterCount || 0;
  console.log('信访投诉卡片数据', xftsData, xftsCountObj, xftsCount);
  state.xfts = {
    num: xftsCount,
    list: [],
  };

  // 行政处罚
  if (ruleTypeList.includes("punish")) {
    const { punishCount, punishTypeList } = JSON.parse(result["punish"] || "")
    state.punish = {
      "num": punishCount || "0",
      "list": punishTypeList.map((i) => ({
        label: setMark(i.punishTypeName || ""),
        normal: false,
      })) || []
    };
  }

  // 超标报警
  if (ruleTypeList.includes("over")) {
    const { overCount, overPolluteList, alarmRelationOverPolluteList } = JSON.parse(result["over"] || "")
    state.over = {
      "num": overCount || "0",
      "list": overPolluteList.map((i) => ({
        label: setMark(i.polluteName || ""),
        normal: !alarmRelationOverPolluteList.find((val) => val.polluteCode === i.polluteCode), // 异常指标数组里是否包含了当前指标
      })) || []
    };
  }

  // 数据波动相关性
  if (ruleTypeList.includes("trend")) {
    const { relationValue } = JSON.parse(result["trend"] || "")
    state.trend = relationValue || "";
  }

  // 污染物排放贡献率
  if (ruleTypeList.includes("emission")) {
    const { emissionYear, emissionList } = JSON.parse(result["emission"] || "")
    state.emission = {
      "year": emissionYear || "",
      "list": emissionList.map(i => ({
        polluteName: setMark(i.polluteName || ""),
        emission: ((i.emission || 0) * 0.001).toFixed(6),
        rank: `${i.rank || 0}/${i.sourceCount || 0}`
      })) || []
    };
  }

  // 污染物相关指标
  if (ruleTypeList.includes("pollute")) {
    const { polluteList, alarmRelationPolluteList } = JSON.parse(result["pollute"] || "")
    state.pollute = polluteList.map((i) => ({
      label: setMark(i.polluteName || ""),
      normal: !alarmRelationPolluteList.find((val) => val.polluteCode === i.polluteCode), // 异常指标数组里是否包含了当前指标
    })) || [];
  };
  state.isShowRight = true;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.score = "0";
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-waterSourceReport', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setOptions();
// 执行自定义方法
initPage();
onMounted(() => {
setPageScale('t-l-c-waterSourceReport', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tListCardx0x5ComputedData = computed(() => _.merge({}, componentState.tListCardx0x5.default, componentState.tListCardx0x5?.[state.screenSize]));

 const tRowx0x6ComputedData = computed(() => _.merge({}, componentState.tRowx0x6.default, componentState.tRowx0x6?.[state.screenSize]));

 const tComponentx0x7ComputedData = computed(() => _.merge({}, componentState.tComponentx0x7.default, componentState.tComponentx0x7?.[state.screenSize]));

 const tComponentx0x8ComputedData = computed(() => _.merge({}, componentState.tComponentx0x8.default, componentState.tComponentx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tTextx0x10ComputedData = computed(() => _.merge({}, componentState.tTextx0x10.default, componentState.tTextx0x10?.[state.screenSize]));

 const tCirclex0x11ComputedData = computed(() => _.merge({}, componentState.tCirclex0x11.default, componentState.tCirclex0x11?.[state.screenSize]));

 const tRectx0x12ComputedData = computed(() => _.merge({}, componentState.tRectx0x12.default, componentState.tRectx0x12?.[state.screenSize]));

 const tComponentx0x13ComputedData = computed(() => _.merge({}, componentState.tComponentx0x13.default, componentState.tComponentx0x13?.[state.screenSize]));

 const tRectx0x14ComputedData = computed(() => _.merge({}, componentState.tRectx0x14.default, componentState.tRectx0x14?.[state.screenSize]));

 const tRowx0x15ComputedData = computed(() => _.merge({}, componentState.tRowx0x15.default, componentState.tRowx0x15?.[state.screenSize]));

 const tTextx0x15x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x15x0.default, componentState.tTextx0x15x0?.[state.screenSize]));

 const tTextx0x15x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x15x1.default, componentState.tTextx0x15x1?.[state.screenSize]));

 const tChartDesignx0x16ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x16.default, componentState.tChartDesignx0x16?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tTextx0x17ComputedData = computed(() => _.merge({}, componentState.tTextx0x17.default, componentState.tTextx0x17?.[state.screenSize]));

 const tRectx0x18ComputedData = computed(() => _.merge({}, componentState.tRectx0x18.default, componentState.tRectx0x18?.[state.screenSize]));

 const tRectx0x19ComputedData = computed(() => _.merge({}, componentState.tRectx0x19.default, componentState.tRectx0x19?.[state.screenSize]));

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
tRectx0x1ComputedData,
tTextx0x2ComputedData,
tRectx0x3ComputedData,
tTextx0x4ComputedData,
tListCardx0x5ComputedData,
tRowx0x6ComputedData,
tComponentx0x7ComputedData,
tComponentx0x8ComputedData,
tTextx0x9ComputedData,
tTextx0x10ComputedData,
tCirclex0x11ComputedData,
tRectx0x12ComputedData,
tComponentx0x13ComputedData,
tRectx0x14ComputedData,
tRowx0x15ComputedData,
tTextx0x15x0ComputedData,
tTextx0x15x1ComputedData,
tChartDesignx0x16ComputedData,
tTextx0x17ComputedData,
tRectx0x18ComputedData,
tRectx0x19ComputedData,
onclick1733817210174,
onmouseover1735113750075,
onmouseout1735113764905,
};
},
}
</script>

<style scoped>
.t-l-c-waterSourceReport {
position: relative;
overflow: hidden;
--theme-color: var(--t-brand8);
--theme-color-opacity-10: rgba(var(--t-brand8), .1);
--theme-color-opacity-15: rgba(var(--t-brand8), .15);
--theme-color-opacity-40: rgba(var(--t-brand8), .4);
--theme-color-opacity-60: rgba(var(--t-brand8), .6);
--theme-color-opacity-80: rgba(var(--t-brand8), .8);
--theme-color-opacity-90: rgba(var(--t-brand8), .9);
--scrollbar-track-color: var(--business-show-bg30);
--scrollbar-thumb-color: var(--business-theme);
pointer-events: auto;
position: Relative;
z-index: 1;
filter: ;
width: 1000px;
height: 712px;
background-color: rgba(168, 158, 158, 0);
left: 50%;
top: 50%;
transform: translateX(-50%) translateY(-50%);
}
.t-l-c-waterSourceReport .waterSourceReport-t-rect-0-0 {
position: absolute !important;
top: 2px;
left: 0px;
width: 1001px;
height: 712px;
pointer-events: auto;
}

.t-l-c-waterSourceReport .waterSourceReport-t-rect-0-1 {
position: absolute !important;
top: 1px;
left: 0px;
width: 1001px;
height: 47px;
pointer-events: auto;
}

.t-l-c-waterSourceReport .waterSourceReport-t-text-0-2 {
position: absolute !important;
top: 12px;
left: 24px;
width: 907px;
height: 24px;
pointer-events: auto;
}

.t-l-c-waterSourceReport .waterSourceReport-t-rect-0-3 {
position: absolute !important;
top: 12px;
left: 944px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-waterSourceReport .waterSourceReport-t-text-0-4 {
position: absolute !important;
top: 660px;
left: -1px;
width: 1001px;
height: 52px;
pointer-events: auto;
}

.t-l-c-waterSourceReport .waterSourceReport-t-list-card-0-5 {
position: absolute !important;
top: 103px;
left: 20px;
width: 960px;
height: 63px;
pointer-events: auto;
}

.t-l-c-waterSourceReport .waterSourceReport-t-row-0-6 {
position: absolute !important;
top: 674px;
left: 748px;
width: 220px;
height: 28px;
pointer-events: auto;
animation-name: ;
}

.t-l-c-waterSourceReport .waterSourceReport-t-component-0-7 {
position: absolute !important;
top: 64px;
left: 20px;
width: 956px;
height: 28px;
pointer-events: auto;
}

.t-l-c-waterSourceReport .waterSourceReport-t-component-0-8 {
position: absolute !important;
top: 193px;
left: 20px;
width: 956px;
height: 28px;
pointer-events: auto;
}

.t-l-c-waterSourceReport .waterSourceReport-t-text-0-9 {
position: absolute !important;
top: 71px;
left: 56px;
width: 90px;
height: 16px;
pointer-events: auto;
}

.t-l-c-waterSourceReport .waterSourceReport-t-text-0-10 {
position: absolute !important;
top: 200px;
left: 56px;
width: 76px;
height: 16px;
pointer-events: auto;
}

.t-l-c-waterSourceReport .waterSourceReport-t-circle-0-11 {
position: absolute !important;
top: 200px;
left: 135px;
width: 14px;
height: 14px;
pointer-events: auto;
}

.t-l-c-waterSourceReport .waterSourceReport-t-rect-0-12 {
position: absolute !important;
top: 233px;
left: 20px;
width: 960px;
height: 410px;
pointer-events: auto;
}

.t-l-c-waterSourceReport .waterSourceReport-t-component-0-13 {
position: absolute !important;
top: 245px;
left: 494px;
width: 478px;
height: 387px;
pointer-events: auto;
}

.t-l-c-waterSourceReport .waterSourceReport-t-rect-0-14 {
position: absolute !important;
top: 255px;
left: 150px;
width: 207px;
height: 52px;
pointer-events: auto;
}

.t-l-c-waterSourceReport .waterSourceReport-t-row-0-15 {
position: absolute !important;
top: 261px;
left: 173px;
width: 160px;
height: 40px;
pointer-events: auto;
}

.t-l-c-waterSourceReport .waterSourceReport-t-text-0-15-0 {
position: unset;
top: 266px;
left: 174px;
width: auto;
height: 40px;
pointer-events: auto;
}

.t-l-c-waterSourceReport .waterSourceReport-t-text-0-15-1 {
position: unset;
top: 284px;
left: 291px;
width: 14px;
height: 21px;
pointer-events: auto;
}

.t-l-c-waterSourceReport .waterSourceReport-t-chart-design-0-16 {
position: absolute !important;
top: 325px;
left: 31px;
width: 443px;
height: 296px;
pointer-events: auto;
}

.t-l-c-waterSourceReport .waterSourceReport-t-text-0-17 {
position: absolute !important;
top: 168px;
left: 20px;
width: auto;
height: 28px;
pointer-events: auto;
}

.t-l-c-waterSourceReport .waterSourceReport-t-rect-0-18 {
position: absolute !important;
top: 255px;
left: 113px;
width: 40px;
height: 52px;
pointer-events: auto;
}

.t-l-c-waterSourceReport .waterSourceReport-t-rect-0-19 {
position: absolute !important;
top: 255px;
left: 353px;
width: 40px;
height: 52px;
pointer-events: auto;
}
</style>
