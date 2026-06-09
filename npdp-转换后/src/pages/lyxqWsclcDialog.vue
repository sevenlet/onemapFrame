<template>
  <div id="t-l-c-lyxqWsclcDialog" class="t-l-c-lyxqWsclcDialog" ><t-rect id="t-rect-8252.1a4ade4f4" class="lyxqWsclcDialog-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-rect id="t-rect-e3a7.d7772ec8d" class="lyxqWsclcDialog-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-text id="t-text-8cba.b16affff7" class="lyxqWsclcDialog-t-text-0-2"  :label="state.title" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle" :show-title="tTextx0x2ComputedData.showTitle"></t-text><t-rect id="t-rect-da62.857f90ab" class="lyxqWsclcDialog-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1733817210174"></t-rect><t-rect id="t-rect-53cc.6b9aa23e7" class="lyxqWsclcDialog-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle"></t-rect><t-text id="t-text-f445.54f91b1e5" class="lyxqWsclcDialog-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle" @click="onclick1738746132003"></t-text><t-text id="t-text-26d5.d777feb8d" class="lyxqWsclcDialog-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle" @click="onclick1738746175147"></t-text><t-text id="t-text-1e3c.c576adedc" class="lyxqWsclcDialog-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle" @click="onclick1738746213995"></t-text><t-list-card id="t-list-card-a89e.9248b8bff" class="lyxqWsclcDialog-t-list-card-0-8"  :data="state.cardList1" :spacing-x="tListCardx0x8ComputedData.spacingX" :col="tListCardx0x8ComputedData.col" :direction="tListCardx0x8ComputedData.direction" :exchange-order="tListCardx0x8ComputedData.exchangeOrder" :unit-break="tListCardx0x8ComputedData.unitBreak" :key-field="tListCardx0x8ComputedData.keyField" :active-key-field="tListCardx0x8ComputedData.activeKeyField" :active="tListCardx0x8ComputedData.active" :c-style="tListCardx0x8ComputedData.cStyle"></t-list-card><t-list-card id="t-list-card-4cc8.a7d98c6a6" class="lyxqWsclcDialog-t-list-card-0-9"  :data="state.cardList2" :spacing-x="tListCardx0x9ComputedData.spacingX" :col="tListCardx0x9ComputedData.col" :direction="tListCardx0x9ComputedData.direction" :exchange-order="tListCardx0x9ComputedData.exchangeOrder" :unit-break="tListCardx0x9ComputedData.unitBreak" :key-field="tListCardx0x9ComputedData.keyField" :active-key-field="tListCardx0x9ComputedData.activeKeyField" :active="tListCardx0x9ComputedData.active" :c-style="tListCardx0x9ComputedData.cStyle"></t-list-card><t-list-card id="t-list-card-9908.351032cea" class="lyxqWsclcDialog-t-list-card-0-10"  :data="state.cardList3" :spacing-x="tListCardx0x10ComputedData.spacingX" :col="tListCardx0x10ComputedData.col" :direction="tListCardx0x10ComputedData.direction" :exchange-order="tListCardx0x10ComputedData.exchangeOrder" :unit-break="tListCardx0x10ComputedData.unitBreak" :key-field="tListCardx0x10ComputedData.keyField" :active-key-field="tListCardx0x10ComputedData.activeKeyField" :active="tListCardx0x10ComputedData.active" :c-style="tListCardx0x10ComputedData.cStyle"></t-list-card></div>
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
import { TListCard, TRect, TText } from '@ths/design';

export default {
  components: {
    TListCard,
    TRect,
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
   title: "-",
   pointData: {},
   cardList3: [{"title":"地址","num":"-"}],
   cardList2: [{"title":"项目名称","num":"-"},{"title":"设计规模（万吨/日）","num":"-"},{"title":"处理工艺","num":"-"},{"title":"排入水体","num":"-"},{"title":"设计进水氨氮(MG/L)","num":"-"},{"title":"出水限值BOD5(MG/L)","num":"-"},{"title":"出水限值NH3-N(MG/L)","num":"-"},{"title":"出水限值TP(MG/L)","num":"-"}],
   cardList1: [{"title":"编号","num":"-"},{"title":"区域","num":"-"},{"title":"运行时间","num":"-"},{"title":"出水标准","num":"-"},{"title":"设计进水CODCR(MG/L)","num":"-"},{"title":"出水限值CODCR(MG/L)","num":"-"},{"title":"出水限值SS(MG/L)","num":"-"},{"title":"出水限值TN(MG/L)","num":"-"}],
   DATA_ID: "",
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
            default: {"width":"946px","height":"450px","position":"unset","left":"487px","top":"315px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"946px","height":"450px","position":"unset","left":"487px","top":"315px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"945px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"487px","top":"315px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"945px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"487px","top":"315px","animationName":""}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"860px","height":"21px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"511px","top":"329px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"0px","fontWeight":"700","animationName":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"860px","height":"21px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"511px","top":"329px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"0px","fontWeight":"700","animationName":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}},
showTitle:true, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1393px","top":"327px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1393px","top":"327px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"946px","height":"52px","position":"unset","left":"487px","top":"713px","borderLeft":"0px solid ","borderTop":"1px solid var(--business-show-bg60)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg15)","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"946px","height":"52px","position":"unset","left":"487px","top":"713px","borderLeft":"0px solid ","borderTop":"1px solid var(--business-show-bg60)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg15)","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","animationName":""}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"90px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1104px","top":"726px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"var(--business-dialog-icon-around)","backgroundPosition":"8px 50%","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"周边查询",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1104px","top":"726px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"var(--business-dialog-icon-around)","backgroundPosition":"8px 50%","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"90px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1213px","top":"726px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"var(--business-dialog-icon-detail)","backgroundPosition":"22px 50%","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"详情",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1213px","top":"726px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"var(--business-dialog-icon-detail)","backgroundPosition":"22px 50%","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""}}}, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"90px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1322px","top":"726px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"var(--business-dialog-icon-scale)","backgroundPosition":"18% 50%","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"缩放至",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"28px","color":"var(--business-strong)","position":"unset","left":"1322px","top":"726px","lineHeight":"28px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"var(--business-dialog-icon-scale)","backgroundPosition":"18% 50%","backgroundRepeat":"no-repeat","backgroundSize":"auto","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","borderTopLeftRadius":"89px","borderTopRightRadius":"89px","borderBottomLeftRadius":"89px","borderBottomRightRadius":"89px","textAlign":"center","paddingLeft":"16px","cursor":"pointer","animationName":""}}}, 
 },
},
tListCardx0x8: {
defaultStyle: {
            default: {"width":"467px","height":"280px","position":"unset","left":"507px","top":"381px","overflow":"visible","animationName":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
data:[{"title":"编号","num":"-"},{"title":"区域","num":"-"},{"title":"运行时间","num":"-"},{"title":"出水标准","num":"-"},{"title":"设计进水CODCR(MG/L)","num":"-"},{"title":"出水限值CODCR(MG/L)","num":"-"},{"title":"出水限值SS(MG/L)","num":"-"},{"title":"出水限值TN(MG/L)","num":"-"}],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"467px","height":"280px","position":"unset","left":"507px","top":"381px","overflow":"visible","animationName":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"200px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","borderLeft":"1px none rgba(23,228,64,1)","borderTop":"1px none rgba(23,228,64,1)","borderRight":"1px none rgba(23,228,64,1)","borderBottom":"1px none rgba(23,228,64,1)","whiteSpace":"nowrap"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"264px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
tListCardx0x9: {
defaultStyle: {
            default: {"width":"435px","height":"280px","position":"unset","left":"977px","top":"381px","overflow":"visible","animationName":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
data:[{"title":"项目名称","num":"-"},{"title":"设计规模（万吨/日）","num":"-"},{"title":"处理工艺","num":"-"},{"title":"排入水体","num":"-"},{"title":"设计进水氨氮(MG/L)","num":"-"},{"title":"出水限值BOD5(MG/L)","num":"-"},{"title":"出水限值NH3-N(MG/L)","num":"-"},{"title":"出水限值TP(MG/L)","num":"-"}],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"435px","height":"280px","position":"unset","left":"977px","top":"381px","overflow":"visible","animationName":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"180px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","whiteSpace":"nowrap"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"264px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
tListCardx0x10: {
defaultStyle: {
            default: {"width":"905px","height":"33px","position":"unset","left":"507px","top":"661px","overflow":"visible","animationName":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
data:[{"title":"地址","num":"-"}],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"905px","height":"33px","position":"unset","left":"507px","top":"661px","overflow":"visible","animationName":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"200px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","borderLeft":"1px none rgba(23,228,64,1)","borderTop":"1px none rgba(23,228,64,1)","borderRight":"1px none rgba(23,228,64,1)","borderBottom":"1px none rgba(23,228,64,1)","whiteSpace":"nowrap"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"702px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
});
const initPageList = () => {
// 弹框传过来的参数
state.DATA_ID = global.businessDialog?.dialogParmas?.DATA_ID || '2333';

// 获取预警列表
getWaringList()
};
const aroundQuery = () => {
console.log('周边查询');

const pointInfo = state.pointData;

if (pointInfo.LONGITUDE && pointInfo.LATITUDE) {
  // 周边查询
  const pointLocation = [];
  pointLocation.push(parseFloat(pointInfo.LONGITUDE));
  pointLocation.push(parseFloat(pointInfo.LATITUDE));

  /* 发送消息 */
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractiveChange", // 消息名称
    data: [ // 消息内容
      { shareCode: "POINT_LOACTION", runtimeValue: JSON.stringify(pointLocation) },
      { shareCode: "POINT_LOACTION_NAME", runtimeValue: pointInfo.PROJECT_NAME }
    ]
  });

  global.businessDialog.dialogName = '';

}
};
const gotoDetails = () => {
console.log('查看详情');
};
const scaleZoom = () => {
console.log('缩放至');

rootData.rootSocket.emit('message', {
  type: 'goto',
  room: global.socketRoom,
  // data: [ // 消息内容
  //   { shareCode: "POINT_LOACTION", runtimeValue: JSON.stringify(pointLocation) },
  //   { shareCode: "POINT_LOACTION_NAME", runtimeValue: pointInfo.PROJECT_NAME }
  // ],
  data: {
    LONGITUDE: state.pointData.LONGITUDE,
    LATITUDE: state.pointData.LATITUDE,
    level: 12,
  },
});

};
const close = () => {
rootData.rootSocket.emit('message', {
  room: global.socketRoom,
  type: 'hideLegoDialog',
});
};
const onclick1733817210174 = () => {
// 执行自定义方法
close();
};
const onclick1738746132003 = () => {
// 执行自定义方法
aroundQuery();
};
const onclick1738746175147 = () => {
// 执行自定义方法
gotoDetails();
};
const onclick1738746213995 = () => {
// 执行自定义方法
scaleZoom();
};
// 接口函数
const getWaringList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DATA_ID":state.DATA_ID,"interfaceId":"9e660a050dcc1aa4200227c16bef76e5"},}).then((res) => {
     // 成功的操作
     state.cardList1 = [
  {
    "title": "编号",
    "num": "-"
  },
  {
    "title": "区域",
    "num": "-"
  },
  {
    "title": "运行时间",
    "num": "-"
  },
  {
    "title": "出水标准",
    "num": "-"
  },
  {
    "title": "设计进水CODCR(MG/L)",
    "num": "-"
  },
  {
    "title": "出水限值CODCR(MG/L)",
    "num": "-"
  },
  {
    "title": "出水限值SS(MG/L)",
    "num": "-"
  },
  {
    "title": "出水限值TN(MG/L)",
    "num": "-"
  }
];
state.cardList2 = [
  {
    "title": "项目名称",
    "num": "-"
  },
  {
    "title": "设计规模（万吨/日）",
    "num": "-"
  },
  {
    "title": "处理工艺",
    "num": "-",
  },
  {
    "title": "排入水体",
    "num": "-"
  },
  {
    "title": "设计进水氨氮(MG/L)",
    "num": "-"
  },
  {
    "title": "出水限值BOD5(MG/L)",
    "num": "-"
  },
  {
    "title": "出水限值NH3-N(MG/L)",
    "num": "-"
  },
  {
    "title": "出水限值TP(MG/L)",
    "num": "-"
  }
];
state.cardList3 = [
  {
    "title": "地址",
    "num": "-"
  }
];
state.title = '-'

console.log('污水处理厂弹框', res.data, state.cardList1, state.cardList2, state.cardList3)

if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  state.pointData = res?.data?.data || {};
  
  state.cardList1[0].num = res?.data?.data?.CODE || '-'; // 编号
  state.cardList1[1].num = res?.data?.data?.AREA || '-'; // 区域
  state.cardList1[2].num = res?.data?.data?.RUN_TIME || '-'; // 运行时间
  state.cardList1[3].num = res?.data?.data?.WATER_STANDARD || '-'; // 出水标准
  state.cardList1[4].num = res?.data?.data?.DESIGN_IN_WATER || '-'; // 设计进水CODCR
  state.cardList1[5].num = res?.data?.data?.OUT_LIMIT_CODCR || '-'; // 出水限值CODCR
  state.cardList1[6].num = res?.data?.data?.OUT_LIMIT_SS || '-'; // 出水限值SS

  state.cardList2[0].num = res?.data?.data?.PROJECT_NAME || '-'; // 项目名称
  state.cardList2[1].num = res?.data?.data?.DESIGN_SCALE || '-'; // 设计规模
  state.cardList2[2].num = res?.data?.data?.TREATMENT_PROCESS || '-'; // 处理工艺
  state.cardList2[3].num = res?.data?.data?.INTO_RIVER || '-'; // 排入水体
  state.cardList2[4].num = res?.data?.data?.DESIGN_IN_AD || '-'; // 设计进水氨氮
  state.cardList2[5].num = res?.data?.data?.OUT_LIMIT_BOD5 || '-'; // 出水限值BOD5
  state.cardList2[6].num = res?.data?.data?.OUT_LIMIT_NH3N || '-'; // 出水限值NH3-N
  state.cardList2[7].num = res?.data?.data?.OUT_LIMIT_TP || '-'; // 水限值TP

  state.cardList3[0].num = res?.data?.data?.ADDRESS || '-'; // 地址
  state.title = res?.data?.data?.PROJECT_NAME || '-'
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.cardList1 = [
  {
    "title": "编号",
    "num": "-"
  },
  {
    "title": "区域",
    "num": "-"
  },
  {
    "title": "运行时间",
    "num": "-"
  },
  {
    "title": "出水标准",
    "num": "-"
  },
  {
    "title": "设计进水CODCR(MG/L)",
    "num": "-"
  },
  {
    "title": "出水限值CODCR(MG/L)",
    "num": "-"
  },
  {
    "title": "出水限值SS(MG/L)",
    "num": "-"
  },
  {
    "title": "出水限值TN(MG/L)",
    "num": "-"
  }
];
state.cardList2 = [
  {
    "title": "项目名称",
    "num": "-"
  },
  {
    "title": "设计规模（万吨/）",
    "num": "-"
  },
  {
    "title": "处理工艺",
    "num": "-",
  },
  {
    "title": "排入水体",
    "num": "-"
  },
  {
    "title": "设计进水氨氮(MG/L)",
    "num": "-"
  },
  {
    "title": "出水限值BOD5(MG/L)",
    "num": "-"
  },
  {
    "title": "出水限值NHS",
    "num": "-"
  },
  {
    "title": "出水限值TP(MG/L)",
    "num": "-"
  }
];
state.cardList3 = [
  {
    "title": "地址",
    "num": "-"
  }
];
state.title = '-'
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-lyxqWsclcDialog', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onBeforeMount(() => {
// 执行自定义方法
initPageList();
});
onMounted(() => {
setPageScale('t-l-c-lyxqWsclcDialog', global.appScaleMode, 'normal');
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

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tListCardx0x8ComputedData = computed(() => _.merge({}, componentState.tListCardx0x8.default, componentState.tListCardx0x8?.[state.screenSize]));

 const tListCardx0x9ComputedData = computed(() => _.merge({}, componentState.tListCardx0x9.default, componentState.tListCardx0x9?.[state.screenSize]));

 const tListCardx0x10ComputedData = computed(() => _.merge({}, componentState.tListCardx0x10.default, componentState.tListCardx0x10?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tTextx0x2ComputedData,
tRectx0x3ComputedData,
tRectx0x4ComputedData,
tTextx0x5ComputedData,
tTextx0x6ComputedData,
tTextx0x7ComputedData,
tListCardx0x8ComputedData,
tListCardx0x9ComputedData,
tListCardx0x10ComputedData,
onclick1733817210174,
onclick1738746132003,
onclick1738746175147,
onclick1738746213995,
};
},
}
</script>

<style scoped>
.t-l-c-lyxqWsclcDialog {
position: relative;
overflow: hidden;
--theme-color: var(--t-brand8);
--theme-color-opacity-10: rgba(var(--t-brand8), .1);
--theme-color-opacity-15: rgba(var(--t-brand8), .15);
--theme-color-opacity-40: rgba(var(--t-brand8), .4);
--theme-color-opacity-60: rgba(var(--t-brand8), .6);
--theme-color-opacity-80: rgba(var(--t-brand8), .8);
--theme-color-opacity-90: rgba(var(--t-brand8), .9);
pointer-events: none;
position: Relative;
z-index: 1;
filter: ;
width: 1920px;
height: 1080px;
background-color: rgba(255, 255, 255, 0);
left: 50%;
top: 50%;
transform: translateX(-50%) translateY(-50%);
}
.t-l-c-lyxqWsclcDialog .lyxqWsclcDialog-t-rect-0-0 {
position: absolute !important;
top: 315px;
left: 487px;
width: 946px;
height: 450px;
pointer-events: auto;
}

.t-l-c-lyxqWsclcDialog .lyxqWsclcDialog-t-rect-0-1 {
position: absolute !important;
top: 315px;
left: 487px;
width: 945px;
height: 47px;
pointer-events: auto;
}

.t-l-c-lyxqWsclcDialog .lyxqWsclcDialog-t-text-0-2 {
position: absolute !important;
top: 329px;
left: 511px;
width: 860px;
height: 21px;
pointer-events: auto;
}

.t-l-c-lyxqWsclcDialog .lyxqWsclcDialog-t-rect-0-3 {
position: absolute !important;
top: 327px;
left: 1393px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-lyxqWsclcDialog .lyxqWsclcDialog-t-rect-0-4 {
position: absolute !important;
top: 713px;
left: 487px;
width: 946px;
height: 52px;
pointer-events: auto;
}

.t-l-c-lyxqWsclcDialog .lyxqWsclcDialog-t-text-0-5 {
position: absolute !important;
top: 726px;
left: 1104px;
width: 90px;
height: 28px;
pointer-events: auto;
}

.t-l-c-lyxqWsclcDialog .lyxqWsclcDialog-t-text-0-6 {
position: absolute !important;
top: 726px;
left: 1213px;
width: 90px;
height: 28px;
pointer-events: auto;
}

.t-l-c-lyxqWsclcDialog .lyxqWsclcDialog-t-text-0-7 {
position: absolute !important;
top: 726px;
left: 1322px;
width: 90px;
height: 28px;
pointer-events: auto;
}

.t-l-c-lyxqWsclcDialog .lyxqWsclcDialog-t-list-card-0-8 {
position: absolute !important;
top: 381px;
left: 507px;
width: 467px;
height: 280px;
pointer-events: auto;
}

.t-l-c-lyxqWsclcDialog .lyxqWsclcDialog-t-list-card-0-9 {
position: absolute !important;
top: 381px;
left: 977px;
width: 435px;
height: 280px;
pointer-events: auto;
}

.t-l-c-lyxqWsclcDialog .lyxqWsclcDialog-t-list-card-0-10 {
position: absolute !important;
top: 661px;
left: 507px;
width: 905px;
height: 33px;
pointer-events: auto;
}
</style>
