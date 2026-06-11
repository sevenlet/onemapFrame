window.dialogTitleFirstBgAnimationComponent = {
template: 
`<div id="t-l-c-dialogTitleFirstBgAnimation" class="t-l-c-dialogTitleFirstBgAnimation" >` +
`<t-rect id="t-rect-589f.05c55c72c" class="dialogTitleFirstBgAnimation-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-1c42.d605d9511" class="dialogTitleFirstBgAnimation-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-36cc.d0e42242a" class="dialogTitleFirstBgAnimation-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-7bf7.eaa2f3f21" class="dialogTitleFirstBgAnimation-t-rect-0-3"  :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label" :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-13fe.88bd8b28f" class="dialogTitleFirstBgAnimation-t-rect-0-4"  :tip="tRectx0x4ComputedData.tip" :label="tRectx0x4ComputedData.label" :active="tRectx0x4ComputedData.active" :c-style="tRectx0x4ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-b104.adb21bf76" class="dialogTitleFirstBgAnimation-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-615a.198740dbb" class="dialogTitleFirstBgAnimation-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-3f20.09defdabc" class="dialogTitleFirstBgAnimation-t-rect-0-7"  :tip="tRectx0x7ComputedData.tip" :label="tRectx0x7ComputedData.label" :active="tRectx0x7ComputedData.active" :c-style="tRectx0x7ComputedData.cStyle">` +
`</t-rect>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-589f.05c55c72c":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-1c42.d605d9511":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-36cc.d0e42242a":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-7bf7.eaa2f3f21":{"attributeName":"tRectx0x3","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-13fe.88bd8b28f":{"attributeName":"tRectx0x4","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-b104.adb21bf76":{"attributeName":"tRectx0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-615a.198740dbb":{"attributeName":"tRectx0x6","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-3f20.09defdabc":{"attributeName":"tRectx0x7","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
            default: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-4px","left":"2.5px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custom4f535b3e2b5f4","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-4px","left":"2.5px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custom4f535b3e2b5f4","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-4px","left":"24.5px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custom4c3c1b39109cc","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-4px","left":"24.5px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custom4c3c1b39109cc","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-4px","left":"47.5px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custom69c9662b286de","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-4px","left":"47.5px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custom69c9662b286de","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"}}}, 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-4px","left":"69.5px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"customac792bbf9af19","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"1.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-4px","left":"69.5px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"customac792bbf9af19","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"1.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"}}}, 
 },
},
tRectx0x4: {
defaultStyle: {
            default: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-4px","left":"92.5px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"customcdd3f7e7beaa6","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-4px","left":"92.5px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"customcdd3f7e7beaa6","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-4px","left":"114.5px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"customfa732ecba515e","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"2.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-4px","left":"114.5px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"customfa732ecba515e","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"2.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"}}}, 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-4px","left":"137.5px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custombc1e59c456704","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"3s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-4px","left":"137.5px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custombc1e59c456704","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"3s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"}}}, 
 },
},
tRectx0x7: {
defaultStyle: {
            default: {"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-4px","left":"159.5px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custome263d94835a89","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"3.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"29px","height":"36px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78_6/assets/images/2024-12-04/4860f7d9033a49729f8806edaa5fa503.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"contain","backgroundPosition":"","-webkit-mask-position":"50% 50%","top":"-4px","left":"159.5px","transform":"perspective(0px)\n      translate3d(0px,undefinedpx,undefinedpx)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(0%) scaleY(0%)\n      skewX(0deg) skewY(0deg)\n      ","position":"unset","animationName":"custome263d94835a89","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"3.5s","animationIterationCount":"infinite","animationDirection":"normal","backgroundColor":"var(--business-theme)"}}}, 
 },
},
});let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-dialogTitleFirstBgAnimation', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-dialogTitleFirstBgAnimation', global.appScaleMode, 'normal');
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

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

 const tRectx0x7ComputedData = computed(() => _.merge({}, componentState.tRectx0x7.default, componentState.tRectx0x7?.[state.screenSize]));

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
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tRectx0x3ComputedData,
tRectx0x4ComputedData,
tRectx0x5ComputedData,
tRectx0x6ComputedData,
tRectx0x7ComputedData,
};
},
};