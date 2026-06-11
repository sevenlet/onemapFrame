window.yhbzInspectionsituationComponent = {
template: 
`<div id="t-l-c-yhbzInspectionsituation" class="t-l-c-yhbzInspectionsituation" >` +
`<t-col id="t-col-95c6.bde140da8" class="yhbzInspectionsituation-t-col-0-0"  :span="tColx0x0ComputedData.span" :offset="tColx0x0ComputedData.offset" :push="tColx0x0ComputedData.push" :pull="tColx0x0ComputedData.pull" :c-style="tColx0x0ComputedData.cStyle">` +
`<t-row id="t-row-1e11.16b1e8564" class="yhbzInspectionsituation-t-row-0-0-0"  :c-style="tRowx0x0x0ComputedData.cStyle" :gutter="tRowx0x0x0ComputedData.gutter" :justify="tRowx0x0x0ComputedData.justify" :align="tRowx0x0x0ComputedData.align">` +
`<t-tabs-base id="t-tabs-base-2e7c.240cd0fd2" class="yhbzInspectionsituation-t-tabs-base-0-0-0-0"  :data="replaceCssVariables(filterData(state.dateList, componentPropBindingMap?.['t-tabs-base-2e7c.240cd0fd2']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :space="tTabsBasex0x0x0x0ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.tabSelect, componentPropBindingMap?.['t-tabs-base-2e7c.240cd0fd2']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x0x0x0ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x0x0x0ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x0x0x0ComputedData.alias" :c-style="tTabsBasex0x0x0x0ComputedData.cStyle" @tab-click="ontabClick1769570619750_0_0">` +
`</t-tabs-base>` +
`<t-text-common id="t-text-common-68b3.441367744" class="yhbzInspectionsituation-t-text-common-0-0-0-1"  :label="tTextCommonx0x0x0x1ComputedData.label" :editable="tTextCommonx0x0x0x1ComputedData.editable" :c-style="tTextCommonx0x0x0x1ComputedData.cStyle">` +
`</t-text-common>` +
`<t-date-picker v-if="state.tabSelect !== '24Hour'" id="t-date-picker-fc05.4bbfd3941" class="yhbzInspectionsituation-t-date-picker-0-0-0-2"  :placeholder="tDatePickerx0x0x0x2ComputedData.placeholder" :start-placeholder="tDatePickerx0x0x0x2ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x0x0x2ComputedData.endPlaceholder" :type="tDatePickerx0x0x0x2ComputedData.type" :clearable="tDatePickerx0x0x0x2ComputedData.clearable" :range-separator="tDatePickerx0x0x0x2ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeValue, componentPropBindingMap?.['t-date-picker-fc05.4bbfd3941']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x0x0x2ComputedData.separator" :readonly="tDatePickerx0x0x0x2ComputedData.readonly" :editable="tDatePickerx0x0x0x2ComputedData.editable" :c-style="tDatePickerx0x0x0x2ComputedData.cStyle" :is-disabled-front="tDatePickerx0x0x0x2ComputedData.isDisabledFront" :disabled-date="replaceCssVariables(filterData(state.maxTimeValue, componentPropBindingMap?.['t-date-picker-fc05.4bbfd3941']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @date-change="ondateChange1769578567275_0_0">` +
`</t-date-picker>` +
`<t-date-picker v-if="state.tabSelect === '24Hour'" id="t-date-picker-67d7.3786b362f" class="yhbzInspectionsituation-t-date-picker-0-0-0-3"  :placeholder="tDatePickerx0x0x0x3ComputedData.placeholder" :start-placeholder="tDatePickerx0x0x0x3ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x0x0x3ComputedData.endPlaceholder" :type="tDatePickerx0x0x0x3ComputedData.type" :clearable="tDatePickerx0x0x0x3ComputedData.clearable" :range-separator="tDatePickerx0x0x0x3ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeValue, componentPropBindingMap?.['t-date-picker-67d7.3786b362f']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x0x0x3ComputedData.separator" :readonly="tDatePickerx0x0x0x3ComputedData.readonly" :editable="tDatePickerx0x0x0x3ComputedData.editable" :c-style="tDatePickerx0x0x0x3ComputedData.cStyle" :is-disabled-front="tDatePickerx0x0x0x3ComputedData.isDisabledFront" :disabled-date="replaceCssVariables(filterData(state.maxTimeValue, componentPropBindingMap?.['t-date-picker-67d7.3786b362f']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @date-change="ondateChange1766538880657_0_0">` +
`</t-date-picker>` +
`</t-row>` +
`<t-row id="t-row-48e5.ba1755124" class="yhbzInspectionsituation-t-row-0-0-1"  :c-style="tRowx0x0x1ComputedData.cStyle" :gutter="tRowx0x0x1ComputedData.gutter" :justify="tRowx0x0x1ComputedData.justify" :align="tRowx0x0x1ComputedData.align">` +
`<t-component id="t-component-43e5.a4c4aa67b" class="yhbzInspectionsituation-t-component-0-0-1-1"  :name="tComponentx0x0x1x1ComputedData.name" :loading="tComponentx0x0x1x1ComputedData.loading" :c-style="tComponentx0x0x1x1ComputedData.cStyle" :src="tComponentx0x0x1x1ComputedData.src" :component-name="tComponentx0x0x1x1ComputedData.componentName" :page-id="tComponentx0x0x1x1ComputedData.pageId" :page-code="tComponentx0x0x1x1ComputedData.pageCode">` +
`</t-component>` +
`</t-row>` +
`<t-row id="t-row-ccba.e935bf4e" class="yhbzInspectionsituation-t-row-0-0-2"  :c-style="tRowx0x0x2ComputedData.cStyle" :gutter="tRowx0x0x2ComputedData.gutter" :justify="tRowx0x0x2ComputedData.justify" :align="tRowx0x0x2ComputedData.align">` +
`<t-pagination-base id="t-pagination-base-e2f6.5d03f10ed" class="yhbzInspectionsituation-t-pagination-base-0-0-2-0"  :total="replaceCssVariables(filterData(state.pageInfo.total, componentPropBindingMap?.['t-pagination-base-e2f6.5d03f10ed']['total'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :small="tPaginationBasex0x0x2x0ComputedData.small" :page-size="replaceCssVariables(filterData(state.pageInfo.pageSize, componentPropBindingMap?.['t-pagination-base-e2f6.5d03f10ed']['pageSize'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :pager-count="tPaginationBasex0x0x2x0ComputedData.pagerCount" :current-page="replaceCssVariables(filterData(state.pageInfo.pageNum, componentPropBindingMap?.['t-pagination-base-e2f6.5d03f10ed']['currentPage'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :layout="tPaginationBasex0x0x2x0ComputedData.layout" :page-sizes="tPaginationBasex0x0x2x0ComputedData.pageSizes" :disabled="tPaginationBasex0x0x2x0ComputedData.disabled" :c-style="tPaginationBasex0x0x2x0ComputedData.cStyle" @size-change="onsizeChange1766375065960_0_0" @current-change="oncurrentChange1766375065960_0_1">` +
`</t-pagination-base>` +
`</t-row>` +
`</t-col>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-col-95c6.bde140da8":{"attributeName":"tColx0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-row-1e11.16b1e8564":{"attributeName":"tRowx0x0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-tabs-base-2e7c.240cd0fd2":{"attributeName":"tTabsBasex0x0x0x0","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-68b3.441367744":{"attributeName":"tTextCommonx0x0x0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-fc05.4bbfd3941":{"attributeName":"tDatePickerx0x0x0x2","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-date-picker-67d7.3786b362f":{"attributeName":"tDatePickerx0x0x0x3","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-row-48e5.ba1755124":{"attributeName":"tRowx0x0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-table-f216.11429e5ca":{"attributeName":"tTablex0x0x1x0"},"t-component-43e5.a4c4aa67b":{"attributeName":"tComponentx0x0x1x1","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-row-ccba.e935bf4e":{"attributeName":"tRowx0x0x2","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-pagination-base-e2f6.5d03f10ed":{"attributeName":"tPaginationBasex0x0x2x0","total":{"filters":[]},"small":{"filters":[]},"pageSize":{"filters":[]},"pagerCount":{"filters":[]},"currentPage":{"filters":[]},"layout":{"filters":[]},"pageSizes":{"filters":[]},"disabled":{"filters":[]},"cStyle":{"filters":[]}}};
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
   id: "",
   timeValue: "",
   locationUrl: "/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-05/da95b141a1b54b34be1d5577bedc3cce.svg",
   listData: [],
   timeStart: "",
   timeEnd: "",
   timeType: "hour",
   dateType: "datetimehour",
   maxTimeValue: "",
   pageInfo: {"pageNum":1,"pageSize":10,"total":0,"pages":0},
   tabSelect: "24hour",
   dateList: [{"label":"今日","value":"24Hour"},{"label":"近7天","value":"7Day"},{"label":"近30天","value":"30Day"}],
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
tColx0x0: {
defaultStyle: {
            default: {"width":"100%","height":"100%","display":"flex","justifyContent":"unset","alignItems":"center","left":"0px","top":"0px","flexDirection":"column"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","display":"flex","justifyContent":"unset","alignItems":"center","left":"0px","top":"0px","flexDirection":"column"}}}, 
 },
},
tRowx0x0x0: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"12px","paddingLeft":"12px","paddingRight":"12px","marginTop":"16px","pointerEvents":"none"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"12px","paddingLeft":"12px","paddingRight":"12px","marginTop":"16px","pointerEvents":"none"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTabsBasex0x0x0x0: {
defaultStyle: {
            default: {"width":"300px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"509px","top":"-69px","marginRight":"20px"},
            
            },
 default: { 
 
data:[{"label":"今日","value":"24Hour"},{"label":"近7天","value":"7Day"},{"label":"近30天","value":"30Day"}],
space:1,
selectedTabVal:"hour",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":false},
cStyle:{"wrapper":{"default":{"width":"300px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"509px","top":"-69px","marginRight":"20px"}},"itemWrapper":{"default":{"width":"80px","height":"32px","fontSize":"14px","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px"}},"label":{"default":{"fontSize":"var(--business-text-size-20)","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","fontSize":"var(--business-text-size-20)"},"hover":{"fontSize":"20px"}}}, 
 },
},
tTextCommonx0x0x0x1: {
defaultStyle: {
            default: {"width":"70px","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-20)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"1080px","top":"28px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"时间：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-20)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"1080px","top":"28px","background":"unset","backgroundClip":"unset","animationName":""}},"chart":{"default":{"fontSize":"20px"}}}, 
 },
},
tDatePickerx0x0x0x2: {
defaultStyle: {
            default: {"width":"500px","height":"31px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择时间",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"daterange",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"500px","height":"31px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-20)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-20)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tDatePickerx0x0x0x3: {
defaultStyle: {
            default: {"width":"500px","height":"31px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择时间",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerange",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"500px","height":"31px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-20)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important","lineHeight":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-white) !important","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-20)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tRowx0x0x1: {
defaultStyle: {
            default: {"width":"100%","height":"calc(100% - 110px)","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"22px","top":"146px","paddingLeft":"12px","paddingRight":"12px","paddingTop":"12px","paddingBottom":"2px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"calc(100% - 110px)","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"22px","top":"146px","paddingLeft":"12px","paddingRight":"12px","paddingTop":"12px","paddingBottom":"2px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tComponentx0x0x1x1: {
defaultStyle: {
            default: {"width":"100%","height":"100%","margin":"0 auto","position":"unset","left":"20px","top":"60px"},
            
            },
 default: { 
 
name:"yhbzInspectionsituationTableComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","margin":"0 auto","position":"unset","left":"20px","top":"60px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/yhbzInspectionsituationTable",
componentName:"yhbzInspectionsituationTableComponent",
pageId:"83bf468332fc4f2cb604cff02fe5699a",
pageCode:"yhbzInspectionsituationTable", 
 },
},
tRowx0x0x2: {
defaultStyle: {
            default: {"width":"100%","height":"40px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"0px","top":"223px","paddingLeft":"12px","paddingRight":"12px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"40px","display":"flex","justifyContent":"left","alignItems":"center","position":"unset","left":"0px","top":"223px","paddingLeft":"12px","paddingRight":"12px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tPaginationBasex0x0x2x0: {
defaultStyle: {
            default: {"width":"100%","height":"100%","borderLeft":"0px none var(--business-show-bg60)","borderTop":"0px none var(--business-show-bg60)","borderRight":"0px none var(--business-show-bg60)","borderBottom":"0px none var(--business-show-bg60)","display":"flex","justifyContent":"flex-end","animationName":"","fontSize":"var(--business-text-size-14)"},
            
            },
 default: { 
 
total:0,
small:false,
pageSize:5,
pagerCount:5,
currentPage:1,
layout:" prev, pager, next,total,sizes,jumper",
pageSizes:[5,10,20,30,40,50,100],
disabled:false,
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","borderLeft":"0px none var(--business-show-bg60)","borderTop":"0px none var(--business-show-bg60)","borderRight":"0px none var(--business-show-bg60)","borderBottom":"0px none var(--business-show-bg60)","display":"flex","justifyContent":"flex-end","animationName":"","fontSize":"var(--business-text-size-14)"}},"total":{"default":{"color":"var(--business-text-avianize)","position":"absolute","right":"0px","left":"10px","width":"490px","fontSize":"var(--business-text-size-14)"}},"pagerItem":{"default":{"color":"var(--business-white)","backgroundColor":"var(--business-show-bg15)","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","cursor":"pointer","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-white)","background":"var(--business-btn-active)","borderLeft":"1px none rgba(255,13,0,1)","borderTop":"1px none rgba(255,13,0,1)","borderRight":"1px none rgba(255,13,0,1)","borderBottom":"1px none rgba(255,13,0,1)","pointerEvents":"auto","overflow":"visible","cursor":"pointer","fontSize":"var(--business-text-size-14)"},"active":{"color":"var(--business-white)","background":"var(--business-btn-active)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","fontSize":"var(--business-text-size-14)"}},"pager":{"default":{"color":"var(--business-white)","backgroundColor":"var(--business-show-bg15)","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-white)","background":"var(--business-btn-active)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","fontSize":"var(--business-text-size-12)"}},"more":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"fontSize":"var(--business-text-size-12)"}},"sizesWrapper":{"default":{"fontSize":"var(--business-text-size-14)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","width":"auto"}},"sizesInput":{"default":{"fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"sizesDropdownWrapper":{"default":{"fontSize":"var(--business-text-size-14)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-dialog-bg)"}},"sizesDropdownItem":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)","backgroundColor":"rgba(26, 27, 31, 0)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"}},"jumpWrapper":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"jumpInput":{"default":{"fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
});
const changeTime = (data) => {
if (data.length) {
  state.timeStart = data[0];
  state.timeEnd = data[1];
  apiRegistry.getListData.request();
}
};
const initParams = () => {
provide('yhbzInspectionsituation',state)
state.id = global.businessDialog.dialogParmas.id;

console.log("小区小区", state);
// 初始化最近24小时的时间范围
// const initLast24Hours = () => {
//   const now = new Date();
  
//   // 结束时间：当前时间
//   const end = new Date(now);
  
//   // 开始时间：24小时前
//   const start = new Date(now);
//   start.setHours(start.getHours() - 24);
  
//   // 格式化函数
//   const formatDateTime = (date) => {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     const hours = String(date.getHours()).padStart(2, '0');
    
//     return `${year}-${month}-${day} ${hours}`;
//   };
  
//   state.timeStart = formatDateTime(start);
//   state.timeEnd = formatDateTime(end);
  
//   state.timeValue = [state.timeStart, state.timeEnd];

//   apiRegistry.getListData.request();
// };

// 调用初始化函数
// initLast24Hours();

state.tabSelect = '24Hour'

getDate();

apiRegistry.getListData.request();

};
const handleTableClick = (row,column) => {
console.log('123', row, column)
if (column.property === 'opt') {
  // rootData.rootSocket.emit(
  //   'message',  // 固定的消息名称，不能修改
  //   {
  //     room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
  //     type: 'switchRightContainerName',  // 消息类型名称
  //     data: 'controlManagementComponent'
  //   }
  // );
} else if (column.property === 'icon') {
  // rootData.rootSocket.emit(
  //   'message',  // 固定的消息名称，不能修改
  //   {
  //     room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
  //     type: 'switchRightContainerName',  // 消息类型名称
  //     data: 'controlManagementComponent'
  //   }
  // );
}
};
const setStyle = () => {
// 其中 t-l-c-waterDialogSmallWaterTrend 为当前页面的组件名称
const componentDom = document.querySelector('#t-l-c-yhbzInspectionsituation')
const styles = document.createElement('style')
styles.innerHTML = `
.t-l-c-yhbzInspectionsituation{
  height: 100% !important;
  width: 100% !important;
}
`
componentDom.append(styles)
};
const handleDateType = () => {
switch (state.tabSelect) {
  case '5minute':
    state.dateType = 'datetimeminute';
    break;
  case 'hour':
    state.dateType = 'datetimehour';
    break;
  case 'day':
    state.dateType = 'date';
    break;
  default:
    break;
}
};
const getDate = () => {
// 获取当前年份
const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = (now.getMonth() + 1) < 9 ? ('0' + (now.getMonth() + 1)) : now.getMonth() + 1
const currentDay = now.getDate();

// 设置默认值
if (state.tabSelect === '24Hour') {
  state.timeStart = `${currentYear}-${currentMonth}-${currentDay} 00:00:00`;
  state.timeEnd = `${currentYear}-${currentMonth}-${currentDay} 23:59:59`;
} else if (state.tabSelect === '7Day') {
  state.timeEnd = `${currentYear}-${currentMonth}-${currentDay}`
  state.timeStart = getPrevTime(state.timeEnd + ' 00:00:00', 'day').slice(0,10)
} else if (state.tabSelect === '30Day') {
  state.timeEnd = `${currentYear}-${currentMonth}-${currentDay}`
   state.timeStart = getPrevTime(state.timeEnd + ' 00:00:00', '30day').slice(0,10)
}
state.timeValue = [state.timeStart, state.timeEnd];

};
const ondateChange1766538880657_0_0 = (data) => {
// 设置变量值
state.timeValue = data;
// 执行自定义方法
changeTime(data);
};
const oncellClick1766373336939_0_0 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(row,column);
};
const onsizeChange1766375065960_0_0 = (pageSize) => {
// 设置变量值
state.pageInfo.pageSize = pageSize;
};
const oncurrentChange1766375065960_0_1 = (currentPage) => {
// 设置变量值
state.pageInfo.pageNum = currentPage;
};
const ontabClick1733996453368 = (data) => {
// 设置变量值
state.tabSelect = data.value;
// 执行自定义方法
handleDateType();
// 事件交互-请求调用接口
apiRegistry.getLastTime.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "changeParamsRealTimeMoniter", // 消息名称
data: {"data":data.value,"type":"tab"}, // 发送的数据
});
};
const ontabClick1769570619750_0_0 = (data) => {
// 设置变量值
state.tabSelect = data.value;
// 执行自定义方法
getDate();
};
const ondateChange1769578567275_0_0 = (data) => {
// 设置变量值
state.timeValue = data;
// 执行自定义方法
changeTime(data);
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"community_id":"state.id","pageNum":"state.pageInfo.pageNum","pageSize":"state.pageInfo.pageSize","inspectionTimeStart":"state.timeStart","inspectionTimeEnd":"state.timeEnd","interfaceId":"4a679fccf67a8c4bf111c4b39593b167"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"community_id":state.id,"pageNum":state.pageInfo.pageNum,"pageSize":state.pageInfo.pageSize,"inspectionTimeStart":state.timeStart,"inspectionTimeEnd":state.timeEnd,"interfaceId":"4a679fccf67a8c4bf111c4b39593b167"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"community_id":state.id,"pageNum":state.pageInfo.pageNum,"pageSize":state.pageInfo.pageSize,"inspectionTimeStart":state.timeStart,"inspectionTimeEnd":state.timeEnd,"interfaceId":"4a679fccf67a8c4bf111c4b39593b167"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  state.pageInfo.total = res?.data?.head?.pageInfo?.total;
  
  const rawData = res?.data?.data || [];
  const baseUrl = 'http://192.168.24.106:10157/waterevaluate/api/components/file/download/';
  
  // 初始化listData
  state.listData = rawData.map(item => ({ ...item, fileList: [] }));
  
  // 为每条数据获取附件
  rawData.forEach((item, index) => {
    if (item.pkid) {
      apiRegistry.getFileList.request(item.pkid)
        .then(fileRes => {
          if (fileRes?.code === 200 && fileRes?.data) {
            const fileList = fileRes.data.map(fileItem => ({
              url: baseUrl + fileItem.fileId,  // 拼接的完整地址
              ...fileItem
            }));
            // 更新对应项
            if (state.listData[index]) {
              state.listData[index].fileList = fileList;
              // 如果Vue不响应，可以强制更新
              state.listData = [...state.listData];
            }
          }
        })
        .catch(error => {
          console.error(`获取附件失败 pkid=${item.pkid}:`, error);
        });
    }
  });
  console.log('state.listData', state.listData);
} else {
  state.listData = [];
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.listData = [];
      reject(error);
    });
  });
},
              },
// 接口函数
 getFileList: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"businessKey","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"yerbn6M2zT"}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"/waterevaluate/api/components/file/list","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"subBusinessKey":"","businessKey":"this.businessKey","pageNum":"1","pageSize":"100001"}},
              request: function (businessKey, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":"/waterevaluate/api/components/file/list","method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"subBusinessKey":"","businessKey":businessKey,"pageNum":"1","pageSize":"100001"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-/waterevaluate/api/components/file/list',  {"subBusinessKey":"","businessKey":businessKey,"pageNum":"1","pageSize":"100001"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getFileList'] = res.data;
                
     console.log('fileList', res);
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
watch(() => [state.pageInfo.pageNum,state.pageInfo.pageSize,state.timeStart,state.timeEnd], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getListData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-yhbzInspectionsituation', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initParams();
onMounted(() => {
setPageScale('t-l-c-yhbzInspectionsituation', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setStyle();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tColx0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0.default, componentState.tColx0x0?.[state.screenSize]));

 const tRowx0x0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0x0.default, componentState.tRowx0x0x0?.[state.screenSize]));

 const tTabsBasex0x0x0x0ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x0x0x0.default, componentState.tTabsBasex0x0x0x0?.[state.screenSize]));

 const tTextCommonx0x0x0x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x0x0x1.default, componentState.tTextCommonx0x0x0x1?.[state.screenSize]));

 const tDatePickerx0x0x0x2ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x0x0x2.default, componentState.tDatePickerx0x0x0x2?.[state.screenSize]));

 const tDatePickerx0x0x0x3ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x0x0x3.default, componentState.tDatePickerx0x0x0x3?.[state.screenSize]));

 const tRowx0x0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x0x1.default, componentState.tRowx0x0x1?.[state.screenSize]));

 const tComponentx0x0x1x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0x1x1.default, componentState.tComponentx0x0x1x1?.[state.screenSize]));

 const tRowx0x0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x0x2.default, componentState.tRowx0x0x2?.[state.screenSize]));

 const tPaginationBasex0x0x2x0ComputedData = computed(() => _.merge({}, componentState.tPaginationBasex0x0x2x0.default, componentState.tPaginationBasex0x0x2x0?.[state.screenSize]));

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
tColx0x0ComputedData,
tRowx0x0x0ComputedData,
tTabsBasex0x0x0x0ComputedData,
tTextCommonx0x0x0x1ComputedData,
tDatePickerx0x0x0x2ComputedData,
tDatePickerx0x0x0x3ComputedData,
tRowx0x0x1ComputedData,
tComponentx0x0x1x1ComputedData,
tRowx0x0x2ComputedData,
tPaginationBasex0x0x2x0ComputedData,
ontabClick1769570619750_0_0,
ondateChange1769578567275_0_0,
ondateChange1766538880657_0_0,
onsizeChange1766375065960_0_0,
oncurrentChange1766375065960_0_1,
};
},
};