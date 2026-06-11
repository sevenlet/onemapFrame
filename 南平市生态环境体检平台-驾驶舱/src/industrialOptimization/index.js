window.industrialOptimizationComponent = {
template: 
`<div id="t-l-c-industrialOptimization" class="t-l-c-industrialOptimization" >` +
`<t-rect id="t-rect-07b8.68839b79d" class="industrialOptimization-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-common id="t-text-common-5bd0.2a3c5b6d" class="industrialOptimization-t-text-common-0-1"  :label="tTextCommonx0x1ComputedData.label" :editable="tTextCommonx0x1ComputedData.editable" :c-style="tTextCommonx0x1ComputedData.cStyle">` +
`</t-text-common>` +
`<t-high-light-text id="t-high-light-text-b8d4.6bcaf3608" class="industrialOptimization-t-high-light-text-0-2"  :fragment-list="tHighLightTextx0x2ComputedData.fragmentList" :styles="tHighLightTextx0x2ComputedData.styles" :c-style="tHighLightTextx0x2ComputedData.cStyle">` +
`</t-high-light-text>` +
`<t-rect id="t-rect-9365.fc59e725a" class="industrialOptimization-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-common id="t-text-common-5644.f2999e75a" class="industrialOptimization-t-text-common-0-4"  :label="tTextCommonx0x4ComputedData.label" :editable="tTextCommonx0x4ComputedData.editable" :c-style="tTextCommonx0x4ComputedData.cStyle">` +
`</t-text-common>` +
`<t-high-light-text id="t-high-light-text-22c8.5c9cbef66" class="industrialOptimization-t-high-light-text-0-5"  :fragment-list="tHighLightTextx0x5ComputedData.fragmentList" :styles="tHighLightTextx0x5ComputedData.styles" :c-style="tHighLightTextx0x5ComputedData.cStyle">` +
`</t-high-light-text>` +
`<t-rect id="t-rect-7339.9da1667a2" class="industrialOptimization-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-745e.553278794" class="industrialOptimization-t-rect-0-7"  :tip="tRectx0x7ComputedData.tip" :label="tRectx0x7ComputedData.label" :active="tRectx0x7ComputedData.active" :c-style="tRectx0x7ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-common id="t-text-common-5992.a8dd90159" class="industrialOptimization-t-text-common-0-8"  :label="tTextCommonx0x8ComputedData.label" :editable="tTextCommonx0x8ComputedData.editable" :c-style="tTextCommonx0x8ComputedData.cStyle">` +
`</t-text-common>` +
`<t-high-light-text id="t-high-light-text-b404.2c59ebe9c" class="industrialOptimization-t-high-light-text-0-9"  :fragment-list="tHighLightTextx0x9ComputedData.fragmentList" :styles="tHighLightTextx0x9ComputedData.styles" :c-style="tHighLightTextx0x9ComputedData.cStyle">` +
`</t-high-light-text>` +
`<t-text-common id="t-text-common-aa2d.521a338c6" class="industrialOptimization-t-text-common-0-10"  :label="tTextCommonx0x10ComputedData.label" :editable="tTextCommonx0x10ComputedData.editable" :c-style="tTextCommonx0x10ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-c30f.19984a4ea" class="industrialOptimization-t-text-common-0-11"  :label="tTextCommonx0x11ComputedData.label" :editable="tTextCommonx0x11ComputedData.editable" :c-style="tTextCommonx0x11ComputedData.cStyle">` +
`</t-text-common>` +
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
            default: {"width":"557px","height":"90px","top":"46px","left":"0px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","border-image":"var(--jsc-card-border)","background":"var(--jsc-card-bgc)","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--jsc-left-cyyh-bgc)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"557px","height":"90px","top":"46px","left":"0px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","border-image":"var(--jsc-card-border)","background":"var(--jsc-card-bgc)","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--jsc-left-cyyh-bgc)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}}}, 
 },
},
tTextCommonx0x1: {
defaultStyle: {
            default: {"width":"160px","height":"19px","color":"var(--skin-font-color-90)","textAlign":"center","fontSize":"16px","fontWeight":"700","position":"unset","left":"20px","top":"52px"},
            
            },
 default: { 
 
label:"福建省规上工业增加值 累计同比增长",
editable:false,
cStyle:{"wrapper":{"default":{"width":"160px","height":"19px","color":"var(--skin-font-color-90)","textAlign":"center","fontSize":"16px","fontWeight":"700","position":"unset","left":"20px","top":"52px"}}}, 
 },
},
tHighLightTextx0x2: {
defaultStyle: {
            default: {"width":"160px","height":"20px","position":"unset","left":"20px","top":"97px","textAlign":"center"},
            
            },
 default: { 
 
fragmentList:[{"text":"8.6","styleName":"style2"},{"text":" %","styleName":"style1"}],
styles:[{"name":"style1","style":{"fontFamily":"微软雅黑","fontSize":"14px","fontWeight":400,"color":"var(--skin-font-color-80)"}},{"name":"style2","style":{"fontFamily":"DIN-bold","fontSize":"20PX","fontWeight":400,"color":"var(--jsc-number-orange)"}}],
cStyle:{"wrapper":{"default":{"width":"160px","height":"20px","position":"unset","left":"20px","top":"97px","textAlign":"center"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"2px","height":"38px","position":"unset","left":"193px","top":"65px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"2px","height":"38px","position":"unset","left":"193px","top":"65px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}}}, 
 },
},
tTextCommonx0x4: {
defaultStyle: {
            default: {"width":"120px","height":"19px","color":"var(--skin-font-color-90)","textAlign":"center","fontSize":"16px","fontWeight":"700","position":"unset","left":"214px","top":"52px","animationName":""},
            
            },
 default: { 
 
label:"高技术产业投资累计增长",
editable:false,
cStyle:{"wrapper":{"default":{"width":"120px","height":"19px","color":"var(--skin-font-color-90)","textAlign":"center","fontSize":"16px","fontWeight":"700","position":"unset","left":"214px","top":"52px","animationName":""}}}, 
 },
},
tHighLightTextx0x5: {
defaultStyle: {
            default: {"width":"120px","height":"20px","position":"unset","left":"214px","top":"97px","textAlign":"center","animationName":""},
            
            },
 default: { 
 
fragmentList:[{"text":"7.5","styleName":"style2"},{"text":" %","styleName":"style1"}],
styles:[{"name":"style1","style":{"fontFamily":"微软雅黑","fontSize":"14px","fontWeight":400,"color":"var(--skin-font-color-80)"}},{"name":"style2","style":{"fontFamily":"DIN-bold","fontSize":"20PX","fontWeight":400,"color":"var(--jsc-number-orange)"}}],
cStyle:{"wrapper":{"default":{"width":"120px","height":"20px","position":"unset","left":"214px","top":"97px","textAlign":"center","animationName":""}}}, 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"557px","height":"30px","left":"0px","top":"7px","backgroundImage":"var(--dialog-title-level2)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"557px","height":"30px","left":"0px","top":"7px","backgroundImage":"var(--dialog-title-level2)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}}}, 
 },
},
tRectx0x7: {
defaultStyle: {
            default: {"width":"2px","height":"38px","position":"unset","left":"348px","top":"65px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"2px","height":"38px","position":"unset","left":"348px","top":"65px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tTextCommonx0x8: {
defaultStyle: {
            default: {"width":"180px","height":"19px","color":"var(--skin-font-color-90)","textAlign":"center","fontSize":"16px","fontWeight":"700","position":"unset","left":"367px","top":"52px","animationName":""},
            
            },
 default: { 
 
label:"工业改建和技术改造投资累计增长",
editable:false,
cStyle:{"wrapper":{"default":{"width":"180px","height":"19px","color":"var(--skin-font-color-90)","textAlign":"center","fontSize":"16px","fontWeight":"700","position":"unset","left":"367px","top":"52px","animationName":""}}}, 
 },
},
tHighLightTextx0x9: {
defaultStyle: {
            default: {"width":"180px","height":"20px","position":"unset","left":"367px","top":"97px","textAlign":"center","animationName":""},
            
            },
 default: { 
 
fragmentList:[{"text":"14.1","styleName":"style2"},{"text":" %","styleName":"style1"}],
styles:[{"name":"style1","style":{"fontFamily":"微软雅黑","fontSize":"14px","fontWeight":400,"color":"var(--skin-font-color-80)"}},{"name":"style2","style":{"fontFamily":"DIN-bold","fontSize":"20PX","fontWeight":400,"color":"var(--jsc-number-orange)"}}],
cStyle:{"wrapper":{"default":{"width":"180px","height":"20px","position":"unset","left":"367px","top":"97px","textAlign":"center","animationName":""}}}, 
 },
},
tTextCommonx0x10: {
defaultStyle: {
            default: {"width":"200px","height":"19px","color":"var(--skin-font-color)","position":"unset","left":"28px","top":"4px","fontSize":"20px","fontFamily":"方正综艺","letterSpacing":"2px"},
            
            },
 default: { 
 
label:"产业优化与污染防治",
editable:false,
cStyle:{"wrapper":{"default":{"width":"200px","height":"19px","color":"var(--skin-font-color)","position":"unset","left":"28px","top":"4px","fontSize":"20px","fontFamily":"方正综艺","letterSpacing":"2px"}}}, 
 },
},
tTextCommonx0x11: {
defaultStyle: {
            default: {"width":"150px","height":"19px","color":"var(--skin-font-color-80)","position":"unset","left":"400px","top":"16px","textAlign":"right","fontSize":"14px"},
            
            },
 default: { 
 
label:"截至2025-08",
editable:false,
cStyle:{"wrapper":{"default":{"width":"150px","height":"19px","color":"var(--skin-font-color-80)","position":"unset","left":"400px","top":"16px","textAlign":"right","fontSize":"14px"}}}, 
 },
},
});
 function handleWindowResize() {
                            setPageScale('t-l-c-industrialOptimization', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-industrialOptimization', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tTextCommonx0x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1.default, componentState.tTextCommonx0x1?.[state.screenSize]));

 const tHighLightTextx0x2ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x2.default, componentState.tHighLightTextx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tTextCommonx0x4ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x4.default, componentState.tTextCommonx0x4?.[state.screenSize]));

 const tHighLightTextx0x5ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x5.default, componentState.tHighLightTextx0x5?.[state.screenSize]));

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

 const tRectx0x7ComputedData = computed(() => _.merge({}, componentState.tRectx0x7.default, componentState.tRectx0x7?.[state.screenSize]));

 const tTextCommonx0x8ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x8.default, componentState.tTextCommonx0x8?.[state.screenSize]));

 const tHighLightTextx0x9ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x9.default, componentState.tHighLightTextx0x9?.[state.screenSize]));

 const tTextCommonx0x10ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x10.default, componentState.tTextCommonx0x10?.[state.screenSize]));

 const tTextCommonx0x11ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x11.default, componentState.tTextCommonx0x11?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tRectx0x0ComputedData,
tTextCommonx0x1ComputedData,
tHighLightTextx0x2ComputedData,
tRectx0x3ComputedData,
tTextCommonx0x4ComputedData,
tHighLightTextx0x5ComputedData,
tRectx0x6ComputedData,
tRectx0x7ComputedData,
tTextCommonx0x8ComputedData,
tHighLightTextx0x9ComputedData,
tTextCommonx0x10ComputedData,
tTextCommonx0x11ComputedData,
};
},
};