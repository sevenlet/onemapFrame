window.targetComponent = {
template: 
`<div id="t-l-c-target" class="t-l-c-target" >` +
`<t-component v-if="global.navMenuItemActive.name === 'af3fb6e4-16c1-4bcc-97e1-8de1c4ab51b2'" id="t-component-5434.313e5764b" class="target-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName">` +
`</t-component>` +
`<t-component v-if="global.navMenuItemActive.name === '129f3b76-cae3-432f-8692-7024c353739c'" id="t-component-59f1.795893218" class="target-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName">` +
`</t-component>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-5434.313e5764b":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-59f1.795893218":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}}};
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
            default: {"width":"555px","height":"92px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"-508px","top":"-1px","pointerEvents":"none"},
            
            },
 default: { 
 
name:"airCenterIndexContainerComponent",
cStyle:{"wrapper":{"default":{"width":"555px","height":"92px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"-508px","top":"-1px","pointerEvents":"none"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/airCenterIndexContainer",
componentName:"airCenterIndexContainerComponent", 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"801px","height":"38px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"-759px","top":"-1px","pointerEvents":"none","animationName":"","display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"flex-end"},
            
            },
 default: { 
 
name:"waterTargetComponent",
cStyle:{"wrapper":{"default":{"width":"801px","height":"38px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"-759px","top":"-1px","pointerEvents":"none","animationName":"","display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"flex-end"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/waterTarget",
componentName:"waterTargetComponent", 
 },
},
});let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-target', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-target', global.appScaleMode, 'normal');
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
};
},
};