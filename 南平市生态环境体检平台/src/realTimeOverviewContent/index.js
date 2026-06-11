window.realTimeOverviewContentComponent = {
template: 
`<div id="t-l-c-realTimeOverviewContent" class="t-l-c-realTimeOverviewContent" >` +
`<t-component id="t-component-1948.8b983b9b8" class="realTimeOverviewContent-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName" :page-id="tComponentx0x0ComputedData.pageId" :page-code="tComponentx0x0ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-4666.cb9a914ee" class="realTimeOverviewContent-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :loading="tComponentx0x1ComputedData.loading" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-3fc8.40c9a9fd1" class="realTimeOverviewContent-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :loading="tComponentx0x2ComputedData.loading" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName" :page-id="tComponentx0x2ComputedData.pageId" :page-code="tComponentx0x2ComputedData.pageCode">` +
`</t-component>` +
`<t-text-unit id="t-text-unit-d5c0.d98c4fced" class="realTimeOverviewContent-t-text-unit-0-3"  :c-style="tTextUnitx0x3ComputedData.cStyle" :content="replaceCssVariables(filterData(global.regionaQuery.businessRegionName, componentPropBindingMap?.['t-text-unit-d5c0.d98c4fced']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x3ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x3ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-8b0e.4ade1c818" class="realTimeOverviewContent-t-text-unit-0-4"  :c-style="tTextUnitx0x4ComputedData.cStyle" :content="tTextUnitx0x4ComputedData.content" :unit="tTextUnitx0x4ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x4ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-list-card-rate id="t-list-card-rate-22cf.23be340b2" class="realTimeOverviewContent-t-list-card-rate-0-5"  :data="replaceCssVariables(filterData(state.pollutantsList, componentPropBindingMap?.['t-list-card-rate-22cf.23be340b2']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :status-list="tListCardRatex0x5ComputedData.statusList" :data-alias="tListCardRatex0x5ComputedData.dataAlias" :c-style="tListCardRatex0x5ComputedData.cStyle">` +
`</t-list-card-rate>` +
`<t-table id="t-table-d2c1.f17795542" class="realTimeOverviewContent-t-table-0-6"  :height="tTablex0x6ComputedData.height" :stripe="tTablex0x6ComputedData.stripe" :border="tTablex0x6ComputedData.border" :auto-scroll="tTablex0x6ComputedData.autoScroll" :speed="tTablex0x6ComputedData.speed" :columns="tTablex0x6ComputedData.columns" :data="replaceCssVariables(filterData(state.listData, componentPropBindingMap?.['t-table-d2c1.f17795542']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :default-sort="tTablex0x6ComputedData.defaultSort" :c-style="tTablex0x6ComputedData.cStyle" @cell-click="oncellClick1767681943133">` +
`</t-table>` +
`<t-date-picker id="t-date-picker-4ad2.c3215be7a" class="realTimeOverviewContent-t-date-picker-0-7"  :placeholder="tDatePickerx0x7ComputedData.placeholder" :start-placeholder="tDatePickerx0x7ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x7ComputedData.endPlaceholder" :type="tDatePickerx0x7ComputedData.type" :clearable="tDatePickerx0x7ComputedData.clearable" :range-separator="tDatePickerx0x7ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(global.airGlobalVariables.realTimeAlarm.dateValue, componentPropBindingMap?.['t-date-picker-4ad2.c3215be7a']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x7ComputedData.separator" :readonly="tDatePickerx0x7ComputedData.readonly" :editable="tDatePickerx0x7ComputedData.editable" :c-style="tDatePickerx0x7ComputedData.cStyle" @date-change="ondateChange1767685262838">` +
`</t-date-picker>` +
`<t-component id="t-component-42d9.b148097e9" class="realTimeOverviewContent-t-component-0-8"  :name="tComponentx0x8ComputedData.name" :c-style="tComponentx0x8ComputedData.cStyle" :src="tComponentx0x8ComputedData.src" :component-name="tComponentx0x8ComputedData.componentName" :page-id="tComponentx0x8ComputedData.pageId" :page-code="tComponentx0x8ComputedData.pageCode">` +
`</t-component>` +
`<t-tabs-base id="t-tabs-base-ba51.762c76d26" class="realTimeOverviewContent-t-tabs-base-0-9"  :data="tTabsBasex0x9ComputedData.data" :space="tTabsBasex0x9ComputedData.space" :selected-tab-val="tTabsBasex0x9ComputedData.selectedTabVal" :inner-shadow-color="tTabsBasex0x9ComputedData.innerShadowColor" :active-inner-shadow-color="tTabsBasex0x9ComputedData.activeInnerShadowColor" :alias="tTabsBasex0x9ComputedData.alias" :c-style="tTabsBasex0x9ComputedData.cStyle" @tab-click="ontabClick1767685311994">` +
`</t-tabs-base>` +
`<t-text-unit v-if="state.currentType === 'auto'" id="t-text-unit-5d3e.15d8238a2" class="realTimeOverviewContent-t-text-unit-0-10"  :c-style="tTextUnitx0x10ComputedData.cStyle" :content="replaceCssVariables(filterData(state.refreshTime, componentPropBindingMap?.['t-text-unit-5d3e.15d8238a2']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x10ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x10ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-image-base id="t-image-base-fc3f.34674dd84" class="realTimeOverviewContent-t-image-base-0-11"  :src="tImageBasex0x11ComputedData.src" :fit="tImageBasex0x11ComputedData.fit" :c-style="tImageBasex0x11ComputedData.cStyle" @click="onclick1767685710756">` +
`</t-image-base>` +
`<t-text-common id="t-text-common-6f3c.412407f04" class="realTimeOverviewContent-t-text-common-0-12"  :label="tTextCommonx0x12ComputedData.label" :editable="tTextCommonx0x12ComputedData.editable" :c-style="tTextCommonx0x12ComputedData.cStyle" :show-title="tTextCommonx0x12ComputedData.showTitle">` +
`</t-text-common>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-1948.8b983b9b8":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-4666.cb9a914ee":{"attributeName":"tComponentx0x1","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-3fc8.40c9a9fd1":{"attributeName":"tComponentx0x2","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-text-unit-d5c0.d98c4fced":{"attributeName":"tTextUnitx0x3","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-8b0e.4ade1c818":{"attributeName":"tTextUnitx0x4","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-list-card-rate-22cf.23be340b2":{"attributeName":"tListCardRatex0x5","data":{"filters":[]},"statusList":{"filters":[]},"dataAlias":{"filters":[]},"cStyle":{"filters":[]}},"t-table-d2c1.f17795542":{"attributeName":"tTablex0x6","height":{"filters":[]},"stripe":{"filters":[]},"border":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"columns":{"filters":[]},"data":{"filters":[]},"defaultSort":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-4ad2.c3215be7a":{"attributeName":"tDatePickerx0x7","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-component-42d9.b148097e9":{"attributeName":"tComponentx0x8","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-tabs-base-ba51.762c76d26":{"attributeName":"tTabsBasex0x9","data":{"filters":[]},"space":{"filters":[]},"selectedTabVal":{"filters":[]},"innerShadowColor":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-5d3e.15d8238a2":{"attributeName":"tTextUnitx0x10","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-image-base-fc3f.34674dd84":{"attributeName":"tImageBasex0x11","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-6f3c.412407f04":{"attributeName":"tTextCommonx0x12","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"showTitle":{"filters":[]}}};
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
   debouncedGetData: {},
   timeType: "minute",
   timeRef: "",
   refreshTime: "300",
   currentType: "manual",
   listData: [],
   pointType: "",
   pollutantsList: [{"name":"PM₂.₅","value":"-","unit":"μg/m³","rateName":"环比","rate":"-","status":"-"},{"name":"PM₁₀","value":"-","unit":"μg/m³","rateName":"环比","rate":"-","status":"-"},{"name":"SO₂","value":"-","unit":"μg/m³","rateName":"环比","rate":"-","status":"-"},{"name":"NO₂","value":"-","unit":"μg/m³","rateName":"环比","rate":"-","status":"-"},{"name":"O₃","value":"-","unit":"μg/m³","rateName":"环比","rate":"-","status":"-"},{"name":"CO","value":"-","unit":"mg/m³","rateName":"环比","rate":"-","status":"-"}],
   dateValue: "",
   dateType: "5minute",
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
            default: {"width":"410px","height":"75px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","left":"22px","top":"691px","position":"unset","animationName":""},
            
            },
 default: { 
 
name:"airOverviewQualityRankRegionComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"75px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","left":"22px","top":"691px","position":"unset","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/airOverviewQualityRankRegion",
componentName:"airOverviewQualityRankRegionComponent",
pageId:"8fbbd7f6d14b41d899ed2a28d1e9b6fb_6",
pageCode:"airOverviewQualityRankRegion", 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"400px","height":"32px","margin":"0 auto","top":"61px","left":"25px","position":"unset"},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"400px","height":"32px","margin":"0 auto","top":"61px","left":"25px","position":"unset"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent",
pageId:"11294a0cd1654489a15355ed663e73ad_6",
pageCode:"titleFirstBg", 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"400px","height":"32px","margin":"0 auto","top":"353px","left":"26px","position":"unset","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"400px","height":"32px","margin":"0 auto","top":"353px","left":"26px","position":"unset","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent",
pageId:"11294a0cd1654489a15355ed663e73ad_6",
pageCode:"titleFirstBg", 
 },
},
tTextUnitx0x3: {
defaultStyle: {
            default: {"width":"282px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","position":"unset","left":"56px","top":"62px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"282px","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","position":"unset","left":"56px","top":"62px"}},"unit":{"default":{"fontSize":"var(--business-text-size-20)","fontFamily":"方正综艺","lineHeight":"32px"}},"text":{"default":{"lineHeight":"32px","fontSize":"var(--business-text-size-20)"}}},
content:"南平市",
unit:"5分钟污染物变化",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x4: {
defaultStyle: {
            default: {"width":"auto","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"32px","position":"unset","left":"57px","top":"353px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"32px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"32px","position":"unset","left":"57px","top":"353px","animationName":""}},"unit":{"default":{"fontSize":"var(--business-text-size-20)","fontFamily":"方正综艺","lineHeight":"32px"}},"text":{"default":{"lineHeight":"32px","fontSize":"var(--business-text-size-20)"}}},
content:"当前小时余量",
unit:"",
showOverflowTooltip:true, 
 },
},
tListCardRatex0x5: {
defaultStyle: {
            default: {"width":"429px","height":"242px","padding":"8px 8px 0 0","position":"unset","left":"13px","top":"98px"},
            
            },
 default: { 
 
data:[{"name":"PM₂.₅","value":"-","unit":"μg/m³","rateName":"环比","rate":"-","status":"-"},{"name":"PM₁₀","value":"-","unit":"μg/m³","rateName":"环比","rate":"-","status":"-"},{"name":"SO₂","value":"-","unit":"μg/m³","rateName":"环比","rate":"-","status":"-"},{"name":"NO₂","value":"-","unit":"μg/m³","rateName":"环比","rate":"-","status":"-"},{"name":"O₃","value":"-","unit":"μg/m³","rateName":"环比","rate":"-","status":"-"},{"name":"CO","value":"-","unit":"mg/m³","rateName":"环比","rate":"-","status":"-"}],
statusList:[{"name":"上升","url":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-01-10/8945b3267f564f9da9779cad921a1013.png"},{"name":"下降","url":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-01-10/f9fc0c7289e24c7f90193ea2aeaf8524.png"},{"name":"持平","url":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-05-08/8fd07b7c614e49ba92cbcd6e324ebff5.svg"}],
dataAlias:{"name":"name","currentValue":"value","unit":"unit","rateName":"rateName","rateValue":"rate","rateUnit":"rateUnit","rateStatus":"status"},
cStyle:{"wrapper":{"default":{"width":"429px","height":"242px","padding":"8px 8px 0 0","position":"unset","left":"13px","top":"98px"}},"itemWrapper":{"default":{"width":"200px","height":"70px","background":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-01-28/65a379ea5abc442f8dd18fc27d03c61d.png)","backgroundPosition":"center center","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","paddingLeft":"8px","paddingRight":"8px"}},"rateValue":{"default":{"maxWidth":"50px","fontSize":"var(--business-num-size-18)","color":"var(--business-white)","whiteSpace":"nowrap","textOverflow":"ellipsis","max-width":"40px","overflow":"hidden","lineHeight":"var(--business-num-size-18)"}},"value":{"default":{"maxWidth":"50px","fontSize":"var(--business-num-size-18)","color":"var(--business-white)","min-width":"auto","max-width":"50px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis","lineHeight":"var(--business-num-size-18)"}},"name":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-text-avianize)"}},"rateName":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-text-avianize)"}},"unit":{"default":{"fontSize":"var(--business-text-size-12)","color":"var(--business-text-avianize)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","max-width":"45px","lineHeight":"normal"}}}, 
 },
},
tTablex0x6: {
defaultStyle: {
            default: {"width":"410px","height":"230px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"},
            
            },
 default: { 
 
height:"230px",
stripe:true,
border:false,
autoScroll:"null",
speed:6,
columns:[{"label":"定位","key":"icon","align":"center","operationList":[],"stateList":[{"name":"true","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"var(--business-position)","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}},{"name":"false","fontStyle":{"color":"","fontSize":"","fontWeight":"normal","padding":"","margin":"","width":"","height":"","lineHeight":"","borderRadius":"","borderWidth":"0PX","borderStyle":"solid","background":"","backgroundImage":"","backgroundSize":"100%"},"imageStyle":{"backgroundImage":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-16/d38cb22aa4624c52888764962d9eb259.svg","marginRight":"","borderRadius":"","width":"14PX","height":"16PX"},"cellStyle":{"background":""}}],"style":{"imageStyle":{"backgroundImage":"var(--business-position)","width":"14PX","height":"16PX","margin":"0","vertical-align":"-3px"},"fontStyle":{"padding":"","background":"","fontSize":"var(--business-text-size-14)"}},"width":"50px","type":"default","stateKey":"iconStatus"},{"label":"站点","type":"default","key":"point_name","stateKey":"","width":"auto","minWidth":"","align":"left","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"0 2px","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)"}}},{"label":"PM₂.₅ ","type":"default","key":"pm25","stateKey":"","width":"68px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(0, 255, 34, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 43, 43, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"无","fontStyle":{"color":"var(--business-unit-icon)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}]},{"label":"PM₂.₅余量","type":"default","key":"rest_pm25","stateKey":"","width":"68px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"fixed":false,"operationList":[{"name":"待处理","id":"todo","fontStyle":{"color":"rgba(5,245,251,1)"}},{"name":"已处理","id":"done","fontStyle":{"color":"rgba(5,245,251,1)"}}]},{"label":"PM₁₀","type":"default","key":"pm10","stateKey":"","width":"68px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"fixed":false,"operationList":[{"name":"待处理","id":"todo","fontStyle":{"color":"rgba(5,245,251,1)"}},{"name":"已处理","id":"done","fontStyle":{"color":"rgba(5,245,251,1)"}}]},{"label":"PM₁₀余量","type":"default","key":"rest_pm10","stateKey":"","width":"68px","minWidth":"","align":"center","headerAlign":"center","sortable":false,"showOverflowTooltip":true,"style":{"imageStyle":{"backgroundImage":"","width":"14PX","height":"16PX","margin":"4px 0 0 0"},"fontStyle":{"margin":"4px 0 0 0","padding":"","fontWeight":"normal","fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}},"stateList":[{"name":"优","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}},{"name":"差","fontStyle":{"color":"rgba(255, 255, 255, 1)","fontSize":"16PX","fontWeight":"normal","padding":"","margin":"","width":"","height":"","borderRadius":"","background":""},"imageStyle":{"margin":"","borderRadius":"","width":"","height":""},"cellStyle":{"background":""}}],"fixed":false,"operationList":[{"name":"待处理","id":"todo","fontStyle":{"color":"rgba(5,245,251,1)"}},{"name":"已处理","id":"done","fontStyle":{"color":"rgba(5,245,251,1)"}}]}],
data:[],
defaultSort:{"prop":"number","order":"ascending"},
cStyle:{"wrapper":{"default":{"width":"410px","height":"230px","paddingTop":"0px","borderBottom":"0px solid ","animationName":"","--el-text-color-secondary":"var(--business-show-bg60)","marginBottom":"12px"}},"headerCell":{"default":{"borderBottom":"1px solid rgba(26,27,31,0)","borderLeft":"0px solid rgba(164,54,144,0)","borderRight":"0px solid rgba(164,54,144,0)","borderTop":"0px solid rgba(164,54,144,0)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","fontWeight":"400","marginRight":"0px","backgroundColor":"var(--table-head-backgroundColor-opaque)","marginBottom":"2px","width":"418px","height":"32px","paddingTop":"4px","paddingBottom":"4px"}},"bodyCell":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","borderBottom":"2px solid rgba(24,37,64,0)","borderLeft":"0px solid rgba(24,37,64,1)","borderRight":"0px solid rgba(24,37,64,1)","borderTop":"2px solid rgba(24,37,64,0)","color":"var(--business-white)","paddingTop":"8px","paddingBottom":"8px","fontSize":"var(--business-text-size-14)"},"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)","cursor":"pointer"}},"stripeBodyCell":{"default":{"backgroundColor":"rgba(233, 98, 25, 0)","borderBottom":"2px solid rgba(23,62,228,0)","paddingTop":"7px","paddingBottom":"7px"}},"headerRowWrapper":{"default":{"backgroundColor":"var(--table-head-backgroundColor-opaque)","color":"var(--business-white)"}},"stripeBodyRow":{"default":{"backgroundColor":"rgba(23, 62, 228, 0)"}},"rowWrapper":{"hover":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"highlightRow":{"default":{"backgroundColor":"var(--table-interval-backgroundColor-opaque)"}},"emptyText":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tDatePickerx0x7: {
defaultStyle: {
            default: {"width":"178px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
            },
 default: { 
 
placeholder:"请选择日期",
startPlaceholder:"开始日期",
endPlaceholder:"结束日期",
type:"datetimeminute",
clearable:false,
rangeSeparator:"-",
'default-date':"",
separator:"-",
readonly:false,
editable:false,
cStyle:{"wrapper":{"default":{"width":"178px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","fontSize":"var(--business-text-size-12)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--business-text-size-12)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
tComponentx0x8: {
defaultStyle: {
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"23px","top":"646px","animationName":""},
            
            },
 default: { 
 
name:"airOverviewQualityRankingTitleComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"23px","top":"646px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/airOverviewQualityRankingTitle",
componentName:"airOverviewQualityRankingTitleComponent",
pageId:"fb88f2e21cfa4e209df12d2517112e7d_6",
pageCode:"airOverviewQualityRankingTitle", 
 },
},
tTabsBasex0x9: {
defaultStyle: {
            default: {"width":"140px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset"},
            
            },
 default: { 
 
data:[{"label":"手动刷新","value":"manual"},{"label":"自动刷新","value":"auto"}],
space:0,
selectedTabVal:"manual",
innerShadowColor:"transparent",
activeInnerShadowColor:"transparent",
alias:{"label":"label","value":"value","disabled":"disabled"},
cStyle:{"wrapper":{"default":{"width":"140px","height":"32px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","animationName":"","backgroundColor":"var(--business-show-bg30)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","box-shadow":"var(--business-show-bg50) 0px 0px 0px 1px inset"}},"itemWrapper":{"default":{"backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","backgroundColor":"rgba(0, 61, 155, 0)","-webkit-background-clip":"border-box","-webkit-text-fill-color":"inherit","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","width":"120px","height":"32px","fontSize":"var(--business-text-size-14)","lineHeight":"32px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","borderLeft":"1px solid rgba(0,61,155,0)","borderTop":"1px solid rgba(0,61,155,0)","borderRight":"1px solid rgba(0,61,155,0)","borderBottom":"1px solid rgba(0,61,155,0)","color":"var(--business-text-avianize)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},"active":{"background":"var(--business-tab-third-active-fill)","backgroundRepeat":"repeat","backgroundSize":"auto","backgroundPosition":"0% 0%","lineHeight":"32px","fontWeight":"400","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","backgroundColor":"rgba(3, 12, 52, 0)","borderLeft":"1px solid var(--business-tab-third-active-border)","borderTop":"1px solid var(--business-tab-third-active-border)","borderRight":"1px solid var(--business-tab-third-active-border)","borderBottom":"1px solid var(--business-tab-third-active-border)","box-shadow":"var(--business-tab-third-active-shadow) 0px 0px 18px 0px inset","color":"var(--business-tab-third-active-text)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","height":"32px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"},"hover":{"backgroundColor":"rgba(0, 61, 155, 0)","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","borderLeft":"1px solid rgba(255,255,255,0)","borderTop":"1px solid rgba(255,255,255,0)","borderRight":"1px solid rgba(255,255,255,0)","borderBottom":"1px solid rgba(255,255,255,0)","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","color":"var(--business-tab-third-active-border)"}}}, 
 },
},
tTextUnitx0x10: {
defaultStyle: {
            default: {"width":"50px","height":"20px","flexDirection":"row","justifyContent":"center","alignItems":"center","top":"19px","left":"388px","position":"unset","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"50px","height":"20px","flexDirection":"row","justifyContent":"center","alignItems":"center","top":"19px","left":"388px","position":"unset","animationName":""}},"text":{"default":{"fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","textAlign":"center","lineHeight":"var(--business-text-size-14)","letterSpacing":"0px","color":"var(--business-white)","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"width":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-12)","lineHeight":"var(--business-text-size-12)","letterSpacing":"0px","textAlign":"center","color":"var(--business-white)","background":"unset","backgroundClip":"unset"}}},
content:"300",
unit:"s",
showOverflowTooltip:true, 
 },
},
tImageBasex0x11: {
defaultStyle: {
            default: {"width":"20px","height":"20px","top":"19px","left":"360px","position":"unset","cursor":"pointer","animationName":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-05-06/e2068acfee6646b4b524f5411f6d49cf.svg)","-webkit-mask-position":"50% 50%","-webkit-mask-repeat":"no-repeat","-webkit-mask-size":"100% 100%","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","color":"","backgroundColor":"var(--business-white)"},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"20px","height":"20px","top":"19px","left":"360px","position":"unset","cursor":"pointer","animationName":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2026-05-06/e2068acfee6646b4b524f5411f6d49cf.svg)","-webkit-mask-position":"50% 50%","-webkit-mask-repeat":"no-repeat","-webkit-mask-size":"100% 100%","backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","color":"","backgroundColor":"var(--business-white)"}}}, 
 },
},
tTextCommonx0x12: {
defaultStyle: {
            default: {"width":"135px","height":"32px","color":"var(--t-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"32px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"281px","top":"353px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"单位：µg/m³",
editable:false,
cStyle:{"wrapper":{"default":{"width":"135px","height":"32px","color":"var(--t-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-14)","lineHeight":"32px","letterSpacing":"0px","textAlign":"right","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"281px","top":"353px","background":"unset","backgroundClip":"unset"}}},
showTitle:true, 
 },
},
});
const initData = () => {
async function getData(){
  await apiRegistry.getRefreshTime.request();
  await apiRegistry.getPageLatestTime.request();
  apiRegistry.getPollutantsList.request();
  apiRegistry.getListData.request();
}
getData()
};
const setDom = () => {
const componentDom = document.querySelector('#t-l-c-realTimeOverviewContent')
const styles = document.createElement('style')
styles.innerHTML = `
.t-table .el-table__body .el-table__row .cell .overflow-ellipsis{
  display: inline-block !important
}
`
componentDom.append(styles)
};
const handleTableClick = (row,column) => {

if (column.label === '定位') {
  const { longitude, latitude } = row;
  rootData.rootSocket.emit(
    'message',  // 固定的消息名称，不能修改
    {
      room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
      type: 'gotoPoint',  // 消息类型名称
      data: {
        longitude,
        latitude
      }
    }
  );
}
};
const changeRefreshType = () => {
// 手动刷新
state.refreshTime = 300
if (state.currentType === 'manual') {
  if(state.timeRef){
    clearInterval(state.timeRef)
  } 
} else if (state.currentType === 'auto') {
  // 自动刷新
  state.timeRef = setInterval(() => {
    if (state.refreshTime === 0) {
       // 调用最新时间接口
       apiRegistry.getRefreshTime.request();
       state.refreshTime = 300
    } else {
      state.refreshTime--
    }
  }, 1000)
}
};
const clearTimer = () => {
if (state.timeRef) {
  clearInterval(state.timeRef)
}
};
const initParams = () => {
watch(() => global.regionaQuery.regionCode, () => {
  if (global.regionaQuery.regionCode) {
    const regionLevelCode = getRegionLevel(global.regionaQuery.regionCode);
    switch (regionLevelCode) {
      case 'province':
      case 'city':
        state.pointType = '12';
        break;
      case 'county':
        state.pointType = '13';
        break;
      default:
        break;
    }
  }
}, {
  deep: true,
  immediate: true,
})
};
const sendTimeMes = (changeTimeType) => {
const timeValue = global.airGlobalVariables.realTimeAlarm.dateValue;
/**
 * changeTimeType: 是否改变了时间类型
 */
// 改变时间轴数据消息
rootData.rootSocket.emit(
  // 固定的消息名称，不能修改
  'message',
  {
    // 键名不能改 房间号，这里为默认值，一般无需修改，如果变量名称自己定义的则需要修改
    room: global.socketRoom,
    // 键名不能改 消息名称
    type: 'changeTimeAxisData',
    // 键名不能改 消息内容 对象格式
    data: {
      sourceType: 'airOverview',
      timeType: state.timeType,
      timeValue: timeValue,
    },
  }
);
// 改变时间类型发送消息-changeTimeType
if (changeTimeType) {
  // 给地图发消息-changeTimeType
  rootData.rootSocket.emit(
    // 固定的消息名称，不能修改
    'message',
    {
      room: global.socketRoom,
      type: 'changeTimeType',
      data: {
        TIME_TYPE: state.timeType,
        POLLUTE: global.air.centerIndexSelect,
        MONITORTIME: timeValue,
      },
    }
  );
} else {
  // 给地图发消息-changeTime
  rootData.rootSocket.emit(
    // 固定的消息名称，不能修改
    'message',
    {
      room: global.socketRoom,
      type: 'changeTime',
      data: {
        MONITORTIME: timeValue,
      },
    }
  );
}

};
const debounceData = () => {
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 2. 定义原始业务函数
function getData() {
  apiRegistry.getRefreshTime.request().then(() => {
    ElementPlus.ElMessage({ message: '刷新成功', type: 'success' });
  }).catch(() => {
    ElementPlus.ElMessage.error('刷新失败');
  });
}

// 3. 创建防抖函数（只创建一次！）
state.debouncedGetData = debounce(getData, 500);
};
const handleRefresh = () => {
// 防抖
state.debouncedGetData()
};
const oncellClick1767681943133 = (row,column,cell,event) => {
// 执行自定义方法
handleTableClick(row,column);
};
const ondateChange1767685262838 = (data) => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'airGlobalVariables.realTimeAlarm.dateValue',
                    value:data,
                    data: {
                      airGlobalVariables:{realTimeAlarm:{dateValue: data}}
                    },
                  });
// 事件交互-请求调用接口
apiRegistry.getPollutantsList.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "changeTime", // 消息名称
data: {"MONITORTIME":data}, // 发送的数据
});
// 执行自定义方法
sendTimeMes(false);
};
const ontabClick1767685311994 = (data) => {
// 设置变量值
state.currentType = data.value;
// 执行自定义方法
changeRefreshType();
};
const onclick1767685710756 = () => {
// 执行自定义方法
handleRefresh();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getPollutantsList: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_CODE":"","POINT_TYPE":"state.pointType","TIME_TYPE":"state.dateType","MONITORTIME":"global.airGlobalVariables.realTimeAlarm.dateValue","REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"d9a5fba06e3f6deb5e0a71defc09eeea"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_CODE":"","POINT_TYPE":state.pointType,"TIME_TYPE":state.dateType,"MONITORTIME":global.airGlobalVariables.realTimeAlarm.dateValue,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"d9a5fba06e3f6deb5e0a71defc09eeea"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_CODE":"","POINT_TYPE":state.pointType,"TIME_TYPE":state.dateType,"MONITORTIME":global.airGlobalVariables.realTimeAlarm.dateValue,"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"d9a5fba06e3f6deb5e0a71defc09eeea"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPollutantsList'] = res.data;
                
     function handleStatus(value) {
  let status = '-'
  if (value > 0) {
    status = '上升'
  } else if (value < 0){
    status = '下降'
  } else if(value == 0){
    status = '持平'
  }
  return status
}
const { data, head } = res.data;
if (head.statusCode === '200') {
  const { PM25, PM10, SO2, NO2, CO, O3, PREV_PM25, PM25_CHAIN_RATIO,  PREV_PM10, PM10_CHAIN_RATIO, PREV_SO2, SO2_CHAIN_RATIO,  PREV_NO2, NO2_CHAIN_RATIO,  PREV_CO, CO_CHAIN_RATIO, PREV_O3, O3_CHAIN_RATIO} = data[0]
  state.pollutantsList = [
    {
      "name": "PM₂.₅",
      "value": PM25 || '-',
      "unit": "μg/m³",
      "rateName": "环比",
      "rate": PREV_PM25 || '-',
      "status": handleStatus(PM25_CHAIN_RATIO)
    },
    {
      "name": "PM₁₀",
      "value": PM10 || '-',
      "unit": "μg/m³",
      "rateName": "环比",
      "rate": PREV_PM10 || '-',
      "status": handleStatus(PM10_CHAIN_RATIO)
    },
    {
      "name": "SO₂",
      "value": SO2 || '-',
      "unit": "μg/m³",
      "rateName": "环比",
      "rate": PREV_SO2 || '-',
      "status": handleStatus(SO2_CHAIN_RATIO)
    },
    {
      "name": "NO₂",
      "value": NO2 || '-',
      "unit": "μg/m³",
      "rateName": "环比",
      "rate": PREV_NO2 || '-',
      "status": handleStatus(NO2_CHAIN_RATIO)
    },
    {
      "name": "O₃",
      "value": O3 || '-',
      "unit": "μg/m³",
      "rateName": "环比",
      "rate": PREV_O3 || '-',
      "status": handleStatus(O3_CHAIN_RATIO)
    },
    {
      "name": "CO",
      "value": CO || '-',
      "unit": "mg/m³",
      "rateName": "环比",
      "rate": PREV_CO || '-',
      "status": handleStatus(CO_CHAIN_RATIO)
    }
  ]
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.pollutantsList = [
  {
    "name": "PM₂.₅",
    "value": '-',
    "unit": "μg/m³",
    "rateName": "环比",
    "rate": '-',
    "status": '持平'
  },
  {
    "name": "PM10",
    "value": '-',
    "unit": "μg/m³",
    "rateName": "环比",
    "rate": '-',
    "status": '持平'
  },
  {
    "name": "SO₂",
    "value": '-',
    "unit": "μg/m³",
    "rateName": "环比",
    "rate": '-',
    "status": '持平'
  },
  {
    "name": "NO₂",
    "value": '-',
    "unit": "μg/m³",
    "rateName": "环比",
    "rate": '-',
    "status": '持平'
  },
  {
    "name": "O₃",
    "value": '-',
    "unit": "μg/m³",
    "rateName": "环比",
    "rate": '-',
    "status": '持平'
  },
  {
    "name": "CO",
    "value": '-',
    "unit": "mg/m³",
    "rateName": "环比",
    "rate": '-',
    "status": '持平'
  }
]
      reject(error);
    });
  });
},
              },
// 接口函数
 getListData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"REGION_CODE":"global.regionaQuery.regionCode","POINT_TYPE":"0","interfaceId":"ba3fe696f4ec6273f6b533dd18874dc0"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_CODE":global.regionaQuery.regionCode,"POINT_TYPE":"0","interfaceId":"ba3fe696f4ec6273f6b533dd18874dc0"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"REGION_CODE":global.regionaQuery.regionCode,"POINT_TYPE":"0","interfaceId":"ba3fe696f4ec6273f6b533dd18874dc0"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getListData'] = res.data;
                
     if(res?.data?.data?.length){
  const { data } = res?.data
  state.listData = data.map(item =>{
    return{
      ...item,
      // "PM25": item.PM25 + 'µg/m³',
      // "REST_PM25": item.REST_PM25 + 'µg/m³',
      // "PM10": item.PM10 + 'µg/m³',
      // "REST_PM10": item.REST_PM10 + 'µg/m³'
    }
  })
}else{
  state.listData = [];
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
 getLatestTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"REGION_CODE":"global.regionaQuery.regionCode","interfaceId":"ba5175c6cda29ea16889a79d7ad6c464"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"ba5175c6cda29ea16889a79d7ad6c464"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"REGION_CODE":global.regionaQuery.regionCode,"interfaceId":"ba5175c6cda29ea16889a79d7ad6c464"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  global.airGlobalVariables.realTimeAlarm.dateValue = data.max_start_time_str.slice(0,16)
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
 getRefreshTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_TYPE":"state.pointType","TIME_TYPE":"5minute","interfaceId":"66ad2ebe9d660295568b05187f34e133"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_TYPE":state.pointType,"TIME_TYPE":"5minute","interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_TYPE":state.pointType,"TIME_TYPE":"5minute","interfaceId":"66ad2ebe9d660295568b05187f34e133"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getRefreshTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  global.airGlobalVariables.realTimeAlarm.dateValue = data.MONITORTIME
  sendTimeMes(true);
  apiRegistry.getPollutantsList.request();
}else{
  global.airGlobalVariables.realTimeAlarm.dateValue = ''
}
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'changeTime',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      'MONITORTIME': global.airGlobalVariables.realTimeAlarm.dateValue,
    }
  }
);
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
},
              },
// 接口函数
 getPageLatestTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"POINT_TYPE":"0","TIME_TYPE":"state.dateType","interfaceId":"66ad2ebe9d660295568b05187f34e133"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"POINT_TYPE":"0","TIME_TYPE":state.dateType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"POINT_TYPE":"0","TIME_TYPE":state.dateType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getPageLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
 state.dateValue = data.MONITORTIME
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
watch(() => [state.pointType,global.airGlobalVariables.realTimeAlarm.dateValue], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getPollutantsList', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [global.regionaQuery.regionCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getLatestTime', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => ["5minute"], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getRefreshTime', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-realTimeOverviewContent', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initParams();
// 执行自定义方法
initData();
// 执行自定义方法
debounceData();
onMounted(() => {
setPageScale('t-l-c-realTimeOverviewContent', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
setDom();
});
onBeforeUnmount(() => {
// 执行自定义方法
clearTimer();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tTextUnitx0x3ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x3.default, componentState.tTextUnitx0x3?.[state.screenSize]));

 const tTextUnitx0x4ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x4.default, componentState.tTextUnitx0x4?.[state.screenSize]));

 const tListCardRatex0x5ComputedData = computed(() => _.merge({}, componentState.tListCardRatex0x5.default, componentState.tListCardRatex0x5?.[state.screenSize]));

 const tTablex0x6ComputedData = computed(() => _.merge({}, componentState.tTablex0x6.default, componentState.tTablex0x6?.[state.screenSize]));

 const tDatePickerx0x7ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x7.default, componentState.tDatePickerx0x7?.[state.screenSize]));

 const tComponentx0x8ComputedData = computed(() => _.merge({}, componentState.tComponentx0x8.default, componentState.tComponentx0x8?.[state.screenSize]));

 const tTabsBasex0x9ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x9.default, componentState.tTabsBasex0x9?.[state.screenSize]));

 const tTextUnitx0x10ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x10.default, componentState.tTextUnitx0x10?.[state.screenSize]));

 const tImageBasex0x11ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x11.default, componentState.tImageBasex0x11?.[state.screenSize]));

 const tTextCommonx0x12ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x12.default, componentState.tTextCommonx0x12?.[state.screenSize]));

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
tComponentx0x1ComputedData,
tComponentx0x2ComputedData,
tTextUnitx0x3ComputedData,
tTextUnitx0x4ComputedData,
tListCardRatex0x5ComputedData,
tTablex0x6ComputedData,
tDatePickerx0x7ComputedData,
tComponentx0x8ComputedData,
tTabsBasex0x9ComputedData,
tTextUnitx0x10ComputedData,
tImageBasex0x11ComputedData,
tTextCommonx0x12ComputedData,
oncellClick1767681943133,
ondateChange1767685262838,
ontabClick1767685311994,
onclick1767685710756,
};
},
};