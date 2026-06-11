window.performanceTrackingSection1Component = {
template: 
`<div id="t-l-c-performanceTrackingSection1" class="t-l-c-performanceTrackingSection1" >` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex === 8" id="t-image-base-16ea.9e1b915d8" class="performanceTrackingSection1-t-image-base-0-0"  :src="tImageBasex0x0ComputedData.src" :fit="tImageBasex0x0ComputedData.fit" :c-style="tImageBasex0x0ComputedData.cStyle">` +
`</t-image-base>` +
`<t-image-base v-if="global.dashboardGlobalVariables.selectedIndicatorIndex !== 8" id="t-image-base-4f81.e5868f47c" class="performanceTrackingSection1-t-image-base-0-1"  :src="tImageBasex0x1ComputedData.src" :fit="tImageBasex0x1ComputedData.fit" :c-style="tImageBasex0x1ComputedData.cStyle">` +
`</t-image-base>` +
`<t-text id="t-text-e3ad.391156575" class="performanceTrackingSection1-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-ca8c.f28156286" class="performanceTrackingSection1-t-text-0-3"  :label="tTextx0x3ComputedData.label" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-2456.8cd16e232" class="performanceTrackingSection1-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle">` +
`</t-text>` +
`<t-text-unit id="t-text-unit-755b.8c34c41ac" class="performanceTrackingSection1-t-text-unit-0-5"  :c-style="tTextUnitx0x5ComputedData.cStyle" :content="replaceCssVariables(filterData(global.dashboardGlobalVariables.supervision.cardData.PROBLEM_SOURCE1.ROUND3.TOTAL, componentPropBindingMap?.['t-text-unit-755b.8c34c41ac']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x5ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x5ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit id="t-text-unit-b633.4ff7b5544" class="performanceTrackingSection1-t-text-unit-0-6"  :c-style="tTextUnitx0x6ComputedData.cStyle" :content="replaceCssVariables(filterData(global.dashboardGlobalVariables.supervision.cardData.PROBLEM_SOURCE1.ROUND3.STATUS_1, componentPropBindingMap?.['t-text-unit-b633.4ff7b5544']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x6ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x6ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-text-unit v-if="state.isWhite0 === true" id="t-text-unit-0f29.f8f3d126c" class="performanceTrackingSection1-t-text-unit-0-7"  :c-style="tTextUnitx0x7ComputedData.cStyle" :content="replaceCssVariables(filterData(global.dashboardGlobalVariables.supervision.cardData.PROBLEM_SOURCE1.ROUND3.STATUS_0, componentPropBindingMap?.['t-text-unit-0f29.f8f3d126c']['content'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :unit="tTextUnitx0x7ComputedData.unit" :show-overflow-tooltip="tTextUnitx0x7ComputedData.showOverflowTooltip">` +
`</t-text-unit>` +
`<t-rect id="t-rect-aa88.a72e421b" class="performanceTrackingSection1-t-rect-0-8"  :tip="tRectx0x8ComputedData.tip" :label="tRectx0x8ComputedData.label" :active="tRectx0x8ComputedData.active" :c-style="tRectx0x8ComputedData.cStyle" @click="onclick1764138824713">` +
`</t-rect>` +
`<t-text id="t-text-86e9.6e4bda798" class="performanceTrackingSection1-t-text-0-9"  :label="tTextx0x9ComputedData.label" :editable="tTextx0x9ComputedData.editable" :c-style="tTextx0x9ComputedData.cStyle" @click="onclick1739254824900">` +
`</t-text>` +
`<t-rect id="t-rect-daca.2f7f683b7" class="performanceTrackingSection1-t-rect-0-10"  :tip="tRectx0x10ComputedData.tip" :label="tRectx0x10ComputedData.label" :active="tRectx0x10ComputedData.active" :c-style="tRectx0x10ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-a5a4.a161e6345" class="performanceTrackingSection1-t-rect-0-11"  :tip="tRectx0x11ComputedData.tip" :label="tRectx0x11ComputedData.label" :active="tRectx0x11ComputedData.active" :c-style="tRectx0x11ComputedData.cStyle">` +
`</t-rect>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-image-base-16ea.9e1b915d8":{"attributeName":"tImageBasex0x0","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-image-base-4f81.e5868f47c":{"attributeName":"tImageBasex0x1","src":{"filters":[]},"fit":{"filters":[]},"cStyle":{"filters":[]}},"t-text-e3ad.391156575":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-ca8c.f28156286":{"attributeName":"tTextx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-2456.8cd16e232":{"attributeName":"tTextx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-unit-755b.8c34c41ac":{"attributeName":"tTextUnitx0x5","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-b633.4ff7b5544":{"attributeName":"tTextUnitx0x6","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-text-unit-0f29.f8f3d126c":{"attributeName":"tTextUnitx0x7","cStyle":{"filters":[]},"content":{"filters":[]},"unit":{"filters":[]},"showOverflowTooltip":{"filters":[]}},"t-rect-aa88.a72e421b":{"attributeName":"tRectx0x8","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-86e9.6e4bda798":{"attributeName":"tTextx0x9","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-daca.2f7f683b7":{"attributeName":"tRectx0x10","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-a5a4.a161e6345":{"attributeName":"tRectx0x11","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}}};
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
   isNoStorard: false,
   isStorard: true,
   isSelectedBg1: false,
   isSelectedBg2: false,
   isRed0: false,
   isGreen0: false,
   isWhite0: true,
   isRed1: false,
   isGreen1: false,
   isWhite1: true,
   riskData: {"GOOD_RATE":"--","GOOD_RATE_JQN":"--","GOOD_RATE_TARGET":"--","GOOD_RATE_YYMB":"--","ISSTANDARDS_STR":"--"},
   constructData: {"GOOD_RATE":"--","GOOD_RATE_JQN":"--","GOOD_RATE_TARGET":"--","GOOD_RATE_YYMB":"--","ISSTANDARDS_STR":"--","DATA_3":"--"},
   isOk0: 0,
   isOk1: 0,
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
tImageBasex0x0: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"0px","top":"0px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"0px","top":"0px","backgroundImage":"var(--t-cockpit-card-green-bg-selected)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","animationName":""}}}, 
 },
},
tImageBasex0x1: {
defaultStyle: {
            default: {"width":"400px","height":"108px","position":"unset","left":"0px","top":"0px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto"},
            
            },
 default: { 
 
src:"",
fit:"fill",
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","position":"unset","left":"0px","top":"0px","backgroundImage":"var(--t-cockpit-card-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"400px 108px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","marginTop":"0px","paddingTop":"0px","borderTop":"1px none rgb(23,62,228)","cursor":"auto"}}}, 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"47px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"44px","top":"50px","textAlign":"center"},
            
            },
 default: { 
 
label:"总数",
editable:false,
cStyle:{"wrapper":{"default":{"width":"47px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"44px","top":"50px","textAlign":"center"}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"107px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"275px","top":"50px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"按序时进度推进",
editable:false,
cStyle:{"wrapper":{"default":{"width":"107px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"275px","top":"50px","animationName":"","textAlign":"center"}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"82px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"157px","top":"50px","animationName":"","textAlign":"center"},
            
            },
 default: { 
 
label:"已完成整改",
editable:false,
cStyle:{"wrapper":{"default":{"width":"82px","height":"14px","color":"var(--t-text) ","fontSize":"14px","lineHeight":"14px","position":"unset","left":"157px","top":"50px","animationName":"","textAlign":"center"}}}, 
 },
},
tTextUnitx0x5: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"34px","top":"73px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"34px","top":"73px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-white)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"--",
unit:"项",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x6: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"165px","top":"73px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"165px","top":"73px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-green)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"--",
unit:"项",
showOverflowTooltip:true, 
 },
},
tTextUnitx0x7: {
defaultStyle: {
            default: {"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"295px","top":"73px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"66px","height":"22px","fontSize":"14px","lineHeight":"14px","animationName":"","justifyContent":"center","alignItems":"end","paddingLeft":"0px","gap":"2px","display":"flex","position":"unset","left":"295px","top":"73px"}},"text":{"default":{"fontSize":"22px","lineHeight":"22px","color":"var(--t-num-color-blue)","fontFamily":"DIN-black","background":"unset","backgroundClip":"unset","width":"auto","height":""}},"unit":{"default":{"fontSize":"14px","lineHeight":"18px","color":"rgba(255, 255, 255, 0.82)","background":"unset","backgroundClip":"unset","width":"auto","height":""}}},
content:"--",
unit:"项",
showOverflowTooltip:true, 
 },
},
tRectx0x8: {
defaultStyle: {
            default: {"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-cockpit-card7)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"6px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"30px","height":"30px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-cockpit-card7)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"30px 30px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","position":"unset","left":"16px","top":"6px","cursor":"pointer"}}}, 
 },
},
tTextx0x9: {
defaultStyle: {
            default: {"width":"325px","height":"16px","color":"var(--t-text) ","position":"unset","left":"49px","top":"13px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer"},
            
            },
 default: { 
 
label:"第三轮中央生态环境保护督察问题进展",
editable:false,
cStyle:{"wrapper":{"default":{"width":"325px","height":"16px","color":"var(--t-text) ","position":"unset","left":"49px","top":"13px","fontSize":"16px","lineHeight":"16px","fontWeight":"700","cursor":"pointer"}}}, 
 },
},
tRectx0x10: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"132px","top":"50px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"132px","top":"50px","position":"unset","animationName":""}}}, 
 },
},
tRectx0x11: {
defaultStyle: {
            default: {"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"265px","top":"51px","position":"unset","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1px","height":"38px","backgroundImage":"var(--t-fgx-green)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"1px 38px","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"265px","top":"51px","position":"unset","animationName":""}}}, 
 },
},
});
const handleSelectCard = (index) => {
global.isLoop = false;
global.isSelectedBg = index;
global.currentIndex = index + 1;

// 全局变量中驾驶舱专题变量中记录了选择的指标索引 从1开始
global.dashboardGlobalVariables.selectedIndicatorIndex = index;
// 全局变量中驾驶舱专题变量中记录了当前的模块 用于地图下方弹窗显示使用
global.dashboardGlobalVariables.activeTopic = 'supervision';
global.dashboardGlobalVariables.supervision.layerSwitch = false;
global.dashboardGlobalVariables.supervision.layerSwitchVisible = false;
global.dashboardGlobalVariables.supervision.PROBLEM_SOURCE = '1';
global.dashboardGlobalVariables.supervision.ROUND_NO = '3';

// 添加指标图层
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeIndicator', // 消息名称
  data: {
    indicator: index,
    time: global.dashboardGlobalVariables.supervision.monitorTime,
  },
});

// 修改监测时间 重新添加图层
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeMonitorTime', // 消息名称
  data: {
    time: global.dashboardGlobalVariables.supervision.monitorTime,
  },
});

// 显示图层
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'setProblemVisibility',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      visible: true,
    }
  }
);

// 隐藏问题清单中打开的图层
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'setProblemStatus',  // 消息类型名称
    data: {                   // 消息内容，对象格式
      visible: false,
    }
  }
);

// 改变全局参数
// global.mapChangeAllStatusParams = {
//   time: global.cityTime,
//   indicator: index + 1,
// };

if (global.intervalId) {
  clearInterval(global.intervalId);
}


};
const onclick1739254824900 = () => {
// 执行自定义方法
handleSelectCard(8);
};
const onclick1764138824713 = () => {
// 执行自定义方法
handleSelectCard(8);
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-performanceTrackingSection1', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-performanceTrackingSection1', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tImageBasex0x0ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x0.default, componentState.tImageBasex0x0?.[state.screenSize]));

 const tImageBasex0x1ComputedData = computed(() => _.merge({}, componentState.tImageBasex0x1.default, componentState.tImageBasex0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tTextUnitx0x5ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x5.default, componentState.tTextUnitx0x5?.[state.screenSize]));

 const tTextUnitx0x6ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x6.default, componentState.tTextUnitx0x6?.[state.screenSize]));

 const tTextUnitx0x7ComputedData = computed(() => _.merge({}, componentState.tTextUnitx0x7.default, componentState.tTextUnitx0x7?.[state.screenSize]));

 const tRectx0x8ComputedData = computed(() => _.merge({}, componentState.tRectx0x8.default, componentState.tRectx0x8?.[state.screenSize]));

 const tTextx0x9ComputedData = computed(() => _.merge({}, componentState.tTextx0x9.default, componentState.tTextx0x9?.[state.screenSize]));

 const tRectx0x10ComputedData = computed(() => _.merge({}, componentState.tRectx0x10.default, componentState.tRectx0x10?.[state.screenSize]));

 const tRectx0x11ComputedData = computed(() => _.merge({}, componentState.tRectx0x11.default, componentState.tRectx0x11?.[state.screenSize]));

      if (apiRegistry && Object.keys(apiRegistry).length) {
        // 加载初始接口
        loadInitialApis(apiRegistry, apiDataCache, componentState, componentPropBindingMap, function(cacheKey, data, apiName) {
            // 更新缓存
            apiDataCache[cacheKey] = data;
            apiDataMap[apiName] = data;
        });

        /* 监听组件可视变化，获取组件绑定的接口数据 */
        watchComponentVisible(apiRegistry, apiDataCache, componentState, componentPropBindingMap, function(cacheKey, data, apiName) {
            // 更新缓存
            apiDataCache[cacheKey] = data;
            apiDataMap[apiName] = data;
        });
      }
       
       /* 获取接口数据 */
       const getApiData = (id, key) => {
          return computed(() => getDataValue(apiDataMap, componentPropBindingMap[id][key]));
       };
      
return {
replaceCssVariables,
getApiData,
filterData,
componentPropBindingMap,
global,
state,
componentState,
tImageBasex0x0ComputedData,
tImageBasex0x1ComputedData,
tTextx0x2ComputedData,
tTextx0x3ComputedData,
tTextx0x4ComputedData,
tTextUnitx0x5ComputedData,
tTextUnitx0x6ComputedData,
tTextUnitx0x7ComputedData,
tRectx0x8ComputedData,
tTextx0x9ComputedData,
tRectx0x10ComputedData,
tRectx0x11ComputedData,
onclick1764138824713,
onclick1739254824900,
};
},
};