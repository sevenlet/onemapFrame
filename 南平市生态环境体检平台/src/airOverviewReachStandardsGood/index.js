window.airOverviewReachStandardsGoodComponent = {
template: 
`<div id="t-l-c-airOverviewReachStandardsGood" class="t-l-c-airOverviewReachStandardsGood" >` +
`<t-rect id="t-rect-0394.099a89c9b" class="airOverviewReachStandardsGood-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-unit id="t-text-unit-2650.4bd199b7" class="airOverviewReachStandardsGood-t-text-unit-0-1"  :c-style="tTextUnitx0x1ComputedData.cStyle" :justify="tTextUnitx0x1ComputedData.justify" :align="tTextUnitx0x1ComputedData.align" :content="replaceCssVariables(filterData(state.reachStandardsGoodData.EXCELLENT_RATE_LASTYEAR, componentPropBindingMap?.['t-text-unit-2650.4bd199b7']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x1ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x1ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-high-light-text id="t-high-light-text-b596.b9353aeb3" class="airOverviewReachStandardsGood-t-high-light-text-0-3"  :fragment-list="replaceCssVariables(filterData(state.fragmentList, componentPropBindingMap?.['t-high-light-text-b596.b9353aeb3']['fragmentList'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :styles="tHighLightTextx0x3ComputedData.styles" :c-style="tHighLightTextx0x3ComputedData.cStyle">` +
`</t-high-light-text>` +
`<t-text-unit id="t-text-unit-5f24.a78538d8c" class="airOverviewReachStandardsGood-t-text-unit-0-4"  :c-style="tTextUnitx0x4ComputedData.cStyle" :justify="tTextUnitx0x4ComputedData.justify" :align="tTextUnitx0x4ComputedData.align" :content="replaceCssVariables(filterData(state.reachStandardsGoodData.EXCELLENT_RATE_TARGET, componentPropBindingMap?.['t-text-unit-5f24.a78538d8c']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x4ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x4ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-c35f.74d33b8c3" class="airOverviewReachStandardsGood-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle">` +
`</t-rect>` +
`<t-rank-single v-if="state.isOver === true" id="t-rank-single-900b.d2fe8be58" class="airOverviewReachStandardsGood-t-rank-single-0-6"  :icon-src="tRankSinglex0x6ComputedData.iconSrc" :data="replaceCssVariables(filterData(state.processData, componentPropBindingMap?.['t-rank-single-900b.d2fe8be58']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tRankSinglex0x6ComputedData.cStyle" :tab="tRankSinglex0x6ComputedData.tab" :key-word="tRankSinglex0x6ComputedData.keyWord" :default-checked="tRankSinglex0x6ComputedData.defaultChecked" :auto-scroll="tRankSinglex0x6ComputedData.autoScroll" :speed="tRankSinglex0x6ComputedData.speed" :data-style="tRankSinglex0x6ComputedData.dataStyle">` +
`</t-rank-single>` +
`<t-rank-single v-if="state.isOver === false" id="t-rank-single-fb2d.ff5a9ae0d" class="airOverviewReachStandardsGood-t-rank-single-0-7"  :icon-src="tRankSinglex0x7ComputedData.iconSrc" :data="replaceCssVariables(filterData(state.processData, componentPropBindingMap?.['t-rank-single-fb2d.ff5a9ae0d']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tRankSinglex0x7ComputedData.cStyle" :tab="tRankSinglex0x7ComputedData.tab" :key-word="tRankSinglex0x7ComputedData.keyWord" :default-checked="tRankSinglex0x7ComputedData.defaultChecked" :auto-scroll="tRankSinglex0x7ComputedData.autoScroll" :speed="tRankSinglex0x7ComputedData.speed" :data-style="tRankSinglex0x7ComputedData.dataStyle">` +
`</t-rank-single>` +
`<t-text-unit id="t-text-unit-a11d.c8aa941b3" class="airOverviewReachStandardsGood-t-text-unit-0-8"  :c-style="tTextUnitx0x8ComputedData.cStyle" :justify="tTextUnitx0x8ComputedData.justify" :align="tTextUnitx0x8ComputedData.align" :content="tTextUnitx0x8ComputedData.content" :unit="tTextUnitx0x8ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x8ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text v-if="state.targetType !== '优良率'" id="t-text-7ff8.a7f3ae1" class="airOverviewReachStandardsGood-t-text-0-9"  :label="tTextx0x9ComputedData.label" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle" @click="onclick1733798068754">` +
`</t-text>` +
`<t-high-light-text v-if="state.targetType === '优良率'" id="t-high-light-text-fc98.e430c5a5c" class="airOverviewReachStandardsGood-t-high-light-text-0-10"  :fragment-list="replaceCssVariables(filterData(state.targetData, componentPropBindingMap?.['t-high-light-text-fc98.e430c5a5c']['fragmentList'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :styles="tHighLightTextx0x10ComputedData.styles" :c-style="tHighLightTextx0x10ComputedData.cStyle">` +
`</t-high-light-text>` +
`<t-text v-if="state.targetType === '优良率'" id="t-text-3837.171aaa3fa" class="airOverviewReachStandardsGood-t-text-0-11"  :label="tTextx0x11ComputedData.label" :editable="tTextx0x11ComputedData.editable" :c-style="tTextx0x11ComputedData.cStyle" @click="onclick1733799651749_0_0">` +
`</t-text>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-0394.099a89c9b":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-2650.4bd199b7":{"attributeName":"tTextUnitx0x1","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-7ab3.157741416":{"attributeName":"tTextx0x2"},"t-high-light-text-b596.b9353aeb3":{"attributeName":"tHighLightTextx0x3","fragmentList":{"filters":[]},"styles":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-5f24.a78538d8c":{"attributeName":"tTextUnitx0x4","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-rect-c35f.74d33b8c3":{"attributeName":"tRectx0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rank-single-900b.d2fe8be58":{"attributeName":"tRankSinglex0x6","iconSrc":{"filters":[]},"data":{"filters":[]},"cStyle":{"filters":[]},"tab":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"dataStyle":{"filters":[]}},"t-rank-single-fb2d.ff5a9ae0d":{"attributeName":"tRankSinglex0x7","iconSrc":{"filters":[]},"data":{"filters":[]},"cStyle":{"filters":[]},"tab":{"filters":[]},"keyWord":{"filters":[]},"defaultChecked":{"filters":[]},"autoScroll":{"filters":[]},"speed":{"filters":[]},"dataStyle":{"filters":[]}},"t-text-unit-a11d.c8aa941b3":{"attributeName":"tTextUnitx0x8","cStyle":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-7ff8.a7f3ae1":{"attributeName":"tTextx0x9","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-high-light-text-fc98.e430c5a5c":{"attributeName":"tHighLightTextx0x10","fragmentList":{"filters":[]},"styles":{"filters":[]},"cStyle":{"filters":[]}},"t-text-3837.171aaa3fa":{"attributeName":"tTextx0x11","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   random: "",
   time: "",
   pointCode: "350700",
   pointType: "12",
   isOver: false,
   targetType: "",
   targetData: [{"barValue":"0","targetValue":"100"}],
   processData: [{"currentValue":85}],
   reachStandardsGoodData: {"EXCELLENT_RATE":"0","EXCELLENT_RATE_LASTYEAR":"0","EXCELLENT_RATE_TARGET":"0"},
   airOverviewContentState: {"timeValue":"","timeType":""},
   isShow: "",
   fragmentList: [],
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
            default: {"width":"410px","height":"88px","position":"unset","left":"0px","top":"0px","backgroundColor":"var(--business-show-bg10)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"410px","height":"88px","position":"unset","left":"0px","top":"0px","backgroundColor":"var(--business-show-bg10)","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)"}},"unit":{"default":{"backgroundColor":"rgba(57, 102, 147, 0.1)"}}}, 
 },
},
tTextUnitx0x1: {
defaultStyle: {
            default: {"width":"128px","height":"20px","flex-direction":"row-reverse","animationName":"","color":"var(--business-white)","fontSize":"var(--business-text-size-14)"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"128px","height":"20px","flex-direction":"row-reverse","animationName":"","color":"var(--business-white)","fontSize":"var(--business-text-size-14)"}},"unit":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"text":{"default":{"fontFamily":"DIN-bold","marginLeft":"6px","marginRight":"auto"}}},
justify:"flex-end",
align:"flex-end",
content:"0",
unit:"去年同期",
showOverflowTooltip:true, 
 },
},
tHighLightTextx0x3: {
defaultStyle: {
            default: {"width":"47px","height":"19px","position":"unset","left":"25px","top":"39px","animationName":"","fontFamily":"DIN-bold","fontWeight":"400"},
            
            },
 default: { 
 
fragmentList:[],
styles:[{"name":"style1","style":{"fontFamily":"DIN-bold","fontSize":"var(--business-num-size-18)","fontWeight":400,"color":"#00FFFF"}},{"name":"style2","style":{"fontFamily":"DIN-bold","fontSize":"var(--business-num-size-18)","fontWeight":400,"color":"#FF8400"}}],
cStyle:{"wrapper":{"default":{"width":"47px","height":"19px","position":"unset","left":"25px","top":"39px","animationName":"","fontFamily":"DIN-bold","fontWeight":"400"}}}, 
 },
},
tTextUnitx0x4: {
defaultStyle: {
            default: {"width":"128px","height":"19px","flex-direction":"row-reverse"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"128px","height":"19px","flex-direction":"row-reverse"}},"unit":{"default":{"fontSize":"var(--business-text-size-14)","color":"var(--business-white)","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}},"text":{"default":{"fontFamily":"DIN-bold","marginLeft":"6px","marginRight":"auto","color":"var(--business-white)","fontSize":"var(--business-text-size-14)"}}},
justify:"flex-end",
align:"flex-end",
content:"0",
unit:"全市考核目标",
showOverflowTooltip:true, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"1px","height":"15px","position":"unset","left":"256px","top":"42px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"15px","position":"unset","left":"256px","top":"42px"}}}, 
 },
},
tRankSinglex0x6: {
defaultStyle: {
            default: {"width":"373px","height":"58px","color":"rgba(227, 55, 39, 1)","textAlign":"left","animationName":"","top":"27px","left":"19px","position":"unset"},
            
            },
 default: { 
 
iconSrc:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-25/ec449e439f3a479ba5c51c4f55f17663.png",
data:[{"currentValue":85}],
cStyle:{"wrapper":{"default":{"width":"373px","height":"58px","color":"rgba(227, 55, 39, 1)","textAlign":"left","animationName":"","top":"27px","left":"19px","position":"unset"}},"index":{"default":{"backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","color":"rgba(255, 255, 255, 1)","fontSize":"16px","height":"19px","width":"27px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","backgroundColor":"","opacity":"0% !important"}},"name":{"default":{"color":"rgba(145, 70, 45, 1)","fontSize":"300px","backgroundColor":"rgba(138, 65, 65, 0)","fontWeight":"400","lineHeight":"20px","width":"auto","height":"auto","position":"static","left":"0px","bottom":"8px","fontFamily":"DIN-bold","borderLeft":"1px none rgba(1,13,66,1)","borderTop":"1px none rgba(1,13,66,1)","borderRight":"1px none rgba(1,13,66,1)","borderBottom":"1px none rgba(1,13,66,1)","opacity":"0% !important"}},"proportionBarBg":{"default":{"transform":"none","height":"8px","borderRadius":0,"backgroundColor":"rgba(20, 112, 204, 0.15)","border":"1px solid rgba(255,213,0,0.3)","box-shadow":"","borderLeft":"1px solid rgba(108,199,255,0.1)","borderTop":"1px solid rgba(108,199,255,0.1)","borderRight":"1px solid rgba(108,199,255,0.1)","borderBottom":"1px solid rgba(108,199,255,0.1)"}},"proportionBarInner":{"default":{"transform":"none","height":"6px","borderRadius":0,"backgroundImage":"linear-gradient(270deg, #FF8400 7%, rgba(255, 132, 0, 0) 100%);","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}},"value":{"default":{"color":"#fff","fontWeight":500,"fontSize":"18px","opacity":"0% !important"}},"unit":{"default":{"color":"#B7E3FF","fontWeight":400,"fontSize":"12px","opacity":"0% !important"}},"innerContainer":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"proportionBar":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.2)","borderLeft":"1px none rgba(24,40,107,1)","borderTop":"1px none rgba(24,40,107,1)","borderRight":"1px none rgba(24,40,107,1)","borderBottom":"1px none rgba(24,40,107,1)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"separator":{"default":{"fontSize":"0px","width":"0px"}},"icon":{"default":{"marginLeft":"94%"}}},
tab:false,
keyWord:"",
defaultChecked:"",
autoScroll:false,
speed:3,
dataStyle:[], 
 },
},
tRankSinglex0x7: {
defaultStyle: {
            default: {"width":"373px","height":"58px","color":"rgba(227, 55, 39, 1)","textAlign":"left","animationName":"","top":"27px","left":"19px"},
            
            },
 default: { 
 
iconSrc:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/162b6d0793604e93a928e237685698e1.png",
data:[{"currentValue":85}],
cStyle:{"wrapper":{"default":{"width":"373px","height":"58px","color":"rgba(227, 55, 39, 1)","textAlign":"left","animationName":"","top":"27px","left":"19px"}},"index":{"default":{"backgroundImage":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","color":"rgba(255, 255, 255, 1)","fontSize":"16px","height":"19px","width":"27px","-webkit-mask-image":"","-webkit-mask-repeat":"","-webkit-mask-size":"","-webkit-mask-position":"","backgroundColor":"","opacity":"0% !important"}},"name":{"default":{"color":"rgba(145, 70, 45, 1)","fontSize":"300px","backgroundColor":"rgba(138, 65, 65, 0)","fontWeight":"400","lineHeight":"20px","width":"auto","height":"auto","position":"static","left":"0px","bottom":"8px","fontFamily":"DIN-bold","borderLeft":"1px none rgba(1,13,66,1)","borderTop":"1px none rgba(1,13,66,1)","borderRight":"1px none rgba(1,13,66,1)","borderBottom":"1px none rgba(1,13,66,1)","opacity":"0% !important"}},"proportionBarBg":{"default":{"transform":"none","height":"8px","borderRadius":0,"backgroundColor":"rgba(20, 112, 204, 0.15)","border":"1px solid rgba(255,213,0,0.3)","box-shadow":"","borderLeft":"1px solid rgba(108,199,255,0.1)","borderTop":"1px solid rgba(108,199,255,0.1)","borderRight":"1px solid rgba(108,199,255,0.1)","borderBottom":"1px solid rgba(108,199,255,0.1)"}},"proportionBarInner":{"default":{"transform":"none","height":"6px","borderRadius":0,"backgroundImage":"linear-gradient(270deg,rgba(4, 247, 251, 1) 0%,rgba(255, 213, 0, 0) 100%)","-webkit-mask-image":""}},"value":{"default":{"color":"#fff","fontWeight":500,"fontSize":"18px","opacity":"0% !important"}},"unit":{"default":{"color":"#B7E3FF","fontWeight":400,"fontSize":"12px","opacity":"0% !important"}},"innerContainer":{"default":{"borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"proportionBar":{"default":{"backgroundColor":"rgba(20, 112, 204, 0.2)","borderLeft":"1px none rgba(24,40,107,1)","borderTop":"1px none rgba(24,40,107,1)","borderRight":"1px none rgba(24,40,107,1)","borderBottom":"1px none rgba(24,40,107,1)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}},"separator":{"default":{"fontSize":"0px","width":"0px"}},"icon":{"default":{"marginLeft":"94%"}}},
tab:false,
keyWord:"",
defaultChecked:"",
autoScroll:false,
speed:3,
dataStyle:[], 
 },
},
tTextUnitx0x8: {
defaultStyle: {
            default: {"width":"auto","height":"18px","position":"unset","left":"24px","top":"11px","fontSize":"12px","fontWeight":"700","color":"var(--t-white)"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"18px","position":"unset","left":"24px","top":"11px","fontSize":"12px","fontWeight":"700","color":"var(--t-white)"}},"unit":{"default":{"fontSize":"var(--business-text-size-12)","color":"var(--business-white)"}},"text":{"default":{"fontSize":"var(--business-text-size-16)","color":"var(--business-white)"}}},
justify:"flex-end",
align:"flex-end",
content:"优良率",
unit:"（%）",
showOverflowTooltip:true, 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"width":"110px","height":"auto","color":"var(--business-white)","position":"unset","left":"309px","top":"10px","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","cursor":"pointer","paddingLeft":"20px","backgroundImage":"var(--assessment-target-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":""},
            
            },
 default: { 
 
label:"考核目标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"110px","height":"auto","color":"var(--business-white)","position":"unset","left":"309px","top":"10px","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","cursor":"pointer","paddingLeft":"20px","backgroundImage":"var(--assessment-target-icon)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":""}},"text":{"default":{"fontSize":"14px","color":"var(--t-white)"}}}, 
 },
},
tHighLightTextx0x10: {
defaultStyle: {
            default: {"width":"390px","height":"58px","top":"33px","left":"16px","backgroundColor":"var(--business-dialog-bg)","position":"unset","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","display":"block","textAlign":"left","fontSize":"14px","lineHeight":"22px","paddingTop":"8px","marginLeft":"0px","paddingLeft":"10px","paddingRight":"10px"},
            
            },
 default: { 
 
fragmentList:[{"barValue":"0","targetValue":"100"}],
styles:[{"name":"style1","style":{"fontFamily":"微软雅黑","fontSize":"var(--business-text-size-14)","fontWeight":400,"color":"var(--business-white)","background":"unset","backgroundClip":"unset"}},{"name":"style2","style":{"fontFamily":"微软雅黑","fontSize":"var(--business-text-size-14)","fontWeight":400,"color":"var(--business-strong)"}}],
cStyle:{"wrapper":{"default":{"width":"390px","height":"58px","top":"33px","left":"16px","backgroundColor":"var(--business-dialog-bg)","position":"unset","borderLeft":"1px solid var(--business-show-bg60)","borderTop":"1px solid var(--business-show-bg60)","borderRight":"1px solid var(--business-show-bg60)","borderBottom":"1px solid var(--business-show-bg60)","borderTopLeftRadius":"6px","borderTopRightRadius":"6px","borderBottomLeftRadius":"6px","borderBottomRightRadius":"6px","display":"block","textAlign":"left","fontSize":"14px","lineHeight":"22px","paddingTop":"8px","marginLeft":"0px","paddingLeft":"10px","paddingRight":"10px"}}}, 
 },
},
tTextx0x11: {
defaultStyle: {
            default: {"width":"110px","height":"auto","color":"var(--business-strong)","position":"unset","left":"309px","top":"10px","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":"","cursor":"pointer","paddingLeft":"20px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-10/b88a9534077441e29df4a189a4c94997.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":""},
            
            },
 default: { 
 
label:"考核目标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"110px","height":"auto","color":"var(--business-strong)","position":"unset","left":"309px","top":"10px","fontSize":"var(--business-text-size-14)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","animationName":"","cursor":"pointer","paddingLeft":"20px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-10/b88a9534077441e29df4a189a4c94997.svg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 50%","-webkit-mask-position":""}},"text":{"default":{"fontSize":"14px","color":"var(--t-white)"}}}, 
 },
},
});
const openTarget = () => {
state.targetType = state.targetType ? '' : '优良率'  
};
const getProvider = () => {
// // 第一步，获取编码和类型
// state.pointCode = global.regionaQuery.regionCode.slice(0, 6);
// const regionLevelCode = getRegionLevel(global.regionaQuery.regionCode);
// switch (regionLevelCode) {
//   case 'province':
//     state.pointType = '11';
//     break;
//   case 'city':
//     state.pointType = '12';
//     break;
//   case 'county':
//     state.pointType = '13';
//     break;
//   default:
//     break;
// }
// // 请求数据
// apiRegistry.getLatestTime.request();
// console.log(1111111)
// const rootData = inject('airOverviewContentState');
// watch([() => rootData, () => global.regionaQuery.regionCode], async () => {
//   state.airOverviewContentState = rootData;
//   if (state.airOverviewContentState.timeValue) {
//     const regionLevelCode = getRegionLevel(global.regionaQuery.regionCode);
//     switch (regionLevelCode) {
//       case 'province':
//         state.pointType = '11';
//         break;
//       case 'city':
//         state.pointType = '12';
//         break;
//       case 'county':
//         state.pointType = '13';
//         break;
//       default:
//         break;
//     }
//     state.pointCode = global.regionaQuery.regionCode.slice(0, 6)
//     await apiRegistry.getLatestTime.request();
//     // await apiRegistry.getReachStandardsGoodData.request();
//   }
// }, {
//   deep: true,
//   immediate: true
// })


const rootData = inject('airOverviewContentState');
watch([() => rootData, () => global.regionaQuery.regionCode], async() => {
  state.airOverviewContentState = rootData;
  if (state.airOverviewContentState.timeValue) {
    const regionLevelCode = getRegionLevel(global.regionaQuery.regionCode);
    switch (regionLevelCode) {
      case 'province':
        state.pointType = '11';
        break;
      case 'city':
        state.pointType = '12';
        break;
      case 'county':
        state.pointType = '13';
        break;
      default:
        break;
    }
    // state.time = state.airOverviewContentState.timeValue.slice(0, 7)
    state.random = 'yhy' + Date.now()
    state.pointCode = global.regionaQuery.regionCode.slice(0,6)
    await apiRegistry.getLatestTime.request();
    await apiRegistry.getReachStandardsData.request();
  }
}, {
  deep: true,
  immediate: true
})
};
const onclick1733798068754 = () => {
// 执行自定义方法
openTarget();
};
const onclick1733799651749_0_0 = () => {
// 执行自定义方法
openTarget();
};let apiRegistry = {}; 

        // 添加接口数据管理
        const apiDataMap = reactive({});
        // 接口数据缓存
        const apiDataCache = reactive({});
        
        // 接口注册表
        apiRegistry = {
// 接口函数
 getReachStandardsGoodData: {
              funcParamsOptions: '[]', // 参数选项 用于请求接口调用函数时使用
              autoLoad: false, // 自动请求
              bindComponents: [], // 依赖的组件ID列表，可能多个组件绑定一个接口的数据
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"RANDOM":"state.random","DATE_TYPE":"ACC_MONTH","POINT_TYPE":"state.pointType","POINT_CODE":"state.pointCode","MONITORTIME":"state.time","interfaceId":"f8f9d9ff275ebab91736710addd19eb3"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"RANDOM":state.random,"DATE_TYPE":"ACC_MONTH","POINT_TYPE":state.pointType,"POINT_CODE":state.pointCode,"MONITORTIME":state.time,"interfaceId":"f8f9d9ff275ebab91736710addd19eb3"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"RANDOM":state.random,"DATE_TYPE":"ACC_MONTH","POINT_TYPE":state.pointType,"POINT_CODE":state.pointCode,"MONITORTIME":state.time,"interfaceId":"f8f9d9ff275ebab91736710addd19eb3"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getReachStandardsGoodData'] = res.data;
                
     const { data, head } = res.data;
if (head.statusCode === '200' && data) {
  console.log(11112222)
  state.reachStandardsGoodData.EXCELLENT_RATE = data.EXCELLENT_RATE || 0;
  state.reachStandardsGoodData.EXCELLENT_RATE_LASTYEAR = data.EXCELLENT_RATE_LASTYEAR || 0;
  state.reachStandardsGoodData.EXCELLENT_RATE_TARGET = data.EXCELLENT_RATE_TARGET || 0;
  state.processData = [{
    currentValue: state.reachStandardsGoodData.EXCELLENT_RATE,
    targetValue: 100
  }]

  // 当前 < 目标
  state.isOver = Number(data.EXCELLENT_RATE) < Number(data.EXCELLENT_RATE_TARGET);
  state.fragmentList = [
    {
      "text": state.reachStandardsGoodData.EXCELLENT_RATE,
      "styleName": state.isOver ? "style2" : "style1"
    }
  ]
  state.targetData = [
    {
      "text": "在余下的",
      "styleName": "style1"
    },
    {
      "text": `${data.DAYS_REMAINS || 0}天`,
      "styleName": "style2"
    },
    {
      "text": "内，可消耗污染天数应该控制在",
      "styleName": "style1"
    },
    {
      "text": `${(Number(data.POLLUTE_DAYS_TARGET)  - Number(data.POLLUTE_DAYS)) || 0}天`,
      "styleName": "style2"
    },
    {
      "text": "内，则可达标",
      "styleName": "style1"
    }
  ];
} else {
  state.reachStandardsGoodData.EXCELLENT_RATE =  0;
  state.reachStandardsGoodData.EXCELLENT_RATE_LASTYEAR = 0;
  state.reachStandardsGoodData.EXCELLENT_RATE_TARGET = 0;
  state.processData = [
    {
      currentValue: 0,
      targetValue: 100
    }
  ]
  state.isOver = false;
  state.fragmentList = [
    {
      "text": 0,
      "styleName": "style1"
    }
  ]
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
              config: {"url":"global.serviceBasePath","method":"get","baseURL":"global.foshanServiceBaseUrl","params":{"RANDOM":"state.random","TIME_TYPE":"day","POINT_CODE":"state.pointCode","POINT_TYPE":"state.pointType","interfaceId":"66ad2ebe9d660295568b05187f34e133"}},
              request: function ( componentId) {
return new Promise((resolve, reject) => {
  
                http({"url":global.serviceBasePath,"method":"get","baseURL":global.foshanServiceBaseUrl,"params":{"RANDOM":state.random,"TIME_TYPE":"day","POINT_CODE":state.pointCode,"POINT_TYPE":state.pointType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"},}).then((res) => {
 
                   // 成功的操作
                   const cacheKey = generateCacheKey('global.foshanServiceBaseUrl-global.serviceBasePath',  {"RANDOM":state.random,"TIME_TYPE":"day","POINT_CODE":state.pointCode,"POINT_TYPE":state.pointType,"interfaceId":"66ad2ebe9d660295568b05187f34e133"});
                   
                   apiDataMap[cacheKey] = res.data;
                   apiDataMap['getLatestTime'] = res.data;
                
     const { data, head } = res.data;
state.time = ''
if (head.statusCode === '200' && data) {
  state.time = data.MONITORTIME;
  apiRegistry.getReachStandardsGoodData.request();
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
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewReachStandardsGood', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
onMounted(() => {
setPageScale('t-l-c-airOverviewReachStandardsGood', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tTextUnitx0x1ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x1.default, componentState.tTextUnitx0x1?.[state.screenSize]));

 const tHighLightTextx0x3ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x3.default, componentState.tHighLightTextx0x3?.[state.screenSize]));

 const tTextUnitx0x4ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x4.default, componentState.tTextUnitx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tRankSinglex0x6ComputedData = computed(() => _.merge({}, componentState.tRankSinglex0x6.default, componentState.tRankSinglex0x6?.[state.screenSize]));

 const tRankSinglex0x7ComputedData = computed(() => _.merge({}, componentState.tRankSinglex0x7.default, componentState.tRankSinglex0x7?.[state.screenSize]));

 const tTextUnitx0x8ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x8.default, componentState.tTextUnitx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tHighLightTextx0x10ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x10.default, componentState.tHighLightTextx0x10?.[state.screenSize]));

 const tTextx0x11ComputedData = computed(() => _.merge({}, componentState.tTextx0x11.default, componentState.tTextx0x11?.[state.screenSize]));

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
tTextUnitx0x1ComputedData,
tHighLightTextx0x3ComputedData,
tTextUnitx0x4ComputedData,
tRectx0x5ComputedData,
tRankSinglex0x6ComputedData,
tRankSinglex0x7ComputedData,
tTextUnitx0x8ComputedData,
tTextx0x9ComputedData,
tHighLightTextx0x10ComputedData,
tTextx0x11ComputedData,
onclick1733798068754,
onclick1733799651749_0_0,
};
},
};