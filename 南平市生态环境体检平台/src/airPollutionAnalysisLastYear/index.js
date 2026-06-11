window.airPollutionAnalysisLastYearComponent = {
template: 
`<div id="t-l-c-airPollutionAnalysisLastYear" class="t-l-c-airPollutionAnalysisLastYear" >` +
`<t-text v-if="state.radioTimeType === 'month'" id="t-text-6b66.3de8dc785" class="airPollutionAnalysisLastYear-t-text-0-0"  :label="tTextx0x0ComputedData.label" :editable="tTextx0x0ComputedData.editable" :c-style="tTextx0x0ComputedData.cStyle">` +
`</t-text>` +
`<t-table id="t-table-1111.70c17ca02" class="airPollutionAnalysisLastYear-t-table-0-1"  :height="tTablex0x1ComputedData.height" :stripe="tTablex0x1ComputedData.stripe" :border="tTablex0x1ComputedData.border" :auto-scroll="tTablex0x1ComputedData.autoScroll" :speed="tTablex0x1ComputedData.speed" :columns="state.tableColumns" :data="state.lastYearAnalysisList" :default-sort="tTablex0x1ComputedData.defaultSort" :c-style="tTablex0x1ComputedData.cStyle" :columns-raw="tTablex0x1ComputedData.columnsRaw">` +
`</t-table>` +
`<t-component id="t-component-8a34.3793f8f44" class="airPollutionAnalysisLastYear-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName">` +
`</t-component>` +
`<t-select v-if="state.radioTimeType === 'month'" id="t-select-4e0b.e281843f7" class="airPollutionAnalysisLastYear-t-select-0-3"  :active-value="state.timeValueObj.endMonth" :options="tSelectx0x3ComputedData.options" :alias="tSelectx0x3ComputedData.alias" :multiple="tSelectx0x3ComputedData.multiple" :placeholder="tSelectx0x3ComputedData.placeholder" :clearable="tSelectx0x3ComputedData.clearable" :disabled="tSelectx0x3ComputedData.disabled" :name="tSelectx0x3ComputedData.name" :autocomplete="tSelectx0x3ComputedData.autocomplete" :filterable="tSelectx0x3ComputedData.filterable" :no-match-text="tSelectx0x3ComputedData.no-match-text" :no-data-text="tSelectx0x3ComputedData.no-data-text" :c-style="tSelectx0x3ComputedData.cStyle" @change="onchange1737339295305">` +
`</t-select>` +
`<t-select v-if="state.radioTimeType === 'month'" id="t-select-a6ff.610725599" class="airPollutionAnalysisLastYear-t-select-0-4"  :active-value="state.timeValueObj.startMonth" :options="tSelectx0x4ComputedData.options" :alias="tSelectx0x4ComputedData.alias" :multiple="tSelectx0x4ComputedData.multiple" :placeholder="tSelectx0x4ComputedData.placeholder" :clearable="tSelectx0x4ComputedData.clearable" :disabled="tSelectx0x4ComputedData.disabled" :name="tSelectx0x4ComputedData.name" :autocomplete="tSelectx0x4ComputedData.autocomplete" :filterable="tSelectx0x4ComputedData.filterable" :no-match-text="tSelectx0x4ComputedData.no-match-text" :no-data-text="tSelectx0x4ComputedData.no-data-text" :c-style="tSelectx0x4ComputedData.cStyle" @change="onchange1737339256153">` +
`</t-select>` +
`<t-text id="t-text-5292.12e28085b" class="airPollutionAnalysisLastYear-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle">` +
`</t-text>` +
`<t-tabs id="t-tabs-f8c2.7db627638" class="airPollutionAnalysisLastYear-t-tabs-0-8"  :alias="tTabsx0x8ComputedData.alias" :data="tTabsx0x8ComputedData.data" :active-tab="state.timeType" :tab-position-extend="tTabsx0x8ComputedData.tabPositionExtend" :stretch="tTabsx0x8ComputedData.stretch" :c-style="tTabsx0x8ComputedData.cStyle" @tab-click="ontabClick1737026784933">` +
`</t-tabs>` +
`<t-text id="t-text-1644.569c5bfc8" class="airPollutionAnalysisLastYear-t-text-0-9"  :label="state.unitText" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle">` +
`</t-text>` +
`<t-radio id="t-radio-c273.e3eabe6b1" class="airPollutionAnalysisLastYear-t-radio-0-10"  :options="tRadiox0x10ComputedData.options" :active="state.radioTimeType" :alias="tRadiox0x10ComputedData.alias" :disabled="tRadiox0x10ComputedData.disabled" :border="tRadiox0x10ComputedData.border" :size="tRadiox0x10ComputedData.size" :is-use-button="tRadiox0x10ComputedData.isUseButton" :c-style="tRadiox0x10ComputedData.cStyle" @change="onchange1737339038401">` +
`</t-radio>` +
`<t-date-picker v-if="state.radioTimeType === 'year'" id="t-date-picker-faa7.89f6f7bf5" class="airPollutionAnalysisLastYear-t-date-picker-0-11"  :placeholder="tDatePickerx0x11ComputedData.placeholder" :start-placeholder="tDatePickerx0x11ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x11ComputedData.endPlaceholder" :type="tDatePickerx0x11ComputedData.type" :clearable="tDatePickerx0x11ComputedData.clearable" :range-separator="tDatePickerx0x11ComputedData.rangeSeparator" :default-date="state.timeValueObj.year" :separator="tDatePickerx0x11ComputedData.separator" :readonly="tDatePickerx0x11ComputedData.readonly" :editable="tDatePickerx0x11ComputedData.editable" :c-style="tDatePickerx0x11ComputedData.cStyle" :is-disabled-front="tDatePickerx0x11ComputedData.isDisabledFront" :disabled-date="state.timeValueObj.maxTimeValue" @date-change="ondateChange1737339139743">` +
`</t-date-picker>` +
`<t-date-picker v-if="state.radioTimeType === 'month'" id="t-date-picker-0748.1ddf79d41" class="airPollutionAnalysisLastYear-t-date-picker-0-12"  :placeholder="tDatePickerx0x12ComputedData.placeholder" :start-placeholder="tDatePickerx0x12ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x12ComputedData.endPlaceholder" :type="tDatePickerx0x12ComputedData.type" :clearable="tDatePickerx0x12ComputedData.clearable" :range-separator="tDatePickerx0x12ComputedData.rangeSeparator" :default-date="state.timeValueObj.year" :separator="tDatePickerx0x12ComputedData.separator" :readonly="tDatePickerx0x12ComputedData.readonly" :editable="tDatePickerx0x12ComputedData.editable" :c-style="tDatePickerx0x12ComputedData.cStyle" :is-disabled-front="tDatePickerx0x12ComputedData.isDisabledFront" :disabled-date="state.timeValueObj.maxTimeValue" @date-change="ondateChange1737339108407">` +
`</t-date-picker>` +
`</div>` +
'',
setup() {
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
   unitText: "单位：天",
   timeValueObj: {"year":"","startMonth":"","endMonth":"","maxTimeValue":""},
   radioTimeType: "year",
   timeType: "",
   selectTimeArr: [],
   endTime: "",
   startTime: "",
   lastYearAnalysisList: [],
   airPollutionContentState: {"startTime":"","timeType":"","endTime":"","selectTimeArr":[],"maxTimeValue":""},
   tableColumns: [{"label":"年份","type":"default","key":"MONITORTIME","stateKey":"","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"fontStyle":{"margin":"","padding":"","fontWeight":"normal"}}},{"label":"轻度污染及以上","type":"default","key":"Q_NUM","stateKey":"","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}}},{"label":"PM₂.₅","type":"default","key":"PM25_NUM","stateKey":"excellentValue","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"labelRaw":"PM₂.₅"},{"label":"PM₁₀","type":"default","key":"PM10_NUM","stateKey":"inferiorRateValue","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--t-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"rgba(184, 255, 215, 0.8)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"labelRaw":"PM₁₀"},{"label":"SO₂","type":"default","key":"SO2_NUM","stateKey":"achievementRateValue","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"labelRaw":"SO₂"},{"label":"NO₂","type":"default","key":"NO2_NUM","stateKey":"achievementRateValue","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"labelRaw":"NO₂"},{"label":"CO","type":"default","key":"CO_NUM","stateKey":"achievementRateValue","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"O₃-8h","type":"default","key":"O3_NUM","stateKey":"achievementRateValue","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"labelRaw":"O₃-8h"}],
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
tTextx0x0: {
defaultStyle: {
            default: {"width":"14px","height":"16px","color":"var(--business-text-avianize)","fontSize":"14px","top":"7px","left":"861px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"至",
editable:false,
cStyle:{"wrapper":{"default":{"width":"14px","height":"16px","color":"var(--business-text-avianize)","fontSize":"14px","top":"7px","left":"861px","position":"unset","animationName":""}}}, 
 },
},
tTablex0x1: {
defaultStyle: {
            default: {"width":"960px","height":"530px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","top":"70px","left":"1px","position":"unset"},
            
            },
 default: { 
 
height:"530",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"年份","type":"default","key":"MONITORTIME","stateKey":"","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"fontStyle":{"margin":"","padding":"","fontWeight":"normal"}}},{"label":"轻度污染及以上","type":"default","key":"Q_NUM","stateKey":"","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}}},{"label":"PM₂.₅","type":"default","key":"PM25_NUM","stateKey":"excellentValue","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"labelRaw":"PM₂.₅"},{"label":"PM₁₀","type":"default","key":"PM10_NUM","stateKey":"inferiorRateValue","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--t-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"rgba(184, 255, 215, 0.8)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"labelRaw":"PM₁₀"},{"label":"SO₂","type":"default","key":"SO2_NUM","stateKey":"achievementRateValue","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"labelRaw":"SO₂"},{"label":"NO₂","type":"default","key":"NO2_NUM","stateKey":"achievementRateValue","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"labelRaw":"NO₂"},{"label":"CO","type":"default","key":"CO_NUM","stateKey":"achievementRateValue","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"O₃-8h","type":"default","key":"O3_NUM","stateKey":"achievementRateValue","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"labelRaw":"O₃-8h"}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"960px","height":"530px","borderBottom":"0px solid rgba(23,62,228,0)","fontWeight":"400","animationName":"","top":"70px","left":"1px","position":"unset"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"0px solid ","color":"var(--t-white)","width":"418px","height":"32px","backgroundColor":"var(--business-table-header-bg)   ","fontSize":"14px","fontWeight":"300","marginRight":"0px","paddingTop":"4px","paddingBottom":"4px","marginBottom":"2px"}},"bodyCell":{"default":{"backgroundColor":"var(--business-table-odd-row-bg)","borderBottom":"2px solid rgba(26,27,31,0)","borderLeft":"0px solid ","borderRight":"0px solid ","borderTop":"2px solid rgba(26,27,31,0)","color":"rgba(255, 255, 255, 1)","height":"40px","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"}},"stripeBodyCell":{"default":{"backgroundColor":"var(--business-table-even-row-bg)","marginTop":"2px","marginBottom":"2px","borderLeft":"0px solid rgba(23,62,228,0)","borderTop":"0px solid rgba(23,62,228,0)","borderRight":"0px solid rgba(23,62,228,0)","borderBottom":"2px solid rgba(23,62,228,0)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(24, 37, 64, 0)"},"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--business-table-odd-row-bg)"}}},
columnsRaw:[{"label":"年份","type":"default","key":"MONITORTIME","stateKey":"","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"fontStyle":{"margin":"","padding":"","fontWeight":"normal"}}},{"label":"轻度污染及以上","type":"default","key":"Q_NUM","stateKey":"","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"14PX"}}},{"label":"{{PM25}}","type":"default","key":"PM25_NUM","stateKey":"excellentValue","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"labelRaw":"{{PM25}}"},{"label":"{{PM10}}","type":"default","key":"PM10_NUM","stateKey":"inferiorRateValue","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX","color":"var(--t-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"rgba(184, 255, 215, 0.8)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"labelRaw":"{{PM10}}"},{"label":"{{SO2}}","type":"default","key":"SO2_NUM","stateKey":"achievementRateValue","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"labelRaw":"{{SO2}}"},{"label":"{{NO2}}","type":"default","key":"NO2_NUM","stateKey":"achievementRateValue","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"labelRaw":"{{NO2}}"},{"label":"CO","type":"default","key":"CO_NUM","stateKey":"achievementRateValue","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"{{O3}}-8h","type":"default","key":"O3_NUM","stateKey":"achievementRateValue","width":"0PX","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"14PX"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"labelRaw":"{{O3}}-8h"}], 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"910px","height":"29px","margin":"0 auto","backgroundColor":"","position":"unset","left":"2px","top":"1px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"910px","height":"29px","margin":"0 auto","backgroundColor":"","position":"unset","left":"2px","top":"1px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/dialogTitleFirstBg",
componentName:"dialogTitleFirstBgComponent", 
 },
},
tSelectx0x3: {
defaultStyle: {
            default: {"width":"82px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","left":"877px","top":"-1px","position":"unset"},
            
            },
 default: { 
 
activeValue:"",
options:[{"value":"01","label":"1月","disabled":false},{"value":"02","label":"2月","disabled":false},{"value":"03","label":"3月","disabled":false},{"value":"04","label":"4月","disabled":false},{"value":"05","label":"5月","disabled":false},{"value":"06","label":"6月","disabled":false},{"value":"07","label":"7月","disabled":false},{"value":"08","label":"8月","disabled":false},{"value":"09","label":"9月","disabled":false},{"value":"10","label":"10月","disabled":false},{"value":"11","label":"11月","disabled":false},{"value":"12","label":"12月","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"82px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","left":"877px","top":"-1px","position":"unset"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"color":"var(--t-white)"}}}, 
 },
},
tSelectx0x4: {
defaultStyle: {
            default: {"width":"82px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","left":"777px","top":"-1px","position":"unset"},
            
            },
 default: { 
 
activeValue:"",
options:[{"value":"01","label":"1月","disabled":false},{"value":"02","label":"2月","disabled":false},{"value":"03","label":"3月","disabled":false},{"value":"04","label":"4月","disabled":false},{"value":"05","label":"5月","disabled":false},{"value":"06","label":"6月","disabled":false},{"value":"07","label":"7月","disabled":false},{"value":"08","label":"8月","disabled":false},{"value":"09","label":"9月","disabled":false},{"value":"10","label":"10月","disabled":false},{"value":"11","label":"11月","disabled":false},{"value":"12","label":"12月","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"82px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","left":"777px","top":"-1px","position":"unset"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"color":"var(--t-white)"}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"121px","height":"20px","color":"var(--t-white)","fontFamily":"方正综艺","fontSize":"20px","position":"unset","left":"42px","top":"5px","animationName":""},
            
            },
 default: { 
 
label:"历年污染分析",
editable:false,
cStyle:{"wrapper":{"default":{"width":"121px","height":"20px","color":"var(--t-white)","fontFamily":"方正综艺","fontSize":"20px","position":"unset","left":"42px","top":"5px","animationName":""}}}, 
 },
},
tTabsx0x8: {
defaultStyle: {
            default: {"width":"106px","height":"15px","top":"42px","left":"0px","position":"unset","animationName":""},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[{"label":"小时","name":"hour"},{"label":"日","name":"day"}],
activeTab:"",
tabPositionExtend:"top-start",
stretch:true,
cStyle:{"wrapper":{"default":{"width":"106px","height":"15px","top":"42px","left":"0px","position":"unset","animationName":""}},"itemWrapper":{"default":{"color":"var(--business-text-avianize)","fontSize":"14px","borderLeft":"1px solid var(--business-text-avianize)","marginLeft":"-1px","width":"auto","paddingLeft":"0px","paddingRight":"0px"},"active":{"backgroundColor":"rgba(23, 62, 228, 0)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)"}},"itemActiveBorder":{"default":{"display":"none"}}}, 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"width":"86px","height":"20px","color":"var(--business-text-avianize)","top":"40px","left":"874px","fontSize":"14px","lineHeight":"20px","animationName":"","position":"unset","textAlign":"right"},
            
            },
 default: { 
 
label:"单位：天",
editable:false,
cStyle:{"wrapper":{"default":{"width":"86px","height":"20px","color":"var(--business-text-avianize)","top":"40px","left":"874px","fontSize":"14px","lineHeight":"20px","animationName":"","position":"unset","textAlign":"right"}}}, 
 },
},
tRadiox0x10: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justify-content":"center","width":"131px","height":"20px","position":"unset","left":"526px","top":"6px","animationName":""},
            
            },
 default: { 
 
options:[{"label":"month","value":"按月","disabled":false},{"label":"year","value":"按年","disabled":false}],
active:"year",
alias:{"label":"label","value":"value","disabled":"disabled"},
disabled:false,
border:false,
size:"small",
isUseButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justify-content":"center","width":"131px","height":"20px","position":"unset","left":"526px","top":"6px","animationName":""}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"8px"},"active":{"color":"rgba(255, 255, 255, 1)"}},"circle":{"default":{"--el-color-white":"","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"active":{"--t-radio-active-bg-color":"var(--business-btn-active)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"itemWrapper":{"default":{"marginRight":"15px"}}}, 
 },
},
tDatePickerx0x11: {
defaultStyle: {
            default: {"width":"300px","height":"33px","position":"unset","left":"660px","top":"-1px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择年",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"year",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"300px","height":"33px","position":"unset","left":"660px","top":"-1px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tDatePickerx0x12: {
defaultStyle: {
            default: {"width":"115px","height":"33px","position":"unset","left":"660px","top":"-1px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择年",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"year",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"115px","height":"33px","position":"unset","left":"660px","top":"-1px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
});
const getAqiColor = (aqi) => {
 const aqiNum = Number(aqi)
  let aqiColor = '';
  switch (true) {
    case aqiNum <= 50:
      aqiColor = '#00e400'
      break;
    case aqiNum <= 100:
      aqiColor = '#ffcd35'
      break;
    case aqiNum <= 150:
      aqiColor = '#ff7e00'
      break;
    case aqiNum <= 200:
      aqiColor = '#dd4209'
      break;
    case aqiNum <= 300:
      aqiColor = '#99004c'
      break;
    case aqiNum > 300:
      aqiColor = '#46072d'
      break;
    default:
      aqiColor = '#000000'
  }
  return aqiColor
};
const getAnalysis = () => {
state.startTime = state.selectTimeArr[0];
state.endTime = state.selectTimeArr[1];
getLastYearAnalysisData();

};
const initData = () => {
state.airPollutionContentState = global.businessDialog.dialogParmas;

const { startTime, endTime, selectTimeArr, timeType, maxTimeValue } = state.airPollutionContentState;
state.timeType = timeType;
state.startTime = startTime;
state.endTime = endTime;
state.selectTimeArr = timeType === 'hour' ? [startTime + ' 00', endTime + ' 00'] : selectTimeArr;

state.unitText = timeType === 'hour' ? '单位：小时' : '单位：天';
// 设置最大时间及其他参数
state.timeValueObj.maxTimeValue = dateFormat(maxTimeValue, 'yyyy');
state.timeValueObj.year = dateFormat(timeType === 'hour' ? endTime + ':00' : endTime, 'yyyy');
// 默认只查一月的数据
state.timeValueObj.startMonth = state.radioTimeType === 'month' ? '01' : '';
state.timeValueObj.endMonth = state.radioTimeType === 'month' ? '01' : '';

getLastYearAnalysisData();
};
const changeTimeType = () => {
// 求时间范围 - 注释原有的逻辑
// if (state.timeType === 'day') { 
//   let rangeDate =  getForwardTimeList(state.endTime.slice(0, 10), 'day', 29);
//   state.selectTimeArr = [rangeDate[0], rangeDate[rangeDate.length - 1]];
//  } else if (state.timeType === 'hour') {
//   state.selectTimeArr = [state.startTime + ' 00', state.endTime + ' 00']
// }
// // 时间赋值
// state.startTime = state.selectTimeArr[0];
// state.endTime = state.selectTimeArr[1];

// 请求接口
getLastYearAnalysisData();
};
const setSelectTimeValue = () => {

state.unitText = state.timeType === 'hour' ? '单位：小时' : '单位：天';
if (Number(state.timeValueObj.startMonth) > Number(state.timeValueObj.endMonth)) {
  window.ElementPlus.ElMessage.error('开始月份不能大于结束月份，请重新选择');
  return;
}
getLastYearAnalysisData();
};
const handleTimeRadioChange = () => {
state.tableColumns[0].label = state.radioTimeType === 'month' ? '月份' : '年份';
// 设置默认时间、请求接口
const endTime = state.airPollutionContentState.endTime;
const defaultTimeType = state.airPollutionContentState.timeType;
state.timeValueObj.year = dateFormat(defaultTimeType === 'hour' ? endTime + ':00' : endTime, 'yyyy');
// 默认只查一月的数据
state.timeValueObj.startMonth = state.radioTimeType === 'month' ? '01' : '';
state.timeValueObj.endMonth = state.radioTimeType === 'month' ? '01' : '';

getLastYearAnalysisData();
};
const ondateChange1737026477427 = (data) => {
// 设置变量值
state.selectTimeArr = data;
// 执行自定义方法
getAnalysis();
};
const ondateChange1737026428759 = (data) => {
// 设置变量值
state.selectTimeArr = data;
// 执行自定义方法
getAnalysis();
};
const ontabClick1737026784933 = (data) => {
// 设置变量值
state.timeType = data.name;
// 执行自定义方法
setSelectTimeValue();
};
const onchange1737339038401 = (data,selectOption) => {
// 设置变量值
state.radioTimeType = data;
// 执行自定义方法
handleTimeRadioChange();
};
const ondateChange1737339139743 = (data) => {
// 设置变量值
state.timeValueObj.year = data;
// 事件交互-请求调用接口
getLastYearAnalysisData().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
};
const onchange1737339295305 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.timeValueObj.endMonth = value;
// 执行自定义方法
setSelectTimeValue();
};
const onchange1737339256153 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.timeValueObj.startMonth = value;
// 执行自定义方法
setSelectTimeValue();
};
const ondateChange1737339108407 = (data) => {
// 设置变量值
state.timeValueObj.year = data;
// 执行自定义方法
setSelectTimeValue();
};
// 接口函数
const getLastYearAnalysisData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"YEAR":state.timeValueObj.year,"START_MONTH":state.timeValueObj.startMonth,"END_MONTH":state.timeValueObj.endMonth,"TIME_TYPE":state.timeType,"REGION_TYPE":global.regionaQuery.paramsRegionType,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"6ca25f9a48b40052f0b6e6985396c9bd"},}).then((res) => {
     // 成功的操作
     const { data, head } = res.data;
if (head.statusCode === '200') {
  // 处理数值文字拼接
  const handleNumText = (objValue) => {
    let detailNumStr = [];
    // 数值对应文字
    const numLabelMap = {
      QQ_NUM: '轻度污染',
      Z_NUM: '中度污染',
      ZH_NUM: '重度污染',
      YZ_NUM: '严重污染',
    };
    Object.keys(objValue).forEach((key) => {
      // 有值且不为0时，显示
      if (['QQ_NUM', 'Z_NUM', 'ZH_NUM', 'YZ_NUM'].includes(key) && handleNoVal(objValue[key] !== '-') && String(handleNoVal(objValue[key])) !== '0') {
        detailNumStr.push(`${numLabelMap[key]}${objValue[key]}${state.timeType === 'hour' ? '小时' : '天'}`);
      }
    });
    return `${handleNoVal(objValue.Q_NUM)}${detailNumStr.length ? '（'+ detailNumStr.join('，') + '）' : ''}`;
  };

 state.lastYearAnalysisList = data.map((item) => ({
  ...item,
  Q_NUM: handleNumText(item),
 }));
} else {
  state.lastYearAnalysisList = [];
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.lastYearAnalysisList = [];
      reject(error);
    });
  });
};
// 接口函数
const getLastYearAnalysisDataCopy = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TIME_TYPE":state.timeType,"REGION_TYPE":global.regionaQuery.paramsRegionType,"END_TIME":state.endTime,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"d61c83bd2b76133ac272be4e9cb19e12"},}).then((res) => {
     // 成功的操作
     const { data, head } = res.data;
if (head.statusCode === '200') {
 state.lastYearAnalysisList = data;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-airPollutionAnalysisLastYear', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initData();
onMounted(() => {
setPageScale('t-l-c-airPollutionAnalysisLastYear', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTextx0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0.default, componentState.tTextx0x0?.[state.screenSize]));

 const tTablex0x1ComputedData = computed(() => _.merge({}, componentState.tTablex0x1.default, componentState.tTablex0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tSelectx0x3ComputedData = computed(() => _.merge({}, componentState.tSelectx0x3.default, componentState.tSelectx0x3?.[state.screenSize]));

 const tSelectx0x4ComputedData = computed(() => _.merge({}, componentState.tSelectx0x4.default, componentState.tSelectx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tTabsx0x8ComputedData = computed(() => _.merge({}, componentState.tTabsx0x8.default, componentState.tTabsx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tRadiox0x10ComputedData = computed(() => _.merge({}, componentState.tRadiox0x10.default, componentState.tRadiox0x10?.[state.screenSize]));

 const tDatePickerx0x11ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x11.default, componentState.tDatePickerx0x11?.[state.screenSize]));

 const tDatePickerx0x12ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x12.default, componentState.tDatePickerx0x12?.[state.screenSize]));

return {
global,
state,
componentState,
tTextx0x0ComputedData,
tTablex0x1ComputedData,
tComponentx0x2ComputedData,
tSelectx0x3ComputedData,
tSelectx0x4ComputedData,
tTextx0x5ComputedData,
tTabsx0x8ComputedData,
tTextx0x9ComputedData,
tRadiox0x10ComputedData,
tDatePickerx0x11ComputedData,
tDatePickerx0x12ComputedData,
onchange1737339295305,
onchange1737339256153,
ontabClick1737026784933,
onchange1737339038401,
ondateChange1737339139743,
ondateChange1737339108407,
};
},
};