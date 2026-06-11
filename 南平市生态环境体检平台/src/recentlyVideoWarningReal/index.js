window.recentlyVideoWarningRealComponent = {
template: 
`<div id="t-l-c-recentlyVideoWarningReal" class="t-l-c-recentlyVideoWarningReal" >` +
`<t-component id="t-component-aa14.3ba955fbb" class="recentlyVideoWarningReal-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName">` +
`</t-component>` +
`<t-text-unit id="t-text-unit-a3c4.48c326f87" class="recentlyVideoWarningReal-t-text-unit-0-1"  :c-style="tTextUnitx0x1ComputedData.cStyle" :justify="tTextUnitx0x1ComputedData.justify" :align="tTextUnitx0x1ComputedData.align" :content="replaceCssVariables(filterData(state.title, componentPropBindingMap?.['t-text-unit-a3c4.48c326f87']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x1ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x1ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-select id="t-select-aa06.70e5fbb7f" class="recentlyVideoWarningReal-t-select-0-2"  :active-value="replaceCssVariables(filterData(state.alarmType, componentPropBindingMap?.['t-select-aa06.70e5fbb7f']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x2ComputedData.options" :alias="tSelectx0x2ComputedData.alias" :multiple="tSelectx0x2ComputedData.multiple" :placeholder="tSelectx0x2ComputedData.placeholder" :clearable="tSelectx0x2ComputedData.clearable" :disabled="tSelectx0x2ComputedData.disabled" :name="tSelectx0x2ComputedData.name" :autocomplete="tSelectx0x2ComputedData.autocomplete" :filterable="tSelectx0x2ComputedData.filterable" :no-match-text="tSelectx0x2ComputedData.no-match-text" :no-data-text="tSelectx0x2ComputedData.no-data-text" :c-style="tSelectx0x2ComputedData.cStyle" @change="onchange1766737799429">` +
`</t-select>` +
`<t-text-common id="t-text-common-54c0.2ab16d38f" class="recentlyVideoWarningReal-t-text-common-0-3"  :label="tTextCommonx0x3ComputedData.label" :editable="tTextCommonx0x3ComputedData.editable" :c-style="tTextCommonx0x3ComputedData.cStyle">` +
`</t-text-common>` +
`<t-table id="t-table-f4d9.66b63002d" class="recentlyVideoWarningReal-t-table-0-4"  :height="tTablex0x4ComputedData.height" :stripe="tTablex0x4ComputedData.stripe" :border="tTablex0x4ComputedData.border" :auto-scroll="tTablex0x4ComputedData.autoScroll" :speed="tTablex0x4ComputedData.speed" :columns="tTablex0x4ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-f4d9.66b63002d']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x4ComputedData.defaultSort" :c-style="tTablex0x4ComputedData.cStyle" @cell-click="oncellClick1762410432035_0_0">` +
`</t-table>` +
`<t-component v-if="state.isShowImg === true" id="t-component-b1d3.508f21263" class="recentlyVideoWarningReal-t-component-0-5"  :name="tComponentx0x5ComputedData.name" :loading="tComponentx0x5ComputedData.loading" :c-style="tComponentx0x5ComputedData.cStyle" :src="tComponentx0x5ComputedData.src" :component-name="tComponentx0x5ComputedData.componentName" :page-id="tComponentx0x5ComputedData.pageId" :page-code="tComponentx0x5ComputedData.pageCode">` +
`</t-component>` +
`<t-text-common id="t-text-common-69b7.54ad86cf2" class="recentlyVideoWarningReal-t-text-common-0-6"  :label="tTextCommonx0x6ComputedData.label" :editable="tTextCommonx0x6ComputedData.editable" :c-style="tTextCommonx0x6ComputedData.cStyle" @click="onclick1770097504743">` +
`</t-text-common>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-aa14.3ba955fbb":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-unit-a3c4.48c326f87":{"attributeName":"tTextUnitx0x1","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-select-aa06.70e5fbb7f":{"attributeName":"tSelectx0x2","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-54c0.2ab16d38f":{"attributeName":"tTextCommonx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-table-f4d9.66b63002d":{"attributeName":"tTablex0x4","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-component-b1d3.508f21263":{"attributeName":"tComponentx0x5","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-common-69b7.54ad86cf2":{"attributeName":"tTextCommonx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   title: "视频报警",
   endTime: "",
   startTime: "",
   ALARM_TIME: "",
   isShowImg: false,
   currentImgUrl: "",
   listData: [],
   alarmType: "",
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
            default: {"width":"230px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","position":"unset","left":"36px","top":"0px","lineHeight":"20px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"230px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","position":"unset","left":"36px","top":"0px","lineHeight":"20px","animationName":""}},"unit":{"default":{"fontSize":"var(--business-text-size-20)","fontFamily":"方正综艺","lineHeight":"32px"}},"text":{"default":{"lineHeight":"32px","fontSize":"var(--business-text-size-20)"}}},
justify:"flex-start",
align:"flex-end",
content:"视频报警",
unit:"",
showOverflowTooltip:true, 
 },
},
tSelectx0x2: {
defaultStyle: {
            default: {"width":"295px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},
            
            },
 default: { 
 
activeValue:"",
options:[{"value":"1","label":"烟花告警","disabled":false},{"value":"2","label":"城郊烟火告警","disabled":false}],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:true,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"295px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tTextCommonx0x3: {
defaultStyle: {
            default: {"width":"89px","height":"32px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"32px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"6px","top":"46px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"报警类型",
editable:false,
cStyle:{"wrapper":{"default":{"width":"89px","height":"32px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"32px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"6px","top":"46px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tTablex0x4: {
defaultStyle: {
            default: {"width":"409px","height":"270px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"268px",
stripe:true,
border:false,
autoScroll:"null",
speed:"6",
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"50px","type":"default","stateKey":"iconStatus"},{"label":"站点","type":"default","key":"DEVICE_NAME","stateKey":"","width":"auto","minWidth":"","align":"left","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)"}},"imageStyle":{"width":"auto","height":"100px"}},{"label":"报警时间","type":"default","key":"ALARM_TIME","stateKey":"","width":"120px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"var(--business-unit-icon)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"操作","type":"operation","key":"opt","stateKey":"","width":"80px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"var(--business-unit-icon)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"operationList":[{"name":"查看","id":"view","fontStyle":{"color":"rgba(5,245,251,1)"}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"409px","height":"270px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tComponentx0x5: {
defaultStyle: {
            default: {"width":"400px","height":"350px","margin":"0 auto","position":"unset","left":"510px","top":"-1px"},
            
            },
 default: { 
 
name:"previewImgComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"400px","height":"350px","margin":"0 auto","position":"unset","left":"510px","top":"-1px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/previewImg",
componentName:"previewImgComponent",
pageId:"7716d8d210874ec89fcc2e217a3c07f7",
pageCode:"previewImg", 
 },
},
tTextCommonx0x6: {
defaultStyle: {
            default: {"width":"88px","height":"32px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"32px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"308px","top":"0px","background":"unset","backgroundClip":"unset","cursor":"pointer"},
            
            },
 default: { 
 
label:"告警明细",
editable:false,
cStyle:{"wrapper":{"default":{"width":"88px","height":"32px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"32px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"308px","top":"0px","background":"unset","backgroundClip":"unset","cursor":"pointer"}}}, 
 },
},
});
const handleTableClick = (row,column) => {
const { LONGITUDE, LATITUDE } = row;
if (column.label === '定位') {
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'gotoPoint',  // 消息类型名称
      data: {
        longitude: LONGITUDE,
        latitude: LATITUDE
      }
    }
  );
} else if (column.label === '操作') {
  global.featureData = row;
  rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'createDialog',  // 消息类型名称
      data: {
        "params": {               // 消息内容，对象格式
          'title': '视频报警图片查看',
          'maxWidth': '1000px',
          'maxHeight': '690px',
          'minWidth': '1000px',
          'minHeight': '690px',
          'contentComName': 'videoWarningCarouselPopComponent',
          'hiddenScaleButton': true,
        }
      }
    }
  );
} else if (column.label === '告警') {
  // state.currentImgUrl = row.src;
  // state.isShowImg = true;
}
};
const provideState = () => {
provide('recentlyVideoWarningReal',state)
};
const watchChangeTime = () => {
watch(
  [
    () => global.airGlobalVariables.realTimeAlarm.dateValue,
    () => global.warningRightDataRange.value,
  ],
  ([dateValue, rangeValue]) => {
    state.timeStr = Date.now()
    // 实时告警
    if (global.airGlobalVariables.fireworks.selectedTab === 'realAlarmContentComponent') {
      state.title = '近1小时视频报警'
      if (dateValue) {
        state.startTime = getPrevTime(`${dateValue}:00`, 'minute').slice(0, 16);
        state.endTime = dateValue
      }
    } else if (global.airGlobalVariables.fireworks.selectedTab === 'earlyWarningForecastContentComponent') {
      // 报警记录
      state.title = '视频报警'
      if (Array.isArray(rangeValue) && rangeValue.length === 2) {
        state.startTime = rangeValue[0];
        state.endTime = rangeValue[1];
      }
    }
    apiRegistry.getListData.request();
  },
  { immediate: true, deep: true }
);

};
const openDetailDialog = () => {
  rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'createDialog',  // 消息类型名称
      data: {
        "params": {               // 消息内容，对象格式
          'title': '告警明细',
          'maxWidth': '1800px',
          'maxHeight': '920px',
          'minWidth': '1800px',
          'minHeight': '920px',
          'contentComName': 'videoWarningDetaillPopComponent',
          'hiddenScaleButton': true,
        }
      }
    }
  );
};
const onchange1766737799429 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.alarmType = value;
// 事件交互-请求调用接口
apiRegistry.getListData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const oncellClick1762410432035_0_0 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(row,column);
};
const onclick1770097504743 = () => {
// 执行自定义方法
openDetailDialog();
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
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"ALARM_SCENE":"","ALARM_TYPE":"state.alarmType","interfaceId":"b03546b93ab1da324a39efe6562207e6"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"ALARM_SCENE":"","ALARM_TYPE":state.alarmType,"interfaceId":"b03546b93ab1da324a39efe6562207e6"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"ALARM_SCENE":"","ALARM_TYPE":state.alarmType,"interfaceId":"b03546b93ab1da324a39efe6562207e6"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  state.ALARM_TIME = res.data.data.alarm_time;
} else {
  state.ALARM_TIME = ''
}
apiRegistry.getListData.request();
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.ALARM_TIME = ''
apiRegistry.getListData.request();
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"END_TIME":"state.endTime","START_TIME":"state.startTime","ALARM_TYPE":"state.alarmType","pageNum":1,"pageSize":"100001","interfaceId":"1d97c9b047dcbb57dd27af91ce16271e"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"END_TIME":state.endTime,"START_TIME":state.startTime,"ALARM_TYPE":state.alarmType,"pageNum":1,"pageSize":"100001","interfaceId":"1d97c9b047dcbb57dd27af91ce16271e"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"END_TIME":state.endTime,"START_TIME":state.startTime,"ALARM_TYPE":state.alarmType,"pageNum":1,"pageSize":"100001","interfaceId":"1d97c9b047dcbb57dd27af91ce16271e"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  state.listData = res?.data?.data.map(item => {
    return {
      ...item,
      opt: 'view',
      src: '/lego-generated-apps/lego_file/res/2025-11-26/1330a93e23734c63b7432090d22c2deb.png'
    }
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
};
 function handleWindowResize() {
                            setPageScale('t-l-c-recentlyVideoWarningReal', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
provideState();
// 执行自定义方法
watchChangeTime();
onMounted(() => {
setPageScale('t-l-c-recentlyVideoWarningReal', global.appScaleMode, 'normal');
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

 const tSelectx0x2ComputedData = computed(() => _.merge({}, componentState.tSelectx0x2.default, componentState.tSelectx0x2?.[state.screenSize]));

 const tTextCommonx0x3ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x3.default, componentState.tTextCommonx0x3?.[state.screenSize]));

 const tTablex0x4ComputedData = computed(() => _.merge({}, componentState.tTablex0x4.default, componentState.tTablex0x4?.[state.screenSize]));

 const tComponentx0x5ComputedData = computed(() => _.merge({}, componentState.tComponentx0x5.default, componentState.tComponentx0x5?.[state.screenSize]));

 const tTextCommonx0x6ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x6.default, componentState.tTextCommonx0x6?.[state.screenSize]));

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
tSelectx0x2ComputedData,
tTextCommonx0x3ComputedData,
tTablex0x4ComputedData,
tComponentx0x5ComputedData,
tTextCommonx0x6ComputedData,
onchange1766737799429,
oncellClick1762410432035_0_0,
onclick1770097504743,
};
},
};