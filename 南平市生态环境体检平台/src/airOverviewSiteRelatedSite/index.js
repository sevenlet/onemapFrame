window.airOverviewSiteRelatedSiteComponent = {
template: 
`<div id="t-l-c-airOverviewSiteRelatedSite" class="t-l-c-airOverviewSiteRelatedSite" >` +
`<t-chart-design id="t-chart-design-5ebe.1534fff6b" class="airOverviewSiteRelatedSite-t-chart-design-0-0"  :empty-img="tChartDesignx0x0ComputedData.emptyImg" :c-style="tChartDesignx0x0ComputedData.cStyle" :options="replaceCssVariables(filterData(state.options, componentPropBindingMap?.['t-chart-design-5ebe.1534fff6b']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-chart-design>` +
`<t-row id="t-row-eb1d.3a5a2744d" class="airOverviewSiteRelatedSite-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align">` +
`<t-col id="t-col-373b.7113ed191" class="airOverviewSiteRelatedSite-t-col-0-1-0"  :span="tColx0x1x0ComputedData.span" :offset="tColx0x1x0ComputedData.offset" :push="tColx0x1x0ComputedData.push" :pull="tColx0x1x0ComputedData.pull" :c-style="tColx0x1x0ComputedData.cStyle">` +
`<t-select id="t-select-c054.ba703a47e" class="airOverviewSiteRelatedSite-t-select-0-1-0-0"  :active-value="replaceCssVariables(filterData(state.polluteType, componentPropBindingMap?.['t-select-c054.ba703a47e']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.pullutionList, componentPropBindingMap?.['t-select-c054.ba703a47e']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x1x0x0ComputedData.alias" :multiple="tSelectx0x1x0x0ComputedData.multiple" :placeholder="tSelectx0x1x0x0ComputedData.placeholder" :clearable="tSelectx0x1x0x0ComputedData.clearable" :disabled="tSelectx0x1x0x0ComputedData.disabled" :name="tSelectx0x1x0x0ComputedData.name" :autocomplete="tSelectx0x1x0x0ComputedData.autocomplete" :filterable="tSelectx0x1x0x0ComputedData.filterable" :no-match-text="tSelectx0x1x0x0ComputedData.no-match-text" :no-data-text="tSelectx0x1x0x0ComputedData.no-data-text" :c-style="tSelectx0x1x0x0ComputedData.cStyle" @change="onchange1773909378454_0_0">` +
`</t-select>` +
`<t-tree id="t-tree-35a9.725a33b38" class="airOverviewSiteRelatedSite-t-tree-0-1-0-1"  :data="replaceCssVariables(filterData(state.pointTreeList, componentPropBindingMap?.['t-tree-35a9.725a33b38']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :show-all-nodes="tTreex0x1x0x1ComputedData.showAllNodes" :checked-nodes="replaceCssVariables(filterData(state.pointSelectList, componentPropBindingMap?.['t-tree-35a9.725a33b38']['checkedNodes'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :border-color="tTreex0x1x0x1ComputedData.borderColor" :is-checkbox="tTreex0x1x0x1ComputedData.isCheckbox" :empty-text="tTreex0x1x0x1ComputedData.emptyText" :node-key="tTreex0x1x0x1ComputedData.nodeKey" :props="tTreex0x1x0x1ComputedData.props" :effect="tTreex0x1x0x1ComputedData.effect" :placement="tTreex0x1x0x1ComputedData.placement" :show-after="tTreex0x1x0x1ComputedData.showAfter" :c-style="tTreex0x1x0x1ComputedData.cStyle" @data-change="ondataChange1773889836091_0_0" @check="oncheck1773889836091_0_1">` +
`</t-tree>` +
`</t-col>` +
`<t-col id="t-col-d451.75c589966" class="airOverviewSiteRelatedSite-t-col-0-1-1"  :span="tColx0x1x1ComputedData.span" :offset="tColx0x1x1ComputedData.offset" :push="tColx0x1x1ComputedData.push" :pull="tColx0x1x1ComputedData.pull" :c-style="tColx0x1x1ComputedData.cStyle">` +
`<t-tabs id="t-tabs-7c4b.36c0540f1" class="airOverviewSiteRelatedSite-t-tabs-0-1-1-0"  :alias="tTabsx0x1x1x0ComputedData.alias" :data="replaceCssVariables(filterData(state.timeTypeList, componentPropBindingMap?.['t-tabs-7c4b.36c0540f1']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active-tab="replaceCssVariables(filterData(state.timeType, componentPropBindingMap?.['t-tabs-7c4b.36c0540f1']['activeTab'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :tab-position-extend="tTabsx0x1x1x0ComputedData.tabPositionExtend" :stretch="tTabsx0x1x1x0ComputedData.stretch" :c-style="tTabsx0x1x1x0ComputedData.cStyle" @tab-click="ontabClick1736492237255">` +
`</t-tabs>` +
`</t-col>` +
`<t-col id="t-col-3c41.e99c36a4f" class="airOverviewSiteRelatedSite-t-col-0-1-2"  :span="tColx0x1x2ComputedData.span" :offset="tColx0x1x2ComputedData.offset" :push="tColx0x1x2ComputedData.push" :pull="tColx0x1x2ComputedData.pull" :c-style="tColx0x1x2ComputedData.cStyle">` +
`<t-date-picker v-if="state.timeType === '5minute'" id="t-date-picker-4e84.808cdb2dd" class="airOverviewSiteRelatedSite-t-date-picker-0-1-2-0"  :placeholder="tDatePickerx0x1x2x0ComputedData.placeholder" :start-placeholder="tDatePickerx0x1x2x0ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x1x2x0ComputedData.endPlaceholder" :type="tDatePickerx0x1x2x0ComputedData.type" :clearable="tDatePickerx0x1x2x0ComputedData.clearable" :range-separator="tDatePickerx0x1x2x0ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeValue, componentPropBindingMap?.['t-date-picker-4e84.808cdb2dd']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x1x2x0ComputedData.separator" :readonly="tDatePickerx0x1x2x0ComputedData.readonly" :editable="tDatePickerx0x1x2x0ComputedData.editable" :c-style="tDatePickerx0x1x2x0ComputedData.cStyle" :is-disabled-front="tDatePickerx0x1x2x0ComputedData.isDisabledFront" :disabled-date="replaceCssVariables(filterData(state.maxTimeValue, componentPropBindingMap?.['t-date-picker-4e84.808cdb2dd']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @date-change="ondateChange1766735979456_0_0">` +
`</t-date-picker>` +
`<t-date-picker v-if="state.timeType === 'hour'" id="t-date-picker-c174.45d4e20dc" class="airOverviewSiteRelatedSite-t-date-picker-0-1-2-1"  :placeholder="tDatePickerx0x1x2x1ComputedData.placeholder" :start-placeholder="tDatePickerx0x1x2x1ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x1x2x1ComputedData.endPlaceholder" :type="tDatePickerx0x1x2x1ComputedData.type" :clearable="tDatePickerx0x1x2x1ComputedData.clearable" :range-separator="tDatePickerx0x1x2x1ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeValue, componentPropBindingMap?.['t-date-picker-c174.45d4e20dc']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x1x2x1ComputedData.separator" :readonly="tDatePickerx0x1x2x1ComputedData.readonly" :editable="tDatePickerx0x1x2x1ComputedData.editable" :c-style="tDatePickerx0x1x2x1ComputedData.cStyle" :is-disabled-front="tDatePickerx0x1x2x1ComputedData.isDisabledFront" :disabled-date="replaceCssVariables(filterData(state.maxTimeValue, componentPropBindingMap?.['t-date-picker-c174.45d4e20dc']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @date-change="ondateChange1735011612852">` +
`</t-date-picker>` +
`<t-date-picker v-if="state.timeType === 'day'" id="t-date-picker-d12b.d132ce67b" class="airOverviewSiteRelatedSite-t-date-picker-0-1-2-2"  :placeholder="tDatePickerx0x1x2x2ComputedData.placeholder" :start-placeholder="tDatePickerx0x1x2x2ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x1x2x2ComputedData.endPlaceholder" :type="tDatePickerx0x1x2x2ComputedData.type" :clearable="tDatePickerx0x1x2x2ComputedData.clearable" :range-separator="tDatePickerx0x1x2x2ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeValue, componentPropBindingMap?.['t-date-picker-d12b.d132ce67b']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x1x2x2ComputedData.separator" :readonly="tDatePickerx0x1x2x2ComputedData.readonly" :editable="tDatePickerx0x1x2x2ComputedData.editable" :c-style="tDatePickerx0x1x2x2ComputedData.cStyle" :is-disabled-front="tDatePickerx0x1x2x2ComputedData.isDisabledFront" :disabled-date="replaceCssVariables(filterData(state.maxTimeValue, componentPropBindingMap?.['t-date-picker-d12b.d132ce67b']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @date-change="ondateChange1736501207070_0_0">` +
`</t-date-picker>` +
`</t-col>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-chart-design-5ebe.1534fff6b":{"attributeName":"tChartDesignx0x0","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-row-eb1d.3a5a2744d":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-373b.7113ed191":{"attributeName":"tColx0x1x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-select-c054.ba703a47e":{"attributeName":"tSelectx0x1x0x0","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-tree-35a9.725a33b38":{"attributeName":"tTreex0x1x0x1","data":{"filters":[]},"showAllNodes":{"filters":[]},"checkedNodes":{"filters":[]},"borderColor":{"filters":[]},"isCheckbox":{"filters":[]},"emptyText":{"filters":[]},"nodeKey":{"filters":[]},"props":{"filters":[]},"effect":{"filters":[]},"placement":{"filters":[]},"showAfter":{"filters":[]},"cStyle":{"filters":[]}},"t-col-d451.75c589966":{"attributeName":"tColx0x1x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-7c4b.36c0540f1":{"attributeName":"tTabsx0x1x1x0","alias":{"filters":[]},"data":{"filters":[]},"activeTab":{"filters":[]},"tabPositionExtend":{"filters":[]},"stretch":{"filters":[]},"cStyle":{"filters":[]}},"t-col-3c41.e99c36a4f":{"attributeName":"tColx0x1x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-4e84.808cdb2dd":{"attributeName":"tDatePickerx0x1x2x0","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-date-picker-c174.45d4e20dc":{"attributeName":"tDatePickerx0x1x2x1","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-date-picker-d12b.d132ce67b":{"attributeName":"tDatePickerx0x1x2x2","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}}};
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
   pointSourceList: [],
   selectPoints: "",
   tempPointSelectList: [],
   timeTypeList: [{"label":"小时","name":"hour"},{"label":"日","name":"day"}],
   pullutionList: [{"label":"AQI","value":"AQI"},{"label":"PM₂.₅","value":"PM25"},{"label":"PM₁₀","value":"PM10"},{"label":"SO₂","value":"SO2"},{"label":"NO₂","value":"NO2"},{"label":"CO","value":"CO"},{"label":"O₃","value":"O3"},{"label":"O₃-8h","value":"O3_8"}],
   DISTRICT_CODE: "",
   pointType: "",
   timeType: "",
   maxTimeValue: "",
   pointCode: "",
   yMaxValue: "",
   maxValue: "100",
   END_TIME: "",
   START_TIME: "",
   timeValue: [],
   echartsData: [],
   polluteType: "AQI",
   unit: "",
   relateData: [{"monitortime":"16日16时","city1":"26","city2":"31","city3":"32","city4":"5","city5":"49","city6":"60","city7":"42","city8":"129","city9":"60"},{"monitortime":"16日17时","city1":"29","city2":"30","city3":"12","city4":"5","city5":"5","city6":"47","city7":"60","city8":"65","city9":"60"},{"monitortime":"16日18时","city1":"29","city2":"31","city3":"32","city4":"5","city5":"5","city6":"53","city7":"60","city8":"45","city9":"60"},{"monitortime":"16日19时","city1":"40","city2":"47","city3":"34","city4":"5","city5":"6","city6":"81","city7":"60","city8":"23","city9":"60"},{"monitortime":"16日20时","city1":"16","city2":"75","city3":"54","city4":"5","city5":"6","city6":"82","city7":"60","city8":"21","city9":"60"}],
   options: {},
   yAxisData: [{"name":"广州市","dataKey":"city1","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"深圳市","dataKey":"city2","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"珠海市","dataKey":"city3","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"佛山市","dataKey":"city4","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"江门市","dataKey":"city5","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"肇庆市","dataKey":"city6","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"惠州市","dataKey":"city7","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"东菀市","dataKey":"city8","style":{"lineStyle":{"width":1},"symbol":"none"}},{"name":"中山市","dataKey":"city9","style":{"lineStyle":{"width":1},"symbol":"none"}}],
   pointTreeList: [],
   pointSelectList: [],
   type: "province",
   taskTypeData: [],
   taskCode: "",
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
tChartDesignx0x0: {
defaultStyle: {
            default: {"height":"calc(100% - 39px)","width":"100%","position":"unset","left":"0px","top":"39px"},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"calc(100% - 39px)","width":"100%","position":"unset","left":"0px","top":"39px"}},"emptyText":{"default":{"fontSize":"14px","color":"var(--business-no-data-color)"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
tRowx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"0px","gap":"auto"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"0px","gap":"auto"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x1x0: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"space-between","alignItems":"center","gap":"auto"},
            
            },
 default: { 
 
span:10,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"space-between","alignItems":"center","gap":"auto"}}}, 
 },
},
tSelectx0x1x0x0: {
defaultStyle: {
            default: {"width":"100px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:"AQI",
options:[{"label":"AQI","value":"AQI"},{"label":"PM₂.₅","value":"PM25"},{"label":"PM₁₀","value":"PM10"},{"label":"SO₂","value":"SO2"},{"label":"NO₂","value":"NO2"},{"label":"CO","value":"CO"},{"label":"O₃","value":"O3"},{"label":"O₃-8h","value":"O3_8"}],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:false,
placeholder:"",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"100px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tTreex0x1x0x1: {
defaultStyle: {
            default: {"width":"200px","height":"32px","backgroundColor":"var(--business-show-bg30)","color":"var(--business-white)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","max-height":"none","overflow":"visible","animationName":"","position":"unset","left":"335px","top":"45px","fontSize":"var(--business-text-size-14)","min-height":"32px"},
            
            },
 default: { 
 
data:[],
showAllNodes:false,
checkedNodes:[],
borderColor:"",
isCheckbox:true,
emptyText:"暂无数据",
nodeKey:"id",
props:{"label":"label","children":"children","disabled":"disabled"},
effect:"dark",
placement:"right",
showAfter:800,
cStyle:{"wrapper":{"default":{"width":"200px","height":"32px","backgroundColor":"var(--business-show-bg30)","color":"var(--business-white)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","max-height":"none","overflow":"visible","animationName":"","position":"unset","left":"335px","top":"45px","fontSize":"var(--business-text-size-14)","min-height":"32px"}},"searchWrapper":{"default":{"width":"362px","height":"auto","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","top":"0","position":"static","fontSize":"var(--business-text-size-14)"}},"contentWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","color":"var(--business-white)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","height":"auto","width":"377px","overflow":"auto","max-height":"600px"}},"nodeText":{"default":{"color":"var(--business-white)","backgroundColor":"","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-theme)"}},"treeNodeWrapper":{"hover":{"backgroundColor":"var(--business-show-bg15) !important","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","color":"var(--business-theme)"},"active":{"backgroundColor":"var(--business-show-bg30) !important"},"default":{"backgroundColor":"var(--business-dialog-bg) !important"}},"checkBoxWrapper":{"default":{"backgroundColor":"var(--left-menu-checkbox-border)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderLeft":"1px solid rgba(1,120,128,1)","borderTop":"1px solid rgba(1,120,128,1)","borderRight":"1px solid rgba(1,120,128,1)","borderBottom":"1px solid rgba(1,120,128,1)"},"active":{"backgroundColor":"var(--left-menu-checkbox-bg)"}},"dataEchoWrapper":{"default":{"borderLeft":"0px solid rgb(23,62,228)","borderTop":"0px solid rgb(23,62,228)","borderRight":"0px solid rgb(23,62,228)","borderBottom":"0px solid rgb(23,62,228)","backgroundColor":"","paddingLeft":"8px"}},"placeholder":{"default":{"color":"var(--business-white)","backgroundColor":"","fontSize":"var(--business-text-size-14)"}},"treeConWrapper":{"default":{"maxHeight":"500px","minHeight":"200px","backgroundColor":"var(--business-dialog-bg)"}},"controlButton":{"default":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"nodeIconWrapper":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundColor":""}}}, 
 },
},
tColx0x1x1: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:3,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tTabsx0x1x1x0: {
defaultStyle: {
            default: {"width":"115px","height":"20px","top":"10px","left":"385px","position":"unset","animationName":""},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[{"label":"小时","name":"hour"},{"label":"日","name":"day"}],
activeTab:"",
tabPositionExtend:"top-start",
stretch:true,
cStyle:{"wrapper":{"default":{"width":"115px","height":"20px","top":"10px","left":"385px","position":"unset","animationName":""}},"itemWrapper":{"default":{"color":"var(--business-text-avianize)","fontSize":"14px","borderLeft":"1px solid var(--business-text-avianize)","marginLeft":"-1px","width":"auto","paddingLeft":"0px","paddingRight":"0px"},"active":{"backgroundColor":"rgba(23, 62, 228, 0)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)"}},"itemActiveBorder":{"default":{"display":"none"}},"itemLabel":{"default":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tColx0x1x2: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","gap":"auto"},
            
            },
 default: { 
 
span:10,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","gap":"auto"}}}, 
 },
},
tDatePickerx0x1x2x0: {
defaultStyle: {
            default: {"width":"385px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerangeminute",
clearable:false,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"385px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important","lineHeight":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-white) !important","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tDatePickerx0x1x2x1: {
defaultStyle: {
            default: {"width":"320px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"320px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important","lineHeight":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-white) !important","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tDatePickerx0x1x2x2: {
defaultStyle: {
            default: {"width":"320px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"daterange",
clearable:false,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"320px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important","lineHeight":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-white) !important","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
});
const setOptions = () => {

  const colorList = [
    {
      bgColor: "rgb(6, 255, 97)",
      borderColor: "rgba(6, 255, 97,.2)",
    },
    {
      bgColor: "rgb(0, 213, 255)",
      borderColor: "rgba(0, 213, 255,.2)",
    },
    {
      bgColor: "rgb(116, 108, 254)",
      borderColor: "rgba(116, 108, 254,.2)",
    },
    {
      bgColor: "rgb(255, 216, 120)",
      borderColor: "rgba(255, 216, 120,.2)",
    },
    {
      bgColor: "rgb(173, 166, 255)",
      borderColor: "rgba(173, 166, 255, .2)",
    },
    {
      bgColor: "rgb(255, 133, 120)",
      borderColor: "rgba(255, 133, 120, 1)",
    },
    {
      bgColor: "rgb(9, 153, 255)",
      borderColor: "rgba(9, 153, 255, .2)",
    },
    {
      bgColor: "rgb(255, 81, 232)",
      borderColor: "rgba(255, 81, 232, .2)",
    },
    {
      bgColor: "rgb(63, 255, 242)",
      borderColor: "rgba(63, 255, 242, .2)",
    },
    {
      bgColor: "rgb(220,105,170)",
      borderColor: "rgba(220,105,170,.2)",
    },
  ];
  
  // 折线数据（name、data）
  const data = [];
  
  // 图例数据
  let lengData = [];
  // x轴数据
  let xData = [];
  // 如果接口返回的折线图有数据
  if (state.echartsData?.length) {
    Object.keys(state.echartsData[0]).forEach((e) => {
      if ((e !== 'MONITORTIME') && (e !== 'STANDART') && (e !== 'MONITORTIME_NAME')) {
        lengData.push(e);
      }
    });
  
    lengData.forEach((item) => {
      data.push({
        name: item,
        data: [],
      })
    })
  
    state.echartsData.forEach(item => {
      Object.keys(item).forEach((e) => {
        data.forEach(el => {
          if (el.name === e) {
            el.data.push(item[e]);
          }
        })
      });
    })
  
    // x轴数据
    xData = state.echartsData.map((item) => item.MONITORTIME);
  }
  
  
  let series = [];
  if (data.length) {
  
    data.forEach((item) => {
      series.push({
        name: item.name,
        type: 'line',
        data: item.data,
        smooth: true,
        symbol: 'none',
        // yAxisIndex: item.name === '均值' ? 1 : 0,
      })
    })
  
    data.forEach((item) => {
      item.maxValue = Math.max(Number(...item.data))
    })
  }
  
  const arrMax = data.map((item) => item.maxValue);
  
  // console.log(data, 'data')
  // 存储最大值
  let maxValueNew = 0;
  if (arrMax.length) {
    maxValueNew = Math.max(Number(...arrMax))
  }
  
  console.log(maxValueNew, 'maxValueNew')
  
  
  // 标记线
  if (series.length) {
    series[0].markLine = {
      data: [
        {
          yAxis: state.maxValue, // 限值
          label: {
            position: 'end',
            // position: 'start',
            color: 'rgba(255, 43, 43, 1)',
            // show: state.polluteType === 'AQI',
          },
          lineStyle: {
            color: 'rgba(255, 43, 43, 1)',
            type: 'dashed',
            cap: 'round',
            // width: state.polluteType === 'AQI' ? 1 : 0,
          }
        }
      ],
      label: {
        distance: [20, 8]
      },
      symbol: ['none', 'none'], // 第一个是起点图标，第二个是终点图标
    }
  }
  
  state.options = {
    "dataZoom": [
      {
        "type": "slider",
        "height": 10,
  
        xAxisIndex: [
          0,
          1,
          2
        ], // 控制所有三个x轴
        textStyle: {
          color: 'var(--skin-font-color)'
        }
      },
      {
        type: 'inside', // 内置缩放，支持鼠标滚轮缩放
        xAxisIndex: [
          0,
          1,
          2
        ], // 控制所有三个x轴
      }
    ],
    // legend: {
    //   show: true,
    //   icon: 'roundRect',
    //   itemWidth: 16,
    //   itemHeight: 16,
    //   textStyle: {
    //     color: "rgba(255, 255, 255, 1)",
    //     fontSize: 12,
    //     height: 8,
    //     rich: {
    //       a: {
    //         verticalAlign: "center"
    //       }
    //     }
    //   }
    // },
    legend: {
      top: 10,
      show: true,
      type: 'scroll',
      width: '50%',
      icon: 'roundRect',
      pageButtonItemGap: 5, // 翻页按钮间距
      pageButtonGap: 10, // 翻页按钮与图例的间距
      pageButtonPosition: 'end', // 翻页按钮位置
      pageIconColor: 'var(--skin-font-color)', // 翻页按钮颜色
      pageIconInactiveColor: 'var(--skin-font-color-40)', // 翻页按钮禁用颜色
      pageIconSize: 12, // 翻页按钮大小
      pageTextStyle: {
        color: 'var(--skin-font-color)'
      },
      itemWidth: 16,
      itemHeight: 16,
      textStyle: {
        color: 'var(--skin-font-color)',
        fontSize: global.publicFontSizeConfig.fontSize14,
        height: 10,
        rich: {
          a: {
            verticalAlign: 'center'
          }
        }
      }
    },
    grid: {
      bottom: "13%",
      left: "5%",
      right: "4% "
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: "#008acd",
          width: "1"
        },
        crossStyle: {
          color: "#008acd",
          width: "1"
        }
      },
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      borderColor: "rgba(255, 255, 255, 0.5)",
      textStyle: {
         color: "rgba(255, 255, 255, 1)",
         fontSize: global.publicFontSizeConfig.fontSize14
      },
      confine: true,
      // appendToBody: true
      // extraCssText: 'max-height: 300px; overflow-y: auto; white-space: normal;'
    },
    yAxis: [
      {
        type: 'value',
        name: state.unit,
        // max: maxValueNew > state.maxValue ? maxValueNew : state.maxValue,
  
        // 自定义主题-开始
        axisLine: {
          show: false,
          lineStyle: {
            type: "solid",
            color: 'var(--business-chart-line-y-axis)'

          }
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: 'var(--business-chart-line-split)'
          }
        },
        axisLabel: {
          show: true,
                       color: 'var(--skin-font-color-80)',
          fontSize: global.publicFontSizeConfig.fontSize14
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: 'var(--business-chart-line-split)'
          }
        },
        splitArea: {
          show: false,
          areaStyle: {
            color: [
              "rgba(250,250,250,0.2)",
              "rgba(210,219,238,0.2)"
            ]
          }
        },
        nameTextStyle: {
           color: 'var(--skin-font-color-60)',
          fontSize: global.publicFontSizeConfig.fontSize14
        },
      },
    ],
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: xData, // 日期
      // 自定义主题-开始
      axisLine: {
        show: true,
        lineStyle: {
          type: "solid",
          color: 'var(--business-chart-line-x-axis)'
        }
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: 'var(--business-chart-line-split)'
        }
      },
      axisLabel: {
        show: true,
          color: 'var(--skin-font-color-80)',
        fontSize: global.publicFontSizeConfig.fontSize14,
        interval: 0,
        // rotate: 30, // 将标签倾斜 45 度
        margin: 10,
        interval: 'auto'
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: [
            "rgba(202,202,202,0.3)"
          ]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: [
            "rgba(250,250,250,0.3)",
            "rgba(200,200,200,0.3)"
          ]
        }
      },
      nameTextStyle: {
         color: 'var(--skin-font-color-60)',
        fontSize: global.publicFontSizeConfig.fontSize14
      }
      // 自定义主题-结束
    },
    color: colorList.map((item) => item.bgColor),
    series: series
  }
  
  console.log(state.options)
  
  
};
const setUnit = () => {
// 上标
const threeSup = convertCharacter('上标')[0].split(' ')[3] || '3';

state.unit = state.polluteType === 'AQI' ? '' : state.polluteType === 'CO' ? 'mg/m' + threeSup : 'μg/m' + threeSup;
};
const initParams = () => {
// 处理参数
state.pointCode = global.businessDialog.dialogParmas.POINT_CODE;
state.pointType = global.businessDialog.dialogParmas.POINT_TYPE;
state.DISTRICT_CODE = global.businessDialog.dialogParmas.DISTRICT_CODE;
const isMinute = state.airPointState?.isMinute ?? false
if (isMinute) {
  state.timeTypeList = [
    {
      "label": "五分钟",
      "name": "5minute"
    },
    {
      "label": "小时",
      "name": "hour"
    },
    {
      "label": "日",
      "name": "day"
    }
  ]
  state.timeType = '5minute'
  state.END_TIME = global.airGlobalVariables.realTimeAlarm.dateValue
  const endTime = state.END_TIME + ':00'
  state.START_TIME = getPrevTime(endTime, 'minute').slice(0, 16)
  state.timeValue = [state.START_TIME, state.END_TIME];
} else {
  state.timeTypeList = [
    {
      "label": "小时",
      "name": "hour"
    },
    {
      "label": "日",
      "name": "day"
    }
  ]
  const rangeDate = getForwardTimeList(global.air.timeValue, global.air.timeType, global.air.timeType === 'hour' ? 47 : 29);
  state.START_TIME = rangeDate[0];
  state.END_TIME = rangeDate[rangeDate.length - 1];
  state.timeValue = [state.START_TIME, state.END_TIME];
  state.timeType = global.air.timeType
}
changePollutionList();
// 获取数据
async function getPointData(){
  // 获取站点数据
  await apiRegistry.getPointList.request();
  // 获取列表数据
  getData()
}
getPointData()
};
const getData = () => {
async function getData(){
 if(state.timeType === 'hour' || state.timeType === '5minute'){
  await apiRegistry.getHourData.request();
 }else if(state.timeType === 'day'){
  await apiRegistry.getDayData.request();
 }
}
getData()
};
const changePollutionList = () => {
if(state.timeType === 'hour' || state.timeType === '5minute' ){
  state.pullutionList = [
  {
    "label": "AQI",
    "value": "AQI"
  },
  {
    "label": "PM₂.₅",
    "value": "PM25"
  },
  {
    "label": "PM₁₀",
    "value": "PM10"
  },
  {
    "label": "SO₂",
    "value": "SO2"
  },
  {
    "label": "NO₂",
    "value": "NO2"
  },
  {
    "label": "CO",
    "value": "CO"
  },
  {
    "label": "O₃",
    "value": "O3"
  }
]
  state.polluteType = state.polluteType === 'O3_8' ? 'O3' : state.polluteType
}else if(state.timeType === 'day'){
  state.pullutionList = [
  {
    "label": "AQI",
    "value": "AQI"
  },
  {
    "label": "PM₂.₅",
    "value": "PM25"
  },
  {
    "label": "PM₁₀",
    "value": "PM10"
  },
  {
    "label": "SO₂",
    "value": "SO2"
  },
  {
    "label": "NO₂",
    "value": "NO2"
  },
  {
    "label": "CO",
    "value": "CO"
  },
  {
    "label": "O₃-8h",
    "value": "O3_8"
  }
]
state.polluteType = state.polluteType === 'O3' ? 'O3_8' : state.polluteType
}
};
const handleData = (jsonData) => {
function transformData(jsonData) {
  try {
    // 确保输入是有效的数组
    if (!Array.isArray(jsonData)) {
      console.error('无效的数据格式，需要数组类型');
      return [];
    }

    // 按时间分组存储数据
    const timeGroupedData = {};
    
    // 遍历原始数据，按时间分组
    jsonData.forEach(item => {
      if (item.MONITORTIME_NAME && item.POINT_NAME && item.POLLUTE_VALUE !== undefined) {
        // 如果该时间点还没有初始化，创建新对象
        if (!timeGroupedData[item.MONITORTIME_NAME]) {
          timeGroupedData[item.MONITORTIME_NAME] = {
            MONITORTIME_NAME: item.MONITORTIME_NAME
          };
        }
        
        // 添加监测点数据（POINT_NAME对应POLLUTE_VALUE）
        timeGroupedData[item.MONITORTIME_NAME][item.POINT_NAME] = Number(item.POLLUTE_VALUE) || null;
      }
    });
    
    // 将对象转换为数组，并按时间排序
    const result = Object.values(timeGroupedData).sort((a, b) => {
      return new Date(a.MONITORTIME_NAME) - new Date(b.MONITORTIME_NAME);
    });
    
    return result;
  } catch (error) {
    console.error('数据转换过程中发生错误：', error);
    return [];
  }
}
return transformData(jsonData) 
};
const handleTimeChange = (data) => {
if (data?.length) {
  state.START_TIME = data[0]
  state.END_TIME = data[1]
  // 获取图表数据
  getChartData();
}
};
const getChartData = () => {
if (state.timeType === 'hour' || state.timeType === '5minute') {
  apiRegistry.getHourData.request();
} else if (state.timeType === 'day') {
  apiRegistry.getDayData.request();
}
};
const getProvider = () => {
const rootData = inject('airPointState');

state.airPointState = rootData;
};
const chengeTimeType = () => {
async function requestData(){
  await apiRegistry.getLastTime.request();
  getData();
}
requestData()
};
const handleDate = (date) => {
// dateType
state.END_TIME = date
if (state.timeType === '5minute') {
  const endTime = date + ':00'
  state.START_TIME = getPrevTime(endTime, 'minute').slice(0, 16)
} else if (state.timeType === 'hour') {
  const endTime = date + ':00:00'
  state.START_TIME = getPrevTime(endTime, '48hour').slice(0, 13)
} else if (state.timeType === 'day') {
  const endTime = date + ' 00:00:00'
  state.START_TIME = getPrevTime(endTime, '30day').slice(0, 10)
}
  state.timeValue = [state.START_TIME, state.END_TIME];
};
const handlePointTreeChange = (nodes) => {
if (!Array.isArray(nodes)) {
  return;
};
// 判断下拉选择节点和nodes是否一致,(不一致使用tempPointSelectList)
if (!areArraysEqualById(state.tempPointSelectList, nodes) && nodes.length) {
  state.pointSelectList = state.tempPointSelectList.filter(item1 => state.pointSourceList.some(item2 => item2.id === item1.id));
} else {
  state.pointSelectList = nodes.filter(item1 => state.pointSourceList.some(item2 => item2.id === item1.id));
}
state.selectPoints = state.pointSelectList.map(item => item.id).join(',') || '-1'
// 获取下方图表数据
getData()
function areArraysEqualById(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
    return false;
  }

  const set1 = new Set(arr1.map(item => item.id));
  const set2 = new Set(arr2.map(item => item.id));

  if (set1.size !== set2.size) return false;

  for (const id of set1) {
    if (!set2.has(id)) return false;
  }

  return true;
}
};
const hanclePointTreeClickCheck = (selectedNodes) => {
// 如果选中的站点达到10个，禁用其他选项
state.tempPointSelectList = selectedNodes.filter(item1 => state.pointSourceList.some(item2 => item2.id === item1.id));
if (state.tempPointSelectList.length > 10) {
  window.ElementPlus.ElMessage.warning('选择站点不能超过10个！');
  return;
}
};
const handleTreeCancel = () => {
// 如果选中数据为空，调用一下清除事件
if (!state.pointSelectListParams.length) {
  triggerTreeCleanClick();
}
};
const handleMsgToMap = () => {
if (global.REGION_CODE !== '350000000000') {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: 'setAppAR', // 消息名称
    data: [
      {
        resCode: 'air',
        resName: '大气',
        opType: 'add',
        appURL: state.appURL,
      }
    ]
  });
}
};
const onchange1773909378454_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.polluteType = value;
// 执行自定义方法
setUnit();
// 执行自定义方法
getChartData();
};
const ontabClick1736492237255 = (data) => {
// 设置变量值
state.timeType = data.name;
// 执行自定义方法
changePollutionList();
// 执行自定义方法
chengeTimeType();
};
const ondataChange1773889836091_0_0 = (data) => {
// 执行自定义方法
handlePointTreeChange(data);
};
const oncheck1773889836091_0_1 = (currentNode,isSelected,selectedNodes) => {
// 执行自定义方法
hanclePointTreeClickCheck(selectedNodes);
};
const ondateChange1766735979456_0_0 = (data) => {
// 设置变量值
state.timeValue = data;
// 执行自定义方法
handleTimeChange(data);
};
const ondateChange1735011612852 = (data) => {
// 设置变量值
state.timeValue = data;
// 执行自定义方法
handleTimeChange(data);
};
const ondateChange1736501207070_0_0 = (data) => {
// 设置变量值
state.timeValue = data;
// 执行自定义方法
handleTimeChange(data);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getLastTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.pointCode","POINT_TYPE":"state.pointType","TIME_TYPE":"state.timeType","interfaceId":"66ad2ebe9d660295568b05187f34e133"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.pointCode,"POINT_TYPE":state.pointType,"TIME_TYPE":state.timeType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.pointCode,"POINT_TYPE":state.pointType,"TIME_TYPE":state.timeType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLastTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  const date = data?.MONITORTIME || ''
  // 处理日期
  handleDate(date)
}else{
  state.START_TIME = ''
  state.END_TIME = ''
    state.timeValue = []
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
        state.START_TIME = ''
  state.END_TIME = ''
    state.timeValue = []
      reject(error);
    });
  });
},
              },
// 接口函数
 getHourData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.selectPoints","REGION_CODE":"global.regionaQuery.regionCode","TIME_TYPE":"state.timeType","POLLUTE":"state.polluteType","DISTRICT_CODE":"","END_TIME":"state.END_TIME","START_TIME":"state.START_TIME","POINT_TYPE":"","interfaceId":"ec575d2b76ddaa4882f2271f88e2d397"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.selectPoints,"REGION_CODE":global.regionaQuery.regionCode,"TIME_TYPE":state.timeType,"POLLUTE":state.polluteType,"DISTRICT_CODE":"","END_TIME":state.END_TIME,"START_TIME":state.START_TIME,"POINT_TYPE":"","interfaceId":"ec575d2b76ddaa4882f2271f88e2d397"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.selectPoints,"REGION_CODE":global.regionaQuery.regionCode,"TIME_TYPE":state.timeType,"POLLUTE":state.polluteType,"DISTRICT_CODE":"","END_TIME":state.END_TIME,"START_TIME":state.START_TIME,"POINT_TYPE":"","interfaceId":"ec575d2b76ddaa4882f2271f88e2d397"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getHourData'] = res.data;
                
     // console.log(res, '关联站点-echarts图数据')
if (res?.data?.head?.statusCode === '200' && res?.data?.data?.length) {
  const data = handleData(res?.data?.data);
  state.echartsData = data.map(item => {
    return{
      ...item,
      MONITORTIME: item.MONITORTIME_NAME
    }
  })

  // 限值
  state.maxValue = '-';
} else {
  state.echartsData = []
}

// 折线图配置项修改
setOptions();

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.echartsData = []

      reject(error);
    });
  });
},
              },
// 接口函数
 getDayData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.selectPoints","ORDER_BY":"MONITORTIME","REGION_CODE":"global.regionaQuery.regionCode","POLLUTE":"state.polluteType","DISTRICT_CODE":"","END_TIME":"state.END_TIME","START_TIME":"state.START_TIME","POINT_TYPE":"","interfaceId":"daaa5c5bae26295626e948aa6702e2e9"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.selectPoints,"ORDER_BY":"MONITORTIME","REGION_CODE":global.regionaQuery.regionCode,"POLLUTE":state.polluteType,"DISTRICT_CODE":"","END_TIME":state.END_TIME,"START_TIME":state.START_TIME,"POINT_TYPE":"","interfaceId":"daaa5c5bae26295626e948aa6702e2e9"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.selectPoints,"ORDER_BY":"MONITORTIME","REGION_CODE":global.regionaQuery.regionCode,"POLLUTE":state.polluteType,"DISTRICT_CODE":"","END_TIME":state.END_TIME,"START_TIME":state.START_TIME,"POINT_TYPE":"","interfaceId":"daaa5c5bae26295626e948aa6702e2e9"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getDayData'] = res.data;
                
     // console.log(res, '关联站点-echarts图数据')
if (res?.data?.head?.statusCode === '200' && res?.data?.data?.length) {
  const data = handleData(res?.data?.data); // 参数注意修改
  state.echartsData = data.map(item =>{
    return{
      ...item,
      MONITORTIME: item.MONITORTIME_NAME
    }
  })

  // 限值
  state.maxValue = '-';
} else {
  state.echartsData = []
}

// 折线图配置项修改
setOptions();

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.echartsData = []

      reject(error);
    });
  });
},
              },
// 接口函数
 getPointList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_TYPE":"0,1,2,3,4","REGION_PATH":"global.regionaQuery.regionCode","interfaceId":"48f27a45ab6772cad3e379bff43bc69d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_TYPE":"0,1,2,3,4","REGION_PATH":global.regionaQuery.regionCode,"interfaceId":"48f27a45ab6772cad3e379bff43bc69d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_TYPE":"0,1,2,3,4","REGION_PATH":global.regionaQuery.regionCode,"interfaceId":"48f27a45ab6772cad3e379bff43bc69d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPointList'] = res.data;
                
     const { data } = res;

state.pointTreeList = [];

if (data?.head?.statusCode === '200' && data?.data.length) {
  const originalData = data.data;
  state.pointSourceList = originalData.map(item => ({
    id: item.POINT_CODE,
    label: item.POINT_NAME_TREE
  }));
  const result = formPointTree(originalData)[0]?.children || [];
  state.pointTreeList = result;
  // 微站默认选中街道站点
  if (state.pointType === '4') {
    state.pointSelectList = originalData.filter(item => item.STREET_CODE === state.DISTRICT_CODE && item.POINT_TYPE === state.pointType).map(item => {
      return {
        id: item.POINT_CODE || '',
        label: item.POINT_NAME_TREE || ''
      }
    })
  } else {
    // 国控 省控 选中区县站点
    state.pointSelectList = originalData.filter(item => item.DISTRICT_CODE === state.DISTRICT_CODE && item.POINT_TYPE === state.pointType).map(item => {
      return {
        id: item.POINT_CODE || '',
        label: item.POINT_NAME_TREE || ''
      }
    })
  }
  state.selectPoints = state.pointSelectList.map(item => item.id).join(',') || '-1'
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
watch(() => [global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getPointList', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewSiteRelatedSite', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
// 执行自定义方法
initParams();
onMounted(() => {
setPageScale('t-l-c-airOverviewSiteRelatedSite', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tChartDesignx0x0ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x0.default, componentState.tChartDesignx0x0?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tColx0x1x0ComputedData = computed(() => _.merge({}, componentState.tColx0x1x0.default, componentState.tColx0x1x0?.[state.screenSize]));

 const tSelectx0x1x0x0ComputedData = computed(() => _.merge({}, componentState.tSelectx0x1x0x0.default, componentState.tSelectx0x1x0x0?.[state.screenSize]));

 const tTreex0x1x0x1ComputedData = computed(() => _.merge({}, componentState.tTreex0x1x0x1.default, componentState.tTreex0x1x0x1?.[state.screenSize]));

 const tColx0x1x1ComputedData = computed(() => _.merge({}, componentState.tColx0x1x1.default, componentState.tColx0x1x1?.[state.screenSize]));

 const tTabsx0x1x1x0ComputedData = computed(() => _.merge({}, componentState.tTabsx0x1x1x0.default, componentState.tTabsx0x1x1x0?.[state.screenSize]));

 const tColx0x1x2ComputedData = computed(() => _.merge({}, componentState.tColx0x1x2.default, componentState.tColx0x1x2?.[state.screenSize]));

 const tDatePickerx0x1x2x0ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x1x2x0.default, componentState.tDatePickerx0x1x2x0?.[state.screenSize]));

 const tDatePickerx0x1x2x1ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x1x2x1.default, componentState.tDatePickerx0x1x2x1?.[state.screenSize]));

 const tDatePickerx0x1x2x2ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x1x2x2.default, componentState.tDatePickerx0x1x2x2?.[state.screenSize]));

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
tChartDesignx0x0ComputedData,
tRowx0x1ComputedData,
tColx0x1x0ComputedData,
tSelectx0x1x0x0ComputedData,
tTreex0x1x0x1ComputedData,
tColx0x1x1ComputedData,
tTabsx0x1x1x0ComputedData,
tColx0x1x2ComputedData,
tDatePickerx0x1x2x0ComputedData,
tDatePickerx0x1x2x1ComputedData,
tDatePickerx0x1x2x2ComputedData,
onchange1773909378454_0_0,
ondataChange1773889836091_0_0,
oncheck1773889836091_0_1,
ontabClick1736492237255,
ondateChange1766735979456_0_0,
ondateChange1735011612852,
ondateChange1736501207070_0_0,
};
},
};