window.airQualityIndexComponent = {
template: 
`<div id="t-l-c-airQualityIndex" class="t-l-c-airQualityIndex" >` +
`<t-component id="t-component-9aff.7b0c0a91f" class="airQualityIndex-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName">` +
`</t-component>` +
`<t-gradient-shadow-text id="t-gradient-shadow-text-f16c.d2d9ec1f7" class="airQualityIndex-t-gradient-shadow-text-0-1"  :label="tGradientShadowTextx0x1ComputedData.label" :c-style="tGradientShadowTextx0x1ComputedData.cStyle" :shadow-style="tGradientShadowTextx0x1ComputedData.shadowStyle">` +
`</t-gradient-shadow-text>` +
`<t-tabs id="t-tabs-cc3f.8a7e8653d" class="airQualityIndex-t-tabs-0-2"  :alias="tTabsx0x2ComputedData.alias" :data="tTabsx0x2ComputedData.data" :model-value="tTabsx0x2ComputedData.model-value" :tab-position-extend="tTabsx0x2ComputedData.tabPositionExtend" :stretch="tTabsx0x2ComputedData.stretch" :c-style="tTabsx0x2ComputedData.cStyle" :active-tab="replaceCssVariables(state.tabSelect, global?.theme || global?.activeTheme || '默认主题')" @tab-click="ontabClick1741768873526">` +
`</t-tabs>` +
`<t-component id="t-component-aeee.238803047" class="airQualityIndex-t-component-0-3"  :name="tComponentx0x3ComputedData.name" :c-style="tComponentx0x3ComputedData.cStyle" :src="tComponentx0x3ComputedData.src" :component-name="tComponentx0x3ComputedData.componentName">` +
`</t-component>` +
`<t-component id="t-component-5bc3.dc826a2d2" class="airQualityIndex-t-component-0-4"  :name="tComponentx0x4ComputedData.name" :c-style="tComponentx0x4ComputedData.cStyle" :src="tComponentx0x4ComputedData.src" :component-name="tComponentx0x4ComputedData.componentName">` +
`</t-component>` +
`<t-component id="t-component-4bb4.a3fd5ee9c" class="airQualityIndex-t-component-0-5"  :name="tComponentx0x5ComputedData.name" :loading="tComponentx0x5ComputedData.loading" :c-style="tComponentx0x5ComputedData.cStyle" :src="tComponentx0x5ComputedData.src" :component-name="tComponentx0x5ComputedData.componentName" :page-id="tComponentx0x5ComputedData.pageId" :page-code="tComponentx0x5ComputedData.pageCode">` +
`</t-component>` +
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
   latestTimeStr: "",
   dateType: "",
   yearMonth: "",
   monitorTime: "",
   tabSelect: "day",
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
            default: {"width":"400px","height":"52px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
name:"secondTitleComponent",
cStyle:{"wrapper":{"default":{"width":"400px","height":"52px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/secondTitle",
componentName:"secondTitleComponent", 
 },
},
tGradientShadowTextx0x1: {
defaultStyle: {
            default: {"width":"105px","height":"31px","position":"unset","left":"43px","top":"15px","fontFamily":"方正综艺","fontSize":"20px","color":"","textAlign":"left","backgroundColor":"","letterSpacing":"2px","paddingLeft":"0px","marginLeft":"0px","animationName":"","cursor":"auto"},
            
            },
 default: { 
 
label:"空气质量",
cStyle:{"wrapper":{"default":{"width":"105px","height":"31px","position":"unset","left":"43px","top":"15px","fontFamily":"方正综艺","fontSize":"20px","color":"","textAlign":"left","backgroundColor":"","letterSpacing":"2px","paddingLeft":"0px","marginLeft":"0px","animationName":"","cursor":"auto"}},"textStyle":{"default":{"-webkit-text-fill-color":"transparent","-webkit-background-clip":"text","backgroundImage":"linear-gradient(rgba(255, 255, 255, 1),rgba(255, 255, 255, 1))","fontWeight":"300","color":"rgba(255, 255, 255, 1)","fontSize":"20px","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","fontFamily":"方正综艺","paddingLeft":"10px","paddingTop":"4px"}},"textShadowStyle":{"default":{"fontWeight":"bold","color":"","fontFamily":"方正综艺","paddingLeft":"10px","paddingTop":"4px"}}},
shadowStyle:{"blur":"8PX","color":"#00738A"}, 
 },
},
tTabsx0x2: {
defaultStyle: {
            default: {"position":"unset","width":"168px","height":"28px","backgroundColor":"rgba(0, 140, 255, 0)","fontSize":"14px","lineHeight":"26px","animationName":"","left":"225px","top":"15px"},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[{"label":"当日","name":"day"},{"label":"当月","name":"month"},{"label":"当年","name":"year"}],
'model-value':"work",
tabPositionExtend:"top-start",
stretch:true,
cStyle:{"wrapper":{"default":{"position":"unset","width":"168px","height":"28px","backgroundColor":"rgba(0, 140, 255, 0)","fontSize":"14px","lineHeight":"26px","animationName":"","left":"225px","top":"15px"}},"itemWrapper":{"default":{"height":"28px","width":"68px","lineHeight":"28px","fontSize":"14px","color":"var(--business-white)","borderLeft":"1px none rgba(23,62,228,0)","borderTop":"1px none rgba(23,62,228,0)","borderRight":"1px none rgba(23,62,228,0)","borderBottom":"1px none rgba(23,62,228,0)","backgroundColor":"rgba(20, 112, 204, 0)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""},"active":{"fontSize":"14px","color":"var(--business-tab-active-text)","backgroundColor":"rgba(37, 156, 224, 0)","borderLeft":"0px none rgba(0,212,255,0.6)","borderTop":"0px none rgba(0,212,255,0.6)","borderRight":"0px none rgba(0,212,255,0.6)","borderBottom":"0px none rgba(0,212,255,0.6)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","box-shadow":"","backdropFilter":"blur(0px)","lineHeight":"28px"},"hover":{"color":"var(--business-tab-active-text)","lineHeight":"28px"}},"itemActiveBorder":{"active":{"backgroundColor":"rgba(255, 0, 0, 0)"},"default":{"borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"rgba(222, 233, 14, 0)"}}},
activeTab:"day", 
 },
},
tComponentx0x3: {
defaultStyle: {
            default: {"width":"400px","height":"202px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"127px","animationName":""},
            
            },
 default: { 
 
name:"pollutantConcentrationComponent",
cStyle:{"wrapper":{"default":{"width":"400px","height":"202px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"127px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/pollutantConcentration",
componentName:"pollutantConcentrationComponent", 
 },
},
tComponentx0x4: {
defaultStyle: {
            default: {"width":"400px","height":"242px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"338px","animationName":""},
            
            },
 default: { 
 
name:"cityRankComponent",
cStyle:{"wrapper":{"default":{"width":"400px","height":"242px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"338px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/cityRank",
componentName:"cityRankComponent", 
 },
},
tComponentx0x5: {
defaultStyle: {
            default: {"width":"400px","height":"58px","margin":"0 auto","position":"unset","left":"0px","top":"61px"},
            
            },
 default: { 
 
name:"excellentRatioComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"400px","height":"58px","margin":"0 auto","position":"unset","left":"0px","top":"61px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/[object Object]",
componentName:"excellentRatioComponent",
pageId:"b4d9110d42824f7fbb85d87c5a44137d",
pageCode:"excellentRatio", 
 },
},
});
const handleDomEle = () => {
// t-component-45e9.53dbefa36  优良比率
// t-component-aeee.238803047 污染物浓度
// t-component-5bc3.dc826a2d2 城市排名
// 排名表格 t-table-3171.b5e999432
const excellentDom = document.getElementById('t-component-45e9.53dbefa36');
const pollutantDom = document.getElementById('t-component-aeee.238803047');
const rankDom = document.getElementById('t-component-5bc3.dc826a2d2');
const rankComponentBg = document.getElementById('t-rect-07a2.3630f2dd5');
if (excellentDom) {
  // 优良比率隐藏
  excellentDom.style.display = state.tabSelect === 'day' ? 'none' : 'block';
}
// top值相差66px（优良比率高58px+8px的间隙）
if (pollutantDom) {
  pollutantDom.style.top = state.tabSelect === 'day' ? '61px' : '127px';
}
if (rankDom) {
  rankDom.style.top = state.tabSelect === 'day' ? '272px' : '338px';
  rankDom.style.height = state.tabSelect === 'day' ? '310px' : '242px';
}
if (rankComponentBg) {
  rankComponentBg.style.height = state.tabSelect === 'day' ? '310px' : '242px';
}
};
const setProvider = () => {
provide('airQualityState', state);
};
const handleTabChange = () => {
// 当月CUR_MONTH，当年ACC_MONTH
const dateTypeMap = {
  'month': 'CUR_MONTH',
  'year': 'ACC_MONTH',
  'day': 'DAY',
};
let formatStr;
switch (state.tabSelect) {
  case 'day':
    formatStr = 'yyyy-MM-dd';
    break;
  case 'month':
    formatStr = 'yyyy-MM';
    break;
  case 'year':
    formatStr = 'yyyy';
    break;
  default:
    break;
}
state.monitorTime = dateFormat(new Date(state.latestTimeStr), formatStr);
// 年月
state.yearMonth = dateFormat(new Date(state.latestTimeStr), 'yyyy-MM');
state.dateType = dateTypeMap[state.tabSelect];
};
const sendThreeJSMapMes = () => {
// 切换专题至“福建生态云”时，需要给三维地图发的消息
// 因为需要用到时间，所以选择在这个页面请求完最新时间发消息
const theme = global.theme === '蓝色主题' ? 'blue' : 'green';

rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'threeJSMapChangeAllStatus', // 消息名称
  data: {
    indicator: 'PM25', // 指标，默认选中PM2.5
    time: state.dateType === 'DAY' ? state.monitorTime : state.yearMonth, // 时间
    dateType: state.dateType, //时间类型，默认DAY,小时：HOUR,日：DAY,月：CUR_MONTH、年：ACC_MONTH
    rendType: 'idw',
    REGION_NAME: global.REGION_NAME, // 行政区名称，非必须
    REGION_CODE: global.REGION_CODE, // 行政区编码
    theme: theme,
    mapType: 'fjsty', // 当前专题类型，驾驶舱： jsc  生态云：fjsty
    dataSource:'sty', // 如果是生态云发送的消息，加上这个值
  },
});
};
const initData = () => {
const initReq = async () => {
  await getLatestTime();
  sendThreeJSMapMes();
};

initReq();
};
const ontabClick1741768873526 = (data) => {
// 设置变量值
state.tabSelect = data.name;
// 执行自定义方法
handleDomEle();
// 执行自定义方法
handleTabChange();
};
// 接口函数
const getLatestTime = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"POINT_TYPE":"12","DATE_TYPE":"DAY","REGION_CODE":global.REGION_CODE,"interfaceId":"346e3e65838e484bf9df6078f354e3a3"},}).then((res) => {
     // 成功的操作
     const { data } = res.data;
if (data && data.length) {
  state.latestTimeStr = data[0].MAX_TIME || new Date();
} else {
  state.latestTimeStr = new Date();
}
handleTabChange();
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.latestTimeStr = new Date();
handleTabChange();
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-airQualityIndex', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-airQualityIndex', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
initData();
// 执行自定义方法
handleDomEle();
});
// 执行自定义方法
setProvider();
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tGradientShadowTextx0x1ComputedData = computed(() => _.merge({}, componentState.tGradientShadowTextx0x1.default, componentState.tGradientShadowTextx0x1?.[state.screenSize]));

 const tTabsx0x2ComputedData = computed(() => _.merge({}, componentState.tTabsx0x2.default, componentState.tTabsx0x2?.[state.screenSize]));

 const tComponentx0x3ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3.default, componentState.tComponentx0x3?.[state.screenSize]));

 const tComponentx0x4ComputedData = computed(() => _.merge({}, componentState.tComponentx0x4.default, componentState.tComponentx0x4?.[state.screenSize]));

 const tComponentx0x5ComputedData = computed(() => _.merge({}, componentState.tComponentx0x5.default, componentState.tComponentx0x5?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tComponentx0x0ComputedData,
tGradientShadowTextx0x1ComputedData,
tTabsx0x2ComputedData,
tComponentx0x3ComputedData,
tComponentx0x4ComputedData,
tComponentx0x5ComputedData,
ontabClick1741768873526,
};
},
};