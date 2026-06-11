window.waterSprinklerTruckDialogTitleComponent = {
template: 
`<div id="t-l-c-waterSprinklerTruckDialogTitle" class="t-l-c-waterSprinklerTruckDialogTitle" >` +
`<t-row id="t-row-a9c1.ffb0f3adb" class="waterSprinklerTruckDialogTitle-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align">` +
`<t-text-common id="t-text-common-ebb5.079f4d7f8" class="waterSprinklerTruckDialogTitle-t-text-common-0-0-0"  :label="tTextCommonx0x0x0ComputedData.label" :editable="tTextCommonx0x0x0ComputedData.editable" :c-style="tTextCommonx0x0x0ComputedData.cStyle">` +
`</t-text-common>` +
`<t-rect id="t-rect-5ddd.c09e8a3a4" class="waterSprinklerTruckDialogTitle-t-rect-0-0-1"  :tip="tRectx0x0x1ComputedData.tip" :label="tRectx0x0x1ComputedData.label" :active="tRectx0x0x1ComputedData.active" :c-style="tRectx0x0x1ComputedData.cStyle">` +
`</t-rect>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-a9c1.ffb0f3adb":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-common-ebb5.079f4d7f8":{"attributeName":"tTextCommonx0x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-5ddd.c09e8a3a4":{"attributeName":"tRectx0x0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   title: "",
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
tRowx0x0: {
defaultStyle: {
            default: {"width":"326px","height":"46px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"326px","height":"46px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"0px","top":"0px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextCommonx0x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"18px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"375px","top":"207px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"18px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"375px","top":"207px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tRectx0x0x1: {
defaultStyle: {
            default: {"width":"60px","height":"24px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","top":"205px","left":"505px","position":"unset","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","paddingLeft":"unset","marginLeft":"15px"},
            
            },
 default: { 
 
tip:false,
label:"洒水车",
active:false,
cStyle:{"wrapper":{"default":{"width":"60px","height":"24px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","top":"205px","left":"505px","position":"unset","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","paddingLeft":"unset","marginLeft":"15px"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
});
const initParams = () => {
global.airGlobalVariables.waterSprinklerTruck.VMN = global.businessDialog.dialogParmas?.DEVIDE_ID || ''
apiRegistry.getBaseInfo.request();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getBaseInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"id":"","device_id":"global.airGlobalVariables.waterSprinklerTruck.VMN","VMN_TYPE":"ssc","interfaceId":"cec8a9f0eb62383b2ed0703f87a7b455"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"id":"","device_id":global.airGlobalVariables.waterSprinklerTruck.VMN,"VMN_TYPE":"ssc","interfaceId":"cec8a9f0eb62383b2ed0703f87a7b455"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"id":"","device_id":global.airGlobalVariables.waterSprinklerTruck.VMN,"VMN_TYPE":"ssc","interfaceId":"cec8a9f0eb62383b2ed0703f87a7b455"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.title = data[0]?.VEHICLE_NAME || '-'
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => ["ssc"], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getBaseInfo', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-waterSprinklerTruckDialogTitle', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initParams();
onMounted(() => {
setPageScale('t-l-c-waterSprinklerTruckDialogTitle', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tTextCommonx0x0x0ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x0x0.default, componentState.tTextCommonx0x0x0?.[state.screenSize]));

 const tRectx0x0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x0x1.default, componentState.tRectx0x0x1?.[state.screenSize]));

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
tRowx0x0ComputedData,
tTextCommonx0x0x0ComputedData,
tRectx0x0x1ComputedData,
};
},
};