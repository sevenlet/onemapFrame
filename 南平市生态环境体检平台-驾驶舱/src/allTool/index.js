window.allToolComponent = {
template: 
`<div id="t-l-c-allTool" class="t-l-c-allTool" >` +
`<t-component v-if="global.isTool === false" id="t-component-dd2e.57e60f9d4" class="allTool-t-component-0-0"  :name="global.toolType" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="global.toolType">` +
`</t-component>` +
`<t-rect v-if="global.isTool === true" id="t-rect-75d6.31ec9c9d5" class="allTool-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-text v-if="global.isTool === true" id="t-text-3f68.867f14345" class="allTool-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle" @click="onclick1743409426763">` +
`</t-text>` +
`<t-image-base v-if="global.isTool === true" id="t-image-base-5222.f0dac5e3d" class="allTool-t-image-base-0-3"  :src="tImageBasex0x3ComputedData.src" :fit="tImageBasex0x3ComputedData.fit" :c-style="tImageBasex0x3ComputedData.cStyle" @click="onclick1743408108631">` +
`</t-image-base>` +
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
   isTool: true,
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
            default: {"width":"270px","height":"333px","margin":"0 auto","backgroundColor":"rgba(0,0,0,0)","position":"unset","left":"0px","top":"-1px"},
            
            },
 default: { 
 
name:"airToolComponent",
cStyle:{"wrapper":{"default":{"width":"270px","height":"333px","margin":"0 auto","backgroundColor":"rgba(0,0,0,0)","position":"unset","left":"0px","top":"-1px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/airTool",
componentName:"airToolComponent", 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"82px","height":"42px","position":"unset","left":"188px","top":"291px","borderLeft":"1px solid var(--t-tool-border-small)","borderTop":"1px solid var(--t-tool-border-small)","borderRight":"1px solid var(--t-tool-border-small)","borderBottom":"1px solid var(--t-tool-border-small)","backgroundColor":"var(--t-tool-small-bg)","borderTopLeftRadius":"12px","borderTopRightRadius":"12px","borderBottomLeftRadius":"12px","borderBottomRightRadius":"12px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"82px","height":"42px","position":"unset","left":"188px","top":"291px","borderLeft":"1px solid var(--t-tool-border-small)","borderTop":"1px solid var(--t-tool-border-small)","borderRight":"1px solid var(--t-tool-border-small)","borderBottom":"1px solid var(--t-tool-border-small)","backgroundColor":"var(--t-tool-small-bg)","borderTopLeftRadius":"12px","borderTopRightRadius":"12px","borderBottomLeftRadius":"12px","borderBottomRightRadius":"12px"}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"32px","height":"16px","color":"#fff","fontSize":"16px","lineHeight":"16px","position":"unset","left":"201px","top":"304px","cursor":"pointer"},
            
            },
 default: { 
 
label:"图例",
editable:false,
cStyle:{"wrapper":{"default":{"width":"32px","height":"16px","color":"#fff","fontSize":"16px","lineHeight":"16px","position":"unset","left":"201px","top":"304px","cursor":"pointer"}}}, 
 },
},
tImageBasex0x3: {
defaultStyle: {
            default: {"width":"20px","height":"20px","position":"unset","left":"236px","top":"302px","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(180deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      ","cursor":"pointer"},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-03-31/0176f3574d5c43fb9b0405556b7aac7a.png",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"20px","height":"20px","position":"unset","left":"236px","top":"302px","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(0deg) rotateZ(180deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      ","cursor":"pointer"}}}, 
 },
},
});
const log = () => {

console.log(global.toolType,global.isMapTool,global.isTool);
};
const onclick1743408108631 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'isTool',
                    value:false,
                    data: {
                      isTool: false
                    },
                  });
// 执行自定义方法
log();
};
const onclick1743409426763 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'isTool',
                    value:false,
                    data: {
                      isTool: false
                    },
                  });
};
 function handleWindowResize() {
                            setPageScale('t-l-c-allTool', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onUnmounted(() => {
// 页面离开时的操作
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'isTool',
                    value:true,
                    data: {
                      isTool: true
                    },
                  });
});
onMounted(() => {
setPageScale('t-l-c-allTool', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tImageBasex0x3ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x3.default, componentState.tImageBasex0x3?.[state.screenSize]));

return {
global,
state,
componentState,
tComponentx0x0ComputedData,
tRectx0x1ComputedData,
tTextx0x2ComputedData,
tImageBasex0x3ComputedData,
onclick1743409426763,
onclick1743408108631,
};
},
};