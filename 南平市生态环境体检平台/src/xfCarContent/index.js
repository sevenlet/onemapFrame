window.xfCarContentComponent = {
template: 
`<div id="t-l-c-xfCarContent" class="t-l-c-xfCarContent" >` +
`<t-component id="t-component-f869.e7ce2b41a" class="xfCarContent-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName" :page-id="tComponentx0x0ComputedData.pageId" :page-code="tComponentx0x0ComputedData.pageCode">` +
`</t-component>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-f869.e7ce2b41a":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}}};
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
tComponentx0x0: {
defaultStyle: {
            default: {"width":"410px","height":"860px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"20px","animationName":""},
            
            },
 default: { 
 
name:"xfCarLIstContainerComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"860px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"20px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/xfCarLIstContainer",
componentName:"xfCarLIstContainerComponent",
pageId:"6c0a6e4e508a4bb583a9c954636bd3b3",
pageCode:"xfCarLIstContainer", 
 },
},
});
const handleTimeTypeChange = (timeType) => {
/**
 * 处理时间类型tab变化
 * timeType：时间类型-hour、day、month、quarter、year
 */
switch (timeType) {
  case 'hour':
    state.dateType = 'datetimehour';
    break;
  case 'day':
    state.dateType = 'date';
    break;
  case 'month':
  case 'year':
    state.dateType = timeType;
    break;
  default:
    break;
}
// 1、设置内容显示变量值
setContentVisibleValue();
// 2、设置公共内容的位置
setCommonContentPosition();
// // 当前指标数据
// const curIndexList = getCenterIndexList('air', timeType);
// rootData.rootEmit(
//   // 固定的消息名称，不能修改
//   'rootData:change',
//   {
//     // 全局变量的键名
//     key: 'air.centerIndexList',
//     // 将要修改的全局变量的键值
//     value: curIndexList,
//   },
// );
// rootData.rootEmit(
//   // 固定的消息名称，不能修改
//   'rootData:change',
//   {
//     // 全局变量的键名
//     key: 'air.centerIndexSelect',
//     // 将要修改的全局变量的键值
//     value: curIndexList[0].name,
//   },
// );
};
const setProvider = () => {
provide('airOverviewContentState', state);
};
const setStandardBelowContentPosition = () => {
/**
 * 设置“达标考核情况”下方内容的位置
 */
const isFold = state.standardContentFold;

// 展开与不展开的位置差300px
/* 当前整个页面高度：
 *   展示空气质量排名-表格（动态组件高度340px）
 *   与展示行政区-空气质量排名-卡片（动态组件高度75px），相差265px
 */
if (state.isDayOrHour) { // 日、小时
  // 当前整个页面内容-高度
  setDomHeightValue('t-l-c-airOverviewContent', isFold ? '1029px' : '1329px');
  // 空气质量排名-标题
  setDomTopValue('t-component-e08a.c918ca32d', isFold ? '895px' : '1195px');
  // 空气质量排名-表格
  // setDomTopValue('t-component-4f0c.743c6163e', isFold ? '940px' : '1240px');
  // 行政区-空气质量排名-卡片
  setDomTopValue('t-component-f0c0.1b8778952', isFold ? '940px' : '1240px');
} else if (state.isMonthOrYear) { // 月、季度、年
  // 当前整个页面内容-高度
  setDomHeightValue('t-l-c-airOverviewContent', isFold ? '1509px' : '1809px');
  // 空气质量排名-标题
  setDomTopValue('t-component-e08a.c918ca32d', isFold ? '1381px' : '1681px');
  // 空气质量排名-表格
  // setDomTopValue('t-component-4f0c.743c6163e', isFold ? '1426px' : '1726px');
  // 行政区-空气质量排名-卡片
  setDomTopValue('t-component-f0c0.1b8778952', isFold ? '1426px' : '1726px');
}  else if (state.isProvince) { // 省
  // 当前整个页面内容-高度
  setDomHeightValue('t-l-c-airOverviewContent', isFold ? '857px' : '1157px');
  // 空气质量排名-标题
  setDomTopValue('t-component-e08a.c918ca32d', isFold ? '723px' : '1023px');
  // 空气质量排名-表格
  // setDomTopValue('t-component-4f0c.743c6163e', isFold ? '768px' : '1068px');
  // 行政区-空气质量排名-卡片
  setDomTopValue('t-component-f0c0.1b8778952', isFold ? '768px' : '1068px');
}
};
const setCommonContentPosition = () => {
/**
 * 设置公共内容的默认位置（达标考核情况、空气质量排名）
 */

// 选择日、小时
if (state.isDayOrHour) {
  // 达标考核标题
  setDomTopValue('t-component-4b3f.2cfafc59', '694px');
  // 达标考核第一项内容
  setDomTopValue('t-component-8bb9.af6688f5a', '738px');
  // 达标考核后三项内容
  setDomTopValue('t-component-5aa4.688be3ff9', '838px');
  // 展开按钮
  setDomTopValue('t-rect-e1db.376b96d46', '838px');
  // 收起按钮
  setDomTopValue('t-rect-9f3a.24d71e31c', '1138px');
} else if (state.isMonthOrYear) { // 选择月、季度、年
  // 达标考核标题
  setDomTopValue('t-component-4b3f.2cfafc59', '1180px');
  // 达标考核第一项内容
  setDomTopValue('t-component-8bb9.af6688f5a', '1224px');
  // 展开按钮
  setDomTopValue('t-rect-e1db.376b96d46', '1324px');
  // 达标考核后三项内容
  setDomTopValue('t-component-5aa4.688be3ff9', '1324px');
  // 收起按钮
  setDomTopValue('t-rect-9f3a.24d71e31c', '1624px');
} else if (state.isProvince) { // 全省
  // 达标考核标题
  setDomTopValue('t-component-4b3f.2cfafc59', '522px');
  // 达标考核第一项内容
  setDomTopValue('t-component-8bb9.af6688f5a', '566px');
  // 展开按钮
  setDomTopValue('t-rect-e1db.376b96d46', '666px');
  // 达标考核后三项内容
  setDomTopValue('t-component-5aa4.688be3ff9', '666px');
  // 收起按钮
  setDomTopValue('t-rect-9f3a.24d71e31c', '966px');
}
// 当前页面-设置高度、空气质量排名标题、空气质量排名内容top值
setStandardBelowContentPosition();



};
const initPageData = () => {
function setPageContent() {
  let regionLevelCode = getRegionLevel(global.regionaQuery.regionCode);
  if (regionLevelCode === 'province') {
    state.isProvince = true;
    state.isMonthOrYear = false;
    state.isDayOrHour = false;
  } else {
    // 1、isProvince 行政区是否选中全省
    state.isProvince = false;
    // 2、设置内容显示变量值
    setContentVisibleValue();
  }
  // 设置公共内容的位置
  setCommonContentPosition();
}

setTimeout(() => {
  setPageContent();
});

// 监听行政区变化
watch(
  () => global.regionaQuery.regionCode,
  (regionCode) => {
    if (regionCode) {
      setPageContent();
    }
  }
);
};
const setContentVisibleValue = () => {
/**
 * 根据时间类型、行政区类型-设置内容显示条件的变量值
 */
/**
 * timeType：时间类型-hour、day、month、quarter、year
 */
// 先置为false
state.isDayOrHour = false;
state.isMonthOrYear = false;
switch (state.timeType) {
  case 'hour':
  case 'day':
    // 如果不是全省
    if (!state.isProvince) {
      state.isDayOrHour = true;
    }
    break;
  case 'month':
  case 'quarter':
  case 'year':
    // 如果不是全省
    if (!state.isProvince) {
      state.isMonthOrYear = true;
    }
    break;
  default:
    break;
}
};
const handleQuarterTimeValue = () => {
/**
 * 处理季度时间的时间值
 * quarterYear: 季度年份值
 * quarterValue : 季度数值1、2、3、4
 */
if (!state.quarterYear || !state.quarterValue) return;
state.timeValue = `${state.quarterYear}-${state.quarterValue}`;
sendTimeMes(false);
};
const sendTimeMes = (changeTimeType) => {
/**
 * changeTimeType: 是否改变了时间类型
 */
// 改变时间轴数据消息
rootData.rootSocket.emit(
  // 固定的消息名称，不能修改
  'message',
  {
    // 键名不能改 房间号，这里为默认值，一般无需修改，如果变量名称自己定义的则需要修改
    room: global.socketRoom,
    // 键名不能改 消息名称
    type: 'changeTimeAxisData',
    // 键名不能改 消息内容 对象格式
    data: {
      sourceType: 'airOverview',
      timeType: state.timeType,
      timeValue: state.timeValue,
    },
  }
);
// 改变时间类型发送消息-changeTimeType
if (changeTimeType) {
  // 给地图发消息-changeTimeType
  rootData.rootSocket.emit(
    // 固定的消息名称，不能修改
    'message',
    {
      room: global.socketRoom,
      type: 'changeTimeType',
      data: {
        TIME_TYPE: state.timeType,
        POLLUTE: global.air.centerIndexSelect,
        MONITORTIME: state.timeValue,
      },
    }
  );
} else {
  // 给地图发消息-changeTime
  rootData.rootSocket.emit(
    // 固定的消息名称，不能修改
    'message',
    {
      room: global.socketRoom,
      type: 'changeTime',
      data: {
        MONITORTIME: state.timeValue,
      },
    }
  );
}

// 判断是否是最新时间
if(state.timeType === 'hour') {
  state.isNewDate = state.timeValue === dateFormat(new Date(state.maxTimeValue), 'YYYY-MM-DD HH');
} else if (state.timeType === 'day') {
  state.isNewDate = state.timeValue === dateFormat(new Date(), 'YYYY-MM-DD');
}
console.log(state.isNewDate, '@@@')

};
const setTimeNormalValue = (timeValue) => {
state.timeValue = timeValue || '';
if (state.timeType === 'quarter') {
  state.quarterYear = handleStringSplit(timeValue || '', '-')[0] || '';
  state.quarterValue = handleStringSplit(timeValue || '', '-')[1] || '';
}
};
const judgeIsNewDate = () => {
// 判断是否是最新时间
state.isNewDate = state.maxTimeValue.includes(state.timeValue);
};
const setTimeValue = (data) => {
debugger
global.warningRightDataRange.value = data || [];
global.warningRightDataRange.startTime = data[0] || "";
global.warningRightDataRange.endTime = data[1] || "";
// 发送消息给地图
sendMsgToMapChangeTime(global.warningRightDataRange.startTime,global.warningRightDataRange.endTime); // 参数注意修改
};
const sendMsgToMapChangeTime = (startTime,endTime) => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'updateAlarmTimePeriod',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      START_TIME: startTime,
      END_TIME: endTime
    }
  }
);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getLatestTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TIME_TYPE":"global.regionaQuery.regionCode","interfaceId":"ba5175c6cda29ea16889a79d7ad6c464"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":global.regionaQuery.regionCode,"interfaceId":"ba5175c6cda29ea16889a79d7ad6c464"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TIME_TYPE":global.regionaQuery.regionCode,"interfaceId":"ba5175c6cda29ea16889a79d7ad6c464"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  const endTime = data.max_start_time_str
  const startTime = getTwoDaysBefore(endTime)
  global.warningRightDataRange.startTime = startTime.slice(0,13)
  global.warningRightDataRange.endTime = endTime.slice(0,13)
  global.warningRightDataRange.value = [global.warningRightDataRange.startTime, global.warningRightDataRange.endTime]
  // 发送消息给地图
  sendMsgToMapChangeTime(global.warningRightDataRange.startTime,global.warningRightDataRange.endTime);
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
                            setPageScale('t-l-c-xfCarContent', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-xfCarContent', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

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
tComponentx0x0ComputedData,
};
},
};