window.waterMonitoringContentComponent = {
template: 
`<div id="t-l-c-waterMonitoringContent" class="t-l-c-waterMonitoringContent" >` +
`<t-component id="t-component-bdcd.6dac161cf" class="waterMonitoringContent-t-component-0-0"  :name="replaceCssVariables(filterData(state.tabsActiveValue, componentPropBindingMap?.['t-component-bdcd.6dac161cf']['name'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="replaceCssVariables(filterData(state.tabsActiveValue, componentPropBindingMap?.['t-component-bdcd.6dac161cf']['componentName'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-component>` +
`<t-tabs id="t-tabs-f609.2971f9e49" class="waterMonitoringContent-t-tabs-0-1"  :alias="tTabsx0x1ComputedData.alias" :data="replaceCssVariables(filterData(state.tabs, componentPropBindingMap?.['t-tabs-f609.2971f9e49']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active-tab="replaceCssVariables(filterData(state.tabsActiveValue, componentPropBindingMap?.['t-tabs-f609.2971f9e49']['activeTab'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :tab-position-extend="tTabsx0x1ComputedData.tabPositionExtend" :stretch="tTabsx0x1ComputedData.stretch" :c-style="tTabsx0x1ComputedData.cStyle" @tab-click="ontabClick1733388893232">` +
`</t-tabs>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-bdcd.6dac161cf":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-tabs-f609.2971f9e49":{"attributeName":"tTabsx0x1","alias":{"filters":[]},"data":{"filters":[]},"activeTab":{"filters":[]},"tabPositionExtend":{"filters":[]},"stretch":{"filters":[]},"cStyle":{"filters":[]}}};
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
   timeType: "hours",
   tabs: [{"label":"小时数据","name":"waterMonitoringHourComponent","iconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/f40ea51273ed4ad2a2644d1e5f2683bd.svg","activeIconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/490ed07e9da94ef391daeb22bf5d7dff.svg","timeType":"hours"},{"label":"日数据","name":"waterMonitoringDayComponent","iconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/d052f7e964ea40d9bb2b355304c75152.svg","activeIconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/e37bc846a3fe44229b07f0b761c3a1e9.svg","timeType":"days"}],
   tabsActiveValue: "waterMonitoringHourComponent",
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
            default: {"width":"450px","height":"850px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"50px","overflowY":"auto","overflowX":"hidden","--scrollbar-thumb-color":"var(--business-show-bg50)","--scrollbar-track-color":"var(--business-show-bg10)","--scrollbar-width":"2px","animationName":"","overflow-y":"auto","overflow-x":"hidden"},
            
            },
 default: { 
 
name:"waterMonitoringHourComponent",
cStyle:{"wrapper":{"default":{"width":"450px","height":"850px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"50px","overflowY":"auto","overflowX":"hidden","--scrollbar-thumb-color":"var(--business-show-bg50)","--scrollbar-track-color":"var(--business-show-bg10)","--scrollbar-width":"2px","animationName":"","overflow-y":"auto","overflow-x":"hidden"}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/waterSurfaceEvaluate",
componentName:"waterMonitoringHourComponent", 
 },
},
tTabsx0x1: {
defaultStyle: {
            default: {"width":"450px","height":"50px","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottom":"1px solid var(--business-show-bg50)","animationName":""},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[{"label":"小时数据","name":"waterMonitoringHourComponent","iconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/f40ea51273ed4ad2a2644d1e5f2683bd.svg","activeIconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/490ed07e9da94ef391daeb22bf5d7dff.svg","timeType":"hours"},{"label":"日数据","name":"waterMonitoringDayComponent","iconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/d052f7e964ea40d9bb2b355304c75152.svg","activeIconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/e37bc846a3fe44229b07f0b761c3a1e9.svg","timeType":"days"}],
activeTab:"waterMonitoringHourComponent",
tabPositionExtend:"top-start",
stretch:true,
cStyle:{"wrapper":{"default":{"width":"450px","height":"50px","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottom":"1px solid var(--business-show-bg50)","animationName":""}},"itemWrapper":{"default":{"color":"var(--business-text-avianize)","fontFamily":"方正综艺","fontSize":"var(--business-text-size-16)","background":"var(--business-tab-first-bg)","borderLeft":"1px solid var(--business-show-bg50)","marginLeft":"-1px"},"active":{"background":"var(--business-tab-first-active-bg)","color":"#fff","box-shadow":"inset 0px 0px 11px 0px var(--business-tab-first-active-shadow)","borderLeft":"1px solid var(--business-tab-third-active-border)","borderTop":"1px solid var(--business-tab-third-active-border)","borderRight":"1px solid var(--business-tab-third-active-border)","borderBottom":"1px solid var(--business-tab-third-active-border)","lineHeight":"48px"},"hover":{"color":"var(--business-tab-third-active-border)"}},"itemActiveBorder":{"default":{"display":"none"}},"itemIcon":{"default":{"vertical-align":"-3px"}}}, 
 },
},
});
const setTabIcon = () => {
// 设置tabs图标
state.tabs[0].iconSrc = getCssVariable('--business-tab-target');
state.tabs[1].iconSrc = getCssVariable('--business-tab-water');
};
const sendWebsocketMsg = (item) => {
/**
 * 给一张图发消息
 */

rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: 'runInteractive', // 消息名称
  data: [
    {
      "code": "hoursOrDays",
      "shareCode": "hoursOrDays",
      "defaultValue": item.timeType,
      "runtimeValue": item.timeType
    }
  ],
});

};
const defaultSendToMapMsg = () => {
/**
 * 默认 给一张图发消息
 */

rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: 'runInteractive', // 消息名称
  "data": [
    {
      "code": "hoursOrDays",
      "shareCode": "hoursOrDays",
      "defaultValue": state.timeType,
      "runtimeValue": state.timeType
    }
  ]
});

};
const sendMessage = () => {
// 给水指标页面发送消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,
  type: "indicatorToggleMsg",
  data: [{
    shareCode: "indicatorToggle",
    runtimeValue: state.tabsActiveValue === 'waterMonitoringHourComponent' ? "实时监控-小时数据" : "实时监控-日数据"
  }]
});
};
const ontabClick1733388893232 = (data) => {
// 设置变量值
state.tabsActiveValue = data.name;
// 执行自定义方法
sendWebsocketMsg(data.item);
// 执行自定义方法
sendMessage();
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-waterMonitoringContent', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setTabIcon();
onMounted(() => {
setPageScale('t-l-c-waterMonitoringContent', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
sendMessage();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTabsx0x1ComputedData = computed(() => _.merge({}, componentState.tTabsx0x1.default, componentState.tTabsx0x1?.[state.screenSize]));

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
tTabsx0x1ComputedData,
ontabClick1733388893232,
};
},
};