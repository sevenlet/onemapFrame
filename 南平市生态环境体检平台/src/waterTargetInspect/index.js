window.waterTargetInspectComponent = {
template: 
`<div id="t-l-c-waterTargetInspect" class="t-l-c-waterTargetInspect" >` +
`<t-rect id="t-rect-0d13.8ce6744a1" class="waterTargetInspect-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-6015.c54bdb54b" class="waterTargetInspect-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-select id="t-select-ec77.0bbc6ebb7" class="waterTargetInspect-t-select-0-2"  :active-value="replaceCssVariables(filterData(state.selectedCity, componentPropBindingMap?.['t-select-ec77.0bbc6ebb7']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.cityOptions, componentPropBindingMap?.['t-select-ec77.0bbc6ebb7']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x2ComputedData.alias" :multiple="tSelectx0x2ComputedData.multiple" :placeholder="tSelectx0x2ComputedData.placeholder" :clearable="tSelectx0x2ComputedData.clearable" :disabled="tSelectx0x2ComputedData.disabled" :name="tSelectx0x2ComputedData.name" :autocomplete="tSelectx0x2ComputedData.autocomplete" :filterable="tSelectx0x2ComputedData.filterable" :no-match-text="tSelectx0x2ComputedData.no-match-text" :no-data-text="tSelectx0x2ComputedData.no-data-text" :c-style="tSelectx0x2ComputedData.cStyle" @change="onchange1733381589566">` +
`</t-select>` +
`<t-date-picker id="t-date-picker-f926.d544bc7bd" class="waterTargetInspect-t-date-picker-0-3"  :placeholder="tDatePickerx0x3ComputedData.placeholder" :start-placeholder="tDatePickerx0x3ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x3ComputedData.endPlaceholder" :type="tDatePickerx0x3ComputedData.type" :clearable="tDatePickerx0x3ComputedData.clearable" :range-separator="tDatePickerx0x3ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeValue, componentPropBindingMap?.['t-date-picker-f926.d544bc7bd']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x3ComputedData.separator" :readonly="tDatePickerx0x3ComputedData.readonly" :editable="tDatePickerx0x3ComputedData.editable" :c-style="tDatePickerx0x3ComputedData.cStyle" @date-change="ondateChange1733725900639">` +
`</t-date-picker>` +
`<t-component id="t-component-d4cb.751b0914c" class="waterTargetInspect-t-component-0-4"  :name="tComponentx0x4ComputedData.name" :c-style="tComponentx0x4ComputedData.cStyle" :src="tComponentx0x4ComputedData.src" :component-name="tComponentx0x4ComputedData.componentName">` +
`</t-component>` +
`<t-component id="t-component-f1ed.f734467c6" class="waterTargetInspect-t-component-0-5"  :name="tComponentx0x5ComputedData.name" :c-style="tComponentx0x5ComputedData.cStyle" :src="tComponentx0x5ComputedData.src" :component-name="tComponentx0x5ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-a953.2e9043d7a" class="waterTargetInspect-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="global.regionaQuery.regionType === 'wsystem'" id="t-text-70ee.023a98437" class="waterTargetInspect-t-text-0-7"  :label="tTextx0x7ComputedData.label" :editable="tTextx0x7ComputedData.editable" :c-style="tTextx0x7ComputedData.cStyle">` +
`</t-text>` +
`<t-text v-if="global.regionaQuery.regionType === 'region'" id="t-text-e93c.2cd5cf63e" class="waterTargetInspect-t-text-0-8"  :label="tTextx0x8ComputedData.label" :editable="tTextx0x8ComputedData.editable" :c-style="tTextx0x8ComputedData.cStyle">` +
`</t-text>` +
`<t-circle id="t-circle-b618.38c508836" class="waterTargetInspect-t-circle-0-9"  :tip="tCirclex0x9ComputedData.tip" :label="tCirclex0x9ComputedData.label" :active="tCirclex0x9ComputedData.active" :c-style="tCirclex0x9ComputedData.cStyle">` +
`</t-circle>` +
`<t-text id="t-text-4e96.1331370b2" class="waterTargetInspect-t-text-0-10"  :label="tTextx0x10ComputedData.label" :editable="tTextx0x10ComputedData.editable" :c-style="tTextx0x10ComputedData.cStyle">` +
`</t-text>` +
`<t-image-base id="t-image-base-7b58.38f029a2f" class="waterTargetInspect-t-image-base-0-11"  :src="tImageBasex0x11ComputedData.src" :fit="tImageBasex0x11ComputedData.fit" :c-style="tImageBasex0x11ComputedData.cStyle">` +
`</t-image-base>` +
`<t-chart-pie-percent id="t-chart-pie-percent-3ef3.0072ddd99" class="waterTargetInspect-t-chart-pie-percent-0-12"  :empty-img="tChartPiePercentx0x12ComputedData.emptyImg" :data="replaceCssVariables(filterData(state.percent.bzsl, componentPropBindingMap?.['t-chart-pie-percent-3ef3.0072ddd99']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :series-style="tChartPiePercentx0x12ComputedData.seriesStyle" :c-style="tChartPiePercentx0x12ComputedData.cStyle" :options="tChartPiePercentx0x12ComputedData.options" :pie="componentState.tChartPiePercentx0x12.pie">` +
`</t-chart-pie-percent>` +
`<t-text-unit id="t-text-unit-ae5c.d1d7ef971" class="waterTargetInspect-t-text-unit-0-13"  :c-style="tTextUnitx0x13ComputedData.cStyle" :justify="tTextUnitx0x13ComputedData.justify" :align="tTextUnitx0x13ComputedData.align" :content="replaceCssVariables(filterData(state.percent.bzsl, componentPropBindingMap?.['t-text-unit-ae5c.d1d7ef971']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x13ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x13ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-list-card id="t-list-card-fa07.4f24f7f87" class="waterTargetInspect-t-list-card-0-14"  :data="replaceCssVariables(filterData(state.waterQuantityCard, componentPropBindingMap?.['t-list-card-fa07.4f24f7f87']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x14ComputedData.spacingX" :col="tListCardx0x14ComputedData.col" :direction="tListCardx0x14ComputedData.direction" :exchange-order="tListCardx0x14ComputedData.exchangeOrder" :unit-break="tListCardx0x14ComputedData.unitBreak" :key-field="tListCardx0x14ComputedData.keyField" :active-key-field="tListCardx0x14ComputedData.activeKeyField" :active="tListCardx0x14ComputedData.active" :c-style="tListCardx0x14ComputedData.cStyle">` +
`</t-list-card>` +
`<t-rect id="t-rect-1163.3b60a5b33" class="waterTargetInspect-t-rect-0-15"  :tip="tRectx0x15ComputedData.tip" :label="tRectx0x15ComputedData.label" :active="tRectx0x15ComputedData.active" :c-style="tRectx0x15ComputedData.cStyle">` +
`</t-rect>` +
`<t-table v-if="global.regionaQuery.regionType === 'wsystem'" id="t-table-1ade.43788f534" class="waterTargetInspect-t-table-0-16"  :height="tTablex0x16ComputedData.height" :stripe="tTablex0x16ComputedData.stripe" :border="tTablex0x16ComputedData.border" :auto-scroll="tTablex0x16ComputedData.autoScroll" :speed="tTablex0x16ComputedData.speed" :columns="tTablex0x16ComputedData.columns" :data="replaceCssVariables(filterData(state.list, componentPropBindingMap?.['t-table-1ade.43788f534']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x16ComputedData.defaultSort" :c-style="tTablex0x16ComputedData.cStyle">` +
`</t-table>` +
`<t-table v-if="global.regionaQuery.regionType === 'region'" id="t-table-8f93.b627fe3b9" class="waterTargetInspect-t-table-0-17"  :height="tTablex0x17ComputedData.height" :stripe="tTablex0x17ComputedData.stripe" :border="tTablex0x17ComputedData.border" :auto-scroll="tTablex0x17ComputedData.autoScroll" :speed="tTablex0x17ComputedData.speed" :columns="tTablex0x17ComputedData.columns" :data="replaceCssVariables(filterData(state.list, componentPropBindingMap?.['t-table-8f93.b627fe3b9']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x17ComputedData.defaultSort" :c-style="tTablex0x17ComputedData.cStyle" @cell-click="oncellClick1733795519061">` +
`</t-table>` +
`<t-circle id="t-circle-0f3d.70910f776" class="waterTargetInspect-t-circle-0-18"  :tip="tCirclex0x18ComputedData.tip" :label="tCirclex0x18ComputedData.label" :active="tCirclex0x18ComputedData.active" :c-style="tCirclex0x18ComputedData.cStyle">` +
`</t-circle>` +
`<t-text id="t-text-c402.bfb4b9f6d" class="waterTargetInspect-t-text-0-19"  :label="tTextx0x19ComputedData.label" :editable="tTextx0x19ComputedData.editable" :c-style="tTextx0x19ComputedData.cStyle">` +
`</t-text>` +
`<t-image-base id="t-image-base-75ff.1f7d816be" class="waterTargetInspect-t-image-base-0-20"  :src="tImageBasex0x20ComputedData.src" :fit="tImageBasex0x20ComputedData.fit" :c-style="tImageBasex0x20ComputedData.cStyle">` +
`</t-image-base>` +
`<t-chart-pie-percent id="t-chart-pie-percent-4b9f.9ff4c4cfb" class="waterTargetInspect-t-chart-pie-percent-0-21"  :empty-img="tChartPiePercentx0x21ComputedData.emptyImg" :data="replaceCssVariables(filterData(state.percent.bhqhf, componentPropBindingMap?.['t-chart-pie-percent-4b9f.9ff4c4cfb']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :series-style="tChartPiePercentx0x21ComputedData.seriesStyle" :c-style="tChartPiePercentx0x21ComputedData.cStyle" :options="tChartPiePercentx0x21ComputedData.options" :pie="componentState.tChartPiePercentx0x21.pie">` +
`</t-chart-pie-percent>` +
`<t-text-unit id="t-text-unit-7d26.14868d165" class="waterTargetInspect-t-text-unit-0-22"  :c-style="tTextUnitx0x22ComputedData.cStyle" :justify="tTextUnitx0x22ComputedData.justify" :align="tTextUnitx0x22ComputedData.align" :content="replaceCssVariables(filterData(state.percent.bhqhf, componentPropBindingMap?.['t-text-unit-7d26.14868d165']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x22ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x22ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rank-single id="t-rank-single-e085.6a31c0359" class="waterTargetInspect-t-rank-single-0-23"  :icon-src="tRankSinglex0x23ComputedData.iconSrc" :data="replaceCssVariables(filterData(state.szCard, componentPropBindingMap?.['t-rank-single-e085.6a31c0359']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tRankSinglex0x23ComputedData.cStyle" :tab="tRankSinglex0x23ComputedData.tab" :key-word="tRankSinglex0x23ComputedData.keyWord" :default-checked="tRankSinglex0x23ComputedData.defaultChecked" :auto-scroll="tRankSinglex0x23ComputedData.autoScroll" :speed="tRankSinglex0x23ComputedData.speed" :data-style="tRankSinglex0x23ComputedData.dataStyle">` +
`</t-rank-single>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-0d13.8ce6744a1":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-6015.c54bdb54b":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-select-ec77.0bbc6ebb7":{"attributeName":"tSelectx0x2","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-f926.d544bc7bd":{"attributeName":"tDatePickerx0x3","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-component-d4cb.751b0914c":{"attributeName":"tComponentx0x4","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-component-f1ed.f734467c6":{"attributeName":"tComponentx0x5","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-a953.2e9043d7a":{"attributeName":"tTextx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-70ee.023a98437":{"attributeName":"tTextx0x7","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-e93c.2cd5cf63e":{"attributeName":"tTextx0x8","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-circle-b618.38c508836":{"attributeName":"tCirclex0x9","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-4e96.1331370b2":{"attributeName":"tTextx0x10","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-7b58.38f029a2f":{"attributeName":"tImageBasex0x11","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-pie-percent-3ef3.0072ddd99":{"attributeName":"tChartPiePercentx0x12","emptyImg":{"filters":[]},"data":{"filters":[]},"seriesStyle":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-text-unit-ae5c.d1d7ef971":{"attributeName":"tTextUnitx0x13","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-list-card-fa07.4f24f7f87":{"attributeName":"tListCardx0x14","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-1163.3b60a5b33":{"attributeName":"tRectx0x15","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-table-1ade.43788f534":{"attributeName":"tTablex0x16","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-table-8f93.b627fe3b9":{"attributeName":"tTablex0x17","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-circle-0f3d.70910f776":{"attributeName":"tCirclex0x18","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-c402.bfb4b9f6d":{"attributeName":"tTextx0x19","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-75ff.1f7d816be":{"attributeName":"tImageBasex0x20","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-chart-pie-percent-4b9f.9ff4c4cfb":{"attributeName":"tChartPiePercentx0x21","emptyImg":{"filters":[]},"data":{"filters":[]},"seriesStyle":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-text-unit-7d26.14868d165":{"attributeName":"tTextUnitx0x22","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-rank-single-e085.6a31c0359":{"attributeName":"tRankSinglex0x23","iconSrc":{"filters":[]},"data":{"filters":[]},"cStyle":{"filters":[]},"tab":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"dataStyle":{"filters":[]}}};
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
   cityOptions: [{"label":"全部","value":"","disabled":false},{"value":"city","label":"地级","disabled":false},{"value":"county","label":"县级","disabled":false},{"value":"town","label":"乡镇级","disabled":false}],
   qslCard: [{"name":"取水量达标率","targetValue":100,"currentValue":0,"unit":"%"}],
   szCard: [{"name":"水质达标率","targetValue":100,"currentValue":0,"unit":"%"}],
   drinkName: "",
   percent: {"bhqhf":0,"bzsl":0},
   list: [],
   waterQuantityCard: [{"title":"总数","num":0,"unit":"个","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-05/9318cb0685104a01ba0f6d8c0ad8dc9d.svg"},{"title":"地表水型","num":0,"unit":"个","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-05/afe9d3e0b36249acaeab422809287a6c.svg"},{"title":"地下水型","num":0,"unit":"个","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-05/6afe9e3395864daca876a23dd746587f.svg"}],
   timeValue: "",
   selectedCity: "",
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
            default: {"width":"448px","height":"64px","position":"unset","left":"0px","top":"0px","background":"var(--business-query-bg)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"448px","height":"64px","position":"unset","left":"0px","top":"0px","background":"var(--business-query-bg)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"201px","height":"140px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg10)","position":"unset","left":"231px","top":"303px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"201px","height":"140px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg10)","position":"unset","left":"231px","top":"303px","animationName":""}}}, 
 },
},
tSelectx0x2: {
defaultStyle: {
            default: {"width":"132px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},
            
            },
 default: { 
 
activeValue:"",
options:[{"label":"全部","value":"","disabled":false},{"value":"city","label":"地级","disabled":false},{"value":"county","label":"县级","disabled":false},{"value":"town","label":"乡镇级","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"132px","height":"auto","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tDatePickerx0x3: {
defaultStyle: {
            default: {"width":"150px","height":"auto","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","min-height":"30px","line-height":"normal","min-width":"132px","max-width":"none"},
            
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
cStyle:{"wrapper":{"default":{"width":"150px","height":"auto","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":"","min-height":"30px","line-height":"normal","min-width":"132px","max-width":"none"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","min-height":"30px","line-height":"normal"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)","lineHeight":"30px","fontSize":"var(--business-text-size-14)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","fontSize":"var(--business-text-size-14)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-14)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"var(--skin-font-color)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"}},"operatorArrow":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--skin-font-color)","borderLeft":"1px solid var(--skin-font-color)","borderTop":"1px solid var(--skin-font-color)","borderRight":"1px solid var(--skin-font-color)","borderBottom":"1px solid var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--skin-font-color)","fontSize":"var(--business-text-size-14)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--skin-font-color)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}},"inputCloseIcons":{"default":{"fontSize":"var(--business-text-size-14)"}},"dateHeaderYearBtnWrapper":{"default":{"fontSize":"var(--business-text-size-14)"}},"dateHeaderYearBtn":{"default":{"fontSize":"var(--business-text-size-14)"}},"dateHeaderMonthBtnWrapper":{"default":{"fontSize":"var(--business-text-size-14)"}}}, 
 },
},
tComponentx0x4: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"186px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"20px","top":"186px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tComponentx0x5: {
defaultStyle: {
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"22px","top":"475px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"22px","top":"475px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"247px","height":"19px","color":"rgba(255, 255, 255, 0.9)","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":""},
            
            },
 default: { 
 
label:" 整体考核结果",
editable:false,
cStyle:{"wrapper":{"default":{"width":"247px","height":"19px","color":"rgba(255, 255, 255, 0.9)","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":""}}}, 
 },
},
tTextx0x7: {
defaultStyle: {
            default: {"width":"244px","height":"19px","color":"rgba(255, 255, 255, 0.9)","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":""},
            
            },
 default: { 
 
label:"流域考核结果",
editable:false,
cStyle:{"wrapper":{"default":{"width":"244px","height":"19px","color":"rgba(255, 255, 255, 0.9)","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":""}}}, 
 },
},
tTextx0x8: {
defaultStyle: {
            default: {"width":"244px","height":"19px","color":"rgba(255, 255, 255, 0.9)","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":""},
            
            },
 default: { 
 
label:"区域考核结果",
editable:false,
cStyle:{"wrapper":{"default":{"width":"244px","height":"19px","color":"rgba(255, 255, 255, 0.9)","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":""}}}, 
 },
},
tCirclex0x9: {
defaultStyle: {
            default: {"width":"113px","height":"113px","borderLeft":"5px solid var(--business-show-bg10)","borderTop":"5px solid var(--business-show-bg10)","borderRight":"5px solid var(--business-show-bg10)","borderBottom":"5px solid var(--business-show-bg10)","position":"unset","left":"275px","top":"318px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"113px","height":"113px","borderLeft":"5px solid var(--business-show-bg10)","borderTop":"5px solid var(--business-show-bg10)","borderRight":"5px solid var(--business-show-bg10)","borderBottom":"5px solid var(--business-show-bg10)","position":"unset","left":"275px","top":"318px","animationName":""}}}, 
 },
},
tTextx0x10: {
defaultStyle: {
            default: {"width":"113px","height":"20px","color":"var(--business-unit-icon)","textAlign":"center","fontSize":"var(--business-text-size-14)","lineHeight":"20px","animationName":""},
            
            },
 default: { 
 
label:"标志设立",
editable:false,
cStyle:{"wrapper":{"default":{"width":"113px","height":"20px","color":"var(--business-unit-icon)","textAlign":"center","fontSize":"var(--business-text-size-14)","lineHeight":"20px","animationName":""}}}, 
 },
},
tImageBasex0x11: {
defaultStyle: {
            default: {"width":"99px","height":"99px","position":"unset","left":"282px","top":"325px","animationName":"custom0a3ca1621db92","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-05/5a6e9f0d79d94b6c88323b702485b364.png",
fit:"none",
cStyle:{"wrapper":{"default":{"width":"99px","height":"99px","position":"unset","left":"282px","top":"325px","animationName":"custom0a3ca1621db92","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse"}},"title":{"default":{"animationName":"custom5a9d2fd75e3e","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse"}}}, 
 },
},
tChartPiePercentx0x12: {
defaultStyle: {
            default: {"height":"113px","width":"113px","position":"unset","left":"275px","top":"318px","animationName":""},
            
            },
pie: computed(() => activeChartTheme.value?.pie),
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/emptyImg.png",
data:0,
seriesStyle:{"radius":["92%","100%"],"bgColor":"rgba(45, 149, 90,0)","fontSize":0,"fontColor":"rgba(0, 0, 0, 0)","fontWeight":"normal","valueColor":"#FFC000","startAngle":90,"clockwise":false},
cStyle:{"wrapper":{"default":{"height":"113px","width":"113px","position":"unset","left":"275px","top":"318px","animationName":""}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"legend":{"show":false},"title":{"show":false}})), 
 },
},
tTextUnitx0x13: {
defaultStyle: {
            default: {"width":"89px","height":"29px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"89px","height":"29px","animationName":""}},"text":{"default":{"fontFamily":"DIN-black","fontSize":"var(--business-num-size-24)","color":"var(--business-white)"}},"unit":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-unit-icon)","lineHeight":"20px"}}},
justify:"center",
align:"flex-end",
content:0,
unit:"%",
showOverflowTooltip:true, 
 },
},
tListCardx0x14: {
defaultStyle: {
            default: {"width":"418px","height":"68px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"},
            
            },
 default: { 
 
data:[{"title":"总数","num":0,"unit":"个","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-05/9318cb0685104a01ba0f6d8c0ad8dc9d.svg"},{"title":"地表水型","num":0,"unit":"个","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-05/afe9d3e0b36249acaeab422809287a6c.svg"},{"title":"地下水型","num":0,"unit":"个","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-05/6afe9e3395864daca876a23dd746587f.svg"}],
spacingX:8,
col:3,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","trend":"trend","color":"color","selectIcon":"icon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"418px","height":"68px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"}},"itemWrapper":{"default":{"height":"66px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"var(--business-show-bg30)","lineHeight":"18px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"0px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"num":{"default":{"fontSize":"var(--business-num-size-24)","fontWeight":"700","marginRight":"2px","lineHeight":"20px","textAlign":"left","fontFamily":"DIN-bold","color":"var(--business-white)"}},"unit":{"default":{"fontSize":"var(--business-text-size-12)","color":"var(--business-unit-icon)"}},"title":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)","marginTop":"0px","lineHeight":"var(--business-text-size-14)","overflow":"hidden","text-overflow":"ellipsis","white-space":"nowrap","max-width":"calc(100% - 1px)"}},"icon":{"default":{"width":"32px","height":"32px","left":"16px","marginLeft":"17px"}},"numBox":{"default":{"marginTop":"6px"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"rightContent":{"default":{"alignItems":"flex-start","marginLeft":"8px"}}}, 
 },
},
tRectx0x15: {
defaultStyle: {
            default: {"width":"201px","height":"140px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg10)","position":"unset","left":"22px","top":"303px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"201px","height":"140px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg10)","position":"unset","left":"22px","top":"303px","animationName":""}}}, 
 },
},
tTablex0x16: {
defaultStyle: {
            default: {"width":"410px","height":"300px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"300px",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"44PX","type":"state","stateKey":"iconStatus"},{"label":"考核流域","type":"default","key":"WSYSTEM_NAME","stateKey":"","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}},{"label":"水质达标率","type":"default","key":"STANDARDRATE","stateKey":"STANDARDRATE","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"rgba(0, 255, 34, 1)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"300px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tTablex0x17: {
defaultStyle: {
            default: {"width":"410px","height":"300px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"300px",
stripe:true,
border:false,
autoScroll:false,
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":""}},"width":"44PX","type":"state","stateKey":"iconStatus"},{"label":"行政区","type":"default","key":"REGION_NAME","stateKey":"","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)","lineHeight":"normal"}}},{"label":"水质达标率","type":"default","key":"STANDARDRATE","stateKey":"STANDARDRATE","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":false,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"rgba(0, 255, 34, 1)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"300px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tCirclex0x18: {
defaultStyle: {
            default: {"width":"113px","height":"113px","borderLeft":"5px solid var(--business-show-bg10)","borderTop":"5px solid var(--business-show-bg10)","borderRight":"5px solid var(--business-show-bg10)","borderBottom":"5px solid var(--business-show-bg10)","position":"unset","left":"66px","top":"318px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"113px","height":"113px","borderLeft":"5px solid var(--business-show-bg10)","borderTop":"5px solid var(--business-show-bg10)","borderRight":"5px solid var(--business-show-bg10)","borderBottom":"5px solid var(--business-show-bg10)","position":"unset","left":"66px","top":"318px","animationName":""}}}, 
 },
},
tTextx0x19: {
defaultStyle: {
            default: {"width":"113px","height":"20px","color":"var(--business-unit-icon)","textAlign":"center","fontSize":"var(--business-text-size-14)","lineHeight":"20px","animationName":""},
            
            },
 default: { 
 
label:"保护区划分",
editable:false,
cStyle:{"wrapper":{"default":{"width":"113px","height":"20px","color":"var(--business-unit-icon)","textAlign":"center","fontSize":"var(--business-text-size-14)","lineHeight":"20px","animationName":""}}}, 
 },
},
tImageBasex0x20: {
defaultStyle: {
            default: {"width":"99px","height":"99px","position":"unset","left":"73px","top":"325px","animationName":"custom7498be6597a9b","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-05/8818f124d2894c1688b0aa8ac9f672d3.png",
fit:"none",
cStyle:{"wrapper":{"default":{"width":"99px","height":"99px","position":"unset","left":"73px","top":"325px","animationName":"custom7498be6597a9b","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tChartPiePercentx0x21: {
defaultStyle: {
            default: {"height":"113px","width":"113px","position":"unset","left":"66px","top":"318px","animationName":""},
            
            },
pie: computed(() => activeChartTheme.value?.pie),
 default: { 
 
emptyImg:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/emptyImg.png",
data:0,
seriesStyle:{"radius":["92%","100%"],"bgColor":"rgba(45, 149, 90,0)","fontSize":0,"fontColor":"rgba(0, 0, 0, 0)","fontWeight":"normal","valueColor":"#00FF22","startAngle":90,"clockwise":false},
cStyle:{"wrapper":{"default":{"height":"113px","width":"113px","position":"unset","left":"66px","top":"318px","animationName":""}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {"legend":{"show":false},"title":{"show":false}})), 
 },
},
tTextUnitx0x22: {
defaultStyle: {
            default: {"width":"90px","height":"29px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"90px","height":"29px","animationName":""}},"text":{"default":{"fontFamily":"DIN-black","fontSize":"var(--business-num-size-24)","color":"var(--business-white)"}},"unit":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-unit-icon)","lineHeight":"20px"}}},
justify:"center",
align:"flex-end",
content:0,
unit:"%",
showOverflowTooltip:true, 
 },
},
tRankSinglex0x23: {
defaultStyle: {
            default: {"width":"410px","height":"60px","position":"unset","left":"20px","top":"229px","backgroundColor":"var(--business-show-bg10)","paddingLeft":"16px","paddingRight":"16px","animationName":""},
            
            },
 default: { 
 
iconSrc:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-05/fd9833770b074836a1d43a339d0b9d6b.png",
data:[{"name":"水质达标率","targetValue":100,"currentValue":0,"unit":"%"}],
cStyle:{"wrapper":{"default":{"width":"410px","height":"60px","position":"unset","left":"20px","top":"229px","backgroundColor":"var(--business-show-bg10)","paddingLeft":"16px","paddingRight":"16px","animationName":""}},"index":{"default":{"backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-01-28/b8e69359f7f7417cb60f6cf2ee70fdb1.png)","backgroundPosition":"center","backgroundRepeat":"no-repeat","backgroundSize":"auto","color":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-12)","height":"19px","width":"16px"}},"name":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"proportionBarBg":{"default":{"transform":"none","height":"8px","borderRadius":0,"backgroundColor":"var(--business-show-bg10)","border":"1px solid rgba(255,213,0,0.3)","borderLeft":"1px solid var(--business-show-bg15)","borderTop":"1px solid var(--business-show-bg15)","borderRight":"1px solid var(--business-show-bg15)","borderBottom":"1px solid var(--business-show-bg15)"}},"proportionBarInner":{"default":{"transform":"none","height":"6px","borderRadius":0,"backgroundImage":"linear-gradient(270deg,rgba(0, 255, 34, 1) 0%,rgba(0, 255, 34, 0) 99.63961764498873%)","-webkit-mask-image":""}},"value":{"default":{"color":"var(--business-white)","fontWeight":500,"fontSize":"var(--business-num-size-20)","fontFamily":"DIN-black"}},"unit":{"default":{"color":"var(--business-unit-icon)","fontWeight":400,"fontSize":"var(--business-text-size-14)","paddingLeft":"2px"}},"itemWrapper":{"default":{"paddingTop":"10px"}},"separator":{"default":{"overflow":"hidden","opacity":"100% !important","width":"0px","height":"0px"}}},
tab:false,
keyWord:"",
defaultChecked:"",
autoScroll:false,
speed:3,
dataStyle:[], 
 },
},
});
const initPageData = () => {


// 初始化页面数据
const getData = (regionType) => {
  state.timeValue = state.drinkWaterState.time;
  state.selectedCity = state.drinkWaterState.level;
  state.drinkWaterState.name = "";
  // 水质量总数卡片接口
  apiRegistry.getWaterSoureQuantity.request();
  // 整体评价结果-数量、达标率
  apiRegistry.getZTPJJG.request();
  // 请求列表
  state.list = [];
  if (regionType === 'region') {
    // 区域
    apiRegistry.getQYList.request();
  } else {
    // 流域
    apiRegistry.getLYList.request();
  }
}
getData(global.regionaQuery.regionType)

// 水质量总数
watch(
  () => [
    state.selectedCity,
    global.regionaQuery.regionCode,
    global.regionaQuery.areaCode
  ],
  ([_, regionCode]) => {
    if (regionCode) {
      apiRegistry.getWaterSoureQuantity.request();
    }
  }
);

// 整体评价结果-数量、达标率
watch(
  () => [
    state.selectedCity,
    state.timeValue,
    global.regionaQuery.regionCode,
    global.regionaQuery.areaCode
  ],
  ([_, time, regionCode]) => {
    if (time && regionCode) {
      apiRegistry.getZTPJJG.request();
    }
  }
);

// 考核结果列表
watch(
  () => [
    state.selectedCity,
    state.timeValue,
    global.regionaQuery.regionCode,
    global.regionaQuery.regionType,
    global.regionaQuery.areaCode
  ],
  ([_, time, regionCode, regionType]) => {
    if (time && regionType && regionCode) {
      state.list = [];
      if (regionType === 'region') {
        apiRegistry.getQYList.request();
      } else if (regionType === 'wsystem') {
        apiRegistry.getLYList.request();
      }
    }
  }
);
};
const changeCity = (val) => {
state.drinkWaterState.level = val;
// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "value",
      "shareCode": "MANAGER_TYPE_CODE",
      "defaultValue": "",
      "runtimeValue": val
    },
    {
      "code": "defaultTab",
      "shareCode": "defaultTab",
      "defaultValue": "assess",
      "name": "",
      "runtimeValue": "assess"
    }
  ]
});

};
const changeTime = (val) => {
state.drinkWaterState.time = val;
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
    },
    {
      "code": "defaultTab",
      "name": "",
      "defaultValue": "assess",
      "shareCode": "defaultTab",
      "runtimeValue": "assess"
    }
  ]
});

};
const goToDetail = (row,col) => {
if (["行政区", "定位", '水质达标率', '取水量达标率'].includes(col.label)) {
  // 注意 这时候 还修改了 左上角选中区域值(估计是 发消息时 区域选择也接收了)
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,// 房间号
    type: "runInteractive", // 消息名称
    // 消息内容
    data: [
      {
        "code": "region_name",
        "shareCode": "REGION_NAME",
        "defaultValue": "",
        "runtimeValue": row.REGION_NAME
      },
      {
        "code": "region_code",
        "name": "",
        "defaultValue": "",
        "shareCode": "REGION_CODE",
        "runtimeValue": row.REGION_CODE
      }
    ]
  });

}
};
const getProvider = () => {
const rootData = inject('drinkWaterState');

state.drinkWaterState = rootData;
};
const setStyle = () => {
// 创建一个style元素
const styleElement = document.createElement("style");

// 获取当前组件的名称
const componentName = 'waterTargetInspect';
// 定义style元素的id
const id = `custom-${componentName}-styles`;
// 给style元素添加id以便之后可以方便地找到并修改它
styleElement.id = id;

// 使用条件判断以确保不会重复添加相同的样式规则
if (!document.getElementById(id)) {
  // 向style元素中添加自定义的CSS规则
  styleElement.innerHTML = `
      
      /* 城市选择器弹出框*/
      #t-l-c-${componentName} .t-date-picker .el-input {
        line-height: normal;
      }
    `;
  // 将style元素添加到文档头部
  document.head.appendChild(styleElement);
}
};
const onchange1733381589566 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.selectedCity = value;
// 执行自定义方法
changeCity(value);
};
const ondateChange1733725900639 = (data) => {
// 设置变量值
state.timeValue = data;
// 执行自定义方法
changeTime(data);
};
const oncellClick1733795519061 = (row,column,cell,event) => {
// 执行自定义方法
goToDetail(row,column);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getZTPJJG: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"AREA_CODE":"","MANAGER_TYPE_CODE":"state.selectedCity","WSYSTEM_CODE":"global.regionaQuery.areaCode","MONITORTIME":"state.timeValue","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"9be2a2eaba3521d1dc9c118affe050dc"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"AREA_CODE":"","MANAGER_TYPE_CODE":state.selectedCity,"WSYSTEM_CODE":global.regionaQuery.areaCode,"MONITORTIME":state.timeValue,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"9be2a2eaba3521d1dc9c118affe050dc"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"AREA_CODE":"","MANAGER_TYPE_CODE":state.selectedCity,"WSYSTEM_CODE":global.regionaQuery.areaCode,"MONITORTIME":state.timeValue,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"9be2a2eaba3521d1dc9c118affe050dc"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getZTPJJG'] = res.data;
                
     state.szCard[0].currentValue = 0
state.qslCard[0].currentValue = 0
if (res?.data?.head?.statusCode === '200') {
  state.szCard[0].currentValue = res.data.data.STANDARDRATE || 0
  state.qslCard[0].currentValue = res.data.data.STANDARDWITHDRAWALRATE || 0
}


      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.szCard[0].currentValue = 0
state.qslCard[0].currentValue = 0
      reject(error);
    });
  });
},
              },
// 接口函数
 getWaterSoureQuantity: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"AREA_CODE":"","WSYSTEM_CODE":"global.regionaQuery.areaCode","MANAGER_TYPE_CODE":"state.selectedCity","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"9b5f8d3c57e55a31f3388b9943dcb7c2"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"AREA_CODE":"","WSYSTEM_CODE":global.regionaQuery.areaCode,"MANAGER_TYPE_CODE":state.selectedCity,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"9b5f8d3c57e55a31f3388b9943dcb7c2"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"AREA_CODE":"","WSYSTEM_CODE":global.regionaQuery.areaCode,"MANAGER_TYPE_CODE":state.selectedCity,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"9b5f8d3c57e55a31f3388b9943dcb7c2"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getWaterSoureQuantity'] = res.data;
                
     if (res?.data?.head?.statusCode === '200') {
  state.waterQuantityCard[0].num = res?.data?.data?.DRINKCOUNT || 0;
  state.waterQuantityCard[1].num = res?.data?.data?.SURFACECOUNT || 0;
  state.waterQuantityCard[2].num = res?.data?.data?.UNDERGROUNDCOUNT || 0;
  state.percent = {
    bhqhf: res?.data?.data?.HASRESERVEPERCENT || 0, // 保护区划分
    bzsl: res?.data?.data?.HASBOUNDARYPERCENT || 0 // 标志设立
  }
} else {
  state.waterQuantityCard[0].num = 0;
  state.waterQuantityCard[1].num = 0;
  state.waterQuantityCard[2].num = 0;
  state.percent = {
    bhqhf: 0, // 保护区划分
    bzsl: 0 // 标志设立
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
 getLastTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"AREA_CODE":"","MONITORTIME":"","CODE_WQDATASOURCETYPE":"drinkingWater","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"3b6f856a9de8fa54f628b64c73c5274b"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"AREA_CODE":"","MONITORTIME":"","CODE_WQDATASOURCETYPE":"drinkingWater","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"3b6f856a9de8fa54f628b64c73c5274b"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"AREA_CODE":"","MONITORTIME":"","CODE_WQDATASOURCETYPE":"drinkingWater","REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"3b6f856a9de8fa54f628b64c73c5274b"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLastTime'] = res.data;
                
     state.timeValue = '';
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  // 当前选中最新时间
  state.timeValue = data.data.MONITORTIME || '';
} else {
  state.timeValue = '';
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
 getQYList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"AREA_CODE":"","MANAGER_TYPE_CODE":"state.selectedCity","MONITORTIME":"state.timeValue","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"241fecd1fd808611d49ae4e0dfdb8514"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"AREA_CODE":"","MANAGER_TYPE_CODE":state.selectedCity,"MONITORTIME":state.timeValue,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"241fecd1fd808611d49ae4e0dfdb8514"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"AREA_CODE":"","MANAGER_TYPE_CODE":state.selectedCity,"MONITORTIME":state.timeValue,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"241fecd1fd808611d49ae4e0dfdb8514"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getQYList'] = res.data;
                
     if (res?.data?.head?.statusCode === '200' && res?.data?.data.length) {
  state.list = res.data.data.map((item) => ({
    ...item,
    // 行政区
    REGION_NAME: item?.REGION_NAME || '-',
    // 水质达标率
    STANDARDRATE: item.STANDARDRATE || String(item.STANDARDRATE) === "0" ? `${item.STANDARDRATE}%` : '-',
    // 取水量达标率
    STANDARDWITHDRAWALRATE: item.STANDARDWITHDRAWALRATE || String(item.STANDARDWITHDRAWALRATE) === "0" ? `${item.STANDARDWITHDRAWALRATE}%` : '-',
    // 定位
    iconStatus: `${!!(item.LONGITUDE && item.LATITUDE)}`
  }))
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.list = [];
      reject(error);
    });
  });
},
              },
// 接口函数
 getLYList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"AREA_CODE":"","MANAGER_TYPE_CODE":"state.selectedCity","MONITORTIME":"state.timeValue","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"dcdf047d7b97e88fcf03d446e02f9491"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"AREA_CODE":"","MANAGER_TYPE_CODE":state.selectedCity,"MONITORTIME":state.timeValue,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"dcdf047d7b97e88fcf03d446e02f9491"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"AREA_CODE":"","MANAGER_TYPE_CODE":state.selectedCity,"MONITORTIME":state.timeValue,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"dcdf047d7b97e88fcf03d446e02f9491"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLYList'] = res.data;
                
     if (res?.data?.head?.statusCode === '200' && res?.data?.data.length) {
  state.list = res.data.data.map((item) => ({
    ...item,
    // 流域
    WSYSTEM_NAME: item?.WSYSTEM_NAME || '-',
    // 水质达标率
    STANDARDRATE: item?.STANDARDRATE ? `${item.STANDARDRATE}%` : '-',
    // 取水量达标率
    STANDARDWITHDRAWALRATE: item.STANDARDWITHDRAWALRATE || String(item.STANDARDWITHDRAWALRATE) === "0" ? `${item.STANDARDWITHDRAWALRATE}%` : '-',
    // 定位
    iconStatus: `${!!(item.LONGITUDE && item.LATITUDE)}`
  }))
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.list = [];
      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-waterTargetInspect', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-waterTargetInspect', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
getProvider();
// 执行自定义方法
initPageData();
// 执行自定义方法
setStyle();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tSelectx0x2ComputedData = computed(() => _.merge({}, componentState.tSelectx0x2.default, componentState.tSelectx0x2?.[state.screenSize]));

 const tDatePickerx0x3ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x3.default, componentState.tDatePickerx0x3?.[state.screenSize]));

 const tComponentx0x4ComputedData = computed(() => _.merge({}, componentState.tComponentx0x4.default, componentState.tComponentx0x4?.[state.screenSize]));

 const tComponentx0x5ComputedData = computed(() => _.merge({}, componentState.tComponentx0x5.default, componentState.tComponentx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tTextx0x7ComputedData = computed(() => _.merge({}, componentState.tTextx0x7.default, componentState.tTextx0x7?.[state.screenSize]));

 const tTextx0x8ComputedData = computed(() => _.merge({}, componentState.tTextx0x8.default, componentState.tTextx0x8?.[state.screenSize]));

 const tCirclex0x9ComputedData = computed(() => _.merge({}, componentState.tCirclex0x9.default, componentState.tCirclex0x9?.[state.screenSize]));

 const tTextx0x10ComputedData = computed(() => _.merge({}, componentState.tTextx0x10.default, componentState.tTextx0x10?.[state.screenSize]));

 const tImageBasex0x11ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x11.default, componentState.tImageBasex0x11?.[state.screenSize]));

 const tChartPiePercentx0x12ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartPiePercentx0x12.default, componentState.tChartPiePercentx0x12?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tTextUnitx0x13ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x13.default, componentState.tTextUnitx0x13?.[state.screenSize]));

 const tListCardx0x14ComputedData = computed(() => _.merge({}, componentState.tListCardx0x14.default, componentState.tListCardx0x14?.[state.screenSize]));

 const tRectx0x15ComputedData = computed(() => _.merge({}, componentState.tRectx0x15.default, componentState.tRectx0x15?.[state.screenSize]));

 const tTablex0x16ComputedData = computed(() => _.merge({}, componentState.tTablex0x16.default, componentState.tTablex0x16?.[state.screenSize]));

 const tTablex0x17ComputedData = computed(() => _.merge({}, componentState.tTablex0x17.default, componentState.tTablex0x17?.[state.screenSize]));

 const tCirclex0x18ComputedData = computed(() => _.merge({}, componentState.tCirclex0x18.default, componentState.tCirclex0x18?.[state.screenSize]));

 const tTextx0x19ComputedData = computed(() => _.merge({}, componentState.tTextx0x19.default, componentState.tTextx0x19?.[state.screenSize]));

 const tImageBasex0x20ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x20.default, componentState.tImageBasex0x20?.[state.screenSize]));

 const tChartPiePercentx0x21ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartPiePercentx0x21.default, componentState.tChartPiePercentx0x21?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tTextUnitx0x22ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x22.default, componentState.tTextUnitx0x22?.[state.screenSize]));

 const tRankSinglex0x23ComputedData = computed(() => _.merge({}, componentState.tRankSinglex0x23.default, componentState.tRankSinglex0x23?.[state.screenSize]));

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
tSelectx0x2ComputedData,
tDatePickerx0x3ComputedData,
tComponentx0x4ComputedData,
tComponentx0x5ComputedData,
tTextx0x6ComputedData,
tTextx0x7ComputedData,
tTextx0x8ComputedData,
tCirclex0x9ComputedData,
tTextx0x10ComputedData,
tImageBasex0x11ComputedData,
tChartPiePercentx0x12ComputedData,
tTextUnitx0x13ComputedData,
tListCardx0x14ComputedData,
tRectx0x15ComputedData,
tTablex0x16ComputedData,
tTablex0x17ComputedData,
tCirclex0x18ComputedData,
tTextx0x19ComputedData,
tImageBasex0x20ComputedData,
tChartPiePercentx0x21ComputedData,
tTextUnitx0x22ComputedData,
tRankSinglex0x23ComputedData,
onchange1733381589566,
ondateChange1733725900639,
oncellClick1733795519061,
};
},
};