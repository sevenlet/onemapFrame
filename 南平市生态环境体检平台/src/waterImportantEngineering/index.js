window.waterImportantEngineeringComponent = {
template: 
`<div id="t-l-c-waterImportantEngineering" class="t-l-c-waterImportantEngineering" >` +
`<t-rect id="t-rect-8252.1a4ade4f4" class="waterImportantEngineering-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-e3a7.d7772ec8d" class="waterImportantEngineering-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-8cba.b16affff7" class="waterImportantEngineering-t-text-0-2"  :label="state.pointNameSource" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle" :show-title="tTextx0x2ComputedData.showTitle">` +
`</t-text>` +
`<t-rect id="t-rect-da62.857f90ab" class="waterImportantEngineering-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1733817210174">` +
`</t-rect>` +
`<t-text id="t-text-738d.67fdf6baf" class="waterImportantEngineering-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle">` +
`</t-text>` +
`<t-list-card id="t-list-card-1afd.46c2cc26d" class="waterImportantEngineering-t-list-card-0-5"  :data="state.cardList" :spacing-x="tListCardx0x5ComputedData.spacingX" :col="tListCardx0x5ComputedData.col" :direction="tListCardx0x5ComputedData.direction" :exchange-order="tListCardx0x5ComputedData.exchangeOrder" :unit-break="tListCardx0x5ComputedData.unitBreak" :key-field="tListCardx0x5ComputedData.keyField" :active-key-field="tListCardx0x5ComputedData.activeKeyField" :active="tListCardx0x5ComputedData.active" :c-style="tListCardx0x5ComputedData.cStyle">` +
`</t-list-card>` +
`<t-row id="t-row-1aec.588d3a901" class="waterImportantEngineering-t-row-0-6"  :c-style="tRowx0x6ComputedData.cStyle" :gutter="tRowx0x6ComputedData.gutter" :justify="tRowx0x6ComputedData.justify" :align="tRowx0x6ComputedData.align">` +
`<t-text id="t-text-0df0.1c50452" class="waterImportantEngineering-t-text-0-6-0"  :label="tTextx0x6x0ComputedData.label" :editable="tTextx0x6x0ComputedData.editable" :c-style="tTextx0x6x0ComputedData.cStyle" @click="onclick1734499551425">` +
`</t-text>` +
`</t-row>` +
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
   point: {"lon":"","lat":""},
   cardList: [{"title":"类别","num":"-"},{"title":"所在市州","num":" "},{"title":"时序要求","num":"-"},{"title":"计划总投资(万元)","num":"-"}],
   pointNameSource: "-",
   pointIdSource: "",
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
            default: {"width":"450px","height":"268.00002744533873px","position":"unset","left":"0.000022860156605020165px","top":"-0.000005856841994500428px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"268.00002744533873px","position":"unset","left":"0.000022860156605020165px","top":"-0.000005856841994500428px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"450px","height":"33.86536264099531px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"0.000022860156605020165px","top":"-0.000005856841994500428px","animationName":"","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"33.86536264099531px","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"0.000022860156605020165px","top":"-0.000005856841994500428px","animationName":"","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"360px","height":"17.986577181208055px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"24.000011430078303px","top":"9.780205570003034px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"0px","fontWeight":"700","animationName":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","cursor":"text"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"360px","height":"17.986577181208055px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"24.000011430078303px","top":"9.780205570003034px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","paddingLeft":"0px","fontWeight":"700","animationName":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","cursor":"text"}}},
showTitle:true, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"24px","height":"17.302713099742096px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"401.9999809125002px","top":"7.5225177005150385px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"17.302713099742096px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"401.9999809125002px","top":"7.5225177005150385px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"450px","height":"37.63129194630872px","color":"var(--t-font-color-gy1)","position":"unset","left":"0.000022860156605020165px","top":"230.34999456040782px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","backgroundColor":"var(--business-show-bg15)"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"37.63129194630872px","color":"var(--t-font-color-gy1)","position":"unset","left":"0.000022860156605020165px","top":"230.34999456040782px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tListCardx0x5: {
defaultStyle: {
            default: {"width":"410px","height":"157px","position":"unset","left":"20px","top":"59px","overflow":"auto","animationName":""},
            
            },
 default: { 
 
data:[{"title":"类别","num":"-"},{"title":"所在市州","num":" "},{"title":"时序要求","num":"-"},{"title":"计划总投资(万元)","num":"-"}],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"410px","height":"157px","position":"unset","left":"20px","top":"59px","overflow":"auto","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"150px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--business-text-avianize)","fontSize":"14px","paddingTop":"6px","paddingLeft":"16px","paddingBottom":"6px"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"264px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
tRowx0x6: {
defaultStyle: {
            default: {"width":"430px","height":"28px","position":"unset","left":"9px","top":"235px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"430px","height":"28px","position":"unset","left":"9px","top":"235px","animationName":""}}},
gutter:0,
justify:"end",
align:"middle", 
 },
},
tTextx0x6x0: {
defaultStyle: {
            default: {"width":"90px","height":"28px","color":"#00FFFF","fontSize":"14px","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--business-show-bg30)","textAlign":"left","lineHeight":"28px","position":"unset","left":"446px","top":"471.3999938964844px","cursor":"pointer","animationName":"","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-16/4357d0c57cd64ff588b70a02dc8fc255.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"8px 50%","-webkit-mask-position":"","paddingLeft":"24px","marginLeft":"20px"},
            
            },
 default: { 
 
label:"周边查询",
editable:false,
cStyle:{"wrapper":{"default":{"width":"90px","height":"28px","color":"#00FFFF","fontSize":"14px","borderTopLeftRadius":"28px","borderTopRightRadius":"28px","borderBottomLeftRadius":"28px","borderBottomRightRadius":"28px","backgroundColor":"var(--business-show-bg30)","textAlign":"left","lineHeight":"28px","position":"unset","left":"446px","top":"471.3999938964844px","cursor":"pointer","animationName":"","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-16/4357d0c57cd64ff588b70a02dc8fc255.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"8px 50%","-webkit-mask-position":"","paddingLeft":"24px","marginLeft":"20px"},"hover":{"backgroundColor":"var(--business-show-bg50)"}}}, 
 },
},
});
const getBlackWaterPointInfo = () => {

state.pointNameSource = global.businessDialog?.dialogParmas?.PROJ_NAME || '-';
state.pointIdSource = global.businessDialog?.dialogParmas?.PROJ_ID || '';

if (state.pointIdSource) {
  // 获取点位详情信息
  getPointInfos();
}
};
const handleCloseMsg = () => {
/* 发送消息 */
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [ // 消息内容
    { shareCode: "close_map_window", runtimeValue: true },
    { shareCode: "close_window_code", runtimeValue: "surfaceWater_details" }
  ]
});

};
const handleClickQuery = () => {
if (state.point.lon && state.point.lat) {
  // 周边查询
  const pointLocation = [];
  pointLocation.push(parseFloat(state.point.lon));
  pointLocation.push(parseFloat(state.point.lat));

  /* 发送消息 */
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractive", // 消息名称
    data: [ // 消息内容
      { shareCode: "POINT_LOACTION", runtimeValue: JSON.stringify(pointLocation) },
      { shareCode: "POINT_LOACTION_NAME", runtimeValue: state.pointNameSource }
    ]
  });

}
};
const onclick1733817210174 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogName',
                    value:'',
                    data: {
                      businessDialog:{dialogName: ''}
                    },
                  });
// 执行自定义方法
handleCloseMsg();
};
const onclick1734499551425 = () => {
// 执行自定义方法
handleClickQuery();
};
// 接口函数
const getPointInfos = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"PROJ_ID":state.pointIdSource,"interfaceId":"e80518246dc3ec145b962ece71a55688"},}).then((res) => {
     // 成功的操作
     if (res?.status === 200 && res?.data?.data) {
  // 类别
  state.cardList[0].num = res?.data?.data?.CLASSIFY_NAME || '-';
  // 所在市州
  state.cardList[1].num = res?.data?.data?.REGION_NAME || '-';
  // 时序要求
  state.cardList[2].num = res?.data?.data?.PROJ_DEADLINE || '-';
  // 计划总投资（万元）
  state.cardList[3].num = res?.data?.data?.PROJ_INVESTMENT || '-';

  // 经纬度--周边查询使用
  state.point.lat = res?.data?.data?.LATITUDE || '';
  state.point.lon = res?.data?.data?.LONGITUDE || '';
} else {
  // 类别
  state.cardList[0].num = '-';
  // 所在市州
  state.cardList[1].num = '-';
  // 时序要求
  state.cardList[2].num = '-';
  // 计划总投资（万元）
  state.cardList[3].num = '-';
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      

      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-waterImportantEngineering', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-waterImportantEngineering', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
getBlackWaterPointInfo();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tListCardx0x5ComputedData = computed(() => _.merge({}, componentState.tListCardx0x5.default, componentState.tListCardx0x5?.[state.screenSize]));

 const tRowx0x6ComputedData = computed(() => _.merge({}, componentState.tRowx0x6.default, componentState.tRowx0x6?.[state.screenSize]));

 const tTextx0x6x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x6x0.default, componentState.tTextx0x6x0?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tTextx0x2ComputedData,
tRectx0x3ComputedData,
tTextx0x4ComputedData,
tListCardx0x5ComputedData,
tRowx0x6ComputedData,
tTextx0x6x0ComputedData,
onclick1733817210174,
onclick1734499551425,
};
},
};