window.publicFontSizeSettingPopupComponent = {
template: 
`<div id="t-l-c-publicFontSizeSettingPopup" class="t-l-c-publicFontSizeSettingPopup" >` +
`<t-rect id="t-rect-ca9e.9255f78f2" class="publicFontSizeSettingPopup-t-rect-0-0"  :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle" :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label">` +
`</t-rect>` +
`<t-rect id="t-rect-81c9.5c50e687" class="publicFontSizeSettingPopup-t-rect-0-1"  :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle" :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label">` +
`</t-rect>` +
`<t-rect id="t-rect-ca8b.82a3c1294" class="publicFontSizeSettingPopup-t-rect-0-2"  :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle" :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label">` +
`</t-rect>` +
`<t-rect id="t-rect-69d5.f750da9bb" class="publicFontSizeSettingPopup-t-rect-0-3"  :active="tRectx0x3ComputedData.active" :c-style="tRectx0x3ComputedData.cStyle" :tip="tRectx0x3ComputedData.tip" :label="tRectx0x3ComputedData.label">` +
`</t-rect>` +
`<t-slider id="t-slider-61b9.75a689f81" class="publicFontSizeSettingPopup-t-slider-0-4"  :data="replaceCssVariables(filterData(state.sliderData, componentPropBindingMap?.['t-slider-61b9.75a689f81']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :max="tSliderx0x4ComputedData.max" :show-tooltip="tSliderx0x4ComputedData.showTooltip" :range="tSliderx0x4ComputedData.range" :data-alias="tSliderx0x4ComputedData.dataAlias" :vertical="tSliderx0x4ComputedData.vertical" :marks="tSliderx0x4ComputedData.marks" :show-input-controls="tSliderx0x4ComputedData.showInputControls" :show-stops="tSliderx0x4ComputedData.showStops" :min="tSliderx0x4ComputedData.min" :show-input="tSliderx0x4ComputedData.showInput" :c-style="tSliderx0x4ComputedData.cStyle" :step="tSliderx0x4ComputedData.step" @change="onchange1753075566109">` +
`</t-slider>` +
`<t-tabs-base id="t-tabs-base-6cf8.0a8d5a729" class="publicFontSizeSettingPopup-t-tabs-base-0-5"  :inner-shadow-color="tTabsBasex0x5ComputedData.innerShadowColor" :data="tTabsBasex0x5ComputedData.data" :alias="tTabsBasex0x5ComputedData.alias" :c-style="tTabsBasex0x5ComputedData.cStyle" :selected-tab-val="replaceCssVariables(filterData(state.tabSelect, componentPropBindingMap?.['t-tabs-base-6cf8.0a8d5a729']['selectedTabVal'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :active-inner-shadow-color="tTabsBasex0x5ComputedData.activeInnerShadowColor" :space="tTabsBasex0x5ComputedData.space" @tab-click="ontabClick1753068261635">` +
`</t-tabs-base>` +
`<t-slider id="t-slider-da58.5f8deaffe" class="publicFontSizeSettingPopup-t-slider-0-6"  :marks="tSliderx0x6ComputedData.marks" :data="replaceCssVariables(filterData(state.sliderData, componentPropBindingMap?.['t-slider-da58.5f8deaffe']['data'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :data-alias="tSliderx0x6ComputedData.dataAlias" :show-input="tSliderx0x6ComputedData.showInput" :show-input-controls="tSliderx0x6ComputedData.showInputControls" :c-style="tSliderx0x6ComputedData.cStyle" :min="tSliderx0x6ComputedData.min" :max="tSliderx0x6ComputedData.max" @change="onchange1776404775175">` +
`</t-slider>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-ca9e.9255f78f2":{"attributeName":"tRectx0x0","active":{"filters":[]},"cStyle":{"filters":[]},"tip":{"filters":[]},"label":{"filters":[]}},"t-rect-81c9.5c50e687":{"attributeName":"tRectx0x1","active":{"filters":[]},"cStyle":{"filters":[]},"tip":{"filters":[]},"label":{"filters":[]}},"t-rect-ca8b.82a3c1294":{"attributeName":"tRectx0x2","active":{"filters":[]},"cStyle":{"filters":[]},"tip":{"filters":[]},"label":{"filters":[]}},"t-rect-69d5.f750da9bb":{"attributeName":"tRectx0x3","active":{"filters":[]},"cStyle":{"filters":[]},"tip":{"filters":[]},"label":{"filters":[]}},"t-slider-61b9.75a689f81":{"attributeName":"tSliderx0x4","data":{"filters":[]},"max":{"filters":[]},"showTooltip":{"filters":[]},"range":{"filters":[]},"dataAlias":{"filters":[]},"vertical":{"filters":[]},"marks":{"filters":[]},"showInputControls":{"filters":[]},"showStops":{"filters":[]},"min":{"filters":[]},"showInput":{"filters":[]},"cStyle":{"filters":[]},"step":{"filters":[]}},"t-tabs-base-6cf8.0a8d5a729":{"attributeName":"tTabsBasex0x5","innerShadowColor":{"filters":[]},"data":{"filters":[]},"alias":{"filters":[]},"cStyle":{"filters":[]},"selectedTabVal":{"filters":[]},"activeInnerShadowColor":{"filters":[]},"space":{"filters":[]}},"t-slider-da58.5f8deaffe":{"attributeName":"tSliderx0x6","marks":{"filters":[]},"data":{"filters":[]},"dataAlias":{"filters":[]},"showInput":{"filters":[]},"showInputControls":{"filters":[]},"cStyle":{"filters":[]},"min":{"filters":[]},"max":{"filters":[]}}};
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
   pageSizeType: "min",
   sourceId: "",
   curFontSizes: {},
   sliderData: [{"value":14}],
   minFontSize: 0,
   maxFontSize: 0,
   tabSelect: "",
   fontSizeMap: {"min":{"defaultSize":14,"largeSize":18,"kingSize":22},"max":{"defaultSize":20,"largeSize":28,"kingSize":36}},
   defaultMinFontSize: 14,
   defaultMaxFontSize: 22,
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
            default: {"backgroundColor":"var(--business-dialog-bg)","borderTop":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"8px","borderLeft":"1px solid var(--business-show-bg50)","top":"0px","borderBottomLeftRadius":"8px","left":"0px","borderRight":"1px solid var(--business-show-bg50)","width":"194px","borderBottomRightRadius":"8px","borderTopRightRadius":"8px","borderBottom":"1px solid var(--business-show-bg50)","height":"88px"},
            
            },
 default: { 
 
active:false,
cStyle:{"wrapper":{"default":{"backgroundColor":"var(--business-dialog-bg)","borderTop":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"8px","borderLeft":"1px solid var(--business-show-bg50)","top":"0px","borderBottomLeftRadius":"8px","left":"0px","borderRight":"1px solid var(--business-show-bg50)","width":"194px","borderBottomRightRadius":"8px","borderTopRightRadius":"8px","borderBottom":"1px solid var(--business-show-bg50)","height":"88px"}}},
tip:false,
label:"", 
 },
},
tRectx0x1: {
defaultStyle: {
            default: {"animationName":"","backgroundColor":"var(--business-show-bg50)","color":"var(--business-white)","borderTop":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderLeft":"0px none rgb(23,62,228)","top":"10px","borderBottomLeftRadius":"0px","left":"150px","borderRight":"0px none rgb(23,62,228)","width":"32px","borderBottomRightRadius":"4px","fontSize":"16px","borderTopRightRadius":"4px","position":"unset","borderBottom":"0px none rgb(23,62,228)","fontWeight":"700","height":"32px"},
            
            },
 default: { 
 
active:false,
cStyle:{"wrapper":{"default":{"animationName":"","backgroundColor":"var(--business-show-bg50)","color":"var(--business-white)","borderTop":"0px none rgb(23,62,228)","borderTopLeftRadius":"0px","borderLeft":"0px none rgb(23,62,228)","top":"10px","borderBottomLeftRadius":"0px","left":"150px","borderRight":"0px none rgb(23,62,228)","width":"32px","borderBottomRightRadius":"4px","fontSize":"16px","borderTopRightRadius":"4px","position":"unset","borderBottom":"0px none rgb(23,62,228)","fontWeight":"700","height":"32px"}}},
tip:false,
label:"Aa", 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"backgroundColor":"var(--business-show-bg50)","color":"var(--business-white)","borderTop":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderLeft":"0px none rgb(23,62,228)","top":"10px","borderBottomLeftRadius":"4px","left":"12px","borderRight":"0px none rgb(23,62,228)","width":"32px","borderBottomRightRadius":"0px","fontSize":"12px","borderTopRightRadius":"0px","borderBottom":"0px none rgb(23,62,228)","height":"32px"},
            
            },
 default: { 
 
active:false,
cStyle:{"wrapper":{"default":{"backgroundColor":"var(--business-show-bg50)","color":"var(--business-white)","borderTop":"0px none rgb(23,62,228)","borderTopLeftRadius":"4px","borderLeft":"0px none rgb(23,62,228)","top":"10px","borderBottomLeftRadius":"4px","left":"12px","borderRight":"0px none rgb(23,62,228)","width":"32px","borderBottomRightRadius":"0px","fontSize":"12px","borderTopRightRadius":"0px","borderBottom":"0px none rgb(23,62,228)","height":"32px"}}},
tip:false,
label:"Aa", 
 },
},
tRectx0x3: {
defaultStyle: {
            default: {"borderLeft":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg50)","top":"10px","left":"46px","borderRight":"0px none rgb(23,62,228)","width":"102px","borderTop":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","height":"32px"},
            
            },
 default: { 
 
active:false,
cStyle:{"wrapper":{"default":{"borderLeft":"0px none rgb(23,62,228)","backgroundColor":"var(--business-show-bg50)","top":"10px","left":"46px","borderRight":"0px none rgb(23,62,228)","width":"102px","borderTop":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","height":"32px"}}},
tip:false,
label:"", 
 },
},
tSliderx0x4: {
defaultStyle: {
            default: {"top":"144px","left":"86px","width":"82px","position":"unset","height":"32px"},
            
            },
 default: { 
 
data:[{"value":14}],
max:22,
showTooltip:true,
range:false,
dataAlias:{"label":"label","value":"value"},
vertical:false,
marks:{"2":"0","20":"20","40":"40","60":"60","80":"80","98":"100"},
showInputControls:false,
showStops:false,
min:14,
showInput:true,
cStyle:{"sliderProgress":{"default":{"marginRight":"0px","backgroundColor":"var(--slider-container-bg)","width":"82px","height":"8px"}},"sliderButton":{"default":{"borderLeft":"1px solid var(--business-theme)","transform":"scale(1) !important","borderRight":"1px solid var(--business-theme)","width":"15px","borderTop":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","height":"15px"}},"sliderOver":{"default":{"backgroundColor":"var(--business-theme)","height":"8px"}},"wrapper":{"default":{"top":"144px","left":"86px","width":"82px","position":"unset","height":"32px"}},"sliderLabel":{"default":{"marginRight":"0px","width":"0px","fontSize":"0px"}},"stopText":{"default":{"display":"none","fontSize":"0px"}},"sliderInput":{"default":{"display":"none","width":"0px","height":"0px"}},"sliderStop":{"default":{"display":"none","fontSize":"0px"}},"sliderInputWrapper":{"default":{"width":"0px"}},"sliderItem":{"default":{"marginBottom":"0px","height":"32px"}}},
step:"1", 
 },
},
tTabsBasex0x5: {
defaultStyle: {
            default: {"top":"51px","left":"12px","width":"170px","position":"unset","height":"26px"},
            
            },
 default: { 
 
innerShadowColor:"rgba(0,0,0,0)",
data:[{"label":"默认","value":14},{"label":"大号","value":18},{"label":"特大号","value":22}],
alias:{"disabled":"disabled","label":"label","value":"value"},
cStyle:{"itemWrapper":{"hover":{"borderLeft":"1px solid var(--business-theme)","backgroundColor":"var(--business-show-bg30)","color":"var(--business-theme)","borderBottomLeftRadius":"4px","borderRight":"1px solid var(--business-theme)","borderBottomRightRadius":"4px","borderTopRightRadius":"4px","borderTop":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px"},"default":{"borderLeft":"1px solid var(--business-show-bg50)","backgroundColor":"var(--business-show-bg30)","color":"var(--business-white)","borderBottomLeftRadius":"4px","borderRight":"1px solid var(--business-show-bg50)","borderBottomRightRadius":"4px","fontSize":"14px","borderTopRightRadius":"4px","lineHeight":"22px","borderTop":"1px solid var(--business-show-bg50)","borderBottom":"1px solid var(--business-show-bg50)","borderTopLeftRadius":"4px"},"active":{"borderLeft":"1px solid var(--business-theme)","backgroundColor":"var(--business-show-bg30)","color":"var(--business-theme)","borderBottomLeftRadius":"4px","borderRight":"1px solid var(--business-theme)","borderBottomRightRadius":"4px","borderTopRightRadius":"4px","borderTop":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","borderTopLeftRadius":"4px"}},"wrapper":{"default":{"top":"51px","left":"12px","width":"170px","position":"unset","height":"26px"}}},
selectedTabVal:"",
activeInnerShadowColor:"rgba(0,0,0,0)",
space:5, 
 },
},
tSliderx0x6: {
defaultStyle: {
            default: {"width":"82px","height":"30px","top":"11px","left":"57px","position":"unset"},
            
            },
 default: { 
 
marks:{"2":"0","20":"20","40":"40","60":"60","80":"80","98":"100"},
data:[{"value":14}],
dataAlias:{"label":"label","value":"value"},
showInput:true,
showInputControls:false,
cStyle:{"sliderProgress":{"default":{"marginRight":"0px","backgroundColor":"var(--slider-container-bg)","width":"82px","height":"8px"}},"sliderButton":{"default":{"borderLeft":"1px solid var(--business-theme)","transform":"scale(1) !important","borderRight":"1px solid var(--business-theme)","width":"15px","borderTop":"1px solid var(--business-theme)","borderBottom":"1px solid var(--business-theme)","height":"15px"}},"sliderOver":{"default":{"backgroundColor":"var(--business-theme)","height":"8px"}},"wrapper":{"default":{"width":"82px","height":"30px","top":"11px","left":"57px","position":"unset"}},"sliderLabel":{"default":{"marginRight":"0px","width":"0px","fontSize":"0px"}},"stopText":{"default":{"display":"none","fontSize":"0px"}},"sliderInput":{"default":{"display":"none","width":"0px","height":"0px"}},"sliderStop":{"default":{"display":"none","fontSize":"0px"}},"sliderInputWrapper":{"default":{"width":"0px"}},"sliderItem":{"default":{"marginBottom":"0px","height":"32px"}}},
min:14,
max:22, 
 },
},
});
const handleTabChange = (value) => {
if (value !== state.tabSelect) {
  state.tabSelect = value;
  // 设置滑块第一项的值
  state.sliderData[0].value = value;
  sendFontSizeMes(value);
}

};
const handleSliderChange = (data) => {
/**
 * 处理拖动滑块
 */
state.sliderData = data;
state.tabSelect = '';
// 设置tab选中

state.tabSelect = data[0].value;
sendFontSizeMes(data[0].value);
};
const sendFontSizeMes = (value) => {

// changeFontSize
rootData.rootSocket.emit('message', {
  room: global.socketRoom, // 房间号
  type: 'changeFontSize', // 消息名称
  // 发送的数据
  data: value, // 发送的数据
});

};
const onchange1753075566109 = (data) => {
// 执行自定义方法
handleSliderChange(data);
};
const ontabClick1753068261635 = (data) => {
// 执行自定义方法
handleTabChange(data.value);
};
const onchange1776404775175 = (data) => {
// 执行自定义方法
handleSliderChange(data);
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-publicFontSizeSettingPopup', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-publicFontSizeSettingPopup', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tRectx0x1ComputedData = computed(() => _.merge({}, componentState.tRectx0x1.default, componentState.tRectx0x1?.[state.screenSize]));

 const tRectx0x2ComputedData = computed(() => _.merge({}, componentState.tRectx0x2.default, componentState.tRectx0x2?.[state.screenSize]));

 const tRectx0x3ComputedData = computed(() => _.merge({}, componentState.tRectx0x3.default, componentState.tRectx0x3?.[state.screenSize]));

 const tSliderx0x4ComputedData = computed(() => _.merge({}, componentState.tSliderx0x4.default, componentState.tSliderx0x4?.[state.screenSize]));

 const tTabsBasex0x5ComputedData = computed(() => _.merge({}, componentState.tTabsBasex0x5.default, componentState.tTabsBasex0x5?.[state.screenSize]));

 const tSliderx0x6ComputedData = computed(() => _.merge({}, componentState.tSliderx0x6.default, componentState.tSliderx0x6?.[state.screenSize]));

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
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tRectx0x3ComputedData,
tSliderx0x4ComputedData,
tTabsBasex0x5ComputedData,
tSliderx0x6ComputedData,
onchange1753075566109,
ontabClick1753068261635,
onchange1776404775175,
};
},
};