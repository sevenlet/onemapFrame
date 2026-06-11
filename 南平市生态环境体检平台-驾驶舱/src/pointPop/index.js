window.pointPopComponent = {
template: 
`<div id="t-l-c-pointPop" class="t-l-c-pointPop" >` +
`<t-rect id="t-rect-015d.da68b38eb" class="pointPop-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.GOORATE_ISSTANDARD === '已达标'" id="t-rect-5215.34f7b838d" class="pointPop-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.GOORATE_ISSTANDARD === '未达标'" id="t-rect-c9ba.b5ddf0771" class="pointPop-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-text v-if="state.GOORATE_ISSTANDARD === '已达标'" id="t-text-3c96.a3f629e22" class="pointPop-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-d41d.c0b650907" class="pointPop-t-text-0-4"  :label="state.businessTitle" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-c1ea.677b8c556" class="pointPop-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-6b96.7ac80c971" class="pointPop-t-text-0-6"  :label="tTextx0x6ComputedData.label" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-3b10.0322d8976" class="pointPop-t-text-unit-0-7"  :c-style="tTextUnitx0x7ComputedData.cStyle" :justify="tTextUnitx0x7ComputedData.justify" :align="tTextUnitx0x7ComputedData.align" :content="state.ASSESS_GOOD_RATE" :unit="state.unit" :show-overflow-tooltip="tTextUnitx0x7ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.isRed0 === true" id="t-text-unit-4a61.7835ce532" class="pointPop-t-text-unit-0-8"  :c-style="tTextUnitx0x8ComputedData.cStyle" :justify="tTextUnitx0x8ComputedData.justify" :align="tTextUnitx0x8ComputedData.align" :content="state.GOODRATE_YYMB" :unit="tTextUnitx0x8ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x8ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.isGreen0 === true" id="t-text-unit-9ae5.21d728c4d" class="pointPop-t-text-unit-0-9"  :c-style="tTextUnitx0x9ComputedData.cStyle" :justify="tTextUnitx0x9ComputedData.justify" :align="tTextUnitx0x9ComputedData.align" :content="state.GOODRATE_YYMB" :unit="tTextUnitx0x9ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x9ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.isWhite0 === true" id="t-text-unit-3a4e.3fd5941ca" class="pointPop-t-text-unit-0-10"  :c-style="tTextUnitx0x10ComputedData.cStyle" :justify="tTextUnitx0x10ComputedData.justify" :align="tTextUnitx0x10ComputedData.align" :content="state.GOODRATE_YYMB" :unit="state.unit" :show-overflow-tooltip="tTextUnitx0x10ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text v-if="state.GOORATE_ISSTANDARD === '未达标'" id="t-text-bc5e.39980fd39" class="pointPop-t-text-0-11"  :label="tTextx0x11ComputedData.label" :editable="tTextx0x11ComputedData.editable" :c-style="tTextx0x11ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-2c8a.d8d21a785" class="pointPop-t-text-0-12"  :label="state.REGION_NAME" :editable="tTextx0x12ComputedData.editable" :c-style="tTextx0x12ComputedData.cStyle" :show-title="tTextx0x12ComputedData.showTitle">` +
`</t-text>` +
`<t-rect id="t-rect-98d9.c51100c13" class="pointPop-t-rect-0-13"  :tip="tRectx0x13ComputedData.tip" :label="tRectx0x13ComputedData.label" :active="tRectx0x13ComputedData.active" :c-style="tRectx0x13ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-5cd3.33f8f0fb4" class="pointPop-t-rect-0-14"  :tip="tRectx0x14ComputedData.tip" :label="tRectx0x14ComputedData.label" :active="tRectx0x14ComputedData.active" :c-style="tRectx0x14ComputedData.cStyle">` +
`</t-rect>` +
`<t-row v-if="state.isUnit === true" id="t-row-9db4.1a8f9a7eb" class="pointPop-t-row-0-15"  :c-style="tRowx0x15ComputedData.cStyle" :gutter="tRowx0x15ComputedData.gutter" :justify="tRowx0x15ComputedData.justify" :align="tRowx0x15ComputedData.align">` +
`<t-rolling-number id="t-rolling-number-69e5.cd7f405e" class="pointPop-t-rolling-number-0-15-0"  :number="state.GOODRATE" :min-length="tRollingNumberx0x15x0ComputedData.minLength" :prefix="tRollingNumberx0x15x0ComputedData.prefix" :suffix="tRollingNumberx0x15x0ComputedData.suffix" :animation-duration="tRollingNumberx0x15x0ComputedData.animationDuration" :c-style="tRollingNumberx0x15x0ComputedData.cStyle">` +
`</t-rolling-number>` +
`<t-rect v-if="state.isOK0 === -1" id="t-rect-a363.34ae6532d" class="pointPop-t-rect-0-15-1"  :tip="tRectx0x15x1ComputedData.tip" :label="tRectx0x15x1ComputedData.label" :active="tRectx0x15x1ComputedData.active" :c-style="tRectx0x15x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.isOK0 === 1" id="t-rect-bda5.62ee47fca" class="pointPop-t-rect-0-15-2"  :tip="tRectx0x15x2ComputedData.tip" :label="tRectx0x15x2ComputedData.label" :active="tRectx0x15x2ComputedData.active" :c-style="tRectx0x15x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-unit id="t-text-unit-a681.d1708f10f" class="pointPop-t-text-unit-0-15-3"  :c-style="tTextUnitx0x15x3ComputedData.cStyle" :justify="tTextUnitx0x15x3ComputedData.justify" :align="tTextUnitx0x15x3ComputedData.align" :content="state.GOODRATE_JQN" :unit="tTextUnitx0x15x3ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x15x3ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`</t-row>` +
`<t-row v-if="state.isUnit === false" id="t-row-b984.72c92f3b9" class="pointPop-t-row-0-16"  :c-style="tRowx0x16ComputedData.cStyle" :gutter="tRowx0x16ComputedData.gutter" :justify="tRowx0x16ComputedData.justify" :align="tRowx0x16ComputedData.align">` +
`<t-rolling-number id="t-rolling-number-e922.31174778e" class="pointPop-t-rolling-number-0-16-0"  :number="state.GOODRATE" :min-length="tRollingNumberx0x16x0ComputedData.minLength" :prefix="tRollingNumberx0x16x0ComputedData.prefix" :suffix="tRollingNumberx0x16x0ComputedData.suffix" :animation-duration="tRollingNumberx0x16x0ComputedData.animationDuration" :c-style="tRollingNumberx0x16x0ComputedData.cStyle" :suffix-raw="tRollingNumberx0x16x0ComputedData.suffixRaw">` +
`</t-rolling-number>` +
`<t-rect v-if="state.isOK0 === -1" id="t-rect-a42a.a1e91994b" class="pointPop-t-rect-0-16-1"  :tip="tRectx0x16x1ComputedData.tip" :label="tRectx0x16x1ComputedData.label" :active="tRectx0x16x1ComputedData.active" :c-style="tRectx0x16x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.isOK0 === 1" id="t-rect-0f73.c084f6eda" class="pointPop-t-rect-0-16-2"  :tip="tRectx0x16x2ComputedData.tip" :label="tRectx0x16x2ComputedData.label" :active="tRectx0x16x2ComputedData.active" :c-style="tRectx0x16x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-unit id="t-text-unit-d385.00f1b8686" class="pointPop-t-text-unit-0-16-3"  :c-style="tTextUnitx0x16x3ComputedData.cStyle" :justify="tTextUnitx0x16x3ComputedData.justify" :align="tTextUnitx0x16x3ComputedData.align" :content="state.GOODRATE_JQN" :unit="tTextUnitx0x16x3ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x16x3ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`</t-row>` +
`</div>` +
'',
setup() {
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
   businessTitle: "达到或优于Ⅲ类比例",
   BUSINESS_TYPE: "业务类型",
   isRed0: false,
   isGreen0: false,
   isWhite0: true,
   isNoStorard: false,
   isStorard: true,
   isOK0: 0,
   GOODRATE: "--",
   GOODRATE_JQN: "--",
   ASSESS_GOOD_RATE: "--",
   GOODRATE_YYMB: "--",
   GOORATE_ISSTANDARD: "--",
   REGION_NAME: "--",
   unit: "%",
   isUnit: true,
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
            default: {"width":"214px","height":"168px","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-point-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"214px 168px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"214px","height":"168px","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-point-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"214px 168px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"128px","top":"12px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","backgroundImage":"linear-gradient(180deg, rgba(0, 255, 158, 0.87) 0%, rgba(0, 255, 158, 0) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"128px","top":"12px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","backgroundImage":"linear-gradient(180deg, rgba(0, 255, 158, 0.87) 0%, rgba(0, 255, 158, 0) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"65px","height":"21px","position":"unset","left":"128px","top":"12px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","backgroundImage":"linear-gradient(180deg, rgba(255, 60, 60, 0.6) 0%, rgba(255, 0, 0, 0) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"65px","height":"21px","position":"unset","left":"128px","top":"12px","borderLeft":"0px none ","borderTop":"0px none ","borderRight":"0px none ","borderBottom":"0px none ","borderTopLeftRadius":"2px","borderTopRightRadius":"2px","borderBottomLeftRadius":"2px","borderBottomRightRadius":"2px","backgroundImage":"linear-gradient(180deg, rgba(255, 60, 60, 0.6) 0%, rgba(255, 0, 0, 0) 100%)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":"","box-shadow":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(-30deg) skewY(0deg)\n      "}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"15px","left":"139px","position":"unset","animationName":"","fontFamily":"钉钉进步体"},
            
            },
 default: { 
 
label:"已达标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"15px","left":"139px","position":"unset","animationName":"","fontFamily":"钉钉进步体"}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"183px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"18px","top":"46px","animationName":""},
            
            },
 default: { 
 
label:"达到或优于Ⅲ类比例",
editable:false,
cStyle:{"wrapper":{"default":{"width":"183px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"18px","top":"46px","animationName":""}}}, 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"129px","top":"119px","animationName":""},
            
            },
 default: { 
 
label:"优于目标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"129px","top":"119px","animationName":""}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"56px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"29px","top":"119px","animationName":""},
            
            },
 default: { 
 
label:"考核目标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"56px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","position":"unset","left":"29px","top":"119px","animationName":""}}}, 
 },
},
tTextUnitx0x7: {
defaultStyle: {
            default: {"width":"auto","height":"22px","position":"unset","left":"33px","top":"137px","fontSize":"14px","lineHeight":"14px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"22px","position":"unset","left":"33px","top":"137px","fontSize":"14px","lineHeight":"14px","animationName":""}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"#FFCC00","fontFamily":"DIN-black"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)"}}},
justify:"flex-end",
align:"flex-end",
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x8: {
defaultStyle: {
            default: {"width":"auto","height":"22px","position":"unset","left":"130px","top":"137px","fontSize":"14px","lineHeight":"14px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"22px","position":"unset","left":"130px","top":"137px","fontSize":"14px","lineHeight":"14px","animationName":"","textAlign":"center"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"#FF3131","fontFamily":"DIN-black","textAlign":"center"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","textAlign":"center"}}},
justify:"flex-end",
align:"flex-end",
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x9: {
defaultStyle: {
            default: {"width":"auto","height":"22px","position":"unset","left":"130px","top":"137px","fontSize":"14px","lineHeight":"14px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"22px","position":"unset","left":"130px","top":"137px","fontSize":"14px","lineHeight":"14px","animationName":""}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"#5BFF5E","fontFamily":"DIN-black"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)"}}},
justify:"flex-end",
align:"flex-end",
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x10: {
defaultStyle: {
            default: {"width":"auto","height":"22px","position":"unset","left":"130px","top":"137px","fontSize":"14px","lineHeight":"14px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"22px","position":"unset","left":"130px","top":"137px","fontSize":"14px","lineHeight":"14px","animationName":""}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"#fff","fontFamily":"DIN-black"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)"}}},
justify:"flex-end",
align:"flex-end",
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tTextx0x11: {
defaultStyle: {
            default: {"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"15px","left":"139px","position":"unset","animationName":"","fontFamily":"钉钉进步体"},
            
            },
 default: { 
 
label:"未达标",
editable:false,
cStyle:{"wrapper":{"default":{"width":"42px","height":"14px","color":"#fff","fontSize":"14px","lineHeight":"14px","top":"15px","left":"139px","position":"unset","animationName":"","fontFamily":"钉钉进步体"}}}, 
 },
},
tTextx0x12: {
defaultStyle: {
            default: {"width":"95px","height":"16px","color":"#fff","position":"unset","left":"18px","top":"14px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"95px","height":"16px","color":"#fff","position":"unset","left":"18px","top":"14px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer","animationName":""}}},
showTitle:false, 
 },
},
tRectx0x13: {
defaultStyle: {
            default: {"width":"1px","height":"138px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 138px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"106px","top":"42px","position":"unset","animationName":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(90deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"138px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 138px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"106px","top":"42px","position":"unset","animationName":"","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(90deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      "}}}, 
 },
},
tRectx0x14: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"107px","top":"119px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"107px","top":"119px","position":"unset","animationName":""}}}, 
 },
},
tRowx0x15: {
defaultStyle: {
            default: {"width":"auto","height":"32px","position":"unset","left":"18px","top":"71px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"32px","position":"unset","left":"18px","top":"71px","animationName":""}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tRollingNumberx0x15x0: {
defaultStyle: {
            default: {"overflow":"hidden","width":"auto","height":"32px","marginLeft":"0px","marginRight":"0px","animationName":"","left":"668px","top":"117.79998779296875px"},
            
            },
 default: { 
 
number:"--",
minLength:1,
prefix:"",
suffix:"%",
animationDuration:1,
cStyle:{"wrapper":{"default":{"overflow":"hidden","width":"auto","height":"32px","marginLeft":"0px","marginRight":"0px","animationName":"","left":"668px","top":"117.79998779296875px"}},"separator":{"default":{"height":"48px","lineHeight":"32px","fontSize":"32px","color":"#fff","fontFamily":"DIN-black","fontWeight":"700"}},"number":{"default":{"width":"5px","height":"64px","margin":"0 6px","borderRadius":"6px","color":"#fff","lineHeight":"32px","fontSize":"32px","fontFamily":"DIN-black","fontWeight":"700","backgroundColor":"var(--t-body-background)"}},"suffix":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","marginTop":"18px"}}}, 
 },
},
tRectx0x15x1: {
defaultStyle: {
            default: {"width":"6px","height":"4px","left":"836px","top":"61.79998779296875px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-02-18/c749b7c7104541ee98ff4e81c2b07d4e.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"15px","marginLeft":"15px","marginRight":"-8px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"6px","height":"4px","left":"836px","top":"61.79998779296875px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-02-18/c749b7c7104541ee98ff4e81c2b07d4e.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"15px","marginLeft":"15px","marginRight":"-8px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tRectx0x15x2: {
defaultStyle: {
            default: {"width":"6px","height":"4px","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover,cover","-webkit-mask-size":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-02-10/ded6adfb3bd246feb79888017adfc0e4.png)","-webkit-mask-image":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","paddingBottom":"0px","marginBottom":"0px","marginTop":"15px","marginLeft":"15px","marginRight":"-8px","animationName":"","left":"836px","top":"61.79998779296875px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"6px","height":"4px","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover,cover","-webkit-mask-size":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-02-10/ded6adfb3bd246feb79888017adfc0e4.png)","-webkit-mask-image":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","paddingBottom":"0px","marginBottom":"0px","marginTop":"15px","marginLeft":"15px","marginRight":"-8px","animationName":"","left":"836px","top":"61.79998779296875px"}}}, 
 },
},
tTextUnitx0x15x3: {
defaultStyle: {
            default: {"width":"auto","height":"29px","marginRight":"0px","marginLeft":"10px","animationName":"","left":"970px","top":"-103.20001220703125px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"29px","marginRight":"0px","marginLeft":"10px","animationName":"","left":"970px","top":"-103.20001220703125px"}},"text":{"default":{"fontSize":"14px","lineHeight":"14px","color":"#fff"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"14px"}}},
justify:"flex-start",
align:"flex-end",
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
tRowx0x16: {
defaultStyle: {
            default: {"width":"auto","height":"32px","position":"unset","left":"18px","top":"71px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"32px","position":"unset","left":"18px","top":"71px","animationName":""}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tRollingNumberx0x16x0: {
defaultStyle: {
            default: {"overflow":"hidden","width":"auto","height":"32px","marginLeft":"0px","marginRight":"0px","animationName":"","left":"523.9999389648438px","top":"-106.00003051757812px"},
            
            },
 default: { 
 
number:"--",
minLength:1,
prefix:"",
suffix:"μg/m³",
animationDuration:1,
cStyle:{"wrapper":{"default":{"overflow":"hidden","width":"auto","height":"32px","marginLeft":"0px","marginRight":"0px","animationName":"","left":"523.9999389648438px","top":"-106.00003051757812px"}},"separator":{"default":{"height":"48px","lineHeight":"32px","fontSize":"32px","color":"#fff","fontFamily":"DIN-black","fontWeight":"700"}},"number":{"default":{"width":"5px","height":"64px","margin":"0 6px","borderRadius":"6px","color":"#fff","lineHeight":"32px","fontSize":"32px","fontFamily":"DIN-black","fontWeight":"700","backgroundColor":"var(--t-body-background)"}},"suffix":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","marginTop":"18px"}}},
suffixRaw:"μg/{{M3}}", 
 },
},
tRectx0x16x1: {
defaultStyle: {
            default: {"width":"6px","height":"4px","left":"691.9999389648438px","top":"-162.00003051757812px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-02-18/c749b7c7104541ee98ff4e81c2b07d4e.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"15px","marginLeft":"15px","marginRight":"-8px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"6px","height":"4px","left":"691.9999389648438px","top":"-162.00003051757812px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-02-18/c749b7c7104541ee98ff4e81c2b07d4e.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"15px","marginLeft":"15px","marginRight":"-8px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tRectx0x16x2: {
defaultStyle: {
            default: {"width":"6px","height":"4px","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover,cover","-webkit-mask-size":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-02-10/ded6adfb3bd246feb79888017adfc0e4.png)","-webkit-mask-image":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","paddingBottom":"0px","marginBottom":"0px","marginTop":"15px","marginLeft":"15px","marginRight":"-8px","animationName":"","left":"691.9999389648438px","top":"-162.00003051757812px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"6px","height":"4px","backgroundRepeat":"no-repeat,no-repeat","-webkit-mask-repeat":"","backgroundSize":"cover,cover","-webkit-mask-size":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-02-10/ded6adfb3bd246feb79888017adfc0e4.png)","-webkit-mask-image":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","paddingBottom":"0px","marginBottom":"0px","marginTop":"15px","marginLeft":"15px","marginRight":"-8px","animationName":"","left":"691.9999389648438px","top":"-162.00003051757812px"}}}, 
 },
},
tTextUnitx0x16x3: {
defaultStyle: {
            default: {"width":"auto","height":"29px","marginRight":"0px","marginLeft":"10px","animationName":"","left":"825.9999389648438px","top":"-327.0000305175781px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"auto","height":"29px","marginRight":"0px","marginLeft":"10px","animationName":"","left":"825.9999389648438px","top":"-327.0000305175781px"}},"text":{"default":{"fontSize":"14px","lineHeight":"14px","color":"#fff"}},"unit":{"default":{"fontSize":"14px","lineHeight":"14px","color":"var(--t-color-text-green)","width":"auto","height":"14px"}}},
justify:"flex-start",
align:"flex-end",
content:"--",
unit:"%",
showOverflowTooltip:true, 
 },
},
});
const getParams = () => {
function getQueryVariable(variable) {
  var query = window.location.hash.split('?')[1];
  if (!query) { return }
  var vars = query?.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) { return pair[1]; }
  }
}


state.REGION_NAME = decodeURIComponent(getQueryVariable('REGION_NAME')) || '--';
state.REGION_CODE = getQueryVariable('REGION_CODE') || '--';
state.GOODRATE = getQueryVariable('GOODRATE') || '--';
state.GOODRATE_JQN = getQueryVariable('GOODRATE_JQN') || '--';
state.ASSESS_GOOD_RATE = getQueryVariable('ASSESS_GOOD_RATE') || '--';
state.GOODRATE_YYMB = getQueryVariable('GOODRATE_YYMB') || '--';
state.BUSINESS_TYPE = getQueryVariable('indicator') || '';
// 动态设置标题
getTitle();
const indicator = getQueryVariable('indicator') || '--';
const color = getQueryVariable('THEME');
if (color === 'blue') {
  const body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', '蓝色主题' || 'theme1');
} else {
  const body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', '绿色主题' || 'theme1');
}
const str = getQueryVariable('GOORATE_ISSTANDARD') || '--';
if (Number(str) === 0) {
  state.GOORATE_ISSTANDARD = '未达标';

} else if (Number(str) === 1) {
  state.GOORATE_ISSTANDARD = '已达标';
}
if (Number(state.GOODRATE_JQN) > 0) {
  state.isOK0 = 1;
} else if (Number(state.GOODRATE_JQN) < 0) {
  state.isOK0 = -1;
} else {
  state.isOK0 = 0;
}
if (localStorage.getItem('color')) {
  const body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', localStorage.getItem('color') || 'theme1');
}
if (Number(indicator) === 2) {
  state.unit = 'μg/m3';
  state.isUnit = false;
} else {
  state.unit = '%';
  state.isUnit = true;
}
console.log(state.GOODRATE_JQN, state.isOK0, window.location.href, indicator, global.theme, '********************');
console.log(color, state.REGION_NAME, localStorage.getItem('color'), 'REGION_NAME')
};
const getTitle = () => {
const businessType = state.BUSINESS_TYPE;
let title = '优良天数比率';
switch(businessType){
  case '1':
    title = '优良天数比率';
    break;
  case '2':
    title = 'PM？.？年均浓度';
    break;
  case '3':
    title = '达到或优于Ⅲ类比例';
    break;
  case '4':
    title = '劣Ⅴ类比例';
    break;
  case '5':
    title = '近岸海域水质优良率';
    break;
  case '6':
    title = '美丽海湾数量';
    break;
  case '7':
    title = '地下水国控监测点V类比例';
    break;
  case '8':
    title = '重点建设用地安全利用率';
    break;
  case '9':
    title = '企业碳排放量';
    break;
  case '10':
    title = '碳市场履约率';
    break;
  case '11':
    title = '森林覆盖率';
    break;
  case '12':
    title = '陆域生态保护红线占国土面积比例';
    break;
  default:

}

state.businessTitle = title;
};
 function handleWindowResize() {
                            setPageScale('t-l-c-pointPop', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onBeforeMount(() => {
// 执行自定义方法
getParams();
});
onMounted(() => {
setPageScale('t-l-c-pointPop', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

 const tTextUnitx0x7ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x7.default, componentState.tTextUnitx0x7?.[state.screenSize]));

 const tTextUnitx0x8ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x8.default, componentState.tTextUnitx0x8?.[state.screenSize]));

 const tTextUnitx0x9ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x9.default, componentState.tTextUnitx0x9?.[state.screenSize]));

 const tTextUnitx0x10ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x10.default, componentState.tTextUnitx0x10?.[state.screenSize]));

 const tTextx0x11ComputedData = computed(() => _.merge({}, componentState.tTextx0x11.default, componentState.tTextx0x11?.[state.screenSize]));

 const tTextx0x12ComputedData = computed(() => _.merge({}, componentState.tTextx0x12.default, componentState.tTextx0x12?.[state.screenSize]));

 const tRectx0x13ComputedData = computed(() => _.merge({}, componentState.tRectx0x13.default, componentState.tRectx0x13?.[state.screenSize]));

 const tRectx0x14ComputedData = computed(() => _.merge({}, componentState.tRectx0x14.default, componentState.tRectx0x14?.[state.screenSize]));

 const tRowx0x15ComputedData = computed(() => _.merge({}, componentState.tRowx0x15.default, componentState.tRowx0x15?.[state.screenSize]));

 const tRollingNumberx0x15x0ComputedData = computed(() => _.merge({}, componentState.tRollingNumberx0x15x0.default, componentState.tRollingNumberx0x15x0?.[state.screenSize]));

 const tRectx0x15x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x15x1.default, componentState.tRectx0x15x1?.[state.screenSize]));

 const tRectx0x15x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x15x2.default, componentState.tRectx0x15x2?.[state.screenSize]));

 const tTextUnitx0x15x3ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x15x3.default, componentState.tTextUnitx0x15x3?.[state.screenSize]));

 const tRowx0x16ComputedData = computed(() => _.merge({}, componentState.tRowx0x16.default, componentState.tRowx0x16?.[state.screenSize]));

 const tRollingNumberx0x16x0ComputedData = computed(() => _.merge({}, componentState.tRollingNumberx0x16x0.default, componentState.tRollingNumberx0x16x0?.[state.screenSize]));

 const tRectx0x16x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x16x1.default, componentState.tRectx0x16x1?.[state.screenSize]));

 const tRectx0x16x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x16x2.default, componentState.tRectx0x16x2?.[state.screenSize]));

 const tTextUnitx0x16x3ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x16x3.default, componentState.tTextUnitx0x16x3?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tTextx0x3ComputedData,
tTextx0x4ComputedData,
tTextx0x5ComputedData,
tTextx0x6ComputedData,
tTextUnitx0x7ComputedData,
tTextUnitx0x8ComputedData,
tTextUnitx0x9ComputedData,
tTextUnitx0x10ComputedData,
tTextx0x11ComputedData,
tTextx0x12ComputedData,
tRectx0x13ComputedData,
tRectx0x14ComputedData,
tRowx0x15ComputedData,
tRollingNumberx0x15x0ComputedData,
tRectx0x15x1ComputedData,
tRectx0x15x2ComputedData,
tTextUnitx0x15x3ComputedData,
tRowx0x16ComputedData,
tRollingNumberx0x16x0ComputedData,
tRectx0x16x1ComputedData,
tRectx0x16x2ComputedData,
tTextUnitx0x16x3ComputedData,
};
},
};