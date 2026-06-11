window.performanceTrackingSimpleComponent = {
template: 
`<div id="t-l-c-performanceTrackingSimple" class="t-l-c-performanceTrackingSimple" >` +
`<t-component id="t-component-568d.7cecfab45" class="performanceTrackingSimple-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-41ff.d151512ad" class="performanceTrackingSimple-t-text-0-1"  :label="replaceCssVariables(filterData(global.dashboardGlobalVariables.supervision.monitorTime, componentPropBindingMap?.['t-text-41ff.d151512ad']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-06d8.e7d863be1" class="performanceTrackingSimple-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-69fa.991666b61" class="performanceTrackingSimple-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-1c83.4e0ee1013" class="performanceTrackingSimple-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-b115.3e3473a24" class="performanceTrackingSimple-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle" @click="onclick1764068849042">` +
`</t-rect>` +
`<t-component id="t-component-6b40.959c72ec3" class="performanceTrackingSimple-t-component-0-6"  :name="tComponentx0x6ComputedData.name" :loading="tComponentx0x6ComputedData.loading" :c-style="tComponentx0x6ComputedData.cStyle" :src="tComponentx0x6ComputedData.src" :component-name="tComponentx0x6ComputedData.componentName" :page-id="tComponentx0x6ComputedData.pageId" :page-code="tComponentx0x6ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-a736.44c7496ac" class="performanceTrackingSimple-t-component-0-7"  :name="tComponentx0x7ComputedData.name" :loading="tComponentx0x7ComputedData.loading" :c-style="tComponentx0x7ComputedData.cStyle" :src="tComponentx0x7ComputedData.src" :component-name="tComponentx0x7ComputedData.componentName" :page-id="tComponentx0x7ComputedData.pageId" :page-code="tComponentx0x7ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-370a.93f1e71b5" class="performanceTrackingSimple-t-component-0-8"  :name="tComponentx0x8ComputedData.name" :loading="tComponentx0x8ComputedData.loading" :c-style="tComponentx0x8ComputedData.cStyle" :src="tComponentx0x8ComputedData.src" :component-name="tComponentx0x8ComputedData.componentName" :page-id="tComponentx0x8ComputedData.pageId" :page-code="tComponentx0x8ComputedData.pageCode">` +
`</t-component>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-568d.7cecfab45":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-41ff.d151512ad":{"attributeName":"tTextx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-06d8.e7d863be1":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-69fa.991666b61":{"attributeName":"tTextx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-1c83.4e0ee1013":{"attributeName":"tRectx0x4","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-b115.3e3473a24":{"attributeName":"tRectx0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-6b40.959c72ec3":{"attributeName":"tComponentx0x6","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-a736.44c7496ac":{"attributeName":"tComponentx0x7","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-370a.93f1e71b5":{"attributeName":"tComponentx0x8","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}}};
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
   cardData: "",
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
            default: {"width":"400px","height":"50px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
name:"cockpitTitleComponent",
cStyle:{"wrapper":{"default":{"width":"400px","height":"50px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/cockpitTitle",
componentName:"cockpitTitleComponent", 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"113px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"277px","top":"22px","animationName":""},
            
            },
 default: { 
 
label:"2025",
editable:false,
cStyle:{"wrapper":{"default":{"width":"113px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"277px","top":"22px","animationName":""}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"242px","top":"22px","animationName":""},
            
            },
 default: { 
 
label:"截至",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"242px","top":"22px","animationName":""}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"118px","height":"20px","color":"#fff","fontSize":"20px","fontFamily":"方正综艺","position":"unset","left":"49px","top":"20px"},
            
            },
 default: { 
 
label:"督察督办",
editable:false,
cStyle:{"wrapper":{"default":{"width":"118px","height":"20px","color":"#fff","fontSize":"20px","fontFamily":"方正综艺","position":"unset","left":"49px","top":"20px"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"25px","height":"34px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","background":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-11-01/e6300ac4e8304941b76850a471c10f4b.svg)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","position":"unset","left":"127px","top":"15px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"25px","height":"34px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","background":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-11-01/e6300ac4e8304941b76850a471c10f4b.svg)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","position":"unset","left":"127px","top":"15px","animationName":""},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"400px","height":"48px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","top":"0px","left":"0px","position":"unset","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"400px","height":"48px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","top":"0px","left":"0px","position":"unset","cursor":"pointer"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tComponentx0x6: {
defaultStyle: {
            default: {"width":"400px","height":"108px","margin":"0 auto","position":"unset","left":"1px","top":"290px"},
            
            },
 default: { 
 
name:"performanceTrackingSection6Component",
loading:true,
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","margin":"0 auto","position":"unset","left":"1px","top":"290px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/performanceTrackingSection6",
componentName:"performanceTrackingSection6Component",
pageId:"a0999b779d374eae94f8b07dfd13bbc4",
pageCode:"performanceTrackingSection6", 
 },
},
tComponentx0x7: {
defaultStyle: {
            default: {"width":"400px","height":"108px","margin":"0 auto","position":"unset","left":"0px","top":"58px","animationName":""},
            
            },
 default: { 
 
name:"performanceTrackingSection1Component",
loading:true,
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","margin":"0 auto","position":"unset","left":"0px","top":"58px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/performanceTrackingSection1",
componentName:"performanceTrackingSection1Component",
pageId:"7cd4db2823da41f599ebbb4d71b46c2b",
pageCode:"performanceTrackingSection1", 
 },
},
tComponentx0x8: {
defaultStyle: {
            default: {"width":"400px","height":"108px","margin":"0 auto","position":"unset","left":"0px","top":"174px","animationName":""},
            
            },
 default: { 
 
name:"performanceTrackingSection4Component",
loading:true,
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","margin":"0 auto","position":"unset","left":"0px","top":"174px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/performanceTrackingSection4",
componentName:"performanceTrackingSection4Component",
pageId:"184a9faa172749f2aab149334b06e8cb",
pageCode:"performanceTrackingSection4", 
 },
},
});
const onclick1764068849042 = () => {
// 执行自定义方法
dashboardGlobalFunctions.linkTo("petition");
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"REGION_CODE":"global.REGION_CODE","interfaceId":"62208d73a8a5ed56ea316db21d7cf58c"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"REGION_CODE":global.REGION_CODE,"interfaceId":"62208d73a8a5ed56ea316db21d7cf58c"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"REGION_CODE":global.REGION_CODE,"interfaceId":"62208d73a8a5ed56ea316db21d7cf58c"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTime'] = res.data;
                
     global.dashboardGlobalVariables.supervision.monitorTime = res?.data?.data.MAX_TIME || '';

apiRegistry.getData.request();
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"START_TIME":"","interfaceId":"cb51c6bc9f4fa5fed4d875cb5a8e8100","FINISH_STATUS":"","END_TIME":"global.dashboardGlobalVariables.supervision.monitorTime","REGION_CODE":"global.REGION_CODE","PROBLEM_SOURCE":""}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"START_TIME":"","interfaceId":"cb51c6bc9f4fa5fed4d875cb5a8e8100","FINISH_STATUS":"","END_TIME":global.dashboardGlobalVariables.supervision.monitorTime,"REGION_CODE":global.REGION_CODE,"PROBLEM_SOURCE":""},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"START_TIME":"","interfaceId":"cb51c6bc9f4fa5fed4d875cb5a8e8100","FINISH_STATUS":"","END_TIME":global.dashboardGlobalVariables.supervision.monitorTime,"REGION_CODE":global.REGION_CODE,"PROBLEM_SOURCE":""});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getData'] = res.data;
                
     
const cardInfo = {
  // 央督
  PROBLEM_SOURCE1: {
    // 第2轮
    ROUND1: {
      TOTAL: '--',
      STATUS_0: '--',
      STATUS_1: '--'
    },
    // 第2轮
    ROUND2: {
      TOTAL: '--',
      STATUS_0: '--',
      STATUS_1: '--'
    },
    // 第3轮
    ROUND3: {
      TOTAL: '--',
      STATUS_0: '--',
      STATUS_1: '--'
    }
  },
  // 省督
  PROBLEM_SOURCE2: {
    // 第1轮
    ROUND1: {
      TOTAL: '--',
      STATUS_0: '--',
      STATUS_1: '--'
    },
    // 第2轮
    ROUND2: {
      TOTAL: '--',
      STATUS_0: '--',
      STATUS_1: '--'
    }
  },
  // 体检问题
  PROBLEM_SOURCE3: {
    TOTAL: '--',
    STATUS_0: '--',
    STATUS_1: '--',
    STATUS_2: '--',
    STATUS_3: '--',
    STATUS_4: '--',
  }
}

if (res?.data?.data && res?.data?.data.length > 0) {
  const { data } = res?.data;
  // PROBLEM_SOURCE  问题来源（1：央督，2：省督,3：体检问题） 
  // ROUND_NO  轮次，对于央督有1、2、3对于省督只有1、2，对于体检无轮次之分
  // STATUS_  完成状态(问题来源于央督、省督：0未完成，1已完成；问题来源于体检问题：2未分办，3已办结，4正在办理)

  data.forEach((item) => {
    const { PROBLEM_SOURCE, ROUND_NO, STATUS_0, STATUS_1, STATUS_2, STATUS_3, STATUS_4, TOTAL } = item;
    if (PROBLEM_SOURCE === '3') {
      cardInfo.PROBLEM_SOURCE3 = {
        TOTAL, STATUS_0, STATUS_1, STATUS_2, STATUS_3, STATUS_4
      }
    } else if (PROBLEM_SOURCE && ROUND_NO) {
      cardInfo[`PROBLEM_SOURCE${PROBLEM_SOURCE}`][`ROUND${ROUND_NO}`] = {
        TOTAL,
        STATUS_0,
        STATUS_1
      }
    }
  });
}

console.log(cardInfo)

global.dashboardGlobalVariables.supervision.cardData = cardInfo;
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // global.constructTime = '--';
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => ["",global.dashboardGlobalVariables.supervision.monitorTime,global.REGION_CODE], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-performanceTrackingSimple', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-performanceTrackingSimple', global.appScaleMode, 'normal');
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

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tComponentx0x6ComputedData = computed(() => _.merge({}, componentState.tComponentx0x6.default, componentState.tComponentx0x6?.[state.screenSize]));

 const tComponentx0x7ComputedData = computed(() => _.merge({}, componentState.tComponentx0x7.default, componentState.tComponentx0x7?.[state.screenSize]));

 const tComponentx0x8ComputedData = computed(() => _.merge({}, componentState.tComponentx0x8.default, componentState.tComponentx0x8?.[state.screenSize]));

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
tTextx0x2ComputedData,
tTextx0x3ComputedData,
tRectx0x4ComputedData,
tRectx0x5ComputedData,
tComponentx0x6ComputedData,
tComponentx0x7ComputedData,
tComponentx0x8ComputedData,
onclick1764068849042,
};
},
};