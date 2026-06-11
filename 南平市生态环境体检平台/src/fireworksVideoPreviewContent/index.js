window.fireworksVideoPreviewContentComponent = {
template: 
`<div id="t-l-c-fireworksVideoPreviewContent" class="t-l-c-fireworksVideoPreviewContent" >` +
`<t-component id="t-component-f325.050f882ec" class="fireworksVideoPreviewContent-t-component-0-6"  :name="tComponentx0x6ComputedData.name" :loading="tComponentx0x6ComputedData.loading" :c-style="tComponentx0x6ComputedData.cStyle" :src="tComponentx0x6ComputedData.src" :component-name="tComponentx0x6ComputedData.componentName" :page-id="tComponentx0x6ComputedData.pageId" :page-code="tComponentx0x6ComputedData.pageCode">` +
`</t-component>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-543b.94ce036be":{"attributeName":"tRectx0x0"},"t-table-b69a.d43e71323":{"attributeName":"tTablex0x1"},"t-rect-91f8.cadf48866":{"attributeName":"tRectx0x2"},"t-row-c36c.6036b987d":{"attributeName":"tRowx0x3"},"t-text-5476.89d9507f1":{"attributeName":"tTextx0x4"},"t-video-base-b639.2c6aeeac":{"attributeName":"tVideoBasex0x5"},"t-component-f325.050f882ec":{"attributeName":"tComponentx0x6","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}}};
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
   isShowVideo: false,
   isShowList: false,
   list: [],
   interfaceParams: {"pointCode":""},
   interfaceId: "",
   baseInfo: {"title":"--","pointType":"","pointCode":"","PKID":""},
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
tComponentx0x6: {
defaultStyle: {
            default: {"width":"100%","height":"100%","margin":"0 auto","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
name:"ssqyVideoSurveillanceComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","margin":"0 auto","position":"unset","left":"0px","top":"0px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/ssqyVideoSurveillance",
componentName:"ssqyVideoSurveillanceComponent",
pageId:"df06a244924e41e39a07c598ae1b7af8",
pageCode:"ssqyVideoSurveillance", 
 },
},
});
const initPage = () => {
// console.log(global.businessDialog.dialogParmas, 'test');
// state.baseInfo.title = getQueryString('pointName'); // 参数注意修改;
// state.baseInfo.pointType = global.businessDialog.dialogParmas?.stationType || '';
// state.baseInfo.PKID = global.businessDialog.dialogParmas?.pkid || '';
// state.interfaceId = global.businessDialog.dialogParmas.interfaceId;
// state.interfaceParams = global.businessDialog.dialogParmas.interfaceParams;
// // 是否展示视频监控按钮
// state.isShowVideo = global.businessDialog.dialogParmas.hasVideo;
// if (state.interfaceId) {
//   getDetailData();
// } else {
//   state.isShowList = true;
// }

};
const onclick1765626416419 = () => {
// 执行自定义方法
openVedioDialog();
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-fireworksVideoPreviewContent', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initPage();
onMounted(() => {
setPageScale('t-l-c-fireworksVideoPreviewContent', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x6ComputedData = computed(() => _.merge({}, componentState.tComponentx0x6.default, componentState.tComponentx0x6?.[state.screenSize]));

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
tComponentx0x6ComputedData,
};
},
};