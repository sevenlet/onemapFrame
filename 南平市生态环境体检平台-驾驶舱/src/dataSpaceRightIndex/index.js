window.dataSpaceRightIndexComponent = {
template: 
`<div id="t-l-c-dataSpaceRightIndex" class="t-l-c-dataSpaceRightIndex" >` +
`<t-rect v-if="global.theme === 'PC浅色版'" id="t-rect-9c31.0bbec7058" class="dataSpaceRightIndex-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-cefa.4755f47f7" class="dataSpaceRightIndex-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-88de.4c5633474" class="dataSpaceRightIndex-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle">` +
`</t-text>` +
`<t-component id="t-component-5bff.a79436e0a" class="dataSpaceRightIndex-t-component-0-3"  :name="tComponentx0x3ComputedData.name" :c-style="tComponentx0x3ComputedData.cStyle" :src="tComponentx0x3ComputedData.src" :component-name="tComponentx0x3ComputedData.componentName">` +
`</t-component>` +
`<t-component id="t-component-5fd7.d382323f8" class="dataSpaceRightIndex-t-component-0-4"  :name="tComponentx0x4ComputedData.name" :c-style="tComponentx0x4ComputedData.cStyle" :src="tComponentx0x4ComputedData.src" :component-name="tComponentx0x4ComputedData.componentName">` +
`</t-component>` +
`<t-component id="t-component-9a24.e7bc87304" class="dataSpaceRightIndex-t-component-0-5"  :name="tComponentx0x5ComputedData.name" :c-style="tComponentx0x5ComputedData.cStyle" :src="tComponentx0x5ComputedData.src" :component-name="tComponentx0x5ComputedData.componentName">` +
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
            default: {"width":"428px","height":"870px","left":"2px","top":"36px","backgroundColor":"rgba(255, 255, 255, 1)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"428px","height":"870px","left":"2px","top":"36px","backgroundColor":"rgba(255, 255, 255, 1)"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"432px","height":"32px","position":"unset","left":"0px","top":"5px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-data-text-head)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"432px 32px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"432px","height":"32px","position":"unset","left":"0px","top":"5px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-data-text-head)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"432px 32px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","animationName":""}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"111px","height":"32px","color":"var(--t-text)","position":"unset","left":"160.5px","top":"0px","fontSize":"30px","lineHeight":"32px","fontFamily":"优设标题黑","animationName":"","cursor":"pointer"},
            
            },
 default: { 
 
label:"数据供给",
editable:false,
cStyle:{"wrapper":{"default":{"width":"111px","height":"32px","color":"var(--t-text)","position":"unset","left":"160.5px","top":"0px","fontSize":"30px","lineHeight":"32px","fontFamily":"优设标题黑","animationName":"","cursor":"pointer"}}}, 
 },
},
tComponentx0x3: {
defaultStyle: {
            default: {"width":"400px","height":"262px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"16px","top":"632px","animationName":""},
            
            },
 default: { 
 
name:"rightRealTimeUseComponent",
cStyle:{"wrapper":{"default":{"width":"400px","height":"262px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"16px","top":"632px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/rightRealTimeUse",
componentName:"rightRealTimeUseComponent", 
 },
},
tComponentx0x4: {
defaultStyle: {
            default: {"width":"400px","height":"262px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"16px","top":"340px","animationName":""},
            
            },
 default: { 
 
name:"rightFullDirectionalServiceComponent",
cStyle:{"wrapper":{"default":{"width":"400px","height":"262px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"16px","top":"340px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/rightFullDirectionalService",
componentName:"rightFullDirectionalServiceComponent", 
 },
},
tComponentx0x5: {
defaultStyle: {
            default: {"width":"400px","height":"262px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"16px","top":"47px"},
            
            },
 default: { 
 
name:"rightFullApplicationSupportComponent",
cStyle:{"wrapper":{"default":{"width":"400px","height":"262px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"16px","top":"47px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/rightFullApplicationSupport",
componentName:"rightFullApplicationSupportComponent", 
 },
},
});
 function handleWindowResize() {
                            setPageScale('t-l-c-dataSpaceRightIndex', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-dataSpaceRightIndex', global.appScaleMode, 'normal');
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

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tComponentx0x3ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3.default, componentState.tComponentx0x3?.[state.screenSize]));

 const tComponentx0x4ComputedData = computed(() => _.merge({}, componentState.tComponentx0x4.default, componentState.tComponentx0x4?.[state.screenSize]));

 const tComponentx0x5ComputedData = computed(() => _.merge({}, componentState.tComponentx0x5.default, componentState.tComponentx0x5?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tTextx0x2ComputedData,
tComponentx0x3ComputedData,
tComponentx0x4ComputedData,
tComponentx0x5ComputedData,
};
},
};