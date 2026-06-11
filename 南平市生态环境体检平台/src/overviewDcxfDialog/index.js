window.overviewDcxfDialogComponent = {
template: 
`<div id="t-l-c-overviewDcxfDialog" class="t-l-c-overviewDcxfDialog" >` +
`<t-iframe id="t-iframe-dc8f.2f5b11688" class="overviewDcxfDialog-t-iframe-0-2"  :src="replaceCssVariables(filterData(state.url, componentPropBindingMap?.['t-iframe-dc8f.2f5b11688']['src'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :srcdoc="tIframex0x2ComputedData.srcdoc" :scrolling="tIframex0x2ComputedData.scrolling" :c-style="tIframex0x2ComputedData.cStyle">` +
`</t-iframe>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-09e8.3b71afa9a":{"attributeName":"tRectx0x0"},"t-row-469e.48124765a":{"attributeName":"tRowx0x1"},"t-iframe-dc8f.2f5b11688":{"attributeName":"tIframex0x2","src":{"filters":[]},"srcdoc":{"filters":[]},"scrolling":{"filters":[]},"cStyle":{"filters":[]}}};
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
   url: "",
   newPageToken: "",
   baseInfo: {"PROBLEM_DATE":"-","PROBLEM_LOCATION":"","PROBLEM_DESCRIPTION":""},
   PKID: "",
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
tIframex0x2: {
defaultStyle: {
            default: {"width":"100%","height":"100%","position":"unset","left":"0px","top":"0px","overflow":"auto","backgroundColor":"rgba(255, 255, 255, 1)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","min-height":"100%"},
            
            },
 default: { 
 
src:"",
srcdoc:"",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","position":"unset","left":"0px","top":"0px","overflow":"auto","backgroundColor":"rgba(255, 255, 255, 1)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","min-height":"100%"}}}, 
 },
},
});
const initParams = () => {
state.PKID = global.businessDialog.dialogParmas?.PKID || '355'
// apiRegistry.getBaseInfo.request();
// getBaseInfo()

const initPageData = async () => {
  const params = {
    username: 'shiliang',
    secret: 'TYZQefxMIJAGHgTwXXcgDIJ3NsybeLrWWnHcadm0VSH1j0oDpKa+KNZkfVvQ1LlwEYKkmgwwS2xcrXTTvXMmXg==',
  }
  const aRes = await axios.post(`${global.businessServiceBaseUrl}/jnfdsxs/prod-api/token/getToken`, params)
  console.log('信访弹窗-请求前的token', aRes);
  state.newPageToken = aRes.data?.data?.token || '';

  const url = `${global.supervisoryPetitionGlobalVariables.mapIp}/${global.supervisoryPetitionGlobalVariables.mapcontext}?lifekey=${state.PKID}&token=${state.newPageToken}`;
  state.url = url;
  console.log(state.PKID, global.supervisoryPetitionGlobalVariables.mapPointInfo, url);
  // http://192.168.24.106:10157
};

initPageData();
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
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"PKID":"state.PKID","PROBLEM_TYPE_CODE":"","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"1c17fa85460e61bbca61fa8d8f3ee820"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"PKID":state.PKID,"PROBLEM_TYPE_CODE":"","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"1c17fa85460e61bbca61fa8d8f3ee820"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"PKID":state.PKID,"PROBLEM_TYPE_CODE":"","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"1c17fa85460e61bbca61fa8d8f3ee820"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  Object.keys(data[0]).forEach(key =>{
    if(data[0][key] === ''){
      data[0][key] = '-'
    }
  })
  state.baseInfo = data[0]
}else{
  state.listData = []
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
watch(() => ["",global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getBaseInfo', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-overviewDcxfDialog', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initParams();
onMounted(() => {
setPageScale('t-l-c-overviewDcxfDialog', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tIframex0x2ComputedData = computed(() => _.merge({}, componentState.tIframex0x2.default, componentState.tIframex0x2?.[state.screenSize]));

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
tIframex0x2ComputedData,
};
},
};