window.pathAnimationComponent = {
template: 
`<div id="t-l-c-pathAnimation" class="t-l-c-pathAnimation" >` +
`<t-trace-path id="t-trace-path-1435.598f87ed4" class="pathAnimation-t-trace-path-0-0"  :c-style="componentState.tTracePathx0x0.cStyle" path="M0,60L100.5,0L170.5,50.5L234,8.5 " motion-trail-type="yunsu" :basic-speed="4" :line-length="60" :line-width="1" :gradient-list="componentState.tTracePathx0x0.gradientList" :show-background-path="componentState.tTracePathx0x0.showBackgroundPath" :background-path-line-width="1" :background-path-gradient-list="componentState.tTracePathx0x0.backgroundPathGradientList">` +
`</t-trace-path>` +
`<t-trace-path id="t-trace-path-8135.bb9d1e3d7" class="pathAnimation-t-trace-path-0-1"  :c-style="componentState.tTracePathx0x1.cStyle" path="M0,134L70.5,89L10,47.5L85,0 " motion-trail-type="yunsu" :basic-speed="4" :line-length="60" :line-width="1" :gradient-list="componentState.tTracePathx0x1.gradientList" :show-background-path="componentState.tTracePathx0x1.showBackgroundPath" :background-path-line-width="1" :background-path-gradient-list="componentState.tTracePathx0x1.backgroundPathGradientList">` +
`</t-trace-path>` +
`<t-trace-path id="t-trace-path-2872.9b7ae4679" class="pathAnimation-t-trace-path-0-2"  :c-style="componentState.tTracePathx0x2.cStyle" path="M78.5,134L138.5,81.5L0,0 " motion-trail-type="yunsu" :basic-speed="4" :line-length="60" :line-width="1" :gradient-list="componentState.tTracePathx0x2.gradientList" :show-background-path="componentState.tTracePathx0x2.showBackgroundPath" :background-path-line-width="1" :background-path-gradient-list="componentState.tTracePathx0x2.backgroundPathGradientList">` +
`</t-trace-path>` +
`<t-trace-path id="t-trace-path-4ad2.19c72adb1" class="pathAnimation-t-trace-path-0-3"  :c-style="componentState.tTracePathx0x3.cStyle" path="M217.5,75L182.5,105.5L0,0 " motion-trail-type="yunsu" :basic-speed="4" :line-length="60" :line-width="1" :gradient-list="componentState.tTracePathx0x3.gradientList" :show-background-path="componentState.tTracePathx0x3.showBackgroundPath" :background-path-line-width="1" :background-path-gradient-list="componentState.tTracePathx0x3.backgroundPathGradientList">` +
`</t-trace-path>` +
`<t-trace-path id="t-trace-path-c5b2.114e25456" class="pathAnimation-t-trace-path-0-4"  :c-style="componentState.tTracePathx0x4.cStyle" path="M0,42.5L63.5,0L147,48L201,12 " motion-trail-type="yunsu" :basic-speed="4" :line-length="60" :line-width="1" :gradient-list="componentState.tTracePathx0x4.gradientList" :show-background-path="componentState.tTracePathx0x4.showBackgroundPath" :background-path-line-width="1" :background-path-gradient-list="componentState.tTracePathx0x4.backgroundPathGradientList" :is-reverse="componentState.tTracePathx0x4.isReverse">` +
`</t-trace-path>` +
`<t-trace-path id="t-trace-path-8b0b.c008d71e" class="pathAnimation-t-trace-path-0-5"  :c-style="componentState.tTracePathx0x5.cStyle" path="M0,80L73,38.5L49,22.5L81,0 " motion-trail-type="yunsu" :basic-speed="4" :line-length="60" :line-width="1" :gradient-list="componentState.tTracePathx0x5.gradientList" :show-background-path="componentState.tTracePathx0x5.showBackgroundPath" :background-path-line-width="1" :background-path-gradient-list="componentState.tTracePathx0x5.backgroundPathGradientList" :is-reverse="componentState.tTracePathx0x5.isReverse">` +
`</t-trace-path>` +
`<t-trace-path id="t-trace-path-93ed.2dbaa9b7" class="pathAnimation-t-trace-path-0-6"  :c-style="componentState.tTracePathx0x6.cStyle" path="M0,31.5L27,50L106,0L172,44 " motion-trail-type="yunsu" :basic-speed="4" :line-length="60" :line-width="1" :gradient-list="componentState.tTracePathx0x6.gradientList" :show-background-path="componentState.tTracePathx0x6.showBackgroundPath" :background-path-line-width="1" :background-path-gradient-list="componentState.tTracePathx0x6.backgroundPathGradientList" :is-reverse="componentState.tTracePathx0x6.isReverse">` +
`</t-trace-path>` +
`<t-trace-path id="t-trace-path-ce6c.29ad15909" class="pathAnimation-t-trace-path-0-7"  :c-style="componentState.tTracePathx0x7.cStyle" path="M0,0L65,48 " motion-trail-type="yunsu" :basic-speed="1" :line-length="60" :line-width="1" :gradient-list="componentState.tTracePathx0x7.gradientList" :show-background-path="componentState.tTracePathx0x7.showBackgroundPath" :background-path-line-width="1" :background-path-gradient-list="componentState.tTracePathx0x7.backgroundPathGradientList" :is-reverse="componentState.tTracePathx0x7.isReverse">` +
`</t-trace-path>` +
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
tTracePathx0x0: {
defaultStyle: {"width":"244px","height":"97px","position":"unset","left":"0px","top":"105px","animationName":""},
cStyle:{"wrapper":{"default":{"width":"244px","height":"97px","position":"unset","left":"0px","top":"105px","animationName":""}}},
gradientList:[{"point":1,"color":"rgba(255, 236, 194, 1)"},{"point":0.7,"color":"rgba(255, 191, 0, 0.56)"},{"point":0,"color":"rgba(255, 191, 0, 0)"}],
showBackgroundPath:true,
backgroundPathGradientList:[{"point":1,"color":"rgba(216, 244, 255, 0.2)"}],
},
tTracePathx0x1: {
defaultStyle: {"width":"146px","height":"168px","position":"unset","left":"143px","top":"134px","animationName":""},
cStyle:{"wrapper":{"default":{"width":"146px","height":"168px","position":"unset","left":"143px","top":"134px","animationName":""}}},
gradientList:[{"point":1,"color":"rgba(255, 236, 194, 1)"},{"point":0.7,"color":"rgba(255, 191, 0, 0.56)"},{"point":0,"color":"rgba(255, 191, 0, 0)"}],
showBackgroundPath:true,
backgroundPathGradientList:[{"point":1,"color":"rgba(216, 244, 255, 0.2)"}],
},
tTracePathx0x2: {
defaultStyle: {"width":"152px","height":"164px","position":"unset","left":"306px","top":"128px","animationName":""},
cStyle:{"wrapper":{"default":{"width":"152px","height":"164px","position":"unset","left":"306px","top":"128px","animationName":""}}},
gradientList:[{"point":1,"color":"rgba(255, 236, 194, 1)"},{"point":0.7,"color":"rgba(255, 191, 0, 0.56)"},{"point":0,"color":"rgba(255, 191, 0, 0)"}],
showBackgroundPath:true,
backgroundPathGradientList:[{"point":1,"color":"rgba(216, 244, 255, 0.2)"}],
},
tTracePathx0x3: {
defaultStyle: {"width":"273px","height":"122px","position":"unset","left":"310px","top":"111px","animationName":""},
cStyle:{"wrapper":{"default":{"width":"273px","height":"122px","position":"unset","left":"310px","top":"111px","animationName":""}}},
gradientList:[{"point":1,"color":"rgba(255, 236, 194, 1)"},{"point":0.7,"color":"rgba(255, 191, 0, 0.56)"},{"point":0,"color":"rgba(255, 191, 0, 0)"}],
showBackgroundPath:true,
backgroundPathGradientList:[{"point":1,"color":"rgba(216, 244, 255, 0.2)"}],
},
tTracePathx0x4: {
defaultStyle: {"width":"273px","height":"122px","position":"unset","left":"310px","top":"47px","animationName":""},
cStyle:{"wrapper":{"default":{"width":"273px","height":"122px","position":"unset","left":"310px","top":"47px","animationName":""}}},
gradientList:[{"point":1,"color":"rgba(255, 236, 194, 1)"},{"point":0.7,"color":"rgba(255, 191, 0, 0.56)"},{"point":0,"color":"rgba(255, 191, 0, 0)"}],
showBackgroundPath:true,
backgroundPathGradientList:[{"point":1,"color":"rgba(216, 244, 255, 0.2)"}],
isReverse:true,
},
tTracePathx0x5: {
defaultStyle: {"width":"273px","height":"122px","position":"unset","left":"286px","top":"0px","animationName":""},
cStyle:{"wrapper":{"default":{"width":"273px","height":"122px","position":"unset","left":"286px","top":"0px","animationName":""}}},
gradientList:[{"point":1,"color":"rgba(255, 236, 194, 1)"},{"point":0.7,"color":"rgba(255, 191, 0, 0.56)"},{"point":0,"color":"rgba(255, 191, 0, 0)"}],
showBackgroundPath:true,
backgroundPathGradientList:[{"point":1,"color":"rgba(216, 244, 255, 0.2)"}],
isReverse:true,
},
tTracePathx0x6: {
defaultStyle: {"width":"231px","height":"54px","position":"unset","left":"50px","top":"41px","animationName":""},
cStyle:{"wrapper":{"default":{"width":"231px","height":"54px","position":"unset","left":"50px","top":"41px","animationName":""}}},
gradientList:[{"point":1,"color":"rgba(255, 236, 194, 1)"},{"point":0.7,"color":"rgba(255, 191, 0, 0.56)"},{"point":0,"color":"rgba(255, 191, 0, 0)"}],
showBackgroundPath:true,
backgroundPathGradientList:[{"point":1,"color":"rgba(216, 244, 255, 0.2)"}],
isReverse:false,
},
tTracePathx0x7: {
defaultStyle: {"width":"108px","height":"60px","position":"unset","left":"184px","top":"4px","animationName":""},
cStyle:{"wrapper":{"default":{"width":"108px","height":"60px","position":"unset","left":"184px","top":"4px","animationName":""}}},
gradientList:[{"point":1,"color":"rgba(255, 236, 194, 1)"},{"point":0.7,"color":"rgba(255, 191, 0, 0.56)"},{"point":0,"color":"rgba(255, 191, 0, 0)"}],
showBackgroundPath:true,
backgroundPathGradientList:[{"point":1,"color":"rgba(216, 244, 255, 0.2)"}],
isReverse:false,
},
});
onMounted(() => {
setPageScale('t-l-c-pathAnimation', global.appScaleMode, 'normal');
window.onresize = () => {
setPageScale('t-l-c-pathAnimation', global.appScaleMode, 'normal');
};
});
// 页面离开时的操作
onUnmounted(() => {
});
return {
global,
state,
componentState,
};
},
};