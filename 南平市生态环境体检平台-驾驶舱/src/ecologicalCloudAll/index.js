window.ecologicalCloudAllComponent = {
template: 
`<div id="t-l-c-ecologicalCloudAll" class="t-l-c-ecologicalCloudAll" >` +
`<t-rect id="t-rect-2396.cf388c6c" class="ecologicalCloudAll-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-53b3.add68df31" class="ecologicalCloudAll-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-component id="t-component-16a2.9acd0f804" class="ecologicalCloudAll-t-component-0-3"  :name="tComponentx0x3ComputedData.name" :c-style="tComponentx0x3ComputedData.cStyle" :src="tComponentx0x3ComputedData.src" :component-name="tComponentx0x3ComputedData.componentName">` +
`</t-component>` +
`<t-component id="t-component-22a2.9acf671eb" class="ecologicalCloudAll-t-component-0-4"  :name="tComponentx0x4ComputedData.name" :c-style="tComponentx0x4ComputedData.cStyle" :src="tComponentx0x4ComputedData.src" :component-name="tComponentx0x4ComputedData.componentName">` +
`</t-component>` +
`<t-rect v-if="state.realtimeBtnActive === false" id="t-rect-30da.87aa661c9" class="ecologicalCloudAll-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.realtimeBtnActive === false" id="t-rect-8109.a9f8f6eeb" class="ecologicalCloudAll-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.realtimeBtnActive === false" id="t-rect-61cb.5b1fb7602" class="ecologicalCloudAll-t-rect-0-7"  :tip="tRectx0x7ComputedData.tip" :label="tRectx0x7ComputedData.label" :active="tRectx0x7ComputedData.active" :c-style="tRectx0x7ComputedData.cStyle" @click="onclick1741845499096">` +
`</t-rect>` +
`<t-rect v-if="state.realtimeBtnActive === true" id="t-rect-3af0.d3bacf16a" class="ecologicalCloudAll-t-rect-0-8"  :tip="tRectx0x8ComputedData.tip" :label="tRectx0x8ComputedData.label" :active="tRectx0x8ComputedData.active" :c-style="tRectx0x8ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.realtimeBtnActive === true" id="t-rect-35cd.7fb62ec68" class="ecologicalCloudAll-t-rect-0-9"  :tip="tRectx0x9ComputedData.tip" :label="tRectx0x9ComputedData.label" :active="tRectx0x9ComputedData.active" :c-style="tRectx0x9ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect v-if="state.realtimeBtnActive === true" id="t-rect-d61d.6e6ff5b26" class="ecologicalCloudAll-t-rect-0-10"  :tip="tRectx0x10ComputedData.tip" :label="tRectx0x10ComputedData.label" :active="tRectx0x10ComputedData.active" :c-style="tRectx0x10ComputedData.cStyle">` +
`</t-rect>` +
`<t-component v-if="global.isWaterPop === true" id="t-component-506c.86da59273" class="ecologicalCloudAll-t-component-0-11"  :name="tComponentx0x11ComputedData.name" :c-style="tComponentx0x11ComputedData.cStyle" :src="tComponentx0x11ComputedData.src" :component-name="tComponentx0x11ComputedData.componentName">` +
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
   isPwxkTypeSendAppAR: false,
   isProportionSendAppAR: false,
   isSectionSendAppAR: false,
   isPollutionConcentrationSendAR: false,
   isExcellentRateSendAR: false,
   selectedBlock: "",
   realtimeBtnActive: false,
   removeAppARMesData: [{"resCode":"air","resName":"大气","opType":"remove"},{"resCode":"water","resName":"水环境","opType":"remove"},{"resCode":"water_realtime","resName":"水实时监控","opType":"remove"},{"resCode":"pwxk_or_xfts","resName":"排污许可-信访投诉-环境执法","opType":"remove"}],
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
tRectx0x1: {
defaultStyle: {
            default: {"width":"457px","height":"1069px","position":"unset","left":"0px","top":"5px","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","backgroundImage":"var(--t-left-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","pointerEvents":"none","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"457px","height":"1069px","position":"unset","left":"0px","top":"5px","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","backgroundImage":"var(--t-left-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","pointerEvents":"none","animationName":""}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"457px","height":"1069px","position":"unset","left":"1460px","top":"5px","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","backgroundImage":"var(--t-right-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","pointerEvents":"none","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"457px","height":"1069px","position":"unset","left":"1460px","top":"5px","borderLeft":"1px none ","borderTop":"1px none ","borderRight":"1px none ","borderBottom":"1px none ","backgroundImage":"var(--t-right-border)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","pointerEvents":"none","animationName":""}}}, 
 },
},
tComponentx0x3: {
defaultStyle: {
            default: {"z-index":1,"width":"400px","height":"920px","margin":"0 auto","backgroundColor":"rgba(0,0,0,0)","position":"unset","left":"57px","top":"86px","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(10deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      ","animationName":"customf96bc53a86538","animationDuration":"1s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"1","animationDirection":"normal"},
            
            },
 default: { 
 
name:"ecologicalCloudLeftIndexComponent",
cStyle:{"wrapper":{"default":{"z-index":1,"width":"400px","height":"920px","margin":"0 auto","backgroundColor":"rgba(0,0,0,0)","position":"unset","left":"57px","top":"86px","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(10deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      ","animationName":"customf96bc53a86538","animationDuration":"1s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"1","animationDirection":"normal"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/ecologicalCloudLeftIndex",
componentName:"ecologicalCloudLeftIndexComponent", 
 },
},
tComponentx0x4: {
defaultStyle: {
            default: {"z-index":1,"width":"400px","height":"920px","margin":"0 auto","backgroundColor":"rgba(0,0,0,0)","position":"unset","left":"1460px","top":"86px","animationName":"custom274b9268df633","animationDuration":"1s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"1","animationDirection":"reverse","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(-10deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      "},
            
            },
 default: { 
 
name:"ecologicalCloudRightIndexComponent",
cStyle:{"wrapper":{"default":{"z-index":1,"width":"400px","height":"920px","margin":"0 auto","backgroundColor":"rgba(0,0,0,0)","position":"unset","left":"1460px","top":"86px","animationName":"custom274b9268df633","animationDuration":"1s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"1","animationDirection":"reverse","transform":"perspective(900px)\n      translate3d(0px,0px,0px)\n      rotateX(0deg) rotateY(-10deg) rotateZ(0deg)\n      scaleX(100%) scaleY(100%)\n      skewX(0deg) skewY(0deg)\n      "}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/ecologicalCloudRightIndex",
componentName:"ecologicalCloudRightIndexComponent", 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"100px","height":"100px","backgroundImage":"var(--clockwise-rotation)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom5fe973aa4709d","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse","position":"unset","left":"1325px","top":"116px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"100px","height":"100px","backgroundImage":"var(--clockwise-rotation)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"custom5fe973aa4709d","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse","position":"unset","left":"1325px","top":"116px"}}}, 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"100px","height":"100px","backgroundImage":"var(--buttentext-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"1325px","top":"116px"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"100px","height":"100px","backgroundImage":"var(--buttentext-default)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"1325px","top":"116px"}}}, 
 },
},
tRectx0x7: {
defaultStyle: {
            default: {"width":"100px","height":"100px","backgroundImage":"var(--counter-clockwise-rotation)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"1325px","top":"116px","animationName":"customef7dbaa03ecee","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","position":"unset","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"100px","height":"100px","backgroundImage":"var(--counter-clockwise-rotation)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"1325px","top":"116px","animationName":"customef7dbaa03ecee","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","position":"unset","cursor":"pointer"}}}, 
 },
},
tRectx0x8: {
defaultStyle: {
            default: {"width":"100px","height":"100px","backgroundImage":"var(--clockwise-rotation-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"customd42ab8110187c","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse","left":"1325px","top":"116px","position":"unset"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"100px","height":"100px","backgroundImage":"var(--clockwise-rotation-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","animationName":"customd42ab8110187c","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"reverse","left":"1325px","top":"116px","position":"unset"}}}, 
 },
},
tRectx0x9: {
defaultStyle: {
            default: {"width":"100px","height":"100px","backgroundImage":"var(--buttentext-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"1325px","top":"116px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"100px","height":"100px","backgroundImage":"var(--buttentext-active)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","position":"unset","left":"1325px","top":"116px","animationName":""}}}, 
 },
},
tRectx0x10: {
defaultStyle: {
            default: {"width":"100px","height":"100px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-03-13/13e903862a96413986cd437abe086e8d.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"1325px","top":"116px","animationName":"customb357f6a10f2d4","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","position":"unset","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"100px","height":"100px","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-03-13/13e903862a96413986cd437abe086e8d.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"100% 100%","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","left":"1325px","top":"116px","animationName":"customb357f6a10f2d4","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal","position":"unset","cursor":"pointer"}}}, 
 },
},
tComponentx0x11: {
defaultStyle: {
            default: {"width":"1920px","height":"1080px","margin":"0 auto","backgroundColor":"rgba(0, 0, 0, 0)","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
name:"sectionPopComponent",
cStyle:{"wrapper":{"default":{"width":"1920px","height":"1080px","margin":"0 auto","backgroundColor":"rgba(0, 0, 0, 0)","position":"unset","left":"0px","top":"0px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/sectionPop",
componentName:"sectionPopComponent", 
 },
},
});
const setProvider = () => {
provide('ecologicalCloudAllState', state);
provide('removeExistedMapScenes', removeExistedMapScenes);
provide('closeRealtimeSide', closeRealtimeSide);
};
const removeExistedMapScenes = () => {
/**
 * 移除已有的地图场景
 */
// console.log('调用生态云整体-页面-的移除地图场景方法');
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'setAppAR', // 消息名称
  data: state.removeAppARMesData,
});

};
const closeRealtimeSide = () => {
/**
 * 关闭实时数据侧边栏
 * (市州、区县行政区级别下关闭)
 */
const regionLevelText = getRegionLevel(global.REGION_CODE);
state.realtimeBtnActive = false;
};
const logPop = (data) => {
global.waterPopData = data;
console.log(data, global.waterPopData, '接收到的断面信息')

};
const onclick1741845499096 = () => {
// 设置变量值
state.realtimeBtnActive = true;
};
 function handleWindowResize() {
                            setPageScale('t-l-c-ecologicalCloudAll', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setProvider();
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "changeRegion", // 消息名称
data: {"REGION_NAME":global.REGION_NAME,"REGION_CODE":global.REGION_CODE}, // 发送的数据
});
/* 接收socket.io消息 */
const onSocketChange94b4b70aa0cf4d6687d7 = function (data) {
if(data.type === "showPopup"){
try{
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'isWaterPop',
                    value:true,
                    data: {
                      isWaterPop: true
                    },
                  });
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'waterPopData',
                    value:data.data.data,
                    data: {
                      waterPopData: data.data.data
                    },
                  });
// 执行自定义方法
logPop(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange94b4b70aa0cf4d6687d7);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange94b4b70aa0cf4d6687d7);
});
onMounted(() => {
setPageScale('t-l-c-ecologicalCloudAll', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tComponentx0x3ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3.default, componentState.tComponentx0x3?.[state.screenSize]));

 const tComponentx0x4ComputedData = computed(() => _.merge({}, componentState.tComponentx0x4.default, componentState.tComponentx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

 const tRectx0x7ComputedData = computed(() => _.merge({}, componentState.tRectx0x7.default, componentState.tRectx0x7?.[state.screenSize]));

 const tRectx0x8ComputedData = computed(() => _.merge({}, componentState.tRectx0x8.default, componentState.tRectx0x8?.[state.screenSize]));

 const tRectx0x9ComputedData = computed(() => _.merge({}, componentState.tRectx0x9.default, componentState.tRectx0x9?.[state.screenSize]));

 const tRectx0x10ComputedData = computed(() => _.merge({}, componentState.tRectx0x10.default, componentState.tRectx0x10?.[state.screenSize]));

 const tComponentx0x11ComputedData = computed(() => _.merge({}, componentState.tComponentx0x11.default, componentState.tComponentx0x11?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tComponentx0x3ComputedData,
tComponentx0x4ComputedData,
tRectx0x5ComputedData,
tRectx0x6ComputedData,
tRectx0x7ComputedData,
tRectx0x8ComputedData,
tRectx0x9ComputedData,
tRectx0x10ComputedData,
tComponentx0x11ComputedData,
onclick1741845499096,
};
},
};