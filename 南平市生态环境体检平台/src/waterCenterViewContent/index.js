window.waterCenterViewContentComponent = {
template: 
`<div id="t-l-c-waterCenterViewContent" class="t-l-c-waterCenterViewContent" >` +
`<t-button id="t-button-cb37.8d1da106b" class="waterCenterViewContent-t-button-0-0"  :label="tButtonx0x0ComputedData.label" :round="tButtonx0x0ComputedData.round" :plain="tButtonx0x0ComputedData.plain" :disabled="tButtonx0x0ComputedData.disabled" :type="tButtonx0x0ComputedData.type" :size="tButtonx0x0ComputedData.size" :native-type="tButtonx0x0ComputedData.native-type" :c-style="tButtonx0x0ComputedData.cStyle" @click="onclick1766369515905">` +
`</t-button>` +
`<t-button id="t-button-d590.3071cb69c" class="waterCenterViewContent-t-button-0-1"  :label="tButtonx0x1ComputedData.label" :round="tButtonx0x1ComputedData.round" :plain="tButtonx0x1ComputedData.plain" :disabled="tButtonx0x1ComputedData.disabled" :type="tButtonx0x1ComputedData.type" :size="tButtonx0x1ComputedData.size" :native-type="tButtonx0x1ComputedData.native-type" :c-style="tButtonx0x1ComputedData.cStyle" @click="onclick1766370462065">` +
`</t-button>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-button-cb37.8d1da106b":{"attributeName":"tButtonx0x0","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-button-d590.3071cb69c":{"attributeName":"tButtonx0x1","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}}};
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
tButtonx0x0: {
defaultStyle: {
            default: {"width":"80px","height":"28px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-dialog-title-bg)","fontSize":"var(--business-text-size-12)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","position":"unset","left":"320px","top":"1px","marginLeft":"0px"},
            
            },
 default: { 
 
label:"远程调度",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"80px","height":"28px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-dialog-title-bg)","fontSize":"var(--business-text-size-12)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","position":"unset","left":"320px","top":"1px","marginLeft":"0px"},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tButtonx0x1: {
defaultStyle: {
            default: {"width":"80px","height":"28px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-dialog-title-bg)","fontSize":"var(--business-text-size-12)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","left":"320px","position":"unset","top":"38px","marginLeft":"0px"},
            
            },
 default: { 
 
label:"执行反馈",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"80px","height":"28px","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","backgroundColor":"var(--business-dialog-title-bg)","fontSize":"var(--business-text-size-12)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","animationName":"","left":"320px","position":"unset","top":"38px","marginLeft":"0px"},"hover":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"active":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"},"focus":{"background":"var(--business-btn-active)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
});
const handleOpenXcqk = () => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'createDialog',  // 消息类型名称
    data: {
      "params": {               // 消息内容，对象格式
        'title': '执行反馈',
        'maxWidth': '1400px',
        'maxHeight': '800px',
        'minWidth': '1000px',
        'minHeight': '600px',
        'contentComName': 'yhbzInspectionsituationComponent',
      }
    }
  }
);
};
const handleOpenCsk = () => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'createDialog',  // 消息类型名称
    data: {
      "params": {               // 消息内容，对象格式
        'title': '附件预览',
        'maxWidth': '650px',
        'maxHeight': '1000px',
        'minWidth': '650px',
        'minHeight': '1000px',
        'contentComName': 'measuresLibraryPopComponent',
        'hiddenScaleButton': true,
      }
    }
  }
);
};
const handleOpenSpzl = () => {
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'createDialog',  // 消息类型名称
    data: {
      "params": {               // 消息内容，对象格式
        'title': '视频总览',
        'maxWidth': '1860px',
        'maxHeight': '1020px',
        'minWidth': '1860px',
        'minHeight': '1020px',
        'contentComName': 'videoOverviewPopComponent',
        'hiddenScaleButton': true,
      }
    }
  }
);
};
const onclick1766369515905 = () => {
// 执行自定义方法
openWX();
};
const onclick1766370462065 = () => {
// 执行自定义方法
handleOpenXcqk();
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-waterCenterViewContent', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-waterCenterViewContent', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tButtonx0x0ComputedData = computed(() => _.merge({}, componentState.tButtonx0x0.default, componentState.tButtonx0x0?.[state.screenSize]));

 const tButtonx0x1ComputedData = computed(() => _.merge({}, componentState.tButtonx0x1.default, componentState.tButtonx0x1?.[state.screenSize]));

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
tButtonx0x0ComputedData,
tButtonx0x1ComputedData,
onclick1766369515905,
onclick1766370462065,
};
},
};