window.airCenterOtherIndexComponent = {
template: 
`<div id="t-l-c-airCenterOtherIndex" class="t-l-c-airCenterOtherIndex" >` +
`<t-rect id="t-rect-98e7.8b1a86cd" class="airCenterOtherIndex-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-tabs id="t-tabs-5c63.3caa932c2" class="airCenterOtherIndex-t-tabs-0-2"  :alias="tTabsx0x2ComputedData.alias" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-tabs-5c63.3caa932c2']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :model-value="tTabsx0x2ComputedData.model-value" :tab-position-extend="tTabsx0x2ComputedData.tabPositionExtend" :stretch="tTabsx0x2ComputedData.stretch" :c-style="tTabsx0x2ComputedData.cStyle" :active-tab="replaceCssVariables(filterData(state.activeIndex, componentPropBindingMap?.['t-tabs-5c63.3caa932c2']['activeTab'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @tab-click="ontabClick1766808256575">` +
`</t-tabs>` +
`<t-rect v-if="state.showContent === true" id="t-rect-a122.67a8288a4" class="airCenterOtherIndex-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1734686591589">` +
`</t-rect>` +
`<t-text v-if="state.showContent === false" id="t-text-50f5.0d6af7e03" class="airCenterOtherIndex-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle" :show-title="tTextx0x4ComputedData.showTitle" @click="onclick1734686575114">` +
`</t-text>` +
`<t-switch v-if="state.showContent === true" id="t-switch-dbeb.4fadfc867" class="airCenterOtherIndex-t-switch-0-5"  :value="replaceCssVariables(filterData(state.switch, componentPropBindingMap?.['t-switch-dbeb.4fadfc867']['value'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tSwitchx0x5ComputedData.cStyle" @change="onchange1766824134346">` +
`</t-switch>` +
`<t-text v-if="state.showContent === true" id="t-text-f59e.6d76d06e9" class="airCenterOtherIndex-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle">` +
`</t-text>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-98e7.8b1a86cd":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-54ba.408ebfad2":{"attributeName":"tRectx0x1"},"t-tabs-5c63.3caa932c2":{"attributeName":"tTabsx0x2","alias":{"filters":[]},"data":{"filters":[]},"model-value":{"filters":[]},"tabPositionExtend":{"filters":[]},"stretch":{"filters":[]},"cStyle":{"filters":[]},"activeTab":{"filters":[]}},"t-rect-a122.67a8288a4":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-50f5.0d6af7e03":{"attributeName":"tTextx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"showTitle":{"filters":[]}},"t-switch-dbeb.4fadfc867":{"attributeName":"tSwitchx0x5","value":{"filters":[]},"cStyle":{"filters":[]}},"t-text-f59e.6d76d06e9":{"attributeName":"tTextx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
            default: {"width":"528px","height":"54px","backgroundColor":"var(--area-slope-bg)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","top":"0px","left":"-1px","opacity":"0","animationName":"","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"528px","height":"54px","backgroundColor":"var(--area-slope-bg)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","top":"0px","left":"-1px","opacity":"0","animationName":"","position":"unset"}}}, 
 },
},
tTabsx0x2: {
defaultStyle: {
            default: {"position":"unset","width":"357px","height":"34px","backgroundColor":"","fontSize":"14px","lineHeight":"26px","animationName":"","paddingRight":"0px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","top":"10px","left":"3px"},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[],
'model-value':"work",
tabPositionExtend:"top-start",
stretch:true,
cStyle:{"wrapper":{"default":{"position":"unset","width":"357px","height":"34px","backgroundColor":"","fontSize":"14px","lineHeight":"26px","animationName":"","paddingRight":"0px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","top":"10px","left":"3px"}},"itemWrapper":{"default":{"height":"34px","width":"auto","lineHeight":"32px","fontSize":"14px","color":"var(--t-white)","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)","backgroundColor":"","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","fontWeight":"500","paddingRight":"4px !important","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingTop":"0px","paddingLeft":"4px !important"},"active":{"fontSize":"14px","color":"var(--targer-font-active)","backgroundColor":"rgba(37, 156, 224, 0)","borderLeft":"1px solid var(--t-white)","borderTop":"1px solid var(--t-white)","borderRight":"1px solid var(--t-white)","borderBottom":"1px solid var(--t-white)","background":"var(--targer-btn-active-bg)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","box-shadow":"var(--targer-btn-active-shadow) 0px 0px 11px 0px inset","backdropFilter":"blur(0px)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","height":"34px","lineHeight":"32px","paddingTop":"0px","width":"auto"},"hover":{"fontSize":"14px","color":"var(--targer-font-active)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","height":"34px","borderLeft":"1px solid var(--t-white)","borderTop":"1px solid var(--t-white)","borderRight":"1px solid var(--t-white)","borderBottom":"1px solid var(--t-white)","background":"var(--targer-btn-active-bg)","box-shadow":"var(--targer-btn-active-shadow) 0px 0px 11px 0px inset","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","lineHeight":"32px","paddingTop":"0px"}},"itemActiveBorder":{"active":{"backgroundColor":"rgba(255, 0, 0, 0)"},"default":{"borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"rgba(222, 233, 14, 0)"}},"itemLabel":{"default":{"marginRight":"0px","paddingRight":"0px","fontSize":"14px"}}},
activeTab:"3", 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"39px","height":"34px","position":"unset","left":"477px","top":"10px","backgroundImage":"var(--business-target-fold-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"39px","height":"34px","position":"unset","left":"477px","top":"10px","backgroundImage":"var(--business-target-fold-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"var(--business-target-fold-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":""}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"39px","height":"34px","color":"var(--t-font-color-gy1)","fontSize":"0px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-12-27/f6ff447bfdbc4164a2c45a2253a236d2.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"477px","top":"10px","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"39px","height":"34px","color":"var(--t-font-color-gy1)","fontSize":"0px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-12-27/f6ff447bfdbc4164a2c45a2253a236d2.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"477px","top":"10px","cursor":"pointer","animationName":""}}},
showTitle:true, 
 },
},
tSwitchx0x5: {
defaultStyle: {
            default: {"width":"28px","height":"20px","position":"unset","left":"440px","top":"17px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":""},
            
            },
 default: { 
 
value:true,
cStyle:{"wrapper":{"default":{"width":"28px","height":"20px","position":"unset","left":"440px","top":"17px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":""}},"action":{"default":{"width":"12px","height":"12px"},"active":{"backgroundColor":"var(--t-white)","left":"30px"}},"core":{"default":{"borderTopLeftRadius":"20px","borderTopRightRadius":"20px","borderBottomLeftRadius":"20px","borderBottomRightRadius":"20px","height":"16px"},"active":{"backgroundColor":"var(--business-theme)","borderTopLeftRadius":"20px","borderTopRightRadius":"20px","borderBottomLeftRadius":"20px","borderBottomRightRadius":"20px","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"58px","height":"20px","color":"var(--t-white)","fontSize":"14px","top":"18px","left":"372px","position":"unset","lineHeight":"20px","animationName":""},
            
            },
 default: { 
 
label:"自动扫描",
editable:false,
cStyle:{"wrapper":{"default":{"width":"58px","height":"20px","color":"var(--t-white)","fontSize":"14px","top":"18px","left":"372px","position":"unset","lineHeight":"20px","animationName":""}}}, 
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
// 设置污染物指标选项卡显示隐藏
setDomVisible('t-tabs-5c63.3caa932c2', state.showContent);
setDomVisible('t-text-f59e.6d76d06e9', state.showContent);
setDomVisible('t-switch-dbeb.4fadfc867', state.showContent)

// 设置选点按钮位置
// const pointDom = document.getElementById('t-component-2111.40f7efb23');
// if(pointDom) {
//   if(state.showContent) {
//     pointDom.style.top = '230px';
//   } else {
//     pointDom.style.top = '190px';
//   }
// }
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
};
const ontabClick1766808256575 = (data) => {
// 设置变量值
state.activeIndex = data.name;
// 执行自定义方法
clickTab();
};
const onchange1766824134346 = (value) => {
// 设置变量值
state.switch = value;
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
                            setPageScale('t-l-c-airCenterOtherIndex', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
watchIndexVisible();
/* 接收socket.io消息 */
const onSocketChangeee5f1bf32c7a4d358c3c = function (data) {
if(data.type === "appLoaded"){
try{
// 执行自定义方法
sendMsgToMap(data.data.resCode);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangeee5f1bf32c7a4d358c3c);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangeee5f1bf32c7a4d358c3c);
});
onMounted(() => {
setPageScale('t-l-c-airCenterOtherIndex', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setNavStyle();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tTabsx0x2ComputedData = computed(() => _.merge({}, componentState.tTabsx0x2.default, componentState.tTabsx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tSwitchx0x5ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x5.default, componentState.tSwitchx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

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
tTabsx0x2ComputedData,
tRectx0x3ComputedData,
tTextx0x4ComputedData,
tSwitchx0x5ComputedData,
tTextx0x6ComputedData,
ontabClick1766808256575,
onclick1734686591589,
onclick1734686575114,
onchange1766824134346,
};
},
};