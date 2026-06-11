window.airPollutionContributionComponent = {
template: 
`<div id="t-l-c-airPollutionContribution" class="t-l-c-airPollutionContribution" >` +
`<t-tabs-base id="t-tabs-base-fee7.18bf4596c" class="airPollutionContribution-t-tabs-base-0-0"  :data="tTabsBasex0x0ComputedData.data" :space="tTabsBasex0x0ComputedData.space" :selected-tab-val="state.contributionType" :inner-shadow-color="tTabsBasex0x0ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x0ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x0ComputedData.alias" :c-style="tTabsBasex0x0ComputedData.cStyle" @tab-click="ontabClick1733713594765">` +
`</t-tabs-base>` +
`<t-tabs-base id="t-tabs-base-abcb.1f5325622" class="airPollutionContribution-t-tabs-base-0-1"  :data="state.indexList" :space="tTabsBasex0x1ComputedData.space" :selected-tab-val="state.indexSelect" :inner-shadow-color="tTabsBasex0x1ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x1ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x1ComputedData.alias" :c-style="tTabsBasex0x1ComputedData.cStyle" :data-raw="tTabsBasex0x1ComputedData.dataRaw" @tab-click="ontabClick1733713658998_0_0">` +
`</t-tabs-base>` +
`<t-chart-pie-border id="t-chart-pie-border-b101.129b9ead1" class="airPollutionContribution-t-chart-pie-border-0-4"  :empty-img="tChartPieBorderx0x4ComputedData.emptyImg" :data="state.waterRightPollutionProgressData" :alias="tChartPieBorderx0x4ComputedData.alias" :unit="tChartPieBorderx0x4ComputedData.unit" :radius="tChartPieBorderx0x4ComputedData.radius" :separation="tChartPieBorderx0x4ComputedData.separation" :show-inner="tChartPieBorderx0x4ComputedData.showInner" :inner-style="tChartPieBorderx0x4ComputedData.innerStyle" :show-list="tChartPieBorderx0x4ComputedData.showList" :list-style="tChartPieBorderx0x4ComputedData.listStyle" :options="state.chartOption" :c-style="tChartPieBorderx0x4ComputedData.cStyle" :is-show-center="tChartPieBorderx0x4ComputedData.isShowCenter">` +
`</t-chart-pie-border>` +
`<t-rect v-if="state.waterRightPollutionProgressData.length !== 0" id="t-rect-4895.c306a297" class="airPollutionContribution-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle">` +
`</t-rect>` +
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
   chartOption: {},
   TIME_START: "",
   TIME_END: "",
   airPollutionContentState: {"timeType":"","endTime":"","startTime":""},
   indexSelect: "PM25",
   indexList: [{"label":"PM₂.₅","value":"PM25"},{"label":"PM₁₀","value":"PM10"},{"label":"SO₂","value":"SO2"},{"label":"NO₂","value":"NO2"},{"label":"CO","value":"CO"},{"label":"O₃","value":"O3"},{"label":"O₃-8h","value":"O3_8"}],
   contributionType: "gc",
   waterRightPollutionProgressData: [],
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
tTabsBasex0x0: {
defaultStyle: {
            default: {"width":"130px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
data:[{"label":"区间贡献","value":"gc"},{"label":"整体贡献","value":"zt"}],
space:1,
selectedTabVal:"gc",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":false},
cStyle:{"wrapper":{"default":{"width":"130px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"0px","top":"0px"}},"itemWrapper":{"default":{"width":"80px","height":"32px","fontSize":"14px","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px"}},"label":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}}, 
 },
},
tTabsBasex0x1: {
defaultStyle: {
            default: {"width":"270px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"140px","top":"0px"},
            
            },
 default: { 
 
data:[{"label":"PM₂.₅","value":"PM25"},{"label":"PM₁₀","value":"PM10"},{"label":"SO₂","value":"SO2"},{"label":"NO₂","value":"NO2"},{"label":"CO","value":"CO"},{"label":"O₃","value":"O3"},{"label":"O₃-8h","value":"O3_8"}],
space:1,
selectedTabVal:"PM25",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":false},
cStyle:{"wrapper":{"default":{"width":"270px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"140px","top":"0px"}},"itemWrapper":{"default":{"width":"80px","height":"32px","fontSize":"14px","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px"}},"label":{"default":{"fontSize":"14px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}},
dataRaw:[{"label":"{{PM25}}","value":"PM25"},{"label":"{{PM10}}","value":"PM10"},{"label":"{{SO2}}","value":"SO2"},{"label":"{{NO2}}","value":"NO2"},{"label":"CO","value":"CO"},{"label":"{{O3}}","value":"O3"},{"label":"{{O3}}-8h","value":"O3_8"}], 
 },
},
tChartPieBorderx0x4: {
defaultStyle: {
            default: {"width":"410px","height":"264px","top":"57px","left":"0px","position":"unset","animationName":""},
            
            },
 default: { 
 
emptyImg:"",
data:[],
alias:{"value":"value","name":"name"},
unit:"%",
radius:["50%","57%"],
separation:{"width":2},
showInner:false,
innerStyle:{"align":"top","color":"#DDD","numberFontsize":"0PX","numberFontWeight":"bold","fontSize":0},
showList:true,
listStyle:{"align":"right","value":true,"fontSize":14,"iconSize":14,"col":1},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})),
cStyle:{"wrapper":{"default":{"width":"410px","height":"264px","top":"57px","left":"0px","position":"unset","animationName":""}},"legendValue":{"default":{"color":"#fff"}},"legendName":{"default":{"color":"#B7E3FF"}},"legendItem":{"default":{"width":180,"maxWidth":"180px","margin":[0,10,0,0],"height":35}},"emptyText":{"default":{"color":"var(--business-no-data-color)","fontSize":"14px"}},"legendUnit":{"default":{"margin":[0,0,0,0]}}},
isShowCenter:false, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"170px","height":"170px","backgroundImage":"var(--business-pie-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"-4px","top":"104px","animationName":"","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"170px","height":"170px","backgroundImage":"var(--business-pie-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"-4px","top":"104px","animationName":"","position":"unset"}}}, 
 },
},
});
const changeAqi = (data) => {
// 改变aqi选中值
state.indexSelect = data;
// 获取过程贡献数据
getGCGXListData();
};
const getProvider = () => {
// const rootData = inject('airPollutionContentState');
// state.airPollutionContentState = rootData ? rootData : {
//   timeType: '',
//   endTime: '',
//   startTime: '',
// };

// watch(() => [rootData, global.regionaQuery], () => {
//   if (rootData) {
//     state.airPollutionContentState = rootData;

//     // 分析 的  时间段
//     state.TIME_START = rootData.analysisTimaRangeData[0];
//     state.TIME_END = rootData.analysisTimaRangeData[1];
//   }
//   // console.log(state.airPollutionContentState, '页面全局变量')

//   // 获取过程贡献数据
//   getGCGXListData();

// },
//   {
//     deep: true
//   }
// );

const rootData = inject('airPollutionContentState');
state.airPollutionContentState = rootData;

watch(() => [
  state.airPollutionContentState.startTime,
  state.airPollutionContentState.endTime,
  state.airPollutionContentState.analysisTimaRangeData,
  global.regionaQuery], () => {
    if (state.airPollutionContentState.analysisTimaRangeData) {

      // 分析 的  时间段
      state.TIME_START = state.airPollutionContentState.analysisTimaRangeData[0];
      state.TIME_END = state.airPollutionContentState.analysisTimaRangeData[1];
    }

    // 获取过程贡献数据
    getGCGXListData();

  },
  {
    deep: true
  }
);


state.chartOption = {
  "legend": {
    "show": false
  },
  "tooltip": {
    "confine": true,
    "show": true,
    "backgroundColor": '#050b1a',
    "style": {
      "color": "#ffffff"
    },
    formatter: function (params) {
      return `<span style='color: #ffffff'>${params.name}    ${params.value}%<span>`;
    }
  },
  "color": [
    "#00FF22",
    "#FFD878",
    "#0999FF",
    "#00FFFF",
    "#ADA6FF",
    "#FF8578",
    "#e5cf0d",
    "#97b552",
    "#95706d",
    "#dc69aa",
    "#07a2a4",
    "#9a7fd1",
    "#588dd5",
    "#f5994e",
    "#c05050",
    "#59678c",
    "#c9ab00",
    "#7eb00a",
    "#6f5553",
    "#c14089"
  ],
  "dataSeries": {
    "center": [
      81,
      "50%"
    ]
  }
}
};
const getTimeAxisdata = (data) => {
// // console.log(data, '测试接收到的分析选中内容');

// if (data?.timeRangeData?.length) {
//   state.TIME_START = data.timeRangeData[0];
//   state.TIME_END = data.timeRangeData[1];

//   // 获取过程贡献数据
//   getGCGXListData();
// }

};
const ontabClick1733713658998_0_0 = (data) => {
// 设置变量值
state.indexSelect = data.value;
// 执行自定义方法
changeAqi(data.value);
};
const ontabClick1733713594765 = (data) => {
// 设置变量值
state.contributionType = data.value;
// 执行自定义方法
changeAqi(state.indexSelect);
};
// 接口函数
const getGCGXListData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"END_TIME":state.airPollutionContentState.endTime,"START_TIME":state.airPollutionContentState.startTime,"TYPE":state.contributionType,"TIME_TYPE":state.airPollutionContentState.timeType,"REGION_TYPE":global.regionaQuery.paramsRegionType,"TIME_END":state.TIME_END,"TIME_START":state.TIME_START,"REGION_CODE":global.regionaQuery.regionCode,"POLLUTE":state.indexSelect,"interfaceId":"aeb99869de518fbf46490d5762536696"},}).then((res) => {
     // 成功的操作
     state.waterRightPollutionProgressData = [];
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  state.waterRightPollutionProgressData = res?.data?.data.map(item => ({
    name: item.POINT_NAME,
    value: item.RATIO
  }));
}

// 保存数据长度，父级页面需要根据数据长度调整DOM元素的top值
state.airPollutionContentState.contributionDataLength = 5;

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // state.waterRightPollutionProgressData = [];

      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [global.regionaQuery.paramsRegionType], () => {
getGCGXListData();
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-airPollutionContribution', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
onMounted(() => {
setPageScale('t-l-c-airPollutionContribution', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTabsBasex0x0ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x0.default, componentState.tTabsBasex0x0?.[state.screenSize]));

 const tTabsBasex0x1ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x1.default, componentState.tTabsBasex0x1?.[state.screenSize]));

 const tChartPieBorderx0x4ComputedData = computed(() => _.merge({}, componentState.tChartPieBorderx0x4.default, componentState.tChartPieBorderx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

return {
global,
state,
componentState,
tTabsBasex0x0ComputedData,
tTabsBasex0x1ComputedData,
tChartPieBorderx0x4ComputedData,
tRectx0x5ComputedData,
ontabClick1733713594765,
ontabClick1733713658998_0_0,
};
},
};