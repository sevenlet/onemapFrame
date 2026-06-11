window.naturalEcologyNoStandardComponent = {
template: 
`<div id="t-l-c-naturalEcologyNoStandard" class="t-l-c-naturalEcologyNoStandard" >` +
`<t-row id="t-row-a401.a524b279" class="naturalEcologyNoStandard-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align">` +
`<t-col id="t-col-c2c8.1c849bddc" class="naturalEcologyNoStandard-t-col-0-0-0"  :span="tColx0x0x0ComputedData.span" :offset="tColx0x0x0ComputedData.offset" :push="tColx0x0x0ComputedData.push" :pull="tColx0x0x0ComputedData.pull" :c-style="tColx0x0x0ComputedData.cStyle">` +
`<t-table id="t-table-9237.04d2d0d11" class="naturalEcologyNoStandard-t-table-0-0-0-0"  :height="tTablex0x0x0x0ComputedData.height" :stripe="tTablex0x0x0x0ComputedData.stripe" :border="tTablex0x0x0x0ComputedData.border" :auto-scroll="tTablex0x0x0x0ComputedData.autoScroll" :speed="tTablex0x0x0x0ComputedData.speed" :columns="tTablex0x0x0x0ComputedData.columns" :data="replaceCssVariables(filterData(state.tableList, componentPropBindingMap?.['t-table-9237.04d2d0d11']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x0x0x0ComputedData.defaultSort" :c-style="tTablex0x0x0x0ComputedData.cStyle" :highlight-current-row="tTablex0x0x0x0ComputedData.highlightCurrentRow">` +
`</t-table>` +
`<t-pagination-base id="t-pagination-base-e399.947815b36" class="naturalEcologyNoStandard-t-pagination-base-0-0-0-1"  :total="replaceCssVariables(filterData(state.pageInfo.total, componentPropBindingMap?.['t-pagination-base-e399.947815b36']['total'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x0x0x1ComputedData.small" :page-size="replaceCssVariables(filterData(state.pageInfo.pageSize, componentPropBindingMap?.['t-pagination-base-e399.947815b36']['pageSize'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :pager-count="tPaginationBasex0x0x0x1ComputedData.pagerCount" :current-page="replaceCssVariables(filterData(state.pageInfo.pageNum, componentPropBindingMap?.['t-pagination-base-e399.947815b36']['currentPage'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x0x0x1ComputedData.layout" :page-sizes="tPaginationBasex0x0x0x1ComputedData.pageSizes" :disabled="tPaginationBasex0x0x0x1ComputedData.disabled" :c-style="tPaginationBasex0x0x0x1ComputedData.cStyle" @size-change="onsizeChange1765528375124_0_0" @current-change="oncurrentChange1765528375124_0_1">` +
`</t-pagination-base>` +
`</t-col>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-a401.a524b279":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-c2c8.1c849bddc":{"attributeName":"tColx0x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-table-9237.04d2d0d11":{"attributeName":"tTablex0x0x0x0","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]},"highlightCurrentRow":{"filters":[]}},"t-pagination-base-e399.947815b36":{"attributeName":"tPaginationBasex0x0x0x1","total":{"filters":[]},"small":{"filters":[]},"pageSize":{"filters":[]},"pagerCount":{"filters":[]},"currentPage":{"filters":[]},"layout":{"filters":[]},"pageSizes":{"filters":[]},"disabled":{"filters":[]},"cStyle":{"filters":[]}}};
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
   ECDMonitorTime: "",
   pageInfo: {"pageNum":1,"pageSize":10,"total":0,"pages":0},
   tableList: [],
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
            default: {"width":"96%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","top":"20px","left":"2%"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"96%","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","top":"20px","left":"2%"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"100%","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"0px","flexDirection":"column","gap":"auto","paddingTop":"unset"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"0px","flexDirection":"column","gap":"auto","paddingTop":"unset"}}}, 
 },
},
tTablex0x0x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"500px","backgroundColor":"","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
height:"100%",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
columns:[{"label":"序号","key":"sort_num","align":"center","operationList":[],"stateList":[],"style":{"fontStyle":{"color":"rgba(255, 255, 255, 1)"},"imageStyle":{"backgroundImage":""}},"width":"80px","minWidth":"50PX"},{"label":"指标名称","key":"index_name","align":"left","operationList":[],"stateList":[],"style":{"fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"14PX","padding":"0 0 0 16px","paddingLeft":"0px","paddingTop":"","paddingRight":"","paddingBottom":""}},"width":"auto","minWidth":"140PX","headerAlign":"center"},{"label":"单位","key":"index_unit","align":"center","operationList":[],"stateList":[],"width":"160px","minWidth":"100PX","style":{"fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}},{"label":"指标值","key":"index_value","type":"default","stateKey":"reductionRateState","align":"left","operationList":[],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"14px","fontWeight":"400","color":"rgba(255, 255, 255, 1)"}},"width":"300px","minWidth":"70PX","showOverflowTooltip":false},{"label":"指标类型","key":"index_type","type":"default","stateKey":"reductionRateState","align":"center","operationList":[],"stateList":[{"name":"负值","fontStyle":{"color":"rgba(0, 255, 34, 1)"}},{"name":"正值","fontStyle":{"color":"rgba(255, 132, 0, 1)"}}],"style":{"fontStyle":{"fontSize":"14px","fontWeight":"400","color":"rgba(255, 255, 255, 1)","lineHeight":"14px"}},"width":"220px","minWidth":"70PX","showOverflowTooltip":false}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"500px","backgroundColor":"","position":"unset","left":"0px","top":"0px","animationName":""}},"headerCell":{"default":{"borderBottom":"0px none rgba(20,112,204,0.3)","borderLeft":"0px none rgba(20,112,204,0.3)","borderRight":"0px none rgba(20,112,204,0.3)","borderTop":"0px none rgba(20,112,204,0.3)","color":"#fff","backgroundColor":"rgba(20, 112, 204, 0.3)","fontSize":"14px","lineHeight":"38px","height":"38px","marginTop":"0px","paddingBottom":"0px","paddingTop":"0px","marginBottom":"0px","paddingLeft":"0px"}},"bodyCell":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.1)","borderBottom":"0px none rgba(24,37,64,1)","borderLeft":"0px none rgba(24,37,64,1)","borderRight":"0px none rgba(24,37,64,1)","borderTop":"0px none rgba(24,37,64,1)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingBottom":"20px","paddingTop":"20px","lineHeight":"40px","fontSize":"14px","fontFamily":"微软雅黑","paddingLeft":"30px","paddingRight":"30px"},"hover":{"backgroundColor":"rgba(20, 112, 204, 0.15)"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(0, 59, 132, 0.3)"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)"}},"rowWrapper":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.15)"}}},
highlightCurrentRow:false, 
 },
},
tPaginationBasex0x0x0x1: {
defaultStyle: {
            default: {"width":"100%","height":"40px","position":"unset","left":"1px","top":"758px","color":"","animationName":"","display":"flex","justifyContent":"flex-end","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingTop":"unset","paddingBottom":"unset","marginTop":"10px","alignItems":"center"},
            
            },
 default: { 
 
total:0,
small:false,
pageSize:5,
pagerCount:5,
currentPage:1,
layout:" prev, pager, next,total,sizes,jumper",
pageSizes:[5,10,20,30,40,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"40px","position":"unset","left":"1px","top":"758px","color":"","animationName":"","display":"flex","justifyContent":"flex-end","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingTop":"unset","paddingBottom":"unset","marginTop":"10px","alignItems":"center"}},"pagerItem":{"default":{"color":"var(--t-color-text-green)","fontSize":"14px","lineHeight":"32px","borderLeft":"1px none #366B92","borderTop":"1px none #366B92","borderRight":"1px none #366B92","borderBottom":"1px none #366B92","marginLeft":"0px","marginRight":"5px","backgroundColor":"var(--business-select-item-bg)"},"active":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundColor":"#6FAED9","color":"#FFFFFF","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""},"hover":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","color":"#FFFFFF","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"#6FAED9"}},"pager":{"default":{"borderLeft":"1px none var(--theme-btn-default)","borderTop":"1px none var(--theme-btn-default)","borderRight":"1px none var(--theme-btn-default)","borderBottom":"1px none var(--theme-btn-default)","color":"var(--t-color-text-green)","marginLeft":"0px","marginRight":"0px","backgroundColor":"#0D4895"},"hover":{"color":"#FFFFFF","borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--t-button-bg)"}},"more":{"default":{"color":"var(--t-color-text-green)"},"hover":{"color":"#366B92","backgroundColor":""}},"total":{"default":{"color":"var(--t-color-text-green)","paddingRight":"0px","paddingLeft":"0px","fontSize":"14px","marginRight":"0px","marginLeft":"20px","display":"flex"}},"sizesWrapper":{"default":{"color":"var(--t-color-text-green)","fontSize":"14px","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","marginRight":"10px","marginLeft":"10px"}},"sizesInput":{"default":{"color":"var(--common-white08)","borderLeft":"1px solid var(--common-white08)","borderTop":"1px solid var(--common-white08)","borderRight":"1px solid var(--common-white08)","borderBottom":"1px solid var(--common-white08)","backgroundColor":""},"hover":{"borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"jumpWrapper":{"default":{"color":"var(--t-color-text-green)","backgroundColor":""}},"jumpInput":{"default":{"color":"var(--t-color-text-green)","backgroundColor":"var(--business-select-item-bg)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},"hover":{"color":"var(--common-white1)","borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"sizesDropdownWrapper":{"default":{"backgroundColor":"","color":"rgba(255, 255, 255, 0.9)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px"}},"sizesDropdownItem":{"default":{"color":"rgba(255, 255, 255, 0.9)","backgroundColor":"","borderLeft":"1px none #00828A","borderTop":"1px none #00828A","borderRight":"1px none #00828A","borderBottom":"1px none #00828A"},"active":{"backgroundColor":"var(--business-select-item-bg)","color":"var(--business-text-hover)"},"hover":{"color":"var(--business-text-hover)","backgroundColor":"var(--business-select-item-bg)"}}}, 
 },
},
});
const initData = () => {
const componentDom = document.querySelector('#t-l-c-naturalEcologyNoStandard')
const styles = document.createElement('style')
styles.innerHTML = `
.t-l-c-naturalEcologyNoStandard{
  height: 100% !important;
  width: 100% !important;
}
`
componentDom.append(styles)
};
const closePop = () => {
global.showCockpitCenterPop = false
};
const changeTitle = () => {
state.dialogTitle = `${state.selectYear}年党政领导生态环境保护目标责任书考核评分细则落实情况`
};
const onsizeChange1765528375124_0_0 = (pageSize) => {
// 设置变量值
state.pageInfo.pageSize = pageSize;
};
const oncurrentChange1765528375124_0_1 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getEcologicalCivilizationDevelopmentInfoMonitorTimeCopy: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"is_standard":"","index_type":"","region_path":"global.REGION_CODE","interfaceId":"4ec24bca8f27a804e306dfa2e18380ef"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"is_standard":"","index_type":"","region_path":global.REGION_CODE,"interfaceId":"4ec24bca8f27a804e306dfa2e18380ef"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"is_standard":"","index_type":"","region_path":global.REGION_CODE,"interfaceId":"4ec24bca8f27a804e306dfa2e18380ef"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getEcologicalCivilizationDevelopmentInfoMonitorTimeCopy'] = res.data;
                
     state.ECDMonitorTime = res?.data?.data?.year_number || '--';

apiRegistry.getListData.request();
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.ECDMonitorTime = '--';
      reject(error);
    });
  });
},
              },
// 接口函数
 getListData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"pageNum":"state.pageInfo.pageNum","pageSize":"state.pageInfo.pageSize","is_standard":"0","index_type":"","region_code":"global.REGION_CODE","year_number":"state.ECDMonitorTime","interfaceId":"108df14db560b73ef3acc0a0232d459c"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"pageNum":state.pageInfo.pageNum,"pageSize":state.pageInfo.pageSize,"is_standard":"0","index_type":"","region_code":global.REGION_CODE,"year_number":state.ECDMonitorTime,"interfaceId":"108df14db560b73ef3acc0a0232d459c"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"pageNum":state.pageInfo.pageNum,"pageSize":state.pageInfo.pageSize,"is_standard":"0","index_type":"","region_code":global.REGION_CODE,"year_number":state.ECDMonitorTime,"interfaceId":"108df14db560b73ef3acc0a0232d459c"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     const formatEmptyValue = (value) => {
  return value === null || value === undefined || value === '' ? '--' : value;
};

// 使用函数处理数据
if (res.data.head.statusCode === '200' && res.data?.data) {
  state.tableList = [];
  const pageInfo = res.data.head.pageInfo;
  const pageNum = pageInfo.pageNum || 1;
  const pageSize = pageInfo.pageSize || 10;
  state.pageInfo.total = Number(pageInfo.total) || 0;
  
  state.tableList = res.data.data.map((item, index) => {
    const newItem = {};
    // 添加一列序号列
    newItem.sort_num = (pageNum - 1) * pageSize + index + 1;
    
    for (const key in item) {
      newItem[key] = formatEmptyValue(item[key]);
    }
    return newItem;
  });
} else {
  state.tableList = [];
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
watch(() => [state.pageInfo.pageNum,state.pageInfo.pageSize], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getListData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-naturalEcologyNoStandard', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-naturalEcologyNoStandard', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
initData();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tColx0x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0x0.default, componentState.tColx0x0x0?.[state.screenSize]));

 const tTablex0x0x0x0ComputedData = computed(() => _.merge({}, componentState.tTablex0x0x0x0.default, componentState.tTablex0x0x0x0?.[state.screenSize]));

 const tPaginationBasex0x0x0x1ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x0x0x1.default, componentState.tPaginationBasex0x0x0x1?.[state.screenSize]));

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
tColx0x0x0ComputedData,
tTablex0x0x0x0ComputedData,
tPaginationBasex0x0x0x1ComputedData,
onsizeChange1765528375124_0_0,
oncurrentChange1765528375124_0_1,
};
},
};