window.watershedDetailsEnterNewComponent = {
template: 
`<div id="t-l-c-watershedDetailsEnterNew" class="t-l-c-watershedDetailsEnterNew" >` +
`<t-rect id="t-rect-0aaf.a87f17f18" class="watershedDetailsEnterNew-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-1bbc.292a467e2" class="watershedDetailsEnterNew-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle" @click="onclick1733723979280">` +
`</t-text>` +
`<t-rect id="t-rect-b8a7.3fc5f52df" class="watershedDetailsEnterNew-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-acb9.15027a88a" class="watershedDetailsEnterNew-t-text-0-5"  :label="replaceCssVariables(filterData(state.title, componentPropBindingMap?.['t-text-acb9.15027a88a']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle">` +
`</t-text>` +
`<t-row id="t-row-c50a.301db8efb" class="watershedDetailsEnterNew-t-row-0-7"  :c-style="tRowx0x7ComputedData.cStyle" :gutter="tRowx0x7ComputedData.gutter" :justify="tRowx0x7ComputedData.justify" :align="tRowx0x7ComputedData.align">` +
`<t-col id="t-col-5d72.59d31e59b" class="watershedDetailsEnterNew-t-col-0-7-0"  :span="tColx0x7x0ComputedData.span" :offset="tColx0x7x0ComputedData.offset" :push="tColx0x7x0ComputedData.push" :pull="tColx0x7x0ComputedData.pull" :c-style="tColx0x7x0ComputedData.cStyle">` +
`<t-component id="t-component-1eec.5c6224087" class="watershedDetailsEnterNew-t-component-0-7-0-0"  :name="tComponentx0x7x0x0ComputedData.name" :c-style="tComponentx0x7x0x0ComputedData.cStyle" :src="tComponentx0x7x0x0ComputedData.src" :component-name="tComponentx0x7x0x0ComputedData.componentName">` +
`</t-component>` +
`<t-row id="t-row-5b17.f6acfd933" class="watershedDetailsEnterNew-t-row-0-7-0-1"  :c-style="tRowx0x7x0x1ComputedData.cStyle" :gutter="tRowx0x7x0x1ComputedData.gutter" :justify="tRowx0x7x0x1ComputedData.justify" :align="tRowx0x7x0x1ComputedData.align">` +
`<t-row id="t-row-2af4.0e5e2161d" class="watershedDetailsEnterNew-t-row-0-7-0-1-0"  :c-style="tRowx0x7x0x1x0ComputedData.cStyle" :gutter="tRowx0x7x0x1x0ComputedData.gutter" :justify="tRowx0x7x0x1x0ComputedData.justify" :align="tRowx0x7x0x1x0ComputedData.align">` +
`<t-col id="t-col-6c4c.d5dadb006" class="watershedDetailsEnterNew-t-col-0-7-0-1-0-0"  :span="tColx0x7x0x1x0x0ComputedData.span" :offset="tColx0x7x0x1x0x0ComputedData.offset" :push="tColx0x7x0x1x0x0ComputedData.push" :pull="tColx0x7x0x1x0x0ComputedData.pull" :c-style="tColx0x7x0x1x0x0ComputedData.cStyle">` +
`<t-gradient-text id="t-gradient-text-589d.0f1fcc305" class="watershedDetailsEnterNew-t-gradient-text-0-7-0-1-0-0-2"  :label="replaceCssVariables(filterData(state.gsText, componentPropBindingMap?.['t-gradient-text-589d.0f1fcc305']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tGradientTextx0x7x0x1x0x0x2ComputedData.cStyle" :color-style="tGradientTextx0x7x0x1x0x0x2ComputedData.colorStyle">` +
`</t-gradient-text>` +
`</t-col>` +
`<t-col id="t-col-c050.9d0c1facb" class="watershedDetailsEnterNew-t-col-0-7-0-1-0-1"  :span="tColx0x7x0x1x0x1ComputedData.span" :offset="tColx0x7x0x1x0x1ComputedData.offset" :push="tColx0x7x0x1x0x1ComputedData.push" :pull="tColx0x7x0x1x0x1ComputedData.pull" :c-style="tColx0x7x0x1x0x1ComputedData.cStyle">` +
`<t-text v-if="state.showMore === true" id="t-text-f6ba.52dcef193" class="watershedDetailsEnterNew-t-text-0-7-0-1-0-1-0"  :label="replaceCssVariables(filterData(state.zkText, componentPropBindingMap?.['t-text-f6ba.52dcef193']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x7x0x1x0x1x0ComputedData.editable" :c-style="tTextx0x7x0x1x0x1x0ComputedData.cStyle" @click="onclick1738747371346">` +
`</t-text>` +
`</t-col>` +
`</t-row>` +
`</t-row>` +
`</t-col>` +
`<t-col id="t-col-106f.ba830e7ca" class="watershedDetailsEnterNew-t-col-0-7-1"  :span="tColx0x7x1ComputedData.span" :offset="tColx0x7x1ComputedData.offset" :push="tColx0x7x1ComputedData.push" :pull="tColx0x7x1ComputedData.pull" :c-style="tColx0x7x1ComputedData.cStyle">` +
`<t-component id="t-component-dec2.ca94a3863" class="watershedDetailsEnterNew-t-component-0-7-1-0"  :name="tComponentx0x7x1x0ComputedData.name" :c-style="tComponentx0x7x1x0ComputedData.cStyle" :src="tComponentx0x7x1x0ComputedData.src" :component-name="tComponentx0x7x1x0ComputedData.componentName">` +
`</t-component>` +
`</t-col>` +
`<t-col id="t-col-11de.d6b98626c" class="watershedDetailsEnterNew-t-col-0-7-2"  :span="tColx0x7x2ComputedData.span" :offset="tColx0x7x2ComputedData.offset" :push="tColx0x7x2ComputedData.push" :pull="tColx0x7x2ComputedData.pull" :c-style="tColx0x7x2ComputedData.cStyle">` +
`</t-col>` +
`</t-row>` +
`<t-select id="t-select-9a19.a5e4f11ef" class="watershedDetailsEnterNew-t-select-0-8"  :active-value="replaceCssVariables(filterData(state.selectType, componentPropBindingMap?.['t-select-9a19.a5e4f11ef']['activeValue'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :options="tSelectx0x8ComputedData.options" :alias="tSelectx0x8ComputedData.alias" :multiple="tSelectx0x8ComputedData.multiple" :placeholder="tSelectx0x8ComputedData.placeholder" :clearable="tSelectx0x8ComputedData.clearable" :disabled="tSelectx0x8ComputedData.disabled" :name="tSelectx0x8ComputedData.name" :autocomplete="tSelectx0x8ComputedData.autocomplete" :filterable="tSelectx0x8ComputedData.filterable" :no-match-text="tSelectx0x8ComputedData.no-match-text" :no-data-text="tSelectx0x8ComputedData.no-data-text" :c-style="tSelectx0x8ComputedData.cStyle" @change="onchange1759112983399">` +
`</t-select>` +
`<t-date-picker v-if="state.isShow === true" id="t-date-picker-d618.e03bc73fb" class="watershedDetailsEnterNew-t-date-picker-0-9"  :placeholder="tDatePickerx0x9ComputedData.placeholder" :start-placeholder="tDatePickerx0x9ComputedData.startPlaceholder" :end-placeholder="tDatePickerx0x9ComputedData.endPlaceholder" :type="replaceCssVariables(filterData(state.timeType, componentPropBindingMap?.['t-date-picker-d618.e03bc73fb']['type'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :clearable="tDatePickerx0x9ComputedData.clearable" :range-separator="tDatePickerx0x9ComputedData.rangeSeparator" :default-date="replaceCssVariables(filterData(state.timeData, componentPropBindingMap?.['t-date-picker-d618.e03bc73fb']['default-date'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :separator="tDatePickerx0x9ComputedData.separator" :readonly="tDatePickerx0x9ComputedData.readonly" :editable="tDatePickerx0x9ComputedData.editable" :c-style="tDatePickerx0x9ComputedData.cStyle" @date-change="ondateChange1739156837304">` +
`</t-date-picker>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-fb2c.4eb017e6a":{"attributeName":"tRectx0x0"},"t-rect-0aaf.a87f17f18":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-1bbc.292a467e2":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-b8a7.3fc5f52df":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-9552.977d6bf1e":{"attributeName":"tTextx0x4"},"t-text-acb9.15027a88a":{"attributeName":"tTextx0x5","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-tabs-base-58cb.7934ee908":{"attributeName":"tTabsBasex0x6"},"t-row-c50a.301db8efb":{"attributeName":"tRowx0x7","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-5d72.59d31e59b":{"attributeName":"tColx0x7x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-1eec.5c6224087":{"attributeName":"tComponentx0x7x0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-row-5b17.f6acfd933":{"attributeName":"tRowx0x7x0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-row-2af4.0e5e2161d":{"attributeName":"tRowx0x7x0x1x0","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-col-6c4c.d5dadb006":{"attributeName":"tColx0x7x0x1x0x0","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-c9b9.1bfdc4467":{"attributeName":"tTextx0x7x0x1x0x0x0"},"t-rect-1ec2.67766ff73":{"attributeName":"tRectx0x7x0x1x0x0x1"},"t-gradient-text-589d.0f1fcc305":{"attributeName":"tGradientTextx0x7x0x1x0x0x2","label":{"filters":[]},"cStyle":{"filters":[]},"colorStyle":{"filters":[]}},"t-col-c050.9d0c1facb":{"attributeName":"tColx0x7x0x1x0x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-text-f6ba.52dcef193":{"attributeName":"tTextx0x7x0x1x0x1x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-col-106f.ba830e7ca":{"attributeName":"tColx0x7x1","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-dec2.ca94a3863":{"attributeName":"tComponentx0x7x1x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-col-11de.d6b98626c":{"attributeName":"tColx0x7x2","span":{"filters":[]},"offset":{"filters":[]},"push":{"filters":[]},"pull":{"filters":[]},"cStyle":{"filters":[]}},"t-component-5ec0.691253232":{"attributeName":"tComponentx0x7x2x0"},"t-select-9a19.a5e4f11ef":{"attributeName":"tSelectx0x8","activeValue":{"filters":[]},"options":{"filters":[]},"alias":{"filters":[]},"multiple":{"filters":[]},"placeholder":{"filters":[]},"clearable":{"filters":[]},"disabled":{"filters":[]},"name":{"filters":[]},"autocomplete":{"filters":[]},"filterable":{"filters":[]},"no-match-text":{"filters":[]},"no-data-text":{"filters":[]},"cStyle":{"filters":[]}},"t-date-picker-d618.e03bc73fb":{"attributeName":"tDatePickerx0x9","placeholder":{"filters":[]},"startPlaceholder":{"filters":[]},"endPlaceholder":{"filters":[]},"type":{"filters":[]},"clearable":{"filters":[]},"rangeSeparator":{"filters":[]},"default-date":{"filters":[]},"separator":{"filters":[]},"readonly":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   isShow: true,
   selectType: "month",
   timeData: [],
   timeType: "monthrange",
   cardData: [],
   showMore: false,
   WSYSTEM_CODE: "",
   wsystemRiverCompDataState: {"WSYSTEM_CODE":""},
   TIME: "2024-12",
   ASSESSTYPE: "monthly",
   zkText: "展开更多",
   isShowMore: true,
   gsText: "--",
   title: "-",
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
tRectx0x1: {
defaultStyle: {
            default: {"width":"450px","height":"60px","position":"unset","left":"0px","top":"56px","background":"var(--business-query-bg)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"60px","position":"unset","left":"0px","top":"56px","background":"var(--business-query-bg)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"1px solid var(--business-show-bg50)","animationName":""}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"43px","height":"18px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"19px","left":"12px","backgroundColor":"var(--business-white)","position":"unset","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"43px","height":"18px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"19px","left":"12px","backgroundColor":"var(--business-white)","position":"unset","cursor":"pointer","animationName":""},"hover":{"backgroundColor":"var(--business-theme)"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"55px","left":"0px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"55px","left":"0px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"268px","height":"24px","color":"var(--skin-font-color-90)","fontSize":"var(--business-text-size-18)","borderLeft":"1px solid var(--business-white)","lineHeight":"24px","paddingLeft":"20px","top":"16px","left":"75px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"268px","height":"24px","color":"var(--skin-font-color-90)","fontSize":"var(--business-text-size-18)","borderLeft":"1px solid var(--business-white)","lineHeight":"24px","paddingLeft":"20px","top":"16px","left":"75px","position":"unset","animationName":""}}}, 
 },
},
tRowx0x7: {
defaultStyle: {
            default: {"width":"451px","height":"750px","position":"unset","left":"0px","top":"133px","overflowX":"hidden","overflowY":"auto","display":"block","min-height":"auto","paddingBottom":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"451px","height":"750px","position":"unset","left":"0px","top":"133px","overflowX":"hidden","overflowY":"auto","display":"block","min-height":"auto","paddingBottom":"0px"}}},
gutter:0,
justify:"center",
align:"top", 
 },
},
tColx0x7x0: {
defaultStyle: {
            default: {"width":"100%","height":"auto","min-height":"150px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","min-height":"150px"}}}, 
 },
},
tComponentx0x7x0x0: {
defaultStyle: {
            default: {"width":"418px","height":"34px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","min-height":"34px","marginBottom":"12px"},
            
            },
 default: { 
 
name:"watershedDetailsBasicOverviewComponent",
cStyle:{"wrapper":{"default":{"width":"418px","height":"34px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","min-height":"34px","marginBottom":"12px"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/watershedDetailsBasicOverview",
componentName:"watershedDetailsBasicOverviewComponent", 
 },
},
tRowx0x7x0x1: {
defaultStyle: {
            default: {"width":"410px","height":"auto","position":"unset","left":"550px","top":"38.33331298828125px","min-height":"60px","animationName":"","marginLeft":"20px","marginBottom":"10px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-05/70d6c72beb214026a731ecc227758155.png),url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-05/206b6c8381114b5dbe5696df535c9f2e.png),url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-05/9857a0b0068c48c981908d6627e2b7a4.png),url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-05/b5f17116503c4fbeac675a3a6baa5713.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat,no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto,auto,auto","-webkit-mask-size":"","backgroundPosition":"0% 100%,100% 100%,100% 0%,0% 0%","-webkit-mask-position":"","paddingLeft":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"410px","height":"auto","position":"unset","left":"550px","top":"38.33331298828125px","min-height":"60px","animationName":"","marginLeft":"20px","marginBottom":"10px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-05/70d6c72beb214026a731ecc227758155.png),url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-05/206b6c8381114b5dbe5696df535c9f2e.png),url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-05/9857a0b0068c48c981908d6627e2b7a4.png),url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-05/b5f17116503c4fbeac675a3a6baa5713.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat,no-repeat,no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto,auto,auto,auto","-webkit-mask-size":"","backgroundPosition":"0% 100%,100% 100%,100% 0%,0% 0%","-webkit-mask-position":"","paddingLeft":"0px"}}},
gutter:0,
justify:"space-between",
align:"top", 
 },
},
tRowx0x7x0x1x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","paddingLeft":"4px","paddingTop":"4px","paddingRight":"4px","marginBottom":"0px","paddingBottom":"4px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","paddingLeft":"4px","paddingTop":"4px","paddingRight":"4px","marginBottom":"0px","paddingBottom":"4px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tColx0x7x0x1x0x0: {
defaultStyle: {
            default: {"width":"auto","height":"54px","paddingTop":"8px","paddingLeft":"12px","paddingRight":"12px","backgroundColor":"var(--business-show-bg30)","animationName":"","left":"531px","top":"-5.66668701171875px","marginTop":"0px","marginLeft":"0px","marginRight":"0px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"auto","height":"54px","paddingTop":"8px","paddingLeft":"12px","paddingRight":"12px","backgroundColor":"var(--business-show-bg30)","animationName":"","left":"531px","top":"-5.66668701171875px","marginTop":"0px","marginLeft":"0px","marginRight":"0px"}}}, 
 },
},
tGradientTextx0x7x0x1x0x0x2: {
defaultStyle: {
            default: {"width":"378px","height":"44px","position":"unset","left":"613px","top":"69.33331298828125px","color":"#fff","fontSize":"var(--business-text-size-14)","lineHeight":"22px","animationName":"","textAlign":"left","wordWrap":"break-word"},
            
            },
 default: { 
 
label:"--",
cStyle:{"wrapper":{"default":{"width":"378px","height":"44px","position":"unset","left":"613px","top":"69.33331298828125px","color":"#fff","fontSize":"var(--business-text-size-14)","lineHeight":"22px","animationName":"","textAlign":"left","wordWrap":"break-word"}}},
colorStyle:{"startColor":"var(--business-white)","endColor":"var(--business-white)"}, 
 },
},
tColx0x7x0x1x0x1: {
defaultStyle: {
            default: {"width":"100px","height":"auto","marginTop":"0px","paddingLeft":"12px","paddingRight":"12px","paddingBottom":"10px","backgroundColor":"var(--business-show-bg30)","paddingTop":"8px","animationName":"","left":"531px","top":"-5.66668701171875px"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100px","height":"auto","marginTop":"0px","paddingLeft":"12px","paddingRight":"12px","paddingBottom":"10px","backgroundColor":"var(--business-show-bg30)","paddingTop":"8px","animationName":"","left":"531px","top":"-5.66668701171875px"}}}, 
 },
},
tTextx0x7x0x1x0x1x0: {
defaultStyle: {
            default: {"width":"96px","height":"22px","color":"var(--business-theme)","fontSize":"var(--business-text-size-14)","lineHeight":"22px","cursor":"pointer","animationName":"","left":"64px","top":"6.33331298828125px"},
            
            },
 default: { 
 
label:"展开更多",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"22px","color":"var(--business-theme)","fontSize":"var(--business-text-size-14)","lineHeight":"22px","cursor":"pointer","animationName":"","left":"64px","top":"6.33331298828125px"}}}, 
 },
},
tColx0x7x1: {
defaultStyle: {
            default: {"width":"100%","height":"auto","min-height":"150px","overflow":"visible"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","min-height":"150px","overflow":"visible"}}}, 
 },
},
tComponentx0x7x1x0: {
defaultStyle: {
            default: {"width":"418px","height":"auto","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)"},
            
            },
 default: { 
 
name:"watershedDetailsWaterQualityComponent",
cStyle:{"wrapper":{"default":{"width":"418px","height":"auto","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/watershedDetailsWaterQuality",
componentName:"watershedDetailsWaterQualityComponent", 
 },
},
tColx0x7x2: {
defaultStyle: {
            default: {"width":"100%","height":"auto","min-height":"150px","paddingLeft":"20px","paddingRight":"20px","display":"flex","flexDirection":"row","alignItems":"flex-start","justifyContent":"center","overflow":"visible"},
            
            },
 default: { 
 
span:24,
offset:0,
push:0,
pull:0,
cStyle:{"wrapper":{"default":{"width":"100%","height":"auto","min-height":"150px","paddingLeft":"20px","paddingRight":"20px","display":"flex","flexDirection":"row","alignItems":"flex-start","justifyContent":"center","overflow":"visible"}}}, 
 },
},
tSelectx0x8: {
defaultStyle: {
            default: {"width":"100px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"0px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal","borderTopLeftRadius":"4px","borderTopRightRadius":"0px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
activeValue:"month",
options:[{"value":"day","label":"日","disabled":false},{"value":"month","label":"月","disabled":false},{"value":"quarter","label":"季度","disabled":false},{"value":"halfYear","label":"半年","disabled":false},{"value":"year","label":"年","disabled":false}],
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
cStyle:{"wrapper":{"default":{"width":"100px","height":"32px","animationName":"","paddingLeft":"12px","paddingRight":"12px","fontSize":"var(--business-text-size-14)","backgroundColor":"var(--business-show-bg30)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"0px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"var(--business-white)","--el-select-border-color-hover":"var(--business-theme)","min-height":"32px","line-height":"normal","borderTopLeftRadius":"4px","borderTopRightRadius":"0px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"0px"},"focus":{"borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"0px solid var(--business-theme)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderBottomLeftRadius":"4px"},"hover":{"borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"0px solid var(--business-theme)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px","borderBottomLeftRadius":"4px"}},"dropdownArrow":{"default":{"display":"none"}},"arrow":{"default":{"color":"var(--business-unit-icon)","fontSize":"var(--business-text-size-14)"}},"placeholder":{"default":{"color":"var(--business-text-avianize)"}},"dropdownWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"dropdownItem":{"active":{"backgroundColor":"var(--business-show-bg15)","color":"var(--business-theme)"},"hover":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)"},"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)"}}}, 
 },
},
tDatePickerx0x9: {
defaultStyle: {
            default: {"width":"320px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"0px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"0px","borderTopRightRadius":"4px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},
            
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
cStyle:{"wrapper":{"default":{"width":"320px","height":"32px","--t-date-picker-input-placeholder-color":"var(--business-text-avianize) !important","--t-date-picker-splitline-color":"var(--business-show-bg50) !important","borderLeft":"0px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"0px","borderTopRightRadius":"4px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"4px","overflow":"hidden","animationName":""},"hover":{"borderLeft":"0px solid var(--business-theme)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopRightRadius":"4px","borderBottomRightRadius":"4px"}},"inputWrapper":{"default":{"backgroundColor":"var(--business-show-bg30)","borderLeft":"1px none var(--business-show-bg50)","borderTop":"1px none var(--business-show-bg50)","borderRight":"1px none var(--business-show-bg50)","borderBottom":"1px none var(--business-show-bg50)","color":"var(--business-white)","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","height":"100%"}},"inputDateIcons":{"default":{"color":"var(--business-text-avianize)"}},"dateWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)"}},"prevAndNextMonthDate":{"default":{"color":"var(--skin-font-color-40)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","fontSize":"var(--business-text-size-12)"}},"todayWrapper":{"default":{"color":"var(--business-theme)","backgroundColor":"var(--business-show-bg15)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px","fontSize":"var(--business-text-size-12)"}},"currentDateWrapper":{"default":{"color":"var(--skin-font-color-80)","fontSize":"var(--business-text-size-12)"},"hover":{"color":"var(--business-theme)"},"active":{"color":"rgba(255, 255, 255, 1)","backgroundColor":"var(--business-btn-default)","borderTopLeftRadius":"18px","borderTopRightRadius":"18px","borderBottomLeftRadius":"18px","borderBottomRightRadius":"18px"}},"selCurrentDateWrapper":{"default":{"backgroundColor":"var(--business-btn-default)","color":"rgba(255, 255, 255, 1)"}},"operatorArrow":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)"}},"dateHeaderWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-16) !important"},"hover":{"color":"var(--business-theme)"}},"weekWrapper":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-12)"}},"textBtnWrapper":{"default":{"borderLeft":"1px none rgba(253,9,1,0)","borderTop":"1px none rgba(253,9,1,0)","borderRight":"1px none rgba(253,9,1,0)","borderBottom":"1px none rgba(253,9,1,0)","color":"var(--business-btn-default)"},"hover":{"color":"var(--business-theme)"}},"okWrapper":{"default":{"color":"var(--business-white)","borderLeft":"1px solid var(--business-white)","borderTop":"1px solid var(--business-white)","borderRight":"1px solid var(--business-white)","borderBottom":"1px solid var(--business-white)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"timePanelWrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderLeft":"1px solid var(--business-show-bg50)","borderTop":"1px solid var(--business-show-bg50)","borderRight":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","color":"rgba(239, 0, 0, 1)"}},"timePanelNumWrapper":{"default":{"color":"var(--business-white)"},"hover":{"color":"var(--business-theme)","backgroundColor":"rgba(255, 255, 255, 0)"}},"currentWeekWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"},"hover":{"backgroundColor":"var(--business-show-bg15)","color":"rgba(255, 255, 255, 1)"}},"rangeInputWrapper":{"default":{"backgroundColor":"rgba(255, 255, 255, 0)","fontSize":"var(--text-size-14)","height":"100%"}},"rangeTimeWrapper":{"default":{"backgroundColor":"var(--business-show-bg15)"}}}, 
 },
},
});
const setProvider = () => {
const getToday = (type = 'day') => {
  // 创建当前日期对象
  const today = new Date();

  // 计算前一天（当前时间减去24小时的毫秒数）
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

  // 获取年、月、日
  const year = yesterday.getFullYear();
  // 月份从0开始，需要加1
  const month = String(yesterday.getMonth() + 1).padStart(2, '0');
  // 日期
  const day = String(yesterday.getDate()).padStart(2, '0');
  if (type === 'month') {
    const month2 = String(yesterday.getMonth()).padStart(2, '0');
    return [`${year}-${month2}`, `${year}-${month2}`];
  }

  // 格式化为"YYYY-MM-DD"
  return [`${year}-${month}-${day}`, `${year}-${month}-${day}`];
}
if(state.selectType === 'day'){
  state.timeType = 'daterange';
  state.timeData = getToday();
} else if (state.selectType === 'month'){
  state.timeType = 'monthrange';
  state.timeData = getToday('month');
}
const rootData2 = inject('surfaceWaterParamsState')
state.surfaceWaterParamsState = rootData2
console.log('135615631', state.surfaceWaterParamsState);

const setPageData = () => {
  // 流域编码
  state.WSYSTEM_CODE = global.regionaQuery.areaCode || '';
  // 填充页面标题
  state.title = global.regionaQuery.areaName || '-';
};
provide('WSystemState', state)

watch(
  () => global.regionaQuery.areaCode,
  () => {
    setPageData();
    apiRegistry.getBaseInfo.request();
  },
  {
    immediate: true,
    deep: true,
  }
)

watch(
  () => [
    state?.surfaceWaterParamsState?.TIME,
    state?.surfaceWaterParamsState?.ASSESSTYPE
  ],
  ([time, assesstype]) => {
    state.TIME = time || '';
    state.ASSESSTYPE = assesstype || ''
  },
  {
    immediate: true,
  }
)
};
const aroundQuery = () => {
/* 发送综合查询初始化业务参数的消息 */
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: "borderQuery", // 消息名称
  data: {
    id: state?.surfaceWaterParamsState?.wsystemRiverCompData?.WSYSTEM_CODE || state?.surfaceWaterParamsState?.wsystemRiverCompData?.WATER_CODE || '',
    layerName: state?.surfaceWaterParamsState?.wsystemRiverCompData?.layerName || '',
    name: state?.surfaceWaterParamsState?.wsystemRiverCompData?.WSYSTEM_NAME || state?.surfaceWaterParamsState?.wsystemRiverCompData?.WATER_NAME || '',
  },
});

// {
//     "room": "6a69lego94cb315b4cb61lego9ca754067",
//     "type": "borderQuery",
//     "data": {
//         "id": 0,
//         "layerName": "3kmarea"
//     }
// }

/* 发送综合查询初始化业务参数的消息 */
// rootData.rootSocket.emit('message', {
//   room: global.socketRoom, // 房间号
//   type: "borderQuery", // 消息名称
//   data: {
//     id: state.params.ID,
//     layerName: state.params.LAYER_NAME,
//     name: state.cardData[0].num
//   },
// });
};
const changeMoreBtnStatus = () => {
// 默认显示 展开更多 
state.isShowMore = !state.isShowMore;
};
const changeMoreBtnVisible = () => {
const domText = document.querySelectorAll("#t-gradient-text-589d\\.0f1fcc305 .t-text");
// 文本高度
let contentHeight = 44;
// 容器高度
const divHeight = 44;
if (domText.length) {
  contentHeight = domText[0].clientHeight;
}
state.showMore = contentHeight > divHeight
};
const changeMoreTextHeight = () => {
// 点击展开更多 修改 概述文本高度
const dom = document.querySelectorAll("#t-col-6c4c\\.d5dadb006");
const domText = document.querySelectorAll("#t-gradient-text-589d\\.0f1fcc305");

// 展开收起文字内容
state.zkText = state.isShowMore ? '展开更多' : '收起';

if (!state.isShowMore && dom?.length && domText?.length) {
  dom[0].style.height = 'max-content';
  domText[0].style.height = 'max-content';
} else if (dom?.length && domText?.length){
  dom[0].style.height = '54px';
  domText[0].style.height = '44px';
}
};
const close = () => {
console.log('执行关闭流域详情面板操作', state.cardData);
// 给地图发送消息清除图层
state.cardData.forEach(item => {
  let type, data;

  // 发送 清除 消息
  // && item.TAG_TOPIC_CODE !== "58500a42-3349-484c-8ce7-3b8ae8d5ae42"
  if (!item.TYPE) {
    // 除监测断面外的点数据
    type = "changeZhxcMapParams"
    data = [
      {
        "type": "remove-zhcx-layer",
        "params": {
          "layerPrefix": "yzt-zhcx-layerPrefix",
          "codes": [
            item.TAG_TOPIC_CODE
          ]
        }
      }
    ]
  } else if (item.TYPE && !["GL","ZL","QTHL", 'ZC', 'ZCQT', 'ZYHD', 'ZGHC'].includes(item.TAG_TOPIC_CODE)) {
    // 除干流、支流、其它河流外的面数据
    type = "setLayersAR";
    data = [{
      "libraryId": item.LAYER_NAME,
      "layerId": item.LAYER_NAME,
      "opType": "remove"
    }]
  }
  rootData.rootSocket.emit('message', {
    room: global.socketRoom,
    type,
    data
  });
})



};
const handleChangeTime = (val) => {
// state.surfaceWaterParamsState.TIME = val
// state.TIME = val


const isSameYear = (dates) => {
  // 确保输入是包含两个日期的数组
  if (!Array.isArray(dates) || dates.length !== 2) {
    return false;
  }

  // 解析日期
  const date1 = new Date(dates[0]);
  const date2 = new Date(dates[1]);

  // 检查日期是否有效
  if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
    return false;
  }

  // 比较年份
  return date1.getFullYear() === date2.getFullYear();
}
console.log(val, '选中时间');
const timeData = state.timeData;
console.log(timeData)
if (!isSameYear(val)) {
  state.isShow = false;
  ElementPlus.ElMessage({
    message: '当前选中的时间不允许跨年，请重新进行选择！',
    type: 'warning',
  });
  setTimeout(() => {
    state.isShow = true;
    state.timeData = timeData;
    console.log(state.timeData);
  }, 0)

} else {
  // setTimeout(() => {
  //   state.isShow = true;
  //   state.timeData = val;
  //   console.log(state.timeData);
  // }, 0)
  state.timeData = val;

}


};
const handleChangeAssesstype = (val) => {
state.surfaceWaterParamsState.ASSESSTYPE = val
state.ASSESSTYPE = val
};
const setTimeType = (type) => {
state.selectType = type;
const getToday = () => {
  // 创建当前日期对象
  const today = new Date();

  // 计算前一天（当前时间减去24小时的毫秒数）
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

  // 获取年、月、日
  const year = yesterday.getFullYear();
  // 月份从0开始，需要加1
  const month = String(yesterday.getMonth() + 1).padStart(2, '0');
  // 日期
  const day = String(yesterday.getDate()).padStart(2, '0');

  // 格式化为"YYYY-MM-DD"
  return [`${year}-${month}-${day}`, `${year}-${month}-${day}`];
}
const getTomonth = () => {
  // 创建当前日期对象
  const today = new Date();

  // 获取当前年份和月份
  let year = today.getFullYear();
  let month = today.getMonth(); // 月份从0开始（0表示1月，11表示12月）

  // 计算上一个月
  if (month === 0) {
    // 如果当前是1月（0），上一个月是去年12月
    year--;
    month = 11;
  } else {
    // 其他月份直接减1
    month--;
  }

  // 格式化月份为两位数（1-9月前补0）
  const formattedMonth = String(month + 1).padStart(2, '0');

  // 拼接成年-月格式
  const lastMonth = `${year}-${formattedMonth}`;
  return [lastMonth, lastMonth];
}
const getQuarter = () => {
  // 创建当前日期对象
  const today = new Date();
  // 获取当前月份（0表示1月，11表示12月）
  const currentMonth = today.getMonth();
  // 获取当前年份
  const currentYear = today.getFullYear();

  // 计算当前季度的起始月份（0, 3, 6, 9分别对应1,4,7,10月）
  const startMonth = Math.floor(currentMonth / 3) * 3;
  // 计算当前季度的结束月份
  const endMonth = startMonth + 2;

  // 格式化月份为两位数（1-9月前补0）
  const formatMonth = (month) => String(month + 1).padStart(2, '0');

  // 构建开始月和结束月的字符串格式
  const startMonthStr = `${currentYear}-${formatMonth(startMonth)}`;
  const endMonthStr = `${currentYear}-${formatMonth(endMonth)}`;
  return [startMonthStr, endMonthStr];

}

const getHalfYear = () => {
  // 获取当前日期
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 月份从0开始，0表示1月，11表示12月

  // 当前月份的信息（格式：YYYY-MM）
  const currentMonthStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}`;

  // 计算往前推5个月的日期
  let pastYear = currentYear;
  let pastMonth = currentMonth - 5;

  // 处理跨年情况
  if (pastMonth < 0) {
    pastYear -= Math.floor((-pastMonth) / 12) || 1;
    pastMonth = (pastMonth + 12) % 12;
  }

  // 前推5个月的信息（格式：YYYY-MM）
  const pastMonthStr = `${pastYear}-${String(pastMonth + 1).padStart(2, '0')}`;
  return [pastMonthStr, currentMonthStr];
}
const getYear = () => {
  // 创建当前日期对象
  const today = new Date();
  // 获取当前年份
  const currentYear = today.getFullYear();
  // 获取当前月份（注意月份从0开始，需要+1）
  const currentMonth = today.getMonth() + 1;

  // 格式化月份为两位数
  function formatMonth(month) {
    return month.toString().padStart(2, '0');
  }

  // 今年第一月
  const firstMonth = `${currentYear}-${formatMonth(1)}`;
  // 当前月
  const currentMonthFormatted = `${currentYear}-${formatMonth(currentMonth)}`;
  return [firstMonth, currentMonthFormatted];
}


if (type === 'day') {
  state.timeType = 'daterange';
  state.timeData = getToday();
} else if (type === 'month') {
  state.timeType = 'monthrange';
  state.timeData = getTomonth();
} else if (type === 'quarter') {
  state.timeType = 'monthrange';
  state.timeData = getQuarter();
} else if (type === 'halfYear') {
  state.timeType = 'monthrange';
  state.timeData = getHalfYear();
} else if (type === 'year') {
  state.timeType = 'monthrange';
  state.timeData = getYear();
}
setTimeout(()=>{
  state.isShow = true;
},0)

};
const ondateChange1739156837304 = (data) => {
// 执行自定义方法
handleChangeTime(data);
};
const onclick1739431382209 = () => {
// 执行自定义方法
aroundQuery();
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'integratedQuery.showIntegratedQuery',
                    value:true,
                    data: {
                      integratedQuery:{showIntegratedQuery: true}
                    },
                  });
};
const ontabClick1739156808635 = (data) => {
// 执行自定义方法
handleChangeAssesstype(data.value);
};
const onclick1738747371346 = () => {
// 执行自定义方法
changeMoreBtnStatus();
// 执行自定义方法
changeMoreTextHeight();
};
const onclick1733723979280 = () => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closeWaterWsystemRightPage", // 消息名称
data: {}, // 发送的数据
});
// 执行自定义方法
close();
};
const onchange1759112983399 = (value,selectValueArr,selectValueItem) => {
// 执行自定义方法
setTimeType(value);
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"MONITORTIME":"state.TIME","WSYSTEM_CODE":"global.regionaQuery.areaCode","interfaceId":"ca3a0f39869f87ba9583a86a7dd16a01"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"MONITORTIME":state.TIME,"WSYSTEM_CODE":global.regionaQuery.areaCode,"interfaceId":"ca3a0f39869f87ba9583a86a7dd16a01"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"MONITORTIME":state.TIME,"WSYSTEM_CODE":global.regionaQuery.areaCode,"interfaceId":"ca3a0f39869f87ba9583a86a7dd16a01"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getBaseInfo'] = res.data;
                
     console.log('流域入口 - 基本信息', res.data)
state.gsText = "--"
if (res?.data?.head?.statusCode === '200' && res?.data?.data) {
  state.gsText = res.data.data.DESCRIPTION || "--"
}
setTimeout(() => {
  state.isShowMore = true
  changeMoreBtnVisible();
  changeMoreTextHeight();
}, 0)
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.gsText = "--"
setTimeout(() => {
  state.isShowMore = true
  changeMoreBtnVisible();
  changeMoreTextHeight();
}, 0)
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [state.TIME], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getBaseInfo', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-watershedDetailsEnterNew', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setProvider();
/* 接收socket.io消息 */
const onSocketChangeabf1532158be45d5ac9e = function (data) {
if(data.type === "changeTheme"){
try{
// 执行自定义方法
changeMoreTextHeight();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangeabf1532158be45d5ac9e);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangeabf1532158be45d5ac9e);
});
onMounted(() => {
setPageScale('t-l-c-watershedDetailsEnterNew', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
changeMoreBtnVisible();
/* 接收socket.io消息 */
const onSocketChangeaff9d81a4a364ad583c5 = function (data) {
if(data.type === "resetWsystem"){
try{
// 执行自定义方法
close();
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "closeWaterWsystemRightPage", // 消息名称
data: {}, // 发送的数据
});
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangeaff9d81a4a364ad583c5);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangeaff9d81a4a364ad583c5);
});
});
onBeforeUnmount(() => {
// 执行自定义方法
close();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tRowx0x7ComputedData = computed(() => _.merge({}, componentState.tRowx0x7.default, componentState.tRowx0x7?.[state.screenSize]));

 const tColx0x7x0ComputedData = computed(() => _.merge({}, componentState.tColx0x7x0.default, componentState.tColx0x7x0?.[state.screenSize]));

 const tComponentx0x7x0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x7x0x0.default, componentState.tComponentx0x7x0x0?.[state.screenSize]));

 const tRowx0x7x0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x7x0x1.default, componentState.tRowx0x7x0x1?.[state.screenSize]));

 const tRowx0x7x0x1x0ComputedData = computed(() => _.merge({}, componentState.tRowx0x7x0x1x0.default, componentState.tRowx0x7x0x1x0?.[state.screenSize]));

 const tColx0x7x0x1x0x0ComputedData = computed(() => _.merge({}, componentState.tColx0x7x0x1x0x0.default, componentState.tColx0x7x0x1x0x0?.[state.screenSize]));

 const tGradientTextx0x7x0x1x0x0x2ComputedData = computed(() => _.merge({}, componentState.tGradientTextx0x7x0x1x0x0x2.default, componentState.tGradientTextx0x7x0x1x0x0x2?.[state.screenSize]));

 const tColx0x7x0x1x0x1ComputedData = computed(() => _.merge({}, componentState.tColx0x7x0x1x0x1.default, componentState.tColx0x7x0x1x0x1?.[state.screenSize]));

 const tTextx0x7x0x1x0x1x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x7x0x1x0x1x0.default, componentState.tTextx0x7x0x1x0x1x0?.[state.screenSize]));

 const tColx0x7x1ComputedData = computed(() => _.merge({}, componentState.tColx0x7x1.default, componentState.tColx0x7x1?.[state.screenSize]));

 const tComponentx0x7x1x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x7x1x0.default, componentState.tComponentx0x7x1x0?.[state.screenSize]));

 const tColx0x7x2ComputedData = computed(() => _.merge({}, componentState.tColx0x7x2.default, componentState.tColx0x7x2?.[state.screenSize]));

 const tSelectx0x8ComputedData = computed(() => _.merge({}, componentState.tSelectx0x8.default, componentState.tSelectx0x8?.[state.screenSize]));

 const tDatePickerx0x9ComputedData = computed(() => _.merge({}, componentState.tDatePickerx0x9.default, componentState.tDatePickerx0x9?.[state.screenSize]));

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
tRectx0x1ComputedData,
tTextx0x2ComputedData,
tRectx0x3ComputedData,
tTextx0x5ComputedData,
tRowx0x7ComputedData,
tColx0x7x0ComputedData,
tComponentx0x7x0x0ComputedData,
tRowx0x7x0x1ComputedData,
tRowx0x7x0x1x0ComputedData,
tColx0x7x0x1x0x0ComputedData,
tGradientTextx0x7x0x1x0x0x2ComputedData,
tColx0x7x0x1x0x1ComputedData,
tTextx0x7x0x1x0x1x0ComputedData,
tColx0x7x1ComputedData,
tComponentx0x7x1x0ComputedData,
tColx0x7x2ComputedData,
tSelectx0x8ComputedData,
tDatePickerx0x9ComputedData,
onclick1733723979280,
onclick1738747371346,
onchange1759112983399,
ondateChange1739156837304,
};
},
};