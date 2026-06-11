window.waterSurfaceContentComponent = {
template: 
`<div id="t-l-c-waterSurfaceContent" class="t-l-c-waterSurfaceContent" >` +
`<t-tabs id="t-tabs-f609.2971f9e49" class="waterSurfaceContent-t-tabs-0-0"  :alias="tTabsx0x0ComputedData.alias" :data="replaceCssVariables(filterData(state.tabs, componentPropBindingMap?.['t-tabs-f609.2971f9e49']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active-tab="replaceCssVariables(filterData(state.tabsActiveValue, componentPropBindingMap?.['t-tabs-f609.2971f9e49']['activeTab'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :tab-position-extend="tTabsx0x0ComputedData.tabPositionExtend" :stretch="tTabsx0x0ComputedData.stretch" :c-style="tTabsx0x0ComputedData.cStyle" @tab-click="ontabClick1733388893232">` +
`</t-tabs>` +
`<t-component id="t-component-acf1.cd221410d" class="waterSurfaceContent-t-component-0-1"  :name="replaceCssVariables(filterData(state.tabsActiveValue, componentPropBindingMap?.['t-component-acf1.cd221410d']['name'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="replaceCssVariables(filterData(state.tabsActiveValue, componentPropBindingMap?.['t-component-acf1.cd221410d']['componentName'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-component>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-tabs-f609.2971f9e49":{"attributeName":"tTabsx0x0","alias":{"filters":[]},"data":{"filters":[]},"activeTab":{"filters":[]},"tabPositionExtend":{"filters":[]},"stretch":{"filters":[]},"cStyle":{"filters":[]}},"t-component-acf1.cd221410d":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}}};
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
   searchTwo: {"timeValue":"","selectValue":"all","tabsValue":"monthly"},
   searchOne: {"timeValue":"","selectOne":"all","selectTwo":"all","tabsActiveValue":"monthly"},
   tabs: [{"label":"水质评价","name":"waterSurfaceEvaluateComponent","iconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/d052f7e964ea40d9bb2b355304c75152.svg","activeIconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/e37bc846a3fe44229b07f0b761c3a1e9.svg"},{"label":"目标考核","name":"waterSurfaceTargetComponent","iconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/f40ea51273ed4ad2a2644d1e5f2683bd.svg","activeIconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/490ed07e9da94ef391daeb22bf5d7dff.svg"}],
   tabsActiveValue: "waterSurfaceEvaluateComponent",
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
tTabsx0x0: {
defaultStyle: {
            default: {"width":"450px","height":"50px","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottom":"1px solid var(--business-show-bg50)","animationName":""},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[{"label":"水质评价","name":"waterSurfaceEvaluateComponent","iconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/d052f7e964ea40d9bb2b355304c75152.svg","activeIconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/e37bc846a3fe44229b07f0b761c3a1e9.svg"},{"label":"目标考核","name":"waterSurfaceTargetComponent","iconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/f40ea51273ed4ad2a2644d1e5f2683bd.svg","activeIconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/490ed07e9da94ef391daeb22bf5d7dff.svg"}],
activeTab:"waterSurfaceEvaluateComponent",
tabPositionExtend:"top-start",
stretch:true,
cStyle:{"wrapper":{"default":{"width":"450px","height":"50px","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottom":"1px solid var(--business-show-bg50)","animationName":""}},"itemWrapper":{"default":{"color":"var(--business-text-avianize)","fontFamily":"方正综艺","fontSize":"var(--business-text-size-16)","background":"var(--business-tab-first-bg)","borderLeft":"1px solid var(--business-show-bg50)","marginLeft":"-1px"},"active":{"background":"var(--business-tab-first-active-bg)","color":"#fff","box-shadow":"inset 0px 0px 11px 0px var(--business-tab-first-active-shadow)","borderLeft":"1px solid var(--business-tab-third-active-border)","borderTop":"1px solid var(--business-tab-third-active-border)","borderRight":"1px solid var(--business-tab-third-active-border)","borderBottom":"1px solid var(--business-tab-third-active-border)","lineHeight":"48px"},"hover":{"color":"var(--business-tab-third-active-border)"}},"itemActiveBorder":{"default":{"display":"none"}},"itemIcon":{"default":{"vertical-align":"-3px"}}}, 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"450px","height":"850px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"50px","overflowY":"auto","overflowX":"hidden","--scrollbar-thumb-color":"var(--business-show-bg50)","--scrollbar-track-color":"var(--business-show-bg10)","--scrollbar-width":"2px"},
            
            },
 default: { 
 
name:"waterSurfaceEvaluateComponent",
cStyle:{"wrapper":{"default":{"width":"450px","height":"850px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"50px","overflowY":"auto","overflowX":"hidden","--scrollbar-thumb-color":"var(--business-show-bg50)","--scrollbar-track-color":"var(--business-show-bg10)","--scrollbar-width":"2px"}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/waterSurfaceEvaluate",
componentName:"waterSurfaceEvaluateComponent", 
 },
},
});
const setTabIcon = () => {
// 设置tabs图标
state.tabs[0].iconSrc = getCssVariable('--business-tab-water');
state.tabs[1].iconSrc = getCssVariable('--business-tab-target');
};
const changeTabsToMap = () => {
// 切换tabs标签 给地图发消息
/* 发送webSocket消息 */

// 如果选中目标考核发的消息
if (state.tabsActiveValue === 'waterSurfaceTargetComponent') {
  // if (rootData?.sendMessage) {
  // rootData?.sendMessage({
  // id: guid(true, 'lego'), // 唯一索引
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractive", // 消息名称
    // 消息内容
    data: [
      {
        "code": "assessOrPointWq",
        "shareCode": "assessOrPointWq",
        "defaultValue": "assess",
        "name": "",
        "runtimeValue": "assess"
      },
      {
        "code": "surfaceIframeUrl",
        "shareCode": "surfaceIframeUrl",
        "defaultValue": "/view/show/index.vm?screenId=593f0f381499dac7885aef837a6529bb&CODE_CONTROLLEVEL=#CODE_CONTROLLEVEL#&MONITORTIME=#MONITORTIME#&ASSESSTYPE=#ASSESSTYPE#&DEFAULT_ASSESSTYPE=#ASSESSTYPE#",
        "name": "",
        "runtimeValue": "/view/show/index.vm?screenId=593f0f381499dac7885aef837a6529bb&CODE_CONTROLLEVEL=&MONITORTIME=&ASSESSTYPE=&DEFAULT_ASSESSTYPE="
      },
      {
        "code": "indicatorKey",
        "name": "",
        "defaultValue": "3.1.1.2",
        "shareCode": "indicatorKey",
        "runtimeValue": "3.1.1.2"
      },
      {
        "code": "paramStr",
        "name": "",
        "defaultValue": "CODE_CONTROLLEVEL=#CODE_CONTROLLEVEL#&ASSESSTYPE=#ASSESSTYPE#&MONITORTIME=#MONITORTIME#",
        "shareCode": "paramStr",
        "runtimeValue": "CODE_CONTROLLEVEL=&ASSESSTYPE=&MONITORTIME="
      }
    ]
  });
  // }
} else {
  // 如果选中水质评价发的消息
  // if (rootData?.sendMessage) {
  // rootData?.sendMessage({
  // id: guid(true, 'lego'), // 唯一索引
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractive", // 消息名称
    data: [
      {
        "code": "assessOrPointWq",
        "shareCode": "assessOrPointWq",
        "defaultValue": "pointWq",
        "name": "",
        "runtimeValue": "pointWq"
      },
      {
        "code": "surfaceIframeUrl",
        "shareCode": "surfaceIframeUrl",
        "defaultValue": "/view/show/index.vm?screenId=2ffce62339db23d7f242b40a1743d186&CODE_CONTROLLEVEL=#CODE_CONTROLLEVEL#&MONITORTIME=#MONITORTIME#&ASSESSTYPE=#ASSESSTYPE#&DEFAULT_ASSESSTYPE=#ASSESSTYPE#",
        "name": "",
        "runtimeValue": "/view/show/index.vm?screenId=2ffce62339db23d7f242b40a1743d186&CODE_CONTROLLEVEL=&MONITORTIME=&ASSESSTYPE=&DEFAULT_ASSESSTYPE="
      },
      {
        "code": "indicatorKey",
        "name": "",
        "defaultValue": "3.1.1",
        "shareCode": "indicatorKey",
        "runtimeValue": "3.1.1"
      },
      {
        "code": "paramStr",
        "name": "",
        "defaultValue": "CODE_CONTROLLEVEL=#CODE_CONTROLLEVEL#&ASSESSTYPE=#ASSESSTYPE#&MONITORTIME=#MONITORTIME#",
        "shareCode": "paramStr",
        "runtimeValue": "CODE_CONTROLLEVEL=&ASSESSTYPE=&MONITORTIME="
      }
    ]
  });
  // }
}

};
const sendMessaage = () => {
// 给水指标页面发送消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,
  type: "indicatorToggleMsg",
  data: [{
    shareCode: "indicatorToggle",
    runtimeValue: state.tabsActiveValue === 'waterSurfaceEvaluateComponent' ? "地表水" : ""
  }]
});
};
const ontabClick1733388893232 = (data) => {
// 设置变量值
state.tabsActiveValue = data.name;
// 执行自定义方法
changeTabsToMap();
// 执行自定义方法
sendMessaage();
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"MONITORTIME":"","AREA_CODE":"","CODE_WQDATASOURCETYPE":"surfaceWater","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":"","AREA_CODE":"","CODE_WQDATASOURCETYPE":"surfaceWater","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"MONITORTIME":"","AREA_CODE":"","CODE_WQDATASOURCETYPE":"surfaceWater","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLastTime'] = res.data;
                
     state.searchOne.timeValue = '';
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  // 当前选中最新时间
  state.searchOne.timeValue = data.data.MONITORTIME || '';
} else {
  state.searchOne.timeValue = '';
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      

      reject(error);
    });
  });
},
              },
// 接口函数
 getLastTimeMBKH: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"MONITORTIME":"","AREA_CODE":"","CODE_WQDATASOURCETYPE":"surfaceWater","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":"","AREA_CODE":"","CODE_WQDATASOURCETYPE":"surfaceWater","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"MONITORTIME":"","AREA_CODE":"","CODE_WQDATASOURCETYPE":"surfaceWater","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLastTimeMBKH'] = res.data;
                
     state.searchTwo.timeValue = '';
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  // 当前选中最新时间
  state.searchTwo.timeValue = data.data.MONITORTIME || '';
} else {
  state.searchTwo.timeValue = '';
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
 function handleWindowResize() {
                            setPageScale('t-l-c-waterSurfaceContent', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setTabIcon();
onMounted(() => {
setPageScale('t-l-c-waterSurfaceContent', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
sendMessaage();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTabsx0x0ComputedData = computed(() => _.merge({}, componentState.tTabsx0x0.default, componentState.tTabsx0x0?.[state.screenSize]));

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
tTabsx0x0ComputedData,
tComponentx0x1ComputedData,
ontabClick1733388893232,
};
},
};