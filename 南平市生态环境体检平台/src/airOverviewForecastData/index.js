window.airOverviewForecastDataComponent = {
template: 
`<div id="t-l-c-airOverviewForecastData" class="t-l-c-airOverviewForecastData" >` +
`<t-list-card-weather-forecast v-if="state.weatherForecast.length !== 0" id="t-list-card-weather-forecast-3a0a.01fa53d42" class="airOverviewForecastData-t-list-card-weather-forecast-0-0"  :data="replaceCssVariables(filterData(state.weatherForecast, componentPropBindingMap?.['t-list-card-weather-forecast-3a0a.01fa53d42']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tListCardWeatherForecastx0x0ComputedData.cStyle" :gap="tListCardWeatherForecastx0x0ComputedData.gap" :other-indicator-style="tListCardWeatherForecastx0x0ComputedData.otherIndicatorStyle" :temperature-unit="replaceCssVariables(filterData(state.temperatureUnit, componentPropBindingMap?.['t-list-card-weather-forecast-3a0a.01fa53d42']['temperatureUnit'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-list-card-weather-forecast>` +
`<t-chart-design v-if="state.weatherForecast.length !== 0" id="t-chart-design-870b.fa2315b82" class="airOverviewForecastData-t-chart-design-0-1"  :empty-img="tChartDesignx0x1ComputedData.emptyImg" :c-style="tChartDesignx0x1ComputedData.cStyle" :options="replaceCssVariables(filterData(state.chartOption, componentPropBindingMap?.['t-chart-design-870b.fa2315b82']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-chart-design>` +
`<t-text v-if="state.weatherForecast.length === 0" id="t-text-1818.018b69ab3" class="airOverviewForecastData-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle">` +
`</t-text>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-list-card-weather-forecast-3a0a.01fa53d42":{"attributeName":"tListCardWeatherForecastx0x0","data":{"filters":[]},"cStyle":{"filters":[]},"gap":{"filters":[]},"otherIndicatorStyle":{"filters":[]},"temperatureUnit":{"filters":[]}},"t-chart-design-870b.fa2315b82":{"attributeName":"tChartDesignx0x1","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-text-1818.018b69ab3":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   pointCode: "",
   chartOption: {},
   temperatureUnit: "℃",
   airOverviewContentState: {"timeValue":""},
   weatherForecast: [],
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
tListCardWeatherForecastx0x0: {
defaultStyle: {
            default: {"width":"410px","height":"212px","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
data:[],
cStyle:{"wrapper":{"default":{"width":"410px","height":"212px","position":"unset","left":"0px","top":"0px"}},"image":{"default":{"width":"0px","height":"0px"}},"AQIRangeLevelWrapper":{"default":{"position":"absolute","top":"35px","width":"51px","fontSize":"12px","height":"22px","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","lineHeight":"22px"}},"AQIRangeLevelMax":{"default":{"fontSize":"var(--business-text-size-12)","fontFamily":"微软雅黑","display":"none"}},"AQIRangeLevelMin":{"default":{"fontSize":"var(--business-text-size-12)","fontFamily":"微软雅黑"}},"AQIRangeLevelTilde":{"default":{"fontSize":"9px","fontFamily":"微软雅黑","display":"none"}},"card":{"default":{"height":"212px","background":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingBottom":"0px","paddingTop":"6px"},"hover":{"height":"212px","background":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingBottom":"0px","paddingTop":"6px"}},"day":{"default":{"display":"none"}},"date":{"default":{"color":"var(--business-strong)","fontSize":"var(--business-text-size-14)","fontFamily":"微软雅黑","fontWeight":"400","width":"57px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","textAlign":"center"}},"AQIValueRangeWrapper":{"default":{"display":"none"}},"desc":{"default":{"marginTop":"12px","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"temperatureRangeWrapper":{"default":{"fontSize":"12px","color":"","opacity":"0"}},"temperatureRangeMinLabel":{"default":{"backgroundColor":"","fontSize":"var(--business-text-size-14)","color":"var(--business-white)","fontFamily":"微软雅黑"}},"otherIndicator":{"default":{"fontSize":"var(--business-text-size-12)","color":"var(--business-white)","lineHeight":"14px"}},"temperatureRangeMaxLabel":{"default":{"display":"unset","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"temperatureUnit":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}},
gap:4,
otherIndicatorStyle:[{"fontFamily":"Microsoft YaHei","color":"var(--business-white)","fontWeight":"400","lineHeight":"var(--business-text-size-12)","padding":"","margin":"","width":"57px","fontSize":"var(--business-text-size-12)","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","textAlign":"center"}],
temperatureUnit:"℃", 
 },
},
tChartDesignx0x1: {
defaultStyle: {
            default: {"height":"48px","width":"410px","position":"unset","left":"0px","top":"102px","animationName":""},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"48px","width":"410px","position":"unset","left":"0px","top":"102px","animationName":""}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"410px","height":"212px","color":"var(--business-white)","textAlign":"center","lineHeight":"202px","fontSize":"var(--business-text-size-14)","top":"0px","left":"1px","position":"unset"},
            
            },
 default: { 
 
label:"暂无数据",
editable:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"212px","color":"var(--business-white)","textAlign":"center","lineHeight":"202px","fontSize":"var(--business-text-size-14)","top":"0px","left":"1px","position":"unset"}}}, 
 },
},
});
const getProvider = () => {
// 注入父组件提供的 airOverviewContentState 数据
const rootData = inject('airOverviewContentState');
// 将注入的数据赋值给组件的状态
state.airOverviewContentState = rootData;

// 使用一个 watch 同时监听多个数据源的变化
watch(
  // 监听数组：包含两个需要监听的数据源
  [
    () => state.airOverviewContentState?.timeValue,  // 只监听 timeValue 的变化
    () => global.regionaQuery.regionCode            // 监听 regionCode 的变化
  ],
  // 回调函数，参数为各个监听源的新值数组
  ([newTimeValue, newRegionCode]) => {
    // 处理行政区划代码变化：当 regionCode 有值时更新 pointCode
    if (newRegionCode) {
      state.pointCode = newRegionCode.slice(0, 6);  // 取前6位作为 pointCode
    }
    
    // 调试信息：输出相关值用于排查问题
    console.log('newTimeValue', newTimeValue);
    console.log('newRegionCode', newRegionCode);
    console.log('当前 state.airOverviewContentState.timeValue 的值', state.airOverviewContentState?.timeValue);

    // 核心条件判断：必须同时满足以下条件才触发API请求
    if (newTimeValue &&           // 1. timeValue 必须有值
        newRegionCode            // 2. regionCode 必须有值
    ) {
      console.log('满足条件，调用接口');
      apiRegistry.getForecastData.request();  // 调用获取预测数据的API
    }
  },
  // Watch 配置选项
  {
    immediate: true    // 立即执行：组件挂载时立即执行一次回调函数
    // 移除了 deep: true，因为现在只监听基本值的变化
  }
);
};
const initChartOption = () => {
state.chartOption = {
  "color": [
    "#00B7FF"
  ],
  "title": {
    "show": false
  },
  "legend": {
    "show": false
  },
  "grid": {
    "show": true,
    "backgroundColor": "transparent",
    "borderWidth": "0",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0
  },
  "tooltip": {
    "show": false,
    "trigger": "axis",
    "axisPointer": {
      "type": "line",
      "z": 0,
      "triggerOn": "click"
    }
  },
  "xAxis": {
    "type": "category",
    "show": false
  },
  "yAxis": [
    {
      "show": false,
      "interval": 15,
      "type": "value",
      "max": 61,
      "min": -15
    }
  ],
  "series": [
    {
      "name": "最高温度",
      "type": "line",
      "data": [
        30,
        31,
        30,
        30,
        25,
        26
      ],
      "cursor": "default",
      "symbol": "circle",
      "symbolSize": 10,
      "showSymbol": true,
      "smooth": true,
      "itemStyle": {
        "color": "#FF6262",
        "borderColor": "#18398D",
        "borderWidth": 3
      },
      "lineStyle": {
        "width": 2,
        "color": "#FF6262"
      },
      "silent": false
    },
    {
      "name": "最低温度",
      "type": "line",
      "cursor": "default",
      "data": [
        1,
        19,
        19,
        21,
        16,
        15
      ],
      "symbol": "circle",
      "symbolSize": 10,
      "showSymbol": true,
      "smooth": true,
      "itemStyle": {
        "color": "#00B7FF",
        "borderColor": "#18398D",
        "borderWidth": 3
      },
      "lineStyle": {
        "width": 2,
        "color": "#00B7FF"
      },
      "silent": false
    },
    // 柱图将间距保持跟预报卡片一致
    {
      "name": "柱图",
      "type": "bar",
      "barWidth": 65,
      "cursor": "default",
      "data": [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "showBackground": true,
      "smooth": true,
      "itemStyle": {
        "color": "rgba(0,0,0,0)"
      },
      "backgroundStyle": {
        "color": "rgba(20, 112, 204, 0)",
        "borderRadius": 4
      }
    }
  ]
};
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getForecastData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"point_code":"state.pointCode","MONITORTIME":"state.airOverviewContentState.timeValue","interfaceId":"36ce964cdf5d1388572dad1ce2378c17"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"point_code":state.pointCode,"MONITORTIME":state.airOverviewContentState.timeValue,"interfaceId":"36ce964cdf5d1388572dad1ce2378c17"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"point_code":state.pointCode,"MONITORTIME":state.airOverviewContentState.timeValue,"interfaceId":"36ce964cdf5d1388572dad1ce2378c17"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getForecastData'] = res.data;
                
     state.weatherForecast = [];
const noValueText = '-';
const { data, head } = res.data;
if (head.statusCode === '200' && data && data.length) {
  const forecastData = data[0] || {};
  state.temperatureUnit = forecastData.UNIT || '℃';
  // 6天最高温度数据
  let temperatureMaxArr = [];
  // 6天最低温度数据
  let temperatureMinArr = [];
  // 循环6次-6天的预报数据
  const numIterations = 6;
  for (let index = 0; index < numIterations; index++) {
    // 值index
    const valueIndex = index + 1;
    // aqi值数组
    const aqiValueArr = handleStringSplit(forecastData[`AQI_REGION${valueIndex}`], '~');
    state.weatherForecast.push(
      {
        // aqi范围值
        'weatherName': handleNoVal(forecastData[`AQI_REGION${valueIndex}`]),
        // 温度最大、最小值（没值的时候，置为空字符串）-组件里应该有判断，aqi值同
        'temperatureMax': handleNoVal(forecastData[`TEMPERATURE_${valueIndex}`]) !== noValueText ? Number(forecastData[`TEMPERATURE_${valueIndex}`]) : '',
        'temperatureMin': handleNoVal(forecastData[`TEMPERATURE_LOW_${valueIndex}`]) !== noValueText ? Number(forecastData[`TEMPERATURE_LOW_${valueIndex}`]) : '',
        // aqi最大、最小值
        'aqiMax': handleNoVal(aqiValueArr[1]) !== noValueText ? Number(aqiValueArr[1]) : '',
        'aqiMin': handleNoVal(aqiValueArr[0]) !== noValueText ? Number(aqiValueArr[0]) : '',
        // 日期
        'date': handleNoVal(forecastData[`RESULTTIME_${valueIndex}`]),
        // 其他指标-风向
        'otherIndicator': [
          handleNoVal(forecastData[`WINDDIR_DESC_${valueIndex}`]),
        ]
      }
    );
    temperatureMaxArr.push(handleNoVal(forecastData[`TEMPERATURE_${valueIndex}`]) !== noValueText ? Number(forecastData[`TEMPERATURE_${valueIndex}`]) : '');
    temperatureMinArr.push(handleNoVal(forecastData[`TEMPERATURE_LOW_${valueIndex}`]) !== noValueText ? Number(forecastData[`TEMPERATURE_LOW_${valueIndex}`]) : '');
  }
  // 计算出最大温度的最大值、最小温度的最小值
  const temperatureMax =  Math.max(...state.weatherForecast.map(item => Number(item.temperatureMax))) + 5;
  const temperatureMin =  Math.min(...state.weatherForecast.map(item => Number(item.temperatureMin))) - 5;
  // 设置echart图配置数据
  state.chartOption.yAxis[0].max = temperatureMax;
  state.chartOption.yAxis[0].min = temperatureMin;
  state.chartOption.series[0].data = temperatureMaxArr;
  state.chartOption.series[1].data = temperatureMinArr;
} else {
  state.weatherForecast = [];
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.weatherForecast = [];
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewForecastData', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
// 执行自定义方法
initChartOption();
onMounted(() => {
setPageScale('t-l-c-airOverviewForecastData', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tListCardWeatherForecastx0x0ComputedData = computed(() => _.merge({}, componentState.tListCardWeatherForecastx0x0.default, componentState.tListCardWeatherForecastx0x0?.[state.screenSize]));

 const tChartDesignx0x1ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x1.default, componentState.tChartDesignx0x1?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

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
tListCardWeatherForecastx0x0ComputedData,
tChartDesignx0x1ComputedData,
tTextx0x2ComputedData,
};
},
};