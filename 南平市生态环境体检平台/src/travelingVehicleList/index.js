window.travelingVehicleListComponent = {
template: 
`<div id="t-l-c-travelingVehicleList" class="t-l-c-travelingVehicleList" >` +
`<t-table id="t-table-80e0.6d181a57a" class="travelingVehicleList-t-table-0-0"  :height="tTablex0x0ComputedData.height" :stripe="tTablex0x0ComputedData.stripe" :border="tTablex0x0ComputedData.border" :auto-scroll="tTablex0x0ComputedData.autoScroll" :speed="tTablex0x0ComputedData.speed" :columns="tTablex0x0ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-80e0.6d181a57a']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x0ComputedData.defaultSort" :c-style="tTablex0x0ComputedData.cStyle" @cell-click="oncellClick1765100518646">` +
`</t-table>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-table-80e0.6d181a57a":{"attributeName":"tTablex0x0","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}}};
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
   listParams: {"dateValue":"","endTime":"","startTime":""},
   listData: [],
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
tTablex0x0: {
defaultStyle: {
            default: {"width":"410px","height":"760px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
height:"760px",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
columns:[{"label":"车牌号","type":"default","key":"car_number","stateKey":"","width":"80px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--text-size-14)","lineHeight":"var(--text-size-14)"}}},{"label":"开始时间","type":"default","key":"start_date","stateKey":"","width":"110px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--text-size-14)","color":"var(--business-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"var(--business-unit-icon)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"结束时间","type":"default","key":"end_date","stateKey":"","width":"110px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--text-size-14)","color":"var(--business-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"var(--business-unit-icon)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"走航距离","type":"default","key":"go_distance","stateKey":"","width":"110px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--text-size-14)","color":"var(--business-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"var(--business-unit-icon)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"760px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px","position":"unset","left":"0px","top":"0px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}}}, 
 },
},
});
const handleClickTable = (cell,col,row) => {

if (["车牌号"].includes(col.label)) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: "addMobileMonitoringTrajectory",
    data: {
      "car_number": row.car_number,
      "client_id": row.client_id
    }
  });
}

};
const injectData = () => {
state.listParams = inject('zhcListParams');
console.log(state.listParams, 8888);

if (state.listParams.endTime && state.listParams.startTime) {
  apiRegistry.getListData.request();
}

if (state.listParams) {
  watch(() => [
    state.listParams.endTime,
    state.listParams.startTime
  ], async () => {
    apiRegistry.getListData.request();
  },{
  deep: true, // 深度监听
  });
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
  .t-l-c-travelingVehicleList .travelingVehicleList-t-table-0-0 {
    position: unset !important;
  }
`;

// 插入到 <head> 末尾
document.head.appendChild(style);
};
const oncellClick1765100518646 = (row,column,cell,event) => {
// 执行自定义方法
handleClickTable(cell,column,row);
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"endTime":"state.listParams.endTime","startTime":"state.listParams.startTime","interfaceId":"b6881577973ecc5c001a9490a7043703"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"endTime":state.listParams.endTime,"startTime":state.listParams.startTime,"interfaceId":"b6881577973ecc5c001a9490a7043703"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"endTime":state.listParams.endTime,"startTime":state.listParams.startTime,"interfaceId":"b6881577973ecc5c001a9490a7043703"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.listData = data.map(item =>{
    return{
      ...item,
    }
  })
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
 function handleWindowResize() {
                            setPageScale('t-l-c-travelingVehicleList', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
/* 接收socket.io消息 */
const onSocketChange3c51b6abd2db4bd8b999 = function (data) {
if(data.type === "mobileMonitoringTrajectoryLayerLoaded"){
try{
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "updateMobileMonitoringTrajectoryTime", // 消息名称
data: {"endTime":state.endTime,"startTime":state.startTime}, // 发送的数据
});
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange3c51b6abd2db4bd8b999);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange3c51b6abd2db4bd8b999);
});
// 执行自定义方法
injectData();
onMounted(() => {
setPageScale('t-l-c-travelingVehicleList', global.appScaleMode, 'normal');
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
 const tTablex0x0ComputedData = computed(() => _.merge({}, componentState.tTablex0x0.default, componentState.tTablex0x0?.[state.screenSize]));

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
tTablex0x0ComputedData,
oncellClick1765100518646,
};
},
};