<template>
  <div id="t-l-c-airPollutionContent" class="t-l-c-airPollutionContent" ><t-rect id="t-rect-f5ae.6a46149a9" class="airPollutionContent-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle"></t-rect><t-component id="t-component-b5a1.e20c46eb1" class="airPollutionContent-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName"></t-component><t-component id="t-component-8dbe.0cc7cc7c" class="airPollutionContent-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName"></t-component><t-component id="t-component-8817.142eb536c" class="airPollutionContent-t-component-0-3"  :name="tComponentx0x3ComputedData.name" :c-style="tComponentx0x3ComputedData.cStyle" :src="tComponentx0x3ComputedData.src" :component-name="tComponentx0x3ComputedData.componentName"></t-component><t-component id="t-component-8dd4.33fdd2b06" class="airPollutionContent-t-component-0-4"  :name="tComponentx0x4ComputedData.name" :c-style="tComponentx0x4ComputedData.cStyle" :src="tComponentx0x4ComputedData.src" :component-name="tComponentx0x4ComputedData.componentName"></t-component><t-component id="t-component-eb05.e086dcb85" class="airPollutionContent-t-component-0-5"  :name="tComponentx0x5ComputedData.name" :c-style="tComponentx0x5ComputedData.cStyle" :src="tComponentx0x5ComputedData.src" :component-name="tComponentx0x5ComputedData.componentName"></t-component><t-radio id="t-radio-a1bc.17c92489a" class="airPollutionContent-t-radio-0-6"  :options="tRadiox0x6ComputedData.options" :active="replaceCssVariables(state.timeType, global?.theme || global?.activeTheme || '默认主题')" :alias="tRadiox0x6ComputedData.alias" :disabled="tRadiox0x6ComputedData.disabled" :border="tRadiox0x6ComputedData.border" :size="tRadiox0x6ComputedData.size" :is-use-button="tRadiox0x6ComputedData.isUseButton" :c-style="tRadiox0x6ComputedData.cStyle" @change="onchange1734926609733"></t-radio><t-date-picker id="t-date-picker-fc18.77501441f" class="airPollutionContent-t-date-picker-0-8"  :placeholder="tDatePickerx0x8ComputedData.placeholder" :start-placeholder="tDatePickerx0x8ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x8ComputedData.endPlaceholder" :type="tDatePickerx0x8ComputedData.type" :clearable="tDatePickerx0x8ComputedData.clearable" :range-separator="tDatePickerx0x8ComputedData.rangeSeparator" :default-date="replaceCssVariables(state.selectTimeArr, global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x8ComputedData.separator" :readonly="tDatePickerx0x8ComputedData.readonly" :editable="tDatePickerx0x8ComputedData.editable" :c-style="tDatePickerx0x8ComputedData.cStyle" :disabled-date="replaceCssVariables(state.maxTimeValue, global?.theme || global?.activeTheme || '默认主题')" :is-disabled-front="tDatePickerx0x8ComputedData.isDisabledFront" :placement="tDatePickerx0x8ComputedData.placement" @date-change="ondateChange1734931619383"></t-date-picker></div>
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
import { TComponent, TDatePicker, TRadio, TRect } from '@ths/design';

export default {
  components: {
    TComponent,
    TDatePicker,
    TRadio,
    TRect,
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
   domStyleByAna: {"changedByAna":false,"warningTitleTop":"","warningContentTop":"","pageHeight":"","anaDataLength":0,"operationType":""},
   contributionDataLength: 8,
   maxTimeValue: "",
   analysisTimaRangeData: [],
   monitorTimeValue: "",
   endTime: "",
   startTime: "",
   selectTimeArr: [],
   timeType: "day",
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
            default: {"width":"450px","height":"78px","position":"unset","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","background":"var(--business-query-bg)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"78px","position":"unset","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","background":"var(--business-query-bg)","animationName":""}}}, 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"410px","height":"340px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"990px","animationName":""},
            
            },
 default: { 
 
name:"airPollutionPointWarningComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"340px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"990px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/71ed927f19ff41e78116c906842de342_19/index.html#/airPollutionPointWarning",
componentName:"airPollutionPointWarningComponent", 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"410px","height":"492px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"431px","animationName":""},
            
            },
 default: { 
 
name:"airPollutionContributionComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"492px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"431px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/71ed927f19ff41e78116c906842de342_19/index.html#/airPollutionContribution",
componentName:"airPollutionContributionComponent", 
 },
},
tComponentx0x3: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"384px","animationName":""},
            
            },
 default: { 
 
name:"airPollutionContributionTitleComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"384px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/71ed927f19ff41e78116c906842de342_19/index.html#/airPollutionContributionTitle",
componentName:"airPollutionContributionTitleComponent", 
 },
},
tComponentx0x4: {
defaultStyle: {
            default: {"width":"410px","height":"251px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"97px"},
            
            },
 default: { 
 
name:"airPollutionProcessComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"251px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"97px"}}},
src:"/lego-generated-apps/lego_file/app/src/71ed927f19ff41e78116c906842de342_19/index.html#/airPollutionProcess",
componentName:"airPollutionProcessComponent", 
 },
},
tComponentx0x5: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"19px","top":"946px"},
            
            },
 default: { 
 
name:"airPollutionPointWarningTitleComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"19px","top":"946px"}}},
src:"/lego-generated-apps/lego_file/app/src/71ed927f19ff41e78116c906842de342_19/index.html#/airPollutionPointWarningTitle",
componentName:"airPollutionPointWarningTitleComponent", 
 },
},
tRadiox0x6: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justify-content":"center","width":"150px","height":"22px","position":"unset","left":"18px","top":"40px","animationName":""},
            
            },
 default: { 
 
options:[{"label":"hour","value":"按小时","disabled":false},{"label":"day","value":"按日","disabled":false}],
active:"day",
alias:{"label":"label","value":"value","disabled":"disabled"},
disabled:false,
border:false,
size:"small",
isUseButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justify-content":"center","width":"150px","height":"22px","position":"unset","left":"18px","top":"40px","animationName":""}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"8px"},"active":{"color":"rgba(255, 255, 255, 1)"}},"circle":{"default":{"--el-color-white":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"active":{"--t-radio-active-bg-color":"var(--business-btn-active)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
tDatePickerx0x8: {
defaultStyle: {
            default: {"width":"418px","height":"32px","position":"unset","left":"1269px!important","top":"220px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"418px","height":"32px","position":"unset","left":"1269px!important","top":"220px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","position":"absolute"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
disabledDate:"",
isDisabledFront:false,
placement:"bottom-end", 
 },
},
});
const setProvider = () => {
provide('airPollutionContentState', state);
watch(() => global.regionaQuery.regionCode, () => {
  setDomDefaultPosition();
});
watch([() => state.contributionDataLength, () => state.domStyleByAna.changedByAna], () => {
  function extractNumber(str) {
    const result = str.match(/[-+]?[\d.]+/);
    return result ? parseFloat(result[0]) : null;
  }

  // 是否已经通过污染分析内容改变
  if (state.domStyleByAna.changedByAna && state.domStyleByAna.operationType !== 'analysis') {
    // 1、先设置默认高度、top值（过程分析数据长度影响页面内容后的高度、top值）
    // 当前页面
    setDomHeightValue('t-l-c-airPollutionContent', state.domStyleByAna.pageHeight);
    // 站点报警标题 t-component-eb05.e086dcb85
    setDomTopValue('t-component-eb05.e086dcb85', state.domStyleByAna.warningTitleTop);
    // 站点报警内容 t-component-b5a1.e20c46eb1 1001px
    setDomTopValue('t-component-b5a1.e20c46eb1', state.domStyleByAna.warningContentTop);

    // 2、通过“国控站贡献”数据长度改变页面布局（有数据且小于8条时才处理）
    if (state.contributionDataLength && state.contributionDataLength < 8) {
      // 页面的高度及后两块内容、标题的top值
      const curPageHeight = extractNumber(document.getElementById('t-l-c-airPollutionContent').style.height);
      let pointWarningTitleCompTop = extractNumber(document.getElementById('t-component-eb05.e086dcb85').style.top);
      let pointWarningContentCompTop = extractNumber(document.getElementById('t-component-b5a1.e20c46eb1').style.top);

      // 定位属性top相差值（46+8）
      // 最多展示3个
      const topDifferenceValue = (46 + 8) * (8 - state.contributionDataLength);

      // 当前页面
      setDomHeightValue('t-l-c-airPollutionContent', (curPageHeight - topDifferenceValue) + 'px');
      // 站点报警标题 t-component-eb05.e086dcb85
      setDomTopValue('t-component-eb05.e086dcb85', (pointWarningTitleCompTop - topDifferenceValue) + 'px');
      // 站点报警内容 t-component-b5a1.e20c46eb1 1001px
      setDomTopValue('t-component-b5a1.e20c46eb1', (pointWarningContentCompTop - topDifferenceValue) + 'px');
    }
  }
},
{
  deep: true,
});
};
const handleTImeChange = (timeValue) => {
if (timeValue) {
  state.startTime = state.timeType === 'day' ? timeValue[0] : timeValue[0] + ' 00';
  state.endTime = state.timeType === 'day' ? timeValue[1] : timeValue[1] + ' 23';
  sendTimeMes();
  setDomDefaultPosition();
}
};
const sendTimeMes = () => {
const {
  timeType,
  startTime,
  endTime,
} = state;
// 时间消息-给污染分析过程-html页面用
rootData.rootSocket.emit('message', {
  type: 'airPollutionTime',
  room: global.socketRoom,
  data: {
    timeType,
    startTime,
    endTime,
  },
});
};
const handleTimeMsgData = (msgData) => {
/**
 * msgData中包含的参数：
 * sourceType: 数据来源-空气概况airOverview、污染分析airPollutionAnalysis、清空数据resetData
 * timeType: 时间类型
 * timeValue: 时间值
 * timeRangeData: 时间范围值-主要针对污染分析-点分析时的时间段值；
 * dataLength：数据长度-主要针对污染分析-过程数据
 * operationType：操作类型（analysis）-主要针对污染分析-过程数据
 */
// 改变时间类型 给地图发消息-changeTimeType
// 处理污染分析-污染分析过程发送出来的消息
if (msgData.sourceType === 'airPollutionAnalysis') {
  // 当前时间值（结束时间） state.selectTimeArr[1]
  const curTimeValue = msgData.timeValue || state.endTime;
  state.monitorTimeValue = curTimeValue;
  state.analysisTimaRangeData = msgData.timeRangeData;
  rootData.rootSocket.emit(
    // 固定的消息名称，不能修改
    'message',
    {
      room: global.socketRoom,
      type: 'changeTimeType',
      data: {
        TIME_TYPE: state.timeType,
        POLLUTE: global.air.centerIndexSelect,
        MONITORTIME: curTimeValue,
      },
    }
  );
  global.air.timeValue = curTimeValue;
  // 点击“分析”的时候不做页面布局改变（top值、页面高度值）
  state.domStyleByAna.operationType = msgData.operationType;
  state.domStyleByAna.changedByAna = false;
  // 点击“分析”的时候不做页面布局改变
  if (msgData.operationType !== 'analysis') {
    setDomPosition(msgData.dataLength);
  }

}

};
const setDomPosition = (dataLength) => {
if (dataLength) {
  // 页面的高度及后两块内容、标题的top值（默认值）
  const curPageHeight = 1358;
  const gkTitleCompTop = 384;
  const gkContentCompTop = 431;
  const pointWarningTitleCompTop = 946;
  const pointWarningContentCompTop = 990;

  // 定位属性top相差值（53为每个污染分析内容的内容高度、8为两个间的间距）
  // 最多展示3个
  const topDifferenceValue = (53 + 8) * (3 - dataLength);
  if (dataLength <= 2) {
    // 当前页面
    setDomHeightValue('t-l-c-airPollutionContent', (curPageHeight - topDifferenceValue) + 'px');
    // 国控站贡献标题 t-component-8817.142eb536c
    setDomTopValue('t-component-8817.142eb536c', (gkTitleCompTop - topDifferenceValue) + 'px');
    // 国控站贡献内容  t-component-8dbe.0cc7cc7c
    setDomTopValue('t-component-8dbe.0cc7cc7c', (gkContentCompTop - topDifferenceValue) + 'px');
    // 站点报警标题 t-component-eb05.e086dcb85
    setDomTopValue('t-component-eb05.e086dcb85', (pointWarningTitleCompTop - topDifferenceValue) + 'px');
    // 站点报警内容 t-component-b5a1.e20c46eb1 1001px
    setDomTopValue('t-component-b5a1.e20c46eb1', (pointWarningContentCompTop - topDifferenceValue) + 'px');
  }
}
// 设置top值、页面高度值
state.domStyleByAna.anaDataLength = dataLength;
state.domStyleByAna.warningTitleTop = document.getElementById('t-component-eb05.e086dcb85').style.top;
state.domStyleByAna.warningContentTop = document.getElementById('t-component-b5a1.e20c46eb1').style.top;
state.domStyleByAna.pageHeight = document.getElementById('t-l-c-airPollutionContent').offsetHeight + 'px';
state.domStyleByAna.changedByAna = true;
};
const setDomDefaultPosition = () => {
/**
 * 设置当前页面高度值、后两个内容（国控站贡献、站点报警）的默认定位属性值（top值）
 */
// 当前页面
setDomHeightValue('t-l-c-airPollutionContent', '1358px');
// 国控站贡献标题 t-component-8817.142eb536c
setDomTopValue('t-component-8817.142eb536c', '384px');
// 国控站贡献内容  t-component-8dbe.0cc7cc7c
setDomTopValue('t-component-8dbe.0cc7cc7c', '431px');
// 站点报警标题 t-component-eb05.e086dcb85
setDomTopValue('t-component-eb05.e086dcb85', '946px');
// 站点报警内容 t-component-b5a1.e20c46eb1
setDomTopValue('t-component-b5a1.e20c46eb1', '990px');
};
const handleTimeTypeChange = () => {
const curStartTimeArr = state.startTime.split(' ');
const curEndTimeArr = state.endTime.split(' ');
state.startTime = state.timeType === 'day' ? curStartTimeArr[0] : curStartTimeArr[0] + ' 00';
state.endTime = state.timeType === 'day' ? curEndTimeArr[0] : curEndTimeArr[0] + ' 23';
sendTimeMes();
};
const onchange1734926609733 = (data,selectOption) => {
// 设置变量值
state.timeType = data;
// 设置变量值
state.monitorTimeValue = '';
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'air.timeType',
                    value:data,
                    data: {
                      air:{timeType: data}
                    },
                  });
// 执行自定义方法
handleTimeTypeChange();
// 执行自定义方法
setDomDefaultPosition();
};
const ondateChange1734931602372 = (data) => {
// 执行自定义方法
handleTImeChange(data);
// 设置变量值
state.selectTimeArr = data;
};
const ondateChange1734931619383 = (data) => {
// 设置变量值
state.selectTimeArr = data;
// 执行自定义方法
handleTImeChange(data);
};
// 接口函数
const getLatestTime = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.timeType,"interfaceId":"14a593f5e69542683e6d13bd645326f0"},}).then((res) => {
     // 成功的操作
     state.startTime = '';
state.endTime = '';
state.selectTimeArr = [];
state.maxTimeValue = '';
const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.startTime = data.START_TIME || '';
  state.endTime = data.END_TIME || '';
  state.selectTimeArr = [state.startTime, state.endTime];
  // 设置最大可选时间值
  state.maxTimeValue = state.timeType === 'day' ? (data.END_TIME || '') : (data.END_TIME ? data.END_TIME + ':00' : '');
  sendTimeMes();
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 初始请求，调取接口
getLatestTime();
 function handleWindowResize() {
                            setPageScale('t-l-c-airPollutionContent', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'air.timeType',
                    value:'day',
                    data: {
                      air:{timeType: 'day'}
                    },
                  });
// 执行自定义方法
setProvider();
onMounted(() => {
setPageScale('t-l-c-airPollutionContent', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
/* 接收socket.io消息 */
const onSocketChange1fc8067d65064a6f96a4 = function (data) {
if(data.type === "changeTimeAxisData"){
try{
// 执行自定义方法
handleTimeMsgData(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange1fc8067d65064a6f96a4);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange1fc8067d65064a6f96a4);
});
/* 接收socket.io消息 */
const onSocketChange3916ea61e03749c8ae10 = function (data) {
if(data.type === "changeTime"){
try{
// 设置变量值
state.monitorTimeValue = data.data.MONITORTIME;
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange3916ea61e03749c8ae10);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange3916ea61e03749c8ae10);
});
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tComponentx0x3ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3.default, componentState.tComponentx0x3?.[state.screenSize]));

 const tComponentx0x4ComputedData = computed(() => _.merge({}, componentState.tComponentx0x4.default, componentState.tComponentx0x4?.[state.screenSize]));

 const tComponentx0x5ComputedData = computed(() => _.merge({}, componentState.tComponentx0x5.default, componentState.tComponentx0x5?.[state.screenSize]));

 const tRadiox0x6ComputedData = computed(() => _.merge({}, componentState.tRadiox0x6.default, componentState.tRadiox0x6?.[state.screenSize]));

 const tDatePickerx0x8ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x8.default, componentState.tDatePickerx0x8?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tRectx0x0ComputedData,
tComponentx0x1ComputedData,
tComponentx0x2ComputedData,
tComponentx0x3ComputedData,
tComponentx0x4ComputedData,
tComponentx0x5ComputedData,
tRadiox0x6ComputedData,
tDatePickerx0x8ComputedData,
onchange1734926609733,
ondateChange1734931619383,
};
},
}
</script>

<style scoped>
.t-l-c-airPollutionContent {
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
height: 1358px;
width: 450px;
background-color: rgba(0,0,0,0);
}
.t-l-c-airPollutionContent .airPollutionContent-t-rect-0-0 {
position: absolute !important;
top: 0px;
left: 0px;
width: 450px;
height: 78px;
pointer-events: auto;
}

.t-l-c-airPollutionContent .airPollutionContent-t-component-0-1 {
position: absolute !important;
top: 990px;
left: 20px;
width: 410px;
height: 340px;
pointer-events: auto;
}

.t-l-c-airPollutionContent .airPollutionContent-t-component-0-2 {
position: absolute !important;
top: 431px;
left: 20px;
width: 410px;
height: 492px;
pointer-events: auto;
}

.t-l-c-airPollutionContent .airPollutionContent-t-component-0-3 {
position: absolute !important;
top: 384px;
left: 20px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airPollutionContent .airPollutionContent-t-component-0-4 {
position: absolute !important;
top: 97px;
left: 20px;
width: 410px;
height: 251px;
pointer-events: auto;
}

.t-l-c-airPollutionContent .airPollutionContent-t-component-0-5 {
position: absolute !important;
top: 946px;
left: 19px;
width: 410px;
height: 32px;
pointer-events: auto;
}

.t-l-c-airPollutionContent .airPollutionContent-t-radio-0-6 {
position: absolute !important;
top: 40px;
left: 18px;
width: 150px;
height: 22px;
pointer-events: auto;
}

.t-l-c-airPollutionContent .airPollutionContent-t-date-picker-0-8 {
position: absolute !important;
top: 0px;
left: 16px;
width: 418px;
height: 32px;
pointer-events: auto;
}
</style>
