window.cockpitCenterComponent = {
template: 
`<div id="t-l-c-cockpitCenter" class="t-l-c-cockpitCenter" >` +
`<t-component id="t-component-c8b4.0eedbe06" class="cockpitCenter-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :loading="tComponentx0x0ComputedData.loading" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName" :page-id="tComponentx0x0ComputedData.pageId" :page-code="tComponentx0x0ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-a2a6.b04ed3fb8" class="cockpitCenter-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :loading="tComponentx0x1ComputedData.loading" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode">` +
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
tComponentx0x0: {
defaultStyle: {
            default: {"width":"590px","height":"354px","margin":"0 auto","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
name:"dataEmpowermentComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"590px","height":"354px","margin":"0 auto","position":"unset","left":"0px","top":"0px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/[object Object]",
componentName:"dataEmpowermentComponent",
pageId:"4604775a59ba43ebbff4f6e8145b8b1c",
pageCode:"dataEmpowerment", 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"590px","height":"520px","margin":"0 auto","position":"unset","left":"0px","top":"368px","animationName":""},
            
            },
 default: { 
 
name:"greenDualCarbonComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"590px","height":"520px","margin":"0 auto","position":"unset","left":"0px","top":"368px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/[object Object]",
componentName:"greenDualCarbonComponent",
pageId:"bd4c161cb5a14f969f6db25475ea018b",
pageCode:"greenDualCarbon", 
 },
},
});
 function handleWindowResize() {
                            setPageScale('t-l-c-cockpitCenter', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-cockpitCenter', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tComponentx0x0ComputedData,
tComponentx0x1ComputedData,
};
},
};