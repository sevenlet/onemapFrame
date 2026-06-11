window.airOverviewPopComponent = {
template: 
`<div id="t-l-c-airOverviewPop" class="t-l-c-airOverviewPop" >` +
`<t-rect id="t-rect-2e88.9a8a1ed2b" class="airOverviewPop-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-9ee1.ec8130f44" class="airOverviewPop-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-select id="t-select-b1e1.fd27a03b4" class="airOverviewPop-t-select-0-3"  :active-value="replaceCssVariables(filterData(state.selectType, componentPropBindingMap?.['t-select-b1e1.fd27a03b4']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x3ComputedData.options" :alias="tSelectx0x3ComputedData.alias" :multiple="tSelectx0x3ComputedData.multiple" :placeholder="tSelectx0x3ComputedData.placeholder" :clearable="tSelectx0x3ComputedData.clearable" :disabled="tSelectx0x3ComputedData.disabled" :name="tSelectx0x3ComputedData.name" :autocomplete="tSelectx0x3ComputedData.autocomplete" :filterable="tSelectx0x3ComputedData.filterable" :no-match-text="tSelectx0x3ComputedData.no-match-text" :no-data-text="tSelectx0x3ComputedData.no-data-text" :c-style="tSelectx0x3ComputedData.cStyle" @change="onchange1763689398877_0_0">` +
`</t-select>` +
`<t-text id="t-text-aed5.727093f1e" class="airOverviewPop-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-03db.65ad46ad" class="airOverviewPop-t-text-0-5"  :label="replaceCssVariables(filterData(state.dialogTitle, componentPropBindingMap?.['t-text-03db.65ad46ad']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-46ee.be203adb1" class="airOverviewPop-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle" @click="onclick1742797597302_0_0">` +
`</t-rect>` +
`<t-component v-if="state.isShow === true" id="t-component-5c24.40959d27" class="airOverviewPop-t-component-0-7"  :name="tComponentx0x7ComputedData.name" :loading="tComponentx0x7ComputedData.loading" :c-style="tComponentx0x7ComputedData.cStyle" :src="tComponentx0x7ComputedData.src" :component-name="tComponentx0x7ComputedData.componentName" :page-id="tComponentx0x7ComputedData.pageId" :page-code="tComponentx0x7ComputedData.pageCode">` +
`</t-component>` +
`<t-chart-design id="t-chart-design-35d3.fdedae695" class="airOverviewPop-t-chart-design-0-8"  :register-map-name="tChartDesignx0x8ComputedData.registerMapName" :geo-json="tChartDesignx0x8ComputedData.geoJson" :empty-img="tChartDesignx0x8ComputedData.emptyImg" :c-style="tChartDesignx0x8ComputedData.cStyle" :options="replaceCssVariables(filterData(state.chartOption, componentPropBindingMap?.['t-chart-design-35d3.fdedae695']['options'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-chart-design>` +
`<t-component id="t-component-9a56.d2768158a" class="airOverviewPop-t-component-0-9"  :name="tComponentx0x9ComputedData.name" :loading="tComponentx0x9ComputedData.loading" :c-style="tComponentx0x9ComputedData.cStyle" :src="tComponentx0x9ComputedData.src" :component-name="tComponentx0x9ComputedData.componentName" :page-id="tComponentx0x9ComputedData.pageId" :page-code="tComponentx0x9ComputedData.pageCode">` +
`</t-component>` +
`<t-text-common id="t-text-common-13d9.227b6b3e4" class="airOverviewPop-t-text-common-0-10"  :label="tTextCommonx0x10ComputedData.label" :editable="tTextCommonx0x10ComputedData.editable" :c-style="tTextCommonx0x10ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text id="t-text-7d64.a178cb1f5" class="airOverviewPop-t-text-0-11"  :label="tTextx0x11ComputedData.label" :editable="tTextx0x11ComputedData.editable" :c-style="tTextx0x11ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-a37b.5830b4a9a" class="airOverviewPop-t-text-0-12"  :label="tTextx0x12ComputedData.label" :editable="tTextx0x12ComputedData.editable" :c-style="tTextx0x12ComputedData.cStyle">` +
`</t-text>` +
`<t-date-picker id="t-date-picker-1ad1.a126d44ad" class="airOverviewPop-t-date-picker-0-13"  :placeholder="tDatePickerx0x13ComputedData.placeholder" :start-placeholder="tDatePickerx0x13ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x13ComputedData.endPlaceholder" :type="tDatePickerx0x13ComputedData.type" :clearable="tDatePickerx0x13ComputedData.clearable" :range-separator="tDatePickerx0x13ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.monitorTime, componentPropBindingMap?.['t-date-picker-1ad1.a126d44ad']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x13ComputedData.separator" :c-style="tDatePickerx0x13ComputedData.cStyle" :is-disabled-front="tDatePickerx0x13ComputedData.isDisabledFront" :disabled-date="tDatePickerx0x13ComputedData.disabledDate" @date-change="ondateChange1742991197605">` +
`</t-date-picker>` +
`<t-date-picker id="t-date-picker-0e80.3cb10d2fe" class="airOverviewPop-t-date-picker-0-14"  :placeholder="tDatePickerx0x14ComputedData.placeholder" :start-placeholder="tDatePickerx0x14ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x14ComputedData.endPlaceholder" :type="tDatePickerx0x14ComputedData.type" :clearable="tDatePickerx0x14ComputedData.clearable" :range-separator="tDatePickerx0x14ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.toMonth, componentPropBindingMap?.['t-date-picker-0e80.3cb10d2fe']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x14ComputedData.separator" :c-style="tDatePickerx0x14ComputedData.cStyle" :is-disabled-front="tDatePickerx0x14ComputedData.isDisabledFront" :disabled-date="tDatePickerx0x14ComputedData.disabledDate" @date-change="ondateChange1768635815031_0_0">` +
`</t-date-picker>` +
`<t-component v-if="state.isShow === true" id="t-component-88be.1a74177ac" class="airOverviewPop-t-component-0-15"  :name="tComponentx0x15ComputedData.name" :loading="tComponentx0x15ComputedData.loading" :c-style="tComponentx0x15ComputedData.cStyle" :src="tComponentx0x15ComputedData.src" :component-name="tComponentx0x15ComputedData.componentName" :page-id="tComponentx0x15ComputedData.pageId" :page-code="tComponentx0x15ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-a5a9.5d2a80317" class="airOverviewPop-t-component-0-16"  :name="tComponentx0x16ComputedData.name" :loading="tComponentx0x16ComputedData.loading" :c-style="tComponentx0x16ComputedData.cStyle" :src="tComponentx0x16ComputedData.src" :component-name="tComponentx0x16ComputedData.componentName" :page-id="tComponentx0x16ComputedData.pageId" :page-code="tComponentx0x16ComputedData.pageCode">` +
`</t-component>` +
`<t-text-common id="t-text-common-c20c.e8465135c" class="airOverviewPop-t-text-common-0-17"  :label="replaceCssVariables(filterData(state.tableTitle, componentPropBindingMap?.['t-text-common-c20c.e8465135c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x17ComputedData.editable" :c-style="tTextCommonx0x17ComputedData.cStyle">` +
`</t-text-common>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-2e88.9a8a1ed2b":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-table-9237.04d2d0d11":{"attributeName":"tTablex0x1"},"t-rect-9ee1.ec8130f44":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-select-b1e1.fd27a03b4":{"attributeName":"tSelectx0x3","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-text-aed5.727093f1e":{"attributeName":"tTextx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-03db.65ad46ad":{"attributeName":"tTextx0x5","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-46ee.be203adb1":{"attributeName":"tRectx0x6","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-5c24.40959d27":{"attributeName":"tComponentx0x7","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-chart-design-35d3.fdedae695":{"attributeName":"tChartDesignx0x8","registerMapName":{"filters":[]},"geoJson":{"filters":[]},"emptyImg":{"filters":[]},"cStyle":{"filters":[]},"options":{"filters":[]}},"t-component-9a56.d2768158a":{"attributeName":"tComponentx0x9","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-common-13d9.227b6b3e4":{"attributeName":"tTextCommonx0x10","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-7d64.a178cb1f5":{"attributeName":"tTextx0x11","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-a37b.5830b4a9a":{"attributeName":"tTextx0x12","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-1ad1.a126d44ad":{"attributeName":"tDatePickerx0x13","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-date-picker-0e80.3cb10d2fe":{"attributeName":"tDatePickerx0x14","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-component-88be.1a74177ac":{"attributeName":"tComponentx0x15","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-a5a9.5d2a80317":{"attributeName":"tComponentx0x16","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-common-c20c.e8465135c":{"attributeName":"tTextCommonx0x17","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   rawLatestTime: "",
   POINT_CODE: "350700",
   clm4: "2024年9月",
   clm3: "2025年9月",
   clm2: "2024年1-9月",
   clm1: "2025年1-9月",
   isShow: true,
   endMonth: "",
   startMonth: "",
   toMonth: "",
   oldYear: "",
   year: "",
   charData: [],
   selectType: "excellent_rate",
   monitorTime: "",
   tableTitle: "空气质量情况",
   endTime: "",
   startTime: "",
   timeRange: [],
   chartOption: {},
   cardList: [{"title":"优良率","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-01-15/2911a043b524469eb2ed7f0bff0e5341.png","num1":"0","num2":"0","num3":"0","num4":"0","unit":"%"},{"title":"PM₂.₅浓度","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-01-15/f119f3f3cd7e4e3eb043b646c3e681bd.png","num1":"0","num2":"0","num3":"0","num4":"0","unit":"μg/m³"},{"title":"PM₁₀浓度","icon":"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-01-15/77674b0761d84b65bbead4a4e880ea23.png","num1":"0","num2":"0","num3":"0","num4":"0","unit":"μg/m³"}],
   dialogTitle: "延平区大气环境概况",
   tableData: [],
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
            default: {"width":"1534px","height":"981px","borderLeft":"1px solid var(--t-point-pop-border)","borderTop":"1px solid var(--t-point-pop-border)","borderRight":"1px solid var(--t-point-pop-border)","borderBottom":"1px solid var(--t-point-pop-border)","left":"187px","top":"53px","backgroundColor":"var(--t-point-pop-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1534px","height":"981px","borderLeft":"1px solid var(--t-point-pop-border)","borderTop":"1px solid var(--t-point-pop-border)","borderRight":"1px solid var(--t-point-pop-border)","borderBottom":"1px solid var(--t-point-pop-border)","left":"187px","top":"53px","backgroundColor":"var(--t-point-pop-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","position":"unset"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"1535px","height":"47px","backgroundColor":"var(--t-point-pop-header-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--t-point-pop-border)","position":"unset","left":"187px","top":"54px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1535px","height":"47px","backgroundColor":"var(--t-point-pop-header-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px solid var(--t-point-pop-border)","position":"unset","left":"187px","top":"54px","animationName":""}}}, 
 },
},
tSelectx0x3: {
defaultStyle: {
            default: {"width":"240px","height":"32px","fontSize":"14px","color":"var(--t-text)","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","animationName":"","left":"304px","top":"283px","position":"unset"},
            
            },
 default: { 
 
activeValue:"excellent_rate",
options:[{"value":"excellent_rate","label":"优良率","disabled":false},{"value":"pm25","label":"PM₂.₅","disabled":false},{"value":"pm10","label":"PM₁₀","disabled":false},{"value":"so2","label":"SO₂","disabled":false},{"value":"no2","label":"NO₂","disabled":false},{"value":"co","label":"CO","disabled":false},{"value":"o3","label":"O₃","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"240px","height":"32px","fontSize":"14px","color":"var(--t-text)","backgroundColor":"var(--t-select-fill-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingLeft":"10px","paddingRight":"0px","animationName":"","left":"304px","top":"283px","position":"unset"},"hover":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"},"focus":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--t-select-fill-bg-hover)","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)","box-shadow":"var(--business-select-shadow) 0px 0px 0px 2px "}},"placeholder":{"default":{"color":"var(--t-text)"}},"arrow":{"default":{"color":"var(--t-text)","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","marginLeft":"0px","right":"0","position":"relative","left":"7px"}},"dropdownArrow":{"default":{"backgroundColor":"rgba(69, 87, 163, 0)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","width":"182px","paddingLeft":"6px","paddingRight":"6px"}},"dropdownItem":{"default":{"fontSize":"14px","color":"var(--t-text)","height":"28px","lineHeight":"28px","width":"168px","marginBottom":"4px","paddingLeft":"8px","paddingRight":"8px"},"hover":{"color":"var(--t-text)","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"color":"var(--business-theme)","backgroundColor":"var(--business-select-item-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"disabledWrapper":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"65px","height":"20px","color":"var(--business-white)","fontSize":"14px","top":"291px","left":"229px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
label:"指标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"20px","color":"var(--business-white)","fontSize":"14px","top":"291px","left":"229px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":"","textAlign":"right"}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"589px","height":"22px","color":"rgba(255, 255, 255, 1)","lineHeight":"22px","fontSize":"20px","fontFamily":"方正综艺","top":"66px","left":"218px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"延平区大气环境概况",
editable:false,
cStyle:{"wrapper":{"default":{"width":"589px","height":"22px","color":"rgba(255, 255, 255, 1)","lineHeight":"22px","fontSize":"20px","fontFamily":"方正综艺","top":"66px","left":"218px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none var(--business-btn-default)","borderTop":"1px none var(--business-btn-default)","borderRight":"1px none var(--business-btn-default)","borderBottom":"1px none var(--business-btn-default)","position":"unset","left":"1675px","top":"65px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"var(--t-point-pop-close-btn)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none var(--business-btn-default)","borderTop":"1px none var(--business-btn-default)","borderRight":"1px none var(--business-btn-default)","borderBottom":"1px none var(--business-btn-default)","position":"unset","left":"1675px","top":"65px","backgroundColor":"var(--business-show-bg30)","backgroundImage":"var(--t-point-pop-close-btn)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"pointer"}},"numBox":{"default":{"borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}}}, 
 },
},
tComponentx0x7: {
defaultStyle: {
            default: {"width":"1456px","height":"73px","margin":"0 auto","position":"unset","left":"230px","top":"204px"},
            
            },
 default: { 
 
name:"statisticsCardListComponent",
loading:false,
cStyle:{"wrapper":{"default":{"width":"1456px","height":"73px","margin":"0 auto","position":"unset","left":"230px","top":"204px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/statisticsCardList",
componentName:"statisticsCardListComponent",
pageId:"92b7bdb148e644eb9768885b8fd60c8e",
pageCode:"statisticsCardList", 
 },
},
tChartDesignx0x8: {
defaultStyle: {
            default: {"height":"266px","width":"1444px","position":"unset","left":"240px","top":"315px"},
            
            },
 default: { 
 
registerMapName:"",
geoJson:{},
emptyImg:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/emptyImg.png",
cStyle:{"wrapper":{"default":{"height":"266px","width":"1444px","position":"unset","left":"240px","top":"315px"}},"emptyText":{"default":{"fontSize":"14px","color":"#fff"}}},
options: computed(() => _.merge({}, activeChartThemeOptions.value, {})), 
 },
},
tComponentx0x9: {
defaultStyle: {
            default: {"width":"1476px","height":"33px","margin":"0 auto","position":"unset","left":"222px","top":"114px"},
            
            },
 default: { 
 
name:"dialogTitleComponent",
loading:false,
cStyle:{"wrapper":{"default":{"width":"1476px","height":"33px","margin":"0 auto","position":"unset","left":"222px","top":"114px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/dialogTitle",
componentName:"dialogTitleComponent",
pageId:"051aca1b22bc4dbeb1baf06b72818d98",
pageCode:"dialogTitle", 
 },
},
tTextCommonx0x10: {
defaultStyle: {
            default: {"width":"151px","height":"20px","color":"var(--business-white)","fontFamily":"方正综艺","fontWeight":"400","fontSize":"20px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"276px","top":"121px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"考核分析",
editable:false,
cStyle:{"wrapper":{"default":{"width":"151px","height":"20px","color":"var(--business-white)","fontFamily":"方正综艺","fontWeight":"400","fontSize":"20px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"276px","top":"121px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
tTextx0x11: {
defaultStyle: {
            default: {"width":"65px","height":"20px","color":"var(--business-white)","fontSize":"14px","top":"165px","left":"223px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
label:"监测时间",
editable:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"20px","color":"var(--business-white)","fontSize":"14px","top":"165px","left":"223px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":"","textAlign":"right"}}}, 
 },
},
tTextx0x12: {
defaultStyle: {
            default: {"width":"65px","height":"20px","color":"var(--business-white)","fontSize":"14px","top":"629px","left":"222px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":"","textAlign":"right"},
            
            },
 default: { 
 
label:"监测时间",
editable:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"20px","color":"var(--business-white)","fontSize":"14px","top":"629px","left":"222px","lineHeight":"20px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","position":"unset","animationName":"","textAlign":"right"}}}, 
 },
},
tDatePickerx0x13: {
defaultStyle: {
            default: {"width":"296px","height":"32px","animationName":"","color":"#fff","marginLeft":"25px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"14px","backgroundColor":"var(--t-select-fill-bg)","position":"unset","left":"276px","top":"159px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"year",
clearable:true,
rangeSeparator:"-",
'default-date':"",
separator:"-",
cStyle:{"wrapper":{"default":{"width":"296px","height":"32px","animationName":"","color":"#fff","marginLeft":"25px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"14px","backgroundColor":"var(--t-select-fill-bg)","position":"unset","left":"276px","top":"159px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""},"hover":{"fontSize":"14px","backgroundColor":"var(--t-select-fill-bg-hover)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"}},"inputWrapper":{"default":{"backgroundColor":"rgba(20, 112, 204, 0)","borderLeft":"1px none rgba(20,112,204,0)","borderTop":"1px none rgba(20,112,204,0)","borderRight":"1px none rgba(20,112,204,0)","borderBottom":"1px none rgba(20,112,204,0)","color":"#fff","paddingLeft":"8px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","fontSize":"14px","lineHeight":"14px"}},"inputDateIcons":{"default":{"backgroundColor":"var(--business-select-border)","color":"rgba(121, 190, 255, 0)","backgroundImage":"","-webkit-mask-image":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/date-picker.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"50% 50%","position":"absolute","right":"0","top":"0px","pointerEvents":"none","marginRight":"0px","marginTop":"5px","width":"0px"}},"splitLine":{"default":{"color":"","backgroundColor":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px solid rgba(20,112,204,0.3)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""}},"selCurrentDateWrapper":{"default":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px","borderTopLeftRadius":"100px","borderTopRightRadius":"100px","borderBottomLeftRadius":"100px","borderBottomRightRadius":"100px"},"hover":{"fontSize":"12px"}},"currentDateWrapper":{"hover":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px"},"active":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px"},"default":{"backgroundColor":"rgba(20, 112, 204, 0)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","color":"#fff","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"12px"}},"todayWrapper":{"default":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","color":"#fff","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px"}},"dateHeaderWrapper":{"default":{"color":"#fff","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"","fontSize":"16px"},"hover":{"backgroundColor":"rgba(26, 27, 31, 0)","color":"#fff","fontSize":"16px"}},"weekWrapper":{"default":{"color":"#fff","fontWeight":"500","backgroundColor":"","fontFamily":"微软雅黑"}},"currentWeekWrapper":{"default":{"color":"#fff","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundColor":""}},"timePanelNumWrapper":{"default":{"color":"#fff","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-select-drop-bg)"},"hover":{"borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--t-select-fill-bg-hover)","color":"var(--business-select-border-hover)"}},"okWrapper":{"default":{"borderLeft":"1px solid rgba(255,255,255,0.9)","borderTop":"1px solid rgba(255,255,255,0.9)","borderRight":"1px solid rgba(255,255,255,0.9)","borderBottom":"1px solid rgba(255,255,255,0.9)","color":"rgba(255, 255, 255, 0.9)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"backgroundColor":"rgba(74, 228, 23, 0)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(255,255,255,0.9)","borderTop":"1px solid rgba(255,255,255,0.9)","borderRight":"1px solid rgba(255,255,255,0.9)","borderBottom":"1px solid rgba(255,255,255,0.9)","color":"rgba(255, 255, 255, 0.9)"},"active":{"borderLeft":"1px solid rgba(255,255,255,0.9)","borderTop":"1px solid rgba(255,255,255,0.9)","borderRight":"1px solid rgba(255,255,255,0.9)","borderBottom":"1px solid rgba(255,255,255,0.9)","color":"rgba(255, 255, 255, 0.9)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"timePanelWrapper":{"default":{"borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","backgroundColor":"var(--business-select-drop-bg)","color":"rgba(255, 255, 255, 0.9)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","box-shadow":"rgba(0, 0, 0, 0.3) 0px 4px 10px 0px ","fontSize":"12px"},"active":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","color":"var(--business-select-border-hover)","backgroundColor":"var(--t-button-bg)"}},"textBtnWrapper":{"default":{"color":"rgba(255, 255, 255, 0.6)","backgroundColor":""}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--t-select-fill-bg-hover)"}},"operatorArrow":{"default":{"backgroundColor":"","color":"rgba(255, 255, 255, 0.9)"},"hover":{"color":"var(--business-text-hover)"}},"prevAndNextMonthDate":{"default":{"fontSize":"12px"}},"rangeInputWrapper":{"default":{"fontSize":"16px"}},"disableDateWrapper":{"default":{"fontSize":"12px"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tDatePickerx0x14: {
defaultStyle: {
            default: {"width":"296px","height":"32px","animationName":"","color":"#fff","marginLeft":"25px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"14px","backgroundColor":"var(--t-select-fill-bg)","position":"unset","left":"275px","top":"623px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"month",
clearable:true,
rangeSeparator:"-",
'default-date':"",
separator:"-",
cStyle:{"wrapper":{"default":{"width":"296px","height":"32px","animationName":"","color":"#fff","marginLeft":"25px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"14px","backgroundColor":"var(--t-select-fill-bg)","position":"unset","left":"275px","top":"623px","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""},"hover":{"fontSize":"14px","backgroundColor":"var(--t-select-fill-bg-hover)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid var(--business-select-border-hover)","borderTop":"1px solid var(--business-select-border-hover)","borderRight":"1px solid var(--business-select-border-hover)","borderBottom":"1px solid var(--business-select-border-hover)"}},"inputWrapper":{"default":{"backgroundColor":"rgba(20, 112, 204, 0)","borderLeft":"1px none rgba(20,112,204,0)","borderTop":"1px none rgba(20,112,204,0)","borderRight":"1px none rgba(20,112,204,0)","borderBottom":"1px none rgba(20,112,204,0)","color":"#fff","paddingLeft":"8px","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","fontSize":"14px","lineHeight":"14px"}},"inputDateIcons":{"default":{"backgroundColor":"var(--business-select-border)","color":"rgba(121, 190, 255, 0)","backgroundImage":"","-webkit-mask-image":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/date-picker.png)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"50% 50%","position":"absolute","right":"0","top":"0px","pointerEvents":"none","marginRight":"0px","marginTop":"5px","width":"0px"}},"splitLine":{"default":{"color":"","backgroundColor":"","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px solid rgba(20,112,204,0.3)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","-webkit-mask-image":"","-webkit-mask-position":"","-webkit-mask-repeat":"","-webkit-mask-size":"","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":""}},"selCurrentDateWrapper":{"default":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px","borderTopLeftRadius":"100px","borderTopRightRadius":"100px","borderBottomLeftRadius":"100px","borderBottomRightRadius":"100px"},"hover":{"fontSize":"12px"}},"currentDateWrapper":{"hover":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px"},"active":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px"},"default":{"backgroundColor":"rgba(20, 112, 204, 0)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","color":"#fff","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"12px"}},"todayWrapper":{"default":{"color":"#fff","backgroundColor":"var(--business-select-border-hover)","fontSize":"12px"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-select-drop-bg)","borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","color":"#fff","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px"}},"dateHeaderWrapper":{"default":{"color":"#fff","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"","fontSize":"16px"},"hover":{"backgroundColor":"rgba(26, 27, 31, 0)","color":"#fff","fontSize":"16px"}},"weekWrapper":{"default":{"color":"#fff","fontWeight":"500","backgroundColor":"","fontFamily":"微软雅黑"}},"currentWeekWrapper":{"default":{"color":"#fff","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","backgroundColor":""}},"timePanelNumWrapper":{"default":{"color":"#fff","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--business-select-drop-bg)"},"hover":{"borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--t-select-fill-bg-hover)","color":"var(--business-select-border-hover)"}},"okWrapper":{"default":{"borderLeft":"1px solid rgba(255,255,255,0.9)","borderTop":"1px solid rgba(255,255,255,0.9)","borderRight":"1px solid rgba(255,255,255,0.9)","borderBottom":"1px solid rgba(255,255,255,0.9)","color":"rgba(255, 255, 255, 0.9)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"hover":{"backgroundColor":"rgba(74, 228, 23, 0)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px solid rgba(255,255,255,0.9)","borderTop":"1px solid rgba(255,255,255,0.9)","borderRight":"1px solid rgba(255,255,255,0.9)","borderBottom":"1px solid rgba(255,255,255,0.9)","color":"rgba(255, 255, 255, 0.9)"},"active":{"borderLeft":"1px solid rgba(255,255,255,0.9)","borderTop":"1px solid rgba(255,255,255,0.9)","borderRight":"1px solid rgba(255,255,255,0.9)","borderBottom":"1px solid rgba(255,255,255,0.9)","color":"rgba(255, 255, 255, 0.9)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"timePanelWrapper":{"default":{"borderLeft":"1px solid var(--business-select-border)","borderTop":"1px solid var(--business-select-border)","borderRight":"1px solid var(--business-select-border)","borderBottom":"1px solid var(--business-select-border)","backgroundColor":"var(--business-select-drop-bg)","color":"rgba(255, 255, 255, 0.9)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","box-shadow":"rgba(0, 0, 0, 0.3) 0px 4px 10px 0px ","fontSize":"12px"},"active":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","color":"var(--business-select-border-hover)","backgroundColor":"var(--t-button-bg)"}},"textBtnWrapper":{"default":{"color":"rgba(255, 255, 255, 0.6)","backgroundColor":""}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--t-select-fill-bg-hover)"}},"operatorArrow":{"default":{"backgroundColor":"","color":"rgba(255, 255, 255, 0.9)"},"hover":{"color":"var(--business-text-hover)"}},"prevAndNextMonthDate":{"default":{"fontSize":"12px"}},"rangeInputWrapper":{"default":{"fontSize":"16px"}},"disableDateWrapper":{"default":{"fontSize":"12px"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tComponentx0x15: {
defaultStyle: {
            default: {"width":"1457px","height":"347px","margin":"0 auto","position":"unset","left":"232px","top":"670px"},
            
            },
 default: { 
 
name:"airOverviewTableComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"1457px","height":"347px","margin":"0 auto","position":"unset","left":"232px","top":"670px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/airOverviewTable",
componentName:"airOverviewTableComponent",
pageId:"36483d0a52814e7dae8072b917edad32",
pageCode:"airOverviewTable", 
 },
},
tComponentx0x16: {
defaultStyle: {
            default: {"width":"1476px","height":"33px","margin":"0 auto","position":"unset","left":"222px","top":"578px","animationName":""},
            
            },
 default: { 
 
name:"dialogTitleComponent",
loading:false,
cStyle:{"wrapper":{"default":{"width":"1476px","height":"33px","margin":"0 auto","position":"unset","left":"222px","top":"578px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/dialogTitle",
componentName:"dialogTitleComponent",
pageId:"051aca1b22bc4dbeb1baf06b72818d98",
pageCode:"dialogTitle", 
 },
},
tTextCommonx0x17: {
defaultStyle: {
            default: {"width":"428px","height":"20px","color":"var(--business-white)","fontFamily":"方正综艺","fontWeight":"400","fontSize":"20px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"276px","top":"584px","background":"unset","backgroundClip":"unset","animationName":""},
            
            },
 default: { 
 
label:"空气质量情况",
editable:false,
cStyle:{"wrapper":{"default":{"width":"428px","height":"20px","color":"var(--business-white)","fontFamily":"方正综艺","fontWeight":"400","fontSize":"20px","lineHeight":"20px","letterSpacing":"0px","textAlign":"left","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"276px","top":"584px","background":"unset","backgroundClip":"unset","animationName":""}}}, 
 },
},
});
const initData = () => {
state.POINT_CODE = global.dialogParams.XZQDM || '350702';
state.dialogTitle = `${global.dialogParams.XZQMC}大气环境概况` 
console.log(state.POINT_CODE, 'state.POINT_CODE');

const init = async () => {

  await apiRegistry.getTime.request();
  await apiRegistry.getCardData.request();
  await apiRegistry.getEchartData.request();
  // await apiRegistry.getTableData.request();
}
init();



};
const closePop = () => {
global.dialogName = ''
global.dialogParams = {}
};
const initChartOptions = () => {
/**
 * 通用的年月字符串转中文月份方法
 * @param {string} yearMonthStr - 年-月格式的字符串，如 "2025-06"、"2024-12"、"2023-1"
 * @returns {string} 中文月份（如 "6月"），非法输入返回空字符串
 */
function convertYearMonthToChineseMonth(yearMonthStr) {
    // 校验输入是否为字符串
    if (typeof yearMonthStr !== 'string') {
        console.warn('输入必须是字符串格式');
        return '';
    }

    // 拆分年月（兼容 "2025-06"、"2025-6" 等格式）
    const [, monthPart] = yearMonthStr.split('-');

    // 校验拆分结果
    if (!monthPart) {
        console.warn('输入格式错误，需符合 "年-月" 格式（如 2025-06）');
        return '';
    }

    // 转换为数字并去除前导零（如 "06" 转为 6）
    const month = parseInt(monthPart, 10);

    // 校验月份是否合法（1-12）
    if (isNaN(month) || month < 1 || month > 12) {
        console.warn('月份值非法，需为 1-12 之间的数字');
        return '';
    }

    // 返回中文月份格式
    return `${month}月`;
}

const unitObj = () => {
    if (state.selectType === 'co') {
        return 'mg/m³';
    } else if (state.selectType === 'excellent_rate') {
        return '%';
    } else {
        return 'μg/m³';
    }
}
// 污染物名称映射（用于显示更友好的名称）
const pollutantNameMap = {
    excellent_rate: '优良率',
    pm25: 'PM2.5',
    pm10: 'PM10',
    o3: 'O3',
    so2: 'SO₂',
    no2: 'NO₂',
    co: 'CO'
};

/**
 * 处理空气质量数据，适配ECharts
 * @param {Array} rawData - 原始空气质量数据
 * @param {string} pollutantType - 污染物类型（如 'pm25'、'pm10'、'o3' 等）
 * @returns {Object} 包含x轴和系列数据的对象
 */
function processAirQualityData(rawData, pollutantType) {
    // 提取X轴数据（月份）
    const xAxisData = rawData.map(item => convertYearMonthToChineseMonth(item.monitortime));

    // 提取今年数据
    const currentYearData = rawData.map(item => {
        // 处理空值，转为0
        const value = item[pollutantType] || 0;
        return Number(value);
    });

    // 提取上年数据（_yoy后缀）
    const lastYearData = rawData.map(item => {
        const yoyKey = `${pollutantType}_yoy`;
        const value = item[yoyKey] || 0;
        return Number(value);
    });

    return {
        xAxisData,
        seriesData: [
            {
                name: `${state.endTime.split('-')[0]}`,
                type: 'bar',
                barWidth: 14,
                data: currentYearData,
                itemStyle: {
                    borderColor: 'rgb(108,255,250)',
                    borderWidth: 1,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(108,255,250,0.95)' },
                        { offset: 1, color: 'rgba(108,255,250,0.25)' }
                    ])
                }
            },
            {
                name: `${state.oldYear}`,
                type: 'bar',
                barWidth: 14,
                data: lastYearData,
                itemStyle: {
                    borderColor: 'rgb(250,200,88)',
                    borderWidth: 1,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(250,200,88,0.9)' },
                        { offset: 1, color: 'rgba(250,200,88,0.25)' }
                    ])
                }
            }
        ]
    };
}
/**
 * 生成ECharts配置项
 * @param {string} pollutantType - 污染物类型
 * @returns {Object} ECharts配置对象
 */
function getEchartsOption(pollutantType) {
    // 处理数据
    const { xAxisData, seriesData } = processAirQualityData(state.charData, pollutantType);

    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            // 格式化tooltip显示（增加带颜色的小圆圈）
            formatter: function (params) {
                // 先显示坐标轴的值（如X轴文本）
                let res = params[0].axisValue;

                // 遍历每个系列数据，拼接带颜色圆圈的提示文本
                params.forEach(item => {
                    res += `<br/>${item.marker}
                ${item.seriesName}：${item.value} ${unitObj()}`;
                });
                return res;
            }
        },
        legend: {
            top: 10,
            data: seriesData.map(item => item.name),
            textStyle: {
                fontSize: "14px",
                color: '#DEFDFF'
            }
        },
        grid: {
            left: '3%',
            right: '3%',
            bottom: '6%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: xAxisData,
            axisLine: {
                lineStyle: { color: 'rgba(255,255,255,.3)' }
            },
            axisLabel: {
                color: '#DEFDFF',
                fontSize: "14px",
                fontWeight: '700',
                fontFamily: '方正综艺'
            },
            axisTick: { show: false }
        },
        yAxis: {
            type: 'value',
            // 核心配置：Y轴顶部显示单位
            name: unitObj(),          // Y轴名称（单位）
            // nameLocation: 'top',    // 单位显示位置（顶部）
            nameTextStyle: {        // 单位文字样式
                fontSize: "14px",
                color: '#DEFDFF',   // 文字颜色和刻度保持一致
                // padding: [0, 0, 10, 0] // 调整内边距，避免和刻度重叠
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(255,255,255,.3)'
                }
            },
            axisLine: { show: false },
            axisLabel: { fontSize: "14px", color: '#DEFDFF' }
        },
        series: seriesData
    };
}
state.chartOption = getEchartsOption(state.selectType);
console.log('testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest', state.chartOption);
// state.chartOption = {
//     tooltip: {
//         trigger: 'axis',
//         axisPointer: { type: 'shadow' }
//     },
//     legend: {
//         top: 10,
//         data: ['任务总数', '已完成'],
//         textStyle: {
//             color: '#DEFDFF'
//         }
//     },
//     grid: {
//         left: '3%',
//         right: '3%',
//         bottom: '6%',
//         containLabel: true
//     },
//     xAxis: {
//         type: 'category',
//         data: [
//             '市节能办',
//             '市生态环境局',
//             '市财政局',
//             '市农业农村局',
//             '市城市管理局',
//             '林业局'
//         ],
//         axisLine: {
//             lineStyle: { color: 'rgba(255,255,255,.3)' }
//         },
//         axisLabel: {
//             color: '#DEFDFF',
//             fontSize: 12,
//             fontWeight: '700',
//             fontFamily: '方正综艺'
//         },
//         axisTick: { show: false }
//     },
//     yAxis: {
//         type: 'value',
//         splitLine: {
//             lineStyle: {
//                 type: 'dashed',
//                 color: 'rgba(255,255,255,.3)'
//             }
//         },
//         axisLine: { show: false },
//         axisLabel: { color: '#DEFDFF' }
//     },
//     series: [
//         {
//             name: '任务总数',
//             type: 'bar',
//             barWidth: 14,
//             data: [88, 88, 88, 88, 88, 88],
//             itemStyle: {
//                 borderColor: 'rgb(108,255,250)',
//                 borderWidth: 1,
//                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                     { offset: 0, color: 'rgba(108,255,250,0.95)' },
//                     { offset: 1, color: 'rgba(108,255,250,0.25)' }
//                 ])
//             }
//         },
//         {
//             name: '已完成',
//             type: 'bar',
//             barWidth: 14,
//             data: [18, 18, 18, 18, 18, 18],
//             itemStyle: {
//                 borderColor: 'rgb(250,200,88)',
//                 borderWidth: 1,
//                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//                     { offset: 0, color: 'rgba(250,200,88,0.9)' },
//                     { offset: 1, color: 'rgba(250,200,88,0.25)' }
//                 ])
//             }
//         }
//     ]
// }
};
const handleYearChange = (data) => {
console.log(data);
// function getCurrentYear() {
//   return new Date().getFullYear();
// }

if (data === state.rawLatestTime.split('-')[0]) {
  state.monitorTime = state.rawLatestTime;
} else {
  state.monitorTime = data + '-12';
}
state.startTime = data + '-01';
state.endTime = data + '-12';
state.oldYear = String(Number(data) - 1);
apiRegistry.getCardData.request();
apiRegistry.getEchartData.request();
};
const handleMonthChange = (data) => {
console.log(data);
/**
 * 将 "年-月" 格式的字符串转换为中文月份（如 "2025-02" → "2月"）
 * @param {string} dateStr - 格式为 "YYYY-MM" 或 "YYYY-M" 的字符串
 * @returns {string} 中文月份（如 "2月"），格式错误返回空字符串
 */
function formatMonth(dateStr) {
  // 校验输入格式
  if (!dateStr || typeof dateStr !== 'string') {
    return '';
  }

  // 使用正则表达式提取月份部分
  const monthMatch = dateStr.match(/(\d{4})-(\d{1,2})/);

  if (!monthMatch) {
    return ''; // 格式不匹配返回空
  }

  // 提取并转换月份为数字
  const month = parseInt(monthMatch[2], 10);

  // 校验月份的合法性（1-12）
  if (month < 1 || month > 12) {
    return '';
  }

  // 返回中文月份格式
  return `${month}月`;
}

state.toMonth = data;
state.startMonth = data.split('-')[0] + '-01';
state.endMonth = data;
state.clm1 = `${data.split('-')[0]}年1-${formatMonth(data)}`;
state.clm2 = `${String(Number(data.split('-')[0]) - 1)}年1-${formatMonth(data)}`;
state.clm3 = `${data.split('-')[0]}年${formatMonth(data)}`;
state.clm4 = `${String(Number(data.split('-')[0]) - 1)}年${formatMonth(data)}`;
apiRegistry.getTableData.request();
};
const setProvide = () => {

provide('state', state)
};
const onchange1763689398877_0_0 = (value,selectValueArr,selectValueItem) => {
// 设置变量值
state.selectType = value;
// 执行自定义方法
initChartOptions();
};
const onclick1742797597302_0_0 = () => {
// 执行自定义方法
closePop();
};
const ondateChange1742991197605 = (data) => {
// 执行自定义方法
handleYearChange(data);
};
const ondateChange1768635815031_0_0 = (data) => {
// 执行自定义方法
handleMonthChange(data);
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getEchartData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"END_TIME":"state.endTime","START_TIME":"state.startTime","DATA_TYPE":"ACC_MONTH","POINT_CODE":"state.POINT_CODE","POINT_TYPE":"13","MONITORTIME":"","interfaceId":"a481714344fd31eb5c7c89b296b10de6"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"END_TIME":state.endTime,"START_TIME":state.startTime,"DATA_TYPE":"ACC_MONTH","POINT_CODE":state.POINT_CODE,"POINT_TYPE":"13","MONITORTIME":"","interfaceId":"a481714344fd31eb5c7c89b296b10de6"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"END_TIME":state.endTime,"START_TIME":state.startTime,"DATA_TYPE":"ACC_MONTH","POINT_CODE":state.POINT_CODE,"POINT_TYPE":"13","MONITORTIME":"","interfaceId":"a481714344fd31eb5c7c89b296b10de6"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getEchartData'] = res.data;
                
     state.charData = [];
if (res.data.head.statusCode === '200' && res.data?.data) {
  console.log('res', res)
  state.charData = res.data.data;
  console.log('1111111111111111111111', state.charData)
}
initChartOptions();
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.serviceBaseUrl","params":{"POINT_CODE":"state.POINT_CODE","POINT_TYPE":"13","TIME_TYPE":"year_month","interfaceId":"66ad2ebe9d660295568b05187f34e133"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"POINT_CODE":state.POINT_CODE,"POINT_TYPE":"13","TIME_TYPE":"year_month","interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.serviceBaseUrl-global.serviceBasePath',  {"POINT_CODE":state.POINT_CODE,"POINT_TYPE":"13","TIME_TYPE":"year_month","interfaceId":"66ad2ebe9d660295568b05187f34e133"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTime'] = res.data;
                
     if (res.data.data) {
  state.monitorTime = res?.data?.data?.MONITORTIME;
  state.rawLatestTime = res?.data?.data?.MONITORTIME;
  state.oldYear = String(Number(res?.data?.data?.MONITORTIME.split('-')[0]) - 1);
  state.startTime = res?.data?.data?.MONITORTIME.split('-')[0] + '-01';
  state.endTime = res?.data?.data?.MONITORTIME.split('-')[0] + '-12';

  state.toMonth = res?.data?.data?.MONITORTIME;
  state.startMonth = res?.data?.data?.MONITORTIME.split('-')[0] + '-01';
  state.endMonth = res?.data?.data?.MONITORTIME;
  console.log(state.monitorTime, state.startTime, state.endTime)

  handleMonthChange(res.data.data.MONITORTIME); // 参数注意修改
}




      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.monitorTime = '--';
      reject(error);
    });
  });
},
              },
// 接口函数
 getCardData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"END_TIME":"","START_TIME":"","DATA_TYPE":"ACC_MONTH","POINT_CODE":"state.POINT_CODE","POINT_TYPE":"13","MONITORTIME":"state.monitorTime","interfaceId":"a481714344fd31eb5c7c89b296b10de6"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"END_TIME":"","START_TIME":"","DATA_TYPE":"ACC_MONTH","POINT_CODE":state.POINT_CODE,"POINT_TYPE":"13","MONITORTIME":state.monitorTime,"interfaceId":"a481714344fd31eb5c7c89b296b10de6"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"END_TIME":"","START_TIME":"","DATA_TYPE":"ACC_MONTH","POINT_CODE":state.POINT_CODE,"POINT_TYPE":"13","MONITORTIME":state.monitorTime,"interfaceId":"a481714344fd31eb5c7c89b296b10de6"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getCardData'] = res.data;
                
     state.cardList = [
  {
    "title": "优良率",
    "icon": "/lego-generated-apps/lego_file/res/2026-01-15/2911a043b524469eb2ed7f0bff0e5341.png",
    "num1": "0",
    "num2": "0",
    "num3": "0",
    "num4": "0",
    "unit": "%"
  },
  {
    "title": "PM₂.₅浓度",
    "icon": "/lego-generated-apps/lego_file/res/2026-01-15/f119f3f3cd7e4e3eb043b646c3e681bd.png",
    "num1": "0",
    "num2": "0",
    "num3": "0",
    "num4": "0",
    "unit": "μg/m³"
  },
  {
    "title": "PM₁₀浓度",
    "icon": "/lego-generated-apps/lego_file/res/2026-01-15/77674b0761d84b65bbead4a4e880ea23.png",
    "num1": "0",
    "num2": "0",
    "num3": "0",
    "num4": "0",
    "unit": "μg/m³"
  }
];
console.log(state.cardList, '9999');
if (res.data.head.statusCode === '200' && res.data?.data.length) {
  console.log('res', res)
  state.cardList = [
    {
      "title": "优良率",
      "icon": "/lego-generated-apps/lego_file/res/2026-01-15/2911a043b524469eb2ed7f0bff0e5341.png",
      "num1": res.data.data[0].excellent_rate,
      "num2": res.data.data[0].excellent_rate_yoy,
      "num3": res.data.data[0].excellent_rate_change_rate,
      "num4": res.data.data[0].excellent_rate_diff_cur || '0',
      "unit": "%"
    },
    {
      "title": "PM₂.₅浓度",
      "icon": "/lego-generated-apps/lego_file/res/2026-01-15/f119f3f3cd7e4e3eb043b646c3e681bd.png",
      "num1": res.data.data[0].pm25,
      "num2": res.data.data[0].pm25_yoy,
      "num3": res.data.data[0].pm25_change_rate,
      "num4": res.data.data[0].pm25_diff_cur || '0',
      "unit": "μg/m³"
    },
    {
      "title": "PM₁₀浓度",
      "icon": "/lego-generated-apps/lego_file/res/2026-01-15/77674b0761d84b65bbead4a4e880ea23.png",
      "num1": res.data.data[0].pm10,
      "num2": res.data.data[0].pm10_yoy,
      "num3": res.data.data[0].pm10_change_rate,
      "num4": res.data.data[0].pm10_diff_cur || '0',
      "unit": "μg/m³"
    }
  ];

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
 getTableData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.npServiceBaseUrl","params":{"END_TIME":"","START_TIME":"","DATA_TYPE":"CUR_MONTH","POINT_CODE":"state.POINT_CODE","POINT_TYPE":"13","MONITORTIME":"state.toMonth","interfaceId":"3a020896c531fc940c1b63cb4de6ab1e"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.npServiceBaseUrl,"params":{"END_TIME":"","START_TIME":"","DATA_TYPE":"CUR_MONTH","POINT_CODE":state.POINT_CODE,"POINT_TYPE":"13","MONITORTIME":state.toMonth,"interfaceId":"3a020896c531fc940c1b63cb4de6ab1e"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.npServiceBaseUrl-global.serviceBasePath',  {"END_TIME":"","START_TIME":"","DATA_TYPE":"CUR_MONTH","POINT_CODE":state.POINT_CODE,"POINT_TYPE":"13","MONITORTIME":state.toMonth,"interfaceId":"3a020896c531fc940c1b63cb4de6ab1e"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getTableData'] = res.data;
                
     state.tableData = [
  {
    REGION_NAME: "优良率",
    TOTAL_NUM: "--",
    POLLUTE_LEVEL: "--",
    CWQI_VAL: "--",
    COMPLETE_NUM_RATIO: "--",
    PROGRESS_NUM: "--",
    STANDARDRATE: '%'
  },
  {
    REGION_NAME: "综合指数",
    TOTAL_NUM: "--",
    POLLUTE_LEVEL: "--",
    CWQI_VAL: "--",
    COMPLETE_NUM_RATIO: "--",
    PROGRESS_NUM: "--",
    STANDARDRATE: ""
  },
  {
    REGION_NAME: "PM₂.₅",
    TOTAL_NUM: "--",
    POLLUTE_LEVEL: "--",
    CWQI_VAL: "--",
    COMPLETE_NUM_RATIO: "--",
    PROGRESS_NUM: "--",
    STANDARDRATE: 'μg/m³'
  },
  {
    REGION_NAME: "PM₁₀",
    TOTAL_NUM: "--",
    POLLUTE_LEVEL: "--",
    CWQI_VAL: "--",
    COMPLETE_NUM_RATIO: "--",
    PROGRESS_NUM: "--",
    STANDARDRATE: 'μg/m³'
  },
  {
    REGION_NAME: "SO₂",
    TOTAL_NUM: "--",
    POLLUTE_LEVEL: "--",
    CWQI_VAL: "--",
    COMPLETE_NUM_RATIO: "--",
    PROGRESS_NUM: "--",
    STANDARDRATE: 'μg/m³'
  },
  {
    REGION_NAME: "NO₂",
    TOTAL_NUM: "--",
    POLLUTE_LEVEL: "--",
    CWQI_VAL: "--",
    COMPLETE_NUM_RATIO: "--",
    PROGRESS_NUM: "--",
    STANDARDRATE: 'μg/m³'
  },
  {
    REGION_NAME: "CO",
    TOTAL_NUM: "--",
    POLLUTE_LEVEL: "--",
    CWQI_VAL: "--",
    COMPLETE_NUM_RATIO: "--",
    PROGRESS_NUM: "--",
    STANDARDRATE: 'mg/m³'
  },
  {
    REGION_NAME: "O₃",
    TOTAL_NUM: "--",
    POLLUTE_LEVEL: "--",
    CWQI_VAL: "--",
    COMPLETE_NUM_RATIO: "--",
    PROGRESS_NUM: "--",
    STANDARDRATE: 'μg/m³'
  }
];
if (res.data.head.statusCode === '200' && res.data?.data.length > 0) {

  state.tableData = [
    {
      REGION_NAME: "优良率",
      TOTAL_NUM: res.data.data[0].excellent_rate_acc || '--',
      POLLUTE_LEVEL: '--',
      CWQI_VAL: res.data.data[0].excellent_rate_yoy_acc || '--',
      COMPLETE_NUM_RATIO: res.data.data[0].excellent_rate_cur || '--',
      PROGRESS_NUM: res.data.data[0].excellent_rate_yoy_cur || '--',
      STANDARDRATE: '%',
    },
    {
      REGION_NAME: "综合指数",
      TOTAL_NUM: res.data.data[0].aqci_acc || '--',
      POLLUTE_LEVEL: "--",
      CWQI_VAL: res.data.data[0].aqci_yoy_acc || '--',
      COMPLETE_NUM_RATIO: res.data.data[0].aqci_cur || '--',
      PROGRESS_NUM: res.data.data[0].aqci_yoy_cur || '--',
      STANDARDRATE: ''
    },
    {
      REGION_NAME: "PM₂.₅",
      TOTAL_NUM: res.data.data[0].pm25_acc || '--',
      POLLUTE_LEVEL: '--',
      CWQI_VAL: res.data.data[0].pm25_yoy_acc || '--',
      COMPLETE_NUM_RATIO: res.data.data[0].pm25_cur || '--',
      PROGRESS_NUM: res.data.data[0].pm25_yoy_cur || '--',
      STANDARDRATE: 'μg/m³',
    },
    {
      REGION_NAME: "PM₁₀",
      TOTAL_NUM: res.data.data[0].pm10_acc || '--',
      POLLUTE_LEVEL: '--',
      CWQI_VAL: res.data.data[0].pm10_yoy_acc || '--',
      COMPLETE_NUM_RATIO: res.data.data[0].pm10_cur || '--',
      PROGRESS_NUM: res.data.data[0].pm10_yoy_cur || '--',
      STANDARDRATE: 'μg/m³',
    },
    {
      REGION_NAME: "SO₂",
      TOTAL_NUM: res.data.data[0].so2_acc || '--',
      POLLUTE_LEVEL: '--',
      CWQI_VAL: res.data.data[0].so2_yoy_acc || '--',
      COMPLETE_NUM_RATIO: res.data.data[0].so2_cur || '--',
      PROGRESS_NUM: res.data.data[0].so2_yoy_cur || '--',
      STANDARDRATE: 'μg/m³',
    },
    {
      REGION_NAME: "NO₂",
      TOTAL_NUM: res.data.data[0].no2_acc || '--',
      POLLUTE_LEVEL: '--',
      CWQI_VAL: res.data.data[0].no2_yoy_acc || '--',
      COMPLETE_NUM_RATIO: res.data.data[0].no2_cur || '--',
      PROGRESS_NUM: res.data.data[0].no2_yoy_cur || '--',
      STANDARDRATE: 'μg/m³',
    },
    {
      REGION_NAME: "CO",
      TOTAL_NUM: res.data.data[0].co_acc || '--',
      POLLUTE_LEVEL: '--',
      CWQI_VAL: res.data.data[0].co_yoy_acc || '--',
      COMPLETE_NUM_RATIO: res.data.data[0].co_cur || '--',
      PROGRESS_NUM: res.data.data[0].co_yoy_cur || '--',
      STANDARDRATE: 'mg/m³',
    },
    {
      REGION_NAME: "O₃",
      TOTAL_NUM: res.data.data[0].o3_acc || '--',
      POLLUTE_LEVEL: '--',
      CWQI_VAL: res.data.data[0].o3_yoy_acc || '--',
      COMPLETE_NUM_RATIO: res.data.data[0].o3_cur || '--',
      PROGRESS_NUM: res.data.data[0].o3_yoy_cur || '--',
      STANDARDRATE: 'μg/m³',
    }
  ];
  console.log('tabletabletabletabletabletabletabletabletabletable', state.tableData);
}
// state.isShow = false;
// setTimeout(() => {
//   state.isShow = true;
// }, 1000)
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
                            setPageScale('t-l-c-airOverviewPop', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setProvide();
onMounted(() => {
setPageScale('t-l-c-airOverviewPop', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
initData();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tSelectx0x3ComputedData = computed(() => _.merge({}, componentState.tSelectx0x3.default, componentState.tSelectx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

 const tComponentx0x7ComputedData = computed(() => _.merge({}, componentState.tComponentx0x7.default, componentState.tComponentx0x7?.[state.screenSize]));

 const tChartDesignx0x8ComputedData = computed(() => replaceCssVariables(_.merge({}, componentState.tChartDesignx0x8.default, componentState.tChartDesignx0x8?.[state.screenSize]), global?.theme || global?.activeTheme || '默认主题'));

 const tComponentx0x9ComputedData = computed(() => _.merge({}, componentState.tComponentx0x9.default, componentState.tComponentx0x9?.[state.screenSize]));

 const tTextCommonx0x10ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x10.default, componentState.tTextCommonx0x10?.[state.screenSize]));

 const tTextx0x11ComputedData = computed(() => _.merge({}, componentState.tTextx0x11.default, componentState.tTextx0x11?.[state.screenSize]));

 const tTextx0x12ComputedData = computed(() => _.merge({}, componentState.tTextx0x12.default, componentState.tTextx0x12?.[state.screenSize]));

 const tDatePickerx0x13ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x13.default, componentState.tDatePickerx0x13?.[state.screenSize]));

 const tDatePickerx0x14ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x14.default, componentState.tDatePickerx0x14?.[state.screenSize]));

 const tComponentx0x15ComputedData = computed(() => _.merge({}, componentState.tComponentx0x15.default, componentState.tComponentx0x15?.[state.screenSize]));

 const tComponentx0x16ComputedData = computed(() => _.merge({}, componentState.tComponentx0x16.default, componentState.tComponentx0x16?.[state.screenSize]));

 const tTextCommonx0x17ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x17.default, componentState.tTextCommonx0x17?.[state.screenSize]));

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
tRectx0x2ComputedData,
tSelectx0x3ComputedData,
tTextx0x4ComputedData,
tTextx0x5ComputedData,
tRectx0x6ComputedData,
tComponentx0x7ComputedData,
tChartDesignx0x8ComputedData,
tComponentx0x9ComputedData,
tTextCommonx0x10ComputedData,
tTextx0x11ComputedData,
tTextx0x12ComputedData,
tDatePickerx0x13ComputedData,
tDatePickerx0x14ComputedData,
tComponentx0x15ComputedData,
tComponentx0x16ComputedData,
tTextCommonx0x17ComputedData,
onchange1763689398877_0_0,
onclick1742797597302_0_0,
ondateChange1742991197605,
ondateChange1768635815031_0_0,
};
},
};