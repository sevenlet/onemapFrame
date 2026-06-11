window.airOverviewReachStandardsTitleComponent = {
template: 
`<div id="t-l-c-airOverviewReachStandardsTitle" class="t-l-c-airOverviewReachStandardsTitle" >` +
`<t-component id="t-component-6f3b.f3ecc4cb7" class="airOverviewReachStandardsTitle-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName">` +
`</t-component>` +
`<t-text-unit id="t-text-unit-aa32.d91a0f847" class="airOverviewReachStandardsTitle-t-text-unit-0-2"  :c-style="tTextUnitx0x2ComputedData.cStyle" :justify="tTextUnitx0x2ComputedData.justify" :align="tTextUnitx0x2ComputedData.align" :content="replaceCssVariables(filterData(global.regionaQuery.businessRegionName, componentPropBindingMap?.['t-text-unit-aa32.d91a0f847']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x2ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x2ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-6f3b.f3ecc4cb7":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-3dc0.fd2985b0e":{"attributeName":"tTextx0x1"},"t-text-unit-aa32.d91a0f847":{"attributeName":"tTextUnitx0x2","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}}};
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
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"0px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/71ed927f19ff41e78116c906842de342_19/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextUnitx0x2: {
defaultStyle: {
            default: {"width":"282px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"32px","position":"unset","left":"34px","top":"1px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"282px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"32px","position":"unset","left":"34px","top":"1px"}},"unit":{"default":{"fontSize":"var(--business-text-size-20)","fontFamily":"方正综艺","lineHeight":"32px"}},"text":{"default":{"lineHeight":"32px","fontSize":"var(--business-text-size-20)"}}},
justify:"flex-start",
align:"flex-end",
content:"佛山市",
unit:"年度达标考核情况",
showOverflowTooltip:true, 
 },
},
});
const onclick1734491659164 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogName',
                    value:'airOverviewPressureContentComponent',
                    data: {
                      businessDialog:{dialogName: 'airOverviewPressureContentComponent'}
                    },
                  });
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewReachStandardsTitle', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-airOverviewReachStandardsTitle', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextUnitx0x2ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x2.default, componentState.tTextUnitx0x2?.[state.screenSize]));

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
tTextUnitx0x2ComputedData,
};
},
};