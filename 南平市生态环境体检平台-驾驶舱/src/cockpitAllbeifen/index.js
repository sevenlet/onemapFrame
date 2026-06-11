window.cockpitAllbeifenComponent = {
template: 
`<div id="t-l-c-cockpitAllbeifen" class="t-l-c-cockpitAllbeifen" >` +
`<t-iframe id="t-iframe-e8f9.8405db45" class="cockpitAll-t-iframe-0-0"  :src="replaceCssVariables(state.iframeUrl, global?.theme || global?.activeTheme || '默认主题')" :srcdoc="tIframex0x0ComputedData.srcdoc" :scrolling="tIframex0x0ComputedData.scrolling" :c-style="tIframex0x0ComputedData.cStyle" :socket-url="replaceCssVariables(global.socketIp, global?.theme || global?.activeTheme || '默认主题')" :room-id="replaceCssVariables(global.socketRoom, global?.theme || global?.activeTheme || '默认主题')">` +
`</t-iframe>` +
`<t-component id="t-component-ac00.935e07ee8" class="cockpitAll-t-component-0-5"  :name="tComponentx0x5ComputedData.name" :c-style="tComponentx0x5ComputedData.cStyle" :src="tComponentx0x5ComputedData.src" :component-name="tComponentx0x5ComputedData.componentName">` +
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
   iframeUrl: "http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f8f896326ab0447e8b14f3b1cd6a1174_1_1/index.html#/root",
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
tIframex0x0: {
defaultStyle: {
            default: {"width":"1920px","height":"1080px","position":"unset","left":"0px","top":"0px","animationName":""},
            
            },
 default: { 
 
src:"http://192.168.0.202:7777/lego-generated-apps/lego_file/app/src/f8f896326ab0447e8b14f3b1cd6a1174_1_1/index.html#/root",
srcdoc:"",
scrolling:"no",
cStyle:{"wrapper":{"default":{"width":"1920px","height":"1080px","position":"unset","left":"0px","top":"0px","animationName":""}}},
socketUrl:"http://192.168.0.202:7777/socketPath",
roomId:"admin", 
 },
},
tComponentx0x5: {
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
                            setPageScale('t-l-c-cockpitAllbeifen', global.appScaleMode, 'normal');
                           
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
const onSocketChange3d8d668b8af24c7c9b24 = function (data) {
if(data.type === "mapLoaded"){
try{
// 执行自定义方法
setMsgTwo();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange3d8d668b8af24c7c9b24);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange3d8d668b8af24c7c9b24);
});
/* 接收socket.io消息 */
const onSocketChangeb4924bf07da84718a2eb = function (data) {
if(data.type === "threeJSMapLoaded"){
try{
// 执行自定义方法
setMsgThree();
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChangeb4924bf07da84718a2eb);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChangeb4924bf07da84718a2eb);
});
/* 接收socket.io消息 */
const onSocketChange7eb9d3a5368a42f09f58 = function (data) {
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
};rootData.rootOn('rootSocket:change', onSocketChange7eb9d3a5368a42f09f58);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange7eb9d3a5368a42f09f58);
});
/* 接收socket.io消息 */
const onSocketChange35eb99adff3946d0a2b4 = function (data) {
if(data.type === "lxz_open_external_page"){
try{
// 执行自定义方法
openAgentPage(data.data);
} catch (error) {
console.error('参数格式错误', error);
};
};
};rootData.rootOn('rootSocket:change', onSocketChange35eb99adff3946d0a2b4);onUnmounted(() => {
  rootData.rootOff('rootSocket:change', onSocketChange35eb99adff3946d0a2b4);
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
setPageScale('t-l-c-cockpitAllbeifen', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
runAnimation('t-component-ac00.935e07ee8', [{"name":"animate__fadeInUp","delay":"animate__delay-4s"}]);
});
 const tIframex0x0ComputedData = computed(() => _.merge({}, componentState.tIframex0x0.default, componentState.tIframex0x0?.[state.screenSize]));

 const tComponentx0x5ComputedData = computed(() => _.merge({}, componentState.tComponentx0x5.default, componentState.tComponentx0x5?.[state.screenSize]));

return {
replaceCssVariables,
global,
state,
componentState,
tIframex0x0ComputedData,
tComponentx0x5ComputedData,
};
},
};
