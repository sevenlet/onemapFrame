window.ecologicalCloudRightIndexComponent = {
template: 
`<div id="t-l-c-ecologicalCloudRightIndex" class="t-l-c-ecologicalCloudRightIndex" >` +
`<t-component id="t-component-e5b0.9d4071cc4" class="ecologicalCloudRightIndex-t-component-0-0"  :name="tComponentx0x0ComputedData.name" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="tComponentx0x0ComputedData.componentName">` +
`</t-component>` +
`<t-component v-if="state.ecologicalCloudAllState.realtimeBtnActive === true" id="t-component-ac00.a85cfecdb" class="ecologicalCloudRightIndex-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName">` +
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
   ecologicalCloudAllState: {"realtimeBtnActive":false},
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
            default: {"width":"400px","height":"920px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","top":"0px","left":"0px"},
            
            },
 default: { 
 
name:"ecologicalCloudRightDefaultComponent",
cStyle:{"wrapper":{"default":{"width":"400px","height":"920px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","top":"0px","left":"0px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/ecologicalCloudRightDefault",
componentName:"ecologicalCloudRightDefaultComponent", 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"400px","height":"920px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","top":"0px","left":"0px","animationName":"","position":"unset"},
            
            },
 default: { 
 
name:"realtimeContentComponent",
cStyle:{"wrapper":{"default":{"width":"400px","height":"920px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","top":"0px","left":"0px","animationName":"","position":"unset"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/realtimeContent",
componentName:"realtimeContentComponent", 
 },
},
});
const getProvider = () => {
const rootData = inject('ecologicalCloudAllState');
watch(() => rootData, (val) => {
  state.ecologicalCloudAllState = rootData;
  // 动态设置默认展示页面动态组件显示隐藏（不用是否渲染属性，为了保留页面的卡片选中状态）
  // t-component-e5b0.9d4071cc4  默认展示页面-动态组件元素id
  // t-component-ac00.a85cfecdb 实时数据页面-动态组件元素id
  const defaultContentDom = document.getElementById('t-component-e5b0.9d4071cc4');
  defaultContentDom.style.display = val.realtimeBtnActive ? 'none' : 'block';
},
  {
    deep: true,
  }
);
};
 function handleWindowResize() {
                            setPageScale('t-l-c-ecologicalCloudRightIndex', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
onMounted(() => {
setPageScale('t-l-c-ecologicalCloudRightIndex', global.appScaleMode, 'normal');
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
global,
state,
componentState,
tComponentx0x0ComputedData,
tComponentx0x1ComputedData,
};
},
};