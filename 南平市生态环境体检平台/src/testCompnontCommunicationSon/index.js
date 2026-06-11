window.testCompnontCommunicationSonComponent = {
template: 
`<div id="t-l-c-testCompnontCommunicationSon" class="t-l-c-testCompnontCommunicationSon" >` +
`<t-gradient-text id="t-gradient-text-8a3d.52623c045" class="testCompnontCommunicationSon-t-gradient-text-0-0"  :label="replaceCssVariables(filterData(state.title, componentPropBindingMap?.['t-gradient-text-8a3d.52623c045']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :c-style="tGradientTextx0x0ComputedData.cStyle">` +
`</t-gradient-text>` +
`<t-button id="t-button-14e6.53f34d103" class="testCompnontCommunicationSon-t-button-0-1"  :label="tButtonx0x1ComputedData.label" :round="tButtonx0x1ComputedData.round" :plain="tButtonx0x1ComputedData.plain" :disabled="tButtonx0x1ComputedData.disabled" :type="tButtonx0x1ComputedData.type" :size="tButtonx0x1ComputedData.size" :native-type="tButtonx0x1ComputedData.native-type" :c-style="tButtonx0x1ComputedData.cStyle" @click="onclick1731931077035">` +
`</t-button>` +
`<t-component id="t-component-71dc.8eae4331" class="testCompnontCommunicationSon-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName">` +
`</t-component>` +
`<t-text-common id="t-text-common-677d.b4f2f7686" class="testCompnontCommunicationSon-t-text-common-0-3"  :label="replaceCssVariables(filterData(state.num, componentPropBindingMap?.['t-text-common-677d.b4f2f7686']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextCommonx0x3ComputedData.editable" :c-style="tTextCommonx0x3ComputedData.cStyle">` +
`</t-text-common>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-gradient-text-8a3d.52623c045":{"attributeName":"tGradientTextx0x0","label":{"filters":[]},"cStyle":{"filters":[]}},"t-button-14e6.53f34d103":{"attributeName":"tButtonx0x1","label":{"filters":[]},"round":{"filters":[]},"plain":{"filters":[]},"disabled":{"filters":[]},"type":{"filters":[]},"size":{"filters":[]},"native-type":{"filters":[]},"cStyle":{"filters":[]}},"t-component-71dc.8eae4331":{"attributeName":"tComponentx0x2","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-common-677d.b4f2f7686":{"attributeName":"tTextCommonx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}}};
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
   num: "",
   title: "",
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
tGradientTextx0x0: {
defaultStyle: {
            default: {"width":"64px","height":"18px","position":"unset","left":"14px","top":"42px"},
            
            },
 default: { 
 
label:"",
cStyle:{"wrapper":{"default":{"width":"64px","height":"18px","position":"unset","left":"14px","top":"42px"}}}, 
 },
},
tButtonx0x1: {
defaultStyle: {
            default: {"width":"70px","height":"36px"},
            
            },
 default: { 
 
label:"按钮",
round:false,
plain:false,
disabled:false,
type:"primary",
size:"medium",
'native-type':"button",
cStyle:{"wrapper":{"default":{"width":"70px","height":"36px"}},"text":{"default":{"textAlign":"center"}}}, 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"200px","height":"100px","margin":"0 auto","backgroundColor":"#fff","position":"unset","left":"2px","top":"100px"},
            
            },
 default: { 
 
name:"testCompnontCommunicationSon2Component",
cStyle:{"wrapper":{"default":{"width":"200px","height":"100px","margin":"0 auto","backgroundColor":"#fff","position":"unset","left":"2px","top":"100px"}}},
src:"/lego-generated-apps/lego_file/app/src/27d54c897f0f4ba18421a7b587fe4ce4_12/index.html#/testCompnontCommunicationSon2",
componentName:"testCompnontCommunicationSon2Component", 
 },
},
tTextCommonx0x3: {
defaultStyle: {
            default: {"width":"96px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"467px","top":"308px","background":"unset","backgroundClip":"unset"},
            
            },
 default: { 
 
label:"",
editable:false,
cStyle:{"wrapper":{"default":{"width":"96px","height":"20px","color":"#ffffff","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"20px","letterSpacing":"0px","textAlign":"center","whiteSpace":"wrap","textOverflow":"unset","overflow":"unset","display":"inline-block","filter":"unset","border":"unset","position":"unset","left":"467px","top":"308px","background":"unset","backgroundClip":"unset"}}}, 
 },
},
});
const getInjectVariables = () => {
provide('sonTitle', '我是子组件定义的标题')

state.num = inject('num')
};
const onclick1731931077035 = () => {
// 设置变量值
state.title = '666666';
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-testCompnontCommunicationSon', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
// 执行自定义方法
getInjectVariables();
onMounted(() => {
setPageScale('t-l-c-testCompnontCommunicationSon', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tGradientTextx0x0ComputedData = computed(() => _.merge({}, componentState.tGradientTextx0x0.default, componentState.tGradientTextx0x0?.[state.screenSize]));

 const tButtonx0x1ComputedData = computed(() => _.merge({}, componentState.tButtonx0x1.default, componentState.tButtonx0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tTextCommonx0x3ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x3.default, componentState.tTextCommonx0x3?.[state.screenSize]));

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
tGradientTextx0x0ComputedData,
tButtonx0x1ComputedData,
tComponentx0x2ComputedData,
tTextCommonx0x3ComputedData,
onclick1731931077035,
};
},
};