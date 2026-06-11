window.testLegoPageComponent = {
template: 
`<div id="t-l-c-testLegoPage" class="t-l-c-testLegoPage" >` +
`<t-gradient-shadow-text id="t-gradient-shadow-text-cf88.7de6e1c14" class="testLegoPage-t-gradient-shadow-text-0-0"  :label="tGradientShadowTextx0x0ComputedData.label" :c-style="tGradientShadowTextx0x0ComputedData.cStyle">` +
`</t-gradient-shadow-text>` +
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
tGradientShadowTextx0x0: {
defaultStyle: {
            default: {"width":"210px","height":"63px","position":"unset","left":"85px","top":"242px"},
            
            },
 default: { 
 
label:"测试lego内部页面显示在右屏上",
cStyle:{"wrapper":{"default":{"width":"210px","height":"63px","position":"unset","left":"85px","top":"242px"}},"textStyle":{"default":{"-webkit-text-fill-color":"transparent","-webkit-background-clip":"text","backgroundImage":"linear-gradient(0deg, rgba(255,126,0,1) 0%, rgba(255,255,255,1) 100%)","fontWeight":"bold"}},"textShadowStyle":{"default":{"fontWeight":"bold"}}}, 
 },
},
});
 function handleWindowResize() {
                            setPageScale('t-l-c-testLegoPage', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-testLegoPage', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tGradientShadowTextx0x0ComputedData = computed(() => _.merge({}, componentState.tGradientShadowTextx0x0.default, componentState.tGradientShadowTextx0x0?.[state.screenSize]));

return {
global,
state,
componentState,
tGradientShadowTextx0x0ComputedData,
};
},
};