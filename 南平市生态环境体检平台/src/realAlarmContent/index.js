window.realAlarmContentComponent = {
template: 
`<div id="t-l-c-realAlarmContent" class="t-l-c-realAlarmContent" >` +
`<t-component id="t-component-3f9e.6d1636f5c" class="realAlarmContent-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName" :page-id="tComponentx0x0ComputedData.pageId" :page-code="tComponentx0x0ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-9c0b.c1f74dcf8" class="realAlarmContent-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode">` +
`</t-component>` +
`<t-date-picker id="t-date-picker-f414.3a989b7ec" class="realAlarmContent-t-date-picker-0-3"  :placeholder="tDatePickerx0x3ComputedData.placeholder" :start-placeholder="tDatePickerx0x3ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x3ComputedData.endPlaceholder" :type="tDatePickerx0x3ComputedData.type" :clearable="tDatePickerx0x3ComputedData.clearable" :range-separator="tDatePickerx0x3ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(global.airGlobalVariables.realTimeAlarm.dateValue, componentPropBindingMap?.['t-date-picker-f414.3a989b7ec']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x3ComputedData.separator" :readonly="tDatePickerx0x3ComputedData.readonly" :editable="tDatePickerx0x3ComputedData.editable" :c-style="tDatePickerx0x3ComputedData.cStyle" @date-change="ondateChange1764294836112">` +
`</t-date-picker>` +
`<t-component id="t-component-49c4.498b04c77" class="realAlarmContent-t-component-0-6"  :name="tComponentx0x6ComputedData.name" :c-style="tComponentx0x6ComputedData.cStyle" :src="tComponentx0x6ComputedData.src" :component-name="tComponentx0x6ComputedData.componentName" :page-id="tComponentx0x6ComputedData.pageId" :page-code="tComponentx0x6ComputedData.pageCode">` +
`</t-component>` +
`<t-tabs-base id="t-tabs-base-13c4.ae5d168bb" class="realAlarmContent-t-tabs-base-0-7"  :data="tTabsBasex0x7ComputedData.data" :space="tTabsBasex0x7ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.currentType, componentPropBindingMap?.['t-tabs-base-13c4.ae5d168bb']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x7ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x7ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x7ComputedData.alias" :c-style="tTabsBasex0x7ComputedData.cStyle" @tab-click="ontabClick1766373279462_0_0">` +
`</t-tabs-base>` +
`<t-text-unit v-if="state.currentType === 'auto'" id="t-text-unit-f35b.c556743c2" class="realAlarmContent-t-text-unit-0-8"  :c-style="tTextUnitx0x8ComputedData.cStyle" :content="replaceCssVariables(filterData(state.refreshTime, componentPropBindingMap?.['t-text-unit-f35b.c556743c2']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x8ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x8ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-image-base id="t-image-base-b991.dde902a68" class="realAlarmContent-t-image-base-0-9"  :src="tImageBasex0x9ComputedData.src" :fit="tImageBasex0x9ComputedData.fit" :c-style="tImageBasex0x9ComputedData.cStyle" @click="onclick1766392254927">` +
`</t-image-base>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-3f9e.6d1636f5c":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-9c0b.c1f74dcf8":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-date-picker-4b2a.657f95511":{"attributeName":"tDatePickerx0x2"},"t-date-picker-f414.3a989b7ec":{"attributeName":"tDatePickerx0x3","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-eddc.46b24b452":{"attributeName":"tSelectx0x4"},"t-component-f869.e7ce2b41a":{"attributeName":"tComponentx0x5"},"t-component-49c4.498b04c77":{"attributeName":"tComponentx0x6","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-tabs-base-13c4.ae5d168bb":{"attributeName":"tTabsBasex0x7","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-f35b.c556743c2":{"attributeName":"tTextUnitx0x8","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-image-base-b991.dde902a68":{"attributeName":"tImageBasex0x9","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}}};
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
   debouncedGetData: {},
   timeType: "minute",
   pointType: "",
   timeRef: "",
   refreshTime: 300,
   currentType: "manual",
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
            default: {"width":"410px","height":"280px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"61px","animationName":""},
            
            },
 default: { 
 
name:"radarWariningRealComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"280px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"61px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/radarWariningReal",
componentName:"radarWariningRealComponent",
pageId:"092862f2c96f4799bbc7bc34ef867e4f",
pageCode:"radarWariningReal", 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"410px","height":"486px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"751px"},
            
            },
 default: { 
 
name:"stationWarningRealComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"486px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"751px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/stationWarningReal",
componentName:"stationWarningRealComponent",
pageId:"82cc1b5ee57c4ffcb0ecf545b1cc29af",
pageCode:"stationWarningReal", 
 },
},
tDatePickerx0x3: {
defaultStyle: {
            default: {"width":"178px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimeminute",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"178px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","fontSize":"var(--business-text-size-12)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-12)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tComponentx0x6: {
defaultStyle: {
            default: {"width":"410px","height":"370px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"363px","animationName":""},
            
            },
 default: { 
 
name:"recentlyVideoWarningRealComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"370px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"363px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/recentlyVideoWarningReal",
componentName:"recentlyVideoWarningRealComponent",
pageId:"19a792bc0771444a8d0a6a70e86744ce",
pageCode:"recentlyVideoWarningReal", 
 },
},
tTabsBasex0x7: {
defaultStyle: {
            default: {"width":"140px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset"},
            
            },
 default: { 
 
data:[{"label":"手动刷新","value":"manual"},{"label":"自动刷新","value":"auto"}],
space:0,
selectedTabVal:"manual",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":"disabled"},
cStyle:{"wrapper":{"default":{"width":"140px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset"}},"itemWrapper":{"default":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","backgroundColor":"rgba(0, 61, 155, 0)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","width":"120px","height":"32px","fontSize":"var(--business-text-size-14)","lineHeight":"32px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","borderLeft":"1px solid rgba(0,61,155,0)","borderTop":"1px solid rgba(0,61,155,0)","borderRight":"1px solid rgba(0,61,155,0)","borderBottom":"1px solid rgba(0,61,155,0)","color":"var(--business-text-avianize)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},"active":{"background":"var(--business-tab-third-active-fill)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","backgroundColor":"rgba(3, 12, 52, 0)","borderLeft":"1px solid var(--business-tab-third-active-border)","borderTop":"1px solid var(--business-tab-third-active-border)","borderRight":"1px solid var(--business-tab-third-active-border)","borderBottom":"1px solid var(--business-tab-third-active-border)","box-shadow":"var(--business-tab-third-active-shadow) 0px 0px 18px 0px inset","color":"var(--business-tab-third-active-text)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","height":"32px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},"hover":{"backgroundColor":"rgba(0, 61, 155, 0)","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","borderLeft":"1px solid rgba(255,255,255,0)","borderTop":"1px solid rgba(255,255,255,0)","borderRight":"1px solid rgba(255,255,255,0)","borderBottom":"1px solid rgba(255,255,255,0)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","color":"var(--business-tab-third-active-border)"}}}, 
 },
},
tTextUnitx0x8: {
defaultStyle: {
            default: {"width":"50px","height":"20px","flexDirection":"row","justifyContent":"center","alignItems":"center","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"50px","height":"20px","flexDirection":"row","justifyContent":"center","alignItems":"center","animationName":""}},"text":{"default":{"fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","textAlign":"center","lineHeight":"var(--business-text-size-14)","letterSpacing":"0px","color":"var(--business-white)","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"width":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)","letterSpacing":"0px","textAlign":"center","color":"var(--business-white)","background":"unset","backgroundClip":"unset"}}},
content:300,
unit:"s",
showOverflowTooltip:true, 
 },
},
tImageBasex0x9: {
defaultStyle: {
            default: {"width":"20px","height":"20px","cursor":"pointer","animationName":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-05-06/e2068acfee6646b4b524f5411f6d49cf.svg)","-webkit-mask-position":"50% 50%","-webkit-mask-repeat":"no-repeat","-webkit-mask-size":"100% 100%","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","color":"","backgroundColor":"var(--business-white)"},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"20px","height":"20px","cursor":"pointer","animationName":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-05-06/e2068acfee6646b4b524f5411f6d49cf.svg)","-webkit-mask-position":"50% 50%","-webkit-mask-repeat":"no-repeat","-webkit-mask-size":"100% 100%","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","color":"","backgroundColor":"var(--business-white)"}}}, 
 },
},
});
const chengeRefreshType = () => {
// 手动刷新
state.refreshTime = 300
if (state.currentType === 'manual') {
  if(state.timeRef){
    clearInterval(state.timeRef)
  } 
} else if (state.currentType === 'auto') {
  // 自动刷新
  state.timeRef = setInterval(() => {
    if (state.refreshTime === 0) {
       // 调用最新时间接口
       apiRegistry.getRefreshTime.request();
       state.refreshTime = 300
    } else {
      state.refreshTime--
    }
  }, 1000)
}
};
const clearTimer = () => {
if (state.timeRef) {
  clearInterval(state.timeRef)
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
state.debouncedGetData();

rootData.rootSocket.emit(
  'message',
  {
    room: global.socketRoom,
    type: 'refreshXcNum',
    data: {},
  }
);
};
const ondateChange1762504901269_0_0 = (data) => {
// 执行自定义方法
setTimeValue(data);
};
const ondateChange1764294836112 = (data) => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'airGlobalVariables.realTimeAlarm.dateValue',
                    value:data,
                    data: {
                      airGlobalVariables:{realTimeAlarm:{dateValue: data}}
                    },
                  });
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "changeTime", // 消息名称
data: {"MONITORTIME":data}, // 发送的数据
});
// 执行自定义方法
sendTimeMes(false);
};
const onchange1764919025514_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.taskCode = value;
};
const ontabClick1766373279462_0_0 = (data) => {
// 设置变量值
state.currentType = data.value;
// 执行自定义方法
chengeRefreshType(data);
};
const onclick1766392254927 = () => {
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
                            setPageScale('t-l-c-realAlarmContent', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onBeforeUnmount(() => {
// 执行自定义方法
clearTimer();
});
// 执行自定义方法
initParams();
// 执行自定义方法
debounceData();
onMounted(() => {
setPageScale('t-l-c-realAlarmContent', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tDatePickerx0x3ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x3.default, componentState.tDatePickerx0x3?.[state.screenSize]));

 const tComponentx0x6ComputedData = computed(() => _.merge({}, componentState.tComponentx0x6.default, componentState.tComponentx0x6?.[state.screenSize]));

 const tTabsBasex0x7ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x7.default, componentState.tTabsBasex0x7?.[state.screenSize]));

 const tTextUnitx0x8ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x8.default, componentState.tTextUnitx0x8?.[state.screenSize]));

 const tImageBasex0x9ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x9.default, componentState.tImageBasex0x9?.[state.screenSize]));

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
tComponentx0x1ComputedData,
tDatePickerx0x3ComputedData,
tComponentx0x6ComputedData,
tTabsBasex0x7ComputedData,
tTextUnitx0x8ComputedData,
tImageBasex0x9ComputedData,
ondateChange1764294836112,
ontabClick1766373279462_0_0,
onclick1766392254927,
};
},
};