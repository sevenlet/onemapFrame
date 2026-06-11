window.ecologicalCloudLeftIndexComponent = {
template: 
`<div id="t-l-c-ecologicalCloudLeftIndex" class="t-l-c-ecologicalCloudLeftIndex" >` +
`<t-rect id="t-rect-9dd2.1a422ebcc" class="ecologicalCloudLeftIndex-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-b0e2.5bfa38c3e" class="ecologicalCloudLeftIndex-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-component id="t-component-3c02.05e01e2c2" class="ecologicalCloudLeftIndex-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName">` +
`</t-component>` +
`<t-component id="t-component-80b7.5b62a097e" class="ecologicalCloudLeftIndex-t-component-0-3"  :name="tComponentx0x3ComputedData.name" :c-style="tComponentx0x3ComputedData.cStyle" :src="tComponentx0x3ComputedData.src" :component-name="tComponentx0x3ComputedData.componentName">` +
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
            default: {"width":"400px","height":"265px","position":"unset","left":"0px","top":"660px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--t-card-bgc)","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"400px","height":"265px","position":"unset","left":"0px","top":"660px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--t-card-bgc)","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px","animationName":""}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"400px","height":"535px","position":"unset","left":"0px","top":"50px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--t-card-bgc)","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"400px","height":"535px","position":"unset","left":"0px","top":"50px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"var(--t-card-bgc)","borderBottomLeftRadius":"8px","borderBottomRightRadius":"8px"}}}, 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"400px","height":"580px","margin":"0 auto","backgroundColor":"","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
name:"airQualityIndexComponent",
cStyle:{"wrapper":{"default":{"width":"400px","height":"580px","margin":"0 auto","backgroundColor":"","position":"unset","left":"0px","top":"0px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/airQualityIndex",
componentName:"airQualityIndexComponent", 
 },
},
tComponentx0x3: {
defaultStyle: {
            default: {"width":"400px","height":"310px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"610px","animationName":""},
            
            },
 default: { 
 
name:"surfaceWaterQualityComponent",
cStyle:{"wrapper":{"default":{"width":"400px","height":"310px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"610px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/surfaceWaterQuality",
componentName:"surfaceWaterQualityComponent", 
 },
},
});
 function handleWindowResize() {
                            setPageScale('t-l-c-ecologicalCloudLeftIndex', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-ecologicalCloudLeftIndex', global.appScaleMode, 'normal');
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

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tComponentx0x3ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3.default, componentState.tComponentx0x3?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tComponentx0x2ComputedData,
tComponentx0x3ComputedData,
};
},
};