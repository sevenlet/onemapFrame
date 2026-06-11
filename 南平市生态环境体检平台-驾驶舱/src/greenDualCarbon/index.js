window.greenDualCarbonComponent = {
template: 
`<div id="t-l-c-greenDualCarbon" class="t-l-c-greenDualCarbon" >` +
`<t-rect id="t-rect-b0a3.3a62e268c" class="greenDualCarbon-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-fcb2.2f7ab802" class="greenDualCarbon-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-ee58.949c3e8bc" class="greenDualCarbon-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-846e.f740d24f4" class="greenDualCarbon-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-da22.700637a9b" class="greenDualCarbon-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-common id="t-text-common-47c0.208acbcac" class="greenDualCarbon-t-text-common-0-5"  :label="tTextCommonx0x5ComputedData.label" :editable="tTextCommonx0x5ComputedData.editable" :c-style="tTextCommonx0x5ComputedData.cStyle">` +
`</t-text-common>` +
`<t-rect id="t-rect-19da.09eb46458" class="greenDualCarbon-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle">` +
`</t-rect>` +
`<t-component id="t-component-f9da.9246ce32c" class="greenDualCarbon-t-component-0-7"  :name="tComponentx0x7ComputedData.name" :loading="tComponentx0x7ComputedData.loading" :c-style="tComponentx0x7ComputedData.cStyle" :src="tComponentx0x7ComputedData.src" :component-name="tComponentx0x7ComputedData.componentName" :page-id="tComponentx0x7ComputedData.pageId" :page-code="tComponentx0x7ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-2cfc.763ab9812" class="greenDualCarbon-t-component-0-8"  :name="tComponentx0x8ComputedData.name" :loading="tComponentx0x8ComputedData.loading" :c-style="tComponentx0x8ComputedData.cStyle" :src="tComponentx0x8ComputedData.src" :component-name="tComponentx0x8ComputedData.componentName" :page-id="tComponentx0x8ComputedData.pageId" :page-code="tComponentx0x8ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-ab05.c1ddc5324" class="greenDualCarbon-t-component-0-9"  :name="tComponentx0x9ComputedData.name" :loading="tComponentx0x9ComputedData.loading" :c-style="tComponentx0x9ComputedData.cStyle" :src="tComponentx0x9ComputedData.src" :component-name="tComponentx0x9ComputedData.componentName" :page-id="tComponentx0x9ComputedData.pageId" :page-code="tComponentx0x9ComputedData.pageCode">` +
`</t-component>` +
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
            default: {"width":"590px","height":"468px","left":"0px","top":"51px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--jsc-left-bgc)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 100%","-webkit-mask-position":"","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"590px","height":"468px","left":"0px","top":"51px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundImage":"var(--jsc-left-bgc)","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 100%","-webkit-mask-position":"","position":"unset"}}}, 
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
 
label:"绿色双碳",
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
tComponentx0x7: {
defaultStyle: {
            default: {"width":"558px","height":"106px","margin":"0 auto","position":"unset","left":"16px","top":"68px"},
            
            },
 default: { 
 
name:"cookpitCenterTpfComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"558px","height":"106px","margin":"0 auto","position":"unset","left":"16px","top":"68px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/[object Object]",
componentName:"cookpitCenterTpfComponent",
pageId:"4027ffec3b1946d088a2a9d0c337e06f",
pageCode:"cookpitCenterTpf", 
 },
},
tComponentx0x8: {
defaultStyle: {
            default: {"width":"558px","height":"106px","margin":"0 auto","position":"unset","left":"16px","top":"190px","animationName":""},
            
            },
 default: { 
 
name:"cookpitCenterTpeComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"558px","height":"106px","margin":"0 auto","position":"unset","left":"16px","top":"190px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/[object Object]",
componentName:"cookpitCenterTpeComponent",
pageId:"4672ab0d7fdf4b088576dd2a7070d72b",
pageCode:"cookpitCenterTpe", 
 },
},
tComponentx0x9: {
defaultStyle: {
            default: {"width":"558px","height":"192px","margin":"0 auto","position":"unset","left":"16px","top":"312px","animationName":""},
            
            },
 default: { 
 
name:"cookpitCenterTjyComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"558px","height":"192px","margin":"0 auto","position":"unset","left":"16px","top":"312px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/[object Object]",
componentName:"cookpitCenterTjyComponent",
pageId:"6dac77d9ed6b42d9bc0b63bdef4a5dbc",
pageCode:"cookpitCenterTjy", 
 },
},
});
 function handleWindowResize() {
                            setPageScale('t-l-c-greenDualCarbon', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-greenDualCarbon', global.appScaleMode, 'normal');
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

 const tComponentx0x7ComputedData = computed(() => _.merge({}, componentState.tComponentx0x7.default, componentState.tComponentx0x7?.[state.screenSize]));

 const tComponentx0x8ComputedData = computed(() => _.merge({}, componentState.tComponentx0x8.default, componentState.tComponentx0x8?.[state.screenSize]));

 const tComponentx0x9ComputedData = computed(() => _.merge({}, componentState.tComponentx0x9.default, componentState.tComponentx0x9?.[state.screenSize]));

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
tComponentx0x7ComputedData,
tComponentx0x8ComputedData,
tComponentx0x9ComputedData,
};
},
};