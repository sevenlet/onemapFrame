window.cockpitNewRightComponent = {
template: 
`<div id="t-l-c-cockpitNewRight" class="t-l-c-cockpitNewRight" >` +
`<t-component id="t-component-65bf.e248719a4" class="cockpitNewRight-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :loading="tComponentx0x0ComputedData.loading" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName" :page-id="tComponentx0x0ComputedData.pageId" :page-code="tComponentx0x0ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-9227.ae4dd887b" class="cockpitNewRight-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :loading="tComponentx0x1ComputedData.loading" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName" :page-id="tComponentx0x1ComputedData.pageId" :page-code="tComponentx0x1ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-7e89.bdd8ebddb" class="cockpitNewRight-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :loading="tComponentx0x2ComputedData.loading" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName" :page-id="tComponentx0x2ComputedData.pageId" :page-code="tComponentx0x2ComputedData.pageCode">` +
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
            default: {"width":"590px","height":"442px","margin":"0 auto","left":"0px","top":"0px"},
            
            },
 default: { 
 
name:"socialServiceComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"590px","height":"442px","margin":"0 auto","left":"0px","top":"0px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/[object Object]",
componentName:"socialServiceComponent",
pageId:"35c509d412964b08b48574a302b62ecf",
pageCode:"socialService", 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"590px","height":"243px","margin":"0 auto","left":"0px","top":"456px"},
            
            },
 default: { 
 
name:"smartRegulationComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"590px","height":"243px","margin":"0 auto","left":"0px","top":"456px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/[object Object]",
componentName:"smartRegulationComponent",
pageId:"ffc159777756415780e8706110ec0534",
pageCode:"smartRegulation", 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"590px","height":"195px","margin":"0 auto","left":"0px","position":"unset","top":"717px"},
            
            },
 default: { 
 
name:"keyMissionComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"590px","height":"195px","margin":"0 auto","left":"0px","position":"unset","top":"717px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/[object Object]",
componentName:"keyMissionComponent",
pageId:"e23b7164aeda4c5bbf32ba286f0b3ec7",
pageCode:"keyMission", 
 },
},
});
 function handleWindowResize() {
                            setPageScale('t-l-c-cockpitNewRight', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-cockpitNewRight', global.appScaleMode, 'normal');
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

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tComponentx0x0ComputedData,
tComponentx0x1ComputedData,
tComponentx0x2ComputedData,
};
},
};