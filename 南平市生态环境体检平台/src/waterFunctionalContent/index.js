window.waterFunctionalContentComponent = {
template: 
`<div id="t-l-c-waterFunctionalContent" class="t-l-c-waterFunctionalContent" >` +
`<t-component id="t-component-d956.b44778e1e" class="waterFunctionalContent-t-component-0-0"  :name="state.tabsActiveValue" :c-style="tComponentx0x0ComputedData.cStyle" :src="tComponentx0x0ComputedData.src" :component-name="state.tabsActiveValue">` +
`</t-component>` +
`<t-tabs id="t-tabs-f609.2971f9e49" class="waterFunctionalContent-t-tabs-0-1"  :alias="tTabsx0x1ComputedData.alias" :data="state.tabs" :active-tab="state.tabsActiveValue" :tab-position-extend="tTabsx0x1ComputedData.tabPositionExtend" :stretch="tTabsx0x1ComputedData.stretch" :c-style="tTabsx0x1ComputedData.cStyle" @tab-click="ontabClick1733388893232">` +
`</t-tabs>` +
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
   tabs: [{"label":"水质评价","name":"waterFunEvaluateComponent","iconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/d052f7e964ea40d9bb2b355304c75152.svg","activeIconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/e37bc846a3fe44229b07f0b761c3a1e9.svg"},{"label":"目标考核","name":"waterFunTargetComponent","iconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/f40ea51273ed4ad2a2644d1e5f2683bd.svg","activeIconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/490ed07e9da94ef391daeb22bf5d7dff.svg"}],
   tabsActiveValue: "waterFunEvaluateComponent",
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
            default: {"width":"450px","height":"850px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"50px","overflowY":"auto","overflowX":"hidden","--scrollbar-thumb-color":"var(--business-show-bg50)","--scrollbar-track-color":"var(--business-show-bg10)","--scrollbar-width":"2px","animationName":""},
            
            },
 default: { 
 
name:"waterFunEvaluateComponent",
cStyle:{"wrapper":{"default":{"width":"450px","height":"850px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"50px","overflowY":"auto","overflowX":"hidden","--scrollbar-thumb-color":"var(--business-show-bg50)","--scrollbar-track-color":"var(--business-show-bg10)","--scrollbar-width":"2px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/waterSurfaceEvaluate",
componentName:"waterFunEvaluateComponent", 
 },
},
tTabsx0x1: {
defaultStyle: {
            default: {"width":"450px","height":"50px","position":"unset","left":"0px","top":"0px","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottom":"1px solid var(--business-show-bg50)","animationName":""},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[{"label":"水质评价","name":"waterFunEvaluateComponent","iconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/d052f7e964ea40d9bb2b355304c75152.svg","activeIconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/e37bc846a3fe44229b07f0b761c3a1e9.svg"},{"label":"目标考核","name":"waterFunTargetComponent","iconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/f40ea51273ed4ad2a2644d1e5f2683bd.svg","activeIconSrc":"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-04/490ed07e9da94ef391daeb22bf5d7dff.svg"}],
activeTab:"waterFunEvaluateComponent",
tabPositionExtend:"top-start",
stretch:true,
cStyle:{"wrapper":{"default":{"width":"450px","height":"50px","position":"unset","left":"0px","top":"0px","borderTopLeftRadius":"16px","borderTopRightRadius":"16px","borderBottom":"1px solid var(--business-show-bg50)","animationName":""}},"itemWrapper":{"default":{"color":"var(--business-text-avianize)","fontFamily":"方正综艺","fontSize":"16px","background":"var(--business-tab-first-bg)","borderLeft":"1px solid var(--business-show-bg50)","marginLeft":"-1px"},"active":{"backgroundColor":"var(--business-tab-first-active-bg)","color":"var(--business-tab-third-active-border)","box-shadow":"inset 0px 0px 11px 0px var(--business-tab-first-active-shadow)","borderLeft":"1px solid var(--business-tab-third-active-border)","borderTop":"1px solid var(--business-tab-third-active-border)","borderRight":"1px solid var(--business-tab-third-active-border)","borderBottom":"1px solid var(--business-tab-third-active-border)","lineHeight":"48px"},"hover":{"color":"var(--business-tab-third-active-border)"}},"itemActiveBorder":{"default":{"display":"none"}},"itemIcon":{"default":{"vertical-align":"-3px"}}}, 
 },
},
});
const setTabIcon = () => {
// 设置tabs图标
state.tabs[0].iconSrc = getCssVariable('--business-tab-water');
state.tabs[1].iconSrc = getCssVariable('--business-tab-target');
};
const changeTab = () => {

/** 
 * waterFunEvaluateComponent 水质评价; waterFunTargetComponent 目标考核
 * 切换菜单发送消息
 */
watch(
  () => state.tabsActiveValue,
  (val) => {
    // 判断是哪个页面
    const flag = val === 'waterFunEvaluateComponent';
    // 页面变量
    const assessOrPointWq = flag ? 'pointWq' : 'assess';
    // 屏幕id
    const waterFuncIframeUrl = flag ? 'fdfe05ce7613c0443ab0613a73050ec7' : '55dfceb579b8f08c86e68c32cc69c688';
    // 数据
    const data = [
      {
        "code": "assessOrPointWq",
        "shareCode": "assessOrPointWq",
        "defaultValue": assessOrPointWq,
        "name": "",
        "runtimeValue": assessOrPointWq
      },
      {
        "code": "waterfunIframeUrl",
        "shareCode": "waterfunIframeUrl",
        "defaultValue": `/view/show/index.vm?screenId=${waterFuncIframeUrl}&MONITORTIME=#MONITORTIME#&WATERFUNC_LEVEL=#WATERFUNC_LEVEL#`,
        "name": "",
        "runtimeValue": `/view/show/index.vm?screenId=${waterFuncIframeUrl}&MONITORTIME=&WATERFUNC_LEVEL=`
      },
      {
        "shareCode": "paramStr",
        "code": "paramStr",
        "defaultValue": "MONITORTIME=#MONITORTIME#&WATERFUNC_LEVEL=#WATERFUNC_LEVEL#",
        "name": "",
        "runtimeValue": "MONITORTIME=&WATERFUNC_LEVEL="
      },
    ]
    // 给地图发消息
    rootData.rootSocket.emit('message', {
      room: global.socketRoom,// 房间号
      type: "runInteractive", // 消息名称
      data
    });

  },
  {
    immediate: true
  }
)





};
const sendMessage = () => {
// 给水指标页面发送消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,
  type: "indicatorToggleMsg",
  data: [{
    shareCode: "indicatorToggle",
    runtimeValue: state.tabsActiveValue === 'waterFunEvaluateComponent' ? "水功能区" : ""
  }]
});
};
const ontabClick1733388893232 = (data) => {
// 设置变量值
state.tabsActiveValue = data.name;
// 执行自定义方法
changeTab();
// 执行自定义方法
sendMessage();
};
 function handleWindowResize() {
                            setPageScale('t-l-c-waterFunctionalContent', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setTabIcon();
onMounted(() => {
setPageScale('t-l-c-waterFunctionalContent', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
// 执行自定义方法
sendMessage();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tComponentx0x0ComputedData = computed(() => _.merge({}, componentState.tComponentx0x0.default, componentState.tComponentx0x0?.[state.screenSize]));

 const tTabsx0x1ComputedData = computed(() => _.merge({}, componentState.tTabsx0x1.default, componentState.tTabsx0x1?.[state.screenSize]));

return {
global,
state,
componentState,
tComponentx0x0ComputedData,
tTabsx0x1ComputedData,
ontabClick1733388893232,
};
},
};