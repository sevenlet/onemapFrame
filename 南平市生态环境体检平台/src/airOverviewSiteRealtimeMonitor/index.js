window.airOverviewSiteRealtimeMonitorComponent = {
template: 
`<div id="t-l-c-airOverviewSiteRealtimeMonitor" class="t-l-c-airOverviewSiteRealtimeMonitor" >` +
`<t-row id="t-row-c739.cc6a815eb" class="airOverviewSiteRealtimeMonitor-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align">` +
`<t-col id="t-col-28e1.e113afff9" class="airOverviewSiteRealtimeMonitor-t-col-0-0-0"  :span="tColx0x0x0ComputedData.span" :offset="tColx0x0x0ComputedData.offset" :push="tColx0x0x0ComputedData.push" :pull="tColx0x0x0ComputedData.pull" :c-style="tColx0x0x0ComputedData.cStyle">` +
`<t-tabs-base id="t-tabs-base-3c0e.5a8cc13d1" class="airOverviewSiteRealtimeMonitor-t-tabs-base-0-0-0-0"  :data="replaceCssVariables(filterData(state.dateList, componentPropBindingMap?.['t-tabs-base-3c0e.5a8cc13d1']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :space="tTabsBasex0x0x0x0ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.tabSelect, componentPropBindingMap?.['t-tabs-base-3c0e.5a8cc13d1']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x0x0x0ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x0x0x0ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x0x0x0ComputedData.alias" :c-style="tTabsBasex0x0x0x0ComputedData.cStyle" @tab-click="ontabClick1733996453368">` +
`</t-tabs-base>` +
`</t-col>` +
`<t-col id="t-col-e8c6.56e7dba23" class="airOverviewSiteRealtimeMonitor-t-col-0-0-1"  :span="tColx0x0x1ComputedData.span" :offset="tColx0x0x1ComputedData.offset" :push="tColx0x0x1ComputedData.push" :pull="tColx0x0x1ComputedData.pull" :c-style="tColx0x0x1ComputedData.cStyle">` +
`<t-date-picker id="t-date-picker-c174.45d4e20dc" class="airOverviewSiteRealtimeMonitor-t-date-picker-0-0-1-0"  :placeholder="tDatePickerx0x0x1x0ComputedData.placeholder" :start-placeholder="tDatePickerx0x0x1x0ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x0x1x0ComputedData.endPlaceholder" :type="replaceCssVariables(filterData(state.dateType, componentPropBindingMap?.['t-date-picker-c174.45d4e20dc']['type'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :clearable="tDatePickerx0x0x1x0ComputedData.clearable" :range-separator="tDatePickerx0x0x1x0ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.dateValue, componentPropBindingMap?.['t-date-picker-c174.45d4e20dc']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x0x1x0ComputedData.separator" :readonly="tDatePickerx0x0x1x0ComputedData.readonly" :editable="tDatePickerx0x0x1x0ComputedData.editable" :c-style="tDatePickerx0x0x1x0ComputedData.cStyle" :is-disabled-front="tDatePickerx0x0x1x0ComputedData.isDisabledFront" :disabled-date="replaceCssVariables(filterData(state.maxTimeValue, componentPropBindingMap?.['t-date-picker-c174.45d4e20dc']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @date-change="ondateChange1733996734046">` +
`</t-date-picker>` +
`</t-col>` +
`</t-row>` +
`<t-component id="t-component-af20.b174cdac5" class="airOverviewSiteRealtimeMonitor-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :loading="tComponentx0x1ComputedData.loading" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode">` +
`</t-component>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-c739.cc6a815eb":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-28e1.e113afff9":{"attributeName":"tColx0x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-3c0e.5a8cc13d1":{"attributeName":"tTabsBasex0x0x0x0","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-col-e8c6.56e7dba23":{"attributeName":"tColx0x0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-c174.45d4e20dc":{"attributeName":"tDatePickerx0x0x1x0","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-component-af20.b174cdac5":{"attributeName":"tComponentx0x1","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}}};
// 页面内注入全局变量和事件
const rootData = inject('root');
const global = reactive({
...toRefs(rootData)
});
// 路由
const route = useRoute();
// 创建 DOM 引用

// 当前页面使用的变量
const state = Vue.reactive({
   screenSize: "",
   isMinute: "",
   pointType: "",
   dateList: [{"label":"小时","value":"hour"},{"label":"日","value":"day"}],
   maxTimeValue: "",
   POINT_CODE: "",
   dateValue: "",
   dateType: "datetimehour",
   tabSelect: "hour",
   aqiLevel: "",
   aqiData: [{"num":"--","unit":"AQI","color":"#AAA"}],
   firstPollution: "首污：--",
   PM25Data: [{"title":"PM₂.₅","num":"--","unit":"μg/m³","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-13/993839d628174cb8804f4d31d2ba3ba3.png","color":"#AAA"}],
   PM10Data: [{"title":"PM₁₀","num":"--","unit":"μg/m³","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-13/993839d628174cb8804f4d31d2ba3ba3.png","color":"#AAA"}],
   SO2Data: [{"title":"SO₂","num":"--","unit":"μg/m³","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-13/993839d628174cb8804f4d31d2ba3ba3.png","color":"#AAA"}],
   NO2Data: [{"title":"NO₂","num":"--","unit":"μg/m³","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-13/993839d628174cb8804f4d31d2ba3ba3.png","color":"#AAA"}],
   NOData: [{"title":"NO","num":"--","unit":"μg/m³","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-13/993839d628174cb8804f4d31d2ba3ba3.png","color":"#AAA"}],
   COData: [{"title":"CO","num":"--","unit":"mg/m³","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-13/993839d628174cb8804f4d31d2ba3ba3.png","color":"#AAA"}],
   O3Data: [{"title":"O₃","num":"--","unit":"μg/m³","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-13/993839d628174cb8804f4d31d2ba3ba3.png","color":"#AAA"}],
   O38hData: [{"title":"O₃-8h","num":"--","unit":"μg/m³","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-13/993839d628174cb8804f4d31d2ba3ba3.png","color":"#AAA"}],
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
const componentState = Vue.reactive({
tRowx0x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"0px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x0x0: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"left","alignItems":"center"},
            
            },
 default: { 
 
span:12,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"left","alignItems":"center"}}}, 
 },
},
tTabsBasex0x0x0x0: {
defaultStyle: {
            default: {"width":"300px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
data:[{"label":"小时","value":"hour"},{"label":"日","value":"day"}],
space:1,
selectedTabVal:"hour",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":false},
cStyle:{"wrapper":{"default":{"width":"300px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"0px","top":"0px"}},"itemWrapper":{"default":{"width":"80px","height":"32px","fontSize":"var(--business-text-size-14)","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"var(--business-text-size-14)","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"var(--business-text-size-14)","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px"}},"label":{"default":{"fontSize":"var(--text-size-14)","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","fontSize":"var(--text-size-14)"},"hover":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tColx0x0x1: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"},
            
            },
 default: { 
 
span:12,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tDatePickerx0x0x1x0: {
defaultStyle: {
            default: {"width":"296px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimehour",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"296px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important","lineHeight":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-white) !important","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"788px","height":"313px","margin":"0 auto","position":"absolute !important","left":"50%","top":"50%","transform":"translate(-50%, -50%)","zoom":"var(--scalc)"},
            
            },
 default: { 
 
name:"airOverviewSiteRealtimeContentComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"788px","height":"313px","margin":"0 auto","position":"absolute !important","left":"50%","top":"50%","transform":"translate(-50%, -50%)","zoom":"var(--scalc)"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/airOverviewSiteRealtimeContent",
componentName:"airOverviewSiteRealtimeContentComponent",
pageId:"04b85b49512b4907bef0a8bb122706d1",
pageCode:"airOverviewSiteRealtimeContent", 
 },
},
});
const setDateType = (tabType) => {
const getData = async () => {
  // apiRegistry.getMonitoringData.request();
}
switch (tabType) {
  case 'hour': 
    state.dateType = 'datetimehour';
    state.dateValue = global.air.timeType === 'hour' ? global.air.timeValue : global.air.timeValue + ' 00'
    getData();
    break;
  case 'day':
    state.dateType = 'date';
    if(global.air.timeType === 'hour') {
      if(new Date(state.maxTimeValue.slice(0, 10)).getTime() < new Date(state.dateValue.slice(0, 10)).getTime()) {
        state.dateValue = state.maxTimeValue.slice(0, 10);
      } else {
        state.dateValue = state.dateValue.slice(0, 10);
      }
    } else {
      state.dateValue = global.air.timeValue;
    }
    getData();
    break;
  default:
    state.dateType = '';
    state.dateValue = '';
    break;
}


};
const getLevelData = (level) => {
/**
 * 获取等级数据（包括图片、值颜色）
 * level：aqi等级值，1-6，无数据为7
 */
switch (level) {
  case '1':
  case 1:
    return {
      iconUrl: getCssVariable('--business-monitor-bg-level1'),
      color: '#00E400',
    };
  case '2':
  case 2:
    return {
      iconUrl: getCssVariable('--business-monitor-bg-level2'),
      color: '#FFFF00',
    };
  case '3':
  case 3:
    return {
      iconUrl: getCssVariable('--business-monitor-bg-level3'),
      color: '#FF7E00',
    };
  case '4':
  case 4:
    return {
      iconUrl: getCssVariable('--business-monitor-bg-level4'),
      color: '#FF0000',
    };
  case '5':
  case 5:
    return {
      iconUrl: getCssVariable('--business-monitor-bg-level5'),
      color: '#99004C',
    };
  case '6':
  case 6:
    return {
      iconUrl: getCssVariable('--business-monitor-bg-level6'),
      color: '#7E0023',
    };
  case '7':
  case 7:
    return {
      iconUrl: getCssVariable('--business-monitor-bg-no-data'),
      color: '#AAAAAA',
    };
  default:
    return {
      iconUrl: getCssVariable('--business-monitor-bg-no-data'),
      color: '#AAAAAA',
    };
}
};
const init = () => {

state.POINT_CODE = state.airPointState.POINT_CODE || "";
state.pointType = state.airPointState.pointType || "";
state.isMinute = state.airPointState?.isMinute ?? false;
global.air.isMinute = state.airPointState?.isMinute ?? false;
if (state.isMinute) {
  state.dateList = [
    {
      "label": "五分钟",
      "value": "5minute"
    },
    {
      "label": "小时",
      "value": "hour"
    },
    {
      "label": "日",
      "value": "day"
    }
  ]
  // 默认选中分钟
  state.tabSelect = '5minute'
  // 日期选择器类型
  state.dateType = 'datetimeminute'
  // 获取默认值
  state.dateValue = global.airGlobalVariables.realTimeAlarm.dateValue;
} else {
  state.dateList = [
    {
      "label": "小时",
      "value": "hour"
    },
    {
      "label": "日",
      "value": "day"
    }
  ]
  state.dateValue = global.air.timeValue;
  state.tabSelect = global.air.timeType;
  state.dateType = global.air.timeType === 'hour' ? 'datetimehour' : 'date';
  // 全局记录大气站点检测时间类型
  global.airGlobalVariables.monitorTimeType = 'minute';
}

// 微站没有日数据
// if(state.pointType === '4'){
//   const index = state.dateList.findIndex(item =>item.label === '日')
//   if(index > -1){
//     state.dateList.splice(index,1)
//   }
// }
};
const getProvider = () => {
const rootData = inject('airPointState');
state.airPointState = rootData;
};
const updatePollutionData = (dataArray,numValue,levelDataParam) => {
dataArray[0].num = numValue;
const levelData = getLevelData(levelDataParam);
dataArray[0].icon = levelData.iconUrl;
dataArray[0].color = levelData.color;
};
const handleDateType = () => {
switch (state.tabSelect) {
  case '5minute':
    state.dateType = 'datetimeminute';
    break;
  case 'hour':
    state.dateType = 'datetimehour';
    break;
  case 'day':
    state.dateType = 'date';
    break;
  default:
    break;
}
};
const ontabClick1733996453368 = (data) => {
// 设置变量值
state.tabSelect = data.value;
// 执行自定义方法
handleDateType();
// 事件交互-请求调用接口
apiRegistry.getLastTime.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "changeParamsRealTimeMoniter", // 消息名称
data: {"data":data.value,"type":"tab"}, // 发送的数据
});
};
const ondateChange1733996734046 = (data) => {
// 设置变量值
state.dateValue = data;
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "changeParamsRealTimeMoniter", // 消息名称
data: {"data":data,"type":"date"}, // 发送的数据
});
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getLastTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.POINT_CODE","POINT_TYPE":"state.pointType","TIME_TYPE":"state.tabSelect","interfaceId":"66ad2ebe9d660295568b05187f34e133"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.POINT_CODE,"POINT_TYPE":state.pointType,"TIME_TYPE":state.tabSelect,"interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.POINT_CODE,"POINT_TYPE":state.pointType,"TIME_TYPE":state.tabSelect,"interfaceId":"66ad2ebe9d660295568b05187f34e133"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLastTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  // 当前最新时间
  // state.maxTimeValue = data?.MONITORTIME || ''
  state.dateValue = data?.MONITORTIME || ''
}else{
  // state.maxTimeValue = ''
  state.dateValue = ''
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.dateValue = '';
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewSiteRealtimeMonitor', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
// 执行自定义方法
init();
onMounted(() => {
setPageScale('t-l-c-airOverviewSiteRealtimeMonitor', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tColx0x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0x0.default, componentState.tColx0x0x0?.[state.screenSize]));

 const tTabsBasex0x0x0x0ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x0x0x0.default, componentState.tTabsBasex0x0x0x0?.[state.screenSize]));

 const tColx0x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x0x1.default, componentState.tColx0x0x1?.[state.screenSize]));

 const tDatePickerx0x0x1x0ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x0x1x0.default, componentState.tDatePickerx0x0x1x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

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
tColx0x0x0ComputedData,
tTabsBasex0x0x0x0ComputedData,
tColx0x0x1ComputedData,
tDatePickerx0x0x1x0ComputedData,
tComponentx0x1ComputedData,
ontabClick1733996453368,
ondateChange1733996734046,
};
},
};