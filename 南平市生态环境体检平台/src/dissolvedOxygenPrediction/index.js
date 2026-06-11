window.dissolvedOxygenPredictionComponent = {
template: 
`<div id="t-l-c-dissolvedOxygenPrediction" class="t-l-c-dissolvedOxygenPrediction" >` +
`<t-row id="t-row-12f5.ae7dd69ad" class="dissolvedOxygenPrediction-t-row-0-0"  :c-style="tRowx0x0ComputedData.cStyle" :gutter="tRowx0x0ComputedData.gutter" :justify="tRowx0x0ComputedData.justify" :align="tRowx0x0ComputedData.align">` +
`<t-col id="t-col-4292.5f9aba444" class="dissolvedOxygenPrediction-t-col-0-0-0"  :span="tColx0x0x0ComputedData.span" :offset="tColx0x0x0ComputedData.offset" :push="tColx0x0x0ComputedData.push" :pull="tColx0x0x0ComputedData.pull" :c-style="tColx0x0x0ComputedData.cStyle">` +
`</t-col>` +
`<t-col id="t-col-1135.218b5344e" class="dissolvedOxygenPrediction-t-col-0-0-1"  :span="tColx0x0x1ComputedData.span" :offset="tColx0x0x1ComputedData.offset" :push="tColx0x0x1ComputedData.push" :pull="tColx0x0x1ComputedData.pull" :c-style="tColx0x0x1ComputedData.cStyle">` +
`</t-col>` +
`<t-col id="t-col-7c0c.5412e7222" class="dissolvedOxygenPrediction-t-col-0-0-2"  :span="tColx0x0x2ComputedData.span" :offset="tColx0x0x2ComputedData.offset" :push="tColx0x0x2ComputedData.push" :pull="tColx0x0x2ComputedData.pull" :c-style="tColx0x0x2ComputedData.cStyle">` +
`<t-chart-design id="t-chart-design-c5c8.a4774dfbe" class="dissolvedOxygenPrediction-t-chart-design-0-0-2-0"  :empty-img="tChartDesignx0x0x2x0ComputedData.emptyImg" :c-style="tChartDesignx0x0x2x0ComputedData.cStyle" :options="replaceCssVariables(filterData(state.variationTrendData.chartOptions, componentPropBindingMap?.['t-chart-design-c5c8.a4774dfbe']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-chart-design>` +
`</t-col>` +
`<t-col id="t-col-07cf.05a8e8c47" class="dissolvedOxygenPrediction-t-col-0-0-3"  :span="tColx0x0x3ComputedData.span" :offset="tColx0x0x3ComputedData.offset" :push="tColx0x0x3ComputedData.push" :pull="tColx0x0x3ComputedData.pull" :c-style="tColx0x0x3ComputedData.cStyle">` +
`<t-table id="t-table-08de.61e675df4" class="dissolvedOxygenPrediction-t-table-0-0-3-0"  :height="tTablex0x0x3x0ComputedData.height" :stripe="tTablex0x0x3x0ComputedData.stripe" :border="tTablex0x0x3x0ComputedData.border" :auto-scroll="tTablex0x0x3x0ComputedData.autoScroll" :speed="tTablex0x0x3x0ComputedData.speed" :columns="tTablex0x0x3x0ComputedData.columns" :data="replaceCssVariables(filterData(state.tableData, componentPropBindingMap?.['t-table-08de.61e675df4']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x0x3x0ComputedData.defaultSort" :c-style="tTablex0x0x3x0ComputedData.cStyle">` +
`</t-table>` +
`</t-col>` +
`</t-row>` +
`<t-row id="t-row-6154.4ed2135d1" class="dissolvedOxygenPrediction-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align">` +
`</t-row>` +
`<t-component id="t-component-566a.7daef950a" class="dissolvedOxygenPrediction-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :loading="tComponentx0x2ComputedData.loading" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName" :page-id="tComponentx0x2ComputedData.pageId" :page-code="tComponentx0x2ComputedData.pageCode">` +
`</t-component>` +
`<t-text id="t-text-9a20.6469293a3" class="dissolvedOxygenPrediction-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle">` +
`</t-text>` +
`<t-row id="t-row-0f73.cf7be687e" class="dissolvedOxygenPrediction-t-row-0-4"  :c-style="tRowx0x4ComputedData.cStyle" :gutter="tRowx0x4ComputedData.gutter" :justify="tRowx0x4ComputedData.justify" :align="tRowx0x4ComputedData.align">` +
`<t-col id="t-col-a032.e90d917a2" class="dissolvedOxygenPrediction-t-col-0-4-0"  :span="tColx0x4x0ComputedData.span" :offset="tColx0x4x0ComputedData.offset" :push="tColx0x4x0ComputedData.push" :pull="tColx0x4x0ComputedData.pull" :c-style="tColx0x4x0ComputedData.cStyle">` +
`<t-text id="t-text-b6da.ea5c0e651" class="dissolvedOxygenPrediction-t-text-0-4-0-0"  :label="tTextx0x4x0x0ComputedData.label" :editable="tTextx0x4x0x0ComputedData.editable" :c-style="tTextx0x4x0x0ComputedData.cStyle">` +
`</t-text>` +
`<t-switch id="t-switch-914d.6251c8372" class="dissolvedOxygenPrediction-t-switch-0-4-0-1"  :value="replaceCssVariables(filterData(state.isBz, componentPropBindingMap?.['t-switch-914d.6251c8372']['value'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tSwitchx0x4x0x1ComputedData.cStyle" @change="onchange1769408639859">` +
`</t-switch>` +
`</t-col>` +
`<t-col id="t-col-cc2b.451f2d1f" class="dissolvedOxygenPrediction-t-col-0-4-1"  :span="tColx0x4x1ComputedData.span" :offset="tColx0x4x1ComputedData.offset" :push="tColx0x4x1ComputedData.push" :pull="tColx0x4x1ComputedData.pull" :c-style="tColx0x4x1ComputedData.cStyle">` +
`</t-col>` +
`<t-col id="t-col-d86d.1bd2b0f7f" class="dissolvedOxygenPrediction-t-col-0-4-2"  :span="tColx0x4x2ComputedData.span" :offset="tColx0x4x2ComputedData.offset" :push="tColx0x4x2ComputedData.push" :pull="tColx0x4x2ComputedData.pull" :c-style="tColx0x4x2ComputedData.cStyle">` +
`<t-select id="t-select-74eb.bb6a35c83" class="dissolvedOxygenPrediction-t-select-0-4-2-0"  :active-value="replaceCssVariables(filterData(state.selectedValue, componentPropBindingMap?.['t-select-74eb.bb6a35c83']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.options, componentPropBindingMap?.['t-select-74eb.bb6a35c83']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x4x2x0ComputedData.alias" :multiple="tSelectx0x4x2x0ComputedData.multiple" :placeholder="tSelectx0x4x2x0ComputedData.placeholder" :clearable="tSelectx0x4x2x0ComputedData.clearable" :disabled="tSelectx0x4x2x0ComputedData.disabled" :name="tSelectx0x4x2x0ComputedData.name" :autocomplete="tSelectx0x4x2x0ComputedData.autocomplete" :filterable="tSelectx0x4x2x0ComputedData.filterable" :no-match-text="tSelectx0x4x2x0ComputedData.no-match-text" :no-data-text="tSelectx0x4x2x0ComputedData.no-data-text" :c-style="tSelectx0x4x2x0ComputedData.cStyle" @change="onchange1770010190906">` +
`</t-select>` +
`</t-col>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-row-12f5.ae7dd69ad":{"attributeName":"tRowx0x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-4292.5f9aba444":{"attributeName":"tColx0x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-col-1135.218b5344e":{"attributeName":"tColx0x0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-col-7c0c.5412e7222":{"attributeName":"tColx0x0x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-design-c5c8.a4774dfbe":{"attributeName":"tChartDesignx0x0x2x0","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-col-07cf.05a8e8c47":{"attributeName":"tColx0x0x3","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-table-08de.61e675df4":{"attributeName":"tTablex0x0x3x0","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-row-6154.4ed2135d1":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-component-566a.7daef950a":{"attributeName":"tComponentx0x2","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-9a20.6469293a3":{"attributeName":"tTextx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-0f73.cf7be687e":{"attributeName":"tRowx0x4","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-a032.e90d917a2":{"attributeName":"tColx0x4x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-b6da.ea5c0e651":{"attributeName":"tTextx0x4x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-switch-914d.6251c8372":{"attributeName":"tSwitchx0x4x0x1","value":{"filters":[]},"cStyle":{"filters":[]}},"t-col-cc2b.451f2d1f":{"attributeName":"tColx0x4x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-4ef6.55e6c1845":{"attributeName":"tTabsBasex0x4x1x0"},"t-col-d86d.1bd2b0f7f":{"attributeName":"tColx0x4x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-select-74eb.bb6a35c83":{"attributeName":"tSelectx0x4x2x0","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}}};
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
   selectedValue: "",
   options: [],
   params: {"POINT_CODE":"","MONITORTIME":"","POLLUTE_CODE":"WO1009"},
   standardSeriesData: [],
   seriesData: [],
   variationTrendData: {"chartOptions":{"series":[]},"chartShow":true},
   tableData: [],
   isBz: true,
   activeTab: "7",
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
tRowx0x0: {
defaultStyle: {
            default: {"width":"100%","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"-1px","top":"2px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"-1px","top":"2px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x0x0: {
defaultStyle: {
            default: {"width":"100px","height":"28px","display":"flex","justifyContent":"center","alignItems":"center","background":"rgba(150, 30, 30, 0)","fillType":"color"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"28px","display":"flex","justifyContent":"center","alignItems":"center","background":"rgba(150, 30, 30, 0)","fillType":"color"}}}, 
 },
},
tColx0x0x1: {
defaultStyle: {
            default: {"width":"100px","height":"40px","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"40px","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tColx0x0x2: {
defaultStyle: {
            default: {"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingBottom":"20px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","display":"flex","justifyContent":"center","alignItems":"center","paddingBottom":"20px"}}}, 
 },
},
tChartDesignx0x0x2x0: {
defaultStyle: {
            default: {"minHeight":"260px","width":"100%","position":"unset","left":"0px","top":"79px","animationName":"","height":"500px"},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
cStyle:{"wrapper":{"default":{"minHeight":"260px","width":"100%","position":"unset","left":"0px","top":"79px","animationName":"","height":"500px"}},"emptyText":{"default":{"fontSize":"var(--text-size-14)","color":"var(--business-white)"}},"rowWrapper":{"default":{"height":"40%"}},"emptyImg":{"default":{"display":"none"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"series":[]})), 
 },
},
tColx0x0x3: {
defaultStyle: {
            default: {"width":"100px","height":"47%","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"47%","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tTablex0x0x3x0: {
defaultStyle: {
            default: {"width":"100%","height":"100%","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"100%",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"日期","key":"date","stateKey":"","infoKey":"","tooltipKey":"","style":{"fontStyle":{"lineHeight":"16px","fontSize":"var(--business-text-size-16)"}}},{"label":"指标预测值(mg/L)","key":"measuredValue","stateKey":"measuredValueStatus","infoKey":"","tooltipKey":"","type":"state","stateList":[{"name":"状态1","fontStyle":{"background":"#CCFFFF","fillType":"color","color":"rgba(0,0,0,1)","fontSize":"var(--business-text-size-16)","paddingLeft":"unset","paddingTop":"unset","paddingRight":"","paddingBottom":"unset","width":"40px","height":"","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomRightRadius":"2px","borderBottomLeftRadius":"2px"}},{"name":"状态2","fontStyle":{"background":"#00CCFF","fillType":"color","color":"rgba(0,0,0,1)","fontSize":"var(--business-text-size-16)","width":"40px","height":""}},{"name":"状态3","fontStyle":{"background":"#00FF00","fillType":"color","color":"rgba(0,0,0,1)","fontSize":"var(--business-text-size-16)","width":"40px","height":""}},{"name":"状态4","fontStyle":{"background":"#FFFF00","fillType":"color","color":"rgba(0,0,0,1)","fontSize":"var(--business-text-size-16)","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomRightRadius":"2px","borderBottomLeftRadius":"2px","width":"40px","height":""}},{"name":"状态5","fontStyle":{"background":"#E68C00","fillType":"color","color":"rgba(0,0,0,1)","fontSize":"var(--business-text-size-16)","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomRightRadius":"2px","borderBottomLeftRadius":"2px","width":"40px","height":""}},{"name":"状态6","fontStyle":{"background":"#FF0000","fillType":"color","color":"rgba(0,0,0,1)","fontSize":"var(--business-text-size-16)","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomRightRadius":"2px","borderBottomLeftRadius":"2px","width":"40px","height":""}},{"name":"状态7","fontStyle":{"background":"rgba(119, 119, 119, 1)","fillType":"color","color":"rgba(0,0,0,1)","fontSize":"var(--business-text-size-16)","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomRightRadius":"2px","borderBottomLeftRadius":"2px","width":"40px","height":""}},{"name":"-","fontStyle":{"background":"rgba(119, 119, 119, 0)","fillType":"color","color":"rgba(255, 255, 255, 1)","fontSize":"var(--business-text-size-16)","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomRightRadius":"2px","borderBottomLeftRadius":"2px","width":"40px","height":""}}]},{"label":"指标实测值(mg/L)","key":"oxygen","stateKey":"oxygenState","infoKey":"","tooltipKey":"","type":"state","stateList":[{"name":"状态1","fontStyle":{"background":"#CCFFFF","fillType":"color","color":"rgba(0,0,0,1)","fontSize":"var(--business-text-size-16)","paddingLeft":"5px","paddingTop":"unset","paddingRight":"5px","paddingBottom":"unset","width":"auto","height":"","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomRightRadius":"2px","borderBottomLeftRadius":"2px"}},{"name":"状态2","fontStyle":{"background":"#00CCFF","fillType":"color","color":"rgba(0,0,0,1)","fontSize":"var(--business-text-size-16)","width":"auto","height":"","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""}},{"name":"状态3","fontStyle":{"background":"#00FF00","fillType":"color","color":"rgba(0,0,0,1)","fontSize":"var(--business-text-size-16)","width":"auto","height":"","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""}},{"name":"状态4","fontStyle":{"background":"#FFFF00","fillType":"color","color":"rgba(0,0,0,1)","fontSize":"var(--business-text-size-16)","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomRightRadius":"2px","borderBottomLeftRadius":"2px","width":"auto","height":"","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""}},{"name":"状态5","fontStyle":{"background":"#E68C00","fillType":"color","color":"rgba(0,0,0,1)","fontSize":"var(--business-text-size-16)","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomRightRadius":"2px","borderBottomLeftRadius":"2px","width":"auto","height":"","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""}},{"name":"状态6","fontStyle":{"background":"#FF0000","fillType":"color","color":"rgba(0,0,0,1)","fontSize":"var(--business-text-size-16)","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomRightRadius":"2px","borderBottomLeftRadius":"2px","width":"auto","height":"","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""}},{"name":"状态7","fontStyle":{"background":"rgba(119, 119, 119, 1)","fillType":"color","color":"rgba(0,0,0,1)","fontSize":"var(--business-text-size-16)","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomRightRadius":"2px","borderBottomLeftRadius":"2px","width":"auto","height":"","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""}},{"name":"-","fontStyle":{"background":"rgba(119, 119, 119, 0)","fillType":"color","color":"rgba(255, 255, 255, 1)","fontSize":"var(--business-text-size-16)","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomRightRadius":"2px","borderBottomLeftRadius":"2px","width":"auto","height":"","paddingLeft":"5px","paddingTop":"","paddingRight":"5px","paddingBottom":""}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"100%","height":"100%","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tRowx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"28px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"0px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
name:"dialogTitleFirstBgWidthFitComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","position":"unset","left":"0px","top":"0px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"150px","height":"28px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"41px","top":"0px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"28px"},
            
            },
 default: { 
 
label:"指标预测信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"150px","height":"28px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"41px","top":"0px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"28px"}}}, 
 },
},
tRowx0x4: {
defaultStyle: {
            default: {"width":"100%","height":"30px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"1px","top":"46px","pointerEvents":"none","animationName":"","flexDirection":"row-reverse"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"30px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"1px","top":"46px","pointerEvents":"none","animationName":"","flexDirection":"row-reverse"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x4x0: {
defaultStyle: {
            default: {"width":"100px","height":"100%","display":"flex","justifyContent":"right","alignItems":"center"},
            
            },
 default: { 
 
span:8,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"100%","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tTextx0x4x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"736px","top":"337px","fontSize":"var(--text-size-14)","lineHeight":"22px","animationName":"","textAlign":"right","marginRight":"8px"},
            
            },
 default: { 
 
label:"标准值",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"736px","top":"337px","fontSize":"var(--text-size-14)","lineHeight":"22px","animationName":"","textAlign":"right","marginRight":"8px"}}}, 
 },
},
tSwitchx0x4x0x1: {
defaultStyle: {
            default: {"width":"32px","height":"24px","position":"unset","left":"801px","top":"338px","animationName":"","marginRight":"8px !important"},
            
            },
 default: { 
 
value:true,
cStyle:{"wrapper":{"default":{"width":"32px","height":"24px","position":"unset","left":"801px","top":"338px","animationName":"","marginRight":"8px !important"}},"core":{"active":{"backgroundColor":"var(--business-theme)","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
tColx0x4x1: {
defaultStyle: {
            default: {"width":"100px","height":"100%","display":"flex","justifyContent":"center","alignItems":"center"},
            
            },
 default: { 
 
span:8,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"100%","display":"flex","justifyContent":"center","alignItems":"center"}}}, 
 },
},
tColx0x4x2: {
defaultStyle: {
            default: {"width":"100px","height":"100%","display":"flex","justifyContent":"left","alignItems":"center"},
            
            },
 default: { 
 
span:8,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"100%","display":"flex","justifyContent":"left","alignItems":"center"}}}, 
 },
},
tSelectx0x4x2x0: {
defaultStyle: {
            default: {"width":"205px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},
            
            },
 default: { 
 
activeValue:"",
options:[],
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
cStyle:{"wrapper":{"default":{"width":"205px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
});
const getChartOptions = () => {

  
    return {
      grid: { top: '15%', left: '5%', right: '4%', bottom: '10%', containLabel: true },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0,0,0,0.8)',
        borderColor: 'var(--skin-font-color-20)',
        textStyle: { color: 'var(--business--chart-tooltip-font)', fontSize: parseInt(getComputedStyle(document.body).getPropertyValue('--business-text-size-14')) || 14 },
        formatter: (formatterParams) => {
          const list = Array.isArray(formatterParams) ? formatterParams : [];
          const first = list[0];
          const name = first?.data?.tooltipXAxisLabel || first?.name || '--';
          let str = '';
          list.forEach((item) => {
            // hiddenInTooltip 是否在tooltip中隐藏
            if (item?.data?.hiddenInTooltip) return;
            const unit = item?.data?.unit || 'mg/L';
            const curValue = Array.isArray(item.value) ? item.value[item.value.length - 1] : item.value;
            str += `<div style="margin: 10px 0 0;line-height: 1">${item.marker}<span>${item.seriesName}</span>
      <span style="float: right;margin-left: 10px;">${curValue ?? '--'} ${unit}</span><br/></div>`;
          });
          return `${name}<br/>${str}`;
        },
      },
      xAxis: {
        type: 'category',
        // 避免 TS 在 checkJs 下将 [] 推断为 never[]
        data: /** @type {string[]} */([]),
        axisLabel: { color: 'var(--skin-font-color-60)', fontSize: parseInt(getComputedStyle(document.body).getPropertyValue('--business-text-size-14')) || 14, hideOverlap: true },
        axisLine: { lineStyle: { color: 'var(--skin-font-color-20)' } }
      },
      yAxis: {
        type: 'value',
        name: 'mg/L',
        nameLocation: 'end',
        nameRotate: 0,
        nameGap: 8,
        nameTextStyle: { color: 'var(--skin-font-color-60)', fontSize: parseInt(getComputedStyle(document.body).getPropertyValue('--business-text-size-14')) || 14, padding: [-5, 0, 0, -5] },
        splitLine: {
          lineStyle: { type: 'dashed', color: 'var(--skin-font-color-10)' }
        },
        axisLabel: { color: 'var(--skin-font-color-60)', fontSize: parseInt(getComputedStyle(document.body).getPropertyValue('--business-text-size-14')) || 14 }
      },
      // 避免 TS 在 checkJs 下将 [] 推断为 never[]
      series: /** @type {any[]} */([]),
          "dataZoom": [
          {
            "type": "slider",
            "height": 10,
            bottom : '5%',
            xAxisIndex: [0, 1, 2], // 控制所有三个x轴
            textStyle: {
              color: 'var(--skin-font-color)',
              fontSize: parseInt(getComputedStyle(document.body).getPropertyValue('--business-text-size-14')) || 14
            }
          },
          {
            type: 'inside',      // 内置缩放，支持鼠标滚轮缩放
            xAxisIndex: [0, 1, 2], // 控制所有三个x轴
          }
        ],
    };
    
  
};
const handleTabChange = (value) => {
state.activeTab = value

// 请求接口
};
const applyForecastChartData = (list) => {
    const dataList = Array.isArray(list) ? list : [];
    const timeList = Array.from(
      new Set(
        dataList
          .map((x) => x?.MONITORTIME)
          .filter((x) => x !== undefined && x !== null && String(x).trim() !== '')
          .map((x) => String(x))
      )
    ).sort((a, b) => a.localeCompare(b));
    
    // 按 POINT_CODE 分组
    const groupMap = {};
    dataList.forEach((item) => {
      const code = item?.POINT_CODE ? String(item.POINT_CODE) : '__NO_CODE__';
      if (!groupMap[code]) groupMap[code] = [];
      groupMap[code].push(item);
    });
    
    const base = 8.2;
    const step = 0.1;
    
        const series = Object.keys(groupMap).map((code) => {
          const group = groupMap[code] || [];
          const name = group?.[0]?.POINT_NAME ? String(group[0].POINT_NAME) : code;
    
          // 按时间映射出临时 mg/L
        const yValues = timeList.map((t, idx) => {
          console.log(t)
            const v = Math.max(0, base - idx * step);
            return Number(v.toFixed(2));
          });
    
          return {
            name,
            type: 'line',
            smooth: true,
            showSymbol: false,
            data: yValues
          };
        });
  
    // 合并主题配置，确保颜色/背景等与项目主题一致
    const option = _.merge({}, activeChartThemeOptions.value || {}, getChartOptions());
    if (Array.isArray(option.xAxis)) {
      option.xAxis[0] = option.xAxis[0] || {};
      option.xAxis[0].data = timeList;
    } else {
      option.xAxis = option.xAxis || {};
      option.xAxis.data = timeList;
    }
    option.series = series;
    if (Array.isArray(option.legend)) {
      option.legend[0] = _.merge({}, option.legend[0] || {}, { data: series.map((s) => s.name) });
    } else {
      option.legend = _.merge({}, option.legend || {}, { data: series.map((s) => s.name) });
    }
  
    state.variationTrendData.chartOptions = option;
    state.variationTrendData.chartShow = true;
};
const initPage = () => {
    // POINT_CODE*
  // MONITORTIME*
  // POLLUTE_CODE*
  state.params.POINT_CODE = (global.businessDialog && global.businessDialog.dialogParmas) ? (global.businessDialog.dialogParmas.pointCode || "") : "";
  state.params.MONITORTIME = (global.businessDialog && global.businessDialog.dialogParmas) ? (global.businessDialog.dialogParmas.monitorTime || "") : "";

  // 清空并等待接口回包
  state.forecastRaw = [];
  state.tableData = [];
  state.seriesData = [];
  state.standardSeriesData = [];
  state.variationTrendData.chartOptions = getChartOptions();
  state.variationTrendData.chartOptions.series = [];
  changeStandard();

  // apiRegistry.getForecastList.request(state.params.MONITORTIME, state.params.POINT_CODE);
  apiRegistry.getForecastOptions.request();
  handleTabChange(state.activeTab);
};
const renderForecastChart = (rawList) => {

  // buildStandardSeries 保持嵌套（按你的 A 要求）
  const buildStandardSeries = (name, color, yValue) => {
    // 用 markLine 画标准线 + 右侧文字（参考 Untitled-1 的 handleWaterLevelStandard）
    return {
      name: name,
      type: 'line',
      data: [],
      symbol: 'none',
      lineStyle: { type: 'dashed', width: 0 },
      itemStyle: { color: color },
      tooltip: { show: false },
      markLine: {
        symbol: 'none',
        silent: true,
        lineStyle: { type: 'dashed', width: 1, color: color },
        label: {
          show: true,
          position: 'insideEndTop',
          color: color,
          fontSize: parseInt(getComputedStyle(document.body).getPropertyValue('--business-text-size-12')) || 12,
          formatter: function (params) {
            return name + '：' + params.value;
          }
        },
        data: [
          { yAxis: yValue }
        ]
      }
    };
  };
  
  
  var dataList = Array.isArray(rawList) ? rawList : [];
  
  // 1) x 轴：RESULTTIME 去重排序（不用 Set）
  var seenTime = {};
  var timeList = [];
  for (var a = 0; a < dataList.length; a++) {
    var r0 = dataList[a];
    var rt0 = r0 ? r0.RESULTTIME : undefined;
    if (rt0 !== undefined && rt0 !== null && String(rt0).trim() !== '') {
      var tk = String(rt0);
      if (!seenTime[tk]) {
        seenTime[tk] = true;
        timeList.push(tk);
      }
    }
  }
  timeList.sort(function (x, y) { return x.localeCompare(y); });
  
  // 2) 按 POINT_CODE 分组
  var groupMap = {};
  for (var b = 0; b < dataList.length; b++) {
    var item = dataList[b];
    var code = (item && item.POINT_CODE !== undefined && item.POINT_CODE !== null) ? String(item.POINT_CODE) : '__NO_CODE__';
    if (!groupMap[code]) groupMap[code] = [];
    groupMap[code].push(item);
  }
  
  // 3) 主折线 seriesData
  var m // 避免 checkJs 下 concat/推断类型报错
  var actualSeries = /** @type {any[]} */([]);
  var forecastSeries = /** @type {any[]} */([]);
  var codes = Object.keys(groupMap);
  for (var c = 0; c < codes.length; c++) {
    var ckey = codes[c];
    var group = groupMap[ckey] || [];
    var baseName = (group[0] && group[0].POINT_NAME) ? String(group[0].POINT_NAME) : '溶解氧';
  
    // 接口不返回 DATATYPE：直接用字段映射
    // - 实测值：POLLUTEVALUE（柱）
    // - 预测值：RESULTVALUE（折线）
    var timeToActualValue = {};
    var timeToForecastValue = {};
    for (var d = 0; d < group.length; d++) {
      var row = group[d];
      if (row && row.RESULTTIME !== undefined && row.RESULTTIME !== null) {
        var keyTime = String(row.RESULTTIME);
        var actualRaw = row.POLLUTEVALUE;
        var actualNum = Number(actualRaw);
        if (actualRaw !== '' && actualRaw !== null && actualRaw !== undefined && !isNaN(actualNum)) {
          timeToActualValue[keyTime] = actualNum;
        }
  
        var forecastRaw = row.RESULTVALUE;
        var forecastNum = Number(forecastRaw);
        if (forecastRaw !== '' && forecastRaw !== null && forecastRaw !== undefined && !isNaN(forecastNum)) {
          timeToForecastValue[keyTime] = forecastNum;
        }
      }
    }
  
    var actualPoints = /** @type {any[]} */([]);
    var forecastPoints = /** @type {any[]} */([]);
    for (var e = 0; e < timeList.length; e++) {
      var t = timeList[e];
      var v1 = timeToActualValue[t];
      var n1 = (v1 === undefined || v1 === null || isNaN(v1)) ? null : Number(Number(v1).toFixed(2));
      actualPoints.push({
        value: [t, n1],
        unit: 'mg/L',
        tooltipXAxisLabel: t
      });
      var v2 = timeToForecastValue[t];
      var n2 = (v2 === undefined || v2 === null || isNaN(v2)) ? null : Number(Number(v2).toFixed(2));
      forecastPoints.push({
        value: [t, n2],
        unit: 'mg/L',
        tooltipXAxisLabel: t
      });
    }
  
    // 单站点：用截图里的“实测值 / 预测值”；多站点：加上站点名区分
    var actualName = (codes.length === 1) ? '实测值' : (baseName + ' 实测值');
    var forecastName = (codes.length === 1) ? '预测值' : (baseName + ' 预测值');
  
    actualSeries.push({
      name: actualName,
      type: 'bar',
      barMaxWidth: 24,
      itemStyle: { color: '#00E5FF' },
      data: actualPoints
    });
    forecastSeries.push({
      name: forecastName,
      type: 'line',
      smooth: true,
      showSymbol: false,
      lineStyle: { color: '#FF8A00', width: 2 },
      itemStyle: { color: '#FF8A00' },
      data: forecastPoints
    });
  }
  
  // 4) 标准线（Ⅰ~Ⅴ）
  var standardKeys = [
    { key: 'STANDARD_1', name: 'Ⅰ类标准值', color: '#8FCDFF' },
    { key: 'STANDARD_2', name: 'Ⅱ类标准值', color: '#0280F6' },
    { key: 'STANDARD_3', name: 'Ⅲ类标准值', color: '#00DA2A' },
    { key: 'STANDARD_4', name: 'Ⅳ类标准值', color: '#F6C200' },
    { key: 'STANDARD_5', name: 'Ⅴ类标准值', color: '#FC926A' }
  ];
  
  // 采集有效监测值范围（用于筛选标准线显示区间）
  var dataValues = [];
  var mergedSeriesForRange = actualSeries.concat(forecastSeries);
  for (var f = 0; f < mergedSeriesForRange.length; f++) {
    var s0 = mergedSeriesForRange[f];
    var sd = s0 && s0.data ? s0.data : [];
    for (var g = 0; g < sd.length; g++) {
      var pv = sd[g] && sd[g].value ? sd[g].value[1] : undefined;
      var num = Number(pv);
      if (!isNaN(num) && num >= 0) dataValues.push(num);
    }
  }
  
  // 每条标准线取“最小有效正值”
  var standardValueByKey = {};
  for (var h = 0; h < standardKeys.length; h++) {
    var mk = standardKeys[h];
    var minVal = null;
    for (var i = 0; i < dataList.length; i++) {
      var rr = dataList[i];
      var vv = rr ? Number(rr[mk.key]) : NaN;
      if (!isNaN(vv) && vv > 0) {
        if (minVal === null || vv < minVal) minVal = vv;
      }
    }
    if (minVal !== null) standardValueByKey[mk.key] = minVal;
  }
  
  // 标准线按值从小到大排序
  var sortedStandards = [];
  for (var j1 = 0; j1 < standardKeys.length; j1++) {
    var m1 = standardKeys[j1];
    var sv = standardValueByKey[m1.key];
    if (sv !== undefined && sv > 0) {
      sortedStandards.push({ key: m1.key, name: m1.name, color: m1.color, value: sv });
    }
  }
  sortedStandards.sort(function (x, y) { return x.value - y.value; });
  
  // visibleKeySet：用对象替代 Set
  var visibleKeySet = {};
  if (sortedStandards.length > 0) {
    if (dataValues.length > 0) {
      var dataMin = Math.min.apply(null, dataValues);
      var dataMax = Math.max.apply(null, dataValues);
      var idxSet = {};
      var pts = [dataMin, dataMax];
      for (var p = 0; p < pts.length; p++) {
        var x0 = pts[p];
        var ii = 0;
        while (ii < sortedStandards.length && sortedStandards[ii].value < x0) ii++;
        if (ii >= sortedStandards.length) {
          idxSet[sortedStandards.length - 1] = true;
          if (sortedStandards.length - 2 >= 0) idxSet[sortedStandards.length - 2] = true;
        } else {
          idxSet[ii] = true;
          if (ii - 1 >= 0) idxSet[ii - 1] = true;
        }
      }
      var indices = Object.keys(idxSet).map(function (k) { return Number(k); }).sort(function (x, y) { return x - y; });
      var start = indices[0];
      var end = indices[indices.length - 1];
      for (var sIdx = start; sIdx <= end; sIdx++) {
        visibleKeySet[sortedStandards[sIdx].key] = true;
      }
    } else {
      visibleKeySet[sortedStandards[0].key] = true;
    }
  }
  
  
  // 生成标准线 series（用 markLine，确保右侧显示“Ⅱ类标准值”等文字）
  var standardSeries = [];
  for (var k1 = 0; k1 < standardKeys.length; k1++) {
    var meta = standardKeys[k1];
    if (!visibleKeySet[meta.key]) continue;
  
    var yValue = standardValueByKey[meta.key];
    if (yValue === undefined || yValue === null || isNaN(yValue) || yValue <= 0) continue;
    standardSeries.push(buildStandardSeries(meta.name, meta.color, Number(Number(yValue).toFixed(2))));
  }
  
  // 5) 合并主题配置，写入 option（series 交给 changeStandard）
  var option = _.merge({}, activeChartThemeOptions.value || {}, getChartOptions());
  applyYAxisUnit(option);
  var axisLabelInterval = Math.max(0, Math.ceil(timeList.length / 6) - 1);
  if (Array.isArray(option.xAxis)) {
    option.xAxis[0] = option.xAxis[0] || {};
    option.xAxis[0].data = timeList;
    option.xAxis[0].axisLabel = Object.assign({}, option.xAxis[0].axisLabel || {}, {
      interval: axisLabelInterval,
      hideOverlap: true,
      fontSize: parseInt(getComputedStyle(document.body).getPropertyValue('--business-text-size-14')) || 14
    });
  } else {
    option.xAxis = option.xAxis || {};
    option.xAxis.data = timeList;
    option.xAxis.axisLabel = Object.assign({}, option.xAxis.axisLabel || {}, {
      interval: axisLabelInterval,
      hideOverlap: true,
      fontSize: parseInt(getComputedStyle(document.body).getPropertyValue('--business-text-size-14')) || 14
    });
  }
  
  option.series = [];
  
  var legendData = [];
  for (var z1 = 0; z1 < actualSeries.length; z1++) legendData.push(actualSeries[z1].name);
  for (var z2 = 0; z2 < forecastSeries.length; z2++) legendData.push(forecastSeries[z2].name);
  // for (var z2 = 0; z2 < standardSeries.length; z2++) legendData.push(standardSeries[z2].name);
  if (Array.isArray(option.legend)) {
    option.legend[0] = _.merge({}, option.legend[0] || {}, { data: legendData, textStyle: { fontSize: parseInt(getComputedStyle(document.body).getPropertyValue('--business-text-size-14')) || 14 } });
  } else {
    option.legend = _.merge({}, option.legend || {}, { data: legendData, textStyle: { fontSize: parseInt(getComputedStyle(document.body).getPropertyValue('--business-text-size-14')) || 14 } });
  }
  
  // seriesData：实测（柱）在前，预测（线）在后，视觉上更贴近截图
  state.seriesData = actualSeries.concat(forecastSeries);
  state.standardSeriesData = standardSeries;
  state.variationTrendData.chartOptions = option;
  changeStandard();
  
};
const changeStandard = () => {
    // 参考 waterDialogAutoDayBaseInfo：统一由 seriesData + standardSeriesData 合并渲染
    state.variationTrendData.chartOptions.series = [
      ...state.seriesData,
      ...(state.isBz ? state.standardSeriesData : [])
    ];
    // 强制刷新（配合模板 v-if）
    state.variationTrendData.chartShow = false;
    setTimeout(() => {
      state.variationTrendData.chartShow = true;
    }, 100);
};
const handleOxygenStatus = (data,standardArr) => {
// 溶解氧 W01009
// 高猛酸盐指数 W01019
// 氨氮 W21003
// 总磷 W21011
// 总氮 W21001

const STANDARD_OBJ = {
    STANDARD_1: 2,
    STANDARD_2: 3,
    STANDARD_3: 5,
    STANDARD_4: 6,
    STANDARD_5: 7.5,
};

if (standardArr.length) {
    STANDARD_OBJ.STANDARD_1 = Number(standardArr?.[0]);
    STANDARD_OBJ.STANDARD_2 = Number(standardArr?.[1]);
    STANDARD_OBJ.STANDARD_3 = Number(standardArr?.[2]);
    STANDARD_OBJ.STANDARD_4 = Number(standardArr?.[3]);
    STANDARD_OBJ.STANDARD_5 = Number(standardArr?.[4]);
}

const value = data ? Number(data) : '-';

// 如果是溶解氧，则浓度越高，水质越好；
// 如果是其他污染物，则浓度越高，水质越差
if (state.selectedValue === 'W01009') {
    console.log('判断溶解氧', data, STANDARD_OBJ);
    switch (true) {
        case value > STANDARD_OBJ.STANDARD_1:
            return "状态1";
        case value >= STANDARD_OBJ.STANDARD_2 && value <= STANDARD_OBJ.STANDARD_1:
            return "状态2";
        case value >= STANDARD_OBJ.STANDARD_3 && value < STANDARD_OBJ.STANDARD_2:
            return "状态3";
        case value >= STANDARD_OBJ.STANDARD_4 && value < STANDARD_OBJ.STANDARD_3:
            return "状态4";
        case value >= STANDARD_OBJ.STANDARD_5 && value < STANDARD_OBJ.STANDARD_4:
            return "状态5";
        case value < STANDARD_OBJ.STANDARD_5:
            return "状态6";
        default:
            return "状态7";
    }
} else {
    switch (true) {
        case value > STANDARD_OBJ.STANDARD_5:
            return "状态6";
        case value >= STANDARD_OBJ.STANDARD_4 && value <= STANDARD_OBJ.STANDARD_5:
            return "状态5";
        case value >= STANDARD_OBJ.STANDARD_3 && value < STANDARD_OBJ.STANDARD_4:
            return "状态4";
        case value >= STANDARD_OBJ.STANDARD_2 && value < STANDARD_OBJ.STANDARD_3:
            return "状态3";
        case value >= STANDARD_OBJ.STANDARD_1 && value < STANDARD_OBJ.STANDARD_2:
            return "状态2";
        case value < STANDARD_OBJ.STANDARD_1:
            return "状态1";
        default:
            return "状态7";
    }
}

};
const applyYAxisUnit = (option) => {

  
        if (!option) return;
        const setAxisName = (axis) => {
          if (!axis) return;
          const fontSize = parseInt(getComputedStyle(document.body).getPropertyValue('--business-text-size-14')) || 14;
          axis.name = 'mg/L';
          axis.nameLocation = 'end';
          axis.nameRotate = 0;
          axis.nameGap = 8;
          axis.nameTextStyle = Object.assign({}, axis.nameTextStyle || {}, { color: 'var(--skin-font-color-60)', fontSize: fontSize, padding: [41, 0, 0, -10] });
          axis.axisLabel = Object.assign({}, axis.axisLabel || {}, { color: 'var(--skin-font-color-60)', fontSize: fontSize });
        };
        if (Array.isArray(option.yAxis)) {
          option.yAxis.forEach((axis, index) => {
            option.yAxis[index] = axis || {};
            setAxisName(option.yAxis[index]);
          });
        } else {
          option.yAxis = option.yAxis || {};
          setAxisName(option.yAxis);
        }
    
  
};
const requstListData = () => {
  state.params.POINT_CODE = (global.businessDialog && global.businessDialog.dialogParmas) ? (global.businessDialog.dialogParmas.pointCode || "") : "";
  state.params.MONITORTIME = (global.businessDialog && global.businessDialog.dialogParmas) ? (global.businessDialog.dialogParmas.monitorTime || "") : "";

  apiRegistry.getForecastList.request(state.params.MONITORTIME, state.params.POINT_CODE);

};
const ontabClick1768448468326 = (data) => {
// 执行自定义方法
handleTabChange(data.value);
};
const onchange1769408639859 = (value) => {
// 设置变量值
state.isBz = value;
// 执行自定义方法
changeStandard();
};
const onchange1770010190906 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.selectedValue = value;
// 执行自定义方法
requstListData();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getForecastOptions: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TREE_CODE":"WATER_FORECAST_POLLUTE","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TREE_CODE":"WATER_FORECAST_POLLUTE","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TREE_CODE":"WATER_FORECAST_POLLUTE","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getForecastOptions'] = res.data;
                
     if(res?.status === 200 && res?.data){
  state.options = res.data?.data.map(item => ({
    label: item.DICTIONARYNAME,
    value: item.DICTIONARYCODE
  }))

  state.selectedValue = "W01009"

  state.params.POINT_CODE = (global.businessDialog && global.businessDialog.dialogParmas) ? (global.businessDialog.dialogParmas.pointCode || "") : "";
  state.params.MONITORTIME = (global.businessDialog && global.businessDialog.dialogParmas) ? (global.businessDialog.dialogParmas.monitorTime || "") : "";
  apiRegistry.getForecastList.request(state.params.MONITORTIME, state.params.POINT_CODE);


}else {
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
 getForecastList: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"MONITORTIME","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"HHBgSDzdyZ","children":[]},{"hasVariable":true,"isVariable":false,"dataType":"string","dataValue":"","defaultValue":"","description":"","dataKey":"POINT_CODE","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"aMCMalQ1Ay"}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POLLUTE_CODE":"state.selectedValue","MONITORTIME":"this.MONITORTIME","POINT_CODE":"this.POINT_CODE","interfaceId":"5d61130e10882ea648f2af460a7a7a9f"}},
              request: function (MONITORTIME,POINT_CODE, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POLLUTE_CODE":state.selectedValue,"MONITORTIME":MONITORTIME,"POINT_CODE":POINT_CODE,"interfaceId":"5d61130e10882ea648f2af460a7a7a9f"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POLLUTE_CODE":state.selectedValue,"MONITORTIME":MONITORTIME,"POINT_CODE":POINT_CODE,"interfaceId":"5d61130e10882ea648f2af460a7a7a9f"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getForecastList'] = res.data;
                
     // [
//   {
//     "POINT_CODE": "A350700_0002",
//     "POLLUTE_CODE": "W01009",
//     "RESULTTIME": "2026-01-26 12",
//     "RESULTVALUE": "8.2",
//     "STANDARD_1": "7.5",
//     "STANDARD_2": "6",
//     "STANDARD_3": "5",
//     "STANDARD_4": "3",
//     "STANDARD_5": "2"
// },
// {
//     "POINT_CODE": "A350700_0002",
//     "POLLUTE_CODE": "W01009",
//     "RESULTTIME": "2026-01-26 16",
//     "RESULTVALUE": "8.13",
//     "STANDARD_1": "7.5",
//     "STANDARD_2": "6",
//     "STANDARD_3": "5",
//     "STANDARD_4": "3",
//     "STANDARD_5": "2"
// }
// ]
if (res?.status === 200 && res?.data) {
  const result = res.data.data
  // 1.处理表格数据
  state.tableData = result.map(item => {
    const standardArr = [
      item.STANDARD_1,
      item.STANDARD_2,
      item.STANDARD_3,
      item.STANDARD_4,
      item.STANDARD_5,
    ];
    return {
      date: item.RESULTTIME,
      // 实测值
      oxygen: item.POLLUTEVALUE || "-",
      oxygenState: handleOxygenStatus(item.POLLUTEVALUE, standardArr) || "-",
      // 预测值
      measuredValue: item.RESULTVALUE || "-",
      measuredValueStatus: handleOxygenStatus(item.RESULTVALUE, standardArr) || "-" // 参数注意修改
    }
  })

  // 2.处理图表数据
  console.log(result, 'result')
  // 2.处理图表数据
  renderForecastChart(result);
} else {
  state.forecastRaw = [];
  state.tableData = [];
  renderForecastChart([]);
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
             state.forecastRaw = [];
        state.tableData = [];
        renderForecastChart([]);
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-dissolvedOxygenPrediction', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-dissolvedOxygenPrediction', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
initPage();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x0.default, componentState.tRowx0x0?.[state.screenSize]));

 const tColx0x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x0x0.default, componentState.tColx0x0x0?.[state.screenSize]));

 const tColx0x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x0x1.default, componentState.tColx0x0x1?.[state.screenSize]));

 const tColx0x0x2ComputedData = computed(() => _.merge({}, componentState.tColx0x0x2.default, componentState.tColx0x0x2?.[state.screenSize]));

 const tChartDesignx0x0x2x0ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x0x2x0.default, componentState.tChartDesignx0x0x2x0?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tColx0x0x3ComputedData = computed(() => _.merge({}, componentState.tColx0x0x3.default, componentState.tColx0x0x3?.[state.screenSize]));

 const tTablex0x0x3x0ComputedData = computed(() => _.merge({}, componentState.tTablex0x0x3x0.default, componentState.tTablex0x0x3x0?.[state.screenSize]));

 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tRowx0x4ComputedData = computed(() => _.merge({}, componentState.tRowx0x4.default, componentState.tRowx0x4?.[state.screenSize]));

 const tColx0x4x0ComputedData = computed(() => _.merge({}, componentState.tColx0x4x0.default, componentState.tColx0x4x0?.[state.screenSize]));

 const tTextx0x4x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x4x0x0.default, componentState.tTextx0x4x0x0?.[state.screenSize]));

 const tSwitchx0x4x0x1ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x4x0x1.default, componentState.tSwitchx0x4x0x1?.[state.screenSize]));

 const tColx0x4x1ComputedData = computed(() => _.merge({}, componentState.tColx0x4x1.default, componentState.tColx0x4x1?.[state.screenSize]));

 const tColx0x4x2ComputedData = computed(() => _.merge({}, componentState.tColx0x4x2.default, componentState.tColx0x4x2?.[state.screenSize]));

 const tSelectx0x4x2x0ComputedData = computed(() => _.merge({}, componentState.tSelectx0x4x2x0.default, componentState.tSelectx0x4x2x0?.[state.screenSize]));

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
tRowx0x0ComputedData,
tColx0x0x0ComputedData,
tColx0x0x1ComputedData,
tColx0x0x2ComputedData,
tChartDesignx0x0x2x0ComputedData,
tColx0x0x3ComputedData,
tTablex0x0x3x0ComputedData,
tRowx0x1ComputedData,
tComponentx0x2ComputedData,
tTextx0x3ComputedData,
tRowx0x4ComputedData,
tColx0x4x0ComputedData,
tTextx0x4x0x0ComputedData,
tSwitchx0x4x0x1ComputedData,
tColx0x4x1ComputedData,
tColx0x4x2ComputedData,
tSelectx0x4x2x0ComputedData,
onchange1769408639859,
onchange1770010190906,
};
},
};