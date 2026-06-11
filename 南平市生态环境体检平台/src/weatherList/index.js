window.weatherListComponent = {
template: 
`<div id="t-l-c-weatherList" class="t-l-c-weatherList" >` +
`<t-table id="t-table-80e0.6d181a57a" class="weatherList-t-table-0-3"  :height="tTablex0x3ComputedData.height" :stripe="tTablex0x3ComputedData.stripe" :border="tTablex0x3ComputedData.border" :auto-scroll="tTablex0x3ComputedData.autoScroll" :speed="tTablex0x3ComputedData.speed" :columns="tTablex0x3ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-80e0.6d181a57a']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x3ComputedData.defaultSort" :c-style="tTablex0x3ComputedData.cStyle" @cell-click="oncellClick1765355235045">` +
`</t-table>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-search-c865.89b8b1ef6":{"attributeName":"tSearchx0x0"},"t-pagination-base-cba2.7821ebb8f":{"attributeName":"tPaginationBasex0x1"},"t-button-be39.18d7f76b":{"attributeName":"tButtonx0x2"},"t-table-80e0.6d181a57a":{"attributeName":"tTablex0x3","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}}};
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
   keyWord: "",
   listData: [],
   pageInfo: {"pageNum":1,"pageSize":15,"total":0,"pages":0},
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
tTablex0x3: {
defaultStyle: {
            default: {"width":"410px","height":"761px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"780px",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":"","fontSize":"var(--business-text-size-14)","lineHeight":"var(--business-text-size-14)"}},"width":"50px","type":"default","stateKey":"iconStatus"},{"label":"名称","type":"default","key":"POINT_NAME","stateKey":"","width":"auto","minWidth":"","align":"left","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","lineHeight":"var(--business-text-size-14)"}}}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"761px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}}}, 
 },
},
});
const goToLocation = (column,row) => {
if (["定位"].includes(column.label)) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: "gotoPoint",
    data: {
      "longitude": row.LONGITUDE,
      "latitude": row.LATITUDE,
    }
  });
} else if (column.label === '操作') {
  // 之前的查看按钮的点击逻辑，现在变成静态调度按钮

  // rootData.rootSocket.emit('message', {
  //   room: global.socketRoom, // 房间号
  //   type: "gotoPoint", // 消息名称
  //   data: {
  //     longitude: row.LONGITUDE,
  //     latitude: row.LATITUDE,
  //   }
  // });

  // rootData.rootSocket.emit('message', {
  //   room: global.socketRoom, // 房间号
  //   type: "featureClicked", // 消息名称
  //   data: {
  //     "layerId": "小区",
  //     "feature": {
  //       "type": "Feature",
  //       "properties": row,
  //       "geometry": {
  //         "type": "Point",
  //         "coordinates": [
  //           row.LONGITUDE,
  //           row.LATITUDE
  //         ]
  //       }
  //     }
  //   }
  // });
}


};
const setCss = () => {
/**
 * 添加表格无数据样式
 */

// 创建 <style> 元素
const style = document.createElement('style');

// 定义样式规则（带 !important 确保覆盖第三方库默认样式）
style.innerHTML = `
  .t-l-c-xqContentList .xqContentList-t-table-0-0 {
    position: unset !important;
  }
`;

// 插入到 <head> 末尾
document.head.appendChild(style);
};
const sendUpdateParamsMsgMap = (type,visible) => {
// rootData.rootSocket.emit(
//   'message',  // 固定的消息名称，不能修改
//   {
//     room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
//     type: 'updateHireStatus',  // 消息类型名称
//     data: {
//       type: type || '',
//       queryParams: {
//         distance: state.distanceUnit,
//         queryField: state.keywordFieldName,
//         keyword: state.keywords,
//         topicCode: state.topicCode,
//         locationField: 'location',
//         useGisShape: false,
//         pointValue: state.pointValue,
//         gisType: 'geo_distance',
//         REGION_CODE: '',
//         tagJson: state.tagJson,
//         hasGather: false,
//         HasAllTag: true,
//         ENTITY_CODE: state.entityCode,
//         pageSize: 2000,
//         pageNum: 1
//       },
//       visible,
//     }
//   }
// );
// console.log('发送了updateHireStatus消息')
};
const removePoint = () => {

rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: "removePoint", // 消息名称
  data: {
    show: false,
    pointData: state.selectIds.length > 0 ? state.selectIds : state.removeData,
  },
});
console.log(state.selectIds,state.removeData,'移出的点位数据');
state.checkShow = false;
state.heightShow = false;
state.checkData = [];
state.heightData = [];
state.selectIds = [];
state.show = true;
state.pointData = [];
state.selectId = "";
state.selectData = [];
state.removeData = [];
};
const oncellClick1765355235045 = (row,column,cell,event) => {
// 执行自定义方法
goToLocation(column,row);
};
const onchange1767749197586 = (value) => {
// 设置变量值
state.keyWord = value;
};
const onclear1767749223766 = () => {
// 事件交互-请求调用接口
apiRegistry.getListData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "clearGotoPoint", // 消息名称
data: {}, // 发送的数据
});
};
const onclick1767749484738 = () => {
// 事件交互-请求调用接口
apiRegistry.getListData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "clearGotoPoint", // 消息名称
data: {}, // 发送的数据
});
};
const oncurrentChange1758181820293_0_0 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
// 执行自定义方法
removePoint();
};
const oncurrentChange1768215500194_0_0 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
// 事件交互-请求调用接口
apiRegistry.getListData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
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
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_TYPE":"21,22","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"48f27a45ab6772cad3e379bff43bc69d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_TYPE":"21,22","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"48f27a45ab6772cad3e379bff43bc69d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_TYPE":"21,22","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"48f27a45ab6772cad3e379bff43bc69d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  // state.pageInfo.total = head.pageInfo.total
  state.listData = data.map(item =>{
    return{
      ...item,
      "opt": "opt"
    }
  })
}else{
  state.listData = []
  // state.pageInfo.total = 0
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
                            setPageScale('t-l-c-weatherList', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-weatherList', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setCss();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTablex0x3ComputedData = computed(() => _.merge({}, componentState.tTablex0x3.default, componentState.tTablex0x3?.[state.screenSize]));

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
tTablex0x3ComputedData,
oncellClick1765355235045,
};
},
};