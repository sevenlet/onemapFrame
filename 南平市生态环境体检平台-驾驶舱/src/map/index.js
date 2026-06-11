window.mapComponent = {
template: 
`<div id="t-l-c-map" class="t-l-c-map" >` +
`<t-iframe id="t-iframe-e10f.ae6943b43" class="map-t-iframe-0-0"  :src="replaceCssVariables(filterData(state.mapUrl, componentPropBindingMap?.['t-iframe-e10f.ae6943b43']['src'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :srcdoc="tIframex0x0ComputedData.srcdoc" :scrolling="tIframex0x0ComputedData.scrolling" :c-style="tIframex0x0ComputedData.cStyle" :socket-url="replaceCssVariables(filterData(global.socketIp, componentPropBindingMap?.['t-iframe-e10f.ae6943b43']['socketUrl'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :room-id="replaceCssVariables(filterData(global.socketRoom, componentPropBindingMap?.['t-iframe-e10f.ae6943b43']['roomId'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-iframe>` +
`<t-component v-if="global.isMapTool === true" id="t-component-abbf.425603a52" class="map-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName">` +
`</t-component>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-iframe-e10f.ae6943b43":{"attributeName":"tIframex0x0","src":{"filters":[]},"srcdoc":{"filters":[]},"scrolling":{"filters":[]},"cStyle":{"filters":[]},"socketUrl":{"filters":[]},"roomId":{"filters":[]}},"t-component-abbf.425603a52":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-image-base-3fe3.1e4bb3ce4":{"attributeName":"tImageBasex0x2"}};
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
   mapUrl: "http://192.168.0.47:8888/nanping-three-map/index.html",
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
            default: {"width":"1920px","height":"1080px","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.47:8888/nanping-three-map/index.html",
srcdoc:"",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"1920px","height":"1080px","position":"unset","left":"0px","top":"0px","animationName":""}}},
socketUrl:"http://192.168.0.202:7777/socketPath",
roomId:"admin", 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"270px","height":"333px","margin":"0 auto","backgroundColor":"rgba(0,0,0,0)","position":"unset","left":"1169px","top":"665px"},
            
            },
 default: { 
 
name:"allToolComponent",
cStyle:{"wrapper":{"default":{"width":"270px","height":"333px","margin":"0 auto","backgroundColor":"rgba(0,0,0,0)","position":"unset","left":"1169px","top":"665px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/allTool",
componentName:"allToolComponent", 
 },
},
});
const watchValues = () => {
watch(() => global.REGION_CODE, (curVal, oldVal) => {
  console.log(curVal, oldVal);
  // 当前行政区等级
  const curLevelText = getRegionLevel(curVal);
  // 选中行政区等级
  const oldLevelText = getRegionLevel(oldVal);
  // 选中省级展示三维地图，选中市州、区县级展示二维地图
  if (
    ((curLevelText === 'city' || curLevelText === 'county') && oldLevelText === 'province')
    || curLevelText === 'province') {
    rootData.rootSocket.emit('message', {
      type: 'setThreeMapVisibility',
      room: global.socketRoom,
      data: {},
    });
  }
});
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-map', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
watchValues();
onMounted(() => {
setPageScale('t-l-c-map', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tIframex0x0ComputedData = computed(() => _.merge({}, componentState.tIframex0x0.default, componentState.tIframex0x0?.[state.screenSize]));

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
tIframex0x0ComputedData,
tComponentx0x1ComputedData,
};
},
};