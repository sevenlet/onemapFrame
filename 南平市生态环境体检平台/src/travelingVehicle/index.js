window.travelingVehicleComponent = {
template: 
`<div id="t-l-c-travelingVehicle" class="t-l-c-travelingVehicle" >` +
`<t-component id="t-component-aa14.3ba955fbb" class="travelingVehicle-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName">` +
`</t-component>` +
`<t-text-unit id="t-text-unit-a3c4.48c326f87" class="travelingVehicle-t-text-unit-0-1"  :c-style="tTextUnitx0x1ComputedData.cStyle" :justify="tTextUnitx0x1ComputedData.justify" :align="tTextUnitx0x1ComputedData.align" :content="tTextUnitx0x1ComputedData.content" :unit="tTextUnitx0x1ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x1ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-date-picker id="t-date-picker-d082.4300cb4ab" class="travelingVehicle-t-date-picker-0-2"  :placeholder="tDatePickerx0x2ComputedData.placeholder" :start-placeholder="tDatePickerx0x2ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x2ComputedData.endPlaceholder" :type="tDatePickerx0x2ComputedData.type" :clearable="tDatePickerx0x2ComputedData.clearable" :range-separator="tDatePickerx0x2ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.dateValue, componentPropBindingMap?.['t-date-picker-d082.4300cb4ab']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x2ComputedData.separator" :readonly="tDatePickerx0x2ComputedData.readonly" :editable="tDatePickerx0x2ComputedData.editable" :c-style="tDatePickerx0x2ComputedData.cStyle" :is-disabled-front="tDatePickerx0x2ComputedData.isDisabledFront" :disabled-date="tDatePickerx0x2ComputedData.disabledDate" @date-change="ondateChange1765522754544">` +
`</t-date-picker>` +
`<t-component id="t-component-27a2.33baeecd3" class="travelingVehicle-t-component-0-4"  :name="tComponentx0x4ComputedData.name" :loading="tComponentx0x4ComputedData.loading" :c-style="tComponentx0x4ComputedData.cStyle" :src="tComponentx0x4ComputedData.src" :component-name="tComponentx0x4ComputedData.componentName" :page-id="tComponentx0x4ComputedData.pageId" :page-code="tComponentx0x4ComputedData.pageCode">` +
`</t-component>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-aa14.3ba955fbb":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-unit-a3c4.48c326f87":{"attributeName":"tTextUnitx0x1","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-date-picker-d082.4300cb4ab":{"attributeName":"tDatePickerx0x2","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-table-80e0.6d181a57a":{"attributeName":"tTablex0x3"},"t-component-27a2.33baeecd3":{"attributeName":"tComponentx0x4","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}}};
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
   dateValue: "",
   endTime: "",
   startTime: "",
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
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"0px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/71ed927f19ff41e78116c906842de342_19/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextUnitx0x1: {
defaultStyle: {
            default: {"width":"261px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","position":"unset","left":"35px","top":"6px","lineHeight":"20px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"261px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","position":"unset","left":"35px","top":"6px","lineHeight":"20px","animationName":""}},"unit":{"default":{"fontSize":"17px","fontFamily":"方正综艺","lineHeight":"20px"}},"text":{"default":{"lineHeight":"20px","fontSize":"var(--business-text-size-16)"}}},
justify:"flex-start",
align:"flex-end",
content:"走航车点位",
unit:"",
showOverflowTooltip:true, 
 },
},
tDatePickerx0x2: {
defaultStyle: {
            default: {"width":"409px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","top":"46px","left":"1px"},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerangehour",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"409px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","top":"46px","left":"1px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important","lineHeight":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-white) !important","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tComponentx0x4: {
defaultStyle: {
            default: {"width":"410px","height":"760px","margin":"0 auto","position":"unset","left":"0px","top":"95px"},
            
            },
 default: { 
 
name:"travelingVehicleListComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"410px","height":"760px","margin":"0 auto","position":"unset","left":"0px","top":"95px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/travelingVehicleList",
componentName:"travelingVehicleListComponent",
pageId:"dbb7b8be58e14e7e9c096dfccf2b1154",
pageCode:"travelingVehicleList", 
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
const handleChangeTime = (data) => {
state.startTime = data[0]
state.endTime = data[1]

};
const setProvider = () => {
provide('zhcListParams', computed(() => state));
};
const ondateChange1735010317720 = (data) => {
// 执行自定义方法
setTimeValue(data);
// 事件交互-请求调用接口
apiRegistry.getLineData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const oncellClick1765100518646 = (row,column,cell,event) => {
// 执行自定义方法
handleClickTable(cell,column,row);
};
const ondateChange1765522754544 = (data) => {
// 设置变量值
state.dateValue = data;
// 执行自定义方法
handleChangeTime(data);
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "updateMobileMonitoringTrajectoryTime", // 消息名称
data: {"endTime":state.endTime,"startTime":state.startTime}, // 发送的数据
});
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getLatestTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"region_path":"global.regionaQuery.regionCode","interfaceId":"f25a1bf75d91a0c0d64678ade1539b39"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"region_path":global.regionaQuery.regionCode,"interfaceId":"f25a1bf75d91a0c0d64678ade1539b39"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"region_path":global.regionaQuery.regionCode,"interfaceId":"f25a1bf75d91a0c0d64678ade1539b39"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.startTime = data.max_start_time
  state.endTime = data.max_end_time
  state.dateValue = [state.startTime, state.endTime]
} else {
  state.startTime = ''
  state.endTime = ''
  state.dateValue = []
}

// 发送消息给地图
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'updateMobileMonitoringTrajectoryTime',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      'startTime': state.startTime,
      'endTime': state.endTime
    }
  }
);
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
watch(() => [global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getLatestTime', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-travelingVehicle', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setProvider();
onMounted(() => {
setPageScale('t-l-c-travelingVehicle', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextUnitx0x1ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x1.default, componentState.tTextUnitx0x1?.[state.screenSize]));

 const tDatePickerx0x2ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x2.default, componentState.tDatePickerx0x2?.[state.screenSize]));

 const tComponentx0x4ComputedData = computed(() => _.merge({}, componentState.tComponentx0x4.default, componentState.tComponentx0x4?.[state.screenSize]));

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
tTextUnitx0x1ComputedData,
tDatePickerx0x2ComputedData,
tComponentx0x4ComputedData,
ondateChange1765522754544,
};
},
};