window.airOverviewSiteForHourDayHComponent = {
template: 
`<div id="t-l-c-airOverviewSiteForHourDayH" class="t-l-c-airOverviewSiteForHourDayH" >` +
`<t-row id="t-row-b022.4d036d6d7" class="airOverviewSiteForHourDayH-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align">` +
`<t-text id="t-text-a3dd.58079667c" class="airOverviewSiteForHourDayH-t-text-0-1-0"  :label="replaceCssVariables(filterData(state.pageTitle, componentPropBindingMap?.['t-text-a3dd.58079667c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x1x0ComputedData.editable" :c-style="tTextx0x1x0ComputedData.cStyle">` +
`</t-text>` +
`<t-list-card-common id="t-list-card-common-2ac1.1accf4268" class="airOverviewSiteForHourDayH-t-list-card-common-0-1-2"  :c-style="tListCardCommonx0x1x2ComputedData.cStyle" :key-word="tListCardCommonx0x1x2ComputedData.keyWord" :default-checked="tListCardCommonx0x1x2ComputedData.defaultChecked" :tab="tListCardCommonx0x1x2ComputedData.tab" :collapse="tListCardCommonx0x1x2ComputedData.collapse" :collapse-text="tListCardCommonx0x1x2ComputedData.collapseText" :display-count="tListCardCommonx0x1x2ComputedData.displayCount" :data-alias="tListCardCommonx0x1x2ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.AQI_LEVEL, componentPropBindingMap?.['t-list-card-common-2ac1.1accf4268']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-list-card-common>` +
`<t-text id="t-text-b518.db587dc79" class="airOverviewSiteForHourDayH-t-text-0-1-3"  :label="replaceCssVariables(filterData(state.headerInfo.POINT_TYPE_NAME, componentPropBindingMap?.['t-text-b518.db587dc79']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x1x3ComputedData.editable" :c-style="tTextx0x1x3ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-1707.1c3affeec" class="airOverviewSiteForHourDayH-t-text-0-1-4"  :label="replaceCssVariables(filterData(state.firstPollution, componentPropBindingMap?.['t-text-1707.1c3affeec']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x1x4ComputedData.editable" :c-style="tTextx0x1x4ComputedData.cStyle" :show-title="tTextx0x1x4ComputedData.showTitle">` +
`</t-text>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-ef99.94df0e493":{"attributeName":"tRectx0x0"},"t-row-b022.4d036d6d7":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-a3dd.58079667c":{"attributeName":"tTextx0x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-8624.21113972e":{"attributeName":"tTextx0x1x1"},"t-list-card-common-2ac1.1accf4268":{"attributeName":"tListCardCommonx0x1x2","cStyle":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"tab":{"filters":[]},"collapse":{"filters":[]},"collapseText":{"filters":[]},"displayCount":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]}},"t-text-b518.db587dc79":{"attributeName":"tTextx0x1x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-1707.1c3affeec":{"attributeName":"tTextx0x1x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"showTitle":{"filters":[]}}};
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
   timeType: "",
   timeValue: "",
   dividerShow: {"divider2Show":false,"divider3Show":false,"divider4Show":false,"divider1Show":false},
   firstPollution: "首要污染物：--",
   AQI_LEVEL: [{"state":"--","stateColor":"rgba(0, 0, 0, 0.9)","stateBgColor":"#AAA"}],
   headerInfo: {"PRIMPOLLUTE":"--","POINT_TYPE_NAME":"--","AQILEVELINDEX":"--","AQI":"--"},
   baseInfo: {"POINT_NAME":"--","POINT_TYPE_NAME":"--","POINT_STREET":"--","POINT_ADDRESS":"--"},
   POINT_CODE: "",
   pageTitle: "--",
   contentComponentName: "",
   menuData: [],
   menuSelect: "",
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
tRowx0x1: {
defaultStyle: {
            default: {"width":"885px","height":"41px","position":"unset","left":"-31px","top":"8px","whiteSpace":"nowrap","textOverflow":"ellipsis","pointerEvents":"none"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"885px","height":"41px","position":"unset","left":"-31px","top":"8px","whiteSpace":"nowrap","textOverflow":"ellipsis","pointerEvents":"none"}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x1x0: {
defaultStyle: {
            default: {"width":"auto","color":"rgba(255, 255, 255, 1)","position":"unset","left":"507px","top":"-179px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":"","whiteSpace":"nowrap","overflow":"hidden","marginRight":"16px","textOverflow":"ellipsis","max-width":"620px","pointerEvents":"none","height":"var(--business-text-size-18)","fontSize":"var(--business-text-size-18)","lineHeight":"var(--business-text-size-18)"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","color":"rgba(255, 255, 255, 1)","position":"unset","left":"507px","top":"-179px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":"","whiteSpace":"nowrap","overflow":"hidden","marginRight":"16px","textOverflow":"ellipsis","max-width":"620px","pointerEvents":"none","height":"var(--business-text-size-18)","fontSize":"var(--business-text-size-18)","lineHeight":"var(--business-text-size-18)"}}}, 
 },
},
tListCardCommonx0x1x2: {
defaultStyle: {
            default: {"position":"unset","width":"auto","height":"22px","left":"560px","top":"155px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"0px","marginRight":"10px","pointerEvents":"none"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"position":"unset","width":"auto","height":"22px","left":"560px","top":"155px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"0px","marginRight":"10px","pointerEvents":"none"}},"listBody":{"default":{"backgroundColor":"rgba(223, 12, 12, 0)","width":"auto"}},"card":{"default":{"backgroundColor":"rgba(6, 240, 13, 0)","paddingTop":"0px","paddingBottom":"0px","paddingRight":"0px","paddingLeft":"0px"}},"cardItemInfo":{"default":{"display":"none"}},"checkedCardIcon":{"default":{"display":"none"}},"cardStatus":{"default":{"position":"static","width":"44px","height":"22px","fontSize":"var(--business-text-size-14)","lineHeight":"22px","borderTopLeftRadius":"10px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"10px","textAlign":"center"}},"cardIcon":{"default":{"display":"none"}}},
keyWord:"",
defaultChecked:"",
tab:false,
collapse:false,
collapseText:"数据",
displayCount:"0",
dataAlias:{"header":"header","icon":"icon","label":"label","value":"value","state":"state","stateColor":"stateColor","stateBgColor":"stateBgColor","list":"list","labelColor":"labelColor","labelBgColor":"labelBgColor","type":"type","src":"src"},
data:[{"state":"--","stateColor":"rgba(0, 0, 0, 0.9)","stateBgColor":"#AAA"}], 
 },
},
tTextx0x1x3: {
defaultStyle: {
            default: {"width":"auto","height":"24px","color":"rgba(0, 255, 200, 1)","position":"unset","left":"256px","top":"-229px","padding":"0 4px","backgroundColor":"","fontSize":"var(--business-text-size-14)","lineHeight":"22px","textAlign":"center","borderTopLeftRadius":"10px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"10px","animationName":"","borderLeft":"1px solid rgba(0,255,200,1)","borderTop":"1px solid rgba(0,255,200,1)","borderRight":"1px solid rgba(0,255,200,1)","borderBottom":"1px solid rgba(0,255,200,1)","marginRight":"10px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","pointerEvents":"none"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"24px","color":"rgba(0, 255, 200, 1)","position":"unset","left":"256px","top":"-229px","padding":"0 4px","backgroundColor":"","fontSize":"var(--business-text-size-14)","lineHeight":"22px","textAlign":"center","borderTopLeftRadius":"10px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"10px","animationName":"","borderLeft":"1px solid rgba(0,255,200,1)","borderTop":"1px solid rgba(0,255,200,1)","borderRight":"1px solid rgba(0,255,200,1)","borderBottom":"1px solid rgba(0,255,200,1)","marginRight":"10px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","pointerEvents":"none"}}}, 
 },
},
tTextx0x1x4: {
defaultStyle: {
            default: {"width":"300px","height":"22px","color":"#fff","position":"unset","left":"248px","top":"-198px","lineHeight":"20px","animationName":"","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","pointerEvents":"none","fontSize":"var(--business-text-size-14)"},
            
            },
 default: { 
 
label:"首要污染物：--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"300px","height":"22px","color":"#fff","position":"unset","left":"248px","top":"-198px","lineHeight":"20px","animationName":"","textAlign":"left","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","pointerEvents":"none","fontSize":"var(--business-text-size-14)"}}},
showTitle:true, 
 },
},
});
const setContentComponentName = (menuValue) => {
if (!menuValue) return;
switch (menuValue) {
  // 实时监测
  case 'realTimeMonitor':
    state.contentComponentName = 'airOverviewSiteRealtimeMonitorComponent';
    break;
  // 变化趋势
  case 'changeTrend':
    state.contentComponentName = 'airOverviewSiteChangeTrentComponent';
    break;
  // 气象分析
  case 'meteorologyAna':
    state.contentComponentName = 'airOverviewSiteMeteorologyAnalComponent';
    break;
  // 报警记录
  case 'warnRecord':
    state.contentComponentName = 'airOverviewSiteWarnRecordComponent';
    break;
  // 关联站点
  case 'airOverviewSiteRelatedSite':
    state.contentComponentName = 'airOverviewSiteRelatedSiteComponent';
    break;
  default:
    break;
}
};
const initPage = () => {
console.log(global.businessDialog.dialogParmas, 'test');
if (global.businessDialog.dialogParmas.layerName === '航拍点位') {
  global.businessDialog.dialogName = '';
  // return;
}
state.POINT_CODE = global.businessDialog.dialogParmas.POINT_CODE;
state.timeType = global.air.timeType;
state.timeValue = global.air.timeValue;
if (state.POINT_CODE) {
  apiRegistry.getBaseInfo.request();
  apiRegistry.getHeaderInfo.request();
  // apiRegistry.getMenu.request();
}
};
const setProvider = () => {
provide('airPointState', state);
};
const getAQIColor = (level) => {
/**
 * 获取等级数据
 * level：aqi等级值，1-6，无数据为7
 */
switch (level) {
  case '1':
  case 1:
    return '#00E400';
  case '2':
  case 2:
    return '#FFFF00';
  case '3':
  case 3:
    return '#FF7E00';
  case '4':
  case 4:
    return '#FF0000';
  case '5':
  case 5:
    return '#99004C';
  case '6':
  case 6:
    return '#7E0023';
  case '7':
  case 7:
    return '#AAAAAA';
  default:
    return '#AAAAAA';
}
};
const handleClickQuery = () => {
const pointInfo = global.businessDialog.dialogParmas;
// 周边查询
const pointLocation = [];
pointLocation.push(parseFloat(pointInfo.LONGITUDE));
pointLocation.push(parseFloat(pointInfo.LATITUDE));

/* 发送webSocket消息 */
/*if (rootData?.sendMessage) {
  rootData?.sendMessage({
    id: guid(true, 'lego'), // 唯一索引
    type: "runInteractive", // 消息名称
    data: [ // 消息内容
      { shareCode: "POINT_LOACTION", runtimeValue: JSON.stringify(pointLocation) },
      { shareCode: "POINT_LOACTION_NAME", runtimeValue: pointInfo.POINT_NAME }
    ]
  });
}*/

rootData.rootSocket.emit('message', {
  type: 'showAirTraceDetail',
  room: global.socketRoom,
  data: [ // 消息内容
    { shareCode: "POINT_LOACTION", runtimeValue: JSON.stringify(pointLocation) },
    { shareCode: "POINT_LOACTION_NAME", runtimeValue: pointInfo.POINT_NAME }
  ]
});
global.businessDialog.dialogName = '';
};
const handleClickTrace = () => {
// 发送消息给地图
rootData.rootSocket.emit('message', {
  type: 'showAirSourceTrace',
  room: global.socketRoom,
  data: [ // 消息内容
    {
      shareCode: "showAirSourceTrace",
      runtimeValue: state.POINT_CODE,
      pointType: global.businessDialog.dialogParmas.POINT_TYPE || '',
      isEnters: true,
      // 小时或天时间，天的时候拼接上 00
      traceTime: global.air.timeType === 'hour' ? global.air.timeValue : global.air.timeValue + ' 00',
      layerName: global.businessDialog.dialogParmas.layerName,
    }]
});

// POINT_CODE: '51018201001',
//   alarmTime: '2021-03-23 17',
//   aqiLevel: '2', // aqi级别 0：未获取数据 1： 优良 2：超标
//   primPollute: 'PM10', // 首要污染物
//   polluteLevel: '中度污染', // 污染级别
// isShowAlarmFlag: false
// endTime: '2021-03-23 17'
// pointType: '4'

/* 发送webSocket消息 */
// 超标状态-默认0，AQILEVELINDEX = 1,2 等于1， 优良 AQI > 100 超标，等于2
let exceedingTheStandardState = '0';
// 点位aqi等级level值
const pointAQILevelIndex = global.businessDialog.dialogParmas.AQI_LEVELINDEX || '';
if (pointAQILevelIndex) {
  if (pointAQILevelIndex === '1' || pointAQILevelIndex === '2') {
    exceedingTheStandardState = '1';
  } else if (global.businessDialog.dialogParmas.AQI > 100) {
    exceedingTheStandardState = '2';
  }
}
rootData.rootSocket.emit('message', {
  // id: guid(true, 'lego'), // 唯一索引
  type: 'showAirTraceDetail',
  room: global.socketRoom,
  data: [
    {
      shareCode: "showTraceDetail",
      runtimeValue: state.POINT_CODE,
      // 显示lego的溯源
      componentName: "waringForecastSyxqPanelComponent",
      componentParmas: {
        pointType: global.businessDialog.dialogParmas.POINT_TYPE || '',
        isShowAlarmFlag: global.businessDialog.dialogParmas.IS_BJ === '1',
        alarmTime: global.businessDialog.dialogParmas.AIRMONITORTIME || '',
        exceedingTheStandardState,
        primPollute: global.businessDialog.dialogParmas.PRIMPOLLUTE || '',
        polluteLevel: global.businessDialog.dialogParmas.POLLUTE_LAVEL || '',
        POINT_CODE: state.POINT_CODE,
        endTime: '',
      }
    }]
});

global.businessDialog.dialogName = '';
global.warningRightPointCode = state.POINT_CODE;
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getMenu: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.POINT_CODE","interfaceId":"365bdf06e6206428a083f238d4de166e"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.POINT_CODE,"interfaceId":"365bdf06e6206428a083f238d4de166e"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.POINT_CODE,"interfaceId":"365bdf06e6206428a083f238d4de166e"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMenu'] = res.data;
                
     
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  state.menuData = data.data.map(item => {
    return {
      name: item.NAME,
      label: item.LABEL,
      ...item
    }
  });
  state.menuSelect = state.menuData[0] && state.menuData[0].name || '';
  setContentComponentName(state.menuSelect);
  // 分割线显示
  state.dividerShow.divider1Show = state.menuData.length > 1;
  state.dividerShow.divider2Show = state.menuData.length > 2;
  state.dividerShow.divider3Show = state.menuData.length > 3;
  state.dividerShow.divider4Show = state.menuData.length > 4;
  let navTab = document.getElementById('t-tabs-3f14.634f07a5d');
  if (navTab && navTab.style) {
    navTab.style.height = state.menuData.length * 54 + 32 + 'px';
  }
} else {
  state.menuData = [];
  state.menuSelect = '';
  state.dividerShow.divider1Show = false;
  state.dividerShow.divider2Show = false;
  state.dividerShow.divider3Show = false;
  state.dividerShow.divider4Show = false;
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
 getBaseInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.POINT_CODE","interfaceId":"695a6bc133482fdb411d79f293380132"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.POINT_CODE,"interfaceId":"695a6bc133482fdb411d79f293380132"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.POINT_CODE,"interfaceId":"695a6bc133482fdb411d79f293380132"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     state.baseInfo = {
  "POINT_NAME": "--",
  "POINT_TYPE_NAME": "--",
  "POINT_STREET": "--",
  "POINT_ADDRESS": "--"
}
state.pageTitle = "--"
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  state.baseInfo = { ...data.data }
state.pageTitle = data.data.POINT_NAME || "--"
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.baseInfo = {
  "POINT_NAME": "--",
  "POINT_TYPE_NAME": "--",
  "POINT_STREET": "--",
  "POINT_ADDRESS": "--"
}
state.pageTitle = "--"
      reject(error);
    });
  });
},
              },
// 接口函数
 getHeaderInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"MONITORTIME":"state.timeValue","TIME_TYPE":"state.timeType","POINT_CODE":"state.POINT_CODE","interfaceId":"5f8e9ef373ff8dc7328c8d9b3585947a"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":state.timeValue,"TIME_TYPE":state.timeType,"POINT_CODE":state.POINT_CODE,"interfaceId":"5f8e9ef373ff8dc7328c8d9b3585947a"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"MONITORTIME":state.timeValue,"TIME_TYPE":state.timeType,"POINT_CODE":state.POINT_CODE,"interfaceId":"5f8e9ef373ff8dc7328c8d9b3585947a"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getHeaderInfo'] = res.data;
                
     state.headerInfo = {
  "PRIMPOLLUTE": "--",
  "POINT_TYPE_NAME": "--",
  "AQILEVELINDEX": "--",
  "AQI": "--"
};
state.firstPollution = "首要污染物：--"
state.AQI_LEVEL[0].state = "--";
state.AQI_LEVEL[0].stateBgColor = getAQIColor("");
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  state.headerInfo = data.data
  state.AQI_LEVEL[0].state = (Number(data.data.AQI) >= 0 ? data.data.AQI : "--");
  state.AQI_LEVEL[0].stateBgColor = getAQIColor(data.data.AQILEVELINDEX || "");
  state.firstPollution = `首要污染物：${replacePollutionCharacter(state.headerInfo.PRIMPOLLUTE || "--")}`
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.headerInfo = {
  "PRIMPOLLUTE": "--",
  "POINT_TYPE_NAME": "--",
  "AQILEVELINDEX": "--",
  "AQI": "--"
};
state.AQI_LEVEL[0].state = "--";
state.AQI_LEVEL[0].stateBgColor = getAQIColor("");
state.firstPollution = "首要污染物：--"
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewSiteForHourDayH', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPage();
// 执行自定义方法
setProvider();
onMounted(() => {
setPageScale('t-l-c-airOverviewSiteForHourDayH', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tTextx0x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x0.default, componentState.tTextx0x1x0?.[state.screenSize]));

 const tListCardCommonx0x1x2ComputedData = computed(() => _.merge({}, componentState.tListCardCommonx0x1x2.default, componentState.tListCardCommonx0x1x2?.[state.screenSize]));

 const tTextx0x1x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x3.default, componentState.tTextx0x1x3?.[state.screenSize]));

 const tTextx0x1x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x4.default, componentState.tTextx0x1x4?.[state.screenSize]));

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
tRowx0x1ComputedData,
tTextx0x1x0ComputedData,
tListCardCommonx0x1x2ComputedData,
tTextx0x1x3ComputedData,
tTextx0x1x4ComputedData,
};
},
};