<template>
  <div id="t-l-c-airSyxqPanelAarmOld" class="t-l-c-airSyxqPanelAarmOld" ><t-list-card id="t-list-card-950c.39b4f7ff2" class="airSyxqPanelAarmOld-t-list-card-0-0"  :data="state.alarmInfo" :spacing-x="tListCardx0x0ComputedData.spacingX" :col="tListCardx0x0ComputedData.col" :direction="tListCardx0x0ComputedData.direction" :exchange-order="tListCardx0x0ComputedData.exchangeOrder" :unit-break="tListCardx0x0ComputedData.unitBreak" :key-field="tListCardx0x0ComputedData.keyField" :active-key-field="tListCardx0x0ComputedData.activeKeyField" :active="tListCardx0x0ComputedData.active" :c-style="tListCardx0x0ComputedData.cStyle"></t-list-card><t-tabs-base id="t-tabs-base-883e.799be7bbc" class="airSyxqPanelAarmOld-t-tabs-base-0-1"  :data="state.tabList" :space="tTabsBasex0x1ComputedData.space" :selected-tab-val="state.activeTab" :inner-shadow-color="tTabsBasex0x1ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x1ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x1ComputedData.alias" :c-style="tTabsBasex0x1ComputedData.cStyle" @tab-click="ontabClick1734419810210"></t-tabs-base><t-component id="t-component-bc2d.79fc84f18" class="airSyxqPanelAarmOld-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName"></t-component><t-component id="t-component-42fa.4eb58355a" class="airSyxqPanelAarmOld-t-component-0-3"  :name="tComponentx0x3ComputedData.name" :c-style="tComponentx0x3ComputedData.cStyle" :src="tComponentx0x3ComputedData.src" :component-name="tComponentx0x3ComputedData.componentName"></t-component><t-text id="t-text-0a90.e9827e0dc" class="airSyxqPanelAarmOld-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle"></t-text><t-text id="t-text-24a3.12ba14369" class="airSyxqPanelAarmOld-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle"></t-text><t-text id="t-text-0fd2.4aeeba7" class="airSyxqPanelAarmOld-t-text-0-6"  :label="state.alarmMonthTotal" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle" @click="onclick1734415835534"></t-text><t-rect id="t-rect-3177.b4cb2cbd7" class="airSyxqPanelAarmOld-t-rect-0-7"  :tip="tRectx0x7ComputedData.tip" :label="tRectx0x7ComputedData.label" :active="tRectx0x7ComputedData.active" :c-style="tRectx0x7ComputedData.cStyle"></t-rect><t-text id="t-text-31cf.8bd7b782b" class="airSyxqPanelAarmOld-t-text-0-8"  :label="tTextx0x8ComputedData.label" :editable="tTextx0x8ComputedData.editable" :c-style="tTextx0x8ComputedData.cStyle"></t-text><t-text-unit id="t-text-unit-7ac8.5dc037449" class="airSyxqPanelAarmOld-t-text-unit-0-9"  :c-style="tTextUnitx0x9ComputedData.cStyle" :justify="tTextUnitx0x9ComputedData.justify" :align="tTextUnitx0x9ComputedData.align" :content="state.TRACE_TOTAL" :unit="tTextUnitx0x9ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x9ComputedData.showOverflowTooltip"></t-text-unit><t-row v-if="state.activeTab !== ''" id="t-row-0af5.8008c412c" class="airSyxqPanelAarmOld-t-row-0-10"  :c-style="tRowx0x10ComputedData.cStyle" :gutter="tRowx0x10ComputedData.gutter" :justify="tRowx0x10ComputedData.justify" :align="tRowx0x10ComputedData.align"><t-list-card v-if="state.activeTab !== ''" id="t-list-card-cfc6.56cf11cb1" class="airSyxqPanelAarmOld-t-list-card-0-10-0"  :data="state.sceneList" :spacing-x="tListCardx0x10x0ComputedData.spacingX" :col="tListCardx0x10x0ComputedData.col" :direction="tListCardx0x10x0ComputedData.direction" :exchange-order="tListCardx0x10x0ComputedData.exchangeOrder" :unit-break="tListCardx0x10x0ComputedData.unitBreak" :key-field="tListCardx0x10x0ComputedData.keyField" :active-key-field="tListCardx0x10x0ComputedData.activeKeyField" :active="state.activeCard" :c-style="tListCardx0x10x0ComputedData.cStyle" @card-click="oncardClick1734427200133"></t-list-card><t-list-card v-if="state.activeCard !== ''" id="t-list-card-a5e5.c23ace584" class="airSyxqPanelAarmOld-t-list-card-0-10-1"  :data="state.resultList" :spacing-x="tListCardx0x10x1ComputedData.spacingX" :col="tListCardx0x10x1ComputedData.col" :direction="tListCardx0x10x1ComputedData.direction" :exchange-order="tListCardx0x10x1ComputedData.exchangeOrder" :unit-break="tListCardx0x10x1ComputedData.unitBreak" :key-field="tListCardx0x10x1ComputedData.keyField" :active-key-field="tListCardx0x10x1ComputedData.activeKeyField" :active="tListCardx0x10x1ComputedData.active" :c-style="tListCardx0x10x1ComputedData.cStyle"></t-list-card><t-table id="t-table-aa53.5e81abb16" class="airSyxqPanelAarmOld-t-table-0-10-2"  :height="tTablex0x10x2ComputedData.height" :stripe="tTablex0x10x2ComputedData.stripe" :border="tTablex0x10x2ComputedData.border" :auto-scroll="tTablex0x10x2ComputedData.autoScroll" :speed="tTablex0x10x2ComputedData.speed" :columns="state.columns" :data="state.scoreList" :default-sort="tTablex0x10x2ComputedData.defaultSort" :c-style="tTablex0x10x2ComputedData.cStyle" @cell-click="oncellClick1734500543163"></t-table><t-list-card v-if="state.activeCard !== '设备异常'" id="t-list-card-d7ef.dfc3e7e87" class="airSyxqPanelAarmOld-t-list-card-0-10-3"  :data="tListCardx0x10x3ComputedData.data" :spacing-x="tListCardx0x10x3ComputedData.spacingX" :col="tListCardx0x10x3ComputedData.col" :direction="tListCardx0x10x3ComputedData.direction" :exchange-order="tListCardx0x10x3ComputedData.exchangeOrder" :unit-break="tListCardx0x10x3ComputedData.unitBreak" :key-field="tListCardx0x10x3ComputedData.keyField" :active-key-field="tListCardx0x10x3ComputedData.activeKeyField" :active="tListCardx0x10x3ComputedData.active" :c-style="tListCardx0x10x3ComputedData.cStyle"></t-list-card></t-row></div>
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
import { TComponent, TListCard, TRect, TRow, TTable, TTabsBase, TText, TTextUnit } from '@ths/design';

export default {
  components: {
    TComponent,
    TListCard,
    TRect,
    TRow,
    TTable,
    TTabsBase,
    TText,
    TTextUnit,
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
   sourceParmasState: {},
   columns: [],
   scoreList: [],
   resultList: [],
   ALL_LAYERS: [],
   OUPUT_LAYER_PARAMS: {},
   REGION_LAYER_PARAMS: {},
   GRID_LAYER_PARAMS: {},
   headInfo: {},
   activeCard: "",
   sceneList: [],
   activeTab: "",
   TRACE_TOTAL: "0",
   pointInfo: {"POINT_NAME":"","POINT_TYPE":"","START_TIME":"","END_TIME":""},
   alarmMonthTotal: "0",
   alarmInfo: [{"title":"报警污染物","num":"-"},{"title":"报警原因","num":"-"},{"title":"开始报警时间","num":"-"},{"title":"结束报警时间","num":"-"},{"title":"报警持续时间","num":"-"},{"title":"当月报警记录"}],
   parentParams: {"POINT_CODE":"","COUNT_ID":"","alarmTime":"","endTime":"","MONITOR_MONTH":"","AIRMONITORTIME":"","ALARM_END_TIME":"","REGION_CODE":""},
   tabList: [],
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
tListCardx0x0: {
defaultStyle: {
            default: {"width":"414px","height":"204px","position":"unset","left":"13px","top":"46px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"报警污染物","num":"-"},{"title":"报警原因","num":"-"},{"title":"开始报警时间","num":"-"},{"title":"结束报警时间","num":"-"},{"title":"报警持续时间","num":"-"},{"title":"当月报警记录"}],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"414px","height":"204px","position":"unset","left":"13px","top":"46px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"144px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"264px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
tTabsBasex0x1: {
defaultStyle: {
            default: {"width":"410px","height":"31px","position":"unset","left":"20px","top":"385px","animationName":""},
            
            },
 default: { 
 
data:[],
space:5,
selectedTabVal:"",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":false},
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","position":"unset","left":"20px","top":"385px","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"80px","height":"28px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"14px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"active":{"backgroundImage":"var(--business-tab-content-active-bg)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","height":"28px","width":"80px","-webkit-mask-size":"","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-position":""},"hover":{"backgroundColor":"rgba(20, 112, 204, 0.15)","backgroundImage":"var(--business-tab-content-active-bg)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}}}, 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"3px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"3px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tComponentx0x3: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"282px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"282px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"8px","fontFamily":"方正综艺","fontSize":"20px","animationName":""},
            
            },
 default: { 
 
label:"报警信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"8px","fontFamily":"方正综艺","fontSize":"20px","animationName":""}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"287px","fontFamily":"方正综艺","fontSize":"20px","animationName":""},
            
            },
 default: { 
 
label:"溯源结果",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"287px","fontFamily":"方正综艺","fontSize":"20px","animationName":""}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"164px","height":"21px","color":"var(--t-aqi-yellow)","position":"unset","left":"179px","top":"225px","cursor":"pointer"},
            
            },
 default: { 
 
label:"0",
editable:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"21px","color":"var(--t-aqi-yellow)","position":"unset","left":"179px","top":"225px","cursor":"pointer"}}}, 
 },
},
tRectx0x7: {
defaultStyle: {
            default: {"width":"410px","height":"50px","position":"unset","left":"20px","top":"326px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-17/d2ac143dce3b4c4783c8431b82b5fc12.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"50px","position":"unset","left":"20px","top":"326px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-17/d2ac143dce3b4c4783c8431b82b5fc12.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}}}, 
 },
},
tTextx0x8: {
defaultStyle: {
            default: {"width":"84px","height":"17px","color":"var(--business-text-avianize)","position":"unset","left":"157px","top":"346px","fontSize":"14px"},
            
            },
 default: { 
 
label:"疑似污染源:",
editable:false,
cStyle:{"wrapper":{"default":{"width":"84px","height":"17px","color":"var(--business-text-avianize)","position":"unset","left":"157px","top":"346px","fontSize":"14px"}}}, 
 },
},
tTextUnitx0x9: {
defaultStyle: {
            default: {"width":"190px","height":"26px","position":"unset","left":"236px","top":"338px","fontSize":"19px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"190px","height":"26px","position":"unset","left":"236px","top":"338px","fontSize":"19px"}},"text":{"default":{"fontSize":"19px","fontWeight":"700","color":"var(--t-white)","letterSpacing":"1px"}},"unit":{"default":{"color":"var(--business-text-avianize)","fontSize":"14px","marginLeft":"4px","marginBottom":"2px"}}},
justify:"flex-start",
align:"flex-end",
content:"0",
unit:"个",
showOverflowTooltip:true, 
 },
},
tRowx0x10: {
defaultStyle: {
            default: {"width":"411px","height":"auto","position":"unset","left":"20px","top":"425px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","min-height":"500px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"411px","height":"auto","position":"unset","left":"20px","top":"425px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","min-height":"500px"}}},
gutter:0,
justify:"start",
align:"top", 
 },
},
tListCardx0x10x0: {
defaultStyle: {
            default: {"width":"410px","height":"auto","position":"unset","left":"20px","top":"421px","lineHeight":"18px","animationName":"","paddingRight":"8px","paddingLeft":"8px","backgroundColor":"var(--business-show-bg30)","paddingTop":"8px","paddingBottom":"8px","min-height":"82px"},
            
            },
 default: { 
 
data:[],
spacingX:8,
col:4,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","trend":"trend","color":"color","selectIcon":""},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"410px","height":"auto","position":"unset","left":"20px","top":"421px","lineHeight":"18px","animationName":"","paddingRight":"8px","paddingLeft":"8px","backgroundColor":"var(--business-show-bg30)","paddingTop":"8px","paddingBottom":"8px","min-height":"82px"}},"itemWrapper":{"default":{"height":"66px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"var(--business-show-bg30)","lineHeight":"18px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"0px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","backgroundColor":"var(--business-show-bg50)"}},"num":{"default":{"fontSize":"24px","fontWeight":"700","marginRight":"2px","lineHeight":"20px","textAlign":"left","fontFamily":"DIN-bold","color":"var(--t-aqi-green)"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-unit-icon)"}},"title":{"default":{"fontSize":"14px","color":"var(--t-white)","marginTop":"0px"}},"icon":{"default":{"width":"32px","height":"32px","left":"16px","marginLeft":"17px"}},"numBox":{"default":{"marginTop":"6px"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"rightContent":{"default":{"alignItems":"center","marginLeft":"8px","display":"flex","flexDirection":"column"}}}, 
 },
},
tListCardx0x10x1: {
defaultStyle: {
            default: {"width":"410px","height":"auto","position":"unset","left":"20px","top":"490px","backgroundColor":"rgba(255, 228, 142, 0.1)","paddingLeft":"12px","paddingRight":"12px","paddingTop":"12px","marginBottom":"auto","paddingBottom":"12px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","marginTop":"8px"},
            
            },
 default: { 
 
data:[],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"num",
active:"",
cStyle:{"wrapper":{"default":{"width":"410px","height":"auto","position":"unset","left":"20px","top":"490px","backgroundColor":"rgba(255, 228, 142, 0.1)","paddingLeft":"12px","paddingRight":"12px","paddingTop":"12px","marginBottom":"auto","paddingBottom":"12px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","marginTop":"8px"}},"itemWrapper":{"default":{"height":"auto","backgroundColor":"rgba(228, 64, 23, 0)"}},"icon":{"default":{"display":"none"},"active":{"display":"none"}},"num":{"default":{"display":"block","fontSize":"14px","textAlign":"left"},"active":{"display":"block"}},"unit":{"default":{"display":"none"},"active":{"display":"none"}},"numBox":{"default":{"display":"block"},"active":{"display":"block"}},"title":{"default":{"display":"none"},"active":{"display":"none"}},"cardIcon":{"default":{"display":"none"}},"specialCardIcon":{"default":{"display":"none"}},"outerWrapper":{"default":{"height":"auto"}},"rightContent":{"default":{"height":"24px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","min-height":"24px"}}}, 
 },
},
tTablex0x10x2: {
defaultStyle: {
            default: {"width":"410px","height":"240px","position":"unset","left":"20px","top":"626px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","marginTop":"4px"},
            
            },
 default: { 
 
height:"240",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"240px","position":"unset","left":"20px","top":"626px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","marginTop":"4px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
tListCardx0x10x3: {
defaultStyle: {
            default: {"width":"410px","height":"120px","position":"unset","left":"20px","top":"863px","backgroundColor":"var(--business-show-bg10)","paddingLeft":"12px","paddingRight":"12px","paddingTop":"12px","marginBottom":"auto","paddingBottom":"12px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","marginTop":"4px"},
            
            },
 default: { 
 
data:[{"num":"基础评分与污染类型有关；","color":"var(--business-text-avianize)"},{"num":"位置关系主要指污染源与报警站点及后向轨迹的位置关系；","color":"var(--business-text-avianize)"},{"num":"时间变化趋势指根据各项在线监控指标判断污染源排放随时间变化情况；","color":"var(--business-text-avianize)"},{"num":"排放特征主要指污染源排放的污染物种类及时段等。","color":"var(--business-text-avianize)"}],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"num",
active:"",
cStyle:{"wrapper":{"default":{"width":"410px","height":"120px","position":"unset","left":"20px","top":"863px","backgroundColor":"var(--business-show-bg10)","paddingLeft":"12px","paddingRight":"12px","paddingTop":"12px","marginBottom":"auto","paddingBottom":"12px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","marginTop":"4px"}},"itemWrapper":{"default":{"height":"auto","backgroundColor":"rgba(228, 64, 23, 0)"}},"icon":{"default":{"display":"none"},"active":{"display":"none"}},"num":{"default":{"display":"block","fontSize":"12px","textAlign":"left"},"active":{"display":"block"}},"unit":{"default":{"display":"none"},"active":{"display":"none"}},"numBox":{"default":{"display":"block"},"active":{"display":"block"}},"title":{"default":{"display":"none"},"active":{"display":"none"}},"cardIcon":{"default":{"display":"none"}},"specialCardIcon":{"default":{"display":"none"}},"outerWrapper":{"default":{"height":"auto"}},"rightContent":{"default":{"height":"24px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","min-height":"24px"}}}, 
 },
},
});
const getProvider = () => {
const rootData = inject('sourceParmasState');
// console.log(rootData,'sourceParmasState'); // 接收到的值

state.sourceParmasState = rootData;

// {
//     "pointCode": "440306023000002",
//     "pointType": "4",
//     "isShowAlarmFlag": true,
//     "alarmTime": "2021-03-20 23",
//     "traceTime": "2021-03-20 11",
//     "count_id": "D08E60290BE515B5E0538500A8C01116",
//     "aqiLevel": "1",
//     "primPollute": "PM10",
//     "polluteLevel": "良",
//     "dateType": "HOUR",
//     "POINT_CODE": "440306023000002",
//     "lon": "113.847061",
//     "lat": "22.718378",
//     "REGION_CODE": "440306023000002",
//     "endTime": "2021-03-20 11",
//     "COUNT_ID": "D08E60290BE515B5E0538500A8C01116"
// }
};
const initPage = () => {
// f18e26713e417bdd64d0d04fd25bdf16&alarmTime=2022-05-07%2013&endTime=2022-05-07%2016&COUNT_ID=e540c637-cde3-11ec-8f3e-d839ee064e9b
state.parentParams = {
  ...state.sourceParmasState.componentSourceParmas,
  REGION_CODE: global.regionaQuery.regionCode || '510100000000',
  // POINT_CODE: '51010501002',
  // REGION_CODE: '510100000000',
  // alarmTime: '2022-05-07 13',
  // endTime: '2022-05-07 16',
  // COUNT_ID: 'e540c637-cde3-11ec-8f3e-d839ee064e9b',
  MONITOR_MONTH: '',
  AIRMONITORTIME: '',
  ALARM_END_TIME: '',
};

state.parentParams.MONITOR_MONTH = state.parentParams.alarmTime?.slice(0, 7) || '';
state.parentParams.AIRMONITORTIME = state.parentParams.alarmTime?.slice(0, 13) || '';
state.parentParams.ALARM_END_TIME = state.parentParams.endTime?.substring(0, 13) || '';
state.parentParams.COUNT_ID = state.parentParams.COUNT_ID || '';

console.log('获取传递过来的参数-有报警', state.parentParams);

// 遥感网格图层参数定义
state.GRID_LAYER_PARAMS = {
  "MONITORTIME": '',
  "POLLUTE": '',
  "COUNT_ID": ''
}
// 火点位置图层参数定义
state.REGION_LAYER_PARAMS = {
  "REGION_CODE": state.parentParams.REGION_CODE,
}
// 外部传输图层参数定义
state.OUPUT_LAYER_PARAMS = {
  "REGION_CODE": state.parentParams.REGION_CODE,
  "MONITOR_TIME": '',
  "POLLUTE": '',
  "interfaceId": '6a11ac6f66b62653c29cc5d6c9cf7a67',
  // "interfaceId": dataType == 'HOUR' ? '6a11ac6f66b62653c29cc5d6c9cf7a67' : 'e07e20968d905570929b1436f22f4b59'
}
// 所有溯源-联动图层
state.ALL_LAYERS = ["遥感网格", "路网", "扬尘点位", "外地监测站点浓度", "污染源点位", "火点位置", "餐饮企业", "汽修企业"];

const init = async () => {
  // 获取报警信息
  getAlarmInfo();
  // 获取当月报警记录总数
  getAlarmTotal();
  // 获取疑似污染源
  getLikeWry();
  // 获取污染物tab
  await getWryTabList();
  if (state.activeTab) {
    // 获取污染物场景信息
     await getSceneList();
     if (state.activeCard) {
      // 获取报警原因列表
      getResultList();
      // 获取污染源评分列表
      getPolluteScoreList();
     }
  }
};

init();

};
const clickAlarmTotal = () => {
// 如果当月报警记录为空，则不进行跳转
if (state.alarmMonthTotal === '0' || !state.alarmMonthTotal) {
  return;
}

const startTime = state.MONITOR_MONTH;
let firstDate = '';
let endDate = '';

if (startTime) {
  const sysDate = new Date();
  const sysYear = sysDate.getFullYear();
  const sysMonth = sysDate.getMonth() + 1;
  const sysDay = sysDate.getDate();

  const timeYear = startTime.split('-')[0];
  const timeMonth = Number(startTime.split('-')[1]);

  firstDate = timeYear + "-" + startTime.split('-')[1] + "-01 00:00";
  // 判断是否是系统当前月份
  if (sysYear == timeYear && sysMonth == timeMonth) {
    endDate = timeYear + "-" + startTime.split('-')[1] + "-" + sysDay + " 23:59";
  } else {
    const thisDate = new Date(timeYear, timeMonth, 0);
    endDate = timeYear + "-" + startTime.split('-')[1] + "-" + thisDate.getDate() + " 23:59";
  }
}

// 给地图发消息
/* 发送webSocket消息 */
if (rootData?.sendMessage) {
  rootData?.sendMessage({
    id: guid(true, 'lego'), // 唯一索引
    type: "runInteractive", // 消息名称
    data: [
      {
        shareCode: "showRecordDetail",
        runtimeValue: state.parentParams.POINT_CODE || '',
        // 显示lego的溯源
        componentName: "airMonthlyAlarmRecordsComponent",
        componentParmas: {
          POINT_CODE: state.pointCode,
          ASSESSTYPE: state.assessType,
          DATA_FREQUENCY: '4',
          MULTI_POLLUTANTS: 'W21003,W21011',
          MONITORTIME: state.monitorTime,
          ...state.sourceParmasState?.componentSourceParmas
        }
      }, {
        code: "value",
        shareCode: "ALARM_START_TIME",
        runtimeValue: firstDate
      }, {
        code: "value",
        shareCode: "ALARM_END_TIME",
        runtimeValue: endDate
      }, {
        shareCode: "ALARM_POINT_TYPE",
        runtimeValue: state.pointInfo.POINT_TYPE
      }, {
        shareCode: "ALARM_POINT_NAME",
        runtimeValue: state.pointInfo.POINT_NAME
      }
    ]
  });
}

// 发送socket消息，展示当月报警记录
// rootData.rootSocket.emit(
//   'message',
//   {
//     room: global.socketRoom,
//     type: "toggleAirTraceAlarmRecord",
//     data: {
//       "compName": 'monthlyAlarmRecords',
//     },
//   }
// );
};
const getHeaderInfo = () => {
// // 遥感网格图层参数定义
// let GRID_LAYER_PARAMS = {
//   "MONITORTIME": '',
//   "POLLUTE": '',
//   "COUNT_ID": ''
// }

// // 火点位置图层参数定义
// let REGION_LAYER_PARAMS = {
//   "REGION_CODE": state.parentParams.REGION_CODE,
// }
// // 外部传输图层参数定义
// let OUPUT_LAYER_PARAMS = {
//   "REGION_CODE": state.parentParams.REGION_CODE,
//   "MONITOR_TIME": '',
//   "POLLUTE": '',
//   "interfaceId": '6a11ac6f66b62653c29cc5d6c9cf7a67',
//   // "interfaceId": dataType == 'HOUR' ? '6a11ac6f66b62653c29cc5d6c9cf7a67' : 'e07e20968d905570929b1436f22f4b59'
// }
/**
  SCENE_PARAM_CONFIG 定义每类场景对应展示的的表头及字段信息、图层信息
  @param key  场景名称
  @param headList 场景对应污染源展示的列表字段
  @param properties 场景对应污染源展示的列表属性字段
  @param POLLUTES 场景需要展示的图层的污染物
  @param layers 场景下对应污染物需要展示的图层
*/
const SCENE_PARAM_CONFIG = {
  "区域传输": {
    "headList": ["传输城市", "方向", "得分"],
    "properties": ["OBJNAME", "DIRECTION", "SCORE"],
    "POLLUTES": ["PM10", "PM2_5", "O3"],
    "layers": []
  },
  "火点": {
    "headList": ["火点区域", "方向", "距离(Km)", "得分"],
    "properties": ["OBJNAME", "DIRECTION", "DISTANCE", "SCORE"],
    "POLLUTES": ["PM10", "PM2_5"],
    "layers": [
      {
        "layerName": "遥感网格",
        "visible": true,
        "params": state.GRID_LAYER_PARAMS
      },
      {
        "layerName": "火点位置",
        "visible": true,
        "params": state.REGION_LAYER_PARAMS
      }
    ]
  },
  "本地扬尘": {
    "headList": ["道路名称", "方向", "距离(Km)", "得分"],
    "properties": ["OBJNAME", "DIRECTION", "DISTANCE", "SCORE"],
    "POLLUTES": ["PM10", "PM2_5"],
    "layers": []
  },
  "机动车": {
    "headList": ["道路名称", "方向", "距离(Km)", "得分"],
    "properties": ["OBJNAME", "DIRECTION", "DISTANCE", "SCORE"],
    "POLLUTES": ["PM2_5", "NO2"],
    "layers": [
      {
        "layerName": "遥感网格",
        "visible": true,
        "params": state.GRID_LAYER_PARAMS
      },
      {
        "layerName": "路网",
        "visible": true
      }
    ]
  },
  "工业企业": {
    "headList": ["污染企业名称", "方向", "距离(Km)", "得分"],
    "properties": ["OBJNAME", "DIRECTION", "DISTANCE", "SCORE"],
    "POLLUTES": ["PM2_5", "NO2", "SO2", "O3"],
    "layers": [
      {
        "layerName": "遥感网格",
        "visible": true,
        "params": state.GRID_LAYER_PARAMS
      },
      {
        "layerName": "污染源点位",
        "visible": true,
        "params": state.REGION_LAYER_PARAMS
      }
    ]
  },
  "本地累积": {
    "headList": ["传输城市", "方向", "得分"],
    "properties": ["OBJNAME", "DIRECTION", "SCORE"],
    "POLLUTES": ["PM2_5", "O3"],
    "layers": [
      {
        "layerName": "遥感网格",
        "visible": true,
        "params": state.GRID_LAYER_PARAMS
      }
    ]
  },
  "外地传输": {
    "headList": ["传输城市", "方向", "得分"],
    "properties": ["OBJNAME", "DIRECTION", "SCORE"],
    "POLLUTES": ["PM10", "PM2_5", "O3"],
    "layers": [
      {
        "layerName": "遥感网格",
        "visible": true,
        "params": state.GRID_LAYER_PARAMS
      },
      {
        "layerName": "外地监测站点浓度",
        "visible": true,
        "params": state.OUPUT_LAYER_PARAMS
      }
    ]
  },
  "工地扬尘": {
    "headList": ["工地名称", "方向", "距离(Km)", "得分"],
    "properties": ["OBJNAME", "DIRECTION", "DISTANCE", "SCORE"],
    "POLLUTES": ["PM10", "PM2_5"],
    "layers": [
      {
        "layerName": "遥感网格",
        "visible": true,
        "params": state.GRID_LAYER_PARAMS
      },
      {
        "layerName": "扬尘点位",
        "visible": true,
        "params": {}
      }
    ]
  },
  "道路扬尘": {
    "headList": ["道路名称", "方向", "距离(Km)", "得分"],
    "properties": ["OBJNAME", "DIRECTION", "DISTANCE", "SCORE"],
    "POLLUTES": ["PM10", "PM2_5"],
    "layers": [
      {
        "layerName": "遥感网格",
        "visible": true,
        "params": state.GRID_LAYER_PARAMS
      },
      {
        "layerName": "路网",
        "visible": true
      }
    ]
  },
  "餐饮": {
    "headList": ["污染源名称", "方向", "距离(Km)", "得分"],
    "properties": ["OBJNAME", "DIRECTION", "DISTANCE", "SCORE"],
    "POLLUTES": ["O3", "PM2_5"],
    "layers": [
      {
        "layerName": "遥感网格",
        "visible": true,
        "params": state.GRID_LAYER_PARAMS
      },
      {
        "layerName": "餐饮企业",
        "visible": true
      }
    ]
  },
  "汽修": {
    "headList": ["污染源名称", "方向", "距离(Km)", "得分"],
    "properties": ["OBJNAME", "DIRECTION", "DISTANCE", "SCORE"],
    "POLLUTES": ["O3"],
    "layers": [
      {
        "layerName": "遥感网格",
        "visible": true,
        "params": state.GRID_LAYER_PARAMS
      },
      {
        "layerName": "汽修企业",
        "visible": true
      }
    ]
  },
};

state.headInfo = SCENE_PARAM_CONFIG[state.activeCard];

// 设置定位列（状态列）
const columnsTemp = [{
  label: '定位',
  key: 'canPosition',
  stateKey: 'canPosition',
  align: 'center',
  type: 'state',
  width: 50,
  showOverflowTooltip: true,
  stateList: [
    {
      name: 'true',
      fontStyle: {
        width: '16px',
        height: '20px',
        color: 'transparent',
        background: 'var(--business-position) no-repeat center center / 100% 100%',
        cursor: 'pointer',
      },
    },
    {
      name: 'false',
      fontStyle: {
        width: '16px',
        height: '20px',
        color: 'transparent',
        background: 'var(--business-position) no-repeat center center / 100% 100%',
        filter: 'grayscale(1)',
      },
    }
  ],
}];

for (let i = 0; i < state.headInfo.headList.length; i++) {
  // 填充头部信息
  columnsTemp.push({
    label: state.headInfo.headList[i],
    key: state.headInfo.properties[i],
    align: 'center',
    showOverflowTooltip: true,
    minWidth: '80px',
  });
}

state.columns = columnsTemp;

console.log('获取表格头信息', state.activeCard, state.headInfo, state.columns);


};
const clickSceneCard = () => {
	// 如果存在场景卡片数据
  if (state.activeCard) {
		// 根据场景获取，展示列表的头信息
    getHeaderInfo();
		// 发送更新图层消息
		sendUpdateLayerMsg();
		// 获取报警原因列表
		getResultList();
		// 获取污染源评分列表
		getPolluteScoreList();
		// 发送溯源消息
		sendTraceLayerMsg();
  }
	
};
const sendUpdateLayerMsg = () => {
console.log('---------- 场景卡片 - 更新图层消息 ------------');

// 获取当前场景渲染的图层
let layers = state.headInfo.layers;
const POLLUTANTS = state.headInfo.POLLUTES;
const SHOW_LAYERS = [];

// 判断当前污染物下需要展示的图层信息
layers = layers.filter(layer => {
  if (POLLUTANTS) {
    const isShow = POLLUTANTS.includes(state.GRID_LAYER_PARAMS.POLLUTE);
    //  $.inArray(state.GRID_LAYER_PARAMS.POLLUTE, POLLUTANTS) != -1;
    if (isShow) {
      SHOW_LAYERS.push(layer.layerName);
    }
    return isShow;
  } else {
    return false;
  }
});

// 判断需要隐藏的图层信息
for (let i = 0; i < state.ALL_LAYERS.length; i++) {
  if (!SHOW_LAYERS.includes(state.ALL_LAYERS[i])) {
    // if ($.inArray(ALL_LAYERS[i], SHOW_LAYERS) == -1) {
    layers.push({
      "layerName": state.ALL_LAYERS[i],
      "visible": false
    });
  }
}

// 发送刷新图层数据消息
// htmlTool.sendSyncSocketMessage([{
//   code: "updateLayerData",
//   shareCode: "updateLayerData",
//   runtimeValue: JSON.stringify(layers),
//   defaultValue: JSON.stringify(layers),
// }]);

// 给地图发消息
/* 发送webSocket消息 */
if (rootData?.sendMessage) {
  rootData?.sendMessage({
    id: guid(true, 'lego'), // 唯一索引
    type: "runInteractive", // 消息名称
    data: [
      {
        code: "updateLayerData",
        shareCode: "updateLayerData",
        runtimeValue: JSON.stringify(layers),
        defaultValue: JSON.stringify(layers),
      }
    ]
  });
}
};
const sendTraceLayerMsg = () => {
console.log('---------- 场景卡片 - 发送溯源消息 ------------');
// 发送溯源点位高亮显示消息

// 发送点位的消息处理过慢，导致精准溯源图层出不来，高亮显示不了图层点位，设置延迟时间
setTimeout(function () {
  // htmlTool.sendSyncSocketMessage([{
  //   code: "POLLUTE",
  //   shareCode: "POLLUTE",
  //   runtimeValue: pollute,
  //   defaultValue: pollute
  // }, {
  //   code: "highlightPointType",
  //   shareCode: "highlightPointType",
  //   runtimeValue: cause_name,
  //   defaultValue: cause_name
  // }]);

  // 给地图发消息
  /* 发送webSocket消息 */
  if (rootData?.sendMessage) {
    rootData?.sendMessage({
      id: guid(true, 'lego'), // 唯一索引
      type: "runInteractive", // 消息名称
      data: [
        {
          code: "POLLUTE",
          shareCode: "POLLUTE",
          runtimeValue: state.activeTab,
          defaultValue: state.activeTab,
        }, {
          code: "highlightPointType",
          shareCode: "highlightPointType",
          runtimeValue: state.activeCard,
          defaultValue: state.activeCard,
        }
      ]
    });
  }
}, 1000);
};
const sendTracePointMsg = () => {
console.log('---------- 污染物tab - 发送地图溯源点位消息 ------------');

// 处理污染物改变事件，发送地图溯源点位消息

const val = {
  "POINT_CODE": state.parentParams.POINT_CODE,
  "COUNT_ID": state.parentParams.COUNT_ID,
  "MONTH_TIME": state.parentParams.MONITOR_MONTH,
  "POLLUTANT": state.activeTab, // 当前选中的污染物
  "START_TIME": state.pointInfo.START_TIME || '',
  "END_TIME": state.pointInfo.END_TIME || '',
  "DATATYPE": 'HOUR'
}

// 给地图发消息
/* 发送webSocket消息 */
if (rootData?.sendMessage) {
  rootData?.sendMessage({
    id: guid(true, 'lego'), // 唯一索引
    type: "runInteractive", // 消息名称
    data: [
      {
        code: "drawSourcePoint",
        shareCode: "drawSourcePoint",
        runtimeValue: JSON.stringify(val),
        defaultValue: JSON.stringify(val)
      }
    ]
  });
}
};
const clickWrwTab = () => {
const getData = async () => {
  // 发送溯源消息
  sendTracePointMsg();
  // 获取污染物场景信息
  await getSceneList();

  if (state.activeCard) {
    // 获取报警原因列表
    getResultList();
    // 获取污染源评分列表
    getPolluteScoreList();
  }
};

getData();


};
const getDirectionText = (direction) => {
// 把方向改成数字类型
let num = Number(direction);

// 方向文本
let directionText = '-';
if (num) {
  if ((num >= 0 && num <= 22.5) || (num >= 337.5 && num <= 360)) {
    directionText = '正北方向';
  } else if (num > 22.5 && num <= 67.5) {
    directionText = '东北方向';
  } else if (num > 67.5 && num <= 112.5) {
    directionText = '正东方向';
  } else if (num > 112.5 && num <= 157.5) {
    directionText = '东南方向';
  } else if (num > 157.5 && num <= 202.5) {
    directionText = '正南方向';
  } else if (num > 202.5 && num <= 247.5) {
    directionText = '西南方向';
  } else if (num > 247.5 && num <= 292.5) {
    directionText = '正西方向';
  } else if (num > 192.5 && num <= 337.5) {
    directionText = '西北方向';
  }
}
return directionText;
};
const handleTableClick = (column,row) => {
console.log('处理表格点击事件', column, row);

if (column.label === '定位') {
  if (row.LONGITUDE && row.LATITUDE) {
    console.log('处理定位');
    const lonlat = {
      "longitude": row.LONGITUDE,
      "latitude": row.LATITUDE,
    }
    // 给地图发消息
    /* 发送webSocket消息 */
    if (rootData?.sendMessage) {
      rootData?.sendMessage({
        id: guid(true, 'lego'), // 唯一索引
        type: "runInteractive", // 消息名称
        data: [
          {
            code: "gotoPoint",
            shareCode: "gotoPoint",
            runtimeValue: JSON.stringify(lonlat),
            defaultValue: JSON.stringify(lonlat)
          }
        ]
      });
    }
  }
}
};
const ontabClick1734419810210 = (data) => {
// 设置变量值
state.activeTab = data.value;
// 执行自定义方法
clickWrwTab();
};
const oncardClick1734427200133 = (item) => {
// 设置变量值
state.activeCard = item.title;
// 执行自定义方法
clickSceneCard();
};
const oncellClick1734500543163 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(column,row);
};
const onclick1734415835534 = () => {
// 执行自定义方法
clickAlarmTotal();
};
// 接口函数
const getPolluteScoreList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"CAUSE_NAME":state.activeCard,"COUNT_ID":state.parentParams.COUNT_ID,"POLLUTANT":state.activeTab,"MONTH_TIME":state.parentParams.MONITOR_MONTH,"POINT_CODE":state.parentParams.POINT_CODE,"interfaceId":"e773f339456ac1f18eb39e7e626688ec"},}).then((res) => {
     // 成功的操作
     // console.log('获取 污染源评分列表', res);

// 清空原始数据
state.scoreList = [];

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data) {
  state.scoreList = data.data.map((item) => ({
    ...item,
    canPosition: (item.LONGITUDE && item.LATITUDE).toString() ? 'true' : 'false', // 判断是否有经纬度，若有就可以定位，否则不可以定位
    DIRECTION: getDirectionText(item.DIRECTION), // 处理方向文本
    DISTANCE: Number(item.DISTANCE) ? parseFloat(Number(item.DISTANCE)).toFixed(2) : '-', // 处理距离文本
  })) || [];
}

console.log('填充后的 污染源评分列表', state.scoreList);

// {
//     "OBJNAME": "四川金鹏宏达实业有限公司",
//     "DIRECTION": "36.37262981",
//     "DISTANCE": "5.71",
//     "SCORE": "60",
//     "LONGITUDE": "",
//     "LATITUDE": ""
// }
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.scoreList = [];
      reject(error);
    });
  });
};
// 接口函数
const getAlarmTotal = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"COUNT_ID":state.parentParams.COUNT_ID,"ALARM_END_TIME":state.parentParams.ALARM_END_TIME,"AIRMONITORTIME":state.parentParams.AIRMONITORTIME,"MONITOR_MONTH":state.parentParams.MONITOR_MONTH,"POINT_CODE":state.parentParams.POINT_CODE,"interfaceId":"29ed367122058ace783514d180784630"},}).then((res) => {
     // 成功的操作
     // console.log('获取 当月报警记录 总数', res);

// 清空原始数据
state.alarmMonthTotal = 0;

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data) {
  state.alarmMonthTotal = data.data.MONTH_ALARM_TOTAL || 0;
}

console.log('填充后的 当月报警记录', state.alarmMonthTotal);

// {
//     "MONTH_ALARM_TOTAL": "59",
//     "MONTH_MAX_TIME": "2021-03-20 21:00:00.0"
// }
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.alarmMonthTotal = 0;
      reject(error);
    });
  });
};
// 接口函数
const getWryTabList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"MONTH_TIME":state.parentParams.MONITOR_MONTH,"COUNT_ID":state.parentParams.COUNT_ID,"POINT_CODE":state.parentParams.POINT_CODE,"interfaceId":"d22375a4eb9486a83081f3d78e0335cc"},}).then((res) => {
     // 成功的操作
     // console.log('获取 污染物tab', res);

state.tabList = [];
state.activeTab = '';

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data?.length) {
  // 填充下拉
  for (let i = 0; i < data.data.length; i++) {
    const elem = data.data[i];
    if (elem.POLLUTANT) {
      state.tabList.push({
        ...elem,
        label: convertCharacter(elem.POLLUTANT) || '-',
        value: elem.POLLUTANT || '',
      });
    }
  }
  state.activeTab = state.tabList[0].value || '';
  // 处理污染物改变事件，发送地图溯源点位消息
  if (state.activeTab) {
    // 发送地图溯源点位消息
    sendTracePointMsg();
  }
}
console.log('填充后的 污染物 tab', state.tabList, state.activeTab);

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tabList = [];
state.activeTab = '';
      reject(error);
    });
  });
};
// 接口函数
const getLikeWry = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"MONTH_TIME":state.parentParams.MONITOR_MONTH,"COUNT_ID":state.parentParams.COUNT_ID,"POINT_CODE":state.parentParams.POINT_CODE,"interfaceId":"cd298be8af3d72951f70168642050548"},}).then((res) => {
     // 成功的操作
     // console.log('获取 疑似污染源', res);

// 清空原始数据
state.TRACE_TOTAL = 0;

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data) {
  state.TRACE_TOTAL = data.data.TRACE_TOTAL || 0;
}

console.log('填充后的 疑似污染源', state.TRACE_TOTAL);

// {
//     "TRACE_TOTAL": "0"
// }
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.TRACE_TOTAL = 0;
      reject(error);
    });
  });
};
// 接口函数
const getResultList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"COUNT_ID":state.parentParams.COUNT_ID,"CAUSE_NAME":state.activeCard,"POLLUTANT":state.activeTab,"MONTH_TIME":state.parentParams.MONITOR_MONTH,"POINT_CODE":state.parentParams.POINT_CODE,"interfaceId":"f831e39ba890c81aab5fa649968ec023"},}).then((res) => {
     // 成功的操作
     // console.log('获取 获取报警原因列表', res);

// 清空原始数据
state.resultList = [];

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data?.length) {
  const resu = data.data[0];
  if (resu.CAUSE_CRITERIAN1 && resu.CAUSE_CRITERIAN1 !== 'nan') {
    state.resultList = [{
      num: '原因说明：',
      color: '#FFE2B7',
    }, {
      num: resu.CAUSE_CRITERIAN1 || '-',
      color: '#fff',
    }];
  }
  if (resu.CAUSE_CRITERIAN2 && resu.CAUSE_CRITERIAN2 !== 'nan') {
    state.resultList.push({
      num: resu.CAUSE_CRITERIAN2 || '-',
      color: '#fff',
    });
  }
  if (resu.CAUSE_CRITERIAN3 && resu.CAUSE_CRITERIAN3 !== 'nan') {
    state.resultList.push({
      num: resu.CAUSE_CRITERIAN3 || '-',
      color: '#fff',
    });
  }
  if (resu.CAUSE_CRITERIAN4 && resu.CAUSE_CRITERIAN4 !== 'nan') {
    state.resultList.push({
      num: resu.CAUSE_CRITERIAN4 || '-',
      color: '#fff',
    });
  }
  if (resu.CAUSE_CRITERIAN5 && resu.CAUSE_CRITERIAN5 !== 'nan') {
    state.resultList.push({
      num: resu.CAUSE_CRITERIAN5 || '-',
      color: '#fff',
    });
  }
}

console.log('填充后的 报警原因列表', state.resultList);

// [{
//     "CAUSE_CRITERIAN1": "周边10km范围内存在排放超标的企业。",
//     "CAUSE_CRITERIAN2": "周边10km范围内存在设备用电异常超标的企业。",
//     "CAUSE_CRITERIAN3": "周边10km范围内存在国网用电异常超标超标的企业。",
//     "CAUSE_CRITERIAN4": "nan",
//     "CAUSE_CRITERIAN5": "nan"
// }]
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.resultList = [];
      reject(error);
    });
  });
};
// 接口函数
const getSceneList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"COUNT_ID":state.parentParams.COUNT_ID,"POLLUTANT":state.activeTab,"MONITOR_MONTH":state.parentParams.MONITOR_MONTH,"POINT_CODE":state.parentParams.POINT_CODE,"interfaceId":"ff97bf6832827e378b6e7acf2380930c"},}).then((res) => {
     // 成功的操作
     // console.log('获取 污染物场景信息', res);

// 清空原始数据
state.sceneList = [];
state.activeCard = '';

state.GRID_LAYER_PARAMS.POLLUTE = state.activeTab || '';
state.OUPUT_LAYER_PARAMS.POLLUTE = state.activeTab === 'PM2_5' ? 'PM25' : (state.activeTab || '');

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data) {
  state.sceneList = data.data.map((item) => ({
    ...item,
    title: item.CAUSE_NAME || '-',
    num: item.CAUSE_TOTAL || '0',
    unit: '个',
    color: 'var(--t-white)',
  }));
  state.activeCard = state.sceneList?.[0].title || '';
  // 如果存在场景卡片数据
  if (state.activeCard) {
    // 根据场景获取列表头
    getHeaderInfo();
    // 发送更新图层消息
    sendUpdateLayerMsg();
    // 发送溯源消息
    sendTraceLayerMsg();
  }
}

console.log('填充后的 污染物场景信息', state.sceneList, state.activeCard);

// [{
//     "CAUSE_NAME": "工业企业",
//     "CAUSE_TOTAL": "20"
// }]
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.sceneList = [];
state.activeCard = '';

state.GRID_LAYER_PARAMS.POLLUTE = state.activeTab || '';
state.OUPUT_LAYER_PARAMS.POLLUTE = state.activeTab === 'PM2_5' ? 'PM25' : (state.activeTab || '');

      reject(error);
    });
  });
};
// 接口函数
const getAlarmInfo = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"COUNT_ID":state.parentParams.COUNT_ID,"ALARM_END_TIME":state.parentParams.ALARM_END_TIME,"AIRMONITORTIME":state.parentParams.AIRMONITORTIME,"MONITOR_MONTH":state.parentParams.MONITOR_MONTH,"POINT_CODE":state.parentParams.POINT_CODE,"interfaceId":"1a3b87bc0afb0c017d2636ad136a0e28"},}).then((res) => {
     // 成功的操作
     // console.log('获取 报警信息', res);

// 清空原始数据
state.alarmInfo = [
  {
    "title": "报警污染物",
    "num": "-"
  },
  {
    "title": "报警原因",
    "num": "-"
  },
  {
    "title": "开始报警时间",
    "num": "-"
  },
  {
    "title": "结束报警时间",
    "num": "-"
  },
  {
    "title": "报警持续时间",
    "num": "-"
  },
  {
    "title": "当月报警记录",
    "num": '',
  }
];

state.pointInfo = {
  POINT_NAME: '',
  POINT_TYPE: '',
  START_TIME: '',
  END_TIME: '',
};

// 填充图层信息
state.GRID_LAYER_PARAMS.MONITORTIME = state.parentParams.alarmTime.substring(0, 13) || '';
state.GRID_LAYER_PARAMS.COUNT_ID = state.parentParams.COUNT_ID || '';
state.OUPUT_LAYER_PARAMS.MONITOR_TIME = state.parentParams.alarmTime.substring(0, 13) || '';

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data) {
  // 填充报警信息
  state.alarmInfo[0].num = data.data[0].POLLUTANTS || '-'; // 报警污染物
  state.alarmInfo[1].num = data.data[0].EVENT_TYPE || '-'; // 报警原因（告警类型）
  state.alarmInfo[2].num = data.data[0].START_TIME || '-'; // 开始报警时间
  state.alarmInfo[3].num = data.data[0].END_TIME || '-'; // 结束报警时间
  state.alarmInfo[4].num = data.data[0].DURATION ? `${data.data[0].DURATION}小时` : '-'; // 报警持续时间

  // 填充点位信息
  state.pointInfo = data.data[0];

  // 填充图层信息
  state.GRID_LAYER_PARAMS.MONITORTIME = data.data[0].START_TIME.substring(0, 13) || '';
  state.GRID_LAYER_PARAMS.COUNT_ID = state.parentParams.COUNT_ID || '';
  state.OUPUT_LAYER_PARAMS.MONITOR_TIME = data.data[0].START_TIME.substring(0, 13) || '';
}

console.log('填充后的 报警信息', state.alarmInfo, state.pointInfo);

// [{
//     "POINT_NAME": "松岗街道微站站点",
//     "POINT_TYPE": "4",
//     "POLLUTANTS": "",
//     "POLLUTION_TYPE": "",
//     "EVENT_TYPE": "连续超标",
//     "START_TIME": "2021-03-20 10:00:00",
//     "END_TIME": "2021-03-20 23:00:00",
//     "DURATION": "13"
// }]
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.alarmInfo = [
  {
    "title": "报警污染物",
    "num": "-"
  },
  {
    "title": "报警原因",
    "num": "-"
  },
  {
    "title": "开始报警时间",
    "num": "-"
  },
  {
    "title": "结束报警时间",
    "num": "-"
  },
  {
    "title": "报警持续时间",
    "num": "-"
  },
  {
    "title": "当月报警记录",
    "num": '',
  }
];

state.pointInfo = {
  POINT_NAME: '',
  POINT_TYPE: '',
  START_TIME: '',
  END_TIME: '',
};

// 填充图层信息
state.GRID_LAYER_PARAMS.MONITORTIME = state.parentParams.alarmTime.substring(0, 13) || '';
state.GRID_LAYER_PARAMS.COUNT_ID = state.parentParams.COUNT_ID || '';
state.OUPUT_LAYER_PARAMS.MONITOR_TIME = state.parentParams.alarmTime.substring(0, 13) || '';
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-airSyxqPanelAarmOld', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
// 执行自定义方法
initPage();
onMounted(() => {
setPageScale('t-l-c-airSyxqPanelAarmOld', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tListCardx0x0ComputedData = computed(() => _.merge({}, componentState.tListCardx0x0.default, componentState.tListCardx0x0?.[state.screenSize]));

 const tTabsBasex0x1ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x1.default, componentState.tTabsBasex0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tComponentx0x3ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3.default, componentState.tComponentx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tRectx0x7ComputedData = computed(() => _.merge({}, componentState.tRectx0x7.default, componentState.tRectx0x7?.[state.screenSize]));

 const tTextx0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x8.default, componentState.tTextx0x8?.[state.screenSize]));

 const tTextUnitx0x9ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x9.default, componentState.tTextUnitx0x9?.[state.screenSize]));

 const tRowx0x10ComputedData = computed(() => _.merge({}, componentState.tRowx0x10.default, componentState.tRowx0x10?.[state.screenSize]));

 const tListCardx0x10x0ComputedData = computed(() => _.merge({}, componentState.tListCardx0x10x0.default, componentState.tListCardx0x10x0?.[state.screenSize]));

 const tListCardx0x10x1ComputedData = computed(() => _.merge({}, componentState.tListCardx0x10x1.default, componentState.tListCardx0x10x1?.[state.screenSize]));

 const tTablex0x10x2ComputedData = computed(() => _.merge({}, componentState.tTablex0x10x2.default, componentState.tTablex0x10x2?.[state.screenSize]));

 const tListCardx0x10x3ComputedData = computed(() => _.merge({}, componentState.tListCardx0x10x3.default, componentState.tListCardx0x10x3?.[state.screenSize]));

return {
global,
state,
componentState,
tListCardx0x0ComputedData,
tTabsBasex0x1ComputedData,
tComponentx0x2ComputedData,
tComponentx0x3ComputedData,
tTextx0x4ComputedData,
tTextx0x5ComputedData,
tTextx0x6ComputedData,
tRectx0x7ComputedData,
tTextx0x8ComputedData,
tTextUnitx0x9ComputedData,
tRowx0x10ComputedData,
tListCardx0x10x0ComputedData,
tListCardx0x10x1ComputedData,
tTablex0x10x2ComputedData,
tListCardx0x10x3ComputedData,
ontabClick1734419810210,
onclick1734415835534,
oncardClick1734427200133,
oncellClick1734500543163,
};
},
}
</script>

<style scoped>
.t-l-c-airSyxqPanelAarmOld {
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
height: 1044px;
background-color: rgba(0, 0, 0, 0);
}
.t-l-c-airSyxqPanelAarmOld .airSyxqPanelAarmOld-t-list-card-0-0 {
position: absolute !important;
top: 46px;
left: 13px;
width: 414px;
height: 204px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarmOld .airSyxqPanelAarmOld-t-tabs-base-0-1 {
position: absolute !important;
top: 385px;
left: 20px;
width: 410px;
height: 31px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarmOld .airSyxqPanelAarmOld-t-component-0-2 {
position: absolute !important;
top: 3px;
left: 20px;
width: 410px;
height: 31px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarmOld .airSyxqPanelAarmOld-t-component-0-3 {
position: absolute !important;
top: 282px;
left: 20px;
width: 410px;
height: 31px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarmOld .airSyxqPanelAarmOld-t-text-0-4 {
position: absolute !important;
top: 8px;
left: 60px;
width: 130px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarmOld .airSyxqPanelAarmOld-t-text-0-5 {
position: absolute !important;
top: 287px;
left: 60px;
width: 130px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarmOld .airSyxqPanelAarmOld-t-text-0-6 {
position: absolute !important;
top: 225px;
left: 179px;
width: 164px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarmOld .airSyxqPanelAarmOld-t-rect-0-7 {
position: absolute !important;
top: 326px;
left: 20px;
width: 410px;
height: 50px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarmOld .airSyxqPanelAarmOld-t-text-0-8 {
position: absolute !important;
top: 346px;
left: 157px;
width: 84px;
height: 17px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarmOld .airSyxqPanelAarmOld-t-text-unit-0-9 {
position: absolute !important;
top: 338px;
left: 236px;
width: 190px;
height: 26px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarmOld .airSyxqPanelAarmOld-t-row-0-10 {
position: absolute !important;
top: 425px;
left: 20px;
width: 411px;
height: auto;
pointer-events: auto;
border-left: 0px none rgb(23,62,228);
border-top: 0px none rgb(23,62,228);
border-right: 0px none rgb(23,62,228);
border-bottom: 0px none rgb(23,62,228);
min-height: 500px;
}

.t-l-c-airSyxqPanelAarmOld .airSyxqPanelAarmOld-t-list-card-0-10-0 {
position: unset;
top: 421px;
left: 20px;
width: 410px;
height: auto;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarmOld .airSyxqPanelAarmOld-t-list-card-0-10-1 {
position: unset;
top: 490px;
left: 20px;
width: 410px;
height: auto;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarmOld .airSyxqPanelAarmOld-t-table-0-10-2 {
position: unset;
top: 626px;
left: 20px;
width: 410px;
height: 240px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarmOld .airSyxqPanelAarmOld-t-list-card-0-10-3 {
position: unset;
top: 863px;
left: 20px;
width: 410px;
height: 120px;
pointer-events: auto;
}
</style>
