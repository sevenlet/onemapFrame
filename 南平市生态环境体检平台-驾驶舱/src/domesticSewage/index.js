window.domesticSewageComponent = {
template: 
`<div id="t-l-c-domesticSewage" class="t-l-c-domesticSewage" >` +
`<t-rect id="t-rect-9e7a.53a7f26fc" class="domesticSewage-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-24f7.d9c8ed99" class="domesticSewage-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-f301.9ed18f50a" class="domesticSewage-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-common id="t-text-common-2e3a.ee9e1466d" class="domesticSewage-t-text-common-0-3"  :label="tTextCommonx0x3ComputedData.label" :editable="tTextCommonx0x3ComputedData.editable" :c-style="tTextCommonx0x3ComputedData.cStyle">` +
`</t-text-common>` +
`<t-table id="t-table-b998.79da5f0ed" class="domesticSewage-t-table-0-4"  :height="tTablex0x4ComputedData.height" :stripe="tTablex0x4ComputedData.stripe" :border="tTablex0x4ComputedData.border" :auto-scroll="tTablex0x4ComputedData.autoScroll" :speed="tTablex0x4ComputedData.speed" :columns="tTablex0x4ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-b998.79da5f0ed']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x4ComputedData.defaultSort" :c-style="tTablex0x4ComputedData.cStyle">` +
`</t-table>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-9e7a.53a7f26fc":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-24f7.d9c8ed99":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-f301.9ed18f50a":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-2e3a.ee9e1466d":{"attributeName":"tTextCommonx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-table-b998.79da5f0ed":{"attributeName":"tTablex0x4","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}}};
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
   listData: [],
   controlLevel: "",
   layerSwitch: "false",
   dataSourceType: "",
   monitorTime: "2024",
   pointName: "",
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
            default: {"width":"980px","height":"186px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"0px","top":"0px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-21/bb51ca06e0cc4048b7ee6aac2bb1517a.png)","fillType":"image"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"980px","height":"186px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"0px","top":"0px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-21/bb51ca06e0cc4048b7ee6aac2bb1517a.png)","fillType":"image"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"120px","height":"4px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"48px","top":"1px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/64bff933dc4b426d980cc1fc741c94c8.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"4px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"48px","top":"1px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/64bff933dc4b426d980cc1fc741c94c8.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":""},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"980px","height":"61px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"-1px","top":"1px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/e6eee83707dc494e8eed88cd8e44561a.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"980px","height":"61px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","position":"unset","left":"-1px","top":"1px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2025-11-19/e6eee83707dc494e8eed88cd8e44561a.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":""},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tTextCommonx0x3: {
defaultStyle: {
            default: {"width":"293px","height":"30px","color":"#ffffff","fontFamily":"优设标题黑","fontWeight":"400","fontSize":"30px","lineHeight":"30px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"61px","top":"18px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"农村生活污水",
editable:false,
cStyle:{"wrapper":{"default":{"width":"293px","height":"30px","color":"#ffffff","fontFamily":"优设标题黑","fontWeight":"400","fontSize":"30px","lineHeight":"30px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"61px","top":"18px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tTablex0x4: {
defaultStyle: {
            default: {"width":"980px","height":"120px","backgroundColor":"","position":"unset","left":"0px","top":"61px","animationName":""},
            
            },
 default: { 
 
height:"119px",
stripe:true,
border:false,
autoScroll:"rowScroll",
speed:"6",
columns:[{"label":"定位","key":"ionic","align":"center","operationList":[],"stateList":[],"style":{"fontStyle":{"color":null},"imageStyle":{"backgroundSize":"unset","backgroundImage":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2023-01-05/95d04d0c780c4e8186c44fb450ba8fe5.png","width":"15px","height":"17px","marginLeft":"","marginTop":"10px","marginRight":"","marginBottom":""}},"width":"52px","minWidth":"50PX"},{"label":"区县名称","key":"region_name","align":"center","operationList":[],"stateList":[],"style":{"fontStyle":{"display":"block","color":"rgba(255, 255, 255, 1)","fontSize":"14PX","padding":"0 0 0 16px","fontWeight":"400"}},"width":"232px","minWidth":"140PX","headerAlign":"center","showOverflowTooltip":true},{"label":"治理率（%）","key":"gk_rate","type":"state","stateKey":"standard_name","align":"center","operationList":[],"stateList":[{"name":"达标","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"不达标","fontStyle":{"color":"rgba(255, 255, 255, 1)"}}],"style":{"fontStyle":{"fontSize":"14px","fontWeight":"400","color":"rgba(255, 255, 255, 1)"}},"width":"232px","minWidth":"70PX","showOverflowTooltip":true},{"label":"治理村庄数（个）","key":"zxc_sl","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"14px","fontWeight":"400","color":"rgba(255, 255, 255, 1)"}},"width":"232px","minWidth":"70PX","showOverflowTooltip":true},{"label":"村庄总数（个）","key":"fg_zxc_sl","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"14px","fontWeight":"400","color":"rgba(255, 255, 255, 1)"}},"width":"232px","minWidth":"70PX","showOverflowTooltip":true}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"980px","height":"120px","backgroundColor":"","position":"unset","left":"0px","top":"61px","animationName":""}},"headerCell":{"default":{"borderBottom":"0px none rgba(20,112,204,0.3)","borderLeft":"0px none rgba(20,112,204,0.3)","borderRight":"0px none rgba(20,112,204,0.3)","borderTop":"0px none rgba(20,112,204,0.3)","color":"#fff","backgroundColor":"rgba(20, 112, 204, 0.3)","fontSize":"14px","lineHeight":"38px","height":"38px","marginTop":"0px","paddingBottom":"0px","paddingTop":"0px","marginBottom":"0px","paddingLeft":"0px"}},"bodyCell":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.1)","borderBottom":"0px none rgba(24,37,64,1)","borderLeft":"0px none rgba(24,37,64,1)","borderRight":"0px none rgba(24,37,64,1)","borderTop":"0px none rgba(24,37,64,1)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingBottom":"0px","paddingTop":"0px","lineHeight":"40px","fontSize":"12px","fontFamily":"微软雅黑","fontWeight":"400"},"hover":{"backgroundColor":"rgba(20, 112, 204, 0.15)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(0, 59, 132, 0.3)"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)"}},"rowWrapper":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.15)"}}}, 
 },
},
});
const handleChangeTab = (type) => {
if (type === '1' || type === '2') {
  state.controlLevel = type;
  state.dataSourceType = 'surfaceWater';
} else {
  state.controlLevel = '';
  state.dataSourceType = type;
}
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getListData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"REGION_CODE":"","PARENT_REGION_CODE":"global.REGION_CODE","YEAR_NUMBER":"state.monitorTime","interfaceId":"5653b9444cff20efc45eb6ebd7a33ec6"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"REGION_CODE":"","PARENT_REGION_CODE":global.REGION_CODE,"YEAR_NUMBER":state.monitorTime,"interfaceId":"5653b9444cff20efc45eb6ebd7a33ec6"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"REGION_CODE":"","PARENT_REGION_CODE":global.REGION_CODE,"YEAR_NUMBER":state.monitorTime,"interfaceId":"5653b9444cff20efc45eb6ebd7a33ec6"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     if (res.data?.data?.length) {
  state.listData = res.data.data.map(item => {
    return {
      ...item,
      // gk_rate: item.gk_rate ? `${item.gk_rate}%` : item.gk_rate
    };
  });
} else {
  state.listData = [];
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getMonitorTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"PARENT_REGION_CODE":"global.REGION_CODE","REGION_CODE":"","interfaceId":"e0d337849b2db0ed17164bb474f1a8c2"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"PARENT_REGION_CODE":global.REGION_CODE,"REGION_CODE":"","interfaceId":"e0d337849b2db0ed17164bb474f1a8c2"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"PARENT_REGION_CODE":global.REGION_CODE,"REGION_CODE":"","interfaceId":"e0d337849b2db0ed17164bb474f1a8c2"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMonitorTime'] = res.data;
                
     state.monitorTime = res?.data?.data[0]?.monitortime || '--';

apiRegistry.getListData.request();
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.monitorTime = '--';
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-domesticSewage', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onBeforeUnmount(() => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "setWaterAutomaticStatus", // 消息名称
data: {"visible":false}, // 发送的数据
});
});
onMounted(() => {
setPageScale('t-l-c-domesticSewage', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tTextCommonx0x3ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x3.default, componentState.tTextCommonx0x3?.[state.screenSize]));

 const tTablex0x4ComputedData = computed(() => _.merge({}, componentState.tTablex0x4.default, componentState.tTablex0x4?.[state.screenSize]));

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
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tTextCommonx0x3ComputedData,
tTablex0x4ComputedData,
};
},
};