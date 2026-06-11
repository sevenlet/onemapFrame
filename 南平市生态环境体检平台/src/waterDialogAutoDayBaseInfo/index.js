window.waterDialogAutoDayBaseInfoComponent = {
template: 
`<div id="t-l-c-waterDialogAutoDayBaseInfo" class="t-l-c-waterDialogAutoDayBaseInfo" >` +
`<t-component id="t-component-c019.99b6d840a" class="waterDialogAutoDayBaseInfo-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode">` +
`</t-component>` +
`<t-chart-design v-if="state.variationTrendData.chartShow === true" id="t-chart-design-3774.63e82ca0e" class="waterDialogAutoDayBaseInfo-t-chart-design-0-2"  :empty-img="replaceCssVariables(filterData(state.noDataImg, componentPropBindingMap?.['t-chart-design-3774.63e82ca0e']['emptyImg'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tChartDesignx0x2ComputedData.cStyle" :options="replaceCssVariables(filterData(state.variationTrendData.chartOptions, componentPropBindingMap?.['t-chart-design-3774.63e82ca0e']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @get-chart-instance="ongetChartInstance1769678024584">` +
`</t-chart-design>` +
`<t-list-card id="t-list-card-d9ab.2e21fb3b5" class="waterDialogAutoDayBaseInfo-t-list-card-0-3"  :data="replaceCssVariables(filterData(state.baseInfoData, componentPropBindingMap?.['t-list-card-d9ab.2e21fb3b5']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x3ComputedData.spacingX" :col="tListCardx0x3ComputedData.col" :direction="tListCardx0x3ComputedData.direction" :exchange-order="tListCardx0x3ComputedData.exchangeOrder" :unit-break="tListCardx0x3ComputedData.unitBreak" :key-field="tListCardx0x3ComputedData.keyField" :active-key-field="tListCardx0x3ComputedData.activeKeyField" :active="tListCardx0x3ComputedData.active" :c-style="tListCardx0x3ComputedData.cStyle">` +
`</t-list-card>` +
`<t-text id="t-text-62b3.48b14905c" class="waterDialogAutoDayBaseInfo-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle">` +
`</t-text>` +
`<t-circle id="t-circle-7dbd.196078e2c" class="waterDialogAutoDayBaseInfo-t-circle-0-5"  :tip="tCirclex0x5ComputedData.tip" :label="tCirclex0x5ComputedData.label" :active="tCirclex0x5ComputedData.active" :c-style="tCirclex0x5ComputedData.cStyle">` +
`</t-circle>` +
`<t-text id="t-text-e92f.6243867ce" class="waterDialogAutoDayBaseInfo-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle">` +
`</t-text>` +
`<t-scrollable-cards id="t-scrollable-cards-455f.ff3a2c962" class="waterDialogAutoDayBaseInfo-t-scrollable-cards-0-7"  :c-style="tScrollableCardsx0x7ComputedData.cStyle" :show-icon="tScrollableCardsx0x7ComputedData.showIcon" :auto-scroll="tScrollableCardsx0x7ComputedData.autoScroll" :tab="tScrollableCardsx0x7ComputedData.tab" :key-word="tScrollableCardsx0x7ComputedData.keyWord" :default-checked="tScrollableCardsx0x7ComputedData.defaultChecked" :speed="tScrollableCardsx0x7ComputedData.speed" :interval="tScrollableCardsx0x7ComputedData.interval" :card-space="tScrollableCardsx0x7ComputedData.cardSpace" :direction="tScrollableCardsx0x7ComputedData.direction" :data-alias="tScrollableCardsx0x7ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.monitorData, componentPropBindingMap?.['t-scrollable-cards-455f.ff3a2c962']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-scrollable-cards>` +
`<t-row id="t-row-4e59.43d7f042f" class="waterDialogAutoDayBaseInfo-t-row-0-8"  :c-style="tRowx0x8ComputedData.cStyle" :gutter="tRowx0x8ComputedData.gutter" :justify="tRowx0x8ComputedData.justify" :align="tRowx0x8ComputedData.align">` +
`<t-text id="t-text-b39c.b6c03321c" class="waterDialogAutoDayBaseInfo-t-text-0-8-0"  :label="replaceCssVariables(filterData(state.monitorTime, componentPropBindingMap?.['t-text-b39c.b6c03321c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x8x0ComputedData.editable" :c-style="tTextx0x8x0ComputedData.cStyle">` +
`</t-text>` +
`</t-row>` +
`<t-row id="t-row-11e6.c117bcaae" class="waterDialogAutoDayBaseInfo-t-row-0-9"  :c-style="tRowx0x9ComputedData.cStyle" :gutter="tRowx0x9ComputedData.gutter" :justify="tRowx0x9ComputedData.justify" :align="tRowx0x9ComputedData.align">` +
`<t-col id="t-col-c74a.a03398712" class="waterDialogAutoDayBaseInfo-t-col-0-9-0"  :span="tColx0x9x0ComputedData.span" :offset="tColx0x9x0ComputedData.offset" :push="tColx0x9x0ComputedData.push" :pull="tColx0x9x0ComputedData.pull" :c-style="tColx0x9x0ComputedData.cStyle">` +
`<t-text id="t-text-6063.4db73323" class="waterDialogAutoDayBaseInfo-t-text-0-9-0-0"  :label="replaceCssVariables(filterData(state.variationTrendData.title, componentPropBindingMap?.['t-text-6063.4db73323']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x9x0x0ComputedData.editable" :c-style="tTextx0x9x0x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-cfab.11be2e65d" class="waterDialogAutoDayBaseInfo-t-col-0-9-1"  :span="tColx0x9x1ComputedData.span" :offset="tColx0x9x1ComputedData.offset" :push="tColx0x9x1ComputedData.push" :pull="tColx0x9x1ComputedData.pull" :c-style="tColx0x9x1ComputedData.cStyle">` +
`<t-date-picker id="t-date-picker-be0a.32fc8d384" class="waterDialogAutoDayBaseInfo-t-date-picker-0-9-1-0"  :placeholder="tDatePickerx0x9x1x0ComputedData.placeholder" :start-placeholder="tDatePickerx0x9x1x0ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x9x1x0ComputedData.endPlaceholder" :type="tDatePickerx0x9x1x0ComputedData.type" :clearable="tDatePickerx0x9x1x0ComputedData.clearable" :range-separator="tDatePickerx0x9x1x0ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeRange, componentPropBindingMap?.['t-date-picker-be0a.32fc8d384']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x9x1x0ComputedData.separator" :readonly="tDatePickerx0x9x1x0ComputedData.readonly" :editable="tDatePickerx0x9x1x0ComputedData.editable" :c-style="tDatePickerx0x9x1x0ComputedData.cStyle" @date-change="ondateChange1735547804401">` +
`</t-date-picker>` +
`</t-col>` +
`<t-col id="t-col-6baa.99493e0fe" class="waterDialogAutoDayBaseInfo-t-col-0-9-2"  :span="tColx0x9x2ComputedData.span" :offset="tColx0x9x2ComputedData.offset" :push="tColx0x9x2ComputedData.push" :pull="tColx0x9x2ComputedData.pull" :c-style="tColx0x9x2ComputedData.cStyle">` +
`<t-select id="t-select-3fcb.c00f74209" class="waterDialogAutoDayBaseInfo-t-select-0-9-2-0"  :active-value="replaceCssVariables(filterData(state.variationTrendData.activeTarget, componentPropBindingMap?.['t-select-3fcb.c00f74209']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x9x2x0ComputedData.options" :alias="tSelectx0x9x2x0ComputedData.alias" :multiple="tSelectx0x9x2x0ComputedData.multiple" :placeholder="tSelectx0x9x2x0ComputedData.placeholder" :clearable="tSelectx0x9x2x0ComputedData.clearable" :disabled="tSelectx0x9x2x0ComputedData.disabled" :name="tSelectx0x9x2x0ComputedData.name" :autocomplete="tSelectx0x9x2x0ComputedData.autocomplete" :filterable="tSelectx0x9x2x0ComputedData.filterable" :no-match-text="tSelectx0x9x2x0ComputedData.no-match-text" :no-data-text="tSelectx0x9x2x0ComputedData.no-data-text" :c-style="tSelectx0x9x2x0ComputedData.cStyle" :options-raw="tSelectx0x9x2x0ComputedData.optionsRaw" @change="onchange1733973555614">` +
`</t-select>` +
`</t-col>` +
`</t-row>` +
`<t-row id="t-row-07f3.2f1d1db62" class="waterDialogAutoDayBaseInfo-t-row-0-10"  :c-style="tRowx0x10ComputedData.cStyle" :gutter="tRowx0x10ComputedData.gutter" :justify="tRowx0x10ComputedData.justify" :align="tRowx0x10ComputedData.align">` +
`<t-text id="t-text-b36c.8eb71c7a6" class="waterDialogAutoDayBaseInfo-t-text-0-10-0"  :label="tTextx0x10x0ComputedData.label" :editable="tTextx0x10x0ComputedData.editable" :c-style="tTextx0x10x0ComputedData.cStyle">` +
`</t-text>` +
`<t-switch id="t-switch-5cce.2f5f10a5e" class="waterDialogAutoDayBaseInfo-t-switch-0-10-1"  :value="replaceCssVariables(filterData(state.isBz, componentPropBindingMap?.['t-switch-5cce.2f5f10a5e']['value'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tSwitchx0x10x1ComputedData.cStyle" @change="onchange1735803291651">` +
`</t-switch>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-text-1db8.1552d9ecf":{"attributeName":"tTextx0x0"},"t-component-c019.99b6d840a":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-chart-design-3774.63e82ca0e":{"attributeName":"tChartDesignx0x2","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-list-card-d9ab.2e21fb3b5":{"attributeName":"tListCardx0x3","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-62b3.48b14905c":{"attributeName":"tTextx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-circle-7dbd.196078e2c":{"attributeName":"tCirclex0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-e92f.6243867ce":{"attributeName":"tTextx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-scrollable-cards-455f.ff3a2c962":{"attributeName":"tScrollableCardsx0x7","cStyle":{"filters":[]},"showIcon":{"filters":[]},"autoScroll":{"filters":[]},"tab":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"speed":{"filters":[]},"interval":{"filters":[]},"cardSpace":{"filters":[]},"direction":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]}},"t-row-4e59.43d7f042f":{"attributeName":"tRowx0x8","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-b39c.b6c03321c":{"attributeName":"tTextx0x8x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-row-11e6.c117bcaae":{"attributeName":"tRowx0x9","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-c74a.a03398712":{"attributeName":"tColx0x9x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-6063.4db73323":{"attributeName":"tTextx0x9x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-cfab.11be2e65d":{"attributeName":"tColx0x9x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-be0a.32fc8d384":{"attributeName":"tDatePickerx0x9x1x0","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-6baa.99493e0fe":{"attributeName":"tColx0x9x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-select-3fcb.c00f74209":{"attributeName":"tSelectx0x9x2x0","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]},"optionsRaw":{"filters":[]}},"t-row-07f3.2f1d1db62":{"attributeName":"tRowx0x10","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-b36c.8eb71c7a6":{"attributeName":"tTextx0x10x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-switch-5cce.2f5f10a5e":{"attributeName":"tSwitchx0x10x1","value":{"filters":[]},"cStyle":{"filters":[]}}};
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
   currentChartType: "line",
   myChart: "",
   standardSeriesData: [],
   seriesData: [],
   isBz: true,
   timeRange: [],
   endTime: "",
   startTime: "",
   noDataImg: "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
   variationTrendData: {"title":"近7日水质变化趋势","activeTarget":"waterLevelChange","chartOptions":{"series":[]},"chartShow":true},
   monitorData: [{"value":"-","label":"pH"},{"value":"-","label":"DO"},{"value":"-","label":"IMn"},{"value":"-","label":"NH₃-H"},{"value":"-","label":"TP"}],
   baseInfoData: [{"title":"行政区","num":"-"},{"title":"所在水体","num":"-"},{"title":"控制级别","num":"-"},{"title":"断面属性","num":"-"},{"title":"水质目标","num":"-","color":""},{"title":"超标污染物","num":"-","color":"#FF2B2B"}],
   assessType: "",
   pointCode: "",
   monitorTime: "",
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
tComponentx0x1: {
defaultStyle: {
            default: {"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"120px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleFirstBgWidthFitComponent",
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"120px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/dialogTitleFirstBgWidthFit",
componentName:"dialogTitleFirstBgWidthFitComponent",
pageId:"6a42ef046fd548f4b728657d19422187",
pageCode:"dialogTitleFirstBgWidthFit", 
 },
},
tChartDesignx0x2: {
defaultStyle: {
            default: {"height":"calc(100% - 326px)","width":"100%","position":"unset","left":"0px","top":"329px"},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
cStyle:{"wrapper":{"default":{"height":"calc(100% - 326px)","width":"100%","position":"unset","left":"0px","top":"329px"}},"emptyText":{"default":{"fontSize":"var(--text-size-14)","color":"var(--business-white)"}},"emptyImg":{"default":{"display":"none"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"series":[]})), 
 },
},
tListCardx0x3: {
defaultStyle: {
            default: {"width":"100%","height":"95px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"行政区","num":"-"},{"title":"所在水体","num":"-"},{"title":"控制级别","num":"-"},{"title":"断面属性","num":"-"},{"title":"水质目标","num":"-","color":""},{"title":"超标污染物","num":"-","color":"#FF2B2B"}],
spacingX:2,
col:2,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"100%","height":"95px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible","display":"block"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--base-label-bg-color)","width":"30%","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--base-label-title-color)","fontSize":"var(--business-text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","height":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"numBox":{"default":{"backgroundColor":"var(--info-background)","width":"69.5%","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px","height":""}},"num":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--base-label-text-color)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"var(--text-size-14)"}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"auto","height":"28px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"40px","top":"120px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-16)","animationName":"","lineHeight":"28px"},
            
            },
 default: { 
 
label:"水质监测信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"28px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"40px","top":"120px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-16)","animationName":"","lineHeight":"28px"}}}, 
 },
},
tCirclex0x5: {
defaultStyle: {
            default: {"width":"9px","height":"9px","position":"unset","left":"0px","top":"168px","backgroundColor":"#FF2B2B","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"9px","height":"9px","position":"unset","left":"0px","top":"168px","backgroundColor":"#FF2B2B","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"auto","height":"24px","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","top":"160px","left":"13px","position":"unset","lineHeight":"24px"},
            
            },
 default: { 
 
label:"表示该指标超标（mg/L，pH值除外）",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"24px","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","top":"160px","left":"13px","position":"unset","lineHeight":"24px"}}}, 
 },
},
tScrollableCardsx0x7: {
defaultStyle: {
            default: {"width":"824px","height":"64px","borderRadius":"8px","padding":"11px 9px 8px","background":"linear-gradient(180deg, #219DFF 0%, rgba(0,213,255,0.00) 190%)","top":"196px","left":"0px","position":"unset","paddingLeft":"0px","paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","backgroundColor":"","backgroundImage":"linear-gradient(0deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0) 99.54954954954955%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"18px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"824px","height":"64px","borderRadius":"8px","padding":"11px 9px 8px","background":"linear-gradient(180deg, #219DFF 0%, rgba(0,213,255,0.00) 190%)","top":"196px","left":"0px","position":"unset","paddingLeft":"0px","paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","backgroundColor":"","backgroundImage":"linear-gradient(0deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0) 99.54954954954955%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"18px","animationName":""}},"itemWrapper":{"default":{"width":"144px","height":"64px","marginLeft":"0px","marginRight":"8px !important","cursor":"auto","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","display":"flex","flexDirection":"column-reverse","justify-content":"center"},"active":{}},"container":{"default":{"width":"752px","height":"auto","paddingLeft":"0px","paddingTop":"0px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"12px","paddingRight":"0px","marginRight":"12px"}},"cardLabel":{"default":{"fontSize":"var(--text-size-14)","lineHeight":"24px","color":"var(--business-text-avianize)","fontFamily":"微软雅黑","height":"24px","display":"flex","justify-content":"center"}},"cardLabelIcon":{"default":{"width":"18px","height":"18px","marginLeft":"4px"}},"cardValue":{"default":{"fontSize":"var(--business-num-size-20)","fontWeight":"500","fontFamily":"DIN-bold","color":"var(--skin-font-color)","lineHeight":"24px","height":"24px","display":"flex","justify-content":"center"}},"cardValueUnit":{"default":{"fontSize":"var(--text-size-14)","fontWeight":"normal","fontFamily":"微软雅黑","marginLeft":"4px","color":"var(--business-text-avianize)"}},"leftArrowButton":{"default":{"color":"var(--skin-font-color) !important","backgroundColor":"var(--business-show-bg15)","width":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"color":"var(--business-theme) !important","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)"}},"leftArrow":{"default":{"color":"inherit !important"}},"rightArrow":{"default":{"color":"inherit !important"}},"rightArrowButton":{"default":{"color":"var(--skin-font-color) !important","backgroundColor":"var(--business-show-bg15)","width":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"color":"var(--business-theme) !important","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)"}}},
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
data:[{"value":"-","label":"pH"},{"value":"-","label":"DO"},{"value":"-","label":"IMn"},{"value":"-","label":"NH？-H"},{"value":"-","label":"TP"}], 
 },
},
tRowx0x8: {
defaultStyle: {
            default: {"width":"100%","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"120px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"28px","display":"flex","justifyContent":"right","alignItems":"center","left":"0px","top":"120px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextx0x8x0: {
defaultStyle: {
            default: {"width":"164px","height":"28px","color":"rgba(255, 255, 255, 0.9)","top":"124.5px","left":"645px","textAlign":"right","fontSize":"var(--text-size-14)","position":"unset","marginRight":"50px","lineHeight":"28px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"28px","color":"rgba(255, 255, 255, 0.9)","top":"124.5px","left":"645px","textAlign":"right","fontSize":"var(--text-size-14)","position":"unset","marginRight":"50px","lineHeight":"28px"}}}, 
 },
},
tRowx0x9: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","left":"0px","top":"281px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","left":"0px","top":"281px","position":"unset"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x9x0: {
defaultStyle: {
            default: {"width":"100px","height":"30px","display":"flex","justifyContent":"left","alignItems":"center"},
            
            },
 default: { 
 
span:10,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"30px","display":"flex","justifyContent":"left","alignItems":"center"}}}, 
 },
},
tTextx0x9x0x0: {
defaultStyle: {
            default: {"width":"240px","height":"22px","color":"var(--skin-font-color)","lineHeight":"22px","fontSize":"var(--business-text-size-16)","fontFamily":"方正综艺","top":"289px","left":"0px","position":"unset"},
            
            },
 default: { 
 
label:"近12个月水质变化趋势",
editable:false,
cStyle:{"wrapper":{"default":{"width":"240px","height":"22px","color":"var(--skin-font-color)","lineHeight":"22px","fontSize":"var(--business-text-size-16)","fontFamily":"方正综艺","top":"289px","left":"0px","position":"unset"}}}, 
 },
},
tColx0x9x1: {
defaultStyle: {
            default: {"width":"100px","height":"30px","display":"flex","justifyContent":"right","alignItems":"center"},
            
            },
 default: { 
 
span:10,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"30px","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tDatePickerx0x9x1x0: {
defaultStyle: {
            default: {"width":"330px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"daterange",
clearable:true,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"330px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tColx0x9x2: {
defaultStyle: {
            default: {"width":"100px","height":"30px","display":"flex","justifyContent":"right","alignItems":"center"},
            
            },
 default: { 
 
span:4,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"30px","display":"flex","justifyContent":"right","alignItems":"center"}}}, 
 },
},
tSelectx0x9x2x0: {
defaultStyle: {
            default: {"width":"132px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},
            
            },
 default: { 
 
activeValue:"waterLevelChange",
options:[{"value":"waterLevelChange","label":"水质","disabled":false},{"value":"W01001","label":"pH","disabled":false},{"value":"W01009","label":"DO","disabled":false},{"value":"W01019","label":"IMn","disabled":false},{"value":"W21003","label":"NH₃-N","disabled":false},{"value":"W21011","label":"TP","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"132px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}},
optionsRaw:[{"value":"waterLevelChange","label":"水质","disabled":false},{"value":"W01001","label":"pH","disabled":false},{"value":"W01009","label":"DO","disabled":false},{"value":"W01019","label":"IMn","disabled":false},{"value":"W21003","label":"{{NH3}}-N","disabled":false},{"value":"W21011","label":"TP","disabled":false}], 
 },
},
tRowx0x10: {
defaultStyle: {
            default: {"width":"100%","height":"30px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"1px","top":"326px","pointerEvents":"none"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"30px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"1px","top":"326px","pointerEvents":"none"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tTextx0x10x0: {
defaultStyle: {
            default: {"width":"auto","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"726px","top":"327px","fontSize":"var(--text-size-14)","lineHeight":"22px","animationName":"","textAlign":"right","marginRight":"8px"},
            
            },
 default: { 
 
label:"标准值",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"726px","top":"327px","fontSize":"var(--text-size-14)","lineHeight":"22px","animationName":"","textAlign":"right","marginRight":"8px"}}}, 
 },
},
tSwitchx0x10x1: {
defaultStyle: {
            default: {"width":"32px","height":"24px","position":"unset","left":"791px","top":"328px","animationName":"","marginRight":"8px !important"},
            
            },
 default: { 
 
value:true,
cStyle:{"wrapper":{"default":{"width":"32px","height":"24px","position":"unset","left":"791px","top":"328px","animationName":"","marginRight":"8px !important"}},"core":{"active":{"backgroundColor":"var(--business-theme)","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
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
  state.variationTrendData.title = '近7日水质变化趋势';

  // 水质接口
  apiRegistry.getWaterVariationTrend.request();
} else {
  // 其他污染物
  state.variationTrendData.title = '近7日污染物浓度变化趋势';

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
        "backgroundColor": getCssVariable('--business-show-bg30'),
        "borderColor": getCssVariable('--business-show-bg30'),
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
    toolbox,
    grid: {
      top: "15%",
      left: '8%',
      right: '4%',
      bottom: '30%'
    },
    color: ['#00FFFF', '#FFF200', '#FF8400', '#43D156', '#EE70FF'],
    legend: {
      show: true,
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: getCssVariable('--business-white'),
        fontSize: 13
      },
      data: ['当日值']
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
        color: getCssVariable('--skin-font-color-80'),
        fontSize: 13,
        rotate: 45
      },
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: getCssVariable('--skin-font-color-40'),
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: getCssVariable('--skin-font-color-40'),
        }
      },
      nameTextStyle: {
        color: getCssVariable('--skin-font-color-60'),
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
        color: getCssVariable('--skin-font-color-80'),
        fontSize: 13
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: getCssVariable('--skin-font-color-40'),
        }
      },
      name: '',
      nameTextStyle: {
        color: getCssVariable('--skin-font-color-60'),
        align: 'right',
        padding: [0, 0, 10, -24],
        fontSize: 13
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: getCssVariable('--skin-font-color-40'),
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
        "backgroundColor": getCssVariable('--business-show-bg30'),
        "borderColor": getCssVariable('--business-show-bg30'),
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
      bottom: '30%'
    },
    color: ['#00FFFF', '#FFF200', '#FF8400', '#43D156', '#EE70FF'],
    legend: {
      show: true,
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: getCssVariable('--skin-font-color'),
        fontSize: 13
      },
      data: ['当日值']
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
        color: getCssVariable('--skin-font-color-80'),
        fontSize: 13,
        rotate: 45
      },
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: getCssVariable('--skin-font-color-40'),
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: getCssVariable('--skin-font-color-40'),
        }
      },
      nameTextStyle: {
        color: getCssVariable('--skin-font-color-60'),
        fontSize: 13
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: getCssVariable('--skin-font-color-80'),
        fontSize: 13
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: getCssVariable('--skin-font-color-40'),
        }
      },
      name: '',
      nameTextStyle: {
        color: getCssVariable('--skin-font-color-60'),
        align: 'right',
        padding: [0, 0, 10, -24],
        fontSize: 13
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: getCssVariable('--skin-font-color-40'),
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
        "backgroundColor": getCssVariable('--business-show-bg30'),
        "borderColor": getCssVariable('--business-show-bg30'),
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
      bottom: '30%'
    },
    color: ['#00FFFF', '#FFF200', '#FF8400', '#43D156', '#EE70FF'],
    legend: {
      show: true,
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: getCssVariable('--skin-font-color'),
        fontSize: 13
      },
      data: ['当日值']
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
        color: getCssVariable('--skin-font-color-80'),
        fontSize: 13,
        rotate: 45
      },
      axisLine: {
        lineStyle: {
          type: 'solid',
          color: getCssVariable('--skin-font-color-40'),
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: getCssVariable('--skin-font-color-40'),
        }
      },
      nameTextStyle: {
        color: getCssVariable('--skin-font-color-60'),
        fontSize: 13
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: getCssVariable('--skin-font-color-80'),
        fontSize: 13
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: getCssVariable('--skin-font-color-40'),
        }
      },
      name: 'mg/L',
      nameTextStyle: {
        color: getCssVariable('--skin-font-color-60'),
        align: 'right',
        padding: [0, 0, 10, -24],
        fontSize: 13
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: getCssVariable('--skin-font-color-40'),
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
state.monitorTime = global.businessDialog.dialogParmas.monitorTime;
state.assessType = global.businessDialog.dialogParmas.assessType;
state.pointCode = global.businessDialog.dialogParmas.pointCode;

// 结束时间
const endTime = dateFormat(new Date(state.monitorTime), 'yyyy-MM-dd');
// 开始时间
const startTime = dateFormat(getPrevTime(new Date(state.monitorTime), 'day'), 'yyyy-MM-dd');

// 赋值时间
changeTime([startTime || '', endTime || ''])

// 获取基本信息接口
apiRegistry.getBaseInfo.request();
// 获取水质监测信息接口
apiRegistry.getMonitorData.request();
// 获取水质变化趋势接口
apiRegistry.getWaterVariationTrend.request();
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
state.startTime = time[0] || "";
state.endTime = time[1] || '';
};
const changeStandard = () => {
state.variationTrendData.chartOptions.series = [
  ...state.seriesData,
  ...(state.isBz ? state.standardSeriesData : [])
];
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
  // 获取图表实例，并在切换柱/线时强制“标准值系列”保持 line（避免标准值变成柱）
  
  state.myChart = myChart;
  if (!myChart || myChart.__keepStandardLineBound) return;
  myChart.__keepStandardLineBound = true;
  
  const applyOption = () => {
    if (!state.myChart) return;
    const option = _.cloneDeep(state.variationTrendData?.chartOptions || {});
    const baseSeries = (_.cloneDeep(state.seriesData || [])).map((s) => ({
      ...s,
      type: state.currentChartType || 'line',
      barWidth: 12
    }));
    let standardSeries = state.isBz === true ? _.cloneDeep(state.standardSeriesData || []) : [];
    if (Array.isArray(standardSeries)) {
      standardSeries = standardSeries.map((s) => ({
        ...s,
        type: 'line',
        symbol: s?.symbol ?? 'none'
      }));
    }
    option.series = [...baseSeries, ...standardSeries];
    state.myChart.setOption(option, { notMerge: true, lazyUpdate: false });
  };
  
  // 初次拿到实例时也执行一次（比如当前已处于柱图）
  applyOption();
  
  myChart.on('magictypechanged', (e) => {
    state.currentChartType = e?.currentType || 'line';
    applyOption();
  });
};
const onchange1735803291651 = (value) => {
// 设置变量值
state.isBz = value;
// 执行自定义方法
changeStandard();
};
const ondateChange1735547804401 = (data) => {
// 执行自定义方法
changeTime(data);
// 执行自定义方法
handleWaterTarget();
};
const onchange1733973555614 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.variationTrendData.activeTarget = value;
// 执行自定义方法
handleWaterTarget();
};
const ongetChartInstance1769678024584 = (chart) => {
// 执行自定义方法
handleCharts(chart);
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"a":"","POINT_CODE":"state.pointCode","ASSESSTYPE":"state.assessType","MONITORTIME":"state.monitorTime","interfaceId":"7e646485d5e40eb0cb831d4a5520f81a"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"a":"","POINT_CODE":state.pointCode,"ASSESSTYPE":state.assessType,"MONITORTIME":state.monitorTime,"interfaceId":"7e646485d5e40eb0cb831d4a5520f81a"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"a":"","POINT_CODE":state.pointCode,"ASSESSTYPE":state.assessType,"MONITORTIME":state.monitorTime,"interfaceId":"7e646485d5e40eb0cb831d4a5520f81a"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     console.log(res);
const { data } = res;
if(data.head.statusCode === '200' && data.data){
  // 行政区
  state.baseInfoData[0].num = data.data?.REGION_NAME || '-';
  // 所在水体
  state.baseInfoData[1].num = `${data.data?.WSYSTEM_NAME}/${data.data?.WATER_NAME}` || '-';
  // 控制级别
  state.baseInfoData[2].num = data.data?.CONTROLLEVEL || '-';
  // 断面属性
  state.baseInfoData[3].num = data.data?.CONNECT_PROPERTY || '-';
  // 水质目标
  state.baseInfoData[4].num = data.data?.WATERQUALITYLEVELTARGETNAME || '-';
  state.baseInfoData[4].color = getWaterLevelColor(data.data?.WATERQUALITYLEVELTARGETNAME);
  // 超标污染物
  state.baseInfoData[5].num = data.data?.OVERPOLLUTE || '-';
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
 getMonitorData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.pointCode","ASSESSTYPE":"state.assessType","MONITORTIME":"state.monitorTime","interfaceId":"9aa166c764dc978924f8c033280fc6e9"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.pointCode,"ASSESSTYPE":state.assessType,"MONITORTIME":state.monitorTime,"interfaceId":"9aa166c764dc978924f8c033280fc6e9"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.pointCode,"ASSESSTYPE":state.assessType,"MONITORTIME":state.monitorTime,"interfaceId":"9aa166c764dc978924f8c033280fc6e9"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMonitorData'] = res.data;
                
     console.log(res);
const { data } = res;
if (data.head.statusCode === '200' && data.data) {
  // 超标的样式
  const exceedStandardStyle = {
    "cardIconStyle": {
      "background": "#FF2B2B"
    },
    "valueStyle": {
      "color": "#FF2B2B"
    },
    "labelIconStyle": {
    }
  };

  // 达标的样式
  const meetStandardStyle = {
    "cardIconStyle": {
      "background": "#00DA2A"
    },
    "labelIconStyle": {
    }
  };
  // pH---------------------------
  state.monitorData[0].value = data.data?.W01001_VALUE || '-';
  state.monitorData[0].style = {
    "labelIconStyle": {
      "background-image": getWaterLevelSrc(data.data?.W01001_CODE_WATERLEVEL)
    }
  };
  if (data.data?.W01001_ISSTANDARDS === '0') {
    // 超标
    state.monitorData[0].style = {
      ...exceedStandardStyle,
      ...state.monitorData[0].style
    };
  } else if (data.data?.W01001_ISSTANDARDS === '1') {
    // 达标
    state.monitorData[0].style = {
      ...meetStandardStyle,
      ...state.monitorData[0].style
    };
  }
  // DO----------------------------
  state.monitorData[1].value = data.data?.W01009_VALUE || '-';
  state.monitorData[1].style = {
    "labelIconStyle": {
      "background-image": getWaterLevelSrc(data.data?.W01009_CODE_WATERLEVEL)
    }
  };
  if (data.data?.W01009_ISSTANDARDS === '0') {
    state.monitorData[1].style = {
      ...exceedStandardStyle,
      ...state.monitorData[1].style
    };
  } else if (data.data?.W01009_ISSTANDARDS === '1') {
    state.monitorData[1].style = {
      ...meetStandardStyle,
      ...state.monitorData[1].style
    };
  }
  // IMn--------------------
  state.monitorData[2].value = data.data?.W01019_VALUE || '-';
  state.monitorData[2].style = {
    "labelIconStyle": {
      "background-image": getWaterLevelSrc(data.data?.W01019_CODE_WATERLEVEL)
    }
  };
  if (data.data?.W01019_ISSTANDARDS === '0') {
    state.monitorData[2].style = {
      ...exceedStandardStyle,
      ...state.monitorData[2].style
    };
  } else if (data.data?.W01019_ISSTANDARDS === '1') {
    state.monitorData[2].style = {
      ...meetStandardStyle,
      ...state.monitorData[2].style
    };
  }
  // NH3-N
  state.monitorData[3].value = data.data?.W21003_VALUE || '-';
  state.monitorData[3].style = {
    "labelIconStyle": {
      "background-image": getWaterLevelSrc(data.data?.W21003_CODE_WATERLEVEL)
    }
  };
  if (data.data?.W21003_ISSTANDARDS === '0') {
    state.monitorData[3].style = {
      ...exceedStandardStyle,
      ...state.monitorData[3].style
    };
  } else if (data.data?.W21003_ISSTANDARDS === '1') {
    state.monitorData[3].style = {
      ...meetStandardStyle,
      ...state.monitorData[3].style
    };
  }
  // TP
  state.monitorData[4].value = data.data?.W21011_VALUE || '-';
  state.monitorData[4].style = {
    "labelIconStyle": {
      "background-image": getWaterLevelSrc(data.data?.W21011_CODE_WATERLEVEL)
    }
  };
  if (data.data?.W21011_ISSTANDARDS === '0') {
    state.monitorData[4].style = {
      ...exceedStandardStyle,
      ...state.monitorData[4].style
    };
  } else if (data.data?.W21011_ISSTANDARDS === '1') {
    state.monitorData[4].style = {
      ...meetStandardStyle,
      ...state.monitorData[4].style
    };
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
 getWaterVariationTrend: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.pointCode","START_MONITORTIME":"state.startTime","END_MONITORTIME":"state.endTime","interfaceId":"f002b62e1afdac462dfa3ad2857822cf"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.pointCode,"START_MONITORTIME":state.startTime,"END_MONITORTIME":state.endTime,"interfaceId":"f002b62e1afdac462dfa3ad2857822cf"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.pointCode,"START_MONITORTIME":state.startTime,"END_MONITORTIME":state.endTime,"interfaceId":"f002b62e1afdac462dfa3ad2857822cf"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getWaterVariationTrend'] = res.data;
                
     console.log(res);
const { data } = res;
state.seriesData = []
state.standardSeriesData = []

if (data.head.statusCode === '200' && data.data.length) {
  let xAxisData = []; // x轴数据
  let yearTargetData = []; // 年度目标
  let seriesData = []; // 系列数据

  data.data.forEach((item) => {
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
        data: data.data.filter((x) => x.POINT_CODE === item.POINT_CODE).map((dataItem) => ({
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
},
              },
// 接口函数
 getPollutantVariationTrend: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"END_MONITORTIME":"state.endTime","START_MONITORTIME":"state.startTime","POLLUTE_CODE":"state.variationTrendData.activeTarget","POINT_CODE":"state.pointCode","interfaceId":"f5a13b25067b52a45d626d1f0284372d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"END_MONITORTIME":state.endTime,"START_MONITORTIME":state.startTime,"POLLUTE_CODE":state.variationTrendData.activeTarget,"POINT_CODE":state.pointCode,"interfaceId":"f5a13b25067b52a45d626d1f0284372d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"END_MONITORTIME":state.endTime,"START_MONITORTIME":state.startTime,"POLLUTE_CODE":state.variationTrendData.activeTarget,"POINT_CODE":state.pointCode,"interfaceId":"f5a13b25067b52a45d626d1f0284372d"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPollutantVariationTrend'] = res.data;
                
     console.log(res);
state.seriesData = []
state.standardSeriesData = []
const { data } = res;
if (data.head.statusCode === '200' && data.data.length) {
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

  data.data.forEach((item) => {
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
        data: data.data.filter((x) => x.POINT_CODE === item.POINT_CODE).map((dataItem) => ({
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
              "yAxis": Number(data.data[0].STANDARDVALUEMIN || '6')
            },
            {
              "name": "",
              "yAxis": Number(data.data[0].STANDARDVALUEMAX || '9')
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
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-waterDialogAutoDayBaseInfo', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setNoDataIcon();
// 执行自定义方法
initPageData();
onMounted(() => {
setPageScale('t-l-c-waterDialogAutoDayBaseInfo', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tChartDesignx0x2ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x2.default, componentState.tChartDesignx0x2?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tListCardx0x3ComputedData = computed(() => _.merge({}, componentState.tListCardx0x3.default, componentState.tListCardx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tCirclex0x5ComputedData = computed(() => _.merge({}, componentState.tCirclex0x5.default, componentState.tCirclex0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tScrollableCardsx0x7ComputedData = computed(() => _.merge({}, componentState.tScrollableCardsx0x7.default, componentState.tScrollableCardsx0x7?.[state.screenSize]));

 const tRowx0x8ComputedData = computed(() => _.merge({}, componentState.tRowx0x8.default, componentState.tRowx0x8?.[state.screenSize]));

 const tTextx0x8x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x8x0.default, componentState.tTextx0x8x0?.[state.screenSize]));

 const tRowx0x9ComputedData = computed(() => _.merge({}, componentState.tRowx0x9.default, componentState.tRowx0x9?.[state.screenSize]));

 const tColx0x9x0ComputedData = computed(() => _.merge({}, componentState.tColx0x9x0.default, componentState.tColx0x9x0?.[state.screenSize]));

 const tTextx0x9x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x9x0x0.default, componentState.tTextx0x9x0x0?.[state.screenSize]));

 const tColx0x9x1ComputedData = computed(() => _.merge({}, componentState.tColx0x9x1.default, componentState.tColx0x9x1?.[state.screenSize]));

 const tDatePickerx0x9x1x0ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x9x1x0.default, componentState.tDatePickerx0x9x1x0?.[state.screenSize]));

 const tColx0x9x2ComputedData = computed(() => _.merge({}, componentState.tColx0x9x2.default, componentState.tColx0x9x2?.[state.screenSize]));

 const tSelectx0x9x2x0ComputedData = computed(() => _.merge({}, componentState.tSelectx0x9x2x0.default, componentState.tSelectx0x9x2x0?.[state.screenSize]));

 const tRowx0x10ComputedData = computed(() => _.merge({}, componentState.tRowx0x10.default, componentState.tRowx0x10?.[state.screenSize]));

 const tTextx0x10x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x10x0.default, componentState.tTextx0x10x0?.[state.screenSize]));

 const tSwitchx0x10x1ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x10x1.default, componentState.tSwitchx0x10x1?.[state.screenSize]));

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
tComponentx0x1ComputedData,
tChartDesignx0x2ComputedData,
tListCardx0x3ComputedData,
tTextx0x4ComputedData,
tCirclex0x5ComputedData,
tTextx0x6ComputedData,
tScrollableCardsx0x7ComputedData,
tRowx0x8ComputedData,
tTextx0x8x0ComputedData,
tRowx0x9ComputedData,
tColx0x9x0ComputedData,
tTextx0x9x0x0ComputedData,
tColx0x9x1ComputedData,
tDatePickerx0x9x1x0ComputedData,
tColx0x9x2ComputedData,
tSelectx0x9x2x0ComputedData,
tRowx0x10ComputedData,
tTextx0x10x0ComputedData,
tSwitchx0x10x1ComputedData,
ongetChartInstance1769678024584,
ondateChange1735547804401,
onchange1733973555614,
onchange1735803291651,
};
},
};