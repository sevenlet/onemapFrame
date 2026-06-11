window.gztRightComponent = {
template: 
`<div id="t-l-c-gztRight" class="t-l-c-gztRight" >` +
`<t-rect id="t-rect-a0ec.5ff516cd9" class="gztRight-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-text-common id="t-text-common-db44.117cbec03" class="gztRight-t-text-common-0-1"  :label="tTextCommonx0x1ComputedData.label" :editable="tTextCommonx0x1ComputedData.editable" :c-style="tTextCommonx0x1ComputedData.cStyle">` +
`</t-text-common>` +
`<t-component id="t-component-a656.4fd9d7326" class="gztRight-t-component-0-2"  :name="tComponentx0x2ComputedData.name" :loading="tComponentx0x2ComputedData.loading" :c-style="tComponentx0x2ComputedData.cStyle" :src="tComponentx0x2ComputedData.src" :component-name="tComponentx0x2ComputedData.componentName" :page-id="tComponentx0x2ComputedData.pageId" :page-code="tComponentx0x2ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-04e0.d39f3a2cd" class="gztRight-t-component-0-3"  :name="tComponentx0x3ComputedData.name" :loading="tComponentx0x3ComputedData.loading" :c-style="tComponentx0x3ComputedData.cStyle" :src="tComponentx0x3ComputedData.src" :component-name="tComponentx0x3ComputedData.componentName" :page-id="tComponentx0x3ComputedData.pageId" :page-code="tComponentx0x3ComputedData.pageCode">` +
`</t-component>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-a0ec.5ff516cd9":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-text-common-db44.117cbec03":{"attributeName":"tTextCommonx0x1","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-component-a656.4fd9d7326":{"attributeName":"tComponentx0x2","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-04e0.d39f3a2cd":{"attributeName":"tComponentx0x3","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}}};
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
            default: {"width":"1190px","height":"50px","position":"unset","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-03-26/3c7ca44191ea42eeafa831cfbe9e0bfb.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":"","backgroundColor":"rgba(23, 62, 228, 0)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"1190px","height":"50px","position":"unset","left":"0px","top":"0px","borderLeft":"0px none rgb(23,62,228)","borderTop":"0px none rgb(23,62,228)","borderRight":"0px none rgb(23,62,228)","borderBottom":"0px none rgb(23,62,228)","backgroundImage":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2026-03-26/3c7ca44191ea42eeafa831cfbe9e0bfb.png)","-webkit-mask-image":"","backgroundRepeat":"no-repeat","-webkit-mask-repeat":"","backgroundSize":"auto","-webkit-mask-size":"","backgroundPosition":"50% 50%","-webkit-mask-position":"","animationName":"","backgroundColor":"rgba(23, 62, 228, 0)"}}}, 
 },
},
tTextCommonx0x1: {
defaultStyle: {
            default: {"width":"200px","height":"24px","color":"var(--skin-font-color-90)","top":"17px","left":"56px","position":"unset","fontSize":"24px","fontWeight":"700","animationName":"","lineHeight":"24px"},
            
            },
 default: { 
 
label:"实时监测",
editable:false,
cStyle:{"wrapper":{"default":{"width":"200px","height":"24px","color":"var(--skin-font-color-90)","top":"17px","left":"56px","position":"unset","fontSize":"24px","fontWeight":"700","animationName":"","lineHeight":"24px"}}}, 
 },
},
tComponentx0x2: {
defaultStyle: {
            default: {"width":"1190px","height":"456px","margin":"0 auto","position":"unset","left":"0px","top":"430px"},
            
            },
 default: { 
 
name:"gztRightKqzlbjComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"1190px","height":"456px","margin":"0 auto","position":"unset","left":"0px","top":"430px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/gztRightKqzlbj",
componentName:"gztRightKqzlbjComponent",
pageId:"3cf96d151cec44658db67e022c88d0a4",
pageCode:"gztRightKqzlbj", 
 },
},
tComponentx0x3: {
defaultStyle: {
            default: {"width":"1190px","height":"331px","margin":"0 auto","position":"unset","left":"-1px","top":"76px","animationName":""},
            
            },
 default: { 
 
name:"gztRightShjbjComponent",
loading:true,
cStyle:{"wrapper":{"default":{"width":"1190px","height":"331px","margin":"0 auto","position":"unset","left":"-1px","top":"76px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/gztRightShjbj",
componentName:"gztRightShjbjComponent",
pageId:"49becb14fb174226ac3a760e987b0190",
pageCode:"gztRightShjbj", 
 },
},
});let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-gztRight', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-gztRight', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tTextCommonx0x1ComputedData = computed(() => _.merge({}, componentState.tTextCommonx0x1.default, componentState.tTextCommonx0x1?.[state.screenSize]));

 const tComponentx0x2ComputedData = computed(() => _.merge({}, componentState.tComponentx0x2.default, componentState.tComponentx0x2?.[state.screenSize]));

 const tComponentx0x3ComputedData = computed(() => _.merge({}, componentState.tComponentx0x3.default, componentState.tComponentx0x3?.[state.screenSize]));

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
tTextCommonx0x1ComputedData,
tComponentx0x2ComputedData,
tComponentx0x3ComputedData,
};
},
};