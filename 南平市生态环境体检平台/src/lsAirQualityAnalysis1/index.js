window.lsAirQualityAnalysis1Component = {
template: 
`<div id="t-l-c-lsAirQualityAnalysis1" class="t-l-c-lsAirQualityAnalysis1" >` +
`<t-component id="t-component-a1e8.74d7a0b42" class="lsAirQualityAnalysis-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :loading="tComponentx0x0ComputedData.loading" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName" :page-id="tComponentx0x0ComputedData.pageId" :page-code="tComponentx0x0ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-1727.e05628e0e" class="lsAirQualityAnalysis-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :loading="tComponentx0x1ComputedData.loading" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-45b7.68640b388" class="lsAirQualityAnalysis-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :loading="tComponentx0x2ComputedData.loading" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName" :page-id="tComponentx0x2ComputedData.pageId" :page-code="tComponentx0x2ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-2687.7ae82fb7" class="lsAirQualityAnalysis-t-component-0-3"  :name="tComponentx0x3ComputedData.name" :loading="tComponentx0x3ComputedData.loading" :c-style="tComponentx0x3ComputedData.cStyle" :src="tComponentx0x3ComputedData.src" :component-name="tComponentx0x3ComputedData.componentName" :page-id="tComponentx0x3ComputedData.pageId" :page-code="tComponentx0x3ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-5abb.b91cd8229" class="lsAirQualityAnalysis-t-component-0-4"  :name="tComponentx0x4ComputedData.name" :loading="tComponentx0x4ComputedData.loading" :c-style="tComponentx0x4ComputedData.cStyle" :src="tComponentx0x4ComputedData.src" :component-name="tComponentx0x4ComputedData.componentName" :page-id="tComponentx0x4ComputedData.pageId" :page-code="tComponentx0x4ComputedData.pageCode">` +
`</t-component>` +
`<t-text-unit id="t-text-unit-5232.99e88a659" class="lsAirQualityAnalysis-t-text-unit-0-5"  :c-style="tTextUnitx0x5ComputedData.cStyle" :content="tTextUnitx0x5ComputedData.content" :unit="tTextUnitx0x5ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x5ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-a1e8.74d7a0b42":{"attributeName":"tComponentx0x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-1727.e05628e0e":{"attributeName":"tComponentx0x1","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-45b7.68640b388":{"attributeName":"tComponentx0x2","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-2687.7ae82fb7":{"attributeName":"tComponentx0x3","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-5abb.b91cd8229":{"attributeName":"tComponentx0x4","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-unit-5232.99e88a659":{"attributeName":"tTextUnitx0x5","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}}};
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
            default: {"width":"411px","height":"154px","margin":"0 auto","position":"unset","left":"23px","top":"405px"},
            
            },
 default: { 
 
name:"airOverviewForecastDataComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"411px","height":"154px","margin":"0 auto","position":"unset","left":"23px","top":"405px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/airOverviewForecastData",
componentName:"airOverviewForecastDataComponent",
pageId:"dd7af1b493444aba8605f2a8c1f07e77_6",
pageCode:"airOverviewForecastData", 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"411px","height":"37px","margin":"0 auto","position":"unset","left":"23px","top":"353px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewForecastDataTitleComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"411px","height":"37px","margin":"0 auto","position":"unset","left":"23px","top":"353px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/airOverviewForecastDataTitle",
componentName:"airOverviewForecastDataTitleComponent",
pageId:"4c1c01ddd633449ca043252f0585d34b_6",
pageCode:"airOverviewForecastDataTitle", 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"411px","height":"266px","margin":"0 auto","position":"unset","left":"23px","top":"63px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewQualityRealityComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"411px","height":"266px","margin":"0 auto","position":"unset","left":"23px","top":"63px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/airOverviewQualityReality",
componentName:"airOverviewQualityRealityComponent",
pageId:"ea1b51733a6447a896a508fa2c1ff2a0_6",
pageCode:"airOverviewQualityReality", 
 },
},
tComponentx0x3: {
defaultStyle: {
            default: {"width":"411px","height":"37px","margin":"0 auto","position":"unset","left":"23px","top":"12px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewQualityRealityTitleComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"411px","height":"37px","margin":"0 auto","position":"unset","left":"23px","top":"12px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/airOverviewQualityRealityTitle",
componentName:"airOverviewQualityRealityTitleComponent",
pageId:"94e628d1e8f34fdaba5087587f2c8ee1_6",
pageCode:"airOverviewQualityRealityTitle", 
 },
},
tComponentx0x4: {
defaultStyle: {
            default: {"width":"411px","height":"37px","margin":"0 auto","position":"unset","left":"25px","top":"596px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"411px","height":"37px","margin":"0 auto","position":"unset","left":"25px","top":"596px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent",
pageId:"11294a0cd1654489a15355ed663e73ad_6",
pageCode:"titleFirstBg", 
 },
},
tTextUnitx0x5: {
defaultStyle: {
            default: {"width":"282px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","position":"unset","left":"54px","top":"603px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"282px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","position":"unset","left":"54px","top":"603px"}},"unit":{"default":{"fontSize":"17px","fontFamily":"方正综艺","lineHeight":"20px"}},"text":{"default":{"lineHeight":"20px","fontSize":"17px"}}},
content:"未来24小时污染变化",
unit:"",
showOverflowTooltip:true, 
 },
},
});let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-lsAirQualityAnalysis1', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-lsAirQualityAnalysis1', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tComponentx0x3ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3.default, componentState.tComponentx0x3?.[state.screenSize]));

 const tComponentx0x4ComputedData = computed(() => _.merge({}, componentState.tComponentx0x4.default, componentState.tComponentx0x4?.[state.screenSize]));

 const tTextUnitx0x5ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x5.default, componentState.tTextUnitx0x5?.[state.screenSize]));

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
tComponentx0x0ComputedData,
tComponentx0x1ComputedData,
tComponentx0x2ComputedData,
tComponentx0x3ComputedData,
tComponentx0x4ComputedData,
tTextUnitx0x5ComputedData,
};
},
};
