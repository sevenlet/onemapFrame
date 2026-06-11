window.videoMonitoringNoHeadComponent = {
template: 
`<div id="t-l-c-videoMonitoringNoHead" class="t-l-c-videoMonitoringNoHead" >` +
`<t-iframe v-if="state.iframeUrl !== ''" id="t-iframe-e019.c4b3b58a3" class="videoMonitoringNoHead-t-iframe-0-0"  :scrolling="tIframex0x0ComputedData.scrolling" :src="replaceCssVariables(filterData(state.iframeUrl, componentPropBindingMap?.['t-iframe-e019.c4b3b58a3']['src'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :srcdoc="tIframex0x0ComputedData.srcdoc" :c-style="tIframex0x0ComputedData.cStyle" :socket-url="replaceCssVariables(filterData(global.socketIp, componentPropBindingMap?.['t-iframe-e019.c4b3b58a3']['socketUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :room-id="replaceCssVariables(filterData(global.socketRoom, componentPropBindingMap?.['t-iframe-e019.c4b3b58a3']['roomId'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-iframe>` +
`<t-text v-if="state.isShowTo === true" id="t-text-d45a.079f2f985" class="videoMonitoringNoHead-t-text-0-1"  :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle" :label="replaceCssVariables(filterData(state.noData, componentPropBindingMap?.['t-text-d45a.079f2f985']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-text>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-iframe-e019.c4b3b58a3":{"attributeName":"tIframex0x0","scrolling":{"filters":[]},"src":{"filters":[]},"srcdoc":{"filters":[]},"cStyle":{"filters":[]},"socketUrl":{"filters":[]},"roomId":{"filters":[]}},"t-text-d45a.079f2f985":{"attributeName":"tTextx0x1","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}}};
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
   isLx: false,
   isZx: false,
   statusData: [],
   isShowTab: false,
   random: "",
   showFullPage: false,
   videoToken: "",
   noData: "加载中...",
   isRed: {"is0":false,"is1":false,"is2":false,"is3":false,"is4":false,"is5":false,"is6":false,"is7":false,"is8":false,"is9":false},
   isGreen: {"is0":false,"is1":false,"is2":false,"is3":false,"is4":false,"is5":false,"is6":false,"is7":false,"is8":false,"is9":false},
   isShowTo: true,
   isShow: true,
   videoData: [],
   token: "c1hhfcq07TelY8ofF3e6NgXpKbwIEJaPsadKLBERYKI=",
   controller: "",
   channelCode: "1",
   iframeUrl: "",
   selectCode: "1",
   tabSelect: [],
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
tIframex0x0: {
defaultStyle: {
            default: {"backgroundColor":"var(--t-body-background)","top":"31px","left":"17px","width":"906px","position":"unset","height":"620px"},
            
            },
 default: { 
 
scrolling:"no",
src:"",
srcdoc:"",
cStyle:{"wrapper":{"default":{"backgroundColor":"var(--t-body-background)","top":"31px","left":"17px","width":"906px","position":"unset","height":"620px"}}},
socketUrl:"http://192.168.0.202:7777/socketPath",
roomId:"admin", 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"animationName":"","color":"var(--business-white)","top":"31px","textAlign":"center","left":"17px","pointerEvents":"none","width":"906px","fontSize":"var(--business-text-size-14)","lineHeight":"566px","position":"unset","height":"620px"},
            
            },
 default: { 
 
editable:true,
cStyle:{"wrapper":{"default":{"animationName":"","color":"var(--business-white)","top":"31px","textAlign":"center","left":"17px","pointerEvents":"none","width":"906px","fontSize":"var(--business-text-size-14)","lineHeight":"566px","position":"unset","height":"620px"}}},
label:"加载中...", 
 },
},
});
const setVd = () => {
setTimeout(()=>{
  apiRegistry.getVideo.request();
},1000)
};
const setToken = () => {
console.log(state.videoToken, 'video2');
if (state.videoToken) {
  console.log(state.videoToken, 'video3');
  getVideo();
} else {
  console.log(state.videoToken, 'video4');
  getToken();
}


};
const setRandom = () => {
state.random = Math.random();
apiRegistry.getToken.request();
};
const showStatus = (data) => {
// state.statusData
console.log(state.selectCode, state.statusData, 'tab选中项');
state.statusData.forEach(item => {
  if (item.name === state.selectCode) {
    state.isZx = item.show === '1' ?  true : false;
    state.isLx = item.show === '0' ?  true : false;
  }
}); 
};
const setTableCode = (data) => {
console.log(data, '选中项');
};
const setIframe = (data) => {

state.channelCode = '';
const filteredArray = state.videoData.filter(item => item.NAME === data);
state.channelCode = filteredArray[0].CHAN_NUM;
state.iframeUrl = '';
setTimeout(() => {
  state.iframeUrl = global.commonParams.videoMonitoring.iframeUrl + `/spzc/openapi/v4/live?channelCode=${state.channelCode || '-1'}&controller=1&token=${state.videoToken}`;
  toggleFullScreen();
})

};
const toggleFullScreen = () => {
watch([
  () => global.showMaxDetails,
  () => global.activeTab
], () => {
  setTimeout(() => {
    if (global.activeTab === 'videoMonitoringNoHeadComponent') {
      // 获取内容页面元素
      if (global.showMaxDetails) {
        // iframe
        if (document.getElementById('t-iframe-e019.c4b3b58a3')) {
          setEleWidthHeight('t-iframe-e019.c4b3b58a3', 1648, 858);
          document.getElementById('t-iframe-e019.c4b3b58a3').querySelector('iframe').style.width = '1648px';
          document.getElementById('t-iframe-e019.c4b3b58a3').querySelector('iframe').style.height = '858px';
        }

      } else {
        // 当前弹窗页面容器
        if (document.getElementById('t-iframe-e019.c4b3b58a3')) {
          // iframe
          setEleWidthHeight('t-iframe-e019.c4b3b58a3', 906, 620);
          document.getElementById('t-iframe-e019.c4b3b58a3').querySelector('iframe').style.width = '906px';
          document.getElementById('t-iframe-e019.c4b3b58a3').querySelector('iframe').style.height = '620px';
        }
      }
    }
  })
},
  {
    immediate: true,
  })
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getVideo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.businessServiceBaseUrl","params":{"POINT_TYPE":"1","POINT_CODE":"global.commonParams.verticalStationBaseInfo.AUTO_POINTCODE","interfaceId":"f45324ad762fc6c1be8073a6f29427db"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.businessServiceBaseUrl,"params":{"POINT_TYPE":"1","POINT_CODE":global.commonParams.verticalStationBaseInfo.AUTO_POINTCODE,"interfaceId":"f45324ad762fc6c1be8073a6f29427db"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.businessServiceBaseUrl-global.serviceBasePath',  {"POINT_TYPE":"1","POINT_CODE":global.commonParams.verticalStationBaseInfo.AUTO_POINTCODE,"interfaceId":"f45324ad762fc6c1be8073a6f29427db"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getVideo'] = res.data;
                
     
state.tabSelect = [];
state.statusData = [];
state.channelCode = '';
if (res.status === 200 && res.data.data) {
  state.isShow = false;
  if (res.data.data.length <= 0) {
    state.noData = '加载中...';
    state.isShowTo = true;
  } else {
    state.noData = '暂无数据';
    state.isShowTo = false;
  }
  const { data } = res.data;
  state.videoData = data;

  state.videoData.forEach((item, index) => {
    state.iframeUrl[index] = global.commonParams.videoMonitoring.iframeUrl + `/openapi/v2/live?channelCode=${item.channelCode || '-1'}&controller=1&token=${state.videoToken}`;
    toggleFullScreen();
  })

} else {
  state.isShowTab = false;
  state.noData = '暂无数据';
  // state.isShow = true;
  state.isShowTo = true;
  state.channelCode = '';
  state.tabSelect = [];
  state.statusData = [];
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
 getToken: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"/spzc/openapi/v1/getToken","method":"get","baseURL":"global.businessServiceBaseUrl","params":{"random":"state.random","appKey":"a92010ffdbd14e1babe65f2278b48b39","secret":"7a015473eb6440a5973d8c980c59fb56"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":"/spzc/openapi/v1/getToken","method":"get","baseURL":global.businessServiceBaseUrl,"params":{"random":state.random,"appKey":"a92010ffdbd14e1babe65f2278b48b39","secret":"7a015473eb6440a5973d8c980c59fb56"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.businessServiceBaseUrl-/spzc/openapi/v1/getToken',  {"random":state.random,"appKey":"a92010ffdbd14e1babe65f2278b48b39","secret":"7a015473eb6440a5973d8c980c59fb56"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getToken'] = res.data;
                
     
if (res.status === 200) {
  state.videoToken = res.data.data;
  console.log(state.videoToken, 'video');

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
                            setPageScale('t-l-c-videoMonitoringNoHead', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setRandom();
// 执行自定义方法
setVd();
// 执行自定义方法
toggleFullScreen();
onMounted(() => {
setPageScale('t-l-c-videoMonitoringNoHead', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tIframex0x0ComputedData = computed(() => _.merge({}, componentState.tIframex0x0.default, componentState.tIframex0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

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
tIframex0x0ComputedData,
tTextx0x1ComputedData,
};
},
};