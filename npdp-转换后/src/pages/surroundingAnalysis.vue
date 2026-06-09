<template>
  <div id="t-l-c-surroundingAnalysis" class="t-l-c-surroundingAnalysis" ><t-search id="t-search-e1a7.0391ab8b4" class="surroundingAnalysis-t-search-0-0"  :type="tSearchx0x0ComputedData.type" :input-value="replaceCssVariables(filterData(state.keywords, componentPropBindingMap?.['t-search-e1a7.0391ab8b4']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tSearchx0x0ComputedData.maxlength" :minlength="tSearchx0x0ComputedData.minlength" :show-word-limit="tSearchx0x0ComputedData.showWordLimit" :placeholder="tSearchx0x0ComputedData.placeholder" :clearable="tSearchx0x0ComputedData.clearable" :show-password="tSearchx0x0ComputedData.showPassword" :disabled="tSearchx0x0ComputedData.disabled" :prefix-icon="tSearchx0x0ComputedData.prefix-icon" :suffix-icon="tSearchx0x0ComputedData.suffix-icon" :rows="tSearchx0x0ComputedData.rows" :autosize="tSearchx0x0ComputedData.autosize" :name="tSearchx0x0ComputedData.name" :readonly="tSearchx0x0ComputedData.readonly" :step="tSearchx0x0ComputedData.step" :autofocus="tSearchx0x0ComputedData.autofocus" :form="tSearchx0x0ComputedData.form" :label="tSearchx0x0ComputedData.label" :tabindex="tSearchx0x0ComputedData.tabindex" :validate-event="tSearchx0x0ComputedData.validateEvent" :c-style="tSearchx0x0ComputedData.cStyle" :has-search-btn="tSearchx0x0ComputedData.hasSearchBtn" @change="onchange1765431933578" @clear="onclear1765432147018"></t-search><t-scrollable-cards id="t-scrollable-cards-c4d6.dbab3477b" class="surroundingAnalysis-t-scrollable-cards-0-1"  :c-style="tScrollableCardsx0x1ComputedData.cStyle" :auto-scroll="tScrollableCardsx0x1ComputedData.autoScroll" :tab="tScrollableCardsx0x1ComputedData.tab" :key-word="tScrollableCardsx0x1ComputedData.keyWord" :default-checked="replaceCssVariables(filterData(state.activeTabName, componentPropBindingMap?.['t-scrollable-cards-c4d6.dbab3477b']['defaultChecked'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :speed="tScrollableCardsx0x1ComputedData.speed" :interval="tScrollableCardsx0x1ComputedData.interval" :card-space="tScrollableCardsx0x1ComputedData.cardSpace" :direction="tScrollableCardsx0x1ComputedData.direction" :data-alias="tScrollableCardsx0x1ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.checkedList, componentPropBindingMap?.['t-scrollable-cards-c4d6.dbab3477b']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @card-click="oncardClick1766498102194"></t-scrollable-cards><t-component id="t-component-d52b.90df00593" class="surroundingAnalysis-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName" :page-id="tComponentx0x2ComputedData.pageId" :page-code="tComponentx0x2ComputedData.pageCode"></t-component><t-list-card-multiple-choice v-if="state.cardLoading === false" id="t-list-card-multiple-choice-27bb.1a5b2882" class="surroundingAnalysis-t-list-card-multiple-choice-0-3"  :c-style="tListCardMultipleChoicex0x3ComputedData.cStyle" :key-word="tListCardMultipleChoicex0x3ComputedData.keyWord" :default-checked="replaceCssVariables(filterData(state.selectedCard, componentPropBindingMap?.['t-list-card-multiple-choice-27bb.1a5b2882']['defaultChecked'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data-alias="tListCardMultipleChoicex0x3ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.cardList, componentPropBindingMap?.['t-list-card-multiple-choice-27bb.1a5b2882']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tListCardMultipleChoicex0x3ComputedData.unit" @card-click="oncardClick1764930968633_0_0"></t-list-card-multiple-choice><t-table id="t-table-f34b.2426008eb" class="surroundingAnalysis-t-table-0-4"  :height="tTablex0x4ComputedData.height" :stripe="tTablex0x4ComputedData.stripe" :border="tTablex0x4ComputedData.border" :auto-scroll="tTablex0x4ComputedData.autoScroll" :speed="tTablex0x4ComputedData.speed" :columns="tTablex0x4ComputedData.columns" :data="replaceCssVariables(filterData(state.pjResultList, componentPropBindingMap?.['t-table-f34b.2426008eb']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x4ComputedData.defaultSort" :c-style="tTablex0x4ComputedData.cStyle" @cell-click="oncellClick1764934474459_0_0"></t-table><t-text id="t-text-eea3.925b992b9" class="surroundingAnalysis-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle"></t-text><t-search id="t-search-5119.8a38b6102" class="surroundingAnalysis-t-search-0-6"  :type="tSearchx0x6ComputedData.type" :input-value="replaceCssVariables(filterData(state.distance, componentPropBindingMap?.['t-search-5119.8a38b6102']['inputValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :maxlength="tSearchx0x6ComputedData.maxlength" :minlength="tSearchx0x6ComputedData.minlength" :show-word-limit="tSearchx0x6ComputedData.showWordLimit" :placeholder="tSearchx0x6ComputedData.placeholder" :clearable="tSearchx0x6ComputedData.clearable" :show-password="tSearchx0x6ComputedData.showPassword" :disabled="tSearchx0x6ComputedData.disabled" :prefix-icon="tSearchx0x6ComputedData.prefix-icon" :suffix-icon="tSearchx0x6ComputedData.suffix-icon" :rows="tSearchx0x6ComputedData.rows" :autosize="tSearchx0x6ComputedData.autosize" :name="tSearchx0x6ComputedData.name" :readonly="tSearchx0x6ComputedData.readonly" :step="tSearchx0x6ComputedData.step" :autofocus="tSearchx0x6ComputedData.autofocus" :form="tSearchx0x6ComputedData.form" :label="tSearchx0x6ComputedData.label" :tabindex="tSearchx0x6ComputedData.tabindex" :validate-event="tSearchx0x6ComputedData.validateEvent" :c-style="tSearchx0x6ComputedData.cStyle" :has-search-btn="tSearchx0x6ComputedData.hasSearchBtn" @change="onchange1765513123031"></t-search><t-text id="t-text-6ee3.01a2b28c1" class="surroundingAnalysis-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle"></t-text><t-button id="t-button-6f9c.48a2a91d9" class="surroundingAnalysis-t-button-0-8"  :label="tButtonx0x8ComputedData.label" :round="tButtonx0x8ComputedData.round" :plain="tButtonx0x8ComputedData.plain" :disabled="tButtonx0x8ComputedData.disabled" :type="tButtonx0x8ComputedData.type" :size="tButtonx0x8ComputedData.size" :native-type="tButtonx0x8ComputedData.native-type" :c-style="tButtonx0x8ComputedData.cStyle" @click="onclick1765431960368"></t-button><t-component id="t-component-4666.cb9a914ee" class="surroundingAnalysis-t-component-0-9"  :name="tComponentx0x9ComputedData.name" :loading="tComponentx0x9ComputedData.loading" :c-style="tComponentx0x9ComputedData.cStyle" :src="tComponentx0x9ComputedData.src" :component-name="tComponentx0x9ComputedData.componentName" :page-id="tComponentx0x9ComputedData.pageId" :page-code="tComponentx0x9ComputedData.pageCode"></t-component><t-text-unit id="t-text-unit-d5c0.d98c4fced" class="surroundingAnalysis-t-text-unit-0-10"  :c-style="tTextUnitx0x10ComputedData.cStyle" :content="tTextUnitx0x10ComputedData.content" :unit="tTextUnitx0x10ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x10ComputedData.showOverflowTooltip"></t-text-unit><t-rect v-if="state.cardLoading === true" id="t-rect-0e09.88e90dc6d" class="surroundingAnalysis-t-rect-0-12"  :tip="tRectx0x12ComputedData.tip" :label="tRectx0x12ComputedData.label" :active="tRectx0x12ComputedData.active" :c-style="tRectx0x12ComputedData.cStyle"></t-rect><t-rect v-if="state.cardNoData === true" id="t-rect-6d38.ad5bf1552" class="surroundingAnalysis-t-rect-0-13"  :tip="tRectx0x13ComputedData.tip" :label="tRectx0x13ComputedData.label" :active="tRectx0x13ComputedData.active" :c-style="tRectx0x13ComputedData.cStyle"></t-rect><t-row v-if="state.isShowVideoPreviewBen === true" id="t-row-a749.1ea038111" class="surroundingAnalysis-t-row-0-14"  :c-style="tRowx0x14ComputedData.cStyle" :gutter="tRowx0x14ComputedData.gutter" :justify="tRowx0x14ComputedData.justify" :align="tRowx0x14ComputedData.align"><t-button v-if="state.isVideoPreview === true" id="t-button-1c70.0a33d64a" class="surroundingAnalysis-t-button-0-14-0"  :label="tButtonx0x14x0ComputedData.label" :round="tButtonx0x14x0ComputedData.round" :plain="tButtonx0x14x0ComputedData.plain" :disabled="tButtonx0x14x0ComputedData.disabled" :type="tButtonx0x14x0ComputedData.type" :size="tButtonx0x14x0ComputedData.size" :native-type="tButtonx0x14x0ComputedData.native-type" :c-style="tButtonx0x14x0ComputedData.cStyle" @click="onclick1766577531220"></t-button><t-button v-if="state.isVideoPreview === false" id="t-button-80b0.5dc5283f4" class="surroundingAnalysis-t-button-0-14-1"  :label="tButtonx0x14x1ComputedData.label" :round="tButtonx0x14x1ComputedData.round" :plain="tButtonx0x14x1ComputedData.plain" :disabled="tButtonx0x14x1ComputedData.disabled" :type="tButtonx0x14x1ComputedData.type" :size="tButtonx0x14x1ComputedData.size" :native-type="tButtonx0x14x1ComputedData.native-type" :c-style="tButtonx0x14x1ComputedData.cStyle" @click="onclick1766577458394"></t-button></t-row></div>
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
import { TButton, TComponent, TListCardMultipleChoice, TRect, TRow, TScrollableCards, TSearch, TTable, TText, TTextUnit } from '@ths/design';

export default {
  components: {
    TButton,
    TComponent,
    TListCardMultipleChoice,
    TRect,
    TRow,
    TScrollableCards,
    TSearch,
    TTable,
    TText,
    TTextUnit,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-search-e1a7.0391ab8b4":{"attributeName":"tSearchx0x0","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]},"hasSearchBtn":{"filters":[]}},"t-scrollable-cards-c4d6.dbab3477b":{"attributeName":"tScrollableCardsx0x1","cStyle":{"filters":[]},"autoScroll":{"filters":[]},"tab":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"speed":{"filters":[]},"interval":{"filters":[]},"cardSpace":{"filters":[]},"direction":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]}},"t-component-d52b.90df00593":{"attributeName":"tComponentx0x2","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-list-card-multiple-choice-27bb.1a5b2882":{"attributeName":"tListCardMultipleChoicex0x3","cStyle":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]},"unit":{"filters":[]}},"t-table-f34b.2426008eb":{"attributeName":"tTablex0x4","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-text-eea3.925b992b9":{"attributeName":"tTextx0x5","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-search-5119.8a38b6102":{"attributeName":"tSearchx0x6","type":{"filters":[]},"inputValue":{"filters":[]},"maxlength":{"filters":[]},"minlength":{"filters":[]},"showWordLimit":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"showPassword":{"filters":[]},"disabled":{"filters":[]},"prefix-icon":{"filters":[]},"suffix-icon":{"filters":[]},"rows":{"filters":[]},"autosize":{"filters":[]},"name":{"filters":[]},"readonly":{"filters":[]},"step":{"filters":[]},"autofocus":{"filters":[]},"form":{"filters":[]},"label":{"filters":[]},"tabindex":{"filters":[]},"validateEvent":{"filters":[]},"cStyle":{"filters":[]},"hasSearchBtn":{"filters":[]}},"t-text-6ee3.01a2b28c1":{"attributeName":"tTextx0x7","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-button-6f9c.48a2a91d9":{"attributeName":"tButtonx0x8","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-component-4666.cb9a914ee":{"attributeName":"tComponentx0x9","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-unit-d5c0.d98c4fced":{"attributeName":"tTextUnitx0x10","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-input-9d12.adf6860ec":{"attributeName":"tInputx0x11"},"t-rect-0e09.88e90dc6d":{"attributeName":"tRectx0x12","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-6d38.ad5bf1552":{"attributeName":"tRectx0x13","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-row-a749.1ea038111":{"attributeName":"tRowx0x14","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-button-1c70.0a33d64a":{"attributeName":"tButtonx0x14x0","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-button-80b0.5dc5283f4":{"attributeName":"tButtonx0x14x1","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}}};
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
   isVideoPreview: false,
   isShowVideoPreviewBen: false,
   keywordFieldName: "",
   topicMap: {},
   activeTabName: "",
   checkedList: [],
   entityCode: "",
   preDistance: "1",
   dispatchUrl: "http://19.130.161.126:8888/vue3-fs-task-micro/#/dispatchinglayout/special-task-assign?visible=true&paramValue=fszxrw&taskParamType=2&hiddenBackBtn=1",
   topicCode: "",
   pointInfos: {"longitude":"","latitude":""},
   distanceUnit: "",
   pointValue: "",
   keywords: "",
   topicTags: [],
   tagCode: "",
   tagJson: "{}",
   activeTab: {"value":"","name":"","entityCode":""},
   cardLoading: false,
   listLoading: false,
   cardNoData: false,
   distance: 1,
   headerInfo: {"POINT_NAME":"建阳区环保","POINT_TYPE":"","POINT_TYPE_NAME":"-"},
   sourceParmasState: {},
   parentParams: {"POINT_CODE":""},
   defComponentName: "airSyxqPanelAarmComponent",
   componentName: "airSyxqPanelAarmComponent",
   selectedCard: [],
   cardList: [],
   pjResultList: [{"LAND_AREA":3000,"LONGITUDE":28.111425,"CONTACT_PHONE":"10086","COMMUNITY_ADDR":"四川省成都市武侯区长安路69号","POINT_TYPE":"小区","ES_SORT_RESULT":null,"HOUSEHOLD_COUNT":2000,"DISTRICT_NAME":"南平市","91E77393816229E42C10A6FFE07421F7":"小区","PKID":"002","STREET_NAME":"武侯大街","pointName":"希望花园","id":"002","RESPONSIBLE_PERSON":"齐达内","LATITUDE":118.282222,"KEY_REGION_CODE":"350703000000","canPosition":"true","operation":"派发","isCheck":"0"}],
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
            default: {"width":"360px","height":"33px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","min-height":"33px","fontSize":"var(--business-text-size-14)"},
            
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
cStyle:{"wrapper":{"default":{"width":"360px","height":"33px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","min-height":"33px","fontSize":"var(--business-text-size-14)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)"}},"prefix":{"default":{"color":"var(--business-text-avianize)"}}},
hasSearchBtn:false, 
 },
},
tScrollableCardsx0x1: {
defaultStyle: {
            default: {"width":"410px","height":"30px","borderRadius":"8px","padding":"11px 9px 8px","background":"","backgroundColor":"rgba(255, 255, 255, 0)","display":"flex","flexDirection":"row","alignItems":"stretch","justifyContent":"space-between","paddingLeft":"0px","paddingRight":"0px","marginRight":"0px","marginLeft":"8px","paddingTop":"0px","paddingBottom":"0px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"410px","height":"30px","borderRadius":"8px","padding":"11px 9px 8px","background":"","backgroundColor":"rgba(255, 255, 255, 0)","display":"flex","flexDirection":"row","alignItems":"stretch","justifyContent":"space-between","paddingLeft":"0px","paddingRight":"0px","marginRight":"0px","marginLeft":"8px","paddingTop":"0px","paddingBottom":"0px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":""}},"itemWrapper":{"default":{"width":"auto","height":"30px","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"8px","paddingRight":"8px","marginLeft":"0px","marginRight":"0px","paddingTop":"0px","paddingBottom":"0px","display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","cursor":"pointer","color":"var(--business-white)","fontSize":"var(--business-text-size-14)"},"active":{"background":"var(--business-tab-content-active-bg)","borderRadius":"4px","color":"var(--t-white)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-tab-content-active-bg)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit"}},"cardLabel":{"default":{"fontSize":"var(--business-text-size-14)","lineHeight":"14px","display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"leftArrowButton":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"24px","height":"30px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","color":"var(--business-theme)"}},"leftArrow":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"hover":{"color":"var(--business-theme)"}},"rightArrowButton":{"default":{"backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","width":"24px","height":"30px"},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","color":"var(--business-theme)"}},"rightArrow":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"hover":{"borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","color":"var(--business-theme)"}},"container":{"default":{"width":"330px"}}},
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
tComponentx0x2: {
defaultStyle: {
            default: {"width":"450px","height":"899px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"-1px","top":"0px","overflow":"auto","animationName":"","visibility":"hidden"},
            
            },
 default: { 
 
name:"warinTagFilterPanelComponent",
cStyle:{"wrapper":{"default":{"width":"450px","height":"899px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"-1px","top":"0px","overflow":"auto","animationName":"","visibility":"hidden"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/warinTagFilterPanel",
componentName:"warinTagFilterPanelComponent",
pageId:"f2b35f0939d94387955e1be8efdf7adc",
pageCode:"warinTagFilterPanel", 
 },
},
tListCardMultipleChoicex0x3: {
defaultStyle: {
            default: {"width":"422px","height":"58px","overflowY":"auto","display":"grid","grid-template-columns":"repeat(auto-fill,131.33px)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"0px","paddingRight":"0px","marginLeft":"0px","marginRight":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"422px","height":"58px","overflowY":"auto","display":"grid","grid-template-columns":"repeat(auto-fill,131.33px)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"0px","paddingRight":"0px","marginLeft":"0px","marginRight":"0px"}},"cardItem":{"default":{"boxSizing":"border-box","padding":"4px","background":"rgba(20, 112, 204, 0.3)","width":"131.33px","height":"54px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"1px solid rgba(255,255,255,0)","borderTop":"1px solid rgba(255,255,255,0)","borderRight":"1px solid rgba(255,255,255,0)","borderBottom":"1px solid rgba(255,255,255,0)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","display":"block","position":"relative","cursor":"pointer"},"active":{"background":"var(--business-tab-content-active-bg)","width":"131.33px","height":"54px","overflow":"hidden","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(138,210,255,0.8)","borderTop":"1px solid rgba(138,210,255,0.8)","borderRight":"1px solid rgba(138,210,255,0.8)","borderBottom":"1px solid rgba(138,210,255,0.8)","color":""},"hover":{"width":"131.33px","height":"54px","overflow":"hidden","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(138,210,255,0.8)","borderTop":"1px solid rgba(138,210,255,0.8)","borderRight":"1px solid rgba(138,210,255,0.8)","borderBottom":"1px solid rgba(138,210,255,0.8)","color":"var(--business-text-avianize)"}},"cardUnchecked":{"hover":{"background":"var(--business-tab-content-active-bg)","width":"131.33px","height":"54px","overflow":"hidden"},"default":{"backgroundColor":"rgba(20, 112, 204, 0.3)","width":"131.33px","height":"54px","overflow":"hidden"}},"cardItemLabel":{"default":{"height":"14px","lineHeight":"var(--business-text-size-14)","fontSize":"var(--business-text-size-14)","color":"var(--business-text-avianize)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","top":"-27px","position":"relative"},"hover":{"color":"var(--business-text-avianize)"},"active":{"color":"var(--business-text-avianize)"}},"listBody":{"default":{"width":"410px","overflow":"visible","display":"grid","alignItems":"stretch","justifyItems":"stretch","alignContent":"space-around","justifyContent":"space-around","paddingLeft":"0px","paddingRight":"0px","marginLeft":"0px","marginRight":"0px","height":"auto","grid-template-columns":"repeat(auto-fill,131.33px)"}},"cardItemValueContent":{"default":{"height":"24px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-num-size-24)","fontFamily":"DIN-bold","fontWeight":"700","color":"#F9D000"}},"cardItemValueUnit":{"default":{"height":"auto","fontSize":"var(--business-text-size-12)","color":"var(--business-text-avianize)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginLeft":"6px","lineHeight":"21px"}},"cardItemValue":{"default":{"display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","top":"17px","height":"24px","position":"relative"}},"cardItemLabelContent":{"active":{"color":"var(--business-text-avianize)"},"hover":{"color":"var(--business-text-avianize)"},"default":{"whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"cardItemIcon":{"default":{"position":"absolute","right":"4px","width":"16px","height":"16px","backgroundImage":"var(--multiple-card-unchecked)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","bottom":"4px"},"hover":{"backgroundImage":"var(--multiple-card-checked)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""},"active":{"backgroundSize":"contain,contain","-webkit-mask-size":"","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundPosition":"50% 50%,50% 50%","-webkit-mask-position":"","backgroundImage":"var(--multiple-card-checked)","-webkit-mask-image":""}}},
keyWord:"title",
defaultChecked:[],
dataAlias:{"value":"num","label":"title","icon":"","unit":""},
data:[],
unit:"个", 
 },
},
tTablex0x4: {
defaultStyle: {
            default: {"width":"423px","height":"500px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"500",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","type":"state","key":"","stateKey":"canPosition","width":"40PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"},"cellStyle":{"cursor":"pointer"}},"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"var(--business-position)","backgroundImage":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"var(--business-position)"},"cellStyle":{}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"var(--business-position)","backgroundImage":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","filter":"grayscale(1)","backgroundImage":"assets/images/2022-11-01/740fa325bf0b471d8e40134e70fda341.svg"},"cellStyle":{"background":""}}]},{"label":"位置","key":"pointName","align":"left","operationList":[],"stateList":[],"showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"var(--business-text-size-14)","display":"block"},"imageStyle":{"backgroundImage":""},"cellStyle":{"cursor":"default"}},"type":"default","stateKey":"nameTextStatus","infoPosition":"right"},{"label":"操作","key":"operation","stateKey":"WATERQUALITYLEVELNAME","align":"center","operationList":[],"stateList":[],"width":"83PX","style":{"fontStyle":{"fontSize":"var(--business-text-size-12)","width":"PX","height":"PX","borderRadius":"PX","background":"","color":"var(--business-theme)"},"cellStyle":{"cursor":"pointer"}}}],
data:[{"LAND_AREA":3000,"LONGITUDE":28.111425,"CONTACT_PHONE":"10086","COMMUNITY_ADDR":"四川省成都市武侯区长安路69号","POINT_TYPE":"小区","ES_SORT_RESULT":null,"HOUSEHOLD_COUNT":2000,"DISTRICT_NAME":"南平市","91E77393816229E42C10A6FFE07421F7":"小区","PKID":"002","STREET_NAME":"武侯大街","pointName":"希望花园","id":"002","RESPONSIBLE_PERSON":"齐达内","LATITUDE":118.282222,"KEY_REGION_CODE":"350703000000","canPosition":"true","operation":"派发","isCheck":"0"}],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"423px","height":"500px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"70px","height":"32px","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","lineHeight":"32px","textAlign":"right","position":"unset","left":"23px","top":"51px","animationName":""},
            
            },
 default: { 
 
label:"半径：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"32px","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","lineHeight":"32px","textAlign":"right","position":"unset","left":"23px","top":"51px","animationName":""}}}, 
 },
},
tSearchx0x6: {
defaultStyle: {
            default: {"width":"260px","height":"32px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","min-height":"32px","fontSize":"var(--business-text-size-14)","position":"unset","left":"95px","top":"51px","paddingLeft":"10px"},
            
            },
 default: { 
 
type:"number",
inputValue:5,
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入",
clearable:false,
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
cStyle:{"wrapper":{"default":{"width":"260px","height":"32px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","animationName":"","min-height":"32px","fontSize":"var(--business-text-size-14)","position":"unset","left":"95px","top":"51px","paddingLeft":"10px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","fontSize":"var(--business-text-size-14)"}},"prefix":{"default":{"color":"var(--business-text-avianize)","display":"none"}}},
hasSearchBtn:false, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"46px","height":"32px","color":"var(--t-font-color-gy1)","fontSize":"var(--business-text-size-14)","position":"unset","left":"368px","top":"51px","lineHeight":"32px","animationName":""},
            
            },
 default: { 
 
label:"KM",
editable:false,
cStyle:{"wrapper":{"default":{"width":"46px","height":"32px","color":"var(--t-font-color-gy1)","fontSize":"var(--business-text-size-14)","position":"unset","left":"368px","top":"51px","lineHeight":"32px","animationName":""}}}, 
 },
},
tButtonx0x8: {
defaultStyle: {
            default: {"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","color":"var(--t-white)"},
            
            },
 default: { 
 
label:"搜索",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"50px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","color":"var(--t-white)"},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tComponentx0x9: {
defaultStyle: {
            default: {"width":"400px","height":"32px","margin":"0 auto","top":"11px","left":"17px","position":"unset"},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"400px","height":"32px","margin":"0 auto","top":"11px","left":"17px","position":"unset"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent",
pageId:"11294a0cd1654489a15355ed663e73ad_6",
pageCode:"titleFirstBg", 
 },
},
tTextUnitx0x10: {
defaultStyle: {
            default: {"width":"282px","height":"32px","fontSize":"var(--business-text-size-20)","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"32px","position":"unset","left":"52px","top":"11px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"282px","height":"32px","fontSize":"var(--business-text-size-20)","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"32px","position":"unset","left":"52px","top":"11px"}},"unit":{"default":{"fontSize":"var(--business-text-size-20)","fontFamily":"方正综艺","lineHeight":"32px"}},"text":{"default":{"lineHeight":"32px","fontSize":"var(--business-text-size-20)"}}},
content:"周边分析",
unit:"",
showOverflowTooltip:true, 
 },
},
tRectx0x12: {
defaultStyle: {
            default: {"width":"422px","height":"58px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"16px","top":"103px","borderDirection":"all","position":"unset","background":"rgba(20, 112, 204, 0.3)","fillType":"color","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"加载中...",
active:false,
cStyle:{"wrapper":{"default":{"width":"422px","height":"58px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"16px","top":"103px","borderDirection":"all","position":"unset","background":"rgba(20, 112, 204, 0.3)","fillType":"color","animationName":""},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"var(--business-white)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"var(--business-text-size-14)","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x13: {
defaultStyle: {
            default: {"width":"422px","height":"58px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"12px","top":"103px","borderDirection":"all","position":"unset","background":"rgba(20, 112, 204, 0.3)","fillType":"color","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"暂无数据",
active:false,
cStyle:{"wrapper":{"default":{"width":"422px","height":"58px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","left":"12px","top":"103px","borderDirection":"all","position":"unset","background":"rgba(20, 112, 204, 0.3)","fillType":"color","animationName":""},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"var(--business-white)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"var(--business-text-size-14)","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRowx0x14: {
defaultStyle: {
            default: {"width":"114px","height":"40px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"322px","top":"304px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"114px","height":"40px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"322px","top":"304px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tButtonx0x14x0: {
defaultStyle: {
            default: {"width":"91px","height":"32px","background":"var(--business-show-bg30)","border":"auto !important","borderTop":"1px none var(--t-brand8)","borderLeft":"1px none var(--t-brand8)","borderBottom":"1px none var(--t-brand8)","borderRight":"1px none var(--t-brand8)","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","position":"unset","left":"340px","top":"307px","fillType":"color","backgroundImage":"var(--open-video-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"15px 15px","-webkit-mask-size":"","backgroundPosition":"10px 8px","-webkit-mask-position":"","textIndent":"18px","fontSize":"var(--business-text-size-12)","color":"var(--business-white)"},
            
            },
 default: { 
 
label:"视频预览",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"91px","height":"32px","background":"var(--business-show-bg30)","border":"auto !important","borderTop":"1px none var(--t-brand8)","borderLeft":"1px none var(--t-brand8)","borderBottom":"1px none var(--t-brand8)","borderRight":"1px none var(--t-brand8)","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","position":"unset","left":"340px","top":"307px","fillType":"color","backgroundImage":"var(--open-video-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"15px 15px","-webkit-mask-size":"","backgroundPosition":"10px 8px","-webkit-mask-position":"","textIndent":"18px","fontSize":"var(--business-text-size-12)","color":"var(--business-white)"},"hover":{"background":"var(--t-brand8)","border":"auto !important","borderTop":"1px Solid var(--t-brand8)","borderLeft":"1px Solid var(--t-brand8)","borderBottom":"1px Solid var(--t-brand8)","borderRight":"1px Solid var(--t-brand8)","backgroundImage":"var(--open-video-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"15px 15px","-webkit-mask-size":"","backgroundPosition":"10px 8px","-webkit-mask-position":""},"active":{"background":"var(--t-brand8)","border":"auto !important","borderTop":"1px Solid var(--t-brand8)","borderLeft":"1px Solid var(--t-brand8)","borderBottom":"1px Solid var(--t-brand8)","borderRight":"1px Solid var(--t-brand8)","backgroundImage":"var(--open-video-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"15px 15px","-webkit-mask-size":"","backgroundPosition":"10px 8px","-webkit-mask-position":""},"disabled":{"background":"#699EF5","border":"unset !important","borderTop":"1px Solid rgb(0,52,181)","borderLeft":"1px Solid rgb(0,52,181)","borderBottom":"1px Solid rgb(0,52,181)","borderRight":"1px Solid rgb(0,52,181)","backgroundImage":"var(--open-video-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"15px 15px","-webkit-mask-size":"","backgroundPosition":"10px 8px","-webkit-mask-position":""},"focus":{"background":"var(--t-brand8)","border":"auto !important","borderTop":"1px Solid var(--t-brand8)","borderLeft":"1px Solid var(--t-brand8)","borderBottom":"1px Solid var(--t-brand8)","borderRight":"1px Solid var(--t-brand8)","backgroundImage":"var(--open-video-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"15px 15px","-webkit-mask-size":"","backgroundPosition":"10px 8px","-webkit-mask-position":""}},"text":{"default":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","letterSpacing":"0px","lineHeight":"var(--business-text-size-12)","fontSize":"var(--business-text-size-12)","color":"var(--business-white)","background":"unset","backgroundClip":"unset","display":"block !important","width":"100%","height":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},"active":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","lineHeight":"var(--business-text-size-12)","fontSize":"var(--business-text-size-12)","color":"var(--skin-font-color-90)","letterSpacing":"0px","background":"unset","backgroundClip":"unset"},"hover":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","lineHeight":"var(--business-text-size-12)","fontSize":"var(--business-text-size-12)","color":"var(--skin-font-color-90)","letterSpacing":"0px","background":"unset","backgroundClip":"unset"},"disabled":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","lineHeight":"var(--business-text-size-12)","fontSize":"var(--business-text-size-12)","color":"var(--business-white)","letterSpacing":"0px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tButtonx0x14x1: {
defaultStyle: {
            default: {"width":"91px","height":"32px","background":"var(--business-show-bg30)","border":"auto !important","borderTop":"1px none var(--t-brand8)","borderLeft":"1px none var(--t-brand8)","borderBottom":"1px none var(--t-brand8)","borderRight":"1px none var(--t-brand8)","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","fillType":"color","backgroundImage":"var(--close-video-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"15px 15px","-webkit-mask-size":"","backgroundPosition":"10px 8px","-webkit-mask-position":"","textIndent":"18px","fontSize":"var(--business-text-size-12)","color":"var(--business-white)"},
            
            },
 default: { 
 
label:"视频预览",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"91px","height":"32px","background":"var(--business-show-bg30)","border":"auto !important","borderTop":"1px none var(--t-brand8)","borderLeft":"1px none var(--t-brand8)","borderBottom":"1px none var(--t-brand8)","borderRight":"1px none var(--t-brand8)","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","fillType":"color","backgroundImage":"var(--close-video-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"15px 15px","-webkit-mask-size":"","backgroundPosition":"10px 8px","-webkit-mask-position":"","textIndent":"18px","fontSize":"var(--business-text-size-12)","color":"var(--business-white)"},"hover":{"background":"var(--t-brand8)","border":"auto !important","borderTop":"1px Solid var(--t-brand8)","borderLeft":"1px Solid var(--t-brand8)","borderBottom":"1px Solid var(--t-brand8)","borderRight":"1px Solid var(--t-brand8)","backgroundImage":"var(--close-video-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"15px 15px","-webkit-mask-size":"","backgroundPosition":"10px 8px","-webkit-mask-position":""},"active":{"background":"rgb(0,52,181)","border":"auto !important","borderTop":"1px Solid rgb(0,52,181)","borderLeft":"1px Solid rgb(0,52,181)","borderBottom":"1px Solid rgb(0,52,181)","borderRight":"1px Solid rgb(0,52,181)"},"disabled":{"background":"#699EF5","border":"unset !important","borderTop":"1px Solid rgb(0,52,181)","borderLeft":"1px Solid rgb(0,52,181)","borderBottom":"1px Solid rgb(0,52,181)","borderRight":"1px Solid rgb(0,52,181)"}},"text":{"default":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","letterSpacing":"0px","lineHeight":"var(--business-text-size-12)","fontSize":"var(--business-text-size-12)","color":"var(--business-white)","background":"unset","backgroundClip":"unset","display":"block !important","width":"100%","height":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},"active":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","lineHeight":"var(--business-text-size-12)","fontSize":"var(--business-text-size-12)","color":"var(--skin-font-color-90)","letterSpacing":"0px","background":"unset","backgroundClip":"unset"},"hover":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","lineHeight":"var(--business-text-size-12)","fontSize":"var(--business-text-size-12)","color":"var(--skin-font-color-90)","letterSpacing":"0px","background":"unset","backgroundClip":"unset"},"disabled":{"textAlign":"center","fontFamily":"思源","fontWeight":"400","lineHeight":"var(--business-text-size-12)","fontSize":"var(--business-text-size-12)","color":"var(--business-white)","letterSpacing":"0px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
});
const initPage = () => {
// // airSyxqPanelAarmComponent
// // airSyxqPanelNoAarmComponent

// console.log('大气溯源---initPage')

// // 根据此标识，决定展示什么动态组件（已报警、未报警）
// if (state.sourceParmasState.componentSourceParmas.isShowAlarmFlag) {
//   // 设置当前展示的动态组件
//   state.componentName = 'airSyxqPanelAarmComponent';
//   // 设置从当月报警列表返回后展示的动态组件
//   state.defComponentName = 'airSyxqPanelAarmComponent';
// } else {
//   // 设置当前展示的动态组件
//   state.componentName = 'airSyxqPanelNoAarmComponent';
//   // 设置从当月报警列表返回后展示的动态组件
//   state.defComponentName = 'airSyxqPanelNoAarmComponent';
// }

// // console.log('state.componentName', state.componentName, state.defComponentName);


// // http://192.168.0.202:7777/view/view/show/index.vm?screenId=f18e26713e417bdd64d0d04fd25bdf16&alarmTime=2021-03-20%2023&endTime=&COUNT_ID=D08E60290BE515B5E0538500A8C01116
// // &alarmTime=2021-03-20%2023&endTime=&COUNT_ID=D08E60290BE515B5E0538500A8C01116
// state.parentParams = {
//   ...state.sourceParmasState.componentSourceParmas,
//   alarmTime: state.sourceParmasState.componentSourceParmas.alarmTime || '2022-05-07 13',
//   endTime: state.sourceParmasState.componentSourceParmas.endTime || '2022-05-07 16',
//   COUNT_ID: state.sourceParmasState.componentSourceParmas.COUNT_ID || 'e540c637-cde3-11ec-8f3e-d839ee064e9b',
//   POINT_CODE: state.sourceParmasState.componentSourceParmas.POINT_CODE || '51010501002',
// };

// console.log('获取传递过来的参数-溯源容器', state.parentParams);

// const init = async () => {
//   // 获取头部基本信息
//   await getHeaderInfo();
// };

// init();
console.log(global.airGlobalVariables.fireworks.surroundingAnalysis.activePointInfo, 8889)
state.pointInfos = global.airGlobalVariables.fireworks.surroundingAnalysis.activePointInfo;
state.pointValue = `[${state.pointInfos.longitude},${state.pointInfos.latitude}]`;
state.distanceUnit = `${state.distance}km`;
state.preDistance = state.distance;
state.pjResultList = [];
state.topicMap = {
  '视频监控': {
    pointName: 'DEVICE_NAME'
  },
  '高山云台': {
    pointName: 'DEVICE_NAME'
  },
  '小区': {
    pointName: 'POINT_NAME'
  },
}
getCardAndListData();

};
const handleBack = () => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'switchRightContainerName',  // 消息类型名称
    // data: 'fireworksContentComponent'
    data: 'earlyWarningForecastEntryComponent'
    
  }
);


// /* 发送webSocket消息 */
// if (rootData?.sendMessage) {
//   /*rootData?.sendMessage({
//     id: guid(true, 'lego'), // 唯一索引
//     type: "runInteractive", // 消息名称
//     data: [{
//       shareCode: "hiddenTraceDetail",
//       runtimeValue: 'true'
//     }]
//   });*/
//   rootData.rootSocket.emit('message', {
//     room: global.socketRoom, // 房间号
//     type: "showAirTraceDetail", // 消息名称
//     data: [{
//       shareCode: "hiddenSurroundingsAnalysis",
//       runtimeValue: 'true'
//     }],
//   });
// }

// /* 发送Socket消息 */
// if (rootData?.rootSocket) {
//   // 清除溯源
//   rootData.rootSocket.emit('message', {
//     room: global.socketRoom, // 房间号
//     type: "closeWarningTraceDetail", // 消息名称
//     data: null,
//   });
// }

// rootData.rootSocket.emit('message', {
//   room: global.socketRoom,// 房间号
//   type: "runInteractiveChange", // 消息名称
//   data: [
//     {
//       "code": "closePointTrace",
//       "shareCode": "closePointTrace",
//       "defaultValue": "true",
//       "runtimeValue": "true"
//     }, {
//       "code": "hiddenTraceDetail",
//       "shareCode": "hiddenTraceDetail",
//       "defaultValue": "true",
//       "name": "",
//       "runtimeValue": "true"
//     }
//   ]
// });

// // 清除溯源筛选的标签
// rootData.rootEmit(
//   // 固定的消息名称，不能修改
//   'rootData:change',
//   {
//     // 全局变量的键名
//     key: 'waterGlobalVariables.sourceApportionment.selectedTagJson',
//     // 将要修改的全局变量的键值
//     value: '{}'
//   }
// );

};
const handlePanelVisisble = (isFilterPanelShow) => {

// const filterPanelDom = document.getElementById('t-component-d52b.90df00593');
// const panelDom = document.getElementById('t-component-6538.bd4ec5b54');
// // const filterPanelDom = document.getElementById('t-l-c-warinTagFilterPanel');
// // const panelDom = document.getElementById('t-l-c-TraceabilityContent');
// if (!filterPanelDom || !panelDom) {
//   return;
// }

// // 若展示筛选面板
// if (isFilterPanelShow) {
//   panelDom.style.visibility = 'hidden';
//   filterPanelDom.style.visibility = 'visible';
// } else {
//   filterPanelDom.style.visibility = 'hidden';
//   panelDom.style.visibility = 'visible';
// }

};
const gotoMapLocation = (row,column) => {
if (column.label === '定位') {
  // 给地图发消息
  /* 发送webSocket消息 */
  if (rootData?.sendMessage) {
    rootData.rootSocket.emit('message', {
      room: global.socketRoom, // 房间号
      type: "gotoPoint", // 消息名称
      data: {
        longitude: row.LONGITUDE,
        latitude: row.LATITUDE,
      }
    });
  }
} else if (column.label === '操作') {
  // 派发任务
  // dispatchTask(row.id);
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: "gotoPoint", // 消息名称
    data: {
      longitude: row.LONGITUDE,
      latitude: row.LATITUDE,
    }
  });

  if (state.activeTabName === '小区') {
    rootData.rootSocket.emit('message', {
      room: global.socketRoom, // 房间号
      type: "featureClicked", // 消息名称
      data: {
        "layerId": "小区",
        "feature": {
          "type": "Feature",
          "properties": row,
          "geometry": {
            "type": "Point",
            "coordinates": [
              row.LONGITUDE,
              row.LATITUDE
            ]
          }
        }
      }
    });
  } else if (state.activeTabName === '视频监控') {
    rootData.rootSocket.emit('message', {
      room: global.socketRoom, // 房间号
      type: "runInteractiveChange", // 消息名称
      data: [
        {
          "shareCode": "showLegoDialog",
          "runtimeValue": "true"
        },
        {
          "code": "dialogName",
          "shareCode": "dialogName",
          "runtimeValue": "videoSurveillanceComponent"
        },
        {
          "code": "dialogParmas",
          "shareCode": "dialogParmas",
          "runtimeValue": row
        }
      ]
    });
    
  }
}

};
const clickCard = (checkedList,item) => {
console.log(66666)
state.checkedList = checkedList;
const checkedListName = checkedList.map(item => item.title);
state.selectedCard = checkedListName;

// 是否选中
let isSelect = checkedListName.includes(item?.title);

/* 选中 */
if (isSelect) {
  /* 若没有选中项，择默认选中 */
  if (!state.activeTabName) {
    // 选中
    handleSelectTab(true, true, item); // 给地图发消息，更新列表数据
  } else {
    // 更新场景编码
    state.topicCode = item.TAG_TOPIC_CODE;
    // 更新实体编码
    state.entityCode = item.TAG_ENTITY_CODE;
    updateTagJson(true, false, item.title); // 更新tagJson，给地图发消息，不更新列表数据
  }
} else {
  // 若取消的正好是选中的主题
  if (state.activeTabName === item.title) {
    state.tagJson = '{}';
    state.topicCode = '';
    state.activeTabName = '';
    state.entityCode = '';
    // 清空列表
    state.pjResultList = [];
  }
  /* 若有其他选择的主题 */
  if (state.checkedList.length) {

    // 选中项
    let selectItem = item;
    // 默认选中第一个
    selectItem = checkedList[0];
    // // 更新场景名
    // state.activeTab.name = selectItem.title;
    // // 更新场景编码
    // state.activeTab.value = selectItem.TAG_TOPIC_CODE;
    // // 更新实体编码
    // state.activeTab.entityCode = selectItem.TAG_ENTITY_CODE;
    // 是否展示操作列
    /* 若没有选中项，择默认选中 */
    if (!state.activeTabName) {
      // 选中
      handleSelectTab(true, true, selectItem); // 给地图发消息，更新列表数据
    }
  } else {
    state.tagJson = '{}';
    // 更新场景名
    state.activeTabName = '';
    // 更新场景编码
    state.topicCode = '';
    // 更新实体编码
    state.entityCode = '';
    // 清空列表
    state.pjResultList = [];
  }
  sendUpdateParamsMsgToMap(item.title, false);
}


// // 全不选择的时候无需请求接口 直接清空数组
// if (state.selectedCard.length) {
//   // apiRegistry.getpjResultList.request();

//   // 更新地图参数
//   sendUpdateParamsMsgToMap(true);
// } else {
//   state.pjResultList = [];
//   // 更新地图参数
//   sendUpdateParamsMsgToMap(item.title, false);
// }


// 给地图发送消息
// const selectValue = state.selectedCard.filter(item => item !== '全部')
// rootData.rootSocket.emit(
//   'message',  // 固定的消息名称，不能修改
//   {
//     room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
//     type: 'changePointTyeByAirSourceMonitor',  // 消息类型名称
//     data: {                   // 消息内容，对象格式
//       showTypes: selectValue,
//     }
//   }
// );


};
const updateDIstanceUnit = () => {
state.distanceUnit = `${state.distance}km`;
};
const dispatchTask = (id) => {
/**
 * 派发任务
 */

// 记录行ID
localStorage.setItem('pointIds', id);
window.open(state.dispatchUrl);
};
const sendUpdateParamsMsgToMap = (type,visible) => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'updateHireStatus',  // 消息类型名称
    data: {
      type: type || '',
      queryParams: {
        distance: state.distanceUnit,
        queryField: state.keywordFieldName,
        keyword: state.keywords,
        topicCode: state.topicCode,
        locationField: 'location',
        useGisShape: false,
        pointValue: state.pointValue,
        gisType: 'geo_distance',
        REGION_CODE: '',
        tagJson: state.tagJson,
        hasGather: false,
        HasAllTag: true,
        ENTITY_CODE: state.entityCode,
        pageSize: 2000,
        pageNum: 1
      },
      visible,
    }
  }
);
console.log('发送了updateHireStatus消息')
};
const handleDistanceInput = (data) => {
const regex = /^(0|[1-9]\d*)(\.\d+)?$/;
console.log(data, 5556)
if (!regex.test(data)) {
  // state.distance = state.preDistance;
  updateDIstanceUnit();
  return;
}
// state.distance = data;
updateDIstanceUnit();
state.preDistance = data;

// 更新列表数据
apiRegistry.getEnterList.request();
};
const getCardAndListData = () => {
async function getData() {
  // 获取主题数据
  // await apiRegistry.getTopicTree.request();
  // 获取卡片数据
  apiRegistry.getCardData.request();
}

getData();
};
const handleSelectTab = (isUpdateList,isSendMsg,data) => {

// 更新场景名
state.activeTabName = data.title;
// 更新场景编码
state.topicCode = data.TAG_TOPIC_CODE;
// 更新实体编码
state.entityCode = data.TAG_ENTITY_CODE;
state.keywordFieldName = state.topicMap?.[data.title]?.pointName || 'POINT_NAME';
// 是否展示视频监控按钮
state.isShowVideoPreviewBen = data.title === '视频监控';
state.isVideoPreview = false;
updateTagJson(isSendMsg, isUpdateList, data.title); // 参数注意修改
// rootData.rootSocket.emit(
//   'message',  // 固定的消息名称，不能修改
//   {
//     room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
//     type: 'updateFitlerPanelData',  // 消息类型名称
//     data: {                   // 消息内容，对象格式
//       type: 'waterRelation',
//       topicCode: state.activeTab.value,
//       topicName: state.activeTab.name,
//     }
//   }
// );

// 展示列表加载中动画
// state.listLoading = true;

// async function getData() {
//   await apiRegistry.getTopicTree.request();
//   state.tagJson = JSON.stringify({
//     [state.tagCode] :data.title,
//   })
// console.log(22222, state.tagJson)
//   // 获取列表数据
//   apiRegistry.getEnterList.request();
// }

// getData();

};
const updateTagJson = (isSendMsg,isUpdateList,value) => {
async function getData() {
  await apiRegistry.getTopicTree.request();
  state.tagJson = JSON.stringify({
    [state.tagCode] :value,
  });
console.log(22222, isSendMsg, isUpdateList, value, state.tagJson)
  if (isUpdateList) {
    // 获取列表数据
    apiRegistry.getEnterList.request();
  }

  if (isSendMsg) {
    sendUpdateParamsMsgToMap(value, true); // 参数注意修改
  }
}

getData();
};
const clearTabStatus = () => {
  // 清空上次查询结果 - 遍历右侧类型，将visible设为false
  state.checkedList.forEach(item => {
    rootData.rootSocket.emit('message', {
      room: global.socketRoom,
      type: "updateHireStatus",
      data: {
        type: item.title,
        visible: false
      }
    });
  });

  // 还原视频预览状态
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: "updateHireStatusPreviewVideo",
    data: {"visible": false}
  });
  state.isVideoPreview = false;
};
const onchange1765431933578 = (value) => {
// 设置变量值
state.keywords = value;
};
const onclear1765432147018 = () => {
// 事件交互-请求调用接口
apiRegistry.getEnterList.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
// 执行自定义方法
sendUpdateParamsMsgToMap(true);
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "clearGotoPoint", // 消息名称
data: {}, // 发送的数据
});
};
const oncardClick1764930968633_0_0 = (clickItem,checkedList) => {
// 执行自定义方法
clickCard(checkedList,clickItem);
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "clearGotoPoint", // 消息名称
data: {}, // 发送的数据
});
};
const oncellClick1764934474459_0_0 = (row,column,cell,event) => {
// 执行自定义方法
gotoMapLocation(row,column);
};
const onchange1765513123031 = (value) => {
// 设置变量值
state.distance = value;
// 执行自定义方法
updateDIstanceUnit();
// 设置变量值
state.activeTabName = '';
// 事件交互-请求调用接口
apiRegistry.getCardData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
// 执行自定义方法
clearTabStatus();
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "clearGotoPoint", // 消息名称
data: {}, // 发送的数据
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "removeCircle", // 消息名称
data: {}, // 发送的数据
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "addCircle", // 消息名称
data: {"distance":state.distance,"lat":state.pointInfos.latitude,"lon":state.pointInfos.longitude}, // 发送的数据
});
};
const onclick1765431960368 = () => {
// 事件交互-请求调用接口
apiRegistry.getEnterList.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
// 执行自定义方法
sendUpdateParamsMsgToMap(state.activeTabName,true);
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "clearGotoPoint", // 消息名称
data: {}, // 发送的数据
});
};
const onblur1765510184222 = (event) => {
// 执行自定义方法
handleDistanceInput(event);
// 执行自定义方法
sendUpdateParamsMsgToMap(false);
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "clearGotoPoint", // 消息名称
data: {}, // 发送的数据
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "removeCircle", // 消息名称
data: {}, // 发送的数据
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "addCircle", // 消息名称
data: {"distance":state.distance,"lat":state.pointInfos.latitude,"lon":state.pointInfos.longitude}, // 发送的数据
});
};
const oncardClick1766498102194 = (data) => {
// 执行自定义方法
handleSelectTab(true,false,data);
};
const onclick1766577458394 = () => {
// 设置变量值
state.isVideoPreview = true;
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "updateHireStatusPreviewVideo", // 消息名称
data: {"visible":true}, // 发送的数据
});
};
const onclick1766577531220 = () => {
// 设置变量值
state.isVideoPreview = false;
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "updateHireStatusPreviewVideo", // 消息名称
data: {"visible":false}, // 发送的数据
});
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getHeaderInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.businessServiceBaseUrl","params":{"POINT_CODE":"global.warningRightPointCode","interfaceId":"a72ff52d8a2db82b4d36c46b63011669"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.businessServiceBaseUrl,"params":{"POINT_CODE":global.warningRightPointCode,"interfaceId":"a72ff52d8a2db82b4d36c46b63011669"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.businessServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":global.warningRightPointCode,"interfaceId":"a72ff52d8a2db82b4d36c46b63011669"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getHeaderInfo'] = res.data;
                
     // 清空原始数据
state.headerInfo = {
  // 点位名称
  POINT_NAME: '-',
  // 点位类型 / 控制级别
  POINT_TYPE: '',
  // 点位类型 / 控制级别 - 文字
  POINT_TYPE_NAME: '-',
};

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data) {
  state.headerInfo.POINT_NAME = data.data.POINT_NAME || '-';
  state.headerInfo.POINT_TYPE = data.data.POINT_TYPE || '';
  state.headerInfo.POINT_TYPE_NAME = data.data.POINT_TYPE_NAME || '-';
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 清空原始数据
state.headerInfo = {
  // 点位名称
  POINT_NAME: '-',
  // 点位类型 / 控制级别
  POINT_TYPE: '',
  // 点位类型 / 控制级别 - 文字
  POINT_TYPE_NAME: '-',
};
      reject(error);
    });
  });
},
              },
// 接口函数
 getEnterList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"distance\":\"state.distanceUnit\",\"queryField\":\"state.keywordFieldName\",\"keyword\":\"state.keywords\",\"topicCode\":\"state.topicCode\",\"locationField\":\"location\",\"useGisShape\":\"false\",\"pointValue\":\"state.pointValue\",\"gisType\":\"geo_distance\",\"REGION_CODE\":\"\",\"tagJson\":\"state.tagJson\",\"hasGather\":\"false\",\"HasAllTag\":\"true\",\"ENTITY_CODE\":\"state.entityCode\",\"pageSize\":\"2000\",\"pageNum\":\"1\",\"interfaceId\":\"8b5ca6a3009f750b5b1f19a415589682\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"distance":state.distanceUnit,"queryField":state.keywordFieldName,"keyword":state.keywords,"topicCode":state.topicCode,"locationField":"location","useGisShape":"false","pointValue":state.pointValue,"gisType":"geo_distance","REGION_CODE":"","tagJson":state.tagJson,"hasGather":"false","HasAllTag":"true","ENTITY_CODE":state.entityCode,"pageSize":"2000","pageNum":"1","interfaceId":"8b5ca6a3009f750b5b1f19a415589682"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"distance\":\state.distanceUnit\,\"queryField\":\state.keywordFieldName\,\"keyword\":\state.keywords\,\"topicCode\":\state.topicCode\,\"locationField\":\"location\",\"useGisShape\":\"false\",\"pointValue\":\state.pointValue\,\"gisType\":\"geo_distance\",\"REGION_CODE\":\"\",\"tagJson\":\state.tagJson\,\"hasGather\":\"false\",\"HasAllTag\":\"true\",\"ENTITY_CODE\":\state.entityCode\,\"pageSize\":\"2000\",\"pageNum\":\"1\",\"interfaceId\":\"8b5ca6a3009f750b5b1f19a415589682\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getEnterList'] = res.data;
                
     // 清空列表数据
state.pjResultList = [];

const { data } = res;
if (res.status === 200 && Array.isArray(data?.page?.list)) {
  state.pjResultList = data?.page?.list.map((val) => ({
    ...val,
    pointName: val?.[state.topicMap?.[state.activeTabName]?.pointName] || val?.POINT_NAME,
    canPosition: val.LONGITUDE && val.LATITUDE ? 'true' : 'false', // 是否能定位
    operation: '查看', // 操作
    isCheck: '0', // 1已勾选，0未勾选
  }));
console.log(state.pjResultList, 22333)
}
// 结束列表加载中动画
state.listLoading = false;
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 清空列表数据
state.pjResultList = [];
// 重置勾选状态
state.checkedIds = '';
      reject(error);
    });
  });
},
              },
// 接口函数
 getCardData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"DATA_TYPE\":\"烟花爆竹\",\"distance\":\"state.distanceUnit\",\"pointValue\":\"state.pointValue\",\"gisType\":\"geo_distance\",\"useGisShape\":\"\",\"locationField\":\"location\",\"hasGather\":\"true\",\"groupFields\":\"TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE,BUS_TYPE\",\"ENTITY_CODE\":\"tag_gather_yztzhcx_1621838602145\",\"interfaceId\":\"32fbf72522e1a004b67b5d906410ec8d\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"DATA_TYPE":"烟花爆竹","distance":state.distanceUnit,"pointValue":state.pointValue,"gisType":"geo_distance","useGisShape":"","locationField":"location","hasGather":"true","groupFields":"TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE,BUS_TYPE","ENTITY_CODE":"tag_gather_yztzhcx_1621838602145","interfaceId":"32fbf72522e1a004b67b5d906410ec8d"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"DATA_TYPE\":\"烟花爆竹\",\"distance\":\state.distanceUnit\,\"pointValue\":\state.pointValue\,\"gisType\":\"geo_distance\",\"useGisShape\":\"\",\"locationField\":\"location\",\"hasGather\":\"true\",\"groupFields\":\"TAG_ENTITY_CODE,TAG_ENTITY_NAME,TAG_TOPIC_CODE,TAG_TOPIC_NAME,DATA_TYPE,BUS_TYPE\",\"ENTITY_CODE\":\"tag_gather_yztzhcx_1621838602145\",\"interfaceId\":\"32fbf72522e1a004b67b5d906410ec8d\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCardData'] = res.data;
                
     state.cardNoData = false;
console.log(22222)
if (res?.data?.groupResult?.length) {
  state.cardList = res?.data?.groupResult.map(item => {
    return {
      ...item,
      title: item?.BUS_TYPE,
      num: item?.doc_count || '0',
      unit: '家',
      color: 'var(--t-white)',
    }
  });

  // const allNum = state.cardList.map((val) => val.num ? Number(val.num) : 0);

  // const totalCount = allNum.reduce((val1, val2) => val1 + val2);

  // state.cardList.unshift({
  //   title: '全部',
  //   num: totalCount,
  //   unit: '家',
  //   color: 'var(--t-white)',
  // })

  let activeIndex = 0;

  /* 若有筛选项 */
  // if (global.waterGlobalVariables.sourceApportionment.selectedTagJson && global.waterGlobalVariables.sourceApportionment.selectedTagJson !== '{}') {
  //   // 找到企业的选项（只有企业能支持筛选，其他的不行）
  //   const index = state.cardList.findIndex((val) => val.title === '企业');

  //   if (index > -1) {
  //     activeIndex = index;
  //   }
  // }
  state.activeTab.name = state.cardList[activeIndex].title;
  

  // handleListParams(state.airSourceTraceData.bufferLayerPoly?.[0]); 

  clickCard([state.cardList[activeIndex]], state.cardList[activeIndex]);
} else {
  state.cardList = [];
  state.pjResultList = [];
  state.cardNoData = true;
  state.listLoading = false;
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
// 接口函数
 getTopicTree: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"istree":"true","topicCode":"state.topicCode","interfaceId":"982f4b5298e7d6c89796ffca11f9dacb"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"istree":"true","topicCode":state.topicCode,"interfaceId":"982f4b5298e7d6c89796ffca11f9dacb"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"istree":"true","topicCode":state.topicCode,"interfaceId":"982f4b5298e7d6c89796ffca11f9dacb"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTopicTree'] = res.data;
                
     if(res.data.tags?.[0]?.children) {
  let item = res.data.tags?.[0]?.children?.find((val) => val.nodeName === '类型');
  state.tagCode = item?.tagCode;
  console.log(state.tagCode, 8887)
  state.topicTags = item?.range || [];
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
// 监听变量，调取接口
watch(() => [global.warningRightPointCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getHeaderInfo', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-surroundingAnalysis', global.appScaleMode, 'cover');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPage();
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "addCircle", // 消息名称
data: {"distance":state.distance,"lat":state.pointInfos.latitude,"lon":state.pointInfos.longitude}, // 发送的数据
});
onMounted(() => {
setPageScale('t-l-c-surroundingAnalysis', global.appScaleMode, 'cover');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
handlePanelVisisble(false);
});
onBeforeUnmount(() => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "removeCircle", // 消息名称
data: {}, // 发送的数据
});
// 执行自定义方法
sendUpdateParamsMsgToMap(false);
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "clearGotoPoint", // 消息名称
data: {}, // 发送的数据
});
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tSearchx0x0ComputedData = computed(() => _.merge({}, componentState.tSearchx0x0.default, componentState.tSearchx0x0?.[state.screenSize]));

 const tScrollableCardsx0x1ComputedData = computed(() => _.merge({}, componentState.tScrollableCardsx0x1.default, componentState.tScrollableCardsx0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tListCardMultipleChoicex0x3ComputedData = computed(() => _.merge({}, componentState.tListCardMultipleChoicex0x3.default, componentState.tListCardMultipleChoicex0x3?.[state.screenSize]));

 const tTablex0x4ComputedData = computed(() => _.merge({}, componentState.tTablex0x4.default, componentState.tTablex0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tSearchx0x6ComputedData = computed(() => _.merge({}, componentState.tSearchx0x6.default, componentState.tSearchx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tButtonx0x8ComputedData = computed(() => _.merge({}, componentState.tButtonx0x8.default, componentState.tButtonx0x8?.[state.screenSize]));

 const tComponentx0x9ComputedData = computed(() => _.merge({}, componentState.tComponentx0x9.default, componentState.tComponentx0x9?.[state.screenSize]));

 const tTextUnitx0x10ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x10.default, componentState.tTextUnitx0x10?.[state.screenSize]));

 const tRectx0x12ComputedData = computed(() => _.merge({}, componentState.tRectx0x12.default, componentState.tRectx0x12?.[state.screenSize]));

 const tRectx0x13ComputedData = computed(() => _.merge({}, componentState.tRectx0x13.default, componentState.tRectx0x13?.[state.screenSize]));

 const tRowx0x14ComputedData = computed(() => _.merge({}, componentState.tRowx0x14.default, componentState.tRowx0x14?.[state.screenSize]));

 const tButtonx0x14x0ComputedData = computed(() => _.merge({}, componentState.tButtonx0x14x0.default, componentState.tButtonx0x14x0?.[state.screenSize]));

 const tButtonx0x14x1ComputedData = computed(() => _.merge({}, componentState.tButtonx0x14x1.default, componentState.tButtonx0x14x1?.[state.screenSize]));

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
tScrollableCardsx0x1ComputedData,
tComponentx0x2ComputedData,
tListCardMultipleChoicex0x3ComputedData,
tTablex0x4ComputedData,
tTextx0x5ComputedData,
tSearchx0x6ComputedData,
tTextx0x7ComputedData,
tButtonx0x8ComputedData,
tComponentx0x9ComputedData,
tTextUnitx0x10ComputedData,
tRectx0x12ComputedData,
tRectx0x13ComputedData,
tRowx0x14ComputedData,
tButtonx0x14x0ComputedData,
tButtonx0x14x1ComputedData,
onchange1765431933578,
onclear1765432147018,
oncardClick1766498102194,
oncardClick1764930968633_0_0,
oncellClick1764934474459_0_0,
onchange1765513123031,
onclick1765431960368,
onclick1766577531220,
onclick1766577458394,
};
},
}
</script>

<style scoped>
.t-l-c-surroundingAnalysis {
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
background-color: rgba(0, 0, 0, 0);
transform-origin: unset !important;
transform: unset !important;
}
.t-l-c-surroundingAnalysis .surroundingAnalysis-t-search-0-0 {
position: absolute !important;
top: 261px;
left: 10px;
width: 360px;
height: 33px;
pointer-events: auto;
}

.t-l-c-surroundingAnalysis .surroundingAnalysis-t-scrollable-cards-0-1 {
position: absolute !important;
top: 214px;
left: 4px;
width: 410px;
height: 30px;
pointer-events: auto;
}

.t-l-c-surroundingAnalysis .surroundingAnalysis-t-component-0-2 {
position: absolute !important;
top: 0px;
left: -1px;
width: 450px;
height: 899px;
pointer-events: auto;
}

.t-l-c-surroundingAnalysis .surroundingAnalysis-t-list-card-multiple-choice-0-3 {
position: absolute !important;
top: 103px;
left: 16px;
width: 422px;
height: 58px;
pointer-events: auto;
}

.t-l-c-surroundingAnalysis .surroundingAnalysis-t-table-0-4 {
position: absolute !important;
top: 353px;
left: 13px;
width: 423px;
height: 500px;
pointer-events: auto;
}

.t-l-c-surroundingAnalysis .surroundingAnalysis-t-text-0-5 {
position: absolute !important;
top: 51px;
left: 23px;
width: 70px;
height: 32px;
pointer-events: auto;
}

.t-l-c-surroundingAnalysis .surroundingAnalysis-t-search-0-6 {
position: absolute !important;
top: 51px;
left: 95px;
width: 260px;
height: 32px;
pointer-events: auto;
}

.t-l-c-surroundingAnalysis .surroundingAnalysis-t-text-0-7 {
position: absolute !important;
top: 51px;
left: 368px;
width: 46px;
height: 32px;
pointer-events: auto;
}

.t-l-c-surroundingAnalysis .surroundingAnalysis-t-button-0-8 {
position: absolute !important;
top: 261px;
left: 381px;
width: 50px;
height: 32px;
pointer-events: auto;
}

.t-l-c-surroundingAnalysis .surroundingAnalysis-t-component-0-9 {
position: absolute !important;
top: 11px;
left: 17px;
width: 400px;
height: 32px;
pointer-events: auto;
}

.t-l-c-surroundingAnalysis .surroundingAnalysis-t-text-unit-0-10 {
position: absolute !important;
top: 11px;
left: 52px;
width: 282px;
height: 32px;
pointer-events: auto;
}

.t-l-c-surroundingAnalysis .surroundingAnalysis-t-rect-0-12 {
position: absolute !important;
top: 103px;
left: 16px;
width: 422px;
height: 58px;
pointer-events: auto;
}

.t-l-c-surroundingAnalysis .surroundingAnalysis-t-rect-0-13 {
position: absolute !important;
top: 103px;
left: 12px;
width: 422px;
height: 58px;
pointer-events: auto;
}

.t-l-c-surroundingAnalysis .surroundingAnalysis-t-row-0-14 {
position: absolute !important;
top: 304px;
left: 322px;
width: 114px;
height: 40px;
pointer-events: auto;
display: flex;
justify-content: right;
align-items: center;
}

.t-l-c-surroundingAnalysis .surroundingAnalysis-t-button-0-14-0 {
position: unset;
top: 307px;
left: 340px;
width: 91px;
height: 32px;
pointer-events: auto;
}

.t-l-c-surroundingAnalysis .surroundingAnalysis-t-button-0-14-1 {
position: unset;
top: 310px;
left: 468px;
width: 91px;
height: 32px;
pointer-events: auto;
}
</style>
