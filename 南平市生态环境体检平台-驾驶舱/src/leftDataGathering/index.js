window.leftDataGatheringComponent = {
template: 
`<div id="t-l-c-leftDataGathering" class="t-l-c-leftDataGathering" >` +
`<t-rect id="t-rect-94e9.69d51df3" class="leftDataGathering-t-rect-0-1"  :tip="tRectx0x1ComputedData.tip" :label="tRectx0x1ComputedData.label" :active="tRectx0x1ComputedData.active" :c-style="tRectx0x1ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-5f93.011403ff7" class="leftDataGathering-t-rect-0-2"  :tip="tRectx0x2ComputedData.tip" :label="tRectx0x2ComputedData.label" :active="tRectx0x2ComputedData.active" :c-style="tRectx0x2ComputedData.cStyle">` +
`</t-rect>` +
`<t-gradient-shadow-text id="t-gradient-shadow-text-173c.8e1ae0b02" class="leftDataGathering-t-gradient-shadow-text-0-3"  :label="tGradientShadowTextx0x3ComputedData.label" :c-style="tGradientShadowTextx0x3ComputedData.cStyle" :shadow-style="tGradientShadowTextx0x3ComputedData.shadowStyle" @click="onclick1741832100688">` +
`</t-gradient-shadow-text>` +
`<t-component id="t-component-5dd4.fd000c938" class="leftDataGathering-t-component-0-4"  :name="replaceCssVariables(filterData(state.tabSelect, componentPropBindingMap?.['t-component-5dd4.fd000c938']['name'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :loading="tComponentx0x4ComputedData.loading" :c-style="tComponentx0x4ComputedData.cStyle" :src="tComponentx0x4ComputedData.src" :component-name="replaceCssVariables(filterData(state.tabSelect, componentPropBindingMap?.['t-component-5dd4.fd000c938']['componentName'].filters || []), global?.theme || global?.activeTheme || '默认主题')">` +
`</t-component>` +
`<t-tabs id="t-tabs-29b0.c19a07a77" class="leftDataGathering-t-tabs-0-5"  :alias="tTabsx0x5ComputedData.alias" :data="tTabsx0x5ComputedData.data" :model-value="tTabsx0x5ComputedData.model-value" :tab-position-extend="tTabsx0x5ComputedData.tabPositionExtend" :stretch="tTabsx0x5ComputedData.stretch" :c-style="tTabsx0x5ComputedData.cStyle" :active-tab="replaceCssVariables(filterData(state.tabSelect, componentPropBindingMap?.['t-tabs-29b0.c19a07a77']['activeTab'].filters || []), global?.theme || global?.activeTheme || '默认主题')" @tab-click="ontabClick1760682716643">` +
`</t-tabs>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-417b.fd900b02a":{"attributeName":"tRectx0x0"},"t-rect-94e9.69d51df3":{"attributeName":"tRectx0x1","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-5f93.011403ff7":{"attributeName":"tRectx0x2","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-gradient-shadow-text-173c.8e1ae0b02":{"attributeName":"tGradientShadowTextx0x3","label":{"filters":[]},"cStyle":{"filters":[]},"shadowStyle":{"filters":[]}},"t-component-5dd4.fd000c938":{"attributeName":"tComponentx0x4","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-tabs-29b0.c19a07a77":{"attributeName":"tTabsx0x5","alias":{"filters":[]},"data":{"filters":[]},"model-value":{"filters":[]},"tabPositionExtend":{"filters":[]},"stretch":{"filters":[]},"cStyle":{"filters":[]},"activeTab":{"filters":[]}}};
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
   tabSelect: "leftDataGatheringStructureComponent",
   dataAggregateAll: {"SJHJ_TBJSJHJ_DWCS":0,"SJHJ_TBJSJZY":0,"SJHJ_STHJBSJHJ_DWCS":0,"SJHJ_STHJBSJZY":0,"SJHJ_SZDWSJHJ_DWCS":0,"SJHJ_SZDWSJZY":0,"SJHJ_SZSJHJ_DWCS":0,"SJHJ_SZSJZY":0,"QFWHJ_TOTAL":0},
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
            default: {"width":"400px","height":"50px","position":"unset","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-cockpit-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":"","backgroundColor":"rgba(23, 62, 228, 0)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"400px","height":"50px","position":"unset","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"var(--t-cockpit-green-bg)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":"","backgroundColor":"rgba(23, 62, 228, 0)"}}}, 
 },
},
tRectx0x2: {
defaultStyle: {
            default: {"width":"118px","height":"45px","position":"unset","left":"12px","top":"5px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2024-11-27/f16083ce0e5e4eddb8df49cce653f0e2.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":"custom0eab718ba2f9c","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"118px","height":"45px","position":"unset","left":"12px","top":"5px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2024-11-27/f16083ce0e5e4eddb8df49cce653f0e2.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"contain","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":"custom0eab718ba2f9c","animationDuration":"3s","animationTimingFunction":"linear","animationDelay":"0s","animationIterationCount":"infinite","animationDirection":"normal"}}}, 
 },
},
tGradientShadowTextx0x3: {
defaultStyle: {
            default: {"width":"135px","height":"31px","position":"unset","left":"43px","top":"15px","fontFamily":"方正综艺","fontSize":"20px","color":"","textAlign":"left","backgroundColor":"","letterSpacing":"2px","paddingLeft":"0px","marginLeft":"0px","animationName":"","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-02-17/c72e2668a7de449bb18182809dbd87ab.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"11px 16px","-webkit-mask-size":"","backgroundPosition":"100% 7px","-webkit-mask-position":"","cursor":"pointer"},
            
            },
 default: { 
 
label:"全方位汇聚",
cStyle:{"wrapper":{"default":{"width":"135px","height":"31px","position":"unset","left":"43px","top":"15px","fontFamily":"方正综艺","fontSize":"20px","color":"","textAlign":"left","backgroundColor":"","letterSpacing":"2px","paddingLeft":"0px","marginLeft":"0px","animationName":"","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/assets/images/2025-02-17/c72e2668a7de449bb18182809dbd87ab.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"11px 16px","-webkit-mask-size":"","backgroundPosition":"100% 7px","-webkit-mask-position":"","cursor":"pointer"}},"textStyle":{"default":{"-webkit-text-fill-color":"transparent","-webkit-background-clip":"text","backgroundImage":"linear-gradient(rgba(255, 255, 255, 1),rgba(255, 255, 255, 1))","fontWeight":"300","color":"rgba(255, 255, 255, 1)","fontSize":"20px","-webkit-mask-image":"","backgroundRepeat":"repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"0% 0%","-webkit-mask-position":"","fontFamily":"方正综艺","paddingLeft":"10px","paddingTop":"4px"}},"textShadowStyle":{"default":{"fontWeight":"bold","color":"","fontFamily":"方正综艺","paddingLeft":"10px","paddingTop":"4px"}}},
shadowStyle:{"blur":"8PX","color":"#00738A"}, 
 },
},
tComponentx0x4: {
defaultStyle: {
            default: {"width":"400px","height":"262px","margin":"0 auto","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
name:"leftDataGatheringStructureComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"400px","height":"262px","margin":"0 auto","position":"unset","left":"0px","top":"0px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/leftDataGatheringStructure",
componentName:"leftDataGatheringStructureComponent", 
 },
},
tTabsx0x5: {
defaultStyle: {
            default: {"position":"unset","width":"140px","height":"28px","backgroundColor":"rgba(0, 140, 255, 0)","fontSize":"14px","lineHeight":"26px","animationName":"","left":"250px","top":"18px"},
            
            },
 default: { 
 
alias:{"label":"label","name":"name"},
data:[{"label":"结构化","name":"leftDataGatheringStructureComponent"},{"label":"非结构化","name":"leftDataGatheringUnstructuredComponent"}],
'model-value':"work",
tabPositionExtend:"top-start",
stretch:true,
cStyle:{"wrapper":{"default":{"position":"unset","width":"140px","height":"28px","backgroundColor":"rgba(0, 140, 255, 0)","fontSize":"14px","lineHeight":"26px","animationName":"","left":"250px","top":"18px"}},"itemWrapper":{"default":{"height":"28px","width":"68px","lineHeight":"28px","fontSize":"14px","color":"var(--business-white)","borderLeft":"1px none rgba(23,62,228,0)","borderTop":"1px none rgba(23,62,228,0)","borderRight":"1px none rgba(23,62,228,0)","borderBottom":"1px none rgba(23,62,228,0)","backgroundColor":"rgba(20, 112, 204, 0)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":""},"active":{"fontSize":"14px","color":"var(--business-tab-active-text)","backgroundColor":"rgba(37, 156, 224, 0)","borderLeft":"0px none rgba(0,212,255,0.6)","borderTop":"0px none rgba(0,212,255,0.6)","borderRight":"0px none rgba(0,212,255,0.6)","borderBottom":"0px none rgba(0,212,255,0.6)","backgroundImage":"","-webkit-mask-image":"","backgroundRepeat":"","-webkit-mask-repeat":"","backgroundSize":"","-webkit-mask-size":"","backgroundPosition":"","-webkit-mask-position":"","box-shadow":"","backdropFilter":"blur(0px)","lineHeight":"28px"},"hover":{"color":"var(--business-tab-active-text)","lineHeight":"28px"}},"itemActiveBorder":{"active":{"backgroundColor":"rgba(255, 0, 0, 0)"},"default":{"borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)","backgroundColor":"rgba(222, 233, 14, 0)"}}},
activeTab:"2", 
 },
},
});
const onclick1741832100688 = () => {
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'showPopComponent',
                    value:'dataConvergencePopComponent',
                    data: {
                      showPopComponent: 'dataConvergencePopComponent'
                    },
                  });
// 设置全局变量值
rootData.rootEmit(
                  'rootData:change',
                  {
                    key:'showPop',
                    value:true,
                    data: {
                      showPop: true
                    },
                  });
};
const ontabClick1760682716643 = (data) => {
// 设置变量值
state.tabSelect = data.name;
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-leftDataGathering', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-leftDataGathering', global.appScaleMode, 'normal');
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

 const tGradientShadowTextx0x3ComputedData = computed(() => _.merge({}, componentState.tGradientShadowTextx0x3.default, componentState.tGradientShadowTextx0x3?.[state.screenSize]));

 const tComponentx0x4ComputedData = computed(() => _.merge({}, componentState.tComponentx0x4.default, componentState.tComponentx0x4?.[state.screenSize]));

 const tTabsx0x5ComputedData = computed(() => _.merge({}, componentState.tTabsx0x5.default, componentState.tTabsx0x5?.[state.screenSize]));

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
tRectx0x1ComputedData,
tRectx0x2ComputedData,
tGradientShadowTextx0x3ComputedData,
tComponentx0x4ComputedData,
tTabsx0x5ComputedData,
onclick1741832100688,
ontabClick1760682716643,
};
},
};