window.tjwtDeptProblemDetailComponent = {
template: 
`<div id="t-l-c-tjwtDeptProblemDetail" class="t-l-c-tjwtDeptProblemDetail" >` +
`<t-iframe id="t-iframe-7da4.02f26f57e" class="tjwtDeptProblemDetail-t-iframe-0-0"  :src="replaceCssVariables(filterData(global.deptIframeSrc, componentPropBindingMap?.['t-iframe-7da4.02f26f57e']['src'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :srcdoc="tIframex0x0ComputedData.srcdoc" :scrolling="tIframex0x0ComputedData.scrolling" :c-style="tIframex0x0ComputedData.cStyle">` +
`</t-iframe>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-iframe-7da4.02f26f57e":{"attributeName":"tIframex0x0","src":{"filters":[]},"srcdoc":{"filters":[]},"scrolling":{"filters":[]},"cStyle":{"filters":[]}}};
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
   timeData: [],
   ENTER_NAME_LIKE: "",
   pageInfo: {"pageSize":15,"pageNum":1,"total":0},
   ENTER_NAME: "",
   END_TIME: "",
   START_TIME: "",
   tableTitle: "日常信访详情",
   dialogTitle: "日常信访详情",
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
tIframex0x0: {
defaultStyle: {
            default: {"width":"100%","height":"100%","position":"unset","left":"0px","top":"0px","backgroundColor":"rgba(255, 255, 255, 1)"},
            
            },
 default: { 
 
src:"",
srcdoc:"",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","position":"unset","left":"0px","top":"0px","backgroundColor":"rgba(255, 255, 255, 1)"}}}, 
 },
},
});
const initData = () => {
// 修复后的参数解析函数：支持解析#后的哈希路由参数
function getUrlParam(paramName, url) {
  // 1. 优先使用传入的url，否则用当前页面URL
  const targetUrl = url || window.location.href;

  // 2. 拆分URL：先找#，再找?（兼容标准参数和哈希参数）
  let queryString = '';
  // 先提取#后的部分
  const hashIndex = targetUrl.indexOf('#');
  if (hashIndex !== -1) {
    const hashPart = targetUrl.slice(hashIndex + 1);
    // 从哈希部分找?后的参数
    const hashQueryIndex = hashPart.indexOf('?');
    if (hashQueryIndex !== -1) {
      queryString = hashPart.slice(hashQueryIndex + 1);
    }
  }

  // 3. 如果哈希后没有参数，再找标准的?后的参数（兼容常规场景）
  if (!queryString) {
    const searchIndex = targetUrl.indexOf('?');
    if (searchIndex !== -1 && (hashIndex === -1 || searchIndex < hashIndex)) {
      queryString = targetUrl.slice(searchIndex + 1, hashIndex === -1 ? undefined : hashIndex);
    }
  }

  // 4. 解析参数并解码（处理中文）
  if (queryString) {
    // 分割参数键值对
    const params = new URLSearchParams(queryString);
    const value = params.get(paramName);
    return value ? decodeURIComponent(value) : '';
  }

  // 5. 没有找到参数返回空字符串
  return '';
}

setTimeout(() => {
  const currentUrl = window.location.href;
  const iframeEnterName = getUrlParam('enterName', currentUrl);
  // const isFrame = getUrlParam('isFrame', currentUrl);
  console.log('iframe内部解析的enterName参数值:', currentUrl, iframeEnterName);
  if (iframeEnterName) {
    state.tableTitle = '信访投诉详情';
    state.ENTER_NAME = iframeEnterName || '';
    state.START_TIME = '';
    state.END_TIME = '';
    global.isFrame = true;
  } else {
    state.tableTitle = '日常信访详情';
    global.isFrame = false;
    state.ENTER_NAME = global?.dashboardGlobalVariables?.dailyComplaint?.complaintListItemName || '';
    state.START_TIME = global?.dashboardGlobalVariables?.dailyComplaint?.startTime || '';
    state.END_TIME = global?.dashboardGlobalVariables?.dailyComplaint?.endTime || '';
    state.timeData = [state.START_TIME, state.END_TIME];
  }
  apiRegistry.getData.request();
}, 0)


};
const clickTable = (row,col) => {
console.log(row, col)
if (col.label === '详情') {
  global.dashboardGlobalVariables.dailyComplaint.complaintListItemId = row?.id || '';

  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'createDialog',  // 消息类型名称
      data: {
        data: {
          headerComName: "",
          contentComName: "dailyComplaintPopupDetailComponent",
          maxWidth: "1600px",
          maxHeight: "930px",
          minWidth: "1000px",
          minHeight: "500px",
          isScalse: false,
          title: "详情"
        }
      }
    }
  );
}
};
const setDom = () => {
const styleDom = document.createElement('style');
styleDom.innerHTML = `
.t-l-c-inquirySuesTablePop .el-table__header {
  width: 100% !important;
}
.t-l-c-inquirySuesTablePop .el-table__body {
  width: 100% !important;
}

  `;
document.head.appendChild(styleDom);


};
const setTime = (data) => {
state.START_TIME = data[0];
state.END_TIME = data[1];
apiRegistry.getData.request();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"pageSize":"state.pageInfo.pageSize","pageNum":"state.pageInfo.pageNum","ENTER_NAME_LIKE":"state.ENTER_NAME_LIKE","ENTER_NAME":"state.ENTER_NAME","END_TIME":"state.END_TIME","START_TIME":"state.START_TIME","REGION_PATH":"global.REGION_CODE","interfaceId":"a5fc4ee46eaa5c8c393c7b13caa4d705"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"ENTER_NAME_LIKE":state.ENTER_NAME_LIKE,"ENTER_NAME":state.ENTER_NAME,"END_TIME":state.END_TIME,"START_TIME":state.START_TIME,"REGION_PATH":global.REGION_CODE,"interfaceId":"a5fc4ee46eaa5c8c393c7b13caa4d705"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"pageSize":state.pageInfo.pageSize,"pageNum":state.pageInfo.pageNum,"ENTER_NAME_LIKE":state.ENTER_NAME_LIKE,"ENTER_NAME":state.ENTER_NAME,"END_TIME":state.END_TIME,"START_TIME":state.START_TIME,"REGION_PATH":global.REGION_CODE,"interfaceId":"a5fc4ee46eaa5c8c393c7b13caa4d705"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getData'] = res.data;
                
     state.tableList = [];
if (res.data.head.statusCode === '200' && res.data?.data?.length) {
  state.pageInfo.total = res.data.head.pageInfo.total;
  state.pageInfo.pageSize = res.data.head.pageInfo.pageSize;
  state.pageInfo.pageNum = res.data.head.pageInfo.pageNum;

  // 处理数据，添加映射字段
  state.tableList = res.data.data.map((item, index) => {
    return {
      ...item,
      sort_num: index + 1,
      action: '详情'
    };
  });
} else {
  state.tableList = [];
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableList = [];
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [global.REGION_CODE], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-tjwtDeptProblemDetail', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-tjwtDeptProblemDetail', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tIframex0x0ComputedData = computed(() => _.merge({}, componentState.tIframex0x0.default, componentState.tIframex0x0?.[state.screenSize]));

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
};
},
};