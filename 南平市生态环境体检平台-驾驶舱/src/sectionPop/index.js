window.sectionPopComponent = {
template: 
`<div id="t-l-c-sectionPop" class="t-l-c-sectionPop" >` +
`<t-rect id="t-rect-2e88.9a8a1ed2b" class="sectionPop-t-rect-0-0"  :tip="componentState.tRectx0x0.tip" label="" :active="componentState.tRectx0x0.active" :c-style="componentState.tRectx0x0.cStyle">` +
`</t-rect>` +
`<t-chart-design v-if="state.variationTrendData.chartShow === true" id="t-chart-design-9da7.efcf48553" class="sectionPop-t-chart-design-0-2"  empty-img="" :c-style="componentState.tChartDesignx0x2.cStyle" :options="state.variationTrendData.chartOptions">` +
`</t-chart-design>` +
`<t-rect id="t-rect-0299.bc6d7429a" class="sectionPop-t-rect-0-3"  :tip="componentState.tRectx0x3.tip" label="" :active="componentState.tRectx0x3.active" :c-style="componentState.tRectx0x3.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-e129.f6a7a4b8" class="sectionPop-t-rect-0-4"  :tip="componentState.tRectx0x4.tip" label="" :active="componentState.tRectx0x4.active" :c-style="componentState.tRectx0x4.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-9ee1.ec8130f44" class="sectionPop-t-rect-0-7"  :tip="componentState.tRectx0x7.tip" label="" :active="componentState.tRectx0x7.active" :c-style="componentState.tRectx0x7.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-0f71.de44d5288" class="sectionPop-t-rect-0-8"  :tip="componentState.tRectx0x8.tip" label="" :active="componentState.tRectx0x8.active" :c-style="componentState.tRectx0x8.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-925a.339c62166" class="sectionPop-t-rect-0-9"  :tip="componentState.tRectx0x9.tip" label="" :active="componentState.tRectx0x9.active" :c-style="componentState.tRectx0x9.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-01a5.cf13616e6" class="sectionPop-t-rect-0-10"  :tip="componentState.tRectx0x10.tip" label="" :active="componentState.tRectx0x10.active" :c-style="componentState.tRectx0x10.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-2b6f.2d9d2f276" class="sectionPop-t-rect-0-11"  :tip="componentState.tRectx0x11.tip" label="" :active="componentState.tRectx0x11.active" :c-style="componentState.tRectx0x11.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-f26d.351aef545" class="sectionPop-t-rect-0-12"  :tip="componentState.tRectx0x12.tip" label="" :active="componentState.tRectx0x12.active" :c-style="componentState.tRectx0x12.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-01f9.74d960266" class="sectionPop-t-rect-0-13"  :tip="componentState.tRectx0x13.tip" label="" :active="componentState.tRectx0x13.active" :c-style="componentState.tRectx0x13.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-010b.674ce0b8e" class="sectionPop-t-rect-0-14"  :tip="componentState.tRectx0x14.tip" label="" :active="componentState.tRectx0x14.active" :c-style="componentState.tRectx0x14.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-287c.e6eaba15a" class="sectionPop-t-rect-0-15"  :tip="componentState.tRectx0x15.tip" label="" :active="componentState.tRectx0x15.active" :c-style="componentState.tRectx0x15.cStyle">` +
`</t-rect>` +
`<t-select id="t-select-5caa.1c00f0c7c" class="sectionPop-t-select-0-16"  :active-value="state.variationTrendData.activeTarget" :options="state.typeData" :alias="componentState.tSelectx0x16.alias" :multiple="componentState.tSelectx0x16.multiple" placeholder="请选择" :clearable="componentState.tSelectx0x16.clearable" :disabled="componentState.tSelectx0x16.disabled" name="" autocomplete="off" :filterable="componentState.tSelectx0x16.filterable" no-match-text="无匹配数据" no-data-text="无数据" :c-style="componentState.tSelectx0x16.cStyle" :options-raw="componentState.tSelectx0x16.optionsRaw" @change="onchange1742797933012_0_0">` +
`</t-select>` +
`<t-text id="t-text-7d64.a178cb1f5" class="sectionPop-t-text-0-17"  label="时间" :editable="componentState.tTextx0x17.editable" :c-style="componentState.tTextx0x17.cStyle">` +
`</t-text>` +
`<t-list-card id="t-list-card-d9ed.0e31c13ad" class="sectionPop-t-list-card-0-18"  :data="state.baseInfoData" :spacing-x="2" :col="2" direction="vertical" :exchange-order="componentState.tListCardx0x18.exchangeOrder" :unit-break="componentState.tListCardx0x18.unitBreak" :key-field="componentState.tListCardx0x18.keyField" active-key-field="title" active="" :c-style="componentState.tListCardx0x18.cStyle">` +
`</t-list-card>` +
`<t-date-picker id="t-date-picker-1ad1.a126d44ad" class="sectionPop-t-date-picker-0-19"  placeholder="请选择日期" start-placeholder="开始日期" end-placeholder="结束日期" :type="state.typeTime" :clearable="componentState.tDatePickerx0x19.clearable" range-separator="-" :default-date="state.timeRange" separator="-" :c-style="componentState.tDatePickerx0x19.cStyle" :is-disabled-front="componentState.tDatePickerx0x19.isDisabledFront" @date-change="ondateChange1742991197605">` +
`</t-date-picker>` +
`<t-text id="t-text-d30d.e3ce19222" class="sectionPop-t-text-0-20"  label="标准值" :editable="componentState.tTextx0x20.editable" :c-style="componentState.tTextx0x20.cStyle">` +
`</t-text>` +
`<t-text id="t-text-f7ff.97923c1b9" class="sectionPop-t-text-0-21"  label="水质监测信息" :editable="componentState.tTextx0x21.editable" :c-style="componentState.tTextx0x21.cStyle">` +
`</t-text>` +
`<t-text id="t-text-2287.ce0ceb502" class="sectionPop-t-text-0-22"  :label="state.monitorTime" :editable="componentState.tTextx0x22.editable" :c-style="componentState.tTextx0x22.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-7b1c.ae3131ae6" class="sectionPop-t-rect-0-23"  :tip="componentState.tRectx0x23.tip" label="" :active="componentState.tRectx0x23.active" :c-style="componentState.tRectx0x23.cStyle">` +
`</t-rect>` +
`<t-circle id="t-circle-a0bd.473780c28" class="sectionPop-t-circle-0-24"  :tip="componentState.tCirclex0x24.tip" label="" :active="componentState.tCirclex0x24.active" :c-style="componentState.tCirclex0x24.cStyle">` +
`</t-circle>` +
`<t-text id="t-text-2dab.dc53b3834" class="sectionPop-t-text-0-25"  label="表示该指标超标（mg/L，pH值除外）" :editable="componentState.tTextx0x25.editable" :c-style="componentState.tTextx0x25.cStyle">` +
`</t-text>` +
`<t-text id="t-text-03db.65ad46ad" class="sectionPop-t-text-0-26"  :label="state.variationTrendData.title" :editable="componentState.tTextx0x26.editable" :c-style="componentState.tTextx0x26.cStyle">` +
`</t-text>` +
`<t-scrollable-cards v-if="state.isNo === true" id="t-scrollable-cards-554a.6ae82da3c" class="sectionPop-t-scrollable-cards-0-27"  :c-style="componentState.tScrollableCardsx0x27.cStyle" :show-icon="componentState.tScrollableCardsx0x27.showIcon" :auto-scroll="componentState.tScrollableCardsx0x27.autoScroll" :tab="componentState.tScrollableCardsx0x27.tab" key-word="" default-checked="" :speed="3" :interval="0.5" :card-space="0" direction="left" :data-alias="componentState.tScrollableCardsx0x27.dataAlias" :data="state.monitorData">` +
`</t-scrollable-cards>` +
`<el-row id="t-row-7d36.e1bc8385" class="sectionPop-t-row-0-28"  :c-style="componentState.tRowx0x28.cStyle" :gutter="0" justify="start" align="middle">` +
`<t-text id="t-text-8b60.f0bbe08bd" class="sectionPop-t-text-0-28-0"  :label="state.baseInfo.title" :editable="componentState.tTextx0x28x0.editable" :c-style="componentState.tTextx0x28x0.cStyle" :show-title="componentState.tTextx0x28x0.showTitle">` +
`</t-text>` +
`<t-text id="t-text-9f02.30d2a8b5b" class="sectionPop-t-text-0-28-1"  :label="state.baseInfo.type" :editable="componentState.tTextx0x28x1.editable" :c-style="componentState.tTextx0x28x1.cStyle">` +
`</t-text>` +
`<t-text id="t-text-42ce.ccad580da" class="sectionPop-t-text-0-28-2"  :label="state.baseInfo.controlLevel" :editable="componentState.tTextx0x28x2.editable" :c-style="componentState.tTextx0x28x2.cStyle">` +
`</t-text>` +
`<t-list-card-common id="t-list-card-common-759c.7550a1cfb" class="sectionPop-t-list-card-common-0-28-3"  :c-style="componentState.tListCardCommonx0x28x3.cStyle" key-word="" default-checked="" :tab="componentState.tListCardCommonx0x28x3.tab" :collapse="componentState.tListCardCommonx0x28x3.collapse" collapse-text="数据" display-count="0" :data-alias="componentState.tListCardCommonx0x28x3.dataAlias" :data="state.baseInfo.waterQuality">` +
`</t-list-card-common>` +
`<t-list-card-common id="t-list-card-common-facf.1f9b3b7ba" class="sectionPop-t-list-card-common-0-28-4"  :c-style="componentState.tListCardCommonx0x28x4.cStyle" key-word="" default-checked="" :tab="componentState.tListCardCommonx0x28x4.tab" :collapse="componentState.tListCardCommonx0x28x4.collapse" collapse-text="数据" display-count="0" :data-alias="componentState.tListCardCommonx0x28x4.dataAlias" :data="state.baseInfo.standard">` +
`</t-list-card-common>` +
`<t-rect v-if="state.baseInfo.alarmText !== ''" id="t-rect-4aeb.438b70dda" class="sectionPop-t-rect-0-28-5"  :tip="componentState.tRectx0x28x5.tip" label="" :active="componentState.tRectx0x28x5.active" :c-style="componentState.tRectx0x28x5.cStyle" @mouseover="onmouseover1742797597301_5_0" @mouseout="onmouseout1742797597301_5_1">` +
`</t-rect>` +
`</el-row>` +
`<t-rect v-if="state.baseInfo.alarmShow === true" id="t-rect-1c18.bb58797e9" class="sectionPop-t-rect-0-31"  :tip="componentState.tRectx0x31.tip" :label="state.baseInfo.alarmText" :active="componentState.tRectx0x31.active" :c-style="componentState.tRectx0x31.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-46ee.be203adb1" class="sectionPop-t-rect-0-32"  :tip="componentState.tRectx0x32.tip" label="" :active="componentState.tRectx0x32.active" :c-style="componentState.tRectx0x32.cStyle" @click="onclick1742797597302_0_0">` +
`</t-rect>` +
`<t-switch id="t-switch-5134.680f4a982" class="sectionPop-t-switch-0-34"  :value="state.isBz" :c-style="componentState.tSwitchx0x34.cStyle" @change="onchange1742797933013_0_0">` +
`</t-switch>` +
`<t-rect v-if="state.isNo === false" id="t-rect-9701.485d6e53f" class="sectionPop-t-rect-0-35"  :tip="componentState.tRectx0x35.tip" label="暂无数据" :active="componentState.tRectx0x35.active" :c-style="componentState.tRectx0x35.cStyle">` +
`</t-rect>` +
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
ASSESSTYPE: "",
typeTime: "monthrange",
code: "",
typeData: [],
MONITORTIME: "",
type: "",
pointCode: "",
startTime: "",
endTime: "",
standardSeriesData: [],
seriesData: [],
isNo: true,
monitorData: [],
point: {"lat":"-","lon":"-"},
activeTab: "",
baseInfo: {"title":"-","controlLevel":"-","waterQuality":[{"state":"-","stateColor":"#000","stateBgColor":""}],"standard":[{"state":"-","stateColor":"#fff","stateBgColor":""}],"alarmText":"","alarmShow":false},
tabList: [{"label":"基本信息","name":"waterDialogHandBaseInfoComponent"},{"label":"多维分析","name":"waterDialogFSAnalysisComponent"},{"label":"任务调度","name":"waterDialogFSTaskComponent"}],
showSource: false,
variationTrendData: {"activeTarget":"waterLevelChange","chartOptions":{"series":[]},"chartShow":true},
noDataImg: "assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
baseInfoData: [{"title":"站点名称","num":"-"},{"title":"所属水体","num":"-"},{"title":"所属地区","num":"-"},{"title":"管控级别","num":"-"},{"title":"水质目标","num":"-","color":""},{"title":"超标污染物","num":"-","color":"#FF2B2B"}],
monitorTime: "",
isBz: true,
timeRange: [],
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
defaultStyle: {"width":"976px","height":"712px","borderLeft":"1px solid var(--t-point-pop-border)","borderTop":"1px solid var(--t-point-pop-border)","borderRight":"1px solid var(--t-point-pop-border)","borderBottom":"1px solid var(--t-point-pop-border)","left":"472px","top":"184px","backgroundColor":"var(--t-point-pop-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px"},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"976px","height":"712px","borderLeft":"1px solid var(--t-point-pop-border)","borderTop":"1px solid var(--t-point-pop-border)","borderRight":"1px solid var(--t-point-pop-border)","borderBottom":"1px solid var(--t-point-pop-border)","left":"472px","top":"184px","backgroundColor":"var(--t-point-pop-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px"}}},
},
tChartDesignx0x2: {
defaultStyle: {"height":"256px","width":"936px","position":"unset","left":"492px","top":"574px","animationName":""},
cStyle:{"wrapper":{"default":{"height":"256px","width":"936px","position":"unset","left":"492px","top":"574px","animationName":""}},"emptyText":{"default":{"fontSize":"14px","color":"#fff"}},"emptyImg":{"default":{"backgroundColor":"var(--t-body-background)"}}},
options: computed(() => _.merge(_.cloneDeep(activeChartThemeOptions.value), {"series":[]})),
},
tRectx0x3: {
defaultStyle: {"width":"910px","height":"28px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","position":"unset","left":"520px","top":"367px","animationName":"","background":"var(--t-one-title-bg)","backgroundColor":""},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"910px","height":"28px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","position":"unset","left":"520px","top":"367px","animationName":"","background":"var(--t-one-title-bg)","backgroundColor":""}}},
},
tRectx0x4: {
defaultStyle: {"width":"976px","height":"52px","position":"unset","left":"473px","top":"845px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px solid var(--t-point-pop-border)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg15)","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","animationName":""},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"976px","height":"52px","position":"unset","left":"473px","top":"845px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px solid var(--t-point-pop-border)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg15)","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","animationName":""}}},
},
tRectx0x7: {
defaultStyle: {"width":"976px","height":"47px","backgroundColor":"var(--t-point-pop-header-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--t-point-pop-border)","position":"unset","left":"472px","top":"184px","animationName":""},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"976px","height":"47px","backgroundColor":"var(--t-point-pop-header-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--t-point-pop-border)","position":"unset","left":"472px","top":"184px","animationName":""}}},
},
tRectx0x8: {
defaultStyle: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"367px","left":"1197px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custom531ac8ca80db5","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-text-color)"},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"367px","left":"1197px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custom531ac8ca80db5","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-text-color)"}}},
},
tRectx0x9: {
defaultStyle: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"367px","left":"1219px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custom1a4f0fb61f28c","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-text-color)"},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"367px","left":"1219px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custom1a4f0fb61f28c","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-text-color)"}}},
},
tRectx0x10: {
defaultStyle: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"367px","left":"1242px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custome45d03ff6f9d5","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-text-color)"},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"367px","left":"1242px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custome45d03ff6f9d5","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-text-color)"}}},
},
tRectx0x11: {
defaultStyle: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"367px","left":"1264px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custom54758d368f898","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"1.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-text-color)"},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"367px","left":"1264px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custom54758d368f898","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"1.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-text-color)"}}},
},
tRectx0x12: {
defaultStyle: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"367px","left":"1287px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custom9f246472791ed","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-text-color)"},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"367px","left":"1287px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custom9f246472791ed","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-text-color)"}}},
},
tRectx0x13: {
defaultStyle: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"367px","left":"1309px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"customa6821c70be876","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"2.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-text-color)"},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"367px","left":"1309px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"customa6821c70be876","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"2.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-text-color)"}}},
},
tRectx0x14: {
defaultStyle: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"367px","left":"1332px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custom5c2aa5f7471a1","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"3s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-text-color)"},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"367px","left":"1332px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custom5c2aa5f7471a1","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"3s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-text-color)"}}},
},
tRectx0x15: {
defaultStyle: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"367px","left":"1354px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"customf3d0ed0f0d286","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"3.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-text-color)"},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"367px","left":"1354px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"customf3d0ed0f0d286","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"3.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-text-color)"}}},
},
tSelectx0x16: {
defaultStyle: {"width":"120px","height":"32px","position":"unset","left":"1309px","top":"524px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},
options:[{"value":"waterLevelChange","label":"水质","disabled":false},{"value":"W01001","label":"pH","disabled":false},{"value":"W01009","label":"DO","disabled":false},{"value":"W01019","label":"IMn","disabled":false},{"value":"W21003","label":"NH₃-N","disabled":false},{"value":"W21011","label":"TP","disabled":false}],
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:false,
clearable:false,
disabled:false,
filterable:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"32px","position":"unset","left":"1309px","top":"524px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","backgroundColor":"var(--t-select-fill-bg-hover)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"rgba(255, 255, 255, 0.9)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-select-item-bg)","color":"var(--business-text-hover)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"hover":{"color":"var(--business-text-hover)","backgroundColor":"var(--business-select-item-bg)"},"default":{"color":"rgba(255, 255, 255, 0.9)"}}},
optionsRaw:[{"value":"waterLevelChange","label":"水质","disabled":false},{"value":"W01001","label":"pH","disabled":false},{"value":"W01009","label":"DO","disabled":false},{"value":"W01019","label":"IMn","disabled":false},{"value":"W21003","label":"{{NH3}}-N","disabled":false},{"value":"W21011","label":"TP","disabled":false}],
},
tTextx0x17: {
defaultStyle: {"width":"32px","height":"20px","color":"var(--business-white)","fontSize":"14px","top":"530px","left":"1000px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""},
editable:false,
cStyle:{"wrapper":{"default":{"width":"32px","height":"20px","color":"var(--business-white)","fontSize":"14px","top":"530px","left":"1000px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":""}}},
},
tListCardx0x18: {
defaultStyle: {"width":"936px","height":"95px","position":"unset","left":"492px","top":"247px","overflow":"visible","animationName":""},
data:[{"title":"站点名称","num":"-"},{"title":"所属水体","num":"-"},{"title":"所属地区","num":"-"},{"title":"管控级别","num":"-"},{"title":"水质目标","num":"-","color":""},{"title":"超标污染物","num":"-","color":"#FF2B2B"}],
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
cStyle:{"wrapper":{"default":{"width":"936px","height":"95px","position":"unset","left":"492px","top":"247px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--business-show-bg10)","width":"120px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--t-text-rh-color)","fontSize":"14px","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px"}},"numBox":{"default":{"backgroundColor":"var(--business-show-bg15)","width":"345px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"14px","color":"rgba(255, 255, 255, 1)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}},
},
tDatePickerx0x19: {
defaultStyle: {"width":"243px","height":"32px","animationName":"","color":"#fff","marginLeft":"25px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"14px","backgroundColor":"var(--t-select-fill-bg)","position":"unset","left":"1016px","top":"524px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""},
clearable:false,
'default-date':[],
cStyle:{"wrapper":{"default":{"width":"243px","height":"32px","animationName":"","color":"#fff","marginLeft":"25px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"14px","backgroundColor":"var(--t-select-fill-bg)","position":"unset","left":"1016px","top":"524px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""},"hover":{"fontSize":"14px","backgroundColor":"var(--t-select-fill-bg-hover)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"}},"inputWrapper":{"default":{"backgroundColor":"rgba(20, 112, 204, 0)","borderLeft":"1px none rgba(20,112,204,0)","borderTop":"1px none rgba(20,112,204,0)","borderRight":"1px none rgba(20,112,204,0)","borderBottom":"1px none rgba(20,112,204,0)","color":"#fff","paddingLeft":"8px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","fontSize":"12px"}},"inputDateIcons":{"default":{"backgroundColor":"var(--business-select-border)","color":"rgba(121, 190, 255, 0)","backgroundImage":"","-webkit-mask-image":"url(assets/images/date-picker.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"50% 50%","position":"absolute","right":"-70%","top":"0px","pointerEvents":"none","marginRight":"180px","marginTop":"5px"}},"splitLine":{"default":{"color":"","backgroundColor":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px solid rgba(20,112,204,0.3)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""}},"selCurrentDateWrapper":{"default":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px","borderTopLeftRadius":"100px","borderTopRightRadius":"100px","borderBottomLeftRadius":"100px","borderBottomRightRadius":"100px"},"hover":{"fontSize":"12px"}},"currentDateWrapper":{"hover":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px"},"active":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px"},"default":{"backgroundColor":"rgba(20, 112, 204, 0)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","color":"#fff","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"12px"}},"todayWrapper":{"default":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","color":"#fff","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px"}},"dateHeaderWrapper":{"default":{"color":"#fff","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"","fontSize":"16px"},"hover":{"backgroundColor":"rgba(26, 27, 31, 0)","color":"#fff","fontSize":"16px"}},"weekWrapper":{"default":{"color":"#fff","fontWeight":"500","backgroundColor":"","fontFamily":"微软雅黑"}},"currentWeekWrapper":{"default":{"color":"#fff","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundColor":""}},"timePanelNumWrapper":{"default":{"color":"#fff","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-select-drop-bg)"},"hover":{"borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--t-select-fill-bg-hover)","color":"var(--business-select-border-hover)"}},"okWrapper":{"default":{"borderLeft":"1px solid rgba(255,255,255,0.9)","borderTop":"1px solid rgba(255,255,255,0.9)","borderRight":"1px solid rgba(255,255,255,0.9)","borderBottom":"1px solid rgba(255,255,255,0.9)","color":"rgba(255, 255, 255, 0.9)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"backgroundColor":"rgba(74, 228, 23, 0)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(255,255,255,0.9)","borderTop":"1px solid rgba(255,255,255,0.9)","borderRight":"1px solid rgba(255,255,255,0.9)","borderBottom":"1px solid rgba(255,255,255,0.9)","color":"rgba(255, 255, 255, 0.9)"},"active":{"borderLeft":"1px solid rgba(255,255,255,0.9)","borderTop":"1px solid rgba(255,255,255,0.9)","borderRight":"1px solid rgba(255,255,255,0.9)","borderBottom":"1px solid rgba(255,255,255,0.9)","color":"rgba(255, 255, 255, 0.9)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"timePanelWrapper":{"default":{"borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","backgroundColor":"var(--business-select-drop-bg)","color":"rgba(255, 255, 255, 0.9)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","box-shadow":"rgba(0, 0, 0, 0.3) 0px 4px 10px 0px ","fontSize":"12px"},"active":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","color":"var(--business-select-border-hover)","backgroundColor":"var(--t-button-bg)"}},"textBtnWrapper":{"default":{"color":"rgba(255, 255, 255, 0.6)","backgroundColor":""}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--t-select-fill-bg-hover)"}},"operatorArrow":{"default":{"backgroundColor":"","color":"rgba(255, 255, 255, 0.9)"},"hover":{"color":"var(--business-text-hover)"}},"prevAndNextMonthDate":{"default":{"fontSize":"12px"}},"rangeInputWrapper":{"default":{"fontSize":"16px"}},"disableDateWrapper":{"default":{"fontSize":"12px"}}},
isDisabledFront:true,
},
tTextx0x20: {
defaultStyle: {"width":"49px","height":"22px","color":"var(--t-text-rh-color)","position":"unset","left":"1333px","top":"566px","fontSize":"var(--t-text-size-normal)","lineHeight":"22px","animationName":"","textAlign":"right"},
editable:false,
cStyle:{"wrapper":{"default":{"width":"49px","height":"22px","color":"var(--t-text-rh-color)","position":"unset","left":"1333px","top":"566px","fontSize":"var(--t-text-size-normal)","lineHeight":"22px","animationName":"","textAlign":"right"}}},
},
tTextx0x21: {
defaultStyle: {"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"548px","top":"372px","fontFamily":"方正综艺","fontSize":"16px","animationName":"","lineHeight":"20px"},
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"548px","top":"372px","fontFamily":"方正综艺","fontSize":"16px","animationName":"","lineHeight":"20px"}}},
},
tTextx0x22: {
defaultStyle: {"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"371.5px","left":"1261px","textAlign":"right","fontSize":"14px","position":"unset","animationName":""},
editable:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"371.5px","left":"1261px","textAlign":"right","fontSize":"14px","position":"unset","animationName":""}}},
},
tRectx0x23: {
defaultStyle: {"width":"50px","height":"26px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(assets/images/2024-12-04/3b0d6f226d5f40619c1675b604ec5b04.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"367px","left":"474px","position":"unset","animationName":"custom282018a34a6c4,custom14303c8e19471","animationDuration":"1.5s,1.3s","animationTimingFunction":"ease-in,ease-in-out","animationDelay":"0s,0s","animationIterationCount":"infinite,infinite","animationDirection":"alternate,alternate-reverse"},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"50px","height":"26px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(assets/images/2024-12-04/3b0d6f226d5f40619c1675b604ec5b04.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"367px","left":"474px","position":"unset","animationName":"custom282018a34a6c4,custom14303c8e19471","animationDuration":"1.5s,1.3s","animationTimingFunction":"ease-in,ease-in-out","animationDelay":"0s,0s","animationIterationCount":"infinite,infinite","animationDirection":"alternate,alternate-reverse"}}},
},
tCirclex0x24: {
defaultStyle: {"width":"9px","height":"9px","position":"unset","left":"492px","top":"415px","backgroundColor":"#FF2B2B","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"9px","height":"9px","position":"unset","left":"492px","top":"415px","backgroundColor":"#FF2B2B","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}},
},
tTextx0x25: {
defaultStyle: {"width":"334px","height":"24px","color":"var(--t-text-rh-color)","fontSize":"14px","top":"407px","left":"505px","position":"unset","lineHeight":"24px","animationName":""},
editable:false,
cStyle:{"wrapper":{"default":{"width":"334px","height":"24px","color":"var(--t-text-rh-color)","fontSize":"14px","top":"407px","left":"505px","position":"unset","lineHeight":"24px","animationName":""}}},
},
tTextx0x26: {
defaultStyle: {"width":"240px","height":"22px","color":"rgba(255, 255, 255, 1)","lineHeight":"22px","fontSize":"16px","fontFamily":"方正综艺","top":"524px","left":"492px","position":"unset","animationName":""},
editable:false,
cStyle:{"wrapper":{"default":{"width":"240px","height":"22px","color":"rgba(255, 255, 255, 1)","lineHeight":"22px","fontSize":"16px","fontFamily":"方正综艺","top":"524px","left":"492px","position":"unset","animationName":""}}},
},
tScrollableCardsx0x27: {
defaultStyle: {"width":"936px","height":"64px","borderRadius":"8px","padding":"11px 9px 8px","background":"linear-gradient(180deg, #219DFF 0%, rgba(0,213,255,0.00) 190%)","top":"437px","left":"492px","position":"unset","paddingLeft":"0px","paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","backgroundColor":"","backgroundImage":"linear-gradient(0deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0) 99.54954954954955%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"18px","animationName":""},
cStyle:{"wrapper":{"default":{"width":"936px","height":"64px","borderRadius":"8px","padding":"11px 9px 8px","background":"linear-gradient(180deg, #219DFF 0%, rgba(0,213,255,0.00) 190%)","top":"437px","left":"492px","position":"unset","paddingLeft":"0px","paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","backgroundColor":"","backgroundImage":"linear-gradient(0deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0) 99.54954954954955%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"18px","animationName":""}},"itemWrapper":{"default":{"width":"168px","height":"64px","marginLeft":"0px","marginRight":"8px !important","cursor":"auto","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","display":"flex","flexDirection":"column-reverse","justify-content":"center"},"active":{}},"container":{"default":{"width":"936px","height":"auto","paddingLeft":"0px","paddingTop":"0px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"12px","paddingRight":"0px","marginRight":"12px"}},"cardLabel":{"default":{"fontSize":"14px","lineHeight":"24px","color":"var(--t-text-rh-color)","fontFamily":"微软雅黑","height":"24px","display":"flex","justify-content":"center"}},"cardLabelIcon":{"default":{"width":"18px","height":"18px","marginLeft":"4px"}},"cardValue":{"default":{"fontSize":"20px","fontWeight":"500","fontFamily":"DIN-bold","color":"rgba(255, 255, 255, 1)","lineHeight":"24px","height":"24px","display":"flex","justify-content":"center"}},"cardValueUnit":{"default":{"fontSize":"14px","fontWeight":"normal","fontFamily":"微软雅黑","marginLeft":"4px","color":"var(--business-text-avianize)"}},"leftArrowButton":{"default":{"color":"rgba(255, 255, 255, 1) !important","backgroundColor":"var(--business-show-bg15)","width":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"color":"var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--t-button-bg)","borderTop":"1px solid var(--t-button-bg)","borderRight":"1px solid var(--t-button-bg)","borderBottom":"1px solid var(--t-button-bg)"}},"leftArrow":{"default":{"color":"inherit !important"}},"rightArrow":{"default":{"color":"inherit !important"}},"rightArrowButton":{"default":{"color":"rgba(255, 255, 255, 1) !important","backgroundColor":"var(--business-show-bg15)","width":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"color":"var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--t-button-bg)","borderTop":"1px solid var(--t-button-bg)","borderRight":"1px solid var(--t-button-bg)","borderBottom":"1px solid var(--t-button-bg)"}}},
showIcon:true,
autoScroll:false,
tab:false,
dataAlias:{"value":"value","label":"label","checked":"checked"},
data:[{"value":"-","label":"pH"},{"value":"-","label":"DO"},{"value":"-","label":"IMn"},{"value":"-","label":"NH？-H"},{"value":"-","label":"TP"}],
},
tRowx0x28: {
defaultStyle: {"width":"500px","height":"47px","position":"unset","left":"491px","top":"185px","animationName":""},
cStyle:{"wrapper":{"default":{"width":"500px","height":"47px","position":"unset","left":"491px","top":"185px","animationName":""}}},
},
tTextx0x28x0: {
defaultStyle: {"width":"auto","height":"21px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"166px","top":"-168px","backgroundImage":"url(assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":"","textAlign":"left","max-width":"240px","marginRight":"6px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"21px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","position":"unset","left":"166px","top":"-168px","backgroundImage":"url(assets/images/2024-04-17/26907d3cdd3d451c98ec22ec5199d46d.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"26px 26px","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":"","paddingLeft":"32px","fontWeight":"700","animationName":"","textAlign":"left","max-width":"240px","marginRight":"6px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}},
showTitle:true,
},
tTextx0x28x1: {
defaultStyle: {"width":"40px","height":"20px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"288px","top":"-168px","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)","borderTopLeftRadius":"4px","borderBottomRightRadius":"4px","textAlign":"center","lineHeight":"18px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"rgba(255, 255, 255, 0.2)","fontSize":"12px","marginLeft":"10px","animationName":""},
editable:false,
cStyle:{"wrapper":{"default":{"width":"40px","height":"20px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"288px","top":"-168px","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)","borderTopLeftRadius":"4px","borderBottomRightRadius":"4px","textAlign":"center","lineHeight":"18px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"rgba(255, 255, 255, 0.2)","fontSize":"12px","marginLeft":"10px","animationName":""}}},
},
tTextx0x28x2: {
defaultStyle: {"width":"40px","height":"20px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"393px","top":"-144.60000610351562px","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)","borderTopLeftRadius":"4px","borderBottomRightRadius":"4px","textAlign":"center","lineHeight":"18px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"rgba(255, 255, 255, 0.2)","fontSize":"12px","marginLeft":"10px","animationName":""},
editable:false,
cStyle:{"wrapper":{"default":{"width":"40px","height":"20px","color":"rgba(255, 255, 255, 1)","position":"unset","left":"393px","top":"-144.60000610351562px","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)","borderTopLeftRadius":"4px","borderBottomRightRadius":"4px","textAlign":"center","lineHeight":"18px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","backgroundColor":"rgba(255, 255, 255, 0.2)","fontSize":"12px","marginLeft":"10px","animationName":""}}},
},
tListCardCommonx0x28x3: {
defaultStyle: {"position":"unset","width":"50px","height":"20px","left":"369px","top":"-166px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px"},
cStyle:{"wrapper":{"default":{"position":"unset","width":"50px","height":"20px","left":"369px","top":"-166px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px"}},"listBody":{"default":{"backgroundColor":"rgba(223, 12, 12, 0)"}},"card":{"default":{"backgroundColor":"rgba(6, 240, 13, 0)","paddingTop":"0px","paddingBottom":"0px","paddingRight":"0px","paddingLeft":"0px"}},"cardItemInfo":{"default":{"display":"none"}},"checkedCardIcon":{"default":{"display":"none"}},"cardStatus":{"default":{"position":"static","width":"50px","height":"20px","fontSize":"12px","lineHeight":"20px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px"}},"cardIcon":{"default":{"display":"none"}}},
tab:false,
collapse:false,
dataAlias:{"header":"header","icon":"icon","label":"label","value":"value","state":"state","stateColor":"stateColor","stateBgColor":"stateBgColor","list":"list","labelColor":"labelColor","labelBgColor":"labelBgColor","type":"type","src":"src"},
data:[{"state":"-","stateColor":"#000","stateBgColor":""}],
},
tListCardCommonx0x28x4: {
defaultStyle: {"position":"unset","width":"50px","height":"20px","left":"460px","top":"-167px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px"},
cStyle:{"wrapper":{"default":{"position":"unset","width":"50px","height":"20px","left":"460px","top":"-167px","backgroundColor":"rgba(244, 4, 4, 0)","animationName":"","marginLeft":"10px"}},"listBody":{"default":{"backgroundColor":"rgba(223, 12, 12, 0)"}},"card":{"default":{"backgroundColor":"rgba(6, 240, 13, 0)","paddingTop":"0px","paddingBottom":"0px","paddingRight":"0px","paddingLeft":"0px"}},"cardItemInfo":{"default":{"display":"none"}},"checkedCardIcon":{"default":{"display":"none"}},"cardStatus":{"default":{"position":"static","width":"50px","height":"20px","fontSize":"12px","lineHeight":"20px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px"}},"cardIcon":{"default":{"display":"none"}}},
tab:false,
collapse:false,
dataAlias:{"header":"header","icon":"icon","label":"label","value":"value","state":"state","stateColor":"stateColor","stateBgColor":"stateBgColor","list":"list","labelColor":"labelColor","labelBgColor":"labelBgColor","type":"type","src":"src"},
data:[{"state":"-","stateColor":"#fff","stateBgColor":""}],
},
tRectx0x28x5: {
defaultStyle: {"width":"20px","height":"20px","position":"unset","left":"549px","top":"-167px","backgroundImage":"url(assets/images/2024-12-11/c042c6b49c404c56a0dafaa835ad05b2.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","marginLeft":"10px","cursor":"pointer","animationName":""},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"20px","height":"20px","position":"unset","left":"549px","top":"-167px","backgroundImage":"url(assets/images/2024-12-11/c042c6b49c404c56a0dafaa835ad05b2.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","marginLeft":"10px","cursor":"pointer","animationName":""}}},
},
tRectx0x31: {
defaultStyle: {"width":"297px","height":"10px","position":"unset","left":"727px","top":"224px","backgroundColor":"#FF2B2B","color":"rgba(255, 255, 255, 1)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","borderTopLeftRadius":"8px","borderTopRightRadius":"8px","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px","fontSize":"14px","paddingLeft":"5px","paddingRight":"5px","display":"flex","alignItems":"center","justifyContent":"center","paddingTop":"5px","paddingBottom":"5px","lineHeight":"20px","animationName":""},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"297px","height":"10px","position":"unset","left":"727px","top":"224px","backgroundColor":"#FF2B2B","color":"rgba(255, 255, 255, 1)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","borderTopLeftRadius":"8px","borderTopRightRadius":"8px","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px","fontSize":"14px","paddingLeft":"5px","paddingRight":"5px","display":"flex","alignItems":"center","justifyContent":"center","paddingTop":"5px","paddingBottom":"5px","lineHeight":"20px","animationName":""}}},
},
tRectx0x32: {
defaultStyle: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none var(--business-btn-default)","borderTop":"1px none var(--business-btn-default)","borderRight":"1px none var(--business-btn-default)","borderBottom":"1px none var(--business-btn-default)","position":"unset","left":"1401px","top":"196px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"var(--t-point-pop-close-btn)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none var(--business-btn-default)","borderTop":"1px none var(--business-btn-default)","borderRight":"1px none var(--business-btn-default)","borderBottom":"1px none var(--business-btn-default)","position":"unset","left":"1401px","top":"196px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"var(--t-point-pop-close-btn)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}},"numBox":{"default":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}},
},
tSwitchx0x34: {
defaultStyle: {"width":"32px","height":"20px","position":"unset","left":"1397px","top":"566px","animationName":""},
value:true,
cStyle:{"wrapper":{"default":{"width":"32px","height":"20px","position":"unset","left":"1397px","top":"566px","animationName":""}},"core":{"active":{"backgroundColor":"var(--business-theme)","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}},
},
tRectx0x35: {
defaultStyle: {"width":"936px","height":"64px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"493px","top":"437px","color":"#fff","fontSize":"14px","position":"unset"},
tip:false,
active:false,
cStyle:{"wrapper":{"default":{"width":"936px","height":"64px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"493px","top":"437px","color":"#fff","fontSize":"14px","position":"unset"}}},
},
});
const intParams = () => {
console.log(global.waterPopData, '断面弹窗初始参数');
state.pointCode = global.waterPopData.POINT_CODE;
state.type = global.waterPopData.type;
state.MONITORTIME = global.waterPopData.MONITORTIME;
state.ASSESSTYPE = global.waterPopData.ASSESSTYPE;
function getPrev(endTime, type) {
  /**
 * 根据结束时间获取开始时间
 */
  let date = new Date(endTime)
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  switch (type) {
    case 'hour':
      return new Date(year, month, day, hour - 23, minute, second)
    case 'day':
      return new Date(year, month, day - 6, hour, minute, second)
    case 'month':
      return new Date(year, month - 11, day, hour, minute, second)
    default:
      return date
  }
}
if (state.type === 'waterManualStation') {
  state.code = '1';
  state.typeTime = 'monthrange';
} else if (state.type === 'waterAutoStationHour') {
  state.code = '0';
  state.typeTime = 'datetimerangehour';
} else if (state.type === 'waterAutoStationDay') {
  state.code = '0';
  state.typeTime = 'daterange';
}
getCodeData();

state.variationTrendData.chartShow = false;
if (state.type === 'waterManualStation') {
  // 结束时间
  const endTime = dateFormat(new Date(state.MONITORTIME), 'yyyy-MM');
  // 开始时间
  const startTime = dateFormat(getPrev(new Date(state.MONITORTIME), 'month'), 'yyyy-MM');
  // 赋值时间
  changeTime([startTime || '', endTime || ''])
  console.log(state.endTime, state.startTime, '开始结束时间');
  getHandData();
  getMsgHandData();
  getWaterHandData();
} else if (state.type === 'waterAutoStationHour') {
  // 结束时间
  const endTime = dateFormat(new Date(`${state.MONITORTIME}:00:00`), 'yyyy-MM-dd HH');
  // 开始时间
  const startTime = dateFormat(getPrev(new Date(`${state.MONITORTIME}:00:00`), 'hour'), 'yyyy-MM-dd HH');

  // 赋值时间
  changeTime([startTime || '', endTime || ''])
  console.log(state.endTime, state.startTime, '开始结束时间');
  getAutomateHourData();
  getMsgAutoHourData();
  getWaterAutoHourData();

} else if (state.type === 'waterAutoStationDay') {
  // 结束时间
  const endTime = dateFormat(new Date(state.MONITORTIME), 'yyyy-MM-dd');
  // 开始时间
  const startTime = dateFormat(getPrev(new Date(state.MONITORTIME), 'day'), 'yyyy-MM-dd');
  // 赋值时间
  changeTime([startTime || '', endTime || ''])
  console.log(state.endTime, state.startTime, '开始结束时间');
  getAutomateDayData();
  getMsgAutoDayData();
  getWaterAutoDayData();

}
// 显示图表，延迟为了处理数据不刷新的问题
setTimeout(() => {
  state.variationTrendData.chartShow = true;
}, 100)
};
const getWaterLevelSrc = (key) => {
// "91c7cb82e6a847c08f4b2b7fe248fe63",
// "77970ee896884bac8d07dc21a6f52882",
// "fc6097d636bd4338b078b78dcb4d8b09",
// "f4f0f4273aac428aab5e01b2e60109e0",
// "60e8907e1ac24e14bcd70ee24eb13aaa",
// "a887739617a740f699fe4325c795bb1e",
// "7ba32414e20d48caa416178f5c0151bd"
// 图标路径
const waterLevelSrc = [
    "url(assets/images/2025-03-26/91c7cb82e6a847c08f4b2b7fe248fe63.svg)",
    "url(assets/images/2025-03-26/77970ee896884bac8d07dc21a6f52882.svg)",
    "url(assets/images/2025-03-26/fc6097d636bd4338b078b78dcb4d8b09.svg)",
    "url(assets/images/2025-03-26/f4f0f4273aac428aab5e01b2e60109e0.svg)",
    "url(assets/images/2025-03-26/60e8907e1ac24e14bcd70ee24eb13aaa.svg)",
    "url(assets/images/2025-03-26/a887739617a740f699fe4325c795bb1e.svg)",
    "url(assets/images/2025-03-26/7ba32414e20d48caa416178f5c0151bd.svg)"
]
console.log(key, waterLevelSrc[Number(key) || 0], '999')
return waterLevelSrc[Number(key) || 0];
//return `url(assets/images/2025-03-26/${waterLevelSrc[Number(key) || 0]}.svg)`
};
const changeStandard = () => {
state.variationTrendData.chartOptions.series = [
  ...state.seriesData,
  ...(state.isBz ? state.standardSeriesData : [])
];
};
const filterRepeatData = (valueArr,onlyKey) => {
/**
 * 元素为对象类型的数组，根据某个提供的字段去重
 */
const resValue = new Map();
return valueArr.filter((valueItem) => !resValue.has(valueItem[onlyKey]) && resValue.set(valueItem[onlyKey], 1));
};
const getChartOptions = () => {
// 图表配置项
let chartOption = {};
if (state.variationTrendData.activeTarget === 'waterLevelChange') {
  // 水质的图表配置
  chartOption = {
    "dataZoom": [
      {
        "type": "slider",
        "backgroundColor": "rgba(0, 202, 216, 0.1)",
        "borderColor": "rgba(0, 202, 216, 0.1)",
        "borderRadius": 0,
        "showDetail": false,
        "showDataShadow": false,
        "zoomLock": true,
        "height": 7,
        "end": 50,
        "brushSelect": false,
        "bottom": "0%",
        "brushStyle": {
          "color": "#000"
        },
        "fillerColor": "rgba(0,255,255,1.00)",
        "handleIcon": "none",
        "handleStyle": {
          "color": "rgba(0,255,255,1.00)",
          "borderColor": "rgba(0,255,255,1.00)",
          "borderCap": "round"
        }
      }
    ],
    grid: {
      top: "15%",
      left: '8%',
      right: '4%',
      // bottom: '12%'
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
      data: ['当月值', '累计均值', '去年同期']
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: "#000", //设置背景颜色
      borderColor: "#6CFFFA",
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
        "backgroundColor": "rgba(0, 202, 216, 0.1)",
        "borderColor": "rgba(0, 202, 216, 0.1)",
        "borderRadius": 0,
        "showDetail": false,
        "showDataShadow": false,
        "zoomLock": true,
        "height": 7,
        "end": 50,
        "brushSelect": false,
        "bottom": "0%",
        "brushStyle": {
          "color": "#000"
        },
        "fillerColor": getCssVariable('--business-btn-default'),
        "handleIcon": "none",
        "handleStyle": {
          "color": "#2D955A",
          "borderColor": "#D1D5D9",
          "borderCap": "round"
        }
      }
    ],
    grid: {
      top: '15%',
      left: '5%',
      right: '4%',
      // bottom: '12%'
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
      data: ['当月值']
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: "#000", //设置背景颜色
      borderColor: "#6CFFFA",
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
      {
        "type": "slider",
        "backgroundColor": "rgba(0, 202, 216, 0.1)",
        "borderColor": "rgba(0, 202, 216, 0.1)",
        "borderRadius": 0,
        "showDetail": false,
        "showDataShadow": false,
        "zoomLock": true,
        "height": 7,
        "end": 50,
        "brushSelect": false,
        "bottom": "0%",
        "brushStyle": {
          "color": "#000"
        },
        "fillerColor": getCssVariable('--business-btn-default'),
        "handleIcon": "none",
        "handleStyle": {
          "color": "#2D955A",
          "borderColor": "#D1D5D9",
          "borderCap": "round"
        }
      }
    ],
    grid: {
      top: '15%',
      left: '5%',
      right: '4%',
      // bottom: '12%'
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
      data: ['当月值']
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: "#000", //设置背景颜色
      borderColor: "#6CFFFA",
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
const changeTime = (time) => {
state.timeRange = time || [];
state.startTime = time[0] || '';
state.endTime = time[1] || '';
handleWaterTarget();
};
const getPrevTime = (type,endTime) => {
/**
 * 根据结束时间获取开始时间
 */
let date = new Date(endTime)
let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDate()
let hour = date.getHours()
let minute = date.getMinutes()
let second = date.getSeconds()
switch (type) {
  case 'hour':
    return new Date(year, month, day, hour - 23, minute, second)
  case 'day':
    return new Date(year, month, day - 6, hour, minute, second)
  case 'month':
    return new Date(year, month - 11, day, hour, minute, second)
  default:
    return date
}
};
const handleWaterTarget = () => {
// 水质目标发生变化执行---------------------

// 先隐藏图表
state.variationTrendData.chartShow = false;
// 图表为空
state.variationTrendData.chartOptions = {
  series: []
};
console.log(global.waterPopData, '点位编码');
// 水质
if (state.variationTrendData.activeTarget === 'waterLevelChange') {
  state.variationTrendData.title = '近12个月水质变化趋势';
  if (state.type === 'waterManualStation') {
    // 手动水质接口
    getWaterHandData();
  } else if (state.type === 'waterAutoStationHour') {
    getWaterAutoHourData();
  } else if (state.type === 'waterAutoStationDay') {
    getWaterAutoDayData();
  }

} else {
  // 其他污染物
  state.variationTrendData.title = '近12个月污染物浓度变化趋势';
  if (state.type === 'waterManualStation') {
    // 手动 污染物接口
    getPolluteHandData();
  } else if (state.type === 'waterAutoStationHour') {
    getPolluteAutoHourData();
  } else if (state.type === 'waterAutoStationDay') {
    getPolluteAutoDayData();
  }
}
// 显示图表，延迟为了处理数据不刷新的问题
setTimeout(() => {
  state.variationTrendData.chartShow = true;
}, 100)
};
const handleTooltipFormatter = (formatterParams) => {
/**
 * 格式化图表中tooltip展示的内容
 * 以下属性都是处理series数据时添加的字段data的单项值对象中的属性:
 * tooltipXAxisLabel: tooltip的title名称（部分x轴显示的时间跟tooltip中的不一样）
 * unit: 系列值的单位
 * hiddenInTooltip: 当前系列值是否在tooltip中隐藏
 * valueName: y轴等级数值对应的等级中文名称（水质等级有用到，所以增加了此属性）
 * showValueName: 是否显示值对应的中文名称，为true时显示中文名称，反之显示值
 */
// 没有tooltipXAxisLabel这个字段，说明某个系列在这个时间段没有值
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
    ${item.data?.showValueName ? valueName : handleNoVal(curValue)} ${unit}</span><br/></div>`;
});
return `${name}<br/>${str}`;

};
const handleStandardSeries = (seriesName,lineColor,labelPosition) => {
/**
 * 处理图表配置项series中有关于标线的配置
 */
 
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
        return `${handleNoVal(seriesName)}：${handleNoVal(params.value)}`
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
const onchange1742797933012_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.variationTrendData.activeTarget = value;
// 执行自定义方法
handleWaterTarget(value);
};
const ondateChange1742991197605 = (data) => {
// 执行自定义方法
changeTime(data);
};
const onmouseover1742797597301_5_0 = () => {
// 设置变量值
state.baseInfo.alarmShow = true;
};
const onmouseout1742797597301_5_1 = () => {
// 设置变量值
state.baseInfo.alarmShow = false;
};
const onclick1742797597302_0_0 = () => {
// 设置全局变量值

rootData.rootEmit('rootData:change', {key:'isWaterPop', value:false, data:{isWaterPop:false}});
// 发送socket消息
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closeWaterPopup", // 消息名称
data: {}, // 发送的数据
});
};
const onclick1742797597303_1_0 = () => {
// 执行自定义方法
handleClickTraceability();
};
const onclick1742797597303_2_0 = () => {
// 执行自定义方法
handleClickTrend();
};
const onchange1742797933013_0_0 = (value) => {
// 设置变量值
state.isBz = value;
// 执行自定义方法
changeStandard();
};
// 接口函数
const getAutomateDayData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"MONITORTIME":global.waterPopData.MONITORTIME,"POINT_CODE":state.pointCode,"interfaceId":"7e646485d5e40eb0cb831d4a5520f81a"},}).then((res) => {
     // 成功的操作
     
console.log(res.data, '自动站日数据-中屏-点位详情-基本信息');
state.baseInfoData = [
  {
    "title": "站点名称",
    "num": "-"
  },
  {
    "title": "所属水体",
    "num": "-"
  },
  {
    "title": "所属地区",
    "num": "-"
  },
  {
    "title": "管控级别",
    "num": "-"
  },
  {
    "title": "水质目标",
    "num": "-",
    "color": ""
  },
  {
    "title": "超标污染物",
    "num": "-",
    "color": "#FF2B2B"
  }
];
state.baseInfo.waterQuality = [
  {
    "state": "-",
    "stateColor": "#000",
    "stateBgColor": ""
  }
];
state.baseInfo.standard = [
  {
    "state": "-",
    "stateColor": "#fff",
    "stateBgColor": ""
  }
];
if (res.data.head.statusCode === '200' && res.data.data) {
  // 名称
  state.baseInfo.title = res.data.data?.POINT_NAME || '-';
  // 控制级别
  state.baseInfo.controlLevel = res.data.data?.CONTROLLEVEL || '-';
  // 水质级别
  state.baseInfo.waterQuality[0].state = res.data.data?.WATERQUALITYLEVELNAME || '-';
  state.baseInfo.waterQuality[0].stateBgColor = getWaterLevelColor(res.data.data?.WATERQUALITYLEVELNAME);
  // 达标
  state.baseInfo.standard[0].state = res.data.data?.ISSTANDARDSSTR || '-';
  state.baseInfo.standard[0].stateBgColor = getWaterLevelColor(res.data.data?.ISSTANDARDSSTR);

  // 经纬度--周边查询使用
  state.point.lat = res.data.data?.LATITUDE || '';
  state.point.lon = res.data.data?.LONGITUDE || '';

  // 断面类型
  if (state.type === 'waterManualStation') {
    // 手工
    if (res.data.data?.AUTO_POINTCODE) {
      state.baseInfo.type = '手&自';
    } else {
      state.baseInfo.type = '手工';
    }
  } else {
    // 自动站
    state.baseInfo.type = '自动';
  }


  // 站点名称
  state.baseInfoData[0].num = res.data.data?.POINT_NAME || '-';
  // 所属水体
  state.baseInfoData[1].num = `${res.data.data?.WSYSTEM_NAME}/${res.data.data?.WATER_NAME}` || '-';
  // 所属地区
  state.baseInfoData[2].num = res.data.data?.REGION_NAME || '-';
  // 管控级别
  state.baseInfoData[3].num = res.data.data?.CONTROLLEVEL || '-';
  // 水质目标
  state.baseInfoData[4].num = res.data.data?.WATERQUALITYLEVELTARGETNAME || '-';
  state.baseInfoData[4].color = getWaterLevelColor(res.data.data?.WATERQUALITYLEVELTARGETNAME);
  // 超标污染物
  state.baseInfoData[5].num = res.data.data?.OVERPOLLUTE || '-';
} else {
  state.baseInfoData = [
    {
      "title": "站点名称",
      "num": "-"
    },
    {
      "title": "所属水体",
      "num": "-"
    },
    {
      "title": "所属地区",
      "num": "-"
    },
    {
      "title": "管控级别",
      "num": "-"
    },
    {
      "title": "水质目标",
      "num": "-",
      "color": ""
    },
    {
      "title": "超标污染物",
      "num": "-",
      "color": "#FF2B2B"
    }
  ];
  state.baseInfo.waterQuality = [
    {
      "state": "-",
      "stateColor": "#000",
      "stateBgColor": ""
    }
  ];
  state.baseInfo.standard = [
    {
      "state": "-",
      "stateColor": "#fff",
      "stateBgColor": ""
    }
  ];
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getWaterAutoDayData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"LASTITEMS":"","MONITORTIME":"","END_MONITORTIME":state.endTime,"START_MONITORTIME":state.startTime,"POINT_CODE":state.pointCode,"interfaceId":"06d82de096af3f332e96f0aa6ced89fc"},}).then((res) => {
     // 成功的操作
     
console.log(res, '自动站日数据-中屏-点位详情-变化趋势图-水质');
state.seriesData = []
state.standardSeriesData = []

if (res.data.head.statusCode === '200' && res.data.data.length) {
  let xAxisData = []; // x轴数据
  let yearTargetData = []; // 年度目标
  let seriesData = []; // 系列数据

  res.data.data.forEach((item) => {
    xAxisData.push(item.MONITORTIME);
    yearTargetData.push({
      value: Number(item.CODE_WATERQUALITYLEVELTARGET),
      hiddenInTooltip: true,
      wholeTime: item.MONITORTIME,
    })
    // 组合数据，筛选出同一类的数据
    if (!seriesData.find((x) => x.POINT_CODE === item.POINT_CODE)) {
      seriesData.push({
        POINT_CODE: item.POINT_CODE,
        name: '当日值',
        data: res.data.data.filter((x) => x.POINT_CODE === item.POINT_CODE).map((dataItem) => ({
          // 使用数组的格式，是为了跟x轴坐标的值对应上；x轴和数组的第一项使用的值需要是唯一的
          value: [dataItem.MONITORTIME, dataItem.CODE_WATERQUALITYLEVEL],
          // 完整时间、单位在tooltip中的formatter中使用
          unit: '',
          tooltipXAxisLabel: dataItem.MONITORTIME,
        })),
      });
    }
  });

  // 公共配置
  seriesData = seriesData.map((seriesItem) => ({
    ...seriesItem,
    "type": "bar",
    "barWidth": 12
  }));

  // 获取水质图表配置项
  state.variationTrendData.chartOptions = getChartOptions();
  // x轴
  state.variationTrendData.chartOptions.xAxis.data = xAxisData;
  // 系列数据
  state.seriesData = seriesData
  // 添加标准线线数据
  state.standardSeriesData.push({
    ...handleWaterLevelStandard('年度目标'),
    data: filterRepeatData(yearTargetData, 'wholeTime'),
  });
}
changeStandard();
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.seriesData = []
state.standardSeriesData = []
      reject(error);
    });
  });
};
// 接口函数
const getCodeData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"interfaceId":"c72fcfdcc9e8011cfae6b2e15c279a9e","MONITORTYPE":state.code},}).then((res) => {
     // 成功的操作
     if (res?.data?.data) {
  state.typeData = [];
  state.typeData = res?.data?.data;
} else {
  state.typeData = [];
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getHandData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"ASSESSTYPE":state.ASSESSTYPE,"MONITORTIME":global.waterPopData.MONITORTIME,"POINT_CODE":state.pointCode,"interfaceId":"c88965d570ad1d00197e1fee3a00c649"},}).then((res) => {
     // 成功的操作
     console.log(res.data.data, '手工断面-地表水-断面详情');
state.baseInfoData = [
  {
    "title": "站点名称",
    "num": "-"
  },
  {
    "title": "所属水体",
    "num": "-"
  },
  {
    "title": "所属地区",
    "num": "-"
  },
  {
    "title": "管控级别",
    "num": "-"
  },
  {
    "title": "水质目标",
    "num": "-",
    "color": ""
  },
  {
    "title": "超标污染物",
    "num": "-",
    "color": "#FF2B2B"
  }
];
state.baseInfo.waterQuality = [
  {
    "state": "-",
    "stateColor": "#000",
    "stateBgColor": ""
  }
];
state.baseInfo.standard = [
  {
    "state": "-",
    "stateColor": "#fff",
    "stateBgColor": ""
  }
];
if (res.data.head.statusCode === '200' && res.data.data) {
  // 名称
  state.baseInfo.title = res.data.data?.POINT_NAME || '-';
  // 控制级别
  state.baseInfo.controlLevel = res.data.data?.CONTROLLEVEL || '-';
  // 水质级别
  state.baseInfo.waterQuality[0].state = res.data.data?.WATERQUALITYLEVELNAME || '-';
  state.baseInfo.waterQuality[0].stateBgColor = getWaterLevelColor(res.data.data?.WATERQUALITYLEVELNAME);
  // 达标
  state.baseInfo.standard[0].state = res.data.data?.ISSTANDARDSSTR || '-';
  state.baseInfo.standard[0].stateBgColor = getWaterLevelColor(res.data.data?.ISSTANDARDSSTR);

  // 经纬度--周边查询使用
  state.point.lat = res.data.data?.LATITUDE || '';
  state.point.lon = res.data.data?.LONGITUDE || '';

  // 断面类型
  if (state.type === 'waterManualStation') {
    // 手工
    if (res.data.data?.AUTO_POINTCODE) {
      state.baseInfo.type = '手&自';
    } else {
      state.baseInfo.type = '手工';
    }
  } else {
    // 自动站
    state.baseInfo.type = '自动';
  }


  // 站点名称
  state.baseInfoData[0].num = res.data.data?.POINT_NAME || '-';
  // 所属水体
  state.baseInfoData[1].num = `${res.data.data?.WSYSTEM_NAME}/${res.data.data?.WATER_NAME}` || '-';
  // 所属地区
  state.baseInfoData[2].num = res.data.data?.REGION_NAME || '-';
  // 管控级别
  state.baseInfoData[3].num = res.data.data?.CONTROLLEVEL || '-';
  // 水质目标
  state.baseInfoData[4].num = res.data.data?.WATERQUALITYLEVELTARGETNAME || '-';
  state.baseInfoData[4].color = getWaterLevelColor(res.data.data?.WATERQUALITYLEVELTARGETNAME);
  // 超标污染物
  state.baseInfoData[5].num = res.data.data?.OVERPOLLUTE || '-';
} else {
  state.baseInfoData = [
    {
      "title": "站点名称",
      "num": "-"
    },
    {
      "title": "所属水体",
      "num": "-"
    },
    {
      "title": "所属地区",
      "num": "-"
    },
    {
      "title": "管控级别",
      "num": "-"
    },
    {
      "title": "水质目标",
      "num": "-",
      "color": ""
    },
    {
      "title": "超标污染物",
      "num": "-",
      "color": "#FF2B2B"
    }
  ];
  state.baseInfo.waterQuality = [
    {
      "state": "-",
      "stateColor": "#000",
      "stateBgColor": ""
    }
  ];
  state.baseInfo.standard = [
    {
      "state": "-",
      "stateColor": "#fff",
      "stateBgColor": ""
    }
  ];
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getPolluteHandData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"MONITORTIME":"","POLLUTE_CODE":state.variationTrendData.activeTarget,"ASSESSTYPE":state.ASSESSTYPE,"LASTITEMS":"","END_MONITORTIME":state.endTime,"START_MONITORTIME":state.startTime,"POINT_CODE":state.pointCode,"interfaceId":"111f96433be75bc8618e2945f2b4dc67"},}).then((res) => {
     // 成功的操作
     
console.log(res, '手工断面-地表水-变化趋势-污染物');
state.seriesData = []
state.standardSeriesData = []
if (res.data.head.statusCode === '200' && res.data.data.length) {
  let xAxisData = []; // x轴数据
  let seriesData = []; // 系列数据
  // 一到五类标准值
  const standardLineMap = {
    STANDARD_1: [],
    STANDARD_2: [],
    STANDARD_3: [],
    STANDARD_4: [],
    STANDARD_5: [],
  }

  res.data.data.forEach((item) => {
    xAxisData.push(item.MONITORTIME);
    Object.keys(standardLineMap).forEach(i => {
      standardLineMap[i].push({
        value: item[i],
        hiddenInTooltip: true,
        wholeTime: item.MONITORTIME,
      })
    })

    // 组合数据，筛选出同一类的数据
    if (!seriesData.find((x) => x.POINT_CODE === item.POINT_CODE)) {
      seriesData.push({
        POINT_CODE: item.POINT_CODE,
        name: '当月值',
        data: res.data.data.filter((x) => x.POINT_CODE === item.POINT_CODE).map((dataItem) => ({
          // 使用数组的格式，是为了跟x轴坐标的值对应上；x轴和数组的第一项使用的值需要是唯一的
          value: [dataItem.MONITORTIME, dataItem.POLLUTEVALUE],
          // 完整时间、单位在tooltip中的formatter中使用
          unit: state.variationTrendData.activeTarget === 'W01001' ? "" : 'mg/L',
          tooltipXAxisLabel: dataItem.MONITORTIME,
        })),
      });
    }
  });

  // 公共样式
  seriesData = seriesData.map((seriesItem) => ({
    ...seriesItem,
    type: 'bar',
    barWidth: 12
  }));


  //如果污染物是pH,年度目标是区间
  if (state.variationTrendData.activeTarget === 'W01001') {
    state.standardSeriesData.push({
      "name": "年度目标",
      "data": [],
      "type": "line",
      "markArea": {
        "data": [
          [
            {
              "name": "",
              "yAxis": Number(res.data.data[0].STANDARDVALUEMIN || '6')
            },
            {
              "name": "",
              "yAxis": Number(res.data.data[0].STANDARDVALUEMAX || '9')
            }
          ]
        ],
        "silent": true,
        "itemStyle": {
          "color": 'rgba(221, 194, 191, 0.2)'
        }
      }
    });
  } else {
    // 添加标准线线数据
    state.standardSeriesData.push(
      {
        ...handleStandardSeries('Ⅰ类标准值', '#8FCDFF'),
        data: filterRepeatData(standardLineMap.STANDARD_1, 'wholeTime'),
      },
      {
        ...handleStandardSeries('Ⅱ类标准值', '#0280F6'),
        data: filterRepeatData(standardLineMap.STANDARD_2, 'wholeTime'),
      },
      {
        ...handleStandardSeries('Ⅲ类标准值', '#00DA2A'),
        data: filterRepeatData(standardLineMap.STANDARD_3, 'wholeTime'),
      },
      {
        ...handleStandardSeries('Ⅳ类标准值', '#F6C200'),
        data: filterRepeatData(standardLineMap.STANDARD_4, 'wholeTime'),
      },
      {
        ...handleStandardSeries('Ⅴ类标准值', '#FC926A'),
        data: filterRepeatData(standardLineMap.STANDARD_5, 'wholeTime'),
      },
    );
  }

  // 获取污染物图表配置项
  state.variationTrendData.chartOptions = getChartOptions();
  // x轴
  state.variationTrendData.chartOptions.xAxis.data = xAxisData;
  // 系列数据
  state.seriesData = seriesData
}
changeStandard();
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.seriesData = []
state.standardSeriesData = []
      reject(error);
    });
  });
};
// 接口函数
const getAutomateHourData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"MONITORTIME":global.waterPopData.MONITORTIME,"POINT_CODE":state.pointCode,"interfaceId":"6b55f61844ccd520f3f9a5a4f227f95e"},}).then((res) => {
     // 成功的操作
     
console.log(res.data, '自动站小时数据-中屏-点位详情-基本信息');
state.baseInfoData = [
  {
    "title": "站点名称",
    "num": "-"
  },
  {
    "title": "所属水体",
    "num": "-"
  },
  {
    "title": "所属地区",
    "num": "-"
  },
  {
    "title": "管控级别",
    "num": "-"
  },
  {
    "title": "水质目标",
    "num": "-",
    "color": ""
  },
  {
    "title": "超标污染物",
    "num": "-",
    "color": "#FF2B2B"
  }
];
state.baseInfo.waterQuality = [
  {
    "state": "-",
    "stateColor": "#000",
    "stateBgColor": ""
  }
];
state.baseInfo.standard = [
  {
    "state": "-",
    "stateColor": "#fff",
    "stateBgColor": ""
  }
];
if (res.data.head.statusCode === '200' && res.data.data) {
  // 名称
  state.baseInfo.title = res.data.data?.POINT_NAME || '-';
  // 控制级别
  state.baseInfo.controlLevel = res.data.data?.CONTROLLEVEL || '-';
  // 水质级别
  state.baseInfo.waterQuality[0].state = res.data.data?.WATERQUALITYLEVELNAME || '-';
  state.baseInfo.waterQuality[0].stateBgColor = getWaterLevelColor(res.data.data?.WATERQUALITYLEVELNAME);
  // 达标
  state.baseInfo.standard[0].state = res.data.data?.ISSTANDARDSSTR || '-';
  state.baseInfo.standard[0].stateBgColor = getWaterLevelColor(res.data.data?.ISSTANDARDSSTR);

  // 经纬度--周边查询使用
  state.point.lat = res.data.data?.LATITUDE || '';
  state.point.lon = res.data.data?.LONGITUDE || '';

  // 断面类型
  if (state.type === 'waterManualStation') {
    // 手工
    if (res.data.data?.AUTO_POINTCODE) {
      state.baseInfo.type = '手&自';
    } else {
      state.baseInfo.type = '手工';
    }
  } else {
    // 自动站
    state.baseInfo.type = '自动';
  }


  // 站点名称
  state.baseInfoData[0].num = res.data.data?.POINT_NAME || '-';
  // 所属水体
  state.baseInfoData[1].num = `${res.data.data?.WSYSTEM_NAME}/${res.data.data?.WATER_NAME}` || '-';
  // 所属地区
  state.baseInfoData[2].num = res.data.data?.REGION_NAME || '-';
  // 管控级别
  state.baseInfoData[3].num = res.data.data?.CONTROLLEVEL || '-';
  // 水质目标
  state.baseInfoData[4].num = res.data.data?.WATERQUALITYLEVELTARGETNAME || '-';
  state.baseInfoData[4].color = getWaterLevelColor(res.data.data?.WATERQUALITYLEVELTARGETNAME);
  // 超标污染物
  state.baseInfoData[5].num = res.data.data?.OVERPOLLUTE || '-';
} else {
  state.baseInfoData = [
    {
      "title": "站点名称",
      "num": "-"
    },
    {
      "title": "所属水体",
      "num": "-"
    },
    {
      "title": "所属地区",
      "num": "-"
    },
    {
      "title": "管控级别",
      "num": "-"
    },
    {
      "title": "水质目标",
      "num": "-",
      "color": ""
    },
    {
      "title": "超标污染物",
      "num": "-",
      "color": "#FF2B2B"
    }
  ];
  state.baseInfo.waterQuality = [
    {
      "state": "-",
      "stateColor": "#000",
      "stateBgColor": ""
    }
  ];
  state.baseInfo.standard = [
    {
      "state": "-",
      "stateColor": "#fff",
      "stateBgColor": ""
    }
  ];
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getMsgHandData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"ASSESSTYPE":state.ASSESSTYPE,"MONITORTIME":state.MONITORTIME,"POINT_CODE":state.pointCode,"interfaceId":"bac2fba78fcccccef35ef55519e11470"},}).then((res) => {
     // 成功的操作
     
console.log(res, '手工断面-地表水-污染物监测信息');
if (res.data.head.statusCode === '200' && res.data?.data) {
  state.isNo = true;
  // 超标的样式
  const exceedStandardStyle = {
    "cardIconStyle": {
      "background": "#FF2B2B"
    },
    "valueStyle": {
      "color": "#FF2B2B"
    },
    "labelIconStyle": {}
  };

  // 达标的样式
  const meetStandardStyle = {
    "cardIconStyle": {
      "background": "#00DA2A"
    },
    "labelIconStyle": {}
  };
  state.monitorData = [
    {
      value: '-',
      label: '化学需氧量',
    },
    {
      value: '-',
      label: '氨氮',
    },
    {
      value: '-',
      label: 'pH值',
    },
    {
      value: '-',
      label: '浑浊度',
    },
    {
      value: '-',
      label: '溶解氧',
    },
    {
      value: '-',
      label: '水温',
    },
    {
      value: '-',
      label: '电导率',
    },
    {
      value: '-',
      label: '五日生化需氧量',
    },
    {
      value: '-',
      label: '高锰酸盐指数',
    },
    {
      value: '-',
      label: '粪大肠菌群',
    },
    {
      value: '-',
      label: '阴离子表面活性剂',
    },
    {
      value: '-',
      label: '总汞',
    },
    {
      value: '-',
      label: '总镉',
    },
    {
      value: '-',
      label: '六价铬',
    },
    {
      value: '-',
      label: '总砷',
    },
    {
      value: '-',
      label: '总铅',
    },
    {
      value: '-',
      label: '总铜',
    },
    {
      value: '-',
      label: '总锌',
    },
    {
      value: '-',
      label: '总硒',
    },
    {
      value: '-',
      label: '总氮（TN）',
    },
    {
      value: '-',
      label: '总磷',
    },
    {
      value: '-',
      label: '氰化物',
    },
    {
      value: '-',
      label: '氟化物（以F-计）'
    },
    {
      value: '-',
      label: '硫化物',
    },
    {

      value: '-',
      label: '石油类',
    },
    {
      value: '-',
      label: '挥发酚',
    },
  ];

  // 定义监测指标数组
  const indicators = [
    { key: 'W01018', index: 0 },
    { key: 'W21003', index: 1 },
    { key: 'W01001', index: 2 },
    { key: 'W01003', index: 3 },
    { key: 'W01009', index: 4 },
    { key: 'W01010', index: 5 },
    { key: 'W01014', index: 6 },
    { key: 'W01017', index: 7 },
    { key: 'W01019', index: 8 },
    { key: 'W02003', index: 9 },
    { key: 'W19002', index: 10 },
    { key: 'W20111', index: 11 },
    { key: 'W20115', index: 12 },
    { key: 'W20117', index: 13 },
    { key: 'W20119', index: 14 },
    { key: 'W20120', index: 15 },
    { key: 'W20122', index: 16 },
    { key: 'W20123', index: 17 },
    { key: 'W20128', index: 18 },
    { key: 'W21001', index: 19 },
    { key: 'W21011', index: 20 },
    { key: 'W21016', index: 21 },
    { key: 'W21017', index: 22 },
    { key: 'W21019', index: 23 },
    { key: 'W22001', index: 24 },
    { key: 'W23002', index: 25 },
  ];

  // 循环设置每个监测指标的数据和样式
  indicators.forEach(indicator => {
    state.monitorData[indicator.index].value = res.data.data[`${indicator.key}_VALUE`] || '-';
    state.monitorData[indicator.index].style = {
      "labelIconStyle": {
        "background-image": getWaterLevelSrc(res.data.data[`${indicator.key}_CODE_WATERLEVEL`])
      }
    };
    console.log(state.monitorData[indicator.index], res.data.data[`${indicator.key}_CODE_WATERLEVEL`], '888');
    const isStandards = res.data.data[`${indicator.key}_ISSTANDARDS`];
    if (isStandards === '0') {
      state.monitorData[indicator.index].style = {
        ...exceedStandardStyle,
        ...state.monitorData[indicator.index].style
      };
    } else if (isStandards === '1') {
      state.monitorData[indicator.index].style = {
        ...meetStandardStyle,
        ...state.monitorData[indicator.index].style
      };
    }
  });
} else {
  state.isNo = false;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.isNo = false;
      reject(error);
    });
  });
};
// 接口函数
const getWaterHandData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"END_MONITORTIME":state.endTime,"START_MONITORTIME":state.startTime,"POINT_CODE":state.pointCode,"interfaceId":"b78b12c4124dc4b29f87eae49fc5931d"},}).then((res) => {
     // 成功的操作
     
console.log(res, '手工断面-地表水-变化趋势-水质级别');
state.seriesData = []
state.standardSeriesData = []

if (res.data.head.statusCode === '200' && res.data.data.length) {
  let xAxisData = []; // x轴数据
  let yearTargetData = []; // 年度目标
  let seriesData = []; // 系列数据

  res.data.data.forEach((item) => {
    xAxisData.push(item.MONITORTIME);
    yearTargetData.push({
      value: Number(item.CODE_WATERQUALITYLEVELTARGET),
      hiddenInTooltip: true,
      wholeTime: item.MONITORTIME,
    })
    // 组合数据，筛选出同一类的数据
    if (!seriesData.find((x) => x.POINT_CODE === item.POINT_CODE)) {
      seriesData.push({
        POINT_CODE: item.POINT_CODE,
        name: '当月值',
        data: res.data.data.filter((x) => x.POINT_CODE === item.POINT_CODE).map((dataItem) => ({
          // 使用数组的格式，是为了跟x轴坐标的值对应上；x轴和数组的第一项使用的值需要是唯一的
          value: [dataItem.MONITORTIME, dataItem.CODE_WATERQUALITYLEVEL],
          // 完整时间、单位在tooltip中的formatter中使用
          unit: '',
          tooltipXAxisLabel: dataItem.MONITORTIME,
        })),
      },
        {
          POINT_CODE: item.POINT_CODE,
          name: '累计均值',
          data: res.data.data.filter((x) => x.POINT_CODE === item.POINT_CODE).map((dataItem) => ({
            // 使用数组的格式，是为了跟x轴坐标的值对应上；x轴和数组的第一项使用的值需要是唯一的
            value: [dataItem.MONITORTIME, dataItem.LCODE_WATERQUALITYLEVEL],
            // 完整时间、单位在tooltip中的formatter中使用
            unit: '',
            tooltipXAxisLabel: dataItem.MONITORTIME,
          })),
        },
        {
          POINT_CODE: item.POINT_CODE,
          name: '去年同期',
          data: res.data.data.filter((x) => x.POINT_CODE === item.POINT_CODE).map((dataItem) => ({
            // 使用数组的格式，是为了跟x轴坐标的值对应上；x轴和数组的第一项使用的值需要是唯一的
            value: [dataItem.MONITORTIME, dataItem.CODE_WATERLEVEL_LASTYEAR],
            // 完整时间、单位在tooltip中的formatter中使用
            unit: '',
            tooltipXAxisLabel: dataItem.MONITORTIME,
          })),
        });
    }
  });

  // 公共配置
  seriesData = seriesData.map((seriesItem) => ({
    ...seriesItem,
    "type": "bar",
    "barWidth": 12
  }));

  // 获取水质图表配置项
  state.variationTrendData.chartOptions = getChartOptions();
  // x轴
  state.variationTrendData.chartOptions.xAxis.data = xAxisData;
  // 系列数据
  state.seriesData = seriesData
  // 添加标准线线数据
  state.standardSeriesData.push({
    ...handleWaterLevelStandard('年度目标'),
    data: filterRepeatData(yearTargetData, 'wholeTime'),
  });
}
changeStandard();
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.seriesData = []
state.standardSeriesData = []
      reject(error);
    });
  });
};
// 接口函数
const getMsgAutoHourData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"MONITORTIME":state.MONITORTIME,"POINT_CODE":state.pointCode,"interfaceId":"a804ff1a0661bf320cbc5fcbf7d0ae8c"},}).then((res) => {
     // 成功的操作
     

console.log(res, '自动站小时数据-中屏-点位详情-监测指标信息');
if (res.data.head.statusCode === '200' && res.data?.data) {
  state.isNo = true;
  // 超标的样式
  const exceedStandardStyle = {
    "cardIconStyle": {
      "background": "#FF2B2B"
    },
    "valueStyle": {
      "color": "#FF2B2B"
    },
    "labelIconStyle": {}
  };

  // 达标的样式
  const meetStandardStyle = {
    "cardIconStyle": {
      "background": "#00DA2A"
    },
    "labelIconStyle": {}
  };
  state.monitorData = [
    {
      value: '-',
      label: '化学需氧量',
    },
    {
      value: '-',
      label: '氨氮',
    },
    {
      value: '-',
      label: 'pH值',
    },
    {
      value: '-',
      label: '浑浊度',
    },
    {
      value: '-',
      label: '溶解氧',
    },
    {
      value: '-',
      label: '水温',
    },
    {
      value: '-',
      label: '电导率',
    },
    {
      value: '-',
      label: '五日生化需氧量',
    },
    {
      value: '-',
      label: '高锰酸盐指数',
    },
    {
      value: '-',
      label: '粪大肠菌群',
    },
    {
      value: '-',
      label: '阴离子表面活性剂',
    },
    {
      value: '-',
      label: '总汞',
    },
    {
      value: '-',
      label: '总镉',
    },
    {
      value: '-',
      label: '六价铬',
    },
    {
      value: '-',
      label: '总砷',
    },
    {
      value: '-',
      label: '总铅',
    },
    {
      value: '-',
      label: '总铜',
    },
    {
      value: '-',
      label: '总锌',
    },
    {
      value: '-',
      label: '总硒',
    },
    {
      value: '-',
      label: '总氮（TN）',
    },
    {
      value: '-',
      label: '总磷',
    },
    {
      value: '-',
      label: '氰化物',
    },
    {
      value: '-',
      label: '氟化物（以F-计）'
    },
    {
      value: '-',
      label: '硫化物',
    },
    {

      value: '-',
      label: '石油类',
    },
    {
      value: '-',
      label: '挥发酚',
    },
  ];

  // 定义监测指标数组
  const indicators = [
    { key: 'W01018', index: 0 },
    { key: 'W21003', index: 1 },
    { key: 'W01001', index: 2 },
    { key: 'W01003', index: 3 },
    { key: 'W01009', index: 4 },
    { key: 'W01010', index: 5 },
    { key: 'W01014', index: 6 },
    { key: 'W01017', index: 7 },
    { key: 'W01019', index: 8 },
    { key: 'W02003', index: 9 },
    { key: 'W19002', index: 10 },
    { key: 'W20111', index: 11 },
    { key: 'W20115', index: 12 },
    { key: 'W20117', index: 13 },
    { key: 'W20119', index: 14 },
    { key: 'W20120', index: 15 },
    { key: 'W20122', index: 16 },
    { key: 'W20123', index: 17 },
    { key: 'W20128', index: 18 },
    { key: 'W21001', index: 19 },
    { key: 'W21011', index: 20 },
    { key: 'W21016', index: 21 },
    { key: 'W21017', index: 22 },
    { key: 'W21019', index: 23 },
    { key: 'W22001', index: 24 },
    { key: 'W23002', index: 25 },
  ];

  // 循环设置每个监测指标的数据和样式
  indicators.forEach(indicator => {
    state.monitorData[indicator.index].value = res.data.data[`${indicator.key}_VALUE`] || '-';
    state.monitorData[indicator.index].style = {
      "labelIconStyle": {
        "background-image": getWaterLevelSrc(res.data.data[`${indicator.key}_CODE_WATERLEVEL`])
      }
    };
    console.log(state.monitorData[indicator.index], res.data.data[`${indicator.key}_CODE_WATERLEVEL`], '888');
    const isStandards = res.data.data[`${indicator.key}_ISSTANDARDS`];
    if (isStandards === '0') {
      state.monitorData[indicator.index].style = {
        ...exceedStandardStyle,
        ...state.monitorData[indicator.index].style
      };
    } else if (isStandards === '1') {
      state.monitorData[indicator.index].style = {
        ...meetStandardStyle,
        ...state.monitorData[indicator.index].style
      };
    }
  });
} else {
  state.isNo = false;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getMsgAutoDayData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"MONITORTIME":state.MONITORTIME,"POINT_CODE":state.pointCode,"interfaceId":"9aa166c764dc978924f8c033280fc6e9"},}).then((res) => {
     // 成功的操作
     
console.log(res, '自动站日数据-中屏-点位详情-监测指标信息');
if (res.data.head.statusCode === '200' && res.data?.data) {
  state.isNo = true;
  // 超标的样式
  const exceedStandardStyle = {
    "cardIconStyle": {
      "background": "#FF2B2B"
    },
    "valueStyle": {
      "color": "#FF2B2B"
    },
    "labelIconStyle": {}
  };

  // 达标的样式
  const meetStandardStyle = {
    "cardIconStyle": {
      "background": "#00DA2A"
    },
    "labelIconStyle": {}
  };
  state.monitorData = [
    {
      value: '-',
      label: '化学需氧量',
    },
    {
      value: '-',
      label: '氨氮',
    },
    {
      value: '-',
      label: 'pH值',
    },
    {
      value: '-',
      label: '浑浊度',
    },
    {
      value: '-',
      label: '溶解氧',
    },
    {
      value: '-',
      label: '水温',
    },
    {
      value: '-',
      label: '电导率',
    },
    {
      value: '-',
      label: '五日生化需氧量',
    },
    {
      value: '-',
      label: '高锰酸盐指数',
    },
    {
      value: '-',
      label: '粪大肠菌群',
    },
    {
      value: '-',
      label: '阴离子表面活性剂',
    },
    {
      value: '-',
      label: '总汞',
    },
    {
      value: '-',
      label: '总镉',
    },
    {
      value: '-',
      label: '六价铬',
    },
    {
      value: '-',
      label: '总砷',
    },
    {
      value: '-',
      label: '总铅',
    },
    {
      value: '-',
      label: '总铜',
    },
    {
      value: '-',
      label: '总锌',
    },
    {
      value: '-',
      label: '总硒',
    },
    {
      value: '-',
      label: '总氮（TN）',
    },
    {
      value: '-',
      label: '总磷',
    },
    {
      value: '-',
      label: '氰化物',
    },
    {
      value: '-',
      label: '氟化物（以F-计）'
    },
    {
      value: '-',
      label: '硫化物',
    },
    {

      value: '-',
      label: '石油类',
    },
    {
      value: '-',
      label: '挥发酚',
    },
  ];

  // 定义监测指标数组
  const indicators = [
    { key: 'W01018', index: 0 },
    { key: 'W21003', index: 1 },
    { key: 'W01001', index: 2 },
    { key: 'W01003', index: 3 },
    { key: 'W01009', index: 4 },
    { key: 'W01010', index: 5 },
    { key: 'W01014', index: 6 },
    { key: 'W01017', index: 7 },
    { key: 'W01019', index: 8 },
    { key: 'W02003', index: 9 },
    { key: 'W19002', index: 10 },
    { key: 'W20111', index: 11 },
    { key: 'W20115', index: 12 },
    { key: 'W20117', index: 13 },
    { key: 'W20119', index: 14 },
    { key: 'W20120', index: 15 },
    { key: 'W20122', index: 16 },
    { key: 'W20123', index: 17 },
    { key: 'W20128', index: 18 },
    { key: 'W21001', index: 19 },
    { key: 'W21011', index: 20 },
    { key: 'W21016', index: 21 },
    { key: 'W21017', index: 22 },
    { key: 'W21019', index: 23 },
    { key: 'W22001', index: 24 },
    { key: 'W23002', index: 25 },
  ];

  // 循环设置每个监测指标的数据和样式
  indicators.forEach(indicator => {
    state.monitorData[indicator.index].value = res.data.data[`${indicator.key}_VALUE`] || '-';
    state.monitorData[indicator.index].style = {
      "labelIconStyle": {
        "background-image": getWaterLevelSrc(res.data.data[`${indicator.key}_CODE_WATERLEVEL`])
      }
    };
    console.log(state.monitorData[indicator.index], res.data.data[`${indicator.key}_CODE_WATERLEVEL`], '888');
    const isStandards = res.data.data[`${indicator.key}_ISSTANDARDS`];
    if (isStandards === '0') {
      state.monitorData[indicator.index].style = {
        ...exceedStandardStyle,
        ...state.monitorData[indicator.index].style
      };
    } else if (isStandards === '1') {
      state.monitorData[indicator.index].style = {
        ...meetStandardStyle,
        ...state.monitorData[indicator.index].style
      };
    }
  });
} else {
  state.isNo = false;
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getWaterAutoHourData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"LASTITEMS":"","MONITORTIME":"","END_MONITORTIME":state.endTime,"START_MONITORTIME":state.startTime,"POINT_CODE":state.pointCode,"interfaceId":"e28583fdbe67adf882adde7f4f24ac6f"},}).then((res) => {
     // 成功的操作
     
console.log(res, '自动站小时数据-中屏-点位详情-变化趋势图-水质');
state.seriesData = []
state.standardSeriesData = []

if (res.data.head.statusCode === '200' && res.data.data.length) {
  let xAxisData = []; // x轴数据
  let yearTargetData = []; // 年度目标
  let seriesData = []; // 系列数据

  res.data.data.forEach((item) => {
    xAxisData.push(item.MONITORTIME);
    yearTargetData.push({
      value: Number(item.CODE_WATERQUALITYLEVELTARGET),
      hiddenInTooltip: true,
      wholeTime: item.MONITORTIME,
    })
    // 组合数据，筛选出同一类的数据
    if (!seriesData.find((x) => x.POINT_CODE === item.POINT_CODE)) {
      seriesData.push({
        POINT_CODE: item.POINT_CODE,
        name: '小时值',
        data: res.data.data.filter((x) => x.POINT_CODE === item.POINT_CODE).map((dataItem) => ({
          // 使用数组的格式，是为了跟x轴坐标的值对应上；x轴和数组的第一项使用的值需要是唯一的
          value: [dataItem.MONITORTIME, dataItem.CODE_WATERQUALITYLEVEL],
          // 完整时间、单位在tooltip中的formatter中使用
          unit: '',
          tooltipXAxisLabel: dataItem.MONITORTIME,
        })),
      });
    }
  });

  // 公共配置
  seriesData = seriesData.map((seriesItem) => ({
    ...seriesItem,
    "type": "bar",
    "barWidth": 12
  }));

  // 获取水质图表配置项
  state.variationTrendData.chartOptions = getChartOptions();
  state.variationTrendData.chartOptions.grid.bottom = '35%';
  // x轴
  state.variationTrendData.chartOptions.xAxis.data = xAxisData;
  // 系列数据
  state.seriesData = seriesData
  // 添加标准线线数据
  state.standardSeriesData.push({
    ...handleWaterLevelStandard('年度目标'),
    data: filterRepeatData(yearTargetData, 'wholeTime'),
  });
}
changeStandard();
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getPolluteAutoHourData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"MONITORTIME":"","POLLUTE_CODE":state.variationTrendData.activeTarget,"LASTITEMS":"","END_MONITORTIME":state.endTime,"START_MONITORTIME":state.startTime,"POINT_CODE":state.pointCode,"interfaceId":"cbe8ba417f429e417f30e028753392bc"},}).then((res) => {
     // 成功的操作
     
console.log(res, '自动站小时数据-中屏-点位详情-变化趋势图-污染物');
state.seriesData = []
state.standardSeriesData = []
if (res.data.head.statusCode === '200' && res.data.data.length) {
  let xAxisData = []; // x轴数据
  let seriesData = []; // 系列数据
  // 一到五类标准值
  const standardLineMap = {
    STANDARD_1: [],
    STANDARD_2: [],
    STANDARD_3: [],
    STANDARD_4: [],
    STANDARD_5: [],
  }

  res.data.data.forEach((item) => {
    xAxisData.push(item.MONITORTIME);
    Object.keys(standardLineMap).forEach(i => {
      standardLineMap[i].push({
        value: item[i],
        hiddenInTooltip: true,
        wholeTime: item.MONITORTIME,
      })
    })

    // 组合数据，筛选出同一类的数据
    if (!seriesData.find((x) => x.POINT_CODE === item.POINT_CODE)) {
      seriesData.push({
        POINT_CODE: item.POINT_CODE,
        name: '当月值',
        data: res.data.data.filter((x) => x.POINT_CODE === item.POINT_CODE).map((dataItem) => ({
          // 使用数组的格式，是为了跟x轴坐标的值对应上；x轴和数组的第一项使用的值需要是唯一的
          value: [dataItem.MONITORTIME, dataItem.POLLUTEVALUE],
          // 完整时间、单位在tooltip中的formatter中使用
          unit: state.variationTrendData.activeTarget === 'W01001' ? "" : 'mg/L',
          tooltipXAxisLabel: dataItem.MONITORTIME,
        })),
      });
    }
  });

  // 公共样式
  seriesData = seriesData.map((seriesItem) => ({
    ...seriesItem,
    type: 'bar',
    barWidth: 12
  }));


  //如果污染物是pH,年度目标是区间
  if (state.variationTrendData.activeTarget === 'W01001') {
    state.standardSeriesData.push({
      "name": "年度目标",
      "data": [],
      "type": "line",
      "markArea": {
        "data": [
          [
            {
              "name": "",
              "yAxis": Number(res.data.data[0].STANDARDVALUEMIN || '6')
            },
            {
              "name": "",
              "yAxis": Number(res.data.data[0].STANDARDVALUEMAX || '9')
            }
          ]
        ],
        "silent": true,
        "itemStyle": {
          "color": 'rgba(221, 194, 191, 0.2)'
        }
      }
    });
  } else {
    // 添加标准线线数据
    state.standardSeriesData.push(
      {
        ...handleStandardSeries('Ⅰ类标准值', '#8FCDFF'),
        data: filterRepeatData(standardLineMap.STANDARD_1, 'wholeTime'),
      },
      {
        ...handleStandardSeries('Ⅱ类标准值', '#0280F6'),
        data: filterRepeatData(standardLineMap.STANDARD_2, 'wholeTime'),
      },
      {
        ...handleStandardSeries('Ⅲ类标准值', '#00DA2A'),
        data: filterRepeatData(standardLineMap.STANDARD_3, 'wholeTime'),
      },
      {
        ...handleStandardSeries('Ⅳ类标准值', '#F6C200'),
        data: filterRepeatData(standardLineMap.STANDARD_4, 'wholeTime'),
      },
      {
        ...handleStandardSeries('Ⅴ类标准值', '#FC926A'),
        data: filterRepeatData(standardLineMap.STANDARD_5, 'wholeTime'),
      },
    );
  }

  // 获取污染物图表配置项
  state.variationTrendData.chartOptions = getChartOptions();
  state.variationTrendData.chartOptions.grid.bottom = '35%';
  // x轴
  state.variationTrendData.chartOptions.xAxis.data = xAxisData;
  // 系列数据
  state.seriesData = seriesData
}
changeStandard();
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.seriesData = []
state.standardSeriesData = []
      reject(error);
    });
  });
};
// 接口函数
const getPolluteAutoDayData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"MONITORTIME":"","POLLUTE_CODE":state.variationTrendData.activeTarget,"LASTITEMS":"","END_MONITORTIME":state.endTime,"START_MONITORTIME":state.startTime,"POINT_CODE":state.pointCode,"interfaceId":"a1bca86ff555c5c12c080873b8f782d8"},}).then((res) => {
     // 成功的操作
     
console.log(res, '自动站日数据-中屏-点位详情-变化趋势图-污染物');
state.seriesData = []
state.standardSeriesData = []
if (res.data.head.statusCode === '200' && res.data.data.length) {
  let xAxisData = []; // x轴数据
  let seriesData = []; // 系列数据
  // 一到五类标准值
  const standardLineMap = {
    STANDARD_1: [],
    STANDARD_2: [],
    STANDARD_3: [],
    STANDARD_4: [],
    STANDARD_5: [],
  }

  res.data.data.forEach((item) => {
    xAxisData.push(item.MONITORTIME);
    Object.keys(standardLineMap).forEach(i => {
      standardLineMap[i].push({
        value: item[i],
        hiddenInTooltip: true,
        wholeTime: item.MONITORTIME,
      })
    })

    // 组合数据，筛选出同一类的数据
    if (!seriesData.find((x) => x.POINT_CODE === item.POINT_CODE)) {
      seriesData.push({
        POINT_CODE: item.POINT_CODE,
        name: '当日值',
        data: res.data.data.filter((x) => x.POINT_CODE === item.POINT_CODE).map((dataItem) => ({
          // 使用数组的格式，是为了跟x轴坐标的值对应上；x轴和数组的第一项使用的值需要是唯一的
          value: [dataItem.MONITORTIME, dataItem.POLLUTEVALUE],
          // 完整时间、单位在tooltip中的formatter中使用
          unit: state.variationTrendData.activeTarget === 'W01001' ? "" : 'mg/L',
          tooltipXAxisLabel: dataItem.MONITORTIME,
        })),
      });
    }
  });

  // 公共样式
  seriesData = seriesData.map((seriesItem) => ({
    ...seriesItem,
    type: 'bar',
    barWidth: 12
  }));


  //如果污染物是pH,年度目标是区间
  if (state.variationTrendData.activeTarget === 'W01001') {
    state.standardSeriesData.push({
      "name": "年度目标",
      "data": [],
      "type": "line",
      "markArea": {
        "data": [
          [
            {
              "name": "",
              "yAxis": Number(res.data.data[0].STANDARDVALUEMIN || '6')
            },
            {
              "name": "",
              "yAxis": Number(res.data.data[0].STANDARDVALUEMAX || '9')
            }
          ]
        ],
        "silent": true,
        "itemStyle": {
          "color": 'rgba(221, 194, 191, 0.2)'
        }
      }
    });
  } else {
    // 添加标准线线数据
    state.standardSeriesData.push(
      {
        ...handleStandardSeries('Ⅰ类标准值', '#8FCDFF'),
        data: filterRepeatData(standardLineMap.STANDARD_1, 'wholeTime'),
      },
      {
        ...handleStandardSeries('Ⅱ类标准值', '#0280F6'),
        data: filterRepeatData(standardLineMap.STANDARD_2, 'wholeTime'),
      },
      {
        ...handleStandardSeries('Ⅲ类标准值', '#00DA2A'),
        data: filterRepeatData(standardLineMap.STANDARD_3, 'wholeTime'),
      },
      {
        ...handleStandardSeries('Ⅳ类标准值', '#F6C200'),
        data: filterRepeatData(standardLineMap.STANDARD_4, 'wholeTime'),
      },
      {
        ...handleStandardSeries('Ⅴ类标准值', '#FC926A'),
        data: filterRepeatData(standardLineMap.STANDARD_5, 'wholeTime'),
      },
    );
  }

  // 获取污染物图表配置项
  state.variationTrendData.chartOptions = getChartOptions();
  // x轴
  state.variationTrendData.chartOptions.xAxis.data = xAxisData;
  // 系列数据
  state.seriesData = seriesData
}
changeStandard();
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.seriesData = []
state.standardSeriesData = []
      reject(error);
    });
  });
};
// 执行自定义方法
intParams();
onMounted(() => {
setPageScale('t-l-c-sectionPop', global.appScaleMode, 'normal');
window.onresize = () => {
setPageScale('t-l-c-sectionPop', global.appScaleMode, 'normal');
};
});
// 页面离开时的操作
onUnmounted(() => {
});
return {
global,
state,
componentState,
onchange1742797933012_0_0,
ondateChange1742991197605,
onmouseover1742797597301_5_0,
onmouseout1742797597301_5_1,
onclick1742797597302_0_0,
onchange1742797933013_0_0,
};
},
};