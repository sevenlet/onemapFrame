window.footerNavMenuComponent = {
template: 
`<div id="t-l-c-footerNavMenu" class="t-l-c-footerNavMenu" >` +
`<t-rect v-if="global.bottomMenuExpandState === true" id="t-rect-a288.ab9ba5d84" class="footerNavMenu-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-component id="t-component-d342.f8c27d49c" class="footerNavMenu-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName">` +
`</t-component>` +
`<t-component id="t-component-bc51.cefb01cb9" class="footerNavMenu-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName" :page-id="tComponentx0x2ComputedData.pageId" :page-code="tComponentx0x2ComputedData.pageCode">` +
`</t-component>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-a288.ab9ba5d84":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-d342.f8c27d49c":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-bc51.cefb01cb9":{"attributeName":"tComponentx0x2","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}}};
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
   expandState: false,
   component: "bottomMenuDoubleComponent",
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
            default: {"width":"1920px","height":"1009px","position":"unset","left":"0px","top":"-788px","backgroundImage":"var(--t-bottom-background-mask)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","pointerEvents":"none"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1920px","height":"1009px","position":"unset","left":"0px","top":"-788px","backgroundImage":"var(--t-bottom-background-mask)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","pointerEvents":"none"}}}, 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"1920px","height":"117px","margin":"0 auto","backgroundColor":"rgba(23, 62, 228, 0)","top":"107px","left":"0px","position":"unset","transition":"1s","pointerEvents":"none"},
            
            },
 default: { 
 
name:"expandOrFoldComponent",
cStyle:{"wrapper":{"default":{"width":"1920px","height":"117px","margin":"0 auto","backgroundColor":"rgba(23, 62, 228, 0)","top":"107px","left":"0px","position":"unset","transition":"1s","pointerEvents":"none"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/expandOrFold",
componentName:"expandOrFoldComponent", 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"1920px","height":"130px","margin":"0 auto","backgroundColor":"rgba(23, 62, 228, 0)","top":"226px","left":"0px","position":"unset","animationName":"","transition":"1s","pointerEvents":"none"},
            
            },
 default: { 
 
name:"bottomMenuDoubleComponent",
cStyle:{"wrapper":{"default":{"width":"1920px","height":"130px","margin":"0 auto","backgroundColor":"rgba(23, 62, 228, 0)","top":"226px","left":"0px","position":"unset","animationName":"","transition":"1s","pointerEvents":"none"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/[object Object]",
componentName:"bottomMenuDoubleComponent",
pageId:"1efa8a483063472186d4b683bd0dd526",
pageCode:"bottomMenuDouble", 
 },
},
});let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getMenuListCopy: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"interfaceId":"dee50f8ea76eaf13dc5750b740ad44ff","sss":"FJSTY.OVERVIEW"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"dee50f8ea76eaf13dc5750b740ad44ff","sss":"FJSTY.OVERVIEW"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"interfaceId":"dee50f8ea76eaf13dc5750b740ad44ff","sss":"FJSTY.OVERVIEW"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMenuListCopy'] = res.data;
                
     if(res.data.length){
  const length = res.data.filter(item => item.PARENT === '1a0c3796-f8ba-410c-9d4b-c643a9b606d8').length
  if(length % 2 === 0){
    state.component = 'bottomMenuDoubleComponent'
  }else{
    state.component = 'bottomMenuSingleComponent'
  }
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
 function handleWindowResize() {
                            setPageScale('t-l-c-footerNavMenu', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-footerNavMenu', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

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
tComponentx0x1ComputedData,
tComponentx0x2ComputedData,
};
},
};