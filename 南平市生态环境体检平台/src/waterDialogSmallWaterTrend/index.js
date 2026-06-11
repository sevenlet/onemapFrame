window.waterDialogSmallWaterTrendComponent = {
template: 
`<div id="t-l-c-waterDialogSmallWaterTrend" class="t-l-c-waterDialogSmallWaterTrend" >` +
`<t-select id="t-select-ee9f.bf9455a04" class="waterDialogSmallWaterTrend-t-select-0-0"  :active-value="replaceCssVariables(filterData(state.params.pollutants, componentPropBindingMap?.['t-select-ee9f.bf9455a04']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.options.pollutants, componentPropBindingMap?.['t-select-ee9f.bf9455a04']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x0ComputedData.alias" :multiple="tSelectx0x0ComputedData.multiple" :placeholder="tSelectx0x0ComputedData.placeholder" :clearable="tSelectx0x0ComputedData.clearable" :disabled="tSelectx0x0ComputedData.disabled" :name="tSelectx0x0ComputedData.name" :autocomplete="tSelectx0x0ComputedData.autocomplete" :filterable="tSelectx0x0ComputedData.filterable" :no-match-text="tSelectx0x0ComputedData.no-match-text" :no-data-text="tSelectx0x0ComputedData.no-data-text" :c-style="tSelectx0x0ComputedData.cStyle" @change="onchange1734159936716">` +
`</t-select>` +
`<t-text id="t-text-8f2e.58316ed1d" class="waterDialogSmallWaterTrend-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle">` +
`</t-text>` +
`<t-switch id="t-switch-5d48.72ababdbd" class="waterDialogSmallWaterTrend-t-switch-0-2"  :value="tSwitchx0x2ComputedData.value" :c-style="tSwitchx0x2ComputedData.cStyle" @change="onchange1734160214280">` +
`</t-switch>` +
`<t-date-picker id="t-date-picker-cad2.abd345996" class="waterDialogSmallWaterTrend-t-date-picker-0-3"  :placeholder="tDatePickerx0x3ComputedData.placeholder" :start-placeholder="tDatePickerx0x3ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x3ComputedData.endPlaceholder" :type="tDatePickerx0x3ComputedData.type" :clearable="tDatePickerx0x3ComputedData.clearable" :range-separator="tDatePickerx0x3ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.params.time.range, componentPropBindingMap?.['t-date-picker-cad2.abd345996']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x3ComputedData.separator" :readonly="tDatePickerx0x3ComputedData.readonly" :editable="tDatePickerx0x3ComputedData.editable" :c-style="tDatePickerx0x3ComputedData.cStyle" @date-change="ondateChange1734160159774">` +
`</t-date-picker>` +
`<t-text id="t-text-740f.85d1d67c6" class="waterDialogSmallWaterTrend-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle">` +
`</t-text>` +
`<t-text-common id="t-text-common-711f.2b283b5de" class="waterDialogSmallWaterTrend-t-text-common-0-5"  :label="tTextCommonx0x5ComputedData.label" :editable="tTextCommonx0x5ComputedData.editable" :c-style="tTextCommonx0x5ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-b0ad.6d9f3046" class="waterDialogSmallWaterTrend-t-text-common-0-6"  :label="tTextCommonx0x6ComputedData.label" :editable="tTextCommonx0x6ComputedData.editable" :c-style="tTextCommonx0x6ComputedData.cStyle">` +
`</t-text-common>` +
`<t-chart-design v-if="state.chartShow === true" id="t-chart-design-be6d.d19353f72" class="waterDialogSmallWaterTrend-t-chart-design-0-7"  :register-map-name="tChartDesignx0x7ComputedData.registerMapName" :geo-json="tChartDesignx0x7ComputedData.geoJson" :empty-img="tChartDesignx0x7ComputedData.emptyImg" :c-style="tChartDesignx0x7ComputedData.cStyle" :options="replaceCssVariables(filterData(state.lineChartOption, componentPropBindingMap?.['t-chart-design-be6d.d19353f72']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @get-chart-instance="ongetChartInstance1764054267914">` +
`</t-chart-design>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-select-ee9f.bf9455a04":{"attributeName":"tSelectx0x0","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-text-8f2e.58316ed1d":{"attributeName":"tTextx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-switch-5d48.72ababdbd":{"attributeName":"tSwitchx0x2","value":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-cad2.abd345996":{"attributeName":"tDatePickerx0x3","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-740f.85d1d67c6":{"attributeName":"tTextx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-711f.2b283b5de":{"attributeName":"tTextCommonx0x5","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-b0ad.6d9f3046":{"attributeName":"tTextCommonx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-design-be6d.d19353f72":{"attributeName":"tChartDesignx0x7","registerMapName":{"filters":[]},"geoJson":{"filters":[]},"emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}}};
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
   pageType: 0,
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
   params: {"time":{"start":"","end":"","range":[]},"monitor":"","interfaceId":"f5a13b25067b52a45d626d1f0284372d","pointcode":"3507001047","monitorType":"1","pollutants":"W01019","SECTION_SCOPE":0},
   options: {"standards":[],"pollutants":[]},
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
tSelectx0x0: {
defaultStyle: {
            default: {"width":"157px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},
            
            },
 default: { 
 
activeValue:"W01019",
options:[],
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
cStyle:{"wrapper":{"default":{"width":"157px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"66px","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"709px","top":"42px","fontSize":"var(--business-text-size-14)","lineHeight":"22px","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
label:"标准值",
editable:false,
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"709px","top":"42px","fontSize":"var(--business-text-size-14)","lineHeight":"22px","animationName":"","textAlign":"right"}}}, 
 },
},
tSwitchx0x2: {
defaultStyle: {
            default: {"width":"32px","height":"22px","animationName":"","right":"0"},
            
            },
 default: { 
 
value:false,
cStyle:{"wrapper":{"default":{"width":"32px","height":"22px","animationName":"","right":"0"}},"core":{"default":{"backgroundColor":"var(--t-switch-bg)","width":"32px","height":"20px","borderLeft":"0px solid var(--t-switch-bg)","borderTop":"0px solid var(--t-switch-bg)","borderRight":"0px solid var(--t-switch-bg)","borderBottom":"0px solid var(--t-switch-bg)"},"active":{"backgroundColor":"var(--t-switch-bg-selected)","borderLeft":"0px solid var(--t-switch-bg)","borderTop":"0px solid var(--t-switch-bg)","borderRight":"0px solid var(--t-switch-bg)","borderBottom":"0px solid var(--t-switch-bg)"}},"action":{"default":{"width":"15px","height":"15px","top":"2px","left":"2px","marginRight":"0px","backgroundColor":""},"active":{"right":"10px","left":"27px","top":"2px","backgroundColor":"#fff","marginRight":"0px","marginLeft":"-14px"}}}, 
 },
},
tDatePickerx0x3: {
defaultStyle: {
            default: {"width":"290px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerangehour",
clearable:false,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"290px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important","lineHeight":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-white) !important","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"300px","top":"10px","fontSize":"var(--business-text-size-14)","lineHeight":"14px","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
label:"时间",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"300px","top":"10px","fontSize":"var(--business-text-size-14)","lineHeight":"14px","animationName":"","textAlign":"right"}}}, 
 },
},
tTextCommonx0x5: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-16)","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"2px","top":"7px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"污染物浓度变化趋势",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-16)","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"2px","top":"7px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tTextCommonx0x6: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"#c1cee1","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"2px","top":"42px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"浓度（mg/L）",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"#c1cee1","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"2px","top":"42px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tChartDesignx0x7: {
defaultStyle: {
            default: {"height":"391px","width":"864px","top":"29px","left":"-35px","position":"unset","pointerEvents":"auto"},
            
            },
 default: { 
 
registerMapName:"",
geoJson:{},
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"391px","width":"864px","top":"29px","left":"-35px","position":"unset","pointerEvents":"auto"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"emptyImg":{"default":{"display":"none"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
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

let timerId = null;

apiRegistry.getLineChartData.request()
  .then(() => {
    if (timerId) {
      clearTimeout(timerId);
    }
    
    timerId = setTimeout(() => {
      changeStandard(state.isBz);
      timerId = null;
    }, 0);
  })
  .catch(error => {
    console.error('请求失败:', error);
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
  });

};
const handleMonitorSelect = (item) => {
if (item.value === 'W21011') { // 总磷
  state.params.SECTION_SCOPE = 1
} else {
  state.params.SECTION_SCOPE = 0
}
console.log('item', item)
state.params.pollutants = item.value;
state.yAxisUnit = item.unit || '';

apiRegistry.getStandardValues.request()
  .then(() => {
    let timerId = null;

    apiRegistry.getLineChartData.request()
      .then(() => {
        if (timerId) {
          clearTimeout(timerId);
        }
        
        timerId = setTimeout(() => {
          changeStandard(state.isBz);
          timerId = null;
        }, 0);
      })
      .catch(error => {
        console.error('请求失败:', error);
        if (timerId) {
          clearTimeout(timerId);
          timerId = null;
        }
      });
  })

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
// getTimeValue();
// apiRegistry.getLastTime.request();
let endTime = global?.businessDialog?.dialogParmas?.monitorTime || '';

if (!endTime) {
  // 获取当前时间
  const now = new Date();
  const currentHour = now.getHours();
  
  // 将小时调整为4小时的倍数（向下取整）
  // 例如：0,4,8,12,16,20
  const adjustedHour = Math.floor(currentHour / 4) * 4;
  
  // 设置调整后的小时
  now.setHours(adjustedHour, 0, 0, 0);
  
  // 格式化为 yyyy-MM-dd HH
  endTime = dateFormat(now, 'yyyy-MM-dd HH');
}


if (endTime) {
  // 将字符串时间转换为Date对象
  const [year, month, day, hour] = endTime.split(/[- :]/);
  const endDate = new Date(year, month - 1, day, hour);

  // 往前推47小时
  // const startDate = new Date(endDate.getTime() - 47 * 60 * 60 * 1000);

  // 腾讯文档需求改成72小时
  const startDate = new Date(endDate.getTime() - 72 * 60 * 60 * 1000);

  // 格式化开始时间
  const startTime = dateFormat(startDate, 'yyyy-MM-dd HH');

  // 赋值参数
  state.params.time.range = [String(startTime) || '', String(endTime) || ''];
  state.params.time.start = startTime || '';
  state.params.time.end = endTime || '';
}


let timerId = null;

// 获取下拉选项后请求数据
const getData = async () => {
  await apiRegistry.getDicSelectData.request();
  await apiRegistry.getStandardValues.request();

  apiRegistry.getLineChartData.request()
    .then(() => {
      if (timerId) {
        clearTimeout(timerId);
      }

      timerId = setTimeout(() => {
        changeStandard(state.isBz);
        timerId = null;
      }, 0);
    })
    .catch(error => {
      console.error('请求失败:', error);
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
    });
}

// 获取数据
getData();


//  设置默认数据（接口无数据时展示）
// setTimeout(() => {
//   const setDefaultData = () => {
//   const defaultXAxisData = ['01日00时', '01日02时', '01日04时', '01日06时', '01日08时', '01日10时',
//     '01日12时', '01日14时', '01日16时', '01日18时', '01日20时', '01日22时',
//     '02日00时', '02日02时', '02日04时', '02日06时', '02日08时', '02日10时',
//     '02日12时', '02日14时', '02日16时', '02日18时', '02日20时', '02日22时'];
//   const defaultSeriesData = [
//     3.2, 3.5, 3.1, 2.8, 3.4, 3.6, 3.9, 4.1, 3.8, 3.5, 3.3, 3.1,
//     3.4, 3.7, 3.2, 2.9, 3.5, 3.8, 4.0, 3.6, 3.3, 3.1, 3.4, 3.7
//   ];
//   const defaultStandardData = defaultXAxisData.map(() => ({
//     value: 6.0,
//     hiddenInTooltip: true,
//   }));
  
//   state.lineChartOption.xAxis.data = defaultXAxisData;
//   state.seriesData = [{
//     name: '当前断面',
//     data: defaultSeriesData,
//   }];
//   state.standardSeriesData = [{
//     xAxisIndex: 0,
//     yAxisIndex: 0,
//     ...handleStandardSeries('Ⅲ类标准值', '#8FCDFF'),
//     data: defaultStandardData,
//   }];
  
//   changeStandard(false);
//   };

//     // 设置默认数据（接口无数据时展示）
//   setDefaultData();
// }, 3000)
};
const setNoData = () => {
// 设置暂无数据图标
state.noDataImg = getCssVariable('--business-no-data-img');
};
const setOptions = () => {
const chartLabelFontSize = parseInt(getCssVariable('--business-text-size-12')) || 12
const chartNameFontSize = parseInt(getCssVariable('--business-text-size-14')) || 14
const chartTooltipFontSize = parseInt(getCssVariable('--business-text-size-14')) || 14

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
      "right": "5%",
      top: '16%',
      bottom: '14%',
      containLabel: true,
      backgroundColor: 'rgba(84, 112, 198, 0.1)'  // 当前断面区域背景色
    }
  ],

  "xAxis": {
    "type": "category",
    "axisLabel": {
      "color": "var(--skin-font-color-80)",
      // "fontSize": 12,
      "fontSize": chartLabelFontSize,
      //"rotate": 15,
    },
    "axisLine": { show: false },
    "axisTick": { show: false },
    "nameTextStyle": {
      "color": "var(--skin-font-color-60)",
      // "fontSize": 13
      "fontSize": chartLabelFontSize
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
    "pageIconColor": "var(--skin-font-color-80)", // 翻页按钮颜色
    "pageIconInactiveColor": "var(--skin-font-color-40)", // 翻页按钮禁用颜色
    "pageIconSize": 12, // 翻页按钮大小
    "pageTextStyle": {
      "color": "var(--skin-font-color-80)"
    },
    "icon": "rect",
    "itemWidth": 12,
    "itemHeight": 4,
    "textStyle": {
      "color": "var(--skin-font-color-80)",
      // "fontSize": 14,
      "fontSize": chartNameFontSize,
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
        "color": "var(--skin-font-color-80)",
        // "fontSize": 13,
        "fontSize": chartNameFontSize,
        "formatter": function (value) {
          return value.toFixed(2);
        }
      },
      "nameTextStyle": {
        "color": "var(--skin-font-color-80)",
        "align": "center",
        "padding": [0, 0, 0, 0],
        // "fontSize": 13
        "fontSize": chartNameFontSize
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
// 获取当前时间并格式化为 yyyy-MM-dd HH 格式
const now = new Date();
const endTime = dateFormat(now, 'yyyy-MM-dd HH');

// 获取1天前的时间（到小时）
const startTime = dateFormat(new Date(now.getTime() - 23 * 60 * 60 * 1000), 'yyyy-MM-dd HH');

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
  const myChart = state.myChart;
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
const changeChart = (chart) => {
state.myChart = chart
};
const setZIndexStyle = () => {
const componentDom = document.querySelector('#t-l-c-waterDialogSmallWaterTrend')
const styles = document.createElement('style')
styles.innerHTML = `
.t-switch .el-switch{
  z-index: 99 !important
}
`
componentDom.append(styles)
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
};
const ongetChartInstance1764054267914 = (chart) => {
// 设置变量值
state.myChart = _.cloneDeep(chart);
// 执行自定义方法
changeChart(chart);
// 执行自定义方法
handleChartMouseMove();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getDicSelectData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TREE_CODE":"SMALL_WATER_POLLUTE","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TREE_CODE":"SMALL_WATER_POLLUTE","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TREE_CODE":"SMALL_WATER_POLLUTE","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getDicSelectData'] = res.data;
                
     // state.options.pollutants = [];
if (res.data.head.statusCode === '200' && res.data?.data?.length) {
  state.options.pollutants = res.data.data.map(i => ({
    "value": i.DICTIONARYCODE,
    "label": handleCharFormat(i.DICTIONARYNAME),
    "unit": i.EXT1,
  }));
  state.params.pollutants = state.options.pollutants[0].value || "";
  state.yAxisUnit = state.options.pollutants[0].unit || "";
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // state.options.pollutants = [];
// state.params.pollutants = '';
// state.yAxisUnit = '';

      reject(error);
    });
  });
},
              },
// 接口函数
 getLineChartData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TIME_TYPE":"HOUR","pageNum":"1","pageSize":"2000","END_TIME":"state.params.time.end","START_TIME":"state.params.time.start","POINT_CODE":"state.params.pointcode","interfaceId":"82121e102cbbe37cb2c1834165573fcf"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":"HOUR","pageNum":"1","pageSize":"2000","END_TIME":state.params.time.end,"START_TIME":state.params.time.start,"POINT_CODE":state.params.pointcode,"interfaceId":"82121e102cbbe37cb2c1834165573fcf"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TIME_TYPE":"HOUR","pageNum":"1","pageSize":"2000","END_TIME":state.params.time.end,"START_TIME":state.params.time.start,"POINT_CODE":state.params.pointcode,"interfaceId":"82121e102cbbe37cb2c1834165573fcf"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLineChartData'] = res.data;
                
     const chartDataKeyMap = {
  0: {
    series: 'seriesData',
    standard: 'standardSeriesData',
  },
}
state[chartDataKeyMap[state.pageType].series] = [];
state[chartDataKeyMap[state.pageType].standard] = [];
state.lineChartOption.xAxis.data = [];
handleChartAxisLabel();
state.lineChartOption.legend.data = [];

if (res.status === 200 && res?.data?.data?.length) {
  const { data } = res.data;

  console.log('state.options.standards', state.options.standards)

  // 动态添加标准值 - 根据 state.options.standards
  data.forEach(item => {
    // 清空之前的标准值
    Object.keys(item).forEach(key => {
      if (key.startsWith('STANDARD_')) {
        delete item[key];
      }
    });
    
    // 动态添加标准值
    if (state.options.standards && state.options.standards.length) {
      state.options.standards.forEach((standard, index) => {
        if (standard.value) { // 只添加有值的标准
          item[`STANDARD_${index + 1}`] = standard.value;
        }
      });
    }
  });
  
  // x轴数据
  const xAxisData = [];
  // 图例数据
  const legendData = [];
  // 动态生成标准值映射
  const standardLineMap = {};
  
  // 初始化 standardLineMap
  if (state.options.standards && state.options.standards.length) {
    state.options.standards.forEach((standard, index) => {
      if (standard.value) {
        standardLineMap[`STANDARD_${index + 1}`] = [];
      }
    });
  }
  
  // 系列数据
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
  
  const filterRepeatData = (valueArr, onlyKey) => {
    const resValue = new Map();
    return valueArr.filter((valueItem) => !resValue.has(valueItem[onlyKey]) && resValue.set(valueItem[onlyKey], 1));
  };
  
  // 污染物
  if (state.params.monitor !== 'W01001') {
    // 动态生成标准线配置
    const standardSeriesConfigs = [];
    const standardColors = ['#8FCDFF', '#0280F6', '#00DA2A', '#F6C200', '#FC926A', '#FF0000']; // 可以扩展更多颜色
    
    if (state.options.standards && state.options.standards.length) {
      state.options.standards.forEach((standard, index) => {
        if (standard.value && standard.label) {
          const standardKey = `STANDARD_${index + 1}`;
          standardSeriesConfigs.push({
            name: `${standard.label}标准值`,
            color: standardColors[index] || standardColors[0], // 使用预设颜色，如果不够用第一个
            data: standardLineMap[standardKey] || []
          });
        }
      });
    }

    standardSeriesConfigs.forEach((config) => {
      const filteredData = filterRepeatData(config.data, 'wholeTime');
      const validData = Array.isArray(filteredData) ? filteredData : [];
      
      state[chartDataKeyMap[state.pageType].standard].push({
        xAxisIndex: 0,
        yAxisIndex: 0,
        ...handleStandardSeries(config.name, config.color),
        data: validData,
      });
    });
  }

  // ph
  if (state.params.monitor === 'W01001') {
    state[chartDataKeyMap[state.pageType].standard].push({
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

  state.lineChartOption.xAxis.data = times;

  if (state.pageType === 1) {
    state.upstreamseriesData = seriesData;
  } else if (state.pageType === 2) {
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

  console.log(state.lineChartOption, '__________________')
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
// 接口函数
 getStandardValues: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"SECTION_SCOPE":"state.params.SECTION_SCOPE","POLLUTE_CODE":"state.params.pollutants","interfaceId":"028be138ebc011420fe6a6c9091a8df1"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"SECTION_SCOPE":state.params.SECTION_SCOPE,"POLLUTE_CODE":state.params.pollutants,"interfaceId":"028be138ebc011420fe6a6c9091a8df1"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"SECTION_SCOPE":state.params.SECTION_SCOPE,"POLLUTE_CODE":state.params.pollutants,"interfaceId":"028be138ebc011420fe6a6c9091a8df1"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getStandardValues'] = res.data;
                
     state.options.standards = [];
if (res.data.head.statusCode === '200' && res.data?.data?.length) {
  state.options.standards = res.data.data
    .filter(i => i.MAX_VALUE !== null && i.MAX_VALUE !== undefined && i.MAX_VALUE !== '')
    .map(i => ({
      "value": i.MAX_VALUE,
      "label": i.WATER_LEVEL_NAME,
    }));
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.options.pollutants = [];
state.params.pollutants = '';
state.yAxisUnit = '';

      reject(error);
    });
  });
},
              },
// 接口函数
 getLastTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.params.pointcode","a":"1","CODE_WQDATASOURCETYPE":"surfaceWater","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"f6d8b19a9c1adf2d493f18b21a232c5d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.params.pointcode,"a":"1","CODE_WQDATASOURCETYPE":"surfaceWater","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"f6d8b19a9c1adf2d493f18b21a232c5d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.params.pointcode,"a":"1","CODE_WQDATASOURCETYPE":"surfaceWater","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"f6d8b19a9c1adf2d493f18b21a232c5d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLastTime'] = res.data;
                
     const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {  
  
  const endTime = data.data.MONITORTIME || '';
  
  if (endTime) {
    // 将字符串时间转换为Date对象
    const [year, month, day, hour] = endTime.split(/[- :]/);
    const endDate = new Date(year, month - 1, day, hour);
    
    // 往前推47小时
    // const startDate = new Date(endDate.getTime() - 47 * 60 * 60 * 1000);

    // 腾讯文档需求改成72小时
    const startDate = new Date(endDate.getTime() - 72 * 60 * 60 * 1000);
    
    // 格式化开始时间
    const startTime = dateFormat(startDate, 'yyyy-MM-dd HH');
    
    // 赋值参数
    state.params.time.range = [String(startTime) || '', String(endTime) || ''];
    state.params.time.start = startTime || '';
    state.params.time.end = endTime || '';
  }
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.waterMonitoringState.curTimeDay = '';
state.waterMonitoringState.curTimeHour = '';
state.curTime = ''
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-waterDialogSmallWaterTrend', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-waterDialogSmallWaterTrend', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
initPage();
// 执行自定义方法
setZIndexStyle();
});
// 执行自定义方法
setOptions();
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tSelectx0x0ComputedData = computed(() => _.merge({}, componentState.tSelectx0x0.default, componentState.tSelectx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tSwitchx0x2ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x2.default, componentState.tSwitchx0x2?.[state.screenSize]));

 const tDatePickerx0x3ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x3.default, componentState.tDatePickerx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tTextCommonx0x5ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x5.default, componentState.tTextCommonx0x5?.[state.screenSize]));

 const tTextCommonx0x6ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x6.default, componentState.tTextCommonx0x6?.[state.screenSize]));

 const tChartDesignx0x7ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x7.default, componentState.tChartDesignx0x7?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

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
tSelectx0x0ComputedData,
tTextx0x1ComputedData,
tSwitchx0x2ComputedData,
tDatePickerx0x3ComputedData,
tTextx0x4ComputedData,
tTextCommonx0x5ComputedData,
tTextCommonx0x6ComputedData,
tChartDesignx0x7ComputedData,
onchange1734159936716,
onchange1734160214280,
ondateChange1734160159774,
ongetChartInstance1764054267914,
};
},
};