window.airCenterFireworksContentComponent = {
template: 
`<div id="t-l-c-airCenterFireworksContent" class="t-l-c-airCenterFireworksContent" >` +
`<t-button id="t-button-2a6e.64b188df4" class="airCenterFireworksContent-t-button-0-0"  :label="tButtonx0x0ComputedData.label" :round="tButtonx0x0ComputedData.round" :plain="tButtonx0x0ComputedData.plain" :disabled="tButtonx0x0ComputedData.disabled" :type="tButtonx0x0ComputedData.type" :size="tButtonx0x0ComputedData.size" :native-type="tButtonx0x0ComputedData.native-type" :c-style="tButtonx0x0ComputedData.cStyle" @click="onclick1766886257462">` +
`</t-button>` +
`<t-button id="t-button-cb37.8d1da106b" class="airCenterFireworksContent-t-button-0-1"  :label="tButtonx0x1ComputedData.label" :round="tButtonx0x1ComputedData.round" :plain="tButtonx0x1ComputedData.plain" :disabled="tButtonx0x1ComputedData.disabled" :type="tButtonx0x1ComputedData.type" :size="tButtonx0x1ComputedData.size" :native-type="tButtonx0x1ComputedData.native-type" :c-style="tButtonx0x1ComputedData.cStyle" @click="onclick1766369515905">` +
`</t-button>` +
`<t-button id="t-button-d590.3071cb69c" class="airCenterFireworksContent-t-button-0-2"  :label="tButtonx0x2ComputedData.label" :round="tButtonx0x2ComputedData.round" :plain="tButtonx0x2ComputedData.plain" :disabled="tButtonx0x2ComputedData.disabled" :type="tButtonx0x2ComputedData.type" :size="tButtonx0x2ComputedData.size" :native-type="tButtonx0x2ComputedData.native-type" :c-style="tButtonx0x2ComputedData.cStyle" @click="onclick1766370462065">` +
`</t-button>` +
`<t-button id="t-button-437e.e5e947e7f" class="airCenterFireworksContent-t-button-0-3"  :label="tButtonx0x3ComputedData.label" :round="tButtonx0x3ComputedData.round" :plain="tButtonx0x3ComputedData.plain" :disabled="tButtonx0x3ComputedData.disabled" :type="tButtonx0x3ComputedData.type" :size="tButtonx0x3ComputedData.size" :native-type="tButtonx0x3ComputedData.native-type" :c-style="tButtonx0x3ComputedData.cStyle" @click="onclick1766727068323_0_0">` +
`</t-button>` +
`<t-image-base id="t-image-base-d5ca.b4fb1571" class="airCenterFireworksContent-t-image-base-0-4"  :src="tImageBasex0x4ComputedData.src" :fit="tImageBasex0x4ComputedData.fit" :c-style="tImageBasex0x4ComputedData.cStyle" @click="onclick1770257061732">` +
`</t-image-base>` +
`<t-circle v-if="state.isShowXcTodoNum === true" id="t-circle-27f5.8ddbac949" class="airCenterFireworksContent-t-circle-0-5"  :tip="tCirclex0x5ComputedData.tip" :label="replaceCssVariables(filterData(state.xcTodoNum, componentPropBindingMap?.['t-circle-27f5.8ddbac949']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active="tCirclex0x5ComputedData.active" :c-style="tCirclex0x5ComputedData.cStyle">` +
`</t-circle>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-button-2a6e.64b188df4":{"attributeName":"tButtonx0x0","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-button-cb37.8d1da106b":{"attributeName":"tButtonx0x1","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-button-d590.3071cb69c":{"attributeName":"tButtonx0x2","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-button-437e.e5e947e7f":{"attributeName":"tButtonx0x3","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-d5ca.b4fb1571":{"attributeName":"tImageBasex0x4","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-circle-27f5.8ddbac949":{"attributeName":"tCirclex0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   timeType: "minute",
   xctime: "",
   xcTodoNum: "0",
   isShowXcTodoNum: false,
   timeEnd: "",
   timeStart: "",
   debouncedGetData: {},
   pointType: "",
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
tButtonx0x0: {
defaultStyle: {
            default: {"width":"68px","height":"28px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","top":"2px","left":"331px","position":"unset"},
            
            },
 default: { 
 
label:"视频总览",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"68px","height":"28px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","top":"2px","left":"331px","position":"unset"},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tButtonx0x1: {
defaultStyle: {
            default: {"width":"68px","height":"28px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","position":"unset","left":"331px","top":"46px","marginLeft":"0px"},
            
            },
 default: { 
 
label:"远程调度",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"68px","height":"28px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","position":"unset","left":"331px","top":"46px","marginLeft":"0px"},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tButtonx0x2: {
defaultStyle: {
            default: {"width":"68px","height":"28px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","left":"331px","position":"unset","top":"89px","marginLeft":"0px"},
            
            },
 default: { 
 
label:"巡查情况",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"68px","height":"28px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","left":"331px","position":"unset","top":"89px","marginLeft":"0px"},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tButtonx0x3: {
defaultStyle: {
            default: {"width":"68px","height":"28px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","left":"331px","position":"unset","top":"132px","marginLeft":"0px"},
            
            },
 default: { 
 
label:"措施库",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"68px","height":"28px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-btn-default)","fontSize":"12px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","left":"331px","position":"unset","top":"132px","marginLeft":"0px"},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tImageBasex0x4: {
defaultStyle: {
            default: {"width":"25px","height":"25px","top":"174px","left":"354px","position":"unset","cursor":"pointer"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2022-11-01/325115b23ccc4714ae4cc3711d4269f4.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"25px","height":"25px","top":"174px","left":"354px","position":"unset","cursor":"pointer"}}}, 
 },
},
tCirclex0x5: {
defaultStyle: {
            default: {"width":"24px","height":"24px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-circle-border-color)","borderLeft":"1px none var(--t-circle-border-color)","borderBottom":"1px none var(--t-circle-border-color)","borderRight":"1px none var(--t-circle-border-color)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomRightRadius":"50%","borderBottomLeftRadius":"50%","fontSize":"10px","lineHeight":"10px","backgroundColor":"var(--t-aqi-red)","position":"unset","left":"317px","top":"78px","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(80%) scaleY(80%)\n      skewX(0deg) skewY(0deg)\n      ","color":"var(--t-white)"},
            
            },
 default: { 
 
tip:false,
label:"0",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-circle-border-color)","borderLeft":"1px none var(--t-circle-border-color)","borderBottom":"1px none var(--t-circle-border-color)","borderRight":"1px none var(--t-circle-border-color)","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomRightRadius":"50%","borderBottomLeftRadius":"50%","fontSize":"10px","lineHeight":"10px","backgroundColor":"var(--t-aqi-red)","position":"unset","left":"317px","top":"78px","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(80%) scaleY(80%)\n      skewX(0deg) skewY(0deg)\n      ","color":"var(--t-white)"},"active":{"background":"var(--t-brand8)","fillType":"color"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"12px","lineHeight":"12px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
});
const handleOpenXcqk = () => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'createDialog',  // 消息类型名称
    data: {
      "params": {               // 消息内容，对象格式
        'title': '巡查情况',
        'maxWidth': '1400px',
        'maxHeight': '800px',
        'minWidth': '1000px',
        'minHeight': '600px',
        'contentComName': 'yhbzInspectionsituationComponent',
      }
    }
  }
);
};
const handleOpenCsk = () => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'createDialog',  // 消息类型名称
    data: {
      "params": {               // 消息内容，对象格式
        'title': '措施库',
        'maxWidth': '1860px',
        'maxHeight': '1020px',
        'minWidth': '1860px',
        'minHeight': '1020px',
        'contentComName': 'measurePopComponent',
        'hiddenScaleButton': true,
      }
    }
  }
);

};
const handleOpenSpzl = () => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'createDialog',  // 消息类型名称
    data: {
      "params": {               // 消息内容，对象格式
        'title': '视频总览',
        'maxWidth': '1860px',
        'maxHeight': '1020px',
        'minWidth': '1860px',
        'minHeight': '1020px',
        'contentComName': 'videoOverviewPopComponent',
        'hiddenScaleButton': true,
      }
    }
  }
);
};
const sendTimeMes = (changeTimeType) => {
const timeValue = global.airGlobalVariables.realTimeAlarm.dateValue;
/**
 * changeTimeType: 是否改变了时间类型
 */
// 改变时间轴数据消息
rootData.rootSocket.emit(
  // 固定的消息名称，不能修改
  'message',
  {
    // 键名不能改 房间号，这里为默认值，一般无需修改，如果变量名称自己定义的则需要修改
    room: global.socketRoom,
    // 键名不能改 消息名称
    type: 'changeTimeAxisData',
    // 键名不能改 消息内容 对象格式
    data: {
      sourceType: 'airOverview',
      timeType: state.timeType,
      timeValue: timeValue,
    },
  }
);
// 改变时间类型发送消息-changeTimeType
if (changeTimeType) {
  // 给地图发消息-changeTimeType
  rootData.rootSocket.emit(
    // 固定的消息名称，不能修改
    'message',
    {
      room: global.socketRoom,
      type: 'changeTimeType',
      data: {
        TIME_TYPE: state.timeType,
        POLLUTE: global.air.centerIndexSelect,
        MONITORTIME: timeValue,
      },
    }
  );
} else {
  // 给地图发消息-changeTime
  rootData.rootSocket.emit(
    // 固定的消息名称，不能修改
    'message',
    {
      room: global.socketRoom,
      type: 'changeTime',
      data: {
        MONITORTIME: timeValue,
      },
    }
  );
}

};
const initParams = () => {
watch(() => global.regionaQuery.regionCode, () => {
  if (global.regionaQuery.regionCode) {
    const regionLevelCode = getRegionLevel(global.regionaQuery.regionCode);
    switch (regionLevelCode) {
      case 'province':
      case 'city':
        state.pointType = '12';
        break;
      case 'county':
        state.pointType = '13';
        break;
      default:
        break;
    }
  }
}, {
  deep: true,
  immediate: true,
})

// 获取当前年份
const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = (now.getMonth() + 1) < 9 ? ('0' + (now.getMonth() + 1)) : now.getMonth() + 1
const currentDay = now.getDate();

state.timeStart = `${currentYear}-${currentMonth}-${currentDay} 00:00:00`;
state.timeEnd = `${currentYear}-${currentMonth}-${currentDay} 23:59:59`;
// 获取今日巡查记录待办数量
getXcNumData();
};
const debounceData = () => {
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 2. 定义原始业务函数
function getData() {
  apiRegistry.getRefreshTime.request().then(() => {
    ElementPlus.ElMessage({ message: '刷新成功', type: 'success' });
  }).catch(() => {
    ElementPlus.ElMessage.error('刷新失败');
  });
}

// 3. 创建防抖函数（只创建一次！）
state.debouncedGetData = debounce(getData, 500);
};
const handleRefresh = () => {
// 防抖
state.debouncedGetData()
};
const getXcNumData = () => {
state.xctime = Math.random();

apiRegistry.getXcTodoNum.request();
};
const onclick1766369515905 = () => {
// 执行自定义方法
openWX();
};
const onclick1766370462065 = () => {
// 执行自定义方法
handleOpenXcqk();
};
const onclick1766727068323_0_0 = () => {
// 执行自定义方法
handleOpenCsk();
};
const onclick1766886257462 = () => {
// 执行自定义方法
handleOpenSpzl();
};
const onclick1770257061732 = () => {
// 执行自定义方法
handleRefresh();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getXcTodoNum: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"xctime":"state.xctime","community_id":"","pageNum":1,"pageSize":"10000","inspectionTimeStart":"state.timeStart","inspectionTimeEnd":"state.timeEnd","interfaceId":"4a679fccf67a8c4bf111c4b39593b167"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"xctime":state.xctime,"community_id":"","pageNum":1,"pageSize":"10000","inspectionTimeStart":state.timeStart,"inspectionTimeEnd":state.timeEnd,"interfaceId":"4a679fccf67a8c4bf111c4b39593b167"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"xctime":state.xctime,"community_id":"","pageNum":1,"pageSize":"10000","inspectionTimeStart":state.timeStart,"inspectionTimeEnd":state.timeEnd,"interfaceId":"4a679fccf67a8c4bf111c4b39593b167"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getXcTodoNum'] = res.data;
                
     if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  // state.pageInfo.total = res?.data?.head?.pageInfo?.total;
  state.isShowXcTodoNum = !!res?.data?.head?.pageInfo?.total || false;
  state.xcTodoNum = res?.data?.head?.pageInfo?.total || 0;
} else {
  state.isShowXcTodoNum = false;
  state.xcTodoNum = 0;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
        state.isShowXcTodoNum = false;
  state.xcTodoNum = 0;
      reject(error);
    });
  });
},
              },
// 接口函数
 getRefreshTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_TYPE":"state.pointType","TIME_TYPE":"5minute","interfaceId":"66ad2ebe9d660295568b05187f34e133"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_TYPE":state.pointType,"TIME_TYPE":"5minute","interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_TYPE":state.pointType,"TIME_TYPE":"5minute","interfaceId":"66ad2ebe9d660295568b05187f34e133"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getRefreshTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  global.airGlobalVariables.realTimeAlarm.dateValue = data.MONITORTIME
  sendTimeMes(true);
} else {
  global.airGlobalVariables.realTimeAlarm.dateValue = ''
}
if (!global.airGlobalVariables.fireworks.isEnterHdPage) {
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'changeTime',  // 消息类型名称
      data: {                   // 消息内容，对象格式
        'MONITORTIME': global.airGlobalVariables.realTimeAlarm.dateValue,
      }
    }
  );
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'yhbzTimeUpdated',  // 消息类型名称
      data: {                   // 消息内容，对象格式
        'time': global.airGlobalVariables.realTimeAlarm.dateValue
      }
    }
  );
}else{
  global.airGlobalVariables.fireworks.isEnterHdPage = false
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
watch(() => [1,"10000"], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getXcTodoNum', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => ["5minute"], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getRefreshTime', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-airCenterFireworksContent', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initParams();
// 执行自定义方法
debounceData();
/* 接收socket.io消息 */
const onSocketChange655a6889efe7406889b1 = function (data) {
if(data.type === "refreshXcNum"){
try{
// 执行自定义方法
getXcNumData();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange655a6889efe7406889b1);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange655a6889efe7406889b1);
});
onMounted(() => {
setPageScale('t-l-c-airCenterFireworksContent', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tButtonx0x0ComputedData = computed(() => _.merge({}, componentState.tButtonx0x0.default, componentState.tButtonx0x0?.[state.screenSize]));

 const tButtonx0x1ComputedData = computed(() => _.merge({}, componentState.tButtonx0x1.default, componentState.tButtonx0x1?.[state.screenSize]));

 const tButtonx0x2ComputedData = computed(() => _.merge({}, componentState.tButtonx0x2.default, componentState.tButtonx0x2?.[state.screenSize]));

 const tButtonx0x3ComputedData = computed(() => _.merge({}, componentState.tButtonx0x3.default, componentState.tButtonx0x3?.[state.screenSize]));

 const tImageBasex0x4ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x4.default, componentState.tImageBasex0x4?.[state.screenSize]));

 const tCirclex0x5ComputedData = computed(() => _.merge({}, componentState.tCirclex0x5.default, componentState.tCirclex0x5?.[state.screenSize]));

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
tButtonx0x0ComputedData,
tButtonx0x1ComputedData,
tButtonx0x2ComputedData,
tButtonx0x3ComputedData,
tImageBasex0x4ComputedData,
tCirclex0x5ComputedData,
onclick1766886257462,
onclick1766369515905,
onclick1766370462065,
onclick1766727068323_0_0,
onclick1770257061732,
};
},
};