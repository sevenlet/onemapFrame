window.waterDialogHandBaseInfoComponent = {
template: 
`<div id="t-l-c-waterDialogHandBaseInfo" class="t-l-c-waterDialogHandBaseInfo" >` +
`<t-circle id="t-circle-7dbd.196078e2c" class="waterDialogHandBaseInfo-t-circle-0-0"  :tip="tCirclex0x0ComputedData.tip" :label="tCirclex0x0ComputedData.label" :active="tCirclex0x0ComputedData.active" :c-style="tCirclex0x0ComputedData.cStyle">` +
`</t-circle>` +
`<t-text id="t-text-e92f.6243867ce" class="waterDialogHandBaseInfo-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle">` +
`</t-text>` +
`<t-chart-design v-if="state.isBz === true" id="t-chart-design-b252.5effe541d" class="waterDialogHandBaseInfo-t-chart-design-0-3"  :empty-img="replaceCssVariables(filterData(state.noDataImg, componentPropBindingMap?.['t-chart-design-b252.5effe541d']['emptyImg'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tChartDesignx0x3ComputedData.cStyle" :options="replaceCssVariables(filterData(state.options, componentPropBindingMap?.['t-chart-design-b252.5effe541d']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @get-chart-instance="ongetChartInstance1764308327093_0_0">` +
`</t-chart-design>` +
`<t-chart-design v-if="state.isBz === false" id="t-chart-design-3774.63e82ca0e" class="waterDialogHandBaseInfo-t-chart-design-0-4"  :empty-img="replaceCssVariables(filterData(state.noDataImg, componentPropBindingMap?.['t-chart-design-3774.63e82ca0e']['emptyImg'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tChartDesignx0x4ComputedData.cStyle" :options="replaceCssVariables(filterData(state.variationTrendData.chartOptions, componentPropBindingMap?.['t-chart-design-3774.63e82ca0e']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @get-chart-instance="ongetChartInstance1764135516141">` +
`</t-chart-design>` +
`<t-list-card id="t-list-card-d9ab.2e21fb3b5" class="waterDialogHandBaseInfo-t-list-card-0-6"  :data="replaceCssVariables(filterData(state.baseInfoData, componentPropBindingMap?.['t-list-card-d9ab.2e21fb3b5']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x6ComputedData.spacingX" :col="tListCardx0x6ComputedData.col" :direction="tListCardx0x6ComputedData.direction" :exchange-order="tListCardx0x6ComputedData.exchangeOrder" :unit-break="tListCardx0x6ComputedData.unitBreak" :key-field="tListCardx0x6ComputedData.keyField" :active-key-field="tListCardx0x6ComputedData.activeKeyField" :active="tListCardx0x6ComputedData.active" :c-style="tListCardx0x6ComputedData.cStyle">` +
`</t-list-card>` +
`<t-component id="t-component-c019.99b6d840a" class="waterDialogHandBaseInfo-t-component-0-7"  :name="tComponentx0x7ComputedData.name" :c-style="tComponentx0x7ComputedData.cStyle" :src="tComponentx0x7ComputedData.src" :component-name="tComponentx0x7ComputedData.componentName" :page-id="tComponentx0x7ComputedData.pageId" :page-code="tComponentx0x7ComputedData.pageCode">` +
`</t-component>` +
`<t-text id="t-text-62b3.48b14905c" class="waterDialogHandBaseInfo-t-text-0-8"  :label="tTextx0x8ComputedData.label" :editable="tTextx0x8ComputedData.editable" :c-style="tTextx0x8ComputedData.cStyle">` +
`</t-text>` +
`<t-scrollable-cards id="t-scrollable-cards-455f.ff3a2c962" class="waterDialogHandBaseInfo-t-scrollable-cards-0-9"  :c-style="tScrollableCardsx0x9ComputedData.cStyle" :show-icon="tScrollableCardsx0x9ComputedData.showIcon" :auto-scroll="tScrollableCardsx0x9ComputedData.autoScroll" :tab="tScrollableCardsx0x9ComputedData.tab" :key-word="tScrollableCardsx0x9ComputedData.keyWord" :default-checked="tScrollableCardsx0x9ComputedData.defaultChecked" :speed="tScrollableCardsx0x9ComputedData.speed" :interval="tScrollableCardsx0x9ComputedData.interval" :card-space="tScrollableCardsx0x9ComputedData.cardSpace" :direction="tScrollableCardsx0x9ComputedData.direction" :data-alias="tScrollableCardsx0x9ComputedData.dataAlias" :data="replaceCssVariables(filterData(state.monitorData, componentPropBindingMap?.['t-scrollable-cards-455f.ff3a2c962']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @card-click="oncardClick1770123179284">` +
`</t-scrollable-cards>` +
`<t-row id="t-row-3ae9.949fc1c3b" class="waterDialogHandBaseInfo-t-row-0-11"  :c-style="tRowx0x11ComputedData.cStyle" :gutter="tRowx0x11ComputedData.gutter" :justify="tRowx0x11ComputedData.justify" :align="tRowx0x11ComputedData.align">` +
`<t-col id="t-col-5c12.21387b6cc" class="waterDialogHandBaseInfo-t-col-0-11-0"  :span="tColx0x11x0ComputedData.span" :offset="tColx0x11x0ComputedData.offset" :push="tColx0x11x0ComputedData.push" :pull="tColx0x11x0ComputedData.pull" :c-style="tColx0x11x0ComputedData.cStyle">` +
`<t-text id="t-text-6063.4db73323" class="waterDialogHandBaseInfo-t-text-0-11-0-0"  :label="replaceCssVariables(filterData(state.variationTrendData.title, componentPropBindingMap?.['t-text-6063.4db73323']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x11x0x0ComputedData.editable" :c-style="tTextx0x11x0x0ComputedData.cStyle">` +
`</t-text>` +
`</t-col>` +
`<t-col id="t-col-facf.ef4316657" class="waterDialogHandBaseInfo-t-col-0-11-1"  :span="tColx0x11x1ComputedData.span" :offset="tColx0x11x1ComputedData.offset" :push="tColx0x11x1ComputedData.push" :pull="tColx0x11x1ComputedData.pull" :c-style="tColx0x11x1ComputedData.cStyle">` +
`<t-date-picker id="t-date-picker-b356.86cbc2728" class="waterDialogHandBaseInfo-t-date-picker-0-11-1-0"  :placeholder="tDatePickerx0x11x1x0ComputedData.placeholder" :start-placeholder="tDatePickerx0x11x1x0ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x11x1x0ComputedData.endPlaceholder" :type="tDatePickerx0x11x1x0ComputedData.type" :clearable="tDatePickerx0x11x1x0ComputedData.clearable" :range-separator="tDatePickerx0x11x1x0ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeRange, componentPropBindingMap?.['t-date-picker-b356.86cbc2728']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x11x1x0ComputedData.separator" :readonly="tDatePickerx0x11x1x0ComputedData.readonly" :editable="tDatePickerx0x11x1x0ComputedData.editable" :c-style="tDatePickerx0x11x1x0ComputedData.cStyle" @date-change="ondateChange1735549171926">` +
`</t-date-picker>` +
`<t-select id="t-select-3fcb.c00f74209" class="waterDialogHandBaseInfo-t-select-0-11-1-1"  :active-value="replaceCssVariables(filterData(state.variationTrendData.activeTarget, componentPropBindingMap?.['t-select-3fcb.c00f74209']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.categoryList, componentPropBindingMap?.['t-select-3fcb.c00f74209']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x11x1x1ComputedData.alias" :multiple="tSelectx0x11x1x1ComputedData.multiple" :placeholder="tSelectx0x11x1x1ComputedData.placeholder" :clearable="tSelectx0x11x1x1ComputedData.clearable" :disabled="tSelectx0x11x1x1ComputedData.disabled" :name="tSelectx0x11x1x1ComputedData.name" :autocomplete="tSelectx0x11x1x1ComputedData.autocomplete" :filterable="tSelectx0x11x1x1ComputedData.filterable" :no-match-text="tSelectx0x11x1x1ComputedData.no-match-text" :no-data-text="tSelectx0x11x1x1ComputedData.no-data-text" :c-style="tSelectx0x11x1x1ComputedData.cStyle" @change="onchange1733973555614">` +
`</t-select>` +
`</t-col>` +
`</t-row>` +
`<t-row id="t-row-9111.1b5dc7cd5" class="waterDialogHandBaseInfo-t-row-0-12"  :c-style="tRowx0x12ComputedData.cStyle" :gutter="tRowx0x12ComputedData.gutter" :justify="tRowx0x12ComputedData.justify" :align="tRowx0x12ComputedData.align">` +
`<t-col id="t-col-e76b.cb7d21096" class="waterDialogHandBaseInfo-t-col-0-12-0"  :span="tColx0x12x0ComputedData.span" :offset="tColx0x12x0ComputedData.offset" :push="tColx0x12x0ComputedData.push" :pull="tColx0x12x0ComputedData.pull" :c-style="tColx0x12x0ComputedData.cStyle">` +
`<t-text id="t-text-c954.b258bcb6b" class="waterDialogHandBaseInfo-t-text-0-12-0-0"  :label="tTextx0x12x0x0ComputedData.label" :editable="tTextx0x12x0x0ComputedData.editable" :c-style="tTextx0x12x0x0ComputedData.cStyle">` +
`</t-text>` +
`<t-switch id="t-switch-fdd4.057ab13d6" class="waterDialogHandBaseInfo-t-switch-0-12-0-1"  :value="tSwitchx0x12x0x1ComputedData.value" :c-style="tSwitchx0x12x0x1ComputedData.cStyle" @change="onchange1735789295216">` +
`</t-switch>` +
`</t-col>` +
`</t-row>` +
`<t-row id="t-row-bed0.5ca83a488" class="waterDialogHandBaseInfo-t-row-0-13"  :c-style="tRowx0x13ComputedData.cStyle" :gutter="tRowx0x13ComputedData.gutter" :justify="tRowx0x13ComputedData.justify" :align="tRowx0x13ComputedData.align">` +
`<t-text id="t-text-b39c.b6c03321c" class="waterDialogHandBaseInfo-t-text-0-13-0"  :label="replaceCssVariables(filterData(state.monitorTime, componentPropBindingMap?.['t-text-b39c.b6c03321c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x13x0ComputedData.editable" :c-style="tTextx0x13x0ComputedData.cStyle">` +
`</t-text>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-circle-7dbd.196078e2c":{"attributeName":"tCirclex0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-e92f.6243867ce":{"attributeName":"tTextx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-1db8.1552d9ecf":{"attributeName":"tTextx0x2"},"t-chart-design-b252.5effe541d":{"attributeName":"tChartDesignx0x3","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-chart-design-3774.63e82ca0e":{"attributeName":"tChartDesignx0x4","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-text-6bd8.88c9af1c1":{"attributeName":"tTextx0x5"},"t-list-card-d9ab.2e21fb3b5":{"attributeName":"tListCardx0x6","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-c019.99b6d840a":{"attributeName":"tComponentx0x7","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-62b3.48b14905c":{"attributeName":"tTextx0x8","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-scrollable-cards-455f.ff3a2c962":{"attributeName":"tScrollableCardsx0x9","cStyle":{"filters":[]},"showIcon":{"filters":[]},"autoScroll":{"filters":[]},"tab":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"speed":{"filters":[]},"interval":{"filters":[]},"cardSpace":{"filters":[]},"direction":{"filters":[]},"dataAlias":{"filters":[]},"data":{"filters":[]}},"t-switch-e262.17829daa":{"attributeName":"tSwitchx0x10"},"t-row-3ae9.949fc1c3b":{"attributeName":"tRowx0x11","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-5c12.21387b6cc":{"attributeName":"tColx0x11x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-6063.4db73323":{"attributeName":"tTextx0x11x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-facf.ef4316657":{"attributeName":"tColx0x11x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-b356.86cbc2728":{"attributeName":"tDatePickerx0x11x1x0","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-3fcb.c00f74209":{"attributeName":"tSelectx0x11x1x1","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-row-9111.1b5dc7cd5":{"attributeName":"tRowx0x12","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-e76b.cb7d21096":{"attributeName":"tColx0x12x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-c954.b258bcb6b":{"attributeName":"tTextx0x12x0x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-switch-fdd4.057ab13d6":{"attributeName":"tSwitchx0x12x0x1","value":{"filters":[]},"cStyle":{"filters":[]}},"t-row-bed0.5ca83a488":{"attributeName":"tRowx0x13","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-b39c.b6c03321c":{"attributeName":"tTextx0x13x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   overPollute: "",
   categoryList: [],
   options: "",
   myChart: "",
   isBz: true,
   seriesData: [],
   standardSeriesData: [],
   noDataImg: "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
   dataSourcetype: "",
   variationTrendData: {"title":"近12个月水质变化趋势","activeTarget":"","chartOptions":{"series":[]},"chartShow":true},
   monitorData: [{"value":"-","label":"pH"},{"value":"-","label":"DO","unit":"mg/L"},{"value":"-","label":"IMn","unit":"mg/L"},{"value":"-","label":"NH₃-H","unit":"mg/L"},{"value":"-","label":"TP","unit":"mg/L"}],
   baseInfoData: [{"title":"行政区","num":"-"},{"title":"所在水体","num":"-"},{"title":"控制级别","num":"-"},{"title":"断面属性","num":"-"},{"title":"水质目标","num":"-","color":""},{"title":"超标污染物","num":"-","color":"#FF2B2B"}],
   assessType: "",
   pointCode: "",
   monitorTime: "",
   timeRange: [],
   endTime: "",
   startTime: "",
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
tCirclex0x0: {
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
tTextx0x1: {
defaultStyle: {
            default: {"width":"auto","height":"24px","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","top":"160px","left":"13px","position":"unset","lineHeight":"24px"},
            
            },
 default: { 
 
label:"表示该指标超标（mg/L，pH值除外）",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"24px","color":"var(--business-text-avianize)","fontSize":"var(--text-size-14)","top":"160px","left":"13px","position":"unset","lineHeight":"24px"}}}, 
 },
},
tChartDesignx0x3: {
defaultStyle: {
            default: {"height":"calc(100% - 326px)","width":"100%","position":"unset","left":"0px","top":"326px","animationName":""},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
cStyle:{"wrapper":{"default":{"height":"calc(100% - 326px)","width":"100%","position":"unset","left":"0px","top":"326px","animationName":""}},"emptyText":{"default":{"fontSize":"var(--text-size-14)","color":"var(--business-white)"}},"emptyImg":{"default":{"display":"none","fontSize":"var(--text-size-14)","color":"var(--business-white)"}}},
options:"", 
 },
},
tChartDesignx0x4: {
defaultStyle: {
            default: {"height":"0px","width":"824px","position":"unset","left":"0px","top":"326px"},
            
            },
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-26/f1200f84c82a4a1698a450dfa89ceedb.svg",
cStyle:{"wrapper":{"default":{"height":"0px","width":"824px","position":"unset","left":"0px","top":"326px"}},"emptyText":{"default":{"fontSize":"var(--text-size-14)","color":"var(--business-white)"}},"emptyImg":{"default":{"display":"none"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"series":[]})), 
 },
},
tListCardx0x6: {
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
cStyle:{"wrapper":{"default":{"width":"100%","height":"95px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--base-label-bg-color)","width":"30%","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--base-label-title-color)","fontSize":"var(--business-text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px","height":"","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"numBox":{"default":{"backgroundColor":"var(--info-background)","width":"69.5%","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px","height":""}},"num":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--skin-font-color)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"var(--text-size-14)"}}}, 
 },
},
tComponentx0x7: {
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
tTextx0x8: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"40px","top":"124px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
label:"水质监测信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"40px","top":"124px","fontFamily":"方正综艺","fontSize":"var(--text-size-14)","animationName":"","lineHeight":"20px"}}}, 
 },
},
tScrollableCardsx0x9: {
defaultStyle: {
            default: {"width":"100%","height":"64px","borderRadius":"8px","padding":"11px 9px 8px","background":"linear-gradient(180deg, #219DFF 0%, rgba(0,213,255,0.00) 190%)","paddingLeft":"0px","paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","backgroundColor":"","backgroundImage":"linear-gradient(0deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0) 99.54954954954955%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"18px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"64px","borderRadius":"8px","padding":"11px 9px 8px","background":"linear-gradient(180deg, #219DFF 0%, rgba(0,213,255,0.00) 190%)","paddingLeft":"0px","paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","backgroundColor":"","backgroundImage":"linear-gradient(0deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0) 99.54954954954955%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"18px","animationName":""}},"itemWrapper":{"default":{"width":"150px","height":"64px","marginLeft":"0px","marginRight":"8px !important","cursor":"auto","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","display":"flex","flexDirection":"column-reverse","justify-content":"center"},"active":{}},"container":{"default":{"width":"100%","height":"auto","paddingLeft":"0px","paddingTop":"0px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"12px","paddingRight":"0px","marginRight":"12px"}},"cardLabel":{"default":{"fontSize":"var(--text-size-14)","lineHeight":"24px","color":"var(--skin-font-color)","fontFamily":"微软雅黑","height":"24px","display":"flex","justify-content":"center"}},"cardLabelIcon":{"default":{"width":"18px","height":"18px","marginLeft":"4px"}},"cardValue":{"default":{"fontSize":"var(--text-size-14)","fontWeight":"500","fontFamily":"DIN-bold","color":"var(--skin-font-color)","lineHeight":"24px","height":"24px","display":"flex","justify-content":"center"}},"cardValueUnit":{"default":{"fontSize":"14px","fontWeight":"normal","fontFamily":"微软雅黑","marginLeft":"4px","color":"var(--business-text-avianize)"}},"leftArrowButton":{"default":{"color":"var(--skin-font-color) !important","backgroundColor":"var(--business-show-bg15)","width":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)"},"hover":{"color":"var(--business-theme) !important","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)"}},"leftArrow":{"default":{"color":"inherit !important"}},"rightArrow":{"default":{"color":"inherit !important"}},"rightArrowButton":{"default":{"color":"var(--skin-font-color) !important","backgroundColor":"var(--business-show-bg15)","width":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(23,62,228,0)","borderTop":"1px solid rgba(23,62,228,0)","borderRight":"1px solid rgba(23,62,228,0)","borderBottom":"1px solid rgba(23,62,228,0)"},"hover":{"color":"var(--business-theme) !important","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-btn-default)","borderTop":"1px solid var(--business-btn-default)","borderRight":"1px solid var(--business-btn-default)","borderBottom":"1px solid var(--business-btn-default)"}}},
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
data:[{"value":"-","label":"pH"},{"value":"-","label":"DO","unit":"mg/L"},{"value":"-","label":"IMn","unit":"mg/L"},{"value":"-","label":"NH？-H","unit":"mg/L"},{"value":"-","label":"TP","unit":"mg/L"}], 
 },
},
tRowx0x11: {
defaultStyle: {
            default: {"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"275px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"32px","display":"flex","justifyContent":"center","alignItems":"center","position":"unset","left":"0px","top":"275px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x11x0: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"left","alignItems":"center"},
            
            },
 default: { 
 
span:6,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"left","alignItems":"center"}}}, 
 },
},
tTextx0x11x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"32px","color":"var(--business-white)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"289px","left":"0px","position":"unset"},
            
            },
 default: { 
 
label:"近12个月水质变化趋势",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"32px","color":"var(--business-white)","lineHeight":"32px","fontSize":"var(--text-size-14)","fontFamily":"方正综艺","top":"289px","left":"0px","position":"unset"}},"cardValue":{"default":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tColx0x11x1: {
defaultStyle: {
            default: {"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","gap":"10px"},
            
            },
 default: { 
 
span:18,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","display":"flex","justifyContent":"right","alignItems":"center","gap":"10px"}}}, 
 },
},
tDatePickerx0x11x1x0: {
defaultStyle: {
            default: {"width":"330px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"monthrange",
clearable:true,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"330px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","lineHeight":"20px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","lineHeight":"20px"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%","lineHeight":"20px"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"30px"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--skin-font-color)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--skin-font-color)"}},"operatorArrow":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--skin-font-color)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--skin-font-color)","borderLeft":"1px solid var(--skin-font-color)","borderTop":"1px solid var(--skin-font-color)","borderRight":"1px solid var(--skin-font-color)","borderBottom":"1px solid var(--skin-font-color)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--skin-font-color)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--skin-font-color)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tSelectx0x11x1x1: {
defaultStyle: {
            default: {"width":"190px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},
            
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
cStyle:{"wrapper":{"default":{"width":"190px","height":"33px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tRowx0x12: {
defaultStyle: {
            default: {"width":"100%","height":"30px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"328px","pointerEvents":"none"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"100%","height":"30px","display":"flex","justifyContent":"right","alignItems":"center","position":"unset","left":"0px","top":"328px","pointerEvents":"none"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x12x0: {
defaultStyle: {
            default: {"width":"100px","height":"30px","display":"flex","justifyContent":"right","alignItems":"center","pointerEvents":"none"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"30px","display":"flex","justifyContent":"right","alignItems":"center","pointerEvents":"none"}}}, 
 },
},
tTextx0x12x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"726px","top":"327px","fontSize":"var(--text-size-14)","lineHeight":"22px","animationName":"","textAlign":"right","marginRight":"15px"},
            
            },
 default: { 
 
label:"标准值",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"726px","top":"327px","fontSize":"var(--text-size-14)","lineHeight":"22px","animationName":"","textAlign":"right","marginRight":"15px"}},"cardValue":{"default":{"fontSize":"var(--text-size-14)"}}}, 
 },
},
tSwitchx0x12x0x1: {
defaultStyle: {
            default: {"width":"32px","height":"22px","position":"unset","left":"791px","top":"328px","animationName":"","marginLeft":"0px","paddingLeft":"0px"},
            
            },
 default: { 
 
value:true,
cStyle:{"wrapper":{"default":{"width":"32px","height":"22px","position":"unset","left":"791px","top":"328px","animationName":"","marginLeft":"0px","paddingLeft":"0px"}},"core":{"active":{"backgroundColor":"var(--business-theme)","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
tRowx0x13: {
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
tTextx0x13x0: {
defaultStyle: {
            default: {"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"124.5px","left":"645px","textAlign":"right","fontSize":"var(--text-size-14)","position":"unset","marginRight":"50px"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"164px","height":"19px","color":"rgba(255, 255, 255, 0.9)","top":"124.5px","left":"645px","textAlign":"right","fontSize":"var(--text-size-14)","position":"unset","marginRight":"50px"}}}, 
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
        color: 'var(--skin-font-color)'
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
              color: 'var(--skin-font-color)'
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
            color: 'var(--skin-font-color)',
            fontSize: 'var(--business-text-size-18)'
          },
          // data: ['当月值', '累计均值', '去年同期', '去年累计均值指标']
          data: ['当月值',  '去年同期', '前年同期']
    
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
            color: 'var(--skin-font-color-80)',
            fontSize: 'var(--business-text-size-12)',
            rotate: 45
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: 'var(--skin-font-color-40)'
            }
          },
          axisTick: {
            show: true,
            lineStyle: {
              color: 'var(--skin-font-color-40)'
            }
          },
          nameTextStyle: {
            color: 'var(--skin-font-color-60)',
            fontSize: 'var(--business-text-size-12)'
          }
        },
        yAxis: {
          type: 'value',
          max: 6,
          axisLabel: {
            formatter: function (value) {
              return getWaterChartLabel(value);
            },
            color: 'var(--skin-font-color-80)',
            fontSize: 'var(--business-text-size-12)'
          },
          axisLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: 'var(--skin-font-color-40)'
            }
          },
          name: '',
          nameTextStyle: {
            color: 'var(--skin-font-color-60)',
            align: 'right',
            padding: [0, 0, 10, -24],
            fontSize: 'var(--business-text-size-12)'
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: 'var(--skin-font-color-20)'
            }
          },
          splitLine: { show: false }
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
              color: 'var(--skin-font-color)'
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
            color: 'var(--skin-font-color)',
            fontSize: 'var(--business-text-size-18)'
          },
          data: ['当月值', '去年同期', '前年同期']
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
            color: 'var(--skin-font-color-80)',
            fontSize: 'var(--business-text-size-12)',
            rotate: 45
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: 'var(--skin-font-color-40)'
            }
          },
          axisTick: {
            show: true,
            lineStyle: {
              color: 'var(--skin-font-color-40)'
            }
          },
          nameTextStyle: {
            color: 'var(--skin-font-color-60)',
            fontSize: 'var(--business-text-size-12)'
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: 'var(--skin-font-color-80)',
            fontSize: 'var(--business-text-size-12)'
          },
          axisLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: 'var(--skin-font-color-40)'
            }
          },
          name: '',
          nameTextStyle: {
            color: 'var(--skin-font-color-60)',
            align: 'right',
            padding: [0, 0, 10, -24],
            fontSize: 'var(--business-text-size-12)'
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: 'var(--skin-font-color-20)'
            }
          },
          splitLine: { show: false }
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
              color: 'var(--skin-font-color)'
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
            color: 'var(--skin-font-color)',
            fontSize: 'var(--business-text-size-18)'
          },
           data: ['当月值',  '去年同期', '前年同期']
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
            color: 'var(--skin-font-color-80)',
            fontSize: 'var(--business-text-size-12)',
            rotate: 45
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: 'var(--skin-font-color-40)'
            }
          },
          axisTick: {
            show: true,
            lineStyle: {
              color: 'var(--skin-font-color-40)'
            }
          },
          nameTextStyle: {
            color: 'var(--skin-font-color-60)',
            fontSize: 'var(--business-text-size-12)'
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: 'var(--skin-font-color-80)',
            fontSize: 'var(--business-text-size-12)'
          },
          axisLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: 'var(--skin-font-color-40)'
            }
          },
          name: 'mg/L',
          nameTextStyle: {
            color: 'var(--skin-font-color-60)',
            align: 'right',
            padding: [0, 0, 10, -24],
            fontSize: 'var(--business-text-size-12)'
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: 'var(--skin-font-color-20)'
            }
          },
          splitLine: { show: false }
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
state.dataSourcetype = global.businessDialog.dialogParmas.dataSourcetype;

// 结束时间
const endTime = dateFormat(new Date(state.monitorTime), 'yyyy-MM');
// 开始时间
const startTime = dateFormat(getPrevTime(new Date(state.monitorTime), 'month'), 'yyyy-MM');

// 赋值时间
changeTime([startTime || '', endTime || ''])

console.log('基本信息弹窗初始化')
async function getData() {
  // 获取污染物列表
  await apiRegistry.getCategoryList.request();
  // 获取超标污染物
  await apiRegistry.getExcessivePollutants.request();
  // 获取基本信息接口
  await apiRegistry.getBaseInfo.request();
  // 获取水质监测信息接口
  await apiRegistry.getMonitorData.request();
  // 获取变化趋势
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
};
const changeStandard = () => {
// if (
//   Array.isArray(state.seriesData)
//   && Array.isArray(state.standardSeriesData)
// ) {
//   // 没有标准值的
//   state.variationTrendData.chartOptions.series = [
//     ...state.seriesData,
//   ];
//   // 有标准值的
//   state.options = _.cloneDeep(state.variationTrendData.chartOptions)
//   state.options.series = [
//     ...state.seriesData,
//     ...state.standardSeriesData
//   ];
// }
// console.log('没有标准值的',state.variationTrendData.chartOptions)
// console.log('有标准值的', state.options)

if (
  Array.isArray(state.seriesData)
  && Array.isArray(state.standardSeriesData)
) {
  // 获取当前图表类型（用户可能通过 toolbox 切换了类型）
  let currentChartType = 'line'; // 默认折线图
  if (state.myChart) {
    const currentOption = state.myChart.getOption();
    if (currentOption && currentOption.series && currentOption.series[0]) {
      currentChartType = currentOption.series[0].type || 'line';
    }
  }

  // 应用当前图表类型到所有数据系列
  const seriesWithType = state.seriesData.map(item => ({
    ...item,
    type: currentChartType
  }));

  // 没有标准值的
  state.variationTrendData.chartOptions.series = [
    ...seriesWithType,
  ];
  // 有标准值的
  state.options = _.cloneDeep(state.variationTrendData.chartOptions)
  state.options.series = [
    ...seriesWithType,
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
      "fontSize": 'var(--business-text-size-12)',
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


if (!myChart || myChart.__hideStandardInBarBound) return;
myChart.__hideStandardInBarBound = true;

// 监听工具栏切换（line/bar）
myChart.on('magictypechanged', (e) => {
  state.currentChartType = e?.currentType || 'line';

  // 柱图时默认隐藏标准值（避免出现 5 根标准值柱）
  const option = _.cloneDeep(state.variationTrendData?.chartOptions || {});
  const baseSeries = (_.cloneDeep(state.seriesData || [])).map((s) => ({
    ...s,
    type: state.currentChartType,
    barWidth: 12
  }));
  const includeStandard = state.isBz === true;
  let standardSeries = includeStandard ? _.cloneDeep(state.standardSeriesData || []) : [];
  // 柱图下保留标准线，但强制标准值系列保持 line，避免被 magicType 转成柱
  if (state.currentChartType === 'bar' && Array.isArray(standardSeries)) {
    standardSeries = standardSeries.map((s) => ({
      ...s,
      type: 'line',
      symbol: s?.symbol ?? 'none'
    }));
  }
  option.series = [...baseSeries, ...standardSeries];

  myChart.setOption(option, { notMerge: true, lazyUpdate: false });
});
};
const setCardStyle = () => {
const sheet = new CSSStyleSheet();
sheet.insertRule(`body #t-scrollable-cards-455f.ff3a2c962 .scrollable-cards-body {
width: 100% !important;
}`);

document.adoptedStyleSheets = [sheet];

};
const hideStandardBar = () => {
  if (!state.myChart) return;
  
  // 根据当前图形态刷新：柱图时默认隐藏标准值（避免出现 5 根标准值柱）
  const option = _.cloneDeep(state.variationTrendData?.chartOptions || {});
  const baseSeries = (_.cloneDeep(state.seriesData || [])).map((s) => ({
    ...s,
    type: state.currentChartType || 'line',
    barWidth: 12
  }));
  const includeStandard = state.isBz === true;
  let standardSeries = includeStandard ? _.cloneDeep(state.standardSeriesData || []) : [];
  // 柱图下保留标准线，但强制标准值系列保持 line，避免显示为柱
  if ((state.currentChartType || 'line') === 'bar' && Array.isArray(standardSeries)) {
    standardSeries = standardSeries.map((s) => ({
      ...s,
      type: 'line',
      symbol: s?.symbol ?? 'none'
    }));
  }
  option.series = [...baseSeries, ...standardSeries];
  
  state.myChart.setOption(option, { notMerge: true, lazyUpdate: false });
};
const handleCardClick = (value) => {
console.log(value);
state.variationTrendData.activeTarget = value && value.code;
handleWaterTarget();

};
const ongetChartInstance1764308327093_0_0 = (chart) => {
// 执行自定义方法
handleCharts(chart);
};
const ongetChartInstance1764135516141 = (chart) => {
// 执行自定义方法
handleCharts(chart);
};
const onchange1733973555614 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.variationTrendData.activeTarget = value;
// 执行自定义方法
handleWaterTarget();
};
const ondateChange1735549171926 = (data) => {
// 执行自定义方法
changeTime(data);
// 执行自定义方法
handleWaterTarget();
};
const onchange1735789295216 = (value) => {
// 设置变量值
state.isBz = value;
// 执行自定义方法
changeStandard();
};
const oncardClick1770123179284 = (data) => {
// 执行自定义方法
handleCardClick(data);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getCategoryList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"TREE_CODE":"WATER_POLLUTE","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"TREE_CODE":"WATER_POLLUTE","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"TREE_CODE":"WATER_POLLUTE","interfaceId":"fe11357e6d785a36738f41729cfb4b9f"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCategoryList'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.categoryList = data.map(item => ({
    ...item,
    "value": item.DICTIONARYCODE,
    "label": item.DICTIONARYNAME,
    "disabled": false
  }));

  // 添加水质选项到 categoryList 的开头
  state.categoryList.unshift({
    "value": "waterLevelChange",
    "label": "水质",
    "disabled": false
  });
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
 getBaseInfo: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"a":"","POINT_CODE":"state.pointCode","ASSESSTYPE":"state.assessType","MONITORTIME":"state.monitorTime","interfaceId":"c88965d570ad1d00197e1fee3a00c649"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"a":"","POINT_CODE":state.pointCode,"ASSESSTYPE":state.assessType,"MONITORTIME":state.monitorTime,"interfaceId":"c88965d570ad1d00197e1fee3a00c649"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"a":"","POINT_CODE":state.pointCode,"ASSESSTYPE":state.assessType,"MONITORTIME":state.monitorTime,"interfaceId":"c88965d570ad1d00197e1fee3a00c649"});
                   
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.pointCode","ASSESSTYPE":"state.assessType","MONITORTIME":"state.monitorTime","interfaceId":"12fcf2d5d3859eaa889c6381a7ad7e48"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.pointCode,"ASSESSTYPE":state.assessType,"MONITORTIME":state.monitorTime,"interfaceId":"12fcf2d5d3859eaa889c6381a7ad7e48"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.pointCode,"ASSESSTYPE":state.assessType,"MONITORTIME":state.monitorTime,"interfaceId":"12fcf2d5d3859eaa889c6381a7ad7e48"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMonitorData'] = res.data;
                
     console.log(res);
const { data } = res;

if (data?.head?.statusCode === '200') {
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

  const emptyStyle = {
     cardIconStyle: { background: "#A6A6A6" },
    labelIconStyle: {}
  }

  // 定义监控项的映射关系
  const monitorConfigs = state.categoryList.map(item => {
    return {
      label: item.DICTIONARYNAME, // 改用字典名称
      valueKey: `${item.DICTIONARYCODE}_VALUE`,
      waterLevelKey: `${item.DICTIONARYCODE}_CODE_WATERLEVEL`,
      standardKey: `${item.DICTIONARYCODE}_ISSTANDARDS`,
      unit: item.DICTIONARYNAME === 'pH' ? '' : (item.EXT1 || 'mg/L'),
      code: item.DICTIONARYCODE,
      isStandards: '1' // 初始化达标状态
    }
  });

  // 遍历配置，批量更新 state.monitorData(隐藏水质项)
  state.monitorData = monitorConfigs.filter((item) => item.label !== undefined).map((config) => {
    const { valueKey, waterLevelKey, standardKey, label, unit, code } = config;
    const value = data.data[valueKey] ?? '-';
    const waterLevelCode = data.data[waterLevelKey] || '6678a04114a34021a947caa73ebcf17f';
    const isStandards = data.data[standardKey] || '1';

    // 基础样式：labelIconStyle
    let style = {
      labelIconStyle: {
        'background-image': getWaterLevelSrc(waterLevelCode)
      }
    };

    // 根据达标状态合并样式
    if (isStandards === '0') {
      style = { ...exceedStandardStyle, ...style };
    } else if (isStandards === '1' && value !== '' && value !== '-') {
      style = { ...meetStandardStyle, ...style };
    }else{
      style = { ...emptyStyle, ...style };
    }
    return {
      label: label,
      value: value || '-',
      style: style,
      unit: unit,
      code: code,
      isStandards: isStandards // 新增：记录是否超标，用于排序
    };
  });

  // 核心排序函数：超标优先 + 无超标时按指定顺序
  function sortWaterQualityData(data) {
    // 1. 核心优先级：总磷、氨氮、溶解氧、高锰酸盐指数、pH、五日生化需氧量、石油类、挥发酚
    // 严格匹配你提供的DICTIONARYCODE
    const corePriority = {
      W21011: 0,  // 总磷（以P计）
      W21003: 1,  // 氨氮
      W01009: 2,  // 溶解氧
      W01019: 3,  // 高锰酸盐指数
      W01001: 4,  // pH
      W01017: 5,  // 五日生化需氧量
      W22001: 6,  // 石油类
      W23002: 7   // 挥发酚
    };

    // 2. 其他指标的默认优先级（按字典的DICTIONARYSORTINDEX，也可自定义）
    const defaultPriority = {
      W20111: 8,  // 汞
      W20120: 9,  // 铅
      W01018: 10, // COD(化学需氧量)
      W20122: 11, // 铜
      W20123: 12, // 锌
      W21017: 13, // 氟化物（以F-计）
      W20128: 14, // 硒
      W20119: 15, // 砷
      W20115: 16, // 镉
      W20116: 17, // 铬(六价)
      W21016: 18, // 氰化物
      W21019: 19, // 硫化物
      W19002: 20  // 阴离子表面活性剂
    };

    // 合并所有优先级规则
    const fullPriority = { ...corePriority, ...defaultPriority };

    // 第一步：拆分超标/达标数组
    const exceedItems = data.filter(item => item.isStandards === '0'); // 超标项（置顶）
    const normalItems = data.filter(item => item.isStandards === '1'); // 达标项（按优先级排序）

    // 第二步：对达标项按优先级排序
    const sortByPriority = (a, b) => {
      // 获取当前项的优先级，无定义则放最后（999）
      const aOrder = fullPriority[a.code] ?? 999;
      const bOrder = fullPriority[b.code] ?? 999;
      return aOrder - bOrder;
    };
    normalItems.sort(sortByPriority);

    // 第三步：合并数组（超标项在前 + 达标项按序在后）
    return [...exceedItems, ...normalItems];
  }

  // 执行排序
  state.monitorData = sortWaterQualityData(state.monitorData);

  // 兼容原有逻辑：若有指定超标污染物，强制置顶（可选保留）
  if (state.overPollute) {
    function moveToFirst(list, targetCode) {
      const index = list.findIndex(item => item.code === targetCode);
      if (index === -1) return [...list];
      const item = list[index];
      const rest = list.filter((_, i) => i !== index);
      return [item, ...rest];
    }
    state.monitorData = moveToFirst(state.monitorData, state.overPollute);
  }

  console.log('state.monitorData - 手工弹窗监测信息', state.monitorData);
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"END_MONITORTIME":"state.endTime","START_MONITORTIME":"state.startTime","POINT_CODE":"state.pointCode","interfaceId":"b78b12c4124dc4b29f87eae49fc5931d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"END_MONITORTIME":state.endTime,"START_MONITORTIME":state.startTime,"POINT_CODE":state.pointCode,"interfaceId":"b78b12c4124dc4b29f87eae49fc5931d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"END_MONITORTIME":state.endTime,"START_MONITORTIME":state.startTime,"POINT_CODE":state.pointCode,"interfaceId":"b78b12c4124dc4b29f87eae49fc5931d"});
                   
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
        name: '当月值',
        data: data.data.filter((x) => x.POINT_CODE === item.POINT_CODE).map((dataItem) => ({
          // 使用数组的格式，是为了跟x轴坐标的值对应上；x轴和数组的第一项使用的值需要是唯一的
          value: [dataItem.MONITORTIME, dataItem.CODE_WATERQUALITYLEVEL],
          // 完整时间、单位在tooltip中的formatter中使用
          unit: '',
          tooltipXAxisLabel: dataItem.MONITORTIME,
        })),
      },
        // {
        //   POINT_CODE: item.POINT_CODE,
        //   name: '累计均值',
        //   data: data.data.filter((x) => x.POINT_CODE === item.POINT_CODE).map((dataItem) => ({
        //     // 使用数组的格式，是为了跟x轴坐标的值对应上；x轴和数组的第一项使用的值需要是唯一的
        //     value: [dataItem.MONITORTIME, dataItem.LCODE_WATERQUALITYLEVEL],
        //     // 完整时间、单位在tooltip中的formatter中使用
        //     unit: '',
        //     tooltipXAxisLabel: dataItem.MONITORTIME,
        //   })),
        // },
        {
          POINT_CODE: item.POINT_CODE,
          name: '去年同期',
          data: data.data.filter((x) => x.POINT_CODE === item.POINT_CODE).map((dataItem) => ({
            // 使用数组的格式，是为了跟x轴坐标的值对应上；x轴和数组的第一项使用的值需要是唯一的
            value: [dataItem.MONITORTIME, dataItem.CODE_WATERLEVEL_LASTYEAR],
            // 完整时间、单位在tooltip中的formatter中使用
            unit: '',
            tooltipXAxisLabel: dataItem.MONITORTIME,
          })),
        },
        {
          POINT_CODE: item.POINT_CODE,
          name: '前年同期',
          data: data.data.filter((x) => x.POINT_CODE === item.POINT_CODE).map((dataItem) => ({
            // 使用数组的格式，是为了跟x轴坐标的值对应上；x轴和数组的第一项使用的值需要是唯一的
            value: [dataItem.MONITORTIME, dataItem.CODE_WATERLEVEL_BEFORE_LASTYEAR],
            // 完整时间、单位在tooltip中的formatter中使用
            unit: '',
            tooltipXAxisLabel: dataItem.MONITORTIME,
          })),
        }
        );
    }
  });

  // 公共配置
  seriesData = seriesData.map((seriesItem) => ({
    ...seriesItem,
    "type": "line",
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POLLUTE_CODE":"state.variationTrendData.activeTarget","POINT_CODE":"state.pointCode","END_MONITORTIME":"state.endTime","START_MONITORTIME":"state.startTime","interfaceId":"59cd810cc7c080845a33b43d62de460d"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POLLUTE_CODE":state.variationTrendData.activeTarget,"POINT_CODE":state.pointCode,"END_MONITORTIME":state.endTime,"START_MONITORTIME":state.startTime,"interfaceId":"59cd810cc7c080845a33b43d62de460d"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POLLUTE_CODE":state.variationTrendData.activeTarget,"POINT_CODE":state.pointCode,"END_MONITORTIME":state.endTime,"START_MONITORTIME":state.startTime,"interfaceId":"59cd810cc7c080845a33b43d62de460d"});
                   
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
        name: '当月值',
        data: data.data.filter((x) => x.POINT_CODE === item.POINT_CODE).map((dataItem) => ({
          // 使用数组的格式，是为了跟x轴坐标的值对应上；x轴和数组的第一项使用的值需要是唯一的
          value: [dataItem.MONITORTIME, dataItem.POLLUTEVALUE],
          // 完整时间、单位在tooltip中的formatter中使用
          unit: state.variationTrendData.activeTarget === 'W01001' ? "" : 'mg/L',
          tooltipXAxisLabel: dataItem.MONITORTIME,
        })),
      });

      seriesData.push({
        POINT_CODE: item.POINT_CODE,
        name: '去年同期',
        data: data.data.filter((x) => x.POINT_CODE === item.POINT_CODE).map((dataItem) => ({
          // 使用数组的格式，是为了跟x轴坐标的值对应上；x轴和数组的第一项使用的值需要是唯一的
          value: [dataItem.MONITORTIME, dataItem.LAST_POLLUTEVALUE],
          // 完整时间、单位在tooltip中的formatter中使用
          unit: state.variationTrendData.activeTarget === 'W01001' ? "" : 'mg/L',
          tooltipXAxisLabel: dataItem.MONITORTIME,
        })),
      });
      seriesData.push({
        POINT_CODE: item.POINT_CODE,
        name: '前年同期',
        data: data.data.filter((x) => x.POINT_CODE === item.POINT_CODE).map((dataItem) => ({
          // 使用数组的格式，是为了跟x轴坐标的值对应上；x轴和数组的第一项使用的值需要是唯一的
          value: [dataItem.MONITORTIME, dataItem.BEFORE_LAST_POLLUTEVALUE],
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
    type: 'line',
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
    // // 添加标准线线数据
    state.standardSeriesData.push(
      {
        ...handleStandardSeries('Ⅰ类标准值', '#CCFFFF'),
        data: filterRepeatData(standardLineMap.STANDARD_1, 'wholeTime'),
      },
      {
        ...handleStandardSeries('Ⅱ类标准值', '#00CCFF'),
        data: filterRepeatData(standardLineMap.STANDARD_2, 'wholeTime'),
      },
      {
        ...handleStandardSeries('Ⅲ类标准值', '#00FF00'),
        data: filterRepeatData(standardLineMap.STANDARD_3, 'wholeTime'),
      },
      {
        ...handleStandardSeries('Ⅳ类标准值', '#FFFF00'),
        data: filterRepeatData(standardLineMap.STANDARD_4, 'wholeTime'),
      },
      {
        ...handleStandardSeries('Ⅴ类标准值', '#FF9B00'),
        data: filterRepeatData(standardLineMap.STANDARD_5, 'wholeTime'),
      },
    );

    // 计算数据的最大值，用于筛选标准线
      // const dataValues = [];
      // seriesData.forEach(series => {
      //   series.data.forEach(item => {
      //     if (item.value && item.value[1] !== undefined && item.value[1] !== null) {
      //       // 过滤掉无效值（-1、""、负数）
      //       const val = Number(item.value[1]);
      //       if (!isNaN(val) && val >= 0) {
      //         dataValues.push(val);
      //       }
      //     }
      //   });
      // });
      
      // // 从接口返回的 standardLineMap 中获取各标准线的实际值
      // const standardLines = [
      //   { key: 'STANDARD_1', name: 'Ⅰ类标准值', color: '#CCFFFF' },
      //   { key: 'STANDARD_2', name: 'Ⅱ类标准值', color: '#00CCFF' },
      //   { key: 'STANDARD_3', name: 'Ⅲ类标准值', color: '#00FF00' },
      //   { key: 'STANDARD_4', name: 'Ⅳ类标准值', color: '#FFFF00' },
      //   { key: 'STANDARD_5', name: 'Ⅴ类标准值', color: '#FF9B00' }
      // ];
      
      // // 计算各标准线的值（移到 if-else 外部，确保始终能访问）
      // const standardValueRanges = {};
      // standardLines.forEach(item => {
      //   // 从 standardLineMap 中提取值并转换为数字
      //   const values = standardLineMap[item.key]
      //     .map(d => {
      //       const v = Number(d.value);
      //       return isNaN(v) ? null : v;
      //     })
      //     .filter(v => v !== null && v > 0);
        
      //   if (values.length > 0) {
      //     standardValueRanges[item.key] = Math.min(...values);
      //   }
      // });
      
      // // 构建排序后的标准线列表（移到 if-else 外部）
      // const sortedStandards = standardLines
      //   .map(item => ({
      //     ...item,
      //     value: standardValueRanges[item.key]
      //   }))
      //   .filter(s => s.value !== undefined && s.value > 0)
      //   .sort((a, b) => a.value - b.value);
      
      // // 确定显示哪些标准线
      // // 逻辑：根据数据的范围（最小值和最大值）确定显示哪些标准线
      // // 只显示数据跨越的标准线区间
      
      // let visibleStandards = [];
      
      // // 统一规则（不区分“越大越好/越小越好”）：
      // // - 有效数据：用 dataMin/dataMax 在标准线数值序列上“取边界”
      // //   * 对 dataMin / dataMax 分别取：第一个 >= x 的标准线 + 它前一个（若存在）
      // //   * 若 x 大于所有标准线：取最后一个 + 倒数第二个（若存在）
      // //   * 最终显示这些索引的最小连续区间
      // // - 无有效数据（例如接口返回 -1）：只显示最严格的一条（数值最小的一条）
      // if (sortedStandards.length > 0) {
      //   if (dataValues.length > 0) {
      //     const dataMin = Math.min(...dataValues);
      //     const dataMax = Math.max(...dataValues);

      //     const idxSet = new Set();
      //     const points = [dataMin, dataMax];

      //     for (const x of points) {
      //       let i = 0;
      //       while (i < sortedStandards.length && sortedStandards[i].value < x) i++;

      //       if (i >= sortedStandards.length) {
      //         idxSet.add(sortedStandards.length - 1);
      //         if (sortedStandards.length - 2 >= 0) idxSet.add(sortedStandards.length - 2);
      //       } else {
      //         idxSet.add(i);
      //         if (i - 1 >= 0) idxSet.add(i - 1);
      //       }
      //     }

      //     const indices = Array.from(idxSet).sort((a, b) => a - b);
      //     const start = indices[0];
      //     const end = indices[indices.length - 1];
      //     visibleStandards = sortedStandards.slice(start, end + 1);
      //   } else {
      //     visibleStandards = [sortedStandards[0]];
      //   }
      // }
      
      // // 4. 添加到标准线数据中
      // visibleStandards.forEach(item => {
      //   state.standardSeriesData.push({
      //     ...handleStandardSeries(item.name, item.color),
      //     data: filterRepeatData(standardLineMap[item.key], 'wholeTime'),
      //   });
      // });
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
// 接口函数
 getExcessivePollutants: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"state.pointCode","MONITORTIME":"state.monitorTime","interfaceId":"90d8f6b4ac58510b6ef3e34f3663894e"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":state.pointCode,"MONITORTIME":state.monitorTime,"interfaceId":"90d8f6b4ac58510b6ef3e34f3663894e"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.pointCode,"MONITORTIME":state.monitorTime,"interfaceId":"90d8f6b4ac58510b6ef3e34f3663894e"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getExcessivePollutants'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.overPollute = data[0]?.polltue_code || ''
  // 如果存在超标污染物，则默认选中超标污染物，否则，选中总磷
  if (state.overPollute) {
    state.variationTrendData.activeTarget = state.overPollute
  } else {
    state.variationTrendData.activeTarget = 'W21011';
  }
} else {
  state.overPollute = '' 
  state.variationTrendData.activeTarget = 'W21011';
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
watch(() => ["WATER_POLLUTE"], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getCategoryList', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-waterDialogHandBaseInfo', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setNoDataIcon();
// 执行自定义方法
initPageData();
onMounted(() => {
setPageScale('t-l-c-waterDialogHandBaseInfo', global.appScaleMode, 'normal');
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
 const tCirclex0x0ComputedData = computed(() => _.merge({}, componentState.tCirclex0x0.default, componentState.tCirclex0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tChartDesignx0x3ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x3.default, componentState.tChartDesignx0x3?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tChartDesignx0x4ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x4.default, componentState.tChartDesignx0x4?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tListCardx0x6ComputedData = computed(() => _.merge({}, componentState.tListCardx0x6.default, componentState.tListCardx0x6?.[state.screenSize]));

 const tComponentx0x7ComputedData = computed(() => _.merge({}, componentState.tComponentx0x7.default, componentState.tComponentx0x7?.[state.screenSize]));

 const tTextx0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x8.default, componentState.tTextx0x8?.[state.screenSize]));

 const tScrollableCardsx0x9ComputedData = computed(() => _.merge({}, componentState.tScrollableCardsx0x9.default, componentState.tScrollableCardsx0x9?.[state.screenSize]));

 const tRowx0x11ComputedData = computed(() => _.merge({}, componentState.tRowx0x11.default, componentState.tRowx0x11?.[state.screenSize]));

 const tColx0x11x0ComputedData = computed(() => _.merge({}, componentState.tColx0x11x0.default, componentState.tColx0x11x0?.[state.screenSize]));

 const tTextx0x11x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x11x0x0.default, componentState.tTextx0x11x0x0?.[state.screenSize]));

 const tColx0x11x1ComputedData = computed(() => _.merge({}, componentState.tColx0x11x1.default, componentState.tColx0x11x1?.[state.screenSize]));

 const tDatePickerx0x11x1x0ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x11x1x0.default, componentState.tDatePickerx0x11x1x0?.[state.screenSize]));

 const tSelectx0x11x1x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x11x1x1.default, componentState.tSelectx0x11x1x1?.[state.screenSize]));

 const tRowx0x12ComputedData = computed(() => _.merge({}, componentState.tRowx0x12.default, componentState.tRowx0x12?.[state.screenSize]));

 const tColx0x12x0ComputedData = computed(() => _.merge({}, componentState.tColx0x12x0.default, componentState.tColx0x12x0?.[state.screenSize]));

 const tTextx0x12x0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x12x0x0.default, componentState.tTextx0x12x0x0?.[state.screenSize]));

 const tSwitchx0x12x0x1ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x12x0x1.default, componentState.tSwitchx0x12x0x1?.[state.screenSize]));

 const tRowx0x13ComputedData = computed(() => _.merge({}, componentState.tRowx0x13.default, componentState.tRowx0x13?.[state.screenSize]));

 const tTextx0x13x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x13x0.default, componentState.tTextx0x13x0?.[state.screenSize]));

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
tCirclex0x0ComputedData,
tTextx0x1ComputedData,
tChartDesignx0x3ComputedData,
tChartDesignx0x4ComputedData,
tListCardx0x6ComputedData,
tComponentx0x7ComputedData,
tTextx0x8ComputedData,
tScrollableCardsx0x9ComputedData,
tRowx0x11ComputedData,
tColx0x11x0ComputedData,
tTextx0x11x0x0ComputedData,
tColx0x11x1ComputedData,
tDatePickerx0x11x1x0ComputedData,
tSelectx0x11x1x1ComputedData,
tRowx0x12ComputedData,
tColx0x12x0ComputedData,
tTextx0x12x0x0ComputedData,
tSwitchx0x12x0x1ComputedData,
tRowx0x13ComputedData,
tTextx0x13x0ComputedData,
ongetChartInstance1764308327093_0_0,
ongetChartInstance1764135516141,
oncardClick1770123179284,
ondateChange1735549171926,
onchange1733973555614,
onchange1735789295216,
};
},
};