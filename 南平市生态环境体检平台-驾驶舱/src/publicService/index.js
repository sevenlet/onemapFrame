window.publicServiceComponent = {
template: 
`<div id="t-l-c-publicService" class="t-l-c-publicService" >` +
`<t-rect id="t-rect-6619.13496979c" class="publicService-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-70a4.bc2f41713" class="publicService-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-3804.9cb59592e" class="publicService-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-high-light-text id="t-high-light-text-b8d4.6bcaf3608" class="publicService-t-high-light-text-0-3"  :fragment-list="tHighLightTextx0x3ComputedData.fragmentList" :styles="tHighLightTextx0x3ComputedData.styles" :c-style="tHighLightTextx0x3ComputedData.cStyle">` +
`</t-high-light-text>` +
`<t-high-light-text id="t-high-light-text-407d.6540cd03" class="publicService-t-high-light-text-0-4"  :fragment-list="tHighLightTextx0x4ComputedData.fragmentList" :styles="tHighLightTextx0x4ComputedData.styles" :c-style="tHighLightTextx0x4ComputedData.cStyle">` +
`</t-high-light-text>` +
`<t-high-light-text id="t-high-light-text-c1a4.1b4d5bbe3" class="publicService-t-high-light-text-0-5"  :fragment-list="tHighLightTextx0x5ComputedData.fragmentList" :styles="tHighLightTextx0x5ComputedData.styles" :c-style="tHighLightTextx0x5ComputedData.cStyle">` +
`</t-high-light-text>` +
`<t-text-common id="t-text-common-5bd0.2a3c5b6d" class="publicService-t-text-common-0-6"  :label="tTextCommonx0x6ComputedData.label" :editable="tTextCommonx0x6ComputedData.editable" :c-style="tTextCommonx0x6ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-7139.b2aebbaf2" class="publicService-t-text-common-0-7"  :label="tTextCommonx0x7ComputedData.label" :editable="tTextCommonx0x7ComputedData.editable" :c-style="tTextCommonx0x7ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-6de8.afb9d0a0d" class="publicService-t-text-common-0-8"  :label="tTextCommonx0x8ComputedData.label" :editable="tTextCommonx0x8ComputedData.editable" :c-style="tTextCommonx0x8ComputedData.cStyle">` +
`</t-text-common>` +
`<t-rect id="t-rect-7339.9da1667a2" class="publicService-t-rect-0-9"  :tip="tRectx0x9ComputedData.tip" :label="tRectx0x9ComputedData.label" :active="tRectx0x9ComputedData.active" :c-style="tRectx0x9ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-common id="t-text-common-aa2d.521a338c6" class="publicService-t-text-common-0-10"  :label="tTextCommonx0x10ComputedData.label" :editable="tTextCommonx0x10ComputedData.editable" :c-style="tTextCommonx0x10ComputedData.cStyle">` +
`</t-text-common>` +
`<t-rect id="t-rect-3aad.176540ebc" class="publicService-t-rect-0-11"  :tip="tRectx0x11ComputedData.tip" :label="tRectx0x11ComputedData.label" :active="tRectx0x11ComputedData.active" :c-style="tRectx0x11ComputedData.cStyle">` +
`</t-rect>` +
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
            default: {"width":"156px","height":"62px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--jsc-zb-bgc-2)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"380px","top":"53px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"156px","height":"62px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--jsc-zb-bgc-2)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"380px","top":"53px","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"156px","height":"62px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--jsc-zb-bgc-2)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"212px","top":"53px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"156px","height":"62px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--jsc-zb-bgc-2)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"212px","top":"53px","animationName":""}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"181px","height":"61px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--jsc-zb-bgc-3)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"18px","top":"53px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"181px","height":"61px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--jsc-zb-bgc-3)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"18px","top":"53px"}}}, 
 },
},
tHighLightTextx0x3: {
defaultStyle: {
            default: {"width":"182px","height":"20px","position":"unset","left":"18px","top":"85px","textAlign":"center"},
            
            },
 default: { 
 
fragmentList:[{"text":"个人普惠中和量","styleName":"style3"},{"text":" 46.165","styleName":"style2"},{"text":" 吨","styleName":"style1"}],
styles:[{"name":"style1","style":{"fontFamily":"微软雅黑","fontSize":"14px","fontWeight":400,"color":"var(--skin-font-color-80)"}},{"name":"style2","style":{"fontFamily":"DIN-bold","fontSize":"20PX","fontWeight":400,"color":"var(--jsc-number-color)"}},{"name":"style3","style":{"fontFamily":"微软雅黑","fontSize":"14PX","fontWeight":400,"color":"var(--skin-font-color)"}}],
cStyle:{"wrapper":{"default":{"width":"182px","height":"20px","position":"unset","left":"18px","top":"85px","textAlign":"center"}}}, 
 },
},
tHighLightTextx0x4: {
defaultStyle: {
            default: {"width":"156px","height":"20px","position":"unset","left":"380px","top":"85px","textAlign":"center","animationName":""},
            
            },
 default: { 
 
fragmentList:[{"text":"服务","styleName":"style3"},{"text":" 37080","styleName":"style2"},{"text":" 家","styleName":"style1"}],
styles:[{"name":"style1","style":{"fontFamily":"微软雅黑","fontSize":"14px","fontWeight":400,"color":"var(--skin-font-color-80)"}},{"name":"style2","style":{"fontFamily":"DIN-bold","fontSize":"20PX","fontWeight":400,"color":"var(--jsc-number-color)"}},{"name":"style3","style":{"fontFamily":"微软雅黑","fontSize":"14PX","fontWeight":400,"color":"var(--skin-font-color)"}}],
cStyle:{"wrapper":{"default":{"width":"156px","height":"20px","position":"unset","left":"380px","top":"85px","textAlign":"center","animationName":""}}}, 
 },
},
tHighLightTextx0x5: {
defaultStyle: {
            default: {"width":"156px","height":"20px","position":"unset","left":"212px","top":"85px","textAlign":"center","animationName":""},
            
            },
 default: { 
 
fragmentList:[{"text":"投诉办结率","styleName":"style3"},{"text":" 100","styleName":"style2"},{"text":" %","styleName":"style1"}],
styles:[{"name":"style1","style":{"fontFamily":"微软雅黑","fontSize":"14px","fontWeight":400,"color":"var(--skin-font-color-80)"}},{"name":"style2","style":{"fontFamily":"DIN-bold","fontSize":"20PX","fontWeight":400,"color":"var(--jsc-number-color)"}},{"name":"style3","style":{"fontFamily":"微软雅黑","fontSize":"14PX","fontWeight":400,"color":"var(--skin-font-color)"}}],
cStyle:{"wrapper":{"default":{"width":"156px","height":"20px","position":"unset","left":"212px","top":"85px","textAlign":"center","animationName":""}}}, 
 },
},
tTextCommonx0x6: {
defaultStyle: {
            default: {"width":"182px","height":"19px","color":"var(--skin-font-color)","textAlign":"center","fontSize":"16px","fontWeight":"700","position":"unset","left":"18px","top":"63px"},
            
            },
 default: { 
 
label:"八闽碳惠",
editable:false,
cStyle:{"wrapper":{"default":{"width":"182px","height":"19px","color":"var(--skin-font-color)","textAlign":"center","fontSize":"16px","fontWeight":"700","position":"unset","left":"18px","top":"63px"}}}, 
 },
},
tTextCommonx0x7: {
defaultStyle: {
            default: {"width":"156px","height":"19px","color":"var(--skin-font-color)","textAlign":"center","fontSize":"16px","fontWeight":"700","position":"unset","left":"380px","top":"63px","animationName":""},
            
            },
 default: { 
 
label:"亲清服务平台",
editable:false,
cStyle:{"wrapper":{"default":{"width":"156px","height":"19px","color":"var(--skin-font-color)","textAlign":"center","fontSize":"16px","fontWeight":"700","position":"unset","left":"380px","top":"63px","animationName":""}}}, 
 },
},
tTextCommonx0x8: {
defaultStyle: {
            default: {"width":"156px","height":"19px","color":"var(--skin-font-color)","textAlign":"center","fontSize":"16px","fontWeight":"700","position":"unset","left":"212px","top":"63px","animationName":""},
            
            },
 default: { 
 
label:"信访投诉",
editable:false,
cStyle:{"wrapper":{"default":{"width":"156px","height":"19px","color":"var(--skin-font-color)","textAlign":"center","fontSize":"16px","fontWeight":"700","position":"unset","left":"212px","top":"63px","animationName":""}}}, 
 },
},
tRectx0x9: {
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
tTextCommonx0x10: {
defaultStyle: {
            default: {"width":"200px","height":"19px","color":"var(--skin-font-color)","position":"unset","left":"28px","top":"4px","fontSize":"20px","fontFamily":"方正综艺","letterSpacing":"2px"},
            
            },
 default: { 
 
label:"公众服务",
editable:false,
cStyle:{"wrapper":{"default":{"width":"200px","height":"19px","color":"var(--skin-font-color)","position":"unset","left":"28px","top":"4px","fontSize":"20px","fontFamily":"方正综艺","letterSpacing":"2px"}}}, 
 },
},
tRectx0x11: {
defaultStyle: {
            default: {"width":"557px","height":"98px","left":"0px","top":"50px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--jsc-right-card2)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"557px","height":"98px","left":"0px","top":"50px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--jsc-right-card2)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset"}}}, 
 },
},
});
 function handleWindowResize() {
                            setPageScale('t-l-c-publicService', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-publicService', global.appScaleMode, 'normal');
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

 const tHighLightTextx0x3ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x3.default, componentState.tHighLightTextx0x3?.[state.screenSize]));

 const tHighLightTextx0x4ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x4.default, componentState.tHighLightTextx0x4?.[state.screenSize]));

 const tHighLightTextx0x5ComputedData = computed(() => _.merge({}, componentState.tHighLightTextx0x5.default, componentState.tHighLightTextx0x5?.[state.screenSize]));

 const tTextCommonx0x6ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x6.default, componentState.tTextCommonx0x6?.[state.screenSize]));

 const tTextCommonx0x7ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x7.default, componentState.tTextCommonx0x7?.[state.screenSize]));

 const tTextCommonx0x8ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x8.default, componentState.tTextCommonx0x8?.[state.screenSize]));

 const tRectx0x9ComputedData = computed(() => _.merge({}, componentState.tRectx0x9.default, componentState.tRectx0x9?.[state.screenSize]));

 const tTextCommonx0x10ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x10.default, componentState.tTextCommonx0x10?.[state.screenSize]));

 const tRectx0x11ComputedData = computed(() => _.merge({}, componentState.tRectx0x11.default, componentState.tRectx0x11?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tHighLightTextx0x3ComputedData,
tHighLightTextx0x4ComputedData,
tHighLightTextx0x5ComputedData,
tTextCommonx0x6ComputedData,
tTextCommonx0x7ComputedData,
tTextCommonx0x8ComputedData,
tRectx0x9ComputedData,
tTextCommonx0x10ComputedData,
tRectx0x11ComputedData,
};
},
};