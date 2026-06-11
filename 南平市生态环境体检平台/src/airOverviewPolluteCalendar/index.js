window.airOverviewPolluteCalendarComponent = {
template: 
`<div id="t-l-c-airOverviewPolluteCalendar" class="t-l-c-airOverviewPolluteCalendar" >` +
`<t-rect id="t-rect-626f.812d165ae" class="airOverviewPolluteCalendar-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-d868.2ea3726ea" class="airOverviewPolluteCalendar-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-6eac.03a957e22" class="airOverviewPolluteCalendar-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-e0bc.2cacf0b5b" class="airOverviewPolluteCalendar-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1734492623044">` +
`</t-rect>` +
`<t-tabs-base id="t-tabs-base-b7df.d15826e42" class="airOverviewPolluteCalendar-t-tabs-base-0-4"  :data="replaceCssVariables(filterData(state.polluteList, componentPropBindingMap?.['t-tabs-base-b7df.d15826e42']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :space="tTabsBasex0x4ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.polluteActive, componentPropBindingMap?.['t-tabs-base-b7df.d15826e42']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x4ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x4ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x4ComputedData.alias" :c-style="tTabsBasex0x4ComputedData.cStyle" @tab-click="ontabClick1736921718330">` +
`</t-tabs-base>` +
`<t-select id="t-select-56ea.134f13a4d" class="airOverviewPolluteCalendar-t-select-0-5"  :active-value="replaceCssVariables(filterData(state.REGION_TYPE, componentPropBindingMap?.['t-select-56ea.134f13a4d']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x5ComputedData.options" :alias="tSelectx0x5ComputedData.alias" :multiple="tSelectx0x5ComputedData.multiple" :placeholder="tSelectx0x5ComputedData.placeholder" :clearable="tSelectx0x5ComputedData.clearable" :disabled="tSelectx0x5ComputedData.disabled" :name="tSelectx0x5ComputedData.name" :autocomplete="tSelectx0x5ComputedData.autocomplete" :filterable="tSelectx0x5ComputedData.filterable" :no-match-text="tSelectx0x5ComputedData.no-match-text" :no-data-text="tSelectx0x5ComputedData.no-data-text" :c-style="tSelectx0x5ComputedData.cStyle" @change="onchange1734689433525">` +
`</t-select>` +
`<t-select v-if="state.type === 'year'" id="t-select-fca3.c281eca32" class="airOverviewPolluteCalendar-t-select-0-6"  :active-value="replaceCssVariables(filterData(state.POINT_CODE, componentPropBindingMap?.['t-select-fca3.c281eca32']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.regionList, componentPropBindingMap?.['t-select-fca3.c281eca32']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x6ComputedData.alias" :multiple="tSelectx0x6ComputedData.multiple" :placeholder="tSelectx0x6ComputedData.placeholder" :clearable="tSelectx0x6ComputedData.clearable" :disabled="tSelectx0x6ComputedData.disabled" :name="tSelectx0x6ComputedData.name" :autocomplete="tSelectx0x6ComputedData.autocomplete" :filterable="tSelectx0x6ComputedData.filterable" :no-match-text="tSelectx0x6ComputedData.no-match-text" :no-data-text="tSelectx0x6ComputedData.no-data-text" :c-style="tSelectx0x6ComputedData.cStyle" @change="onchange1736759726394_0_0">` +
`</t-select>` +
`<t-tabs-base id="t-tabs-base-c335.ddc567d3a" class="airOverviewPolluteCalendar-t-tabs-base-0-7"  :data="tTabsBasex0x7ComputedData.data" :space="tTabsBasex0x7ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.type, componentPropBindingMap?.['t-tabs-base-c335.ddc567d3a']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x7ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x7ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x7ComputedData.alias" :c-style="tTabsBasex0x7ComputedData.cStyle" @tab-click="ontabClick1733908971891">` +
`</t-tabs-base>` +
`<t-date-picker v-if="state.type === 'day'" id="t-date-picker-bbb1.6515f81cc" class="airOverviewPolluteCalendar-t-date-picker-0-9"  :placeholder="tDatePickerx0x9ComputedData.placeholder" :start-placeholder="tDatePickerx0x9ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x9ComputedData.endPlaceholder" :type="tDatePickerx0x9ComputedData.type" :clearable="tDatePickerx0x9ComputedData.clearable" :range-separator="tDatePickerx0x9ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.date, componentPropBindingMap?.['t-date-picker-bbb1.6515f81cc']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x9ComputedData.separator" :readonly="tDatePickerx0x9ComputedData.readonly" :editable="tDatePickerx0x9ComputedData.editable" :c-style="tDatePickerx0x9ComputedData.cStyle" :is-disabled-front="tDatePickerx0x9ComputedData.isDisabledFront" :disabled-date="replaceCssVariables(filterData(state.dialogParmas.maxTimeValue, componentPropBindingMap?.['t-date-picker-bbb1.6515f81cc']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @date-change="ondateChange1733906791700">` +
`</t-date-picker>` +
`<t-date-picker v-if="state.type === 'hour'" id="t-date-picker-db9d.2122e5fe9" class="airOverviewPolluteCalendar-t-date-picker-0-10"  :placeholder="tDatePickerx0x10ComputedData.placeholder" :start-placeholder="tDatePickerx0x10ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x10ComputedData.endPlaceholder" :type="tDatePickerx0x10ComputedData.type" :clearable="tDatePickerx0x10ComputedData.clearable" :range-separator="tDatePickerx0x10ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.date, componentPropBindingMap?.['t-date-picker-db9d.2122e5fe9']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x10ComputedData.separator" :readonly="tDatePickerx0x10ComputedData.readonly" :editable="tDatePickerx0x10ComputedData.editable" :c-style="tDatePickerx0x10ComputedData.cStyle" :is-disabled-front="tDatePickerx0x10ComputedData.isDisabledFront" :disabled-date="replaceCssVariables(filterData(state.dialogParmas.maxTimeValue, componentPropBindingMap?.['t-date-picker-db9d.2122e5fe9']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @date-change="ondateChange1733909076660">` +
`</t-date-picker>` +
`<t-chart-design v-if="state.type === 'year'" id="t-chart-design-8350.5c80b7ad8" class="airOverviewPolluteCalendar-t-chart-design-0-11"  :empty-img="tChartDesignx0x11ComputedData.emptyImg" :c-style="tChartDesignx0x11ComputedData.cStyle" :options="replaceCssVariables(filterData(state.chartOption, componentPropBindingMap?.['t-chart-design-8350.5c80b7ad8']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-chart-design>` +
`<t-date-picker v-if="state.type === 'year'" id="t-date-picker-2b5a.6e74e6fe2" class="airOverviewPolluteCalendar-t-date-picker-0-12"  :placeholder="tDatePickerx0x12ComputedData.placeholder" :start-placeholder="tDatePickerx0x12ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x12ComputedData.endPlaceholder" :type="tDatePickerx0x12ComputedData.type" :clearable="tDatePickerx0x12ComputedData.clearable" :range-separator="tDatePickerx0x12ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.year, componentPropBindingMap?.['t-date-picker-2b5a.6e74e6fe2']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x12ComputedData.separator" :readonly="tDatePickerx0x12ComputedData.readonly" :editable="tDatePickerx0x12ComputedData.editable" :c-style="tDatePickerx0x12ComputedData.cStyle" :is-disabled-front="tDatePickerx0x12ComputedData.isDisabledFront" :disabled-date="replaceCssVariables(filterData(state.dialogParmas.maxTimeValue, componentPropBindingMap?.['t-date-picker-2b5a.6e74e6fe2']['disabledDate'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @date-change="ondateChange1736748489449_0_0">` +
`</t-date-picker>` +
`<t-table v-if="state.type === 'day'" id="t-table-5dcc.851d00026" class="airOverviewPolluteCalendar-t-table-0-13"  :height="tTablex0x13ComputedData.height" :stripe="tTablex0x13ComputedData.stripe" :border="tTablex0x13ComputedData.border" :auto-scroll="tTablex0x13ComputedData.autoScroll" :speed="tTablex0x13ComputedData.speed" :show-animation="tTablex0x13ComputedData.showAnimation" :animation-delay="tTablex0x13ComputedData.animationDelay" :animation-type="tTablex0x13ComputedData.animationType" :columns="replaceCssVariables(filterData(state.tableColumn, componentPropBindingMap?.['t-table-5dcc.851d00026']['columns'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data="replaceCssVariables(filterData(state.tableData, componentPropBindingMap?.['t-table-5dcc.851d00026']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x13ComputedData.defaultSort" :c-style="tTablex0x13ComputedData.cStyle">` +
`</t-table>` +
`<t-table v-if="state.type === 'hour'" id="t-table-e792.878458ef2" class="airOverviewPolluteCalendar-t-table-0-14"  :height="tTablex0x14ComputedData.height" :stripe="tTablex0x14ComputedData.stripe" :border="tTablex0x14ComputedData.border" :auto-scroll="tTablex0x14ComputedData.autoScroll" :speed="tTablex0x14ComputedData.speed" :show-animation="tTablex0x14ComputedData.showAnimation" :animation-delay="tTablex0x14ComputedData.animationDelay" :animation-type="tTablex0x14ComputedData.animationType" :columns="replaceCssVariables(filterData(state.tableColumn, componentPropBindingMap?.['t-table-e792.878458ef2']['columns'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data="replaceCssVariables(filterData(state.tableData, componentPropBindingMap?.['t-table-e792.878458ef2']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x14ComputedData.defaultSort" :c-style="tTablex0x14ComputedData.cStyle">` +
`</t-table>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-626f.812d165ae":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-d868.2ea3726ea":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-6eac.03a957e22":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-e0bc.2cacf0b5b":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-b7df.d15826e42":{"attributeName":"tTabsBasex0x4","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-select-56ea.134f13a4d":{"attributeName":"tSelectx0x5","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-select-fca3.c281eca32":{"attributeName":"tSelectx0x6","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-c335.ddc567d3a":{"attributeName":"tTabsBasex0x7","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-table-88da.1b6579d2b":{"attributeName":"tTablex0x8"},"t-date-picker-bbb1.6515f81cc":{"attributeName":"tDatePickerx0x9","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-date-picker-db9d.2122e5fe9":{"attributeName":"tDatePickerx0x10","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-chart-design-8350.5c80b7ad8":{"attributeName":"tChartDesignx0x11","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-date-picker-2b5a.6e74e6fe2":{"attributeName":"tDatePickerx0x12","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-table-5dcc.851d00026":{"attributeName":"tTablex0x13","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"showAnimation":{"filters":[]},"animationDelay":{"filters":[]},"animationType":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-table-e792.878458ef2":{"attributeName":"tTablex0x14","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"showAnimation":{"filters":[]},"animationDelay":{"filters":[]},"animationType":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}}};
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
   DISTRICT_CODE: "",
   PROVINCE_CODE: "",
   REGION_CODE: "",
   nextYear: "2026",
   selectTime: "2025",
   prevYear: "2024",
   parentCode: "350000000000",
   regionList: [],
   districtCode: "",
   provinceCode: "",
   parentRegionCode: "",
   regionCode: "",
   pointType: "",
   pointCode: "",
   year: "",
   renderChartData: [],
   tableResult: [],
   polluteActive: "AQI",
   polluteList: [],
   POINT_CODE: "",
   pointList: [],
   chartOption: {},
   isShowTable: true,
   dialogParmas: {"maxTimeValue":""},
   tableData: [],
   pointNameList: [],
   REGION_TYPE: "",
   type: "hour",
   date: "",
   stateList: [{"name":"优","fontStyle":{"color":"#000","fontSize":"var(--business-text-size-12)","fontWeight":"bold","padding":"","margin":"","width":"25PX","minHeight":"20PX","height":"auto","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","backgroundImage":"","backgroundSize":"100%","background":"#00e400","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"良","fontStyle":{"color":"#000","fontSize":"var(--business-text-size-12)","fontWeight":"bold","padding":"","margin":"","width":"25PX","minHeight":"20PX","height":"auto","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#f9d000","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"轻度污染","fontStyle":{"color":"#000","fontSize":"var(--business-text-size-12)","fontWeight":"bold","padding":"","margin":"","width":"25PX","minHeight":"20PX","height":"auto","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#FF7E00","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"中度污染","fontStyle":{"color":"#000","fontSize":"var(--business-text-size-12)","fontWeight":"bold","padding":"","margin":"","width":"25PX","minHeight":"20PX","height":"auto","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#FF0000","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"重度污染","fontStyle":{"color":"#000","fontSize":"var(--business-text-size-12)","fontWeight":"bold","padding":"","margin":"","width":"25PX","minHeight":"20PX","height":"auto","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#c500f4","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"严重污染","fontStyle":{"color":"#000","fontSize":"var(--business-text-size-12)","fontWeight":"bold","padding":"","margin":"","width":"25PX","minHeight":"20PX","height":"auto","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#8c0024","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"无","fontStyle":{"color":"#000","fontSize":"var(--business-text-size-12)","fontWeight":"bold","padding":"","margin":"","width":"25PX","minHeight":"20PX","height":"auto","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#f2f2f2","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}}],
   tableColumn: [],
   stateListForDay: [{"name":"优","fontStyle":{"color":"#000","fontSize":"var(--business-text-size-12)","fontWeight":"bold","padding":"","margin":"","width":"40PX","minHeight":"20PX","height":"auto","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","backgroundImage":"","backgroundSize":"100%","background":"#00e400","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"良","fontStyle":{"color":"#000","fontSize":"var(--business-text-size-12)","fontWeight":"bold","padding":"","margin":"","width":"40PX","minHeight":"20PX","height":"auto","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#f9d000","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"轻度污染","fontStyle":{"color":"#000","fontSize":"var(--business-text-size-12)","fontWeight":"bold","padding":"","margin":"","width":"40PX","minHeight":"20PX","height":"auto","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#FF7E00","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"中度污染","fontStyle":{"color":"#000","fontSize":"var(--business-text-size-12)","fontWeight":"bold","padding":"","margin":"","width":"40PX","minHeight":"20PX","height":"auto","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#FF0000","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"重度污染","fontStyle":{"color":"#000","fontSize":"var(--business-text-size-12)","fontWeight":"bold","padding":"","margin":"","width":"40PX","minHeight":"20PX","height":"auto","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#c500f4","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"严重污染","fontStyle":{"color":"#000","fontSize":"var(--business-text-size-12)","fontWeight":"bold","padding":"","margin":"","width":"40PX","minHeight":"20PX","height":"auto","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#8c0024","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}},{"name":"无","fontStyle":{"color":"#000","fontSize":"var(--business-text-size-12)","fontWeight":"bold","padding":"","margin":"","width":"40PX","minHeight":"20PX","height":"auto","lineHeight":"18PX","borderRadius":"4PX","borderWidth":"0PX","borderStyle":"solid","background":"#f2f2f2","borderColor":""},"imageStyle":{"marginRight":"","borderRadius":"","width":"0PX","height":"0PX"}}],
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
            default: {"width":"1851px","height":"712px","position":"unset","left":"34.5px","top":"186px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1851px","height":"712px","position":"unset","left":"34.5px","top":"186px","backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"1851px","height":"47px","backgroundColor":"var(--business-dialog-title-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"34px","top":"186px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1851px","height":"47px","backgroundColor":"var(--business-dialog-title-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg60)","position":"unset","left":"34px","top":"186px","animationName":""}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"143px","height":"47px","color":"rgba(255, 255, 255, 1)","fontSize":"var(--business-num-size-18)","position":"unset","left":"49px","top":"186px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":"","lineHeight":"47px"},
            
            },
 default: { 
 
label:"污染日历",
editable:false,
cStyle:{"wrapper":{"default":{"width":"143px","height":"47px","color":"rgba(255, 255, 255, 1)","fontSize":"var(--business-num-size-18)","position":"unset","left":"49px","top":"186px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":"","lineHeight":"47px"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1845px","top":"197px","backgroundColor":"var(--common-btn-default)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)","position":"unset","left":"1845px","top":"197px","backgroundColor":"var(--common-btn-default)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-03-19/f565d9cc0f934108b703c5d280aea0fa.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}}}, 
 },
},
tTabsBasex0x4: {
defaultStyle: {
            default: {"width":"410px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""},
            
            },
 default: { 
 
data:[],
space:1,
selectedTabVal:"AQI",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"name","disabled":false},
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":""}},"itemWrapper":{"default":{"width":"80px","height":"32px","fontSize":"14px","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px"}},"label":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","lineHeight":"32px","whiteSpace":"nowrap","textOverflow":"ellipsis","width":"100%","height":"100%","overflow":"hidden","display":"inline-block"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","fontSize":"var(--business-text-size-14)","lineHeight":"32px","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"inline-block","width":"100%","height":"100%","overflow":"hidden"}}}, 
 },
},
tSelectx0x5: {
defaultStyle: {
            default: {"width":"195px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},
            
            },
 default: { 
 
activeValue:"",
options:[{"value":"province","label":"省内","disabled":false},{"value":"city","label":"市内","disabled":false},{"value":"point","label":"站点","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"195px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tSelectx0x6: {
defaultStyle: {
            default: {"width":"195px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},
            
            },
 default: { 
 
activeValue:"",
options:[],
alias:{"label":"POINT_NAME","value":"POINT_CODE","disabled":"disabled"},
multiple:false,
placeholder:"请选择",
clearable:false,
disabled:false,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"195px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tTabsBasex0x7: {
defaultStyle: {
            default: {"width":"300px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"49px","top":"242px"},
            
            },
 default: { 
 
data:[{"label":"48h变化趋势","value":"hour"},{"label":"30天变化趋势","value":"day"},{"label":"年度日历","value":"year"}],
space:1,
selectedTabVal:"hour",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":false},
cStyle:{"wrapper":{"default":{"width":"300px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"49px","top":"242px"}},"itemWrapper":{"default":{"width":"80px","height":"32px","fontSize":"14px","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px"}},"label":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","lineHeight":"32px","whiteSpace":"nowrap","textOverflow":"ellipsis","width":"100%","height":"100%","overflow":"hidden","display":"inline-block"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","fontSize":"var(--business-text-size-14)","lineHeight":"32px","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"inline-block","width":"100%","height":"100%","overflow":"hidden"}}}, 
 },
},
tDatePickerx0x9: {
defaultStyle: {
            default: {"width":"195px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"date",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"195px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16)","lineHeight":"var(--business-text-size-16)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}},"disableDateWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tDatePickerx0x10: {
defaultStyle: {
            default: {"width":"195px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择时间",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimehour",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"195px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","paddingLeft":"10px","paddingRight":"10px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","display":"none"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--business-white)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16)","lineHeight":"var(--business-text-size-16)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-white)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}},"disableDateWrapper":{"default":{"fontSize":"var(--business-text-size-12)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tChartDesignx0x11: {
defaultStyle: {
            default: {"height":"605px","width":"1800px","position":"unset","left":"60px","top":"284px","overflow":"auto"},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"605px","width":"1800px","position":"unset","left":"60px","top":"284px","overflow":"auto"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
tDatePickerx0x12: {
defaultStyle: {
            default: {"width":"195px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","min-height":"32px","line-height":"normal","min-width":"150px","max-width":"none"},
            
            },
 default: { 
 
placeholder:"请选择时间",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"year",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"195px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","min-height":"32px","line-height":"normal","min-width":"150px","max-width":"none"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","min-height":"32px","line-height":"normal"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"30px","fontSize":"var(--business-text-size-14)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","fontSize":"var(--business-text-size-12)","height":"auto"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--skin-font-color)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--skin-font-color)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--skin-font-color)","borderLeft":"1px solid var(--skin-font-color)","borderTop":"1px solid var(--skin-font-color)","borderRight":"1px solid var(--skin-font-color)","borderBottom":"1px solid var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--skin-font-color)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"inputCloseIcons":{"default":{"fontSize":"var(--business-text-size-14)"}},"dateHeaderYearBtnWrapper":{"default":{"fontSize":"var(--business-text-size-14)"}},"dateHeaderYearBtn":{"default":{"fontSize":"var(--business-text-size-14)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-14)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tTablex0x13: {
defaultStyle: {
            default: {"width":"1817px","height":"580px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"580",
stripe:true,
border:false,
autoScroll:false,
speed:6,
showAnimation:false,
animationDelay:0.1,
animationType:"animate__fadeInUp",
columns:"",
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"1817px","height":"580px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-12)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tTablex0x14: {
defaultStyle: {
            default: {"width":"1817px","height":"580px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"580",
stripe:true,
border:false,
autoScroll:false,
speed:6,
showAnimation:false,
animationDelay:0.1,
animationType:"animate__fadeInUp",
columns:[],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"1817px","height":"580px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
});
const getCalendarData = () => {

const getData = async () => {
  handleParams();
  if (state.type === 'year') {
    // 时间未选不请求
    if (state.date) {
      if(state.REGION_TYPE === 'province' || state.REGION_TYPE === 'city'){
         await apiRegistry.getRegion.request();
      }else if(state.REGION_TYPE === 'point'){
         await apiRegistry.getPointName.request();
      }
      await apiRegistry.getChartData.request();
    }
  } else {
    await apiRegistry.getPointName.request();
    await apiRegistry.getCalendarList.request();
  }
}
getData();

};
const getAQILevel = (AQI) => {
let level = '';
if (AQI <= 50) {
   level = '优';
} else if (AQI <= 100) {
   level = '良';
} else if (AQI <= 150) {
   level = '轻度污染';
} else if (AQI <= 200) {
   level = '中度污染';
} else if (AQI <= 300) {
   level = '重度污染';
} else if (AQI > 300) {
   level = '严重污染';
} else {
   level = '无';
}
return level;
};
const setDefaultParam = () => {

// 保存外层信息
state.dialogParmas = global.businessDialog.dialogParmas;
// 设置时间类型
state.type = global.businessDialog.dialogParmas.timeType || global.airOverview.rightView.timeType;
// 设置时间
state.date = global.businessDialog.dialogParmas.timeValue || global.airOverview.rightView.timeValue;
state.year = global.businessDialog.dialogParmas.timeValue.slice(0,4)
setYearValue(state.year);
// 设置污染物列表
changePollutionList();

};
const setDate = () => {
// 切换tab时，时间置为从外层页面带入的默认时间
if (state.date && state.type === 'hour') {
  state.date = state.dialogParmas.timeValue +
    (state.dialogParmas.timeType === 'day' ? ' 00' : '');
} else if (state.date && state.type === 'day') {
  // 选中30天的时候，需要判断如果处理后的默认时间为当天，需处理成昨天的时间
  const dayTime = state.dialogParmas.timeValue.slice(0, 10);
  state.date = dayTime === dateFormat(new Date(), 'YYYY-MM-DD') ?
    dateFormat(new Date(new Date(dayTime).getTime() - 24 * 1000 * 3600), 'YYYY-MM-DD')
    : dayTime;
} else if (state.date && state.type === 'year') {
  state.year = state.dialogParmas.timeValue.slice(0, 4);
}
};
const renderChart = () => {
let data = [];
if (state.renderChartData.length) {
  // 补充去年数据
  const prevData = generateRangeDates(state.prevYear + '-12-22', state.prevYear + '-12-31');
  prevData.forEach((item) => {
    data.push({
      'MONITORTIME': item,
    });
  });

  // 生成今年数据，为了补齐数据（因为接口返回的数据中，部分日期缺失）
  const centerData = generateRangeDates(state.selectTime + '-01-01', state.selectTime + '-12-31');
  centerData.forEach((item) => {
    const sameRow = state.renderChartData.find((dataItem) => dataItem.MONITORTIME === item);
    data.push(
      sameRow ? {
        ...sameRow,
      } : {
        'MONITORTIME': item,
      }
    )
  });

  // 填充明年数据
  const afterData = generateRangeDates(state.nextYear + '-01-01', state.nextYear + '-01-15');
  afterData.forEach((item) => {
    data.push({
      'MONITORTIME': item,
    })
  });
} else {
  data = [];
}

/**
 * 判断是否包含中文
 */
const containsChinese = (str) => {
  // 正则表达式匹配中文字符
  const regex = /[\u4e00-\u9fa5]/;
  return regex.test(str);
};

/**
 * 处理多个首要污染物格式-隐藏
 */
const polluteFormat = (str, ellipsis) => {
  // 中文字符显示个数
  const chineseWordLength = 3;
  if (str) {
    let result = [];
    let polluteArr = str.split(",");
    polluteArr.forEach(item => {
      if (item === 'O3_8') {
        result.push(convertCharacter('O3') + '-8h');
      } else {
        result.push(convertCharacter(item));
      }
    })
    // 多个显示省略号
    if (ellipsis && result.length > 1) {
      return `${replacePollutantStr(!containsChinese(result[0]) ? result[0] : result[0].slice(0, chineseWordLength))}...`;
    }
    return replacePollutantStr(ellipsis ? (!containsChinese(result.join(',')) ? result.join(',') : result.join(',').slice(0, chineseWordLength) + '...')
      : result.join(','));
  } else {
    return '--';
  }
};

function getCalendarTextWidth(text, fontSize) {
  const size = parseFloat(fontSize) || 12;
  return String(text || '').split('').reduce((total, char) => {
    if (/[\u4e00-\u9fa5]/.test(char)) {
      return total + size;
    }
    if (/[A-Z]/i.test(char)) {
      return total + size * 0.72;
    }
    if (/[0-9\u2080-\u2089]/.test(char)) {
      return total + size * 0.55;
    }
    return total + size * 0.38;
  }, 0);
}
function clipCalendarText(text, maxWidth, fontSize) {
  const value = String(text || '');
  if (getCalendarTextWidth(value, fontSize) <= maxWidth) {
    return value;
  }
  let result = '';
  for (const char of value) {
    if (getCalendarTextWidth(result + char, fontSize) > maxWidth) {
      break;
    }
    result += char;
  }
  return result;
}
function getCalendarCellPolluteText(text, maxWidth, fontSize) {
  if (!text || text === '--') {
    return '--';
  }
  const firstPollute = String(text).split(',')[0];
  return clipCalendarText(firstPollute, maxWidth, fontSize);
}

if (data && data.length) {
  // 日期单元格描边色
  const cellBorderColor = getCssVariable('--business-show-bg60') || 'rgba(20, 112, 204, 0.6)';
  const cellBgColor = getCssVariable('--business-dialog-bg') || '#003B39';
  // 月份头部背景色
  const monthCellBgColor = getCssVariable('--business-dialog-title-bg') || '#003d9b';
  // 周单元格背景色
  const weekCellBgColor = getCssVariable('--table-interval-backgroundColor-opaque') || 'rgba(20, 112, 204, 0.1)';
  // 非本月日期文字颜色
  const notCurMonthColor = getCssVariable('--business-text-avianize') || 'rgba(255, 255, 255, 0.6)';
  // 一般文字颜色-标题月份、星期几文字、tooltip文字颜色
  const businessWhiteColor = getCssVariable('--business-white') || "#fff";
  // 文字字体-14px
  const fontSize14 = parseInt(getCssVariable('--business-text-size-14')) || 14;

  // 月份、周单元格高度
  const monthCellHeight = 20;
  // 日期单元格宽、高
  const dayCellWidth = 42;
  const dayCellHeight = 42;

  let pollute = state.polluteActive;
  let polluteName = convertCharacter(state.polluteActive);
  // 12个月（每个元素包含每个日历图的数据，每个日历有42个（7x6）格子，故第一和最后格子不一定是当月的第一和最后日期）
  let seriesData = [];
  // 12个月（每个元素包含每个月的日历图的开始时间和结尾时间，每个日历有42个（7x6）格子，故第一和最后格子不一定是当月的第一和最后日期）
  let calBeginEndDate = [];

  let monthIndex = -1;
  let cellIndex = 0;

  for (let i = 10; i < data.length; i++) {
    let dayOfMonth = Number(data[i].MONITORTIME.substring(8, 10));
    if (dayOfMonth == "01") {
      // 在数据的每月1日加月并重置日历格索引
      monthIndex++;
      if (monthIndex > 11) {
        break;
      }
      cellIndex = 0;
      seriesData[monthIndex] = [];
      calBeginEndDate[monthIndex] = [];

      let year = Number(data[i].MONITORTIME.substring(0, 4));
      let month = Number(data[i].MONITORTIME.substring(5, 7));
      // 处理当月日历第一行的上月几天的文字显示
      let dateFirst = new Date();
      // 2017年的时间有BUG无法setMonth到2月份
      dateFirst.setFullYear(year, 0, 1, 0, 0, 0, 0);
      dateFirst.setDate(1 + (month - 1) * 31);
      dateFirst.setDate(1);
      let dayOfWeekIndex = dateFirst.getDay();
      for (let j = dayOfWeekIndex; j > 0; j--) {
        seriesData[monthIndex][cellIndex] = {
          value: [data[i - j].MONITORTIME, -5, '--', -5],
          label: {
            normal: {
              fontSize: fontSize14,
              show: true,
              formatter: function (params) {
                return Number(params.value[0].substring(8, 10));
              },
              color: notCurMonthColor,
              position: 'inside',
              verticalAlign: 'middle',
            }
          },
        }
        cellIndex++;
      }
      // 当月日历的第一格日期
      calBeginEndDate[monthIndex][0] = data[i - dayOfWeekIndex].MONITORTIME;
      // 处理当月日历最后几行的下月几天的文字显示
      let dateEnd = new Date(dateFirst.getTime());
      dateEnd.setDate(dateEnd.getDate() + 35);
      dateEnd.setDate(1);
      let days = Math.floor((dateEnd.getTime() - dateFirst.getTime()) / (24 * 3600 * 1000));

      let EndCellIndex = cellIndex + days;
      while (EndCellIndex < 42) {
        seriesData[monthIndex][EndCellIndex] = {
          value: [data[i - cellIndex + EndCellIndex].MONITORTIME, -5, '--', -5],
          label: {
            normal: {
              show: true,
              fontSize: fontSize14,
              formatter: function (params) {
                return Number(params.value[0].substring(8, 10));
              },
              color: notCurMonthColor,
              position: 'inside',
              verticalAlign: 'middle',
            }
          },
        }
        EndCellIndex++;
      }

      // 当月日历图的最后一格日期
      calBeginEndDate[monthIndex][1] = data[i - cellIndex + EndCellIndex - 1].MONITORTIME;

    }

    seriesData[monthIndex][cellIndex] = {
      value: [
        data[i].MONITORTIME,
        (Number(data[i][pollute]) ? Number(data[i][pollute]) : -1),
        polluteFormat(data[i].PRIMPOLLUTE),
        (Number(data[i][getLevelValueKey(pollute)]) ? Number(data[i][getLevelValueKey(pollute)]) : -1)
        ],
      label: {
        normal: {
          show: true,
          formatter: function (params) {
            if (pollute == 'AQI') {

              const cellPolluteText = getCalendarCellPolluteText(polluteFormat(params.value[2], true), dayCellWidth - 4, global.publicFontSizeConfig.fontSize12);
              return Number(params.value[0].substring(8, 10)) + '\n{p|' + cellPolluteText + "}";

              // return Number(params.value[0].substring(8, 10)) + '\n{p|' + (params.value[2] ? polluteFormat(params.value[2], true) : '--') + "}";
            } else {
              return Number(params.value[0].substring(8, 10)) + "\n";
            }
          },
          fontSize: global.publicFontSizeConfig.fontSize12,
          align: 'center',
          verticalAlign: 'middle',
          position: 'inside',
          color: businessWhiteColor,
          width: dayCellWidth,
          overflow: 'truncate',
          ellipsis: '..',
          rich: {
            "p": {
              fontSize: global.publicFontSizeConfig.fontSize12,
              width: dayCellWidth - 4,
              overflow: 'truncate',
              ellipsis: '..',
            },
          },
        }
      },
    };
    cellIndex++;
  }
  // echarts的月份显示只能在日历左边或右边，上边和下边只能显示年份和星期，故只能自定义年份框来显示月份。。
  let monthCh = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
  let calenderData = [];
  let seriesArray = []
  // 日历图的横向位置索引
  let index_x = 1;
  // 日历图的纵向位置索引
  let index_y = 1;
  // 自定义年份框来显示月份
  for (let i = 0; i < 12; i++) {
    let monthstr = monthCh[i];

    calenderData[i] = {
      orient: 'vertical',
      splitLine: {
        show: true,
        lineStyle: {
          color: cellBorderColor,
        }
      },
      itemStyle: {
        borderColor: cellBorderColor,
      },
      yearLabel: {
        margin: 21,
        borderWidth: 1,
        formatter: monthstr,
        color: businessWhiteColor,
        backgroundColor: monthCellBgColor,
        borderColor: cellBorderColor,
        borderType: 'solid',
        fontWeight: 'normal',
        fontSize: fontSize14,
        width: dayCellWidth * 7,
        height: monthCellHeight,
        lineHeight: monthCellHeight,
        align: 'center',
        rich: {
          a: {
            width: 70,
          },
        },
      },
      monthLabel: {
        show: false
      },
      dayLabel: {
        firstDay: 0,
        margin: 0,
        color: businessWhiteColor,
        fontSize: fontSize14,
        backgroundColor: weekCellBgColor,
        borderColor: cellBorderColor,
        borderWidth: 1,
        borderType: 'solid',
        lineHeight: monthCellHeight,
        width: dayCellWidth,
        height: monthCellHeight,
        nameMap: "ZH"
      },
      cellSize: [dayCellWidth, dayCellHeight],
      // 调整每个月的位置
      left: 1 + 300 * (index_x - 1),
      top: 50 + 300 * (index_y - 1),
      range: calBeginEndDate[i],
    };

    seriesArray[i] = {
      name: 'AQI',
      type: 'heatmap',
      coordinateSystem: 'calendar',
      calendarIndex: i,
      data: seriesData[i],
    };

    if (index_x < 6) {
      index_x++;
    } else {
      index_x = 1;
      index_y++;
    }
  }

  let option = {
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        if (params.value[1] >= 0) {
          if (polluteName === 'AQI') {
            if (isNaN(params.value[2])) {
              return params.value[0].substring(0, 10) + '<br/>AQI：' + params.value[1] + "<br/>首要污染物：" + params.value[2];
            } else {
              return params.value[0].substring(0, 10) + '<br/>AQI：' + params.value[1];
            }
          } else {
            if (polluteName === 'CO') {
              return params.value[0].substring(0, 10) + '<br/>' + polluteName + '：' + params.value[1] + 'mg/m\u00B3';
            }
            return params.value[0].substring(0, 10) + '<br/>' + polluteName + '：' + params.value[1] + 'μg/m\u00B3';
          }
        }
      },
      axisPointer: {
        show: false,
        type: 'shadow'
      },
      backgroundColor: cellBgColor,
      borderWidth: 1,
      borderColor: cellBorderColor,
      padding: 10,
      textStyle: {
        color: businessWhiteColor,
        fontSize: fontSize14,
      },
    },
    toolbox: {
      show: false,
      feature: {
        saveAsImage: {
          show: true,
          pixelRatio: 5
        }
      },
      top: 'top',
      right: 40,

    },
    visualMap: {
      type: 'piecewise',
      pieces: [
        {
          gt: -10000,
          lte: -5,
          label: '非当月',
          color: cellBgColor,
          // color: '#DFDFDF',
        },
        {
          gt: -5,
          lte: 0,
          label: '无数据',
          color: cellBgColor
        },
        {
          gt: 0,
          lte: 50,
          label: '优',
          color: '#0ce115'
        }, {
          gte: 51,
          lte: 100,
          label: '良',
          color: '#ffd91c'
        }, {
          gte: 101,
          lte: 150,
          label: '轻',
          color: '#ff7e00'
        }, {
          gte: 151,
          lte: 200,
          label: '中',
          color: '#ff0000'
        }, {
          gte: 201,
          lte: 300,
          label: '重',
          color: '#99004c'
        }, {
          gte: 301,
          lte: 1000000,
          label: '严重',
          color: '#7e0023'
        }],
      // 指定用数据的『哪个维度』，映射到视觉元素上
      // 用getLevelValueKey获取的字段的值
      // dimension: 1,
      dimension: 3,
      align: 'left',// 图形和文字的摆放关系，left：图形在左
      show: false,
      itemGap: 34,// 每两个图元之间的间隔距离，单位为px
      orient: 'vertical', // 'vertical' horizontal
      left: 'right', // center
      top: 50,
      padding: 20
    },
    calendar: calenderData,
    series: seriesArray,
  };
  state.chartOption = option;
}
};
const handleYearChange = () => {
// 参数齐全后再请求
if (state.REGION_TYPE && state.POINT_CODE) {
  apiRegistry.getChartData.request();
}

};
const initPolluteType = () => {
state.polluteList = [
  {
    label: 'AQI',
    name: 'AQI'
  },
  {
    label: convertCharacter('PM25'),
    name: 'PM25'
  },
  {
    label: convertCharacter('PM10'),
    name: 'PM10'
  },
  {
    label: convertCharacter('SO2'),
    name: 'SO2'
  },
  {
    label: convertCharacter('NO2'),
    name: 'NO2'
  },
  {
    label: 'CO',
    name: 'CO'
  },
  {
    label: convertCharacter('O3'),
    name: 'O3'
  },
  {
    label: convertCharacter('O3') + '-8h',
    name: 'O3_8'
  }
];
};
const handleTableData = () => {
if(!state.tableResult.length){
  return;
}
let data = state.tableResult;
// 处理日历数据
const pointList = []
// 求时间
const timeList = Array.from(new Set(data.map(item => item.MONITORTIME_NAME)));
state.pointNameList.forEach((item) => {
  const pointObj = {
    siteName: item.POINT_NAME
  }
  timeList.forEach((time, index) => {
    const findData = data.find((item1) => item1.POINT_NAME === item.POINT_NAME && item1.MONITORTIME_NAME === time);
    if (findData) {
      pointObj[time] = handleNoVal(findData[state.polluteActive]);
      pointObj[`aqiState${index}`] = getAQILevel(findData[state.polluteActive] ? parseInt(findData[state.polluteActive]) : '无');
    } else {
      pointObj[time] = '-';
      pointObj[`aqiState${index}`] = '无';
    }
    if (index === timeList.length - 1) {
      pointList.push(pointObj);
    }
  })
})
state.tableData = pointList;

// 处理表头
state.tableColumn = [];
// 第一列地区
const baseTableColumn = [
  {
    label: state.REGION_TYPE === 'point' ? "站点" : "地点",
    type: "default",
    key: "siteName",
    align: "left",
    // width: '55PX',
    width: state.type === 'hour' ? 'auto' : '50px',
    headerAlign: "center",
    showOverflowTooltip: false,
    paddingLeft: '10px'
  }
]
const arr = []
// 创建表头
timeList.forEach((item, index) => {
  const column = {
    label: item,
    type: "state",
    key: item,
    stateKey: "aqiState" + index,
    infoPosition: "left",
    tooltipPosition: "top",
    width: state.type === 'hour' ? "35PX" : '57.8px',
    minWidth: state.type === 'hour' ? "35PX" : '57.8px',
    align: "center",
    headerAlign: "center",
    sortable: false,
    showOverflowTooltip: false,
    infoStyle: {
      fontStyle: {
        color: "#eee",
      }
    },
    stateList: state.type === 'hour' ? state.stateList : state.stateListForDay,
  }
  arr.push(column);
})
state.tableColumn = baseTableColumn.concat(arr);
// 解决表格错位的问题

if (document.getElementById('t-table-e792.878458ef2')) {
  document.getElementById('t-table-e792.878458ef2').style.display = 'none';
  setTimeout(() => {
    document.getElementById('t-table-e792.878458ef2').style.display = 'block';
  })
}
if (document.getElementById('t-table-5dcc.851d00026')) {
  document.getElementById('t-table-5dcc.851d00026').style.display = 'none';
  setTimeout(() => {
    document.getElementById('t-table-5dcc.851d00026').style.display = 'block';
  })
}
};
const polluteTypeChange = () => {
if (state.type === 'year') {
  renderChart();
} else {
  handleTableData();
}
};
const handleParams = () => {
console.log('global.regionaQuery', global.regionaQuery)
state.regionCode = global.regionaQuery.regionCode
if(state.REGION_TYPE === 'province'){
  // 省内
  state.pointType = '12'
  state.parentRegionCode = '350000000000'
  //state.POINT_CODE = ''
  state.regionCode = ''
  state.parentCode = '350000000000'
  state.REGION_CODE = ''
  state.PROVINCE_CODE = '350000000000'
  state.DISTRICT_CODE = ''
}else if(state.REGION_TYPE === 'city'){
  // 市内
  state.pointType = '13'
  //state.POINT_CODE = ''
  state.parentRegionCode = ''
  state.parentCode = '350700000000'
  state.REGION_CODE = '350700000000'
  state.PROVINCE_CODE = ''
  state.DISTRICT_CODE = ''
}else if(state.REGION_TYPE === 'point'){
  // 站点
  state.pointType = '0,1,2,3,4'
  //state.POINT_CODE = ''
  state.parentRegionCode = ''
  state.parentCode = ''
  state.REGION_CODE = '350700000000'
  state.PROVINCE_CODE = ''
  if (global.regionaQuery.paramsRegionType === 'county') {
    state.DISTRICT_CODE = global.regionaQuery.regionCode
  } else {
    state.DISTRICT_CODE = ''
  }
}
};
const initRegionType = () => {
// 如果是城市默认市内，区县，默认站点
const regionLevelCode = getRegionLevel(global.regionaQuery.regionCode);
switch (regionLevelCode) {
  case 'province':
    state.REGION_TYPE = 'province';
    state.POINT_CODE = '';
    break;
  case 'city':
    state.REGION_TYPE = 'province';
    state.POINT_CODE = '350700';
    break;
  case 'county':
    state.REGION_TYPE = 'city';
    state.POINT_CODE = '';
    break;
  default:
    break;
}
};
const generateRangeDates = (startDate,endDate) => {
/**
 * 生成区间日期
 * @params startDate 开始日期 Date
 * @params endDate 结束日期 Date
 */
const dates = [];
const start = new Date(startDate);
const end = new Date(endDate);

// 确保开始日期不超过结束日期
if (start > end) {
  return dates;
}

let currentDate = start;
while (currentDate <= end) {
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  dates.push(`${year}-${month}-${day}`);

  // 增加一天
  currentDate.setDate(currentDate.getDate() + 1);
}

return dates;
};
const getLevelValueKey = (polluteCode) => {
/**
 * 获取等级值字段
 * @params polluteCode 污染物code
 */
if (polluteCode === 'AQI') {
  return 'AQI';
}
return `${polluteCode}_IAQI`;
};
const changePollutionList = () => {
if(state.type === 'hour'){
  state.polluteList = [
  {
    label: 'AQI',
    name: 'AQI'
  },
  {
    label: convertCharacter('PM25'),
    name: 'PM25'
  },
  {
    label: convertCharacter('PM10'),
    name: 'PM10'
  },
  {
    label: convertCharacter('SO2'),
    name: 'SO2'
  },
  {
    label: convertCharacter('NO2'),
    name: 'NO2'
  },
  {
    label: 'CO',
    name: 'CO'
  },
  {
    label: convertCharacter('O3'),
    name: 'O3'
  }
];
state.polluteActive = state.polluteActive === 'O3_8' ? 'O3' : state.polluteActive
}else{
state.polluteList = [
  {
    label: 'AQI',
    name: 'AQI'
  },
  {
    label: convertCharacter('PM25'),
    name: 'PM25'
  },
  {
    label: convertCharacter('PM10'),
    name: 'PM10'
  },
  {
    label: convertCharacter('SO2'),
    name: 'SO2'
  },
  {
    label: convertCharacter('NO2'),
    name: 'NO2'
  },
  {
    label: 'CO',
    name: 'CO'
  },
  {
    label: convertCharacter('O3') + '-8h',
    name: 'O3_8'
  }
];
state.polluteActive = state.polluteActive === 'O3' ? 'O3_8' : state.polluteActive
}

};
const changeCityParma = () => {
state.POINT_CODE = '';
if(state.REGION_TYPE === 'province'){
  state.POINT_CODE = '350700';
}else {
  state.POINT_CODE = '';
}
};
const setYearValue = (yearValue) => {
if (!yearValue) return;
state.selectTime = yearValue;
state.startMonitorTime = yearValue + '-01-01';
state.endMonitorTime = yearValue + '-12-31';
state.prevYear = (Number(yearValue) - 1).toString();
state.nextYear = (Number(yearValue) + 1).toString();
};
const replacePollutantStr = (strValue) => {
/**
 * 将含有污染物的字符串替换成正确上下标格式
 * 注：只适合替换字符串中的上下标格式
 */
// AQI是内置变量
let result = strValue;
for (const item of AQI) {
  for (const name of item.name) {
    if (result.includes(name)) {
      // 如果 html 是数组，返回第一个元素；否则直接返回 html
      const htmlContent = Array.isArray(item.html) ? item.html[0] : item.html;
      // 使用正则表达式替换，保留匹配项之外的部分
      const regex = new RegExp(name, 'g');
      result = result.replace(regex, htmlContent);
    }
  }
}
return result;
};
const onclick1734492623044 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'businessDialog.dialogName',
                    value:'',
                    data: {
                      businessDialog:{dialogName: ''}
                    },
                  });
};
const ontabClick1736921718330 = (data) => {
// 设置变量值
state.polluteActive = data.value;
// 执行自定义方法
polluteTypeChange(data.value);
};
const onchange1734689433525 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.REGION_TYPE = value;
// 执行自定义方法
getCalendarData();
// 执行自定义方法
changeCityParma();
};
const onchange1736759726394_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.POINT_CODE = value;
// 事件交互-请求调用接口
apiRegistry.getChartData.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const ontabClick1733908971891 = (data) => {
// 设置变量值
state.type = data.value;
// 设置变量值
state.tableColumn = [];
// 执行自定义方法
changePollutionList();
// 执行自定义方法
setDate();
// 执行自定义方法
getCalendarData();
};
const ondateChange1733906791700 = (data) => {
// 设置变量值
state.date = data;
// 执行自定义方法
getCalendarData();
};
const ondateChange1733909076660 = (data) => {
// 设置变量值
state.date = data;
// 执行自定义方法
getCalendarData();
};
const ondateChange1736748489449_0_0 = (data) => {
// 设置变量值
state.year = data;
// 执行自定义方法
setYearValue(data);
// 执行自定义方法
handleYearChange();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getRegion: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"IS_POINT":"1","PARENT_REGION_CODE":"state.parentCode","interfaceId":"dbc171c05c6754e9bc26ad3678279d8d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"IS_POINT":"1","PARENT_REGION_CODE":state.parentCode,"interfaceId":"dbc171c05c6754e9bc26ad3678279d8d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"IS_POINT":"1","PARENT_REGION_CODE":state.parentCode,"interfaceId":"dbc171c05c6754e9bc26ad3678279d8d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getRegion'] = res.data;
                
     state.tableData = [];
const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.regionList = data.map(item =>{
    return{
      POINT_NAME: item.region_name,
      POINT_CODE: item.region_code.slice(0,6)
    }
  })
  // 默认选中当前选中区域
  const currentRegionCode = global.regionaQuery.regionCode.slice(0,6)
  const index = state.regionList.findIndex(item => item.POINT_CODE === currentRegionCode)
  if(index > -1){
    state.POINT_CODE = state.regionList[index].POINT_CODE
  }else{
    state.POINT_CODE = data[0].region_code.slice(0,6)
  } 
}else{
  state.regionList = []
  state.POINT_CODE = ''
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableData = [];
state.regionList = []
      reject(error);
    });
  });
},
              },
// 接口函数
 getChartData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_TYPE":"state.pointType","POINT_CODE":"state.POINT_CODE","MONITORTIME":"state.year","TIME_TYPE":"state.type","interfaceId":"b669ae3d8776d993bdb73a9b911a50e9"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_TYPE":state.pointType,"POINT_CODE":state.POINT_CODE,"MONITORTIME":state.year,"TIME_TYPE":state.type,"interfaceId":"b669ae3d8776d993bdb73a9b911a50e9"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_TYPE":state.pointType,"POINT_CODE":state.POINT_CODE,"MONITORTIME":state.year,"TIME_TYPE":state.type,"interfaceId":"b669ae3d8776d993bdb73a9b911a50e9"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getChartData'] = res.data;
                
     
const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.renderChartData = data
  renderChart();
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
 getPointName: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"DISTRICT_CODE":"state.DISTRICT_CODE","PROVINCE_CODE":"state.PROVINCE_CODE","REGION_CODE":"state.REGION_CODE","POINT_TYPE":"state.pointType","interfaceId":"48f27a45ab6772cad3e379bff43bc69d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DISTRICT_CODE":state.DISTRICT_CODE,"PROVINCE_CODE":state.PROVINCE_CODE,"REGION_CODE":state.REGION_CODE,"POINT_TYPE":state.pointType,"interfaceId":"48f27a45ab6772cad3e379bff43bc69d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"DISTRICT_CODE":state.DISTRICT_CODE,"PROVINCE_CODE":state.PROVINCE_CODE,"REGION_CODE":state.REGION_CODE,"POINT_TYPE":state.pointType,"interfaceId":"48f27a45ab6772cad3e379bff43bc69d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPointName'] = res.data;
                
     state.tableData = [];
const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.pointNameList = data
  if(state.type === 'year'){
    state.regionList = data.map(item =>{
    return{
      POINT_NAME: item.POINT_NAME,
      POINT_CODE: item.POINT_CODE
    }
  })
    state.POINT_CODE = data[0].POINT_CODE
  }
}else{
   state.pointNameList = []
  state.regionList = []
  state.POINT_CODE = ''
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.tableData = [];
   state.pointNameList = []
  state.regionList = []
      reject(error);
    });
  });
},
              },
// 接口函数
 getCalendarList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"ORDER_BY":"aqi desc","POINT_TYPE":"state.pointType","PARENT_REGION_CODE":"state.parentRegionCode","REGION_CODE":"state.regionCode","MONITORTIME":"state.date","TIME_TYPE":"state.type","interfaceId":"b669ae3d8776d993bdb73a9b911a50e9"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"ORDER_BY":"aqi desc","POINT_TYPE":state.pointType,"PARENT_REGION_CODE":state.parentRegionCode,"REGION_CODE":state.regionCode,"MONITORTIME":state.date,"TIME_TYPE":state.type,"interfaceId":"b669ae3d8776d993bdb73a9b911a50e9"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"ORDER_BY":"aqi desc","POINT_TYPE":state.pointType,"PARENT_REGION_CODE":state.parentRegionCode,"REGION_CODE":state.regionCode,"MONITORTIME":state.date,"TIME_TYPE":state.type,"interfaceId":"b669ae3d8776d993bdb73a9b911a50e9"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCalendarList'] = res.data;
                
     state.tableData = [];
const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.tableResult = data;
}else{
  state.tableResult = []
}
handleTableData();
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
                            setPageScale('t-l-c-airOverviewPolluteCalendar', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setDefaultParam();
// 执行自定义方法
initRegionType();
// 执行自定义方法
getCalendarData();
onMounted(() => {
setPageScale('t-l-c-airOverviewPolluteCalendar', global.appScaleMode, 'normal');
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

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tTabsBasex0x4ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x4.default, componentState.tTabsBasex0x4?.[state.screenSize]));

 const tSelectx0x5ComputedData = computed(() => _.merge({}, componentState.tSelectx0x5.default, componentState.tSelectx0x5?.[state.screenSize]));

 const tSelectx0x6ComputedData = computed(() => _.merge({}, componentState.tSelectx0x6.default, componentState.tSelectx0x6?.[state.screenSize]));

 const tTabsBasex0x7ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x7.default, componentState.tTabsBasex0x7?.[state.screenSize]));

 const tDatePickerx0x9ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x9.default, componentState.tDatePickerx0x9?.[state.screenSize]));

 const tDatePickerx0x10ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x10.default, componentState.tDatePickerx0x10?.[state.screenSize]));

 const tChartDesignx0x11ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x11.default, componentState.tChartDesignx0x11?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tDatePickerx0x12ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x12.default, componentState.tDatePickerx0x12?.[state.screenSize]));

 const tTablex0x13ComputedData = computed(() => _.merge({}, componentState.tTablex0x13.default, componentState.tTablex0x13?.[state.screenSize]));

 const tTablex0x14ComputedData = computed(() => _.merge({}, componentState.tTablex0x14.default, componentState.tTablex0x14?.[state.screenSize]));

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
tTextx0x2ComputedData,
tRectx0x3ComputedData,
tTabsBasex0x4ComputedData,
tSelectx0x5ComputedData,
tSelectx0x6ComputedData,
tTabsBasex0x7ComputedData,
tDatePickerx0x9ComputedData,
tDatePickerx0x10ComputedData,
tChartDesignx0x11ComputedData,
tDatePickerx0x12ComputedData,
tTablex0x13ComputedData,
tTablex0x14ComputedData,
onclick1734492623044,
ontabClick1736921718330,
onchange1734689433525,
onchange1736759726394_0_0,
ontabClick1733908971891,
ondateChange1733906791700,
ondateChange1733909076660,
ondateChange1736748489449_0_0,
};
},
};