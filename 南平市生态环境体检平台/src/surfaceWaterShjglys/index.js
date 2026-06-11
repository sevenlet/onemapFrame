window.surfaceWaterShjglysComponent = {
template: 
`<div id="t-l-c-surfaceWaterShjglys" class="t-l-c-surfaceWaterShjglys" >` +
`<t-component id="t-component-ded9.0f5a924fa" class="surfaceWaterShjglys-t-component-0-0"  name="titleFirstBgComponent" :c-style="componentState.tComponentx0x0.cStyle" src="/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/titleFirstBg" component-name="titleFirstBgComponent">` +
`</t-component>` +
`<t-text id="t-text-4f99.3a44d10f5" class="surfaceWaterShjglys-t-text-0-1"  label="水环境管理要素" :editable="componentState.tTextx0x1.editable" :c-style="componentState.tTextx0x1.cStyle">` +
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
text: "佛山水道流域涉及禅城区祖庙街道、张槎街道、石湾街道，南海区桂城街道、狮山镇、大沥镇，主河道全长25.5公里，流域佛山水道流域涉及禅城区祖庙街道、张槎街道、石湾街道，南海区桂城街道、狮山镇、大沥镇，主河道全长25.5公里，流域",
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
tComponentx0x0: {
defaultStyle: {"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""},
cStyle:{"wrapper":{"default":{"width":"410px","height":"31px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px","animationName":""}}},
},
tTextx0x1: {
defaultStyle: {"width":"177px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"40px","top":"5px","fontFamily":"方正综艺","fontSize":"20px","animationName":"","letterSpacing":"2px"},
editable:false,
cStyle:{"wrapper":{"default":{"width":"177px","height":"19px","color":"rgba(255, 255, 255, 0.9)","position":"unset","left":"40px","top":"5px","fontFamily":"方正综艺","fontSize":"20px","animationName":"","letterSpacing":"2px"}}},
},
});
onMounted(() => {
setPageScale('t-l-c-surfaceWaterShjglys', global.appScaleMode, 'normal');
window.onresize = () => {
setPageScale('t-l-c-surfaceWaterShjglys', global.appScaleMode, 'normal');
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