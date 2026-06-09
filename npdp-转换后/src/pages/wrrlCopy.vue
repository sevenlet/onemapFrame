<template>
  <div id="t-l-c-wrrlCopy" class="t-l-c-wrrlCopy" ><t-rect id="t-rect-626f.812d165ae" class="wrrlCopy-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-rect id="t-rect-d868.2ea3726ea" class="wrrlCopy-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle"></t-rect><t-text id="t-text-6eac.03a957e22" class="wrrlCopy-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle"></t-text><t-tabs-base id="t-tabs-base-b7df.d15826e42" class="wrrlCopy-t-tabs-base-0-3"  :data="state.polluteList" :space="tTabsBasex0x3ComputedData.space" :selected-tab-val="state.polluteActive" :inner-shadow-color="tTabsBasex0x3ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x3ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x3ComputedData.alias" :c-style="tTabsBasex0x3ComputedData.cStyle" :data-raw="tTabsBasex0x3ComputedData.dataRaw" @tab-click="ontabClick1736908733485"></t-tabs-base><t-rect id="t-rect-e0bc.2cacf0b5b" class="wrrlCopy-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @click="onclick1734492623044"></t-rect><t-select id="t-select-56ea.134f13a4d" class="wrrlCopy-t-select-0-5"  :active-value="state.REGION_TYPE" :options="tSelectx0x5ComputedData.options" :alias="tSelectx0x5ComputedData.alias" :multiple="tSelectx0x5ComputedData.multiple" :placeholder="tSelectx0x5ComputedData.placeholder" :clearable="tSelectx0x5ComputedData.clearable" :disabled="tSelectx0x5ComputedData.disabled" :name="tSelectx0x5ComputedData.name" :autocomplete="tSelectx0x5ComputedData.autocomplete" :filterable="tSelectx0x5ComputedData.filterable" :no-match-text="tSelectx0x5ComputedData.no-match-text" :no-data-text="tSelectx0x5ComputedData.no-data-text" :c-style="tSelectx0x5ComputedData.cStyle" @change="onchange1734689433525"></t-select><t-select v-if="state.type === 'year'" id="t-select-fca3.c281eca32" class="wrrlCopy-t-select-0-6"  :active-value="state.POINT_CODE" :options="state.pointList" :alias="tSelectx0x6ComputedData.alias" :multiple="tSelectx0x6ComputedData.multiple" :placeholder="tSelectx0x6ComputedData.placeholder" :clearable="tSelectx0x6ComputedData.clearable" :disabled="tSelectx0x6ComputedData.disabled" :name="tSelectx0x6ComputedData.name" :autocomplete="tSelectx0x6ComputedData.autocomplete" :filterable="tSelectx0x6ComputedData.filterable" :no-match-text="tSelectx0x6ComputedData.no-match-text" :no-data-text="tSelectx0x6ComputedData.no-data-text" :c-style="tSelectx0x6ComputedData.cStyle" @change="onchange1736759726394_0_0"></t-select><t-tabs-base id="t-tabs-base-c335.ddc567d3a" class="wrrlCopy-t-tabs-base-0-7"  :data="tTabsBasex0x7ComputedData.data" :space="tTabsBasex0x7ComputedData.space" :selected-tab-val="state.type" :inner-shadow-color="tTabsBasex0x7ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x7ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x7ComputedData.alias" :c-style="tTabsBasex0x7ComputedData.cStyle" @tab-click="ontabClick1733908971891"></t-tabs-base><t-date-picker v-if="state.type === 'day'" id="t-date-picker-bbb1.6515f81cc" class="wrrlCopy-t-date-picker-0-9"  :placeholder="tDatePickerx0x9ComputedData.placeholder" :start-placeholder="tDatePickerx0x9ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x9ComputedData.endPlaceholder" :type="tDatePickerx0x9ComputedData.type" :clearable="tDatePickerx0x9ComputedData.clearable" :range-separator="tDatePickerx0x9ComputedData.rangeSeparator" :default-date="state.date" :separator="tDatePickerx0x9ComputedData.separator" :readonly="tDatePickerx0x9ComputedData.readonly" :editable="tDatePickerx0x9ComputedData.editable" :c-style="tDatePickerx0x9ComputedData.cStyle" :is-disabled-front="tDatePickerx0x9ComputedData.isDisabledFront" :disabled-date="state.dialogParmas.maxTimeValue" @date-change="ondateChange1733906791700"></t-date-picker><t-date-picker v-if="state.type === 'hour'" id="t-date-picker-db9d.2122e5fe9" class="wrrlCopy-t-date-picker-0-10"  :placeholder="tDatePickerx0x10ComputedData.placeholder" :start-placeholder="tDatePickerx0x10ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x10ComputedData.endPlaceholder" :type="tDatePickerx0x10ComputedData.type" :clearable="tDatePickerx0x10ComputedData.clearable" :range-separator="tDatePickerx0x10ComputedData.rangeSeparator" :default-date="state.date" :separator="tDatePickerx0x10ComputedData.separator" :readonly="tDatePickerx0x10ComputedData.readonly" :editable="tDatePickerx0x10ComputedData.editable" :c-style="tDatePickerx0x10ComputedData.cStyle" :is-disabled-front="tDatePickerx0x10ComputedData.isDisabledFront" :disabled-date="state.dialogParmas.maxTimeValue" @date-change="ondateChange1733909076660"></t-date-picker><t-table v-if="state.type !== 'year'" id="t-table-e792.878458ef2" class="wrrlCopy-t-table-0-11"  :height="tTablex0x11ComputedData.height" :stripe="tTablex0x11ComputedData.stripe" :border="tTablex0x11ComputedData.border" :auto-scroll="tTablex0x11ComputedData.autoScroll" :speed="tTablex0x11ComputedData.speed" :show-animation="tTablex0x11ComputedData.showAnimation" :animation-delay="tTablex0x11ComputedData.animationDelay" :animation-type="tTablex0x11ComputedData.animationType" :columns="state.tableColumn" :data="state.tableData" :default-sort="tTablex0x11ComputedData.defaultSort" :c-style="tTablex0x11ComputedData.cStyle"></t-table><t-chart-design v-if="state.type === 'year'" id="t-chart-design-8350.5c80b7ad8" class="wrrlCopy-t-chart-design-0-12"  :empty-img="tChartDesignx0x12ComputedData.emptyImg" :c-style="tChartDesignx0x12ComputedData.cStyle" :options="state.chartOption"></t-chart-design><t-date-picker v-if="state.type === 'year'" id="t-date-picker-2b5a.6e74e6fe2" class="wrrlCopy-t-date-picker-0-13"  :placeholder="tDatePickerx0x13ComputedData.placeholder" :start-placeholder="tDatePickerx0x13ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x13ComputedData.endPlaceholder" :type="tDatePickerx0x13ComputedData.type" :clearable="tDatePickerx0x13ComputedData.clearable" :range-separator="tDatePickerx0x13ComputedData.rangeSeparator" :default-date="state.date" :separator="tDatePickerx0x13ComputedData.separator" :readonly="tDatePickerx0x13ComputedData.readonly" :editable="tDatePickerx0x13ComputedData.editable" :c-style="tDatePickerx0x13ComputedData.cStyle" :is-disabled-front="tDatePickerx0x13ComputedData.isDisabledFront" :disabled-date="state.dialogParmas.maxTimeValue" @date-change="ondateChange1736748489449_0_0"></t-date-picker></div>
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
import { TChartDesign, TDatePicker, TRect, TSelect, TTable, TTabsBase, TText } from '@ths/design';

export default {
  components: {
    TChartDesign,
    TDatePicker,
    TRect,
    TSelect,
    TTable,
    TTabsBase,
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
   renderChartData: [],
   tableResult: [],
   polluteActive: "AQI",
   polluteList: [],
   POINT_CODE: "",
   pointList: [],
   chartOption: [],
   isShowTable: true,
   dialogParmas: {"maxTimeValue":""},
   tableData: [],
   pointNameList: [],
   REGION_TYPE: "city",
   type: "hour",
   date: "",
   stateList: [{"name":"优","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"25PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","backgroundImage":"","backgroundSize":"100%","background":"#00e400","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"良","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"25PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#f9d000","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"轻度污染","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"25PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#FF7E00","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"中度污染","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"25PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#FF0000","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"重度污染","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"25PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#c500f4","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"严重污染","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"25PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#8c0024","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"无","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"25PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#f2f2f2","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}}],
   tableColumn: "",
   stateListForDay: [{"name":"优","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"40PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","backgroundImage":"","backgroundSize":"100%","background":"#00e400","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"良","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"40PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#f9d000","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"轻度污染","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"40PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#FF7E00","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"中度污染","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"40PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#FF0000","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"重度污染","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"40PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#c500f4","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"严重污染","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"40PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#8c0024","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"无","fontStyle":{"color":"#000","fontSize":"12PX","fontWeight":"bold","padding":"","margin":"","width":"40PX","height":"20PX","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#f2f2f2","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}}],
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
            default: {"width":"1820px","height":"712px","position":"unset","left":"52px","top":"186px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1820px","height":"712px","position":"unset","left":"52px","top":"186px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"1820px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"52px","top":"186px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1820px","height":"47px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"52px","top":"186px","animationName":""}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"143px","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"67px","top":"200px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":""},
            
            },
 default: { 
 
label:"污染日历",
editable:false,
cStyle:{"wrapper":{"default":{"width":"143px","height":"19px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"67px","top":"200px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":""}}}, 
 },
},
tTabsBasex0x3: {
defaultStyle: {
            default: {"width":"410px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"406px","top":"246px"},
            
            },
 default: { 
 
data:[{"label":"AQI","value":"AQI"},{"label":"PM₂.₅","value":"PM25"},{"label":"PM₁₀","value":"PM10"},{"label":"SO₂","value":"SO2"},{"label":"NO₂","value":"NO2"},{"label":"CO","value":"CO"},{"label":"O₃","value":"O3"}],
space:1,
selectedTabVal:"AQI",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"name","disabled":false},
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"406px","top":"246px"}},"itemWrapper":{"default":{"width":"80px","height":"32px","fontSize":"14px","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important","overflow":"hidden"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px"}},"label":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}},
dataRaw:[{"label":"AQI","value":"AQI"},{"label":"{{PM25}}","value":"PM25"},{"label":"{{PM10}}","value":"PM10"},{"label":"{{SO2}}","value":"SO2"},{"label":"{{NO2}}","value":"NO2"},{"label":"CO","value":"CO"},{"label":"{{O3}}","value":"O3"}], 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1833px","top":"197px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1833px","top":"197px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tSelectx0x5: {
defaultStyle: {
            default: {"width":"195px","height":"32px","position":"unset","left":"1451px","top":"245px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:"city",
options:[{"value":"city","label":"珠三角","disabled":false},{"value":"county","label":"五区","disabled":false},{"value":"street","label":"镇街","disabled":false},{"value":"point_gk","label":"国控点","disabled":false}],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:true,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"195px","height":"32px","position":"unset","left":"1451px","top":"245px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"color":"var(--t-white)"}}}, 
 },
},
tSelectx0x6: {
defaultStyle: {
            default: {"width":"195px","height":"32px","position":"unset","left":"1658px","top":"246px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:"",
options:[],
alias:{"label":"POINT_NAME","value":"POINT_CODE","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:true,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"195px","height":"32px","position":"unset","left":"1658px","top":"246px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"color":"var(--t-white)"}}}, 
 },
},
tTabsBasex0x7: {
defaultStyle: {
            default: {"width":"300px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"67px","top":"245px"},
            
            },
 default: { 
 
data:[{"label":"48h变化趋势","value":"hour"},{"label":"30天变化趋势","value":"day"},{"label":"年度日历","value":"year"}],
space:1,
selectedTabVal:"hour",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":false},
cStyle:{"wrapper":{"default":{"width":"300px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"67px","top":"245px"}},"itemWrapper":{"default":{"width":"80px","height":"32px","fontSize":"14px","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px"}},"label":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}}, 
 },
},
tDatePickerx0x9: {
defaultStyle: {
            default: {"width":"195px","height":"31px","position":"unset","left":"1658px","top":"245px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"date",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"195px","height":"31px","position":"unset","left":"1658px","top":"245px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tDatePickerx0x10: {
defaultStyle: {
            default: {"width":"195px","height":"32px","position":"unset","left":"1658px","top":"245px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择时间",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimehour",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"195px","height":"32px","position":"unset","left":"1658px","top":"245px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tTablex0x11: {
defaultStyle: {
            default: {"width":"1646px","height":"580px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","position":"unset","left":"65px","top":"293px"},
            
            },
 default: { 
 
height:"580",
stripe:true,
border:false,
autoScroll:false,
speed:6,
showAnimation:false,
animationDelay:0.1,
animationType:"animate__fadeInUp",
columns:"",
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"1646px","height":"580px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","position":"unset","left":"65px","top":"293px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"200px","height":"32px","backgroundColor":"var(--business-table-header-bg)","fontSize":"13px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-table-odd-row-bg)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"var(--t-white)","height":"40px","paddingTop":"8px","paddingBottom":"8px","fontSize":"14px"},"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"}},"stripeBodyCell":{"default":{"backgroundColor":"var(--business-table-even-row-bg)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"},"default":{"cursor":"pointer"}}}, 
 },
},
tChartDesignx0x12: {
defaultStyle: {
            default: {"height":"605px","width":"1800px","position":"unset","left":"64px","top":"284px","overflow":"auto"},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"605px","width":"1800px","position":"unset","left":"64px","top":"284px","overflow":"auto"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, [])), 
 },
},
tDatePickerx0x13: {
defaultStyle: {
            default: {"width":"195px","height":"32px","position":"unset","left":"1246px","top":"245px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择时间",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"year",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"195px","height":"32px","position":"unset","left":"1246px","top":"245px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
});
const getCalendarData = () => {
const getData = async () => {
  if (state.type === 'year') {
    await getPointList();
    // 时间未选不请求
    if (state.date) {
      getChartData();
    }
  } else {
    await getPointName();
    getCalendarList();
  }
}
getData();

};
const getAQILevel = (AQI) => {
let level = '';
if (AQI <= 50) {
   level = '优';
} else if (AQI <= 100) {
   level = '良';
} else if (AQI <= 150) {
   level = '轻度污染';
} else if (AQI <= 200) {
   level = '中度污染';
} else if (AQI <= 300) {
   level = '重度污染';
} else if (AQI > 300) {
   level = '严重污染';
} else {
   level = '无';
}
return level;
};
const setDefaultParam = () => {
// 保存外层信息
state.dialogParmas = global.businessDialog.dialogParmas;
// 设置时间
state.date = global.businessDialog.dialogParmas.timeValue;
// 设置时间类型
state.type = global.businessDialog.dialogParmas.timeType;
// 设置选中级别
let regionLevelCode = getRegionLevel(global.regionaQuery.regionCode);
if (regionLevelCode === 'province') {
  state.REGION_TYPE  = 'city';
} else {
  state.REGION_TYPE = regionLevelCode;
}
};
const setDate = () => {
if (state.date && state.date.split('').length === 10 && state.type === 'hour') {
  state.date = state.date + ' 00';
} else if (state.date && state.date.split('').length === 13 && state.type === 'day') {
  state.date = state.date.slice(0, 10);
  console.log(state.date)
} else if (state.date && state.type === 'year') {
  state.date = state.date.slice(0, 4);
}
};
const renderChart = () => {
// 多个首要污染物
function polluteFormat(str) {
  if (str) {
    let result = [];
    let polluteArr = str.split(",");
    polluteArr.forEach(item => {
      if (item === 'O3_8') {
        result.push(convertCharacter('O3') + '-8h')
      } else {
        result.push(convertCharacter(item))
      }
    })
    return result.join(',')
  } else {
    return '--'
  }
}


let data = state.renderChartData;
if (data && data.length) {
  let cellSize = 42;
  let pollute = state.polluteActive;
  let polluteName = convertCharacter(state.polluteActive);
  // 12个月（每个元素包含每个日历图的数据，每个日历有42个（7x6）格子，故第一和最后格子不一定是当月的第一和最后日期）
  let seriesData = [];
  // 12个月（每个元素包含每个月的日历图的开始时间和结尾时间，每个日历有42个（7x6）格子，故第一和最后格子不一定是当月的第一和最后日期）
  let calBeginEndDate = [];

  let monthIndex = -1;
  let cellIndex = 0;

  for (let i = 10; i < data.length; i++) {
    let dayOfMonth = Number(data[i].MONITORTIME.substring(8, 10));
    if (dayOfMonth == "01") {
      // 在数据的每月1日加月并重置日历格索引
      monthIndex++;
      if (monthIndex > 11) {
        break;
      }
      cellIndex = 0;
      seriesData[monthIndex] = [];
      calBeginEndDate[monthIndex] = [];

      let year = Number(data[i].MONITORTIME.substring(0, 4));
      let month = Number(data[i].MONITORTIME.substring(5, 7));
      // 处理当月日历第一行的上月几天的文字显示
      let dateFirst = new Date();
      // 2017年的时间有BUG无法setMonth到2月份
      dateFirst.setFullYear(year, 0, 1, 0, 0, 0, 0);
      dateFirst.setDate(1 + (month - 1) * 31);
      dateFirst.setDate(1);
      let dayOfWeekIndex = dateFirst.getDay();
      for (let j = dayOfWeekIndex; j > 0; j--) {
        seriesData[monthIndex][cellIndex] = {
          value: [data[i - j].MONITORTIME, -5, '--'],
          fontSize: 14,
          label: {
            normal: {
              show: true,
              formatter: function (params) {
                return Number(params.value[0].substring(8, 10)) + "\n";
              },
              color: 'rgba(255, 255, 255, 0.4)',
            }
          },
        }
        cellIndex++;
      }
      // 当月日历的第一格日期
      calBeginEndDate[monthIndex][0] = data[i - dayOfWeekIndex].MONITORTIME;
      // 处理当月日历最后几行的下月几天的文字显示
      let dateEnd = new Date(dateFirst.getTime());
      dateEnd.setDate(dateEnd.getDate() + 35);
      dateEnd.setDate(1);
      let days = Math.floor((dateEnd.getTime() - dateFirst.getTime()) / (24 * 3600 * 1000));

      let EndCellIndex = cellIndex + days;
      while (EndCellIndex < 42) {
        seriesData[monthIndex][EndCellIndex] = {
          value: [data[i - cellIndex + EndCellIndex].MONITORTIME, -5, '--'],
          fontSize: 14,
          label: {
            normal: {
              show: true,
              formatter: function (params) {
                return Number(params.value[0].substring(8, 10)) + "\n";
              },
              color: 'rgba(255, 255, 255, 0.4)',
            }
          },
        }
        EndCellIndex++;
      }

      // 当月日历图的最后一格日期
      calBeginEndDate[monthIndex][1] = data[i - cellIndex + EndCellIndex - 1].MONITORTIME;
    }
    seriesData[monthIndex][cellIndex] = {
      value: [data[i].MONITORTIME, (Number(data[i][pollute]) ? Number(data[i][pollute]) : -1), polluteFormat(data[i].PRIMPOLLUTE)],
      label: {
        normal: {
          show: true,
          formatter: function (params) {
            if (pollute == 'AQI') {
              return Number(params.value[0].substring(8, 10)) + '\n{p|' + (params.value[2] ? convertCharacter(params.value[2]) : '') + "}";
            } else {
              return Number(params.value[0].substring(8, 10)) + "\n";
            }
          },
          fontSize: 14,
          align: 'center',
          color: '#fff',
          rich: {
            "p": {
              fontSize: 10,
            },
          },
        }
      },
    };
    cellIndex++;
  }
  // echarts的月份显示只能在日历左边或右边，上边和下边只能显示年份和星期，故只能自定义年份框来显示月份。。
  let monthCh = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
  let calenderData = [];
  let seriesArray = []
  // 日历图的横向位置索引
  let index_x = 1;
  // 日历图的纵向位置索引
  let index_y = 1;
  // 自定义年份框来显示月份
  for (let i = 0; i < 12; i++) {
    let monthstr = monthCh[i];

    calenderData[i] = {
      orient: 'vertical',
      splitLine: {
        show: true,
        lineStyle: {
          color: '#0a56b3'
        }
      },
      itemStyle: {
        borderColor: '#0a56b3'
      },
      yearLabel: {
        margin: 21,
        borderWidth: 1,
        formatter: monthstr,
        color: "#fff",
        backgroundColor: "#003d9b",
        borderColor: '#0a56b3',
        borderType: 'solid',
        backgroundColor: "#003d9b",// '#CCFFCC',
        fontWeight: 'normal',
        fontSize: 12,
        width: cellSize * 7,
        height: 20,
        lineHeight: 20,
        align: 'center',
        rich: {
          a: {
            width: 70,
          },
        },
      },
      monthLabel: {
        show: false
      },
      dayLabel: {
        firstDay: 0,
        margin: 0,
        color: "#fff",
        backgroundColor: "#003d9b",
        borderColor: '#0a56b3',
        borderWidth: 1,
        borderType: 'solid',
        lineHeight: 20,
        width: 42,
        height: 20,
        nameMap: "ZH"
      },
      cellSize: cellSize,
      left: 1 + 300 * (index_x - 1),
      top: 50 + 300 * (index_y - 1),
      range: calBeginEndDate[i],
    };

    seriesArray[i] = {
      name: 'AQI',
      type: 'heatmap',
      coordinateSystem: 'calendar',
      calendarIndex: i,
      data: seriesData[i],
    };

    if (index_x < 6) {
      index_x++;
    } else {
      index_x = 1;
      index_y++;
    }
  }

  let option = {
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        if (params.value[1] >= 0) {
          if (polluteName === 'AQI') {
            if (isNaN(params.value[2])) {
              return params.value[0] + '<br/>AQI：' + params.value[1] + "<br/>首要污染物：" + params.value[2];
            } else {
              return params.value[0].substring(0, 10) + '<br/>AQI：' + params.value[1];
            }
            // return params.value[0].substring(0, 10) + '<br/>AQI：' + params.value[1];
          } else {
            if (polluteName === 'CO') {
              return params.value[0] + '<br/>' + polluteName + '：' + params.value[1] + 'mg/m3';
            }
            return params.value[0] + '<br/>' + polluteName + '：' + params.value[1] + 'μg/m3';
          }
        }
      },
      axisPointer: {
        show: false,
        type: 'shadow' // shadow cross line
      },
      backgroundColor: '#003d9b',
      borderWidth: 1,
      borderColor: '#0a56b3',
      padding: 10,
      textStyle: {
        color: '#fff'
      },
    },
    // title: {
    //   textStyle: {
    //     fontSize: 25
    //   },
    //   itemGap: 4,
    //   text: year + '年' + pointNames + polluteName + '日历图',
    //   left: 'center',
    //   top: 0,
    //   itemGap: 10,
    //   subtextStyle: {
    //     fontSize: 16,
    //     itemGap: 10,
    //   }
    // },
    toolbox: {
      show: false,
      feature: {
        saveAsImage: {
          show: true,
          pixelRatio: 5
        }
      },
      top: 'top',
      right: 40,

    },
    visualMap: {
      type: 'piecewise',
      pieces: [
        {
          gt: -10000,
          lte: 0,
          label: '无数据',
          color: '#003d9b'
        },
        {
          gt: 0,
          lte: 50,
          label: '优',
          color: '#0ce115'
        }, {
          gte: 51,
          lte: 100,
          label: '良',
          color: '#ffd91c'
        }, {
          gte: 101,
          lte: 150,
          label: '轻',
          color: '#ff7e00'
        }, {
          gte: 151,
          lte: 200,
          label: '中',
          color: '#ff0000'
        }, {
          gte: 201,
          lte: 300,
          label: '重',
          color: '#99004c'
        }, {
          gte: 301,
          lte: 1000000,
          label: '严重',
          color: '#7e0023'
        }],
      dimension: 1,
      align: 'left',// 图形和文字的摆放关系，left：图形在左
      show: false,
      itemGap: 30,// 每两个图元之间的间隔距离，单位为px
      orient: 'vertical', // 'vertical' horizontal
      left: 'right', // center
      top: 50,
      padding: 20
    },
    calendar: calenderData,
    series: seriesArray,
  };
  console.log('日历图', option);
  state.chartOption = option;
}
};
const handleYearChange = () => {
// 参数齐全后再请求
if (state.REGION_TYPE && state.POINT_CODE) {
  getChartData();
}

};
const initPolluteType = () => {
state.polluteList = [
  {
    label: 'AQI',
    name: 'AQI'
  },
  {
    label: convertCharacter('PM25'),
    name: 'PM25'
  },
  {
    label: convertCharacter('PM10'),
    name: 'PM10'
  },
  {
    label: convertCharacter('SO2'),
    name: 'SO2'
  },
  {
    label: convertCharacter('NO2'),
    name: 'NO2'
  },
  {
    label: 'CO',
    name: 'CO'
  },
  {
    label: convertCharacter('O3'),
    name: 'O3'
  },
  {
    label: convertCharacter('O3') + '-8h',
    name: 'O3_8'
  }
];
};
const handleTableData = () => {
let data = state.tableResult;
// 处理日历数据
let pointList = []
// 求时间
const timeList = Array.from(new Set(data.map(item => item.MONITORTIME_NAME)));
state.pointNameList.forEach((item) => {
  const pointObj = {
    siteName: item.POINT_NAME
  }
  timeList.forEach((time, index) => {
    const findData = data.find((item1) => item1.POINT_NAME === item.POINT_NAME && item1.MONITORTIME_NAME === time);
    if (findData) {
      pointObj[time] = handleNoVal(findData[state.polluteActive]);
      pointObj[`aqiState${index}`] = getAQILevel(findData[state.polluteActive] ? parseInt(findData[state.polluteActive]) : '无');
    } else {
      pointObj[time] = '-';
      pointObj[`aqiState${index}`] = '无';
    }
    if (index === timeList.length - 1) {
      pointList.push(pointObj);
    }
  })
})
state.tableData = pointList;

// 处理表头
state.tableColumn = [];
// 第一列地区
const baseTableColumn = [
  {
    label: state.REGION_TYPE === 'point_gk' ? "站点" : "地点",
    type: "default",
    key: "siteName",
    align: "center",
    width: '55PX',
    fixed: true,
    headerAlign: "center",
  }
]
const arr = []
// 创建表头
timeList.forEach((item, index) => {
  const column = {
    label: item,
    type: "state",
    key: item,
    stateKey: "aqiState" + index,
    infoPosition: "left",
    tooltipPosition: "top",
    width: state.type === 'hour' ? "30PX" : '53px',
    minWidth: state.type === 'hour' ? "30PX" : '53px',
    align: "center",
    headerAlign: "center",
    sortable: false,
    showOverflowTooltip: false,
    infoStyle: {
      fontStyle: {
        color: "#eee",
      }
    },
    stateList: state.type === 'hour' ? state.stateList : state.stateListForDay,
  }
  arr.push(column);
})
state.tableColumn = baseTableColumn.concat(arr);
// 解决表格错位的问题
document.getElementById('t-table-e792.878458ef2').style.display = 'none';
setTimeout(() => {
  document.getElementById('t-table-e792.878458ef2').style.display = 'block';
})
};
const polluteTypeChange = () => {
if (state.type === 'year') {
  renderChart();
} else {
  handleTableData();
}
};
const onclick1734492623044 = () => {
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
const ontabClick1736908733485 = (data) => {
// 设置变量值
state.polluteActive = data.value;
// 执行自定义方法
polluteTypeChange();
};
const onchange1734689433525 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.REGION_TYPE = value;
// 执行自定义方法
getCalendarData();
};
const onchange1736759726394_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.REGION_TYPE = value;
// 执行自定义方法
getCalendarData();
};
const ontabClick1733908971891 = (data) => {
// 设置变量值
state.type = data.value;
// 设置变量值
state.POINT_CODE = '';
// 执行自定义方法
setDate();
// 执行自定义方法
getCalendarData();
};
const ondateChange1733906791700 = (data) => {
// 设置变量值
state.date = data;
// 执行自定义方法
getCalendarData();
};
const ondateChange1733909076660 = (data) => {
// 设置变量值
state.date = data;
// 执行自定义方法
getCalendarData();
};
const ondateChange1736748489449_0_0 = (data) => {
// 设置变量值
state.date = data;
// 执行自定义方法
handleYearChange();
};
// 接口函数
const getCalendarList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.POINT_CODE,"REGION_TYPE":state.REGION_TYPE,"REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":state.date,"TIME_TYPE":state.type,"interfaceId":"2b829b05af88c67dab04968f10f3bf96"},}).then((res) => {
     // 成功的操作
     state.tableData = [];
const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.tableResult = data;
  handleTableData();
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getPointName = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_CODE":global.regionaQuery.regionCode,"REGION_TYPE":state.REGION_TYPE,"interfaceId":"22a8b4a63e60e46c4e667e64b925651c"},}).then((res) => {
     // 成功的操作
     state.tableData = [];
const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.pointNameList = data
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableData = [];
      reject(error);
    });
  });
};
// 接口函数
const getPointList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_CODE":global.regionaQuery.regionCode,"REGION_TYPE":state.REGION_TYPE,"interfaceId":"4f7eb6b9d09657a03736e719a8f6b2e0"},}).then((res) => {
     // 成功的操作
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.pointList = data;
  state.POINT_CODE = data[0] && data[0].POINT_CODE;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getChartData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.POINT_CODE,"REGION_TYPE":state.REGION_TYPE,"REGION_CODE":global.regionaQuery.regionCode,"MONITORTIME":state.date,"TIME_TYPE":state.type,"interfaceId":"284ad6a89fd158410ab395b47278dd05"},}).then((res) => {
     // 成功的操作
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.renderChartData = data;
  renderChart();
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-wrrlCopy', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPolluteType();
// 执行自定义方法
setDefaultParam();
// 执行自定义方法
getCalendarData();
onMounted(() => {
setPageScale('t-l-c-wrrlCopy', global.appScaleMode, 'normal');
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

 const tTabsBasex0x3ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x3.default, componentState.tTabsBasex0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tSelectx0x5ComputedData = computed(() => _.merge({}, componentState.tSelectx0x5.default, componentState.tSelectx0x5?.[state.screenSize]));

 const tSelectx0x6ComputedData = computed(() => _.merge({}, componentState.tSelectx0x6.default, componentState.tSelectx0x6?.[state.screenSize]));

 const tTabsBasex0x7ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x7.default, componentState.tTabsBasex0x7?.[state.screenSize]));

 const tDatePickerx0x9ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x9.default, componentState.tDatePickerx0x9?.[state.screenSize]));

 const tDatePickerx0x10ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x10.default, componentState.tDatePickerx0x10?.[state.screenSize]));

 const tTablex0x11ComputedData = computed(() => _.merge({}, componentState.tTablex0x11.default, componentState.tTablex0x11?.[state.screenSize]));

 const tChartDesignx0x12ComputedData = computed(() => _.merge({}, componentState.tChartDesignx0x12.default, componentState.tChartDesignx0x12?.[state.screenSize]));

 const tDatePickerx0x13ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x13.default, componentState.tDatePickerx0x13?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tTextx0x2ComputedData,
tTabsBasex0x3ComputedData,
tRectx0x4ComputedData,
tSelectx0x5ComputedData,
tSelectx0x6ComputedData,
tTabsBasex0x7ComputedData,
tDatePickerx0x9ComputedData,
tDatePickerx0x10ComputedData,
tTablex0x11ComputedData,
tChartDesignx0x12ComputedData,
tDatePickerx0x13ComputedData,
ontabClick1736908733485,
onclick1734492623044,
onchange1734689433525,
onchange1736759726394_0_0,
ontabClick1733908971891,
ondateChange1733906791700,
ondateChange1733909076660,
ondateChange1736748489449_0_0,
};
},
}
</script>

<style scoped>
.t-l-c-wrrlCopy {
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
height: 1080px;
width: 1920px;
background-color: rgba(0,0,0,0);
}
.t-l-c-wrrlCopy .wrrlCopy-t-rect-0-0 {
position: absolute !important;
top: 186px;
left: 52px;
width: 1820px;
height: 712px;
pointer-events: auto;
}

.t-l-c-wrrlCopy .wrrlCopy-t-rect-0-1 {
position: absolute !important;
top: 186px;
left: 52px;
width: 1820px;
height: 47px;
pointer-events: auto;
}

.t-l-c-wrrlCopy .wrrlCopy-t-text-0-2 {
position: absolute !important;
top: 200px;
left: 67px;
width: 143px;
height: 19px;
pointer-events: auto;
}

.t-l-c-wrrlCopy .wrrlCopy-t-tabs-base-0-3 {
position: absolute !important;
top: 246px;
left: 406px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-wrrlCopy .wrrlCopy-t-rect-0-4 {
position: absolute !important;
top: 197px;
left: 1833px;
width: 24px;
height: 24px;
pointer-events: auto;
}

.t-l-c-wrrlCopy .wrrlCopy-t-select-0-5 {
position: absolute !important;
top: 245px;
left: 1451px;
width: 195px;
height: 32px;
pointer-events: auto;
}

.t-l-c-wrrlCopy .wrrlCopy-t-select-0-6 {
position: absolute !important;
top: 246px;
left: 1658px;
width: 195px;
height: 32px;
pointer-events: auto;
}

.t-l-c-wrrlCopy .wrrlCopy-t-tabs-base-0-7 {
position: absolute !important;
top: 245px;
left: 67px;
width: 300px;
height: 32px;
pointer-events: auto;
}

.t-l-c-wrrlCopy .wrrlCopy-t-date-picker-0-9 {
position: absolute !important;
top: 245px;
left: 1658px;
width: 195px;
height: 31px;
pointer-events: auto;
}

.t-l-c-wrrlCopy .wrrlCopy-t-date-picker-0-10 {
position: absolute !important;
top: 245px;
left: 1658px;
width: 195px;
height: 32px;
pointer-events: auto;
}

.t-l-c-wrrlCopy .wrrlCopy-t-table-0-11 {
position: absolute !important;
top: 293px;
left: 65px;
width: 1646px;
height: 580px;
pointer-events: auto;
}

.t-l-c-wrrlCopy .wrrlCopy-t-chart-design-0-12 {
position: absolute !important;
top: 284px;
left: 64px;
width: 1800px;
height: 605px;
pointer-events: auto;
}

.t-l-c-wrrlCopy .wrrlCopy-t-date-picker-0-13 {
position: absolute !important;
top: 245px;
left: 1246px;
width: 195px;
height: 32px;
pointer-events: auto;
}
</style>
