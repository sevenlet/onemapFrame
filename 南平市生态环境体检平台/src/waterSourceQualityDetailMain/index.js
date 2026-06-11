window.waterSourceQualityDetailMainComponent = {
template: 
`<div id="t-l-c-waterSourceQualityDetailMain" class="t-l-c-waterSourceQualityDetailMain" >` +
`<t-component id="t-component-dab7.4985a8477" class="waterSourceQualityDetailMain-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-3d08.2ece82a4d" class="waterSourceQualityDetailMain-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-3ee9.a01809fa3" class="waterSourceQualityDetailMain-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-date-picker id="t-date-picker-c859.d0d5ef923" class="waterSourceQualityDetailMain-t-date-picker-0-3"  :placeholder="tDatePickerx0x3ComputedData.placeholder" :start-placeholder="tDatePickerx0x3ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x3ComputedData.endPlaceholder" :type="tDatePickerx0x3ComputedData.type" :clearable="tDatePickerx0x3ComputedData.clearable" :range-separator="tDatePickerx0x3ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.monitorTime, componentPropBindingMap?.['t-date-picker-c859.d0d5ef923']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x3ComputedData.separator" :readonly="tDatePickerx0x3ComputedData.readonly" :editable="tDatePickerx0x3ComputedData.editable" :c-style="tDatePickerx0x3ComputedData.cStyle" @date-change="ondateChange1733896202369">` +
`</t-date-picker>` +
`<t-table id="t-table-ded9.b0289ff3" class="waterSourceQualityDetailMain-t-table-0-4"  :height="tTablex0x4ComputedData.height" :stripe="tTablex0x4ComputedData.stripe" :border="tTablex0x4ComputedData.border" :auto-scroll="tTablex0x4ComputedData.autoScroll" :speed="tTablex0x4ComputedData.speed" :columns="tTablex0x4ComputedData.columns" :data="replaceCssVariables(filterData(state.dmList, componentPropBindingMap?.['t-table-ded9.b0289ff3']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x4ComputedData.defaultSort" :c-style="tTablex0x4ComputedData.cStyle" @cell-click="oncellClick1733906983339">` +
`</t-table>` +
`<t-table id="t-table-42c3.a5138b9a5" class="waterSourceQualityDetailMain-t-table-0-5"  :height="tTablex0x5ComputedData.height" :stripe="tTablex0x5ComputedData.stripe" :border="tTablex0x5ComputedData.border" :auto-scroll="tTablex0x5ComputedData.autoScroll" :speed="tTablex0x5ComputedData.speed" :columns="tTablex0x5ComputedData.columns" :data="replaceCssVariables(filterData(state.fxyList, componentPropBindingMap?.['t-table-42c3.a5138b9a5']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x5ComputedData.defaultSort" :c-style="tTablex0x5ComputedData.cStyle" @cell-click="oncellClick1734486253590">` +
`</t-table>` +
`<t-list-card id="t-list-card-fb20.2af923ac2" class="waterSourceQualityDetailMain-t-list-card-0-6"  :data="replaceCssVariables(filterData(state.bhqfwData, componentPropBindingMap?.['t-list-card-fb20.2af923ac2']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x6ComputedData.spacingX" :col="tListCardx0x6ComputedData.col" :direction="tListCardx0x6ComputedData.direction" :exchange-order="tListCardx0x6ComputedData.exchangeOrder" :unit-break="tListCardx0x6ComputedData.unitBreak" :key-field="tListCardx0x6ComputedData.keyField" :active-key-field="tListCardx0x6ComputedData.activeKeyField" :active="tListCardx0x6ComputedData.active" :c-style="tListCardx0x6ComputedData.cStyle">` +
`</t-list-card>` +
`<t-component id="t-component-d7a5.0f0c30eaf" class="waterSourceQualityDetailMain-t-component-0-7"  :name="tComponentx0x7ComputedData.name" :c-style="tComponentx0x7ComputedData.cStyle" :src="tComponentx0x7ComputedData.src" :component-name="tComponentx0x7ComputedData.componentName">` +
`</t-component>` +
`<t-component id="t-component-9a43.f9f1a46a" class="waterSourceQualityDetailMain-t-component-0-8"  :name="tComponentx0x8ComputedData.name" :c-style="tComponentx0x8ComputedData.cStyle" :src="tComponentx0x8ComputedData.src" :component-name="tComponentx0x8ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-dde9.205bbc868" class="waterSourceQualityDetailMain-t-text-0-9"  :label="tTextx0x9ComputedData.label" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle">` +
`</t-text>` +
`<t-component id="t-component-0847.c1f68f2d3" class="waterSourceQualityDetailMain-t-component-0-10"  :name="tComponentx0x10ComputedData.name" :c-style="tComponentx0x10ComputedData.cStyle" :src="tComponentx0x10ComputedData.src" :component-name="tComponentx0x10ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-886c.6813dc79" class="waterSourceQualityDetailMain-t-text-0-11"  :label="tTextx0x11ComputedData.label" :editable="tTextx0x11ComputedData.editable" :c-style="tTextx0x11ComputedData.cStyle">` +
`</t-text>` +
`<t-component id="t-component-31d3.24b651f58" class="waterSourceQualityDetailMain-t-component-0-12"  :name="tComponentx0x12ComputedData.name" :c-style="tComponentx0x12ComputedData.cStyle" :src="tComponentx0x12ComputedData.src" :component-name="tComponentx0x12ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-1389.f99ff2c66" class="waterSourceQualityDetailMain-t-text-0-13"  :label="tTextx0x13ComputedData.label" :editable="tTextx0x13ComputedData.editable" :c-style="tTextx0x13ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-4c0d.f85861fe9" class="waterSourceQualityDetailMain-t-text-0-14"  :label="tTextx0x14ComputedData.label" :editable="tTextx0x14ComputedData.editable" :c-style="tTextx0x14ComputedData.cStyle">` +
`</t-text>` +
`<t-list-card id="t-list-card-9491.e64bae56e" class="waterSourceQualityDetailMain-t-list-card-0-15"  :data="replaceCssVariables(filterData(state.baseInfoData, componentPropBindingMap?.['t-list-card-9491.e64bae56e']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x15ComputedData.spacingX" :col="tListCardx0x15ComputedData.col" :direction="tListCardx0x15ComputedData.direction" :exchange-order="tListCardx0x15ComputedData.exchangeOrder" :unit-break="tListCardx0x15ComputedData.unitBreak" :key-field="tListCardx0x15ComputedData.keyField" :active-key-field="tListCardx0x15ComputedData.activeKeyField" :active="tListCardx0x15ComputedData.active" :c-style="tListCardx0x15ComputedData.cStyle">` +
`</t-list-card>` +
`<t-list-card id="t-list-card-196c.c4221638e" class="waterSourceQualityDetailMain-t-list-card-0-16"  :data="replaceCssVariables(filterData(state.bhqglData, componentPropBindingMap?.['t-list-card-196c.c4221638e']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x16ComputedData.spacingX" :col="tListCardx0x16ComputedData.col" :direction="tListCardx0x16ComputedData.direction" :exchange-order="tListCardx0x16ComputedData.exchangeOrder" :unit-break="tListCardx0x16ComputedData.unitBreak" :key-field="tListCardx0x16ComputedData.keyField" :active-key-field="tListCardx0x16ComputedData.activeKeyField" :active="tListCardx0x16ComputedData.active" :c-style="tListCardx0x16ComputedData.cStyle">` +
`</t-list-card>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-dab7.4985a8477":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-3d08.2ece82a4d":{"attributeName":"tTextx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-3ee9.a01809fa3":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-c859.d0d5ef923":{"attributeName":"tDatePickerx0x3","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-table-ded9.b0289ff3":{"attributeName":"tTablex0x4","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-table-42c3.a5138b9a5":{"attributeName":"tTablex0x5","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-fb20.2af923ac2":{"attributeName":"tListCardx0x6","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-d7a5.0f0c30eaf":{"attributeName":"tComponentx0x7","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-9a43.f9f1a46a":{"attributeName":"tComponentx0x8","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-dde9.205bbc868":{"attributeName":"tTextx0x9","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-component-0847.c1f68f2d3":{"attributeName":"tComponentx0x10","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-886c.6813dc79":{"attributeName":"tTextx0x11","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-component-31d3.24b651f58":{"attributeName":"tComponentx0x12","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-1389.f99ff2c66":{"attributeName":"tTextx0x13","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-4c0d.f85861fe9":{"attributeName":"tTextx0x14","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-9491.e64bae56e":{"attributeName":"tListCardx0x15","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-196c.c4221638e":{"attributeName":"tListCardx0x16","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   domStyleId: "custom-waterSourceQualityDetailMain-styles",
   fxyList: [],
   dmList: [],
   id: "",
   bhqfwData: [{"title":"一级保护区","num":0,"unit":"km²"},{"title":"二级保护区","num":0,"unit":"km²"},{"title":"准保护区","num":0,"unit":"km²"}],
   bhqglData: [{"title":"标志设立","num":"-"},{"title":"水源地问题","num":"-"}],
   monitorTime: "",
   baseInfoData: [{"title":"所属行政区","num":"-"},{"title":"所属流域","num":"-"},{"title":"水源地级别","num":"-"},{"title":"水体类型","num":"-"},{"title":"使用状态","num":"-"},{"title":"取水口数量","num":"-"},{"title":"供水人口(万人)","num":"-"},{"title":"水质目标","num":"-"},{"title":"水质现状","num":"-"}],
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
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"746px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"746px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"130px","height":"31px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"746px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":"","lineHeight":"31px"},
            
            },
 default: { 
 
label:"断面列表",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"31px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"746px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":"","lineHeight":"31px"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"450px","height":"60px","position":"unset","left":"0px","top":"0px","background":"var(--business-query-bg)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"60px","position":"unset","left":"0px","top":"0px","background":"var(--business-query-bg)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","animationName":""}}}, 
 },
},
tDatePickerx0x3: {
defaultStyle: {
            default: {"width":"418px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","min-height":"32px","line-height":"normal","min-width":"418px","max-width":"none"},
            
            },
 default: { 
 
placeholder:"请选择时间",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"month",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"418px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","min-height":"32px","line-height":"normal","min-width":"418px","max-width":"none"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","min-height":"32px","line-height":"normal"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"30px","fontSize":"var(--business-text-size-14)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","fontSize":"var(--business-text-size-12)","height":"auto"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--skin-font-color)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--skin-font-color)","fontSize":"var(--business-text-size-12)"}},"operatorArrow":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--skin-font-color)","borderLeft":"1px solid var(--skin-font-color)","borderTop":"1px solid var(--skin-font-color)","borderRight":"1px solid var(--skin-font-color)","borderBottom":"1px solid var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--skin-font-color)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"inputCloseIcons":{"default":{"fontSize":"var(--business-text-size-14)"}},"dateHeaderYearBtnWrapper":{"default":{"fontSize":"var(--business-text-size-14)"}},"dateHeaderYearBtn":{"default":{"fontSize":"var(--business-text-size-14)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-14)"}}}, 
 },
},
tTablex0x4: {
defaultStyle: {
            default: {"width":"410px","height":"228px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"228",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"52PX","type":"state","stateKey":"iconStatus"},{"label":"断面名称","key":"POINT_NAME","align":"left","operationList":[],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"borderRadius":"","width":"21px","height":"17px","margin-right":"-1px","margin-left":"-18px","transform":"translateX(70px)","backgroundImage":"var(--business-section-auto)"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"229PX","showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"var(--business-text-size-14)"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"isShowIcon","infoKey":""},{"label":"水质类别","key":"WATERQUALITYLEVELNAME","stateKey":"CODE_WATERQUALITYLEVEL","align":"center","type":"state","operationList":[],"stateList":[{"name":"1","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(204, 255, 255, 1) 100%,rgba(0, 0, 0, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"2","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 204, 255, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"3","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(0, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"4","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 255, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"5","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 155, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"6","fontStyle":{"fontSize":"var(--business-text-size-12)","width":"40PX","height":"PX","background":"linear-gradient(0deg,rgba(255, 0, 0, 1) 100%,rgba(0, 0, 0, 1) 100%,rgba(255, 255, 255, 1) 100%)","borderRadius":"2PX","color":"rgba(0, 0, 0, 1)"}},{"name":"","fontStyle":{"width":"40PX","height":"PX","borderRadius":"2PX","background":"","borderWidth":"0PX"}}],"width":"129PX","style":{"fontStyle":{"fontSize":"var(--business-text-size-12)","width":"PX","height":"PX","borderRadius":"PX","background":""}}}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"228px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tTablex0x5: {
defaultStyle: {
            default: {"width":"410px","height":"228px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"228",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"52PX","type":"state","stateKey":"iconStatus"},{"label":"风险源名称","key":"ENTER_NAME","align":"left","operationList":[],"stateList":[{"name":"1","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"borderRadius":"","width":"21px","height":"17px","margin-right":"-1px","margin-left":"-18px","transform":"translateX(70px)","backgroundImage":"var(--business-section-auto)"},"cellStyle":{"background":""}},{"name":"0","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"marginRight":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"width":"229PX","showOverflowTooltip":true,"headerAlign":"left","style":{"fontStyle":{"fontSize":"var(--business-text-size-14)"},"imageStyle":{"backgroundImage":""}},"type":"default","stateKey":"isShowIcon","infoKey":""},{"label":"风险源类型","key":"ENTERPRISE_TYPES","align":"center","operationList":[],"stateList":[],"width":"129PX","showOverflowTooltip":true,"style":{"fontStyle":{"fontSize":"var(--business-text-size-14)"}}}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"228px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tListCardx0x6: {
defaultStyle: {
            default: {"width":"418px","height":"68px","position":"unset","left":"16px","top":"506px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"},
            
            },
 default: { 
 
data:[{"title":"一级保护区","num":0,"unit":"km²"},{"title":"二级保护区","num":0,"unit":"km²"},{"title":"准保护区","num":0,"unit":"km²"}],
spacingX:8,
col:3,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","trend":"trend","color":"color","selectIcon":"icon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"418px","height":"68px","position":"unset","left":"16px","top":"506px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"}},"itemWrapper":{"default":{"height":"66px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"var(--business-show-bg30)","lineHeight":"18px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"0px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"num":{"default":{"fontSize":"var(--business-num-size-24)","fontWeight":"700","marginRight":"2px","lineHeight":"var(--business-num-size-24)","textAlign":"left","fontFamily":"DIN-bold","color":"var(--business-white)"}},"unit":{"default":{"fontSize":"var(--business-text-size-12)","color":"var(--business-unit-icon)"}},"title":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)","marginTop":"0px"}},"icon":{"default":{"width":"32px","height":"32px","left":"16px","marginLeft":"17px"}},"numBox":{"default":{"marginTop":"6px"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"rightContent":{"default":{"alignItems":"center","marginLeft":"8px","display":"flex","justifyContent":"center","flexDirection":"column"}}}, 
 },
},
tComponentx0x7: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"84px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"84px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tComponentx0x8: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"464px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"464px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"width":"130px","height":"31px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"84px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":"","lineHeight":"31px"},
            
            },
 default: { 
 
label:"基础信息",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"31px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"84px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":"","lineHeight":"31px"}}}, 
 },
},
tComponentx0x10: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"606px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"606px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x11: {
defaultStyle: {
            default: {"width":"182px","height":"31px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"606px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":"","lineHeight":"31px"},
            
            },
 default: { 
 
label:"保护区管理",
editable:false,
cStyle:{"wrapper":{"default":{"width":"182px","height":"31px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"606px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":"","lineHeight":"31px"}}}, 
 },
},
tComponentx0x12: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"1049px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"1049px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x13: {
defaultStyle: {
            default: {"width":"130px","height":"31px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"1049px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":"","lineHeight":"31px"},
            
            },
 default: { 
 
label:"风险源列表",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"31px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"1049px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":"","lineHeight":"31px"}}}, 
 },
},
tTextx0x14: {
defaultStyle: {
            default: {"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"469px","fontFamily":"方正综艺","fontSize":"20px","animationName":""},
            
            },
 default: { 
 
label:"保护区范围",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"60px","top":"469px","fontFamily":"方正综艺","fontSize":"20px","animationName":""}}}, 
 },
},
tListCardx0x15: {
defaultStyle: {
            default: {"width":"410px","height":"65px","position":"unset","left":"20px","top":"127px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"所属行政区","num":"-"},{"title":"所属流域","num":"-"},{"title":"水源地级别","num":"-"},{"title":"水体类型","num":"-"},{"title":"使用状态","num":"-"},{"title":"取水口数量","num":"-"},{"title":"供水人口(万人)","num":"-"},{"title":"水质目标","num":"-"},{"title":"水质现状","num":"-"}],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"410px","height":"65px","position":"unset","left":"20px","top":"127px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--base-label-bg-color)","width":"144px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--base-label-title-color)","fontSize":"var(--business-text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px"}},"numBox":{"default":{"backgroundColor":"var(--info-background)","width":"264px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--base-label-text-color)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
tListCardx0x16: {
defaultStyle: {
            default: {"width":"410px","height":"65px","overflow":"visible","animationName":""},
            
            },
 default: { 
 
data:[{"title":"标志设立","num":"-"},{"title":"水源地问题","num":"-"}],
spacingX:0,
col:1,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"410px","height":"65px","overflow":"visible","animationName":""}},"itemWrapper":{"default":{"backgroundColor":"rgba(100, 163, 29, 0)","marginBottom":"2px","overflow":"visible"}},"rightContent":{"default":{"display":"flex","justifyContent":"space-between","flexDirection":"row","alignContent":"start"}},"title":{"default":{"backgroundColor":"var(--base-label-bg-color)","width":"144px","textAlign":"right","paddingRight":"16px","lineHeight":"20px","color":"var(--base-label-title-color)","fontSize":"var(--business-text-size-14)","paddingTop":"6px","paddingBottom":"6px","paddingLeft":"16px"}},"numBox":{"default":{"backgroundColor":"var(--info-background)","width":"264px","textAlign":"left","display":"flex","justifyContent":"flex-start","paddingLeft":"16px","lineHeight":"20px","paddingRight":"16px","paddingTop":"6px","paddingBottom":"6px"}},"num":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--base-label-text-color)","whiteSpace":"normal"}},"unit":{"default":{"color":"rgba(255, 255, 255, 1)","fontSize":"14px"}}}, 
 },
},
});
const getProvider = () => {
const rootData = inject('drinkWaterState');

state.drinkWaterState = rootData;
};
const handleClickBack = () => {
// 返回 
state.drinkWaterState.componentName = 'waterDrinkContentComponent';
};
const initPage = () => {
state.id = global.businessDialog.dialogParmas.rowInfo.DRINK_ID || "";
state.monitorTime = state.drinkWaterState.time || "";

apiRegistry.getBaseInfo.request();
apiRegistry.getQuestionList.request();
apiRegistry.getDMList.request();
apiRegistry.getFXYList.request();


// 断面列表
watch(
  () => [
    state.monitorTime,
    global.regionaQuery.regionCode,
    global.regionaQuery.areaCode
  ],
  ([time, regionCode]) => {
    if (time && regionCode) {
      apiRegistry.getDMList.request();
    }
  }
);
};
const changeTime = (val) => {
state.drinkWaterState.time = val
state.monitorTime = val
// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "value",
      "shareCode": "MONITORTIME",
      "defaultValue": "",
      "runtimeValue": val
    }
  ]
});

};
const goToDMDetail = (row,col) => {
if (["断面名称", "定位", '水质类别'].includes(col.label)) {
  // 注意 这时候 还修改了 左上角选中区域值(估计是 发消息时 区域选择也接收了)
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractive", // 消息名称
    // 消息内容
    data: [
      {
        "code": "point_code",
        "shareCode": "POINT_CODE",
        "defaultValue": "",
        "runtimeValue": row.POINT_CODE
      }
    ]
  });
}

};
const goToFXYDetail = (col,row) => {
if (["风险源名称", "定位", '风险源类型'].includes(col.label)) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractive", // 消息名称
    // 消息内容
    data: [
      {
        "code": "sid",
        "shareCode": "SID",
        "defaultValue": "",
        "runtimeValue": row.SID || ""
      }
    ]
  });


  // 设置弹框使用的参数
  global.businessDialog = {
    dialogParmas: {
      rowInfo: row
    }
  }
}
};
const setDomStyle = () => {
// 创建一个style元素
const styleElement = document.createElement("style");

// 给style元素添加id以便之后可以方便地找到并修改它
styleElement.id = state.domStyleId;

// 使用条件判断以确保不会重复添加相同的样式规则
if (!document.getElementById(state.domStyleId)) {
  // 向style元素中添加自定义的CSS规则
  styleElement.innerHTML = `
     /* 调整日期面板的宽度-其他地方日期选择器没有这么宽，暂时单独调整这一个页面 */
     .t-date-picker .el-picker-panel {
        width: 100% !important;
      }
      .t-date-picker .el-date-picker.el-picker-panel .el-picker-panel__content {
        width: 386px !important;
      }
    `;
  // 将style元素添加到文档头部
  document.head.appendChild(styleElement);
}
// 添加的样式id，在页面卸载前进行了删除，不影响其他页面

};
const deleteDomStyle = () => {
const styleToRemove = document.getElementById(state.domStyleId);
if (styleToRemove) {
  styleToRemove.remove();
}
};
const ondateChange1733896202369 = (data) => {
// 执行自定义方法
changeTime(data);
};
const oncellClick1733906983339 = (row,column,cell,event) => {
// 执行自定义方法
goToDMDetail(row,column);
};
const oncellClick1734486253590 = (row,column,cell,event) => {
// 执行自定义方法
goToFXYDetail(column,row);
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"MONITORTIME":"state.monitorTime","DRINK_ID":"state.id","interfaceId":"de27d2dff4b2026427442b1c5da8871b"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":state.monitorTime,"DRINK_ID":state.id,"interfaceId":"de27d2dff4b2026427442b1c5da8871b"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"MONITORTIME":state.monitorTime,"DRINK_ID":state.id,"interfaceId":"de27d2dff4b2026427442b1c5da8871b"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     // 基础信息
state.baseInfoData.forEach(item => item.num = "-");
// 保护区范围
state.bhqfwData.forEach(item => item.num = 0);
// 保护区管理
state.bhqglData[0].num = "-";
// 颜色列表（两套都写上防止格式不对）
const colors = [
  {
    code: "I类",
    value: "#CCFFFF"
  },
  {
    code: "Ⅰ类",
    value: "#CCFFFF"
  },
  {
    code: "II类",
    value: "#00CCFF"
  },
  {
    code: "Ⅱ类",
    value: "#00CCFF"
  },
  {
    code: "III类",
    value: "#00FF00"
  },
  {
    code: "Ⅲ类",
    value: "#00FF00"
  },
  {
    code: "IV类",
    value: "#FFFF00"
  },
  {
    code: "Ⅳ类",
    value: "#FFFF00"
  },
  {
    code: "V类",
    value: "#FF9B00"
  },
  {
    code: "Ⅴ类",
    value: "#FF9B00"
  },
  {
    code: "劣V类",
    value: "#FF0000"
  },
  {
    code: "劣Ⅴ类",
    value: "#FF0000"
  },
  {
    code: "",
    value: "#FFF"
  }
]
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  const {
    REGION_NAME,
    WSYSTEM_NAME,
    MANAGER_TYPE_NAME,
    WSYSTEMTYPENAME,
    STATUS_NAME,
    INAKE_COUNT,
    SERVICE_PEOPLE,
    WATERQUALITYLEVELTARGETNAME,
    WATERQUALITYLEVELNAME,
    FIRST_RESERVE,
    TWO_RESERVE,
    QUASI_RESERVE,
    BOUNDARY_SET_TEXT
  } = res.data.data;
  // 基础信息
  state.baseInfoData[0].num = REGION_NAME || "-"; // 所属行政区
  state.baseInfoData[1].num = WSYSTEM_NAME || "-"; // 所属流域
  state.baseInfoData[2].num = MANAGER_TYPE_NAME || "-"; // 水源地级别
  state.baseInfoData[3].num = WSYSTEMTYPENAME || "-"; // 水体类型
  state.baseInfoData[4].num = STATUS_NAME || "-"; // 使用状态
  state.baseInfoData[5].num = INAKE_COUNT || "-"; // 取水口数量
  state.baseInfoData[6].num = SERVICE_PEOPLE || "-"; // 供水人口(万人)
  state.baseInfoData[7].num = WATERQUALITYLEVELTARGETNAME || "-"; // 水质目标
  state.baseInfoData[7].color = colors.find(i => i.code === WATERQUALITYLEVELTARGETNAME).value // 水质目标颜色
  state.baseInfoData[8].num = WATERQUALITYLEVELNAME || "-"; // 水质现状
  // 保护区范围
  state.bhqfwData[0].num = FIRST_RESERVE || 0; // 一级保护区
  state.bhqfwData[1].num = TWO_RESERVE || 0; // 二级保护区
  state.bhqfwData[2].num = QUASI_RESERVE || 0; // 准保护区
  // 保护区管理
  state.bhqglData[0].num = BOUNDARY_SET_TEXT || "-"; // 标志设立
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 基础信息
state.baseInfoData.forEach(item => item.num = "-");
// 保护区范围
state.bhqfwData.forEach(item => item.num = 0);
// 保护区管理
state.bhqglData[0].num = "-";
      reject(error);
    });
  });
},
              },
// 接口函数
 getQuestionList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"DRINK_ID":"state.id","interfaceId":"5835ef3a0adbb2c2aa8b8b8082d0bf8c"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DRINK_ID":state.id,"interfaceId":"5835ef3a0adbb2c2aa8b8b8082d0bf8c"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"DRINK_ID":state.id,"interfaceId":"5835ef3a0adbb2c2aa8b8b8082d0bf8c"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getQuestionList'] = res.data;
                
     // 保护区管理
state.bhqglData[1].num = "-";

if (res?.data?.head?.statusCode === '200' && res?.data?.data.length) {
  // 保护区管理
  state.bhqglData[1].num = res.data.data.map(item => item.QUES_TYPE_NAME).join(','); // 水源地问题
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 保护区管理
state.bhqglData[1].num = "-";
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"AREA_CODE":"","DRINK_NAME_LIKE":"","IS_CONNECT_SECTION":"","CODE_CONTROLLEVEL":"","CODE_WQDATASOURCETYPE":"","MANAGER_TYPE_CODE":"","WSYSTEM_CODE":"global.regionaQuery.areaCode","MONITORTIME":"state.monitorTime","REGION_CODE":"global.regionaQuery.regionCode","DRINK_ID":"state.id","interfaceId":"7b8b307a60fb6ca590ce6032e2f668f1"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"AREA_CODE":"","DRINK_NAME_LIKE":"","IS_CONNECT_SECTION":"","CODE_CONTROLLEVEL":"","CODE_WQDATASOURCETYPE":"","MANAGER_TYPE_CODE":"","WSYSTEM_CODE":global.regionaQuery.areaCode,"MONITORTIME":state.monitorTime,"REGION_CODE":global.regionaQuery.regionCode,"DRINK_ID":state.id,"interfaceId":"7b8b307a60fb6ca590ce6032e2f668f1"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"AREA_CODE":"","DRINK_NAME_LIKE":"","IS_CONNECT_SECTION":"","CODE_CONTROLLEVEL":"","CODE_WQDATASOURCETYPE":"","MANAGER_TYPE_CODE":"","WSYSTEM_CODE":global.regionaQuery.areaCode,"MONITORTIME":state.monitorTime,"REGION_CODE":global.regionaQuery.regionCode,"DRINK_ID":state.id,"interfaceId":"7b8b307a60fb6ca590ce6032e2f668f1"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getDMList'] = res.data;
                
     // 断面列表
state.dmList = [];

if (res?.data?.head?.statusCode === '200' && res?.data?.data.length) {
  // 断面列表
  state.dmList = res.data.data.map((item) => ({
    ...item,
    // 断面名称
    POINT_NAME: item?.POINT_NAME || '-',
    // 水质类别
    WATERQUALITYLEVELNAME: item?.WATERQUALITYLEVELNAME || '-',
    // 定位
    iconStatus: `${!!(item.LONGITUDE && item.LATITUDE)}`
  }))
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 断面列表
state.dmList = [];
      reject(error);
    });
  });
},
              },
// 接口函数
 getFXYList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"DRINK_ID":"state.id","interfaceId":"0b4b07795c3c8145f7bc2bc5dbebaf63"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"DRINK_ID":state.id,"interfaceId":"0b4b07795c3c8145f7bc2bc5dbebaf63"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"DRINK_ID":state.id,"interfaceId":"0b4b07795c3c8145f7bc2bc5dbebaf63"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getFXYList'] = res.data;
                
     // 风险源列表
state.fxyList = [];

if (res?.data?.head?.statusCode === '200' && res?.data?.data.length) {
  // 风险源列表
  state.fxyList = res.data.data.map((item) => ({
    ...item,
    // 风险源名称
    ENTER_NAME: item?.ENTER_NAME || '-',
    // 风险源类型
    ENTERPRISE_TYPES: item?.ENTERPRISE_TYPES || '-',
    // 定位
    iconStatus: `${!!(item.LONGITUDE && item.LATITUDE)}`
  }))
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // 风险源列表
state.fxyList = [];
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [state.monitorTime], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getBaseInfo', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-waterSourceQualityDetailMain', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
// 执行自定义方法
initPage();
// 执行自定义方法
setDomStyle();
onBeforeUnmount(() => {
// 执行自定义方法
deleteDomStyle();
});
onMounted(() => {
setPageScale('t-l-c-waterSourceQualityDetailMain', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tDatePickerx0x3ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x3.default, componentState.tDatePickerx0x3?.[state.screenSize]));

 const tTablex0x4ComputedData = computed(() => _.merge({}, componentState.tTablex0x4.default, componentState.tTablex0x4?.[state.screenSize]));

 const tTablex0x5ComputedData = computed(() => _.merge({}, componentState.tTablex0x5.default, componentState.tTablex0x5?.[state.screenSize]));

 const tListCardx0x6ComputedData = computed(() => _.merge({}, componentState.tListCardx0x6.default, componentState.tListCardx0x6?.[state.screenSize]));

 const tComponentx0x7ComputedData = computed(() => _.merge({}, componentState.tComponentx0x7.default, componentState.tComponentx0x7?.[state.screenSize]));

 const tComponentx0x8ComputedData = computed(() => _.merge({}, componentState.tComponentx0x8.default, componentState.tComponentx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tComponentx0x10ComputedData = computed(() => _.merge({}, componentState.tComponentx0x10.default, componentState.tComponentx0x10?.[state.screenSize]));

 const tTextx0x11ComputedData = computed(() => _.merge({}, componentState.tTextx0x11.default, componentState.tTextx0x11?.[state.screenSize]));

 const tComponentx0x12ComputedData = computed(() => _.merge({}, componentState.tComponentx0x12.default, componentState.tComponentx0x12?.[state.screenSize]));

 const tTextx0x13ComputedData = computed(() => _.merge({}, componentState.tTextx0x13.default, componentState.tTextx0x13?.[state.screenSize]));

 const tTextx0x14ComputedData = computed(() => _.merge({}, componentState.tTextx0x14.default, componentState.tTextx0x14?.[state.screenSize]));

 const tListCardx0x15ComputedData = computed(() => _.merge({}, componentState.tListCardx0x15.default, componentState.tListCardx0x15?.[state.screenSize]));

 const tListCardx0x16ComputedData = computed(() => _.merge({}, componentState.tListCardx0x16.default, componentState.tListCardx0x16?.[state.screenSize]));

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
tRectx0x2ComputedData,
tDatePickerx0x3ComputedData,
tTablex0x4ComputedData,
tTablex0x5ComputedData,
tListCardx0x6ComputedData,
tComponentx0x7ComputedData,
tComponentx0x8ComputedData,
tTextx0x9ComputedData,
tComponentx0x10ComputedData,
tTextx0x11ComputedData,
tComponentx0x12ComputedData,
tTextx0x13ComputedData,
tTextx0x14ComputedData,
tListCardx0x15ComputedData,
tListCardx0x16ComputedData,
ondateChange1733896202369,
oncellClick1733906983339,
oncellClick1734486253590,
};
},
};