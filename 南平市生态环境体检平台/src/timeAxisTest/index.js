window.timeAxisTestComponent = {
template: 
`<div id="t-l-c-timeAxisTest" class="t-l-c-timeAxisTest" >` +
`<t-timeline-base v-if="state.timeAxisData.length !== 0" id="t-timeline-base-19f5.2aa7dc2c1" class="timeAxisTest-t-timeline-base-0-0"  :time-data="state.timeAxisData" :control-button-info="tTimelineBasex0x0ComputedData.controlButtonInfo" :second-tick="tTimelineBasex0x0ComputedData.secondTick" :time-colors="tTimelineBasex0x0ComputedData.timeColors" :cur-time="state.timeAxisSelect" :auto-play="tTimelineBasex0x0ComputedData.autoPlay" :loop="tTimelineBasex0x0ComputedData.loop" :play-interval="tTimelineBasex0x0ComputedData.playInterval" :interval="tTimelineBasex0x0ComputedData.interval" :step-button-visible="tTimelineBasex0x0ComputedData.stepButtonVisible" :inverse="tTimelineBasex0x0ComputedData.inverse" :immediate-trigger="tTimelineBasex0x0ComputedData.immediateTrigger" :step-button-color="tTimelineBasex0x0ComputedData.stepButtonColor" :c-style="tTimelineBasex0x0ComputedData.cStyle" @time-change="ontimeChange1734663371565">` +
`</t-timeline-base>` +
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
   isSendChangeTimeMes: false,
   timeAxisData: ["2024-12-29 07","2024-12-29 08","2024-12-29 09","2024-12-29 10","2024-12-29 11","2024-12-29 12","2024-12-29 13","2024-12-29 14","2024-12-29 15","2024-12-29 16","2024-12-29 17","2024-12-29 18","2024-12-29 19","2024-12-29 20","2024-12-29 21","2024-12-29 22","2024-12-29 23","2024-12-30 00","2024-12-30 01","2024-12-30 02","2024-12-30 03","2024-12-30 04","2024-12-30 05","2024-12-30 06","2024-12-30 07","2024-12-30 08","2024-12-30 09","2024-12-30 10","2024-12-30 11","2024-12-30 12","2024-12-30 13","2024-12-30 14","2024-12-30 15","2024-12-30 16","2024-12-30 17","2024-12-30 18","2024-12-30 19","2024-12-30 20","2024-12-30 21","2024-12-30 22","2024-12-30 23","2024-12-31 00","2024-12-31 01","2024-12-31 02","2024-12-31 03","2024-12-31 04","2024-12-31 05","2024-12-31 06"],
   timeAxisSelect: "2024-12-30 00",
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
tTimelineBasex0x0: {
defaultStyle: {
            default: {"width":"1150px","height":"76px","top":"24px","left":"0px","backgroundColor":"var(--business-panel-bg)","borderTopLeftRadius":"33px","borderTopRightRadius":"33px","borderBottomLeftRadius":"33px","borderBottomRightRadius":"33px","borderLeft":"2px solid var(--business-show-bg30)","borderTop":"2px solid var(--business-show-bg30)","borderRight":"2px solid var(--business-show-bg30)","borderBottom":"2px solid var(--business-show-bg30)","position":"unset","paddingTop":"0px"},
            
            },
 default: { 
 
timeData:["2024-12-29 07","2024-12-29 08","2024-12-29 09","2024-12-29 10","2024-12-29 11","2024-12-29 12","2024-12-29 13","2024-12-29 14","2024-12-29 15","2024-12-29 16","2024-12-29 17","2024-12-29 18","2024-12-29 19","2024-12-29 20","2024-12-29 21","2024-12-29 22","2024-12-29 23","2024-12-30 00","2024-12-30 01","2024-12-30 02","2024-12-30 03","2024-12-30 04","2024-12-30 05","2024-12-30 06","2024-12-30 07","2024-12-30 08","2024-12-30 09","2024-12-30 10","2024-12-30 11","2024-12-30 12","2024-12-30 13","2024-12-30 14","2024-12-30 15","2024-12-30 16","2024-12-30 17","2024-12-30 18","2024-12-30 19","2024-12-30 20","2024-12-30 21","2024-12-30 22","2024-12-30 23","2024-12-31 00","2024-12-31 01","2024-12-31 02","2024-12-31 03","2024-12-31 04","2024-12-31 05","2024-12-31 06"],
controlButtonInfo:{"playImgUrl":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-20/b6d7b52010d3415b90335bc266c109bf.png","pauseImgUrl":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-20/3e0cd813eee6470bb956f0ea30cfbde1.png","hoverPlayUrl":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-20/b6d7b52010d3415b90335bc266c109bf.png","hoverPauseUrl":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-20/3e0cd813eee6470bb956f0ea30cfbde1.png"},
secondTick:false,
timeColors:[],
curTime:"2024-12-30 00",
autoPlay:false,
loop:false,
playInterval:3000,
interval:0,
stepButtonVisible:false,
inverse:false,
immediateTrigger:false,
stepButtonColor:{"default":"#dee2e8","hover":"#02d6db","disable":"#3b5a84"},
cStyle:{"wrapper":{"default":{"width":"1150px","height":"76px","top":"24px","left":"0px","backgroundColor":"var(--business-panel-bg)","borderTopLeftRadius":"33px","borderTopRightRadius":"33px","borderBottomLeftRadius":"33px","borderBottomRightRadius":"33px","borderLeft":"2px solid var(--business-show-bg30)","borderTop":"2px solid var(--business-show-bg30)","borderRight":"2px solid var(--business-show-bg30)","borderBottom":"2px solid var(--business-show-bg30)","position":"unset","paddingTop":"0px"}},"controlButtonPlay":{"default":{"width":"42px","height":"42px","marginTop":"0px"}},"controlButtonPause":{"default":{"width":"42px","height":"42px","marginTop":"0px"}},"axisLabel":{"default":{"fontSize":"14px","color":"var(--t-white)","marginTop":"4px"}},"axisFirstLevelItem":{"default":{"color":"var(--t-white)","width":"2px","height":"4px","backgroundColor":"var(--t-white)","marginBottom":"4px"}},"axisLineProgressWrappper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","height":"10px"}},"axisLineProgressCurrent":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-theme)"}},"toolTipCurrentTime":{"default":{"borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","backgroundColor":"var(--business-dialog-bg)","fontSize":"16px","fontWeight":"700","color":"var(--t-white)","box-shadow":"rgba(0, 255, 255, 0.5) 0px 0px 10px 0px inset","paddingLeft":"20px","paddingRight":"20px","paddingTop":"6px","paddingBottom":"6px"}},"toolTipHover":{"default":{"fontSize":"16px","fontWeight":"700","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","box-shadow":"rgba(0, 255, 255, 0.5) 0px 0px 10px 0px inset","paddingLeft":"20px","paddingRight":"20px","paddingTop":"6px","paddingBottom":"6px"}},"wrapperRightMoudle":{"default":{"marginBottom":"0px"}}}, 
 },
},
});
const handleTimeData = (params) => {
console.log(params, '时间轴页面-接收到时间消息----')
const calculateAdjustments = (gap, targetDifference) => {
  // 计算 x 的值，基于方程解
  const decrease = Math.ceil((gap - targetDifference) / -2);
  // const alternativeDecrease = Math.ceil((gap + targetDifference) / 2);

  // 返回减少和增加的值
  return decrease;
}

// 时间格式化
const timeFormat = (Date, timeType) => {
  let year = Date.getFullYear();
  let month = ("0" + (Date.getMonth() + 1)).slice(-2);
  let date = ("0" + Date.getDate()).slice(-2);
  let hour = ("0" + Date.getHours()).slice(-2);
  if (timeType === 'hour') {
    return `${year}-${month}-${date} ${hour}`
  } else if (timeType === 'day') {
    return `${year}-${month}-${date}`
  }
}

// 处理消息-changeTimeAxisData
const {
  sourceType,
  timeType,
  timeValue,
  timeRangeData,
  timeNum,
} = params;
state.isSendChangeTimeMes = false;
/**
 * params中包含的参数：
 * sourceType: 数据来源-空气概况airOverview、污染分析airPollutionAnalysis、清空数据resetData
 * timeType: 时间类型
 * timeValue: 时间值
 * timeNum: 时间间隔
 * timeRangeData: 时间范围值-主要针对污染分析-点分析时的时间段值；
 */
if (sourceType === 'airOverview') {
  let forwardCount;
  // hour: 24小时、day： 30天、month：12个月、quarter： 8个季度、year：5年
  // 需要包含当前时间，则往前推的数量都减一
  switch (timeType) {
    case 'hour':
      forwardCount = 23;
      break;
    case 'day':
      forwardCount = 29;
      break;
    case 'month':
      forwardCount = 11;
      break;
    case 'quarter':
      forwardCount = 7;
      break;
    case 'year':
      forwardCount = 4;
      break;
    default:
      break;
  }
  // 设置数据
  state.timeAxisData = getForwardTimeList(timeValue, timeType, forwardCount);
  state.timeAxisSelect = timeValue;
  global.air.timeValue = timeValue;
} else if (sourceType === 'airPollutionAnalysis') {
  // 扩展时间轴
  let timeStart = timeRangeData[0];
  let timeEnd = timeRangeData[1];
  let expandRangeData = [timeStart.slice(0, 13), timeEnd.slice(0, 13)]
  if (timeStart && timeEnd && timeNum) {
    let text = timeType === 'day' ? '天' : '小时'
    // 计算间隔
    let hourSub = timeNum.split(text)[0];
    // 间隔大于等于30的，不需要扩充时间轴
    let subConst = timeType === 'day' ? 30 : 48;
    if (hourSub < subConst) {
      let decrease = calculateAdjustments(hourSub, subConst);
      let timeStrStart = new Date(new Date(timeStart).valueOf() - decrease * 24 * 60 * 60 * 1000);
      let timeStrEnd = new Date(new Date(timeEnd).valueOf() + decrease * 24 * 60 * 60 * 1000);
      if (timeType === 'hour') {
        timeStrStart = new Date(new Date(timeStart + ':00').valueOf() - decrease * 60 * 60 * 1000);
        timeStrEnd = new Date(new Date(timeEnd + ':00').valueOf() + decrease * 60 * 60 * 1000);
      }
      timeStart = timeFormat(timeStrStart, timeType);
      timeEnd = timeFormat(timeStrEnd, timeType);
    }
  }
  expandRangeData = [timeStart.slice(0, 13), timeEnd.slice(0, 13)]

  console.log('expandRangeData', expandRangeData);


  // 计算区间时间值
  state.timeAxisData = Array.from(new Set(expandRangeData)).length <= 1 ? [] : getRangeTimeList(expandRangeData[0], expandRangeData[1], timeType);
  // state.timeAxisData = Array.from(new Set(timeRangeData)).length <= 1 ? [] : getRangeTimeList(timeRangeData[0], timeRangeData[1], timeType);
  state.timeAxisSelect = timeValue || '';
} else if (sourceType === 'resetData') {
  state.timeAxisData = [];
  global.air.timeValue = '';
}

setTimeout(() => {
  state.isSendChangeTimeMes = true;
});
};
const sendTimeMes = (data) => {
// 加判断是为了避免空气概况改变了时间类型时，触发了时间轴的“选中项变化”事件，重复发消息
if (state.isSendChangeTimeMes) {
  /* 发送socket消息 */
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: 'changeTime', // 消息名称
    data: { 'MONITORTIME': data.time }, // 发送的数据
  });

}
state.isSendChangeTimeMes = true;
};
const getRangeTimeList = (startTime,endTime,timeType) => {
/**
 * 获取开始时间、结束时间之间的时间值数据
 * startTime：开始时间
 * endTime：结束时间
 * timeType：时间类型-hour、day
 */
if (!startTime || !endTime) return [];
// 初始化一个数组来存储这个时间区间内的所有时间
let timesInPeriod = [];
const oneHourTime = 60 * 60 * 1000;
if (timeType === 'hour') {
  const startTimeValue = new Date(startTime + ':00').getTime();
  // 计算两个日期之间的总小时数
  const totalHours = (new Date(endTime + ':00').getTime() - startTimeValue) / oneHourTime;
  // 循环每个小时，并将小时值添加到数组中
  for (let i = 0; i <= totalHours; i++) {
    const hourTime = new Date(startTimeValue + i * oneHourTime);
    // 将每个小时的时间值添加到数组中
    timesInPeriod.push(dateFormat(hourTime, 'yyyy-MM-dd HH'));
  }
} else if (timeType === 'day') {
   const startTimeValue = new Date(startTime).getTime();
   // 计算两个日期之间的总天数
  const totalDays = (new Date(endTime).getTime() - startTimeValue) / (24 * oneHourTime);
  // 循环每天，并将天值添加到数组中
  for (let i = 0; i <= totalDays; i++) {
    const dayTime = new Date(startTimeValue + i * 24 * oneHourTime);
    // 将每天的时间值添加到数组中
    timesInPeriod.push(dateFormat(dayTime, 'yyyy-MM-dd'));
  }
}
return timesInPeriod;
};
const ontimeChange1734663371565 = (data) => {
// 执行自定义方法
sendTimeMes(data);
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'air.timeValue',
                    value:data.time,
                    data: {
                      air:{timeValue: data.time}
                    },
                  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-timeAxisTest', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-timeAxisTest', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
/* 接收socket.io消息 */
rootData.rootOn('rootSocket:change', (data)=>{
if(data.type === "changeTimeAxisData"){
try{
// 执行自定义方法
handleTimeData(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
});
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTimelineBasex0x0ComputedData = computed(() => _.merge({}, componentState.tTimelineBasex0x0.default, componentState.tTimelineBasex0x0?.[state.screenSize]));

return {
global,
state,
componentState,
tTimelineBasex0x0ComputedData,
ontimeChange1734663371565,
};
},
};