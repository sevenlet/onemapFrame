window.waterShjysTitleComponent = {
template: 
`<div id="t-l-c-waterShjysTitle" class="t-l-c-waterShjysTitle" >` +
`<t-component id="t-component-ded9.0f5a924fa" class="waterShjysTitle-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-4f99.3a44d10f5" class="waterShjysTitle-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle">` +
`</t-text>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-ded9.0f5a924fa":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-4f99.3a44d10f5":{"attributeName":"tTextx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   text: "佛山水道流域涉及禅城区祖庙街道、张槎街道、石湾街道，南海区桂城街道、狮山镇、大沥镇，主河道全长25.5公里，流域佛山水道流域涉及禅城区祖庙街道、张槎街道、石湾街道，南海区桂城街道、狮山镇、大沥镇，主河道全长25.5公里，流域",
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
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"177px","height":"31px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"40px","top":"0px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":"","letterSpacing":"2px","lineHeight":"31px"},
            
            },
 default: { 
 
label:"水环境要素",
editable:false,
cStyle:{"wrapper":{"default":{"width":"177px","height":"31px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"40px","top":"0px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":"","letterSpacing":"2px","lineHeight":"31px"}}}, 
 },
},
});let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-waterShjysTitle', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-waterShjysTitle', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

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
tTextx0x1ComputedData,
};
},
};