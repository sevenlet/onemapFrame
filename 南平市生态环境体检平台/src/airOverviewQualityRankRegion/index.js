window.airOverviewQualityRankRegionComponent = {
template: 
`<div id="t-l-c-airOverviewQualityRankRegion" class="t-l-c-airOverviewQualityRankRegion" >` +
`<t-list-card v-if="state.showSingleCard === false" id="t-list-card-5314.21676ff23" class="airOverviewQualityRankRegion-t-list-card-0-0"  :data="replaceCssVariables(filterData(state.rankCardData, componentPropBindingMap?.['t-list-card-5314.21676ff23']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x0ComputedData.spacingX" :col="tListCardx0x0ComputedData.col" :direction="tListCardx0x0ComputedData.direction" :exchange-order="tListCardx0x0ComputedData.exchangeOrder" :unit-break="tListCardx0x0ComputedData.unitBreak" :key-field="tListCardx0x0ComputedData.keyField" :active-key-field="tListCardx0x0ComputedData.activeKeyField" :active="tListCardx0x0ComputedData.active" :c-style="tListCardx0x0ComputedData.cStyle">` +
`</t-list-card>` +
`<t-list-card v-if="state.showSingleCard === true" id="t-list-card-4ae9.922227ab2" class="airOverviewQualityRankRegion-t-list-card-0-1"  :data="replaceCssVariables(filterData(state.singleCardData, componentPropBindingMap?.['t-list-card-4ae9.922227ab2']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x1ComputedData.spacingX" :col="tListCardx0x1ComputedData.col" :direction="tListCardx0x1ComputedData.direction" :exchange-order="tListCardx0x1ComputedData.exchangeOrder" :unit-break="tListCardx0x1ComputedData.unitBreak" :key-field="tListCardx0x1ComputedData.keyField" :active-key-field="tListCardx0x1ComputedData.activeKeyField" :active="tListCardx0x1ComputedData.active" :c-style="tListCardx0x1ComputedData.cStyle">` +
`</t-list-card>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-list-card-5314.21676ff23":{"attributeName":"tListCardx0x0","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-4ae9.922227ab2":{"attributeName":"tListCardx0x1","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   showSingleCard: false,
   singleCardData: [{"title":"镇街排名","num":"-","unit":"名","color":"var(--business-theme)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-01-15/90f5a31502db47c483a1278f4ed80f1e.png"}],
   rankCardData: [{"title":"省内排名","num":"-","unit":"名","color":"var(--business-theme)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-01-15/90f5a31502db47c483a1278f4ed80f1e.png"},{"title":"市内排名","num":"-","unit":"名","color":"var(--business-strong)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-01-15/99910eaba22046b4a9909b86e4ecef0b.png"}],
   airOverviewContentState: {"timeType":"","timeValue":""},
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
tListCardx0x0: {
defaultStyle: {
            default: {"width":"422px","height":"75px","position":"unset","left":"-6px","top":"0px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"},
            
            },
 default: { 
 
data:[{"title":"省内排名","num":"-","unit":"名","color":"var(--business-theme)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-01-15/90f5a31502db47c483a1278f4ed80f1e.png"},{"title":"市内排名","num":"-","unit":"名","color":"var(--business-strong)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-01-15/99910eaba22046b4a9909b86e4ecef0b.png"}],
spacingX:12,
col:2,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","trend":"trend","color":"color","selectIcon":"icon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"422px","height":"75px","position":"unset","left":"-6px","top":"0px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"}},"itemWrapper":{"default":{"height":"75px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"var(--business-show-bg30)","lineHeight":"18px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"16px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"auto","paddingTop":"12px","paddingBottom":"12px","paddingLeft":"16px"}},"num":{"default":{"fontSize":"var(--business-num-size-24)","fontWeight":"700","marginRight":"2px","lineHeight":"20px","textAlign":"left","fontFamily":"DIN-medium","color":"var(--t-aqi-green)"}},"unit":{"default":{"fontSize":"var(--business-text-size-12)","color":"var(--business-text-avianize)"}},"title":{"default":{"fontSize":"var(--business-text-size-16)","color":"var(--business-text-avianize)","marginTop":"0px"}},"icon":{"default":{"width":"50px","height":"50px","left":"16px","marginLeft":"0px"}},"numBox":{"default":{"marginTop":"6px"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"rightContent":{"default":{"alignItems":"flex-end","marginLeft":"8px"}}}, 
 },
},
tListCardx0x1: {
defaultStyle: {
            default: {"width":"422px","height":"75px","position":"unset","left":"-6px","top":"0px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"},
            
            },
 default: { 
 
data:[{"title":"镇街排名","num":"-","unit":"名","color":"var(--business-theme)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-01-15/90f5a31502db47c483a1278f4ed80f1e.png"}],
spacingX:12,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","trend":"trend","color":"color","selectIcon":"icon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"422px","height":"75px","position":"unset","left":"-6px","top":"0px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"}},"itemWrapper":{"default":{"height":"75px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"var(--business-show-bg30)","lineHeight":"18px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"16px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"auto","paddingTop":"12px","paddingBottom":"12px","paddingLeft":"16px"}},"num":{"default":{"fontSize":"var(--business-num-size-24)","fontWeight":"700","marginRight":"2px","lineHeight":"20px","textAlign":"left","fontFamily":"DIN-medium","color":"var(--t-aqi-green)"}},"unit":{"default":{"fontSize":"var(--business-text-size-12)","color":"var(--business-text-avianize)"}},"title":{"default":{"fontSize":"var(--business-text-size-16)","color":"var(--business-text-avianize)","marginTop":"0px"}},"icon":{"default":{"width":"50px","height":"50px","left":"16px","marginLeft":"0px"}},"numBox":{"default":{"marginTop":"6px"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"rightContent":{"default":{"alignItems":"flex-end","marginLeft":"8px"}}}, 
 },
},
});
const initData = () => {
// 设置为图片变量
state.rankCardData[0].icon = getCssVariable('--business-air-rank-theme-icon');
state.singleCardData[0].icon = getCssVariable('--business-air-rank-theme-icon');
};
const getProvider = () => {
const rootData = inject('airOverviewContentState');
state.airOverviewContentState = rootData;
};
const watchValues = () => {
watch(
  () => [
    global.regionaQuery.regionCode,
    global.air.centerIndexSelect,
    state?.airOverviewContentState?.timeValue,
  ],
  (res) => {
    const noDataText = '-';
    state.rankCardData[0].num = noDataText;
    state.rankCardData[1].num = noDataText;
    state.singleCardData[0].num = noDataText;
    state.showSingleCard = false;
    switch (global.regionaQuery.paramsRegionType) {
      case 'province':
      case 'city':
        state.showSingleCard = true;
        state.singleCardData[0].title = '省内排名';
        state.pointCode = global.regionaQuery.regionCode.slice(0,6)
        apiRegistry.getRankInProvince.request();
        break;
      case 'county':
        state.showSingleCard = true;
        state.singleCardData[0].title = '市内排名';
        state.pointCode = global.regionaQuery.regionCode.slice(0,6)
        apiRegistry.getRankInCity.request();
        break;
      // case 'street':
      //   state.showSingleCard = true;
      //   state.singleCardData[0].title = '镇街排名';
      //   getRankInStreet();
      //   break;
      default:
        break;
    }
    console.log(res, '监听行政区、时间类型')
  },
  {
    deep: true,
    immediate: true,
  }
);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getRankInProvince: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.pointCode","PARENT_REGION_CODE":"350000000000","POINT_TYPE":"12","MONITORTIME":"state.airOverviewContentState.timeValue","TIME_TYPE":"state.airOverviewContentState.timeType","interfaceId":"9cfe78a74285245c80a06a348bde6a56"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.pointCode,"PARENT_REGION_CODE":"350000000000","POINT_TYPE":"12","MONITORTIME":state.airOverviewContentState.timeValue,"TIME_TYPE":state.airOverviewContentState.timeType,"interfaceId":"9cfe78a74285245c80a06a348bde6a56"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.pointCode,"PARENT_REGION_CODE":"350000000000","POINT_TYPE":"12","MONITORTIME":state.airOverviewContentState.timeValue,"TIME_TYPE":state.airOverviewContentState.timeType,"interfaceId":"9cfe78a74285245c80a06a348bde6a56"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getRankInProvince'] = res.data;
                
     
const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.singleCardData[0].num = handleNoVal(data?.rank_number);
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.singleCardData[0].num = '-';
      reject(error);
    });
  });
},
              },
// 接口函数
 getRankInCity: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"PARENT_REGION_CODE":"350700000000","POINT_CODE":"state.pointCode","POINT_TYPE":"13","MONITORTIME":"state.airOverviewContentState.timeValue","TIME_TYPE":"state.airOverviewContentState.timeType","interfaceId":"9cfe78a74285245c80a06a348bde6a56"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"PARENT_REGION_CODE":"350700000000","POINT_CODE":state.pointCode,"POINT_TYPE":"13","MONITORTIME":state.airOverviewContentState.timeValue,"TIME_TYPE":state.airOverviewContentState.timeType,"interfaceId":"9cfe78a74285245c80a06a348bde6a56"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"PARENT_REGION_CODE":"350700000000","POINT_CODE":state.pointCode,"POINT_TYPE":"13","MONITORTIME":state.airOverviewContentState.timeValue,"TIME_TYPE":state.airOverviewContentState.timeType,"interfaceId":"9cfe78a74285245c80a06a348bde6a56"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getRankInCity'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.rankCardData[1].num = handleNoVal(data?.rank_number);
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.rankCardData[0].num = '-';
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewQualityRankRegion', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-airOverviewQualityRankRegion', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
initData();
// 执行自定义方法
getProvider();
// 执行自定义方法
watchValues();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tListCardx0x0ComputedData = computed(() => _.merge({}, componentState.tListCardx0x0.default, componentState.tListCardx0x0?.[state.screenSize]));

 const tListCardx0x1ComputedData = computed(() => _.merge({}, componentState.tListCardx0x1.default, componentState.tListCardx0x1?.[state.screenSize]));

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
tListCardx0x0ComputedData,
tListCardx0x1ComputedData,
};
},
};