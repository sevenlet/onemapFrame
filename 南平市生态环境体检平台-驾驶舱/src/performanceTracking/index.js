window.performanceTrackingComponent = {
template: 
`<div id="t-l-c-performanceTracking" class="t-l-c-performanceTracking" >` +
`<t-rect id="t-rect-96cf.bc1ae79cc" class="performanceTracking-t-rect-0-0"  :tip="tRectx0x0ComputedData.tip" :label="tRectx0x0ComputedData.label" :active="tRectx0x0ComputedData.active" :c-style="tRectx0x0ComputedData.cStyle">` +
`</t-rect>` +
`<t-component id="t-component-568d.7cecfab45" class="performanceTracking-t-component-0-1"  :name="tComponentx0x1ComputedData.name" :c-style="tComponentx0x1ComputedData.cStyle" :src="tComponentx0x1ComputedData.src" :component-name="tComponentx0x1ComputedData.componentName">` +
`</t-component>` +
`<t-text id="t-text-06d8.e7d863be1" class="performanceTracking-t-text-0-2"  :label="tTextx0x2ComputedData.label" :editable="tTextx0x2ComputedData.editable" :c-style="tTextx0x2ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-a1ea.6034596f" class="performanceTracking-t-text-0-3"  :label="replaceCssVariables(filterData(global.dashboardGlobalVariables.supervision.monitorTime, componentPropBindingMap?.['t-text-a1ea.6034596f']['label'].filters || []), global?.theme || global?.activeTheme || '默认主题')" :editable="tTextx0x3ComputedData.editable" :c-style="tTextx0x3ComputedData.cStyle">` +
`</t-text>` +
`<t-text id="t-text-69fa.991666b61" class="performanceTracking-t-text-0-4"  :label="tTextx0x4ComputedData.label" :editable="tTextx0x4ComputedData.editable" :c-style="tTextx0x4ComputedData.cStyle">` +
`</t-text>` +
`<t-rect id="t-rect-dbdf.1e13bb8b6" class="performanceTracking-t-rect-0-5"  :tip="tRectx0x5ComputedData.tip" :label="tRectx0x5ComputedData.label" :active="tRectx0x5ComputedData.active" :c-style="tRectx0x5ComputedData.cStyle">` +
`</t-rect>` +
`<t-rect id="t-rect-a6f1.f5345d2ab" class="performanceTracking-t-rect-0-6"  :tip="tRectx0x6ComputedData.tip" :label="tRectx0x6ComputedData.label" :active="tRectx0x6ComputedData.active" :c-style="tRectx0x6ComputedData.cStyle" @click="onclick1764068912410">` +
`</t-rect>` +
`<t-component id="t-component-6b82.d6eaca145" class="performanceTracking-t-component-0-7"  :name="tComponentx0x7ComputedData.name" :loading="tComponentx0x7ComputedData.loading" :c-style="tComponentx0x7ComputedData.cStyle" :src="tComponentx0x7ComputedData.src" :component-name="tComponentx0x7ComputedData.componentName" :page-id="tComponentx0x7ComputedData.pageId" :page-code="tComponentx0x7ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-0f8d.3962d0eec" class="performanceTracking-t-component-0-8"  :name="tComponentx0x8ComputedData.name" :loading="tComponentx0x8ComputedData.loading" :c-style="tComponentx0x8ComputedData.cStyle" :src="tComponentx0x8ComputedData.src" :component-name="tComponentx0x8ComputedData.componentName" :page-id="tComponentx0x8ComputedData.pageId" :page-code="tComponentx0x8ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-7f19.c67eff423" class="performanceTracking-t-component-0-9"  :name="tComponentx0x9ComputedData.name" :loading="tComponentx0x9ComputedData.loading" :c-style="tComponentx0x9ComputedData.cStyle" :src="tComponentx0x9ComputedData.src" :component-name="tComponentx0x9ComputedData.componentName" :page-id="tComponentx0x9ComputedData.pageId" :page-code="tComponentx0x9ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-beb3.bb9c4ef9a" class="performanceTracking-t-component-0-10"  :name="tComponentx0x10ComputedData.name" :loading="tComponentx0x10ComputedData.loading" :c-style="tComponentx0x10ComputedData.cStyle" :src="tComponentx0x10ComputedData.src" :component-name="tComponentx0x10ComputedData.componentName" :page-id="tComponentx0x10ComputedData.pageId" :page-code="tComponentx0x10ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-11a9.f1a007d97" class="performanceTracking-t-component-0-11"  :name="tComponentx0x11ComputedData.name" :loading="tComponentx0x11ComputedData.loading" :c-style="tComponentx0x11ComputedData.cStyle" :src="tComponentx0x11ComputedData.src" :component-name="tComponentx0x11ComputedData.componentName" :page-id="tComponentx0x11ComputedData.pageId" :page-code="tComponentx0x11ComputedData.pageCode">` +
`</t-component>` +
`<t-component id="t-component-fcd4.1ea79c062" class="performanceTracking-t-component-0-12"  :name="tComponentx0x12ComputedData.name" :loading="tComponentx0x12ComputedData.loading" :c-style="tComponentx0x12ComputedData.cStyle" :src="tComponentx0x12ComputedData.src" :component-name="tComponentx0x12ComputedData.componentName" :page-id="tComponentx0x12ComputedData.pageId" :page-code="tComponentx0x12ComputedData.pageCode">` +
`</t-component>` +
`</div>` +
'',
setup() {
const componentPropBindingMap = {"body":{"attributeName":"tBodyx0x0"},"t-rect-96cf.bc1ae79cc":{"attributeName":"tRectx0x0","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-568d.7cecfab45":{"attributeName":"tComponentx0x1","name":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]}},"t-text-06d8.e7d863be1":{"attributeName":"tTextx0x2","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-a1ea.6034596f":{"attributeName":"tTextx0x3","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-text-69fa.991666b61":{"attributeName":"tTextx0x4","label":{"filters":[]},"editable":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-dbdf.1e13bb8b6":{"attributeName":"tRectx0x5","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-rect-a6f1.f5345d2ab":{"attributeName":"tRectx0x6","tip":{"filters":[]},"label":{"filters":[]},"active":{"filters":[]},"cStyle":{"filters":[]}},"t-component-6b82.d6eaca145":{"attributeName":"tComponentx0x7","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-0f8d.3962d0eec":{"attributeName":"tComponentx0x8","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-7f19.c67eff423":{"attributeName":"tComponentx0x9","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-beb3.bb9c4ef9a":{"attributeName":"tComponentx0x10","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-11a9.f1a007d97":{"attributeName":"tComponentx0x11","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}},"t-component-fcd4.1ea79c062":{"attributeName":"tComponentx0x12","name":{"filters":[]},"loading":{"filters":[]},"cStyle":{"filters":[]},"src":{"filters":[]},"componentName":{"filters":[]},"pageId":{"filters":[]},"pageCode":{"filters":[]}}};
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
   isNoStorard: false,
   isStorard: true,
   isSelectedBg1: false,
   isSelectedBg2: false,
   isRed0: false,
   isGreen0: false,
   isWhite0: true,
   isRed1: false,
   isGreen1: false,
   isWhite1: true,
   riskData: {"GOOD_RATE":"--","GOOD_RATE_JQN":"--","GOOD_RATE_TARGET":"--","GOOD_RATE_YYMB":"--","ISSTANDARDS_STR":"--"},
   constructData: {"GOOD_RATE":"--","GOOD_RATE_JQN":"--","GOOD_RATE_TARGET":"--","GOOD_RATE_YYMB":"--","ISSTANDARDS_STR":"--","DATA_3":"--"},
   isOk0: 0,
   isOk1: 0,
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
            default: {"width":"400px","height":"363px","position":"unset","left":"0px","top":"51px","backgroundColor":"var(--t-card-bgc)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"400px","height":"363px","position":"unset","left":"0px","top":"51px","backgroundColor":"var(--t-card-bgc)","borderLeft":"1px none rgb(23,62,228)","borderTop":"1px none rgb(23,62,228)","borderRight":"1px none rgb(23,62,228)","borderBottom":"1px none rgb(23,62,228)"}}}, 
 },
},
tComponentx0x1: {
defaultStyle: {
            default: {"width":"400px","height":"50px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px"},
            
            },
 default: { 
 
name:"cockpitTitleComponent",
cStyle:{"wrapper":{"default":{"width":"400px","height":"50px","margin":"0 auto","backgroundColor":"rgba(255, 255, 255, 0)","position":"unset","left":"0px","top":"0px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1/index.html#/cockpitTitle",
componentName:"cockpitTitleComponent", 
 },
},
tTextx0x2: {
defaultStyle: {
            default: {"width":"28px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"232px","top":"22px","animationName":""},
            
            },
 default: { 
 
label:"截至",
editable:false,
cStyle:{"wrapper":{"default":{"width":"28px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"232px","top":"22px","animationName":""}}}, 
 },
},
tTextx0x3: {
defaultStyle: {
            default: {"width":"117px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"272px","top":"22px","animationName":""},
            
            },
 default: { 
 
label:"2025",
editable:false,
cStyle:{"wrapper":{"default":{"width":"117px","height":"14px","color":"rgba(255, 255, 255, 0.7)","fontSize":"14px","lineHeight":"14px","position":"unset","left":"272px","top":"22px","animationName":""}}}, 
 },
},
tTextx0x4: {
defaultStyle: {
            default: {"width":"118px","height":"20px","color":"#fff","fontSize":"20px","fontFamily":"方正综艺","position":"unset","left":"49px","top":"20px"},
            
            },
 default: { 
 
label:"督查督办",
editable:false,
cStyle:{"wrapper":{"default":{"width":"118px","height":"20px","color":"#fff","fontSize":"20px","fontFamily":"方正综艺","position":"unset","left":"49px","top":"20px"}}}, 
 },
},
tRectx0x5: {
defaultStyle: {
            default: {"width":"25px","height":"34px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","background":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-11-01/e6300ac4e8304941b76850a471c10f4b.svg)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","position":"unset","left":"127px","top":"16px","animationName":""},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"25px","height":"34px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","background":"url(/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/assets/images/2022-11-01/e6300ac4e8304941b76850a471c10f4b.svg)","backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","fillType":"image","position":"unset","left":"127px","top":"16px","animationName":""},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tRectx0x6: {
defaultStyle: {
            default: {"width":"400px","height":"55px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","position":"unset","left":"0px","top":"0px","cursor":"pointer"},
            
            },
 default: { 
 
tip:false,
label:"",
active:false,
cStyle:{"wrapper":{"default":{"width":"400px","height":"55px","justifyContent":"center","alignItems":"center","flexDirection":"row","border":"unset !important","borderTop":"1px Solid var(--t-rect-border-color)","borderLeft":"1px Solid var(--t-rect-border-color)","borderBottom":"1px Solid var(--t-rect-border-color)","borderRight":"1px Solid var(--t-rect-border-color)","position":"unset","left":"0px","top":"0px","cursor":"pointer"},"active":{"background":"var(--t-brand8)"}},"text":{"default":{"display":"block !important","width":"100%","height":"auto","minHeight":"12px","color":"rgba(255, 255, 255, 1)","background":"unset","backgroundClip":"unset","textAlign":"center","fontFamily":"微软雅黑","fontWeight":"400","fontSize":"14px","lineHeight":"14px","letterSpacing":"0px","whiteSpace":"nowrap","textOverflow":"ellipsis","overflow":"hidden"}}}, 
 },
},
tComponentx0x7: {
defaultStyle: {
            default: {"width":"400px","height":"108px","margin":"0 auto","position":"unset","left":"0px","top":"62px"},
            
            },
 default: { 
 
name:"performanceTrackingSection1Component",
loading:true,
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","margin":"0 auto","position":"unset","left":"0px","top":"62px"}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/performanceTrackingSection1",
componentName:"performanceTrackingSection1Component",
pageId:"7cd4db2823da41f599ebbb4d71b46c2b",
pageCode:"performanceTrackingSection1", 
 },
},
tComponentx0x8: {
defaultStyle: {
            default: {"width":"400px","height":"108px","margin":"0 auto","position":"unset","left":"0px","top":"178.4px","animationName":""},
            
            },
 default: { 
 
name:"performanceTrackingSection2Component",
loading:true,
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","margin":"0 auto","position":"unset","left":"0px","top":"178.4px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/performanceTrackingSection2",
componentName:"performanceTrackingSection2Component",
pageId:"f3d3bdc517ff47778b7bc65c70116117",
pageCode:"performanceTrackingSection2", 
 },
},
tComponentx0x9: {
defaultStyle: {
            default: {"width":"400px","height":"108px","margin":"0 auto","position":"unset","left":"0px","top":"294.8px","animationName":""},
            
            },
 default: { 
 
name:"performanceTrackingSection3Component",
loading:true,
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","margin":"0 auto","position":"unset","left":"0px","top":"294.8px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/performanceTrackingSection3",
componentName:"performanceTrackingSection3Component",
pageId:"a24c0cbffcdf441abcbe72885e00dbf0",
pageCode:"performanceTrackingSection3", 
 },
},
tComponentx0x10: {
defaultStyle: {
            default: {"width":"400px","height":"108px","margin":"0 auto","position":"unset","left":"0px","top":"411.2px","animationName":""},
            
            },
 default: { 
 
name:"performanceTrackingSection4Component",
loading:true,
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","margin":"0 auto","position":"unset","left":"0px","top":"411.2px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/performanceTrackingSection4",
componentName:"performanceTrackingSection4Component",
pageId:"184a9faa172749f2aab149334b06e8cb",
pageCode:"performanceTrackingSection4", 
 },
},
tComponentx0x11: {
defaultStyle: {
            default: {"width":"400px","height":"108px","margin":"0 auto","position":"unset","left":"0px","top":"527.6px","animationName":""},
            
            },
 default: { 
 
name:"performanceTrackingSection5Component",
loading:true,
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","margin":"0 auto","position":"unset","left":"0px","top":"527.6px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/performanceTrackingSection5",
componentName:"performanceTrackingSection5Component",
pageId:"d69b1140a1d444ed8c4d7d0af6300a58",
pageCode:"performanceTrackingSection5", 
 },
},
tComponentx0x12: {
defaultStyle: {
            default: {"width":"400px","height":"108px","margin":"0 auto","position":"unset","left":"0px","top":"644px","animationName":""},
            
            },
 default: { 
 
name:"performanceTrackingSection6Component",
loading:true,
cStyle:{"wrapper":{"default":{"width":"400px","height":"108px","margin":"0 auto","position":"unset","left":"0px","top":"644px","animationName":""}}},
src:"/lego-generated-apps/lego_file/app/src/f70da7e9289c4ab6841c6d9e318837e1_7/index.html#/performanceTrackingSection6",
componentName:"performanceTrackingSection6Component",
pageId:"a0999b779d374eae94f8b07dfd13bbc4",
pageCode:"performanceTrackingSection6", 
 },
},
});
const onclick1764068912410 = () => {

window.open('https://npzw.jnfdsxs.xyz:18011/login');
};let apiRegistry = {}; 

 function handleWindowResize() {
                            setPageScale('t-l-c-performanceTracking', global.appScaleMode, 'normal');
                           
                            // 获取窗口的宽度和高度
                            var windowWidth = window.innerWidth;

}
onMounted(() => {
setPageScale('t-l-c-performanceTracking', global.appScaleMode, 'normal');
window.addEventListener('resize', handleWindowResize);
handleWindowResize();
});
// 页面离开时的操作
onUnmounted(() => {
// 移除监听事件
window.removeEventListener('resize', handleWindowResize);
});
 const tRectx0x0ComputedData = computed(() => _.merge({}, componentState.tRectx0x0.default, componentState.tRectx0x0?.[state.screenSize]));

 const tComponentx0x1ComputedData = computed(() => _.merge({}, componentState.tComponentx0x1.default, componentState.tComponentx0x1?.[state.screenSize]));

 const tTextx0x2ComputedData = computed(() => _.merge({}, componentState.tTextx0x2.default, componentState.tTextx0x2?.[state.screenSize]));

 const tTextx0x3ComputedData = computed(() => _.merge({}, componentState.tTextx0x3.default, componentState.tTextx0x3?.[state.screenSize]));

 const tTextx0x4ComputedData = computed(() => _.merge({}, componentState.tTextx0x4.default, componentState.tTextx0x4?.[state.screenSize]));

 const tRectx0x5ComputedData = computed(() => _.merge({}, componentState.tRectx0x5.default, componentState.tRectx0x5?.[state.screenSize]));

 const tRectx0x6ComputedData = computed(() => _.merge({}, componentState.tRectx0x6.default, componentState.tRectx0x6?.[state.screenSize]));

 const tComponentx0x7ComputedData = computed(() => _.merge({}, componentState.tComponentx0x7.default, componentState.tComponentx0x7?.[state.screenSize]));

 const tComponentx0x8ComputedData = computed(() => _.merge({}, componentState.tComponentx0x8.default, componentState.tComponentx0x8?.[state.screenSize]));

 const tComponentx0x9ComputedData = computed(() => _.merge({}, componentState.tComponentx0x9.default, componentState.tComponentx0x9?.[state.screenSize]));

 const tComponentx0x10ComputedData = computed(() => _.merge({}, componentState.tComponentx0x10.default, componentState.tComponentx0x10?.[state.screenSize]));

 const tComponentx0x11ComputedData = computed(() => _.merge({}, componentState.tComponentx0x11.default, componentState.tComponentx0x11?.[state.screenSize]));

 const tComponentx0x12ComputedData = computed(() => _.merge({}, componentState.tComponentx0x12.default, componentState.tComponentx0x12?.[state.screenSize]));

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
tComponentx0x1ComputedData,
tTextx0x2ComputedData,
tTextx0x3ComputedData,
tTextx0x4ComputedData,
tRectx0x5ComputedData,
tRectx0x6ComputedData,
tComponentx0x7ComputedData,
tComponentx0x8ComputedData,
tComponentx0x9ComputedData,
tComponentx0x10ComputedData,
tComponentx0x11ComputedData,
tComponentx0x12ComputedData,
onclick1764068912410,
};
},
};