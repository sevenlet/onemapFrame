<template>
  <div id="t-l-c-airSyxqPanelAarm" class="t-l-c-airSyxqPanelAarm" ><t-list-card v-if="state.activeTab.value !== ''" id="t-list-card-8425.3402cf033" class="airSyxqPanelAarm-t-list-card-0-0"  :data="state.sceneList" :spacing-x="tListCardx0x0ComputedData.spacingX" :col="tListCardx0x0ComputedData.col" :direction="tListCardx0x0ComputedData.direction" :exchange-order="tListCardx0x0ComputedData.exchangeOrder" :unit-break="tListCardx0x0ComputedData.unitBreak" :key-field="tListCardx0x0ComputedData.keyField" :active-key-field="tListCardx0x0ComputedData.activeKeyField" :active="state.activeTab.name" :c-style="tListCardx0x0ComputedData.cStyle" @card-click="oncardClick1735298134011_0_0"></t-list-card><t-image-base id="t-image-base-810c.4e27a68bc" class="airSyxqPanelAarm-t-image-base-0-1"  :src="tImageBasex0x1ComputedData.src" :fit="tImageBasex0x1ComputedData.fit" :c-style="tImageBasex0x1ComputedData.cStyle"></t-image-base><t-table v-if="state.isShowOperateColumn === false" id="t-table-d3a1.f04906945" class="airSyxqPanelAarm-t-table-0-2"  :height="tTablex0x2ComputedData.height" :stripe="tTablex0x2ComputedData.stripe" :border="tTablex0x2ComputedData.border" :auto-scroll="tTablex0x2ComputedData.autoScroll" :speed="tTablex0x2ComputedData.speed" :columns="tTablex0x2ComputedData.columns" :data="state.enterList" :default-sort="tTablex0x2ComputedData.defaultSort" :c-style="tTablex0x2ComputedData.cStyle" @cell-click="oncellClick1735298134012_0_0"></t-table><t-rect id="t-rect-e742.c2b33ed93" class="airSyxqPanelAarm-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle"></t-rect><t-table v-if="state.isShowOperateColumn === true" id="t-table-ffa2.75504d35d" class="airSyxqPanelAarm-t-table-0-4"  :height="tTablex0x4ComputedData.height" :stripe="tTablex0x4ComputedData.stripe" :border="tTablex0x4ComputedData.border" :auto-scroll="tTablex0x4ComputedData.autoScroll" :speed="tTablex0x4ComputedData.speed" :columns="tTablex0x4ComputedData.columns" :data="state.enterList" :default-sort="tTablex0x4ComputedData.defaultSort" :c-style="tTablex0x4ComputedData.cStyle" @cell-click="oncellClick1735298134012_0_0"></t-table><t-list-card id="t-list-card-950c.39b4f7ff2" class="airSyxqPanelAarm-t-list-card-0-5"  :data="state.alarmInfo" :spacing-x="tListCardx0x5ComputedData.spacingX" :col="tListCardx0x5ComputedData.col" :direction="tListCardx0x5ComputedData.direction" :exchange-order="tListCardx0x5ComputedData.exchangeOrder" :unit-break="tListCardx0x5ComputedData.unitBreak" :key-field="tListCardx0x5ComputedData.keyField" :active-key-field="tListCardx0x5ComputedData.activeKeyField" :active="tListCardx0x5ComputedData.active" :c-style="tListCardx0x5ComputedData.cStyle"></t-list-card><t-component id="t-component-bc2d.79fc84f18" class="airSyxqPanelAarm-t-component-0-6"  :name="tComponentx0x6ComputedData.name" :c-style="tComponentx0x6ComputedData.cStyle" :src="tComponentx0x6ComputedData.src" :component-name="tComponentx0x6ComputedData.componentName"></t-component><t-component id="t-component-42fa.4eb58355a" class="airSyxqPanelAarm-t-component-0-7"  :name="tComponentx0x7ComputedData.name" :c-style="tComponentx0x7ComputedData.cStyle" :src="tComponentx0x7ComputedData.src" :component-name="tComponentx0x7ComputedData.componentName"></t-component><t-text id="t-text-0a90.e9827e0dc" class="airSyxqPanelAarm-t-text-0-8"  :label="tTextx0x8ComputedData.label" :editable="tTextx0x8ComputedData.editable" :c-style="tTextx0x8ComputedData.cStyle"></t-text><t-text id="t-text-24a3.12ba14369" class="airSyxqPanelAarm-t-text-0-9"  :label="tTextx0x9ComputedData.label" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle"></t-text><t-text id="t-text-0fd2.4aeeba7" class="airSyxqPanelAarm-t-text-0-10"  :label="state.alarmMonthTotal" :editable="tTextx0x10ComputedData.editable" :c-style="tTextx0x10ComputedData.cStyle" @click="onclick1734415835534"></t-text><t-rect v-if="state.checkedIds !== ''" id="t-rect-b2cf.7a55c10f3" class="airSyxqPanelAarm-t-rect-0-11"  :tip="tRectx0x11ComputedData.tip" :label="tRectx0x11ComputedData.label" :active="tRectx0x11ComputedData.active" :c-style="tRectx0x11ComputedData.cStyle" @click="onclick1735298134013_0_0"></t-rect><t-rect v-if="state.checkedIds === ''" id="t-rect-678d.c4971caf6" class="airSyxqPanelAarm-t-rect-0-12"  :tip="tRectx0x12ComputedData.tip" :label="tRectx0x12ComputedData.label" :active="tRectx0x12ComputedData.active" :c-style="tRectx0x12ComputedData.cStyle"></t-rect><t-text id="t-text-4f69.afbbda10e" class="airSyxqPanelAarm-t-text-0-13"  :label="tTextx0x13ComputedData.label" :editable="tTextx0x13ComputedData.editable" :c-style="tTextx0x13ComputedData.cStyle"></t-text><t-text id="t-text-5853.c6c5f8b03" class="airSyxqPanelAarm-t-text-0-14"  :label="tTextx0x14ComputedData.label" :editable="tTextx0x14ComputedData.editable" :c-style="tTextx0x14ComputedData.cStyle"></t-text><t-text id="t-text-97fb.b70183abe" class="airSyxqPanelAarm-t-text-0-15"  :label="tTextx0x15ComputedData.label" :editable="tTextx0x15ComputedData.editable" :c-style="tTextx0x15ComputedData.cStyle"></t-text><t-text id="t-text-e07b.e05fa7ecd" class="airSyxqPanelAarm-t-text-0-16"  :label="tTextx0x16ComputedData.label" :editable="tTextx0x16ComputedData.editable" :c-style="tTextx0x16ComputedData.cStyle"></t-text><t-radio id="t-radio-2fb7.1ab06eec2" class="airSyxqPanelAarm-t-radio-0-17"  :options="tRadiox0x17ComputedData.options" :active="state.selectedParams.direction" :alias="tRadiox0x17ComputedData.alias" :disabled="tRadiox0x17ComputedData.disabled" :border="tRadiox0x17ComputedData.border" :size="tRadiox0x17ComputedData.size" :is-use-button="tRadiox0x17ComputedData.isUseButton" :c-style="tRadiox0x17ComputedData.cStyle" @change="onchange1740742323983_0_0"></t-radio><t-radio id="t-radio-9692.3eb2bd476" class="airSyxqPanelAarm-t-radio-0-18"  :options="tRadiox0x18ComputedData.options" :active="state.selectedParams.buffer" :alias="tRadiox0x18ComputedData.alias" :disabled="tRadiox0x18ComputedData.disabled" :border="tRadiox0x18ComputedData.border" :size="tRadiox0x18ComputedData.size" :is-use-button="tRadiox0x18ComputedData.isUseButton" :c-style="tRadiox0x18ComputedData.cStyle" @change="onchange1740742323983_0_0"></t-radio><t-checkbox id="t-checkbox-62de.47b7f67e" class="airSyxqPanelAarm-t-checkbox-0-19"  :data="tCheckboxx0x19ComputedData.data" :active="state.selectedParams.altitude" :data-alias="tCheckboxx0x19ComputedData.dataAlias" :border="tCheckboxx0x19ComputedData.border" :use-button="tCheckboxx0x19ComputedData.useButton" :c-style="tCheckboxx0x19ComputedData.cStyle" @change="onchange1740742323983_0_0"></t-checkbox><t-rect id="t-rect-341e.5980a4b57" class="airSyxqPanelAarm-t-rect-0-20"  :tip="tRectx0x20ComputedData.tip" :label="tRectx0x20ComputedData.label" :active="tRectx0x20ComputedData.active" :c-style="tRectx0x20ComputedData.cStyle" @click="onclick1740742323984_0_0"></t-rect><t-search id="t-search-f6a1.cd40c3f03" class="airSyxqPanelAarm-t-search-0-21"  :type="tSearchx0x21ComputedData.type" :input-value="state.selectedParams.radius" :maxlength="tSearchx0x21ComputedData.maxlength" :minlength="tSearchx0x21ComputedData.minlength" :show-word-limit="tSearchx0x21ComputedData.showWordLimit" :placeholder="tSearchx0x21ComputedData.placeholder" :clearable="tSearchx0x21ComputedData.clearable" :show-password="tSearchx0x21ComputedData.showPassword" :disabled="tSearchx0x21ComputedData.disabled" :prefix-icon="tSearchx0x21ComputedData.prefix-icon" :suffix-icon="tSearchx0x21ComputedData.suffix-icon" :rows="tSearchx0x21ComputedData.rows" :autosize="tSearchx0x21ComputedData.autosize" :name="tSearchx0x21ComputedData.name" :readonly="tSearchx0x21ComputedData.readonly" :step="tSearchx0x21ComputedData.step" :autofocus="tSearchx0x21ComputedData.autofocus" :form="tSearchx0x21ComputedData.form" :label="tSearchx0x21ComputedData.label" :tabindex="tSearchx0x21ComputedData.tabindex" :validate-event="tSearchx0x21ComputedData.validateEvent" :c-style="tSearchx0x21ComputedData.cStyle" :has-search-btn="tSearchx0x21ComputedData.hasSearchBtn" @input="oninput1740742323984_0_0"></t-search><t-text id="t-text-d1ff.062681e7" class="airSyxqPanelAarm-t-text-0-22"  :label="tTextx0x22ComputedData.label" :editable="tTextx0x22ComputedData.editable" :c-style="tTextx0x22ComputedData.cStyle"></t-text></div>
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
import { TCheckbox, TComponent, TImageBase, TListCard, TRadio, TRect, TSearch, TTable, TText } from '@ths/design';

export default {
  components: {
    TCheckbox,
    TComponent,
    TImageBase,
    TListCard,
    TRadio,
    TRect,
    TSearch,
    TTable,
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
   isInitPage: false,
   sceneRawList: [{"hasOperateColumn":true,"entityCode":"tag_yztgdy_1618381967642","entityName":"一张图-固定源","topicCode":"9c78b301-ae5e-4050-aae5-c0928420a054","topicName":"企业","isshow":true,"title":"企业","num":0,"unit":"家","color":"var(--t-white)"},{"hasOperateColumn":true,"entityCode":"tag_fxydayz_1734067067287","entityName":"风险源档案-油站","topicCode":"393cf6ad-0010-4f42-9d50-471f67792c59","topicName":"加油站","isshow":true,"title":"加油站","num":0,"unit":"家","color":"var(--t-white)"},{"hasOperateColumn":true,"entityCode":"tag_fxydayk_1733994042148","entityName":"风险源档案-油库","topicCode":"e4a5ce63-01c5-49bb-b13b-4e20e376137d","topicName":"油库","isshow":true,"title":"油库","num":0,"unit":"家","color":"var(--t-white)"},{"hasOperateColumn":false,"entityCode":"tag_yztgdy_1618381967642","entityName":"一张图-固定源","topicCode":"0dac088-c76f-4aae-b1aa-5e4aaf16a799","topicName":"道路","isshow":false,"title":"道路","num":0,"unit":"家","color":"var(--t-white)"},{"hasOperateColumn":false,"entityCode":"tag_yztgdy_1618381967642","entityName":"一张图-固定源","topicCode":"f15281b6-002c-4820-bcd6-6b2dc35f0c31","topicName":"黑烟车","isshow":false,"title":"黑烟车","num":0,"unit":"家","color":"var(--t-white)"}],
   dispatchUrl: "http://19.130.161.126:8888/vue3-fs-task-micro/#/dispatchinglayout/special-task-assign?visible=true&paramValue=fszxrw&taskParamType=2&hiddenBackBtn=1",
   listQueryParams: {},
   tabQueryParams: {},
   sourceParmasState: {},
   columns: [],
   ALL_LAYERS: [],
   OUPUT_LAYER_PARAMS: {},
   REGION_LAYER_PARAMS: {},
   GRID_LAYER_PARAMS: {},
   headInfo: {},
   activeCard: "",
   sceneList: [],
   activeTab: {"name":"","value":""},
   pointInfo: {"POINT_NAME":"","POINT_TYPE":"","START_TIME":"","END_TIME":""},
   alarmMonthTotal: "0",
   alarmInfo: [{"title":"报警污染物","num":"-"},{"title":"报警原因","num":"-"},{"title":"开始报警时间","num":"-"},{"title":"结束报警时间","num":"-"},{"title":"报警持续时间","num":"-"},{"title":"当月报警记录"}],
   parentParams: {"POINT_CODE":"","COUNT_ID":"","alarmTime":"","endTime":"","MONITOR_MONTH":"","AIRMONITORTIME":"","ALARM_END_TIME":"","REGION_CODE":""},
   enterList: [],
   isShowOperateColumn: false,
   checkedIds: "",
   selectedParams: {"radius":3,"direction":"back","altitude":["10","500","1000"],"buffer":"union"},
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
            default: {"width":"410px","height":"82px","position":"unset","left":"20px","top":"530px","lineHeight":"18px","animationName":"","paddingRight":"8px","paddingLeft":"8px","backgroundColor":"var(--business-show-bg30)","paddingTop":"8px","paddingBottom":"8px","min-height":"82px"},
            
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
cStyle:{"wrapper":{"default":{"width":"410px","height":"82px","position":"unset","left":"20px","top":"530px","lineHeight":"18px","animationName":"","paddingRight":"8px","paddingLeft":"8px","backgroundColor":"var(--business-show-bg30)","paddingTop":"8px","paddingBottom":"8px","min-height":"82px"}},"itemWrapper":{"default":{"height":"66px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"var(--business-show-bg30)","lineHeight":"18px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"0px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","backgroundColor":"var(--business-show-bg50)"}},"num":{"default":{"fontSize":"24px","fontWeight":"700","marginRight":"2px","lineHeight":"20px","textAlign":"left","fontFamily":"DIN-bold","color":"var(--t-aqi-green)"}},"unit":{"default":{"fontSize":"12px","color":"var(--business-unit-icon)"}},"title":{"default":{"fontSize":"14px","color":"var(--t-white)","marginTop":"0px"}},"icon":{"default":{"width":"32px","height":"32px","left":"16px","marginLeft":"17px"}},"numBox":{"default":{"marginTop":"6px"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"rightContent":{"default":{"alignItems":"center","marginLeft":"8px","display":"flex","flexDirection":"column"}}}, 
 },
},
tImageBasex0x1: {
defaultStyle: {
            default: {"width":"410px","height":"188px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","left":"20px","top":"330px","animationName":"","position":"unset"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2025-02-28/5b83ceeba3ed47ff9c3db1435d3f1e8e.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"410px","height":"188px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","left":"20px","top":"330px","animationName":"","position":"unset"}}}, 
 },
},
tTablex0x2: {
defaultStyle: {
            default: {"width":"410px","height":"350px","position":"unset","left":"20px","top":"670px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":""},
            
            },
 default: { 
 
height:"350",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","type":"state","key":"","stateKey":"canPosition","width":"40PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"0PX","height":"0PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"},"cellStyle":{"cursor":"pointer"}},"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"0"},"imageStyle":{"marginRight":"","borderRadius":"","width":"16PX","height":"20PX","backgroundImage":"var(--business-position)"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"16PX","height":"20PX","backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2022-11-01/740fa325bf0b471d8e40134e70fda341.svg"},"cellStyle":{"background":""}}]},{"label":"企业名称","type":"default","key":"DATA_NAME","stateKey":"","width":"370PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"left"}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"350px","position":"unset","left":"20px","top":"670px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":""}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"410px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"518px","left":"20px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"518px","left":"20px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tTablex0x4: {
defaultStyle: {
            default: {"width":"410px","height":"350px","position":"unset","left":"20px","top":"670px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":""},
            
            },
 default: { 
 
height:"350",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":" ","type":"state","key":"","stateKey":"isCheck","width":"30PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"24PX","height":"24PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--business-theme)"},"cellStyle":{"cursor":"pointer"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"14PX","height":"14PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"var(--business-checkbox-checked)","backgroundSize":"100%","cursor":"pointer","transform":"translate(11px, 3px)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":"","cursor":"pointer"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"14PX","height":"14PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"var(--business-checkbox)","backgroundSize":"100%","cursor":"pointer","transform":"translate(11px, 3px)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"定位","type":"state","key":"","stateKey":"canPosition","width":"40PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"0PX","height":"0PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"},"cellStyle":{"cursor":"pointer"}},"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"0"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"var(--business-position)"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2022-11-01/740fa325bf0b471d8e40134e70fda341.svg"},"cellStyle":{"background":""}}]},{"label":"企业名称","type":"default","key":"DATA_NAME","stateKey":"","width":"300PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}},"infoPosition":"left"},{"label":"操作","type":"default","key":"operation","stateKey":"","width":"50PX","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--business-theme)"},"cellStyle":{"cursor":"pointer"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"350px","position":"unset","left":"20px","top":"670px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":""}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
tListCardx0x5: {
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
tComponentx0x6: {
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
tComponentx0x7: {
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
tTextx0x8: {
defaultStyle: {
            default: {"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"8px","fontFamily":"方正综艺","fontSize":"20px","animationName":""},
            
            },
 default: { 
 
label:"报警信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"8px","fontFamily":"方正综艺","fontSize":"20px","animationName":""}}}, 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"287px","fontFamily":"方正综艺","fontSize":"20px","animationName":""},
            
            },
 default: { 
 
label:"溯源结果",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"287px","fontFamily":"方正综艺","fontSize":"20px","animationName":""}}}, 
 },
},
tTextx0x10: {
defaultStyle: {
            default: {"width":"164px","height":"21px","color":"var(--t-aqi-yellow)","position":"unset","left":"179px","top":"225px","cursor":"pointer"},
            
            },
 default: { 
 
label:"0",
editable:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"21px","color":"var(--t-aqi-yellow)","position":"unset","left":"179px","top":"225px","cursor":"pointer"}}}, 
 },
},
tRectx0x11: {
defaultStyle: {
            default: {"width":"72px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"362px","top":"624px","cursor":"pointer","animationName":"","fontSize":"14px"},
            
            },
 default: { 
 
tip:false,
label:"批量派发",
active:false,
cStyle:{"wrapper":{"default":{"width":"72px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"362px","top":"624px","cursor":"pointer","animationName":"","fontSize":"14px"}}}, 
 },
},
tRectx0x12: {
defaultStyle: {
            default: {"width":"72px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"362px","top":"624px","cursor":"no-drop","animationName":"","fontSize":"14px"},
            
            },
 default: { 
 
tip:false,
label:"批量派发",
active:false,
cStyle:{"wrapper":{"default":{"width":"72px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"362px","top":"624px","cursor":"no-drop","animationName":"","fontSize":"14px"}}}, 
 },
},
tTextx0x13: {
defaultStyle: {
            default: {"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"36px","top":"393px","animationName":""},
            
            },
 default: { 
 
label:"轨迹方向：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"36px","top":"393px","animationName":""}}}, 
 },
},
tTextx0x14: {
defaultStyle: {
            default: {"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"36px","top":"447px","animationName":""},
            
            },
 default: { 
 
label:"缓冲区：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"36px","top":"447px","animationName":""}}}, 
 },
},
tTextx0x15: {
defaultStyle: {
            default: {"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"36px","top":"420px","animationName":""},
            
            },
 default: { 
 
label:"高度：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"36px","top":"420px","animationName":""}}}, 
 },
},
tTextx0x16: {
defaultStyle: {
            default: {"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"36px","top":"355px","animationName":""},
            
            },
 default: { 
 
label:"半径：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"14px","color":"var(--business-white)","fontSize":"14px","lineHeight":"14px","textAlign":"right","position":"unset","left":"36px","top":"355px","animationName":""}}}, 
 },
},
tRadiox0x17: {
defaultStyle: {
            default: {"display":"flex","alignItems":"flex-start","justify-content":"center","width":"256px","height":"20px","position":"unset","left":"109px","top":"390px","animationName":"","textAlign":"left","justifyContent":"flex-start","flexDirection":"row","flexWrap":"nowrap"},
            
            },
 default: { 
 
options:[{"label":"back","value":"后向溯源","disabled":false},{"label":"front","value":"前向追踪","disabled":false}],
active:"back",
alias:{"label":"label","value":"value","disabled":"disabled"},
disabled:false,
border:false,
size:"small",
isUseButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"flex-start","justify-content":"center","width":"256px","height":"20px","position":"unset","left":"109px","top":"390px","animationName":"","textAlign":"left","justifyContent":"flex-start","flexDirection":"row","flexWrap":"nowrap"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"4px","fontSize":"14px","lineHeight":"14px"},"active":{"color":"rgba(255, 255, 255, 1)"}},"circle":{"default":{"--el-color-white":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","fontSize":"16px","lineHeight":"16px"},"active":{"--t-radio-active-bg-color":"var(--business-btn-active)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"itemWrapper":{"default":{"marginRight":"12px","cursor":"pointer"}},"radioButton":{"default":{"fontSize":"16px","lineHeight":"16px"}}}, 
 },
},
tRadiox0x18: {
defaultStyle: {
            default: {"display":"flex","alignItems":"flex-start","justify-content":"center","width":"256px","height":"20px","position":"unset","left":"109px","top":"444px","animationName":"","textAlign":"left","justifyContent":"flex-start","flexDirection":"row","flexWrap":"nowrap"},
            
            },
 default: { 
 
options:[{"label":"union","value":"全部缓冲区","disabled":false},{"label":"inner","value":"缓冲交界区","disabled":false}],
active:"union",
alias:{"label":"label","value":"value","disabled":"disabled"},
disabled:false,
border:false,
size:"small",
isUseButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"flex-start","justify-content":"center","width":"256px","height":"20px","position":"unset","left":"109px","top":"444px","animationName":"","textAlign":"left","justifyContent":"flex-start","flexDirection":"row","flexWrap":"nowrap"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"4px","fontSize":"14px","lineHeight":"14px"},"active":{"color":"rgba(255, 255, 255, 1)"}},"circle":{"default":{"--el-color-white":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","fontSize":"16px","lineHeight":"16px"},"active":{"--t-radio-active-bg-color":"var(--business-btn-active)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"itemWrapper":{"default":{"marginRight":"12px","cursor":"pointer"}},"radioButton":{"default":{"fontSize":"16px","lineHeight":"16px"}}}, 
 },
},
tCheckboxx0x19: {
defaultStyle: {
            default: {"display":"flex","alignItems":"flex-start","justifyContent":"flex-start","width":"232px","height":"22px","position":"unset","left":"107px","top":"417px","animationName":"","backgroundColor":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"2px"},
            
            },
 default: { 
 
data:[{"label":"10m","value":"10","disabled":false},{"label":"500m","value":"500","disabled":false},{"label":"1000m","value":"1000","disabled":false}],
active:["10","500","1000"],
dataAlias:{"label":"label","value":"value","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"flex-start","justifyContent":"flex-start","width":"232px","height":"22px","position":"unset","left":"107px","top":"417px","animationName":"","backgroundColor":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingLeft":"2px"}},"rectangle":{"active":{"background":"var(--business-btn-active)","borderLeft":"1px none var(--business-theme)","borderTop":"1px none var(--business-theme)","borderRight":"1px none var(--business-theme)","borderBottom":"1px none var(--business-theme)"},"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"icon":{"default":{"left":"5px","top":"2px"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"2px","fontSize":"14px"}},"itemWrapper":{"default":{"marginRight":"16px","cursor":"pointer"}}}, 
 },
},
tRectx0x20: {
defaultStyle: {
            default: {"width":"85px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"329px","top":"474px","cursor":"pointer","animationName":"","fontSize":"14px","letterSpacing":"1px"},
            
            },
 default: { 
 
tip:false,
label:"开始分析",
active:false,
cStyle:{"wrapper":{"default":{"width":"85px","height":"32px","backgroundColor":"var(--business-btn-default)","color":"var(--t-white)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","position":"unset","left":"329px","top":"474px","cursor":"pointer","animationName":"","fontSize":"14px","letterSpacing":"1px"}}}, 
 },
},
tSearchx0x21: {
defaultStyle: {
            default: {"width":"260px","height":"32px","position":"unset","left":"108px","top":"347px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":"","paddingLeft":"10px","fontSize":"14px"},
            
            },
 default: { 
 
type:"number",
inputValue:3,
maxlength:"",
minlength:0,
showWordLimit:false,
placeholder:"请输入",
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
cStyle:{"wrapper":{"default":{"width":"260px","height":"32px","position":"unset","left":"108px","top":"347px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"#fff","animationName":"","paddingLeft":"10px","fontSize":"14px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","fontSize":"14px"}},"prefix":{"default":{"color":"var(--business-text-avianize)","fontSize":"0px"}}},
hasSearchBtn:false, 
 },
},
tTextx0x22: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"var(--t-font-color-gy1)","fontSize":"14px","position":"unset","left":"381px","top":"357px","lineHeight":"14px","animationName":""},
            
            },
 default: { 
 
label:"km",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"var(--t-font-color-gy1)","fontSize":"14px","position":"unset","left":"381px","top":"357px","lineHeight":"14px","animationName":""}}}, 
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
state.parentParams.ALARM_END_TIME = state.parentParams.endTime?.substring(0, 13) || state.parentParams.AIRMONITORTIME || '';
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
  // if (state.activeTab) {
  //   // 获取污染物场景信息
  //    await getSceneData();
  // }
};

init();

watch(
  () => state.selectedParams.altitude,
  (newVal, oldVal) => {
    if (newVal.length === 0) {
      state.selectedParams.altitude = [oldVal[0]];
    }
  }
)
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
const clickSceneCard = (item) => {
	// 如果存在场景卡片数据
  // if (state.activeCard) {
	// 	// 根据场景获取，展示列表的头信息
  //   getHeaderInfo();
	// 	// 发送更新图层消息
	// 	sendUpdateLayerMsg();
	// 	// 获取报警原因列表
	// 	getResultList();
	// 	// 获取污染源评分列表
	// 	getPolluteScoreList();
	// 	// 发送溯源消息
	// 	sendTraceLayerMsg();
  // }

	// 更新场景名
state.activeTab.name = item.title;
// 更新场景编码
state.activeTab.value = item.topicCode;

try {
  let listQueryParams = JSON.parse(state.listQueryParams);

  listQueryParams.query.bool.filter[1].term['TAG_TOPIC_CODE.keyword'] = state.activeTab.value;

	// 更新列表请求传参
	state.listQueryParams = JSON.stringify(listQueryParams);

  // 是否展示操作列
  state.isShowOperateColumn = item.hasOperateColumn;

  // 获取列表数据
  getEnterList();
} catch (err) {
  console.error(err, '列表查询参数解析失败');
}
	
};
const handleTableClick = (column,row) => {
console.log('处理表格点击事件', column, row);

if (column.label === '定位') {
  // 给地图发消息
  /* 发送webSocket消息 */
  if (rootData?.sendMessage) {
    // rootData?.sendMessage({
    //   id: guid(true, 'lego'), // 唯一索引
    //   type: "runInteractive", // 消息名称
    //   data: [
    //     {
    //       code: 'CENTER_ENTER',
    //       shareCode: 'CENTER_ENTER',
    //       defaultValue: '',
    //       runtimeValue: row.STANDENTERID
    //     }
    //   ]
    // });
    rootData.rootSocket.emit('message', {
      room: global.socketRoom, // 房间号
      type: "gotoAirSTracePoint", // 消息名称
      data: {
        "dataid": row.DATA_PKID,
      }
    });
  }
} else if (column.label === '操作') {
  // 派发任务
  dispatchTask(row.DATA_PKID);
} else if (column.label === ' ') {
  // 复选
  // dispatchTask(row.DATA_PKID);
  if (row.isCheck === '0') {
    row.isCheck = '1';
  } else {
    row.isCheck = '0';
  }
  // 更新勾选状态
  state.checkedIds = state.enterList
    .filter((val) => val.isCheck === '1')
    .map((val) => val.DATA_PKID)
    .join(',');
}
};
const setSourceTraceData = (bufferLayerPoly,regionCode) => {
if (state.isInitPage) {
  return;
}
state.isInitPage = true;

/**
 * 获取数据
 */
async function getData() {
  // 获取场景数据
  await getSceneData();

  try {
    state.listQueryParams = JSON.stringify({
      "_source" : ["DATA_PKID", "DATA_NAME", "TAG_TOPIC_CODE", "LONGITUDE", "LATITUDE"],
      "size" : 1500,
      "query" : {
        "bool" : {
          "must" : [ {
            "match_all" : { }
          }],
          "filter" : [ {
            "term" : {
              "REGION_CODE" : regionCode
            }
          },
          {
            "term" : {
              "TAG_TOPIC_CODE.keyword" : state.activeTab.value
            }
          } 
          ],
          "should" : [ 
            {
              "geo_shape": {
                "location": {
                  "shape": {
                    "type": "polygon",
                    "coordinates":bufferLayerPoly
                  },
                  "relation": "within"
                }
              }
            },
            {
              "geo_shape": {
                "location_poly": {
                  "shape": {
                    "type": "polygon",
                    "coordinates":bufferLayerPoly
                  },
                  "relation": "intersects"
                }
              }
            }
          ],
          "minimum_should_match" : 1
        }
      }
    });

    console.log(state.listQueryParams, '===查询无报警溯源列表数据的传参===')
    
    // 获取列表数据
    getEnterList();
  } catch (err) {
    console.error(err, '列表查询参数转成字符串失败');
  }
}

state.timeout = setTimeout(() => {
  try {
    // 更新标签栏传参
    state.tabQueryParams = JSON.stringify({
      "size": 0,
      "query": {
        "bool": {
          "must": [{
            "match_all": {}
          }],
          "filter": [ {
            "term": {
              "REGION_CODE": regionCode
            }
          }],
          "should": [ 
            {
              "geo_shape": {
                "location": {
                  "shape": {
                    "type": "polygon",
                    "coordinates":bufferLayerPoly
                  },
                  "relation": "within"
                }
              }
            },
            {
              "geo_shape": {
                "location_poly": {
                  "shape": {
                    "type": "polygon",
                    "coordinates":bufferLayerPoly
                  },
                  "relation": "intersects"
                }
              }
            }
          ],
          "minimum_should_match": 1
        }
      },
      "aggs": {
        "groupCount": {
          "terms": {
            "script": {
              "inline": "doc['TAG_ENTITY_CODE.keyword'].value+'-split-'+doc['TAG_ENTITY_NAME.keyword'].value+'-split-'+doc['TAG_TOPIC_CODE.keyword'].value+'-split-'+doc['TAG_TOPIC_NAME.keyword'].value"
            },
            "size": 100
          }
        }
      }
    });

    
  } catch (err) {
    console.error(err, 'bufferLayerPoly解析失败');
  }
  getData();
});
};
const dispatchTask = (id) => {
/**
 * 派发任务
 */

// 记录行ID
localStorage.setItem('pointIds', id);
window.open(state.dispatchUrl);
};
const oncardClick1735298134011_0_0 = (item) => {
// 执行自定义方法
clickSceneCard(item);
};
const oncellClick1735298134012_0_0 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(column,row);
};
const onclick1735298134013_0_0 = () => {
// 执行自定义方法
dispatchTask(state.checkedIds);
};
const onclick1734415835534 = () => {
// 执行自定义方法
clickAlarmTotal();
};
const onchange1740742323983_0_0 = (data) => {
// 设置变量值
state.selectedParams.altitude = data;
};
const onclick1740742323984_0_0 = () => {
// 执行自定义方法
handleAnalysis();
};
const oninput1740742323984_0_0 = (value) => {
// 设置变量值
state.selectedParams.radius = value;
};
// 接口函数
const getEnterList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"post","baseURL":global.serviceBaseUrl,"data":qs.stringify({"interfaceId":"54c0456d112a15810ddedb11a29c986d","queryJson":state.listQueryParams,"entityCode":"tag_gather_yztdqsy_1735090881279"}),}).then((res) => {
     // 成功的操作
     // 清空列表数据
state.enterList = [];
// 重置勾选状态
state.checkedIds = '';

const { data } = res;
const tabList = data?.hits?.hits;
if (res.status === 200 && Array.isArray(tabList)) {
  state.enterList = tabList.map((val) => ({
    ...val._source,
    canPosition: val._source.LONGITUDE && val._source.LATITUDE ? 'true' : 'false', // 是否能定位
    operation: '派发', // 操作
    isCheck: '0', // 1已勾选，0未勾选
  }));
}
console.log(state.enterList, 22333)
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 清空列表数据
state.enterList = [];
// 重置勾选状态
state.checkedIds = '';
      reject(error);
    });
  });
};
// 接口函数
const getSceneData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"post","baseURL":global.serviceBaseUrl,"data":qs.stringify({"interfaceId":"54c0456d112a15810ddedb11a29c986d","queryJson":state.tabQueryParams,"entityCode":"tag_gather_yztdqsy_1735090881279"}),}).then((res) => {
     // 成功的操作
     state.sceneList = [];

const { data } = res;
const tabList = data?.aggregations?.groupCount?.buckets;
if (res.status === 200 && Array.isArray(tabList)) {
  const { sceneRawList } = state;
  // 过滤要展示的数据
  const filterItems = sceneRawList.filter((val) => val.isshow);
  // 结果数组
  const resList = [];
  filterItems.forEach((val, index) => {
    // 找到场景数据
    let scene = tabList.find((item) => item.key.indexOf(val.topicCode) > -1);
    /* 若接口返回了当前场景的数据 */
    if (scene) {
      const splitData = scene.key.split('-split-');
      if (splitData.length >= 4) {
        resList.push({
          hasOperateColumn: val.hasOperateColumn, // 是否展示操作列
          entityCode: val.entityCode, // 实体编码
          entityName: val.entityName, // 实体名称
          topicCode: val.topicCode, // 主题编码
          topicName: val.topicName, // 主体名称
          title: val.title,
          num: scene.doc_count || '0',
          unit: '家',
          color: 'var(--t-white)',
        });
      }
    } else {
      resList.push({  
        hasOperateColumn: val.hasOperateColumn, // 是否展示操作列
        entityCode: val.entityCode, // 实体编码
        entityName: val.entityName, // 实体名称
        topicCode: val.topicCode, // 主题编码
        topicName: val.topicName, // 主体名称
        title: val.title,
        num: '0',
        unit: val.unit,
        color: val.color,
      });
    }

    
    /* 若是第一个元素 */
    if (!index) {
      state.activeTab.value = resList[0].topicCode;
      state.activeTab.name = resList[0].topicName;
      // 是否展示操作列
      state.isShowOperateColumn = resList[0].hasOperateColumn;
    }
  });
  state.sceneList = resList;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.sceneList = [];
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
                            setPageScale('t-l-c-airSyxqPanelAarm', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
// 执行自定义方法
initPage();
/* 接收socket.io消息 */
rootData.rootOn('rootSocket:change', (data)=>{
if(data.type === "sendAirSourceTraceData"){
try{
// 执行自定义方法
setSourceTraceData(data.data.bufferLayerPoly,data.data.regionCode);
} catch (error) {
console.error('参数格式错误', error);
};
};
});
onMounted(() => {
setPageScale('t-l-c-airSyxqPanelAarm', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tListCardx0x0ComputedData = computed(() => _.merge({}, componentState.tListCardx0x0.default, componentState.tListCardx0x0?.[state.screenSize]));

 const tImageBasex0x1ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x1.default, componentState.tImageBasex0x1?.[state.screenSize]));

 const tTablex0x2ComputedData = computed(() => _.merge({}, componentState.tTablex0x2.default, componentState.tTablex0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tTablex0x4ComputedData = computed(() => _.merge({}, componentState.tTablex0x4.default, componentState.tTablex0x4?.[state.screenSize]));

 const tListCardx0x5ComputedData = computed(() => _.merge({}, componentState.tListCardx0x5.default, componentState.tListCardx0x5?.[state.screenSize]));

 const tComponentx0x6ComputedData = computed(() => _.merge({}, componentState.tComponentx0x6.default, componentState.tComponentx0x6?.[state.screenSize]));

 const tComponentx0x7ComputedData = computed(() => _.merge({}, componentState.tComponentx0x7.default, componentState.tComponentx0x7?.[state.screenSize]));

 const tTextx0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x8.default, componentState.tTextx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tTextx0x10ComputedData = computed(() => _.merge({}, componentState.tTextx0x10.default, componentState.tTextx0x10?.[state.screenSize]));

 const tRectx0x11ComputedData = computed(() => _.merge({}, componentState.tRectx0x11.default, componentState.tRectx0x11?.[state.screenSize]));

 const tRectx0x12ComputedData = computed(() => _.merge({}, componentState.tRectx0x12.default, componentState.tRectx0x12?.[state.screenSize]));

 const tTextx0x13ComputedData = computed(() => _.merge({}, componentState.tTextx0x13.default, componentState.tTextx0x13?.[state.screenSize]));

 const tTextx0x14ComputedData = computed(() => _.merge({}, componentState.tTextx0x14.default, componentState.tTextx0x14?.[state.screenSize]));

 const tTextx0x15ComputedData = computed(() => _.merge({}, componentState.tTextx0x15.default, componentState.tTextx0x15?.[state.screenSize]));

 const tTextx0x16ComputedData = computed(() => _.merge({}, componentState.tTextx0x16.default, componentState.tTextx0x16?.[state.screenSize]));

 const tRadiox0x17ComputedData = computed(() => _.merge({}, componentState.tRadiox0x17.default, componentState.tRadiox0x17?.[state.screenSize]));

 const tRadiox0x18ComputedData = computed(() => _.merge({}, componentState.tRadiox0x18.default, componentState.tRadiox0x18?.[state.screenSize]));

 const tCheckboxx0x19ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x19.default, componentState.tCheckboxx0x19?.[state.screenSize]));

 const tRectx0x20ComputedData = computed(() => _.merge({}, componentState.tRectx0x20.default, componentState.tRectx0x20?.[state.screenSize]));

 const tSearchx0x21ComputedData = computed(() => _.merge({}, componentState.tSearchx0x21.default, componentState.tSearchx0x21?.[state.screenSize]));

 const tTextx0x22ComputedData = computed(() => _.merge({}, componentState.tTextx0x22.default, componentState.tTextx0x22?.[state.screenSize]));

return {
global,
state,
componentState,
tListCardx0x0ComputedData,
tImageBasex0x1ComputedData,
tTablex0x2ComputedData,
tRectx0x3ComputedData,
tTablex0x4ComputedData,
tListCardx0x5ComputedData,
tComponentx0x6ComputedData,
tComponentx0x7ComputedData,
tTextx0x8ComputedData,
tTextx0x9ComputedData,
tTextx0x10ComputedData,
tRectx0x11ComputedData,
tRectx0x12ComputedData,
tTextx0x13ComputedData,
tTextx0x14ComputedData,
tTextx0x15ComputedData,
tTextx0x16ComputedData,
tRadiox0x17ComputedData,
tRadiox0x18ComputedData,
tCheckboxx0x19ComputedData,
tRectx0x20ComputedData,
tSearchx0x21ComputedData,
tTextx0x22ComputedData,
oncardClick1735298134011_0_0,
oncellClick1735298134012_0_0,
oncellClick1735298134012_0_0,
onclick1734415835534,
onclick1735298134013_0_0,
onchange1740742323983_0_0,
onchange1740742323983_0_0,
onchange1740742323983_0_0,
onclick1740742323984_0_0,
oninput1740742323984_0_0,
};
},
}
</script>

<style scoped>
.t-l-c-airSyxqPanelAarm {
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
.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-list-card-0-0 {
position: absolute !important;
top: 530px;
left: 20px;
width: 410px;
height: 82px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-image-base-0-1 {
position: absolute !important;
top: 330px;
left: 20px;
width: 410px;
height: 188px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-table-0-2 {
position: absolute !important;
top: 670px;
left: 20px;
width: 410px;
height: 350px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-rect-0-3 {
position: absolute !important;
top: 518px;
left: 20px;
width: 410px;
height: 1px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-table-0-4 {
position: absolute !important;
top: 670px;
left: 20px;
width: 410px;
height: 350px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-list-card-0-5 {
position: absolute !important;
top: 46px;
left: 13px;
width: 414px;
height: 204px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-component-0-6 {
position: absolute !important;
top: 3px;
left: 20px;
width: 410px;
height: 31px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-component-0-7 {
position: absolute !important;
top: 282px;
left: 20px;
width: 410px;
height: 31px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-text-0-8 {
position: absolute !important;
top: 8px;
left: 60px;
width: 130px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-text-0-9 {
position: absolute !important;
top: 287px;
left: 60px;
width: 130px;
height: 19px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-text-0-10 {
position: absolute !important;
top: 225px;
left: 179px;
width: 164px;
height: 21px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-rect-0-11 {
position: absolute !important;
top: 624px;
left: 362px;
width: 72px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-rect-0-12 {
position: absolute !important;
top: 624px;
left: 362px;
width: 72px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-text-0-13 {
position: absolute !important;
top: 393px;
left: 36px;
width: 70px;
height: 14px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-text-0-14 {
position: absolute !important;
top: 447px;
left: 36px;
width: 70px;
height: 14px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-text-0-15 {
position: absolute !important;
top: 420px;
left: 36px;
width: 70px;
height: 14px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-text-0-16 {
position: absolute !important;
top: 355px;
left: 36px;
width: 70px;
height: 14px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-radio-0-17 {
position: absolute !important;
top: 390px;
left: 109px;
width: 256px;
height: 20px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-radio-0-18 {
position: absolute !important;
top: 444px;
left: 109px;
width: 256px;
height: 20px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-checkbox-0-19 {
position: absolute !important;
top: 417px;
left: 107px;
width: 232px;
height: 22px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-rect-0-20 {
position: absolute !important;
top: 474px;
left: 329px;
width: 85px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-search-0-21 {
position: absolute !important;
top: 347px;
left: 108px;
width: 260px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airSyxqPanelAarm .airSyxqPanelAarm-t-text-0-22 {
position: absolute !important;
top: 357px;
left: 381px;
width: 28px;
height: 14px;
pointer-events: auto;
}
</style>
