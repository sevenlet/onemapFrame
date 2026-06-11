window.surfaceWaterQualityComponent = {
template: 
`<div id="t-l-c-surfaceWaterQuality" class="t-l-c-surfaceWaterQuality" >` +
`<t-component id="t-component-3446.2ec2a01e8" class="surfaceWaterQuality-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName">` +
`</t-component>` +
`<t-rect id="t-rect-59e3.5cacd2ad2" class="surfaceWaterQuality-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-adaf.3c765376c" class="surfaceWaterQuality-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-gradient-shadow-text id="t-gradient-shadow-text-570a.032735b89" class="surfaceWaterQuality-t-gradient-shadow-text-0-3"  :label="tGradientShadowTextx0x3ComputedData.label" :c-style="tGradientShadowTextx0x3ComputedData.cStyle" :shadow-style="tGradientShadowTextx0x3ComputedData.shadowStyle">` +
`</t-gradient-shadow-text>` +
`<t-tabs id="t-tabs-34a8.9aafc90df" class="surfaceWaterQuality-t-tabs-0-4"  :alias="tTabsx0x4ComputedData.alias" :data="tTabsx0x4ComputedData.data" :model-value="tTabsx0x4ComputedData.model-value" :tab-position-extend="tTabsx0x4ComputedData.tabPositionExtend" :stretch="tTabsx0x4ComputedData.stretch" :c-style="tTabsx0x4ComputedData.cStyle" :active-tab="replaceCssVariables(state.tabSelect, global?.theme || global?.activeTheme || '默认主题')" @tab-click="ontabClick1741946258388">` +
`</t-tabs>` +
`<t-list-card id="t-list-card-917b.c64887c95" class="surfaceWaterQuality-t-list-card-0-5"  :data="replaceCssVariables(state.sectionCardData, global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x5ComputedData.spacingX" :col="tListCardx0x5ComputedData.col" :direction="tListCardx0x5ComputedData.direction" :exchange-order="tListCardx0x5ComputedData.exchangeOrder" :unit-break="tListCardx0x5ComputedData.unitBreak" :key-field="tListCardx0x5ComputedData.keyField" :active-key-field="tListCardx0x5ComputedData.activeKeyField" :active="tListCardx0x5ComputedData.active" :c-style="tListCardx0x5ComputedData.cStyle" @card-click="oncardClick1741843633029">` +
`</t-list-card>` +
`<t-text id="t-text-c844.f17ef1ace" class="surfaceWaterQuality-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle" @click="onclick1742377862828">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-aa67.16bc3b243" class="surfaceWaterQuality-t-text-unit-0-7"  :c-style="tTextUnitx0x7ComputedData.cStyle" :justify="tTextUnitx0x7ComputedData.justify" :align="tTextUnitx0x7ComputedData.align" :content="replaceCssVariables(state.standardSection.standardCount, global?.theme || global?.activeTheme || '默认主题')" :unit="replaceCssVariables(state.standardSection.totalCount, global?.theme || global?.activeTheme || '默认主题')" :show-overflow-tooltip="tTextUnitx0x7ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-f6c0.3f265781d" class="surfaceWaterQuality-t-text-unit-0-8"  :c-style="tTextUnitx0x8ComputedData.cStyle" :justify="tTextUnitx0x8ComputedData.justify" :align="tTextUnitx0x8ComputedData.align" :content="replaceCssVariables(state.standardPercent, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x8ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x8ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-552e.5b0aca374" class="surfaceWaterQuality-t-rect-0-9"  :tip="tRectx0x9ComputedData.tip" :label="tRectx0x9ComputedData.label" :active="tRectx0x9ComputedData.active" :c-style="tRectx0x9ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-5349.0db9f65c8" class="surfaceWaterQuality-t-text-0-10"  :label="tTextx0x10ComputedData.label" :editable="tTextx0x10ComputedData.editable" :c-style="tTextx0x10ComputedData.cStyle" @click="onclick1742373640638">` +
`</t-text>` +
`<t-rect id="t-rect-0d74.e1907e5d2" class="surfaceWaterQuality-t-rect-0-11"  :tip="tRectx0x11ComputedData.tip" :label="tRectx0x11ComputedData.label" :active="tRectx0x11ComputedData.active" :c-style="tRectx0x11ComputedData.cStyle">` +
`</t-rect>` +
`<t-circle id="t-circle-816e.3c7e3d15a" class="surfaceWaterQuality-t-circle-0-12"  :tip="tCirclex0x12ComputedData.tip" :label="tCirclex0x12ComputedData.label" :active="tCirclex0x12ComputedData.active" :c-style="tCirclex0x12ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-251c.ea30ca5ef" class="surfaceWaterQuality-t-circle-0-13"  :tip="tCirclex0x13ComputedData.tip" :label="tCirclex0x13ComputedData.label" :active="tCirclex0x13ComputedData.active" :c-style="tCirclex0x13ComputedData.cStyle">` +
`</t-circle>` +
`<t-chart-pie-percent v-if="state.threeTypeProportion.curPercent !== '--'" id="t-chart-pie-percent-438b.b0d266af3" class="surfaceWaterQuality-t-chart-pie-percent-0-14"  :empty-img="tChartPiePercentx0x14ComputedData.emptyImg" :data="replaceCssVariables(state.threeTypeProportion.curPercent, global?.theme || global?.activeTheme || '默认主题')" :series-style="tChartPiePercentx0x14ComputedData.seriesStyle" :c-style="tChartPiePercentx0x14ComputedData.cStyle" :options="tChartPiePercentx0x14ComputedData.options" :pie="componentState.tChartPiePercentx0x14.pie">` +
`</t-chart-pie-percent>` +
`<t-chart-pie-percent v-if="state.VTypeProportion.curPercent !== '--'" id="t-chart-pie-percent-65d7.14bb2b818" class="surfaceWaterQuality-t-chart-pie-percent-0-15"  :empty-img="tChartPiePercentx0x15ComputedData.emptyImg" :data="replaceCssVariables(state.VTypeProportion.curPercent, global?.theme || global?.activeTheme || '默认主题')" :series-style="tChartPiePercentx0x15ComputedData.seriesStyle" :c-style="tChartPiePercentx0x15ComputedData.cStyle" :options="tChartPiePercentx0x15ComputedData.options" :pie="componentState.tChartPiePercentx0x15.pie">` +
`</t-chart-pie-percent>` +
`<t-text id="t-text-d4a7.7c67004cf" class="surfaceWaterQuality-t-text-0-16"  :label="tTextx0x16ComputedData.label" :editable="tTextx0x16ComputedData.editable" :c-style="tTextx0x16ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-2cfa.f420c7a7b" class="surfaceWaterQuality-t-text-0-17"  :label="tTextx0x17ComputedData.label" :editable="tTextx0x17ComputedData.editable" :c-style="tTextx0x17ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-94df.58d446196" class="surfaceWaterQuality-t-text-0-18"  :label="tTextx0x18ComputedData.label" :editable="tTextx0x18ComputedData.editable" :c-style="tTextx0x18ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-931f.6703d7ddd" class="surfaceWaterQuality-t-rect-0-19"  :tip="tRectx0x19ComputedData.tip" :label="tRectx0x19ComputedData.label" :active="tRectx0x19ComputedData.active" :c-style="tRectx0x19ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-57f1.fc4d9d6c3" class="surfaceWaterQuality-t-rect-0-20"  :tip="tRectx0x20ComputedData.tip" :label="tRectx0x20ComputedData.label" :active="tRectx0x20ComputedData.active" :c-style="tRectx0x20ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-5f2f.04e1bc764" class="surfaceWaterQuality-t-text-0-21"  :label="tTextx0x21ComputedData.label" :editable="tTextx0x21ComputedData.editable" :c-style="tTextx0x21ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-8f4b.8080d6eb8" class="surfaceWaterQuality-t-text-unit-0-22"  :c-style="tTextUnitx0x22ComputedData.cStyle" :justify="tTextUnitx0x22ComputedData.justify" :align="tTextUnitx0x22ComputedData.align" :content="replaceCssVariables(state.threeTypeProportion.targetPercent, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x22ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x22ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-cdbb.336156898" class="surfaceWaterQuality-t-text-unit-0-23"  :c-style="tTextUnitx0x23ComputedData.cStyle" :justify="tTextUnitx0x23ComputedData.justify" :align="tTextUnitx0x23ComputedData.align" :content="replaceCssVariables(state.threeTypeProportion.lastYearPercent, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x23ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x23ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text id="t-text-2027.f997eea9c" class="surfaceWaterQuality-t-text-0-24"  :label="tTextx0x24ComputedData.label" :editable="tTextx0x24ComputedData.editable" :c-style="tTextx0x24ComputedData.cStyle" @click="onclick1742373673976">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-9ae9.3761987f6" class="surfaceWaterQuality-t-text-unit-0-25"  :c-style="tTextUnitx0x25ComputedData.cStyle" :justify="tTextUnitx0x25ComputedData.justify" :align="tTextUnitx0x25ComputedData.align" :content="replaceCssVariables(state.VTypeProportion.targetPercent, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x25ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x25ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-f4b6.e43d03154" class="surfaceWaterQuality-t-text-unit-0-26"  :c-style="tTextUnitx0x26ComputedData.cStyle" :justify="tTextUnitx0x26ComputedData.justify" :align="tTextUnitx0x26ComputedData.align" :content="replaceCssVariables(state.VTypeProportion.lastYearPercent, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x26ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x26ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-974f.3254fd7a3" class="surfaceWaterQuality-t-rect-0-27"  :tip="tRectx0x27ComputedData.tip" :label="tRectx0x27ComputedData.label" :active="tRectx0x27ComputedData.active" :c-style="tRectx0x27ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-6964.0822dd5a4" class="surfaceWaterQuality-t-rect-0-28"  :tip="tRectx0x28ComputedData.tip" :label="tRectx0x28ComputedData.label" :active="tRectx0x28ComputedData.active" :c-style="tRectx0x28ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.ecologicalCloudAllState.selectedBlock === 'yldmSectionWater'" id="t-rect-d438.cd59c9b3a" class="surfaceWaterQuality-t-rect-0-30"  :tip="tRectx0x30ComputedData.tip" :label="tRectx0x30ComputedData.label" :active="tRectx0x30ComputedData.active" :c-style="tRectx0x30ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.ecologicalCloudAllState.selectedBlock === 'lvdmSectionWater'" id="t-rect-d3ff.0ecc0aa1f" class="surfaceWaterQuality-t-rect-0-31"  :tip="tRectx0x31ComputedData.tip" :label="tRectx0x31ComputedData.label" :active="tRectx0x31ComputedData.active" :c-style="tRectx0x31ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.ecologicalCloudAllState.selectedBlock === 'VTypeProportionWater'" id="t-rect-1035.5515af53f" class="surfaceWaterQuality-t-rect-0-33"  :tip="tRectx0x33ComputedData.tip" :label="tRectx0x33ComputedData.label" :active="tRectx0x33ComputedData.active" :c-style="tRectx0x33ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-unit id="t-text-unit-4006.6e019b61e" class="surfaceWaterQuality-t-text-unit-0-34"  :c-style="tTextUnitx0x34ComputedData.cStyle" :justify="tTextUnitx0x34ComputedData.justify" :align="tTextUnitx0x34ComputedData.align" :content="replaceCssVariables(state.VTypeProportion.curPercent, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x34ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x34ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-064e.3a1b96381" class="surfaceWaterQuality-t-text-unit-0-35"  :c-style="tTextUnitx0x35ComputedData.cStyle" :justify="tTextUnitx0x35ComputedData.justify" :align="tTextUnitx0x35ComputedData.align" :content="replaceCssVariables(state.threeTypeProportion.curPercent, global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x35ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x35ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect v-if="state.ecologicalCloudAllState.selectedBlock === 'standardPercentSectionWater'" id="t-rect-9b87.63310b826" class="surfaceWaterQuality-t-rect-0-36"  :tip="tRectx0x36ComputedData.tip" :label="tRectx0x36ComputedData.label" :active="tRectx0x36ComputedData.active" :c-style="tRectx0x36ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.ecologicalCloudAllState.selectedBlock === 'standardSectionWater'" id="t-rect-54a2.cdb6296a5" class="surfaceWaterQuality-t-rect-0-37"  :tip="tRectx0x37ComputedData.tip" :label="tRectx0x37ComputedData.label" :active="tRectx0x37ComputedData.active" :c-style="tRectx0x37ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-92e2.91b51d232" class="surfaceWaterQuality-t-text-0-38"  :label="tTextx0x38ComputedData.label" :editable="tTextx0x38ComputedData.editable" :c-style="tTextx0x38ComputedData.cStyle" @click="onclick1742377730623">` +
`</t-text>` +
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
   sectionAppURL: "http://192.168.0.202:7777/mapgo5.0/preview.html?appID=b50ea63be71b44ed8252d1a859e124f1&appType=2D&appName=%E9%A9%BE%E9%A9%B6%E8%88%B1-%E7%94%9F%E6%80%81%E4%BA%91-%E6%B0%B4%E7%8E%AF%E5%A2%83",
   proportionAppURL: "http://192.168.0.202:7777/mapgo5.0/preview.html?appID=600e7e5a31914ca5a057f74a08302395&appType=2D&appName=%E9%A9%BE%E9%A9%B6%E8%88%B1-%E6%A6%82%E8%A7%88-%E5%9C%BA%E6%99%AF%E6%95%B4%E5%90%88",
   ecologicalCloudAllState: {"selectedBlock":""},
   VTypeProportion: {"curPercent":"--","targetPercent":"--","lastYearPercent":"--"},
   threeTypeProportion: {"curPercent":"--","targetPercent":"--","lastYearPercent":"--"},
   standardPercent: "--",
   standardSection: {"standardCount":"--","totalCount":"/--"},
   tabSelect: "monthly",
   monitorTime: "",
   latestTimeStr: "",
   sectionCardData: [{"title":"断面总数","code":"dmzsSectionWater","num":"--","unit":"个","color":"#00FFFF","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/section-total.png"},{"title":"优良断面","code":"yldmSectionWater","num":"--","unit":"个","color":"var(--sjyy-text-green)","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/section-good.png"},{"title":"劣V断面","code":"lvdmSectionWater","num":"--","unit":"个","color":"#FFCC00","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/section-bad.png"}],
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
            default: {"width":"400px","height":"52px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"secondTitleComponent",
cStyle:{"wrapper":{"default":{"width":"400px","height":"52px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/secondTitle",
componentName:"secondTitleComponent", 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"191px","height":"36px","left":"5px","top":"274px","backgroundImage":"var(--t-index-bg)","border":"1px solid","border-image":"var(--t-index-border) 1","animationName":"","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"191px","height":"36px","left":"5px","top":"274px","backgroundImage":"var(--t-index-bg)","border":"1px solid","border-image":"var(--t-index-border) 1","animationName":"","position":"unset"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"191px","height":"36px","left":"204px","top":"274px","backgroundImage":"var(--t-index-bg)","border":"1px solid","border-image":"var(--t-index-border) 1","animationName":"","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"191px","height":"36px","left":"204px","top":"274px","backgroundImage":"var(--t-index-bg)","border":"1px solid","border-image":"var(--t-index-border) 1","animationName":"","position":"unset"}}}, 
 },
},
tGradientShadowTextx0x3: {
defaultStyle: {
            default: {"width":"137px","height":"31px","position":"unset","left":"43px","top":"15px","fontFamily":"方正综艺","fontSize":"20px","color":"","textAlign":"left","backgroundColor":"","letterSpacing":"2px","paddingLeft":"0px","marginLeft":"0px","animationName":"","cursor":"auto"},
            
            },
 default: { 
 
label:"地表水质量",
cStyle:{"wrapper":{"default":{"width":"137px","height":"31px","position":"unset","left":"43px","top":"15px","fontFamily":"方正综艺","fontSize":"20px","color":"","textAlign":"left","backgroundColor":"","letterSpacing":"2px","paddingLeft":"0px","marginLeft":"0px","animationName":"","cursor":"auto"}},"textStyle":{"default":{"-webkit-text-fill-color":"transparent","-webkit-background-clip":"text","backgroundImage":"linear-gradient(rgba(255, 255, 255, 1),rgba(255, 255, 255, 1))","fontWeight":"300","color":"rgba(255, 255, 255, 1)","fontSize":"20px","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","fontFamily":"方正综艺","paddingLeft":"10px","paddingTop":"4px"}},"textShadowStyle":{"default":{"fontWeight":"bold","color":"","fontFamily":"方正综艺","paddingLeft":"10px","paddingTop":"4px"}}},
shadowStyle:{"blur":"8PX","color":"#00738A"}, 
 },
},
tTabsx0x4: {
defaultStyle: {
            default: {"position":"unset","width":"100px","height":"28px","backgroundColor":"rgba(0, 140, 255, 0)","fontSize":"14px","lineHeight":"26px","animationName":"","left":"299px","top":"14px"},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[{"label":"当月","name":"monthly"},{"label":"当年","name":"culmulate"}],
'model-value':"work",
tabPositionExtend:"top-start",
stretch:true,
cStyle:{"wrapper":{"default":{"position":"unset","width":"100px","height":"28px","backgroundColor":"rgba(0, 140, 255, 0)","fontSize":"14px","lineHeight":"26px","animationName":"","left":"299px","top":"14px"}},"itemWrapper":{"default":{"height":"28px","width":"68px","lineHeight":"28px","fontSize":"14px","color":"var(--t-text)","borderLeft":"1px none rgba(23,62,228,0)","borderTop":"1px none rgba(23,62,228,0)","borderRight":"1px none rgba(23,62,228,0)","borderBottom":"1px none rgba(23,62,228,0)","backgroundColor":"rgba(20, 112, 204, 0)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""},"active":{"fontSize":"14px","color":"var(--business-tab-active-text)","backgroundColor":"rgba(37, 156, 224, 0)","borderLeft":"0px none rgba(0,212,255,0.6)","borderTop":"0px none rgba(0,212,255,0.6)","borderRight":"0px none rgba(0,212,255,0.6)","borderBottom":"0px none rgba(0,212,255,0.6)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","box-shadow":"","backdropFilter":"blur(0px)","lineHeight":"28px"},"hover":{"color":"var(--business-tab-active-text)","lineHeight":"28px"}},"itemActiveBorder":{"active":{"backgroundColor":"rgba(255, 0, 0, 0)"},"default":{"borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"rgba(222, 233, 14, 0)"}},"itemLabel":{"default":{"color":"#fff"},"active":{"color":"#FFE8A8"},"hover":{"color":"#FFE8A8"}}},
activeTab:"monthly", 
 },
},
tListCardx0x5: {
defaultStyle: {
            default: {"width":"398px","height":"62px","position":"unset","left":"1px","top":"206px"},
            
            },
 default: { 
 
data:[{"title":"断面总数","code":"dmzsSectionWater","num":"--","unit":"个","color":"#00FFFF","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/section-total.png"},{"title":"优良断面","code":"yldmSectionWater","num":"--","unit":"个","color":"var(--sjyy-text-green)","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/section-good.png"},{"title":"劣V断面","code":"lvdmSectionWater","num":"--","unit":"个","color":"#FFCC00","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/section-bad.png"}],
spacingX:8,
col:3,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","selectIcon":"icon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"398px","height":"62px","position":"unset","left":"1px","top":"206px"}},"itemWrapper":{"default":{"width":"auto","height":"62px","padding":"0 20px 0px 16px","textAlign":"right","lineHeight":"18px","backgroundImage":"var(--t-index-bg)","border":"1px solid","border-image":"var(--t-index-border) 1","backgroundColor":"rgba(26, 27, 31, 0)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","cursor":"pointer"},"active":{"cursor":"pointer"}},"num":{"default":{"fontSize":"24px","fontWeight":"700","marginRight":"6px","lineHeight":"24px","fontFamily":"DIN-black","max-width":"60px","overflow":"hidden"}},"numBox":{"default":{"marginTop":"5px","justifyContent":"flex-end"}},"title":{"default":{"color":"var(--t-text)","fontSize":"14px","lineHeight":"14px"}},"unit":{"default":{"color":"var(--t-color-text-green)","fontSize":"14px"}},"icon":{"default":{"width":"32px","height":"32px"}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"58px","height":"36px","color":"var(--sjyy-text)","top":"274px","left":"216px","fontSize":"14px","lineHeight":"36px","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
label:"达标率",
editable:false,
cStyle:{"wrapper":{"default":{"width":"58px","height":"36px","color":"var(--sjyy-text)","top":"274px","left":"216px","fontSize":"14px","lineHeight":"36px","animationName":"","cursor":"pointer"}}}, 
 },
},
tTextUnitx0x7: {
defaultStyle: {
            default: {"width":"112px","height":"36px","position":"unset","left":"74px","top":"274px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"112px","height":"36px","position":"unset","left":"74px","top":"274px"}},"text":{"default":{"fontSize":"20px","fontWeight":"700","fontFamily":"DIN-black","color":"var(--sjyy-text-green)","lineHeight":"36px"}},"unit":{"default":{"fontSize":"20px","lineHeight":"36px","fontWeight":"700","fontFamily":"DIN-black","color":"var(--t-color-text-green)","marginLeft":"2px"}}},
justify:"flex-end",
align:"flex-end",
content:"--",
unit:"/--",
showOverflowTooltip:false, 
 },
},
tTextUnitx0x8: {
defaultStyle: {
            default: {"width":"112px","height":"36px","position":"unset","left":"278px","top":"274px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"112px","height":"36px","position":"unset","left":"278px","top":"274px","animationName":""}},"text":{"default":{"fontSize":"20px","fontWeight":"700","fontFamily":"DIN-black","color":"var(--sjyy-text-green)","lineHeight":"36px"}},"unit":{"default":{"fontSize":"14px","lineHeight":"36px","fontWeight":"400","fontFamily":"微软雅黑","color":"var(--t-color-text-green)","marginLeft":"2px"}}},
justify:"flex-end",
align:"flex-end",
content:"--",
unit:"%",
showOverflowTooltip:false, 
 },
},
tRectx0x9: {
defaultStyle: {
            default: {"width":"191px","height":"138px","left":"5px","top":"59px","backgroundImage":"var(--t-index-bg)","border":"1px solid","border-image":"var(--t-index-border) 1","animationName":"","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"191px","height":"138px","left":"5px","top":"59px","backgroundImage":"var(--t-index-bg)","border":"1px solid","border-image":"var(--t-index-border) 1","animationName":"","position":"unset"}}}, 
 },
},
tTextx0x10: {
defaultStyle: {
            default: {"width":"148px","height":"16px","color":"var(--t-text)","position":"unset","left":"16px","top":"70px","fontSize":"16px","fontWeight":"700","lineHeight":"16px","cursor":"pointer"},
            
            },
 default: { 
 
label:"达到或优于Ⅲ类比例",
editable:false,
cStyle:{"wrapper":{"default":{"width":"148px","height":"16px","color":"var(--t-text)","position":"unset","left":"16px","top":"70px","fontSize":"16px","fontWeight":"700","lineHeight":"16px","cursor":"pointer"}}}, 
 },
},
tRectx0x11: {
defaultStyle: {
            default: {"width":"191px","height":"138px","left":"204px","top":"59px","backgroundImage":"var(--t-index-bg)","border":"1px solid","border-image":"var(--t-index-border) 1","animationName":"","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"191px","height":"138px","left":"204px","top":"59px","backgroundImage":"var(--t-index-bg)","border":"1px solid","border-image":"var(--t-index-border) 1","animationName":"","position":"unset"}}}, 
 },
},
tCirclex0x12: {
defaultStyle: {
            default: {"width":"92px","height":"92px","backgroundColor":"","borderLeft":"8px solid rgba(0,0,0,0.2)","borderTop":"8px solid rgba(0,0,0,0.2)","borderRight":"8px solid rgba(0,0,0,0.2)","borderBottom":"8px solid rgba(0,0,0,0.2)","position":"unset","left":"18px","top":"96px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"92px","height":"92px","backgroundColor":"","borderLeft":"8px solid rgba(0,0,0,0.2)","borderTop":"8px solid rgba(0,0,0,0.2)","borderRight":"8px solid rgba(0,0,0,0.2)","borderBottom":"8px solid rgba(0,0,0,0.2)","position":"unset","left":"18px","top":"96px"}}}, 
 },
},
tCirclex0x13: {
defaultStyle: {
            default: {"width":"92px","height":"92px","backgroundColor":"","borderLeft":"8px solid rgba(0,0,0,0.2)","borderTop":"8px solid rgba(0,0,0,0.2)","borderRight":"8px solid rgba(0,0,0,0.2)","borderBottom":"8px solid rgba(0,0,0,0.2)","position":"unset","left":"222px","top":"96px","animationName":"","color":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"92px","height":"92px","backgroundColor":"","borderLeft":"8px solid rgba(0,0,0,0.2)","borderTop":"8px solid rgba(0,0,0,0.2)","borderRight":"8px solid rgba(0,0,0,0.2)","borderBottom":"8px solid rgba(0,0,0,0.2)","position":"unset","left":"222px","top":"96px","animationName":"","color":""}}}, 
 },
},
tChartPiePercentx0x14: {
defaultStyle: {
            default: {"height":"88px","width":"88px","position":"unset","left":"20px","top":"98px"},
            
            },
pie: computed(() => activeChartTheme.value?.pie),
 default: { 
 
emptyImg:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/emptyImg.png",
data:"--",
seriesStyle:{"radius":["90%","98%"],"bgColor":"rgba(241, 241, 241, 0)","fontSize":0,"fontColor":"rgba(0, 0, 0, 0)","fontWeight":"normal","valueColor":"","startAngle":90,"clockwise":false},
cStyle:{"wrapper":{"default":{"height":"88px","width":"88px","position":"unset","left":"20px","top":"98px"}},"emptyContainer":{"default":{"display":"none"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"legend":{"show":false},"color":["#00B222"]})), 
 },
},
tChartPiePercentx0x15: {
defaultStyle: {
            default: {"height":"88px","width":"88px","position":"unset","left":"224px","top":"98px","animationName":""},
            
            },
pie: computed(() => activeChartTheme.value?.pie),
 default: { 
 
emptyImg:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/emptyImg.png",
data:"--",
seriesStyle:{"radius":["90%","98%"],"bgColor":"rgba(241, 241, 241, 0)","fontSize":0,"fontColor":"rgba(0, 0, 0, 0)","fontWeight":"normal","valueColor":"","startAngle":90,"clockwise":false},
cStyle:{"wrapper":{"default":{"height":"88px","width":"88px","position":"unset","left":"224px","top":"98px","animationName":""}},"emptyContainer":{"default":{"display":"none"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"legend":{"show":false},"color":["#BE2410"]})), 
 },
},
tTextx0x16: {
defaultStyle: {
            default: {"width":"50px","height":"12px","color":"var(--t-text)","fontSize":"12px","lineHeight":"12px","position":"unset","left":"128px","top":"99px"},
            
            },
 default: { 
 
label:"考核目标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"50px","height":"12px","color":"var(--t-text)","fontSize":"12px","lineHeight":"12px","position":"unset","left":"128px","top":"99px"}},"unit":{"default":{"fontSize":"12px"}}}, 
 },
},
tTextx0x17: {
defaultStyle: {
            default: {"width":"50px","height":"12px","color":"var(--t-text)","fontSize":"12px","lineHeight":"12px","position":"unset","left":"128px","top":"149px","animationName":""},
            
            },
 default: { 
 
label:"去年同期",
editable:false,
cStyle:{"wrapper":{"default":{"width":"50px","height":"12px","color":"var(--t-text)","fontSize":"12px","lineHeight":"12px","position":"unset","left":"128px","top":"149px","animationName":""}},"unit":{"default":{"fontSize":"12px"}}}, 
 },
},
tTextx0x18: {
defaultStyle: {
            default: {"width":"50px","height":"12px","color":"var(--t-text)","fontSize":"12px","lineHeight":"12px","position":"unset","left":"332px","top":"99px","animationName":""},
            
            },
 default: { 
 
label:"考核目标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"50px","height":"12px","color":"var(--t-text)","fontSize":"12px","lineHeight":"12px","position":"unset","left":"332px","top":"99px","animationName":""}},"unit":{"default":{"fontSize":"12px"}}}, 
 },
},
tRectx0x19: {
defaultStyle: {
            default: {"width":"71px","height":"71px","backgroundImage":"var(--jsc-circle)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"232.5px","top":"106.5px","animationName":"customa7eee3e28af38","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"71px","height":"71px","backgroundImage":"var(--jsc-circle)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"232.5px","top":"106.5px","animationName":"customa7eee3e28af38","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tRectx0x20: {
defaultStyle: {
            default: {"width":"105px","height":"86px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-03-13/58bfff9b37be4d5692a92c756335e36a.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"215px","top":"99px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"105px","height":"86px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-03-13/58bfff9b37be4d5692a92c756335e36a.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"215px","top":"99px","animationName":""}}}, 
 },
},
tTextx0x21: {
defaultStyle: {
            default: {"width":"50px","height":"12px","color":"var(--t-text)","fontSize":"12px","lineHeight":"12px","position":"unset","left":"332px","top":"149px","animationName":""},
            
            },
 default: { 
 
label:"去年同期",
editable:false,
cStyle:{"wrapper":{"default":{"width":"50px","height":"12px","color":"var(--t-text)","fontSize":"12px","lineHeight":"12px","position":"unset","left":"332px","top":"149px","animationName":""}},"unit":{"default":{"fontSize":"12px"}}}, 
 },
},
tTextUnitx0x22: {
defaultStyle: {
            default: {"width":"55px","height":"16px","position":"unset","left":"128px","top":"118px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"55px","height":"16px","position":"unset","left":"128px","top":"118px"}},"text":{"default":{"fontSize":"16px","fontFamily":"DIN-black","fontWeight":"500","color":"var(--t-text)","lineHeight":"16px"}},"unit":{"default":{"fontSize":"14px","lineHeight":"16px","color":"var(--t-color-text-green)","marginLeft":"2px"}}},
justify:"flex-start",
align:"flex-end",
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x23: {
defaultStyle: {
            default: {"width":"55px","height":"16px","position":"unset","left":"128px","top":"168px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"55px","height":"16px","position":"unset","left":"128px","top":"168px","animationName":""}},"text":{"default":{"fontSize":"16px","fontFamily":"DIN-black","fontWeight":"500","color":"var(--t-text)","lineHeight":"16px"}},"unit":{"default":{"fontSize":"14px","lineHeight":"16px","color":"var(--t-color-text-green)","marginLeft":"2px"}}},
justify:"flex-start",
align:"flex-end",
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextx0x24: {
defaultStyle: {
            default: {"width":"148px","height":"16px","color":"var(--t-text)","position":"unset","left":"220px","top":"70px","fontSize":"16px","fontWeight":"700","lineHeight":"16px","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
label:"劣Ⅴ类占比",
editable:false,
cStyle:{"wrapper":{"default":{"width":"148px","height":"16px","color":"var(--t-text)","position":"unset","left":"220px","top":"70px","fontSize":"16px","fontWeight":"700","lineHeight":"16px","animationName":"","cursor":"pointer"}}}, 
 },
},
tTextUnitx0x25: {
defaultStyle: {
            default: {"width":"55px","height":"16px","position":"unset","left":"332px","top":"118px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"55px","height":"16px","position":"unset","left":"332px","top":"118px","animationName":""}},"text":{"default":{"fontSize":"16px","fontFamily":"DIN-black","fontWeight":"500","color":"var(--t-text)","lineHeight":"16px"}},"unit":{"default":{"fontSize":"14px","lineHeight":"16px","color":"var(--t-color-text-green)","marginLeft":"2px"}}},
justify:"flex-start",
align:"flex-end",
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x26: {
defaultStyle: {
            default: {"width":"55px","height":"16px","position":"unset","left":"332px","top":"168px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"55px","height":"16px","position":"unset","left":"332px","top":"168px","animationName":""}},"text":{"default":{"fontSize":"16px","fontFamily":"DIN-black","fontWeight":"500","color":"var(--t-text)","lineHeight":"16px"}},"unit":{"default":{"fontSize":"14px","lineHeight":"16px","color":"var(--t-color-text-green)","marginLeft":"2px"}}},
justify:"flex-start",
align:"flex-end",
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tRectx0x27: {
defaultStyle: {
            default: {"width":"105px","height":"86px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-03-13/58bfff9b37be4d5692a92c756335e36a.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"11px","top":"98px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"105px","height":"86px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-03-13/58bfff9b37be4d5692a92c756335e36a.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"11px","top":"98px","animationName":""}}}, 
 },
},
tRectx0x28: {
defaultStyle: {
            default: {"width":"71px","height":"71px","backgroundImage":"var(--jsc-circle)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"28.5px","top":"106.5px","animationName":"custom2454ba16dd9c1","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"71px","height":"71px","backgroundImage":"var(--jsc-circle)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"28.5px","top":"106.5px","animationName":"custom2454ba16dd9c1","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tRectx0x30: {
defaultStyle: {
            default: {"width":"125px","height":"62px","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","position":"unset","left":"139px","top":"206px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"125px","height":"62px","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","position":"unset","left":"139px","top":"206px","animationName":""}}}, 
 },
},
tRectx0x31: {
defaultStyle: {
            default: {"width":"123px","height":"62px","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","position":"unset","left":"272px","top":"206px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"123px","height":"62px","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","position":"unset","left":"272px","top":"206px","animationName":""}}}, 
 },
},
tRectx0x33: {
defaultStyle: {
            default: {"width":"191px","height":"138px","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","position":"unset","left":"204px","top":"59px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"191px","height":"138px","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","position":"unset","left":"204px","top":"59px","animationName":""}}}, 
 },
},
tTextUnitx0x34: {
defaultStyle: {
            default: {"width":"60px","height":"20px","position":"unset","left":"238px","top":"131px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"60px","height":"20px","position":"unset","left":"238px","top":"131px","animationName":""}},"text":{"default":{"fontSize":"20px","fontFamily":"DIN-black","color":"var(--t-text)","lineHeight":"20px","fontWeight":"700"}},"unit":{"default":{"fontSize":"12px","color":"var(--t-color-text-green)"}}},
justify:"center",
align:"flex-end",
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x35: {
defaultStyle: {
            default: {"width":"60px","height":"20px","position":"unset","left":"34px","top":"131px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"60px","height":"20px","position":"unset","left":"34px","top":"131px"}},"text":{"default":{"fontSize":"20px","fontFamily":"DIN-black","color":"var(--t-text)","lineHeight":"20px","fontWeight":"700"}},"unit":{"default":{"fontSize":"12px","color":"var(--t-color-text-green)"}}},
justify:"center",
align:"flex-end",
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tRectx0x36: {
defaultStyle: {
            default: {"width":"191px","height":"36px","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","animationName":"","left":"204px","top":"274px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"191px","height":"36px","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","animationName":"","left":"204px","top":"274px"}}}, 
 },
},
tRectx0x37: {
defaultStyle: {
            default: {"width":"191px","height":"36px","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","left":"5px","top":"274px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"191px","height":"36px","box-shadow":"rgba(255, 232, 168, 1) 0px 0px 10px 0px inset","borderLeft":"1px solid #FFE8A8","borderTop":"1px solid #FFE8A8","borderRight":"1px solid #FFE8A8","borderBottom":"1px solid #FFE8A8","pointerEvents":"none","left":"5px","top":"274px"}}}, 
 },
},
tTextx0x38: {
defaultStyle: {
            default: {"width":"58px","height":"36px","color":"var(--sjyy-text)","top":"274px","left":"12px","fontSize":"14px","lineHeight":"36px","cursor":"pointer"},
            
            },
 default: { 
 
label:"达标断面",
editable:false,
cStyle:{"wrapper":{"default":{"width":"58px","height":"36px","color":"var(--sjyy-text)","top":"274px","left":"12px","fontSize":"14px","lineHeight":"36px","cursor":"pointer"}}}, 
 },
},
});
const changeCardSelect = (item) => {
/**
 * item 卡片选中单项
 */

// dmzsSectionWater-断面总数,yldmSectionWater-优良断面,lvdmSectionWater-劣V断面
if (item.code !== state.ecologicalCloudAllState.selectedBlock) {
  state.ecologicalCloudAllState.selectedBlock = item.code;
  // 关闭实时数据侧边页面
  state.closeRealtimeSide();
  sendSectionMes();
}
};
const resetData = () => {
// 重置数据
state.VTypeProportion = {
  curPercent: '--',
  targetPercent: '--',
  lastYearPercent: '--',
};
state.threeTypeProportion = {
  curPercent: '--',
  targetPercent: '--',
  lastYearPercent: '--',
};
state.standardSection = {
  standardCount: '--',
  totalCount: '/--',
};
state.standardPercent = '--';
state.sectionCardData[0].num = '--';
state.sectionCardData[1].num = '--';
state.sectionCardData[2].num = '--';
};
const getProvider = () => {
// 生态云整体-state
const wholeRootData = inject('ecologicalCloudAllState');
state.ecologicalCloudAllState = wholeRootData;
// 引入生态云整体（父级页面）的方法，并赋值给state对应的变量，调用直接state.xxx()
state.removeExistedMapScenes = inject('removeExistedMapScenes');
state.closeRealtimeSide = inject('closeRealtimeSide');
};
const handleProportionTextClick = (value) => {
if (value !== state.ecologicalCloudAllState.selectedBlock) {
  state.ecologicalCloudAllState.selectedBlock = value;
  // 关闭实时数据侧边页面
  state.closeRealtimeSide();
  sendTypeProportionMes();
}
};
const watchValues = () => {
watch(() => global.REGION_CODE, () => {
  sendTypeProportionMes();
  sendSectionMes();
});
};
const sendTypeProportionMes = () => {
const regionLevelText = getRegionLevel(global.REGION_CODE);
const indicatorMap = {
  // 达到或优于Ⅲ类比例
  'threeTypeProportionWater': '3',
  // 劣Ⅴ类比例
  'VTypeProportionWater': '4'
}
const selectedIndicatorCode = indicatorMap[state.ecologicalCloudAllState.selectedBlock];

function sendChangeAllStatusMes(indicatorCode) {
  /**
   * @params indicatorCode 指标
   */
  const theme = global.theme === '蓝色主题' ? 'blue' : 'green';
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: 'changeAllStatus',
    data: {
      indicator: indicatorCode, // 指标
      time: state.monitorTime, // 时间
      dateType: state.tabSelect,//时间类型，单月/累计(单月monthly/累计culmulate)
      REGION_NAME: global.REGION_NAME, // 行政区名称，非必须
      REGION_CODE: global.REGION_CODE, // 行政区编码
      theme: theme,
      dataSource: 'sty', // 如果是生态云发送的消息，加上这个值
    },
  });
}

// 选中两个比例的且实时数据按钮未选中
if (
  state.ecologicalCloudAllState.selectedBlock
  && state.ecologicalCloudAllState.selectedBlock.endsWith('ProportionWater')
  && !state.ecologicalCloudAllState.realtimeBtnActive
  ) {
  if (regionLevelText === 'province') {
    state.ecologicalCloudAllState.isProportionSendAppAR = false;
    sendChangeAllStatusMes(selectedIndicatorCode);
  } else if (regionLevelText === 'city' || regionLevelText === 'county') {
    if (!state.ecologicalCloudAllState.isProportionSendAppAR) {
      // 先移除，再加载
      // 引入生态云整体（父级页面）的方法，并赋值给state对应的变量，调用直接state.xxx()
      if (state.removeExistedMapScenes) {
        state.removeExistedMapScenes();
      }

      setTimeout(() => {
        rootData.rootSocket.emit('message', {
          room: global.socketRoom, // 房间号
          type: 'setAppAR', // 消息名称
          data: [
            {
              resCode: 'water',
              resName: '水环境',
              opType: 'add',
              appURL: state.proportionAppURL,
            }
          ],
        });
      }, 500);

      global.mapChangeAllStatusParams = {
        indicator: selectedIndicatorCode, // 指标
        time: state.monitorTime,
        dateType: state.tabSelect,
        rendType: 'idw',
      };
      state.ecologicalCloudAllState.isProportionSendAppAR = true;
      // 其他是否切换场景置为false，以便再次点击对应内容的时候切换对应的二维场景
      state.ecologicalCloudAllState.isExcellentRateSendAR = false;
      state.ecologicalCloudAllState.isPollutionConcentrationSendAR = false;
      state.ecologicalCloudAllState.isSectionSendAppAR = false;
      state.ecologicalCloudAllState.isPwxkTypeSendAppAR = false;
      return;
    }
    sendChangeAllStatusMes(selectedIndicatorCode);
  }
}

};
const sendSectionMes = () => {
const regionLevelText = getRegionLevel(global.REGION_CODE);

const indicatorMap = {
  // 断面总数
  'dmzsSectionWater': '0,1,2,3,4,5,6',
  // 优良断面
  'yldmSectionWater': '1,2,3',
  // 劣Ⅴ类断面
  'lvdmSectionWater': '6',
};
const waterLevelTypeMap = {
  // 达标断面
  'standardSectionWater': 'standard',
  // 达标率
  'standardPercentSectionWater': 'standard'
};
const selectedIndicatorCode = indicatorMap[state.ecologicalCloudAllState.selectedBlock] || '';
const waterLevelTypeCode = waterLevelTypeMap[state.ecologicalCloudAllState.selectedBlock] || 'waterLevel';
function sendChangeAllStatusMes(indicatorCode, waterQualityLevel, waterLevelType) {
  /**
   * @params indicatorCode 指标
   * @params waterQualityLevel 水质级别
   * @params waterLevelType 渲染模版类型
   */
  const theme = global.theme === '蓝色主题' ? 'blue' : 'green';
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: 'changeAllStatus',
    data: {
      indicator: indicatorCode, // 指标
      MONITORTIME: state.monitorTime, // 时间
      ASSESSTYPE: state.tabSelect,//时间类型，单月/累计(单月monthly/累计culmulate)
      CODE_WATERQUALITYLEVELS: waterQualityLevel || '', //水质级别
      waterLevelType: waterLevelType || '', //渲染模版类型：waterLevel-水质级别，standard-达标情况
      REGION_NAME: global.REGION_NAME, // 行政区名称，非必须
      REGION_CODE: global.REGION_CODE, // 行政区编码
      theme: theme,
      dataSource: 'sty', // 如果是生态云发送的消息，加上这个值
    },
  });
}

// 选中断面的且实时数据按钮未选中
if (
  state.ecologicalCloudAllState.selectedBlock
  && state.ecologicalCloudAllState.selectedBlock.endsWith('SectionWater')
  && !state.ecologicalCloudAllState.realtimeBtnActive
) {
  if (regionLevelText === 'province') {
    state.ecologicalCloudAllState.isSectionSendAppAR = false;
    global.toolType = 'waterToolComponent';
    global.toolName = '水环境-地表水-手工监测断面';
    global.isMapTool = true;
    global.isTool = true;
    sendChangeAllStatusMes(selectedIndicatorCode, selectedIndicatorCode, waterLevelTypeCode);
  } else if (regionLevelText === 'city' || regionLevelText === 'county') {
    global.isMapTool = false;
    if (!state.ecologicalCloudAllState.isSectionSendAppAR) {
      // 先移除，再加载
      // 引入生态云整体（父级页面）的方法，并赋值给state对应的变量，调用直接state.xxx()
      if (state.removeExistedMapScenes) {
        state.removeExistedMapScenes();
      }

      setTimeout(() => {
        rootData.rootSocket.emit('message', {
          room: global.socketRoom, // 房间号
          type: 'setAppAR', // 消息名称
          data: [
            {
              resCode: 'water',
              resName: '水环境',
              opType: 'add',
              appURL: state.sectionAppURL,
            }
          ],
        });
      }, 500);

      // 改变全局参数
      global.mapChangeAllStatusParams = {
        indicator: selectedIndicatorCode, // 指标
        MONITORTIME: state.monitorTime,
        ASSESSTYPE: state.tabSelect,
        CODE_WATERQUALITYLEVELS: selectedIndicatorCode,
        waterLevelType: waterLevelTypeCode,
        // rendType: 'idw',
      };
      state.ecologicalCloudAllState.isSectionSendAppAR = true;
      // 其他是否切换场景置为false，以便再次点击对应内容的时候切换对应的二维场景
      state.ecologicalCloudAllState.isExcellentRateSendAR = false;
      state.ecologicalCloudAllState.isPollutionConcentrationSendAR = false;
      state.ecologicalCloudAllState.isProportionSendAppAR = false;
      state.ecologicalCloudAllState.isPwxkTypeSendAppAR = false;

      return;
    }
    sendChangeAllStatusMes(selectedIndicatorCode, selectedIndicatorCode, waterLevelTypeCode);
  }
}

};
const handleSectionTextClick = (value) => {
// standardSectionWater-达标断面,standardPercentSectionWater-达标率
if (value !== state.ecologicalCloudAllState.selectedBlock) {
  state.ecologicalCloudAllState.selectedBlock = value;
  // 关闭实时数据侧边页面
  state.closeRealtimeSide();
  sendSectionMes();
}
};
const handleTabClick = (item) => {
if (item.name !== state.tabSelect) {
  state.tabSelect = item.name;
  // 设置默认选中
  state.ecologicalCloudAllState.selectedBlock = 'threeTypeProportionWater';
  // 关闭实时数据侧边页面
  state.closeRealtimeSide();
  resetData();
  sendTypeProportionMes();
  sendSectionMes();
}
};
const oncardClick1741843633029 = (item) => {
// 执行自定义方法
changeCardSelect(item);
};
const ontabClick1741946258388 = (data) => {
// 执行自定义方法
handleTabClick(data);
};
const onclick1742373640638 = () => {
// 执行自定义方法
handleProportionTextClick("threeTypeProportionWater");
};
const onclick1742373673976 = () => {
// 执行自定义方法
handleProportionTextClick("VTypeProportionWater");
};
const onclick1742377730623 = () => {
// 执行自定义方法
handleSectionTextClick("standardSectionWater");
};
const onclick1742377862828 = () => {
// 执行自定义方法
handleSectionTextClick("standardPercentSectionWater");
};
// 接口函数
const getLatestTime = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"CODE_WQDATASOURCETYPE":"surfaceWater","REGION_CODE":global.REGION_CODE,"interfaceId":"5f5f4baf49bb7379158533c9ee1f62a0"},}).then((res) => {
     // 成功的操作
     const { data } = res.data;
if (data) {
  state.latestTimeStr = data.MONITORTIME || new Date();
} else {
  state.latestTimeStr = new Date();
}
state.monitorTime = dateFormat(state.latestTimeStr, 'yyyy-MM');
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.latestTimeStr = new Date();
state.monitorTime = dateFormat(state.latestTimeStr, 'yyyy-MM');
      reject(error);
    });
  });
};
// 初始请求，调取接口
getLatestTime();
// 接口函数
const getDetailData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"MONITORTYPE":"1","ASSESSTYPE":state.tabSelect,"CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTIME":state.monitorTime,"REGION_CODE":global.REGION_CODE,"interfaceId":"5b68a402ee2000580080829b4fc68a02"},}).then((res) => {
     // 成功的操作
     const { data } = res.data;
if (data) {
  state.threeTypeProportion = {
    curPercent: handleNoVal(Number(data.GOODRATE)),
    targetPercent: handleNoVal(data.ASSESS_GOOD_RATE),
    lastYearPercent: handleNoVal(data.GOODRATE_LAST),
  };
  state.VTypeProportion = {
    curPercent: handleNoVal(Number(data.BADRATE)),
    targetPercent: handleNoVal(data.ASSESS_BAD_RATE),
    lastYearPercent: handleNoVal(data.BADRATE_LAST),
  };
  state.standardSection = {
    standardCount: handleNoVal(data.STANDARDPOINTCOUNT),
    totalCount: `/${handleNoVal(data.ACTUALPOINTCOUNT)}`,
  };
  state.standardPercent = handleNoVal(data.STANDARDRATE);
  state.sectionCardData[0].num = handleNoVal(data.TOTAL_POINTCOUNT);
  state.sectionCardData[1].num = handleNoVal(data.GOODPOINTCOUNT);
  state.sectionCardData[2].num = handleNoVal(data.BADPOINTCOUNT);
}else{
  resetData();
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      resetData();
      reject(error);
    });
  });
};
// 监听变量，调取接口
watch(() => [state.tabSelect,state.monitorTime,global.REGION_CODE], () => {
getDetailData();
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-surfaceWaterQuality', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
// 执行自定义方法
watchValues();
/* 接收socket.io消息 */
const onSocketChangeec587b2481894b4db8ea = function (data) {
if(data.type === "closeStyRealtime"){
try{
// 执行自定义方法
sendTypeProportionMes();
// 执行自定义方法
sendSectionMes();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangeec587b2481894b4db8ea);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangeec587b2481894b4db8ea);
});
onMounted(() => {
setPageScale('t-l-c-surfaceWaterQuality', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tGradientShadowTextx0x3ComputedData = computed(() => _.merge({}, componentState.tGradientShadowTextx0x3.default, componentState.tGradientShadowTextx0x3?.[state.screenSize]));

 const tTabsx0x4ComputedData = computed(() => _.merge({}, componentState.tTabsx0x4.default, componentState.tTabsx0x4?.[state.screenSize]));

 const tListCardx0x5ComputedData = computed(() => _.merge({}, componentState.tListCardx0x5.default, componentState.tListCardx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tTextUnitx0x7ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x7.default, componentState.tTextUnitx0x7?.[state.screenSize]));

 const tTextUnitx0x8ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x8.default, componentState.tTextUnitx0x8?.[state.screenSize]));

 const tRectx0x9ComputedData = computed(() => _.merge({}, componentState.tRectx0x9.default, componentState.tRectx0x9?.[state.screenSize]));

 const tTextx0x10ComputedData = computed(() => _.merge({}, componentState.tTextx0x10.default, componentState.tTextx0x10?.[state.screenSize]));

 const tRectx0x11ComputedData = computed(() => _.merge({}, componentState.tRectx0x11.default, componentState.tRectx0x11?.[state.screenSize]));

 const tCirclex0x12ComputedData = computed(() => _.merge({}, componentState.tCirclex0x12.default, componentState.tCirclex0x12?.[state.screenSize]));

 const tCirclex0x13ComputedData = computed(() => _.merge({}, componentState.tCirclex0x13.default, componentState.tCirclex0x13?.[state.screenSize]));

 const tChartPiePercentx0x14ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartPiePercentx0x14.default, componentState.tChartPiePercentx0x14?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tChartPiePercentx0x15ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartPiePercentx0x15.default, componentState.tChartPiePercentx0x15?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tTextx0x16ComputedData = computed(() => _.merge({}, componentState.tTextx0x16.default, componentState.tTextx0x16?.[state.screenSize]));

 const tTextx0x17ComputedData = computed(() => _.merge({}, componentState.tTextx0x17.default, componentState.tTextx0x17?.[state.screenSize]));

 const tTextx0x18ComputedData = computed(() => _.merge({}, componentState.tTextx0x18.default, componentState.tTextx0x18?.[state.screenSize]));

 const tRectx0x19ComputedData = computed(() => _.merge({}, componentState.tRectx0x19.default, componentState.tRectx0x19?.[state.screenSize]));

 const tRectx0x20ComputedData = computed(() => _.merge({}, componentState.tRectx0x20.default, componentState.tRectx0x20?.[state.screenSize]));

 const tTextx0x21ComputedData = computed(() => _.merge({}, componentState.tTextx0x21.default, componentState.tTextx0x21?.[state.screenSize]));

 const tTextUnitx0x22ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x22.default, componentState.tTextUnitx0x22?.[state.screenSize]));

 const tTextUnitx0x23ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x23.default, componentState.tTextUnitx0x23?.[state.screenSize]));

 const tTextx0x24ComputedData = computed(() => _.merge({}, componentState.tTextx0x24.default, componentState.tTextx0x24?.[state.screenSize]));

 const tTextUnitx0x25ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x25.default, componentState.tTextUnitx0x25?.[state.screenSize]));

 const tTextUnitx0x26ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x26.default, componentState.tTextUnitx0x26?.[state.screenSize]));

 const tRectx0x27ComputedData = computed(() => _.merge({}, componentState.tRectx0x27.default, componentState.tRectx0x27?.[state.screenSize]));

 const tRectx0x28ComputedData = computed(() => _.merge({}, componentState.tRectx0x28.default, componentState.tRectx0x28?.[state.screenSize]));

 const tRectx0x30ComputedData = computed(() => _.merge({}, componentState.tRectx0x30.default, componentState.tRectx0x30?.[state.screenSize]));

 const tRectx0x31ComputedData = computed(() => _.merge({}, componentState.tRectx0x31.default, componentState.tRectx0x31?.[state.screenSize]));

 const tRectx0x33ComputedData = computed(() => _.merge({}, componentState.tRectx0x33.default, componentState.tRectx0x33?.[state.screenSize]));

 const tTextUnitx0x34ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x34.default, componentState.tTextUnitx0x34?.[state.screenSize]));

 const tTextUnitx0x35ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x35.default, componentState.tTextUnitx0x35?.[state.screenSize]));

 const tRectx0x36ComputedData = computed(() => _.merge({}, componentState.tRectx0x36.default, componentState.tRectx0x36?.[state.screenSize]));

 const tRectx0x37ComputedData = computed(() => _.merge({}, componentState.tRectx0x37.default, componentState.tRectx0x37?.[state.screenSize]));

 const tTextx0x38ComputedData = computed(() => _.merge({}, componentState.tTextx0x38.default, componentState.tTextx0x38?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tComponentx0x0ComputedData,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tGradientShadowTextx0x3ComputedData,
tTabsx0x4ComputedData,
tListCardx0x5ComputedData,
tTextx0x6ComputedData,
tTextUnitx0x7ComputedData,
tTextUnitx0x8ComputedData,
tRectx0x9ComputedData,
tTextx0x10ComputedData,
tRectx0x11ComputedData,
tCirclex0x12ComputedData,
tCirclex0x13ComputedData,
tChartPiePercentx0x14ComputedData,
tChartPiePercentx0x15ComputedData,
tTextx0x16ComputedData,
tTextx0x17ComputedData,
tTextx0x18ComputedData,
tRectx0x19ComputedData,
tRectx0x20ComputedData,
tTextx0x21ComputedData,
tTextUnitx0x22ComputedData,
tTextUnitx0x23ComputedData,
tTextx0x24ComputedData,
tTextUnitx0x25ComputedData,
tTextUnitx0x26ComputedData,
tRectx0x27ComputedData,
tRectx0x28ComputedData,
tRectx0x30ComputedData,
tRectx0x31ComputedData,
tRectx0x33ComputedData,
tTextUnitx0x34ComputedData,
tTextUnitx0x35ComputedData,
tRectx0x36ComputedData,
tRectx0x37ComputedData,
tTextx0x38ComputedData,
ontabClick1741946258388,
oncardClick1741843633029,
onclick1742377862828,
onclick1742373640638,
onclick1742373673976,
onclick1742377730623,
};
},
};