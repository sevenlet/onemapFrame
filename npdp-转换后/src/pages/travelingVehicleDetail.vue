<template>
  <div id="t-l-c-travelingVehicleDetail" class="t-l-c-travelingVehicleDetail" ><t-rect id="t-rect-0911.f9ec9d352" class="travelingVehicleDetail-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-list-card id="t-list-card-7100.d784c20b6" class="travelingVehicleDetail-t-list-card-0-1"  :data="tListCardx0x1ComputedData.data" :spacing-x="tListCardx0x1ComputedData.spacingX" :col="tListCardx0x1ComputedData.col" :direction="tListCardx0x1ComputedData.direction" :exchange-order="tListCardx0x1ComputedData.exchangeOrder" :unit-break="tListCardx0x1ComputedData.unitBreak" :key-field="tListCardx0x1ComputedData.keyField" :active-key-field="tListCardx0x1ComputedData.activeKeyField" :active="tListCardx0x1ComputedData.active" :c-style="tListCardx0x1ComputedData.cStyle"></t-list-card><t-row v-if="global.isShowWarningTagFilter === false" id="t-row-5443.7e7d1c1a1" class="travelingVehicleDetail-t-row-0-2"  :c-style="tRowx0x2ComputedData.cStyle" :gutter="tRowx0x2ComputedData.gutter" :justify="tRowx0x2ComputedData.justify" :align="tRowx0x2ComputedData.align"><t-text id="t-text-0d1a.4b7df282f" class="travelingVehicleDetail-t-text-0-2-0"  :label="tTextx0x2x0ComputedData.label" :editable="tTextx0x2x0ComputedData.editable" :c-style="tTextx0x2x0ComputedData.cStyle" @click="onclick1734337188119"></t-text><t-text id="t-text-9ff1.92503251d" class="travelingVehicleDetail-t-text-0-2-2"  :label="replaceCssVariables(filterData(global.airGlobalVariables.fireworks.surroundingAnalysis.activePointInfo.station, componentPropBindingMap?.['t-text-9ff1.92503251d']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x2x2ComputedData.editable" :c-style="tTextx0x2x2ComputedData.cStyle"></t-text></t-row><t-table id="t-table-f34b.2426008eb" class="travelingVehicleDetail-t-table-0-3"  :height="tTablex0x3ComputedData.height" :stripe="tTablex0x3ComputedData.stripe" :border="tTablex0x3ComputedData.border" :auto-scroll="tTablex0x3ComputedData.autoScroll" :speed="tTablex0x3ComputedData.speed" :columns="tTablex0x3ComputedData.columns" :data="replaceCssVariables(filterData(state.pjResultList, componentPropBindingMap?.['t-table-f34b.2426008eb']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x3ComputedData.defaultSort" :c-style="tTablex0x3ComputedData.cStyle" @cell-click="oncellClick1764934474459_0_0"></t-table><t-component id="t-component-4666.cb9a914ee" class="travelingVehicleDetail-t-component-0-4"  :name="tComponentx0x4ComputedData.name" :loading="tComponentx0x4ComputedData.loading" :c-style="tComponentx0x4ComputedData.cStyle" :src="tComponentx0x4ComputedData.src" :component-name="tComponentx0x4ComputedData.componentName" :page-id="tComponentx0x4ComputedData.pageId" :page-code="tComponentx0x4ComputedData.pageCode"></t-component><t-text-unit id="t-text-unit-d5c0.d98c4fced" class="travelingVehicleDetail-t-text-unit-0-5"  :c-style="tTextUnitx0x5ComputedData.cStyle" :content="tTextUnitx0x5ComputedData.content" :unit="tTextUnitx0x5ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x5ComputedData.showOverflowTooltip"></t-text-unit><t-date-picker id="t-date-picker-501f.69568c302" class="travelingVehicleDetail-t-date-picker-0-6"  :placeholder="tDatePickerx0x6ComputedData.placeholder" :start-placeholder="tDatePickerx0x6ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x6ComputedData.endPlaceholder" :type="tDatePickerx0x6ComputedData.type" :clearable="tDatePickerx0x6ComputedData.clearable" :range-separator="tDatePickerx0x6ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.dateValue, componentPropBindingMap?.['t-date-picker-501f.69568c302']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x6ComputedData.separator" :readonly="tDatePickerx0x6ComputedData.readonly" :editable="tDatePickerx0x6ComputedData.editable" :c-style="tDatePickerx0x6ComputedData.cStyle" :is-disabled-front="tDatePickerx0x6ComputedData.isDisabledFront" :disabled-date="tDatePickerx0x6ComputedData.disabledDate"></t-date-picker></div>
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
import { TComponent, TDatePicker, TListCard, TRect, TRow, TTable, TText, TTextUnit } from '@ths/design';

export default {
  components: {
    TComponent,
    TDatePicker,
    TListCard,
    TRect,
    TRow,
    TTable,
    TText,
    TTextUnit,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-0911.f9ec9d352":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-7100.d784c20b6":{"attributeName":"tListCardx0x1","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-row-5443.7e7d1c1a1":{"attributeName":"tRowx0x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-0d1a.4b7df282f":{"attributeName":"tTextx0x2x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-3de8.a011803c9":{"attributeName":"tTextx0x2x1"},"t-text-9ff1.92503251d":{"attributeName":"tTextx0x2x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-1aa2.670c35704":{"attributeName":"tTextx0x2x3"},"t-table-f34b.2426008eb":{"attributeName":"tTablex0x3","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-component-4666.cb9a914ee":{"attributeName":"tComponentx0x4","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-unit-d5c0.d98c4fced":{"attributeName":"tTextUnitx0x5","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-date-picker-501f.69568c302":{"attributeName":"tDatePickerx0x6","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}}};
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
   endTime: "",
   startTime: "",
   dateValue: "",
   carNumber: "",
   cardList: [],
   pjResultList: [{"LAND_AREA":3000,"LONGITUDE":28.111425,"CONTACT_PHONE":"10086","COMMUNITY_ADDR":"四川省成都市武侯区长安路69号","POINT_TYPE":"小区","ES_SORT_RESULT":null,"HOUSEHOLD_COUNT":2000,"DISTRICT_NAME":"南平市","91E77393816229E42C10A6FFE07421F7":"小区","PKID":"002","STREET_NAME":"武侯大街","POINT_NAME":"希望花园","id":"002","RESPONSIBLE_PERSON":"齐达内","LATITUDE":118.282222,"KEY_REGION_CODE":"350703000000","canPosition":"true","operation":"派发","isCheck":"0"}],
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
            default: {"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"56px","left":"1px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"56px","left":"1px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tListCardx0x1: {
defaultStyle: {
            default: {"width":"421px","height":"132px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px","position":"unset","left":"14px","top":"158px"},
            
            },
 default: { 
 
data:[{"burning_status":"0","burning_status_name":"走航任务","total":"111111111111122222","color":"var(--t-water-1)","unit":"个"},{"burning_status":"0","burning_status_name":"走航距离","total":"1","color":"var(--t-water-1)","unit":"米"}],
spacingX:8,
col:4,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"burning_status_name","num":"total","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"2",
cStyle:{"wrapper":{"default":{"width":"421px","height":"132px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px","position":"unset","left":"14px","top":"158px"}},"itemWrapper":{"default":{"height":"105px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"var(--business-show-bg30)","lineHeight":"18px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"0px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","justifyContent":"center","alignItems":"center","flexDirection":"row","display":"flex","gap":"11px"},"active":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"num":{"default":{"fontSize":"24px","fontWeight":"700","marginRight":"2px","lineHeight":"20px","textAlign":"left","fontFamily":"DIN-bold","color":"var(--t-aqi-green)"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-unit-icon)"}},"title":{"default":{"fontSize":"14px","color":"var(--t-white)","marginTop":"0"}},"icon":{"default":{"width":"32px","height":"32px","left":"16px","marginLeft":"17px"}},"numBox":{"default":{"marginTop":"8px"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","width":"50%"}},"rightContent":{"default":{"alignItems":"center","marginLeft":"8px","justifyContent":"center"}},"innerWrapper":{"default":{"justifyContent":"center","alignItems":"center","display":"flex","gap":"0px"}}}, 
 },
},
tRowx0x2: {
defaultStyle: {
            default: {"width":"413px","height":"54px","top":"1px","left":"16px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"413px","height":"54px","top":"1px","left":"16px","position":"unset"}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x2x0: {
defaultStyle: {
            default: {"width":"43px","height":"18px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"19px","left":"14px","backgroundColor":"rgba(255, 255, 255, 1)","position":"unset","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"43px","height":"18px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"19px","left":"14px","backgroundColor":"rgba(255, 255, 255, 1)","position":"unset","cursor":"pointer","animationName":""},"hover":{"backgroundColor":"var(--business-theme)"}}}, 
 },
},
tTextx0x2x2: {
defaultStyle: {
            default: {"width":"auto","height":"23px","color":"rgba(255, 255, 255, 0.9)","fontSize":"18px","borderLeft":"1px solid rgba(255,255,255,1)","lineHeight":"24px","paddingLeft":"20px","top":"18px","left":"73px","position":"unset","animationName":"","marginLeft":"20px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"23px","color":"rgba(255, 255, 255, 0.9)","fontSize":"18px","borderLeft":"1px solid rgba(255,255,255,1)","lineHeight":"24px","paddingLeft":"20px","top":"18px","left":"73px","position":"unset","animationName":"","marginLeft":"20px"}}}, 
 },
},
tTablex0x3: {
defaultStyle: {
            default: {"width":"423px","height":"593px","position":"unset","left":"15px","top":"292px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"580",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","type":"state","key":"","stateKey":"canPosition","width":"40PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"},"cellStyle":{"cursor":"pointer"}},"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"var(--business-position)","backgroundImage":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"var(--business-position)"},"cellStyle":{"background":"rgba(0, 0, 0, 0)"}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"var(--business-position)","backgroundImage":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"assets/images/2022-11-01/740fa325bf0b471d8e40134e70fda341.svg"},"cellStyle":{"background":""}}]},{"label":"位置","key":"POINT_NAME","align":"left","operationList":[],"stateList":[],"showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"14PX"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"nameTextStatus","infoPosition":"right"},{"label":"类型","key":"POINT_TYPE","align":"center","operationList":[],"stateList":[],"width":"100PX","showOverflowTooltip":true,"style":{"fontStyle":{"fontSize":"14PX"},"cellStyle":{"cursor":"pointer"}}},{"label":"操作","key":"operation","stateKey":"WATERQUALITYLEVELNAME","align":"center","operationList":[],"stateList":[],"width":"83PX","style":{"fontStyle":{"fontSize":"12PX","width":"PX","height":"PX","borderRadius":"PX","background":"","color":"var(--business-theme)"},"cellStyle":{"cursor":"pointer"}}}],
data:[{"LAND_AREA":3000,"LONGITUDE":28.111425,"CONTACT_PHONE":"10086","COMMUNITY_ADDR":"四川省成都市武侯区长安路69号","POINT_TYPE":"小区","ES_SORT_RESULT":null,"HOUSEHOLD_COUNT":2000,"DISTRICT_NAME":"南平市","91E77393816229E42C10A6FFE07421F7":"小区","PKID":"002","STREET_NAME":"武侯大街","POINT_NAME":"希望花园","id":"002","RESPONSIBLE_PERSON":"齐达内","LATITUDE":118.282222,"KEY_REGION_CODE":"350703000000","canPosition":"true","operation":"派发","isCheck":"0"}],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"423px","height":"593px","position":"unset","left":"15px","top":"292px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"0px solid rgba(26,27,31,1)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","marginRight":"0px","backgroundColor":"","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"rgba(255, 255, 255, 1)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","color":"var(--t-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"highlightRow":{"default":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
tComponentx0x4: {
defaultStyle: {
            default: {"width":"400px","height":"32px","margin":"0 auto","top":"80px","left":"21px","position":"unset"},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"400px","height":"32px","margin":"0 auto","top":"80px","left":"21px","position":"unset"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent",
pageId:"11294a0cd1654489a15355ed663e73ad_6",
pageCode:"titleFirstBg", 
 },
},
tTextUnitx0x5: {
defaultStyle: {
            default: {"width":"282px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","position":"unset","left":"56px","top":"87px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"282px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","position":"unset","left":"56px","top":"87px"}},"unit":{"default":{"fontSize":"17px","fontFamily":"方正综艺","lineHeight":"20px"}},"text":{"default":{"lineHeight":"20px","fontSize":"17px"}}},
content:"走航观测",
unit:"",
showOverflowTooltip:true, 
 },
},
tDatePickerx0x6: {
defaultStyle: {
            default: {"width":"409px","height":"32px","position":"unset","left":"21px","top":"126px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerangehour",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"409px","height":"32px","position":"unset","left":"21px","top":"126px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
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
async function getData() {
  // 获取主题数据
  await apiRegistry.getTopicTree.request();
  // 获取卡片数据
  apiRegistry.getCardData.request();
}

getData();

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
const handleClickCard = (item,checkedList) => {
const checkedListName = checkedList.map(item => item.M_TYPE)
// 点击全部
if (item.M_TYPE === '全部') {
  // 选中“全部”，则其他项全部选中
  if (checkedListName.includes('全部')) {
    state.selectedCard = state.cardList.map(item => item.M_TYPE)
  } else {
    // 取消，则全部取消
    state.selectedCard = []
  }
} else {

  const allItemIndex = checkedListName.findIndex((n) => n === '全部');
  if (allItemIndex >= 0) {
    checkedListName.splice(allItemIndex, 1);
  }
  console.log(checkedListName);

  if (checkedListName.length === state.cardList.length - 1) {
    checkedListName.push('全部');
  }
  state.selectedCard = checkedListName;
}

const tagsValue = [];
state.selectedCard.forEach((card) => {
  const selectedTag = state.topicTags.find((tag) => tag.value === card);
  if (selectedTag) {
    tagsValue.push(selectedTag.value);
  }
})

state.tagJson = JSON.stringify({
  [state.tagCode]: tagsValue.join('$'),
})

// 全不选择的时候无需请求接口 直接清空数组
if (state.selectedCard.length) {
  apiRegistry.getListData.request();
} else {
  state.listData = [];
}

// 给地图发送消息
const selectValue = state.selectedCard.filter(item => item !== '全部')
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'changePointTyeByAirSourceMonitor',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      showTypes: selectValue,
    }
  }
);



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
  dispatchTask(row.PKID);
}

};
const clickCard = (checkedList,item) => {
console.log(66666)

const checkedListName = checkedList.map(item => item.title)
// 点击全部
if (item.title === '全部') {
  // 选中“全部”，则其他项全部选中
  if (checkedListName.includes('全部')) {
    state.selectedCard = state.cardList.map(item => item.title)
  } else {
    // 取消，则全部取消
    state.selectedCard = []
  }
} else {

  const allItemIndex = checkedListName.findIndex((n) => n === '全部');
  if (allItemIndex >= 0) {
    checkedListName.splice(allItemIndex, 1);
  }
  console.log(checkedListName);

  if (checkedListName.length === state.cardList.length - 1) {
    checkedListName.push('全部');
  }
  state.selectedCard = checkedListName;
}

const tagsValue = [];
if (checkedListName.includes('全部')) {
  state.tagJson = '{}';
} else {
  state.selectedCard.forEach((cardName) => {
    const selectedTag = state.topicTags.find((tag) => tag.value === cardName);
    if (selectedTag) {
      tagsValue.push(selectedTag.value);
    }
  })

  state.tagJson = JSON.stringify({
    [state.tagCode]: tagsValue.join('$'),
  })
}


// 全不选择的时候无需请求接口 直接清空数组
if (state.selectedCard.length) {
  apiRegistry.getEnterList.request();
  // 更新地图参数
  sendUpdateParamsMsgToMap(true);
} else {
  state.pjResultList = [];
  // 更新地图参数
  sendUpdateParamsMsgToMap(false);
}


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
const sendUpdateParamsMsgToMap = (visible) => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'updateHireStatus',  // 消息类型名称
    data: {
      queryParams: {
        distance: state.distanceUnit,
        queryField: 'POINT_NAME',
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
        ENTITY_CODE: 'tag_zbcx_1765365678180',
        pageSize: 2000,
        pageNum: 1
      },
      visible,
    }
  }
);
};
const onclick1734337188119 = () => {
// 执行自定义方法
handleBack();
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closeAirSourceTrace", // 消息名称
data: {}, // 发送的数据
});
};
const oncellClick1764934474459_0_0 = (row,column,cell,event) => {
// 执行自定义方法
gotoMapLocation(row,column);
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.businessServiceBaseUrl","params":{"car_number":"","interfaceId":"f25a1bf75d91a0c0d64678ade1539b39"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.businessServiceBaseUrl,"params":{"car_number":"","interfaceId":"f25a1bf75d91a0c0d64678ade1539b39"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.businessServiceBaseUrl-global.serviceBasePath',  {"car_number":"","interfaceId":"f25a1bf75d91a0c0d64678ade1539b39"});
                   
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
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"distance\":\"state.distanceUnit\",\"queryField\":\"POINT_NAME\",\"keyword\":\"state.keywords\",\"topicCode\":\"state.topicCode\",\"locationField\":\"location\",\"useGisShape\":\"false\",\"pointValue\":\"state.pointValue\",\"gisType\":\"geo_distance\",\"REGION_CODE\":\"\",\"tagJson\":\"state.tagJson\",\"hasGather\":\"false\",\"HasAllTag\":\"true\",\"ENTITY_CODE\":\"tag_zbcx_1765365678180\",\"pageSize\":\"2000\",\"pageNum\":\"1\",\"interfaceId\":\"8b5ca6a3009f750b5b1f19a415589682\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"distance":state.distanceUnit,"queryField":"POINT_NAME","keyword":state.keywords,"topicCode":state.topicCode,"locationField":"location","useGisShape":"false","pointValue":state.pointValue,"gisType":"geo_distance","REGION_CODE":"","tagJson":state.tagJson,"hasGather":"false","HasAllTag":"true","ENTITY_CODE":"tag_zbcx_1765365678180","pageSize":"2000","pageNum":"1","interfaceId":"8b5ca6a3009f750b5b1f19a415589682"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"distance\":\state.distanceUnit\,\"queryField\":\"POINT_NAME\",\"keyword\":\state.keywords\,\"topicCode\":\state.topicCode\,\"locationField\":\"location\",\"useGisShape\":\"false\",\"pointValue\":\state.pointValue\,\"gisType\":\"geo_distance\",\"REGION_CODE\":\"\",\"tagJson\":\state.tagJson\,\"hasGather\":\"false\",\"HasAllTag\":\"true\",\"ENTITY_CODE\":\"tag_zbcx_1765365678180\",\"pageSize\":\"2000\",\"pageNum\":\"1\",\"interfaceId\":\"8b5ca6a3009f750b5b1f19a415589682\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getEnterList'] = res.data;
                
     // 清空列表数据
state.pjResultList = [];

const { data } = res;
if (res.status === 200 && Array.isArray(data?.page?.list)) {
  state.pjResultList = data?.page?.list.map((val) => ({
    ...val,
    canPosition: val.LONGITUDE && val.LATITUDE ? 'true' : 'false', // 是否能定位
    operation: '派发', // 操作
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
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"pointValue\":\"\",\"gisType\":\"\",\"useGisShape\":\"\",\"locationField\":\"location\",\"hasGather\":\"\",\"REGION_CODE\":\"global.regionaQuery.regionCode\",\"groupFields\":\"POINT_TYPE\",\"ENTITY_CODE\":\"tag_zbcx_1765365678180\",\"interfaceId\":\"32fbf72522e1a004b67b5d906410ec8d\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"pointValue":"","gisType":"","useGisShape":"","locationField":"location","hasGather":"","REGION_CODE":global.regionaQuery.regionCode,"groupFields":"POINT_TYPE","ENTITY_CODE":"tag_zbcx_1765365678180","interfaceId":"32fbf72522e1a004b67b5d906410ec8d"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"pointValue\":\"\",\"gisType\":\"\",\"useGisShape\":\"\",\"locationField\":\"location\",\"hasGather\":\"\",\"REGION_CODE\":\global.regionaQuery.regionCode\,\"groupFields\":\"POINT_TYPE\",\"ENTITY_CODE\":\"tag_zbcx_1765365678180\",\"interfaceId\":\"32fbf72522e1a004b67b5d906410ec8d\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCardData'] = res.data;
                
     state.cardNoData = false;
if (res?.data?.groupResult?.length) {
  state.cardList = res?.data?.groupResult.map(item => {
    return {
      ...item,
      title: item?.POINT_TYPE,
      num: item?.doc_count || '0',
      unit: '家',
      color: 'var(--t-white)',
    }
  });

  const allNum = state.cardList.map((val) => val.num ? Number(val.num) : 0);

  const totalCount = allNum.reduce((val1, val2) => val1 + val2);

  state.cardList.unshift({
    title: '全部',
    num: totalCount,
    unit: '家',
    color: 'var(--t-white)',
  })

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
                
       console.log(res.data.tags, 8887)
if(res.data.tags?.[0]?.children) {
  let item = res.data.tags?.[0]?.children?.find((val) => val.nodeName === '周边类型');
  state.tagCode = item?.tagCode;
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
// 接口函数
 getLatestTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"car_number":"state.carNumber","region_path":"global.regionaQuery.regionCode","interfaceId":"f25a1bf75d91a0c0d64678ade1539b39"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"car_number":state.carNumber,"region_path":global.regionaQuery.regionCode,"interfaceId":"f25a1bf75d91a0c0d64678ade1539b39"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"car_number":state.carNumber,"region_path":global.regionaQuery.regionCode,"interfaceId":"f25a1bf75d91a0c0d64678ade1539b39"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.startTime = data.max_start_time
  state.endTime = data.max_end_time
  state.dateValue = [state.startTime,state.endTime]
}else{
   state.dateValue = []
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
watch(() => [""], async () => {
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
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getLatestTime', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-travelingVehicleDetail', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-travelingVehicleDetail', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tListCardx0x1ComputedData = computed(() => _.merge({}, componentState.tListCardx0x1.default, componentState.tListCardx0x1?.[state.screenSize]));

 const tRowx0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x2.default, componentState.tRowx0x2?.[state.screenSize]));

 const tTextx0x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x2x0.default, componentState.tTextx0x2x0?.[state.screenSize]));

 const tTextx0x2x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2x2.default, componentState.tTextx0x2x2?.[state.screenSize]));

 const tTablex0x3ComputedData = computed(() => _.merge({}, componentState.tTablex0x3.default, componentState.tTablex0x3?.[state.screenSize]));

 const tComponentx0x4ComputedData = computed(() => _.merge({}, componentState.tComponentx0x4.default, componentState.tComponentx0x4?.[state.screenSize]));

 const tTextUnitx0x5ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x5.default, componentState.tTextUnitx0x5?.[state.screenSize]));

 const tDatePickerx0x6ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x6.default, componentState.tDatePickerx0x6?.[state.screenSize]));

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
tListCardx0x1ComputedData,
tRowx0x2ComputedData,
tTextx0x2x0ComputedData,
tTextx0x2x2ComputedData,
tTablex0x3ComputedData,
tComponentx0x4ComputedData,
tTextUnitx0x5ComputedData,
tDatePickerx0x6ComputedData,
onclick1734337188119,
oncellClick1764934474459_0_0,
};
},
}
</script>

<style scoped>
.t-l-c-travelingVehicleDetail {
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
}
.t-l-c-travelingVehicleDetail .travelingVehicleDetail-t-rect-0-0 {
position: absolute !important;
top: 56px;
left: 1px;
width: 450px;
height: 1px;
pointer-events: auto;
}

.t-l-c-travelingVehicleDetail .travelingVehicleDetail-t-list-card-0-1 {
position: absolute !important;
top: 158px;
left: 14px;
width: 421px;
height: 132px;
pointer-events: auto;
}

.t-l-c-travelingVehicleDetail .travelingVehicleDetail-t-row-0-2 {
position: absolute !important;
top: 1px;
left: 16px;
width: 413px;
height: 54px;
pointer-events: auto;
}

.t-l-c-travelingVehicleDetail .travelingVehicleDetail-t-text-0-2-0 {
position: unset;
top: 19px;
left: 14px;
width: 43px;
height: 18px;
pointer-events: auto;
}

.t-l-c-travelingVehicleDetail .travelingVehicleDetail-t-text-0-2-2 {
position: unset;
top: 18px;
left: 73px;
width: auto;
height: 23px;
pointer-events: auto;
}

.t-l-c-travelingVehicleDetail .travelingVehicleDetail-t-table-0-3 {
position: absolute !important;
top: 292px;
left: 15px;
width: 423px;
height: 593px;
pointer-events: auto;
}

.t-l-c-travelingVehicleDetail .travelingVehicleDetail-t-component-0-4 {
position: absolute !important;
top: 80px;
left: 21px;
width: 400px;
height: 32px;
pointer-events: auto;
}

.t-l-c-travelingVehicleDetail .travelingVehicleDetail-t-text-unit-0-5 {
position: absolute !important;
top: 87px;
left: 56px;
width: 282px;
height: 20px;
pointer-events: auto;
}

.t-l-c-travelingVehicleDetail .travelingVehicleDetail-t-date-picker-0-6 {
position: absolute !important;
top: 126px;
left: 21px;
width: 409px;
height: 32px;
pointer-events: auto;
}
</style>
