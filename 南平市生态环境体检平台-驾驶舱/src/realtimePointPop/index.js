window.realtimePointPopComponent = {
template: 
`<div id="t-l-c-realtimePointPop" class="t-l-c-realtimePointPop" >` +
`<t-rect id="t-rect-bd0a.66d8b4c11" class="realtimePointPop-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-fecf.b12424f2d" class="realtimePointPop-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-row id="t-row-97f3.650122805" class="realtimePointPop-t-row-0-2"  :c-style="tRowx0x2ComputedData.cStyle" :gutter="tRowx0x2ComputedData.gutter" :justify="tRowx0x2ComputedData.justify" :align="tRowx0x2ComputedData.align">` +
`<t-text id="t-text-f2e2.0ed1b9bde" class="realtimePointPop-t-text-0-2-0"  :label="state.detailInfo.pointName" :editable="tTextx0x2x0ComputedData.editable" :c-style="tTextx0x2x0ComputedData.cStyle" :show-title="tTextx0x2x0ComputedData.showTitle">` +
`</t-text>` +
`<t-rect v-if="state.detailInfo.isWarning !== ''" id="t-rect-7f1c.4565ac821" class="realtimePointPop-t-rect-0-2-1"  :tip="tRectx0x2x1ComputedData.tip" :label="tRectx0x2x1ComputedData.label" :active="tRectx0x2x1ComputedData.active" :c-style="tRectx0x2x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-8e06.c2aa72d9" class="realtimePointPop-t-text-0-2-2"  :label="state.detailInfo.pointTypeName" :editable="tTextx0x2x2ComputedData.editable" :c-style="tTextx0x2x2ComputedData.cStyle">` +
`</t-text>` +
`<t-rect v-if="state.detailInfo.AQILevelIndex === '5'" id="t-rect-0c65.9c54612fa" class="realtimePointPop-t-rect-0-2-3"  :tip="tRectx0x2x3ComputedData.tip" :label="state.detailInfo.AQI" :active="tRectx0x2x3ComputedData.active" :c-style="tRectx0x2x3ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.detailInfo.AQILevelIndex === '6'" id="t-rect-55e4.8075fe8c3" class="realtimePointPop-t-rect-0-2-4"  :tip="tRectx0x2x4ComputedData.tip" :label="state.detailInfo.AQI" :active="tRectx0x2x4ComputedData.active" :c-style="tRectx0x2x4ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.detailInfo.AQILevelIndex === '--'" id="t-rect-28f0.75e22f5b2" class="realtimePointPop-t-rect-0-2-5"  :tip="tRectx0x2x5ComputedData.tip" :label="tRectx0x2x5ComputedData.label" :active="tRectx0x2x5ComputedData.active" :c-style="tRectx0x2x5ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.detailInfo.AQILevelIndex === '4'" id="t-rect-212d.9b4c3e345" class="realtimePointPop-t-rect-0-2-6"  :tip="tRectx0x2x6ComputedData.tip" :label="state.detailInfo.AQI" :active="tRectx0x2x6ComputedData.active" :c-style="tRectx0x2x6ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.detailInfo.AQILevelIndex === '1'" id="t-rect-eb6f.f05dcc55" class="realtimePointPop-t-rect-0-2-7"  :tip="tRectx0x2x7ComputedData.tip" :label="state.detailInfo.AQI" :active="tRectx0x2x7ComputedData.active" :c-style="tRectx0x2x7ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.detailInfo.AQILevelIndex === '2'" id="t-rect-86be.025a3e4af" class="realtimePointPop-t-rect-0-2-8"  :tip="tRectx0x2x8ComputedData.tip" :label="state.detailInfo.AQI" :active="tRectx0x2x8ComputedData.active" :c-style="tRectx0x2x8ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.detailInfo.AQILevelIndex === '3'" id="t-rect-4572.0714cd7e6" class="realtimePointPop-t-rect-0-2-9"  :tip="tRectx0x2x9ComputedData.tip" :label="state.detailInfo.AQI" :active="tRectx0x2x9ComputedData.active" :c-style="tRectx0x2x9ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-3c8d.72c1ce1af" class="realtimePointPop-t-text-0-2-10"  :label="tTextx0x2x10ComputedData.label" :editable="tTextx0x2x10ComputedData.editable" :c-style="tTextx0x2x10ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-bbf3.3e52ec1fa" class="realtimePointPop-t-text-0-2-11"  :label="state.detailInfo.primPollute" :editable="tTextx0x2x11ComputedData.editable" :c-style="tTextx0x2x11ComputedData.cStyle" :show-title="tTextx0x2x11ComputedData.showTitle">` +
`</t-text>` +
`</t-row>` +
`<t-rect id="t-rect-b0eb.9e93e2696" class="realtimePointPop-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" @click="onclick1742543207920">` +
`</t-rect>` +
`<t-list-card id="t-list-card-58ec.73169c904" class="realtimePointPop-t-list-card-0-4"  :data="state.cardData" :spacing-x="tListCardx0x4ComputedData.spacingX" :col="tListCardx0x4ComputedData.col" :direction="tListCardx0x4ComputedData.direction" :exchange-order="tListCardx0x4ComputedData.exchangeOrder" :unit-break="tListCardx0x4ComputedData.unitBreak" :key-field="tListCardx0x4ComputedData.keyField" :active-key-field="tListCardx0x4ComputedData.activeKeyField" :active="tListCardx0x4ComputedData.active" :c-style="tListCardx0x4ComputedData.cStyle" :data-raw="tListCardx0x4ComputedData.dataRaw">` +
`</t-list-card>` +
`<t-text id="t-text-9340.ef335e451" class="realtimePointPop-t-text-0-5"  :label="tTextx0x5ComputedData.label" :editable="tTextx0x5ComputedData.editable" :c-style="tTextx0x5ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-52e3.3cfd2329b" class="realtimePointPop-t-text-0-6"  :label="state.detailInfo.latestTime" :editable="tTextx0x6ComputedData.editable" :c-style="tTextx0x6ComputedData.cStyle">` +
`</t-text>` +
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
   theme: "",
   roomId: "",
   cardData: [{"title":"PM₂.₅","num":"--","unit":"μg/m³","color":"#AAA"},{"title":"PM₁₀","num":"--","unit":"μg/m³","color":"#AAA"},{"title":"SO₂","num":"--","unit":"μg/m³","color":"#AAA"},{"title":"NO₂","num":"--","unit":"μg/m³","color":"#AAA"},{"title":"CO","num":"--","unit":"mg/m³","color":"#AAA"},{"title":"O₃","num":"--","unit":"μg/m³","color":"#AAA"}],
   reqParams: {"POINT_CODE":"","MONITOR_TIME":"","DATE_TYPE":""},
   detailInfo: {"latestTime":"--","isWarning":"","AQI":"--","AQILevelIndex":"--","primPollute":"--","pointTypeName":"--","pointName":"--"},
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
            default: {"width":"510px","height":"216px","top":"0px","left":"0px","backgroundColor":"var(--t-point-pop-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderTop":"1px solid var(--t-point-pop-border)","borderLeft":"1px solid var(--t-point-pop-border)","borderRight":"1px solid var(--t-point-pop-border)","borderBottom":"1px solid var(--t-point-pop-border)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"510px","height":"216px","top":"0px","left":"0px","backgroundColor":"var(--t-point-pop-bg)","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottomLeftRadius":"16px","borderBottomRightRadius":"16px","borderTop":"1px solid var(--t-point-pop-border)","borderLeft":"1px solid var(--t-point-pop-border)","borderRight":"1px solid var(--t-point-pop-border)","borderBottom":"1px solid var(--t-point-pop-border)"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"510px","height":"47px","top":"0px","left":"0px","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","backgroundColor":"var(--t-point-pop-header-bg)","borderLeft":"1px solid var(--t-point-pop-border)","borderTop":"1px solid var(--t-point-pop-border)","borderRight":"1px solid var(--t-point-pop-border)","borderBottom":"1px solid var(--t-point-pop-border)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"510px","height":"47px","top":"0px","left":"0px","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","backgroundColor":"var(--t-point-pop-header-bg)","borderLeft":"1px solid var(--t-point-pop-border)","borderTop":"1px solid var(--t-point-pop-border)","borderRight":"1px solid var(--t-point-pop-border)","borderBottom":"1px solid var(--t-point-pop-border)"}}}, 
 },
},
tRowx0x2: {
defaultStyle: {
            default: {"width":"438px","height":"47px","position":"unset","left":"24px","top":"0px","letterSpacing":"0px","animationName":"","fontWeight":"600","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","border":"1px solid","borderImage":"var(--t-index-border) 1","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"438px","height":"47px","position":"unset","left":"24px","top":"0px","letterSpacing":"0px","animationName":"","fontWeight":"600","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","border":"1px solid","borderImage":"var(--t-index-border) 1","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px"}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x2x0: {
defaultStyle: {
            default: {"width":"auto","height":"auto","color":"var(--business-white)","textAlign":"center","position":"unset","left":"518.4390687019594px","top":"314.66978602255546px","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","fontSize":"18px","lineHeight":"47px","max-width":"136px","animationName":"","fontWeight":"700","fontFamily":"微软雅黑","marginLeft":"0px","marginRight":"16px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"auto","color":"var(--business-white)","textAlign":"center","position":"unset","left":"518.4390687019594px","top":"314.66978602255546px","whiteSpace":"nowrap","textOverflow":"ellipsis","display":"block","overflow":"hidden","fontSize":"18px","lineHeight":"47px","max-width":"136px","animationName":"","fontWeight":"700","fontFamily":"微软雅黑","marginLeft":"0px","marginRight":"16px"}}},
showTitle:true, 
 },
},
tRectx0x2x1: {
defaultStyle: {
            default: {"width":"20px","height":"20px","position":"unset","left":"90px","top":"-42px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-03-21/74e6911e60624b5e9cebe97f7d1f8ef6.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","marginLeft":"0px","marginRight":"10px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"20px","height":"20px","position":"unset","left":"90px","top":"-42px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-03-21/74e6911e60624b5e9cebe97f7d1f8ef6.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","marginLeft":"0px","marginRight":"10px"}}}, 
 },
},
tTextx0x2x2: {
defaultStyle: {
            default: {"width":"40px","height":"20px","color":"var(--t-white)","position":"unset","left":"198px","top":"-34px","backgroundColor":"rgba(255, 255, 255, 0.2)","borderLeft":"1px solid var(--t-white)","borderTop":"1px solid var(--t-white)","borderRight":"1px solid var(--t-white)","borderBottom":"1px solid var(--t-white)","lineHeight":"18px","textAlign":"center","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"12px"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"40px","height":"20px","color":"var(--t-white)","position":"unset","left":"198px","top":"-34px","backgroundColor":"rgba(255, 255, 255, 0.2)","borderLeft":"1px solid var(--t-white)","borderTop":"1px solid var(--t-white)","borderRight":"1px solid var(--t-white)","borderBottom":"1px solid var(--t-white)","lineHeight":"18px","textAlign":"center","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","fontSize":"12px"}}}, 
 },
},
tRectx0x2x3: {
defaultStyle: {
            default: {"width":"40px","height":"20px","position":"unset","left":"271px","top":"-76px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"#99004C","fontSize":"12px","color":"var(--t-white)","animationName":"","marginLeft":"10px","paddingRight":"0px","marginRight":"10px"},
            
            },
 default: { 
 
tip:false,
label:"--",
active:false,
cStyle:{"wrapper":{"default":{"width":"40px","height":"20px","position":"unset","left":"271px","top":"-76px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"#99004C","fontSize":"12px","color":"var(--t-white)","animationName":"","marginLeft":"10px","paddingRight":"0px","marginRight":"10px"}}}, 
 },
},
tRectx0x2x4: {
defaultStyle: {
            default: {"width":"40px","height":"20px","position":"unset","left":"233px","top":"-98px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"#7E0023","fontSize":"12px","color":"var(--t-white)","animationName":"","marginLeft":"10px","paddingRight":"0px","marginRight":"10px"},
            
            },
 default: { 
 
tip:false,
label:"--",
active:false,
cStyle:{"wrapper":{"default":{"width":"40px","height":"20px","position":"unset","left":"233px","top":"-98px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"#7E0023","fontSize":"12px","color":"var(--t-white)","animationName":"","marginLeft":"10px","paddingRight":"0px","marginRight":"10px"}}}, 
 },
},
tRectx0x2x5: {
defaultStyle: {
            default: {"width":"40px","height":"20px","position":"unset","left":"130px","top":"-76px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"#AAAAAA","fontSize":"12px","color":"var(--t-white)","animationName":"","marginLeft":"10px","paddingRight":"0px","marginRight":"10px"},
            
            },
 default: { 
 
tip:false,
label:"--",
active:false,
cStyle:{"wrapper":{"default":{"width":"40px","height":"20px","position":"unset","left":"130px","top":"-76px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"#AAAAAA","fontSize":"12px","color":"var(--t-white)","animationName":"","marginLeft":"10px","paddingRight":"0px","marginRight":"10px"}}}, 
 },
},
tRectx0x2x6: {
defaultStyle: {
            default: {"width":"40px","height":"20px","position":"unset","left":"172px","top":"-56px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"#FF0000","fontSize":"12px","color":"var(--t-white)","marginLeft":"10px","paddingRight":"0px","marginRight":"10px"},
            
            },
 default: { 
 
tip:false,
label:"--",
active:false,
cStyle:{"wrapper":{"default":{"width":"40px","height":"20px","position":"unset","left":"172px","top":"-56px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"#FF0000","fontSize":"12px","color":"var(--t-white)","marginLeft":"10px","paddingRight":"0px","marginRight":"10px"}}}, 
 },
},
tRectx0x2x7: {
defaultStyle: {
            default: {"width":"40px","height":"20px","position":"unset","left":"66px","top":"-53px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"#00E400","fontSize":"12px","color":"var(--t-white)","animationName":"","marginLeft":"10px","paddingRight":"0px","marginRight":"10px"},
            
            },
 default: { 
 
tip:false,
label:"--",
active:false,
cStyle:{"wrapper":{"default":{"width":"40px","height":"20px","position":"unset","left":"66px","top":"-53px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"#00E400","fontSize":"12px","color":"var(--t-white)","animationName":"","marginLeft":"10px","paddingRight":"0px","marginRight":"10px"}}}, 
 },
},
tRectx0x2x8: {
defaultStyle: {
            default: {"width":"40px","height":"20px","position":"unset","left":"223px","top":"-75px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"#FFFF00","fontSize":"12px","color":"#000","animationName":"","marginLeft":"10px","paddingRight":"0px","marginRight":"10px"},
            
            },
 default: { 
 
tip:false,
label:"--",
active:false,
cStyle:{"wrapper":{"default":{"width":"40px","height":"20px","position":"unset","left":"223px","top":"-75px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"#FFFF00","fontSize":"12px","color":"#000","animationName":"","marginLeft":"10px","paddingRight":"0px","marginRight":"10px"}}}, 
 },
},
tRectx0x2x9: {
defaultStyle: {
            default: {"width":"40px","height":"20px","position":"unset","left":"125px","top":"-46px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"#FF7E00","fontSize":"12px","color":"var(--t-white)","animationName":"","marginLeft":"10px","paddingRight":"0px","marginRight":"10px"},
            
            },
 default: { 
 
tip:false,
label:"--",
active:false,
cStyle:{"wrapper":{"default":{"width":"40px","height":"20px","position":"unset","left":"125px","top":"-46px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"#FF7E00","fontSize":"12px","color":"var(--t-white)","animationName":"","marginLeft":"10px","paddingRight":"0px","marginRight":"10px"}}}, 
 },
},
tTextx0x2x10: {
defaultStyle: {
            default: {"width":"44px","height":"14px","color":"var(--t-color-text-green)","fontSize":"14px","fontWeight":"700","position":"unset","left":"308px","top":"-77px","lineHeight":"14px"},
            
            },
 default: { 
 
label:"首污：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"44px","height":"14px","color":"var(--t-color-text-green)","fontSize":"14px","fontWeight":"700","position":"unset","left":"308px","top":"-77px","lineHeight":"14px"}}}, 
 },
},
tTextx0x2x11: {
defaultStyle: {
            default: {"width":"auto","height":"18px","color":"var(--t-white)","fontSize":"14px","lineHeight":"16px","fontWeight":"700","top":"-84px","left":"193px","max-width":"110px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"18px","color":"var(--t-white)","fontSize":"14px","lineHeight":"16px","fontWeight":"700","top":"-84px","left":"193px","max-width":"110px","overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis"}}},
showTitle:true, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"24px","height":"24px","backgroundImage":"var(--t-point-pop-close-btn)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"462px","top":"11px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"24px","height":"24px","backgroundImage":"var(--t-point-pop-close-btn)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"462px","top":"11px","cursor":"pointer"},"hover":{"opacity":"0.8"}}}, 
 },
},
tListCardx0x4: {
defaultStyle: {
            default: {"width":"470px","height":"100px","position":"unset","left":"20px","top":"100px"},
            
            },
 default: { 
 
data:[{"title":"PM₂.₅","num":"2","unit":"μg/m³","color":"#05CB08"},{"title":"PM₁₀","num":"12","unit":"μg/m³","color":"#05CB08"},{"title":"SO₂","num":"5","unit":"μg/m³","color":"#05CB08"},{"title":"NO₂","num":"12","unit":"μg/m³","color":"#05CB08"},{"title":"CO","num":"5","unit":"mg/m³","color":"#05CB08"},{"title":"O₃","num":"12","unit":"μg/m³","color":"#05CB08"}],
spacingX:0,
col:2,
direction:"horizontal",
exchangeOrder:false,
unitBreak:false,
keyField:{"icon":"icon","title":"title","num":"num","unit":"unit","color":"color","special":"special","selectIcon":"selectIcon"},
activeKeyField:"title",
active:"",
cStyle:{"wrapper":{"default":{"width":"470px","height":"100px","position":"unset","left":"20px","top":"100px"}},"itemWrapper":{"default":{"height":"32px","backgroundColor":"rgba(26, 27, 31, 0)","cursor":"auto","column-gap":"2px","marginRight":"2px","marginBottom":"2px"}},"title":{"default":{"width":"80px","height":"100%","backgroundColor":"var(--business-show-bg10)","fontSize":"14px","color":"var(--t-color-text-green)","marginTop":"0px","marginLeft":"0px","paddingRight":"16px","marginBottom":"0px","textAlign":"right"}},"numBox":{"default":{"width":"152px","height":"100%","backgroundColor":"var(--business-show-bg15)","paddingLeft":"16px","align-items":"center","justify-content":"flex-start"}},"num":{"default":{"fontSize":"14px","fontWeight":"400","fontFamily":"微软雅黑","lineHeight":"32px"}},"unit":{"default":{"fontSize":"14px","color":"var(--t-color-text-green)","marginLeft":"2px","lineHeight":"32px"}}},
dataRaw:[{"title":"{{PM25}}","num":"2","unit":"μg/{{M3}}","color":"#05CB08"},{"title":"{{PM10}}","num":"12","unit":"μg/{{M3}}","color":"#05CB08"},{"title":"{{SO2}}","num":"5","unit":"μg/{{M3}}","color":"#05CB08"},{"title":"{{NO2}}","num":"12","unit":"μg/{{M3}}","color":"#05CB08"},{"title":"CO","num":"5","unit":"mg/{{M3}}","color":"#05CB08"},{"title":"{{O3}}","num":"12","unit":"μg/{{M3}}","color":"#05CB08"}], 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"width":"70px","height":"14px","color":"var(--t-color-text-green)","top":"68px","left":"20px","fontSize":"14px","lineHeight":"14px","position":"unset"},
            
            },
 default: { 
 
label:"更新时间：",
editable:false,
cStyle:{"wrapper":{"default":{"width":"70px","height":"14px","color":"var(--t-color-text-green)","top":"68px","left":"20px","fontSize":"14px","lineHeight":"14px","position":"unset"}}}, 
 },
},
tTextx0x6: {
defaultStyle: {
            default: {"width":"150px","height":"14px","color":"var(--t-color-text-green)","top":"68px","left":"90px","fontSize":"14px","lineHeight":"14px","animationName":"","position":"unset"},
            
            },
 default: { 
 
label:"--",
editable:false,
cStyle:{"wrapper":{"default":{"width":"150px","height":"14px","color":"var(--t-color-text-green)","top":"68px","left":"90px","fontSize":"14px","lineHeight":"14px","animationName":"","position":"unset"}}}, 
 },
},
});
const initParams = () => {
// 获取参数
state.reqParams = {
  POINT_CODE: getParamsFromUrl('POINT_CODE'),
  MONITOR_TIME: getParamsFromUrl('MONITORTIME'),
  DATE_TYPE: getParamsFromUrl('DATETYPE'),
};
state.roomId = getParamsFromUrl('roomId');
// 是否报警
state.detailInfo.isWarning = getParamsFromUrl('ALARMTYPE') || '';
// 更新时间
state.detailInfo.latestTime = handleNoVal(getParamsFromUrl('MONITORTIME'));

// 根据时间类型请求不同的接口
if (state.reqParams.DATE_TYPE === 'HOUR') {
  getHourData();
} else if (state.reqParams.DATE_TYPE === 'DAY') {
  getDayData();
} else if (state.reqParams.DATE_TYPE === 'CUR_MONTH' || state.reqParams.DATE_TYPE === 'ACC_MONTH') {
  getMonthYearData();
}
if (localStorage.getItem('color')) {
  const body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', localStorage.getItem('color') || 'theme1');
}
};
const handleClose = () => {
// window.parent.TMap.hidePopup();
rootData.rootSocket.emit('message', {
  room: state.roomId, // 房间号
  type: 'closeAirPopup', // 消息名称
  data: {
    close: true,
  },
});
};
const getPointTypeName = (code) => {
// POINT_TYPE:0,1,2,3,4
// 对应国控、省控、市控、县控、微站
switch (code) {
  case '0':
    return '国控';
  case '1':
    return '省控';
  case '2':
    return '市控';
  case '3':
    return '县控';
  case '4':
    return '微站';
  default:
    return '--';
}
};
const getLevelColor = (levelValue) => {
// 根据等级值，返回对应的颜色（大气）
switch (levelValue) {
  case '1':
    return '#00E400';
  case '2':
    return '#FFFF00';
  case '3':
    return '#FF7E00';
  case '4':
    return '#FF0000';
  case '5':
    return '#99004C';
  case '6':
    return '#7E0023';
  default:
    return '#AAAAAA'
}
};
const handleResData = (curData) => {
const replacePollution = (pollutionString) => {
  /**
  * @description: 替换一段字符串中所有污染物为正确格式
  * @param pollutionString 要替换的字符串
  * @return 替换完的字符串
  */
  if (!pollutionString) return '';
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
  let curString = pollutionString;
  POLLUTION_CHARTS_ALL.forEach((item) => {
    item.name.forEach((name) => {
      curString = curString.replace(name, item.html);
    });
  });
  return curString;
}
// 基本信息
state.detailInfo.AQI = handleNoVal(curData.AQI);
state.detailInfo.AQILevelIndex = handleNoVal(curData.AQILEVELINDEX);
state.detailInfo.primPollute = replacePollution(handleNoVal(curData.PRIMPOLLUTE));
state.detailInfo.pointTypeName = getPointTypeName(curData.POINT_TYPE);
state.detailInfo.pointName = handleNoVal(curData.POINT_NAME);
// 污染物卡片信息
state.cardData[0].num = handleNoVal(curData.PM25);
state.cardData[0].color = getLevelColor(curData.PM25LEVELINDEX);

state.cardData[1].num = handleNoVal(curData.PM10);
state.cardData[1].color = getLevelColor(curData.PM10LEVELINDEX);

state.cardData[2].num = handleNoVal(curData.SO2);
state.cardData[2].color = getLevelColor(curData.SO2LEVELINDEX);

state.cardData[3].num = handleNoVal(curData.NO2);
state.cardData[3].color = getLevelColor(curData.NO2LEVELINDEX);

state.cardData[4].num = handleNoVal(curData.CO);
state.cardData[4].color = getLevelColor(curData.COLEVELINDEX);

state.cardData[5].num = handleNoVal(curData.O3);
state.cardData[5].color = getLevelColor(curData.O3LEVELINDEX);
};
const watchColor = () => {

console.log(state.theme, 10, global.theme, '8888999');
// watch(() => global.theme, () => {
//   if (localStorage.getItem('color')) {
//     state.theme = localStorage.getItem('color');
//     const body = document.getElementsByTagName('body')[0];
//     body.setAttribute('class', localStorage.getItem('color') || 'theme1');
//     console.log(state.theme, 10, global.theme, '8888');
//   }
// });
};
const onclick1742543207920 = () => {
// 执行自定义方法
handleClose();
};
// 接口函数
const getHourData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"MONITOR_TIME":state.reqParams.MONITOR_TIME,"POINT_CODE":state.reqParams.POINT_CODE,"interfaceId":"50feb08cc20df8f684a84e0119cf26c6"},}).then((res) => {
     // 成功的操作
     const { data } = res.data;
const curData = data[0] || {};
handleResData(curData);
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getMonthYearData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"DATE_TYPE":state.reqParams.DATE_TYPE,"MONITOR_TIME":state.reqParams.MONITOR_TIME,"POINT_CODE":state.reqParams.POINT_CODE,"interfaceId":"9c20551d9f51044d535c1bc3c9496ab4"},}).then((res) => {
     // 成功的操作
     const { data } = res.data;
const curData = data[0] || {};
handleResData(curData);
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
// 接口函数
const getDayData = () => {
return new Promise((resolve, reject) => {
  http({"url":global.serviceBasePath,"method":"get","baseURL":global.serviceBaseUrl,"params":{"MONITOR_TIME":state.reqParams.MONITOR_TIME,"POINT_CODE":state.reqParams.POINT_CODE,"interfaceId":"3bd3f22a71e051873b187323759bdce9"},}).then((res) => {
     // 成功的操作
     const { data } = res.data;
const curData = data[0] || {};
handleResData(curData);
      resolve(_.get(res, "data"));
    }).catch((error) => {
      // 失败的操作
      
      reject(error);
    });
  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-realtimePointPop', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
initParams();
onMounted(() => {
setPageScale('t-l-c-realtimePointPop', global.appScaleMode, 'normal');
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

 const tRowx0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x2.default, componentState.tRowx0x2?.[state.screenSize]));

 const tTextx0x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x2x0.default, componentState.tTextx0x2x0?.[state.screenSize]));

 const tRectx0x2x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x2x1.default, componentState.tRectx0x2x1?.[state.screenSize]));

 const tTextx0x2x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2x2.default, componentState.tTextx0x2x2?.[state.screenSize]));

 const tRectx0x2x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x2x3.default, componentState.tRectx0x2x3?.[state.screenSize]));

 const tRectx0x2x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x2x4.default, componentState.tRectx0x2x4?.[state.screenSize]));

 const tRectx0x2x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x2x5.default, componentState.tRectx0x2x5?.[state.screenSize]));

 const tRectx0x2x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x2x6.default, componentState.tRectx0x2x6?.[state.screenSize]));

 const tRectx0x2x7ComputedData = computed(() => _.merge({}, componentState.tRectx0x2x7.default, componentState.tRectx0x2x7?.[state.screenSize]));

 const tRectx0x2x8ComputedData = computed(() => _.merge({}, componentState.tRectx0x2x8.default, componentState.tRectx0x2x8?.[state.screenSize]));

 const tRectx0x2x9ComputedData = computed(() => _.merge({}, componentState.tRectx0x2x9.default, componentState.tRectx0x2x9?.[state.screenSize]));

 const tTextx0x2x10ComputedData = computed(() => _.merge({}, componentState.tTextx0x2x10.default, componentState.tTextx0x2x10?.[state.screenSize]));

 const tTextx0x2x11ComputedData = computed(() => _.merge({}, componentState.tTextx0x2x11.default, componentState.tTextx0x2x11?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tListCardx0x4ComputedData = computed(() => _.merge({}, componentState.tListCardx0x4.default, componentState.tListCardx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

 const tTextx0x6ComputedData = computed(() => _.merge({}, componentState.tTextx0x6.default, componentState.tTextx0x6?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tRowx0x2ComputedData,
tTextx0x2x0ComputedData,
tRectx0x2x1ComputedData,
tTextx0x2x2ComputedData,
tRectx0x2x3ComputedData,
tRectx0x2x4ComputedData,
tRectx0x2x5ComputedData,
tRectx0x2x6ComputedData,
tRectx0x2x7ComputedData,
tRectx0x2x8ComputedData,
tRectx0x2x9ComputedData,
tTextx0x2x10ComputedData,
tTextx0x2x11ComputedData,
tRectx0x3ComputedData,
tListCardx0x4ComputedData,
tTextx0x5ComputedData,
tTextx0x6ComputedData,
onclick1742543207920,
};
},
};