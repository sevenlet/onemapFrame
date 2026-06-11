window.testQuestionComponent = {
template: 
`<div id="t-l-c-testQuestion" class="t-l-c-testQuestion" >` +
`<t-rect id="t-rect-8252.1a4ade4f4" class="testQuestion-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-iframe id="t-iframe-048e.d5cc1df5f" class="testQuestion-t-iframe-0-1"  :src="replaceCssVariables(filterData(state.url, componentPropBindingMap?.['t-iframe-048e.d5cc1df5f']['src'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :srcdoc="tIframex0x1ComputedData.srcdoc" :scrolling="tIframex0x1ComputedData.scrolling" :c-style="tIframex0x1ComputedData.cStyle">` +
`</t-iframe>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-8252.1a4ade4f4":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-iframe-048e.d5cc1df5f":{"attributeName":"tIframex0x1","src":{"filters":[]},"srcdoc":{"filters":[]},"scrolling":{"filters":[]},"cStyle":{"filters":[]}}};
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
   url: "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/inquirySuesTablePop",
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
tRectx0x0: {
defaultStyle: {
            default: {"width":"100%","height":"100%","position":"unset","left":"0px","top":"-1px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px Solid rgba(0,0,0,1)","borderTop":"1px Solid rgba(0,0,0,1)","borderRight":"1px Solid rgba(0,0,0,1)","borderBottom":"1px Solid rgba(0,0,0,1)","animationName":"","borderDirection":"all","border":"unset !important"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","position":"unset","left":"0px","top":"-1px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px Solid rgba(0,0,0,1)","borderTop":"1px Solid rgba(0,0,0,1)","borderRight":"1px Solid rgba(0,0,0,1)","borderBottom":"1px Solid rgba(0,0,0,1)","animationName":"","borderDirection":"all","border":"unset !important"}}}, 
 },
},
tIframex0x1: {
defaultStyle: {
            default: {"width":"100%","height":"99%","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/inquirySuesTablePop",
srcdoc:"",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"100%","height":"99%","position":"unset","left":"0px","top":"0px"}}}, 
 },
},
});
const initPageData = () => {
state.url = `http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/inquirySuesTablePop?isFrame=true&enterName=${global.businessDialog.dialogParmas.POINT_NAME || global.businessDialog.dialogParmas.OUTPUTNAME}`;
console.log('信访投诉', global.businessDialog.dialogParmas);

};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-testQuestion', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPageData();
onMounted(() => {
setPageScale('t-l-c-testQuestion', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tIframex0x1ComputedData = computed(() => _.merge({}, componentState.tIframex0x1.default, componentState.tIframex0x1?.[state.screenSize]));

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
tRectx0x0ComputedData,
tIframex0x1ComputedData,
};
},
};