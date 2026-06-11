window.waterSurfaceEntryComponent = {
template: 
`<div id="t-l-c-waterSurfaceEntry" class="t-l-c-waterSurfaceEntry" >` +
`<t-component id="t-component-8cc1.8e726916" class="waterSurfaceEntry-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName">` +
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
   type: "1,2",
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
defaultStyle: {
            default: {"width":"450px","height":"900px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","left":"0px","top":"0px","position":"unset"},
            
            },
 default: { 
 
name:"waterSurfaceContentComponent",
cStyle:{"wrapper":{"default":{"width":"450px","height":"900px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","left":"0px","top":"0px","position":"unset"}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/waterSurfaceContent",
componentName:"waterSurfaceContentComponent", 
 },
},
});
const setProvider = () => {
provide('surfaceWaterState', state);
};
 function handleWindowResize() {
                            setPageScale('t-l-c-waterSurfaceEntry', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setProvider();
onMounted(() => {
setPageScale('t-l-c-waterSurfaceEntry', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

return {
global,
state,
componentState,
tComponentx0x0ComputedData,
};
},
};