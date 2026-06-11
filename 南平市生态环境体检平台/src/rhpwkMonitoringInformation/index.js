window.rhpwkMonitoringInformationComponent = {
template: 
`<div id="t-l-c-rhpwkMonitoringInformation" class="t-l-c-rhpwkMonitoringInformation" >` +
`<t-component id="t-component-c019.99b6d840a" class="rhpwkMonitoringInformation-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName" :page-id="tComponentx0x0ComputedData.pageId" :page-code="tComponentx0x0ComputedData.pageCode">` +
`</t-component>` +
`<t-text id="t-text-62b3.48b14905c" class="rhpwkMonitoringInformation-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle">` +
`</t-text>` +
`<t-scrollable-cards id="t-scrollable-cards-455f.ff3a2c962" class="rhpwkMonitoringInformation-t-scrollable-cards-0-2"  :c-style="tScrollableCardsx0x2ComputedData.cStyle" :show-icon="tScrollableCardsx0x2ComputedData.showIcon" :auto-scroll="tScrollableCardsx0x2ComputedData.autoScroll" :tab="tScrollableCardsx0x2ComputedData.tab" :key-word="tScrollableCardsx0x2ComputedData.keyWord" :default-checked="tScrollableCardsx0x2ComputedData.defaultChecked" :speed="tScrollableCardsx0x2ComputedData.speed" :interval="tScrollableCardsx0x2ComputedData.interval" :card-space="tScrollableCardsx0x2ComputedData.cardSpace" :direction="tScrollableCardsx0x2ComputedData.direction" :data-alias="tScrollableCardsx0x2ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.monitorData, componentPropBindingMap?.['t-scrollable-cards-455f.ff3a2c962']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-scrollable-cards>` +
`<t-row id="t-row-3ae9.949fc1c3b" class="rhpwkMonitoringInformation-t-row-0-3"  :c-style="tRowx0x3ComputedData.cStyle" :gutter="tRowx0x3ComputedData.gutter" :justify="tRowx0x3ComputedData.justify" :align="tRowx0x3ComputedData.align">` +
`<t-col id="t-col-facf.ef4316657" class="rhpwkMonitoringInformation-t-col-0-3-0"  :span="tColx0x3x0ComputedData.span" :offset="tColx0x3x0ComputedData.offset" :push="tColx0x3x0ComputedData.push" :pull="tColx0x3x0ComputedData.pull" :c-style="tColx0x3x0ComputedData.cStyle">` +
`<t-tabs-base id="t-tabs-base-bb7d.4596104d4" class="rhpwkMonitoringInformation-t-tabs-base-0-3-0-0"  :data="replaceCssVariables(filterData(state.dateList, componentPropBindingMap?.['t-tabs-base-bb7d.4596104d4']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :space="tTabsBasex0x3x0x0ComputedData.space" :selected-tab-val="replaceCssVariables(filterData(state.tabSelect, componentPropBindingMap?.['t-tabs-base-bb7d.4596104d4']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :inner-shadow-color="tTabsBasex0x3x0x0ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x3x0x0ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x3x0x0ComputedData.alias" :c-style="tTabsBasex0x3x0x0ComputedData.cStyle" @tab-click="ontabClick1767581775067_0_0">` +
`</t-tabs-base>` +
`<t-date-picker id="t-date-picker-d90a.f32e32cda" class="rhpwkMonitoringInformation-t-date-picker-0-3-0-1"  :placeholder="tDatePickerx0x3x0x1ComputedData.placeholder" :start-placeholder="tDatePickerx0x3x0x1ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x3x0x1ComputedData.endPlaceholder" :type="replaceCssVariables(filterData(state.dateType, componentPropBindingMap?.['t-date-picker-d90a.f32e32cda']['type'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :clearable="tDatePickerx0x3x0x1ComputedData.clearable" :range-separator="tDatePickerx0x3x0x1ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeRange, componentPropBindingMap?.['t-date-picker-d90a.f32e32cda']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x3x0x1ComputedData.separator" :readonly="tDatePickerx0x3x0x1ComputedData.readonly" :editable="tDatePickerx0x3x0x1ComputedData.editable" :c-style="tDatePickerx0x3x0x1ComputedData.cStyle" @date-change="ondateChange1767779170144_0_0">` +
`</t-date-picker>` +
`</t-col>` +
`</t-row>` +
`<t-table v-if="state.showType === 'table'" id="t-table-a03c.38ecd6b87" class="rhpwkMonitoringInformation-t-table-0-4"  :height="tTablex0x4ComputedData.height" :stripe="tTablex0x4ComputedData.stripe" :border="tTablex0x4ComputedData.border" :auto-scroll="tTablex0x4ComputedData.autoScroll" :speed="tTablex0x4ComputedData.speed" :columns="replaceCssVariables(filterData(state.tableColumns, componentPropBindingMap?.['t-table-a03c.38ecd6b87']['columns'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-a03c.38ecd6b87']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x4ComputedData.defaultSort" :c-style="tTablex0x4ComputedData.cStyle" @cell-click="oncellClick1767773230043_0_0">` +
`</t-table>` +
`<t-row id="t-row-9111.1b5dc7cd5" class="rhpwkMonitoringInformation-t-row-0-5"  :c-style="tRowx0x5ComputedData.cStyle" :gutter="tRowx0x5ComputedData.gutter" :justify="tRowx0x5ComputedData.justify" :align="tRowx0x5ComputedData.align">` +
`<t-col id="t-col-5059.dbf1776df" class="rhpwkMonitoringInformation-t-col-0-5-0"  :span="tColx0x5x0ComputedData.span" :offset="tColx0x5x0ComputedData.offset" :push="tColx0x5x0ComputedData.push" :pull="tColx0x5x0ComputedData.pull" :c-style="tColx0x5x0ComputedData.cStyle">` +
`<t-text id="t-text-6063.4db73323" class="rhpwkMonitoringInformation-t-text-0-5-0-0"  :label="tTextx0x5x0x0ComputedData.label" :editable="tTextx0x5x0x0ComputedData.editable" :c-style="tTextx0x5x0x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-32c7.7fb817ea1" class="rhpwkMonitoringInformation-t-col-0-5-1"  :span="tColx0x5x1ComputedData.span" :offset="tColx0x5x1ComputedData.offset" :push="tColx0x5x1ComputedData.push" :pull="tColx0x5x1ComputedData.pull" :c-style="tColx0x5x1ComputedData.cStyle">` +
`<t-select id="t-select-3fcb.c00f74209" class="rhpwkMonitoringInformation-t-select-0-5-1-0"  :active-value="replaceCssVariables(filterData(state.currentPolluteCode, componentPropBindingMap?.['t-select-3fcb.c00f74209']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.polluteList, componentPropBindingMap?.['t-select-3fcb.c00f74209']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x5x1x0ComputedData.alias" :multiple="tSelectx0x5x1x0ComputedData.multiple" :placeholder="tSelectx0x5x1x0ComputedData.placeholder" :clearable="tSelectx0x5x1x0ComputedData.clearable" :disabled="tSelectx0x5x1x0ComputedData.disabled" :name="tSelectx0x5x1x0ComputedData.name" :autocomplete="tSelectx0x5x1x0ComputedData.autocomplete" :filterable="tSelectx0x5x1x0ComputedData.filterable" :no-match-text="tSelectx0x5x1x0ComputedData.no-match-text" :no-data-text="tSelectx0x5x1x0ComputedData.no-data-text" :c-style="tSelectx0x5x1x0ComputedData.cStyle" @change="onchange1733973555614">` +
`</t-select>` +
`<t-select id="t-select-6362.7b6ac7966" class="rhpwkMonitoringInformation-t-select-0-5-1-1"  :active-value="replaceCssVariables(filterData(state.showType, componentPropBindingMap?.['t-select-6362.7b6ac7966']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x5x1x1ComputedData.options" :alias="tSelectx0x5x1x1ComputedData.alias" :multiple="tSelectx0x5x1x1ComputedData.multiple" :placeholder="tSelectx0x5x1x1ComputedData.placeholder" :clearable="tSelectx0x5x1x1ComputedData.clearable" :disabled="tSelectx0x5x1x1ComputedData.disabled" :name="tSelectx0x5x1x1ComputedData.name" :autocomplete="tSelectx0x5x1x1ComputedData.autocomplete" :filterable="tSelectx0x5x1x1ComputedData.filterable" :no-match-text="tSelectx0x5x1x1ComputedData.no-match-text" :no-data-text="tSelectx0x5x1x1ComputedData.no-data-text" :c-style="tSelectx0x5x1x1ComputedData.cStyle" @change="onchange1767772766838_0_0">` +
`</t-select>` +
`</t-col>` +
`</t-row>` +
`<t-row id="t-row-bed0.5ca83a488" class="rhpwkMonitoringInformation-t-row-0-6"  :c-style="tRowx0x6ComputedData.cStyle" :gutter="tRowx0x6ComputedData.gutter" :justify="tRowx0x6ComputedData.justify" :align="tRowx0x6ComputedData.align">` +
`<t-text id="t-text-b39c.b6c03321c" class="rhpwkMonitoringInformation-t-text-0-6-0"  :label="replaceCssVariables(filterData(state.lastTime, componentPropBindingMap?.['t-text-b39c.b6c03321c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x6x0ComputedData.editable" :c-style="tTextx0x6x0ComputedData.cStyle">` +
`</t-text>` +
`</t-row>` +
`<t-chart-line-single v-if="state.showType === 'line'" id="t-chart-line-single-66ab.046d9e183" class="rhpwkMonitoringInformation-t-chart-line-single-0-7"  :empty-img="replaceCssVariables(filterData(state.noDataImg, componentPropBindingMap?.['t-chart-line-single-66ab.046d9e183']['emptyImg'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tChartLineSinglex0x7ComputedData.cStyle" :show-item-bg="tChartLineSinglex0x7ComputedData.showItemBg" :options="tChartLineSinglex0x7ComputedData.options" :data="replaceCssVariables(filterData(state.chartList, componentPropBindingMap?.['t-chart-line-single-66ab.046d9e183']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :series-setting="tChartLineSinglex0x7ComputedData.seriesSetting" :line="componentState.tChartLineSinglex0x7.line">` +
`</t-chart-line-single>` +
`<t-text v-if="state.isShowchartUnit === true" id="t-text-f8f0.bc97393c" class="rhpwkMonitoringInformation-t-text-0-8"  :label="replaceCssVariables(filterData(state.chartUint, componentPropBindingMap?.['t-text-f8f0.bc97393c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x8ComputedData.editable" :c-style="tTextx0x8ComputedData.cStyle">` +
`</t-text>` +
`<t-row id="t-row-8bc5.7cd186433" class="rhpwkMonitoringInformation-t-row-0-9"  :c-style="tRowx0x9ComputedData.cStyle" :gutter="tRowx0x9ComputedData.gutter" :justify="tRowx0x9ComputedData.justify" :align="tRowx0x9ComputedData.align">` +
`<t-col id="t-col-d500.02fcca50b" class="rhpwkMonitoringInformation-t-col-0-9-0"  :span="tColx0x9x0ComputedData.span" :offset="tColx0x9x0ComputedData.offset" :push="tColx0x9x0ComputedData.push" :pull="tColx0x9x0ComputedData.pull" :c-style="tColx0x9x0ComputedData.cStyle">` +
`<t-text id="t-text-5f87.ae6a6f03" class="rhpwkMonitoringInformation-t-text-0-9-0-0"  :label="tTextx0x9x0x0ComputedData.label" :editable="tTextx0x9x0x0ComputedData.editable" :c-style="tTextx0x9x0x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-93cf.098d5d776" class="rhpwkMonitoringInformation-t-col-0-9-1"  :span="tColx0x9x1ComputedData.span" :offset="tColx0x9x1ComputedData.offset" :push="tColx0x9x1ComputedData.push" :pull="tColx0x9x1ComputedData.pull" :c-style="tColx0x9x1ComputedData.cStyle">` +
`<t-circle id="t-circle-4b99.e30fa245d" class="rhpwkMonitoringInformation-t-circle-0-9-1-0"  :tip="tCirclex0x9x1x0ComputedData.tip" :label="tCirclex0x9x1x0ComputedData.label" :active="tCirclex0x9x1x0ComputedData.active" :c-style="tCirclex0x9x1x0ComputedData.cStyle">` +
`</t-circle>` +
`<t-text id="t-text-735b.0d561b17d" class="rhpwkMonitoringInformation-t-text-0-9-1-1"  :label="tTextx0x9x1x1ComputedData.label" :editable="tTextx0x9x1x1ComputedData.editable" :c-style="tTextx0x9x1x1ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-c019.99b6d840a":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-62b3.48b14905c":{"attributeName":"tTextx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-scrollable-cards-455f.ff3a2c962":{"attributeName":"tScrollableCardsx0x2","cStyle":{"filters":[]},"showIcon":{"filters":[]},"autoScroll":{"filters":[]},"tab":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"speed":{"filters":[]},"interval":{"filters":[]},"cardSpace":{"filters":[]},"direction":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]}},"t-row-3ae9.949fc1c3b":{"attributeName":"tRowx0x3","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-facf.ef4316657":{"attributeName":"tColx0x3x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-bb7d.4596104d4":{"attributeName":"tTabsBasex0x3x0x0","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-d90a.f32e32cda":{"attributeName":"tDatePickerx0x3x0x1","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-table-a03c.38ecd6b87":{"attributeName":"tTablex0x4","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-row-9111.1b5dc7cd5":{"attributeName":"tRowx0x5","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-5059.dbf1776df":{"attributeName":"tColx0x5x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-6063.4db73323":{"attributeName":"tTextx0x5x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-32c7.7fb817ea1":{"attributeName":"tColx0x5x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-select-3fcb.c00f74209":{"attributeName":"tSelectx0x5x1x0","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-select-6362.7b6ac7966":{"attributeName":"tSelectx0x5x1x1","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-row-bed0.5ca83a488":{"attributeName":"tRowx0x6","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-b39c.b6c03321c":{"attributeName":"tTextx0x6x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-line-single-66ab.046d9e183":{"attributeName":"tChartLineSinglex0x7","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"showItemBg":{"filters":[]},"options":{"filters":[]},"data":{"filters":[]},"seriesSetting":{"filters":[]}},"t-text-f8f0.bc97393c":{"attributeName":"tTextx0x8","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-8bc5.7cd186433":{"attributeName":"tRowx0x9","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-d500.02fcca50b":{"attributeName":"tColx0x9x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-5f87.ae6a6f03":{"attributeName":"tTextx0x9x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-93cf.098d5d776":{"attributeName":"tColx0x9x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-circle-4b99.e30fa245d":{"attributeName":"tCirclex0x9x1x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-735b.0d561b17d":{"attributeName":"tTextx0x9x1x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   chartUint: "浓度（mg/L）",
   lastTime: "",
   currentPolluteCode: "",
   isShowchartUnit: true,
   chartList: [],
   standEnterId: "",
   tableColumns: [{"label":"序号","key":"index","align":"center","operationList":[],"stateList":[],"width":"66PX","showOverflowTooltip":true,"style":{"fontStyle":{"fontSize":"14PX"}}},{"label":"监测时间","key":"moniterTime","stateKey":"waterQualityTargetValue","align":"center","type":"default","operationList":[],"style":{"fontStyle":{"width":"40PX","height":"PX"}}},{"label":"COD（mg/L）","key":"pollute","stateKey":"","align":"center","type":"default","operationList":[],"width":"355px","style":{"fontStyle":{"fontSize":"12PX","width":"PX","height":"PX","borderRadius":"PX","background":""}}}],
   showType: "line",
   currentPointCode: "",
   dateType: "datetimerangehour",
   pointList: [],
   polluteList: [{"label":"pH值","value":"W01001","disabled":false},{"label":"化学需氧量","value":"W01018","disabled":false},{"label":"氨氮","value":"W21003","disabled":false},{"label":"总磷","value":"W21011","disabled":false},{"label":"流量","value":"W00000","disabled":false}],
   options: "",
   myChart: "",
   isBz: false,
   seriesData: [],
   standardSeriesData: [],
   noDataImg: "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
   dataSourcetype: "",
   variationTrendData: {"title":"近12个月水质变化趋势","activeTarget":"","chartOptions":{"series":[]},"chartShow":true},
   monitorData: [{"value":"-","label":"pH值","code":"W01001","style":{"cardIconStyle":{"background":"#00DA2A"},"labelIconStyle":{}}},{"value":"-","label":"化学需氧量","unit":"mg/L","code":"W01018","style":{"cardIconStyle":{"background":"#00DA2A"},"labelIconStyle":{}}},{"value":"-","label":"氨氮","unit":"mg/L","code":"W21003","style":{"cardIconStyle":{"background":"#00DA2A"},"labelIconStyle":{}}},{"value":"-","label":"总磷","unit":"mg/L","code":"W21011","style":{"cardIconStyle":{"background":"#00DA2A"},"labelIconStyle":{}}},{"value":"-","label":"流量","unit":"m³/s","code":"W00000","style":{"cardIconStyle":{"background":"#00DA2A"},"labelIconStyle":{}}}],
   baseInfoData: [{"title":"行政区","num":"-"},{"title":"所在水体","num":"-"},{"title":"控制级别","num":"-"},{"title":"断面属性","num":"-"},{"title":"水质目标","num":"-","color":""},{"title":"超标污染物","num":"-","color":"#FF2B2B"}],
   assessType: "",
   pointCode: "",
   monitorTime: "",
   timeRange: [],
   endTime: "",
   startTime: "",
   tabsActiveValue: "monthly",
   tabSelect: "hour",
   dateList: [{"label":"小时","value":"hour"},{"label":"日","value":"day"}],
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
tComponentx0x0: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"29px","top":"4px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"水质监测信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"29px","top":"4px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"}}}, 
 },
},
tScrollableCardsx0x2: {
defaultStyle: {
            default: {"width":"824px","height":"64px","borderRadius":"8px","padding":"11px 9px 8px","background":"linear-gradient(180deg, #219DFF 0%, rgba(0,213,255,0.00) 190%)","top":"124px","left":"0px","position":"unset","paddingLeft":"0px","paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","backgroundColor":"","backgroundImage":"linear-gradient(0deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0) 99.54954954954955%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"18px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"824px","height":"64px","borderRadius":"8px","padding":"11px 9px 8px","background":"linear-gradient(180deg, #219DFF 0%, rgba(0,213,255,0.00) 190%)","top":"124px","left":"0px","position":"unset","paddingLeft":"0px","paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","backgroundColor":"","backgroundImage":"linear-gradient(0deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0) 99.54954954954955%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"18px","animationName":""}},"itemWrapper":{"default":{"width":"150px","height":"64px","marginLeft":"0px","marginRight":"8px !important","cursor":"auto","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","display":"flex","flexDirection":"column-reverse","justify-content":"center"},"active":{}},"container":{"default":{"width":"824%","height":"auto","paddingLeft":"0px","paddingTop":"0px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"12px","paddingRight":"0px","marginRight":"12px"}},"cardLabel":{"default":{"fontSize":"var(--text-size-14)","lineHeight":"24px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","height":"24px","display":"flex","justify-content":"center"}},"cardLabelIcon":{"default":{"width":"18px","height":"18px","marginLeft":"4px"}},"cardValue":{"default":{"fontSize":"var(--text-size-14)","fontWeight":"500","fontFamily":"DIN-bold","color":"rgba(255, 255, 255, 1)","lineHeight":"24px","height":"24px","display":"flex","justify-content":"center"}},"cardValueUnit":{"default":{"fontSize":"14px","fontWeight":"normal","fontFamily":"微软雅黑","marginLeft":"4px","color":"var(--business-text-avianize)"}},"leftArrowButton":{"default":{"color":"rgba(255, 255, 255, 1) !important","backgroundColor":"var(--business-show-bg15)","width":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"color":"var(--business-theme) !important","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)"}},"leftArrow":{"default":{"color":"inherit !important"}},"rightArrow":{"default":{"color":"inherit !important"}},"rightArrowButton":{"default":{"color":"rgba(255, 255, 255, 1) !important","backgroundColor":"var(--business-show-bg15)","width":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"color":"var(--business-theme) !important","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)"}}},
showIcon:true,
autoScroll:false,
tab:false,
keyWord:"",
defaultChecked:"",
speed:3,
interval:0.5,
cardSpace:0,
direction:"left",
dataAlias:{"value":"value","label":"label","checked":"checked"},
data:[{"value":"-","label":"pH值","code":"W01001","style":{"cardIconStyle":{"background":"#00DA2A"},"labelIconStyle":{}}},{"value":"-","label":"化学需氧量","unit":"mg/L","code":"W01018","style":{"cardIconStyle":{"background":"#00DA2A"},"labelIconStyle":{}}},{"value":"-","label":"氨氮","unit":"mg/L","code":"W21003","style":{"cardIconStyle":{"background":"#00DA2A"},"labelIconStyle":{}}},{"value":"-","label":"总磷","unit":"mg/L","code":"W21011","style":{"cardIconStyle":{"background":"#00DA2A"},"labelIconStyle":{}}},{"value":"-","label":"流量","unit":"m³/s","code":"W00000","style":{"cardIconStyle":{"background":"#00DA2A"},"labelIconStyle":{}}}], 
 },
},
tRowx0x3: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"-1px","top":"43px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"-1px","top":"43px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x3x0: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center"}},"emptyText":{"default":{"position":"absolute"}}}, 
 },
},
tTabsBasex0x3x0x0: {
defaultStyle: {
            default: {"width":"180px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"234px","top":"-142px","marginRight":"15px"},
            
            },
 default: { 
 
data:[{"label":"小时","value":"hour"},{"label":"日","value":"day"}],
space:1,
selectedTabVal:"hour",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":false},
cStyle:{"wrapper":{"default":{"width":"180px","height":"32px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","animationName":"","position":"unset","left":"234px","top":"-142px","marginRight":"15px"}},"itemWrapper":{"default":{"width":"80px","height":"32px","fontSize":"14px","lineHeight":"32px","backgroundColor":"rgba(112, 41, 221, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","marginTop":"-1px","marginRight":"0px !important"},"active":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px","background":"var(--business-tab-content-active-bg)"},"hover":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","fontSize":"14px","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-size":"","-webkit-mask-position":"","-webkit-mask-repeat":"","background":"var(--business-tab-content-active-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","box-shadow":"","height":"32px"},"disabled":{"lineHeight":"32px"}},"label":{"default":{"fontSize":"var(--text-size-14)","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"fontWeight":"400","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","background":"var(--business-tab-content-active-text)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","fontSize":"var(--text-size-14)"},"hover":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tDatePickerx0x3x0x1: {
defaultStyle: {
            default: {"width":"380px","height":"32px","position":"unset","left":"404px","top":"294px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","marginRight":"0px"},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerangehour",
clearable:true,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"380px","height":"32px","position":"unset","left":"404px","top":"294px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","marginRight":"0px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tTablex0x4: {
defaultStyle: {
            default: {"width":"100%","height":"calc(100% - 270px)","position":"unset","left":"0px","top":"270px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"},
            
            },
 default: { 
 
height:"95%",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"序号","key":"index","align":"center","operationList":[],"stateList":[],"width":"66PX","showOverflowTooltip":true,"style":{"fontStyle":{"fontSize":"14PX"}}},{"label":"监测时间","key":"moniterTime","stateKey":"waterQualityTargetValue","align":"center","type":"default","operationList":[],"style":{"fontStyle":{"width":"40PX","height":"PX"}}},{"label":"COD（mg/L）","key":"pollute","stateKey":"","align":"center","type":"default","operationList":[],"width":"355px","style":{"fontStyle":{"fontSize":"12PX","width":"PX","height":"PX","borderRadius":"PX","background":""}}}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"calc(100% - 270px)","position":"unset","left":"0px","top":"270px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--t-white)","fontSize":"14px","fontWeight":"400","marginRight":"0px","backgroundColor":"","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-show-bg10)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"rgba(255, 255, 255, 1)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-show-bg10)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","color":"var(--t-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-show-bg10)"}},"highlightRow":{"default":{"backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
tRowx0x5: {
defaultStyle: {
            default: {"width":"100%","height":"34px","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"210px","pointerEvents":"none","gap":"auto","backgroundColor":"rgba(12, 62, 139, 1)"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"34px","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"210px","pointerEvents":"none","gap":"auto","backgroundColor":"rgba(12, 62, 139, 1)"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x5x0: {
defaultStyle: {
            default: {"width":"100px","height":"34px","display":"flex","justifyContent":"left","alignItems":"center"},
            
            },
 default: { 
 
span:12,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"34px","display":"flex","justifyContent":"left","alignItems":"center"}}}, 
 },
},
tTextx0x5x0x0: {
defaultStyle: {
            default: {"width":"240px","height":"32px","color":"rgb(0, 255, 255)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"208px","left":"1px","position":"unset","textAlign":"left","marginLeft":"15px"},
            
            },
 default: { 
 
label:"污染物变化趋势",
editable:false,
cStyle:{"wrapper":{"default":{"width":"240px","height":"32px","color":"rgb(0, 255, 255)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"208px","left":"1px","position":"unset","textAlign":"left","marginLeft":"15px"}},"cardValue":{"default":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tColx0x5x1: {
defaultStyle: {
            default: {"width":"100px","height":"34px","display":"flex","justifyContent":"right","alignItems":"center"},
            
            },
 default: { 
 
span:12,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"34px","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tSelectx0x5x1x0: {
defaultStyle: {
            default: {"width":"180px","height":"32px","position":"unset","left":"704px","top":"208px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","marginRight":"15px"},
            
            },
 default: { 
 
activeValue:"",
options:[{"label":"pH值","value":"W01001","disabled":false},{"label":"化学需氧量","value":"W01018","disabled":false},{"label":"氨氮","value":"W21003","disabled":false},{"label":"总磷","value":"W21011","disabled":false},{"label":"流量","value":"W00000","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"180px","height":"32px","position":"unset","left":"704px","top":"208px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","marginRight":"15px"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","fontSize":"var(--text-size-14)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"}},"dropdownItemText":{"default":{"fontSize":"var(--text-size-14)"},"active":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tSelectx0x5x1x1: {
defaultStyle: {
            default: {"width":"180px","height":"32px","position":"unset","left":"714px","top":"218px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","marginRight":"15px"},
            
            },
 default: { 
 
activeValue:"line",
options:[{"label":"折线图","value":"line","disabled":false},{"label":"数据表","value":"table","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"180px","height":"32px","position":"unset","left":"714px","top":"218px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","marginRight":"15px"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","fontSize":"var(--text-size-14)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"}},"dropdownItemText":{"default":{"fontSize":"var(--text-size-14)"},"active":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tRowx0x6: {
defaultStyle: {
            default: {"width":"100%","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"0px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextx0x6x0: {
defaultStyle: {
            default: {"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"124.5px","left":"645px","textAlign":"right","fontSize":"var(--text-size-14)","position":"unset","marginRight":"50px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"124.5px","left":"645px","textAlign":"right","fontSize":"var(--text-size-14)","position":"unset","marginRight":"50px"}}}, 
 },
},
tChartLineSinglex0x7: {
defaultStyle: {
            default: {"width":"100%","height":"calc(100% - 270px)","position":"unset","left":"0px","top":"270px"},
            
            },
line: computed(() => activeChartTheme.value?.line),
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
cStyle:{"wrapper":{"default":{"width":"100%","height":"calc(100% - 270px)","position":"unset","left":"0px","top":"270px"}},"emptyText":{"default":{"fontSize":"14px","width":"auto","color":"rgba(255, 255, 255, 1)"}}},
showItemBg:false,
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"grid":{"containLabel":true,"left":"1%","bottom":"2%","top":"5%","right":"1%"},"legend":{"show":false},"xAxis":{"axisLine":{"lineStyle":{"type":"dashed"}}}})),
data:[],
seriesSetting:{"xAxisLabel":"MONITORTIME","data":[{"name":"浓度","dataKey":"AVGSTRENGTH","style":{"label":{"show":false},"symbolSize":[4,4],"symbol":"none"}}]}, 
 },
},
tTextx0x8: {
defaultStyle: {
            default: {"width":"144px","height":"32px","color":"var(--business-text-avianize)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"249px","left":"-17px","position":"unset","textAlign":"left","marginLeft":"20px","animationName":""},
            
            },
 default: { 
 
label:"浓度（mg/L）",
editable:false,
cStyle:{"wrapper":{"default":{"width":"144px","height":"32px","color":"var(--business-text-avianize)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"249px","left":"-17px","position":"unset","textAlign":"left","marginLeft":"20px","animationName":""}},"cardValue":{"default":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tRowx0x9: {
defaultStyle: {
            default: {"width":"100%","height":"34px","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"83px","gap":"auto","backgroundColor":"#0C3E8B","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"34px","display":"flex","justifyContent":"space-between","alignItems":"center","position":"unset","left":"0px","top":"83px","gap":"auto","backgroundColor":"#0C3E8B","animationName":""}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x9x0: {
defaultStyle: {
            default: {"width":"100px","height":"34px","display":"flex","justifyContent":"left","alignItems":"center","animationName":"","left":"10px","top":"10px"},
            
            },
 default: { 
 
span:12,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"34px","display":"flex","justifyContent":"left","alignItems":"center","animationName":"","left":"10px","top":"10px"}}}, 
 },
},
tTextx0x9x0x0: {
defaultStyle: {
            default: {"width":"240px","height":"32px","color":"#00FFFF","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"97px","left":"12px","position":"unset","animationName":"","marginLeft":"15px","textAlign":"left","backgroundColor":""},
            
            },
 default: { 
 
label:"污染物排放浓度",
editable:false,
cStyle:{"wrapper":{"default":{"width":"240px","height":"32px","color":"#00FFFF","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"97px","left":"12px","position":"unset","animationName":"","marginLeft":"15px","textAlign":"left","backgroundColor":""}},"cardValue":{"default":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tColx0x9x1: {
defaultStyle: {
            default: {"width":"100px","height":"34px","display":"flex","justifyContent":"right","alignItems":"center","backgroundColor":"","paddingRight":"15px","animationName":"","left":"10px","top":"10px"},
            
            },
 default: { 
 
span:12,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"34px","display":"flex","justifyContent":"right","alignItems":"center","backgroundColor":"","paddingRight":"15px","animationName":"","left":"10px","top":"10px"}}}, 
 },
},
tCirclex0x9x1x0: {
defaultStyle: {
            default: {"width":"9px","height":"9px","position":"unset","left":"883px","top":"106px","backgroundColor":"#FF2B2B","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"9px","height":"9px","position":"unset","left":"883px","top":"106px","backgroundColor":"#FF2B2B","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tTextx0x9x1x1: {
defaultStyle: {
            default: {"width":"auto","height":"24px","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","top":"96px","left":"898px","position":"unset","lineHeight":"24px","animationName":"","textAlign":"left"},
            
            },
 default: { 
 
label:"表示该指标超标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"24px","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","top":"96px","left":"898px","position":"unset","lineHeight":"24px","animationName":"","textAlign":"left"}}}, 
 },
},
});
const handleWaterTarget = () => {
// 水质目标发生变化执行---------------------

// 先隐藏图表
state.variationTrendData.chartShow = false;
// 图表为空
state.variationTrendData.chartOptions = {
  series: []
};

// 水质
if (state.variationTrendData.activeTarget === 'waterLevelChange') {
  state.variationTrendData.title = '近12个月水质变化趋势';

  // 水质接口
  apiRegistry.getWaterVariationTrend.request();
} else {
  // 其他污染物
  state.variationTrendData.title = '近12个月污染物浓度变化趋势';

  // 污染物接口
  apiRegistry.getPollutantVariationTrend.request();
}
// 显示图表，延迟为了处理数据不刷新的问题
setTimeout(() => {
  state.variationTrendData.chartShow = true;
}, 100)
};
const getWaterChartLabel = (value) => {
// 设置x轴显示的文本
if (value === 1) {
  value = 'Ⅰ类';
} else if (value === 2) {
  value = 'Ⅱ类';
} else if (value === 3) {
  value = 'Ⅲ类';
} else if (value === 4) {
  value = 'Ⅳ类';
} else if (value === 5) {
  value = 'Ⅴ类';
} else if (value === 6) {
  value = '劣Ⅴ类';
} else {
  value = '-';
}
return value;

};
const getChartOptions = () => {
// 图表配置项
let chartOption = {};
const toolbox = {
  show: true,
  top: 5,
  right: 130,
  iconStyle: {
    color: '#fff'
  },
  feature: {
    magicType: {
      type: ["line", "bar"],
      title: {
        line: '转为折线图',
        bar: '转为柱状图'
      }
    },
  }
};
if (state.variationTrendData.activeTarget === 'waterLevelChange') {
  // 水质的图表配置
  chartOption = {
    "dataZoom": [
      {
        "type": "slider",
        "height": 10,

        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
        textStyle: {
          color: '#fff'
        }
      },
      {
        type: 'inside',      // 内置缩放，支持鼠标滚轮缩放
        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
      }
    ],
    toolbox,
    grid: {
      top: "15%",
      left: '6%',
      right: '2%',
      bottom: '100px'
    },
    color: ['#00FFFF', '#FFF200', '#FF8400', '#43D156', '#EE70FF'],
    legend: {
      show: true,
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 13
      },
      // data: ['当月值', '累计均值', '去年同期', '去年累计均值指标']
      data: ['当月值',  '去年同期']

    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      textStyle: {
        color: 'rgba(255, 255, 255, 1)'
      },
      "formatter": (formatterParams) => {
        if (!formatterParams[0].data?.tooltipXAxisLabel) return;
        let str = '';
        const name = formatterParams[0].data?.tooltipXAxisLabel || '--';
        formatterParams.forEach((item) => {
          const unit = item.data?.unit || '';
          const valueName = handleNoVal(item.data?.valueName);
          // 如果值是数组，则取最后一项，参考官网值为数组；
          const curValue = Array.isArray(item.value) ? item.value[item.value.length - 1] : item.value;
          // hiddenInTooltip 是否在tooltip中隐藏
          if (item.data?.hiddenInTooltip) return;
          // ${handleNoVal(curValue) !== '--' ? unit : ''}
          str += `<div style="margin: 10px 0 0;line-height: 1">${item.marker}<span>${item.seriesName}</span>
    <span style="float: right;margin-left: 10px;">
    ${item.data?.showValueName ? valueName : getWaterChartLabel(Number(curValue) || 0)}${unit}</span><br/></div>`;
        });
        return `${name}<br/>${str}`;
      }
    },
    xAxis: {
      type: 'category',
      data: [],
      axisLabel: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13,
        rotate: 45
      },
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      nameTextStyle: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 13
      }
    },
    yAxis: {
      type: 'value',
      max: 6,
      axisLabel: {
        formatter: function (value) {
          return getWaterChartLabel(value);
        },
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      name: '',
      nameTextStyle: {
        color: 'rgba(255, 255, 255, 0.7)',
        align: 'right',
        padding: [0, 0, 10, -24],
        fontSize: 13
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'rgba(255, 255, 255, 0.2)'
        }
      }
    },
    series: []
  };
} else if (state.variationTrendData.activeTarget === 'W01001') {
  // ph 的图表配置
  chartOption = {
    "dataZoom": [
      {
        "type": "slider",
        "height": 10,

        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
        textStyle: {
          color: '#fff'
        }
      },
      {
        type: 'inside',      // 内置缩放，支持鼠标滚轮缩放
        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
      }
      // {
      //   "type": "slider",
      //   "backgroundColor": getCssVariable('--business-show-bg30'),
      //   "borderColor": getCssVariable('--business-show-bg30'),
      //   "borderRadius": 0,
      //   "showDetail": false,
      //   "showDataShadow": false,
      //   "zoomLock": true,
      //   "height": 7,
      //   "end": 50,
      //   "brushSelect": false,
      //   "bottom": "0%",
      //   "brushStyle": {
      //     "color": "#000"
      //   },
      //   "fillerColor": getCssVariable('--business-btn-default'),
      //   "handleIcon": "none",
      //   "handleStyle": {
      //     "color": "#2D955A",
      //     "borderColor": "#D1D5D9",
      //     "borderCap": "round"
      //   }
      // }
    ],
    grid: {
      top: '15%',
      left: '5%',
      right: '4%',
      // bottom: '12%'
      bottom: '100px'
    },
    color: ['#00FFFF', '#FFF200', '#FF8400', '#43D156', '#EE70FF'],
    legend: {
      show: true,
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 13
      },
      data: ['当月值', '去年同期']
    },
    toolbox,
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      textStyle: {
        color: 'rgba(255, 255, 255, 1)'
      },
      "formatter": (value) => handleTooltipFormatter(value)
    },
    xAxis: {
      type: 'category',
      data: [],
      axisLabel: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13,
        rotate: 45
      },
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      nameTextStyle: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 13
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      name: '',
      nameTextStyle: {
        color: 'rgba(255, 255, 255, 0.7)',
        align: 'right',
        padding: [0, 0, 10, -24],
        fontSize: 13
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'rgba(255, 255, 255, 0.2)'
        }
      }
    },
    series: []
  }
} else {
  // 其他污染物
  chartOption = {
    "dataZoom": [
      // {
      //   "type": "slider",
      //   "backgroundColor": getCssVariable('--business-show-bg30'),
      //   "borderColor": getCssVariable('--business-show-bg30'),
      //   "borderRadius": 0,
      //   "showDetail": false,
      //   "showDataShadow": false,
      //   "zoomLock": true,
      //   "height": 7,
      //   "end": 50,
      //   "brushSelect": false,
      //   "bottom": "0%",
      //   "brushStyle": {
      //     "color": "#000"
      //   },
      //   "fillerColor": getCssVariable('--business-btn-default'),
      //   "handleIcon": "none",
      //   "handleStyle": {
      //     "color": "#2D955A",
      //     "borderColor": "#D1D5D9",
      //     "borderCap": "round"
      //   }
      // }
      {
        "type": "slider",
        "height": 10,

        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
        textStyle: {
          color: '#fff'
        }
      },
      {
        type: 'inside',      // 内置缩放，支持鼠标滚轮缩放
        xAxisIndex: [0, 1, 2], // 控制所有三个x轴
      }
    ],
    grid: {
      top: '15%',
      left: '5%',
      right: '4%',
      // bottom: '12%'
      bottom: '100px'
    },
    color: ['#00FFFF', '#FFF200', '#FF8400', '#43D156', '#EE70FF'],
    legend: {
      show: true,
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 13
      },
       data: ['当月值',  '去年同期']
    },
    toolbox,
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      textStyle: {
        color: 'rgba(255, 255, 255, 1)'
      },
      "formatter": (value) => handleTooltipFormatter(value)
    },
    xAxis: {
      type: 'category',
      data: [],
      axisLabel: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13,
        rotate: 45
      },
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      nameTextStyle: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 13
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: 'rgba(255, 255, 255, 0.4)'
        }
      },
      name: 'mg/L',
      nameTextStyle: {
        color: 'rgba(255, 255, 255, 0.7)',
        align: 'right',
        padding: [0, 0, 10, -24],
        fontSize: 13
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'rgba(255, 255, 255, 0.2)'
        }
      }
    },
    series: []
  }
}

return chartOption;
};
const initPageData = () => {
// 处理参数
state.tabSelect = 'hour'
state.dateType = 'datetimerangehour';
state.standEnterId = global.businessDialog.dialogParmas?.POINT_CODE || '913507005616846687001P';
async function getData (){
  // 获取站点列表
  await apiRegistry.getPointList.request();
  // 获取最新时间
  await apiRegistry.getLatestTime.request();
  // 获取污染物排放浓度
  await apiRegistry.getMonitorData.request();
  // 获取污染物变化趋势
  await apiRegistry.getPollutantVariationTrend.request();
}
getData()
};
const setNoDataIcon = () => {
// 设置暂无数据图标
state.noDataImg= getCssVariable('--business-no-data-img');
};
const getWaterLevelSrc = (key) => {
// 图标路径
const waterLevelSrc = [
    "6678a04114a34021a947caa73ebcf17f",
    "7cd40b10184443b6bdff4282e363f9de",
    "3a76262a85f24b9b983339ab06117f78",
    "1f1734ed58db4ed991edd563a803baef",
    "411e6a8a398246b1a82e117669795e44",
    "7732a1ec888e44e2bd34cb304dd71a0a",
    "85937bae863347139a4039c3df87e4b2"
]
return `url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-30/${waterLevelSrc[Number(key) || 0]}.svg)`
};
const changeTime = (time) => {
state.timeRange = time || [];
state.startTime = time[0] || '';
state.endTime = time[1] || '';
async function getData (){
  // 获取污染物排放浓度
  await apiRegistry.getMonitorData.request();
  // 获取污染物变化趋势
  await apiRegistry.getPollutantVariationTrend.request();
}
getData()
};
const changeStandard = () => {
if (
  Array.isArray(state.seriesData)
  && Array.isArray(state.standardSeriesData)
) {
  // 没有标准值的
  state.variationTrendData.chartOptions.series = [
    ...state.seriesData,
  ];
  // 有标准值的
  state.options = _.cloneDeep(state.variationTrendData.chartOptions)
  state.options.series = [
    ...state.seriesData,
    ...state.standardSeriesData
  ];
}
console.log('没有标准值的',state.variationTrendData.chartOptions)
console.log('有标准值的', state.options)
};
const handleWaterLevelStandard = (seriesName,lineColor,labelPosition) => {
// 默认线条颜色
const defaultLineColor = '#465FFF';
return {
  name: seriesName,
  "type": "line",
  "symbol": "none",
  "lineStyle": {
    "type": "dashed",
    "width": 0
  },
  itemStyle: {
    color: lineColor || defaultLineColor,
  },
  markLine: {
    'symbol': 'none',
    "label": {
      position: labelPosition || 'insideEndTop',
      "color": lineColor || defaultLineColor,
      "fontSize": 12,
      formatter: (params) => {
        return `${handleNoVal(seriesName)}：${getWaterChartLabel(Number(params.value) || 0)}`
      }
    },
    "data": [
      {
        "0": {
          "valueIndex": 1,
          "type": "max"
        },
        "type": "average"
      }
    ],
    "silent": true
  },
}
};
const handleCharts = (myChart) => {
console.log('myChart', myChart)
state.myChart = myChart
};
const setCardStyle = () => {
const sheet = new CSSStyleSheet();
sheet.insertRule(`body #t-scrollable-cards-455f.ff3a2c962 .scrollable-cards-body {
width: 100% !important;
}`);

document.adoptedStyleSheets = [sheet];

};
const changeTopTabs = (data) => {
// 如果第二个下拉框选中all 那就把入参 selectTwo置为空
state.selectTwo = state.selectTwoValue === 'all' ? '' : state.selectTwoValue;
state.surfaceWaterParamsState.ASSESSTYPE = state.tabsActiveValue
// 整体评价结果-卡片
getPJResultCard();
// 断面评价结果-列表
getSZPLList();

rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  // 给地图发消息
  data: [
    {
      "code": "id",
      "shareCode": "ASSESSTYPE",
      "defaultValue": "",
      "runtimeValue": data.value,
    },
    {
      "code": "text",
      "shareCode": "",
      "defaultValue": "",
      "runtimeValue": data.label
    },
    {
      "code": "defaultTab",
      "name": "",
      "defaultValue": "pointWq",
      "shareCode": "defaultTab",
      "runtimeValue": "pointWq"
    }
  ]
});
};
const handleDateType = () => {
async function getData() {
  state.timeRange = []
  if (state.tabSelect === 'hour') {
    state.dateType = 'datetimerangehour'
  } else if (state.tabSelect === 'day') {
    state.dateType = 'daterange'
  }
}
getData()
};
const handleLocation = (column,row) => {
/**
 * 处理定位
 */

if (["定位", '断面名称', '行政区', '管理类型', '水质现状'].includes(column.label)) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: 'runInteractive', // 消息名称
    data: [
      {
        code: 'point_code',
        shareCode: 'POINT_CODE',
        defaultValue: '',
        runtimeValue: row.POINT_CODE
      }
    ]
  });
}

};
const isShowChartUnit = () => {
watch([() => state.showType, () => state.currentPolluteCode], () =>{
  if(state.showType === 'table' || state.currentPolluteCode === 'W01001' || !state.chartList.length){
    state.isShowchartUnit = false
  }else{
    state.isShowchartUnit = true
  }
  if(state.currentPolluteCode === 'W00000'){
    state.chartUint = 'm³/s'
  }else{
    state.chartUint = '浓度（mg/L）'
  }
})
};
const changePointCode = () => {
async function getData (){
  // 获取最新时间
  await apiRegistry.getLatestTime.request();
  // 获取污染物排放浓度
  await apiRegistry.getMonitorData.request();
  // 获取污染物变化趋势
  await apiRegistry.getPollutantVariationTrend.request();
}
getData()
};
const ontabClick1767581775067_0_0 = (data) => {
// 设置变量值
state.tabSelect = data.value;
// 执行自定义方法
handleDateType();
// 执行自定义方法
changePointCode();
};
const ondateChange1767779170144_0_0 = (data) => {
// 执行自定义方法
changeTime(data);
};
const oncellClick1767773230043_0_0 = (row,column,cell,event) => {
// 执行自定义方法
handleLocation(column,row);
};
const onchange1733973555614 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.currentPolluteCode = value;
// 事件交互-请求调用接口
apiRegistry.getPollutantVariationTrend.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const onchange1767772766838_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.showType = value;
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getPointList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"STANDENTERID":"state.standEnterId","interfaceId":"5e6f674a38e4cb79099dd20685fa2195"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"STANDENTERID":state.standEnterId,"interfaceId":"5e6f674a38e4cb79099dd20685fa2195"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"STANDENTERID":state.standEnterId,"interfaceId":"5e6f674a38e4cb79099dd20685fa2195"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPointList'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.pointList = data.map(item =>{
    return{
      label: item.OUTPUTNAME,
      value: item.OUTPUTCODE,
      disabled: false
    }
  })
  state.currentPointCode = state.pointList[0].value
}else{
  state.pointList = []
  state.currentPointCode = ''
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TIME_TYPE":"state.tabSelect","OUTPUTCODE":"state.currentPointCode","STANDENTERID":"state.standEnterId","interfaceId":"35a7891cbace335f2f8cee6c55d72692"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.tabSelect,"OUTPUTCODE":state.currentPointCode,"STANDENTERID":state.standEnterId,"interfaceId":"35a7891cbace335f2f8cee6c55d72692"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TIME_TYPE":state.tabSelect,"OUTPUTCODE":state.currentPointCode,"STANDENTERID":state.standEnterId,"interfaceId":"35a7891cbace335f2f8cee6c55d72692"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.startTime = data.MONITOR_START_TIME || '';
  state.endTime = data.MONITOR_END_TIME || '';
  state.lastTime = data.MONITOR_END_TIME
  state.timeRange = [state.startTime, state.endTime];
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
 getPollutantVariationTrend: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TIME_TYPE":"state.tabSelect","OUTPUTCODE":"state.currentPointCode","POLLUTANTCODE":"state.currentPolluteCode","STANDENTERID":"state.standEnterId","MONITOR_END_TIME":"state.endTime","MONITOR_START_TIME":"state.startTime","interfaceId":"f9d3adb437d23112c048219c06bf0b59"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.tabSelect,"OUTPUTCODE":state.currentPointCode,"POLLUTANTCODE":state.currentPolluteCode,"STANDENTERID":state.standEnterId,"MONITOR_END_TIME":state.endTime,"MONITOR_START_TIME":state.startTime,"interfaceId":"f9d3adb437d23112c048219c06bf0b59"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TIME_TYPE":state.tabSelect,"OUTPUTCODE":state.currentPointCode,"POLLUTANTCODE":state.currentPolluteCode,"STANDENTERID":state.standEnterId,"MONITOR_END_TIME":state.endTime,"MONITOR_START_TIME":state.startTime,"interfaceId":"f9d3adb437d23112c048219c06bf0b59"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPollutantVariationTrend'] = res.data;
                
     console.log(res);
state.seriesData = []
state.standardSeriesData = []
const { data, head } = res.data;

if (head.statusCode === '200' && data.length) {
  state.chartList = data
  state.listData = data.map((item, index) => {
    return {
      "index": index + 1,
      "moniterTime": item.MONITORTIME || '-',
      "pollute": item.AVGSTRENGTH || '-'
    }
  })
  const polluteName = data[0].POLLUTANTNAME
  state.tableColumns = [
    {
      "label": "序号",
      "key": "index",
      "align": "center",
      "operationList": [],
      "stateList": [],
      "width": "66PX",
      "showOverflowTooltip": true,
      "style": {
        "fontStyle": {
          "fontSize": "14PX"
        }
      }
    },
    {
      "label": "监测时间",
      "key": "moniterTime",
      "stateKey": "waterQualityTargetValue",
      "align": "center",
      "type": "default",
      "operationList": [],
      "style": {
        "fontStyle": {
          "width": "40PX",
          "height": "PX"
        }
      }
    },
    {
      "label": `${polluteName}（mg/L）`,
      "key": "pollute",
      "stateKey": "",
      "align": "center",
      "type": "default",
      "operationList": [],
      "width": "355px",
      "style": {
        "fontStyle": {
          "fontSize": "12PX",
          "width": "PX",
          "height": "PX",
          "borderRadius": "PX",
          "background": ""
        }
      }
    }
  ]
} else {
  state.chartList = []
  state.listData = []
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      

state.seriesData = []
state.standardSeriesData = []
      reject(error);
    });
  });
},
              },
// 接口函数
 getMonitorData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TIME_TYPE":"state.tabSelect","STANDENTERID":"state.standEnterId","OUTPUTCODE":"state.currentPointCode","MONITORTIME":"state.endTime","interfaceId":"80aed9ed099626e6a7ce834975e2c3eb"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.tabSelect,"STANDENTERID":state.standEnterId,"OUTPUTCODE":state.currentPointCode,"MONITORTIME":state.endTime,"interfaceId":"80aed9ed099626e6a7ce834975e2c3eb"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TIME_TYPE":state.tabSelect,"STANDENTERID":state.standEnterId,"OUTPUTCODE":state.currentPointCode,"MONITORTIME":state.endTime,"interfaceId":"80aed9ed099626e6a7ce834975e2c3eb"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMonitorData'] = res.data;
                
     console.log(res);
const { data, head } = res.data;

if (head?.statusCode === '200' && data.length) {
  // 超标和达标的样式
  const exceedStandardStyle = {
    cardIconStyle: { background: "#FF2B2B" },
    valueStyle: { color: "#FF2B2B" },
    labelIconStyle: {}
  };

  const meetStandardStyle = {
    cardIconStyle: { background: "#00DA2A" },
    labelIconStyle: {}
  };
  data.forEach(item => {
    const index = state.monitorData.findIndex(i => i.code === item.POLLUTANTCODE)
    let style = {}
    if (item.ISOVER === '0') {
      style = { ...exceedStandardStyle };
    } else if (item.ISOVER === '1' || item.ISOVER === '') {
      style = { ...meetStandardStyle };
    }
    if (index > -1) {
      state.monitorData[index] = {
        ...state.monitorData[index],
        label: item.POLLUTE_NAME,
        value: item.AVGSTRENGTH,
        style: style
      }
    }
  })
  console.log('state.monitorData', state.monitorData)
  state.currentPolluteCode = data[0]?.POLLUTANTCODE || 'W01001'
} else {
  state.monitorData = [
    {
      "value": "-",
      "label": "pH值",
      "code": "W01001",
      "style": {
        "cardIconStyle": {
          "background": "#00DA2A"
        },
        "labelIconStyle": {}
      }
    },
    {
      "value": "-",
      "label": "化学需氧量",
      "unit": "mg/L",
      "code": "W01018",
      "style": {
        "cardIconStyle": {
          "background": "#00DA2A"
        },
        "labelIconStyle": {}
      }
    },
    {
      "value": "-",
      "label": "氨氮",
      "unit": "mg/L",
      "code": "W21003",
      "style": {
        "cardIconStyle": {
          "background": "#00DA2A"
        },
        "labelIconStyle": {}
      }
    },
    {
      "value": "-",
      "label": "总磷",
      "unit": "mg/L",
      "code": "W21011",
      "style": {
        "cardIconStyle": {
          "background": "#00DA2A"
        },
        "labelIconStyle": {}
      }
    },
    {
      "value": "-",
      "label": "流量",
      "unit": "m³/s",
      "code": "W00000",
      "style": {
        "cardIconStyle": {
          "background": "#00DA2A"
        },
        "labelIconStyle": {}
      }
    }
  ]
  state.currentPolluteCode = 'W01001'
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
                            setPageScale('t-l-c-rhpwkMonitoringInformation', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setNoDataIcon();
// 执行自定义方法
initPageData();
// 执行自定义方法
isShowChartUnit();
onMounted(() => {
setPageScale('t-l-c-rhpwkMonitoringInformation', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setCardStyle();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tScrollableCardsx0x2ComputedData = computed(() => _.merge({}, componentState.tScrollableCardsx0x2.default, componentState.tScrollableCardsx0x2?.[state.screenSize]));

 const tRowx0x3ComputedData = computed(() => _.merge({}, componentState.tRowx0x3.default, componentState.tRowx0x3?.[state.screenSize]));

 const tColx0x3x0ComputedData = computed(() => _.merge({}, componentState.tColx0x3x0.default, componentState.tColx0x3x0?.[state.screenSize]));

 const tTabsBasex0x3x0x0ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x3x0x0.default, componentState.tTabsBasex0x3x0x0?.[state.screenSize]));

 const tDatePickerx0x3x0x1ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x3x0x1.default, componentState.tDatePickerx0x3x0x1?.[state.screenSize]));

 const tTablex0x4ComputedData = computed(() => _.merge({}, componentState.tTablex0x4.default, componentState.tTablex0x4?.[state.screenSize]));

 const tRowx0x5ComputedData = computed(() => _.merge({}, componentState.tRowx0x5.default, componentState.tRowx0x5?.[state.screenSize]));

 const tColx0x5x0ComputedData = computed(() => _.merge({}, componentState.tColx0x5x0.default, componentState.tColx0x5x0?.[state.screenSize]));

 const tTextx0x5x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x5x0x0.default, componentState.tTextx0x5x0x0?.[state.screenSize]));

 const tColx0x5x1ComputedData = computed(() => _.merge({}, componentState.tColx0x5x1.default, componentState.tColx0x5x1?.[state.screenSize]));

 const tSelectx0x5x1x0ComputedData = computed(() => _.merge({}, componentState.tSelectx0x5x1x0.default, componentState.tSelectx0x5x1x0?.[state.screenSize]));

 const tSelectx0x5x1x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x5x1x1.default, componentState.tSelectx0x5x1x1?.[state.screenSize]));

 const tRowx0x6ComputedData = computed(() => _.merge({}, componentState.tRowx0x6.default, componentState.tRowx0x6?.[state.screenSize]));

 const tTextx0x6x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x6x0.default, componentState.tTextx0x6x0?.[state.screenSize]));

 const tChartLineSinglex0x7ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartLineSinglex0x7.default, componentState.tChartLineSinglex0x7?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tTextx0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x8.default, componentState.tTextx0x8?.[state.screenSize]));

 const tRowx0x9ComputedData = computed(() => _.merge({}, componentState.tRowx0x9.default, componentState.tRowx0x9?.[state.screenSize]));

 const tColx0x9x0ComputedData = computed(() => _.merge({}, componentState.tColx0x9x0.default, componentState.tColx0x9x0?.[state.screenSize]));

 const tTextx0x9x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x9x0x0.default, componentState.tTextx0x9x0x0?.[state.screenSize]));

 const tColx0x9x1ComputedData = computed(() => _.merge({}, componentState.tColx0x9x1.default, componentState.tColx0x9x1?.[state.screenSize]));

 const tCirclex0x9x1x0ComputedData = computed(() => _.merge({}, componentState.tCirclex0x9x1x0.default, componentState.tCirclex0x9x1x0?.[state.screenSize]));

 const tTextx0x9x1x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x9x1x1.default, componentState.tTextx0x9x1x1?.[state.screenSize]));

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
tTextx0x1ComputedData,
tScrollableCardsx0x2ComputedData,
tRowx0x3ComputedData,
tColx0x3x0ComputedData,
tTabsBasex0x3x0x0ComputedData,
tDatePickerx0x3x0x1ComputedData,
tTablex0x4ComputedData,
tRowx0x5ComputedData,
tColx0x5x0ComputedData,
tTextx0x5x0x0ComputedData,
tColx0x5x1ComputedData,
tSelectx0x5x1x0ComputedData,
tSelectx0x5x1x1ComputedData,
tRowx0x6ComputedData,
tTextx0x6x0ComputedData,
tChartLineSinglex0x7ComputedData,
tTextx0x8ComputedData,
tRowx0x9ComputedData,
tColx0x9x0ComputedData,
tTextx0x9x0x0ComputedData,
tColx0x9x1ComputedData,
tCirclex0x9x1x0ComputedData,
tTextx0x9x1x1ComputedData,
ontabClick1767581775067_0_0,
ondateChange1767779170144_0_0,
oncellClick1767773230043_0_0,
onchange1733973555614,
onchange1767772766838_0_0,
};
},
};