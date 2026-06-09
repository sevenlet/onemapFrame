<template>
  <div id="t-l-c-waterDialogSmallWaterTrendCopy" class="t-l-c-waterDialogSmallWaterTrendCopy" ><t-chart-design v-if="state.chartShow === true" id="t-chart-design-257d.c589f49de" class="waterDialogSmallWaterTrend-t-chart-design-0-0"  :empty-img="tChartDesignx0x0ComputedData.emptyImg" :c-style="tChartDesignx0x0ComputedData.cStyle" :options="tChartDesignx0x0ComputedData.options" @get-chart-instance="ongetChartInstance1763191439325"></t-chart-design><t-select id="t-select-ee9f.bf9455a04" class="waterDialogSmallWaterTrend-t-select-0-1"  :active-value="replaceCssVariables(filterData(state.params.pollutants, componentPropBindingMap?.['t-select-ee9f.bf9455a04']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.options.pollutants, componentPropBindingMap?.['t-select-ee9f.bf9455a04']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x1ComputedData.alias" :multiple="tSelectx0x1ComputedData.multiple" :placeholder="tSelectx0x1ComputedData.placeholder" :clearable="tSelectx0x1ComputedData.clearable" :disabled="tSelectx0x1ComputedData.disabled" :name="tSelectx0x1ComputedData.name" :autocomplete="tSelectx0x1ComputedData.autocomplete" :filterable="tSelectx0x1ComputedData.filterable" :no-match-text="tSelectx0x1ComputedData.no-match-text" :no-data-text="tSelectx0x1ComputedData.no-data-text" :c-style="tSelectx0x1ComputedData.cStyle" @change="onchange1734159936716"></t-select><t-text id="t-text-8f2e.58316ed1d" class="waterDialogSmallWaterTrend-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle"></t-text><t-text id="t-text-740f.85d1d67c6" class="waterDialogSmallWaterTrend-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle"></t-text><t-switch id="t-switch-5d48.72ababdbd" class="waterDialogSmallWaterTrend-t-switch-0-4"  :value="tSwitchx0x4ComputedData.value" :c-style="tSwitchx0x4ComputedData.cStyle" @change="onchange1734160214280"></t-switch><t-date-picker id="t-date-picker-cad2.abd345996" class="waterDialogSmallWaterTrend-t-date-picker-0-5"  :placeholder="tDatePickerx0x5ComputedData.placeholder" :start-placeholder="tDatePickerx0x5ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x5ComputedData.endPlaceholder" :type="tDatePickerx0x5ComputedData.type" :clearable="tDatePickerx0x5ComputedData.clearable" :range-separator="tDatePickerx0x5ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.params.time.range, componentPropBindingMap?.['t-date-picker-cad2.abd345996']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x5ComputedData.separator" :readonly="tDatePickerx0x5ComputedData.readonly" :editable="tDatePickerx0x5ComputedData.editable" :c-style="tDatePickerx0x5ComputedData.cStyle" @date-change="ondateChange1734160159774"></t-date-picker><t-text-common id="t-text-common-b0ad.6d9f3046" class="waterDialogSmallWaterTrend-t-text-common-0-6"  :label="tTextCommonx0x6ComputedData.label" :editable="tTextCommonx0x6ComputedData.editable" :c-style="tTextCommonx0x6ComputedData.cStyle"></t-text-common><t-text-common id="t-text-common-711f.2b283b5de" class="waterDialogSmallWaterTrend-t-text-common-0-7"  :label="tTextCommonx0x7ComputedData.label" :editable="tTextCommonx0x7ComputedData.editable" :c-style="tTextCommonx0x7ComputedData.cStyle"></t-text-common></div>
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
import { TChartDesign, TDatePicker, TSelect, TSwitch, TText, TTextCommon } from '@ths/design';

export default {
  components: {
    TChartDesign,
    TDatePicker,
    TSelect,
    TSwitch,
    TText,
    TTextCommon,
  },
  setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-chart-design-257d.c589f49de":{"attributeName":"tChartDesignx0x0","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-select-ee9f.bf9455a04":{"attributeName":"tSelectx0x1","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-text-8f2e.58316ed1d":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-740f.85d1d67c6":{"attributeName":"tTextx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-switch-5d48.72ababdbd":{"attributeName":"tSwitchx0x4","value":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-cad2.abd345996":{"attributeName":"tDatePickerx0x5","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-b0ad.6d9f3046":{"attributeName":"tTextCommonx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-711f.2b283b5de":{"attributeName":"tTextCommonx0x7","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   chartShow: true,
   myOriChart: {},
   myChart: {},
   downstreamStandardSeriesData: [],
   upstreamStandardSeriesData: [],
   upstreamseriesData: [],
   downstreamseriesData: [],
   downstreamPointCode: "",
   upstreamPointCode: "",
   downstreamSelectOptions: "",
   upstreamSelectOptions: "",
   dialogType: "",
   noDataImg: "",
   isBz: false,
   seriesData: [],
   standardSeriesData: [],
   yAxisUnit: "",
   lineChartOption: {},
   normalLineCommonSeriesOption: {"type":"line","symbolSize":1,"labelLine":{"smooth":true},"smooth":true},
   params: {"time":{"start":"","end":"","range":[]},"monitor":"","interfaceId":"f5a13b25067b52a45d626d1f0284372d","pointcode":"3507001047","monitorType":"1","pollutants":"W01019"},
   options: {"monitor":[],"pollutants":[{"value":"W01019","label":"高锰酸盐指数","unit":"mg/L"},{"value":"W21003","label":"氨氮","unit":"mg/L"},{"value":"W21011","label":"总磷（以P计）","unit":"mg/L"}]},
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
tChartDesignx0x0: {
defaultStyle: {
            default: {"height":"390px","width":"868px","position":"unset","left":"-35px","top":"29px"},
            
            },
 default: { 
 
emptyImg:"",
cStyle:{"wrapper":{"default":{"height":"390px","width":"868px","position":"unset","left":"-35px","top":"29px"}},"emptyText":{"default":{"fontSize":"14px","color":"var(--business-show-bg60)"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
tSelectx0x1: {
defaultStyle: {
            default: {"width":"157px","height":"32px","position":"unset","left":"665px","top":"2px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},
            
            },
 default: { 
 
activeValue:"W01019",
options:[{"value":"W01019","label":"高锰酸盐指数","unit":"mg/L"},{"value":"W21003","label":"氨氮","unit":"mg/L"},{"value":"W21011","label":"总磷（以P计）","unit":"mg/L"}],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"157px","height":"32px","position":"unset","left":"665px","top":"2px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"49px","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"726px","top":"42px","fontSize":"var(--t-text-size-normal)","lineHeight":"22px","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
label:"标准值",
editable:false,
cStyle:{"wrapper":{"default":{"width":"49px","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"726px","top":"42px","fontSize":"var(--t-text-size-normal)","lineHeight":"22px","animationName":"","textAlign":"right"}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"300px","top":"10px","fontSize":"var(--t-text-size-normal)","lineHeight":"14px","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
label:"时间",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"300px","top":"10px","fontSize":"var(--t-text-size-normal)","lineHeight":"14px","animationName":"","textAlign":"right"}}}, 
 },
},
tSwitchx0x4: {
defaultStyle: {
            default: {"width":"32px","height":"22px","position":"unset","left":"791px","top":"42px","animationName":""},
            
            },
 default: { 
 
value:false,
cStyle:{"wrapper":{"default":{"width":"32px","height":"22px","position":"unset","left":"791px","top":"42px","animationName":""}},"core":{"active":{"backgroundColor":"var(--business-theme)","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
tDatePickerx0x5: {
defaultStyle: {
            default: {"width":"290px","height":"32px","position":"unset","left":"365px","top":"2px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"daterange",
clearable:false,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"290px","height":"32px","position":"unset","left":"365px","top":"2px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tTextCommonx0x6: {
defaultStyle: {
            default: {"width":"113px","height":"20px","color":"#c1cee1","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"2px","top":"42px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"浓度（mg/L）",
editable:false,
cStyle:{"wrapper":{"default":{"width":"113px","height":"20px","color":"#c1cee1","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"2px","top":"42px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tTextCommonx0x7: {
defaultStyle: {
            default: {"width":"144px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"16px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"2px","top":"7px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"污染物浓度变化趋势",
editable:false,
cStyle:{"wrapper":{"default":{"width":"144px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"16px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"2px","top":"7px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
});
const handleTimeSelect = (times) => {
if (times.length) {
  state.params.time.start = times[0] || '';
  state.params.time.end = times[1] || '';
  state.params.time.range = times;
} else {
  state.params.time.range = [];
  state.params.time.start = '';
  state.params.time.end = '';
}

apiRegistry.getLineChartData.request(0)
  .then(() => {
    changeStandard(state.isBz);
  })
  .catch(error => {
    console.error('请求失败1:', error);
  });

};
const handleMonitorSelect = (item) => {
state.params.pollutants = item.value;
state.yAxisUnit = item.unit || '';

apiRegistry.getLineChartData.request(0)
  .then(() => {
    changeStandard(state.isBz);
  })
  .catch(error => {
    console.error('请求失败2:', error);
  });

};
const handleChartAxisLabel = () => {
// const obj = checkTimeRange(state.dialogType, state.params.time.range, state.lineChartOption?.xAxis?.data?.length)

// // 处理x轴显示标签间隔、及重复值
// if (obj.flag) {
//   state.lineChartOption.xAxis.axisLabel.interval = 0;
//   state.lineChartOption.xAxis.axisLabel.formatter = (value, index) => {
//     let dayValue;
//     switch (state.dialogType) {
//       case '1':
//         // 自动天
//         dayValue = dateFormat(value.replace('日', ''), 'yyyy-MM');
//         break;
//       case '2':
//         // 自动小时
//         dayValue = dateFormat(`${value.replace('时', '')}:00`, 'MM-dd');
//         break;
//       case '3':
//         // 手工
//         dayValue = dateFormat(value, 'yyyy');
//         break;
//       default:
//         dayValue = value;
//         break;
//     }
//     return index % obj.num === 0 ? dayValue : '';
//   };
//   state.lineChartOption.xAxis.axisTick.interval = (index) => {
//     return index % obj.num === 0;
//   };
// } else {
//   state.lineChartOption.xAxis.axisLabel.interval = 'auto';
//   state.lineChartOption.xAxis.axisLabel.formatter = (value) => value;
//   state.lineChartOption.xAxis.axisTick.interval = 'auto';
// }
};
const changeStandard = (isShow) => {
const backgroundSeries = {
  name: '当前断面背景',
  type: 'line',
  data: [],
  xAxisIndex: 0,
  yAxisIndex: 0,
  silent: true,
  showSymbol: false,
  lineStyle: { width: 0 },
  areaStyle: { color: 'rgba(145, 204, 117, 0.1)' },
  markArea: {
    silent: true,
    data: [[{
      xAxis: 'min',
      yAxis: 'max'
    }, {
      xAxis: 'max',
      yAxis: 'min'
    }]],
    itemStyle: { color: 'rgba(145, 204, 117, 0.1)' }
  }
};

const seriesList = Array.isArray(state.seriesData)
  ? state.seriesData.map((d) => ({
    name: d.name,
    type: 'line',
    data: Array.isArray(d.data) ? [...d.data] : [],
    xAxisIndex: 0,
    yAxisIndex: 0,
    symbol: 'none',
    smooth: true,
    lineStyle: { width: 2 },
    itemStyle: { borderwidth: 2, borderColor: '#fff' },
    emphasis: { scale: true }
  }))
  : [];

const standardData = isShow && Array.isArray(state.standardSeriesData)
  ? _.cloneDeep(state.standardSeriesData)
  : [];

state.lineChartOption.series = [
  backgroundSeries,
  ...seriesList,
  ...standardData
];

if (state.myChart) {
  state.myChart.clear();
  state.myChart.setOption(state.lineChartOption, true);
}

// 修复series数据变化而页面未刷新
state.chartShow = false;
nextTick(()=>state.chartShow = true)
};
const initPage = () => {
// 处理参数
if (global.businessDialog.dialogParmas) {
  state.params.pointcode = global.businessDialog.dialogParmas.pointCode;
} else {
  state.params.pointcode = 'smallWater00001';
}
state.dialogType = '1'
state.params.monitorType = '1'

// echarts图配置
setOptions();

// 设置暂无数据图片
setNoData();

// 获取时间下拉值（用结束时间向前推指定格式的时间）
getTimeValue();

// 获取下拉选项后请求数据
const getData = async () => {
  await apiRegistry.getMonitorData.request();
  await apiRegistry.getLineChartData.request(0);
  changeStandard(state.isBz)
}

// 获取数据
getData();
};
const setNoData = () => {
// 设置暂无数据图标
state.noDataImg = getCssVariable('--business-no-data-img');
};
const setOptions = () => {
const dataZoom = [
  {
    "type": "slider",
    "height": 10,
    xAxisIndex: [0],
  },
  {
    type: 'inside',
    xAxisIndex: [0],
  }
];

// 变化趋势图表配置
state.lineChartOption = {
  "color": [
    "#465FFF",
    "#73c0de", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272",
    "#fc8452", "#9a60b4", "#ea7ccc", "#2CCAFF", "#D56900", "#465FFF"
  ],
  "tooltip": {
    "trigger": "axis",
    "backgroundColor": "rgba(0, 0, 0, 0.8)",
    "borderColor": "rgba(255, 255, 255, 0.5)",
    "textStyle": {
      "color": "rgba(255, 255, 255, 1)"
    },
    "formatter": (value) => handleTooltipFormatter(value)
  },
  dataZoom,

  grid: [
    {
      "left": "4%",
      "right": "3.8%",
      top: '16%',
      bottom: '14%',
      containLabel: true,
      backgroundColor: 'rgba(84, 112, 198, 0.1)'  // 当前断面区域背景色
    }
  ],

  "xAxis": {
    "type": "category",
    "axisLabel": {
      "color": "rgba(255, 255, 255, 0.8)",
      "fontSize": 12,
      //"rotate": 15,
    },
    "axisLine": { show: false },
    "axisTick": { show: false },
    "nameTextStyle": {
      "color": "rgba(255, 255, 255, 0.7)",
      "fontSize": 13
    },
    "data": [],
    boundaryGap: false,
    splitLine: { show: false }
  },

  "legend": {
    top: 40,
    "show": false,
    "type": "scroll",
    "width": "50%",
    "pageButtonItemGap": 5, // 翻页按钮间距
    "pageButtonGap": 10, // 翻页按钮与图例的间距
    "pageButtonPosition": "end", // 翻页按钮位置
    "pageIconColor": "rgba(255, 255, 255, 0.8)", // 翻页按钮颜色
    "pageIconInactiveColor": "rgba(255, 255, 255, 0.3)", // 翻页按钮禁用颜色
    "pageIconSize": 12, // 翻页按钮大小
    "pageTextStyle": {
      "color": "rgba(255, 255, 255, 0.8)"
    },
    "icon": "rect",
    "itemWidth": 12,
    "itemHeight": 4,
    "textStyle": {
      "color": "rgba(255, 255, 255, 0.8)",
      "fontSize": 14,
      "height": 10,
      "rich": {
        "a": {
          "verticalAlign": "center"
        }
      }
    },
    "data": []
  },
  "yAxis": [
    {
      type: 'value',
      //name: '浓度',
      nameLocation: 'middle',
      nameGap: 40,
      gridIndex: 0,
      axisLine: { show: false },
      "axisLabel": {
        "color": "rgba(255, 255, 255, 0.8)",
        "fontSize": 13,
        "formatter": function (value) {
          return value.toFixed(2);
        }
      },
      "nameTextStyle": {
        "color": "rgba(255, 255, 255, 0.8)",
        "align": "center",
        "padding": [0, 0, 0, 0],
        "fontSize": 13
      },
      "splitLine": { show: false }
    }
  ],
  "series": []
};
};
const handleSectionSelect = (data) => {
// state.params.section = data ? data.split(',') : [];
// state.params.pointcode = data || "";

if (!state.upstreamPointCode.length) {
  state.upstreamPointCode = [state.upstreamSelectOptions[0].value];
}
if (!state.downstreamPointCode.length) {
  state.downstreamPointCode = [state.downstreamSelectOptions[0].value];
}

const apiRequests = [
  apiRegistry.getLineData.request(0, state.params.pointcode),
  // apiRegistry.getLineData.request(1, state.upstreamPointCode.join(',')),
  // apiRegistry.getLineData.request(2, state.downstreamPointCode.join(',')),
];

Promise.all(apiRequests)
  .then(() => {
    changeStandard(state.isBz)

  })
  .catch(error => {
    console.error('某个请求失败了:', error);
  });


};
const getTimeValue = () => {

const endTime = dateFormat(new Date(), 'yyyy-MM-dd');
const currentDate = new Date();
const startTime = dateFormat(new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd');
// const endTime = dateFormat('2025-11-10');
// const startTime = dateFormat('2025-11-06');

// 赋值参数
state.params.time.range = [String(startTime) || '', String(endTime) || ''];
state.params.time.start = startTime || '';
state.params.time.end = endTime || '';

};
const handleCharFormat = (optionString) => {
/**
  * @description: 替换一段字符串中所有污染物为正确格式
  * @param optionString 要替换的字符串
  * @return 替换完的字符串
  */
if (!optionString) return '';
// 从公共方法里拿到下标特殊字符（后续需要的再补充）
const zreoSub = convertCharacter('下标')[0].split(' ')[0] || '0';
const oneSub = convertCharacter('下标')[0].split(' ')[1] || '1';
const twoSub = convertCharacter('下标')[0].split(' ')[2] || '2';
const threeSub = convertCharacter('下标')[0].split(' ')[3] || '3';
const fiveSub = convertCharacter('下标')[0].split(' ')[5] || '5';
// 污染物对应关系（缺少的继续补充）
const POLLUTION_CHARTS_ALL = [
  {
    name: ['O3', 'o3'],
    html: 'O' + threeSub,
  },
  {
    name: ['PM10', 'pm10'],
    html: 'PM' + oneSub + zreoSub,
  },
  {
    name: ['PM25', 'PM2_5', 'PM2.5', 'pm25', 'pm2_5', 'pm25'],
    html: 'PM' + twoSub + '.' + fiveSub,
  },
  {
    name: ['SO2', 'so2'],
    html: 'SO' + twoSub,
  },
  {
    name: ['CO2', 'co2'],
    html: 'CO' + twoSub,
  },
  {
    name: ['CODMN', 'codmn'],
    html: 'CODmn',
  },
  {
    name: ['VOCS', 'vocs'],
    html: 'VOCs',
  },
  {
    name: ['NO', 'no'],
    html: 'NO',
  },
  {
    name: ['NO2', 'no2'],
    html: 'NO' + twoSub,
  },
  {
    name: ['NH3', 'nh3'],
    html: 'NH' + threeSub,
  },
  {
    name: ['NOX', 'nox'],
    html: 'NOx',
  },
  {
    name: ['PH', 'ph'],
    html: 'pH',
  },
];
let curString = optionString;
POLLUTION_CHARTS_ALL.forEach((item) => {
  item.name.forEach((name) => {
    curString = curString.replace(name, item.html);
  });
});
return curString;
};
const handleChartMouseMove = () => {
  // 使用原始图表实例
  let myChart = state.myChart;
  if (!myChart) return;

  // 清除已有的事件监听器，防止重复绑定
  myChart.off('mouseover');
  myChart.off('mouseout');

  // 时间数据（12个小时，转换为数值便于计算）
  const times = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00',
    '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
  
  // 时间对应的小时数值，用于计算间隔
  const timeValues = times.map(t => parseInt(t.split(':')[0]));

  // 时间间隔设置（小时）
  const upstreamToCurrentInterval = 4;  // 上游到当前断面的时间间隔
  const currentToDownstreamInterval = 8; // 当前到下游断面的时间间隔

  // 处理鼠标悬停事件，显示双向时间间隔竖线
  myChart.on('mouseover', function (params) {
    // 获取当前图表的配置项，避免直接修改全局配置
    const currentOption = _.cloneDeep(myChart.getOption());
    
    // 初始化 markLine 数据
    if (currentOption.series) {
      currentOption.series.forEach((series) => {
        if (series) {
          series.markLine = { data: [] };
        }
      });
    }

    // 获取当前悬停的时间点和系列
    const currentIndex = params.dataIndex;
    const currentHour = timeValues[currentIndex];
    const seriesName = params.seriesName;

    // 根据不同系列计算并显示双向时间关联竖线
    if (seriesName === '上游断面') {
      // 上游断面：显示自身位置的竖线
      addVerticalLine(currentOption, 0, currentIndex, '#5470c6');

      // 正向推算：上游→当前(+4h)
      const currentTargetHour = (currentHour + upstreamToCurrentInterval) % 24;
      const currentTargetIndex = getTimeIndex(currentTargetHour);
      if (currentTargetIndex !== -1) {
        addVerticalLine(currentOption, 1, currentTargetIndex, '#91cc75', '正向');

        // 正向推算：当前→下游(+8h)
        const downstreamTargetHour = (currentTargetHour + currentToDownstreamInterval) % 24;
        const downstreamTargetIndex = getTimeIndex(downstreamTargetHour);
        if (downstreamTargetIndex !== -1) {
          addVerticalLine(currentOption, 2, downstreamTargetIndex, '#fac858', '正向');
        }
      }
    } else if (seriesName === '当前断面') {
      // 当前断面：显示自身位置的竖线
      addVerticalLine(currentOption, 1, currentIndex, '#91cc75');

      // 正向推算：当前→下游(+8h)
      const downstreamTargetHour = (currentHour + currentToDownstreamInterval) % 24;
      const downstreamTargetIndex = getTimeIndex(downstreamTargetHour);
      if (downstreamTargetIndex !== -1) {
        addVerticalLine(currentOption, 2, downstreamTargetIndex, '#fac858', '正向');
      }

      // 反向推算：当前→上游(-4h)
      const upstreamTargetHour = (currentHour - upstreamToCurrentInterval + 24) % 24;
      const upstreamTargetIndex = getTimeIndex(upstreamTargetHour);
      if (upstreamTargetIndex !== -1) {
        addVerticalLine(currentOption, 0, upstreamTargetIndex, '#5470c6', '反向');
      }
    } else if (seriesName === '下游断面') {
      // 下游断面：显示自身位置的竖线
      addVerticalLine(currentOption, 2, currentIndex, '#fac858');

      // 反向推算：下游→当前(-8h)
      const currentTargetHour = (currentHour - currentToDownstreamInterval + 24) % 24;
      const currentTargetIndex = getTimeIndex(currentTargetHour);
      if (currentTargetIndex !== -1) {
        addVerticalLine(currentOption, 1, currentTargetIndex, '#91cc75', '反向');

        // 反向推算：当前→上游(-4h)
        const upstreamTargetHour = (currentTargetHour - upstreamToCurrentInterval + 24) % 24;
        const upstreamTargetIndex = getTimeIndex(upstreamTargetHour);
        if (upstreamTargetIndex !== -1) {
          addVerticalLine(currentOption, 0, upstreamTargetIndex, '#5470c6', '反向');
        }
      }
    }

    // 重新设置配置以更新标记线
    myChart.setOption(currentOption);
  });

  // 鼠标离开时清除所有标记线
  myChart.on('mouseout', function () {
    const currentOption = _.cloneDeep(myChart.getOption());
    if (currentOption.series) {
      currentOption.series.forEach((series) => {
        if (series) {
          series.markLine = { data: [] };
        }
      });
      myChart.setOption(currentOption);
    }
  });

  // 添加垂直标记线的函数（支持正向/反向标识）
  function addVerticalLine(option, seriesIndex, dataIndex, color, direction) {
    // 确保 series 和 markLine 存在
    if (!option.series || !option.series[seriesIndex]) return;
    
    if (!option.series[seriesIndex].markLine) {
      option.series[seriesIndex].markLine = { data: [] };
    }

    let labelText = times[dataIndex];
    if (direction) {
      labelText += '123'
    }

    option.series[seriesIndex].markLine.data.push({
      name: '时间标记',
      xAxis: dataIndex,
      lineStyle: {
        color: color,
        type: direction === '反向' ? 'dotted' : 'dashed', // 反向用点线，正向用虚线区分
        width: 2
      },
      label: {
        show: true,
        formatter: labelText,
        color: color
      }
    });
  }
};
const ongetChartInstance1763191439325 = (chart) => {
// 设置变量值
state.myChart = _.cloneDeep(chart);
// 执行自定义方法
handleChartMouseMove();
};
const onchange1734159936716 = (value,selectValueArr,selectValueItem) => {
// 执行自定义方法
handleMonitorSelect(selectValueItem);
};
const onchange1734160214280 = (value) => {
// 设置变量值
state.isBz = value;
// 执行自定义方法
changeStandard(value);
};
const ondateChange1734160159774 = (data) => {
// 执行自定义方法
handleTimeSelect(data);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getMonitorData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"interfaceId":"acc8f8c17118848d1f644cef1c725851"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"acc8f8c17118848d1f644cef1c725851"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"interfaceId":"acc8f8c17118848d1f644cef1c725851"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMonitorData'] = res.data;
                
     state.options.monitor = [];
state.params.monitor = '';
state.yAxisUnit = '';
const color = {
  "W01009": "#0094FF",
  "W01010": "#2CCAFF",
  "W01001": "#D56900",
  "W01014": "#00E400",
}
if (res.data.head.statusCode === '200' && res.data?.data?.length) {
  state.options.monitor = res.data.data.map(i => ({
    "value": i.PCODE,
    "paramsValue": i.PCODE,
    "label": handleCharFormat(i.PNAME),
    "unit": i.PUNIT,
    "color": color[i.PCODE]
  }));
  state.params.monitor = state.options.monitor[0].value || "";
  state.yAxisUnit = state.options.monitor[0].unit || "";
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.options.monitor = [];
state.params.monitor = '';
state.yAxisUnit = '';

      reject(error);
    });
  });
},
              },
// 接口函数
 getLineChartData: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"0","defaultValue":"0","description":"","dataKey":"type","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"nQQaKU4N84","children":[]}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"pageNum":"1","pageSize":"2000","END_TIME":"state.params.time.end","START_TIME":"state.params.time.start","POINT_CODE":"state.params.pointcode","interfaceId":"82121e102cbbe37cb2c1834165573fcf"}},
              request: function (type, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"pageNum":"1","pageSize":"2000","END_TIME":state.params.time.end,"START_TIME":state.params.time.start,"POINT_CODE":state.params.pointcode,"interfaceId":"82121e102cbbe37cb2c1834165573fcf"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"pageNum":"1","pageSize":"2000","END_TIME":state.params.time.end,"START_TIME":state.params.time.start,"POINT_CODE":state.params.pointcode,"interfaceId":"82121e102cbbe37cb2c1834165573fcf"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLineChartData'] = res.data;
                
     const chartDataKeyMap = {
  // 1: {
  //   series: 'upstreamseriesData',
  //   standard: 'upstreamStandardSeriesData',
  // },
  // 2: {
  //   series: 'downstreamseriesData',
  //   standard: 'downstreamStandardSeriesData',
  // },
  0: {
    series: 'seriesData',
    standard: 'standardSeriesData',
  },
}
// state.seriesData = [];
// state.upstreamseriesData = [];
// state.downstreamseriesData = [];
state[chartDataKeyMap[type].series] = [];
state[chartDataKeyMap[type].standard] = [];
// state.lineChartOption.yAxis.name = '浓度';
state.lineChartOption.xAxis.data = [];
handleChartAxisLabel();
state.lineChartOption.legend.data = [];

if (res.status === 200 && res?.data?.data?.length) {
  const { data } = res.data;

  // 添加写死的标准值
  data.forEach(item => {
    item.STANDARD_1 = "0.15";
    item.STANDARD_2 = "0.5";
    item.STANDARD_3 = "1";
    item.STANDARD_4 = "1.5";
    item.STANDARD_5 = "2";
  });
  // x轴数据
  const xAxisData = [];
  // 图例数据
  const legendData = [];
  // 一到五类标准值
  const standardLineMap = {
    STANDARD_1: [],
    STANDARD_2: [],
    STANDARD_3: [],
    STANDARD_4: [],
    STANDARD_5: [],
  }
  // 系列数据（系列数据动态处理主要是以防后期断面下拉变多又再处理一次，现在是固定的两个）；
  let seriesData = [];
  data.forEach((item) => {
    Object.keys(standardLineMap).forEach(i => {
      standardLineMap[i].push({
        value: item[i],
        hiddenInTooltip: true,
        wholeTime: item.monitortime,
      })
    })
    xAxisData.push({ label: handleNoVal(item.monitortime) });
    // legendData.push({
    //   name: item.POINT_NAME,
    //   icon: 'roundRect',
    // });
    if (!seriesData.find((x) => x.POINT_CODE === item.point_code)) {
        const pollutantFieldMap = {
          W01019: 'w01019_value',
          W21003: 'w21003_value',
          W21011: 'w21011_value',
        };
        const valueField = pollutantFieldMap[state.params.pollutants] || 'w01019_value';
        const pointData = data.filter((x) => x.point_code === item.point_code).map((dataItem) => (
          dataItem[valueField]
        ));
        seriesData.push(
          {
            POINT_CODE: item.point_code,
            name: item.point_name || '',
            data: Array.isArray(pointData) ? pointData : [],
        });
      }
  });
  // 处理系列样式（主要处理颜色）
  // seriesData = seriesData.map((seriesItem) => ({
  //   ...seriesItem,
  //   ...state.normalLineCommonSeriesOption,
  //   itemStyle: {
  //     // color: colors[index],
  //   },
  // }));

  // 污染物
  if (state.params.monitor !== 'W01001') {
    // 添加标准线线数据，确保所有 data 都是有效数组
    const standardSeriesConfigs = [
      { name: 'Ⅰ类标准值', color: '#8FCDFF', data: standardLineMap.STANDARD_1 },
      { name: 'Ⅱ类标准值', color: '#0280F6', data: standardLineMap.STANDARD_2 },
      { name: 'Ⅲ类标准值', color: '#00DA2A', data: standardLineMap.STANDARD_3 },
      { name: 'Ⅳ类标准值', color: '#F6C200', data: standardLineMap.STANDARD_4 },
      { name: 'Ⅴ类标准值', color: '#FC926A', data: standardLineMap.STANDARD_5 },
    ];

    standardSeriesConfigs.forEach((config) => {
      const filteredData = filterRepeatData(config.data, 'wholeTime');
      // 确保 filteredData 是有效数组
      const validData = Array.isArray(filteredData) ? filteredData : [];
      
      state[chartDataKeyMap[type].standard].push({
        xAxisIndex: 0,
        yAxisIndex: 0,
        ...handleStandardSeries(config.name, config.color),
        data: validData,
      });
    });
  }

  // ph
  if (state.params.monitor === 'W01001') {
    state[chartDataKeyMap[type].standard].push({
      "name": "小时值",
      xAxisIndex: 0,
      yAxisIndex: 0,
      "data": [],
      "type": "line",
      "markArea": {
        "data": [
          [
            {
              "name": "",
              "yAxis": Number(data[0].STANDARDVALUEMIN || '6')
            },
            {
              "name": "",
              "yAxis": Number(data[0].STANDARDVALUEMAX || '9')
            }
          ]
        ],
        "silent": true,
        "itemStyle": {
          "color": 'rgba(221, 194, 191, 0.2)'
        }
      }
    });
  }

  const times = filterRepeatData(xAxisData, 'label').map((item) => item.label);


  state.lineChartOption.tooltip = {
    "trigger": "axis",
    "backgroundColor": "rgba(0, 0, 0, 0.8)",
    "borderColor": "rgba(255, 255, 255, 0.5)",
    "textStyle": {
      "color": "rgba(255, 255, 255, 1)"
    },
    formatter: function (params) {
      if (!params?.length) return '';
      const time = params[0].name || '';
      let res = `<strong>时间: ${time}</strong><br/><br/>`;
      const unit = state.yAxisUnit ? ` ${state.yAxisUnit}` : '';

      // 只显示当前断面的数据
      state.seriesData.forEach((d) => {
        res += `<strong>浓度: ${d.data[params[0].dataIndex]}${unit}</strong><br/>`;
      })
      params.forEach((item) => {
        if (!item || item.seriesIndex === 1) return;
        const value = (item.data.value ?? item.value ?? '--');
        res += `${item.marker}${item.seriesName}: ${value}${unit}<br/>`;
      });
      return res;
    }
  };

  // state.lineChartOption.xAxis = [
  //   {
  //     type: 'category',
  //     data: times,
  //     splitLine: { show: false },
  //     "axisLabel": {
  //       "color": "rgba(255, 255, 255, 0.8)",
  //       "fontSize": 12,
  //       //"rotate": 15,
  //     },
  //     "axisLine": { show: false },
  //     "axisTick": { show: false },
  //     "nameTextStyle": {
  //       "color": "rgba(255, 255, 255, 0.7)",
  //       "fontSize": 13
  //     },
  //     boundaryGap: false,
  //   },
  // ]

  state.lineChartOption.xAxis.data = times;

  if (type === 1) {
    state.upstreamseriesData = seriesData;
  } else if (type === 2) {
    state.downstreamseriesData = seriesData;
  } else {
    state.seriesData = seriesData;
  }

  state.seriesData.forEach((item) => {
    legendData.push({
      name: item.name,
      icon: 'rect',
    });
  });
  // state.upstreamseriesData.forEach((item) => {
  //   legendData.push({
  //     name: item.name,
  //     icon: 'rect',
  //   });
  // });
  // state.downstreamseriesData.forEach((item) => {
  //   legendData.push({
  //     name: item.name,
  //     icon: 'rect',
  //   });
  // });
  // state.lineChartOption.yAxis.name = `监测值${state.yAxisUnit || ''}`;
  // state.lineChartOption.xAxis.data = filterRepeatData(xAxisData, 'label').map((item) => item.label);
  console.log(state.lineChartOption, '__________________')
  // handleChartAxisLabel();
  state.lineChartOption.legend.data = filterRepeatData(legendData, 'name');
}
// changeStandard(state.isBz)
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.seriesData = [];
state.standardSeriesData = [];
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-waterDialogSmallWaterTrendCopy', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-waterDialogSmallWaterTrendCopy', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
initPage();
});
// 执行自定义方法
setOptions();
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tChartDesignx0x0ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x0.default, componentState.tChartDesignx0x0?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tSelectx0x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x1.default, componentState.tSelectx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tSwitchx0x4ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x4.default, componentState.tSwitchx0x4?.[state.screenSize]));

 const tDatePickerx0x5ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x5.default, componentState.tDatePickerx0x5?.[state.screenSize]));

 const tTextCommonx0x6ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x6.default, componentState.tTextCommonx0x6?.[state.screenSize]));

 const tTextCommonx0x7ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x7.default, componentState.tTextCommonx0x7?.[state.screenSize]));

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
tChartDesignx0x0ComputedData,
tSelectx0x1ComputedData,
tTextx0x2ComputedData,
tTextx0x3ComputedData,
tSwitchx0x4ComputedData,
tDatePickerx0x5ComputedData,
tTextCommonx0x6ComputedData,
tTextCommonx0x7ComputedData,
ongetChartInstance1763191439325,
onchange1734159936716,
onchange1734160214280,
ondateChange1734160159774,
};
},
}
</script>

<style scoped>
.t-l-c-waterDialogSmallWaterTrendCopy {
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
background-color: rgba(26, 27, 31, 0);
width: 844px;
height: 429px;
}
.t-l-c-waterDialogSmallWaterTrendCopy .waterDialogSmallWaterTrend-t-chart-design-0-0 {
position: absolute !important;
top: 29px;
left: -35px;
width: 868px;
height: 390px;
pointer-events: auto;
}

.t-l-c-waterDialogSmallWaterTrendCopy .waterDialogSmallWaterTrend-t-select-0-1 {
position: absolute !important;
top: 2px;
left: 665px;
width: 157px;
height: 32px;
pointer-events: auto;
}

.t-l-c-waterDialogSmallWaterTrendCopy .waterDialogSmallWaterTrend-t-text-0-2 {
position: absolute !important;
top: 42px;
left: 726px;
width: 49px;
height: 22px;
pointer-events: auto;
}

.t-l-c-waterDialogSmallWaterTrendCopy .waterDialogSmallWaterTrend-t-text-0-3 {
position: absolute !important;
top: 10px;
left: 300px;
width: 56px;
height: 14px;
pointer-events: auto;
}

.t-l-c-waterDialogSmallWaterTrendCopy .waterDialogSmallWaterTrend-t-switch-0-4 {
position: absolute !important;
top: 42px;
left: 791px;
width: 32px;
height: 22px;
pointer-events: auto;
}

.t-l-c-waterDialogSmallWaterTrendCopy .waterDialogSmallWaterTrend-t-date-picker-0-5 {
position: absolute !important;
top: 2px;
left: 365px;
width: 290px;
height: 32px;
pointer-events: auto;
}

.t-l-c-waterDialogSmallWaterTrendCopy .waterDialogSmallWaterTrend-t-text-common-0-6 {
position: absolute !important;
top: 42px;
left: 2px;
width: 113px;
height: 20px;
pointer-events: auto;
}

.t-l-c-waterDialogSmallWaterTrendCopy .waterDialogSmallWaterTrend-t-text-common-0-7 {
position: absolute !important;
top: 7px;
left: 2px;
width: 144px;
height: 20px;
pointer-events: auto;
}
</style>
