window.rectificationTaskProgressComponent = {
template: 
`<div id="t-l-c-rectificationTaskProgress" class="t-l-c-rectificationTaskProgress" >` +
`<t-component id="t-component-87ab.c0d519db8" class="rectificationTaskProgress-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :loading="tComponentx0x0ComputedData.loading" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName" :page-id="tComponentx0x0ComputedData.pageId" :page-code="tComponentx0x0ComputedData.pageCode">` +
`</t-component>` +
`<t-text-common id="t-text-common-a1d4.85a754315" class="rectificationTaskProgress-t-text-common-0-1"  :label="tTextCommonx0x1ComputedData.label" :editable="tTextCommonx0x1ComputedData.editable" :c-style="tTextCommonx0x1ComputedData.cStyle">` +
`</t-text-common>` +
`<t-component id="t-component-0657.afcd5ca12" class="rectificationTaskProgress-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :loading="tComponentx0x2ComputedData.loading" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName" :page-id="tComponentx0x2ComputedData.pageId" :page-code="tComponentx0x2ComputedData.pageCode">` +
`</t-component>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-87ab.c0d519db8":{"attributeName":"tComponentx0x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-common-a1d4.85a754315":{"attributeName":"tTextCommonx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-component-0657.afcd5ca12":{"attributeName":"tComponentx0x2","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}}};
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
   problem_id: "",
   info: [],
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
            default: {"width":"830px","height":"36px","margin":"0 auto","position":"unset","left":"2px","top":"1px","animationName":""},
            
            },
 default: { 
 
name:"level2DialogTitleComponent",
loading:false,
cStyle:{"wrapper":{"default":{"width":"830px","height":"36px","margin":"0 auto","position":"unset","left":"2px","top":"1px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/level2DialogTitle",
componentName:"level2DialogTitleComponent",
pageId:"37a7dcf5b0aa4af5946815e6a8106d8a",
pageCode:"level2DialogTitle", 
 },
},
tTextCommonx0x1: {
defaultStyle: {
            default: {"width":"113px","height":"20px","color":"var(--business-white)","fontFamily":"方正综艺","fontWeight":"400","fontSize":"20px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"49px","top":"6px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"整改进展",
editable:false,
cStyle:{"wrapper":{"default":{"width":"113px","height":"20px","color":"var(--business-white)","fontFamily":"方正综艺","fontWeight":"400","fontSize":"20px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"49px","top":"6px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"830px","height":"646px","margin":"0 auto","position":"unset","left":"0px","top":"40px"},
            
            },
 default: { 
 
name:"rectificationTaskProgressInfoComponent",
loading:false,
cStyle:{"wrapper":{"default":{"width":"830px","height":"646px","margin":"0 auto","position":"unset","left":"0px","top":"40px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/rectificationTaskProgressInfo",
componentName:"rectificationTaskProgressInfoComponent",
pageId:"fbbe10dce21d437893a9283f7ec45eff",
pageCode:"rectificationTaskProgressInfo", 
 },
},
});
const initData = () => {
provide('rectificationTaskProgressState',state)

const { problem_id } = global.supervisorPopParams

state.problem_id = problem_id;
(async()=>{
  await apiRegistry.getInfo.request();
})()
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"PROBLEM_ID":"state.problem_id","interfaceId":"279dbf3d30fd3c6ba9b196d0283c4e95"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"PROBLEM_ID":state.problem_id,"interfaceId":"279dbf3d30fd3c6ba9b196d0283c4e95"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"PROBLEM_ID":state.problem_id,"interfaceId":"279dbf3d30fd3c6ba9b196d0283c4e95"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getInfo'] = res.data;
                
     if (res.data.head.statusCode === '200' && res.data?.data?.length) {
  // 处理数据，添加映射字段
  state.info = res.data.data
} else {
  state.info = []
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.info = [];
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-rectificationTaskProgress', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initData();
onMounted(() => {
setPageScale('t-l-c-rectificationTaskProgress', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextCommonx0x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1.default, componentState.tTextCommonx0x1?.[state.screenSize]));

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
tComponentx0x0ComputedData,
tTextCommonx0x1ComputedData,
tComponentx0x2ComputedData,
};
},
};