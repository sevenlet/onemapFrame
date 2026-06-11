window.airTraceAnyPointComponent = {
template: 
`<div id="t-l-c-airTraceAnyPoint" class="t-l-c-airTraceAnyPoint" >` +
`<t-rect id="t-rect-0911.f9ec9d352" class="airTraceAnyPoint-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-component id="t-component-6538.bd4ec5b54" class="airTraceAnyPoint-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName">` +
`</t-component>` +
`<t-row id="t-row-5443.7e7d1c1a1" class="airTraceAnyPoint-t-row-0-2"  :c-style="tRowx0x2ComputedData.cStyle" :gutter="tRowx0x2ComputedData.gutter" :justify="tRowx0x2ComputedData.justify" :align="tRowx0x2ComputedData.align">` +
`<t-text id="t-text-0d1a.4b7df282f" class="airTraceAnyPoint-t-text-0-2-0"  :label="tTextx0x2x0ComputedData.label" :editable="tTextx0x2x0ComputedData.editable" :c-style="tTextx0x2x0ComputedData.cStyle" @click="onclick1734337188119">` +
`</t-text>` +
`<t-text id="t-text-9ff1.92503251d" class="airTraceAnyPoint-t-text-0-2-1"  :label="tTextx0x2x1ComputedData.label" :editable="tTextx0x2x1ComputedData.editable" :c-style="tTextx0x2x1ComputedData.cStyle">` +
`</t-text>` +
`</t-row>` +
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
   headerInfo: {"POINT_NAME":"-","POINT_TYPE":"","POINT_TYPE_NAME":"-"},
   sourceParmasState: {},
   parentParams: {"POINT_CODE":""},
   defComponentName: "airSyxqPanelAarmComponent",
   componentName: "airSyxqPanelAarmComponent",
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
            default: {"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"56px","left":"1px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"56px","left":"1px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"450px","height":"831px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"69px","overflow":"auto"},
            
            },
 default: { 
 
name:"syxqAnyPointComponent",
cStyle:{"wrapper":{"default":{"width":"450px","height":"831px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"69px","overflow":"auto"}}},
src:"/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/index.html#/syxqAnyPoint",
componentName:"syxqAnyPointComponent", 
 },
},
tRowx0x2: {
defaultStyle: {
            default: {"width":"413px","height":"54px","top":"1px","left":"16px","position":"unset"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"413px","height":"54px","top":"1px","left":"16px","position":"unset"}}},
gutter:0,
justify:"start",
align:"middle", 
 },
},
tTextx0x2x0: {
defaultStyle: {
            default: {"width":"43px","height":"18px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"19px","left":"14px","backgroundColor":"rgba(255, 255, 255, 1)","position":"unset","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"43px","height":"18px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"19px","left":"14px","backgroundColor":"rgba(255, 255, 255, 1)","position":"unset","cursor":"pointer","animationName":""},"hover":{"backgroundColor":"var(--business-theme)"}}}, 
 },
},
tTextx0x2x1: {
defaultStyle: {
            default: {"width":"auto","height":"23px","color":"rgba(255, 255, 255, 0.9)","fontSize":"18px","borderLeft":"1px solid rgba(255,255,255,1)","lineHeight":"24px","paddingLeft":"20px","top":"18px","left":"73px","position":"unset","animationName":"","marginLeft":"20px"},
            
            },
 default: { 
 
label:"任意点溯源",
editable:false,
cStyle:{"wrapper":{"default":{"width":"auto","height":"23px","color":"rgba(255, 255, 255, 0.9)","fontSize":"18px","borderLeft":"1px solid rgba(255,255,255,1)","lineHeight":"24px","paddingLeft":"20px","top":"18px","left":"73px","position":"unset","animationName":"","marginLeft":"20px"}}}, 
 },
},
});
const handleBack = () => {
/* 发送webSocket消息 */
if (rootData?.sendMessage) {
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: "showAirTraceDetail", // 消息名称
    data: [{
      shareCode: "hiddenTraceDetail",
      runtimeValue: 'true'
    }],
  });
  // 清除溯源
  rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: "closeAirSourceTrace", // 消息名称
    data: null,
  });
}
};
const onclick1734337188119 = () => {
// 执行自定义方法
handleBack();
};
 function handleWindowResize() {
                            setPageScale('t-l-c-airTraceAnyPoint', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-airTraceAnyPoint', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tRowx0x2ComputedData = computed(() => _.merge({}, componentState.tRowx0x2.default, componentState.tRowx0x2?.[state.screenSize]));

 const tTextx0x2x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x2x0.default, componentState.tTextx0x2x0?.[state.screenSize]));

 const tTextx0x2x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x2x1.default, componentState.tTextx0x2x1?.[state.screenSize]));

return {
global,
state,
componentState,
tRectx0x0ComputedData,
tComponentx0x1ComputedData,
tRowx0x2ComputedData,
tTextx0x2x0ComputedData,
tTextx0x2x1ComputedData,
onclick1734337188119,
};
},
};