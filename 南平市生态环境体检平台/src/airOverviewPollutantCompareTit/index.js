window.airOverviewPollutantCompareTitComponent = {
template: 
`<div id="t-l-c-airOverviewPollutantCompareTit" class="t-l-c-airOverviewPollutantCompareTit" >` +
`<t-component id="t-component-6f3b.f3ecc4cb7" class="airOverviewPollutantCompareTit-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-dea6.bbc8e049" class="airOverviewPollutantCompareTit-t-text-0-1"  :label="tTextx0x1ComputedData.label" :editable="tTextx0x1ComputedData.editable" :c-style="tTextx0x1ComputedData.cStyle" :label-raw="tTextx0x1ComputedData.labelRaw">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-b958.1a33be609" class="airOverviewPollutantCompareTit-t-text-unit-0-2"  :c-style="tTextUnitx0x2ComputedData.cStyle" :justify="tTextUnitx0x2ComputedData.justify" :align="tTextUnitx0x2ComputedData.align" :content="global.regionaQuery.businessRegionName" :unit="tTextUnitx0x2ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x2ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
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
            default: {"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
name:"titleFirstBgComponent",
cStyle:{"wrapper":{"default":{"width":"410px","height":"32px","margin":"0 auto","backgroundColor":"","position":"unset","left":"0px","top":"0px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/71ed927f19ff41e78116c906842de342_19/index.html#/titleFirstBg",
componentName:"titleFirstBgComponent", 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"width":"198px","height":"19px","color":"rgba(255, 255, 255, 0.9)","fontSize":"14px","top":"34px","left":"210px","position":"unset"},
            
            },
 default: { 
 
label:"单位：μg/m³（CO：mg/m³）",
editable:false,
cStyle:{"wrapper":{"default":{"width":"198px","height":"19px","color":"rgba(255, 255, 255, 0.9)","fontSize":"14px","top":"34px","left":"210px","position":"unset"}}},
labelRaw:"单位：μg/{{M3}}（CO：mg/{{M3}}）", 
 },
},
tTextUnitx0x2: {
defaultStyle: {
            default: {"width":"333px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","top":"6px","left":"34px","position":"unset","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"333px","height":"20px","fontSize":"17px","fontFamily":"方正综艺","color":"var(--t-white)","lineHeight":"20px","top":"6px","left":"34px","position":"unset","animationName":""}},"unit":{"default":{"fontSize":"17px","fontFamily":"方正综艺","lineHeight":"20px"}},"text":{"default":{"lineHeight":"20px","fontSize":"17px"}}},
justify:"flex-start",
align:"flex-end",
content:"佛山市",
unit:"污染物同比情况",
showOverflowTooltip:true, 
 },
},
});
 function handleWindowResize() {
                            setPageScale('t-l-c-airOverviewPollutantCompareTit', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-airOverviewPollutantCompareTit', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tTextUnitx0x2ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x2.default, componentState.tTextUnitx0x2?.[state.screenSize]));

return {
global,
state,
componentState,
tComponentx0x0ComputedData,
tTextx0x1ComputedData,
tTextUnitx0x2ComputedData,
};
},
};