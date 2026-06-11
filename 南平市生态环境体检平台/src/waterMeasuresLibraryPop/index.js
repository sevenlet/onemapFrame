window.waterMeasuresLibraryPopComponent = {
template: 
`<div id="t-l-c-waterMeasuresLibraryPop" class="t-l-c-waterMeasuresLibraryPop" >` +
`<t-image-base id="t-image-base-51e1.def9693d4" class="measuresLibraryPop-t-image-base-0-0"  :src="tImageBasex0x0ComputedData.src" :fit="tImageBasex0x0ComputedData.fit" :c-style="tImageBasex0x0ComputedData.cStyle">` +
`</t-image-base>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-image-base-51e1.def9693d4":{"attributeName":"tImageBasex0x0","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}}};
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
tImageBasex0x0: {
defaultStyle: {
            default: {"width":"603px","height":"800px","position":"unset","left":"50% !important","top":"50% !important","transform":"translate(-50%, -50%)"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-12-26/5a1569771cc142eda255ce7cadf55af1.jpg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"603px","height":"800px","position":"unset","left":"50% !important","top":"50% !important","transform":"translate(-50%, -50%)"}}}, 
 },
},
});let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-waterMeasuresLibraryPop', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-waterMeasuresLibraryPop', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tImageBasex0x0ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x0.default, componentState.tImageBasex0x0?.[state.screenSize]));

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
tImageBasex0x0ComputedData,
};
},
};
