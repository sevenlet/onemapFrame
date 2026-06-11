window.videoMonitoringRightComponent = {
template: 
`<div id="t-l-c-videoMonitoringRight" class="t-l-c-videoMonitoringRight" >` +
`<t-component id="t-component-f129.876fe19dd" class="videoMonitoringRight-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :loading="tComponentx0x0ComputedData.loading" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName" :page-id="tComponentx0x0ComputedData.pageId" :page-code="tComponentx0x0ComputedData.pageCode">` +
`</t-component>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-f129.876fe19dd":{"attributeName":"tComponentx0x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}}};
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
   componentName: "washCarContentComponent",
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
            default: {"width":"410px","height":"860px","margin":"0 auto","position":"unset","left":"20px","top":"20px"},
            
            },
 default: { 
 
name:"videoMonitoringRightListComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"410px","height":"860px","margin":"0 auto","position":"unset","left":"20px","top":"20px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/videoMonitoringRightList",
componentName:"videoMonitoringRightListComponent",
pageId:"bc051beced1148e8aa0be6c2ec5c9583",
pageCode:"videoMonitoringRightList", 
 },
},
});
const setStyle = () => {
let style = document.createElement('style');
// 动态添加纵向选项卡样式
style.textContent = `
  [id$="t-tabs-vertical-icon-26b3.2f7eb7a84"] .tabs {
    flex-direction: row;
  }
  [id$="t-tabs-vertical-icon-26b3.2f7eb7a84"] .tabs__item {
    border-right: 1px solid var(--t-bg-50);
    border-left: 1px solid var(--t-bg-50);
  }
  [id$="t-tabs-vertical-icon-26b3.2f7eb7a84"] .tabs__item:first-child {
    border-radius: 16px 0 0 0;
    border: 0;
  }

  [id$="t-tabs-vertical-icon-26b3.2f7eb7a84"] .tabs__item:last-child {
    border-radius: 0 16px 0 0;
    border: 0;
  }
  
  [id$="t-tabs-vertical-icon-26b3.2f7eb7a84"] .tabs__item__icon {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;
document.head.appendChild(style);
};
const setTabIcon = () => {
// 设置tab图标（设置为变量）
state.tabData[0].icon = getCssVariable('--business-tab-water');
state.tabData[1].icon = getCssVariable('--business-tab-target');
state.tabData[2].icon = getCssVariable('--business-tab-target');
};
const handleTabChange = (tabValue) => {
if (tabValue !== state.tabSelect) {
  // 重置时间轴数据
  rootData.rootSocket.emit('message', {
    type: 'changeTimeAxisData',
    room: global.socketRoom,
    data: {
      sourceType: 'resetData',
      timeType: '',
      timeValue: '',
      timeRangeData: [],
    },
  });
  state.componentName = tabValue;
}
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-videoMonitoringRight', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-videoMonitoringRight', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

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
};
},
};