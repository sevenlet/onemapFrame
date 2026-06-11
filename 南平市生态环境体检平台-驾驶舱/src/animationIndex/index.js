window.animationIndexComponent = {
template: 
`<div id="t-l-c-animationIndex" class="t-l-c-animationIndex" >` +
`<t-rect id="t-rect-a5c8.e185bacb1" class="animationIndex-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-7368.4922e700b" class="animationIndex-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-circle id="t-circle-f078.61c52b10c" class="animationIndex-t-circle-0-2"  :tip="tCirclex0x2ComputedData.tip" :label="tCirclex0x2ComputedData.label" :active="tCirclex0x2ComputedData.active" :c-style="tCirclex0x2ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-c21c.48c810877" class="animationIndex-t-circle-0-3"  :tip="tCirclex0x3ComputedData.tip" :label="tCirclex0x3ComputedData.label" :active="tCirclex0x3ComputedData.active" :c-style="tCirclex0x3ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-e55b.fec8fc9a5" class="animationIndex-t-circle-0-4"  :tip="tCirclex0x4ComputedData.tip" :label="tCirclex0x4ComputedData.label" :active="tCirclex0x4ComputedData.active" :c-style="tCirclex0x4ComputedData.cStyle">` +
`</t-circle>` +
`<t-rect id="t-rect-2c56.a10dee6aa" class="animationIndex-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle">` +
`</t-rect>` +
`<t-circle id="t-circle-f534.672d31905" class="animationIndex-t-circle-0-6"  :tip="tCirclex0x6ComputedData.tip" :label="tCirclex0x6ComputedData.label" :active="tCirclex0x6ComputedData.active" :c-style="tCirclex0x6ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-411e.4ad9a6164" class="animationIndex-t-circle-0-7"  :tip="tCirclex0x7ComputedData.tip" :label="tCirclex0x7ComputedData.label" :active="tCirclex0x7ComputedData.active" :c-style="tCirclex0x7ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-2082.8f492bce2" class="animationIndex-t-circle-0-8"  :tip="tCirclex0x8ComputedData.tip" :label="tCirclex0x8ComputedData.label" :active="tCirclex0x8ComputedData.active" :c-style="tCirclex0x8ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-7d28.51711f9da" class="animationIndex-t-circle-0-9"  :tip="tCirclex0x9ComputedData.tip" :label="tCirclex0x9ComputedData.label" :active="tCirclex0x9ComputedData.active" :c-style="tCirclex0x9ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-8950.521f253de" class="animationIndex-t-circle-0-10"  :tip="tCirclex0x10ComputedData.tip" :label="tCirclex0x10ComputedData.label" :active="tCirclex0x10ComputedData.active" :c-style="tCirclex0x10ComputedData.cStyle">` +
`</t-circle>` +
`<t-circle id="t-circle-bf35.cfcc81903" class="animationIndex-t-circle-0-11"  :tip="tCirclex0x11ComputedData.tip" :label="tCirclex0x11ComputedData.label" :active="tCirclex0x11ComputedData.active" :c-style="tCirclex0x11ComputedData.cStyle">` +
`</t-circle>` +
`<t-rect id="t-rect-90c7.a33f564ed" class="animationIndex-t-rect-0-12"  :tip="tRectx0x12ComputedData.tip" :label="tRectx0x12ComputedData.label" :active="tRectx0x12ComputedData.active" :c-style="tRectx0x12ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-1744.1ba420e5c" class="animationIndex-t-rect-0-13"  :tip="tRectx0x13ComputedData.tip" :label="tRectx0x13ComputedData.label" :active="tRectx0x13ComputedData.active" :c-style="tRectx0x13ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-d815.87ac01de1" class="animationIndex-t-text-0-14"  :label="tTextx0x14ComputedData.label" :editable="tTextx0x14ComputedData.editable" :c-style="tTextx0x14ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-7cf5.103c9393a" class="animationIndex-t-text-0-15"  :label="tTextx0x15ComputedData.label" :editable="tTextx0x15ComputedData.editable" :c-style="tTextx0x15ComputedData.cStyle">` +
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
            default: {"width":"399px","height":"403px","backgroundImage":"var(--t-content-dx)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"-16px","top":"69px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"399px","height":"403px","backgroundImage":"var(--t-content-dx)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"-16px","top":"69px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"200px","height":"150px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-01-16/11c063279b8e4ad48262e20cffd00c1b.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"176px","left":"84px","position":"unset","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      ","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"200px","height":"150px","backgroundImage":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-01-16/11c063279b8e4ad48262e20cffd00c1b.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","top":"176px","left":"84px","position":"unset","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      ","animationName":""}}}, 
 },
},
tCirclex0x2: {
defaultStyle: {
            default: {"width":"8px","height":"8px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"#00FFFF","position":"unset","left":"135px","top":"215px","animationName":"custom566c39aaf8a1f","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal","backdropFilter":"blur(0px)","filter":"blur(1px) "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"8px","height":"8px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"#00FFFF","position":"unset","left":"135px","top":"215px","animationName":"custom566c39aaf8a1f","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal","backdropFilter":"blur(0px)","filter":"blur(1px) "}}}, 
 },
},
tCirclex0x3: {
defaultStyle: {
            default: {"width":"5px","height":"5px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"#00FFFF","position":"unset","left":"181px","top":"230px","animationName":"custom4339bbae93018","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal","backdropFilter":"blur(0px)","filter":"blur(1px) "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"5px","height":"5px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"#00FFFF","position":"unset","left":"181px","top":"230px","animationName":"custom4339bbae93018","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal","backdropFilter":"blur(0px)","filter":"blur(1px) "}}}, 
 },
},
tCirclex0x4: {
defaultStyle: {
            default: {"width":"8px","height":"8px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"#00FFFF","position":"unset","left":"156px","top":"235px","animationName":"custom4ffa3fd330537","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0.1s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"8px","height":"8px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"#00FFFF","position":"unset","left":"156px","top":"235px","animationName":"custom4ffa3fd330537","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0.1s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"300px","height":"300px","backgroundImage":"var(--t-content-ds)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"37px","top":"44px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom27ea4ae9ee3cb","animationDuration":"2s","animationTimingFunction":"ease-in-out","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"alternate-reverse"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"300px","height":"300px","backgroundImage":"var(--t-content-ds)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"37px","top":"44px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom27ea4ae9ee3cb","animationDuration":"2s","animationTimingFunction":"ease-in-out","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"alternate-reverse"}}}, 
 },
},
tCirclex0x6: {
defaultStyle: {
            default: {"width":"6px","height":"6px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"#00FFFF","position":"unset","left":"213px","top":"229px","animationName":"customd8f9300337355","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"6px","height":"6px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"#00FFFF","position":"unset","left":"213px","top":"229px","animationName":"customd8f9300337355","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x7: {
defaultStyle: {
            default: {"width":"6px","height":"6px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"#00FFFF","position":"unset","left":"228px","top":"227px","animationName":"customc50960b9dcad","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"6px","height":"6px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"#00FFFF","position":"unset","left":"228px","top":"227px","animationName":"customc50960b9dcad","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"2s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x8: {
defaultStyle: {
            default: {"width":"15px","height":"15px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"#00FFFF","position":"unset","left":"198px","top":"233px","animationName":"custome52572015dde7","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"15px","height":"15px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"#00FFFF","position":"unset","left":"198px","top":"233px","animationName":"custome52572015dde7","animationDuration":"4s","animationTimingFunction":"linear","animationDelay":"0.5s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x9: {
defaultStyle: {
            default: {"width":"5px","height":"5px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"#00FFFF","position":"unset","left":"144px","top":"230px","animationName":"customfbeadec7cf635","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0.3s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"5px","height":"5px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"#00FFFF","position":"unset","left":"144px","top":"230px","animationName":"customfbeadec7cf635","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0.3s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tCirclex0x10: {
defaultStyle: {
            default: {"width":"8px","height":"8px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"#00FFFF","position":"unset","left":"221px","top":"211px","animationName":"customd02579453f99c","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal","filter":"blur(5px) "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"8px","height":"8px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"#00FFFF","position":"unset","left":"221px","top":"211px","animationName":"customd02579453f99c","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"1s","animationIterationCount":"infinite","animationDirection":"normal","filter":"blur(5px) "}}}, 
 },
},
tCirclex0x11: {
defaultStyle: {
            default: {"width":"4px","height":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"#00FFFF","position":"unset","left":"198px","top":"231px","animationName":"custombfd9b7a1926d1","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backdropFilter":"blur(2px)","filter":"blur(3px) "},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"4px","height":"4px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundColor":"#00FFFF","position":"unset","left":"198px","top":"231px","animationName":"custombfd9b7a1926d1","animationDuration":"2s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","backdropFilter":"blur(2px)","filter":"blur(3px) "}}}, 
 },
},
tRectx0x12: {
defaultStyle: {
            default: {"width":"184px","height":"161px","backgroundImage":"var(--t-content-ady)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"197px","top":"243px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom5593a8c139e1b","animationDuration":"10s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"\n\n\n",
active:false,
cStyle:{"wrapper":{"default":{"width":"184px","height":"161px","backgroundImage":"var(--t-content-ady)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"197px","top":"243px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom5593a8c139e1b","animationDuration":"10s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tRectx0x13: {
defaultStyle: {
            default: {"width":"174px","height":"151px","backgroundImage":"var(--t-content-adz)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"-6px","top":"245px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom839e118293071","animationDuration":"10s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"174px","height":"151px","backgroundImage":"var(--t-content-adz)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","position":"unset","left":"-6px","top":"245px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom839e118293071","animationDuration":"10s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tTextx0x14: {
defaultStyle: {
            default: {"width":"88px","height":"41px","color":"#1D7D7D","fontSize":"18px","fontFamily":"方正综艺","fontWeight":"400","lineHeight":"22px","top":"159px","left":"141px","position":"unset","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      ","animationName":"custom00f4a7da0af24,custom62484f755206e","animationDuration":"2s,2s","animationTimingFunction":"ease-in-out,ease-in-out","animationDelay":"0s,0s","animationIterationCount":"infinite,infinite","animationDirection":"alternate-reverse,alternate-reverse"},
            
            },
 default: { 
 
label:"生态环境数据专区",
editable:false,
cStyle:{"wrapper":{"default":{"width":"88px","height":"41px","color":"#1D7D7D","fontSize":"18px","fontFamily":"方正综艺","fontWeight":"400","lineHeight":"22px","top":"159px","left":"141px","position":"unset","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      ","animationName":"custom00f4a7da0af24,custom62484f755206e","animationDuration":"2s,2s","animationTimingFunction":"ease-in-out,ease-in-out","animationDelay":"0s,0s","animationIterationCount":"infinite,infinite","animationDirection":"alternate-reverse,alternate-reverse"}}}, 
 },
},
tTextx0x15: {
defaultStyle: {
            default: {"width":"88px","height":"41px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","fontFamily":"方正综艺","fontWeight":"400","lineHeight":"22px","top":"160px","left":"139px","position":"unset","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      ","animationName":"custom40bf7abc04556,customcdb1d5e3f742a","animationDuration":"2s,2s","animationTimingFunction":"ease-in-out,ease-in-out","animationDelay":"0s,0s","animationIterationCount":"infinite,infinite","animationDirection":"alternate-reverse,alternate-reverse"},
            
            },
 default: { 
 
label:"生态环境数据专区",
editable:false,
cStyle:{"wrapper":{"default":{"width":"88px","height":"41px","color":"rgba(255, 255, 255, 1)","fontSize":"18px","fontFamily":"方正综艺","fontWeight":"400","lineHeight":"22px","top":"160px","left":"139px","position":"unset","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      ","animationName":"custom40bf7abc04556,customcdb1d5e3f742a","animationDuration":"2s,2s","animationTimingFunction":"ease-in-out,ease-in-out","animationDelay":"0s,0s","animationIterationCount":"infinite,infinite","animationDirection":"alternate-reverse,alternate-reverse"}}}, 
 },
},
});
 function handleWindowResize() {
                            setPageScale('t-l-c-animationIndex', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-animationIndex', global.appScaleMode, 'normal');
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

 const tCirclex0x2ComputedData = computed(() => _.merge({}, componentState.tCirclex0x2.default, componentState.tCirclex0x2?.[state.screenSize]));

 const tCirclex0x3ComputedData = computed(() => _.merge({}, componentState.tCirclex0x3.default, componentState.tCirclex0x3?.[state.screenSize]));

 const tCirclex0x4ComputedData = computed(() => _.merge({}, componentState.tCirclex0x4.default, componentState.tCirclex0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tCirclex0x6ComputedData = computed(() => _.merge({}, componentState.tCirclex0x6.default, componentState.tCirclex0x6?.[state.screenSize]));

 const tCirclex0x7ComputedData = computed(() => _.merge({}, componentState.tCirclex0x7.default, componentState.tCirclex0x7?.[state.screenSize]));

 const tCirclex0x8ComputedData = computed(() => _.merge({}, componentState.tCirclex0x8.default, componentState.tCirclex0x8?.[state.screenSize]));

 const tCirclex0x9ComputedData = computed(() => _.merge({}, componentState.tCirclex0x9.default, componentState.tCirclex0x9?.[state.screenSize]));

 const tCirclex0x10ComputedData = computed(() => _.merge({}, componentState.tCirclex0x10.default, componentState.tCirclex0x10?.[state.screenSize]));

 const tCirclex0x11ComputedData = computed(() => _.merge({}, componentState.tCirclex0x11.default, componentState.tCirclex0x11?.[state.screenSize]));

 const tRectx0x12ComputedData = computed(() => _.merge({}, componentState.tRectx0x12.default, componentState.tRectx0x12?.[state.screenSize]));

 const tRectx0x13ComputedData = computed(() => _.merge({}, componentState.tRectx0x13.default, componentState.tRectx0x13?.[state.screenSize]));

 const tTextx0x14ComputedData = computed(() => _.merge({}, componentState.tTextx0x14.default, componentState.tTextx0x14?.[state.screenSize]));

 const tTextx0x15ComputedData = computed(() => _.merge({}, componentState.tTextx0x15.default, componentState.tTextx0x15?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tCirclex0x2ComputedData,
tCirclex0x3ComputedData,
tCirclex0x4ComputedData,
tRectx0x5ComputedData,
tCirclex0x6ComputedData,
tCirclex0x7ComputedData,
tCirclex0x8ComputedData,
tCirclex0x9ComputedData,
tCirclex0x10ComputedData,
tCirclex0x11ComputedData,
tRectx0x12ComputedData,
tRectx0x13ComputedData,
tTextx0x14ComputedData,
tTextx0x15ComputedData,
};
},
};