window.CWQIEntryComponent = {
template: 
`<div id="t-l-c-CWQIEntry" class="t-l-c-CWQIEntry" >` +
`<t-rect id="t-rect-87c1.4034b7af2" class="CWQIEntry-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-table v-if="state.showListName === 'dm-all'" id="t-table-780e.81fa587c1" class="CWQIEntry-t-table-0-2"  :height="tTablex0x2ComputedData.height" :stripe="tTablex0x2ComputedData.stripe" :border="tTablex0x2ComputedData.border" :auto-scroll="tTablex0x2ComputedData.autoScroll" :speed="tTablex0x2ComputedData.speed" :columns="tTablex0x2ComputedData.columns" :data="replaceCssVariables(filterData(state.dmList, componentPropBindingMap?.['t-table-780e.81fa587c1']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x2ComputedData.defaultSort" :c-style="tTablex0x2ComputedData.cStyle" @cell-click="oncellClick1765184258044">` +
`</t-table>` +
`<t-table v-if="state.showListName === 'dm-other'" id="t-table-4d86.11664d047" class="CWQIEntry-t-table-0-3"  :height="tTablex0x3ComputedData.height" :stripe="tTablex0x3ComputedData.stripe" :border="tTablex0x3ComputedData.border" :auto-scroll="tTablex0x3ComputedData.autoScroll" :speed="tTablex0x3ComputedData.speed" :columns="tTablex0x3ComputedData.columns" :data="replaceCssVariables(filterData(state.dmList, componentPropBindingMap?.['t-table-4d86.11664d047']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x3ComputedData.defaultSort" :c-style="tTablex0x3ComputedData.cStyle" @cell-click="oncellClick1765184233647">` +
`</t-table>` +
`<t-table v-if="state.showListName === 'zb'" id="t-table-a76e.f11e08028" class="CWQIEntry-t-table-0-4"  :height="tTablex0x4ComputedData.height" :stripe="tTablex0x4ComputedData.stripe" :border="tTablex0x4ComputedData.border" :auto-scroll="tTablex0x4ComputedData.autoScroll" :speed="tTablex0x4ComputedData.speed" :columns="tTablex0x4ComputedData.columns" :data="replaceCssVariables(filterData(state.zbList, componentPropBindingMap?.['t-table-a76e.f11e08028']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x4ComputedData.defaultSort" :c-style="tTablex0x4ComputedData.cStyle" @cell-click="oncellClick1765101849546">` +
`</t-table>` +
`<t-select v-if="state.regionOptions.length !== 0" id="t-select-d081.df53d10ce" class="CWQIEntry-t-select-0-5"  :active-value="replaceCssVariables(filterData(state.selectedRegionData.regionCode, componentPropBindingMap?.['t-select-d081.df53d10ce']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.regionOptions, componentPropBindingMap?.['t-select-d081.df53d10ce']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x5ComputedData.alias" :multiple="tSelectx0x5ComputedData.multiple" :placeholder="tSelectx0x5ComputedData.placeholder" :clearable="tSelectx0x5ComputedData.clearable" :disabled="tSelectx0x5ComputedData.disabled" :name="tSelectx0x5ComputedData.name" :autocomplete="tSelectx0x5ComputedData.autocomplete" :filterable="tSelectx0x5ComputedData.filterable" :no-match-text="tSelectx0x5ComputedData.no-match-text" :no-data-text="tSelectx0x5ComputedData.no-data-text" :c-style="tSelectx0x5ComputedData.cStyle" @change="onchange1764917790537">` +
`</t-select>` +
`<t-select v-if="state.activeTableTab === 'dm'" id="t-select-2819.4164a8af2" class="CWQIEntry-t-select-0-6"  :active-value="replaceCssVariables(filterData(state.selectedPollutant, componentPropBindingMap?.['t-select-2819.4164a8af2']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.pollutantOptions, componentPropBindingMap?.['t-select-2819.4164a8af2']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x6ComputedData.alias" :multiple="tSelectx0x6ComputedData.multiple" :placeholder="tSelectx0x6ComputedData.placeholder" :clearable="tSelectx0x6ComputedData.clearable" :disabled="tSelectx0x6ComputedData.disabled" :name="tSelectx0x6ComputedData.name" :autocomplete="tSelectx0x6ComputedData.autocomplete" :filterable="tSelectx0x6ComputedData.filterable" :no-match-text="tSelectx0x6ComputedData.no-match-text" :no-data-text="tSelectx0x6ComputedData.no-data-text" :c-style="tSelectx0x6ComputedData.cStyle" @change="onchange1764928247991">` +
`</t-select>` +
`<t-date-picker id="t-date-picker-b570.080d5324c" class="CWQIEntry-t-date-picker-0-7"  :placeholder="tDatePickerx0x7ComputedData.placeholder" :start-placeholder="tDatePickerx0x7ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x7ComputedData.endPlaceholder" :type="tDatePickerx0x7ComputedData.type" :clearable="tDatePickerx0x7ComputedData.clearable" :range-separator="tDatePickerx0x7ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.monitorTime, componentPropBindingMap?.['t-date-picker-b570.080d5324c']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x7ComputedData.separator" :readonly="tDatePickerx0x7ComputedData.readonly" :editable="tDatePickerx0x7ComputedData.editable" :c-style="tDatePickerx0x7ComputedData.cStyle" @date-change="ondateChange1764916524204">` +
`</t-date-picker>` +
`<t-tabs-base id="t-tabs-base-aa4c.3d05c520c" class="CWQIEntry-t-tabs-base-0-8"  :data="tTabsBasex0x8ComputedData.data" :space="tTabsBasex0x8ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.statisticalMethod, componentPropBindingMap?.['t-tabs-base-aa4c.3d05c520c']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x8ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x8ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x8ComputedData.alias" :c-style="tTabsBasex0x8ComputedData.cStyle" @tab-click="ontabClick1764847106746">` +
`</t-tabs-base>` +
`<t-rect id="t-rect-e276.448ae9b52" class="CWQIEntry-t-rect-0-9"  :tip="tRectx0x9ComputedData.tip" :label="tRectx0x9ComputedData.label" :active="tRectx0x9ComputedData.active" :c-style="tRectx0x9ComputedData.cStyle">` +
`</t-rect>` +
`<t-image-base id="t-image-base-307e.9aa303b56" class="CWQIEntry-t-image-base-0-10"  :src="tImageBasex0x10ComputedData.src" :fit="tImageBasex0x10ComputedData.fit" :c-style="tImageBasex0x10ComputedData.cStyle">` +
`</t-image-base>` +
`<t-text-common id="t-text-common-0783.3769b9687" class="CWQIEntry-t-text-common-0-11"  :label="replaceCssVariables(filterData(state.CWQILabel, componentPropBindingMap?.['t-text-common-0783.3769b9687']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x11ComputedData.editable" :c-style="tTextCommonx0x11ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-0d50.fc6076d86" class="CWQIEntry-t-text-common-0-12"  :label="replaceCssVariables(filterData(state.CWQIValue, componentPropBindingMap?.['t-text-common-0d50.fc6076d86']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x12ComputedData.editable" :c-style="tTextCommonx0x12ComputedData.cStyle">` +
`</t-text-common>` +
`<t-tabs-base id="t-tabs-base-d76b.607a91d94" class="CWQIEntry-t-tabs-base-0-13"  :data="tTabsBasex0x13ComputedData.data" :space="tTabsBasex0x13ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.activeTableTab, componentPropBindingMap?.['t-tabs-base-d76b.607a91d94']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x13ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x13ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x13ComputedData.alias" :c-style="tTabsBasex0x13ComputedData.cStyle" @tab-click="ontabClick1764854183953">` +
`</t-tabs-base>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-dbc1.5d40d3b1c":{"attributeName":"tRectx0x0"},"t-rect-87c1.4034b7af2":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-table-780e.81fa587c1":{"attributeName":"tTablex0x2","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-table-4d86.11664d047":{"attributeName":"tTablex0x3","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-table-a76e.f11e08028":{"attributeName":"tTablex0x4","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-select-d081.df53d10ce":{"attributeName":"tSelectx0x5","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-select-2819.4164a8af2":{"attributeName":"tSelectx0x6","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-b570.080d5324c":{"attributeName":"tDatePickerx0x7","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-aa4c.3d05c520c":{"attributeName":"tTabsBasex0x8","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-e276.448ae9b52":{"attributeName":"tRectx0x9","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-307e.9aa303b56":{"attributeName":"tImageBasex0x10","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-0783.3769b9687":{"attributeName":"tTextCommonx0x11","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-0d50.fc6076d86":{"attributeName":"tTextCommonx0x12","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-d76b.607a91d94":{"attributeName":"tTabsBasex0x13","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-8246.8d69591ce":{"attributeName":"tTextCommonx0x14"}};
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
   calType: "CUR_MONTH",
   showListName: "",
   zbListAll: [],
   dmListAll: [],
   selectedPollutantUnit: "",
   listVisible: {"isShowDmAll":false,"isShowDmOther":false},
   isInitMap: false,
   dmList: [],
   zbList: [],
   selectedPollutant: "all",
   pollutantOptions: [],
   CWQIValue: "",
   selectedRegionData: {"regionCode":"","regionName":"","regionType":"city"},
   regionOptions: [],
   monitorTime: "",
   sourceParmasState: {"componentSourceParmas":{"POINT_CODE":""}},
   activeTableTab: "zb",
   CWQILabel: "",
   statisticalMethod: "monthly",
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
tRectx0x1: {
defaultStyle: {
            default: {"width":"450px","height":"106px","position":"unset","left":"0px","top":"0px","background":"var(--business-query-bg)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"106px","position":"unset","left":"0px","top":"0px","background":"var(--business-query-bg)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","animationName":""}}}, 
 },
},
tTablex0x2: {
defaultStyle: {
            default: {"width":"410px","height":"610px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"610px",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
columns:[{"label":"定位","type":"state","key":"","stateKey":"canPosition","width":"35px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"width":"14PX","height":"16PX","transform":"translateX(9px)","vertical-align":"-3px"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"},"cellStyle":{"cursor":"pointer"}},"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"14px","height":"14px","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"var(--business-position)","backgroundImage":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"var(--business-position)"},"cellStyle":{}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"var(--business-position)","backgroundImage":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2022-11-01/740fa325bf0b471d8e40134e70fda341.svg"},"cellStyle":{"background":""}}]},{"label":"断面名称","type":"default","key":"pointName","stateKey":"","width":"150px","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","display":"block","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"infoPosition":"left"},{"label":"CWQI","type":"default","key":"cwqi","stateKey":"","width":"50px","minWidth":"unset","align":"right","headerAlign":"right","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)","display":"block"},"cellStyle":{"cursor":"default"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}]},{"label":"去年同期值","type":"default","key":"cwqi_yoy_base","stateKey":"","width":"80px","minWidth":"unset","align":"right","headerAlign":"right","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)","display":"block"},"cellStyle":{"cursor":"default"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}]},{"label":"ΔCWQI(%)","type":"state","key":"cwqi_yoy_rate","stateKey":"cwqi_yoy_rateStatus","width":"95px","minWidth":"unset","align":"right","headerAlign":"right","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--t-error7)","display":"block"},"cellStyle":{"cursor":"default"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}],"stateList":[{"name":"default","fontStyle":{"color":"var(--business-white)","textAlign":"right"}},{"name":"red","fontStyle":{"color":"var(--t-water-4)","textAlign":"right"}},{"name":"green","fontStyle":{"color":"var(--t-success5)","textAlign":"right"}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"610px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tTablex0x3: {
defaultStyle: {
            default: {"width":"410px","height":"610px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"610px",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
columns:[{"label":"定位","type":"state","key":"","stateKey":"canPosition","width":"35px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","transform":"translateX(9px)","vertical-align":"-3px"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"},"cellStyle":{"cursor":"pointer"}},"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"14px","height":"14px","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"var(--business-position)","backgroundImage":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"var(--business-position)"},"cellStyle":{}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"var(--business-position)","backgroundImage":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2022-11-01/740fa325bf0b471d8e40134e70fda341.svg"},"cellStyle":{"background":""}}]},{"label":"断面名称","type":"default","key":"pointName","stateKey":"","width":"66px","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)","display":"block"}},"infoPosition":"left"},{"label":"浓度","type":"default","key":"density","stateKey":"","width":"74px","minWidth":"","align":"right","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"},"cellStyle":{"cursor":"default"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}]},{"label":"CWQI","type":"default","key":"cwqi","stateKey":"","width":"60px","minWidth":"unset","align":"right","headerAlign":"right","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)","display":"block"},"cellStyle":{"cursor":"default"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}]},{"label":"去年同期值","type":"default","key":"cwqi_yoy_base","stateKey":"","width":"80px","minWidth":"unset","align":"right","headerAlign":"right","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)","display":"block"},"cellStyle":{"cursor":"default"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}]},{"label":"ΔCWQI(%)","type":"state","key":"cwqi_yoy_rate","stateKey":"cwqi_yoy_rateStatus","width":"95px","minWidth":"unset","align":"right","headerAlign":"right","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--t-water-4)","display":"block"},"cellStyle":{"cursor":"default"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}],"stateList":[{"name":"default","fontStyle":{"color":"var(--business-white)","textAlign":"right"}},{"name":"red","fontStyle":{"color":"var(--t-water-4)","textAlign":"right"}},{"name":"green","fontStyle":{"color":"var(--t-success5)","textAlign":"right"}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"610px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tTablex0x4: {
defaultStyle: {
            default: {"width":"410px","height":"650px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"650px",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
columns:[{"label":" 指标名称","type":"default","key":"pollute_name","stateKey":"isCheck","width":"105px","minWidth":"","align":"left","headerAlign":"left","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"24PX","height":"24PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)","display":"block"},"cellStyle":{"cursor":"default"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"14PX","height":"14PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-03-07/454b453f41b84c6097492361373088bd.png)","backgroundImage":"var(--business-checkbox-checked)","backgroundSize":"100% 100%","cursor":"pointer","transform":"translate(11px, 3px)","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":"","cursor":"pointer"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"14PX","height":"14PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"var(--business-checkbox)","backgroundSize":"100%","cursor":"pointer","transform":"translate(11px, 3px)"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"CWQI","type":"default","key":"cwqi","stateKey":"canPosition","width":"60px","minWidth":"","align":"right","headerAlign":"right","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"margin":"","padding":"","fontWeight":"normal"},"cellStyle":{"cursor":"default"}},"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"var(--business-position)","backgroundImage":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"var(--business-position)"},"cellStyle":{"background":"rgba(0, 0, 0, 0)"}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"0PX","height":"0PX","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"var(--business-position)","backgroundImage":"","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image"},"imageStyle":{"marginRight":"","borderRadius":"","width":"13PX","height":"15PX","backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2022-11-01/740fa325bf0b471d8e40134e70fda341.svg"},"cellStyle":{"background":""}}]},{"label":"去年同期值","type":"default","key":"cwqi_last_year","stateKey":"","width":"90px","minWidth":"","align":"right","headerAlign":"right","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","display":"block","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"infoPosition":"left"},{"label":"ΔCWQI(%)","type":"state","key":"cwqi_yoy_rate","stateKey":"","width":"85px","minWidth":"","align":"right","headerAlign":"right","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"},"cellStyle":{"cursor":"default"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}]},{"label":"断面分析","type":"default","key":"view","stateKey":"","width":"70px","minWidth":"unset","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-theme)","display":"block"},"cellStyle":{"cursor":"pointer"}},"infoPosition":"left","operationList":[{"name":"派发","id":"dispatch","fontStyle":{"color":"var(--business-theme)","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","background":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"650px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tSelectx0x5: {
defaultStyle: {
            default: {"width":"198px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"33px","line-height":"normal"},
            
            },
 default: { 
 
activeValue:"",
options:[],
alias:{"label":"region_name","value":"region_code","disabled":"disabled"},
multiple:false,
placeholder:"请选择区域",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"198px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"33px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tSelectx0x6: {
defaultStyle: {
            default: {"width":"202px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"33px","line-height":"normal"},
            
            },
 default: { 
 
activeValue:"all",
options:[],
alias:{"label":"DICTIONARYNAME","value":"DICTIONARYCODE","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"202px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"33px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tDatePickerx0x7: {
defaultStyle: {
            default: {"width":"199px","height":"33px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","min-height":"33px","line-height":"normal","min-width":"199px","max-width":"none"},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"month",
clearable:true,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"199px","height":"33px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","min-height":"33px","line-height":"normal","min-width":"199px","max-width":"none"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","min-height":"32px","line-height":"normal"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"30px","fontSize":"var(--business-text-size-14)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","fontSize":"var(--business-text-size-12)","height":"auto"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--skin-font-color)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--skin-font-color)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--skin-font-color)","borderLeft":"1px solid var(--skin-font-color)","borderTop":"1px solid var(--skin-font-color)","borderRight":"1px solid var(--skin-font-color)","borderBottom":"1px solid var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--skin-font-color)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"inputCloseIcons":{"default":{"fontSize":"var(--business-text-size-14)"}},"dateHeaderYearBtnWrapper":{"default":{"fontSize":"var(--business-text-size-14)"}},"dateHeaderYearBtn":{"default":{"fontSize":"var(--business-text-size-14)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-14)"}}}, 
 },
},
tTabsBasex0x8: {
defaultStyle: {
            default: {"width":"410px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset"},
            
            },
 default: { 
 
data:[{"label":"单月","value":"monthly"},{"label":"累计","value":"cumulative"}],
space:0,
selectedTabVal:"monthly",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":"disabled"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset"}},"itemWrapper":{"default":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","backgroundColor":"rgba(0, 61, 155, 0)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","width":"120px","height":"32px","fontSize":"var(--business-text-size-14)","lineHeight":"32px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","borderLeft":"1px solid rgba(0,61,155,0)","borderTop":"1px solid rgba(0,61,155,0)","borderRight":"1px solid rgba(0,61,155,0)","borderBottom":"1px solid rgba(0,61,155,0)","color":"var(--business-text-avianize)"},"active":{"background":"var(--business-tab-third-active-fill)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","backgroundColor":"rgba(3, 12, 52, 0)","borderLeft":"1px solid var(--business-tab-third-active-border)","borderTop":"1px solid var(--business-tab-third-active-border)","borderRight":"1px solid var(--business-tab-third-active-border)","borderBottom":"1px solid var(--business-tab-third-active-border)","box-shadow":"var(--business-tab-third-active-shadow) 0px 0px 18px 0px inset","color":"var(--business-tab-third-active-text)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","height":"32px"},"hover":{"backgroundColor":"rgba(0, 61, 155, 0)","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","borderLeft":"1px solid rgba(255,255,255,0)","borderTop":"1px solid rgba(255,255,255,0)","borderRight":"1px solid rgba(255,255,255,0)","borderBottom":"1px solid rgba(255,255,255,0)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","color":"var(--business-tab-third-active-border)"}}}, 
 },
},
tRectx0x9: {
defaultStyle: {
            default: {"width":"410px","height":"69px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","position":"unset","left":"20px","top":"116px","background":"rgba(20, 112, 204, 0.3)","fillType":"color","borderDirection":"all"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"69px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"auto !important","borderTop":"0px Solid var(--t-rect-border-color)","borderLeft":"0px Solid var(--t-rect-border-color)","borderBottom":"0px Solid var(--t-rect-border-color)","borderRight":"0px Solid var(--t-rect-border-color)","position":"unset","left":"20px","top":"116px","background":"rgba(20, 112, 204, 0.3)","fillType":"color","borderDirection":"all"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tImageBasex0x10: {
defaultStyle: {
            default: {"width":"27px","height":"37px","top":"132px","left":"36px","position":"unset"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-12-04/2cb3087b926d40a1a1f3eebcdc964bab.svg",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"27px","height":"37px","top":"132px","left":"36px","position":"unset"}}}, 
 },
},
tTextCommonx0x11: {
defaultStyle: {
            default: {"width":"173px","height":"69px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"69px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"68px","top":"116px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"173px","height":"69px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"69px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"68px","top":"116px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tTextCommonx0x12: {
defaultStyle: {
            default: {"width":"163px","height":"69px","color":"rgb(245,222,130)","fontFamily":"DIN-bold","fontWeight":"400","fontSize":"var(--business-num-size-28)","lineHeight":"69px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"252px","top":"116px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"163px","height":"69px","color":"rgb(245,222,130)","fontFamily":"DIN-bold","fontWeight":"400","fontSize":"var(--business-num-size-28)","lineHeight":"69px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"252px","top":"116px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tTabsBasex0x13: {
defaultStyle: {
            default: {"width":"410px","height":"28px","animationName":""},
            
            },
 default: { 
 
data:[{"label":"指标","value":"zb"},{"label":"断面","value":"dm"}],
space:5,
selectedTabVal:"zb",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":false},
cStyle:{"wrapper":{"default":{"width":"410px","height":"28px","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(26, 27, 31, 0)","width":"auto","height":"auto","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-14)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","min-width":"130px","min-height":"28px","line-height":"normal","display":"flex","justify-content":"center","align-items":"center","padding":"5px"},"active":{"backgroundImage":"var(--business-tab-content-active-bg)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","height":"auto","width":"auto","-webkit-mask-size":"","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-position":"","color":"#FFF"},"hover":{"backgroundColor":"rgba(20, 112, 204, 0.15)","backgroundImage":"var(--business-tab-content-active-bg)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","color":"#FFF"}},"label":{"default":{"color":""}}}, 
 },
},
});
const changeStatisticalMethod = (data) => {
state.statisticalMethod = data.value;

/* 若是选择了指标 */
if (state.activeTableTab === 'zb') {
  // 获取指标列表数据
  setZbListData(state.zbListAll);
} else {
  // 获取断面列表数据
  setDmListData(state.dmListAll);
}
};
const watchRegionChange = () => {
console.log(global.regionaQuery, 888901);
watch(() => global.regionaQuery.regionCode, async (newRegionCode) => {
  if (state.regionOptions.length) {
    const regionItem = state.regionOptions.find((val) => val.region_code === newRegionCode);
    if (regionItem) {
      // 更新区域名称
      state.selectedRegionData.regionName = regionItem.region_name;
    } else {
      state.selectedRegionData.regionName = global.regionaQuery.regionName;
    }
  } else {
    state.selectedRegionData.regionName = global.regionaQuery.regionName;
  }

  // 展示的CWQI文本
  state.CWQILabel = `${state.selectedRegionData.regionName}CWQI`;
  // 更新区域编码
  state.selectedRegionData.regionCode = global.regionaQuery.regionCode;
  // 更新区域类型
  state.selectedRegionData.regionType = getRegionLevel(global.regionaQuery.regionCode);

  // 获取最新时间
  await apiRegistry.getDefaultTime.request();
  /* 若没有初始化地图参数 且 地图专题加载完成 且 获取到了最新时间 */
  if (!state.isInitMap && global.waterGlobalVariables.mapAppLoaded && state.monitorTime) {
    // 给地图发送消息
    sendMdgUpdateMapParams();
    state.isInitMap = true;
    console.log(77786)
  /* 不是初始化地图参数 且 地图加载完成 且 获取到了最新时间 且 不是选中了南平市（因为选中非南平市的选项会直接切换到断面的标签，组件会发一次消息） */
  } else if (state.isInitMap && global.waterGlobalVariables.mapAppLoaded && state.monitorTime) {
    // 给地图发送消息
    sendMdgUpdateMapParams();
    console.log(777861)
  }

  if (state.selectedRegionData.regionName !== '南平市') {
    state.activeTableTab = 'dm';
  }
  // 获取列表数据
  getListData();
  // 获取CWQI数值
  apiRegistry.getCWQIValue.request();
}, {
  immediate: true
})


};
const selectTableTab = (data) => {
state.activeTableTab = data.value;

// 获取列表数据
getListData();
};
const getProvider = () => {
const rootData = inject('sourceParmasState');

state.sourceParmasState = rootData;

console.log(state.sourceParmasState, 11123)
};
const selectRegion = (data) => {
console.log(data, 88892)
state.selectedRegionData.regionCode = data.region_code;
state.selectedRegionData.regionName = data.region_name;
if (data.region_level === '4') {
  state.selectedRegionData.regionType = 'county';
} else if (data.region_level === '3') {
  state.selectedRegionData.regionType = 'city';
}

global.regionaQuery.regionCode = data.region_code;
global.regionaQuery.regionName = data.region_name;
global.regionaQuery.areaCode = '';
global.regionaQuery.paramsRegionType = getRegionLevel(data.region_code);
global.regionaQuery.businessRegionName = global.regionaQuery.paramsRegionType === 'province' ? '南平市' : data.region_name;
// 选中的区域类型
global.regionaQuery.regionType = 'region';
localStorage.setItem('regionCode', global.regionaQuery.regionCode);

if (data.region_name === '南平市') {
  sendMdgUpdateMapParams();
} else {
  state.activeTableTab = 'dm';
}




/**
 * 发送切换区域的消息，乐构和地图都会接收并修改区域
 */
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'changeCommonParams',  // 消息类型名称
    // 键名不能改 消息内容 对象格式
    data: {
      selected: 'REGION_CODE',
      REGION_CODE: data.region_code,
      REGION_NAME: data.region_name
    },
  }
);
};
const getListData = () => {
/* 若是选择了指标 */
if (state.activeTableTab === 'zb') {
  // 获取指标列表数据
  apiRegistry.getZBList.request();
} else {
  // 获取断面列表数据
  apiRegistry.getDMList.request();
}
};
const sendMdgUpdateMapParams = () => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'updateCWQIStatus',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      statisticalType: state.statisticalMethod, // 统计类型（单月：monthly；累计：cumulative）
      monitorTime: state.monitorTime, // 监测时间
      regionCode: state.selectedRegionData.regionCode, // 行政区编码
      pollutantCode: state.selectedPollutant, // 污染物编码
      panelCode: state.activeTableTab, // 面板（指标：zb;断面：dm)
    }
  }
);
};
const watchMapApploaded = () => {
const handleWatchMapAppLoaded = watch(() => [global.waterGlobalVariables.mapAppLoaded, state.monitorTime], () => {
  if (global.waterGlobalVariables.mapAppLoaded && !state.isInitMap && state.monitorTime) {
    sendMdgUpdateMapParams(); // 给地图发消息初始化地图
    handleWatchMapAppLoaded(); // 取消监听
    state.isInitMap = true; // 已初始化地图参数
  } else if (state.isInitMap) {
    handleWatchMapAppLoaded(); // 取消监听
  }
  console.log(global.waterGlobalVariables.mapAppLoaded, state.isInitMap, state.monitorTime, 66678)
}, { deep: true, immediate: true });
};
const handleTableClick = (row,column) => {
console.log('处理表格点击事件', column, row);

if (column.label === '断面分析') {
  state.activeTableTab = 'dm';
  state.selectedPollutant = row.pollute_code;
  sendMdgUpdateMapParams();
  apiRegistry.getDMList.request();
} else if (column.label === '定位') {
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'gotoPoint',
      data: {
        longitude: row.longitude, 
        latitude: row.latitude,
      }
    }
  );
}
};
const watchListVisible = () => {
watch(() => [state.activeTableTab, state.selectedPollutant], () => {
  if (state.activeTableTab === 'dm' && state.selectedPollutant == 'all') {
    state.showListName = 'dm-all';
  } else if (state.activeTableTab === 'dm' && state.selectedPollutant != 'all') {
    state.showListName = 'dm-other';
  } else {
    state.showListName = 'zb';
  }
}, { immediate: true, deep: true });
};
const selectPollutant = (data) => {
// 赋值选中的污染物
state.selectedPollutant = data.DICTIONARYCODE;
// 赋值指标的单位
state.selectedPollutantUnit = data.EXT1 ? `（${data.EXT1}）` : '';

// 获取断面列表数据
apiRegistry.getDMList.request();
// 更新地图参数
sendMdgUpdateMapParams();
};
const setDmListData = (data) => {
state.dmList = data.map((val) => {
  let cwqi = val.cwqi;
  let cwqi_yoy_base = val.cwqi_yoy_base;
  let cwqi_yoy_rate = val.cwqi_yoy_rate;
  let cwqi_yoy_rateStatus = 'red'; // 状态
  let pollutevalue = val.pollutevalue; // 状态
  /* 累计 */
  if (state.statisticalMethod === 'cumulative') {
    cwqi = val.lcwqi;
    cwqi_yoy_base = val.lcwqi_yoy_base;
    cwqi_yoy_rate = val.lcwqi_yoy_rate;
    pollutevalue = val.lpollutevalue;
  }

  if (cwqi_yoy_rate.indexOf('-') > -1) {
    cwqi_yoy_rateStatus = 'green';
  } else if (cwqi_yoy_rate === '0') {
    cwqi_yoy_rateStatus = 'default';
  } else {
    cwqi_yoy_rate = handleNoVal(cwqi_yoy_rate) === '-' ? '-' : `+${cwqi_yoy_rate}`;
  }
  return {
    cwqi: handleNoVal(cwqi),
    cwqi_yoy_base: handleNoVal(cwqi_yoy_base),
    cwqi_yoy_rate: handleNoVal(cwqi_yoy_rate),
    cwqi_yoy_rateStatus,
    density: handleNoVal(pollutevalue), // 浓度
    longitude: val.longitude,
    latitude: val.latitude,
    canLocation: val.latitude && val.longitude ? '1' : '0', // 是否能定位
    pointName: handleNoVal(val.point_name),
    canPosition: val.longitude && val.latitude ? 'true' : false
  }
});
};
const setZbListData = (data) => {
state.zbList = data.map((val) => {
  let cwqi = val.cwqi;
  let cwqi_last_year = val.cwqi_last_year;
  let cwqi_yoy_rate = val.cwqi_yoy_rate;
  /* 累计 */
  if (state.statisticalMethod === 'cumulative') {
    cwqi = val.lcwqi;
    cwqi_last_year = val.lcwqi_last_year;
    cwqi_yoy_rate = val.lcwqi_yoy_rate;
  }
  return {
    pollute_name: handleNoVal(val.pollute_name),
    cwqi: handleNoVal(cwqi),
    cwqi_last_year: handleNoVal(cwqi_last_year),
    cwqi_yoy_rate: handleNoVal(cwqi_yoy_rate),
    view: '查看',
    pollute_code: val.pollute_code || '', // 污染物编码
  }
});
};
const handleCalType = (type) => {
if (type === 'monthly') {
  state.calType = 'CUR_MONTH'
} else if (type === 'cumulative') {
  state.calType = 'ACC_MONTH'
}
apiRegistry.getCWQIValue.request();

};
const changeSectionTableCol = (data) => {
console.log( componentState.tTablex0x3, '44444')

// 第三列：浓度 列
if (componentState.tTablex0x3.default.columns[2]) {
  // 赋值指标的单位
  // componentState.tTablex0x3.default.columns[2].label =
  //   data.EXT1 ? `浓度  （${data.EXT1}）` : '浓度';

  componentState.tTablex0x3.default.columns[2].label =
    data.EXT1 ? `浓度(${data.EXT1})` : '浓度';
}
};
const ontabClick1764847106746 = (data) => {
// 执行自定义方法
changeStatisticalMethod(data);
// 执行自定义方法
sendMdgUpdateMapParams();
// 执行自定义方法
handleCalType(data.value);
};
const ontabClick1764854183953 = (data) => {
// 执行自定义方法
selectTableTab(data);
// 执行自定义方法
sendMdgUpdateMapParams();
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "clearGotoPoint", // 消息名称
data: {}, // 发送的数据
});
};
const ondateChange1764916524204 = (data) => {
// 设置变量值
state.monitorTime = data;
// 执行自定义方法
sendMdgUpdateMapParams();
// 事件交互-请求调用接口
apiRegistry.getCWQIValue.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
// 执行自定义方法
getListData();
};
const onchange1764917790537 = (value,selectValueArr,selectValueItem) => {
// 执行自定义方法
selectRegion(selectValueItem);
};
const onchange1764928247991 = (value,selectValueArr,selectValueItem) => {
// 执行自定义方法
selectPollutant(selectValueItem);
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "clearGotoPoint", // 消息名称
data: {}, // 发送的数据
});
// 执行自定义方法
changeSectionTableCol(selectValueItem);
};
const oncellClick1765101849546 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(row,column);
};
const oncellClick1765184233647 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(row,column);
};
const oncellClick1765184258044 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(row,column);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getRegionOptions: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"IS_POINT\":\"1\",\"PARENT_REGION_CODE\":\"global.regionaQuery.defaultRegionCode\",\"IS_SELF\":\"1\",\"interfaceId\":\"dbc171c05c6754e9bc26ad3678279d8d\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"IS_POINT":"1","PARENT_REGION_CODE":global.regionaQuery.defaultRegionCode,"IS_SELF":"1","interfaceId":"dbc171c05c6754e9bc26ad3678279d8d"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"IS_POINT\":\"1\",\"PARENT_REGION_CODE\":\global.regionaQuery.defaultRegionCode\,\"IS_SELF\":\"1\",\"interfaceId\":\"dbc171c05c6754e9bc26ad3678279d8d\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getRegionOptions'] = res.data;
                
     const { data, head } = res.data;

if (head.statusCode === '200' && data) {
  // 更新区域下拉
  state.regionOptions = data;
  const regionItem = data.find((val) => val.region_code === global.regionaQuery.regionCode);

  if (regionItem) {
    state.selectedRegionData.regionCode = regionItem.region_code;
    state.selectedRegionData.regionName = regionItem.region_name;
  }
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
 getZBList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"POINT_CODE\":\"\",\"POLLUTE_CODE\":\"\",\"WSYSTEMTYPE\":\"\",\"REGION_CODE\":\"\",\"MONITORTIME\":\"state.monitorTime\",\"REGION_TYPE\":\"state.selectedRegionData.regionType\",\"REGION_PATH\":\"state.selectedRegionData.regionCode\",\"interfaceId\":\"81a49e43c13add0d7df0f69c27562fd8\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"POINT_CODE":"","POLLUTE_CODE":"","WSYSTEMTYPE":"","REGION_CODE":"","MONITORTIME":state.monitorTime,"REGION_TYPE":state.selectedRegionData.regionType,"REGION_PATH":state.selectedRegionData.regionCode,"interfaceId":"81a49e43c13add0d7df0f69c27562fd8"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"POINT_CODE\":\"\",\"POLLUTE_CODE\":\"\",\"WSYSTEMTYPE\":\"\",\"REGION_CODE\":\"\",\"MONITORTIME\":\state.monitorTime\,\"REGION_TYPE\":\state.selectedRegionData.regionType\,\"REGION_PATH\":\state.selectedRegionData.regionCode\,\"interfaceId\":\"81a49e43c13add0d7df0f69c27562fd8\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getZBList'] = res.data;
                
     state.zbList = [];
state.zbListAll = [];
const { data, head } = res.data;

if (head.statusCode === '200' && Array.isArray(data)) {
  state.zbListAll = JSON.parse(JSON.stringify(data));
  setZbListData(data);
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.zbList = [];
state.zbListAll = [];

      reject(error);
    });
  });
},
              },
// 接口函数
 getDefaultTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"WSYSTEMTYPE\":\"\",\"POINT_CODE\":\"\",\"REGION_PATH\":\"global.regionaQuery.regionCode\",\"REGION_CODE\":\"\",\"interfaceId\":\"b21bbac284e473664e0b06f6b612020f\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"WSYSTEMTYPE":"","POINT_CODE":"","REGION_PATH":global.regionaQuery.regionCode,"REGION_CODE":"","interfaceId":"b21bbac284e473664e0b06f6b612020f"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"WSYSTEMTYPE\":\"\",\"POINT_CODE\":\"\",\"REGION_PATH\":\global.regionaQuery.regionCode\,\"REGION_CODE\":\"\",\"interfaceId\":\"b21bbac284e473664e0b06f6b612020f\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getDefaultTime'] = res.data;
                
     state.monitorTime = '';
const { data, head } = res.data;

if (head.statusCode === '200' && data) {
  // 获取最新监测时间
  state.monitorTime = data.MONITORTIME || '';
    console.log(111111)

}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.monitorTime = '';

      reject(error);
    });
  });
},
              },
// 接口函数
 getPollutanOptions: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"ALL_CODE\":\"all\",\"PAGE_SHOW\":\"true\",\"TREE_CODE\":\"CWQI_POLLUTE\",\"interfaceId\":\"fe11357e6d785a36738f41729cfb4b9f\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"ALL_CODE":"all","PAGE_SHOW":"true","TREE_CODE":"CWQI_POLLUTE","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"ALL_CODE\":\"all\",\"PAGE_SHOW\":\"true\",\"TREE_CODE\":\"CWQI_POLLUTE\",\"interfaceId\":\"fe11357e6d785a36738f41729cfb4b9f\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPollutanOptions'] = res.data;
                
     const { data, head } = res.data;

if (head.statusCode === '200' && Array.isArray(data)) {
  state.pollutantOptions = data;
  state.selectedPollutant = 'all';
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
 getDMList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"pageSize\":\"2000\",\"pageNum\":\"1\",\"START_TIME\":\"\",\"END_TIME\":\"\",\"POINT_CODE\":\"\",\"POLLUTE_CODE\":\"state.selectedPollutant\",\"WSYSTEMTYPE\":\"\",\"MONITORTIME\":\"state.monitorTime\",\"REGION_PATH\":\"state.selectedRegionData.regionCode\",\"interfaceId\":\"92891ae33ddaaeba5f2b9a6f3ba706ce\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"pageSize":"2000","pageNum":"1","START_TIME":"","END_TIME":"","POINT_CODE":"","POLLUTE_CODE":state.selectedPollutant,"WSYSTEMTYPE":"","MONITORTIME":state.monitorTime,"REGION_PATH":state.selectedRegionData.regionCode,"interfaceId":"92891ae33ddaaeba5f2b9a6f3ba706ce"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"pageSize\":\"2000\",\"pageNum\":\"1\",\"START_TIME\":\"\",\"END_TIME\":\"\",\"POINT_CODE\":\"\",\"POLLUTE_CODE\":\state.selectedPollutant\,\"WSYSTEMTYPE\":\"\",\"MONITORTIME\":\state.monitorTime\,\"REGION_PATH\":\state.selectedRegionData.regionCode\,\"interfaceId\":\"92891ae33ddaaeba5f2b9a6f3ba706ce\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getDMList'] = res.data;
                
     state.dmList = [];
state.dmListAll = [];
const { data, head } = res.data;

if (head.statusCode === '200' && Array.isArray(data)) {
  state.dmListAll = JSON.parse(JSON.stringify(data));;
  setDmListData(data);
  console.log(state.dmList, 'state.dmList')
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.dmList = [];
state.dmListAll = [];


      reject(error);
    });
  });
},
              },
// 接口函数
 getCWQIValue: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"post","baseURL":"global.foshanServiceBaseUrl","data":"qs.stringify({\"CAL_TYPE\":\"state.calType\",\"WSYSTEMTYPE\":\"river,lake\",\"MONITORTIME\":\"state.monitorTime\",\"REGION_TYPE\":\"state.selectedRegionData.regionType\",\"REGION_CODE\":\"state.selectedRegionData.regionCode\",\"interfaceId\":\"df594c9791d9187af9f8c8771c2ce9ef\"})qsstringifyend"},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"post","baseURL":global.foshanServiceBaseUrl,"data":qs.stringify({"CAL_TYPE":state.calType,"WSYSTEMTYPE":"river,lake","MONITORTIME":state.monitorTime,"REGION_TYPE":state.selectedRegionData.regionType,"REGION_CODE":state.selectedRegionData.regionCode,"interfaceId":"df594c9791d9187af9f8c8771c2ce9ef"}),}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  "qs.stringify({\"CAL_TYPE\":\state.calType\,\"WSYSTEMTYPE\":\"river,lake\",\"MONITORTIME\":\state.monitorTime\,\"REGION_TYPE\":\state.selectedRegionData.regionType\,\"REGION_CODE\":\state.selectedRegionData.regionCode\,\"interfaceId\":\"df594c9791d9187af9f8c8771c2ce9ef\"})qsstringifyend");
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCWQIValue'] = res.data;
                
     state.CWQIValue = '-';
const { data, head } = res.data;

if (head.statusCode === '200' && Array.isArray(data) && data.length) {
  state.CWQIValue = data[0].region_cwqi || '-';
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.CWQIValue = '-';

      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-CWQIEntry', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
// 执行自定义方法
watchRegionChange();
// 执行自定义方法
watchMapApploaded();
// 执行自定义方法
watchListVisible();
onBeforeUnmount(() => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'waterGlobalVariables.mapAppLoaded',
                    value:false,
                    data: {
                      waterGlobalVariables:{mapAppLoaded: false}
                    },
                  });
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "clearGotoPoint", // 消息名称
data: {}, // 发送的数据
});
});
onMounted(() => {
setPageScale('t-l-c-CWQIEntry', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tTablex0x2ComputedData = computed(() => _.merge({}, componentState.tTablex0x2.default, componentState.tTablex0x2?.[state.screenSize]));

 const tTablex0x3ComputedData = computed(() => _.merge({}, componentState.tTablex0x3.default, componentState.tTablex0x3?.[state.screenSize]));

 const tTablex0x4ComputedData = computed(() => _.merge({}, componentState.tTablex0x4.default, componentState.tTablex0x4?.[state.screenSize]));

 const tSelectx0x5ComputedData = computed(() => _.merge({}, componentState.tSelectx0x5.default, componentState.tSelectx0x5?.[state.screenSize]));

 const tSelectx0x6ComputedData = computed(() => _.merge({}, componentState.tSelectx0x6.default, componentState.tSelectx0x6?.[state.screenSize]));

 const tDatePickerx0x7ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x7.default, componentState.tDatePickerx0x7?.[state.screenSize]));

 const tTabsBasex0x8ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x8.default, componentState.tTabsBasex0x8?.[state.screenSize]));

 const tRectx0x9ComputedData = computed(() => _.merge({}, componentState.tRectx0x9.default, componentState.tRectx0x9?.[state.screenSize]));

 const tImageBasex0x10ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x10.default, componentState.tImageBasex0x10?.[state.screenSize]));

 const tTextCommonx0x11ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x11.default, componentState.tTextCommonx0x11?.[state.screenSize]));

 const tTextCommonx0x12ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x12.default, componentState.tTextCommonx0x12?.[state.screenSize]));

 const tTabsBasex0x13ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x13.default, componentState.tTabsBasex0x13?.[state.screenSize]));

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
tRectx0x1ComputedData,
tTablex0x2ComputedData,
tTablex0x3ComputedData,
tTablex0x4ComputedData,
tSelectx0x5ComputedData,
tSelectx0x6ComputedData,
tDatePickerx0x7ComputedData,
tTabsBasex0x8ComputedData,
tRectx0x9ComputedData,
tImageBasex0x10ComputedData,
tTextCommonx0x11ComputedData,
tTextCommonx0x12ComputedData,
tTabsBasex0x13ComputedData,
oncellClick1765184258044,
oncellClick1765184233647,
oncellClick1765101849546,
onchange1764917790537,
onchange1764928247991,
ondateChange1764916524204,
ontabClick1764847106746,
ontabClick1764854183953,
};
},
};