window.waterFunctionalDetailsComponent = {
template: 
`<div id="t-l-c-waterFunctionalDetails" class="t-l-c-waterFunctionalDetails" >` +
`<t-text id="t-text-1bbc.292a467e2" class="waterFunctionalDetails-t-text-0-0"  :label="tTextx0x0ComputedData.label" :editable="tTextx0x0ComputedData.editable" :c-style="tTextx0x0ComputedData.cStyle" @click="onclick1733723979280">` +
`</t-text>` +
`<t-rect id="t-rect-b8a7.3fc5f52df" class="waterFunctionalDetails-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-text id="t-text-acb9.15027a88a" class="waterFunctionalDetails-t-text-0-2"  :label="state.title" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle">` +
`</t-text>` +
`<t-component id="t-component-3f99.75a193fe5" class="waterFunctionalDetails-t-component-0-3"  :name="tComponentx0x3ComputedData.name" :c-style="tComponentx0x3ComputedData.cStyle" :src="tComponentx0x3ComputedData.src" :component-name="tComponentx0x3ComputedData.componentName">` +
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
   title: "-",
   waterFunState: {},
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
tTextx0x0: {
defaultStyle: {
            default: {"width":"43px","height":"18px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"18px","left":"12px","backgroundColor":"rgba(255, 255, 255, 1)","position":"unset","cursor":"pointer","animationName":""},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"43px","height":"18px","color":"var(--t-font-color-gy1)","backgroundImage":"","-webkit-mask-image":"url(http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/18547eef59454bff840ff42ee0d03b78/assets/images/2024-12-09/767bc6dad50d4decb03abdf9f2484e19.svg)","backgroundRepeat":"","-webkit-mask-repeat":"no-repeat","backgroundSize":"","-webkit-mask-size":"auto","backgroundPosition":"","-webkit-mask-position":"0% 50%","top":"18px","left":"12px","backgroundColor":"rgba(255, 255, 255, 1)","position":"unset","cursor":"pointer","animationName":""},"hover":{"backgroundColor":"var(--business-theme)"}}}, 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"55px","left":"0px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"450px","height":"1px","background":"var(--business-cutting-line-gradual)","top":"55px","left":"0px","position":"unset","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"184px","height":"24px","color":"rgba(255, 255, 255, 0.9)","fontSize":"18px","borderLeft":"1px solid rgba(255,255,255,1)","lineHeight":"24px","paddingLeft":"20px","top":"15px","left":"75px","position":"unset","animationName":""},
            
            },
 default: { 
 
label:"-",
editable:false,
cStyle:{"wrapper":{"default":{"width":"184px","height":"24px","color":"rgba(255, 255, 255, 0.9)","fontSize":"18px","borderLeft":"1px solid rgba(255,255,255,1)","lineHeight":"24px","paddingLeft":"20px","top":"15px","left":"75px","position":"unset","animationName":""}}}, 
 },
},
tComponentx0x3: {
defaultStyle: {
            default: {"width":"450px","height":"814px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","top":"68px","position":"unset","left":"0px","overflow":"auto","animationName":""},
            
            },
 default: { 
 
name:"waterFunctionalDetailsContentComponent",
cStyle:{"wrapper":{"default":{"width":"450px","height":"814px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","top":"68px","position":"unset","left":"0px","overflow":"auto","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/waterFunctionalDetailsContent",
componentName:"waterFunctionalDetailsContentComponent", 
 },
},
});
const getProvider = () => {
const rootData = inject('waterFunState');
console.log(rootData,'waterFunState'); // 接收到的值

state.waterFunState = rootData;
};
const handleClickBack = () => {
// 返回 水-水功能区-内容页面
state.waterFunState.componentName = 'waterFunctionalContentComponent';

// 给地图发消息
rootData.rootSocket.emit('message', {
  room: global.socketRoom,// 房间号
  type: "runInteractive", // 消息名称
  data: [
    {
      "code": "detailsOrGeneral",
      "shareCode": "detailsOrGeneral",
      "defaultValue": "general",
      "runtimeValue": "general"
    },
    {
      "code": "hiddenDetailIframe",
      "name": "",
      "defaultValue": "true",
      "shareCode": "hiddenDetailIframe",
      "runtimeValue": "true"
    }
  ]
});

};
const initPage = () => {
state.title = global.businessDialog?.dialogParmas?.rowInfo?.WATERFUNC_NAME || "-";
};
const onclick1733723979280 = () => {
// 执行自定义方法
handleClickBack();
};
 function handleWindowResize() {
                            setPageScale('t-l-c-waterFunctionalDetails', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getProvider();
// 执行自定义方法
initPage();
onMounted(() => {
setPageScale('t-l-c-waterFunctionalDetails', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tTextx0x0ComputedData = computed(() => _.merge({}, componentState.tTextx0x0.default, componentState.tTextx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tComponentx0x3ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3.default, componentState.tComponentx0x3?.[state.screenSize]));

return {
global,
state,
componentState,
tTextx0x0ComputedData,
tRectx0x1ComputedData,
tTextx0x2ComputedData,
tComponentx0x3ComputedData,
onclick1733723979280,
};
},
};