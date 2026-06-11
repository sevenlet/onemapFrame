window.droneEntryComponent = {
template: 
`<div id="t-l-c-droneEntry" class="t-l-c-droneEntry" >` +
`<t-component id="t-component-5c87.a35bbde46" class="droneEntry-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :loading="tComponentx0x1ComputedData.loading" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode">` +
`</t-component>` +
`<t-text-unit id="t-text-unit-9dee.e75bc54ed" class="droneEntry-t-text-unit-0-2"  :c-style="tTextUnitx0x2ComputedData.cStyle" :content="tTextUnitx0x2ComputedData.content" :unit="tTextUnitx0x2ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x2ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-date-picker id="t-date-picker-2536.607022e24" class="droneEntry-t-date-picker-0-3"  :placeholder="tDatePickerx0x3ComputedData.placeholder" :start-placeholder="tDatePickerx0x3ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x3ComputedData.endPlaceholder" :type="tDatePickerx0x3ComputedData.type" :clearable="tDatePickerx0x3ComputedData.clearable" :range-separator="tDatePickerx0x3ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.dateValue, componentPropBindingMap?.['t-date-picker-2536.607022e24']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x3ComputedData.separator" :readonly="tDatePickerx0x3ComputedData.readonly" :editable="tDatePickerx0x3ComputedData.editable" :c-style="tDatePickerx0x3ComputedData.cStyle" @date-change="ondateChange1765507445770">` +
`</t-date-picker>` +
`<t-select id="t-select-3dc2.f403b3be6" class="droneEntry-t-select-0-4"  :active-value="replaceCssVariables(filterData(state.type, componentPropBindingMap?.['t-select-3dc2.f403b3be6']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x4ComputedData.options" :alias="tSelectx0x4ComputedData.alias" :multiple="tSelectx0x4ComputedData.multiple" :placeholder="tSelectx0x4ComputedData.placeholder" :clearable="tSelectx0x4ComputedData.clearable" :disabled="tSelectx0x4ComputedData.disabled" :name="tSelectx0x4ComputedData.name" :autocomplete="tSelectx0x4ComputedData.autocomplete" :filterable="tSelectx0x4ComputedData.filterable" :no-match-text="tSelectx0x4ComputedData.no-match-text" :no-data-text="tSelectx0x4ComputedData.no-data-text" :c-style="tSelectx0x4ComputedData.cStyle" :scrollbar-thumb-color="tSelectx0x4ComputedData.scrollbarThumbColor" :scrollbar-track-color="tSelectx0x4ComputedData.scrollbarTrackColor" :scrollbar-width="tSelectx0x4ComputedData.scrollbarWidth" @change="onchange1765506647221">` +
`</t-select>` +
`<t-text-common id="t-text-common-c320.347683459" class="droneEntry-t-text-common-0-5"  :label="tTextCommonx0x5ComputedData.label" :editable="tTextCommonx0x5ComputedData.editable" :c-style="tTextCommonx0x5ComputedData.cStyle">` +
`</t-text-common>` +
`<t-component id="t-component-16ca.09cd7189a" class="droneEntry-t-component-0-6"  :name="tComponentx0x6ComputedData.name" :loading="tComponentx0x6ComputedData.loading" :c-style="tComponentx0x6ComputedData.cStyle" :src="tComponentx0x6ComputedData.src" :component-name="tComponentx0x6ComputedData.componentName" :page-id="tComponentx0x6ComputedData.pageId" :page-code="tComponentx0x6ComputedData.pageCode">` +
`</t-component>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-table-c799.5f717c05a":{"attributeName":"tTablex0x0"},"t-component-5c87.a35bbde46":{"attributeName":"tComponentx0x1","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-unit-9dee.e75bc54ed":{"attributeName":"tTextUnitx0x2","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-date-picker-2536.607022e24":{"attributeName":"tDatePickerx0x3","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-3dc2.f403b3be6":{"attributeName":"tSelectx0x4","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]},"scrollbarThumbColor":{"filters":[]},"scrollbarTrackColor":{"filters":[]},"scrollbarWidth":{"filters":[]}},"t-text-common-c320.347683459":{"attributeName":"tTextCommonx0x5","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-component-16ca.09cd7189a":{"attributeName":"tComponentx0x6","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}}};
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
   selectedType: "",
   type: "公园巡查、小区巡查",
   endTime: "",
   startTime: "",
   dateValue: "",
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
tComponentx0x1: {
defaultStyle: {
            default: {"width":"401px","height":"33px","margin":"0 auto","position":"unset","left":"25px","top":"22px"},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"401px","height":"33px","margin":"0 auto","position":"unset","left":"25px","top":"22px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent",
pageId:"11294a0cd1654489a15355ed663e73ad_6",
pageCode:"titleFirstBg", 
 },
},
tTextUnitx0x2: {
defaultStyle: {
            default: {"width":"282px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","position":"unset","left":"63px","top":"28px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"282px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","position":"unset","left":"63px","top":"28px"}},"unit":{"default":{"fontSize":"17px","fontFamily":"方正综艺","lineHeight":"20px"}},"text":{"default":{"lineHeight":"20px","fontSize":"var(--business-text-size-16)"}}},
content:"无人机视频",
unit:"",
showOverflowTooltip:true, 
 },
},
tDatePickerx0x3: {
defaultStyle: {
            default: {"width":"393px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","top":"72px","left":"28px"},
            
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
cStyle:{"wrapper":{"default":{"width":"393px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","top":"72px","left":"28px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important","lineHeight":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-white) !important","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}}, 
 },
},
tSelectx0x4: {
defaultStyle: {
            default: {"width":"324px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","top":"118px","left":"95px"},
            
            },
 default: { 
 
activeValue:"公园巡查、小区巡查",
options:[{"label":"公园巡查、小区巡查","value":"公园巡查、小区巡查","disabled":false},{"label":"公园巡查","value":"公园","disabled":false},{"label":"小区巡查","value":"小区","disabled":false}],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"324px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","top":"118px","left":"95px"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}},
scrollbarThumbColor:"rgb(193,193,193)",
scrollbarTrackColor:"rgb(241,241,241)",
scrollbarWidth:"6px", 
 },
},
tTextCommonx0x5: {
defaultStyle: {
            default: {"width":"65px","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"27px","top":"124px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"类型",
editable:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--text-size-14)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"27px","top":"124px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tComponentx0x6: {
defaultStyle: {
            default: {"width":"394px","height":"584px","margin":"0 auto","position":"unset","left":"26px","top":"166px"},
            
            },
 default: { 
 
name:"droneEntryListComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"394px","height":"584px","margin":"0 auto","position":"unset","left":"26px","top":"166px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/droneEntryList",
componentName:"droneEntryListComponent",
pageId:"21d860709c914063961c44f0a42783d2",
pageCode:"droneEntryList", 
 },
},
});
const gotoMapLocation = (row,column) => {
// 点击定位
if (["定位"].includes(column.label)) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: "gotoPoint",
    data: {
      "longitude": row.longitude,
      "latitude": row.latitude,
    }
  });
}
// 点击视频，打开弹窗
if (["视频"].includes(column.label)) {
  global.businessDialog.dialogName = 'droneDialogComponent'
  global.businessDialog.dialogParmas = row
}

};
const handleSelect = () => {
if(state.type === '公园巡查、小区巡查'){
  state.selectedType = ''
}else{
  state.selectedType = state.type
}
};
const handleChangeTime = (data) => {
state.startTime = data[0]
state.endTime = data[1]
};
const setProvider = () => {
provide('wrjListParams', computed(() => state));
};
const oncellClick1764838608814_0_0 = (row,column,cell,event) => {
// 执行自定义方法
gotoMapLocation(row,column);
};
const onchange1765506647221 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.type = value;
// 执行自定义方法
handleSelect();
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "updateDroneStatus", // 消息名称
data: {"job_type":state.selectedType,"END_TIME":state.endTime,"START_TIME":state.startTime}, // 发送的数据
});
};
const ondateChange1765507445770 = (data) => {
// 设置变量值
state.dateValue = data;
// 执行自定义方法
handleChangeTime(data);
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "updateDroneStatus", // 消息名称
data: {"job_type":state.selectedType,"END_TIME":state.endTime,"START_TIME":state.startTime}, // 发送的数据
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"interfaceId":"77bf7c2ceeac0065058bf0f6050e2901"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"77bf7c2ceeac0065058bf0f6050e2901"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"interfaceId":"77bf7c2ceeac0065058bf0f6050e2901"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  const endTime = data[0].job_time + '00:00'
  const startTime = getPrevTime(endTime, 'day')
  state.startTime = startTime.slice(0,13)
  state.endTime = endTime.slice(0,13)
  state.dateValue = [state.startTime,state.endTime]
}else{
   state.dateValue = []
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"job_type":"state.selectedType","END_TIME":"state.endTime","START_TIME":"state.startTime","interfaceId":"7849b16612742e8f21ee0fb5c94acd06"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"job_type":state.selectedType,"END_TIME":state.endTime,"START_TIME":state.startTime,"interfaceId":"7849b16612742e8f21ee0fb5c94acd06"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"job_type":state.selectedType,"END_TIME":state.endTime,"START_TIME":state.startTime,"interfaceId":"7849b16612742e8f21ee0fb5c94acd06"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.listData = data
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
                            setPageScale('t-l-c-droneEntry', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setProvider();
onMounted(() => {
setPageScale('t-l-c-droneEntry', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tTextUnitx0x2ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x2.default, componentState.tTextUnitx0x2?.[state.screenSize]));

 const tDatePickerx0x3ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x3.default, componentState.tDatePickerx0x3?.[state.screenSize]));

 const tSelectx0x4ComputedData = computed(() => _.merge({}, componentState.tSelectx0x4.default, componentState.tSelectx0x4?.[state.screenSize]));

 const tTextCommonx0x5ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x5.default, componentState.tTextCommonx0x5?.[state.screenSize]));

 const tComponentx0x6ComputedData = computed(() => _.merge({}, componentState.tComponentx0x6.default, componentState.tComponentx0x6?.[state.screenSize]));

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
tComponentx0x1ComputedData,
tTextUnitx0x2ComputedData,
tDatePickerx0x3ComputedData,
tSelectx0x4ComputedData,
tTextCommonx0x5ComputedData,
tComponentx0x6ComputedData,
ondateChange1765507445770,
onchange1765506647221,
};
},
};