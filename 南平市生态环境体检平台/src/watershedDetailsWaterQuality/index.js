window.watershedDetailsWaterQualityComponent = {
template: 
`<div id="t-l-c-watershedDetailsWaterQuality" class="t-l-c-watershedDetailsWaterQuality" >` +
`<t-component id="t-component-ded9.0f5a924fa" class="watershedDetailsWaterQuality-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-4f99.3a44d10f5" class="watershedDetailsWaterQuality-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-b9b0.5b3c425c9" class="watershedDetailsWaterQuality-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-2270.4c8164d69" class="watershedDetailsWaterQuality-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-d10e.36d31aed1" class="watershedDetailsWaterQuality-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle">` +
`</t-rect>` +
`<t-list-card id="t-list-card-7bc9.9ca6ae644" class="watershedDetailsWaterQuality-t-list-card-0-5"  :data="replaceCssVariables(filterData(state.card3, componentPropBindingMap?.['t-list-card-7bc9.9ca6ae644']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x5ComputedData.spacingX" :col="tListCardx0x5ComputedData.col" :direction="tListCardx0x5ComputedData.direction" :exchange-order="tListCardx0x5ComputedData.exchangeOrder" :unit-break="tListCardx0x5ComputedData.unitBreak" :key-field="tListCardx0x5ComputedData.keyField" :active-key-field="tListCardx0x5ComputedData.activeKeyField" :active="tListCardx0x5ComputedData.active" :c-style="tListCardx0x5ComputedData.cStyle">` +
`</t-list-card>` +
`<t-list-card id="t-list-card-79e9.677721839" class="watershedDetailsWaterQuality-t-list-card-0-6"  :data="replaceCssVariables(filterData(state.card2, componentPropBindingMap?.['t-list-card-79e9.677721839']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x6ComputedData.spacingX" :col="tListCardx0x6ComputedData.col" :direction="tListCardx0x6ComputedData.direction" :exchange-order="tListCardx0x6ComputedData.exchangeOrder" :unit-break="tListCardx0x6ComputedData.unitBreak" :key-field="tListCardx0x6ComputedData.keyField" :active-key-field="tListCardx0x6ComputedData.activeKeyField" :active="tListCardx0x6ComputedData.active" :c-style="tListCardx0x6ComputedData.cStyle">` +
`</t-list-card>` +
`<t-list-card id="t-list-card-1bff.f8cf6da4f" class="watershedDetailsWaterQuality-t-list-card-0-7"  :data="replaceCssVariables(filterData(state.card1, componentPropBindingMap?.['t-list-card-1bff.f8cf6da4f']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :spacing-x="tListCardx0x7ComputedData.spacingX" :col="tListCardx0x7ComputedData.col" :direction="tListCardx0x7ComputedData.direction" :exchange-order="tListCardx0x7ComputedData.exchangeOrder" :unit-break="tListCardx0x7ComputedData.unitBreak" :key-field="tListCardx0x7ComputedData.keyField" :active-key-field="tListCardx0x7ComputedData.activeKeyField" :active="tListCardx0x7ComputedData.active" :c-style="tListCardx0x7ComputedData.cStyle">` +
`</t-list-card>` +
`<t-rect id="t-rect-d0b7.38485f8af" class="watershedDetailsWaterQuality-t-rect-0-8"  :tip="tRectx0x8ComputedData.tip" :label="tRectx0x8ComputedData.label" :active="tRectx0x8ComputedData.active" :c-style="tRectx0x8ComputedData.cStyle">` +
`</t-rect>` +
`<t-row id="t-row-4d54.8ba213f9b" class="watershedDetailsWaterQuality-t-row-0-9"  :c-style="tRowx0x9ComputedData.cStyle" :gutter="tRowx0x9ComputedData.gutter" :justify="tRowx0x9ComputedData.justify" :align="tRowx0x9ComputedData.align">` +
`<t-text id="t-text-c76f.62b392aad" class="watershedDetailsWaterQuality-t-text-0-9-0"  :label="tTextx0x9x0ComputedData.label" :editable="tTextx0x9x0ComputedData.editable" :c-style="tTextx0x9x0ComputedData.cStyle">` +
`</t-text>` +
`<t-high-light-text id="t-high-light-text-0482.21c14061a" class="watershedDetailsWaterQuality-t-high-light-text-0-9-1"  :fragment-list="replaceCssVariables(filterData(state.WATERQUALITYLEVELTARGETNAME, componentPropBindingMap?.['t-high-light-text-0482.21c14061a']['fragmentList'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :styles="replaceCssVariables(filterData(state.style1, componentPropBindingMap?.['t-high-light-text-0482.21c14061a']['styles'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tHighLightTextx0x9x1ComputedData.cStyle">` +
`</t-high-light-text>` +
`<t-text id="t-text-9622.d00bf60a7" class="watershedDetailsWaterQuality-t-text-0-9-2"  :label="tTextx0x9x2ComputedData.label" :editable="tTextx0x9x2ComputedData.editable" :c-style="tTextx0x9x2ComputedData.cStyle">` +
`</t-text>` +
`<t-high-light-text id="t-high-light-text-33f4.69864ada6" class="watershedDetailsWaterQuality-t-high-light-text-0-9-3"  :fragment-list="replaceCssVariables(filterData(state.WATERQUALITYLEVELNAME_LAST, componentPropBindingMap?.['t-high-light-text-33f4.69864ada6']['fragmentList'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :styles="replaceCssVariables(filterData(state.style2, componentPropBindingMap?.['t-high-light-text-33f4.69864ada6']['styles'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tHighLightTextx0x9x3ComputedData.cStyle">` +
`</t-high-light-text>` +
`</t-row>` +
`<t-text id="t-text-957c.9ed338dcd" class="watershedDetailsWaterQuality-t-text-0-10"  :label="tTextx0x10ComputedData.label" :editable="tTextx0x10ComputedData.editable" :c-style="tTextx0x10ComputedData.cStyle">` +
`</t-text>` +
`<t-text-common id="t-text-common-8ce8.4497fa889" class="watershedDetailsWaterQuality-t-text-common-0-12"  :label="tTextCommonx0x12ComputedData.label" :editable="tTextCommonx0x12ComputedData.editable" :c-style="tTextCommonx0x12ComputedData.cStyle">` +
`</t-text-common>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-component-ded9.0f5a924fa":{"attributeName":"tComponentx0x0","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-4f99.3a44d10f5":{"attributeName":"tTextx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-b9b0.5b3c425c9":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-2270.4c8164d69":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-d10e.36d31aed1":{"attributeName":"tRectx0x4","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-7bc9.9ca6ae644":{"attributeName":"tListCardx0x5","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-79e9.677721839":{"attributeName":"tListCardx0x6","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-list-card-1bff.f8cf6da4f":{"attributeName":"tListCardx0x7","data":{"filters":[]},"spacingX":{"filters":[]},"col":{"filters":[]},"direction":{"filters":[]},"exchangeOrder":{"filters":[]},"unitBreak":{"filters":[]},"keyField":{"filters":[]},"activeKeyField":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-d0b7.38485f8af":{"attributeName":"tRectx0x8","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-row-4d54.8ba213f9b":{"attributeName":"tRowx0x9","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-text-c76f.62b392aad":{"attributeName":"tTextx0x9x0","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-high-light-text-0482.21c14061a":{"attributeName":"tHighLightTextx0x9x1","fragmentList":{"filters":[]},"styles":{"filters":[]},"cStyle":{"filters":[]}},"t-text-9622.d00bf60a7":{"attributeName":"tTextx0x9x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-high-light-text-33f4.69864ada6":{"attributeName":"tHighLightTextx0x9x3","fragmentList":{"filters":[]},"styles":{"filters":[]},"cStyle":{"filters":[]}},"t-text-957c.9ed338dcd":{"attributeName":"tTextx0x10","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-59a6.324635a6e":{"attributeName":"tImageBasex0x11"},"t-text-common-8ce8.4497fa889":{"attributeName":"tTextCommonx0x12","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   waterCode: "",
   codeWsystem: "",
   evaObjectType: "",
   endTime: "",
   beginTime: "",
   monitorType: "0",
   WSYSTEM_CODE: "",
   card3: [{"title":"去年同期","num":"--","unit":"%"},{"title":"去年同期","num":"--","unit":"%"},{"title":"去年同期","num":"--","unit":"%"}],
   card2: [{"title":"达标率","num":"--","unit":"%","color":"#3A9CFF"},{"title":"优良率","num":"--","unit":"%","color":"rgba(0, 153, 20, 1)"},{"title":"劣V类","num":"--","unit":"%","color":"#FFC000"}],
   card1: [{"title":"断面总数","num":"--","unit":"个","color":"var(--business-theme)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-01-05/c455d26bb2b44f2cb0b5aecbd0b2eb43.png"},{"title":"优良断面","num":"--","unit":"个","color":"rgba(0, 153, 20, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-01-05/80b32d24a02548d4a4766b6f29301a37.png"},{"title":"超标断面","num":"--","unit":"个","color":"rgba(255, 192, 0, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-01-05/3e691744524c468f8cd1990f8bc03b69.png"}],
   style2: [{"name":"style1","style":{"fontFamily":"微软雅黑","fontWeight":700,"color":"#B7E3FF"}}],
   style1: [{"name":"style1","style":{"fontFamily":"微软雅黑","fontWeight":700,"color":"#B7E3FF"}}],
   WATERQUALITYLEVELTARGETNAME: [{"text":"--","styleName":"style1"}],
   WATERQUALITYLEVELNAME_LAST: [{"text":"--","styleName":"style1"}],
   ASSESSTYPE: "",
   TIME: "",
   imgUrl: "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-10/cad08c7c8d6a4f04a52ded146db0b10f.svg",
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
            default: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"19px","top":"-1px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"19px","top":"-1px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"130px","height":"31px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"59px","top":"-1px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":"","lineHeight":"31px"},
            
            },
 default: { 
 
label:"流域水质现状",
editable:false,
cStyle:{"wrapper":{"default":{"width":"130px","height":"31px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"59px","top":"-1px","fontFamily":"方正综艺","fontSize":"var(--business-text-size-20)","animationName":"","lineHeight":"31px"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"131px","height":"72px","position":"unset","left":"19px","top":"223px","color":"rgba(51, 72, 164, 1)","backgroundColor":"var(--business-show-bg30)","animationName":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"131px","height":"72px","position":"unset","left":"19px","top":"223px","color":"rgba(51, 72, 164, 1)","backgroundColor":"var(--business-show-bg30)","animationName":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"131px","height":"72px","position":"unset","left":"158px","top":"224px","color":"rgba(51, 72, 164, 1)","backgroundColor":"var(--business-show-bg30)","animationName":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"131px","height":"72px","position":"unset","left":"158px","top":"224px","color":"rgba(51, 72, 164, 1)","backgroundColor":"var(--business-show-bg30)","animationName":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"131px","height":"72px","position":"unset","left":"298px","top":"224px","color":"rgba(51, 72, 164, 1)","backgroundColor":"var(--business-show-bg30)","animationName":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"131px","height":"72px","position":"unset","left":"298px","top":"224px","color":"rgba(51, 72, 164, 1)","backgroundColor":"var(--business-show-bg30)","animationName":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}}}, 
 },
},
tListCardx0x5: {
defaultStyle: {
            default: {"width":"420px","height":"68px","animationName":"","display":"flex","justifyContent":"space-between","fontWeight":"400","fontFamily":"微软雅黑","fontSize":"24px"},
            
            },
 default: { 
 
data:[{"title":"去年同期","num":"--","unit":"%"},{"title":"去年同期","num":"--","unit":"%"},{"title":"去年同期","num":"--","unit":"%"}],
spacingX:4,
col:3,
direction:"horizontal",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","selectIcon":"icon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"420px","height":"68px","animationName":"","display":"flex","justifyContent":"space-between","fontWeight":"400","fontFamily":"微软雅黑","fontSize":"24px"}},"itemWrapper":{"default":{"width":"146px","height":"70px","padding":"0 20px 0px 16px","textAlign":"right","lineHeight":"18px","backgroundColor":"rgba(29, 57, 84, 0)","display":"flex","justifyContent":"space-between"},"active":{}},"num":{"default":{"fontSize":"var(--business-num-size-20)","fontWeight":"500","marginRight":"6px","lineHeight":"24px","fontFamily":"DIN-bold","color":"var(--business-white)"}},"numBox":{"default":{"marginTop":"0px","justifyContent":"flex-end"}},"title":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-14)","lineHeight":"var(--business-text-size-14)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"unit":{"default":{"color":"#B7E3FF","fontSize":"var(--business-text-size-12)"}},"icon":{"default":{"width":"32px","height":"32px"}}}, 
 },
},
tListCardx0x6: {
defaultStyle: {
            default: {"width":"420px","height":"68px","animationName":"","fontSize":"24px"},
            
            },
 default: { 
 
data:[{"title":"达标率","num":"--","unit":"%","color":"#3A9CFF"},{"title":"优良率","num":"--","unit":"%","color":"rgba(0, 153, 20, 1)"},{"title":"劣V类","num":"--","unit":"%","color":"#FFC000"}],
spacingX:4,
col:3,
direction:"horizontal",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","selectIcon":"icon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"420px","height":"68px","animationName":"","fontSize":"24px"}},"itemWrapper":{"default":{"width":"146px","height":"70px","padding":"0 20px 0px 16px","textAlign":"right","lineHeight":"18px","backgroundColor":"rgba(29, 57, 84, 0)","display":"flex","alignItems":"center","justifyContent":"space-between"},"active":{}},"num":{"default":{"fontSize":"var(--business-num-size-20)","fontWeight":"500","marginRight":"6px","lineHeight":"24px","fontFamily":"DIN-bold"}},"numBox":{"default":{"marginTop":"0px","justifyContent":"flex-end"}},"title":{"default":{"color":"var(--business-white)","fontSize":"var(--business-text-size-14)","lineHeight":"var(--business-text-size-14)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"unit":{"default":{"color":"#B7E3FF","fontSize":"var(--business-text-size-12)"}},"icon":{"default":{"width":"32px","height":"32px"}}}, 
 },
},
tListCardx0x7: {
defaultStyle: {
            default: {"width":"418px","height":"68px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"},
            
            },
 default: { 
 
data:[{"title":"断面总数","num":"--","unit":"个","color":"var(--business-theme)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-01-05/c455d26bb2b44f2cb0b5aecbd0b2eb43.png"},{"title":"优良断面","num":"--","unit":"个","color":"rgba(0, 153, 20, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-01-05/80b32d24a02548d4a4766b6f29301a37.png"},{"title":"超标断面","num":"--","unit":"个","color":"rgba(255, 192, 0, 1)","icon":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2023-01-05/3e691744524c468f8cd1990f8bc03b69.png"}],
spacingX:8,
col:3,
direction:"vertical",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","trend":"trend","color":"color","selectIcon":"icon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"418px","height":"68px","lineHeight":"18px","animationName":"","paddingRight":"0px","paddingLeft":"0px"}},"itemWrapper":{"default":{"height":"66px","backgroundImage":"","backgroundRepeat":"","backgroundSize":"","backgroundPosition":"","width":"auto","backgroundColor":"var(--business-show-bg30)","lineHeight":"18px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","paddingRight":"0px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","cursor":"auto"}},"num":{"default":{"fontSize":"var(--business-num-size-20)","fontWeight":"700","marginRight":"2px","lineHeight":"20px","textAlign":"left","fontFamily":"DIN-bold","color":"var(--t-aqi-green)"}},"unit":{"default":{"fontSize":"var(--business-text-size-12)","color":"var(--business-unit-icon)"}},"title":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)","marginTop":"4px","lineHeight":"var(--business-text-size-14)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden","max-width":"calc(100% - 1px)"}},"icon":{"default":{"width":"32px","height":"32px","left":"16px","marginLeft":"14px"}},"numBox":{"default":{"marginTop":"6px"}},"outerWrapper":{"default":{"borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}}}, 
 },
},
tRectx0x8: {
defaultStyle: {
            default: {"width":"410px","height":"87px","position":"unset","left":"20px","top":"44px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg10)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"87px","position":"unset","left":"20px","top":"44px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg10)"}}}, 
 },
},
tRowx0x9: {
defaultStyle: {
            default: {"width":"293px","height":"16px","textAlign":"right","position":"unset","left":"125px","top":"84px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"visible","lineHeight":"16px","fontSize":"16px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"293px","height":"16px","textAlign":"right","position":"unset","left":"125px","top":"84px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"visible","lineHeight":"16px","fontSize":"16px"}}},
gutter:0,
justify:"end",
align:"bottom", 
 },
},
tTextx0x9x0: {
defaultStyle: {
            default: {"width":"auto","height":"14px","color":"var(--business-white)","position":"unset","left":"202px","top":"86px","fontSize":"var(--business-text-size-14)","lineHeight":"14px"},
            
            },
 default: { 
 
label:"水质目标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"14px","color":"var(--business-white)","position":"unset","left":"202px","top":"86px","fontSize":"var(--business-text-size-14)","lineHeight":"14px"}}}, 
 },
},
tHighLightTextx0x9x1: {
defaultStyle: {
            default: {"width":"auto","height":"16px","position":"unset","left":"264px","top":"84px","fontWeight":"700","fontSize":"var(--business-text-size-16)","lineHeight":"14px","marginLeft":"6px"},
            
            },
 default: { 
 
fragmentList:[{"text":"--","styleName":"style1"}],
styles:[{"name":"style1","style":{"fontFamily":"微软雅黑","fontWeight":700,"color":"#B7E3FF"}}],
cStyle:{"wrapper":{"default":{"width":"auto","height":"16px","position":"unset","left":"264px","top":"84px","fontWeight":"700","fontSize":"var(--business-text-size-16)","lineHeight":"14px","marginLeft":"6px"}}}, 
 },
},
tTextx0x9x2: {
defaultStyle: {
            default: {"width":"auto","height":"14px","color":"var(--business-white)","position":"unset","left":"313px","top":"86px","fontSize":"var(--business-text-size-14)","paddingLeft":"12px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"0px solid rgb(23,62,228)","borderRight":"0px solid rgb(23,62,228)","borderBottom":"0px solid rgb(23,62,228)","lineHeight":"14px","marginLeft":"12px"},
            
            },
 default: { 
 
label:"去年同期",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"14px","color":"var(--business-white)","position":"unset","left":"313px","top":"86px","fontSize":"var(--business-text-size-14)","paddingLeft":"12px","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"0px solid rgb(23,62,228)","borderRight":"0px solid rgb(23,62,228)","borderBottom":"0px solid rgb(23,62,228)","lineHeight":"14px","marginLeft":"12px"}}}, 
 },
},
tHighLightTextx0x9x3: {
defaultStyle: {
            default: {"width":"auto","height":"16px","position":"unset","left":"385px","top":"84px","fontWeight":"700","fontSize":"var(--business-text-size-16)","animationName":"","lineHeight":"14px","marginLeft":"6px"},
            
            },
 default: { 
 
fragmentList:[{"text":"--","styleName":"style1"}],
styles:[{"name":"style1","style":{"fontFamily":"微软雅黑","fontWeight":700,"color":"#B7E3FF"}}],
cStyle:{"wrapper":{"default":{"width":"auto","height":"16px","position":"unset","left":"385px","top":"84px","fontWeight":"700","fontSize":"var(--business-text-size-16)","animationName":"","lineHeight":"14px","marginLeft":"6px"}}}, 
 },
},
tTextx0x10: {
defaultStyle: {
            default: {"width":"auto","height":"20px","color":"var(--business-white)","position":"unset","left":"32px","top":"52px","fontSize":"var(--business-text-size-16)","fontWeight":"700"},
            
            },
 default: { 
 
label:"流域水质",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"20px","color":"var(--business-white)","position":"unset","left":"32px","top":"52px","fontSize":"var(--business-text-size-16)","fontWeight":"700"}}}, 
 },
},
tTextCommonx0x12: {
defaultStyle: {
            default: {"width":"96px","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-12)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"16px","top":"82px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"暂无数据",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"20px","color":"var(--business-white)","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"var(--business-text-size-12)","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"16px","top":"82px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
});
const getProvider = () => {

const rootData = inject('WSystemState');

const init = async () => {
  // await getSectionCount();
  await apiRegistry.getNewData.request();
  // getData();
  // getRemainingData();
}

watch(
  () => rootData,
  (val) => {
    debugger;
    console.log(val, '父参数');
    state.ASSESSTYPE = val?.ASSESSTYPE || "monthly";
    state.TIME = val?.TIME || "2024-12";
    if (val?.selectType === 'day') {
      state.monitorType = 0;
    } else {
      state.monitorType = 1;
    }
    state.beginTime = val?.timeData[0];
    state.endTime = val?.timeData[1];
    state.codeWsystem = val?.WSYSTEM_CODE;
    init();
  },
  {
    immediate: true,
    deep: true
  }
)
};
const getWaterLevelSrc = (value) => {
// 暂无数据
const noDataSrc = "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-10/cad08c7c8d6a4f04a52ded146db0b10f.svg"

// 断面总数小于五个，展示Ⅰ类到劣Ⅴ类
const src1 = [
  "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-05/be58a09b336d4540b40f23617b696258.svg",
  "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-05/f53143030a6e45a4ac58a183a16be307.svg",
  "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-05/08a353896abd40229e4e3c858d624ca7.svg",
  "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-05/f3ad45c0f1c74d059c615565ff17b97e.svg",
  "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-05/8b520c66d3ff42ba8ce33060d95c66a3.svg",
  "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-05/9a2ee4dab881476b97a9bcdb5bd3b808.svg"
]

// 断面总数大于等于五个，展示优到重度污染（Ⅰ类、Ⅱ类-优，Ⅲ类-良好，Ⅳ类-轻度污染，Ⅴ类-中度污染，劣Ⅴ类-重度污染）
const src2 = [
  "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-10/5f998a80516f4edfb9382612c2a87227.svg",
  "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-10/5f998a80516f4edfb9382612c2a87227.svg",
  "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-10/ea86814cfa9e47a3863834094632f77c.svg",
  "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-10/64227e0521284c71a1ee07cb214a3aff.svg",
  "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-10/9755e8d562ff420f88c845b7cbd7a9f6.svg",
  "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2025-02-10/b447539827574241a44c6dca5a253591.svg"
]

// 断面总数是否大于等于五个
const flag = state.card1[0].num >= 5

// 映射关系
const valueToIndex = {
  "0": -1,
  "": -1,
  "--": -1,
  "1": 0,
  "Ⅰ类": 0,
  "I类": 0,
  "优": 0,
  "2": 1,
  "Ⅱ类": 1,
  "II类": 1,
  "良好": 1,
  "3": 2,
  "Ⅲ类": 2,
  "III类": 2,
  "4": 3,
  "Ⅳ类": 3,
  "IV类": 3,
  "轻度污染": 3,
  "5": 4,
  "Ⅴ类": 4,
  "V类": 4,
  "中度污染": 4,
  "6": 5,
  "劣Ⅴ类": 5,
  "劣V类": 5,
  "重度污染": 5,
};

// 获取对应的索引
const index = valueToIndex[value] ?? -1;

// 返回结果
let src = index === -1 ? noDataSrc : (flag ? src2[index] : src1[index]);

return src;
};
const getWaterLevelName = (value) => {
// 暂无数据
const noData = {
  color: "#B7E3FF",
  name: "--"
}

// 断面总数小于五个，展示Ⅰ类到劣Ⅴ类
const name1 = [
  {
    color: "#ccffff",
    name: "Ⅰ类"
  },
  {
    color: "#00ccff",
    name: "Ⅱ类"
  },
  {
    color: "#00ff00",
    name: "Ⅲ类"
  },
  {
    color: "#ffff00",
    name: "Ⅳ类"
  },
  {
    color: "#ff9b00",
    name: "Ⅴ类"
  },
  {
    color: "#ff0000",
    name: "劣Ⅴ类"
  }
]

// 断面总数大于等于五个，展示优到重度污染（Ⅰ类、Ⅱ类-优，Ⅲ类-良好，Ⅳ类-轻度污染，Ⅴ类-中度污染，劣Ⅴ类-重度污染）
const name2 = [
  {
    color: "#00ccff",
    name: "优"
  },
  {
    color: "#00ccff",
    name: "优"
  },
  {
    color: "#00ff00",
    name: "良好"
  },
  {
    color: "#ffff00",
    name: "轻度污染"
  },
  {
    color: "#ff9b00",
    name: "中度污染"
  },
  {
    color: "#ff0000",
    name: "重度污染"
  }
]

// 断面总数是否大于等于五个
const flag = state.card1[0].num >= 5

// 映射关系
const valueToIndex = {
  "0": -1,
  "": -1,
  "--": -1,
  "1": 0,
  "Ⅰ类": 0,
  "I类": 0,
  "优": 0,
  "2": 1,
  "Ⅱ类": 1,
  "II类": 1,
  "良好": 1,
  "3": 2,
  "Ⅲ类": 2,
  "III类": 2,
  "4": 3,
  "Ⅳ类": 3,
  "IV类": 3,
  "轻度污染": 3,
  "5": 4,
  "Ⅴ类": 4,
  "V类": 4,
  "中度污染": 4,
  "6": 5,
  "劣Ⅴ类": 5,
  "劣V类": 5,
  "重度污染": 5,
};


// 获取对应的索引
const index = valueToIndex[value] ?? -1;

// 返回结果
let data = index === -1 ? noData : (flag ? name2[index] : name1[index]);

return data;
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getSectionCount: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTYPE":"1","REGION_CODE":"","MONITORTIME":"state.TIME","WSYSTEM_CODE":"global.regionaQuery.areaCode","interfaceId":"ff529dcb524c1d5a69757cd08f6231ba"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTYPE":"1","REGION_CODE":"","MONITORTIME":state.TIME,"WSYSTEM_CODE":global.regionaQuery.areaCode,"interfaceId":"ff529dcb524c1d5a69757cd08f6231ba"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"CODE_WQDATASOURCETYPE":"surfaceWater","MONITORTYPE":"1","REGION_CODE":"","MONITORTIME":state.TIME,"WSYSTEM_CODE":global.regionaQuery.areaCode,"interfaceId":"ff529dcb524c1d5a69757cd08f6231ba"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getSectionCount'] = res.data;
                
     state.card1[0].num = "--" // 断面总数
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  state.card1[0].num = data.data.POINTCOUNT || "--" // 断面总数
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.card1[0].num = "--" // 断面总数
      reject(error);
    });
  });
},
              },
// 接口函数
 getData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"ENTITY_TYPE":"WSYSTEM","MONITORTIME":"state.TIME","ASSESSTYPE":"state.ASSESSTYPE","WSYSTEM_CODE":"global.regionaQuery.areaCode","interfaceId":"950c1b85c6fe2435ce19db8a17d9b083"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"ENTITY_TYPE":"WSYSTEM","MONITORTIME":state.TIME,"ASSESSTYPE":state.ASSESSTYPE,"WSYSTEM_CODE":global.regionaQuery.areaCode,"interfaceId":"950c1b85c6fe2435ce19db8a17d9b083"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"ENTITY_TYPE":"WSYSTEM","MONITORTIME":state.TIME,"ASSESSTYPE":state.ASSESSTYPE,"WSYSTEM_CODE":global.regionaQuery.areaCode,"interfaceId":"950c1b85c6fe2435ce19db8a17d9b083"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getData'] = res.data;
                
     const nodata = getWaterLevelName("")
// 水质目标
state.WATERQUALITYLEVELTARGETNAME[0].text = nodata.name
state.style1[0].style.color = nodata.color

// 去年同期
state.WATERQUALITYLEVELNAME_LAST[0].text = nodata.name
state.style2[0].style.color = nodata.color

// 水质现状
state.imgUrl = getWaterLevelSrc("")
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  const { WATERQUALITYLEVELTARGETNAME, WATERQUALITYLEVELNAME_LAST, CODE_WATERQUALITYLEVEL } = data.data;
  // 水质目标
  const target = getWaterLevelName(WATERQUALITYLEVELTARGETNAME || "")
  state.style1[0].style.color = target.color
  state.WATERQUALITYLEVELTARGETNAME[0].text = target.name

  // 去年同期
  const last = getWaterLevelName(WATERQUALITYLEVELNAME_LAST || "")
  state.style2[0].style.color = last.color
  state.WATERQUALITYLEVELNAME_LAST[0].text = last.name

  // 水质现状
  state.imgUrl = getWaterLevelSrc(CODE_WATERQUALITYLEVEL || "")
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      const nodata = getWaterLevelName("")
// 水质目标
state.WATERQUALITYLEVELTARGETNAME[0].text = nodata.name
state.style1[0].style.color = nodata.color

// 去年同期
state.WATERQUALITYLEVELNAME_LAST[0].text = nodata.name
state.style2[0].style.color = nodata.color

// 水质现状
state.imgUrl = getWaterLevelSrc("")
      reject(error);
    });
  });
},
              },
// 接口函数
 getRemainingData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"REGION_CODE":"","ASSESSTYPE":"state.ASSESSTYPE","MONITORTIME":"state.TIME","WSYSTEM_CODE":"global.regionaQuery.areaCode","interfaceId":"5b68a402ee2000580080829b4fc68a02"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"REGION_CODE":"","ASSESSTYPE":state.ASSESSTYPE,"MONITORTIME":state.TIME,"WSYSTEM_CODE":global.regionaQuery.areaCode,"interfaceId":"5b68a402ee2000580080829b4fc68a02"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"REGION_CODE":"","ASSESSTYPE":state.ASSESSTYPE,"MONITORTIME":state.TIME,"WSYSTEM_CODE":global.regionaQuery.areaCode,"interfaceId":"5b68a402ee2000580080829b4fc68a02"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getRemainingData'] = res.data;
                
     state.card1[1].num = "--"; // 优良断面
state.card1[2].num = "--"; // 超标断面
state.card2[0].num = "--"; // 达标率
state.card2[1].num = "--"; // 优良率
state.card2[2].num = "--"; // 劣Ⅴ类
state.card3[0].num = "--"; // 去年同期-达标率
state.card3[1].num = "--"; // 去年同期-优良率
state.card3[2].num = "--"; // 去年同期-劣Ⅴ类
const { data } = res;
if (data?.head?.statusCode === '200' && data?.data) {
  const { GOODPOINTCOUNT, STANDARDRATE, GOODRATE, BADRATE, STANDARDRATE_LAST, GOODRATE_LAST, BADRATE_LAST, BADPOINTCOUNT } = data.data
  state.card1[1].num = GOODPOINTCOUNT || "--"; // 优良断面
  state.card1[2].num = BADPOINTCOUNT || "--"; // 超标断面
  state.card2[0].num = STANDARDRATE || "--"; // 达标率
  state.card2[1].num = GOODRATE || "--"; // 优良率
  state.card2[2].num = BADRATE || "--"; // 劣Ⅴ类
  state.card3[0].num = STANDARDRATE_LAST || "--"; // 去年同期-达标率
  state.card3[1].num = GOODRATE_LAST || "--"; // 去年同期-优良率
  state.card3[2].num = BADRATE_LAST || "--"; // 去年同期-劣Ⅴ类
}
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.card1[1].num = "--"; // 优良断面
state.card1[2].num = "--"; // 超标断面
state.card2[0].num = "--"; // 达标率
state.card2[1].num = "--"; // 优良率
state.card2[2].num = "--"; // 劣Ⅴ类
state.card3[0].num = "--"; // 去年同期-达标率
state.card3[1].num = "--"; // 去年同期-优良率
state.card3[2].num = "--"; // 去年同期-劣Ⅴ类
      reject(error);
    });
  });
},
              },
// 接口函数
 getNewData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"waterCode":"","codeWsystem":"state.codeWsystem","evaObjectType":"wsystem","endTime":"state.endTime","beginTime":"state.beginTime","monitorType":"state.monitorType","interfaceId":"059e814336e17c910fa297e7660d81ed"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"waterCode":"","codeWsystem":state.codeWsystem,"evaObjectType":"wsystem","endTime":state.endTime,"beginTime":state.beginTime,"monitorType":state.monitorType,"interfaceId":"059e814336e17c910fa297e7660d81ed"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"waterCode":"","codeWsystem":state.codeWsystem,"evaObjectType":"wsystem","endTime":state.endTime,"beginTime":state.beginTime,"monitorType":state.monitorType,"interfaceId":"059e814336e17c910fa297e7660d81ed"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getNewData'] = res.data;
                
     state.card1[1].num = "--"; // 优良断面
state.card1[2].num = "--"; // 超标断面
state.card2[0].num = "--"; // 达标率
state.card2[1].num = "--"; // 优良率
state.card2[2].num = "--"; // 劣Ⅴ类
state.card3[0].num = "--"; // 去年同期-达标率
state.card3[1].num = "--"; // 去年同期-优良率
state.card3[2].num = "--"; // 去年同期-劣Ⅴ类
state.card1[0].num = "--" // 断面总数

const nodata = getWaterLevelName("")
// 水质目标
state.WATERQUALITYLEVELTARGETNAME[0].text = nodata.name
state.style1[0].style.color = nodata.color

// 去年同期
state.WATERQUALITYLEVELNAME_LAST[0].text = nodata.name
state.style2[0].style.color = nodata.color

// 水质现状
state.imgUrl = getWaterLevelSrc("")

const { data } = res;
console.log(data,'流域接口');
if (data?.code === 200 && data?.data) {
  const { GOODPOINTCOUNT, STANDARDRATE, GOODRATE, BADRATE, STANDARDRATE_LAST, GOODRATE_LAST, BADRATE_LAST, UNSTANDARDPOINTCOUNT, ACTUALPOINTCOUNT, TARGET_WATER_LEVEL, WATER_STATUS_LAST, WATER_STATUS } = data.data
  state.card1[1].num = GOODPOINTCOUNT || "--"; // 优良断面
  state.card1[2].num = UNSTANDARDPOINTCOUNT || "--"; // 超标断面
  state.card2[0].num = STANDARDRATE || "--"; // 达标率
  state.card2[1].num = GOODRATE || "--"; // 优良率
  state.card2[2].num = BADRATE || "--"; // 劣Ⅴ类
  state.card3[0].num = STANDARDRATE_LAST || "--"; // 去年同期-达标率
  state.card3[1].num = GOODRATE_LAST || "--"; // 去年同期-优良率
  state.card3[2].num = BADRATE_LAST || "--"; // 去年同期-劣Ⅴ类
  state.card1[0].num = ACTUALPOINTCOUNT; // 断面总数

    // 水质目标
  const target = getWaterLevelName(TARGET_WATER_LEVEL || "")
  state.style1[0].style.color = target.color
  state.WATERQUALITYLEVELTARGETNAME[0].text = target.name

  // 去年同期
  const last = getWaterLevelName(WATER_STATUS_LAST || "")
  state.style2[0].style.color = last.color
  state.WATERQUALITYLEVELNAME_LAST[0].text = last.name

  // 水质现状
  state.imgUrl = getWaterLevelSrc(WATER_STATUS || "")
}

      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      state.card1[1].num = "--"; // 优良断面
state.card1[2].num = "--"; // 超标断面
state.card2[0].num = "--"; // 达标率
state.card2[1].num = "--"; // 优良率
state.card2[2].num = "--"; // 劣Ⅴ类
state.card3[0].num = "--"; // 去年同期-达标率
state.card3[1].num = "--"; // 去年同期-优良率
state.card3[2].num = "--"; // 去年同期-劣Ⅴ类
state.card1[0].num = "--" // 断面总数
      reject(error);
    });
  });
},
              },
};
// 监听变量，调取接口
watch(() => [""], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getSectionCount', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
// 监听变量，调取接口
watch(() => [global.regionaQuery.areaCode], async () => {
                await requestApi(apiRegistry, apiDataCache, componentState, componentPropBindingMap, 'getData', function(cacheKey, data, apiName) {
                    // 更新缓存
                    apiDataCache[cacheKey] = data;
                    apiDataMap[apiName] = data;
                });
                
},{
deep: true, // 深度监听
});
 function handleWindowResize() {
                            setPageScale('t-l-c-watershedDetailsWaterQuality', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-watershedDetailsWaterQuality', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
getProvider();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tListCardx0x5ComputedData = computed(() => _.merge({}, componentState.tListCardx0x5.default, componentState.tListCardx0x5?.[state.screenSize]));

 const tListCardx0x6ComputedData = computed(() => _.merge({}, componentState.tListCardx0x6.default, componentState.tListCardx0x6?.[state.screenSize]));

 const tListCardx0x7ComputedData = computed(() => _.merge({}, componentState.tListCardx0x7.default, componentState.tListCardx0x7?.[state.screenSize]));

 const tRectx0x8ComputedData = computed(() => _.merge({}, componentState.tRectx0x8.default, componentState.tRectx0x8?.[state.screenSize]));

 const tRowx0x9ComputedData = computed(() => _.merge({}, componentState.tRowx0x9.default, componentState.tRowx0x9?.[state.screenSize]));

 const tTextx0x9x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x9x0.default, componentState.tTextx0x9x0?.[state.screenSize]));

 const tHighLightTextx0x9x1ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x9x1.default, componentState.tHighLightTextx0x9x1?.[state.screenSize]));

 const tTextx0x9x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x9x2.default, componentState.tTextx0x9x2?.[state.screenSize]));

 const tHighLightTextx0x9x3ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x9x3.default, componentState.tHighLightTextx0x9x3?.[state.screenSize]));

 const tTextx0x10ComputedData = computed(() => _.merge({}, componentState.tTextx0x10.default, componentState.tTextx0x10?.[state.screenSize]));

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
tTextx0x1ComputedData,
tRectx0x2ComputedData,
tRectx0x3ComputedData,
tRectx0x4ComputedData,
tListCardx0x5ComputedData,
tListCardx0x6ComputedData,
tListCardx0x7ComputedData,
tRectx0x8ComputedData,
tRowx0x9ComputedData,
tTextx0x9x0ComputedData,
tHighLightTextx0x9x1ComputedData,
tTextx0x9x2ComputedData,
tHighLightTextx0x9x3ComputedData,
tTextx0x10ComputedData,
tTextCommonx0x12ComputedData,
};
},
};