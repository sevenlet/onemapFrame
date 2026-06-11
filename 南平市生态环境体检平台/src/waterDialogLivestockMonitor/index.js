window.waterDialogLivestockMonitorComponent = {
template: 
`<div id="t-l-c-waterDialogLivestockMonitor" class="t-l-c-waterDialogLivestockMonitor" >` +
`<t-chart-design id="t-chart-design-257d.c589f49de" class="waterDialogLivestockMonitor-t-chart-design-0-0"  :empty-img="replaceCssVariables(filterData(state.noDataImg, componentPropBindingMap?.['t-chart-design-257d.c589f49de']['emptyImg'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tChartDesignx0x0ComputedData.cStyle" :options="replaceCssVariables(filterData(state.lineChartOption, componentPropBindingMap?.['t-chart-design-257d.c589f49de']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @get-chart-instance="ongetChartInstance1763191439325">` +
`</t-chart-design>` +
`<t-select id="t-select-ee9f.bf9455a04" class="waterDialogLivestockMonitor-t-select-0-1"  :active-value="replaceCssVariables(filterData(state.params.monitor, componentPropBindingMap?.['t-select-ee9f.bf9455a04']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.options.monitor, componentPropBindingMap?.['t-select-ee9f.bf9455a04']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x1ComputedData.alias" :multiple="tSelectx0x1ComputedData.multiple" :placeholder="tSelectx0x1ComputedData.placeholder" :clearable="tSelectx0x1ComputedData.clearable" :disabled="tSelectx0x1ComputedData.disabled" :name="tSelectx0x1ComputedData.name" :autocomplete="tSelectx0x1ComputedData.autocomplete" :filterable="tSelectx0x1ComputedData.filterable" :no-match-text="tSelectx0x1ComputedData.no-match-text" :no-data-text="tSelectx0x1ComputedData.no-data-text" :c-style="tSelectx0x1ComputedData.cStyle" @change="onchange1734159936716">` +
`</t-select>` +
`<t-text id="t-text-8f2e.58316ed1d" class="waterDialogLivestockMonitor-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-eadd.0abab7f2d" class="waterDialogLivestockMonitor-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-717d.29e000721" class="waterDialogLivestockMonitor-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-740f.85d1d67c6" class="waterDialogLivestockMonitor-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-7555.0fdd326c2" class="waterDialogLivestockMonitor-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle">` +
`</t-text>` +
`<t-select id="t-select-8b99.2c9e49e2a" class="waterDialogLivestockMonitor-t-select-0-7"  :active-value="replaceCssVariables(filterData(state.upstreamPointCode, componentPropBindingMap?.['t-select-8b99.2c9e49e2a']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.upstreamSelectOptions, componentPropBindingMap?.['t-select-8b99.2c9e49e2a']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x7ComputedData.alias" :multiple="tSelectx0x7ComputedData.multiple" :placeholder="tSelectx0x7ComputedData.placeholder" :clearable="tSelectx0x7ComputedData.clearable" :disabled="tSelectx0x7ComputedData.disabled" :collapse-tags="tSelectx0x7ComputedData.collapseTags" :name="tSelectx0x7ComputedData.name" :autocomplete="tSelectx0x7ComputedData.autocomplete" :filterable="tSelectx0x7ComputedData.filterable" :no-match-text="tSelectx0x7ComputedData.no-match-text" :no-data-text="tSelectx0x7ComputedData.no-data-text" :c-style="tSelectx0x7ComputedData.cStyle" :multiple-limit="tSelectx0x7ComputedData.multipleLimit" :data="tSelectx0x7ComputedData.data" @change="onchange1740100114069">` +
`</t-select>` +
`<t-select id="t-select-e7c6.73c2166f5" class="waterDialogLivestockMonitor-t-select-0-8"  :active-value="replaceCssVariables(filterData(state.downstreamPointCode, componentPropBindingMap?.['t-select-e7c6.73c2166f5']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="replaceCssVariables(filterData(state.downstreamSelectOptions, componentPropBindingMap?.['t-select-e7c6.73c2166f5']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :alias="tSelectx0x8ComputedData.alias" :multiple="tSelectx0x8ComputedData.multiple" :placeholder="tSelectx0x8ComputedData.placeholder" :clearable="tSelectx0x8ComputedData.clearable" :disabled="tSelectx0x8ComputedData.disabled" :collapse-tags="tSelectx0x8ComputedData.collapseTags" :name="tSelectx0x8ComputedData.name" :autocomplete="tSelectx0x8ComputedData.autocomplete" :filterable="tSelectx0x8ComputedData.filterable" :no-match-text="tSelectx0x8ComputedData.no-match-text" :no-data-text="tSelectx0x8ComputedData.no-data-text" :c-style="tSelectx0x8ComputedData.cStyle" :multiple-limit="tSelectx0x8ComputedData.multipleLimit" :data="tSelectx0x8ComputedData.data" @change="onchange1762939705327_1_0">` +
`</t-select>` +
`<t-switch id="t-switch-5d48.72ababdbd" class="waterDialogLivestockMonitor-t-switch-0-9"  :value="tSwitchx0x9ComputedData.value" :c-style="tSwitchx0x9ComputedData.cStyle" @change="onchange1734160214280">` +
`</t-switch>` +
`<t-date-picker v-if="state.dialogType === '3'" id="t-date-picker-777f.73b3652a8" class="waterDialogLivestockMonitor-t-date-picker-0-10"  :placeholder="tDatePickerx0x10ComputedData.placeholder" :start-placeholder="tDatePickerx0x10ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x10ComputedData.endPlaceholder" :type="tDatePickerx0x10ComputedData.type" :clearable="tDatePickerx0x10ComputedData.clearable" :range-separator="tDatePickerx0x10ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.params.time.range, componentPropBindingMap?.['t-date-picker-777f.73b3652a8']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x10ComputedData.separator" :readonly="tDatePickerx0x10ComputedData.readonly" :editable="tDatePickerx0x10ComputedData.editable" :c-style="tDatePickerx0x10ComputedData.cStyle" @date-change="ondateChange1735539103868_0_0">` +
`</t-date-picker>` +
`<t-date-picker v-if="state.dialogType === '2'" id="t-date-picker-2b6d.038f4b93d" class="waterDialogLivestockMonitor-t-date-picker-0-11"  :placeholder="tDatePickerx0x11ComputedData.placeholder" :start-placeholder="tDatePickerx0x11ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x11ComputedData.endPlaceholder" :type="tDatePickerx0x11ComputedData.type" :clearable="tDatePickerx0x11ComputedData.clearable" :range-separator="tDatePickerx0x11ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.params.time.range, componentPropBindingMap?.['t-date-picker-2b6d.038f4b93d']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x11ComputedData.separator" :readonly="tDatePickerx0x11ComputedData.readonly" :editable="tDatePickerx0x11ComputedData.editable" :c-style="tDatePickerx0x11ComputedData.cStyle" @date-change="ondateChange1735539087143_0_0">` +
`</t-date-picker>` +
`<t-date-picker v-if="state.dialogType === '1'" id="t-date-picker-cad2.abd345996" class="waterDialogLivestockMonitor-t-date-picker-0-12"  :placeholder="tDatePickerx0x12ComputedData.placeholder" :start-placeholder="tDatePickerx0x12ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x12ComputedData.endPlaceholder" :type="tDatePickerx0x12ComputedData.type" :clearable="tDatePickerx0x12ComputedData.clearable" :range-separator="tDatePickerx0x12ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.params.time.range, componentPropBindingMap?.['t-date-picker-cad2.abd345996']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x12ComputedData.separator" :readonly="tDatePickerx0x12ComputedData.readonly" :editable="tDatePickerx0x12ComputedData.editable" :c-style="tDatePickerx0x12ComputedData.cStyle" @date-change="ondateChange1734160159774">` +
`</t-date-picker>` +
`<t-text-common id="t-text-common-b0ad.6d9f3046" class="waterDialogLivestockMonitor-t-text-common-0-13"  :label="tTextCommonx0x13ComputedData.label" :editable="tTextCommonx0x13ComputedData.editable" :c-style="tTextCommonx0x13ComputedData.cStyle">` +
`</t-text-common>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-chart-design-257d.c589f49de":{"attributeName":"tChartDesignx0x0","emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-select-ee9f.bf9455a04":{"attributeName":"tSelectx0x1","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-text-8f2e.58316ed1d":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-eadd.0abab7f2d":{"attributeName":"tTextx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-717d.29e000721":{"attributeName":"tTextx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-740f.85d1d67c6":{"attributeName":"tTextx0x5","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-7555.0fdd326c2":{"attributeName":"tTextx0x6","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-select-8b99.2c9e49e2a":{"attributeName":"tSelectx0x7","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"collapseTags":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]},"multipleLimit":{"filters":[]},"data":{"filters":[]}},"t-select-e7c6.73c2166f5":{"attributeName":"tSelectx0x8","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"collapseTags":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]},"multipleLimit":{"filters":[]},"data":{"filters":[]}},"t-switch-5d48.72ababdbd":{"attributeName":"tSwitchx0x9","value":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-777f.73b3652a8":{"attributeName":"tDatePickerx0x10","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-2b6d.038f4b93d":{"attributeName":"tDatePickerx0x11","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-cad2.abd345996":{"attributeName":"tDatePickerx0x12","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-b0ad.6d9f3046":{"attributeName":"tTextCommonx0x13","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   myChart: {},
   downstreamStandardSeriesData: [],
   upstreamStandardSeriesData: [],
   upstreamseriesData: [],
   downstreamseriesData: [],
   downstreamPointCode: "",
   upstreamPointCode: "",
   downstreamSelectOptions: "",
   upstreamSelectOptions: "",
   dialogType: "",
   noDataImg: "",
   isBz: false,
   seriesData: [],
   standardSeriesData: [],
   yAxisUnit: "",
   lineChartOption: {},
   normalLineCommonSeriesOption: {"type":"line","symbolSize":1,"labelLine":{"smooth":true},"smooth":true},
   params: {"time":{"start":"","end":"","range":[]},"section":[],"monitor":"","interfaceId":"f5a13b25067b52a45d626d1f0284372d","pointcode":"3507001047","monitorType":"1"},
   options: {"monitor":[],"section":[]},
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
tChartDesignx0x0: {
defaultStyle: {
            default: {"height":"530px","width":"824px","position":"unset","left":"16px","top":"65px"},
            
            },
 default: { 
 
emptyImg:"",
cStyle:{"wrapper":{"default":{"height":"530px","width":"824px","position":"unset","left":"16px","top":"65px"}},"emptyText":{"default":{"fontSize":"14px","color":"var(--business-show-bg60)"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
tSelectx0x1: {
defaultStyle: {
            default: {"width":"118px","height":"32px","position":"unset","left":"705px","top":"9px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},
            
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
cStyle:{"wrapper":{"default":{"width":"118px","height":"32px","position":"unset","left":"705px","top":"9px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"14px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(255, 255, 255, 1)","--el-select-border-color-hover":"var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"49px","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"726px","top":"65px","fontSize":"var(--t-text-size-normal)","lineHeight":"22px","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
label:"标准值",
editable:false,
cStyle:{"wrapper":{"default":{"width":"49px","height":"22px","color":"var(--business-text-avianize)","position":"unset","left":"726px","top":"65px","fontSize":"var(--t-text-size-normal)","lineHeight":"22px","animationName":"","textAlign":"right"}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"641px","top":"18px","fontSize":"var(--t-text-size-normal)","lineHeight":"14px","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
label:"监测指标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"641px","top":"18px","fontSize":"var(--t-text-size-normal)","lineHeight":"14px","animationName":"","textAlign":"right"}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"67px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"127px","top":"69px","fontSize":"var(--t-text-size-normal)","lineHeight":"14px","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
label:"上游断面",
editable:false,
cStyle:{"wrapper":{"default":{"width":"67px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"127px","top":"69px","fontSize":"var(--t-text-size-normal)","lineHeight":"14px","animationName":"","textAlign":"right"}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"16px","top":"18px","fontSize":"var(--t-text-size-normal)","lineHeight":"14px","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
label:"监测时间",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"16px","top":"18px","fontSize":"var(--t-text-size-normal)","lineHeight":"14px","animationName":"","textAlign":"right"}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"71px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"420px","top":"69px","fontSize":"var(--t-text-size-normal)","lineHeight":"14px","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
label:"下游断面",
editable:false,
cStyle:{"wrapper":{"default":{"width":"71px","height":"14px","color":"var(--business-text-avianize)","position":"unset","left":"420px","top":"69px","fontSize":"var(--t-text-size-normal)","lineHeight":"14px","animationName":"","textAlign":"right"}}}, 
 },
},
tSelectx0x7: {
defaultStyle: {
            default: {"width":"200px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--t-white)","fontSize":"14","animationName":"","pointerEvents":"auto","paddingLeft":"12px","paddingRight":"30px","position":"unset","left":"202px","top":"60px"},
            
            },
 default: { 
 
activeValue:"",
options:"",
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:true,
placeholder:"请选择",
clearable:false,
disabled:false,
collapseTags:true,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"200px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--t-white)","fontSize":"14","animationName":"","pointerEvents":"auto","paddingLeft":"12px","paddingRight":"30px","position":"unset","left":"202px","top":"60px"},"focus":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","fontSize":"14px","backgroundColor":""}},"tag":{"default":{"backgroundColor":"var(--business-btn-default)","color":"#fff","height":"22px","lineHeight":"20px","width":"auto"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","width":"300px","left":"0 !important","right":"0 !important","top":"42px !important","height":""}},"arrow":{"default":{"backgroundImage":"var(--select-arrow-up-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"6px 4px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","fontSize":"14px","color":"var(--business-unit-icon)"}},"dropdownArrow":{"default":{"backgroundColor":"rgba(69, 87, 163, 0)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}},"dropdownItem":{"default":{"fontSize":"14px","color":"var(--t-white)","width":"300px"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)","fontSize":"18","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"dropdownItemText":{"default":{"whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}},
multipleLimit:4,
data:[], 
 },
},
tSelectx0x8: {
defaultStyle: {
            default: {"width":"200px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--t-white)","fontSize":"14","animationName":"","pointerEvents":"auto","paddingLeft":"12px","paddingRight":"30px","position":"unset","left":"504px","top":"60px"},
            
            },
 default: { 
 
activeValue:"",
options:"",
alias:{"label":"label","value":"value","disabled":"disabled"},
multiple:true,
placeholder:"请选择",
clearable:false,
disabled:false,
collapseTags:true,
name:"",
autocomplete:"off",
filterable:false,
'no-match-text':"无匹配数据",
'no-data-text':"无数据",
cStyle:{"wrapper":{"default":{"width":"200px","height":"32px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--t-white)","fontSize":"14","animationName":"","pointerEvents":"auto","paddingLeft":"12px","paddingRight":"30px","position":"unset","left":"504px","top":"60px"},"focus":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"placeholder":{"default":{"color":"var(--business-text-avianize)","fontSize":"14px","backgroundColor":""}},"tag":{"default":{"backgroundColor":"var(--business-btn-default)","color":"#fff","height":"22px","lineHeight":"20px"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","width":"300px","left":"0 !important","right":"0 !important","top":"42px !important","height":"","max-height":"150px","overflow":"hidden"}},"arrow":{"default":{"backgroundImage":"var(--select-arrow-up-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"6px 4px","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","fontSize":"14px","color":"var(--business-unit-icon)"}},"dropdownArrow":{"default":{"backgroundColor":"rgba(69, 87, 163, 0)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}},"dropdownItem":{"default":{"fontSize":"14px","color":"var(--t-white)","width":"300px","textOverflow":"ellipsis","overflow":"hidden"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)","fontSize":"18","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},"active":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"dropdownItemText":{"default":{"whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}},
multipleLimit:4,
data:[], 
 },
},
tSwitchx0x9: {
defaultStyle: {
            default: {"width":"32px","height":"22px","position":"unset","left":"791px","top":"65px","animationName":""},
            
            },
 default: { 
 
value:false,
cStyle:{"wrapper":{"default":{"width":"32px","height":"22px","position":"unset","left":"791px","top":"65px","animationName":""}},"core":{"active":{"backgroundColor":"var(--business-theme)","borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}}}, 
 },
},
tDatePickerx0x10: {
defaultStyle: {
            default: {"width":"290px","height":"32px","position":"unset","left":"80px","top":"9px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"monthrange",
clearable:false,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"290px","height":"32px","position":"unset","left":"80px","top":"9px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tDatePickerx0x11: {
defaultStyle: {
            default: {"width":"290px","height":"32px","position":"unset","left":"80px","top":"9px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimerangehour",
clearable:false,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"290px","height":"32px","position":"unset","left":"80px","top":"9px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tDatePickerx0x12: {
defaultStyle: {
            default: {"width":"290px","height":"32px","position":"unset","left":"80px","top":"9px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"daterange",
clearable:false,
rangeSeparator:"-",
'default-date':[],
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"290px","height":"32px","position":"unset","left":"80px","top":"9px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tTextCommonx0x13: {
defaultStyle: {
            default: {"width":"113px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"15px","top":"66px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"监测值（mg/L）",
editable:false,
cStyle:{"wrapper":{"default":{"width":"113px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"15px","top":"66px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
});
const handleTimeSelect = (times) => {
if (times.length) {
  state.params.time.start = times[0] || '';
  state.params.time.end = times[1] || '';
  state.params.time.range = times;
} else {
  state.params.time.range = [];
  state.params.time.start = '';
  state.params.time.end = '';
}

// apiRegistry.getLineData.request();
const apiRequests = [
  apiRegistry.getLineData.request(0, state.params.pointcode),
  apiRegistry.getLineData.request(1, state.upstreamPointCode.join(',')),
  apiRegistry.getLineData.request(2, state.downstreamPointCode.join(',')),
];

Promise.all(apiRequests)
  .then(() => {
    changeStandard(state.isBz)

  })
  .catch(error => {
    console.error('某个请求失败了:', error);
  });

};
const handleMonitorSelect = (item) => {
state.params.monitor = item.value;
state.yAxisUnit = item.unit || '';

// apiRegistry.getLineData.request();
const apiRequests = [
  apiRegistry.getLineData.request(0, state.params.pointcode),
  apiRegistry.getLineData.request(1, state.upstreamPointCode.join(',')),
  apiRegistry.getLineData.request(2, state.downstreamPointCode.join(',')),
];

Promise.all(apiRequests)
  .then(() => {
    changeStandard(state.isBz)

  })
  .catch(error => {
    console.error('某个请求失败了:', error);
  });

};
const handleChartAxisLabel = () => {
// const obj = checkTimeRange(state.dialogType, state.params.time.range, state.lineChartOption?.xAxis?.data?.length)

// // 处理x轴显示标签间隔、及重复值
// if (obj.flag) {
//   state.lineChartOption.xAxis.axisLabel.interval = 0;
//   state.lineChartOption.xAxis.axisLabel.formatter = (value, index) => {
//     let dayValue;
//     switch (state.dialogType) {
//       case '1':
//         // 自动天
//         dayValue = dateFormat(value.replace('日', ''), 'yyyy-MM');
//         break;
//       case '2':
//         // 自动小时
//         dayValue = dateFormat(`${value.replace('时', '')}:00`, 'MM-dd');
//         break;
//       case '3':
//         // 手工
//         dayValue = dateFormat(value, 'yyyy');
//         break;
//       default:
//         dayValue = value;
//         break;
//     }
//     return index % obj.num === 0 ? dayValue : '';
//   };
//   state.lineChartOption.xAxis.axisTick.interval = (index) => {
//     return index % obj.num === 0;
//   };
// } else {
//   state.lineChartOption.xAxis.axisLabel.interval = 'auto';
//   state.lineChartOption.xAxis.axisLabel.formatter = (value) => value;
//   state.lineChartOption.xAxis.axisTick.interval = 'auto';
// }
};
const changeStandard = (isShow) => {
if (state.lineChartOption.series.length) {
  state.lineChartOption.series.forEach((item, index) => {
    console.log(item.name);
    state.lineChartOption.series[index].data = [];
  })
}
const series = [
// state.lineChartOption.series = [
  ...[
    {
      name: '上游断面背景',
      type: 'line',
      data: [],
      xAxisIndex: 0,
      yAxisIndex: 0,
      silent: true,
      showSymbol: false,
      lineStyle: {
        width: 0
      },
      areaStyle: {
        color: 'rgba(84, 112, 198, 0.1)'
      },
      markArea: {
        silent: true,
        data: [[{
          xAxis: 'min',
          yAxis: 'max'
        }, {
          xAxis: 'max',
          yAxis: 'min'
        }]],
        itemStyle: {
          color: 'rgba(84, 112, 198, 0.1)'
        }
      }
    },
    ...state.upstreamseriesData.map((d) => ({
      name: d.name,
      type: 'line',
      data: d.data,
      xAxisIndex: 0,
      yAxisIndex: 0,
      symbol: 'circle',
      smooth: true,
      lineStyle: {
        width: 2,
        // color: '#5470c6'
      },
      itemStyle: {
        // color: '#5470c6',
        borderwidth: 2,
        borderColor: '#fff'
      },
      emphasis: {
        scale: true
      }
    })),
    {
      name: '当前断面背景',
      type: 'line',
      data: [],
      xAxisIndex: 1,
      yAxisIndex: 1,
      silent: true,
      showSymbol: false,
      lineStyle: {
        width: 0
      },
      areaStyle: {
        color: 'rgba(145, 204, 117, 0.1)'
      },
      markArea: {
        silent: true,
        data: [[{
          xAxis: 'min',
          yAxis: 'max'
        }, {
          xAxis: 'max',
          yAxis: 'min'
        }]],
        itemStyle: {
          color: 'rgba(145, 204, 117, 0.1)'
        }
      }
    },
    ...state.seriesData.map((d) => ({
      name: d.name,
      type: 'line',
      data: d.data,
      xAxisIndex: 1,
      yAxisIndex: 1,
      symbol: 'none',
      smooth: true,
      lineStyle: {
        width: 2,
        // color: '#91cc75'
      },
      itemStyle: {
        // color: '#91cc75',
        borderwidth: 2,
        borderColor: '#fff'
      },
      emphasis: {
        scale: true
      }
    })),
    {
      name: '下游断面背景',
      type: 'line',
      data: [],
      xAxisIndex: 2,
      yAxisIndex: 2,
      silent: true,
      showSymbol: false,
      lineStyle: {
        width: 0
      },
      areaStyle: {
        color: 'rgba(250, 200, 88, 0.1)',
      },
      markArea: {
        silent: true,
        data: [[{
          xAxis: 'min',
          yAxis: 'max'
        }, {
          xAxis: 'max',
          yAxis: 'min'
        }]],
        itemStyle: {
          color: 'rgba(250, 200, 88, 0.1)'
        }
      }
    },
    ...state.downstreamseriesData.map((d) => ({
      name: d.name,
      type: 'line',
      data: d.data,
      xAxisIndex: 2,
      yAxisIndex: 2,
      symbol: 'none',
      smooth: true,
      lineStyle: {
        width: 2,
        // color: '#fac858'
      },
      itemStyle: {
        // color: '#fac858',
        borderwidth: 2,
        borderColor: '#fff'
      },
      emphasis: {
        scale: true
      }
    })),
  ],
  ...(isShow ? state.standardSeriesData : []),
  ...(isShow ? state.upstreamStandardSeriesData : []),
  ...(isShow ? state.downstreamStandardSeriesData : []),
];

state.lineChartOption.series = series;

console.log(state.lineChartOption.series)

state.myChart.clear();
state.myChart.setOption(state.lineChartOption, true);
};
const initPage = () => {
// 处理参数
state.params.pointcode = global.businessDialog.dialogParmas.pointCode;
if (global.businessDialog.dialogParmas?.dialogType === 'autoDay') {
  state.params.interfaceId = "f5a13b25067b52a45d626d1f0284372d";
  state.dialogType = '1'
  state.params.monitorType = '0'
} else if (global.businessDialog.dialogParmas?.dialogType === 'autoHour') {
  state.params.interfaceId = "8b3f2e8c7397518f4de2c5c51fb23565";
  state.dialogType = '2'
  state.params.monitorType = '0'
} else {
  state.params.interfaceId = "59cd810cc7c080845a33b43d62de460d";
  state.dialogType = '3'
  state.params.monitorType = '1'
}

// echarts图配置
setOptions();

// 设置暂无数据图片
setNoData();

// 获取时间下拉值（用结束时间向前推指定格式的时间）
getTimeValue(global.businessDialog.dialogParmas.monitorTime, state.dialogType);

// 获取下拉选项后请求数据
const getData = async () => {
  await apiRegistry.getSectionData.request();
  await apiRegistry.getMonitorData.request();
  await apiRegistry.getLineData.request(0, state.params.pointcode);
  await apiRegistry.getLineData.request(1, state.upstreamPointCode.join(','));
  await apiRegistry.getLineData.request(2, state.downstreamPointCode.join(','));
  changeStandard(state.isBz)
}

// 获取数据
getData();
};
const setNoData = () => {
// 设置暂无数据图标
state.noDataImg = getCssVariable('--business-no-data-img');
};
const setOptions = () => {
const dataZoom = [
  {
    "type": "slider",
    // "backgroundColor": getCssVariable('--business-show-bg30'),
    // "borderColor": getCssVariable('--business-show-bg30'),
    // "borderRadius": 0,
    // "showDetail": false,
    // "showDataShadow": false,
    // "zoomLock": true,
    "height": 10,
    // "brushSelect": true,
    // "bottom": "0%",
    // "brushStyle": {
    //   "color": "#000"
    // },
    // "fillerColor": getCssVariable('--business-btn-default'),
    // // "handleIcon": "none",
    // "handleStyle": {
    //   "color": "#2D955A",
    //   "borderColor": "#D1D5D9",
    //   "borderCap": "round"
    // },

    xAxisIndex: [0, 1, 2], // 控制所有三个x轴
    // realtime: true,      // 拖动时实时更新图表
    // start: 0,            // 数据窗口范围的起始百分比
    // end: 50,            // 数据窗口范围的结束百分比
  },
  {
    type: 'inside',      // 内置缩放，支持鼠标滚轮缩放
    xAxisIndex: [0, 1, 2], // 控制所有三个x轴
    // realtime: true,      // 拖动时实时更新图表
    // start: 0,            // 数据窗口范围的起始百分比
    // end: 50             // 数据窗口范围的结束百分比
  }
];

// 变化趋势图表配置
state.lineChartOption = {
  "color": [
    "#2CE451",
    "#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272",
    "#fc8452", "#9a60b4", "#ea7ccc", "#2CCAFF", "#D56900", "#465FFF"
  ],
  "tooltip": {
    "trigger": "axis",
    "backgroundColor": "rgba(0, 0, 0, 0.8)",
    "borderColor": "rgba(255, 255, 255, 0.5)",
    "textStyle": {
      "color": "rgba(255, 255, 255, 1)"
    },
    "formatter": (value) => handleTooltipFormatter(value)
  },
  dataZoom,

  grid: [
    {
      "left": "4%",
      "right": "2%",
      top: '16%',
      bottom: '63%',
      containLabel: true,
      backgroundColor: 'rgba(84, 112, 198, 0.1)'  // 上游断面区域背景色
    },
    {
      "left": "4%",
      "right": "2%",
      top: '41%',
      bottom: '39%',
      containLabel: true,
      backgroundColor: 'rgba(145, 204, 117, 0.1)'  // 当前断面区域背景色
    },
    {
      "left": "4%",
      "right": "2%",
      top: '65%',
      bottom: 30,
      containLabel: true,
      backgroundColor: 'rgba(250, 200, 88, 0.1)'  // 下游断面区域背景色
    }
  ],

  "xAxis": {
    "axisLabel": {
      "color": "rgba(255, 255, 255, 0.8)",
      "fontSize": 13
    },
    "axisLine": {
      "lineStyle": {
        "type": "solid",
        "color": "rgba(255, 255, 255, 0.4)"
      }
    },
    "axisLine": {
      "lineStyle": {
        "type": "solid",
        "color": "rgba(255, 255, 255, 0.4)"
      }
    },
    "axisTick": {
      "show": true,
      "lineStyle": {
        "color": "rgba(255, 255, 255, 0.4)"
      }
    },
    "nameTextStyle": {
      "color": "rgba(255, 255, 255, 0.7)",
      "fontSize": 13
    },
    "data": []
  },

  "legend": {
    top: 40,
    "show": true,
    "type": "scroll",
    "width": "50%",
    "pageButtonItemGap": 5, // 翻页按钮间距
    "pageButtonGap": 10, // 翻页按钮与图例的间距
    "pageButtonPosition": "end", // 翻页按钮位置
    "pageIconColor": "rgba(255, 255, 255, 0.8)", // 翻页按钮颜色
    "pageIconInactiveColor": "rgba(255, 255, 255, 0.3)", // 翻页按钮禁用颜色
    "pageIconSize": 12, // 翻页按钮大小
    "pageTextStyle": {
      "color": "rgba(255, 255, 255, 0.8)"
    },
    "icon": "rect",
    "itemWidth": 12,
    "itemHeight": 4,
    "textStyle": {
      "color": "rgba(255, 255, 255, 0.8)",
      "fontSize": 14,
      "height": 10,
      "rich": {
        "a": {
          "verticalAlign": "center"
        }
      }
    },
    "data": []
  },
  "yAxis": [
    {
      type: 'value',
      name: '上游断面',
      nameLocation: 'middle',
      nameGap: 40,
      gridIndex: 0,
      axisLine: {
        show: false,  // 隐藏Y轴线
      },
      "axisLabel": {
        "color": "rgba(255, 255, 255, 0.8)",
        "fontSize": 13,
        "formatter": function (value) {
          // 统一格式化，确保标签长度一致
          return value.toFixed(2);
        }
      },
      "nameTextStyle": {
        "color": "rgba(255, 255, 255, 0.8)",
        "align": "center",
        "padding": [0, 0, 0, 0],
        "fontSize": 13
      },
      "splitLine": {
        show: false  // 隐藏网格线
      }
    },
    {
      type: 'value',
      name: '本断面',
      nameLocation: 'middle',
      nameGap: 40,
      gridIndex: 1,
      axisLine: {
        show: false,  // 隐藏Y轴线
      },
      "axisLabel": {
        "color": "rgba(255, 255, 255, 0.8)",
        "fontSize": 13,
        "formatter": function (value) {
          // 统一格式化，确保标签长度一致
          return value.toFixed(2);
        }
      },
      "nameTextStyle": {
        "color": "rgba(255, 255, 255, 0.8)",
        "align": "center",
        "padding": [0, 0, 0, 0],
        "fontSize": 13
      },
      "splitLine": {
        show: false  // 隐藏网格线
      }
    },
    {
      type: 'value',
      name: '下游断面',
      nameLocation: 'middle',
      nameGap: 40,
      gridIndex: 2,
      axisLine: {
        show: false,  // 隐藏Y轴线
      },
      "axisLabel": {
        "color": "rgba(255, 255, 255, 0.8)",
        "fontSize": 13,
        "formatter": function (value) {
          // 统一格式化，确保标签长度一致
          return value.toFixed(2);
        }
      },
      "nameTextStyle": {
        "color": "rgba(255, 255, 255, 0.8)",
        "align": "right",
        "align": "center",
        "padding": [0, 0, 0, 0],
        "fontSize": 13
      },
      "splitLine": {
        show: false  // 隐藏网格线
      }
    }
  ],
  "series": []
};
};
const handleSectionSelect = (data) => {
// state.params.section = data ? data.split(',') : [];
// state.params.pointcode = data || "";

if (!state.upstreamPointCode.length) {
  state.upstreamPointCode = [state.upstreamSelectOptions[0].value];
}
if (!state.downstreamPointCode.length) {
  state.downstreamPointCode = [state.downstreamSelectOptions[0].value];
}

const apiRequests = [
  apiRegistry.getLineData.request(0, state.params.pointcode),
  apiRegistry.getLineData.request(1, state.upstreamPointCode.join(',')),
  apiRegistry.getLineData.request(2, state.downstreamPointCode.join(',')),
];

Promise.all(apiRequests)
  .then(() => {
    changeStandard(state.isBz)

  })
  .catch(error => {
    console.error('某个请求失败了:', error);
  });


};
const getTimeValue = (date,type) => {
if (type === '2') {
  // 小时数据格式不全，格式化错误，需要补上分秒
  date = `${date}:00:00`
}

// 时间格式
const typeObj = [
  {
    timeType: 'day',
    formatType: 'yyyy-MM-dd'
  },
  {
    timeType: 'hour',
    formatType: 'yyyy-MM-dd HH'
  },
  {
    timeType: 'month',
    formatType: 'yyyy-MM'
  }
]

// 结束时间
const endTime = dateFormat(date, typeObj[Number(type) - 1].formatType);
// 开始时间
const startTime = dateFormat(getPrevTime(date, typeObj[Number(type) - 1].timeType), typeObj[Number(type) - 1].formatType);

// 赋值参数
state.params.time.range = [startTime || '', endTime || ''];
state.params.time.start = startTime || '';
state.params.time.end = endTime || '';

};
const handleCharFormat = (optionString) => {
/**
  * @description: 替换一段字符串中所有污染物为正确格式
  * @param optionString 要替换的字符串
  * @return 替换完的字符串
  */
if (!optionString) return '';
// 从公共方法里拿到下标特殊字符（后续需要的再补充）
const zreoSub = convertCharacter('下标')[0].split(' ')[0] || '0';
const oneSub = convertCharacter('下标')[0].split(' ')[1] || '1';
const twoSub = convertCharacter('下标')[0].split(' ')[2] || '2';
const threeSub = convertCharacter('下标')[0].split(' ')[3] || '3';
const fiveSub = convertCharacter('下标')[0].split(' ')[5] || '5';
// 污染物对应关系（缺少的继续补充）
const POLLUTION_CHARTS_ALL = [
  {
    name: ['O3', 'o3'],
    html: 'O' + threeSub,
  },
  {
    name: ['PM10', 'pm10'],
    html: 'PM' + oneSub + zreoSub,
  },
  {
    name: ['PM25', 'PM2_5', 'PM2.5', 'pm25', 'pm2_5', 'pm25'],
    html: 'PM' + twoSub + '.' + fiveSub,
  },
  {
    name: ['SO2', 'so2'],
    html: 'SO' + twoSub,
  },
  {
    name: ['CO2', 'co2'],
    html: 'CO' + twoSub,
  },
  {
    name: ['CODMN', 'codmn'],
    html: 'CODmn',
  },
  {
    name: ['VOCS', 'vocs'],
    html: 'VOCs',
  },
  {
    name: ['NO', 'no'],
    html: 'NO',
  },
  {
    name: ['NO2', 'no2'],
    html: 'NO' + twoSub,
  },
  {
    name: ['NH3', 'nh3'],
    html: 'NH' + threeSub,
  },
  {
    name: ['NOX', 'nox'],
    html: 'NOx',
  },
  {
    name: ['PH', 'ph'],
    html: 'pH',
  },
];
let curString = optionString;
POLLUTION_CHARTS_ALL.forEach((item) => {
  item.name.forEach((name) => {
    curString = curString.replace(name, item.html);
  });
});
return curString;
};
const checkTimeRange = (dateType,timeRange,dataLength) => {
const parseDate = (dateStr) => {
  const date = new Date(dateStr);
  if (isNaN(date)) {
    throw new Error(`Invalid date format: ${dateStr}`);
  }
  return date;
}

const diffInHours = (d1, d2) => {
  return Math.abs((d2 - d1) / (1000 * 60 * 60));
}

const diffInDays = (d1, d2) => {
  return Math.abs((d2 - d1) / (1000 * 60 * 60 * 24));
}

const diffInMonths = (d1, d2) => {
  const y1 = d1.getFullYear();
  const m1 = d1.getMonth();
  const y2 = d2.getFullYear();
  const m2 = d2.getMonth();
  return Math.abs((y2 * 12 + m2) - (y1 * 12 + m1));
}

const [startDateStr, endDateStr] = timeRange;
let startDate, endDate;

switch (dateType) {
  case '1':
    // 自动天，时间差大于两周，数据大于14条
    startDate = parseDate(startDateStr);
    endDate = parseDate(endDateStr);
    return {
      flag: diffInDays(startDate, endDate) > 14 && dataLength > 14,
      num: 7
    };
  case '2':
    // 自动小时，时间差大于两天，数据大于48条
    startDate = parseDate(`${startDateStr}:00:00`);
    endDate = parseDate(`${endDateStr}:00:00`);
    return {
      flag: diffInHours(startDate, endDate) > 48 && dataLength > 48,
      num: 24
    };
  case '3':
    // 手工，时间差大于两年，数据大于24条
    startDate = parseDate(startDateStr);
    endDate = new Date(endDateStr.slice(0, 4), endDateStr.slice(5, 7) - 1 + (endDateStr.slice(7) ? 1 : 0), 0);
    endDate.setDate(endDate.getDate() - endDate.getDate() % endDate.getDate());
    return {
      flag: diffInMonths(startDate, endDate) > 23 && dataLength > 24,
      num: 12
    };
  default:
    return {
      flag: false,
      num: 0
    };
}
};
const handleChartMouseMove = () => {

const myChart = state.myChart;
const option = state.lineChartOption;
console.log(myChart)

// 时间数据（12个小时，转换为数值便于计算）
const times = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00',
  '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
// 时间对应的小时数值，用于计算间隔
const timeValues = times.map(t => parseInt(t.split(':')[0]));

// 时间间隔设置（小时）
const upstreamToCurrentInterval = 4;  // 上游到当前断面的时间间隔
const currentToDownstreamInterval = 8; // 当前到下游断面的时间间隔

// 处理鼠标悬停事件，显示双向时间间隔竖线
myChart.on('mouseover', function (params) {
  // 清除之前的标记线
  option.series.forEach((series) => {
    series.markLine = { data: [] };
  });

  // 获取当前悬停的时间点和系列
  const currentIndex = params.dataIndex;
  const currentHour = timeValues[currentIndex];
  const seriesName = params.seriesName;

  // 根据不同系列计算并显示双向时间关联竖线
  if (seriesName === '上游断面') {
    // 上游断面：显示自身位置的竖线
    addVerticalLine(0, currentIndex, '#5470c6');

    // 正向推算：上游→当前(+4h)
    const currentTargetHour = (currentHour + upstreamToCurrentInterval) % 24;
    const currentTargetIndex = getTimeIndex(currentTargetHour);
    if (currentTargetIndex !== -1) {
      addVerticalLine(1, currentTargetIndex, '#91cc75', '正向');

      // 正向推算：当前→下游(+8h)
      const downstreamTargetHour = (currentTargetHour + currentToDownstreamInterval) % 24;
      const downstreamTargetIndex = getTimeIndex(downstreamTargetHour);
      if (downstreamTargetIndex !== -1) {
        addVerticalLine(2, downstreamTargetIndex, '#fac858', '正向');
      }
    }
  } else if (seriesName === '当前断面') {
    // 当前断面：显示自身位置的竖线
    addVerticalLine(1, currentIndex, '#91cc75');

    // 正向推算：当前→下游(+8h)
    const downstreamTargetHour = (currentHour + currentToDownstreamInterval) % 24;
    const downstreamTargetIndex = getTimeIndex(downstreamTargetHour);
    if (downstreamTargetIndex !== -1) {
      addVerticalLine(2, downstreamTargetIndex, '#fac858', '正向');
    }

    // 反向推算：当前→上游(-4h)
    const upstreamTargetHour = (currentHour - upstreamToCurrentInterval + 24) % 24;
    const upstreamTargetIndex = getTimeIndex(upstreamTargetHour);
    if (upstreamTargetIndex !== -1) {
      addVerticalLine(0, upstreamTargetIndex, '#5470c6', '反向');
    }
  } else if (seriesName === '下游断面') {
    // 下游断面：显示自身位置的竖线
    addVerticalLine(2, currentIndex, '#fac858');

    // 反向推算：下游→当前(-8h)
    const currentTargetHour = (currentHour - currentToDownstreamInterval + 24) % 24;
    const currentTargetIndex = getTimeIndex(currentTargetHour);
    if (currentTargetIndex !== -1) {
      addVerticalLine(1, currentTargetIndex, '#91cc75', '反向');

      // 反向推算：当前→上游(-4h)
      const upstreamTargetHour = (currentTargetHour - upstreamToCurrentInterval + 24) % 24;
      const upstreamTargetIndex = getTimeIndex(upstreamTargetHour);
      if (upstreamTargetIndex !== -1) {
        addVerticalLine(0, upstreamTargetIndex, '#5470c6', '反向');
      }
    }
  }

  // 重新设置配置以更新标记线
  myChart.setOption(option);
});

// 鼠标离开时清除所有标记线
myChart.on('mouseout', function () {
  option.series.forEach((series) => {
    series.markLine = { data: [] };
  });
  myChart.setOption(option);
});

// 添加垂直标记线的函数（支持正向/反向标识）
function addVerticalLine(seriesIndex, dataIndex, color, direction) {
  if (!option.series[seriesIndex].markLine) {
    option.series[seriesIndex].markLine = { data: [] };
  }

  let labelText = times[dataIndex];
  if (direction) {
    labelText += `(${direction})`;
  }

  option.series[seriesIndex].markLine.data.push({
    name: '时间标记',
    xAxis: dataIndex,
    lineStyle: {
      color: color,
      type: direction === '反向' ? 'dotted' : 'dashed', // 反向用点线，正向用虚线区分
      width: 2
    },
    label: {
      show: true,
      formatter: labelText,
      color: color
    }
  });
}
};
const ongetChartInstance1763191439325 = (chart) => {
// 设置变量值
state.myChart = _.cloneDeep(chart);
// 执行自定义方法
handleChartMouseMove();
};
const onchange1734159936716 = (value,selectValueArr,selectValueItem) => {
// 执行自定义方法
handleMonitorSelect(selectValueItem);
};
const onchange1740100114069 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.upstreamPointCode = selectValueArr;
// 执行自定义方法
handleSectionSelect(value);
};
const onchange1762939705327_1_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.downstreamPointCode = selectValueArr;
// 执行自定义方法
handleSectionSelect(value);
};
const onchange1734160214280 = (value) => {
// 设置变量值
state.isBz = value;
// 执行自定义方法
changeStandard(value);
};
const ondateChange1735539103868_0_0 = (data) => {
// 执行自定义方法
handleTimeSelect(data);
};
const ondateChange1735539087143_0_0 = (data) => {
// 执行自定义方法
handleTimeSelect(data);
};
const ondateChange1734160159774 = (data) => {
// 执行自定义方法
handleTimeSelect(data);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getLineData: {
              funcParamsOptions: '[{"hasVariable":true,"isVariable":false,"dataType":"number","dataValue":0,"defaultValue":"0","description":"1-上游，2-下游","dataKey":"type","keySelected":false,"isWatch":false,"variableOptions":[],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"wisAfvset5"},{"hasVariable":true,"isVariable":true,"dataType":"string","dataValue":"state.params.pointcode","defaultValue":"3507001047","description":"断面编码","dataKey":"pointCode","keySelected":false,"isWatch":false,"variableOptions":["state","params","pointcode"],"parents":null,"arrayJsonStr":"[]","state":"未使用","id":"zqYuf6FI9y","children":[]}]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POLLUTE_CODE":"state.params.monitor","END_MONITORTIME":"state.params.time.end","START_MONITORTIME":"state.params.time.start","POINT_CODE":"this.pointCode","interfaceId":"state.params.interfaceId"}},
              request: function (type,pointCode, componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POLLUTE_CODE":state.params.monitor,"END_MONITORTIME":state.params.time.end,"START_MONITORTIME":state.params.time.start,"POINT_CODE":pointCode,"interfaceId":state.params.interfaceId},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POLLUTE_CODE":state.params.monitor,"END_MONITORTIME":state.params.time.end,"START_MONITORTIME":state.params.time.start,"POINT_CODE":pointCode,"interfaceId":state.params.interfaceId});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLineData'] = res.data;
                
     
const chartDataKeyMap = {
  1: {
    series: 'upstreamseriesData',
    standard: 'upstreamStandardSeriesData',
  },
  2: {
    series: 'downstreamseriesData',
    standard: 'downstreamStandardSeriesData',
  },
  0: {
    series: 'seriesData',
    standard: 'standardSeriesData',
  },
}
// state.seriesData = [];
// state.upstreamseriesData = [];
// state.downstreamseriesData = [];
state[chartDataKeyMap[type].series] = [];
state[chartDataKeyMap[type].standard] = [];
state.lineChartOption.yAxis.name = '监测值';
state.lineChartOption.xAxis.data = [];
handleChartAxisLabel();
state.lineChartOption.legend.data = [];

if (res.status === 200 && res?.data?.data?.length) {
  const { data } = res.data;
  // x轴数据
  const xAxisData = [];
  // 图例数据
  const legendData = [];
  // 一到五类标准值
  const standardLineMap = {
    STANDARD_1: [],
    STANDARD_2: [],
    STANDARD_3: [],
    STANDARD_4: [],
    STANDARD_5: [],
  }
  // 系列数据（系列数据动态处理主要是以防后期断面下拉变多又再处理一次，现在是固定的两个）；
  let seriesData = [];
  data.forEach((item) => {
    Object.keys(standardLineMap).forEach(i => {
      standardLineMap[i].push({
        value: item[i],
        hiddenInTooltip: true,
        wholeTime: item.MONITORTIME,
      })
    })
    xAxisData.push({ label: handleNoVal(item.MONITORTIME) });
    // legendData.push({
    //   name: item.POINT_NAME,
    //   icon: 'roundRect',
    // });

    // 组合数据，筛选出同一类的数据
    if (!seriesData.find((x) => x.POINT_CODE === item.POINT_CODE)) {

      // seriesData = data.filter((x) => x.POINT_CODE === item.POINT_CODE).map((dataItem) => dataItem.POLLUTEVALUE);
      seriesData.push(
        {
          POINT_CODE: item.POINT_CODE,
          name: item.POINT_NAME,
          data: data.filter((x) => x.POINT_CODE === item.POINT_CODE).map((dataItem) => (
            dataItem.POLLUTEVALUE
            //   {
            //   // 使用数组的格式，是为了跟x轴坐标的值对应上；x轴和数组的第一项使用的值需要是唯一的
            //   value: [dataItem.MONITORTIME, dataItem.POLLUTEVALUE],
            //   // 完整时间、单位在tooltip中的formatter中使用
            //   unit: state.yAxisUnit,
            //   tooltipXAxisLabel: dataItem.MONITORTIME,
            // }
          )),
        });
    }
  });
  // 处理系列样式（主要处理颜色）
  // seriesData = seriesData.map((seriesItem) => ({
  //   ...seriesItem,
  //   ...state.normalLineCommonSeriesOption,
  //   itemStyle: {
  //     // color: colors[index],
  //   },
  // }));

  // 污染物
  if (state.params.monitor !== 'W01001') {
    // 添加标准线线数据
    state[chartDataKeyMap[type].standard].push(
      {
        xAxisIndex: type,
        yAxisIndex: type,
        ...handleStandardSeries('Ⅰ类标准值', '#8FCDFF'),
        data: filterRepeatData(standardLineMap.STANDARD_1, 'wholeTime'),
      },
      {
        xAxisIndex: type,
        yAxisIndex: type,
        ...handleStandardSeries('Ⅱ类标准值', '#0280F6'),
        data: filterRepeatData(standardLineMap.STANDARD_2, 'wholeTime'),
      },
      {
        xAxisIndex: type,
        yAxisIndex: type,
        ...handleStandardSeries('Ⅲ类标准值', '#00DA2A'),
        data: filterRepeatData(standardLineMap.STANDARD_3, 'wholeTime'),
      },
      {
        xAxisIndex: type,
        yAxisIndex: type,
        ...handleStandardSeries('Ⅳ类标准值', '#F6C200'),
        data: filterRepeatData(standardLineMap.STANDARD_4, 'wholeTime'),
      },
      {
        xAxisIndex: type,
        yAxisIndex: type,
        ...handleStandardSeries('Ⅴ类标准值', '#FC926A'),
        data: filterRepeatData(standardLineMap.STANDARD_5, 'wholeTime'),
      },
    );
  }

  // ph
  if (state.params.monitor === 'W01001') {
    state[chartDataKeyMap[type].standard].push({
      "name": "小时值",
      xAxisIndex: type,
      yAxisIndex: type,
      "data": [],
      "type": "line",
      "markArea": {
        "data": [
          [
            {
              "name": "",
              "yAxis": Number(data[0].STANDARDVALUEMIN || '6')
            },
            {
              "name": "",
              "yAxis": Number(data[0].STANDARDVALUEMAX || '9')
            }
          ]
        ],
        "silent": true,
        "itemStyle": {
          "color": 'rgba(221, 194, 191, 0.2)'
        }
      }
    });
  }

  const times = filterRepeatData(xAxisData, 'label').map((item) => item.label);


  state.lineChartOption.tooltip = {
    "trigger": "axis",
    "backgroundColor": "rgba(0, 0, 0, 0.8)",
    "borderColor": "rgba(255, 255, 255, 0.5)",
    "textStyle": {
      "color": "rgba(255, 255, 255, 1)"
    },
    formatter: function (params) {
      // 获取当前时间（所有断面共用同一时间）
      const time = params[0].name;

      // 顶部显示共用时间
      let res = `<strong>时间: ${time}</strong><br/><br/>`;

      // 依次显示三个断面的数据
      state.upstreamseriesData.forEach((d) => {
        res += `上游断面-${d.name}: ${d.data[params[0].dataIndex]}<br/>`;
      })

      state.seriesData.forEach((d) => {
        res += `当前断面: ${d.data[params[0].dataIndex]}<br/>`;
      })

      state.downstreamseriesData.forEach((d) => {
        res += `下游断面-${d.name}: ${d.data[params[0].dataIndex]}<br/>`;
      })

      return res;
    }
  };

  state.lineChartOption.xAxis = [
    {
      type: 'category',
      data: times,
      gridIndex: 0, // 上方图表的X轴
      splitLine: { show: false }, // 隐藏网格线
      "axisLabel": {
        "show": false
      },
      "axisLine": { show: false },
      "axisTick": { show: false },
      "nameTextStyle": {
        "color": "rgba(255, 255, 255, 0.7)",
        "fontSize": 13
      },
      boundaryGap: false,
    },
    {
      type: 'category',
      data: times,
      gridIndex: 1, // 上方图表的X轴
      splitLine: { show: false }, // 隐藏网格线
      "axisLabel": {
        "show": false
      },
      "axisLine": { show: false },
      "axisTick": { show: false },
      "nameTextStyle": {
        "color": "rgba(255, 255, 255, 0.7)",
        "fontSize": 13
      },
      boundaryGap: false,
    },
    {
      type: 'category',
      data: times,
      gridIndex: 2, // 底部图表的X轴（唯一显示的X轴）

      splitLine: { show: false }, // 隐藏网格线
      "axisLabel": {
        "color": "rgba(255, 255, 255, 0.8)",
        "fontSize": 13,
        rotate: 30
      },
      "axisLine": { show: false },
      "axisTick": { show: false },
      "nameTextStyle": {
        "color": "rgba(255, 255, 255, 0.7)",
        "fontSize": 13
      },
      boundaryGap: false,

    }
  ]

  if (type === 1) {
    state.upstreamseriesData = seriesData;
  } else if (type === 2) {
    state.downstreamseriesData = seriesData;
  } else {
    state.seriesData = seriesData;
  }

  state.seriesData.forEach((item) => {
    legendData.push({
      name: item.name,
      icon: 'rect',
    });
  });
  state.upstreamseriesData.forEach((item) => {
    legendData.push({
      name: item.name,
      icon: 'rect',
    });
  });
  state.downstreamseriesData.forEach((item) => {
    legendData.push({
      name: item.name,
      icon: 'rect',
    });
  });
  // state.lineChartOption.yAxis.name = `监测值${state.yAxisUnit || ''}`;
  // state.lineChartOption.xAxis.data = filterRepeatData(xAxisData, 'label').map((item) => item.label);
  console.log(state.lineChartOption, '__________________')
  // handleChartAxisLabel();
  state.lineChartOption.legend.data = filterRepeatData(legendData, 'name');
}
// changeStandard(state.isBz)

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.seriesData = [];
state.standardSeriesData = [];
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"interfaceId":"acc8f8c17118848d1f644cef1c725851"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"interfaceId":"acc8f8c17118848d1f644cef1c725851"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"interfaceId":"acc8f8c17118848d1f644cef1c725851"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getMonitorData'] = res.data;
                
     state.options.monitor = [];
state.params.monitor = '';
state.yAxisUnit = '';
const color = {
  "W01009": "#0094FF",
  "W01010": "#2CCAFF",
  "W01001": "#D56900",
  "W01014": "#00E400",
}
if (res.data.head.statusCode === '200' && res.data?.data?.length) {
  state.options.monitor = res.data.data.map(i => ({
    "value": i.PCODE,
    "paramsValue": i.PCODE,
    "label": handleCharFormat(i.PNAME),
    "unit": i.PUNIT,
    "color": color[i.PCODE]
  }));
  state.params.monitor = state.options.monitor[0].value || "";
  state.yAxisUnit = state.options.monitor[0].unit || "";
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.options.monitor = [];
state.params.monitor = '';
state.yAxisUnit = '';

      reject(error);
    });
  });
},
              },
// 接口函数
 getSectionData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"MONITORTYPE":"state.params.monitorType","POINT_CODE":"state.params.pointcode","interfaceId":"65a6cb41700af887195425fcde6469aa"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTYPE":state.params.monitorType,"POINT_CODE":state.params.pointcode,"interfaceId":"65a6cb41700af887195425fcde6469aa"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"MONITORTYPE":state.params.monitorType,"POINT_CODE":state.params.pointcode,"interfaceId":"65a6cb41700af887195425fcde6469aa"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getSectionData'] = res.data;
                
     // state.options.section = [];
state.params.section = [];
if (res.data.head.statusCode === '200' && res.data?.data?.length) {
  state.options.section = res.data.data.map(i => ({
    "value": i.POINT_CODE,
    "label": i.POINT_NAME,
    "disabled": false,
    // 断面类型 上游-1  下游-2
    type: i.ALONG_POINT_LOCATION,
  }));

  // 上游断面下拉选项数据
  state.upstreamSelectOptions = state.options.section.filter((item) => item.type === '1');
  // 下游断面下拉选项数据
  state.downstreamSelectOptions = state.options.section.filter((item) => item.type === '2');

  if (!state.upstreamPointCode) {
    // 上游断面编码
    state.upstreamPointCode = [state.upstreamSelectOptions[0].value];
  }
  if (!state.downstreamPointCode) {
    // 下游断面编码
    state.downstreamPointCode = [state.downstreamSelectOptions[0].value];
  }


  state.params.section.push(state.params.pointcode);

}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      // state.options.section = [];
state.params.section = [];

      reject(error);
    });
  });
},
              },
};
 function handleWindowResize() {
                            setPageScale('t-l-c-waterDialogLivestockMonitor', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-waterDialogLivestockMonitor', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
initPage();
});
// 执行自定义方法
setOptions();
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tChartDesignx0x0ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x0.default, componentState.tChartDesignx0x0?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tSelectx0x1ComputedData = computed(() => _.merge({}, componentState.tSelectx0x1.default, componentState.tSelectx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tSelectx0x7ComputedData = computed(() => _.merge({}, componentState.tSelectx0x7.default, componentState.tSelectx0x7?.[state.screenSize]));

 const tSelectx0x8ComputedData = computed(() => _.merge({}, componentState.tSelectx0x8.default, componentState.tSelectx0x8?.[state.screenSize]));

 const tSwitchx0x9ComputedData = computed(() => _.merge({}, componentState.tSwitchx0x9.default, componentState.tSwitchx0x9?.[state.screenSize]));

 const tDatePickerx0x10ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x10.default, componentState.tDatePickerx0x10?.[state.screenSize]));

 const tDatePickerx0x11ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x11.default, componentState.tDatePickerx0x11?.[state.screenSize]));

 const tDatePickerx0x12ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x12.default, componentState.tDatePickerx0x12?.[state.screenSize]));

 const tTextCommonx0x13ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x13.default, componentState.tTextCommonx0x13?.[state.screenSize]));

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
tChartDesignx0x0ComputedData,
tSelectx0x1ComputedData,
tTextx0x2ComputedData,
tTextx0x3ComputedData,
tTextx0x4ComputedData,
tTextx0x5ComputedData,
tTextx0x6ComputedData,
tSelectx0x7ComputedData,
tSelectx0x8ComputedData,
tSwitchx0x9ComputedData,
tDatePickerx0x10ComputedData,
tDatePickerx0x11ComputedData,
tDatePickerx0x12ComputedData,
tTextCommonx0x13ComputedData,
ongetChartInstance1763191439325,
onchange1734159936716,
onchange1740100114069,
onchange1762939705327_1_0,
onchange1734160214280,
ondateChange1735539103868_0_0,
ondateChange1735539087143_0_0,
ondateChange1734160159774,
};
},
};