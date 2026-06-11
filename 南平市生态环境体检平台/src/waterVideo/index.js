window.waterVideoComponent = {
template: 
`<div id="t-l-c-waterVideo" class="t-l-c-waterVideo" >` +
`<t-iframe id="t-iframe-0bc4.40e15bad9" class="waterVideo-t-iframe-0-0"  :src="replaceCssVariables(state.iframeUrl, global?.theme || global?.activeTheme || '默认主题')" :srcdoc="tIframex0x0ComputedData.srcdoc" :scrolling="tIframex0x0ComputedData.scrolling" :c-style="tIframex0x0ComputedData.cStyle">` +
`</t-iframe>` +
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
   iframeUrl: "",
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
tIframex0x0: {
defaultStyle: {
            default: {"width":"788px","height":"468px","left":"0px","top":"0px","backgroundColor":"rgba(109, 119, 163, 0)"},
            
            },
 default: { 
 
src:"",
srcdoc:"",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"788px","height":"468px","left":"0px","top":"0px","backgroundColor":"rgba(109, 119, 163, 0)"}}}, 
 },
},
});
const setIframeUrl = () => {
state.iframeUrl = `https://stfs.sthj.fs.gdgov.cn/polluter-file-micro/#/layout/video-water?standenterid=${global.businessDialog.dialogParmas.STANDENTERID || '0010BD78AB9F4DDA93980796CB42BDA9'}&isAirIframe=1`
// https://stfs.sthj.fs.gdgov.cn/polluter-file-micro
};
 function handleWindowResize() {
                            setPageScale('t-l-c-waterVideo', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setIframeUrl();
onMounted(() => {
setPageScale('t-l-c-waterVideo', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tIframex0x0ComputedData = computed(() => _.merge({}, componentState.tIframex0x0.default, componentState.tIframex0x0?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tIframex0x0ComputedData,
};
},
};