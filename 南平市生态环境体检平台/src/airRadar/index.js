window.airRadarComponent = {
template: 
`<div id="t-l-c-airRadar" class="t-l-c-airRadar" >` +
`<t-rect v-if="state.showContent === true" id="t-rect-a122.67a8288a4" class="airRadar-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle" @click="onclick1734686591589">` +
`</t-rect>` +
`<t-text v-if="state.showContent === false" id="t-text-50f5.0d6af7e03" class="airRadar-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle" :show-title="tTextx0x1ComputedData.showTitle" @click="onclick1734686575114">` +
`</t-text>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-a122.67a8288a4":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-50f5.0d6af7e03":{"attributeName":"tTextx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"showTitle":{"filters":[]}}};
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
   switch: true,
   listData: [],
   showContent: false,
   showPollutionIndex: false,
   activeIndex: "1",
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
tRectx0x0: {
defaultStyle: {
            default: {"width":"38px","height":"34px","position":"unset","left":"0px","top":"2px","backgroundImage":"var(--business-target-fold-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"38px","height":"34px","position":"unset","left":"0px","top":"2px","backgroundImage":"var(--business-target-fold-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--business-target-fold-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}}}, 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"38px","height":"34px","color":"var(--t-font-color-gy1)","fontSize":"0px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-12-27/f6ff447bfdbc4164a2c45a2253a236d2.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"0px","top":"2px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"38px","height":"34px","color":"var(--t-font-color-gy1)","fontSize":"0px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-12-27/f6ff447bfdbc4164a2c45a2253a236d2.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"0px","top":"2px","cursor":"pointer","animationName":""}}},
showTitle:true, 
 },
},
});
const watchIndexVisible = () => {
// watch([() => global.air.timeType, () => global.air.tabSelect], () => {
//   // 先设置显示，再根据条件判断
//   state.showWeatherIndex = true;
//   state.showPollutionIndex = true;
//   setTimeout(() => {
//     if (state.showContent) {
//       // 设置污染物指标选项卡显示隐藏
//       setDomVisible('t-component-3a14.f07066497', true);
//     }
//   });
//   // 设置插值图组件top、left值
//   // setDomTopValue('t-component-3689.537b2a738', '48px');
//   // setDomLeftValue('t-component-3689.537b2a738', '388px');
//   // 设置背景图width、left、height值
//   const bgDom = document.getElementById('t-rect-98e7.8b1a86cd');
//   if (bgDom) {
//     bgDom.style.width = '555px';
//     bgDom.style.height = '92px';
//     bgDom.style.left = '0';
//   }
//   // 选中小时，显示气象指标
//   // if (global.air.timeType !== 'hour') {
//   //   state.showWeatherIndex = false;
//   //   sendClearWeatherMes();
//   // }
//   // 选中空气概况时，显示两个指标 airOverviewContentComponent airControlProgressContentComponent
//   // if (global.air.tabSelect === 'airControlProgressContentComponent') {
//   //   state.showWeatherIndex = false;
//   //   state.showPollutionIndex = false;
//   //   // 设置插值图组件top、left值
//   //   setDomTopValue('t-component-3689.537b2a738', '4px');
//   //   setDomLeftValue('t-component-3689.537b2a738', '339px');
//   //   // 设置背景图width、left、height值
//   //   if (bgDom) {
//   //     bgDom.style.width = '180px';
//   //     bgDom.style.height = '48px';
//   //     bgDom.style.left = '374px';
//   //   }
//   //   sendClearWeatherMes();
//   // }
// });
};
const setContentVisible = () => {
state.showContent = !state.showContent;
// 设置背景图显示隐藏
setDomVisible('t-rect-98e7.8b1a86cd', state.showContent);

rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'isShowRadar',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      'visible': state.showContent
    }
  }
);
};
const setNavStyle = () => {
// 设置背景图过渡属性值
const bgDom = document.getElementById('t-rect-98e7.8b1a86cd');
if (bgDom) {
  // 用settimeout 加原因：默认加上时，切换专题时，背景会闪现一下
  setTimeout(() => {
    bgDom.style.transition = '0.3s';
  });
}

// 设置背景图显示隐藏
setDomVisible('t-rect-98e7.8b1a86cd', state.showContent);
// 设置污染物指标选项卡显示隐藏
setDomVisible('t-tabs-5c63.3caa932c2', state.showContent);

};
const sendMsgToMap = (type) => {
if (type === 'yhbz_air') {
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'updateRadarStatus',  // 消息类型名称
      data: {                   // 消息内容，对象格式
        'type': state.activeIndex,
      }
    }
  );
}
};
const clickTab = () => {
 rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'updateRadarStatus',  // 消息类型名称
      data: {                   // 消息内容，对象格式
        'type': state.activeIndex,
      }
    }
  );
};
const onclick1734686591589 = () => {
// 执行自定义方法
setContentVisible();
};
const onclick1734686575114 = () => {
// 执行自定义方法
setContentVisible();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getListData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TREE_CODE":"RADAR_SCANNING","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TREE_CODE":"RADAR_SCANNING","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TREE_CODE":"RADAR_SCANNING","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.listData = data.map(item => {
    return {
      "label": item.DICTIONARYNAME,
      "name": item.DICTIONARYCODE
    }
  })
  state.activeIndex = '1'
  // 给地图发送消息
  sendMsgToMap('yhbz_air'); 
} else {
  state.listData = []
  state.activeIndex = ''
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
watch(() => ["RADAR_SCANNING"], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getListData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-airRadar', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "isShowRadar", // 消息名称
data: {"visible":false}, // 发送的数据
});
onMounted(() => {
setPageScale('t-l-c-airRadar', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setNavStyle();
});
onBeforeUnmount(() => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "isShowRadar", // 消息名称
data: {"visible":true}, // 发送的数据
});
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

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
tRectx0x0ComputedData,
tTextx0x1ComputedData,
onclick1734686591589,
onclick1734686575114,
};
},
};