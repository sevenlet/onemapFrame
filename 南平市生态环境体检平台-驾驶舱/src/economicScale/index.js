window.economicScaleComponent = {
template: 
`<div id="t-l-c-economicScale" class="t-l-c-economicScale" >` +
`<t-rect id="t-rect-07b8.68839b79d" class="economicScale-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-7339.9da1667a2" class="economicScale-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-common id="t-text-common-c30f.19984a4ea" class="economicScale-t-text-common-0-2"  :label="tTextCommonx0x2ComputedData.label" :editable="tTextCommonx0x2ComputedData.editable" :c-style="tTextCommonx0x2ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-aa2d.521a338c6" class="economicScale-t-text-common-0-3"  :label="tTextCommonx0x3ComputedData.label" :editable="tTextCommonx0x3ComputedData.editable" :c-style="tTextCommonx0x3ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-5bd0.2a3c5b6d" class="economicScale-t-text-common-0-4"  :label="tTextCommonx0x4ComputedData.label" :editable="tTextCommonx0x4ComputedData.editable" :c-style="tTextCommonx0x4ComputedData.cStyle">` +
`</t-text-common>` +
`<t-high-light-text id="t-high-light-text-b8d4.6bcaf3608" class="economicScale-t-high-light-text-0-5"  :fragment-list="tHighLightTextx0x5ComputedData.fragmentList" :styles="tHighLightTextx0x5ComputedData.styles" :c-style="tHighLightTextx0x5ComputedData.cStyle">` +
`</t-high-light-text>` +
`<t-rect id="t-rect-9365.fc59e725a" class="economicScale-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-common id="t-text-common-5644.f2999e75a" class="economicScale-t-text-common-0-7"  :label="tTextCommonx0x7ComputedData.label" :editable="tTextCommonx0x7ComputedData.editable" :c-style="tTextCommonx0x7ComputedData.cStyle">` +
`</t-text-common>` +
`<t-high-light-text id="t-high-light-text-22c8.5c9cbef66" class="economicScale-t-high-light-text-0-8"  :fragment-list="tHighLightTextx0x8ComputedData.fragmentList" :styles="tHighLightTextx0x8ComputedData.styles" :c-style="tHighLightTextx0x8ComputedData.cStyle">` +
`</t-high-light-text>` +
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
            default: {"width":"557px","height":"52px","top":"46px","left":"0px","backgroundImage":"var(--jsc-left-jjgm-bgc)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"557px","height":"52px","top":"46px","left":"0px","backgroundImage":"var(--jsc-left-jjgm-bgc)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}}}, 
 },
},
tRectx0x1: {
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
tTextCommonx0x2: {
defaultStyle: {
            default: {"width":"150px","height":"19px","color":"var(--skin-font-color-80)","position":"unset","left":"400px","top":"16px","textAlign":"right","fontSize":"14px"},
            
            },
 default: { 
 
label:"截至2021年",
editable:false,
cStyle:{"wrapper":{"default":{"width":"150px","height":"19px","color":"var(--skin-font-color-80)","position":"unset","left":"400px","top":"16px","textAlign":"right","fontSize":"14px"}}}, 
 },
},
tTextCommonx0x3: {
defaultStyle: {
            default: {"width":"200px","height":"19px","color":"var(--skin-font-color)","position":"unset","left":"28px","top":"4px","fontSize":"20px","fontFamily":"方正综艺","letterSpacing":"2px"},
            
            },
 default: { 
 
label:"经济规模与资源消耗",
editable:false,
cStyle:{"wrapper":{"default":{"width":"200px","height":"19px","color":"var(--skin-font-color)","position":"unset","left":"28px","top":"4px","fontSize":"20px","fontFamily":"方正综艺","letterSpacing":"2px"}}}, 
 },
},
tTextCommonx0x4: {
defaultStyle: {
            default: {"width":"240px","height":"19px","color":"var(--skin-font-color-90)","textAlign":"center","fontSize":"16px","fontWeight":"700","position":"unset","left":"20px","top":"48px"},
            
            },
 default: { 
 
label:"单位地区生产总值能耗升降率",
editable:false,
cStyle:{"wrapper":{"default":{"width":"240px","height":"19px","color":"var(--skin-font-color-90)","textAlign":"center","fontSize":"16px","fontWeight":"700","position":"unset","left":"20px","top":"48px"}}}, 
 },
},
tHighLightTextx0x5: {
defaultStyle: {
            default: {"width":"240px","height":"20px","position":"unset","left":"20px","top":"71px","textAlign":"center"},
            
            },
 default: { 
 
fragmentList:[{"text":"0.90","styleName":"style2"},{"text":" %","styleName":"style1"}],
styles:[{"name":"style1","style":{"fontFamily":"微软雅黑","fontSize":"14px","fontWeight":400,"color":"var(--skin-font-color-80)"}},{"name":"style2","style":{"fontFamily":"DIN-bold","fontSize":"20PX","fontWeight":400,"color":"var(--jsc-number-orange)"}}],
cStyle:{"wrapper":{"default":{"width":"240px","height":"20px","position":"unset","left":"20px","top":"71px","textAlign":"center"}}}, 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"2px","height":"38px","position":"unset","left":"260px","top":"50px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"2px","height":"38px","position":"unset","left":"260px","top":"50px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}}}, 
 },
},
tTextCommonx0x7: {
defaultStyle: {
            default: {"width":"240px","height":"19px","color":"var(--skin-font-color-90)","textAlign":"center","fontSize":"16px","fontWeight":"700","position":"unset","left":"300px","top":"48px","animationName":""},
            
            },
 default: { 
 
label:"万元工业增加值能源消耗率",
editable:false,
cStyle:{"wrapper":{"default":{"width":"240px","height":"19px","color":"var(--skin-font-color-90)","textAlign":"center","fontSize":"16px","fontWeight":"700","position":"unset","left":"300px","top":"48px","animationName":""}}}, 
 },
},
tHighLightTextx0x8: {
defaultStyle: {
            default: {"width":"240px","height":"20px","position":"unset","left":"300px","top":"71px","textAlign":"center","animationName":""},
            
            },
 default: { 
 
fragmentList:[{"text":"-1.90","styleName":"style2"},{"text":" %","styleName":"style1"}],
styles:[{"name":"style1","style":{"fontFamily":"微软雅黑","fontSize":"14px","fontWeight":400,"color":"var(--skin-font-color-80)"}},{"name":"style2","style":{"fontFamily":"DIN-bold","fontSize":"20PX","fontWeight":400,"color":"var(--jsc-number-orange)"}}],
cStyle:{"wrapper":{"default":{"width":"240px","height":"20px","position":"unset","left":"300px","top":"71px","textAlign":"center","animationName":""}}}, 
 },
},
});
 function handleWindowResize() {
                            setPageScale('t-l-c-economicScale', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-economicScale', global.appScaleMode, 'normal');
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

 const tTextCommonx0x2ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x2.default, componentState.tTextCommonx0x2?.[state.screenSize]));

 const tTextCommonx0x3ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x3.default, componentState.tTextCommonx0x3?.[state.screenSize]));

 const tTextCommonx0x4ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x4.default, componentState.tTextCommonx0x4?.[state.screenSize]));

 const tHighLightTextx0x5ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x5.default, componentState.tHighLightTextx0x5?.[state.screenSize]));

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

 const tTextCommonx0x7ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x7.default, componentState.tTextCommonx0x7?.[state.screenSize]));

 const tHighLightTextx0x8ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x8.default, componentState.tHighLightTextx0x8?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tTextCommonx0x2ComputedData,
tTextCommonx0x3ComputedData,
tTextCommonx0x4ComputedData,
tHighLightTextx0x5ComputedData,
tRectx0x6ComputedData,
tTextCommonx0x7ComputedData,
tHighLightTextx0x8ComputedData,
};
},
};