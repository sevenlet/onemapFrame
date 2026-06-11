window.integratedQueryComponent = {
template: 
`<div id="t-l-c-integratedQuery" class="t-l-c-integratedQuery" >` +
`<t-rect id="t-rect-ec2a.f47db0a7" class="integratedQuery-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-iframe id="t-iframe-5571.278c93f1" class="integratedQuery-t-iframe-0-1"  :src="replaceCssVariables(filterData(state.iframeUrl, componentPropBindingMap?.['t-iframe-5571.278c93f1']['src'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :srcdoc="tIframex0x1ComputedData.srcdoc" :scrolling="tIframex0x1ComputedData.scrolling" :c-style="tIframex0x1ComputedData.cStyle" :socket-url="replaceCssVariables(filterData(global.socketIp, componentPropBindingMap?.['t-iframe-5571.278c93f1']['socketUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :room-id="replaceCssVariables(filterData(global.socketRoom, componentPropBindingMap?.['t-iframe-5571.278c93f1']['roomId'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-iframe>` +
`<t-component id="t-component-c612.82d73f15c" class="integratedQuery-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :loading="tComponentx0x2ComputedData.loading" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName" :page-id="tComponentx0x2ComputedData.pageId" :page-code="tComponentx0x2ComputedData.pageCode">` +
`</t-component>` +
`<t-text id="t-text-bbab.37fa85bad" class="integratedQuery-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-3de9.0eec63db1" class="integratedQuery-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle" @click="onclick1722834634262">` +
`</t-rect>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-ec2a.f47db0a7":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-iframe-5571.278c93f1":{"attributeName":"tIframex0x1","src":{"filters":[]},"srcdoc":{"filters":[]},"scrolling":{"filters":[]},"cStyle":{"filters":[]},"socketUrl":{"filters":[]},"roomId":{"filters":[]}},"t-component-c612.82d73f15c":{"attributeName":"tComponentx0x2","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-bbab.37fa85bad":{"attributeName":"tTextx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-3de9.0eec63db1":{"attributeName":"tRectx0x4","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   iframeUrl: "",
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
            default: {"width":"450px","height":"894px","left":"0px","top":"0px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","position":"unset","borderLeft":"1px solid var(--head-more-border)","borderTop":"1px solid var(--head-more-border)","borderRight":"1px solid var(--head-more-border)","borderBottom":"1px solid var(--head-more-border)","backgroundColor":"var(--intergrated-query-panel-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"894px","left":"0px","top":"0px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","position":"unset","borderLeft":"1px solid var(--head-more-border)","borderTop":"1px solid var(--head-more-border)","borderRight":"1px solid var(--head-more-border)","borderBottom":"1px solid var(--head-more-border)","backgroundColor":"var(--intergrated-query-panel-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px"}}}, 
 },
},
tIframex0x1: {
defaultStyle: {
            default: {"width":"450px","height":"831px","position":"unset","left":"0px","top":"61px","backgroundColor":"rgba(23, 62, 228, 0)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","overflow":"hidden"},
            
            },
 default: { 
 
src:"",
srcdoc:"",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"450px","height":"831px","position":"unset","left":"0px","top":"61px","backgroundColor":"rgba(23, 62, 228, 0)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","overflow":"hidden"}}},
socketUrl:"http://192.168.0.202:7777/socketPath",
roomId:"admin", 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","position":"unset","left":"15px","top":"22px","backgroundColor":"rgba(26, 27, 31, 0)"},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","position":"unset","left":"15px","top":"22px","backgroundColor":"rgba(26, 27, 31, 0)"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent",
pageId:"11294a0cd1654489a15355ed663e73ad_6",
pageCode:"titleFirstBg", 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"450px","height":"54px","color":"var(--intergrated-query-font-color)","position":"unset","left":"0px","top":"15px","fontWeight":"600","fontSize":"20px","lineHeight":"44px","text-shadow":"0px 0px 6px rgba(17, 214, 104, 0.62)","backgroundImage":"var(--intergrated-query-title)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"0% 0%","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"65px"},
            
            },
 default: { 
 
label:"综合查询",
editable:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"54px","color":"var(--intergrated-query-font-color)","position":"unset","left":"0px","top":"15px","fontWeight":"600","fontSize":"20px","lineHeight":"44px","text-shadow":"0px 0px 6px rgba(17, 214, 104, 0.62)","backgroundImage":"var(--intergrated-query-title)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"0% 0%","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"65px"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"24px","height":"24px","backgroundColor":"rgba(61, 102, 66, 0.2)","borderLeft":"1px solid var(--intergrated-query-sub-button-border-color)","borderTop":"1px solid var(--intergrated-query-sub-button-border-color)","borderRight":"1px solid var(--intergrated-query-sub-button-border-color)","borderBottom":"1px solid var(--intergrated-query-sub-button-border-color)","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","position":"unset","left":"388px","top":"26px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-07-26/6057b761635e4e5facfbba3ec1d4d068.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","backgroundColor":"rgba(61, 102, 66, 0.2)","borderLeft":"1px solid var(--intergrated-query-sub-button-border-color)","borderTop":"1px solid var(--intergrated-query-sub-button-border-color)","borderRight":"1px solid var(--intergrated-query-sub-button-border-color)","borderBottom":"1px solid var(--intergrated-query-sub-button-border-color)","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","position":"unset","left":"388px","top":"26px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-07-26/6057b761635e4e5facfbba3ec1d4d068.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","cursor":"pointer"},"hover":{"borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","borderLeft":"1px solid #FEEEC9","borderTop":"1px solid #FEEEC9","borderRight":"1px solid #FEEEC9","borderBottom":"1px solid #FEEEC9"}}}, 
 },
},
});
const updateIframeUrl = () => {
watch(() => global?.navMenuItemActive?.name, () => {
  // 主题
  const lxtThemeCode = localStorage.getItem('lxtThemeCode') || 'green';
  // iframe的完整地址
  state.iframeUrl = `${global.integratedQuery.integratedSearchBaseUrl}&1=1&socketPath=/socketPath&theme=${lxtThemeCode}&activeMenu=${global.navMenuItemActive.name}`;
}, {
  immediate: true
});
};
const showZhcxPage = (param) => {
// 打开综合查询面板
global.integratedQuery.showIntegratedQuery = true;
// 处理给综合查询的参数
global.integratedQuery.queryInfo = param.params.queryInfo || '';
global.integratedQuery.pointName = param.params.pointName || '';
// 更新综合查询业务参数
updateZhcxBusinessParams();

// 设置大屏里综合查询是否打开参数为true
rootData.rootSocket.emit('message', {
    type: 'isOpenZhcx',
    room: global.socketRoom,
    data: true
});

// 隐藏区县图层
rootData.rootSocket.emit('message', {
    type: 'setLayersAR',
    room: global.socketRoom,
    data: [{
        libraryId: '42f50c1c217b4a3b9cd04902a152644d',
        layerId: '区县',
        opType: 'remove',
        showPageId: '',
    }]
});
};
const onWebSocketMsg = (data) => {
// 监听地图点位的周边
/* 监听到综合查询点位周边的消息 */
if (data.length > 1 && data[0].shareCode === 'POINT_LOACTION' && data[1].shareCode === 'POINT_LOACTION_NAME') {
  // 点位信息
  const queryInfo = {
    gisType: "geo_distance",
    pointValue: data[0].runtimeValue
  };

  /* 发送socket消息 */
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: "showZhcxPage", // 消息名称
    data: {
      "showQuery": true,
      "params": {
        "pointName": data[1].runtimeValue,
        "queryInfo": JSON.stringify(queryInfo)
      }
    }, // 发送的数据
  });
}
};
const onLoadMenuData = (menuId) => {
/**
 * 监听加载菜单数据的事件
 */
/* 若一级目录切换到“智能对话” */
if (menuId === '7d3ae01e-a24f-4bf3-8390-d8676fc0a44c') {
  // 展开综合查询面板
  global.integratedQuery.showIntegratedQuery = true;
} else  {
  // 不展示综合查询面板
  global.integratedQuery.showIntegratedQuery = false;
}
// 清空周边点位名称
global.integratedQuery.pointName = '';
// 清空周边点位信息
global.integratedQuery.queryInfo = '';
// 更新综合查询业务参数
updateZhcxBusinessParams();
};
const updateZhcxBusinessParams = () => {
/**
 * 监听综合查询socket连接成功的消息
 */
// 用户登录名
const loginName = localStorage.getItem('lastLoginName') || '';

/* 发送综合查询初始化业务参数的消息 */
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: "initDefaultBusinessParams", // 消息名称
  data: {
      regionCode: global.regionaQuery?.defaultRegionCode,
      businessType: '',
      tagJsons: '',
      queryInfo: global.integratedQuery.queryInfo,
      pointName: global.integratedQuery.pointName,
      loginName,
  }, // 发送的数据
});
};
const handleClickClose = () => {
// 清除综合查询图层
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeZhxcMapParams',
  data: [
    {
      "type": "remove-all-zhcx-layer",
      "params": {
        "layerPrefix": "yzt-zhcx-layerPrefix",
        "removeAll": true
      }
    }
  ]
});
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeZhxcMapParams',
  data: [
    {
      type: 'remove-zhcx-buffer',
      params: {
        'removeBuffer': true,
      }
    }]
});

// 给综合查询发送重置数据的消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: "zhcxReset", // 消息名称
  data: {}, // 发送的数据
});
};
const showSurfaceDetails = (data) => {
rootData.rootEmit(
  'rootData:change',
  { 
    key:'businessDialog',
    value: {
      dialogName: 'zhcxLayerDetailOnMapComponent',
      dialogParmas: {
        ...data,
      },
    },
  },
);

};
const onclick1722834634262 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'integratedQuery.showIntegratedQuery',
                    value:false,
                    data: {
                      integratedQuery:{showIntegratedQuery: false}
                    },
                  });
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "isOpenZhcx", // 消息名称
data: {"IS_OPEN":global.integratedQuery.showIntegratedQuery}, // 发送的数据
});
// 执行自定义方法
handleClickClose();
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-integratedQuery', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-integratedQuery', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
updateIframeUrl();
/* 接收socket.io消息 */
const onSocketChange5b678da8434b42a1ba15 = function (data) {
if(data.type === "showZhcxPage"){
try{
// 执行自定义方法
showZhcxPage(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange5b678da8434b42a1ba15);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange5b678da8434b42a1ba15);
});
/* 接收socket.io消息 */
const onSocketChange150dff8d4cf94b398f71 = function (data) {
if(data.type === "runInteractiveChange"){
try{
// 执行自定义方法
onWebSocketMsg(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange150dff8d4cf94b398f71);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange150dff8d4cf94b398f71);
});
/* 接收socket.io消息 */
const onSocketChangeff4c7398e12546268aac = function (data) {
if(data.type === "loadMenuData"){
try{
// 执行自定义方法
onLoadMenuData(data.data.menuId);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangeff4c7398e12546268aac);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangeff4c7398e12546268aac);
});
/* 接收socket.io消息 */
const onSocketChange8539da8e733a4d5c9abd = function (data) {
if(data.type === "zhcxConnectSuccess"){
try{
// 执行自定义方法
updateZhcxBusinessParams();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange8539da8e733a4d5c9abd);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange8539da8e733a4d5c9abd);
});
/* 接收socket.io消息 */
const onSocketChange9c2c8bd54d3a4e3ca0dc = function (data) {
if(data.type === "showAirTraceDetail"){
try{
// 执行自定义方法
onWebSocketMsg(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange9c2c8bd54d3a4e3ca0dc);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange9c2c8bd54d3a4e3ca0dc);
});
/* 接收socket.io消息 */
const onSocketChange2e772b1e2d5842c5891e = function (data) {
if(data.type === "layerFidInfo"){
try{
// 执行自定义方法
showSurfaceDetails(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange2e772b1e2d5842c5891e);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange2e772b1e2d5842c5891e);
});
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tIframex0x1ComputedData = computed(() => _.merge({}, componentState.tIframex0x1.default, componentState.tIframex0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

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
tIframex0x1ComputedData,
tComponentx0x2ComputedData,
tTextx0x3ComputedData,
tRectx0x4ComputedData,
onclick1722834634262,
};
},
};