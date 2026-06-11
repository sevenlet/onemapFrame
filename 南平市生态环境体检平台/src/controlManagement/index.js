window.controlManagementComponent = {
template: 
`<div id="t-l-c-controlManagement" class="t-l-c-controlManagement" >` +
`<t-rect id="t-rect-0911.f9ec9d352" class="controlManagement-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-component v-if="state.isShowSsc === true" id="t-component-17ec.931aeb44f" class="controlManagement-t-component-0-1"  :name="replaceCssVariables(filterData(state.sscComponent, componentPropBindingMap?.['t-component-17ec.931aeb44f']['name'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :loading="tComponentx0x1ComputedData.loading" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="replaceCssVariables(filterData(state.sscComponent, componentPropBindingMap?.['t-component-17ec.931aeb44f']['componentName'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode">` +
`</t-component>` +
`<t-component v-if="state.isShowSsc === false" id="t-component-9269.02c3f60da" class="controlManagement-t-component-0-2"  :name="replaceCssVariables(filterData(state.activeComponent, componentPropBindingMap?.['t-component-9269.02c3f60da']['name'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :loading="tComponentx0x2ComputedData.loading" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="replaceCssVariables(filterData(state.activeComponent, componentPropBindingMap?.['t-component-9269.02c3f60da']['componentName'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :page-id="tComponentx0x2ComputedData.pageId" :page-code="tComponentx0x2ComputedData.pageCode">` +
`</t-component>` +
`<t-tabs-base v-if="state.isShowSsc === false" id="t-tabs-base-aae5.2a23491ac" class="controlManagement-t-tabs-base-0-3"  :data="tTabsBasex0x3ComputedData.data" :space="tTabsBasex0x3ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.activeComponent, componentPropBindingMap?.['t-tabs-base-aae5.2a23491ac']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x3ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x3ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x3ComputedData.alias" :c-style="tTabsBasex0x3ComputedData.cStyle" @tab-click="ontabClick1766288680976">` +
`</t-tabs-base>` +
`<t-row v-if="state.isShowSsc === false" id="t-row-5443.7e7d1c1a1" class="controlManagement-t-row-0-5"  :c-style="tRowx0x5ComputedData.cStyle" :gutter="tRowx0x5ComputedData.gutter" :justify="tRowx0x5ComputedData.justify" :align="tRowx0x5ComputedData.align">` +
`<t-text id="t-text-0d1a.4b7df282f" class="controlManagement-t-text-0-5-0"  :label="tTextx0x5x0ComputedData.label" :editable="tTextx0x5x0ComputedData.editable" :c-style="tTextx0x5x0ComputedData.cStyle" @click="onclick1734337188119">` +
`</t-text>` +
`<t-text id="t-text-9ff1.92503251d" class="controlManagement-t-text-0-5-2"  :label="replaceCssVariables(filterData(global.airGlobalVariables.fireworks.surroundingAnalysis.activePointInfo.station, componentPropBindingMap?.['t-text-9ff1.92503251d']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x5x2ComputedData.editable" :c-style="tTextx0x5x2ComputedData.cStyle" :show-title="tTextx0x5x2ComputedData.showTitle">` +
`</t-text>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-0911.f9ec9d352":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-17ec.931aeb44f":{"attributeName":"tComponentx0x1","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-9269.02c3f60da":{"attributeName":"tComponentx0x2","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-tabs-base-aae5.2a23491ac":{"attributeName":"tTabsBasex0x3","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-component-d52b.90df00593":{"attributeName":"tComponentx0x4"},"t-row-5443.7e7d1c1a1":{"attributeName":"tRowx0x5","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-0d1a.4b7df282f":{"attributeName":"tTextx0x5x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-3de8.a011803c9":{"attributeName":"tTextx0x5x1"},"t-text-9ff1.92503251d":{"attributeName":"tTextx0x5x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"showTitle":{"filters":[]}},"t-text-1aa2.670c35704":{"attributeName":"tTextx0x5x3"}};
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
   isShowSsc: false,
   sscComponent: "mobileSurveyWaterDialogComponent",
   activeComponent: "surroundingAnalysisComponent",
   preDistance: "1",
   dispatchUrl: "http://19.130.161.126:8888/vue3-fs-task-micro/#/dispatchinglayout/special-task-assign?visible=true&paramValue=fszxrw&taskParamType=2&hiddenBackBtn=1",
   topicCode: "e12b1af3-144b-4fb2-844e-115e6606eba8",
   pointInfos: {"longitude":"","latitude":""},
   distanceUnit: "",
   pointValue: "",
   keywords: "",
   topicTags: [],
   tagCode: "",
   tagJson: "{}",
   activeTab: {"value":"","name":"","entityCode":""},
   cardLoading: false,
   listLoading: false,
   cardNoData: false,
   distance: 1,
   headerInfo: {"POINT_NAME":"建阳区环保","POINT_TYPE":"","POINT_TYPE_NAME":"-"},
   sourceParmasState: {},
   parentParams: {"POINT_CODE":""},
   defComponentName: "airSyxqPanelAarmComponent",
   componentName: "airSyxqPanelAarmComponent",
   selectedCard: [],
   cardList: [],
   pjResultList: [{"LAND_AREA":3000,"LONGITUDE":28.111425,"CONTACT_PHONE":"10086","COMMUNITY_ADDR":"四川省成都市武侯区长安路69号","POINT_TYPE":"小区","ES_SORT_RESULT":null,"HOUSEHOLD_COUNT":2000,"DISTRICT_NAME":"南平市","91E77393816229E42C10A6FFE07421F7":"小区","PKID":"002","STREET_NAME":"武侯大街","POINT_NAME":"希望花园","id":"002","RESPONSIBLE_PERSON":"齐达内","LATITUDE":118.282222,"KEY_REGION_CODE":"350703000000","canPosition":"true","operation":"派发","isCheck":"0"}],
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
            default: {"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"56px","left":"1px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"56px","left":"1px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"450px","height":"899px","margin":"0 auto","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"mobileSurveyWaterDialogComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"450px","height":"899px","margin":"0 auto","position":"unset","left":"0px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/mobileSurveyWaterDialog",
componentName:"mobileSurveyWaterDialogComponent",
pageId:"",
pageCode:"", 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"450px","height":"774px","margin":"0 auto","position":"unset","left":"0px","top":"120px"},
            
            },
 default: { 
 
name:"surroundingAnalysisComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"450px","height":"774px","margin":"0 auto","position":"unset","left":"0px","top":"120px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/onSiteFeedback",
componentName:"surroundingAnalysisComponent",
pageId:"",
pageCode:"", 
 },
},
tTabsBasex0x3: {
defaultStyle: {
            default: {"width":"423px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset"},
            
            },
 default: { 
 
data:[{"label":"周边分析","value":"surroundingAnalysisComponent"},{"label":"资源调度","value":"fireworksResourceDispatchComponent"},{"label":"现场反馈","value":"onSiteFeedbackComponent"},{"label":"效果评估","value":"effectEvaluationComponent"}],
space:5,
selectedTabVal:"surroundingAnalysisComponent",
innerShadowColor:"rgba(0,0,0,0)",
activeInnerShadowColor:"rgba(0,0,0,0)",
alias:{"label":"label","value":"value","disabled":"disabled"},
cStyle:{"wrapper":{"default":{"width":"423px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset"}},"itemWrapper":{"default":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","backgroundColor":"rgba(0, 61, 155, 0)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","width":"120px","height":"32px","fontSize":"var(--business-text-size-14)","lineHeight":"32px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","borderLeft":"1px solid rgba(0,61,155,0)","borderTop":"1px solid rgba(0,61,155,0)","borderRight":"1px solid rgba(0,61,155,0)","borderBottom":"1px solid rgba(0,61,155,0)","color":"var(--business-text-avianize)"},"active":{"background":"var(--business-tab-third-active-fill)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","backgroundColor":"rgba(3, 12, 52, 0)","borderLeft":"1px solid var(--business-tab-third-active-border)","borderTop":"1px solid var(--business-tab-third-active-border)","borderRight":"1px solid var(--business-tab-third-active-border)","borderBottom":"1px solid var(--business-tab-third-active-border)","box-shadow":"var(--business-tab-third-active-shadow) 0px 0px 18px 0px inset","color":"var(--business-tab-third-active-text)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","height":"32px"},"hover":{"backgroundColor":"rgba(0, 61, 155, 0)","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","borderLeft":"1px solid rgba(255,255,255,0)","borderTop":"1px solid rgba(255,255,255,0)","borderRight":"1px solid rgba(255,255,255,0)","borderBottom":"1px solid rgba(255,255,255,0)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","color":"var(--business-tab-third-active-border)"}}}, 
 },
},
tRowx0x5: {
defaultStyle: {
            default: {"width":"413px","height":"54px","top":"1px","left":"16px","position":"unset","justifyContent":"space-between","alignItems":"center","display":"flex","gap":"auto"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"413px","height":"54px","top":"1px","left":"16px","position":"unset","justifyContent":"space-between","alignItems":"center","display":"flex","gap":"auto"}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x5x0: {
defaultStyle: {
            default: {"width":"43px","height":"18px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"19px","left":"14px","backgroundColor":"var(--business-white)","position":"unset","cursor":"pointer","animationName":"","textOverflow":"ellipsis"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"43px","height":"18px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"19px","left":"14px","backgroundColor":"var(--business-white)","position":"unset","cursor":"pointer","animationName":"","textOverflow":"ellipsis"},"hover":{"backgroundColor":"var(--business-theme)"}}}, 
 },
},
tTextx0x5x2: {
defaultStyle: {
            default: {"width":"calc(100% - 63px)","height":"23px","color":"var(--skin-font-color-90)","fontSize":"var(--business-text-size-18)","borderLeft":"1px solid var(--business-white)","lineHeight":"20px","paddingLeft":"20px","top":"18px","left":"73px","position":"unset","animationName":"","marginLeft":"20px","textOverflow":"ellipsis","overflow":"hidden","white-space":"nowrap"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"calc(100% - 63px)","height":"23px","color":"var(--skin-font-color-90)","fontSize":"var(--business-text-size-18)","borderLeft":"1px solid var(--business-white)","lineHeight":"20px","paddingLeft":"20px","top":"18px","left":"73px","position":"unset","animationName":"","marginLeft":"20px","textOverflow":"ellipsis","overflow":"hidden","white-space":"nowrap"}}},
showTitle:true, 
 },
},
});
const initPage = () => {
// // airSyxqPanelAarmComponent
// // airSyxqPanelNoAarmComponent

// console.log('大气溯源---initPage')

// // 根据此标识，决定展示什么动态组件（已报警、未报警）
// if (state.sourceParmasState.componentSourceParmas.isShowAlarmFlag) {
//   // 设置当前展示的动态组件
//   state.componentName = 'airSyxqPanelAarmComponent';
//   // 设置从当月报警列表返回后展示的动态组件
//   state.defComponentName = 'airSyxqPanelAarmComponent';
// } else {
//   // 设置当前展示的动态组件
//   state.componentName = 'airSyxqPanelNoAarmComponent';
//   // 设置从当月报警列表返回后展示的动态组件
//   state.defComponentName = 'airSyxqPanelNoAarmComponent';
// }

// // console.log('state.componentName', state.componentName, state.defComponentName);


// // http://192.168.0.202:7777/view/view/show/index.vm?screenId=f18e26713e417bdd64d0d04fd25bdf16&alarmTime=2021-03-20%2023&endTime=&COUNT_ID=D08E60290BE515B5E0538500A8C01116
// // &alarmTime=2021-03-20%2023&endTime=&COUNT_ID=D08E60290BE515B5E0538500A8C01116
// state.parentParams = {
//   ...state.sourceParmasState.componentSourceParmas,
//   alarmTime: state.sourceParmasState.componentSourceParmas.alarmTime || '2022-05-07 13',
//   endTime: state.sourceParmasState.componentSourceParmas.endTime || '2022-05-07 16',
//   COUNT_ID: state.sourceParmasState.componentSourceParmas.COUNT_ID || 'e540c637-cde3-11ec-8f3e-d839ee064e9b',
//   POINT_CODE: state.sourceParmasState.componentSourceParmas.POINT_CODE || '51010501002',
// };

// console.log('获取传递过来的参数-溯源容器', state.parentParams);

// const init = async () => {
//   // 获取头部基本信息
//   await getHeaderInfo();
// };

// init();
console.log(global.airGlobalVariables.fireworks.surroundingAnalysis.activePointInfo, 8889)
state.pointInfos = global.airGlobalVariables.fireworks.surroundingAnalysis.activePointInfo;
state.pointValue = `[${state.pointInfos.longitude},${state.pointInfos.latitude}]`;
state.distanceUnit = `${state.distance}km`;
state.preDistance = state.distance;
// getCardAndListData();

};
const handleBack = () => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'switchRightContainerName',  // 消息类型名称
    // data: 'fireworksContentComponent'
    data: 'earlyWarningForecastEntryComponent'
    
  }
);


// /* 发送webSocket消息 */
// if (rootData?.sendMessage) {
//   /*rootData?.sendMessage({
//     id: guid(true, 'lego'), // 唯一索引
//     type: "runInteractive", // 消息名称
//     data: [{
//       shareCode: "hiddenTraceDetail",
//       runtimeValue: 'true'
//     }]
//   });*/
//   rootData.rootSocket.emit('message', {
//     room: global.socketRoom, // 房间号
//     type: "showAirTraceDetail", // 消息名称
//     data: [{
//       shareCode: "hiddenSurroundingsAnalysis",
//       runtimeValue: 'true'
//     }],
//   });
// }

// /* 发送Socket消息 */
// if (rootData?.rootSocket) {
//   // 清除溯源
//   rootData.rootSocket.emit('message', {
//     room: global.socketRoom, // 房间号
//     type: "closeWarningTraceDetail", // 消息名称
//     data: null,
//   });
// }

// rootData.rootSocket.emit('message', {
//   room: global.socketRoom,// 房间号
//   type: "runInteractiveChange", // 消息名称
//   data: [
//     {
//       "code": "closePointTrace",
//       "shareCode": "closePointTrace",
//       "defaultValue": "true",
//       "runtimeValue": "true"
//     }, {
//       "code": "hiddenTraceDetail",
//       "shareCode": "hiddenTraceDetail",
//       "defaultValue": "true",
//       "name": "",
//       "runtimeValue": "true"
//     }
//   ]
// });

// // 清除溯源筛选的标签
// rootData.rootEmit(
//   // 固定的消息名称，不能修改
//   'rootData:change',
//   {
//     // 全局变量的键名
//     key: 'waterGlobalVariables.sourceApportionment.selectedTagJson',
//     // 将要修改的全局变量的键值
//     value: '{}'
//   }
// );

};
const handlePanelVisisble = (isFilterPanelShow) => {

// const filterPanelDom = document.getElementById('t-component-d52b.90df00593');
// const panelDom = document.getElementById('t-component-6538.bd4ec5b54');
// // const filterPanelDom = document.getElementById('t-l-c-warinTagFilterPanel');
// // const panelDom = document.getElementById('t-l-c-TraceabilityContent');
// if (!filterPanelDom || !panelDom) {
//   return;
// }

// // 若展示筛选面板
// if (isFilterPanelShow) {
//   panelDom.style.visibility = 'hidden';
//   filterPanelDom.style.visibility = 'visible';
// } else {
//   filterPanelDom.style.visibility = 'hidden';
//   panelDom.style.visibility = 'visible';
// }

};
const handleClickCard = (item,checkedList) => {
const checkedListName = checkedList.map(item => item.M_TYPE)
// 点击全部
if (item.M_TYPE === '全部') {
  // 选中“全部”，则其他项全部选中
  if (checkedListName.includes('全部')) {
    state.selectedCard = state.cardList.map(item => item.M_TYPE)
  } else {
    // 取消，则全部取消
    state.selectedCard = []
  }
} else {

  const allItemIndex = checkedListName.findIndex((n) => n === '全部');
  if (allItemIndex >= 0) {
    checkedListName.splice(allItemIndex, 1);
  }
  console.log(checkedListName);

  if (checkedListName.length === state.cardList.length - 1) {
    checkedListName.push('全部');
  }
  state.selectedCard = checkedListName;
}

const tagsValue = [];
state.selectedCard.forEach((card) => {
  const selectedTag = state.topicTags.find((tag) => tag.value === card);
  if (selectedTag) {
    tagsValue.push(selectedTag.value);
  }
})

state.tagJson = JSON.stringify({
  [state.tagCode]: tagsValue.join('$'),
})

// 全不选择的时候无需请求接口 直接清空数组
if (state.selectedCard.length) {
  apiRegistry.getListData.request();
} else {
  state.listData = [];
}

// 给地图发送消息
const selectValue = state.selectedCard.filter(item => item !== '全部')
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'changePointTyeByAirSourceMonitor',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      showTypes: selectValue,
    }
  }
);



};
const gotoMapLocation = (row,column) => {
if (column.label === '定位') {
  // 给地图发消息
  /* 发送webSocket消息 */
  if (rootData?.sendMessage) {
    rootData.rootSocket.emit('message', {
      room: global.socketRoom, // 房间号
      type: "gotoPoint", // 消息名称
      data: {
        longitude: row.LONGITUDE,
        latitude: row.LATITUDE,
      }
    });
  }
} else if (column.label === '操作') {
  // 派发任务
  dispatchTask(row.PKID);
}

};
const clickCard = (checkedList,item) => {
console.log(66666)

const checkedListName = checkedList.map(item => item.title)
// 点击全部
if (item.title === '全部') {
  // 选中“全部”，则其他项全部选中
  if (checkedListName.includes('全部')) {
    state.selectedCard = state.cardList.map(item => item.title)
  } else {
    // 取消，则全部取消
    state.selectedCard = []
  }
} else {

  const allItemIndex = checkedListName.findIndex((n) => n === '全部');
  if (allItemIndex >= 0) {
    checkedListName.splice(allItemIndex, 1);
  }
  console.log(checkedListName);

  if (checkedListName.length === state.cardList.length - 1) {
    checkedListName.push('全部');
  }
  state.selectedCard = checkedListName;
}

const tagsValue = [];
if (checkedListName.includes('全部')) {
  state.tagJson = '{}';
} else {
  state.selectedCard.forEach((cardName) => {
    const selectedTag = state.topicTags.find((tag) => tag.value === cardName);
    if (selectedTag) {
      tagsValue.push(selectedTag.value);
    }
  })

  state.tagJson = JSON.stringify({
    [state.tagCode]: tagsValue.join('$'),
  })
}


// 全不选择的时候无需请求接口 直接清空数组
if (state.selectedCard.length) {
  apiRegistry.getEnterList.request();
  // 更新地图参数
  sendUpdateParamsMsgToMap(true);
} else {
  state.pjResultList = [];
  // 更新地图参数
  sendUpdateParamsMsgToMap(false);
}


// 给地图发送消息
// const selectValue = state.selectedCard.filter(item => item !== '全部')
// rootData.rootSocket.emit(
//   'message',  // 固定的消息名称，不能修改
//   {
//     room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
//     type: 'changePointTyeByAirSourceMonitor',  // 消息类型名称
//     data: {                   // 消息内容，对象格式
//       showTypes: selectValue,
//     }
//   }
// );


};
const updateDIstanceUnit = () => {
state.distanceUnit = `${state.distance}km`;
};
const dispatchTask = (id) => {
/**
 * 派发任务
 */

// 记录行ID
localStorage.setItem('pointIds', id);
window.open(state.dispatchUrl);
};
const sendUpdateParamsMsgToMap = (visible) => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'updateHireStatus',  // 消息类型名称
    data: {
      queryParams: {
        distance: state.distanceUnit,
        queryField: 'POINT_NAME',
        keyword: state.keywords,
        topicCode: state.topicCode,
        locationField: 'location',
        useGisShape: false,
        pointValue: state.pointValue,
        gisType: 'geo_distance',
        REGION_CODE: '',
        tagJson: state.tagJson,
        hasGather: false,
        HasAllTag: true,
        ENTITY_CODE: 'tag_zbcx_1765365678180',
        pageSize: 2000,
        pageNum: 1
      },
      visible,
    }
  }
);
};
const handleDistanceInput = (data) => {
const regex = /^(0|[1-9]\d*)(\.\d+)?$/;
console.log(data, 5556)
if (!regex.test(data)) {
  // state.distance = state.preDistance;
  updateDIstanceUnit();
  return;
}
// state.distance = data;
updateDIstanceUnit();
state.preDistance = data;

// 更新列表数据
apiRegistry.getEnterList.request();
};
const getCardAndListData = () => {
async function getData() {
  // 获取主题数据
  await apiRegistry.getTopicTree.request();
  // 获取卡片数据
  apiRegistry.getCardData.request();
}

getData();
};
const showFirePoint = (activeCom) => {
// 现场反馈
if (activeCom === 'onSiteFeedbackComponent') {
  // 图层消息
  rootData.rootSocket.emit(
    'message',
    {
      room: global.socketRoom,
      type: 'updatePatrolReportStatus',
      data: {
        visible: true,
        startTime: '',
        endTime: ''
      }
    }
  );
}
};
const setActiveCard = () => {
if (global.airGlobalVariables.fireworks.activeTab) {
  state.activeComponent = global.airGlobalVariables.fireworks.activeTab;
  showFirePoint(state.activeComponent);
}
};
const onclick1734337188119 = () => {
// 执行自定义方法
handleBack();
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closeAirSourceTrace", // 消息名称
data: {}, // 发送的数据
});
};
const ontabClick1766288680976 = (data) => {
// 设置变量值
state.activeComponent = data.value;
// 执行自定义方法
showFirePoint(data.value);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getHeaderInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.businessServiceBaseUrl","params":{"POINT_CODE":"global.warningRightPointCode","interfaceId":"a72ff52d8a2db82b4d36c46b63011669"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.businessServiceBaseUrl,"params":{"POINT_CODE":global.warningRightPointCode,"interfaceId":"a72ff52d8a2db82b4d36c46b63011669"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.businessServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":global.warningRightPointCode,"interfaceId":"a72ff52d8a2db82b4d36c46b63011669"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getHeaderInfo'] = res.data;
                
     // 清空原始数据
state.headerInfo = {
  // 点位名称
  POINT_NAME: '-',
  // 点位类型 / 控制级别
  POINT_TYPE: '',
  // 点位类型 / 控制级别 - 文字
  POINT_TYPE_NAME: '-',
};

const { data } = res;

if (data?.head?.statusCode === '200' && data?.data) {
  state.headerInfo.POINT_NAME = data.data.POINT_NAME || '-';
  state.headerInfo.POINT_TYPE = data.data.POINT_TYPE || '';
  state.headerInfo.POINT_TYPE_NAME = data.data.POINT_TYPE_NAME || '-';
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 清空原始数据
state.headerInfo = {
  // 点位名称
  POINT_NAME: '-',
  // 点位类型 / 控制级别
  POINT_TYPE: '',
  // 点位类型 / 控制级别 - 文字
  POINT_TYPE_NAME: '-',
};
      reject(error);
    });
  });
},
              },
// 接口函数
 getEnterList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"distance\":\"state.distanceUnit\",\"queryField\":\"POINT_NAME\",\"keyword\":\"state.keywords\",\"topicCode\":\"state.topicCode\",\"locationField\":\"location\",\"useGisShape\":\"false\",\"pointValue\":\"state.pointValue\",\"gisType\":\"geo_distance\",\"REGION_CODE\":\"\",\"tagJson\":\"state.tagJson\",\"hasGather\":\"false\",\"HasAllTag\":\"true\",\"ENTITY_CODE\":\"tag_zbcx_1765365678180\",\"pageSize\":\"2000\",\"pageNum\":\"1\",\"interfaceId\":\"8b5ca6a3009f750b5b1f19a415589682\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"distance":state.distanceUnit,"queryField":"POINT_NAME","keyword":state.keywords,"topicCode":state.topicCode,"locationField":"location","useGisShape":"false","pointValue":state.pointValue,"gisType":"geo_distance","REGION_CODE":"","tagJson":state.tagJson,"hasGather":"false","HasAllTag":"true","ENTITY_CODE":"tag_zbcx_1765365678180","pageSize":"2000","pageNum":"1","interfaceId":"8b5ca6a3009f750b5b1f19a415589682"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"distance\":\state.distanceUnit\,\"queryField\":\"POINT_NAME\",\"keyword\":\state.keywords\,\"topicCode\":\state.topicCode\,\"locationField\":\"location\",\"useGisShape\":\"false\",\"pointValue\":\state.pointValue\,\"gisType\":\"geo_distance\",\"REGION_CODE\":\"\",\"tagJson\":\state.tagJson\,\"hasGather\":\"false\",\"HasAllTag\":\"true\",\"ENTITY_CODE\":\"tag_zbcx_1765365678180\",\"pageSize\":\"2000\",\"pageNum\":\"1\",\"interfaceId\":\"8b5ca6a3009f750b5b1f19a415589682\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getEnterList'] = res.data;
                
     // 清空列表数据
state.pjResultList = [];

const { data } = res;
if (res.status === 200 && Array.isArray(data?.page?.list)) {
  state.pjResultList = data?.page?.list.map((val) => ({
    ...val,
    canPosition: val.LONGITUDE && val.LATITUDE ? 'true' : 'false', // 是否能定位
    operation: '派发', // 操作
    isCheck: '0', // 1已勾选，0未勾选
  }));
console.log(state.pjResultList, 22333)
}
// 结束列表加载中动画
state.listLoading = false;
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 清空列表数据
state.pjResultList = [];
// 重置勾选状态
state.checkedIds = '';
      reject(error);
    });
  });
},
              },
// 接口函数
 getCardData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"distance\":\"state.distanceUnit\",\"pointValue\":\"state.pointValue\",\"gisType\":\"geo_distance\",\"useGisShape\":\"\",\"locationField\":\"location\",\"hasGather\":\"\",\"REGION_CODE\":\"global.regionaQuery.regionCode\",\"groupFields\":\"POINT_TYPE\",\"ENTITY_CODE\":\"tag_zbcx_1765365678180\",\"interfaceId\":\"32fbf72522e1a004b67b5d906410ec8d\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"distance":state.distanceUnit,"pointValue":state.pointValue,"gisType":"geo_distance","useGisShape":"","locationField":"location","hasGather":"","REGION_CODE":global.regionaQuery.regionCode,"groupFields":"POINT_TYPE","ENTITY_CODE":"tag_zbcx_1765365678180","interfaceId":"32fbf72522e1a004b67b5d906410ec8d"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"distance\":\state.distanceUnit\,\"pointValue\":\state.pointValue\,\"gisType\":\"geo_distance\",\"useGisShape\":\"\",\"locationField\":\"location\",\"hasGather\":\"\",\"REGION_CODE\":\global.regionaQuery.regionCode\,\"groupFields\":\"POINT_TYPE\",\"ENTITY_CODE\":\"tag_zbcx_1765365678180\",\"interfaceId\":\"32fbf72522e1a004b67b5d906410ec8d\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCardData'] = res.data;
                
     state.cardNoData = false;
console.log(22222)
if (res?.data?.groupResult?.length) {
  state.cardList = res?.data?.groupResult.map(item => {
    return {
      ...item,
      title: item?.POINT_TYPE,
      num: item?.doc_count || '0',
      unit: '家',
      color: 'var(--t-white)',
    }
  });

  const allNum = state.cardList.map((val) => val.num ? Number(val.num) : 0);

  const totalCount = allNum.reduce((val1, val2) => val1 + val2);

  state.cardList.unshift({
    title: '全部',
    num: totalCount,
    unit: '家',
    color: 'var(--t-white)',
  })

  let activeIndex = 0;

  /* 若有筛选项 */
  // if (global.waterGlobalVariables.sourceApportionment.selectedTagJson && global.waterGlobalVariables.sourceApportionment.selectedTagJson !== '{}') {
  //   // 找到企业的选项（只有企业能支持筛选，其他的不行）
  //   const index = state.cardList.findIndex((val) => val.title === '企业');

  //   if (index > -1) {
  //     activeIndex = index;
  //   }
  // }
  state.activeTab.name = state.cardList[activeIndex].title;
  

  // handleListParams(state.airSourceTraceData.bufferLayerPoly?.[0]); 

  clickCard([state.cardList[activeIndex]], state.cardList[activeIndex]);
} else {
  state.cardList = [];
  state.pjResultList = [];
  state.cardNoData = true;
  state.listLoading = false;
}

state.cardLoading = false;
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.cardLoading = false;

      reject(error);
    });
  });
},
              },
// 接口函数
 getTopicTree: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"istree":"true","topicCode":"state.topicCode","interfaceId":"982f4b5298e7d6c89796ffca11f9dacb"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"istree":"true","topicCode":state.topicCode,"interfaceId":"982f4b5298e7d6c89796ffca11f9dacb"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"istree":"true","topicCode":state.topicCode,"interfaceId":"982f4b5298e7d6c89796ffca11f9dacb"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTopicTree'] = res.data;
                
       console.log(res.data.tags, 8887)
if(res.data.tags?.[0]?.children) {
  const item = res.data.tags?.[0]?.children?.find((val) => val.nodeName === '周边类型');
  state.tagCode = item?.tagCode;
  state.topicTags = item?.range || [];
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
watch(() => [global.warningRightPointCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getHeaderInfo', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-controlManagement', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPage();
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "addCircle", // 消息名称
data: {"distance":state.distance,"lat":state.pointInfos.latitude,"lon":state.pointInfos.longitude}, // 发送的数据
});
/* 接收socket.io消息 */
const onSocketChange5051933cb6ca40f481ce = function (data) {
if(data.type === "showTrajectoryWaterSprinkler"){
try{
// 设置变量值
state.isShowSsc = true;
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange5051933cb6ca40f481ce);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange5051933cb6ca40f481ce);
});
/* 接收socket.io消息 */
const onSocketChangedc6550acd7c84f76806a = function (data) {
if(data.type === "closeTrajectoryWaterSprinkler"){
try{
// 设置变量值
state.isShowSsc = false;
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangedc6550acd7c84f76806a);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangedc6550acd7c84f76806a);
});
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'airGlobalVariables.fireworks.isEnterHdPage',
                    value:true,
                    data: {
                      airGlobalVariables:{fireworks:{isEnterHdPage: true}}
                    },
                  });
onMounted(() => {
setPageScale('t-l-c-controlManagement', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
handlePanelVisisble(false);
// 执行自定义方法
setActiveCard();
});
onBeforeUnmount(() => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "removeCircle", // 消息名称
data: {}, // 发送的数据
});
// 执行自定义方法
sendUpdateParamsMsgToMap(false);
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "clearGotoPoint", // 消息名称
data: {}, // 发送的数据
});
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tTabsBasex0x3ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x3.default, componentState.tTabsBasex0x3?.[state.screenSize]));

 const tRowx0x5ComputedData = computed(() => _.merge({}, componentState.tRowx0x5.default, componentState.tRowx0x5?.[state.screenSize]));

 const tTextx0x5x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x5x0.default, componentState.tTextx0x5x0?.[state.screenSize]));

 const tTextx0x5x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x5x2.default, componentState.tTextx0x5x2?.[state.screenSize]));

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
tComponentx0x1ComputedData,
tComponentx0x2ComputedData,
tTabsBasex0x3ComputedData,
tRowx0x5ComputedData,
tTextx0x5x0ComputedData,
tTextx0x5x2ComputedData,
ontabClick1766288680976,
onclick1734337188119,
};
},
};