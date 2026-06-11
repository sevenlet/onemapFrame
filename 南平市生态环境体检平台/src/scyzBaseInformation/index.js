window.scyzBaseInformationComponent = {
template: 
`<div id="t-l-c-scyzBaseInformation" class="t-l-c-scyzBaseInformation" >` +
`<t-chart-bar-simple v-if="state.chartShape === 'bar'" id="t-chart-bar-simple-01a4.a8623db7c" class="scyzBaseInformation-t-chart-bar-simple-0-0"  :empty-img="tChartBarSimplex0x0ComputedData.emptyImg" :c-style="tChartBarSimplex0x0ComputedData.cStyle" :options="tChartBarSimplex0x0ComputedData.options" :data="replaceCssVariables(filterData(state.chartList, componentPropBindingMap?.['t-chart-bar-simple-01a4.a8623db7c']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :series-setting="tChartBarSimplex0x0ComputedData.seriesSetting" :bar="componentState.tChartBarSimplex0x0.bar">` +
`</t-chart-bar-simple>` +
`<t-row id="t-row-bed0.5ca83a488" class="scyzBaseInformation-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align">` +
`<t-text id="t-text-b39c.b6c03321c" class="scyzBaseInformation-t-text-0-1-0"  :label="tTextx0x1x0ComputedData.label" :editable="tTextx0x1x0ComputedData.editable" :c-style="tTextx0x1x0ComputedData.cStyle">` +
`</t-text>` +
`</t-row>` +
`<t-component id="t-component-c019.99b6d840a" class="scyzBaseInformation-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName" :page-id="tComponentx0x2ComputedData.pageId" :page-code="tComponentx0x2ComputedData.pageCode">` +
`</t-component>` +
`<t-text id="t-text-62b3.48b14905c" class="scyzBaseInformation-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle">` +
`</t-text>` +
`<t-list-card id="t-list-card-0032.f5836da41" class="scyzBaseInformation-t-list-card-0-4"  :data="replaceCssVariables(filterData(state.baseInfoData, componentPropBindingMap?.['t-list-card-0032.f5836da41']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x4ComputedData.spacingX" :col="tListCardx0x4ComputedData.col" :direction="tListCardx0x4ComputedData.direction" :exchange-order="tListCardx0x4ComputedData.exchangeOrder" :unit-break="tListCardx0x4ComputedData.unitBreak" :key-field="tListCardx0x4ComputedData.keyField" :active-key-field="tListCardx0x4ComputedData.activeKeyField" :active="tListCardx0x4ComputedData.active" :c-style="tListCardx0x4ComputedData.cStyle">` +
`</t-list-card>` +
`<t-row id="t-row-3ae9.949fc1c3b" class="scyzBaseInformation-t-row-0-5"  :c-style="tRowx0x5ComputedData.cStyle" :gutter="tRowx0x5ComputedData.gutter" :justify="tRowx0x5ComputedData.justify" :align="tRowx0x5ComputedData.align">` +
`<t-col id="t-col-facf.ef4316657" class="scyzBaseInformation-t-col-0-5-0"  :span="tColx0x5x0ComputedData.span" :offset="tColx0x5x0ComputedData.offset" :push="tColx0x5x0ComputedData.push" :pull="tColx0x5x0ComputedData.pull" :c-style="tColx0x5x0ComputedData.cStyle">` +
`<t-text id="t-text-6063.4db73323" class="scyzBaseInformation-t-text-0-5-0-0"  :label="tTextx0x5x0x0ComputedData.label" :editable="tTextx0x5x0x0ComputedData.editable" :c-style="tTextx0x5x0x0ComputedData.cStyle">` +
`</t-text>` +
`<t-select id="t-select-3fcb.c00f74209" class="scyzBaseInformation-t-select-0-5-0-1"  :active-value="replaceCssVariables(filterData(state.chartShape, componentPropBindingMap?.['t-select-3fcb.c00f74209']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x5x0x1ComputedData.options" :alias="tSelectx0x5x0x1ComputedData.alias" :multiple="tSelectx0x5x0x1ComputedData.multiple" :placeholder="tSelectx0x5x0x1ComputedData.placeholder" :clearable="tSelectx0x5x0x1ComputedData.clearable" :disabled="tSelectx0x5x0x1ComputedData.disabled" :name="tSelectx0x5x0x1ComputedData.name" :autocomplete="tSelectx0x5x0x1ComputedData.autocomplete" :filterable="tSelectx0x5x0x1ComputedData.filterable" :no-match-text="tSelectx0x5x0x1ComputedData.no-match-text" :no-data-text="tSelectx0x5x0x1ComputedData.no-data-text" :c-style="tSelectx0x5x0x1ComputedData.cStyle" @change="onchange1733973555614">` +
`</t-select>` +
`<t-tabs-base id="t-tabs-base-613b.f531589eb" class="scyzBaseInformation-t-tabs-base-0-5-0-2"  :data="tTabsBasex0x5x0x2ComputedData.data" :space="tTabsBasex0x5x0x2ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.tabSelect, componentPropBindingMap?.['t-tabs-base-613b.f531589eb']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x5x0x2ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x5x0x2ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x5x0x2ComputedData.alias" :c-style="tTabsBasex0x5x0x2ComputedData.cStyle" @tab-click="ontabClick1774593350140_0_0">` +
`</t-tabs-base>` +
`<t-date-picker v-if="state.tabSelect === 'month'" id="t-date-picker-d90a.f32e32cda" class="scyzBaseInformation-t-date-picker-0-5-0-3"  :placeholder="tDatePickerx0x5x0x3ComputedData.placeholder" :start-placeholder="tDatePickerx0x5x0x3ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x5x0x3ComputedData.endPlaceholder" :type="tDatePickerx0x5x0x3ComputedData.type" :clearable="tDatePickerx0x5x0x3ComputedData.clearable" :range-separator="tDatePickerx0x5x0x3ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeRange, componentPropBindingMap?.['t-date-picker-d90a.f32e32cda']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x5x0x3ComputedData.separator" :readonly="tDatePickerx0x5x0x3ComputedData.readonly" :editable="tDatePickerx0x5x0x3ComputedData.editable" :c-style="tDatePickerx0x5x0x3ComputedData.cStyle" @date-change="ondateChange1767779170144_0_0">` +
`</t-date-picker>` +
`<t-date-picker v-if="state.tabSelect === 'day'" id="t-date-picker-aa70.db490b406" class="scyzBaseInformation-t-date-picker-0-5-0-4"  :placeholder="tDatePickerx0x5x0x4ComputedData.placeholder" :start-placeholder="tDatePickerx0x5x0x4ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x5x0x4ComputedData.endPlaceholder" :type="tDatePickerx0x5x0x4ComputedData.type" :clearable="tDatePickerx0x5x0x4ComputedData.clearable" :range-separator="tDatePickerx0x5x0x4ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeRange, componentPropBindingMap?.['t-date-picker-aa70.db490b406']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x5x0x4ComputedData.separator" :readonly="tDatePickerx0x5x0x4ComputedData.readonly" :editable="tDatePickerx0x5x0x4ComputedData.editable" :c-style="tDatePickerx0x5x0x4ComputedData.cStyle" @date-change="ondateChange1774595987220_0_0">` +
`</t-date-picker>` +
`<t-date-picker v-if="state.tabSelect === 'hour'" id="t-date-picker-d452.1665bfaab" class="scyzBaseInformation-t-date-picker-0-5-0-5"  :placeholder="tDatePickerx0x5x0x5ComputedData.placeholder" :start-placeholder="tDatePickerx0x5x0x5ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x5x0x5ComputedData.endPlaceholder" :type="tDatePickerx0x5x0x5ComputedData.type" :clearable="tDatePickerx0x5x0x5ComputedData.clearable" :range-separator="tDatePickerx0x5x0x5ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeRange, componentPropBindingMap?.['t-date-picker-d452.1665bfaab']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x5x0x5ComputedData.separator" :readonly="tDatePickerx0x5x0x5ComputedData.readonly" :editable="tDatePickerx0x5x0x5ComputedData.editable" :c-style="tDatePickerx0x5x0x5ComputedData.cStyle" @date-change="ondateChange1774595992420_0_0">` +
`</t-date-picker>` +
`</t-col>` +
`<t-col id="t-col-5c12.21387b6cc" class="scyzBaseInformation-t-col-0-5-1"  :span="tColx0x5x1ComputedData.span" :offset="tColx0x5x1ComputedData.offset" :push="tColx0x5x1ComputedData.push" :pull="tColx0x5x1ComputedData.pull" :c-style="tColx0x5x1ComputedData.cStyle">` +
`<t-select id="t-select-6177.e3018cdf3" class="scyzBaseInformation-t-select-0-5-1-0"  :active-value="replaceCssVariables(filterData(state.currentPolluter, componentPropBindingMap?.['t-select-6177.e3018cdf3']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.polluteList, componentPropBindingMap?.['t-select-6177.e3018cdf3']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x5x1x0ComputedData.alias" :multiple="tSelectx0x5x1x0ComputedData.multiple" :placeholder="tSelectx0x5x1x0ComputedData.placeholder" :clearable="tSelectx0x5x1x0ComputedData.clearable" :disabled="tSelectx0x5x1x0ComputedData.disabled" :name="tSelectx0x5x1x0ComputedData.name" :autocomplete="tSelectx0x5x1x0ComputedData.autocomplete" :filterable="tSelectx0x5x1x0ComputedData.filterable" :no-match-text="tSelectx0x5x1x0ComputedData.no-match-text" :no-data-text="tSelectx0x5x1x0ComputedData.no-data-text" :c-style="tSelectx0x5x1x0ComputedData.cStyle" @change="onchange1774593825457_0_0">` +
`</t-select>` +
`</t-col>` +
`</t-row>` +
`<t-chart-line-single v-if="state.chartShape === 'line'" id="t-chart-line-single-66ab.046d9e183" class="scyzBaseInformation-t-chart-line-single-0-6"  :empty-img="replaceCssVariables(filterData(state.noDataImg, componentPropBindingMap?.['t-chart-line-single-66ab.046d9e183']['emptyImg'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tChartLineSinglex0x6ComputedData.cStyle" :show-item-bg="tChartLineSinglex0x6ComputedData.showItemBg" :options="tChartLineSinglex0x6ComputedData.options" :data="replaceCssVariables(filterData(state.chartList, componentPropBindingMap?.['t-chart-line-single-66ab.046d9e183']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :series-setting="tChartLineSinglex0x6ComputedData.seriesSetting" :line="componentState.tChartLineSinglex0x6.line">` +
`</t-chart-line-single>` +
`<t-text v-if="state.chartList.length !== 0" id="t-text-f8f0.bc97393c" class="scyzBaseInformation-t-text-0-7"  :label="replaceCssVariables(filterData(state.chartUint, componentPropBindingMap?.['t-text-f8f0.bc97393c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle">` +
`</t-text>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-chart-bar-simple-01a4.a8623db7c":{"attributeName":"tChartBarSimplex0x0","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]},"data":{"filters":[]},"seriesSetting":{"filters":[]}},"t-row-bed0.5ca83a488":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-b39c.b6c03321c":{"attributeName":"tTextx0x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-component-c019.99b6d840a":{"attributeName":"tComponentx0x2","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-62b3.48b14905c":{"attributeName":"tTextx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-0032.f5836da41":{"attributeName":"tListCardx0x4","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-row-3ae9.949fc1c3b":{"attributeName":"tRowx0x5","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-facf.ef4316657":{"attributeName":"tColx0x5x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-6063.4db73323":{"attributeName":"tTextx0x5x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-3fcb.c00f74209":{"attributeName":"tSelectx0x5x0x1","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-613b.f531589eb":{"attributeName":"tTabsBasex0x5x0x2","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-d90a.f32e32cda":{"attributeName":"tDatePickerx0x5x0x3","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-aa70.db490b406":{"attributeName":"tDatePickerx0x5x0x4","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-d452.1665bfaab":{"attributeName":"tDatePickerx0x5x0x5","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-5c12.21387b6cc":{"attributeName":"tColx0x5x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-select-6177.e3018cdf3":{"attributeName":"tSelectx0x5x1x0","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-line-single-66ab.046d9e183":{"attributeName":"tChartLineSinglex0x6","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"showItemBg":{"filters":[]},"options":{"filters":[]},"data":{"filters":[]},"seriesSetting":{"filters":[]}},"t-text-f8f0.bc97393c":{"attributeName":"tTextx0x7","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   treemapLabelFontSize: 12,
   chartShape: "line",
   currentPolluter: "",
   interfaceIdMap: {"minute":"3d169bcc5b5689b8f1af6a8921d112ad","hour":"5b5bc7ea00286f5ce06d67bda39ba161","day":"7f3f1c7281fe7c6cda733c3de4dfba76","month":"1b7e823ce200649fc587f56410446c03"},
   chartUint: "浓度（mg/L）",
   isShowchartUnit: true,
   chartList: [],
   dateType: "datetimerangehour",
   polluteList: [{"label":"总磷","value":"W21011","disabled":false},{"label":"流量","value":"E01203","disabled":false}],
   options: "",
   noDataImg: "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
   baseInfoData: [{"title":"所属区县","num":"-"},{"title":"养殖类型","num":"-"},{"title":"经度","num":"-"},{"title":"维度","num":"-"}],
   pointCode: "",
   monitorTime: "",
   timeRange: [],
   endTime: "",
   startTime: "",
   tabSelect: "hour",
   dateList: [{"label":"分钟","value":"minute"},{"label":"小时","value":"hour"},{"label":"日","value":"day"}],
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
tChartBarSimplex0x0: {
defaultStyle: {
            default: {"width":"100%","height":"calc(100% - 240px)","position":"unset","left":"5px","top":"241px"},
            
            },
bar: computed(() => activeChartTheme.value?.bar),
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"width":"100%","height":"calc(100% - 240px)","position":"unset","left":"5px","top":"241px"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"emptyImg":{"default":{"display":"none"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"grid":{"containLabel":true},"xAxis":{"axisLabel":{"color":"var(--business-text-avianize)","fontSize":state.treemapLabelFontSize},"axisLine":{"lineStyle":{"color":"var(--business-text-avianize)","type":"solid"}}},"yAxis":{"axisLabel":{"color":"var(--business-text-avianize)","fontSize":state.treemapLabelFontSize,"interval":"auto"},"axisLine":{"lineStyle":{"width":0}},"splitLine":{"lineStyle":{"color":"var(--skin-font-color-60)","type":"dashed"}}},"tooltip":{"textStyle":{"fontSize":state.treemapLabelFontSize}}})),
data:[],
seriesSetting:{"xAxisLabel":"MONITORING_TIME","data":[{"name":"浓度","dataKey":"value"}]}, 
 },
},
tRowx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"82px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"82px","position":"unset"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextx0x1x0: {
defaultStyle: {
            default: {"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"124.5px","left":"645px","textAlign":"right","fontSize":"var(--text-size-14)","position":"unset","marginRight":"50px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"124.5px","left":"645px","textAlign":"right","fontSize":"var(--text-size-14)","position":"unset","marginRight":"50px"}}}, 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"82px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"82px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"auto","height":"28px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"38px","top":"82px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"28px"},
            
            },
 default: { 
 
label:"水质监测信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"28px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"38px","top":"82px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"28px"}}}, 
 },
},
tListCardx0x4: {
defaultStyle: {
            default: {"width":"100%","height":"73px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"所属区县","num":"-"},{"title":"养殖类型","num":"-"},{"title":"经度","num":"-"},{"title":"维度","num":"-"}],
spacingX:2,
col:2,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"100%","height":"73px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible","display":"block"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--base-label-bg-color)","width":"30%","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--base-label-title-color)","fontSize":"var(--business-text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","height":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"numBox":{"default":{"backgroundColor":"var(--info-background)","width":"69.5%","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px","height":""}},"num":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--base-label-text-color)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"var(--text-size-14)"}}}, 
 },
},
tRowx0x5: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"130px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"130px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x5x0: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"space-between","alignItems":"center","gap":"auto"},
            
            },
 default: { 
 
span:21,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"space-between","alignItems":"center","gap":"auto"}},"emptyText":{"default":{"position":"absolute"}}}, 
 },
},
tTextx0x5x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"32px","color":"var(--business-white)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"174px","left":"0px","position":"unset","textAlign":"left","marginLeft":"0px","marginRight":"10px"},
            
            },
 default: { 
 
label:"污染物变化趋势",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"32px","color":"var(--business-white)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"174px","left":"0px","position":"unset","textAlign":"left","marginLeft":"0px","marginRight":"10px"}},"cardValue":{"default":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tSelectx0x5x0x1: {
defaultStyle: {
            default: {"width":"95px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal","marginRight":"15px"},
            
            },
 default: { 
 
activeValue:"line",
options:[{"label":"折线图","value":"line"},{"label":"柱状图","value":"bar"}],
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
cStyle:{"wrapper":{"default":{"width":"95px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal","marginRight":"15px"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tTabsBasex0x5x0x2: {
defaultStyle: {
            default: {"width":"auto","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"254px","top":"-122px","marginRight":"15px","min-width":"110px"},
            
            },
 default: { 
 
data:[{"label":"小时","value":"hour"},{"label":"日","value":"day"},{"label":"月","value":"month"}],
space:1,
selectedTabVal:"hour",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":false},
cStyle:{"wrapper":{"default":{"width":"auto","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"254px","top":"-122px","marginRight":"15px","min-width":"110px"}},"itemWrapper":{"default":{"width":"80px","height":"32px","fontSize":"14px","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px"}},"label":{"default":{"fontSize":"var(--text-size-14)","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","fontSize":"var(--text-size-14)"},"hover":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tDatePickerx0x5x0x3: {
defaultStyle: {
            default: {"width":"370px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择月份",
startPlaceholder:"开始月份",
endPlaceholder:"结束月份",
type:"monthrange",
clearable:true,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"370px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tDatePickerx0x5x0x4: {
defaultStyle: {
            default: {"width":"370px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择月份",
startPlaceholder:"开始月份",
endPlaceholder:"结束月份",
type:"daterange",
clearable:true,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"370px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tDatePickerx0x5x0x5: {
defaultStyle: {
            default: {"width":"370px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择月份",
startPlaceholder:"开始月份",
endPlaceholder:"结束月份",
type:"datetimerangehour",
clearable:true,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"370px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important","lineHeight":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-white) !important","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}}, 
 },
},
tColx0x5x1: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tSelectx0x5x1x0: {
defaultStyle: {
            default: {"width":"80px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},
            
            },
 default: { 
 
activeValue:"",
options:[{"label":"总磷","value":"W21011","disabled":false},{"label":"流量","value":"E01203","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"80px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tChartLineSinglex0x6: {
defaultStyle: {
            default: {"width":"100%","height":"calc(100% - 240px)","position":"unset","left":"0px","top":"244px"},
            
            },
line: computed(() => activeChartTheme.value?.line),
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
cStyle:{"wrapper":{"default":{"width":"100%","height":"calc(100% - 240px)","position":"unset","left":"0px","top":"244px"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","width":"auto","color":"var(--business-white)"}},"emptyImg":{"default":{"display":"none"}}},
showItemBg:false,
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"grid":{"containLabel":true,"left":"1%","bottom":"2%","top":"5%","right":"1%"},"legend":{"show":false},"xAxis":{"axisLine":{"lineStyle":{"type":"solid","color":"var(--business-text-avianize)"}},"axisLabel":{"color":"var(--business-text-avianize)","interval":"auto","fontSize":state.treemapLabelFontSize}},"yAxis":{"axisLabel":{"color":"var(--business-text-avianize)","show":true,"fontSize":state.treemapLabelFontSize},"axisLine":{"lineStyle":{"width":0}},"splitLine":{"lineStyle":{"color":"var(--skin-font-color-60)","type":"dashed"}}},"tooltip":{"textStyle":{"fontSize":state.treemapLabelFontSize}}})),
data:[],
seriesSetting:{"xAxisLabel":"MONITORING_TIME","data":[{"name":"浓度","dataKey":"value","style":{"label":{"show":false},"symbolSize":[10,10],"symbol":"circle"}}]}, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"auto","height":"32px","color":"var(--business-text-avianize)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"209px","left":"-18px","position":"unset","textAlign":"left","marginLeft":"20px","animationName":""},
            
            },
 default: { 
 
label:"浓度（mg/L）",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"32px","color":"var(--business-text-avianize)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"209px","left":"-18px","position":"unset","textAlign":"left","marginLeft":"20px","animationName":""}},"cardValue":{"default":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
});
const initPageData = () => {
	// 获取主题字号
	const initChartFontSize = () => {
	  state.treemapLabelFontSize = parseInt(getCssVariable('--business-text-size-12')) || 12
	}
	initChartFontSize()

state.currentPolluter = 'W21011'
state.pointCode = global.businessDialog.dialogParmas?.pointCode || '';
// state.pointCode = '350782A0000585'
apiRegistry.getBaseInfo.request();
getChartListData();
};
const setNoDataIcon = () => {
// 设置暂无数据图标
state.noDataImg= getCssVariable('--business-no-data-img');
};
const changeTime = (time) => {
state.timeRange = time || [];
state.startTime = time[0] || '';
state.endTime = time[1] || '';

if (state.tabSelect === 'hour') {
  apiRegistry.getLineData.request('5b5bc7ea00286f5ce06d67bda39ba161');
} else if (state.tabSelect === 'day') {
  apiRegistry.getLineData.request('7f3f1c7281fe7c6cda733c3de4dfba76');
} else if (state.tabSelect === 'month') {
  apiRegistry.getLineData.request('1b7e823ce200649fc587f56410446c03');
}
};
const handleDate = (date) => {
state.endTime = date
if(state.tabSelect === 'hour'){
  const endTime = date + ':00:00';
  state.startTime = getPrevTime(endTime, '48hour').slice(0, 13)
}else if(state.tabSelect === 'day'){
  const endTime = date + ' 00:00:00';
  state.startTime = getPrevTime(endTime, '30day').slice(0, 10)
}else if(state.tabSelect === 'month'){
  const endTime = date + '-01 00:00:00';
  state.startTime = getPrevTime(endTime, 'month').slice(0, 7)
}


state.timeRange = [state.startTime, state.endTime];


};
const getChartData = () => {

async function getData(){
  await apiRegistry.getLatestTime.request();
  await apiRegistry.getLineData.request('1b7e823ce200649fc587f56410446c03');
}

getData()
};
const changePolluter = () => {
if (state.currentPolluter === 'E01203') {
  state.chartUint = '浓度（m³/s）'
} else if (state.currentPolluter === 'W21011') {
  state.chartUint = '浓度（mg/L）'
}
// 获取下方图表数据
if (state.tabSelect === 'hour') {
  apiRegistry.getLineData.request('5b5bc7ea00286f5ce06d67bda39ba161');
} else if (state.tabSelect === 'day') {
  apiRegistry.getLineData.request('7f3f1c7281fe7c6cda733c3de4dfba76');
} else if (state.tabSelect === 'month') {
  apiRegistry.getLineData.request('1b7e823ce200649fc587f56410446c03');
}
};
const getChartListData = () => {
async function getData() {
  await apiRegistry.getLatestTime.request();
  if (state.tabSelect === 'hour') {
    await apiRegistry.getLineData.request('5b5bc7ea00286f5ce06d67bda39ba161');
  } else if (state.tabSelect === 'day') {
    await apiRegistry.getLineData.request('7f3f1c7281fe7c6cda733c3de4dfba76');
  } else if (state.tabSelect === 'month') {
    await apiRegistry.getLineData.request('1b7e823ce200649fc587f56410446c03');
  }
}

getData()
};
const ontabClick1774593350140_0_0 = (data) => {
// 设置变量值
state.tabSelect = data.value;
// 执行自定义方法
getChartListData();
};
const onchange1733973555614 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.chartShape = value;
};
const ondateChange1767779170144_0_0 = (data) => {
// 执行自定义方法
changeTime(data);
};
const onchange1774593825457_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.currentPolluter = value;
// 执行自定义方法
changePolluter();
};
const ondateChange1774595987220_0_0 = (data) => {
// 执行自定义方法
changeTime(data);
};
const ondateChange1774595992420_0_0 = (data) => {
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
 getBaseInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"STATION_MN":"state.pointCode","interfaceId":"59bee8b16de5a9e1845b05178de9215c"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"STATION_MN":state.pointCode,"interfaceId":"59bee8b16de5a9e1845b05178de9215c"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"STATION_MN":state.pointCode,"interfaceId":"59bee8b16de5a9e1845b05178de9215c"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.baseInfoData = [
    {
      "title": "所属区县",
      "num": data?.REGION_NAME || "-"
    },
    {
      "title": "养殖类型",
      "num": data?.CATEGORY || "-"
    },
    {
      "title": "经度",
      "num": data?.LONGITUDE || "-"
    },
    {
      "title": "纬度",
      "num": data?.LATITUDE || "-"
    }
  ]
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
 getLatestTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"DATE_TYPE":"state.tabSelect","STATION_MN":"state.pointCode","interfaceId":"a2925b5ae6e658af5741abc9adb63a02"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DATE_TYPE":state.tabSelect,"STATION_MN":state.pointCode,"interfaceId":"a2925b5ae6e658af5741abc9adb63a02"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"DATE_TYPE":state.tabSelect,"STATION_MN":state.pointCode,"interfaceId":"a2925b5ae6e658af5741abc9adb63a02"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  handleDate(data.MONITORING_TIME);
} else {
  state.startTime = '';
  state.endTime = '';
  state.timeRange = [];
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
 getLineData: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"interfaceId","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"mnLMc9opx9"}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"STATION_MN":"state.pointCode","START_TIME":"state.startTime","END_TIME":"state.endTime","interfaceId":"this.interfaceId"}},
              request: function (interfaceId, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"STATION_MN":state.pointCode,"START_TIME":state.startTime,"END_TIME":state.endTime,"interfaceId":interfaceId},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"STATION_MN":state.pointCode,"START_TIME":state.startTime,"END_TIME":state.endTime,"interfaceId":interfaceId});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLineData'] = res.data;
                
     
const { data, head } = res.data;

console.log('折线图', res);

if (head?.statusCode === '200' && data.length) {
  state.chartList = data.map(item => {
    return {
      ...item,
      value: item[state.currentPolluter] || ''
    }
  })
} else {
  state.chartList = []

  // 默认测试数据
  // const getDefaultChartList = () => {
  //   const pointCount = 6
  //   const labelPrefix = state.tabSelect === 'hour' ? 'H' : state.tabSelect === 'day' ? 'D' : 'M'
  //   return Array.from({
  //     length: pointCount
  //   }, (_, idx) => ({
  //     MONITORING_TIME: `${labelPrefix}${idx + 1}`,
  //     value: 0
  //   }))
  // }
  // state.chartList = getDefaultChartList()
}
console.log(state.chartList)
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
                            setPageScale('t-l-c-scyzBaseInformation', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setNoDataIcon();
// 执行自定义方法
initPageData();
onMounted(() => {
setPageScale('t-l-c-scyzBaseInformation', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tChartBarSimplex0x0ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartBarSimplex0x0.default, componentState.tChartBarSimplex0x0?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tTextx0x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x1x0.default, componentState.tTextx0x1x0?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tListCardx0x4ComputedData = computed(() => _.merge({}, componentState.tListCardx0x4.default, componentState.tListCardx0x4?.[state.screenSize]));

 const tRowx0x5ComputedData = computed(() => _.merge({}, componentState.tRowx0x5.default, componentState.tRowx0x5?.[state.screenSize]));

 const tColx0x5x0ComputedData = computed(() => _.merge({}, componentState.tColx0x5x0.default, componentState.tColx0x5x0?.[state.screenSize]));

 const tTextx0x5x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x5x0x0.default, componentState.tTextx0x5x0x0?.[state.screenSize]));

 const tSelectx0x5x0x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x5x0x1.default, componentState.tSelectx0x5x0x1?.[state.screenSize]));

 const tTabsBasex0x5x0x2ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x5x0x2.default, componentState.tTabsBasex0x5x0x2?.[state.screenSize]));

 const tDatePickerx0x5x0x3ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x5x0x3.default, componentState.tDatePickerx0x5x0x3?.[state.screenSize]));

 const tDatePickerx0x5x0x4ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x5x0x4.default, componentState.tDatePickerx0x5x0x4?.[state.screenSize]));

 const tDatePickerx0x5x0x5ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x5x0x5.default, componentState.tDatePickerx0x5x0x5?.[state.screenSize]));

 const tColx0x5x1ComputedData = computed(() => _.merge({}, componentState.tColx0x5x1.default, componentState.tColx0x5x1?.[state.screenSize]));

 const tSelectx0x5x1x0ComputedData = computed(() => _.merge({}, componentState.tSelectx0x5x1x0.default, componentState.tSelectx0x5x1x0?.[state.screenSize]));

 const tChartLineSinglex0x6ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartLineSinglex0x6.default, componentState.tChartLineSinglex0x6?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

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
tChartBarSimplex0x0ComputedData,
tRowx0x1ComputedData,
tTextx0x1x0ComputedData,
tComponentx0x2ComputedData,
tTextx0x3ComputedData,
tListCardx0x4ComputedData,
tRowx0x5ComputedData,
tColx0x5x0ComputedData,
tTextx0x5x0x0ComputedData,
tSelectx0x5x0x1ComputedData,
tTabsBasex0x5x0x2ComputedData,
tDatePickerx0x5x0x3ComputedData,
tDatePickerx0x5x0x4ComputedData,
tDatePickerx0x5x0x5ComputedData,
tColx0x5x1ComputedData,
tSelectx0x5x1x0ComputedData,
tChartLineSinglex0x6ComputedData,
tTextx0x7ComputedData,
onchange1733973555614,
ontabClick1774593350140_0_0,
ondateChange1767779170144_0_0,
ondateChange1774595987220_0_0,
ondateChange1774595992420_0_0,
onchange1774593825457_0_0,
};
},
};