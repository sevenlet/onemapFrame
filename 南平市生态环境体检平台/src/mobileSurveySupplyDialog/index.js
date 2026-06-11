window.mobileSurveySupplyDialogComponent = {
template: 
`<div id="t-l-c-mobileSurveySupplyDialog" class="t-l-c-mobileSurveySupplyDialog" >` +
`<t-component id="t-component-9e87.1d809558f" class="mobileSurveySupplyDialog-t-component-0-0"  :src="tComponentx0x0ComputedData.src" :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :component-name="tComponentx0x0ComputedData.componentName" :page-id="tComponentx0x0ComputedData.pageId" :page-code="tComponentx0x0ComputedData.pageCode">` +
`</t-component>` +
`<t-rect id="t-rect-1383.917add424" class="mobileSurveySupplyDialog-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-21b6.45c6bc002" class="mobileSurveySupplyDialog-t-text-0-2"  :label="replaceCssVariables(filterData(state.baseInfo.VEHICLE_NAME, componentPropBindingMap?.['t-text-21b6.45c6bc002']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-1f5e.d7f849edd" class="mobileSurveySupplyDialog-t-rect-0-3"  :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label">` +
`</t-rect>` +
`<t-text id="t-text-de28.0c392f0a9" class="mobileSurveySupplyDialog-t-text-0-4"  :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle" :label="replaceCssVariables(filterData(state.carData.VEHICLE_NAME, componentPropBindingMap?.['t-text-de28.0c392f0a9']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-text>` +
`<t-row id="t-row-9345.48748282e" class="mobileSurveySupplyDialog-t-row-0-5"  :c-style="tRowx0x5ComputedData.cStyle" :gutter="tRowx0x5ComputedData.gutter" :justify="tRowx0x5ComputedData.justify" :align="tRowx0x5ComputedData.align">` +
`<t-text id="t-text-b1ec.826254365" class="mobileSurveySupplyDialog-t-text-0-5-0"  :label="tTextx0x5x0ComputedData.label" :editable="tTextx0x5x0ComputedData.editable" :c-style="tTextx0x5x0ComputedData.cStyle" @click="onclick1766394251098">` +
`</t-text>` +
`<t-text id="t-text-c9ea.525b8151a" class="mobileSurveySupplyDialog-t-text-0-5-1"  :label="tTextx0x5x1ComputedData.label" :editable="tTextx0x5x1ComputedData.editable" :c-style="tTextx0x5x1ComputedData.cStyle">` +
`</t-text>` +
`</t-row>` +
`<t-image-base id="t-image-base-c9a7.867dae324" class="mobileSurveySupplyDialog-t-image-base-0-6"  :fit="tImageBasex0x6ComputedData.fit" :src="tImageBasex0x6ComputedData.src" :c-style="tImageBasex0x6ComputedData.cStyle" @click="onclick1718723586167">` +
`</t-image-base>` +
`<t-swiper-base id="t-swiper-base-b9a2.1390771de" class="mobileSurveySupplyDialog-t-swiper-base-0-7"  :data="tSwiperBasex0x7ComputedData.data" :arrow="tSwiperBasex0x7ComputedData.arrow" :c-style="tSwiperBasex0x7ComputedData.cStyle" :series-setting="tSwiperBasex0x7ComputedData.seriesSetting" :autoplay="tSwiperBasex0x7ComputedData.autoplay">` +
`</t-swiper-base>` +
`<t-rect id="t-rect-46f3.96aef9b27" class="mobileSurveySupplyDialog-t-rect-0-8"  :active="tRectx0x8ComputedData.active" :c-style="tRectx0x8ComputedData.cStyle" :tip="tRectx0x8ComputedData.tip" :label="tRectx0x8ComputedData.label" @click="onclick1718710562227">` +
`</t-rect>` +
`<t-rect id="t-rect-877f.a4447ae46" class="mobileSurveySupplyDialog-t-rect-0-9"  :active="tRectx0x9ComputedData.active" :c-style="tRectx0x9ComputedData.cStyle" :tip="tRectx0x9ComputedData.tip" :label="tRectx0x9ComputedData.label" @click="onclick1718710614305">` +
`</t-rect>` +
`<t-rect id="t-rect-9ef4.3a76fec4b" class="mobileSurveySupplyDialog-t-rect-0-10"  :active="tRectx0x10ComputedData.active" :c-style="tRectx0x10ComputedData.cStyle" :tip="tRectx0x10ComputedData.tip" :label="tRectx0x10ComputedData.label" @click="onclick1718710697775">` +
`</t-rect>` +
`<t-rect id="t-rect-4749.bbb6d739" class="mobileSurveySupplyDialog-t-rect-0-11"  :active="tRectx0x11ComputedData.active" :c-style="tRectx0x11ComputedData.cStyle" :tip="tRectx0x11ComputedData.tip" :label="tRectx0x11ComputedData.label" @click="onclick1744726085832_0_0">` +
`</t-rect>` +
`<t-text id="t-text-df00.53e56b9cc" class="mobileSurveySupplyDialog-t-text-0-12"  :editable="tTextx0x12ComputedData.editable" :c-style="tTextx0x12ComputedData.cStyle" :label="tTextx0x12ComputedData.label">` +
`</t-text>` +
`<t-text id="t-text-58b5.1c58f2d4e" class="mobileSurveySupplyDialog-t-text-0-13"  :editable="tTextx0x13ComputedData.editable" :c-style="tTextx0x13ComputedData.cStyle" :label="tTextx0x13ComputedData.label">` +
`</t-text>` +
`<t-text id="t-text-bd02.89b9d5ce9" class="mobileSurveySupplyDialog-t-text-0-14"  :editable="tTextx0x14ComputedData.editable" :c-style="tTextx0x14ComputedData.cStyle" :label="tTextx0x14ComputedData.label">` +
`</t-text>` +
`<t-text id="t-text-dc68.e127a0ee8" class="mobileSurveySupplyDialog-t-text-0-15"  :editable="tTextx0x15ComputedData.editable" :c-style="tTextx0x15ComputedData.cStyle" :label="tTextx0x15ComputedData.label">` +
`</t-text>` +
`<t-text id="t-text-50b9.7311c1483" class="mobileSurveySupplyDialog-t-text-0-16"  :editable="tTextx0x16ComputedData.editable" :c-style="tTextx0x16ComputedData.cStyle" :label="tTextx0x16ComputedData.label">` +
`</t-text>` +
`<t-text id="t-text-64d2.64de8994c" class="mobileSurveySupplyDialog-t-text-0-17"  :editable="tTextx0x17ComputedData.editable" :c-style="tTextx0x17ComputedData.cStyle" :label="replaceCssVariables(filterData(state.baseInfo.VMN, componentPropBindingMap?.['t-text-64d2.64de8994c']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-text>` +
`<t-text id="t-text-4cb3.988ffa041" class="mobileSurveySupplyDialog-t-text-0-18"  :editable="tTextx0x18ComputedData.editable" :c-style="tTextx0x18ComputedData.cStyle" :label="replaceCssVariables(filterData(state.baseInfo.status_str, componentPropBindingMap?.['t-text-4cb3.988ffa041']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-text>` +
`<t-text id="t-text-6ef3.5a4468139" class="mobileSurveySupplyDialog-t-text-0-19"  :editable="tTextx0x19ComputedData.editable" :c-style="tTextx0x19ComputedData.cStyle" :label="replaceCssVariables(filterData(state.baseInfo.address, componentPropBindingMap?.['t-text-6ef3.5a4468139']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-text>` +
`<t-text id="t-text-3379.950b2f8b1" class="mobileSurveySupplyDialog-t-text-0-20"  :editable="tTextx0x20ComputedData.editable" :c-style="tTextx0x20ComputedData.cStyle" :label="tTextx0x20ComputedData.label">` +
`</t-text>` +
`<t-text id="t-text-8dea.6876c3cf5" class="mobileSurveySupplyDialog-t-text-0-21"  :editable="tTextx0x21ComputedData.editable" :c-style="tTextx0x21ComputedData.cStyle" :label="replaceCssVariables(filterData(state.START_TIME, componentPropBindingMap?.['t-text-8dea.6876c3cf5']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-text>` +
`<t-date-picker id="t-date-picker-1d9b.4e3492dbf" class="mobileSurveySupplyDialog-t-date-picker-0-22"  :placeholder="tDatePickerx0x22ComputedData.placeholder" :start-placeholder="tDatePickerx0x22ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x22ComputedData.endPlaceholder" :type="tDatePickerx0x22ComputedData.type" :clearable="tDatePickerx0x22ComputedData.clearable" :range-separator="tDatePickerx0x22ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.START_TIME, componentPropBindingMap?.['t-date-picker-1d9b.4e3492dbf']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x22ComputedData.separator" :readonly="tDatePickerx0x22ComputedData.readonly" :editable="tDatePickerx0x22ComputedData.editable" :c-style="tDatePickerx0x22ComputedData.cStyle" :is-disabled-front="tDatePickerx0x22ComputedData.isDisabledFront" :disabled-date="tDatePickerx0x22ComputedData.disabledDate" @date-change="ondateChange1766384591692_0_0">` +
`</t-date-picker>` +
`<t-date-picker id="t-date-picker-2c7a.89155abff" class="mobileSurveySupplyDialog-t-date-picker-0-23"  :placeholder="tDatePickerx0x23ComputedData.placeholder" :start-placeholder="tDatePickerx0x23ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x23ComputedData.endPlaceholder" :type="tDatePickerx0x23ComputedData.type" :clearable="tDatePickerx0x23ComputedData.clearable" :range-separator="tDatePickerx0x23ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.END_TIME, componentPropBindingMap?.['t-date-picker-2c7a.89155abff']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x23ComputedData.separator" :readonly="tDatePickerx0x23ComputedData.readonly" :editable="tDatePickerx0x23ComputedData.editable" :c-style="tDatePickerx0x23ComputedData.cStyle" :is-disabled-front="tDatePickerx0x23ComputedData.isDisabledFront" :disabled-date="tDatePickerx0x23ComputedData.disabledDate" @date-change="ondateChange1766384679495_0_0">` +
`</t-date-picker>` +
`<t-text-unit id="t-text-unit-a551.0986746a7" class="mobileSurveySupplyDialog-t-text-unit-0-24"  :c-style="tTextUnitx0x24ComputedData.cStyle" :justify="tTextUnitx0x24ComputedData.justify" :align="tTextUnitx0x24ComputedData.align" :content="tTextUnitx0x24ComputedData.content" :unit="tTextUnitx0x24ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x24ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-d00d.7dd5a437" class="mobileSurveySupplyDialog-t-text-unit-0-25"  :c-style="tTextUnitx0x25ComputedData.cStyle" :content="replaceCssVariables(filterData(state.baseInfo.speed, componentPropBindingMap?.['t-text-unit-d00d.7dd5a437']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x25ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x25ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-component id="t-component-10cc.9e9cad2fd" class="mobileSurveySupplyDialog-t-component-0-26"  :name="tComponentx0x26ComputedData.name" :loading="tComponentx0x26ComputedData.loading" :c-style="tComponentx0x26ComputedData.cStyle" :src="tComponentx0x26ComputedData.src" :component-name="tComponentx0x26ComputedData.componentName" :page-id="tComponentx0x26ComputedData.pageId" :page-code="tComponentx0x26ComputedData.pageCode">` +
`</t-component>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-9e87.1d809558f":{"attributeName":"tComponentx0x0","src":{"filters":[]},"name":{"filters":[]},"cStyle":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-rect-1383.917add424":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-21b6.45c6bc002":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-1f5e.d7f849edd":{"attributeName":"tRectx0x3","active":{"filters":[]},"cStyle":{"filters":[]},"tip":{"filters":[]},"label":{"filters":[]}},"t-text-de28.0c392f0a9":{"attributeName":"tTextx0x4","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-row-9345.48748282e":{"attributeName":"tRowx0x5","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-b1ec.826254365":{"attributeName":"tTextx0x5x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-c9ea.525b8151a":{"attributeName":"tTextx0x5x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-c9a7.867dae324":{"attributeName":"tImageBasex0x6","fit":{"filters":[]},"src":{"filters":[]},"cStyle":{"filters":[]}},"t-swiper-base-b9a2.1390771de":{"attributeName":"tSwiperBasex0x7","data":{"filters":[]},"arrow":{"filters":[]},"cStyle":{"filters":[]},"seriesSetting":{"filters":[]},"autoplay":{"filters":[]}},"t-rect-46f3.96aef9b27":{"attributeName":"tRectx0x8","active":{"filters":[]},"cStyle":{"filters":[]},"tip":{"filters":[]},"label":{"filters":[]}},"t-rect-877f.a4447ae46":{"attributeName":"tRectx0x9","active":{"filters":[]},"cStyle":{"filters":[]},"tip":{"filters":[]},"label":{"filters":[]}},"t-rect-9ef4.3a76fec4b":{"attributeName":"tRectx0x10","active":{"filters":[]},"cStyle":{"filters":[]},"tip":{"filters":[]},"label":{"filters":[]}},"t-rect-4749.bbb6d739":{"attributeName":"tRectx0x11","active":{"filters":[]},"cStyle":{"filters":[]},"tip":{"filters":[]},"label":{"filters":[]}},"t-text-df00.53e56b9cc":{"attributeName":"tTextx0x12","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-58b5.1c58f2d4e":{"attributeName":"tTextx0x13","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-bd02.89b9d5ce9":{"attributeName":"tTextx0x14","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-dc68.e127a0ee8":{"attributeName":"tTextx0x15","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-50b9.7311c1483":{"attributeName":"tTextx0x16","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-64d2.64de8994c":{"attributeName":"tTextx0x17","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-4cb3.988ffa041":{"attributeName":"tTextx0x18","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-6ef3.5a4468139":{"attributeName":"tTextx0x19","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-3379.950b2f8b1":{"attributeName":"tTextx0x20","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-8dea.6876c3cf5":{"attributeName":"tTextx0x21","editable":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-date-picker-1d9b.4e3492dbf":{"attributeName":"tDatePickerx0x22","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-date-picker-2c7a.89155abff":{"attributeName":"tDatePickerx0x23","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]},"isDisabledFront":{"filters":[]},"disabledDate":{"filters":[]}},"t-text-unit-a551.0986746a7":{"attributeName":"tTextUnitx0x24","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-d00d.7dd5a437":{"attributeName":"tTextUnitx0x25","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-component-10cc.9e9cad2fd":{"attributeName":"tComponentx0x26","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}}};
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
   firstPlay: true,
   baseInfo: {"VMN":"-","VEHICLE_NAME":"-","speed":"-","status_str":"-","address":"-"},
   carImgArr: [],
   searchTimer: {},
   MIN_TIME: "",
   MAX_TIME: "",
   currentIndex: 0,
   currentData: {},
   isPlay: false,
   imagePath: "/legopro-generated-apps/lego_file/res/2023-12-11/97390acbab3a4cb4a2930625ca16ed43.svg",
   activeCar: "",
   carDataList: [],
   isIframe: false,
   speedValue: 2000,
   currentTime: "",
   timeList: [],
   chartData: [],
   monitorData: [],
   speedType: "fast",
   trackType: "10",
   END_TIME: "",
   START_TIME: "",
   carData: {"VEHICLE_NAME":"","DEVICE_ID":"","VMN":""},
   dateType: "",
   dateRange: {"start":"","end":"","value":[]},
   maxTimeValue: "",
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
            default: {"animationName":"","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","top":"479px","left":"25px","width":"400px","position":"unset","height":"32px"},
            
            },
 default: { 
 
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/titleFirstBg",
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"animationName":"","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","top":"479px","left":"25px","width":"400px","position":"unset","height":"32px"}}},
componentName:"titleFirstBgComponent",
pageId:"11294a0cd1654489a15355ed663e73ad_6",
pageCode:"titleFirstBg", 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"56px","left":"1px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"56px","left":"1px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"338px","height":"23px","color":"rgba(255, 255, 255, 0.9)","fontSize":"18px","borderLeft":"1px none rgba(255,255,255,1)","lineHeight":"24px","paddingLeft":"20px","top":"83.5px","left":"61px","position":"unset","animationName":"","marginLeft":"20px"},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"338px","height":"23px","color":"rgba(255, 255, 255, 0.9)","fontSize":"18px","borderLeft":"1px none rgba(255,255,255,1)","lineHeight":"24px","paddingLeft":"20px","top":"83.5px","left":"61px","position":"unset","animationName":"","marginLeft":"20px"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"-webkit-mask-position":"","backgroundColor":"","backgroundImage":"linear-gradient(0deg,rgba(0, 213, 255, 0.001) 0%,rgba(0, 213, 255, 0.1) 0.09006809543918919%,rgba(78, 102, 255, 0.1) 100%)","-webkit-mask-repeat":"","borderTop":"1px solid rgba(100,157,225,0.3)","-webkit-mask-size":"","borderLeft":"1px solid rgba(100,157,225,0.3)","top":"75px","left":"18px","borderRight":"1px solid rgba(100,157,225,0.3)","width":"410px","backgroundSize":"auto","position":"unset","-webkit-mask-image":"","backgroundPosition":"0% 0%","backgroundRepeat":"repeat","borderBottom":"1px solid rgba(100,157,225,0.3)","height":"40px"},
            
            },
 default: { 
 
active:false,
cStyle:{"wrapper":{"default":{"-webkit-mask-position":"","backgroundColor":"","backgroundImage":"linear-gradient(0deg,rgba(0, 213, 255, 0.001) 0%,rgba(0, 213, 255, 0.1) 0.09006809543918919%,rgba(78, 102, 255, 0.1) 100%)","-webkit-mask-repeat":"","borderTop":"1px solid rgba(100,157,225,0.3)","-webkit-mask-size":"","borderLeft":"1px solid rgba(100,157,225,0.3)","top":"75px","left":"18px","borderRight":"1px solid rgba(100,157,225,0.3)","width":"410px","backgroundSize":"auto","position":"unset","-webkit-mask-image":"","backgroundPosition":"0% 0%","backgroundRepeat":"repeat","borderBottom":"1px solid rgba(100,157,225,0.3)","height":"40px"}}},
tip:false,
label:"", 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"color":"rgba(61, 253, 245, 1)","top":"146px","left":"-367px","width":"254px","fontSize":"14px","lineHeight":"16px","position":"unset","height":"19px"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"color":"rgba(61, 253, 245, 1)","top":"146px","left":"-367px","width":"254px","fontSize":"14px","lineHeight":"16px","position":"unset","height":"19px"}}},
label:"", 
 },
},
tRowx0x5: {
defaultStyle: {
            default: {"width":"413px","height":"54px","top":"0px","left":"16px","position":"unset","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"413px","height":"54px","top":"0px","left":"16px","position":"unset","animationName":""}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x5x0: {
defaultStyle: {
            default: {"width":"43px","height":"18px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"29px","left":"24px","backgroundColor":"rgba(255, 255, 255, 1)","position":"unset","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"43px","height":"18px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"29px","left":"24px","backgroundColor":"rgba(255, 255, 255, 1)","position":"unset","cursor":"pointer","animationName":""},"hover":{"backgroundColor":"var(--business-theme)"}}}, 
 },
},
tTextx0x5x1: {
defaultStyle: {
            default: {"width":"auto","height":"23px","color":"rgba(255, 255, 255, 0.9)","fontSize":"18px","borderLeft":"1px solid rgba(255,255,255,1)","lineHeight":"24px","paddingLeft":"20px","top":"28px","left":"83px","position":"unset","animationName":"","marginLeft":"20px"},
            
            },
 default: { 
 
label:"巡查物资车轨迹",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"23px","color":"rgba(255, 255, 255, 0.9)","fontSize":"18px","borderLeft":"1px solid rgba(255,255,255,1)","lineHeight":"24px","paddingLeft":"20px","top":"28px","left":"83px","position":"unset","animationName":"","marginLeft":"20px"}}}, 
 },
},
tImageBasex0x6: {
defaultStyle: {
            default: {"top":"80.5px","color":"rgba(245, 245, 245, 1)","left":"24px","width":"36px","position":"unset","height":"29px"},
            
            },
 default: { 
 
fit:"fill",
src:"/legopro-generated-apps/lego_file/res/2022-11-01/e076b56414ec40ad96e42b9312185820.svg",
cStyle:{"wrapper":{"default":{"top":"80.5px","color":"rgba(245, 245, 245, 1)","left":"24px","width":"36px","position":"unset","height":"29px"}}}, 
 },
},
tSwiperBasex0x7: {
defaultStyle: {
            default: {"top":"134px","left":"18px","width":"410px","position":"unset","height":"153px"},
            
            },
 default: { 
 
data:[{"src":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-12-24/8355dd23e8f047ec96a8c8344c9b98d1.jpg"}],
arrow:"always",
cStyle:{"itemWrapper":{"default":{"height":"100%"}},"wrapper":{"default":{"top":"134px","left":"18px","width":"410px","position":"unset","height":"153px"}}},
seriesSetting:{"data":{"dataKey":"src","nameKey":"desc"},"interval":3000},
autoplay:false, 
 },
},
tRectx0x8: {
defaultStyle: {
            default: {"cursor":"pointer","-webkit-mask-position":"","animationName":"","color":"rgba(255, 255, 255, 0.9)","backgroundImage":"var(--t-normal-button)","-webkit-mask-repeat":"","borderTop":"0px none rgb(23,62,228)","borderLeft":"0px none rgb(23,62,228)","-webkit-mask-size":"","top":"635px","left":"219px","borderRight":"0px none rgb(23,62,228)","width":"60px","backgroundSize":"cover","fontSize":"var(--t-font-size-15)","position":"unset","-webkit-mask-image":"","backgroundPosition":"50% 50%","borderBottom":"0px none rgb(23,62,228)","backgroundRepeat":"no-repeat","height":"24px","background":"rgba(  0,115,203, 1)","fillType":"color"},
            
            },
 default: { 
 
active:false,
cStyle:{"wrapper":{"hover":{"-webkit-mask-size":"","-webkit-mask-position":"","backgroundImage":"var(--t-search-active)","-webkit-mask-repeat":"","backgroundSize":"66px 34px","-webkit-mask-image":"","backgroundPosition":"50% 50%","backgroundRepeat":"no-repeat"},"default":{"cursor":"pointer","-webkit-mask-position":"","animationName":"","color":"rgba(255, 255, 255, 0.9)","backgroundImage":"var(--t-normal-button)","-webkit-mask-repeat":"","borderTop":"0px none rgb(23,62,228)","borderLeft":"0px none rgb(23,62,228)","-webkit-mask-size":"","top":"635px","left":"219px","borderRight":"0px none rgb(23,62,228)","width":"60px","backgroundSize":"cover","fontSize":"var(--t-font-size-15)","position":"unset","-webkit-mask-image":"","backgroundPosition":"50% 50%","borderBottom":"0px none rgb(23,62,228)","backgroundRepeat":"no-repeat","height":"24px","background":"rgba(  0,115,203, 1)","fillType":"color"}}},
tip:false,
label:"前一条", 
 },
},
tRectx0x9: {
defaultStyle: {
            default: {"cursor":"pointer","-webkit-mask-position":"","animationName":"","color":"rgba(255, 255, 255, 0.9)","backgroundImage":"var(--t-normal-button)","-webkit-mask-repeat":"","borderTop":"0px none rgb(23,62,228)","borderLeft":"0px none rgb(23,62,228)","-webkit-mask-size":"","top":"635px","left":"288px","borderRight":"0px none rgb(23,62,228)","width":"60px","backgroundSize":"cover","fontSize":"var(--t-font-size-15)","position":"unset","-webkit-mask-image":"","backgroundPosition":"50% 50%","borderBottom":"0px none rgb(23,62,228)","backgroundRepeat":"no-repeat","height":"24px","background":"rgba(  0,115,203, 1)","fillType":"color"},
            
            },
 default: { 
 
active:false,
cStyle:{"wrapper":{"hover":{"-webkit-mask-size":"","-webkit-mask-position":"","backgroundImage":"var(--t-search-active)","-webkit-mask-repeat":"","backgroundSize":"66px 34px","-webkit-mask-image":"","backgroundPosition":"50% 50%","backgroundRepeat":"no-repeat"},"default":{"cursor":"pointer","-webkit-mask-position":"","animationName":"","color":"rgba(255, 255, 255, 0.9)","backgroundImage":"var(--t-normal-button)","-webkit-mask-repeat":"","borderTop":"0px none rgb(23,62,228)","borderLeft":"0px none rgb(23,62,228)","-webkit-mask-size":"","top":"635px","left":"288px","borderRight":"0px none rgb(23,62,228)","width":"60px","backgroundSize":"cover","fontSize":"var(--t-font-size-15)","position":"unset","-webkit-mask-image":"","backgroundPosition":"50% 50%","borderBottom":"0px none rgb(23,62,228)","backgroundRepeat":"no-repeat","height":"24px","background":"rgba(  0,115,203, 1)","fillType":"color"}}},
tip:false,
label:"后一条", 
 },
},
tRectx0x10: {
defaultStyle: {
            default: {"cursor":"pointer","-webkit-mask-position":"","animationName":"","color":"rgba(255, 255, 255, 0.9)","backgroundImage":"var(--t-normal-button)","-webkit-mask-repeat":"","borderTop":"0px none rgb(23,62,228)","borderLeft":"0px none rgb(23,62,228)","-webkit-mask-size":"","top":"635px","left":"357px","borderRight":"0px none rgb(23,62,228)","width":"60px","backgroundSize":"cover","fontSize":"var(--t-font-size-15)","position":"unset","-webkit-mask-image":"","backgroundPosition":"50% 50%","borderBottom":"0px none rgb(23,62,228)","backgroundRepeat":"no-repeat","height":"24px","background":"rgba(  0,115,203, 1)","fillType":"color"},
            
            },
 default: { 
 
active:false,
cStyle:{"wrapper":{"hover":{"-webkit-mask-size":"","-webkit-mask-position":"","backgroundImage":"var(--t-search-active)","-webkit-mask-repeat":"","backgroundSize":"66px 34px","-webkit-mask-image":"","backgroundPosition":"50% 50%","backgroundRepeat":"no-repeat"},"default":{"cursor":"pointer","-webkit-mask-position":"","animationName":"","color":"rgba(255, 255, 255, 0.9)","backgroundImage":"var(--t-normal-button)","-webkit-mask-repeat":"","borderTop":"0px none rgb(23,62,228)","borderLeft":"0px none rgb(23,62,228)","-webkit-mask-size":"","top":"635px","left":"357px","borderRight":"0px none rgb(23,62,228)","width":"60px","backgroundSize":"cover","fontSize":"var(--t-font-size-15)","position":"unset","-webkit-mask-image":"","backgroundPosition":"50% 50%","borderBottom":"0px none rgb(23,62,228)","backgroundRepeat":"no-repeat","height":"24px","background":"rgba(  0,115,203, 1)","fillType":"color"}}},
tip:false,
label:"查询", 
 },
},
tRectx0x11: {
defaultStyle: {
            default: {"cursor":"pointer","-webkit-mask-position":"","animationName":"","color":"rgba(255, 255, 255, 0.9)","backgroundImage":"var(--t-normal-button)","-webkit-mask-repeat":"","borderTop":"0px none rgb(23,62,228)","borderLeft":"0px none rgb(23,62,228)","-webkit-mask-size":"","top":"635px","left":"148px","borderRight":"0px none rgb(23,62,228)","width":"60px","backgroundSize":"cover","fontSize":"var(--t-font-size-15)","position":"unset","-webkit-mask-image":"","backgroundPosition":"50% 50%","borderBottom":"0px none rgb(23,62,228)","backgroundRepeat":"no-repeat","height":"24px","background":"rgba(  0,115,203, 1)","fillType":"color"},
            
            },
 default: { 
 
active:false,
cStyle:{"wrapper":{"hover":{"-webkit-mask-size":"","-webkit-mask-position":"","backgroundImage":"var(--t-search-active)","-webkit-mask-repeat":"","backgroundSize":"66px 34px","-webkit-mask-image":"","backgroundPosition":"50% 50%","backgroundRepeat":"no-repeat"},"default":{"cursor":"pointer","-webkit-mask-position":"","animationName":"","color":"rgba(255, 255, 255, 0.9)","backgroundImage":"var(--t-normal-button)","-webkit-mask-repeat":"","borderTop":"0px none rgb(23,62,228)","borderLeft":"0px none rgb(23,62,228)","-webkit-mask-size":"","top":"635px","left":"148px","borderRight":"0px none rgb(23,62,228)","width":"60px","backgroundSize":"cover","fontSize":"var(--t-font-size-15)","position":"unset","-webkit-mask-image":"","backgroundPosition":"50% 50%","borderBottom":"0px none rgb(23,62,228)","backgroundRepeat":"no-repeat","height":"24px","background":"rgba(  0,115,203, 1)","fillType":"color"}}},
tip:false,
label:"重置", 
 },
},
tTextx0x12: {
defaultStyle: {
            default: {"color":"rgba(255, 255, 255, 0.9)","top":"536px","left":"22px","width":"96px","fontSize":"14px","lineHeight":"14px","position":"unset","height":"19px"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"color":"rgba(255, 255, 255, 0.9)","top":"536px","left":"22px","width":"96px","fontSize":"14px","lineHeight":"14px","position":"unset","height":"19px"}}},
label:"开始时间", 
 },
},
tTextx0x13: {
defaultStyle: {
            default: {"color":"rgba(255, 255, 255, 0.9)","top":"311px","left":"19px","width":"70px","fontSize":"14px","lineHeight":"14px","position":"unset","height":"19px","animationName":""},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"color":"rgba(255, 255, 255, 0.9)","top":"311px","left":"19px","width":"70px","fontSize":"14px","lineHeight":"14px","position":"unset","height":"19px","animationName":""}}},
label:"车辆标识", 
 },
},
tTextx0x14: {
defaultStyle: {
            default: {"color":"rgba(255, 255, 255, 0.9)","top":"348px","left":"20px","width":"70px","fontSize":"14px","lineHeight":"14px","position":"unset","height":"19px","animationName":""},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"color":"rgba(255, 255, 255, 0.9)","top":"348px","left":"20px","width":"70px","fontSize":"14px","lineHeight":"14px","position":"unset","height":"19px","animationName":""}}},
label:"行驶速度", 
 },
},
tTextx0x15: {
defaultStyle: {
            default: {"color":"rgba(255, 255, 255, 0.9)","top":"385px","left":"21px","width":"70px","fontSize":"14px","lineHeight":"14px","position":"unset","height":"19px","animationName":""},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"color":"rgba(255, 255, 255, 0.9)","top":"385px","left":"21px","width":"70px","fontSize":"14px","lineHeight":"14px","position":"unset","height":"19px","animationName":""}}},
label:"车辆状态", 
 },
},
tTextx0x16: {
defaultStyle: {
            default: {"color":"rgba(255, 255, 255, 0.9)","top":"423px","left":"19px","width":"70px","fontSize":"14px","lineHeight":"14px","position":"unset","height":"19px","animationName":""},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"color":"rgba(255, 255, 255, 0.9)","top":"423px","left":"19px","width":"70px","fontSize":"14px","lineHeight":"14px","position":"unset","height":"19px","animationName":""}}},
label:"当前地址", 
 },
},
tTextx0x17: {
defaultStyle: {
            default: {"color":"rgba(255, 255, 255, 0.9)","top":"311px","left":"103px","width":"320px","fontSize":"14px","lineHeight":"14px","position":"unset","height":"19px","animationName":""},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"color":"rgba(255, 255, 255, 0.9)","top":"311px","left":"103px","width":"320px","fontSize":"14px","lineHeight":"14px","position":"unset","height":"19px","animationName":""}}},
label:"-", 
 },
},
tTextx0x18: {
defaultStyle: {
            default: {"color":"rgba(255, 255, 255, 0.9)","top":"385px","left":"103px","width":"320px","fontSize":"14px","lineHeight":"14px","position":"unset","height":"19px","animationName":""},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"color":"rgba(255, 255, 255, 0.9)","top":"385px","left":"103px","width":"320px","fontSize":"14px","lineHeight":"14px","position":"unset","height":"19px","animationName":""}}},
label:"-", 
 },
},
tTextx0x19: {
defaultStyle: {
            default: {"color":"rgba(255, 255, 255, 0.9)","top":"423px","left":"103px","width":"320px","fontSize":"14px","lineHeight":"14px","position":"unset","height":"19px","animationName":""},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"color":"rgba(255, 255, 255, 0.9)","top":"423px","left":"103px","width":"320px","fontSize":"14px","lineHeight":"14px","position":"unset","height":"19px","animationName":""}}},
label:"-", 
 },
},
tTextx0x20: {
defaultStyle: {
            default: {"color":"rgba(255, 255, 255, 0.9)","top":"583px","left":"20px","width":"96px","fontSize":"14px","lineHeight":"14px","position":"unset","height":"19px"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"color":"rgba(255, 255, 255, 0.9)","top":"583px","left":"20px","width":"96px","fontSize":"14px","lineHeight":"14px","position":"unset","height":"19px"}}},
label:"结束时间", 
 },
},
tTextx0x21: {
defaultStyle: {
            default: {"color":"rgba(255, 255, 255, 0.9)","top":"734px","left":"34px","width":"153px","fontSize":"14px","lineHeight":"14px","position":"unset","height":"29px","textAlign":"left"},
            
            },
 default: { 
 
editable:false,
cStyle:{"wrapper":{"default":{"color":"rgba(255, 255, 255, 0.9)","top":"734px","left":"34px","width":"153px","fontSize":"14px","lineHeight":"14px","position":"unset","height":"29px","textAlign":"left"}}},
label:"", 
 },
},
tDatePickerx0x22: {
defaultStyle: {
            default: {"width":"314px","height":"32px","position":"unset","left":"109px","top":"527px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"314px","height":"32px","position":"unset","left":"109px","top":"527px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tDatePickerx0x23: {
defaultStyle: {
            default: {"width":"313px","height":"32px","position":"unset","left":"109px","top":"575px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"313px","height":"32px","position":"unset","left":"109px","top":"575px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"#fff","fontSize":"14px","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"rgba(255, 255, 255, 0.4)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"currentDateWrapper":{"default":{"color":"rgba(255, 255, 255, 0.8)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"rgba(255, 255, 255, 1)","borderLeft":"1px solid rgba(255,255,255,1)","borderTop":"1px solid rgba(255,255,255,1)","borderRight":"1px solid rgba(255,255,255,1)","borderBottom":"1px solid rgba(255,255,255,1)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"rgba(255, 255, 255, 1)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"14px","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}},
isDisabledFront:false,
disabledDate:"", 
 },
},
tTextUnitx0x24: {
defaultStyle: {
            default: {"width":"115px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","position":"unset","left":"62px","top":"485px","lineHeight":"20px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"115px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","position":"unset","left":"62px","top":"485px","lineHeight":"20px","animationName":""}},"unit":{"default":{"fontSize":"17px","fontFamily":"方正综艺","lineHeight":"20px"}},"text":{"default":{"lineHeight":"20px","fontSize":"17px"}}},
justify:"flex-start",
align:"flex-end",
content:"巡查物资车轨迹",
unit:"",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x25: {
defaultStyle: {
            default: {"width":"247px","height":"20px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"348px","left":"103px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"247px","height":"20px","flexDirection":"row","justifyContent":"left","alignItems":"center","top":"348px","left":"103px","position":"unset"}},"text":{"default":{"fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","textAlign":"center","lineHeight":"14px","letterSpacing":"0px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset"}},"unit":{"default":{"width":"auto","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","display":"inline-block","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"12px","lineHeight":"12px","letterSpacing":"0px","textAlign":"center","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset"}}},
content:"-",
unit:"km/h",
showOverflowTooltip:true, 
 },
},
tComponentx0x26: {
defaultStyle: {
            default: {"width":"391px","height":"94px","margin":"0 auto","position":"unset","left":"33px","top":"662px"},
            
            },
 default: { 
 
name:"wzxcCarSliderComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"391px","height":"94px","margin":"0 auto","position":"unset","left":"33px","top":"662px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/index.html#/wzxcCarSlider",
componentName:"wzxcCarSliderComponent",
pageId:"f3f1c102da994538a243f891de0ce4d9",
pageCode:"wzxcCarSlider", 
 },
},
});
const getSpeedValue = () => {
const map = {
  "fast": 2000,
  "middle": 4000,
  "slow": 6000
};
if(getUrlParam('IS_VIEW')){
  sendSyncSocketMessage({
    id: '',
    type: 'runInteractive',
    data:[{
      shareCode:'PLAY_SPEED',
      runtimeValue:{
        TYPE: 'CAR_WATER',
        INTERVAL: map[state.speedType] //时间单位
      }
    }]
  })
}else{
  state.speedValue = map[state.speedType];
}
};
const handlePlay = () => {
state.isPlay = !state.isPlay;
if (state.isPlay) {
  state.imagePath = '/legopro-generated-apps/lego_file/res/2023-12-11/396833cf885047cb848c0325268489ab.svg';
  if (state.firstPlay) {
    rootData.rootSocket.emit(
      'message',  // 固定的消息名称，不能修改
      {
        room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
        type: 'addSprinklerTruckTrajectory',  // 消息类型名称
        data: {                   // 消息内容，对象格式
          'device_id': global.airGlobalVariables.waterSprinklerTruck.VMN,
          'START_TIME': state.START_TIME,
          'END_TIME': state.END_TIME,
        }
      }
    );
  }
} else {
  // 点击暂停，不是第一次播放
  state.firstPlay = false
  state.imagePath = '/legopro-generated-apps/lego_file/res/2023-12-11/97390acbab3a4cb4a2930625ca16ed43.svg';
}
// 给地图发送消息
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'playOrPauseSprinklerTruckTrajectory',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      'play': state.isPlay,
    }
  }
);
};
const clearTimer = () => {
if (getUrlParam('IS_VIEW')) {
  sendSyncSocketMessage({
    id: '',
    type: 'runInteractive',
    data: [{
      shareCode: 'CAR_SAILING_CLEARTIMER'
    }]
  })
} else {
  if (state.searchTimer) {
    clearInterval(state.searchTimer);
    state.searchTimer = null;
  }
}
};
const loopSearch = () => {
if (!getUrlParam('IS_VIEW')) {
  state.searchTimer = null;
  // 当天时间,进行接口轮询,实时刷新轨迹数据
  state.searchTimer = setInterval(() => {
    let time = state.MAX_TIME && state.MAX_TIME.slice(0, 10);
    if (time === (state.END_TIME && state.END_TIME.slice(0, 10))) {
      getCarMonitorDataByTime(time + ' 00:00:00', time + ' 23:59:59');
    }
  }, 20000)
}
};
const carImgChange = () => {
const map = {
  B90996D: [
    {
      src: '/legopro-generated-apps/lego_file/res/2024-12-10/e2fb15b692ef4fe5be1e613d366dbb91.jpg',
      desc: '',
    },
    {
      src: '/legopro-generated-apps/lego_file/res/2024-12-10/114c848dad0d4af69577cd09590c04f7.jpg',
      desc: '',
    },
  ],
  B81011D: [
    {
      src: '/legopro-generated-apps/lego_file/res/2024-12-10/5fc3c252826646f693a306f0dee20876.jpg',
      desc: '',
    },
    {
      src: '/legopro-generated-apps/lego_file/res/2024-12-10/66c0d010e1ae4571979a2bc57f7b3d4b.jpg',
      desc: '',
    },
  ],
  B93211D: [
    {
      src: '/legopro-generated-apps/lego_file/res/2024-12-10/5b12e8b945df4ce290a359dd890ccd3d.jpg',
      desc: '',
    },
    {
      src: '/legopro-generated-apps/lego_file/res/2024-12-10/326e9ba553f5496487b4079a39406faf.jpg',
      desc: '',
    },
  ],
  B83530D: [
    {
      src: '/legopro-generated-apps/lego_file/res/2024-12-10/4e306095ecb844c99ed90777ea6594d3.jpg',
      desc: '',
    },
    {
      src: '/legopro-generated-apps/lego_file/res/2024-12-10/fc2fdcac7a014ad8a1b416ae0a0b7aac.jpg',
      desc: '',
    },
  ],
  B44848D: [
    {
      src: '/legopro-generated-apps/lego_file/res/2025-05-30/d7b524afa2fd44c3bbb529b2dad4b27a.jpg',
      desc: '',
    },
    {
      src: '/legopro-generated-apps/lego_file/res/2025-05-30/d953f191ccf74e448d73210570898e6d.jpg',
      desc: '',
    },
  ],
}

state.carImgArr = map[state.activeCar]

};
const search = () => {
// state.START_TIME = state.START_TIME && state.START_TIME.slice(0, 10) + ' 00:00:00';
// state.END_TIME = state.END_TIME && state.END_TIME.slice(0, 10) + ' 23:59:59';

// 挂载于一张图的情况逻辑
// 勾选走航车、切换走航车、查询时间（包括前一天、后一天）
if (getUrlParam('IS_VIEW')) {
  onemapSearch();
} else {
  state.currentIndex = 0;
  getCarMonitorData();
}
};
const setMapgoCarTime = (currentTime) => {
console.log('mapgo车时间', currentTime);

state.currentTime = currentTime.carCurrentTime;
};
const setCarLayer = () => {

let carData = state.currentData;

window.ACApi.Marker.delete({
  ids: ["carPointWater"],
  callbackFn: function (data) {
    console.log("delete markers:", data)
  }
});

// 画汽车点位
var markerArray = [{
  id: "carPointWater",
  lng: Number(carData.LNG),
  lat: Number(carData.LAT),
  height: 10,
  anchors: [-20, 40], //锚点
  range: [10, 100000], //可视范围
  imagePath: `${global.imgBasePath}/nspoint/air/ssc.png`, //显示图片路径
  imageSize: [50, 50], //图片的尺寸
  // text: "marker1", //显示的文字
  textRange: [10, 6000], //文本可视范围[近裁距离, 远裁距离]
  textOffset: [0, 0], // 文本偏移
  textBackgroundColor: "#fff", //文本背景颜色
  fontSize: 12, //字体大小
  fontOutlineSize: 1, //字体轮廓线大小
  fontColor: "#000", //字体颜色
  fontOutlineColor: "#000", //字体轮廓线颜色
  // popupURL: "https://www.baidu.com/", //弹窗 HTML 链接
  // popupBackgroundColor: [1.0, 1.0, 1.0, 1], //弹窗背景颜色
  // popupSize: [300, 300], //弹窗大小
  // popupOffset: [20, 20], //弹窗偏移
  // showLine: true, //标注点下方是否显示垂直牵引线
  // lineSize: [2, 100], //垂直牵引线宽度和高度[width, height]
  // lineColor: "#00deff", //垂直牵引线颜色
  // lineOffset: [31, 0], //垂直牵引线偏移
  // autoHidePopupWindow: true, //失去焦点后是否自动关闭弹出窗口
  autoHeight: true, // 自动判断下方是否有物体
  displayMode: 2, //显示模式
  // priority: 1, //避让优先级
  // occlusionCull: true, //是否参与遮挡剔除
}]
window.ACApi.Marker.create({
  markerArray,
  coordType: 1,
  isLocat: false,
  distance: 1000,
  flyTime: 3,
  onClickFn: function (data) {
    console.log("click marker", data);
  },
  callbackFn: function (data) {
    console.log("create marker", data);
    // window.ACApi.Marker.focus({
    //   ids: ["carPoint"],
    //   //不传 distance 参数，默认定位到最佳视角
    //   distance: 100,
    //   flyTime: 3,
    //   callbackFn: function (data) {
    //     console.log("focus markers:", data)
    //   }
    // })
  }
});
};
const getData = () => {
const get = async () => {
  await getCarData();
  await getRecentTime();
  search();
  loopSearch();
}

get();
};
const trackPlay = () => {
let array = state.chartData;
let interval = 2000;

// 每隔两秒执行一次
let loop = function () {
  return new Promise(function (outerResolve, reject) {
    let promise = Promise.resolve();
    let i = state.currentIndex;
    let next = function () {
      if (state.isPlay) {
        console.log('play', i)
        let el = array[i];
        state.currentIndex = i;
        state.currentData = el;
        state.currentTime = el && el.monitorTime || '';
        setCarLayer();
        if (++i < array.length) {
          promise = promise.then(function () {
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve();
                next();
              }, interval);
            });
          });
        } else {
          console.log('Loop finished.');
          state.currentIndex = 0;
          loop();
          setTimeout(outerResolve, interval);
        }
      } else {
        reject('暂停');
      }
    };
    next();
  });
};
loop().then(function () {
  console.log('Loop finished.');
  // // 循环播放
  // state.currentIndex = 0;
  // loop();
}).catch(err => console.log('异常1111', err));
};
const getIsIframe = () => {
state.isIframe = !!getUrlParam('IS_VIEW')
};
const handleNextDay = () => {
function timeComputed(time) {
  const year = time.getFullYear();
  const month = ("0" + (time.getMonth() + 1)).slice(-2);
  const day = ("0" + time.getDate()).slice(-2);
  return `${year}-${month}-${day}`
};

// 后一天
state.START_TIME = timeComputed(new Date(new Date(state.START_TIME).getTime() + 24 * 60 * 60 * 1000)) + ' 00:00:00';
state.END_TIME = timeComputed(new Date(new Date(state.END_TIME).getTime() + 24 * 60 * 60 * 1000)) + ' 23:59:59';
global.airGlobalVariables.waterSprinklerTruck.startTime = state.START_TIME
global.airGlobalVariables.waterSprinklerTruck.endTime = state.END_TIME
};
const setLineLayer = () => {
const data = state.monitorData;
const coordArray = data.map(item => {
  return {
    lng: Number(item.LNG),
    lat: Number(item.LAT),
    height: 10
  }
})

console.log('coordArray', coordArray)
const dataArr = [{
  id: "carLineWater",
  color: "#00ff00",
  coordArray,
  width: 30,
  brightness: 1,
  curveType: 0,
  isOnTerrain: true
}]
// 画轨迹折线
window.AC.Polyline.create({
  data: dataArr,
  coordType: 1,
  isLocat: false,
  callbackFn: function (data) {
    console.log("polylineCreate:" + JSON.stringify(data))
    // window.AC.Polyline.focus({
    //   ids: ["carLine"],
    //   distance: 1000,
    //   callbackFn: function (data) {
    //     console.log("polylineFocus:", data)
    //   }
    // })
  }
})

};
const subGroup = () => {
state.timeList = [];
let newArr = [];
let len = state.monitorData.length / 23 > 1 ? state.monitorData.length / 23 : 1;
state.monitorData.forEach((item, index) => {
  let a = (index + 1) % Math.floor(len);
  if (a === 0 || index === state.monitorData.length - 1 || index === 0) {
    newArr.push(item);
  }
});
state.chartData = newArr;

state.chartData.map(item => {
  item.monitorTime = item.TS.replace(".0", "").slice(0, 16);
  item.chartTime = item.monitorTime ;
});

state.currentData = state.chartData[0];

// 判断是否同一天，同一天不展示日期
if(state.chartData[0].monitorTime.slice(0, 10) === state.chartData[state.chartData.length - 1].monitorTime.slice(0, 10)) {
  state.chartData.map(item => {
  item.chartTime = item.monitorTime.split(" ")[1];
});
}

// if(state.chartData[0] < state.chartData[state.chartData.length - 1])

state.chartData.forEach(item => {
  state.timeList.push(`${item.monitorTime}`);
});


state.currentTime = state.timeList[0];

};
const setPointLayer = () => {

window.ACApi.Marker.delete({
  ids: ['carPointEnd'],
  callbackFn: function (data) {
    console.log("delete markers:", data)
  }
})


let carDataStart = state.chartData[0];
let carDataEnd = state.chartData[state.chartData.length - 1];
console.log(carDataStart);
console.log(carDataEnd);
// 画起点点位
// var markerArrayStart = [{
//   id: "carPointStart",
//   lng: Number(carDataStart.LNG),
//   lat: Number(carDataStart.LAT),
//   height: 10,
//   anchors: [-25, 50], //锚点
//   range: [10, 100000], //可视范围
//   imagePath: `${global.imgBasePath}/nspoint/letters/start.png`, //显示图片路径
//   imageSize: [50, 50], //图片的尺寸
//   // text: "marker1", //显示的文字
//   textRange: [10, 6000], //文本可视范围[近裁距离, 远裁距离]
//   textOffset: [0, 0], // 文本偏移
//   textBackgroundColor: "#fff", //文本背景颜色
//   fontSize: 12, //字体大小
//   fontOutlineSize: 1, //字体轮廓线大小
//   fontColor: "#000", //字体颜色
//   fontOutlineColor: "#000", //字体轮廓线颜色
//   autoHeight: true, // 自动判断下方是否有物体
//   displayMode: 2, //显示模式
// }]

var markerArrayEnd = [{
  id: "carPointEnd",
  lng: Number(carDataEnd.LNG),
  lat: Number(carDataEnd.LAT),
  height: 10,
  anchors: [-25, 50], //锚点
  range: [10, 100000], //可视范围
  // imagePath: `${global.imgBasePath}/nspoint/letters/end.png`, //显示图片路径
  imagePath: `${global.imgBasePath}/nspoint/air/ssc.png`, //显示图片路径
  imageSize: [50, 50], //图片的尺寸
  // text: "marker1", //显示的文字
  textRange: [10, 6000], //文本可视范围[近裁距离, 远裁距离]
  textOffset: [0, 0], // 文本偏移
  textBackgroundColor: "#fff", //文本背景颜色
  fontSize: 12, //字体大小
  fontOutlineSize: 1, //字体轮廓线大小
  fontColor: "#000", //字体颜色
  fontOutlineColor: "#000", //字体轮廓线颜色
  autoHeight: true, // 自动判断下方是否有物体
  displayMode: 2, //显示模式
}]

setTimeout(() => {
  window.ACApi.Marker.create({
    markerArray: markerArrayEnd,
    coordType: 1,
    isLocat: false,
    distance: 1000,
    flyTime: 3,
    onClickFn: function (data) {
      console.log("click marker", data);
    },
    callbackFn: function (data) {
      console.log("create marker", data);
    }
  });

  // window.ACApi.Marker.create({
  //   markerArray: markerArrayStart,
  //   coordType: 1,
  //   isLocat: false,
  //   distance: 1000,
  //   flyTime: 3,
  //   onClickFn: function (data) {
  //     console.log("click marker", data);
  //   },
  //   callbackFn: function (data) {
  //     console.log("create marker", data);
  //   }
  // });
}, 0)

};
const handlePreDay = () => {
function timeComputed(time) {
  const year = time.getFullYear();
  const month = ("0" + (time.getMonth() + 1)).slice(-2);
  const day = ("0" + time.getDate()).slice(-2);
  return `${year}-${month}-${day}`
};

//前一天
state.START_TIME = timeComputed(new Date(new Date(state.START_TIME).getTime() - 24 * 60 * 60 * 1000)) + ' 00:00:00';
state.END_TIME = timeComputed(new Date(new Date(state.END_TIME).getTime() - 24 * 60 * 60 * 1000)) + ' 23:59:59';

console.log(state.START_TIME);
console.log(state.END_TIME);


global.airGlobalVariables.waterSprinklerTruck.startTime = state.START_TIME
global.airGlobalVariables.waterSprinklerTruck.endTime = state.END_TIME
};
const closeSurveyDialog = () => {
// 恢复左右屏 时间轴 图例
window.AC.UpdateCustomWindow(
  "overview-analysis-left-window",
  {
    width: 360,
    height: 939,
  }
)
window.AC.UpdateCustomWindow(
  "overview-analysis-right-window",
  {
    width: 360,
    height: 939,
  }
)
window.AC.UpdateCustomWindow(
  "overview-analysis-time-line",
  {
    width: 1030,
    height: 96,
  }
)
window.AC.UpdateCustomWindow(
  "overviewAnalysisLegend",
  {
    width: 165,
    height: 328,
  }
)

clearLayer();


// 关闭弹窗
window.AC.HideWindow(1);
};
const intiTime = () => {
const now = new Date("2024-05-07");
const year = now.getFullYear();
const month = ("0" + (now.getMonth() + 1)).slice(-2);
const day = ("0" + now.getDate()).slice(-2)
state.START_TIME = `${year}-${month}-${day}`;
state.END_TIME = `${year}-${month}-${day}`;

console.log(state.START_TIME);
console.log(state.END_TIME);
};
const onemapSearch = () => {
// 播放状态重置为停止
state.playStatus = false

sendSyncSocketMessage({
  id: '',
  type: 'runInteractive',
  data:[{
      shareCode:'CAR_WATER_ROUTE',
      runtimeValue:{
        VMN: state.carData.VMN,
        START_TIME: state.START_TIME,
        END_TIME: state.END_TIME
      }
    }]
})

};
const carChange = () => {
handleStop();
state.currentIndex = 0;
state.currentTime = '';
clearTimer();

const fun = async () => {
  await getRecentTime();
  search();
};
fun();
};
const changeTime = (time) => {
state.START_TIME = time + ' 00:00:00';
state.END_TIME = time + ' 23:59:59';
};
const sendSyncSocketMessage = (data) => {
// 发送socket消息，一张图综合查询使用-------------------------------
// 使用 FormData 对象来上传文件或表单数据
const formData = new FormData();
formData.append('message', JSON.stringify(data));
formData.append('domain', global.prodServiceBaseUrl);

axios.post(`${global.prodServiceBaseUrl}/view/interact/${global.socketRoom}_/message`, formData, {
  headers: {
    'Content-Type': 'multipart/form-data' // 设置请求头，确保服务器正确解析 FormData
  }
})
};
const onemapTrackPlay = () => {
state.playStatus = !state.playStatus
console.log(state.playStatus)
if(state.playStatus){
  const fastPointTime = state.chartData[0].monitorTime
  const lastPointTime = state.chartData[state.chartData.length-1].monitorTime
  const speedMap = {
    'fast': 2000,
    'middle': 4000,
    'slow': 6000
  };
  sendSyncSocketMessage({
    id: '',
    type: 'runInteractive',
    data:[{
        shareCode:'PLAY',
        runtimeValue:{
          TYPE: 'CAR_WATER',
          // 触发时，当前播放时间不为第一个和最后一个点位的时间时，为暂停重启播放
          RESTART: state.currentTime !== fastPointTime && state.currentTime !== lastPointTime,
          INTERVAL: speedMap[state.speedType] //时间单位
        }
      }]
  })
}else{
  sendSyncSocketMessage({
    id: '',
    type: 'runInteractive',
    data:[{
        shareCode:'PAUSE',
        runtimeValue:{
          TYPE: 'CAR_WATER',
        }
      }]
  })
}

};
const reset = () => {
state.END_TIME = state.MAX_TIME;
state.START_TIME = state.MIN_TIME;
global.airGlobalVariables.waterSprinklerTruck.startTime = state.MIN_TIME;
global.airGlobalVariables.waterSprinklerTruck.endTime = state.MAX_TIME;

};
const clearLayer = () => {
// 清除上一次的线和点位
window.AC.Polyline.delete({
  ids: ["carLineWater"],
  callbackFn: function (data) {
    console.log("polylineDelete:", data)
  }
});
window.ACApi.Marker.delete({
  ids: ["carPointWater", "carPointStart", "carPointEnd"],
  callbackFn: function (data) {
    console.log('清除洒水车起点终点');
    console.log("delete markers:", data)
  }
});

};
const handleStop = () => {
state.isPlay = false;
state.imagePath = '/legopro-generated-apps/lego_file/res/2023-12-11/97390acbab3a4cb4a2930625ca16ed43.svg';

};
const focusCar = () => {
window.ACApi.Marker.focus({
  ids: ["carPointWater"],
  //不传 distance 参数，默认定位到最佳视角
  distance: 100,
  flyTime: 3,
  callbackFn: function (data) {
    console.log("focus markers:", data)
  }
})



sendSyncSocketMessage({
  id: '',
  type: 'runInteractive',
  data: [{
    shareCode: 'CAR_WATER_FOCUS'
  }]
})
};
const goToPoint = () => {
 rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type: "gotoPoint",
    data: {
      "longitude": state.baseInfo.LONGITUDE,
      "latitude": state.baseInfo.LATITUDE,
    }
  });
};
const changeSilder = () => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'changeSlider',  // 消息类型名称
    data: {}                  // 消息内容，对象格式
      
  }
);
};
const onclick1766394251098 = () => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closeTrajectorySupplySprinkler", // 消息名称
data: {}, // 发送的数据
});
};
const onclick1718723586167 = () => {
// 执行自定义方法
goToPoint();
};
const onclick1718710562227 = () => {
// 执行自定义方法
handlePreDay();
};
const onclick1718710614305 = () => {
// 执行自定义方法
handleNextDay();
};
const onclick1718710697775 = () => {
// 事件交互-请求调用接口
apiRegistry.getLatestTime.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "removeSprinklerTruckTrajectory", // 消息名称
data: {}, // 发送的数据
});
// 执行自定义方法
changeSilder();
};
const onclick1744726085832_0_0 = () => {
// 执行自定义方法
reset();
// 事件交互-请求调用接口
apiRegistry.getLatestTime.request().then((res) => {
// 接口调取成功
}).catch((error) => {
// 接口调取失败
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "removeSprinklerTruckTrajectory", // 消息名称
data: {}, // 发送的数据
});
// 执行自定义方法
changeSilder();
};
const ondateChange1766384591692_0_0 = (data) => {
// 设置变量值
state.START_TIME = data;
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'airGlobalVariables.waterSprinklerTruck.startTime',
                    value:data,
                    data: {
                      airGlobalVariables:{waterSprinklerTruck:{startTime: data}}
                    },
                  });
};
const ondateChange1766384679495_0_0 = (data) => {
// 设置变量值
state.END_TIME = data;
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'airGlobalVariables.waterSprinklerTruck.endTime',
                    value:data,
                    data: {
                      airGlobalVariables:{waterSprinklerTruck:{endTime: data}}
                    },
                  });
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getLatestTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"device_id":"global.airGlobalVariables.waterSprinklerTruck.VMN","END_TIME":"state.END_TIME","START_TIME":"state.START_TIME","interfaceId":"835a695e8957667675e53ca1f0ace9cc"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"device_id":global.airGlobalVariables.waterSprinklerTruck.VMN,"END_TIME":state.END_TIME,"START_TIME":state.START_TIME,"interfaceId":"835a695e8957667675e53ca1f0ace9cc"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"device_id":global.airGlobalVariables.waterSprinklerTruck.VMN,"END_TIME":state.END_TIME,"START_TIME":state.START_TIME,"interfaceId":"835a695e8957667675e53ca1f0ace9cc"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.currentTime = data[0].MONITORTIME || '-'
  global.airGlobalVariables.waterSprinklerTruck.currentTime = data[0].MONITORTIME
}else{
  state.currentTime = '-'
  global.airGlobalVariables.waterSprinklerTruck.currentTime = ''
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
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"device_id":"global.airGlobalVariables.waterSprinklerTruck.VMN","VMN_TYPE":"wzc","interfaceId":"cec8a9f0eb62383b2ed0703f87a7b455"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"device_id":global.airGlobalVariables.waterSprinklerTruck.VMN,"VMN_TYPE":"wzc","interfaceId":"cec8a9f0eb62383b2ed0703f87a7b455"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"device_id":global.airGlobalVariables.waterSprinklerTruck.VMN,"VMN_TYPE":"wzc","interfaceId":"cec8a9f0eb62383b2ed0703f87a7b455"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data.length) {
  state.baseInfo = data[0]
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
 getDefaultTime: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: true, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"device_id":"global.airGlobalVariables.waterSprinklerTruck.VMN","interfaceId":"843d11f90b7e43d3222cd73c4e0405be"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"device_id":global.airGlobalVariables.waterSprinklerTruck.VMN,"interfaceId":"843d11f90b7e43d3222cd73c4e0405be"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"device_id":global.airGlobalVariables.waterSprinklerTruck.VMN,"interfaceId":"843d11f90b7e43d3222cd73c4e0405be"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getDefaultTime'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  state.MIN_TIME = data.MIN_TIME
  state.MAX_TIME = data.MAX_TIME
  state.START_TIME = data.MIN_TIME
  state.END_TIME = data.MAX_TIME
  global.airGlobalVariables.waterSprinklerTruck.startTime = data.MIN_TIME
  global.airGlobalVariables.waterSprinklerTruck.endTime = data.MAX_TIME
}else{
  state.START_TIME = ''
  state.END_TIME = ''
  global.airGlobalVariables.waterSprinklerTruck.startTime = ''
  global.airGlobalVariables.waterSprinklerTruck.endTime = ''
}
// 更新滑块状态
changeSilder();
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
watch(() => ["wzc"], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getBaseInfo', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-mobileSurveySupplyDialog', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onBeforeUnmount(() => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "removeSprinklerTruckTrajectory", // 消息名称
data: {}, // 发送的数据
});
});
onMounted(() => {
setPageScale('t-l-c-mobileSurveySupplyDialog', global.appScaleMode, 'normal');
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

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tRowx0x5ComputedData = computed(() => _.merge({}, componentState.tRowx0x5.default, componentState.tRowx0x5?.[state.screenSize]));

 const tTextx0x5x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x5x0.default, componentState.tTextx0x5x0?.[state.screenSize]));

 const tTextx0x5x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x5x1.default, componentState.tTextx0x5x1?.[state.screenSize]));

 const tImageBasex0x6ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x6.default, componentState.tImageBasex0x6?.[state.screenSize]));

 const tSwiperBasex0x7ComputedData = computed(() => _.merge({}, componentState.tSwiperBasex0x7.default, componentState.tSwiperBasex0x7?.[state.screenSize]));

 const tRectx0x8ComputedData = computed(() => _.merge({}, componentState.tRectx0x8.default, componentState.tRectx0x8?.[state.screenSize]));

 const tRectx0x9ComputedData = computed(() => _.merge({}, componentState.tRectx0x9.default, componentState.tRectx0x9?.[state.screenSize]));

 const tRectx0x10ComputedData = computed(() => _.merge({}, componentState.tRectx0x10.default, componentState.tRectx0x10?.[state.screenSize]));

 const tRectx0x11ComputedData = computed(() => _.merge({}, componentState.tRectx0x11.default, componentState.tRectx0x11?.[state.screenSize]));

 const tTextx0x12ComputedData = computed(() => _.merge({}, componentState.tTextx0x12.default, componentState.tTextx0x12?.[state.screenSize]));

 const tTextx0x13ComputedData = computed(() => _.merge({}, componentState.tTextx0x13.default, componentState.tTextx0x13?.[state.screenSize]));

 const tTextx0x14ComputedData = computed(() => _.merge({}, componentState.tTextx0x14.default, componentState.tTextx0x14?.[state.screenSize]));

 const tTextx0x15ComputedData = computed(() => _.merge({}, componentState.tTextx0x15.default, componentState.tTextx0x15?.[state.screenSize]));

 const tTextx0x16ComputedData = computed(() => _.merge({}, componentState.tTextx0x16.default, componentState.tTextx0x16?.[state.screenSize]));

 const tTextx0x17ComputedData = computed(() => _.merge({}, componentState.tTextx0x17.default, componentState.tTextx0x17?.[state.screenSize]));

 const tTextx0x18ComputedData = computed(() => _.merge({}, componentState.tTextx0x18.default, componentState.tTextx0x18?.[state.screenSize]));

 const tTextx0x19ComputedData = computed(() => _.merge({}, componentState.tTextx0x19.default, componentState.tTextx0x19?.[state.screenSize]));

 const tTextx0x20ComputedData = computed(() => _.merge({}, componentState.tTextx0x20.default, componentState.tTextx0x20?.[state.screenSize]));

 const tTextx0x21ComputedData = computed(() => _.merge({}, componentState.tTextx0x21.default, componentState.tTextx0x21?.[state.screenSize]));

 const tDatePickerx0x22ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x22.default, componentState.tDatePickerx0x22?.[state.screenSize]));

 const tDatePickerx0x23ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x23.default, componentState.tDatePickerx0x23?.[state.screenSize]));

 const tTextUnitx0x24ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x24.default, componentState.tTextUnitx0x24?.[state.screenSize]));

 const tTextUnitx0x25ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x25.default, componentState.tTextUnitx0x25?.[state.screenSize]));

 const tComponentx0x26ComputedData = computed(() => _.merge({}, componentState.tComponentx0x26.default, componentState.tComponentx0x26?.[state.screenSize]));

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
tRectx0x1ComputedData,
tTextx0x2ComputedData,
tRectx0x3ComputedData,
tTextx0x4ComputedData,
tRowx0x5ComputedData,
tTextx0x5x0ComputedData,
tTextx0x5x1ComputedData,
tImageBasex0x6ComputedData,
tSwiperBasex0x7ComputedData,
tRectx0x8ComputedData,
tRectx0x9ComputedData,
tRectx0x10ComputedData,
tRectx0x11ComputedData,
tTextx0x12ComputedData,
tTextx0x13ComputedData,
tTextx0x14ComputedData,
tTextx0x15ComputedData,
tTextx0x16ComputedData,
tTextx0x17ComputedData,
tTextx0x18ComputedData,
tTextx0x19ComputedData,
tTextx0x20ComputedData,
tTextx0x21ComputedData,
tDatePickerx0x22ComputedData,
tDatePickerx0x23ComputedData,
tTextUnitx0x24ComputedData,
tTextUnitx0x25ComputedData,
tComponentx0x26ComputedData,
onclick1766394251098,
onclick1718723586167,
onclick1718710562227,
onclick1718710614305,
onclick1718710697775,
onclick1744726085832_0_0,
ondateChange1766384591692_0_0,
ondateChange1766384679495_0_0,
};
},
};