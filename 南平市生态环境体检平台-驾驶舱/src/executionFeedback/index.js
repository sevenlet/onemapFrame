window.executionFeedbackComponent = {
template: 
`<div id="t-l-c-executionFeedback" class="t-l-c-executionFeedback" >` +
`<t-iframe id="t-iframe-2425.eb4a7b7d" class="executionFeedback-t-iframe-0-0"  :src="replaceCssVariables(filterData(state.url, componentPropBindingMap?.['t-iframe-2425.eb4a7b7d']['src'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :srcdoc="tIframex0x0ComputedData.srcdoc" :scrolling="tIframex0x0ComputedData.scrolling" :c-style="tIframex0x0ComputedData.cStyle">` +
`</t-iframe>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-iframe-2425.eb4a7b7d":{"attributeName":"tIframex0x0","src":{"filters":[]},"srcdoc":{"filters":[]},"scrolling":{"filters":[]},"cStyle":{"filters":[]}}};
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
   url: "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/yhbzInspectionsituation",
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
tIframex0x0: {
defaultStyle: {
            default: {"width":"1400px","height":"800px","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/yhbzInspectionsituation",
srcdoc:"",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"1400px","height":"800px","position":"unset","left":"0px","top":"0px"}}}, 
 },
},
});let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-executionFeedback', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-executionFeedback', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tIframex0x0ComputedData = computed(() => _.merge({}, componentState.tIframex0x0.default, componentState.tIframex0x0?.[state.screenSize]));

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
tIframex0x0ComputedData,
};
},
};