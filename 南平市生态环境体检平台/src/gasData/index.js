window.gasDataComponent = {
template: 
`<div id="t-l-c-gasData" class="t-l-c-gasData" >` +
`<t-date-picker id="t-date-picker-6cb6.442eec33d" class="gasData-t-date-picker-0-0"  :placeholder="tDatePickerx0x0ComputedData.placeholder" :start-placeholder="tDatePickerx0x0ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x0ComputedData.endPlaceholder" :type="tDatePickerx0x0ComputedData.type" :clearable="tDatePickerx0x0ComputedData.clearable" :range-separator="tDatePickerx0x0ComputedData.rangeSeparator" :default-date="replaceCssVariables(state.rangeDate, global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x0ComputedData.separator" :readonly="tDatePickerx0x0ComputedData.readonly" :editable="tDatePickerx0x0ComputedData.editable" :c-style="tDatePickerx0x0ComputedData.cStyle" @date-change="ondateChange1755842654826">` +
`</t-date-picker>` +
`<t-chart-curve id="t-chart-curve-89a4.6c2c1aec" class="gasData-t-chart-curve-0-1"  :empty-img="tChartCurvex0x1ComputedData.emptyImg" :series-setting="tChartCurvex0x1ComputedData.seriesSetting" :data="replaceCssVariables(state.gasLineData, global?.theme || global?.activeTheme || '默认主题')" :options="tChartCurvex0x1ComputedData.options" :c-style="tChartCurvex0x1ComputedData.cStyle" :y-axis-left-options="tChartCurvex0x1ComputedData.yAxisLeftOptions" :y-axis-right-options="tChartCurvex0x1ComputedData.yAxisRightOptions" :line="componentState.tChartCurvex0x1.line">` +
`</t-chart-curve>` +
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
   gasLineData: [],
   standenterId: "",
   enterName: "",
   endTime: "",
   startTime: "",
   rangeDate: "",
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
tDatePickerx0x0: {
defaultStyle: {
            default: {"width":"278px","height":"33px","position":"unset","left":"-1px","top":"0px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"daterange",
clearable:true,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"278px","height":"33px","position":"unset","left":"-1px","top":"0px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tChartCurvex0x1: {
defaultStyle: {
            default: {"width":"788px","height":"426px","position":"unset","left":"11px","top":"52px","animationName":""},
            
            },
line: computed(() => activeChartTheme.value?.line),
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/emptyImg.png",
seriesSetting:{"xAxisLabel":"time","data":[{"name":"燃气数据","dataKey":"value","style":{"yAxisIndex":0,"lineStyle":{"color":"rgba(170, 146, 146, 1)"},"areaStyle":{"color":{"colorStops":[{"offset":0,"color":"rgba(0,0,0,0)"},{"offset":0,"color":"rgba(0,0,0,0)"}]}}}}]},
data:[],
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"grid":{"right":"10%","left":"5%"},"legend":{"show":true,"textStyle":{"color":"#B7E3FF"}},"tooltip":{"trigger":"axis","axisPointer":{"lineStyle":{"color":"#008acd","width":"1"},"crossStyle":{"color":"#008acd","width":"1"}},"backgroundColor":"rgba(0, 0, 0, 0.8)","borderColor":"rgba(255, 255, 255, 0.5)","textStyle":{"color":"rgba(255, 255, 255, 1)"}},"xAxis":{"axisLine":{"lineStyle":{"color":"rgba(173, 197, 255, 0.6)"}},"axisLabel":{"color":"#B7E3FF"},"nameTextStyle":{"color":"#B7E3FF"},"name":"","nameLocation":"start"}})),
cStyle:{"wrapper":{"default":{"width":"788px","height":"426px","position":"unset","left":"11px","top":"52px","animationName":""}},"emptyText":{"default":{"color":"#fff","fontSize":"16px"}}},
yAxisLeftOptions:{"name":"日用气量对比值","axisLabel":{"color":"#B7E3FF","show":true},"splitLine":{"lineStyle":{"color":"#B7E3FF"},"show":true},"nameTextStyle":{"color":"#B7E3FF"}},
yAxisRightOptions:{"axisLabel":{"color":"#B7E3FF"},"nameTextStyle":{"color":"#B7E3FF"},"name":""}, 
 },
},
});
const initData = () => {
const today = dateFormat(new Date(), 'YYYY-MM-DD');
const yesterday = dateFormat(new Date(new Date().getTime() - 24*60*60*1000*7), 'YYYY-MM-DD');
state.rangeDate = [yesterday, today]
state.standenterId = global.businessDialog.dialogParmas.STANDENTERID;
state.startTime = yesterday;
state.endTime = today;

const init = async () => {
  await getBaseInfo();
  getGasData();
}

init();
};
const setDate = () => {
state.startTime = state.rangeDate[0];
state.endTime = state.rangeDate[1];
};
const ondateChange1755842654826 = (data) => {
// 设置变量值
state.rangeDate = data;
// 执行自定义方法
setDate();
// 事件交互-请求调用接口
getGasData().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
// 接口函数
const getBaseInfo = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"standenterid":state.standenterId,"interfaceId":"43a55db4e5c24e3066362ab0011df033"},}).then((res) => {
     // 成功的操作
     
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  let { data } = res.data;
  state.enterName = data.ENTERNAME || '--';
} 
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getGasData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"endTime":state.endTime,"startTime":state.startTime,"enterName":state.enterName,"interfaceId":"14cec8575d6b5cb809dde3f00a22d388"},}).then((res) => {
     // 成功的操作
     
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  let { data } = res.data;
  state.gasLineData = data.map(item => ({
    time: item.SHOW_TIME,
    value: item.GAS_VAL,
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
                            setPageScale('t-l-c-gasData', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initData();
onMounted(() => {
setPageScale('t-l-c-gasData', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tDatePickerx0x0ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x0.default, componentState.tDatePickerx0x0?.[state.screenSize]));

 const tChartCurvex0x1ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartCurvex0x1.default, componentState.tChartCurvex0x1?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

return {
replaceCssVariables,
global,
state,
componentState,
tDatePickerx0x0ComputedData,
tChartCurvex0x1ComputedData,
ondateChange1755842654826,
};
},
};