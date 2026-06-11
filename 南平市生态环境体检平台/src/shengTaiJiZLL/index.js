window.shengTaiJiZLLComponent = {
template: 
`<div id="t-l-c-shengTaiJiZLL" class="t-l-c-shengTaiJiZLL" >` +
`<t-rect id="t-rect-172c.ee323b01d" class="shengTaiJiZLL-t-rect-0-0"  :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle" :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label">` +
`</t-rect>` +
`<t-text id="t-text-5895.4a069281a" class="shengTaiJiZLL-t-text-0-1"  :editable="tTextx0x1ComputedData.editable" :show-title="tTextx0x1ComputedData.showTitle" :c-style="tTextx0x1ComputedData.cStyle" :label="tTextx0x1ComputedData.label">` +
`</t-text>` +
`<t-text id="t-text-790b.0ece4d5af" class="shengTaiJiZLL-t-text-0-2"  :editable="tTextx0x2ComputedData.editable" :show-title="tTextx0x2ComputedData.showTitle" :c-style="tTextx0x2ComputedData.cStyle" :label="replaceCssVariables(filterData(global.waterStationDialogGlobalVariables.baseMessage.STJZLL_AVG, componentPropBindingMap?.['t-text-790b.0ece4d5af']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-text>` +
`<t-line id="t-line-5604.4054f8de7" class="shengTaiJiZLL-t-line-0-3"  :c-style="tLinex0x3ComputedData.cStyle">` +
`</t-line>` +
`<t-text id="t-text-add5.f9d63834" class="shengTaiJiZLL-t-text-0-4"  :editable="tTextx0x4ComputedData.editable" :show-title="tTextx0x4ComputedData.showTitle" :c-style="tTextx0x4ComputedData.cStyle" :label="tTextx0x4ComputedData.label">` +
`</t-text>` +
`<t-text id="t-text-e52b.4238bafc8" class="shengTaiJiZLL-t-text-0-5"  :editable="tTextx0x5ComputedData.editable" :show-title="tTextx0x5ComputedData.showTitle" :c-style="tTextx0x5ComputedData.cStyle" :label="replaceCssVariables(filterData(global.waterStationDialogGlobalVariables.baseMessage.STJZLL_STD, componentPropBindingMap?.['t-text-e52b.4238bafc8']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-text>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-172c.ee323b01d":{"attributeName":"tRectx0x0","active":{"filters":[]},"cStyle":{"filters":[]},"tip":{"filters":[]},"label":{"filters":[]}},"t-text-5895.4a069281a":{"attributeName":"tTextx0x1","editable":{"filters":[]},"showTitle":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-790b.0ece4d5af":{"attributeName":"tTextx0x2","editable":{"filters":[]},"showTitle":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-line-5604.4054f8de7":{"attributeName":"tLinex0x3","cStyle":{"filters":[]}},"t-text-add5.f9d63834":{"attributeName":"tTextx0x4","editable":{"filters":[]},"showTitle":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}},"t-text-e52b.4238bafc8":{"attributeName":"tTextx0x5","editable":{"filters":[]},"showTitle":{"filters":[]},"cStyle":{"filters":[]},"label":{"filters":[]}}};
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
tRectx0x0: {
defaultStyle: {
            default: {"animationName":"","backgroundColor":"var(--business-show-bg15)","borderTop":"0px none rgb(23,62,228)","marginLeft":"0px","borderTopLeftRadius":"8px","borderLeft":"0px none rgb(23,62,228)","top":"-2px","left":"-1px","borderBottomLeftRadius":"8px","borderRight":"0px none rgb(23,62,228)","width":"100%","borderBottomRightRadius":"8px","borderTopRightRadius":"8px","position":"unset","borderBottom":"0px none rgb(23,62,228)","marginTop":"0px","height":"96px"},
            
            },
 default: { 
 
active:false,
cStyle:{"wrapper":{"default":{"animationName":"","backgroundColor":"var(--business-show-bg15)","borderTop":"0px none rgb(23,62,228)","marginLeft":"0px","borderTopLeftRadius":"8px","borderLeft":"0px none rgb(23,62,228)","top":"-2px","left":"-1px","borderBottomLeftRadius":"8px","borderRight":"0px none rgb(23,62,228)","width":"100%","borderBottomRightRadius":"8px","borderTopRightRadius":"8px","position":"unset","borderBottom":"0px none rgb(23,62,228)","marginTop":"0px","height":"96px"}}},
tip:false,
label:"", 
 },
},
tTextx0x1: {
defaultStyle: {
            default: {"animationName":"","backgroundColor":"","color":"var(--business-text-avianize)","textAlign":"center","display":"block","textDecoration":"none","fontStyle":"normal","float":"none","marginLeft":"41px","paddingBottom":"0px","top":"-2px","left":"-36px","pointerEvents":"none","fontSize":"var(--business-text-size-14)","lineHeight":"14px","position":"unset","paddingTop":"0px","marginTop":"8px","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","width":"100%","height":"24px","line-height":"var(--business-text-size-14)"},
            
            },
 default: { 
 
editable:false,
showTitle:false,
cStyle:{"wrapper":{"default":{"animationName":"","backgroundColor":"","color":"var(--business-text-avianize)","textAlign":"center","display":"block","textDecoration":"none","fontStyle":"normal","float":"none","marginLeft":"41px","paddingBottom":"0px","top":"-2px","left":"-36px","pointerEvents":"none","fontSize":"var(--business-text-size-14)","lineHeight":"14px","position":"unset","paddingTop":"0px","marginTop":"8px","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","width":"100%","height":"24px","line-height":"var(--business-text-size-14)"}}},
label:"生态机组流量（m/s）", 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"color":"var(--business-white)","float":"none","paddingBottom":"0px","overflow":"hidden","top":"21px","borderBottomRightRadius":"0px","borderTopRightRadius":"0px","paddingTop":"0px","textOverflow":"ellipsis","height":"18px","animationName":"","whiteSpace":"nowrap","textAlign":"justify","display":"block","textDecoration":"none","fontStyle":"normal","marginLeft":"41px","borderTopLeftRadius":"0px","max-width":"75px","left":"-29px","borderBottomLeftRadius":"0px","pointerEvents":"none","width":"75px","fontSize":"18px","lineHeight":"18px","marginBottom":"16px","position":"unset","marginTop":"8px"},
            
            },
 default: { 
 
editable:false,
showTitle:true,
cStyle:{"wrapper":{"default":{"color":"var(--business-white)","float":"none","paddingBottom":"0px","overflow":"hidden","top":"21px","borderBottomRightRadius":"0px","borderTopRightRadius":"0px","paddingTop":"0px","textOverflow":"ellipsis","height":"18px","animationName":"","whiteSpace":"nowrap","textAlign":"justify","display":"block","textDecoration":"none","fontStyle":"normal","marginLeft":"41px","borderTopLeftRadius":"0px","max-width":"75px","left":"-29px","borderBottomLeftRadius":"0px","pointerEvents":"none","width":"75px","fontSize":"18px","lineHeight":"18px","marginBottom":"16px","position":"unset","marginTop":"8px"}}},
label:"", 
 },
},
tLinex0x3: {
defaultStyle: {
            default: {"borderLeft":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg60)","top":"55px","left":"9px","borderRight":"0px none rgb(23,62,228)","width":"90%","position":"unset","borderTop":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","height":"1px","animationName":""},
            
            },
 default: { 
 
cStyle:{"wrapper":{"default":{"borderLeft":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg60)","top":"55px","left":"9px","borderRight":"0px none rgb(23,62,228)","width":"90%","position":"unset","borderTop":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","height":"1px","animationName":""}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"animationName":"","color":"var(--business-text-avianize)","textAlign":"justify","display":"block","textDecoration":"none","fontStyle":"normal","float":"none","marginLeft":"41px","paddingBottom":"0px","top":"63px","left":"-23px","pointerEvents":"none","width":"80px","fontSize":"var(--business-text-size-14)","lineHeight":"12px","marginBottom":"16px","position":"unset","paddingTop":"0px","marginTop":"8px","height":"12px"},
            
            },
 default: { 
 
editable:false,
showTitle:false,
cStyle:{"wrapper":{"default":{"animationName":"","color":"var(--business-text-avianize)","textAlign":"justify","display":"block","textDecoration":"none","fontStyle":"normal","float":"none","marginLeft":"41px","paddingBottom":"0px","top":"63px","left":"-23px","pointerEvents":"none","width":"80px","fontSize":"var(--business-text-size-14)","lineHeight":"12px","marginBottom":"16px","position":"unset","paddingTop":"0px","marginTop":"8px","height":"12px"}}},
label:"限值：", 
 },
},
tTextx0x5: {
defaultStyle: {
            default: {"animationName":"","whiteSpace":"nowrap","color":"#F34C2D","textAlign":"justify","display":"block","textDecoration":"none","fontStyle":"normal","float":"none","marginLeft":"41px","paddingBottom":"0px","overflow":"hidden","top":"63px","max-width":"60px","pointerEvents":"none","width":"60px","fontSize":"var(--business-text-size-14)","lineHeight":"14px","marginBottom":"16px","position":"unset","paddingTop":"0px","textOverflow":"ellipsis","marginTop":"8px","height":"16px","left":"calc(16px + var(--business-text-size-14))"},
            
            },
 default: { 
 
editable:false,
showTitle:true,
cStyle:{"wrapper":{"default":{"animationName":"","whiteSpace":"nowrap","color":"#F34C2D","textAlign":"justify","display":"block","textDecoration":"none","fontStyle":"normal","float":"none","marginLeft":"41px","paddingBottom":"0px","overflow":"hidden","top":"63px","max-width":"60px","pointerEvents":"none","width":"60px","fontSize":"var(--business-text-size-14)","lineHeight":"14px","marginBottom":"16px","position":"unset","paddingTop":"0px","textOverflow":"ellipsis","marginTop":"8px","height":"16px","left":"calc(16px + var(--business-text-size-14))"}}},
label:"", 
 },
},
});let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-shengTaiJiZLL', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-shengTaiJiZLL', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tTextx0x1ComputedData = computed(() => _.merge({}, componentState.tTextx0x1.default, componentState.tTextx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tLinex0x3ComputedData = computed(() => _.merge({}, componentState.tLinex0x3.default, componentState.tLinex0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tTextx0x5ComputedData = computed(() => _.merge({}, componentState.tTextx0x5.default, componentState.tTextx0x5?.[state.screenSize]));

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
tRectx0x0ComputedData,
tTextx0x1ComputedData,
tTextx0x2ComputedData,
tLinex0x3ComputedData,
tTextx0x4ComputedData,
tTextx0x5ComputedData,
};
},
};