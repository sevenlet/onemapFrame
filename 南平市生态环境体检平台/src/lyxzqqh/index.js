window.lyxzqqhComponent = {
template: 
`<div id="t-l-c-lyxzqqh" class="t-l-c-lyxzqqh" >` +
`<t-row id="t-row-3ab0.004e32a37" class="lyxzqqh-t-row-0-1"  :c-style="tRowx0x1ComputedData.cStyle" :gutter="tRowx0x1ComputedData.gutter" :justify="tRowx0x1ComputedData.justify" :align="tRowx0x1ComputedData.align">` +
`<t-checkbox id="t-checkbox-9e14.354734339" class="lyxzqqh-t-checkbox-0-1-0"  :data="tCheckboxx0x1x0ComputedData.data" :active="replaceCssVariables(filterData(state.basinSelect, componentPropBindingMap?.['t-checkbox-9e14.354734339']['active'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data-alias="tCheckboxx0x1x0ComputedData.dataAlias" :border="tCheckboxx0x1x0ComputedData.border" :use-button="tCheckboxx0x1x0ComputedData.useButton" :c-style="tCheckboxx0x1x0ComputedData.cStyle" @change="onchange1735122132777">` +
`</t-checkbox>` +
`<t-checkbox id="t-checkbox-61c7.80ae9d956" class="lyxzqqh-t-checkbox-0-1-1"  :data="tCheckboxx0x1x1ComputedData.data" :active="replaceCssVariables(filterData(state.regionSelect, componentPropBindingMap?.['t-checkbox-61c7.80ae9d956']['active'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data-alias="tCheckboxx0x1x1ComputedData.dataAlias" :border="tCheckboxx0x1x1ComputedData.border" :use-button="tCheckboxx0x1x1ComputedData.useButton" :c-style="tCheckboxx0x1x1ComputedData.cStyle" @change="onchange1763191978076_0_0">` +
`</t-checkbox>` +
`</t-row>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-c7d9.0826353f7":{"attributeName":"tRectx0x0"},"t-row-3ab0.004e32a37":{"attributeName":"tRowx0x1","cStyle":{"filters":[]},"gutter":{"filters":[]},"justify":{"filters":[]},"align":{"filters":[]}},"t-checkbox-9e14.354734339":{"attributeName":"tCheckboxx0x1x0","data":{"filters":[]},"active":{"filters":[]},"dataAlias":{"filters":[]},"border":{"filters":[]},"useButton":{"filters":[]},"cStyle":{"filters":[]}},"t-checkbox-61c7.80ae9d956":{"attributeName":"tCheckboxx0x1x1","data":{"filters":[]},"active":{"filters":[]},"dataAlias":{"filters":[]},"border":{"filters":[]},"useButton":{"filters":[]},"cStyle":{"filters":[]}}};
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
   regionSelect: [],
   basinSelect: ["basin"],
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
tRowx0x1: {
defaultStyle: {
            default: {"width":"164px","height":"auto","display":"flex","justifyContent":"space-evenly","alignItems":"center","left":"-6px","top":"1px","backgroundColor":"var(--business-dialog-title-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingTop":"3px","paddingBottom":"3px"},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"width":"164px","height":"auto","display":"flex","justifyContent":"space-evenly","alignItems":"center","left":"-6px","top":"1px","backgroundColor":"var(--business-dialog-title-bg)","borderTopLeftRadius":"4px","borderTopRightRadius":"4px","borderBottomLeftRadius":"4px","borderBottomRightRadius":"4px","paddingTop":"3px","paddingBottom":"3px"}}},
gutter:0,
justify:"space-between",
align:"middle", 
 },
},
tCheckboxx0x1x0: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justifyContent":"center","width":"auto","height":"28px","position":"unset","left":"13px","top":"4px","animationName":"","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","backgroundColor":"","paddingLeft":"0px","paddingRight":"0px"},
            
            },
 default: { 
 
data:[{"label":"流域","name":"basin"}],
active:["basin"],
dataAlias:{"label":"label","value":"name","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justifyContent":"center","width":"auto","height":"28px","position":"unset","left":"13px","top":"4px","animationName":"","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","backgroundColor":"","paddingLeft":"0px","paddingRight":"0px"}},"rectangle":{"active":{"background":"var(--business-btn-active)","borderLeft":"1px none var(--business-theme)","borderTop":"1px none var(--business-theme)","borderRight":"1px none var(--business-theme)","borderBottom":"1px none var(--business-theme)","backgroundColor":"var(--business-checkbox-active)"},"default":{"backgroundColor":"rgba(23, 62, 228, 0)","borderLeft":"1px solid var(--targer-checkbox-border)","borderTop":"1px solid var(--targer-checkbox-border)","borderRight":"1px solid var(--targer-checkbox-border)","borderBottom":"1px solid var(--targer-checkbox-border)"},"hover":{"borderLeft":"1px solid var(--business-theme)","borderTop":"1px solid var(--business-theme)","borderRight":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)"}},"icon":{"default":{"left":"5px","top":"2px"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"8px","fontSize":"var(--business-text-size-14)"}},"itemWrapper":{"default":{"marginRight":"5px"}}}, 
 },
},
tCheckboxx0x1x1: {
defaultStyle: {
            default: {"display":"flex","alignItems":"center","justifyContent":"center","width":"auto","height":"23px","position":"unset","left":"84px","top":"7px","animationName":"","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","backgroundColor":"","paddingLeft":"0px","paddingRight":"0px"},
            
            },
 default: { 
 
data:[{"label":"行政区","name":"region"}],
active:[],
dataAlias:{"label":"label","value":"name","disabled":"disabled"},
border:false,
useButton:false,
cStyle:{"wrapper":{"default":{"display":"flex","alignItems":"center","justifyContent":"center","width":"auto","height":"23px","position":"unset","left":"84px","top":"7px","animationName":"","borderTopLeftRadius":"10px","borderTopRightRadius":"10px","borderBottomLeftRadius":"10px","borderBottomRightRadius":"10px","backgroundColor":"","paddingLeft":"0px","paddingRight":"0px"}},"rectangle":{"active":{"background":"var(--business-btn-active)","borderLeft":"1px none var(--business-theme)","borderTop":"1px none var(--business-theme)","borderRight":"1px none var(--business-theme)","borderBottom":"1px none var(--business-theme)","backgroundColor":"var(--business-checkbox-active)"},"default":{"backgroundColor":"rgba(23, 62, 228, 0)","borderLeft":"1px solid var(--targer-checkbox-border)","borderTop":"1px solid var(--targer-checkbox-border)","borderRight":"1px solid var(--targer-checkbox-border)","borderBottom":"1px solid var(--targer-checkbox-border)"},"hover":{"borderLeft":"1px solid var(--targer-checkbox-border)","borderTop":"1px solid var(--targer-checkbox-border)","borderRight":"1px solid var(--targer-checkbox-border)","borderBottom":"1px solid var(--targer-checkbox-border)"}},"icon":{"default":{"left":"5px","top":"2px"}},"label":{"default":{"color":"rgba(255, 255, 255, 1)","paddingLeft":"8px","fontSize":"var(--business-text-size-14)"}},"itemWrapper":{"default":{"marginRight":"5px"}}}, 
 },
},
});
const handleSelect = (type,value) => {
// 设置显示与隐藏
let visible = false
if(value.length){
  visible = true
}else{
  visible = false
}
console.log('1111111111111111111111')
rootData.rootSocket.emit(
  'message',  // 固定的消息名称，不能修改
  {
    room: global.socketRoom,  // 房间号，一般使用全局变量socketRoom
    type: 'showRegionOrBasin',  // 消息类型名称
    data: {   
      type: type,              
      visible: visible,
    }
  }
);
};
const watchleftActiveMenu = () => {
watch(() => global.leftSubjectActiveMenu, (newValue,oldValue) => {
  if (newValue === '饮用水') {
    // 取消选中流域
    handleSelect('basin', []);
    state.basinSelect = []
    // 选中行政区
    handleSelect('region', ['region']);
    state.regionSelect = ["region"]
  }else if(oldValue === '饮用水' && newValue !== '饮用水'){
    // 选中流域
    handleSelect('basin', ['basin']);
    state.basinSelect = ['basin']
    // 取消选中行政区
    handleSelect('region', []);
    state.regionSelect = []
  }
}, { immediate: true })
};
const onchange1735122132777 = (data) => {
// 执行自定义方法
handleSelect("basin",data);
};
const onchange1763191978076_0_0 = (data) => {
// 执行自定义方法
handleSelect("region",data);
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-lyxzqqh', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
watchleftActiveMenu();
onBeforeUnmount(() => {
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "showRegionOrBasin", // 消息名称
data: {"visible":true,"type":"region"}, // 发送的数据
});
/* 发送socket消息 */
rootData.rootSocket.emit('message', {
room: global.socketRoom, // 房间号
type: "showRegionOrBasin", // 消息名称
data: {"visible":false,"type":"basin"}, // 发送的数据
});
});
onMounted(() => {
setPageScale('t-l-c-lyxzqqh', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRowx0x1ComputedData = computed(() => _.merge({}, componentState.tRowx0x1.default, componentState.tRowx0x1?.[state.screenSize]));

 const tCheckboxx0x1x0ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x1x0.default, componentState.tCheckboxx0x1x0?.[state.screenSize]));

 const tCheckboxx0x1x1ComputedData = computed(() => _.merge({}, componentState.tCheckboxx0x1x1.default, componentState.tCheckboxx0x1x1?.[state.screenSize]));

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
tRowx0x1ComputedData,
tCheckboxx0x1x0ComputedData,
tCheckboxx0x1x1ComputedData,
onchange1735122132777,
onchange1763191978076_0_0,
};
},
};