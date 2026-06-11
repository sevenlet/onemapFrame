window.cockpitAllNewComponent = {
template: 
`<div id="t-l-c-cockpitAllNew" class="t-l-c-cockpitAllNew" >` +
`<t-rect id="t-rect-97f6.887018e32" class="cockpitAllNew-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-a7b4.7268370cb" class="cockpitAllNew-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-cad6.8dac5df63" class="cockpitAllNew-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-component id="t-component-ed5b.377c211ef" class="cockpitAllNew-t-component-0-3"  :name="tComponentx0x3ComputedData.name" :loading="tComponentx0x3ComputedData.loading" :c-style="tComponentx0x3ComputedData.cStyle" :src="tComponentx0x3ComputedData.src" :component-name="tComponentx0x3ComputedData.componentName" :page-id="tComponentx0x3ComputedData.pageId" :page-code="tComponentx0x3ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-b8b5.191fd21e6" class="cockpitAllNew-t-component-0-4"  :name="tComponentx0x4ComputedData.name" :loading="tComponentx0x4ComputedData.loading" :c-style="tComponentx0x4ComputedData.cStyle" :src="tComponentx0x4ComputedData.src" :component-name="tComponentx0x4ComputedData.componentName" :page-id="tComponentx0x4ComputedData.pageId" :page-code="tComponentx0x4ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-f409.04044ec06" class="cockpitAllNew-t-component-0-5"  :name="tComponentx0x5ComputedData.name" :loading="tComponentx0x5ComputedData.loading" :c-style="tComponentx0x5ComputedData.cStyle" :src="tComponentx0x5ComputedData.src" :component-name="tComponentx0x5ComputedData.componentName" :page-id="tComponentx0x5ComputedData.pageId" :page-code="tComponentx0x5ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-ac00.935e07ee8" class="cockpitAllNew-t-component-0-6"  :name="tComponentx0x6ComputedData.name" :c-style="tComponentx0x6ComputedData.cStyle" :src="tComponentx0x6ComputedData.src" :component-name="tComponentx0x6ComputedData.componentName">` +
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
   appURL: "http://192.168.0.202:7777/mapgo5.0/preview.html?appID=600e7e5a31914ca5a057f74a08302395&appType=2D&appName=%E9%A9%BE%E9%A9%B6%E8%88%B1-%E6%A6%82%E8%A7%88-%E5%9C%BA%E6%99%AF%E6%95%B4%E5%90%88",
   isSendAppAR: false,
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
            default: {"width":"1920px","height":"1080px","position":"unset","left":"0px","top":"0px","backgroundColor":"var(--jsc-mark)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1920px","height":"1080px","position":"unset","left":"0px","top":"0px","backgroundColor":"var(--jsc-mark)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}}}, 
 },
},
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
            default: {"position":"absolute","width":"590px","height":"912px","margin":"0 auto","backgroundColor":"rgba(23, 62, 228, 0)","left":"52px","top":"100px"},
            
            },
 default: { 
 
name:"cockpitLeftComponent",
loading:true,
cStyle:{"wrapper":{"default":{"position":"absolute","width":"590px","height":"912px","margin":"0 auto","backgroundColor":"rgba(23, 62, 228, 0)","left":"52px","top":"100px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/[object Object]",
componentName:"cockpitLeftComponent",
pageId:"4879e655f3464245a4f837ef0d2a8afe",
pageCode:"cockpitLeft", 
 },
},
tComponentx0x4: {
defaultStyle: {
            default: {"position":"unset","width":"590px","height":"890px","margin":"0 auto","backgroundColor":"rgba(23, 62, 228, 0)","left":"665px","top":"100px","animationName":""},
            
            },
 default: { 
 
name:"cockpitCenterComponent",
loading:true,
cStyle:{"wrapper":{"default":{"position":"unset","width":"590px","height":"890px","margin":"0 auto","backgroundColor":"rgba(23, 62, 228, 0)","left":"665px","top":"100px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/[object Object]",
componentName:"cockpitCenterComponent",
pageId:"b782eb80e8c4449d96758f5f368cb37a",
pageCode:"cockpitCenter", 
 },
},
tComponentx0x5: {
defaultStyle: {
            default: {"position":"unset","width":"590px","height":"912px","margin":"0 auto","backgroundColor":"rgba(23, 62, 228, 0)","left":"1279px","top":"100px","animationName":""},
            
            },
 default: { 
 
name:"cockpitNewRightComponent",
loading:true,
cStyle:{"wrapper":{"default":{"position":"unset","width":"590px","height":"912px","margin":"0 auto","backgroundColor":"rgba(23, 62, 228, 0)","left":"1279px","top":"100px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/[object Object]",
componentName:"cockpitNewRightComponent",
pageId:"5ae1f34696ea40c3bec6b95045503465",
pageCode:"cockpitNewRight", 
 },
},
tComponentx0x6: {
defaultStyle: {
            default: {"width":"1920px","height":"191px","margin":"0 auto","backgroundColor":"","top":"891px","left":"0px","position":"unset","animationName":"","pointerEvents":"none"},
            
            },
 default: { 
 
name:"footerNavMenuComponent",
cStyle:{"wrapper":{"default":{"width":"1920px","height":"191px","margin":"0 auto","backgroundColor":"","top":"891px","left":"0px","position":"unset","animationName":"","pointerEvents":"none"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/footerNavMenu",
componentName:"footerNavMenuComponent", 
 },
},
});
const clearTime = () => {
// 点击除驾驶舱外的都关闭轮播清除定时器
clearInterval(global.intervalId);
};
const setloop = () => {

// global.isLoop = true;
global.currentIndex = 0;
// 当前时间
let curTime = '';

// 定义函数用于更新变量状态
function updateSelection() {
    // 将当前索引对应的变量设为 true，其余设为 false
    switch (global.currentIndex) {
        case 0:
            global.isSelectedBg = 0;
            rootData.rootSocket.emit('message', {
                room: global.socketRoom, // 房间号
                type: 'changeMonitorTime', // 消息名称
                data: {
                    time: global.cityTime, // 时间
                },
            });
            curTime = global.cityTime;
            break;
        case 1:
            global.isSelectedBg = 1;
            rootData.rootSocket.emit('message', {
                room: global.socketRoom, // 房间号
                type: 'changeMonitorTime', // 消息名称
                data: {
                    time: global.cityTime, // 时间
                },
            });
            curTime = global.cityTime;
            break;
        case 2:
            global.isSelectedBg = 2;
            rootData.rootSocket.emit('message', {
                room: global.socketRoom, // 房间号
                type: 'changeMonitorTime', // 消息名称
                data: {
                    time: global.waterTime, // 时间
                },
            });
            curTime = global.waterTime;
            break;
        case 3:
            global.isSelectedBg = 3;
            rootData.rootSocket.emit('message', {
                room: global.socketRoom, // 房间号
                type: 'changeMonitorTime', // 消息名称
                data: {
                    time: global.waterTime, // 时间
                },
            });
            curTime = global.waterTime;
            break;
        case 4:
            global.isSelectedBg = 4;
            rootData.rootSocket.emit('message', {
                room: global.socketRoom, // 房间号
                type: 'changeMonitorTime', // 消息名称
                data: {
                    time: global.offshoreTime, // 时间
                },
            });
            curTime = global.offshoreTime;
            break;
        case 5:
            global.isSelectedBg = 5;
            rootData.rootSocket.emit('message', {
                room: global.socketRoom, // 房间号
                type: 'changeMonitorTime', // 消息名称
                data: {
                    time: '', // 时间
                },
            });
            curTime = '';
            break;
        case 6:
            global.isSelectedBg = 6;
            rootData.rootSocket.emit('message', {
                room: global.socketRoom, // 房间号
                type: 'changeMonitorTime', // 消息名称
                data: {
                    time: '', // 时间
                },
            });
            curTime = '';
            break;
        case 7:
            global.isSelectedBg = 7;
            rootData.rootSocket.emit('message', {
                room: global.socketRoom, // 房间号
                type: 'changeMonitorTime', // 消息名称
                data: {
                    time: '', // 时间
                },
            });
            curTime = '';
            break;
        case 8:
            global.isSelectedBg = 8;
            rootData.rootSocket.emit('message', {
                room: global.socketRoom, // 房间号
                type: 'changeMonitorTime', // 消息名称
                data: {
                    time: '', // 时间
                },
            });
            curTime = '';
            break;
        case 9:
            global.isSelectedBg = 9;
            rootData.rootSocket.emit('message', {
                room: global.socketRoom, // 房间号
                type: 'changeMonitorTime', // 消息名称
                data: {
                    time: '', // 时间
                },
            });
            curTime = '';
            break;
        case 10:
            global.isSelectedBg = 10;
            rootData.rootSocket.emit('message', {
                room: global.socketRoom, // 房间号
                type: 'changeMonitorTime', // 消息名称
                data: {
                    time: '', // 时间
                },
            });
            curTime = '';
            break;
        case 11:
            global.isSelectedBg = 11;
            rootData.rootSocket.emit('message', {
                room: global.socketRoom, // 房间号
                type: 'changeMonitorTime', // 消息名称
                data: {
                    time: '', // 时间
                },
            });
            curTime = '';
            break;
    }
    // 打印当前状态，方便调试
    rootData.rootSocket.emit('message', {
        room: global.socketRoom, // 房间号
        type: 'changeIndicator', // 消息名称
        data: {
            indicator: global.currentIndex + 1,
        },
    });
    // 更新索引
    global.currentIndex = (global.currentIndex + 1) % 12;
    global.mapChangeAllStatusParams = {
        time: curTime,
        indicator: global.currentIndex,
    };
}
// 初始调用一次更新函数
updateSelection();
// 每隔 30 秒调用一次更新函数
global.intervalId = '';
if (global.isLoop) {
    global.intervalId = setInterval(updateSelection, 30 * 1000);
} else {
    clearInterval(global.intervalId);
}
// watch([
//     () => global.isLoop,
// ], () => {
// }, {
//     deep: true,
// })


};
const setMsgTwo = () => {
let theme = '';
if (global.theme === '蓝色主题') {
    theme = 'blue';
} else if (global.theme === 'PC浅色版') {
    theme = 'pc-light'
} else {
    theme = 'green';
}
rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: 'mapChangeAllStatus', // 消息名称
    data: {
        indicator: global.currentIndex, // 指标
        time: global.cityTime, // 时间
        REGION_NAME: global.REGION_NAME, // 行政区名称，非必须
        REGION_CODE: global.REGION_CODE, // 行政区编码
        theme: theme,
        // 不改变原有参数的基础上添加参数
        ...global.mapChangeAllStatusParams,
    },
});
};
const setMsgThree = () => {
let theme = '';
if (global.theme === '蓝色主题') {
    theme = 'blue';
} else if (global.theme === 'PC浅色版') {
    theme = 'pc-light'
} else {
    theme = 'green';
}
rootData.rootSocket.emit('message', {
    room: global.socketRoom, // 房间号
    type: 'threeJSMapChangeAllStatus', // 消息名称
    data: {
        indicator: global.currentIndex, // 指标
        time: global.cityTime, // 时间
        REGION_NAME: global.REGION_NAME, // 行政区名称，非必须
        REGION_CODE: global.REGION_CODE, // 行政区编码
        theme: theme,
        // 默认驾驶舱（如果默认选中菜单改了，需要同步改）
        mapType: 'jsc', // 当前专题类型，驾驶舱： jsc  生态云：fjsty
    },
});
};
const openAgentPage = (url) => {
console.log(url, '打开智能体对应的页面')
if (url) {
  winow.open(url);
}
};
const watchRegionCode = () => {
watch(() => global.REGION_CODE, () => {
  // 选中市州、区县时，发送二维场景信息
  const regionLevelText = getRegionLevel(global.REGION_CODE);
  if (regionLevelText === 'province') {
    state.isSendAppAR = false;
  }
  if ((regionLevelText === 'city' || regionLevelText === 'county') && !state.isSendAppAR) {
    rootData.rootSocket.emit('message', {
      room: global.socketRoom, // 房间号
      type: 'setAppAR', // 消息名称
      data: [
        {
          resCode: 'air',
          resName: '大气',
          opType: 'add',
          appURL: state.appURL,
        }
      ]
    });
    state.isSendAppAR = true;
  }
});
};
 function handleWindowResize() {
                            setPageScale('t-l-c-cockpitAllNew', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
setloop();
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'bottomMenuButtonText',
                    value:'概览',
                    data: {
                      bottomMenuButtonText: '概览'
                    },
                  });
/* 接收socket.io消息 */
const onSocketChange4f2ba32735e44e4d8a5f = function (data) {
if(data.type === "mapLoaded"){
try{
// 执行自定义方法
setMsgTwo();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange4f2ba32735e44e4d8a5f);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange4f2ba32735e44e4d8a5f);
});
/* 接收socket.io消息 */
const onSocketChange199fd1ec876c4e539e5e = function (data) {
if(data.type === "threeJSMapLoaded"){
try{
// 执行自定义方法
setMsgThree();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange199fd1ec876c4e539e5e);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange199fd1ec876c4e539e5e);
});
/* 接收socket.io消息 */
const onSocketChange73bbd0ed8e0143778ac0 = function (data) {
if(data.type === "changeRegionCodeFromMap"){
try{
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'REGION_CODE',
                    value:data.data.REGION_CODE,
                    data: {
                      REGION_CODE: data.data.REGION_CODE
                    },
                  });
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange73bbd0ed8e0143778ac0);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange73bbd0ed8e0143778ac0);
});
/* 接收socket.io消息 */
const onSocketChangefc263240d1334669a3a4 = function (data) {
if(data.type === "lxz_open_external_page"){
try{
// 执行自定义方法
openAgentPage(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangefc263240d1334669a3a4);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangefc263240d1334669a3a4);
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "changeRegion", // 消息名称
data: {"REGION_NAME":global.REGION_NAME,"REGION_CODE":global.REGION_CODE}, // 发送的数据
});
// 执行自定义方法
watchRegionCode();
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'bottomMenuExpandState',
                    value:false,
                    data: {
                      bottomMenuExpandState: false
                    },
                  });
onUnmounted(() => {
// 页面离开时的操作
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
// 执行自定义方法
clearTime();
});
onMounted(() => {
setPageScale('t-l-c-cockpitAllNew', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
runAnimation('t-rect-97f6.887018e32', [{"name":"animate__fadeIn","delay":"animate__delay-4s"}]);
runAnimation('t-component-ed5b.377c211ef', [{"name":"animate__fadeIn","delay":"animate__delay-4-4s"}]);
runAnimation('t-component-b8b5.191fd21e6', [{"name":"animate__fadeIn","delay":"animate__delay-4-4s"}]);
runAnimation('t-component-f409.04044ec06', [{"name":"animate__fadeIn","delay":"animate__delay-4-4s"}]);
runAnimation('t-component-ac00.935e07ee8', [{"name":"animate__fadeInUp","delay":"animate__delay-0s"}]);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tComponentx0x3ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3.default, componentState.tComponentx0x3?.[state.screenSize]));

 const tComponentx0x4ComputedData = computed(() => _.merge({}, componentState.tComponentx0x4.default, componentState.tComponentx0x4?.[state.screenSize]));

 const tComponentx0x5ComputedData = computed(() => _.merge({}, componentState.tComponentx0x5.default, componentState.tComponentx0x5?.[state.screenSize]));

 const tComponentx0x6ComputedData = computed(() => _.merge({}, componentState.tComponentx0x6.default, componentState.tComponentx0x6?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tRectx0x0ComputedData,
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tComponentx0x3ComputedData,
tComponentx0x4ComputedData,
tComponentx0x5ComputedData,
tComponentx0x6ComputedData,
};
},
};