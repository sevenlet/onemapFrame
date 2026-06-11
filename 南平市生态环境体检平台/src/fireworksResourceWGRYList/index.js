window.fireworksResourceWGRYListComponent = {
template: 
`<div id="t-l-c-fireworksResourceWGRYList" class="t-l-c-fireworksResourceWGRYList" >` +
`<t-pagination-base id="t-pagination-base-be1f.cad60a546" class="fireworksResourceWGRYList-t-pagination-base-0-0"  :total="replaceCssVariables(filterData(state.pageInfo.total, componentPropBindingMap?.['t-pagination-base-be1f.cad60a546']['total'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x0ComputedData.small" :page-size="replaceCssVariables(filterData(state.pageInfo.pageSize, componentPropBindingMap?.['t-pagination-base-be1f.cad60a546']['pageSize'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :pager-count="tPaginationBasex0x0ComputedData.pagerCount" :current-page="replaceCssVariables(filterData(state.pageInfo.pageNum, componentPropBindingMap?.['t-pagination-base-be1f.cad60a546']['currentPage'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x0ComputedData.layout" :page-sizes="tPaginationBasex0x0ComputedData.pageSizes" :disabled="tPaginationBasex0x0ComputedData.disabled" :c-style="tPaginationBasex0x0ComputedData.cStyle" @current-change="oncurrentChange1772502256443_0_1">` +
`</t-pagination-base>` +
`<t-table id="t-table-c799.5f717c05a" class="fireworksResourceWGRYList-t-table-0-1"  :height="tTablex0x1ComputedData.height" :stripe="tTablex0x1ComputedData.stripe" :border="tTablex0x1ComputedData.border" :auto-scroll="tTablex0x1ComputedData.autoScroll" :speed="tTablex0x1ComputedData.speed" :columns="tTablex0x1ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-c799.5f717c05a']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x1ComputedData.defaultSort" :c-style="tTablex0x1ComputedData.cStyle" @cell-click="oncellClick1764838608814_0_0">` +
`</t-table>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-pagination-base-be1f.cad60a546":{"attributeName":"tPaginationBasex0x0","total":{"filters":[]},"small":{"filters":[]},"pageSize":{"filters":[]},"pagerCount":{"filters":[]},"currentPage":{"filters":[]},"layout":{"filters":[]},"pageSizes":{"filters":[]},"disabled":{"filters":[]},"cStyle":{"filters":[]}},"t-table-c799.5f717c05a":{"attributeName":"tTablex0x1","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}}};
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
   pageInfo: {"pageNum":1,"pageSize":10,"total":0,"pages":0},
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
tPaginationBasex0x0: {
defaultStyle: {
            default: {"width":"403px","height":"40px","borderLeft":"0px none var(--business-show-bg60)","borderTop":"0px none var(--business-show-bg60)","borderRight":"0px none var(--business-show-bg60)","borderBottom":"0px none var(--business-show-bg60)","display":"flex","justifyContent":"flex-end","animationName":"","fontSize":"var(--business-text-size-14)"},
            
            },
 default: { 
 
total:0,
small:false,
pageSize:5,
pagerCount:3,
currentPage:1,
layout:" prev, pager, next,sizes,total",
pageSizes:[5,10,15,20,30,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"403px","height":"40px","borderLeft":"0px none var(--business-show-bg60)","borderTop":"0px none var(--business-show-bg60)","borderRight":"0px none var(--business-show-bg60)","borderBottom":"0px none var(--business-show-bg60)","display":"flex","justifyContent":"flex-end","animationName":"","fontSize":"var(--business-text-size-14)"}},"total":{"default":{"color":"var(--business-text-avianize)","position":"unset","right":"0px","left":"0px","width":"auto","fontSize":"var(--business-text-size-14)","marginLeft":"15px","marginRight":"0px"}},"pagerItem":{"default":{"color":"var(--business-white)","backgroundColor":"var(--business-show-bg15)","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","cursor":"pointer","fontSize":"var(--business-text-size-14)","marginLeft":"0px"},"hover":{"color":"var(--business-white)","background":"var(--business-btn-active)","borderLeft":"1px none rgba(255,13,0,1)","borderTop":"1px none rgba(255,13,0,1)","borderRight":"1px none rgba(255,13,0,1)","borderBottom":"1px none rgba(255,13,0,1)","pointerEvents":"auto","overflow":"visible","cursor":"pointer","fontSize":"var(--business-text-size-14)","marginLeft":"0px"},"active":{"color":"var(--business-white)","background":"var(--business-btn-active)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","fontSize":"var(--business-text-size-14)","marginLeft":"0px"}},"pager":{"default":{"color":"var(--business-white)","backgroundColor":"var(--business-show-bg15)","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","fontSize":"var(--business-text-size-12)","marginLeft":"0px"},"hover":{"color":"var(--business-white)","background":"var(--business-btn-active)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","fontSize":"var(--business-text-size-12)","marginLeft":"0px"}},"more":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"fontSize":"var(--business-text-size-12)"}},"sizesWrapper":{"default":{"fontSize":"var(--business-text-size-14)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","display":"none"}},"sizesInput":{"default":{"fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"sizesDropdownWrapper":{"default":{"fontSize":"var(--business-text-size-14)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-dialog-bg)"}},"sizesDropdownItem":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)","backgroundColor":"rgba(26, 27, 31, 0)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"}},"jumpWrapper":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"jumpInput":{"default":{"fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
tTablex0x1: {
defaultStyle: {
            default: {"width":"403px","height":"434px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"580",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""},"cellStyle":{"cursor":"pointer"}},"width":"44PX","type":"default","stateKey":"iconStatus"},{"label":"网格人员","key":"name","align":"left","operationList":[],"stateList":[],"showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"var(--business-text-size-14)"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"nameTextStatus","infoPosition":"right"},{"label":"状态","key":"status","align":"center","operationList":[],"stateList":[],"width":"100PX","showOverflowTooltip":true,"style":{"fontStyle":{"fontSize":"var(--business-text-size-14)"},"cellStyle":{"cursor":"pointer"}}}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"403px","height":"434px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
});
const gotoMapLocation = (row,column) => {
if (["定位"].includes(column.label)) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: "gotoPoint",
    data: {
      "longitude": row?.LONGITUDE || row?.longitude,
      "latitude": row?.LATITUDE || row?.latitude,
    }
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
  .t-l-c-fireworksResourceWGRYList .fireworksResourceWGRYList-t-table-0-0 {
    position: unset !important;
  }
  .t-l-c-fireworksResourceWGRYList .el-table__body-wrapper {
    height: 448px !important;
    overflow-y: auto !important;
}
`;

// 插入到 <head> 末尾
document.head.appendChild(style);
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
const oncurrentChange1772502256443_0_1 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
};
const oncellClick1764838608814_0_0 = (row,column,cell,event) => {
// 执行自定义方法
gotoMapLocation(row,column);
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"pageNum":"state.pageInfo.pageNum","pageSize":"state.pageInfo.pageSize","interfaceId":"4d10ef5afa983a7f9f70c674b919707f"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"pageNum":state.pageInfo.pageNum,"pageSize":state.pageInfo.pageSize,"interfaceId":"4d10ef5afa983a7f9f70c674b919707f"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"pageNum":state.pageInfo.pageNum,"pageSize":state.pageInfo.pageSize,"interfaceId":"4d10ef5afa983a7f9f70c674b919707f"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     const { data, head } = res.data;
state.listData = [];
if (head.statusCode === '200' && data.length) {
  state.pageInfo.total = head.pageInfo.total
  state.listData = data.map(item =>{
    return{
      ...item,
      name: item?.WGY || '-',
      status: item?.ZF_STATUS || '-'
    }
  })
  // state.listData = [...state.listData,...state.listData,...state.listData]
}else{
  state.listData = []
  state.pageInfo.total = 0
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
watch(() => [state.pageInfo.pageNum], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getListData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-fireworksResourceWGRYList', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-fireworksResourceWGRYList', global.appScaleMode, 'normal');
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
 const tPaginationBasex0x0ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x0.default, componentState.tPaginationBasex0x0?.[state.screenSize]));

 const tTablex0x1ComputedData = computed(() => _.merge({}, componentState.tTablex0x1.default, componentState.tTablex0x1?.[state.screenSize]));

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
tPaginationBasex0x0ComputedData,
tTablex0x1ComputedData,
oncurrentChange1772502256443_0_1,
oncellClick1764838608814_0_0,
};
},
};