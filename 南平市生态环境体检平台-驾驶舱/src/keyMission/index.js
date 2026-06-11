window.keyMissionComponent = {
template: 
`<div id="t-l-c-keyMission" class="t-l-c-keyMission" >` +
`<t-rect id="t-rect-b0a3.3a62e268c" class="keyMission-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-fcb2.2f7ab802" class="keyMission-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-ee58.949c3e8bc" class="keyMission-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-846e.f740d24f4" class="keyMission-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-da22.700637a9b" class="keyMission-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-common id="t-text-common-47c0.208acbcac" class="keyMission-t-text-common-0-5"  :label="tTextCommonx0x5ComputedData.label" :editable="tTextCommonx0x5ComputedData.editable" :c-style="tTextCommonx0x5ComputedData.cStyle">` +
`</t-text-common>` +
`<t-rect id="t-rect-19da.09eb46458" class="keyMission-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-be93.2b1360c8a" class="keyMission-t-rect-0-7"  :tip="tRectx0x7ComputedData.tip" :label="tRectx0x7ComputedData.label" :active="tRectx0x7ComputedData.active" :c-style="tRectx0x7ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-487b.5404f11d4" class="keyMission-t-rect-0-8"  :tip="tRectx0x8ComputedData.tip" :label="tRectx0x8ComputedData.label" :active="tRectx0x8ComputedData.active" :c-style="tRectx0x8ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-common id="t-text-common-a151.d6fc9924d" class="keyMission-t-text-common-0-9"  :label="tTextCommonx0x9ComputedData.label" :editable="tTextCommonx0x9ComputedData.editable" :c-style="tTextCommonx0x9ComputedData.cStyle">` +
`</t-text-common>` +
`<t-text-common id="t-text-common-16cd.5c238b805" class="keyMission-t-text-common-0-10"  :label="tTextCommonx0x10ComputedData.label" :editable="tTextCommonx0x10ComputedData.editable" :c-style="tTextCommonx0x10ComputedData.cStyle">` +
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
            default: {"width":"590px","height":"143px","left":"0px","top":"52px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--jsc-left-bgc)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 100%","-webkit-mask-position":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"590px","height":"143px","left":"0px","top":"52px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--jsc-left-bgc)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 100%","-webkit-mask-position":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"590px","height":"52px","position":"unset","left":"0px","top":"0px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--jsc-bgc)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"590px","height":"52px","position":"unset","left":"0px","top":"0px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--jsc-bgc)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"590px","height":"52px","left":"0px","top":"0px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--jsc-bgc-2)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"100% 0%","-webkit-mask-position":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"590px","height":"52px","left":"0px","top":"0px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--jsc-bgc-2)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"100% 0%","-webkit-mask-position":""}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"220px","height":"34px","left":"30px","top":"17px","backgroundImage":"var(--jsc-bgc-3)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"220px","height":"34px","left":"30px","top":"17px","backgroundImage":"var(--jsc-bgc-3)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"590px","height":"52px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--jsc-bgc-4)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"11px 11px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"-1px","top":"-1px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"590px","height":"52px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--jsc-bgc-4)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"11px 11px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"-1px","top":"-1px"}}}, 
 },
},
tTextCommonx0x5: {
defaultStyle: {
            default: {"width":"570px","height":"52px","color":"#ffffff","top":"0px","left":"20px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","lineHeight":"52px","fontSize":"30px","fontFamily":"优设标题黑"},
            
            },
 default: { 
 
label:"重点任务",
editable:false,
cStyle:{"wrapper":{"default":{"width":"570px","height":"52px","color":"#ffffff","top":"0px","left":"20px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","lineHeight":"52px","fontSize":"30px","fontFamily":"优设标题黑"}}}, 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"127px","height":"20px","left":"442px","top":"10px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--jsc-bgc-5)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"127px","height":"20px","left":"442px","top":"10px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--jsc-bgc-5)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}}}, 
 },
},
tRectx0x7: {
defaultStyle: {
            default: {"width":"267px","height":"98px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","position":"unset","left":"19px","top":"73px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-09-30/adaa49968f0c447c91391e27a39b7b0a.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"267px","height":"98px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","position":"unset","left":"19px","top":"73px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-09-30/adaa49968f0c447c91391e27a39b7b0a.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","cursor":"pointer"},"hover":{"backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-09-30/fd38d4967100499fb54399e10ccf8dcb.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""}}}, 
 },
},
tRectx0x8: {
defaultStyle: {
            default: {"width":"267px","height":"98px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","position":"unset","left":"302px","top":"73px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-09-30/60461839602843aaabb99a1ee6727d86.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"267px","height":"98px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","position":"unset","left":"302px","top":"73px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-09-30/60461839602843aaabb99a1ee6727d86.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","cursor":"pointer","animationName":""},"hover":{"backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-09-30/12c5914a26c8438fa81cdd5808adbe76.png)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":""},"active":{"backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""}}}, 
 },
},
tTextCommonx0x9: {
defaultStyle: {
            default: {"width":"267px","height":"19px","color":"var(--jsc-number-blue)","textAlign":"center","fontFamily":"优设标题黑","fontSize":"28px","position":"unset","left":"19px","top":"108px","pointerEvents":"none"},
            
            },
 default: { 
 
label:"美丽福建",
editable:false,
cStyle:{"wrapper":{"default":{"width":"267px","height":"19px","color":"var(--jsc-number-blue)","textAlign":"center","fontFamily":"优设标题黑","fontSize":"28px","position":"unset","left":"19px","top":"108px","pointerEvents":"none"}}}, 
 },
},
tTextCommonx0x10: {
defaultStyle: {
            default: {"width":"267px","height":"19px","color":"var(--jsc-number-green)","textAlign":"center","fontFamily":"优设标题黑","fontSize":"28px","position":"unset","left":"302px","top":"107px","animationName":"","pointerEvents":"none"},
            
            },
 default: { 
 
label:"污染防治攻坚战",
editable:false,
cStyle:{"wrapper":{"default":{"width":"267px","height":"19px","color":"var(--jsc-number-green)","textAlign":"center","fontFamily":"优设标题黑","fontSize":"28px","position":"unset","left":"302px","top":"107px","animationName":"","pointerEvents":"none"}}}, 
 },
},
});
 function handleWindowResize() {
                            setPageScale('t-l-c-keyMission', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-keyMission', global.appScaleMode, 'normal');
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

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tRectx0x4ComputedData = computed(() => _.merge({}, componentState.tRectx0x4.default, componentState.tRectx0x4?.[state.screenSize]));

 const tTextCommonx0x5ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x5.default, componentState.tTextCommonx0x5?.[state.screenSize]));

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

 const tRectx0x7ComputedData = computed(() => _.merge({}, componentState.tRectx0x7.default, componentState.tRectx0x7?.[state.screenSize]));

 const tRectx0x8ComputedData = computed(() => _.merge({}, componentState.tRectx0x8.default, componentState.tRectx0x8?.[state.screenSize]));

 const tTextCommonx0x9ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x9.default, componentState.tTextCommonx0x9?.[state.screenSize]));

 const tTextCommonx0x10ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x10.default, componentState.tTextCommonx0x10?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tRectx0x3ComputedData,
tRectx0x4ComputedData,
tTextCommonx0x5ComputedData,
tRectx0x6ComputedData,
tRectx0x7ComputedData,
tRectx0x8ComputedData,
tTextCommonx0x9ComputedData,
tTextCommonx0x10ComputedData,
};
},
};