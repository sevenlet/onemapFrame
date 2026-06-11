window.videoWarningDetaillPopComponent = {
template: 
`<div id="t-l-c-videoWarningDetaillPop" class="t-l-c-videoWarningDetaillPop" >` +
`<t-component id="t-component-12a3.d23a23c36" class="videoWarningDetaillPop-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :loading="tComponentx0x0ComputedData.loading" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName" :page-id="tComponentx0x0ComputedData.pageId" :page-code="tComponentx0x0ComputedData.pageCode">` +
`</t-component>` +
`<t-date-picker id="t-date-picker-5a41.4604ad2bf" class="videoWarningDetaillPop-t-date-picker-0-1"  :placeholder="tDatePickerx0x1ComputedData.placeholder" :start-placeholder="tDatePickerx0x1ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x1ComputedData.endPlaceholder" :type="tDatePickerx0x1ComputedData.type" :clearable="tDatePickerx0x1ComputedData.clearable" :range-separator="tDatePickerx0x1ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeArr, componentPropBindingMap?.['t-date-picker-5a41.4604ad2bf']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x1ComputedData.separator" :readonly="tDatePickerx0x1ComputedData.readonly" :editable="tDatePickerx0x1ComputedData.editable" :c-style="tDatePickerx0x1ComputedData.cStyle" @date-change="ondateChange1770103355690">` +
`</t-date-picker>` +
`<t-select id="t-select-e423.ae7d21ebc" class="videoWarningDetaillPop-t-select-0-2"  :active-value="replaceCssVariables(filterData(state.activePoint, componentPropBindingMap?.['t-select-e423.ae7d21ebc']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.pointDict, componentPropBindingMap?.['t-select-e423.ae7d21ebc']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x2ComputedData.alias" :multiple="tSelectx0x2ComputedData.multiple" :placeholder="tSelectx0x2ComputedData.placeholder" :clearable="tSelectx0x2ComputedData.clearable" :disabled="tSelectx0x2ComputedData.disabled" :name="tSelectx0x2ComputedData.name" :autocomplete="tSelectx0x2ComputedData.autocomplete" :filterable="tSelectx0x2ComputedData.filterable" :no-match-text="tSelectx0x2ComputedData.no-match-text" :no-data-text="tSelectx0x2ComputedData.no-data-text" :c-style="tSelectx0x2ComputedData.cStyle" @change="onchange1770100341213">` +
`</t-select>` +
`<t-pagination-base v-if="state.page.total !== 0" id="t-pagination-base-7219.1d0afb868" class="videoWarningDetaillPop-t-pagination-base-0-3"  :total="replaceCssVariables(filterData(state.page.total, componentPropBindingMap?.['t-pagination-base-7219.1d0afb868']['total'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x3ComputedData.small" :page-size="replaceCssVariables(filterData(state.page.pageSize, componentPropBindingMap?.['t-pagination-base-7219.1d0afb868']['pageSize'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :pager-count="tPaginationBasex0x3ComputedData.pagerCount" :current-page="replaceCssVariables(filterData(state.page.pageNum, componentPropBindingMap?.['t-pagination-base-7219.1d0afb868']['currentPage'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x3ComputedData.layout" :page-sizes="tPaginationBasex0x3ComputedData.pageSizes" :disabled="tPaginationBasex0x3ComputedData.disabled" :c-style="tPaginationBasex0x3ComputedData.cStyle" @size-change="onsizeChange1770110265782" @current-change="oncurrentChange1770110289667">` +
`</t-pagination-base>` +
`<t-text-common id="t-text-common-a54c.975a4d611" class="videoWarningDetaillPop-t-text-common-0-4"  :label="tTextCommonx0x4ComputedData.label" :editable="tTextCommonx0x4ComputedData.editable" :c-style="tTextCommonx0x4ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-5690.964c17e94" class="videoWarningDetaillPop-t-text-common-0-5"  :label="tTextCommonx0x5ComputedData.label" :editable="tTextCommonx0x5ComputedData.editable" :c-style="tTextCommonx0x5ComputedData.cStyle">` +
`</t-text-common>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-12a3.d23a23c36":{"attributeName":"tComponentx0x0","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-date-picker-5a41.4604ad2bf":{"attributeName":"tDatePickerx0x1","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-e423.ae7d21ebc":{"attributeName":"tSelectx0x2","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-pagination-base-7219.1d0afb868":{"attributeName":"tPaginationBasex0x3","total":{"filters":[]},"small":{"filters":[]},"pageSize":{"filters":[]},"pagerCount":{"filters":[]},"currentPage":{"filters":[]},"layout":{"filters":[]},"pageSizes":{"filters":[]},"disabled":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-a54c.975a4d611":{"attributeName":"tTextCommonx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-5690.964c17e94":{"attributeName":"tTextCommonx0x5","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   page: {"pageSize":10,"pageNum":1,"total":0},
   data: [],
   startTime: "",
   endTime: "",
   timeArr: [],
   activePoint: "",
   pointDict: [],
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
            default: {"width":"1746px","height":"759px","margin":"0 auto","position":"unset","left":"25px","top":"59px"},
            
            },
 default: { 
 
name:"videoWarningPhotoListComponent",
loading:false,
cStyle:{"wrapper":{"default":{"width":"1746px","height":"759px","margin":"0 auto","position":"unset","left":"25px","top":"59px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/videoWarningPhotoList",
componentName:"videoWarningPhotoListComponent",
pageId:"61b88689759d4191b6be362e0253d929",
pageCode:"videoWarningPhotoList", 
 },
},
tDatePickerx0x1: {
defaultStyle: {
            default: {"width":"308px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","position":"unset","left":"539px","top":"11px"},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerangehour",
clearable:false,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"308px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","position":"unset","left":"539px","top":"11px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tSelectx0x2: {
defaultStyle: {
            default: {"width":"295px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","left":"126px","top":"11px","position":"unset"},
            
            },
 default: { 
 
activeValue:"",
options:[],
alias:{"label":"device_name","value":"pkid","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:true,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"295px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","left":"126px","top":"11px","position":"unset"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"color":"var(--t-white)"}}}, 
 },
},
tPaginationBasex0x3: {
defaultStyle: {
            default: {"width":"963px","height":"31px","position":"unset","left":"809px","top":"817px","color":"","animationName":"","display":"flex","justifyContent":"flex-end","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingTop":"unset","paddingBottom":"unset","marginTop":"10px","alignItems":"center","fontSize":"20px"},
            
            },
 default: { 
 
total:0,
small:false,
pageSize:10,
pagerCount:5,
currentPage:1,
layout:" prev, pager, next,total,sizes,jumper",
pageSizes:[5,10,20,30,40,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"963px","height":"31px","position":"unset","left":"809px","top":"817px","color":"","animationName":"","display":"flex","justifyContent":"flex-end","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","paddingTop":"unset","paddingBottom":"unset","marginTop":"10px","alignItems":"center","fontSize":"20px"}},"pagerItem":{"default":{"color":"var(--t-color-text-green)","fontSize":"20px","lineHeight":"32px","borderLeft":"1px none #366B92","borderTop":"1px none #366B92","borderRight":"1px none #366B92","borderBottom":"1px none #366B92","marginLeft":"0px","marginRight":"5px","backgroundColor":"var(--business-select-item-bg)"},"active":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundColor":"#6FAED9","color":"#FFFFFF","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""},"hover":{"borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","color":"#FFFFFF","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"#6FAED9"}},"pager":{"default":{"borderLeft":"1px none var(--theme-btn-default)","borderTop":"1px none var(--theme-btn-default)","borderRight":"1px none var(--theme-btn-default)","borderBottom":"1px none var(--theme-btn-default)","color":"var(--t-color-text-green)","marginLeft":"0px","marginRight":"0px","backgroundColor":"#0D4895","fontSize":"20px"},"hover":{"color":"#FFFFFF","borderLeft":"1px none var(--theme-btn-hover)","borderTop":"1px none var(--theme-btn-hover)","borderRight":"1px none var(--theme-btn-hover)","borderBottom":"1px none var(--theme-btn-hover)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","backgroundColor":"var(--t-button-bg)"}},"more":{"default":{"color":"var(--t-color-text-green)","fontSize":"20px"},"hover":{"color":"#366B92","backgroundColor":""}},"total":{"default":{"color":"var(--t-color-text-green)","paddingRight":"0px","paddingLeft":"0px","fontSize":"20px","marginRight":"0px","marginLeft":"20px","display":"flex"}},"sizesWrapper":{"default":{"color":"var(--t-color-text-green)","fontSize":"20px","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","marginRight":"10px","marginLeft":"10px"}},"sizesInput":{"default":{"color":"var(--common-white08)","borderLeft":"1px solid var(--common-white08)","borderTop":"1px solid var(--common-white08)","borderRight":"1px solid var(--common-white08)","borderBottom":"1px solid var(--common-white08)","backgroundColor":"","fontSize":"20px"},"hover":{"borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"jumpWrapper":{"default":{"color":"var(--t-color-text-green)","backgroundColor":"","fontSize":"20px"}},"jumpInput":{"default":{"color":"var(--t-color-text-green)","backgroundColor":"var(--business-select-item-bg)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","fontSize":"20px"},"hover":{"color":"var(--common-white1)","borderLeft":"1px solid var(--theme-btn-hover)","borderTop":"1px solid var(--theme-btn-hover)","borderRight":"1px solid var(--theme-btn-hover)","borderBottom":"1px solid var(--theme-btn-hover)"}},"sizesDropdownWrapper":{"default":{"backgroundColor":"","color":"rgba(255, 255, 255, 0.9)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","background":"var(--t-body-background)","fillType":"color"}},"sizesDropdownItem":{"default":{"color":"rgba(255, 255, 255, 0.9)","backgroundColor":"","borderLeft":"1px none #00828A","borderTop":"1px none #00828A","borderRight":"1px none #00828A","borderBottom":"1px none #00828A","fontSize":"20px"},"active":{"backgroundColor":"var(--business-select-item-bg)","color":"var(--business-text-hover)"},"hover":{"color":"var(--business-text-hover)","backgroundColor":"var(--business-select-item-bg)"}}}, 
 },
},
tTextCommonx0x4: {
defaultStyle: {
            default: {"width":"89px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"443px","top":"16px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"报警时间",
editable:false,
cStyle:{"wrapper":{"default":{"width":"89px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"443px","top":"16px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tTextCommonx0x5: {
defaultStyle: {
            default: {"width":"89px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"19px","top":"18px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"报警设备名称",
editable:false,
cStyle:{"wrapper":{"default":{"width":"89px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"19px","top":"18px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
});
const initParams = () => {
const dateValue = global.airGlobalVariables.realTimeAlarm.dateValue;
state.endTime = dateValue;
const newDate = new Date(dateValue);
// 往前推一小时
state.startTime = dateFormat(newDate.setHours(newDate.getHours() - 1),'YYYY-MM-DD hh:mm');
state.timeArr = [state.startTime,state.endTime]


apiRegistry.getData.request();
};
const handleTimeChange = (data) => {
state.timeArr = data
const [startTime,endTime] = data
state.startTime = startTime
state.endTime = endTime
};
const setProvide = () => {
provide('videoWarningDetaillPopState',state)

};
const onchange1770100341213 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.activePoint = value;
// 事件交互-请求调用接口
apiRegistry.getData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const onsizeChange1770110265782 = (pageSize) => {
// 设置变量值
state.page.pageSize = pageSize;
};
const oncurrentChange1770110289667 = (currentPage) => {
// 设置变量值
state.page.pageNum = currentPage;
};
const ondateChange1770103355690 = (data) => {
// 执行自定义方法
handleTimeChange(data);
// 事件交互-请求调用接口
apiRegistry.getData.request().then((res) => {
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
 getData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.businessServiceBaseUrl","params":{"pageNum":"state.page.pageNum","pageSize":"state.page.pageSize","ALARMID":"","END_TIME":"state.endTime","START_TIME":"state.startTime","PKID":"state.activePoint","ALARM_SCENE":"","ALARM_TIME":"","ALARM_TYPE":"","interfaceId":"1d97c9b047dcbb57dd27af91ce16271e"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.businessServiceBaseUrl,"params":{"pageNum":state.page.pageNum,"pageSize":state.page.pageSize,"ALARMID":"","END_TIME":state.endTime,"START_TIME":state.startTime,"PKID":state.activePoint,"ALARM_SCENE":"","ALARM_TIME":"","ALARM_TYPE":"","interfaceId":"1d97c9b047dcbb57dd27af91ce16271e"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.businessServiceBaseUrl-global.serviceBasePath',  {"pageNum":state.page.pageNum,"pageSize":state.page.pageSize,"ALARMID":"","END_TIME":state.endTime,"START_TIME":state.startTime,"PKID":state.activePoint,"ALARM_SCENE":"","ALARM_TIME":"","ALARM_TYPE":"","interfaceId":"1d97c9b047dcbb57dd27af91ce16271e"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getData'] = res.data;
                
     const { data } = res;
state.data = [];
if (data?.head?.statusCode === '200' && data?.data?.length) {
  state.data = data.data;
  const {pageNum,pageSize,total} = data.head.pageInfo;
  state.page.pageNum = pageNum;
  state.page.pageSize = pageSize;
  state.page.total = total;
  console.log('ssssssss',state.data)
}else{
  state.data = []
  state.page.total = 0
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.data = []
state.page.total = 0
      reject(error);
    });
  });
},
              },
// 接口函数
 getDict: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.businessServiceBaseUrl","params":{"alarm_time":"","status":"","deviceName":"","type":"","interfaceId":"06358aabe53f1d9b57d1d922f5a956e2"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.businessServiceBaseUrl,"params":{"alarm_time":"","status":"","deviceName":"","type":"","interfaceId":"06358aabe53f1d9b57d1d922f5a956e2"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.businessServiceBaseUrl-global.serviceBasePath',  {"alarm_time":"","status":"","deviceName":"","type":"","interfaceId":"06358aabe53f1d9b57d1d922f5a956e2"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getDict'] = res.data;
                
     const { data } = res;

if (data?.head?.statusCode === '200' && data?.data?.length) {
  state.pointDict = res.data.data;
}else{
  state.pointDict = []
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.pointDict = []
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [state.page.pageNum,state.page.pageSize], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-videoWarningDetaillPop', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-videoWarningDetaillPop', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
initParams();
});
// 执行自定义方法
setProvide();
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tDatePickerx0x1ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x1.default, componentState.tDatePickerx0x1?.[state.screenSize]));

 const tSelectx0x2ComputedData = computed(() => _.merge({}, componentState.tSelectx0x2.default, componentState.tSelectx0x2?.[state.screenSize]));

 const tPaginationBasex0x3ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x3.default, componentState.tPaginationBasex0x3?.[state.screenSize]));

 const tTextCommonx0x4ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x4.default, componentState.tTextCommonx0x4?.[state.screenSize]));

 const tTextCommonx0x5ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x5.default, componentState.tTextCommonx0x5?.[state.screenSize]));

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
tDatePickerx0x1ComputedData,
tSelectx0x2ComputedData,
tPaginationBasex0x3ComputedData,
tTextCommonx0x4ComputedData,
tTextCommonx0x5ComputedData,
ondateChange1770103355690,
onchange1770100341213,
onsizeChange1770110265782,
oncurrentChange1770110289667,
};
},
};