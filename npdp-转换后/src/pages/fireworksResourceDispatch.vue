<template>
  <div id="t-l-c-fireworksResourceDispatch" class="t-l-c-fireworksResourceDispatch" ><t-row id="t-row-b088.eb7e8de2" class="fireworksResourceDispatch-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align"><t-component id="t-component-667b.bb864afc1" class="fireworksResourceDispatch-t-component-0-0-0"  :name="tComponentx0x0x0ComputedData.name" :c-style="tComponentx0x0x0ComputedData.cStyle" :src="tComponentx0x0x0ComputedData.src" :component-name="tComponentx0x0x0ComputedData.componentName" :page-id="tComponentx0x0x0ComputedData.pageId" :page-code="tComponentx0x0x0ComputedData.pageCode"></t-component><t-row id="t-row-e600.5988d999" class="fireworksResourceDispatch-t-row-0-0-1"  :c-style="tRowx0x0x1ComputedData.cStyle" :gutter="tRowx0x0x1ComputedData.gutter" :justify="tRowx0x0x1ComputedData.justify" :align="tRowx0x0x1ComputedData.align"><t-list-card-multiple-choice id="t-list-card-multiple-choice-7eed.005701d06" class="fireworksResourceDispatch-t-list-card-multiple-choice-0-0-1-0"  :c-style="tListCardMultipleChoicex0x0x1x0ComputedData.cStyle" :key-word="tListCardMultipleChoicex0x0x1x0ComputedData.keyWord" :default-checked="replaceCssVariables(filterData(state.selectedCard, componentPropBindingMap?.['t-list-card-multiple-choice-7eed.005701d06']['defaultChecked'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data-alias="tListCardMultipleChoicex0x0x1x0ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.cardList, componentPropBindingMap?.['t-list-card-multiple-choice-7eed.005701d06']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tListCardMultipleChoicex0x0x1x0ComputedData.unit" @card-click="oncardClick1738745506582"></t-list-card-multiple-choice><t-row id="t-row-b8ef.845b1860f" class="fireworksResourceDispatch-t-row-0-0-1-1"  :c-style="tRowx0x0x1x1ComputedData.cStyle" :gutter="tRowx0x0x1x1ComputedData.gutter" :justify="tRowx0x0x1x1ComputedData.justify" :align="tRowx0x0x1x1ComputedData.align"><t-scrollable-cards id="t-scrollable-cards-0c73.63b765abc" class="fireworksResourceDispatch-t-scrollable-cards-0-0-1-1-0"  :c-style="tScrollableCardsx0x0x1x1x0ComputedData.cStyle" :auto-scroll="tScrollableCardsx0x0x1x1x0ComputedData.autoScroll" :tab="tScrollableCardsx0x0x1x1x0ComputedData.tab" :key-word="tScrollableCardsx0x0x1x1x0ComputedData.keyWord" :default-checked="replaceCssVariables(filterData(state.selectedTab, componentPropBindingMap?.['t-scrollable-cards-0c73.63b765abc']['defaultChecked'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :speed="tScrollableCardsx0x0x1x1x0ComputedData.speed" :interval="tScrollableCardsx0x0x1x1x0ComputedData.interval" :card-space="tScrollableCardsx0x0x1x1x0ComputedData.cardSpace" :direction="tScrollableCardsx0x0x1x1x0ComputedData.direction" :data-alias="tScrollableCardsx0x0x1x1x0ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.selectedTopicsData, componentPropBindingMap?.['t-scrollable-cards-0c73.63b765abc']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @card-click="oncardClick1766290259944_0_0"></t-scrollable-cards><t-component id="t-component-6b61.a661d8e98" class="fireworksResourceDispatch-t-component-0-0-1-1-1"  :name="replaceCssVariables(filterData(state.selectedComponent, componentPropBindingMap?.['t-component-6b61.a661d8e98']['name'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :loading="tComponentx0x0x1x1x1ComputedData.loading" :c-style="tComponentx0x0x1x1x1ComputedData.cStyle" :src="tComponentx0x0x1x1x1ComputedData.src" :component-name="replaceCssVariables(filterData(state.selectedComponent, componentPropBindingMap?.['t-component-6b61.a661d8e98']['componentName'].filters || []), global?.theme || global?.activeTheme || '默认主题')"></t-component></t-row></t-row></t-row></div>
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
import { TComponent, TListCardMultipleChoice, TRow, TScrollableCards } from '@ths/design';

export default {
  components: {
    TComponent,
    TListCardMultipleChoice,
    TRow,
    TScrollableCards,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-b088.eb7e8de2":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-component-667b.bb864afc1":{"attributeName":"tComponentx0x0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-row-e600.5988d999":{"attributeName":"tRowx0x0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-list-card-multiple-choice-7eed.005701d06":{"attributeName":"tListCardMultipleChoicex0x0x1x0","cStyle":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]},"unit":{"filters":[]}},"t-row-b8ef.845b1860f":{"attributeName":"tRowx0x0x1x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-scrollable-cards-0c73.63b765abc":{"attributeName":"tScrollableCardsx0x0x1x1x0","cStyle":{"filters":[]},"autoScroll":{"filters":[]},"tab":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"speed":{"filters":[]},"interval":{"filters":[]},"cardSpace":{"filters":[]},"direction":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]}},"t-component-6b61.a661d8e98":{"attributeName":"tComponentx0x0x1x1x1","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}}};
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
   zhcParams: {"startTime":"","endTime":"","dateValue":[]},
   wrjParams: {"startTime":"","endTime":"","dateValue":[],"type":"公园巡查、小区巡查","selectedType":""},
   topicMap: {},
   tagJson: "{}",
   selectedTopicsData: [],
   activeTab: {"value":"","name":"","entityCode":""},
   cardNoData: false,
   selectedComponent: "sscContentListComponent",
   pointValue: "",
   WaterCodeMap: {"14756342-4060-4144-abd9-f30875738ad1":"0AEED10FD4426FD3B420D508E6FC205A","5b6f5f8c-c5e1-40a7-abee-3feafceba8e8":"FB15B7F66E02E9C245B96B7607D98173","46cae139-a92a-4676-a193-ad7378a1b9d1":"AE9C54C4378B9000055595D6457CE167","5f19ae21-78be-4e19-a2a6-74fc4eea285b":"6F294AF6316F5E7DFF03F3CB93BE15F3","a2ce2ad5-8c08-4ccb-918a-b435a886aa99":"D8F6067BEE3A5269DDC497014ECEC248","58500a42-3349-484c-8ce7-3b8ae8d5ae42":"3592D95098D57EEE96A1787536AEDE91"},
   WATER_CODE: "",
   WSystemCodeMap: {"14756342-4060-4144-abd9-f30875738ad1":"DE21A753752C0D58FFEEC4F508FA3A42","5b6f5f8c-c5e1-40a7-abee-3feafceba8e8":"FB15B7F66E02E9C245B96B7607D98173","46cae139-a92a-4676-a193-ad7378a1b9d1":"34E2C6BB6105E8B5809A6EDD96F1E54B","5f19ae21-78be-4e19-a2a6-74fc4eea285b":"BEE600E4A4AFEF9AA12B67DEF0B29057","a2ce2ad5-8c08-4ccb-918a-b435a886aa99":"086273C8AD9AB53E94235790AD135717","58500a42-3349-484c-8ce7-3b8ae8d5ae42":"75DC865C449809EEC9E76778D9C3D9B6"},
   ASSESSTYPE: "",
   TIME: "",
   entityMap: {"20a325dc-4898-4ffa-bd54-aff9d1721d1d":"sgjcdmComponent","6527a893-0a7f-4caa-8730-cef75e273dae":"shjysWsclcComponent","3e834a34-4cbe-4491-a8e0-28eb83b45321":"shjysSsqyNewComponent","5ec37ba3-dd0d-4346-a167-683610051b94":"shjysrhbwkbfComponent","f32b0ff3-ba47-44f1-abe4-070d1d4f41ed":"shjysYysydComponent","4dcb0dd1-bf14-4bb1-9bbe-d5771030b2f6":"sdjcdmComponent","KZDY":"shjysGkdyComponent","ZC":"shjysZlComponent","ZYHD":"shjysGlComponent","ZCQT":"shjysQthlComponent","14756342-4060-4144-abd9-f30875738ad1":"shjysWsclcComponent","46cae139-a92a-4676-a193-ad7378a1b9d1":"shjysSsqyNewComponent","ZGHC":"shjysZghcComponent"},
   WSYSTEM_CODE: "",
   selectedTab: "",
   tabList: [],
   selectedCard: [],
   cardList: [],
   tmpData: {"data1":[],"data2":[]},
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
            default: {"width":"410px","height":"363px","position":"unset","left":"15px","top":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"410px","height":"363px","position":"unset","left":"15px","top":"0px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tComponentx0x0x0: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"fireworksResourceDispatchTitleComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/fireworksResourceDispatchTitle",
componentName:"fireworksResourceDispatchTitleComponent",
pageId:"60c2a3837ead407c9ca5abb160857c80",
pageCode:"fireworksResourceDispatchTitle", 
 },
},
tRowx0x0x1: {
defaultStyle: {
            default: {"width":"410px","height":"auto","position":"unset","left":"0px","top":"43px","overflow":"visible","display":"block","marginTop":"12px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"410px","height":"auto","position":"unset","left":"0px","top":"43px","overflow":"visible","display":"block","marginTop":"12px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tListCardMultipleChoicex0x0x1x0: {
defaultStyle: {
            default: {"width":"410px","height":"auto","overflowY":"auto","display":"grid","grid-template-columns":"repeat(auto-fill,131.33px)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"0px","paddingRight":"0px","marginLeft":"0px","marginRight":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"410px","height":"auto","overflowY":"auto","display":"grid","grid-template-columns":"repeat(auto-fill,131.33px)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"0px","paddingRight":"0px","marginLeft":"0px","marginRight":"0px"}},"cardItem":{"default":{"boxSizing":"border-box","padding":"4px","background":"rgba(20, 112, 204, 0.3)","width":"131.33px","height":"54px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px solid rgba(255,255,255,0)","borderTop":"1px solid rgba(255,255,255,0)","borderRight":"1px solid rgba(255,255,255,0)","borderBottom":"1px solid rgba(255,255,255,0)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","display":"block","position":"relative","cursor":"pointer"},"active":{"background":"var(--business-tab-content-active-bg)","width":"131.33px","height":"54px","overflow":"hidden","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(138,210,255,0.8)","borderTop":"1px solid rgba(138,210,255,0.8)","borderRight":"1px solid rgba(138,210,255,0.8)","borderBottom":"1px solid rgba(138,210,255,0.8)","color":""},"hover":{"width":"131.33px","height":"54px","overflow":"hidden","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(138,210,255,0.8)","borderTop":"1px solid rgba(138,210,255,0.8)","borderRight":"1px solid rgba(138,210,255,0.8)","borderBottom":"1px solid rgba(138,210,255,0.8)","color":"var(--business-text-avianize)"}},"cardUnchecked":{"hover":{"background":"var(--business-tab-content-active-bg)","width":"131.33px","height":"54px","overflow":"hidden"},"default":{"backgroundColor":"rgba(20, 112, 204, 0.3)","width":"131.33px","height":"54px","overflow":"hidden"}},"cardItemLabel":{"default":{"height":"14px","lineHeight":"var(--business-text-size-14)","fontSize":"var(--business-text-size-14)","color":"var(--business-text-avianize)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","top":"-27px","position":"relative"},"hover":{"color":"var(--business-text-avianize)"},"active":{"color":"var(--business-text-avianize)"}},"listBody":{"default":{"width":"410px","overflow":"visible","display":"grid","alignItems":"stretch","justifyItems":"stretch","alignContent":"space-around","justifyContent":"space-around","paddingLeft":"0px","paddingRight":"0px","marginLeft":"0px","marginRight":"0px","height":"auto","grid-template-columns":"repeat(auto-fill,131.33px)"}},"cardItemValueContent":{"default":{"height":"24px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-num-size-24)","fontFamily":"DIN-bold","fontWeight":"700","color":"#F9D000"}},"cardItemValueUnit":{"default":{"height":"auto","fontSize":"var(--business-text-size-12)","color":"var(--business-text-avianize)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginLeft":"6px","lineHeight":"21px"}},"cardItemValue":{"default":{"display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","top":"17px","height":"24px","position":"relative"}},"cardItemLabelContent":{"active":{"color":"var(--business-text-avianize)"},"hover":{"color":"var(--business-text-avianize)"},"default":{"whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"cardItemIcon":{"default":{"position":"absolute","right":"4px","width":"16px","height":"16px","backgroundImage":"var(--multiple-card-unchecked)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","bottom":"4px"},"hover":{"backgroundImage":"var(--multiple-card-checked)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""},"active":{"backgroundSize":"contain,contain","-webkit-mask-size":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundPosition":"50% 50%,50% 50%","-webkit-mask-position":"","backgroundImage":"var(--multiple-card-checked)","-webkit-mask-image":""}}},
keyWord:"title",
defaultChecked:[],
dataAlias:{"value":"num","label":"title","icon":"","unit":""},
data:[],
unit:"个", 
 },
},
tRowx0x0x1x1: {
defaultStyle: {
            default: {"width":"410px","height":"auto","position":"unset","left":"-345px","top":"115px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","marginTop":"12px","paddingTop":"8px","paddingBottom":"8px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"410px","height":"auto","position":"unset","left":"-345px","top":"115px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","marginTop":"12px","paddingTop":"8px","paddingBottom":"8px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tScrollableCardsx0x0x1x1x0: {
defaultStyle: {
            default: {"width":"394px","height":"30px","borderRadius":"8px","padding":"11px 9px 8px","background":"","backgroundColor":"rgba(255, 255, 255, 0)","display":"flex","flexDirection":"row","alignItems":"stretch","justifyContent":"space-between","paddingLeft":"0px","paddingRight":"0px","marginRight":"0px","marginLeft":"8px","paddingTop":"0px","paddingBottom":"0px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"394px","height":"30px","borderRadius":"8px","padding":"11px 9px 8px","background":"","backgroundColor":"rgba(255, 255, 255, 0)","display":"flex","flexDirection":"row","alignItems":"stretch","justifyContent":"space-between","paddingLeft":"0px","paddingRight":"0px","marginRight":"0px","marginLeft":"8px","paddingTop":"0px","paddingBottom":"0px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":""}},"itemWrapper":{"default":{"width":"auto","height":"30px","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"8px","paddingRight":"8px","marginLeft":"0px","marginRight":"0px","paddingTop":"0px","paddingBottom":"0px","display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","cursor":"pointer","color":"var(--business-white)","fontSize":"var(--business-text-size-14)"},"active":{"background":"var(--business-tab-content-active-bg)","borderRadius":"4px","color":"var(--t-white)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-tab-content-active-bg)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit"}},"cardLabel":{"default":{"fontSize":"var(--business-text-size-14)","lineHeight":"14px","display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"leftArrowButton":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"24px","height":"30px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","color":"var(--business-theme)"}},"leftArrow":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"hover":{"color":"var(--business-theme)"}},"rightArrowButton":{"default":{"backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","width":"24px","height":"30px"},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","color":"var(--business-theme)"}},"rightArrow":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"hover":{"borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","color":"var(--business-theme)"}},"container":{"default":{"width":"330px"}}},
autoScroll:false,
tab:false,
keyWord:"title",
defaultChecked:"",
speed:3,
interval:0.5,
cardSpace:8,
direction:"left",
dataAlias:{"value":"","label":"title","checked":"checked"},
data:[], 
 },
},
tComponentx0x0x1x1x1: {
defaultStyle: {
            default: {"width":"410px","height":"535px","margin":"0 auto","position":"unset","left":"480px","top":"-4px","marginTop":"10px"},
            
            },
 default: { 
 
name:"sscContentListComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"410px","height":"535px","margin":"0 auto","position":"unset","left":"480px","top":"-4px","marginTop":"10px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/",
componentName:"sscContentListComponent", 
 },
},
});
const handleSelectTab = (data) => {

state.selectedTab = data.title;
console.log(state.topicMap[data.title], 888)

if (data.title === '无人机') {
  // 获取无人机的最新时间
  apiRegistry.getWRJLatestTime.request();
  provide('wrjListParams', computed(() => state.wrjParams));
  setTimeout(() => {
    state.selectedComponent = state.topicMap[data.title];
  });
} else if (data.title === '走航车') {
  apiRegistry.getZHCLatestTime.request();
  provide('zhcListParams', computed(() => state.zhcParams));
  setTimeout(() => {
    state.selectedComponent = state.topicMap[data.title];
  });
} else {
  state.selectedComponent = state.topicMap[data.title];
}
setCss();

// switch (data.title) {
//   case '视频监控':
//     state.listParams = {
//       distanceUnit: '',
//       pointValue: '',
//       tagJson: '{"1339B01F38317718FB2A65D6FF772BFA":"视频监控"}',
//       keywords: '',
//       topicCode: 'f378716e-2aa6-49d5-ae28-a9875958c8c9',
//       keywordFieldName: 'DEVICE_NAME',
//       entityCode: 'tag_jksb_1762945137278'
//     };
//     break;
//   default:
//     break;
// }

};
const setCss = () => {
// 特殊css样式插入
let style = document.createElement('style');
 
const css = `.scrollable-cards-left:hover i,
.scrollable-cards-right:hover i {
    color: var(--business-theme) !important;
}
.table-mrTCNauxHQPCx7ia .lawEnforcerEntryList-t-table-0-4-0-0{
    height: 400px
}
`;
 
if (style.styleSheet) {
    // 对于 IE
    style.styleSheet.cssText = css;
} else {
    // 其他浏览器
    style.appendChild(document.createTextNode(css));
}
 
document.head.appendChild(style);
};
const getProvider = () => {
// 流域面板
const rootData = inject('WSystemState');
// 河涌面板
const rootData2 = inject('RiverState');
// 右侧容器变量（ASSESSTYPE，TIME，systemRiverType）
const rootData3 = inject('surfaceWaterParamsState');

console.log(rootData3, '-----00000-----');

state.WSystemState = rootData
state.RiverState = rootData2
state.surfaceWaterParamsState = rootData3

// 初始化数据
const initData = async (defaultCodes) => {
  // 请求数据
  await apiRegistry.getCard1.request();
  await apiRegistry.getCard2.request();

  // 合并
  state.cardList = [...state.tmpData.data1, ...state.tmpData.data2].map(i => ({
    ...i,
    id: state.entityMap[i.TAG_TOPIC_CODE] || ""
  }));
  console.log('填充水环境要素-顶部复选卡片', state.cardList);

  // 默认数据
  const defaultData = state.cardList.filter(obj => defaultCodes.includes(obj.TAG_TOPIC_CODE))

  // 勾选多选面板
  handleSelectCard(defaultData)

  // 选中第一个tab页签
  handleSelectTab(defaultData[0])

  // 发送所有选中页面的消息，叠加图层
  defaultData.forEach(i => {
    sendSocket(defaultData, i)
  })
}

};
const sendSocket = (arr,item) => {
// 最后一项选中项被取消会保留，不用发消息
if (!arr.length) return

// 是否叠加图层
const flag = arr.find(i => i.id === item.id)

let type, data;

// 发送 叠加/清除 消息
// if (!item.TYPE && item.TAG_TOPIC_CODE !== "58500a42-3349-484c-8ce7-3b8ae8d5ae42") {
  if (!item.TYPE && item.TAG_TOPIC_CODE) {
  // 除监测断面外的点数据
  type = "changeZhxcMapParams"
  data = flag ? [
    {
      "type": "update-zhcx-layer",
      "params": [
        {
          "layerPrefix": "yzt-zhcx-layerPrefix",
          "info": {
            "key": `${item.TAG_ENTITY_CODE}-split-${item.TAG_ENTITY_NAME}-split-${item.TAG_TOPIC_CODE}-split-${item.TAG_TOPIC_NAME}`,
            "ENTITY_CODE": item.TAG_ENTITY_CODE,
            "topicCode": item.TAG_TOPIC_CODE,
            "tagJson":
              state.surfaceWaterParamsState.systemRiverType === "WSYSTEM"
                ? {
                  [state.WSystemCodeMap[item.TAG_TOPIC_CODE]]: state.WSYSTEM_CODE
                }
                : {
                  [state.WaterCodeMap[item.TAG_TOPIC_CODE]]: state.WATER_CODE
                },
            "checked": false
          },
          "query": {
            "distance": "",
            "locationField": "location",
            "pointValue": "",
            "gisType": "",
            "gisType2": "",
            "locationGisField": "location",
            "REGION_CODE": global.regionaQuery.regionCode,
            "keyword": "",
            "POLLUTE": "",
            "useGisShape": false
          }
        }
      ]
    }
  ]
    :
    [
      {
        "type": "remove-zhcx-layer",
        "params": {
          "layerPrefix": "yzt-zhcx-layerPrefix",
          "codes": [
            item.TAG_TOPIC_CODE
          ]
        }
      }
    ]
// } else if (!item.TYPE && item.TAG_TOPIC_CODE === "58500a42-3349-484c-8ce7-3b8ae8d5ae42") {
  // // 点数据中的监测断面
  // type = "setLayersAR";
  // data = [
  // //   {
  // //   "libraryId": "水环境-地表水-手工监测断面_1",
  // //   "layerId": "水环境-地表水-手工监测断面_1",
  // //   "opType": flag ? "add" : "remove",
  // //   a: 3
  // // },
  // {
  //   // "libraryId": "水环境-地表水-手工监测断面-目标水质",
  //   // "layerId": "水环境-地表水-手工监测断面-目标水质",
  //   layerId: '8500a42-3349-484c-8ce7-3b8ae8d5ae42',
  //   layerName: '综合查询-水-地表水手工断面',
  //   "opType": flag ? "add" : "remove",
  //   // a: 2
  // }]
} else {
  // 面数据
  type = "setLayersAR";
  data = [{
    "libraryId": item.LAYER_NAME,
    "layerId": item.LAYER_NAME,
    "opType": flag ? "add" : "remove",
    a: 1
  }]
}

console.log(type, data, '20251023测试')
rootData.rootSocket.emit('message', {
  room: global.socketRoom,
  type,
  data
});


};
const sendMsgToMap = (topicCode,visible) => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'setWaterEnvFeatureLayer',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      LAYER_CODE: topicCode,
      REGION_CODE: global.regionaQuery.regionCode,
      tagJson: '{}',
      visible: visible
    }
  }
);
};
const showLayer = () => {
// 当前卡片选中的图层显示
state.selectedCard.forEach(i =>{
  sendMsgToMap(i,true);
})
};
const clickCard = (checkedList,item) => {
console.log(checkedList, item, 6667)
// 更新选中的主题数据
state.selectedTopicsData = Array.isArray(checkedList) ? checkedList : [checkedList];
// 更新选中的主题数据（仅编码，供标签栏回显用）
state.selectedCard = state.selectedTopicsData.map((val) => val.title);
// 是否选中
let isSelect = state.selectedCard.includes(item?.title);

/* 选中 */
if (isSelect) {
    /* 若没有选中项，择默认选中 */
  if (!state.activeTab.name) {
    // 选中
    handleSelectTab(item); // 参数注意修改
  }


/* 取消选中 */
} else {
  // 若取消的正好是选中的主题
  if (state.activeTab.value === item.title) {
    state.tagJson = '{}';
    state.activeTab.value = '';
    state.activeTab.name = '';
    state.activeTab.entityCode = '';
    // TODO：清空列表
  }
  /* 若有其他选择的主题 */
  if (state.selectedTopicsData.length) {

    // 选中项
    let selectItem = item;
    // 默认选中第一个
    selectItem = state.selectedTopicsData[0];
    /* 若没有选中项，择默认选中 */
    if (!state.activeTab.name) {
      // 选中
      handleSelectTab(selectItem); // 参数注意修改
    }
  } else {
    state.tagJson = '{}';
    // 更新场景名
    state.activeTab.name = '';
    // 更新场景编码
    state.activeTab.value = '';
    // 更新实体编码
    state.activeTab.entityCode = '';
    // TODO:清空列表
  }
}
setTimeout(() =>{
  setTableStyle();
},500)


// // 全不选择的时候无需请求接口 直接清空数组
// if (state.selectedCard.length) {
//   // 切换组件
//   // 更新地图参数
//   sendUpdateParamsMsgToMap(true);
// } else {
//   // 更新地图参数
//   sendUpdateParamsMsgToMap(false);
// }


};
const sendUpdateParamsMsgToMap = (checkedItems) => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'updateResourceDispatchStatus',  // 消息类型名称
    data: {
      checkedTopics: checkedItems.map((val) => val.DATA_TYPE),
    }
  }
);
};
const initPage = () => {
state.topicMap = {
  '洒水车': 'sscContentListComponent',
  '执法人员': 'lawEnforcerEntryListComponent',
  '雾炮车': 'fogCannonVehicleListComponent',
  '无人机': 'droneEntryListComponent',
  '楼道长': 'fireworksResourceWGRYListComponent',
  '走航车': 'travelingVehicleListComponent',
  '冲洗车': 'washCarListComponent',
  '物质车': 'wzxcCarListComponent',
  '消防车': 'xfCarListComponent',
}

setProvider();
};
const setProvider = () => {
provide('wrjListParams', computed(() => state.wrjParams)); // 无人机
provide('zhcListParams', computed(() => state.zhcParams)); // 走航车
};
const setTableStyle = () => {
const sheet = new CSSStyleSheet();
sheet.insertRule(`body .t-l-c-fireworksResourceDispatch .t-l-c-lawEnforcerEntryList .t-table{
height: 400px !important;
}
`);

sheet.insertRule(`body .t-l-c-fireworksResourceDispatch .t-l-c-lawEnforcerEntryList .t-table .el-table--fit{
height: 100% !important;
}
`);

document.adoptedStyleSheets = [sheet];

};
const oncardClick1738745506582 = (clickItem,checkedList) => {
// 执行自定义方法
clickCard(checkedList,clickItem);
// 执行自定义方法
sendUpdateParamsMsgToMap(checkedList);
};
const oncardClick1766290259944_0_0 = (data) => {
// 执行自定义方法
handleSelectTab(data);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getCard1: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"db83008db6d94582c09c1d68bfe62709","WATER_CODE":"","WSYSTEM_CODE":"global.regionaQuery.areaCode"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"db83008db6d94582c09c1d68bfe62709","WATER_CODE":"","WSYSTEM_CODE":global.regionaQuery.areaCode},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"db83008db6d94582c09c1d68bfe62709","WATER_CODE":"","WSYSTEM_CODE":global.regionaQuery.areaCode});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCard1'] = res.data;
                
     state.cardList = []
if(res?.data?.data?.length){
 state.cardList = res?.data?.data || []
// 卡片默认选中全部
state.selectedCard = state.cardList.map(item => item.TAG_TOPIC_CODE).slice(0,1)

// 滚动列表
state.tabList = state.cardList.slice(0,1)
// 默认选中第一项
state.selectedTab = state.tabList[0].TAG_TOPIC_CODE
state.selectedComponent = state.entityMap[state.tabList[0].TAG_TOPIC_CODE]

// 发送消息给地图
// showLayer();
}else{
  state.cardList = []
  state.selectedCard = []
  state.tabList = []
  state.selectedTab = ''
  state.selectedComponent = ''
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
       state.cardList = []
  state.selectedCard = []
  state.tabList = []
  state.selectedTab = ''
  state.selectedComponent = ''
      reject(error);
    });
  });
},
              },
// 接口函数
 getWRJLatestTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"interfaceId":"77bf7c2ceeac0065058bf0f6050e2901"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"77bf7c2ceeac0065058bf0f6050e2901"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"interfaceId":"77bf7c2ceeac0065058bf0f6050e2901"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getWRJLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  let endTime = data[0].job_time + '00:00'
  let startTime = getPrevTime(endTime, 'day')
  state.wrjParams.startTime = startTime.slice(0,13)
  state.wrjParams.endTime = endTime.slice(0,13)
  state.wrjParams.dateValue = [state.startTime,state.endTime]
}else{
  state.wrjParams.dateValue = []
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
 getZHCLatestTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"region_path":"global.regionaQuery.regionCode","interfaceId":"f25a1bf75d91a0c0d64678ade1539b39"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"region_path":global.regionaQuery.regionCode,"interfaceId":"f25a1bf75d91a0c0d64678ade1539b39"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"region_path":global.regionaQuery.regionCode,"interfaceId":"f25a1bf75d91a0c0d64678ade1539b39"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getZHCLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.zhcParams.startTime = data.max_start_time
  state.zhcParams.endTime = data.max_end_time
  state.zhcParams.dateValue = [state.zhcParams.startTime, state.zhcParams.endTime]
} else {
  state.zhcParams.startTime = ''
  state.zhcParams.endTime = ''
  state.zhcParams.dateValue = []
}

// 发送消息给地图
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'updateMobileMonitoringTrajectoryTime',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      'startTime': state.zhcParams.startTime,
      'endTime': state.zhcParams.endTime
    }
  }
);
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getCardData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"groupSize\":\"100\",\"locationField\":\"location\",\"hasGather\":\"true\",\"groupFields\":\"TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE\",\"ENTITY_CODE\":\"tag_gather_yztdqsy_1735090881279\",\"interfaceId\":\"32fbf72522e1a004b67b5d906410ec8d\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"groupSize":"100","locationField":"location","hasGather":"true","groupFields":"TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE","ENTITY_CODE":"tag_gather_yztdqsy_1735090881279","interfaceId":"32fbf72522e1a004b67b5d906410ec8d"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"groupSize\":\"100\",\"locationField\":\"location\",\"hasGather\":\"true\",\"groupFields\":\"TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE\",\"ENTITY_CODE\":\"tag_gather_yztdqsy_1735090881279\",\"interfaceId\":\"32fbf72522e1a004b67b5d906410ec8d\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCardData'] = res.data;
                
     state.cardNoData = false;
console.log(22222)
if (res?.data?.groupResult?.length) {
  state.cardList = res?.data?.groupResult.map(item => {
    return {
      ...item,
      title: item?.DATA_TYPE,
      num: item?.doc_count || '0',
      unit: '家',
      color: 'var(--t-white)',
    }
  });

  let activeIndex = 0;

  /* 若有筛选项 */
  // if (global.waterGlobalVariables.sourceApportionment.selectedTagJson && global.waterGlobalVariables.sourceApportionment.selectedTagJson !== '{}') {
  //   // 找到企业的选项（只有企业能支持筛选，其他的不行）
  //   const index = state.cardList.findIndex((val) => val.title === '企业');

  //   if (index > -1) {
  //     activeIndex = index;
  //   }
  // }
  // state.activeTab.name = state.cardList[activeIndex].title;
  

  // handleListParams(state.airSourceTraceData.bufferLayerPoly?.[0]); 

  clickCard([state.cardList[activeIndex]], state.cardList[activeIndex]);

  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'updateResourceDispatchStatus',  // 消息类型名称
      data: {                   // 消息内容，对象格式
        visible: true,
        // 选中的主题
        checkedTopics: state.cardList.length ? [
          state.cardList[activeIndex]?.DATA_TYPE, 
        ] : [],
      }
    }
  );
} else {
  state.cardList = [];
  state.cardNoData = true;
  state.listLoading = false;
  // TODO：隐藏底部动态组件
}

state.cardLoading = false;
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.cardLoading = false;

      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [global.regionaQuery.regionCode,"",global.regionaQuery.areaCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getCard1', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-fireworksResourceDispatch', global.appScaleMode, 'height');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onBeforeUnmount(() => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "updateResourceDispatchStatus", // 消息名称
data: {"visible":false}, // 发送的数据
});
});
// 执行自定义方法
initPage();
onMounted(() => {
setPageScale('t-l-c-fireworksResourceDispatch', global.appScaleMode, 'height');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tComponentx0x0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0x0.default, componentState.tComponentx0x0x0?.[state.screenSize]));

 const tRowx0x0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x0x1.default, componentState.tRowx0x0x1?.[state.screenSize]));

 const tListCardMultipleChoicex0x0x1x0ComputedData = computed(() => _.merge({}, componentState.tListCardMultipleChoicex0x0x1x0.default, componentState.tListCardMultipleChoicex0x0x1x0?.[state.screenSize]));

 const tRowx0x0x1x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x0x1x1.default, componentState.tRowx0x0x1x1?.[state.screenSize]));

 const tScrollableCardsx0x0x1x1x0ComputedData = computed(() => _.merge({}, componentState.tScrollableCardsx0x0x1x1x0.default, componentState.tScrollableCardsx0x0x1x1x0?.[state.screenSize]));

 const tComponentx0x0x1x1x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0x1x1x1.default, componentState.tComponentx0x0x1x1x1?.[state.screenSize]));

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
tComponentx0x0x0ComputedData,
tRowx0x0x1ComputedData,
tListCardMultipleChoicex0x0x1x0ComputedData,
tRowx0x0x1x1ComputedData,
tScrollableCardsx0x0x1x1x0ComputedData,
tComponentx0x0x1x1x1ComputedData,
oncardClick1738745506582,
oncardClick1766290259944_0_0,
};
},
}
</script>

<style scoped>
.t-l-c-fireworksResourceDispatch {
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
overflow: visible;
background-color: rgba(0, 0, 0, 0);
height: 200px;
transform: unset !important;
width: 410px;
}
.t-l-c-fireworksResourceDispatch .fireworksResourceDispatch-t-row-0-0 {
position: absolute !important;
top: 0px;
left: 15px;
width: 410px;
height: 363px;
pointer-events: auto;
}

.t-l-c-fireworksResourceDispatch .fireworksResourceDispatch-t-component-0-0-0 {
position: unset;
top: 0px;
left: 0px;
width: 410px;
height: 31px;
pointer-events: auto;
}

.t-l-c-fireworksResourceDispatch .fireworksResourceDispatch-t-row-0-0-1 {
position: unset;
top: 43px;
left: 0px;
width: 410px;
height: auto;
pointer-events: auto;
overflow: visible;
display: block;
margin-top: 12px;
}

.t-l-c-fireworksResourceDispatch .fireworksResourceDispatch-t-list-card-multiple-choice-0-0-1-0 {
position: unset;
top: 43px;
left: 0px;
width: 410px;
height: auto;
pointer-events: auto;
}

.t-l-c-fireworksResourceDispatch .fireworksResourceDispatch-t-row-0-0-1-1 {
position: unset;
top: 115px;
left: -345px;
width: 410px;
height: auto;
pointer-events: auto;
border-left: 1px solid var(--business-show-bg60);
border-top: 1px solid var(--business-show-bg60);
border-right: 1px solid var(--business-show-bg60);
border-bottom: 1px solid var(--business-show-bg60);
margin-top: 12px;
padding-top: 8px;
padding-bottom: 8px;
}

.t-l-c-fireworksResourceDispatch .fireworksResourceDispatch-t-scrollable-cards-0-0-1-1-0 {
position: unset;
top: 194px;
left: 10px;
width: 394px;
height: 30px;
pointer-events: auto;
}

.t-l-c-fireworksResourceDispatch .fireworksResourceDispatch-t-component-0-0-1-1-1 {
position: unset;
top: -4px;
left: 480px;
width: 410px;
height: 535px;
pointer-events: auto;
}
</style>
