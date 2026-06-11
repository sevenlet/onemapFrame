window.gztRightKqzlbjComponent = {
template: 
`<div id="t-l-c-gztRightKqzlbj" class="t-l-c-gztRightKqzlbj" >` +
`<t-rect id="t-rect-f821.e063bda55" class="gztRightKqzlbj-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-d09a.62e00f871" class="gztRightKqzlbj-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-date-picker id="t-date-picker-b000.cd90ca417" class="gztRightKqzlbj-t-date-picker-0-2"  :placeholder="tDatePickerx0x2ComputedData.placeholder" :start-placeholder="tDatePickerx0x2ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x2ComputedData.endPlaceholder" :type="tDatePickerx0x2ComputedData.type" :clearable="tDatePickerx0x2ComputedData.clearable" :range-separator="tDatePickerx0x2ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.rangeTime, componentPropBindingMap?.['t-date-picker-b000.cd90ca417']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x2ComputedData.separator" :readonly="tDatePickerx0x2ComputedData.readonly" :editable="tDatePickerx0x2ComputedData.editable" :c-style="tDatePickerx0x2ComputedData.cStyle" @date-change="ondateChange1774493587356">` +
`</t-date-picker>` +
`<t-text-common id="t-text-common-c403.ad63e5037" class="gztRightKqzlbj-t-text-common-0-3"  :label="tTextCommonx0x3ComputedData.label" :editable="tTextCommonx0x3ComputedData.editable" :c-style="tTextCommonx0x3ComputedData.cStyle">` +
`</t-text-common>` +
`<t-table v-if="state.selectedType === 'siteAlarm'" id="t-table-cb4a.653ed0359" class="gztRightKqzlbj-t-table-0-4"  :height="tTablex0x4ComputedData.height" :stripe="tTablex0x4ComputedData.stripe" :border="tTablex0x4ComputedData.border" :auto-scroll="tTablex0x4ComputedData.autoScroll" :speed="tTablex0x4ComputedData.speed" :columns="tTablex0x4ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-cb4a.653ed0359']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x4ComputedData.defaultSort" :c-style="tTablex0x4ComputedData.cStyle">` +
`</t-table>` +
`<t-table v-if="state.selectedType === 'radarAlarm'" id="t-table-9331.d95cd7232" class="gztRightKqzlbj-t-table-0-5"  :height="tTablex0x5ComputedData.height" :stripe="tTablex0x5ComputedData.stripe" :border="tTablex0x5ComputedData.border" :auto-scroll="tTablex0x5ComputedData.autoScroll" :speed="tTablex0x5ComputedData.speed" :columns="tTablex0x5ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-9331.d95cd7232']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x5ComputedData.defaultSort" :c-style="tTablex0x5ComputedData.cStyle">` +
`</t-table>` +
`<t-line id="t-line-c6bd.d9416e135" class="gztRightKqzlbj-t-line-0-6"  :c-style="tLinex0x6ComputedData.cStyle">` +
`</t-line>` +
`<t-image-base id="t-image-base-9395.0069bddc8" class="gztRightKqzlbj-t-image-base-0-7"  :src="tImageBasex0x7ComputedData.src" :fit="tImageBasex0x7ComputedData.fit" :c-style="tImageBasex0x7ComputedData.cStyle">` +
`</t-image-base>` +
`<t-text-common id="t-text-common-4527.7f1867ad8" class="gztRightKqzlbj-t-text-common-0-8"  :label="tTextCommonx0x8ComputedData.label" :editable="tTextCommonx0x8ComputedData.editable" :c-style="tTextCommonx0x8ComputedData.cStyle">` +
`</t-text-common>` +
`<t-tabs-base id="t-tabs-base-8aeb.1f08a57b2" class="gztRightKqzlbj-t-tabs-base-0-9"  :data="replaceCssVariables(filterData(state.options, componentPropBindingMap?.['t-tabs-base-8aeb.1f08a57b2']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :space="tTabsBasex0x9ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.selectedType, componentPropBindingMap?.['t-tabs-base-8aeb.1f08a57b2']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x9ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x9ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x9ComputedData.alias" :c-style="tTabsBasex0x9ComputedData.cStyle" @tab-click="ontabClick1774512285051">` +
`</t-tabs-base>` +
`<t-component v-if="state.selectedType === 'videoAlarm'" id="t-component-11cd.24a751272" class="gztRightKqzlbj-t-component-0-10"  :name="tComponentx0x10ComputedData.name" :loading="tComponentx0x10ComputedData.loading" :c-style="tComponentx0x10ComputedData.cStyle" :src="tComponentx0x10ComputedData.src" :component-name="tComponentx0x10ComputedData.componentName" :page-id="tComponentx0x10ComputedData.pageId" :page-code="tComponentx0x10ComputedData.pageCode">` +
`</t-component>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-f821.e063bda55":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-d09a.62e00f871":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-b000.cd90ca417":{"attributeName":"tDatePickerx0x2","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-c403.ad63e5037":{"attributeName":"tTextCommonx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-table-cb4a.653ed0359":{"attributeName":"tTablex0x4","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-table-9331.d95cd7232":{"attributeName":"tTablex0x5","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-line-c6bd.d9416e135":{"attributeName":"tLinex0x6","cStyle":{"filters":[]}},"t-image-base-9395.0069bddc8":{"attributeName":"tImageBasex0x7","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-4527.7f1867ad8":{"attributeName":"tTextCommonx0x8","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-8aeb.1f08a57b2":{"attributeName":"tTabsBasex0x9","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-component-11cd.24a751272":{"attributeName":"tComponentx0x10","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}}};
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
   selectedType: "videoAlarm",
   options: [{"label":"视频报警","value":"videoAlarm"},{"label":"站点报警","value":"siteAlarm"},{"label":"雷达报警","value":"radarAlarm"}],
   rangeTime: [],
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
tRectx0x0: {
defaultStyle: {
            default: {"width":"1190px","height":"456px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","left":"0px","top":"0px","backgroundColor":"var(--gzt-card-bgc)","borderTopLeftRadius":"12px","borderTopRightRadius":"12px","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1190px","height":"456px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","left":"0px","top":"0px","backgroundColor":"var(--gzt-card-bgc)","borderTopLeftRadius":"12px","borderTopRightRadius":"12px","position":"unset"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"1190px","height":"46px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","left":"0px","top":"0px","backgroundColor":"var(--yybj-right-title-bg)","borderTopLeftRadius":"12px","borderTopRightRadius":"12px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1190px","height":"46px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"1px none var(--t-rect-border-color)","borderLeft":"1px none var(--t-rect-border-color)","borderBottom":"1px none var(--t-rect-border-color)","borderRight":"1px none var(--t-rect-border-color)","left":"0px","top":"0px","backgroundColor":"var(--yybj-right-title-bg)","borderTopLeftRadius":"12px","borderTopRightRadius":"12px"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tDatePickerx0x2: {
defaultStyle: {
            default: {"width":"503px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","position":"unset","left":"665px","top":"63px"},
            
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
cStyle:{"wrapper":{"default":{"width":"503px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","position":"unset","left":"665px","top":"63px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px Solid var(--yybj-right-input-border)","borderTop":"1px Solid var(--yybj-right-input-border)","borderRight":"1px Solid var(--yybj-right-input-border)","borderBottom":"1px Solid var(--yybj-right-input-border)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","background":"var(--yybj-right-input-bg)","fillType":"color","borderDirection":"all","border":"auto !important"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%","background":"rgba(0, 0, 0, 0)","fillType":"color"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tTextCommonx0x3: {
defaultStyle: {
            default: {"width":"44px","height":"20px","color":"var(--t-text-rh-color)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"619px","top":"69px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"日期",
editable:false,
cStyle:{"wrapper":{"default":{"width":"44px","height":"20px","color":"var(--t-text-rh-color)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"619px","top":"69px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
tTablex0x4: {
defaultStyle: {
            default: {"width":"1159px","height":"315px","position":"unset","left":"17px","top":"120.5px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"100%",
stripe:true,
border:false,
autoScroll:"null",
speed:"",
columns:[{"label":"站点名称","key":"point_name","align":"left","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"type":"default","stateKey":"iconStatus","showOverflowTooltip":true},{"label":"站点类型","type":"default","key":"point_type","stateKey":"","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}}},{"label":"报警时间","type":"default","key":"start_time","stateKey":"","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"rgba(255, 255, 255, 1)"}},"stateList":[]},{"label":"报警等级","type":"state","key":"level_name","stateKey":"level_name","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"rgba(255, 255, 255, 1)"}},"stateList":[{"name":"红色报警","fontStyle":{"color":"#FF0000","fontSize":"14PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"黄色报警","fontStyle":{"color":"#FFF200","fontSize":"14PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"橙色报警","fontStyle":{"color":"#FF8C00","fontSize":"14PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"-","fontStyle":{"color":"#FFFFFF","fontSize":"14PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"infoKey":""},{"label":"报警内容","type":"default","key":"alarm_info","stateKey":"","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"rgba(255, 255, 255, 1)","display":"block","width":"100%"}},"stateList":[]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"1159px","height":"315px","position":"unset","left":"17px","top":"120.5px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","fontWeight":"600","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--yybj-right-table-header-bg)"}}}, 
 },
},
tTablex0x5: {
defaultStyle: {
            default: {"width":"1159px","height":"315px","position":"unset","left":"17px","top":"120.5px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"100%",
stripe:true,
border:false,
autoScroll:"null",
speed:"",
columns:[{"label":"报警位置","key":"point_name","align":"left","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":"","display":"block","width":"100%"}},"type":"default","stateKey":"iconStatus","showOverflowTooltip":true},{"label":"报警时间","type":"default","key":"monitortime","stateKey":"","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}}},{"label":"经度","type":"default","key":"longitude","stateKey":"","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"rgba(255, 255, 255, 1)"}},"stateList":[]},{"label":"维度","type":"default","key":"latitude","stateKey":"","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--t-white)"}},"stateList":[],"fixed":false,"operationList":[]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"1159px","height":"315px","position":"unset","left":"17px","top":"120.5px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-show-bg30)","fontSize":"14px","fontWeight":"600","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-show-bg10)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--yybj-right-table-header-bg)"}}}, 
 },
},
tLinex0x6: {
defaultStyle: {
            default: {"width":"1157px","height":"1px","top":"105px","left":"18px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid rgba(0,71,137,0.6)","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"1157px","height":"1px","top":"105px","left":"18px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid rgba(0,71,137,0.6)","position":"unset"}}}, 
 },
},
tImageBasex0x7: {
defaultStyle: {
            default: {"width":"16px","height":"26px","position":"unset","left":"12px","top":"10px"},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-03-26/3739c586e44d40abb8ac33dcadca9fba.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"16px","height":"26px","position":"unset","left":"12px","top":"10px"}}}, 
 },
},
tTextCommonx0x8: {
defaultStyle: {
            default: {"width":"170px","height":"30px","color":"var(--yybj-right-title-font-color)","fontFamily":"优设标题黑","fontWeight":"400","fontSize":"30px","lineHeight":"30px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"36px","top":"8px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"空气质量报警",
editable:false,
cStyle:{"wrapper":{"default":{"width":"170px","height":"30px","color":"var(--yybj-right-title-font-color)","fontFamily":"优设标题黑","fontWeight":"400","fontSize":"30px","lineHeight":"30px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"36px","top":"8px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tTabsBasex0x9: {
defaultStyle: {
            default: {"width":"572px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","position":"unset","left":"18px","top":"62px","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset"},
            
            },
 default: { 
 
data:[{"label":"视频报警","value":"videoAlarm"},{"label":"站点报警","value":"siteAlarm"},{"label":"雷达报警","value":"radarAlarm"}],
space:0,
selectedTabVal:"videoAlarm",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":"disabled"},
cStyle:{"wrapper":{"default":{"width":"572px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","position":"unset","left":"18px","top":"62px","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset"}},"itemWrapper":{"default":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","backgroundColor":"rgba(0, 61, 155, 0)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","width":"120px","height":"32px","fontSize":"14px","lineHeight":"32px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","borderLeft":"1px solid rgba(0,61,155,0)","borderTop":"1px solid rgba(0,61,155,0)","borderRight":"1px solid rgba(0,61,155,0)","borderBottom":"1px solid rgba(0,61,155,0)","color":"var(--business-text-avianize)"},"active":{"background":"var(--business-tab-third-active-fill)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","backgroundColor":"rgba(3, 12, 52, 0)","borderLeft":"1px solid var(--business-tab-third-active-border)","borderTop":"1px solid var(--business-tab-third-active-border)","borderRight":"1px solid var(--business-tab-third-active-border)","borderBottom":"1px solid var(--business-tab-third-active-border)","box-shadow":"var(--business-tab-third-active-shadow) 0px 0px 18px 0px inset","color":"var(--business-tab-third-active-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","height":"32px"},"hover":{"backgroundColor":"rgba(0, 61, 155, 0)","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","borderLeft":"1px solid rgba(255,255,255,0)","borderTop":"1px solid rgba(255,255,255,0)","borderRight":"1px solid rgba(255,255,255,0)","borderBottom":"1px solid rgba(255,255,255,0)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","color":"var(--business-tab-third-active-border)"}}}, 
 },
},
tComponentx0x10: {
defaultStyle: {
            default: {"width":"1159px","height":"315px","margin":"0 auto","position":"unset","left":"16px","top":"121px"},
            
            },
 default: { 
 
name:"gztRightSpbjComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"1159px","height":"315px","margin":"0 auto","position":"unset","left":"16px","top":"121px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/gztRightSpbj",
componentName:"gztRightSpbjComponent",
pageId:"c3938ed33f8e4529803e2f8bf2aee570",
pageCode:"gztRightSpbj", 
 },
},
});
const changeTime = (date) => {
state.rangeTime = date
state.startTime = date[0]
state.endTime = date[1]
global.workBenchGlobalVariables.airVideoAlarm.startTime = state.startTime
global.workBenchGlobalVariables.airVideoAlarm.endTime = state.endTime
if (state.selectedType === 'siteAlarm') {
  apiRegistry.getSiteAlarmListData.request();
} else if (state.selectedType === 'radarAlarm') {
  apiRegistry.getRenderAlarmListData.request();
}
};
const handleSelectType = () => {
if (state.selectedType === 'siteAlarm') {
  apiRegistry.getSiteAlarmListData.request();
} else if (state.selectedType === 'radarAlarm') {
  apiRegistry.getRenderAlarmListData.request();
}
};
const getData = () => {
async function getData(){
  await apiRegistry.getTime.request();
  if(state.selectedType === 'siteAlarm'){
    apiRegistry.getSiteAlarmListData.request();
  }else if(state.selectedType === 'radarAlarm'){
    apiRegistry.getRenderAlarmListData.request();
  }
}
getData()
};
const ondateChange1774493587356 = (data) => {
// 执行自定义方法
changeTime(data);
};
const ontabClick1774512285051 = (data) => {
// 设置变量值
state.selectedType = data.value;
// 执行自定义方法
handleSelectType();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getSiteAlarmListData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"START_TIME":"state.startTime","REGION_CODE":"350700000000","END_TIME":"state.endTime","interfaceId":"30f6f88064d789e356c09c4d4d8218c6"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"START_TIME":state.startTime,"REGION_CODE":"350700000000","END_TIME":state.endTime,"interfaceId":"30f6f88064d789e356c09c4d4d8218c6"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"START_TIME":state.startTime,"REGION_CODE":"350700000000","END_TIME":state.endTime,"interfaceId":"30f6f88064d789e356c09c4d4d8218c6"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getSiteAlarmListData'] = res.data;
                
     if(res?.data?.data?.length){
  const { data } = res?.data
  state.listData = data.map(item =>{
    return{
      ...item,
      point_type: filters.pointType(item.point_type),
      level_name: item.level_name ? `${item.level_name}报警` : '-'
    }
  })
  state.listData.forEach(item => {
    Object.keys(item).forEach(key => {
      if (item[key] === '') {
        item[key] = '-';
      }
    });
  });
}else{
  state.listData = [];
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.listData = []

      reject(error);
    });
  });
},
              },
// 接口函数
 getRenderAlarmListData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"region_path":"350700000000","START_TIME":"state.startTime","END_TIME":"state.endTime","interfaceId":"dfb75cdbd9cee3106c250feb0f24f8e5"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"region_path":"350700000000","START_TIME":state.startTime,"END_TIME":state.endTime,"interfaceId":"dfb75cdbd9cee3106c250feb0f24f8e5"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"region_path":"350700000000","START_TIME":state.startTime,"END_TIME":state.endTime,"interfaceId":"dfb75cdbd9cee3106c250feb0f24f8e5"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getRenderAlarmListData'] = res.data;
                
     const { data } = res.data
if (data.length) {
  state.listData = data
  state.listData.forEach(item => {
    Object.keys(item).forEach(key => {
      if (item[key] === '') {
        item[key] = '-';
      }
    });
  });
} else {
  state.listData = []
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.listData = []

      reject(error);
    });
  });
},
              },
// 接口函数
 getTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"TIME_TYPE":"hour","POINT_TYPE":"12","interfaceId":"66ad2ebe9d660295568b05187f34e133"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"TIME_TYPE":"hour","POINT_TYPE":"12","interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"TIME_TYPE":"hour","POINT_TYPE":"12","interfaceId":"66ad2ebe9d660295568b05187f34e133"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTime'] = res.data;
                
     const { data } = res.data
state.endTime = ''
state.startTime = ''
state.rangeTime = []
global.workBenchGlobalVariables.airVideoAlarm.startTime = []
global.workBenchGlobalVariables.airVideoAlarm.endTime = []
if (data) {
  state.endTime = data.MONITORTIME || ''
  state.startTime = getPrevTime(state.endTime + ':00:00', 'hour').slice(0, 13)
  state.rangeTime = [state.startTime, state.endTime]
  global.workBenchGlobalVariables.airVideoAlarm.startTime = state.startTime
  global.workBenchGlobalVariables.airVideoAlarm.endTime = state.endTime
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
                            setPageScale('t-l-c-gztRightKqzlbj', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getData();
onMounted(() => {
setPageScale('t-l-c-gztRightKqzlbj', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tDatePickerx0x2ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x2.default, componentState.tDatePickerx0x2?.[state.screenSize]));

 const tTextCommonx0x3ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x3.default, componentState.tTextCommonx0x3?.[state.screenSize]));

 const tTablex0x4ComputedData = computed(() => _.merge({}, componentState.tTablex0x4.default, componentState.tTablex0x4?.[state.screenSize]));

 const tTablex0x5ComputedData = computed(() => _.merge({}, componentState.tTablex0x5.default, componentState.tTablex0x5?.[state.screenSize]));

 const tLinex0x6ComputedData = computed(() => _.merge({}, componentState.tLinex0x6.default, componentState.tLinex0x6?.[state.screenSize]));

 const tImageBasex0x7ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x7.default, componentState.tImageBasex0x7?.[state.screenSize]));

 const tTextCommonx0x8ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x8.default, componentState.tTextCommonx0x8?.[state.screenSize]));

 const tTabsBasex0x9ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x9.default, componentState.tTabsBasex0x9?.[state.screenSize]));

 const tComponentx0x10ComputedData = computed(() => _.merge({}, componentState.tComponentx0x10.default, componentState.tComponentx0x10?.[state.screenSize]));

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
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tDatePickerx0x2ComputedData,
tTextCommonx0x3ComputedData,
tTablex0x4ComputedData,
tTablex0x5ComputedData,
tLinex0x6ComputedData,
tImageBasex0x7ComputedData,
tTextCommonx0x8ComputedData,
tTabsBasex0x9ComputedData,
tComponentx0x10ComputedData,
ondateChange1774493587356,
ontabClick1774512285051,
};
},
};