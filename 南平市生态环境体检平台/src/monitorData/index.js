window.monitorDataComponent = {
template: 
`<div id="t-l-c-monitorData" class="t-l-c-monitorData" >` +
`<t-select id="t-select-a052.47dcf777b" class="monitorData-t-select-0-0"  :active-value="replaceCssVariables(state.pollutor, global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(state.pollutorList, global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x0ComputedData.alias" :multiple="tSelectx0x0ComputedData.multiple" :placeholder="tSelectx0x0ComputedData.placeholder" :clearable="tSelectx0x0ComputedData.clearable" :disabled="tSelectx0x0ComputedData.disabled" :name="tSelectx0x0ComputedData.name" :autocomplete="tSelectx0x0ComputedData.autocomplete" :filterable="tSelectx0x0ComputedData.filterable" :no-match-text="tSelectx0x0ComputedData.no-match-text" :no-data-text="tSelectx0x0ComputedData.no-data-text" :c-style="tSelectx0x0ComputedData.cStyle" @change="onchange1752199484126">` +
`</t-select>` +
`<t-select id="t-select-f260.869d89e5b" class="monitorData-t-select-0-1"  :active-value="replaceCssVariables(state.station, global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(state.stationList, global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x1ComputedData.alias" :multiple="tSelectx0x1ComputedData.multiple" :placeholder="tSelectx0x1ComputedData.placeholder" :clearable="tSelectx0x1ComputedData.clearable" :disabled="tSelectx0x1ComputedData.disabled" :name="tSelectx0x1ComputedData.name" :autocomplete="tSelectx0x1ComputedData.autocomplete" :filterable="tSelectx0x1ComputedData.filterable" :no-match-text="tSelectx0x1ComputedData.no-match-text" :no-data-text="tSelectx0x1ComputedData.no-data-text" :c-style="tSelectx0x1ComputedData.cStyle" @change="onchange1752199392191">` +
`</t-select>` +
`<t-date-picker id="t-date-picker-1b48.e892f401e" class="monitorData-t-date-picker-0-2"  :placeholder="tDatePickerx0x2ComputedData.placeholder" :start-placeholder="tDatePickerx0x2ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x2ComputedData.endPlaceholder" :type="tDatePickerx0x2ComputedData.type" :clearable="tDatePickerx0x2ComputedData.clearable" :range-separator="tDatePickerx0x2ComputedData.rangeSeparator" :default-date="replaceCssVariables(state.monitorTime, global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x2ComputedData.separator" :readonly="tDatePickerx0x2ComputedData.readonly" :editable="tDatePickerx0x2ComputedData.editable" :c-style="tDatePickerx0x2ComputedData.cStyle" @date-change="ondateChange1752199526758">` +
`</t-date-picker>` +
`<t-text id="t-text-f339.46f7d45c5" class="monitorData-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-f5e3.e386f76d9" class="monitorData-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle">` +
`</t-text>` +
`<t-chart-curve id="t-chart-curve-1f74.64749a6bd" class="monitorData-t-chart-curve-0-5"  :empty-img="tChartCurvex0x5ComputedData.emptyImg" :series-setting="tChartCurvex0x5ComputedData.seriesSetting" :data="replaceCssVariables(state.lineData, global?.theme || global?.activeTheme || '默认主题')" :options="tChartCurvex0x5ComputedData.options" :c-style="tChartCurvex0x5ComputedData.cStyle" :y-axis-left-options="tChartCurvex0x5ComputedData.yAxisLeftOptions" :y-axis-right-options="tChartCurvex0x5ComputedData.yAxisRightOptions" :line="componentState.tChartCurvex0x5.line">` +
`</t-chart-curve>` +
`<t-text id="t-text-ee43.3a6e69413" class="monitorData-t-text-0-6"  :label="replaceCssVariables(state.unit, global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle">` +
`</t-text>` +
`</div>` +
'',
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
const state = Vue.reactive({
   screenSize: "",
   tableSuffix: "",
   unit: "",
   lineData: [],
   pollutorLineData: "",
   electricLineData: "",
   standenterId: "",
   endTime: "",
   startTime: "",
   monitorTime: [],
   pollutor: "",
   pollutorList: [],
   station: "",
   stationList: [],
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
            default: {"width":"160px","height":"33px","position":"unset","left":"311px","top":"0px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:"",
options:[],
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
cStyle:{"wrapper":{"default":{"width":"160px","height":"33px","position":"unset","left":"311px","top":"0px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tSelectx0x1: {
defaultStyle: {
            default: {"width":"161px","height":"33px","position":"unset","left":"67px","top":"0px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:"",
options:[],
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
cStyle:{"wrapper":{"default":{"width":"161px","height":"33px","position":"unset","left":"67px","top":"0px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tDatePickerx0x2: {
defaultStyle: {
            default: {"width":"278px","height":"33px","position":"unset","left":"510px","top":"0px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerangehour",
clearable:true,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"278px","height":"33px","position":"unset","left":"510px","top":"0px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"96px","height":"19px","color":"var(--t-font-color-gy1)","position":"unset","left":"-1px","top":"10px","fontSize":"14px"},
            
            },
 default: { 
 
label:"监测站点：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"19px","color":"var(--t-font-color-gy1)","position":"unset","left":"-1px","top":"10px","fontSize":"14px"}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"122px","height":"19px","color":"var(--t-font-color-gy1)","position":"unset","left":"244px","top":"9px","fontSize":"14px"},
            
            },
 default: { 
 
label:"监测因子：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"122px","height":"19px","color":"var(--t-font-color-gy1)","position":"unset","left":"244px","top":"9px","fontSize":"14px"}}}, 
 },
},
tChartCurvex0x5: {
defaultStyle: {
            default: {"width":"788px","height":"417px","position":"unset","left":"1px","top":"51px"},
            
            },
line: computed(() => activeChartTheme.value?.line),
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/emptyImg.png",
seriesSetting:{"xAxisLabel":"monitorTime","data":[{"name":"废气监测数据","dataKey":"airDataValue","style":{"yAxisIndex":0,"lineStyle":{"color":"rgba(170, 146, 146, 1)"},"areaStyle":{"color":{"colorStops":[{"offset":0,"color":"rgba(0,0,0,0)"},{"offset":0,"color":"rgba(0,0,0,0)"}]}}}},{"name":"电表监测数据","dataKey":"electricDataValue","style":{"yAxisIndex":1,"lineStyle":{},"areaStyle":{"color":{"colorStops":[{"offset":0,"color":"rgba(0,0,0,0)"},{"offset":0,"color":"rgba(0,0,0,0)"}]}}}}]},
data:[],
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"grid":{"right":"10%","left":"5%"},"legend":{"show":true,"textStyle":{"color":"#B7E3FF"}},"tooltip":{"trigger":"axis","axisPointer":{"lineStyle":{"color":"#008acd","width":"1"},"crossStyle":{"color":"#008acd","width":"1"}},"backgroundColor":"rgba(0, 0, 0, 0.8)","borderColor":"rgba(255, 255, 255, 0.5)","textStyle":{"color":"rgba(255, 255, 255, 1)"}},"xAxis":{"axisLine":{"lineStyle":{"color":"rgba(173, 197, 255, 0.6)"}},"axisLabel":{"color":"#B7E3FF"},"nameTextStyle":{"color":"#B7E3FF"}}})),
cStyle:{"wrapper":{"default":{"width":"788px","height":"417px","position":"unset","left":"1px","top":"51px"}},"emptyText":{"default":{"color":"#fff","fontSize":"16px"}}},
yAxisLeftOptions:{"name":"","axisLabel":{"color":"#B7E3FF","show":true},"splitLine":{"lineStyle":{"color":"#B7E3FF"},"show":true},"nameTextStyle":{"color":"#B7E3FF"}},
yAxisRightOptions:{"axisLabel":{"color":"#B7E3FF"},"nameTextStyle":{"color":"#B7E3FF"},"name":"A"}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"85px","height":"21px","color":"var(--business-text-avianize)","position":"unset","left":"37px","top":"61px","fontSize":"14px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"85px","height":"21px","color":"var(--business-text-avianize)","position":"unset","left":"37px","top":"61px","fontSize":"14px"}}}, 
 },
},
});
const initData = () => {
const now = new Date();

const formattedTime = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}`;
console.log(formattedTime); 

const rangeDate = getForwardTimeList(formattedTime, 'hour', 47);
console.log(rangeDate, rangeDate);
state.startTime = rangeDate[0];
state.endTime = rangeDate[rangeDate.length - 1];
state.monitorTime = [state.startTime, state.endTime];
state.standenterId = global.businessDialog.dialogParmas.STANDENTERID;
state.tableSuffix = 'p' + state.startTime.split('-')[0] + state.startTime.split('-')[1]
};
const setMonitorTime = () => {
state.startTime = state.monitorTime[0];
state.endTime = state.monitorTime[1];
};
const getChartsLineData = () => {
state.unit = state.pollutorList.find((item) => item.value === state.pollutor)?.unit;
const getData = async () => {
  await geWasteAirMonitorData();
  await getElectricData();
}

 getData();
};
const handleTimeChange = () => {
state.startTime = state.monitorTime[0];
state.endTime = state.monitorTime[1];
state.tableSuffix = 'p' + state.startTime.split('-')[0] + state.startTime.split('-')[1]
};
const onchange1752199484126 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.pollutor = value;
// 执行自定义方法
getChartsLineData();
};
const onchange1752199392191 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.station = value;
// 事件交互-请求调用接口
getPollutorList().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const ondateChange1752199526758 = (data) => {
// 设置变量值
state.monitorTime = data;
// 执行自定义方法
handleTimeChange();
// 执行自定义方法
getChartsLineData();
};
// 接口函数
const geWasteAirMonitorData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"endtime":state.endTime,"starttime":state.startTime,"projectCode":state.pollutor,"stationCode":state.station,"interfaceId":"aa75c2c7e0587e7868f47e98dd478e83"},}).then((res) => {
     // 成功的操作
     
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  let { data } = res.data;
  state.pollutorLineData = data;
} 
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getStationList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"standenterId":state.standenterId,"interfaceId":"7de16a08624ca6e60dfca7941b50ee72"},}).then((res) => {
     // 成功的操作
     
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  let { data } = res.data;
  state.stationList = data.map((item) => ({
    label: item.STATION_NAME,
    value: item.STATION_CODE
  }))
  state.station = state.stationList[0].value;
  getPollutorList();
} 
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getPollutorList = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"stationCode":state.station,"interfaceId":"4ecd77fb4ee3583498a479da01bd784e"},}).then((res) => {
     // 成功的操作
     
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  let { data } = res.data;
  state.pollutor = '';
  state.pollutorList = data.map(item => ({
    label: item.PROJECTNAME,
    value: item.PROJECTCODE,
    unit: item.PROJECTUNIT
  }))
  state.pollutor = state.pollutorList[0].value;
  state.unit = state.pollutorList[0].unit;
   getChartsLineData();
} 
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getElectricData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"tableSuffix":state.tableSuffix,"endtime":state.endTime,"starttime":state.startTime,"projectCode":state.pollutor,"stationCode":state.station,"interfaceId":"b4439ac0a7bc810ff31ad111acd8a694"},}).then((res) => {
     // 成功的操作
     
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  let { data } = res.data;
  state.electricLineData = data;
  state.lineData = state.pollutorLineData.map(item => ({
    monitorTime: item.SHOW_TIME,
    airDataValue: item.DATA_VALUE_AVG,
    electricDataValue: state.electricLineData.find(item1 => item1.MONITOR_TIME === item.SHOW_TIME)?.DATA_VALUE || '-'
  }));

} 
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-monitorData', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initData();
// 事件交互-请求调用接口
getStationList().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
onMounted(() => {
setPageScale('t-l-c-monitorData', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tSelectx0x0ComputedData = computed(() => _.merge({}, componentState.tSelectx0x0.default, componentState.tSelectx0x0?.[state.screenSize]));

 const tSelectx0x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x1.default, componentState.tSelectx0x1?.[state.screenSize]));

 const tDatePickerx0x2ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x2.default, componentState.tDatePickerx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tChartCurvex0x5ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartCurvex0x5.default, componentState.tChartCurvex0x5?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tSelectx0x0ComputedData,
tSelectx0x1ComputedData,
tDatePickerx0x2ComputedData,
tTextx0x3ComputedData,
tTextx0x4ComputedData,
tChartCurvex0x5ComputedData,
tTextx0x6ComputedData,
onchange1752199484126,
onchange1752199392191,
ondateChange1752199526758,
};
},
};